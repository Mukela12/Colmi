"use strict";
exports.id = 5209;
exports.ids = [5209];
exports.modules = {

/***/ 8366:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ loadBackgroudImages)
/* harmony export */ });
function loadBackgroudImages() {
    let backgroudImages = document.querySelectorAll("[data-background]");
    if (backgroudImages.length > 0) {
        backgroudImages.forEach((element)=>{
            let image = element.dataset.background;
            element.style.backgroundImage = `url('${image}')`;
        });
    }
}


/***/ }),

/***/ 4576:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ parallaxie)
/* harmony export */ });
function parallaxie(selector, speed = 0.8, startPosition) {
    let elementBg = document.querySelector(selector);
    let image = elementBg.getAttribute("data-background");
    if (!image) {
        image = window.getComputedStyle(elementBg).backgroundImage;
    }
    let position = elementBg.getBoundingClientRect().top * speed;
    elementBg.style.backgroundImage = `url("${image}")`;
    elementBg.style.backgroundSize = "cover";
    elementBg.style.backgroundRepeat = "no-repeat";
    elementBg.style.backgroundAttachment = "fixed";
    elementBg.style.backgroundPosition = `center ${startPosition !== undefined ? startPosition : position}px`;
    window.addEventListener("scroll", ()=>{
        position = elementBg.getBoundingClientRect().top * speed;
        elementBg.style.backgroundPosition = `center ${position}px`;
    });
}


/***/ }),

/***/ 5209:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Blog_Details)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/common/parallaxie.js
var parallaxie = __webpack_require__(4576);
;// CONCATENATED MODULE: ./src/components/InnerPages/Blog/Details/Header.jsx


//= Scripts

