"use strict";
exports.id = 5567;
exports.ids = [5567];
exports.modules = {

/***/ 9426:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Startup_Blog)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/data/Startup/blog.json
const blog_namespaceObject = JSON.parse('[{"id":1,"title":"Exploring our new series on overcoming adversity.","cover":"/dark/assets/imgs/blog/b1.jpg","author":"admin","date":"august 6, 2021","tag":"Wordpress"},{"id":2,"title":"Booktips: eight tips for service design with expert users.","cover":"/dark/assets/imgs/blog/b2.jpg","author":"admin","date":"august 6, 2021","tag":"Design"},{"id":3,"title":"Creativo Para Jóvenes: the designer’s UI/UX checklist.","cover":"/dark/assets/imgs/blog/b3.jpg","author":"admin","date":"august 6, 2021","tag":"Envato"}]');
;// CONCATENATED MODULE: ./src/components/Startup/Blog.jsx



//= Data

function Blog() {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
        className: "blog-list2 section-padding",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "row mb-80",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "col-lg-4",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("h6", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                        className: "fz-14",
                                        children: "08 . "
                                    }),
                                    " Latest News"
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "col-lg-6 offset-lg-1",
                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "text",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("h3", {
                                    children: [
                                        "We create ",
                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                            className: "sub-font",
                                            children: "experiences"
                                        }),
                                        " and turn ideas into reality."
                                    ]
                                })
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "row",
                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "col-12",
                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "items",
                            children: blog_namespaceObject.map((item)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "item",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "row",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "col-lg-2 d-flex align-items-center",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "categ fz-13 md-mb30",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                        href: "/dark/blog-classic",
                                                        children: item.tag
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "col-lg-5",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "title",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("h5", {
                                                        children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                            href: "/dark/blog-details",
                                                            children: item.title
                                                        })
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "col-lg-2 position-re",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "img",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                        src: item.cover,
                                                        alt: ""
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "col-lg-3 d-flex align-items-center justify-end",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "info fz-13 ml-auto opacity-7",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            children: item.date
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            className: "ml-15 mr-15",
                                                            children: "/"
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                            children: [
                                                                "By ",
                                                                item.author
                                                            ]
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                }, item.id))
                        })
                    })
                })
            })
        ]
    });
}
/* harmony default export */ const Startup_Blog = (Blog);


/***/ }),

/***/ 3814:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Startup_Clients)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/data/Startup/clients.json
const clients_namespaceObject = JSON.parse('["/assets/imgs/brands/01.png","/assets/imgs/brands/02.png","/assets/imgs/brands/03.png","/assets/imgs/brands/04.png","/assets/imgs/brands/05.png","/assets/imgs/brands/03.png"]');
// EXTERNAL MODULE: ./src/data/app-data.json
var app_data = __webpack_require__(7513);
// EXTERNAL MODULE: ./src/components/Common/Split.jsx
var Split = __webpack_require__(2637);
;// CONCATENATED MODULE: ./src/components/Startup/Clients.jsx


//= Data



function Clients({ lightMode  }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "clients section-padding pb-100 position-re",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "row justify-content-center mb-80",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "col-lg-6 text-center",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("h6", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                        className: "fz-14",
                                        children: "06 . "
                                    }),
                                    " Clients"
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "text",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("h3", {
                                    children: [
                                        "We create ",
                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                            className: "sub-font",
                                            children: "experiences"
                                        }),
                                        " and turn ideas into reality."
                                    ]
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "row justify-content-center",
                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "col-lg-11",
                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "row md-marg",
                            children: clients_namespaceObject.map((item)=>/*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "col-md-4 col-6 brand box-bg",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "item mb-30 wow fadeIn",
                                        "data-wow-delay": ".6s",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "img",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                    src: `/${lightMode ? "light" : "dark"}${item}`,
                                                    alt: ""
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx(Split/* default */.Z, {
                                                tag: "a",
                                                href: app_data/* author_link */.a,
                                                className: "link",
                                                children: "www.GeekFolio.com"
                                            })
                                        ]
                                    })
                                }, Math.floor(Math.random() * 10000)))
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "bg-pattern patrn1 bg-img opacity-5",
                "data-background": `/${lightMode ? "light" : "dark"}/assets/imgs/patterns/pattern.svg`
            })
        ]
    });
}
/* harmony default export */ const Startup_Clients = (Clients);


