"use strict";
exports.id = 667;
exports.ids = [667];
exports.modules = {

/***/ 9925:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  v: () => (/* reexport */ ServicesCard_ServicesCard)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/components/Cards/ServicesCard/ServicesCard.jsx


const ServicesCard = ({ title , subtitle , img  })=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "bg-[#466ACC] rounded-def lg:p-10 p-5 duration-700 opacity-50",
        "data-aos": "fade-up",
        "data-aos-once": "true",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("h6", {
                className: "lg:text-3xl text-xl font-bold text-center",
                children: title
            }),
            /*#__PURE__*/ jsx_runtime.jsx("img", {
                src: "http://" + img,
                alt: "",
                className: "mx-auto text-center lg:w-[300px] w-[200px] lg:h-[200px] h-[100px] object-contain my-5"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("p", {
                className: "lg:text-xl text-sm",
                children: subtitle
            })
        ]
    });
};
/* harmony default export */ const ServicesCard_ServicesCard = (ServicesCard);

;// CONCATENATED MODULE: ./src/components/Cards/ServicesCard/index.js



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