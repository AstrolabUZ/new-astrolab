"use strict";
exports.id = 605;
exports.ids = [605];
exports.modules = {

/***/ 4633:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  u: () => (/* reexport */ Modal_Modal)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(5725);
;// CONCATENATED MODULE: ./src/components/Modal/Modal.jsx



const Modal = ({ children  })=>{
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ jsx_runtime.jsx(external_antd_.Modal, {
            centered: true,
            closable: false,
            open: true,
            footer: null,
            children: children
        })
    });
};
/* harmony default export */ const Modal_Modal = (Modal);

;// CONCATENATED MODULE: ./src/components/Modal/index.js



/***/ }),

/***/ 6986:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ SuccessModal_SuccessModal)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/assets/images/check.png
/* harmony default export */ const check = ({"src":"/_next/static/media/check.38845d53.png","height":512,"width":512,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA3UlEQVR42lXPu2oCQRgF4P8R0oRASEiXPoY0m0ASyCuZp0iT98jFS7Ezq4LibmGjjbNaieKVcZF1XRVHxuOI4OVrf/5zOHRQo+SreHOtwrtHP/RJp27EbdqWNuRyjG4wgd0s4YLdZQ6fTDIYCoCexRs9nEUq28iD/kyS5VtuqEKISOhwNcVX6xt8UNajIMaDY3mU8BNuvI5RmVQ01QmsX8RmAd2WAZ5zHx5RlZKOdGCo7ryn1+aIFVSqwfcVO5fiKs0lR6QidMYB/n2Oa3afIeNs5mP9yX0pmNjf48wtxNqStXMXe88AAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./src/components/Modal/index.js + 1 modules
var Modal = __webpack_require__(4633);
;// CONCATENATED MODULE: ./src/components/UI/SuccessModal/SuccessModal.jsx






const SuccessModal = ({ setSuccess  })=>{
    (0,external_react_.useEffect)(()=>{
        setTimeout(()=>{
            setSuccess(false);
        }, 3000);
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(Modal/* Modal */.u, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex items-center justify-center gap-2",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                        src: check,
                        alt: "",
                        className: "w-10"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("h6", {
                        className: "text-xl font-bold",
                        children: "Успешно отправлено!"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("p", {
                className: "flex justify-center",
                children: "Наши специалисты свяжутся с вами в ближайшее время"
            })
        ]
    });
};
/* harmony default export */ const SuccessModal_SuccessModal = (SuccessModal);


/***/ }),

/***/ 6875:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Vacancies),
/* harmony export */   o: () => (/* binding */ useGetAllVacanciesQuery)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4335);
/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__);

const Vacancies = (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.createApi)({
    reducerPath: `Vacancies`,
    baseQuery: (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.fetchBaseQuery)({
        baseUrl: "https://astrolab.uz/v1/"
    }),
    endpoints: (build)=>({
            getAllVacancies: build.query({
                query: ()=>({
                        url: `/vacancies`,
                        method: `GET`
                    })
            })
        })
});
const { useGetAllVacanciesQuery  } = Vacancies;


/***/ })

};
;