/***/ }),

/***/ 970:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_loadBackgroudImages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8366);


//= Scripts

function Header({ lightMode  }) {
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        (0,_common_loadBackgroudImages__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)();
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
        className: "header-startup full-height valign bord-thin-bottom",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "row justify-content-center",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-lg-11",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "caption text-center mt-50",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "sec-lg-head",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                        className: "dot-titl-non mb-15",
                                        children: "Business Startup"
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                    className: "fw-700 fz-80",
                                    children: [
                                        "We’re ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "img-in-text icon-img-120 radius-30 bg-img",
                                            "data-background": `/${lightMode ? "light" : "dark"}/assets/imgs/about/1.jpg`
                                        }),
                                        " sharp brands ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "sub-font",
                                            children: "creators"
                                        }),
                                        " open for any ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "icon-img-60",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: `/${lightMode ? "light" : "dark"}/assets/imgs/svg-assets/star.png`,
                                                alt: ""
                                            })
                                        }),
                                        " kind of ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "stroke fw-800",
                                            children: "new"
                                        }),
                                        " works"
                                    ]
                                })
                            ]
                        })
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "arrow-down main-bg",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                    width: "20",
                    height: "15",
                    viewBox: "0 0 20 15",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "svg-for-tablet",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M0.835489 6.51022L15.5607 6.51022L10.9081 1.85764C10.5179 1.46747 10.9555 1.24491 11.3626 0.837776C11.7697 0.430646 11.9923 -0.00687319 12.3825 0.383293L18.7406 6.74141C19.1307 7.13158 19.117 7.77791 18.7099 8.18504L12.0753 14.8196C11.6682 15.2267 11.371 14.7053 11.0739 14.4081C10.7767 14.111 10.2553 13.8138 10.6624 13.4067L15.5173 8.55182L0.792051 8.55182L0.835489 6.51022Z",
                        fill: "currentColor"
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "bg-pattern-half bg-img opacity-5",
                "data-background": `/${lightMode ? "light" : "dark"}/assets/imgs/svg-assets/patern-bg.png`
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "bg-pattern-half bg-img opacity-5",
                "data-background": `/${lightMode ? "light" : "dark"}/assets/imgs/svg-assets/patern-bg.png`
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);


/***/ }),

/***/ 7193:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function Intro() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "intro-imgs section-padding",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-lg-4",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "img1 md-mb50",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: "/dark/assets/imgs/about/sq1.jpg",
                                alt: ""
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-lg-5 valign",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "cont md-mb50",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h6", {
                                    className: "mb-15",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "fz-14",
                                            children: "01 . "
                                        }),
                                        " Company"
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: "We craft premium digital work for web, mobile and experiential with creative agencies and global brands alike – putting passion, pride and plenty of elbow"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "stauts d-flex align-items-center mt-80",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                    children: "20k"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "fz-14",
                                                    children: "Satisfied Clients"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "ml-auto",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                    children: "500 +"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "fz-14",
                                                    children: "Projects Completed"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-lg-3",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "img1 mt-30",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: "/dark/assets/imgs/about/1.jpg",
                                alt: ""
                            })
                        })
                    })
                ]
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Intro);


/***/ }),

/***/ 6846:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function Marq() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "serv-marq skew ontop",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container-fluid",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "row",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "col-12",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "main-marq lrg opacity-4",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "slide-har st1 strok",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "box",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "item",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                children: "UI-UX Experience"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "item",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                children: "Web Development"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "item",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                children: "Digital Marketing"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "item",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                children: "Product Design"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "item",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                children: "Mobile Solutions"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "box",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "item",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                children: "UI-UX Experience"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "item",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                children: "Web Development"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "item",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                children: "Digital Marketing"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "item",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                children: "Product Design"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "item",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                children: "Mobile Solutions"
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                })
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Marq);


