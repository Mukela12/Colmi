"use strict";
exports.id = 6421;
exports.ids = [6421];
exports.modules = {

/***/ 3037:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ isInView)
/* harmony export */ });
function isInView(options) {
    if (!options.selector || !options.callback) return;
    if (options.isElements) {
        document.querySelectorAll(options.selector).forEach((element)=>{
            new IntersectionObserver((entries)=>{
                if (entries[0].isIntersecting) options.callback(entries[0].target);
                else {
                    if (options.whenOutOfView) options.whenOutOfView(entries[0].target);
                }
            }).observe(element);
        });
    } else {
        new IntersectionObserver((entries)=>{
            if (entries[0].isIntersecting) options.callback(entries[0].target);
            else {
                if (options.whenOutOfView) options.whenOutOfView(entries[0].target);
            }
        }).observe(document.querySelector(options.selector));
    }
}


/***/ }),

/***/ 236:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function FAQ() {
    function openAccordion(event) {
        document.querySelectorAll(".accordion-info").forEach((element)=>{
            element.classList.remove("active");
            element.style.maxHeight = 0;
            element.parentElement.classList.remove("active");
        });
        event.currentTarget.parentElement.classList.add("active");
        event.currentTarget.nextElementSibling.style.maxHeight = "300px";
        event.currentTarget.nextElementSibling.classList.add("active");
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "intro-corp section-padding pt-0",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-lg-5",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "sec-head mb-40",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                className: "sub-title",
                                children: "FAQ."
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-lg-7",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "cont",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "text",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                        className: "d-slideup wow",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "sideup-text",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "up-text",
                                                    children: "Watch the creative process"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "sideup-text",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                    className: "up-text",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            children: "behind our digital marketing"
                                                        }),
                                                        "."
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "accordion bord mt-40",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "item mb-15 wow fadeInUp",
                                            "data-wow-delay": ".1s",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "title",
                                                    onClick: openAccordion,
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                            className: "fz-18",
                                                            children: "The Power of Influencer Marketing"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "ico"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "accordion-info",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "fz-14",
                                                        children: "Taken possession of my entire soul, like these sweet mornings of spring which i enjoy with my whole."
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "item mb-15 wow fadeInUp",
                                            "data-wow-delay": ".3s",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "title",
                                                    onClick: openAccordion,
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                            className: "fz-18",
                                                            children: "Unique and Influential Design"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "ico"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "accordion-info",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "fz-14",
                                                        children: "Taken possession of my entire soul, like these sweet mornings of spring which i enjoy with my whole."
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "item wow fadeInUp",
                                            "data-wow-delay": ".5s",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "title",
                                                    onClick: openAccordion,
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                            className: "fz-18",
                                                            children: "We Build and Activate Brands"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "ico"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "accordion-info",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "fz-14",
                                                        children: "Taken possession of my entire soul, like these sweet mornings of spring which i enjoy with my whole."
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FAQ);


/***/ }),

/***/ 1755:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Services_Portfolio)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/common/loadBackgroudImages.js
var loadBackgroudImages = __webpack_require__(8366);
// EXTERNAL MODULE: ./src/common/isInView.js
var isInView = __webpack_require__(3037);
;// CONCATENATED MODULE: ./src/data/InnerPages/Services/portfolio.json
const portfolio_namespaceObject = JSON.parse('[{"id":1,"image":"assets/imgs/portfolio/gallery/1.jpg","number":"01.","type":"Digital","title":"Luxury Glassware","text":"We craft premium designs for agencies and global brands around the globe."},{"id":2,"image":"assets/imgs/portfolio/gallery/2.jpg","number":"02.","type":"Marketing","title":"Brand Identity","text":"We craft premium designs for agencies and global brands around the globe."},{"id":3,"image":"assets/imgs/portfolio/gallery/3.jpg","number":"03.","type":"Design","title":"Roseville Pottery","text":"We craft premium designs for agencies and global brands around the globe."}]');
;// CONCATENATED MODULE: ./src/components/InnerPages/Services/Portfolio.jsx


//= Scripts


//= Data

