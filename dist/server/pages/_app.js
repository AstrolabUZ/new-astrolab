(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 5348:
/***/ ((module) => {

// Exports
module.exports = {
	"Header": "Header_Header__DZhI5"
};


/***/ }),

/***/ 5055:
/***/ ((module) => {

// Exports
module.exports = {
	"loader": "Loader_loader__Rs1kD",
	"inner": "Loader_inner__WiqJP",
	"one": "Loader_one__4Gct7",
	"rotate-one": "Loader_rotate-one__AP5RD",
	"two": "Loader_two__R0JLB",
	"rotate-two": "Loader_rotate-two__CIBHe",
	"three": "Loader_three__1vahj",
	"rotate-three": "Loader_rotate-three__kyvpa",
	"loaderAnimation": "Loader_loaderAnimation__Eyz4I"
};


/***/ }),

/***/ 1572:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderpage_2F_app_absolutePagePath_private_next_pages_2F_app_js_preferredRegion_),
  getServerSideProps: () => (/* binding */ getServerSideProps),
  getStaticPaths: () => (/* binding */ getStaticPaths),
  getStaticProps: () => (/* binding */ getStaticProps),
  reportWebVitals: () => (/* binding */ reportWebVitals),
  routeModule: () => (/* binding */ routeModule),
  unstable_getServerProps: () => (/* binding */ unstable_getServerProps),
  unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),
  unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),
  unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),
  unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)
});