/***/ }),

/***/ 4923:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Startup_Portfolio)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/data/Startup/portfolio.json
const portfolio_namespaceObject = JSON.parse('[{"BH":"/dark/assets/imgs/portfolio/2/1.jpg","ty":"2023","dt":"Branding"},{"BH":"/dark/assets/imgs/portfolio/2/3.jpg","ty":"2023","dt":"Branding"},{"BH":"/dark/assets/imgs/portfolio/2/2.jpg","ty":"2023","dt":"Branding"},{"BH":"/dark/assets/imgs/portfolio/2/4.jpg","ty":"2023","dt":"Branding"}]');
;// CONCATENATED MODULE: ./src/components/Startup/Portfolio.jsx


//= Data

function Portfolio() {
    return /*#__PURE__*/ jsx_runtime.jsx("section", {
        className: "portfolio section-padding",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "sec-head md-mb80",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "col-lg-4",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("h6", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                            className: "fz-14",
                                            children: "04 . "
                                        }),
                                        " Our Portfolio"
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "col-lg-5 offset-lg-3",
                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "text",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                        className: "lg-text text-u",
                                        children: "Case Studies"
                                    })
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "row justify-content-center",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "col-lg-5",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "item md-mb80",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "o-hidden",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "img imago wow",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                src: portfolio_namespaceObject[0].BH,
                                                alt: ""
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "cont mt-30 d-flex",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("h6", {
                                                        className: "line-height-1",
                                                        children: "From our gallery"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                        children: portfolio_namespaceObject[0].dt
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "ml-auto",
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                                    className: "fz-14",
                                                    children: [
                                                        "\xa9 ",
                                                        portfolio_namespaceObject[0].ty
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "col-lg-6 valign",
                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "item full-width",
                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "row justify-content-center",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "col-lg-8",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "o-hidden",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "img imago wow",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                        src: portfolio_namespaceObject[1].BH,
                                                        alt: ""
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "cont mt-30 d-flex",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("h6", {
                                                                className: "line-height-1",
                                                                children: "From our gallery"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                                children: portfolio_namespaceObject[1].dt
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "ml-auto",
                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                                            className: "fz-14",
                                                            children: [
                                                                "\xa9 ",
                                                                portfolio_namespaceObject[1].ty
                                                            ]
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "col-lg-6 valign",
                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "item mt-80 full-width",
                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "row justify-content-center",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "col-lg-9",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "o-hidden",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "img imago wow",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                        src: portfolio_namespaceObject[2].BH,
                                                        alt: ""
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "cont mt-30 d-flex",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("h6", {
                                                                className: "line-height-1",
                                                                children: "From our gallery"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                                children: portfolio_namespaceObject[2].dt
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "ml-auto",
                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                                            className: "fz-14",
                                                            children: [
                                                                "\xa9 ",
                                                                portfolio_namespaceObject[2].ty
                                                            ]
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "col-lg-6",
                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "item mt-80",
                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "row justify-content-center",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "col-lg-9",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "o-hidden",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "img imago wow",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                        src: portfolio_namespaceObject[3].BH,
                                                        alt: ""
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "cont mt-30 d-flex",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("h6", {
                                                                className: "line-height-1",
                                                                children: "From our gallery"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                                children: portfolio_namespaceObject[3].dt
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "ml-auto",
                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                                            className: "fz-14",
                                                            children: [
                                                                "\xa9 ",
                                                                portfolio_namespaceObject[3].ty
                                                            ]
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                })
                            })
                        })
                    ]
                })
            ]
        })
    });
}
/* harmony default export */ const Startup_Portfolio = (Portfolio);


/***/ }),

/***/ 8997:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ ServicesContainer)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/components/Common/ModalVideo.jsx
var ModalVideo = __webpack_require__(6036);
;// CONCATENATED MODULE: ./src/data/Startup/process.json
const process_namespaceObject = JSON.parse('[{"id":1,"number":"01","title":"Research","text":"Consectetur adipiscing elit, sed do eiusmod tempo."},{"id":2,"number":"02","title":"Drawing","text":"Consectetur adipiscing elit, sed do eiusmod tempo."},{"id":3,"number":"03","title":"Testing","text":"Consectetur adipiscing elit, sed do eiusmod tempo."},{"id":4,"number":"04","title":"Working","text":"Consectetur adipiscing elit, sed do eiusmod tempo."}]');
;// CONCATENATED MODULE: ./src/components/Startup/Process.jsx



