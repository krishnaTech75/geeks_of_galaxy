/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/weather/aqi/route";
exports.ids = ["app/api/weather/aqi/route"];
exports.modules = {

/***/ "(rsc)/./app/api/weather/aqi/route.ts":
/*!**************************************!*\
  !*** ./app/api/weather/aqi/route.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_supabase_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/supabase/server */ \"(rsc)/./lib/supabase/server.ts\");\n/* harmony import */ var _lib_weather_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/weather/api */ \"(rsc)/./lib/weather/api.ts\");\n\n\n\nasync function GET(request) {\n    try {\n        const supabase = await (0,_lib_supabase_server__WEBPACK_IMPORTED_MODULE_1__.createClient)();\n        const { data: { user } } = await supabase.auth.getUser();\n        if (!user) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Unauthorized\"\n            }, {\n                status: 401\n            });\n        }\n        const { searchParams } = new URL(request.url);\n        const farmId = searchParams.get(\"farmId\");\n        if (!farmId) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Farm ID required\"\n            }, {\n                status: 400\n            });\n        }\n        // Fetch farm location\n        const { data: farm } = await supabase.from(\"farms\").select(\"location_lat, location_lng\").eq(\"id\", farmId).single();\n        if (!farm || !farm.location_lat || !farm.location_lng) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Farm location not set\"\n            }, {\n                status: 400\n            });\n        }\n        const aqiData = await (0,_lib_weather_api__WEBPACK_IMPORTED_MODULE_2__.fetchAQIData)(Number(farm.location_lat), Number(farm.location_lng));\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            aqi: aqiData\n        });\n    } catch (error) {\n        console.error(\"[v0] AQI API error:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Internal server error\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3dlYXRoZXIvYXFpL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBMEM7QUFDVTtBQUNKO0FBRXpDLGVBQWVHLElBQUlDLE9BQWdCO0lBQ3hDLElBQUk7UUFDRixNQUFNQyxXQUFXLE1BQU1KLGtFQUFZQTtRQUVuQyxNQUFNLEVBQ0pLLE1BQU0sRUFBRUMsSUFBSSxFQUFFLEVBQ2YsR0FBRyxNQUFNRixTQUFTRyxJQUFJLENBQUNDLE9BQU87UUFFL0IsSUFBSSxDQUFDRixNQUFNO1lBQ1QsT0FBT1AscURBQVlBLENBQUNVLElBQUksQ0FBQztnQkFBRUMsT0FBTztZQUFlLEdBQUc7Z0JBQUVDLFFBQVE7WUFBSTtRQUNwRTtRQUVBLE1BQU0sRUFBRUMsWUFBWSxFQUFFLEdBQUcsSUFBSUMsSUFBSVYsUUFBUVcsR0FBRztRQUM1QyxNQUFNQyxTQUFTSCxhQUFhSSxHQUFHLENBQUM7UUFFaEMsSUFBSSxDQUFDRCxRQUFRO1lBQ1gsT0FBT2hCLHFEQUFZQSxDQUFDVSxJQUFJLENBQUM7Z0JBQUVDLE9BQU87WUFBbUIsR0FBRztnQkFBRUMsUUFBUTtZQUFJO1FBQ3hFO1FBRUEsc0JBQXNCO1FBQ3RCLE1BQU0sRUFBRU4sTUFBTVksSUFBSSxFQUFFLEdBQUcsTUFBTWIsU0FBU2MsSUFBSSxDQUFDLFNBQVNDLE1BQU0sQ0FBQyw4QkFBOEJDLEVBQUUsQ0FBQyxNQUFNTCxRQUFRTSxNQUFNO1FBRWhILElBQUksQ0FBQ0osUUFBUSxDQUFDQSxLQUFLSyxZQUFZLElBQUksQ0FBQ0wsS0FBS00sWUFBWSxFQUFFO1lBQ3JELE9BQU94QixxREFBWUEsQ0FBQ1UsSUFBSSxDQUFDO2dCQUFFQyxPQUFPO1lBQXdCLEdBQUc7Z0JBQUVDLFFBQVE7WUFBSTtRQUM3RTtRQUVBLE1BQU1hLFVBQVUsTUFBTXZCLDhEQUFZQSxDQUFDd0IsT0FBT1IsS0FBS0ssWUFBWSxHQUFHRyxPQUFPUixLQUFLTSxZQUFZO1FBRXRGLE9BQU94QixxREFBWUEsQ0FBQ1UsSUFBSSxDQUFDO1lBQUVpQixLQUFLRjtRQUFRO0lBQzFDLEVBQUUsT0FBT2QsT0FBTztRQUNkaUIsUUFBUWpCLEtBQUssQ0FBQyx1QkFBdUJBO1FBQ3JDLE9BQU9YLHFEQUFZQSxDQUFDVSxJQUFJLENBQUM7WUFBRUMsT0FBTztRQUF3QixHQUFHO1lBQUVDLFFBQVE7UUFBSTtJQUM3RTtBQUNGIiwic291cmNlcyI6WyIvd29ya3NwYWNlcy9zZWN1cmEvR2Vla3Nfb2ZfZ2FsYXh5L2tyaXNoaV9zYXRoaS9hcHAvYXBpL3dlYXRoZXIvYXFpL3JvdXRlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiXG5pbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tIFwiQC9saWIvc3VwYWJhc2Uvc2VydmVyXCJcbmltcG9ydCB7IGZldGNoQVFJRGF0YSB9IGZyb20gXCJAL2xpYi93ZWF0aGVyL2FwaVwiXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQocmVxdWVzdDogUmVxdWVzdCkge1xuICB0cnkge1xuICAgIGNvbnN0IHN1cGFiYXNlID0gYXdhaXQgY3JlYXRlQ2xpZW50KClcblxuICAgIGNvbnN0IHtcbiAgICAgIGRhdGE6IHsgdXNlciB9LFxuICAgIH0gPSBhd2FpdCBzdXBhYmFzZS5hdXRoLmdldFVzZXIoKVxuXG4gICAgaWYgKCF1c2VyKSB7XG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogXCJVbmF1dGhvcml6ZWRcIiB9LCB7IHN0YXR1czogNDAxIH0pXG4gICAgfVxuXG4gICAgY29uc3QgeyBzZWFyY2hQYXJhbXMgfSA9IG5ldyBVUkwocmVxdWVzdC51cmwpXG4gICAgY29uc3QgZmFybUlkID0gc2VhcmNoUGFyYW1zLmdldChcImZhcm1JZFwiKVxuXG4gICAgaWYgKCFmYXJtSWQpIHtcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiBcIkZhcm0gSUQgcmVxdWlyZWRcIiB9LCB7IHN0YXR1czogNDAwIH0pXG4gICAgfVxuXG4gICAgLy8gRmV0Y2ggZmFybSBsb2NhdGlvblxuICAgIGNvbnN0IHsgZGF0YTogZmFybSB9ID0gYXdhaXQgc3VwYWJhc2UuZnJvbShcImZhcm1zXCIpLnNlbGVjdChcImxvY2F0aW9uX2xhdCwgbG9jYXRpb25fbG5nXCIpLmVxKFwiaWRcIiwgZmFybUlkKS5zaW5nbGUoKVxuXG4gICAgaWYgKCFmYXJtIHx8ICFmYXJtLmxvY2F0aW9uX2xhdCB8fCAhZmFybS5sb2NhdGlvbl9sbmcpIHtcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiBcIkZhcm0gbG9jYXRpb24gbm90IHNldFwiIH0sIHsgc3RhdHVzOiA0MDAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBhcWlEYXRhID0gYXdhaXQgZmV0Y2hBUUlEYXRhKE51bWJlcihmYXJtLmxvY2F0aW9uX2xhdCksIE51bWJlcihmYXJtLmxvY2F0aW9uX2xuZykpXG5cbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBhcWk6IGFxaURhdGEgfSlcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiW3YwXSBBUUkgQVBJIGVycm9yOlwiLCBlcnJvcilcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogXCJJbnRlcm5hbCBzZXJ2ZXIgZXJyb3JcIiB9LCB7IHN0YXR1czogNTAwIH0pXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJjcmVhdGVDbGllbnQiLCJmZXRjaEFRSURhdGEiLCJHRVQiLCJyZXF1ZXN0Iiwic3VwYWJhc2UiLCJkYXRhIiwidXNlciIsImF1dGgiLCJnZXRVc2VyIiwianNvbiIsImVycm9yIiwic3RhdHVzIiwic2VhcmNoUGFyYW1zIiwiVVJMIiwidXJsIiwiZmFybUlkIiwiZ2V0IiwiZmFybSIsImZyb20iLCJzZWxlY3QiLCJlcSIsInNpbmdsZSIsImxvY2F0aW9uX2xhdCIsImxvY2F0aW9uX2xuZyIsImFxaURhdGEiLCJOdW1iZXIiLCJhcWkiLCJjb25zb2xlIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/weather/aqi/route.ts\n");

