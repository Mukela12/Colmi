exports.id = 6480;
exports.ids = [6480];
exports.modules = {

/***/ 8366:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ 9729:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ customScript)
/* harmony export */ });
function customScript() {
    document.documentElement.className = "js";
    var supportsCssVars = function() {
        var e, t = document.createElement("style");
        return t.innerHTML = "root: { --tmp-var: bold; }", document.head.appendChild(t), e = !!(window.CSS && window.CSS.supports && window.CSS.supports("font-weight", "var(--tmp-var)")), t.parentNode.removeChild(t), e;
    };
    supportsCssVars() || alert("Please view this demo in a modern browser that supports CSS Variables.");
}


/***/ }),

/***/ 5451:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
const scripts = {
    demo () {
        function debounce(func, wait, immediate) {
            var timeout;
            return function() {
                var context = this, args = arguments;
                var later = function() {
                    timeout = null;
                    if (!immediate) func.apply(context, args);
                };
                var callNow = immediate && !timeout;
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
                if (callNow) func.apply(context, args);
            };
        }
        ;
        class Slideshow {
            constructor(el){
                this.DOM = {};
                this.DOM.el = el;
                this.settings = {
                    animation: {
                        slides: {
                            duration: 500,
                            easing: "easeOutQuint"
                        },
                        shape: {
                            duration: 300,
                            easing: {
                                in: "easeOutQuint",
                                out: "easeOutQuad"
                            }
                        }
                    },
                    frameFill: "url(#gradient1)"
                };
                this.init();
            }
            init() {
                this.DOM.slides = Array.from(this.DOM.el.querySelectorAll(".slides--images > .slide"));
                this.slidesTotal = this.DOM.slides.length;
                this.DOM.nav = this.DOM.el.querySelector(".slidenav");
                this.DOM.titles = this.DOM.el.querySelector(".slides--titles");
                this.DOM.titlesSlides = Array.from(this.DOM.titles.querySelectorAll(".slide"));
                this.DOM.nextCtrl = this.DOM.nav.querySelector(".slidenav__item--next");
                this.DOM.prevCtrl = this.DOM.nav.querySelector(".slidenav__item--prev");
                this.current = 0;
                this.createFrame();
                this.initEvents();
            }
            createFrame() {
                this.rect = this.DOM.el.getBoundingClientRect();
                this.frameSize = this.rect.width / 12;
                this.paths = {
                    initial: this.calculatePath("initial"),
                    final: this.calculatePath("final")
                };
                this.DOM.svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                this.DOM.svg.setAttribute("class", "shape");
                this.DOM.svg.setAttribute("width", "100%");
                this.DOM.svg.setAttribute("height", "100%");
                this.DOM.svg.setAttribute("viewbox", `0 0 ${this.rect.width} ${this.rect.height}`);
                this.DOM.svg.innerHTML = `
            <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#1a1a1a"/>
                <stop offset="100%" stop-color="#1a1a1a"/>
            </linearGradient>
            </defs>
            <path fill="${this.settings.frameFill}" d="${this.paths.initial}"/>`;
                this.DOM.el.insertBefore(this.DOM.svg, this.DOM.titles);
                this.DOM.shape = this.DOM.svg.querySelector("path");
            }
            updateFrame() {
                this.paths.initial = this.calculatePath("initial");
                this.paths.final = this.calculatePath("final");
                this.DOM.svg.setAttribute("viewbox", `0 0 ${this.rect.width} ${this.rect.height}`);
                this.DOM.shape.setAttribute("d", this.isAnimating ? this.paths.final : this.paths.initial);
            }
            calculatePath(path = "initial") {
                if (path === "initial") {
                    return `M 0,0 0,${this.rect.height} ${this.rect.width},${this.rect.height} ${this.rect.width},0 0,0 Z M 0,0 ${this.rect.width},0 ${this.rect.width},${this.rect.height} 0,${this.rect.height} Z`;
                } else {
                    const point1 = {
                        x: this.rect.width / 4 - 50,
                        y: this.rect.height / 4 + 50
                    };
                    const point2 = {
                        x: this.rect.width / 4 + 50,
                        y: this.rect.height / 4 - 50
                    };
                    const point3 = {
                        x: this.rect.width - point2.x,
                        y: this.rect.height - point2.y
                    };
                    const point4 = {
                        x: this.rect.width - point1.x,
                        y: this.rect.height - point1.y
                    };
                    return `M 0,0 0,${this.rect.height} ${this.rect.width},${this.rect.height} ${this.rect.width},0 0,0 Z M ${point1.x},${point1.y} ${point2.x},${point2.y} ${point4.x},${point4.y} ${point3.x},${point3.y} Z`;
                }
            }
            initEvents() {
                this.DOM.nextCtrl.addEventListener("click", ()=>this.navigate("next"));
                this.DOM.prevCtrl.addEventListener("click", ()=>this.navigate("prev"));
                window.addEventListener("resize", debounce(()=>{
                    this.rect = this.DOM.el.getBoundingClientRect();
                    this.updateFrame();
                }, 20));
                document.addEventListener("keydown", (ev)=>{
                    const keyCode = ev.keyCode || ev.which;
                    if (keyCode === 37) {
                        this.navigate("prev");
                    } else if (keyCode === 39) {
                        this.navigate("next");
                    }
                });
            }
            navigate(dir = "next") {
                if (this.isAnimating) return false;
                this.isAnimating = true;
                const animateShapeIn = anime({
                    targets: this.DOM.shape,
                    duration: this.settings.animation.shape.duration,
                    easing: this.settings.animation.shape.easing.in,
                    d: this.paths.final
                });
                const animateSlides = ()=>{
                    return new Promise((resolve, reject)=>{
                        const currentSlide = this.DOM.slides[this.current];
                        anime({
                            targets: currentSlide,
                            duration: this.settings.animation.slides.duration,
                            easing: this.settings.animation.slides.easing,
                            translateY: dir === "next" ? this.rect.height : -1 * this.rect.height,
                            complete: ()=>{
                                currentSlide.classList.remove("slide--current");
                                resolve();
                            }
                        });
                        const currentTitleSlide = this.DOM.titlesSlides[this.current];
                        anime({
                            targets: currentTitleSlide.children,
                            duration: this.settings.animation.slides.duration,
                            easing: this.settings.animation.slides.easing,
                            delay: (t, i, total)=>dir === "next" ? i * 100 : (total - i - 1) * 100,
                            translateY: [
                                0,
                                dir === "next" ? 100 : -100
                            ],
                            opacity: [
                                1,
                                0
                            ],
                            complete: ()=>{
                                currentTitleSlide.classList.remove("slide--current");
                                resolve();
                            }
                        });
                        this.current = dir === "next" ? this.current < this.slidesTotal - 1 ? this.current + 1 : 0 : this.current > 0 ? this.current - 1 : this.slidesTotal - 1;
                        const newSlide = this.DOM.slides[this.current];
                        newSlide.classList.add("slide--current");
                        anime({
                            targets: newSlide,
                            duration: this.settings.animation.slides.duration,
                            easing: this.settings.animation.slides.easing,
                            translateY: [
                                dir === "next" ? -1 * this.rect.height : this.rect.height,
                                0
                            ]
                        });
                        const newSlideImg = newSlide.querySelector(".slide__img");
                        anime.remove(newSlideImg);
                        anime({
                            targets: newSlideImg,
                            duration: this.settings.animation.slides.duration * 3,
                            easing: this.settings.animation.slides.easing,
                            translateY: [
                                dir === "next" ? -100 : 100,
                                0
                            ],
                            scale: [
                                0.2,
                                1
                            ]
                        });
                        const newTitleSlide = this.DOM.titlesSlides[this.current];
                        newTitleSlide.classList.add("slide--current");
                        anime({
                            targets: newTitleSlide.children,
                            duration: this.settings.animation.slides.duration * 1.5,
                            easing: this.settings.animation.slides.easing,
                            delay: (t, i, total)=>dir === "next" ? i * 100 + 100 : (total - i - 1) * 100 + 100,
                            translateY: [
                                dir === "next" ? -100 : 100,
                                0
                            ],
                            opacity: [
                                0,
                                1
                            ]
                        });
                    });
                };
                const animateShapeOut = ()=>{
                    anime({
                        targets: this.DOM.shape,
                        duration: this.settings.animation.shape.duration,
                        easing: this.settings.animation.shape.easing.out,
                        d: this.paths.initial,
                        complete: ()=>this.isAnimating = false
                    });
                };
                animateShapeIn.finished.then(animateSlides).then(animateShapeOut);
            }
        }
        ;
        new Slideshow(document.querySelector(".slideshow"));
        imagesLoaded(".slide__img", {
            background: true
        }, ()=>document.body.classList.remove("loading"));
    },
    showcase1 () {
        var parcelRequire = function(modules, cache, entry, globalName) {
            // Save the require from previous bundle to this closure if any
            var previousRequire = typeof parcelRequire === "function" && parcelRequire;
            var nodeRequire = undefined;
            function newRequire(name, jumped) {
                if (!cache[name]) {
                    if (!modules[name]) {
                        // if we cannot find the module within our internal map or
                        // cache jump to the current global require ie. the last bundle
                        // that was added to the page.
                        var currentRequire = typeof parcelRequire === "function" && parcelRequire;
                        if (!jumped && currentRequire) {
                            return currentRequire(name, true);
                        }
                        // If there are other bundles on this page the require from the
                        // previous one is saved to 'previousRequire'. Repeat this as
                        // many times as there are bundles until the module is found or
                        // we exhaust the require chain.
                        if (previousRequire) {
                            return previousRequire(name, true);
                        }
                        // Try the node require function if it exists.
                        if ( true && typeof name === "string") {
                            return __webpack_require__(9952)(name);
                        }
                        var err = new Error("Cannot find module '" + name + "'");
                        err.code = "MODULE_NOT_FOUND";
                        throw err;
                    }
                    localRequire.resolve = resolve;
                    localRequire.cache = {};
                    module = cache[name] = new newRequire.Module(name);
                    modules[name][0].call(module.exports, localRequire, module, module.exports, this);
                }
                return cache[name].exports;
                function localRequire(x) {
                    return newRequire(localRequire.resolve(x));
                }
                function resolve(x) {
                    return modules[name][1][x] || x;
                }
            }
            function Module(moduleName) {
                this.id = moduleName;
                this.bundle = newRequire;
                this.exports = {};
            }
            newRequire.isParcelRequire = true;
            newRequire.Module = Module;
            newRequire.modules = modules;
            newRequire.cache = cache;
            newRequire.parent = previousRequire;
            newRequire.register = function(id, exports1) {
                modules[id] = [
                    function(require1, module1) {
                        module1.exports = exports1;
                    },
                    {}
                ];
            };
            var error;
            for(var i = 0; i < entry.length; i++){
                try {
                    newRequire(entry[i]);
                } catch (e) {
                    // Save first error but execute all entries
                    if (!error) {
                        error = e;
                    }
                }
            }
            if (entry.length) {
                // Expose entry point to Node, AMD or browser globals
                // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
                var mainExports = newRequire(entry[entry.length - 1]);
                // CommonJS
                if (typeof exports === "object" && "object" !== "undefined") {
                    module.exports = mainExports;
                // RequireJS
                } else if (typeof define === "function" && __webpack_require__.amdO) {
                    define(function() {
                        return mainExports;
                    });
                // <script>
                } else if (globalName) {
                    this[globalName] = mainExports;
                }
            }
            // Override the current require with this new one
            parcelRequire = newRequire;
            if (error) {
                // throw error from earlier, _after updating parcelRequire_
                throw error;
            }
            return newRequire;
        }({
            "BQvw": [
                function(require1, module1, exports1) {
                    var define1;
                    var global = arguments[3];
                    /**
         * EvEmitter v1.1.0
         * Lil' event emitter
         * MIT License
         */ /* jshint unused: true, undef: true, strict: true */ (function(global, factory) {
                        // universal module definition
                        /* jshint strict: false */ /* globals define, module, window */ if (typeof define1 == "function" && define1.amd) {
                            // AMD - RequireJS
                            define1(factory);
                        } else if (typeof module1 == "object" && module1.exports) {
                            // CommonJS - Browserify, Webpack
                            module1.exports = factory();
                        } else {
                            // Browser globals
                            global.EvEmitter = factory();
                        }
                    })( false ? 0 : this, function() {
                        "use strict";
                        function EvEmitter() {}
                        var proto = EvEmitter.prototype;
                        proto.on = function(eventName, listener) {
                            if (!eventName || !listener) {
                                return;
                            }
                            // set events hash
                            var events = this._events = this._events || {};
                            // set listeners array
                            var listeners = events[eventName] = events[eventName] || [];
                            // only add once
                            if (listeners.indexOf(listener) == -1) {
                                listeners.push(listener);
                            }
                            return this;
                        };
                        proto.once = function(eventName, listener) {
                            if (!eventName || !listener) {
                                return;
                            }
                            // add event
                            this.on(eventName, listener);
                            // set once flag
                            // set onceEvents hash
                            var onceEvents = this._onceEvents = this._onceEvents || {};
                            // set onceListeners object
                            var onceListeners = onceEvents[eventName] = onceEvents[eventName] || {};
                            // set flag
                            onceListeners[listener] = true;
                            return this;
                        };
                        proto.off = function(eventName, listener) {
                            var listeners = this._events && this._events[eventName];
                            if (!listeners || !listeners.length) {
                                return;
                            }
                            var index = listeners.indexOf(listener);
                            if (index != -1) {
                                listeners.splice(index, 1);
                            }
                            return this;
                        };
                        proto.emitEvent = function(eventName, args) {
                            var listeners = this._events && this._events[eventName];
                            if (!listeners || !listeners.length) {
                                return;
                            }
                            // copy over to avoid interference if .off() in listener
                            listeners = listeners.slice(0);
                            args = args || [];
                            // once stuff
                            var onceListeners = this._onceEvents && this._onceEvents[eventName];
                            for(var i = 0; i < listeners.length; i++){
                                var listener = listeners[i];
                                var isOnce = onceListeners && onceListeners[listener];
                                if (isOnce) {
                                    // remove listener
                                    // remove before trigger to prevent recursion
                                    this.off(eventName, listener);
                                    // unset once flag
                                    delete onceListeners[listener];
                                }
                                // trigger listener
                                listener.apply(this, args);
                            }
                            return this;
                        };
                        proto.allOff = function() {
                            delete this._events;
                            delete this._onceEvents;
                        };
                        return EvEmitter;
                    });
                },
                {}
            ],
            "lc7f": [
                function(require1, module1, exports1) {
                    var define1;
                    /*!
         * imagesLoaded v4.1.4
         * JavaScript is all like "You images are done yet or what?"
         * MIT License
         */ (function(window1, factory) {
                        "use strict";
                        // universal module definition
                        /*global define: false, module: false, require: false */ if (typeof define1 == "function" && define1.amd) {
                            // AMD
                            define1([
                                "ev-emitter/ev-emitter"
                            ], function(EvEmitter) {
                                return factory(window1, EvEmitter);
                            });
                        } else if (typeof module1 == "object" && module1.exports) {
                            // CommonJS
                            module1.exports = factory(window1, require1("ev-emitter"));
                        } else {
                            // browser global
                            window1.imagesLoaded = factory(window1, window1.EvEmitter);
                        }
                    })( false ? 0 : this, // --------------------------  factory -------------------------- //
                    function factory(window1, EvEmitter) {
                        "use strict";
                        var $ = window1.jQuery;
                        var console1 = window1.console;
                        // -------------------------- helpers -------------------------- //
                        // extend objects
                        function extend(a, b) {
                            for(var prop in b){
                                a[prop] = b[prop];
                            }
                            return a;
                        }
                        var arraySlice = Array.prototype.slice;
                        // turn element or nodeList into an array
                        function makeArray(obj) {
                            if (Array.isArray(obj)) {
                                // use object if already an array
                                return obj;
                            }
                            var isArrayLike = typeof obj == "object" && typeof obj.length == "number";
                            if (isArrayLike) {
                                // convert nodeList to array
                                return arraySlice.call(obj);
                            }
                            // array of single index
                            return [
                                obj
                            ];
                        }
                        // -------------------------- imagesLoaded -------------------------- //
                        /**
             * @param {Array, Element, NodeList, String} elem
             * @param {Object or Function} options - if function, use as callback
             * @param {Function} onAlways - callback function
             */ function ImagesLoaded(elem, options, onAlways) {
                            // coerce ImagesLoaded() without new, to be new ImagesLoaded()
                            if (!(this instanceof ImagesLoaded)) {
                                return new ImagesLoaded(elem, options, onAlways);
                            }
                            // use elem as selector string
                            var queryElem = elem;
                            if (typeof elem == "string") {
                                queryElem = document.querySelectorAll(elem);
                            }
                            // bail if bad element
                            if (!queryElem) {
                                console1.error("Bad element for imagesLoaded " + (queryElem || elem));
                                return;
                            }
                            this.elements = makeArray(queryElem);
                            this.options = extend({}, this.options);
                            // shift arguments if no options set
                            if (typeof options == "function") {
                                onAlways = options;
                            } else {
                                extend(this.options, options);
                            }
                            if (onAlways) {
                                this.on("always", onAlways);
                            }
                            this.getImages();
                            if ($) {
                                // add jQuery Deferred object
                                this.jqDeferred = new $.Deferred();
                            }
                            // HACK check async to allow time to bind listeners
                            setTimeout(this.check.bind(this));
                        }
                        ImagesLoaded.prototype = Object.create(EvEmitter.prototype);
                        ImagesLoaded.prototype.options = {};
                        ImagesLoaded.prototype.getImages = function() {
                            this.images = [];
                            // filter & find items if we have an item selector
                            this.elements.forEach(this.addElementImages, this);
                        };
                        /**
             * @param {Node} element
             */ ImagesLoaded.prototype.addElementImages = function(elem) {
                            // filter siblings
                            if (elem.nodeName == "IMG") {
                                this.addImage(elem);
                            }
                            // get background image on element
                            if (this.options.background === true) {
                                this.addElementBackgroundImages(elem);
                            }
                            // find children
                            // no non-element nodes, #143
                            var nodeType = elem.nodeType;
                            if (!nodeType || !elementNodeTypes[nodeType]) {
                                return;
                            }
                            var childImgs = elem.querySelectorAll("img");
                            // concat childElems to filterFound array
                            for(var i = 0; i < childImgs.length; i++){
                                var img = childImgs[i];
                                this.addImage(img);
                            }
                            // get child background images
                            if (typeof this.options.background == "string") {
                                var children = elem.querySelectorAll(this.options.background);
                                for(i = 0; i < children.length; i++){
                                    var child = children[i];
                                    this.addElementBackgroundImages(child);
                                }
                            }
                        };
                        var elementNodeTypes = {
                            1: true,
                            9: true,
                            11: true
                        };
                        ImagesLoaded.prototype.addElementBackgroundImages = function(elem) {
                            var style = getComputedStyle(elem);
                            if (!style) {
                                // Firefox returns null if in a hidden iframe https://bugzil.la/548397
                                return;
                            }
                            // get url inside url("...")
                            var reURL = /url\((['"])?(.*?)\1\)/gi;
                            var matches = reURL.exec(style.backgroundImage);
                            while(matches !== null){
                                var url = matches && matches[2];
                                if (url) {
                                    this.addBackground(url, elem);
                                }
                                matches = reURL.exec(style.backgroundImage);
                            }
                        };
                        /**
             * @param {Image} img
             */ ImagesLoaded.prototype.addImage = function(img) {
                            var loadingImage = new LoadingImage(img);
                            this.images.push(loadingImage);
                        };
                        ImagesLoaded.prototype.addBackground = function(url, elem) {
                            var background = new Background(url, elem);
                            this.images.push(background);
                        };
                        ImagesLoaded.prototype.check = function() {
                            var _this = this;
                            this.progressedCount = 0;
                            this.hasAnyBroken = false;
                            // complete if no images
                            if (!this.images.length) {
                                this.complete();
                                return;
                            }
                            function onProgress(image, elem, message) {
                                // HACK - Chrome triggers event before object properties have changed. #83
                                setTimeout(function() {
                                    _this.progress(image, elem, message);
                                });
                            }
                            this.images.forEach(function(loadingImage) {
                                loadingImage.once("progress", onProgress);
                                loadingImage.check();
                            });
                        };
                        ImagesLoaded.prototype.progress = function(image, elem, message) {
                            this.progressedCount++;
                            this.hasAnyBroken = this.hasAnyBroken || !image.isLoaded;
                            // progress event
                            this.emitEvent("progress", [
                                this,
                                image,
                                elem
                            ]);
                            if (this.jqDeferred && this.jqDeferred.notify) {
                                this.jqDeferred.notify(this, image);
                            }
                            // check if completed
                            if (this.progressedCount == this.images.length) {
                                this.complete();
                            }
                            if (this.options.debug && console1) {
                                console1.log("progress: " + message, image, elem);
                            }
                        };
                        ImagesLoaded.prototype.complete = function() {
                            var eventName = this.hasAnyBroken ? "fail" : "done";
                            this.isComplete = true;
                            this.emitEvent(eventName, [
                                this
                            ]);
                            this.emitEvent("always", [
                                this
                            ]);
                            if (this.jqDeferred) {
                                var jqMethod = this.hasAnyBroken ? "reject" : "resolve";
                                this.jqDeferred[jqMethod](this);
                            }
                        };
                        // --------------------------  -------------------------- //
                        function LoadingImage(img) {
                            this.img = img;
                        }
                        LoadingImage.prototype = Object.create(EvEmitter.prototype);
                        LoadingImage.prototype.check = function() {
                            // If complete is true and browser supports natural sizes,
                            // try to check for image status manually.
                            var isComplete = this.getIsImageComplete();
                            if (isComplete) {
                                // report based on naturalWidth
                                this.confirm(this.img.naturalWidth !== 0, "naturalWidth");
                                return;
                            }
                            // If none of the checks above matched, simulate loading on detached element.
                            this.proxyImage = new Image();
                            this.proxyImage.addEventListener("load", this);
                            this.proxyImage.addEventListener("error", this);
                            // bind to image as well for Firefox. #191
                            this.img.addEventListener("load", this);
                            this.img.addEventListener("error", this);
                            this.proxyImage.src = this.img.src;
                        };
                        LoadingImage.prototype.getIsImageComplete = function() {
                            // check for non-zero, non-undefined naturalWidth
                            // fixes Safari+InfiniteScroll+Masonry bug infinite-scroll#671
                            return this.img.complete && this.img.naturalWidth;
                        };
                        LoadingImage.prototype.confirm = function(isLoaded, message) {
                            this.isLoaded = isLoaded;
                            this.emitEvent("progress", [
                                this,
                                this.img,
                                message
                            ]);
                        };
                        // ----- events ----- //
                        // trigger specified handler for event type
                        LoadingImage.prototype.handleEvent = function(event) {
                            var method = "on" + event.type;
                            if (this[method]) {
                                this[method](event);
                            }
                        };
                        LoadingImage.prototype.onload = function() {
                            this.confirm(true, "onload");
                            this.unbindEvents();
                        };
                        LoadingImage.prototype.onerror = function() {
                            this.confirm(false, "onerror");
                            this.unbindEvents();
                        };
                        LoadingImage.prototype.unbindEvents = function() {
                            this.proxyImage.removeEventListener("load", this);
                            this.proxyImage.removeEventListener("error", this);
                            this.img.removeEventListener("load", this);
                            this.img.removeEventListener("error", this);
                        };
                        // -------------------------- Background -------------------------- //
                        function Background(url, element) {
                            this.url = url;
                            this.element = element;
                            this.img = new Image();
                        }
                        // inherit LoadingImage prototype
                        Background.prototype = Object.create(LoadingImage.prototype);
                        Background.prototype.check = function() {
                            this.img.addEventListener("load", this);
                            this.img.addEventListener("error", this);
                            this.img.src = this.url;
                            // check if image is already complete
                            var isComplete = this.getIsImageComplete();
                            if (isComplete) {
                                this.confirm(this.img.naturalWidth !== 0, "naturalWidth");
                                this.unbindEvents();
                            }
                        };
                        Background.prototype.unbindEvents = function() {
                            this.img.removeEventListener("load", this);
                            this.img.removeEventListener("error", this);
                        };
                        Background.prototype.confirm = function(isLoaded, message) {
                            this.isLoaded = isLoaded;
                            this.emitEvent("progress", [
                                this,
                                this.element,
                                message
                            ]);
                        };
                        // -------------------------- jQuery -------------------------- //
                        ImagesLoaded.makeJQueryPlugin = function(jQuery) {
                            jQuery = jQuery || window1.jQuery;
                            if (!jQuery) {
                                return;
                            }
                            // set local variable
                            $ = jQuery;
                            // $().imagesLoaded()
                            $.fn.imagesLoaded = function(options, callback) {
                                var instance = new ImagesLoaded(this, options, callback);
                                return instance.jqDeferred.promise($(this));
                            };
                        };
                        // try making plugin
                        ImagesLoaded.makeJQueryPlugin();
                        // --------------------------  -------------------------- //
                        return ImagesLoaded;
                    });
                },
                {
                    "ev-emitter": "BQvw"
                }
            ],
            "8MgT": [
                function(require1, module1, exports1) {
                    "use strict";
                    Object.defineProperty(exports1, "__esModule", {
                        value: true
                    });
                    exports1.preloadImages = void 0;
                    var imagesLoaded1 = require1("imagesloaded"); // Preload images
                    var preloadImages = function preloadImages() {
                        var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "img";
                        return new Promise(function(resolve) {
                            imagesLoaded1(document.querySelectorAll(selector), {
                                background: true
                            }, resolve);
                        });
                    };
                    exports1.preloadImages = preloadImages;
                },
                {
                    "imagesloaded": "lc7f"
                }
            ],
            "qr+2": [
                function(require1, module1, exports1) {
                    "use strict";
                    Object.defineProperty(exports1, "__esModule", {
                        value: true
                    });
                    exports1.Navigation = void 0;
                    function _classCallCheck(instance, Constructor) {
                        if (!(instance instanceof Constructor)) {
                            throw new TypeError("Cannot call a class as a function");
                        }
                    }
                    function _defineProperties(target, props) {
                        for(var i = 0; i < props.length; i++){
                            var descriptor = props[i];
                            descriptor.enumerable = descriptor.enumerable || false;
                            descriptor.configurable = true;
                            if ("value" in descriptor) descriptor.writable = true;
                            Object.defineProperty(target, descriptor.key, descriptor);
                        }
                    }
                    function _createClass(Constructor, protoProps, staticProps) {
                        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
                        if (staticProps) _defineProperties(Constructor, staticProps);
                        return Constructor;
                    }
                    var Navigation = /*#__PURE__*/ function() {
                        function Navigation(el) {
                            _classCallCheck(this, Navigation);
                            this.DOM = {
                                el: el
                            };
                            this.DOM.ctrls = {
                                next: this.DOM.el.querySelector(".slides-nav__button--next"),
                                prev: this.DOM.el.querySelector(".slides-nav__button--prev")
                            };
                            this.DOM.current = this.DOM.el.querySelector(".slides-nav__index-current");
                            this.DOM.total = this.DOM.el.querySelector(".slides-nav__index-total");
                        } // updates the current value
                        _createClass(Navigation, [
                            {
                                key: "updateCurrent",
                                value: function updateCurrent(position) {
                                    this.DOM.current.innerHTML = position < 10 ? "0".concat(position + 1) : position;
                                }
                            }
                        ]);
                        return Navigation;
                    }();
                    exports1.Navigation = Navigation;
                },
                {}
            ],
            "Drnq": [
                function(require1, module1, exports1) {
                    "use strict";
                    Object.defineProperty(exports1, "__esModule", {
                        value: true
                    });
                    exports1.Slide = void 0;
                    function _classCallCheck(instance, Constructor) {
                        if (!(instance instanceof Constructor)) {
                            throw new TypeError("Cannot call a class as a function");
                        }
                    }
                    var Slide = function Slide(el) {
                        _classCallCheck(this, Slide);
                        this.DOM = {
                            el: el
                        };
                        this.DOM.imgWrap = this.DOM.el.querySelector(".slide__img-wrap");
                        this.DOM.img = this.DOM.imgWrap.querySelector(".slide__img");
                        this.DOM.headline = this.DOM.el.querySelector(".slides__caption-headline");
                        this.DOM.text = this.DOM.headline.querySelectorAll(".text-row > span");
                        this.DOM.link = this.DOM.el.querySelector(".slides__caption-link");
                    };
                    exports1.Slide = Slide;
                },
                {}
            ],
            "FRpO": [
                function(require1, module1, exports1) {
                    // Copyright Joyent, Inc. and other Node contributors.
                    //
                    // Permission is hereby granted, free of charge, to any person obtaining a
                    // copy of this software and associated documentation files (the
                    // "Software"), to deal in the Software without restriction, including
                    // without limitation the rights to use, copy, modify, merge, publish,
                    // distribute, sublicense, and/or sell copies of the Software, and to permit
                    // persons to whom the Software is furnished to do so, subject to the
                    // following conditions:
                    //
                    // The above copyright notice and this permission notice shall be included
                    // in all copies or substantial portions of the Software.
                    //
                    // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
                    // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
                    // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
                    // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
                    // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
                    // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
                    // USE OR OTHER DEALINGS IN THE SOFTWARE.
                    "use strict";
                    var R = typeof Reflect === "object" ? Reflect : null;
                    var ReflectApply = R && typeof R.apply === "function" ? R.apply : function ReflectApply(target, receiver, args) {
                        return Function.prototype.apply.call(target, receiver, args);
                    };
                    var ReflectOwnKeys;
                    if (R && typeof R.ownKeys === "function") {
                        ReflectOwnKeys = R.ownKeys;
                    } else if (Object.getOwnPropertySymbols) {
                        ReflectOwnKeys = function ReflectOwnKeys(target) {
                            return Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target));
                        };
                    } else {
                        ReflectOwnKeys = function ReflectOwnKeys(target) {
                            return Object.getOwnPropertyNames(target);
                        };
                    }
                    function ProcessEmitWarning(warning) {
                        if (console && console.warn) console.warn(warning);
                    }
                    var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
                        return value !== value;
                    };
                    function EventEmitter() {
                        EventEmitter.init.call(this);
                    }
                    module1.exports = EventEmitter;
                    module1.exports.once = once; // Backwards-compat with node 0.10.x
                    EventEmitter.EventEmitter = EventEmitter;
                    EventEmitter.prototype._events = undefined;
                    EventEmitter.prototype._eventsCount = 0;
                    EventEmitter.prototype._maxListeners = undefined; // By default EventEmitters will print a warning if more than 10 listeners are
                    // added to it. This is a useful default which helps finding memory leaks.
                    var defaultMaxListeners = 10;
                    function checkListener(listener) {
                        if (typeof listener !== "function") {
                            throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
                        }
                    }
                    Object.defineProperty(EventEmitter, "defaultMaxListeners", {
                        enumerable: true,
                        get: function() {
                            return defaultMaxListeners;
                        },
                        set: function(arg) {
                            if (typeof arg !== "number" || arg < 0 || NumberIsNaN(arg)) {
                                throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + ".");
                            }
                            defaultMaxListeners = arg;
                        }
                    });
                    EventEmitter.init = function() {
                        if (this._events === undefined || this._events === Object.getPrototypeOf(this)._events) {
                            this._events = Object.create(null);
                            this._eventsCount = 0;
                        }
                        this._maxListeners = this._maxListeners || undefined;
                    }; // Obviously not all Emitters should be limited to 10. This function allows
                    // that to be increased. Set to zero for unlimited.
                    EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
                        if (typeof n !== "number" || n < 0 || NumberIsNaN(n)) {
                            throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + ".");
                        }
                        this._maxListeners = n;
                        return this;
                    };
                    function _getMaxListeners(that) {
                        if (that._maxListeners === undefined) return EventEmitter.defaultMaxListeners;
                        return that._maxListeners;
                    }
                    EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
                        return _getMaxListeners(this);
                    };
                    EventEmitter.prototype.emit = function emit(type) {
                        var args = [];
                        for(var i = 1; i < arguments.length; i++)args.push(arguments[i]);
                        var doError = type === "error";
                        var events = this._events;
                        if (events !== undefined) doError = doError && events.error === undefined;
                        else if (!doError) return false; // If there is no 'error' event listener then throw.
                        if (doError) {
                            var er;
                            if (args.length > 0) er = args[0];
                            if (er instanceof Error) {
                                // Note: The comments on the `throw` lines are intentional, they show
                                // up in Node's output if this results in an unhandled exception.
                                throw er; // Unhandled 'error' event
                            } // At least give some kind of context to the user
                            var err = new Error("Unhandled error." + (er ? " (" + er.message + ")" : ""));
                            err.context = er;
                            throw err; // Unhandled 'error' event
                        }
                        var handler = events[type];
                        if (handler === undefined) return false;
                        if (typeof handler === "function") {
                            ReflectApply(handler, this, args);
                        } else {
                            var len = handler.length;
                            var listeners = arrayClone(handler, len);
                            for(var i = 0; i < len; ++i)ReflectApply(listeners[i], this, args);
                        }
                        return true;
                    };
                    function _addListener(target, type, listener, prepend) {
                        var m;
                        var events;
                        var existing;
                        checkListener(listener);
                        events = target._events;
                        if (events === undefined) {
                            events = target._events = Object.create(null);
                            target._eventsCount = 0;
                        } else {
                            // To avoid recursion in the case that type === "newListener"! Before
                            // adding it to the listeners, first emit "newListener".
                            if (events.newListener !== undefined) {
                                target.emit("newListener", type, listener.listener ? listener.listener : listener); // Re-assign `events` because a newListener handler could have caused the
                                // this._events to be assigned to a new object
                                events = target._events;
                            }
                            existing = events[type];
                        }
                        if (existing === undefined) {
                            // Optimize the case of one listener. Don't need the extra array object.
                            existing = events[type] = listener;
                            ++target._eventsCount;
                        } else {
                            if (typeof existing === "function") {
                                // Adding the second element, need to change to array.
                                existing = events[type] = prepend ? [
                                    listener,
                                    existing
                                ] : [
                                    existing,
                                    listener
                                ]; // If we've already got an array, just append.
                            } else if (prepend) {
                                existing.unshift(listener);
                            } else {
                                existing.push(listener);
                            } // Check for listener leak
                            m = _getMaxListeners(target);
                            if (m > 0 && existing.length > m && !existing.warned) {
                                existing.warned = true; // No error code for this since it is a Warning
                                // eslint-disable-next-line no-restricted-syntax
                                var w = new Error("Possible EventEmitter memory leak detected. " + existing.length + " " + String(type) + " listeners " + "added. Use emitter.setMaxListeners() to " + "increase limit");
                                w.name = "MaxListenersExceededWarning";
                                w.emitter = target;
                                w.type = type;
                                w.count = existing.length;
                                ProcessEmitWarning(w);
                            }
                        }
                        return target;
                    }
                    EventEmitter.prototype.addListener = function addListener(type, listener) {
                        return _addListener(this, type, listener, false);
                    };
                    EventEmitter.prototype.on = EventEmitter.prototype.addListener;
                    EventEmitter.prototype.prependListener = function prependListener(type, listener) {
                        return _addListener(this, type, listener, true);
                    };
                    function onceWrapper() {
                        if (!this.fired) {
                            this.target.removeListener(this.type, this.wrapFn);
                            this.fired = true;
                            if (arguments.length === 0) return this.listener.call(this.target);
                            return this.listener.apply(this.target, arguments);
                        }
                    }
                    function _onceWrap(target, type, listener) {
                        var state = {
                            fired: false,
                            wrapFn: undefined,
                            target: target,
                            type: type,
                            listener: listener
                        };
                        var wrapped = onceWrapper.bind(state);
                        wrapped.listener = listener;
                        state.wrapFn = wrapped;
                        return wrapped;
                    }
                    EventEmitter.prototype.once = function once(type, listener) {
                        checkListener(listener);
                        this.on(type, _onceWrap(this, type, listener));
                        return this;
                    };
                    EventEmitter.prototype.prependOnceListener = function prependOnceListener(type, listener) {
                        checkListener(listener);
                        this.prependListener(type, _onceWrap(this, type, listener));
                        return this;
                    }; // Emits a 'removeListener' event if and only if the listener was removed.
                    EventEmitter.prototype.removeListener = function removeListener(type, listener) {
                        var list, events, position, i, originalListener;
                        checkListener(listener);
                        events = this._events;
                        if (events === undefined) return this;
                        list = events[type];
                        if (list === undefined) return this;
                        if (list === listener || list.listener === listener) {
                            if (--this._eventsCount === 0) this._events = Object.create(null);
                            else {
                                delete events[type];
                                if (events.removeListener) this.emit("removeListener", type, list.listener || listener);
                            }
                        } else if (typeof list !== "function") {
                            position = -1;
                            for(i = list.length - 1; i >= 0; i--){
                                if (list[i] === listener || list[i].listener === listener) {
                                    originalListener = list[i].listener;
                                    position = i;
                                    break;
                                }
                            }
                            if (position < 0) return this;
                            if (position === 0) list.shift();
                            else {
                                spliceOne(list, position);
                            }
                            if (list.length === 1) events[type] = list[0];
                            if (events.removeListener !== undefined) this.emit("removeListener", type, originalListener || listener);
                        }
                        return this;
                    };
                    EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
                    EventEmitter.prototype.removeAllListeners = function removeAllListeners(type) {
                        var listeners, events, i;
                        events = this._events;
                        if (events === undefined) return this; // not listening for removeListener, no need to emit
                        if (events.removeListener === undefined) {
                            if (arguments.length === 0) {
                                this._events = Object.create(null);
                                this._eventsCount = 0;
                            } else if (events[type] !== undefined) {
                                if (--this._eventsCount === 0) this._events = Object.create(null);
                                else delete events[type];
                            }
                            return this;
                        } // emit removeListener for all listeners on all events
                        if (arguments.length === 0) {
                            var keys = Object.keys(events);
                            var key;
                            for(i = 0; i < keys.length; ++i){
                                key = keys[i];
                                if (key === "removeListener") continue;
                                this.removeAllListeners(key);
                            }
                            this.removeAllListeners("removeListener");
                            this._events = Object.create(null);
                            this._eventsCount = 0;
                            return this;
                        }
                        listeners = events[type];
                        if (typeof listeners === "function") {
                            this.removeListener(type, listeners);
                        } else if (listeners !== undefined) {
                            // LIFO order
                            for(i = listeners.length - 1; i >= 0; i--){
                                this.removeListener(type, listeners[i]);
                            }
                        }
                        return this;
                    };
                    function _listeners(target, type, unwrap) {
                        var events = target._events;
                        if (events === undefined) return [];
                        var evlistener = events[type];
                        if (evlistener === undefined) return [];
                        if (typeof evlistener === "function") return unwrap ? [
                            evlistener.listener || evlistener
                        ] : [
                            evlistener
                        ];
                        return unwrap ? unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
                    }
                    EventEmitter.prototype.listeners = function listeners(type) {
                        return _listeners(this, type, true);
                    };
                    EventEmitter.prototype.rawListeners = function rawListeners(type) {
                        return _listeners(this, type, false);
                    };
                    EventEmitter.listenerCount = function(emitter, type) {
                        if (typeof emitter.listenerCount === "function") {
                            return emitter.listenerCount(type);
                        } else {
                            return listenerCount.call(emitter, type);
                        }
                    };
                    EventEmitter.prototype.listenerCount = listenerCount;
                    function listenerCount(type) {
                        var events = this._events;
                        if (events !== undefined) {
                            var evlistener = events[type];
                            if (typeof evlistener === "function") {
                                return 1;
                            } else if (evlistener !== undefined) {
                                return evlistener.length;
                            }
                        }
                        return 0;
                    }
                    EventEmitter.prototype.eventNames = function eventNames() {
                        return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
                    };
                    function arrayClone(arr, n) {
                        var copy = new Array(n);
                        for(var i = 0; i < n; ++i)copy[i] = arr[i];
                        return copy;
                    }
                    function spliceOne(list, index) {
                        for(; index + 1 < list.length; index++)list[index] = list[index + 1];
                        list.pop();
                    }
                    function unwrapListeners(arr) {
                        var ret = new Array(arr.length);
                        for(var i = 0; i < ret.length; ++i){
                            ret[i] = arr[i].listener || arr[i];
                        }
                        return ret;
                    }
                    function once(emitter, name) {
                        return new Promise(function(resolve, reject) {
                            function errorListener(err) {
                                emitter.removeListener(name, resolver);
                                reject(err);
                            }
                            function resolver() {
                                if (typeof emitter.removeListener === "function") {
                                    emitter.removeListener("error", errorListener);
                                }
                                resolve([].slice.call(arguments));
                            }
                            ;
                            eventTargetAgnosticAddListener(emitter, name, resolver, {
                                once: true
                            });
                            if (name !== "error") {
                                addErrorHandlerIfEventEmitter(emitter, errorListener, {
                                    once: true
                                });
                            }
                        });
                    }
                    function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
                        if (typeof emitter.on === "function") {
                            eventTargetAgnosticAddListener(emitter, "error", handler, flags);
                        }
                    }
                    function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
                        if (typeof emitter.on === "function") {
                            if (flags.once) {
                                emitter.once(name, listener);
                            } else {
                                emitter.on(name, listener);
                            }
                        } else if (typeof emitter.addEventListener === "function") {
                            // EventTarget does not have `error` event semantics like Node
                            // EventEmitters, we do not listen for `error` events here.
                            emitter.addEventListener(name, function wrapListener(arg) {
                                // IE does not have builtin `{ once: true }` support so we
                                // have to do it manually.
                                if (flags.once) {
                                    emitter.removeEventListener(name, wrapListener);
                                }
                                listener(arg);
                            });
                        } else {
                            throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
                        }
                    }
                },
                {}
            ],
            "TNS6": [
                function(require1, module1, exports1) {
                    "use strict";
                    Object.defineProperty(exports1, "__esModule", {
                        value: true
                    });
                    exports1._getCache = exports1._getSetter = exports1._missingPlugin = exports1._round = exports1._roundModifier = exports1._config = exports1._ticker = exports1._plugins = exports1._checkPlugin = exports1._replaceRandom = exports1._colorStringFilter = exports1._sortPropTweensByPriority = exports1._forEachName = exports1._removeLinkedListItem = exports1._setDefaults = exports1._relExp = exports1._renderComplexString = exports1._isUndefined = exports1._isString = exports1._numWithUnitExp = exports1._numExp = exports1._getProperty = exports1.shuffle = exports1.interpolate = exports1.unitize = exports1.pipe = exports1.mapRange = exports1.toArray = exports1.splitColor = exports1.clamp = exports1.getUnit = exports1.normalize = exports1.snap = exports1.random = exports1.distribute = exports1.wrapYoyo = exports1.wrap = exports1.Circ = exports1.Expo = exports1.Sine = exports1.Bounce = exports1.SteppedEase = exports1.Back = exports1.Elastic = exports1.Strong = exports1.Quint = exports1.Quart = exports1.Cubic = exports1.Quad = exports1.Linear = exports1.Power4 = exports1.Power3 = exports1.Power2 = exports1.Power1 = exports1.Power0 = exports1.default = exports1.gsap = exports1.PropTween = exports1.TweenLite = exports1.TweenMax = exports1.Tween = exports1.TimelineLite = exports1.TimelineMax = exports1.Timeline = exports1.Animation = exports1.GSCache = void 0;
                    function _assertThisInitialized(self) {
                        if (self === void 0) {
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        }
                        return self;
                    }
                    function _inheritsLoose(subClass, superClass) {
                        subClass.prototype = Object.create(superClass.prototype);
                        subClass.prototype.constructor = subClass;
                        subClass.__proto__ = superClass;
                    }
                    /*!
         * GSAP 3.6.0
         * https://greensock.com
         *
         * @license Copyright 2008-2021, GreenSock. All rights reserved.
         * Subject to the terms at https://greensock.com/standard-license or for
         * Club GreenSock members, the agreement issued with that membership.
         * @author: Jack Doyle, jack@greensock.com
        */ /* eslint-disable */ var _config = {
                        autoSleep: 120,
                        force3D: "auto",
                        nullTargetWarn: 1,
                        units: {
                            lineHeight: ""
                        }
                    }, _defaults = {
                        duration: .5,
                        overwrite: false,
                        delay: 0
                    }, _suppressOverwrites, _bigNum = 1e8, _tinyNum = 1 / _bigNum, _2PI = Math.PI * 2, _HALF_PI = _2PI / 4, _gsID = 0, _sqrt = Math.sqrt, _cos = Math.cos, _sin = Math.sin, _isString = function _isString(value) {
                        return typeof value === "string";
                    }, _isFunction = function _isFunction(value) {
                        return typeof value === "function";
                    }, _isNumber = function _isNumber(value) {
                        return typeof value === "number";
                    }, _isUndefined = function _isUndefined(value) {
                        return typeof value === "undefined";
                    }, _isObject = function _isObject(value) {
                        return typeof value === "object";
                    }, _isNotFalse = function _isNotFalse(value) {
                        return value !== false;
                    }, _windowExists = function _windowExists() {
                        return "undefined" !== "undefined";
                    }, _isFuncOrString = function _isFuncOrString(value) {
                        return _isFunction(value) || _isString(value);
                    }, _isTypedArray = typeof ArrayBuffer === "function" && ArrayBuffer.isView || function() {}, // note: IE10 has ArrayBuffer, but NOT ArrayBuffer.isView().
                    _isArray = Array.isArray, _strictNumExp = /(?:-?\.?\d|\.)+/gi, //only numbers (including negatives and decimals) but NOT relative values.
                    _numExp = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, //finds any numbers, including ones that start with += or -=, negative numbers, and ones in scientific notation like 1e-8.
                    _numWithUnitExp = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, _complexStringNumExp = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, //duplicate so that while we're looping through matches from exec(), it doesn't contaminate the lastIndex of _numExp which we use to search for colors too.
                    _relExp = /[+-]=-?[.\d]+/, _delimitedValueExp = /[#\-+.]*\b[a-z\d-=+%.]+/gi, _unitExp = /[\d.+\-=]+(?:e[-+]\d*)*/i, _globalTimeline, _win, _coreInitted, _doc, _globals = {}, _installScope = {}, _coreReady, _install = function _install(scope) {
                        return (_installScope = _merge(scope, _globals)) && gsap;
                    }, _missingPlugin = function _missingPlugin(property, value) {
                        return console.warn("Invalid property", property, "set to", value, "Missing plugin? gsap.registerPlugin()");
                    }, _warn = function _warn(message, suppress) {
                        return !suppress && console.warn(message);
                    }, _addGlobal = function _addGlobal(name, obj) {
                        return name && (_globals[name] = obj) && _installScope && (_installScope[name] = obj) || _globals;
                    }, _emptyFunc = function _emptyFunc() {
                        return 0;
                    }, _reservedProps = {}, _lazyTweens = [], _lazyLookup = {}, _lastRenderedFrame, _plugins = {}, _effects = {}, _nextGCFrame = 30, _harnessPlugins = [], _callbackNames = "", _harness = function _harness(targets) {
                        var target = targets[0], harnessPlugin, i;
                        _isObject(target) || _isFunction(target) || (targets = [
                            targets
                        ]);
                        if (!(harnessPlugin = (target._gsap || {}).harness)) {
                            // find the first target with a harness. We assume targets passed into an animation will be of similar type, meaning the same kind of harness can be used for them all (performance optimization)
                            i = _harnessPlugins.length;
                            while(i-- && !_harnessPlugins[i].targetTest(target)){}
                            harnessPlugin = _harnessPlugins[i];
                        }
                        i = targets.length;
                        while(i--){
                            targets[i] && (targets[i]._gsap || (targets[i]._gsap = new GSCache(targets[i], harnessPlugin))) || targets.splice(i, 1);
                        }
                        return targets;
                    }, _getCache = function _getCache(target) {
                        return target._gsap || _harness(toArray(target))[0]._gsap;
                    }, _getProperty = function _getProperty(target, property, v) {
                        return (v = target[property]) && _isFunction(v) ? target[property]() : _isUndefined(v) && target.getAttribute && target.getAttribute(property) || v;
                    }, _forEachName = function _forEachName(names, func) {
                        return (names = names.split(",")).forEach(func) || names;
                    }, //split a comma-delimited list of names into an array, then run a forEach() function and return the split array (this is just a way to consolidate/shorten some code).
                    _round = function _round(value) {
                        return Math.round(value * 100000) / 100000 || 0;
                    }, _arrayContainsAny = function _arrayContainsAny(toSearch, toFind) {
                        //searches one array to find matches for any of the items in the toFind array. As soon as one is found, it returns true. It does NOT return all the matches; it's simply a boolean search.
                        var l = toFind.length, i = 0;
                        for(; toSearch.indexOf(toFind[i]) < 0 && ++i < l;){}
                        return i < l;
                    }, _parseVars = function _parseVars(params, type, parent) {
                        //reads the arguments passed to one of the key methods and figures out if the user is defining things with the OLD/legacy syntax where the duration is the 2nd parameter, and then it adjusts things accordingly and spits back the corrected vars object (with the duration added if necessary, as well as runBackwards or startAt or immediateRender). type 0 = to()/staggerTo(), 1 = from()/staggerFrom(), 2 = fromTo()/staggerFromTo()
                        var isLegacy = _isNumber(params[1]), varsIndex = (isLegacy ? 2 : 1) + (type < 2 ? 0 : 1), vars = params[varsIndex], irVars;
                        isLegacy && (vars.duration = params[1]);
                        vars.parent = parent;
                        if (type) {
                            irVars = vars;
                            while(parent && !("immediateRender" in irVars)){
                                // inheritance hasn't happened yet, but someone may have set a default in an ancestor timeline. We could do vars.immediateRender = _isNotFalse(_inheritDefaults(vars).immediateRender) but that'd exact a slight performance penalty because _inheritDefaults() also runs in the Tween constructor. We're paying a small kb price here to gain speed.
                                irVars = parent.vars.defaults || {};
                                parent = _isNotFalse(parent.vars.inherit) && parent.parent;
                            }
                            vars.immediateRender = _isNotFalse(irVars.immediateRender);
                            type < 2 ? vars.runBackwards = 1 : vars.startAt = params[varsIndex - 1]; // "from" vars
                        }
                        return vars;
                    }, _lazyRender = function _lazyRender() {
                        var l = _lazyTweens.length, a = _lazyTweens.slice(0), i, tween;
                        _lazyLookup = {};
                        _lazyTweens.length = 0;
                        for(i = 0; i < l; i++){
                            tween = a[i];
                            tween && tween._lazy && (tween.render(tween._lazy[0], tween._lazy[1], true)._lazy = 0);
                        }
                    }, _lazySafeRender = function _lazySafeRender(animation, time, suppressEvents, force) {
                        _lazyTweens.length && _lazyRender();
                        animation.render(time, suppressEvents, force);
                        _lazyTweens.length && _lazyRender(); //in case rendering caused any tweens to lazy-init, we should render them because typically when someone calls seek() or time() or progress(), they expect an immediate render.
                    }, _numericIfPossible = function _numericIfPossible(value) {
                        var n = parseFloat(value);
                        return (n || n === 0) && (value + "").match(_delimitedValueExp).length < 2 ? n : _isString(value) ? value.trim() : value;
                    }, _passThrough = function _passThrough(p) {
                        return p;
                    }, _setDefaults = function _setDefaults(obj, defaults) {
                        for(var p in defaults){
                            p in obj || (obj[p] = defaults[p]);
                        }
                        return obj;
                    }, _setKeyframeDefaults = function _setKeyframeDefaults(obj, defaults) {
                        for(var p in defaults){
                            p in obj || p === "duration" || p === "ease" || (obj[p] = defaults[p]);
                        }
                    }, _merge = function _merge(base, toMerge) {
                        for(var p in toMerge){
                            base[p] = toMerge[p];
                        }
                        return base;
                    }, _mergeDeep = function _mergeDeep(base, toMerge) {
                        for(var p in toMerge){
                            p !== "__proto__" && p !== "constructor" && p !== "prototype" && (base[p] = _isObject(toMerge[p]) ? _mergeDeep(base[p] || (base[p] = {}), toMerge[p]) : toMerge[p]);
                        }
                        return base;
                    }, _copyExcluding = function _copyExcluding(obj, excluding) {
                        var copy = {}, p;
                        for(p in obj){
                            p in excluding || (copy[p] = obj[p]);
                        }
                        return copy;
                    }, _inheritDefaults = function _inheritDefaults(vars) {
                        var parent = vars.parent || _globalTimeline, func = vars.keyframes ? _setKeyframeDefaults : _setDefaults;
                        if (_isNotFalse(vars.inherit)) {
                            while(parent){
                                func(vars, parent.vars.defaults);
                                parent = parent.parent || parent._dp;
                            }
                        }
                        return vars;
                    }, _arraysMatch = function _arraysMatch(a1, a2) {
                        var i = a1.length, match = i === a2.length;
                        while(match && i-- && a1[i] === a2[i]){}
                        return i < 0;
                    }, _addLinkedListItem = function _addLinkedListItem(parent, child, firstProp, lastProp, sortBy) {
                        if (firstProp === void 0) {
                            firstProp = "_first";
                        }
                        if (lastProp === void 0) {
                            lastProp = "_last";
                        }
                        var prev = parent[lastProp], t;
                        if (sortBy) {
                            t = child[sortBy];
                            while(prev && prev[sortBy] > t){
                                prev = prev._prev;
                            }
                        }
                        if (prev) {
                            child._next = prev._next;
                            prev._next = child;
                        } else {
                            child._next = parent[firstProp];
                            parent[firstProp] = child;
                        }
                        if (child._next) {
                            child._next._prev = child;
                        } else {
                            parent[lastProp] = child;
                        }
                        child._prev = prev;
                        child.parent = child._dp = parent;
                        return child;
                    }, _removeLinkedListItem = function _removeLinkedListItem(parent, child, firstProp, lastProp) {
                        if (firstProp === void 0) {
                            firstProp = "_first";
                        }
                        if (lastProp === void 0) {
                            lastProp = "_last";
                        }
                        var prev = child._prev, next = child._next;
                        if (prev) {
                            prev._next = next;
                        } else if (parent[firstProp] === child) {
                            parent[firstProp] = next;
                        }
                        if (next) {
                            next._prev = prev;
                        } else if (parent[lastProp] === child) {
                            parent[lastProp] = prev;
                        }
                        child._next = child._prev = child.parent = null; // don't delete the _dp just so we can revert if necessary. But parent should be null to indicate the item isn't in a linked list.
                    }, _removeFromParent = function _removeFromParent(child, onlyIfParentHasAutoRemove) {
                        child.parent && (!onlyIfParentHasAutoRemove || child.parent.autoRemoveChildren) && child.parent.remove(child);
                        child._act = 0;
                    }, _uncache = function _uncache(animation, child) {
                        if (animation && (!child || child._end > animation._dur || child._start < 0)) {
                            // performance optimization: if a child animation is passed in we should only uncache if that child EXTENDS the animation (its end time is beyond the end)
                            var a = animation;
                            while(a){
                                a._dirty = 1;
                                a = a.parent;
                            }
                        }
                        return animation;
                    }, _recacheAncestors = function _recacheAncestors(animation) {
                        var parent = animation.parent;
                        while(parent && parent.parent){
                            //sometimes we must force a re-sort of all children and update the duration/totalDuration of all ancestor timelines immediately in case, for example, in the middle of a render loop, one tween alters another tween's timeScale which shoves its startTime before 0, forcing the parent timeline to shift around and shiftChildren() which could affect that next tween's render (startTime). Doesn't matter for the root timeline though.
                            parent._dirty = 1;
                            parent.totalDuration();
                            parent = parent.parent;
                        }
                        return animation;
                    }, _hasNoPausedAncestors = function _hasNoPausedAncestors(animation) {
                        return !animation || animation._ts && _hasNoPausedAncestors(animation.parent);
                    }, _elapsedCycleDuration = function _elapsedCycleDuration(animation) {
                        return animation._repeat ? _animationCycle(animation._tTime, animation = animation.duration() + animation._rDelay) * animation : 0;
                    }, // feed in the totalTime and cycleDuration and it'll return the cycle (iteration minus 1) and if the playhead is exactly at the very END, it will NOT bump up to the next cycle.
                    _animationCycle = function _animationCycle(tTime, cycleDuration) {
                        var whole = Math.floor(tTime /= cycleDuration);
                        return tTime && whole === tTime ? whole - 1 : whole;
                    }, _parentToChildTotalTime = function _parentToChildTotalTime(parentTime, child) {
                        return (parentTime - child._start) * child._ts + (child._ts >= 0 ? 0 : child._dirty ? child.totalDuration() : child._tDur);
                    }, _setEnd = function _setEnd(animation) {
                        return animation._end = _round(animation._start + (animation._tDur / Math.abs(animation._ts || animation._rts || _tinyNum) || 0));
                    }, _alignPlayhead = function _alignPlayhead(animation, totalTime) {
                        // adjusts the animation's _start and _end according to the provided totalTime (only if the parent's smoothChildTiming is true and the animation isn't paused). It doesn't do any rendering or forcing things back into parent timelines, etc. - that's what totalTime() is for.
                        var parent = animation._dp;
                        if (parent && parent.smoothChildTiming && animation._ts) {
                            animation._start = _round(parent._time - (animation._ts > 0 ? totalTime / animation._ts : ((animation._dirty ? animation.totalDuration() : animation._tDur) - totalTime) / -animation._ts));
                            _setEnd(animation);
                            parent._dirty || _uncache(parent, animation); //for performance improvement. If the parent's cache is already dirty, it already took care of marking the ancestors as dirty too, so skip the function call here.
                        }
                        return animation;
                    }, /*
          _totalTimeToTime = (clampedTotalTime, duration, repeat, repeatDelay, yoyo) => {
            let cycleDuration = duration + repeatDelay,
              time = _round(clampedTotalTime % cycleDuration);
            if (time > duration) {
              time = duration;
            }
            return (yoyo && (~~(clampedTotalTime / cycleDuration) & 1)) ? duration - time : time;
          },
          */ _postAddChecks = function _postAddChecks(timeline, child) {
                        var t;
                        if (child._time || child._initted && !child._dur) {
                            //in case, for example, the _start is moved on a tween that has already rendered. Imagine it's at its end state, then the startTime is moved WAY later (after the end of this timeline), it should render at its beginning.
                            t = _parentToChildTotalTime(timeline.rawTime(), child);
                            if (!child._dur || _clamp(0, child.totalDuration(), t) - child._tTime > _tinyNum) {
                                child.render(t, true);
                            }
                        } //if the timeline has already ended but the inserted tween/timeline extends the duration, we should enable this timeline again so that it renders properly. We should also align the playhead with the parent timeline's when appropriate.
                        if (_uncache(timeline, child)._dp && timeline._initted && timeline._time >= timeline._dur && timeline._ts) {
                            //in case any of the ancestors had completed but should now be enabled...
                            if (timeline._dur < timeline.duration()) {
                                t = timeline;
                                while(t._dp){
                                    t.rawTime() >= 0 && t.totalTime(t._tTime); //moves the timeline (shifts its startTime) if necessary, and also enables it. If it's currently zero, though, it may not be scheduled to render until later so there's no need to force it to align with the current playhead position. Only move to catch up with the playhead.
                                    t = t._dp;
                                }
                            }
                            timeline._zTime = -_tinyNum; // helps ensure that the next render() will be forced (crossingStart = true in render()), even if the duration hasn't changed (we're adding a child which would need to get rendered). Definitely an edge case. Note: we MUST do this AFTER the loop above where the totalTime() might trigger a render() because this _addToTimeline() method gets called from the Animation constructor, BEFORE tweens even record their targets, etc. so we wouldn't want things to get triggered in the wrong order.
                        }
                    }, _addToTimeline = function _addToTimeline(timeline, child, position, skipChecks) {
                        child.parent && _removeFromParent(child);
                        child._start = _round(position + child._delay);
                        child._end = _round(child._start + (child.totalDuration() / Math.abs(child.timeScale()) || 0));
                        _addLinkedListItem(timeline, child, "_first", "_last", timeline._sort ? "_start" : 0);
                        timeline._recent = child;
                        skipChecks || _postAddChecks(timeline, child);
                        return timeline;
                    }, _scrollTrigger = function _scrollTrigger(animation, trigger) {
                        return (_globals.ScrollTrigger || _missingPlugin("scrollTrigger", trigger)) && _globals.ScrollTrigger.create(trigger, animation);
                    }, _attemptInitTween = function _attemptInitTween(tween, totalTime, force, suppressEvents) {
                        _initTween(tween, totalTime);
                        if (!tween._initted) {
                            return 1;
                        }
                        if (!force && tween._pt && (tween._dur && tween.vars.lazy !== false || !tween._dur && tween.vars.lazy) && _lastRenderedFrame !== _ticker.frame) {
                            _lazyTweens.push(tween);
                            tween._lazy = [
                                totalTime,
                                suppressEvents
                            ];
                            return 1;
                        }
                    }, _parentPlayheadIsBeforeStart = function _parentPlayheadIsBeforeStart(_ref) {
                        var parent = _ref.parent;
                        return parent && parent._ts && parent._initted && !parent._lock && (parent.rawTime() < 0 || _parentPlayheadIsBeforeStart(parent));
                    }, // check parent's _lock because when a timeline repeats/yoyos and does its artificial wrapping, we shouldn't force the ratio back to 0
                    _renderZeroDurationTween = function _renderZeroDurationTween(tween, totalTime, suppressEvents, force) {
                        var prevRatio = tween.ratio, ratio = totalTime < 0 || !totalTime && (!tween._start && _parentPlayheadIsBeforeStart(tween) || (tween._ts < 0 || tween._dp._ts < 0) && tween.data !== "isFromStart" && tween.data !== "isStart") ? 0 : 1, // if the tween or its parent is reversed and the totalTime is 0, we should go to a ratio of 0.
                        repeatDelay = tween._rDelay, tTime = 0, pt, iteration, prevIteration;
                        if (repeatDelay && tween._repeat) {
                            // in case there's a zero-duration tween that has a repeat with a repeatDelay
                            tTime = _clamp(0, tween._tDur, totalTime);
                            iteration = _animationCycle(tTime, repeatDelay);
                            prevIteration = _animationCycle(tween._tTime, repeatDelay);
                            tween._yoyo && iteration & 1 && (ratio = 1 - ratio);
                            if (iteration !== prevIteration) {
                                prevRatio = 1 - ratio;
                                tween.vars.repeatRefresh && tween._initted && tween.invalidate();
                            }
                        }
                        if (ratio !== prevRatio || force || tween._zTime === _tinyNum || !totalTime && tween._zTime) {
                            if (!tween._initted && _attemptInitTween(tween, totalTime, force, suppressEvents)) {
                                // if we render the very beginning (time == 0) of a fromTo(), we must force the render (normal tweens wouldn't need to render at a time of 0 when the prevTime was also 0). This is also mandatory to make sure overwriting kicks in immediately.
                                return;
                            }
                            prevIteration = tween._zTime;
                            tween._zTime = totalTime || (suppressEvents ? _tinyNum : 0); // when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect.
                            suppressEvents || (suppressEvents = totalTime && !prevIteration); // if it was rendered previously at exactly 0 (_zTime) and now the playhead is moving away, DON'T fire callbacks otherwise they'll seem like duplicates.
                            tween.ratio = ratio;
                            tween._from && (ratio = 1 - ratio);
                            tween._time = 0;
                            tween._tTime = tTime;
                            suppressEvents || _callback(tween, "onStart");
                            pt = tween._pt;
                            while(pt){
                                pt.r(ratio, pt.d);
                                pt = pt._next;
                            }
                            tween._startAt && totalTime < 0 && tween._startAt.render(totalTime, true, true);
                            tween._onUpdate && !suppressEvents && _callback(tween, "onUpdate");
                            tTime && tween._repeat && !suppressEvents && tween.parent && _callback(tween, "onRepeat");
                            if ((totalTime >= tween._tDur || totalTime < 0) && tween.ratio === ratio) {
                                ratio && _removeFromParent(tween, 1);
                                if (!suppressEvents) {
                                    _callback(tween, ratio ? "onComplete" : "onReverseComplete", true);
                                    tween._prom && tween._prom();
                                }
                            }
                        } else if (!tween._zTime) {
                            tween._zTime = totalTime;
                        }
                    }, _findNextPauseTween = function _findNextPauseTween(animation, prevTime, time) {
                        var child;
                        if (time > prevTime) {
                            child = animation._first;
                            while(child && child._start <= time){
                                if (!child._dur && child.data === "isPause" && child._start > prevTime) {
                                    return child;
                                }
                                child = child._next;
                            }
                        } else {
                            child = animation._last;
                            while(child && child._start >= time){
                                if (!child._dur && child.data === "isPause" && child._start < prevTime) {
                                    return child;
                                }
                                child = child._prev;
                            }
                        }
                    }, _setDuration = function _setDuration(animation, duration, skipUncache, leavePlayhead) {
                        var repeat = animation._repeat, dur = _round(duration) || 0, totalProgress = animation._tTime / animation._tDur;
                        totalProgress && !leavePlayhead && (animation._time *= dur / animation._dur);
                        animation._dur = dur;
                        animation._tDur = !repeat ? dur : repeat < 0 ? 1e10 : _round(dur * (repeat + 1) + animation._rDelay * repeat);
                        totalProgress && !leavePlayhead ? _alignPlayhead(animation, animation._tTime = animation._tDur * totalProgress) : animation.parent && _setEnd(animation);
                        skipUncache || _uncache(animation.parent, animation);
                        return animation;
                    }, _onUpdateTotalDuration = function _onUpdateTotalDuration(animation) {
                        return animation instanceof Timeline ? _uncache(animation) : _setDuration(animation, animation._dur);
                    }, _zeroPosition = {
                        _start: 0,
                        endTime: _emptyFunc
                    }, _parsePosition = function _parsePosition(animation, position) {
                        var labels = animation.labels, recent = animation._recent || _zeroPosition, clippedDuration = animation.duration() >= _bigNum ? recent.endTime(false) : animation._dur, //in case there's a child that infinitely repeats, users almost never intend for the insertion point of a new child to be based on a SUPER long value like that so we clip it and assume the most recently-added child's endTime should be used instead.
                        i, offset;
                        if (_isString(position) && (isNaN(position) || position in labels)) {
                            //if the string is a number like "1", check to see if there's a label with that name, otherwise interpret it as a number (absolute value).
                            i = position.charAt(0);
                            if (i === "<" || i === ">") {
                                return (i === "<" ? recent._start : recent.endTime(recent._repeat >= 0)) + (parseFloat(position.substr(1)) || 0);
                            }
                            i = position.indexOf("=");
                            if (i < 0) {
                                position in labels || (labels[position] = clippedDuration);
                                return labels[position];
                            }
                            offset = +(position.charAt(i - 1) + position.substr(i + 1));
                            return i > 1 ? _parsePosition(animation, position.substr(0, i - 1)) + offset : clippedDuration + offset;
                        }
                        return position == null ? clippedDuration : +position;
                    }, _conditionalReturn = function _conditionalReturn(value, func) {
                        return value || value === 0 ? func(value) : func;
                    }, _clamp = function _clamp(min, max, value) {
                        return value < min ? min : value > max ? max : value;
                    }, getUnit = function getUnit(value) {
                        if (typeof value !== "string") {
                            return "";
                        }
                        var v = _unitExp.exec(value);
                        return v ? value.substr(v.index + v[0].length) : "";
                    }, // note: protect against padded numbers as strings, like "100.100". That shouldn't return "00" as the unit. If it's numeric, return no unit.
                    clamp = function clamp(min, max, value) {
                        return _conditionalReturn(value, function(v) {
                            return _clamp(min, max, v);
                        });
                    }, _slice = [].slice, _isArrayLike = function _isArrayLike(value, nonEmpty) {
                        return value && _isObject(value) && "length" in value && (!nonEmpty && !value.length || value.length - 1 in value && _isObject(value[0])) && !value.nodeType && value !== _win;
                    }, _flatten = function _flatten(ar, leaveStrings, accumulator) {
                        if (accumulator === void 0) {
                            accumulator = [];
                        }
                        return ar.forEach(function(value) {
                            var _accumulator;
                            return _isString(value) && !leaveStrings || _isArrayLike(value, 1) ? (_accumulator = accumulator).push.apply(_accumulator, toArray(value)) : accumulator.push(value);
                        }) || accumulator;
                    }, //takes any value and returns an array. If it's a string (and leaveStrings isn't true), it'll use document.querySelectorAll() and convert that to an array. It'll also accept iterables like jQuery objects.
                    toArray = function toArray(value, leaveStrings) {
                        return _isString(value) && !leaveStrings && (_coreInitted || !_wake()) ? _slice.call(_doc.querySelectorAll(value), 0) : _isArray(value) ? _flatten(value, leaveStrings) : _isArrayLike(value) ? _slice.call(value, 0) : value ? [
                            value
                        ] : [];
                    }, shuffle = function shuffle(a) {
                        return a.sort(function() {
                            return .5 - Math.random();
                        });
                    }, // alternative that's a bit faster and more reliably diverse but bigger:   for (let j, v, i = a.length; i; j = Math.floor(Math.random() * i), v = a[--i], a[i] = a[j], a[j] = v); return a;
                    //for distributing values across an array. Can accept a number, a function or (most commonly) a function which can contain the following properties: {base, amount, from, ease, grid, axis, length, each}. Returns a function that expects the following parameters: index, target, array. Recognizes the following
                    distribute = function distribute(v) {
                        if (_isFunction(v)) {
                            return v;
                        }
                        var vars = _isObject(v) ? v : {
                            each: v
                        }, //n:1 is just to indicate v was a number; we leverage that later to set v according to the length we get. If a number is passed in, we treat it like the old stagger value where 0.1, for example, would mean that things would be distributed with 0.1 between each element in the array rather than a total "amount" that's chunked out among them all.
                        ease = _parseEase(vars.ease), from = vars.from || 0, base = parseFloat(vars.base) || 0, cache = {}, isDecimal = from > 0 && from < 1, ratios = isNaN(from) || isDecimal, axis = vars.axis, ratioX = from, ratioY = from;
                        if (_isString(from)) {
                            ratioX = ratioY = ({
                                center: .5,
                                edges: .5,
                                end: 1
                            })[from] || 0;
                        } else if (!isDecimal && ratios) {
                            ratioX = from[0];
                            ratioY = from[1];
                        }
                        return function(i, target, a) {
                            var l = (a || vars).length, distances = cache[l], originX, originY, x, y, d, j, max, min, wrapAt;
                            if (!distances) {
                                wrapAt = vars.grid === "auto" ? 0 : (vars.grid || [
                                    1,
                                    _bigNum
                                ])[1];
                                if (!wrapAt) {
                                    max = -_bigNum;
                                    while(max < (max = a[wrapAt++].getBoundingClientRect().left) && wrapAt < l){}
                                    wrapAt--;
                                }
                                distances = cache[l] = [];
                                originX = ratios ? Math.min(wrapAt, l) * ratioX - .5 : from % wrapAt;
                                originY = ratios ? l * ratioY / wrapAt - .5 : from / wrapAt | 0;
                                max = 0;
                                min = _bigNum;
                                for(j = 0; j < l; j++){
                                    x = j % wrapAt - originX;
                                    y = originY - (j / wrapAt | 0);
                                    distances[j] = d = !axis ? _sqrt(x * x + y * y) : Math.abs(axis === "y" ? y : x);
                                    d > max && (max = d);
                                    d < min && (min = d);
                                }
                                from === "random" && shuffle(distances);
                                distances.max = max - min;
                                distances.min = min;
                                distances.v = l = (parseFloat(vars.amount) || parseFloat(vars.each) * (wrapAt > l ? l - 1 : !axis ? Math.max(wrapAt, l / wrapAt) : axis === "y" ? l / wrapAt : wrapAt) || 0) * (from === "edges" ? -1 : 1);
                                distances.b = l < 0 ? base - l : base;
                                distances.u = getUnit(vars.amount || vars.each) || 0; //unit
                                ease = ease && l < 0 ? _invertEase(ease) : ease;
                            }
                            l = (distances[i] - distances.min) / distances.max || 0;
                            return _round(distances.b + (ease ? ease(l) : l) * distances.v) + distances.u; //round in order to work around floating point errors
                        };
                    }, _roundModifier = function _roundModifier(v) {
                        //pass in 0.1 get a function that'll round to the nearest tenth, or 5 to round to the closest 5, or 0.001 to the closest 1000th, etc.
                        var p = v < 1 ? Math.pow(10, (v + "").length - 2) : 1; //to avoid floating point math errors (like 24 * 0.1 == 2.4000000000000004), we chop off at a specific number of decimal places (much faster than toFixed()
                        return function(raw) {
                            var n = Math.round(parseFloat(raw) / v) * v * p;
                            return (n - n % 1) / p + (_isNumber(raw) ? 0 : getUnit(raw)); // n - n % 1 replaces Math.floor() in order to handle negative values properly. For example, Math.floor(-150.00000000000003) is 151!
                        };
                    }, snap = function snap(snapTo, value) {
                        var isArray = _isArray(snapTo), radius, is2D;
                        if (!isArray && _isObject(snapTo)) {
                            radius = isArray = snapTo.radius || _bigNum;
                            if (snapTo.values) {
                                snapTo = toArray(snapTo.values);
                                if (is2D = !_isNumber(snapTo[0])) {
                                    radius *= radius; //performance optimization so we don't have to Math.sqrt() in the loop.
                                }
                            } else {
                                snapTo = _roundModifier(snapTo.increment);
                            }
                        }
                        return _conditionalReturn(value, !isArray ? _roundModifier(snapTo) : _isFunction(snapTo) ? function(raw) {
                            is2D = snapTo(raw);
                            return Math.abs(is2D - raw) <= radius ? is2D : raw;
                        } : function(raw) {
                            var x = parseFloat(is2D ? raw.x : raw), y = parseFloat(is2D ? raw.y : 0), min = _bigNum, closest = 0, i = snapTo.length, dx, dy;
                            while(i--){
                                if (is2D) {
                                    dx = snapTo[i].x - x;
                                    dy = snapTo[i].y - y;
                                    dx = dx * dx + dy * dy;
                                } else {
                                    dx = Math.abs(snapTo[i] - x);
                                }
                                if (dx < min) {
                                    min = dx;
                                    closest = i;
                                }
                            }
                            closest = !radius || min <= radius ? snapTo[closest] : raw;
                            return is2D || closest === raw || _isNumber(raw) ? closest : closest + getUnit(raw);
                        });
                    }, random = function random(min, max, roundingIncrement, returnFunction) {
                        return _conditionalReturn(_isArray(min) ? !max : roundingIncrement === true ? !!(roundingIncrement = 0) : !returnFunction, function() {
                            return _isArray(min) ? min[~~(Math.random() * min.length)] : (roundingIncrement = roundingIncrement || 1e-5) && (returnFunction = roundingIncrement < 1 ? Math.pow(10, (roundingIncrement + "").length - 2) : 1) && Math.floor(Math.round((min - roundingIncrement / 2 + Math.random() * (max - min + roundingIncrement * .99)) / roundingIncrement) * roundingIncrement * returnFunction) / returnFunction;
                        });
                    }, pipe = function pipe() {
                        for(var _len = arguments.length, functions = new Array(_len), _key = 0; _key < _len; _key++){
                            functions[_key] = arguments[_key];
                        }
                        return function(value) {
                            return functions.reduce(function(v, f) {
                                return f(v);
                            }, value);
                        };
                    }, unitize = function unitize(func, unit) {
                        return function(value) {
                            return func(parseFloat(value)) + (unit || getUnit(value));
                        };
                    }, normalize = function normalize(min, max, value) {
                        return mapRange(min, max, 0, 1, value);
                    }, _wrapArray = function _wrapArray(a, wrapper, value) {
                        return _conditionalReturn(value, function(index) {
                            return a[~~wrapper(index)];
                        });
                    }, wrap = function wrap(min, max, value) {
                        // NOTE: wrap() CANNOT be an arrow function! A very odd compiling bug causes problems (unrelated to GSAP).
                        var range = max - min;
                        return _isArray(min) ? _wrapArray(min, wrap(0, min.length), max) : _conditionalReturn(value, function(value) {
                            return (range + (value - min) % range) % range + min;
                        });
                    }, wrapYoyo = function wrapYoyo(min, max, value) {
                        var range = max - min, total = range * 2;
                        return _isArray(min) ? _wrapArray(min, wrapYoyo(0, min.length - 1), max) : _conditionalReturn(value, function(value) {
                            value = (total + (value - min) % total) % total || 0;
                            return min + (value > range ? total - value : value);
                        });
                    }, _replaceRandom = function _replaceRandom(value) {
                        //replaces all occurrences of random(...) in a string with the calculated random value. can be a range like random(-100, 100, 5) or an array like random([0, 100, 500])
                        var prev = 0, s = "", i, nums, end, isArray;
                        while(~(i = value.indexOf("random(", prev))){
                            end = value.indexOf(")", i);
                            isArray = value.charAt(i + 7) === "[";
                            nums = value.substr(i + 7, end - i - 7).match(isArray ? _delimitedValueExp : _strictNumExp);
                            s += value.substr(prev, i - prev) + random(isArray ? nums : +nums[0], isArray ? 0 : +nums[1], +nums[2] || 1e-5);
                            prev = end + 1;
                        }
                        return s + value.substr(prev, value.length - prev);
                    }, mapRange = function mapRange(inMin, inMax, outMin, outMax, value) {
                        var inRange = inMax - inMin, outRange = outMax - outMin;
                        return _conditionalReturn(value, function(value) {
                            return outMin + ((value - inMin) / inRange * outRange || 0);
                        });
                    }, interpolate = function interpolate(start, end, progress, mutate) {
                        var func = isNaN(start + end) ? 0 : function(p) {
                            return (1 - p) * start + p * end;
                        };
                        if (!func) {
                            var isString = _isString(start), master = {}, p, i, interpolators, l, il;
                            progress === true && (mutate = 1) && (progress = null);
                            if (isString) {
                                start = {
                                    p: start
                                };
                                end = {
                                    p: end
                                };
                            } else if (_isArray(start) && !_isArray(end)) {
                                interpolators = [];
                                l = start.length;
                                il = l - 2;
                                for(i = 1; i < l; i++){
                                    interpolators.push(interpolate(start[i - 1], start[i])); //build the interpolators up front as a performance optimization so that when the function is called many times, it can just reuse them.
                                }
                                l--;
                                func = function func(p) {
                                    p *= l;
                                    var i = Math.min(il, ~~p);
                                    return interpolators[i](p - i);
                                };
                                progress = end;
                            } else if (!mutate) {
                                start = _merge(_isArray(start) ? [] : {}, start);
                            }
                            if (!interpolators) {
                                for(p in end){
                                    _addPropTween.call(master, start, p, "get", end[p]);
                                }
                                func = function func(p) {
                                    return _renderPropTweens(p, master) || (isString ? start.p : start);
                                };
                            }
                        }
                        return _conditionalReturn(progress, func);
                    }, _getLabelInDirection = function _getLabelInDirection(timeline, fromTime, backward) {
                        //used for nextLabel() and previousLabel()
                        var labels = timeline.labels, min = _bigNum, p, distance, label;
                        for(p in labels){
                            distance = labels[p] - fromTime;
                            if (distance < 0 === !!backward && distance && min > (distance = Math.abs(distance))) {
                                label = p;
                                min = distance;
                            }
                        }
                        return label;
                    }, _callback = function _callback(animation, type, executeLazyFirst) {
                        var v = animation.vars, callback = v[type], params, scope;
                        if (!callback) {
                            return;
                        }
                        params = v[type + "Params"];
                        scope = v.callbackScope || animation;
                        executeLazyFirst && _lazyTweens.length && _lazyRender(); //in case rendering caused any tweens to lazy-init, we should render them because typically when a timeline finishes, users expect things to have rendered fully. Imagine an onUpdate on a timeline that reports/checks tweened values.
                        return params ? callback.apply(scope, params) : callback.call(scope);
                    }, _interrupt = function _interrupt(animation) {
                        _removeFromParent(animation);
                        animation.progress() < 1 && _callback(animation, "onInterrupt");
                        return animation;
                    }, _quickTween, _createPlugin = function _createPlugin(config) {
                        config = !config.name && config["default"] || config; //UMD packaging wraps things oddly, so for example MotionPathHelper becomes {MotionPathHelper:MotionPathHelper, default:MotionPathHelper}.
                        var name = config.name, isFunc = _isFunction(config), Plugin = name && !isFunc && config.init ? function() {
                            this._props = [];
                        } : config, //in case someone passes in an object that's not a plugin, like CustomEase
                        instanceDefaults = {
                            init: _emptyFunc,
                            render: _renderPropTweens,
                            add: _addPropTween,
                            kill: _killPropTweensOf,
                            modifier: _addPluginModifier,
                            rawVars: 0
                        }, statics = {
                            targetTest: 0,
                            get: 0,
                            getSetter: _getSetter,
                            aliases: {},
                            register: 0
                        };
                        _wake();
                        if (config !== Plugin) {
                            if (_plugins[name]) {
                                return;
                            }
                            _setDefaults(Plugin, _setDefaults(_copyExcluding(config, instanceDefaults), statics)); //static methods
                            _merge(Plugin.prototype, _merge(instanceDefaults, _copyExcluding(config, statics))); //instance methods
                            _plugins[Plugin.prop = name] = Plugin;
                            if (config.targetTest) {
                                _harnessPlugins.push(Plugin);
                                _reservedProps[name] = 1;
                            }
                            name = (name === "css" ? "CSS" : name.charAt(0).toUpperCase() + name.substr(1)) + "Plugin"; //for the global name. "motionPath" should become MotionPathPlugin
                        }
                        _addGlobal(name, Plugin);
                        config.register && config.register(gsap, Plugin, PropTween);
                    }, /*
           * --------------------------------------------------------------------------------------
           * COLORS
           * --------------------------------------------------------------------------------------
           */ _255 = 255, _colorLookup = {
                        aqua: [
                            0,
                            _255,
                            _255
                        ],
                        lime: [
                            0,
                            _255,
                            0
                        ],
                        silver: [
                            192,
                            192,
                            192
                        ],
                        black: [
                            0,
                            0,
                            0
                        ],
                        maroon: [
                            128,
                            0,
                            0
                        ],
                        teal: [
                            0,
                            128,
                            128
                        ],
                        blue: [
                            0,
                            0,
                            _255
                        ],
                        navy: [
                            0,
                            0,
                            128
                        ],
                        white: [
                            _255,
                            _255,
                            _255
                        ],
                        olive: [
                            128,
                            128,
                            0
                        ],
                        yellow: [
                            _255,
                            _255,
                            0
                        ],
                        orange: [
                            _255,
                            165,
                            0
                        ],
                        gray: [
                            128,
                            128,
                            128
                        ],
                        purple: [
                            128,
                            0,
                            128
                        ],
                        green: [
                            0,
                            128,
                            0
                        ],
                        red: [
                            _255,
                            0,
                            0
                        ],
                        pink: [
                            _255,
                            192,
                            203
                        ],
                        cyan: [
                            0,
                            _255,
                            _255
                        ],
                        transparent: [
                            _255,
                            _255,
                            _255,
                            0
                        ]
                    }, _hue = function _hue(h, m1, m2) {
                        h = h < 0 ? h + 1 : h > 1 ? h - 1 : h;
                        return (h * 6 < 1 ? m1 + (m2 - m1) * h * 6 : h < .5 ? m2 : h * 3 < 2 ? m1 + (m2 - m1) * (2 / 3 - h) * 6 : m1) * _255 + .5 | 0;
                    }, splitColor = function splitColor(v, toHSL, forceAlpha) {
                        var a = !v ? _colorLookup.black : _isNumber(v) ? [
                            v >> 16,
                            v >> 8 & _255,
                            v & _255
                        ] : 0, r, g, b, h, s, l, max, min, d, wasHSL;
                        if (!a) {
                            if (v.substr(-1) === ",") {
                                v = v.substr(0, v.length - 1);
                            }
                            if (_colorLookup[v]) {
                                a = _colorLookup[v];
                            } else if (v.charAt(0) === "#") {
                                if (v.length < 6) {
                                    r = v.charAt(1);
                                    g = v.charAt(2);
                                    b = v.charAt(3);
                                    v = "#" + r + r + g + g + b + b + (v.length === 5 ? v.charAt(4) + v.charAt(4) : "");
                                }
                                if (v.length === 9) {
                                    a = parseInt(v.substr(1, 6), 16);
                                    return [
                                        a >> 16,
                                        a >> 8 & _255,
                                        a & _255,
                                        parseInt(v.substr(7), 16) / 255
                                    ];
                                }
                                v = parseInt(v.substr(1), 16);
                                a = [
                                    v >> 16,
                                    v >> 8 & _255,
                                    v & _255
                                ];
                            } else if (v.substr(0, 3) === "hsl") {
                                a = wasHSL = v.match(_strictNumExp);
                                if (!toHSL) {
                                    h = +a[0] % 360 / 360;
                                    s = +a[1] / 100;
                                    l = +a[2] / 100;
                                    g = l <= .5 ? l * (s + 1) : l + s - l * s;
                                    r = l * 2 - g;
                                    a.length > 3 && (a[3] *= 1); //cast as number
                                    a[0] = _hue(h + 1 / 3, r, g);
                                    a[1] = _hue(h, r, g);
                                    a[2] = _hue(h - 1 / 3, r, g);
                                } else if (~v.indexOf("=")) {
                                    //if relative values are found, just return the raw strings with the relative prefixes in place.
                                    a = v.match(_numExp);
                                    forceAlpha && a.length < 4 && (a[3] = 1);
                                    return a;
                                }
                            } else {
                                a = v.match(_strictNumExp) || _colorLookup.transparent;
                            }
                            a = a.map(Number);
                        }
                        if (toHSL && !wasHSL) {
                            r = a[0] / _255;
                            g = a[1] / _255;
                            b = a[2] / _255;
                            max = Math.max(r, g, b);
                            min = Math.min(r, g, b);
                            l = (max + min) / 2;
                            if (max === min) {
                                h = s = 0;
                            } else {
                                d = max - min;
                                s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
                                h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
                                h *= 60;
                            }
                            a[0] = ~~(h + .5);
                            a[1] = ~~(s * 100 + .5);
                            a[2] = ~~(l * 100 + .5);
                        }
                        forceAlpha && a.length < 4 && (a[3] = 1);
                        return a;
                    }, _colorOrderData = function _colorOrderData(v) {
                        var values = [], c = [], i = -1;
                        v.split(_colorExp).forEach(function(v) {
                            var a = v.match(_numWithUnitExp) || [];
                            values.push.apply(values, a);
                            c.push(i += a.length + 1);
                        });
                        values.c = c;
                        return values;
                    }, _formatColors = function _formatColors(s, toHSL, orderMatchData) {
                        var result = "", colors = (s + result).match(_colorExp), type = toHSL ? "hsla(" : "rgba(", i = 0, c, shell, d, l;
                        if (!colors) {
                            return s;
                        }
                        colors = colors.map(function(color) {
                            return (color = splitColor(color, toHSL, 1)) && type + (toHSL ? color[0] + "," + color[1] + "%," + color[2] + "%," + color[3] : color.join(",")) + ")";
                        });
                        if (orderMatchData) {
                            d = _colorOrderData(s);
                            c = orderMatchData.c;
                            if (c.join(result) !== d.c.join(result)) {
                                shell = s.replace(_colorExp, "1").split(_numWithUnitExp);
                                l = shell.length - 1;
                                for(; i < l; i++){
                                    result += shell[i] + (~c.indexOf(i) ? colors.shift() || type + "0,0,0,0)" : (d.length ? d : colors.length ? colors : orderMatchData).shift());
                                }
                            }
                        }
                        if (!shell) {
                            shell = s.split(_colorExp);
                            l = shell.length - 1;
                            for(; i < l; i++){
                                result += shell[i] + colors[i];
                            }
                        }
                        return result + shell[l];
                    }, _colorExp = function() {
                        var s = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", //we'll dynamically build this Regular Expression to conserve file size. After building it, it will be able to find rgb(), rgba(), # (hexadecimal), and named color values like red, blue, purple, etc.,
                        p;
                        for(p in _colorLookup){
                            s += "|" + p + "\\b";
                        }
                        return new RegExp(s + ")", "gi");
                    }(), _hslExp = /hsl[a]?\(/, _colorStringFilter = function _colorStringFilter(a) {
                        var combined = a.join(" "), toHSL;
                        _colorExp.lastIndex = 0;
                        if (_colorExp.test(combined)) {
                            toHSL = _hslExp.test(combined);
                            a[1] = _formatColors(a[1], toHSL);
                            a[0] = _formatColors(a[0], toHSL, _colorOrderData(a[1])); // make sure the order of numbers/colors match with the END value.
                            return true;
                        }
                    }, /*
           * --------------------------------------------------------------------------------------
           * TICKER
           * --------------------------------------------------------------------------------------
           */ _tickerActive, _ticker = function() {
                        var _getTime = Date.now, _lagThreshold = 500, _adjustedLag = 33, _startTime = _getTime(), _lastUpdate = _startTime, _gap = 1000 / 240, _nextTime = _gap, _listeners = [], _id, _req, _raf, _self, _delta, _i, _tick = function _tick(v) {
                            var elapsed = _getTime() - _lastUpdate, manual = v === true, overlap, dispatch, time, frame;
                            elapsed > _lagThreshold && (_startTime += elapsed - _adjustedLag);
                            _lastUpdate += elapsed;
                            time = _lastUpdate - _startTime;
                            overlap = time - _nextTime;
                            if (overlap > 0 || manual) {
                                frame = ++_self.frame;
                                _delta = time - _self.time * 1000;
                                _self.time = time = time / 1000;
                                _nextTime += overlap + (overlap >= _gap ? 4 : _gap - overlap);
                                dispatch = 1;
                            }
                            manual || (_id = _req(_tick)); //make sure the request is made before we dispatch the "tick" event so that timing is maintained. Otherwise, if processing the "tick" requires a bunch of time (like 15ms) and we're using a setTimeout() that's based on 16.7ms, it'd technically take 31.7ms between frames otherwise.
                            if (dispatch) {
                                for(_i = 0; _i < _listeners.length; _i++){
                                    // use _i and check _listeners.length instead of a variable because a listener could get removed during the loop, and if that happens to an element less than the current index, it'd throw things off in the loop.
                                    _listeners[_i](time, _delta, frame, v);
                                }
                            }
                        };
                        _self = {
                            time: 0,
                            frame: 0,
                            tick: function tick() {
                                _tick(true);
                            },
                            deltaRatio: function deltaRatio(fps) {
                                return _delta / (1000 / (fps || 60));
                            },
                            wake: function wake() {
                                if (_coreReady) {
                                    if (!_coreInitted && _windowExists()) {
                                        _win = _coreInitted = window;
                                        _doc = _win.document || {};
                                        _globals.gsap = gsap;
                                        (_win.gsapVersions || (_win.gsapVersions = [])).push(gsap.version);
                                        _install(_installScope || _win.GreenSockGlobals || !_win.gsap && _win || {});
                                        _raf = _win.requestAnimationFrame;
                                    }
                                    _id && _self.sleep();
                                    _req = _raf || function(f) {
                                        return setTimeout(f, _nextTime - _self.time * 1000 + 1 | 0);
                                    };
                                    _tickerActive = 1;
                                    _tick(2);
                                }
                            },
                            sleep: function sleep() {
                                (_raf ? _win.cancelAnimationFrame : clearTimeout)(_id);
                                _tickerActive = 0;
                                _req = _emptyFunc;
                            },
                            lagSmoothing: function lagSmoothing(threshold, adjustedLag) {
                                _lagThreshold = threshold || 1 / _tinyNum; //zero should be interpreted as basically unlimited
                                _adjustedLag = Math.min(adjustedLag, _lagThreshold, 0);
                            },
                            fps: function fps(_fps) {
                                _gap = 1000 / (_fps || 240);
                                _nextTime = _self.time * 1000 + _gap;
                            },
                            add: function add(callback) {
                                _listeners.indexOf(callback) < 0 && _listeners.push(callback);
                                _wake();
                            },
                            remove: function remove(callback) {
                                var i;
                                ~(i = _listeners.indexOf(callback)) && _listeners.splice(i, 1) && _i >= i && _i--;
                            },
                            _listeners: _listeners
                        };
                        return _self;
                    }(), _wake = function _wake() {
                        return !_tickerActive && _ticker.wake();
                    }, //also ensures the core classes are initialized.
                    /*
          * -------------------------------------------------
          * EASING
          * -------------------------------------------------
          */ _easeMap = {}, _customEaseExp = /^[\d.\-M][\d.\-,\s]/, _quotesExp = /["']/g, _parseObjectInString = function _parseObjectInString(value) {
                        //takes a string like "{wiggles:10, type:anticipate})" and turns it into a real object. Notice it ends in ")" and includes the {} wrappers. This is because we only use this function for parsing ease configs and prioritized optimization rather than reusability.
                        var obj = {}, split = value.substr(1, value.length - 3).split(":"), key = split[0], i = 1, l = split.length, index, val, parsedVal;
                        for(; i < l; i++){
                            val = split[i];
                            index = i !== l - 1 ? val.lastIndexOf(",") : val.length;
                            parsedVal = val.substr(0, index);
                            obj[key] = isNaN(parsedVal) ? parsedVal.replace(_quotesExp, "").trim() : +parsedVal;
                            key = val.substr(index + 1).trim();
                        }
                        return obj;
                    }, _valueInParentheses = function _valueInParentheses(value) {
                        var open = value.indexOf("(") + 1, close = value.indexOf(")"), nested = value.indexOf("(", open);
                        return value.substring(open, ~nested && nested < close ? value.indexOf(")", close + 1) : close);
                    }, _configEaseFromString = function _configEaseFromString(name) {
                        //name can be a string like "elastic.out(1,0.5)", and pass in _easeMap as obj and it'll parse it out and call the actual function like _easeMap.Elastic.easeOut.config(1,0.5). It will also parse custom ease strings as long as CustomEase is loaded and registered (internally as _easeMap._CE).
                        var split = (name + "").split("("), ease = _easeMap[split[0]];
                        return ease && split.length > 1 && ease.config ? ease.config.apply(null, ~name.indexOf("{") ? [
                            _parseObjectInString(split[1])
                        ] : _valueInParentheses(name).split(",").map(_numericIfPossible)) : _easeMap._CE && _customEaseExp.test(name) ? _easeMap._CE("", name) : ease;
                    }, _invertEase = function _invertEase(ease) {
                        return function(p) {
                            return 1 - ease(1 - p);
                        };
                    }, // allow yoyoEase to be set in children and have those affected when the parent/ancestor timeline yoyos.
                    _propagateYoyoEase = function _propagateYoyoEase(timeline, isYoyo) {
                        var child = timeline._first, ease;
                        while(child){
                            if (child instanceof Timeline) {
                                _propagateYoyoEase(child, isYoyo);
                            } else if (child.vars.yoyoEase && (!child._yoyo || !child._repeat) && child._yoyo !== isYoyo) {
                                if (child.timeline) {
                                    _propagateYoyoEase(child.timeline, isYoyo);
                                } else {
                                    ease = child._ease;
                                    child._ease = child._yEase;
                                    child._yEase = ease;
                                    child._yoyo = isYoyo;
                                }
                            }
                            child = child._next;
                        }
                    }, _parseEase = function _parseEase(ease, defaultEase) {
                        return !ease ? defaultEase : (_isFunction(ease) ? ease : _easeMap[ease] || _configEaseFromString(ease)) || defaultEase;
                    }, _insertEase = function _insertEase(names, easeIn, easeOut, easeInOut) {
                        if (easeOut === void 0) {
                            easeOut = function easeOut(p) {
                                return 1 - easeIn(1 - p);
                            };
                        }
                        if (easeInOut === void 0) {
                            easeInOut = function easeInOut(p) {
                                return p < .5 ? easeIn(p * 2) / 2 : 1 - easeIn((1 - p) * 2) / 2;
                            };
                        }
                        var ease = {
                            easeIn: easeIn,
                            easeOut: easeOut,
                            easeInOut: easeInOut
                        }, lowercaseName;
                        _forEachName(names, function(name) {
                            _easeMap[name] = _globals[name] = ease;
                            _easeMap[lowercaseName = name.toLowerCase()] = easeOut;
                            for(var p in ease){
                                _easeMap[lowercaseName + (p === "easeIn" ? ".in" : p === "easeOut" ? ".out" : ".inOut")] = _easeMap[name + "." + p] = ease[p];
                            }
                        });
                        return ease;
                    }, _easeInOutFromOut = function _easeInOutFromOut(easeOut) {
                        return function(p) {
                            return p < .5 ? (1 - easeOut(1 - p * 2)) / 2 : .5 + easeOut((p - .5) * 2) / 2;
                        };
                    }, _configElastic = function _configElastic(type, amplitude, period) {
                        var p1 = amplitude >= 1 ? amplitude : 1, //note: if amplitude is < 1, we simply adjust the period for a more natural feel. Otherwise the math doesn't work right and the curve starts at 1.
                        p2 = (period || (type ? .3 : .45)) / (amplitude < 1 ? amplitude : 1), p3 = p2 / _2PI * (Math.asin(1 / p1) || 0), easeOut = function easeOut(p) {
                            return p === 1 ? 1 : p1 * Math.pow(2, -10 * p) * _sin((p - p3) * p2) + 1;
                        }, ease = type === "out" ? easeOut : type === "in" ? function(p) {
                            return 1 - easeOut(1 - p);
                        } : _easeInOutFromOut(easeOut);
                        p2 = _2PI / p2; //precalculate to optimize
                        ease.config = function(amplitude, period) {
                            return _configElastic(type, amplitude, period);
                        };
                        return ease;
                    }, _configBack = function _configBack(type, overshoot) {
                        if (overshoot === void 0) {
                            overshoot = 1.70158;
                        }
                        var easeOut = function easeOut(p) {
                            return p ? --p * p * ((overshoot + 1) * p + overshoot) + 1 : 0;
                        }, ease = type === "out" ? easeOut : type === "in" ? function(p) {
                            return 1 - easeOut(1 - p);
                        } : _easeInOutFromOut(easeOut);
                        ease.config = function(overshoot) {
                            return _configBack(type, overshoot);
                        };
                        return ease;
                    }; // a cheaper (kb and cpu) but more mild way to get a parameterized weighted ease by feeding in a value between -1 (easeIn) and 1 (easeOut) where 0 is linear.
                    // _weightedEase = ratio => {
                    // 	let y = 0.5 + ratio / 2;
                    // 	return p => (2 * (1 - p) * p * y + p * p);
                    // },
                    // a stronger (but more expensive kb/cpu) parameterized weighted ease that lets you feed in a value between -1 (easeIn) and 1 (easeOut) where 0 is linear.
                    // _weightedEaseStrong = ratio => {
                    // 	ratio = .5 + ratio / 2;
                    // 	let o = 1 / 3 * (ratio < .5 ? ratio : 1 - ratio),
                    // 		b = ratio - o,
                    // 		c = ratio + o;
                    // 	return p => p === 1 ? p : 3 * b * (1 - p) * (1 - p) * p + 3 * c * (1 - p) * p * p + p * p * p;
                    // };
                    exports1._ticker = _ticker;
                    exports1._colorStringFilter = _colorStringFilter;
                    exports1.splitColor = splitColor;
                    exports1.interpolate = interpolate;
                    exports1.mapRange = mapRange;
                    exports1._replaceRandom = _replaceRandom;
                    exports1.wrapYoyo = wrapYoyo;
                    exports1.wrap = wrap;
                    exports1.normalize = normalize;
                    exports1.unitize = unitize;
                    exports1.pipe = pipe;
                    exports1.random = random;
                    exports1.snap = snap;
                    exports1._roundModifier = _roundModifier;
                    exports1.distribute = distribute;
                    exports1.shuffle = shuffle;
                    exports1.toArray = toArray;
                    exports1.clamp = clamp;
                    exports1.getUnit = getUnit;
                    exports1._removeLinkedListItem = _removeLinkedListItem;
                    exports1._setDefaults = _setDefaults;
                    exports1._round = _round;
                    exports1._forEachName = _forEachName;
                    exports1._getProperty = _getProperty;
                    exports1._getCache = _getCache;
                    exports1._plugins = _plugins;
                    exports1._missingPlugin = _missingPlugin;
                    exports1._relExp = _relExp;
                    exports1._numWithUnitExp = _numWithUnitExp;
                    exports1._numExp = _numExp;
                    exports1._isUndefined = _isUndefined;
                    exports1._isString = _isString;
                    exports1._config = _config;
                    _forEachName("Linear,Quad,Cubic,Quart,Quint,Strong", function(name, i) {
                        var power = i < 5 ? i + 1 : i;
                        _insertEase(name + ",Power" + (power - 1), i ? function(p) {
                            return Math.pow(p, power);
                        } : function(p) {
                            return p;
                        }, function(p) {
                            return 1 - Math.pow(1 - p, power);
                        }, function(p) {
                            return p < .5 ? Math.pow(p * 2, power) / 2 : 1 - Math.pow((1 - p) * 2, power) / 2;
                        });
                    });
                    _easeMap.Linear.easeNone = _easeMap.none = _easeMap.Linear.easeIn;
                    _insertEase("Elastic", _configElastic("in"), _configElastic("out"), _configElastic());
                    (function(n, c) {
                        var n1 = 1 / c, n2 = 2 * n1, n3 = 2.5 * n1, easeOut = function easeOut(p) {
                            return p < n1 ? n * p * p : p < n2 ? n * Math.pow(p - 1.5 / c, 2) + .75 : p < n3 ? n * (p -= 2.25 / c) * p + .9375 : n * Math.pow(p - 2.625 / c, 2) + .984375;
                        };
                        _insertEase("Bounce", function(p) {
                            return 1 - easeOut(1 - p);
                        }, easeOut);
                    })(7.5625, 2.75);
                    _insertEase("Expo", function(p) {
                        return p ? Math.pow(2, 10 * (p - 1)) : 0;
                    });
                    _insertEase("Circ", function(p) {
                        return -(_sqrt(1 - p * p) - 1);
                    });
                    _insertEase("Sine", function(p) {
                        return p === 1 ? 1 : -_cos(p * _HALF_PI) + 1;
                    });
                    _insertEase("Back", _configBack("in"), _configBack("out"), _configBack());
                    _easeMap.SteppedEase = _easeMap.steps = _globals.SteppedEase = {
                        config: function config(steps, immediateStart) {
                            if (steps === void 0) {
                                steps = 1;
                            }
                            var p1 = 1 / steps, p2 = steps + (immediateStart ? 0 : 1), p3 = immediateStart ? 1 : 0, max = 1 - _tinyNum;
                            return function(p) {
                                return ((p2 * _clamp(0, max, p) | 0) + p3) * p1;
                            };
                        }
                    };
                    _defaults.ease = _easeMap["quad.out"];
                    _forEachName("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(name) {
                        return _callbackNames += name + "," + name + "Params,";
                    });
                    /*
         * --------------------------------------------------------------------------------------
         * CACHE
         * --------------------------------------------------------------------------------------
         */ var GSCache = function GSCache(target, harness) {
                        this.id = _gsID++;
                        target._gsap = this;
                        this.target = target;
                        this.harness = harness;
                        this.get = harness ? harness.get : _getProperty;
                        this.set = harness ? harness.getSetter : _getSetter;
                    };
                    /*
         * --------------------------------------------------------------------------------------
         * ANIMATION
         * --------------------------------------------------------------------------------------
         */ exports1.GSCache = GSCache;
                    var Animation = /*#__PURE__*/ function() {
                        function Animation(vars, time) {
                            var parent = vars.parent || _globalTimeline;
                            this.vars = vars;
                            this._delay = +vars.delay || 0;
                            if (this._repeat = vars.repeat === Infinity ? -2 : vars.repeat || 0) {
                                // TODO: repeat: Infinity on a timeline's children must flag that timeline internally and affect its totalDuration, otherwise it'll stop in the negative direction when reaching the start.
                                this._rDelay = vars.repeatDelay || 0;
                                this._yoyo = !!vars.yoyo || !!vars.yoyoEase;
                            }
                            this._ts = 1;
                            _setDuration(this, +vars.duration, 1, 1);
                            this.data = vars.data;
                            _tickerActive || _ticker.wake();
                            parent && _addToTimeline(parent, this, time || time === 0 ? time : parent._time, 1);
                            vars.reversed && this.reverse();
                            vars.paused && this.paused(true);
                        }
                        var _proto = Animation.prototype;
                        _proto.delay = function delay(value) {
                            if (value || value === 0) {
                                this.parent && this.parent.smoothChildTiming && this.startTime(this._start + value - this._delay);
                                this._delay = value;
                                return this;
                            }
                            return this._delay;
                        };
                        _proto.duration = function duration(value) {
                            return arguments.length ? this.totalDuration(this._repeat > 0 ? value + (value + this._rDelay) * this._repeat : value) : this.totalDuration() && this._dur;
                        };
                        _proto.totalDuration = function totalDuration(value) {
                            if (!arguments.length) {
                                return this._tDur;
                            }
                            this._dirty = 0;
                            return _setDuration(this, this._repeat < 0 ? value : (value - this._repeat * this._rDelay) / (this._repeat + 1));
                        };
                        _proto.totalTime = function totalTime(_totalTime, suppressEvents) {
                            _wake();
                            if (!arguments.length) {
                                return this._tTime;
                            }
                            var parent = this._dp;
                            if (parent && parent.smoothChildTiming && this._ts) {
                                _alignPlayhead(this, _totalTime);
                                !parent._dp || parent.parent || _postAddChecks(parent, this); // edge case: if this is a child of a timeline that already completed, for example, we must re-activate the parent.
                                //in case any of the ancestor timelines had completed but should now be enabled, we should reset their totalTime() which will also ensure that they're lined up properly and enabled. Skip for animations that are on the root (wasteful). Example: a TimelineLite.exportRoot() is performed when there's a paused tween on the root, the export will not complete until that tween is unpaused, but imagine a child gets restarted later, after all [unpaused] tweens have completed. The start of that child would get pushed out, but one of the ancestors may have completed.
                                while(parent.parent){
                                    if (parent.parent._time !== parent._start + (parent._ts >= 0 ? parent._tTime / parent._ts : (parent.totalDuration() - parent._tTime) / -parent._ts)) {
                                        parent.totalTime(parent._tTime, true);
                                    }
                                    parent = parent.parent;
                                }
                                if (!this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && _totalTime < this._tDur || this._ts < 0 && _totalTime > 0 || !this._tDur && !_totalTime)) {
                                    //if the animation doesn't have a parent, put it back into its last parent (recorded as _dp for exactly cases like this). Limit to parents with autoRemoveChildren (like globalTimeline) so that if the user manually removes an animation from a timeline and then alters its playhead, it doesn't get added back in.
                                    _addToTimeline(this._dp, this, this._start - this._delay);
                                }
                            }
                            if (this._tTime !== _totalTime || !this._dur && !suppressEvents || this._initted && Math.abs(this._zTime) === _tinyNum || !_totalTime && !this._initted && (this.add || this._ptLookup)) {
                                // check for _ptLookup on a Tween instance to ensure it has actually finished being instantiated, otherwise if this.reverse() gets called in the Animation constructor, it could trigger a render() here even though the _targets weren't populated, thus when _init() is called there won't be any PropTweens (it'll act like the tween is non-functional)
                                this._ts || (this._pTime = _totalTime); // otherwise, if an animation is paused, then the playhead is moved back to zero, then resumed, it'd revert back to the original time at the pause
                                //if (!this._lock) { // avoid endless recursion (not sure we need this yet or if it's worth the performance hit)
                                //   this._lock = 1;
                                _lazySafeRender(this, _totalTime, suppressEvents); //   this._lock = 0;
                            //}
                            }
                            return this;
                        };
                        _proto.time = function time(value, suppressEvents) {
                            return arguments.length ? this.totalTime(Math.min(this.totalDuration(), value + _elapsedCycleDuration(this)) % this._dur || (value ? this._dur : 0), suppressEvents) : this._time; // note: if the modulus results in 0, the playhead could be exactly at the end or the beginning, and we always defer to the END with a non-zero value, otherwise if you set the time() to the very end (duration()), it would render at the START!
                        };
                        _proto.totalProgress = function totalProgress(value, suppressEvents) {
                            return arguments.length ? this.totalTime(this.totalDuration() * value, suppressEvents) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio;
                        };
                        _proto.progress = function progress(value, suppressEvents) {
                            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - value : value) + _elapsedCycleDuration(this), suppressEvents) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio;
                        };
                        _proto.iteration = function iteration(value, suppressEvents) {
                            var cycleDuration = this.duration() + this._rDelay;
                            return arguments.length ? this.totalTime(this._time + (value - 1) * cycleDuration, suppressEvents) : this._repeat ? _animationCycle(this._tTime, cycleDuration) + 1 : 1;
                        } // potential future addition:
                        ;
                        _proto.timeScale = function timeScale(value) {
                            if (!arguments.length) {
                                return this._rts === -_tinyNum ? 0 : this._rts; // recorded timeScale. Special case: if someone calls reverse() on an animation with timeScale of 0, we assign it -_tinyNum to remember it's reversed.
                            }
                            if (this._rts === value) {
                                return this;
                            }
                            var tTime = this.parent && this._ts ? _parentToChildTotalTime(this.parent._time, this) : this._tTime; // make sure to do the parentToChildTotalTime() BEFORE setting the new _ts because the old one must be used in that calculation.
                            // prioritize rendering where the parent's playhead lines up instead of this._tTime because there could be a tween that's animating another tween's timeScale in the same rendering loop (same parent), thus if the timeScale tween renders first, it would alter _start BEFORE _tTime was set on that tick (in the rendering loop), effectively freezing it until the timeScale tween finishes.
                            this._rts = +value || 0;
                            this._ts = this._ps || value === -_tinyNum ? 0 : this._rts; // _ts is the functional timeScale which would be 0 if the animation is paused.
                            return _recacheAncestors(this.totalTime(_clamp(-this._delay, this._tDur, tTime), true));
                        };
                        _proto.paused = function paused(value) {
                            if (!arguments.length) {
                                return this._ps;
                            }
                            if (this._ps !== value) {
                                this._ps = value;
                                if (value) {
                                    this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()); // if the pause occurs during the delay phase, make sure that's factored in when resuming.
                                    this._ts = this._act = 0; // _ts is the functional timeScale, so a paused tween would effectively have a timeScale of 0. We record the "real" timeScale as _rts (recorded time scale)
                                } else {
                                    _wake();
                                    this._ts = this._rts; //only defer to _pTime (pauseTime) if tTime is zero. Remember, someone could pause() an animation, then scrub the playhead and resume(). If the parent doesn't have smoothChildTiming, we render at the rawTime() because the startTime won't get updated.
                                    this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && (this._tTime -= _tinyNum) && Math.abs(this._zTime) !== _tinyNum); // edge case: animation.progress(1).pause().play() wouldn't render again because the playhead is already at the end, but the call to totalTime() below will add it back to its parent...and not remove it again (since removing only happens upon rendering at a new time). Offsetting the _tTime slightly is done simply to cause the final render in totalTime() that'll pop it off its timeline (if autoRemoveChildren is true, of course). Check to make sure _zTime isn't -_tinyNum to avoid an edge case where the playhead is pushed to the end but INSIDE a tween/callback, the timeline itself is paused thus halting rendering and leaving a few unrendered. When resuming, it wouldn't render those otherwise.
                                }
                            }
                            return this;
                        };
                        _proto.startTime = function startTime(value) {
                            if (arguments.length) {
                                this._start = value;
                                var parent = this.parent || this._dp;
                                parent && (parent._sort || !this.parent) && _addToTimeline(parent, this, value - this._delay);
                                return this;
                            }
                            return this._start;
                        };
                        _proto.endTime = function endTime(includeRepeats) {
                            return this._start + (_isNotFalse(includeRepeats) ? this.totalDuration() : this.duration()) / Math.abs(this._ts);
                        };
                        _proto.rawTime = function rawTime(wrapRepeats) {
                            var parent = this.parent || this._dp; // _dp = detatched parent
                            return !parent ? this._tTime : wrapRepeats && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : !this._ts ? this._tTime : _parentToChildTotalTime(parent.rawTime(wrapRepeats), this);
                        };
                        _proto.globalTime = function globalTime(rawTime) {
                            var animation = this, time = arguments.length ? rawTime : animation.rawTime();
                            while(animation){
                                time = animation._start + time / (animation._ts || 1);
                                animation = animation._dp;
                            }
                            return time;
                        };
                        _proto.repeat = function repeat(value) {
                            if (arguments.length) {
                                this._repeat = value === Infinity ? -2 : value;
                                return _onUpdateTotalDuration(this);
                            }
                            return this._repeat === -2 ? Infinity : this._repeat;
                        };
                        _proto.repeatDelay = function repeatDelay(value) {
                            if (arguments.length) {
                                this._rDelay = value;
                                return _onUpdateTotalDuration(this);
                            }
                            return this._rDelay;
                        };
                        _proto.yoyo = function yoyo(value) {
                            if (arguments.length) {
                                this._yoyo = value;
                                return this;
                            }
                            return this._yoyo;
                        };
                        _proto.seek = function seek(position, suppressEvents) {
                            return this.totalTime(_parsePosition(this, position), _isNotFalse(suppressEvents));
                        };
                        _proto.restart = function restart(includeDelay, suppressEvents) {
                            return this.play().totalTime(includeDelay ? -this._delay : 0, _isNotFalse(suppressEvents));
                        };
                        _proto.play = function play(from, suppressEvents) {
                            from != null && this.seek(from, suppressEvents);
                            return this.reversed(false).paused(false);
                        };
                        _proto.reverse = function reverse(from, suppressEvents) {
                            from != null && this.seek(from || this.totalDuration(), suppressEvents);
                            return this.reversed(true).paused(false);
                        };
                        _proto.pause = function pause(atTime, suppressEvents) {
                            atTime != null && this.seek(atTime, suppressEvents);
                            return this.paused(true);
                        };
                        _proto.resume = function resume() {
                            return this.paused(false);
                        };
                        _proto.reversed = function reversed(value) {
                            if (arguments.length) {
                                !!value !== this.reversed() && this.timeScale(-this._rts || (value ? -_tinyNum : 0)); // in case timeScale is zero, reversing would have no effect so we use _tinyNum.
                                return this;
                            }
                            return this._rts < 0;
                        };
                        _proto.invalidate = function invalidate() {
                            this._initted = this._act = 0;
                            this._zTime = -_tinyNum;
                            return this;
                        };
                        _proto.isActive = function isActive() {
                            var parent = this.parent || this._dp, start = this._start, rawTime;
                            return !!(!parent || this._ts && this._initted && parent.isActive() && (rawTime = parent.rawTime(true)) >= start && rawTime < this.endTime(true) - _tinyNum);
                        };
                        _proto.eventCallback = function eventCallback(type, callback, params) {
                            var vars = this.vars;
                            if (arguments.length > 1) {
                                if (!callback) {
                                    delete vars[type];
                                } else {
                                    vars[type] = callback;
                                    params && (vars[type + "Params"] = params);
                                    type === "onUpdate" && (this._onUpdate = callback);
                                }
                                return this;
                            }
                            return vars[type];
                        };
                        _proto.then = function then(onFulfilled) {
                            var self = this;
                            return new Promise(function(resolve) {
                                var f = _isFunction(onFulfilled) ? onFulfilled : _passThrough, _resolve = function _resolve() {
                                    var _then = self.then;
                                    self.then = null; // temporarily null the then() method to avoid an infinite loop (see https://github.com/greensock/GSAP/issues/322)
                                    _isFunction(f) && (f = f(self)) && (f.then || f === self) && (self.then = _then);
                                    resolve(f);
                                    self.then = _then;
                                };
                                if (self._initted && self.totalProgress() === 1 && self._ts >= 0 || !self._tTime && self._ts < 0) {
                                    _resolve();
                                } else {
                                    self._prom = _resolve;
                                }
                            });
                        };
                        _proto.kill = function kill() {
                            _interrupt(this);
                        };
                        return Animation;
                    }();
                    exports1.Animation = Animation;
                    _setDefaults(Animation.prototype, {
                        _time: 0,
                        _start: 0,
                        _end: 0,
                        _tTime: 0,
                        _tDur: 0,
                        _dirty: 0,
                        _repeat: 0,
                        _yoyo: false,
                        parent: null,
                        _initted: false,
                        _rDelay: 0,
                        _ts: 1,
                        _dp: 0,
                        ratio: 0,
                        _zTime: -_tinyNum,
                        _prom: 0,
                        _ps: false,
                        _rts: 1
                    });
                    /*
         * -------------------------------------------------
         * TIMELINE
         * -------------------------------------------------
         */ var Timeline = /*#__PURE__*/ function(_Animation) {
                        _inheritsLoose(Timeline, _Animation);
                        function Timeline(vars, time) {
                            var _this;
                            if (vars === void 0) {
                                vars = {};
                            }
                            _this = _Animation.call(this, vars, time) || this;
                            _this.labels = {};
                            _this.smoothChildTiming = !!vars.smoothChildTiming;
                            _this.autoRemoveChildren = !!vars.autoRemoveChildren;
                            _this._sort = _isNotFalse(vars.sortChildren);
                            _this.parent && _postAddChecks(_this.parent, _assertThisInitialized(_this));
                            vars.scrollTrigger && _scrollTrigger(_assertThisInitialized(_this), vars.scrollTrigger);
                            return _this;
                        }
                        var _proto2 = Timeline.prototype;
                        _proto2.to = function to(targets, vars, position) {
                            new Tween(targets, _parseVars(arguments, 0, this), _parsePosition(this, _isNumber(vars) ? arguments[3] : position));
                            return this;
                        };
                        _proto2.from = function from(targets, vars, position) {
                            new Tween(targets, _parseVars(arguments, 1, this), _parsePosition(this, _isNumber(vars) ? arguments[3] : position));
                            return this;
                        };
                        _proto2.fromTo = function fromTo(targets, fromVars, toVars, position) {
                            new Tween(targets, _parseVars(arguments, 2, this), _parsePosition(this, _isNumber(fromVars) ? arguments[4] : position));
                            return this;
                        };
                        _proto2.set = function set(targets, vars, position) {
                            vars.duration = 0;
                            vars.parent = this;
                            _inheritDefaults(vars).repeatDelay || (vars.repeat = 0);
                            vars.immediateRender = !!vars.immediateRender;
                            new Tween(targets, vars, _parsePosition(this, position), 1);
                            return this;
                        };
                        _proto2.call = function call(callback, params, position) {
                            return _addToTimeline(this, Tween.delayedCall(0, callback, params), _parsePosition(this, position));
                        } //ONLY for backward compatibility! Maybe delete?
                        ;
                        _proto2.staggerTo = function staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
                            vars.duration = duration;
                            vars.stagger = vars.stagger || stagger;
                            vars.onComplete = onCompleteAll;
                            vars.onCompleteParams = onCompleteAllParams;
                            vars.parent = this;
                            new Tween(targets, vars, _parsePosition(this, position));
                            return this;
                        };
                        _proto2.staggerFrom = function staggerFrom(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
                            vars.runBackwards = 1;
                            _inheritDefaults(vars).immediateRender = _isNotFalse(vars.immediateRender);
                            return this.staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams);
                        };
                        _proto2.staggerFromTo = function staggerFromTo(targets, duration, fromVars, toVars, stagger, position, onCompleteAll, onCompleteAllParams) {
                            toVars.startAt = fromVars;
                            _inheritDefaults(toVars).immediateRender = _isNotFalse(toVars.immediateRender);
                            return this.staggerTo(targets, duration, toVars, stagger, position, onCompleteAll, onCompleteAllParams);
                        };
                        _proto2.render = function render(totalTime, suppressEvents, force) {
                            var prevTime = this._time, tDur = this._dirty ? this.totalDuration() : this._tDur, dur = this._dur, tTime = this !== _globalTimeline && totalTime > tDur - _tinyNum && totalTime >= 0 ? tDur : totalTime < _tinyNum ? 0 : totalTime, crossingStart = this._zTime < 0 !== totalTime < 0 && (this._initted || !dur), time, child, next, iteration, cycleDuration, prevPaused, pauseTween, timeScale, prevStart, prevIteration, yoyo, isYoyo;
                            if (tTime !== this._tTime || force || crossingStart) {
                                if (prevTime !== this._time && dur) {
                                    //if totalDuration() finds a child with a negative startTime and smoothChildTiming is true, things get shifted around internally so we need to adjust the time accordingly. For example, if a tween starts at -30 we must shift EVERYTHING forward 30 seconds and move this timeline's startTime backward by 30 seconds so that things align with the playhead (no jump).
                                    tTime += this._time - prevTime;
                                    totalTime += this._time - prevTime;
                                }
                                time = tTime;
                                prevStart = this._start;
                                timeScale = this._ts;
                                prevPaused = !timeScale;
                                if (crossingStart) {
                                    dur || (prevTime = this._zTime); //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration timeline, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect.
                                    (totalTime || !suppressEvents) && (this._zTime = totalTime);
                                }
                                if (this._repeat) {
                                    //adjust the time for repeats and yoyos
                                    yoyo = this._yoyo;
                                    cycleDuration = dur + this._rDelay;
                                    if (this._repeat < -1 && totalTime < 0) {
                                        return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
                                    }
                                    time = _round(tTime % cycleDuration); //round to avoid floating point errors. (4 % 0.8 should be 0 but some browsers report it as 0.79999999!)
                                    if (tTime === tDur) {
                                        // the tDur === tTime is for edge cases where there's a lengthy decimal on the duration and it may reach the very end but the time is rendered as not-quite-there (remember, tDur is rounded to 4 decimals whereas dur isn't)
                                        iteration = this._repeat;
                                        time = dur;
                                    } else {
                                        iteration = ~~(tTime / cycleDuration);
                                        if (iteration && iteration === tTime / cycleDuration) {
                                            time = dur;
                                            iteration--;
                                        }
                                        time > dur && (time = dur);
                                    }
                                    prevIteration = _animationCycle(this._tTime, cycleDuration);
                                    !prevTime && this._tTime && prevIteration !== iteration && (prevIteration = iteration); // edge case - if someone does addPause() at the very beginning of a repeating timeline, that pause is technically at the same spot as the end which causes this._time to get set to 0 when the totalTime would normally place the playhead at the end. See https://greensock.com/forums/topic/23823-closing-nav-animation-not-working-on-ie-and-iphone-6-maybe-other-older-browser/?tab=comments#comment-113005
                                    if (yoyo && iteration & 1) {
                                        time = dur - time;
                                        isYoyo = 1;
                                    }
                                    /*
                  make sure children at the end/beginning of the timeline are rendered properly. If, for example,
                  a 3-second long timeline rendered at 2.9 seconds previously, and now renders at 3.2 seconds (which
                  would get translated to 2.8 seconds if the timeline yoyos or 0.2 seconds if it just repeats), there
                  could be a callback or a short tween that's at 2.95 or 3 seconds in which wouldn't render. So
                  we need to push the timeline to the end (and/or beginning depending on its yoyo value). Also we must
                  ensure that zero-duration tweens at the very beginning or end of the Timeline work.
                  */ if (iteration !== prevIteration && !this._lock) {
                                        var rewinding = yoyo && prevIteration & 1, doesWrap = rewinding === (yoyo && iteration & 1);
                                        iteration < prevIteration && (rewinding = !rewinding);
                                        prevTime = rewinding ? 0 : dur;
                                        this._lock = 1;
                                        this.render(prevTime || (isYoyo ? 0 : _round(iteration * cycleDuration)), suppressEvents, !dur)._lock = 0;
                                        !suppressEvents && this.parent && _callback(this, "onRepeat");
                                        this.vars.repeatRefresh && !isYoyo && (this.invalidate()._lock = 1);
                                        if (prevTime !== this._time || prevPaused !== !this._ts) {
                                            return this;
                                        }
                                        dur = this._dur; // in case the duration changed in the onRepeat
                                        tDur = this._tDur;
                                        if (doesWrap) {
                                            this._lock = 2;
                                            prevTime = rewinding ? dur : -0.0001;
                                            this.render(prevTime, true);
                                            this.vars.repeatRefresh && !isYoyo && this.invalidate();
                                        }
                                        this._lock = 0;
                                        if (!this._ts && !prevPaused) {
                                            return this;
                                        } //in order for yoyoEase to work properly when there's a stagger, we must swap out the ease in each sub-tween.
                                        _propagateYoyoEase(this, isYoyo);
                                    }
                                }
                                if (this._hasPause && !this._forcing && this._lock < 2) {
                                    pauseTween = _findNextPauseTween(this, _round(prevTime), _round(time));
                                    if (pauseTween) {
                                        tTime -= time - (time = pauseTween._start);
                                    }
                                }
                                this._tTime = tTime;
                                this._time = time;
                                this._act = !timeScale; //as long as it's not paused, force it to be active so that if the user renders independent of the parent timeline, it'll be forced to re-render on the next tick.
                                if (!this._initted) {
                                    this._onUpdate = this.vars.onUpdate;
                                    this._initted = 1;
                                    this._zTime = totalTime;
                                    prevTime = 0; // upon init, the playhead should always go forward; someone could invalidate() a completed timeline and then if they restart(), that would make child tweens render in reverse order which could lock in the wrong starting values if they build on each other, like tl.to(obj, {x: 100}).to(obj, {x: 0}).
                                }
                                !prevTime && (time || !dur && totalTime >= 0) && !suppressEvents && _callback(this, "onStart");
                                if (time >= prevTime && totalTime >= 0) {
                                    child = this._first;
                                    while(child){
                                        next = child._next;
                                        if ((child._act || time >= child._start) && child._ts && pauseTween !== child) {
                                            if (child.parent !== this) {
                                                // an extreme edge case - the child's render could do something like kill() the "next" one in the linked list, or reparent it. In that case we must re-initiate the whole render to be safe.
                                                return this.render(totalTime, suppressEvents, force);
                                            }
                                            child.render(child._ts > 0 ? (time - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (time - child._start) * child._ts, suppressEvents, force);
                                            if (time !== this._time || !this._ts && !prevPaused) {
                                                //in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
                                                pauseTween = 0;
                                                next && (tTime += this._zTime = -_tinyNum); // it didn't finish rendering, so flag zTime as negative so that so that the next time render() is called it'll be forced (to render any remaining children)
                                                break;
                                            }
                                        }
                                        child = next;
                                    }
                                } else {
                                    child = this._last;
                                    var adjustedTime = totalTime < 0 ? totalTime : time; //when the playhead goes backward beyond the start of this timeline, we must pass that information down to the child animations so that zero-duration tweens know whether to render their starting or ending values.
                                    while(child){
                                        next = child._prev;
                                        if ((child._act || adjustedTime <= child._end) && child._ts && pauseTween !== child) {
                                            if (child.parent !== this) {
                                                // an extreme edge case - the child's render could do something like kill() the "next" one in the linked list, or reparent it. In that case we must re-initiate the whole render to be safe.
                                                return this.render(totalTime, suppressEvents, force);
                                            }
                                            child.render(child._ts > 0 ? (adjustedTime - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (adjustedTime - child._start) * child._ts, suppressEvents, force);
                                            if (time !== this._time || !this._ts && !prevPaused) {
                                                //in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
                                                pauseTween = 0;
                                                next && (tTime += this._zTime = adjustedTime ? -_tinyNum : _tinyNum); // it didn't finish rendering, so adjust zTime so that so that the next time render() is called it'll be forced (to render any remaining children)
                                                break;
                                            }
                                        }
                                        child = next;
                                    }
                                }
                                if (pauseTween && !suppressEvents) {
                                    this.pause();
                                    pauseTween.render(time >= prevTime ? 0 : -_tinyNum)._zTime = time >= prevTime ? 1 : -1;
                                    if (this._ts) {
                                        //the callback resumed playback! So since we may have held back the playhead due to where the pause is positioned, go ahead and jump to where it's SUPPOSED to be (if no pause happened).
                                        this._start = prevStart; //if the pause was at an earlier time and the user resumed in the callback, it could reposition the timeline (changing its startTime), throwing things off slightly, so we make sure the _start doesn't shift.
                                        _setEnd(this);
                                        return this.render(totalTime, suppressEvents, force);
                                    }
                                }
                                this._onUpdate && !suppressEvents && _callback(this, "onUpdate", true);
                                if (tTime === tDur && tDur >= this.totalDuration() || !tTime && prevTime) {
                                    if (prevStart === this._start || Math.abs(timeScale) !== Math.abs(this._ts)) {
                                        if (!this._lock) {
                                            (totalTime || !dur) && (tTime === tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1); // don't remove if the timeline is reversed and the playhead isn't at 0, otherwise tl.progress(1).reverse() won't work. Only remove if the playhead is at the end and timeScale is positive, or if the playhead is at 0 and the timeScale is negative.
                                            if (!suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime)) {
                                                _callback(this, tTime === tDur ? "onComplete" : "onReverseComplete", true);
                                                this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
                                            }
                                        }
                                    }
                                }
                            }
                            return this;
                        };
                        _proto2.add = function add(child, position) {
                            var _this2 = this;
                            _isNumber(position) || (position = _parsePosition(this, position));
                            if (!(child instanceof Animation)) {
                                if (_isArray(child)) {
                                    child.forEach(function(obj) {
                                        return _this2.add(obj, position);
                                    });
                                    return this;
                                }
                                if (_isString(child)) {
                                    return this.addLabel(child, position);
                                }
                                if (_isFunction(child)) {
                                    child = Tween.delayedCall(0, child);
                                } else {
                                    return this;
                                }
                            }
                            return this !== child ? _addToTimeline(this, child, position) : this; //don't allow a timeline to be added to itself as a child!
                        };
                        _proto2.getChildren = function getChildren(nested, tweens, timelines, ignoreBeforeTime) {
                            if (nested === void 0) {
                                nested = true;
                            }
                            if (tweens === void 0) {
                                tweens = true;
                            }
                            if (timelines === void 0) {
                                timelines = true;
                            }
                            if (ignoreBeforeTime === void 0) {
                                ignoreBeforeTime = -_bigNum;
                            }
                            var a = [], child = this._first;
                            while(child){
                                if (child._start >= ignoreBeforeTime) {
                                    if (child instanceof Tween) {
                                        tweens && a.push(child);
                                    } else {
                                        timelines && a.push(child);
                                        nested && a.push.apply(a, child.getChildren(true, tweens, timelines));
                                    }
                                }
                                child = child._next;
                            }
                            return a;
                        };
                        _proto2.getById = function getById(id) {
                            var animations = this.getChildren(1, 1, 1), i = animations.length;
                            while(i--){
                                if (animations[i].vars.id === id) {
                                    return animations[i];
                                }
                            }
                        };
                        _proto2.remove = function remove(child) {
                            if (_isString(child)) {
                                return this.removeLabel(child);
                            }
                            if (_isFunction(child)) {
                                return this.killTweensOf(child);
                            }
                            _removeLinkedListItem(this, child);
                            if (child === this._recent) {
                                this._recent = this._last;
                            }
                            return _uncache(this);
                        };
                        _proto2.totalTime = function totalTime(_totalTime2, suppressEvents) {
                            if (!arguments.length) {
                                return this._tTime;
                            }
                            this._forcing = 1;
                            if (!this._dp && this._ts) {
                                //special case for the global timeline (or any other that has no parent or detached parent).
                                this._start = _round(_ticker.time - (this._ts > 0 ? _totalTime2 / this._ts : (this.totalDuration() - _totalTime2) / -this._ts));
                            }
                            _Animation.prototype.totalTime.call(this, _totalTime2, suppressEvents);
                            this._forcing = 0;
                            return this;
                        };
                        _proto2.addLabel = function addLabel(label, position) {
                            this.labels[label] = _parsePosition(this, position);
                            return this;
                        };
                        _proto2.removeLabel = function removeLabel(label) {
                            delete this.labels[label];
                            return this;
                        };
                        _proto2.addPause = function addPause(position, callback, params) {
                            var t = Tween.delayedCall(0, callback || _emptyFunc, params);
                            t.data = "isPause";
                            this._hasPause = 1;
                            return _addToTimeline(this, t, _parsePosition(this, position));
                        };
                        _proto2.removePause = function removePause(position) {
                            var child = this._first;
                            position = _parsePosition(this, position);
                            while(child){
                                if (child._start === position && child.data === "isPause") {
                                    _removeFromParent(child);
                                }
                                child = child._next;
                            }
                        };
                        _proto2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
                            var tweens = this.getTweensOf(targets, onlyActive), i = tweens.length;
                            while(i--){
                                _overwritingTween !== tweens[i] && tweens[i].kill(targets, props);
                            }
                            return this;
                        };
                        _proto2.getTweensOf = function getTweensOf(targets, onlyActive) {
                            var a = [], parsedTargets = toArray(targets), child = this._first, isGlobalTime = _isNumber(onlyActive), // a number is interpreted as a global time. If the animation spans
                            children;
                            while(child){
                                if (child instanceof Tween) {
                                    if (_arrayContainsAny(child._targets, parsedTargets) && (isGlobalTime ? (!_overwritingTween || child._initted && child._ts) && child.globalTime(0) <= onlyActive && child.globalTime(child.totalDuration()) > onlyActive : !onlyActive || child.isActive())) {
                                        // note: if this is for overwriting, it should only be for tweens that aren't paused and are initted.
                                        a.push(child);
                                    }
                                } else if ((children = child.getTweensOf(parsedTargets, onlyActive)).length) {
                                    a.push.apply(a, children);
                                }
                                child = child._next;
                            }
                            return a;
                        } // potential future feature - targets() on timelines
                        ;
                        _proto2.tweenTo = function tweenTo(position, vars) {
                            vars = vars || {};
                            var tl = this, endTime = _parsePosition(tl, position), _vars = vars, startAt = _vars.startAt, _onStart = _vars.onStart, onStartParams = _vars.onStartParams, immediateRender = _vars.immediateRender, tween = Tween.to(tl, _setDefaults({
                                ease: "none",
                                lazy: false,
                                immediateRender: false,
                                time: endTime,
                                overwrite: "auto",
                                duration: vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale()) || _tinyNum,
                                onStart: function onStart() {
                                    tl.pause();
                                    var duration = vars.duration || Math.abs((endTime - tl._time) / tl.timeScale());
                                    tween._dur !== duration && _setDuration(tween, duration, 0, 1).render(tween._time, true, true);
                                    _onStart && _onStart.apply(tween, onStartParams || []); //in case the user had an onStart in the vars - we don't want to overwrite it.
                                }
                            }, vars));
                            return immediateRender ? tween.render(0) : tween;
                        };
                        _proto2.tweenFromTo = function tweenFromTo(fromPosition, toPosition, vars) {
                            return this.tweenTo(toPosition, _setDefaults({
                                startAt: {
                                    time: _parsePosition(this, fromPosition)
                                }
                            }, vars));
                        };
                        _proto2.recent = function recent() {
                            return this._recent;
                        };
                        _proto2.nextLabel = function nextLabel(afterTime) {
                            if (afterTime === void 0) {
                                afterTime = this._time;
                            }
                            return _getLabelInDirection(this, _parsePosition(this, afterTime));
                        };
                        _proto2.previousLabel = function previousLabel(beforeTime) {
                            if (beforeTime === void 0) {
                                beforeTime = this._time;
                            }
                            return _getLabelInDirection(this, _parsePosition(this, beforeTime), 1);
                        };
                        _proto2.currentLabel = function currentLabel(value) {
                            return arguments.length ? this.seek(value, true) : this.previousLabel(this._time + _tinyNum);
                        };
                        _proto2.shiftChildren = function shiftChildren(amount, adjustLabels, ignoreBeforeTime) {
                            if (ignoreBeforeTime === void 0) {
                                ignoreBeforeTime = 0;
                            }
                            var child = this._first, labels = this.labels, p;
                            while(child){
                                if (child._start >= ignoreBeforeTime) {
                                    child._start += amount;
                                    child._end += amount;
                                }
                                child = child._next;
                            }
                            if (adjustLabels) {
                                for(p in labels){
                                    if (labels[p] >= ignoreBeforeTime) {
                                        labels[p] += amount;
                                    }
                                }
                            }
                            return _uncache(this);
                        };
                        _proto2.invalidate = function invalidate() {
                            var child = this._first;
                            this._lock = 0;
                            while(child){
                                child.invalidate();
                                child = child._next;
                            }
                            return _Animation.prototype.invalidate.call(this);
                        };
                        _proto2.clear = function clear(includeLabels) {
                            if (includeLabels === void 0) {
                                includeLabels = true;
                            }
                            var child = this._first, next;
                            while(child){
                                next = child._next;
                                this.remove(child);
                                child = next;
                            }
                            this._dp && (this._time = this._tTime = this._pTime = 0);
                            includeLabels && (this.labels = {});
                            return _uncache(this);
                        };
                        _proto2.totalDuration = function totalDuration(value) {
                            var max = 0, self = this, child = self._last, prevStart = _bigNum, prev, start, parent;
                            if (arguments.length) {
                                return self.timeScale((self._repeat < 0 ? self.duration() : self.totalDuration()) / (self.reversed() ? -value : value));
                            }
                            if (self._dirty) {
                                parent = self.parent;
                                while(child){
                                    prev = child._prev; //record it here in case the tween changes position in the sequence...
                                    child._dirty && child.totalDuration(); //could change the tween._startTime, so make sure the animation's cache is clean before analyzing it.
                                    start = child._start;
                                    if (start > prevStart && self._sort && child._ts && !self._lock) {
                                        //in case one of the tweens shifted out of order, it needs to be re-inserted into the correct position in the sequence
                                        self._lock = 1; //prevent endless recursive calls - there are methods that get triggered that check duration/totalDuration when we add().
                                        _addToTimeline(self, child, start - child._delay, 1)._lock = 0;
                                    } else {
                                        prevStart = start;
                                    }
                                    if (start < 0 && child._ts) {
                                        //children aren't allowed to have negative startTimes unless smoothChildTiming is true, so adjust here if one is found.
                                        max -= start;
                                        if (!parent && !self._dp || parent && parent.smoothChildTiming) {
                                            self._start += start / self._ts;
                                            self._time -= start;
                                            self._tTime -= start;
                                        }
                                        self.shiftChildren(-start, false, -Infinity);
                                        prevStart = 0;
                                    }
                                    child._end > max && child._ts && (max = child._end);
                                    child = prev;
                                }
                                _setDuration(self, self === _globalTimeline && self._time > max ? self._time : max, 1, 1);
                                self._dirty = 0;
                            }
                            return self._tDur;
                        };
                        Timeline.updateRoot = function updateRoot(time) {
                            if (_globalTimeline._ts) {
                                _lazySafeRender(_globalTimeline, _parentToChildTotalTime(time, _globalTimeline));
                                _lastRenderedFrame = _ticker.frame;
                            }
                            if (_ticker.frame >= _nextGCFrame) {
                                _nextGCFrame += _config.autoSleep || 120;
                                var child = _globalTimeline._first;
                                if (!child || !child._ts) {
                                    if (_config.autoSleep && _ticker._listeners.length < 2) {
                                        while(child && !child._ts){
                                            child = child._next;
                                        }
                                        child || _ticker.sleep();
                                    }
                                }
                            }
                        };
                        return Timeline;
                    }(Animation);
                    exports1.TimelineLite = exports1.TimelineMax = exports1.Timeline = Timeline;
                    _setDefaults(Timeline.prototype, {
                        _lock: 0,
                        _hasPause: 0,
                        _forcing: 0
                    });
                    var _addComplexStringPropTween = function _addComplexStringPropTween(target, prop, start, end, setter, stringFilter, funcParam) {
                        //note: we call _addComplexStringPropTween.call(tweenInstance...) to ensure that it's scoped properly. We may call it from within a plugin too, thus "this" would refer to the plugin.
                        var pt = new PropTween(this._pt, target, prop, 0, 1, _renderComplexString, null, setter), index = 0, matchIndex = 0, result, startNums, color, endNum, chunk, startNum, hasRandom, a;
                        pt.b = start;
                        pt.e = end;
                        start += ""; //ensure values are strings
                        end += "";
                        if (hasRandom = ~end.indexOf("random(")) {
                            end = _replaceRandom(end);
                        }
                        if (stringFilter) {
                            a = [
                                start,
                                end
                            ];
                            stringFilter(a, target, prop); //pass an array with the starting and ending values and let the filter do whatever it needs to the values.
                            start = a[0];
                            end = a[1];
                        }
                        startNums = start.match(_complexStringNumExp) || [];
                        while(result = _complexStringNumExp.exec(end)){
                            endNum = result[0];
                            chunk = end.substring(index, result.index);
                            if (color) {
                                color = (color + 1) % 5;
                            } else if (chunk.substr(-5) === "rgba(") {
                                color = 1;
                            }
                            if (endNum !== startNums[matchIndex++]) {
                                startNum = parseFloat(startNums[matchIndex - 1]) || 0; //these nested PropTweens are handled in a special way - we'll never actually call a render or setter method on them. We'll just loop through them in the parent complex string PropTween's render method.
                                pt._pt = {
                                    _next: pt._pt,
                                    p: chunk || matchIndex === 1 ? chunk : ",",
                                    //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
                                    s: startNum,
                                    c: endNum.charAt(1) === "=" ? parseFloat(endNum.substr(2)) * (endNum.charAt(0) === "-" ? -1 : 1) : parseFloat(endNum) - startNum,
                                    m: color && color < 4 ? Math.round : 0
                                };
                                index = _complexStringNumExp.lastIndex;
                            }
                        }
                        pt.c = index < end.length ? end.substring(index, end.length) : ""; //we use the "c" of the PropTween to store the final part of the string (after the last number)
                        pt.fp = funcParam;
                        if (_relExp.test(end) || hasRandom) {
                            pt.e = 0; //if the end string contains relative values or dynamic random(...) values, delete the end it so that on the final render we don't actually set it to the string with += or -= characters (forces it to use the calculated value).
                        }
                        this._pt = pt; //start the linked list with this new PropTween. Remember, we call _addComplexStringPropTween.call(tweenInstance...) to ensure that it's scoped properly. We may call it from within a plugin too, thus "this" would refer to the plugin.
                        return pt;
                    }, _addPropTween = function _addPropTween(target, prop, start, end, index, targets, modifier, stringFilter, funcParam) {
                        _isFunction(end) && (end = end(index || 0, target, targets));
                        var currentValue = target[prop], parsedStart = start !== "get" ? start : !_isFunction(currentValue) ? currentValue : funcParam ? target[prop.indexOf("set") || !_isFunction(target["get" + prop.substr(3)]) ? prop : "get" + prop.substr(3)](funcParam) : target[prop](), setter = !_isFunction(currentValue) ? _setterPlain : funcParam ? _setterFuncWithParam : _setterFunc, pt;
                        if (_isString(end)) {
                            if (~end.indexOf("random(")) {
                                end = _replaceRandom(end);
                            }
                            if (end.charAt(1) === "=") {
                                end = parseFloat(parsedStart) + parseFloat(end.substr(2)) * (end.charAt(0) === "-" ? -1 : 1) + (getUnit(parsedStart) || 0);
                            }
                        }
                        if (parsedStart !== end) {
                            if (!isNaN(parsedStart * end)) {
                                pt = new PropTween(this._pt, target, prop, +parsedStart || 0, end - (parsedStart || 0), typeof currentValue === "boolean" ? _renderBoolean : _renderPlain, 0, setter);
                                funcParam && (pt.fp = funcParam);
                                modifier && pt.modifier(modifier, this, target);
                                return this._pt = pt;
                            }
                            !currentValue && !(prop in target) && _missingPlugin(prop, end);
                            return _addComplexStringPropTween.call(this, target, prop, parsedStart, end, setter, stringFilter || _config.stringFilter, funcParam);
                        }
                    }, //creates a copy of the vars object and processes any function-based values (putting the resulting values directly into the copy) as well as strings with "random()" in them. It does NOT process relative values.
                    _processVars = function _processVars(vars, index, target, targets, tween) {
                        _isFunction(vars) && (vars = _parseFuncOrString(vars, tween, index, target, targets));
                        if (!_isObject(vars) || vars.style && vars.nodeType || _isArray(vars) || _isTypedArray(vars)) {
                            return _isString(vars) ? _parseFuncOrString(vars, tween, index, target, targets) : vars;
                        }
                        var copy = {}, p;
                        for(p in vars){
                            copy[p] = _parseFuncOrString(vars[p], tween, index, target, targets);
                        }
                        return copy;
                    }, _checkPlugin = function _checkPlugin(property, vars, tween, index, target, targets) {
                        var plugin, pt, ptLookup, i;
                        if (_plugins[property] && (plugin = new _plugins[property]()).init(target, plugin.rawVars ? vars[property] : _processVars(vars[property], index, target, targets, tween), tween, index, targets) !== false) {
                            tween._pt = pt = new PropTween(tween._pt, target, property, 0, 1, plugin.render, plugin, 0, plugin.priority);
                            if (tween !== _quickTween) {
                                ptLookup = tween._ptLookup[tween._targets.indexOf(target)]; //note: we can't use tween._ptLookup[index] because for staggered tweens, the index from the fullTargets array won't match what it is in each individual tween that spawns from the stagger.
                                i = plugin._props.length;
                                while(i--){
                                    ptLookup[plugin._props[i]] = pt;
                                }
                            }
                        }
                        return plugin;
                    }, _overwritingTween, //store a reference temporarily so we can avoid overwriting itself.
                    _initTween = function _initTween(tween, time) {
                        var vars = tween.vars, ease = vars.ease, startAt = vars.startAt, immediateRender = vars.immediateRender, lazy = vars.lazy, onUpdate = vars.onUpdate, onUpdateParams = vars.onUpdateParams, callbackScope = vars.callbackScope, runBackwards = vars.runBackwards, yoyoEase = vars.yoyoEase, keyframes = vars.keyframes, autoRevert = vars.autoRevert, dur = tween._dur, prevStartAt = tween._startAt, targets = tween._targets, parent = tween.parent, fullTargets = parent && parent.data === "nested" ? parent.parent._targets : targets, autoOverwrite = tween._overwrite === "auto" && !_suppressOverwrites, tl = tween.timeline, cleanVars, i, p, pt, target, hasPriority, gsData, harness, plugin, ptLookup, index, harnessVars, overwritten;
                        tl && (!keyframes || !ease) && (ease = "none");
                        tween._ease = _parseEase(ease, _defaults.ease);
                        tween._yEase = yoyoEase ? _invertEase(_parseEase(yoyoEase === true ? ease : yoyoEase, _defaults.ease)) : 0;
                        if (yoyoEase && tween._yoyo && !tween._repeat) {
                            //there must have been a parent timeline with yoyo:true that is currently in its yoyo phase, so flip the eases.
                            yoyoEase = tween._yEase;
                            tween._yEase = tween._ease;
                            tween._ease = yoyoEase;
                        }
                        if (!tl) {
                            //if there's an internal timeline, skip all the parsing because we passed that task down the chain.
                            harness = targets[0] ? _getCache(targets[0]).harness : 0;
                            harnessVars = harness && vars[harness.prop]; //someone may need to specify CSS-specific values AND non-CSS values, like if the element has an "x" property plus it's a standard DOM element. We allow people to distinguish by wrapping plugin-specific stuff in a css:{} object for example.
                            cleanVars = _copyExcluding(vars, _reservedProps);
                            prevStartAt && prevStartAt.render(-1, true).kill();
                            if (startAt) {
                                _removeFromParent(tween._startAt = Tween.set(targets, _setDefaults({
                                    data: "isStart",
                                    overwrite: false,
                                    parent: parent,
                                    immediateRender: true,
                                    lazy: _isNotFalse(lazy),
                                    startAt: null,
                                    delay: 0,
                                    onUpdate: onUpdate,
                                    onUpdateParams: onUpdateParams,
                                    callbackScope: callbackScope,
                                    stagger: 0
                                }, startAt))); //copy the properties/values into a new object to avoid collisions, like var to = {x:0}, from = {x:500}; timeline.fromTo(e, from, to).fromTo(e, to, from);
                                if (immediateRender) {
                                    if (time > 0) {
                                        autoRevert || (tween._startAt = 0); //tweens that render immediately (like most from() and fromTo() tweens) shouldn't revert when their parent timeline's playhead goes backward past the startTime because the initial render could have happened anytime and it shouldn't be directly correlated to this tween's startTime. Imagine setting up a complex animation where the beginning states of various objects are rendered immediately but the tween doesn't happen for quite some time - if we revert to the starting values as soon as the playhead goes backward past the tween's startTime, it will throw things off visually. Reversion should only happen in Timeline instances where immediateRender was false or when autoRevert is explicitly set to true.
                                    } else if (dur && !(time < 0 && prevStartAt)) {
                                        time && (tween._zTime = time);
                                        return; //we skip initialization here so that overwriting doesn't occur until the tween actually begins. Otherwise, if you create several immediateRender:true tweens of the same target/properties to drop into a Timeline, the last one created would overwrite the first ones because they didn't get placed into the timeline yet before the first render occurs and kicks in overwriting.
                                    }
                                }
                            } else if (runBackwards && dur) {
                                //from() tweens must be handled uniquely: their beginning values must be rendered but we don't want overwriting to occur yet (when time is still 0). Wait until the tween actually begins before doing all the routines like overwriting. At that time, we should render at the END of the tween to ensure that things initialize correctly (remember, from() tweens go backwards)
                                if (prevStartAt) {
                                    !autoRevert && (tween._startAt = 0);
                                } else {
                                    time && (immediateRender = false); //in rare cases (like if a from() tween runs and then is invalidate()-ed), immediateRender could be true but the initial forced-render gets skipped, so there's no need to force the render in this context when the _time is greater than 0
                                    p = _setDefaults({
                                        overwrite: false,
                                        data: "isFromStart",
                                        //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
                                        lazy: immediateRender && _isNotFalse(lazy),
                                        immediateRender: immediateRender,
                                        //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
                                        stagger: 0,
                                        parent: parent //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y:gsap.utils.wrap([-100,100])})
                                    }, cleanVars);
                                    harnessVars && (p[harness.prop] = harnessVars); // in case someone does something like .from(..., {css:{}})
                                    _removeFromParent(tween._startAt = Tween.set(targets, p));
                                    if (!immediateRender) {
                                        _initTween(tween._startAt, _tinyNum); //ensures that the initial values are recorded
                                    } else if (!time) {
                                        return;
                                    }
                                }
                            }
                            tween._pt = 0;
                            lazy = dur && _isNotFalse(lazy) || lazy && !dur;
                            for(i = 0; i < targets.length; i++){
                                target = targets[i];
                                gsData = target._gsap || _harness(targets)[i]._gsap;
                                tween._ptLookup[i] = ptLookup = {};
                                _lazyLookup[gsData.id] && _lazyTweens.length && _lazyRender(); //if other tweens of the same target have recently initted but haven't rendered yet, we've got to force the render so that the starting values are correct (imagine populating a timeline with a bunch of sequential tweens and then jumping to the end)
                                index = fullTargets === targets ? i : fullTargets.indexOf(target);
                                if (harness && (plugin = new harness()).init(target, harnessVars || cleanVars, tween, index, fullTargets) !== false) {
                                    tween._pt = pt = new PropTween(tween._pt, target, plugin.name, 0, 1, plugin.render, plugin, 0, plugin.priority);
                                    plugin._props.forEach(function(name) {
                                        ptLookup[name] = pt;
                                    });
                                    plugin.priority && (hasPriority = 1);
                                }
                                if (!harness || harnessVars) {
                                    for(p in cleanVars){
                                        if (_plugins[p] && (plugin = _checkPlugin(p, cleanVars, tween, index, target, fullTargets))) {
                                            plugin.priority && (hasPriority = 1);
                                        } else {
                                            ptLookup[p] = pt = _addPropTween.call(tween, target, p, "get", cleanVars[p], index, fullTargets, 0, vars.stringFilter);
                                        }
                                    }
                                }
                                tween._op && tween._op[i] && tween.kill(target, tween._op[i]);
                                if (autoOverwrite && tween._pt) {
                                    _overwritingTween = tween;
                                    _globalTimeline.killTweensOf(target, ptLookup, tween.globalTime(0)); //Also make sure the overwriting doesn't overwrite THIS tween!!!
                                    overwritten = !tween.parent;
                                    _overwritingTween = 0;
                                }
                                tween._pt && lazy && (_lazyLookup[gsData.id] = 1);
                            }
                            hasPriority && _sortPropTweensByPriority(tween);
                            tween._onInit && tween._onInit(tween); //plugins like RoundProps must wait until ALL of the PropTweens are instantiated. In the plugin's init() function, it sets the _onInit on the tween instance. May not be pretty/intuitive, but it's fast and keeps file size down.
                        }
                        tween._from = !tl && !!vars.runBackwards; //nested timelines should never run backwards - the backwards-ness is in the child tweens.
                        tween._onUpdate = onUpdate;
                        tween._initted = (!tween._op || tween._pt) && !overwritten; // if overwrittenProps resulted in the entire tween being killed, do NOT flag it as initted or else it may render for one tick.
                    }, _addAliasesToVars = function _addAliasesToVars(targets, vars) {
                        var harness = targets[0] ? _getCache(targets[0]).harness : 0, propertyAliases = harness && harness.aliases, copy, p, i, aliases;
                        if (!propertyAliases) {
                            return vars;
                        }
                        copy = _merge({}, vars);
                        for(p in propertyAliases){
                            if (p in copy) {
                                aliases = propertyAliases[p].split(",");
                                i = aliases.length;
                                while(i--){
                                    copy[aliases[i]] = copy[p];
                                }
                            }
                        }
                        return copy;
                    }, _parseFuncOrString = function _parseFuncOrString(value, tween, i, target, targets) {
                        return _isFunction(value) ? value.call(tween, i, target, targets) : _isString(value) && ~value.indexOf("random(") ? _replaceRandom(value) : value;
                    }, _staggerTweenProps = _callbackNames + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase", _staggerPropsToSkip = (_staggerTweenProps + ",id,stagger,delay,duration,paused,scrollTrigger").split(",");
                    /*
         * --------------------------------------------------------------------------------------
         * TWEEN
         * --------------------------------------------------------------------------------------
         */ exports1._checkPlugin = _checkPlugin;
                    var Tween = /*#__PURE__*/ function(_Animation2) {
                        _inheritsLoose(Tween, _Animation2);
                        function Tween(targets, vars, time, skipInherit) {
                            var _this3;
                            if (typeof vars === "number") {
                                time.duration = vars;
                                vars = time;
                                time = null;
                            }
                            _this3 = _Animation2.call(this, skipInherit ? vars : _inheritDefaults(vars), time) || this;
                            var _this3$vars = _this3.vars, duration = _this3$vars.duration, delay = _this3$vars.delay, immediateRender = _this3$vars.immediateRender, stagger = _this3$vars.stagger, overwrite = _this3$vars.overwrite, keyframes = _this3$vars.keyframes, defaults = _this3$vars.defaults, scrollTrigger = _this3$vars.scrollTrigger, yoyoEase = _this3$vars.yoyoEase, parent = _this3.parent, parsedTargets = (_isArray(targets) || _isTypedArray(targets) ? _isNumber(targets[0]) : "length" in vars) ? [
                                targets
                            ] : toArray(targets), tl, i, copy, l, p, curTarget, staggerFunc, staggerVarsToMerge;
                            _this3._targets = parsedTargets.length ? _harness(parsedTargets) : _warn("GSAP target " + targets + " not found. https://greensock.com", !_config.nullTargetWarn) || [];
                            _this3._ptLookup = []; //PropTween lookup. An array containing an object for each target, having keys for each tweening property
                            _this3._overwrite = overwrite;
                            if (keyframes || stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
                                vars = _this3.vars;
                                tl = _this3.timeline = new Timeline({
                                    data: "nested",
                                    defaults: defaults || {}
                                });
                                tl.kill();
                                tl.parent = tl._dp = _assertThisInitialized(_this3);
                                tl._start = 0;
                                if (keyframes) {
                                    _setDefaults(tl.vars.defaults, {
                                        ease: "none"
                                    });
                                    keyframes.forEach(function(frame) {
                                        return tl.to(parsedTargets, frame, ">");
                                    });
                                } else {
                                    l = parsedTargets.length;
                                    staggerFunc = stagger ? distribute(stagger) : _emptyFunc;
                                    if (_isObject(stagger)) {
                                        //users can pass in callbacks like onStart/onComplete in the stagger object. These should fire with each individual tween.
                                        for(p in stagger){
                                            if (~_staggerTweenProps.indexOf(p)) {
                                                staggerVarsToMerge || (staggerVarsToMerge = {});
                                                staggerVarsToMerge[p] = stagger[p];
                                            }
                                        }
                                    }
                                    for(i = 0; i < l; i++){
                                        copy = {};
                                        for(p in vars){
                                            if (_staggerPropsToSkip.indexOf(p) < 0) {
                                                copy[p] = vars[p];
                                            }
                                        }
                                        copy.stagger = 0;
                                        yoyoEase && (copy.yoyoEase = yoyoEase);
                                        staggerVarsToMerge && _merge(copy, staggerVarsToMerge);
                                        curTarget = parsedTargets[i]; //don't just copy duration or delay because if they're a string or function, we'd end up in an infinite loop because _isFuncOrString() would evaluate as true in the child tweens, entering this loop, etc. So we parse the value straight from vars and default to 0.
                                        copy.duration = +_parseFuncOrString(duration, _assertThisInitialized(_this3), i, curTarget, parsedTargets);
                                        copy.delay = (+_parseFuncOrString(delay, _assertThisInitialized(_this3), i, curTarget, parsedTargets) || 0) - _this3._delay;
                                        if (!stagger && l === 1 && copy.delay) {
                                            // if someone does delay:"random(1, 5)", repeat:-1, for example, the delay shouldn't be inside the repeat.
                                            _this3._delay = delay = copy.delay;
                                            _this3._start += delay;
                                            copy.delay = 0;
                                        }
                                        tl.to(curTarget, copy, staggerFunc(i, curTarget, parsedTargets));
                                    }
                                    tl.duration() ? duration = delay = 0 : _this3.timeline = 0; // if the timeline's duration is 0, we don't need a timeline internally!
                                }
                                duration || _this3.duration(duration = tl.duration());
                            } else {
                                _this3.timeline = 0; //speed optimization, faster lookups (no going up the prototype chain)
                            }
                            if (overwrite === true && !_suppressOverwrites) {
                                _overwritingTween = _assertThisInitialized(_this3);
                                _globalTimeline.killTweensOf(parsedTargets);
                                _overwritingTween = 0;
                            }
                            parent && _postAddChecks(parent, _assertThisInitialized(_this3));
                            if (immediateRender || !duration && !keyframes && _this3._start === _round(parent._time) && _isNotFalse(immediateRender) && _hasNoPausedAncestors(_assertThisInitialized(_this3)) && parent.data !== "nested") {
                                _this3._tTime = -_tinyNum; //forces a render without having to set the render() "force" parameter to true because we want to allow lazying by default (using the "force" parameter always forces an immediate full render)
                                _this3.render(Math.max(0, -delay)); //in case delay is negative
                            }
                            scrollTrigger && _scrollTrigger(_assertThisInitialized(_this3), scrollTrigger);
                            return _this3;
                        }
                        var _proto3 = Tween.prototype;
                        _proto3.render = function render(totalTime, suppressEvents, force) {
                            var prevTime = this._time, tDur = this._tDur, dur = this._dur, tTime = totalTime > tDur - _tinyNum && totalTime >= 0 ? tDur : totalTime < _tinyNum ? 0 : totalTime, time, pt, iteration, cycleDuration, prevIteration, isYoyo, ratio, timeline, yoyoEase;
                            if (!dur) {
                                _renderZeroDurationTween(this, totalTime, suppressEvents, force);
                            } else if (tTime !== this._tTime || !totalTime || force || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== totalTime < 0) {
                                //this senses if we're crossing over the start time, in which case we must record _zTime and force the render, but we do it in this lengthy conditional way for performance reasons (usually we can skip the calculations): this._initted && (this._zTime < 0) !== (totalTime < 0)
                                time = tTime;
                                timeline = this.timeline;
                                if (this._repeat) {
                                    //adjust the time for repeats and yoyos
                                    cycleDuration = dur + this._rDelay;
                                    if (this._repeat < -1 && totalTime < 0) {
                                        return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
                                    }
                                    time = _round(tTime % cycleDuration); //round to avoid floating point errors. (4 % 0.8 should be 0 but some browsers report it as 0.79999999!)
                                    if (tTime === tDur) {
                                        // the tDur === tTime is for edge cases where there's a lengthy decimal on the duration and it may reach the very end but the time is rendered as not-quite-there (remember, tDur is rounded to 4 decimals whereas dur isn't)
                                        iteration = this._repeat;
                                        time = dur;
                                    } else {
                                        iteration = ~~(tTime / cycleDuration);
                                        if (iteration && iteration === tTime / cycleDuration) {
                                            time = dur;
                                            iteration--;
                                        }
                                        time > dur && (time = dur);
                                    }
                                    isYoyo = this._yoyo && iteration & 1;
                                    if (isYoyo) {
                                        yoyoEase = this._yEase;
                                        time = dur - time;
                                    }
                                    prevIteration = _animationCycle(this._tTime, cycleDuration);
                                    if (time === prevTime && !force && this._initted) {
                                        //could be during the repeatDelay part. No need to render and fire callbacks.
                                        return this;
                                    }
                                    if (iteration !== prevIteration) {
                                        timeline && this._yEase && _propagateYoyoEase(timeline, isYoyo); //repeatRefresh functionality
                                        if (this.vars.repeatRefresh && !isYoyo && !this._lock) {
                                            this._lock = force = 1; //force, otherwise if lazy is true, the _attemptInitTween() will return and we'll jump out and get caught bouncing on each tick.
                                            this.render(_round(cycleDuration * iteration), true).invalidate()._lock = 0;
                                        }
                                    }
                                }
                                if (!this._initted) {
                                    if (_attemptInitTween(this, totalTime < 0 ? totalTime : time, force, suppressEvents)) {
                                        this._tTime = 0; // in constructor if immediateRender is true, we set _tTime to -_tinyNum to have the playhead cross the starting point but we can't leave _tTime as a negative number.
                                        return this;
                                    }
                                    if (dur !== this._dur) {
                                        // while initting, a plugin like InertiaPlugin might alter the duration, so rerun from the start to ensure everything renders as it should.
                                        return this.render(totalTime, suppressEvents, force);
                                    }
                                }
                                this._tTime = tTime;
                                this._time = time;
                                if (!this._act && this._ts) {
                                    this._act = 1; //as long as it's not paused, force it to be active so that if the user renders independent of the parent timeline, it'll be forced to re-render on the next tick.
                                    this._lazy = 0;
                                }
                                this.ratio = ratio = (yoyoEase || this._ease)(time / dur);
                                if (this._from) {
                                    this.ratio = ratio = 1 - ratio;
                                }
                                time && !prevTime && !suppressEvents && _callback(this, "onStart");
                                pt = this._pt;
                                while(pt){
                                    pt.r(ratio, pt.d);
                                    pt = pt._next;
                                }
                                timeline && timeline.render(totalTime < 0 ? totalTime : !time && isYoyo ? -_tinyNum : timeline._dur * ratio, suppressEvents, force) || this._startAt && (this._zTime = totalTime);
                                if (this._onUpdate && !suppressEvents) {
                                    totalTime < 0 && this._startAt && this._startAt.render(totalTime, true, force); //note: for performance reasons, we tuck this conditional logic inside less traveled areas (most tweens don't have an onUpdate). We'd just have it at the end before the onComplete, but the values should be updated before any onUpdate is called, so we ALSO put it here and then if it's not called, we do so later near the onComplete.
                                    _callback(this, "onUpdate");
                                }
                                this._repeat && iteration !== prevIteration && this.vars.onRepeat && !suppressEvents && this.parent && _callback(this, "onRepeat");
                                if ((tTime === this._tDur || !tTime) && this._tTime === tTime) {
                                    totalTime < 0 && this._startAt && !this._onUpdate && this._startAt.render(totalTime, true, true);
                                    (totalTime || !dur) && (tTime === this._tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1); // don't remove if we're rendering at exactly a time of 0, as there could be autoRevert values that should get set on the next tick (if the playhead goes backward beyond the startTime, negative totalTime). Don't remove if the timeline is reversed and the playhead isn't at 0, otherwise tl.progress(1).reverse() won't work. Only remove if the playhead is at the end and timeScale is positive, or if the playhead is at 0 and the timeScale is negative.
                                    if (!suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime)) {
                                        // if prevTime and tTime are zero, we shouldn't fire the onReverseComplete. This could happen if you gsap.to(... {paused:true}).play();
                                        _callback(this, tTime === tDur ? "onComplete" : "onReverseComplete", true);
                                        this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
                                    }
                                }
                            }
                            return this;
                        };
                        _proto3.targets = function targets() {
                            return this._targets;
                        };
                        _proto3.invalidate = function invalidate() {
                            this._pt = this._op = this._startAt = this._onUpdate = this._lazy = this.ratio = 0;
                            this._ptLookup = [];
                            this.timeline && this.timeline.invalidate();
                            return _Animation2.prototype.invalidate.call(this);
                        };
                        _proto3.kill = function kill(targets, vars) {
                            if (vars === void 0) {
                                vars = "all";
                            }
                            if (!targets && (!vars || vars === "all")) {
                                this._lazy = this._pt = 0;
                                return this.parent ? _interrupt(this) : this;
                            }
                            if (this.timeline) {
                                var tDur = this.timeline.totalDuration();
                                this.timeline.killTweensOf(targets, vars, _overwritingTween && _overwritingTween.vars.overwrite !== true)._first || _interrupt(this); // if nothing is left tweening, interrupt.
                                this.parent && tDur !== this.timeline.totalDuration() && _setDuration(this, this._dur * this.timeline._tDur / tDur, 0, 1); // if a nested tween is killed that changes the duration, it should affect this tween's duration. We must use the ratio, though, because sometimes the internal timeline is stretched like for keyframes where they don't all add up to whatever the parent tween's duration was set to.
                                return this;
                            }
                            var parsedTargets = this._targets, killingTargets = targets ? toArray(targets) : parsedTargets, propTweenLookup = this._ptLookup, firstPT = this._pt, overwrittenProps, curLookup, curOverwriteProps, props, p, pt, i;
                            if ((!vars || vars === "all") && _arraysMatch(parsedTargets, killingTargets)) {
                                vars === "all" && (this._pt = 0);
                                return _interrupt(this);
                            }
                            overwrittenProps = this._op = this._op || [];
                            if (vars !== "all") {
                                //so people can pass in a comma-delimited list of property names
                                if (_isString(vars)) {
                                    p = {};
                                    _forEachName(vars, function(name) {
                                        return p[name] = 1;
                                    });
                                    vars = p;
                                }
                                vars = _addAliasesToVars(parsedTargets, vars);
                            }
                            i = parsedTargets.length;
                            while(i--){
                                if (~killingTargets.indexOf(parsedTargets[i])) {
                                    curLookup = propTweenLookup[i];
                                    if (vars === "all") {
                                        overwrittenProps[i] = vars;
                                        props = curLookup;
                                        curOverwriteProps = {};
                                    } else {
                                        curOverwriteProps = overwrittenProps[i] = overwrittenProps[i] || {};
                                        props = vars;
                                    }
                                    for(p in props){
                                        pt = curLookup && curLookup[p];
                                        if (pt) {
                                            if (!("kill" in pt.d) || pt.d.kill(p) === true) {
                                                _removeLinkedListItem(this, pt, "_pt");
                                            }
                                            delete curLookup[p];
                                        }
                                        if (curOverwriteProps !== "all") {
                                            curOverwriteProps[p] = 1;
                                        }
                                    }
                                }
                            }
                            this._initted && !this._pt && firstPT && _interrupt(this); //if all tweening properties are killed, kill the tween. Without this line, if there's a tween with multiple targets and then you killTweensOf() each target individually, the tween would technically still remain active and fire its onComplete even though there aren't any more properties tweening.
                            return this;
                        };
                        Tween.to = function to(targets, vars) {
                            return new Tween(targets, vars, arguments[2]);
                        };
                        Tween.from = function from(targets, vars) {
                            return new Tween(targets, _parseVars(arguments, 1));
                        };
                        Tween.delayedCall = function delayedCall(delay, callback, params, scope) {
                            return new Tween(callback, 0, {
                                immediateRender: false,
                                lazy: false,
                                overwrite: false,
                                delay: delay,
                                onComplete: callback,
                                onReverseComplete: callback,
                                onCompleteParams: params,
                                onReverseCompleteParams: params,
                                callbackScope: scope
                            });
                        };
                        Tween.fromTo = function fromTo(targets, fromVars, toVars) {
                            return new Tween(targets, _parseVars(arguments, 2));
                        };
                        Tween.set = function set(targets, vars) {
                            vars.duration = 0;
                            vars.repeatDelay || (vars.repeat = 0);
                            return new Tween(targets, vars);
                        };
                        Tween.killTweensOf = function killTweensOf(targets, props, onlyActive) {
                            return _globalTimeline.killTweensOf(targets, props, onlyActive);
                        };
                        return Tween;
                    }(Animation);
                    exports1.TweenLite = exports1.TweenMax = exports1.Tween = Tween;
                    _setDefaults(Tween.prototype, {
                        _targets: [],
                        _lazy: 0,
                        _startAt: 0,
                        _op: 0,
                        _onInit: 0
                    }); //add the pertinent timeline methods to Tween instances so that users can chain conveniently and create a timeline automatically. (removed due to concerns that it'd ultimately add to more confusion especially for beginners)
                    // _forEachName("to,from,fromTo,set,call,add,addLabel,addPause", name => {
                    // 	Tween.prototype[name] = function() {
                    // 		let tl = new Timeline();
                    // 		return _addToTimeline(tl, this)[name].apply(tl, toArray(arguments));
                    // 	}
                    // });
                    //for backward compatibility. Leverage the timeline calls.
                    _forEachName("staggerTo,staggerFrom,staggerFromTo", function(name) {
                        Tween[name] = function() {
                            var tl = new Timeline(), params = _slice.call(arguments, 0);
                            params.splice(name === "staggerFromTo" ? 5 : 4, 0, 0);
                            return tl[name].apply(tl, params);
                        };
                    });
                    /*
         * --------------------------------------------------------------------------------------
         * PROPTWEEN
         * --------------------------------------------------------------------------------------
         */ var _setterPlain = function _setterPlain(target, property, value) {
                        return target[property] = value;
                    }, _setterFunc = function _setterFunc(target, property, value) {
                        return target[property](value);
                    }, _setterFuncWithParam = function _setterFuncWithParam(target, property, value, data) {
                        return target[property](data.fp, value);
                    }, _setterAttribute = function _setterAttribute(target, property, value) {
                        return target.setAttribute(property, value);
                    }, _getSetter = function _getSetter(target, property) {
                        return _isFunction(target[property]) ? _setterFunc : _isUndefined(target[property]) && target.setAttribute ? _setterAttribute : _setterPlain;
                    }, _renderPlain = function _renderPlain(ratio, data) {
                        return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 10000) / 10000, data);
                    }, _renderBoolean = function _renderBoolean(ratio, data) {
                        return data.set(data.t, data.p, !!(data.s + data.c * ratio), data);
                    }, _renderComplexString = function _renderComplexString(ratio, data) {
                        var pt = data._pt, s = "";
                        if (!ratio && data.b) {
                            //b = beginning string
                            s = data.b;
                        } else if (ratio === 1 && data.e) {
                            //e = ending string
                            s = data.e;
                        } else {
                            while(pt){
                                s = pt.p + (pt.m ? pt.m(pt.s + pt.c * ratio) : Math.round((pt.s + pt.c * ratio) * 10000) / 10000) + s; //we use the "p" property for the text inbetween (like a suffix). And in the context of a complex string, the modifier (m) is typically just Math.round(), like for RGB colors.
                                pt = pt._next;
                            }
                            s += data.c; //we use the "c" of the PropTween to store the final chunk of non-numeric text.
                        }
                        data.set(data.t, data.p, s, data);
                    }, _renderPropTweens = function _renderPropTweens(ratio, data) {
                        var pt = data._pt;
                        while(pt){
                            pt.r(ratio, pt.d);
                            pt = pt._next;
                        }
                    }, _addPluginModifier = function _addPluginModifier(modifier, tween, target, property) {
                        var pt = this._pt, next;
                        while(pt){
                            next = pt._next;
                            pt.p === property && pt.modifier(modifier, tween, target);
                            pt = next;
                        }
                    }, _killPropTweensOf = function _killPropTweensOf(property) {
                        var pt = this._pt, hasNonDependentRemaining, next;
                        while(pt){
                            next = pt._next;
                            if (pt.p === property && !pt.op || pt.op === property) {
                                _removeLinkedListItem(this, pt, "_pt");
                            } else if (!pt.dep) {
                                hasNonDependentRemaining = 1;
                            }
                            pt = next;
                        }
                        return !hasNonDependentRemaining;
                    }, _setterWithModifier = function _setterWithModifier(target, property, value, data) {
                        data.mSet(target, property, data.m.call(data.tween, value, data.mt), data);
                    }, _sortPropTweensByPriority = function _sortPropTweensByPriority(parent) {
                        var pt = parent._pt, next, pt2, first, last; //sorts the PropTween linked list in order of priority because some plugins need to do their work after ALL of the PropTweens were created (like RoundPropsPlugin and ModifiersPlugin)
                        while(pt){
                            next = pt._next;
                            pt2 = first;
                            while(pt2 && pt2.pr > pt.pr){
                                pt2 = pt2._next;
                            }
                            if (pt._prev = pt2 ? pt2._prev : last) {
                                pt._prev._next = pt;
                            } else {
                                first = pt;
                            }
                            if (pt._next = pt2) {
                                pt2._prev = pt;
                            } else {
                                last = pt;
                            }
                            pt = next;
                        }
                        parent._pt = first;
                    }; //PropTween key: t = target, p = prop, r = renderer, d = data, s = start, c = change, op = overwriteProperty (ONLY populated when it's different than p), pr = priority, _next/_prev for the linked list siblings, set = setter, m = modifier, mSet = modifierSetter (the original setter, before a modifier was added)
                    exports1._sortPropTweensByPriority = _sortPropTweensByPriority;
                    exports1._renderComplexString = _renderComplexString;
                    exports1._getSetter = _getSetter;
                    var PropTween = /*#__PURE__*/ function() {
                        function PropTween(next, target, prop, start, change, renderer, data, setter, priority) {
                            this.t = target;
                            this.s = start;
                            this.c = change;
                            this.p = prop;
                            this.r = renderer || _renderPlain;
                            this.d = data || this;
                            this.set = setter || _setterPlain;
                            this.pr = priority || 0;
                            this._next = next;
                            if (next) {
                                next._prev = this;
                            }
                        }
                        var _proto4 = PropTween.prototype;
                        _proto4.modifier = function modifier(func, tween, target) {
                            this.mSet = this.mSet || this.set; //in case it was already set (a PropTween can only have one modifier)
                            this.set = _setterWithModifier;
                            this.m = func;
                            this.mt = target; //modifier target
                            this.tween = tween;
                        };
                        return PropTween;
                    }(); //Initialization tasks
                    exports1.PropTween = PropTween;
                    _forEachName(_callbackNames + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(name) {
                        return _reservedProps[name] = 1;
                    });
                    _globals.TweenMax = _globals.TweenLite = Tween;
                    _globals.TimelineLite = _globals.TimelineMax = Timeline;
                    _globalTimeline = new Timeline({
                        sortChildren: false,
                        defaults: _defaults,
                        autoRemoveChildren: true,
                        id: "root",
                        smoothChildTiming: true
                    });
                    _config.stringFilter = _colorStringFilter;
                    /*
         * --------------------------------------------------------------------------------------
         * GSAP
         * --------------------------------------------------------------------------------------
         */ var _gsap = {
                        registerPlugin: function registerPlugin() {
                            for(var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++){
                                args[_key2] = arguments[_key2];
                            }
                            args.forEach(function(config) {
                                return _createPlugin(config);
                            });
                        },
                        timeline: function timeline(vars) {
                            return new Timeline(vars);
                        },
                        getTweensOf: function getTweensOf(targets, onlyActive) {
                            return _globalTimeline.getTweensOf(targets, onlyActive);
                        },
                        getProperty: function getProperty(target, property, unit, uncache) {
                            _isString(target) && (target = toArray(target)[0]); //in case selector text or an array is passed in
                            var getter = _getCache(target || {}).get, format = unit ? _passThrough : _numericIfPossible;
                            unit === "native" && (unit = "");
                            return !target ? target : !property ? function(property, unit, uncache) {
                                return format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
                            } : format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
                        },
                        quickSetter: function quickSetter(target, property, unit) {
                            target = toArray(target);
                            if (target.length > 1) {
                                var setters = target.map(function(t) {
                                    return gsap.quickSetter(t, property, unit);
                                }), l = setters.length;
                                return function(value) {
                                    var i = l;
                                    while(i--){
                                        setters[i](value);
                                    }
                                };
                            }
                            target = target[0] || {};
                            var Plugin = _plugins[property], cache = _getCache(target), p = cache.harness && (cache.harness.aliases || {})[property] || property, // in case it's an alias, like "rotate" for "rotation".
                            setter = Plugin ? function(value) {
                                var p = new Plugin();
                                _quickTween._pt = 0;
                                p.init(target, unit ? value + unit : value, _quickTween, 0, [
                                    target
                                ]);
                                p.render(1, p);
                                _quickTween._pt && _renderPropTweens(1, _quickTween);
                            } : cache.set(target, p);
                            return Plugin ? setter : function(value) {
                                return setter(target, p, unit ? value + unit : value, cache, 1);
                            };
                        },
                        isTweening: function isTweening(targets) {
                            return _globalTimeline.getTweensOf(targets, true).length > 0;
                        },
                        defaults: function defaults(value) {
                            value && value.ease && (value.ease = _parseEase(value.ease, _defaults.ease));
                            return _mergeDeep(_defaults, value || {});
                        },
                        config: function config(value) {
                            return _mergeDeep(_config, value || {});
                        },
                        registerEffect: function registerEffect(_ref2) {
                            var name = _ref2.name, effect = _ref2.effect, plugins = _ref2.plugins, defaults = _ref2.defaults, extendTimeline = _ref2.extendTimeline;
                            (plugins || "").split(",").forEach(function(pluginName) {
                                return pluginName && !_plugins[pluginName] && !_globals[pluginName] && _warn(name + " effect requires " + pluginName + " plugin.");
                            });
                            _effects[name] = function(targets, vars, tl) {
                                return effect(toArray(targets), _setDefaults(vars || {}, defaults), tl);
                            };
                            if (extendTimeline) {
                                Timeline.prototype[name] = function(targets, vars, position) {
                                    return this.add(_effects[name](targets, _isObject(vars) ? vars : (position = vars) && {}, this), position);
                                };
                            }
                        },
                        registerEase: function registerEase(name, ease) {
                            _easeMap[name] = _parseEase(ease);
                        },
                        parseEase: function parseEase(ease, defaultEase) {
                            return arguments.length ? _parseEase(ease, defaultEase) : _easeMap;
                        },
                        getById: function getById(id) {
                            return _globalTimeline.getById(id);
                        },
                        exportRoot: function exportRoot(vars, includeDelayedCalls) {
                            if (vars === void 0) {
                                vars = {};
                            }
                            var tl = new Timeline(vars), child, next;
                            tl.smoothChildTiming = _isNotFalse(vars.smoothChildTiming);
                            _globalTimeline.remove(tl);
                            tl._dp = 0; //otherwise it'll get re-activated when adding children and be re-introduced into _globalTimeline's linked list (then added to itself).
                            tl._time = tl._tTime = _globalTimeline._time;
                            child = _globalTimeline._first;
                            while(child){
                                next = child._next;
                                if (includeDelayedCalls || !(!child._dur && child instanceof Tween && child.vars.onComplete === child._targets[0])) {
                                    _addToTimeline(tl, child, child._start - child._delay);
                                }
                                child = next;
                            }
                            _addToTimeline(_globalTimeline, tl, 0);
                            return tl;
                        },
                        utils: {
                            wrap: wrap,
                            wrapYoyo: wrapYoyo,
                            distribute: distribute,
                            random: random,
                            snap: snap,
                            normalize: normalize,
                            getUnit: getUnit,
                            clamp: clamp,
                            splitColor: splitColor,
                            toArray: toArray,
                            mapRange: mapRange,
                            pipe: pipe,
                            unitize: unitize,
                            interpolate: interpolate,
                            shuffle: shuffle
                        },
                        install: _install,
                        effects: _effects,
                        ticker: _ticker,
                        updateRoot: Timeline.updateRoot,
                        plugins: _plugins,
                        globalTimeline: _globalTimeline,
                        core: {
                            PropTween: PropTween,
                            globals: _addGlobal,
                            Tween: Tween,
                            Timeline: Timeline,
                            Animation: Animation,
                            getCache: _getCache,
                            _removeLinkedListItem: _removeLinkedListItem,
                            suppressOverwrites: function suppressOverwrites(value) {
                                return _suppressOverwrites = value;
                            }
                        }
                    };
                    _forEachName("to,from,fromTo,delayedCall,set,killTweensOf", function(name) {
                        return _gsap[name] = Tween[name];
                    });
                    _ticker.add(Timeline.updateRoot);
                    _quickTween = _gsap.to({}, {
                        duration: 0
                    }); // ---- EXTRA PLUGINS --------------------------------------------------------
                    var _getPluginPropTween = function _getPluginPropTween(plugin, prop) {
                        var pt = plugin._pt;
                        while(pt && pt.p !== prop && pt.op !== prop && pt.fp !== prop){
                            pt = pt._next;
                        }
                        return pt;
                    }, _addModifiers = function _addModifiers(tween, modifiers) {
                        var targets = tween._targets, p, i, pt;
                        for(p in modifiers){
                            i = targets.length;
                            while(i--){
                                pt = tween._ptLookup[i][p];
                                if (pt && (pt = pt.d)) {
                                    if (pt._pt) {
                                        // is a plugin
                                        pt = _getPluginPropTween(pt, p);
                                    }
                                    pt && pt.modifier && pt.modifier(modifiers[p], tween, targets[i], p);
                                }
                            }
                        }
                    }, _buildModifierPlugin = function _buildModifierPlugin(name, modifier) {
                        return {
                            name: name,
                            rawVars: 1,
                            //don't pre-process function-based values or "random()" strings.
                            init: function init(target, vars, tween) {
                                tween._onInit = function(tween) {
                                    var temp, p;
                                    if (_isString(vars)) {
                                        temp = {};
                                        _forEachName(vars, function(name) {
                                            return temp[name] = 1;
                                        }); //if the user passes in a comma-delimited list of property names to roundProps, like "x,y", we round to whole numbers.
                                        vars = temp;
                                    }
                                    if (modifier) {
                                        temp = {};
                                        for(p in vars){
                                            temp[p] = modifier(vars[p]);
                                        }
                                        vars = temp;
                                    }
                                    _addModifiers(tween, vars);
                                };
                            }
                        };
                    }; //register core plugins
                    var gsap = _gsap.registerPlugin({
                        name: "attr",
                        init: function init(target, vars, tween, index, targets) {
                            var p, pt;
                            for(p in vars){
                                pt = this.add(target, "setAttribute", (target.getAttribute(p) || 0) + "", vars[p], index, targets, 0, 0, p);
                                pt && (pt.op = p);
                                this._props.push(p);
                            }
                        }
                    }, {
                        name: "endArray",
                        init: function init(target, value) {
                            var i = value.length;
                            while(i--){
                                this.add(target, i, target[i] || 0, value[i]);
                            }
                        }
                    }, _buildModifierPlugin("roundProps", _roundModifier), _buildModifierPlugin("modifiers"), _buildModifierPlugin("snap", snap)) || _gsap; //to prevent the core plugins from being dropped via aggressive tree shaking, we must include them in the variable declaration in this way.
                    exports1.default = exports1.gsap = gsap;
                    Tween.version = Timeline.version = gsap.version = "3.6.0";
                    _coreReady = 1;
                    if (_windowExists()) {
                        _wake();
                    }
                    var Power0 = _easeMap.Power0, Power1 = _easeMap.Power1, Power2 = _easeMap.Power2, Power3 = _easeMap.Power3, Power4 = _easeMap.Power4, Linear = _easeMap.Linear, Quad = _easeMap.Quad, Cubic = _easeMap.Cubic, Quart = _easeMap.Quart, Quint = _easeMap.Quint, Strong = _easeMap.Strong, Elastic = _easeMap.Elastic, Back = _easeMap.Back, SteppedEase = _easeMap.SteppedEase, Bounce = _easeMap.Bounce, Sine = _easeMap.Sine, Expo = _easeMap.Expo, Circ = _easeMap.Circ;
                    exports1.Circ = Circ;
                    exports1.Expo = Expo;
                    exports1.Sine = Sine;
                    exports1.Bounce = Bounce;
                    exports1.SteppedEase = SteppedEase;
                    exports1.Back = Back;
                    exports1.Elastic = Elastic;
                    exports1.Strong = Strong;
                    exports1.Quint = Quint;
                    exports1.Quart = Quart;
                    exports1.Cubic = Cubic;
                    exports1.Quad = Quad;
                    exports1.Linear = Linear;
                    exports1.Power4 = Power4;
                    exports1.Power3 = Power3;
                    exports1.Power2 = Power2;
                    exports1.Power1 = Power1;
                    exports1.Power0 = Power0;
                },
                {}
            ],
            "bp4Z": [
                function(require1, module1, exports1) {
                    "use strict";
                    Object.defineProperty(exports1, "__esModule", {
                        value: true
                    });
                    exports1.checkPrefix = exports1._createElement = exports1._getBBox = exports1.default = exports1.CSSPlugin = void 0;
                    var _gsapCore = require1("./gsap-core.js");
                    /*!
         * CSSPlugin 3.6.0
         * https://greensock.com
         *
         * Copyright 2008-2021, GreenSock. All rights reserved.
         * Subject to the terms at https://greensock.com/standard-license or for
         * Club GreenSock members, the agreement issued with that membership.
         * @author: Jack Doyle, jack@greensock.com
        */ /* eslint-disable */ var _win, _doc, _docElement, _pluginInitted, _tempDiv, _tempDivStyler, _recentSetterPlugin, _windowExists = function _windowExists() {
                        return "undefined" !== "undefined";
                    }, _transformProps = {}, _RAD2DEG = 180 / Math.PI, _DEG2RAD = Math.PI / 180, _atan2 = Math.atan2, _bigNum = 1e8, _capsExp = /([A-Z])/g, _horizontalExp = /(?:left|right|width|margin|padding|x)/i, _complexExp = /[\s,\(]\S/, _propertyAliases = {
                        autoAlpha: "opacity,visibility",
                        scale: "scaleX,scaleY",
                        alpha: "opacity"
                    }, _renderCSSProp = function _renderCSSProp(ratio, data) {
                        return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u, data);
                    }, _renderPropWithEnd = function _renderPropWithEnd(ratio, data) {
                        return data.set(data.t, data.p, ratio === 1 ? data.e : Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u, data);
                    }, _renderCSSPropWithBeginning = function _renderCSSPropWithBeginning(ratio, data) {
                        return data.set(data.t, data.p, ratio ? Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u : data.b, data);
                    }, //if units change, we need a way to render the original unit/value when the tween goes all the way back to the beginning (ratio:0)
                    _renderRoundedCSSProp = function _renderRoundedCSSProp(ratio, data) {
                        var value = data.s + data.c * ratio;
                        data.set(data.t, data.p, ~~(value + (value < 0 ? -.5 : .5)) + data.u, data);
                    }, _renderNonTweeningValue = function _renderNonTweeningValue(ratio, data) {
                        return data.set(data.t, data.p, ratio ? data.e : data.b, data);
                    }, _renderNonTweeningValueOnlyAtEnd = function _renderNonTweeningValueOnlyAtEnd(ratio, data) {
                        return data.set(data.t, data.p, ratio !== 1 ? data.b : data.e, data);
                    }, _setterCSSStyle = function _setterCSSStyle(target, property, value) {
                        return target.style[property] = value;
                    }, _setterCSSProp = function _setterCSSProp(target, property, value) {
                        return target.style.setProperty(property, value);
                    }, _setterTransform = function _setterTransform(target, property, value) {
                        return target._gsap[property] = value;
                    }, _setterScale = function _setterScale(target, property, value) {
                        return target._gsap.scaleX = target._gsap.scaleY = value;
                    }, _setterScaleWithRender = function _setterScaleWithRender(target, property, value, data, ratio) {
                        var cache = target._gsap;
                        cache.scaleX = cache.scaleY = value;
                        cache.renderTransform(ratio, cache);
                    }, _setterTransformWithRender = function _setterTransformWithRender(target, property, value, data, ratio) {
                        var cache = target._gsap;
                        cache[property] = value;
                        cache.renderTransform(ratio, cache);
                    }, _transformProp = "transform", _transformOriginProp = _transformProp + "Origin", _supports3D, _createElement = function _createElement(type, ns) {
                        var e = _doc.createElementNS ? _doc.createElementNS((ns || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), type) : _doc.createElement(type); //some servers swap in https for http in the namespace which can break things, making "style" inaccessible.
                        return e.style ? e : _doc.createElement(type); //some environments won't allow access to the element's style when created with a namespace in which case we default to the standard createElement() to work around the issue. Also note that when GSAP is embedded directly inside an SVG file, createElement() won't allow access to the style object in Firefox (see https://greensock.com/forums/topic/20215-problem-using-tweenmax-in-standalone-self-containing-svg-file-err-cannot-set-property-csstext-of-undefined/).
                    }, _getComputedProperty = function _getComputedProperty(target, property, skipPrefixFallback) {
                        var cs = getComputedStyle(target);
                        return cs[property] || cs.getPropertyValue(property.replace(_capsExp, "-$1").toLowerCase()) || cs.getPropertyValue(property) || !skipPrefixFallback && _getComputedProperty(target, _checkPropPrefix(property) || property, 1) || ""; //css variables may not need caps swapped out for dashes and lowercase.
                    }, _prefixes = "O,Moz,ms,Ms,Webkit".split(","), _checkPropPrefix = function _checkPropPrefix(property, element, preferPrefix) {
                        var e = element || _tempDiv, s = e.style, i = 5;
                        if (property in s && !preferPrefix) {
                            return property;
                        }
                        property = property.charAt(0).toUpperCase() + property.substr(1);
                        while(i-- && !(_prefixes[i] + property in s)){}
                        return i < 0 ? null : (i === 3 ? "ms" : i >= 0 ? _prefixes[i] : "") + property;
                    }, _initCore = function _initCore() {
                        if (_windowExists() && window.document) {
                            _win = window;
                            _doc = _win.document;
                            _docElement = _doc.documentElement;
                            _tempDiv = _createElement("div") || {
                                style: {}
                            };
                            _tempDivStyler = _createElement("div");
                            _transformProp = _checkPropPrefix(_transformProp);
                            _transformOriginProp = _transformProp + "Origin";
                            _tempDiv.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0"; //make sure to override certain properties that may contaminate measurements, in case the user has overreaching style sheets.
                            _supports3D = !!_checkPropPrefix("perspective");
                            _pluginInitted = 1;
                        }
                    }, _getBBoxHack = function _getBBoxHack(swapIfPossible) {
                        //works around issues in some browsers (like Firefox) that don't correctly report getBBox() on SVG elements inside a <defs> element and/or <mask>. We try creating an SVG, adding it to the documentElement and toss the element in there so that it's definitely part of the rendering tree, then grab the bbox and if it works, we actually swap out the original getBBox() method for our own that does these extra steps whenever getBBox is needed. This helps ensure that performance is optimal (only do all these extra steps when absolutely necessary...most elements don't need it).
                        var svg = _createElement("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), oldParent = this.parentNode, oldSibling = this.nextSibling, oldCSS = this.style.cssText, bbox;
                        _docElement.appendChild(svg);
                        svg.appendChild(this);
                        this.style.display = "block";
                        if (swapIfPossible) {
                            try {
                                bbox = this.getBBox();
                                this._gsapBBox = this.getBBox; //store the original
                                this.getBBox = _getBBoxHack;
                            } catch (e) {}
                        } else if (this._gsapBBox) {
                            bbox = this._gsapBBox();
                        }
                        if (oldParent) {
                            if (oldSibling) {
                                oldParent.insertBefore(this, oldSibling);
                            } else {
                                oldParent.appendChild(this);
                            }
                        }
                        _docElement.removeChild(svg);
                        this.style.cssText = oldCSS;
                        return bbox;
                    }, _getAttributeFallbacks = function _getAttributeFallbacks(target, attributesArray) {
                        var i = attributesArray.length;
                        while(i--){
                            if (target.hasAttribute(attributesArray[i])) {
                                return target.getAttribute(attributesArray[i]);
                            }
                        }
                    }, _getBBox = function _getBBox(target) {
                        var bounds;
                        try {
                            bounds = target.getBBox(); //Firefox throws errors if you try calling getBBox() on an SVG element that's not rendered (like in a <symbol> or <defs>). https://bugzilla.mozilla.org/show_bug.cgi?id=612118
                        } catch (error) {
                            bounds = _getBBoxHack.call(target, true);
                        }
                        bounds && (bounds.width || bounds.height) || target.getBBox === _getBBoxHack || (bounds = _getBBoxHack.call(target, true)); //some browsers (like Firefox) misreport the bounds if the element has zero width and height (it just assumes it's at x:0, y:0), thus we need to manually grab the position in that case.
                        return bounds && !bounds.width && !bounds.x && !bounds.y ? {
                            x: +_getAttributeFallbacks(target, [
                                "x",
                                "cx",
                                "x1"
                            ]) || 0,
                            y: +_getAttributeFallbacks(target, [
                                "y",
                                "cy",
                                "y1"
                            ]) || 0,
                            width: 0,
                            height: 0
                        } : bounds;
                    }, _isSVG = function _isSVG(e) {
                        return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && _getBBox(e));
                    }, //reports if the element is an SVG on which getBBox() actually works
                    _removeProperty = function _removeProperty(target, property) {
                        if (property) {
                            var style = target.style;
                            if (property in _transformProps && property !== _transformOriginProp) {
                                property = _transformProp;
                            }
                            if (style.removeProperty) {
                                if (property.substr(0, 2) === "ms" || property.substr(0, 6) === "webkit") {
                                    //Microsoft and some Webkit browsers don't conform to the standard of capitalizing the first prefix character, so we adjust so that when we prefix the caps with a dash, it's correct (otherwise it'd be "ms-transform" instead of "-ms-transform" for IE9, for example)
                                    property = "-" + property;
                                }
                                style.removeProperty(property.replace(_capsExp, "-$1").toLowerCase());
                            } else {
                                //note: old versions of IE use "removeAttribute()" instead of "removeProperty()"
                                style.removeAttribute(property);
                            }
                        }
                    }, _addNonTweeningPT = function _addNonTweeningPT(plugin, target, property, beginning, end, onlySetAtEnd) {
                        var pt = new _gsapCore.PropTween(plugin._pt, target, property, 0, 1, onlySetAtEnd ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue);
                        plugin._pt = pt;
                        pt.b = beginning;
                        pt.e = end;
                        plugin._props.push(property);
                        return pt;
                    }, _nonConvertibleUnits = {
                        deg: 1,
                        rad: 1,
                        turn: 1
                    }, //takes a single value like 20px and converts it to the unit specified, like "%", returning only the numeric amount.
                    _convertToUnit = function _convertToUnit(target, property, value, unit) {
                        var curValue = parseFloat(value) || 0, curUnit = (value + "").trim().substr((curValue + "").length) || "px", // some browsers leave extra whitespace at the beginning of CSS variables, hence the need to trim()
                        style = _tempDiv.style, horizontal = _horizontalExp.test(property), isRootSVG = target.tagName.toLowerCase() === "svg", measureProperty = (isRootSVG ? "client" : "offset") + (horizontal ? "Width" : "Height"), amount = 100, toPixels = unit === "px", toPercent = unit === "%", px, parent, cache, isSVG;
                        if (unit === curUnit || !curValue || _nonConvertibleUnits[unit] || _nonConvertibleUnits[curUnit]) {
                            return curValue;
                        }
                        curUnit !== "px" && !toPixels && (curValue = _convertToUnit(target, property, value, "px"));
                        isSVG = target.getCTM && _isSVG(target);
                        if ((toPercent || curUnit === "%") && (_transformProps[property] || ~property.indexOf("adius"))) {
                            px = isSVG ? target.getBBox()[horizontal ? "width" : "height"] : target[measureProperty];
                            return (0, _gsapCore._round)(toPercent ? curValue / px * amount : curValue / 100 * px);
                        }
                        style[horizontal ? "width" : "height"] = amount + (toPixels ? curUnit : unit);
                        parent = ~property.indexOf("adius") || unit === "em" && target.appendChild && !isRootSVG ? target : target.parentNode;
                        if (isSVG) {
                            parent = (target.ownerSVGElement || {}).parentNode;
                        }
                        if (!parent || parent === _doc || !parent.appendChild) {
                            parent = _doc.body;
                        }
                        cache = parent._gsap;
                        if (cache && toPercent && cache.width && horizontal && cache.time === _gsapCore._ticker.time) {
                            return (0, _gsapCore._round)(curValue / cache.width * amount);
                        } else {
                            (toPercent || curUnit === "%") && (style.position = _getComputedProperty(target, "position"));
                            parent === target && (style.position = "static"); // like for borderRadius, if it's a % we must have it relative to the target itself but that may not have position: relative or position: absolute in which case it'd go up the chain until it finds its offsetParent (bad). position: static protects against that.
                            parent.appendChild(_tempDiv);
                            px = _tempDiv[measureProperty];
                            parent.removeChild(_tempDiv);
                            style.position = "absolute";
                            if (horizontal && toPercent) {
                                cache = (0, _gsapCore._getCache)(parent);
                                cache.time = _gsapCore._ticker.time;
                                cache.width = parent[measureProperty];
                            }
                        }
                        return (0, _gsapCore._round)(toPixels ? px * curValue / amount : px && curValue ? amount / px * curValue : 0);
                    }, _get = function _get(target, property, unit, uncache) {
                        var value;
                        _pluginInitted || _initCore();
                        if (property in _propertyAliases && property !== "transform") {
                            property = _propertyAliases[property];
                            if (~property.indexOf(",")) {
                                property = property.split(",")[0];
                            }
                        }
                        if (_transformProps[property] && property !== "transform") {
                            value = _parseTransform(target, uncache);
                            value = property !== "transformOrigin" ? value[property] : _firstTwoOnly(_getComputedProperty(target, _transformOriginProp)) + " " + value.zOrigin + "px";
                        } else {
                            value = target.style[property];
                            if (!value || value === "auto" || uncache || ~(value + "").indexOf("calc(")) {
                                value = _specialProps[property] && _specialProps[property](target, property, unit) || _getComputedProperty(target, property) || (0, _gsapCore._getProperty)(target, property) || (property === "opacity" ? 1 : 0); // note: some browsers, like Firefox, don't report borderRadius correctly! Instead, it only reports every corner like  borderTopLeftRadius
                            }
                        }
                        return unit && !~(value + "").trim().indexOf(" ") ? _convertToUnit(target, property, value, unit) + unit : value;
                    }, _tweenComplexCSSString = function _tweenComplexCSSString(target, prop, start, end) {
                        //note: we call _tweenComplexCSSString.call(pluginInstance...) to ensure that it's scoped properly. We may call it from within a plugin too, thus "this" would refer to the plugin.
                        if (!start || start === "none") {
                            // some browsers like Safari actually PREFER the prefixed property and mis-report the unprefixed value like clipPath (BUG). In other words, even though clipPath exists in the style ("clipPath" in target.style) and it's set in the CSS properly (along with -webkit-clip-path), Safari reports clipPath as "none" whereas WebkitClipPath reports accurately like "ellipse(100% 0% at 50% 0%)", so in this case we must SWITCH to using the prefixed property instead. See https://greensock.com/forums/topic/18310-clippath-doesnt-work-on-ios/
                            var p = _checkPropPrefix(prop, target, 1), s = p && _getComputedProperty(target, p, 1);
                            if (s && s !== start) {
                                prop = p;
                                start = s;
                            } else if (prop === "borderColor") {
                                start = _getComputedProperty(target, "borderTopColor"); // Firefox bug: always reports "borderColor" as "", so we must fall back to borderTopColor. See https://greensock.com/forums/topic/24583-how-to-return-colors-that-i-had-after-reverse/
                            }
                        }
                        var pt = new _gsapCore.PropTween(this._pt, target.style, prop, 0, 1, _gsapCore._renderComplexString), index = 0, matchIndex = 0, a, result, startValues, startNum, color, startValue, endValue, endNum, chunk, endUnit, startUnit, relative, endValues;
                        pt.b = start;
                        pt.e = end;
                        start += ""; //ensure values are strings
                        end += "";
                        if (end === "auto") {
                            target.style[prop] = end;
                            end = _getComputedProperty(target, prop) || end;
                            target.style[prop] = start;
                        }
                        a = [
                            start,
                            end
                        ];
                        (0, _gsapCore._colorStringFilter)(a); //pass an array with the starting and ending values and let the filter do whatever it needs to the values. If colors are found, it returns true and then we must match where the color shows up order-wise because for things like boxShadow, sometimes the browser provides the computed values with the color FIRST, but the user provides it with the color LAST, so flip them if necessary. Same for drop-shadow().
                        start = a[0];
                        end = a[1];
                        startValues = start.match(_gsapCore._numWithUnitExp) || [];
                        endValues = end.match(_gsapCore._numWithUnitExp) || [];
                        if (endValues.length) {
                            while(result = _gsapCore._numWithUnitExp.exec(end)){
                                endValue = result[0];
                                chunk = end.substring(index, result.index);
                                if (color) {
                                    color = (color + 1) % 5;
                                } else if (chunk.substr(-5) === "rgba(" || chunk.substr(-5) === "hsla(") {
                                    color = 1;
                                }
                                if (endValue !== (startValue = startValues[matchIndex++] || "")) {
                                    startNum = parseFloat(startValue) || 0;
                                    startUnit = startValue.substr((startNum + "").length);
                                    relative = endValue.charAt(1) === "=" ? +(endValue.charAt(0) + "1") : 0;
                                    if (relative) {
                                        endValue = endValue.substr(2);
                                    }
                                    endNum = parseFloat(endValue);
                                    endUnit = endValue.substr((endNum + "").length);
                                    index = _gsapCore._numWithUnitExp.lastIndex - endUnit.length;
                                    if (!endUnit) {
                                        //if something like "perspective:300" is passed in and we must add a unit to the end
                                        endUnit = endUnit || _gsapCore._config.units[prop] || startUnit;
                                        if (index === end.length) {
                                            end += endUnit;
                                            pt.e += endUnit;
                                        }
                                    }
                                    if (startUnit !== endUnit) {
                                        startNum = _convertToUnit(target, prop, startValue, endUnit) || 0;
                                    } //these nested PropTweens are handled in a special way - we'll never actually call a render or setter method on them. We'll just loop through them in the parent complex string PropTween's render method.
                                    pt._pt = {
                                        _next: pt._pt,
                                        p: chunk || matchIndex === 1 ? chunk : ",",
                                        //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
                                        s: startNum,
                                        c: relative ? relative * endNum : endNum - startNum,
                                        m: color && color < 4 || prop === "zIndex" ? Math.round : 0
                                    };
                                }
                            }
                            pt.c = index < end.length ? end.substring(index, end.length) : ""; //we use the "c" of the PropTween to store the final part of the string (after the last number)
                        } else {
                            pt.r = prop === "display" && end === "none" ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue;
                        }
                        _gsapCore._relExp.test(end) && (pt.e = 0); //if the end string contains relative values or dynamic random(...) values, delete the end it so that on the final render we don't actually set it to the string with += or -= characters (forces it to use the calculated value).
                        this._pt = pt; //start the linked list with this new PropTween. Remember, we call _tweenComplexCSSString.call(pluginInstance...) to ensure that it's scoped properly. We may call it from within another plugin too, thus "this" would refer to the plugin.
                        return pt;
                    }, _keywordToPercent = {
                        top: "0%",
                        bottom: "100%",
                        left: "0%",
                        right: "100%",
                        center: "50%"
                    }, _convertKeywordsToPercentages = function _convertKeywordsToPercentages(value) {
                        var split = value.split(" "), x = split[0], y = split[1] || "50%";
                        if (x === "top" || x === "bottom" || y === "left" || y === "right") {
                            //the user provided them in the wrong order, so flip them
                            value = x;
                            x = y;
                            y = value;
                        }
                        split[0] = _keywordToPercent[x] || x;
                        split[1] = _keywordToPercent[y] || y;
                        return split.join(" ");
                    }, _renderClearProps = function _renderClearProps(ratio, data) {
                        if (data.tween && data.tween._time === data.tween._dur) {
                            var target = data.t, style = target.style, props = data.u, cache = target._gsap, prop, clearTransforms, i;
                            if (props === "all" || props === true) {
                                style.cssText = "";
                                clearTransforms = 1;
                            } else {
                                props = props.split(",");
                                i = props.length;
                                while(--i > -1){
                                    prop = props[i];
                                    if (_transformProps[prop]) {
                                        clearTransforms = 1;
                                        prop = prop === "transformOrigin" ? _transformOriginProp : _transformProp;
                                    }
                                    _removeProperty(target, prop);
                                }
                            }
                            if (clearTransforms) {
                                _removeProperty(target, _transformProp);
                                if (cache) {
                                    cache.svg && target.removeAttribute("transform");
                                    _parseTransform(target, 1); // force all the cached values back to "normal"/identity, otherwise if there's another tween that's already set to render transforms on this element, it could display the wrong values.
                                    cache.uncache = 1;
                                }
                            }
                        }
                    }, // note: specialProps should return 1 if (and only if) they have a non-zero priority. It indicates we need to sort the linked list.
                    _specialProps = {
                        clearProps: function clearProps(plugin, target, property, endValue, tween) {
                            if (tween.data !== "isFromStart") {
                                var pt = plugin._pt = new _gsapCore.PropTween(plugin._pt, target, property, 0, 0, _renderClearProps);
                                pt.u = endValue;
                                pt.pr = -10;
                                pt.tween = tween;
                                plugin._props.push(property);
                                return 1;
                            }
                        }
                    }, /*
           * --------------------------------------------------------------------------------------
           * TRANSFORMS
           * --------------------------------------------------------------------------------------
           */ _identity2DMatrix = [
                        1,
                        0,
                        0,
                        1,
                        0,
                        0
                    ], _rotationalProperties = {}, _isNullTransform = function _isNullTransform(value) {
                        return value === "matrix(1, 0, 0, 1, 0, 0)" || value === "none" || !value;
                    }, _getComputedTransformMatrixAsArray = function _getComputedTransformMatrixAsArray(target) {
                        var matrixString = _getComputedProperty(target, _transformProp);
                        return _isNullTransform(matrixString) ? _identity2DMatrix : matrixString.substr(7).match(_gsapCore._numExp).map(_gsapCore._round);
                    }, _getMatrix = function _getMatrix(target, force2D) {
                        var cache = target._gsap || (0, _gsapCore._getCache)(target), style = target.style, matrix = _getComputedTransformMatrixAsArray(target), parent, nextSibling, temp, addedToDOM;
                        if (cache.svg && target.getAttribute("transform")) {
                            temp = target.transform.baseVal.consolidate().matrix; //ensures that even complex values like "translate(50,60) rotate(135,0,0)" are parsed because it mashes it into a matrix.
                            matrix = [
                                temp.a,
                                temp.b,
                                temp.c,
                                temp.d,
                                temp.e,
                                temp.f
                            ];
                            return matrix.join(",") === "1,0,0,1,0,0" ? _identity2DMatrix : matrix;
                        } else if (matrix === _identity2DMatrix && !target.offsetParent && target !== _docElement && !cache.svg) {
                            //note: if offsetParent is null, that means the element isn't in the normal document flow, like if it has display:none or one of its ancestors has display:none). Firefox returns null for getComputedStyle() if the element is in an iframe that has display:none. https://bugzilla.mozilla.org/show_bug.cgi?id=548397
                            //browsers don't report transforms accurately unless the element is in the DOM and has a display value that's not "none". Firefox and Microsoft browsers have a partial bug where they'll report transforms even if display:none BUT not any percentage-based values like translate(-50%, 8px) will be reported as if it's translate(0, 8px).
                            temp = style.display;
                            style.display = "block";
                            parent = target.parentNode;
                            if (!parent || !target.offsetParent) {
                                // note: in 3.3.0 we switched target.offsetParent to _doc.body.contains(target) to avoid [sometimes unnecessary] MutationObserver calls but that wasn't adequate because there are edge cases where nested position: fixed elements need to get reparented to accurately sense transforms. See https://github.com/greensock/GSAP/issues/388 and https://github.com/greensock/GSAP/issues/375
                                addedToDOM = 1; //flag
                                nextSibling = target.nextSibling;
                                _docElement.appendChild(target); //we must add it to the DOM in order to get values properly
                            }
                            matrix = _getComputedTransformMatrixAsArray(target);
                            temp ? style.display = temp : _removeProperty(target, "display");
                            if (addedToDOM) {
                                nextSibling ? parent.insertBefore(target, nextSibling) : parent ? parent.appendChild(target) : _docElement.removeChild(target);
                            }
                        }
                        return force2D && matrix.length > 6 ? [
                            matrix[0],
                            matrix[1],
                            matrix[4],
                            matrix[5],
                            matrix[12],
                            matrix[13]
                        ] : matrix;
                    }, _applySVGOrigin = function _applySVGOrigin(target, origin, originIsAbsolute, smooth, matrixArray, pluginToAddPropTweensTo) {
                        var cache = target._gsap, matrix = matrixArray || _getMatrix(target, true), xOriginOld = cache.xOrigin || 0, yOriginOld = cache.yOrigin || 0, xOffsetOld = cache.xOffset || 0, yOffsetOld = cache.yOffset || 0, a = matrix[0], b = matrix[1], c = matrix[2], d = matrix[3], tx = matrix[4], ty = matrix[5], originSplit = origin.split(" "), xOrigin = parseFloat(originSplit[0]) || 0, yOrigin = parseFloat(originSplit[1]) || 0, bounds, determinant, x, y;
                        if (!originIsAbsolute) {
                            bounds = _getBBox(target);
                            xOrigin = bounds.x + (~originSplit[0].indexOf("%") ? xOrigin / 100 * bounds.width : xOrigin);
                            yOrigin = bounds.y + (~(originSplit[1] || originSplit[0]).indexOf("%") ? yOrigin / 100 * bounds.height : yOrigin);
                        } else if (matrix !== _identity2DMatrix && (determinant = a * d - b * c)) {
                            //if it's zero (like if scaleX and scaleY are zero), skip it to avoid errors with dividing by zero.
                            x = xOrigin * (d / determinant) + yOrigin * (-c / determinant) + (c * ty - d * tx) / determinant;
                            y = xOrigin * (-b / determinant) + yOrigin * (a / determinant) - (a * ty - b * tx) / determinant;
                            xOrigin = x;
                            yOrigin = y;
                        }
                        if (smooth || smooth !== false && cache.smooth) {
                            tx = xOrigin - xOriginOld;
                            ty = yOrigin - yOriginOld;
                            cache.xOffset = xOffsetOld + (tx * a + ty * c) - tx;
                            cache.yOffset = yOffsetOld + (tx * b + ty * d) - ty;
                        } else {
                            cache.xOffset = cache.yOffset = 0;
                        }
                        cache.xOrigin = xOrigin;
                        cache.yOrigin = yOrigin;
                        cache.smooth = !!smooth;
                        cache.origin = origin;
                        cache.originIsAbsolute = !!originIsAbsolute;
                        target.style[_transformOriginProp] = "0px 0px"; //otherwise, if someone sets  an origin via CSS, it will likely interfere with the SVG transform attribute ones (because remember, we're baking the origin into the matrix() value).
                        if (pluginToAddPropTweensTo) {
                            _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOrigin", xOriginOld, xOrigin);
                            _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOrigin", yOriginOld, yOrigin);
                            _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOffset", xOffsetOld, cache.xOffset);
                            _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOffset", yOffsetOld, cache.yOffset);
                        }
                        target.setAttribute("data-svg-origin", xOrigin + " " + yOrigin);
                    }, _parseTransform = function _parseTransform(target, uncache) {
                        var cache = target._gsap || new _gsapCore.GSCache(target);
                        if ("x" in cache && !uncache && !cache.uncache) {
                            return cache;
                        }
                        var style = target.style, invertedScaleX = cache.scaleX < 0, px = "px", deg = "deg", origin = _getComputedProperty(target, _transformOriginProp) || "0", x, y, z, scaleX, scaleY, rotation, rotationX, rotationY, skewX, skewY, perspective, xOrigin, yOrigin, matrix, angle, cos, sin, a, b, c, d, a12, a22, t1, t2, t3, a13, a23, a33, a42, a43, a32;
                        x = y = z = rotation = rotationX = rotationY = skewX = skewY = perspective = 0;
                        scaleX = scaleY = 1;
                        cache.svg = !!(target.getCTM && _isSVG(target));
                        matrix = _getMatrix(target, cache.svg);
                        if (cache.svg) {
                            t1 = !cache.uncache && target.getAttribute("data-svg-origin");
                            _applySVGOrigin(target, t1 || origin, !!t1 || cache.originIsAbsolute, cache.smooth !== false, matrix);
                        }
                        xOrigin = cache.xOrigin || 0;
                        yOrigin = cache.yOrigin || 0;
                        if (matrix !== _identity2DMatrix) {
                            a = matrix[0]; //a11
                            b = matrix[1]; //a21
                            c = matrix[2]; //a31
                            d = matrix[3]; //a41
                            x = a12 = matrix[4];
                            y = a22 = matrix[5]; //2D matrix
                            if (matrix.length === 6) {
                                scaleX = Math.sqrt(a * a + b * b);
                                scaleY = Math.sqrt(d * d + c * c);
                                rotation = a || b ? _atan2(b, a) * _RAD2DEG : 0; //note: if scaleX is 0, we cannot accurately measure rotation. Same for skewX with a scaleY of 0. Therefore, we default to the previously recorded value (or zero if that doesn't exist).
                                skewX = c || d ? _atan2(c, d) * _RAD2DEG + rotation : 0;
                                skewX && (scaleY *= Math.cos(skewX * _DEG2RAD));
                                if (cache.svg) {
                                    x -= xOrigin - (xOrigin * a + yOrigin * c);
                                    y -= yOrigin - (xOrigin * b + yOrigin * d);
                                } //3D matrix
                            } else {
                                a32 = matrix[6];
                                a42 = matrix[7];
                                a13 = matrix[8];
                                a23 = matrix[9];
                                a33 = matrix[10];
                                a43 = matrix[11];
                                x = matrix[12];
                                y = matrix[13];
                                z = matrix[14];
                                angle = _atan2(a32, a33);
                                rotationX = angle * _RAD2DEG; //rotationX
                                if (angle) {
                                    cos = Math.cos(-angle);
                                    sin = Math.sin(-angle);
                                    t1 = a12 * cos + a13 * sin;
                                    t2 = a22 * cos + a23 * sin;
                                    t3 = a32 * cos + a33 * sin;
                                    a13 = a12 * -sin + a13 * cos;
                                    a23 = a22 * -sin + a23 * cos;
                                    a33 = a32 * -sin + a33 * cos;
                                    a43 = a42 * -sin + a43 * cos;
                                    a12 = t1;
                                    a22 = t2;
                                    a32 = t3;
                                } //rotationY
                                angle = _atan2(-c, a33);
                                rotationY = angle * _RAD2DEG;
                                if (angle) {
                                    cos = Math.cos(-angle);
                                    sin = Math.sin(-angle);
                                    t1 = a * cos - a13 * sin;
                                    t2 = b * cos - a23 * sin;
                                    t3 = c * cos - a33 * sin;
                                    a43 = d * sin + a43 * cos;
                                    a = t1;
                                    b = t2;
                                    c = t3;
                                } //rotationZ
                                angle = _atan2(b, a);
                                rotation = angle * _RAD2DEG;
                                if (angle) {
                                    cos = Math.cos(angle);
                                    sin = Math.sin(angle);
                                    t1 = a * cos + b * sin;
                                    t2 = a12 * cos + a22 * sin;
                                    b = b * cos - a * sin;
                                    a22 = a22 * cos - a12 * sin;
                                    a = t1;
                                    a12 = t2;
                                }
                                if (rotationX && Math.abs(rotationX) + Math.abs(rotation) > 359.9) {
                                    //when rotationY is set, it will often be parsed as 180 degrees different than it should be, and rotationX and rotation both being 180 (it looks the same), so we adjust for that here.
                                    rotationX = rotation = 0;
                                    rotationY = 180 - rotationY;
                                }
                                scaleX = (0, _gsapCore._round)(Math.sqrt(a * a + b * b + c * c));
                                scaleY = (0, _gsapCore._round)(Math.sqrt(a22 * a22 + a32 * a32));
                                angle = _atan2(a12, a22);
                                skewX = Math.abs(angle) > 0.0002 ? angle * _RAD2DEG : 0;
                                perspective = a43 ? 1 / (a43 < 0 ? -a43 : a43) : 0;
                            }
                            if (cache.svg) {
                                //sense if there are CSS transforms applied on an SVG element in which case we must overwrite them when rendering. The transform attribute is more reliable cross-browser, but we can't just remove the CSS ones because they may be applied in a CSS rule somewhere (not just inline).
                                t1 = target.getAttribute("transform");
                                cache.forceCSS = target.setAttribute("transform", "") || !_isNullTransform(_getComputedProperty(target, _transformProp));
                                t1 && target.setAttribute("transform", t1);
                            }
                        }
                        if (Math.abs(skewX) > 90 && Math.abs(skewX) < 270) {
                            if (invertedScaleX) {
                                scaleX *= -1;
                                skewX += rotation <= 0 ? 180 : -180;
                                rotation += rotation <= 0 ? 180 : -180;
                            } else {
                                scaleY *= -1;
                                skewX += skewX <= 0 ? 180 : -180;
                            }
                        }
                        cache.x = x - ((cache.xPercent = x && (cache.xPercent || (Math.round(target.offsetWidth / 2) === Math.round(-x) ? -50 : 0))) ? target.offsetWidth * cache.xPercent / 100 : 0) + px;
                        cache.y = y - ((cache.yPercent = y && (cache.yPercent || (Math.round(target.offsetHeight / 2) === Math.round(-y) ? -50 : 0))) ? target.offsetHeight * cache.yPercent / 100 : 0) + px;
                        cache.z = z + px;
                        cache.scaleX = (0, _gsapCore._round)(scaleX);
                        cache.scaleY = (0, _gsapCore._round)(scaleY);
                        cache.rotation = (0, _gsapCore._round)(rotation) + deg;
                        cache.rotationX = (0, _gsapCore._round)(rotationX) + deg;
                        cache.rotationY = (0, _gsapCore._round)(rotationY) + deg;
                        cache.skewX = skewX + deg;
                        cache.skewY = skewY + deg;
                        cache.transformPerspective = perspective + px;
                        if (cache.zOrigin = parseFloat(origin.split(" ")[2]) || 0) {
                            style[_transformOriginProp] = _firstTwoOnly(origin);
                        }
                        cache.xOffset = cache.yOffset = 0;
                        cache.force3D = _gsapCore._config.force3D;
                        cache.renderTransform = cache.svg ? _renderSVGTransforms : _supports3D ? _renderCSSTransforms : _renderNon3DTransforms;
                        cache.uncache = 0;
                        return cache;
                    }, _firstTwoOnly = function _firstTwoOnly(value) {
                        return (value = value.split(" "))[0] + " " + value[1];
                    }, //for handling transformOrigin values, stripping out the 3rd dimension
                    _addPxTranslate = function _addPxTranslate(target, start, value) {
                        var unit = (0, _gsapCore.getUnit)(start);
                        return (0, _gsapCore._round)(parseFloat(start) + parseFloat(_convertToUnit(target, "x", value + "px", unit))) + unit;
                    }, _renderNon3DTransforms = function _renderNon3DTransforms(ratio, cache) {
                        cache.z = "0px";
                        cache.rotationY = cache.rotationX = "0deg";
                        cache.force3D = 0;
                        _renderCSSTransforms(ratio, cache);
                    }, _zeroDeg = "0deg", _zeroPx = "0px", _endParenthesis = ") ", _renderCSSTransforms = function _renderCSSTransforms(ratio, cache) {
                        var _ref = cache || this, xPercent = _ref.xPercent, yPercent = _ref.yPercent, x = _ref.x, y = _ref.y, z = _ref.z, rotation = _ref.rotation, rotationY = _ref.rotationY, rotationX = _ref.rotationX, skewX = _ref.skewX, skewY = _ref.skewY, scaleX = _ref.scaleX, scaleY = _ref.scaleY, transformPerspective = _ref.transformPerspective, force3D = _ref.force3D, target = _ref.target, zOrigin = _ref.zOrigin, transforms = "", use3D = force3D === "auto" && ratio && ratio !== 1 || force3D === true; // Safari has a bug that causes it not to render 3D transform-origin values properly, so we force the z origin to 0, record it in the cache, and then do the math here to offset the translate values accordingly (basically do the 3D transform-origin part manually)
                        if (zOrigin && (rotationX !== _zeroDeg || rotationY !== _zeroDeg)) {
                            var angle = parseFloat(rotationY) * _DEG2RAD, a13 = Math.sin(angle), a33 = Math.cos(angle), cos;
                            angle = parseFloat(rotationX) * _DEG2RAD;
                            cos = Math.cos(angle);
                            x = _addPxTranslate(target, x, a13 * cos * -zOrigin);
                            y = _addPxTranslate(target, y, -Math.sin(angle) * -zOrigin);
                            z = _addPxTranslate(target, z, a33 * cos * -zOrigin + zOrigin);
                        }
                        if (transformPerspective !== _zeroPx) {
                            transforms += "perspective(" + transformPerspective + _endParenthesis;
                        }
                        if (xPercent || yPercent) {
                            transforms += "translate(" + xPercent + "%, " + yPercent + "%) ";
                        }
                        if (use3D || x !== _zeroPx || y !== _zeroPx || z !== _zeroPx) {
                            transforms += z !== _zeroPx || use3D ? "translate3d(" + x + ", " + y + ", " + z + ") " : "translate(" + x + ", " + y + _endParenthesis;
                        }
                        if (rotation !== _zeroDeg) {
                            transforms += "rotate(" + rotation + _endParenthesis;
                        }
                        if (rotationY !== _zeroDeg) {
                            transforms += "rotateY(" + rotationY + _endParenthesis;
                        }
                        if (rotationX !== _zeroDeg) {
                            transforms += "rotateX(" + rotationX + _endParenthesis;
                        }
                        if (skewX !== _zeroDeg || skewY !== _zeroDeg) {
                            transforms += "skew(" + skewX + ", " + skewY + _endParenthesis;
                        }
                        if (scaleX !== 1 || scaleY !== 1) {
                            transforms += "scale(" + scaleX + ", " + scaleY + _endParenthesis;
                        }
                        target.style[_transformProp] = transforms || "translate(0, 0)";
                    }, _renderSVGTransforms = function _renderSVGTransforms(ratio, cache) {
                        var _ref2 = cache || this, xPercent = _ref2.xPercent, yPercent = _ref2.yPercent, x = _ref2.x, y = _ref2.y, rotation = _ref2.rotation, skewX = _ref2.skewX, skewY = _ref2.skewY, scaleX = _ref2.scaleX, scaleY = _ref2.scaleY, target = _ref2.target, xOrigin = _ref2.xOrigin, yOrigin = _ref2.yOrigin, xOffset = _ref2.xOffset, yOffset = _ref2.yOffset, forceCSS = _ref2.forceCSS, tx = parseFloat(x), ty = parseFloat(y), a11, a21, a12, a22, temp;
                        rotation = parseFloat(rotation);
                        skewX = parseFloat(skewX);
                        skewY = parseFloat(skewY);
                        if (skewY) {
                            //for performance reasons, we combine all skewing into the skewX and rotation values. Remember, a skewY of 10 degrees looks the same as a rotation of 10 degrees plus a skewX of 10 degrees.
                            skewY = parseFloat(skewY);
                            skewX += skewY;
                            rotation += skewY;
                        }
                        if (rotation || skewX) {
                            rotation *= _DEG2RAD;
                            skewX *= _DEG2RAD;
                            a11 = Math.cos(rotation) * scaleX;
                            a21 = Math.sin(rotation) * scaleX;
                            a12 = Math.sin(rotation - skewX) * -scaleY;
                            a22 = Math.cos(rotation - skewX) * scaleY;
                            if (skewX) {
                                skewY *= _DEG2RAD;
                                temp = Math.tan(skewX - skewY);
                                temp = Math.sqrt(1 + temp * temp);
                                a12 *= temp;
                                a22 *= temp;
                                if (skewY) {
                                    temp = Math.tan(skewY);
                                    temp = Math.sqrt(1 + temp * temp);
                                    a11 *= temp;
                                    a21 *= temp;
                                }
                            }
                            a11 = (0, _gsapCore._round)(a11);
                            a21 = (0, _gsapCore._round)(a21);
                            a12 = (0, _gsapCore._round)(a12);
                            a22 = (0, _gsapCore._round)(a22);
                        } else {
                            a11 = scaleX;
                            a22 = scaleY;
                            a21 = a12 = 0;
                        }
                        if (tx && !~(x + "").indexOf("px") || ty && !~(y + "").indexOf("px")) {
                            tx = _convertToUnit(target, "x", x, "px");
                            ty = _convertToUnit(target, "y", y, "px");
                        }
                        if (xOrigin || yOrigin || xOffset || yOffset) {
                            tx = (0, _gsapCore._round)(tx + xOrigin - (xOrigin * a11 + yOrigin * a12) + xOffset);
                            ty = (0, _gsapCore._round)(ty + yOrigin - (xOrigin * a21 + yOrigin * a22) + yOffset);
                        }
                        if (xPercent || yPercent) {
                            //The SVG spec doesn't support percentage-based translation in the "transform" attribute, so we merge it into the translation to simulate it.
                            temp = target.getBBox();
                            tx = (0, _gsapCore._round)(tx + xPercent / 100 * temp.width);
                            ty = (0, _gsapCore._round)(ty + yPercent / 100 * temp.height);
                        }
                        temp = "matrix(" + a11 + "," + a21 + "," + a12 + "," + a22 + "," + tx + "," + ty + ")";
                        target.setAttribute("transform", temp);
                        forceCSS && (target.style[_transformProp] = temp); //some browsers prioritize CSS transforms over the transform attribute. When we sense that the user has CSS transforms applied, we must overwrite them this way (otherwise some browser simply won't render the  transform attribute changes!)
                    }, _addRotationalPropTween = function _addRotationalPropTween(plugin, target, property, startNum, endValue, relative) {
                        var cap = 360, isString = (0, _gsapCore._isString)(endValue), endNum = parseFloat(endValue) * (isString && ~endValue.indexOf("rad") ? _RAD2DEG : 1), change = relative ? endNum * relative : endNum - startNum, finalValue = startNum + change + "deg", direction, pt;
                        if (isString) {
                            direction = endValue.split("_")[1];
                            if (direction === "short") {
                                change %= cap;
                                if (change !== change % (cap / 2)) {
                                    change += change < 0 ? cap : -cap;
                                }
                            }
                            if (direction === "cw" && change < 0) {
                                change = (change + cap * _bigNum) % cap - ~~(change / cap) * cap;
                            } else if (direction === "ccw" && change > 0) {
                                change = (change - cap * _bigNum) % cap - ~~(change / cap) * cap;
                            }
                        }
                        plugin._pt = pt = new _gsapCore.PropTween(plugin._pt, target, property, startNum, change, _renderPropWithEnd);
                        pt.e = finalValue;
                        pt.u = "deg";
                        plugin._props.push(property);
                        return pt;
                    }, _addRawTransformPTs = function _addRawTransformPTs(plugin, transforms, target) {
                        //for handling cases where someone passes in a whole transform string, like transform: "scale(2, 3) rotate(20deg) translateY(30em)"
                        var style = _tempDivStyler.style, startCache = target._gsap, exclude = "perspective,force3D,transformOrigin,svgOrigin", endCache, p, startValue, endValue, startNum, endNum, startUnit, endUnit;
                        style.cssText = getComputedStyle(target).cssText + ";position:absolute;display:block;"; //%-based translations will fail unless we set the width/height to match the original target (and padding/borders can affect it)
                        style[_transformProp] = transforms;
                        _doc.body.appendChild(_tempDivStyler);
                        endCache = _parseTransform(_tempDivStyler, 1);
                        for(p in _transformProps){
                            startValue = startCache[p];
                            endValue = endCache[p];
                            if (startValue !== endValue && exclude.indexOf(p) < 0) {
                                //tweening to no perspective gives very unintuitive results - just keep the same perspective in that case.
                                startUnit = (0, _gsapCore.getUnit)(startValue);
                                endUnit = (0, _gsapCore.getUnit)(endValue);
                                startNum = startUnit !== endUnit ? _convertToUnit(target, p, startValue, endUnit) : parseFloat(startValue);
                                endNum = parseFloat(endValue);
                                plugin._pt = new _gsapCore.PropTween(plugin._pt, startCache, p, startNum, endNum - startNum, _renderCSSProp);
                                plugin._pt.u = endUnit || 0;
                                plugin._props.push(p);
                            }
                        }
                        _doc.body.removeChild(_tempDivStyler);
                    }; // handle splitting apart padding, margin, borderWidth, and borderRadius into their 4 components. Firefox, for example, won't report borderRadius correctly - it will only do borderTopLeftRadius and the other corners. We also want to handle paddingTop, marginLeft, borderRightWidth, etc.
                    exports1._getBBox = _getBBox;
                    exports1.checkPrefix = _checkPropPrefix;
                    exports1._createElement = _createElement;
                    (0, _gsapCore._forEachName)("padding,margin,Width,Radius", function(name, index) {
                        var t = "Top", r = "Right", b = "Bottom", l = "Left", props = (index < 3 ? [
                            t,
                            r,
                            b,
                            l
                        ] : [
                            t + l,
                            t + r,
                            b + r,
                            b + l
                        ]).map(function(side) {
                            return index < 2 ? name + side : "border" + side + name;
                        });
                        _specialProps[index > 1 ? "border" + name : name] = function(plugin, target, property, endValue, tween) {
                            var a, vars;
                            if (arguments.length < 4) {
                                // getter, passed target, property, and unit (from _get())
                                a = props.map(function(prop) {
                                    return _get(plugin, prop, property);
                                });
                                vars = a.join(" ");
                                return vars.split(a[0]).length === 5 ? a[0] : vars;
                            }
                            a = (endValue + "").split(" ");
                            vars = {};
                            props.forEach(function(prop, i) {
                                return vars[prop] = a[i] = a[i] || a[(i - 1) / 2 | 0];
                            });
                            plugin.init(target, vars, tween);
                        };
                    });
                    var CSSPlugin = {
                        name: "css",
                        register: _initCore,
                        targetTest: function targetTest(target) {
                            return target.style && target.nodeType;
                        },
                        init: function init(target, vars, tween, index, targets) {
                            var props = this._props, style = target.style, startAt = tween.vars.startAt, startValue, endValue, endNum, startNum, type, specialProp, p, startUnit, endUnit, relative, isTransformRelated, transformPropTween, cache, smooth, hasPriority;
                            _pluginInitted || _initCore();
                            for(p in vars){
                                if (p === "autoRound") {
                                    continue;
                                }
                                endValue = vars[p];
                                if (_gsapCore._plugins[p] && (0, _gsapCore._checkPlugin)(p, vars, tween, index, target, targets)) {
                                    continue;
                                }
                                type = typeof endValue;
                                specialProp = _specialProps[p];
                                if (type === "function") {
                                    endValue = endValue.call(tween, index, target, targets);
                                    type = typeof endValue;
                                }
                                if (type === "string" && ~endValue.indexOf("random(")) {
                                    endValue = (0, _gsapCore._replaceRandom)(endValue);
                                }
                                if (specialProp) {
                                    specialProp(this, target, p, endValue, tween) && (hasPriority = 1);
                                } else if (p.substr(0, 2) === "--") {
                                    //CSS variable
                                    startValue = (getComputedStyle(target).getPropertyValue(p) + "").trim();
                                    endValue += "";
                                    startUnit = (0, _gsapCore.getUnit)(startValue);
                                    endUnit = (0, _gsapCore.getUnit)(endValue);
                                    endUnit ? startUnit !== endUnit && (startValue = _convertToUnit(target, p, startValue, endUnit) + endUnit) : startUnit && (endValue += startUnit);
                                    this.add(style, "setProperty", startValue, endValue, index, targets, 0, 0, p);
                                } else if (type !== "undefined") {
                                    if (startAt && p in startAt) {
                                        // in case someone hard-codes a complex value as the start, like top: "calc(2vh / 2)". Without this, it'd use the computed value (always in px)
                                        startValue = typeof startAt[p] === "function" ? startAt[p].call(tween, index, target, targets) : startAt[p];
                                        p in _gsapCore._config.units && !(0, _gsapCore.getUnit)(startValue) && (startValue += _gsapCore._config.units[p]); // for cases when someone passes in a unitless value like {x: 100}; if we try setting translate(100, 0px) it won't work.
                                        (startValue + "").charAt(1) === "=" && (startValue = _get(target, p)); // can't work with relative values
                                    } else {
                                        startValue = _get(target, p);
                                    }
                                    startNum = parseFloat(startValue);
                                    relative = type === "string" && endValue.charAt(1) === "=" ? +(endValue.charAt(0) + "1") : 0;
                                    relative && (endValue = endValue.substr(2));
                                    endNum = parseFloat(endValue);
                                    if (p in _propertyAliases) {
                                        if (p === "autoAlpha") {
                                            //special case where we control the visibility along with opacity. We still allow the opacity value to pass through and get tweened.
                                            if (startNum === 1 && _get(target, "visibility") === "hidden" && endNum) {
                                                //if visibility is initially set to "hidden", we should interpret that as intent to make opacity 0 (a convenience)
                                                startNum = 0;
                                            }
                                            _addNonTweeningPT(this, style, "visibility", startNum ? "inherit" : "hidden", endNum ? "inherit" : "hidden", !endNum);
                                        }
                                        if (p !== "scale" && p !== "transform") {
                                            p = _propertyAliases[p];
                                            ~p.indexOf(",") && (p = p.split(",")[0]);
                                        }
                                    }
                                    isTransformRelated = p in _transformProps; //--- TRANSFORM-RELATED ---
                                    if (isTransformRelated) {
                                        if (!transformPropTween) {
                                            cache = target._gsap;
                                            cache.renderTransform && !vars.parseTransform || _parseTransform(target, vars.parseTransform); // if, for example, gsap.set(... {transform:"translateX(50vw)"}), the _get() call doesn't parse the transform, thus cache.renderTransform won't be set yet so force the parsing of the transform here.
                                            smooth = vars.smoothOrigin !== false && cache.smooth;
                                            transformPropTween = this._pt = new _gsapCore.PropTween(this._pt, style, _transformProp, 0, 1, cache.renderTransform, cache, 0, -1); //the first time through, create the rendering PropTween so that it runs LAST (in the linked list, we keep adding to the beginning)
                                            transformPropTween.dep = 1; //flag it as dependent so that if things get killed/overwritten and this is the only PropTween left, we can safely kill the whole tween.
                                        }
                                        if (p === "scale") {
                                            this._pt = new _gsapCore.PropTween(this._pt, cache, "scaleY", cache.scaleY, relative ? relative * endNum : endNum - cache.scaleY);
                                            props.push("scaleY", p);
                                            p += "X";
                                        } else if (p === "transformOrigin") {
                                            endValue = _convertKeywordsToPercentages(endValue); //in case something like "left top" or "bottom right" is passed in. Convert to percentages.
                                            if (cache.svg) {
                                                _applySVGOrigin(target, endValue, 0, smooth, 0, this);
                                            } else {
                                                endUnit = parseFloat(endValue.split(" ")[2]) || 0; //handle the zOrigin separately!
                                                endUnit !== cache.zOrigin && _addNonTweeningPT(this, cache, "zOrigin", cache.zOrigin, endUnit);
                                                _addNonTweeningPT(this, style, p, _firstTwoOnly(startValue), _firstTwoOnly(endValue));
                                            }
                                            continue;
                                        } else if (p === "svgOrigin") {
                                            _applySVGOrigin(target, endValue, 1, smooth, 0, this);
                                            continue;
                                        } else if (p in _rotationalProperties) {
                                            _addRotationalPropTween(this, cache, p, startNum, endValue, relative);
                                            continue;
                                        } else if (p === "smoothOrigin") {
                                            _addNonTweeningPT(this, cache, "smooth", cache.smooth, endValue);
                                            continue;
                                        } else if (p === "force3D") {
                                            cache[p] = endValue;
                                            continue;
                                        } else if (p === "transform") {
                                            _addRawTransformPTs(this, endValue, target);
                                            continue;
                                        }
                                    } else if (!(p in style)) {
                                        p = _checkPropPrefix(p) || p;
                                    }
                                    if (isTransformRelated || (endNum || endNum === 0) && (startNum || startNum === 0) && !_complexExp.test(endValue) && p in style) {
                                        startUnit = (startValue + "").substr((startNum + "").length);
                                        endNum || (endNum = 0); // protect against NaN
                                        endUnit = (0, _gsapCore.getUnit)(endValue) || (p in _gsapCore._config.units ? _gsapCore._config.units[p] : startUnit);
                                        startUnit !== endUnit && (startNum = _convertToUnit(target, p, startValue, endUnit));
                                        this._pt = new _gsapCore.PropTween(this._pt, isTransformRelated ? cache : style, p, startNum, relative ? relative * endNum : endNum - startNum, !isTransformRelated && (endUnit === "px" || p === "zIndex") && vars.autoRound !== false ? _renderRoundedCSSProp : _renderCSSProp);
                                        this._pt.u = endUnit || 0;
                                        if (startUnit !== endUnit) {
                                            //when the tween goes all the way back to the beginning, we need to revert it to the OLD/ORIGINAL value (with those units). We record that as a "b" (beginning) property and point to a render method that handles that. (performance optimization)
                                            this._pt.b = startValue;
                                            this._pt.r = _renderCSSPropWithBeginning;
                                        }
                                    } else if (!(p in style)) {
                                        if (p in target) {
                                            //maybe it's not a style - it could be a property added directly to an element in which case we'll try to animate that.
                                            this.add(target, p, target[p], endValue, index, targets);
                                        } else {
                                            (0, _gsapCore._missingPlugin)(p, endValue);
                                            continue;
                                        }
                                    } else {
                                        _tweenComplexCSSString.call(this, target, p, startValue, endValue);
                                    }
                                    props.push(p);
                                }
                            }
                            hasPriority && (0, _gsapCore._sortPropTweensByPriority)(this);
                        },
                        get: _get,
                        aliases: _propertyAliases,
                        getSetter: function getSetter(target, property, plugin) {
                            //returns a setter function that accepts target, property, value and applies it accordingly. Remember, properties like "x" aren't as simple as target.style.property = value because they've got to be applied to a proxy object and then merged into a transform string in a renderer.
                            var p = _propertyAliases[property];
                            p && p.indexOf(",") < 0 && (property = p);
                            return property in _transformProps && property !== _transformOriginProp && (target._gsap.x || _get(target, "x")) ? plugin && _recentSetterPlugin === plugin ? property === "scale" ? _setterScale : _setterTransform : (_recentSetterPlugin = plugin || {}) && (property === "scale" ? _setterScaleWithRender : _setterTransformWithRender) : target.style && !(0, _gsapCore._isUndefined)(target.style[property]) ? _setterCSSStyle : ~property.indexOf("-") ? _setterCSSProp : (0, _gsapCore._getSetter)(target, property);
                        },
                        core: {
                            _removeProperty: _removeProperty,
                            _getMatrix: _getMatrix
                        }
                    };
                    exports1.default = exports1.CSSPlugin = CSSPlugin;
                    _gsapCore.gsap.utils.checkPrefix = _checkPropPrefix;
                    (function(positionAndScale, rotation, others, aliases) {
                        var all = (0, _gsapCore._forEachName)(positionAndScale + "," + rotation + "," + others, function(name) {
                            _transformProps[name] = 1;
                        });
                        (0, _gsapCore._forEachName)(rotation, function(name) {
                            _gsapCore._config.units[name] = "deg";
                            _rotationalProperties[name] = 1;
                        });
                        _propertyAliases[all[13]] = positionAndScale + "," + rotation;
                        (0, _gsapCore._forEachName)(aliases, function(name) {
                            var split = name.split(":");
                            _propertyAliases[split[1]] = all[split[0]];
                        });
                    })("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
                    (0, _gsapCore._forEachName)("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(name) {
                        _gsapCore._config.units[name] = "px";
                    });
                    _gsapCore.gsap.registerPlugin(CSSPlugin);
                },
                {
                    "./gsap-core.js": "TNS6"
                }
            ],
            "TpQl": [
                function(require1, module1, exports1) {
                    "use strict";
                    Object.defineProperty(exports1, "__esModule", {
                        value: true
                    });
                    Object.defineProperty(exports1, "Power0", {
                        enumerable: true,
                        get: function() {
                            return _gsapCore.Power0;
                        }
                    });
                    Object.defineProperty(exports1, "Power1", {
                        enumerable: true,
                        get: function() {
                            return _gsapCore.Power1;
                        }
                    });
                    Object.defineProperty(exports1, "Power2", {
                        enumerable: true,
                        get: function() {
                            return _gsapCore.Power2;
                        }
                    });
                    Object.defineProperty(exports1, "Power3", {
                        enumerable: true,
                        get: function() {
                            return _gsapCore.Power3;
                        }
                    });
                    Object.defineProperty(exports1, "Power4", {
                        enumerable: true,
                        get: function() {
                            return _gsapCore.Power4;
                        }
                    });
                    Object.defineProperty(exports1, "Linear", {
                        enumerable: true,
                        get: function() {
                            return _gsapCore.Linear;
                        }
                    });
                    Object.defineProperty(exports1, "Quad", {
                        enumerable: true,
                        get: function() {
                            return _gsapCore.Quad;
                        }
                    });
                    Object.defineProperty(exports1, "Cubic", {
                        enumerable: true,
                        get: function() {
                            return _gsapCore.Cubic;
                        }
                    });
                    Object.defineProperty(exports1, "Quart", {
                        enumerable: true,
                        get: function() {
                            return _gsapCore.Quart;
                        }
                    });
                    Object.defineProperty(exports1, "Quint", {
                        enumerable: true,
                        get: function() {
                            return _gsapCore.Quint;
                        }
                    });
                    Object.defineProperty(exports1, "Strong", {
                        enumerable: true,
                        get: function() {
                            return _gsapCore.Strong;
                        }
                    });
                    Object.defineProperty(exports1, "Elastic", {
                        enumerable: true,
                        get: function() {
                            return _gsapCore.Elastic;
                        }
                    });
                    Object.defineProperty(exports1, "Back", {
                        enumerable: true,
                        get: function() {
                            return _gsapCore.Back;
                        }
                    });
                    Object.defineProperty(exports1, "SteppedEase", {
                        enumerable: true,
                        get: function() {
                            return _gsapCore.SteppedEase;
                        }
                    });
                    Object.defineProperty(exports1, "Bounce", {
                        enumerable: true,
                        get: function() {
                            return _gsapCore.Bounce;
                        }
                    });
                    Object.defineProperty(exports1, "Sine", {
                        enumerable: true,
                        get: function() {
                            return _gsapCore.Sine;
                        }
                    });
                    Object.defineProperty(exports1, "Expo", {
                        enumerable: true,
                        get: function() {
                            return _gsapCore.Expo;
                        }
                    });
                    Object.defineProperty(exports1, "Circ", {
                        enumerable: true,
                        get: function() {
                            return _gsapCore.Circ;
                        }
                    });
                    Object.defineProperty(exports1, "TweenLite", {
                        enumerable: true,
                        get: function() {
                            return _gsapCore.TweenLite;
                        }
                    });
                    Object.defineProperty(exports1, "TimelineLite", {
                        enumerable: true,
                        get: function() {
                            return _gsapCore.TimelineLite;
                        }
                    });
                    Object.defineProperty(exports1, "TimelineMax", {
                        enumerable: true,
                        get: function() {
                            return _gsapCore.TimelineMax;
                        }
                    });
                    Object.defineProperty(exports1, "CSSPlugin", {
                        enumerable: true,
                        get: function() {
                            return _CSSPlugin.CSSPlugin;
                        }
                    });
                    exports1.TweenMax = exports1.default = exports1.gsap = void 0;
                    var _gsapCore = require1("./gsap-core.js");
                    var _CSSPlugin = require1("./CSSPlugin.js");
                    var gsapWithCSS = _gsapCore.gsap.registerPlugin(_CSSPlugin.CSSPlugin) || _gsapCore.gsap, // to protect from tree shaking
                    TweenMaxWithCSS = gsapWithCSS.core.Tween;
                    exports1.TweenMax = TweenMaxWithCSS;
                    exports1.default = exports1.gsap = gsapWithCSS;
                },
                {
                    "./gsap-core.js": "TNS6",
                    "./CSSPlugin.js": "bp4Z"
                }
            ],
            "Jcyn": [
                function(require1, module1, exports1) {
                    "use strict";
                    Object.defineProperty(exports1, "__esModule", {
                        value: true
                    });
                    exports1.Slideshow = void 0;
                    var _slide = require1("../slide");
                    var _events = require1("events");
                    var _gsap = require1("gsap");
                    function _typeof(obj) {
                        "@babel/helpers - typeof";
                        if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
                            _typeof = function _typeof(obj) {
                                return typeof obj;
                            };
                        } else {
                            _typeof = function _typeof(obj) {
                                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                            };
                        }
                        return _typeof(obj);
                    }
                    function _createForOfIteratorHelper(o, allowArrayLike) {
                        var it;
                        if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
                            if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
                                if (it) o = it;
                                var i = 0;
                                var F = function F() {};
                                return {
                                    s: F,
                                    n: function n() {
                                        if (i >= o.length) return {
                                            done: true
                                        };
                                        return {
                                            done: false,
                                            value: o[i++]
                                        };
                                    },
                                    e: function e(_e) {
                                        throw _e;
                                    },
                                    f: F
                                };
                            }
                            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                        }
                        var normalCompletion = true, didErr = false, err;
                        return {
                            s: function s() {
                                it = o[Symbol.iterator]();
                            },
                            n: function n() {
                                var step = it.next();
                                normalCompletion = step.done;
                                return step;
                            },
                            e: function e(_e2) {
                                didErr = true;
                                err = _e2;
                            },
                            f: function f() {
                                try {
                                    if (!normalCompletion && it.return != null) it.return();
                                } finally{
                                    if (didErr) throw err;
                                }
                            }
                        };
                    }
                    function _toConsumableArray(arr) {
                        return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
                    }
                    function _nonIterableSpread() {
                        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    }
                    function _unsupportedIterableToArray(o, minLen) {
                        if (!o) return;
                        if (typeof o === "string") return _arrayLikeToArray(o, minLen);
                        var n = Object.prototype.toString.call(o).slice(8, -1);
                        if (n === "Object" && o.constructor) n = o.constructor.name;
                        if (n === "Map" || n === "Set") return Array.from(o);
                        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
                    }
                    function _iterableToArray(iter) {
                        if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
                    }
                    function _arrayWithoutHoles(arr) {
                        if (Array.isArray(arr)) return _arrayLikeToArray(arr);
                    }
                    function _arrayLikeToArray(arr, len) {
                        if (len == null || len > arr.length) len = arr.length;
                        for(var i = 0, arr2 = new Array(len); i < len; i++){
                            arr2[i] = arr[i];
                        }
                        return arr2;
                    }
                    function _classCallCheck(instance, Constructor) {
                        if (!(instance instanceof Constructor)) {
                            throw new TypeError("Cannot call a class as a function");
                        }
                    }
                    function _defineProperties(target, props) {
                        for(var i = 0; i < props.length; i++){
                            var descriptor = props[i];
                            descriptor.enumerable = descriptor.enumerable || false;
                            descriptor.configurable = true;
                            if ("value" in descriptor) descriptor.writable = true;
                            Object.defineProperty(target, descriptor.key, descriptor);
                        }
                    }
                    function _createClass(Constructor, protoProps, staticProps) {
                        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
                        if (staticProps) _defineProperties(Constructor, staticProps);
                        return Constructor;
                    }
                    function _inherits(subClass, superClass) {
                        if (typeof superClass !== "function" && superClass !== null) {
                            throw new TypeError("Super expression must either be null or a function");
                        }
                        subClass.prototype = Object.create(superClass && superClass.prototype, {
                            constructor: {
                                value: subClass,
                                writable: true,
                                configurable: true
                            }
                        });
                        if (superClass) _setPrototypeOf(subClass, superClass);
                    }
                    function _setPrototypeOf(o, p) {
                        _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
                            o.__proto__ = p;
                            return o;
                        };
                        return _setPrototypeOf(o, p);
                    }
                    function _createSuper(Derived) {
                        var hasNativeReflectConstruct = _isNativeReflectConstruct();
                        return function _createSuperInternal() {
                            var Super = _getPrototypeOf(Derived), result;
                            if (hasNativeReflectConstruct) {
                                var NewTarget = _getPrototypeOf(this).constructor;
                                result = Reflect.construct(Super, arguments, NewTarget);
                            } else {
                                result = Super.apply(this, arguments);
                            }
                            return _possibleConstructorReturn(this, result);
                        };
                    }
                    function _possibleConstructorReturn(self, call) {
                        if (call && (_typeof(call) === "object" || typeof call === "function")) {
                            return call;
                        }
                        return _assertThisInitialized(self);
                    }
                    function _assertThisInitialized(self) {
                        if (self === void 0) {
                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        }
                        return self;
                    }
                    function _isNativeReflectConstruct() {
                        if (typeof Reflect === "undefined" || !Reflect.construct) return false;
                        if (Reflect.construct.sham) return false;
                        if (typeof Proxy === "function") return true;
                        try {
                            Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
                            return true;
                        } catch (e) {
                            return false;
                        }
                    }
                    function _getPrototypeOf(o) {
                        _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
                            return o.__proto__ || Object.getPrototypeOf(o);
                        };
                        return _getPrototypeOf(o);
                    }
                    var Slideshow = /*#__PURE__*/ function(_EventEmitter) {
                        _inherits(Slideshow, _EventEmitter);
                        var _super = _createSuper(Slideshow);
                        function Slideshow(el) {
                            var _this;
                            _classCallCheck(this, Slideshow);
                            _this = _super.call(this); // the main wrapper <div class="slideshow">
                            _this.DOM = {
                                el: el
                            }; // the slides
                            _this.DOM.slides = _toConsumableArray(_this.DOM.el.querySelectorAll(".slide")); // array of Slide obj instances
                            _this.slides = [];
                            _this.DOM.slides.forEach(function(slide) {
                                return _this.slides.push(new _slide.Slide(slide));
                            }); // total number of Slides
                            _this.slidesTotal = _this.slides.length; // current position
                            _this.current = 0; // some settings, like the clip paths
                            _this.config = {
                                clipPath: {
                                    initial: "circle(55% at 70% 50%)",
                                    final: "circle(15% at 70% 50%)",
                                    hover: "circle(20% at 30% 50%)"
                                }
                            };
                            _this.init();
                            return _this;
                        }
                        _createClass(Slideshow, [
                            {
                                key: "init",
                                value: function init() {
                                    var _this2 = this;
                                    // start with the first slide as the current slide
                                    this.DOM.slides[this.current].classList.add("slide--current"); // set the initial clip path
                                    _gsap.gsap.set(this.slides[this.current].DOM.imgWrap, {
                                        clipPath: this.config.clipPath.initial
                                    }); // when hovering over the "explore" link on each slide, we animate the clip path from this.config.clipPath.initial to this.config.clipPath.hover
                                    var _iterator = _createForOfIteratorHelper(this.slides), _step;
                                    try {
                                        var _loop = function _loop() {
                                            var slide = _step.value;
                                            slide.DOM.link.addEventListener("mouseenter", function() {
                                                _gsap.gsap.killTweensOf(slide.DOM.imgWrap);
                                                _gsap.gsap.to(slide.DOM.imgWrap, {
                                                    duration: 1,
                                                    ease: "expo",
                                                    clipPath: _this2.config.clipPath.hover
                                                });
                                            });
                                            slide.DOM.link.addEventListener("mouseleave", function() {
                                                _gsap.gsap.killTweensOf(slide.DOM.imgWrap);
                                                _gsap.gsap.to(slide.DOM.imgWrap, {
                                                    duration: 1,
                                                    ease: "expo",
                                                    clipPath: _this2.config.clipPath.initial
                                                });
                                            });
                                        };
                                        for(_iterator.s(); !(_step = _iterator.n()).done;){
                                            _loop();
                                        }
                                    } catch (err) {
                                        _iterator.e(err);
                                    } finally{
                                        _iterator.f();
                                    }
                                } // navigate to the next slide
                            },
                            {
                                key: "next",
                                value: function next() {
                                    this.navigate("next");
                                } // navigate to the previous slide
                            },
                            {
                                key: "prev",
                                value: function prev() {
                                    this.navigate("prev");
                                }
                            },
                            {
                                key: "navigate",
                                value: function navigate(direction) {
                                    var _this3 = this;
                                    // if animating do nothing
                                    if (this.isAnimating) {
                                        return false;
                                    }
                                    this.isAnimating = true; // get the current slide
                                    var currentSlide = this.slides[this.current]; // update current
                                    if (direction === "next") {
                                        this.current = this.current < this.slidesTotal - 1 ? this.current + 1 : 0;
                                    } else {
                                        this.current = this.current > 0 ? this.current - 1 : this.slidesTotal - 1;
                                    } // now get the upcoming slide
                                    var upcomingSlide = this.slides[this.current]; // animate things...
                                    _gsap.gsap.timeline({
                                        // add class current to the upcoming slide (pointer events related)
                                        onStart: function onStart() {
                                            return upcomingSlide.DOM.el.classList.add("slide--current");
                                        },
                                        // and remove that class from the currentSlide when the animation ends
                                        onComplete: function onComplete() {
                                            _this3.isAnimating = false;
                                            currentSlide.DOM.el.classList.remove("slide--current");
                                        }
                                    }).addLabel("start", 0) // set the initial styles for the upcoming slide imgWrap: clip path and translateY position 
                                    .set(upcomingSlide.DOM.imgWrap, {
                                        y: direction === "next" ? "100%" : "-100%",
                                        clipPath: this.config.clipPath.final
                                    }, "start") // also set the opacity of the upcoming slide to 1
                                    .set(upcomingSlide.DOM.el, {
                                        opacity: 1
                                    }, "start") // set the initial styles for the upcoming slide img: translateY position
                                    // same for the texts and link elements
                                    .set(upcomingSlide.DOM.img, {
                                        y: direction === "next" ? "-50%" : "50%"
                                    }, "start").set(upcomingSlide.DOM.text, {
                                        y: direction === "next" ? "100%" : "-100%"
                                    }, "start").set(upcomingSlide.DOM.link, {
                                        opacity: 0
                                    }, "start") // animate the clip path from this.config.clipPath.initial to this.config.clipPath.final
                                    .to(currentSlide.DOM.imgWrap, {
                                        duration: 1,
                                        ease: "power3",
                                        clipPath: this.config.clipPath.final,
                                        rotation: 0.001 // bugfix
                                    }, "start") // animate the current slide texts out
                                    .to(currentSlide.DOM.text, {
                                        duration: 1,
                                        ease: "power3",
                                        y: direction === "next" ? "-100%" : "100%"
                                    }, "start") // animate the current slide link out
                                    .to(currentSlide.DOM.link, {
                                        duration: 0.5,
                                        ease: "power3",
                                        opacity: 0
                                    }, "start") // move the current slide away 
                                    .to(currentSlide.DOM.imgWrap, {
                                        duration: 1,
                                        ease: "power2.inOut",
                                        y: direction === "next" ? "-100%" : "100%",
                                        rotation: 0.001
                                    }, "start+=0.6").to(currentSlide.DOM.img, {
                                        duration: 1,
                                        ease: "power2.inOut",
                                        y: direction === "next" ? "50%" : "-50%"
                                    }, "start+=0.6") // and the upcoming slide in
                                    .to(upcomingSlide.DOM.imgWrap, {
                                        duration: 1,
                                        ease: "power2.inOut",
                                        y: "0%",
                                        rotation: 0.001
                                    }, "start+=0.6").to(upcomingSlide.DOM.img, {
                                        duration: 1,
                                        ease: "power2.inOut",
                                        y: "0%"
                                    }, "start+=0.6") // animate the upcoming slide clip path to the initial shape
                                    .to(upcomingSlide.DOM.imgWrap, {
                                        duration: 1.5,
                                        ease: "expo.inOut",
                                        clipPath: this.config.clipPath.initial
                                    }, "start+=1.2") // animate the upcoming slide texts in
                                    .to(upcomingSlide.DOM.text, {
                                        duration: 1.5,
                                        ease: "expo.inOut",
                                        y: "0%",
                                        rotation: 0.001,
                                        stagger: direction === "next" ? 0.1 : -0.1
                                    }, "start+=1.1") // animate the upcoming slide link in
                                    .to(upcomingSlide.DOM.link, {
                                        duration: 1,
                                        ease: "expo.in",
                                        opacity: 1
                                    }, "start+=1.4"); // update the slideshow current value
                                    this.emit("updateCurrent", this.current);
                                }
                            }
                        ]);
                        return Slideshow;
                    }(_events.EventEmitter);
                    exports1.Slideshow = Slideshow;
                },
                {
                    "../slide": "Drnq",
                    "events": "FRpO",
                    "gsap": "TpQl"
                }
            ],
            "C3Xv": [
                function(require1, module1, exports1) {
                    "use strict";
                    var _utils = require1("../utils");
                    var _navigation = require1("../navigation");
                    var _slideshow = require1("./slideshow");
                    // Preload all images
                    (0, _utils.preloadImages)(".slide__img").then(function() {
                        // remove loader (loading class) 
                        document.body.classList.remove("loading"); // initialize the slideshow and navigation
                        var slideshow = new _slideshow.Slideshow(document.querySelector(".slideshow"));
                        var navigation = new _navigation.Navigation(document.querySelector(".slides-nav")); // navigation events
                        navigation.DOM.ctrls.next.addEventListener("click", function() {
                            return slideshow.next();
                        });
                        navigation.DOM.ctrls.prev.addEventListener("click", function() {
                            return slideshow.prev();
                        }); // set the initial navigation current slide value
                        navigation.updateCurrent(slideshow.current); // set the navigation total number of slides
                        navigation.DOM.total.innerHTML = slideshow.current < 10 ? "0".concat(slideshow.slidesTotal) : slideshow.slidesTotal; // when a new slide is shown, update the navigation current slide value
                        slideshow.on("updateCurrent", function(position) {
                            return navigation.updateCurrent(position);
                        });
                    });
                },
                {
                    "../utils": "8MgT",
                    "../navigation": "qr+2",
                    "./slideshow": "Jcyn"
                }
            ]
        }, {}, [
            "C3Xv"
        ], null);
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scripts);


/***/ }),

/***/ 9952:
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = 9952;
module.exports = webpackEmptyContext;

/***/ })

};
;