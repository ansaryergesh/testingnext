(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[12],{CaDr:function(e,t,n){"use strict";var o=n("wx14"),r=n("zLVn"),i=n("q1tI"),a=n.n(i),s=n("17x9"),c=n.n(s),u=n("TSYQ"),l=n.n(u),p=n("33Jr"),d={tag:p.o,className:c.a.string,cssModule:c.a.object},m=function(e){var t=e.className,n=e.cssModule,i=e.tag,s=Object(r.a)(e,["className","cssModule","tag"]),c=Object(p.k)(l()(t,"modal-body"),n);return a.a.createElement(i,Object(o.a)({},s,{className:c}))};m.propTypes=d,m.defaultProps={tag:"div"},t.a=m},DCcX:function(e,t,n){"use strict";var o=n("rePB"),r=n("wx14"),i=n("JX7q"),a=n("dI71"),s=n("q1tI"),c=n.n(s),u=n("17x9"),l=n.n(u),p=n("TSYQ"),d=n.n(p),m=n("i8i4"),h=n.n(m),f=n("33Jr"),g={children:l.a.node.isRequired,node:l.a.any},b=function(e){function t(){return e.apply(this,arguments)||this}Object(a.a)(t,e);var n=t.prototype;return n.componentWillUnmount=function(){this.defaultNode&&document.body.removeChild(this.defaultNode),this.defaultNode=null},n.render=function(){return f.d?(this.props.node||this.defaultNode||(this.defaultNode=document.createElement("div"),document.body.appendChild(this.defaultNode)),h.a.createPortal(this.props.children,this.props.node||this.defaultNode)):null},t}(c.a.Component);b.propTypes=g;var _=b,O=n("zLVn"),y=n("1w3K");function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){Object(o.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var j=v(v({},y.Transition.propTypes),{},{children:l.a.oneOfType([l.a.arrayOf(l.a.node),l.a.node]),tag:f.o,baseClass:l.a.string,baseClassActive:l.a.string,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])}),C=v(v({},y.Transition.defaultProps),{},{tag:"div",baseClass:"fade",baseClassActive:"show",timeout:f.c.Fade,appear:!0,enter:!0,exit:!0,in:!0});function w(e){var t=e.tag,n=e.baseClass,o=e.baseClassActive,i=e.className,a=e.cssModule,s=e.children,u=e.innerRef,l=Object(O.a)(e,["tag","baseClass","baseClassActive","className","cssModule","children","innerRef"]),p=Object(f.m)(l,f.a),m=Object(f.l)(l,f.a);return c.a.createElement(y.Transition,p,(function(e){var l="entered"===e,p=Object(f.k)(d()(i,n,l&&o),a);return c.a.createElement(t,Object(r.a)({className:p},m,{ref:u}),s)}))}w.propTypes=j,w.defaultProps=C;var T=w;function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(Object(n),!0).forEach((function(t){Object(o.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function A(){}var N=l.a.shape(T.propTypes),x={isOpen:l.a.bool,autoFocus:l.a.bool,centered:l.a.bool,scrollable:l.a.bool,size:l.a.string,toggle:l.a.func,keyboard:l.a.bool,role:l.a.string,labelledBy:l.a.string,backdrop:l.a.oneOfType([l.a.bool,l.a.oneOf(["static"])]),onEnter:l.a.func,onExit:l.a.func,onOpened:l.a.func,onClosed:l.a.func,children:l.a.node,className:l.a.string,wrapClassName:l.a.string,modalClassName:l.a.string,backdropClassName:l.a.string,contentClassName:l.a.string,external:l.a.node,fade:l.a.bool,cssModule:l.a.object,zIndex:l.a.oneOfType([l.a.number,l.a.string]),backdropTransition:N,modalTransition:N,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func]),unmountOnClose:l.a.bool,returnFocusAfterClose:l.a.bool,container:f.p},P=Object.keys(x),D={isOpen:!1,autoFocus:!0,centered:!1,scrollable:!1,role:"dialog",backdrop:!0,keyboard:!0,zIndex:1050,fade:!0,onOpened:A,onClosed:A,modalTransition:{timeout:f.c.Modal},backdropTransition:{mountOnEnter:!0,timeout:f.c.Fade},unmountOnClose:!0,returnFocusAfterClose:!0,container:"body"},M=function(e){function t(t){var n;return(n=e.call(this,t)||this)._element=null,n._originalBodyPadding=null,n.getFocusableChildren=n.getFocusableChildren.bind(Object(i.a)(n)),n.handleBackdropClick=n.handleBackdropClick.bind(Object(i.a)(n)),n.handleBackdropMouseDown=n.handleBackdropMouseDown.bind(Object(i.a)(n)),n.handleEscape=n.handleEscape.bind(Object(i.a)(n)),n.handleStaticBackdropAnimation=n.handleStaticBackdropAnimation.bind(Object(i.a)(n)),n.handleTab=n.handleTab.bind(Object(i.a)(n)),n.onOpened=n.onOpened.bind(Object(i.a)(n)),n.onClosed=n.onClosed.bind(Object(i.a)(n)),n.manageFocusAfterClose=n.manageFocusAfterClose.bind(Object(i.a)(n)),n.clearBackdropAnimationTimeout=n.clearBackdropAnimationTimeout.bind(Object(i.a)(n)),n.state={isOpen:!1,showStaticBackdropAnimation:!1},n}Object(a.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this.props,t=e.isOpen,n=e.autoFocus,o=e.onEnter;t&&(this.init(),this.setState({isOpen:!0}),n&&this.setFocus()),o&&o(),this._isMounted=!0},n.componentDidUpdate=function(e,t){if(this.props.isOpen&&!e.isOpen)return this.init(),void this.setState({isOpen:!0});this.props.autoFocus&&this.state.isOpen&&!t.isOpen&&this.setFocus(),this._element&&e.zIndex!==this.props.zIndex&&(this._element.style.zIndex=this.props.zIndex)},n.componentWillUnmount=function(){this.clearBackdropAnimationTimeout(),this.props.onExit&&this.props.onExit(),this._element&&(this.destroy(),(this.props.isOpen||this.state.isOpen)&&this.close()),this._isMounted=!1},n.onOpened=function(e,t){this.props.onOpened(),(this.props.modalTransition.onEntered||A)(e,t)},n.onClosed=function(e){var t=this.props.unmountOnClose;this.props.onClosed(),(this.props.modalTransition.onExited||A)(e),t&&this.destroy(),this.close(),this._isMounted&&this.setState({isOpen:!1})},n.setFocus=function(){this._dialog&&this._dialog.parentNode&&"function"===typeof this._dialog.parentNode.focus&&this._dialog.parentNode.focus()},n.getFocusableChildren=function(){return this._element.querySelectorAll(f.f.join(", "))},n.getFocusedChild=function(){var e,t=this.getFocusableChildren();try{e=document.activeElement}catch(n){e=t[0]}return e},n.handleBackdropClick=function(e){if(e.target===this._mouseDownElement){e.stopPropagation();var t=this._dialog?this._dialog.parentNode:null;if(t&&e.target===t&&"static"===this.props.backdrop&&this.handleStaticBackdropAnimation(),!this.props.isOpen||!0!==this.props.backdrop)return;t&&e.target===t&&this.props.toggle&&this.props.toggle(e)}},n.handleTab=function(e){if(9===e.which){var t=this.getFocusableChildren(),n=t.length;if(0!==n){for(var o=this.getFocusedChild(),r=0,i=0;i<n;i+=1)if(t[i]===o){r=i;break}e.shiftKey&&0===r?(e.preventDefault(),t[n-1].focus()):e.shiftKey||r!==n-1||(e.preventDefault(),t[0].focus())}}},n.handleBackdropMouseDown=function(e){this._mouseDownElement=e.target},n.handleEscape=function(e){this.props.isOpen&&e.keyCode===f.j.esc&&this.props.toggle&&(this.props.keyboard?(e.preventDefault(),e.stopPropagation(),this.props.toggle(e)):"static"===this.props.backdrop&&(e.preventDefault(),e.stopPropagation(),this.handleStaticBackdropAnimation()))},n.handleStaticBackdropAnimation=function(){var e=this;this.clearBackdropAnimationTimeout(),this.setState({showStaticBackdropAnimation:!0}),this._backdropAnimationTimeout=setTimeout((function(){e.setState({showStaticBackdropAnimation:!1})}),100)},n.init=function(){try{this._triggeringElement=document.activeElement}catch(e){this._triggeringElement=null}this._element||(this._element=document.createElement("div"),this._element.setAttribute("tabindex","-1"),this._element.style.position="relative",this._element.style.zIndex=this.props.zIndex,this._mountContainer=Object(f.h)(this.props.container),this._mountContainer.appendChild(this._element)),this._originalBodyPadding=Object(f.g)(),Object(f.e)(),0===t.openCount&&(document.body.className=d()(document.body.className,Object(f.k)("modal-open",this.props.cssModule))),t.openCount+=1},n.destroy=function(){this._element&&(this._mountContainer.removeChild(this._element),this._element=null),this.manageFocusAfterClose()},n.manageFocusAfterClose=function(){if(this._triggeringElement){var e=this.props.returnFocusAfterClose;this._triggeringElement.focus&&e&&this._triggeringElement.focus(),this._triggeringElement=null}},n.close=function(){if(t.openCount<=1){var e=Object(f.k)("modal-open",this.props.cssModule),n=new RegExp("(^| )"+e+"( |$)");document.body.className=document.body.className.replace(n," ").trim()}this.manageFocusAfterClose(),t.openCount=Math.max(0,t.openCount-1),Object(f.n)(this._originalBodyPadding)},n.renderModalDialog=function(){var e,t=this,n=Object(f.l)(this.props,P);return c.a.createElement("div",Object(r.a)({},n,{className:Object(f.k)(d()("modal-dialog",this.props.className,(e={},e["modal-"+this.props.size]=this.props.size,e["modal-dialog-centered"]=this.props.centered,e["modal-dialog-scrollable"]=this.props.scrollable,e)),this.props.cssModule),role:"document",ref:function(e){t._dialog=e}}),c.a.createElement("div",{className:Object(f.k)(d()("modal-content",this.props.contentClassName),this.props.cssModule)},this.props.children))},n.render=function(){var e=this.props.unmountOnClose;if(this._element&&(this.state.isOpen||!e)){var t=!!this._element&&!this.state.isOpen&&!e;this._element.style.display=t?"none":"block";var n=this.props,o=n.wrapClassName,i=n.modalClassName,a=n.backdropClassName,s=n.cssModule,u=n.isOpen,l=n.backdrop,p=n.role,m=n.labelledBy,h=n.external,g=n.innerRef,b={onClick:this.handleBackdropClick,onMouseDown:this.handleBackdropMouseDown,onKeyUp:this.handleEscape,onKeyDown:this.handleTab,style:{display:"block"},"aria-labelledby":m,role:p,tabIndex:"-1"},O=this.props.fade,y=S(S(S({},T.defaultProps),this.props.modalTransition),{},{baseClass:O?this.props.modalTransition.baseClass:"",timeout:O?this.props.modalTransition.timeout:0}),k=S(S(S({},T.defaultProps),this.props.backdropTransition),{},{baseClass:O?this.props.backdropTransition.baseClass:"",timeout:O?this.props.backdropTransition.timeout:0}),v=l&&(O?c.a.createElement(T,Object(r.a)({},k,{in:u&&!!l,cssModule:s,className:Object(f.k)(d()("modal-backdrop",a),s)})):c.a.createElement("div",{className:Object(f.k)(d()("modal-backdrop","show",a),s)}));return c.a.createElement(_,{node:this._element},c.a.createElement("div",{className:Object(f.k)(o)},c.a.createElement(T,Object(r.a)({},b,y,{in:u,onEntered:this.onOpened,onExited:this.onClosed,cssModule:s,className:Object(f.k)(d()("modal",i,this.state.showStaticBackdropAnimation&&"modal-static"),s),innerRef:g}),h,this.renderModalDialog()),v))}return null},n.clearBackdropAnimationTimeout=function(){this._backdropAnimationTimeout&&(clearTimeout(this._backdropAnimationTimeout),this._backdropAnimationTimeout=void 0)},t}(c.a.Component);M.propTypes=x,M.defaultProps=D,M.openCount=0;t.a=M},"HaE+":function(e,t,n){"use strict";function o(e,t,n,o,r,i,a){try{var s=e[i](a),c=s.value}catch(u){return void n(u)}s.done?t(c):Promise.resolve(c).then(o,r)}function r(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var a=e.apply(t,n);function s(e){o(a,r,i,s,c,"next",e)}function c(e){o(a,r,i,s,c,"throw",e)}s(void 0)}))}}n.d(t,"a",(function(){return r}))},HbFR:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return s}));var o=n("p46w"),r=n.n(o);function i(e){e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var t=new RegExp("[\\?&]"+e+"=([^&#]*)").exec(location.search);return null===t?"":decodeURIComponent(t[1].replace(/\+/g," "))}var a=function(){void 0!==r.a.get("utm_source")&&void 0!==r.a.get("utm_medium")&&void 0!==r.a.get("utm_campaign")&&void 0!==r.a.get("utm_term")&&void 0!==r.a.get("clickid")?(r.a.remove("utm_medium"),r.a.remove("utm_campaign"),r.a.remove("utm_source"),r.a.remove("utm_term"),r.a.remove("clickid")):void 0!==r.a.get("utm_source")&&void 0!==r.a.get("afclick")?(r.a.remove("utm_source"),r.a.remove("afclick")):void 0!==r.a.get("utm_source")&&void 0!==r.a.get("clickid")&&void 0!==r.a.get("wmid")?(r.a.remove("utm_source"),r.a.remove("clickid"),r.a.remove("wmid")):void 0!==r.a.get("utm_source")&&r.a.remove("utm_source")},s=function(){i("utm_source").length>0&&i("utm_medium").length>0&&i("utm_campaign").length>0&&i("utm_term").length>0&&i("clickid").length>0&&(a(),i("utm_source").includes("qaz")&&(localStorage.clear(),r.a.set("utm_source","qaz",{expires:1}),r.a.set("utm_medium",i("utm_medium"),{expires:1}),r.a.set("utm_campaign",i("utm_campaign"),{expires:1}),r.a.set("utm_term",i("utm_term"),{expires:1}),r.a.set("clickid",i("clickid"),{expires:1}))),i("utm_source").length>0&&i("afclick").length>0&&"loangate"===i("utm_source")&&(a(),localStorage.clear(),r.a.set("utm_source",i("utm_source"),{expires:30}),r.a.set("afclick",i("afclick"),{expires:30})),i("utm_source").length>0&&i("cpa_click_id").length>0&&i("cpa_wm_id").length>0&&"leadgid"===i("utm_source")&&(a(),localStorage.clear(),r.a.set("utm_source",i("utm_source"),{expires:30}),r.a.set("clickid",i("cpa_click_id"),{expires:30}),r.a.set("wmid",i("cpa_wm_id"),{expires:30})),i("utm_source").length>0&&i("v").length>0&&i("utm_medium").length>0&&i("utm_campaign").length>0&&i("web_id").length>0&&"doaff"===i("utm_source")&&(a(),localStorage.clear(),r.a.set("utm_source",i("utm_source"),{expires:30}),r.a.set("utm_medium",i("utm_medium"),{expires:30}),r.a.set("utm_campaign",i("utm_campaign"),{expires:30}),r.a.set("utm_term",i("web_id"),{expires:30}),r.a.set("clickid",i("v"),{expires:30})),i("utm_source").length>0&&i("clickid").length>0&&"upsala"===i("utm_source")&&(a(),localStorage.clear(),r.a.set("utm_source",i("utm_source"),{expires:30}),r.a.set("clickid",i("clickid"),{expires:30}),r.a.set("wmid","nothing",{expires:30})),i("utm_source").length>0&&i("utm_source").includes("sms")&&(localStorage.clear(),a(),r.a.set("utm_source",i("utm_source"),{expires:1}))}},mS3u:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return p})),n.d(t,"d",(function(){return m})),n.d(t,"c",(function(){return h})),n.d(t,"j",(function(){return g})),n.d(t,"f",(function(){return _})),n.d(t,"g",(function(){return O})),n.d(t,"h",(function(){return y})),n.d(t,"i",(function(){return k})),n.d(t,"e",(function(){return v}));var o=n("DH+K"),r=n("nOHt"),i=n.n(r),a=n("p46w"),s=n.n(a),c=n("HbFR"),u=function(e){return{type:o.d,payload:e}};function l(e){return String(e).replace(/[^A-Z0-9]/g,"")}var p=function(e){return{type:o.b,payload:e}},d=function(e){return{type:"SUCCESS_MESSAGE",payload:e}},m=function(e){return{type:"ERROR_MESSAGE",payload:e}},h=function(){return{type:"EMPTY_MESSAGE"}},f=function(e){return{type:"ADD_REGISTRATION",payload:e}},g=function(e){return{type:"STEP_REGISTRATION",payload:e}},b=function(e){return{type:"IS_LOADING",payload:e}},_=function(e){return function(t){return t(h()),t(b(!0)),e.phone=l(e.phone),fetch("https://api.money-men.kz/api/registration_step_one",{method:"POST",body:JSON.stringify(e),headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json",Accept:"application/json"},credentials:"same-origin"}).then((function(e){if(e.ok)return e;throw e})).then((function(e){return e.json()})).then((function(n){return t(f(e))})).then((function(e){return t(b(!1))})).then((function(e){return t(g(1))})).then((function(e){localStorage.setItem("step",1)})).then((function(e){return window.scrollTo(0,0)})).then((function(e){return t(d(""))})).catch((function(e){return e.json().then((function(e){t(m(e.errors.iin?"\u0418\u041d\u041d \u0443\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d. \u0412\u044b \u0431\u0443\u0434\u0435\u0442\u0435 \u043f\u0435\u0440\u0435\u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u044b \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f! ":e.errors.password?"\u041f\u0430\u0440\u043e\u043b\u0438 \u043d\u0435 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u044e\u0442":e.errors.phone?"\u041f\u043e\u043b\u044c\u0432\u043e\u0437\u0430\u0442\u0435\u043b\u044c \u0441 \u0442\u0430\u043a\u0438\u043c \u0442\u0435\u043b\u0435\u0444\u043e\u043d \u043d\u043e\u043c\u0435\u0440\u043e\u043c \u0443\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d":e.errors.email||e.errors)),setTimeout((function(){var t;(t=e.errors)&&t.iin?document.location.replace("https://www.i-credit.kz/login"):console.log("not working")}),3e3)}))})).then((function(){return t(b(!1))}))}};var O=function(e){return function(t){return t(h()),t(b(!0)),e.source="i-credit1",void 0!==s.a.get("utm_source")&&(e.source=s.a.get("utm_source")+"_1"),fetch("https://api.money-men.kz/api/check_sms_code",{method:"POST",body:JSON.stringify(e),headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json",Accept:"application/json"},credentials:"same-origin"}).then((function(e){if(e.ok)return e;throw e})).then((function(e){return e.json()})).then((function(e){localStorage.setItem("token",e.access_token)})).then((function(e){return t(f(""))})).then((function(e){return t(g(2))})).then((function(){return t(h())})).then((function(e){localStorage.setItem("step",2)})).then((function(e){return window.scrollTo(0,0)})).then((function(e){return t(b(!1))})).catch((function(e){return e.json().then((function(e){return t(m("\u041e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0439 \u0432\u0430\u043c\u0438 \u043a\u043e\u0434 \u043d\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442"))}))})).then((function(){return t(b(!1))}))}},y=function(e){return function(t){return t(b(!0)),e.relative_phone_number=l(e.relative_phone_number),e.additional_contact_phone=l(e.additional_contact_phone),fetch("https://api.money-men.kz/api/registration_step_two",{method:"POST",body:JSON.stringify(e),headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer ".concat(localStorage.getItem("token"))},credentials:"same-origin"}).then((function(e){if(e.ok)return e;throw e})).then((function(e){return e.json()})).then((function(e){return t(b(!1))})).then((function(e){return t(g(3))})).then((function(){return t(h())})).then((function(e){localStorage.setItem("step",3)})).then((function(e){return window.scrollTo(0,0)})).catch((function(e){return e.json().then((function(e){return t(m(e.errors.relative_name||e.errors.relative_last_name||e.errors.relative_phone_number||e.errors.apartment||e.message))}))})).then((function(){return t(b(!1))}))}},k=function(e){return function(t){return t(b(!0)),e.card_number=l(e.card_number),fetch("https://api.money-men.kz/api/last_step",{method:"POST",body:JSON.stringify(e),headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer ".concat(localStorage.getItem("token"))},credentials:"same-origin"}).then((function(e){if(e.ok)return e;throw e})).then((function(e){return e.json()})).then((function(e){return t(d("\u0423\u0441\u043f\u0435\u0448\u043d\u043e"))})).then((function(e){return setTimeout((function(){t(g(0))}),6e3)})).then((function(e){return t(b(!1))})).then((function(e){return setTimeout((function(){localStorage.clear()}),5e3)})).then((function(e){return i.a.push("/thanks")})).then((function(e){return Object(c.b)()})).catch((function(e){return e.json().then((function(e){return t(m(e.errors.id_card_number?"\u041d\u043e\u043c\u0435\u0440 \u0443\u0434\u043e\u0441\u0442\u0432\u043e\u0440\u0435\u043d\u0438\u0435 \u043b\u0438\u0447\u043d\u043e\u0441\u0442\u0438 \u0443\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d":e.errors.iban_account||e.errors.card_number||e.errors||null))}))})).then((function(){return t(b(!1))}))}};var v=function(e){return function(t){return t({type:"DATE_LOADING"}),fetch("https://api.money-men.kz/api/city/".concat(e),{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){if(e.ok)return e;var t=new Error("Error ".concat(e.status,": ").concat(e.statusText));throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(e){return t({type:"REGION_SUCCESS",payload:e})})).catch((function(e){return t({type:"DATE_FAILED",payload:e.message})}))}}}}]);