/***/ }),

/***/ "(rsc)/./lib/supabase/server.ts":
/*!********************************!*\
  !*** ./lib/supabase/server.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createClient: () => (/* binding */ createClient)\n/* harmony export */ });\n/* harmony import */ var _supabase_ssr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @supabase/ssr */ \"(rsc)/./node_modules/@supabase/ssr/dist/module/index.js\");\n/* harmony import */ var next_headers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/headers */ \"(rsc)/./node_modules/next/dist/api/headers.js\");\n\n\nasync function createClient() {\n    const cookieStore = await (0,next_headers__WEBPACK_IMPORTED_MODULE_1__.cookies)();\n    return (0,_supabase_ssr__WEBPACK_IMPORTED_MODULE_0__.createServerClient)(\"https://xugonlstwkpixelvoxpt.supabase.co\", \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh1Z29ubHN0d2twaXhlbHZveHB0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk1NjQ1MTcsImV4cCI6MjA3NTE0MDUxN30.Jjjsjj50O9ak8iuDrh044TRpjlysmKcWrXR3NFcA70o\", {\n        cookies: {\n            getAll () {\n                return cookieStore.getAll();\n            },\n            setAll (cookiesToSet) {\n                try {\n                    cookiesToSet.forEach(({ name, value, options })=>cookieStore.set(name, value, options));\n                } catch  {\n                // The \"setAll\" method was called from a Server Component.\n                // This can be ignored if you have middleware refreshing\n                // user sessions.\n                }\n            }\n        }\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvc3VwYWJhc2Uvc2VydmVyLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFrRDtBQUNaO0FBRS9CLGVBQWVFO0lBQ3BCLE1BQU1DLGNBQWMsTUFBTUYscURBQU9BO0lBRWpDLE9BQU9ELGlFQUFrQkEsQ0FBQ0ksMENBQW9DLEVBQUdBLGtOQUF5QyxFQUFHO1FBQzNHSCxTQUFTO1lBQ1BPO2dCQUNFLE9BQU9MLFlBQVlLLE1BQU07WUFDM0I7WUFDQUMsUUFBT0MsWUFBWTtnQkFDakIsSUFBSTtvQkFDRkEsYUFBYUMsT0FBTyxDQUFDLENBQUMsRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUVDLE9BQU8sRUFBRSxHQUFLWCxZQUFZWSxHQUFHLENBQUNILE1BQU1DLE9BQU9DO2dCQUNsRixFQUFFLE9BQU07Z0JBQ04sMERBQTBEO2dCQUMxRCx3REFBd0Q7Z0JBQ3hELGlCQUFpQjtnQkFDbkI7WUFDRjtRQUNGO0lBQ0Y7QUFDRiIsInNvdXJjZXMiOlsiL3dvcmtzcGFjZXMvc2VjdXJhL0dlZWtzX29mX2dhbGF4eS9rcmlzaGlfc2F0aGkvbGliL3N1cGFiYXNlL3NlcnZlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTZXJ2ZXJDbGllbnQgfSBmcm9tIFwiQHN1cGFiYXNlL3NzclwiXG5pbXBvcnQgeyBjb29raWVzIH0gZnJvbSBcIm5leHQvaGVhZGVyc1wiXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVDbGllbnQoKSB7XG4gIGNvbnN0IGNvb2tpZVN0b3JlID0gYXdhaXQgY29va2llcygpXG5cbiAgcmV0dXJuIGNyZWF0ZVNlcnZlckNsaWVudChwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVVBBQkFTRV9VUkwhLCBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVVBBQkFTRV9BTk9OX0tFWSEsIHtcbiAgICBjb29raWVzOiB7XG4gICAgICBnZXRBbGwoKSB7XG4gICAgICAgIHJldHVybiBjb29raWVTdG9yZS5nZXRBbGwoKVxuICAgICAgfSxcbiAgICAgIHNldEFsbChjb29raWVzVG9TZXQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb29raWVzVG9TZXQuZm9yRWFjaCgoeyBuYW1lLCB2YWx1ZSwgb3B0aW9ucyB9KSA9PiBjb29raWVTdG9yZS5zZXQobmFtZSwgdmFsdWUsIG9wdGlvbnMpKVxuICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAvLyBUaGUgXCJzZXRBbGxcIiBtZXRob2Qgd2FzIGNhbGxlZCBmcm9tIGEgU2VydmVyIENvbXBvbmVudC5cbiAgICAgICAgICAvLyBUaGlzIGNhbiBiZSBpZ25vcmVkIGlmIHlvdSBoYXZlIG1pZGRsZXdhcmUgcmVmcmVzaGluZ1xuICAgICAgICAgIC8vIHVzZXIgc2Vzc2lvbnMuXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfSxcbiAgfSlcbn1cbiJdLCJuYW1lcyI6WyJjcmVhdGVTZXJ2ZXJDbGllbnQiLCJjb29raWVzIiwiY3JlYXRlQ2xpZW50IiwiY29va2llU3RvcmUiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfU1VQQUJBU0VfVVJMIiwiTkVYVF9QVUJMSUNfU1VQQUJBU0VfQU5PTl9LRVkiLCJnZXRBbGwiLCJzZXRBbGwiLCJjb29raWVzVG9TZXQiLCJmb3JFYWNoIiwibmFtZSIsInZhbHVlIiwib3B0aW9ucyIsInNldCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./lib/supabase/server.ts\n");

