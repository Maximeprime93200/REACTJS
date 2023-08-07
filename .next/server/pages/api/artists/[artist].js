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
exports.id = "pages/api/artists/[artist]";
exports.ids = ["pages/api/artists/[artist]"];
exports.modules = {

/***/ "fs/promises":
/*!******************************!*\
  !*** external "fs/promises" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("fs/promises");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "(api)/./src/pages/api/artists/[artist].js":
/*!*******************************************!*\
  !*** ./src/pages/api/artists/[artist].js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs/promises */ \"fs/promises\");\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs_promises__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n\n\nasync function handler(req, res) {\n    if (req.method === \"PUT\") {\n        try {\n            const { artist } = req.query;\n            const { note } = req.body;\n            // Charger les données actuelles depuis le fichier db.json\n            const filePath = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), \"db.json\");\n            const jsonData = await fs_promises__WEBPACK_IMPORTED_MODULE_0___default().readFile(filePath, \"utf8\");\n            const data = JSON.parse(jsonData);\n            // Trouver l'artiste correspondant dans les données de la base de données\n            const artistIndex = data.searchs.findIndex((item)=>item.artist === artist);\n            if (artistIndex !== -1) {\n                // Mettre à jour la note de l'artiste\n                data.searchs[artistIndex].note = note;\n                // Enregistrer les données mises à jour dans db.json\n                await fs_promises__WEBPACK_IMPORTED_MODULE_0___default().writeFile(filePath, JSON.stringify(data, null, 2), \"utf8\");\n                res.status(200).json({\n                    message: \"Note de l'artiste mise \\xe0 jour avec succ\\xe8s\"\n                });\n            } else {\n                res.status(404).json({\n                    error: \"Artiste non trouv\\xe9 dans la base de donn\\xe9es\"\n                });\n            }\n        } catch (error) {\n            console.error(\"Erreur lors de la mise \\xe0 jour de la note de l'artiste :\", error);\n            res.status(500).json({\n                error: \"Erreur lors de la mise \\xe0 jour de la note de l'artiste\"\n            });\n        }\n    } else {\n        res.status(405).json({\n            error: \"M\\xe9thode non autoris\\xe9e\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2FydGlzdHMvW2FydGlzdF0uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBNkI7QUFDTDtBQUVULGVBQWVFLFFBQVFDLEdBQUcsRUFBRUMsR0FBRztJQUM1QyxJQUFJRCxJQUFJRSxNQUFNLEtBQUssT0FBTztRQUN4QixJQUFJO1lBQ0YsTUFBTSxFQUFFQyxNQUFNLEVBQUUsR0FBR0gsSUFBSUksS0FBSztZQUM1QixNQUFNLEVBQUVDLElBQUksRUFBRSxHQUFHTCxJQUFJTSxJQUFJO1lBRXpCLDBEQUEwRDtZQUMxRCxNQUFNQyxXQUFXVCxnREFBUyxDQUFDVyxRQUFRQyxHQUFHLElBQUk7WUFDMUMsTUFBTUMsV0FBVyxNQUFNZCwyREFBVyxDQUFDVSxVQUFVO1lBQzdDLE1BQU1NLE9BQU9DLEtBQUtDLEtBQUssQ0FBQ0o7WUFFeEIseUVBQXlFO1lBQ3pFLE1BQU1LLGNBQWNILEtBQUtJLE9BQU8sQ0FBQ0MsU0FBUyxDQUFDLENBQUNDLE9BQVNBLEtBQUtoQixNQUFNLEtBQUtBO1lBRXJFLElBQUlhLGdCQUFnQixDQUFDLEdBQUc7Z0JBQ3RCLHFDQUFxQztnQkFDckNILEtBQUtJLE9BQU8sQ0FBQ0QsWUFBWSxDQUFDWCxJQUFJLEdBQUdBO2dCQUVqQyxvREFBb0Q7Z0JBQ3BELE1BQU1SLDREQUFZLENBQUNVLFVBQVVPLEtBQUtPLFNBQVMsQ0FBQ1IsTUFBTSxNQUFNLElBQUk7Z0JBRTVEWixJQUFJcUIsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztvQkFBRUMsU0FBUztnQkFBNkM7WUFDL0UsT0FBTztnQkFDTHZCLElBQUlxQixNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO29CQUFFRSxPQUFPO2dCQUE2QztZQUM3RTtRQUNGLEVBQUUsT0FBT0EsT0FBTztZQUNkQyxRQUFRRCxLQUFLLENBQUMsOERBQTREQTtZQUMxRXhCLElBQUlxQixNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO2dCQUFFRSxPQUFPO1lBQXlEO1FBQ3pGO0lBQ0YsT0FBTztRQUNMeEIsSUFBSXFCLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUUsT0FBTztRQUF3QjtJQUN4RDtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1hcHAvLi9zcmMvcGFnZXMvYXBpL2FydGlzdHMvW2FydGlzdF0uanM/ZmM3NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZnMgZnJvbSAnZnMvcHJvbWlzZXMnO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgaWYgKHJlcS5tZXRob2QgPT09ICdQVVQnKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgYXJ0aXN0IH0gPSByZXEucXVlcnk7XG4gICAgICBjb25zdCB7IG5vdGUgfSA9IHJlcS5ib2R5O1xuXG4gICAgICAvLyBDaGFyZ2VyIGxlcyBkb25uw6llcyBhY3R1ZWxsZXMgZGVwdWlzIGxlIGZpY2hpZXIgZGIuanNvblxuICAgICAgY29uc3QgZmlsZVBhdGggPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJ2RiLmpzb24nKTtcbiAgICAgIGNvbnN0IGpzb25EYXRhID0gYXdhaXQgZnMucmVhZEZpbGUoZmlsZVBhdGgsICd1dGY4Jyk7XG4gICAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShqc29uRGF0YSk7XG5cbiAgICAgIC8vIFRyb3V2ZXIgbCdhcnRpc3RlIGNvcnJlc3BvbmRhbnQgZGFucyBsZXMgZG9ubsOpZXMgZGUgbGEgYmFzZSBkZSBkb25uw6llc1xuICAgICAgY29uc3QgYXJ0aXN0SW5kZXggPSBkYXRhLnNlYXJjaHMuZmluZEluZGV4KChpdGVtKSA9PiBpdGVtLmFydGlzdCA9PT0gYXJ0aXN0KTtcblxuICAgICAgaWYgKGFydGlzdEluZGV4ICE9PSAtMSkge1xuICAgICAgICAvLyBNZXR0cmUgw6Agam91ciBsYSBub3RlIGRlIGwnYXJ0aXN0ZVxuICAgICAgICBkYXRhLnNlYXJjaHNbYXJ0aXN0SW5kZXhdLm5vdGUgPSBub3RlO1xuXG4gICAgICAgIC8vIEVucmVnaXN0cmVyIGxlcyBkb25uw6llcyBtaXNlcyDDoCBqb3VyIGRhbnMgZGIuanNvblxuICAgICAgICBhd2FpdCBmcy53cml0ZUZpbGUoZmlsZVBhdGgsIEpTT04uc3RyaW5naWZ5KGRhdGEsIG51bGwsIDIpLCAndXRmOCcpO1xuXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVzc2FnZTogJ05vdGUgZGUgbFxcJ2FydGlzdGUgbWlzZSDDoCBqb3VyIGF2ZWMgc3VjY8OocycgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXMuc3RhdHVzKDQwNCkuanNvbih7IGVycm9yOiAnQXJ0aXN0ZSBub24gdHJvdXbDqSBkYW5zIGxhIGJhc2UgZGUgZG9ubsOpZXMnIH0pO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJldXIgbG9ycyBkZSBsYSBtaXNlIMOgIGpvdXIgZGUgbGEgbm90ZSBkZSBsXFwnYXJ0aXN0ZSA6JywgZXJyb3IpO1xuICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogJ0VycmV1ciBsb3JzIGRlIGxhIG1pc2Ugw6Agam91ciBkZSBsYSBub3RlIGRlIGxcXCdhcnRpc3RlJyB9KTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmVzLnN0YXR1cyg0MDUpLmpzb24oeyBlcnJvcjogJ03DqXRob2RlIG5vbiBhdXRvcmlzw6llJyB9KTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbImZzIiwicGF0aCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJhcnRpc3QiLCJxdWVyeSIsIm5vdGUiLCJib2R5IiwiZmlsZVBhdGgiLCJqb2luIiwicHJvY2VzcyIsImN3ZCIsImpzb25EYXRhIiwicmVhZEZpbGUiLCJkYXRhIiwiSlNPTiIsInBhcnNlIiwiYXJ0aXN0SW5kZXgiLCJzZWFyY2hzIiwiZmluZEluZGV4IiwiaXRlbSIsIndyaXRlRmlsZSIsInN0cmluZ2lmeSIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwiZXJyb3IiLCJjb25zb2xlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/artists/[artist].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/artists/[artist].js"));
module.exports = __webpack_exports__;

})();