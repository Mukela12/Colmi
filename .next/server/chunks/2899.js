"use strict";
exports.id = 2899;
exports.ids = [2899];
exports.modules = {

/***/ 2899:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ CircleSlider)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/common/loadBackgroudImages.js
var loadBackgroudImages = __webpack_require__(8366);
;// CONCATENATED MODULE: ./src/data/Showcases/circle-slider.json
const circle_slider_namespaceObject = JSON.parse('[{"id":1,"background":"/dark/assets/imgs/works/full/1.jpg","year":"2023","type":"Branding","title":"Basket Lamp"},{"id":2,"background":"/dark/assets/imgs/works/full/2.jpg","year":"2023","type":"Branding","title":"Moon Light"},{"id":3,"background":"/dark/assets/imgs/works/full/3.jpg","year":"2023","type":"Branding","title":"Red Glasses"},{"id":4,"background":"/dark/assets/imgs/works/full/4.jpg","year":"2023","type":"Branding","title":"Waffile Maker"},{"id":5,"background":"/dark/assets/imgs/works/full/5.jpg","year":"2023","type":"Branding","title":"Headphone"}]');
;// CONCATENATED MODULE: ./src/components/Showcases/CircleSlider/index.jsx



//= Scripts

//= Data

function FrameSlider({ lightMode  }) {
    (0,external_react_.useEffect)(()=>{
        (0,loadBackgroudImages/* default */.Z)();
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
        className: `position-re ${lightMode ? "bg-dark" : ""}`,
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "frame",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("nav", {
                    className: "slides-nav",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "slide-nav-butn",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("button", {
                                    className: "slides-nav__button slides-nav__button--prev",
                                    "aria-label": "Previous slide",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                d: "M1.176 11.532a.5.5 0 00-.352.936c5.228 1.96 9.475 5.555 12.752 10.797a.5.5 0 00.848-.53c-3.39-5.424-7.81-9.163-13.248-11.203z"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                d: "M1.176 12.468a.5.5 0 01-.352-.936C6.052 9.572 10.3 5.978 13.576.735a.5.5 0 01.848.53c-3.39 5.424-7.81 9.163-13.248 11.203z"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                d: "M1 12.5a.5.5 0 110-1h53a.5.5 0 110 1H1z"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("button", {
                                    className: "slides-nav__button slides-nav__button--next",
                                    "aria-label": "Next slide",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                d: "M53.824 11.532a.5.5 0 01.352.936c-5.228 1.96-9.475 5.555-12.752 10.797a.5.5 0 01-.848-.53c3.39-5.424 7.81-9.163 13.248-11.203z"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                d: "M53.824 12.468a.5.5 0 00.352-.936C48.948 9.572 44.7 5.978 41.424.735a.5.5 0 00-.848.53c3.39 5.424 7.81 9.163 13.248 11.203z"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                d: "M54 12.5a.5.5 0 100-1H1a.5.5 0 100 1h53z"
                                            })
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "slides-nav__index",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                    className: "slides-nav__index-current",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                        children: "1"
                                    })
                                }),
                                "—",
                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                    className: "slides-nav__index-total",
                                    children: "5"
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "slideshow",
                children: circle_slider_namespaceObject.map((item, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("figure", {
                        className: `slide ${index === 0 ? "slide--current" : ""}`,
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "slide__img-wrap",
                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "slide__img bg-img",
                                    "data-background": item.background
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("figcaption", {
                                className: "slide__caption",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("h1", {
                                        className: "slides__caption-headline",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                className: "text-row sub-title mb-15",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                    children: [
                                                        "\xa9 ",
                                                        item.year,
                                                        " ",
                                                        item.type
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                className: "text-row",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    children: item.title
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                        className: "slides__caption-link sub-title mt-30",
                                        href: "/dark/project-details1",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                            children: "Explore"
                                        })
                                    })
                                ]
                            })
                        ]
                    }, item.id))
            })
        ]
    });
}
/* harmony default export */ const CircleSlider = (FrameSlider);


/***/ })

};
;