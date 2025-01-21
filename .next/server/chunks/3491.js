"use strict";
exports.id = 3491;
exports.ids = [3491];
exports.modules = {

/***/ 3491:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Blog_List)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/data/InnerPages/Blog/list.json
const list_namespaceObject = JSON.parse('[{"id":1,"date":"August 6, 2022","title":"Free advertising for your online business.","image":"/dark/assets/imgs/blog/h1.jpg","tags":["Marketing","Design"]},{"id":2,"date":"August 6, 2022","title":"Business meeting 2023 in San Francisco.","image":"/dark/assets/imgs/blog/h2.jpg","tags":["Marketing","Design"]},{"id":3,"date":"August 6, 2022","title":"Free advertising for your online business.","image":"/dark/assets/imgs/blog/h3.jpg","tags":["Marketing","Design"]},{"id":4,"date":"August 6, 2022","title":"Business meeting 2023 in San Francisco.","image":"/dark/assets/imgs/blog/h4.jpg","tags":["Marketing","Design"]},{"id":5,"date":"August 6, 2022","title":"Free advertising for your online business.","image":"/dark/assets/imgs/blog/h5.jpg","tags":["Marketing","Design"]},{"id":6,"date":"August 6, 2022","title":"Business meeting 2023 in San Francisco.","image":"/dark/assets/imgs/blog/h6.jpg","tags":["Marketing","Design"]}]');
;// CONCATENATED MODULE: ./src/components/InnerPages/Blog/List.jsx



//= Data

function List() {
    return /*#__PURE__*/ jsx_runtime.jsx("section", {
        className: "blog-list-half section-padding sub-bg",
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "row",
                children: list_namespaceObject.map((item, index)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "col-lg-6",
                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: `item ${index !== list_namespaceObject.length - 1 ? "mb-50" : ""}`,
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "row",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "col-md-6 img",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                            src: item.image,
                                            alt: ""
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "col-md-6 main-bg cont valign",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "full-width",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    className: "date fz-12 ls1 text-u opacity-7 mb-15",
                                                    children: item.date
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("h5", {
                                                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                        href: "/dark/blog-details",
                                                        children: item.title
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "tags colorbg mt-15",
                                                    children: item.tags.map((tag, i)=>/*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                            href: "/dark/blog-list",
                                                            className: "me-1",
                                                            children: tag
                                                        }, i))
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                    }, item.id))
            })
        })
    });
}
/* harmony default export */ const Blog_List = (List);


/***/ })

};
;