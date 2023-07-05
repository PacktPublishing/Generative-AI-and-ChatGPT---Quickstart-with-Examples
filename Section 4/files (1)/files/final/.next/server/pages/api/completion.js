"use strict";
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
exports.id = "pages/api/completion";
exports.ids = ["pages/api/completion"];
exports.modules = {

/***/ "openai":
/*!*************************!*\
  !*** external "openai" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("openai");

/***/ }),

/***/ "(api)/./pages/api/completion.js":
/*!*********************************!*\
  !*** ./pages/api/completion.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! openai */ \"openai\");\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(openai__WEBPACK_IMPORTED_MODULE_0__);\n\nconst configuration = new openai__WEBPACK_IMPORTED_MODULE_0__.Configuration({\n    apiKey: process.env.REACT_APP_OPENAI_API_KEY\n});\nconst openai = new openai__WEBPACK_IMPORTED_MODULE_0__.OpenAIApi(configuration);\n/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n    if (!configuration.apiKey) {\n        res.status(500).json({\n            error: {\n                message: \"OpenAI API key not configured, please follow instructions here : https://platform.openai.com/docs/libraries/node-js-library\"\n            }\n        });\n        return;\n    }\n    if (!req.body.input) {\n        res.status(400).json({\n            error: {\n                message: \"Please enter a valid input\"\n            }\n        });\n    }\n    try {\n        const response = await openai.createCompletion({\n            model: \"text-davinci-003\",\n            prompt: `Q: ${req.body.input}`,\n            max_tokens: 60,\n            temperature: 1,\n            top_p: 1.0\n        });\n        console.log(response.data.choices[0].text);\n        res.status(200).json({\n            result: response.data.choices[0].text\n        });\n    } catch (err) {\n        console.error(err);\n        res.status(500).json({\n            error: {\n                message: err.message\n            }\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY29tcGxldGlvbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBa0Q7QUFFbEQsTUFBTUUsZ0JBQWdCLElBQUlGLGlEQUFhQSxDQUFDO0lBQ3BDRyxRQUFRQyxRQUFRQyxHQUFHLENBQUNDLHdCQUF3QjtBQUNoRDtBQUNBLE1BQU1DLFNBQVMsSUFBSU4sNkNBQVNBLENBQUNDO0FBRTdCLDZCQUFlLDBDQUFnQk0sR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDckMsSUFBSSxDQUFDUCxjQUFjQyxNQUFNLEVBQUU7UUFDdkJNLElBQUlDLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFDakJDLE9BQU87Z0JBQ0hDLFNBQVU7WUFDZDtRQUNKO1FBQ0E7SUFDSixDQUFDO0lBRUQsSUFBSSxDQUFDTCxJQUFJTSxJQUFJLENBQUNDLEtBQUssRUFBRTtRQUNqQk4sSUFBSUMsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUNqQkMsT0FBTztnQkFDSEMsU0FBUztZQUNiO1FBQ0o7SUFDSixDQUFDO0lBRUQsSUFBSTtRQUNBLE1BQU1HLFdBQVcsTUFBTVQsT0FBT1UsZ0JBQWdCLENBQUM7WUFDM0NDLE9BQVE7WUFDUkMsUUFBUSxDQUFDLEdBQUcsRUFBRVgsSUFBSU0sSUFBSSxDQUFDQyxLQUFLLENBQUMsQ0FBQztZQUM5QkssWUFBWTtZQUNaQyxhQUFhO1lBQ2JDLE9BQU87UUFDWDtRQUVBQyxRQUFRQyxHQUFHLENBQUNSLFNBQVNTLElBQUksQ0FBQ0MsT0FBTyxDQUFDLEVBQUUsQ0FBQ0MsSUFBSTtRQUN6Q2xCLElBQUlDLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRWlCLFFBQVFaLFNBQVNTLElBQUksQ0FBQ0MsT0FBTyxDQUFDLEVBQUUsQ0FBQ0MsSUFBSTtRQUFDO0lBQ2pFLEVBQUUsT0FBT0UsS0FBSztRQUNWTixRQUFRWCxLQUFLLENBQUNpQjtRQUNkcEIsSUFBSUMsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUNqQkMsT0FBTztnQkFDSEMsU0FBVWdCLElBQUloQixPQUFPO1lBQ3pCO1FBQ0o7SUFDSjtBQUVKLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vcGVuYWktcXVpY2tzdGFydC1ub2RlLy4vcGFnZXMvYXBpL2NvbXBsZXRpb24uanM/ZmE3YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25maWd1cmF0aW9uLCBPcGVuQUlBcGkgfSBmcm9tIFwib3BlbmFpXCI7XG5cbmNvbnN0IGNvbmZpZ3VyYXRpb24gPSBuZXcgQ29uZmlndXJhdGlvbih7XG4gICAgYXBpS2V5OiBwcm9jZXNzLmVudi5SRUFDVF9BUFBfT1BFTkFJX0FQSV9LRVlcbn0pXG5jb25zdCBvcGVuYWkgPSBuZXcgT3BlbkFJQXBpKGNvbmZpZ3VyYXRpb24pXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIChyZXEsIHJlcykge1xuICAgIGlmICghY29uZmlndXJhdGlvbi5hcGlLZXkpIHtcbiAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oe1xuICAgICAgICAgICAgZXJyb3I6IHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAgXCJPcGVuQUkgQVBJIGtleSBub3QgY29uZmlndXJlZCwgcGxlYXNlIGZvbGxvdyBpbnN0cnVjdGlvbnMgaGVyZSA6IGh0dHBzOi8vcGxhdGZvcm0ub3BlbmFpLmNvbS9kb2NzL2xpYnJhcmllcy9ub2RlLWpzLWxpYnJhcnlcIixcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIFxuICAgIH1cblxuICAgIGlmICghcmVxLmJvZHkuaW5wdXQpIHtcbiAgICAgICAgcmVzLnN0YXR1cyg0MDApLmpzb24oe1xuICAgICAgICAgICAgZXJyb3I6IHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIlBsZWFzZSBlbnRlciBhIHZhbGlkIGlucHV0XCIsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBvcGVuYWkuY3JlYXRlQ29tcGxldGlvbih7XG4gICAgICAgICAgICBtb2RlbCA6IFwidGV4dC1kYXZpbmNpLTAwM1wiLFxuICAgICAgICAgICAgcHJvbXB0OiBgUTogJHtyZXEuYm9keS5pbnB1dH1gLCBcbiAgICAgICAgICAgIG1heF90b2tlbnM6IDYwLFxuICAgICAgICAgICAgdGVtcGVyYXR1cmU6IDEsIFxuICAgICAgICAgICAgdG9wX3A6IDEuMFxuICAgICAgICB9KSBcblxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhLmNob2ljZXNbMF0udGV4dClcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyByZXN1bHQ6IHJlc3BvbnNlLmRhdGEuY2hvaWNlc1swXS50ZXh0IH0pXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7XG4gICAgICAgICAgICBlcnJvcjoge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICBlcnIubWVzc2FnZSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbn0iXSwibmFtZXMiOlsiQ29uZmlndXJhdGlvbiIsIk9wZW5BSUFwaSIsImNvbmZpZ3VyYXRpb24iLCJhcGlLZXkiLCJwcm9jZXNzIiwiZW52IiwiUkVBQ1RfQVBQX09QRU5BSV9BUElfS0VZIiwib3BlbmFpIiwicmVxIiwicmVzIiwic3RhdHVzIiwianNvbiIsImVycm9yIiwibWVzc2FnZSIsImJvZHkiLCJpbnB1dCIsInJlc3BvbnNlIiwiY3JlYXRlQ29tcGxldGlvbiIsIm1vZGVsIiwicHJvbXB0IiwibWF4X3Rva2VucyIsInRlbXBlcmF0dXJlIiwidG9wX3AiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImNob2ljZXMiLCJ0ZXh0IiwicmVzdWx0IiwiZXJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/completion.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/completion.js"));
module.exports = __webpack_exports__;

})();