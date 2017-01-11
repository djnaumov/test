webpackJsonp([2],{

/***/ 338:
/***/ function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(517));


/***/ },

/***/ 339:
/***/ function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(516));
__export(__webpack_require__(518));


/***/ },

/***/ 400:
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(1);
var platform_browser_1 = __webpack_require__(87);
var router_1 = __webpack_require__(260);
var app_component_1 = __webpack_require__(514);
var pages_1 = __webpack_require__(521);
var core_2 = __webpack_require__(339);
var appRoutes = [
    {
        path: '',
        component: pages_1.HomePageComponent
    }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, core_2.CoreModule, router_1.RouterModule.forRoot(appRoutes)],
        declarations: [app_component_1.AppComponent, pages_1.HomePageComponent],
        bootstrap: [app_component_1.AppComponent],
        providers: [platform_browser_1.Title]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;


/***/ },

/***/ 514:
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(1);
var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'sg-app',
        template: __webpack_require__(688),
        styles: [__webpack_require__(687)]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;


/***/ },

/***/ 515:
/***/ function(module, exports, __webpack_require__) {

"use strict";

var nav_bar_1 = __webpack_require__(338);
exports.coreComponents = [
    nav_bar_1.NavBarComponent
];


/***/ },

/***/ 516:
/***/ function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(338));
__export(__webpack_require__(515));


/***/ },

/***/ 517:
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(1);
var platform_browser_1 = __webpack_require__(87);
var NavBarComponent = (function () {
    function NavBarComponent(titleService) {
        this.titleService = titleService;
        this.title = titleService.getTitle();
    }
    return NavBarComponent;
}());
NavBarComponent = __decorate([
    core_1.Component({
        selector: "sg-navBar",
        template: __webpack_require__(689)
    }),
    __metadata("design:paramtypes", [platform_browser_1.Title])
], NavBarComponent);
exports.NavBarComponent = NavBarComponent;


/***/ },

/***/ 518:
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(1);
var core_2 = __webpack_require__(339);
var CoreModule = (function () {
    function CoreModule() {
    }
    return CoreModule;
}());
CoreModule = __decorate([
    core_1.NgModule({
        declarations: [core_2.coreComponents],
        exports: [core_2.coreComponents],
    }),
    __metadata("design:paramtypes", [])
], CoreModule);
exports.CoreModule = CoreModule;


/***/ },

/***/ 519:
/***/ function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__(1);
var HomePageComponent = (function () {
    function HomePageComponent() {
    }
    return HomePageComponent;
}());
HomePageComponent = __decorate([
    core_1.Component({
        selector: "sg-home-page",
        template: __webpack_require__(690)
    }),
    __metadata("design:paramtypes", [])
], HomePageComponent);
exports.HomePageComponent = HomePageComponent;


/***/ },

/***/ 520:
/***/ function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(519));


/***/ },

/***/ 521:
/***/ function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(__webpack_require__(520));


/***/ },

/***/ 687:
/***/ function(module, exports) {

module.exports = ".container {\n  margin-top: 10rem;\n}\n"

/***/ },

/***/ 688:
/***/ function(module, exports) {

module.exports = "<sg-navBar></sg-navBar>\r\n\r\n<div class=\"container\">\r\n    <router-outlet></router-outlet>\r\n</div>\r\n\r\n<footer class=\"footer\">\r\n    <div class=\"d-flex justify-content-around\">\r\n        <p>The website is in active development.</p>\r\n    </div>\r\n    <div class=\"d-flex justify-content-center\">\r\n        <p>© djnaumov 2017</p>\r\n    </div>\r\n</footer>\r\n"

/***/ },

/***/ 689:
/***/ function(module, exports) {

module.exports = "<nav class=\"navbar navbar-toggleable-md navbar-inverse bg-inverse\">\r\n    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\"\r\n            data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\r\n            aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <a class=\"navbar-brand\" routerLink=\"/\" routerLinkActive=\"active\">{{title}}</a>\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n        <ul class=\"navbar-nav mr-auto\">\r\n            <li class=\"nav-item active\">\r\n                <a class=\"nav-link\" routerLink=\"/\" routerLinkActive=\"active\">\r\n                    Home\r\n                    <span class=\"sr-only\">(current)</span>\r\n                </a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link disabled\" routerLink=\"/bio\" routerLinkActive=\"active\">\r\n                    Bio\r\n                </a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link disabled\" routerLink=\"/gigs\" routerLinkActive=\"active\">\r\n                    Gigs\r\n                </a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n                <a class=\"nav-link disabled\" routerLink=\"/contacts\" routerLinkActive=\"active\">\r\n                    Contacts\r\n                </a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</nav>"

/***/ },

/***/ 690:
/***/ function(module, exports) {

module.exports = "<h1>Home Page</h1>"

/***/ },

/***/ 959:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {
var platform_browser_dynamic_1 = __webpack_require__(176);
var core_1 = __webpack_require__(1);
var app_module_1 = __webpack_require__(400);
try {
    console.assert(process, 'process is undefined.');
    console.assert({"BUILDTARGET":"development","ENV":"development","NODE_ENV":"development","HMR":false}, 'process.env is undefined.');
    console.assert("development", 'process.env.ENV is undefined.');
    console.info("Current Mode: " + "development");
    if (false) {
        core_1.enableProdMode();
    }
}
catch (e) {
    console.error(e);
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule).catch(function (error) {
    console.error('app error: %o', error);
});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(175)))

/***/ }

},[959]);
//# sourceMappingURL=app.map