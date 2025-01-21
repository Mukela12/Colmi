"use strict";
exports.id = 2652;
exports.ids = [2652];
exports.modules = {

/***/ 2652:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Metro)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/common/initIsotope.js
var initIsotope = __webpack_require__(2627);
;// CONCATENATED MODULE: ./src/data/Portfolio/metro.json
const metro_namespaceObject = JSON.parse('{"u":[{"id":1,"title":"All","filter":"*","count":"08"},{"id":2,"title":"Branding","filter":".brand","count":"03"},{"id":3,"title":"Mobile App","filter":".app","count":"02"},{"id":4,"title":"Creative","filter":".web","count":"03"}],"l":[{"id":1,"filter":"web","image":"/dark/assets/imgs/works/grid/1.jpg","type":"Design ART","year":"2023","title":"Character Design","width":"3","height":"1"},{"id":2,"filter":"app","image":"/dark/assets/imgs/works/grid/10.jpg","type":"Design ART","year":"2023","title":"Character Design","width":"3","height":"2"},{"id":3,"filter":"brand","image":"/dark/assets/imgs/works/grid/3.jpg","type":"Design ART","year":"2023","title":"Character Design","width":"6","height":"1"},{"id":4,"filter":"web","image":"/dark/assets/imgs/works/grid/4.jpg","type":"Design ART","year":"2023","title":"Character Design","width":"3","height":"2"},{"id":5,"filter":"brand","image":"/dark/assets/imgs/works/grid/5.jpg","type":"Design ART","year":"2023","title":"Character Design","width":"6","height":"1"},{"id":6,"filter":"app","image":"/dark/assets/imgs/works/grid/6.jpg","type":"Design ART","year":"2023","title":"Character Design","width":"6","height":"2"},{"id":7,"filter":"web","image":"/dark/assets/imgs/works/grid/7.jpg","type":"Design ART","year":"2023","title":"Character Design","width":"3","height":"2"},{"id":8,"filter":"brand","image":"/dark/assets/imgs/works/grid/8.jpg","type":"Design ART","year":"2023","title":"Character Design","width":"3","height":"2"}]}');
;// CONCATENATED MODULE: ./src/components/Portfolio/Metro.jsx



//= Scripts

//= Data

function Grid() {
    (0,external_react_.useEffect)(()=>{
        (0,initIsotope/* default */.Z)();
    }, []);
    return /*#__PURE__*/ jsx_runtime.jsx("section", {
        className: "portfolio section-padding pb-100",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "container-xxl",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "row",
                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "filtering col-12 mb-80 text-center",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "filter",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                    className: "text",
                                    children: "Filter By :"
                                }),
                                metro_namespaceObject.u.map((item, index)=>/*#__PURE__*/ jsx_runtime.jsx("span", {
                                        "data-filter": item.filter,
                                        className: index === 0 ? "active" : "",
                                        "data-count": item.count,
                                        children: item.title
                                    }, item.id))
                            ]
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "gallery metro text-center",
                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "row",
                        children: metro_namespaceObject.l.map((item)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: `col-lg-${item.width} col-md-6 items ${item.filter} info-overlay height-${item.height} mb-30`,
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "item-img o-hidden",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                            href: "/dark/project-details1",
                                            className: "imago wow",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "inner wow",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                    src: item.image,
                                                    alt: "image"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "info",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("h6", {
                                                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                        href: "/dark/project-details1",
                                                        children: item.title
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    className: "sub-title tag",
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                                        href: "/dark/project-details1",
                                                        children: [
                                                            "\xa9 ",
                                                            item.year,
                                                            " ",
                                                            /*#__PURE__*/ jsx_runtime.jsx("br", {}),
                                                            " ",
                                                            item.type
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }, item.id))
                    })
                })
            ]
        })
    });
}
/* harmony default export */ const Metro = (Grid);


/***/ })

};
;