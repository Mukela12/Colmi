"use strict";
exports.id = 4698;
exports.ids = [4698];
exports.modules = {

/***/ 4698:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Blog_Classic)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/data/InnerPages/Blog/classic.json
const classic_namespaceObject = JSON.parse('[{"id":1,"date":"30 August 2021","title":"Creative advertising in our life became a info noise","image":"/dark/assets/imgs/blog/h1.jpg"},{"id":2,"date":"30 August 2021","title":"Creative advertising in our life became a info noise","image":"/dark/assets/imgs/blog/h2.jpg"},{"id":3,"date":"30 August 2021","title":"Creative advertising in our life became a info noise","image":"/dark/assets/imgs/blog/h3.jpg"},{"id":4,"date":"30 August 2021","title":"Creative advertising in our life became a info noise","image":"/dark/assets/imgs/blog/h4.jpg"},{"id":5,"date":"30 August 2021","title":"Creative advertising in our life became a info noise","image":"/dark/assets/imgs/blog/h5.jpg"},{"id":6,"date":"30 August 2021","title":"Creative advertising in our life became a info noise","image":"/dark/assets/imgs/blog/h6.jpg"}]');
;// CONCATENATED MODULE: ./src/components/InnerPages/Blog/Classic.jsx



//= Data

function Classic() {
    return /*#__PURE__*/ jsx_runtime.jsx("section", {
        className: "blog-modern section-padding sub-bg",
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "row",
                children: classic_namespaceObject.map((item, index)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "col-lg-4 col-md-6",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: `item ${index !== classic_namespaceObject.length - 1 ? "mb-50" : ""}`,
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "img",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("img", {
                                            src: item.image,
                                            alt: ""
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "date",
                                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                href: "/dark/blog-details",
                                                children: item.date
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "cont mt-30",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("h6", {
                                            children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                href: "/dark/blog-details",
                                                children: item.title
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                            href: "/dark/blog-details",
                                            className: "mt-20 ls1 sub-title",
                                            children: [
                                                "Read More ",
                                                /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                    className: "ml-5",
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
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    }, item.id))
            })
        })
    });
}
/* harmony default export */ const Blog_Classic = (Classic);


/***/ })

};
;