function Header() {
    (0,external_react_.useEffect)(()=>{
        (0,parallaxie/* default */.Z)(".bg-img.parallaxie", 0.4);
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("header", {
        className: "page-header blog-header section-padding pb-0",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "container mt-80",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "row justify-content-center",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "col-lg-10",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "caption",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "sub-title fz-12",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                href: "#0",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    children: "Marketing"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                children: " , "
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                href: "#0",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    children: "Design"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("h1", {
                                        className: "fz-55 mt-30",
                                        children: "Network of wormholes colonies extraordinary claims require."
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "info d-flex mt-40 align-items-center",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "left-info",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "d-flex",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "author-info",
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "d-flex align-items-center",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                href: "#0",
                                                                className: "circle-60",
                                                                children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                                    src: "/dark/assets/imgs/blog/author1.jpg",
                                                                    alt: "",
                                                                    className: "circle-img"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                                                href: "#0",
                                                                className: "ml-20",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                        className: "opacity-7",
                                                                        children: "Author"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime.jsx("h6", {
                                                                        className: "fz-16",
                                                                        children: "ThemesCamp"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "date ml-50",
                                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                                        href: "#0",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                className: "opacity-7",
                                                                children: "Published"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("h6", {
                                                                className: "fz-16",
                                                                children: "August 6, 2021"
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "right-info ml-auto",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    className: "pe-7s-comment fz-18 mr-10"
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                    className: "opacity-7",
                                                    children: "02 Comments"
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "background bg-img parallaxie mt-80",
                "data-background": "/dark/assets/imgs/blog/b2.jpg"
            })
        ]
    });
}
/* harmony default export */ const Details_Header = (Header);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/common/loadBackgroudImages.js
var loadBackgroudImages = __webpack_require__(8366);
;// CONCATENATED MODULE: ./src/components/InnerPages/Blog/Details/Post.jsx



//= Scripts

function Post() {
    (0,external_react_.useEffect)(()=>{
        (0,loadBackgroudImages/* default */.Z)();
    }, []);
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "container",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "main-post",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "item pb-60",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "row justify-content-center",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "col-lg-10",
                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                            className: "text",
                                            children: [
                                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                    className: "d-flex align-items-center",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                            className: "fz-60 fw-600 main-color line-height-1 mr-10",
                                                            children: "A"
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                            children: "new report said earlier this week that Apple is working on a brand new laptop. A trusted Apple insider with a proven track record confirmed that Apple is working on the larger MacBook Air."
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                    children: "new report said earlier this week that Apple is working on a brand new laptop. Apple plans to release a 15-inch MacBook Air in 2023, a first for the Air series. A trusted Apple insider with a proven track record confirmed that Apple is working on the larger MacBook Air."
                                                })
                                            ]
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "row justify-content-center",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "col-lg-10",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "text",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                    children: "However, Apple might not include it in the Air series when it launches it. As for the notebook’s release date, the 15-inch MacBook isn’t coming soon. It’ll get a late 2023 release at best, according to the new claims."
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "title mt-30",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("h5", {
                                                    className: "fw-600",
                                                    children: "What sizes do MacBook Airs come in?"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "text mt-20",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                    children: "Apple currently sells only one MacBook Air size. The laptop comes in a 13-inch version that matches the pre-2021 13-inch MacBook Pro size. Previously, Apple sold an 11-inch MacBook Air, but the company discontinued that model in 2017."
                                                })
                                            })
                                        ]
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "row justify-content-center",
                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "col-lg-10",
                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "post-qoute mt-50",
                                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("h6", {
                                        className: "fz-20",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                className: "l-block",
                                                children: "Increase your site traffic and gain new customers with a beautiful and functional blog."
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                className: "sub-title main-color mt-20 mb-0",
                                                children: " - ThemesCamp Universe"
                                            })
                                        ]
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "mb-50 mt-50",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "row",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "col-sm-6",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "iner-img sm-mb30",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                src: "/dark/assets/imgs/blog/b2.jpg",
                                                alt: ""
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "col-sm-6",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "iner-img",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                src: "/dark/assets/imgs/blog/b3.jpg",
                                                alt: ""
                                            })
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "row justify-content-center",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "col-lg-10",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "title mb-10",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("h5", {
                                            className: "fw-600",
                                            children: "Apple currently sells only one MacBook Air size."
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "text mb-20",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            children: "A new report said earlier this week that Apple is working on a brand new laptop. Apple plans to release a 15-inch MacBook Air in 2023, a first for the Air series. A trusted Apple insider with a proven track record confirmed that Apple is working on the larger MacBook Air."
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "unorder-list mb-30",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("h6", {
                                                className: "mb-10",
                                                children: "Ordered & Unordered Lists."
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                                className: "rest",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                        children: "Yet this above sewed flirted opened ouch"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                        children: "Goldfinch realistic sporadic ingenuous"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                        children: "Abominable this abidin far successfully then like piquan"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        className: "order-list mb-30",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("h6", {
                                                className: "mb-10",
                                                children: "Ordered & Unordered Lists."
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                                className: "rest",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                children: "01 -"
                                                            }),
                                                            " Yet this above sewed flirted opened ouch"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                children: "02 -"
                                                            }),
                                                            " Goldfinch realistic sporadic ingenuous"
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                children: "03 -"
                                                            }),
                                                            " Abominable this abidin far successfully then like piquan"
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "text",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            children: "However, Apple might not include it in the Air series when it launches it. As for the notebook’s release date, the 15-inch MacBook isn’t coming soon. It’ll get a late 2023 release at best, according to the new claims."
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "info-area flex mt-20 pb-20",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "tags flex",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "valign",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                            children: "Tags :"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                href: "/dark/blog-classic",
                                                children: "Tech"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                href: "/dark/blog-classic",
                                                children: "Geekfolio"
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "ml-auto",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "share-icon flex",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "valign",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                            children: "Share :"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                href: "https://www.facebook.com/",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                    className: "fab fa-facebook-f"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                href: "https://www.twitter.com/",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                    className: "fab fa-twitter"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                href: "https://www.youtube.com/",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                    className: "fab fa-youtube"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "author-area mt-50",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "author-img mr-30",
                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "img",
                                    children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                        src: "/dark/assets/imgs/blog/author1.jpg",
                                        alt: "",
                                        className: "circle-img"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "cont valign",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "full-width",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("h6", {
                                            className: "fw-600 mb-10",
                                            children: "Chris Smith"
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("p", {
                                            children: "Nulla eleifend, lectus eu gravida facilisis, ipsum metus faucibus eros, vitae vulputate nibh libero ac metus."
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "next-prv-post flex mt-50",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "thumb-post bg-img",
                            "data-background": "/dark/assets/imgs/blog/b2.jpg",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                href: "/dark/blog-details",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                        className: "fz-12 text-u ls1 main-color mb-15",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                className: "pe-7s-angle-left"
                                            }),
                                            " Prev Post"
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("h6", {
                                        className: "fw-600 fz-16",
                                        children: [
                                            "Ways to quickly traffic to ",
                                            /*#__PURE__*/ jsx_runtime.jsx("br", {}),
                                            " your website."
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "thumb-post ml-auto text-right bg-img",
                            "data-background": "/dark/assets/imgs/blog/b3.jpg",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                href: "/dark/blog-details",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                        className: "fz-12 text-u ls1 main-color mb-15",
                                        children: [
                                            "Next Post ",
                                            /*#__PURE__*/ jsx_runtime.jsx("i", {
                                                className: "pe-7s-angle-right"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("h6", {
                                        className: "fw-600 fz-16",
                                        children: "How to Handle Your Good Employee."
                                    })
                                ]
                            })
                        })
                    ]
                })
            ]
        })
    });
}
/* harmony default export */ const Details_Post = (Post);

