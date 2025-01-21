"use strict";
exports.id = 2905;
exports.ids = [2905];
exports.modules = {

/***/ 2905:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Showcases_FrameSlider)
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
;// CONCATENATED MODULE: ./src/data/Showcases/frame-slider.json
const frame_slider_namespaceObject = JSON.parse('[{"id":1,"background":"/dark/assets/imgs/works/full/1.jpg","year":"2023","type":"Branding","title":"Basket Lamp"},{"id":2,"background":"/dark/assets/imgs/works/full/2.jpg","year":"2023","type":"Branding","title":"Moon Light"},{"id":3,"background":"/dark/assets/imgs/works/full/3.jpg","year":"2023","type":"Branding","title":"Red Glasses"},{"id":4,"background":"/dark/assets/imgs/works/full/4.jpg","year":"2023","type":"Branding","title":"Waffile Maker"},{"id":5,"background":"/dark/assets/imgs/works/full/5.jpg","year":"2023","type":"Branding","title":"Headphone"}]');
;// CONCATENATED MODULE: ./src/components/Showcases/FrameSlider/index.jsx



//= Scripts

//= Data

function FrameSlider() {
    (0,external_react_.useEffect)(()=>{
        (0,loadBackgroudImages/* default */.Z)();
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "slideshow",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "slides slides--images",
                children: frame_slider_namespaceObject.map((item, index)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: `slide ${index === 0 ? "slide--current" : ""}`,
                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "slide__img bg-img",
                            "data-background": item.background
                        })
                    }, item.id))
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "slides slides--titles",
                children: frame_slider_namespaceObject.map((item, index)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: `slide ${index === 0 ? "slide--current" : ""}`,
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("h1", {
                            className: "slide__title text-center",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                    className: "sub-title mb-15",
                                    children: [
                                        "\xa9 ",
                                        item.year,
                                        " ",
                                        item.type
                                    ]
                                }),
                                " ",
                                /*#__PURE__*/ jsx_runtime.jsx("br", {}),
                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                        href: "/dark/project-details1",
                                        children: item.title
                                    })
                                })
                            ]
                        })
                    }, item.id))
            }),
            /*#__PURE__*/ jsx_runtime.jsx("nav", {
                className: "slidenav",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                            className: "slidenav__item slidenav__item--prev cursor-pointer",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                    children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                        className: "fas fa-chevron-left"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                    children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                        children: "Prev"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                            className: "slidenav__item slidenav__item--next cursor-pointer",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                    children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                        children: "Next"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                    children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                        className: "fas fa-chevron-right"
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}
/* harmony default export */ const Showcases_FrameSlider = (FrameSlider);


/***/ })

};
;