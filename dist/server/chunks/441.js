"use strict";
exports.id = 441;
exports.ids = [441];
exports.modules = {

/***/ 3326:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ Portfolio),
/* harmony export */   l: () => (/* binding */ useGetAllPortfolioQuery)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4335);
/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__);

const Portfolio = (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.createApi)({
    reducerPath: `Portfolio`,
    baseQuery: (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.fetchBaseQuery)({
        baseUrl: "https://astrolab.uz/v1/"
    }),
    endpoints: (build)=>({
            getAllPortfolio: build.query({
                query: ()=>({
                        url: `/portfolios`,
                        method: `GET`
                    })
            })
        })
});
const { useGetAllPortfolioQuery  } = Portfolio;


/***/ }),

/***/ 8240:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ Services),
/* harmony export */   N: () => (/* binding */ useGetAllServicesQuery)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4335);
/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__);

const Services = (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.createApi)({
    reducerPath: `Services`,
    baseQuery: (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.fetchBaseQuery)({
        baseUrl: "https://astrolab.uz/v1/"
    }),
    endpoints: (build)=>({
            getAllServices: build.query({
                query: ()=>({
                        url: `/services`,
                        method: `GET`
                    })
            })
        })
});
const { useGetAllServicesQuery  } = Services;


/***/ })

};
;