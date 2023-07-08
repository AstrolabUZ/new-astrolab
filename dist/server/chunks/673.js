exports.id = 673;
exports.ids = [673];
exports.modules = {

/***/ 5595:
/***/ ((module) => {

// Exports
module.exports = {
	"portfolioCard": "PortfolioCard_portfolioCard__nL3_J"
};


/***/ }),

/***/ 1541:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  d: () => (/* reexport */ PortfolioCard_PortfolioCard)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/components/UI/ImageComponent/ImageComponent.jsx


const ImageComponent = ({ imageUrl , styles  })=>{
    const [loading, setLoading] = (0,external_react_.useState)(true);
    const [error, setError] = (0,external_react_.useState)(null);
    (0,external_react_.useEffect)(()=>{
        const loadImage = ()=>{
            const img = new Image();
            img.onload = ()=>setLoading(false);
            img.onerror = ()=>setError("Rasm yuklanmadi");
            img.src = imageUrl;
        };
        loadImage();
    }, [
        imageUrl
    ]);
    if (loading) {
        return /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "blur-lg",
            children: "Loading..."
        });
    }
    if (error) {
        return /*#__PURE__*/ jsx_runtime.jsx("div", {
            children: error
        });
    }
    return /*#__PURE__*/ jsx_runtime.jsx("img", {
        src: imageUrl,
        alt: "img",
        className: styles
    });
};
/* harmony default export */ const ImageComponent_ImageComponent = (ImageComponent);

;// CONCATENATED MODULE: ./src/components/UI/ImageComponent/index.js


// EXTERNAL MODULE: ./src/components/Cards/PortfolioCard/index.module.scss
var index_module = __webpack_require__(5595);
var index_module_default = /*#__PURE__*/__webpack_require__.n(index_module);
;// CONCATENATED MODULE: ./src/components/Cards/PortfolioCard/PortfolioCard.jsx



const PortfolioCard = ({ className , title , img , aosType , type , link  })=>{
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
            href: link,
            target: "_blank",
            className: `${(index_module_default()).portfolioCard} rounded-[10px] bg-[#2e4683] relative z-10  ${className}`,
            "data-aos": aosType,
            "data-aos-duration": "1000",
            "data-aos-once": "true",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx(ImageComponent_ImageComponent, {
                    imageUrl: "http://" + img,
                    styles: "absolute -z-[4] inset-0 w-full h-full object-cover"
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "lg:pt-5 lg:pl-5 p-2",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("h6", {
                            className: "lg:text-2xl text-sm uppercase",
                            children: title
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                            className: "text-sm uppercase",
                            children: type === "web" ? "Веб-сайт" : type
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const PortfolioCard_PortfolioCard = (PortfolioCard);

;// CONCATENATED MODULE: ./src/components/Cards/PortfolioCard/index.js



/***/ }),

/***/ 3326:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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


/***/ })

};
;