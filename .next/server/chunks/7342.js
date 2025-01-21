"use strict";
exports.id = 7342;
exports.ids = [7342];
exports.modules = {

/***/ 7342:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Portfolio_ModernGrid)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/data/Portfolio/modern-grid.json
const modern_grid_namespaceObject = JSON.parse('[{"id":1,"image":"/dark/assets/imgs/portfolio/2/1.jpg","year":"2023","type":"Branding","style":{"width":5,"isFullWidth":false,"mb":80}},{"id":2,"image":"/dark/assets/imgs/portfolio/2/3.jpg","year":"2023","type":"Branding","style":{"width":6,"align":"valign","isFullWidth":true,"mt":80,"innerCol":"8"}},{"id":3,"image":"/dark/assets/imgs/portfolio/2/2.jpg","year":"2023","type":"Branding","style":{"width":6,"align":"valign","isFullWidth":true,"mt":80,"innerCol":"9"}},{"id":4,"image":"/dark/assets/imgs/portfolio/2/4.jpg","year":"2023","type":"Branding","style":{"width":6,"isFullWidth":false,"mt":80,"innerCol":"9"}},{"id":5,"image":"/dark/assets/imgs/portfolio/2/5.jpg","year":"2023","type":"Branding","style":{"width":6,"isFullWidth":false,"mt":80,"innerCol":"9"}},{"id":6,"image":"/dark/assets/imgs/portfolio/2/6.jpg","year":"2023","type":"Branding","style":{"width":6,"align":"valign","isFullWidth":true,"mt":80,"innerCol":"9"}}]');
;// CONCATENATED MODULE: ./src/components/Portfolio/ModernGrid.jsx



//= Data

function ModernGrid() {
    return /*#__PURE__*/ jsx_runtime.jsx("section", {
        className: "portfolio section-padding",
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "row justify-content-center",
                children: modern_grid_namespaceObject.map((item)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: `col-lg-${item.style.width} ${item.style.align ? item.style.align : ""}`,
                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: `item md-mb80 ${item.style.isFullWidth ? "full-width" : ""} ${item.style.mt ? "mt-" + item.style.mt : ""} ${item.style.mb ? "mb-" + item.style.mb : ""}`,
                            children: item.style.innerCol ? /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "row justify-content-center",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: `col-lg-${item.style.innerCol}`,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "img",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                src: item.image,
                                                alt: ""
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "cont mt-30 d-flex",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("h6", {
                                                            className: "line-height-1",
                                                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                                href: "/dark/project-details2",
                                                                children: "From our gallery"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                            children: item.type
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "ml-auto",
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                                        className: "fz-14",
                                                        children: [
                                                            "\xa9 ",
                                                            item.year
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }) : /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "img",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                            src: item.image,
                                            alt: ""
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "cont mt-30 d-flex",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("h6", {
                                                        className: "line-height-1",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                            href: "/dark/project-details2",
                                                            children: "From our gallery"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                        children: item.type
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "ml-auto",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                                    className: "fz-14",
                                                    children: [
                                                        "\xa9 ",
                                                        item.year
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    }, item.id))
            })
        })
    });
}
/* harmony default export */ const Portfolio_ModernGrid = (ModernGrid);


/***/ })

};
;