/***/ }),

/***/ "(rsc)/./lib/weather/api.ts":
/*!****************************!*\
  !*** ./lib/weather/api.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchAQIData: () => (/* binding */ fetchAQIData),\n/* harmony export */   fetchWeatherForecast: () => (/* binding */ fetchWeatherForecast),\n/* harmony export */   generateWeatherAlerts: () => (/* binding */ generateWeatherAlerts)\n/* harmony export */ });\n// Weather API Integration (using NASA POWER and simulated data)\nasync function fetchWeatherForecast(lat, lon, days = 7) {\n    // In production, this would use NASA POWER API or OpenWeatherMap\n    // For now, we'll simulate realistic weather data\n    const forecast = [];\n    const today = new Date();\n    for(let i = 0; i < days; i++){\n        const date = new Date(today);\n        date.setDate(date.getDate() + i);\n        // Simulate realistic Indian weather patterns\n        const baseTemp = 28 + Math.sin(i / 7) * 5;\n        const tempVariation = Math.random() * 4;\n        forecast.push({\n            date: date.toISOString().split(\"T\")[0],\n            temperature: Number.parseFloat((baseTemp + tempVariation).toFixed(1)),\n            temperatureMin: Number.parseFloat((baseTemp - 3).toFixed(1)),\n            temperatureMax: Number.parseFloat((baseTemp + 5).toFixed(1)),\n            humidity: Math.floor(60 + Math.random() * 30),\n            precipitation: Math.random() > 0.7 ? Number.parseFloat((Math.random() * 20).toFixed(1)) : 0,\n            windSpeed: Number.parseFloat((5 + Math.random() * 10).toFixed(1)),\n            condition: Math.random() > 0.7 ? \"Rainy\" : Math.random() > 0.5 ? \"Cloudy\" : \"Sunny\",\n            icon: Math.random() > 0.7 ? \"cloud-rain\" : Math.random() > 0.5 ? \"cloud\" : \"sun\"\n        });\n    }\n    return forecast;\n}\nasync function fetchAQIData(lat, lon) {\n    // In production, this would use NASA POWER or local AQI APIs\n    // Simulate AQI data\n    const aqi = Math.floor(50 + Math.random() * 100);\n    let category = \"Good\";\n    if (aqi > 300) category = \"Hazardous\";\n    else if (aqi > 200) category = \"Very Unhealthy\";\n    else if (aqi > 150) category = \"Unhealthy\";\n    else if (aqi > 100) category = \"Unhealthy for Sensitive Groups\";\n    else if (aqi > 50) category = \"Moderate\";\n    return {\n        date: new Date().toISOString().split(\"T\")[0],\n        aqi,\n        category,\n        pm25: Number.parseFloat((aqi * 0.4).toFixed(1)),\n        pm10: Number.parseFloat((aqi * 0.6).toFixed(1)),\n        o3: Number.parseFloat((aqi * 0.3).toFixed(1)),\n        no2: Number.parseFloat((aqi * 0.2).toFixed(1)),\n        so2: Number.parseFloat((aqi * 0.15).toFixed(1)),\n        co: Number.parseFloat((aqi * 0.5).toFixed(1))\n    };\n}\nfunction generateWeatherAlerts(forecast, cropRequirements) {\n    const alerts = [];\n    // Check for extreme temperatures\n    forecast.forEach((day, index)=>{\n        if (day.temperatureMax > 40) {\n            alerts.push({\n                id: `heat-${index}`,\n                type: \"heat\",\n                severity: \"high\",\n                title: \"Extreme Heat Warning\",\n                description: `Temperature expected to reach ${day.temperatureMax}°C. Increase irrigation and provide shade if possible.`,\n                startDate: day.date,\n                endDate: day.date\n            });\n        }\n        if (day.temperatureMin < 10) {\n            alerts.push({\n                id: `cold-${index}`,\n                type: \"cold\",\n                severity: \"medium\",\n                title: \"Cold Weather Alert\",\n                description: `Temperature may drop to ${day.temperatureMin}°C. Protect sensitive crops from frost damage.`,\n                startDate: day.date,\n                endDate: day.date\n            });\n        }\n        if (day.precipitation > 50) {\n            alerts.push({\n                id: `rain-${index}`,\n                type: \"rain\",\n                severity: \"medium\",\n                title: \"Heavy Rainfall Expected\",\n                description: `${day.precipitation}mm of rain forecasted. Ensure proper drainage to prevent waterlogging.`,\n                startDate: day.date,\n                endDate: day.date\n            });\n        }\n        if (day.windSpeed > 30) {\n            alerts.push({\n                id: `wind-${index}`,\n                type: \"wind\",\n                severity: \"medium\",\n                title: \"Strong Wind Warning\",\n                description: `Wind speeds up to ${day.windSpeed} km/h expected. Secure loose structures and protect tall crops.`,\n                startDate: day.date,\n                endDate: day.date\n            });\n        }\n    });\n    return alerts;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WUFDdEJjLE9BQU8xQixJQUFJLENBQUM7Z0JBQ1Y4QixJQUFJLENBQUMsS0FBSyxFQUFFRCxPQUFPO2dCQUNuQkUsTUFBTTtnQkFDTkMsVUFBVTtnQkFDVkMsT0FBTztnQkFDUEMsYUFBYSxDQUFDLGtCQUFrQixFQUFFTixJQUFJaEIsU0FBUyxDQUFDLCtEQUErRCxDQUFDO2dCQUNoSHVCLFdBQVdQLElBQUlwQyxJQUFJO2dCQUNuQjRDLFNBQVNSLElBQUlwQyxJQUFJO1lBQ25CO1FBQ0Y7SUFDRjtJQUVBLE9BQU9rQztBQUNUIiwic291cmNlcyI6WyIvd29ya3NwYWNlcy9zZWN1cmEvR2Vla3Nfb2ZfZ2FsYXh5L2tyaXNoaV9zYXRoaS9saWIvd2VhdGhlci9hcGkudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gV2VhdGhlciBBUEkgSW50ZWdyYXRpb24gKHVzaW5nIE5BU0EgUE9XRVIgYW5kIHNpbXVsYXRlZCBkYXRhKVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hXZWF0aGVyRm9yZWNhc3QobGF0OiBudW1iZXIsIGxvbjogbnVtYmVyLCBkYXlzID0gNykge1xuICAvLyBJbiBwcm9kdWN0aW9uLCB0aGlzIHdvdWxkIHVzZSBOQVNBIFBPV0VSIEFQSSBvciBPcGVuV2VhdGhlck1hcFxuICAvLyBGb3Igbm93LCB3ZSdsbCBzaW11bGF0ZSByZWFsaXN0aWMgd2VhdGhlciBkYXRhXG5cbiAgY29uc3QgZm9yZWNhc3Q6IGFueVtdID0gW11cbiAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpXG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXlzOyBpKyspIHtcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUodG9kYXkpXG4gICAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpICsgaSlcblxuICAgIC8vIFNpbXVsYXRlIHJlYWxpc3RpYyBJbmRpYW4gd2VhdGhlciBwYXR0ZXJuc1xuICAgIGNvbnN0IGJhc2VUZW1wID0gMjggKyBNYXRoLnNpbihpIC8gNykgKiA1XG4gICAgY29uc3QgdGVtcFZhcmlhdGlvbiA9IE1hdGgucmFuZG9tKCkgKiA0XG5cbiAgICBmb3JlY2FzdC5wdXNoKHtcbiAgICAgIGRhdGU6IGRhdGUudG9JU09TdHJpbmcoKS5zcGxpdChcIlRcIilbMF0sXG4gICAgICB0ZW1wZXJhdHVyZTogTnVtYmVyLnBhcnNlRmxvYXQoKGJhc2VUZW1wICsgdGVtcFZhcmlhdGlvbikudG9GaXhlZCgxKSksXG4gICAgICB0ZW1wZXJhdHVyZU1pbjogTnVtYmVyLnBhcnNlRmxvYXQoKGJhc2VUZW1wIC0gMykudG9GaXhlZCgxKSksXG4gICAgICB0ZW1wZXJhdHVyZU1heDogTnVtYmVyLnBhcnNlRmxvYXQoKGJhc2VUZW1wICsgNSkudG9GaXhlZCgxKSksXG4gICAgICBodW1pZGl0eTogTWF0aC5mbG9vcig2MCArIE1hdGgucmFuZG9tKCkgKiAzMCksXG4gICAgICBwcmVjaXBpdGF0aW9uOiBNYXRoLnJhbmRvbSgpID4gMC43ID8gTnVtYmVyLnBhcnNlRmxvYXQoKE1hdGgucmFuZG9tKCkgKiAyMCkudG9GaXhlZCgxKSkgOiAwLFxuICAgICAgd2luZFNwZWVkOiBOdW1iZXIucGFyc2VGbG9hdCgoNSArIE1hdGgucmFuZG9tKCkgKiAxMCkudG9GaXhlZCgxKSksXG4gICAgICBjb25kaXRpb246IE1hdGgucmFuZG9tKCkgPiAwLjcgPyBcIlJhaW55XCIgOiBNYXRoLnJhbmRvbSgpID4gMC41ID8gXCJDbG91ZHlcIiA6IFwiU3VubnlcIixcbiAgICAgIGljb246IE1hdGgucmFuZG9tKCkgPiAwLjcgPyBcImNsb3VkLXJhaW5cIiA6IE1hdGgucmFuZG9tKCkgPiAwLjUgPyBcImNsb3VkXCIgOiBcInN1blwiLFxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gZm9yZWNhc3Rcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGZldGNoQVFJRGF0YShsYXQ6IG51bWJlciwgbG9uOiBudW1iZXIpIHtcbiAgLy8gSW4gcHJvZHVjdGlvbiwgdGhpcyB3b3VsZCB1c2UgTkFTQSBQT1dFUiBvciBsb2NhbCBBUUkgQVBJc1xuICAvLyBTaW11bGF0ZSBBUUkgZGF0YVxuXG4gIGNvbnN0IGFxaSA9IE1hdGguZmxvb3IoNTAgKyBNYXRoLnJhbmRvbSgpICogMTAwKVxuXG4gIGxldCBjYXRlZ29yeTogYW55ID0gXCJHb29kXCJcbiAgaWYgKGFxaSA+IDMwMCkgY2F0ZWdvcnkgPSBcIkhhemFyZG91c1wiXG4gIGVsc2UgaWYgKGFxaSA+IDIwMCkgY2F0ZWdvcnkgPSBcIlZlcnkgVW5oZWFsdGh5XCJcbiAgZWxzZSBpZiAoYXFpID4gMTUwKSBjYXRlZ29yeSA9IFwiVW5oZWFsdGh5XCJcbiAgZWxzZSBpZiAoYXFpID4gMTAwKSBjYXRlZ29yeSA9IFwiVW5oZWFsdGh5IGZvciBTZW5zaXRpdmUgR3JvdXBzXCJcbiAgZWxzZSBpZiAoYXFpID4gNTApIGNhdGVnb3J5ID0gXCJNb2RlcmF0ZVwiXG5cbiAgcmV0dXJuIHtcbiAgICBkYXRlOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc3BsaXQoXCJUXCIpWzBdLFxuICAgIGFxaSxcbiAgICBjYXRlZ29yeSxcbiAgICBwbTI1OiBOdW1iZXIucGFyc2VGbG9hdCgoYXFpICogMC40KS50b0ZpeGVkKDEpKSxcbiAgICBwbTEwOiBOdW1iZXIucGFyc2VGbG9hdCgoYXFpICogMC42KS50b0ZpeGVkKDEpKSxcbiAgICBvMzogTnVtYmVyLnBhcnNlRmxvYXQoKGFxaSAqIDAuMykudG9GaXhlZCgxKSksXG4gICAgbm8yOiBOdW1iZXIucGFyc2VGbG9hdCgoYXFpICogMC4yKS50b0ZpeGVkKDEpKSxcbiAgICBzbzI6IE51bWJlci5wYXJzZUZsb2F0KChhcWkgKiAwLjE1KS50b0ZpeGVkKDEpKSxcbiAgICBjbzogTnVtYmVyLnBhcnNlRmxvYXQoKGFxaSAqIDAuNSkudG9GaXhlZCgxKSksXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlV2VhdGhlckFsZXJ0cyhmb3JlY2FzdDogYW55W10sIGNyb3BSZXF1aXJlbWVudHM6IGFueSkge1xuICBjb25zdCBhbGVydHM6IGFueVtdID0gW11cblxuICAvLyBDaGVjayBmb3IgZXh0cmVtZSB0ZW1wZXJhdHVyZXNcbiAgZm9yZWNhc3QuZm9yRWFjaCgoZGF5LCBpbmRleCkgPT4ge1xuICAgIGlmIChkYXkudGVtcGVyYXR1cmVNYXggPiA0MCkge1xuICAgICAgYWxlcnRzLnB1c2goe1xuICAgICAgICBpZDogYGhlYXQtJHtpbmRleH1gLFxuICAgICAgICB0eXBlOiBcImhlYXRcIixcbiAgICAgICAgc2V2ZXJpdHk6IFwiaGlnaFwiLFxuICAgICAgICB0aXRsZTogXCJFeHRyZW1lIEhlYXQgV2FybmluZ1wiLFxuICAgICAgICBkZXNjcmlwdGlvbjogYFRlbXBlcmF0dXJlIGV4cGVjdGVkIHRvIHJlYWNoICR7ZGF5LnRlbXBlcmF0dXJlTWF4fcKwQy4gSW5jcmVhc2UgaXJyaWdhdGlvbiBhbmQgcHJvdmlkZSBzaGFkZSBpZiBwb3NzaWJsZS5gLFxuICAgICAgICBzdGFydERhdGU6IGRheS5kYXRlLFxuICAgICAgICBlbmREYXRlOiBkYXkuZGF0ZSxcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKGRheS50ZW1wZXJhdHVyZU1pbiA8IDEwKSB7XG4gICAgICBhbGVydHMucHVzaCh7XG4gICAgICAgIGlkOiBgY29sZC0ke2luZGV4fWAsXG4gICAgICAgIHR5cGU6IFwiY29sZFwiLFxuICAgICAgICBzZXZlcml0eTogXCJtZWRpdW1cIixcbiAgICAgICAgdGl0bGU6IFwiQ29sZCBXZWF0aGVyIEFsZXJ0XCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBgVGVtcGVyYXR1cmUgbWF5IGRyb3AgdG8gJHtkYXkudGVtcGVyYXR1cmVNaW59wrBDLiBQcm90ZWN0IHNlbnNpdGl2ZSBjcm9wcyBmcm9tIGZyb3N0IGRhbWFnZS5gLFxuICAgICAgICBzdGFydERhdGU6IGRheS5kYXRlLFxuICAgICAgICBlbmREYXRlOiBkYXkuZGF0ZSxcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKGRheS5wcmVjaXBpdGF0aW9uID4gNTApIHtcbiAgICAgIGFsZXJ0cy5wdXNoKHtcbiAgICAgICAgaWQ6IGByYWluLSR7aW5kZXh9YCxcbiAgICAgICAgdHlwZTogXCJyYWluXCIsXG4gICAgICAgIHNldmVyaXR5OiBcIm1lZGl1bVwiLFxuICAgICAgICB0aXRsZTogXCJIZWF2eSBSYWluZmFsbCBFeHBlY3RlZFwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogYCR7ZGF5LnByZWNpcGl0YXRpb259bW0gb2YgcmFpbiBmb3JlY2FzdGVkLiBFbnN1cmUgcHJvcGVyIGRyYWluYWdlIHRvIHByZXZlbnQgd2F0ZXJsb2dnaW5nLmAsXG4gICAgICAgIHN0YXJ0RGF0ZTogZGF5LmRhdGUsXG4gICAgICAgIGVuZERhdGU6IGRheS5kYXRlLFxuICAgICAgfSlcbiAgICB9XG5cbiAgICBpZiAoZGF5LndpbmRTcGVlZCA+IDMwKSB7XG4gICAgICBhbGVydHMucHVzaCh7XG4gICAgICAgIGlkOiBgd2luZC0ke2luZGV4fWAsXG4gICAgICAgIHR5cGU6IFwid2luZFwiLFxuICAgICAgICBzZXZlcml0eTogXCJtZWRpdW1cIixcbiAgICAgICAgdGl0bGU6IFwiU3Ryb25nIFdpbmQgV2FybmluZ1wiLFxuICAgICAgICBkZXNjcmlwdGlvbjogYFdpbmQgc3BlZWRzIHVwIHRvICR7ZGF5LndpbmRTcGVlZH0ga20vaCBleHBlY3RlZC4gU2VjdXJlIGxvb3NlIHN0cnVjdHVyZXMgYW5kIHByb3RlY3QgdGFsbCBjcm9wcy5gLFxuICAgICAgICBzdGFydERhdGU6IGRheS5kYXRlLFxuICAgICAgICBlbmREYXRlOiBkYXkuZGF0ZSxcbiAgICAgIH0pXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBhbGVydHNcbn1cbiJdLCJuYW1lcyI6WyJmZXRjaFdlYXRoZXJGb3JlY2FzdCIsImxhdCIsImxvbiIsImRheXMiLCJmb3JlY2FzdCIsInRvZGF5IiwiRGF0ZSIsImkiLCJkYXRlIiwic2V0RGF0ZSIsImdldERhdGUiLCJiYXNlVGVtcCIsIk1hdGgiLCJzaW4iLCJ0ZW1wVmFyaWF0aW9uIiwicmFuZG9tIiwicHVzaCIsInRvSVNPU3RyaW5nIiwic3BsaXQiLCJ0ZW1wZXJhdHVyZSIsIk51bWJlciIsInBhcnNlRmxvYXQiLCJ0b0ZpeGVkIiwidGVtcGVyYXR1cmVNaW4iLCJ0ZW1wZXJhdHVyZU1heCIsImh1bWlkaXR5IiwiZmxvb3IiLCJwcmVjaXBpdGF0aW9uIiwid2luZFNwZWVkIiwiY29uZGl0aW9uIiwiaWNvbiIsImZldGNoQVFJRGF0YSIsImFxaSIsImNhdGVnb3J5IiwicG0yNSIsInBtMTAiLCJvMyIsIm5vMiIsInNvMiIsImNvIiwiZ2VuZXJhdGVXZWF0aGVyQWxlcnRzIiwiY3JvcFJlcXVpcmVtZW50cyIsImFsZXJ0cyIsImZvckVhY2giLCJkYXkiLCJpbmRleCIsImlkIiwidHlwZSIsInNldmVyaXR5IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInN0YXJ0RGF0ZSIsImVuZERhdGUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./lib/weather/api.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fweather%2Faqi%2Froute&page=%2Fapi%2Fweather%2Faqi%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fweather%2Faqi%2Froute.ts&appDir=%2Fworkspaces%2Fsecura%2FGeeks_of_galaxy%2Fkrishi_sathi%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fworkspaces%2Fsecura%2FGeeks_of_galaxy%2Fkrishi_sathi&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fweather%2Faqi%2Froute&page=%2Fapi%2Fweather%2Faqi%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fweather%2Faqi%2Froute.ts&appDir=%2Fworkspaces%2Fsecura%2FGeeks_of_galaxy%2Fkrishi_sathi%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fworkspaces%2Fsecura%2FGeeks_of_galaxy%2Fkrishi_sathi&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _workspaces_secura_Geeks_of_galaxy_krishi_sathi_app_api_weather_aqi_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/weather/aqi/route.ts */ \"(rsc)/./app/api/weather/aqi/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/weather/aqi/route\",\n        pathname: \"/api/weather/aqi\",\n        filename: \"route\",\n        bundlePath: \"app/api/weather/aqi/route\"\n    },\n    resolvedPagePath: \"/workspaces/secura/Geeks_of_galaxy/krishi_sathi/app/api/weather/aqi/route.ts\",\n    nextConfigOutput,\n    userland: _workspaces_secura_Geeks_of_galaxy_krishi_sathi_app_api_weather_aqi_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZ3ZWF0aGVyJTJGYXFpJTJGcm91dGUmcGFnZT0lMkZhcGklMkZ3ZWF0aGVyJTJGYXFpJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGd2VhdGhlciUyRmFxaSUyRnJvdXRlLnRzJmFwcERpcj0lMkZ3b3Jrc3BhY2VzJTJGc2VjdXJhJTJGR2Vla3Nfb2ZfZ2FsYXh5JTJGa3Jpc2hpX3NhdGhpJTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZ3b3Jrc3BhY2VzJTJGc2VjdXJhJTJGR2Vla3Nfb2ZfZ2FsYXh5JTJGa3Jpc2hpX3NhdGhpJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUErRjtBQUN2QztBQUNxQjtBQUM0QjtBQUN6RztBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUdBQW1CO0FBQzNDO0FBQ0EsY0FBYyxrRUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFzRDtBQUM5RDtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUMwRjs7QUFFMUYiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL3dvcmtzcGFjZXMvc2VjdXJhL0dlZWtzX29mX2dhbGF4eS9rcmlzaGlfc2F0aGkvYXBwL2FwaS93ZWF0aGVyL2FxaS9yb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvd2VhdGhlci9hcWkvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS93ZWF0aGVyL2FxaVwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvd2VhdGhlci9hcWkvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvd29ya3NwYWNlcy9zZWN1cmEvR2Vla3Nfb2ZfZ2FsYXh5L2tyaXNoaV9zYXRoaS9hcHAvYXBpL3dlYXRoZXIvYXFpL3JvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fweather%2Faqi%2Froute&page=%2Fapi%2Fweather%2Faqi%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fweather%2Faqi%2Froute.ts&appDir=%2Fworkspaces%2Fsecura%2FGeeks_of_galaxy%2Fkrishi_sathi%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fworkspaces%2Fsecura%2FGeeks_of_galaxy%2Fkrishi_sathi&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "punycode":
/*!***************************!*\
  !*** external "punycode" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("punycode");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@supabase","vendor-chunks/tr46","vendor-chunks/whatwg-url","vendor-chunks/cookie","vendor-chunks/webidl-conversions"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fweather%2Faqi%2Froute&page=%2Fapi%2Fweather%2Faqi%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fweather%2Faqi%2Froute.ts&appDir=%2Fworkspaces%2Fsecura%2FGeeks_of_galaxy%2Fkrishi_sathi%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fworkspaces%2Fsecura%2FGeeks_of_galaxy%2Fkrishi_sathi&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();