//= Components

//= Data

function Process() {
    const [isVideoOpen, setIsVideoOpen] = (0,external_react_.useState)(false);
    function openVideo(event) {
        event.preventDefault();
        setIsVideoOpen(true);
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "intro-feat section-padding ontop",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "container section-padding pb-0 bord-thin-top bord-dark",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "row justify-content-around",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "col-lg-6",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "cont md-mb50",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("h6", {
                                            className: "mb-15",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    className: "fz-14",
                                                    children: "03 . "
                                                }),
                                                "Our Process"
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("h3", {
                                            className: "mb-30",
                                            children: [
                                                "We help you to go online and increase your ",
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    className: "sub-font",
                                                    children: "Conversion rate."
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "row justify-content-center",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "col-md-10",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "text",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                        children: "Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud. Wiusmod tempor incididunt."
                                                    })
                                                })
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "col-lg-5 offset-lg-1 valign",
                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "bg-img full-width d-flex align-items-center justify-content-center",
                                    "data-background": "/dark/assets/imgs/background/13.jpg",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "play-button",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                href: "https://youtu.be/AzwC6umvd1s",
                                                className: "btn vid",
                                                onClick: openVideo,
                                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "butn-ply",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                                            width: "80px",
                                                            height: "80px",
                                                            viewBox: "0 0 80 80",
                                                            preserveAspectRatio: "none",
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("circle", {
                                                                className: "circle",
                                                                cx: "40",
                                                                cy: "40",
                                                                r: "38",
                                                                stroke: "#c9f31d",
                                                                strokeWidth: "2",
                                                                fill: "none"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                            className: "fas fa-play"
                                                        })
                                                    ]
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "process-crev mt-100",
                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "row",
                            children: process_namespaceObject.map((item)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "item col-lg-3 col-md-6",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("h6", {
                                            className: "mb-10",
                                            children: [
                                                item.number,
                                                " ."
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("h5", {
                                            className: "fw-600",
                                            children: item.title
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            children: item.text
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                            href: "/dark/page-services",
                                            className: "arrow mt-20",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    className: "fz-12 text-u",
                                                    children: "Read More"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    className: "circle",
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
                                }, item.id))
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx(ModalVideo/* default */.Z, {
                videoId: "AzwC6umvd1s",
                channel: "youtube",
                isOpen: isVideoOpen,
                onClose: ()=>setIsVideoOpen(false),
                autoplay: true
            })
        ]
    });
}
/* harmony default export */ const Startup_Process = (Process);

;// CONCATENATED MODULE: ./src/data/Startup/services.json
const services_namespaceObject = JSON.parse('[{"id":1,"image":"/assets/imgs/serv-icons/01-dark.svg","title":"Creative Vision","text":"Creating a higher spacing and how people move through a unique."},{"id":2,"image":"/assets/imgs/serv-icons/02-dark.svg","title":"Unique Production","text":"Creating a higher spacing and how people move through a unique."},{"id":3,"image":"/assets/imgs/serv-icons/03-dark.svg","title":"Rebranding","text":"Creating a higher spacing and how people move through a unique."},{"id":4,"image":"/assets/imgs/serv-icons/04-dark.svg","title":"Corporate Identity","text":"Creating a higher spacing and how people move through a unique."},{"id":5,"image":"/assets/imgs/serv-icons/01-dark.svg","title":"Creative Vision","text":"Creating a higher spacing and how people move through a unique."}]');
;// CONCATENATED MODULE: ./src/components/Startup/Services.jsx



//= Data

