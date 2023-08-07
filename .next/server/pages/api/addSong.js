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
exports.id = "pages/api/addSong";
exports.ids = ["pages/api/addSong"];
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

/***/ "(api)/./src/pages/api/addSong.js":
/*!**********************************!*\
  !*** ./src/pages/api/addSong.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs/promises */ \"fs/promises\");\n/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs_promises__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n\n\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        try {\n            const { artist, trackName, playcount, listeners, url, genre } = req.body; // Ajouter le genre ici\n            // Charger les données actuelles depuis le fichier db.json\n            const filePath = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), \"db.json\");\n            const jsonData = await fs_promises__WEBPACK_IMPORTED_MODULE_0___default().readFile(filePath, \"utf8\");\n            const data = JSON.parse(jsonData);\n            // Vérifier si un élément avec le même trackName existe déjà\n            const existingItem = data.searchs.find((item)=>item.trackName === trackName);\n            if (existingItem) {\n                // Si un élément avec le même trackName existe déjà, renvoyer un message d'erreur\n                res.status(409).json({\n                    error: \"Une musique avec le m\\xeame titre existe d\\xe9j\\xe0 dans la base de donn\\xe9es\"\n                });\n                return;\n            }\n            // Générer un nouvel identifiant unique pour l'élément\n            const newId = Date.now().toString();\n            // Ajouter le nouvel élément à la liste des résultats de recherche\n            data.searchs.push({\n                id: newId,\n                artist: artist,\n                trackName: trackName,\n                playcount: playcount,\n                listeners: listeners,\n                url: url,\n                genre: genre\n            });\n            // Enregistrer les données mises à jour dans db.json\n            await fs_promises__WEBPACK_IMPORTED_MODULE_0___default().writeFile(filePath, JSON.stringify(data, null, 2), \"utf8\");\n            res.status(200).json({\n                message: \"R\\xe9sultats de recherche ajout\\xe9s avec succ\\xe8s \\xe0 la base de donn\\xe9es\"\n            });\n        } catch (error) {\n            console.error(\"Erreur lors de l'enregistrement des r\\xe9sultats de recherche dans la base de donn\\xe9es:\", error);\n            res.status(500).json({\n                error: \"Erreur lors de l'enregistrement des r\\xe9sultats de recherche\"\n            });\n        }\n    } else {\n        res.status(405).json({\n            error: \"M\\xe9thode non autoris\\xe9e\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2FkZFNvbmcuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBNkI7QUFDTDtBQUVULGVBQWVFLFFBQVFDLEdBQUcsRUFBRUMsR0FBRztJQUM1QyxJQUFJRCxJQUFJRSxNQUFNLEtBQUssUUFBUTtRQUN6QixJQUFJO1lBQ0YsTUFBTSxFQUFFQyxNQUFNLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUVDLEdBQUcsRUFBRUMsS0FBSyxFQUFFLEdBQUdSLElBQUlTLElBQUksRUFBRSx1QkFBdUI7WUFFakcsMERBQTBEO1lBQzFELE1BQU1DLFdBQVdaLGdEQUFTLENBQUNjLFFBQVFDLEdBQUcsSUFBSTtZQUMxQyxNQUFNQyxXQUFXLE1BQU1qQiwyREFBVyxDQUFDYSxVQUFVO1lBQzdDLE1BQU1NLE9BQU9DLEtBQUtDLEtBQUssQ0FBQ0o7WUFFeEIsNERBQTREO1lBQzVELE1BQU1LLGVBQWVILEtBQUtJLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDQyxDQUFBQSxPQUFRQSxLQUFLbEIsU0FBUyxLQUFLQTtZQUVsRSxJQUFJZSxjQUFjO2dCQUNoQixpRkFBaUY7Z0JBQ2pGbEIsSUFBSXNCLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7b0JBQUVDLE9BQU87Z0JBQXFFO2dCQUNuRztZQUNGO1lBRUEsc0RBQXNEO1lBQ3RELE1BQU1DLFFBQVFDLEtBQUtDLEdBQUcsR0FBR0MsUUFBUTtZQUVqQyxrRUFBa0U7WUFDbEViLEtBQUtJLE9BQU8sQ0FBQ1UsSUFBSSxDQUFDO2dCQUNoQkMsSUFBSUw7Z0JBQ0p2QixRQUFRQTtnQkFDUkMsV0FBV0E7Z0JBQ1hDLFdBQVdBO2dCQUNYQyxXQUFXQTtnQkFDWEMsS0FBS0E7Z0JBQ0xDLE9BQU9BO1lBQ1Q7WUFFQSxvREFBb0Q7WUFDcEQsTUFBTVgsNERBQVksQ0FBQ2EsVUFBVU8sS0FBS2dCLFNBQVMsQ0FBQ2pCLE1BQU0sTUFBTSxJQUFJO1lBRTVEZixJQUFJc0IsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBRVUsU0FBUztZQUFrRTtRQUNwRyxFQUFFLE9BQU9ULE9BQU87WUFDZFUsUUFBUVYsS0FBSyxDQUFDLDZGQUF3RkE7WUFDdEd4QixJQUFJc0IsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBRUMsT0FBTztZQUE4RDtRQUM5RjtJQUNGLE9BQU87UUFDTHhCLElBQUlzQixNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVDLE9BQU87UUFBd0I7SUFDeEQ7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tYXBwLy4vc3JjL3BhZ2VzL2FwaS9hZGRTb25nLmpzPzEyOGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZzIGZyb20gJ2ZzL3Byb21pc2VzJztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGlmIChyZXEubWV0aG9kID09PSAnUE9TVCcpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBhcnRpc3QsIHRyYWNrTmFtZSwgcGxheWNvdW50LCBsaXN0ZW5lcnMsIHVybCwgZ2VucmUgfSA9IHJlcS5ib2R5OyAvLyBBam91dGVyIGxlIGdlbnJlIGljaVxuXG4gICAgICAvLyBDaGFyZ2VyIGxlcyBkb25uw6llcyBhY3R1ZWxsZXMgZGVwdWlzIGxlIGZpY2hpZXIgZGIuanNvblxuICAgICAgY29uc3QgZmlsZVBhdGggPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJ2RiLmpzb24nKTtcbiAgICAgIGNvbnN0IGpzb25EYXRhID0gYXdhaXQgZnMucmVhZEZpbGUoZmlsZVBhdGgsICd1dGY4Jyk7XG4gICAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShqc29uRGF0YSk7XG5cbiAgICAgIC8vIFbDqXJpZmllciBzaSB1biDDqWzDqW1lbnQgYXZlYyBsZSBtw6ptZSB0cmFja05hbWUgZXhpc3RlIGTDqWrDoFxuICAgICAgY29uc3QgZXhpc3RpbmdJdGVtID0gZGF0YS5zZWFyY2hzLmZpbmQoaXRlbSA9PiBpdGVtLnRyYWNrTmFtZSA9PT0gdHJhY2tOYW1lKTtcblxuICAgICAgaWYgKGV4aXN0aW5nSXRlbSkge1xuICAgICAgICAvLyBTaSB1biDDqWzDqW1lbnQgYXZlYyBsZSBtw6ptZSB0cmFja05hbWUgZXhpc3RlIGTDqWrDoCwgcmVudm95ZXIgdW4gbWVzc2FnZSBkJ2VycmV1clxuICAgICAgICByZXMuc3RhdHVzKDQwOSkuanNvbih7IGVycm9yOiAnVW5lIG11c2lxdWUgYXZlYyBsZSBtw6ptZSB0aXRyZSBleGlzdGUgZMOpasOgIGRhbnMgbGEgYmFzZSBkZSBkb25uw6llcycgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gR8OpbsOpcmVyIHVuIG5vdXZlbCBpZGVudGlmaWFudCB1bmlxdWUgcG91ciBsJ8OpbMOpbWVudFxuICAgICAgY29uc3QgbmV3SWQgPSBEYXRlLm5vdygpLnRvU3RyaW5nKCk7XG5cbiAgICAgIC8vIEFqb3V0ZXIgbGUgbm91dmVsIMOpbMOpbWVudCDDoCBsYSBsaXN0ZSBkZXMgcsOpc3VsdGF0cyBkZSByZWNoZXJjaGVcbiAgICAgIGRhdGEuc2VhcmNocy5wdXNoKHtcbiAgICAgICAgaWQ6IG5ld0lkLFxuICAgICAgICBhcnRpc3Q6IGFydGlzdCxcbiAgICAgICAgdHJhY2tOYW1lOiB0cmFja05hbWUsXG4gICAgICAgIHBsYXljb3VudDogcGxheWNvdW50LFxuICAgICAgICBsaXN0ZW5lcnM6IGxpc3RlbmVycyxcbiAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgIGdlbnJlOiBnZW5yZSwgLy8gQWpvdXRlciBsZSBnZW5yZSBpY2lcbiAgICAgIH0pO1xuXG4gICAgICAvLyBFbnJlZ2lzdHJlciBsZXMgZG9ubsOpZXMgbWlzZXMgw6Agam91ciBkYW5zIGRiLmpzb25cbiAgICAgIGF3YWl0IGZzLndyaXRlRmlsZShmaWxlUGF0aCwgSlNPTi5zdHJpbmdpZnkoZGF0YSwgbnVsbCwgMiksICd1dGY4Jyk7XG5cbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbWVzc2FnZTogJ1LDqXN1bHRhdHMgZGUgcmVjaGVyY2hlIGFqb3V0w6lzIGF2ZWMgc3VjY8OocyDDoCBsYSBiYXNlIGRlIGRvbm7DqWVzJyB9KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyZXVyIGxvcnMgZGUgbFxcJ2VucmVnaXN0cmVtZW50IGRlcyByw6lzdWx0YXRzIGRlIHJlY2hlcmNoZSBkYW5zIGxhIGJhc2UgZGUgZG9ubsOpZXM6JywgZXJyb3IpO1xuICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogJ0VycmV1ciBsb3JzIGRlIGxcXCdlbnJlZ2lzdHJlbWVudCBkZXMgcsOpc3VsdGF0cyBkZSByZWNoZXJjaGUnIH0pO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXMuc3RhdHVzKDQwNSkuanNvbih7IGVycm9yOiAnTcOpdGhvZGUgbm9uIGF1dG9yaXPDqWUnIH0pO1xuICB9XG59XG4iXSwibmFtZXMiOlsiZnMiLCJwYXRoIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsImFydGlzdCIsInRyYWNrTmFtZSIsInBsYXljb3VudCIsImxpc3RlbmVycyIsInVybCIsImdlbnJlIiwiYm9keSIsImZpbGVQYXRoIiwiam9pbiIsInByb2Nlc3MiLCJjd2QiLCJqc29uRGF0YSIsInJlYWRGaWxlIiwiZGF0YSIsIkpTT04iLCJwYXJzZSIsImV4aXN0aW5nSXRlbSIsInNlYXJjaHMiLCJmaW5kIiwiaXRlbSIsInN0YXR1cyIsImpzb24iLCJlcnJvciIsIm5ld0lkIiwiRGF0ZSIsIm5vdyIsInRvU3RyaW5nIiwicHVzaCIsImlkIiwid3JpdGVGaWxlIiwic3RyaW5naWZ5IiwibWVzc2FnZSIsImNvbnNvbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/addSong.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/addSong.js"));
module.exports = __webpack_exports__;

})();