;// CONCATENATED MODULE: ./src/components/InnerPages/Blog/Details/RecentPosts.jsx


function RecentPosts() {
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "recent-posts blog-list-half crev sub-bg section-padding mt-100",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "row",
                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "col-12",
                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "mb-60",
                            children: /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                children: "Recent Posts"
                            })
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "row",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "col-lg-6 md-mb50",
                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "item mb-30",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "row rest",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "col-md-6",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "img",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                    src: "/dark/assets/imgs/blog/h5.jpg",
                                                    alt: ""
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "col-md-6 valign",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "cont",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                        className: "date fz-12 ls1 text-u opacity-7 mb-15",
                                                        children: "August 6, 2022"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("h5", {
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                            href: "#0",
                                                            children: "Free advertising for your online business."
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "tags colorbg mt-15",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                href: "#0",
                                                                className: "me-1",
                                                                children: "Marketing"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                href: "#0",
                                                                children: "Design"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "col-lg-6",
                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "item mb-30",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "row rest",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "col-md-6",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "img",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                    src: "/dark/assets/imgs/blog/h6.jpg",
                                                    alt: ""
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "col-md-6 valign",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "cont",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                        className: "date fz-12 ls1 text-u opacity-7 mb-15",
                                                        children: "August 6, 2022"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("h5", {
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                            href: "#0",
                                                            children: "Business meeting 2023 in San Francisco."
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "tags colorbg mt-15",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                href: "#0",
                                                                className: "me-1",
                                                                children: "Marketing"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                                href: "#0",
                                                                children: "Design"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            })
                        })
                    ]
                })
            ]
        })
    });
}
/* harmony default export */ const Details_RecentPosts = (RecentPosts);

;// CONCATENATED MODULE: ./src/components/InnerPages/Blog/Details/Comments.jsx