function Services({ lightMode  }) {
    (0,external_react_.useEffect)(()=>{
        if (window.innerWidth > 991) {
            let gallery = document.querySelector(".metro .items");
            let wrapper = document.querySelector(".metro");
            let moveVal = 0;
            let dragging = false, mouseLocation, galleryLocation;
            const easeOutQuad = (t)=>{
                return t * (2 - t);
            };
            const moveGallery = ()=>{
                moveVal = easeOutQuad(window.scrollY * .003);
                gallery.style.transform = `translateX(${moveVal}%)`;
                requestAnimationFrame(moveGallery);
            };
            requestAnimationFrame(moveGallery);
            const dragStart = (e)=>{
                dragging = true;
                mouseLocation = e.pageX;
                galleryLocation = wrapper.scrollLeft;
            };
            const dragActive = (e)=>{
                if (!dragging) return;
                let offset = e.pageX - mouseLocation;
                wrapper.scrollLeft = galleryLocation - offset;
            };
            const dragStop = (e)=>{
                dragging = false;
                mouseLocation = e.pageX;
                galleryLocation = wrapper.scrollLeft;
            };
            gallery.addEventListener("mousedown", dragStart);
            gallery.addEventListener("mousemove", dragActive);
            gallery.addEventListener("mouseup", dragStop);
        }
        window.addEventListener("resize", handleResize);
        return ()=>window.removeEventListener("resize", handleResize);
    }, []);
    function handleResize() {
        if (window.innerWidth < 991 && document.querySelector(".metro .items").style.transform) {
            location.reload();
        } else if (window.innerWidth > 991 && !document.querySelector(".metro .items").style.transform) {
            let gallery = document.querySelector(".metro .items");
            let wrapper = document.querySelector(".metro");
            let moveVal = 0;
            let dragging = false, mouseLocation, galleryLocation;
            const easeOutQuad = (t)=>{
                return t * (2 - t);
            };
            const moveGallery = ()=>{
                moveVal = easeOutQuad(window.scrollY * .003);
                gallery.style.transform = `translateX(${moveVal}%)`;
                requestAnimationFrame(moveGallery);
            };
            requestAnimationFrame(moveGallery);
            const dragStart = (e)=>{
                dragging = true;
                mouseLocation = e.pageX;
                galleryLocation = wrapper.scrollLeft;
            };
            const dragActive = (e)=>{
                if (!dragging) return;
                let offset = e.pageX - mouseLocation;
                wrapper.scrollLeft = galleryLocation - offset;
            };
            const dragStop = (e)=>{
                dragging = false;
                mouseLocation = e.pageX;
                galleryLocation = wrapper.scrollLeft;
            };
            gallery.addEventListener("mousedown", dragStart);
            gallery.addEventListener("mousemove", dragActive);
            gallery.addEventListener("mouseup", dragStop);
        }
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "container ontop",
                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "col-lg-4",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("h6", {
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                        className: "fz-14",
                                        children: "02 . "
                                    }),
                                    " Services"
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "col-lg-6 offset-lg-1",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "text",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("h3", {
                                        children: [
                                            "We create ",
                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                className: "sub-font",
                                                children: "experiences"
                                            }),
                                            " and turn ideas into reality."
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "row mt-40",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "col-md-9 offset-md-2",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            children: "Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud. Wiusmod tempor incididunt."
                                        })
                                    })
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "metro mt-80 ontop",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "items",
                    children: services_namespaceObject.map((item, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "item",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                    className: `icon icon-img-80 ${index !== services_namespaceObject.length - 1 ? "mb-40" : ""}`,
                                    children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                        src: `/${lightMode ? "light" : "dark"}/${item.image}`,
                                        alt: ""
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("h5", {
                                    className: "mb-20 fw-700",
                                    children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                        href: "/dark/page-services",
                                        children: item.title
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                    children: item.text
                                })
                            ]
                        }, item.id))
                })
            })
        ]
    });
}
/* harmony default export */ const Startup_Services = (Services);

;// CONCATENATED MODULE: ./src/components/Startup/ServicesContainer.jsx


//= Components


