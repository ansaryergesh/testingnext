_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[23],{"43wv":function(e,t,n){"use strict";var r=n("rePB");function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var a={user:null,loggedIn:!1,authenticatingUser:!1,failedLogin:!1,error:null};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CURRENT_USER":return c(c({},e),{},{user:t.payload,error:null,loggedIn:!0,authenticatingUser:!1});case"AUTHENTICATING_USER":return c(c({},e),{},{authenticatingUser:!0});case"AUTHENTICATED_USER":return c(c({},e),{},{authenticatingUser:!1});case"FAILED_LOGIN":return c(c({},e),{},{failedLogin:!0,error:t.payload,authenticatingUser:!1});case"LOGOUT_USER":return c(c({},e),{},{user:null,loggedIn:!1,authenticatingUser:!1,failedLogin:!1,error:null});default:return e}}},"DH+K":function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"d",(function(){return o})),n.d(t,"a",(function(){return c})),n.d(t,"e",(function(){return a})),n.d(t,"c",(function(){return u}));var r="DAY_CHANGE",o="MONEY_CHANGE",c="ADD_REGISTRATION",a="STEP_REGISTRATION",u="IS_LOADING"},Gkx9:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cabinet/repeated",function(){return n("lTjh")}])},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),o=n("284h");t.__esModule=!0,t.default=void 0;var c,a=o(n("q1tI")),u=n("elyg"),s=n("nOHt"),i=new Map,f=window.IntersectionObserver,l={};var p=function(e,t){var n=c||(f?c=new f((function(e){e.forEach((function(e){if(i.has(e.target)){var t=i.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(c.unobserve(e.target),i.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),i.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}i.delete(e)}):function(){}};function d(e,t,n,r){(0,u.isLocalURL)(t)&&(e.prefetch(t,n,r).catch((function(e){0})),l[t+"%"+n]=!0)}var h=function(e){var t=!1!==e.prefetch,n=(0,s.useRouter)(),o=n&&n.pathname||"/",c=a.default.useMemo((function(){var t=(0,u.resolveHref)(o,e.href,!0),n=r(t,2),c=n[0],a=n[1];return{href:c,as:e.as?(0,u.resolveHref)(o,e.as):a||c}}),[o,e.href,e.as]),i=c.href,h=c.as,g=e.children,v=e.replace,y=e.shallow,O=e.scroll,j=e.locale;"string"===typeof g&&(g=a.default.createElement("a",null,g));var b=a.Children.only(g),m=b&&"object"===typeof b&&b.ref,E=a.default.useRef(),U={ref:a.default.useCallback((function(e){(E.current&&(E.current(),E.current=void 0),t&&f&&e&&e.tagName&&(0,u.isLocalURL)(i))&&(l[i+"%"+h]||(E.current=p(e,(function(){d(n,i,h,{locale:"undefined"!==typeof j?j:n&&n.locale})}))));m&&("function"===typeof m?m(e):"object"===typeof m&&(m.current=e))}),[t,m,i,h,n,j]),onClick:function(e){b.props&&"function"===typeof b.props.onClick&&b.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,c,a,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,u.isLocalURL)(n))&&(e.preventDefault(),null==a&&(a=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:c,locale:s}).then((function(e){e&&a&&(window.scrollTo(0,0),document.body.focus())})))}(e,n,i,h,v,y,O,j)}};return t&&(U.onMouseEnter=function(e){(0,u.isLocalURL)(i)&&(b.props&&"function"===typeof b.props.onMouseEnter&&b.props.onMouseEnter(e),d(n,i,h,{priority:!0}))}),(e.passHref||"a"===b.type&&!("href"in b.props))&&(U.href=(0,u.addBasePath)((0,u.addLocale)(h,"undefined"!==typeof j?j:n&&n.locale,n&&n.defaultLocale))),a.default.cloneElement(b,U)};t.default=h},hNt4:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function(){var e,t=(new Date).getHours();return t<12?e="\ud83c\udf05  \u0414\u043e\u0431\u0440\u043e\u0435 \u0443\u0442\u0440\u043e":t>=12&&t<=17?e="\ud83c\udf1e  \u0414\u043e\u0431\u0440\u044b\u0439 \u0434\u0435\u043d\u044c":t>=17&&t<=24&&(e="\ud83c\udf07  \u0414\u043e\u0431\u0440\u044b\u0439 \u0432\u0435\u0447\u0435\u0440"),e}},lTjh:function(e,t,n){"use strict";n.r(t);var r=n("1OyB"),o=n("vuIU"),c=n("Ji7U"),a=n("md7G"),u=n("foSv"),s=n("nKUr"),i=n("q1tI"),f=n.n(i),l=n("/MKj"),p=n("toLX"),d=(n("43wv"),n("hNt4")),h=n("LeE0"),g=n("nOHt"),v=n.n(g),y=(n("GUC0"),n("vDqi")),O=n.n(y),j=n("8Kt/"),b=n.n(j);function m(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(u.a)(e);if(t){var o=Object(u.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(a.a)(this,n)}}var E=function(e){Object(c.a)(n,e);var t=m(n);function n(e){var o;return Object(r.a)(this,n),(o=t.call(this,e)).state={btnLoading:!1},o}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;localStorage.getItem("step")&&localStorage.getItem("step")<3?v.a.push("/get_money"):O.a.get("https://api.money-men.kz/api/repeatUser?iin=".concat(this.props.userReducer.user.UF_4)).then((function(t){e.setState({btnLoading:!0}),console.log(t),!1===t.data.success?v.a.push("/cabinet"):e.setState({btnLoading:!1})}))}},{key:"render",value:function(){return Object(s.jsxs)("div",{className:"otherPages",children:[Object(s.jsx)(b.a,{children:Object(s.jsx)("title",{children:"\u041f\u043e\u0432\u0442\u043e\u0440\u043d\u044b\u0439 \u0437\u0430\u0439\u043c"})}),this.state.btnLoading?Object(s.jsx)("div",{className:"modelLoader"}):Object(s.jsx)("div",{className:"modelLoader loaded"}),Object(s.jsxs)("h3",{className:" text-center",children:[Object(d.a)(),"   ",this.props.userReducer.user.UF_5," ",this.props.userReducer.user.UF_6," !"]}),Object(s.jsx)("p",{className:"container mt-3 repeatedinfo alert alert-info",children:'\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u0440\u043e\u043a \u0438 \u0441\u0443\u043c\u043c\u0430. \u0417\u0430\u0442\u0435\u043c \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u043d\u0430 \u043a\u043d\u043e\u043f\u043a\u0443 "\u041f\u043e\u043b\u0443\u0447\u0438\u0442\u044c \u0434\u0435\u043d\u044c\u0433\u0438" \u0447\u0442\u043e\u0431\u044b \u0441\u043e\u0432\u0435\u0440\u0448\u0438\u0442\u044c \u043f\u043e\u0432\u0442\u043e\u0440\u043d\u044b\u0439 \u0437\u0430\u0438\u043c'}),Object(s.jsx)("div",{className:"repeatBtn form-group"}),Object(s.jsx)("div",{className:"repeatedProgress",children:Object(s.jsx)(h.a,{})})]})}}]),n}(f.a.Component);t.default=Object(p.a)(Object(l.connect)((function(e){return{userReducer:e.userReducer}}))(E))},rePB:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},toLX:function(e,t,n){"use strict";var r=n("1OyB"),o=n("vuIU"),c=n("Ji7U"),a=n("md7G"),u=n("foSv"),s=n("nKUr"),i=n("q1tI"),f=n.n(i),l=n("/MKj"),p=n("nOHt"),d=n.n(p),h=n("w18f"),g=n("p46w"),v=n.n(g);function y(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(u.a)(e);if(t){var o=Object(u.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(a.a)(this,n)}}t.a=function(e){var t=function(t){Object(c.a)(a,t);var n=y(a);function a(){return Object(r.a)(this,a),n.apply(this,arguments)}return Object(o.a)(a,[{key:"componentDidMount",value:function(){v.a.get("token")&&!this.props.loggedIn&&this.props.fetchCurrentUser(),v.a.get("token")||d.a.push("/login")}},{key:"render",value:function(){return v.a.get("token")&&this.props.loggedIn?Object(s.jsx)(e,{}):!v.a.get("token")||!this.props.authenticatingUser&&this.props.loggedIn?Object(s.jsxs)("div",{className:"otherPages",children:[Object(s.jsx)("div",{className:"modelLoader"}),Object(s.jsx)("h2",{className:"text-center pt-5",children:"\u0412\u0440\u0435\u043c\u044f \u0432\u0430\u0448\u0435\u0433\u043e \u0441\u0435\u0430\u043d\u0441\u0430 \u0438\u0441\u0442\u0435\u043a\u043b\u043e"})]}):Object(s.jsxs)("div",{className:"otherPages",children:[Object(s.jsx)("div",{className:"pd-5 pt-5"}),Object(s.jsx)("div",{className:"modelLoader"})]})}}]),a}(f.a.Component);return Object(l.connect)((function(e){return{loggedIn:e.userReducer.loggedIn,authenticatingUser:e.userReducer.authenticatingUser}}),h)(t)}},w18f:function(e,t,n){"use strict";n.r(t),n.d(t,"authenticatingUser",(function(){return u})),n.d(t,"setCurrentUser",(function(){return s})),n.d(t,"dateLoading",(function(){return i})),n.d(t,"dateFailed",(function(){return f})),n.d(t,"statusSuccess",(function(){return l})),n.d(t,"historySuccess",(function(){return p})),n.d(t,"logoutUser",(function(){return d})),n.d(t,"loginUser",(function(){return h})),n.d(t,"fetchCurrentUser",(function(){return g})),n.d(t,"fetchUserStatus",(function(){return v})),n.d(t,"fetchUserHistory",(function(){return y}));var r=n("p46w"),o=n.n(r),c=n("nOHt"),a=n.n(c),u=function(){return{type:"AUTHENTICATING_USER"}},s=function(e){return{type:"SET_CURRENT_USER",payload:e}},i=function(){return{type:"DATE_LOADING"}},f=function(e){return{type:"DATE_FAILED",payload:e}},l=function(e){return{type:"STATUS_SUCCESS",payload:e}},p=function(e){return{type:"HISTORY_SUCCESS",payload:e}},d=function(){return{type:"LOGOUT_USER"}},h=function(e){return function(t){t({type:"AUTHENTICATING_USER"}),fetch("https://api.money-men.kz/api/login",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(e)}).then((function(e){if(e.ok)return e;var t=new Error("Error ".concat(e.status,": ").concat(e.statusText));throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(e){o.a.set("token",e.access_token,{expires:2});var n=t(g());console.log(n),t({type:"SET_CURRENT_USER",payload:"user"}),a.a.push("/cabinet/loans")})).catch((function(e){e.message.includes("400")?t({type:"FAILED_LOGIN",payload:"\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u044b\u0439 \u0418\u0418\u041d \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c"}):t({type:"FAILED_LOGIN",payload:e.message})}))}},g=function(){return function(e){e(u()),fetch("https://api.money-men.kz/api/getUserProfileFromBitrix",{method:"GET",headers:{Authorization:"Bearer ".concat(o.a.get("token"))}}).then((function(e){if(e.ok)return e;var t=new Error("Error ".concat(e.status,": ").concat(e.statusText));throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){e(s(t))})).catch((function(e){o.a.remove("token"),console.log(e.message||"Error")}))}},v=function(){return function(e){e(i(!0)),fetch("https://api.money-men.kz/api/getUserInfo",{method:"GET",headers:{Authorization:"Bearer ".concat(o.a.get("token"))}}).then((function(e){if(e.ok)return e;var t=new Error("Error ".concat(e.status,": ").concat(e.statusText));throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){e(l(t))})).catch((function(t){o.a.remove("token"),e(f(t.message)),console.log(t.message||"Error")}))}},y=function(){return function(e){e(i(!0)),fetch("https://api.money-men.kz/api/history",{method:"GET",headers:{Authorization:"Bearer ".concat(o.a.get("token"))}}).then((function(e){if(e.ok)return e;var t=new Error("Error ".concat(e.status,": ").concat(e.statusText));throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(t){e(p(t))})).catch((function(t){o.a.remove("token"),e(f(t.message)),console.log(t.message||"Error")}))}}}},[["Gkx9",0,1,2,3,4,6,5,7,13]]]);