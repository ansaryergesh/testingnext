_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[33],{"2m+V":function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/password_reset",function(){return t("zOTV")}])},"DH+K":function(e,n,t){"use strict";t.d(n,"b",(function(){return r})),t.d(n,"d",(function(){return i})),t.d(n,"a",(function(){return a})),t.d(n,"e",(function(){return o})),t.d(n,"c",(function(){return c}));var r="DAY_CHANGE",i="MONEY_CHANGE",a="ADD_REGISTRATION",o="STEP_REGISTRATION",c="IS_LOADING"},"HaE+":function(e,n,t){"use strict";function r(e,n,t,r,i,a,o){try{var c=e[a](o),u=c.value}catch(s){return void t(s)}c.done?n(u):Promise.resolve(u).then(r,i)}function i(e){return function(){var n=this,t=arguments;return new Promise((function(i,a){var o=e.apply(n,t);function c(e){r(o,i,a,c,u,"next",e)}function u(e){r(o,i,a,c,u,"throw",e)}c(void 0)}))}}t.d(n,"a",(function(){return i}))},HbFR:function(e,n,t){"use strict";t.d(n,"b",(function(){return o})),t.d(n,"a",(function(){return c}));var r=t("p46w"),i=t.n(r);function a(e){e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var n=new RegExp("[\\?&]"+e+"=([^&#]*)").exec(location.search);return null===n?"":decodeURIComponent(n[1].replace(/\+/g," "))}var o=function(){void 0!==i.a.get("utm_source")&&void 0!==i.a.get("utm_medium")&&void 0!==i.a.get("utm_campaign")&&void 0!==i.a.get("utm_term")&&void 0!==i.a.get("clickid")?(i.a.remove("utm_medium"),i.a.remove("utm_campaign"),i.a.remove("utm_source"),i.a.remove("utm_term"),i.a.remove("clickid")):void 0!==i.a.get("utm_source")&&void 0!==i.a.get("afclick")?(i.a.remove("utm_source"),i.a.remove("afclick")):void 0!==i.a.get("utm_source")&&void 0!==i.a.get("clickid")&&void 0!==i.a.get("wmid")?(i.a.remove("utm_source"),i.a.remove("clickid"),i.a.remove("wmid")):void 0!==i.a.get("utm_source")&&i.a.remove("utm_source")},c=function(){a("utm_source").length>0&&a("utm_medium").length>0&&a("utm_campaign").length>0&&a("utm_term").length>0&&a("clickid").length>0&&(o(),a("utm_source").includes("qaz")&&(localStorage.clear(),i.a.set("utm_source","qaz",{expires:1}),i.a.set("utm_medium",a("utm_medium"),{expires:1}),i.a.set("utm_campaign",a("utm_campaign"),{expires:1}),i.a.set("utm_term",a("utm_term"),{expires:1}),i.a.set("clickid",a("clickid"),{expires:1}))),a("utm_source").length>0&&a("afclick").length>0&&"loangate"===a("utm_source")&&(o(),localStorage.clear(),i.a.set("utm_source",a("utm_source"),{expires:30}),i.a.set("afclick",a("afclick"),{expires:30})),a("utm_source").length>0&&a("cpa_click_id").length>0&&a("cpa_wm_id").length>0&&"leadgid"===a("utm_source")&&(o(),localStorage.clear(),i.a.set("utm_source",a("utm_source"),{expires:30}),i.a.set("clickid",a("cpa_click_id"),{expires:30}),i.a.set("wmid",a("cpa_wm_id"),{expires:30})),a("utm_source").length>0&&a("v").length>0&&a("utm_medium").length>0&&a("utm_campaign").length>0&&a("web_id").length>0&&"doaff"===a("utm_source")&&(o(),localStorage.clear(),i.a.set("utm_source",a("utm_source"),{expires:30}),i.a.set("utm_medium",a("utm_medium"),{expires:30}),i.a.set("utm_campaign",a("utm_campaign"),{expires:30}),i.a.set("utm_term",a("web_id"),{expires:30}),i.a.set("clickid",a("v"),{expires:30})),a("utm_source").length>0&&a("clickid").length>0&&"upsala"===a("utm_source")&&(o(),localStorage.clear(),i.a.set("utm_source",a("utm_source"),{expires:30}),i.a.set("clickid",a("clickid"),{expires:30}),i.a.set("wmid","nothing",{expires:30})),a("utm_source").length>0&&a("utm_source").includes("sms")&&(localStorage.clear(),o(),i.a.set("utm_source",a("utm_source"),{expires:1}))}},YFqc:function(e,n,t){e.exports=t("cTJO")},cTJO:function(e,n,t){"use strict";var r=t("J4zp"),i=t("284h");n.__esModule=!0,n.default=void 0;var a,o=i(t("q1tI")),c=t("elyg"),u=t("nOHt"),s=new Map,l=window.IntersectionObserver,d={};var m=function(e,n){var t=a||(l?a=new l((function(e){e.forEach((function(e){if(s.has(e.target)){var n=s.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),s.delete(e.target),n())}}))}),{rootMargin:"200px"}):void 0);return t?(t.observe(e),s.set(e,n),function(){try{t.unobserve(e)}catch(n){console.error(n)}s.delete(e)}):function(){}};function f(e,n,t,r){(0,c.isLocalURL)(n)&&(e.prefetch(n,t,r).catch((function(e){0})),d[n+"%"+t]=!0)}var p=function(e){var n=!1!==e.prefetch,t=(0,u.useRouter)(),i=t&&t.pathname||"/",a=o.default.useMemo((function(){var n=(0,c.resolveHref)(i,e.href,!0),t=r(n,2),a=t[0],o=t[1];return{href:a,as:e.as?(0,c.resolveHref)(i,e.as):o||a}}),[i,e.href,e.as]),s=a.href,p=a.as,h=e.children,g=e.replace,_=e.shallow,v=e.scroll,b=e.locale;"string"===typeof h&&(h=o.default.createElement("a",null,h));var j=o.Children.only(h),y=j&&"object"===typeof j&&j.ref,k=o.default.useRef(),O={ref:o.default.useCallback((function(e){(k.current&&(k.current(),k.current=void 0),n&&l&&e&&e.tagName&&(0,c.isLocalURL)(s))&&(d[s+"%"+p]||(k.current=m(e,(function(){f(t,s,p,{locale:"undefined"!==typeof b?b:t&&t.locale})}))));y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[n,y,s,p,t,b]),onClick:function(e){j.props&&"function"===typeof j.props.onClick&&j.props.onClick(e),e.defaultPrevented||function(e,n,t,r,i,a,o,u){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(t))&&(e.preventDefault(),null==o&&(o=r.indexOf("#")<0),n[i?"replace":"push"](t,r,{shallow:a,locale:u}).then((function(e){e&&o&&(window.scrollTo(0,0),document.body.focus())})))}(e,t,s,p,g,_,v,b)}};return n&&(O.onMouseEnter=function(e){(0,c.isLocalURL)(s)&&(j.props&&"function"===typeof j.props.onMouseEnter&&j.props.onMouseEnter(e),f(t,s,p,{priority:!0}))}),(e.passHref||"a"===j.type&&!("href"in j.props))&&(O.href=(0,c.addBasePath)((0,c.addLocale)(p,"undefined"!==typeof b?b:t&&t.locale,t&&t.defaultLocale))),o.default.cloneElement(j,O)};n.default=p},mS3u:function(e,n,t){"use strict";t.d(n,"b",(function(){return s})),t.d(n,"a",(function(){return d})),t.d(n,"k",(function(){return m})),t.d(n,"d",(function(){return f})),t.d(n,"c",(function(){return p})),t.d(n,"j",(function(){return g})),t.d(n,"f",(function(){return v})),t.d(n,"g",(function(){return b})),t.d(n,"h",(function(){return j})),t.d(n,"i",(function(){return y})),t.d(n,"e",(function(){return k}));var r=t("DH+K"),i=t("nOHt"),a=t.n(i),o=t("p46w"),c=t.n(o),u=t("HbFR"),s=function(e){return{type:r.d,payload:e}};function l(e){return String(e).replace(/[^A-Z0-9]/g,"")}var d=function(e){return{type:r.b,payload:e}},m=function(e){return{type:"SUCCESS_MESSAGE",payload:e}},f=function(e){return{type:"ERROR_MESSAGE",payload:e}},p=function(){return{type:"EMPTY_MESSAGE"}},h=function(e){return{type:"ADD_REGISTRATION",payload:e}},g=function(e){return{type:"STEP_REGISTRATION",payload:e}},_=function(e){return{type:"IS_LOADING",payload:e}},v=function(e){return function(n){return n(p()),n(_(!0)),e.phone=l(e.phone),fetch("https://api.money-men.kz/api/registration_step_one",{method:"POST",body:JSON.stringify(e),headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json",Accept:"application/json"},credentials:"same-origin"}).then((function(e){if(e.ok)return e;throw e})).then((function(e){return e.json()})).then((function(t){return n(h(e))})).then((function(e){return n(_(!1))})).then((function(e){return n(g(1))})).then((function(e){localStorage.setItem("step",1)})).then((function(e){return window.scrollTo(0,0)})).then((function(e){return n(m(""))})).catch((function(e){return e.json().then((function(e){n(f(e.errors.iin?"\u0418\u041d\u041d \u0443\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d. \u0412\u044b \u0431\u0443\u0434\u0435\u0442\u0435 \u043f\u0435\u0440\u0435\u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u044b \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f! ":e.errors.password?"\u041f\u0430\u0440\u043e\u043b\u0438 \u043d\u0435 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u044e\u0442":e.errors.phone?"\u041f\u043e\u043b\u044c\u0432\u043e\u0437\u0430\u0442\u0435\u043b\u044c \u0441 \u0442\u0430\u043a\u0438\u043c \u0442\u0435\u043b\u0435\u0444\u043e\u043d \u043d\u043e\u043c\u0435\u0440\u043e\u043c \u0443\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d":e.errors.email||e.errors)),setTimeout((function(){var n;(n=e.errors)&&n.iin?document.location.replace("https://www.i-credit.kz/login"):console.log("not working")}),3e3)}))})).then((function(){return n(_(!1))}))}};var b=function(e){return function(n){return n(p()),n(_(!0)),e.source="i-credit1",void 0!==c.a.get("utm_source")&&(e.source=c.a.get("utm_source")+"_1"),fetch("https://api.money-men.kz/api/check_sms_code",{method:"POST",body:JSON.stringify(e),headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json",Accept:"application/json"},credentials:"same-origin"}).then((function(e){if(e.ok)return e;throw e})).then((function(e){return e.json()})).then((function(e){localStorage.setItem("token",e.access_token)})).then((function(e){return n(h(""))})).then((function(e){return n(g(2))})).then((function(){return n(p())})).then((function(e){localStorage.setItem("step",2)})).then((function(e){return window.scrollTo(0,0)})).then((function(e){return n(_(!1))})).catch((function(e){return e.json().then((function(e){return n(f("\u041e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0439 \u0432\u0430\u043c\u0438 \u043a\u043e\u0434 \u043d\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442"))}))})).then((function(){return n(_(!1))}))}},j=function(e){return function(n){return n(_(!0)),e.relative_phone_number=l(e.relative_phone_number),e.additional_contact_phone=l(e.additional_contact_phone),fetch("https://api.money-men.kz/api/registration_step_two",{method:"POST",body:JSON.stringify(e),headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer ".concat(localStorage.getItem("token"))},credentials:"same-origin"}).then((function(e){if(e.ok)return e;throw e})).then((function(e){return e.json()})).then((function(e){return n(_(!1))})).then((function(e){return n(g(3))})).then((function(){return n(p())})).then((function(e){localStorage.setItem("step",3)})).then((function(e){return window.scrollTo(0,0)})).catch((function(e){return e.json().then((function(e){return n(f(e.errors.relative_name||e.errors.relative_last_name||e.errors.relative_phone_number||e.errors.apartment||e.message))}))})).then((function(){return n(_(!1))}))}},y=function(e){return function(n){return n(_(!0)),e.card_number=l(e.card_number),fetch("https://api.money-men.kz/api/last_step",{method:"POST",body:JSON.stringify(e),headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer ".concat(localStorage.getItem("token"))},credentials:"same-origin"}).then((function(e){if(e.ok)return e;throw e})).then((function(e){return e.json()})).then((function(e){return n(m("\u0423\u0441\u043f\u0435\u0448\u043d\u043e"))})).then((function(e){return setTimeout((function(){n(g(0))}),6e3)})).then((function(e){return n(_(!1))})).then((function(e){return setTimeout((function(){localStorage.clear()}),5e3)})).then((function(e){return a.a.push("/thanks")})).then((function(e){return Object(u.b)()})).catch((function(e){return e.json().then((function(e){return n(f(e.errors.id_card_number?"\u041d\u043e\u043c\u0435\u0440 \u0443\u0434\u043e\u0441\u0442\u0432\u043e\u0440\u0435\u043d\u0438\u0435 \u043b\u0438\u0447\u043d\u043e\u0441\u0442\u0438 \u0443\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d":e.errors.iban_account||e.errors.card_number||e.errors||null))}))})).then((function(){return n(_(!1))}))}};var k=function(e){return function(n){return n({type:"DATE_LOADING"}),fetch("https://api.money-men.kz/api/city/".concat(e),{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){if(e.ok)return e;var n=new Error("Error ".concat(e.status,": ").concat(e.statusText));throw n.response=e,n}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(e){return n({type:"REGION_SUCCESS",payload:e})})).catch((function(e){return n({type:"DATE_FAILED",payload:e.message})}))}}},ppuw:function(e,n,t){"use strict";t.d(n,"m",(function(){return r})),t.d(n,"n",(function(){return i})),t.d(n,"a",(function(){return a})),t.d(n,"g",(function(){return o})),t.d(n,"l",(function(){return c})),t.d(n,"i",(function(){return u})),t.d(n,"j",(function(){return s})),t.d(n,"e",(function(){return l})),t.d(n,"d",(function(){return d})),t.d(n,"k",(function(){return m})),t.d(n,"c",(function(){return f})),t.d(n,"f",(function(){return p})),t.d(n,"h",(function(){return h})),t.d(n,"b",(function(){return g}));var r=function(e){return e&&e.length},i=function(e){return/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)},a=function(e){return!1===/[a-zA-Z0-9_"*/]/i.test(e)},o=function(e){if(e&&12!==e.length)return!1;if(!e)return!1;for(var n=[1,2,3,4,5,6,7,8,9,10,11],t=[3,4,5,6,7,8,9,10,11,1,2],r=[],i=0,a=0;a<12;a++)r[a]=parseInt(e.substring(a,a+1)),a<11&&(i+=r[a]*n[a]);if(10==(i%=11)){i=0;for(a=0;a<11;a++)i+=r[a]*t[a];i%=11}return i==r[11]},c=function(e){var n=String(e).replace(/[^A-Z0-9]/g,""),t=n.match(/^(\d{4})(\d{3})(\d{4})$/);if(!t||11!==n.length)return!1;var r=t[1];return[{id:"7700"},{id:"7701"},{id:"7702"},{id:"7705"},{id:"7706"},{id:"7707"},{id:"7708"},{id:"7747"},{id:"7771"},{id:"7775"},{id:"7776"},{id:"7777"},{id:"7778"}].filter((function(e){return e.id==r})).length>0},u=function(e){var n=String(e).toUpperCase().replace(/[^A-Z0-9]/g,""),t=n.match(/^([A-Z]{2})(\d{2})(\d{3})([A-Z\d]+)$/);if(!t||20!==n.length)return"\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u043e\u043b\u0435 \u0434\u043e \u043a\u043e\u043d\u0446\u0430";var r=t[3],i=[{id:"947",name:'\u0410\u041e "\u0414\u043e\u0447\u0435\u0440\u043d\u0438\u0439 \u0411\u0430\u043d\u043a "\u0410\u041b\u042c\u0424\u0410-\u0411\u0410\u041d\u041a"'},{id:"826",name:'\u0410\u041e "\u0410\u0422\u0424\u0411\u0430\u043d\u043a"'},{id:"949",name:'\u0410\u041e "Altyn Bank" (\u0414\u0411 China Citic Bank Corporation Limited) '},{id:"913",name:'\u0410\u041e \u0414\u0411 "\u0411\u0410\u041d\u041a \u041a\u0418\u0422\u0410\u042f \u0412 \u041a\u0410\u0417\u0410\u0425\u0421\u0422\u0410\u041d\u0415"'},{id:"722",name:'\u0410\u041e "KASPI BANK"'},{id:"766",name:'\u0410\u041e "\u0426\u0435\u043d\u0442\u0440\u0430\u043b\u044c\u043d\u044b\u0439 \u0414\u0435\u043f\u043e\u0437\u0438\u0442\u0430\u0440\u0438\u0439 \u0426\u0435\u043d\u043d\u044b\u0445 \u0411\u0443\u043c\u0430\u0433"'},{id:"832",name:'\u0410\u041e "\u0421\u0438\u0442\u0438\u0431\u0430\u043d\u043a \u041a\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043d"'},{id:"907",name:'\u0410\u041e "\u0411\u0430\u043d\u043a \u0420\u0430\u0437\u0432\u0438\u0442\u0438\u044f \u041a\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043d\u0430"'},{id:"700",name:"\u0415\u0412\u0420\u0410\u0417\u0418\u0419\u0421\u041a\u0418\u0419 \u0411\u0410\u041d\u041a \u0420\u0410\u0417\u0412\u0418\u0422\u0418\u042f"},{id:"948",name:'\u0410\u041e "\u0415\u0432\u0440\u0430\u0437\u0438\u0439\u0441\u043a\u0438\u0439 \u0411\u0430\u043d\u043a"'},{id:"009",name:'\u041d\u0410\u041e \u0413\u043e\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043d\u043d\u0430\u044f \u043a\u043e\u0440\u043f\u043e\u0440\u0430\u0446\u0438\u044f "\u041f\u0440\u0430\u0432\u0438\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u043e \u0434\u043b\u044f \u0433\u0440\u0430\u0436\u0434\u0430\u043d"'},{id:"972",name:'\u0410\u041e "\u0416\u0438\u043b\u0441\u0442\u0440\u043e\u0439\u0441\u0431\u0435\u0440\u0431\u0430\u043d\u043a \u041a\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043d\u0430"'},{id:"246",name:'\u0410\u041e "\u0418\u0441\u043b\u0430\u043c\u0441\u043a\u0438\u0439 \u0411\u0430\u043d\u043a "Al Hilal"'},{id:"601",name:'\u0410\u041e "\u041d\u0430\u0440\u043e\u0434\u043d\u044b\u0439 \u0411\u0430\u043d\u043a \u041a\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043d\u0430"'},{id:"930",name:'\u0410\u041e "\u0422\u043e\u0440\u0433\u043e\u0432\u043e-\u043f\u0440\u043e\u043c\u044b\u0448\u043b\u0435\u043d\u043d\u044b\u0439 \u0411\u0430\u043d\u043a \u041a\u0438\u0442\u0430\u044f \u0432 \u0433. \u0410\u043b\u043c\u0430\u0442\u044b"'},{id:"550",name:"\u0433.\u041c\u043e\u0441\u043a\u0432\u0430 \u041c\u0435\u0436\u0433\u043e\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0439 \u0411\u0430\u043d\u043a"},{id:"886",name:'\u0414\u0411 \u0410\u041e "\u0425\u043e\u0443\u043c \u041a\u0440\u0435\u0434\u0438\u0442 \u044d\u043d\u0434 \u0424\u0438\u043d\u0430\u043d\u0441 \u0411\u0430\u043d\u043a"'},{id:"965",name:'\u0410\u041e "ForteBank"'},{id:"856",name:'\u0410\u041e "\u0411\u0430\u043d\u043a \u0426\u0435\u043d\u0442\u0440\u041a\u0440\u0435\u0434\u0438\u0442"'},{id:"927",name:'\u0410\u041e "\u041a\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043d\u0441\u043a\u0430\u044f \u0444\u043e\u043d\u0434\u043e\u0432\u0430\u044f \u0431\u0438\u0440\u0436\u0430"'},{id:"821",name:'\u0410\u041e "\u0411\u0430\u043d\u043a "Bank RBK"'},{id:"224",name:'\u0420\u0413\u041f "\u041a\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043d\u0441\u043a\u0438\u0439 \u0446\u0435\u043d\u0442\u0440 \u043c\u0435\u0436\u0431\u0430\u043d\u043a\u043e\u0432\u0441\u043a\u0438\u0445 \u0440\u0430\u0441\u0447\u0435\u0442\u043e\u0432 \u041d\u0411\u0420\u041a"'},{id:"070",name:'\u0420\u0413\u0423 "\u041a\u043e\u043c\u0438\u0442\u0435\u0442 \u043a\u0430\u0437\u043d\u0430\u0447\u0435\u0439\u0441\u0442\u0432\u0430 \u041c\u0438\u043d\u0438\u0441\u0442\u0435\u0440\u0441\u0442\u0432\u0430 \u0444\u0438\u043d\u0430\u043d\u0441\u043e\u0432 \u0420\u041a"'},{id:"563",name:'\u0410\u041e "\u041a\u0410\u0417\u041f\u041e\u0427\u0422\u0410"'},{id:"551",name:'\u0410\u041e "\u0411\u0430\u043d\u043a Kassa Nova" (\u0414\u043e\u0447\u0435\u0440\u043d\u0438\u0439 \u0431\u0430\u043d\u043a \u0410\u041e "ForteBank")'},{id:"885",name:'\u0410\u041e "\u0414\u0411 "\u041a\u0410\u0417\u0410\u0425\u0421\u0422\u0410\u041d-\u0417\u0418\u0420\u0410\u0410\u0422 \u0418\u041d\u0422\u0415\u0420\u041d\u0415\u0428\u041d\u041b \u0411\u0410\u041d\u041a"'},{id:"774",name:'\u0410\u041e "AsiaCredit Bank (\u0410\u0437\u0438\u044f\u041a\u0440\u0435\u0434\u0438\u0442 \u0411\u0430\u043d\u043a)" '},{id:"553",name:'\u0410\u041e \u0414\u0411 "\u041d\u0430\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0439 \u0411\u0430\u043d\u043a \u041f\u0430\u043a\u0438\u0441\u0442\u0430\u043d\u0430" \u0432 \u041a\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043d\u0435'},{id:"147",name:'"\u0411\u0430\u043d\u043a-\u043a\u0430\u0441\u0442\u043e\u0434\u0438\u0430\u043d \u0410\u041e  "\u0415\u041d\u041f\u0424"'},{id:"125",name:"\u0420\u0413\u0423 \u041d\u0430\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0439 \u0411\u0430\u043d\u043a \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0438 \u041a\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043d"},{id:"849",name:'\u0410\u041e "\u041d\u0443\u0440\u0431\u0430\u043d\u043a"'},{id:"914",name:'\u0414\u0411 \u0410\u041e "\u0421\u0431\u0435\u0440\u0431\u0430\u043d\u043a"'},{id:"435",name:'\u0410\u041e "\u0428\u0438\u043d\u0445\u0430\u043d \u0411\u0430\u043d\u043a \u041a\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043d"'},{id:"781",name:'\u0410\u041e "Capital Bank Kazakhstan"'},{id:"620",name:'\u0410\u041e "Tengri Bank"'},{id:"998",name:'\u0410\u041e "First Heartland Jysan Bank"'},{id:"432",name:"\u0414\u041e \u0410\u041e \u0411\u0430\u043d\u043a \u0412\u0422\u0411 (\u041a\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043d)"},{id:"896",name:'\u0410\u041e "\u0418\u0441\u043b\u0430\u043c\u0441\u043a\u0438\u0439 \u0431\u0430\u043d\u043a "\u0417\u0430\u043c\u0430\u043d-\u0411\u0430\u043d\u043a"'},""].filter((function(e){return e.id==r}));return i.length>0?i[0].name:"\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 \u0441\u0447\u0435\u0442"},s=function(e){var n=String(e).toUpperCase().replace(/[^A-Z0-9]/g,""),t=n.match(/^([A-Z]{2})(\d{2})(\d{3})([A-Z\d]+)$/);if(!t||20!==n.length)return!1;var r=t[3];return[{id:"947",name:'\u0410\u041e "\u0414\u043e\u0447\u0435\u0440\u043d\u0438\u0439 \u0411\u0430\u043d\u043a "\u0410\u041b\u042c\u0424\u0410-\u0411\u0410\u041d\u041a"'},{id:"826",name:'\u0410\u041e "\u0410\u0422\u0424\u0411\u0430\u043d\u043a"'},{id:"949",name:'\u0410\u041e "Altyn Bank" (\u0414\u0411 China Citic Bank Corporation Limited) '},{id:"913",name:'\u0410\u041e \u0414\u0411 "\u0411\u0410\u041d\u041a \u041a\u0418\u0422\u0410\u042f \u0412 \u041a\u0410\u0417\u0410\u0425\u0421\u0422\u0410\u041d\u0415"'},{id:"722",name:'\u0410\u041e "KASPI BANK"'},{id:"766",name:'\u0410\u041e "\u0426\u0435\u043d\u0442\u0440\u0430\u043b\u044c\u043d\u044b\u0439 \u0414\u0435\u043f\u043e\u0437\u0438\u0442\u0430\u0440\u0438\u0439 \u0426\u0435\u043d\u043d\u044b\u0445 \u0411\u0443\u043c\u0430\u0433"'},{id:"832",name:'\u0410\u041e "\u0421\u0438\u0442\u0438\u0431\u0430\u043d\u043a \u041a\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043d"'},{id:"907",name:'\u0410\u041e "\u0411\u0430\u043d\u043a \u0420\u0430\u0437\u0432\u0438\u0442\u0438\u044f \u041a\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043d\u0430"'},{id:"700",name:"\u0415\u0412\u0420\u0410\u0417\u0418\u0419\u0421\u041a\u0418\u0419 \u0411\u0410\u041d\u041a \u0420\u0410\u0417\u0412\u0418\u0422\u0418\u042f"},{id:"948",name:'\u0410\u041e "\u0415\u0432\u0440\u0430\u0437\u0438\u0439\u0441\u043a\u0438\u0439 \u0411\u0430\u043d\u043a"'},{id:"009",name:'\u041d\u0410\u041e \u0413\u043e\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043d\u043d\u0430\u044f \u043a\u043e\u0440\u043f\u043e\u0440\u0430\u0446\u0438\u044f "\u041f\u0440\u0430\u0432\u0438\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u043e \u0434\u043b\u044f \u0433\u0440\u0430\u0436\u0434\u0430\u043d"'},{id:"972",name:'\u0410\u041e "\u0416\u0438\u043b\u0441\u0442\u0440\u043e\u0439\u0441\u0431\u0435\u0440\u0431\u0430\u043d\u043a \u041a\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043d\u0430"'},{id:"246",name:'\u0410\u041e "\u0418\u0441\u043b\u0430\u043c\u0441\u043a\u0438\u0439 \u0411\u0430\u043d\u043a "Al Hilal"'},{id:"601",name:'\u0410\u041e "\u041d\u0430\u0440\u043e\u0434\u043d\u044b\u0439 \u0411\u0430\u043d\u043a \u041a\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043d\u0430"'},{id:"930",name:'\u0410\u041e "\u0422\u043e\u0440\u0433\u043e\u0432\u043e-\u043f\u0440\u043e\u043c\u044b\u0448\u043b\u0435\u043d\u043d\u044b\u0439 \u0411\u0430\u043d\u043a \u041a\u0438\u0442\u0430\u044f \u0432 \u0433. \u0410\u043b\u043c\u0430\u0442\u044b"'},{id:"550",name:"\u0433.\u041c\u043e\u0441\u043a\u0432\u0430 \u041c\u0435\u0436\u0433\u043e\u0441\u0443\u0434\u0430\u0440\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0439 \u0411\u0430\u043d\u043a"},{id:"886",name:'\u0414\u0411 \u0410\u041e "\u0425\u043e\u0443\u043c \u041a\u0440\u0435\u0434\u0438\u0442 \u044d\u043d\u0434 \u0424\u0438\u043d\u0430\u043d\u0441 \u0411\u0430\u043d\u043a"'},{id:"965",name:'\u0410\u041e "ForteBank"'},{id:"856",name:'\u0410\u041e "\u0411\u0430\u043d\u043a \u0426\u0435\u043d\u0442\u0440\u041a\u0440\u0435\u0434\u0438\u0442"'},{id:"927",name:'\u0410\u041e "\u041a\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043d\u0441\u043a\u0430\u044f \u0444\u043e\u043d\u0434\u043e\u0432\u0430\u044f \u0431\u0438\u0440\u0436\u0430"'},{id:"821",name:'\u0410\u041e "\u0411\u0430\u043d\u043a "Bank RBK"'},{id:"224",name:'\u0420\u0413\u041f "\u041a\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043d\u0441\u043a\u0438\u0439 \u0446\u0435\u043d\u0442\u0440 \u043c\u0435\u0436\u0431\u0430\u043d\u043a\u043e\u0432\u0441\u043a\u0438\u0445 \u0440\u0430\u0441\u0447\u0435\u0442\u043e\u0432 \u041d\u0411\u0420\u041a"'},{id:"070",name:'\u0420\u0413\u0423 "\u041a\u043e\u043c\u0438\u0442\u0435\u0442 \u043a\u0430\u0437\u043d\u0430\u0447\u0435\u0439\u0441\u0442\u0432\u0430 \u041c\u0438\u043d\u0438\u0441\u0442\u0435\u0440\u0441\u0442\u0432\u0430 \u0444\u0438\u043d\u0430\u043d\u0441\u043e\u0432 \u0420\u041a"'},{id:"563",name:'\u0410\u041e "\u041a\u0410\u0417\u041f\u041e\u0427\u0422\u0410"'},{id:"551",name:'\u0410\u041e "\u0411\u0430\u043d\u043a Kassa Nova" (\u0414\u043e\u0447\u0435\u0440\u043d\u0438\u0439 \u0431\u0430\u043d\u043a \u0410\u041e "ForteBank")'},{id:"885",name:'\u0410\u041e "\u0414\u0411 "\u041a\u0410\u0417\u0410\u0425\u0421\u0422\u0410\u041d-\u0417\u0418\u0420\u0410\u0410\u0422 \u0418\u041d\u0422\u0415\u0420\u041d\u0415\u0428\u041d\u041b \u0411\u0410\u041d\u041a"'},{id:"774",name:'\u0410\u041e "AsiaCredit Bank (\u0410\u0437\u0438\u044f\u041a\u0440\u0435\u0434\u0438\u0442 \u0411\u0430\u043d\u043a)" '},{id:"553",name:'\u0410\u041e \u0414\u0411 "\u041d\u0430\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0439 \u0411\u0430\u043d\u043a \u041f\u0430\u043a\u0438\u0441\u0442\u0430\u043d\u0430" \u0432 \u041a\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043d\u0435'},{id:"147",name:'"\u0411\u0430\u043d\u043a-\u043a\u0430\u0441\u0442\u043e\u0434\u0438\u0430\u043d \u0410\u041e  "\u0415\u041d\u041f\u0424"'},{id:"125",name:"\u0420\u0413\u0423 \u041d\u0430\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0439 \u0411\u0430\u043d\u043a \u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0438 \u041a\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043d"},{id:"849",name:'\u0410\u041e "\u041d\u0443\u0440\u0431\u0430\u043d\u043a"'},{id:"914",name:'\u0414\u0411 \u0410\u041e "\u0421\u0431\u0435\u0440\u0431\u0430\u043d\u043a"'},{id:"435",name:'\u0410\u041e "\u0428\u0438\u043d\u0445\u0430\u043d \u0411\u0430\u043d\u043a \u041a\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043d"'},{id:"781",name:'\u0410\u041e "Capital Bank Kazakhstan"'},{id:"620",name:'\u0410\u041e "Tengri Bank"'},{id:"998",name:'\u0410\u041e "First Heartland Jysan Bank"'},{id:"432",name:"\u0414\u041e \u0410\u041e \u0411\u0430\u043d\u043a \u0412\u0422\u0411 (\u041a\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043d)"},{id:"896",name:'\u0410\u041e "\u0418\u0441\u043b\u0430\u043c\u0441\u043a\u0438\u0439 \u0431\u0430\u043d\u043a "\u0417\u0430\u043c\u0430\u043d-\u0411\u0430\u043d\u043a"'},""].filter((function(e){return e.id==r})).length>0},l=function(e){if(10!==String(e).replace(/_/g,"").length)return!1;var n=new Date(e.substring(6,10)+"-"+e.substring(3,5)+"-"+e.substring(0,2));if("Invalid Date"==n)return!1;var t=new Date,r=t.getMonth()+1,i=t.getDate(),a=t.getFullYear(),o=n.getMonth()+1,c=n.getDate(),u=n.getFullYear();return!(u>a)&&(!(u<a-25)&&(u!==a||!(o===r&&c>i)&&!(o>r)))},d=function(e){if(10!==String(e).replace(/_/g,"").length)return!1;var n=new Date(e.substring(6,10)+"-"+e.substring(3,5)+"-"+e.substring(0,2));if("Invalid Date"==n)return!1;var t=new Date,r=(t.getMonth(),t.getDate(),t.getFullYear());n.getMonth(),n.getDate();return!(n.getFullYear()<r)},m=function(e){return/^[a-zA-Z\s]*$/.test(e)},f=function(e){return!(!e||2!==e.replace(/\s+$/,"").split(/\W+/).length)},p=function(e){return 9===String(e).replace(/_/g,"").length},h=function(e){var n=String(e).toUpperCase().replace(/[^0-9]/g,""),t=n.match(/^(\d{2})(\d{2})$/);return 4===n.length&&!(t[1]>12||t[2]<20)},g=function(e){if(/[^0-9-\s]+/.test(e))return!1;var n=0,t=!1;if(16!==(e=e.replace(/\D/g,"")).length)return!1;for(var r=e.length-1;r>=0;r--){var i=e.charAt(r),a=parseInt(i,10);t&&(a*=2)>9&&(a-=9),n+=a,t=!t}return n%10===0}},zOTV:function(e,n,t){"use strict";t.r(n);var r=t("o0o1"),i=t.n(r),a=t("HaE+"),o=t("1OyB"),c=t("vuIU"),u=t("JX7q"),s=t("Ji7U"),l=t("md7G"),d=t("foSv"),m=t("nKUr"),f=t("q1tI"),p=t.n(f),h=(t("82Mt"),t("GObB")),g=t.n(h),_=t("vDqi"),v=t.n(_),b=t("KYPV"),j=t("/MKj"),y=t("YFqc"),k=t.n(y),O=t("ppuw"),w=t("mS3u"),S=t("nOHt"),A=t.n(S);function x(e){var n=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=Object(d.a)(e);if(n){var i=Object(d.a)(this).constructor;t=Reflect.construct(r,arguments,i)}else t=r.apply(this,arguments);return Object(l.a)(this,t)}}var E=function(e){var n=e.children,t=e.className,r=e.href;return Object(m.jsx)(k.a,{href:r,children:Object(m.jsx)("a",{className:t,children:n})})},N=function(e){Object(s.a)(t,e);var n=x(t);function t(e){var r;return Object(o.a)(this,t),(r=n.call(this,e)).state={btnLoading:!1,message:null,errorMessage:null},r.handleSubmit=r.handleSubmit.bind(Object(u.a)(r)),r}return Object(c.a)(t,[{key:"handleSubmit",value:function(){var e=Object(a.a)(i.a.mark((function e(n){var t=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Object(O.n)(n.email)?(this.setState({errorMessage:null}),this.setState({btnLoading:!0}),v.a.post("https://api.money-men.kz/api/password/create",n).then((function(e){console.log(e),t.setState({btnLoading:!1}),A.a.push("/login"),t.props.successMessage(e.data.message)})).catch((function(e){t.setState({btnLoading:!1,errorMessage:e.response.data.message})}))):this.setState({errorMessage:"Email \u0430\u0434\u0440\u0435\u0441 \u0432\u0432\u0435\u0434\u0435\u043d \u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e"});case 1:case"end":return e.stop()}}),e,this)})));return function(n){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(m.jsx)("div",{children:Object(m.jsx)("section",{className:"otherPages",children:Object(m.jsx)("div",{className:"container",children:Object(m.jsx)("section",{className:"oplata feedback row",children:Object(m.jsxs)("div",{className:" oplate--form feedbackForm",children:[Object(m.jsx)("nav",{"aria-label":"container breadcrumb",children:Object(m.jsxs)("ol",{className:"breadcrumb text-center",children:[Object(m.jsx)("li",{className:"breadcrumb-item ",children:Object(m.jsx)(E,{className:"br-item",href:"/login",children:"\u041b\u0438\u0447\u043d\u044b\u0439 \u043a\u0430\u0431\u0438\u043d\u0435\u0442"})}),Object(m.jsx)("li",{className:"breadcrumb-item active","aria-current":"page",children:"\u0421\u0431\u0440\u043e\u0441 \u043f\u0430\u0440\u043e\u043b\u044f"})]})}),Object(m.jsx)(b.c,{initialValues:{email:""},onSubmit:function(n){e.handleSubmit(n)},children:function(n){n.errors,n.touched,n.isValidating,n.isSubmitting;return Object(m.jsxs)(b.b,{className:"oplataform",children:[Object(m.jsx)("h2",{className:"text-center mb-5",children:"\u0421\u0431\u0440\u043e\u0441 \u043f\u0430\u0440\u043e\u043b\u044f"}),null!==e.state.message?Object(m.jsx)("div",{className:"alert alert-success",role:"alert",children:Object(m.jsxs)("strong",{children:[" ",e.state.message]})}):null,null!==e.state.errorMessage?Object(m.jsx)("div",{className:"alert alert-danger",role:"alert",children:Object(m.jsxs)("strong",{children:[" ",e.state.errorMessage]})}):null,Object(m.jsxs)("div",{className:"input-group",children:[Object(m.jsx)("label",{htmlFor:"email",children:Object(m.jsx)("h2",{children:"Email \u0430\u0434\u0440\u0435\u0441:"})}),Object(m.jsx)(b.a,{name:"email",type:"text",placeholder:"\u0412\u0430\u0448 email \u0430\u0434\u0440\u0435\u0441"})]}),Object(m.jsx)("div",{className:"buttonForm",children:!0===e.state.btnLoading?Object(m.jsx)(g.a,{className:"loading",size:200,spinnerColor:"#ef2221",spinnerWidth:2,visible:!0}):Object(m.jsx)("button",{className:"loginbutton",type:"submit",children:"\u0421\u0431\u0440\u043e\u0441\u0438\u0442\u044c"})})]})}})]})})})})})}}]),t}(p.a.Component);n.default=Object(j.connect)(null,(function(e){return{successMessage:function(n){e(Object(w.k)(n))},emptyMessage:function(){e(Object(w.c)())}}}))(N)}},[["2m+V",0,1,2,3,4,6,8]]]);