function Comments() {
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "comments-post section-padding",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "row justify-content-center",
                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "col-lg-11",
                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "text mb-60",
                            children: /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                children: "Comments"
                            })
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "row justify-content-center",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "col-lg-11",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "item-box",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "row",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "col-lg-9",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "flex",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "user-img mr-30",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            className: "img circle-80 line-height-1",
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                                src: "/dark/assets/imgs/blog/author1.jpg",
                                                                alt: "",
                                                                className: "circle-img"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "cont",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("h6", {
                                                                className: "line-height-1",
                                                                children: "Megan fox"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                className: "fz-12 ls1 text-u mb-15",
                                                                children: "14 sept 2021, 07:00 AM"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                                className: "fz-14",
                                                                children: "Ut elementum turpis lorem, id vulputate risus consequat vitae. Morbi eget urna imperdiet, pellentesque nulla id, tempus mauris."
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "col-lg-3 d-flex align-items-center",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "replay-post ml-auto",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                    href: "#0",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                        children: "Replay"
                                                    })
                                                })
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("div", {
                                className: "item-box replayed",
                                children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "row",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "col-lg-9",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                className: "flex",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                        className: "user-img mr-30",
                                                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                            className: "img circle-80 line-height-1",
                                                            children: /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                                src: "/dark/assets/imgs/blog/author1.jpg",
                                                                alt: "",
                                                                className: "circle-img"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                                        className: "cont",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime.jsx("h6", {
                                                                className: "line-height-1",
                                                                children: "Megan fox"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                                className: "fz-12 ls1 text-u mb-15",
                                                                children: "14 sept 2021, 07:00 AM"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                                                className: "fz-14",
                                                                children: "Ut elementum turpis lorem, id vulputate risus consequat vitae. Morbi eget urna imperdiet, pellentesque nulla id, tempus mauris."
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "col-lg-3 d-flex align-items-center",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "replay-post ml-auto",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                    href: "#0",
                                                    children: /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                        children: "Replay"
                                                    })
                                                })
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
}
/* harmony default export */ const Details_Comments = (Comments);

;// CONCATENATED MODULE: ./src/components/InnerPages/Blog/Details/CommentsForm.jsx


function CommentsForm() {
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "comments-from section-padding sub-bg",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "row justify-content-center",
                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "col-lg-11",
                        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "text mb-60",
                            children: /*#__PURE__*/ jsx_runtime.jsx("h3", {
                                children: "Leave a comment"
                            })
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "row justify-content-center",
                    children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "col-lg-11",
                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
                            id: "contact-form",
                            method: "post",
                            action: "contact.php",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "messages"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                    className: "controls row",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "col-lg-6",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "form-group mb-30",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                    id: "form_name",
                                                    type: "text",
                                                    name: "name",
                                                    placeholder: "Name",
                                                    required: "required"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "col-lg-6",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "form-group mb-30",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                    id: "form_email",
                                                    type: "email",
                                                    name: "email",
                                                    placeholder: "Email",
                                                    required: "required"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "col-12",
                                            children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                className: "form-group mb-30",
                                                children: /*#__PURE__*/ jsx_runtime.jsx("textarea", {
                                                    id: "form_message",
                                                    name: "message",
                                                    placeholder: "Message",
                                                    rows: "4",
                                                    required: "required"
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            className: "col-12 text-center mt-20",
                                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                                                type: "submit",
                                                className: "butn-circle",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                        className: "full-width",
                                                        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                                            className: "full-width",
                                                            children: [
                                                                "Post A ",
                                                                /*#__PURE__*/ jsx_runtime.jsx("br", {}),
                                                                " Comment"
                                                            ]
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime.jsx("img", {
                                                        src: "/dark/assets/imgs/svg-assets/circle-star.svg",
                                                        alt: "",
                                                        className: "circle-star"
                                                    })
                                                ]
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                })
            ]
        })
    });
}
/* harmony default export */ const Details_CommentsForm = (CommentsForm);

;// CONCATENATED MODULE: ./src/components/InnerPages/Blog/Details/Content.jsx


//= Components




function Content() {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("section", {
        className: "blog section-padding pb-0",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(Details_Post, {}),
            /*#__PURE__*/ jsx_runtime.jsx(Details_RecentPosts, {}),
            /*#__PURE__*/ jsx_runtime.jsx(Details_Comments, {}),
            /*#__PURE__*/ jsx_runtime.jsx(Details_CommentsForm, {})
        ]
    });
}
/* harmony default export */ const Details_Content = (Content);

;// CONCATENATED MODULE: ./src/components/InnerPages/Blog/Details/index.jsx


//= Components


function Details() {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(Details_Header, {}),
            /*#__PURE__*/ jsx_runtime.jsx(Details_Content, {})
        ]
    });
}
/* harmony default export */ const Blog_Details = (Details);


/***/ })

};
;