function ServicesTab({ lightMode  }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
        className: "services section-padding pb-0 bg-gray1 position-re o-hidden radius-30",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(Startup_Services, {
                lightMode: lightMode
            }),
            /*#__PURE__*/ jsx_runtime.jsx(Startup_Process, {
                lightMode: lightMode
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "bg-pattern bg-img bg-repeat",
                "data-background": `/${lightMode ? "light" : "dark"}/assets/imgs/patterns/bg-pattern.png`
            })
        ]
    });
}
/* harmony default export */ const ServicesContainer = (ServicesTab);


/***/ }),

/***/ 6683:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3015);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3877);
/* harmony import */ var _data_Startup_testimonials_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3140);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_2__, swiper__WEBPACK_IMPORTED_MODULE_3__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_2__, swiper__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


//= Modules


//= Data

const swiperOptions = {
    modules: [
        swiper__WEBPACK_IMPORTED_MODULE_3__.Navigation,
        swiper__WEBPACK_IMPORTED_MODULE_3__.Pagination
    ],
    slidesPerView: 1,
    loop: true,
    spaceBetween: 30,
    speed: 1000,
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    navigation: {
        nextEl: ".testim-controls .swiper-button-next",
        prevEl: ".testim-controls .swiper-button-prev"
    }
};
function Testimonials({ lightMode  }) {
    const [loadSwiper, setLoadSwiper] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setLoadSwiper(true);
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: `testim-clasic section-padding sub-bg ${lightMode ? "light" : ""}`,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "row",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "col-lg-12",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "testim",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "testim-swiper",
                                children: loadSwiper && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {
                                    ...swiperOptions,
                                    id: "content-carousel-container-unq-testim",
                                    className: "swiper-container",
                                    children: _data_Startup_testimonials_json__WEBPACK_IMPORTED_MODULE_4__.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "item",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "row",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "col-md-4",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "author-info valign",
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "full-width",
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                            className: "img circle-120 m-auto mb-30",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                                src: item.picture,
                                                                                alt: "",
                                                                                className: "circle-img"
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                            className: "info",
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                                                    children: item.name
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                                    className: "sub-title",
                                                                                    children: item.position
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                            className: "arrow sub-bg"
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "col-md-8",
                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "cont",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: "mb-30 icon-img-80 opacity-1",
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                            src: "/dark/assets/imgs/svg-assets/quote.png",
                                                                            alt: ""
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                                        className: "fw-300",
                                                                        children: item.content
                                                                    })
                                                                ]
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        }, item.id))
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "swiper-controls",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "row",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col-md-8 offset-md-4",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "arrows-carsouel testim-controls",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "swiper-controls",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "swiper-button-prev",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "left",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: `/${lightMode ? "light" : "dark"}/assets/imgs/svg-assets/arrow-right-top.svg`,
                                                                alt: ""
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "swiper-pagination"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "swiper-button-next",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "right",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: `/${lightMode ? "light" : "dark"}/assets/imgs/svg-assets/arrow-right-top.svg`,
                                                                alt: ""
                                                            })
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                })
                            })
                        ]
                    })
                })
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Testimonials);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3140:
/***/ ((module) => {

module.exports = JSON.parse('[{"id":1,"picture":"/dark/assets/imgs/testim/1.jpg","name":"Leonard Heiser","position":"Customer","content":"I have been hiring people in this space for a number of years and I have never seen this level of professionalism. It really feels like you are working with a team that can get the job done."},{"id":2,"picture":"/dark/assets/imgs/testim/2.jpg","name":"Leonard Heiser","position":"Customer","content":"I have been hiring people in this space for a number of years and I have never seen this level of professionalism. It really feels like you are working with a team that can get the job done."},{"id":3,"picture":"/dark/assets/imgs/testim/3.jpg","name":"Leonard Heiser","position":"Customer","content":"I have been hiring people in this space for a number of years and I have never seen this level of professionalism. It really feels like you are working with a team that can get the job done."},{"id":4,"picture":"/dark/assets/imgs/testim/4.jpg","name":"Leonard Heiser","position":"Customer","content":"I have been hiring people in this space for a number of years and I have never seen this level of professionalism. It really feels like you are working with a team that can get the job done."}]');

/***/ })

};
;