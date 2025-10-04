import requests
import json
import datetime
import webbrowser
from typing import Dict, List, Optional

class NASADataFetcher:
    def __init__(self, api_key: str):
        self.api_key = api_key
        self.base_urls = {
            'weather': 'https://power.larc.nasa.gov/api/temporal/daily/point',
            'imagery': 'https://api.nasa.gov/planetary/earth/imagery',
            'landsat': 'https://api.nasa.gov/planetary/earth/assets',
            'aster': 'https://api.nasa.gov/planetary/earth/imagery/aster',
            'epic': 'https://api.nasa.gov/EPIC/api/natural',
            'insight': 'https://api.nasa.gov/insight_weather/'
        }
    
    def get_default_location(self) -> Dict[str, float]:
        """Return default coordinates (Central US - good for agriculture)"""
        return {'lat': 39.8283, 'lon': -98.5795}  # Geographic center of US
    
    def fetch_weather_data(self, lat: float, lon: float) -> Dict:
        """Fetch comprehensive weather data from NASA POWER API"""
        end_date = datetime.datetime.now()
        start_date = end_date - datetime.timedelta(days=30)
        
        params = {
            'parameters': 'T2M,PRECTOT,WS2M,RH2M,ALLSKY_SFC_SW_DWN,PS,CLRSKY_SFC_SW_DWN',
            'community': 'AG',
            'longitude': lon,
            'latitude': lat,
            'start': start_date.strftime('%Y%m%d'),
            'end': end_date.strftime('%Y%m%d'),
            'format': 'JSON'
        }
        
        try:
            print("Fetching weather data from NASA POWER API...")
            response = requests.get(self.base_urls['weather'], params=params, timeout=30)
            response.raise_for_status()
            data = response.json()
            
            # Process weather data
            if 'properties' in data and 'parameter' in data['properties']:
                parameters = data['properties']['parameter']
                summary = {}
                for param, values in parameters.items():
                    if values:
                        recent_values = list(values.values())[-7:]  # Last 7 days
                        if recent_values:
                            summary[param] = {
                                'latest': recent_values[-1],
                                'avg_7day': sum(recent_values) / len(recent_values),
                                'unit': self.get_weather_unit(param)
                            }
                return {'summary': summary, 'raw_data': data}
            return data
            
        except requests.exceptions.RequestException as e:
            return {'error': f"Weather API error: {str(e)}"}

    def get_weather_unit(self, parameter: str) -> str:
        """Get unit for weather parameters"""
        units = {
            'T2M': '°C',  # Temperature at 2 meters
            'PRECTOT': 'mm/day',  # Precipitation
            'WS2M': 'm/s',  # Wind speed at 2 meters
            'RH2M': '%',  # Relative humidity
            'ALLSKY_SFC_SW_DWN': 'kWh/m²/day',  # Solar radiation
            'PS': 'kPa',  # Surface pressure
            'CLRSKY_SFC_SW_DWN': 'kWh/m²/day'  # Clear sky solar radiation
        }
        return units.get(parameter, 'unknown')

    def fetch_satellite_imagery(self, lat: float, lon: float) -> Dict:
        """Fetch latest satellite imagery from NASA Earth API"""
        # Use recent date (within last 30 days)
        target_date = (datetime.datetime.now() - datetime.timedelta(days=15)).strftime('%Y-%m-%d')
        
        params = {
            'lon': lon,
            'lat': lat,
            'date': target_date,
            'dim': 0.15,  # 0.15 degrees area
            'api_key': self.api_key
        }
        
        try:
            print("Fetching satellite imagery...")
            response = requests.get(self.base_urls['imagery'], params=params, timeout=30)
            
            if response.status_code == 200:
                return {
                    'image_url': response.url,
                    'coordinates': {'lat': lat, 'lon': lon},
                    'date': target_date,
                    'type': 'Landsat 8'
                }
            else:
                return {'error': f'No imagery available for this location. Status: {response.status_code}'}
                
        except requests.exceptions.RequestException as e:
            return {'error': f"Imagery API error: {str(e)}"}

    def fetch_landsat_data(self, lat: float, lon: float) -> Dict:
        """Fetch Landsat metadata and available scenes"""
        # Try to get data from last 90 days
        start_date = (datetime.datetime.now() - datetime.timedelta(days=90)).strftime('%Y-%m-%d')
        
        params = {
            'lon': lon,
            'lat': lat,
            'begin': start_date,
            'api_key': self.api_key
        }
        
        try:
            print("Fetching Landsat data...")
            response = requests.get(self.base_urls['landsat'], params=params, timeout=30)
            
            if response.status_code == 200:
                data = response.json()
                if data and 'count' in data and data['count'] > 0:
                    return {
                        'available_scenes': data['count'],
                        'latest_date': data['results'][0]['date'],
                        'cloud_score': data['results'][0].get('cloud_score', 'N/A'),
                        'url': data['results'][0]['url']
                    }
                else:
                    return {'info': 'No Landsat scenes available for this location in the last 90 days'}
            else:
                return {'error': f'Landsat API returned status: {response.status_code}'}
                
        except requests.exceptions.RequestException as e:
            return {'error': f"Landsat API error: {str(e)}"}

    def fetch_agriculture_indices(self, lat: float, lon: float) -> Dict:
        """Calculate agriculture-related indices using weather data"""
        try:
            # Get weather data for agriculture analysis
            weather_data = self.fetch_weather_data(lat, lon)
            
            if 'error' in weather_data:
                return {'error': weather_data['error']}
            
            if 'summary' in weather_data:
                summary = weather_data['summary']
                
                # Calculate agriculture indices
                agriculture_analysis = {
                    'growing_conditions': self.assess_growing_conditions(summary),
                    'drought_risk': self.calculate_drought_risk(summary),
                    'crop_suitability': self.assess_crop_suitability(summary, lat),
                    'recommendations': self.generate_recommendations(summary, lat)
                }
                
                return agriculture_analysis
            else:
                return {'error': 'No weather data available for agriculture analysis'}
                
        except Exception as e:
            return {'error': f"Agriculture analysis error: {str(e)}"}

    def assess_growing_conditions(self, weather_summary: Dict) -> str:
        """Assess overall growing conditions"""
        if 'T2M' not in weather_summary or 'PRECTOT' not in weather_summary:
            return "Insufficient data"
        
        temp = weather_summary['T2M']['latest']
        precip = weather_summary['PRECTOT']['latest']
        
        if 15 <= temp <= 30 and precip >= 1:
            return "Excellent"
        elif 10 <= temp <= 35 and precip >= 0.5:
            return "Good"
        elif 5 <= temp <= 40:
            return "Moderate"
        else:
            return "Poor"

    def calculate_drought_risk(self, weather_summary: Dict) -> str:
        """Calculate drought risk based on precipitation and temperature"""
        if 'PRECTOT' not in weather_summary or 'T2M' not in weather_summary:
            return "Unknown"
        
        precip = weather_summary['PRECTOT']['avg_7day']
        temp = weather_summary['T2M']['avg_7day']
        
        if precip < 0.2 and temp > 25:
            return "High"
        elif precip < 0.5 and temp > 20:
            return "Moderate"
        elif precip < 1.0:
            return "Low"
        else:
            return "Very Low"

    def assess_crop_suitability(self, weather_summary: Dict, lat: float) -> List[str]:
        """Recommend suitable crops based on climate and location"""
        suitable_crops = []
        
        if 'T2M' not in weather_summary:
            return ["Insufficient data"]
        
        avg_temp = weather_summary['T2M']['avg_7day']
        
        # Basic crop recommendations based on temperature
        if avg_temp >= 20:
            suitable_crops.extend(["Corn", "Soybeans", "Cotton", "Rice"])
        if 15 <= avg_temp <= 25:
            suitable_crops.extend(["Wheat", "Barley", "Oats"])
        if avg_temp >= 10:
            suitable_crops.extend(["Potatoes", "Tomatoes", "Vegetables"])
        
        return list(set(suitable_crops))  # Remove duplicates

    def generate_recommendations(self, weather_summary: Dict, lat: float) -> List[str]:
        """Generate agricultural recommendations"""
        recommendations = []
        
        if 'PRECTOT' in weather_summary:
            precip = weather_summary['PRECTOT']['latest']
            if precip < 0.5:
                recommendations.append("Consider irrigation - low precipitation")
            elif precip > 5.0:
                recommendations.append("Monitor for waterlogging - high precipitation")
        
        if 'T2M' in weather_summary:
            temp = weather_summary['T2M']['latest']
            if temp < 5:
                recommendations.append("Protect crops from frost")
            elif temp > 35:
                recommendations.append("Provide shade and extra water for heat stress")
        
        if 'ALLSKY_SFC_SW_DWN' in weather_summary:
            solar = weather_summary['ALLSKY_SFC_SW_DWN']['latest']
            if solar > 6:
                recommendations.append("Good solar radiation for photosynthesis")
        
        return recommendations if recommendations else ["Conditions appear normal for growing season"]

    def fetch_epic_imagery(self) -> Dict:
        """Fetch EPIC (Earth Polychromatic Imaging Camera) data"""
        try:
            print("Fetching EPIC imagery...")
            response = requests.get(f"{self.base_urls['epic']}?api_key={self.api_key}", timeout=30)
            
            if response.status_code == 200:
                data = response.json()
                if data:
                    latest_image = data[0]
                    return {
                        'image_url': f"https://epic.gsfc.nasa.gov/epic-archive/jpg/{latest_image['image']}.jpg",
                        'date': latest_image['date'],
                        'caption': latest_image['caption'],
                        'coordinate': latest_image['centroid_coordinates']
                    }
            return {'error': 'No EPIC imagery available'}
            
        except requests.exceptions.RequestException as e:
            return {'error': f"EPIC API error: {str(e)}"}

    def fetch_all_data(self, lat: float = None, lon: float = None) -> Dict:
        """Fetch all available NASA data for given coordinates"""
        if lat is None or lon is None:
            location = self.get_default_location()
            lat, lon = location['lat'], location['lon']
        
        print(f"\n📍 Fetching NASA data for coordinates: {lat:.4f}, {lon:.4f}")
        print("=" * 60)
        
        all_data = {
            'location': {
                'latitude': lat,
                'longitude': lon,
                'timestamp': datetime.datetime.now().isoformat()
            },
            'weather_data': self.fetch_weather_data(lat, lon),
            'satellite_imagery': self.fetch_satellite_imagery(lat, lon),
            'landsat_data': self.fetch_landsat_data(lat, lon),
            'agriculture_analysis': self.fetch_agriculture_indices(lat, lon),
            'epic_imagery': self.fetch_epic_imagery()
        }
        
        return all_data

    def display_summary(self, data: Dict):
        """Display a formatted summary of the fetched data"""
        print("\n" + "=" * 60)
        print("🌍 NASA DATA SUMMARY")
        print("=" * 60)
        
        loc = data['location']
        print(f"📍 Location: {loc['latitude']:.4f}, {loc['longitude']:.4f}")
        print(f"🕒 Time: {loc['timestamp']}")
        print("\n" + "-" * 40)
        
        # Weather Summary
        if 'weather_data' in data and 'summary' in data['weather_data']:
            print("🌤️  WEATHER DATA (Last 30 days):")
            weather = data['weather_data']['summary']
            for param, info in weather.items():
                print(f"   {param}: {info['latest']:.2f} {info['unit']} (7-day avg: {info['avg_7day']:.2f} {info['unit']})")
        
        # Agriculture Analysis
        if 'agriculture_analysis' in data and 'error' not in data['agriculture_analysis']:
            ag = data['agriculture_analysis']
            print(f"\n🌱 AGRICULTURE ANALYSIS:")
            print(f"   Growing Conditions: {ag.get('growing_conditions', 'N/A')}")
            print(f"   Drought Risk: {ag.get('drought_risk', 'N/A')}")
            print(f"   Suitable Crops: {', '.join(ag.get('crop_suitability', []))}")
            print(f"   Recommendations: {', '.join(ag.get('recommendations', []))}")
        
        # Satellite Data
        if 'satellite_imagery' in data and 'error' not in data['satellite_imagery']:
            img = data['satellite_imagery']
            print(f"\n🛰️  SATELLITE IMAGERY:")
            print(f"   Type: {img.get('type', 'N/A')}")
            print(f"   Date: {img.get('date', 'N/A')}")
            if 'image_url' in img:
                print(f"   URL: {img['image_url']}")
        
        # Landsat Data
        if 'landsat_data' in data and 'available_scenes' in data['landsat_data']:
            ls = data['landsat_data']
            print(f"\n📡 LANDSAT DATA:")
            print(f"   Available Scenes: {ls.get('available_scenes', 0)}")
            print(f"   Latest Date: {ls.get('latest_date', 'N/A')}")
            print(f"   Cloud Score: {ls.get('cloud_score', 'N/A')}")

    def save_data_to_file(self, data: Dict, filename: str = None):
        """Save fetched data to JSON file"""
        if not filename:
            timestamp = datetime.datetime.now().strftime('%Y%m%d_%H%M%S')
            filename = f'nasa_agriculture_data_{timestamp}.json'
        
        try:
            with open(filename, 'w', encoding='utf-8') as f:
                json.dump(data, f, indent=2, ensure_ascii=False)
            print(f"\n💾 Data saved to: {filename}")
        except Exception as e:
            print(f"Error saving file: {e}")

def main():
    # Initialize with your NASA API key
    api_key = "MN7A4sg6nekv20Ybe9dOHOSgNdqYcjbQDojaA7DT"
    
    print("🚀 NASA Agriculture & Weather Data Fetcher")
    print("Initializing with your API key...")
    
    nasa_fetcher = NASADataFetcher(api_key)
    
    try:
        # Fetch all data for default location (Central US)
        data = nasa_fetcher.fetch_all_data()
        
        # Display summary
        nasa_fetcher.display_summary(data)
        
        # Save to file
        nasa_fetcher.save_data_to_file(data)
        
        # Optional: Open satellite image in browser if available
        if 'satellite_imagery' in data and 'image_url' in data['satellite_imagery']:
            print(f"\n🌐 Opening satellite image in browser...")
            webbrowser.open(data['satellite_imagery']['image_url'])
            
    except Exception as e:
        print(f"❌ Error during data fetching: {e}")

if __name__ == "__main__":
    main()