// NAMESPACE OBJECT: ./src/pages/_app.js
var _app_namespaceObject = {};
__webpack_require__.r(_app_namespaceObject);
__webpack_require__.d(_app_namespaceObject, {
  "default": () => (MyApp)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/pages/module.js
var pages_module = __webpack_require__(3185);
var module_default = /*#__PURE__*/__webpack_require__.n(pages_module);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js
var helpers = __webpack_require__(7182);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "aos"
const external_aos_namespaceObject = require("aos");
var external_aos_default = /*#__PURE__*/__webpack_require__.n(external_aos_namespaceObject);
;// CONCATENATED MODULE: external "nextjs-progressbar"
const external_nextjs_progressbar_namespaceObject = require("nextjs-progressbar");
var external_nextjs_progressbar_default = /*#__PURE__*/__webpack_require__.n(external_nextjs_progressbar_namespaceObject);
// EXTERNAL MODULE: ./src/components/UI/Loader/index.module.scss
var index_module = __webpack_require__(5055);
var index_module_default = /*#__PURE__*/__webpack_require__.n(index_module);
;// CONCATENATED MODULE: ./src/components/UI/Loader/Loader.jsx



const Loader = ()=>{
    const [loader, setLoader] = (0,external_react_.useState)(true);
    (0,external_react_.useEffect)(()=>{
        window.document.body.style.overflow = "hidden";
        setTimeout(()=>{
            setLoader(false);
            window.document.body.style.overflow = "auto";
        }, 2400);
    }, []);
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: loader && /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: `fixed top-0 left-0 bg-[#2e4683] w-screen h-screen z-[999] ${(index_module_default()).loaderAnimation} grid place-items-center`,
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: `${(index_module_default()).loader}`,
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: `${(index_module_default()).inner} ${(index_module_default()).one}`
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: `${(index_module_default()).inner} ${(index_module_default()).two}`
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: `${(index_module_default()).inner} ${(index_module_default()).three}`
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const Loader_Loader = (Loader);

;// CONCATENATED MODULE: ./src/components/UI/Loader/index.js


// EXTERNAL MODULE: external "react-input-mask"
var external_react_input_mask_ = __webpack_require__(4648);
var external_react_input_mask_default = /*#__PURE__*/__webpack_require__.n(external_react_input_mask_);
;// CONCATENATED MODULE: ./src/assets/icons/envelope.svg
/* harmony default export */ const envelope = ({"src":"/_next/static/media/envelope.c2092cd0.svg","height":512,"width":512,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./src/assets/icons/marker.svg
/* harmony default export */ const marker = ({"src":"/_next/static/media/marker.137ce95a.svg","height":512,"width":512,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./src/assets/icons/phone-call.svg
/* harmony default export */ const phone_call = ({"src":"/_next/static/media/phone-call.b34bc5db.svg","height":512,"width":512,"blurWidth":0,"blurHeight":0});
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./src/components/UI/SuccessModal/SuccessModal.jsx + 1 modules
var SuccessModal = __webpack_require__(6986);
;// CONCATENATED MODULE: ./src/components/Layout/Footer/Footer.jsx










const Footer = ()=>{
    const nav = [
        {
            title: "О НАС",
            href: "#about"
        },
        {
            title: "СЕРВИСЫ",
            href: "#services"
        },
        {
            title: "ПОРТФОЛИО",
            href: "#portfolio"
        }
    ];
    const [inputValue, setInputValue] = (0,external_react_.useState)("");
    const [success, setSuccess] = (0,external_react_.useState)(false);
    let tg = {
        token: "6242136083:AAF1sg_MpGg-rV_FtN6wVWo3ulF-kPa72Co",
        chat_id: "1778083508"
    };
    function sendMessage() {
        const url = `https://api.telegram.org/bot${tg.token}/sendMessage?chat_id=${tg.chat_id}&text=${`ASTROLAB.UZ: Для проекта: ${inputValue.replace(/[^0-9]/g, "")}`}`; // The url to request
        const xht = new XMLHttpRequest();
        xht.onreadystatechange = function() {
            if (xht.readyState == XMLHttpRequest.DONE) {
                if (JSON.parse(xht.responseText).ok) {
                    setSuccess((prev)=>!prev);
                    setInputValue("");
                }
            }
        };
        xht.open("GET", url);
        xht.send();
    }
    const onSubmit = (e)=>{
        e.preventDefault();
        let value = inputValue.replace(/[^0-9]/g, "");
        if (value?.length === 12) {
            sendMessage();
        }
    };
    const onChangeHref = (href)=>{
        if (window.location.pathname === "/vacancies") {
            setTimeout(()=>{
                window.location.href = `${href}`;
            }, 0);
        } else {
            window.location.href = `${href}`;
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("footer", {
                className: "bg-[#0b0b21] pt-10 mt-20",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "wrapper text-white ",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "lg:flex justify-between py-3",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "lg:grid hidden gap-4",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "flex gap-10",
                                            children: [
                                                nav.map((item, index)=>/*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                        href: "/",
                                                        onClick: ()=>onChangeHref(item?.href),
                                                        className: "lg:text-xl text-lg",
                                                        children: item.title
                                                    }, index)),
                                                /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                    href: "/vacancies",
                                                    className: "lg:text-xl text-lg",
                                                    children: "ВАКАНСИИ"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "flex gap-5 text-lg justify-between",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "flex items-center gap-3",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                            src: envelope,
                                                            alt: "",
                                                            className: "w-5"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                            href: "mailto:info@astrolab.uz",
                                                            children: "info@astrolab.uz"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "flex items-center gap-3",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                            src: phone_call,
                                                            alt: "",
                                                            className: "w-5"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                            href: "tel:+998712000321",
                                                            children: "+998 71 200-03-21"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                            href: "https://yandex.uz/maps/10335/tashkent/house/YkAYdANpSkIDQFprfX9wcXVhZQ==/?ll=69.249373%2C41.310921&z=16.74",
                                            target: "_blank",
                                            className: "group relative flex items-center gap-3 bg-transparent py-2 px-5 rounded-def border border-white duration-700 hover:bg-[#2e4683] cursor-pointer",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                    src: marker,
                                                    alt: "",
                                                    className: "w-5 "
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                    children: "Ислам Каримов 49, 10 этаж"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    className: "absolute right-1 group-hover:bg-white group-hover:text-[#2e4683] duration-700 bg-[#2e4683] py-1 px-4 rounded-[7px]",
                                                    children: "Map"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            className: "lg:text-2xl text-xl",
                                            children: "Готовы обсудить детали проекта?"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "lg:flex grid lg:gap-0 gap-2 items-center",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx((external_react_input_mask_default()), {
                                                    mask: "+\\9\\9\\8\\ 99 999 99 99",
                                                    maskChar: " ",
                                                    onChange: (e)=>setInputValue(e.target.value),
                                                    value: inputValue,
                                                    required: true,
                                                    placeholder: "Номер телефона *",
                                                    className: "outline-none bg-transparent text-xl mt-3 border-b-[1px] border-b-gray-500 p-2"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("button", {
                                                    className: "px-5 py-2 bg-[#466ACC] rounded-def lg:ml-5",
                                                    onClick: onSubmit,
                                                    children: "Отправить"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "grid gap-1 lg:text-lg text-sm  lg:hidden",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "flex justify-between items-center",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                    src: envelope,
                                                    alt: "",
                                                    className: "w-3"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                    href: "mailto:info@astrolab.uz",
                                                    children: "info@astrolab.uz"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                                    src: phone_call,
                                                    alt: "",
                                                    className: "w-3"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                    href: "tel:+998712000321",
                                                    children: "+998 71 200-03-21"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                    href: "https://yandex.uz/maps/10335/tashkent/house/YkAYdANpSkIDQFprfX9wcXVhZQ==/?ll=69.249373%2C41.310921&z=16.74",
                                    target: "_blank",
                                    className: "group mt-5 relative flex items-center gap-2 bg-transparent py-2 px-2 rounded-def border border-white duration-700 hover:bg-[#2e4683] cursor-pointer",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                            src: marker,
                                            alt: "",
                                            className: "w-3 "
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            children: "Ислам Каримов 49, 10 этаж"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                            className: "absolute right-1 group-hover:bg-white group-hover:text-[#2e4683] duration-700 bg-[#2e4683] py-1 px-4 rounded-[7px]",
                                            children: "Map"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "border-t-[1px] border-t-gray-500 text-center py-5 mt-5",
                            children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                                className: "text-xs lg:text-base ",
                                children: "\xa9 ASTROLAB GROUP 2023. Все права защищены."
                            })
                        })
                    ]
                })
            }),
            success && /*#__PURE__*/ jsx_runtime.jsx(SuccessModal/* default */.Z, {
                setSuccess: setSuccess
            })
        ]
    });
};
/* harmony default export */ const Footer_Footer = (Footer);

;// CONCATENATED MODULE: ./src/components/Layout/Footer/index.js


;// CONCATENATED MODULE: ./src/assets/images/logo.png
/* harmony default export */ const logo = ({"src":"/_next/static/media/logo.8a7f9f9c.png","height":142,"width":1092,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAYAAADjAO9DAAAAIElEQVR4nGNkYEgNY2BgEAPiV0AsBMQ+QDwViFmA2BIANcYC7ST82VcAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":1});
;// CONCATENATED MODULE: ./src/assets/images/astrologoWhite.png
/* harmony default export */ const astrologoWhite = ({"src":"/_next/static/media/astrologoWhite.0e3456bf.png","height":142,"width":1091,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAYAAADjAO9DAAAAIElEQVR4nGP89+9fOAMDgygQvwJiISD2AeKpQMwCxJYAhjoFguMdC4gAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":1});
;// CONCATENATED MODULE: external "hamburger-react"
const external_hamburger_react_namespaceObject = require("hamburger-react");
var external_hamburger_react_default = /*#__PURE__*/__webpack_require__.n(external_hamburger_react_namespaceObject);
// EXTERNAL MODULE: ./src/components/Layout/Header/index.module.scss
var Header_index_module = __webpack_require__(5348);
var Header_index_module_default = /*#__PURE__*/__webpack_require__.n(Header_index_module);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
;// CONCATENATED MODULE: ./src/components/Layout/Header/Header.jsx





// import { gsap } from "gsap";





const Header = ()=>{
    const [open, setOpen] = (0,external_react_.useState)(false);
    const router = (0,router_namespaceObject.useRouter)();
    const nav = [
        {
            title: "О НАС",
            href: "/#about"
        },
        {
            title: "СЕРВИСЫ",
            href: "/#services"
        },
        {
            title: "ПОРТФОЛИО",
            href: "#portfolio"
        }
    ];
    (0,external_react_.useEffect)(()=>{
        window.onscroll = function() {
            if (window.screen.width > 500) {
                if (window.location.pathname === "/") {
                    myFunction();
                }
            }
        };
    });
    function myFunction() {
        if (document.documentElement.scrollTop > 50) {
            if (window.location.pathname === "/") {
                document.getElementById("header").style.top = "0";
                document.getElementById("mouseToggle").style.opacity = "0";
                return;
            }
            document.getElementById("header").style.top = "0";
        } else {
            if (window.location.pathname === "/") {
                document.getElementById("mouseToggle").style.opacity = "1";
                document.getElementById("header").style.top = "-100px";
                return;
            }
            document.getElementById("header").style.top = "-100px";
        }
    }
    (0,external_react_.useEffect)(()=>{
        if (window.screen.width < 500 || window.location.pathname !== "/") {
            document.getElementById("header").style.top = "0";
        }
    }, []);
    (0,external_react_.useEffect)(()=>{
        if (open) {
            window.document.body.style.overflow = "hidden";
        } else {
            window.document.body.style.overflow = "auto";
        }
    });
    const onChangeHref = (href)=>{
        if (window.location.pathname === "/vacancies") {
            router.push("/");
            setTimeout(()=>{
                setOpen(false);
                window.location.href = `${href}`;
            }, 0);
        } else {
            setOpen(false);
            window.location.href = `${href}`;
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("header", {
                className: `${(Header_index_module_default()).Header} flex fixed z-[99] -top-[100px] w-full bg-white`,
                id: "header",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("nav", {
                    className: "wrapper flex items-center justify-between w-full ",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                            href: "/",
                            children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                src: logo,
                                alt: "",
                                width: 265
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                            className: "items-center gap-5 text-black text-2xl uppercase hidden lg:flex",
                            children: [
                                nav.map((item, index)=>/*#__PURE__*/ jsx_runtime.jsx("li", {
                                        className: "cursor-pointer",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            onClick: ()=>onChangeHref(item?.href),
                                            children: item.title
                                        })
                                    }, index)),
                                /*#__PURE__*/ jsx_runtime.jsx("li", {
                                    className: "cursor-pointer",
                                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                        href: "/vacancies",
                                        children: "ВАКАНСИИ"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "hamburger lg:hidden block",
                            children: /*#__PURE__*/ jsx_runtime.jsx((external_hamburger_react_default()), {
                                color: "#2e4683",
                                toggled: open,
                                toggle: setOpen
                            })
                        })
                    ]
                })
            }),
            open && /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "fixed top-[80px] bg-[#000000a2] w-full h-full z-[100]",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "fixed bg-white rounded-tl-2xl rounded-bl-2xl w-[70%] top-[80px] right-0 h-[90vh] text-center grid place-items-center",
                    "data-aos": "fade-left",
                    "data-aos-offset": "500",
                    "data-aos-duration": "500",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                        className: "items-center gap-5 text-black text-xl uppercase grid ",
                        children: [
                            nav.map((item, index)=>/*#__PURE__*/ jsx_runtime.jsx("li", {
                                    className: "cursor-pointer",
                                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                        href: "/",
                                        onClick: ()=>onChangeHref(item?.href),
                                        children: item.title
                                    })
                                }, index)),
                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                className: "cursor-pointer",
                                onClick: ()=>setOpen(false),
                                children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                    href: "/vacancies",
                                    children: "ВАКАНСИИ"
                                })
                            })
                        ]
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const Header_Header = (Header);

;// CONCATENATED MODULE: ./src/components/Layout/Header/index.js


;// CONCATENATED MODULE: ./src/components/Layout/Layout.jsx




const Layout = ({ children  })=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(Header_Header, {}),
            children,
            /*#__PURE__*/ jsx_runtime.jsx(Footer_Footer, {}),
            /*#__PURE__*/ jsx_runtime.jsx(Loader_Loader, {})
        ]
    });
};
/* harmony default export */ const Layout_Layout = (Layout);

;// CONCATENATED MODULE: ./src/components/Layout/index.js


;// CONCATENATED MODULE: external "react-redux"
const external_react_redux_namespaceObject = require("react-redux");
;// CONCATENATED MODULE: external "@reduxjs/toolkit"
const toolkit_namespaceObject = require("@reduxjs/toolkit");
// EXTERNAL MODULE: ./src/store/endpoints/portfoilo.js
var portfoilo = __webpack_require__(3326);
// EXTERNAL MODULE: ./src/store/endpoints/services.js
var services = __webpack_require__(8240);
// EXTERNAL MODULE: ./src/store/endpoints/vacancies.js
var vacancies = __webpack_require__(6875);
;// CONCATENATED MODULE: ./src/store/store.js




const store = (0,toolkit_namespaceObject.configureStore)({
    reducer: {
        [portfoilo/* Portfolio */._.reducerPath]: portfoilo/* Portfolio */._.reducer,
        [services/* Services */.K.reducerPath]: services/* Services */.K.reducer,
        [vacancies/* Vacancies */.Z.reducerPath]: vacancies/* Vacancies */.Z.reducer
    },
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(portfoilo/* Portfolio */._.middleware).concat(services/* Services */.K.middleware).concat(vacancies/* Vacancies */.Z.middleware)
});

// EXTERNAL MODULE: ./src/pages/index.scss
var pages = __webpack_require__(9745);
;// CONCATENATED MODULE: ./src/pages/_app.js








// import "../styles/globals.css";
function MyApp({ Component , pageProps  }) {
    (0,external_react_.useEffect)(()=>{
        external_aos_default().init();
    }, []);
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: /*#__PURE__*/ jsx_runtime.jsx(external_react_redux_namespaceObject.Provider, {
            store: store,
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(Layout_Layout, {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx((external_nextjs_progressbar_default()), {
                        color: "#000066"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(Component, {
                        ...pageProps
                    })
                ]
            })
        })
    });
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js&preferredRegion=!

        // Next.js Route Loader
        
        

        // Import the userland code.
        

        // Re-export the component (should be the default export).
        /* harmony default export */ const next_route_loaderpage_2F_app_absolutePagePath_private_next_pages_2F_app_js_preferredRegion_ = ((0,helpers/* hoist */.l)(_app_namespaceObject, "default"));

        // Re-export methods.
        const getStaticProps = (0,helpers/* hoist */.l)(_app_namespaceObject, "getStaticProps")
        const getStaticPaths = (0,helpers/* hoist */.l)(_app_namespaceObject, "getStaticPaths")
        const getServerSideProps = (0,helpers/* hoist */.l)(_app_namespaceObject, "getServerSideProps")
        const config = (0,helpers/* hoist */.l)(_app_namespaceObject, "config")
        const reportWebVitals = (0,helpers/* hoist */.l)(_app_namespaceObject, "reportWebVitals")

        // Re-export legacy methods.
        const unstable_getStaticProps = (0,helpers/* hoist */.l)(_app_namespaceObject, "unstable_getStaticProps")
        const unstable_getStaticPaths = (0,helpers/* hoist */.l)(_app_namespaceObject, "unstable_getStaticPaths")
        const unstable_getStaticParams = (0,helpers/* hoist */.l)(_app_namespaceObject, "unstable_getStaticParams")
        const unstable_getServerProps = (0,helpers/* hoist */.l)(_app_namespaceObject, "unstable_getServerProps")
        const unstable_getServerSideProps = (0,helpers/* hoist */.l)(_app_namespaceObject, "unstable_getServerSideProps")

        // Create and export the route module that will be consumed.
        const options = {"definition":{"kind":"PAGES","page":"/_app","pathname":"/_app","bundlePath":"","filename":""}}
        const routeModule = new (module_default())({ ...options, userland: _app_namespaceObject })
        
        
    

/***/ }),

/***/ 9745:
/***/ (() => {



/***/ }),

/***/ 4335:
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit/query/react");

/***/ }),

/***/ 5725:
/***/ ((module) => {

"use strict";
module.exports = require("antd");

/***/ }),

/***/ 3076:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 3100:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/render.js");

/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 4648:
/***/ ((module) => {

"use strict";
module.exports = require("react-input-mask");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [636,584,664,605,441], () => (__webpack_exec__(1572)));
module.exports = __webpack_exports__;

})();