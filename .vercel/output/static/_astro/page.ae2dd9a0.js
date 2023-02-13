var U=()=>{window.va||(window.va=function(...e){(window.vaq=window.vaq||[]).push(e)})};function V(){return typeof window<"u"}function N(){return typeof process>"u",!1}function Q(n="auto"){return n==="auto"?N()?"development":"production":n}var Y=(n={debug:!0})=>{var e;if(!V())return;const t=Q(n.mode);U(),n.beforeSend&&((e=window.va)==null||e.call(window,"beforeSend",n.beforeSend));const r=t==="development"?"https://cdn.vercel-insights.com/v1/script.debug.js":"/_vercel/insights/script.js";if(document.head.querySelector(`script[src*="${r}"]`))return;const o=document.createElement("script");o.src=r,o.defer=!0,t==="development"&&n.debug===!1&&o.setAttribute("data-debug","false"),document.head.appendChild(o)},l,w,R,T,q=-1,m=function(n){addEventListener("pageshow",function(e){e.persisted&&(q=e.timeStamp,n(e))},!0)},A=function(){return window.performance&&performance.getEntriesByType&&performance.getEntriesByType("navigation")[0]},b=function(){var n=A();return n&&n.activationStart||0},f=function(n,e){var t=A(),r="navigate";return q>=0?r="back-forward-cache":t&&(r=document.prerendering||b()>0?"prerender":document.wasDiscarded?"restore":t.type.replace(/_/g,"-")),{name:n,value:e===void 0?-1:e,rating:"good",delta:0,entries:[],id:"v3-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12),navigationType:r}},S=function(n,e,t){try{if(PerformanceObserver.supportedEntryTypes.includes(n)){var r=new PerformanceObserver(function(o){Promise.resolve().then(function(){e(o.getEntries())})});return r.observe(Object.assign({type:n,buffered:!0},t||{})),r}}catch{}},v=function(n,e,t,r){var o,i;return function(a){e.value>=0&&(a||r)&&((i=e.value-(o||0))||o===void 0)&&(o=e.value,e.delta=i,e.rating=function(s,c){return s>c[1]?"poor":s>c[0]?"needs-improvement":"good"}(e.value,t),n(e))}},I=function(n){requestAnimationFrame(function(){return requestAnimationFrame(function(){return n()})})},P=function(n){var e=function(t){t.type!=="pagehide"&&document.visibilityState!=="hidden"||n(t)};addEventListener("visibilitychange",e,!0),addEventListener("pagehide",e,!0)},D=function(n){var e=!1;return function(t){e||(n(t),e=!0)}},p=-1,F=function(){return document.visibilityState!=="hidden"||document.prerendering?1/0:0},E=function(n){document.visibilityState==="hidden"&&p>-1&&(p=n.type==="visibilitychange"?n.timeStamp:0,G())},_=function(){addEventListener("visibilitychange",E,!0),addEventListener("prerenderingchange",E,!0)},G=function(){removeEventListener("visibilitychange",E,!0),removeEventListener("prerenderingchange",E,!0)},B=function(){return p<0&&(p=F(),_(),m(function(){setTimeout(function(){p=F(),_()},0)})),{get firstHiddenTime(){return p}}},L=function(n){document.prerendering?addEventListener("prerenderingchange",function(){return n()},!0):n()},j=function(n,e){e=e||{},L(function(){var t,r=[1800,3e3],o=B(),i=f("FCP"),a=S("paint",function(s){s.forEach(function(c){c.name==="first-contentful-paint"&&(a.disconnect(),c.startTime<o.firstHiddenTime&&(i.value=Math.max(c.startTime-b(),0),i.entries.push(c),t(!0)))})});a&&(t=v(n,i,r,e.reportAllChanges),m(function(s){i=f("FCP"),t=v(n,i,r,e.reportAllChanges),I(function(){i.value=performance.now()-s.timeStamp,t(!0)})}))})},J=function(n,e){e=e||{},j(D(function(){var t,r=[.1,.25],o=f("CLS",0),i=0,a=[],s=function(u){u.forEach(function(d){if(!d.hadRecentInput){var y=a[0],O=a[a.length-1];i&&d.startTime-O.startTime<1e3&&d.startTime-y.startTime<5e3?(i+=d.value,a.push(d)):(i=d.value,a=[d])}}),i>o.value&&(o.value=i,o.entries=a,t())},c=S("layout-shift",s);c&&(t=v(n,o,r,e.reportAllChanges),P(function(){s(c.takeRecords()),t(!0)}),m(function(){i=0,o=f("CLS",0),t=v(n,o,r,e.reportAllChanges),I(function(){return t()})}),setTimeout(t,0))}))},h={passive:!0,capture:!0},K=new Date,k=function(n,e){l||(l=e,w=n,R=new Date,H(removeEventListener),x())},x=function(){if(w>=0&&w<R-K){var n={entryType:"first-input",name:l.type,target:l.target,cancelable:l.cancelable,startTime:l.timeStamp,processingStart:l.timeStamp+w};T.forEach(function(e){e(n)}),T=[]}},$=function(n){if(n.cancelable){var e=(n.timeStamp>1e12?new Date:performance.now())-n.timeStamp;n.type=="pointerdown"?function(t,r){var o=function(){k(t,r),a()},i=function(){a()},a=function(){removeEventListener("pointerup",o,h),removeEventListener("pointercancel",i,h)};addEventListener("pointerup",o,h),addEventListener("pointercancel",i,h)}(e,n):k(e,n)}},H=function(n){["mousedown","keydown","touchstart","pointerdown"].forEach(function(e){return n(e,$,h)})},z=function(n,e){e=e||{},L(function(){var t,r=[100,300],o=B(),i=f("FID"),a=function(u){u.startTime<o.firstHiddenTime&&(i.value=u.processingStart-u.startTime,i.entries.push(u),t(!0))},s=function(u){u.forEach(a)},c=S("first-input",s);t=v(n,i,r,e.reportAllChanges),c&&P(D(function(){s(c.takeRecords()),c.disconnect()})),c&&m(function(){var u;i=f("FID"),t=v(n,i,r,e.reportAllChanges),T=[],w=-1,l=null,H(addEventListener),u=a,T.push(u),x()})})},C={},W=function(n,e){e=e||{},L(function(){var t,r=[2500,4e3],o=B(),i=f("LCP"),a=function(u){var d=u[u.length-1];if(d){var y=Math.max(d.startTime-b(),0);y<o.firstHiddenTime&&(i.value=y,i.entries=[d],t())}},s=S("largest-contentful-paint",a);if(s){t=v(n,i,r,e.reportAllChanges);var c=D(function(){C[i.id]||(a(s.takeRecords()),s.disconnect(),C[i.id]=!0,t(!0))});["keydown","click"].forEach(function(u){addEventListener(u,c,!0)}),P(c),m(function(u){i=f("LCP"),t=v(n,i,r,e.reportAllChanges),I(function(){i.value=performance.now()-u.timeStamp,C[i.id]=!0,t(!0)})})}})},X=function n(e){document.prerendering?L(function(){return n(e)}):document.readyState!=="complete"?addEventListener("load",function(){return n(e)},!0):setTimeout(e,0)},Z=function(n,e){e=e||{};var t=[800,1800],r=f("TTFB"),o=v(n,r,t,e.reportAllChanges);X(function(){var i=A();if(i){var a=i.responseStart;if(a<=0||a>performance.now())return;r.value=Math.max(a-b(),0),r.entries=[i],o(!0),m(function(){r=f("TTFB",0),(o=v(n,r,t,e.reportAllChanges))(!0)})}})};const M="https://vitals.vercel-analytics.com/v1/vitals",ee=()=>"connection"in navigator&&navigator.connection&&"effectiveType"in navigator.connection?navigator.connection.effectiveType:"",g=(n,e)=>{const t={dsn:e.analyticsId,id:n.id,page:e.path,href:location.href,event_name:n.name,value:n.value.toString(),speed:ee()},r=new Blob([new URLSearchParams(t).toString()],{type:"application/x-www-form-urlencoded"});navigator.sendBeacon?navigator.sendBeacon(M,r):fetch(M,{body:r,method:"POST",credentials:"omit",keepalive:!0})};function ne(){const n={}.PUBLIC_VERCEL_ANALYTICS_ID;if(!n){console.error("[Analytics] VERCEL_ANALYTICS_ID not found");return}const e={path:window.location.pathname,analyticsId:n};try{z(t=>g(t,e)),Z(t=>g(t,e)),W(t=>g(t,e)),J(t=>g(t,e)),j(t=>g(t,e))}catch(t){console.error("[Analytics]",t)}}const te="production";Y({mode:te});ne();