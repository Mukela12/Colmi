"use strict";
exports.id = 6852;
exports.ids = [6852];
exports.modules = {

/***/ 6852:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Showcases_InteractiveCenter)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/data/Showcases/interactive-center.json
const interactive_center_namespaceObject = JSON.parse('[{"id":1,"number":"01","type":"Design","title":"Everybody sunshine","image":"/dark/assets/imgs/works/full/1.jpg"},{"id":2,"number":"02","type":"Branding","title":"Who Dares Wins","image":"/dark/assets/imgs/works/full/2.jpg"},{"id":3,"number":"03","type":"Branding","title":"Fountain Studio","image":"/dark/assets/imgs/works/full/3.jpg"},{"id":4,"number":"04","type":"Photography","title":"April willow flower","image":"/dark/assets/imgs/works/full/4.jpg"},{"id":5,"number":"05","type":"Design","title":"Step Over","image":"/dark/assets/imgs/works/full/1.jpg"},{"id":6,"number":"06","type":"ART Design","title":"Snowy Zero","image":"/dark/assets/imgs/works/full/2.jpg"},{"id":7,"number":"07","type":"Design","title":"Fun Bike","image":"/dark/assets/imgs/works/full/3.jpg"},{"id":8,"number":"08","type":"Apps","title":"Mobile Apps","image":"/dark/assets/imgs/works/full/4.jpg"}]');
;// CONCATENATED MODULE: ./src/components/Showcases/InteractiveCenter/index.jsx



//= Data

function InteractiveCenter() {
    function handleMouseEnter(event) {
        var tab_id = event.currentTarget.getAttribute("data-tab");
        document.querySelectorAll(".links-text li").forEach((el)=>{
            el.classList.remove("current");
            el.classList.add("no-active");
        });
        event.currentTarget.classList.add("current");
        event.currentTarget.classList.remove("no-active");
        document.querySelectorAll(".links-img .img").forEach((el)=>el.classList.remove("current"));
        document.querySelector("#" + tab_id).classList.add("current");
        if (event.currentTarget.classList.contains("current")) return false;
    }
    function handleMouseLeave() {
        document.querySelectorAll(".links-text li").forEach((el)=>el.classList.remove("current"));
        document.querySelectorAll(".links-img .img").forEach((el)=>el.classList.remove("current"));
        document.querySelectorAll(".links-text li").forEach((el)=>el.classList.remove("no-active"));
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
        className: "inter-links-center section-padding",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "container-xxl",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "row",
                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "col-12",
                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "links-text d-flex justify-content-center",
                            children: /*#__PURE__*/ jsx_runtime.jsx("ul", {
                                className: "rest",
                                children: interactive_center_namespaceObject.map((item)=>/*#__PURE__*/ jsx_runtime.jsx("li", {
                                        "data-tab": `tab-${item.id}`,
                                        onMouseEnter: handleMouseEnter,
                                        onMouseLeave: handleMouseLeave,
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("h2", {
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                    className: "num",
                                                    children: [
                                                        item.number,
                                                        "."
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                                    href: "/dark/project-details1",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            className: "tag sub-title",
                                                            children: item.type
                                                        }),
                                                        " ",
                                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            className: "text",
                                                            children: item.title
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }, item.id))
                            })
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "links-img",
                children: interactive_center_namespaceObject.map((item)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "img",
                        id: `tab-${item.id}`,
                        children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                            src: item.image,
                            alt: ""
                        })
                    }, item.id))
            })
        ]
    });
}
/* harmony default export */ const Showcases_InteractiveCenter = (InteractiveCenter);


/***/ })

};
;