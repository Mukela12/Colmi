"use strict";
exports.id = 1763;
exports.ids = [1763];
exports.modules = {

/***/ 1763:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ _4Col)
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
;// CONCATENATED MODULE: ./src/data/Portfolio/masonry-4.json
const masonry_4_namespaceObject = JSON.parse('{"u":[{"id":1,"title":"All","filter":"*","count":"08"},{"id":2,"title":"Branding","filter":".brand","count":"03"},{"id":3,"title":"Mobile App","filter":".app","count":"02"},{"id":4,"title":"Creative","filter":".web","count":"03"}],"l":[{"id":1,"filter":"web","image":"/dark/assets/imgs/works/grid2/1.jpg","type":"Design ART","year":"2023","title":"Character Design"},{"id":2,"filter":"app","image":"/dark/assets/imgs/works/grid2/v1.jpg","type":"Design ART","year":"2023","title":"Character Design"},{"id":3,"filter":"web","image":"/dark/assets/imgs/works/grid2/2.jpg","type":"Design ART","year":"2023","title":"Character Design"},{"id":4,"filter":"brand","image":"/dark/assets/imgs/works/grid2/v2.jpg","type":"Design ART","year":"2023","title":"Character Design"},{"id":5,"filter":"app","image":"/dark/assets/imgs/works/grid2/v3.jpg","type":"Design ART","year":"2023","title":"Character Design"},{"id":6,"filter":"app","image":"/dark/assets/imgs/works/grid2/v4.jpg","type":"Design ART","year":"2023","title":"Character Design"},{"id":7,"filter":"brand","image":"/dark/assets/imgs/works/grid2/5.jpg","type":"Design ART","year":"2023","title":"Character Design"},{"id":8,"filter":"brand","image":"/dark/assets/imgs/works/grid2/4.jpg","type":"Design ART","year":"2023","title":"Character Design"}]}');
;// CONCATENATED MODULE: ./src/components/Portfolio/Masonry/4Col.jsx



//= Scripts

//= Data

function Masonry() {
    (0,external_react_.useEffect)(()=>{
        (0,initIsotope/* default */.Z)();
    }, []);
    return /*#__PURE__*/ jsx_runtime.jsx("section", {
        className: "portfolio section-padding pb-40",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "container-fluid",
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
                                masonry_4_namespaceObject.u.map((item, index)=>/*#__PURE__*/ jsx_runtime.jsx("span", {
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
                    className: "gallery",
                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "row masonry",
                        children: masonry_4_namespaceObject.l.map((item)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: `col-lg-3 col-md-6 items ${item.filter} info-overlay mb-50`,
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
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    className: "mb-15",
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
                                                /*#__PURE__*/ jsx_runtime.jsx("h6", {
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
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("h5", {
                                                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                        href: "/dark/project-details1",
                                                        children: item.title
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
/* harmony default export */ const _4Col = (Masonry);


/***/ })

};
;