function Portfolio({ lightMode  }) {
    (0,external_react_.useEffect)(()=>{
        (0,loadBackgroudImages/* default */.Z)();
        window.addEventListener("scroll", handleShowTabs);
        return ()=>window.removeEventListener("scroll", handleShowTabs);
    }, []);
    function handleShowTabs() {
        (0,isInView/* default */.Z)({
            selector: ".portfolio-fixed .sub-bg .cont",
            isElements: true,
            callback (element) {
                element.classList.add("current");
                document.querySelector("#" + element.getAttribute("data-tab")).classList.add("current");
            },
            whenOutOfView (element) {
                element.classList.remove("current");
                document.querySelector("#" + element.getAttribute("data-tab")).classList.remove("current");
            }
        });
        const leftSide = document.getElementById("sticky_item");
        if (!leftSide) return;
        const width = leftSide.getBoundingClientRect().width;
        const portfolio = document.querySelector(".portfolio-fixed").getBoundingClientRect();
        if (portfolio.top < 75 && portfolio.height / 2 < portfolio.bottom + 400) {
            leftSide.style.position = "fixed";
            leftSide.style.top = "0px";
            leftSide.style.width = width + "px";
            leftSide.classList.remove("is_stuck");
        } else if (portfolio.height / 2 > portfolio.bottom + 400) {
            leftSide.style.position = "absolute";
            leftSide.style.top = "auto";
            leftSide.style.bottom = "0";
            leftSide.style.width = width + "px";
            leftSide.classList.add("is_stuck");
        } else {
            leftSide.style.position = "relative";
            leftSide.style.top = "unset";
            leftSide.style.bottom = "unset";
            leftSide.style.width = "auto";
        }
    }
    return /*#__PURE__*/ jsx_runtime.jsx("section", {
        className: "portfolio-fixed",
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "container-fluid rest",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "col-lg-6 rest",
                        style: {
                            position: "relative"
                        },
                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "left",
                            id: "sticky_item",
                            children: portfolio_namespaceObject.map((item, index)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                                    id: `tab-${index + 1}`,
                                    className: "img bg-img",
                                    "data-background": `${lightMode ? "/light/" : "/dark/"}${item.image}`
                                }, index))
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "col-lg-6 sub-bg right",
                        children: portfolio_namespaceObject.map((item, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: `cont ${index === 0 ? "active" : ""}`,
                                "data-tab": `tab-${index + 1}`,
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "img-hiden",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                            src: `${lightMode ? "/light/" : "/dark/"}${item.image}`,
                                            alt: ""
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                        className: "sub-title mb-15",
                                        children: [
                                            item.number,
                                            " ",
                                            item.type
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("h2", {
                                        className: "mb-15",
                                        children: [
                                            item.title,
                                            "."
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "row justify-content-center",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "col-md-11",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                                    children: [
                                                        item.text,
                                                        "."
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                                    className: "rest list-arrow mt-30",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                    className: "icon",
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                                                        width: "100%",
                                                                        height: "100%",
                                                                        viewBox: "0 0 9 8",
                                                                        fill: "none",
                                                                        xmlns: "http://www.w3.org/2000/svg",
                                                                        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                            fillRule: "evenodd",
                                                                            clipRule: "evenodd",
                                                                            d: "M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z",
                                                                            fill: "currentColor"
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("h6", {
                                                                    className: "inline fz-16 fw-400",
                                                                    children: "Make your business visible online."
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                            className: "mt-5",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                    className: "icon",
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                                                        width: "100%",
                                                                        height: "100%",
                                                                        viewBox: "0 0 9 8",
                                                                        fill: "none",
                                                                        xmlns: "http://www.w3.org/2000/svg",
                                                                        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                            fillRule: "evenodd",
                                                                            clipRule: "evenodd",
                                                                            d: "M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z",
                                                                            fill: "currentColor"
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("h6", {
                                                                    className: "inline fz-16 fw-400",
                                                                    children: "Make your eCommerce business stand out."
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                            className: "mt-5",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                    className: "icon",
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                                                        width: "100%",
                                                                        height: "100%",
                                                                        viewBox: "0 0 9 8",
                                                                        fill: "none",
                                                                        xmlns: "http://www.w3.org/2000/svg",
                                                                        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                            fillRule: "evenodd",
                                                                            clipRule: "evenodd",
                                                                            d: "M7.71108 3.78684L8.22361 4.29813L7.71263 4.80992L4.64672 7.87832L4.13433 7.36688L6.87531 4.62335H1.11181H0.750039H0.388177L0.382812 0.718232H1.10645L1.11082 3.90005H6.80113L4.12591 1.22972L4.63689 0.718262L7.71108 3.78684Z",
                                                                            fill: "currentColor"
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("h6", {
                                                                    className: "inline fz-16 fw-400",
                                                                    children: "Grow with your audience."
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                                    href: "#0",
                                                    className: "butn-circle d-flex align-items-center text-center mt-50",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                            className: "full-width",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                    children: /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                                                        width: "18",
                                                                        height: "18",
                                                                        viewBox: "0 0 18 18",
                                                                        fill: "none",
                                                                        xmlns: "http://www.w3.org/2000/svg",
                                                                        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                                            d: "M13.922 4.5V11.8125C13.922 11.9244 13.8776 12.0317 13.7985 12.1108C13.7193 12.1899 13.612 12.2344 13.5002 12.2344C13.3883 12.2344 13.281 12.1899 13.2018 12.1108C13.1227 12.0317 13.0783 11.9244 13.0783 11.8125V5.51953L4.79547 13.7953C4.71715 13.8736 4.61092 13.9176 4.50015 13.9176C4.38939 13.9176 4.28316 13.8736 4.20484 13.7953C4.12652 13.717 4.08252 13.6108 4.08252 13.5C4.08252 13.3892 4.12652 13.283 4.20484 13.2047L12.4806 4.92188H6.18765C6.07577 4.92188 5.96846 4.87743 5.88934 4.79831C5.81023 4.71919 5.76578 4.61189 5.76578 4.5C5.76578 4.38811 5.81023 4.28081 5.88934 4.20169C5.96846 4.12257 6.07577 4.07813 6.18765 4.07812H13.5002C13.612 4.07813 13.7193 4.12257 13.7985 4.20169C13.8776 4.28081 13.922 4.38811 13.922 4.5Z",
                                                                            fill: "currentColor"
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                    className: "full-width",
                                                                    children: "View Details"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                            src: `/${lightMode ? "light" : "dark"}/assets/imgs/svg-assets/circle-star.svg`,
                                                            alt: "",
                                                            className: "circle-star"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    })
                                ]
                            }, index))
                    })
                ]
            })
        })
    });
}
/* harmony default export */ const Services_Portfolio = (Portfolio);


/***/ })

};
;