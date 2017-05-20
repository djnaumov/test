webpackJsonp([2],{126:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}(n(214))},127:function(e,t,n){"use strict";function __export(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}Object.defineProperty(t,"__esModule",{value:!0}),__export(n(213)),__export(n(217))},128:function(e,t,n){"use strict";var r=this&&this.__decorate||function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var i=n(10),a=n(48),s=function(){function CloudCastSafePipe(e){this.sanitizer=e,this.url="https://www.mixcloud.com/widget/iframe/?feed=",this.options="&hide_cover=1&hide_artwork=1&autoplay=1"}return CloudCastSafePipe.prototype.transform=function(e){return this.sanitizer.bypassSecurityTrustResourceUrl(this.buildSrc(e))},CloudCastSafePipe.prototype.buildSrc=function(e){var t=encodeURI(""+(e+this.options));return""+(this.url+t)},CloudCastSafePipe}();s=r([i.Pipe({name:"cloudcastSafe"}),o("design:paramtypes",[a.DomSanitizer])],s),t.CloudCastSafePipe=s},129:function(e,t,n){"use strict";var r=this&&this.__decorate||function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var i=n(92),a=n(125),s=n(10),c={cloudCasts:"https://api.mixcloud.com/djnaumov/cloudcasts/"},l=function(){function MixCloudApiService(e){this.http=e}return MixCloudApiService.prototype.extractData=function(e){var t=e.json();t.paging;return t.data||{}},MixCloudApiService.prototype.handleError=function(e){var t;if(e instanceof i.Response){var n=e.json()||"",r=n.error||JSON.stringify(n);t=e.status+" - "+(e.statusText||"")+" "+r}else t=e.message?e.message:e.toString();return console.error(t),a.Observable.throw(t)},MixCloudApiService.prototype.getCloudCasts=function(e){return void 0===e&&(e=20),this.http.get(c.cloudCasts).map(this.extractData).catch(this.handleError)},MixCloudApiService}();l=r([s.Injectable(),o("design:paramtypes",[i.Http])],l),t.MixCloudApiService=l},201:function(e,t,n){"use strict";var r=this&&this.__decorate||function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a};Object.defineProperty(t,"__esModule",{value:!0});var o=n(10),i=n(48),a=n(93),s=n(54),c=n(209),l=n(220),u=n(127),p=n(224),d=document.getElementsByTagName("base")[0];console.log("base: ",d);var f=(s.APP_BASE_HREF,d.href,[{path:"",component:l.HomePageComponent},{path:"videos",component:l.VideosPageComponent}]),m=function(){function AppModule(){}return AppModule}();m=r([o.NgModule({imports:[i.BrowserModule,u.CoreModule,a.RouterModule.forRoot(f),p.MixCloudApiModule],declarations:[c.AppComponent,l.HomePageComponent,l.VideosPageComponent],bootstrap:[c.AppComponent],providers:[i.Title]})],m),t.AppModule=m},209:function(e,t,n){"use strict";var r=this&&this.__decorate||function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var i=n(10),a=function(){function AppComponent(){}return AppComponent}();a=r([i.Component({selector:"cmp-app",template:n(413),styles:[n(407)],encapsulation:i.ViewEncapsulation.None}),o("design:paramtypes",[])],a),t.AppComponent=a},210:function(e,t,n){"use strict";var r=this&&this.__decorate||function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var i=n(10),a=n(20),s=function(){function BackToTopComponent(){this.offset=300,this.offset_opacity=1200,this.scroll_top_duration=700}return BackToTopComponent.prototype.onScroll=function(e){a(window).scrollTop()>this.offset?this.cssVisibilityClass="cd-is-visible":this.cssVisibilityClass="cd-fade-out",a(window).scrollTop()>this.offset_opacity&&(this.cssVisibilityClass="cd-is-visible cd-fade-out")},BackToTopComponent.prototype.onTop=function(){a("body,html").animate({scrollTop:0},this.scroll_top_duration)},BackToTopComponent}();r([i.HostListener("window:scroll",["$event"]),o("design:type",Function),o("design:paramtypes",[Object]),o("design:returntype",void 0)],s.prototype,"onScroll",null),s=r([i.Component({selector:"cmp-back-to-top",template:n(414),styles:[n(408)]})],s),t.BackToTopComponent=s},211:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}(n(210))},212:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(211),o=n(126),i=n(215);t.coreComponents=[r.BackToTopComponent,o.NavBarComponent,i.SpinnerComponent]},213:function(e,t,n){"use strict";function __export(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}Object.defineProperty(t,"__esModule",{value:!0}),__export(n(126)),__export(n(212))},214:function(e,t,n){"use strict";var r=this&&this.__decorate||function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var i=n(10),a=n(48),s=function(){function NavBarComponent(e){this.titleService=e,this.title=e.getTitle()}return NavBarComponent}();s=r([i.Component({selector:"cmp-nav-bar",template:n(415),styles:[n(409)]}),o("design:paramtypes",[a.Title])],s),t.NavBarComponent=s},215:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}(n(216))},216:function(e,t,n){"use strict";var r=this&&this.__decorate||function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var i=n(10),a=function(){function SpinnerComponent(){}return SpinnerComponent}();r([i.Input("enabled"),o("design:type",Boolean)],a.prototype,"enabled",void 0),a=r([i.Component({selector:"cmp-spinner",template:n(416),styles:[n(412)],encapsulation:i.ViewEncapsulation.None})],a),t.SpinnerComponent=a},217:function(e,t,n){"use strict";var r=this&&this.__decorate||function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a};Object.defineProperty(t,"__esModule",{value:!0});var o=n(10),i=n(54),a=n(93),s=n(127),c=function(){function CoreModule(){}return CoreModule}();c=r([o.NgModule({imports:[i.CommonModule,a.RouterModule],declarations:[s.coreComponents],exports:[s.coreComponents]})],c),t.CoreModule=c},218:function(e,t,n){"use strict";var r=this&&this.__decorate||function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var i=n(10),a=n(223),s=function(){function HomePageComponent(e){this.mixCloudApi=e,this.cloudCastCards=[]}return HomePageComponent.prototype.ngOnInit=function(){var e=this;this.mixCloudApi.getCloudCasts().subscribe(function(t){return e.onCloudCastsLoaded(t)},function(e){return console.log(e)})},HomePageComponent.prototype.onCloudCastsLoaded=function(e){this.cloudCasts=e.filter(this.isPodcast);for(var t=[],n=0;n<this.cloudCasts.length;n++)t.push(this.cloudCasts[n]),n>0&&(n+1)%3==0&&(this.cloudCastCards.push(t),t=[])},HomePageComponent.prototype.isPodcast=function(e){return e.slug.startsWith("podcast")},HomePageComponent.prototype.onOpenCloudCast=function(e){this.selectedCloudCast=e},HomePageComponent}();s=r([i.Component({selector:"cmp-home-page",template:n(417),styles:[n(410)]}),o("design:paramtypes",[a.MixCloudApiService])],s),t.HomePageComponent=s},219:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}(n(218))},220:function(e,t,n){"use strict";function __export(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}Object.defineProperty(t,"__esModule",{value:!0}),__export(n(219)),__export(n(221))},221:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}(n(222))},222:function(e,t,n){"use strict";var r=this&&this.__decorate||function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a};Object.defineProperty(t,"__esModule",{value:!0});var o=n(10),i=function(){function VideosPageComponent(){}return VideosPageComponent}();i=r([o.Component({selector:"cmp-videos-page",template:n(418)})],i),t.VideosPageComponent=i},223:function(e,t,n){"use strict";function __export(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}Object.defineProperty(t,"__esModule",{value:!0}),__export(n(129)),__export(n(128))},224:function(e,t,n){"use strict";var r=this&&this.__decorate||function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a};Object.defineProperty(t,"__esModule",{value:!0});var o=n(10),i=n(129),a=n(92),s=n(225),c=n(128),l=function(){function MixCloudApiModule(){}return MixCloudApiModule}();l=r([o.NgModule({declarations:[s.MixcloudWidget,c.CloudCastSafePipe],imports:[a.HttpModule,a.JsonpModule],providers:[i.MixCloudApiService],exports:[s.MixcloudWidget,c.CloudCastSafePipe]})],l),t.MixCloudApiModule=l},225:function(e,t,n){"use strict";var r=this&&this.__decorate||function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var i=n(10),a=function(){function MixcloudWidget(){}return MixcloudWidget}();r([i.Input("cloudCats"),o("design:type",String)],a.prototype,"cloudCats",void 0),a=r([i.Component({selector:"mixcloud-widget",template:n(419),styles:[n(411)]})],a),t.MixcloudWidget=a},226:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(94),o=n(10),i=n(201);o.enableProdMode(),r.platformBrowserDynamic().bootstrapModule(i.AppModule).catch(function(e){console.error("app error: %o",e)})},407:function(e,t){e.exports=".container {\n  margin-top: 6rem;\n}\n.card {\n  width: 20rem;\n}\n.card-title,\n.card-text {\n  color: #000;\n}\n"},408:function(e,t){e.exports=".cd-top {\n  z-index: 1;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: fixed;\n  bottom: 125px;\n  right: 10px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);\n  /* image replacement properties */\n  overflow: hidden;\n  white-space: nowrap;\n  background: transparent;\n  visibility: hidden;\n  opacity: 0;\n  transition: opacity .3s 0s, visibility 0s .3s;\n}\n.cd-top.cd-is-visible,\n.cd-top.cd-fade-out,\n.no-touch .cd-top:hover {\n  transition: opacity .3s 0s, visibility 0s 0s;\n}\n.cd-top.cd-is-visible {\n  /* the button becomes visible */\n  visibility: visible;\n  opacity: 1;\n}\n.cd-top.cd-fade-out {\n  /* if the user keeps scrolling down, the button is out of focus and becomes less visible */\n  opacity: .5;\n}\n.no-touch .cd-top:hover {\n  background-color: #e86256;\n  opacity: 1;\n}\n"},409:function(e,t){e.exports=""},410:function(e,t){e.exports=".card {\n  width: 20rem;\n  margin-bottom: 1rem;\n}\n.card img.card-img-top {\n  width: 100%;\n  -o-object-position: center;\n     object-position: center;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -webkit-filter: grayscale(100%);\n  filter: grayscale(100%);\n}\n.card:hover img.card-img-top {\n  padding: .2rem;\n  height: calc(19.8rem);\n  -webkit-filter: none;\n  filter: none;\n  transition: .3s;\n}\n.card:hover img.card-img-top,\n.card:hover .card-block {\n  background-color: #eceeef;\n}\n"},411:function(e,t){e.exports="iframe.mix-cloud-widget {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  z-index: 2;\n}\n"},412:function(e,t){e.exports=".spinner-cube-grid {\r\n    width: 40px;\r\n    height: 40px;\r\n    margin: 100px auto;\r\n}\r\n\r\na.navbar-brand .spinner-cube-grid {\r\n    width: 0.7rem;\r\n    height: 0.7rem;\r\n    margin: 0;\r\n    display: inline-block;\r\n}\r\n\r\n.spinner-cube-grid .spinner-cube {\r\n    width: 33%;\r\n    height: 33%;\r\n    background-color: #fff;\r\n    float: left;\r\n    -webkit-animation: -webkit-spinner-cubeGridScaleDelay 1.3s infinite ease-in-out;\r\n    animation: spinner-cubeGridScaleDelay 1.3s infinite ease-in-out;\r\n}\r\n\r\n.spinner-cube-grid .spinner-cube1 {\r\n    -webkit-animation-delay: 0.2s;\r\n    animation-delay: 0.2s;\r\n}\r\n\r\n.spinner-cube-grid .spinner-cube2 {\r\n    -webkit-animation-delay: 0.3s;\r\n    animation-delay: 0.3s;\r\n}\r\n\r\n.spinner-cube-grid .spinner-cube3 {\r\n    -webkit-animation-delay: 0.4s;\r\n    animation-delay: 0.4s;\r\n}\r\n\r\n.spinner-cube-grid .spinner-cube4 {\r\n    -webkit-animation-delay: 0.1s;\r\n    animation-delay: 0.1s;\r\n}\r\n\r\n.spinner-cube-grid .spinner-cube5 {\r\n    -webkit-animation-delay: 0.2s;\r\n    animation-delay: 0.2s;\r\n}\r\n\r\n.spinner-cube-grid .spinner-cube6 {\r\n    -webkit-animation-delay: 0.3s;\r\n    animation-delay: 0.3s;\r\n}\r\n\r\n.spinner-cube-grid .spinner-cube7 {\r\n    -webkit-animation-delay: 0s;\r\n    animation-delay: 0s;\r\n}\r\n\r\n.spinner-cube-grid .spinner-cube8 {\r\n    -webkit-animation-delay: 0.1s;\r\n    animation-delay: 0.1s;\r\n}\r\n\r\n.spinner-cube-grid .spinner-cube9 {\r\n    -webkit-animation-delay: 0.2s;\r\n    animation-delay: 0.2s;\r\n}\r\n\r\n@-webkit-keyframes -webkit-spinner-cubeGridScaleDelay {\r\n    0%, 70%, 100% {\r\n        -webkit-transform: scale3D(1, 1, 1);\r\n        transform: scale3D(1, 1, 1);\r\n    }\r\n    35% {\r\n        -webkit-transform: scale3D(0, 0, 1);\r\n        transform: scale3D(0, 0, 1);\r\n    }\r\n}\r\n\r\n@-webkit-keyframes spinner-cubeGridScaleDelay {\r\n    0%, 70%, 100% {\r\n        -webkit-transform: scale3D(1, 1, 1);\r\n        transform: scale3D(1, 1, 1);\r\n    }\r\n    35% {\r\n        -webkit-transform: scale3D(0, 0, 1);\r\n        transform: scale3D(0, 0, 1);\r\n    }\r\n}\r\n\r\n@keyframes spinner-cubeGridScaleDelay {\r\n    0%, 70%, 100% {\r\n        -webkit-transform: scale3D(1, 1, 1);\r\n        transform: scale3D(1, 1, 1);\r\n    }\r\n    35% {\r\n        -webkit-transform: scale3D(0, 0, 1);\r\n        transform: scale3D(0, 0, 1);\r\n    }\r\n}"},413:function(e,t){e.exports='<cmp-nav-bar></cmp-nav-bar>\r\n<div class="container">\r\n    <router-outlet></router-outlet>\r\n    <cmp-back-to-top></cmp-back-to-top>\r\n</div>\r\n\r\n<footer class="footer">\r\n    <div class="d-flex justify-content-around">\r\n        <p>The website is in active development.</p>\r\n    </div>\r\n    <div class="d-flex justify-content-center">\r\n        <p>© djnaumov 2017</p>\r\n    </div>\r\n</footer>\r\n'},414:function(e,t){e.exports='<div class="cd-top" [ngClass]="cssVisibilityClass">\r\n    <button class="btn btn-outline-primary" (click)="onTop()">\r\n        <i class="fa fa-arrow-up" aria-hidden="true"></i>\r\n    </button>\r\n</div>'},415:function(e,t){e.exports='<nav class="navbar navbar-toggleable-md fixed-top navbar-inverse bg-inverse">\r\n    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"\r\n        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">\r\n        <span class="navbar-toggler-icon"></span>\r\n    </button>\r\n    <a class="navbar-brand" routerLink="/" routerLinkActive="active">\r\n        <cmp-spinner [enabled]="true" class="logo"></cmp-spinner>\r\n        {{title}}\r\n    </a>\r\n\r\n    <div class="collapse navbar-collapse" id="navbarSupportedContent">\r\n\r\n        <ul class="navbar-nav mr-auto mt-1">\r\n            <li class="nav-item">\r\n                <a class="nav-link" routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}">\r\n                    Home\r\n                    <span class="sr-only">(current)</span>\r\n                </a>\r\n            </li>\r\n            <li class="nav-item">\r\n                <a class="nav-link" routerLink="/videos" routerLinkActive="active">Videos</a>\r\n            </li>\r\n        </ul>\r\n\r\n        <ul class="navbar-nav ml-auto">\r\n            <li class="nav-item">\r\n                <a class="nav-link" href="https://www.mixcloud.com/djnaumov" target="_blank" role="button">\r\n                    <i class="fa fa-mixcloud fa-2x" aria-hidden="true"></i>\r\n                </a>\r\n            </li>\r\n            <li class="nav-item">\r\n                <a class="nav-link" href="https://www.facebook.com/djnaumov" target="_blank" role="button">\r\n                    <i class="fa fa-facebook-official fa-2x" aria-hidden="true"></i>\r\n                </a>\r\n            </li>\r\n            <li class="nav-item">\r\n                <a class="nav-link" href="https://vk.com/djnaumov" target="_blank" role="button">\r\n                    <i class="fa fa-vk fa-2x" aria-hidden="true"></i>\r\n                </a>\r\n            </li>\r\n            <li class="nav-item">\r\n                <a class="nav-link" href="https://soundcloud.com/djnaumov" target="_blank" role="button">\r\n                    <i class="fa fa-soundcloud fa-2x" aria-hidden="true"></i>\r\n                </a>\r\n            </li>\r\n            <li class="nav-item">\r\n                <a class="nav-link" href="https://www.linkedin.com/in/djnaumov" target="_blank" role="button">\r\n                    <i class="fa fa-linkedin-square fa-2x" aria-hidden="true"></i>\r\n                </a>\r\n            </li>\r\n            <li class="nav-item">\r\n                <a class="nav-link" href="https://github.com/djnaumov" target="_blank" role="button">\r\n                    <i class="fa fa-github fa-2x" aria-hidden="true"></i>\r\n                </a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</nav>'},416:function(e,t){e.exports='<ng-template [ngIf]="enabled">\r\n    <div class="spinner-cube-grid">\r\n        <div class="spinner-cube spinner-cube1"></div>\r\n        <div class="spinner-cube spinner-cube2"></div>\r\n        <div class="spinner-cube spinner-cube3"></div>\r\n        <div class="spinner-cube spinner-cube4"></div>\r\n        <div class="spinner-cube spinner-cube5"></div>\r\n        <div class="spinner-cube spinner-cube6"></div>\r\n        <div class="spinner-cube spinner-cube7"></div>\r\n        <div class="spinner-cube spinner-cube8"></div>\r\n        <div class="spinner-cube spinner-cube9"></div>\r\n    </div>\r\n</ng-template>\r\n'},417:function(e,t){e.exports='<ng-template [ngIf]="selectedCloudCast">\r\n    <mixcloud-widget [cloudCats]="selectedCloudCast | cloudcastSafe"></mixcloud-widget>\r\n</ng-template>\r\n\r\n<ng-template ngFor let-cards [ngForOf]="cloudCastCards">\r\n    <div class="row justify-content-around">\r\n        <ng-template ngFor let-item [ngForOf]="cards">\r\n            <div class="card">\r\n                <img class="card-img-top" src="{{item.pictures[\'640wx640h\']}}" alt="Card image cap">\r\n                <div class="card-block">\r\n                    <h4 class="card-title">{{item.name}}</h4>\r\n                    <button type="button" class="btn btn-outline-primary btn-sm" (click)="onOpenCloudCast(item[\'url\'])">\r\n                        <i class="fa fa-play-circle" aria-hidden="true"></i>\r\n                        Listen\r\n                    </button>\r\n                </div>\r\n                <div class="card-footer">\r\n                    <small class="text-muted">{{item[\'created_time\'] | date: \'fullDate\'}}</small>\r\n                </div>\r\n            </div>\r\n        </ng-template>\r\n    </div>\r\n</ng-template>\r\n'},418:function(e,t){e.exports='<div class="embed-responsive embed-responsive-16by9">\r\n  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/MlgFQFMaUJ8?rel=0" allowfullscreen></iframe>\r\n</div>'},419:function(e,t){e.exports='<iframe id="cloudcast-player" width="100%" height="120" frameborder="0"\r\n        class="mix-cloud-widget"\r\n        [src]="cloudCats">\r\n</iframe>\r\n\r\n\r\n\r\n'}},[226]);