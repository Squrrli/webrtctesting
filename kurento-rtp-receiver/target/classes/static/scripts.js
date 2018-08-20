/* @preserve
 * Leaflet 1.3.1, a JS library for interactive maps. http://leafletjs.com
 * (c) 2010-2017 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */
!function(t,i){"object"==typeof exports&&"undefined"!=typeof module?i(exports):"function"==typeof define&&define.amd?define(["exports"],i):i(t.L={})}(this,function(t){"use strict";function i(t){var i,e,n,o;for(e=1,n=arguments.length;e<n;e++){o=arguments[e];for(i in o)t[i]=o[i]}return t}function e(t,i){var e=Array.prototype.slice;if(t.bind)return t.bind.apply(t,e.call(arguments,1));var n=e.call(arguments,2);return function(){return t.apply(i,n.length?n.concat(e.call(arguments)):arguments)}}function n(t){return t._leaflet_id=t._leaflet_id||++ti,t._leaflet_id}function o(t,i,e){var n,o,s,r;return r=function(){n=!1,o&&(s.apply(e,o),o=!1)},s=function(){n?o=arguments:(t.apply(e,arguments),setTimeout(r,i),n=!0)}}function s(t,i,e){var n=i[1],o=i[0],s=n-o;return t===n&&e?t:((t-o)%s+s)%s+o}function r(){return!1}function a(t,i){var e=Math.pow(10,void 0===i?6:i);return Math.round(t*e)/e}function h(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function u(t){return h(t).split(/\s+/)}function l(t,i){t.hasOwnProperty("options")||(t.options=t.options?Qt(t.options):{});for(var e in i)t.options[e]=i[e];return t.options}function c(t,i,e){var n=[];for(var o in t)n.push(encodeURIComponent(e?o.toUpperCase():o)+"="+encodeURIComponent(t[o]));return(i&&-1!==i.indexOf("?")?"&":"?")+n.join("&")}function _(t,i){return t.replace(ii,function(t,e){var n=i[e];if(void 0===n)throw new Error("No value provided for variable "+t);return"function"==typeof n&&(n=n(i)),n})}function d(t,i){for(var e=0;e<t.length;e++)if(t[e]===i)return e;return-1}function p(t){return window["webkit"+t]||window["moz"+t]||window["ms"+t]}function m(t){var i=+new Date,e=Math.max(0,16-(i-oi));return oi=i+e,window.setTimeout(t,e)}function f(t,i,n){if(!n||si!==m)return si.call(window,e(t,i));t.call(i)}function g(t){t&&ri.call(window,t)}function v(){}function y(t){if("undefined"!=typeof L&&L&&L.Mixin){t=ei(t)?t:[t];for(var i=0;i<t.length;i++)t[i]===L.Mixin.Events&&console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",(new Error).stack)}}function x(t,i,e){this.x=e?Math.round(t):t,this.y=e?Math.round(i):i}function w(t,i,e){return t instanceof x?t:ei(t)?new x(t[0],t[1]):void 0===t||null===t?t:"object"==typeof t&&"x"in t&&"y"in t?new x(t.x,t.y):new x(t,i,e)}function P(t,i){if(t)for(var e=i?[t,i]:t,n=0,o=e.length;n<o;n++)this.extend(e[n])}function b(t,i){return!t||t instanceof P?t:new P(t,i)}function T(t,i){if(t)for(var e=i?[t,i]:t,n=0,o=e.length;n<o;n++)this.extend(e[n])}function z(t,i){return t instanceof T?t:new T(t,i)}function M(t,i,e){if(isNaN(t)||isNaN(i))throw new Error("Invalid LatLng object: ("+t+", "+i+")");this.lat=+t,this.lng=+i,void 0!==e&&(this.alt=+e)}function C(t,i,e){return t instanceof M?t:ei(t)&&"object"!=typeof t[0]?3===t.length?new M(t[0],t[1],t[2]):2===t.length?new M(t[0],t[1]):null:void 0===t||null===t?t:"object"==typeof t&&"lat"in t?new M(t.lat,"lng"in t?t.lng:t.lon,t.alt):void 0===i?null:new M(t,i,e)}function Z(t,i,e,n){if(ei(t))return this._a=t[0],this._b=t[1],this._c=t[2],void(this._d=t[3]);this._a=t,this._b=i,this._c=e,this._d=n}function S(t,i,e,n){return new Z(t,i,e,n)}function E(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function k(t,i){var e,n,o,s,r,a,h="";for(e=0,o=t.length;e<o;e++){for(n=0,s=(r=t[e]).length;n<s;n++)a=r[n],h+=(n?"L":"M")+a.x+" "+a.y;h+=i?Xi?"z":"x":""}return h||"M0 0"}function I(t){return navigator.userAgent.toLowerCase().indexOf(t)>=0}function A(t,i,e,n){return"touchstart"===i?O(t,e,n):"touchmove"===i?W(t,e,n):"touchend"===i&&H(t,e,n),this}function B(t,i,e){var n=t["_leaflet_"+i+e];return"touchstart"===i?t.removeEventListener(Qi,n,!1):"touchmove"===i?t.removeEventListener(te,n,!1):"touchend"===i&&(t.removeEventListener(ie,n,!1),t.removeEventListener(ee,n,!1)),this}function O(t,i,n){var o=e(function(t){if("mouse"!==t.pointerType&&t.MSPOINTER_TYPE_MOUSE&&t.pointerType!==t.MSPOINTER_TYPE_MOUSE){if(!(ne.indexOf(t.target.tagName)<0))return;$(t)}j(t,i)});t["_leaflet_touchstart"+n]=o,t.addEventListener(Qi,o,!1),se||(document.documentElement.addEventListener(Qi,R,!0),document.documentElement.addEventListener(te,D,!0),document.documentElement.addEventListener(ie,N,!0),document.documentElement.addEventListener(ee,N,!0),se=!0)}function R(t){oe[t.pointerId]=t,re++}function D(t){oe[t.pointerId]&&(oe[t.pointerId]=t)}function N(t){delete oe[t.pointerId],re--}function j(t,i){t.touches=[];for(var e in oe)t.touches.push(oe[e]);t.changedTouches=[t],i(t)}function W(t,i,e){var n=function(t){(t.pointerType!==t.MSPOINTER_TYPE_MOUSE&&"mouse"!==t.pointerType||0!==t.buttons)&&j(t,i)};t["_leaflet_touchmove"+e]=n,t.addEventListener(te,n,!1)}function H(t,i,e){var n=function(t){j(t,i)};t["_leaflet_touchend"+e]=n,t.addEventListener(ie,n,!1),t.addEventListener(ee,n,!1)}function F(t,i,e){function n(t){var i;if(Ui){if(!Pi||"mouse"===t.pointerType)return;i=re}else i=t.touches.length;if(!(i>1)){var e=Date.now(),n=e-(s||e);r=t.touches?t.touches[0]:t,a=n>0&&n<=h,s=e}}function o(t){if(a&&!r.cancelBubble){if(Ui){if(!Pi||"mouse"===t.pointerType)return;var e,n,o={};for(n in r)e=r[n],o[n]=e&&e.bind?e.bind(r):e;r=o}r.type="dblclick",i(r),s=null}}var s,r,a=!1,h=250;return t[ue+ae+e]=n,t[ue+he+e]=o,t[ue+"dblclick"+e]=i,t.addEventListener(ae,n,!1),t.addEventListener(he,o,!1),t.addEventListener("dblclick",i,!1),this}function U(t,i){var e=t[ue+ae+i],n=t[ue+he+i],o=t[ue+"dblclick"+i];return t.removeEventListener(ae,e,!1),t.removeEventListener(he,n,!1),Pi||t.removeEventListener("dblclick",o,!1),this}function V(t,i,e,n){if("object"==typeof i)for(var o in i)G(t,o,i[o],e);else for(var s=0,r=(i=u(i)).length;s<r;s++)G(t,i[s],e,n);return this}function q(t,i,e,n){if("object"==typeof i)for(var o in i)K(t,o,i[o],e);else if(i)for(var s=0,r=(i=u(i)).length;s<r;s++)K(t,i[s],e,n);else{for(var a in t[le])K(t,a,t[le][a]);delete t[le]}return this}function G(t,i,e,o){var s=i+n(e)+(o?"_"+n(o):"");if(t[le]&&t[le][s])return this;var r=function(i){return e.call(o||t,i||window.event)},a=r;Ui&&0===i.indexOf("touch")?A(t,i,r,s):!Vi||"dblclick"!==i||!F||Ui&&Si?"addEventListener"in t?"mousewheel"===i?t.addEventListener("onwheel"in t?"wheel":"mousewheel",r,!1):"mouseenter"===i||"mouseleave"===i?(r=function(i){i=i||window.event,ot(t,i)&&a(i)},t.addEventListener("mouseenter"===i?"mouseover":"mouseout",r,!1)):("click"===i&&Ti&&(r=function(t){st(t,a)}),t.addEventListener(i,r,!1)):"attachEvent"in t&&t.attachEvent("on"+i,r):F(t,r,s),t[le]=t[le]||{},t[le][s]=r}function K(t,i,e,o){var s=i+n(e)+(o?"_"+n(o):""),r=t[le]&&t[le][s];if(!r)return this;Ui&&0===i.indexOf("touch")?B(t,i,s):!Vi||"dblclick"!==i||!U||Ui&&Si?"removeEventListener"in t?"mousewheel"===i?t.removeEventListener("onwheel"in t?"wheel":"mousewheel",r,!1):t.removeEventListener("mouseenter"===i?"mouseover":"mouseleave"===i?"mouseout":i,r,!1):"detachEvent"in t&&t.detachEvent("on"+i,r):U(t,s),t[le][s]=null}function Y(t){return t.stopPropagation?t.stopPropagation():t.originalEvent?t.originalEvent._stopped=!0:t.cancelBubble=!0,nt(t),this}function X(t){return G(t,"mousewheel",Y),this}function J(t){return V(t,"mousedown touchstart dblclick",Y),G(t,"click",et),this}function $(t){return t.preventDefault?t.preventDefault():t.returnValue=!1,this}function Q(t){return $(t),Y(t),this}function tt(t,i){if(!i)return new x(t.clientX,t.clientY);var e=i.getBoundingClientRect(),n=e.width/i.offsetWidth||1,o=e.height/i.offsetHeight||1;return new x(t.clientX/n-e.left-i.clientLeft,t.clientY/o-e.top-i.clientTop)}function it(t){return Pi?t.wheelDeltaY/2:t.deltaY&&0===t.deltaMode?-t.deltaY/ce:t.deltaY&&1===t.deltaMode?20*-t.deltaY:t.deltaY&&2===t.deltaMode?60*-t.deltaY:t.deltaX||t.deltaZ?0:t.wheelDelta?(t.wheelDeltaY||t.wheelDelta)/2:t.detail&&Math.abs(t.detail)<32765?20*-t.detail:t.detail?t.detail/-32765*60:0}function et(t){_e[t.type]=!0}function nt(t){var i=_e[t.type];return _e[t.type]=!1,i}function ot(t,i){var e=i.relatedTarget;if(!e)return!0;try{for(;e&&e!==t;)e=e.parentNode}catch(t){return!1}return e!==t}function st(t,i){var e=t.timeStamp||t.originalEvent&&t.originalEvent.timeStamp,n=pi&&e-pi;n&&n>100&&n<500||t.target._simulatedClick&&!t._simulated?Q(t):(pi=e,i(t))}function rt(t){return"string"==typeof t?document.getElementById(t):t}function at(t,i){var e=t.style[i]||t.currentStyle&&t.currentStyle[i];if((!e||"auto"===e)&&document.defaultView){var n=document.defaultView.getComputedStyle(t,null);e=n?n[i]:null}return"auto"===e?null:e}function ht(t,i,e){var n=document.createElement(t);return n.className=i||"",e&&e.appendChild(n),n}function ut(t){var i=t.parentNode;i&&i.removeChild(t)}function lt(t){for(;t.firstChild;)t.removeChild(t.firstChild)}function ct(t){var i=t.parentNode;i.lastChild!==t&&i.appendChild(t)}function _t(t){var i=t.parentNode;i.firstChild!==t&&i.insertBefore(t,i.firstChild)}function dt(t,i){if(void 0!==t.classList)return t.classList.contains(i);var e=gt(t);return e.length>0&&new RegExp("(^|\\s)"+i+"(\\s|$)").test(e)}function pt(t,i){if(void 0!==t.classList)for(var e=u(i),n=0,o=e.length;n<o;n++)t.classList.add(e[n]);else if(!dt(t,i)){var s=gt(t);ft(t,(s?s+" ":"")+i)}}function mt(t,i){void 0!==t.classList?t.classList.remove(i):ft(t,h((" "+gt(t)+" ").replace(" "+i+" "," ")))}function ft(t,i){void 0===t.className.baseVal?t.className=i:t.className.baseVal=i}function gt(t){return void 0===t.className.baseVal?t.className:t.className.baseVal}function vt(t,i){"opacity"in t.style?t.style.opacity=i:"filter"in t.style&&yt(t,i)}function yt(t,i){var e=!1,n="DXImageTransform.Microsoft.Alpha";try{e=t.filters.item(n)}catch(t){if(1===i)return}i=Math.round(100*i),e?(e.Enabled=100!==i,e.Opacity=i):t.style.filter+=" progid:"+n+"(opacity="+i+")"}function xt(t){for(var i=document.documentElement.style,e=0;e<t.length;e++)if(t[e]in i)return t[e];return!1}function wt(t,i,e){var n=i||new x(0,0);t.style[pe]=(Oi?"translate("+n.x+"px,"+n.y+"px)":"translate3d("+n.x+"px,"+n.y+"px,0)")+(e?" scale("+e+")":"")}function Lt(t,i){t._leaflet_pos=i,Ni?wt(t,i):(t.style.left=i.x+"px",t.style.top=i.y+"px")}function Pt(t){return t._leaflet_pos||new x(0,0)}function bt(){V(window,"dragstart",$)}function Tt(){q(window,"dragstart",$)}function zt(t){for(;-1===t.tabIndex;)t=t.parentNode;t.style&&(Mt(),ve=t,ye=t.style.outline,t.style.outline="none",V(window,"keydown",Mt))}function Mt(){ve&&(ve.style.outline=ye,ve=void 0,ye=void 0,q(window,"keydown",Mt))}function Ct(t,i){if(!i||!t.length)return t.slice();var e=i*i;return t=kt(t,e),t=St(t,e)}function Zt(t,i,e){return Math.sqrt(Rt(t,i,e,!0))}function St(t,i){var e=t.length,n=new(typeof Uint8Array!=void 0+""?Uint8Array:Array)(e);n[0]=n[e-1]=1,Et(t,n,i,0,e-1);var o,s=[];for(o=0;o<e;o++)n[o]&&s.push(t[o]);return s}function Et(t,i,e,n,o){var s,r,a,h=0;for(r=n+1;r<=o-1;r++)(a=Rt(t[r],t[n],t[o],!0))>h&&(s=r,h=a);h>e&&(i[s]=1,Et(t,i,e,n,s),Et(t,i,e,s,o))}function kt(t,i){for(var e=[t[0]],n=1,o=0,s=t.length;n<s;n++)Ot(t[n],t[o])>i&&(e.push(t[n]),o=n);return o<s-1&&e.push(t[s-1]),e}function It(t,i,e,n,o){var s,r,a,h=n?Se:Bt(t,e),u=Bt(i,e);for(Se=u;;){if(!(h|u))return[t,i];if(h&u)return!1;a=Bt(r=At(t,i,s=h||u,e,o),e),s===h?(t=r,h=a):(i=r,u=a)}}function At(t,i,e,n,o){var s,r,a=i.x-t.x,h=i.y-t.y,u=n.min,l=n.max;return 8&e?(s=t.x+a*(l.y-t.y)/h,r=l.y):4&e?(s=t.x+a*(u.y-t.y)/h,r=u.y):2&e?(s=l.x,r=t.y+h*(l.x-t.x)/a):1&e&&(s=u.x,r=t.y+h*(u.x-t.x)/a),new x(s,r,o)}function Bt(t,i){var e=0;return t.x<i.min.x?e|=1:t.x>i.max.x&&(e|=2),t.y<i.min.y?e|=4:t.y>i.max.y&&(e|=8),e}function Ot(t,i){var e=i.x-t.x,n=i.y-t.y;return e*e+n*n}function Rt(t,i,e,n){var o,s=i.x,r=i.y,a=e.x-s,h=e.y-r,u=a*a+h*h;return u>0&&((o=((t.x-s)*a+(t.y-r)*h)/u)>1?(s=e.x,r=e.y):o>0&&(s+=a*o,r+=h*o)),a=t.x-s,h=t.y-r,n?a*a+h*h:new x(s,r)}function Dt(t){return!ei(t[0])||"object"!=typeof t[0][0]&&void 0!==t[0][0]}function Nt(t){return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),Dt(t)}function jt(t,i,e){var n,o,s,r,a,h,u,l,c,_=[1,4,2,8];for(o=0,u=t.length;o<u;o++)t[o]._code=Bt(t[o],i);for(r=0;r<4;r++){for(l=_[r],n=[],o=0,s=(u=t.length)-1;o<u;s=o++)a=t[o],h=t[s],a._code&l?h._code&l||((c=At(h,a,l,i,e))._code=Bt(c,i),n.push(c)):(h._code&l&&((c=At(h,a,l,i,e))._code=Bt(c,i),n.push(c)),n.push(a));t=n}return t}function Wt(t,i){var e,n,o,s,r="Feature"===t.type?t.geometry:t,a=r?r.coordinates:null,h=[],u=i&&i.pointToLayer,l=i&&i.coordsToLatLng||Ht;if(!a&&!r)return null;switch(r.type){case"Point":return e=l(a),u?u(t,e):new Xe(e);case"MultiPoint":for(o=0,s=a.length;o<s;o++)e=l(a[o]),h.push(u?u(t,e):new Xe(e));return new qe(h);case"LineString":case"MultiLineString":return n=Ft(a,"LineString"===r.type?0:1,l),new tn(n,i);case"Polygon":case"MultiPolygon":return n=Ft(a,"Polygon"===r.type?1:2,l),new en(n,i);case"GeometryCollection":for(o=0,s=r.geometries.length;o<s;o++){var c=Wt({geometry:r.geometries[o],type:"Feature",properties:t.properties},i);c&&h.push(c)}return new qe(h);default:throw new Error("Invalid GeoJSON object.")}}function Ht(t){return new M(t[1],t[0],t[2])}function Ft(t,i,e){for(var n,o=[],s=0,r=t.length;s<r;s++)n=i?Ft(t[s],i-1,e):(e||Ht)(t[s]),o.push(n);return o}function Ut(t,i){return i="number"==typeof i?i:6,void 0!==t.alt?[a(t.lng,i),a(t.lat,i),a(t.alt,i)]:[a(t.lng,i),a(t.lat,i)]}function Vt(t,i,e,n){for(var o=[],s=0,r=t.length;s<r;s++)o.push(i?Vt(t[s],i-1,e,n):Ut(t[s],n));return!i&&e&&o.push(o[0]),o}function qt(t,e){return t.feature?i({},t.feature,{geometry:e}):Gt(e)}function Gt(t){return"Feature"===t.type||"FeatureCollection"===t.type?t:{type:"Feature",properties:{},geometry:t}}function Kt(t,i){return new nn(t,i)}function Yt(t,i){return new dn(t,i)}function Xt(t){return Yi?new fn(t):null}function Jt(t){return Xi||Ji?new xn(t):null}var $t=Object.freeze;Object.freeze=function(t){return t};var Qt=Object.create||function(){function t(){}return function(i){return t.prototype=i,new t}}(),ti=0,ii=/\{ *([\w_-]+) *\}/g,ei=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)},ni="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=",oi=0,si=window.requestAnimationFrame||p("RequestAnimationFrame")||m,ri=window.cancelAnimationFrame||p("CancelAnimationFrame")||p("CancelRequestAnimationFrame")||function(t){window.clearTimeout(t)},ai=(Object.freeze||Object)({freeze:$t,extend:i,create:Qt,bind:e,lastId:ti,stamp:n,throttle:o,wrapNum:s,falseFn:r,formatNum:a,trim:h,splitWords:u,setOptions:l,getParamString:c,template:_,isArray:ei,indexOf:d,emptyImageUrl:ni,requestFn:si,cancelFn:ri,requestAnimFrame:f,cancelAnimFrame:g});v.extend=function(t){var e=function(){this.initialize&&this.initialize.apply(this,arguments),this.callInitHooks()},n=e.__super__=this.prototype,o=Qt(n);o.constructor=e,e.prototype=o;for(var s in this)this.hasOwnProperty(s)&&"prototype"!==s&&"__super__"!==s&&(e[s]=this[s]);return t.statics&&(i(e,t.statics),delete t.statics),t.includes&&(y(t.includes),i.apply(null,[o].concat(t.includes)),delete t.includes),o.options&&(t.options=i(Qt(o.options),t.options)),i(o,t),o._initHooks=[],o.callInitHooks=function(){if(!this._initHooksCalled){n.callInitHooks&&n.callInitHooks.call(this),this._initHooksCalled=!0;for(var t=0,i=o._initHooks.length;t<i;t++)o._initHooks[t].call(this)}},e},v.include=function(t){return i(this.prototype,t),this},v.mergeOptions=function(t){return i(this.prototype.options,t),this},v.addInitHook=function(t){var i=Array.prototype.slice.call(arguments,1),e="function"==typeof t?t:function(){this[t].apply(this,i)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(e),this};var hi={on:function(t,i,e){if("object"==typeof t)for(var n in t)this._on(n,t[n],i);else for(var o=0,s=(t=u(t)).length;o<s;o++)this._on(t[o],i,e);return this},off:function(t,i,e){if(t)if("object"==typeof t)for(var n in t)this._off(n,t[n],i);else for(var o=0,s=(t=u(t)).length;o<s;o++)this._off(t[o],i,e);else delete this._events;return this},_on:function(t,i,e){this._events=this._events||{};var n=this._events[t];n||(n=[],this._events[t]=n),e===this&&(e=void 0);for(var o={fn:i,ctx:e},s=n,r=0,a=s.length;r<a;r++)if(s[r].fn===i&&s[r].ctx===e)return;s.push(o)},_off:function(t,i,e){var n,o,s;if(this._events&&(n=this._events[t]))if(i){if(e===this&&(e=void 0),n)for(o=0,s=n.length;o<s;o++){var a=n[o];if(a.ctx===e&&a.fn===i)return a.fn=r,this._firingCount&&(this._events[t]=n=n.slice()),void n.splice(o,1)}}else{for(o=0,s=n.length;o<s;o++)n[o].fn=r;delete this._events[t]}},fire:function(t,e,n){if(!this.listens(t,n))return this;var o=i({},e,{type:t,target:this,sourceTarget:e&&e.sourceTarget||this});if(this._events){var s=this._events[t];if(s){this._firingCount=this._firingCount+1||1;for(var r=0,a=s.length;r<a;r++){var h=s[r];h.fn.call(h.ctx||this,o)}this._firingCount--}}return n&&this._propagateEvent(o),this},listens:function(t,i){var e=this._events&&this._events[t];if(e&&e.length)return!0;if(i)for(var n in this._eventParents)if(this._eventParents[n].listens(t,i))return!0;return!1},once:function(t,i,n){if("object"==typeof t){for(var o in t)this.once(o,t[o],i);return this}var s=e(function(){this.off(t,i,n).off(t,s,n)},this);return this.on(t,i,n).on(t,s,n)},addEventParent:function(t){return this._eventParents=this._eventParents||{},this._eventParents[n(t)]=t,this},removeEventParent:function(t){return this._eventParents&&delete this._eventParents[n(t)],this},_propagateEvent:function(t){for(var e in this._eventParents)this._eventParents[e].fire(t.type,i({layer:t.target,propagatedFrom:t.target},t),!0)}};hi.addEventListener=hi.on,hi.removeEventListener=hi.clearAllEventListeners=hi.off,hi.addOneTimeEventListener=hi.once,hi.fireEvent=hi.fire,hi.hasEventListeners=hi.listens;var ui=v.extend(hi),li=Math.trunc||function(t){return t>0?Math.floor(t):Math.ceil(t)};x.prototype={clone:function(){return new x(this.x,this.y)},add:function(t){return this.clone()._add(w(t))},_add:function(t){return this.x+=t.x,this.y+=t.y,this},subtract:function(t){return this.clone()._subtract(w(t))},_subtract:function(t){return this.x-=t.x,this.y-=t.y,this},divideBy:function(t){return this.clone()._divideBy(t)},_divideBy:function(t){return this.x/=t,this.y/=t,this},multiplyBy:function(t){return this.clone()._multiplyBy(t)},_multiplyBy:function(t){return this.x*=t,this.y*=t,this},scaleBy:function(t){return new x(this.x*t.x,this.y*t.y)},unscaleBy:function(t){return new x(this.x/t.x,this.y/t.y)},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},trunc:function(){return this.clone()._trunc()},_trunc:function(){return this.x=li(this.x),this.y=li(this.y),this},distanceTo:function(t){var i=(t=w(t)).x-this.x,e=t.y-this.y;return Math.sqrt(i*i+e*e)},equals:function(t){return(t=w(t)).x===this.x&&t.y===this.y},contains:function(t){return t=w(t),Math.abs(t.x)<=Math.abs(this.x)&&Math.abs(t.y)<=Math.abs(this.y)},toString:function(){return"Point("+a(this.x)+", "+a(this.y)+")"}},P.prototype={extend:function(t){return t=w(t),this.min||this.max?(this.min.x=Math.min(t.x,this.min.x),this.max.x=Math.max(t.x,this.max.x),this.min.y=Math.min(t.y,this.min.y),this.max.y=Math.max(t.y,this.max.y)):(this.min=t.clone(),this.max=t.clone()),this},getCenter:function(t){return new x((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,t)},getBottomLeft:function(){return new x(this.min.x,this.max.y)},getTopRight:function(){return new x(this.max.x,this.min.y)},getTopLeft:function(){return this.min},getBottomRight:function(){return this.max},getSize:function(){return this.max.subtract(this.min)},contains:function(t){var i,e;return(t="number"==typeof t[0]||t instanceof x?w(t):b(t))instanceof P?(i=t.min,e=t.max):i=e=t,i.x>=this.min.x&&e.x<=this.max.x&&i.y>=this.min.y&&e.y<=this.max.y},intersects:function(t){t=b(t);var i=this.min,e=this.max,n=t.min,o=t.max,s=o.x>=i.x&&n.x<=e.x,r=o.y>=i.y&&n.y<=e.y;return s&&r},overlaps:function(t){t=b(t);var i=this.min,e=this.max,n=t.min,o=t.max,s=o.x>i.x&&n.x<e.x,r=o.y>i.y&&n.y<e.y;return s&&r},isValid:function(){return!(!this.min||!this.max)}},T.prototype={extend:function(t){var i,e,n=this._southWest,o=this._northEast;if(t instanceof M)i=t,e=t;else{if(!(t instanceof T))return t?this.extend(C(t)||z(t)):this;if(i=t._southWest,e=t._northEast,!i||!e)return this}return n||o?(n.lat=Math.min(i.lat,n.lat),n.lng=Math.min(i.lng,n.lng),o.lat=Math.max(e.lat,o.lat),o.lng=Math.max(e.lng,o.lng)):(this._southWest=new M(i.lat,i.lng),this._northEast=new M(e.lat,e.lng)),this},pad:function(t){var i=this._southWest,e=this._northEast,n=Math.abs(i.lat-e.lat)*t,o=Math.abs(i.lng-e.lng)*t;return new T(new M(i.lat-n,i.lng-o),new M(e.lat+n,e.lng+o))},getCenter:function(){return new M((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new M(this.getNorth(),this.getWest())},getSouthEast:function(){return new M(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(t){t="number"==typeof t[0]||t instanceof M||"lat"in t?C(t):z(t);var i,e,n=this._southWest,o=this._northEast;return t instanceof T?(i=t.getSouthWest(),e=t.getNorthEast()):i=e=t,i.lat>=n.lat&&e.lat<=o.lat&&i.lng>=n.lng&&e.lng<=o.lng},intersects:function(t){t=z(t);var i=this._southWest,e=this._northEast,n=t.getSouthWest(),o=t.getNorthEast(),s=o.lat>=i.lat&&n.lat<=e.lat,r=o.lng>=i.lng&&n.lng<=e.lng;return s&&r},overlaps:function(t){t=z(t);var i=this._southWest,e=this._northEast,n=t.getSouthWest(),o=t.getNorthEast(),s=o.lat>i.lat&&n.lat<e.lat,r=o.lng>i.lng&&n.lng<e.lng;return s&&r},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(t,i){return!!t&&(t=z(t),this._southWest.equals(t.getSouthWest(),i)&&this._northEast.equals(t.getNorthEast(),i))},isValid:function(){return!(!this._southWest||!this._northEast)}},M.prototype={equals:function(t,i){return!!t&&(t=C(t),Math.max(Math.abs(this.lat-t.lat),Math.abs(this.lng-t.lng))<=(void 0===i?1e-9:i))},toString:function(t){return"LatLng("+a(this.lat,t)+", "+a(this.lng,t)+")"},distanceTo:function(t){return _i.distance(this,C(t))},wrap:function(){return _i.wrapLatLng(this)},toBounds:function(t){var i=180*t/40075017,e=i/Math.cos(Math.PI/180*this.lat);return z([this.lat-i,this.lng-e],[this.lat+i,this.lng+e])},clone:function(){return new M(this.lat,this.lng,this.alt)}};var ci={latLngToPoint:function(t,i){var e=this.projection.project(t),n=this.scale(i);return this.transformation._transform(e,n)},pointToLatLng:function(t,i){var e=this.scale(i),n=this.transformation.untransform(t,e);return this.projection.unproject(n)},project:function(t){return this.projection.project(t)},unproject:function(t){return this.projection.unproject(t)},scale:function(t){return 256*Math.pow(2,t)},zoom:function(t){return Math.log(t/256)/Math.LN2},getProjectedBounds:function(t){if(this.infinite)return null;var i=this.projection.bounds,e=this.scale(t);return new P(this.transformation.transform(i.min,e),this.transformation.transform(i.max,e))},infinite:!1,wrapLatLng:function(t){var i=this.wrapLng?s(t.lng,this.wrapLng,!0):t.lng;return new M(this.wrapLat?s(t.lat,this.wrapLat,!0):t.lat,i,t.alt)},wrapLatLngBounds:function(t){var i=t.getCenter(),e=this.wrapLatLng(i),n=i.lat-e.lat,o=i.lng-e.lng;if(0===n&&0===o)return t;var s=t.getSouthWest(),r=t.getNorthEast();return new T(new M(s.lat-n,s.lng-o),new M(r.lat-n,r.lng-o))}},_i=i({},ci,{wrapLng:[-180,180],R:6371e3,distance:function(t,i){var e=Math.PI/180,n=t.lat*e,o=i.lat*e,s=Math.sin((i.lat-t.lat)*e/2),r=Math.sin((i.lng-t.lng)*e/2),a=s*s+Math.cos(n)*Math.cos(o)*r*r,h=2*Math.atan2(Math.sqrt(a),Math.sqrt(1-a));return this.R*h}}),di={R:6378137,MAX_LATITUDE:85.0511287798,project:function(t){var i=Math.PI/180,e=this.MAX_LATITUDE,n=Math.max(Math.min(e,t.lat),-e),o=Math.sin(n*i);return new x(this.R*t.lng*i,this.R*Math.log((1+o)/(1-o))/2)},unproject:function(t){var i=180/Math.PI;return new M((2*Math.atan(Math.exp(t.y/this.R))-Math.PI/2)*i,t.x*i/this.R)},bounds:function(){var t=6378137*Math.PI;return new P([-t,-t],[t,t])}()};Z.prototype={transform:function(t,i){return this._transform(t.clone(),i)},_transform:function(t,i){return i=i||1,t.x=i*(this._a*t.x+this._b),t.y=i*(this._c*t.y+this._d),t},untransform:function(t,i){return i=i||1,new x((t.x/i-this._b)/this._a,(t.y/i-this._d)/this._c)}};var pi,mi,fi,gi,vi=i({},_i,{code:"EPSG:3857",projection:di,transformation:function(){var t=.5/(Math.PI*di.R);return S(t,.5,-t,.5)}()}),yi=i({},vi,{code:"EPSG:900913"}),xi=document.documentElement.style,wi="ActiveXObject"in window,Li=wi&&!document.addEventListener,Pi="msLaunchUri"in navigator&&!("documentMode"in document),bi=I("webkit"),Ti=I("android"),zi=I("android 2")||I("android 3"),Mi=parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],10),Ci=Ti&&I("Google")&&Mi<537&&!("AudioNode"in window),Zi=!!window.opera,Si=I("chrome"),Ei=I("gecko")&&!bi&&!Zi&&!wi,ki=!Si&&I("safari"),Ii=I("phantom"),Ai="OTransition"in xi,Bi=0===navigator.platform.indexOf("Win"),Oi=wi&&"transition"in xi,Ri="WebKitCSSMatrix"in window&&"m11"in new window.WebKitCSSMatrix&&!zi,Di="MozPerspective"in xi,Ni=!window.L_DISABLE_3D&&(Oi||Ri||Di)&&!Ai&&!Ii,ji="undefined"!=typeof orientation||I("mobile"),Wi=ji&&bi,Hi=ji&&Ri,Fi=!window.PointerEvent&&window.MSPointerEvent,Ui=!(!window.PointerEvent&&!Fi),Vi=!window.L_NO_TOUCH&&(Ui||"ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch),qi=ji&&Zi,Gi=ji&&Ei,Ki=(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI)>1,Yi=!!document.createElement("canvas").getContext,Xi=!(!document.createElementNS||!E("svg").createSVGRect),Ji=!Xi&&function(){try{var t=document.createElement("div");t.innerHTML='<v:shape adj="1"/>';var i=t.firstChild;return i.style.behavior="url(#default#VML)",i&&"object"==typeof i.adj}catch(t){return!1}}(),$i=(Object.freeze||Object)({ie:wi,ielt9:Li,edge:Pi,webkit:bi,android:Ti,android23:zi,androidStock:Ci,opera:Zi,chrome:Si,gecko:Ei,safari:ki,phantom:Ii,opera12:Ai,win:Bi,ie3d:Oi,webkit3d:Ri,gecko3d:Di,any3d:Ni,mobile:ji,mobileWebkit:Wi,mobileWebkit3d:Hi,msPointer:Fi,pointer:Ui,touch:Vi,mobileOpera:qi,mobileGecko:Gi,retina:Ki,canvas:Yi,svg:Xi,vml:Ji}),Qi=Fi?"MSPointerDown":"pointerdown",te=Fi?"MSPointerMove":"pointermove",ie=Fi?"MSPointerUp":"pointerup",ee=Fi?"MSPointerCancel":"pointercancel",ne=["INPUT","SELECT","OPTION"],oe={},se=!1,re=0,ae=Fi?"MSPointerDown":Ui?"pointerdown":"touchstart",he=Fi?"MSPointerUp":Ui?"pointerup":"touchend",ue="_leaflet_",le="_leaflet_events",ce=Bi&&Si?2*window.devicePixelRatio:Ei?window.devicePixelRatio:1,_e={},de=(Object.freeze||Object)({on:V,off:q,stopPropagation:Y,disableScrollPropagation:X,disableClickPropagation:J,preventDefault:$,stop:Q,getMousePosition:tt,getWheelDelta:it,fakeStop:et,skipped:nt,isExternalTarget:ot,addListener:V,removeListener:q}),pe=xt(["transform","WebkitTransform","OTransform","MozTransform","msTransform"]),me=xt(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),fe="webkitTransition"===me||"OTransition"===me?me+"End":"transitionend";if("onselectstart"in document)mi=function(){V(window,"selectstart",$)},fi=function(){q(window,"selectstart",$)};else{var ge=xt(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);mi=function(){if(ge){var t=document.documentElement.style;gi=t[ge],t[ge]="none"}},fi=function(){ge&&(document.documentElement.style[ge]=gi,gi=void 0)}}var ve,ye,xe=(Object.freeze||Object)({TRANSFORM:pe,TRANSITION:me,TRANSITION_END:fe,get:rt,getStyle:at,create:ht,remove:ut,empty:lt,toFront:ct,toBack:_t,hasClass:dt,addClass:pt,removeClass:mt,setClass:ft,getClass:gt,setOpacity:vt,testProp:xt,setTransform:wt,setPosition:Lt,getPosition:Pt,disableTextSelection:mi,enableTextSelection:fi,disableImageDrag:bt,enableImageDrag:Tt,preventOutline:zt,restoreOutline:Mt}),we=ui.extend({run:function(t,i,e,n){this.stop(),this._el=t,this._inProgress=!0,this._duration=e||.25,this._easeOutPower=1/Math.max(n||.5,.2),this._startPos=Pt(t),this._offset=i.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){this._animId=f(this._animate,this),this._step()},_step:function(t){var i=+new Date-this._startTime,e=1e3*this._duration;i<e?this._runFrame(this._easeOut(i/e),t):(this._runFrame(1),this._complete())},_runFrame:function(t,i){var e=this._startPos.add(this._offset.multiplyBy(t));i&&e._round(),Lt(this._el,e),this.fire("step")},_complete:function(){g(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(t){return 1-Math.pow(1-t,this._easeOutPower)}}),Le=ui.extend({options:{crs:vi,center:void 0,zoom:void 0,minZoom:void 0,maxZoom:void 0,layers:[],maxBounds:void 0,renderer:void 0,zoomAnimation:!0,zoomAnimationThreshold:4,fadeAnimation:!0,markerZoomAnimation:!0,transform3DLimit:8388608,zoomSnap:1,zoomDelta:1,trackResize:!0},initialize:function(t,i){i=l(this,i),this._initContainer(t),this._initLayout(),this._onResize=e(this._onResize,this),this._initEvents(),i.maxBounds&&this.setMaxBounds(i.maxBounds),void 0!==i.zoom&&(this._zoom=this._limitZoom(i.zoom)),i.center&&void 0!==i.zoom&&this.setView(C(i.center),i.zoom,{reset:!0}),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this.callInitHooks(),this._zoomAnimated=me&&Ni&&!qi&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),V(this._proxy,fe,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},setView:function(t,e,n){return e=void 0===e?this._zoom:this._limitZoom(e),t=this._limitCenter(C(t),e,this.options.maxBounds),n=n||{},this._stop(),this._loaded&&!n.reset&&!0!==n&&(void 0!==n.animate&&(n.zoom=i({animate:n.animate},n.zoom),n.pan=i({animate:n.animate,duration:n.duration},n.pan)),this._zoom!==e?this._tryAnimatedZoom&&this._tryAnimatedZoom(t,e,n.zoom):this._tryAnimatedPan(t,n.pan))?(clearTimeout(this._sizeTimer),this):(this._resetView(t,e),this)},setZoom:function(t,i){return this._loaded?this.setView(this.getCenter(),t,{zoom:i}):(this._zoom=t,this)},zoomIn:function(t,i){return t=t||(Ni?this.options.zoomDelta:1),this.setZoom(this._zoom+t,i)},zoomOut:function(t,i){return t=t||(Ni?this.options.zoomDelta:1),this.setZoom(this._zoom-t,i)},setZoomAround:function(t,i,e){var n=this.getZoomScale(i),o=this.getSize().divideBy(2),s=(t instanceof x?t:this.latLngToContainerPoint(t)).subtract(o).multiplyBy(1-1/n),r=this.containerPointToLatLng(o.add(s));return this.setView(r,i,{zoom:e})},_getBoundsCenterZoom:function(t,i){i=i||{},t=t.getBounds?t.getBounds():z(t);var e=w(i.paddingTopLeft||i.padding||[0,0]),n=w(i.paddingBottomRight||i.padding||[0,0]),o=this.getBoundsZoom(t,!1,e.add(n));if((o="number"==typeof i.maxZoom?Math.min(i.maxZoom,o):o)===1/0)return{center:t.getCenter(),zoom:o};var s=n.subtract(e).divideBy(2),r=this.project(t.getSouthWest(),o),a=this.project(t.getNorthEast(),o);return{center:this.unproject(r.add(a).divideBy(2).add(s),o),zoom:o}},fitBounds:function(t,i){if(!(t=z(t)).isValid())throw new Error("Bounds are not valid.");var e=this._getBoundsCenterZoom(t,i);return this.setView(e.center,e.zoom,i)},fitWorld:function(t){return this.fitBounds([[-90,-180],[90,180]],t)},panTo:function(t,i){return this.setView(t,this._zoom,{pan:i})},panBy:function(t,i){if(t=w(t).round(),i=i||{},!t.x&&!t.y)return this.fire("moveend");if(!0!==i.animate&&!this.getSize().contains(t))return this._resetView(this.unproject(this.project(this.getCenter()).add(t)),this.getZoom()),this;if(this._panAnim||(this._panAnim=new we,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),i.noMoveStart||this.fire("movestart"),!1!==i.animate){pt(this._mapPane,"leaflet-pan-anim");var e=this._getMapPanePos().subtract(t).round();this._panAnim.run(this._mapPane,e,i.duration||.25,i.easeLinearity)}else this._rawPanBy(t),this.fire("move").fire("moveend");return this},flyTo:function(t,i,e){function n(t){var i=(g*g-m*m+(t?-1:1)*x*x*v*v)/(2*(t?g:m)*x*v),e=Math.sqrt(i*i+1)-i;return e<1e-9?-18:Math.log(e)}function o(t){return(Math.exp(t)-Math.exp(-t))/2}function s(t){return(Math.exp(t)+Math.exp(-t))/2}function r(t){return o(t)/s(t)}function a(t){return m*(s(w)/s(w+y*t))}function h(t){return m*(s(w)*r(w+y*t)-o(w))/x}function u(t){return 1-Math.pow(1-t,1.5)}function l(){var e=(Date.now()-L)/b,n=u(e)*P;e<=1?(this._flyToFrame=f(l,this),this._move(this.unproject(c.add(_.subtract(c).multiplyBy(h(n)/v)),p),this.getScaleZoom(m/a(n),p),{flyTo:!0})):this._move(t,i)._moveEnd(!0)}if(!1===(e=e||{}).animate||!Ni)return this.setView(t,i,e);this._stop();var c=this.project(this.getCenter()),_=this.project(t),d=this.getSize(),p=this._zoom;t=C(t),i=void 0===i?p:i;var m=Math.max(d.x,d.y),g=m*this.getZoomScale(p,i),v=_.distanceTo(c)||1,y=1.42,x=y*y,w=n(0),L=Date.now(),P=(n(1)-w)/y,b=e.duration?1e3*e.duration:1e3*P*.8;return this._moveStart(!0,e.noMoveStart),l.call(this),this},flyToBounds:function(t,i){var e=this._getBoundsCenterZoom(t,i);return this.flyTo(e.center,e.zoom,i)},setMaxBounds:function(t){return(t=z(t)).isValid()?(this.options.maxBounds&&this.off("moveend",this._panInsideMaxBounds),this.options.maxBounds=t,this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds)):(this.options.maxBounds=null,this.off("moveend",this._panInsideMaxBounds))},setMinZoom:function(t){var i=this.options.minZoom;return this.options.minZoom=t,this._loaded&&i!==t&&(this.fire("zoomlevelschange"),this.getZoom()<this.options.minZoom)?this.setZoom(t):this},setMaxZoom:function(t){var i=this.options.maxZoom;return this.options.maxZoom=t,this._loaded&&i!==t&&(this.fire("zoomlevelschange"),this.getZoom()>this.options.maxZoom)?this.setZoom(t):this},panInsideBounds:function(t,i){this._enforcingBounds=!0;var e=this.getCenter(),n=this._limitCenter(e,this._zoom,z(t));return e.equals(n)||this.panTo(n,i),this._enforcingBounds=!1,this},invalidateSize:function(t){if(!this._loaded)return this;t=i({animate:!1,pan:!0},!0===t?{animate:!0}:t);var n=this.getSize();this._sizeChanged=!0,this._lastCenter=null;var o=this.getSize(),s=n.divideBy(2).round(),r=o.divideBy(2).round(),a=s.subtract(r);return a.x||a.y?(t.animate&&t.pan?this.panBy(a):(t.pan&&this._rawPanBy(a),this.fire("move"),t.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(e(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:n,newSize:o})):this},stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire("viewreset"),this._stop()},locate:function(t){if(t=this._locateOptions=i({timeout:1e4,watch:!1},t),!("geolocation"in navigator))return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var n=e(this._handleGeolocationResponse,this),o=e(this._handleGeolocationError,this);return t.watch?this._locationWatchId=navigator.geolocation.watchPosition(n,o,t):navigator.geolocation.getCurrentPosition(n,o,t),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(t){var i=t.code,e=t.message||(1===i?"permission denied":2===i?"position unavailable":"timeout");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:i,message:"Geolocation error: "+e+"."})},_handleGeolocationResponse:function(t){var i=new M(t.coords.latitude,t.coords.longitude),e=i.toBounds(t.coords.accuracy),n=this._locateOptions;if(n.setView){var o=this.getBoundsZoom(e);this.setView(i,n.maxZoom?Math.min(o,n.maxZoom):o)}var s={latlng:i,bounds:e,timestamp:t.timestamp};for(var r in t.coords)"number"==typeof t.coords[r]&&(s[r]=t.coords[r]);this.fire("locationfound",s)},addHandler:function(t,i){if(!i)return this;var e=this[t]=new i(this);return this._handlers.push(e),this.options[t]&&e.enable(),this},remove:function(){if(this._initEvents(!0),this._containerId!==this._container._leaflet_id)throw new Error("Map container is being reused by another instance");try{delete this._container._leaflet_id,delete this._containerId}catch(t){this._container._leaflet_id=void 0,this._containerId=void 0}void 0!==this._locationWatchId&&this.stopLocate(),this._stop(),ut(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._clearHandlers(),this._loaded&&this.fire("unload");var t;for(t in this._layers)this._layers[t].remove();for(t in this._panes)ut(this._panes[t]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},createPane:function(t,i){var e=ht("div","leaflet-pane"+(t?" leaflet-"+t.replace("Pane","")+"-pane":""),i||this._mapPane);return t&&(this._panes[t]=e),e},getCenter:function(){return this._checkIfLoaded(),this._lastCenter&&!this._moved()?this._lastCenter:this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var t=this.getPixelBounds();return new T(this.unproject(t.getBottomLeft()),this.unproject(t.getTopRight()))},getMinZoom:function(){return void 0===this.options.minZoom?this._layersMinZoom||0:this.options.minZoom},getMaxZoom:function(){return void 0===this.options.maxZoom?void 0===this._layersMaxZoom?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(t,i,e){t=z(t),e=w(e||[0,0]);var n=this.getZoom()||0,o=this.getMinZoom(),s=this.getMaxZoom(),r=t.getNorthWest(),a=t.getSouthEast(),h=this.getSize().subtract(e),u=b(this.project(a,n),this.project(r,n)).getSize(),l=Ni?this.options.zoomSnap:1,c=h.x/u.x,_=h.y/u.y,d=i?Math.max(c,_):Math.min(c,_);return n=this.getScaleZoom(d,n),l&&(n=Math.round(n/(l/100))*(l/100),n=i?Math.ceil(n/l)*l:Math.floor(n/l)*l),Math.max(o,Math.min(s,n))},getSize:function(){return this._size&&!this._sizeChanged||(this._size=new x(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(t,i){var e=this._getTopLeftPoint(t,i);return new P(e,e.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},getPixelWorldBounds:function(t){return this.options.crs.getProjectedBounds(void 0===t?this.getZoom():t)},getPane:function(t){return"string"==typeof t?this._panes[t]:t},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(t,i){var e=this.options.crs;return i=void 0===i?this._zoom:i,e.scale(t)/e.scale(i)},getScaleZoom:function(t,i){var e=this.options.crs;i=void 0===i?this._zoom:i;var n=e.zoom(t*e.scale(i));return isNaN(n)?1/0:n},project:function(t,i){return i=void 0===i?this._zoom:i,this.options.crs.latLngToPoint(C(t),i)},unproject:function(t,i){return i=void 0===i?this._zoom:i,this.options.crs.pointToLatLng(w(t),i)},layerPointToLatLng:function(t){var i=w(t).add(this.getPixelOrigin());return this.unproject(i)},latLngToLayerPoint:function(t){return this.project(C(t))._round()._subtract(this.getPixelOrigin())},wrapLatLng:function(t){return this.options.crs.wrapLatLng(C(t))},wrapLatLngBounds:function(t){return this.options.crs.wrapLatLngBounds(z(t))},distance:function(t,i){return this.options.crs.distance(C(t),C(i))},containerPointToLayerPoint:function(t){return w(t).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(t){return w(t).add(this._getMapPanePos())},containerPointToLatLng:function(t){var i=this.containerPointToLayerPoint(w(t));return this.layerPointToLatLng(i)},latLngToContainerPoint:function(t){return this.layerPointToContainerPoint(this.latLngToLayerPoint(C(t)))},mouseEventToContainerPoint:function(t){return tt(t,this._container)},mouseEventToLayerPoint:function(t){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t))},mouseEventToLatLng:function(t){return this.layerPointToLatLng(this.mouseEventToLayerPoint(t))},_initContainer:function(t){var i=this._container=rt(t);if(!i)throw new Error("Map container not found.");if(i._leaflet_id)throw new Error("Map container is already initialized.");V(i,"scroll",this._onScroll,this),this._containerId=n(i)},_initLayout:function(){var t=this._container;this._fadeAnimated=this.options.fadeAnimation&&Ni,pt(t,"leaflet-container"+(Vi?" leaflet-touch":"")+(Ki?" leaflet-retina":"")+(Li?" leaflet-oldie":"")+(ki?" leaflet-safari":"")+(this._fadeAnimated?" leaflet-fade-anim":""));var i=at(t,"position");"absolute"!==i&&"relative"!==i&&"fixed"!==i&&(t.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var t=this._panes={};this._paneRenderers={},this._mapPane=this.createPane("mapPane",this._container),Lt(this._mapPane,new x(0,0)),this.createPane("tilePane"),this.createPane("shadowPane"),this.createPane("overlayPane"),this.createPane("markerPane"),this.createPane("tooltipPane"),this.createPane("popupPane"),this.options.markerZoomAnimation||(pt(t.markerPane,"leaflet-zoom-hide"),pt(t.shadowPane,"leaflet-zoom-hide"))},_resetView:function(t,i){Lt(this._mapPane,new x(0,0));var e=!this._loaded;this._loaded=!0,i=this._limitZoom(i),this.fire("viewprereset");var n=this._zoom!==i;this._moveStart(n,!1)._move(t,i)._moveEnd(n),this.fire("viewreset"),e&&this.fire("load")},_moveStart:function(t,i){return t&&this.fire("zoomstart"),i||this.fire("movestart"),this},_move:function(t,i,e){void 0===i&&(i=this._zoom);var n=this._zoom!==i;return this._zoom=i,this._lastCenter=t,this._pixelOrigin=this._getNewPixelOrigin(t),(n||e&&e.pinch)&&this.fire("zoom",e),this.fire("move",e)},_moveEnd:function(t){return t&&this.fire("zoomend"),this.fire("moveend")},_stop:function(){return g(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(t){Lt(this._mapPane,this._getMapPanePos().subtract(t))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},_initEvents:function(t){this._targets={},this._targets[n(this._container)]=this;var i=t?q:V;i(this._container,"click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress",this._handleDOMEvent,this),this.options.trackResize&&i(window,"resize",this._onResize,this),Ni&&this.options.transform3DLimit&&(t?this.off:this.on).call(this,"moveend",this._onMoveEnd)},_onResize:function(){g(this._resizeRequest),this._resizeRequest=f(function(){this.invalidateSize({debounceMoveend:!0})},this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var t=this._getMapPanePos();Math.max(Math.abs(t.x),Math.abs(t.y))>=this.options.transform3DLimit&&this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(t,i){for(var e,o=[],s="mouseout"===i||"mouseover"===i,r=t.target||t.srcElement,a=!1;r;){if((e=this._targets[n(r)])&&("click"===i||"preclick"===i)&&!t._simulated&&this._draggableMoved(e)){a=!0;break}if(e&&e.listens(i,!0)){if(s&&!ot(r,t))break;if(o.push(e),s)break}if(r===this._container)break;r=r.parentNode}return o.length||a||s||!ot(r,t)||(o=[this]),o},_handleDOMEvent:function(t){if(this._loaded&&!nt(t)){var i=t.type;"mousedown"!==i&&"keypress"!==i||zt(t.target||t.srcElement),this._fireDOMEvent(t,i)}},_mouseEvents:["click","dblclick","mouseover","mouseout","contextmenu"],_fireDOMEvent:function(t,e,n){if("click"===t.type){var o=i({},t);o.type="preclick",this._fireDOMEvent(o,o.type,n)}if(!t._stopped&&(n=(n||[]).concat(this._findEventTargets(t,e))).length){var s=n[0];"contextmenu"===e&&s.listens(e,!0)&&$(t);var r={originalEvent:t};if("keypress"!==t.type){var a=s.getLatLng&&(!s._radius||s._radius<=10);r.containerPoint=a?this.latLngToContainerPoint(s.getLatLng()):this.mouseEventToContainerPoint(t),r.layerPoint=this.containerPointToLayerPoint(r.containerPoint),r.latlng=a?s.getLatLng():this.layerPointToLatLng(r.layerPoint)}for(var h=0;h<n.length;h++)if(n[h].fire(e,r,!0),r.originalEvent._stopped||!1===n[h].options.bubblingMouseEvents&&-1!==d(this._mouseEvents,e))return}},_draggableMoved:function(t){return(t=t.dragging&&t.dragging.enabled()?t:this).dragging&&t.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var t=0,i=this._handlers.length;t<i;t++)this._handlers[t].disable()},whenReady:function(t,i){return this._loaded?t.call(i||this,{target:this}):this.on("load",t,i),this},_getMapPanePos:function(){return Pt(this._mapPane)||new x(0,0)},_moved:function(){var t=this._getMapPanePos();return t&&!t.equals([0,0])},_getTopLeftPoint:function(t,i){return(t&&void 0!==i?this._getNewPixelOrigin(t,i):this.getPixelOrigin()).subtract(this._getMapPanePos())},_getNewPixelOrigin:function(t,i){var e=this.getSize()._divideBy(2);return this.project(t,i)._subtract(e)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(t,i,e){var n=this._getNewPixelOrigin(e,i);return this.project(t,i)._subtract(n)},_latLngBoundsToNewLayerBounds:function(t,i,e){var n=this._getNewPixelOrigin(e,i);return b([this.project(t.getSouthWest(),i)._subtract(n),this.project(t.getNorthWest(),i)._subtract(n),this.project(t.getSouthEast(),i)._subtract(n),this.project(t.getNorthEast(),i)._subtract(n)])},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(t){return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint())},_limitCenter:function(t,i,e){if(!e)return t;var n=this.project(t,i),o=this.getSize().divideBy(2),s=new P(n.subtract(o),n.add(o)),r=this._getBoundsOffset(s,e,i);return r.round().equals([0,0])?t:this.unproject(n.add(r),i)},_limitOffset:function(t,i){if(!i)return t;var e=this.getPixelBounds(),n=new P(e.min.add(t),e.max.add(t));return t.add(this._getBoundsOffset(n,i))},_getBoundsOffset:function(t,i,e){var n=b(this.project(i.getNorthEast(),e),this.project(i.getSouthWest(),e)),o=n.min.subtract(t.min),s=n.max.subtract(t.max);return new x(this._rebound(o.x,-s.x),this._rebound(o.y,-s.y))},_rebound:function(t,i){return t+i>0?Math.round(t-i)/2:Math.max(0,Math.ceil(t))-Math.max(0,Math.floor(i))},_limitZoom:function(t){var i=this.getMinZoom(),e=this.getMaxZoom(),n=Ni?this.options.zoomSnap:1;return n&&(t=Math.round(t/n)*n),Math.max(i,Math.min(e,t))},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){mt(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(t,i){var e=this._getCenterOffset(t)._trunc();return!(!0!==(i&&i.animate)&&!this.getSize().contains(e))&&(this.panBy(e,i),!0)},_createAnimProxy:function(){var t=this._proxy=ht("div","leaflet-proxy leaflet-zoom-animated");this._panes.mapPane.appendChild(t),this.on("zoomanim",function(t){var i=pe,e=this._proxy.style[i];wt(this._proxy,this.project(t.center,t.zoom),this.getZoomScale(t.zoom,1)),e===this._proxy.style[i]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on("load moveend",function(){var t=this.getCenter(),i=this.getZoom();wt(this._proxy,this.project(t,i),this.getZoomScale(i,1))},this),this._on("unload",this._destroyAnimProxy,this)},_destroyAnimProxy:function(){ut(this._proxy),delete this._proxy},_catchTransitionEnd:function(t){this._animatingZoom&&t.propertyName.indexOf("transform")>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(t,i,e){if(this._animatingZoom)return!0;if(e=e||{},!this._zoomAnimated||!1===e.animate||this._nothingToAnimate()||Math.abs(i-this._zoom)>this.options.zoomAnimationThreshold)return!1;var n=this.getZoomScale(i),o=this._getCenterOffset(t)._divideBy(1-1/n);return!(!0!==e.animate&&!this.getSize().contains(o))&&(f(function(){this._moveStart(!0,!1)._animateZoom(t,i,!0)},this),!0)},_animateZoom:function(t,i,n,o){this._mapPane&&(n&&(this._animatingZoom=!0,this._animateToCenter=t,this._animateToZoom=i,pt(this._mapPane,"leaflet-zoom-anim")),this.fire("zoomanim",{center:t,zoom:i,noUpdate:o}),setTimeout(e(this._onZoomTransitionEnd,this),250))},_onZoomTransitionEnd:function(){this._animatingZoom&&(this._mapPane&&mt(this._mapPane,"leaflet-zoom-anim"),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom),f(function(){this._moveEnd(!0)},this))}}),Pe=v.extend({options:{position:"topright"},initialize:function(t){l(this,t)},getPosition:function(){return this.options.position},setPosition:function(t){var i=this._map;return i&&i.removeControl(this),this.options.position=t,i&&i.addControl(this),this},getContainer:function(){return this._container},addTo:function(t){this.remove(),this._map=t;var i=this._container=this.onAdd(t),e=this.getPosition(),n=t._controlCorners[e];return pt(i,"leaflet-control"),-1!==e.indexOf("bottom")?n.insertBefore(i,n.firstChild):n.appendChild(i),this},remove:function(){return this._map?(ut(this._container),this.onRemove&&this.onRemove(this._map),this._map=null,this):this},_refocusOnMap:function(t){this._map&&t&&t.screenX>0&&t.screenY>0&&this._map.getContainer().focus()}}),be=function(t){return new Pe(t)};Le.include({addControl:function(t){return t.addTo(this),this},removeControl:function(t){return t.remove(),this},_initControlPos:function(){function t(t,o){var s=e+t+" "+e+o;i[t+o]=ht("div",s,n)}var i=this._controlCorners={},e="leaflet-",n=this._controlContainer=ht("div",e+"control-container",this._container);t("top","left"),t("top","right"),t("bottom","left"),t("bottom","right")},_clearControlPos:function(){for(var t in this._controlCorners)ut(this._controlCorners[t]);ut(this._controlContainer),delete this._controlCorners,delete this._controlContainer}});var Te=Pe.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0,hideSingleBase:!1,sortLayers:!1,sortFunction:function(t,i,e,n){return e<n?-1:n<e?1:0}},initialize:function(t,i,e){l(this,e),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1;for(var n in t)this._addLayer(t[n],n);for(n in i)this._addLayer(i[n],n,!0)},onAdd:function(t){this._initLayout(),this._update(),this._map=t,t.on("zoomend",this._checkDisabledLayers,this);for(var i=0;i<this._layers.length;i++)this._layers[i].layer.on("add remove",this._onLayerChange,this);return this._container},addTo:function(t){return Pe.prototype.addTo.call(this,t),this._expandIfNotCollapsed()},onRemove:function(){this._map.off("zoomend",this._checkDisabledLayers,this);for(var t=0;t<this._layers.length;t++)this._layers[t].layer.off("add remove",this._onLayerChange,this)},addBaseLayer:function(t,i){return this._addLayer(t,i),this._map?this._update():this},addOverlay:function(t,i){return this._addLayer(t,i,!0),this._map?this._update():this},removeLayer:function(t){t.off("add remove",this._onLayerChange,this);var i=this._getLayer(n(t));return i&&this._layers.splice(this._layers.indexOf(i),1),this._map?this._update():this},expand:function(){pt(this._container,"leaflet-control-layers-expanded"),this._form.style.height=null;var t=this._map.getSize().y-(this._container.offsetTop+50);return t<this._form.clientHeight?(pt(this._form,"leaflet-control-layers-scrollbar"),this._form.style.height=t+"px"):mt(this._form,"leaflet-control-layers-scrollbar"),this._checkDisabledLayers(),this},collapse:function(){return mt(this._container,"leaflet-control-layers-expanded"),this},_initLayout:function(){var t="leaflet-control-layers",i=this._container=ht("div",t),e=this.options.collapsed;i.setAttribute("aria-haspopup",!0),J(i),X(i);var n=this._form=ht("form",t+"-list");e&&(this._map.on("click",this.collapse,this),Ti||V(i,{mouseenter:this.expand,mouseleave:this.collapse},this));var o=this._layersLink=ht("a",t+"-toggle",i);o.href="#",o.title="Layers",Vi?(V(o,"click",Q),V(o,"click",this.expand,this)):V(o,"focus",this.expand,this),e||this.expand(),this._baseLayersList=ht("div",t+"-base",n),this._separator=ht("div",t+"-separator",n),this._overlaysList=ht("div",t+"-overlays",n),i.appendChild(n)},_getLayer:function(t){for(var i=0;i<this._layers.length;i++)if(this._layers[i]&&n(this._layers[i].layer)===t)return this._layers[i]},_addLayer:function(t,i,n){this._map&&t.on("add remove",this._onLayerChange,this),this._layers.push({layer:t,name:i,overlay:n}),this.options.sortLayers&&this._layers.sort(e(function(t,i){return this.options.sortFunction(t.layer,i.layer,t.name,i.name)},this)),this.options.autoZIndex&&t.setZIndex&&(this._lastZIndex++,t.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},_update:function(){if(!this._container)return this;lt(this._baseLayersList),lt(this._overlaysList),this._layerControlInputs=[];var t,i,e,n,o=0;for(e=0;e<this._layers.length;e++)n=this._layers[e],this._addItem(n),i=i||n.overlay,t=t||!n.overlay,o+=n.overlay?0:1;return this.options.hideSingleBase&&(t=t&&o>1,this._baseLayersList.style.display=t?"":"none"),this._separator.style.display=i&&t?"":"none",this},_onLayerChange:function(t){this._handlingClick||this._update();var i=this._getLayer(n(t.target)),e=i.overlay?"add"===t.type?"overlayadd":"overlayremove":"add"===t.type?"baselayerchange":null;e&&this._map.fire(e,i)},_createRadioElement:function(t,i){var e='<input type="radio" class="leaflet-control-layers-selector" name="'+t+'"'+(i?' checked="checked"':"")+"/>",n=document.createElement("div");return n.innerHTML=e,n.firstChild},_addItem:function(t){var i,e=document.createElement("label"),o=this._map.hasLayer(t.layer);t.overlay?((i=document.createElement("input")).type="checkbox",i.className="leaflet-control-layers-selector",i.defaultChecked=o):i=this._createRadioElement("leaflet-base-layers",o),this._layerControlInputs.push(i),i.layerId=n(t.layer),V(i,"click",this._onInputClick,this);var s=document.createElement("span");s.innerHTML=" "+t.name;var r=document.createElement("div");return e.appendChild(r),r.appendChild(i),r.appendChild(s),(t.overlay?this._overlaysList:this._baseLayersList).appendChild(e),this._checkDisabledLayers(),e},_onInputClick:function(){var t,i,e=this._layerControlInputs,n=[],o=[];this._handlingClick=!0;for(var s=e.length-1;s>=0;s--)t=e[s],i=this._getLayer(t.layerId).layer,t.checked?n.push(i):t.checked||o.push(i);for(s=0;s<o.length;s++)this._map.hasLayer(o[s])&&this._map.removeLayer(o[s]);for(s=0;s<n.length;s++)this._map.hasLayer(n[s])||this._map.addLayer(n[s]);this._handlingClick=!1,this._refocusOnMap()},_checkDisabledLayers:function(){for(var t,i,e=this._layerControlInputs,n=this._map.getZoom(),o=e.length-1;o>=0;o--)t=e[o],i=this._getLayer(t.layerId).layer,t.disabled=void 0!==i.options.minZoom&&n<i.options.minZoom||void 0!==i.options.maxZoom&&n>i.options.maxZoom},_expandIfNotCollapsed:function(){return this._map&&!this.options.collapsed&&this.expand(),this},_expand:function(){return this.expand()},_collapse:function(){return this.collapse()}}),ze=Pe.extend({options:{position:"topleft",zoomInText:"+",zoomInTitle:"Zoom in",zoomOutText:"&#x2212;",zoomOutTitle:"Zoom out"},onAdd:function(t){var i="leaflet-control-zoom",e=ht("div",i+" leaflet-bar"),n=this.options;return this._zoomInButton=this._createButton(n.zoomInText,n.zoomInTitle,i+"-in",e,this._zoomIn),this._zoomOutButton=this._createButton(n.zoomOutText,n.zoomOutTitle,i+"-out",e,this._zoomOut),this._updateDisabled(),t.on("zoomend zoomlevelschange",this._updateDisabled,this),e},onRemove:function(t){t.off("zoomend zoomlevelschange",this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(t){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(t.shiftKey?3:1))},_zoomOut:function(t){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(t.shiftKey?3:1))},_createButton:function(t,i,e,n,o){var s=ht("a",e,n);return s.innerHTML=t,s.href="#",s.title=i,s.setAttribute("role","button"),s.setAttribute("aria-label",i),J(s),V(s,"click",Q),V(s,"click",o,this),V(s,"click",this._refocusOnMap,this),s},_updateDisabled:function(){var t=this._map,i="leaflet-disabled";mt(this._zoomInButton,i),mt(this._zoomOutButton,i),(this._disabled||t._zoom===t.getMinZoom())&&pt(this._zoomOutButton,i),(this._disabled||t._zoom===t.getMaxZoom())&&pt(this._zoomInButton,i)}});Le.mergeOptions({zoomControl:!0}),Le.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new ze,this.addControl(this.zoomControl))});var Me=Pe.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0},onAdd:function(t){var i=ht("div","leaflet-control-scale"),e=this.options;return this._addScales(e,"leaflet-control-scale-line",i),t.on(e.updateWhenIdle?"moveend":"move",this._update,this),t.whenReady(this._update,this),i},onRemove:function(t){t.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(t,i,e){t.metric&&(this._mScale=ht("div",i,e)),t.imperial&&(this._iScale=ht("div",i,e))},_update:function(){var t=this._map,i=t.getSize().y/2,e=t.distance(t.containerPointToLatLng([0,i]),t.containerPointToLatLng([this.options.maxWidth,i]));this._updateScales(e)},_updateScales:function(t){this.options.metric&&t&&this._updateMetric(t),this.options.imperial&&t&&this._updateImperial(t)},_updateMetric:function(t){var i=this._getRoundNum(t),e=i<1e3?i+" m":i/1e3+" km";this._updateScale(this._mScale,e,i/t)},_updateImperial:function(t){var i,e,n,o=3.2808399*t;o>5280?(i=o/5280,e=this._getRoundNum(i),this._updateScale(this._iScale,e+" mi",e/i)):(n=this._getRoundNum(o),this._updateScale(this._iScale,n+" ft",n/o))},_updateScale:function(t,i,e){t.style.width=Math.round(this.options.maxWidth*e)+"px",t.innerHTML=i},_getRoundNum:function(t){var i=Math.pow(10,(Math.floor(t)+"").length-1),e=t/i;return e=e>=10?10:e>=5?5:e>=3?3:e>=2?2:1,i*e}}),Ce=Pe.extend({options:{position:"bottomright",prefix:'<a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>'},initialize:function(t){l(this,t),this._attributions={}},onAdd:function(t){t.attributionControl=this,this._container=ht("div","leaflet-control-attribution"),J(this._container);for(var i in t._layers)t._layers[i].getAttribution&&this.addAttribution(t._layers[i].getAttribution());return this._update(),this._container},setPrefix:function(t){return this.options.prefix=t,this._update(),this},addAttribution:function(t){return t?(this._attributions[t]||(this._attributions[t]=0),this._attributions[t]++,this._update(),this):this},removeAttribution:function(t){return t?(this._attributions[t]&&(this._attributions[t]--,this._update()),this):this},_update:function(){if(this._map){var t=[];for(var i in this._attributions)this._attributions[i]&&t.push(i);var e=[];this.options.prefix&&e.push(this.options.prefix),t.length&&e.push(t.join(", ")),this._container.innerHTML=e.join(" | ")}}});Le.mergeOptions({attributionControl:!0}),Le.addInitHook(function(){this.options.attributionControl&&(new Ce).addTo(this)});Pe.Layers=Te,Pe.Zoom=ze,Pe.Scale=Me,Pe.Attribution=Ce,be.layers=function(t,i,e){return new Te(t,i,e)},be.zoom=function(t){return new ze(t)},be.scale=function(t){return new Me(t)},be.attribution=function(t){return new Ce(t)};var Ze=v.extend({initialize:function(t){this._map=t},enable:function(){return this._enabled?this:(this._enabled=!0,this.addHooks(),this)},disable:function(){return this._enabled?(this._enabled=!1,this.removeHooks(),this):this},enabled:function(){return!!this._enabled}});Ze.addTo=function(t,i){return t.addHandler(i,this),this};var Se,Ee={Events:hi},ke=Vi?"touchstart mousedown":"mousedown",Ie={mousedown:"mouseup",touchstart:"touchend",pointerdown:"touchend",MSPointerDown:"touchend"},Ae={mousedown:"mousemove",touchstart:"touchmove",pointerdown:"touchmove",MSPointerDown:"touchmove"},Be=ui.extend({options:{clickTolerance:3},initialize:function(t,i,e,n){l(this,n),this._element=t,this._dragStartTarget=i||t,this._preventOutline=e},enable:function(){this._enabled||(V(this._dragStartTarget,ke,this._onDown,this),this._enabled=!0)},disable:function(){this._enabled&&(Be._dragging===this&&this.finishDrag(),q(this._dragStartTarget,ke,this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(t){if(!t._simulated&&this._enabled&&(this._moved=!1,!dt(this._element,"leaflet-zoom-anim")&&!(Be._dragging||t.shiftKey||1!==t.which&&1!==t.button&&!t.touches||(Be._dragging=this,this._preventOutline&&zt(this._element),bt(),mi(),this._moving)))){this.fire("down");var i=t.touches?t.touches[0]:t;this._startPoint=new x(i.clientX,i.clientY),V(document,Ae[t.type],this._onMove,this),V(document,Ie[t.type],this._onUp,this)}},_onMove:function(t){if(!t._simulated&&this._enabled)if(t.touches&&t.touches.length>1)this._moved=!0;else{var i=t.touches&&1===t.touches.length?t.touches[0]:t,e=new x(i.clientX,i.clientY).subtract(this._startPoint);(e.x||e.y)&&(Math.abs(e.x)+Math.abs(e.y)<this.options.clickTolerance||($(t),this._moved||(this.fire("dragstart"),this._moved=!0,this._startPos=Pt(this._element).subtract(e),pt(document.body,"leaflet-dragging"),this._lastTarget=t.target||t.srcElement,window.SVGElementInstance&&this._lastTarget instanceof SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),pt(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(e),this._moving=!0,g(this._animRequest),this._lastEvent=t,this._animRequest=f(this._updatePosition,this,!0)))}},_updatePosition:function(){var t={originalEvent:this._lastEvent};this.fire("predrag",t),Lt(this._element,this._newPos),this.fire("drag",t)},_onUp:function(t){!t._simulated&&this._enabled&&this.finishDrag()},finishDrag:function(){mt(document.body,"leaflet-dragging"),this._lastTarget&&(mt(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null);for(var t in Ae)q(document,Ae[t],this._onMove,this),q(document,Ie[t],this._onUp,this);Tt(),fi(),this._moved&&this._moving&&(g(this._animRequest),this.fire("dragend",{distance:this._newPos.distanceTo(this._startPos)})),this._moving=!1,Be._dragging=!1}}),Oe=(Object.freeze||Object)({simplify:Ct,pointToSegmentDistance:Zt,closestPointOnSegment:function(t,i,e){return Rt(t,i,e)},clipSegment:It,_getEdgeIntersection:At,_getBitCode:Bt,_sqClosestPointOnSegment:Rt,isFlat:Dt,_flat:Nt}),Re=(Object.freeze||Object)({clipPolygon:jt}),De={project:function(t){return new x(t.lng,t.lat)},unproject:function(t){return new M(t.y,t.x)},bounds:new P([-180,-90],[180,90])},Ne={R:6378137,R_MINOR:6356752.314245179,bounds:new P([-20037508.34279,-15496570.73972],[20037508.34279,18764656.23138]),project:function(t){var i=Math.PI/180,e=this.R,n=t.lat*i,o=this.R_MINOR/e,s=Math.sqrt(1-o*o),r=s*Math.sin(n),a=Math.tan(Math.PI/4-n/2)/Math.pow((1-r)/(1+r),s/2);return n=-e*Math.log(Math.max(a,1e-10)),new x(t.lng*i*e,n)},unproject:function(t){for(var i,e=180/Math.PI,n=this.R,o=this.R_MINOR/n,s=Math.sqrt(1-o*o),r=Math.exp(-t.y/n),a=Math.PI/2-2*Math.atan(r),h=0,u=.1;h<15&&Math.abs(u)>1e-7;h++)i=s*Math.sin(a),i=Math.pow((1-i)/(1+i),s/2),a+=u=Math.PI/2-2*Math.atan(r*i)-a;return new M(a*e,t.x*e/n)}},je=(Object.freeze||Object)({LonLat:De,Mercator:Ne,SphericalMercator:di}),We=i({},_i,{code:"EPSG:3395",projection:Ne,transformation:function(){var t=.5/(Math.PI*Ne.R);return S(t,.5,-t,.5)}()}),He=i({},_i,{code:"EPSG:4326",projection:De,transformation:S(1/180,1,-1/180,.5)}),Fe=i({},ci,{projection:De,transformation:S(1,0,-1,0),scale:function(t){return Math.pow(2,t)},zoom:function(t){return Math.log(t)/Math.LN2},distance:function(t,i){var e=i.lng-t.lng,n=i.lat-t.lat;return Math.sqrt(e*e+n*n)},infinite:!0});ci.Earth=_i,ci.EPSG3395=We,ci.EPSG3857=vi,ci.EPSG900913=yi,ci.EPSG4326=He,ci.Simple=Fe;var Ue=ui.extend({options:{pane:"overlayPane",attribution:null,bubblingMouseEvents:!0},addTo:function(t){return t.addLayer(this),this},remove:function(){return this.removeFrom(this._map||this._mapToAdd)},removeFrom:function(t){return t&&t.removeLayer(this),this},getPane:function(t){return this._map.getPane(t?this.options[t]||t:this.options.pane)},addInteractiveTarget:function(t){return this._map._targets[n(t)]=this,this},removeInteractiveTarget:function(t){return delete this._map._targets[n(t)],this},getAttribution:function(){return this.options.attribution},_layerAdd:function(t){var i=t.target;if(i.hasLayer(this)){if(this._map=i,this._zoomAnimated=i._zoomAnimated,this.getEvents){var e=this.getEvents();i.on(e,this),this.once("remove",function(){i.off(e,this)},this)}this.onAdd(i),this.getAttribution&&i.attributionControl&&i.attributionControl.addAttribution(this.getAttribution()),this.fire("add"),i.fire("layeradd",{layer:this})}}});Le.include({addLayer:function(t){if(!t._layerAdd)throw new Error("The provided object is not a Layer.");var i=n(t);return this._layers[i]?this:(this._layers[i]=t,t._mapToAdd=this,t.beforeAdd&&t.beforeAdd(this),this.whenReady(t._layerAdd,t),this)},removeLayer:function(t){var i=n(t);return this._layers[i]?(this._loaded&&t.onRemove(this),t.getAttribution&&this.attributionControl&&this.attributionControl.removeAttribution(t.getAttribution()),delete this._layers[i],this._loaded&&(this.fire("layerremove",{layer:t}),t.fire("remove")),t._map=t._mapToAdd=null,this):this},hasLayer:function(t){return!!t&&n(t)in this._layers},eachLayer:function(t,i){for(var e in this._layers)t.call(i,this._layers[e]);return this},_addLayers:function(t){for(var i=0,e=(t=t?ei(t)?t:[t]:[]).length;i<e;i++)this.addLayer(t[i])},_addZoomLimit:function(t){!isNaN(t.options.maxZoom)&&isNaN(t.options.minZoom)||(this._zoomBoundLayers[n(t)]=t,this._updateZoomLevels())},_removeZoomLimit:function(t){var i=n(t);this._zoomBoundLayers[i]&&(delete this._zoomBoundLayers[i],this._updateZoomLevels())},_updateZoomLevels:function(){var t=1/0,i=-1/0,e=this._getZoomSpan();for(var n in this._zoomBoundLayers){var o=this._zoomBoundLayers[n].options;t=void 0===o.minZoom?t:Math.min(t,o.minZoom),i=void 0===o.maxZoom?i:Math.max(i,o.maxZoom)}this._layersMaxZoom=i===-1/0?void 0:i,this._layersMinZoom=t===1/0?void 0:t,e!==this._getZoomSpan()&&this.fire("zoomlevelschange"),void 0===this.options.maxZoom&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),void 0===this.options.minZoom&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}});var Ve=Ue.extend({initialize:function(t,i){l(this,i),this._layers={};var e,n;if(t)for(e=0,n=t.length;e<n;e++)this.addLayer(t[e])},addLayer:function(t){var i=this.getLayerId(t);return this._layers[i]=t,this._map&&this._map.addLayer(t),this},removeLayer:function(t){var i=t in this._layers?t:this.getLayerId(t);return this._map&&this._layers[i]&&this._map.removeLayer(this._layers[i]),delete this._layers[i],this},hasLayer:function(t){return!!t&&(t in this._layers||this.getLayerId(t)in this._layers)},clearLayers:function(){return this.eachLayer(this.removeLayer,this)},invoke:function(t){var i,e,n=Array.prototype.slice.call(arguments,1);for(i in this._layers)(e=this._layers[i])[t]&&e[t].apply(e,n);return this},onAdd:function(t){this.eachLayer(t.addLayer,t)},onRemove:function(t){this.eachLayer(t.removeLayer,t)},eachLayer:function(t,i){for(var e in this._layers)t.call(i,this._layers[e]);return this},getLayer:function(t){return this._layers[t]},getLayers:function(){var t=[];return this.eachLayer(t.push,t),t},setZIndex:function(t){return this.invoke("setZIndex",t)},getLayerId:function(t){return n(t)}}),qe=Ve.extend({addLayer:function(t){return this.hasLayer(t)?this:(t.addEventParent(this),Ve.prototype.addLayer.call(this,t),this.fire("layeradd",{layer:t}))},removeLayer:function(t){return this.hasLayer(t)?(t in this._layers&&(t=this._layers[t]),t.removeEventParent(this),Ve.prototype.removeLayer.call(this,t),this.fire("layerremove",{layer:t})):this},setStyle:function(t){return this.invoke("setStyle",t)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var t=new T;for(var i in this._layers){var e=this._layers[i];t.extend(e.getBounds?e.getBounds():e.getLatLng())}return t}}),Ge=v.extend({options:{popupAnchor:[0,0],tooltipAnchor:[0,0]},initialize:function(t){l(this,t)},createIcon:function(t){return this._createIcon("icon",t)},createShadow:function(t){return this._createIcon("shadow",t)},_createIcon:function(t,i){var e=this._getIconUrl(t);if(!e){if("icon"===t)throw new Error("iconUrl not set in Icon options (see the docs).");return null}var n=this._createImg(e,i&&"IMG"===i.tagName?i:null);return this._setIconStyles(n,t),n},_setIconStyles:function(t,i){var e=this.options,n=e[i+"Size"];"number"==typeof n&&(n=[n,n]);var o=w(n),s=w("shadow"===i&&e.shadowAnchor||e.iconAnchor||o&&o.divideBy(2,!0));t.className="leaflet-marker-"+i+" "+(e.className||""),s&&(t.style.marginLeft=-s.x+"px",t.style.marginTop=-s.y+"px"),o&&(t.style.width=o.x+"px",t.style.height=o.y+"px")},_createImg:function(t,i){return i=i||document.createElement("img"),i.src=t,i},_getIconUrl:function(t){return Ki&&this.options[t+"RetinaUrl"]||this.options[t+"Url"]}}),Ke=Ge.extend({options:{iconUrl:"marker-icon.png",iconRetinaUrl:"marker-icon-2x.png",shadowUrl:"marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(t){return Ke.imagePath||(Ke.imagePath=this._detectIconPath()),(this.options.imagePath||Ke.imagePath)+Ge.prototype._getIconUrl.call(this,t)},_detectIconPath:function(){var t=ht("div","leaflet-default-icon-path",document.body),i=at(t,"background-image")||at(t,"backgroundImage");return document.body.removeChild(t),i=null===i||0!==i.indexOf("url")?"":i.replace(/^url\(["']?/,"").replace(/marker-icon\.png["']?\)$/,"")}}),Ye=Ze.extend({initialize:function(t){this._marker=t},addHooks:function(){var t=this._marker._icon;this._draggable||(this._draggable=new Be(t,t,!0)),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),pt(t,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&mt(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_adjustPan:function(t){var i=this._marker,e=i._map,n=this._marker.options.autoPanSpeed,o=this._marker.options.autoPanPadding,s=L.DomUtil.getPosition(i._icon),r=e.getPixelBounds(),a=e.getPixelOrigin(),h=b(r.min._subtract(a).add(o),r.max._subtract(a).subtract(o));if(!h.contains(s)){var u=w((Math.max(h.max.x,s.x)-h.max.x)/(r.max.x-h.max.x)-(Math.min(h.min.x,s.x)-h.min.x)/(r.min.x-h.min.x),(Math.max(h.max.y,s.y)-h.max.y)/(r.max.y-h.max.y)-(Math.min(h.min.y,s.y)-h.min.y)/(r.min.y-h.min.y)).multiplyBy(n);e.panBy(u,{animate:!1}),this._draggable._newPos._add(u),this._draggable._startPos._add(u),L.DomUtil.setPosition(i._icon,this._draggable._newPos),this._onDrag(t),this._panRequest=f(this._adjustPan.bind(this,t))}},_onDragStart:function(){this._oldLatLng=this._marker.getLatLng(),this._marker.closePopup().fire("movestart").fire("dragstart")},_onPreDrag:function(t){this._marker.options.autoPan&&(g(this._panRequest),this._panRequest=f(this._adjustPan.bind(this,t)))},_onDrag:function(t){var i=this._marker,e=i._shadow,n=Pt(i._icon),o=i._map.layerPointToLatLng(n);e&&Lt(e,n),i._latlng=o,t.latlng=o,t.oldLatLng=this._oldLatLng,i.fire("move",t).fire("drag",t)},_onDragEnd:function(t){g(this._panRequest),delete this._oldLatLng,this._marker.fire("moveend").fire("dragend",t)}}),Xe=Ue.extend({options:{icon:new Ke,interactive:!0,draggable:!1,autoPan:!1,autoPanPadding:[50,50],autoPanSpeed:10,keyboard:!0,title:"",alt:"",zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250,pane:"markerPane",bubblingMouseEvents:!1},initialize:function(t,i){l(this,i),this._latlng=C(t)},onAdd:function(t){this._zoomAnimated=this._zoomAnimated&&t.options.markerZoomAnimation,this._zoomAnimated&&t.on("zoomanim",this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(t){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&t.off("zoomanim",this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},getLatLng:function(){return this._latlng},setLatLng:function(t){var i=this._latlng;return this._latlng=C(t),this.update(),this.fire("move",{oldLatLng:i,latlng:this._latlng})},setZIndexOffset:function(t){return this.options.zIndexOffset=t,this.update()},setIcon:function(t){return this.options.icon=t,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){if(this._icon&&this._map){var t=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(t)}return this},_initIcon:function(){var t=this.options,i="leaflet-zoom-"+(this._zoomAnimated?"animated":"hide"),e=t.icon.createIcon(this._icon),n=!1;e!==this._icon&&(this._icon&&this._removeIcon(),n=!0,t.title&&(e.title=t.title),"IMG"===e.tagName&&(e.alt=t.alt||"")),pt(e,i),t.keyboard&&(e.tabIndex="0"),this._icon=e,t.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex});var o=t.icon.createShadow(this._shadow),s=!1;o!==this._shadow&&(this._removeShadow(),s=!0),o&&(pt(o,i),o.alt=""),this._shadow=o,t.opacity<1&&this._updateOpacity(),n&&this.getPane().appendChild(this._icon),this._initInteraction(),o&&s&&this.getPane("shadowPane").appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),ut(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&ut(this._shadow),this._shadow=null},_setPos:function(t){Lt(this._icon,t),this._shadow&&Lt(this._shadow,t),this._zIndex=t.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(t){this._icon.style.zIndex=this._zIndex+t},_animateZoom:function(t){var i=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center).round();this._setPos(i)},_initInteraction:function(){if(this.options.interactive&&(pt(this._icon,"leaflet-interactive"),this.addInteractiveTarget(this._icon),Ye)){var t=this.options.draggable;this.dragging&&(t=this.dragging.enabled(),this.dragging.disable()),this.dragging=new Ye(this),t&&this.dragging.enable()}},setOpacity:function(t){return this.options.opacity=t,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var t=this.options.opacity;vt(this._icon,t),this._shadow&&vt(this._shadow,t)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor}}),Je=Ue.extend({options:{stroke:!0,color:"#3388ff",weight:3,opacity:1,lineCap:"round",lineJoin:"round",dashArray:null,dashOffset:null,fill:!1,fillColor:null,fillOpacity:.2,fillRule:"evenodd",interactive:!0,bubblingMouseEvents:!0},beforeAdd:function(t){this._renderer=t.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},redraw:function(){return this._map&&this._renderer._updatePath(this),this},setStyle:function(t){return l(this,t),this._renderer&&this._renderer._updateStyle(this),this},bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){this._project(),this._update()},_clickTolerance:function(){return(this.options.stroke?this.options.weight/2:0)+this._renderer.options.tolerance}}),$e=Je.extend({options:{fill:!0,radius:10},initialize:function(t,i){l(this,i),this._latlng=C(t),this._radius=this.options.radius},setLatLng:function(t){return this._latlng=C(t),this.redraw(),this.fire("move",{latlng:this._latlng})},getLatLng:function(){return this._latlng},setRadius:function(t){return this.options.radius=this._radius=t,this.redraw()},getRadius:function(){return this._radius},setStyle:function(t){var i=t&&t.radius||this._radius;return Je.prototype.setStyle.call(this,t),this.setRadius(i),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var t=this._radius,i=this._radiusY||t,e=this._clickTolerance(),n=[t+e,i+e];this._pxBounds=new P(this._point.subtract(n),this._point.add(n))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},_containsPoint:function(t){return t.distanceTo(this._point)<=this._radius+this._clickTolerance()}}),Qe=$e.extend({initialize:function(t,e,n){if("number"==typeof e&&(e=i({},n,{radius:e})),l(this,e),this._latlng=C(t),isNaN(this.options.radius))throw new Error("Circle radius cannot be NaN");this._mRadius=this.options.radius},setRadius:function(t){return this._mRadius=t,this.redraw()},getRadius:function(){return this._mRadius},getBounds:function(){var t=[this._radius,this._radiusY||this._radius];return new T(this._map.layerPointToLatLng(this._point.subtract(t)),this._map.layerPointToLatLng(this._point.add(t)))},setStyle:Je.prototype.setStyle,_project:function(){var t=this._latlng.lng,i=this._latlng.lat,e=this._map,n=e.options.crs;if(n.distance===_i.distance){var o=Math.PI/180,s=this._mRadius/_i.R/o,r=e.project([i+s,t]),a=e.project([i-s,t]),h=r.add(a).divideBy(2),u=e.unproject(h).lat,l=Math.acos((Math.cos(s*o)-Math.sin(i*o)*Math.sin(u*o))/(Math.cos(i*o)*Math.cos(u*o)))/o;(isNaN(l)||0===l)&&(l=s/Math.cos(Math.PI/180*i)),this._point=h.subtract(e.getPixelOrigin()),this._radius=isNaN(l)?0:h.x-e.project([u,t-l]).x,this._radiusY=h.y-r.y}else{var c=n.unproject(n.project(this._latlng).subtract([this._mRadius,0]));this._point=e.latLngToLayerPoint(this._latlng),this._radius=this._point.x-e.latLngToLayerPoint(c).x}this._updateBounds()}}),tn=Je.extend({options:{smoothFactor:1,noClip:!1},initialize:function(t,i){l(this,i),this._setLatLngs(t)},getLatLngs:function(){return this._latlngs},setLatLngs:function(t){return this._setLatLngs(t),this.redraw()},isEmpty:function(){return!this._latlngs.length},closestLayerPoint:function(t){for(var i,e,n=1/0,o=null,s=Rt,r=0,a=this._parts.length;r<a;r++)for(var h=this._parts[r],u=1,l=h.length;u<l;u++){var c=s(t,i=h[u-1],e=h[u],!0);c<n&&(n=c,o=s(t,i,e))}return o&&(o.distance=Math.sqrt(n)),o},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");var t,i,e,n,o,s,r,a=this._rings[0],h=a.length;if(!h)return null;for(t=0,i=0;t<h-1;t++)i+=a[t].distanceTo(a[t+1])/2;if(0===i)return this._map.layerPointToLatLng(a[0]);for(t=0,n=0;t<h-1;t++)if(o=a[t],s=a[t+1],e=o.distanceTo(s),(n+=e)>i)return r=(n-i)/e,this._map.layerPointToLatLng([s.x-r*(s.x-o.x),s.y-r*(s.y-o.y)])},getBounds:function(){return this._bounds},addLatLng:function(t,i){return i=i||this._defaultShape(),t=C(t),i.push(t),this._bounds.extend(t),this.redraw()},_setLatLngs:function(t){this._bounds=new T,this._latlngs=this._convertLatLngs(t)},_defaultShape:function(){return Dt(this._latlngs)?this._latlngs:this._latlngs[0]},_convertLatLngs:function(t){for(var i=[],e=Dt(t),n=0,o=t.length;n<o;n++)e?(i[n]=C(t[n]),this._bounds.extend(i[n])):i[n]=this._convertLatLngs(t[n]);return i},_project:function(){var t=new P;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,t);var i=this._clickTolerance(),e=new x(i,i);this._bounds.isValid()&&t.isValid()&&(t.min._subtract(e),t.max._add(e),this._pxBounds=t)},_projectLatlngs:function(t,i,e){var n,o,s=t[0]instanceof M,r=t.length;if(s){for(o=[],n=0;n<r;n++)o[n]=this._map.latLngToLayerPoint(t[n]),e.extend(o[n]);i.push(o)}else for(n=0;n<r;n++)this._projectLatlngs(t[n],i,e)},_clipPoints:function(){var t=this._renderer._bounds;if(this._parts=[],this._pxBounds&&this._pxBounds.intersects(t))if(this.options.noClip)this._parts=this._rings;else{var i,e,n,o,s,r,a,h=this._parts;for(i=0,n=0,o=this._rings.length;i<o;i++)for(e=0,s=(a=this._rings[i]).length;e<s-1;e++)(r=It(a[e],a[e+1],t,e,!0))&&(h[n]=h[n]||[],h[n].push(r[0]),r[1]===a[e+1]&&e!==s-2||(h[n].push(r[1]),n++))}},_simplifyPoints:function(){for(var t=this._parts,i=this.options.smoothFactor,e=0,n=t.length;e<n;e++)t[e]=Ct(t[e],i)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},_containsPoint:function(t,i){var e,n,o,s,r,a,h=this._clickTolerance();if(!this._pxBounds||!this._pxBounds.contains(t))return!1;for(e=0,s=this._parts.length;e<s;e++)for(n=0,o=(r=(a=this._parts[e]).length)-1;n<r;o=n++)if((i||0!==n)&&Zt(t,a[o],a[n])<=h)return!0;return!1}});tn._flat=Nt;var en=tn.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");var t,i,e,n,o,s,r,a,h,u=this._rings[0],l=u.length;if(!l)return null;for(s=r=a=0,t=0,i=l-1;t<l;i=t++)e=u[t],n=u[i],o=e.y*n.x-n.y*e.x,r+=(e.x+n.x)*o,a+=(e.y+n.y)*o,s+=3*o;return h=0===s?u[0]:[r/s,a/s],this._map.layerPointToLatLng(h)},_convertLatLngs:function(t){var i=tn.prototype._convertLatLngs.call(this,t),e=i.length;return e>=2&&i[0]instanceof M&&i[0].equals(i[e-1])&&i.pop(),i},_setLatLngs:function(t){tn.prototype._setLatLngs.call(this,t),Dt(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return Dt(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},_clipPoints:function(){var t=this._renderer._bounds,i=this.options.weight,e=new x(i,i);if(t=new P(t.min.subtract(e),t.max.add(e)),this._parts=[],this._pxBounds&&this._pxBounds.intersects(t))if(this.options.noClip)this._parts=this._rings;else for(var n,o=0,s=this._rings.length;o<s;o++)(n=jt(this._rings[o],t,!0)).length&&this._parts.push(n)},_updatePath:function(){this._renderer._updatePoly(this,!0)},_containsPoint:function(t){var i,e,n,o,s,r,a,h,u=!1;if(!this._pxBounds.contains(t))return!1;for(o=0,a=this._parts.length;o<a;o++)for(s=0,r=(h=(i=this._parts[o]).length)-1;s<h;r=s++)e=i[s],n=i[r],e.y>t.y!=n.y>t.y&&t.x<(n.x-e.x)*(t.y-e.y)/(n.y-e.y)+e.x&&(u=!u);return u||tn.prototype._containsPoint.call(this,t,!0)}}),nn=qe.extend({initialize:function(t,i){l(this,i),this._layers={},t&&this.addData(t)},addData:function(t){var i,e,n,o=ei(t)?t:t.features;if(o){for(i=0,e=o.length;i<e;i++)((n=o[i]).geometries||n.geometry||n.features||n.coordinates)&&this.addData(n);return this}var s=this.options;if(s.filter&&!s.filter(t))return this;var r=Wt(t,s);return r?(r.feature=Gt(t),r.defaultOptions=r.options,this.resetStyle(r),s.onEachFeature&&s.onEachFeature(t,r),this.addLayer(r)):this},resetStyle:function(t){return t.options=i({},t.defaultOptions),this._setLayerStyle(t,this.options.style),this},setStyle:function(t){return this.eachLayer(function(i){this._setLayerStyle(i,t)},this)},_setLayerStyle:function(t,i){"function"==typeof i&&(i=i(t.feature)),t.setStyle&&t.setStyle(i)}}),on={toGeoJSON:function(t){return qt(this,{type:"Point",coordinates:Ut(this.getLatLng(),t)})}};Xe.include(on),Qe.include(on),$e.include(on),tn.include({toGeoJSON:function(t){var i=!Dt(this._latlngs),e=Vt(this._latlngs,i?1:0,!1,t);return qt(this,{type:(i?"Multi":"")+"LineString",coordinates:e})}}),en.include({toGeoJSON:function(t){var i=!Dt(this._latlngs),e=i&&!Dt(this._latlngs[0]),n=Vt(this._latlngs,e?2:i?1:0,!0,t);return i||(n=[n]),qt(this,{type:(e?"Multi":"")+"Polygon",coordinates:n})}}),Ve.include({toMultiPoint:function(t){var i=[];return this.eachLayer(function(e){i.push(e.toGeoJSON(t).geometry.coordinates)}),qt(this,{type:"MultiPoint",coordinates:i})},toGeoJSON:function(t){var i=this.feature&&this.feature.geometry&&this.feature.geometry.type;if("MultiPoint"===i)return this.toMultiPoint(t);var e="GeometryCollection"===i,n=[];return this.eachLayer(function(i){if(i.toGeoJSON){var o=i.toGeoJSON(t);if(e)n.push(o.geometry);else{var s=Gt(o);"FeatureCollection"===s.type?n.push.apply(n,s.features):n.push(s)}}}),e?qt(this,{geometries:n,type:"GeometryCollection"}):{type:"FeatureCollection",features:n}}});var sn=Kt,rn=Ue.extend({options:{opacity:1,alt:"",interactive:!1,crossOrigin:!1,errorOverlayUrl:"",zIndex:1,className:""},initialize:function(t,i,e){this._url=t,this._bounds=z(i),l(this,e)},onAdd:function(){this._image||(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(pt(this._image,"leaflet-interactive"),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){ut(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},setOpacity:function(t){return this.options.opacity=t,this._image&&this._updateOpacity(),this},setStyle:function(t){return t.opacity&&this.setOpacity(t.opacity),this},bringToFront:function(){return this._map&&ct(this._image),this},bringToBack:function(){return this._map&&_t(this._image),this},setUrl:function(t){return this._url=t,this._image&&(this._image.src=t),this},setBounds:function(t){return this._bounds=z(t),this._map&&this._reset(),this},getEvents:function(){var t={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},setZIndex:function(t){return this.options.zIndex=t,this._updateZIndex(),this},getBounds:function(){return this._bounds},getElement:function(){return this._image},_initImage:function(){var t="IMG"===this._url.tagName,i=this._image=t?this._url:ht("img");pt(i,"leaflet-image-layer"),this._zoomAnimated&&pt(i,"leaflet-zoom-animated"),this.options.className&&pt(i,this.options.className),i.onselectstart=r,i.onmousemove=r,i.onload=e(this.fire,this,"load"),i.onerror=e(this._overlayOnError,this,"error"),this.options.crossOrigin&&(i.crossOrigin=""),this.options.zIndex&&this._updateZIndex(),t?this._url=i.src:(i.src=this._url,i.alt=this.options.alt)},_animateZoom:function(t){var i=this._map.getZoomScale(t.zoom),e=this._map._latLngBoundsToNewLayerBounds(this._bounds,t.zoom,t.center).min;wt(this._image,e,i)},_reset:function(){var t=this._image,i=new P(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),e=i.getSize();Lt(t,i.min),t.style.width=e.x+"px",t.style.height=e.y+"px"},_updateOpacity:function(){vt(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&void 0!==this.options.zIndex&&null!==this.options.zIndex&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){this.fire("error");var t=this.options.errorOverlayUrl;t&&this._url!==t&&(this._url=t,this._image.src=t)}}),an=rn.extend({options:{autoplay:!0,loop:!0},_initImage:function(){var t="VIDEO"===this._url.tagName,i=this._image=t?this._url:ht("video");if(pt(i,"leaflet-image-layer"),this._zoomAnimated&&pt(i,"leaflet-zoom-animated"),i.onselectstart=r,i.onmousemove=r,i.onloadeddata=e(this.fire,this,"load"),t){for(var n=i.getElementsByTagName("source"),o=[],s=0;s<n.length;s++)o.push(n[s].src);this._url=n.length>0?o:[i.src]}else{ei(this._url)||(this._url=[this._url]),i.autoplay=!!this.options.autoplay,i.loop=!!this.options.loop;for(var a=0;a<this._url.length;a++){var h=ht("source");h.src=this._url[a],i.appendChild(h)}}}}),hn=Ue.extend({options:{offset:[0,7],className:"",pane:"popupPane"},initialize:function(t,i){l(this,t),this._source=i},onAdd:function(t){this._zoomAnimated=t._zoomAnimated,this._container||this._initLayout(),t._fadeAnimated&&vt(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),t._fadeAnimated&&vt(this._container,1),this.bringToFront()},onRemove:function(t){t._fadeAnimated?(vt(this._container,0),this._removeTimeout=setTimeout(e(ut,void 0,this._container),200)):ut(this._container)},getLatLng:function(){return this._latlng},setLatLng:function(t){return this._latlng=C(t),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(t){return this._content=t,this.update(),this},getElement:function(){return this._container},update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},getEvents:function(){var t={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},isOpen:function(){return!!this._map&&this._map.hasLayer(this)},bringToFront:function(){return this._map&&ct(this._container),this},bringToBack:function(){return this._map&&_t(this._container),this},_updateContent:function(){if(this._content){var t=this._contentNode,i="function"==typeof this._content?this._content(this._source||this):this._content;if("string"==typeof i)t.innerHTML=i;else{for(;t.hasChildNodes();)t.removeChild(t.firstChild);t.appendChild(i)}this.fire("contentupdate")}},_updatePosition:function(){if(this._map){var t=this._map.latLngToLayerPoint(this._latlng),i=w(this.options.offset),e=this._getAnchor();this._zoomAnimated?Lt(this._container,t.add(e)):i=i.add(t).add(e);var n=this._containerBottom=-i.y,o=this._containerLeft=-Math.round(this._containerWidth/2)+i.x;this._container.style.bottom=n+"px",this._container.style.left=o+"px"}},_getAnchor:function(){return[0,0]}}),un=hn.extend({options:{maxWidth:300,minWidth:50,maxHeight:null,autoPan:!0,autoPanPaddingTopLeft:null,autoPanPaddingBottomRight:null,autoPanPadding:[5,5],keepInView:!1,closeButton:!0,autoClose:!0,closeOnEscapeKey:!0,className:""},openOn:function(t){return t.openPopup(this),this},onAdd:function(t){hn.prototype.onAdd.call(this,t),t.fire("popupopen",{popup:this}),this._source&&(this._source.fire("popupopen",{popup:this},!0),this._source instanceof Je||this._source.on("preclick",Y))},onRemove:function(t){hn.prototype.onRemove.call(this,t),t.fire("popupclose",{popup:this}),this._source&&(this._source.fire("popupclose",{popup:this},!0),this._source instanceof Je||this._source.off("preclick",Y))},getEvents:function(){var t=hn.prototype.getEvents.call(this);return(void 0!==this.options.closeOnClick?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(t.preclick=this._close),this.options.keepInView&&(t.moveend=this._adjustPan),t},_close:function(){this._map&&this._map.closePopup(this)},_initLayout:function(){var t="leaflet-popup",i=this._container=ht("div",t+" "+(this.options.className||"")+" leaflet-zoom-animated"),e=this._wrapper=ht("div",t+"-content-wrapper",i);if(this._contentNode=ht("div",t+"-content",e),J(e),X(this._contentNode),V(e,"contextmenu",Y),this._tipContainer=ht("div",t+"-tip-container",i),this._tip=ht("div",t+"-tip",this._tipContainer),this.options.closeButton){var n=this._closeButton=ht("a",t+"-close-button",i);n.href="#close",n.innerHTML="&#215;",V(n,"click",this._onCloseButtonClick,this)}},_updateLayout:function(){var t=this._contentNode,i=t.style;i.width="",i.whiteSpace="nowrap";var e=t.offsetWidth;e=Math.min(e,this.options.maxWidth),e=Math.max(e,this.options.minWidth),i.width=e+1+"px",i.whiteSpace="",i.height="";var n=t.offsetHeight,o=this.options.maxHeight;o&&n>o?(i.height=o+"px",pt(t,"leaflet-popup-scrolled")):mt(t,"leaflet-popup-scrolled"),this._containerWidth=this._container.offsetWidth},_animateZoom:function(t){var i=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center),e=this._getAnchor();Lt(this._container,i.add(e))},_adjustPan:function(){if(!(!this.options.autoPan||this._map._panAnim&&this._map._panAnim._inProgress)){var t=this._map,i=parseInt(at(this._container,"marginBottom"),10)||0,e=this._container.offsetHeight+i,n=this._containerWidth,o=new x(this._containerLeft,-e-this._containerBottom);o._add(Pt(this._container));var s=t.layerPointToContainerPoint(o),r=w(this.options.autoPanPadding),a=w(this.options.autoPanPaddingTopLeft||r),h=w(this.options.autoPanPaddingBottomRight||r),u=t.getSize(),l=0,c=0;s.x+n+h.x>u.x&&(l=s.x+n-u.x+h.x),s.x-l-a.x<0&&(l=s.x-a.x),s.y+e+h.y>u.y&&(c=s.y+e-u.y+h.y),s.y-c-a.y<0&&(c=s.y-a.y),(l||c)&&t.fire("autopanstart").panBy([l,c])}},_onCloseButtonClick:function(t){this._close(),Q(t)},_getAnchor:function(){return w(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}});Le.mergeOptions({closePopupOnClick:!0}),Le.include({openPopup:function(t,i,e){return t instanceof un||(t=new un(e).setContent(t)),i&&t.setLatLng(i),this.hasLayer(t)?this:(this._popup&&this._popup.options.autoClose&&this.closePopup(),this._popup=t,this.addLayer(t))},closePopup:function(t){return t&&t!==this._popup||(t=this._popup,this._popup=null),t&&this.removeLayer(t),this}}),Ue.include({bindPopup:function(t,i){return t instanceof un?(l(t,i),this._popup=t,t._source=this):(this._popup&&!i||(this._popup=new un(i,this)),this._popup.setContent(t)),this._popupHandlersAdded||(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,this._popup=null),this},openPopup:function(t,i){if(t instanceof Ue||(i=t,t=this),t instanceof qe)for(var e in this._layers){t=this._layers[e];break}return i||(i=t.getCenter?t.getCenter():t.getLatLng()),this._popup&&this._map&&(this._popup._source=t,this._popup.update(),this._map.openPopup(this._popup,i)),this},closePopup:function(){return this._popup&&this._popup._close(),this},togglePopup:function(t){return this._popup&&(this._popup._map?this.closePopup():this.openPopup(t)),this},isPopupOpen:function(){return!!this._popup&&this._popup.isOpen()},setPopupContent:function(t){return this._popup&&this._popup.setContent(t),this},getPopup:function(){return this._popup},_openPopup:function(t){var i=t.layer||t.target;this._popup&&this._map&&(Q(t),i instanceof Je?this.openPopup(t.layer||t.target,t.latlng):this._map.hasLayer(this._popup)&&this._popup._source===i?this.closePopup():this.openPopup(i,t.latlng))},_movePopup:function(t){this._popup.setLatLng(t.latlng)},_onKeyPress:function(t){13===t.originalEvent.keyCode&&this._openPopup(t)}});var ln=hn.extend({options:{pane:"tooltipPane",offset:[0,0],direction:"auto",permanent:!1,sticky:!1,interactive:!1,opacity:.9},onAdd:function(t){hn.prototype.onAdd.call(this,t),this.setOpacity(this.options.opacity),t.fire("tooltipopen",{tooltip:this}),this._source&&this._source.fire("tooltipopen",{tooltip:this},!0)},onRemove:function(t){hn.prototype.onRemove.call(this,t),t.fire("tooltipclose",{tooltip:this}),this._source&&this._source.fire("tooltipclose",{tooltip:this},!0)},getEvents:function(){var t=hn.prototype.getEvents.call(this);return Vi&&!this.options.permanent&&(t.preclick=this._close),t},_close:function(){this._map&&this._map.closeTooltip(this)},_initLayout:function(){var t="leaflet-tooltip "+(this.options.className||"")+" leaflet-zoom-"+(this._zoomAnimated?"animated":"hide");this._contentNode=this._container=ht("div",t)},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(t){var i=this._map,e=this._container,n=i.latLngToContainerPoint(i.getCenter()),o=i.layerPointToContainerPoint(t),s=this.options.direction,r=e.offsetWidth,a=e.offsetHeight,h=w(this.options.offset),u=this._getAnchor();"top"===s?t=t.add(w(-r/2+h.x,-a+h.y+u.y,!0)):"bottom"===s?t=t.subtract(w(r/2-h.x,-h.y,!0)):"center"===s?t=t.subtract(w(r/2+h.x,a/2-u.y+h.y,!0)):"right"===s||"auto"===s&&o.x<n.x?(s="right",t=t.add(w(h.x+u.x,u.y-a/2+h.y,!0))):(s="left",t=t.subtract(w(r+u.x-h.x,a/2-u.y-h.y,!0))),mt(e,"leaflet-tooltip-right"),mt(e,"leaflet-tooltip-left"),mt(e,"leaflet-tooltip-top"),mt(e,"leaflet-tooltip-bottom"),pt(e,"leaflet-tooltip-"+s),Lt(e,t)},_updatePosition:function(){var t=this._map.latLngToLayerPoint(this._latlng);this._setPosition(t)},setOpacity:function(t){this.options.opacity=t,this._container&&vt(this._container,t)},_animateZoom:function(t){var i=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center);this._setPosition(i)},_getAnchor:function(){return w(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}});Le.include({openTooltip:function(t,i,e){return t instanceof ln||(t=new ln(e).setContent(t)),i&&t.setLatLng(i),this.hasLayer(t)?this:this.addLayer(t)},closeTooltip:function(t){return t&&this.removeLayer(t),this}}),Ue.include({bindTooltip:function(t,i){return t instanceof ln?(l(t,i),this._tooltip=t,t._source=this):(this._tooltip&&!i||(this._tooltip=new ln(i,this)),this._tooltip.setContent(t)),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},unbindTooltip:function(){return this._tooltip&&(this._initTooltipInteractions(!0),this.closeTooltip(),this._tooltip=null),this},_initTooltipInteractions:function(t){if(t||!this._tooltipHandlersAdded){var i=t?"off":"on",e={remove:this.closeTooltip,move:this._moveTooltip};this._tooltip.options.permanent?e.add=this._openTooltip:(e.mouseover=this._openTooltip,e.mouseout=this.closeTooltip,this._tooltip.options.sticky&&(e.mousemove=this._moveTooltip),Vi&&(e.click=this._openTooltip)),this[i](e),this._tooltipHandlersAdded=!t}},openTooltip:function(t,i){if(t instanceof Ue||(i=t,t=this),t instanceof qe)for(var e in this._layers){t=this._layers[e];break}return i||(i=t.getCenter?t.getCenter():t.getLatLng()),this._tooltip&&this._map&&(this._tooltip._source=t,this._tooltip.update(),this._map.openTooltip(this._tooltip,i),this._tooltip.options.interactive&&this._tooltip._container&&(pt(this._tooltip._container,"leaflet-clickable"),this.addInteractiveTarget(this._tooltip._container))),this},closeTooltip:function(){return this._tooltip&&(this._tooltip._close(),this._tooltip.options.interactive&&this._tooltip._container&&(mt(this._tooltip._container,"leaflet-clickable"),this.removeInteractiveTarget(this._tooltip._container))),this},toggleTooltip:function(t){return this._tooltip&&(this._tooltip._map?this.closeTooltip():this.openTooltip(t)),this},isTooltipOpen:function(){return this._tooltip.isOpen()},setTooltipContent:function(t){return this._tooltip&&this._tooltip.setContent(t),this},getTooltip:function(){return this._tooltip},_openTooltip:function(t){var i=t.layer||t.target;this._tooltip&&this._map&&this.openTooltip(i,this._tooltip.options.sticky?t.latlng:void 0)},_moveTooltip:function(t){var i,e,n=t.latlng;this._tooltip.options.sticky&&t.originalEvent&&(i=this._map.mouseEventToContainerPoint(t.originalEvent),e=this._map.containerPointToLayerPoint(i),n=this._map.layerPointToLatLng(e)),this._tooltip.setLatLng(n)}});var cn=Ge.extend({options:{iconSize:[12,12],html:!1,bgPos:null,className:"leaflet-div-icon"},createIcon:function(t){var i=t&&"DIV"===t.tagName?t:document.createElement("div"),e=this.options;if(i.innerHTML=!1!==e.html?e.html:"",e.bgPos){var n=w(e.bgPos);i.style.backgroundPosition=-n.x+"px "+-n.y+"px"}return this._setIconStyles(i,"icon"),i},createShadow:function(){return null}});Ge.Default=Ke;var _n=Ue.extend({options:{tileSize:256,opacity:1,updateWhenIdle:ji,updateWhenZooming:!0,updateInterval:200,zIndex:1,bounds:null,minZoom:0,maxZoom:void 0,maxNativeZoom:void 0,minNativeZoom:void 0,noWrap:!1,pane:"tilePane",className:"",keepBuffer:2},initialize:function(t){l(this,t)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView(),this._update()},beforeAdd:function(t){t._addZoomLimit(this)},onRemove:function(t){this._removeAllTiles(),ut(this._container),t._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},bringToFront:function(){return this._map&&(ct(this._container),this._setAutoZIndex(Math.max)),this},bringToBack:function(){return this._map&&(_t(this._container),this._setAutoZIndex(Math.min)),this},getContainer:function(){return this._container},setOpacity:function(t){return this.options.opacity=t,this._updateOpacity(),this},setZIndex:function(t){return this.options.zIndex=t,this._updateZIndex(),this},isLoading:function(){return this._loading},redraw:function(){return this._map&&(this._removeAllTiles(),this._update()),this},getEvents:function(){var t={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||(this._onMove=o(this._onMoveEnd,this.options.updateInterval,this)),t.move=this._onMove),this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},createTile:function(){return document.createElement("div")},getTileSize:function(){var t=this.options.tileSize;return t instanceof x?t:new x(t,t)},_updateZIndex:function(){this._container&&void 0!==this.options.zIndex&&null!==this.options.zIndex&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(t){for(var i,e=this.getPane().children,n=-t(-1/0,1/0),o=0,s=e.length;o<s;o++)i=e[o].style.zIndex,e[o]!==this._container&&i&&(n=t(n,+i));isFinite(n)&&(this.options.zIndex=n+t(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!Li){vt(this._container,this.options.opacity);var t=+new Date,i=!1,e=!1;for(var n in this._tiles){var o=this._tiles[n];if(o.current&&o.loaded){var s=Math.min(1,(t-o.loaded)/200);vt(o.el,s),s<1?i=!0:(o.active?e=!0:this._onOpaqueTile(o),o.active=!0)}}e&&!this._noPrune&&this._pruneTiles(),i&&(g(this._fadeFrame),this._fadeFrame=f(this._updateOpacity,this))}},_onOpaqueTile:r,_initContainer:function(){this._container||(this._container=ht("div","leaflet-layer "+(this.options.className||"")),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var t=this._tileZoom,i=this.options.maxZoom;if(void 0!==t){for(var e in this._levels)this._levels[e].el.children.length||e===t?(this._levels[e].el.style.zIndex=i-Math.abs(t-e),this._onUpdateLevel(e)):(ut(this._levels[e].el),this._removeTilesAtZoom(e),this._onRemoveLevel(e),delete this._levels[e]);var n=this._levels[t],o=this._map;return n||((n=this._levels[t]={}).el=ht("div","leaflet-tile-container leaflet-zoom-animated",this._container),n.el.style.zIndex=i,n.origin=o.project(o.unproject(o.getPixelOrigin()),t).round(),n.zoom=t,this._setZoomTransform(n,o.getCenter(),o.getZoom()),n.el.offsetWidth,this._onCreateLevel(n)),this._level=n,n}},_onUpdateLevel:r,_onRemoveLevel:r,_onCreateLevel:r,_pruneTiles:function(){if(this._map){var t,i,e=this._map.getZoom();if(e>this.options.maxZoom||e<this.options.minZoom)this._removeAllTiles();else{for(t in this._tiles)(i=this._tiles[t]).retain=i.current;for(t in this._tiles)if((i=this._tiles[t]).current&&!i.active){var n=i.coords;this._retainParent(n.x,n.y,n.z,n.z-5)||this._retainChildren(n.x,n.y,n.z,n.z+2)}for(t in this._tiles)this._tiles[t].retain||this._removeTile(t)}}},_removeTilesAtZoom:function(t){for(var i in this._tiles)this._tiles[i].coords.z===t&&this._removeTile(i)},_removeAllTiles:function(){for(var t in this._tiles)this._removeTile(t)},_invalidateAll:function(){for(var t in this._levels)ut(this._levels[t].el),this._onRemoveLevel(t),delete this._levels[t];this._removeAllTiles(),this._tileZoom=void 0},_retainParent:function(t,i,e,n){var o=Math.floor(t/2),s=Math.floor(i/2),r=e-1,a=new x(+o,+s);a.z=+r;var h=this._tileCoordsToKey(a),u=this._tiles[h];return u&&u.active?(u.retain=!0,!0):(u&&u.loaded&&(u.retain=!0),r>n&&this._retainParent(o,s,r,n))},_retainChildren:function(t,i,e,n){for(var o=2*t;o<2*t+2;o++)for(var s=2*i;s<2*i+2;s++){var r=new x(o,s);r.z=e+1;var a=this._tileCoordsToKey(r),h=this._tiles[a];h&&h.active?h.retain=!0:(h&&h.loaded&&(h.retain=!0),e+1<n&&this._retainChildren(o,s,e+1,n))}},_resetView:function(t){var i=t&&(t.pinch||t.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),i,i)},_animateZoom:function(t){this._setView(t.center,t.zoom,!0,t.noUpdate)},_clampZoom:function(t){var i=this.options;return void 0!==i.minNativeZoom&&t<i.minNativeZoom?i.minNativeZoom:void 0!==i.maxNativeZoom&&i.maxNativeZoom<t?i.maxNativeZoom:t},_setView:function(t,i,e,n){var o=this._clampZoom(Math.round(i));(void 0!==this.options.maxZoom&&o>this.options.maxZoom||void 0!==this.options.minZoom&&o<this.options.minZoom)&&(o=void 0);var s=this.options.updateWhenZooming&&o!==this._tileZoom;n&&!s||(this._tileZoom=o,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),void 0!==o&&this._update(t),e||this._pruneTiles(),this._noPrune=!!e),this._setZoomTransforms(t,i)},_setZoomTransforms:function(t,i){for(var e in this._levels)this._setZoomTransform(this._levels[e],t,i)},_setZoomTransform:function(t,i,e){var n=this._map.getZoomScale(e,t.zoom),o=t.origin.multiplyBy(n).subtract(this._map._getNewPixelOrigin(i,e)).round();Ni?wt(t.el,o,n):Lt(t.el,o)},_resetGrid:function(){var t=this._map,i=t.options.crs,e=this._tileSize=this.getTileSize(),n=this._tileZoom,o=this._map.getPixelWorldBounds(this._tileZoom);o&&(this._globalTileRange=this._pxBoundsToTileRange(o)),this._wrapX=i.wrapLng&&!this.options.noWrap&&[Math.floor(t.project([0,i.wrapLng[0]],n).x/e.x),Math.ceil(t.project([0,i.wrapLng[1]],n).x/e.y)],this._wrapY=i.wrapLat&&!this.options.noWrap&&[Math.floor(t.project([i.wrapLat[0],0],n).y/e.x),Math.ceil(t.project([i.wrapLat[1],0],n).y/e.y)]},_onMoveEnd:function(){this._map&&!this._map._animatingZoom&&this._update()},_getTiledPixelBounds:function(t){var i=this._map,e=i._animatingZoom?Math.max(i._animateToZoom,i.getZoom()):i.getZoom(),n=i.getZoomScale(e,this._tileZoom),o=i.project(t,this._tileZoom).floor(),s=i.getSize().divideBy(2*n);return new P(o.subtract(s),o.add(s))},_update:function(t){var i=this._map;if(i){var e=this._clampZoom(i.getZoom());if(void 0===t&&(t=i.getCenter()),void 0!==this._tileZoom){var n=this._getTiledPixelBounds(t),o=this._pxBoundsToTileRange(n),s=o.getCenter(),r=[],a=this.options.keepBuffer,h=new P(o.getBottomLeft().subtract([a,-a]),o.getTopRight().add([a,-a]));if(!(isFinite(o.min.x)&&isFinite(o.min.y)&&isFinite(o.max.x)&&isFinite(o.max.y)))throw new Error("Attempted to load an infinite number of tiles");for(var u in this._tiles){var l=this._tiles[u].coords;l.z===this._tileZoom&&h.contains(new x(l.x,l.y))||(this._tiles[u].current=!1)}if(Math.abs(e-this._tileZoom)>1)this._setView(t,e);else{for(var c=o.min.y;c<=o.max.y;c++)for(var _=o.min.x;_<=o.max.x;_++){var d=new x(_,c);if(d.z=this._tileZoom,this._isValidTile(d)){var p=this._tiles[this._tileCoordsToKey(d)];p?p.current=!0:r.push(d)}}if(r.sort(function(t,i){return t.distanceTo(s)-i.distanceTo(s)}),0!==r.length){this._loading||(this._loading=!0,this.fire("loading"));var m=document.createDocumentFragment();for(_=0;_<r.length;_++)this._addTile(r[_],m);this._level.el.appendChild(m)}}}}},_isValidTile:function(t){var i=this._map.options.crs;if(!i.infinite){var e=this._globalTileRange;if(!i.wrapLng&&(t.x<e.min.x||t.x>e.max.x)||!i.wrapLat&&(t.y<e.min.y||t.y>e.max.y))return!1}if(!this.options.bounds)return!0;var n=this._tileCoordsToBounds(t);return z(this.options.bounds).overlaps(n)},_keyToBounds:function(t){return this._tileCoordsToBounds(this._keyToTileCoords(t))},_tileCoordsToNwSe:function(t){var i=this._map,e=this.getTileSize(),n=t.scaleBy(e),o=n.add(e);return[i.unproject(n,t.z),i.unproject(o,t.z)]},_tileCoordsToBounds:function(t){var i=this._tileCoordsToNwSe(t),e=new T(i[0],i[1]);return this.options.noWrap||(e=this._map.wrapLatLngBounds(e)),e},_tileCoordsToKey:function(t){return t.x+":"+t.y+":"+t.z},_keyToTileCoords:function(t){var i=t.split(":"),e=new x(+i[0],+i[1]);return e.z=+i[2],e},_removeTile:function(t){var i=this._tiles[t];i&&(Ci||i.el.setAttribute("src",ni),ut(i.el),delete this._tiles[t],this.fire("tileunload",{tile:i.el,coords:this._keyToTileCoords(t)}))},_initTile:function(t){pt(t,"leaflet-tile");var i=this.getTileSize();t.style.width=i.x+"px",t.style.height=i.y+"px",t.onselectstart=r,t.onmousemove=r,Li&&this.options.opacity<1&&vt(t,this.options.opacity),Ti&&!zi&&(t.style.WebkitBackfaceVisibility="hidden")},_addTile:function(t,i){var n=this._getTilePos(t),o=this._tileCoordsToKey(t),s=this.createTile(this._wrapCoords(t),e(this._tileReady,this,t));this._initTile(s),this.createTile.length<2&&f(e(this._tileReady,this,t,null,s)),Lt(s,n),this._tiles[o]={el:s,coords:t,current:!0},i.appendChild(s),this.fire("tileloadstart",{tile:s,coords:t})},_tileReady:function(t,i,n){if(this._map){i&&this.fire("tileerror",{error:i,tile:n,coords:t});var o=this._tileCoordsToKey(t);(n=this._tiles[o])&&(n.loaded=+new Date,this._map._fadeAnimated?(vt(n.el,0),g(this._fadeFrame),this._fadeFrame=f(this._updateOpacity,this)):(n.active=!0,this._pruneTiles()),i||(pt(n.el,"leaflet-tile-loaded"),this.fire("tileload",{tile:n.el,coords:t})),this._noTilesToLoad()&&(this._loading=!1,this.fire("load"),Li||!this._map._fadeAnimated?f(this._pruneTiles,this):setTimeout(e(this._pruneTiles,this),250)))}},_getTilePos:function(t){return t.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(t){var i=new x(this._wrapX?s(t.x,this._wrapX):t.x,this._wrapY?s(t.y,this._wrapY):t.y);return i.z=t.z,i},_pxBoundsToTileRange:function(t){var i=this.getTileSize();return new P(t.min.unscaleBy(i).floor(),t.max.unscaleBy(i).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var t in this._tiles)if(!this._tiles[t].loaded)return!1;return!0}}),dn=_n.extend({options:{minZoom:0,maxZoom:18,subdomains:"abc",errorTileUrl:"",zoomOffset:0,tms:!1,zoomReverse:!1,detectRetina:!1,crossOrigin:!1},initialize:function(t,i){this._url=t,(i=l(this,i)).detectRetina&&Ki&&i.maxZoom>0&&(i.tileSize=Math.floor(i.tileSize/2),i.zoomReverse?(i.zoomOffset--,i.minZoom++):(i.zoomOffset++,i.maxZoom--),i.minZoom=Math.max(0,i.minZoom)),"string"==typeof i.subdomains&&(i.subdomains=i.subdomains.split("")),Ti||this.on("tileunload",this._onTileRemove)},setUrl:function(t,i){return this._url=t,i||this.redraw(),this},createTile:function(t,i){var n=document.createElement("img");return V(n,"load",e(this._tileOnLoad,this,i,n)),V(n,"error",e(this._tileOnError,this,i,n)),this.options.crossOrigin&&(n.crossOrigin=""),n.alt="",n.setAttribute("role","presentation"),n.src=this.getTileUrl(t),n},getTileUrl:function(t){var e={r:Ki?"@2x":"",s:this._getSubdomain(t),x:t.x,y:t.y,z:this._getZoomForUrl()};if(this._map&&!this._map.options.crs.infinite){var n=this._globalTileRange.max.y-t.y;this.options.tms&&(e.y=n),e["-y"]=n}return _(this._url,i(e,this.options))},_tileOnLoad:function(t,i){Li?setTimeout(e(t,this,null,i),0):t(null,i)},_tileOnError:function(t,i,e){var n=this.options.errorTileUrl;n&&i.getAttribute("src")!==n&&(i.src=n),t(e,i)},_onTileRemove:function(t){t.tile.onload=null},_getZoomForUrl:function(){var t=this._tileZoom,i=this.options.maxZoom,e=this.options.zoomReverse,n=this.options.zoomOffset;return e&&(t=i-t),t+n},_getSubdomain:function(t){var i=Math.abs(t.x+t.y)%this.options.subdomains.length;return this.options.subdomains[i]},_abortLoading:function(){var t,i;for(t in this._tiles)this._tiles[t].coords.z!==this._tileZoom&&((i=this._tiles[t].el).onload=r,i.onerror=r,i.complete||(i.src=ni,ut(i),delete this._tiles[t]))}}),pn=dn.extend({defaultWmsParams:{service:"WMS",request:"GetMap",layers:"",styles:"",format:"image/jpeg",transparent:!1,version:"1.1.1"},options:{crs:null,uppercase:!1},initialize:function(t,e){this._url=t;var n=i({},this.defaultWmsParams);for(var o in e)o in this.options||(n[o]=e[o]);var s=(e=l(this,e)).detectRetina&&Ki?2:1,r=this.getTileSize();n.width=r.x*s,n.height=r.y*s,this.wmsParams=n},onAdd:function(t){this._crs=this.options.crs||t.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var i=this._wmsVersion>=1.3?"crs":"srs";this.wmsParams[i]=this._crs.code,dn.prototype.onAdd.call(this,t)},getTileUrl:function(t){var i=this._tileCoordsToNwSe(t),e=this._crs,n=b(e.project(i[0]),e.project(i[1])),o=n.min,s=n.max,r=(this._wmsVersion>=1.3&&this._crs===He?[o.y,o.x,s.y,s.x]:[o.x,o.y,s.x,s.y]).join(","),a=L.TileLayer.prototype.getTileUrl.call(this,t);return a+c(this.wmsParams,a,this.options.uppercase)+(this.options.uppercase?"&BBOX=":"&bbox=")+r},setParams:function(t,e){return i(this.wmsParams,t),e||this.redraw(),this}});dn.WMS=pn,Yt.wms=function(t,i){return new pn(t,i)};var mn=Ue.extend({options:{padding:.1,tolerance:0},initialize:function(t){l(this,t),n(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),this._zoomAnimated&&pt(this._container,"leaflet-zoom-animated")),this.getPane().appendChild(this._container),this._update(),this.on("update",this._updatePaths,this)},onRemove:function(){this.off("update",this._updatePaths,this),this._destroyContainer()},getEvents:function(){var t={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(t.zoomanim=this._onAnimZoom),t},_onAnimZoom:function(t){this._updateTransform(t.center,t.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(t,i){var e=this._map.getZoomScale(i,this._zoom),n=Pt(this._container),o=this._map.getSize().multiplyBy(.5+this.options.padding),s=this._map.project(this._center,i),r=this._map.project(t,i).subtract(s),a=o.multiplyBy(-e).add(n).add(o).subtract(r);Ni?wt(this._container,a,e):Lt(this._container,a)},_reset:function(){this._update(),this._updateTransform(this._center,this._zoom);for(var t in this._layers)this._layers[t]._reset()},_onZoomEnd:function(){for(var t in this._layers)this._layers[t]._project()},_updatePaths:function(){for(var t in this._layers)this._layers[t]._update()},_update:function(){var t=this.options.padding,i=this._map.getSize(),e=this._map.containerPointToLayerPoint(i.multiplyBy(-t)).round();this._bounds=new P(e,e.add(i.multiplyBy(1+2*t)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),fn=mn.extend({getEvents:function(){var t=mn.prototype.getEvents.call(this);return t.viewprereset=this._onViewPreReset,t},_onViewPreReset:function(){this._postponeUpdatePaths=!0},onAdd:function(){mn.prototype.onAdd.call(this),this._draw()},_initContainer:function(){var t=this._container=document.createElement("canvas");V(t,"mousemove",o(this._onMouseMove,32,this),this),V(t,"click dblclick mousedown mouseup contextmenu",this._onClick,this),V(t,"mouseout",this._handleMouseOut,this),this._ctx=t.getContext("2d")},_destroyContainer:function(){delete this._ctx,ut(this._container),q(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){this._redrawBounds=null;for(var t in this._layers)this._layers[t]._update();this._redraw()}},_update:function(){if(!this._map._animatingZoom||!this._bounds){this._drawnLayers={},mn.prototype._update.call(this);var t=this._bounds,i=this._container,e=t.getSize(),n=Ki?2:1;Lt(i,t.min),i.width=n*e.x,i.height=n*e.y,i.style.width=e.x+"px",i.style.height=e.y+"px",Ki&&this._ctx.scale(2,2),this._ctx.translate(-t.min.x,-t.min.y),this.fire("update")}},_reset:function(){mn.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(t){this._updateDashArray(t),this._layers[n(t)]=t;var i=t._order={layer:t,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=i),this._drawLast=i,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(t){this._requestRedraw(t)},_removePath:function(t){var i=t._order,e=i.next,n=i.prev;e?e.prev=n:this._drawLast=n,n?n.next=e:this._drawFirst=e,delete t._order,delete this._layers[L.stamp(t)],this._requestRedraw(t)},_updatePath:function(t){this._extendRedrawBounds(t),t._project(),t._update(),this._requestRedraw(t)},_updateStyle:function(t){this._updateDashArray(t),this._requestRedraw(t)},_updateDashArray:function(t){if(t.options.dashArray){var i,e=t.options.dashArray.split(","),n=[];for(i=0;i<e.length;i++)n.push(Number(e[i]));t.options._dashArray=n}},_requestRedraw:function(t){this._map&&(this._extendRedrawBounds(t),this._redrawRequest=this._redrawRequest||f(this._redraw,this))},_extendRedrawBounds:function(t){if(t._pxBounds){var i=(t.options.weight||0)+1;this._redrawBounds=this._redrawBounds||new P,this._redrawBounds.extend(t._pxBounds.min.subtract([i,i])),this._redrawBounds.extend(t._pxBounds.max.add([i,i]))}},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var t=this._redrawBounds;if(t){var i=t.getSize();this._ctx.clearRect(t.min.x,t.min.y,i.x,i.y)}else this._ctx.clearRect(0,0,this._container.width,this._container.height)},_draw:function(){var t,i=this._redrawBounds;if(this._ctx.save(),i){var e=i.getSize();this._ctx.beginPath(),this._ctx.rect(i.min.x,i.min.y,e.x,e.y),this._ctx.clip()}this._drawing=!0;for(var n=this._drawFirst;n;n=n.next)t=n.layer,(!i||t._pxBounds&&t._pxBounds.intersects(i))&&t._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(t,i){if(this._drawing){var e,n,o,s,r=t._parts,a=r.length,h=this._ctx;if(a){for(this._drawnLayers[t._leaflet_id]=t,h.beginPath(),e=0;e<a;e++){for(n=0,o=r[e].length;n<o;n++)s=r[e][n],h[n?"lineTo":"moveTo"](s.x,s.y);i&&h.closePath()}this._fillStroke(h,t)}}},_updateCircle:function(t){if(this._drawing&&!t._empty()){var i=t._point,e=this._ctx,n=Math.max(Math.round(t._radius),1),o=(Math.max(Math.round(t._radiusY),1)||n)/n;this._drawnLayers[t._leaflet_id]=t,1!==o&&(e.save(),e.scale(1,o)),e.beginPath(),e.arc(i.x,i.y/o,n,0,2*Math.PI,!1),1!==o&&e.restore(),this._fillStroke(e,t)}},_fillStroke:function(t,i){var e=i.options;e.fill&&(t.globalAlpha=e.fillOpacity,t.fillStyle=e.fillColor||e.color,t.fill(e.fillRule||"evenodd")),e.stroke&&0!==e.weight&&(t.setLineDash&&t.setLineDash(i.options&&i.options._dashArray||[]),t.globalAlpha=e.opacity,t.lineWidth=e.weight,t.strokeStyle=e.color,t.lineCap=e.lineCap,t.lineJoin=e.lineJoin,t.stroke())},_onClick:function(t){for(var i,e,n=this._map.mouseEventToLayerPoint(t),o=this._drawFirst;o;o=o.next)(i=o.layer).options.interactive&&i._containsPoint(n)&&!this._map._draggableMoved(i)&&(e=i);e&&(et(t),this._fireEvent([e],t))},_onMouseMove:function(t){if(this._map&&!this._map.dragging.moving()&&!this._map._animatingZoom){var i=this._map.mouseEventToLayerPoint(t);this._handleMouseHover(t,i)}},_handleMouseOut:function(t){var i=this._hoveredLayer;i&&(mt(this._container,"leaflet-interactive"),this._fireEvent([i],t,"mouseout"),this._hoveredLayer=null)},_handleMouseHover:function(t,i){for(var e,n,o=this._drawFirst;o;o=o.next)(e=o.layer).options.interactive&&e._containsPoint(i)&&(n=e);n!==this._hoveredLayer&&(this._handleMouseOut(t),n&&(pt(this._container,"leaflet-interactive"),this._fireEvent([n],t,"mouseover"),this._hoveredLayer=n)),this._hoveredLayer&&this._fireEvent([this._hoveredLayer],t)},_fireEvent:function(t,i,e){this._map._fireDOMEvent(i,e||i.type,t)},_bringToFront:function(t){var i=t._order,e=i.next,n=i.prev;e&&(e.prev=n,n?n.next=e:e&&(this._drawFirst=e),i.prev=this._drawLast,this._drawLast.next=i,i.next=null,this._drawLast=i,this._requestRedraw(t))},_bringToBack:function(t){var i=t._order,e=i.next,n=i.prev;n&&(n.next=e,e?e.prev=n:n&&(this._drawLast=n),i.prev=null,i.next=this._drawFirst,this._drawFirst.prev=i,this._drawFirst=i,this._requestRedraw(t))}}),gn=function(){try{return document.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(t){return document.createElement("<lvml:"+t+' class="lvml">')}}catch(t){return function(t){return document.createElement("<"+t+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}}}(),vn={_initContainer:function(){this._container=ht("div","leaflet-vml-container")},_update:function(){this._map._animatingZoom||(mn.prototype._update.call(this),this.fire("update"))},_initPath:function(t){var i=t._container=gn("shape");pt(i,"leaflet-vml-shape "+(this.options.className||"")),i.coordsize="1 1",t._path=gn("path"),i.appendChild(t._path),this._updateStyle(t),this._layers[n(t)]=t},_addPath:function(t){var i=t._container;this._container.appendChild(i),t.options.interactive&&t.addInteractiveTarget(i)},_removePath:function(t){var i=t._container;ut(i),t.removeInteractiveTarget(i),delete this._layers[n(t)]},_updateStyle:function(t){var i=t._stroke,e=t._fill,n=t.options,o=t._container;o.stroked=!!n.stroke,o.filled=!!n.fill,n.stroke?(i||(i=t._stroke=gn("stroke")),o.appendChild(i),i.weight=n.weight+"px",i.color=n.color,i.opacity=n.opacity,n.dashArray?i.dashStyle=ei(n.dashArray)?n.dashArray.join(" "):n.dashArray.replace(/( *, *)/g," "):i.dashStyle="",i.endcap=n.lineCap.replace("butt","flat"),i.joinstyle=n.lineJoin):i&&(o.removeChild(i),t._stroke=null),n.fill?(e||(e=t._fill=gn("fill")),o.appendChild(e),e.color=n.fillColor||n.color,e.opacity=n.fillOpacity):e&&(o.removeChild(e),t._fill=null)},_updateCircle:function(t){var i=t._point.round(),e=Math.round(t._radius),n=Math.round(t._radiusY||e);this._setPath(t,t._empty()?"M0 0":"AL "+i.x+","+i.y+" "+e+","+n+" 0,23592600")},_setPath:function(t,i){t._path.v=i},_bringToFront:function(t){ct(t._container)},_bringToBack:function(t){_t(t._container)}},yn=Ji?gn:E,xn=mn.extend({getEvents:function(){var t=mn.prototype.getEvents.call(this);return t.zoomstart=this._onZoomStart,t},_initContainer:function(){this._container=yn("svg"),this._container.setAttribute("pointer-events","none"),this._rootGroup=yn("g"),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){ut(this._container),q(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},_onZoomStart:function(){this._update()},_update:function(){if(!this._map._animatingZoom||!this._bounds){mn.prototype._update.call(this);var t=this._bounds,i=t.getSize(),e=this._container;this._svgSize&&this._svgSize.equals(i)||(this._svgSize=i,e.setAttribute("width",i.x),e.setAttribute("height",i.y)),Lt(e,t.min),e.setAttribute("viewBox",[t.min.x,t.min.y,i.x,i.y].join(" ")),this.fire("update")}},_initPath:function(t){var i=t._path=yn("path");t.options.className&&pt(i,t.options.className),t.options.interactive&&pt(i,"leaflet-interactive"),this._updateStyle(t),this._layers[n(t)]=t},_addPath:function(t){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(t._path),t.addInteractiveTarget(t._path)},_removePath:function(t){ut(t._path),t.removeInteractiveTarget(t._path),delete this._layers[n(t)]},_updatePath:function(t){t._project(),t._update()},_updateStyle:function(t){var i=t._path,e=t.options;i&&(e.stroke?(i.setAttribute("stroke",e.color),i.setAttribute("stroke-opacity",e.opacity),i.setAttribute("stroke-width",e.weight),i.setAttribute("stroke-linecap",e.lineCap),i.setAttribute("stroke-linejoin",e.lineJoin),e.dashArray?i.setAttribute("stroke-dasharray",e.dashArray):i.removeAttribute("stroke-dasharray"),e.dashOffset?i.setAttribute("stroke-dashoffset",e.dashOffset):i.removeAttribute("stroke-dashoffset")):i.setAttribute("stroke","none"),e.fill?(i.setAttribute("fill",e.fillColor||e.color),i.setAttribute("fill-opacity",e.fillOpacity),i.setAttribute("fill-rule",e.fillRule||"evenodd")):i.setAttribute("fill","none"))},_updatePoly:function(t,i){this._setPath(t,k(t._parts,i))},_updateCircle:function(t){var i=t._point,e=Math.max(Math.round(t._radius),1),n="a"+e+","+(Math.max(Math.round(t._radiusY),1)||e)+" 0 1,0 ",o=t._empty()?"M0 0":"M"+(i.x-e)+","+i.y+n+2*e+",0 "+n+2*-e+",0 ";this._setPath(t,o)},_setPath:function(t,i){t._path.setAttribute("d",i)},_bringToFront:function(t){ct(t._path)},_bringToBack:function(t){_t(t._path)}});Ji&&xn.include(vn),Le.include({getRenderer:function(t){var i=t.options.renderer||this._getPaneRenderer(t.options.pane)||this.options.renderer||this._renderer;return i||(i=this._renderer=this.options.preferCanvas&&Xt()||Jt()),this.hasLayer(i)||this.addLayer(i),i},_getPaneRenderer:function(t){if("overlayPane"===t||void 0===t)return!1;var i=this._paneRenderers[t];return void 0===i&&(i=xn&&Jt({pane:t})||fn&&Xt({pane:t}),this._paneRenderers[t]=i),i}});var wn=en.extend({initialize:function(t,i){en.prototype.initialize.call(this,this._boundsToLatLngs(t),i)},setBounds:function(t){return this.setLatLngs(this._boundsToLatLngs(t))},_boundsToLatLngs:function(t){return t=z(t),[t.getSouthWest(),t.getNorthWest(),t.getNorthEast(),t.getSouthEast()]}});xn.create=yn,xn.pointsToPath=k,nn.geometryToLayer=Wt,nn.coordsToLatLng=Ht,nn.coordsToLatLngs=Ft,nn.latLngToCoords=Ut,nn.latLngsToCoords=Vt,nn.getFeature=qt,nn.asFeature=Gt,Le.mergeOptions({boxZoom:!0});var Ln=Ze.extend({initialize:function(t){this._map=t,this._container=t._container,this._pane=t._panes.overlayPane,this._resetStateTimeout=0,t.on("unload",this._destroy,this)},addHooks:function(){V(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){q(this._container,"mousedown",this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){ut(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){0!==this._resetStateTimeout&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(t){if(!t.shiftKey||1!==t.which&&1!==t.button)return!1;this._clearDeferredResetState(),this._resetState(),mi(),bt(),this._startPoint=this._map.mouseEventToContainerPoint(t),V(document,{contextmenu:Q,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseMove:function(t){this._moved||(this._moved=!0,this._box=ht("div","leaflet-zoom-box",this._container),pt(this._container,"leaflet-crosshair"),this._map.fire("boxzoomstart")),this._point=this._map.mouseEventToContainerPoint(t);var i=new P(this._point,this._startPoint),e=i.getSize();Lt(this._box,i.min),this._box.style.width=e.x+"px",this._box.style.height=e.y+"px"},_finish:function(){this._moved&&(ut(this._box),mt(this._container,"leaflet-crosshair")),fi(),Tt(),q(document,{contextmenu:Q,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(t){if((1===t.which||1===t.button)&&(this._finish(),this._moved)){this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(e(this._resetState,this),0);var i=new T(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));this._map.fitBounds(i).fire("boxzoomend",{boxZoomBounds:i})}},_onKeyDown:function(t){27===t.keyCode&&this._finish()}});Le.addInitHook("addHandler","boxZoom",Ln),Le.mergeOptions({doubleClickZoom:!0});var Pn=Ze.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(t){var i=this._map,e=i.getZoom(),n=i.options.zoomDelta,o=t.originalEvent.shiftKey?e-n:e+n;"center"===i.options.doubleClickZoom?i.setZoom(o):i.setZoomAround(t.containerPoint,o)}});Le.addInitHook("addHandler","doubleClickZoom",Pn),Le.mergeOptions({dragging:!0,inertia:!zi,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,easeLinearity:.2,worldCopyJump:!1,maxBoundsViscosity:0});var bn=Ze.extend({addHooks:function(){if(!this._draggable){var t=this._map;this._draggable=new Be(t._mapPane,t._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on("predrag",this._onPreDragLimit,this),t.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDragWrap,this),t.on("zoomend",this._onZoomEnd,this),t.whenReady(this._onZoomEnd,this))}pt(this._map._container,"leaflet-grab leaflet-touch-drag"),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){mt(this._map._container,"leaflet-grab"),mt(this._map._container,"leaflet-touch-drag"),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var t=this._map;if(t._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity){var i=z(this._map.options.maxBounds);this._offsetLimit=b(this._map.latLngToContainerPoint(i.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(i.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))}else this._offsetLimit=null;t.fire("movestart").fire("dragstart"),t.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(t){if(this._map.options.inertia){var i=this._lastTime=+new Date,e=this._lastPos=this._draggable._absPos||this._draggable._newPos;this._positions.push(e),this._times.push(i),this._prunePositions(i)}this._map.fire("move",t).fire("drag",t)},_prunePositions:function(t){for(;this._positions.length>1&&t-this._times[0]>50;)this._positions.shift(),this._times.shift()},_onZoomEnd:function(){var t=this._map.getSize().divideBy(2),i=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=i.subtract(t).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(t,i){return t-(t-i)*this._viscosity},_onPreDragLimit:function(){if(this._viscosity&&this._offsetLimit){var t=this._draggable._newPos.subtract(this._draggable._startPos),i=this._offsetLimit;t.x<i.min.x&&(t.x=this._viscousLimit(t.x,i.min.x)),t.y<i.min.y&&(t.y=this._viscousLimit(t.y,i.min.y)),t.x>i.max.x&&(t.x=this._viscousLimit(t.x,i.max.x)),t.y>i.max.y&&(t.y=this._viscousLimit(t.y,i.max.y)),this._draggable._newPos=this._draggable._startPos.add(t)}},_onPreDragWrap:function(){var t=this._worldWidth,i=Math.round(t/2),e=this._initialWorldOffset,n=this._draggable._newPos.x,o=(n-i+e)%t+i-e,s=(n+i+e)%t-i-e,r=Math.abs(o+e)<Math.abs(s+e)?o:s;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=r},_onDragEnd:function(t){var i=this._map,e=i.options,n=!e.inertia||this._times.length<2;if(i.fire("dragend",t),n)i.fire("moveend");else{this._prunePositions(+new Date);var o=this._lastPos.subtract(this._positions[0]),s=(this._lastTime-this._times[0])/1e3,r=e.easeLinearity,a=o.multiplyBy(r/s),h=a.distanceTo([0,0]),u=Math.min(e.inertiaMaxSpeed,h),l=a.multiplyBy(u/h),c=u/(e.inertiaDeceleration*r),_=l.multiplyBy(-c/2).round();_.x||_.y?(_=i._limitOffset(_,i.options.maxBounds),f(function(){i.panBy(_,{duration:c,easeLinearity:r,noMoveStart:!0,animate:!0})})):i.fire("moveend")}}});Le.addInitHook("addHandler","dragging",bn),Le.mergeOptions({keyboard:!0,keyboardPanDelta:80});var Tn=Ze.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(t){this._map=t,this._setPanDelta(t.options.keyboardPanDelta),this._setZoomDelta(t.options.zoomDelta)},addHooks:function(){var t=this._map._container;t.tabIndex<=0&&(t.tabIndex="0"),V(t,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),q(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){if(!this._focused){var t=document.body,i=document.documentElement,e=t.scrollTop||i.scrollTop,n=t.scrollLeft||i.scrollLeft;this._map._container.focus(),window.scrollTo(n,e)}},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanDelta:function(t){var i,e,n=this._panKeys={},o=this.keyCodes;for(i=0,e=o.left.length;i<e;i++)n[o.left[i]]=[-1*t,0];for(i=0,e=o.right.length;i<e;i++)n[o.right[i]]=[t,0];for(i=0,e=o.down.length;i<e;i++)n[o.down[i]]=[0,t];for(i=0,e=o.up.length;i<e;i++)n[o.up[i]]=[0,-1*t]},_setZoomDelta:function(t){var i,e,n=this._zoomKeys={},o=this.keyCodes;for(i=0,e=o.zoomIn.length;i<e;i++)n[o.zoomIn[i]]=t;for(i=0,e=o.zoomOut.length;i<e;i++)n[o.zoomOut[i]]=-t},_addHooks:function(){V(document,"keydown",this._onKeyDown,this)},_removeHooks:function(){q(document,"keydown",this._onKeyDown,this)},_onKeyDown:function(t){if(!(t.altKey||t.ctrlKey||t.metaKey)){var i,e=t.keyCode,n=this._map;if(e in this._panKeys){if(n._panAnim&&n._panAnim._inProgress)return;i=this._panKeys[e],t.shiftKey&&(i=w(i).multiplyBy(3)),n.panBy(i),n.options.maxBounds&&n.panInsideBounds(n.options.maxBounds)}else if(e in this._zoomKeys)n.setZoom(n.getZoom()+(t.shiftKey?3:1)*this._zoomKeys[e]);else{if(27!==e||!n._popup||!n._popup.options.closeOnEscapeKey)return;n.closePopup()}Q(t)}}});Le.addInitHook("addHandler","keyboard",Tn),Le.mergeOptions({scrollWheelZoom:!0,wheelDebounceTime:40,wheelPxPerZoomLevel:60});var zn=Ze.extend({addHooks:function(){V(this._map._container,"mousewheel",this._onWheelScroll,this),this._delta=0},removeHooks:function(){q(this._map._container,"mousewheel",this._onWheelScroll,this)},_onWheelScroll:function(t){var i=it(t),n=this._map.options.wheelDebounceTime;this._delta+=i,this._lastMousePos=this._map.mouseEventToContainerPoint(t),this._startTime||(this._startTime=+new Date);var o=Math.max(n-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(e(this._performZoom,this),o),Q(t)},_performZoom:function(){var t=this._map,i=t.getZoom(),e=this._map.options.zoomSnap||0;t._stop();var n=this._delta/(4*this._map.options.wheelPxPerZoomLevel),o=4*Math.log(2/(1+Math.exp(-Math.abs(n))))/Math.LN2,s=e?Math.ceil(o/e)*e:o,r=t._limitZoom(i+(this._delta>0?s:-s))-i;this._delta=0,this._startTime=null,r&&("center"===t.options.scrollWheelZoom?t.setZoom(i+r):t.setZoomAround(this._lastMousePos,i+r))}});Le.addInitHook("addHandler","scrollWheelZoom",zn),Le.mergeOptions({tap:!0,tapTolerance:15});var Mn=Ze.extend({addHooks:function(){V(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){q(this._map._container,"touchstart",this._onDown,this)},_onDown:function(t){if(t.touches){if($(t),this._fireClick=!0,t.touches.length>1)return this._fireClick=!1,void clearTimeout(this._holdTimeout);var i=t.touches[0],n=i.target;this._startPos=this._newPos=new x(i.clientX,i.clientY),n.tagName&&"a"===n.tagName.toLowerCase()&&pt(n,"leaflet-active"),this._holdTimeout=setTimeout(e(function(){this._isTapValid()&&(this._fireClick=!1,this._onUp(),this._simulateEvent("contextmenu",i))},this),1e3),this._simulateEvent("mousedown",i),V(document,{touchmove:this._onMove,touchend:this._onUp},this)}},_onUp:function(t){if(clearTimeout(this._holdTimeout),q(document,{touchmove:this._onMove,touchend:this._onUp},this),this._fireClick&&t&&t.changedTouches){var i=t.changedTouches[0],e=i.target;e&&e.tagName&&"a"===e.tagName.toLowerCase()&&mt(e,"leaflet-active"),this._simulateEvent("mouseup",i),this._isTapValid()&&this._simulateEvent("click",i)}},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_onMove:function(t){var i=t.touches[0];this._newPos=new x(i.clientX,i.clientY),this._simulateEvent("mousemove",i)},_simulateEvent:function(t,i){var e=document.createEvent("MouseEvents");e._simulated=!0,i.target._simulatedClick=!0,e.initMouseEvent(t,!0,!0,window,1,i.screenX,i.screenY,i.clientX,i.clientY,!1,!1,!1,!1,0,null),i.target.dispatchEvent(e)}});Vi&&!Ui&&Le.addInitHook("addHandler","tap",Mn),Le.mergeOptions({touchZoom:Vi&&!zi,bounceAtZoomLimits:!0});var Cn=Ze.extend({addHooks:function(){pt(this._map._container,"leaflet-touch-zoom"),V(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){mt(this._map._container,"leaflet-touch-zoom"),q(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(t){var i=this._map;if(t.touches&&2===t.touches.length&&!i._animatingZoom&&!this._zooming){var e=i.mouseEventToContainerPoint(t.touches[0]),n=i.mouseEventToContainerPoint(t.touches[1]);this._centerPoint=i.getSize()._divideBy(2),this._startLatLng=i.containerPointToLatLng(this._centerPoint),"center"!==i.options.touchZoom&&(this._pinchStartLatLng=i.containerPointToLatLng(e.add(n)._divideBy(2))),this._startDist=e.distanceTo(n),this._startZoom=i.getZoom(),this._moved=!1,this._zooming=!0,i._stop(),V(document,"touchmove",this._onTouchMove,this),V(document,"touchend",this._onTouchEnd,this),$(t)}},_onTouchMove:function(t){if(t.touches&&2===t.touches.length&&this._zooming){var i=this._map,n=i.mouseEventToContainerPoint(t.touches[0]),o=i.mouseEventToContainerPoint(t.touches[1]),s=n.distanceTo(o)/this._startDist;if(this._zoom=i.getScaleZoom(s,this._startZoom),!i.options.bounceAtZoomLimits&&(this._zoom<i.getMinZoom()&&s<1||this._zoom>i.getMaxZoom()&&s>1)&&(this._zoom=i._limitZoom(this._zoom)),"center"===i.options.touchZoom){if(this._center=this._startLatLng,1===s)return}else{var r=n._add(o)._divideBy(2)._subtract(this._centerPoint);if(1===s&&0===r.x&&0===r.y)return;this._center=i.unproject(i.project(this._pinchStartLatLng,this._zoom).subtract(r),this._zoom)}this._moved||(i._moveStart(!0,!1),this._moved=!0),g(this._animRequest);var a=e(i._move,i,this._center,this._zoom,{pinch:!0,round:!1});this._animRequest=f(a,this,!0),$(t)}},_onTouchEnd:function(){this._moved&&this._zooming?(this._zooming=!1,g(this._animRequest),q(document,"touchmove",this._onTouchMove),q(document,"touchend",this._onTouchEnd),this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom))):this._zooming=!1}});Le.addInitHook("addHandler","touchZoom",Cn),Le.BoxZoom=Ln,Le.DoubleClickZoom=Pn,Le.Drag=bn,Le.Keyboard=Tn,Le.ScrollWheelZoom=zn,Le.Tap=Mn,Le.TouchZoom=Cn;var Zn=window.L;window.L=t,Object.freeze=$t,t.version="1.3.1",t.noConflict=function(){return window.L=Zn,this},t.Control=Pe,t.control=be,t.Browser=$i,t.Evented=ui,t.Mixin=Ee,t.Util=ai,t.Class=v,t.Handler=Ze,t.extend=i,t.bind=e,t.stamp=n,t.setOptions=l,t.DomEvent=de,t.DomUtil=xe,t.PosAnimation=we,t.Draggable=Be,t.LineUtil=Oe,t.PolyUtil=Re,t.Point=x,t.point=w,t.Bounds=P,t.bounds=b,t.Transformation=Z,t.transformation=S,t.Projection=je,t.LatLng=M,t.latLng=C,t.LatLngBounds=T,t.latLngBounds=z,t.CRS=ci,t.GeoJSON=nn,t.geoJSON=Kt,t.geoJson=sn,t.Layer=Ue,t.LayerGroup=Ve,t.layerGroup=function(t,i){return new Ve(t,i)},t.FeatureGroup=qe,t.featureGroup=function(t){return new qe(t)},t.ImageOverlay=rn,t.imageOverlay=function(t,i,e){return new rn(t,i,e)},t.VideoOverlay=an,t.videoOverlay=function(t,i,e){return new an(t,i,e)},t.DivOverlay=hn,t.Popup=un,t.popup=function(t,i){return new un(t,i)},t.Tooltip=ln,t.tooltip=function(t,i){return new ln(t,i)},t.Icon=Ge,t.icon=function(t){return new Ge(t)},t.DivIcon=cn,t.divIcon=function(t){return new cn(t)},t.Marker=Xe,t.marker=function(t,i){return new Xe(t,i)},t.TileLayer=dn,t.tileLayer=Yt,t.GridLayer=_n,t.gridLayer=function(t){return new _n(t)},t.SVG=xn,t.svg=Jt,t.Renderer=mn,t.Canvas=fn,t.canvas=Xt,t.Path=Je,t.CircleMarker=$e,t.circleMarker=function(t,i){return new $e(t,i)},t.Circle=Qe,t.circle=function(t,i,e){return new Qe(t,i,e)},t.Polyline=tn,t.polyline=function(t,i){return new tn(t,i)},t.Polygon=en,t.polygon=function(t,i){return new en(t,i)},t.Rectangle=wn,t.rectangle=function(t,i){return new wn(t,i)},t.Map=Le,t.map=function(t,i){return new Le(t,i)}});
;/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){"use strict";var n=[],r=e.document,i=Object.getPrototypeOf,o=n.slice,a=n.concat,s=n.push,u=n.indexOf,l={},c=l.toString,f=l.hasOwnProperty,p=f.toString,d=p.call(Object),h={},g=function e(t){return"function"==typeof t&&"number"!=typeof t.nodeType},y=function e(t){return null!=t&&t===t.window},v={type:!0,src:!0,noModule:!0};function m(e,t,n){var i,o=(t=t||r).createElement("script");if(o.text=e,n)for(i in v)n[i]&&(o[i]=n[i]);t.head.appendChild(o).parentNode.removeChild(o)}function x(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[c.call(e)]||"object":typeof e}var b="3.3.1",w=function(e,t){return new w.fn.init(e,t)},T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;w.fn=w.prototype={jquery:"3.3.1",constructor:w,length:0,toArray:function(){return o.call(this)},get:function(e){return null==e?o.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=w.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return w.each(this,e)},map:function(e){return this.pushStack(w.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(o.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:s,sort:n.sort,splice:n.splice},w.extend=w.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||g(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)n=a[t],a!==(r=e[t])&&(l&&r&&(w.isPlainObject(r)||(i=Array.isArray(r)))?(i?(i=!1,o=n&&Array.isArray(n)?n:[]):o=n&&w.isPlainObject(n)?n:{},a[t]=w.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},w.extend({expando:"jQuery"+("3.3.1"+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==c.call(e))&&(!(t=i(e))||"function"==typeof(n=f.call(t,"constructor")&&t.constructor)&&p.call(n)===d)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e){m(e)},each:function(e,t){var n,r=0;if(C(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(T,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(C(Object(e))?w.merge(n,"string"==typeof e?[e]:e):s.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:u.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r,i=[],o=0,a=e.length,s=!n;o<a;o++)(r=!t(e[o],o))!==s&&i.push(e[o]);return i},map:function(e,t,n){var r,i,o=0,s=[];if(C(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&s.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&s.push(i);return a.apply([],s)},guid:1,support:h}),"function"==typeof Symbol&&(w.fn[Symbol.iterator]=n[Symbol.iterator]),w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function C(e){var t=!!e&&"length"in e&&e.length,n=x(e);return!g(e)&&!y(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}var E=function(e){var t,n,r,i,o,a,s,u,l,c,f,p,d,h,g,y,v,m,x,b="sizzle"+1*new Date,w=e.document,T=0,C=0,E=ae(),k=ae(),S=ae(),D=function(e,t){return e===t&&(f=!0),0},N={}.hasOwnProperty,A=[],j=A.pop,q=A.push,L=A.push,H=A.slice,O=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},P="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",I="\\["+M+"*("+R+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+R+"))|)"+M+"*\\]",W=":("+R+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+I+")*)|.*)\\)|)",$=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),F=new RegExp("^"+M+"*,"+M+"*"),_=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),z=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),X=new RegExp(W),U=new RegExp("^"+R+"$"),V={ID:new RegExp("^#("+R+")"),CLASS:new RegExp("^\\.("+R+")"),TAG:new RegExp("^("+R+"|[*])"),ATTR:new RegExp("^"+I),PSEUDO:new RegExp("^"+W),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+P+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},G=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Q=/^[^{]+\{\s*\[native \w/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,K=/[+~]/,Z=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ee=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},te=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ne=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},re=function(){p()},ie=me(function(e){return!0===e.disabled&&("form"in e||"label"in e)},{dir:"parentNode",next:"legend"});try{L.apply(A=H.call(w.childNodes),w.childNodes),A[w.childNodes.length].nodeType}catch(e){L={apply:A.length?function(e,t){q.apply(e,H.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function oe(e,t,r,i){var o,s,l,c,f,h,v,m=t&&t.ownerDocument,T=t?t.nodeType:9;if(r=r||[],"string"!=typeof e||!e||1!==T&&9!==T&&11!==T)return r;if(!i&&((t?t.ownerDocument||t:w)!==d&&p(t),t=t||d,g)){if(11!==T&&(f=J.exec(e)))if(o=f[1]){if(9===T){if(!(l=t.getElementById(o)))return r;if(l.id===o)return r.push(l),r}else if(m&&(l=m.getElementById(o))&&x(t,l)&&l.id===o)return r.push(l),r}else{if(f[2])return L.apply(r,t.getElementsByTagName(e)),r;if((o=f[3])&&n.getElementsByClassName&&t.getElementsByClassName)return L.apply(r,t.getElementsByClassName(o)),r}if(n.qsa&&!S[e+" "]&&(!y||!y.test(e))){if(1!==T)m=t,v=e;else if("object"!==t.nodeName.toLowerCase()){(c=t.getAttribute("id"))?c=c.replace(te,ne):t.setAttribute("id",c=b),s=(h=a(e)).length;while(s--)h[s]="#"+c+" "+ve(h[s]);v=h.join(","),m=K.test(e)&&ge(t.parentNode)||t}if(v)try{return L.apply(r,m.querySelectorAll(v)),r}catch(e){}finally{c===b&&t.removeAttribute("id")}}}return u(e.replace(B,"$1"),t,r,i)}function ae(){var e=[];function t(n,i){return e.push(n+" ")>r.cacheLength&&delete t[e.shift()],t[n+" "]=i}return t}function se(e){return e[b]=!0,e}function ue(e){var t=d.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function le(e,t){var n=e.split("|"),i=n.length;while(i--)r.attrHandle[n[i]]=t}function ce(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function fe(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}function pe(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function de(e){return function(t){return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&ie(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}function he(e){return se(function(t){return t=+t,se(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function ge(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}n=oe.support={},o=oe.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},p=oe.setDocument=function(e){var t,i,a=e?e.ownerDocument||e:w;return a!==d&&9===a.nodeType&&a.documentElement?(d=a,h=d.documentElement,g=!o(d),w!==d&&(i=d.defaultView)&&i.top!==i&&(i.addEventListener?i.addEventListener("unload",re,!1):i.attachEvent&&i.attachEvent("onunload",re)),n.attributes=ue(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=ue(function(e){return e.appendChild(d.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=Q.test(d.getElementsByClassName),n.getById=ue(function(e){return h.appendChild(e).id=b,!d.getElementsByName||!d.getElementsByName(b).length}),n.getById?(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){return e.getAttribute("id")===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n=t.getElementById(e);return n?[n]:[]}}):(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),r.find.TAG=n.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):n.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},r.find.CLASS=n.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&g)return t.getElementsByClassName(e)},v=[],y=[],(n.qsa=Q.test(d.querySelectorAll))&&(ue(function(e){h.appendChild(e).innerHTML="<a id='"+b+"'></a><select id='"+b+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&y.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||y.push("\\["+M+"*(?:value|"+P+")"),e.querySelectorAll("[id~="+b+"-]").length||y.push("~="),e.querySelectorAll(":checked").length||y.push(":checked"),e.querySelectorAll("a#"+b+"+*").length||y.push(".#.+[+~]")}),ue(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=d.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&y.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&y.push(":enabled",":disabled"),h.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&y.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),y.push(",.*:")})),(n.matchesSelector=Q.test(m=h.matches||h.webkitMatchesSelector||h.mozMatchesSelector||h.oMatchesSelector||h.msMatchesSelector))&&ue(function(e){n.disconnectedMatch=m.call(e,"*"),m.call(e,"[s!='']:x"),v.push("!=",W)}),y=y.length&&new RegExp(y.join("|")),v=v.length&&new RegExp(v.join("|")),t=Q.test(h.compareDocumentPosition),x=t||Q.test(h.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return f=!0,0;var r=!e.compareDocumentPosition-!t.compareDocumentPosition;return r||(1&(r=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!n.sortDetached&&t.compareDocumentPosition(e)===r?e===d||e.ownerDocument===w&&x(w,e)?-1:t===d||t.ownerDocument===w&&x(w,t)?1:c?O(c,e)-O(c,t):0:4&r?-1:1)}:function(e,t){if(e===t)return f=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===d?-1:t===d?1:i?-1:o?1:c?O(c,e)-O(c,t):0;if(i===o)return ce(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?ce(a[r],s[r]):a[r]===w?-1:s[r]===w?1:0},d):d},oe.matches=function(e,t){return oe(e,null,null,t)},oe.matchesSelector=function(e,t){if((e.ownerDocument||e)!==d&&p(e),t=t.replace(z,"='$1']"),n.matchesSelector&&g&&!S[t+" "]&&(!v||!v.test(t))&&(!y||!y.test(t)))try{var r=m.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(e){}return oe(t,d,null,[e]).length>0},oe.contains=function(e,t){return(e.ownerDocument||e)!==d&&p(e),x(e,t)},oe.attr=function(e,t){(e.ownerDocument||e)!==d&&p(e);var i=r.attrHandle[t.toLowerCase()],o=i&&N.call(r.attrHandle,t.toLowerCase())?i(e,t,!g):void 0;return void 0!==o?o:n.attributes||!g?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null},oe.escape=function(e){return(e+"").replace(te,ne)},oe.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},oe.uniqueSort=function(e){var t,r=[],i=0,o=0;if(f=!n.detectDuplicates,c=!n.sortStable&&e.slice(0),e.sort(D),f){while(t=e[o++])t===e[o]&&(i=r.push(o));while(i--)e.splice(r[i],1)}return c=null,e},i=oe.getText=function(e){var t,n="",r=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=i(e)}else if(3===o||4===o)return e.nodeValue}else while(t=e[r++])n+=i(t);return n},(r=oe.selectors={cacheLength:50,createPseudo:se,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(Z,ee),e[3]=(e[3]||e[4]||e[5]||"").replace(Z,ee),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||oe.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&oe.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return V.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=a(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(Z,ee).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=E[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&E(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=oe.attr(r,e);return null==i?"!="===t:!t||(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i.replace($," ")+" ").indexOf(n)>-1:"|="===t&&(i===n||i.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,p,d,h,g=o!==a?"nextSibling":"previousSibling",y=t.parentNode,v=s&&t.nodeName.toLowerCase(),m=!u&&!s,x=!1;if(y){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===v:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?y.firstChild:y.lastChild],a&&m){x=(d=(l=(c=(f=(p=y)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1])&&l[2],p=d&&y.childNodes[d];while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if(1===p.nodeType&&++x&&p===t){c[e]=[T,d,x];break}}else if(m&&(x=d=(l=(c=(f=(p=t)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1]),!1===x)while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===v:1===p.nodeType)&&++x&&(m&&((c=(f=p[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]=[T,x]),p===t))break;return(x-=i)===r||x%r==0&&x/r>=0}}},PSEUDO:function(e,t){var n,i=r.pseudos[e]||r.setFilters[e.toLowerCase()]||oe.error("unsupported pseudo: "+e);return i[b]?i(t):i.length>1?(n=[e,e,"",t],r.setFilters.hasOwnProperty(e.toLowerCase())?se(function(e,n){var r,o=i(e,t),a=o.length;while(a--)e[r=O(e,o[a])]=!(n[r]=o[a])}):function(e){return i(e,0,n)}):i}},pseudos:{not:se(function(e){var t=[],n=[],r=s(e.replace(B,"$1"));return r[b]?se(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),t[0]=null,!n.pop()}}),has:se(function(e){return function(t){return oe(e,t).length>0}}),contains:se(function(e){return e=e.replace(Z,ee),function(t){return(t.textContent||t.innerText||i(t)).indexOf(e)>-1}}),lang:se(function(e){return U.test(e||"")||oe.error("unsupported lang: "+e),e=e.replace(Z,ee).toLowerCase(),function(t){var n;do{if(n=g?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===h},focus:function(e){return e===d.activeElement&&(!d.hasFocus||d.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:de(!1),disabled:de(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!r.pseudos.empty(e)},header:function(e){return Y.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:he(function(){return[0]}),last:he(function(e,t){return[t-1]}),eq:he(function(e,t,n){return[n<0?n+t:n]}),even:he(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:he(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:he(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:he(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=r.pseudos.eq;for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})r.pseudos[t]=fe(t);for(t in{submit:!0,reset:!0})r.pseudos[t]=pe(t);function ye(){}ye.prototype=r.filters=r.pseudos,r.setFilters=new ye,a=oe.tokenize=function(e,t){var n,i,o,a,s,u,l,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,u=[],l=r.preFilter;while(s){n&&!(i=F.exec(s))||(i&&(s=s.slice(i[0].length)||s),u.push(o=[])),n=!1,(i=_.exec(s))&&(n=i.shift(),o.push({value:n,type:i[0].replace(B," ")}),s=s.slice(n.length));for(a in r.filter)!(i=V[a].exec(s))||l[a]&&!(i=l[a](i))||(n=i.shift(),o.push({value:n,type:a,matches:i}),s=s.slice(n.length));if(!n)break}return t?s.length:s?oe.error(e):k(e,u).slice(0)};function ve(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function me(e,t,n){var r=t.dir,i=t.next,o=i||r,a=n&&"parentNode"===o,s=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||a)return e(t,n,i);return!1}:function(t,n,u){var l,c,f,p=[T,s];if(u){while(t=t[r])if((1===t.nodeType||a)&&e(t,n,u))return!0}else while(t=t[r])if(1===t.nodeType||a)if(f=t[b]||(t[b]={}),c=f[t.uniqueID]||(f[t.uniqueID]={}),i&&i===t.nodeName.toLowerCase())t=t[r]||t;else{if((l=c[o])&&l[0]===T&&l[1]===s)return p[2]=l[2];if(c[o]=p,p[2]=e(t,n,u))return!0}return!1}}function xe(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function be(e,t,n){for(var r=0,i=t.length;r<i;r++)oe(e,t[r],n);return n}function we(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Te(e,t,n,r,i,o){return r&&!r[b]&&(r=Te(r)),i&&!i[b]&&(i=Te(i,o)),se(function(o,a,s,u){var l,c,f,p=[],d=[],h=a.length,g=o||be(t||"*",s.nodeType?[s]:s,[]),y=!e||!o&&t?g:we(g,p,e,s,u),v=n?i||(o?e:h||r)?[]:a:y;if(n&&n(y,v,s,u),r){l=we(v,d),r(l,[],s,u),c=l.length;while(c--)(f=l[c])&&(v[d[c]]=!(y[d[c]]=f))}if(o){if(i||e){if(i){l=[],c=v.length;while(c--)(f=v[c])&&l.push(y[c]=f);i(null,v=[],l,u)}c=v.length;while(c--)(f=v[c])&&(l=i?O(o,f):p[c])>-1&&(o[l]=!(a[l]=f))}}else v=we(v===a?v.splice(h,v.length):v),i?i(null,a,v,u):L.apply(a,v)})}function Ce(e){for(var t,n,i,o=e.length,a=r.relative[e[0].type],s=a||r.relative[" "],u=a?1:0,c=me(function(e){return e===t},s,!0),f=me(function(e){return O(t,e)>-1},s,!0),p=[function(e,n,r){var i=!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):f(e,n,r));return t=null,i}];u<o;u++)if(n=r.relative[e[u].type])p=[me(xe(p),n)];else{if((n=r.filter[e[u].type].apply(null,e[u].matches))[b]){for(i=++u;i<o;i++)if(r.relative[e[i].type])break;return Te(u>1&&xe(p),u>1&&ve(e.slice(0,u-1).concat({value:" "===e[u-2].type?"*":""})).replace(B,"$1"),n,u<i&&Ce(e.slice(u,i)),i<o&&Ce(e=e.slice(i)),i<o&&ve(e))}p.push(n)}return xe(p)}function Ee(e,t){var n=t.length>0,i=e.length>0,o=function(o,a,s,u,c){var f,h,y,v=0,m="0",x=o&&[],b=[],w=l,C=o||i&&r.find.TAG("*",c),E=T+=null==w?1:Math.random()||.1,k=C.length;for(c&&(l=a===d||a||c);m!==k&&null!=(f=C[m]);m++){if(i&&f){h=0,a||f.ownerDocument===d||(p(f),s=!g);while(y=e[h++])if(y(f,a||d,s)){u.push(f);break}c&&(T=E)}n&&((f=!y&&f)&&v--,o&&x.push(f))}if(v+=m,n&&m!==v){h=0;while(y=t[h++])y(x,b,a,s);if(o){if(v>0)while(m--)x[m]||b[m]||(b[m]=j.call(u));b=we(b)}L.apply(u,b),c&&!o&&b.length>0&&v+t.length>1&&oe.uniqueSort(u)}return c&&(T=E,l=w),x};return n?se(o):o}return s=oe.compile=function(e,t){var n,r=[],i=[],o=S[e+" "];if(!o){t||(t=a(e)),n=t.length;while(n--)(o=Ce(t[n]))[b]?r.push(o):i.push(o);(o=S(e,Ee(i,r))).selector=e}return o},u=oe.select=function(e,t,n,i){var o,u,l,c,f,p="function"==typeof e&&e,d=!i&&a(e=p.selector||e);if(n=n||[],1===d.length){if((u=d[0]=d[0].slice(0)).length>2&&"ID"===(l=u[0]).type&&9===t.nodeType&&g&&r.relative[u[1].type]){if(!(t=(r.find.ID(l.matches[0].replace(Z,ee),t)||[])[0]))return n;p&&(t=t.parentNode),e=e.slice(u.shift().value.length)}o=V.needsContext.test(e)?0:u.length;while(o--){if(l=u[o],r.relative[c=l.type])break;if((f=r.find[c])&&(i=f(l.matches[0].replace(Z,ee),K.test(u[0].type)&&ge(t.parentNode)||t))){if(u.splice(o,1),!(e=i.length&&ve(u)))return L.apply(n,i),n;break}}}return(p||s(e,d))(i,t,!g,n,!t||K.test(e)&&ge(t.parentNode)||t),n},n.sortStable=b.split("").sort(D).join("")===b,n.detectDuplicates=!!f,p(),n.sortDetached=ue(function(e){return 1&e.compareDocumentPosition(d.createElement("fieldset"))}),ue(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||le("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&ue(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||le("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ue(function(e){return null==e.getAttribute("disabled")})||le(P,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),oe}(e);w.find=E,w.expr=E.selectors,w.expr[":"]=w.expr.pseudos,w.uniqueSort=w.unique=E.uniqueSort,w.text=E.getText,w.isXMLDoc=E.isXML,w.contains=E.contains,w.escapeSelector=E.escape;var k=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&w(e).is(n))break;r.push(e)}return r},S=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},D=w.expr.match.needsContext;function N(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var A=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,t,n){return g(t)?w.grep(e,function(e,r){return!!t.call(e,r,e)!==n}):t.nodeType?w.grep(e,function(e){return e===t!==n}):"string"!=typeof t?w.grep(e,function(e){return u.call(t,e)>-1!==n}):w.filter(t,e,n)}w.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?w.find.matchesSelector(r,e)?[r]:[]:w.find.matches(e,w.grep(t,function(e){return 1===e.nodeType}))},w.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(w(e).filter(function(){for(t=0;t<r;t++)if(w.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)w.find(e,i[t],n);return r>1?w.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&D.test(e)?w(e):e||[],!1).length}});var q,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(w.fn.init=function(e,t,n){var i,o;if(!e)return this;if(n=n||q,"string"==typeof e){if(!(i="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:L.exec(e))||!i[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(i[1]){if(t=t instanceof w?t[0]:t,w.merge(this,w.parseHTML(i[1],t&&t.nodeType?t.ownerDocument||t:r,!0)),A.test(i[1])&&w.isPlainObject(t))for(i in t)g(this[i])?this[i](t[i]):this.attr(i,t[i]);return this}return(o=r.getElementById(i[2]))&&(this[0]=o,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):g(e)?void 0!==n.ready?n.ready(e):e(w):w.makeArray(e,this)}).prototype=w.fn,q=w(r);var H=/^(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};w.fn.extend({has:function(e){var t=w(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(w.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&w(e);if(!D.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&w.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?w.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?u.call(w(e),this[0]):u.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(w.uniqueSort(w.merge(this.get(),w(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function P(e,t){while((e=e[t])&&1!==e.nodeType);return e}w.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return k(e,"parentNode")},parentsUntil:function(e,t,n){return k(e,"parentNode",n)},next:function(e){return P(e,"nextSibling")},prev:function(e){return P(e,"previousSibling")},nextAll:function(e){return k(e,"nextSibling")},prevAll:function(e){return k(e,"previousSibling")},nextUntil:function(e,t,n){return k(e,"nextSibling",n)},prevUntil:function(e,t,n){return k(e,"previousSibling",n)},siblings:function(e){return S((e.parentNode||{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e){return N(e,"iframe")?e.contentDocument:(N(e,"template")&&(e=e.content||e),w.merge([],e.childNodes))}},function(e,t){w.fn[e]=function(n,r){var i=w.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=w.filter(r,i)),this.length>1&&(O[e]||w.uniqueSort(i),H.test(e)&&i.reverse()),this.pushStack(i)}});var M=/[^\x20\t\r\n\f]+/g;function R(e){var t={};return w.each(e.match(M)||[],function(e,n){t[n]=!0}),t}w.Callbacks=function(e){e="string"==typeof e?R(e):w.extend({},e);var t,n,r,i,o=[],a=[],s=-1,u=function(){for(i=i||e.once,r=t=!0;a.length;s=-1){n=a.shift();while(++s<o.length)!1===o[s].apply(n[0],n[1])&&e.stopOnFalse&&(s=o.length,n=!1)}e.memory||(n=!1),t=!1,i&&(o=n?[]:"")},l={add:function(){return o&&(n&&!t&&(s=o.length-1,a.push(n)),function t(n){w.each(n,function(n,r){g(r)?e.unique&&l.has(r)||o.push(r):r&&r.length&&"string"!==x(r)&&t(r)})}(arguments),n&&!t&&u()),this},remove:function(){return w.each(arguments,function(e,t){var n;while((n=w.inArray(t,o,n))>-1)o.splice(n,1),n<=s&&s--}),this},has:function(e){return e?w.inArray(e,o)>-1:o.length>0},empty:function(){return o&&(o=[]),this},disable:function(){return i=a=[],o=n="",this},disabled:function(){return!o},lock:function(){return i=a=[],n||t||(o=n=""),this},locked:function(){return!!i},fireWith:function(e,n){return i||(n=[e,(n=n||[]).slice?n.slice():n],a.push(n),t||u()),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!r}};return l};function I(e){return e}function W(e){throw e}function $(e,t,n,r){var i;try{e&&g(i=e.promise)?i.call(e).done(t).fail(n):e&&g(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}w.extend({Deferred:function(t){var n=[["notify","progress",w.Callbacks("memory"),w.Callbacks("memory"),2],["resolve","done",w.Callbacks("once memory"),w.Callbacks("once memory"),0,"resolved"],["reject","fail",w.Callbacks("once memory"),w.Callbacks("once memory"),1,"rejected"]],r="pending",i={state:function(){return r},always:function(){return o.done(arguments).fail(arguments),this},"catch":function(e){return i.then(null,e)},pipe:function(){var e=arguments;return w.Deferred(function(t){w.each(n,function(n,r){var i=g(e[r[4]])&&e[r[4]];o[r[1]](function(){var e=i&&i.apply(this,arguments);e&&g(e.promise)?e.promise().progress(t.notify).done(t.resolve).fail(t.reject):t[r[0]+"With"](this,i?[e]:arguments)})}),e=null}).promise()},then:function(t,r,i){var o=0;function a(t,n,r,i){return function(){var s=this,u=arguments,l=function(){var e,l;if(!(t<o)){if((e=r.apply(s,u))===n.promise())throw new TypeError("Thenable self-resolution");l=e&&("object"==typeof e||"function"==typeof e)&&e.then,g(l)?i?l.call(e,a(o,n,I,i),a(o,n,W,i)):(o++,l.call(e,a(o,n,I,i),a(o,n,W,i),a(o,n,I,n.notifyWith))):(r!==I&&(s=void 0,u=[e]),(i||n.resolveWith)(s,u))}},c=i?l:function(){try{l()}catch(e){w.Deferred.exceptionHook&&w.Deferred.exceptionHook(e,c.stackTrace),t+1>=o&&(r!==W&&(s=void 0,u=[e]),n.rejectWith(s,u))}};t?c():(w.Deferred.getStackHook&&(c.stackTrace=w.Deferred.getStackHook()),e.setTimeout(c))}}return w.Deferred(function(e){n[0][3].add(a(0,e,g(i)?i:I,e.notifyWith)),n[1][3].add(a(0,e,g(t)?t:I)),n[2][3].add(a(0,e,g(r)?r:W))}).promise()},promise:function(e){return null!=e?w.extend(e,i):i}},o={};return w.each(n,function(e,t){var a=t[2],s=t[5];i[t[1]]=a.add,s&&a.add(function(){r=s},n[3-e][2].disable,n[3-e][3].disable,n[0][2].lock,n[0][3].lock),a.add(t[3].fire),o[t[0]]=function(){return o[t[0]+"With"](this===o?void 0:this,arguments),this},o[t[0]+"With"]=a.fireWith}),i.promise(o),t&&t.call(o,o),o},when:function(e){var t=arguments.length,n=t,r=Array(n),i=o.call(arguments),a=w.Deferred(),s=function(e){return function(n){r[e]=this,i[e]=arguments.length>1?o.call(arguments):n,--t||a.resolveWith(r,i)}};if(t<=1&&($(e,a.done(s(n)).resolve,a.reject,!t),"pending"===a.state()||g(i[n]&&i[n].then)))return a.then();while(n--)$(i[n],s(n),a.reject);return a.promise()}});var B=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;w.Deferred.exceptionHook=function(t,n){e.console&&e.console.warn&&t&&B.test(t.name)&&e.console.warn("jQuery.Deferred exception: "+t.message,t.stack,n)},w.readyException=function(t){e.setTimeout(function(){throw t})};var F=w.Deferred();w.fn.ready=function(e){return F.then(e)["catch"](function(e){w.readyException(e)}),this},w.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--w.readyWait:w.isReady)||(w.isReady=!0,!0!==e&&--w.readyWait>0||F.resolveWith(r,[w]))}}),w.ready.then=F.then;function _(){r.removeEventListener("DOMContentLoaded",_),e.removeEventListener("load",_),w.ready()}"complete"===r.readyState||"loading"!==r.readyState&&!r.documentElement.doScroll?e.setTimeout(w.ready):(r.addEventListener("DOMContentLoaded",_),e.addEventListener("load",_));var z=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===x(n)){i=!0;for(s in n)z(e,t,s,n[s],!0,o,a)}else if(void 0!==r&&(i=!0,g(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(w(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},X=/^-ms-/,U=/-([a-z])/g;function V(e,t){return t.toUpperCase()}function G(e){return e.replace(X,"ms-").replace(U,V)}var Y=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Q(){this.expando=w.expando+Q.uid++}Q.uid=1,Q.prototype={cache:function(e){var t=e[this.expando];return t||(t={},Y(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[G(t)]=n;else for(r in t)i[G(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][G(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(G):(t=G(t))in r?[t]:t.match(M)||[]).length;while(n--)delete r[t[n]]}(void 0===t||w.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!w.isEmptyObject(t)}};var J=new Q,K=new Q,Z=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ee=/[A-Z]/g;function te(e){return"true"===e||"false"!==e&&("null"===e?null:e===+e+""?+e:Z.test(e)?JSON.parse(e):e)}function ne(e,t,n){var r;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(ee,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n=te(n)}catch(e){}K.set(e,t,n)}else n=void 0;return n}w.extend({hasData:function(e){return K.hasData(e)||J.hasData(e)},data:function(e,t,n){return K.access(e,t,n)},removeData:function(e,t){K.remove(e,t)},_data:function(e,t,n){return J.access(e,t,n)},_removeData:function(e,t){J.remove(e,t)}}),w.fn.extend({data:function(e,t){var n,r,i,o=this[0],a=o&&o.attributes;if(void 0===e){if(this.length&&(i=K.get(o),1===o.nodeType&&!J.get(o,"hasDataAttrs"))){n=a.length;while(n--)a[n]&&0===(r=a[n].name).indexOf("data-")&&(r=G(r.slice(5)),ne(o,r,i[r]));J.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof e?this.each(function(){K.set(this,e)}):z(this,function(t){var n;if(o&&void 0===t){if(void 0!==(n=K.get(o,e)))return n;if(void 0!==(n=ne(o,e)))return n}else this.each(function(){K.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){K.remove(this,e)})}}),w.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=J.get(e,t),n&&(!r||Array.isArray(n)?r=J.access(e,t,w.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=w.queue(e,t),r=n.length,i=n.shift(),o=w._queueHooks(e,t),a=function(){w.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return J.get(e,n)||J.access(e,n,{empty:w.Callbacks("once memory").add(function(){J.remove(e,[t+"queue",n])})})}}),w.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?w.queue(this[0],e):void 0===t?this:this.each(function(){var n=w.queue(this,e,t);w._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&w.dequeue(this,e)})},dequeue:function(e){return this.each(function(){w.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=w.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=J.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var re=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ie=new RegExp("^(?:([+-])=|)("+re+")([a-z%]*)$","i"),oe=["Top","Right","Bottom","Left"],ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&w.contains(e.ownerDocument,e)&&"none"===w.css(e,"display")},se=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i};function ue(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return w.css(e,t,"")},u=s(),l=n&&n[3]||(w.cssNumber[t]?"":"px"),c=(w.cssNumber[t]||"px"!==l&&+u)&&ie.exec(w.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)w.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,w.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var le={};function ce(e){var t,n=e.ownerDocument,r=e.nodeName,i=le[r];return i||(t=n.body.appendChild(n.createElement(r)),i=w.css(t,"display"),t.parentNode.removeChild(t),"none"===i&&(i="block"),le[r]=i,i)}function fe(e,t){for(var n,r,i=[],o=0,a=e.length;o<a;o++)(r=e[o]).style&&(n=r.style.display,t?("none"===n&&(i[o]=J.get(r,"display")||null,i[o]||(r.style.display="")),""===r.style.display&&ae(r)&&(i[o]=ce(r))):"none"!==n&&(i[o]="none",J.set(r,"display",n)));for(o=0;o<a;o++)null!=i[o]&&(e[o].style.display=i[o]);return e}w.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?w(this).show():w(this).hide()})}});var pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,he=/^$|^module$|\/(?:java|ecma)script/i,ge={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ge.optgroup=ge.option,ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td;function ye(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&N(e,t)?w.merge([e],n):n}function ve(e,t){for(var n=0,r=e.length;n<r;n++)J.set(e[n],"globalEval",!t||J.get(t[n],"globalEval"))}var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===x(o))w.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+w.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;w.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&w.inArray(o,r)>-1)i&&i.push(o);else if(l=w.contains(o.ownerDocument,o),a=ye(f.appendChild(o),"script"),l&&ve(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}!function(){var e=r.createDocumentFragment().appendChild(r.createElement("div")),t=r.createElement("input");t.setAttribute("type","radio"),t.setAttribute("checked","checked"),t.setAttribute("name","t"),e.appendChild(t),h.checkClone=e.cloneNode(!0).cloneNode(!0).lastChild.checked,e.innerHTML="<textarea>x</textarea>",h.noCloneChecked=!!e.cloneNode(!0).lastChild.defaultValue}();var be=r.documentElement,we=/^key/,Te=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ce=/^([^.]*)(?:\.(.+)|)/;function Ee(){return!0}function ke(){return!1}function Se(){try{return r.activeElement}catch(e){}}function De(e,t,n,r,i,o){var a,s;if("object"==typeof t){"string"!=typeof n&&(r=r||n,n=void 0);for(s in t)De(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=ke;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return w().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=w.guid++)),e.each(function(){w.event.add(this,t,i,r,n)})}w.event={global:{},add:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.get(e);if(y){n.handler&&(n=(o=n).handler,i=o.selector),i&&w.find.matchesSelector(be,i),n.guid||(n.guid=w.guid++),(u=y.events)||(u=y.events={}),(a=y.handle)||(a=y.handle=function(t){return"undefined"!=typeof w&&w.event.triggered!==t.type?w.event.dispatch.apply(e,arguments):void 0}),l=(t=(t||"").match(M)||[""]).length;while(l--)d=g=(s=Ce.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=w.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=w.event.special[d]||{},c=w.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&w.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(e,r,h,a)||e.addEventListener&&e.addEventListener(d,a)),f.add&&(f.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),w.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.hasData(e)&&J.get(e);if(y&&(u=y.events)){l=(t=(t||"").match(M)||[""]).length;while(l--)if(s=Ce.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){f=w.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,y.handle)||w.removeEvent(e,d,y.handle),delete u[d])}else for(d in u)w.event.remove(e,d+t[l],n,r,!0);w.isEmptyObject(u)&&J.remove(e,"handle events")}},dispatch:function(e){var t=w.event.fix(e),n,r,i,o,a,s,u=new Array(arguments.length),l=(J.get(this,"events")||{})[t.type]||[],c=w.event.special[t.type]||{};for(u[0]=t,n=1;n<arguments.length;n++)u[n]=arguments[n];if(t.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,t)){s=w.event.handlers.call(this,t,l),n=0;while((o=s[n++])&&!t.isPropagationStopped()){t.currentTarget=o.elem,r=0;while((a=o.handlers[r++])&&!t.isImmediatePropagationStopped())t.rnamespace&&!t.rnamespace.test(a.namespace)||(t.handleObj=a,t.data=a.data,void 0!==(i=((w.event.special[a.origType]||{}).handle||a.handler).apply(o.elem,u))&&!1===(t.result=i)&&(t.preventDefault(),t.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,t),t.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&e.button>=1))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?w(i,this).index(l)>-1:w.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(e,t){Object.defineProperty(w.Event.prototype,e,{enumerable:!0,configurable:!0,get:g(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[w.expando]?e:new w.Event(e)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==Se()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===Se()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&N(this,"input"))return this.click(),!1},_default:function(e){return N(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},w.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},w.Event=function(e,t){if(!(this instanceof w.Event))return new w.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ee:ke,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&w.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[w.expando]=!0},w.Event.prototype={constructor:w.Event,isDefaultPrevented:ke,isPropagationStopped:ke,isImmediatePropagationStopped:ke,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ee,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ee,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ee,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},w.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&we.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Te.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},w.event.addProp),w.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){w.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return i&&(i===r||w.contains(r,i))||(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),w.fn.extend({on:function(e,t,n,r){return De(this,e,t,n,r)},one:function(e,t,n,r){return De(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,w(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=ke),this.each(function(){w.event.remove(this,e,n,t)})}});var Ne=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Ae=/<script|<style|<link/i,je=/checked\s*(?:[^=]|=\s*.checked.)/i,qe=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Le(e,t){return N(e,"table")&&N(11!==t.nodeType?t:t.firstChild,"tr")?w(e).children("tbody")[0]||e:e}function He(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Oe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Pe(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(J.hasData(e)&&(o=J.access(e),a=J.set(t,o),l=o.events)){delete a.handle,a.events={};for(i in l)for(n=0,r=l[i].length;n<r;n++)w.event.add(t,i,l[i][n])}K.hasData(e)&&(s=K.access(e),u=w.extend({},s),K.set(t,u))}}function Me(e,t){var n=t.nodeName.toLowerCase();"input"===n&&pe.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function Re(e,t,n,r){t=a.apply([],t);var i,o,s,u,l,c,f=0,p=e.length,d=p-1,y=t[0],v=g(y);if(v||p>1&&"string"==typeof y&&!h.checkClone&&je.test(y))return e.each(function(i){var o=e.eq(i);v&&(t[0]=y.call(this,i,o.html())),Re(o,t,n,r)});if(p&&(i=xe(t,e[0].ownerDocument,!1,e,r),o=i.firstChild,1===i.childNodes.length&&(i=o),o||r)){for(u=(s=w.map(ye(i,"script"),He)).length;f<p;f++)l=i,f!==d&&(l=w.clone(l,!0,!0),u&&w.merge(s,ye(l,"script"))),n.call(e[f],l,f);if(u)for(c=s[s.length-1].ownerDocument,w.map(s,Oe),f=0;f<u;f++)l=s[f],he.test(l.type||"")&&!J.access(l,"globalEval")&&w.contains(c,l)&&(l.src&&"module"!==(l.type||"").toLowerCase()?w._evalUrl&&w._evalUrl(l.src):m(l.textContent.replace(qe,""),c,l))}return e}function Ie(e,t,n){for(var r,i=t?w.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||w.cleanData(ye(r)),r.parentNode&&(n&&w.contains(r.ownerDocument,r)&&ve(ye(r,"script")),r.parentNode.removeChild(r));return e}w.extend({htmlPrefilter:function(e){return e.replace(Ne,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s=e.cloneNode(!0),u=w.contains(e.ownerDocument,e);if(!(h.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||w.isXMLDoc(e)))for(a=ye(s),r=0,i=(o=ye(e)).length;r<i;r++)Me(o[r],a[r]);if(t)if(n)for(o=o||ye(e),a=a||ye(s),r=0,i=o.length;r<i;r++)Pe(o[r],a[r]);else Pe(e,s);return(a=ye(s,"script")).length>0&&ve(a,!u&&ye(e,"script")),s},cleanData:function(e){for(var t,n,r,i=w.event.special,o=0;void 0!==(n=e[o]);o++)if(Y(n)){if(t=n[J.expando]){if(t.events)for(r in t.events)i[r]?w.event.remove(n,r):w.removeEvent(n,r,t.handle);n[J.expando]=void 0}n[K.expando]&&(n[K.expando]=void 0)}}}),w.fn.extend({detach:function(e){return Ie(this,e,!0)},remove:function(e){return Ie(this,e)},text:function(e){return z(this,function(e){return void 0===e?w.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Re(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Le(this,e).appendChild(e)})},prepend:function(){return Re(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Le(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(w.cleanData(ye(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return w.clone(this,e,t)})},html:function(e){return z(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ae.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=w.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(w.cleanData(ye(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];return Re(this,arguments,function(t){var n=this.parentNode;w.inArray(this,e)<0&&(w.cleanData(ye(this)),n&&n.replaceChild(t,this))},e)}}),w.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){w.fn[e]=function(e){for(var n,r=[],i=w(e),o=i.length-1,a=0;a<=o;a++)n=a===o?this:this.clone(!0),w(i[a])[t](n),s.apply(r,n.get());return this.pushStack(r)}});var We=new RegExp("^("+re+")(?!px)[a-z%]+$","i"),$e=function(t){var n=t.ownerDocument.defaultView;return n&&n.opener||(n=e),n.getComputedStyle(t)},Be=new RegExp(oe.join("|"),"i");!function(){function t(){if(c){l.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",c.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",be.appendChild(l).appendChild(c);var t=e.getComputedStyle(c);i="1%"!==t.top,u=12===n(t.marginLeft),c.style.right="60%",s=36===n(t.right),o=36===n(t.width),c.style.position="absolute",a=36===c.offsetWidth||"absolute",be.removeChild(l),c=null}}function n(e){return Math.round(parseFloat(e))}var i,o,a,s,u,l=r.createElement("div"),c=r.createElement("div");c.style&&(c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",h.clearCloneStyle="content-box"===c.style.backgroundClip,w.extend(h,{boxSizingReliable:function(){return t(),o},pixelBoxStyles:function(){return t(),s},pixelPosition:function(){return t(),i},reliableMarginLeft:function(){return t(),u},scrollboxSize:function(){return t(),a}}))}();function Fe(e,t,n){var r,i,o,a,s=e.style;return(n=n||$e(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||w.contains(e.ownerDocument,e)||(a=w.style(e,t)),!h.pixelBoxStyles()&&We.test(a)&&Be.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function _e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}var ze=/^(none|table(?!-c[ea]).+)/,Xe=/^--/,Ue={position:"absolute",visibility:"hidden",display:"block"},Ve={letterSpacing:"0",fontWeight:"400"},Ge=["Webkit","Moz","ms"],Ye=r.createElement("div").style;function Qe(e){if(e in Ye)return e;var t=e[0].toUpperCase()+e.slice(1),n=Ge.length;while(n--)if((e=Ge[n]+t)in Ye)return e}function Je(e){var t=w.cssProps[e];return t||(t=w.cssProps[e]=Qe(e)||e),t}function Ke(e,t,n){var r=ie.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ze(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=w.css(e,n+oe[a],!0,i)),r?("content"===n&&(u-=w.css(e,"padding"+oe[a],!0,i)),"margin"!==n&&(u-=w.css(e,"border"+oe[a]+"Width",!0,i))):(u+=w.css(e,"padding"+oe[a],!0,i),"padding"!==n?u+=w.css(e,"border"+oe[a]+"Width",!0,i):s+=w.css(e,"border"+oe[a]+"Width",!0,i));return!r&&o>=0&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))),u}function et(e,t,n){var r=$e(e),i=Fe(e,t,r),o="border-box"===w.css(e,"boxSizing",!1,r),a=o;if(We.test(i)){if(!n)return i;i="auto"}return a=a&&(h.boxSizingReliable()||i===e.style[t]),("auto"===i||!parseFloat(i)&&"inline"===w.css(e,"display",!1,r))&&(i=e["offset"+t[0].toUpperCase()+t.slice(1)],a=!0),(i=parseFloat(i)||0)+Ze(e,t,n||(o?"border":"content"),a,r,i)+"px"}w.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Fe(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=G(t),u=Xe.test(t),l=e.style;if(u||(t=Je(s)),a=w.cssHooks[t]||w.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"==(o=typeof n)&&(i=ie.exec(n))&&i[1]&&(n=ue(e,t,i),o="number"),null!=n&&n===n&&("number"===o&&(n+=i&&i[3]||(w.cssNumber[s]?"":"px")),h.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=G(t);return Xe.test(t)||(t=Je(s)),(a=w.cssHooks[t]||w.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Fe(e,t,r)),"normal"===i&&t in Ve&&(i=Ve[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),w.each(["height","width"],function(e,t){w.cssHooks[t]={get:function(e,n,r){if(n)return!ze.test(w.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?et(e,t,r):se(e,Ue,function(){return et(e,t,r)})},set:function(e,n,r){var i,o=$e(e),a="border-box"===w.css(e,"boxSizing",!1,o),s=r&&Ze(e,t,r,a,o);return a&&h.scrollboxSize()===o.position&&(s-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(o[t])-Ze(e,t,"border",!1,o)-.5)),s&&(i=ie.exec(n))&&"px"!==(i[3]||"px")&&(e.style[t]=n,n=w.css(e,t)),Ke(e,n,s)}}}),w.cssHooks.marginLeft=_e(h.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Fe(e,"marginLeft"))||e.getBoundingClientRect().left-se(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),w.each({margin:"",padding:"",border:"Width"},function(e,t){w.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];r<4;r++)i[e+oe[r]+t]=o[r]||o[r-2]||o[0];return i}},"margin"!==e&&(w.cssHooks[e+t].set=Ke)}),w.fn.extend({css:function(e,t){return z(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=$e(e),i=t.length;a<i;a++)o[t[a]]=w.css(e,t[a],!1,r);return o}return void 0!==n?w.style(e,t,n):w.css(e,t)},e,t,arguments.length>1)}});function tt(e,t,n,r,i){return new tt.prototype.init(e,t,n,r,i)}w.Tween=tt,tt.prototype={constructor:tt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||w.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(w.cssNumber[n]?"":"px")},cur:function(){var e=tt.propHooks[this.prop];return e&&e.get?e.get(this):tt.propHooks._default.get(this)},run:function(e){var t,n=tt.propHooks[this.prop];return this.options.duration?this.pos=t=w.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):tt.propHooks._default.set(this),this}},tt.prototype.init.prototype=tt.prototype,tt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=w.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){w.fx.step[e.prop]?w.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[w.cssProps[e.prop]]&&!w.cssHooks[e.prop]?e.elem[e.prop]=e.now:w.style(e.elem,e.prop,e.now+e.unit)}}},tt.propHooks.scrollTop=tt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},w.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},w.fx=tt.prototype.init,w.fx.step={};var nt,rt,it=/^(?:toggle|show|hide)$/,ot=/queueHooks$/;function at(){rt&&(!1===r.hidden&&e.requestAnimationFrame?e.requestAnimationFrame(at):e.setTimeout(at,w.fx.interval),w.fx.tick())}function st(){return e.setTimeout(function(){nt=void 0}),nt=Date.now()}function ut(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=oe[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function lt(e,t,n){for(var r,i=(pt.tweeners[t]||[]).concat(pt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ct(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),y=J.get(e,"fxshow");n.queue||(null==(a=w._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,w.queue(e,"fx").length||a.empty.fire()})}));for(r in t)if(i=t[r],it.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!y||void 0===y[r])continue;g=!0}d[r]=y&&y[r]||w.style(e,r)}if((u=!w.isEmptyObject(t))||!w.isEmptyObject(d)){f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=y&&y.display)&&(l=J.get(e,"display")),"none"===(c=w.css(e,"display"))&&(l?c=l:(fe([e],!0),l=e.style.display||l,c=w.css(e,"display"),fe([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===w.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1;for(r in d)u||(y?"hidden"in y&&(g=y.hidden):y=J.access(e,"fxshow",{display:l}),o&&(y.hidden=!g),g&&fe([e],!0),p.done(function(){g||fe([e]),J.remove(e,"fxshow");for(r in d)w.style(e,r,d[r])})),u=lt(g?y[r]:0,r,p),r in y||(y[r]=u.start,g&&(u.end=u.start,u.start=0))}}function ft(e,t){var n,r,i,o,a;for(n in e)if(r=G(n),i=t[r],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=w.cssHooks[r])&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}function pt(e,t,n){var r,i,o=0,a=pt.prefilters.length,s=w.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;for(var t=nt||st(),n=Math.max(0,l.startTime+l.duration-t),r=1-(n/l.duration||0),o=0,a=l.tweens.length;o<a;o++)l.tweens[o].run(r);return s.notifyWith(e,[l,r,n]),r<1&&a?n:(a||s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:w.extend({},t),opts:w.extend(!0,{specialEasing:{},easing:w.easing._default},n),originalProperties:t,originalOptions:n,startTime:nt||st(),duration:n.duration,tweens:[],createTween:function(t,n){var r=w.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;n<r;n++)l.tweens[n].run(1);return t?(s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l,t])):s.rejectWith(e,[l,t]),this}}),c=l.props;for(ft(c,l.opts.specialEasing);o<a;o++)if(r=pt.prefilters[o].call(l,e,c,l.opts))return g(r.stop)&&(w._queueHooks(l.elem,l.opts.queue).stop=r.stop.bind(r)),r;return w.map(c,lt,l),g(l.opts.start)&&l.opts.start.call(e,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),w.fx.timer(w.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l}w.Animation=w.extend(pt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return ue(n.elem,e,ie.exec(t),n),n}]},tweener:function(e,t){g(e)?(t=e,e=["*"]):e=e.match(M);for(var n,r=0,i=e.length;r<i;r++)n=e[r],pt.tweeners[n]=pt.tweeners[n]||[],pt.tweeners[n].unshift(t)},prefilters:[ct],prefilter:function(e,t){t?pt.prefilters.unshift(e):pt.prefilters.push(e)}}),w.speed=function(e,t,n){var r=e&&"object"==typeof e?w.extend({},e):{complete:n||!n&&t||g(e)&&e,duration:e,easing:n&&t||t&&!g(t)&&t};return w.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in w.fx.speeds?r.duration=w.fx.speeds[r.duration]:r.duration=w.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){g(r.old)&&r.old.call(this),r.queue&&w.dequeue(this,r.queue)},r},w.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=w.isEmptyObject(e),o=w.speed(t,n,r),a=function(){var t=pt(this,w.extend({},e),o);(i||J.get(this,"finish"))&&t.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&!1!==e&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=w.timers,a=J.get(this);if(i)a[i]&&a[i].stop&&r(a[i]);else for(i in a)a[i]&&a[i].stop&&ot.test(i)&&r(a[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));!t&&n||w.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=J.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=w.timers,a=r?r.length:0;for(n.finish=!0,w.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;t<a;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),w.each(["toggle","show","hide"],function(e,t){var n=w.fn[t];w.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ut(t,!0),e,r,i)}}),w.each({slideDown:ut("show"),slideUp:ut("hide"),slideToggle:ut("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){w.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),w.timers=[],w.fx.tick=function(){var e,t=0,n=w.timers;for(nt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||w.fx.stop(),nt=void 0},w.fx.timer=function(e){w.timers.push(e),w.fx.start()},w.fx.interval=13,w.fx.start=function(){rt||(rt=!0,at())},w.fx.stop=function(){rt=null},w.fx.speeds={slow:600,fast:200,_default:400},w.fn.delay=function(t,n){return t=w.fx?w.fx.speeds[t]||t:t,n=n||"fx",this.queue(n,function(n,r){var i=e.setTimeout(n,t);r.stop=function(){e.clearTimeout(i)}})},function(){var e=r.createElement("input"),t=r.createElement("select").appendChild(r.createElement("option"));e.type="checkbox",h.checkOn=""!==e.value,h.optSelected=t.selected,(e=r.createElement("input")).value="t",e.type="radio",h.radioValue="t"===e.value}();var dt,ht=w.expr.attrHandle;w.fn.extend({attr:function(e,t){return z(this,w.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){w.removeAttr(this,e)})}}),w.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?w.prop(e,t,n):(1===o&&w.isXMLDoc(e)||(i=w.attrHooks[t.toLowerCase()]||(w.expr.match.bool.test(t)?dt:void 0)),void 0!==n?null===n?void w.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=w.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!h.radioValue&&"radio"===t&&N(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(M);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),dt={set:function(e,t,n){return!1===t?w.removeAttr(e,n):e.setAttribute(n,n),n}},w.each(w.expr.match.bool.source.match(/\w+/g),function(e,t){var n=ht[t]||w.find.attr;ht[t]=function(e,t,r){var i,o,a=t.toLowerCase();return r||(o=ht[a],ht[a]=i,i=null!=n(e,t,r)?a:null,ht[a]=o),i}});var gt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;w.fn.extend({prop:function(e,t){return z(this,w.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[w.propFix[e]||e]})}}),w.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&w.isXMLDoc(e)||(t=w.propFix[t]||t,i=w.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=w.find.attr(e,"tabindex");return t?parseInt(t,10):gt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),h.optSelected||(w.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),w.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){w.propFix[this.toLowerCase()]=this});function vt(e){return(e.match(M)||[]).join(" ")}function mt(e){return e.getAttribute&&e.getAttribute("class")||""}function xt(e){return Array.isArray(e)?e:"string"==typeof e?e.match(M)||[]:[]}w.fn.extend({addClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).addClass(e.call(this,t,mt(this)))});if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},removeClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).removeClass(e.call(this,t,mt(this)))});if(!arguments.length)return this.attr("class","");if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])while(r.indexOf(" "+o+" ")>-1)r=r.replace(" "+o+" "," ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(e,t){var n=typeof e,r="string"===n||Array.isArray(e);return"boolean"==typeof t&&r?t?this.addClass(e):this.removeClass(e):g(e)?this.each(function(n){w(this).toggleClass(e.call(this,n,mt(this),t),t)}):this.each(function(){var t,i,o,a;if(r){i=0,o=w(this),a=xt(e);while(t=a[i++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else void 0!==e&&"boolean"!==n||((t=mt(this))&&J.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||!1===e?"":J.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&(" "+vt(mt(n))+" ").indexOf(t)>-1)return!0;return!1}});var bt=/\r/g;w.fn.extend({val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=g(e),this.each(function(n){var i;1===this.nodeType&&(null==(i=r?e.call(this,n,w(this).val()):e)?i="":"number"==typeof i?i+="":Array.isArray(i)&&(i=w.map(i,function(e){return null==e?"":e+""})),(t=w.valHooks[this.type]||w.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))});if(i)return(t=w.valHooks[i.type]||w.valHooks[i.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:"string"==typeof(n=i.value)?n.replace(bt,""):null==n?"":n}}}),w.extend({valHooks:{option:{get:function(e){var t=w.find.attr(e,"value");return null!=t?t:vt(w.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!N(n.parentNode,"optgroup"))){if(t=w(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=w.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=w.inArray(w.valHooks.option.get(r),o)>-1)&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),w.each(["radio","checkbox"],function(){w.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=w.inArray(w(e).val(),t)>-1}},h.checkOn||(w.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),h.focusin="onfocusin"in e;var wt=/^(?:focusinfocus|focusoutblur)$/,Tt=function(e){e.stopPropagation()};w.extend(w.event,{trigger:function(t,n,i,o){var a,s,u,l,c,p,d,h,v=[i||r],m=f.call(t,"type")?t.type:t,x=f.call(t,"namespace")?t.namespace.split("."):[];if(s=h=u=i=i||r,3!==i.nodeType&&8!==i.nodeType&&!wt.test(m+w.event.triggered)&&(m.indexOf(".")>-1&&(m=(x=m.split(".")).shift(),x.sort()),c=m.indexOf(":")<0&&"on"+m,t=t[w.expando]?t:new w.Event(m,"object"==typeof t&&t),t.isTrigger=o?2:3,t.namespace=x.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+x.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=i),n=null==n?[t]:w.makeArray(n,[t]),d=w.event.special[m]||{},o||!d.trigger||!1!==d.trigger.apply(i,n))){if(!o&&!d.noBubble&&!y(i)){for(l=d.delegateType||m,wt.test(l+m)||(s=s.parentNode);s;s=s.parentNode)v.push(s),u=s;u===(i.ownerDocument||r)&&v.push(u.defaultView||u.parentWindow||e)}a=0;while((s=v[a++])&&!t.isPropagationStopped())h=s,t.type=a>1?l:d.bindType||m,(p=(J.get(s,"events")||{})[t.type]&&J.get(s,"handle"))&&p.apply(s,n),(p=c&&s[c])&&p.apply&&Y(s)&&(t.result=p.apply(s,n),!1===t.result&&t.preventDefault());return t.type=m,o||t.isDefaultPrevented()||d._default&&!1!==d._default.apply(v.pop(),n)||!Y(i)||c&&g(i[m])&&!y(i)&&((u=i[c])&&(i[c]=null),w.event.triggered=m,t.isPropagationStopped()&&h.addEventListener(m,Tt),i[m](),t.isPropagationStopped()&&h.removeEventListener(m,Tt),w.event.triggered=void 0,u&&(i[c]=u)),t.result}},simulate:function(e,t,n){var r=w.extend(new w.Event,n,{type:e,isSimulated:!0});w.event.trigger(r,null,t)}}),w.fn.extend({trigger:function(e,t){return this.each(function(){w.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return w.event.trigger(e,t,n,!0)}}),h.focusin||w.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){w.event.simulate(t,e.target,w.event.fix(e))};w.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=J.access(r,t);i||r.addEventListener(e,n,!0),J.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=J.access(r,t)-1;i?J.access(r,t,i):(r.removeEventListener(e,n,!0),J.remove(r,t))}}});var Ct=e.location,Et=Date.now(),kt=/\?/;w.parseXML=function(t){var n;if(!t||"string"!=typeof t)return null;try{n=(new e.DOMParser).parseFromString(t,"text/xml")}catch(e){n=void 0}return n&&!n.getElementsByTagName("parsererror").length||w.error("Invalid XML: "+t),n};var St=/\[\]$/,Dt=/\r?\n/g,Nt=/^(?:submit|button|image|reset|file)$/i,At=/^(?:input|select|textarea|keygen)/i;function jt(e,t,n,r){var i;if(Array.isArray(t))w.each(t,function(t,i){n||St.test(e)?r(e,i):jt(e+"["+("object"==typeof i&&null!=i?t:"")+"]",i,n,r)});else if(n||"object"!==x(t))r(e,t);else for(i in t)jt(e+"["+i+"]",t[i],n,r)}w.param=function(e,t){var n,r=[],i=function(e,t){var n=g(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(Array.isArray(e)||e.jquery&&!w.isPlainObject(e))w.each(e,function(){i(this.name,this.value)});else for(n in e)jt(n,e[n],t,i);return r.join("&")},w.fn.extend({serialize:function(){return w.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=w.prop(this,"elements");return e?w.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!w(this).is(":disabled")&&At.test(this.nodeName)&&!Nt.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=w(this).val();return null==n?null:Array.isArray(n)?w.map(n,function(e){return{name:t.name,value:e.replace(Dt,"\r\n")}}):{name:t.name,value:n.replace(Dt,"\r\n")}}).get()}});var qt=/%20/g,Lt=/#.*$/,Ht=/([?&])_=[^&]*/,Ot=/^(.*?):[ \t]*([^\r\n]*)$/gm,Pt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Mt=/^(?:GET|HEAD)$/,Rt=/^\/\//,It={},Wt={},$t="*/".concat("*"),Bt=r.createElement("a");Bt.href=Ct.href;function Ft(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(M)||[];if(g(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function _t(e,t,n,r){var i={},o=e===Wt;function a(s){var u;return i[s]=!0,w.each(e[s]||[],function(e,s){var l=s(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):void 0:(t.dataTypes.unshift(l),a(l),!1)}),u}return a(t.dataTypes[0])||!i["*"]&&a("*")}function zt(e,t){var n,r,i=w.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&w.extend(!0,e,r),e}function Xt(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}function Ut(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}w.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ct.href,type:"GET",isLocal:Pt.test(Ct.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":w.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,w.ajaxSettings),t):zt(w.ajaxSettings,e)},ajaxPrefilter:Ft(It),ajaxTransport:Ft(Wt),ajax:function(t,n){"object"==typeof t&&(n=t,t=void 0),n=n||{};var i,o,a,s,u,l,c,f,p,d,h=w.ajaxSetup({},n),g=h.context||h,y=h.context&&(g.nodeType||g.jquery)?w(g):w.event,v=w.Deferred(),m=w.Callbacks("once memory"),x=h.statusCode||{},b={},T={},C="canceled",E={readyState:0,getResponseHeader:function(e){var t;if(c){if(!s){s={};while(t=Ot.exec(a))s[t[1].toLowerCase()]=t[2]}t=s[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return c?a:null},setRequestHeader:function(e,t){return null==c&&(e=T[e.toLowerCase()]=T[e.toLowerCase()]||e,b[e]=t),this},overrideMimeType:function(e){return null==c&&(h.mimeType=e),this},statusCode:function(e){var t;if(e)if(c)E.always(e[E.status]);else for(t in e)x[t]=[x[t],e[t]];return this},abort:function(e){var t=e||C;return i&&i.abort(t),k(0,t),this}};if(v.promise(E),h.url=((t||h.url||Ct.href)+"").replace(Rt,Ct.protocol+"//"),h.type=n.method||n.type||h.method||h.type,h.dataTypes=(h.dataType||"*").toLowerCase().match(M)||[""],null==h.crossDomain){l=r.createElement("a");try{l.href=h.url,l.href=l.href,h.crossDomain=Bt.protocol+"//"+Bt.host!=l.protocol+"//"+l.host}catch(e){h.crossDomain=!0}}if(h.data&&h.processData&&"string"!=typeof h.data&&(h.data=w.param(h.data,h.traditional)),_t(It,h,n,E),c)return E;(f=w.event&&h.global)&&0==w.active++&&w.event.trigger("ajaxStart"),h.type=h.type.toUpperCase(),h.hasContent=!Mt.test(h.type),o=h.url.replace(Lt,""),h.hasContent?h.data&&h.processData&&0===(h.contentType||"").indexOf("application/x-www-form-urlencoded")&&(h.data=h.data.replace(qt,"+")):(d=h.url.slice(o.length),h.data&&(h.processData||"string"==typeof h.data)&&(o+=(kt.test(o)?"&":"?")+h.data,delete h.data),!1===h.cache&&(o=o.replace(Ht,"$1"),d=(kt.test(o)?"&":"?")+"_="+Et+++d),h.url=o+d),h.ifModified&&(w.lastModified[o]&&E.setRequestHeader("If-Modified-Since",w.lastModified[o]),w.etag[o]&&E.setRequestHeader("If-None-Match",w.etag[o])),(h.data&&h.hasContent&&!1!==h.contentType||n.contentType)&&E.setRequestHeader("Content-Type",h.contentType),E.setRequestHeader("Accept",h.dataTypes[0]&&h.accepts[h.dataTypes[0]]?h.accepts[h.dataTypes[0]]+("*"!==h.dataTypes[0]?", "+$t+"; q=0.01":""):h.accepts["*"]);for(p in h.headers)E.setRequestHeader(p,h.headers[p]);if(h.beforeSend&&(!1===h.beforeSend.call(g,E,h)||c))return E.abort();if(C="abort",m.add(h.complete),E.done(h.success),E.fail(h.error),i=_t(Wt,h,n,E)){if(E.readyState=1,f&&y.trigger("ajaxSend",[E,h]),c)return E;h.async&&h.timeout>0&&(u=e.setTimeout(function(){E.abort("timeout")},h.timeout));try{c=!1,i.send(b,k)}catch(e){if(c)throw e;k(-1,e)}}else k(-1,"No Transport");function k(t,n,r,s){var l,p,d,b,T,C=n;c||(c=!0,u&&e.clearTimeout(u),i=void 0,a=s||"",E.readyState=t>0?4:0,l=t>=200&&t<300||304===t,r&&(b=Xt(h,E,r)),b=Ut(h,b,E,l),l?(h.ifModified&&((T=E.getResponseHeader("Last-Modified"))&&(w.lastModified[o]=T),(T=E.getResponseHeader("etag"))&&(w.etag[o]=T)),204===t||"HEAD"===h.type?C="nocontent":304===t?C="notmodified":(C=b.state,p=b.data,l=!(d=b.error))):(d=C,!t&&C||(C="error",t<0&&(t=0))),E.status=t,E.statusText=(n||C)+"",l?v.resolveWith(g,[p,C,E]):v.rejectWith(g,[E,C,d]),E.statusCode(x),x=void 0,f&&y.trigger(l?"ajaxSuccess":"ajaxError",[E,h,l?p:d]),m.fireWith(g,[E,C]),f&&(y.trigger("ajaxComplete",[E,h]),--w.active||w.event.trigger("ajaxStop")))}return E},getJSON:function(e,t,n){return w.get(e,t,n,"json")},getScript:function(e,t){return w.get(e,void 0,t,"script")}}),w.each(["get","post"],function(e,t){w[t]=function(e,n,r,i){return g(n)&&(i=i||r,r=n,n=void 0),w.ajax(w.extend({url:e,type:t,dataType:i,data:n,success:r},w.isPlainObject(e)&&e))}}),w._evalUrl=function(e){return w.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},w.fn.extend({wrapAll:function(e){var t;return this[0]&&(g(e)&&(e=e.call(this[0])),t=w(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(e){return g(e)?this.each(function(t){w(this).wrapInner(e.call(this,t))}):this.each(function(){var t=w(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=g(e);return this.each(function(n){w(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){w(this).replaceWith(this.childNodes)}),this}}),w.expr.pseudos.hidden=function(e){return!w.expr.pseudos.visible(e)},w.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},w.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch(e){}};var Vt={0:200,1223:204},Gt=w.ajaxSettings.xhr();h.cors=!!Gt&&"withCredentials"in Gt,h.ajax=Gt=!!Gt,w.ajaxTransport(function(t){var n,r;if(h.cors||Gt&&!t.crossDomain)return{send:function(i,o){var a,s=t.xhr();if(s.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(a in t.xhrFields)s[a]=t.xhrFields[a];t.mimeType&&s.overrideMimeType&&s.overrideMimeType(t.mimeType),t.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");for(a in i)s.setRequestHeader(a,i[a]);n=function(e){return function(){n&&(n=r=s.onload=s.onerror=s.onabort=s.ontimeout=s.onreadystatechange=null,"abort"===e?s.abort():"error"===e?"number"!=typeof s.status?o(0,"error"):o(s.status,s.statusText):o(Vt[s.status]||s.status,s.statusText,"text"!==(s.responseType||"text")||"string"!=typeof s.responseText?{binary:s.response}:{text:s.responseText},s.getAllResponseHeaders()))}},s.onload=n(),r=s.onerror=s.ontimeout=n("error"),void 0!==s.onabort?s.onabort=r:s.onreadystatechange=function(){4===s.readyState&&e.setTimeout(function(){n&&r()})},n=n("abort");try{s.send(t.hasContent&&t.data||null)}catch(e){if(n)throw e}},abort:function(){n&&n()}}}),w.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),w.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return w.globalEval(e),e}}}),w.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),w.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(i,o){t=w("<script>").prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&o("error"===e.type?404:200,e.type)}),r.head.appendChild(t[0])},abort:function(){n&&n()}}}});var Yt=[],Qt=/(=)\?(?=&|$)|\?\?/;w.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Yt.pop()||w.expando+"_"+Et++;return this[e]=!0,e}}),w.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,a,s=!1!==t.jsonp&&(Qt.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Qt.test(t.data)&&"data");if(s||"jsonp"===t.dataTypes[0])return i=t.jsonpCallback=g(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(Qt,"$1"+i):!1!==t.jsonp&&(t.url+=(kt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return a||w.error(i+" was not called"),a[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){a=arguments},r.always(function(){void 0===o?w(e).removeProp(i):e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,Yt.push(i)),a&&g(o)&&o(a[0]),a=o=void 0}),"script"}),h.createHTMLDocument=function(){var e=r.implementation.createHTMLDocument("").body;return e.innerHTML="<form></form><form></form>",2===e.childNodes.length}(),w.parseHTML=function(e,t,n){if("string"!=typeof e)return[];"boolean"==typeof t&&(n=t,t=!1);var i,o,a;return t||(h.createHTMLDocument?((i=(t=r.implementation.createHTMLDocument("")).createElement("base")).href=r.location.href,t.head.appendChild(i)):t=r),o=A.exec(e),a=!n&&[],o?[t.createElement(o[1])]:(o=xe([e],t,a),a&&a.length&&w(a).remove(),w.merge([],o.childNodes))},w.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return s>-1&&(r=vt(e.slice(s)),e=e.slice(0,s)),g(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),a.length>0&&w.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?w("<div>").append(w.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},w.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){w.fn[t]=function(e){return this.on(t,e)}}),w.expr.pseudos.animated=function(e){return w.grep(w.timers,function(t){return e===t.elem}).length},w.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l,c=w.css(e,"position"),f=w(e),p={};"static"===c&&(e.style.position="relative"),s=f.offset(),o=w.css(e,"top"),u=w.css(e,"left"),(l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1)?(a=(r=f.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),g(t)&&(t=t.call(e,n,w.extend({},s))),null!=t.top&&(p.top=t.top-s.top+a),null!=t.left&&(p.left=t.left-s.left+i),"using"in t?t.using.call(e,p):f.css(p)}},w.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){w.offset.setOffset(this,e,t)});var t,n,r=this[0];if(r)return r.getClientRects().length?(t=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===w.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===w.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=w(e).offset()).top+=w.css(e,"borderTopWidth",!0),i.left+=w.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-w.css(r,"marginTop",!0),left:t.left-i.left-w.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===w.css(e,"position"))e=e.offsetParent;return e||be})}}),w.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;w.fn[e]=function(r){return z(this,function(e,r,i){var o;if(y(e)?o=e:9===e.nodeType&&(o=e.defaultView),void 0===i)return o?o[t]:e[r];o?o.scrollTo(n?o.pageXOffset:i,n?i:o.pageYOffset):e[r]=i},e,r,arguments.length)}}),w.each(["top","left"],function(e,t){w.cssHooks[t]=_e(h.pixelPosition,function(e,n){if(n)return n=Fe(e,t),We.test(n)?w(e).position()[t]+"px":n})}),w.each({Height:"height",Width:"width"},function(e,t){w.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){w.fn[r]=function(i,o){var a=arguments.length&&(n||"boolean"!=typeof i),s=n||(!0===i||!0===o?"margin":"border");return z(this,function(t,n,i){var o;return y(t)?0===r.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===i?w.css(t,n,s):w.style(t,n,i,s)},t,a?i:void 0,a)}})}),w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){w.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),w.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),w.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),w.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),g(e))return r=o.call(arguments,2),i=function(){return e.apply(t||this,r.concat(o.call(arguments)))},i.guid=e.guid=e.guid||w.guid++,i},w.holdReady=function(e){e?w.readyWait++:w.ready(!0)},w.isArray=Array.isArray,w.parseJSON=JSON.parse,w.nodeName=N,w.isFunction=g,w.isWindow=y,w.camelCase=G,w.type=x,w.now=Date.now,w.isNumeric=function(e){var t=w.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return w});var Jt=e.jQuery,Kt=e.$;return w.noConflict=function(t){return e.$===w&&(e.$=Kt),t&&e.jQuery===w&&(e.jQuery=Jt),w},t||(e.jQuery=e.$=w),w});

;/*!
  * Bootstrap v4.1.1 (https://getbootstrap.com/)
  * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("jquery"),require("popper.js")):"function"==typeof define&&define.amd?define(["exports","jquery","popper.js"],e):e(t.bootstrap={},t.jQuery,t.Popper)}(this,function(t,e,c){"use strict";function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function o(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function h(r){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{},e=Object.keys(s);"function"==typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(s).filter(function(t){return Object.getOwnPropertyDescriptor(s,t).enumerable}))),e.forEach(function(t){var e,n,i;e=r,i=s[n=t],n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i})}return r}e=e&&e.hasOwnProperty("default")?e.default:e,c=c&&c.hasOwnProperty("default")?c.default:c;var r,n,s,a,l,u,f,d,_,g,m,p,v,E,y,T,C,I,A,D,b,S,w,N,O,k,P,L,j,R,H,W,M,x,U,K,F,V,Q,B,Y,G,q,z,X,J,Z,$,tt,et,nt,it,rt,st,ot,at,lt,ht,ct,ut,ft,dt,_t,gt,mt,pt,vt,Et,yt,Tt,Ct,It,At,Dt,bt,St,wt,Nt,Ot,kt,Pt,Lt,jt,Rt,Ht,Wt,Mt,xt,Ut,Kt,Ft,Vt,Qt,Bt,Yt,Gt,qt,zt,Xt,Jt,Zt,$t,te,ee,ne,ie,re,se,oe,ae,le,he,ce,ue,fe,de,_e,ge,me,pe,ve,Ee,ye,Te,Ce,Ie,Ae,De,be,Se,we,Ne,Oe,ke,Pe,Le,je,Re,He,We,Me,xe,Ue,Ke,Fe,Ve,Qe,Be,Ye,Ge,qe,ze,Xe,Je,Ze,$e,tn,en,nn,rn,sn,on,an,ln,hn,cn,un,fn,dn,_n,gn,mn,pn,vn,En,yn,Tn,Cn=function(i){var e="transitionend";function t(t){var e=this,n=!1;return i(this).one(l.TRANSITION_END,function(){n=!0}),setTimeout(function(){n||l.triggerTransitionEnd(e)},t),this}var l={TRANSITION_END:"bsTransitionEnd",getUID:function(t){for(;t+=~~(1e6*Math.random()),document.getElementById(t););return t},getSelectorFromElement:function(t){var e=t.getAttribute("data-target");e&&"#"!==e||(e=t.getAttribute("href")||"");try{return 0<i(document).find(e).length?e:null}catch(t){return null}},getTransitionDurationFromElement:function(t){if(!t)return 0;var e=i(t).css("transition-duration");return parseFloat(e)?(e=e.split(",")[0],1e3*parseFloat(e)):0},reflow:function(t){return t.offsetHeight},triggerTransitionEnd:function(t){i(t).trigger(e)},supportsTransitionEnd:function(){return Boolean(e)},isElement:function(t){return(t[0]||t).nodeType},typeCheckConfig:function(t,e,n){for(var i in n)if(Object.prototype.hasOwnProperty.call(n,i)){var r=n[i],s=e[i],o=s&&l.isElement(s)?"element":(a=s,{}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());if(!new RegExp(r).test(o))throw new Error(t.toUpperCase()+': Option "'+i+'" provided type "'+o+'" but expected type "'+r+'".')}var a}};return i.fn.emulateTransitionEnd=t,i.event.special[l.TRANSITION_END]={bindType:e,delegateType:e,handle:function(t){if(i(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}},l}(e),In=(n="alert",a="."+(s="bs.alert"),l=(r=e).fn[n],u={CLOSE:"close"+a,CLOSED:"closed"+a,CLICK_DATA_API:"click"+a+".data-api"},f="alert",d="fade",_="show",g=function(){function i(t){this._element=t}var t=i.prototype;return t.close=function(t){var e=this._element;t&&(e=this._getRootElement(t)),this._triggerCloseEvent(e).isDefaultPrevented()||this._removeElement(e)},t.dispose=function(){r.removeData(this._element,s),this._element=null},t._getRootElement=function(t){var e=Cn.getSelectorFromElement(t),n=!1;return e&&(n=r(e)[0]),n||(n=r(t).closest("."+f)[0]),n},t._triggerCloseEvent=function(t){var e=r.Event(u.CLOSE);return r(t).trigger(e),e},t._removeElement=function(e){var n=this;if(r(e).removeClass(_),r(e).hasClass(d)){var t=Cn.getTransitionDurationFromElement(e);r(e).one(Cn.TRANSITION_END,function(t){return n._destroyElement(e,t)}).emulateTransitionEnd(t)}else this._destroyElement(e)},t._destroyElement=function(t){r(t).detach().trigger(u.CLOSED).remove()},i._jQueryInterface=function(n){return this.each(function(){var t=r(this),e=t.data(s);e||(e=new i(this),t.data(s,e)),"close"===n&&e[n](this)})},i._handleDismiss=function(e){return function(t){t&&t.preventDefault(),e.close(this)}},o(i,null,[{key:"VERSION",get:function(){return"4.1.1"}}]),i}(),r(document).on(u.CLICK_DATA_API,'[data-dismiss="alert"]',g._handleDismiss(new g)),r.fn[n]=g._jQueryInterface,r.fn[n].Constructor=g,r.fn[n].noConflict=function(){return r.fn[n]=l,g._jQueryInterface},g),An=(p="button",E="."+(v="bs.button"),y=".data-api",T=(m=e).fn[p],C="active",I="btn",D='[data-toggle^="button"]',b='[data-toggle="buttons"]',S="input",w=".active",N=".btn",O={CLICK_DATA_API:"click"+E+y,FOCUS_BLUR_DATA_API:(A="focus")+E+y+" blur"+E+y},k=function(){function n(t){this._element=t}var t=n.prototype;return t.toggle=function(){var t=!0,e=!0,n=m(this._element).closest(b)[0];if(n){var i=m(this._element).find(S)[0];if(i){if("radio"===i.type)if(i.checked&&m(this._element).hasClass(C))t=!1;else{var r=m(n).find(w)[0];r&&m(r).removeClass(C)}if(t){if(i.hasAttribute("disabled")||n.hasAttribute("disabled")||i.classList.contains("disabled")||n.classList.contains("disabled"))return;i.checked=!m(this._element).hasClass(C),m(i).trigger("change")}i.focus(),e=!1}}e&&this._element.setAttribute("aria-pressed",!m(this._element).hasClass(C)),t&&m(this._element).toggleClass(C)},t.dispose=function(){m.removeData(this._element,v),this._element=null},n._jQueryInterface=function(e){return this.each(function(){var t=m(this).data(v);t||(t=new n(this),m(this).data(v,t)),"toggle"===e&&t[e]()})},o(n,null,[{key:"VERSION",get:function(){return"4.1.1"}}]),n}(),m(document).on(O.CLICK_DATA_API,D,function(t){t.preventDefault();var e=t.target;m(e).hasClass(I)||(e=m(e).closest(N)),k._jQueryInterface.call(m(e),"toggle")}).on(O.FOCUS_BLUR_DATA_API,D,function(t){var e=m(t.target).closest(N)[0];m(e).toggleClass(A,/^focus(in)?$/.test(t.type))}),m.fn[p]=k._jQueryInterface,m.fn[p].Constructor=k,m.fn[p].noConflict=function(){return m.fn[p]=T,k._jQueryInterface},k),Dn=(L="carousel",R="."+(j="bs.carousel"),H=".data-api",W=(P=e).fn[L],M={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0},x={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean"},U="next",K="prev",F="left",V="right",Q={SLIDE:"slide"+R,SLID:"slid"+R,KEYDOWN:"keydown"+R,MOUSEENTER:"mouseenter"+R,MOUSELEAVE:"mouseleave"+R,TOUCHEND:"touchend"+R,LOAD_DATA_API:"load"+R+H,CLICK_DATA_API:"click"+R+H},B="carousel",Y="active",G="slide",q="carousel-item-right",z="carousel-item-left",X="carousel-item-next",J="carousel-item-prev",Z={ACTIVE:".active",ACTIVE_ITEM:".active.carousel-item",ITEM:".carousel-item",NEXT_PREV:".carousel-item-next, .carousel-item-prev",INDICATORS:".carousel-indicators",DATA_SLIDE:"[data-slide], [data-slide-to]",DATA_RIDE:'[data-ride="carousel"]'},$=function(){function s(t,e){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this._config=this._getConfig(e),this._element=P(t)[0],this._indicatorsElement=P(this._element).find(Z.INDICATORS)[0],this._addEventListeners()}var t=s.prototype;return t.next=function(){this._isSliding||this._slide(U)},t.nextWhenVisible=function(){!document.hidden&&P(this._element).is(":visible")&&"hidden"!==P(this._element).css("visibility")&&this.next()},t.prev=function(){this._isSliding||this._slide(K)},t.pause=function(t){t||(this._isPaused=!0),P(this._element).find(Z.NEXT_PREV)[0]&&(Cn.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},t.cycle=function(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},t.to=function(t){var e=this;this._activeElement=P(this._element).find(Z.ACTIVE_ITEM)[0];var n=this._getItemIndex(this._activeElement);if(!(t>this._items.length-1||t<0))if(this._isSliding)P(this._element).one(Q.SLID,function(){return e.to(t)});else{if(n===t)return this.pause(),void this.cycle();var i=n<t?U:K;this._slide(i,this._items[t])}},t.dispose=function(){P(this._element).off(R),P.removeData(this._element,j),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},t._getConfig=function(t){return t=h({},M,t),Cn.typeCheckConfig(L,t,x),t},t._addEventListeners=function(){var e=this;this._config.keyboard&&P(this._element).on(Q.KEYDOWN,function(t){return e._keydown(t)}),"hover"===this._config.pause&&(P(this._element).on(Q.MOUSEENTER,function(t){return e.pause(t)}).on(Q.MOUSELEAVE,function(t){return e.cycle(t)}),"ontouchstart"in document.documentElement&&P(this._element).on(Q.TOUCHEND,function(){e.pause(),e.touchTimeout&&clearTimeout(e.touchTimeout),e.touchTimeout=setTimeout(function(t){return e.cycle(t)},500+e._config.interval)}))},t._keydown=function(t){if(!/input|textarea/i.test(t.target.tagName))switch(t.which){case 37:t.preventDefault(),this.prev();break;case 39:t.preventDefault(),this.next()}},t._getItemIndex=function(t){return this._items=P.makeArray(P(t).parent().find(Z.ITEM)),this._items.indexOf(t)},t._getItemByDirection=function(t,e){var n=t===U,i=t===K,r=this._getItemIndex(e),s=this._items.length-1;if((i&&0===r||n&&r===s)&&!this._config.wrap)return e;var o=(r+(t===K?-1:1))%this._items.length;return-1===o?this._items[this._items.length-1]:this._items[o]},t._triggerSlideEvent=function(t,e){var n=this._getItemIndex(t),i=this._getItemIndex(P(this._element).find(Z.ACTIVE_ITEM)[0]),r=P.Event(Q.SLIDE,{relatedTarget:t,direction:e,from:i,to:n});return P(this._element).trigger(r),r},t._setActiveIndicatorElement=function(t){if(this._indicatorsElement){P(this._indicatorsElement).find(Z.ACTIVE).removeClass(Y);var e=this._indicatorsElement.children[this._getItemIndex(t)];e&&P(e).addClass(Y)}},t._slide=function(t,e){var n,i,r,s=this,o=P(this._element).find(Z.ACTIVE_ITEM)[0],a=this._getItemIndex(o),l=e||o&&this._getItemByDirection(t,o),h=this._getItemIndex(l),c=Boolean(this._interval);if(t===U?(n=z,i=X,r=F):(n=q,i=J,r=V),l&&P(l).hasClass(Y))this._isSliding=!1;else if(!this._triggerSlideEvent(l,r).isDefaultPrevented()&&o&&l){this._isSliding=!0,c&&this.pause(),this._setActiveIndicatorElement(l);var u=P.Event(Q.SLID,{relatedTarget:l,direction:r,from:a,to:h});if(P(this._element).hasClass(G)){P(l).addClass(i),Cn.reflow(l),P(o).addClass(n),P(l).addClass(n);var f=Cn.getTransitionDurationFromElement(o);P(o).one(Cn.TRANSITION_END,function(){P(l).removeClass(n+" "+i).addClass(Y),P(o).removeClass(Y+" "+i+" "+n),s._isSliding=!1,setTimeout(function(){return P(s._element).trigger(u)},0)}).emulateTransitionEnd(f)}else P(o).removeClass(Y),P(l).addClass(Y),this._isSliding=!1,P(this._element).trigger(u);c&&this.cycle()}},s._jQueryInterface=function(i){return this.each(function(){var t=P(this).data(j),e=h({},M,P(this).data());"object"==typeof i&&(e=h({},e,i));var n="string"==typeof i?i:e.slide;if(t||(t=new s(this,e),P(this).data(j,t)),"number"==typeof i)t.to(i);else if("string"==typeof n){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}else e.interval&&(t.pause(),t.cycle())})},s._dataApiClickHandler=function(t){var e=Cn.getSelectorFromElement(this);if(e){var n=P(e)[0];if(n&&P(n).hasClass(B)){var i=h({},P(n).data(),P(this).data()),r=this.getAttribute("data-slide-to");r&&(i.interval=!1),s._jQueryInterface.call(P(n),i),r&&P(n).data(j).to(r),t.preventDefault()}}},o(s,null,[{key:"VERSION",get:function(){return"4.1.1"}},{key:"Default",get:function(){return M}}]),s}(),P(document).on(Q.CLICK_DATA_API,Z.DATA_SLIDE,$._dataApiClickHandler),P(window).on(Q.LOAD_DATA_API,function(){P(Z.DATA_RIDE).each(function(){var t=P(this);$._jQueryInterface.call(t,t.data())})}),P.fn[L]=$._jQueryInterface,P.fn[L].Constructor=$,P.fn[L].noConflict=function(){return P.fn[L]=W,$._jQueryInterface},$),bn=(et="collapse",it="."+(nt="bs.collapse"),rt=(tt=e).fn[et],st={toggle:!0,parent:""},ot={toggle:"boolean",parent:"(string|element)"},at={SHOW:"show"+it,SHOWN:"shown"+it,HIDE:"hide"+it,HIDDEN:"hidden"+it,CLICK_DATA_API:"click"+it+".data-api"},lt="show",ht="collapse",ct="collapsing",ut="collapsed",ft="width",dt="height",_t={ACTIVES:".show, .collapsing",DATA_TOGGLE:'[data-toggle="collapse"]'},gt=function(){function a(t,e){this._isTransitioning=!1,this._element=t,this._config=this._getConfig(e),this._triggerArray=tt.makeArray(tt('[data-toggle="collapse"][href="#'+t.id+'"],[data-toggle="collapse"][data-target="#'+t.id+'"]'));for(var n=tt(_t.DATA_TOGGLE),i=0;i<n.length;i++){var r=n[i],s=Cn.getSelectorFromElement(r);null!==s&&0<tt(s).filter(t).length&&(this._selector=s,this._triggerArray.push(r))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var t=a.prototype;return t.toggle=function(){tt(this._element).hasClass(lt)?this.hide():this.show()},t.show=function(){var t,e,n=this;if(!this._isTransitioning&&!tt(this._element).hasClass(lt)&&(this._parent&&0===(t=tt.makeArray(tt(this._parent).find(_t.ACTIVES).filter('[data-parent="'+this._config.parent+'"]'))).length&&(t=null),!(t&&(e=tt(t).not(this._selector).data(nt))&&e._isTransitioning))){var i=tt.Event(at.SHOW);if(tt(this._element).trigger(i),!i.isDefaultPrevented()){t&&(a._jQueryInterface.call(tt(t).not(this._selector),"hide"),e||tt(t).data(nt,null));var r=this._getDimension();tt(this._element).removeClass(ht).addClass(ct),(this._element.style[r]=0)<this._triggerArray.length&&tt(this._triggerArray).removeClass(ut).attr("aria-expanded",!0),this.setTransitioning(!0);var s="scroll"+(r[0].toUpperCase()+r.slice(1)),o=Cn.getTransitionDurationFromElement(this._element);tt(this._element).one(Cn.TRANSITION_END,function(){tt(n._element).removeClass(ct).addClass(ht).addClass(lt),n._element.style[r]="",n.setTransitioning(!1),tt(n._element).trigger(at.SHOWN)}).emulateTransitionEnd(o),this._element.style[r]=this._element[s]+"px"}}},t.hide=function(){var t=this;if(!this._isTransitioning&&tt(this._element).hasClass(lt)){var e=tt.Event(at.HIDE);if(tt(this._element).trigger(e),!e.isDefaultPrevented()){var n=this._getDimension();if(this._element.style[n]=this._element.getBoundingClientRect()[n]+"px",Cn.reflow(this._element),tt(this._element).addClass(ct).removeClass(ht).removeClass(lt),0<this._triggerArray.length)for(var i=0;i<this._triggerArray.length;i++){var r=this._triggerArray[i],s=Cn.getSelectorFromElement(r);if(null!==s)tt(s).hasClass(lt)||tt(r).addClass(ut).attr("aria-expanded",!1)}this.setTransitioning(!0);this._element.style[n]="";var o=Cn.getTransitionDurationFromElement(this._element);tt(this._element).one(Cn.TRANSITION_END,function(){t.setTransitioning(!1),tt(t._element).removeClass(ct).addClass(ht).trigger(at.HIDDEN)}).emulateTransitionEnd(o)}}},t.setTransitioning=function(t){this._isTransitioning=t},t.dispose=function(){tt.removeData(this._element,nt),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},t._getConfig=function(t){return(t=h({},st,t)).toggle=Boolean(t.toggle),Cn.typeCheckConfig(et,t,ot),t},t._getDimension=function(){return tt(this._element).hasClass(ft)?ft:dt},t._getParent=function(){var n=this,t=null;Cn.isElement(this._config.parent)?(t=this._config.parent,"undefined"!=typeof this._config.parent.jquery&&(t=this._config.parent[0])):t=tt(this._config.parent)[0];var e='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]';return tt(t).find(e).each(function(t,e){n._addAriaAndCollapsedClass(a._getTargetFromElement(e),[e])}),t},t._addAriaAndCollapsedClass=function(t,e){if(t){var n=tt(t).hasClass(lt);0<e.length&&tt(e).toggleClass(ut,!n).attr("aria-expanded",n)}},a._getTargetFromElement=function(t){var e=Cn.getSelectorFromElement(t);return e?tt(e)[0]:null},a._jQueryInterface=function(i){return this.each(function(){var t=tt(this),e=t.data(nt),n=h({},st,t.data(),"object"==typeof i&&i?i:{});if(!e&&n.toggle&&/show|hide/.test(i)&&(n.toggle=!1),e||(e=new a(this,n),t.data(nt,e)),"string"==typeof i){if("undefined"==typeof e[i])throw new TypeError('No method named "'+i+'"');e[i]()}})},o(a,null,[{key:"VERSION",get:function(){return"4.1.1"}},{key:"Default",get:function(){return st}}]),a}(),tt(document).on(at.CLICK_DATA_API,_t.DATA_TOGGLE,function(t){"A"===t.currentTarget.tagName&&t.preventDefault();var n=tt(this),e=Cn.getSelectorFromElement(this);tt(e).each(function(){var t=tt(this),e=t.data(nt)?"toggle":n.data();gt._jQueryInterface.call(t,e)})}),tt.fn[et]=gt._jQueryInterface,tt.fn[et].Constructor=gt,tt.fn[et].noConflict=function(){return tt.fn[et]=rt,gt._jQueryInterface},gt),Sn=(pt="dropdown",Et="."+(vt="bs.dropdown"),yt=".data-api",Tt=(mt=e).fn[pt],Ct=new RegExp("38|40|27"),It={HIDE:"hide"+Et,HIDDEN:"hidden"+Et,SHOW:"show"+Et,SHOWN:"shown"+Et,CLICK:"click"+Et,CLICK_DATA_API:"click"+Et+yt,KEYDOWN_DATA_API:"keydown"+Et+yt,KEYUP_DATA_API:"keyup"+Et+yt},At="disabled",Dt="show",bt="dropup",St="dropright",wt="dropleft",Nt="dropdown-menu-right",Ot="position-static",kt='[data-toggle="dropdown"]',Pt=".dropdown form",Lt=".dropdown-menu",jt=".navbar-nav",Rt=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",Ht="top-start",Wt="top-end",Mt="bottom-start",xt="bottom-end",Ut="right-start",Kt="left-start",Ft={offset:0,flip:!0,boundary:"scrollParent",reference:"toggle",display:"dynamic"},Vt={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)",reference:"(string|element)",display:"string"},Qt=function(){function l(t,e){this._element=t,this._popper=null,this._config=this._getConfig(e),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}var t=l.prototype;return t.toggle=function(){if(!this._element.disabled&&!mt(this._element).hasClass(At)){var t=l._getParentFromElement(this._element),e=mt(this._menu).hasClass(Dt);if(l._clearMenus(),!e){var n={relatedTarget:this._element},i=mt.Event(It.SHOW,n);if(mt(t).trigger(i),!i.isDefaultPrevented()){if(!this._inNavbar){if("undefined"==typeof c)throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");var r=this._element;"parent"===this._config.reference?r=t:Cn.isElement(this._config.reference)&&(r=this._config.reference,"undefined"!=typeof this._config.reference.jquery&&(r=this._config.reference[0])),"scrollParent"!==this._config.boundary&&mt(t).addClass(Ot),this._popper=new c(r,this._menu,this._getPopperConfig())}"ontouchstart"in document.documentElement&&0===mt(t).closest(jt).length&&mt(document.body).children().on("mouseover",null,mt.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),mt(this._menu).toggleClass(Dt),mt(t).toggleClass(Dt).trigger(mt.Event(It.SHOWN,n))}}}},t.dispose=function(){mt.removeData(this._element,vt),mt(this._element).off(Et),this._element=null,(this._menu=null)!==this._popper&&(this._popper.destroy(),this._popper=null)},t.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},t._addEventListeners=function(){var e=this;mt(this._element).on(It.CLICK,function(t){t.preventDefault(),t.stopPropagation(),e.toggle()})},t._getConfig=function(t){return t=h({},this.constructor.Default,mt(this._element).data(),t),Cn.typeCheckConfig(pt,t,this.constructor.DefaultType),t},t._getMenuElement=function(){if(!this._menu){var t=l._getParentFromElement(this._element);this._menu=mt(t).find(Lt)[0]}return this._menu},t._getPlacement=function(){var t=mt(this._element).parent(),e=Mt;return t.hasClass(bt)?(e=Ht,mt(this._menu).hasClass(Nt)&&(e=Wt)):t.hasClass(St)?e=Ut:t.hasClass(wt)?e=Kt:mt(this._menu).hasClass(Nt)&&(e=xt),e},t._detectNavbar=function(){return 0<mt(this._element).closest(".navbar").length},t._getPopperConfig=function(){var e=this,t={};"function"==typeof this._config.offset?t.fn=function(t){return t.offsets=h({},t.offsets,e._config.offset(t.offsets)||{}),t}:t.offset=this._config.offset;var n={placement:this._getPlacement(),modifiers:{offset:t,flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}};return"static"===this._config.display&&(n.modifiers.applyStyle={enabled:!1}),n},l._jQueryInterface=function(e){return this.each(function(){var t=mt(this).data(vt);if(t||(t=new l(this,"object"==typeof e?e:null),mt(this).data(vt,t)),"string"==typeof e){if("undefined"==typeof t[e])throw new TypeError('No method named "'+e+'"');t[e]()}})},l._clearMenus=function(t){if(!t||3!==t.which&&("keyup"!==t.type||9===t.which))for(var e=mt.makeArray(mt(kt)),n=0;n<e.length;n++){var i=l._getParentFromElement(e[n]),r=mt(e[n]).data(vt),s={relatedTarget:e[n]};if(r){var o=r._menu;if(mt(i).hasClass(Dt)&&!(t&&("click"===t.type&&/input|textarea/i.test(t.target.tagName)||"keyup"===t.type&&9===t.which)&&mt.contains(i,t.target))){var a=mt.Event(It.HIDE,s);mt(i).trigger(a),a.isDefaultPrevented()||("ontouchstart"in document.documentElement&&mt(document.body).children().off("mouseover",null,mt.noop),e[n].setAttribute("aria-expanded","false"),mt(o).removeClass(Dt),mt(i).removeClass(Dt).trigger(mt.Event(It.HIDDEN,s)))}}}},l._getParentFromElement=function(t){var e,n=Cn.getSelectorFromElement(t);return n&&(e=mt(n)[0]),e||t.parentNode},l._dataApiKeydownHandler=function(t){if((/input|textarea/i.test(t.target.tagName)?!(32===t.which||27!==t.which&&(40!==t.which&&38!==t.which||mt(t.target).closest(Lt).length)):Ct.test(t.which))&&(t.preventDefault(),t.stopPropagation(),!this.disabled&&!mt(this).hasClass(At))){var e=l._getParentFromElement(this),n=mt(e).hasClass(Dt);if((n||27===t.which&&32===t.which)&&(!n||27!==t.which&&32!==t.which)){var i=mt(e).find(Rt).get();if(0!==i.length){var r=i.indexOf(t.target);38===t.which&&0<r&&r--,40===t.which&&r<i.length-1&&r++,r<0&&(r=0),i[r].focus()}}else{if(27===t.which){var s=mt(e).find(kt)[0];mt(s).trigger("focus")}mt(this).trigger("click")}}},o(l,null,[{key:"VERSION",get:function(){return"4.1.1"}},{key:"Default",get:function(){return Ft}},{key:"DefaultType",get:function(){return Vt}}]),l}(),mt(document).on(It.KEYDOWN_DATA_API,kt,Qt._dataApiKeydownHandler).on(It.KEYDOWN_DATA_API,Lt,Qt._dataApiKeydownHandler).on(It.CLICK_DATA_API+" "+It.KEYUP_DATA_API,Qt._clearMenus).on(It.CLICK_DATA_API,kt,function(t){t.preventDefault(),t.stopPropagation(),Qt._jQueryInterface.call(mt(this),"toggle")}).on(It.CLICK_DATA_API,Pt,function(t){t.stopPropagation()}),mt.fn[pt]=Qt._jQueryInterface,mt.fn[pt].Constructor=Qt,mt.fn[pt].noConflict=function(){return mt.fn[pt]=Tt,Qt._jQueryInterface},Qt),wn=(Yt="modal",qt="."+(Gt="bs.modal"),zt=(Bt=e).fn[Yt],Xt={backdrop:!0,keyboard:!0,focus:!0,show:!0},Jt={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},Zt={HIDE:"hide"+qt,HIDDEN:"hidden"+qt,SHOW:"show"+qt,SHOWN:"shown"+qt,FOCUSIN:"focusin"+qt,RESIZE:"resize"+qt,CLICK_DISMISS:"click.dismiss"+qt,KEYDOWN_DISMISS:"keydown.dismiss"+qt,MOUSEUP_DISMISS:"mouseup.dismiss"+qt,MOUSEDOWN_DISMISS:"mousedown.dismiss"+qt,CLICK_DATA_API:"click"+qt+".data-api"},$t="modal-scrollbar-measure",te="modal-backdrop",ee="modal-open",ne="fade",ie="show",re={DIALOG:".modal-dialog",DATA_TOGGLE:'[data-toggle="modal"]',DATA_DISMISS:'[data-dismiss="modal"]',FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"},se=function(){function r(t,e){this._config=this._getConfig(e),this._element=t,this._dialog=Bt(t).find(re.DIALOG)[0],this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._scrollbarWidth=0}var t=r.prototype;return t.toggle=function(t){return this._isShown?this.hide():this.show(t)},t.show=function(t){var e=this;if(!this._isTransitioning&&!this._isShown){Bt(this._element).hasClass(ne)&&(this._isTransitioning=!0);var n=Bt.Event(Zt.SHOW,{relatedTarget:t});Bt(this._element).trigger(n),this._isShown||n.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),Bt(document.body).addClass(ee),this._setEscapeEvent(),this._setResizeEvent(),Bt(this._element).on(Zt.CLICK_DISMISS,re.DATA_DISMISS,function(t){return e.hide(t)}),Bt(this._dialog).on(Zt.MOUSEDOWN_DISMISS,function(){Bt(e._element).one(Zt.MOUSEUP_DISMISS,function(t){Bt(t.target).is(e._element)&&(e._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return e._showElement(t)}))}},t.hide=function(t){var e=this;if(t&&t.preventDefault(),!this._isTransitioning&&this._isShown){var n=Bt.Event(Zt.HIDE);if(Bt(this._element).trigger(n),this._isShown&&!n.isDefaultPrevented()){this._isShown=!1;var i=Bt(this._element).hasClass(ne);if(i&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),Bt(document).off(Zt.FOCUSIN),Bt(this._element).removeClass(ie),Bt(this._element).off(Zt.CLICK_DISMISS),Bt(this._dialog).off(Zt.MOUSEDOWN_DISMISS),i){var r=Cn.getTransitionDurationFromElement(this._element);Bt(this._element).one(Cn.TRANSITION_END,function(t){return e._hideModal(t)}).emulateTransitionEnd(r)}else this._hideModal()}}},t.dispose=function(){Bt.removeData(this._element,Gt),Bt(window,document,this._element,this._backdrop).off(qt),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._scrollbarWidth=null},t.handleUpdate=function(){this._adjustDialog()},t._getConfig=function(t){return t=h({},Xt,t),Cn.typeCheckConfig(Yt,t,Jt),t},t._showElement=function(t){var e=this,n=Bt(this._element).hasClass(ne);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.scrollTop=0,n&&Cn.reflow(this._element),Bt(this._element).addClass(ie),this._config.focus&&this._enforceFocus();var i=Bt.Event(Zt.SHOWN,{relatedTarget:t}),r=function(){e._config.focus&&e._element.focus(),e._isTransitioning=!1,Bt(e._element).trigger(i)};if(n){var s=Cn.getTransitionDurationFromElement(this._element);Bt(this._dialog).one(Cn.TRANSITION_END,r).emulateTransitionEnd(s)}else r()},t._enforceFocus=function(){var e=this;Bt(document).off(Zt.FOCUSIN).on(Zt.FOCUSIN,function(t){document!==t.target&&e._element!==t.target&&0===Bt(e._element).has(t.target).length&&e._element.focus()})},t._setEscapeEvent=function(){var e=this;this._isShown&&this._config.keyboard?Bt(this._element).on(Zt.KEYDOWN_DISMISS,function(t){27===t.which&&(t.preventDefault(),e.hide())}):this._isShown||Bt(this._element).off(Zt.KEYDOWN_DISMISS)},t._setResizeEvent=function(){var e=this;this._isShown?Bt(window).on(Zt.RESIZE,function(t){return e.handleUpdate(t)}):Bt(window).off(Zt.RESIZE)},t._hideModal=function(){var t=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._isTransitioning=!1,this._showBackdrop(function(){Bt(document.body).removeClass(ee),t._resetAdjustments(),t._resetScrollbar(),Bt(t._element).trigger(Zt.HIDDEN)})},t._removeBackdrop=function(){this._backdrop&&(Bt(this._backdrop).remove(),this._backdrop=null)},t._showBackdrop=function(t){var e=this,n=Bt(this._element).hasClass(ne)?ne:"";if(this._isShown&&this._config.backdrop){if(this._backdrop=document.createElement("div"),this._backdrop.className=te,n&&Bt(this._backdrop).addClass(n),Bt(this._backdrop).appendTo(document.body),Bt(this._element).on(Zt.CLICK_DISMISS,function(t){e._ignoreBackdropClick?e._ignoreBackdropClick=!1:t.target===t.currentTarget&&("static"===e._config.backdrop?e._element.focus():e.hide())}),n&&Cn.reflow(this._backdrop),Bt(this._backdrop).addClass(ie),!t)return;if(!n)return void t();var i=Cn.getTransitionDurationFromElement(this._backdrop);Bt(this._backdrop).one(Cn.TRANSITION_END,t).emulateTransitionEnd(i)}else if(!this._isShown&&this._backdrop){Bt(this._backdrop).removeClass(ie);var r=function(){e._removeBackdrop(),t&&t()};if(Bt(this._element).hasClass(ne)){var s=Cn.getTransitionDurationFromElement(this._backdrop);Bt(this._backdrop).one(Cn.TRANSITION_END,r).emulateTransitionEnd(s)}else r()}else t&&t()},t._adjustDialog=function(){var t=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&t&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!t&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},t._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},t._checkScrollbar=function(){var t=document.body.getBoundingClientRect();this._isBodyOverflowing=t.left+t.right<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},t._setScrollbar=function(){var r=this;if(this._isBodyOverflowing){Bt(re.FIXED_CONTENT).each(function(t,e){var n=Bt(e)[0].style.paddingRight,i=Bt(e).css("padding-right");Bt(e).data("padding-right",n).css("padding-right",parseFloat(i)+r._scrollbarWidth+"px")}),Bt(re.STICKY_CONTENT).each(function(t,e){var n=Bt(e)[0].style.marginRight,i=Bt(e).css("margin-right");Bt(e).data("margin-right",n).css("margin-right",parseFloat(i)-r._scrollbarWidth+"px")}),Bt(re.NAVBAR_TOGGLER).each(function(t,e){var n=Bt(e)[0].style.marginRight,i=Bt(e).css("margin-right");Bt(e).data("margin-right",n).css("margin-right",parseFloat(i)+r._scrollbarWidth+"px")});var t=document.body.style.paddingRight,e=Bt(document.body).css("padding-right");Bt(document.body).data("padding-right",t).css("padding-right",parseFloat(e)+this._scrollbarWidth+"px")}},t._resetScrollbar=function(){Bt(re.FIXED_CONTENT).each(function(t,e){var n=Bt(e).data("padding-right");"undefined"!=typeof n&&Bt(e).css("padding-right",n).removeData("padding-right")}),Bt(re.STICKY_CONTENT+", "+re.NAVBAR_TOGGLER).each(function(t,e){var n=Bt(e).data("margin-right");"undefined"!=typeof n&&Bt(e).css("margin-right",n).removeData("margin-right")});var t=Bt(document.body).data("padding-right");"undefined"!=typeof t&&Bt(document.body).css("padding-right",t).removeData("padding-right")},t._getScrollbarWidth=function(){var t=document.createElement("div");t.className=$t,document.body.appendChild(t);var e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e},r._jQueryInterface=function(n,i){return this.each(function(){var t=Bt(this).data(Gt),e=h({},Xt,Bt(this).data(),"object"==typeof n&&n?n:{});if(t||(t=new r(this,e),Bt(this).data(Gt,t)),"string"==typeof n){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n](i)}else e.show&&t.show(i)})},o(r,null,[{key:"VERSION",get:function(){return"4.1.1"}},{key:"Default",get:function(){return Xt}}]),r}(),Bt(document).on(Zt.CLICK_DATA_API,re.DATA_TOGGLE,function(t){var e,n=this,i=Cn.getSelectorFromElement(this);i&&(e=Bt(i)[0]);var r=Bt(e).data(Gt)?"toggle":h({},Bt(e).data(),Bt(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||t.preventDefault();var s=Bt(e).one(Zt.SHOW,function(t){t.isDefaultPrevented()||s.one(Zt.HIDDEN,function(){Bt(n).is(":visible")&&n.focus()})});se._jQueryInterface.call(Bt(e),r,this)}),Bt.fn[Yt]=se._jQueryInterface,Bt.fn[Yt].Constructor=se,Bt.fn[Yt].noConflict=function(){return Bt.fn[Yt]=zt,se._jQueryInterface},se),Nn=(ae="tooltip",he="."+(le="bs.tooltip"),ce=(oe=e).fn[ae],ue="bs-tooltip",fe=new RegExp("(^|\\s)"+ue+"\\S+","g"),ge={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!(_e={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"}),selector:!(de={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)"}),placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent"},pe="out",ve={HIDE:"hide"+he,HIDDEN:"hidden"+he,SHOW:(me="show")+he,SHOWN:"shown"+he,INSERTED:"inserted"+he,CLICK:"click"+he,FOCUSIN:"focusin"+he,FOCUSOUT:"focusout"+he,MOUSEENTER:"mouseenter"+he,MOUSELEAVE:"mouseleave"+he},Ee="fade",ye="show",Te=".tooltip-inner",Ce=".arrow",Ie="hover",Ae="focus",De="click",be="manual",Se=function(){function i(t,e){if("undefined"==typeof c)throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=t,this.config=this._getConfig(e),this.tip=null,this._setListeners()}var t=i.prototype;return t.enable=function(){this._isEnabled=!0},t.disable=function(){this._isEnabled=!1},t.toggleEnabled=function(){this._isEnabled=!this._isEnabled},t.toggle=function(t){if(this._isEnabled)if(t){var e=this.constructor.DATA_KEY,n=oe(t.currentTarget).data(e);n||(n=new this.constructor(t.currentTarget,this._getDelegateConfig()),oe(t.currentTarget).data(e,n)),n._activeTrigger.click=!n._activeTrigger.click,n._isWithActiveTrigger()?n._enter(null,n):n._leave(null,n)}else{if(oe(this.getTipElement()).hasClass(ye))return void this._leave(null,this);this._enter(null,this)}},t.dispose=function(){clearTimeout(this._timeout),oe.removeData(this.element,this.constructor.DATA_KEY),oe(this.element).off(this.constructor.EVENT_KEY),oe(this.element).closest(".modal").off("hide.bs.modal"),this.tip&&oe(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,(this._activeTrigger=null)!==this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},t.show=function(){var e=this;if("none"===oe(this.element).css("display"))throw new Error("Please use show on visible elements");var t=oe.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){oe(this.element).trigger(t);var n=oe.contains(this.element.ownerDocument.documentElement,this.element);if(t.isDefaultPrevented()||!n)return;var i=this.getTipElement(),r=Cn.getUID(this.constructor.NAME);i.setAttribute("id",r),this.element.setAttribute("aria-describedby",r),this.setContent(),this.config.animation&&oe(i).addClass(Ee);var s="function"==typeof this.config.placement?this.config.placement.call(this,i,this.element):this.config.placement,o=this._getAttachment(s);this.addAttachmentClass(o);var a=!1===this.config.container?document.body:oe(this.config.container);oe(i).data(this.constructor.DATA_KEY,this),oe.contains(this.element.ownerDocument.documentElement,this.tip)||oe(i).appendTo(a),oe(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new c(this.element,i,{placement:o,modifiers:{offset:{offset:this.config.offset},flip:{behavior:this.config.fallbackPlacement},arrow:{element:Ce},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function(t){t.originalPlacement!==t.placement&&e._handlePopperPlacementChange(t)},onUpdate:function(t){e._handlePopperPlacementChange(t)}}),oe(i).addClass(ye),"ontouchstart"in document.documentElement&&oe(document.body).children().on("mouseover",null,oe.noop);var l=function(){e.config.animation&&e._fixTransition();var t=e._hoverState;e._hoverState=null,oe(e.element).trigger(e.constructor.Event.SHOWN),t===pe&&e._leave(null,e)};if(oe(this.tip).hasClass(Ee)){var h=Cn.getTransitionDurationFromElement(this.tip);oe(this.tip).one(Cn.TRANSITION_END,l).emulateTransitionEnd(h)}else l()}},t.hide=function(t){var e=this,n=this.getTipElement(),i=oe.Event(this.constructor.Event.HIDE),r=function(){e._hoverState!==me&&n.parentNode&&n.parentNode.removeChild(n),e._cleanTipClass(),e.element.removeAttribute("aria-describedby"),oe(e.element).trigger(e.constructor.Event.HIDDEN),null!==e._popper&&e._popper.destroy(),t&&t()};if(oe(this.element).trigger(i),!i.isDefaultPrevented()){if(oe(n).removeClass(ye),"ontouchstart"in document.documentElement&&oe(document.body).children().off("mouseover",null,oe.noop),this._activeTrigger[De]=!1,this._activeTrigger[Ae]=!1,this._activeTrigger[Ie]=!1,oe(this.tip).hasClass(Ee)){var s=Cn.getTransitionDurationFromElement(n);oe(n).one(Cn.TRANSITION_END,r).emulateTransitionEnd(s)}else r();this._hoverState=""}},t.update=function(){null!==this._popper&&this._popper.scheduleUpdate()},t.isWithContent=function(){return Boolean(this.getTitle())},t.addAttachmentClass=function(t){oe(this.getTipElement()).addClass(ue+"-"+t)},t.getTipElement=function(){return this.tip=this.tip||oe(this.config.template)[0],this.tip},t.setContent=function(){var t=oe(this.getTipElement());this.setElementContent(t.find(Te),this.getTitle()),t.removeClass(Ee+" "+ye)},t.setElementContent=function(t,e){var n=this.config.html;"object"==typeof e&&(e.nodeType||e.jquery)?n?oe(e).parent().is(t)||t.empty().append(e):t.text(oe(e).text()):t[n?"html":"text"](e)},t.getTitle=function(){var t=this.element.getAttribute("data-original-title");return t||(t="function"==typeof this.config.title?this.config.title.call(this.element):this.config.title),t},t._getAttachment=function(t){return _e[t.toUpperCase()]},t._setListeners=function(){var i=this;this.config.trigger.split(" ").forEach(function(t){if("click"===t)oe(i.element).on(i.constructor.Event.CLICK,i.config.selector,function(t){return i.toggle(t)});else if(t!==be){var e=t===Ie?i.constructor.Event.MOUSEENTER:i.constructor.Event.FOCUSIN,n=t===Ie?i.constructor.Event.MOUSELEAVE:i.constructor.Event.FOCUSOUT;oe(i.element).on(e,i.config.selector,function(t){return i._enter(t)}).on(n,i.config.selector,function(t){return i._leave(t)})}oe(i.element).closest(".modal").on("hide.bs.modal",function(){return i.hide()})}),this.config.selector?this.config=h({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},t._fixTitle=function(){var t=typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title")||"string"!==t)&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},t._enter=function(t,e){var n=this.constructor.DATA_KEY;(e=e||oe(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),oe(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusin"===t.type?Ae:Ie]=!0),oe(e.getTipElement()).hasClass(ye)||e._hoverState===me?e._hoverState=me:(clearTimeout(e._timeout),e._hoverState=me,e.config.delay&&e.config.delay.show?e._timeout=setTimeout(function(){e._hoverState===me&&e.show()},e.config.delay.show):e.show())},t._leave=function(t,e){var n=this.constructor.DATA_KEY;(e=e||oe(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),oe(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusout"===t.type?Ae:Ie]=!1),e._isWithActiveTrigger()||(clearTimeout(e._timeout),e._hoverState=pe,e.config.delay&&e.config.delay.hide?e._timeout=setTimeout(function(){e._hoverState===pe&&e.hide()},e.config.delay.hide):e.hide())},t._isWithActiveTrigger=function(){for(var t in this._activeTrigger)if(this._activeTrigger[t])return!0;return!1},t._getConfig=function(t){return"number"==typeof(t=h({},this.constructor.Default,oe(this.element).data(),"object"==typeof t&&t?t:{})).delay&&(t.delay={show:t.delay,hide:t.delay}),"number"==typeof t.title&&(t.title=t.title.toString()),"number"==typeof t.content&&(t.content=t.content.toString()),Cn.typeCheckConfig(ae,t,this.constructor.DefaultType),t},t._getDelegateConfig=function(){var t={};if(this.config)for(var e in this.config)this.constructor.Default[e]!==this.config[e]&&(t[e]=this.config[e]);return t},t._cleanTipClass=function(){var t=oe(this.getTipElement()),e=t.attr("class").match(fe);null!==e&&0<e.length&&t.removeClass(e.join(""))},t._handlePopperPlacementChange=function(t){this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(t.placement))},t._fixTransition=function(){var t=this.getTipElement(),e=this.config.animation;null===t.getAttribute("x-placement")&&(oe(t).removeClass(Ee),this.config.animation=!1,this.hide(),this.show(),this.config.animation=e)},i._jQueryInterface=function(n){return this.each(function(){var t=oe(this).data(le),e="object"==typeof n&&n;if((t||!/dispose|hide/.test(n))&&(t||(t=new i(this,e),oe(this).data(le,t)),"string"==typeof n)){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}})},o(i,null,[{key:"VERSION",get:function(){return"4.1.1"}},{key:"Default",get:function(){return ge}},{key:"NAME",get:function(){return ae}},{key:"DATA_KEY",get:function(){return le}},{key:"Event",get:function(){return ve}},{key:"EVENT_KEY",get:function(){return he}},{key:"DefaultType",get:function(){return de}}]),i}(),oe.fn[ae]=Se._jQueryInterface,oe.fn[ae].Constructor=Se,oe.fn[ae].noConflict=function(){return oe.fn[ae]=ce,Se._jQueryInterface},Se),On=(Ne="popover",ke="."+(Oe="bs.popover"),Pe=(we=e).fn[Ne],Le="bs-popover",je=new RegExp("(^|\\s)"+Le+"\\S+","g"),Re=h({},Nn.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),He=h({},Nn.DefaultType,{content:"(string|element|function)"}),We="fade",xe=".popover-header",Ue=".popover-body",Ke={HIDE:"hide"+ke,HIDDEN:"hidden"+ke,SHOW:(Me="show")+ke,SHOWN:"shown"+ke,INSERTED:"inserted"+ke,CLICK:"click"+ke,FOCUSIN:"focusin"+ke,FOCUSOUT:"focusout"+ke,MOUSEENTER:"mouseenter"+ke,MOUSELEAVE:"mouseleave"+ke},Fe=function(t){var e,n;function i(){return t.apply(this,arguments)||this}n=t,(e=i).prototype=Object.create(n.prototype),(e.prototype.constructor=e).__proto__=n;var r=i.prototype;return r.isWithContent=function(){return this.getTitle()||this._getContent()},r.addAttachmentClass=function(t){we(this.getTipElement()).addClass(Le+"-"+t)},r.getTipElement=function(){return this.tip=this.tip||we(this.config.template)[0],this.tip},r.setContent=function(){var t=we(this.getTipElement());this.setElementContent(t.find(xe),this.getTitle());var e=this._getContent();"function"==typeof e&&(e=e.call(this.element)),this.setElementContent(t.find(Ue),e),t.removeClass(We+" "+Me)},r._getContent=function(){return this.element.getAttribute("data-content")||this.config.content},r._cleanTipClass=function(){var t=we(this.getTipElement()),e=t.attr("class").match(je);null!==e&&0<e.length&&t.removeClass(e.join(""))},i._jQueryInterface=function(n){return this.each(function(){var t=we(this).data(Oe),e="object"==typeof n?n:null;if((t||!/destroy|hide/.test(n))&&(t||(t=new i(this,e),we(this).data(Oe,t)),"string"==typeof n)){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}})},o(i,null,[{key:"VERSION",get:function(){return"4.1.1"}},{key:"Default",get:function(){return Re}},{key:"NAME",get:function(){return Ne}},{key:"DATA_KEY",get:function(){return Oe}},{key:"Event",get:function(){return Ke}},{key:"EVENT_KEY",get:function(){return ke}},{key:"DefaultType",get:function(){return He}}]),i}(Nn),we.fn[Ne]=Fe._jQueryInterface,we.fn[Ne].Constructor=Fe,we.fn[Ne].noConflict=function(){return we.fn[Ne]=Pe,Fe._jQueryInterface},Fe),kn=(Qe="scrollspy",Ye="."+(Be="bs.scrollspy"),Ge=(Ve=e).fn[Qe],qe={offset:10,method:"auto",target:""},ze={offset:"number",method:"string",target:"(string|element)"},Xe={ACTIVATE:"activate"+Ye,SCROLL:"scroll"+Ye,LOAD_DATA_API:"load"+Ye+".data-api"},Je="dropdown-item",Ze="active",$e={DATA_SPY:'[data-spy="scroll"]',ACTIVE:".active",NAV_LIST_GROUP:".nav, .list-group",NAV_LINKS:".nav-link",NAV_ITEMS:".nav-item",LIST_ITEMS:".list-group-item",DROPDOWN:".dropdown",DROPDOWN_ITEMS:".dropdown-item",DROPDOWN_TOGGLE:".dropdown-toggle"},tn="offset",en="position",nn=function(){function n(t,e){var n=this;this._element=t,this._scrollElement="BODY"===t.tagName?window:t,this._config=this._getConfig(e),this._selector=this._config.target+" "+$e.NAV_LINKS+","+this._config.target+" "+$e.LIST_ITEMS+","+this._config.target+" "+$e.DROPDOWN_ITEMS,this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,Ve(this._scrollElement).on(Xe.SCROLL,function(t){return n._process(t)}),this.refresh(),this._process()}var t=n.prototype;return t.refresh=function(){var e=this,t=this._scrollElement===this._scrollElement.window?tn:en,r="auto"===this._config.method?t:this._config.method,s=r===en?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),Ve.makeArray(Ve(this._selector)).map(function(t){var e,n=Cn.getSelectorFromElement(t);if(n&&(e=Ve(n)[0]),e){var i=e.getBoundingClientRect();if(i.width||i.height)return[Ve(e)[r]().top+s,n]}return null}).filter(function(t){return t}).sort(function(t,e){return t[0]-e[0]}).forEach(function(t){e._offsets.push(t[0]),e._targets.push(t[1])})},t.dispose=function(){Ve.removeData(this._element,Be),Ve(this._scrollElement).off(Ye),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},t._getConfig=function(t){if("string"!=typeof(t=h({},qe,"object"==typeof t&&t?t:{})).target){var e=Ve(t.target).attr("id");e||(e=Cn.getUID(Qe),Ve(t.target).attr("id",e)),t.target="#"+e}return Cn.typeCheckConfig(Qe,t,ze),t},t._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},t._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},t._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},t._process=function(){var t=this._getScrollTop()+this._config.offset,e=this._getScrollHeight(),n=this._config.offset+e-this._getOffsetHeight();if(this._scrollHeight!==e&&this.refresh(),n<=t){var i=this._targets[this._targets.length-1];this._activeTarget!==i&&this._activate(i)}else{if(this._activeTarget&&t<this._offsets[0]&&0<this._offsets[0])return this._activeTarget=null,void this._clear();for(var r=this._offsets.length;r--;){this._activeTarget!==this._targets[r]&&t>=this._offsets[r]&&("undefined"==typeof this._offsets[r+1]||t<this._offsets[r+1])&&this._activate(this._targets[r])}}},t._activate=function(e){this._activeTarget=e,this._clear();var t=this._selector.split(",");t=t.map(function(t){return t+'[data-target="'+e+'"],'+t+'[href="'+e+'"]'});var n=Ve(t.join(","));n.hasClass(Je)?(n.closest($e.DROPDOWN).find($e.DROPDOWN_TOGGLE).addClass(Ze),n.addClass(Ze)):(n.addClass(Ze),n.parents($e.NAV_LIST_GROUP).prev($e.NAV_LINKS+", "+$e.LIST_ITEMS).addClass(Ze),n.parents($e.NAV_LIST_GROUP).prev($e.NAV_ITEMS).children($e.NAV_LINKS).addClass(Ze)),Ve(this._scrollElement).trigger(Xe.ACTIVATE,{relatedTarget:e})},t._clear=function(){Ve(this._selector).filter($e.ACTIVE).removeClass(Ze)},n._jQueryInterface=function(e){return this.each(function(){var t=Ve(this).data(Be);if(t||(t=new n(this,"object"==typeof e&&e),Ve(this).data(Be,t)),"string"==typeof e){if("undefined"==typeof t[e])throw new TypeError('No method named "'+e+'"');t[e]()}})},o(n,null,[{key:"VERSION",get:function(){return"4.1.1"}},{key:"Default",get:function(){return qe}}]),n}(),Ve(window).on(Xe.LOAD_DATA_API,function(){for(var t=Ve.makeArray(Ve($e.DATA_SPY)),e=t.length;e--;){var n=Ve(t[e]);nn._jQueryInterface.call(n,n.data())}}),Ve.fn[Qe]=nn._jQueryInterface,Ve.fn[Qe].Constructor=nn,Ve.fn[Qe].noConflict=function(){return Ve.fn[Qe]=Ge,nn._jQueryInterface},nn),Pn=(on="."+(sn="bs.tab"),an=(rn=e).fn.tab,ln={HIDE:"hide"+on,HIDDEN:"hidden"+on,SHOW:"show"+on,SHOWN:"shown"+on,CLICK_DATA_API:"click"+on+".data-api"},hn="dropdown-menu",cn="active",un="disabled",fn="fade",dn="show",_n=".dropdown",gn=".nav, .list-group",mn=".active",pn="> li > .active",vn='[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',En=".dropdown-toggle",yn="> .dropdown-menu .active",Tn=function(){function i(t){this._element=t}var t=i.prototype;return t.show=function(){var n=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&rn(this._element).hasClass(cn)||rn(this._element).hasClass(un))){var t,i,e=rn(this._element).closest(gn)[0],r=Cn.getSelectorFromElement(this._element);if(e){var s="UL"===e.nodeName?pn:mn;i=(i=rn.makeArray(rn(e).find(s)))[i.length-1]}var o=rn.Event(ln.HIDE,{relatedTarget:this._element}),a=rn.Event(ln.SHOW,{relatedTarget:i});if(i&&rn(i).trigger(o),rn(this._element).trigger(a),!a.isDefaultPrevented()&&!o.isDefaultPrevented()){r&&(t=rn(r)[0]),this._activate(this._element,e);var l=function(){var t=rn.Event(ln.HIDDEN,{relatedTarget:n._element}),e=rn.Event(ln.SHOWN,{relatedTarget:i});rn(i).trigger(t),rn(n._element).trigger(e)};t?this._activate(t,t.parentNode,l):l()}}},t.dispose=function(){rn.removeData(this._element,sn),this._element=null},t._activate=function(t,e,n){var i=this,r=("UL"===e.nodeName?rn(e).find(pn):rn(e).children(mn))[0],s=n&&r&&rn(r).hasClass(fn),o=function(){return i._transitionComplete(t,r,n)};if(r&&s){var a=Cn.getTransitionDurationFromElement(r);rn(r).one(Cn.TRANSITION_END,o).emulateTransitionEnd(a)}else o()},t._transitionComplete=function(t,e,n){if(e){rn(e).removeClass(dn+" "+cn);var i=rn(e.parentNode).find(yn)[0];i&&rn(i).removeClass(cn),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!1)}if(rn(t).addClass(cn),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!0),Cn.reflow(t),rn(t).addClass(dn),t.parentNode&&rn(t.parentNode).hasClass(hn)){var r=rn(t).closest(_n)[0];r&&rn(r).find(En).addClass(cn),t.setAttribute("aria-expanded",!0)}n&&n()},i._jQueryInterface=function(n){return this.each(function(){var t=rn(this),e=t.data(sn);if(e||(e=new i(this),t.data(sn,e)),"string"==typeof n){if("undefined"==typeof e[n])throw new TypeError('No method named "'+n+'"');e[n]()}})},o(i,null,[{key:"VERSION",get:function(){return"4.1.1"}}]),i}(),rn(document).on(ln.CLICK_DATA_API,vn,function(t){t.preventDefault(),Tn._jQueryInterface.call(rn(this),"show")}),rn.fn.tab=Tn._jQueryInterface,rn.fn.tab.Constructor=Tn,rn.fn.tab.noConflict=function(){return rn.fn.tab=an,Tn._jQueryInterface},Tn);!function(t){if("undefined"==typeof t)throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var e=t.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1===e[0]&&9===e[1]&&e[2]<1||4<=e[0])throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}(e),t.Util=Cn,t.Alert=In,t.Button=An,t.Carousel=Dn,t.Collapse=bn,t.Dropdown=Sn,t.Modal=wn,t.Popover=On,t.Scrollspy=kn,t.Tab=Pn,t.Tooltip=Nn,Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=bootstrap.min.js.map
;!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e(require("jquery"),require("leaflet"),require("numeric"));else if("function"==typeof define&&define.amd)define(["jquery","leaflet","numeric"],e);else{var o="object"==typeof exports?e(require("jquery"),require("leaflet"),require("numeric")):e(t.jQuery,t.L,t.numeric);for(var r in o)("object"==typeof exports?exports:t)[r]=o[r]}}(window,function(t,e,o){return function(t){var e={};function o(r){if(e[r])return e[r].exports;var n=e[r]={i:r,l:!1,exports:{}};return t[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}return o.m=t,o.c=e,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},o.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=3)}([function(e,o){e.exports=t},function(t,o){t.exports=e},function(t,e){t.exports=o},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=l;var r=u(o(2)),n=u(o(1)),i=u(o(0));function u(t){return t&&t.__esModule?t:{default:t}}function s(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}var a=n.default.VideoOverlay.extend({initialize:function(t,e,o){this._url=t,this._bounds=this._isCorners(e)?e:this._boundsToCorners(e),n.default.Util.setOptions(this,o)},setBounds:function(t){return this.setCorners(this._boundsToCorners(t))},setCorners:function(t){return this._bounds=t,this._map&&this._reset(),this},_animateZoom:function(t){var e=this,o=t.zoom,r=t.center;this._projectVideoOnMap(function(t){var n=e._map._latLngToNewLayerPoint(t,o,r),i=n.x,u=n.y;return{x:Math.round(i),y:Math.round(u)}})},_projectVideoOnMap:function(t){var e=this._bounds,o=function(t,e){var o=[],n=[];f(o,n,t.topLeft,e.topLeft),f(o,n,t.topRight,e.topRight),f(o,n,t.bottomLeft,e.bottomLeft),f(o,n,t.bottomRight,e.bottomRight);var i=r.default.solve(o,n);return[[i[0],i[1],0,i[2]],[i[3],i[4],0,i[5]],[0,0,1,0],[i[6],i[7],0,1]]}(function(t){var e=(0,i.default)(t),o=e.height(),r=e.width(),n=0+r,u=0+o;return{topLeft:{x:0,y:0},topRight:{x:n,y:0},bottomRight:{x:n,y:u},bottomLeft:{x:0,y:u}}}(this._image),function(t,e){var o=t.topLeft,r=t.topRight,n=t.bottomLeft,i=t.bottomRight;return{topLeft:e(o),topRight:e(r),bottomLeft:e(n),bottomRight:e(i)}}(e,t)),n=(0,i.default)(this._image);n.css(c("transform",function(t){for(var e=[],o=0;o<4;o++)for(var r=0;r<4;r++)e.push(t[r][o].toFixed(20));return"matrix3d(".concat(e.join(","),")")}(o))),n.css(c("transform-origin","0 0 0px"))},_reset:function(){var t=this,e=this._image,o=(0,i.default)(this._map.getContainer());(0,i.default)(e).css(c("transition","width 0.05s")),e.style.width=o.width()+"px",e.style.height=o.height()+"px";this._projectVideoOnMap(function(e){var o=t._map.latLngToLayerPoint(e),r=o.x,n=o.y;return{x:Math.round(r),y:Math.round(n)}})},_initImage:function(){n.default.VideoOverlay.prototype._initImage.call(this),this._image.style.objectFit="fill"},_boundsToCorners:function(t){return{topLeft:(t=n.default.latLngBounds(t)).getNorthWest(),topRight:t.getNorthEast(),bottomLeft:t.getSouthWest(),bottomRight:t.getSouthEast()}},_isCorners:function(t){var e=t.topLeft,o=t.topRight,r=t.bottomLeft,n=t.bottomRight;return!!(e&&o&&r&&n)}});function f(t,e,o,r){var n=o.x,i=o.y,u=[n,i,1,0,0,0,-r.x*n,-r.x*i],s=[0,0,0,n,i,1,-r.y*n,-r.y*i];t.push(u),e.push(r.x),t.push(s),e.push(r.y)}function c(t,e){var o;return s(o={},"-webkit-"+t,e),s(o,"-khtml-"+t,e),s(o,"-moz-"+t,e),s(o,"-ms-"+t,e),s(o,"-o-"+t,e),s(o,t,e),o}function l(t,e,o){return new a(t,e,o)}n.default.DistortableVideoOverlay=a,n.default.distortableVideoOverlay=l}])});
//# sourceMappingURL=index.min.js.map
;"use strict";

var numeric = (typeof exports === "undefined")?(function numeric() {}):(exports);
if(typeof global !== "undefined") { global.numeric = numeric; }

numeric.version = "1.2.6";

// 1. Utility functions
numeric.bench = function bench (f,interval) {
    var t1,t2,n,i;
    if(typeof interval === "undefined") { interval = 15; }
    n = 0.5;
    t1 = new Date();
    while(1) {
        n*=2;
        for(i=n;i>3;i-=4) { f(); f(); f(); f(); }
        while(i>0) { f(); i--; }
        t2 = new Date();
        if(t2-t1 > interval) break;
    }
    for(i=n;i>3;i-=4) { f(); f(); f(); f(); }
    while(i>0) { f(); i--; }
    t2 = new Date();
    return 1000*(3*n-1)/(t2-t1);
}

numeric._myIndexOf = (function _myIndexOf(w) {
    var n = this.length,k;
    for(k=0;k<n;++k) if(this[k]===w) return k;
    return -1;
});
numeric.myIndexOf = (Array.prototype.indexOf)?Array.prototype.indexOf:numeric._myIndexOf;

numeric.Function = Function;
numeric.precision = 4;
numeric.largeArray = 50;

numeric.prettyPrint = function prettyPrint(x) {
    function fmtnum(x) {
        if(x === 0) { return '0'; }
        if(isNaN(x)) { return 'NaN'; }
        if(x<0) { return '-'+fmtnum(-x); }
        if(isFinite(x)) {
            var scale = Math.floor(Math.log(x) / Math.log(10));
            var normalized = x / Math.pow(10,scale);
            var basic = normalized.toPrecision(numeric.precision);
            if(parseFloat(basic) === 10) { scale++; normalized = 1; basic = normalized.toPrecision(numeric.precision); }
            return parseFloat(basic).toString()+'e'+scale.toString();
        }
        return 'Infinity';
    }
    var ret = [];
    function foo(x) {
        var k;
        if(typeof x === "undefined") { ret.push(Array(numeric.precision+8).join(' ')); return false; }
        if(typeof x === "string") { ret.push('"'+x+'"'); return false; }
        if(typeof x === "boolean") { ret.push(x.toString()); return false; }
        if(typeof x === "number") {
            var a = fmtnum(x);
            var b = x.toPrecision(numeric.precision);
            var c = parseFloat(x.toString()).toString();
            var d = [a,b,c,parseFloat(b).toString(),parseFloat(c).toString()];
            for(k=1;k<d.length;k++) { if(d[k].length < a.length) a = d[k]; }
            ret.push(Array(numeric.precision+8-a.length).join(' ')+a);
            return false;
        }
        if(x === null) { ret.push("null"); return false; }
        if(typeof x === "function") { 
            ret.push(x.toString());
            var flag = false;
            for(k in x) { if(x.hasOwnProperty(k)) { 
                if(flag) ret.push(',\n');
                else ret.push('\n{');
                flag = true; 
                ret.push(k); 
                ret.push(': \n'); 
                foo(x[k]); 
            } }
            if(flag) ret.push('}\n');
            return true;
        }
        if(x instanceof Array) {
            if(x.length > numeric.largeArray) { ret.push('...Large Array...'); return true; }
            var flag = false;
            ret.push('[');
            for(k=0;k<x.length;k++) { if(k>0) { ret.push(','); if(flag) ret.push('\n '); } flag = foo(x[k]); }
            ret.push(']');
            return true;
        }
        ret.push('{');
        var flag = false;
        for(k in x) { if(x.hasOwnProperty(k)) { if(flag) ret.push(',\n'); flag = true; ret.push(k); ret.push(': \n'); foo(x[k]); } }
        ret.push('}');
        return true;
    }
    foo(x);
    return ret.join('');
}

numeric.parseDate = function parseDate(d) {
    function foo(d) {
        if(typeof d === 'string') { return Date.parse(d.replace(/-/g,'/')); }
        if(!(d instanceof Array)) { throw new Error("parseDate: parameter must be arrays of strings"); }
        var ret = [],k;
        for(k=0;k<d.length;k++) { ret[k] = foo(d[k]); }
        return ret;
    }
    return foo(d);
}

numeric.parseFloat = function parseFloat_(d) {
    function foo(d) {
        if(typeof d === 'string') { return parseFloat(d); }
        if(!(d instanceof Array)) { throw new Error("parseFloat: parameter must be arrays of strings"); }
        var ret = [],k;
        for(k=0;k<d.length;k++) { ret[k] = foo(d[k]); }
        return ret;
    }
    return foo(d);
}

numeric.parseCSV = function parseCSV(t) {
    var foo = t.split('\n');
    var j,k;
    var ret = [];
    var pat = /(([^'",]*)|('[^']*')|("[^"]*")),/g;
    var patnum = /^\s*(([+-]?[0-9]+(\.[0-9]*)?(e[+-]?[0-9]+)?)|([+-]?[0-9]*(\.[0-9]+)?(e[+-]?[0-9]+)?))\s*$/;
    var stripper = function(n) { return n.substr(0,n.length-1); }
    var count = 0;
    for(k=0;k<foo.length;k++) {
      var bar = (foo[k]+",").match(pat),baz;
      if(bar.length>0) {
          ret[count] = [];
          for(j=0;j<bar.length;j++) {
              baz = stripper(bar[j]);
              if(patnum.test(baz)) { ret[count][j] = parseFloat(baz); }
              else ret[count][j] = baz;
          }
          count++;
      }
    }
    return ret;
}

numeric.toCSV = function toCSV(A) {
    var s = numeric.dim(A);
    var i,j,m,n,row,ret;
    m = s[0];
    n = s[1];
    ret = [];
    for(i=0;i<m;i++) {
        row = [];
        for(j=0;j<m;j++) { row[j] = A[i][j].toString(); }
        ret[i] = row.join(', ');
    }
    return ret.join('\n')+'\n';
}

numeric.getURL = function getURL(url) {
    var client = new XMLHttpRequest();
    client.open("GET",url,false);
    client.send();
    return client;
}

numeric.imageURL = function imageURL(img) {
    function base64(A) {
        var n = A.length, i,x,y,z,p,q,r,s;
        var key = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
        var ret = "";
        for(i=0;i<n;i+=3) {
            x = A[i];
            y = A[i+1];
            z = A[i+2];
            p = x >> 2;
            q = ((x & 3) << 4) + (y >> 4);
            r = ((y & 15) << 2) + (z >> 6);
            s = z & 63;
            if(i+1>=n) { r = s = 64; }
            else if(i+2>=n) { s = 64; }
            ret += key.charAt(p) + key.charAt(q) + key.charAt(r) + key.charAt(s);
            }
        return ret;
    }
    function crc32Array (a,from,to) {
        if(typeof from === "undefined") { from = 0; }
        if(typeof to === "undefined") { to = a.length; }
        var table = [0x00000000, 0x77073096, 0xEE0E612C, 0x990951BA, 0x076DC419, 0x706AF48F, 0xE963A535, 0x9E6495A3,
                     0x0EDB8832, 0x79DCB8A4, 0xE0D5E91E, 0x97D2D988, 0x09B64C2B, 0x7EB17CBD, 0xE7B82D07, 0x90BF1D91, 
                     0x1DB71064, 0x6AB020F2, 0xF3B97148, 0x84BE41DE, 0x1ADAD47D, 0x6DDDE4EB, 0xF4D4B551, 0x83D385C7,
                     0x136C9856, 0x646BA8C0, 0xFD62F97A, 0x8A65C9EC, 0x14015C4F, 0x63066CD9, 0xFA0F3D63, 0x8D080DF5, 
                     0x3B6E20C8, 0x4C69105E, 0xD56041E4, 0xA2677172, 0x3C03E4D1, 0x4B04D447, 0xD20D85FD, 0xA50AB56B, 
                     0x35B5A8FA, 0x42B2986C, 0xDBBBC9D6, 0xACBCF940, 0x32D86CE3, 0x45DF5C75, 0xDCD60DCF, 0xABD13D59, 
                     0x26D930AC, 0x51DE003A, 0xC8D75180, 0xBFD06116, 0x21B4F4B5, 0x56B3C423, 0xCFBA9599, 0xB8BDA50F,
                     0x2802B89E, 0x5F058808, 0xC60CD9B2, 0xB10BE924, 0x2F6F7C87, 0x58684C11, 0xC1611DAB, 0xB6662D3D,
                     0x76DC4190, 0x01DB7106, 0x98D220BC, 0xEFD5102A, 0x71B18589, 0x06B6B51F, 0x9FBFE4A5, 0xE8B8D433,
                     0x7807C9A2, 0x0F00F934, 0x9609A88E, 0xE10E9818, 0x7F6A0DBB, 0x086D3D2D, 0x91646C97, 0xE6635C01, 
                     0x6B6B51F4, 0x1C6C6162, 0x856530D8, 0xF262004E, 0x6C0695ED, 0x1B01A57B, 0x8208F4C1, 0xF50FC457, 
                     0x65B0D9C6, 0x12B7E950, 0x8BBEB8EA, 0xFCB9887C, 0x62DD1DDF, 0x15DA2D49, 0x8CD37CF3, 0xFBD44C65, 
                     0x4DB26158, 0x3AB551CE, 0xA3BC0074, 0xD4BB30E2, 0x4ADFA541, 0x3DD895D7, 0xA4D1C46D, 0xD3D6F4FB, 
                     0x4369E96A, 0x346ED9FC, 0xAD678846, 0xDA60B8D0, 0x44042D73, 0x33031DE5, 0xAA0A4C5F, 0xDD0D7CC9, 
                     0x5005713C, 0x270241AA, 0xBE0B1010, 0xC90C2086, 0x5768B525, 0x206F85B3, 0xB966D409, 0xCE61E49F, 
                     0x5EDEF90E, 0x29D9C998, 0xB0D09822, 0xC7D7A8B4, 0x59B33D17, 0x2EB40D81, 0xB7BD5C3B, 0xC0BA6CAD, 
                     0xEDB88320, 0x9ABFB3B6, 0x03B6E20C, 0x74B1D29A, 0xEAD54739, 0x9DD277AF, 0x04DB2615, 0x73DC1683, 
                     0xE3630B12, 0x94643B84, 0x0D6D6A3E, 0x7A6A5AA8, 0xE40ECF0B, 0x9309FF9D, 0x0A00AE27, 0x7D079EB1, 
                     0xF00F9344, 0x8708A3D2, 0x1E01F268, 0x6906C2FE, 0xF762575D, 0x806567CB, 0x196C3671, 0x6E6B06E7, 
                     0xFED41B76, 0x89D32BE0, 0x10DA7A5A, 0x67DD4ACC, 0xF9B9DF6F, 0x8EBEEFF9, 0x17B7BE43, 0x60B08ED5, 
                     0xD6D6A3E8, 0xA1D1937E, 0x38D8C2C4, 0x4FDFF252, 0xD1BB67F1, 0xA6BC5767, 0x3FB506DD, 0x48B2364B, 
                     0xD80D2BDA, 0xAF0A1B4C, 0x36034AF6, 0x41047A60, 0xDF60EFC3, 0xA867DF55, 0x316E8EEF, 0x4669BE79, 
                     0xCB61B38C, 0xBC66831A, 0x256FD2A0, 0x5268E236, 0xCC0C7795, 0xBB0B4703, 0x220216B9, 0x5505262F, 
                     0xC5BA3BBE, 0xB2BD0B28, 0x2BB45A92, 0x5CB36A04, 0xC2D7FFA7, 0xB5D0CF31, 0x2CD99E8B, 0x5BDEAE1D, 
                     0x9B64C2B0, 0xEC63F226, 0x756AA39C, 0x026D930A, 0x9C0906A9, 0xEB0E363F, 0x72076785, 0x05005713, 
                     0x95BF4A82, 0xE2B87A14, 0x7BB12BAE, 0x0CB61B38, 0x92D28E9B, 0xE5D5BE0D, 0x7CDCEFB7, 0x0BDBDF21, 
                     0x86D3D2D4, 0xF1D4E242, 0x68DDB3F8, 0x1FDA836E, 0x81BE16CD, 0xF6B9265B, 0x6FB077E1, 0x18B74777, 
                     0x88085AE6, 0xFF0F6A70, 0x66063BCA, 0x11010B5C, 0x8F659EFF, 0xF862AE69, 0x616BFFD3, 0x166CCF45, 
                     0xA00AE278, 0xD70DD2EE, 0x4E048354, 0x3903B3C2, 0xA7672661, 0xD06016F7, 0x4969474D, 0x3E6E77DB, 
                     0xAED16A4A, 0xD9D65ADC, 0x40DF0B66, 0x37D83BF0, 0xA9BCAE53, 0xDEBB9EC5, 0x47B2CF7F, 0x30B5FFE9, 
                     0xBDBDF21C, 0xCABAC28A, 0x53B39330, 0x24B4A3A6, 0xBAD03605, 0xCDD70693, 0x54DE5729, 0x23D967BF, 
                     0xB3667A2E, 0xC4614AB8, 0x5D681B02, 0x2A6F2B94, 0xB40BBE37, 0xC30C8EA1, 0x5A05DF1B, 0x2D02EF8D];
     
        var crc = -1, y = 0, n = a.length,i;

        for (i = from; i < to; i++) {
            y = (crc ^ a[i]) & 0xFF;
            crc = (crc >>> 8) ^ table[y];
        }
     
        return crc ^ (-1);
    }

    var h = img[0].length, w = img[0][0].length, s1, s2, next,k,length,a,b,i,j,adler32,crc32;
    var stream = [
                  137, 80, 78, 71, 13, 10, 26, 10,                           //  0: PNG signature
                  0,0,0,13,                                                  //  8: IHDR Chunk length
                  73, 72, 68, 82,                                            // 12: "IHDR" 
                  (w >> 24) & 255, (w >> 16) & 255, (w >> 8) & 255, w&255,   // 16: Width
                  (h >> 24) & 255, (h >> 16) & 255, (h >> 8) & 255, h&255,   // 20: Height
                  8,                                                         // 24: bit depth
                  2,                                                         // 25: RGB
                  0,                                                         // 26: deflate
                  0,                                                         // 27: no filter
                  0,                                                         // 28: no interlace
                  -1,-2,-3,-4,                                               // 29: CRC
                  -5,-6,-7,-8,                                               // 33: IDAT Chunk length
                  73, 68, 65, 84,                                            // 37: "IDAT"
                  // RFC 1950 header starts here
                  8,                                                         // 41: RFC1950 CMF
                  29                                                         // 42: RFC1950 FLG
                  ];
    crc32 = crc32Array(stream,12,29);
    stream[29] = (crc32>>24)&255;
    stream[30] = (crc32>>16)&255;
    stream[31] = (crc32>>8)&255;
    stream[32] = (crc32)&255;
    s1 = 1;
    s2 = 0;
    for(i=0;i<h;i++) {
        if(i<h-1) { stream.push(0); }
        else { stream.push(1); }
        a = (3*w+1+(i===0))&255; b = ((3*w+1+(i===0))>>8)&255;
        stream.push(a); stream.push(b);
        stream.push((~a)&255); stream.push((~b)&255);
        if(i===0) stream.push(0);
        for(j=0;j<w;j++) {
            for(k=0;k<3;k++) {
                a = img[k][i][j];
                if(a>255) a = 255;
                else if(a<0) a=0;
                else a = Math.round(a);
                s1 = (s1 + a )%65521;
                s2 = (s2 + s1)%65521;
                stream.push(a);
            }
        }
        stream.push(0);
    }
    adler32 = (s2<<16)+s1;
    stream.push((adler32>>24)&255);
    stream.push((adler32>>16)&255);
    stream.push((adler32>>8)&255);
    stream.push((adler32)&255);
    length = stream.length - 41;
    stream[33] = (length>>24)&255;
    stream[34] = (length>>16)&255;
    stream[35] = (length>>8)&255;
    stream[36] = (length)&255;
    crc32 = crc32Array(stream,37);
    stream.push((crc32>>24)&255);
    stream.push((crc32>>16)&255);
    stream.push((crc32>>8)&255);
    stream.push((crc32)&255);
    stream.push(0);
    stream.push(0);
    stream.push(0);
    stream.push(0);
//    a = stream.length;
    stream.push(73);  // I
    stream.push(69);  // E
    stream.push(78);  // N
    stream.push(68);  // D
    stream.push(174); // CRC1
    stream.push(66);  // CRC2
    stream.push(96);  // CRC3
    stream.push(130); // CRC4
    return 'data:image/png;base64,'+base64(stream);
}

// 2. Linear algebra with Arrays.
numeric._dim = function _dim(x) {
    var ret = [];
    while(typeof x === "object") { ret.push(x.length); x = x[0]; }
    return ret;
}

numeric.dim = function dim(x) {
    var y,z;
    if(typeof x === "object") {
        y = x[0];
        if(typeof y === "object") {
            z = y[0];
            if(typeof z === "object") {
                return numeric._dim(x);
            }
            return [x.length,y.length];
        }
        return [x.length];
    }
    return [];
}

numeric.mapreduce = function mapreduce(body,init) {
    return Function('x','accum','_s','_k',
            'if(typeof accum === "undefined") accum = '+init+';\n'+
            'if(typeof x === "number") { var xi = x; '+body+'; return accum; }\n'+
            'if(typeof _s === "undefined") _s = numeric.dim(x);\n'+
            'if(typeof _k === "undefined") _k = 0;\n'+
            'var _n = _s[_k];\n'+
            'var i,xi;\n'+
            'if(_k < _s.length-1) {\n'+
            '    for(i=_n-1;i>=0;i--) {\n'+
            '        accum = arguments.callee(x[i],accum,_s,_k+1);\n'+
            '    }'+
            '    return accum;\n'+
            '}\n'+
            'for(i=_n-1;i>=1;i-=2) { \n'+
            '    xi = x[i];\n'+
            '    '+body+';\n'+
            '    xi = x[i-1];\n'+
            '    '+body+';\n'+
            '}\n'+
            'if(i === 0) {\n'+
            '    xi = x[i];\n'+
            '    '+body+'\n'+
            '}\n'+
            'return accum;'
            );
}
numeric.mapreduce2 = function mapreduce2(body,setup) {
    return Function('x',
            'var n = x.length;\n'+
            'var i,xi;\n'+setup+';\n'+
            'for(i=n-1;i!==-1;--i) { \n'+
            '    xi = x[i];\n'+
            '    '+body+';\n'+
            '}\n'+
            'return accum;'
            );
}


numeric.same = function same(x,y) {
    var i,n;
    if(!(x instanceof Array) || !(y instanceof Array)) { return false; }
    n = x.length;
    if(n !== y.length) { return false; }
    for(i=0;i<n;i++) {
        if(x[i] === y[i]) { continue; }
        if(typeof x[i] === "object") { if(!same(x[i],y[i])) return false; }
        else { return false; }
    }
    return true;
}

numeric.rep = function rep(s,v,k) {
    if(typeof k === "undefined") { k=0; }
    var n = s[k], ret = Array(n), i;
    if(k === s.length-1) {
        for(i=n-2;i>=0;i-=2) { ret[i+1] = v; ret[i] = v; }
        if(i===-1) { ret[0] = v; }
        return ret;
    }
    for(i=n-1;i>=0;i--) { ret[i] = numeric.rep(s,v,k+1); }
    return ret;
}


numeric.dotMMsmall = function dotMMsmall(x,y) {
    var i,j,k,p,q,r,ret,foo,bar,woo,i0,k0,p0,r0;
    p = x.length; q = y.length; r = y[0].length;
    ret = Array(p);
    for(i=p-1;i>=0;i--) {
        foo = Array(r);
        bar = x[i];
        for(k=r-1;k>=0;k--) {
            woo = bar[q-1]*y[q-1][k];
            for(j=q-2;j>=1;j-=2) {
                i0 = j-1;
                woo += bar[j]*y[j][k] + bar[i0]*y[i0][k];
            }
            if(j===0) { woo += bar[0]*y[0][k]; }
            foo[k] = woo;
        }
        ret[i] = foo;
    }
    return ret;
}
numeric._getCol = function _getCol(A,j,x) {
    var n = A.length, i;
    for(i=n-1;i>0;--i) {
        x[i] = A[i][j];
        --i;
        x[i] = A[i][j];
    }
    if(i===0) x[0] = A[0][j];
}
numeric.dotMMbig = function dotMMbig(x,y){
    var gc = numeric._getCol, p = y.length, v = Array(p);
    var m = x.length, n = y[0].length, A = new Array(m), xj;
    var VV = numeric.dotVV;
    var i,j,k,z;
    --p;
    --m;
    for(i=m;i!==-1;--i) A[i] = Array(n);
    --n;
    for(i=n;i!==-1;--i) {
        gc(y,i,v);
        for(j=m;j!==-1;--j) {
            z=0;
            xj = x[j];
            A[j][i] = VV(xj,v);
        }
    }
    return A;
}

numeric.dotMV = function dotMV(x,y) {
    var p = x.length, q = y.length,i;
    var ret = Array(p), dotVV = numeric.dotVV;
    for(i=p-1;i>=0;i--) { ret[i] = dotVV(x[i],y); }
    return ret;
}

numeric.dotVM = function dotVM(x,y) {
    var i,j,k,p,q,r,ret,foo,bar,woo,i0,k0,p0,r0,s1,s2,s3,baz,accum;
    p = x.length; q = y[0].length;
    ret = Array(q);
    for(k=q-1;k>=0;k--) {
        woo = x[p-1]*y[p-1][k];
        for(j=p-2;j>=1;j-=2) {
            i0 = j-1;
            woo += x[j]*y[j][k] + x[i0]*y[i0][k];
        }
        if(j===0) { woo += x[0]*y[0][k]; }
        ret[k] = woo;
    }
    return ret;
}

numeric.dotVV = function dotVV(x,y) {
    var i,n=x.length,i1,ret = x[n-1]*y[n-1];
    for(i=n-2;i>=1;i-=2) {
        i1 = i-1;
        ret += x[i]*y[i] + x[i1]*y[i1];
    }
    if(i===0) { ret += x[0]*y[0]; }
    return ret;
}

numeric.dot = function dot(x,y) {
    var d = numeric.dim;
    switch(d(x).length*1000+d(y).length) {
    case 2002:
        if(y.length < 10) return numeric.dotMMsmall(x,y);
        else return numeric.dotMMbig(x,y);
    case 2001: return numeric.dotMV(x,y);
    case 1002: return numeric.dotVM(x,y);
    case 1001: return numeric.dotVV(x,y);
    case 1000: return numeric.mulVS(x,y);
    case 1: return numeric.mulSV(x,y);
    case 0: return x*y;
    default: throw new Error('numeric.dot only works on vectors and matrices');
    }
}

numeric.diag = function diag(d) {
    var i,i1,j,n = d.length, A = Array(n), Ai;
    for(i=n-1;i>=0;i--) {
        Ai = Array(n);
        i1 = i+2;
        for(j=n-1;j>=i1;j-=2) {
            Ai[j] = 0;
            Ai[j-1] = 0;
        }
        if(j>i) { Ai[j] = 0; }
        Ai[i] = d[i];
        for(j=i-1;j>=1;j-=2) {
            Ai[j] = 0;
            Ai[j-1] = 0;
        }
        if(j===0) { Ai[0] = 0; }
        A[i] = Ai;
    }
    return A;
}
numeric.getDiag = function(A) {
    var n = Math.min(A.length,A[0].length),i,ret = Array(n);
    for(i=n-1;i>=1;--i) {
        ret[i] = A[i][i];
        --i;
        ret[i] = A[i][i];
    }
    if(i===0) {
        ret[0] = A[0][0];
    }
    return ret;
}

numeric.identity = function identity(n) { return numeric.diag(numeric.rep([n],1)); }
numeric.pointwise = function pointwise(params,body,setup) {
    if(typeof setup === "undefined") { setup = ""; }
    var fun = [];
    var k;
    var avec = /\[i\]$/,p,thevec = '';
    var haveret = false;
    for(k=0;k<params.length;k++) {
        if(avec.test(params[k])) {
            p = params[k].substring(0,params[k].length-3);
            thevec = p;
        } else { p = params[k]; }
        if(p==='ret') haveret = true;
        fun.push(p);
    }
    fun[params.length] = '_s';
    fun[params.length+1] = '_k';
    fun[params.length+2] = (
            'if(typeof _s === "undefined") _s = numeric.dim('+thevec+');\n'+
            'if(typeof _k === "undefined") _k = 0;\n'+
            'var _n = _s[_k];\n'+
            'var i'+(haveret?'':', ret = Array(_n)')+';\n'+
            'if(_k < _s.length-1) {\n'+
            '    for(i=_n-1;i>=0;i--) ret[i] = arguments.callee('+params.join(',')+',_s,_k+1);\n'+
            '    return ret;\n'+
            '}\n'+
            setup+'\n'+
            'for(i=_n-1;i!==-1;--i) {\n'+
            '    '+body+'\n'+
            '}\n'+
            'return ret;'
            );
    return Function.apply(null,fun);
}
numeric.pointwise2 = function pointwise2(params,body,setup) {
    if(typeof setup === "undefined") { setup = ""; }
    var fun = [];
    var k;
    var avec = /\[i\]$/,p,thevec = '';
    var haveret = false;
    for(k=0;k<params.length;k++) {
        if(avec.test(params[k])) {
            p = params[k].substring(0,params[k].length-3);
            thevec = p;
        } else { p = params[k]; }
        if(p==='ret') haveret = true;
        fun.push(p);
    }
    fun[params.length] = (
            'var _n = '+thevec+'.length;\n'+
            'var i'+(haveret?'':', ret = Array(_n)')+';\n'+
            setup+'\n'+
            'for(i=_n-1;i!==-1;--i) {\n'+
            body+'\n'+
            '}\n'+
            'return ret;'
            );
    return Function.apply(null,fun);
}
numeric._biforeach = (function _biforeach(x,y,s,k,f) {
    if(k === s.length-1) { f(x,y); return; }
    var i,n=s[k];
    for(i=n-1;i>=0;i--) { _biforeach(typeof x==="object"?x[i]:x,typeof y==="object"?y[i]:y,s,k+1,f); }
});
numeric._biforeach2 = (function _biforeach2(x,y,s,k,f) {
    if(k === s.length-1) { return f(x,y); }
    var i,n=s[k],ret = Array(n);
    for(i=n-1;i>=0;--i) { ret[i] = _biforeach2(typeof x==="object"?x[i]:x,typeof y==="object"?y[i]:y,s,k+1,f); }
    return ret;
});
numeric._foreach = (function _foreach(x,s,k,f) {
    if(k === s.length-1) { f(x); return; }
    var i,n=s[k];
    for(i=n-1;i>=0;i--) { _foreach(x[i],s,k+1,f); }
});
numeric._foreach2 = (function _foreach2(x,s,k,f) {
    if(k === s.length-1) { return f(x); }
    var i,n=s[k], ret = Array(n);
    for(i=n-1;i>=0;i--) { ret[i] = _foreach2(x[i],s,k+1,f); }
    return ret;
});

/*numeric.anyV = numeric.mapreduce('if(xi) return true;','false');
numeric.allV = numeric.mapreduce('if(!xi) return false;','true');
numeric.any = function(x) { if(typeof x.length === "undefined") return x; return numeric.anyV(x); }
numeric.all = function(x) { if(typeof x.length === "undefined") return x; return numeric.allV(x); }*/

numeric.ops2 = {
        add: '+',
        sub: '-',
        mul: '*',
        div: '/',
        mod: '%',
        and: '&&',
        or:  '||',
        eq:  '===',
        neq: '!==',
        lt:  '<',
        gt:  '>',
        leq: '<=',
        geq: '>=',
        band: '&',
        bor: '|',
        bxor: '^',
        lshift: '<<',
        rshift: '>>',
        rrshift: '>>>'
};
numeric.opseq = {
        addeq: '+=',
        subeq: '-=',
        muleq: '*=',
        diveq: '/=',
        modeq: '%=',
        lshifteq: '<<=',
        rshifteq: '>>=',
        rrshifteq: '>>>=',
        bandeq: '&=',
        boreq: '|=',
        bxoreq: '^='
};
numeric.mathfuns = ['abs','acos','asin','atan','ceil','cos',
                    'exp','floor','log','round','sin','sqrt','tan',
                    'isNaN','isFinite'];
numeric.mathfuns2 = ['atan2','pow','max','min'];
numeric.ops1 = {
        neg: '-',
        not: '!',
        bnot: '~',
        clone: ''
};
numeric.mapreducers = {
        any: ['if(xi) return true;','var accum = false;'],
        all: ['if(!xi) return false;','var accum = true;'],
        sum: ['accum += xi;','var accum = 0;'],
        prod: ['accum *= xi;','var accum = 1;'],
        norm2Squared: ['accum += xi*xi;','var accum = 0;'],
        norminf: ['accum = max(accum,abs(xi));','var accum = 0, max = Math.max, abs = Math.abs;'],
        norm1: ['accum += abs(xi)','var accum = 0, abs = Math.abs;'],
        sup: ['accum = max(accum,xi);','var accum = -Infinity, max = Math.max;'],
        inf: ['accum = min(accum,xi);','var accum = Infinity, min = Math.min;']
};

(function () {
    var i,o;
    for(i=0;i<numeric.mathfuns2.length;++i) {
        o = numeric.mathfuns2[i];
        numeric.ops2[o] = o;
    }
    for(i in numeric.ops2) {
        if(numeric.ops2.hasOwnProperty(i)) {
            o = numeric.ops2[i];
            var code, codeeq, setup = '';
            if(numeric.myIndexOf.call(numeric.mathfuns2,i)!==-1) {
                setup = 'var '+o+' = Math.'+o+';\n';
                code = function(r,x,y) { return r+' = '+o+'('+x+','+y+')'; };
                codeeq = function(x,y) { return x+' = '+o+'('+x+','+y+')'; };
            } else {
                code = function(r,x,y) { return r+' = '+x+' '+o+' '+y; };
                if(numeric.opseq.hasOwnProperty(i+'eq')) {
                    codeeq = function(x,y) { return x+' '+o+'= '+y; };
                } else {
                    codeeq = function(x,y) { return x+' = '+x+' '+o+' '+y; };                    
                }
            }
            numeric[i+'VV'] = numeric.pointwise2(['x[i]','y[i]'],code('ret[i]','x[i]','y[i]'),setup);
            numeric[i+'SV'] = numeric.pointwise2(['x','y[i]'],code('ret[i]','x','y[i]'),setup);
            numeric[i+'VS'] = numeric.pointwise2(['x[i]','y'],code('ret[i]','x[i]','y'),setup);
            numeric[i] = Function(
                    'var n = arguments.length, i, x = arguments[0], y;\n'+
                    'var VV = numeric.'+i+'VV, VS = numeric.'+i+'VS, SV = numeric.'+i+'SV;\n'+
                    'var dim = numeric.dim;\n'+
                    'for(i=1;i!==n;++i) { \n'+
                    '  y = arguments[i];\n'+
                    '  if(typeof x === "object") {\n'+
                    '      if(typeof y === "object") x = numeric._biforeach2(x,y,dim(x),0,VV);\n'+
                    '      else x = numeric._biforeach2(x,y,dim(x),0,VS);\n'+
                    '  } else if(typeof y === "object") x = numeric._biforeach2(x,y,dim(y),0,SV);\n'+
                    '  else '+codeeq('x','y')+'\n'+
                    '}\nreturn x;\n');
            numeric[o] = numeric[i];
            numeric[i+'eqV'] = numeric.pointwise2(['ret[i]','x[i]'], codeeq('ret[i]','x[i]'),setup);
            numeric[i+'eqS'] = numeric.pointwise2(['ret[i]','x'], codeeq('ret[i]','x'),setup);
            numeric[i+'eq'] = Function(
                    'var n = arguments.length, i, x = arguments[0], y;\n'+
                    'var V = numeric.'+i+'eqV, S = numeric.'+i+'eqS\n'+
                    'var s = numeric.dim(x);\n'+
                    'for(i=1;i!==n;++i) { \n'+
                    '  y = arguments[i];\n'+
                    '  if(typeof y === "object") numeric._biforeach(x,y,s,0,V);\n'+
                    '  else numeric._biforeach(x,y,s,0,S);\n'+
                    '}\nreturn x;\n');
        }
    }
    for(i=0;i<numeric.mathfuns2.length;++i) {
        o = numeric.mathfuns2[i];
        delete numeric.ops2[o];
    }
    for(i=0;i<numeric.mathfuns.length;++i) {
        o = numeric.mathfuns[i];
        numeric.ops1[o] = o;
    }
    for(i in numeric.ops1) {
        if(numeric.ops1.hasOwnProperty(i)) {
            setup = '';
            o = numeric.ops1[i];
            if(numeric.myIndexOf.call(numeric.mathfuns,i)!==-1) {
                if(Math.hasOwnProperty(o)) setup = 'var '+o+' = Math.'+o+';\n';
            }
            numeric[i+'eqV'] = numeric.pointwise2(['ret[i]'],'ret[i] = '+o+'(ret[i]);',setup);
            numeric[i+'eq'] = Function('x',
                    'if(typeof x !== "object") return '+o+'x\n'+
                    'var i;\n'+
                    'var V = numeric.'+i+'eqV;\n'+
                    'var s = numeric.dim(x);\n'+
                    'numeric._foreach(x,s,0,V);\n'+
                    'return x;\n');
            numeric[i+'V'] = numeric.pointwise2(['x[i]'],'ret[i] = '+o+'(x[i]);',setup);
            numeric[i] = Function('x',
                    'if(typeof x !== "object") return '+o+'(x)\n'+
                    'var i;\n'+
                    'var V = numeric.'+i+'V;\n'+
                    'var s = numeric.dim(x);\n'+
                    'return numeric._foreach2(x,s,0,V);\n');
        }
    }
    for(i=0;i<numeric.mathfuns.length;++i) {
        o = numeric.mathfuns[i];
        delete numeric.ops1[o];
    }
    for(i in numeric.mapreducers) {
        if(numeric.mapreducers.hasOwnProperty(i)) {
            o = numeric.mapreducers[i];
            numeric[i+'V'] = numeric.mapreduce2(o[0],o[1]);
            numeric[i] = Function('x','s','k',
                    o[1]+
                    'if(typeof x !== "object") {'+
                    '    xi = x;\n'+
                    o[0]+';\n'+
                    '    return accum;\n'+
                    '}'+
                    'if(typeof s === "undefined") s = numeric.dim(x);\n'+
                    'if(typeof k === "undefined") k = 0;\n'+
                    'if(k === s.length-1) return numeric.'+i+'V(x);\n'+
                    'var xi;\n'+
                    'var n = x.length, i;\n'+
                    'for(i=n-1;i!==-1;--i) {\n'+
                    '   xi = arguments.callee(x[i]);\n'+
                    o[0]+';\n'+
                    '}\n'+
                    'return accum;\n');
        }
    }
}());

numeric.truncVV = numeric.pointwise(['x[i]','y[i]'],'ret[i] = round(x[i]/y[i])*y[i];','var round = Math.round;');
numeric.truncVS = numeric.pointwise(['x[i]','y'],'ret[i] = round(x[i]/y)*y;','var round = Math.round;');
numeric.truncSV = numeric.pointwise(['x','y[i]'],'ret[i] = round(x/y[i])*y[i];','var round = Math.round;');
numeric.trunc = function trunc(x,y) {
    if(typeof x === "object") {
        if(typeof y === "object") return numeric.truncVV(x,y);
        return numeric.truncVS(x,y);
    }
    if (typeof y === "object") return numeric.truncSV(x,y);
    return Math.round(x/y)*y;
}

numeric.inv = function inv(x) {
    var s = numeric.dim(x), abs = Math.abs, m = s[0], n = s[1];
    var A = numeric.clone(x), Ai, Aj;
    var I = numeric.identity(m), Ii, Ij;
    var i,j,k,x;
    for(j=0;j<n;++j) {
        var i0 = -1;
        var v0 = -1;
        for(i=j;i!==m;++i) { k = abs(A[i][j]); if(k>v0) { i0 = i; v0 = k; } }
        Aj = A[i0]; A[i0] = A[j]; A[j] = Aj;
        Ij = I[i0]; I[i0] = I[j]; I[j] = Ij;
        x = Aj[j];
        for(k=j;k!==n;++k)    Aj[k] /= x; 
        for(k=n-1;k!==-1;--k) Ij[k] /= x;
        for(i=m-1;i!==-1;--i) {
            if(i!==j) {
                Ai = A[i];
                Ii = I[i];
                x = Ai[j];
                for(k=j+1;k!==n;++k)  Ai[k] -= Aj[k]*x;
                for(k=n-1;k>0;--k) { Ii[k] -= Ij[k]*x; --k; Ii[k] -= Ij[k]*x; }
                if(k===0) Ii[0] -= Ij[0]*x;
            }
        }
    }
    return I;
}

numeric.det = function det(x) {
    var s = numeric.dim(x);
    if(s.length !== 2 || s[0] !== s[1]) { throw new Error('numeric: det() only works on square matrices'); }
    var n = s[0], ret = 1,i,j,k,A = numeric.clone(x),Aj,Ai,alpha,temp,k1,k2,k3;
    for(j=0;j<n-1;j++) {
        k=j;
        for(i=j+1;i<n;i++) { if(Math.abs(A[i][j]) > Math.abs(A[k][j])) { k = i; } }
        if(k !== j) {
            temp = A[k]; A[k] = A[j]; A[j] = temp;
            ret *= -1;
        }
        Aj = A[j];
        for(i=j+1;i<n;i++) {
            Ai = A[i];
            alpha = Ai[j]/Aj[j];
            for(k=j+1;k<n-1;k+=2) {
                k1 = k+1;
                Ai[k] -= Aj[k]*alpha;
                Ai[k1] -= Aj[k1]*alpha;
            }
            if(k!==n) { Ai[k] -= Aj[k]*alpha; }
        }
        if(Aj[j] === 0) { return 0; }
        ret *= Aj[j];
    }
    return ret*A[j][j];
}

numeric.transpose = function transpose(x) {
    var i,j,m = x.length,n = x[0].length, ret=Array(n),A0,A1,Bj;
    for(j=0;j<n;j++) ret[j] = Array(m);
    for(i=m-1;i>=1;i-=2) {
        A1 = x[i];
        A0 = x[i-1];
        for(j=n-1;j>=1;--j) {
            Bj = ret[j]; Bj[i] = A1[j]; Bj[i-1] = A0[j];
            --j;
            Bj = ret[j]; Bj[i] = A1[j]; Bj[i-1] = A0[j];
        }
        if(j===0) {
            Bj = ret[0]; Bj[i] = A1[0]; Bj[i-1] = A0[0];
        }
    }
    if(i===0) {
        A0 = x[0];
        for(j=n-1;j>=1;--j) {
            ret[j][0] = A0[j];
            --j;
            ret[j][0] = A0[j];
        }
        if(j===0) { ret[0][0] = A0[0]; }
    }
    return ret;
}
numeric.negtranspose = function negtranspose(x) {
    var i,j,m = x.length,n = x[0].length, ret=Array(n),A0,A1,Bj;
    for(j=0;j<n;j++) ret[j] = Array(m);
    for(i=m-1;i>=1;i-=2) {
        A1 = x[i];
        A0 = x[i-1];
        for(j=n-1;j>=1;--j) {
            Bj = ret[j]; Bj[i] = -A1[j]; Bj[i-1] = -A0[j];
            --j;
            Bj = ret[j]; Bj[i] = -A1[j]; Bj[i-1] = -A0[j];
        }
        if(j===0) {
            Bj = ret[0]; Bj[i] = -A1[0]; Bj[i-1] = -A0[0];
        }
    }
    if(i===0) {
        A0 = x[0];
        for(j=n-1;j>=1;--j) {
            ret[j][0] = -A0[j];
            --j;
            ret[j][0] = -A0[j];
        }
        if(j===0) { ret[0][0] = -A0[0]; }
    }
    return ret;
}

numeric._random = function _random(s,k) {
    var i,n=s[k],ret=Array(n), rnd;
    if(k === s.length-1) {
        rnd = Math.random;
        for(i=n-1;i>=1;i-=2) {
            ret[i] = rnd();
            ret[i-1] = rnd();
        }
        if(i===0) { ret[0] = rnd(); }
        return ret;
    }
    for(i=n-1;i>=0;i--) ret[i] = _random(s,k+1);
    return ret;
}
numeric.random = function random(s) { return numeric._random(s,0); }

numeric.norm2 = function norm2(x) { return Math.sqrt(numeric.norm2Squared(x)); }

numeric.linspace = function linspace(a,b,n) {
    if(typeof n === "undefined") n = Math.max(Math.round(b-a)+1,1);
    if(n<2) { return n===1?[a]:[]; }
    var i,ret = Array(n);
    n--;
    for(i=n;i>=0;i--) { ret[i] = (i*b+(n-i)*a)/n; }
    return ret;
}

numeric.getBlock = function getBlock(x,from,to) {
    var s = numeric.dim(x);
    function foo(x,k) {
        var i,a = from[k], n = to[k]-a, ret = Array(n);
        if(k === s.length-1) {
            for(i=n;i>=0;i--) { ret[i] = x[i+a]; }
            return ret;
        }
        for(i=n;i>=0;i--) { ret[i] = foo(x[i+a],k+1); }
        return ret;
    }
    return foo(x,0);
}

numeric.setBlock = function setBlock(x,from,to,B) {
    var s = numeric.dim(x);
    function foo(x,y,k) {
        var i,a = from[k], n = to[k]-a;
        if(k === s.length-1) { for(i=n;i>=0;i--) { x[i+a] = y[i]; } }
        for(i=n;i>=0;i--) { foo(x[i+a],y[i],k+1); }
    }
    foo(x,B,0);
    return x;
}

numeric.getRange = function getRange(A,I,J) {
    var m = I.length, n = J.length;
    var i,j;
    var B = Array(m), Bi, AI;
    for(i=m-1;i!==-1;--i) {
        B[i] = Array(n);
        Bi = B[i];
        AI = A[I[i]];
        for(j=n-1;j!==-1;--j) Bi[j] = AI[J[j]];
    }
    return B;
}

numeric.blockMatrix = function blockMatrix(X) {
    var s = numeric.dim(X);
    if(s.length<4) return numeric.blockMatrix([X]);
    var m=s[0],n=s[1],M,N,i,j,Xij;
    M = 0; N = 0;
    for(i=0;i<m;++i) M+=X[i][0].length;
    for(j=0;j<n;++j) N+=X[0][j][0].length;
    var Z = Array(M);
    for(i=0;i<M;++i) Z[i] = Array(N);
    var I=0,J,ZI,k,l,Xijk;
    for(i=0;i<m;++i) {
        J=N;
        for(j=n-1;j!==-1;--j) {
            Xij = X[i][j];
            J -= Xij[0].length;
            for(k=Xij.length-1;k!==-1;--k) {
                Xijk = Xij[k];
                ZI = Z[I+k];
                for(l = Xijk.length-1;l!==-1;--l) ZI[J+l] = Xijk[l];
            }
        }
        I += X[i][0].length;
    }
    return Z;
}

numeric.tensor = function tensor(x,y) {
    if(typeof x === "number" || typeof y === "number") return numeric.mul(x,y);
    var s1 = numeric.dim(x), s2 = numeric.dim(y);
    if(s1.length !== 1 || s2.length !== 1) {
        throw new Error('numeric: tensor product is only defined for vectors');
    }
    var m = s1[0], n = s2[0], A = Array(m), Ai, i,j,xi;
    for(i=m-1;i>=0;i--) {
        Ai = Array(n);
        xi = x[i];
        for(j=n-1;j>=3;--j) {
            Ai[j] = xi * y[j];
            --j;
            Ai[j] = xi * y[j];
            --j;
            Ai[j] = xi * y[j];
            --j;
            Ai[j] = xi * y[j];
        }
        while(j>=0) { Ai[j] = xi * y[j]; --j; }
        A[i] = Ai;
    }
    return A;
}

// 3. The Tensor type T
numeric.T = function T(x,y) { this.x = x; this.y = y; }
numeric.t = function t(x,y) { return new numeric.T(x,y); }

numeric.Tbinop = function Tbinop(rr,rc,cr,cc,setup) {
    var io = numeric.indexOf;
    if(typeof setup !== "string") {
        var k;
        setup = '';
        for(k in numeric) {
            if(numeric.hasOwnProperty(k) && (rr.indexOf(k)>=0 || rc.indexOf(k)>=0 || cr.indexOf(k)>=0 || cc.indexOf(k)>=0) && k.length>1) {
                setup += 'var '+k+' = numeric.'+k+';\n';
            }
        }
    }
    return Function(['y'],
            'var x = this;\n'+
            'if(!(y instanceof numeric.T)) { y = new numeric.T(y); }\n'+
            setup+'\n'+
            'if(x.y) {'+
            '  if(y.y) {'+
            '    return new numeric.T('+cc+');\n'+
            '  }\n'+
            '  return new numeric.T('+cr+');\n'+
            '}\n'+
            'if(y.y) {\n'+
            '  return new numeric.T('+rc+');\n'+
            '}\n'+
            'return new numeric.T('+rr+');\n'
    );
}

numeric.T.prototype.add = numeric.Tbinop(
        'add(x.x,y.x)',
        'add(x.x,y.x),y.y',
        'add(x.x,y.x),x.y',
        'add(x.x,y.x),add(x.y,y.y)');
numeric.T.prototype.sub = numeric.Tbinop(
        'sub(x.x,y.x)',
        'sub(x.x,y.x),neg(y.y)',
        'sub(x.x,y.x),x.y',
        'sub(x.x,y.x),sub(x.y,y.y)');
numeric.T.prototype.mul = numeric.Tbinop(
        'mul(x.x,y.x)',
        'mul(x.x,y.x),mul(x.x,y.y)',
        'mul(x.x,y.x),mul(x.y,y.x)',
        'sub(mul(x.x,y.x),mul(x.y,y.y)),add(mul(x.x,y.y),mul(x.y,y.x))');

numeric.T.prototype.reciprocal = function reciprocal() {
    var mul = numeric.mul, div = numeric.div;
    if(this.y) {
        var d = numeric.add(mul(this.x,this.x),mul(this.y,this.y));
        return new numeric.T(div(this.x,d),div(numeric.neg(this.y),d));
    }
    return new T(div(1,this.x));
}
numeric.T.prototype.div = function div(y) {
    if(!(y instanceof numeric.T)) y = new numeric.T(y);
    if(y.y) { return this.mul(y.reciprocal()); }
    var div = numeric.div;
    if(this.y) { return new numeric.T(div(this.x,y.x),div(this.y,y.x)); }
    return new numeric.T(div(this.x,y.x));
}
numeric.T.prototype.dot = numeric.Tbinop(
        'dot(x.x,y.x)',
        'dot(x.x,y.x),dot(x.x,y.y)',
        'dot(x.x,y.x),dot(x.y,y.x)',
        'sub(dot(x.x,y.x),dot(x.y,y.y)),add(dot(x.x,y.y),dot(x.y,y.x))'
        );
numeric.T.prototype.transpose = function transpose() {
    var t = numeric.transpose, x = this.x, y = this.y;
    if(y) { return new numeric.T(t(x),t(y)); }
    return new numeric.T(t(x));
}
numeric.T.prototype.transjugate = function transjugate() {
    var t = numeric.transpose, x = this.x, y = this.y;
    if(y) { return new numeric.T(t(x),numeric.negtranspose(y)); }
    return new numeric.T(t(x));
}
numeric.Tunop = function Tunop(r,c,s) {
    if(typeof s !== "string") { s = ''; }
    return Function(
            'var x = this;\n'+
            s+'\n'+
            'if(x.y) {'+
            '  '+c+';\n'+
            '}\n'+
            r+';\n'
    );
}

numeric.T.prototype.exp = numeric.Tunop(
        'return new numeric.T(ex)',
        'return new numeric.T(mul(cos(x.y),ex),mul(sin(x.y),ex))',
        'var ex = numeric.exp(x.x), cos = numeric.cos, sin = numeric.sin, mul = numeric.mul;');
numeric.T.prototype.conj = numeric.Tunop(
        'return new numeric.T(x.x);',
        'return new numeric.T(x.x,numeric.neg(x.y));');
numeric.T.prototype.neg = numeric.Tunop(
        'return new numeric.T(neg(x.x));',
        'return new numeric.T(neg(x.x),neg(x.y));',
        'var neg = numeric.neg;');
numeric.T.prototype.sin = numeric.Tunop(
        'return new numeric.T(numeric.sin(x.x))',
        'return x.exp().sub(x.neg().exp()).div(new numeric.T(0,2));');
numeric.T.prototype.cos = numeric.Tunop(
        'return new numeric.T(numeric.cos(x.x))',
        'return x.exp().add(x.neg().exp()).div(2);');
numeric.T.prototype.abs = numeric.Tunop(
        'return new numeric.T(numeric.abs(x.x));',
        'return new numeric.T(numeric.sqrt(numeric.add(mul(x.x,x.x),mul(x.y,x.y))));',
        'var mul = numeric.mul;');
numeric.T.prototype.log = numeric.Tunop(
        'return new numeric.T(numeric.log(x.x));',
        'var theta = new numeric.T(numeric.atan2(x.y,x.x)), r = x.abs();\n'+
        'return new numeric.T(numeric.log(r.x),theta.x);');
numeric.T.prototype.norm2 = numeric.Tunop(
        'return numeric.norm2(x.x);',
        'var f = numeric.norm2Squared;\n'+
        'return Math.sqrt(f(x.x)+f(x.y));');
numeric.T.prototype.inv = function inv() {
    var A = this;
    if(typeof A.y === "undefined") { return new numeric.T(numeric.inv(A.x)); }
    var n = A.x.length, i, j, k;
    var Rx = numeric.identity(n),Ry = numeric.rep([n,n],0);
    var Ax = numeric.clone(A.x), Ay = numeric.clone(A.y);
    var Aix, Aiy, Ajx, Ajy, Rix, Riy, Rjx, Rjy;
    var i,j,k,d,d1,ax,ay,bx,by,temp;
    for(i=0;i<n;i++) {
        ax = Ax[i][i]; ay = Ay[i][i];
        d = ax*ax+ay*ay;
        k = i;
        for(j=i+1;j<n;j++) {
            ax = Ax[j][i]; ay = Ay[j][i];
            d1 = ax*ax+ay*ay;
            if(d1 > d) { k=j; d = d1; }
        }
        if(k!==i) {
            temp = Ax[i]; Ax[i] = Ax[k]; Ax[k] = temp;
            temp = Ay[i]; Ay[i] = Ay[k]; Ay[k] = temp;
            temp = Rx[i]; Rx[i] = Rx[k]; Rx[k] = temp;
            temp = Ry[i]; Ry[i] = Ry[k]; Ry[k] = temp;
        }
        Aix = Ax[i]; Aiy = Ay[i];
        Rix = Rx[i]; Riy = Ry[i];
        ax = Aix[i]; ay = Aiy[i];
        for(j=i+1;j<n;j++) {
            bx = Aix[j]; by = Aiy[j];
            Aix[j] = (bx*ax+by*ay)/d;
            Aiy[j] = (by*ax-bx*ay)/d;
        }
        for(j=0;j<n;j++) {
            bx = Rix[j]; by = Riy[j];
            Rix[j] = (bx*ax+by*ay)/d;
            Riy[j] = (by*ax-bx*ay)/d;
        }
        for(j=i+1;j<n;j++) {
            Ajx = Ax[j]; Ajy = Ay[j];
            Rjx = Rx[j]; Rjy = Ry[j];
            ax = Ajx[i]; ay = Ajy[i];
            for(k=i+1;k<n;k++) {
                bx = Aix[k]; by = Aiy[k];
                Ajx[k] -= bx*ax-by*ay;
                Ajy[k] -= by*ax+bx*ay;
            }
            for(k=0;k<n;k++) {
                bx = Rix[k]; by = Riy[k];
                Rjx[k] -= bx*ax-by*ay;
                Rjy[k] -= by*ax+bx*ay;
            }
        }
    }
    for(i=n-1;i>0;i--) {
        Rix = Rx[i]; Riy = Ry[i];
        for(j=i-1;j>=0;j--) {
            Rjx = Rx[j]; Rjy = Ry[j];
            ax = Ax[j][i]; ay = Ay[j][i];
            for(k=n-1;k>=0;k--) {
                bx = Rix[k]; by = Riy[k];
                Rjx[k] -= ax*bx - ay*by;
                Rjy[k] -= ax*by + ay*bx;
            }
        }
    }
    return new numeric.T(Rx,Ry);
}
numeric.T.prototype.get = function get(i) {
    var x = this.x, y = this.y, k = 0, ik, n = i.length;
    if(y) {
        while(k<n) {
            ik = i[k];
            x = x[ik];
            y = y[ik];
            k++;
        }
        return new numeric.T(x,y);
    }
    while(k<n) {
        ik = i[k];
        x = x[ik];
        k++;
    }
    return new numeric.T(x);
}
numeric.T.prototype.set = function set(i,v) {
    var x = this.x, y = this.y, k = 0, ik, n = i.length, vx = v.x, vy = v.y;
    if(n===0) {
        if(vy) { this.y = vy; }
        else if(y) { this.y = undefined; }
        this.x = x;
        return this;
    }
    if(vy) {
        if(y) { /* ok */ }
        else {
            y = numeric.rep(numeric.dim(x),0);
            this.y = y;
        }
        while(k<n-1) {
            ik = i[k];
            x = x[ik];
            y = y[ik];
            k++;
        }
        ik = i[k];
        x[ik] = vx;
        y[ik] = vy;
        return this;
    }
    if(y) {
        while(k<n-1) {
            ik = i[k];
            x = x[ik];
            y = y[ik];
            k++;
        }
        ik = i[k];
        x[ik] = vx;
        if(vx instanceof Array) y[ik] = numeric.rep(numeric.dim(vx),0);
        else y[ik] = 0;
        return this;
    }
    while(k<n-1) {
        ik = i[k];
        x = x[ik];
        k++;
    }
    ik = i[k];
    x[ik] = vx;
    return this;
}
numeric.T.prototype.getRows = function getRows(i0,i1) {
    var n = i1-i0+1, j;
    var rx = Array(n), ry, x = this.x, y = this.y;
    for(j=i0;j<=i1;j++) { rx[j-i0] = x[j]; }
    if(y) {
        ry = Array(n);
        for(j=i0;j<=i1;j++) { ry[j-i0] = y[j]; }
        return new numeric.T(rx,ry);
    }
    return new numeric.T(rx);
}
numeric.T.prototype.setRows = function setRows(i0,i1,A) {
    var j;
    var rx = this.x, ry = this.y, x = A.x, y = A.y;
    for(j=i0;j<=i1;j++) { rx[j] = x[j-i0]; }
    if(y) {
        if(!ry) { ry = numeric.rep(numeric.dim(rx),0); this.y = ry; }
        for(j=i0;j<=i1;j++) { ry[j] = y[j-i0]; }
    } else if(ry) {
        for(j=i0;j<=i1;j++) { ry[j] = numeric.rep([x[j-i0].length],0); }
    }
    return this;
}
numeric.T.prototype.getRow = function getRow(k) {
    var x = this.x, y = this.y;
    if(y) { return new numeric.T(x[k],y[k]); }
    return new numeric.T(x[k]);
}
numeric.T.prototype.setRow = function setRow(i,v) {
    var rx = this.x, ry = this.y, x = v.x, y = v.y;
    rx[i] = x;
    if(y) {
        if(!ry) { ry = numeric.rep(numeric.dim(rx),0); this.y = ry; }
        ry[i] = y;
    } else if(ry) {
        ry = numeric.rep([x.length],0);
    }
    return this;
}

numeric.T.prototype.getBlock = function getBlock(from,to) {
    var x = this.x, y = this.y, b = numeric.getBlock;
    if(y) { return new numeric.T(b(x,from,to),b(y,from,to)); }
    return new numeric.T(b(x,from,to));
}
numeric.T.prototype.setBlock = function setBlock(from,to,A) {
    if(!(A instanceof numeric.T)) A = new numeric.T(A);
    var x = this.x, y = this.y, b = numeric.setBlock, Ax = A.x, Ay = A.y;
    if(Ay) {
        if(!y) { this.y = numeric.rep(numeric.dim(this),0); y = this.y; }
        b(x,from,to,Ax);
        b(y,from,to,Ay);
        return this;
    }
    b(x,from,to,Ax);
    if(y) b(y,from,to,numeric.rep(numeric.dim(Ax),0));
}
numeric.T.rep = function rep(s,v) {
    var T = numeric.T;
    if(!(v instanceof T)) v = new T(v);
    var x = v.x, y = v.y, r = numeric.rep;
    if(y) return new T(r(s,x),r(s,y));
    return new T(r(s,x));
}
numeric.T.diag = function diag(d) {
    if(!(d instanceof numeric.T)) d = new numeric.T(d);
    var x = d.x, y = d.y, diag = numeric.diag;
    if(y) return new numeric.T(diag(x),diag(y));
    return new numeric.T(diag(x));
}
numeric.T.eig = function eig() {
    if(this.y) { throw new Error('eig: not implemented for complex matrices.'); }
    return numeric.eig(this.x);
}
numeric.T.identity = function identity(n) { return new numeric.T(numeric.identity(n)); }
numeric.T.prototype.getDiag = function getDiag() {
    var n = numeric;
    var x = this.x, y = this.y;
    if(y) { return new n.T(n.getDiag(x),n.getDiag(y)); }
    return new n.T(n.getDiag(x));
}

// 4. Eigenvalues of real matrices

numeric.house = function house(x) {
    var v = numeric.clone(x);
    var s = x[0] >= 0 ? 1 : -1;
    var alpha = s*numeric.norm2(x);
    v[0] += alpha;
    var foo = numeric.norm2(v);
    if(foo === 0) { /* this should not happen */ throw new Error('eig: internal error'); }
    return numeric.div(v,foo);
}

numeric.toUpperHessenberg = function toUpperHessenberg(me) {
    var s = numeric.dim(me);
    if(s.length !== 2 || s[0] !== s[1]) { throw new Error('numeric: toUpperHessenberg() only works on square matrices'); }
    var m = s[0], i,j,k,x,v,A = numeric.clone(me),B,C,Ai,Ci,Q = numeric.identity(m),Qi;
    for(j=0;j<m-2;j++) {
        x = Array(m-j-1);
        for(i=j+1;i<m;i++) { x[i-j-1] = A[i][j]; }
        if(numeric.norm2(x)>0) {
            v = numeric.house(x);
            B = numeric.getBlock(A,[j+1,j],[m-1,m-1]);
            C = numeric.tensor(v,numeric.dot(v,B));
            for(i=j+1;i<m;i++) { Ai = A[i]; Ci = C[i-j-1]; for(k=j;k<m;k++) Ai[k] -= 2*Ci[k-j]; }
            B = numeric.getBlock(A,[0,j+1],[m-1,m-1]);
            C = numeric.tensor(numeric.dot(B,v),v);
            for(i=0;i<m;i++) { Ai = A[i]; Ci = C[i]; for(k=j+1;k<m;k++) Ai[k] -= 2*Ci[k-j-1]; }
            B = Array(m-j-1);
            for(i=j+1;i<m;i++) B[i-j-1] = Q[i];
            C = numeric.tensor(v,numeric.dot(v,B));
            for(i=j+1;i<m;i++) { Qi = Q[i]; Ci = C[i-j-1]; for(k=0;k<m;k++) Qi[k] -= 2*Ci[k]; }
        }
    }
    return {H:A, Q:Q};
}

numeric.epsilon = 2.220446049250313e-16;

numeric.QRFrancis = function(H,maxiter) {
    if(typeof maxiter === "undefined") { maxiter = 10000; }
    H = numeric.clone(H);
    var H0 = numeric.clone(H);
    var s = numeric.dim(H),m=s[0],x,v,a,b,c,d,det,tr, Hloc, Q = numeric.identity(m), Qi, Hi, B, C, Ci,i,j,k,iter;
    if(m<3) { return {Q:Q, B:[ [0,m-1] ]}; }
    var epsilon = numeric.epsilon;
    for(iter=0;iter<maxiter;iter++) {
        for(j=0;j<m-1;j++) {
            if(Math.abs(H[j+1][j]) < epsilon*(Math.abs(H[j][j])+Math.abs(H[j+1][j+1]))) {
                var QH1 = numeric.QRFrancis(numeric.getBlock(H,[0,0],[j,j]),maxiter);
                var QH2 = numeric.QRFrancis(numeric.getBlock(H,[j+1,j+1],[m-1,m-1]),maxiter);
                B = Array(j+1);
                for(i=0;i<=j;i++) { B[i] = Q[i]; }
                C = numeric.dot(QH1.Q,B);
                for(i=0;i<=j;i++) { Q[i] = C[i]; }
                B = Array(m-j-1);
                for(i=j+1;i<m;i++) { B[i-j-1] = Q[i]; }
                C = numeric.dot(QH2.Q,B);
                for(i=j+1;i<m;i++) { Q[i] = C[i-j-1]; }
                return {Q:Q,B:QH1.B.concat(numeric.add(QH2.B,j+1))};
            }
        }
        a = H[m-2][m-2]; b = H[m-2][m-1];
        c = H[m-1][m-2]; d = H[m-1][m-1];
        tr = a+d;
        det = (a*d-b*c);
        Hloc = numeric.getBlock(H, [0,0], [2,2]);
        if(tr*tr>=4*det) {
            var s1,s2;
            s1 = 0.5*(tr+Math.sqrt(tr*tr-4*det));
            s2 = 0.5*(tr-Math.sqrt(tr*tr-4*det));
            Hloc = numeric.add(numeric.sub(numeric.dot(Hloc,Hloc),
                                           numeric.mul(Hloc,s1+s2)),
                               numeric.diag(numeric.rep([3],s1*s2)));
        } else {
            Hloc = numeric.add(numeric.sub(numeric.dot(Hloc,Hloc),
                                           numeric.mul(Hloc,tr)),
                               numeric.diag(numeric.rep([3],det)));
        }
        x = [Hloc[0][0],Hloc[1][0],Hloc[2][0]];
        v = numeric.house(x);
        B = [H[0],H[1],H[2]];
        C = numeric.tensor(v,numeric.dot(v,B));
        for(i=0;i<3;i++) { Hi = H[i]; Ci = C[i]; for(k=0;k<m;k++) Hi[k] -= 2*Ci[k]; }
        B = numeric.getBlock(H, [0,0],[m-1,2]);
        C = numeric.tensor(numeric.dot(B,v),v);
        for(i=0;i<m;i++) { Hi = H[i]; Ci = C[i]; for(k=0;k<3;k++) Hi[k] -= 2*Ci[k]; }
        B = [Q[0],Q[1],Q[2]];
        C = numeric.tensor(v,numeric.dot(v,B));
        for(i=0;i<3;i++) { Qi = Q[i]; Ci = C[i]; for(k=0;k<m;k++) Qi[k] -= 2*Ci[k]; }
        var J;
        for(j=0;j<m-2;j++) {
            for(k=j;k<=j+1;k++) {
                if(Math.abs(H[k+1][k]) < epsilon*(Math.abs(H[k][k])+Math.abs(H[k+1][k+1]))) {
                    var QH1 = numeric.QRFrancis(numeric.getBlock(H,[0,0],[k,k]),maxiter);
                    var QH2 = numeric.QRFrancis(numeric.getBlock(H,[k+1,k+1],[m-1,m-1]),maxiter);
                    B = Array(k+1);
                    for(i=0;i<=k;i++) { B[i] = Q[i]; }
                    C = numeric.dot(QH1.Q,B);
                    for(i=0;i<=k;i++) { Q[i] = C[i]; }
                    B = Array(m-k-1);
                    for(i=k+1;i<m;i++) { B[i-k-1] = Q[i]; }
                    C = numeric.dot(QH2.Q,B);
                    for(i=k+1;i<m;i++) { Q[i] = C[i-k-1]; }
                    return {Q:Q,B:QH1.B.concat(numeric.add(QH2.B,k+1))};
                }
            }
            J = Math.min(m-1,j+3);
            x = Array(J-j);
            for(i=j+1;i<=J;i++) { x[i-j-1] = H[i][j]; }
            v = numeric.house(x);
            B = numeric.getBlock(H, [j+1,j],[J,m-1]);
            C = numeric.tensor(v,numeric.dot(v,B));
            for(i=j+1;i<=J;i++) { Hi = H[i]; Ci = C[i-j-1]; for(k=j;k<m;k++) Hi[k] -= 2*Ci[k-j]; }
            B = numeric.getBlock(H, [0,j+1],[m-1,J]);
            C = numeric.tensor(numeric.dot(B,v),v);
            for(i=0;i<m;i++) { Hi = H[i]; Ci = C[i]; for(k=j+1;k<=J;k++) Hi[k] -= 2*Ci[k-j-1]; }
            B = Array(J-j);
            for(i=j+1;i<=J;i++) B[i-j-1] = Q[i];
            C = numeric.tensor(v,numeric.dot(v,B));
            for(i=j+1;i<=J;i++) { Qi = Q[i]; Ci = C[i-j-1]; for(k=0;k<m;k++) Qi[k] -= 2*Ci[k]; }
        }
    }
    throw new Error('numeric: eigenvalue iteration does not converge -- increase maxiter?');
}

numeric.eig = function eig(A,maxiter) {
    var QH = numeric.toUpperHessenberg(A);
    var QB = numeric.QRFrancis(QH.H,maxiter);
    var T = numeric.T;
    var n = A.length,i,k,flag = false,B = QB.B,H = numeric.dot(QB.Q,numeric.dot(QH.H,numeric.transpose(QB.Q)));
    var Q = new T(numeric.dot(QB.Q,QH.Q)),Q0;
    var m = B.length,j;
    var a,b,c,d,p1,p2,disc,x,y,p,q,n1,n2;
    var sqrt = Math.sqrt;
    for(k=0;k<m;k++) {
        i = B[k][0];
        if(i === B[k][1]) {
            // nothing
        } else {
            j = i+1;
            a = H[i][i];
            b = H[i][j];
            c = H[j][i];
            d = H[j][j];
            if(b === 0 && c === 0) continue;
            p1 = -a-d;
            p2 = a*d-b*c;
            disc = p1*p1-4*p2;
            if(disc>=0) {
                if(p1<0) x = -0.5*(p1-sqrt(disc));
                else     x = -0.5*(p1+sqrt(disc));
                n1 = (a-x)*(a-x)+b*b;
                n2 = c*c+(d-x)*(d-x);
                if(n1>n2) {
                    n1 = sqrt(n1);
                    p = (a-x)/n1;
                    q = b/n1;
                } else {
                    n2 = sqrt(n2);
                    p = c/n2;
                    q = (d-x)/n2;
                }
                Q0 = new T([[q,-p],[p,q]]);
                Q.setRows(i,j,Q0.dot(Q.getRows(i,j)));
            } else {
                x = -0.5*p1;
                y = 0.5*sqrt(-disc);
                n1 = (a-x)*(a-x)+b*b;
                n2 = c*c+(d-x)*(d-x);
                if(n1>n2) {
                    n1 = sqrt(n1+y*y);
                    p = (a-x)/n1;
                    q = b/n1;
                    x = 0;
                    y /= n1;
                } else {
                    n2 = sqrt(n2+y*y);
                    p = c/n2;
                    q = (d-x)/n2;
                    x = y/n2;
                    y = 0;
                }
                Q0 = new T([[q,-p],[p,q]],[[x,y],[y,-x]]);
                Q.setRows(i,j,Q0.dot(Q.getRows(i,j)));
            }
        }
    }
    var R = Q.dot(A).dot(Q.transjugate()), n = A.length, E = numeric.T.identity(n);
    for(j=0;j<n;j++) {
        if(j>0) {
            for(k=j-1;k>=0;k--) {
                var Rk = R.get([k,k]), Rj = R.get([j,j]);
                if(numeric.neq(Rk.x,Rj.x) || numeric.neq(Rk.y,Rj.y)) {
                    x = R.getRow(k).getBlock([k],[j-1]);
                    y = E.getRow(j).getBlock([k],[j-1]);
                    E.set([j,k],(R.get([k,j]).neg().sub(x.dot(y))).div(Rk.sub(Rj)));
                } else {
                    E.setRow(j,E.getRow(k));
                    continue;
                }
            }
        }
    }
    for(j=0;j<n;j++) {
        x = E.getRow(j);
        E.setRow(j,x.div(x.norm2()));
    }
    E = E.transpose();
    E = Q.transjugate().dot(E);
    return { lambda:R.getDiag(), E:E };
};

// 5. Compressed Column Storage matrices
numeric.ccsSparse = function ccsSparse(A) {
    var m = A.length,n,foo, i,j, counts = [];
    for(i=m-1;i!==-1;--i) {
        foo = A[i];
        for(j in foo) {
            j = parseInt(j);
            while(j>=counts.length) counts[counts.length] = 0;
            if(foo[j]!==0) counts[j]++;
        }
    }
    var n = counts.length;
    var Ai = Array(n+1);
    Ai[0] = 0;
    for(i=0;i<n;++i) Ai[i+1] = Ai[i] + counts[i];
    var Aj = Array(Ai[n]), Av = Array(Ai[n]);
    for(i=m-1;i!==-1;--i) {
        foo = A[i];
        for(j in foo) {
            if(foo[j]!==0) {
                counts[j]--;
                Aj[Ai[j]+counts[j]] = i;
                Av[Ai[j]+counts[j]] = foo[j];
            }
        }
    }
    return [Ai,Aj,Av];
}
numeric.ccsFull = function ccsFull(A) {
    var Ai = A[0], Aj = A[1], Av = A[2], s = numeric.ccsDim(A), m = s[0], n = s[1], i,j,j0,j1,k;
    var B = numeric.rep([m,n],0);
    for(i=0;i<n;i++) {
        j0 = Ai[i];
        j1 = Ai[i+1];
        for(j=j0;j<j1;++j) { B[Aj[j]][i] = Av[j]; }
    }
    return B;
}
numeric.ccsTSolve = function ccsTSolve(A,b,x,bj,xj) {
    var Ai = A[0], Aj = A[1], Av = A[2],m = Ai.length-1, max = Math.max,n=0;
    if(typeof bj === "undefined") x = numeric.rep([m],0);
    if(typeof bj === "undefined") bj = numeric.linspace(0,x.length-1);
    if(typeof xj === "undefined") xj = [];
    function dfs(j) {
        var k;
        if(x[j] !== 0) return;
        x[j] = 1;
        for(k=Ai[j];k<Ai[j+1];++k) dfs(Aj[k]);
        xj[n] = j;
        ++n;
    }
    var i,j,j0,j1,k,l,l0,l1,a;
    for(i=bj.length-1;i!==-1;--i) { dfs(bj[i]); }
    xj.length = n;
    for(i=xj.length-1;i!==-1;--i) { x[xj[i]] = 0; }
    for(i=bj.length-1;i!==-1;--i) { j = bj[i]; x[j] = b[j]; }
    for(i=xj.length-1;i!==-1;--i) {
        j = xj[i];
        j0 = Ai[j];
        j1 = max(Ai[j+1],j0);
        for(k=j0;k!==j1;++k) { if(Aj[k] === j) { x[j] /= Av[k]; break; } }
        a = x[j];
        for(k=j0;k!==j1;++k) {
            l = Aj[k];
            if(l !== j) x[l] -= a*Av[k];
        }
    }
    return x;
}
numeric.ccsDFS = function ccsDFS(n) {
    this.k = Array(n);
    this.k1 = Array(n);
    this.j = Array(n);
}
numeric.ccsDFS.prototype.dfs = function dfs(J,Ai,Aj,x,xj,Pinv) {
    var m = 0,foo,n=xj.length;
    var k = this.k, k1 = this.k1, j = this.j,km,k11;
    if(x[J]!==0) return;
    x[J] = 1;
    j[0] = J;
    k[0] = km = Ai[J];
    k1[0] = k11 = Ai[J+1];
    while(1) {
        if(km >= k11) {
            xj[n] = j[m];
            if(m===0) return;
            ++n;
            --m;
            km = k[m];
            k11 = k1[m];
        } else {
            foo = Pinv[Aj[km]];
            if(x[foo] === 0) {
                x[foo] = 1;
                k[m] = km;
                ++m;
                j[m] = foo;
                km = Ai[foo];
                k1[m] = k11 = Ai[foo+1];
            } else ++km;
        }
    }
}
numeric.ccsLPSolve = function ccsLPSolve(A,B,x,xj,I,Pinv,dfs) {
    var Ai = A[0], Aj = A[1], Av = A[2],m = Ai.length-1, n=0;
    var Bi = B[0], Bj = B[1], Bv = B[2];
    
    var i,i0,i1,j,J,j0,j1,k,l,l0,l1,a;
    i0 = Bi[I];
    i1 = Bi[I+1];
    xj.length = 0;
    for(i=i0;i<i1;++i) { dfs.dfs(Pinv[Bj[i]],Ai,Aj,x,xj,Pinv); }
    for(i=xj.length-1;i!==-1;--i) { x[xj[i]] = 0; }
    for(i=i0;i!==i1;++i) { j = Pinv[Bj[i]]; x[j] = Bv[i]; }
    for(i=xj.length-1;i!==-1;--i) {
        j = xj[i];
        j0 = Ai[j];
        j1 = Ai[j+1];
        for(k=j0;k<j1;++k) { if(Pinv[Aj[k]] === j) { x[j] /= Av[k]; break; } }
        a = x[j];
        for(k=j0;k<j1;++k) {
            l = Pinv[Aj[k]];
            if(l !== j) x[l] -= a*Av[k];
        }
    }
    return x;
}
numeric.ccsLUP1 = function ccsLUP1(A,threshold) {
    var m = A[0].length-1;
    var L = [numeric.rep([m+1],0),[],[]], U = [numeric.rep([m+1], 0),[],[]];
    var Li = L[0], Lj = L[1], Lv = L[2], Ui = U[0], Uj = U[1], Uv = U[2];
    var x = numeric.rep([m],0), xj = numeric.rep([m],0);
    var i,j,k,j0,j1,a,e,c,d,K;
    var sol = numeric.ccsLPSolve, max = Math.max, abs = Math.abs;
    var P = numeric.linspace(0,m-1),Pinv = numeric.linspace(0,m-1);
    var dfs = new numeric.ccsDFS(m);
    if(typeof threshold === "undefined") { threshold = 1; }
    for(i=0;i<m;++i) {
        sol(L,A,x,xj,i,Pinv,dfs);
        a = -1;
        e = -1;
        for(j=xj.length-1;j!==-1;--j) {
            k = xj[j];
            if(k <= i) continue;
            c = abs(x[k]);
            if(c > a) { e = k; a = c; }
        }
        if(abs(x[i])<threshold*a) {
            j = P[i];
            a = P[e];
            P[i] = a; Pinv[a] = i;
            P[e] = j; Pinv[j] = e;
            a = x[i]; x[i] = x[e]; x[e] = a;
        }
        a = Li[i];
        e = Ui[i];
        d = x[i];
        Lj[a] = P[i];
        Lv[a] = 1;
        ++a;
        for(j=xj.length-1;j!==-1;--j) {
            k = xj[j];
            c = x[k];
            xj[j] = 0;
            x[k] = 0;
            if(k<=i) { Uj[e] = k; Uv[e] = c;   ++e; }
            else     { Lj[a] = P[k]; Lv[a] = c/d; ++a; }
        }
        Li[i+1] = a;
        Ui[i+1] = e;
    }
    for(j=Lj.length-1;j!==-1;--j) { Lj[j] = Pinv[Lj[j]]; }
    return {L:L, U:U, P:P, Pinv:Pinv};
}
numeric.ccsDFS0 = function ccsDFS0(n) {
    this.k = Array(n);
    this.k1 = Array(n);
    this.j = Array(n);
}
numeric.ccsDFS0.prototype.dfs = function dfs(J,Ai,Aj,x,xj,Pinv,P) {
    var m = 0,foo,n=xj.length;
    var k = this.k, k1 = this.k1, j = this.j,km,k11;
    if(x[J]!==0) return;
    x[J] = 1;
    j[0] = J;
    k[0] = km = Ai[Pinv[J]];
    k1[0] = k11 = Ai[Pinv[J]+1];
    while(1) {
        if(isNaN(km)) throw new Error("Ow!");
        if(km >= k11) {
            xj[n] = Pinv[j[m]];
            if(m===0) return;
            ++n;
            --m;
            km = k[m];
            k11 = k1[m];
        } else {
            foo = Aj[km];
            if(x[foo] === 0) {
                x[foo] = 1;
                k[m] = km;
                ++m;
                j[m] = foo;
                foo = Pinv[foo];
                km = Ai[foo];
                k1[m] = k11 = Ai[foo+1];
            } else ++km;
        }
    }
}
numeric.ccsLPSolve0 = function ccsLPSolve0(A,B,y,xj,I,Pinv,P,dfs) {
    var Ai = A[0], Aj = A[1], Av = A[2],m = Ai.length-1, n=0;
    var Bi = B[0], Bj = B[1], Bv = B[2];
    
    var i,i0,i1,j,J,j0,j1,k,l,l0,l1,a;
    i0 = Bi[I];
    i1 = Bi[I+1];
    xj.length = 0;
    for(i=i0;i<i1;++i) { dfs.dfs(Bj[i],Ai,Aj,y,xj,Pinv,P); }
    for(i=xj.length-1;i!==-1;--i) { j = xj[i]; y[P[j]] = 0; }
    for(i=i0;i!==i1;++i) { j = Bj[i]; y[j] = Bv[i]; }
    for(i=xj.length-1;i!==-1;--i) {
        j = xj[i];
        l = P[j];
        j0 = Ai[j];
        j1 = Ai[j+1];
        for(k=j0;k<j1;++k) { if(Aj[k] === l) { y[l] /= Av[k]; break; } }
        a = y[l];
        for(k=j0;k<j1;++k) y[Aj[k]] -= a*Av[k];
        y[l] = a;
    }
}
numeric.ccsLUP0 = function ccsLUP0(A,threshold) {
    var m = A[0].length-1;
    var L = [numeric.rep([m+1],0),[],[]], U = [numeric.rep([m+1], 0),[],[]];
    var Li = L[0], Lj = L[1], Lv = L[2], Ui = U[0], Uj = U[1], Uv = U[2];
    var y = numeric.rep([m],0), xj = numeric.rep([m],0);
    var i,j,k,j0,j1,a,e,c,d,K;
    var sol = numeric.ccsLPSolve0, max = Math.max, abs = Math.abs;
    var P = numeric.linspace(0,m-1),Pinv = numeric.linspace(0,m-1);
    var dfs = new numeric.ccsDFS0(m);
    if(typeof threshold === "undefined") { threshold = 1; }
    for(i=0;i<m;++i) {
        sol(L,A,y,xj,i,Pinv,P,dfs);
        a = -1;
        e = -1;
        for(j=xj.length-1;j!==-1;--j) {
            k = xj[j];
            if(k <= i) continue;
            c = abs(y[P[k]]);
            if(c > a) { e = k; a = c; }
        }
        if(abs(y[P[i]])<threshold*a) {
            j = P[i];
            a = P[e];
            P[i] = a; Pinv[a] = i;
            P[e] = j; Pinv[j] = e;
        }
        a = Li[i];
        e = Ui[i];
        d = y[P[i]];
        Lj[a] = P[i];
        Lv[a] = 1;
        ++a;
        for(j=xj.length-1;j!==-1;--j) {
            k = xj[j];
            c = y[P[k]];
            xj[j] = 0;
            y[P[k]] = 0;
            if(k<=i) { Uj[e] = k; Uv[e] = c;   ++e; }
            else     { Lj[a] = P[k]; Lv[a] = c/d; ++a; }
        }
        Li[i+1] = a;
        Ui[i+1] = e;
    }
    for(j=Lj.length-1;j!==-1;--j) { Lj[j] = Pinv[Lj[j]]; }
    return {L:L, U:U, P:P, Pinv:Pinv};
}
numeric.ccsLUP = numeric.ccsLUP0;

numeric.ccsDim = function ccsDim(A) { return [numeric.sup(A[1])+1,A[0].length-1]; }
numeric.ccsGetBlock = function ccsGetBlock(A,i,j) {
    var s = numeric.ccsDim(A),m=s[0],n=s[1];
    if(typeof i === "undefined") { i = numeric.linspace(0,m-1); }
    else if(typeof i === "number") { i = [i]; }
    if(typeof j === "undefined") { j = numeric.linspace(0,n-1); }
    else if(typeof j === "number") { j = [j]; }
    var p,p0,p1,P = i.length,q,Q = j.length,r,jq,ip;
    var Bi = numeric.rep([n],0), Bj=[], Bv=[], B = [Bi,Bj,Bv];
    var Ai = A[0], Aj = A[1], Av = A[2];
    var x = numeric.rep([m],0),count=0,flags = numeric.rep([m],0);
    for(q=0;q<Q;++q) {
        jq = j[q];
        var q0 = Ai[jq];
        var q1 = Ai[jq+1];
        for(p=q0;p<q1;++p) {
            r = Aj[p];
            flags[r] = 1;
            x[r] = Av[p];
        }
        for(p=0;p<P;++p) {
            ip = i[p];
            if(flags[ip]) {
                Bj[count] = p;
                Bv[count] = x[i[p]];
                ++count;
            }
        }
        for(p=q0;p<q1;++p) {
            r = Aj[p];
            flags[r] = 0;
        }
        Bi[q+1] = count;
    }
    return B;
}

numeric.ccsDot = function ccsDot(A,B) {
    var Ai = A[0], Aj = A[1], Av = A[2];
    var Bi = B[0], Bj = B[1], Bv = B[2];
    var sA = numeric.ccsDim(A), sB = numeric.ccsDim(B);
    var m = sA[0], n = sA[1], o = sB[1];
    var x = numeric.rep([m],0), flags = numeric.rep([m],0), xj = Array(m);
    var Ci = numeric.rep([o],0), Cj = [], Cv = [], C = [Ci,Cj,Cv];
    var i,j,k,j0,j1,i0,i1,l,p,a,b;
    for(k=0;k!==o;++k) {
        j0 = Bi[k];
        j1 = Bi[k+1];
        p = 0;
        for(j=j0;j<j1;++j) {
            a = Bj[j];
            b = Bv[j];
            i0 = Ai[a];
            i1 = Ai[a+1];
            for(i=i0;i<i1;++i) {
                l = Aj[i];
                if(flags[l]===0) {
                    xj[p] = l;
                    flags[l] = 1;
                    p = p+1;
                }
                x[l] = x[l] + Av[i]*b;
            }
        }
        j0 = Ci[k];
        j1 = j0+p;
        Ci[k+1] = j1;
        for(j=p-1;j!==-1;--j) {
            b = j0+j;
            i = xj[j];
            Cj[b] = i;
            Cv[b] = x[i];
            flags[i] = 0;
            x[i] = 0;
        }
        Ci[k+1] = Ci[k]+p;
    }
    return C;
}

numeric.ccsLUPSolve = function ccsLUPSolve(LUP,B) {
    var L = LUP.L, U = LUP.U, P = LUP.P;
    var Bi = B[0];
    var flag = false;
    if(typeof Bi !== "object") { B = [[0,B.length],numeric.linspace(0,B.length-1),B]; Bi = B[0]; flag = true; }
    var Bj = B[1], Bv = B[2];
    var n = L[0].length-1, m = Bi.length-1;
    var x = numeric.rep([n],0), xj = Array(n);
    var b = numeric.rep([n],0), bj = Array(n);
    var Xi = numeric.rep([m+1],0), Xj = [], Xv = [];
    var sol = numeric.ccsTSolve;
    var i,j,j0,j1,k,J,N=0;
    for(i=0;i<m;++i) {
        k = 0;
        j0 = Bi[i];
        j1 = Bi[i+1];
        for(j=j0;j<j1;++j) { 
            J = LUP.Pinv[Bj[j]];
            bj[k] = J;
            b[J] = Bv[j];
            ++k;
        }
        bj.length = k;
        sol(L,b,x,bj,xj);
        for(j=bj.length-1;j!==-1;--j) b[bj[j]] = 0;
        sol(U,x,b,xj,bj);
        if(flag) return b;
        for(j=xj.length-1;j!==-1;--j) x[xj[j]] = 0;
        for(j=bj.length-1;j!==-1;--j) {
            J = bj[j];
            Xj[N] = J;
            Xv[N] = b[J];
            b[J] = 0;
            ++N;
        }
        Xi[i+1] = N;
    }
    return [Xi,Xj,Xv];
}

numeric.ccsbinop = function ccsbinop(body,setup) {
    if(typeof setup === "undefined") setup='';
    return Function('X','Y',
            'var Xi = X[0], Xj = X[1], Xv = X[2];\n'+
            'var Yi = Y[0], Yj = Y[1], Yv = Y[2];\n'+
            'var n = Xi.length-1,m = Math.max(numeric.sup(Xj),numeric.sup(Yj))+1;\n'+
            'var Zi = numeric.rep([n+1],0), Zj = [], Zv = [];\n'+
            'var x = numeric.rep([m],0),y = numeric.rep([m],0);\n'+
            'var xk,yk,zk;\n'+
            'var i,j,j0,j1,k,p=0;\n'+
            setup+
            'for(i=0;i<n;++i) {\n'+
            '  j0 = Xi[i]; j1 = Xi[i+1];\n'+
            '  for(j=j0;j!==j1;++j) {\n'+
            '    k = Xj[j];\n'+
            '    x[k] = 1;\n'+
            '    Zj[p] = k;\n'+
            '    ++p;\n'+
            '  }\n'+
            '  j0 = Yi[i]; j1 = Yi[i+1];\n'+
            '  for(j=j0;j!==j1;++j) {\n'+
            '    k = Yj[j];\n'+
            '    y[k] = Yv[j];\n'+
            '    if(x[k] === 0) {\n'+
            '      Zj[p] = k;\n'+
            '      ++p;\n'+
            '    }\n'+
            '  }\n'+
            '  Zi[i+1] = p;\n'+
            '  j0 = Xi[i]; j1 = Xi[i+1];\n'+
            '  for(j=j0;j!==j1;++j) x[Xj[j]] = Xv[j];\n'+
            '  j0 = Zi[i]; j1 = Zi[i+1];\n'+
            '  for(j=j0;j!==j1;++j) {\n'+
            '    k = Zj[j];\n'+
            '    xk = x[k];\n'+
            '    yk = y[k];\n'+
            body+'\n'+
            '    Zv[j] = zk;\n'+
            '  }\n'+
            '  j0 = Xi[i]; j1 = Xi[i+1];\n'+
            '  for(j=j0;j!==j1;++j) x[Xj[j]] = 0;\n'+
            '  j0 = Yi[i]; j1 = Yi[i+1];\n'+
            '  for(j=j0;j!==j1;++j) y[Yj[j]] = 0;\n'+
            '}\n'+
            'return [Zi,Zj,Zv];'
            );
};

(function() {
    var k,A,B,C;
    for(k in numeric.ops2) {
        if(isFinite(eval('1'+numeric.ops2[k]+'0'))) A = '[Y[0],Y[1],numeric.'+k+'(X,Y[2])]';
        else A = 'NaN';
        if(isFinite(eval('0'+numeric.ops2[k]+'1'))) B = '[X[0],X[1],numeric.'+k+'(X[2],Y)]';
        else B = 'NaN';
        if(isFinite(eval('1'+numeric.ops2[k]+'0')) && isFinite(eval('0'+numeric.ops2[k]+'1'))) C = 'numeric.ccs'+k+'MM(X,Y)';
        else C = 'NaN';
        numeric['ccs'+k+'MM'] = numeric.ccsbinop('zk = xk '+numeric.ops2[k]+'yk;');
        numeric['ccs'+k] = Function('X','Y',
                'if(typeof X === "number") return '+A+';\n'+
                'if(typeof Y === "number") return '+B+';\n'+
                'return '+C+';\n'
                );
    }
}());

numeric.ccsScatter = function ccsScatter(A) {
    var Ai = A[0], Aj = A[1], Av = A[2];
    var n = numeric.sup(Aj)+1,m=Ai.length;
    var Ri = numeric.rep([n],0),Rj=Array(m), Rv = Array(m);
    var counts = numeric.rep([n],0),i;
    for(i=0;i<m;++i) counts[Aj[i]]++;
    for(i=0;i<n;++i) Ri[i+1] = Ri[i] + counts[i];
    var ptr = Ri.slice(0),k,Aii;
    for(i=0;i<m;++i) {
        Aii = Aj[i];
        k = ptr[Aii];
        Rj[k] = Ai[i];
        Rv[k] = Av[i];
        ptr[Aii]=ptr[Aii]+1;
    }
    return [Ri,Rj,Rv];
}

numeric.ccsGather = function ccsGather(A) {
    var Ai = A[0], Aj = A[1], Av = A[2];
    var n = Ai.length-1,m = Aj.length;
    var Ri = Array(m), Rj = Array(m), Rv = Array(m);
    var i,j,j0,j1,p;
    p=0;
    for(i=0;i<n;++i) {
        j0 = Ai[i];
        j1 = Ai[i+1];
        for(j=j0;j!==j1;++j) {
            Rj[p] = i;
            Ri[p] = Aj[j];
            Rv[p] = Av[j];
            ++p;
        }
    }
    return [Ri,Rj,Rv];
}

// The following sparse linear algebra routines are deprecated.

numeric.sdim = function dim(A,ret,k) {
    if(typeof ret === "undefined") { ret = []; }
    if(typeof A !== "object") return ret;
    if(typeof k === "undefined") { k=0; }
    if(!(k in ret)) { ret[k] = 0; }
    if(A.length > ret[k]) ret[k] = A.length;
    var i;
    for(i in A) {
        if(A.hasOwnProperty(i)) dim(A[i],ret,k+1);
    }
    return ret;
};

numeric.sclone = function clone(A,k,n) {
    if(typeof k === "undefined") { k=0; }
    if(typeof n === "undefined") { n = numeric.sdim(A).length; }
    var i,ret = Array(A.length);
    if(k === n-1) {
        for(i in A) { if(A.hasOwnProperty(i)) ret[i] = A[i]; }
        return ret;
    }
    for(i in A) {
        if(A.hasOwnProperty(i)) ret[i] = clone(A[i],k+1,n);
    }
    return ret;
}

numeric.sdiag = function diag(d) {
    var n = d.length,i,ret = Array(n),i1,i2,i3;
    for(i=n-1;i>=1;i-=2) {
        i1 = i-1;
        ret[i] = []; ret[i][i] = d[i];
        ret[i1] = []; ret[i1][i1] = d[i1];
    }
    if(i===0) { ret[0] = []; ret[0][0] = d[i]; }
    return ret;
}

numeric.sidentity = function identity(n) { return numeric.sdiag(numeric.rep([n],1)); }

numeric.stranspose = function transpose(A) {
    var ret = [], n = A.length, i,j,Ai;
    for(i in A) {
        if(!(A.hasOwnProperty(i))) continue;
        Ai = A[i];
        for(j in Ai) {
            if(!(Ai.hasOwnProperty(j))) continue;
            if(typeof ret[j] !== "object") { ret[j] = []; }
            ret[j][i] = Ai[j];
        }
    }
    return ret;
}

numeric.sLUP = function LUP(A,tol) {
    throw new Error("The function numeric.sLUP had a bug in it and has been removed. Please use the new numeric.ccsLUP function instead.");
};

numeric.sdotMM = function dotMM(A,B) {
    var p = A.length, q = B.length, BT = numeric.stranspose(B), r = BT.length, Ai, BTk;
    var i,j,k,accum;
    var ret = Array(p),reti;
    for(i=p-1;i>=0;i--) {
        reti = [];
        Ai = A[i];
        for(k=r-1;k>=0;k--) {
            accum = 0;
            BTk = BT[k];
            for(j in Ai) {
                if(!(Ai.hasOwnProperty(j))) continue;
                if(j in BTk) { accum += Ai[j]*BTk[j]; }
            }
            if(accum) reti[k] = accum;
        }
        ret[i] = reti;
    }
    return ret;
}

numeric.sdotMV = function dotMV(A,x) {
    var p = A.length, Ai, i,j;
    var ret = Array(p), accum;
    for(i=p-1;i>=0;i--) {
        Ai = A[i];
        accum = 0;
        for(j in Ai) {
            if(!(Ai.hasOwnProperty(j))) continue;
            if(x[j]) accum += Ai[j]*x[j];
        }
        if(accum) ret[i] = accum;
    }
    return ret;
}

numeric.sdotVM = function dotMV(x,A) {
    var i,j,Ai,alpha;
    var ret = [], accum;
    for(i in x) {
        if(!x.hasOwnProperty(i)) continue;
        Ai = A[i];
        alpha = x[i];
        for(j in Ai) {
            if(!Ai.hasOwnProperty(j)) continue;
            if(!ret[j]) { ret[j] = 0; }
            ret[j] += alpha*Ai[j];
        }
    }
    return ret;
}

numeric.sdotVV = function dotVV(x,y) {
    var i,ret=0;
    for(i in x) { if(x[i] && y[i]) ret+= x[i]*y[i]; }
    return ret;
}

numeric.sdot = function dot(A,B) {
    var m = numeric.sdim(A).length, n = numeric.sdim(B).length;
    var k = m*1000+n;
    switch(k) {
    case 0: return A*B;
    case 1001: return numeric.sdotVV(A,B);
    case 2001: return numeric.sdotMV(A,B);
    case 1002: return numeric.sdotVM(A,B);
    case 2002: return numeric.sdotMM(A,B);
    default: throw new Error('numeric.sdot not implemented for tensors of order '+m+' and '+n);
    }
}

numeric.sscatter = function scatter(V) {
    var n = V[0].length, Vij, i, j, m = V.length, A = [], Aj;
    for(i=n-1;i>=0;--i) {
        if(!V[m-1][i]) continue;
        Aj = A;
        for(j=0;j<m-2;j++) {
            Vij = V[j][i];
            if(!Aj[Vij]) Aj[Vij] = [];
            Aj = Aj[Vij];
        }
        Aj[V[j][i]] = V[j+1][i];
    }
    return A;
}

numeric.sgather = function gather(A,ret,k) {
    if(typeof ret === "undefined") ret = [];
    if(typeof k === "undefined") k = [];
    var n,i,Ai;
    n = k.length;
    for(i in A) {
        if(A.hasOwnProperty(i)) {
            k[n] = parseInt(i);
            Ai = A[i];
            if(typeof Ai === "number") {
                if(Ai) {
                    if(ret.length === 0) {
                        for(i=n+1;i>=0;--i) ret[i] = [];
                    }
                    for(i=n;i>=0;--i) ret[i].push(k[i]);
                    ret[n+1].push(Ai);
                }
            } else gather(Ai,ret,k);
        }
    }
    if(k.length>n) k.pop();
    return ret;
}

// 6. Coordinate matrices
numeric.cLU = function LU(A) {
    var I = A[0], J = A[1], V = A[2];
    var p = I.length, m=0, i,j,k,a,b,c;
    for(i=0;i<p;i++) if(I[i]>m) m=I[i];
    m++;
    var L = Array(m), U = Array(m), left = numeric.rep([m],Infinity), right = numeric.rep([m],-Infinity);
    var Ui, Uj,alpha;
    for(k=0;k<p;k++) {
        i = I[k];
        j = J[k];
        if(j<left[i]) left[i] = j;
        if(j>right[i]) right[i] = j;
    }
    for(i=0;i<m-1;i++) { if(right[i] > right[i+1]) right[i+1] = right[i]; }
    for(i=m-1;i>=1;i--) { if(left[i]<left[i-1]) left[i-1] = left[i]; }
    var countL = 0, countU = 0;
    for(i=0;i<m;i++) {
        U[i] = numeric.rep([right[i]-left[i]+1],0);
        L[i] = numeric.rep([i-left[i]],0);
        countL += i-left[i]+1;
        countU += right[i]-i+1;
    }
    for(k=0;k<p;k++) { i = I[k]; U[i][J[k]-left[i]] = V[k]; }
    for(i=0;i<m-1;i++) {
        a = i-left[i];
        Ui = U[i];
        for(j=i+1;left[j]<=i && j<m;j++) {
            b = i-left[j];
            c = right[i]-i;
            Uj = U[j];
            alpha = Uj[b]/Ui[a];
            if(alpha) {
                for(k=1;k<=c;k++) { Uj[k+b] -= alpha*Ui[k+a]; }
                L[j][i-left[j]] = alpha;
            }
        }
    }
    var Ui = [], Uj = [], Uv = [], Li = [], Lj = [], Lv = [];
    var p,q,foo;
    p=0; q=0;
    for(i=0;i<m;i++) {
        a = left[i];
        b = right[i];
        foo = U[i];
        for(j=i;j<=b;j++) {
            if(foo[j-a]) {
                Ui[p] = i;
                Uj[p] = j;
                Uv[p] = foo[j-a];
                p++;
            }
        }
        foo = L[i];
        for(j=a;j<i;j++) {
            if(foo[j-a]) {
                Li[q] = i;
                Lj[q] = j;
                Lv[q] = foo[j-a];
                q++;
            }
        }
        Li[q] = i;
        Lj[q] = i;
        Lv[q] = 1;
        q++;
    }
    return {U:[Ui,Uj,Uv], L:[Li,Lj,Lv]};
};

numeric.cLUsolve = function LUsolve(lu,b) {
    var L = lu.L, U = lu.U, ret = numeric.clone(b);
    var Li = L[0], Lj = L[1], Lv = L[2];
    var Ui = U[0], Uj = U[1], Uv = U[2];
    var p = Ui.length, q = Li.length;
    var m = ret.length,i,j,k;
    k = 0;
    for(i=0;i<m;i++) {
        while(Lj[k] < i) {
            ret[i] -= Lv[k]*ret[Lj[k]];
            k++;
        }
        k++;
    }
    k = p-1;
    for(i=m-1;i>=0;i--) {
        while(Uj[k] > i) {
            ret[i] -= Uv[k]*ret[Uj[k]];
            k--;
        }
        ret[i] /= Uv[k];
        k--;
    }
    return ret;
};

numeric.cgrid = function grid(n,shape) {
    if(typeof n === "number") n = [n,n];
    var ret = numeric.rep(n,-1);
    var i,j,count;
    if(typeof shape !== "function") {
        switch(shape) {
        case 'L':
            shape = function(i,j) { return (i>=n[0]/2 || j<n[1]/2); }
            break;
        default:
            shape = function(i,j) { return true; };
            break;
        }
    }
    count=0;
    for(i=1;i<n[0]-1;i++) for(j=1;j<n[1]-1;j++) 
        if(shape(i,j)) {
            ret[i][j] = count;
            count++;
        }
    return ret;
}

numeric.cdelsq = function delsq(g) {
    var dir = [[-1,0],[0,-1],[0,1],[1,0]];
    var s = numeric.dim(g), m = s[0], n = s[1], i,j,k,p,q;
    var Li = [], Lj = [], Lv = [];
    for(i=1;i<m-1;i++) for(j=1;j<n-1;j++) {
        if(g[i][j]<0) continue;
        for(k=0;k<4;k++) {
            p = i+dir[k][0];
            q = j+dir[k][1];
            if(g[p][q]<0) continue;
            Li.push(g[i][j]);
            Lj.push(g[p][q]);
            Lv.push(-1);
        }
        Li.push(g[i][j]);
        Lj.push(g[i][j]);
        Lv.push(4);
    }
    return [Li,Lj,Lv];
}

numeric.cdotMV = function dotMV(A,x) {
    var ret, Ai = A[0], Aj = A[1], Av = A[2],k,p=Ai.length,N;
    N=0;
    for(k=0;k<p;k++) { if(Ai[k]>N) N = Ai[k]; }
    N++;
    ret = numeric.rep([N],0);
    for(k=0;k<p;k++) { ret[Ai[k]]+=Av[k]*x[Aj[k]]; }
    return ret;
}

// 7. Splines

numeric.Spline = function Spline(x,yl,yr,kl,kr) { this.x = x; this.yl = yl; this.yr = yr; this.kl = kl; this.kr = kr; }
numeric.Spline.prototype._at = function _at(x1,p) {
    var x = this.x;
    var yl = this.yl;
    var yr = this.yr;
    var kl = this.kl;
    var kr = this.kr;
    var x1,a,b,t;
    var add = numeric.add, sub = numeric.sub, mul = numeric.mul;
    a = sub(mul(kl[p],x[p+1]-x[p]),sub(yr[p+1],yl[p]));
    b = add(mul(kr[p+1],x[p]-x[p+1]),sub(yr[p+1],yl[p]));
    t = (x1-x[p])/(x[p+1]-x[p]);
    var s = t*(1-t);
    return add(add(add(mul(1-t,yl[p]),mul(t,yr[p+1])),mul(a,s*(1-t))),mul(b,s*t));
}
numeric.Spline.prototype.at = function at(x0) {
    if(typeof x0 === "number") {
        var x = this.x;
        var n = x.length;
        var p,q,mid,floor = Math.floor,a,b,t;
        p = 0;
        q = n-1;
        while(q-p>1) {
            mid = floor((p+q)/2);
            if(x[mid] <= x0) p = mid;
            else q = mid;
        }
        return this._at(x0,p);
    }
    var n = x0.length, i, ret = Array(n);
    for(i=n-1;i!==-1;--i) ret[i] = this.at(x0[i]);
    return ret;
}
numeric.Spline.prototype.diff = function diff() {
    var x = this.x;
    var yl = this.yl;
    var yr = this.yr;
    var kl = this.kl;
    var kr = this.kr;
    var n = yl.length;
    var i,dx,dy;
    var zl = kl, zr = kr, pl = Array(n), pr = Array(n);
    var add = numeric.add, mul = numeric.mul, div = numeric.div, sub = numeric.sub;
    for(i=n-1;i!==-1;--i) {
        dx = x[i+1]-x[i];
        dy = sub(yr[i+1],yl[i]);
        pl[i] = div(add(mul(dy, 6),mul(kl[i],-4*dx),mul(kr[i+1],-2*dx)),dx*dx);
        pr[i+1] = div(add(mul(dy,-6),mul(kl[i], 2*dx),mul(kr[i+1], 4*dx)),dx*dx);
    }
    return new numeric.Spline(x,zl,zr,pl,pr);
}
numeric.Spline.prototype.roots = function roots() {
    function sqr(x) { return x*x; }
    function heval(y0,y1,k0,k1,x) {
        var A = k0*2-(y1-y0);
        var B = -k1*2+(y1-y0);
        var t = (x+1)*0.5;
        var s = t*(1-t);
        return (1-t)*y0+t*y1+A*s*(1-t)+B*s*t;
    }
    var ret = [];
    var x = this.x, yl = this.yl, yr = this.yr, kl = this.kl, kr = this.kr;
    if(typeof yl[0] === "number") {
        yl = [yl];
        yr = [yr];
        kl = [kl];
        kr = [kr];
    }
    var m = yl.length,n=x.length-1,i,j,k,y,s,t;
    var ai,bi,ci,di, ret = Array(m),ri,k0,k1,y0,y1,A,B,D,dx,cx,stops,z0,z1,zm,t0,t1,tm;
    var sqrt = Math.sqrt;
    for(i=0;i!==m;++i) {
        ai = yl[i];
        bi = yr[i];
        ci = kl[i];
        di = kr[i];
        ri = [];
        for(j=0;j!==n;j++) {
            if(j>0 && bi[j]*ai[j]<0) ri.push(x[j]);
            dx = (x[j+1]-x[j]);
            cx = x[j];
            y0 = ai[j];
            y1 = bi[j+1];
            k0 = ci[j]/dx;
            k1 = di[j+1]/dx;
            D = sqr(k0-k1+3*(y0-y1)) + 12*k1*y0;
            A = k1+3*y0+2*k0-3*y1;
            B = 3*(k1+k0+2*(y0-y1));
            if(D<=0) {
                z0 = A/B;
                if(z0>x[j] && z0<x[j+1]) stops = [x[j],z0,x[j+1]];
                else stops = [x[j],x[j+1]];
            } else {
                z0 = (A-sqrt(D))/B;
                z1 = (A+sqrt(D))/B;
                stops = [x[j]];
                if(z0>x[j] && z0<x[j+1]) stops.push(z0);
                if(z1>x[j] && z1<x[j+1]) stops.push(z1);
                stops.push(x[j+1]);
            }
            t0 = stops[0];
            z0 = this._at(t0,j);
            for(k=0;k<stops.length-1;k++) {
                t1 = stops[k+1];
                z1 = this._at(t1,j);
                if(z0 === 0) {
                    ri.push(t0); 
                    t0 = t1;
                    z0 = z1;
                    continue;
                }
                if(z1 === 0 || z0*z1>0) {
                    t0 = t1;
                    z0 = z1;
                    continue;
                }
                var side = 0;
                while(1) {
                    tm = (z0*t1-z1*t0)/(z0-z1);
                    if(tm <= t0 || tm >= t1) { break; }
                    zm = this._at(tm,j);
                    if(zm*z1>0) {
                        t1 = tm;
                        z1 = zm;
                        if(side === -1) z0*=0.5;
                        side = -1;
                    } else if(zm*z0>0) {
                        t0 = tm;
                        z0 = zm;
                        if(side === 1) z1*=0.5;
                        side = 1;
                    } else break;
                }
                ri.push(tm);
                t0 = stops[k+1];
                z0 = this._at(t0, j);
            }
            if(z1 === 0) ri.push(t1);
        }
        ret[i] = ri;
    }
    if(typeof this.yl[0] === "number") return ret[0];
    return ret;
}
numeric.spline = function spline(x,y,k1,kn) {
    var n = x.length, b = [], dx = [], dy = [];
    var i;
    var sub = numeric.sub,mul = numeric.mul,add = numeric.add;
    for(i=n-2;i>=0;i--) { dx[i] = x[i+1]-x[i]; dy[i] = sub(y[i+1],y[i]); }
    if(typeof k1 === "string" || typeof kn === "string") { 
        k1 = kn = "periodic";
    }
    // Build sparse tridiagonal system
    var T = [[],[],[]];
    switch(typeof k1) {
    case "undefined":
        b[0] = mul(3/(dx[0]*dx[0]),dy[0]);
        T[0].push(0,0);
        T[1].push(0,1);
        T[2].push(2/dx[0],1/dx[0]);
        break;
    case "string":
        b[0] = add(mul(3/(dx[n-2]*dx[n-2]),dy[n-2]),mul(3/(dx[0]*dx[0]),dy[0]));
        T[0].push(0,0,0);
        T[1].push(n-2,0,1);
        T[2].push(1/dx[n-2],2/dx[n-2]+2/dx[0],1/dx[0]);
        break;
    default:
        b[0] = k1;
        T[0].push(0);
        T[1].push(0);
        T[2].push(1);
        break;
    }
    for(i=1;i<n-1;i++) {
        b[i] = add(mul(3/(dx[i-1]*dx[i-1]),dy[i-1]),mul(3/(dx[i]*dx[i]),dy[i]));
        T[0].push(i,i,i);
        T[1].push(i-1,i,i+1);
        T[2].push(1/dx[i-1],2/dx[i-1]+2/dx[i],1/dx[i]);
    }
    switch(typeof kn) {
    case "undefined":
        b[n-1] = mul(3/(dx[n-2]*dx[n-2]),dy[n-2]);
        T[0].push(n-1,n-1);
        T[1].push(n-2,n-1);
        T[2].push(1/dx[n-2],2/dx[n-2]);
        break;
    case "string":
        T[1][T[1].length-1] = 0;
        break;
    default:
        b[n-1] = kn;
        T[0].push(n-1);
        T[1].push(n-1);
        T[2].push(1);
        break;
    }
    if(typeof b[0] !== "number") b = numeric.transpose(b);
    else b = [b];
    var k = Array(b.length);
    if(typeof k1 === "string") {
        for(i=k.length-1;i!==-1;--i) {
            k[i] = numeric.ccsLUPSolve(numeric.ccsLUP(numeric.ccsScatter(T)),b[i]);
            k[i][n-1] = k[i][0];
        }
    } else {
        for(i=k.length-1;i!==-1;--i) {
            k[i] = numeric.cLUsolve(numeric.cLU(T),b[i]);
        }
    }
    if(typeof y[0] === "number") k = k[0];
    else k = numeric.transpose(k);
    return new numeric.Spline(x,y,y,k,k);
}

// 8. FFT
numeric.fftpow2 = function fftpow2(x,y) {
    var n = x.length;
    if(n === 1) return;
    var cos = Math.cos, sin = Math.sin, i,j;
    var xe = Array(n/2), ye = Array(n/2), xo = Array(n/2), yo = Array(n/2);
    j = n/2;
    for(i=n-1;i!==-1;--i) {
        --j;
        xo[j] = x[i];
        yo[j] = y[i];
        --i;
        xe[j] = x[i];
        ye[j] = y[i];
    }
    fftpow2(xe,ye);
    fftpow2(xo,yo);
    j = n/2;
    var t,k = (-6.2831853071795864769252867665590057683943387987502116419/n),ci,si;
    for(i=n-1;i!==-1;--i) {
        --j;
        if(j === -1) j = n/2-1;
        t = k*i;
        ci = cos(t);
        si = sin(t);
        x[i] = xe[j] + ci*xo[j] - si*yo[j];
        y[i] = ye[j] + ci*yo[j] + si*xo[j];
    }
}
numeric._ifftpow2 = function _ifftpow2(x,y) {
    var n = x.length;
    if(n === 1) return;
    var cos = Math.cos, sin = Math.sin, i,j;
    var xe = Array(n/2), ye = Array(n/2), xo = Array(n/2), yo = Array(n/2);
    j = n/2;
    for(i=n-1;i!==-1;--i) {
        --j;
        xo[j] = x[i];
        yo[j] = y[i];
        --i;
        xe[j] = x[i];
        ye[j] = y[i];
    }
    _ifftpow2(xe,ye);
    _ifftpow2(xo,yo);
    j = n/2;
    var t,k = (6.2831853071795864769252867665590057683943387987502116419/n),ci,si;
    for(i=n-1;i!==-1;--i) {
        --j;
        if(j === -1) j = n/2-1;
        t = k*i;
        ci = cos(t);
        si = sin(t);
        x[i] = xe[j] + ci*xo[j] - si*yo[j];
        y[i] = ye[j] + ci*yo[j] + si*xo[j];
    }
}
numeric.ifftpow2 = function ifftpow2(x,y) {
    numeric._ifftpow2(x,y);
    numeric.diveq(x,x.length);
    numeric.diveq(y,y.length);
}
numeric.convpow2 = function convpow2(ax,ay,bx,by) {
    numeric.fftpow2(ax,ay);
    numeric.fftpow2(bx,by);
    var i,n = ax.length,axi,bxi,ayi,byi;
    for(i=n-1;i!==-1;--i) {
        axi = ax[i]; ayi = ay[i]; bxi = bx[i]; byi = by[i];
        ax[i] = axi*bxi-ayi*byi;
        ay[i] = axi*byi+ayi*bxi;
    }
    numeric.ifftpow2(ax,ay);
}
numeric.T.prototype.fft = function fft() {
    var x = this.x, y = this.y;
    var n = x.length, log = Math.log, log2 = log(2),
        p = Math.ceil(log(2*n-1)/log2), m = Math.pow(2,p);
    var cx = numeric.rep([m],0), cy = numeric.rep([m],0), cos = Math.cos, sin = Math.sin;
    var k, c = (-3.141592653589793238462643383279502884197169399375105820/n),t;
    var a = numeric.rep([m],0), b = numeric.rep([m],0),nhalf = Math.floor(n/2);
    for(k=0;k<n;k++) a[k] = x[k];
    if(typeof y !== "undefined") for(k=0;k<n;k++) b[k] = y[k];
    cx[0] = 1;
    for(k=1;k<=m/2;k++) {
        t = c*k*k;
        cx[k] = cos(t);
        cy[k] = sin(t);
        cx[m-k] = cos(t);
        cy[m-k] = sin(t)
    }
    var X = new numeric.T(a,b), Y = new numeric.T(cx,cy);
    X = X.mul(Y);
    numeric.convpow2(X.x,X.y,numeric.clone(Y.x),numeric.neg(Y.y));
    X = X.mul(Y);
    X.x.length = n;
    X.y.length = n;
    return X;
}
numeric.T.prototype.ifft = function ifft() {
    var x = this.x, y = this.y;
    var n = x.length, log = Math.log, log2 = log(2),
        p = Math.ceil(log(2*n-1)/log2), m = Math.pow(2,p);
    var cx = numeric.rep([m],0), cy = numeric.rep([m],0), cos = Math.cos, sin = Math.sin;
    var k, c = (3.141592653589793238462643383279502884197169399375105820/n),t;
    var a = numeric.rep([m],0), b = numeric.rep([m],0),nhalf = Math.floor(n/2);
    for(k=0;k<n;k++) a[k] = x[k];
    if(typeof y !== "undefined") for(k=0;k<n;k++) b[k] = y[k];
    cx[0] = 1;
    for(k=1;k<=m/2;k++) {
        t = c*k*k;
        cx[k] = cos(t);
        cy[k] = sin(t);
        cx[m-k] = cos(t);
        cy[m-k] = sin(t)
    }
    var X = new numeric.T(a,b), Y = new numeric.T(cx,cy);
    X = X.mul(Y);
    numeric.convpow2(X.x,X.y,numeric.clone(Y.x),numeric.neg(Y.y));
    X = X.mul(Y);
    X.x.length = n;
    X.y.length = n;
    return X.div(n);
}

//9. Unconstrained optimization
numeric.gradient = function gradient(f,x) {
    var n = x.length;
    var f0 = f(x);
    if(isNaN(f0)) throw new Error('gradient: f(x) is a NaN!');
    var max = Math.max;
    var i,x0 = numeric.clone(x),f1,f2, J = Array(n);
    var div = numeric.div, sub = numeric.sub,errest,roundoff,max = Math.max,eps = 1e-3,abs = Math.abs, min = Math.min;
    var t0,t1,t2,it=0,d1,d2,N;
    for(i=0;i<n;i++) {
        var h = max(1e-6*f0,1e-8);
        while(1) {
            ++it;
            if(it>20) { throw new Error("Numerical gradient fails"); }
            x0[i] = x[i]+h;
            f1 = f(x0);
            x0[i] = x[i]-h;
            f2 = f(x0);
            x0[i] = x[i];
            if(isNaN(f1) || isNaN(f2)) { h/=16; continue; }
            J[i] = (f1-f2)/(2*h);
            t0 = x[i]-h;
            t1 = x[i];
            t2 = x[i]+h;
            d1 = (f1-f0)/h;
            d2 = (f0-f2)/h;
            N = max(abs(J[i]),abs(f0),abs(f1),abs(f2),abs(t0),abs(t1),abs(t2),1e-8);
            errest = min(max(abs(d1-J[i]),abs(d2-J[i]),abs(d1-d2))/N,h/N);
            if(errest>eps) { h/=16; }
            else break;
            }
    }
    return J;
}

numeric.uncmin = function uncmin(f,x0,tol,gradient,maxit,callback,options) {
    var grad = numeric.gradient;
    if(typeof options === "undefined") { options = {}; }
    if(typeof tol === "undefined") { tol = 1e-8; }
    if(typeof gradient === "undefined") { gradient = function(x) { return grad(f,x); }; }
    if(typeof maxit === "undefined") maxit = 1000;
    x0 = numeric.clone(x0);
    var n = x0.length;
    var f0 = f(x0),f1,df0;
    if(isNaN(f0)) throw new Error('uncmin: f(x0) is a NaN!');
    var max = Math.max, norm2 = numeric.norm2;
    tol = max(tol,numeric.epsilon);
    var step,g0,g1,H1 = options.Hinv || numeric.identity(n);
    var dot = numeric.dot, inv = numeric.inv, sub = numeric.sub, add = numeric.add, ten = numeric.tensor, div = numeric.div, mul = numeric.mul;
    var all = numeric.all, isfinite = numeric.isFinite, neg = numeric.neg;
    var it=0,i,s,x1,y,Hy,Hs,ys,i0,t,nstep,t1,t2;
    var msg = "";
    g0 = gradient(x0);
    while(it<maxit) {
        if(typeof callback === "function") { if(callback(it,x0,f0,g0,H1)) { msg = "Callback returned true"; break; } }
        if(!all(isfinite(g0))) { msg = "Gradient has Infinity or NaN"; break; }
        step = neg(dot(H1,g0));
        if(!all(isfinite(step))) { msg = "Search direction has Infinity or NaN"; break; }
        nstep = norm2(step);
        if(nstep < tol) { msg="Newton step smaller than tol"; break; }
        t = 1;
        df0 = dot(g0,step);
        // line search
        x1 = x0;
        while(it < maxit) {
            if(t*nstep < tol) { break; }
            s = mul(step,t);
            x1 = add(x0,s);
            f1 = f(x1);
            if(f1-f0 >= 0.1*t*df0 || isNaN(f1)) {
                t *= 0.5;
                ++it;
                continue;
            }
            break;
        }
        if(t*nstep < tol) { msg = "Line search step size smaller than tol"; break; }
        if(it === maxit) { msg = "maxit reached during line search"; break; }
        g1 = gradient(x1);
        y = sub(g1,g0);
        ys = dot(y,s);
        Hy = dot(H1,y);
        H1 = sub(add(H1,
                mul(
                        (ys+dot(y,Hy))/(ys*ys),
                        ten(s,s)    )),
                div(add(ten(Hy,s),ten(s,Hy)),ys));
        x0 = x1;
        f0 = f1;
        g0 = g1;
        ++it;
    }
    return {solution: x0, f: f0, gradient: g0, invHessian: H1, iterations:it, message: msg};
}

// 10. Ode solver (Dormand-Prince)
numeric.Dopri = function Dopri(x,y,f,ymid,iterations,msg,events) {
    this.x = x;
    this.y = y;
    this.f = f;
    this.ymid = ymid;
    this.iterations = iterations;
    this.events = events;
    this.message = msg;
}
numeric.Dopri.prototype._at = function _at(xi,j) {
    function sqr(x) { return x*x; }
    var sol = this;
    var xs = sol.x;
    var ys = sol.y;
    var k1 = sol.f;
    var ymid = sol.ymid;
    var n = xs.length;
    var x0,x1,xh,y0,y1,yh,xi;
    var floor = Math.floor,h;
    var c = 0.5;
    var add = numeric.add, mul = numeric.mul,sub = numeric.sub, p,q,w;
    x0 = xs[j];
    x1 = xs[j+1];
    y0 = ys[j];
    y1 = ys[j+1];
    h  = x1-x0;
    xh = x0+c*h;
    yh = ymid[j];
    p = sub(k1[j  ],mul(y0,1/(x0-xh)+2/(x0-x1)));
    q = sub(k1[j+1],mul(y1,1/(x1-xh)+2/(x1-x0)));
    w = [sqr(xi - x1) * (xi - xh) / sqr(x0 - x1) / (x0 - xh),
         sqr(xi - x0) * sqr(xi - x1) / sqr(x0 - xh) / sqr(x1 - xh),
         sqr(xi - x0) * (xi - xh) / sqr(x1 - x0) / (x1 - xh),
         (xi - x0) * sqr(xi - x1) * (xi - xh) / sqr(x0-x1) / (x0 - xh),
         (xi - x1) * sqr(xi - x0) * (xi - xh) / sqr(x0-x1) / (x1 - xh)];
    return add(add(add(add(mul(y0,w[0]),
                           mul(yh,w[1])),
                           mul(y1,w[2])),
                           mul( p,w[3])),
                           mul( q,w[4]));
}
numeric.Dopri.prototype.at = function at(x) {
    var i,j,k,floor = Math.floor;
    if(typeof x !== "number") {
        var n = x.length, ret = Array(n);
        for(i=n-1;i!==-1;--i) {
            ret[i] = this.at(x[i]);
        }
        return ret;
    }
    var x0 = this.x;
    i = 0; j = x0.length-1;
    while(j-i>1) {
        k = floor(0.5*(i+j));
        if(x0[k] <= x) i = k;
        else j = k;
    }
    return this._at(x,i);
}

numeric.dopri = function dopri(x0,x1,y0,f,tol,maxit,event) {
    if(typeof tol === "undefined") { tol = 1e-6; }
    if(typeof maxit === "undefined") { maxit = 1000; }
    var xs = [x0], ys = [y0], k1 = [f(x0,y0)], k2,k3,k4,k5,k6,k7, ymid = [];
    var A2 = 1/5;
    var A3 = [3/40,9/40];
    var A4 = [44/45,-56/15,32/9];
    var A5 = [19372/6561,-25360/2187,64448/6561,-212/729];
    var A6 = [9017/3168,-355/33,46732/5247,49/176,-5103/18656];
    var b = [35/384,0,500/1113,125/192,-2187/6784,11/84];
    var bm = [0.5*6025192743/30085553152,
              0,
              0.5*51252292925/65400821598,
              0.5*-2691868925/45128329728,
              0.5*187940372067/1594534317056,
              0.5*-1776094331/19743644256,
              0.5*11237099/235043384];
    var c = [1/5,3/10,4/5,8/9,1,1];
    var e = [-71/57600,0,71/16695,-71/1920,17253/339200,-22/525,1/40];
    var i = 0,er,j;
    var h = (x1-x0)/10;
    var it = 0;
    var add = numeric.add, mul = numeric.mul, y1,erinf;
    var max = Math.max, min = Math.min, abs = Math.abs, norminf = numeric.norminf,pow = Math.pow;
    var any = numeric.any, lt = numeric.lt, and = numeric.and, sub = numeric.sub;
    var e0, e1, ev;
    var ret = new numeric.Dopri(xs,ys,k1,ymid,-1,"");
    if(typeof event === "function") e0 = event(x0,y0);
    while(x0<x1 && it<maxit) {
        ++it;
        if(x0+h>x1) h = x1-x0;
        k2 = f(x0+c[0]*h,                add(y0,mul(   A2*h,k1[i])));
        k3 = f(x0+c[1]*h,            add(add(y0,mul(A3[0]*h,k1[i])),mul(A3[1]*h,k2)));
        k4 = f(x0+c[2]*h,        add(add(add(y0,mul(A4[0]*h,k1[i])),mul(A4[1]*h,k2)),mul(A4[2]*h,k3)));
        k5 = f(x0+c[3]*h,    add(add(add(add(y0,mul(A5[0]*h,k1[i])),mul(A5[1]*h,k2)),mul(A5[2]*h,k3)),mul(A5[3]*h,k4)));
        k6 = f(x0+c[4]*h,add(add(add(add(add(y0,mul(A6[0]*h,k1[i])),mul(A6[1]*h,k2)),mul(A6[2]*h,k3)),mul(A6[3]*h,k4)),mul(A6[4]*h,k5)));
        y1 = add(add(add(add(add(y0,mul(k1[i],h*b[0])),mul(k3,h*b[2])),mul(k4,h*b[3])),mul(k5,h*b[4])),mul(k6,h*b[5]));
        k7 = f(x0+h,y1);
        er = add(add(add(add(add(mul(k1[i],h*e[0]),mul(k3,h*e[2])),mul(k4,h*e[3])),mul(k5,h*e[4])),mul(k6,h*e[5])),mul(k7,h*e[6]));
        if(typeof er === "number") erinf = abs(er);
        else erinf = norminf(er);
        if(erinf > tol) { // reject
            h = 0.2*h*pow(tol/erinf,0.25);
            if(x0+h === x0) {
                ret.msg = "Step size became too small";
                break;
            }
            continue;
        }
        ymid[i] = add(add(add(add(add(add(y0,
                mul(k1[i],h*bm[0])),
                mul(k3   ,h*bm[2])),
                mul(k4   ,h*bm[3])),
                mul(k5   ,h*bm[4])),
                mul(k6   ,h*bm[5])),
                mul(k7   ,h*bm[6]));
        ++i;
        xs[i] = x0+h;
        ys[i] = y1;
        k1[i] = k7;
        if(typeof event === "function") {
            var yi,xl = x0,xr = x0+0.5*h,xi;
            e1 = event(xr,ymid[i-1]);
            ev = and(lt(e0,0),lt(0,e1));
            if(!any(ev)) { xl = xr; xr = x0+h; e0 = e1; e1 = event(xr,y1); ev = and(lt(e0,0),lt(0,e1)); }
            if(any(ev)) {
                var xc, yc, en,ei;
                var side=0, sl = 1.0, sr = 1.0;
                while(1) {
                    if(typeof e0 === "number") xi = (sr*e1*xl-sl*e0*xr)/(sr*e1-sl*e0);
                    else {
                        xi = xr;
                        for(j=e0.length-1;j!==-1;--j) {
                            if(e0[j]<0 && e1[j]>0) xi = min(xi,(sr*e1[j]*xl-sl*e0[j]*xr)/(sr*e1[j]-sl*e0[j]));
                        }
                    }
                    if(xi <= xl || xi >= xr) break;
                    yi = ret._at(xi, i-1);
                    ei = event(xi,yi);
                    en = and(lt(e0,0),lt(0,ei));
                    if(any(en)) {
                        xr = xi;
                        e1 = ei;
                        ev = en;
                        sr = 1.0;
                        if(side === -1) sl *= 0.5;
                        else sl = 1.0;
                        side = -1;
                    } else {
                        xl = xi;
                        e0 = ei;
                        sl = 1.0;
                        if(side === 1) sr *= 0.5;
                        else sr = 1.0;
                        side = 1;
                    }
                }
                y1 = ret._at(0.5*(x0+xi),i-1);
                ret.f[i] = f(xi,yi);
                ret.x[i] = xi;
                ret.y[i] = yi;
                ret.ymid[i-1] = y1;
                ret.events = ev;
                ret.iterations = it;
                return ret;
            }
        }
        x0 += h;
        y0 = y1;
        e0 = e1;
        h = min(0.8*h*pow(tol/erinf,0.25),4*h);
    }
    ret.iterations = it;
    return ret;
}

// 11. Ax = b
numeric.LU = function(A, fast) {
  fast = fast || false;

  var abs = Math.abs;
  var i, j, k, absAjk, Akk, Ak, Pk, Ai;
  var max;
  var n = A.length, n1 = n-1;
  var P = new Array(n);
  if(!fast) A = numeric.clone(A);

  for (k = 0; k < n; ++k) {
    Pk = k;
    Ak = A[k];
    max = abs(Ak[k]);
    for (j = k + 1; j < n; ++j) {
      absAjk = abs(A[j][k]);
      if (max < absAjk) {
        max = absAjk;
        Pk = j;
      }
    }
    P[k] = Pk;

    if (Pk != k) {
      A[k] = A[Pk];
      A[Pk] = Ak;
      Ak = A[k];
    }

    Akk = Ak[k];

    for (i = k + 1; i < n; ++i) {
      A[i][k] /= Akk;
    }

    for (i = k + 1; i < n; ++i) {
      Ai = A[i];
      for (j = k + 1; j < n1; ++j) {
        Ai[j] -= Ai[k] * Ak[j];
        ++j;
        Ai[j] -= Ai[k] * Ak[j];
      }
      if(j===n1) Ai[j] -= Ai[k] * Ak[j];
    }
  }

  return {
    LU: A,
    P:  P
  };
}

numeric.LUsolve = function LUsolve(LUP, b) {
  var i, j;
  var LU = LUP.LU;
  var n   = LU.length;
  var x = numeric.clone(b);
  var P   = LUP.P;
  var Pi, LUi, LUii, tmp;

  for (i=n-1;i!==-1;--i) x[i] = b[i];
  for (i = 0; i < n; ++i) {
    Pi = P[i];
    if (P[i] !== i) {
      tmp = x[i];
      x[i] = x[Pi];
      x[Pi] = tmp;
    }

    LUi = LU[i];
    for (j = 0; j < i; ++j) {
      x[i] -= x[j] * LUi[j];
    }
  }

  for (i = n - 1; i >= 0; --i) {
    LUi = LU[i];
    for (j = i + 1; j < n; ++j) {
      x[i] -= x[j] * LUi[j];
    }

    x[i] /= LUi[i];
  }

  return x;
}

numeric.solve = function solve(A,b,fast) { return numeric.LUsolve(numeric.LU(A,fast), b); }

// 12. Linear programming
numeric.echelonize = function echelonize(A) {
    var s = numeric.dim(A), m = s[0], n = s[1];
    var I = numeric.identity(m);
    var P = Array(m);
    var i,j,k,l,Ai,Ii,Z,a;
    var abs = Math.abs;
    var diveq = numeric.diveq;
    A = numeric.clone(A);
    for(i=0;i<m;++i) {
        k = 0;
        Ai = A[i];
        Ii = I[i];
        for(j=1;j<n;++j) if(abs(Ai[k])<abs(Ai[j])) k=j;
        P[i] = k;
        diveq(Ii,Ai[k]);
        diveq(Ai,Ai[k]);
        for(j=0;j<m;++j) if(j!==i) {
            Z = A[j]; a = Z[k];
            for(l=n-1;l!==-1;--l) Z[l] -= Ai[l]*a;
            Z = I[j];
            for(l=m-1;l!==-1;--l) Z[l] -= Ii[l]*a;
        }
    }
    return {I:I, A:A, P:P};
}

numeric.__solveLP = function __solveLP(c,A,b,tol,maxit,x,flag) {
    var sum = numeric.sum, log = numeric.log, mul = numeric.mul, sub = numeric.sub, dot = numeric.dot, div = numeric.div, add = numeric.add;
    var m = c.length, n = b.length,y;
    var unbounded = false, cb,i0=0;
    var alpha = 1.0;
    var f0,df0,AT = numeric.transpose(A), svd = numeric.svd,transpose = numeric.transpose,leq = numeric.leq, sqrt = Math.sqrt, abs = Math.abs;
    var muleq = numeric.muleq;
    var norm = numeric.norminf, any = numeric.any,min = Math.min;
    var all = numeric.all, gt = numeric.gt;
    var p = Array(m), A0 = Array(n),e=numeric.rep([n],1), H;
    var solve = numeric.solve, z = sub(b,dot(A,x)),count;
    var dotcc = dot(c,c);
    var g;
    for(count=i0;count<maxit;++count) {
        var i,j,d;
        for(i=n-1;i!==-1;--i) A0[i] = div(A[i],z[i]);
        var A1 = transpose(A0);
        for(i=m-1;i!==-1;--i) p[i] = (/*x[i]+*/sum(A1[i]));
        alpha = 0.25*abs(dotcc/dot(c,p));
        var a1 = 100*sqrt(dotcc/dot(p,p));
        if(!isFinite(alpha) || alpha>a1) alpha = a1;
        g = add(c,mul(alpha,p));
        H = dot(A1,A0);
        for(i=m-1;i!==-1;--i) H[i][i] += 1;
        d = solve(H,div(g,alpha),true);
        var t0 = div(z,dot(A,d));
        var t = 1.0;
        for(i=n-1;i!==-1;--i) if(t0[i]<0) t = min(t,-0.999*t0[i]);
        y = sub(x,mul(d,t));
        z = sub(b,dot(A,y));
        if(!all(gt(z,0))) return { solution: x, message: "", iterations: count };
        x = y;
        if(alpha<tol) return { solution: y, message: "", iterations: count };
        if(flag) {
            var s = dot(c,g), Ag = dot(A,g);
            unbounded = true;
            for(i=n-1;i!==-1;--i) if(s*Ag[i]<0) { unbounded = false; break; }
        } else {
            if(x[m-1]>=0) unbounded = false;
            else unbounded = true;
        }
        if(unbounded) return { solution: y, message: "Unbounded", iterations: count };
    }
    return { solution: x, message: "maximum iteration count exceeded", iterations:count };
}

numeric._solveLP = function _solveLP(c,A,b,tol,maxit) {
    var m = c.length, n = b.length,y;
    var sum = numeric.sum, log = numeric.log, mul = numeric.mul, sub = numeric.sub, dot = numeric.dot, div = numeric.div, add = numeric.add;
    var c0 = numeric.rep([m],0).concat([1]);
    var J = numeric.rep([n,1],-1);
    var A0 = numeric.blockMatrix([[A                   ,   J  ]]);
    var b0 = b;
    var y = numeric.rep([m],0).concat(Math.max(0,numeric.sup(numeric.neg(b)))+1);
    var x0 = numeric.__solveLP(c0,A0,b0,tol,maxit,y,false);
    var x = numeric.clone(x0.solution);
    x.length = m;
    var foo = numeric.inf(sub(b,dot(A,x)));
    if(foo<0) { return { solution: NaN, message: "Infeasible", iterations: x0.iterations }; }
    var ret = numeric.__solveLP(c, A, b, tol, maxit-x0.iterations, x, true);
    ret.iterations += x0.iterations;
    return ret;
};

numeric.solveLP = function solveLP(c,A,b,Aeq,beq,tol,maxit) {
    if(typeof maxit === "undefined") maxit = 1000;
    if(typeof tol === "undefined") tol = numeric.epsilon;
    if(typeof Aeq === "undefined") return numeric._solveLP(c,A,b,tol,maxit);
    var m = Aeq.length, n = Aeq[0].length, o = A.length;
    var B = numeric.echelonize(Aeq);
    var flags = numeric.rep([n],0);
    var P = B.P;
    var Q = [];
    var i;
    for(i=P.length-1;i!==-1;--i) flags[P[i]] = 1;
    for(i=n-1;i!==-1;--i) if(flags[i]===0) Q.push(i);
    var g = numeric.getRange;
    var I = numeric.linspace(0,m-1), J = numeric.linspace(0,o-1);
    var Aeq2 = g(Aeq,I,Q), A1 = g(A,J,P), A2 = g(A,J,Q), dot = numeric.dot, sub = numeric.sub;
    var A3 = dot(A1,B.I);
    var A4 = sub(A2,dot(A3,Aeq2)), b4 = sub(b,dot(A3,beq));
    var c1 = Array(P.length), c2 = Array(Q.length);
    for(i=P.length-1;i!==-1;--i) c1[i] = c[P[i]];
    for(i=Q.length-1;i!==-1;--i) c2[i] = c[Q[i]];
    var c4 = sub(c2,dot(c1,dot(B.I,Aeq2)));
    var S = numeric._solveLP(c4,A4,b4,tol,maxit);
    var x2 = S.solution;
    if(x2!==x2) return S;
    var x1 = dot(B.I,sub(beq,dot(Aeq2,x2)));
    var x = Array(c.length);
    for(i=P.length-1;i!==-1;--i) x[P[i]] = x1[i];
    for(i=Q.length-1;i!==-1;--i) x[Q[i]] = x2[i];
    return { solution: x, message:S.message, iterations: S.iterations };
}

numeric.MPStoLP = function MPStoLP(MPS) {
    if(MPS instanceof String) { MPS.split('\n'); }
    var state = 0;
    var states = ['Initial state','NAME','ROWS','COLUMNS','RHS','BOUNDS','ENDATA'];
    var n = MPS.length;
    var i,j,z,N=0,rows = {}, sign = [], rl = 0, vars = {}, nv = 0;
    var name;
    var c = [], A = [], b = [];
    function err(e) { throw new Error('MPStoLP: '+e+'\nLine '+i+': '+MPS[i]+'\nCurrent state: '+states[state]+'\n'); }
    for(i=0;i<n;++i) {
        z = MPS[i];
        var w0 = z.match(/\S*/g);
        var w = [];
        for(j=0;j<w0.length;++j) if(w0[j]!=="") w.push(w0[j]);
        if(w.length === 0) continue;
        for(j=0;j<states.length;++j) if(z.substr(0,states[j].length) === states[j]) break;
        if(j<states.length) {
            state = j;
            if(j===1) { name = w[1]; }
            if(j===6) return { name:name, c:c, A:numeric.transpose(A), b:b, rows:rows, vars:vars };
            continue;
        }
        switch(state) {
        case 0: case 1: err('Unexpected line');
        case 2: 
            switch(w[0]) {
            case 'N': if(N===0) N = w[1]; else err('Two or more N rows'); break;
            case 'L': rows[w[1]] = rl; sign[rl] = 1; b[rl] = 0; ++rl; break;
            case 'G': rows[w[1]] = rl; sign[rl] = -1;b[rl] = 0; ++rl; break;
            case 'E': rows[w[1]] = rl; sign[rl] = 0;b[rl] = 0; ++rl; break;
            default: err('Parse error '+numeric.prettyPrint(w));
            }
            break;
        case 3:
            if(!vars.hasOwnProperty(w[0])) { vars[w[0]] = nv; c[nv] = 0; A[nv] = numeric.rep([rl],0); ++nv; }
            var p = vars[w[0]];
            for(j=1;j<w.length;j+=2) {
                if(w[j] === N) { c[p] = parseFloat(w[j+1]); continue; }
                var q = rows[w[j]];
                A[p][q] = (sign[q]<0?-1:1)*parseFloat(w[j+1]);
            }
            break;
        case 4:
            for(j=1;j<w.length;j+=2) b[rows[w[j]]] = (sign[rows[w[j]]]<0?-1:1)*parseFloat(w[j+1]);
            break;
        case 5: /*FIXME*/ break;
        case 6: err('Internal error');
        }
    }
    err('Reached end of file without ENDATA');
}
// seedrandom.js version 2.0.
// Author: David Bau 4/2/2011
//
// Defines a method Math.seedrandom() that, when called, substitutes
// an explicitly seeded RC4-based algorithm for Math.random().  Also
// supports automatic seeding from local or network sources of entropy.
//
// Usage:
//
//   <script src=http://davidbau.com/encode/seedrandom-min.js></script>
//
//   Math.seedrandom('yipee'); Sets Math.random to a function that is
//                             initialized using the given explicit seed.
//
//   Math.seedrandom();        Sets Math.random to a function that is
//                             seeded using the current time, dom state,
//                             and other accumulated local entropy.
//                             The generated seed string is returned.
//
//   Math.seedrandom('yowza', true);
//                             Seeds using the given explicit seed mixed
//                             together with accumulated entropy.
//
//   <script src="http://bit.ly/srandom-512"></script>
//                             Seeds using physical random bits downloaded
//                             from random.org.
//
//   <script src="https://jsonlib.appspot.com/urandom?callback=Math.seedrandom">
//   </script>                 Seeds using urandom bits from call.jsonlib.com,
//                             which is faster than random.org.
//
// Examples:
//
//   Math.seedrandom("hello");            // Use "hello" as the seed.
//   document.write(Math.random());       // Always 0.5463663768140734
//   document.write(Math.random());       // Always 0.43973793770592234
//   var rng1 = Math.random;              // Remember the current prng.
//
//   var autoseed = Math.seedrandom();    // New prng with an automatic seed.
//   document.write(Math.random());       // Pretty much unpredictable.
//
//   Math.random = rng1;                  // Continue "hello" prng sequence.
//   document.write(Math.random());       // Always 0.554769432473455
//
//   Math.seedrandom(autoseed);           // Restart at the previous seed.
//   document.write(Math.random());       // Repeat the 'unpredictable' value.
//
// Notes:
//
// Each time seedrandom('arg') is called, entropy from the passed seed
// is accumulated in a pool to help generate future seeds for the
// zero-argument form of Math.seedrandom, so entropy can be injected over
// time by calling seedrandom with explicit data repeatedly.
//
// On speed - This javascript implementation of Math.random() is about
// 3-10x slower than the built-in Math.random() because it is not native
// code, but this is typically fast enough anyway.  Seeding is more expensive,
// especially if you use auto-seeding.  Some details (timings on Chrome 4):
//
// Our Math.random()            - avg less than 0.002 milliseconds per call
// seedrandom('explicit')       - avg less than 0.5 milliseconds per call
// seedrandom('explicit', true) - avg less than 2 milliseconds per call
// seedrandom()                 - avg about 38 milliseconds per call
//
// LICENSE (BSD):
//
// Copyright 2010 David Bau, all rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
// 
//   1. Redistributions of source code must retain the above copyright
//      notice, this list of conditions and the following disclaimer.
//
//   2. Redistributions in binary form must reproduce the above copyright
//      notice, this list of conditions and the following disclaimer in the
//      documentation and/or other materials provided with the distribution.
// 
//   3. Neither the name of this module nor the names of its contributors may
//      be used to endorse or promote products derived from this software
//      without specific prior written permission.
// 
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
/**
 * All code is in an anonymous closure to keep the global namespace clean.
 *
 * @param {number=} overflow 
 * @param {number=} startdenom
 */

// Patched by Seb so that seedrandom.js does not pollute the Math object.
// My tests suggest that doing Math.trouble = 1 makes Math lookups about 5%
// slower.
numeric.seedrandom = { pow:Math.pow, random:Math.random };

(function (pool, math, width, chunks, significance, overflow, startdenom) {


//
// seedrandom()
// This is the seedrandom function described above.
//
math['seedrandom'] = function seedrandom(seed, use_entropy) {
  var key = [];
  var arc4;

  // Flatten the seed string or build one from local entropy if needed.
  seed = mixkey(flatten(
    use_entropy ? [seed, pool] :
    arguments.length ? seed :
    [new Date().getTime(), pool, window], 3), key);

  // Use the seed to initialize an ARC4 generator.
  arc4 = new ARC4(key);

  // Mix the randomness into accumulated entropy.
  mixkey(arc4.S, pool);

  // Override Math.random

  // This function returns a random double in [0, 1) that contains
  // randomness in every bit of the mantissa of the IEEE 754 value.

  math['random'] = function random() {  // Closure to return a random double:
    var n = arc4.g(chunks);             // Start with a numerator n < 2 ^ 48
    var d = startdenom;                 //   and denominator d = 2 ^ 48.
    var x = 0;                          //   and no 'extra last byte'.
    while (n < significance) {          // Fill up all significant digits by
      n = (n + x) * width;              //   shifting numerator and
      d *= width;                       //   denominator and generating a
      x = arc4.g(1);                    //   new least-significant-byte.
    }
    while (n >= overflow) {             // To avoid rounding up, before adding
      n /= 2;                           //   last byte, shift everything
      d /= 2;                           //   right using integer math until
      x >>>= 1;                         //   we have exactly the desired bits.
    }
    return (n + x) / d;                 // Form the number within [0, 1).
  };

  // Return the seed that was used
  return seed;
};

//
// ARC4
//
// An ARC4 implementation.  The constructor takes a key in the form of
// an array of at most (width) integers that should be 0 <= x < (width).
//
// The g(count) method returns a pseudorandom integer that concatenates
// the next (count) outputs from ARC4.  Its return value is a number x
// that is in the range 0 <= x < (width ^ count).
//
/** @constructor */
function ARC4(key) {
  var t, u, me = this, keylen = key.length;
  var i = 0, j = me.i = me.j = me.m = 0;
  me.S = [];
  me.c = [];

  // The empty key [] is treated as [0].
  if (!keylen) { key = [keylen++]; }

  // Set up S using the standard key scheduling algorithm.
  while (i < width) { me.S[i] = i++; }
  for (i = 0; i < width; i++) {
    t = me.S[i];
    j = lowbits(j + t + key[i % keylen]);
    u = me.S[j];
    me.S[i] = u;
    me.S[j] = t;
  }

  // The "g" method returns the next (count) outputs as one number.
  me.g = function getnext(count) {
    var s = me.S;
    var i = lowbits(me.i + 1); var t = s[i];
    var j = lowbits(me.j + t); var u = s[j];
    s[i] = u;
    s[j] = t;
    var r = s[lowbits(t + u)];
    while (--count) {
      i = lowbits(i + 1); t = s[i];
      j = lowbits(j + t); u = s[j];
      s[i] = u;
      s[j] = t;
      r = r * width + s[lowbits(t + u)];
    }
    me.i = i;
    me.j = j;
    return r;
  };
  // For robust unpredictability discard an initial batch of values.
  // See http://www.rsa.com/rsalabs/node.asp?id=2009
  me.g(width);
}

//
// flatten()
// Converts an object tree to nested arrays of strings.
//
/** @param {Object=} result 
  * @param {string=} prop
  * @param {string=} typ */
function flatten(obj, depth, result, prop, typ) {
  result = [];
  typ = typeof(obj);
  if (depth && typ == 'object') {
    for (prop in obj) {
      if (prop.indexOf('S') < 5) {    // Avoid FF3 bug (local/sessionStorage)
        try { result.push(flatten(obj[prop], depth - 1)); } catch (e) {}
      }
    }
  }
  return (result.length ? result : obj + (typ != 'string' ? '\0' : ''));
}

//
// mixkey()
// Mixes a string seed into a key that is an array of integers, and
// returns a shortened string seed that is equivalent to the result key.
//
/** @param {number=} smear 
  * @param {number=} j */
function mixkey(seed, key, smear, j) {
  seed += '';                         // Ensure the seed is a string
  smear = 0;
  for (j = 0; j < seed.length; j++) {
    key[lowbits(j)] =
      lowbits((smear ^= key[lowbits(j)] * 19) + seed.charCodeAt(j));
  }
  seed = '';
  for (j in key) { seed += String.fromCharCode(key[j]); }
  return seed;
}

//
// lowbits()
// A quick "n mod width" for width a power of 2.
//
function lowbits(n) { return n & (width - 1); }

//
// The following constants are related to IEEE 754 limits.
//
startdenom = math.pow(width, chunks);
significance = math.pow(2, significance);
overflow = significance * 2;

//
// When seedrandom.js is loaded, we immediately mix a few bits
// from the built-in RNG into the entropy pool.  Because we do
// not want to intefere with determinstic PRNG state later,
// seedrandom will not call math.random on its own again after
// initialization.
//
mixkey(math.random(), pool);

// End anonymous scope, and pass initial values.
}(
  [],   // pool: entropy pool starts empty
  numeric.seedrandom, // math: package containing random, pow, and seedrandom
  256,  // width: each RC4 output is 0 <= x < 256
  6,    // chunks: at least six RC4 outputs for each double
  52    // significance: there are 52 significant digits in a double
  ));
/* This file is a slightly modified version of quadprog.js from Alberto Santini.
 * It has been slightly modified by Sébastien Loisel to make sure that it handles
 * 0-based Arrays instead of 1-based Arrays.
 * License is in resources/LICENSE.quadprog */
(function(exports) {

function base0to1(A) {
    if(typeof A !== "object") { return A; }
    var ret = [], i,n=A.length;
    for(i=0;i<n;i++) ret[i+1] = base0to1(A[i]);
    return ret;
}
function base1to0(A) {
    if(typeof A !== "object") { return A; }
    var ret = [], i,n=A.length;
    for(i=1;i<n;i++) ret[i-1] = base1to0(A[i]);
    return ret;
}

function dpori(a, lda, n) {
    var i, j, k, kp1, t;

    for (k = 1; k <= n; k = k + 1) {
        a[k][k] = 1 / a[k][k];
        t = -a[k][k];
        //~ dscal(k - 1, t, a[1][k], 1);
        for (i = 1; i < k; i = i + 1) {
            a[i][k] = t * a[i][k];
        }

        kp1 = k + 1;
        if (n < kp1) {
            break;
        }
        for (j = kp1; j <= n; j = j + 1) {
            t = a[k][j];
            a[k][j] = 0;
            //~ daxpy(k, t, a[1][k], 1, a[1][j], 1);
            for (i = 1; i <= k; i = i + 1) {
                a[i][j] = a[i][j] + (t * a[i][k]);
            }
        }
    }

}

function dposl(a, lda, n, b) {
    var i, k, kb, t;

    for (k = 1; k <= n; k = k + 1) {
        //~ t = ddot(k - 1, a[1][k], 1, b[1], 1);
        t = 0;
        for (i = 1; i < k; i = i + 1) {
            t = t + (a[i][k] * b[i]);
        }

        b[k] = (b[k] - t) / a[k][k];
    }

    for (kb = 1; kb <= n; kb = kb + 1) {
        k = n + 1 - kb;
        b[k] = b[k] / a[k][k];
        t = -b[k];
        //~ daxpy(k - 1, t, a[1][k], 1, b[1], 1);
        for (i = 1; i < k; i = i + 1) {
            b[i] = b[i] + (t * a[i][k]);
        }
    }
}

function dpofa(a, lda, n, info) {
    var i, j, jm1, k, t, s;

    for (j = 1; j <= n; j = j + 1) {
        info[1] = j;
        s = 0;
        jm1 = j - 1;
        if (jm1 < 1) {
            s = a[j][j] - s;
            if (s <= 0) {
                break;
            }
            a[j][j] = Math.sqrt(s);
        } else {
            for (k = 1; k <= jm1; k = k + 1) {
                //~ t = a[k][j] - ddot(k - 1, a[1][k], 1, a[1][j], 1);
                t = a[k][j];
                for (i = 1; i < k; i = i + 1) {
                    t = t - (a[i][j] * a[i][k]);
                }
                t = t / a[k][k];
                a[k][j] = t;
                s = s + t * t;
            }
            s = a[j][j] - s;
            if (s <= 0) {
                break;
            }
            a[j][j] = Math.sqrt(s);
        }
        info[1] = 0;
    }
}

function qpgen2(dmat, dvec, fddmat, n, sol, crval, amat,
    bvec, fdamat, q, meq, iact, nact, iter, work, ierr) {

    var i, j, l, l1, info, it1, iwzv, iwrv, iwrm, iwsv, iwuv, nvl, r, iwnbv,
        temp, sum, t1, tt, gc, gs, nu,
        t1inf, t2min,
        vsmall, tmpa, tmpb,
        go;

    r = Math.min(n, q);
    l = 2 * n + (r * (r + 5)) / 2 + 2 * q + 1;

    vsmall = 1.0e-60;
    do {
        vsmall = vsmall + vsmall;
        tmpa = 1 + 0.1 * vsmall;
        tmpb = 1 + 0.2 * vsmall;
    } while (tmpa <= 1 || tmpb <= 1);

    for (i = 1; i <= n; i = i + 1) {
        work[i] = dvec[i];
    }
    for (i = n + 1; i <= l; i = i + 1) {
        work[i] = 0;
    }
    for (i = 1; i <= q; i = i + 1) {
        iact[i] = 0;
    }

    info = [];

    if (ierr[1] === 0) {
        dpofa(dmat, fddmat, n, info);
        if (info[1] !== 0) {
            ierr[1] = 2;
            return;
        }
        dposl(dmat, fddmat, n, dvec);
        dpori(dmat, fddmat, n);
    } else {
        for (j = 1; j <= n; j = j + 1) {
            sol[j] = 0;
            for (i = 1; i <= j; i = i + 1) {
                sol[j] = sol[j] + dmat[i][j] * dvec[i];
            }
        }
        for (j = 1; j <= n; j = j + 1) {
            dvec[j] = 0;
            for (i = j; i <= n; i = i + 1) {
                dvec[j] = dvec[j] + dmat[j][i] * sol[i];
            }
        }
    }

    crval[1] = 0;
    for (j = 1; j <= n; j = j + 1) {
        sol[j] = dvec[j];
        crval[1] = crval[1] + work[j] * sol[j];
        work[j] = 0;
        for (i = j + 1; i <= n; i = i + 1) {
            dmat[i][j] = 0;
        }
    }
    crval[1] = -crval[1] / 2;
    ierr[1] = 0;

    iwzv = n;
    iwrv = iwzv + n;
    iwuv = iwrv + r;
    iwrm = iwuv + r + 1;
    iwsv = iwrm + (r * (r + 1)) / 2;
    iwnbv = iwsv + q;

    for (i = 1; i <= q; i = i + 1) {
        sum = 0;
        for (j = 1; j <= n; j = j + 1) {
            sum = sum + amat[j][i] * amat[j][i];
        }
        work[iwnbv + i] = Math.sqrt(sum);
    }
    nact = 0;
    iter[1] = 0;
    iter[2] = 0;

    function fn_goto_50() {
        iter[1] = iter[1] + 1;

        l = iwsv;
        for (i = 1; i <= q; i = i + 1) {
            l = l + 1;
            sum = -bvec[i];
            for (j = 1; j <= n; j = j + 1) {
                sum = sum + amat[j][i] * sol[j];
            }
            if (Math.abs(sum) < vsmall) {
                sum = 0;
            }
            if (i > meq) {
                work[l] = sum;
            } else {
                work[l] = -Math.abs(sum);
                if (sum > 0) {
                    for (j = 1; j <= n; j = j + 1) {
                        amat[j][i] = -amat[j][i];
                    }
                    bvec[i] = -bvec[i];
                }
            }
        }

        for (i = 1; i <= nact; i = i + 1) {
            work[iwsv + iact[i]] = 0;
        }

        nvl = 0;
        temp = 0;
        for (i = 1; i <= q; i = i + 1) {
            if (work[iwsv + i] < temp * work[iwnbv + i]) {
                nvl = i;
                temp = work[iwsv + i] / work[iwnbv + i];
            }
        }
        if (nvl === 0) {
            return 999;
        }

        return 0;
    }

    function fn_goto_55() {
        for (i = 1; i <= n; i = i + 1) {
            sum = 0;
            for (j = 1; j <= n; j = j + 1) {
                sum = sum + dmat[j][i] * amat[j][nvl];
            }
            work[i] = sum;
        }

        l1 = iwzv;
        for (i = 1; i <= n; i = i + 1) {
            work[l1 + i] = 0;
        }
        for (j = nact + 1; j <= n; j = j + 1) {
            for (i = 1; i <= n; i = i + 1) {
                work[l1 + i] = work[l1 + i] + dmat[i][j] * work[j];
            }
        }

        t1inf = true;
        for (i = nact; i >= 1; i = i - 1) {
            sum = work[i];
            l = iwrm + (i * (i + 3)) / 2;
            l1 = l - i;
            for (j = i + 1; j <= nact; j = j + 1) {
                sum = sum - work[l] * work[iwrv + j];
                l = l + j;
            }
            sum = sum / work[l1];
            work[iwrv + i] = sum;
            if (iact[i] < meq) {
                // continue;
                break;
            }
            if (sum < 0) {
                // continue;
                break;
            }
            t1inf = false;
            it1 = i;
        }

        if (!t1inf) {
            t1 = work[iwuv + it1] / work[iwrv + it1];
            for (i = 1; i <= nact; i = i + 1) {
                if (iact[i] < meq) {
                    // continue;
                    break;
                }
                if (work[iwrv + i] < 0) {
                    // continue;
                    break;
                }
                temp = work[iwuv + i] / work[iwrv + i];
                if (temp < t1) {
                    t1 = temp;
                    it1 = i;
                }
            }
        }

        sum = 0;
        for (i = iwzv + 1; i <= iwzv + n; i = i + 1) {
            sum = sum + work[i] * work[i];
        }
        if (Math.abs(sum) <= vsmall) {
            if (t1inf) {
                ierr[1] = 1;
                // GOTO 999
                return 999;
            } else {
                for (i = 1; i <= nact; i = i + 1) {
                    work[iwuv + i] = work[iwuv + i] - t1 * work[iwrv + i];
                }
                work[iwuv + nact + 1] = work[iwuv + nact + 1] + t1;
                // GOTO 700
                return 700;
            }
        } else {
            sum = 0;
            for (i = 1; i <= n; i = i + 1) {
                sum = sum + work[iwzv + i] * amat[i][nvl];
            }
            tt = -work[iwsv + nvl] / sum;
            t2min = true;
            if (!t1inf) {
                if (t1 < tt) {
                    tt = t1;
                    t2min = false;
                }
            }

            for (i = 1; i <= n; i = i + 1) {
                sol[i] = sol[i] + tt * work[iwzv + i];
                if (Math.abs(sol[i]) < vsmall) {
                    sol[i] = 0;
                }
            }

            crval[1] = crval[1] + tt * sum * (tt / 2 + work[iwuv + nact + 1]);
            for (i = 1; i <= nact; i = i + 1) {
                work[iwuv + i] = work[iwuv + i] - tt * work[iwrv + i];
            }
            work[iwuv + nact + 1] = work[iwuv + nact + 1] + tt;

            if (t2min) {
                nact = nact + 1;
                iact[nact] = nvl;

                l = iwrm + ((nact - 1) * nact) / 2 + 1;
                for (i = 1; i <= nact - 1; i = i + 1) {
                    work[l] = work[i];
                    l = l + 1;
                }

                if (nact === n) {
                    work[l] = work[n];
                } else {
                    for (i = n; i >= nact + 1; i = i - 1) {
                        if (work[i] === 0) {
                            // continue;
                            break;
                        }
                        gc = Math.max(Math.abs(work[i - 1]), Math.abs(work[i]));
                        gs = Math.min(Math.abs(work[i - 1]), Math.abs(work[i]));
                        if (work[i - 1] >= 0) {
                            temp = Math.abs(gc * Math.sqrt(1 + gs * gs / (gc * gc)));
                        } else {
                            temp = -Math.abs(gc * Math.sqrt(1 + gs * gs / (gc * gc)));
                        }
                        gc = work[i - 1] / temp;
                        gs = work[i] / temp;

                        if (gc === 1) {
                            // continue;
                            break;
                        }
                        if (gc === 0) {
                            work[i - 1] = gs * temp;
                            for (j = 1; j <= n; j = j + 1) {
                                temp = dmat[j][i - 1];
                                dmat[j][i - 1] = dmat[j][i];
                                dmat[j][i] = temp;
                            }
                        } else {
                            work[i - 1] = temp;
                            nu = gs / (1 + gc);
                            for (j = 1; j <= n; j = j + 1) {
                                temp = gc * dmat[j][i - 1] + gs * dmat[j][i];
                                dmat[j][i] = nu * (dmat[j][i - 1] + temp) - dmat[j][i];
                                dmat[j][i - 1] = temp;

                            }
                        }
                    }
                    work[l] = work[nact];
                }
            } else {
                sum = -bvec[nvl];
                for (j = 1; j <= n; j = j + 1) {
                    sum = sum + sol[j] * amat[j][nvl];
                }
                if (nvl > meq) {
                    work[iwsv + nvl] = sum;
                } else {
                    work[iwsv + nvl] = -Math.abs(sum);
                    if (sum > 0) {
                        for (j = 1; j <= n; j = j + 1) {
                            amat[j][nvl] = -amat[j][nvl];
                        }
                        bvec[nvl] = -bvec[nvl];
                    }
                }
                // GOTO 700
                return 700;
            }
        }

        return 0;
    }

    function fn_goto_797() {
        l = iwrm + (it1 * (it1 + 1)) / 2 + 1;
        l1 = l + it1;
        if (work[l1] === 0) {
            // GOTO 798
            return 798;
        }
        gc = Math.max(Math.abs(work[l1 - 1]), Math.abs(work[l1]));
        gs = Math.min(Math.abs(work[l1 - 1]), Math.abs(work[l1]));
        if (work[l1 - 1] >= 0) {
            temp = Math.abs(gc * Math.sqrt(1 + gs * gs / (gc * gc)));
        } else {
            temp = -Math.abs(gc * Math.sqrt(1 + gs * gs / (gc * gc)));
        }
        gc = work[l1 - 1] / temp;
        gs = work[l1] / temp;

        if (gc === 1) {
            // GOTO 798
            return 798;
        }
        if (gc === 0) {
            for (i = it1 + 1; i <= nact; i = i + 1) {
                temp = work[l1 - 1];
                work[l1 - 1] = work[l1];
                work[l1] = temp;
                l1 = l1 + i;
            }
            for (i = 1; i <= n; i = i + 1) {
                temp = dmat[i][it1];
                dmat[i][it1] = dmat[i][it1 + 1];
                dmat[i][it1 + 1] = temp;
            }
        } else {
            nu = gs / (1 + gc);
            for (i = it1 + 1; i <= nact; i = i + 1) {
                temp = gc * work[l1 - 1] + gs * work[l1];
                work[l1] = nu * (work[l1 - 1] + temp) - work[l1];
                work[l1 - 1] = temp;
                l1 = l1 + i;
            }
            for (i = 1; i <= n; i = i + 1) {
                temp = gc * dmat[i][it1] + gs * dmat[i][it1 + 1];
                dmat[i][it1 + 1] = nu * (dmat[i][it1] + temp) - dmat[i][it1 + 1];
                dmat[i][it1] = temp;
            }
        }

        return 0;
    }

    function fn_goto_798() {
        l1 = l - it1;
        for (i = 1; i <= it1; i = i + 1) {
            work[l1] = work[l];
            l = l + 1;
            l1 = l1 + 1;
        }

        work[iwuv + it1] = work[iwuv + it1 + 1];
        iact[it1] = iact[it1 + 1];
        it1 = it1 + 1;
        if (it1 < nact) {
            // GOTO 797
            return 797;
        }

        return 0;
    }

    function fn_goto_799() {
        work[iwuv + nact] = work[iwuv + nact + 1];
        work[iwuv + nact + 1] = 0;
        iact[nact] = 0;
        nact = nact - 1;
        iter[2] = iter[2] + 1;

        return 0;
    }

    go = 0;
    while (true) {
        go = fn_goto_50();
        if (go === 999) {
            return;
        }
        while (true) {
            go = fn_goto_55();
            if (go === 0) {
                break;
            }
            if (go === 999) {
                return;
            }
            if (go === 700) {
                if (it1 === nact) {
                    fn_goto_799();
                } else {
                    while (true) {
                        fn_goto_797();
                        go = fn_goto_798();
                        if (go !== 797) {
                            break;
                        }
                    }
                    fn_goto_799();
                }
            }
        }
    }

}

function solveQP(Dmat, dvec, Amat, bvec, meq, factorized) {
    Dmat = base0to1(Dmat);
    dvec = base0to1(dvec);
    Amat = base0to1(Amat);
    var i, n, q,
        nact, r,
        crval = [], iact = [], sol = [], work = [], iter = [],
        message;

    meq = meq || 0;
    factorized = factorized ? base0to1(factorized) : [undefined, 0];
    bvec = bvec ? base0to1(bvec) : [];

    // In Fortran the array index starts from 1
    n = Dmat.length - 1;
    q = Amat[1].length - 1;

    if (!bvec) {
        for (i = 1; i <= q; i = i + 1) {
            bvec[i] = 0;
        }
    }
    for (i = 1; i <= q; i = i + 1) {
        iact[i] = 0;
    }
    nact = 0;
    r = Math.min(n, q);
    for (i = 1; i <= n; i = i + 1) {
        sol[i] = 0;
    }
    crval[1] = 0;
    for (i = 1; i <= (2 * n + (r * (r + 5)) / 2 + 2 * q + 1); i = i + 1) {
        work[i] = 0;
    }
    for (i = 1; i <= 2; i = i + 1) {
        iter[i] = 0;
    }

    qpgen2(Dmat, dvec, n, n, sol, crval, Amat,
        bvec, n, q, meq, iact, nact, iter, work, factorized);

    message = "";
    if (factorized[1] === 1) {
        message = "constraints are inconsistent, no solution!";
    }
    if (factorized[1] === 2) {
        message = "matrix D in quadratic function is not positive definite!";
    }

    return {
        solution: base1to0(sol),
        value: base1to0(crval),
        unconstrained_solution: base1to0(dvec),
        iterations: base1to0(iter),
        iact: base1to0(iact),
        message: message
    };
}
exports.solveQP = solveQP;
}(numeric));
/*
Shanti Rao sent me this routine by private email. I had to modify it
slightly to work on Arrays instead of using a Matrix object.
It is apparently translated from http://stitchpanorama.sourceforge.net/Python/svd.py
*/

numeric.svd= function svd(A) {
    var temp;
//Compute the thin SVD from G. H. Golub and C. Reinsch, Numer. Math. 14, 403-420 (1970)
	var prec= numeric.epsilon; //Math.pow(2,-52) // assumes double prec
	var tolerance= 1.e-64/prec;
	var itmax= 50;
	var c=0;
	var i=0;
	var j=0;
	var k=0;
	var l=0;
	
	var u= numeric.clone(A);
	var m= u.length;
	
	var n= u[0].length;
	
	if (m < n) throw "Need more rows than columns"
	
	var e = new Array(n);
	var q = new Array(n);
	for (i=0; i<n; i++) e[i] = q[i] = 0.0;
	var v = numeric.rep([n,n],0);
//	v.zero();
	
 	function pythag(a,b)
 	{
		a = Math.abs(a)
		b = Math.abs(b)
		if (a > b)
			return a*Math.sqrt(1.0+(b*b/a/a))
		else if (b == 0.0) 
			return a
		return b*Math.sqrt(1.0+(a*a/b/b))
	}

	//Householder's reduction to bidiagonal form

	var f= 0.0;
	var g= 0.0;
	var h= 0.0;
	var x= 0.0;
	var y= 0.0;
	var z= 0.0;
	var s= 0.0;
	
	for (i=0; i < n; i++)
	{	
		e[i]= g;
		s= 0.0;
		l= i+1;
		for (j=i; j < m; j++) 
			s += (u[j][i]*u[j][i]);
		if (s <= tolerance)
			g= 0.0;
		else
		{	
			f= u[i][i];
			g= Math.sqrt(s);
			if (f >= 0.0) g= -g;
			h= f*g-s
			u[i][i]=f-g;
			for (j=l; j < n; j++)
			{
				s= 0.0
				for (k=i; k < m; k++) 
					s += u[k][i]*u[k][j]
				f= s/h
				for (k=i; k < m; k++) 
					u[k][j]+=f*u[k][i]
			}
		}
		q[i]= g
		s= 0.0
		for (j=l; j < n; j++) 
			s= s + u[i][j]*u[i][j]
		if (s <= tolerance)
			g= 0.0
		else
		{	
			f= u[i][i+1]
			g= Math.sqrt(s)
			if (f >= 0.0) g= -g
			h= f*g - s
			u[i][i+1] = f-g;
			for (j=l; j < n; j++) e[j]= u[i][j]/h
			for (j=l; j < m; j++)
			{	
				s=0.0
				for (k=l; k < n; k++) 
					s += (u[j][k]*u[i][k])
				for (k=l; k < n; k++) 
					u[j][k]+=s*e[k]
			}	
		}
		y= Math.abs(q[i])+Math.abs(e[i])
		if (y>x) 
			x=y
	}
	
	// accumulation of right hand gtransformations
	for (i=n-1; i != -1; i+= -1)
	{	
		if (g != 0.0)
		{
		 	h= g*u[i][i+1]
			for (j=l; j < n; j++) 
				v[j][i]=u[i][j]/h
			for (j=l; j < n; j++)
			{	
				s=0.0
				for (k=l; k < n; k++) 
					s += u[i][k]*v[k][j]
				for (k=l; k < n; k++) 
					v[k][j]+=(s*v[k][i])
			}	
		}
		for (j=l; j < n; j++)
		{
			v[i][j] = 0;
			v[j][i] = 0;
		}
		v[i][i] = 1;
		g= e[i]
		l= i
	}
	
	// accumulation of left hand transformations
	for (i=n-1; i != -1; i+= -1)
	{	
		l= i+1
		g= q[i]
		for (j=l; j < n; j++) 
			u[i][j] = 0;
		if (g != 0.0)
		{
			h= u[i][i]*g
			for (j=l; j < n; j++)
			{
				s=0.0
				for (k=l; k < m; k++) s += u[k][i]*u[k][j];
				f= s/h
				for (k=i; k < m; k++) u[k][j]+=f*u[k][i];
			}
			for (j=i; j < m; j++) u[j][i] = u[j][i]/g;
		}
		else
			for (j=i; j < m; j++) u[j][i] = 0;
		u[i][i] += 1;
	}
	
	// diagonalization of the bidiagonal form
	prec= prec*x
	for (k=n-1; k != -1; k+= -1)
	{
		for (var iteration=0; iteration < itmax; iteration++)
		{	// test f splitting
			var test_convergence = false
			for (l=k; l != -1; l+= -1)
			{	
				if (Math.abs(e[l]) <= prec)
				{	test_convergence= true
					break 
				}
				if (Math.abs(q[l-1]) <= prec)
					break 
			}
			if (!test_convergence)
			{	// cancellation of e[l] if l>0
				c= 0.0
				s= 1.0
				var l1= l-1
				for (i =l; i<k+1; i++)
				{	
					f= s*e[i]
					e[i]= c*e[i]
					if (Math.abs(f) <= prec)
						break
					g= q[i]
					h= pythag(f,g)
					q[i]= h
					c= g/h
					s= -f/h
					for (j=0; j < m; j++)
					{	
						y= u[j][l1]
						z= u[j][i]
						u[j][l1] =  y*c+(z*s)
						u[j][i] = -y*s+(z*c)
					} 
				}	
			}
			// test f convergence
			z= q[k]
			if (l== k)
			{	//convergence
				if (z<0.0)
				{	//q[k] is made non-negative
					q[k]= -z
					for (j=0; j < n; j++)
						v[j][k] = -v[j][k]
				}
				break  //break out of iteration loop and move on to next k value
			}
			if (iteration >= itmax-1)
				throw 'Error: no convergence.'
			// shift from bottom 2x2 minor
			x= q[l]
			y= q[k-1]
			g= e[k-1]
			h= e[k]
			f= ((y-z)*(y+z)+(g-h)*(g+h))/(2.0*h*y)
			g= pythag(f,1.0)
			if (f < 0.0)
				f= ((x-z)*(x+z)+h*(y/(f-g)-h))/x
			else
				f= ((x-z)*(x+z)+h*(y/(f+g)-h))/x
			// next QR transformation
			c= 1.0
			s= 1.0
			for (i=l+1; i< k+1; i++)
			{	
				g= e[i]
				y= q[i]
				h= s*g
				g= c*g
				z= pythag(f,h)
				e[i-1]= z
				c= f/z
				s= h/z
				f= x*c+g*s
				g= -x*s+g*c
				h= y*s
				y= y*c
				for (j=0; j < n; j++)
				{	
					x= v[j][i-1]
					z= v[j][i]
					v[j][i-1] = x*c+z*s
					v[j][i] = -x*s+z*c
				}
				z= pythag(f,h)
				q[i-1]= z
				c= f/z
				s= h/z
				f= c*g+s*y
				x= -s*g+c*y
				for (j=0; j < m; j++)
				{
					y= u[j][i-1]
					z= u[j][i]
					u[j][i-1] = y*c+z*s
					u[j][i] = -y*s+z*c
				}
			}
			e[l]= 0.0
			e[k]= f
			q[k]= x
		} 
	}
		
	//vt= transpose(v)
	//return (u,q,vt)
	for (i=0;i<q.length; i++) 
	  if (q[i] < prec) q[i] = 0
	  
	//sort eigenvalues	
	for (i=0; i< n; i++)
	{	 
	//writeln(q)
	 for (j=i-1; j >= 0; j--)
	 {
	  if (q[j] < q[i])
	  {
	//  writeln(i,'-',j)
	   c = q[j]
	   q[j] = q[i]
	   q[i] = c
	   for(k=0;k<u.length;k++) { temp = u[k][i]; u[k][i] = u[k][j]; u[k][j] = temp; }
	   for(k=0;k<v.length;k++) { temp = v[k][i]; v[k][i] = v[k][j]; v[k][j] = temp; }
//	   u.swapCols(i,j)
//	   v.swapCols(i,j)
	   i = j	   
	  }
	 }	
	}
	
	return {U:u,S:q,V:v}
};


;/**
 * @license
 * Video.js 7.0.3 <http://videojs.com/>
 * Copyright Brightcove, Inc. <https://www.brightcove.com/>
 * Available under Apache License Version 2.0
 * <https://github.com/videojs/video.js/blob/master/LICENSE>
 *
 * Includes vtt.js <https://github.com/mozilla/vtt.js>
 * Available under Apache License Version 2.0
 * <https://github.com/mozilla/vtt.js/blob/master/LICENSE>
 */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.videojs=e()}(this,function(){var d="7.0.3",t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function e(t,e){return t(e={exports:{}},e.exports),e.exports}var i,g="undefined"!=typeof window?window:"undefined"!=typeof t?t:"undefined"!=typeof self?self:{},r={},n=Object.freeze({default:r}),s=n&&r||n,a="undefined"!=typeof t?t:"undefined"!=typeof window?window:{};"undefined"!=typeof document?i=document:(i=a["__GLOBAL_DOCUMENT_CACHE@4"])||(i=a["__GLOBAL_DOCUMENT_CACHE@4"]=s);var p=i,o=void 0,u="info",l=[],c=function(t,e){var i=o.levels[u],r=new RegExp("^("+i+")$");if("log"!==t&&e.unshift(t.toUpperCase()+":"),l&&l.push([].concat(e)),e.unshift("VIDEOJS:"),g.console){var n=g.console[t];n||"debug"!==t||(n=g.console.info||g.console.log),n&&i&&r.test(t)&&n[Array.isArray(e)?"apply":"call"](g.console,e)}};(o=function(){for(var t=arguments.length,e=Array(t),i=0;i<t;i++)e[i]=arguments[i];c("log",e)}).levels={all:"debug|log|warn|error",off:"",debug:"debug|log|warn|error",info:"log|warn|error",warn:"warn|error",error:"error",DEFAULT:u},o.level=function(t){if("string"==typeof t){if(!o.levels.hasOwnProperty(t))throw new Error('"'+t+'" in not a valid log level');u=t}return u},o.history=function(){return l?[].concat(l):[]},o.history.clear=function(){l&&(l.length=0)},o.history.disable=function(){null!==l&&(l.length=0,l=null)},o.history.enable=function(){null===l&&(l=[])},o.error=function(){for(var t=arguments.length,e=Array(t),i=0;i<t;i++)e[i]=arguments[i];return c("error",e)},o.warn=function(){for(var t=arguments.length,e=Array(t),i=0;i<t;i++)e[i]=arguments[i];return c("warn",e)},o.debug=function(){for(var t=arguments.length,e=Array(t),i=0;i<t;i++)e[i]=arguments[i];return c("debug",e)};var f=o;var m=function(t){for(var e="",i=0;i<arguments.length;i++)e+=t[i].replace(/\n\r?\s*/g,"")+(arguments[i+1]||"");return e},v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},_=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},b=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},h=function(t,e){return t.raw=e,t},T=Object.prototype.toString,S=function(t){return E(t)?Object.keys(t):[]};function k(e,i){S(e).forEach(function(t){return i(e[t],t)})}function C(i){for(var t=arguments.length,e=Array(1<t?t-1:0),r=1;r<t;r++)e[r-1]=arguments[r];return Object.assign?Object.assign.apply(Object,[i].concat(e)):(e.forEach(function(t){t&&k(t,function(t,e){i[e]=t})}),i)}function E(t){return!!t&&"object"===("undefined"==typeof t?"undefined":v(t))}function w(t){return E(t)&&"[object Object]"===T.call(t)&&t.constructor===Object}function A(t,e){if(!t||!e)return"";if("function"==typeof g.getComputedStyle){var i=g.getComputedStyle(t);return i?i[e]:""}return""}var L=h(["Setting attributes in the second argument of createEl()\n                has been deprecated. Use the third argument instead.\n                createEl(type, properties, attributes). Attempting to set "," to ","."],["Setting attributes in the second argument of createEl()\n                has been deprecated. Use the third argument instead.\n                createEl(type, properties, attributes). Attempting to set "," to ","."]);function P(t){return"string"==typeof t&&/\S/.test(t)}function O(t){if(/\s/.test(t))throw new Error("class has illegal whitespace characters")}function x(){return p===g.document}function I(t){return E(t)&&1===t.nodeType}function D(){try{return g.parent!==g.self}catch(t){return!0}}function R(r){return function(t,e){if(!P(t))return p[r](null);P(e)&&(e=p.querySelector(e));var i=I(e)?e:p;return i[r]&&i[r](t)}}function M(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"div",i=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},e=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},r=arguments[3],n=p.createElement(t);return Object.getOwnPropertyNames(i).forEach(function(t){var e=i[t];-1!==t.indexOf("aria-")||"role"===t||"type"===t?(f.warn(m(L,t,e)),n.setAttribute(t,e)):"textContent"===t?U(n,e):n[t]=e}),Object.getOwnPropertyNames(e).forEach(function(t){n.setAttribute(t,e[t])}),r&&et(n,r),n}function U(t,e){return"undefined"==typeof t.textContent?t.innerText=e:t.textContent=e,t}function N(t,e){e.firstChild?e.insertBefore(t,e.firstChild):e.appendChild(t)}function B(t,e){return O(e),t.classList?t.classList.contains(e):(i=e,new RegExp("(^|\\s)"+i+"($|\\s)")).test(t.className);var i}function j(t,e){return t.classList?t.classList.add(e):B(t,e)||(t.className=(t.className+" "+e).trim()),t}function F(t,e){return t.classList?t.classList.remove(e):(O(e),t.className=t.className.split(/\s+/).filter(function(t){return t!==e}).join(" ")),t}function H(t,e,i){var r=B(t,e);if("function"==typeof i&&(i=i(t,e)),"boolean"!=typeof i&&(i=!r),i!==r)return i?j(t,e):F(t,e),t}function V(i,r){Object.getOwnPropertyNames(r).forEach(function(t){var e=r[t];null===e||"undefined"==typeof e||!1===e?i.removeAttribute(t):i.setAttribute(t,!0===e?"":e)})}function q(t){var e={},i=",autoplay,controls,playsinline,loop,muted,default,defaultMuted,";if(t&&t.attributes&&0<t.attributes.length)for(var r=t.attributes,n=r.length-1;0<=n;n--){var s=r[n].name,a=r[n].value;"boolean"!=typeof t[s]&&-1===i.indexOf(","+s+",")||(a=null!==a),e[s]=a}return e}function W(t,e){return t.getAttribute(e)}function z(t,e,i){t.setAttribute(e,i)}function G(t,e){t.removeAttribute(e)}function X(){p.body.focus(),p.onselectstart=function(){return!1}}function Y(){p.onselectstart=function(){return!0}}function $(t){if(t&&t.getBoundingClientRect&&t.parentNode){var e=t.getBoundingClientRect(),i={};return["bottom","height","left","right","top","width"].forEach(function(t){void 0!==e[t]&&(i[t]=e[t])}),i.height||(i.height=parseFloat(A(t,"height"))),i.width||(i.width=parseFloat(A(t,"width"))),i}}function K(t){var e=void 0;if(t.getBoundingClientRect&&t.parentNode&&(e=t.getBoundingClientRect()),!e)return{left:0,top:0};var i=p.documentElement,r=p.body,n=i.clientLeft||r.clientLeft||0,s=g.pageXOffset||r.scrollLeft,a=e.left+s-n,o=i.clientTop||r.clientTop||0,u=g.pageYOffset||r.scrollTop,l=e.top+u-o;return{left:Math.round(a),top:Math.round(l)}}function Q(t,e){var i={},r=K(t),n=t.offsetWidth,s=t.offsetHeight,a=r.top,o=r.left,u=e.pageY,l=e.pageX;return e.changedTouches&&(l=e.changedTouches[0].pageX,u=e.changedTouches[0].pageY),i.y=Math.max(0,Math.min(1,(a-u+s)/s)),i.x=Math.max(0,Math.min(1,(l-o)/n)),i}function J(t){return E(t)&&3===t.nodeType}function Z(t){for(;t.firstChild;)t.removeChild(t.firstChild);return t}function tt(t){return"function"==typeof t&&(t=t()),(Array.isArray(t)?t:[t]).map(function(t){return"function"==typeof t&&(t=t()),I(t)||J(t)?t:"string"==typeof t&&/\S/.test(t)?p.createTextNode(t):void 0}).filter(function(t){return t})}function et(e,t){return tt(t).forEach(function(t){return e.appendChild(t)}),e}function it(t,e){return et(Z(t),e)}function rt(t){return void 0===t.button&&void 0===t.buttons||(0===t.button&&void 0===t.buttons||0===t.button&&1===t.buttons)}var nt=R("querySelector"),st=R("querySelectorAll"),at=Object.freeze({isReal:x,isEl:I,isInFrame:D,createEl:M,textContent:U,prependTo:N,hasClass:B,addClass:j,removeClass:F,toggleClass:H,setAttributes:V,getAttributes:q,getAttribute:W,setAttribute:z,removeAttribute:G,blockTextSelection:X,unblockTextSelection:Y,getBoundingClientRect:$,findPosition:K,getPointerPosition:Q,isTextNode:J,emptyEl:Z,normalizeContent:tt,appendContent:et,insertContent:it,isSingleLeftClick:rt,$:nt,$$:st}),ot=1;function ut(){return ot++}var lt={},ct="vdata"+(new Date).getTime();function ht(t){var e=t[ct];return e||(e=t[ct]=ut()),lt[e]||(lt[e]={}),lt[e]}function dt(t){var e=t[ct];return!!e&&!!Object.getOwnPropertyNames(lt[e]).length}function pt(e){var t=e[ct];if(t){delete lt[t];try{delete e[ct]}catch(t){e.removeAttribute?e.removeAttribute(ct):e[ct]=null}}}function ft(t,e){var i=ht(t);0===i.handlers[e].length&&(delete i.handlers[e],t.removeEventListener?t.removeEventListener(e,i.dispatcher,!1):t.detachEvent&&t.detachEvent("on"+e,i.dispatcher)),Object.getOwnPropertyNames(i.handlers).length<=0&&(delete i.handlers,delete i.dispatcher,delete i.disabled),0===Object.getOwnPropertyNames(i).length&&pt(t)}function mt(e,i,t,r){t.forEach(function(t){e(i,t,r)})}function gt(t){function e(){return!0}function i(){return!1}if(!t||!t.isPropagationStopped){var r=t||g.event;for(var n in t={},r)"layerX"!==n&&"layerY"!==n&&"keyLocation"!==n&&"webkitMovementX"!==n&&"webkitMovementY"!==n&&("returnValue"===n&&r.preventDefault||(t[n]=r[n]));if(t.target||(t.target=t.srcElement||p),t.relatedTarget||(t.relatedTarget=t.fromElement===t.target?t.toElement:t.fromElement),t.preventDefault=function(){r.preventDefault&&r.preventDefault(),t.returnValue=!1,r.returnValue=!1,t.defaultPrevented=!0},t.defaultPrevented=!1,t.stopPropagation=function(){r.stopPropagation&&r.stopPropagation(),t.cancelBubble=!0,r.cancelBubble=!0,t.isPropagationStopped=e},t.isPropagationStopped=i,t.stopImmediatePropagation=function(){r.stopImmediatePropagation&&r.stopImmediatePropagation(),t.isImmediatePropagationStopped=e,t.stopPropagation()},t.isImmediatePropagationStopped=i,null!==t.clientX&&void 0!==t.clientX){var s=p.documentElement,a=p.body;t.pageX=t.clientX+(s&&s.scrollLeft||a&&a.scrollLeft||0)-(s&&s.clientLeft||a&&a.clientLeft||0),t.pageY=t.clientY+(s&&s.scrollTop||a&&a.scrollTop||0)-(s&&s.clientTop||a&&a.clientTop||0)}t.which=t.charCode||t.keyCode,null!==t.button&&void 0!==t.button&&(t.button=1&t.button?0:4&t.button?1:2&t.button?2:0)}return t}var yt=!1;!function(){try{var t=Object.defineProperty({},"passive",{get:function(){yt=!0}});g.addEventListener("test",null,t),g.removeEventListener("test",null,t)}catch(t){}}();var vt=["touchstart","touchmove"];function _t(a,t,e){if(Array.isArray(t))return mt(_t,a,t,e);var o=ht(a);if(o.handlers||(o.handlers={}),o.handlers[t]||(o.handlers[t]=[]),e.guid||(e.guid=ut()),o.handlers[t].push(e),o.dispatcher||(o.disabled=!1,o.dispatcher=function(t,e){if(!o.disabled){t=gt(t);var i=o.handlers[t.type];if(i)for(var r=i.slice(0),n=0,s=r.length;n<s&&!t.isImmediatePropagationStopped();n++)try{r[n].call(a,t,e)}catch(t){f.error(t)}}}),1===o.handlers[t].length)if(a.addEventListener){var i=!1;yt&&-1<vt.indexOf(t)&&(i={passive:!0}),a.addEventListener(t,o.dispatcher,i)}else a.attachEvent&&a.attachEvent("on"+t,o.dispatcher)}function bt(t,e,i){if(dt(t)){var r=ht(t);if(r.handlers){if(Array.isArray(e))return mt(bt,t,e,i);var n=function(t,e){r.handlers[e]=[],ft(t,e)};if(void 0!==e){var s=r.handlers[e];if(s)if(i){if(i.guid)for(var a=0;a<s.length;a++)s[a].guid===i.guid&&s.splice(a--,1);ft(t,e)}else n(t,e)}else for(var o in r.handlers)Object.prototype.hasOwnProperty.call(r.handlers||{},o)&&n(t,o)}}}function Tt(t,e,i){var r=dt(t)?ht(t):{},n=t.parentNode||t.ownerDocument;if("string"==typeof e?e={type:e,target:t}:e.target||(e.target=t),e=gt(e),r.dispatcher&&r.dispatcher.call(t,e,i),n&&!e.isPropagationStopped()&&!0===e.bubbles)Tt.call(null,n,e,i);else if(!n&&!e.defaultPrevented){var s=ht(e.target);e.target[e.type]&&(s.disabled=!0,"function"==typeof e.target[e.type]&&e.target[e.type](),s.disabled=!1)}return!e.defaultPrevented}function St(e,i,r){if(Array.isArray(i))return mt(St,e,i,r);var t=function t(){bt(e,i,t),r.apply(this,arguments)};t.guid=r.guid=r.guid||ut(),_t(e,i,t)}var kt=Object.freeze({fixEvent:gt,on:_t,off:bt,trigger:Tt,one:St}),Ct=!1,Et=void 0,wt=function(){if(x()&&!1!==Et.options.autoSetup){var t=Array.prototype.slice.call(p.getElementsByTagName("video")),e=Array.prototype.slice.call(p.getElementsByTagName("audio")),i=Array.prototype.slice.call(p.getElementsByTagName("video-js")),r=t.concat(e,i);if(r&&0<r.length)for(var n=0,s=r.length;n<s;n++){var a=r[n];if(!a||!a.getAttribute){At(1);break}void 0===a.player&&null!==a.getAttribute("data-setup")&&Et(a)}else Ct||At(1)}};function At(t,e){e&&(Et=e),g.setTimeout(wt,t)}x()&&"complete"===p.readyState?Ct=!0:St(g,"load",function(){Ct=!0});var Lt=function(t){var e=p.createElement("style");return e.className=t,e},Pt=function(t,e){t.styleSheet?t.styleSheet.cssText=e:t.textContent=e},Ot=function(t,e,i){e.guid||(e.guid=ut());var r=function(){return e.apply(t,arguments)};return r.guid=i?i+"_"+e.guid:e.guid,r},xt=function(e,i){var r=Date.now();return function(){var t=Date.now();i<=t-r&&(e.apply(void 0,arguments),r=t)}},It=function(r,n,s){var a=3<arguments.length&&void 0!==arguments[3]?arguments[3]:g,o=void 0;return function(){var t=this,e=arguments,i=function(){i=o=null,s||r.apply(t,e)};!o&&s&&r.apply(t,e),a.clearTimeout(o),o=a.setTimeout(i,n)}},Dt=function(){};Dt.prototype.allowedEvents_={},Dt.prototype.addEventListener=Dt.prototype.on=function(t,e){var i=this.addEventListener;this.addEventListener=function(){},_t(this,t,e),this.addEventListener=i},Dt.prototype.removeEventListener=Dt.prototype.off=function(t,e){bt(this,t,e)},Dt.prototype.one=function(t,e){var i=this.addEventListener;this.addEventListener=function(){},St(this,t,e),this.addEventListener=i},Dt.prototype.dispatchEvent=Dt.prototype.trigger=function(t){var e=t.type||t;"string"==typeof t&&(t={type:e}),t=gt(t),this.allowedEvents_[e]&&this["on"+e]&&this["on"+e](t),Tt(this,t)};var Rt=function(e){return e instanceof Dt||!!e.eventBusEl_&&["on","one","off","trigger"].every(function(t){return"function"==typeof e[t]})},Mt=function(t){return"string"==typeof t&&/\S/.test(t)||Array.isArray(t)&&!!t.length},Ut=function(t){if(!t.nodeName&&!Rt(t))throw new Error("Invalid target; must be a DOM node or evented object.")},Nt=function(t){if(!Mt(t))throw new Error("Invalid event type; must be a non-empty string or array.")},Bt=function(t){if("function"!=typeof t)throw new Error("Invalid listener; must be a function.")},jt=function(t,e){var i=e.length<3||e[0]===t||e[0]===t.eventBusEl_,r=void 0,n=void 0,s=void 0;return i?(r=t.eventBusEl_,3<=e.length&&e.shift(),n=e[0],s=e[1]):(r=e[0],n=e[1],s=e[2]),Ut(r),Nt(n),Bt(s),{isTargetingSelf:i,target:r,type:n,listener:s=Ot(t,s)}},Ft=function(t,e,i,r){Ut(t),t.nodeName?kt[e](t,i,r):t[e](i,r)},Ht={on:function(){for(var t=this,e=arguments.length,i=Array(e),r=0;r<e;r++)i[r]=arguments[r];var n=jt(this,i),s=n.isTargetingSelf,a=n.target,o=n.type,u=n.listener;if(Ft(a,"on",o,u),!s){var l=function(){return t.off(a,o,u)};l.guid=u.guid;var c=function(){return t.off("dispose",l)};c.guid=u.guid,Ft(this,"on","dispose",l),Ft(a,"on","dispose",c)}},one:function(){for(var n=this,t=arguments.length,e=Array(t),i=0;i<t;i++)e[i]=arguments[i];var r=jt(this,e),s=r.isTargetingSelf,a=r.target,o=r.type,u=r.listener;if(s)Ft(a,"one",o,u);else{var l=function t(){for(var e=arguments.length,i=Array(e),r=0;r<e;r++)i[r]=arguments[r];n.off(a,o,t),u.apply(null,i)};l.guid=u.guid,Ft(a,"one",o,l)}},off:function(t,e,i){if(!t||Mt(t))bt(this.eventBusEl_,t,e);else{var r=t,n=e;Ut(r),Nt(n),Bt(i),i=Ot(this,i),this.off("dispose",i),r.nodeName?(bt(r,n,i),bt(r,"dispose",i)):Rt(r)&&(r.off(n,i),r.off("dispose",i))}},trigger:function(t,e){return Tt(this.eventBusEl_,t,e)}};function Vt(t){var e=(1<arguments.length&&void 0!==arguments[1]?arguments[1]:{}).eventBusKey;if(e){if(!t[e].nodeName)throw new Error('The eventBusKey "'+e+'" does not refer to an element.');t.eventBusEl_=t[e]}else t.eventBusEl_=M("span",{className:"vjs-event-bus"});return C(t,Ht),t.on("dispose",function(){t.off(),g.setTimeout(function(){t.eventBusEl_=null},0)}),t}var qt={state:{},setState:function(t){var i=this;"function"==typeof t&&(t=t());var r=void 0;return k(t,function(t,e){i.state[e]!==t&&((r=r||{})[e]={from:i.state[e],to:t}),i.state[e]=t}),r&&Rt(this)&&this.trigger({changes:r,type:"statechanged"}),r}};function Wt(t,e){return C(t,qt),t.state=C({},t.state,e),"function"==typeof t.handleStateChanged&&Rt(t)&&t.on("statechanged",t.handleStateChanged),t}function zt(t){return"string"!=typeof t?t:t.charAt(0).toUpperCase()+t.slice(1)}function Gt(){for(var i={},t=arguments.length,e=Array(t),r=0;r<t;r++)e[r]=arguments[r];return e.forEach(function(t){t&&k(t,function(t,e){w(t)?(w(i[e])||(i[e]={}),i[e]=Gt(i[e],t)):i[e]=t})}),i}var Xt=function(){function l(t,e,i){if(y(this,l),!t&&this.play?this.player_=t=this:this.player_=t,this.options_=Gt({},this.options_),e=this.options_=Gt(this.options_,e),this.id_=e.id||e.el&&e.el.id,!this.id_){var r=t&&t.id&&t.id()||"no_player";this.id_=r+"_component_"+ut()}this.name_=e.name||null,e.el?this.el_=e.el:!1!==e.createEl&&(this.el_=this.createEl()),!1!==e.evented&&Vt(this,{eventBusKey:this.el_?"el_":null}),Wt(this,this.constructor.defaultState),this.children_=[],this.childIndex_={},!(this.childNameIndex_={})!==e.initChildren&&this.initChildren(),this.ready(i),!1!==e.reportTouchActivity&&this.enableTouchActivity()}return l.prototype.dispose=function(){if(this.trigger({type:"dispose",bubbles:!1}),this.children_)for(var t=this.children_.length-1;0<=t;t--)this.children_[t].dispose&&this.children_[t].dispose();this.children_=null,this.childIndex_=null,this.childNameIndex_=null,this.el_&&(this.el_.parentNode&&this.el_.parentNode.removeChild(this.el_),pt(this.el_),this.el_=null),this.player_=null},l.prototype.player=function(){return this.player_},l.prototype.options=function(t){return f.warn("this.options() has been deprecated and will be moved to the constructor in 6.0"),t&&(this.options_=Gt(this.options_,t)),this.options_},l.prototype.el=function(){return this.el_},l.prototype.createEl=function(t,e,i){return M(t,e,i)},l.prototype.localize=function(t,n){var e=2<arguments.length&&void 0!==arguments[2]?arguments[2]:t,i=this.player_.language&&this.player_.language(),r=this.player_.languages&&this.player_.languages(),s=r&&r[i],a=i&&i.split("-")[0],o=r&&r[a],u=e;return s&&s[t]?u=s[t]:o&&o[t]&&(u=o[t]),n&&(u=u.replace(/\{(\d+)\}/g,function(t,e){var i=n[e-1],r=i;return"undefined"==typeof i&&(r=t),r})),u},l.prototype.contentEl=function(){return this.contentEl_||this.el_},l.prototype.id=function(){return this.id_},l.prototype.name=function(){return this.name_},l.prototype.children=function(){return this.children_},l.prototype.getChildById=function(t){return this.childIndex_[t]},l.prototype.getChild=function(t){if(t)return t=zt(t),this.childNameIndex_[t]},l.prototype.addChild=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},i=2<arguments.length&&void 0!==arguments[2]?arguments[2]:this.children_.length,r=void 0,n=void 0;if("string"==typeof t){n=zt(t);var s=e.componentClass||n;e.name=n;var a=l.getComponent(s);if(!a)throw new Error("Component "+s+" does not exist");if("function"!=typeof a)return null;r=new a(this.player_||this,e)}else r=t;if(this.children_.splice(i,0,r),"function"==typeof r.id&&(this.childIndex_[r.id()]=r),(n=n||r.name&&zt(r.name()))&&(this.childNameIndex_[n]=r),"function"==typeof r.el&&r.el()){var o=this.contentEl().children[i]||null;this.contentEl().insertBefore(r.el(),o)}return r},l.prototype.removeChild=function(t){if("string"==typeof t&&(t=this.getChild(t)),t&&this.children_){for(var e=!1,i=this.children_.length-1;0<=i;i--)if(this.children_[i]===t){e=!0,this.children_.splice(i,1);break}if(e){this.childIndex_[t.id()]=null,this.childNameIndex_[t.name()]=null;var r=t.el();r&&r.parentNode===this.contentEl()&&this.contentEl().removeChild(t.el())}}},l.prototype.initChildren=function(){var n=this,r=this.options_.children;if(r){var s=this.options_,t=void 0,i=l.getComponent("Tech");(t=Array.isArray(r)?r:Object.keys(r)).concat(Object.keys(this.options_).filter(function(e){return!t.some(function(t){return"string"==typeof t?e===t:e===t.name})})).map(function(t){var e=void 0,i=void 0;return"string"==typeof t?i=r[e=t]||n.options_[e]||{}:(e=t.name,i=t),{name:e,opts:i}}).filter(function(t){var e=l.getComponent(t.opts.componentClass||zt(t.name));return e&&!i.isTech(e)}).forEach(function(t){var e=t.name,i=t.opts;if(void 0!==s[e]&&(i=s[e]),!1!==i){!0===i&&(i={}),i.playerOptions=n.options_.playerOptions;var r=n.addChild(e,i);r&&(n[e]=r)}})}},l.prototype.buildCSSClass=function(){return""},l.prototype.ready=function(t){var e=1<arguments.length&&void 0!==arguments[1]&&arguments[1];if(t)return this.isReady_?void(e?t.call(this):this.setTimeout(t,1)):(this.readyQueue_=this.readyQueue_||[],void this.readyQueue_.push(t))},l.prototype.triggerReady=function(){this.isReady_=!0,this.setTimeout(function(){var t=this.readyQueue_;this.readyQueue_=[],t&&0<t.length&&t.forEach(function(t){t.call(this)},this),this.trigger("ready")},1)},l.prototype.$=function(t,e){return nt(t,e||this.contentEl())},l.prototype.$$=function(t,e){return st(t,e||this.contentEl())},l.prototype.hasClass=function(t){return B(this.el_,t)},l.prototype.addClass=function(t){j(this.el_,t)},l.prototype.removeClass=function(t){F(this.el_,t)},l.prototype.toggleClass=function(t,e){H(this.el_,t,e)},l.prototype.show=function(){this.removeClass("vjs-hidden")},l.prototype.hide=function(){this.addClass("vjs-hidden")},l.prototype.lockShowing=function(){this.addClass("vjs-lock-showing")},l.prototype.unlockShowing=function(){this.removeClass("vjs-lock-showing")},l.prototype.getAttribute=function(t){return W(this.el_,t)},l.prototype.setAttribute=function(t,e){z(this.el_,t,e)},l.prototype.removeAttribute=function(t){G(this.el_,t)},l.prototype.width=function(t,e){return this.dimension("width",t,e)},l.prototype.height=function(t,e){return this.dimension("height",t,e)},l.prototype.dimensions=function(t,e){this.width(t,!0),this.height(e)},l.prototype.dimension=function(t,e,i){if(void 0!==e)return null!==e&&e==e||(e=0),-1!==(""+e).indexOf("%")||-1!==(""+e).indexOf("px")?this.el_.style[t]=e:this.el_.style[t]="auto"===e?"":e+"px",void(i||this.trigger("componentresize"));if(!this.el_)return 0;var r=this.el_.style[t],n=r.indexOf("px");return-1!==n?parseInt(r.slice(0,n),10):parseInt(this.el_["offset"+zt(t)],10)},l.prototype.currentDimension=function(t){var e=0;if("width"!==t&&"height"!==t)throw new Error("currentDimension only accepts width or height value");if("function"==typeof g.getComputedStyle){var i=g.getComputedStyle(this.el_);e=i.getPropertyValue(t)||i[t]}if(0===(e=parseFloat(e))){var r="offset"+zt(t);e=this.el_[r]}return e},l.prototype.currentDimensions=function(){return{width:this.currentDimension("width"),height:this.currentDimension("height")}},l.prototype.currentWidth=function(){return this.currentDimension("width")},l.prototype.currentHeight=function(){return this.currentDimension("height")},l.prototype.focus=function(){this.el_.focus()},l.prototype.blur=function(){this.el_.blur()},l.prototype.emitTapEvents=function(){var e=0,r=null,n=void 0;this.on("touchstart",function(t){1===t.touches.length&&(r={pageX:t.touches[0].pageX,pageY:t.touches[0].pageY},e=(new Date).getTime(),n=!0)}),this.on("touchmove",function(t){if(1<t.touches.length)n=!1;else if(r){var e=t.touches[0].pageX-r.pageX,i=t.touches[0].pageY-r.pageY;10<Math.sqrt(e*e+i*i)&&(n=!1)}});var t=function(){n=!1};this.on("touchleave",t),this.on("touchcancel",t),this.on("touchend",function(t){!(r=null)===n&&((new Date).getTime()-e<200&&(t.preventDefault(),this.trigger("tap")))})},l.prototype.enableTouchActivity=function(){if(this.player()&&this.player().reportUserActivity){var e=Ot(this.player(),this.player().reportUserActivity),i=void 0;this.on("touchstart",function(){e(),this.clearInterval(i),i=this.setInterval(e,250)});var t=function(t){e(),this.clearInterval(i)};this.on("touchmove",e),this.on("touchend",t),this.on("touchcancel",t)}},l.prototype.setTimeout=function(t,e){var i=this;t=Ot(this,t);var r=g.setTimeout(t,e),n=function(){return i.clearTimeout(r)};return n.guid="vjs-timeout-"+r,this.on("dispose",n),r},l.prototype.clearTimeout=function(t){g.clearTimeout(t);var e=function(){};return e.guid="vjs-timeout-"+t,this.off("dispose",e),t},l.prototype.setInterval=function(t,e){var i=this;t=Ot(this,t);var r=g.setInterval(t,e),n=function(){return i.clearInterval(r)};return n.guid="vjs-interval-"+r,this.on("dispose",n),r},l.prototype.clearInterval=function(t){g.clearInterval(t);var e=function(){};return e.guid="vjs-interval-"+t,this.off("dispose",e),t},l.prototype.requestAnimationFrame=function(t){var e=this;if(this.supportsRaf_){t=Ot(this,t);var i=g.requestAnimationFrame(t),r=function(){return e.cancelAnimationFrame(i)};return r.guid="vjs-raf-"+i,this.on("dispose",r),i}return this.setTimeout(t,1e3/60)},l.prototype.cancelAnimationFrame=function(t){if(this.supportsRaf_){g.cancelAnimationFrame(t);var e=function(){};return e.guid="vjs-raf-"+t,this.off("dispose",e),t}return this.clearTimeout(t)},l.registerComponent=function(t,e){if("string"!=typeof t||!t)throw new Error('Illegal component name, "'+t+'"; must be a non-empty string.');var i=l.getComponent("Tech"),r=i&&i.isTech(e),n=l===e||l.prototype.isPrototypeOf(e.prototype);if(r||!n){var s=void 0;throw s=r?"techs must be registered using Tech.registerTech()":"must be a Component subclass",new Error('Illegal component, "'+t+'"; '+s+".")}t=zt(t),l.components_||(l.components_={});var a=l.getComponent("Player");if("Player"===t&&a&&a.players){var o=a.players,u=Object.keys(o);if(o&&0<u.length&&u.map(function(t){return o[t]}).every(Boolean))throw new Error("Can not register Player component after player has been created.")}return l.components_[t]=e},l.getComponent=function(t){if(t)return t=zt(t),l.components_&&l.components_[t]?l.components_[t]:void 0},l}();Xt.prototype.supportsRaf_="function"==typeof g.requestAnimationFrame&&"function"==typeof g.cancelAnimationFrame,Xt.registerComponent("Component",Xt);var Yt,$t,Kt,Qt,Jt=g.navigator&&g.navigator.userAgent||"",Zt=/AppleWebKit\/([\d.]+)/i.exec(Jt),te=Zt?parseFloat(Zt.pop()):null,ee=/iPad/i.test(Jt),ie=/iPhone/i.test(Jt)&&!ee,re=/iPod/i.test(Jt),ne=ie||ee||re,se=(Yt=Jt.match(/OS (\d+)_/i))&&Yt[1]?Yt[1]:null,ae=/Android/i.test(Jt),oe=function(){var t=Jt.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i);if(!t)return null;var e=t[1]&&parseFloat(t[1]),i=t[2]&&parseFloat(t[2]);return e&&i?parseFloat(t[1]+"."+t[2]):e||null}(),ue=ae&&oe<5&&te<537,le=/Firefox/i.test(Jt),ce=/Edge/i.test(Jt),he=!ce&&/Chrome/i.test(Jt),de=($t=Jt.match(/Chrome\/(\d+)/))&&$t[1]?parseFloat($t[1]):null,pe=(Kt=/MSIE\s(\d+)\.\d/.exec(Jt),!(Qt=Kt&&parseFloat(Kt[1]))&&/Trident\/7.0/i.test(Jt)&&/rv:11.0/.test(Jt)&&(Qt=11),Qt),fe=/Safari/i.test(Jt)&&!he&&!ae&&!ce,me=fe||ne,ge=x()&&("ontouchstart"in g||g.DocumentTouch&&g.document instanceof g.DocumentTouch),ye=Object.freeze({IS_IPAD:ee,IS_IPHONE:ie,IS_IPOD:re,IS_IOS:ne,IOS_VERSION:se,IS_ANDROID:ae,ANDROID_VERSION:oe,IS_NATIVE_ANDROID:ue,IS_FIREFOX:le,IS_EDGE:ce,IS_CHROME:he,CHROME_VERSION:de,IE_VERSION:pe,IS_SAFARI:fe,IS_ANY_SAFARI:me,TOUCH_ENABLED:ge});function ve(t,e,i,r){return function(t,e,i){if("number"!=typeof e||e<0||i<e)throw new Error("Failed to execute '"+t+"' on 'TimeRanges': The index provided ("+e+") is non-numeric or out of bounds (0-"+i+").")}(t,r,i.length-1),i[r][e]}function _e(t){return void 0===t||0===t.length?{length:0,start:function(){throw new Error("This TimeRanges object is empty")},end:function(){throw new Error("This TimeRanges object is empty")}}:{length:t.length,start:ve.bind(null,"start",0,t),end:ve.bind(null,"end",1,t)}}function be(t,e){return Array.isArray(t)?_e(t):void 0===t||void 0===e?_e():_e([[t,e]])}function Te(t,e){var i=0,r=void 0,n=void 0;if(!e)return 0;t&&t.length||(t=be(0,0));for(var s=0;s<t.length;s++)r=t.start(s),e<(n=t.end(s))&&(n=e),i+=n-r;return i/e}for(var Se={},ke=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],Ce=ke[0],Ee=void 0,we=0;we<ke.length;we++)if(ke[we][1]in p){Ee=ke[we];break}if(Ee)for(var Ae=0;Ae<Ee.length;Ae++)Se[Ce[Ae]]=Ee[Ae];function Le(t){if(t instanceof Le)return t;"number"==typeof t?this.code=t:"string"==typeof t?this.message=t:E(t)&&("number"==typeof t.code&&(this.code=t.code),C(this,t)),this.message||(this.message=Le.defaultMessages[this.code]||"")}Le.prototype.code=0,Le.prototype.message="",Le.prototype.status=null,Le.errorTypes=["MEDIA_ERR_CUSTOM","MEDIA_ERR_ABORTED","MEDIA_ERR_NETWORK","MEDIA_ERR_DECODE","MEDIA_ERR_SRC_NOT_SUPPORTED","MEDIA_ERR_ENCRYPTED"],Le.defaultMessages={1:"You aborted the media playback",2:"A network error caused the media download to fail part-way.",3:"The media playback was aborted due to a corruption problem or because the media used features your browser did not support.",4:"The media could not be loaded, either because the server or network failed or because the format is not supported.",5:"The media is encrypted and we do not have the keys to decrypt it."};for(var Pe=0;Pe<Le.errorTypes.length;Pe++)Le[Le.errorTypes[Pe]]=Pe,Le.prototype[Le.errorTypes[Pe]]=Pe;var Oe=function(t,e){var i,r=null;try{i=JSON.parse(t,e)}catch(t){r=t}return[r,i]};function xe(t){return null!=t&&"function"==typeof t.then}function Ie(t){xe(t)&&t.then(null,function(t){})}var De=function(r){return["kind","label","language","id","inBandMetadataTrackDispatchType","mode","src"].reduce(function(t,e,i){return r[e]&&(t[e]=r[e]),t},{cues:r.cues&&Array.prototype.map.call(r.cues,function(t){return{startTime:t.startTime,endTime:t.endTime,text:t.text,id:t.id}})})},Re=function(t){var e=t.$$("track"),i=Array.prototype.map.call(e,function(t){return t.track});return Array.prototype.map.call(e,function(t){var e=De(t.track);return t.src&&(e.src=t.src),e}).concat(Array.prototype.filter.call(t.textTracks(),function(t){return-1===i.indexOf(t)}).map(De))},Me=function(t,i){return t.forEach(function(t){var e=i.addRemoteTextTrack(t).track;!t.src&&t.cues&&t.cues.forEach(function(t){return e.addCue(t)})}),i.textTracks()},Ue="vjs-modal-dialog",Ne=function(r){function n(t,e){y(this,n);var i=b(this,r.call(this,t,e));return i.opened_=i.hasBeenOpened_=i.hasBeenFilled_=!1,i.closeable(!i.options_.uncloseable),i.content(i.options_.content),i.contentEl_=M("div",{className:Ue+"-content"},{role:"document"}),i.descEl_=M("p",{className:Ue+"-description vjs-control-text",id:i.el().getAttribute("aria-describedby")}),U(i.descEl_,i.description()),i.el_.appendChild(i.descEl_),i.el_.appendChild(i.contentEl_),i}return _(n,r),n.prototype.createEl=function(){return r.prototype.createEl.call(this,"div",{className:this.buildCSSClass(),tabIndex:-1},{"aria-describedby":this.id()+"_description","aria-hidden":"true","aria-label":this.label(),role:"dialog"})},n.prototype.dispose=function(){this.contentEl_=null,this.descEl_=null,this.previouslyActiveEl_=null,r.prototype.dispose.call(this)},n.prototype.buildCSSClass=function(){return Ue+" vjs-hidden "+r.prototype.buildCSSClass.call(this)},n.prototype.handleKeyPress=function(t){27===t.which&&this.closeable()&&this.close()},n.prototype.label=function(){return this.localize(this.options_.label||"Modal Window")},n.prototype.description=function(){var t=this.options_.description||this.localize("This is a modal window.");return this.closeable()&&(t+=" "+this.localize("This modal can be closed by pressing the Escape key or activating the close button.")),t},n.prototype.open=function(){if(!this.opened_){var t=this.player();this.trigger("beforemodalopen"),this.opened_=!0,(this.options_.fillAlways||!this.hasBeenOpened_&&!this.hasBeenFilled_)&&this.fill(),this.wasPlaying_=!t.paused(),this.options_.pauseOnOpen&&this.wasPlaying_&&t.pause(),this.closeable()&&this.on(this.el_.ownerDocument,"keydown",Ot(this,this.handleKeyPress)),this.hadControls_=t.controls(),t.controls(!1),this.show(),this.conditionalFocus_(),this.el().setAttribute("aria-hidden","false"),this.trigger("modalopen"),this.hasBeenOpened_=!0}},n.prototype.opened=function(t){return"boolean"==typeof t&&this[t?"open":"close"](),this.opened_},n.prototype.close=function(){if(this.opened_){var t=this.player();this.trigger("beforemodalclose"),this.opened_=!1,this.wasPlaying_&&this.options_.pauseOnOpen&&t.play(),this.closeable()&&this.off(this.el_.ownerDocument,"keydown",Ot(this,this.handleKeyPress)),this.hadControls_&&t.controls(!0),this.hide(),this.el().setAttribute("aria-hidden","true"),this.trigger("modalclose"),this.conditionalBlur_(),this.options_.temporary&&this.dispose()}},n.prototype.closeable=function(t){if("boolean"==typeof t){var e=this.closeable_=!!t,i=this.getChild("closeButton");if(e&&!i){var r=this.contentEl_;this.contentEl_=this.el_,i=this.addChild("closeButton",{controlText:"Close Modal Dialog"}),this.contentEl_=r,this.on(i,"close",this.close)}!e&&i&&(this.off(i,"close",this.close),this.removeChild(i),i.dispose())}return this.closeable_},n.prototype.fill=function(){this.fillWith(this.content())},n.prototype.fillWith=function(t){var e=this.contentEl(),i=e.parentNode,r=e.nextSibling;this.trigger("beforemodalfill"),this.hasBeenFilled_=!0,i.removeChild(e),this.empty(),it(e,t),this.trigger("modalfill"),r?i.insertBefore(e,r):i.appendChild(e);var n=this.getChild("closeButton");n&&i.appendChild(n.el_)},n.prototype.empty=function(){this.trigger("beforemodalempty"),Z(this.contentEl()),this.trigger("modalempty")},n.prototype.content=function(t){return"undefined"!=typeof t&&(this.content_=t),this.content_},n.prototype.conditionalFocus_=function(){var t=p.activeElement,e=this.player_.el_;this.previouslyActiveEl_=null,(e.contains(t)||e===t)&&(this.previouslyActiveEl_=t,this.focus(),this.on(p,"keydown",this.handleKeyDown))},n.prototype.conditionalBlur_=function(){this.previouslyActiveEl_&&(this.previouslyActiveEl_.focus(),this.previouslyActiveEl_=null),this.off(p,"keydown",this.handleKeyDown)},n.prototype.handleKeyDown=function(t){if(9===t.which){for(var e=this.focusableEls_(),i=this.el_.querySelector(":focus"),r=void 0,n=0;n<e.length;n++)if(i===e[n]){r=n;break}p.activeElement===this.el_&&(r=0),t.shiftKey&&0===r?(e[e.length-1].focus(),t.preventDefault()):t.shiftKey||r!==e.length-1||(e[0].focus(),t.preventDefault())}},n.prototype.focusableEls_=function(){var t=this.el_.querySelectorAll("*");return Array.prototype.filter.call(t,function(t){return(t instanceof g.HTMLAnchorElement||t instanceof g.HTMLAreaElement)&&t.hasAttribute("href")||(t instanceof g.HTMLInputElement||t instanceof g.HTMLSelectElement||t instanceof g.HTMLTextAreaElement||t instanceof g.HTMLButtonElement)&&!t.hasAttribute("disabled")||t instanceof g.HTMLIFrameElement||t instanceof g.HTMLObjectElement||t instanceof g.HTMLEmbedElement||t.hasAttribute("tabindex")&&-1!==t.getAttribute("tabindex")||t.hasAttribute("contenteditable")})},n}(Xt);Ne.prototype.options_={pauseOnOpen:!0,temporary:!0},Xt.registerComponent("ModalDialog",Ne);var Be=function(r){function n(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[];y(this,n);var e=b(this,r.call(this));e.tracks_=[],Object.defineProperty(e,"length",{get:function(){return this.tracks_.length}});for(var i=0;i<t.length;i++)e.addTrack(t[i]);return e}return _(n,r),n.prototype.addTrack=function(t){var e=this.tracks_.length;""+e in this||Object.defineProperty(this,e,{get:function(){return this.tracks_[e]}}),-1===this.tracks_.indexOf(t)&&(this.tracks_.push(t),this.trigger({track:t,type:"addtrack"}))},n.prototype.removeTrack=function(t){for(var e=void 0,i=0,r=this.length;i<r;i++)if(this[i]===t){(e=this[i]).off&&e.off(),this.tracks_.splice(i,1);break}e&&this.trigger({track:e,type:"removetrack"})},n.prototype.getTrackById=function(t){for(var e=null,i=0,r=this.length;i<r;i++){var n=this[i];if(n.id===t){e=n;break}}return e},n}(Dt);for(var je in Be.prototype.allowedEvents_={change:"change",addtrack:"addtrack",removetrack:"removetrack"},Be.prototype.allowedEvents_)Be.prototype["on"+je]=null;var Fe=function(t,e){for(var i=0;i<t.length;i++)Object.keys(t[i]).length&&e.id!==t[i].id&&(t[i].enabled=!1)},He=function(r){function n(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[];y(this,n);for(var e=t.length-1;0<=e;e--)if(t[e].enabled){Fe(t,t[e]);break}var i=b(this,r.call(this,t));return i.changing_=!1,i}return _(n,r),n.prototype.addTrack=function(t){var e=this;t.enabled&&Fe(this,t),r.prototype.addTrack.call(this,t),t.addEventListener&&t.addEventListener("enabledchange",function(){e.changing_||(e.changing_=!0,Fe(e,t),e.changing_=!1,e.trigger("change"))})},n}(Be),Ve=function(t,e){for(var i=0;i<t.length;i++)Object.keys(t[i]).length&&e.id!==t[i].id&&(t[i].selected=!1)},qe=function(r){function n(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[];y(this,n);for(var e=t.length-1;0<=e;e--)if(t[e].selected){Ve(t,t[e]);break}var i=b(this,r.call(this,t));return i.changing_=!1,Object.defineProperty(i,"selectedIndex",{get:function(){for(var t=0;t<this.length;t++)if(this[t].selected)return t;return-1},set:function(){}}),i}return _(n,r),n.prototype.addTrack=function(t){var e=this;t.selected&&Ve(this,t),r.prototype.addTrack.call(this,t),t.addEventListener&&t.addEventListener("selectedchange",function(){e.changing_||(e.changing_=!0,Ve(e,t),e.changing_=!1,e.trigger("change"))})},n}(Be),We=function(e){function t(){return y(this,t),b(this,e.apply(this,arguments))}return _(t,e),t.prototype.addTrack=function(t){e.prototype.addTrack.call(this,t),t.addEventListener("modechange",Ot(this,function(){this.trigger("change")}));-1===["metadata","chapters"].indexOf(t.kind)&&t.addEventListener("modechange",Ot(this,function(){this.trigger("selectedlanguagechange")}))},t}(Be),ze=function(){function r(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[];y(this,r),this.trackElements_=[],Object.defineProperty(this,"length",{get:function(){return this.trackElements_.length}});for(var e=0,i=t.length;e<i;e++)this.addTrackElement_(t[e])}return r.prototype.addTrackElement_=function(t){var e=this.trackElements_.length;""+e in this||Object.defineProperty(this,e,{get:function(){return this.trackElements_[e]}}),-1===this.trackElements_.indexOf(t)&&this.trackElements_.push(t)},r.prototype.getTrackElementByTrack_=function(t){for(var e=void 0,i=0,r=this.trackElements_.length;i<r;i++)if(t===this.trackElements_[i].track){e=this.trackElements_[i];break}return e},r.prototype.removeTrackElement_=function(t){for(var e=0,i=this.trackElements_.length;e<i;e++)if(t===this.trackElements_[e]){this.trackElements_.splice(e,1);break}},r}(),Ge=function(){function e(t){y(this,e),e.prototype.setCues_.call(this,t),Object.defineProperty(this,"length",{get:function(){return this.length_}})}return e.prototype.setCues_=function(t){var e=this.length||0,i=0,r=t.length;this.cues_=t,this.length_=t.length;var n=function(t){""+t in this||Object.defineProperty(this,""+t,{get:function(){return this.cues_[t]}})};if(e<r)for(i=e;i<r;i++)n.call(this,i)},e.prototype.getCueById=function(t){for(var e=null,i=0,r=this.length;i<r;i++){var n=this[i];if(n.id===t){e=n;break}}return e},e}(),Xe={alternative:"alternative",captions:"captions",main:"main",sign:"sign",subtitles:"subtitles",commentary:"commentary"},Ye={alternative:"alternative",descriptions:"descriptions",main:"main","main-desc":"main-desc",translation:"translation",commentary:"commentary"},$e={subtitles:"subtitles",captions:"captions",descriptions:"descriptions",chapters:"chapters",metadata:"metadata"},Ke={disabled:"disabled",hidden:"hidden",showing:"showing"},Qe=function(s){function a(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};y(this,a);var e=b(this,s.call(this)),i={id:t.id||"vjs_track_"+ut(),kind:t.kind||"",label:t.label||"",language:t.language||""},r=function(t){Object.defineProperty(e,t,{get:function(){return i[t]},set:function(){}})};for(var n in i)r(n);return e}return _(a,s),a}(Dt),Je=function(t){var e=["protocol","hostname","port","pathname","search","hash","host"],i=p.createElement("a");i.href=t;var r=""===i.host&&"file:"!==i.protocol,n=void 0;r&&((n=p.createElement("div")).innerHTML='<a href="'+t+'"></a>',i=n.firstChild,n.setAttribute("style","display:none; position:absolute;"),p.body.appendChild(n));for(var s={},a=0;a<e.length;a++)s[e[a]]=i[e[a]];return"http:"===s.protocol&&(s.host=s.host.replace(/:80$/,"")),"https:"===s.protocol&&(s.host=s.host.replace(/:443$/,"")),s.protocol||(s.protocol=g.location.protocol),r&&p.body.removeChild(n),s},Ze=function(t){if(!t.match(/^https?:\/\//)){var e=p.createElement("div");e.innerHTML='<a href="'+t+'">x</a>',t=e.firstChild.href}return t},ti=function(t){if("string"==typeof t){var e=/^(\/?)([\s\S]*?)((?:\.{1,2}|[^\/]+?)(\.([^\.\/\?]+)))(?:[\/]*|[\?].*)$/i.exec(t);if(e)return e.pop().toLowerCase()}return""},ei=function(t){var e=g.location,i=Je(t);return(":"===i.protocol?e.protocol:i.protocol)+i.host!==e.protocol+e.host},ii=Object.freeze({parseUrl:Je,getAbsoluteURL:Ze,getFileExtension:ti,isCrossOrigin:ei}),ri=function(t){var e=ni.call(t);return"[object Function]"===e||"function"==typeof t&&"[object RegExp]"!==e||"undefined"!=typeof window&&(t===window.setTimeout||t===window.alert||t===window.confirm||t===window.prompt)},ni=Object.prototype.toString;var si=Object.freeze({default:ri,__moduleExports:ri}),ai=e(function(t,e){(e=t.exports=function(t){return t.replace(/^\s*|\s*$/g,"")}).left=function(t){return t.replace(/^\s*/,"")},e.right=function(t){return t.replace(/\s*$/,"")}}),oi=ai.left,ui=ai.right,li=Object.freeze({default:ai,__moduleExports:ai,left:oi,right:ui}),ci=si&&ri||si,hi=function(t,e,i){if(!ci(e))throw new TypeError("iterator must be a function");arguments.length<3&&(i=this);"[object Array]"===di.call(t)?function(t,e,i){for(var r=0,n=t.length;r<n;r++)pi.call(t,r)&&e.call(i,t[r],r,t)}(t,e,i):"string"==typeof t?function(t,e,i){for(var r=0,n=t.length;r<n;r++)e.call(i,t.charAt(r),r,t)}(t,e,i):function(t,e,i){for(var r in t)pi.call(t,r)&&e.call(i,t[r],r,t)}(t,e,i)},di=Object.prototype.toString,pi=Object.prototype.hasOwnProperty;var fi=Object.freeze({default:hi,__moduleExports:hi}),mi=li&&ai||li,gi=fi&&hi||fi,yi=function(t){if(!t)return{};var s={};return gi(mi(t).split("\n"),function(t){var e,i=t.indexOf(":"),r=mi(t.slice(0,i)).toLowerCase(),n=mi(t.slice(i+1));"undefined"==typeof s[r]?s[r]=n:(e=s[r],"[object Array]"===Object.prototype.toString.call(e)?s[r].push(n):s[r]=[s[r],n])}),s},vi=Object.freeze({default:yi,__moduleExports:yi}),_i=function(){for(var t={},e=0;e<arguments.length;e++){var i=arguments[e];for(var r in i)bi.call(i,r)&&(t[r]=i[r])}return t},bi=Object.prototype.hasOwnProperty;var Ti=Object.freeze({default:_i,__moduleExports:_i}),Si=vi&&yi||vi,ki=Ti&&_i||Ti,Ci=wi;function Ei(t,e,i){var r=t;return ci(e)?(i=e,"string"==typeof t&&(r={uri:t})):r=ki(e,{uri:t}),r.callback=i,r}function wi(t,e,i){return Ai(e=Ei(t,e,i))}function Ai(r){if("undefined"==typeof r.callback)throw new Error("callback argument missing");var n=!1,s=function(t,e,i){n||(n=!0,r.callback(t,e,i))};function e(t){return clearTimeout(u),t instanceof Error||(t=new Error(""+(t||"Unknown XMLHttpRequest Error"))),t.statusCode=0,s(t,m)}function t(){if(!a){var t;clearTimeout(u),t=r.useXDR&&void 0===o.status?200:1223===o.status?204:o.status;var e=m,i=null;return 0!==t?(e={body:function(){var t=void 0;if(t=o.response?o.response:o.responseText||function(t){if("document"===t.responseType)return t.responseXML;var e=t.responseXML&&"parsererror"===t.responseXML.documentElement.nodeName;return""!==t.responseType||e?null:t.responseXML}(o),f)try{t=JSON.parse(t)}catch(t){}return t}(),statusCode:t,method:c,headers:{},url:l,rawRequest:o},o.getAllResponseHeaders&&(e.headers=Si(o.getAllResponseHeaders()))):i=new Error("Internal XMLHttpRequest Error"),s(i,e,e.body)}}var i,a,o=r.xhr||null;o||(o=r.cors||r.useXDR?new wi.XDomainRequest:new wi.XMLHttpRequest);var u,l=o.url=r.uri||r.url,c=o.method=r.method||"GET",h=r.body||r.data,d=o.headers=r.headers||{},p=!!r.sync,f=!1,m={body:void 0,headers:{},statusCode:0,method:c,url:l,rawRequest:o};if("json"in r&&!1!==r.json&&(f=!0,d.accept||d.Accept||(d.Accept="application/json"),"GET"!==c&&"HEAD"!==c&&(d["content-type"]||d["Content-Type"]||(d["Content-Type"]="application/json"),h=JSON.stringify(!0===r.json?h:r.json))),o.onreadystatechange=function(){4===o.readyState&&setTimeout(t,0)},o.onload=t,o.onerror=e,o.onprogress=function(){},o.onabort=function(){a=!0},o.ontimeout=e,o.open(c,l,!p,r.username,r.password),p||(o.withCredentials=!!r.withCredentials),!p&&0<r.timeout&&(u=setTimeout(function(){if(!a){a=!0,o.abort("timeout");var t=new Error("XMLHttpRequest timeout");t.code="ETIMEDOUT",e(t)}},r.timeout)),o.setRequestHeader)for(i in d)d.hasOwnProperty(i)&&o.setRequestHeader(i,d[i]);else if(r.headers&&!function(t){for(var e in t)if(t.hasOwnProperty(e))return!1;return!0}(r.headers))throw new Error("Headers cannot be set on an XDomainRequest object");return"responseType"in r&&(o.responseType=r.responseType),"beforeSend"in r&&"function"==typeof r.beforeSend&&r.beforeSend(o),o.send(h||null),o}wi.XMLHttpRequest=g.XMLHttpRequest||function(){},wi.XDomainRequest="withCredentials"in new wi.XMLHttpRequest?wi.XMLHttpRequest:g.XDomainRequest,function(t,e){for(var i=0;i<t.length;i++)e(t[i])}(["get","put","post","patch","head","delete"],function(r){wi["delete"===r?"del":r]=function(t,e,i){return(e=Ei(t,e,i)).method=r.toUpperCase(),Ai(e)}});var Li=function(t,e){var i=new g.WebVTT.Parser(g,g.vttjs,g.WebVTT.StringDecoder()),r=[];i.oncue=function(t){e.addCue(t)},i.onparsingerror=function(t){r.push(t)},i.onflush=function(){e.trigger({type:"loadeddata",target:e})},i.parse(t),0<r.length&&(g.console&&g.console.groupCollapsed&&g.console.groupCollapsed("Text Track parsing errors for "+e.src),r.forEach(function(t){return f.error(t)}),g.console&&g.console.groupEnd&&g.console.groupEnd()),i.flush()},Pi=function(t,n){var e={uri:t},i=ei(t);i&&(e.cors=i),Ci(e,Ot(this,function(t,e,i){if(t)return f.error(t,e);if(n.loaded_=!0,"function"!=typeof g.WebVTT){if(n.tech_){var r=function(){return Li(i,n)};n.tech_.on("vttjsloaded",r),n.tech_.on("vttjserror",function(){f.error("vttjs failed to load, stopping trying to process "+n.src),n.tech_.off("vttjsloaded",r)})}}else Li(i,n)}))},Oi=function(l){function c(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};if(y(this,c),!t.tech)throw new Error("A tech was not provided.");var e=Gt(t,{kind:$e[t.kind]||"subtitles",language:t.language||t.srclang||""}),i=Ke[e.mode]||"disabled",r=e.default;"metadata"!==e.kind&&"chapters"!==e.kind||(i="hidden");var n=b(this,l.call(this,e));n.tech_=e.tech,n.cues_=[],n.activeCues_=[];var s=new Ge(n.cues_),a=new Ge(n.activeCues_),o=!1,u=Ot(n,function(){this.activeCues,o&&(this.trigger("cuechange"),o=!1)});return"disabled"!==i&&n.tech_.ready(function(){n.tech_.on("timeupdate",u)},!0),Object.defineProperties(n,{default:{get:function(){return r},set:function(){}},mode:{get:function(){return i},set:function(t){var e=this;Ke[t]&&("showing"===(i=t)&&this.tech_.ready(function(){e.tech_.on("timeupdate",u)},!0),this.trigger("modechange"))}},cues:{get:function(){return this.loaded_?s:null},set:function(){}},activeCues:{get:function(){if(!this.loaded_)return null;if(0===this.cues.length)return a;for(var t=this.tech_.currentTime(),e=[],i=0,r=this.cues.length;i<r;i++){var n=this.cues[i];n.startTime<=t&&n.endTime>=t?e.push(n):n.startTime===n.endTime&&n.startTime<=t&&n.startTime+.5>=t&&e.push(n)}if(o=!1,e.length!==this.activeCues_.length)o=!0;else for(var s=0;s<e.length;s++)-1===this.activeCues_.indexOf(e[s])&&(o=!0);return this.activeCues_=e,a.setCues_(this.activeCues_),a},set:function(){}}}),e.src?(n.src=e.src,Pi(e.src,n)):n.loaded_=!0,n}return _(c,l),c.prototype.addCue=function(t){var e=t;if(g.vttjs&&!(t instanceof g.vttjs.VTTCue)){for(var i in e=new g.vttjs.VTTCue(t.startTime,t.endTime,t.text),t)i in e||(e[i]=t[i]);e.id=t.id,e.originalCue_=t}for(var r=this.tech_.textTracks(),n=0;n<r.length;n++)r[n]!==this&&r[n].removeCue(e);this.cues_.push(e),this.cues.setCues_(this.cues_)},c.prototype.removeCue=function(t){for(var e=this.cues_.length;e--;){var i=this.cues_[e];if(i===t||i.originalCue_&&i.originalCue_===t){this.cues_.splice(e,1),this.cues.setCues_(this.cues_);break}}},c}(Qe);Oi.prototype.allowedEvents_={cuechange:"cuechange"};var xi=function(n){function s(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};y(this,s);var e=Gt(t,{kind:Ye[t.kind]||""}),i=b(this,n.call(this,e)),r=!1;return Object.defineProperty(i,"enabled",{get:function(){return r},set:function(t){"boolean"==typeof t&&t!==r&&(r=t,this.trigger("enabledchange"))}}),e.enabled&&(i.enabled=e.enabled),i.loaded_=!0,i}return _(s,n),s}(Qe),Ii=function(n){function s(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};y(this,s);var e=Gt(t,{kind:Xe[t.kind]||""}),i=b(this,n.call(this,e)),r=!1;return Object.defineProperty(i,"selected",{get:function(){return r},set:function(t){"boolean"==typeof t&&t!==r&&(r=t,this.trigger("selectedchange"))}}),e.selected&&(i.selected=e.selected),i}return _(s,n),s}(Qe),Di=0,Ri=2,Mi=function(n){function s(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};y(this,s);var e=b(this,n.call(this)),i=void 0,r=new Oi(t);return e.kind=r.kind,e.src=r.src,e.srclang=r.language,e.label=r.label,e.default=r.default,Object.defineProperties(e,{readyState:{get:function(){return i}},track:{get:function(){return r}}}),i=Di,r.addEventListener("loadeddata",function(){i=Ri,e.trigger({type:"load",target:e})}),e}return _(s,n),s}(Dt);Mi.prototype.allowedEvents_={load:"load"},Mi.NONE=Di,Mi.LOADING=1,Mi.LOADED=Ri,Mi.ERROR=3;var Ui={audio:{ListClass:He,TrackClass:xi,capitalName:"Audio"},video:{ListClass:qe,TrackClass:Ii,capitalName:"Video"},text:{ListClass:We,TrackClass:Oi,capitalName:"Text"}};Object.keys(Ui).forEach(function(t){Ui[t].getterName=t+"Tracks",Ui[t].privateName=t+"Tracks_"});var Ni={remoteText:{ListClass:We,TrackClass:Oi,capitalName:"RemoteText",getterName:"remoteTextTracks",privateName:"remoteTextTracks_"},remoteTextEl:{ListClass:ze,TrackClass:Mi,capitalName:"RemoteTextTrackEls",getterName:"remoteTextTrackEls",privateName:"remoteTextTrackEls_"}},Bi=Gt(Ui,Ni);Ni.names=Object.keys(Ni),Ui.names=Object.keys(Ui),Bi.names=[].concat(Ni.names).concat(Ui.names);var ji=Object.create||function(){function e(){}return function(t){if(1!==arguments.length)throw new Error("Object.create shim only accepts one parameter.");return e.prototype=t,new e}}();function Fi(t,e){this.name="ParsingError",this.code=t.code,this.message=e||t.message}function Hi(t){function e(t,e,i,r){return 3600*(0|t)+60*(0|e)+(0|i)+(0|r)/1e3}var i=t.match(/^(\d+):(\d{2})(:\d{2})?\.(\d{3})/);return i?i[3]?e(i[1],i[2],i[3].replace(":",""),i[4]):59<i[1]?e(i[1],i[2],0,i[4]):e(0,i[1],i[2],i[4]):null}function Vi(){this.values=ji(null)}function qi(t,e,i,r){var n=r?t.split(r):[t];for(var s in n)if("string"==typeof n[s]){var a=n[s].split(i);if(2===a.length)e(a[0],a[1])}}function Wi(e,t,s){var i,r,a,n=e;function o(){var t=Hi(e);if(null===t)throw new Fi(Fi.Errors.BadTimeStamp,"Malformed timestamp: "+n);return e=e.replace(/^[^\sa-zA-Z-]+/,""),t}function u(){e=e.replace(/^\s+/,"")}if(u(),t.startTime=o(),u(),"--\x3e"!==e.substr(0,3))throw new Fi(Fi.Errors.BadTimeStamp,"Malformed time stamp (time stamps must be separated by '--\x3e'): "+n);e=e.substr(3),u(),t.endTime=o(),u(),i=e,r=t,a=new Vi,qi(i,function(t,e){switch(t){case"region":for(var i=s.length-1;0<=i;i--)if(s[i].id===e){a.set(t,s[i].region);break}break;case"vertical":a.alt(t,e,["rl","lr"]);break;case"line":var r=e.split(","),n=r[0];a.integer(t,n),a.percent(t,n)&&a.set("snapToLines",!1),a.alt(t,n,["auto"]),2===r.length&&a.alt("lineAlign",r[1],["start","middle","end"]);break;case"position":r=e.split(","),a.percent(t,r[0]),2===r.length&&a.alt("positionAlign",r[1],["start","middle","end"]);break;case"size":a.percent(t,e);break;case"align":a.alt(t,e,["start","middle","end","left","right"])}},/:/,/\s/),r.region=a.get("region",null),r.vertical=a.get("vertical",""),r.line=a.get("line","auto"),r.lineAlign=a.get("lineAlign","start"),r.snapToLines=a.get("snapToLines",!0),r.size=a.get("size",100),r.align=a.get("align","middle"),r.position=a.get("position",{start:0,left:0,middle:50,end:100,right:100},r.align),r.positionAlign=a.get("positionAlign",{start:"start",left:"start",middle:"middle",end:"end",right:"end"},r.align)}((Fi.prototype=ji(Error.prototype)).constructor=Fi).Errors={BadSignature:{code:0,message:"Malformed WebVTT signature."},BadTimeStamp:{code:1,message:"Malformed time stamp."}},Vi.prototype={set:function(t,e){this.get(t)||""===e||(this.values[t]=e)},get:function(t,e,i){return i?this.has(t)?this.values[t]:e[i]:this.has(t)?this.values[t]:e},has:function(t){return t in this.values},alt:function(t,e,i){for(var r=0;r<i.length;++r)if(e===i[r]){this.set(t,e);break}},integer:function(t,e){/^-?\d+$/.test(e)&&this.set(t,parseInt(e,10))},percent:function(t,e){return!!(e.match(/^([\d]{1,3})(\.[\d]*)?%$/)&&0<=(e=parseFloat(e))&&e<=100)&&(this.set(t,e),!0)}};var zi={"&amp;":"&","&lt;":"<","&gt;":">","&lrm;":"‎","&rlm;":"‏","&nbsp;":" "},Gi={c:"span",i:"i",b:"b",u:"u",ruby:"ruby",rt:"rt",v:"span",lang:"span"},Xi={v:"title",lang:"lang"},Yi={rt:"ruby"};function $i(s,i){function t(){if(!i)return null;var t,e=i.match(/^([^<]*)(<[^>]*>?)?/);return t=e[1]?e[1]:e[2],i=i.substr(t.length),t}function e(t){return zi[t]}function r(t){for(;f=t.match(/&(amp|lt|gt|lrm|rlm|nbsp);/);)t=t.replace(f[0],e);return t}function n(t,e){var i=Gi[t];if(!i)return null;var r=s.document.createElement(i);r.localName=i;var n=Xi[t];return n&&e&&(r[n]=e.trim()),r}for(var a,o,u,l=s.document.createElement("div"),c=l,h=[];null!==(a=t());)if("<"!==a[0])c.appendChild(s.document.createTextNode(r(a)));else{if("/"===a[1]){h.length&&h[h.length-1]===a.substr(2).replace(">","")&&(h.pop(),c=c.parentNode);continue}var d,p=Hi(a.substr(1,a.length-2));if(p){d=s.document.createProcessingInstruction("timestamp",p),c.appendChild(d);continue}var f=a.match(/^<([^.\s/0-9>]+)(\.[^\s\\>]+)?([^>\\]+)?(\\?)>?$/);if(!f)continue;if(!(d=n(f[1],f[3])))continue;if(o=c,Yi[(u=d).localName]&&Yi[u.localName]!==o.localName)continue;f[2]&&(d.className=f[2].substr(1).replace("."," ")),h.push(f[1]),c.appendChild(d),c=d}return l}var Ki=[[1470,1470],[1472,1472],[1475,1475],[1478,1478],[1488,1514],[1520,1524],[1544,1544],[1547,1547],[1549,1549],[1563,1563],[1566,1610],[1645,1647],[1649,1749],[1765,1766],[1774,1775],[1786,1805],[1807,1808],[1810,1839],[1869,1957],[1969,1969],[1984,2026],[2036,2037],[2042,2042],[2048,2069],[2074,2074],[2084,2084],[2088,2088],[2096,2110],[2112,2136],[2142,2142],[2208,2208],[2210,2220],[8207,8207],[64285,64285],[64287,64296],[64298,64310],[64312,64316],[64318,64318],[64320,64321],[64323,64324],[64326,64449],[64467,64829],[64848,64911],[64914,64967],[65008,65020],[65136,65140],[65142,65276],[67584,67589],[67592,67592],[67594,67637],[67639,67640],[67644,67644],[67647,67669],[67671,67679],[67840,67867],[67872,67897],[67903,67903],[67968,68023],[68030,68031],[68096,68096],[68112,68115],[68117,68119],[68121,68147],[68160,68167],[68176,68184],[68192,68223],[68352,68405],[68416,68437],[68440,68466],[68472,68479],[68608,68680],[126464,126467],[126469,126495],[126497,126498],[126500,126500],[126503,126503],[126505,126514],[126516,126519],[126521,126521],[126523,126523],[126530,126530],[126535,126535],[126537,126537],[126539,126539],[126541,126543],[126545,126546],[126548,126548],[126551,126551],[126553,126553],[126555,126555],[126557,126557],[126559,126559],[126561,126562],[126564,126564],[126567,126570],[126572,126578],[126580,126583],[126585,126588],[126590,126590],[126592,126601],[126603,126619],[126625,126627],[126629,126633],[126635,126651],[1114109,1114109]];function Qi(t){for(var e=0;e<Ki.length;e++){var i=Ki[e];if(t>=i[0]&&t<=i[1])return!0}return!1}function Ji(){}function Zi(t,e,i){Ji.call(this),this.cue=e,this.cueDiv=$i(t,e.text);var r={color:"rgba(255, 255, 255, 1)",backgroundColor:"rgba(0, 0, 0, 0.8)",position:"relative",left:0,right:0,top:0,bottom:0,display:"inline",writingMode:""===e.vertical?"horizontal-tb":"lr"===e.vertical?"vertical-lr":"vertical-rl",unicodeBidi:"plaintext"};this.applyStyles(r,this.cueDiv),this.div=t.document.createElement("div"),r={direction:function(t){var e=[],i="";if(!t||!t.childNodes)return"ltr";function n(t,e){for(var i=e.childNodes.length-1;0<=i;i--)t.push(e.childNodes[i])}function s(t){if(!t||!t.length)return null;var e=t.pop(),i=e.textContent||e.innerText;if(i){var r=i.match(/^.*(\n|\r)/);return r?r[t.length=0]:i}return"ruby"===e.tagName?s(t):e.childNodes?(n(t,e),s(t)):void 0}for(n(e,t);i=s(e);)for(var r=0;r<i.length;r++)if(Qi(i.charCodeAt(r)))return"rtl";return"ltr"}(this.cueDiv),writingMode:""===e.vertical?"horizontal-tb":"lr"===e.vertical?"vertical-lr":"vertical-rl",unicodeBidi:"plaintext",textAlign:"middle"===e.align?"center":e.align,font:i.font,whiteSpace:"pre-line",position:"absolute"},this.applyStyles(r),this.div.appendChild(this.cueDiv);var n=0;switch(e.positionAlign){case"start":n=e.position;break;case"middle":n=e.position-e.size/2;break;case"end":n=e.position-e.size}""===e.vertical?this.applyStyles({left:this.formatStyle(n,"%"),width:this.formatStyle(e.size,"%")}):this.applyStyles({top:this.formatStyle(n,"%"),height:this.formatStyle(e.size,"%")}),this.move=function(t){this.applyStyles({top:this.formatStyle(t.top,"px"),bottom:this.formatStyle(t.bottom,"px"),left:this.formatStyle(t.left,"px"),right:this.formatStyle(t.right,"px"),height:this.formatStyle(t.height,"px"),width:this.formatStyle(t.width,"px")})}}function tr(t){var e,i,r,n;if(t.div){i=t.div.offsetHeight,r=t.div.offsetWidth,n=t.div.offsetTop;var s=(s=t.div.childNodes)&&(s=s[0])&&s.getClientRects&&s.getClientRects();t=t.div.getBoundingClientRect(),e=s?Math.max(s[0]&&s[0].height||0,t.height/s.length):0}this.left=t.left,this.right=t.right,this.top=t.top||n,this.height=t.height||i,this.bottom=t.bottom||n+(t.height||i),this.width=t.width||r,this.lineHeight=void 0!==e?e:t.lineHeight}function er(t,e,o,u){var i=new tr(e),r=e.cue,n=function(t){if("number"==typeof t.line&&(t.snapToLines||0<=t.line&&t.line<=100))return t.line;if(!t.track||!t.track.textTrackList||!t.track.textTrackList.mediaElement)return-1;for(var e=t.track,i=e.textTrackList,r=0,n=0;n<i.length&&i[n]!==e;n++)"showing"===i[n].mode&&r++;return-1*++r}(r),s=[];if(r.snapToLines){var a;switch(r.vertical){case"":s=["+y","-y"],a="height";break;case"rl":s=["+x","-x"],a="width";break;case"lr":s=["-x","+x"],a="width"}var l=i.lineHeight,c=l*Math.round(n),h=o[a]+l,d=s[0];Math.abs(c)>h&&(c=c<0?-1:1,c*=Math.ceil(h/l)*l),n<0&&(c+=""===r.vertical?o.height:o.width,s=s.reverse()),i.move(d,c)}else{var p=i.lineHeight/o.height*100;switch(r.lineAlign){case"middle":n-=p/2;break;case"end":n-=p}switch(r.vertical){case"":e.applyStyles({top:e.formatStyle(n,"%")});break;case"rl":e.applyStyles({left:e.formatStyle(n,"%")});break;case"lr":e.applyStyles({right:e.formatStyle(n,"%")})}s=["+y","-x","+x","-y"],i=new tr(e)}var f=function(t,e){for(var i,r=new tr(t),n=1,s=0;s<e.length;s++){for(;t.overlapsOppositeAxis(o,e[s])||t.within(o)&&t.overlapsAny(u);)t.move(e[s]);if(t.within(o))return t;var a=t.intersectPercentage(o);a<n&&(i=new tr(t),n=a),t=new tr(r)}return i||r}(i,s);e.move(f.toCSSCompatValues(o))}function ir(){}Ji.prototype.applyStyles=function(t,e){for(var i in e=e||this.div,t)t.hasOwnProperty(i)&&(e.style[i]=t[i])},Ji.prototype.formatStyle=function(t,e){return 0===t?0:t+e},(Zi.prototype=ji(Ji.prototype)).constructor=Zi,tr.prototype.move=function(t,e){switch(e=void 0!==e?e:this.lineHeight,t){case"+x":this.left+=e,this.right+=e;break;case"-x":this.left-=e,this.right-=e;break;case"+y":this.top+=e,this.bottom+=e;break;case"-y":this.top-=e,this.bottom-=e}},tr.prototype.overlaps=function(t){return this.left<t.right&&this.right>t.left&&this.top<t.bottom&&this.bottom>t.top},tr.prototype.overlapsAny=function(t){for(var e=0;e<t.length;e++)if(this.overlaps(t[e]))return!0;return!1},tr.prototype.within=function(t){return this.top>=t.top&&this.bottom<=t.bottom&&this.left>=t.left&&this.right<=t.right},tr.prototype.overlapsOppositeAxis=function(t,e){switch(e){case"+x":return this.left<t.left;case"-x":return this.right>t.right;case"+y":return this.top<t.top;case"-y":return this.bottom>t.bottom}},tr.prototype.intersectPercentage=function(t){return Math.max(0,Math.min(this.right,t.right)-Math.max(this.left,t.left))*Math.max(0,Math.min(this.bottom,t.bottom)-Math.max(this.top,t.top))/(this.height*this.width)},tr.prototype.toCSSCompatValues=function(t){return{top:this.top-t.top,bottom:t.bottom-this.bottom,left:this.left-t.left,right:t.right-this.right,height:this.height,width:this.width}},tr.getSimpleBoxPosition=function(t){var e=t.div?t.div.offsetHeight:t.tagName?t.offsetHeight:0,i=t.div?t.div.offsetWidth:t.tagName?t.offsetWidth:0,r=t.div?t.div.offsetTop:t.tagName?t.offsetTop:0;return{left:(t=t.div?t.div.getBoundingClientRect():t.tagName?t.getBoundingClientRect():t).left,right:t.right,top:t.top||r,height:t.height||e,bottom:t.bottom||r+(t.height||e),width:t.width||i}},ir.StringDecoder=function(){return{decode:function(t){if(!t)return"";if("string"!=typeof t)throw new Error("Error - expected string data.");return decodeURIComponent(encodeURIComponent(t))}}},ir.convertCueToDOMTree=function(t,e){return t&&e?$i(t,e):null};ir.processCues=function(r,n,t){if(!r||!n||!t)return null;for(;t.firstChild;)t.removeChild(t.firstChild);var s=r.document.createElement("div");if(s.style.position="absolute",s.style.left="0",s.style.right="0",s.style.top="0",s.style.bottom="0",s.style.margin="1.5%",t.appendChild(s),function(t){for(var e=0;e<t.length;e++)if(t[e].hasBeenReset||!t[e].displayState)return!0;return!1}(n)){var a=[],o=tr.getSimpleBoxPosition(s),u={font:Math.round(.05*o.height*100)/100+"px sans-serif"};!function(){for(var t,e,i=0;i<n.length;i++)e=n[i],t=new Zi(r,e,u),s.appendChild(t.div),er(0,t,o,a),e.displayState=t.div,a.push(tr.getSimpleBoxPosition(t))}()}else for(var e=0;e<n.length;e++)s.appendChild(n[e].displayState)},(ir.Parser=function(t,e,i){i||(i=e,e={}),e||(e={}),this.window=t,this.vttjs=e,this.state="INITIAL",this.buffer="",this.decoder=i||new TextDecoder("utf8"),this.regionList=[]}).prototype={reportOrThrowError:function(t){if(!(t instanceof Fi))throw t;this.onparsingerror&&this.onparsingerror(t)},parse:function(t){var s=this;function e(){for(var t=s.buffer,e=0;e<t.length&&"\r"!==t[e]&&"\n"!==t[e];)++e;var i=t.substr(0,e);return"\r"===t[e]&&++e,"\n"===t[e]&&++e,s.buffer=t.substr(e),i}function i(t){t.match(/X-TIMESTAMP-MAP/)?qi(t,function(t,e){switch(t){case"X-TIMESTAMP-MAP":i=e,r=new Vi,qi(i,function(t,e){switch(t){case"MPEGT":r.integer(t+"S",e);break;case"LOCA":r.set(t+"L",Hi(e))}},/[^\d]:/,/,/),s.ontimestampmap&&s.ontimestampmap({MPEGTS:r.get("MPEGTS"),LOCAL:r.get("LOCAL")})}var i,r},/=/):qi(t,function(t,e){switch(t){case"Region":!function(t){var n=new Vi;if(qi(t,function(t,e){switch(t){case"id":n.set(t,e);break;case"width":n.percent(t,e);break;case"lines":n.integer(t,e);break;case"regionanchor":case"viewportanchor":var i=e.split(",");if(2!==i.length)break;var r=new Vi;if(r.percent("x",i[0]),r.percent("y",i[1]),!r.has("x")||!r.has("y"))break;n.set(t+"X",r.get("x")),n.set(t+"Y",r.get("y"));break;case"scroll":n.alt(t,e,["up"])}},/=/,/\s/),n.has("id")){var e=new(s.vttjs.VTTRegion||s.window.VTTRegion);e.width=n.get("width",100),e.lines=n.get("lines",3),e.regionAnchorX=n.get("regionanchorX",0),e.regionAnchorY=n.get("regionanchorY",100),e.viewportAnchorX=n.get("viewportanchorX",0),e.viewportAnchorY=n.get("viewportanchorY",100),e.scroll=n.get("scroll",""),s.onregion&&s.onregion(e),s.regionList.push({id:n.get("id"),region:e})}}(e)}},/:/)}t&&(s.buffer+=s.decoder.decode(t,{stream:!0}));try{var r;if("INITIAL"===s.state){if(!/\r\n|\n/.test(s.buffer))return this;var n=(r=e()).match(/^WEBVTT([ \t].*)?$/);if(!n||!n[0])throw new Fi(Fi.Errors.BadSignature);s.state="HEADER"}for(var a=!1;s.buffer;){if(!/\r\n|\n/.test(s.buffer))return this;switch(a?a=!1:r=e(),s.state){case"HEADER":/:/.test(r)?i(r):r||(s.state="ID");continue;case"NOTE":r||(s.state="ID");continue;case"ID":if(/^NOTE($|[ \t])/.test(r)){s.state="NOTE";break}if(!r)continue;if(s.cue=new(s.vttjs.VTTCue||s.window.VTTCue)(0,0,""),s.state="CUE",-1===r.indexOf("--\x3e")){s.cue.id=r;continue}case"CUE":try{Wi(r,s.cue,s.regionList)}catch(t){s.reportOrThrowError(t),s.cue=null,s.state="BADCUE";continue}s.state="CUETEXT";continue;case"CUETEXT":var o=-1!==r.indexOf("--\x3e");if(!r||o&&(a=!0)){s.oncue&&s.oncue(s.cue),s.cue=null,s.state="ID";continue}s.cue.text&&(s.cue.text+="\n"),s.cue.text+=r;continue;case"BADCUE":r||(s.state="ID");continue}}}catch(t){s.reportOrThrowError(t),"CUETEXT"===s.state&&s.cue&&s.oncue&&s.oncue(s.cue),s.cue=null,s.state="INITIAL"===s.state?"BADWEBVTT":"BADCUE"}return this},flush:function(){var e=this;try{if(e.buffer+=e.decoder.decode(),(e.cue||"HEADER"===e.state)&&(e.buffer+="\n\n",e.parse()),"INITIAL"===e.state)throw new Fi(Fi.Errors.BadSignature)}catch(t){e.reportOrThrowError(t)}return e.onflush&&e.onflush(),this}};var rr=ir,nr=Object.freeze({default:rr,__moduleExports:rr}),sr="auto",ar={"":1,lr:1,rl:1},or={start:1,middle:1,end:1,left:1,right:1};function ur(t){return"string"==typeof t&&(!!or[t.toLowerCase()]&&t.toLowerCase())}function lr(t,e,i){this.hasBeenReset=!1;var r="",n=!1,s=t,a=e,o=i,u=null,l="",c=!0,h="auto",d="start",p=50,f="middle",m=50,g="middle";Object.defineProperties(this,{id:{enumerable:!0,get:function(){return r},set:function(t){r=""+t}},pauseOnExit:{enumerable:!0,get:function(){return n},set:function(t){n=!!t}},startTime:{enumerable:!0,get:function(){return s},set:function(t){if("number"!=typeof t)throw new TypeError("Start time must be set to a number.");s=t,this.hasBeenReset=!0}},endTime:{enumerable:!0,get:function(){return a},set:function(t){if("number"!=typeof t)throw new TypeError("End time must be set to a number.");a=t,this.hasBeenReset=!0}},text:{enumerable:!0,get:function(){return o},set:function(t){o=""+t,this.hasBeenReset=!0}},region:{enumerable:!0,get:function(){return u},set:function(t){u=t,this.hasBeenReset=!0}},vertical:{enumerable:!0,get:function(){return l},set:function(t){var e,i="string"==typeof(e=t)&&!!ar[e.toLowerCase()]&&e.toLowerCase();if(!1===i)throw new SyntaxError("An invalid or illegal string was specified.");l=i,this.hasBeenReset=!0}},snapToLines:{enumerable:!0,get:function(){return c},set:function(t){c=!!t,this.hasBeenReset=!0}},line:{enumerable:!0,get:function(){return h},set:function(t){if("number"!=typeof t&&t!==sr)throw new SyntaxError("An invalid number or illegal string was specified.");h=t,this.hasBeenReset=!0}},lineAlign:{enumerable:!0,get:function(){return d},set:function(t){var e=ur(t);if(!e)throw new SyntaxError("An invalid or illegal string was specified.");d=e,this.hasBeenReset=!0}},position:{enumerable:!0,get:function(){return p},set:function(t){if(t<0||100<t)throw new Error("Position must be between 0 and 100.");p=t,this.hasBeenReset=!0}},positionAlign:{enumerable:!0,get:function(){return f},set:function(t){var e=ur(t);if(!e)throw new SyntaxError("An invalid or illegal string was specified.");f=e,this.hasBeenReset=!0}},size:{enumerable:!0,get:function(){return m},set:function(t){if(t<0||100<t)throw new Error("Size must be between 0 and 100.");m=t,this.hasBeenReset=!0}},align:{enumerable:!0,get:function(){return g},set:function(t){var e=ur(t);if(!e)throw new SyntaxError("An invalid or illegal string was specified.");g=e,this.hasBeenReset=!0}}}),this.displayState=void 0}lr.prototype.getCueAsHTML=function(){return WebVTT.convertCueToDOMTree(window,this.text)};var cr=lr,hr=Object.freeze({default:cr,__moduleExports:cr}),dr={"":!0,up:!0};function pr(t){return"number"==typeof t&&0<=t&&t<=100}var fr=function(){var e=100,i=3,r=0,n=100,s=0,a=100,o="";Object.defineProperties(this,{width:{enumerable:!0,get:function(){return e},set:function(t){if(!pr(t))throw new Error("Width must be between 0 and 100.");e=t}},lines:{enumerable:!0,get:function(){return i},set:function(t){if("number"!=typeof t)throw new TypeError("Lines must be set to a number.");i=t}},regionAnchorY:{enumerable:!0,get:function(){return n},set:function(t){if(!pr(t))throw new Error("RegionAnchorX must be between 0 and 100.");n=t}},regionAnchorX:{enumerable:!0,get:function(){return r},set:function(t){if(!pr(t))throw new Error("RegionAnchorY must be between 0 and 100.");r=t}},viewportAnchorY:{enumerable:!0,get:function(){return a},set:function(t){if(!pr(t))throw new Error("ViewportAnchorY must be between 0 and 100.");a=t}},viewportAnchorX:{enumerable:!0,get:function(){return s},set:function(t){if(!pr(t))throw new Error("ViewportAnchorX must be between 0 and 100.");s=t}},scroll:{enumerable:!0,get:function(){return o},set:function(t){var e,i="string"==typeof(e=t)&&!!dr[e.toLowerCase()]&&e.toLowerCase();if(!1===i)throw new SyntaxError("An invalid or illegal string was specified.");o=i}}})},mr=Object.freeze({default:fr,__moduleExports:fr}),gr=nr&&rr||nr,yr=hr&&cr||hr,vr=mr&&fr||mr,_r=e(function(t){var e=t.exports={WebVTT:gr,VTTCue:yr,VTTRegion:vr};g.vttjs=e,g.WebVTT=e.WebVTT;var i=e.VTTCue,r=e.VTTRegion,n=g.VTTCue,s=g.VTTRegion;e.shim=function(){g.VTTCue=i,g.VTTRegion=r},e.restore=function(){g.VTTCue=n,g.VTTRegion=s},g.VTTCue||e.shim()});_r.WebVTT,_r.VTTCue,_r.VTTRegion;var br=function(e){function n(){var i=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:function(){};y(this,n),i.reportTouchActivity=!1;var r=b(this,e.call(this,null,i,t));return r.hasStarted_=!1,r.on("playing",function(){this.hasStarted_=!0}),r.on("loadstart",function(){this.hasStarted_=!1}),Bi.names.forEach(function(t){var e=Bi[t];i&&i[e.getterName]&&(r[e.privateName]=i[e.getterName])}),r.featuresProgressEvents||r.manualProgressOn(),r.featuresTimeupdateEvents||r.manualTimeUpdatesOn(),["Text","Audio","Video"].forEach(function(t){!1===i["native"+t+"Tracks"]&&(r["featuresNative"+t+"Tracks"]=!1)}),!1===i.nativeCaptions||!1===i.nativeTextTracks?r.featuresNativeTextTracks=!1:!0!==i.nativeCaptions&&!0!==i.nativeTextTracks||(r.featuresNativeTextTracks=!0),r.featuresNativeTextTracks||r.emulateTextTracks(),r.autoRemoteTextTracks_=new Bi.text.ListClass,r.initTrackListeners(),i.nativeControlsForTouch||r.emitTapEvents(),r.constructor&&(r.name_=r.constructor.name||"Unknown Tech"),r}return _(n,e),n.prototype.triggerSourceset=function(t){var e=this;this.isReady_||this.one("ready",function(){return e.setTimeout(function(){return e.triggerSourceset(t)},1)}),this.trigger({src:t,type:"sourceset"})},n.prototype.manualProgressOn=function(){this.on("durationchange",this.onDurationChange),this.manualProgress=!0,this.one("ready",this.trackProgress)},n.prototype.manualProgressOff=function(){this.manualProgress=!1,this.stopTrackingProgress(),this.off("durationchange",this.onDurationChange)},n.prototype.trackProgress=function(t){this.stopTrackingProgress(),this.progressInterval=this.setInterval(Ot(this,function(){var t=this.bufferedPercent();this.bufferedPercent_!==t&&this.trigger("progress"),1===(this.bufferedPercent_=t)&&this.stopTrackingProgress()}),500)},n.prototype.onDurationChange=function(t){this.duration_=this.duration()},n.prototype.buffered=function(){return be(0,0)},n.prototype.bufferedPercent=function(){return Te(this.buffered(),this.duration_)},n.prototype.stopTrackingProgress=function(){this.clearInterval(this.progressInterval)},n.prototype.manualTimeUpdatesOn=function(){this.manualTimeUpdates=!0,this.on("play",this.trackCurrentTime),this.on("pause",this.stopTrackingCurrentTime)},n.prototype.manualTimeUpdatesOff=function(){this.manualTimeUpdates=!1,this.stopTrackingCurrentTime(),this.off("play",this.trackCurrentTime),this.off("pause",this.stopTrackingCurrentTime)},n.prototype.trackCurrentTime=function(){this.currentTimeInterval&&this.stopTrackingCurrentTime(),this.currentTimeInterval=this.setInterval(function(){this.trigger({type:"timeupdate",target:this,manuallyTriggered:!0})},250)},n.prototype.stopTrackingCurrentTime=function(){this.clearInterval(this.currentTimeInterval),this.trigger({type:"timeupdate",target:this,manuallyTriggered:!0})},n.prototype.dispose=function(){this.clearTracks(Ui.names),this.manualProgress&&this.manualProgressOff(),this.manualTimeUpdates&&this.manualTimeUpdatesOff(),e.prototype.dispose.call(this)},n.prototype.clearTracks=function(t){var n=this;(t=[].concat(t)).forEach(function(t){for(var e=n[t+"Tracks"]()||[],i=e.length;i--;){var r=e[i];"text"===t&&n.removeRemoteTextTrack(r),e.removeTrack(r)}})},n.prototype.cleanupAutoTextTracks=function(){for(var t=this.autoRemoteTextTracks_||[],e=t.length;e--;){var i=t[e];this.removeRemoteTextTrack(i)}},n.prototype.reset=function(){},n.prototype.error=function(t){return void 0!==t&&(this.error_=new Le(t),this.trigger("error")),this.error_},n.prototype.played=function(){return this.hasStarted_?be(0,0):be()},n.prototype.setCurrentTime=function(){this.manualTimeUpdates&&this.trigger({type:"timeupdate",target:this,manuallyTriggered:!0})},n.prototype.initTrackListeners=function(){var n=this;Ui.names.forEach(function(t){var e=Ui[t],i=function(){n.trigger(t+"trackchange")},r=n[e.getterName]();r.addEventListener("removetrack",i),r.addEventListener("addtrack",i),n.on("dispose",function(){r.removeEventListener("removetrack",i),r.removeEventListener("addtrack",i)})})},n.prototype.addWebVttScript_=function(){var t=this;if(!g.WebVTT)if(p.body.contains(this.el())){if(!this.options_["vtt.js"]&&w(_r)&&0<Object.keys(_r).length)return void this.trigger("vttjsloaded");var e=p.createElement("script");e.src=this.options_["vtt.js"]||"https://vjs.zencdn.net/vttjs/0.14.1/vtt.min.js",e.onload=function(){t.trigger("vttjsloaded")},e.onerror=function(){t.trigger("vttjserror")},this.on("dispose",function(){e.onload=null,e.onerror=null}),g.WebVTT=!0,this.el().parentNode.appendChild(e)}else this.ready(this.addWebVttScript_)},n.prototype.emulateTextTracks=function(){var t=this,i=this.textTracks(),e=this.remoteTextTracks(),r=function(t){return i.addTrack(t.track)},n=function(t){return i.removeTrack(t.track)};e.on("addtrack",r),e.on("removetrack",n),this.addWebVttScript_();var s=function(){return t.trigger("texttrackchange")},a=function(){s();for(var t=0;t<i.length;t++){var e=i[t];e.removeEventListener("cuechange",s),"showing"===e.mode&&e.addEventListener("cuechange",s)}};a(),i.addEventListener("change",a),i.addEventListener("addtrack",a),i.addEventListener("removetrack",a),this.on("dispose",function(){e.off("addtrack",r),e.off("removetrack",n),i.removeEventListener("change",a),i.removeEventListener("addtrack",a),i.removeEventListener("removetrack",a);for(var t=0;t<i.length;t++){i[t].removeEventListener("cuechange",s)}})},n.prototype.addTextTrack=function(t,e,i){if(!t)throw new Error("TextTrack kind is required but was not provided");return function(t,e,i,r){var n=4<arguments.length&&void 0!==arguments[4]?arguments[4]:{},s=t.textTracks();n.kind=e,i&&(n.label=i),r&&(n.language=r),n.tech=t;var a=new Bi.text.TrackClass(n);return s.addTrack(a),a}(this,t,e,i)},n.prototype.createRemoteTextTrack=function(t){var e=Gt(t,{tech:this});return new Ni.remoteTextEl.TrackClass(e)},n.prototype.addRemoteTextTrack=function(){var t=this,e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},i=arguments[1],r=this.createRemoteTextTrack(e);return!0!==i&&!1!==i&&(f.warn('Calling addRemoteTextTrack without explicitly setting the "manualCleanup" parameter to `true` is deprecated and default to `false` in future version of video.js'),i=!0),this.remoteTextTrackEls().addTrackElement_(r),this.remoteTextTracks().addTrack(r.track),!0!==i&&this.ready(function(){return t.autoRemoteTextTracks_.addTrack(r.track)}),r},n.prototype.removeRemoteTextTrack=function(t){var e=this.remoteTextTrackEls().getTrackElementByTrack_(t);this.remoteTextTrackEls().removeTrackElement_(e),this.remoteTextTracks().removeTrack(t),this.autoRemoteTextTracks_.removeTrack(t)},n.prototype.getVideoPlaybackQuality=function(){return{}},n.prototype.setPoster=function(){},n.prototype.playsinline=function(){},n.prototype.setPlaysinline=function(){},n.prototype.overrideNativeAudioTracks=function(){},n.prototype.overrideNativeVideoTracks=function(){},n.prototype.canPlayType=function(){return""},n.canPlayType=function(){return""},n.canPlaySource=function(t,e){return n.canPlayType(t.type)},n.isTech=function(t){return t.prototype instanceof n||t instanceof n||t===n},n.registerTech=function(t,e){if(n.techs_||(n.techs_={}),!n.isTech(e))throw new Error("Tech "+t+" must be a Tech");if(!n.canPlayType)throw new Error("Techs must have a static canPlayType method on them");if(!n.canPlaySource)throw new Error("Techs must have a static canPlaySource method on them");return t=zt(t),n.techs_[t]=e,"Tech"!==t&&n.defaultTechOrder_.push(t),e},n.getTech=function(t){if(t)return t=zt(t),n.techs_&&n.techs_[t]?n.techs_[t]:g&&g.videojs&&g.videojs[t]?(f.warn("The "+t+" tech was added to the videojs object when it should be registered using videojs.registerTech(name, tech)"),g.videojs[t]):void 0},n}(Xt);Bi.names.forEach(function(t){var e=Bi[t];br.prototype[e.getterName]=function(){return this[e.privateName]=this[e.privateName]||new e.ListClass,this[e.privateName]}}),br.prototype.featuresVolumeControl=!0,br.prototype.featuresFullscreenResize=!1,br.prototype.featuresPlaybackRate=!1,br.prototype.featuresProgressEvents=!1,br.prototype.featuresSourceset=!1,br.prototype.featuresTimeupdateEvents=!1,br.prototype.featuresNativeTextTracks=!1,br.withSourceHandlers=function(n){n.registerSourceHandler=function(t,e){var i=n.sourceHandlers;i||(i=n.sourceHandlers=[]),void 0===e&&(e=i.length),i.splice(e,0,t)},n.canPlayType=function(t){for(var e=n.sourceHandlers||[],i=void 0,r=0;r<e.length;r++)if(i=e[r].canPlayType(t))return i;return""},n.selectSourceHandler=function(t,e){for(var i=n.sourceHandlers||[],r=0;r<i.length;r++)if(i[r].canHandleSource(t,e))return i[r];return null},n.canPlaySource=function(t,e){var i=n.selectSourceHandler(t,e);return i?i.canHandleSource(t,e):""};["seekable","seeking","duration"].forEach(function(t){var e=this[t];"function"==typeof e&&(this[t]=function(){return this.sourceHandler_&&this.sourceHandler_[t]?this.sourceHandler_[t].apply(this.sourceHandler_,arguments):e.apply(this,arguments)})},n.prototype),n.prototype.setSource=function(t){var e=n.selectSourceHandler(t,this.options_);e||(n.nativeSourceHandler?e=n.nativeSourceHandler:f.error("No source handler found for the current source.")),this.disposeSourceHandler(),this.off("dispose",this.disposeSourceHandler),e!==n.nativeSourceHandler&&(this.currentSource_=t),this.sourceHandler_=e.handleSource(t,this,this.options_),this.on("dispose",this.disposeSourceHandler)},n.prototype.disposeSourceHandler=function(){this.currentSource_&&(this.clearTracks(["audio","video"]),this.currentSource_=null),this.cleanupAutoTextTracks(),this.sourceHandler_&&(this.sourceHandler_.dispose&&this.sourceHandler_.dispose(),this.sourceHandler_=null)}},Xt.registerComponent("Tech",br),br.registerTech("Tech",br),br.defaultTechOrder_=[];var Tr={},Sr={},kr={};function Cr(t,e,i){t.setTimeout(function(){return function i(){var r=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:[];var n=arguments[2];var s=arguments[3];var a=4<arguments.length&&void 0!==arguments[4]?arguments[4]:[];var o=5<arguments.length&&void 0!==arguments[5]&&arguments[5];var e=t[0],u=t.slice(1);if("string"==typeof e)i(r,Tr[e],n,s,a,o);else if(e){var l=function(t,e){var i=Sr[t.id()],r=null;if(null==i)return r=e(t),Sr[t.id()]=[[e,r]],r;for(var n=0;n<i.length;n++){var s=i[n],a=s[0],o=s[1];a===e&&(r=o)}null===r&&(r=e(t),i.push([e,r]));return r}(s,e);l.setSource(C({},r),function(t,e){if(t)return i(r,u,n,s,a,o);a.push(l),i(e,r.type===e.type?u:Tr[e.type],n,s,a,o)})}else u.length?i(r,u,n,s,a,o):o?n(r,a):i(r,Tr["*"],n,s,a,!0)}(e,Tr[e.type],i,t)},1)}function Er(t,e,i){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null,n="call"+zt(i),s=t.reduce(Pr(n),r),a=s===kr,o=a?null:e[i](s);return function(t,e,i,r){for(var n=t.length-1;0<=n;n--){var s=t[n];s[e]&&s[e](r,i)}}(t,i,o,a),o}var wr={buffered:1,currentTime:1,duration:1,seekable:1,played:1,paused:1},Ar={setCurrentTime:1},Lr={play:1,pause:1};function Pr(i){return function(t,e){return t===kr?kr:e[i]?e[i](t):t}}var Or={opus:"video/ogg",ogv:"video/ogg",mp4:"video/mp4",mov:"video/mp4",m4v:"video/mp4",mkv:"video/x-matroska",mp3:"audio/mpeg",aac:"audio/aac",oga:"audio/ogg",m3u8:"application/x-mpegURL"},xr=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",e=ti(t);return Or[e.toLowerCase()]||""};function Ir(t){var e=xr(t.src);return!t.type&&e&&(t.type=e),t}var Dr=function(l){function c(t,e,i){y(this,c);var r=Gt({createEl:!1},e),n=b(this,l.call(this,t,r,i));if(e.playerOptions.sources&&0!==e.playerOptions.sources.length)t.src(e.playerOptions.sources);else for(var s=0,a=e.playerOptions.techOrder;s<a.length;s++){var o=zt(a[s]),u=br.getTech(o);if(o||(u=Xt.getComponent(o)),u&&u.isSupported()){t.loadTech_(o);break}}return n}return _(c,l),c}(Xt);Xt.registerComponent("MediaLoader",Dr);var Rr=function(n){function r(t,e){y(this,r);var i=b(this,n.call(this,t,e));return i.emitTapEvents(),i.enable(),i}return _(r,n),r.prototype.createEl=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"div",e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},i=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};e=C({innerHTML:'<span aria-hidden="true" class="vjs-icon-placeholder"></span>',className:this.buildCSSClass(),tabIndex:0},e),"button"===t&&f.error("Creating a ClickableComponent with an HTML element of "+t+" is not supported; use a Button instead."),i=C({role:"button"},i),this.tabIndex_=e.tabIndex;var r=n.prototype.createEl.call(this,t,e,i);return this.createControlTextEl(r),r},r.prototype.dispose=function(){this.controlTextEl_=null,n.prototype.dispose.call(this)},r.prototype.createControlTextEl=function(t){return this.controlTextEl_=M("span",{className:"vjs-control-text"},{"aria-live":"polite"}),t&&t.appendChild(this.controlTextEl_),this.controlText(this.controlText_,t),this.controlTextEl_},r.prototype.controlText=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:this.el();if(void 0===t)return this.controlText_||"Need Text";var i=this.localize(t);this.controlText_=t,U(this.controlTextEl_,i),this.nonIconControl||e.setAttribute("title",i)},r.prototype.buildCSSClass=function(){return"vjs-control vjs-button "+n.prototype.buildCSSClass.call(this)},r.prototype.enable=function(){this.enabled_||(this.enabled_=!0,this.removeClass("vjs-disabled"),this.el_.setAttribute("aria-disabled","false"),"undefined"!=typeof this.tabIndex_&&this.el_.setAttribute("tabIndex",this.tabIndex_),this.on(["tap","click"],this.handleClick),this.on("focus",this.handleFocus),this.on("blur",this.handleBlur))},r.prototype.disable=function(){this.enabled_=!1,this.addClass("vjs-disabled"),this.el_.setAttribute("aria-disabled","true"),"undefined"!=typeof this.tabIndex_&&this.el_.removeAttribute("tabIndex"),this.off(["tap","click"],this.handleClick),this.off("focus",this.handleFocus),this.off("blur",this.handleBlur)},r.prototype.handleClick=function(t){},r.prototype.handleFocus=function(t){_t(p,"keydown",Ot(this,this.handleKeyPress))},r.prototype.handleKeyPress=function(t){32===t.which||13===t.which?(t.preventDefault(),this.trigger("click")):n.prototype.handleKeyPress&&n.prototype.handleKeyPress.call(this,t)},r.prototype.handleBlur=function(t){bt(p,"keydown",Ot(this,this.handleKeyPress))},r}(Xt);Xt.registerComponent("ClickableComponent",Rr);var Mr=function(r){function n(t,e){y(this,n);var i=b(this,r.call(this,t,e));return i.update(),t.on("posterchange",Ot(i,i.update)),i}return _(n,r),n.prototype.dispose=function(){this.player().off("posterchange",this.update),r.prototype.dispose.call(this)},n.prototype.createEl=function(){return M("div",{className:"vjs-poster",tabIndex:-1})},n.prototype.update=function(t){var e=this.player().poster();this.setSrc(e),e?this.show():this.hide()},n.prototype.setSrc=function(t){var e="";t&&(e='url("'+t+'")'),this.el_.style.backgroundImage=e},n.prototype.handleClick=function(t){this.player_.controls()&&(this.player_.paused()?this.player_.play():this.player_.pause())},n}(Rr);Xt.registerComponent("PosterImage",Mr);var Ur="#222",Nr={monospace:"monospace",sansSerif:"sans-serif",serif:"serif",monospaceSansSerif:'"Andale Mono", "Lucida Console", monospace',monospaceSerif:'"Courier New", monospace',proportionalSansSerif:"sans-serif",proportionalSerif:"serif",casual:'"Comic Sans MS", Impact, fantasy',script:'"Monotype Corsiva", cursive',smallcaps:'"Andale Mono", "Lucida Console", monospace, sans-serif'};function Br(t,e){return"rgba("+parseInt(t[1]+t[1],16)+","+parseInt(t[2]+t[2],16)+","+parseInt(t[3]+t[3],16)+","+e+")"}function jr(t,e,i){try{t.style[e]=i}catch(t){return}}var Fr=function(n){function s(i,t,e){y(this,s);var r=b(this,n.call(this,i,t,e));return i.on("loadstart",Ot(r,r.toggleDisplay)),i.on("texttrackchange",Ot(r,r.updateDisplay)),i.on("loadstart",Ot(r,r.preselectTrack)),i.ready(Ot(r,function(){if(i.tech_&&i.tech_.featuresNativeTextTracks)this.hide();else{i.on("fullscreenchange",Ot(this,this.updateDisplay));for(var t=this.options_.playerOptions.tracks||[],e=0;e<t.length;e++)this.player_.addRemoteTextTrack(t[e],!0);this.preselectTrack()}})),r}return _(s,n),s.prototype.preselectTrack=function(){for(var t={captions:1,subtitles:1},e=this.player_.textTracks(),i=this.player_.cache_.selectedLanguage,r=void 0,n=void 0,s=void 0,a=0;a<e.length;a++){var o=e[a];i&&i.enabled&&i.language===o.language?o.kind===i.kind?s=o:s||(s=o):i&&!i.enabled?n=r=s=null:o.default&&("descriptions"!==o.kind||r?o.kind in t&&!n&&(n=o):r=o)}s?s.mode="showing":n?n.mode="showing":r&&(r.mode="showing")},s.prototype.toggleDisplay=function(){this.player_.tech_&&this.player_.tech_.featuresNativeTextTracks?this.hide():this.show()},s.prototype.createEl=function(){return n.prototype.createEl.call(this,"div",{className:"vjs-text-track-display"},{"aria-live":"off","aria-atomic":"true"})},s.prototype.clearDisplay=function(){"function"==typeof g.WebVTT&&g.WebVTT.processCues(g,[],this.el_)},s.prototype.updateDisplay=function(){var t=this.player_.textTracks();this.clearDisplay();for(var e=null,i=null,r=t.length;r--;){var n=t[r];"showing"===n.mode&&("descriptions"===n.kind?e=n:i=n)}i?("off"!==this.getAttribute("aria-live")&&this.setAttribute("aria-live","off"),this.updateForTrack(i)):e&&("assertive"!==this.getAttribute("aria-live")&&this.setAttribute("aria-live","assertive"),this.updateForTrack(e))},s.prototype.updateForTrack=function(t){if("function"==typeof g.WebVTT&&t.activeCues){for(var e=[],i=0;i<t.activeCues.length;i++)e.push(t.activeCues[i]);if(g.WebVTT.processCues(g,e,this.el_),this.player_.textTrackSettings)for(var r=this.player_.textTrackSettings.getValues(),n=e.length;n--;){var s=e[n];if(s){var a=s.displayState;if(r.color&&(a.firstChild.style.color=r.color),r.textOpacity&&jr(a.firstChild,"color",Br(r.color||"#fff",r.textOpacity)),r.backgroundColor&&(a.firstChild.style.backgroundColor=r.backgroundColor),r.backgroundOpacity&&jr(a.firstChild,"backgroundColor",Br(r.backgroundColor||"#000",r.backgroundOpacity)),r.windowColor&&(r.windowOpacity?jr(a,"backgroundColor",Br(r.windowColor,r.windowOpacity)):a.style.backgroundColor=r.windowColor),r.edgeStyle&&("dropshadow"===r.edgeStyle?a.firstChild.style.textShadow="2px 2px 3px #222, 2px 2px 4px #222, 2px 2px 5px "+Ur:"raised"===r.edgeStyle?a.firstChild.style.textShadow="1px 1px #222, 2px 2px #222, 3px 3px "+Ur:"depressed"===r.edgeStyle?a.firstChild.style.textShadow="1px 1px #ccc, 0 1px #ccc, -1px -1px #222, 0 -1px "+Ur:"uniform"===r.edgeStyle&&(a.firstChild.style.textShadow="0 0 4px #222, 0 0 4px #222, 0 0 4px #222, 0 0 4px "+Ur)),r.fontPercent&&1!==r.fontPercent){var o=g.parseFloat(a.style.fontSize);a.style.fontSize=o*r.fontPercent+"px",a.style.height="auto",a.style.top="auto",a.style.bottom="2px"}r.fontFamily&&"default"!==r.fontFamily&&("small-caps"===r.fontFamily?a.firstChild.style.fontVariant="small-caps":a.firstChild.style.fontFamily=Nr[r.fontFamily])}}}},s}(Xt);Xt.registerComponent("TextTrackDisplay",Fr);var Hr=function(n){function t(){return y(this,t),b(this,n.apply(this,arguments))}return _(t,n),t.prototype.createEl=function(){var t=this.player_.isAudio(),e=this.localize(t?"Audio Player":"Video Player"),i=M("span",{className:"vjs-control-text",innerHTML:this.localize("{1} is loading.",[e])}),r=n.prototype.createEl.call(this,"div",{className:"vjs-loading-spinner",dir:"ltr"});return r.appendChild(i),r},t}(Xt);Xt.registerComponent("LoadingSpinner",Hr);var Vr=function(e){function t(){return y(this,t),b(this,e.apply(this,arguments))}return _(t,e),t.prototype.createEl=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},i=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};e=C({innerHTML:'<span aria-hidden="true" class="vjs-icon-placeholder"></span>',className:this.buildCSSClass()},e),i=C({type:"button"},i);var r=Xt.prototype.createEl.call(this,"button",e,i);return this.createControlTextEl(r),r},t.prototype.addChild=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},i=this.constructor.name;return f.warn("Adding an actionable (user controllable) child to a Button ("+i+") is not supported; use a ClickableComponent instead."),Xt.prototype.addChild.call(this,t,e)},t.prototype.enable=function(){e.prototype.enable.call(this),this.el_.removeAttribute("disabled")},t.prototype.disable=function(){e.prototype.disable.call(this),this.el_.setAttribute("disabled","disabled")},t.prototype.handleKeyPress=function(t){32!==t.which&&13!==t.which&&e.prototype.handleKeyPress.call(this,t)},t}(Rr);Xt.registerComponent("Button",Vr);var qr=function(r){function n(t,e){y(this,n);var i=b(this,r.call(this,t,e));return i.mouseused_=!1,i.on("mousedown",i.handleMouseDown),i}return _(n,r),n.prototype.buildCSSClass=function(){return"vjs-big-play-button"},n.prototype.handleClick=function(t){var e=this.player_.play();if(!(this.mouseused_&&t.clientX&&t.clientY)){var i=this.player_.getChild("controlBar"),r=i&&i.getChild("playToggle");if(r){var n=function(){return r.focus()};xe(e)?e.then(n,function(){}):this.setTimeout(n,1)}else this.player_.focus()}},n.prototype.handleKeyPress=function(t){this.mouseused_=!1,r.prototype.handleKeyPress.call(this,t)},n.prototype.handleMouseDown=function(t){this.mouseused_=!0},n}(Vr);qr.prototype.controlText_="Play Video",Xt.registerComponent("BigPlayButton",qr);var Wr=function(r){function n(t,e){y(this,n);var i=b(this,r.call(this,t,e));return i.controlText(e&&e.controlText||i.localize("Close")),i}return _(n,r),n.prototype.buildCSSClass=function(){return"vjs-close-button "+r.prototype.buildCSSClass.call(this)},n.prototype.handleClick=function(t){this.trigger({type:"close",bubbles:!1})},n}(Vr);Xt.registerComponent("CloseButton",Wr);var zr=function(r){function n(t,e){y(this,n);var i=b(this,r.call(this,t,e));return i.on(t,"play",i.handlePlay),i.on(t,"pause",i.handlePause),i.on(t,"ended",i.handleEnded),i}return _(n,r),n.prototype.buildCSSClass=function(){return"vjs-play-control "+r.prototype.buildCSSClass.call(this)},n.prototype.handleClick=function(t){this.player_.paused()?this.player_.play():this.player_.pause()},n.prototype.handleSeeked=function(t){this.removeClass("vjs-ended"),this.player_.paused()?this.handlePause(t):this.handlePlay(t)},n.prototype.handlePlay=function(t){this.removeClass("vjs-ended"),this.removeClass("vjs-paused"),this.addClass("vjs-playing"),this.controlText("Pause")},n.prototype.handlePause=function(t){this.removeClass("vjs-playing"),this.addClass("vjs-paused"),this.controlText("Play")},n.prototype.handleEnded=function(t){this.removeClass("vjs-playing"),this.addClass("vjs-ended"),this.controlText("Replay"),this.one(this.player_,"seeked",this.handleSeeked)},n}(Vr);zr.prototype.controlText_="Play",Xt.registerComponent("PlayToggle",zr);var Gr=function(t,e){t=t<0?0:t;var i=Math.floor(t%60),r=Math.floor(t/60%60),n=Math.floor(t/3600),s=Math.floor(e/60%60),a=Math.floor(e/3600);return(isNaN(t)||t===1/0)&&(n=r=i="-"),(n=0<n||0<a?n+":":"")+(r=((n||10<=s)&&r<10?"0"+r:r)+":")+(i=i<10?"0"+i:i)},Xr=Gr;function Yr(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:t;return Xr(t,e)}var $r=function(r){function n(t,e){y(this,n);var i=b(this,r.call(this,t,e));return i.throttledUpdateContent=xt(Ot(i,i.updateContent),25),i.on(t,"timeupdate",i.throttledUpdateContent),i}return _(n,r),n.prototype.createEl=function(t){var e=this.buildCSSClass(),i=r.prototype.createEl.call(this,"div",{className:e+" vjs-time-control vjs-control",innerHTML:'<span class="vjs-control-text">'+this.localize(this.labelText_)+" </span>"});return this.contentEl_=M("span",{className:e+"-display"},{"aria-live":"off"}),this.updateTextNode_(),i.appendChild(this.contentEl_),i},n.prototype.dispose=function(){this.contentEl_=null,this.textNode_=null,r.prototype.dispose.call(this)},n.prototype.updateTextNode_=function(){if(this.contentEl_){for(;this.contentEl_.firstChild;)this.contentEl_.removeChild(this.contentEl_.firstChild);this.textNode_=p.createTextNode(this.formattedTime_||this.formatTime_(0)),this.contentEl_.appendChild(this.textNode_)}},n.prototype.formatTime_=function(t){return Yr(t)},n.prototype.updateFormattedTime_=function(t){var e=this.formatTime_(t);e!==this.formattedTime_&&(this.formattedTime_=e,this.requestAnimationFrame(this.updateTextNode_))},n.prototype.updateContent=function(t){},n}(Xt);$r.prototype.labelText_="Time",$r.prototype.controlText_="Time",Xt.registerComponent("TimeDisplay",$r);var Kr=function(r){function n(t,e){y(this,n);var i=b(this,r.call(this,t,e));return i.on(t,"ended",i.handleEnded),i}return _(n,r),n.prototype.buildCSSClass=function(){return"vjs-current-time"},n.prototype.updateContent=function(t){var e=this.player_.scrubbing()?this.player_.getCache().currentTime:this.player_.currentTime();this.updateFormattedTime_(e)},n.prototype.handleEnded=function(t){this.player_.duration()&&this.updateFormattedTime_(this.player_.duration())},n}($r);Kr.prototype.labelText_="Current Time",Kr.prototype.controlText_="Current Time",Xt.registerComponent("CurrentTimeDisplay",Kr);var Qr=function(r){function n(t,e){y(this,n);var i=b(this,r.call(this,t,e));return i.on(t,"durationchange",i.updateContent),i.on(t,"loadedmetadata",i.throttledUpdateContent),i}return _(n,r),n.prototype.buildCSSClass=function(){return"vjs-duration"},n.prototype.updateContent=function(t){var e=this.player_.duration();e&&this.duration_!==e&&(this.duration_=e,this.updateFormattedTime_(e))},n}($r);Qr.prototype.labelText_="Duration",Qr.prototype.controlText_="Duration",Xt.registerComponent("DurationDisplay",Qr);var Jr=function(t){function e(){return y(this,e),b(this,t.apply(this,arguments))}return _(e,t),e.prototype.createEl=function(){return t.prototype.createEl.call(this,"div",{className:"vjs-time-control vjs-time-divider",innerHTML:"<div><span>/</span></div>"})},e}(Xt);Xt.registerComponent("TimeDivider",Jr);var Zr=function(r){function n(t,e){y(this,n);var i=b(this,r.call(this,t,e));return i.on(t,"durationchange",i.throttledUpdateContent),i.on(t,"ended",i.handleEnded),i}return _(n,r),n.prototype.buildCSSClass=function(){return"vjs-remaining-time"},n.prototype.formatTime_=function(t){return"-"+r.prototype.formatTime_.call(this,t)},n.prototype.updateContent=function(t){this.player_.duration()&&(this.player_.remainingTimeDisplay?this.updateFormattedTime_(this.player_.remainingTimeDisplay()):this.updateFormattedTime_(this.player_.remainingTime()))},n.prototype.handleEnded=function(t){this.player_.duration()&&this.updateFormattedTime_(0)},n}($r);Zr.prototype.labelText_="Remaining Time",Zr.prototype.controlText_="Remaining Time",Xt.registerComponent("RemainingTimeDisplay",Zr);var tn=function(r){function n(t,e){y(this,n);var i=b(this,r.call(this,t,e));return i.updateShowing(),i.on(i.player(),"durationchange",i.updateShowing),i}return _(n,r),n.prototype.createEl=function(){var t=r.prototype.createEl.call(this,"div",{className:"vjs-live-control vjs-control"});return this.contentEl_=M("div",{className:"vjs-live-display",innerHTML:'<span class="vjs-control-text">'+this.localize("Stream Type")+" </span>"+this.localize("LIVE")},{"aria-live":"off"}),t.appendChild(this.contentEl_),t},n.prototype.dispose=function(){this.contentEl_=null,r.prototype.dispose.call(this)},n.prototype.updateShowing=function(t){this.player().duration()===1/0?this.show():this.hide()},n}(Xt);Xt.registerComponent("LiveDisplay",tn);var en=function(r){function n(t,e){y(this,n);var i=b(this,r.call(this,t,e));return i.bar=i.getChild(i.options_.barName),i.vertical(!!i.options_.vertical),i.enable(),i}return _(n,r),n.prototype.enabled=function(){return this.enabled_},n.prototype.enable=function(){this.enabled()||(this.on("mousedown",this.handleMouseDown),this.on("touchstart",this.handleMouseDown),this.on("focus",this.handleFocus),this.on("blur",this.handleBlur),this.on("click",this.handleClick),this.on(this.player_,"controlsvisible",this.update),this.playerEvent&&this.on(this.player_,this.playerEvent,this.update),this.removeClass("disabled"),this.setAttribute("tabindex",0),this.enabled_=!0)},n.prototype.disable=function(){if(this.enabled()){var t=this.bar.el_.ownerDocument;this.off("mousedown",this.handleMouseDown),this.off("touchstart",this.handleMouseDown),this.off("focus",this.handleFocus),this.off("blur",this.handleBlur),this.off("click",this.handleClick),this.off(this.player_,"controlsvisible",this.update),this.off(t,"mousemove",this.handleMouseMove),this.off(t,"mouseup",this.handleMouseUp),this.off(t,"touchmove",this.handleMouseMove),this.off(t,"touchend",this.handleMouseUp),this.removeAttribute("tabindex"),this.addClass("disabled"),this.playerEvent&&this.off(this.player_,this.playerEvent,this.update),this.enabled_=!1}},n.prototype.createEl=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},i=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};return e.className=e.className+" vjs-slider",e=C({tabIndex:0},e),i=C({role:"slider","aria-valuenow":0,"aria-valuemin":0,"aria-valuemax":100,tabIndex:0},i),r.prototype.createEl.call(this,t,e,i)},n.prototype.handleMouseDown=function(t){var e=this.bar.el_.ownerDocument;t.preventDefault(),X(),this.addClass("vjs-sliding"),this.trigger("slideractive"),this.on(e,"mousemove",this.handleMouseMove),this.on(e,"mouseup",this.handleMouseUp),this.on(e,"touchmove",this.handleMouseMove),this.on(e,"touchend",this.handleMouseUp),this.handleMouseMove(t)},n.prototype.handleMouseMove=function(t){},n.prototype.handleMouseUp=function(){var t=this.bar.el_.ownerDocument;Y(),this.removeClass("vjs-sliding"),this.trigger("sliderinactive"),this.off(t,"mousemove",this.handleMouseMove),this.off(t,"mouseup",this.handleMouseUp),this.off(t,"touchmove",this.handleMouseMove),this.off(t,"touchend",this.handleMouseUp),this.update()},n.prototype.update=function(){if(this.el_){var t=this.getPercent(),e=this.bar;if(e){("number"!=typeof t||t!=t||t<0||t===1/0)&&(t=0);var i=(100*t).toFixed(2)+"%",r=e.el().style;return this.vertical()?r.height=i:r.width=i,t}}},n.prototype.calculateDistance=function(t){var e=Q(this.el_,t);return this.vertical()?e.y:e.x},n.prototype.handleFocus=function(){this.on(this.bar.el_.ownerDocument,"keydown",this.handleKeyPress)},n.prototype.handleKeyPress=function(t){37===t.which||40===t.which?(t.preventDefault(),this.stepBack()):38!==t.which&&39!==t.which||(t.preventDefault(),this.stepForward())},n.prototype.handleBlur=function(){this.off(this.bar.el_.ownerDocument,"keydown",this.handleKeyPress)},n.prototype.handleClick=function(t){t.stopImmediatePropagation(),t.preventDefault()},n.prototype.vertical=function(t){if(void 0===t)return this.vertical_||!1;this.vertical_=!!t,this.vertical_?this.addClass("vjs-slider-vertical"):this.addClass("vjs-slider-horizontal")},n}(Xt);Xt.registerComponent("Slider",en);var rn=function(r){function n(t,e){y(this,n);var i=b(this,r.call(this,t,e));return i.partEls_=[],i.on(t,"progress",i.update),i}return _(n,r),n.prototype.createEl=function(){return r.prototype.createEl.call(this,"div",{className:"vjs-load-progress",innerHTML:'<span class="vjs-control-text"><span>'+this.localize("Loaded")+"</span>: 0%</span>"})},n.prototype.dispose=function(){this.partEls_=null,r.prototype.dispose.call(this)},n.prototype.update=function(t){var e=this.player_.buffered(),i=this.player_.duration(),r=this.player_.bufferedEnd(),n=this.partEls_,s=function(t,e){var i=t/e||0;return 100*(1<=i?1:i)+"%"};this.el_.style.width=s(r,i);for(var a=0;a<e.length;a++){var o=e.start(a),u=e.end(a),l=n[a];l||(l=this.el_.appendChild(M()),n[a]=l),l.style.left=s(o,r),l.style.width=s(u-o,r)}for(var c=n.length;c>e.length;c--)this.el_.removeChild(n[c-1]);n.length=e.length},n}(Xt);Xt.registerComponent("LoadProgressBar",rn);var nn=function(t){function e(){return y(this,e),b(this,t.apply(this,arguments))}return _(e,t),e.prototype.createEl=function(){return t.prototype.createEl.call(this,"div",{className:"vjs-time-tooltip"})},e.prototype.update=function(t,e,i){var r=$(this.el_),n=$(this.player_.el()),s=t.width*e;if(n&&r){var a=t.left-n.left+s,o=t.width-s+(n.right-t.right),u=r.width/2;a<u?u+=u-a:o<u&&(u=o),u<0?u=0:u>r.width&&(u=r.width),this.el_.style.right="-"+u+"px",U(this.el_,i)}},e}(Xt);Xt.registerComponent("TimeTooltip",nn);var sn=function(t){function e(){return y(this,e),b(this,t.apply(this,arguments))}return _(e,t),e.prototype.createEl=function(){return t.prototype.createEl.call(this,"div",{className:"vjs-play-progress vjs-slider-bar",innerHTML:'<span class="vjs-control-text"><span>'+this.localize("Progress")+"</span>: 0%</span>"})},e.prototype.update=function(i,r){var n=this;this.rafId_&&this.cancelAnimationFrame(this.rafId_),this.rafId_=this.requestAnimationFrame(function(){var t=Yr(n.player_.scrubbing()?n.player_.getCache().currentTime:n.player_.currentTime(),n.player_.duration()),e=n.getChild("timeTooltip");e&&e.update(i,r,t)})},e}(Xt);sn.prototype.options_={children:[]},ne||ae||sn.prototype.options_.children.push("timeTooltip"),Xt.registerComponent("PlayProgressBar",sn);var an=function(r){function n(t,e){y(this,n);var i=b(this,r.call(this,t,e));return i.update=xt(Ot(i,i.update),25),i}return _(n,r),n.prototype.createEl=function(){return r.prototype.createEl.call(this,"div",{className:"vjs-mouse-display"})},n.prototype.update=function(i,r){var n=this;this.rafId_&&this.cancelAnimationFrame(this.rafId_),this.rafId_=this.requestAnimationFrame(function(){var t=n.player_.duration(),e=Yr(r*t,t);n.el_.style.left=i.width*r+"px",n.getChild("timeTooltip").update(i,r,e)})},n}(Xt);an.prototype.options_={children:["timeTooltip"]},Xt.registerComponent("MouseTimeDisplay",an);var on=function(r){function n(t,e){y(this,n);var i=b(this,r.call(this,t,e));return i.setEventHandlers_(),i}return _(n,r),n.prototype.setEventHandlers_=function(){var t=this;this.update=xt(Ot(this,this.update),30),this.on(this.player_,"timeupdate",this.update),this.on(this.player_,"ended",this.handleEnded),this.updateInterval=null,this.on(this.player_,["playing"],function(){t.clearInterval(t.updateInterval),t.updateInterval=t.setInterval(function(){t.requestAnimationFrame(function(){t.update()})},30)}),this.on(this.player_,["ended","pause","waiting"],function(){t.clearInterval(t.updateInterval)}),this.on(this.player_,["timeupdate","ended"],this.update)},n.prototype.createEl=function(){return r.prototype.createEl.call(this,"div",{className:"vjs-progress-holder"},{"aria-label":this.localize("Progress Bar")})},n.prototype.update_=function(t,e){var i=this.player_.duration();this.el_.setAttribute("aria-valuenow",(100*e).toFixed(2)),this.el_.setAttribute("aria-valuetext",this.localize("progress bar timing: currentTime={1} duration={2}",[Yr(t,i),Yr(i,i)],"{1} of {2}")),this.bar.update($(this.el_),e)},n.prototype.update=function(t){var e=r.prototype.update.call(this);return this.update_(this.getCurrentTime_(),e),e},n.prototype.getCurrentTime_=function(){return this.player_.scrubbing()?this.player_.getCache().currentTime:this.player_.currentTime()},n.prototype.handleEnded=function(t){this.update_(this.player_.duration(),1)},n.prototype.getPercent=function(){var t=this.getCurrentTime_()/this.player_.duration();return 1<=t?1:t||0},n.prototype.handleMouseDown=function(t){rt(t)&&(t.stopPropagation(),this.player_.scrubbing(!0),this.videoWasPlaying=!this.player_.paused(),this.player_.pause(),r.prototype.handleMouseDown.call(this,t))},n.prototype.handleMouseMove=function(t){if(rt(t)){var e=this.calculateDistance(t)*this.player_.duration();e===this.player_.duration()&&(e-=.1),this.player_.currentTime(e)}},n.prototype.enable=function(){r.prototype.enable.call(this);var t=this.getChild("mouseTimeDisplay");t&&t.show()},n.prototype.disable=function(){r.prototype.disable.call(this);var t=this.getChild("mouseTimeDisplay");t&&t.hide()},n.prototype.handleMouseUp=function(t){r.prototype.handleMouseUp.call(this,t),t&&t.stopPropagation(),this.player_.scrubbing(!1),this.player_.trigger({type:"timeupdate",target:this,manuallyTriggered:!0}),this.videoWasPlaying&&Ie(this.player_.play())},n.prototype.stepForward=function(){this.player_.currentTime(this.player_.currentTime()+5)},n.prototype.stepBack=function(){this.player_.currentTime(this.player_.currentTime()-5)},n.prototype.handleAction=function(t){this.player_.paused()?this.player_.play():this.player_.pause()},n.prototype.handleKeyPress=function(t){32===t.which||13===t.which?(t.preventDefault(),this.handleAction(t)):r.prototype.handleKeyPress&&r.prototype.handleKeyPress.call(this,t)},n}(en);on.prototype.options_={children:["loadProgressBar","playProgressBar"],barName:"playProgressBar"},ne||ae||on.prototype.options_.children.splice(1,0,"mouseTimeDisplay"),on.prototype.playerEvent="timeupdate",Xt.registerComponent("SeekBar",on);var un=function(r){function n(t,e){y(this,n);var i=b(this,r.call(this,t,e));return i.handleMouseMove=xt(Ot(i,i.handleMouseMove),25),i.throttledHandleMouseSeek=xt(Ot(i,i.handleMouseSeek),25),i.enable(),i}return _(n,r),n.prototype.createEl=function(){return r.prototype.createEl.call(this,"div",{className:"vjs-progress-control vjs-control"})},n.prototype.handleMouseMove=function(t){var e=this.getChild("seekBar");if(e){var i=e.getChild("mouseTimeDisplay"),r=e.el(),n=$(r),s=Q(r,t).x;1<s?s=1:s<0&&(s=0),i&&i.update(n,s)}},n.prototype.handleMouseSeek=function(t){var e=this.getChild("seekBar");e&&e.handleMouseMove(t)},n.prototype.enabled=function(){return this.enabled_},n.prototype.disable=function(){this.children().forEach(function(t){return t.disable&&t.disable()}),this.enabled()&&(this.off(["mousedown","touchstart"],this.handleMouseDown),this.off(this.el_,"mousemove",this.handleMouseMove),this.handleMouseUp(),this.addClass("disabled"),this.enabled_=!1)},n.prototype.enable=function(){this.children().forEach(function(t){return t.enable&&t.enable()}),this.enabled()||(this.on(["mousedown","touchstart"],this.handleMouseDown),this.on(this.el_,"mousemove",this.handleMouseMove),this.removeClass("disabled"),this.enabled_=!0)},n.prototype.handleMouseDown=function(t){var e=this.el_.ownerDocument,i=this.getChild("seekBar");i&&i.handleMouseDown(t),this.on(e,"mousemove",this.throttledHandleMouseSeek),this.on(e,"touchmove",this.throttledHandleMouseSeek),this.on(e,"mouseup",this.handleMouseUp),this.on(e,"touchend",this.handleMouseUp)},n.prototype.handleMouseUp=function(t){var e=this.el_.ownerDocument,i=this.getChild("seekBar");i&&i.handleMouseUp(t),this.off(e,"mousemove",this.throttledHandleMouseSeek),this.off(e,"touchmove",this.throttledHandleMouseSeek),this.off(e,"mouseup",this.handleMouseUp),this.off(e,"touchend",this.handleMouseUp)},n}(Xt);un.prototype.options_={children:["seekBar"]},Xt.registerComponent("ProgressControl",un);var ln=function(r){function n(t,e){y(this,n);var i=b(this,r.call(this,t,e));return i.on(t,"fullscreenchange",i.handleFullscreenChange),i}return _(n,r),n.prototype.buildCSSClass=function(){return"vjs-fullscreen-control "+r.prototype.buildCSSClass.call(this)},n.prototype.handleFullscreenChange=function(t){this.player_.isFullscreen()?this.controlText("Non-Fullscreen"):this.controlText("Fullscreen")},n.prototype.handleClick=function(t){this.player_.isFullscreen()?this.player_.exitFullscreen():this.player_.requestFullscreen()},n}(Vr);ln.prototype.controlText_="Fullscreen",Xt.registerComponent("FullscreenToggle",ln);var cn=function(t,e){e.tech_&&!e.tech_.featuresVolumeControl&&t.addClass("vjs-hidden"),t.on(e,"loadstart",function(){e.tech_.featuresVolumeControl?t.removeClass("vjs-hidden"):t.addClass("vjs-hidden")})},hn=function(t){function e(){return y(this,e),b(this,t.apply(this,arguments))}return _(e,t),e.prototype.createEl=function(){return t.prototype.createEl.call(this,"div",{className:"vjs-volume-level",innerHTML:'<span class="vjs-control-text"></span>'})},e}(Xt);Xt.registerComponent("VolumeLevel",hn);var dn=function(r){function n(t,e){y(this,n);var i=b(this,r.call(this,t,e));return i.on("slideractive",i.updateLastVolume_),i.on(t,"volumechange",i.updateARIAAttributes),t.ready(function(){return i.updateARIAAttributes()}),i}return _(n,r),n.prototype.createEl=function(){return r.prototype.createEl.call(this,"div",{className:"vjs-volume-bar vjs-slider-bar"},{"aria-label":this.localize("Volume Level"),"aria-live":"polite"})},n.prototype.handleMouseDown=function(t){rt(t)&&r.prototype.handleMouseDown.call(this,t)},n.prototype.handleMouseMove=function(t){rt(t)&&(this.checkMuted(),this.player_.volume(this.calculateDistance(t)))},n.prototype.checkMuted=function(){this.player_.muted()&&this.player_.muted(!1)},n.prototype.getPercent=function(){return this.player_.muted()?0:this.player_.volume()},n.prototype.stepForward=function(){this.checkMuted(),this.player_.volume(this.player_.volume()+.1)},n.prototype.stepBack=function(){this.checkMuted(),this.player_.volume(this.player_.volume()-.1)},n.prototype.updateARIAAttributes=function(t){var e=this.player_.muted()?0:this.volumeAsPercentage_();this.el_.setAttribute("aria-valuenow",e),this.el_.setAttribute("aria-valuetext",e+"%")},n.prototype.volumeAsPercentage_=function(){return Math.round(100*this.player_.volume())},n.prototype.updateLastVolume_=function(){var t=this,e=this.player_.volume();this.one("sliderinactive",function(){0===t.player_.volume()&&t.player_.lastVolume_(e)})},n}(en);dn.prototype.options_={children:["volumeLevel"],barName:"volumeLevel"},dn.prototype.playerEvent="volumechange",Xt.registerComponent("VolumeBar",dn);var pn=function(r){function n(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};y(this,n),e.vertical=e.vertical||!1,("undefined"==typeof e.volumeBar||w(e.volumeBar))&&(e.volumeBar=e.volumeBar||{},e.volumeBar.vertical=e.vertical);var i=b(this,r.call(this,t,e));return cn(i,t),i.throttledHandleMouseMove=xt(Ot(i,i.handleMouseMove),25),i.on("mousedown",i.handleMouseDown),i.on("touchstart",i.handleMouseDown),i.on(i.volumeBar,["focus","slideractive"],function(){i.volumeBar.addClass("vjs-slider-active"),i.addClass("vjs-slider-active"),i.trigger("slideractive")}),i.on(i.volumeBar,["blur","sliderinactive"],function(){i.volumeBar.removeClass("vjs-slider-active"),i.removeClass("vjs-slider-active"),i.trigger("sliderinactive")}),i}return _(n,r),n.prototype.createEl=function(){var t="vjs-volume-horizontal";return this.options_.vertical&&(t="vjs-volume-vertical"),r.prototype.createEl.call(this,"div",{className:"vjs-volume-control vjs-control "+t})},n.prototype.handleMouseDown=function(t){var e=this.el_.ownerDocument;this.on(e,"mousemove",this.throttledHandleMouseMove),this.on(e,"touchmove",this.throttledHandleMouseMove),this.on(e,"mouseup",this.handleMouseUp),this.on(e,"touchend",this.handleMouseUp)},n.prototype.handleMouseUp=function(t){var e=this.el_.ownerDocument;this.off(e,"mousemove",this.throttledHandleMouseMove),this.off(e,"touchmove",this.throttledHandleMouseMove),this.off(e,"mouseup",this.handleMouseUp),this.off(e,"touchend",this.handleMouseUp)},n.prototype.handleMouseMove=function(t){this.volumeBar.handleMouseMove(t)},n}(Xt);pn.prototype.options_={children:["volumeBar"]},Xt.registerComponent("VolumeControl",pn);var fn=function(r){function n(t,e){y(this,n);var i=b(this,r.call(this,t,e));return cn(i,t),i.on(t,["loadstart","volumechange"],i.update),i}return _(n,r),n.prototype.buildCSSClass=function(){return"vjs-mute-control "+r.prototype.buildCSSClass.call(this)},n.prototype.handleClick=function(t){var e=this.player_.volume(),i=this.player_.lastVolume_();if(0===e){var r=i<.1?.1:i;this.player_.volume(r),this.player_.muted(!1)}else this.player_.muted(!this.player_.muted())},n.prototype.update=function(t){this.updateIcon_(),this.updateControlText_()},n.prototype.updateIcon_=function(){var t=this.player_.volume(),e=3;0===t||this.player_.muted()?e=0:t<.33?e=1:t<.67&&(e=2);for(var i=0;i<4;i++)F(this.el_,"vjs-vol-"+i);j(this.el_,"vjs-vol-"+e)},n.prototype.updateControlText_=function(){var t=this.player_.muted()||0===this.player_.volume()?"Unmute":"Mute";this.controlText()!==t&&this.controlText(t)},n}(Vr);fn.prototype.controlText_="Mute",Xt.registerComponent("MuteToggle",fn);var mn=function(r){function n(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};y(this,n),"undefined"!=typeof e.inline?e.inline=e.inline:e.inline=!0,("undefined"==typeof e.volumeControl||w(e.volumeControl))&&(e.volumeControl=e.volumeControl||{},e.volumeControl.vertical=!e.inline);var i=b(this,r.call(this,t,e));return cn(i,t),i.on(i.volumeControl,["slideractive"],i.sliderActive_),i.on(i.volumeControl,["sliderinactive"],i.sliderInactive_),i}return _(n,r),n.prototype.sliderActive_=function(){this.addClass("vjs-slider-active")},n.prototype.sliderInactive_=function(){this.removeClass("vjs-slider-active")},n.prototype.createEl=function(){var t="vjs-volume-panel-horizontal";return this.options_.inline||(t="vjs-volume-panel-vertical"),r.prototype.createEl.call(this,"div",{className:"vjs-volume-panel vjs-control "+t})},n}(Xt);mn.prototype.options_={children:["muteToggle","volumeControl"]},Xt.registerComponent("VolumePanel",mn);var gn=function(r){function n(t,e){y(this,n);var i=b(this,r.call(this,t,e));return e&&(i.menuButton_=e.menuButton),i.focusedChild_=-1,i.on("keydown",i.handleKeyPress),i}return _(n,r),n.prototype.addItem=function(e){this.addChild(e),e.on("click",Ot(this,function(t){this.menuButton_&&(this.menuButton_.unpressButton(),"CaptionSettingsMenuItem"!==e.name()&&this.menuButton_.focus())}))},n.prototype.createEl=function(){var t=this.options_.contentElType||"ul";this.contentEl_=M(t,{className:"vjs-menu-content"}),this.contentEl_.setAttribute("role","menu");var e=r.prototype.createEl.call(this,"div",{append:this.contentEl_,className:"vjs-menu"});return e.appendChild(this.contentEl_),_t(e,"click",function(t){t.preventDefault(),t.stopImmediatePropagation()}),e},n.prototype.dispose=function(){this.contentEl_=null,r.prototype.dispose.call(this)},n.prototype.handleKeyPress=function(t){37===t.which||40===t.which?(t.preventDefault(),this.stepForward()):38!==t.which&&39!==t.which||(t.preventDefault(),this.stepBack())},n.prototype.stepForward=function(){var t=0;void 0!==this.focusedChild_&&(t=this.focusedChild_+1),this.focus(t)},n.prototype.stepBack=function(){var t=0;void 0!==this.focusedChild_&&(t=this.focusedChild_-1),this.focus(t)},n.prototype.focus=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:0,e=this.children().slice();e.length&&e[0].className&&/vjs-menu-title/.test(e[0].className)&&e.shift(),0<e.length&&(t<0?t=0:t>=e.length&&(t=e.length-1),e[this.focusedChild_=t].el_.focus())},n}(Xt);Xt.registerComponent("Menu",gn);var yn=function(n){function s(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};y(this,s);var i=b(this,n.call(this,t,e));i.menuButton_=new Vr(t,e),i.menuButton_.controlText(i.controlText_),i.menuButton_.el_.setAttribute("aria-haspopup","true");var r=Vr.prototype.buildCSSClass();return i.menuButton_.el_.className=i.buildCSSClass()+" "+r,i.menuButton_.removeClass("vjs-control"),i.addChild(i.menuButton_),i.update(),i.enabled_=!0,i.on(i.menuButton_,"tap",i.handleClick),i.on(i.menuButton_,"click",i.handleClick),i.on(i.menuButton_,"focus",i.handleFocus),i.on(i.menuButton_,"blur",i.handleBlur),i.on("keydown",i.handleSubmenuKeyPress),i}return _(s,n),s.prototype.update=function(){var t=this.createMenu();this.menu&&(this.menu.dispose(),this.removeChild(this.menu)),this.menu=t,this.addChild(t),this.buttonPressed_=!1,this.menuButton_.el_.setAttribute("aria-expanded","false"),this.items&&this.items.length<=this.hideThreshold_?this.hide():this.show()},s.prototype.createMenu=function(){var t=new gn(this.player_,{menuButton:this});if(this.hideThreshold_=0,this.options_.title){var e=M("li",{className:"vjs-menu-title",innerHTML:zt(this.options_.title),tabIndex:-1});this.hideThreshold_+=1,t.children_.unshift(e),N(e,t.contentEl())}if(this.items=this.createItems(),this.items)for(var i=0;i<this.items.length;i++)t.addItem(this.items[i]);return t},s.prototype.createItems=function(){},s.prototype.createEl=function(){return n.prototype.createEl.call(this,"div",{className:this.buildWrapperCSSClass()},{})},s.prototype.buildWrapperCSSClass=function(){var t="vjs-menu-button";return!0===this.options_.inline?t+="-inline":t+="-popup","vjs-menu-button "+t+" "+Vr.prototype.buildCSSClass()+" "+n.prototype.buildCSSClass.call(this)},s.prototype.buildCSSClass=function(){var t="vjs-menu-button";return!0===this.options_.inline?t+="-inline":t+="-popup","vjs-menu-button "+t+" "+n.prototype.buildCSSClass.call(this)},s.prototype.controlText=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:this.menuButton_.el();return this.menuButton_.controlText(t,e)},s.prototype.handleClick=function(t){this.one(this.menu.contentEl(),"mouseleave",Ot(this,function(t){this.unpressButton(),this.el_.blur()})),this.buttonPressed_?this.unpressButton():this.pressButton()},s.prototype.focus=function(){this.menuButton_.focus()},s.prototype.blur=function(){this.menuButton_.blur()},s.prototype.handleFocus=function(){_t(p,"keydown",Ot(this,this.handleKeyPress))},s.prototype.handleBlur=function(){bt(p,"keydown",Ot(this,this.handleKeyPress))},s.prototype.handleKeyPress=function(t){27===t.which||9===t.which?(this.buttonPressed_&&this.unpressButton(),9!==t.which&&(t.preventDefault(),this.menuButton_.el_.focus())):38!==t.which&&40!==t.which||this.buttonPressed_||(this.pressButton(),t.preventDefault())},s.prototype.handleSubmenuKeyPress=function(t){27!==t.which&&9!==t.which||(this.buttonPressed_&&this.unpressButton(),9!==t.which&&(t.preventDefault(),this.menuButton_.el_.focus()))},s.prototype.pressButton=function(){if(this.enabled_){if(this.buttonPressed_=!0,this.menu.lockShowing(),this.menuButton_.el_.setAttribute("aria-expanded","true"),ne&&D())return;this.menu.focus()}},s.prototype.unpressButton=function(){this.enabled_&&(this.buttonPressed_=!1,this.menu.unlockShowing(),this.menuButton_.el_.setAttribute("aria-expanded","false"))},s.prototype.disable=function(){this.unpressButton(),this.enabled_=!1,this.addClass("vjs-disabled"),this.menuButton_.disable()},s.prototype.enable=function(){this.enabled_=!0,this.removeClass("vjs-disabled"),this.menuButton_.enable()},s}(Xt);Xt.registerComponent("MenuButton",yn);var vn=function(s){function a(t,e){y(this,a);var i=e.tracks,r=b(this,s.call(this,t,e));if(r.items.length<=1&&r.hide(),!i)return b(r);var n=Ot(r,r.update);return i.addEventListener("removetrack",n),i.addEventListener("addtrack",n),r.player_.on("ready",n),r.player_.on("dispose",function(){i.removeEventListener("removetrack",n),i.removeEventListener("addtrack",n)}),r}return _(a,s),a}(yn);Xt.registerComponent("TrackButton",vn);var _n=function(r){function n(t,e){y(this,n);var i=b(this,r.call(this,t,e));return i.selectable=e.selectable,i.isSelected_=e.selected||!1,i.selected(i.isSelected_),i.selectable?i.el_.setAttribute("role","menuitemcheckbox"):i.el_.setAttribute("role","menuitem"),i}return _(n,r),n.prototype.createEl=function(t,e,i){return this.nonIconControl=!0,r.prototype.createEl.call(this,"li",C({className:"vjs-menu-item",innerHTML:'<span class="vjs-menu-item-text">'+this.localize(this.options_.label)+"</span>",tabIndex:-1},e),i)},n.prototype.handleClick=function(t){this.selected(!0)},n.prototype.selected=function(t){this.selectable&&(t?(this.addClass("vjs-selected"),this.el_.setAttribute("aria-checked","true"),this.controlText(", selected"),this.isSelected_=!0):(this.removeClass("vjs-selected"),this.el_.setAttribute("aria-checked","false"),this.controlText(""),this.isSelected_=!1))},n}(Rr);Xt.registerComponent("MenuItem",_n);var bn=function(u){function l(t,e){y(this,l);var i=e.track,r=t.textTracks();e.label=i.label||i.language||"Unknown",e.selected="showing"===i.mode;var n=b(this,u.call(this,t,e));n.track=i;var s=function(){for(var t=arguments.length,e=Array(t),i=0;i<t;i++)e[i]=arguments[i];n.handleTracksChange.apply(n,e)},a=function(){for(var t=arguments.length,e=Array(t),i=0;i<t;i++)e[i]=arguments[i];n.handleSelectedLanguageChange.apply(n,e)};if(t.on(["loadstart","texttrackchange"],s),r.addEventListener("change",s),r.addEventListener("selectedlanguagechange",a),n.on("dispose",function(){t.off(["loadstart","texttrackchange"],s),r.removeEventListener("change",s),r.removeEventListener("selectedlanguagechange",a)}),void 0===r.onchange){var o=void 0;n.on(["tap","click"],function(){if("object"!==v(g.Event))try{o=new g.Event("change")}catch(t){}o||(o=p.createEvent("Event")).initEvent("change",!0,!0),r.dispatchEvent(o)})}return n.handleTracksChange(),n}return _(l,u),l.prototype.handleClick=function(t){var e=this.track.kind,i=this.track.kinds,r=this.player_.textTracks();if(i||(i=[e]),u.prototype.handleClick.call(this,t),r)for(var n=0;n<r.length;n++){var s=r[n];s===this.track&&-1<i.indexOf(s.kind)?"showing"!==s.mode&&(s.mode="showing"):"disabled"!==s.mode&&(s.mode="disabled")}},l.prototype.handleTracksChange=function(t){var e="showing"===this.track.mode;e!==this.isSelected_&&this.selected(e)},l.prototype.handleSelectedLanguageChange=function(t){if("showing"===this.track.mode){var e=this.player_.cache_.selectedLanguage;if(e&&e.enabled&&e.language===this.track.language&&e.kind!==this.track.kind)return;this.player_.cache_.selectedLanguage={enabled:!0,language:this.track.language,kind:this.track.kind}}},l.prototype.dispose=function(){this.track=null,u.prototype.dispose.call(this)},l}(_n);Xt.registerComponent("TextTrackMenuItem",bn);var Tn=function(i){function r(t,e){return y(this,r),e.track={player:t,kind:e.kind,kinds:e.kinds,default:!1,mode:"disabled"},e.kinds||(e.kinds=[e.kind]),e.label?e.track.label=e.label:e.track.label=e.kinds.join(" and ")+" off",e.selectable=!0,b(this,i.call(this,t,e))}return _(r,i),r.prototype.handleTracksChange=function(t){for(var e=this.player().textTracks(),i=!0,r=0,n=e.length;r<n;r++){var s=e[r];if(-1<this.options_.kinds.indexOf(s.kind)&&"showing"===s.mode){i=!1;break}}i!==this.isSelected_&&this.selected(i)},r.prototype.handleSelectedLanguageChange=function(t){for(var e=this.player().textTracks(),i=!0,r=0,n=e.length;r<n;r++){var s=e[r];if(-1<["captions","descriptions","subtitles"].indexOf(s.kind)&&"showing"===s.mode){i=!1;break}}i&&(this.player_.cache_.selectedLanguage={enabled:!1})},r}(bn);Xt.registerComponent("OffTextTrackMenuItem",Tn);var Sn=function(i){function r(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};return y(this,r),e.tracks=t.textTracks(),b(this,i.call(this,t,e))}return _(r,i),r.prototype.createItems=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[],e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:bn,i=void 0;this.label_&&(i=this.label_+" off"),t.push(new Tn(this.player_,{kinds:this.kinds_,kind:this.kind_,label:i})),this.hideThreshold_+=1;var r=this.player_.textTracks();Array.isArray(this.kinds_)||(this.kinds_=[this.kind_]);for(var n=0;n<r.length;n++){var s=r[n];if(-1<this.kinds_.indexOf(s.kind)){var a=new e(this.player_,{track:s,selectable:!0});a.addClass("vjs-"+s.kind+"-menu-item"),t.push(a)}}return t},r}(vn);Xt.registerComponent("TextTrackButton",Sn);var kn=function(a){function o(t,e){y(this,o);var i=e.track,r=e.cue,n=t.currentTime();e.selectable=!0,e.label=r.text,e.selected=r.startTime<=n&&n<r.endTime;var s=b(this,a.call(this,t,e));return s.track=i,s.cue=r,i.addEventListener("cuechange",Ot(s,s.update)),s}return _(o,a),o.prototype.handleClick=function(t){a.prototype.handleClick.call(this),this.player_.currentTime(this.cue.startTime),this.update(this.cue.startTime)},o.prototype.update=function(t){var e=this.cue,i=this.player_.currentTime();this.selected(e.startTime<=i&&i<e.endTime)},o}(_n);Xt.registerComponent("ChaptersTrackMenuItem",kn);var Cn=function(r){function n(t,e,i){return y(this,n),b(this,r.call(this,t,e,i))}return _(n,r),n.prototype.buildCSSClass=function(){return"vjs-chapters-button "+r.prototype.buildCSSClass.call(this)},n.prototype.buildWrapperCSSClass=function(){return"vjs-chapters-button "+r.prototype.buildWrapperCSSClass.call(this)},n.prototype.update=function(t){this.track_&&(!t||"addtrack"!==t.type&&"removetrack"!==t.type)||this.setTrack(this.findChaptersTrack()),r.prototype.update.call(this)},n.prototype.setTrack=function(t){if(this.track_!==t){if(this.updateHandler_||(this.updateHandler_=this.update.bind(this)),this.track_){var e=this.player_.remoteTextTrackEls().getTrackElementByTrack_(this.track_);e&&e.removeEventListener("load",this.updateHandler_),this.track_=null}if(this.track_=t,this.track_){this.track_.mode="hidden";var i=this.player_.remoteTextTrackEls().getTrackElementByTrack_(this.track_);i&&i.addEventListener("load",this.updateHandler_)}}},n.prototype.findChaptersTrack=function(){for(var t=this.player_.textTracks()||[],e=t.length-1;0<=e;e--){var i=t[e];if(i.kind===this.kind_)return i}},n.prototype.getMenuCaption=function(){return this.track_&&this.track_.label?this.track_.label:this.localize(zt(this.kind_))},n.prototype.createMenu=function(){return this.options_.title=this.getMenuCaption(),r.prototype.createMenu.call(this)},n.prototype.createItems=function(){var t=[];if(!this.track_)return t;var e=this.track_.cues;if(!e)return t;for(var i=0,r=e.length;i<r;i++){var n=e[i],s=new kn(this.player_,{track:this.track_,cue:n});t.push(s)}return t},n}(Sn);Cn.prototype.kind_="chapters",Cn.prototype.controlText_="Chapters",Xt.registerComponent("ChaptersButton",Cn);var En=function(a){function o(t,e,i){y(this,o);var r=b(this,a.call(this,t,e,i)),n=t.textTracks(),s=Ot(r,r.handleTracksChange);return n.addEventListener("change",s),r.on("dispose",function(){n.removeEventListener("change",s)}),r}return _(o,a),o.prototype.handleTracksChange=function(t){for(var e=this.player().textTracks(),i=!1,r=0,n=e.length;r<n;r++){var s=e[r];if(s.kind!==this.kind_&&"showing"===s.mode){i=!0;break}}i?this.disable():this.enable()},o.prototype.buildCSSClass=function(){return"vjs-descriptions-button "+a.prototype.buildCSSClass.call(this)},o.prototype.buildWrapperCSSClass=function(){return"vjs-descriptions-button "+a.prototype.buildWrapperCSSClass.call(this)},o}(Sn);En.prototype.kind_="descriptions",En.prototype.controlText_="Descriptions",Xt.registerComponent("DescriptionsButton",En);var wn=function(r){function n(t,e,i){return y(this,n),b(this,r.call(this,t,e,i))}return _(n,r),n.prototype.buildCSSClass=function(){return"vjs-subtitles-button "+r.prototype.buildCSSClass.call(this)},n.prototype.buildWrapperCSSClass=function(){return"vjs-subtitles-button "+r.prototype.buildWrapperCSSClass.call(this)},n}(Sn);wn.prototype.kind_="subtitles",wn.prototype.controlText_="Subtitles",Xt.registerComponent("SubtitlesButton",wn);var An=function(r){function n(t,e){y(this,n),e.track={player:t,kind:e.kind,label:e.kind+" settings",selectable:!1,default:!1,mode:"disabled"},e.selectable=!1,e.name="CaptionSettingsMenuItem";var i=b(this,r.call(this,t,e));return i.addClass("vjs-texttrack-settings"),i.controlText(", opens "+e.kind+" settings dialog"),i}return _(n,r),n.prototype.handleClick=function(t){this.player().getChild("textTrackSettings").open()},n}(bn);Xt.registerComponent("CaptionSettingsMenuItem",An);var Ln=function(r){function n(t,e,i){return y(this,n),b(this,r.call(this,t,e,i))}return _(n,r),n.prototype.buildCSSClass=function(){return"vjs-captions-button "+r.prototype.buildCSSClass.call(this)},n.prototype.buildWrapperCSSClass=function(){return"vjs-captions-button "+r.prototype.buildWrapperCSSClass.call(this)},n.prototype.createItems=function(){var t=[];return this.player().tech_&&this.player().tech_.featuresNativeTextTracks||!this.player().getChild("textTrackSettings")||(t.push(new An(this.player_,{kind:this.kind_})),this.hideThreshold_+=1),r.prototype.createItems.call(this,t)},n}(Sn);Ln.prototype.kind_="captions",Ln.prototype.controlText_="Captions",Xt.registerComponent("CaptionsButton",Ln);var Pn=function(n){function t(){return y(this,t),b(this,n.apply(this,arguments))}return _(t,n),t.prototype.createEl=function(t,e,i){var r='<span class="vjs-menu-item-text">'+this.localize(this.options_.label);return"captions"===this.options_.track.kind&&(r+='\n        <span aria-hidden="true" class="vjs-icon-placeholder"></span>\n        <span class="vjs-control-text"> '+this.localize("Captions")+"</span>\n      "),r+="</span>",n.prototype.createEl.call(this,t,C({innerHTML:r},e),i)},t}(bn);Xt.registerComponent("SubsCapsMenuItem",Pn);var On=function(r){function n(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};y(this,n);var i=b(this,r.call(this,t,e));return i.label_="subtitles",-1<["en","en-us","en-ca","fr-ca"].indexOf(i.player_.language_)&&(i.label_="captions"),i.menuButton_.controlText(zt(i.label_)),i}return _(n,r),n.prototype.buildCSSClass=function(){return"vjs-subs-caps-button "+r.prototype.buildCSSClass.call(this)},n.prototype.buildWrapperCSSClass=function(){return"vjs-subs-caps-button "+r.prototype.buildWrapperCSSClass.call(this)},n.prototype.createItems=function(){var t=[];return this.player().tech_&&this.player().tech_.featuresNativeTextTracks||!this.player().getChild("textTrackSettings")||(t.push(new An(this.player_,{kind:this.label_})),this.hideThreshold_+=1),t=r.prototype.createItems.call(this,t,Pn)},n}(Sn);On.prototype.kinds_=["captions","subtitles"],On.prototype.controlText_="Subtitles",Xt.registerComponent("SubsCapsButton",On);var xn=function(a){function o(t,e){y(this,o);var i=e.track,r=t.audioTracks();e.label=i.label||i.language||"Unknown",e.selected=i.enabled;var n=b(this,a.call(this,t,e));n.track=i;var s=function(){for(var t=arguments.length,e=Array(t),i=0;i<t;i++)e[i]=arguments[i];n.handleTracksChange.apply(n,e)};return r.addEventListener("change",s),n.on("dispose",function(){r.removeEventListener("change",s)}),n}return _(o,a),o.prototype.handleClick=function(t){var e=this.player_.audioTracks();a.prototype.handleClick.call(this,t);for(var i=0;i<e.length;i++){var r=e[i];r.enabled=r===this.track}},o.prototype.handleTracksChange=function(t){this.selected(this.track.enabled)},o}(_n);Xt.registerComponent("AudioTrackMenuItem",xn);var In=function(i){function r(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};return y(this,r),e.tracks=t.audioTracks(),b(this,i.call(this,t,e))}return _(r,i),r.prototype.buildCSSClass=function(){return"vjs-audio-button "+i.prototype.buildCSSClass.call(this)},r.prototype.buildWrapperCSSClass=function(){return"vjs-audio-button "+i.prototype.buildWrapperCSSClass.call(this)},r.prototype.createItems=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[];this.hideThreshold_=1;for(var e=this.player_.audioTracks(),i=0;i<e.length;i++){var r=e[i];t.push(new xn(this.player_,{track:r,selectable:!0}))}return t},r}(vn);In.prototype.controlText_="Audio Track",Xt.registerComponent("AudioTrackButton",In);var Dn=function(s){function a(t,e){y(this,a);var i=e.rate,r=parseFloat(i,10);e.label=i,e.selected=1===r,e.selectable=!0;var n=b(this,s.call(this,t,e));return n.label=i,n.rate=r,n.on(t,"ratechange",n.update),n}return _(a,s),a.prototype.handleClick=function(t){s.prototype.handleClick.call(this),this.player().playbackRate(this.rate)},a.prototype.update=function(t){this.selected(this.player().playbackRate()===this.rate)},a}(_n);Dn.prototype.contentElType="button",Xt.registerComponent("PlaybackRateMenuItem",Dn);var Rn=function(r){function n(t,e){y(this,n);var i=b(this,r.call(this,t,e));return i.updateVisibility(),i.updateLabel(),i.on(t,"loadstart",i.updateVisibility),i.on(t,"ratechange",i.updateLabel),i}return _(n,r),n.prototype.createEl=function(){var t=r.prototype.createEl.call(this);return this.labelEl_=M("div",{className:"vjs-playback-rate-value",innerHTML:"1x"}),t.appendChild(this.labelEl_),t},n.prototype.dispose=function(){this.labelEl_=null,r.prototype.dispose.call(this)},n.prototype.buildCSSClass=function(){return"vjs-playback-rate "+r.prototype.buildCSSClass.call(this)},n.prototype.buildWrapperCSSClass=function(){return"vjs-playback-rate "+r.prototype.buildWrapperCSSClass.call(this)},n.prototype.createMenu=function(){var t=new gn(this.player()),e=this.playbackRates();if(e)for(var i=e.length-1;0<=i;i--)t.addChild(new Dn(this.player(),{rate:e[i]+"x"}));return t},n.prototype.updateARIAAttributes=function(){this.el().setAttribute("aria-valuenow",this.player().playbackRate())},n.prototype.handleClick=function(t){for(var e=this.player().playbackRate(),i=this.playbackRates(),r=i[0],n=0;n<i.length;n++)if(i[n]>e){r=i[n];break}this.player().playbackRate(r)},n.prototype.playbackRates=function(){return this.options_.playbackRates||this.options_.playerOptions&&this.options_.playerOptions.playbackRates},n.prototype.playbackRateSupported=function(){return this.player().tech_&&this.player().tech_.featuresPlaybackRate&&this.playbackRates()&&0<this.playbackRates().length},n.prototype.updateVisibility=function(t){this.playbackRateSupported()?this.removeClass("vjs-hidden"):this.addClass("vjs-hidden")},n.prototype.updateLabel=function(t){this.playbackRateSupported()&&(this.labelEl_.innerHTML=this.player().playbackRate()+"x")},n}(yn);Rn.prototype.controlText_="Playback Rate",Xt.registerComponent("PlaybackRateMenuButton",Rn);var Mn=function(t){function e(){return y(this,e),b(this,t.apply(this,arguments))}return _(e,t),e.prototype.buildCSSClass=function(){return"vjs-spacer "+t.prototype.buildCSSClass.call(this)},e.prototype.createEl=function(){return t.prototype.createEl.call(this,"div",{className:this.buildCSSClass()})},e}(Xt);Xt.registerComponent("Spacer",Mn);var Un=function(e){function t(){return y(this,t),b(this,e.apply(this,arguments))}return _(t,e),t.prototype.buildCSSClass=function(){return"vjs-custom-control-spacer "+e.prototype.buildCSSClass.call(this)},t.prototype.createEl=function(){var t=e.prototype.createEl.call(this,{className:this.buildCSSClass()});return t.innerHTML=" ",t},t}(Mn);Xt.registerComponent("CustomControlSpacer",Un);var Nn=function(t){function e(){return y(this,e),b(this,t.apply(this,arguments))}return _(e,t),e.prototype.createEl=function(){return t.prototype.createEl.call(this,"div",{className:"vjs-control-bar",dir:"ltr"})},e}(Xt);Nn.prototype.options_={children:["playToggle","volumePanel","currentTimeDisplay","timeDivider","durationDisplay","progressControl","liveDisplay","remainingTimeDisplay","customControlSpacer","playbackRateMenuButton","chaptersButton","descriptionsButton","subsCapsButton","audioTrackButton","fullscreenToggle"]},Xt.registerComponent("ControlBar",Nn);var Bn=function(r){function n(t,e){y(this,n);var i=b(this,r.call(this,t,e));return i.on(t,"error",i.open),i}return _(n,r),n.prototype.buildCSSClass=function(){return"vjs-error-display "+r.prototype.buildCSSClass.call(this)},n.prototype.content=function(){var t=this.player().error();return t?this.localize(t.message):""},n}(Ne);Bn.prototype.options_=Gt(Ne.prototype.options_,{pauseOnOpen:!1,fillAlways:!0,temporary:!1,uncloseable:!0}),Xt.registerComponent("ErrorDisplay",Bn);var jn="vjs-text-track-settings",Fn=["#000","Black"],Hn=["#00F","Blue"],Vn=["#0FF","Cyan"],qn=["#0F0","Green"],Wn=["#F0F","Magenta"],zn=["#F00","Red"],Gn=["#FFF","White"],Xn=["#FF0","Yellow"],Yn=["1","Opaque"],$n=["0.5","Semi-Transparent"],Kn=["0","Transparent"],Qn={backgroundColor:{selector:".vjs-bg-color > select",id:"captions-background-color-%s",label:"Color",options:[Fn,Gn,zn,qn,Hn,Xn,Wn,Vn]},backgroundOpacity:{selector:".vjs-bg-opacity > select",id:"captions-background-opacity-%s",label:"Transparency",options:[Yn,$n,Kn]},color:{selector:".vjs-fg-color > select",id:"captions-foreground-color-%s",label:"Color",options:[Gn,Fn,zn,qn,Hn,Xn,Wn,Vn]},edgeStyle:{selector:".vjs-edge-style > select",id:"%s",label:"Text Edge Style",options:[["none","None"],["raised","Raised"],["depressed","Depressed"],["uniform","Uniform"],["dropshadow","Dropshadow"]]},fontFamily:{selector:".vjs-font-family > select",id:"captions-font-family-%s",label:"Font Family",options:[["proportionalSansSerif","Proportional Sans-Serif"],["monospaceSansSerif","Monospace Sans-Serif"],["proportionalSerif","Proportional Serif"],["monospaceSerif","Monospace Serif"],["casual","Casual"],["script","Script"],["small-caps","Small Caps"]]},fontPercent:{selector:".vjs-font-percent > select",id:"captions-font-size-%s",label:"Font Size",options:[["0.50","50%"],["0.75","75%"],["1.00","100%"],["1.25","125%"],["1.50","150%"],["1.75","175%"],["2.00","200%"],["3.00","300%"],["4.00","400%"]],default:2,parser:function(t){return"1.00"===t?null:Number(t)}},textOpacity:{selector:".vjs-text-opacity > select",id:"captions-foreground-opacity-%s",label:"Transparency",options:[Yn,$n]},windowColor:{selector:".vjs-window-color > select",id:"captions-window-color-%s",label:"Color"},windowOpacity:{selector:".vjs-window-opacity > select",id:"captions-window-opacity-%s",label:"Transparency",options:[Kn,$n,Yn]}};function Jn(t,e){if(e&&(t=e(t)),t&&"none"!==t)return t}Qn.windowColor.options=Qn.backgroundColor.options;var Zn=function(r){function n(t,e){y(this,n),e.temporary=!1;var i=b(this,r.call(this,t,e));return i.updateDisplay=Ot(i,i.updateDisplay),i.fill(),i.hasBeenOpened_=i.hasBeenFilled_=!0,i.endDialog=M("p",{className:"vjs-control-text",textContent:i.localize("End of dialog window.")}),i.el().appendChild(i.endDialog),i.setDefaults(),void 0===e.persistTextTrackSettings&&(i.options_.persistTextTrackSettings=i.options_.playerOptions.persistTextTrackSettings),i.on(i.$(".vjs-done-button"),"click",function(){i.saveSettings(),i.close()}),i.on(i.$(".vjs-default-button"),"click",function(){i.setDefaults(),i.updateDisplay()}),k(Qn,function(t){i.on(i.$(t.selector),"change",i.updateDisplay)}),i.options_.persistTextTrackSettings&&i.restoreSettings(),i}return _(n,r),n.prototype.dispose=function(){this.endDialog=null,r.prototype.dispose.call(this)},n.prototype.createElSelect_=function(t){var i=this,e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"",r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:"label",n=Qn[t],s=n.id.replace("%s",this.id_),a=[e,s].join(" ").trim();return["<"+r+' id="'+s+'" class="'+("label"===r?"vjs-label":"")+'">',this.localize(n.label),"</"+r+">",'<select aria-labelledby="'+a+'">'].concat(n.options.map(function(t){var e=s+"-"+t[1].replace(/\W+/g,"");return['<option id="'+e+'" value="'+t[0]+'" ','aria-labelledby="'+a+" "+e+'">',i.localize(t[1]),"</option>"].join("")})).concat("</select>").join("")},n.prototype.createElFgColor_=function(){var t="captions-text-legend-"+this.id_;return['<fieldset class="vjs-fg-color vjs-track-setting">','<legend id="'+t+'">',this.localize("Text"),"</legend>",this.createElSelect_("color",t),'<span class="vjs-text-opacity vjs-opacity">',this.createElSelect_("textOpacity",t),"</span>","</fieldset>"].join("")},n.prototype.createElBgColor_=function(){var t="captions-background-"+this.id_;return['<fieldset class="vjs-bg-color vjs-track-setting">','<legend id="'+t+'">',this.localize("Background"),"</legend>",this.createElSelect_("backgroundColor",t),'<span class="vjs-bg-opacity vjs-opacity">',this.createElSelect_("backgroundOpacity",t),"</span>","</fieldset>"].join("")},n.prototype.createElWinColor_=function(){var t="captions-window-"+this.id_;return['<fieldset class="vjs-window-color vjs-track-setting">','<legend id="'+t+'">',this.localize("Window"),"</legend>",this.createElSelect_("windowColor",t),'<span class="vjs-window-opacity vjs-opacity">',this.createElSelect_("windowOpacity",t),"</span>","</fieldset>"].join("")},n.prototype.createElColors_=function(){return M("div",{className:"vjs-track-settings-colors",innerHTML:[this.createElFgColor_(),this.createElBgColor_(),this.createElWinColor_()].join("")})},n.prototype.createElFont_=function(){return M("div",{className:"vjs-track-settings-font",innerHTML:['<fieldset class="vjs-font-percent vjs-track-setting">',this.createElSelect_("fontPercent","","legend"),"</fieldset>",'<fieldset class="vjs-edge-style vjs-track-setting">',this.createElSelect_("edgeStyle","","legend"),"</fieldset>",'<fieldset class="vjs-font-family vjs-track-setting">',this.createElSelect_("fontFamily","","legend"),"</fieldset>"].join("")})},n.prototype.createElControls_=function(){var t=this.localize("restore all settings to the default values");return M("div",{className:"vjs-track-settings-controls",innerHTML:['<button class="vjs-default-button" title="'+t+'">',this.localize("Reset"),'<span class="vjs-control-text"> '+t+"</span>","</button>",'<button class="vjs-done-button">'+this.localize("Done")+"</button>"].join("")})},n.prototype.content=function(){return[this.createElColors_(),this.createElFont_(),this.createElControls_()]},n.prototype.label=function(){return this.localize("Caption Settings Dialog")},n.prototype.description=function(){return this.localize("Beginning of dialog window. Escape will cancel and close the window.")},n.prototype.buildCSSClass=function(){return r.prototype.buildCSSClass.call(this)+" vjs-text-track-settings"},n.prototype.getValues=function(){var a=this;return function(i,r){var t=2<arguments.length&&void 0!==arguments[2]?arguments[2]:0;return S(i).reduce(function(t,e){return r(t,i[e],e)},t)}(Qn,function(t,e,i){var r,n,s=(r=a.$(e.selector),n=e.parser,Jn(r.options[r.options.selectedIndex].value,n));return void 0!==s&&(t[i]=s),t},{})},n.prototype.setValues=function(i){var r=this;k(Qn,function(t,e){!function(t,e,i){if(e)for(var r=0;r<t.options.length;r++)if(Jn(t.options[r].value,i)===e){t.selectedIndex=r;break}}(r.$(t.selector),i[e],t.parser)})},n.prototype.setDefaults=function(){var i=this;k(Qn,function(t){var e=t.hasOwnProperty("default")?t.default:0;i.$(t.selector).selectedIndex=e})},n.prototype.restoreSettings=function(){var t=void 0;try{t=JSON.parse(g.localStorage.getItem(jn))}catch(t){f.warn(t)}t&&this.setValues(t)},n.prototype.saveSettings=function(){if(this.options_.persistTextTrackSettings){var t=this.getValues();try{Object.keys(t).length?g.localStorage.setItem(jn,JSON.stringify(t)):g.localStorage.removeItem(jn)}catch(t){f.warn(t)}}},n.prototype.updateDisplay=function(){var t=this.player_.getChild("textTrackDisplay");t&&t.updateDisplay()},n.prototype.conditionalBlur_=function(){this.previouslyActiveEl_=null,this.off(p,"keydown",this.handleKeyDown);var t=this.player_.controlBar,e=t&&t.subsCapsButton,i=t&&t.captionsButton;e?e.focus():i&&i.focus()},n}(Ne);Xt.registerComponent("TextTrackSettings",Zn);var ts=function(s){function a(t,e){y(this,a);var i=e.ResizeObserver||g.ResizeObserver;null===e.ResizeObserver&&(i=!1);var r=Gt({createEl:!i},e),n=b(this,s.call(this,t,r));return n.ResizeObserver=e.ResizeObserver||g.ResizeObserver,n.loadListener_=null,n.resizeObserver_=null,n.debouncedHandler_=It(function(){n.resizeHandler()},100,!1,t),i?(n.resizeObserver_=new n.ResizeObserver(n.debouncedHandler_),n.resizeObserver_.observe(t.el())):(n.loadListener_=function(){n.el_.contentWindow&&_t(n.el_.contentWindow,"resize",n.debouncedHandler_),n.off("load",n.loadListener_)},n.on("load",n.loadListener_)),n}return _(a,s),a.prototype.createEl=function(){return s.prototype.createEl.call(this,"iframe",{className:"vjs-resize-manager"})},a.prototype.resizeHandler=function(){this.player_.trigger("playerresize")},a.prototype.dispose=function(){this.resizeObserver_&&(this.player_.el()&&this.resizeObserver_.unobserve(this.player_.el()),this.resizeObserver_.disconnect()),this.el_&&this.el_.contentWindow&&bt(this.el_.contentWindow,"resize",this.debouncedHandler_),this.loadListener_&&this.off("load",this.loadListener_),this.ResizeObserver=null,this.resizeObserver=null,this.debouncedHandler_=null,this.loadListener_=null},a}(Xt);Xt.registerComponent("ResizeManager",ts);var es=function(t){var e=t.el();if(e.hasAttribute("src"))return t.triggerSourceset(e.src),!0;var i=t.$$("source"),r=[],n="";if(!i.length)return!1;for(var s=0;s<i.length;s++){var a=i[s].src;a&&-1===r.indexOf(a)&&r.push(a)}return!!r.length&&(1===r.length&&(n=r[0]),t.triggerSourceset(n),!0)},is=Object.defineProperty({},"innerHTML",{get:function(){return this.cloneNode(!0).innerHTML},set:function(t){var e=p.createElement(this.nodeName.toLowerCase());e.innerHTML=t;for(var i=p.createDocumentFragment();e.childNodes.length;)i.appendChild(e.childNodes[0]);return this.innerText="",g.Element.prototype.appendChild.call(this,i),this.innerHTML}}),rs=function(t,e){for(var i={},r=0;r<t.length&&!((i=Object.getOwnPropertyDescriptor(t[r],e))&&i.set&&i.get);r++);return i.enumerable=!0,i.configurable=!0,i},ns=function(s){var a=s.el();if(!a.resetSourceWatch_){var e={},t=rs([s.el(),g.HTMLMediaElement.prototype,g.Element.prototype,is],"innerHTML"),i=function(n){return function(){for(var t=arguments.length,e=Array(t),i=0;i<t;i++)e[i]=arguments[i];var r=n.apply(a,e);return es(s),r}};["append","appendChild","insertAdjacentHTML"].forEach(function(t){a[t]&&(e[t]=a[t],a[t]=i(e[t]))}),Object.defineProperty(a,"innerHTML",Gt(t,{set:i(t.set)})),a.resetSourceWatch_=function(){a.resetSourceWatch_=null,Object.keys(e).forEach(function(t){a[t]=e[t]}),Object.defineProperty(a,"innerHTML",t)},s.one("sourceset",a.resetSourceWatch_)}},ss=Object.defineProperty({},"src",{get:function(){return this.hasAttribute("src")?Ze(g.Element.prototype.getAttribute.call(this,"src")):""},set:function(t){return g.Element.prototype.setAttribute.call(this,"src",t),t}}),as=function(r){if(r.featuresSourceset){var n=r.el();if(!n.resetSourceset_){var i=rs([r.el(),g.HTMLMediaElement.prototype,ss],"src"),s=n.setAttribute,e=n.load;Object.defineProperty(n,"src",Gt(i,{set:function(t){var e=i.set.call(n,t);return r.triggerSourceset(n.src),e}})),n.setAttribute=function(t,e){var i=s.call(n,t,e);return/src/i.test(t)&&r.triggerSourceset(n.src),i},n.load=function(){var t=e.call(n);return es(r)||(r.triggerSourceset(""),ns(r)),t},n.currentSrc?r.triggerSourceset(n.currentSrc):es(r)||ns(r),n.resetSourceset_=function(){n.resetSourceset_=null,n.load=e,n.setAttribute=s,Object.defineProperty(n,"src",i),n.resetSourceWatch_&&n.resetSourceWatch_()}}}},os=h(["Text Tracks are being loaded from another origin but the crossorigin attribute isn't used.\n            This may prevent text tracks from loading."],["Text Tracks are being loaded from another origin but the crossorigin attribute isn't used.\n            This may prevent text tracks from loading."]),us=function(c){function h(t,e){y(this,h);var i=b(this,c.call(this,t,e)),r=t.source,n=!1;if(r&&(i.el_.currentSrc!==r.src||t.tag&&3===t.tag.initNetworkState_)?i.setSource(r):i.handleLateInit_(i.el_),t.enableSourceset&&i.setupSourcesetHandling_(),i.el_.hasChildNodes()){for(var s=i.el_.childNodes,a=s.length,o=[];a--;){var u=s[a];"track"===u.nodeName.toLowerCase()&&(i.featuresNativeTextTracks?(i.remoteTextTrackEls().addTrackElement_(u),i.remoteTextTracks().addTrack(u.track),i.textTracks().addTrack(u.track),n||i.el_.hasAttribute("crossorigin")||!ei(u.src)||(n=!0)):o.push(u))}for(var l=0;l<o.length;l++)i.el_.removeChild(o[l])}return i.proxyNativeTracks_(),i.featuresNativeTextTracks&&n&&f.warn(m(os)),i.restoreMetadataTracksInIOSNativePlayer_(),(ge||ie||ue)&&!0===t.nativeControlsForTouch&&i.setControls(!0),i.proxyWebkitFullscreen_(),i.triggerReady(),i}return _(h,c),h.prototype.dispose=function(){this.el_&&this.el_.resetSourceset_&&this.el_.resetSourceset_(),h.disposeMediaElement(this.el_),this.options_=null,c.prototype.dispose.call(this)},h.prototype.setupSourcesetHandling_=function(){as(this)},h.prototype.restoreMetadataTracksInIOSNativePlayer_=function(){var r=this.textTracks(),n=void 0,t=function(){n=[];for(var t=0;t<r.length;t++){var e=r[t];"metadata"===e.kind&&n.push({track:e,storedMode:e.mode})}};t(),r.addEventListener("change",t),this.on("dispose",function(){return r.removeEventListener("change",t)});var e=function t(){for(var e=0;e<n.length;e++){var i=n[e];"disabled"===i.track.mode&&i.track.mode!==i.storedMode&&(i.track.mode=i.storedMode)}r.removeEventListener("change",t)};this.on("webkitbeginfullscreen",function(){r.removeEventListener("change",t),r.removeEventListener("change",e),r.addEventListener("change",e)}),this.on("webkitendfullscreen",function(){r.removeEventListener("change",t),r.addEventListener("change",t),r.removeEventListener("change",e)})},h.prototype.overrideNative_=function(t,e){var i=this;if(e===this["featuresNative"+t+"Tracks"]){var r=t.toLowerCase();this[r+"TracksListeners_"]&&Object.keys(this[r+"TracksListeners_"]).forEach(function(t){i.el()[r+"Tracks"].removeEventListener(t,i[r+"TracksListeners_"][t])}),this["featuresNative"+t+"Tracks"]=!e,this[r+"TracksListeners_"]=null,this.proxyNativeTracksForType_(r)}},h.prototype.overrideNativeAudioTracks=function(t){this.overrideNative_("Audio",t)},h.prototype.overrideNativeVideoTracks=function(t){this.overrideNative_("Video",t)},h.prototype.proxyNativeTracksForType_=function(t){var r=this,e=Ui[t],n=this.el()[e.getterName],s=this[e.getterName]();if(this["featuresNative"+e.capitalName+"Tracks"]&&n&&n.addEventListener){var a={change:function(t){s.trigger({type:"change",target:s,currentTarget:s,srcElement:s})},addtrack:function(t){s.addTrack(t.track)},removetrack:function(t){s.removeTrack(t.track)}},i=function(){for(var t=[],e=0;e<s.length;e++){for(var i=!1,r=0;r<n.length;r++)if(n[r]===s[e]){i=!0;break}i||t.push(s[e])}for(;t.length;)s.removeTrack(t.shift())};this[e.getterName+"Listeners_"]=a,Object.keys(a).forEach(function(e){var i=a[e];n.addEventListener(e,i),r.on("dispose",function(t){return n.removeEventListener(e,i)})}),this.on("loadstart",i),this.on("dispose",function(t){return r.off("loadstart",i)})}},h.prototype.proxyNativeTracks_=function(){var e=this;Ui.names.forEach(function(t){e.proxyNativeTracksForType_(t)})},h.prototype.createEl=function(){var t=this.options_.tag;if(!t||!this.options_.playerElIngest&&!this.movingMediaElementInDOM){if(t){var e=t.cloneNode(!0);t.parentNode&&t.parentNode.insertBefore(e,t),h.disposeMediaElement(t),t=e}else{t=p.createElement("video");var i=Gt({},this.options_.tag&&q(this.options_.tag));ge&&!0===this.options_.nativeControlsForTouch||delete i.controls,V(t,C(i,{id:this.options_.techId,class:"vjs-tech"}))}t.playerId=this.options_.playerId}"undefined"!=typeof this.options_.preload&&z(t,"preload",this.options_.preload);for(var r=["loop","muted","playsinline","autoplay"],n=0;n<r.length;n++){var s=r[n],a=this.options_[s];"undefined"!=typeof a&&(a?z(t,s,s):G(t,s),t[s]=a)}return t},h.prototype.handleLateInit_=function(t){if(0!==t.networkState&&3!==t.networkState){if(0===t.readyState){var e=!1,i=function(){e=!0};this.on("loadstart",i);var r=function(){e||this.trigger("loadstart")};return this.on("loadedmetadata",r),void this.ready(function(){this.off("loadstart",i),this.off("loadedmetadata",r),e||this.trigger("loadstart")})}var n=["loadstart"];n.push("loadedmetadata"),2<=t.readyState&&n.push("loadeddata"),3<=t.readyState&&n.push("canplay"),4<=t.readyState&&n.push("canplaythrough"),this.ready(function(){n.forEach(function(t){this.trigger(t)},this)})}},h.prototype.setCurrentTime=function(t){try{this.el_.currentTime=t}catch(t){f(t,"Video is not ready. (Video.js)")}},h.prototype.duration=function(){var e=this;if(this.el_.duration===1/0&&ae&&he&&0===this.el_.currentTime){return this.on("timeupdate",function t(){0<e.el_.currentTime&&(e.el_.duration===1/0&&e.trigger("durationchange"),e.off("timeupdate",t))}),NaN}return this.el_.duration||NaN},h.prototype.width=function(){return this.el_.offsetWidth},h.prototype.height=function(){return this.el_.offsetHeight},h.prototype.proxyWebkitFullscreen_=function(){var t=this;if("webkitDisplayingFullscreen"in this.el_){var e=function(){this.trigger("fullscreenchange",{isFullscreen:!1})},i=function(){"webkitPresentationMode"in this.el_&&"picture-in-picture"!==this.el_.webkitPresentationMode&&(this.one("webkitendfullscreen",e),this.trigger("fullscreenchange",{isFullscreen:!0}))};this.on("webkitbeginfullscreen",i),this.on("dispose",function(){t.off("webkitbeginfullscreen",i),t.off("webkitendfullscreen",e)})}},h.prototype.supportsFullScreen=function(){if("function"==typeof this.el_.webkitEnterFullScreen){var t=g.navigator&&g.navigator.userAgent||"";if(/Android/.test(t)||!/Chrome|Mac OS X 10.5/.test(t))return!0}return!1},h.prototype.enterFullScreen=function(){var t=this.el_;t.paused&&t.networkState<=t.HAVE_METADATA?(this.el_.play(),this.setTimeout(function(){t.pause(),t.webkitEnterFullScreen()},0)):t.webkitEnterFullScreen()},h.prototype.exitFullScreen=function(){this.el_.webkitExitFullScreen()},h.prototype.src=function(t){if(void 0===t)return this.el_.src;this.setSrc(t)},h.prototype.reset=function(){h.resetMediaElement(this.el_)},h.prototype.currentSrc=function(){return this.currentSource_?this.currentSource_.src:this.el_.currentSrc},h.prototype.setControls=function(t){this.el_.controls=!!t},h.prototype.addTextTrack=function(t,e,i){return this.featuresNativeTextTracks?this.el_.addTextTrack(t,e,i):c.prototype.addTextTrack.call(this,t,e,i)},h.prototype.createRemoteTextTrack=function(t){if(!this.featuresNativeTextTracks)return c.prototype.createRemoteTextTrack.call(this,t);var e=p.createElement("track");return t.kind&&(e.kind=t.kind),t.label&&(e.label=t.label),(t.language||t.srclang)&&(e.srclang=t.language||t.srclang),t.default&&(e.default=t.default),t.id&&(e.id=t.id),t.src&&(e.src=t.src),e},h.prototype.addRemoteTextTrack=function(t,e){var i=c.prototype.addRemoteTextTrack.call(this,t,e);return this.featuresNativeTextTracks&&this.el().appendChild(i),i},h.prototype.removeRemoteTextTrack=function(t){if(c.prototype.removeRemoteTextTrack.call(this,t),this.featuresNativeTextTracks)for(var e=this.$$("track"),i=e.length;i--;)t!==e[i]&&t!==e[i].track||this.el().removeChild(e[i])},h.prototype.getVideoPlaybackQuality=function(){if("function"==typeof this.el().getVideoPlaybackQuality)return this.el().getVideoPlaybackQuality();var t={};return"undefined"!=typeof this.el().webkitDroppedFrameCount&&"undefined"!=typeof this.el().webkitDecodedFrameCount&&(t.droppedVideoFrames=this.el().webkitDroppedFrameCount,t.totalVideoFrames=this.el().webkitDecodedFrameCount),g.performance&&"function"==typeof g.performance.now?t.creationTime=g.performance.now():g.performance&&g.performance.timing&&"number"==typeof g.performance.timing.navigationStart&&(t.creationTime=g.Date.now()-g.performance.timing.navigationStart),t},h}(br);if(x()){us.TEST_VID=p.createElement("video");var ls=p.createElement("track");ls.kind="captions",ls.srclang="en",ls.label="English",us.TEST_VID.appendChild(ls)}us.isSupported=function(){try{us.TEST_VID.volume=.5}catch(t){return!1}return!(!us.TEST_VID||!us.TEST_VID.canPlayType)},us.canPlayType=function(t){return us.TEST_VID.canPlayType(t)},us.canPlaySource=function(t,e){return us.canPlayType(t.type)},us.canControlVolume=function(){try{var t=us.TEST_VID.volume;return us.TEST_VID.volume=t/2+.1,t!==us.TEST_VID.volume}catch(t){return!1}},us.canControlPlaybackRate=function(){if(ae&&he&&de<58)return!1;try{var t=us.TEST_VID.playbackRate;return us.TEST_VID.playbackRate=t/2+.1,t!==us.TEST_VID.playbackRate}catch(t){return!1}},us.canOverrideAttributes=function(){try{var t=function(){};Object.defineProperty(p.createElement("video"),"src",{get:t,set:t}),Object.defineProperty(p.createElement("audio"),"src",{get:t,set:t}),Object.defineProperty(p.createElement("video"),"innerHTML",{get:t,set:t}),Object.defineProperty(p.createElement("audio"),"innerHTML",{get:t,set:t})}catch(t){return!1}return!0},us.supportsNativeTextTracks=function(){return me},us.supportsNativeVideoTracks=function(){return!(!us.TEST_VID||!us.TEST_VID.videoTracks)},us.supportsNativeAudioTracks=function(){return!(!us.TEST_VID||!us.TEST_VID.audioTracks)},us.Events=["loadstart","suspend","abort","error","emptied","stalled","loadedmetadata","loadeddata","canplay","canplaythrough","playing","waiting","seeking","seeked","ended","durationchange","timeupdate","progress","play","pause","ratechange","resize","volumechange"],us.prototype.featuresVolumeControl=us.canControlVolume(),us.prototype.featuresPlaybackRate=us.canControlPlaybackRate(),us.prototype.featuresSourceset=us.canOverrideAttributes(),us.prototype.movingMediaElementInDOM=!ne,us.prototype.featuresFullscreenResize=!0,us.prototype.featuresProgressEvents=!0,us.prototype.featuresTimeupdateEvents=!0,us.prototype.featuresNativeTextTracks=us.supportsNativeTextTracks(),us.prototype.featuresNativeVideoTracks=us.supportsNativeVideoTracks(),us.prototype.featuresNativeAudioTracks=us.supportsNativeAudioTracks();var cs=us.TEST_VID&&us.TEST_VID.constructor.prototype.canPlayType,hs=/^application\/(?:x-|vnd\.apple\.)mpegurl/i;us.patchCanPlayType=function(){4<=oe&&!le&&!he&&(us.TEST_VID.constructor.prototype.canPlayType=function(t){return t&&hs.test(t)?"maybe":cs.call(this,t)})},us.unpatchCanPlayType=function(){var t=us.TEST_VID.constructor.prototype.canPlayType;return us.TEST_VID.constructor.prototype.canPlayType=cs,t},us.patchCanPlayType(),us.disposeMediaElement=function(t){if(t){for(t.parentNode&&t.parentNode.removeChild(t);t.hasChildNodes();)t.removeChild(t.firstChild);t.removeAttribute("src"),"function"==typeof t.load&&function(){try{t.load()}catch(t){}}()}},us.resetMediaElement=function(t){if(t){for(var e=t.querySelectorAll("source"),i=e.length;i--;)t.removeChild(e[i]);t.removeAttribute("src"),"function"==typeof t.load&&function(){try{t.load()}catch(t){}}()}},["muted","defaultMuted","autoplay","controls","loop","playsinline"].forEach(function(t){us.prototype[t]=function(){return this.el_[t]||this.el_.hasAttribute(t)}}),["muted","defaultMuted","autoplay","loop","playsinline"].forEach(function(e){us.prototype["set"+zt(e)]=function(t){(this.el_[e]=t)?this.el_.setAttribute(e,e):this.el_.removeAttribute(e)}}),["paused","currentTime","buffered","volume","poster","preload","error","seeking","seekable","ended","playbackRate","defaultPlaybackRate","played","networkState","readyState","videoWidth","videoHeight"].forEach(function(t){us.prototype[t]=function(){return this.el_[t]}}),["volume","src","poster","preload","playbackRate","defaultPlaybackRate"].forEach(function(e){us.prototype["set"+zt(e)]=function(t){this.el_[e]=t}}),["pause","load","play"].forEach(function(t){us.prototype[t]=function(){return this.el_[t]()}}),br.withSourceHandlers(us),us.nativeSourceHandler={},us.nativeSourceHandler.canPlayType=function(t){try{return us.TEST_VID.canPlayType(t)}catch(t){return""}},us.nativeSourceHandler.canHandleSource=function(t,e){if(t.type)return us.nativeSourceHandler.canPlayType(t.type);if(t.src){var i=ti(t.src);return us.nativeSourceHandler.canPlayType("video/"+i)}return""},us.nativeSourceHandler.handleSource=function(t,e,i){e.setSrc(t.src)},us.nativeSourceHandler.dispose=function(){},us.registerSourceHandler(us.nativeSourceHandler),br.registerTech("Html5",us);var ds=h(["\n        Using the tech directly can be dangerous. I hope you know what you're doing.\n        See https://github.com/videojs/video.js/issues/2617 for more info.\n      "],["\n        Using the tech directly can be dangerous. I hope you know what you're doing.\n        See https://github.com/videojs/video.js/issues/2617 for more info.\n      "]),ps=["progress","abort","suspend","emptied","stalled","loadedmetadata","loadeddata","timeupdate","resize","volumechange","texttrackchange"],fs={canplay:"CanPlay",canplaythrough:"CanPlayThrough",playing:"Playing",seeked:"Seeked"},ms=function(c){function h(t,e,i){if(y(this,h),t.id=t.id||e.id||"vjs_video_"+ut(),(e=C(h.getTagSettings(t),e)).initChildren=!1,e.createEl=!1,e.evented=!1,e.reportTouchActivity=!1,!e.language)if("function"==typeof t.closest){var r=t.closest("[lang]");r&&r.getAttribute&&(e.language=r.getAttribute("lang"))}else for(var n=t;n&&1===n.nodeType;){if(q(n).hasOwnProperty("lang")){e.language=n.getAttribute("lang");break}n=n.parentNode}var s=b(this,c.call(this,null,e,i));if(s.isPosterFromTech_=!1,s.queuedCallbacks_=[],s.isReady_=!1,s.hasStarted_=!1,s.userActive_=!1,!s.options_||!s.options_.techOrder||!s.options_.techOrder.length)throw new Error("No techOrder specified. Did you overwrite videojs.options instead of just changing the properties you want to override?");if(s.tag=t,s.tagAttributes=t&&q(t),s.language(s.options_.language),e.languages){var a={};Object.getOwnPropertyNames(e.languages).forEach(function(t){a[t.toLowerCase()]=e.languages[t]}),s.languages_=a}else s.languages_=h.prototype.options_.languages;s.cache_={},s.poster_=e.poster||"",s.controls_=!!e.controls,s.cache_.lastVolume=1,t.controls=!1,t.removeAttribute("controls"),s.scrubbing_=!1,s.el_=s.createEl(),s.cache_.lastPlaybackRate=s.defaultPlaybackRate(),Vt(s,{eventBusKey:"el_"});var o=Gt(s.options_);if(e.plugins){var u=e.plugins;Object.keys(u).forEach(function(t){if("function"!=typeof this[t])throw new Error('plugin "'+t+'" does not exist');this[t](u[t])},s)}s.options_.playerOptions=o,s.middleware_=[],s.initChildren(),s.isAudio("audio"===t.nodeName.toLowerCase()),s.controls()?s.addClass("vjs-controls-enabled"):s.addClass("vjs-controls-disabled"),s.el_.setAttribute("role","region"),s.isAudio()?s.el_.setAttribute("aria-label",s.localize("Audio Player")):s.el_.setAttribute("aria-label",s.localize("Video Player")),s.isAudio()&&s.addClass("vjs-audio"),s.flexNotSupported_()&&s.addClass("vjs-no-flex"),ne||s.addClass("vjs-workinghover"),h.players[s.id_]=s;var l=d.split(".")[0];return s.addClass("vjs-v"+l),s.userActive(!0),s.reportUserActivity(),s.one("play",s.listenForUserActivity_),s.on("fullscreenchange",s.handleFullscreenChange_),s.on("stageclick",s.handleStageClick_),s.changingSrc_=!1,s.playWaitingForReady_=!1,s.playOnLoadstart_=null,s}return _(h,c),h.prototype.dispose=function(){this.trigger("dispose"),this.off("dispose"),this.styleEl_&&this.styleEl_.parentNode&&(this.styleEl_.parentNode.removeChild(this.styleEl_),this.styleEl_=null),h.players[this.id_]=null,this.tag&&this.tag.player&&(this.tag.player=null),this.el_&&this.el_.player&&(this.el_.player=null),this.tech_&&(this.tech_.dispose(),this.isPosterFromTech_=!1,this.poster_=""),this.playerElIngest_&&(this.playerElIngest_=null),this.tag&&(this.tag=null),Sr[this.id()]=null,c.prototype.dispose.call(this)},h.prototype.createEl=function(){var e=this.tag,i=void 0,t=this.playerElIngest_=e.parentNode&&e.parentNode.hasAttribute&&e.parentNode.hasAttribute("data-vjs-player"),r="video-js"===this.tag.tagName.toLowerCase();t?i=this.el_=e.parentNode:r||(i=this.el_=c.prototype.createEl.call(this,"div"));var n=q(e);if(r){for(i=this.el_=e,e=this.tag=p.createElement("video");i.children.length;)e.appendChild(i.firstChild);B(i,"video-js")||j(i,"video-js"),i.appendChild(e),t=this.playerElIngest_=i,Object.keys(i).forEach(function(t){e[t]=i[t]})}if(e.setAttribute("tabindex","-1"),e.removeAttribute("width"),e.removeAttribute("height"),Object.getOwnPropertyNames(n).forEach(function(t){r&&"class"===t||i.setAttribute(t,n[t]),r&&e.setAttribute(t,n[t])}),e.playerId=e.id,e.id+="_html5_api",e.className="vjs-tech",e.player=i.player=this,this.addClass("vjs-paused"),!0!==g.VIDEOJS_NO_DYNAMIC_STYLE){this.styleEl_=Lt("vjs-styles-dimensions");var s=nt(".vjs-styles-defaults"),a=nt("head");a.insertBefore(this.styleEl_,s?s.nextSibling:a.firstChild)}this.width(this.options_.width),this.height(this.options_.height),this.fluid(this.options_.fluid),this.aspectRatio(this.options_.aspectRatio);for(var o=e.getElementsByTagName("a"),u=0;u<o.length;u++){var l=o.item(u);j(l,"vjs-hidden"),l.setAttribute("hidden","hidden")}return e.initNetworkState_=e.networkState,e.parentNode&&!t&&e.parentNode.insertBefore(i,e),N(e,i),this.children_.unshift(e),this.el_.setAttribute("lang",this.language_),this.el_=i},h.prototype.width=function(t){return this.dimension("width",t)},h.prototype.height=function(t){return this.dimension("height",t)},h.prototype.dimension=function(t,e){var i=t+"_";if(void 0===e)return this[i]||0;if(""===e)return this[i]=void 0,void this.updateStyleEl_();var r=parseFloat(e);isNaN(r)?f.error('Improper value "'+e+'" supplied for for '+t):(this[i]=r,this.updateStyleEl_())},h.prototype.fluid=function(t){if(void 0===t)return!!this.fluid_;this.fluid_=!!t,t?this.addClass("vjs-fluid"):this.removeClass("vjs-fluid"),this.updateStyleEl_()},h.prototype.aspectRatio=function(t){if(void 0===t)return this.aspectRatio_;if(!/^\d+\:\d+$/.test(t))throw new Error("Improper value supplied for aspect ratio. The format should be width:height, for example 16:9.");this.aspectRatio_=t,this.fluid(!0),this.updateStyleEl_()},h.prototype.updateStyleEl_=function(){if(!0!==g.VIDEOJS_NO_DYNAMIC_STYLE){var t=void 0,e=void 0,i=void 0,r=(void 0!==this.aspectRatio_&&"auto"!==this.aspectRatio_?this.aspectRatio_:0<this.videoWidth()?this.videoWidth()+":"+this.videoHeight():"16:9").split(":"),n=r[1]/r[0];t=void 0!==this.width_?this.width_:void 0!==this.height_?this.height_/n:this.videoWidth()||300,e=void 0!==this.height_?this.height_:t*n,i=/^[^a-zA-Z]/.test(this.id())?"dimensions-"+this.id():this.id()+"-dimensions",this.addClass(i),Pt(this.styleEl_,"\n      ."+i+" {\n        width: "+t+"px;\n        height: "+e+"px;\n      }\n\n      ."+i+".vjs-fluid {\n        padding-top: "+100*n+"%;\n      }\n    ")}else{var s="number"==typeof this.width_?this.width_:this.options_.width,a="number"==typeof this.height_?this.height_:this.options_.height,o=this.tech_&&this.tech_.el();o&&(0<=s&&(o.width=s),0<=a&&(o.height=a))}},h.prototype.loadTech_=function(t,e){var i=this;this.tech_&&this.unloadTech_();var r=zt(t),n=t.charAt(0).toLowerCase()+t.slice(1);"Html5"!==r&&this.tag&&(br.getTech("Html5").disposeMediaElement(this.tag),this.tag.player=null,this.tag=null),this.techName_=r,this.isReady_=!1;var s={source:e,nativeControlsForTouch:this.options_.nativeControlsForTouch,playerId:this.id(),techId:this.id()+"_"+r+"_api",autoplay:this.options_.autoplay,playsinline:this.options_.playsinline,preload:this.options_.preload,loop:this.options_.loop,muted:this.options_.muted,poster:this.poster(),language:this.language(),playerElIngest:this.playerElIngest_||!1,"vtt.js":this.options_["vtt.js"],canOverridePoster:!!this.options_.techCanOverridePoster,enableSourceset:this.options_.enableSourceset};Bi.names.forEach(function(t){var e=Bi[t];s[e.getterName]=i[e.privateName]}),C(s,this.options_[r]),C(s,this.options_[n]),C(s,this.options_[t.toLowerCase()]),this.tag&&(s.tag=this.tag),e&&e.src===this.cache_.src&&0<this.cache_.currentTime&&(s.startTime=this.cache_.currentTime);var a=br.getTech(t);if(!a)throw new Error("No Tech named '"+r+"' exists! '"+r+"' should be registered using videojs.registerTech()'");this.tech_=new a(s),this.tech_.ready(Ot(this,this.handleTechReady_),!0),Me(this.textTracksJson_||[],this.tech_),ps.forEach(function(t){i.on(i.tech_,t,i["handleTech"+zt(t)+"_"])}),Object.keys(fs).forEach(function(e){i.on(i.tech_,e,function(t){0===i.tech_.playbackRate()&&i.tech_.seeking()?i.queuedCallbacks_.push({callback:i["handleTech"+fs[e]+"_"].bind(i),event:t}):i["handleTech"+fs[e]+"_"](t)})}),this.on(this.tech_,"loadstart",this.handleTechLoadStart_),this.on(this.tech_,"sourceset",this.handleTechSourceset_),this.on(this.tech_,"waiting",this.handleTechWaiting_),this.on(this.tech_,"ended",this.handleTechEnded_),this.on(this.tech_,"seeking",this.handleTechSeeking_),this.on(this.tech_,"play",this.handleTechPlay_),this.on(this.tech_,"firstplay",this.handleTechFirstPlay_),this.on(this.tech_,"pause",this.handleTechPause_),this.on(this.tech_,"durationchange",this.handleTechDurationChange_),this.on(this.tech_,"fullscreenchange",this.handleTechFullscreenChange_),this.on(this.tech_,"error",this.handleTechError_),this.on(this.tech_,"loadedmetadata",this.updateStyleEl_),this.on(this.tech_,"posterchange",this.handleTechPosterChange_),this.on(this.tech_,"textdata",this.handleTechTextData_),this.on(this.tech_,"ratechange",this.handleTechRateChange_),this.usingNativeControls(this.techGet_("controls")),this.controls()&&!this.usingNativeControls()&&this.addTechControlsListeners_(),this.tech_.el().parentNode===this.el()||"Html5"===r&&this.tag||N(this.tech_.el(),this.el()),this.tag&&(this.tag.player=null,this.tag=null)},h.prototype.unloadTech_=function(){var i=this;Bi.names.forEach(function(t){var e=Bi[t];i[e.privateName]=i[e.getterName]()}),this.textTracksJson_=Re(this.tech_),this.isReady_=!1,this.tech_.dispose(),this.tech_=!1,this.isPosterFromTech_&&(this.poster_="",this.trigger("posterchange")),this.isPosterFromTech_=!1},h.prototype.tech=function(t){return void 0===t&&f.warn(m(ds)),this.tech_},h.prototype.addTechControlsListeners_=function(){this.removeTechControlsListeners_(),this.on(this.tech_,"mousedown",this.handleTechClick_),this.on(this.tech_,"touchstart",this.handleTechTouchStart_),this.on(this.tech_,"touchmove",this.handleTechTouchMove_),this.on(this.tech_,"touchend",this.handleTechTouchEnd_),this.on(this.tech_,"tap",this.handleTechTap_)},h.prototype.removeTechControlsListeners_=function(){this.off(this.tech_,"tap",this.handleTechTap_),this.off(this.tech_,"touchstart",this.handleTechTouchStart_),this.off(this.tech_,"touchmove",this.handleTechTouchMove_),this.off(this.tech_,"touchend",this.handleTechTouchEnd_),this.off(this.tech_,"mousedown",this.handleTechClick_)},h.prototype.handleTechReady_=function(){if(this.triggerReady(),this.cache_.volume&&this.techCall_("setVolume",this.cache_.volume),this.handleTechPosterChange_(),this.handleTechDurationChange_(),(this.src()||this.currentSrc())&&this.tag&&this.options_.autoplay&&this.paused())try{delete this.tag.poster}catch(t){f("deleting tag.poster throws in some browsers",t)}},h.prototype.handleTechLoadStart_=function(){this.removeClass("vjs-ended"),this.removeClass("vjs-seeking"),this.error(null),this.paused()?(this.hasStarted(!1),this.trigger("loadstart")):(this.trigger("loadstart"),this.trigger("firstplay"))},h.prototype.updateSourceCaches_=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",e=t,i="";"string"!=typeof e&&(e=t.src,i=t.type),this.cache_.source=this.cache_.source||{},this.cache_.sources=this.cache_.sources||[],e&&!i&&(i=function(t,e){if(!e)return"";if(t.cache_.source.src===e&&t.cache_.source.type)return t.cache_.source.type;var i=t.cache_.sources.filter(function(t){return t.src===e});if(i.length)return i[0].type;for(var r=t.$$("source"),n=0;n<r.length;n++){var s=r[n];if(s.type&&s.src&&s.src===e)return s.type}return xr(e)}(this,e)),this.cache_.source={src:e,type:i};for(var r=this.cache_.sources.filter(function(t){return t.src&&t.src===e}),n=[],s=this.$$("source"),a=[],o=0;o<s.length;o++){var u=q(s[o]);n.push(u),u.src&&u.src===e&&a.push(u.src)}a.length&&!r.length?this.cache_.sources=n:r.length||(this.cache_.sources=[this.cache_.source]),this.cache_.src=e},h.prototype.handleTechSourceset_=function(t){var i=this;if(!this.changingSrc_&&(this.updateSourceCaches_(t.src),!t.src)){this.tech_.one(["sourceset","loadstart"],function t(e){"sourceset"!==e.type&&i.updateSourceCaches_(i.techGet_("currentSrc")),i.tech_.off(["sourceset","loadstart"],t)})}this.trigger({src:t.src,type:"sourceset"})},h.prototype.hasStarted=function(t){if(void 0===t)return this.hasStarted_;t!==this.hasStarted_&&(this.hasStarted_=t,this.hasStarted_?(this.addClass("vjs-has-started"),this.trigger("firstplay")):this.removeClass("vjs-has-started"))},h.prototype.handleTechPlay_=function(){this.removeClass("vjs-ended"),this.removeClass("vjs-paused"),this.addClass("vjs-playing"),this.hasStarted(!0),this.trigger("play")},h.prototype.handleTechRateChange_=function(){0<this.tech_.playbackRate()&&0===this.cache_.lastPlaybackRate&&(this.queuedCallbacks_.forEach(function(t){return t.callback(t.event)}),this.queuedCallbacks_=[]),this.cache_.lastPlaybackRate=this.tech_.playbackRate(),this.trigger("ratechange")},h.prototype.handleTechWaiting_=function(){var t=this;this.addClass("vjs-waiting"),this.trigger("waiting"),this.one("timeupdate",function(){return t.removeClass("vjs-waiting")})},h.prototype.handleTechCanPlay_=function(){this.removeClass("vjs-waiting"),this.trigger("canplay")},h.prototype.handleTechCanPlayThrough_=function(){this.removeClass("vjs-waiting"),this.trigger("canplaythrough")},h.prototype.handleTechPlaying_=function(){this.removeClass("vjs-waiting"),this.trigger("playing")},h.prototype.handleTechSeeking_=function(){this.addClass("vjs-seeking"),this.trigger("seeking")},h.prototype.handleTechSeeked_=function(){this.removeClass("vjs-seeking"),this.trigger("seeked")},h.prototype.handleTechFirstPlay_=function(){this.options_.starttime&&(f.warn("Passing the `starttime` option to the player will be deprecated in 6.0"),this.currentTime(this.options_.starttime)),this.addClass("vjs-has-started"),this.trigger("firstplay")},h.prototype.handleTechPause_=function(){this.removeClass("vjs-playing"),this.addClass("vjs-paused"),this.trigger("pause")},h.prototype.handleTechEnded_=function(){this.addClass("vjs-ended"),this.options_.loop?(this.currentTime(0),this.play()):this.paused()||this.pause(),this.trigger("ended")},h.prototype.handleTechDurationChange_=function(){this.duration(this.techGet_("duration"))},h.prototype.handleTechClick_=function(t){rt(t)&&this.controls_&&(this.paused()?this.play():this.pause())},h.prototype.handleTechTap_=function(){this.userActive(!this.userActive())},h.prototype.handleTechTouchStart_=function(){this.userWasActive=this.userActive()},h.prototype.handleTechTouchMove_=function(){this.userWasActive&&this.reportUserActivity()},h.prototype.handleTechTouchEnd_=function(t){t.preventDefault()},h.prototype.handleFullscreenChange_=function(){this.isFullscreen()?this.addClass("vjs-fullscreen"):this.removeClass("vjs-fullscreen")},h.prototype.handleStageClick_=function(){this.reportUserActivity()},h.prototype.handleTechFullscreenChange_=function(t,e){e&&this.isFullscreen(e.isFullscreen),this.trigger("fullscreenchange")},h.prototype.handleTechError_=function(){var t=this.tech_.error();this.error(t)},h.prototype.handleTechTextData_=function(){var t=null;1<arguments.length&&(t=arguments[1]),this.trigger("textdata",t)},h.prototype.getCache=function(){return this.cache_},h.prototype.techCall_=function(n,s){this.ready(function(){if(n in Ar)return t=this.middleware_,e=this.tech_,r=s,e[i=n](t.reduce(Pr(i),r));if(n in Lr)return Er(this.middleware_,this.tech_,n,s);var t,e,i,r;try{this.tech_&&this.tech_[n](s)}catch(t){throw f(t),t}},!0)},h.prototype.techGet_=function(e){if(this.tech_&&this.tech_.isReady_){if(e in wr)return t=this.middleware_,i=this.tech_,r=e,t.reduceRight(Pr(r),i[r]());if(e in Lr)return Er(this.middleware_,this.tech_,e);var t,i,r;try{return this.tech_[e]()}catch(t){if(void 0===this.tech_[e])throw f("Video.js: "+e+" method not defined for "+this.techName_+" playback technology.",t),t;if("TypeError"===t.name)throw f("Video.js: "+e+" unavailable on "+this.techName_+" playback technology element.",t),this.tech_.isReady_=!1,t;throw f(t),t}}},h.prototype.play=function(){var t=this;if(this.playOnLoadstart_&&this.off("loadstart",this.playOnLoadstart_),this.isReady_){if(!this.changingSrc_&&(this.src()||this.currentSrc()))return this.techGet_("play");this.playOnLoadstart_=function(){t.playOnLoadstart_=null,Ie(t.play())},this.one("loadstart",this.playOnLoadstart_)}else{if(this.playWaitingForReady_)return;this.playWaitingForReady_=!0,this.ready(function(){t.playWaitingForReady_=!1,Ie(t.play())})}},h.prototype.pause=function(){this.techCall_("pause")},h.prototype.paused=function(){return!1!==this.techGet_("paused")},h.prototype.played=function(){return this.techGet_("played")||be(0,0)},h.prototype.scrubbing=function(t){if("undefined"==typeof t)return this.scrubbing_;this.scrubbing_=!!t,t?this.addClass("vjs-scrubbing"):this.removeClass("vjs-scrubbing")},h.prototype.currentTime=function(t){return"undefined"!=typeof t?(t<0&&(t=0),void this.techCall_("setCurrentTime",t)):(this.cache_.currentTime=this.techGet_("currentTime")||0,this.cache_.currentTime)},h.prototype.duration=function(t){if(void 0===t)return void 0!==this.cache_.duration?this.cache_.duration:NaN;(t=parseFloat(t))<0&&(t=1/0),t!==this.cache_.duration&&((this.cache_.duration=t)===1/0?this.addClass("vjs-live"):this.removeClass("vjs-live"),this.trigger("durationchange"))},h.prototype.remainingTime=function(){return this.duration()-this.currentTime()},h.prototype.remainingTimeDisplay=function(){return Math.floor(this.duration())-Math.floor(this.currentTime())},h.prototype.buffered=function(){var t=this.techGet_("buffered");return t&&t.length||(t=be(0,0)),t},h.prototype.bufferedPercent=function(){return Te(this.buffered(),this.duration())},h.prototype.bufferedEnd=function(){var t=this.buffered(),e=this.duration(),i=t.end(t.length-1);return e<i&&(i=e),i},h.prototype.volume=function(t){var e=void 0;return void 0!==t?(e=Math.max(0,Math.min(1,parseFloat(t))),this.cache_.volume=e,this.techCall_("setVolume",e),void(0<e&&this.lastVolume_(e))):(e=parseFloat(this.techGet_("volume")),isNaN(e)?1:e)},h.prototype.muted=function(t){if(void 0===t)return this.techGet_("muted")||!1;this.techCall_("setMuted",t)},h.prototype.defaultMuted=function(t){return void 0!==t?this.techCall_("setDefaultMuted",t):this.techGet_("defaultMuted")||!1},h.prototype.lastVolume_=function(t){if(void 0===t||0===t)return this.cache_.lastVolume;this.cache_.lastVolume=t},h.prototype.supportsFullScreen=function(){return this.techGet_("supportsFullScreen")||!1},h.prototype.isFullscreen=function(t){if(void 0===t)return!!this.isFullscreen_;this.isFullscreen_=!!t},h.prototype.requestFullscreen=function(){var i=Se;this.isFullscreen(!0),i.requestFullscreen?(_t(p,i.fullscreenchange,Ot(this,function t(e){this.isFullscreen(p[i.fullscreenElement]),!1===this.isFullscreen()&&bt(p,i.fullscreenchange,t),this.trigger("fullscreenchange")})),this.el_[i.requestFullscreen]()):this.tech_.supportsFullScreen()?this.techCall_("enterFullScreen"):(this.enterFullWindow(),this.trigger("fullscreenchange"))},h.prototype.exitFullscreen=function(){var t=Se;this.isFullscreen(!1),t.requestFullscreen?p[t.exitFullscreen]():this.tech_.supportsFullScreen()?this.techCall_("exitFullScreen"):(this.exitFullWindow(),this.trigger("fullscreenchange"))},h.prototype.enterFullWindow=function(){this.isFullWindow=!0,this.docOrigOverflow=p.documentElement.style.overflow,_t(p,"keydown",Ot(this,this.fullWindowOnEscKey)),p.documentElement.style.overflow="hidden",j(p.body,"vjs-full-window"),this.trigger("enterFullWindow")},h.prototype.fullWindowOnEscKey=function(t){27===t.keyCode&&(!0===this.isFullscreen()?this.exitFullscreen():this.exitFullWindow())},h.prototype.exitFullWindow=function(){this.isFullWindow=!1,bt(p,"keydown",this.fullWindowOnEscKey),p.documentElement.style.overflow=this.docOrigOverflow,F(p.body,"vjs-full-window"),this.trigger("exitFullWindow")},h.prototype.canPlayType=function(t){for(var e=void 0,i=0,r=this.options_.techOrder;i<r.length;i++){var n=r[i],s=br.getTech(n);if(s||(s=Xt.getComponent(n)),s){if(s.isSupported()&&(e=s.canPlayType(t)))return e}else f.error('The "'+n+'" tech is undefined. Skipped browser support check for that tech.')}return""},h.prototype.selectSource=function(t){var i,r=this,e=this.options_.techOrder.map(function(t){return[t,br.getTech(t)]}).filter(function(t){var e=t[0],i=t[1];return i?i.isSupported():(f.error('The "'+e+'" tech is undefined. Skipped browser support check for that tech.'),!1)}),n=function(t,i,r){var n=void 0;return t.some(function(e){return i.some(function(t){if(n=r(e,t))return!0})}),n},s=function(t,e){var i=t[0];if(t[1].canPlaySource(e,r.options_[i.toLowerCase()]))return{source:e,tech:i}};return(this.options_.sourceOrder?n(t,e,(i=s,function(t,e){return i(e,t)})):n(e,t,s))||!1},h.prototype.src=function(t){var n=this;if("undefined"==typeof t)return this.cache_.src||"";var s=function e(t){if(Array.isArray(t)){var i=[];t.forEach(function(t){t=e(t),Array.isArray(t)?i=i.concat(t):E(t)&&i.push(t)}),t=i}else t="string"==typeof t&&t.trim()?[Ir({src:t})]:E(t)&&"string"==typeof t.src&&t.src&&t.src.trim()?[Ir(t)]:[];return t}(t);s.length?(this.changingSrc_=!0,this.cache_.sources=s,this.updateSourceCaches_(s[0]),Cr(this,s[0],function(t,e){var i,r;if(n.middleware_=e,n.cache_.sources=s,n.updateSourceCaches_(t),n.src_(t))return 1<s.length?n.src(s.slice(1)):(n.changingSrc_=!1,n.setTimeout(function(){this.error({code:4,message:this.localize(this.options_.notSupportedMessage)})},0),void n.triggerReady());i=e,r=n.tech_,i.forEach(function(t){return t.setTech&&t.setTech(r)})})):this.setTimeout(function(){this.error({code:4,message:this.localize(this.options_.notSupportedMessage)})},0)},h.prototype.src_=function(t){var e,i,r=this,n=this.selectSource([t]);return!n||(e=n.tech,i=this.techName_,zt(e)!==zt(i)?(this.changingSrc_=!0,this.loadTech_(n.tech,n.source),this.tech_.ready(function(){r.changingSrc_=!1})):this.ready(function(){this.tech_.constructor.prototype.hasOwnProperty("setSource")?this.techCall_("setSource",t):this.techCall_("src",t.src),this.changingSrc_=!1},!0),!1)},h.prototype.load=function(){this.techCall_("load")},h.prototype.reset=function(){this.loadTech_(this.options_.techOrder[0],null),this.techCall_("reset")},h.prototype.currentSources=function(){var t=this.currentSource(),e=[];return 0!==Object.keys(t).length&&e.push(t),this.cache_.sources||e},h.prototype.currentSource=function(){return this.cache_.source||{}},h.prototype.currentSrc=function(){return this.currentSource()&&this.currentSource().src||""},h.prototype.currentType=function(){return this.currentSource()&&this.currentSource().type||""},h.prototype.preload=function(t){return void 0!==t?(this.techCall_("setPreload",t),void(this.options_.preload=t)):this.techGet_("preload")},h.prototype.autoplay=function(t){return void 0!==t?(this.techCall_("setAutoplay",t),void(this.options_.autoplay=t)):this.techGet_("autoplay",t)},h.prototype.playsinline=function(t){return void 0!==t?(this.techCall_("setPlaysinline",t),this.options_.playsinline=t,this):this.techGet_("playsinline")},h.prototype.loop=function(t){return void 0!==t?(this.techCall_("setLoop",t),void(this.options_.loop=t)):this.techGet_("loop")},h.prototype.poster=function(t){if(void 0===t)return this.poster_;t||(t=""),t!==this.poster_&&(this.poster_=t,this.techCall_("setPoster",t),this.isPosterFromTech_=!1,this.trigger("posterchange"))},h.prototype.handleTechPosterChange_=function(){if((!this.poster_||this.options_.techCanOverridePoster)&&this.tech_&&this.tech_.poster){var t=this.tech_.poster()||"";t!==this.poster_&&(this.poster_=t,this.isPosterFromTech_=!0,this.trigger("posterchange"))}},h.prototype.controls=function(t){if(void 0===t)return!!this.controls_;t=!!t,this.controls_!==t&&(this.controls_=t,this.usingNativeControls()&&this.techCall_("setControls",t),this.controls_?(this.removeClass("vjs-controls-disabled"),this.addClass("vjs-controls-enabled"),this.trigger("controlsenabled"),this.usingNativeControls()||this.addTechControlsListeners_()):(this.removeClass("vjs-controls-enabled"),this.addClass("vjs-controls-disabled"),this.trigger("controlsdisabled"),this.usingNativeControls()||this.removeTechControlsListeners_()))},h.prototype.usingNativeControls=function(t){if(void 0===t)return!!this.usingNativeControls_;t=!!t,this.usingNativeControls_!==t&&(this.usingNativeControls_=t,this.usingNativeControls_?(this.addClass("vjs-using-native-controls"),this.trigger("usingnativecontrols")):(this.removeClass("vjs-using-native-controls"),this.trigger("usingcustomcontrols")))},h.prototype.error=function(t){return void 0===t?this.error_||null:null===t?(this.error_=t,this.removeClass("vjs-error"),void(this.errorDisplay&&this.errorDisplay.close())):(this.error_=new Le(t),this.addClass("vjs-error"),f.error("(CODE:"+this.error_.code+" "+Le.errorTypes[this.error_.code]+")",this.error_.message,this.error_),void this.trigger("error"))},h.prototype.reportUserActivity=function(t){this.userActivity_=!0},h.prototype.userActive=function(t){if(void 0===t)return this.userActive_;if((t=!!t)!==this.userActive_){if(this.userActive_=t,this.userActive_)return this.userActivity_=!0,this.removeClass("vjs-user-inactive"),this.addClass("vjs-user-active"),void this.trigger("useractive");this.tech_&&this.tech_.one("mousemove",function(t){t.stopPropagation(),t.preventDefault()}),this.userActivity_=!1,this.removeClass("vjs-user-active"),this.addClass("vjs-user-inactive"),this.trigger("userinactive")}},h.prototype.listenForUserActivity_=function(){var e=void 0,i=void 0,r=void 0,n=Ot(this,this.reportUserActivity);this.on("mousedown",function(){n(),this.clearInterval(e),e=this.setInterval(n,250)}),this.on("mousemove",function(t){t.screenX===i&&t.screenY===r||(i=t.screenX,r=t.screenY,n())}),this.on("mouseup",function(t){n(),this.clearInterval(e)}),this.on("keydown",n),this.on("keyup",n);var s=void 0;this.setInterval(function(){if(this.userActivity_){this.userActivity_=!1,this.userActive(!0),this.clearTimeout(s);var t=this.options_.inactivityTimeout;t<=0||(s=this.setTimeout(function(){this.userActivity_||this.userActive(!1)},t))}},250)},h.prototype.playbackRate=function(t){if(void 0===t)return this.tech_&&this.tech_.featuresPlaybackRate?this.cache_.lastPlaybackRate||this.techGet_("playbackRate"):1;this.techCall_("setPlaybackRate",t)},h.prototype.defaultPlaybackRate=function(t){return void 0!==t?this.techCall_("setDefaultPlaybackRate",t):this.tech_&&this.tech_.featuresPlaybackRate?this.techGet_("defaultPlaybackRate"):1},h.prototype.isAudio=function(t){if(void 0===t)return!!this.isAudio_;this.isAudio_=!!t},h.prototype.addTextTrack=function(t,e,i){if(this.tech_)return this.tech_.addTextTrack(t,e,i)},h.prototype.addRemoteTextTrack=function(t,e){if(this.tech_)return this.tech_.addRemoteTextTrack(t,e)},h.prototype.removeRemoteTextTrack=function(){var t=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).track,e=void 0===t?arguments[0]:t;if(this.tech_)return this.tech_.removeRemoteTextTrack(e)},h.prototype.getVideoPlaybackQuality=function(){return this.techGet_("getVideoPlaybackQuality")},h.prototype.videoWidth=function(){return this.tech_&&this.tech_.videoWidth&&this.tech_.videoWidth()||0},h.prototype.videoHeight=function(){return this.tech_&&this.tech_.videoHeight&&this.tech_.videoHeight()||0},h.prototype.language=function(t){if(void 0===t)return this.language_;this.language_=String(t).toLowerCase()},h.prototype.languages=function(){return Gt(h.prototype.options_.languages,this.languages_)},h.prototype.toJSON=function(){var t=Gt(this.options_),e=t.tracks;t.tracks=[];for(var i=0;i<e.length;i++){var r=e[i];(r=Gt(r)).player=void 0,t.tracks[i]=r}return t},h.prototype.createModal=function(t,e){var i=this;(e=e||{}).content=t||"";var r=new Ne(this,e);return this.addChild(r),r.on("dispose",function(){i.removeChild(r)}),r.open(),r},h.getTagSettings=function(t){var e={sources:[],tracks:[]},i=q(t),r=i["data-setup"];if(B(t,"vjs-fluid")&&(i.fluid=!0),null!==r){var n=Oe(r||"{}"),s=n[0],a=n[1];s&&f.error(s),C(i,a)}if(C(e,i),t.hasChildNodes())for(var o=t.childNodes,u=0,l=o.length;u<l;u++){var c=o[u],h=c.nodeName.toLowerCase();"source"===h?e.sources.push(q(c)):"track"===h&&e.tracks.push(q(c))}return e},h.prototype.flexNotSupported_=function(){var t=p.createElement("i");return!("flexBasis"in t.style||"webkitFlexBasis"in t.style||"mozFlexBasis"in t.style||"msFlexBasis"in t.style||"msFlexOrder"in t.style)},h}(Xt);Bi.names.forEach(function(t){var e=Bi[t];ms.prototype[e.getterName]=function(){return this.tech_?this.tech_[e.getterName]():(this[e.privateName]=this[e.privateName]||new e.ListClass,this[e.privateName])}}),ms.players={};var gs=g.navigator;ms.prototype.options_={techOrder:br.defaultTechOrder_,html5:{},flash:{},inactivityTimeout:2e3,playbackRates:[],children:["mediaLoader","posterImage","textTrackDisplay","loadingSpinner","bigPlayButton","controlBar","errorDisplay","textTrackSettings","resizeManager"],language:gs&&(gs.languages&&gs.languages[0]||gs.userLanguage||gs.language)||"en",languages:{},notSupportedMessage:"No compatible source was found for this media."},["ended","seeking","seekable","networkState","readyState"].forEach(function(t){ms.prototype[t]=function(){return this.techGet_(t)}}),ps.forEach(function(t){ms.prototype["handleTech"+zt(t)+"_"]=function(){return this.trigger(t)}}),Xt.registerComponent("Player",ms);var ys="plugin",vs="activePlugins_",_s={},bs=function(t){return _s.hasOwnProperty(t)},Ts=function(t){return bs(t)?_s[t]:void 0},Ss=function(t,e){t[vs]=t[vs]||{},t[vs][e]=!0},ks=function(t,e,i){var r=(i?"before":"")+"pluginsetup";t.trigger(r,e),t.trigger(r+":"+e.name,e)},Cs=function(n,s){return s.prototype.name=n,function(){ks(this,{name:n,plugin:s,instance:null},!0);for(var t=arguments.length,e=Array(t),i=0;i<t;i++)e[i]=arguments[i];var r=new(Function.prototype.bind.apply(s,[null].concat([this].concat(e))));return this[n]=function(){return r},ks(this,r.getEventHash()),r}},Es=function(){function s(t){if(y(this,s),this.constructor===s)throw new Error("Plugin must be sub-classed; not directly instantiated.");this.player=t,Vt(this),delete this.trigger,Wt(this,this.constructor.defaultState),Ss(t,this.name),this.dispose=Ot(this,this.dispose),t.on("dispose",this.dispose)}return s.prototype.version=function(){return this.constructor.VERSION},s.prototype.getEventHash=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return t.name=this.name,t.plugin=this.constructor,t.instance=this,t},s.prototype.trigger=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};return Tt(this.eventBusEl_,t,this.getEventHash(e))},s.prototype.handleStateChanged=function(t){},s.prototype.dispose=function(){var t=this.name,e=this.player;this.trigger("dispose"),this.off(),e.off("dispose",this.dispose),e[vs][t]=!1,this.player=this.state=null,e[t]=Cs(t,_s[t])},s.isBasic=function(t){var e="string"==typeof t?Ts(t):t;return"function"==typeof e&&!s.prototype.isPrototypeOf(e.prototype)},s.registerPlugin=function(t,e){if("string"!=typeof t)throw new Error('Illegal plugin name, "'+t+'", must be a string, was '+("undefined"==typeof t?"undefined":v(t))+".");if(bs(t))f.warn('A plugin named "'+t+'" already exists. You may want to avoid re-registering plugins!');else if(ms.prototype.hasOwnProperty(t))throw new Error('Illegal plugin name, "'+t+'", cannot share a name with an existing player method!');if("function"!=typeof e)throw new Error('Illegal plugin for "'+t+'", must be a function, was '+("undefined"==typeof e?"undefined":v(e))+".");var i,r,n;return _s[t]=e,t!==ys&&(s.isBasic(e)?ms.prototype[t]=(i=t,r=e,n=function(){ks(this,{name:i,plugin:r,instance:null},!0);var t=r.apply(this,arguments);return Ss(this,i),ks(this,{name:i,plugin:r,instance:t}),t},Object.keys(r).forEach(function(t){n[t]=r[t]}),n):ms.prototype[t]=Cs(t,e)),e},s.deregisterPlugin=function(t){if(t===ys)throw new Error("Cannot de-register base plugin.");bs(t)&&(delete _s[t],delete ms.prototype[t])},s.getPlugins=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:Object.keys(_s),i=void 0;return t.forEach(function(t){var e=Ts(t);e&&((i=i||{})[t]=e)}),i},s.getPluginVersion=function(t){var e=Ts(t);return e&&e.VERSION||""},s}();Es.getPlugin=Ts,Es.BASE_PLUGIN_NAME=ys,Es.registerPlugin(ys,Es),ms.prototype.usingPlugin=function(t){return!!this[vs]&&!0===this[vs][t]},ms.prototype.hasPlugin=function(t){return!!bs(t)};var ws=function(t){return 0===t.indexOf("#")?t.slice(1):t};function As(t,i,e){var r=As.getPlayer(t);if(r)return i&&f.warn('Player "'+t+'" is already initialised. Options will not be applied.'),e&&r.ready(e),r;var n="string"==typeof t?nt("#"+ws(t)):t;if(!I(n))throw new TypeError("The element or ID supplied is not valid. (videojs)");p.body.contains(n)||f.warn("The element supplied is not included in the DOM"),i=i||{},As.hooks("beforesetup").forEach(function(t){var e=t(n,Gt(i));E(e)&&!Array.isArray(e)?i=Gt(i,e):f.error("please return an object in beforesetup hooks")});var s=Xt.getComponent("Player");return r=new s(n,i,e),As.hooks("setup").forEach(function(t){return t(r)}),r}if(As.hooks_={},As.hooks=function(t,e){return As.hooks_[t]=As.hooks_[t]||[],e&&(As.hooks_[t]=As.hooks_[t].concat(e)),As.hooks_[t]},As.hook=function(t,e){As.hooks(t,e)},As.hookOnce=function(i,t){As.hooks(i,[].concat(t).map(function(e){return function t(){return As.removeHook(i,t),e.apply(void 0,arguments)}}))},As.removeHook=function(t,e){var i=As.hooks(t).indexOf(e);return!(i<=-1)&&(As.hooks_[t]=As.hooks_[t].slice(),As.hooks_[t].splice(i,1),!0)},!0!==g.VIDEOJS_NO_DYNAMIC_STYLE&&x()){var Ls=nt(".vjs-styles-defaults");if(!Ls){Ls=Lt("vjs-styles-defaults");var Ps=nt("head");Ps&&Ps.insertBefore(Ls,Ps.firstChild),Pt(Ls,"\n      .video-js {\n        width: 300px;\n        height: 150px;\n      }\n\n      .vjs-fluid {\n        padding-top: 56.25%\n      }\n    ")}}At(1,As),As.VERSION=d,As.options=ms.prototype.options_,As.getPlayers=function(){return ms.players},As.getPlayer=function(t){var e=ms.players,i=void 0;if("string"==typeof t){var r=ws(t),n=e[r];if(n)return n;i=nt("#"+r)}else i=t;if(I(i)){var s=i,a=s.player,o=s.playerId;if(a||e[o])return a||e[o]}},As.getAllPlayers=function(){return Object.keys(ms.players).map(function(t){return ms.players[t]}).filter(Boolean)},As.players=ms.players,As.getComponent=Xt.getComponent,As.registerComponent=function(t,e){br.isTech(e)&&f.warn("The "+t+" tech was registered as a component. It should instead be registered using videojs.registerTech(name, tech)"),Xt.registerComponent.call(Xt,t,e)},As.getTech=br.getTech,As.registerTech=br.registerTech,As.use=function(t,e){Tr[t]=Tr[t]||[],Tr[t].push(e)},Object.defineProperty(As,"middleware",{value:{},writeable:!1,enumerable:!0}),Object.defineProperty(As.middleware,"TERMINATOR",{value:kr,writeable:!1,enumerable:!0}),As.browser=ye,As.TOUCH_ENABLED=ge,As.extend=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},i=function(){t.apply(this,arguments)},r={};for(var n in"object"===("undefined"==typeof e?"undefined":v(e))?(e.constructor!==Object.prototype.constructor&&(i=e.constructor),r=e):"function"==typeof e&&(i=e),function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+("undefined"==typeof e?"undefined":v(e)));t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(t.super_=e)}(i,t),r)r.hasOwnProperty(n)&&(i.prototype[n]=r[n]);return i},As.mergeOptions=Gt,As.bind=Ot,As.registerPlugin=Es.registerPlugin,As.plugin=function(t,e){return f.warn("videojs.plugin() is deprecated; use videojs.registerPlugin() instead"),Es.registerPlugin(t,e)},As.getPlugins=Es.getPlugins,As.getPlugin=Es.getPlugin,As.getPluginVersion=Es.getPluginVersion,As.addLanguage=function(t,e){var i;return t=(""+t).toLowerCase(),As.options.languages=Gt(As.options.languages,((i={})[t]=e,i)),As.options.languages[t]},As.log=f,As.createTimeRange=As.createTimeRanges=be,As.formatTime=Yr,As.setFormatTime=function(t){Xr=t},As.resetFormatTime=function(){Xr=Gr},As.parseUrl=Je,As.isCrossOrigin=ei,As.EventTarget=Dt,As.on=_t,As.one=St,As.off=bt,As.trigger=Tt,As.xhr=Ci,As.TextTrack=Oi,As.AudioTrack=xi,As.VideoTrack=Ii,["isEl","isTextNode","createEl","hasClass","addClass","removeClass","toggleClass","setAttributes","getAttributes","emptyEl","appendContent","insertContent"].forEach(function(t){As[t]=function(){return f.warn("videojs."+t+"() is deprecated; use videojs.dom."+t+"() instead"),at[t].apply(null,arguments)}}),As.computedStyle=A,As.dom=at,As.url=ii;var Os=e(function(t,e){var i,c,r,n,h;i=/^((?:[a-zA-Z0-9+\-.]+:)?)(\/\/[^\/\;?#]*)?(.*?)??(;.*?)?(\?.*?)?(#.*?)?$/,c=/^([^\/;?#]*)(.*)$/,r=/(?:\/|^)\.(?=\/)/g,n=/(?:\/|^)\.\.\/(?!\.\.\/).*?(?=\/)/g,h={buildAbsoluteURL:function(t,e,i){if(i=i||{},t=t.trim(),!(e=e.trim())){if(!i.alwaysNormalize)return t;var r=h.parseURL(t);if(!r)throw new Error("Error trying to parse base URL.");return r.path=h.normalizePath(r.path),h.buildURLFromParts(r)}var n=h.parseURL(e);if(!n)throw new Error("Error trying to parse relative URL.");if(n.scheme)return i.alwaysNormalize?(n.path=h.normalizePath(n.path),h.buildURLFromParts(n)):e;var s=h.parseURL(t);if(!s)throw new Error("Error trying to parse base URL.");if(!s.netLoc&&s.path&&"/"!==s.path[0]){var a=c.exec(s.path);s.netLoc=a[1],s.path=a[2]}s.netLoc&&!s.path&&(s.path="/");var o={scheme:s.scheme,netLoc:n.netLoc,path:null,params:n.params,query:n.query,fragment:n.fragment};if(!n.netLoc&&(o.netLoc=s.netLoc,"/"!==n.path[0]))if(n.path){var u=s.path,l=u.substring(0,u.lastIndexOf("/")+1)+n.path;o.path=h.normalizePath(l)}else o.path=s.path,n.params||(o.params=s.params,n.query||(o.query=s.query));return null===o.path&&(o.path=i.alwaysNormalize?h.normalizePath(n.path):n.path),h.buildURLFromParts(o)},parseURL:function(t){var e=i.exec(t);return e?{scheme:e[1]||"",netLoc:e[2]||"",path:e[3]||"",params:e[4]||"",query:e[5]||"",fragment:e[6]||""}:null},normalizePath:function(t){for(t=t.split("").reverse().join("").replace(r,"");t.length!==(t=t.replace(n,"")).length;);return t.split("").reverse().join("")},buildURLFromParts:function(t){return t.scheme+t.netLoc+t.path+t.params+t.query+t.fragment}},t.exports=h}),xs=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},Is=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r])}return t},Ds=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+("undefined"==typeof e?"undefined":v(e)));t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},Rs=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==("undefined"==typeof e?"undefined":v(e))&&"function"!=typeof e?t:e},Ms=function(){function t(){xs(this,t),this.listeners={}}return t.prototype.on=function(t,e){this.listeners[t]||(this.listeners[t]=[]),this.listeners[t].push(e)},t.prototype.off=function(t,e){if(!this.listeners[t])return!1;var i=this.listeners[t].indexOf(e);return this.listeners[t].splice(i,1),-1<i},t.prototype.trigger=function(t){var e=this.listeners[t],i=void 0,r=void 0,n=void 0;if(e)if(2===arguments.length)for(r=e.length,i=0;i<r;++i)e[i].call(this,arguments[1]);else for(n=Array.prototype.slice.call(arguments,1),r=e.length,i=0;i<r;++i)e[i].apply(this,n)},t.prototype.dispose=function(){this.listeners={}},t.prototype.pipe=function(e){this.on("data",function(t){e.push(t)})},t}(),Us=function(e){function i(){xs(this,i);var t=Rs(this,e.call(this));return t.buffer="",t}return Ds(i,e),i.prototype.push=function(t){var e=void 0;for(this.buffer+=t,e=this.buffer.indexOf("\n");-1<e;e=this.buffer.indexOf("\n"))this.trigger("data",this.buffer.substring(0,e)),this.buffer=this.buffer.substring(e+1)},i}(Ms),Ns=function(t){for(var e=t.split(new RegExp('(?:^|,)((?:[^=]*)=(?:"[^"]*"|[^,]*))')),i={},r=e.length,n=void 0;r--;)""!==e[r]&&((n=/([^=]*)=(.*)/.exec(e[r]).slice(1))[0]=n[0].replace(/^\s+|\s+$/g,""),n[1]=n[1].replace(/^\s+|\s+$/g,""),n[1]=n[1].replace(/^['"](.*)['"]$/g,"$1"),i[n[0]]=n[1]);return i},Bs=function(e){function i(){xs(this,i);var t=Rs(this,e.call(this));return t.customParsers=[],t}return Ds(i,e),i.prototype.push=function(t){var e=void 0,i=void 0;if(0!==(t=t.replace(/^[\u0000\s]+|[\u0000\s]+$/g,"")).length)if("#"===t[0]){for(var r=0;r<this.customParsers.length;r++)if(this.customParsers[r].call(this,t))return;if(0===t.indexOf("#EXT"))if(t=t.replace("\r",""),e=/^#EXTM3U/.exec(t))this.trigger("data",{type:"tag",tagType:"m3u"});else{if(e=/^#EXTINF:?([0-9\.]*)?,?(.*)?$/.exec(t))return i={type:"tag",tagType:"inf"},e[1]&&(i.duration=parseFloat(e[1])),e[2]&&(i.title=e[2]),void this.trigger("data",i);if(e=/^#EXT-X-TARGETDURATION:?([0-9.]*)?/.exec(t))return i={type:"tag",tagType:"targetduration"},e[1]&&(i.duration=parseInt(e[1],10)),void this.trigger("data",i);if(e=/^#ZEN-TOTAL-DURATION:?([0-9.]*)?/.exec(t))return i={type:"tag",tagType:"totalduration"},e[1]&&(i.duration=parseInt(e[1],10)),void this.trigger("data",i);if(e=/^#EXT-X-VERSION:?([0-9.]*)?/.exec(t))return i={type:"tag",tagType:"version"},e[1]&&(i.version=parseInt(e[1],10)),void this.trigger("data",i);if(e=/^#EXT-X-MEDIA-SEQUENCE:?(\-?[0-9.]*)?/.exec(t))return i={type:"tag",tagType:"media-sequence"},e[1]&&(i.number=parseInt(e[1],10)),void this.trigger("data",i);if(e=/^#EXT-X-DISCONTINUITY-SEQUENCE:?(\-?[0-9.]*)?/.exec(t))return i={type:"tag",tagType:"discontinuity-sequence"},e[1]&&(i.number=parseInt(e[1],10)),void this.trigger("data",i);if(e=/^#EXT-X-PLAYLIST-TYPE:?(.*)?$/.exec(t))return i={type:"tag",tagType:"playlist-type"},e[1]&&(i.playlistType=e[1]),void this.trigger("data",i);if(e=/^#EXT-X-BYTERANGE:?([0-9.]*)?@?([0-9.]*)?/.exec(t))return i={type:"tag",tagType:"byterange"},e[1]&&(i.length=parseInt(e[1],10)),e[2]&&(i.offset=parseInt(e[2],10)),void this.trigger("data",i);if(e=/^#EXT-X-ALLOW-CACHE:?(YES|NO)?/.exec(t))return i={type:"tag",tagType:"allow-cache"},e[1]&&(i.allowed=!/NO/.test(e[1])),void this.trigger("data",i);if(e=/^#EXT-X-MAP:?(.*)$/.exec(t)){if(i={type:"tag",tagType:"map"},e[1]){var n=Ns(e[1]);if(n.URI&&(i.uri=n.URI),n.BYTERANGE){var s=n.BYTERANGE.split("@"),a=s[0],o=s[1];i.byterange={},a&&(i.byterange.length=parseInt(a,10)),o&&(i.byterange.offset=parseInt(o,10))}}this.trigger("data",i)}else if(e=/^#EXT-X-STREAM-INF:?(.*)$/.exec(t)){if(i={type:"tag",tagType:"stream-inf"},e[1]){if(i.attributes=Ns(e[1]),i.attributes.RESOLUTION){var u=i.attributes.RESOLUTION.split("x"),l={};u[0]&&(l.width=parseInt(u[0],10)),u[1]&&(l.height=parseInt(u[1],10)),i.attributes.RESOLUTION=l}i.attributes.BANDWIDTH&&(i.attributes.BANDWIDTH=parseInt(i.attributes.BANDWIDTH,10)),i.attributes["PROGRAM-ID"]&&(i.attributes["PROGRAM-ID"]=parseInt(i.attributes["PROGRAM-ID"],10))}this.trigger("data",i)}else{if(e=/^#EXT-X-MEDIA:?(.*)$/.exec(t))return i={type:"tag",tagType:"media"},e[1]&&(i.attributes=Ns(e[1])),void this.trigger("data",i);if(e=/^#EXT-X-ENDLIST/.exec(t))this.trigger("data",{type:"tag",tagType:"endlist"});else if(e=/^#EXT-X-DISCONTINUITY/.exec(t))this.trigger("data",{type:"tag",tagType:"discontinuity"});else{if(e=/^#EXT-X-PROGRAM-DATE-TIME:?(.*)$/.exec(t))return i={type:"tag",tagType:"program-date-time"},e[1]&&(i.dateTimeString=e[1],i.dateTimeObject=new Date(e[1])),void this.trigger("data",i);if(e=/^#EXT-X-KEY:?(.*)$/.exec(t))return i={type:"tag",tagType:"key"},e[1]&&(i.attributes=Ns(e[1]),i.attributes.IV&&("0x"===i.attributes.IV.substring(0,2).toLowerCase()&&(i.attributes.IV=i.attributes.IV.substring(2)),i.attributes.IV=i.attributes.IV.match(/.{8}/g),i.attributes.IV[0]=parseInt(i.attributes.IV[0],16),i.attributes.IV[1]=parseInt(i.attributes.IV[1],16),i.attributes.IV[2]=parseInt(i.attributes.IV[2],16),i.attributes.IV[3]=parseInt(i.attributes.IV[3],16),i.attributes.IV=new Uint32Array(i.attributes.IV))),void this.trigger("data",i);if(e=/^#EXT-X-START:?(.*)$/.exec(t))return i={type:"tag",tagType:"start"},e[1]&&(i.attributes=Ns(e[1]),i.attributes["TIME-OFFSET"]=parseFloat(i.attributes["TIME-OFFSET"]),i.attributes.PRECISE=/YES/.test(i.attributes.PRECISE)),void this.trigger("data",i);if(e=/^#EXT-X-CUE-OUT-CONT:?(.*)?$/.exec(t))return i={type:"tag",tagType:"cue-out-cont"},e[1]?i.data=e[1]:i.data="",void this.trigger("data",i);if(e=/^#EXT-X-CUE-OUT:?(.*)?$/.exec(t))return i={type:"tag",tagType:"cue-out"},e[1]?i.data=e[1]:i.data="",void this.trigger("data",i);if(e=/^#EXT-X-CUE-IN:?(.*)?$/.exec(t))return i={type:"tag",tagType:"cue-in"},e[1]?i.data=e[1]:i.data="",void this.trigger("data",i);this.trigger("data",{type:"tag",data:t.slice(4)})}}}else this.trigger("data",{type:"comment",text:t.slice(1)})}else this.trigger("data",{type:"uri",uri:t})},i.prototype.addParser=function(t){var e=this,i=t.expression,r=t.customType,n=t.dataParser,s=t.segment;"function"!=typeof n&&(n=function(t){return t}),this.customParsers.push(function(t){if(i.exec(t))return e.trigger("data",{type:"custom",data:n(t),customType:r,segment:s}),!0})},i}(Ms),js=function(e){function i(){xs(this,i);var t=Rs(this,e.call(this));t.lineStream=new Us,t.parseStream=new Bs,t.lineStream.pipe(t.parseStream);var n=t,s=[],a={},o=void 0,u=void 0,l={AUDIO:{},VIDEO:{},"CLOSED-CAPTIONS":{},SUBTITLES:{}},c=0;return t.manifest={allowCache:!0,discontinuityStarts:[],segments:[]},t.parseStream.on("data",function(e){var i=void 0,r=void 0;({tag:function(){({"allow-cache":function(){this.manifest.allowCache=e.allowed,"allowed"in e||(this.trigger("info",{message:"defaulting allowCache to YES"}),this.manifest.allowCache=!0)},byterange:function(){var t={};"length"in e&&((a.byterange=t).length=e.length,"offset"in e||(this.trigger("info",{message:"defaulting offset to zero"}),e.offset=0)),"offset"in e&&((a.byterange=t).offset=e.offset)},endlist:function(){this.manifest.endList=!0},inf:function(){"mediaSequence"in this.manifest||(this.manifest.mediaSequence=0,this.trigger("info",{message:"defaulting media sequence to zero"})),"discontinuitySequence"in this.manifest||(this.manifest.discontinuitySequence=0,this.trigger("info",{message:"defaulting discontinuity sequence to zero"})),0<e.duration&&(a.duration=e.duration),0===e.duration&&(a.duration=.01,this.trigger("info",{message:"updating zero segment duration to a small value"})),this.manifest.segments=s},key:function(){e.attributes?"NONE"!==e.attributes.METHOD?e.attributes.URI?(e.attributes.METHOD||this.trigger("warn",{message:"defaulting key method to AES-128"}),u={method:e.attributes.METHOD||"AES-128",uri:e.attributes.URI},"undefined"!=typeof e.attributes.IV&&(u.iv=e.attributes.IV)):this.trigger("warn",{message:"ignoring key declaration without URI"}):u=null:this.trigger("warn",{message:"ignoring key declaration without attribute list"})},"media-sequence":function(){isFinite(e.number)?this.manifest.mediaSequence=e.number:this.trigger("warn",{message:"ignoring invalid media sequence: "+e.number})},"discontinuity-sequence":function(){isFinite(e.number)?(this.manifest.discontinuitySequence=e.number,c=e.number):this.trigger("warn",{message:"ignoring invalid discontinuity sequence: "+e.number})},"playlist-type":function(){/VOD|EVENT/.test(e.playlistType)?this.manifest.playlistType=e.playlistType:this.trigger("warn",{message:"ignoring unknown playlist type: "+e.playlist})},map:function(){o={},e.uri&&(o.uri=e.uri),e.byterange&&(o.byterange=e.byterange)},"stream-inf":function(){this.manifest.playlists=s,this.manifest.mediaGroups=this.manifest.mediaGroups||l,e.attributes?(a.attributes||(a.attributes={}),Is(a.attributes,e.attributes)):this.trigger("warn",{message:"ignoring empty stream-inf attributes"})},media:function(){if(this.manifest.mediaGroups=this.manifest.mediaGroups||l,e.attributes&&e.attributes.TYPE&&e.attributes["GROUP-ID"]&&e.attributes.NAME){var t=this.manifest.mediaGroups[e.attributes.TYPE];t[e.attributes["GROUP-ID"]]=t[e.attributes["GROUP-ID"]]||{},i=t[e.attributes["GROUP-ID"]],(r={default:/yes/i.test(e.attributes.DEFAULT)}).default?r.autoselect=!0:r.autoselect=/yes/i.test(e.attributes.AUTOSELECT),e.attributes.LANGUAGE&&(r.language=e.attributes.LANGUAGE),e.attributes.URI&&(r.uri=e.attributes.URI),e.attributes["INSTREAM-ID"]&&(r.instreamId=e.attributes["INSTREAM-ID"]),e.attributes.CHARACTERISTICS&&(r.characteristics=e.attributes.CHARACTERISTICS),e.attributes.FORCED&&(r.forced=/yes/i.test(e.attributes.FORCED)),i[e.attributes.NAME]=r}else this.trigger("warn",{message:"ignoring incomplete or missing media group"})},discontinuity:function(){c+=1,a.discontinuity=!0,this.manifest.discontinuityStarts.push(s.length)},"program-date-time":function(){"undefined"==typeof this.manifest.dateTimeString&&(this.manifest.dateTimeString=e.dateTimeString,this.manifest.dateTimeObject=e.dateTimeObject),a.dateTimeString=e.dateTimeString,a.dateTimeObject=e.dateTimeObject},targetduration:function(){!isFinite(e.duration)||e.duration<0?this.trigger("warn",{message:"ignoring invalid target duration: "+e.duration}):this.manifest.targetDuration=e.duration},totalduration:function(){!isFinite(e.duration)||e.duration<0?this.trigger("warn",{message:"ignoring invalid total duration: "+e.duration}):this.manifest.totalDuration=e.duration},start:function(){e.attributes&&!isNaN(e.attributes["TIME-OFFSET"])?this.manifest.start={timeOffset:e.attributes["TIME-OFFSET"],precise:e.attributes.PRECISE}:this.trigger("warn",{message:"ignoring start declaration without appropriate attribute list"})},"cue-out":function(){a.cueOut=e.data},"cue-out-cont":function(){a.cueOutCont=e.data},"cue-in":function(){a.cueIn=e.data}}[e.tagType]||function(){}).call(n)},uri:function(){a.uri=e.uri,s.push(a),!this.manifest.targetDuration||"duration"in a||(this.trigger("warn",{message:"defaulting segment duration to the target duration"}),a.duration=this.manifest.targetDuration),u&&(a.key=u),a.timeline=c,o&&(a.map=o),a={}},comment:function(){},custom:function(){e.segment?(a.custom=a.custom||{},a.custom[e.customType]=e.data):(this.manifest.custom=this.manifest.custom||{},this.manifest.custom[e.customType]=e.data)}})[e.type].call(n)}),t}return Ds(i,e),i.prototype.push=function(t){this.lineStream.push(t)},i.prototype.end=function(){this.lineStream.push("\n")},i.prototype.addParser=function(t){this.parseStream.addParser(t)},i}(Ms),Fs=function(t){var e,i=t.attributes,r=t.segments,n={attributes:(e={NAME:i.id,AUDIO:"audio",SUBTITLES:"subs",RESOLUTION:{width:i.width,height:i.height},CODECS:i.codecs,BANDWIDTH:i.bandwidth},e["PROGRAM-ID"]=1,e),uri:"",endList:"static"===(i.type||"static"),timeline:i.periodIndex,resolvedUri:"",targetDuration:i.duration,segments:r,mediaSequence:r.length?r[0].number:1};return i.contentProtection&&(n.contentProtection=i.contentProtection),n},Hs=function(t){return!!t&&"object"===("undefined"==typeof t?"undefined":v(t))},Vs=function r(){for(var t=arguments.length,e=Array(t),i=0;i<t;i++)e[i]=arguments[i];return e.reduce(function(e,i){return Object.keys(i).forEach(function(t){Array.isArray(e[t])&&Array.isArray(i[t])?e[t]=e[t].concat(i[t]):Hs(e[t])&&Hs(i[t])?e[t]=r(e[t],i[t]):e[t]=i[t]}),e},{})},qs=function(t,e){return/^[a-z]+:/i.test(e)?e:(/\/\//i.test(t)||(t=Os.buildAbsoluteURL(g.location.href,t)),Os.buildAbsoluteURL(t,e))},Ws=function(t){var e=t.baseUrl,i=void 0===e?"":e,r=t.source,n=void 0===r?"":r,s=t.range,a=void 0===s?"":s,o={uri:n,resolvedUri:qs(i||"",n)};if(a){var u=a.split("-"),l=parseInt(u[0],10),c=parseInt(u[1],10);o.byterange={length:c-l,offset:l}}return o},zs=function(t,e){for(var i,r,n,s,a,o,u,l,c,h,d,p,f=t.type,m=void 0===f?"static":f,g=t.minimumUpdatePeriod,y=void 0===g?0:g,v=t.media,_=void 0===v?"":v,b=t.sourceDuration,T=t.timescale,S=void 0===T?1:T,k=t.startNumber,C=void 0===k?1:k,E=t.periodIndex,w=[],A=-1,L=0;L<e.length;L++){var P=e[L],O=P.d,x=P.r||0,I=P.t||0;A<0&&(A=I),I&&A<I&&(A=I);var D=void 0;if(x<0){var R=L+1;R===e.length?"dynamic"===m&&0<y&&0<_.indexOf("$Number$")?(r=A,n=O,void 0,s=(i=t).NOW,a=i.clientOffset,o=i.availabilityStartTime,u=i.timescale,l=void 0===u?1:u,c=i.start,h=void 0===c?0:c,d=i.minimumUpdatePeriod,p=(s+a)/1e3+(void 0===d?0:d)-(o+h),D=Math.ceil((p*l-r)/n)):D=(b*S-A)/O:D=(e[R].t-A)/O}else D=x+1;for(var M=C+w.length+D,U=C+w.length;U<M;)w.push({number:U,duration:O/S,time:A,timeline:E}),A+=O,U++}return w},Gs=function(t){return t.reduce(function(t,e){return t.concat(e)},[])},Xs=function(t){if(!t.length)return[];for(var e=[],i=0;i<t.length;i++)e.push(t[i]);return e},Ys={static:function(t){var e=t.duration,i=t.timescale,r=void 0===i?1:i,n=t.sourceDuration;return{start:0,end:Math.ceil(n/(e/r))}},dynamic:function(t){var e=t.NOW,i=t.clientOffset,r=t.availabilityStartTime,n=t.timescale,s=void 0===n?1:n,a=t.duration,o=t.start,u=void 0===o?0:o,l=t.minimumUpdatePeriod,c=void 0===l?0:l,h=t.timeShiftBufferDepth,d=void 0===h?1/0:h,p=(e+i)/1e3,f=r+u,m=p+c-f,g=Math.ceil(m*s/a),y=Math.floor((p-f-d)*s/a),v=Math.floor((p-f)*s/a);return{start:Math.max(0,y),end:Math.min(g,v)}}},$s=function(t){var o,e=t.type,i=void 0===e?"static":e,r=t.duration,n=t.timescale,s=void 0===n?1:n,a=t.sourceDuration,u=Ys[i](t),l=function(t,e){for(var i=[],r=t;r<e;r++)i.push(r);return i}(u.start,u.end).map((o=t,function(t,e){var i=o.duration,r=o.timescale,n=void 0===r?1:r,s=o.periodIndex,a=o.startNumber;return{number:(void 0===a?1:a)+t,duration:i/n,timeline:s,time:e*i}}));if("static"===i){var c=l.length-1;l[c].duration=a-r/s*c}return l},Ks=/\$([A-z]*)(?:(%0)([0-9]+)d)?\$/g,Qs=function(t,e){return t.replace(Ks,(s=e,function(t,e,i,r){if("$$"===t)return"$";if("undefined"==typeof s[e])return t;var n=""+s[e];return"RepresentationID"===e?n:(r=i?parseInt(r,10):1)<=n.length?n:""+new Array(r-n.length+1).join("0")+n}));var s},Js=function(i,t){var e,r,n={RepresentationID:i.id,Bandwidth:i.bandwidth||0},s=i.initialization,a=void 0===s?{sourceURL:"",range:""}:s,o=Ws({baseUrl:i.baseUrl,source:Qs(a.sourceURL,n),range:a.range});return(r=t,(e=i).duration||r?e.duration?$s(e):zs(e,r):[{number:e.startNumber||1,duration:e.sourceDuration,time:0,timeline:e.periodIndex}]).map(function(t){n.Number=t.number,n.Time=t.time;var e=Qs(i.media||"",n);return{uri:e,timeline:t.timeline,duration:t.duration,resolvedUri:qs(i.baseUrl||"",e),map:o,number:t.number}})},Zs="INVALID_NUMBER_OF_PERIOD",ta="DASH_EMPTY_MANIFEST",ea="DASH_INVALID_XML",ia="NO_BASE_URL",ra="SEGMENT_TIME_UNSPECIFIED",na="UNSUPPORTED_UTC_TIMING_SCHEME",sa=function(u,t){var e=u.duration,i=u.segmentUrls,r=void 0===i?[]:i;if(!e&&!t||e&&t)throw new Error(ra);var n=r.map(function(t){return i=t,r=(e=u).baseUrl,n=e.initialization,a=Ws({baseUrl:r,source:(s=void 0===n?{}:n).sourceURL,range:s.range}),(o=Ws({baseUrl:r,source:i.media,range:i.mediaRange})).map=a,o;var e,i,r,n,s,a,o}),s=void 0;return e&&(s=$s(u)),t&&(s=zs(u,t)),s.map(function(t,e){if(n[e]){var i=n[e];return i.timeline=t.timeline,i.duration=t.duration,i.number=t.number,i}}).filter(function(t){return t})},aa=function(t){var e=t.baseUrl,i=t.initialization,r=void 0===i?{}:i,n=t.sourceDuration,s=t.timescale,a=void 0===s?1:s,o=t.indexRange,u=void 0===o?"":o,l=t.duration;if(!e)throw new Error(ia);var c=Ws({baseUrl:e,source:r.sourceURL,range:r.range}),h=Ws({baseUrl:e,source:e,range:u});if(h.map=c,l){var d=$s(t);d.length&&(h.duration=d[0].duration,h.timeline=d[0].timeline)}else n&&(h.duration=n/a,h.timeline=0);return h.number=0,[h]},oa=function(t){var e=t.attributes,i=t.segmentInfo,r=void 0,n=void 0;if(i.template?(n=Js,r=Vs(e,i.template)):i.base?(n=aa,r=Vs(e,i.base)):i.list&&(n=sa,r=Vs(e,i.list)),!n)return{attributes:e};var s=n(r,i.timeline);if(r.duration){var a=r,o=a.duration,u=a.timescale,l=void 0===u?1:u;r.duration=o/l}else s.length?r.duration=s.reduce(function(t,e){return Math.max(t,Math.ceil(e.duration))},0):r.duration=0;return{attributes:r,segments:s}},ua=function(t,e){return Xs(t.childNodes).filter(function(t){return t.tagName===e})},la=function(t){return t.textContent.trim()},ca=function(t){var e=/P(?:(\d*)Y)?(?:(\d*)M)?(?:(\d*)D)?(?:T(?:(\d*)H)?(?:(\d*)M)?(?:([\d.]*)S)?)?/.exec(t);if(!e)return 0;var i=e.slice(1),r=i[0],n=i[1],s=i[2],a=i[3],o=i[4],u=i[5];return 31536e3*parseFloat(r||0)+2592e3*parseFloat(n||0)+86400*parseFloat(s||0)+3600*parseFloat(a||0)+60*parseFloat(o||0)+parseFloat(u||0)},ha={mediaPresentationDuration:function(t){return ca(t)},availabilityStartTime:function(t){return/^\d+-\d+-\d+T\d+:\d+:\d+(\.\d+)?$/.test(e=t)&&(e+="Z"),Date.parse(e)/1e3;var e},minimumUpdatePeriod:function(t){return ca(t)},timeShiftBufferDepth:function(t){return ca(t)},start:function(t){return ca(t)},width:function(t){return parseInt(t,10)},height:function(t){return parseInt(t,10)},bandwidth:function(t){return parseInt(t,10)},startNumber:function(t){return parseInt(t,10)},timescale:function(t){return parseInt(t,10)},duration:function(t){var e=parseInt(t,10);return isNaN(e)?ca(t):e},d:function(t){return parseInt(t,10)},t:function(t){return parseInt(t,10)},r:function(t){return parseInt(t,10)},DEFAULT:function(t){return t}},da=function(t){return t&&t.attributes?Xs(t.attributes).reduce(function(t,e){var i=ha[e.name]||ha.DEFAULT;return t[e.name]=i(e.value),t},{}):{}};var pa,fa,ma={"urn:uuid:1077efec-c0b2-4d02-ace3-3c1e52e2fb4b":"org.w3.clearkey","urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed":"com.widevine.alpha","urn:uuid:9a04f079-9840-4286-ab92-e65be0885f95":"com.microsoft.playready","urn:uuid:f239e769-efa3-4850-9c16-a903c6932efb":"com.adobe.primetime"},ga=function(t,i){return i.length?Gs(t.map(function(e){return i.map(function(t){return qs(e,la(t))})})):t},ya=function(t){var e=ua(t,"SegmentTemplate")[0],i=ua(t,"SegmentList")[0],r=i&&ua(i,"SegmentURL").map(function(t){return Vs({tag:"SegmentURL"},da(t))}),n=ua(t,"SegmentBase")[0],s=i||e,a=s&&ua(s,"SegmentTimeline")[0],o=i||n||e,u=o&&ua(o,"Initialization")[0],l=e&&da(e);l&&u?l.initialization=u&&da(u):l&&l.initialization&&(l.initialization={sourceURL:l.initialization});var c={template:l,timeline:a&&ua(a,"S").map(function(t){return da(t)}),list:i&&Vs(da(i),{segmentUrls:r,initialization:da(u)}),base:n&&Vs(da(n),{initialization:da(u)})};return Object.keys(c).forEach(function(t){c[t]||delete c[t]}),c},va=function(t){return t.reduce(function(t,e){var i=da(e),r=ma[i.schemeIdUri];if(r){t[r]={attributes:i};var n=ua(e,"cenc:pssh")[0];if(n){var s=la(n),a=s&&function(t){for(var e=g.atob(t),i=new Uint8Array(e.length),r=0;r<e.length;r++)i[r]=e.charCodeAt(r);return i}(s);t[r].pssh=a}}return t},{})},_a=function(p,f,m){return function(t){var e=da(t),i=ga(f,ua(t,"BaseURL")),r=ua(t,"Role")[0],n={role:da(r)},s=Vs(p,e,n),a=va(ua(t,"ContentProtection"));Object.keys(a).length&&(s=Vs(s,{contentProtection:a}));var o,u,l,c=ya(t),h=ua(t,"Representation"),d=Vs(m,c);return Gs(h.map((o=s,u=i,l=d,function(t){var e=ua(t,"BaseURL"),i=ga(u,e),r=Vs(o,da(t)),n=ya(t);return i.map(function(t){return{segmentInfo:Vs(l,n),attributes:Vs(r,{baseUrl:t})}})})))}},ba=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},i=e.manifestUri,r=void 0===i?"":i,n=e.NOW,s=void 0===n?Date.now():n,a=e.clientOffset,o=void 0===a?0:a,u=ua(t,"Period");if(1!==u.length)throw new Error(Zs);var l,c,h=da(t),d=ga([r],ua(t,"BaseURL"));return h.sourceDuration=h.mediaPresentationDuration||0,h.NOW=s,h.clientOffset=o,Gs(u.map((l=h,c=d,function(t,e){var i=ga(c,ua(t,"BaseURL")),r=da(t),n=Vs(l,r,{periodIndex:e}),s=ua(t,"AdaptationSet"),a=ya(t);return Gs(s.map(_a(n,i,a)))})))},Ta=function(t){if(""===t)throw new Error(ta);var e=(new g.DOMParser).parseFromString(t,"application/xml"),i=e&&"MPD"===e.documentElement.tagName?e.documentElement:null;if(!i||i&&0<i.getElementsByTagName("parsererror").length)throw new Error(ea);return i},Sa=function(t,e){return function(t){var e;if(!t.length)return{};var i=t[0].attributes,r=i.sourceDuration,n=i.minimumUpdatePeriod,s=void 0===n?0:n,a=t.filter(function(t){var e=t.attributes;return"video/mp4"===e.mimeType||"video"===e.contentType}).map(Fs),o=t.filter(function(t){var e=t.attributes;return"audio/mp4"===e.mimeType||"audio"===e.contentType}),u=t.filter(function(t){var e=t.attributes;return"text/vtt"===e.mimeType||"text"===e.contentType}),l={allowCache:!0,discontinuityStarts:[],segments:[],endList:!0,mediaGroups:(e={AUDIO:{},VIDEO:{}},e["CLOSED-CAPTIONS"]={},e.SUBTITLES={},e),uri:"",duration:r,playlists:a,minimumUpdatePeriod:1e3*s};return o.length&&(l.mediaGroups.AUDIO.audio=o.reduce(function(t,e){var i,r,n,s,a,o=e.attributes.role&&e.attributes.role.value||"main",u=e.attributes.lang||"",l="main";return u&&(l=e.attributes.lang+" ("+o+")"),t[l]&&t[l].playlists[0].attributes.BANDWIDTH>e.attributes.bandwidth||(t[l]={language:u,autoselect:!0,default:"main"===o,playlists:[(i=e,n=i.attributes,s=i.segments,a={attributes:(r={NAME:n.id,BANDWIDTH:n.bandwidth,CODECS:n.codecs},r["PROGRAM-ID"]=1,r),uri:"",endList:"static"===(n.type||"static"),timeline:n.periodIndex,resolvedUri:"",targetDuration:n.duration,segments:s,mediaSequence:s.length?s[0].number:1},n.contentProtection&&(a.contentProtection=n.contentProtection),a)],uri:""}),t},{})),u.length&&(l.mediaGroups.SUBTITLES.subs=u.reduce(function(t,e){var i,r,n,s,a=e.attributes.lang||"text";return t[a]||(t[a]={language:a,default:!1,autoselect:!1,playlists:[(i=e,n=i.attributes,s=i.segments,"undefined"==typeof s&&(s=[{uri:n.baseUrl,timeline:n.periodIndex,resolvedUri:n.baseUrl||"",duration:n.sourceDuration,number:0}],n.duration=n.sourceDuration),{attributes:(r={NAME:n.id,BANDWIDTH:n.bandwidth},r["PROGRAM-ID"]=1,r),uri:"",endList:"static"===(n.type||"static"),timeline:n.periodIndex,resolvedUri:n.baseUrl||"",targetDuration:n.duration,segments:s,mediaSequence:s.length?s[0].number:1})],uri:""}),t},{})),l}(ba(Ta(t),e).map(oa))},ka=function(t){return function(t){var e=ua(t,"UTCTiming")[0];if(!e)return null;var i=da(e);switch(i.schemeIdUri){case"urn:mpeg:dash:utc:http-head:2014":case"urn:mpeg:dash:utc:http-head:2012":i.method="HEAD";break;case"urn:mpeg:dash:utc:http-xsdate:2014":case"urn:mpeg:dash:utc:http-iso:2014":case"urn:mpeg:dash:utc:http-xsdate:2012":case"urn:mpeg:dash:utc:http-iso:2012":i.method="GET";break;case"urn:mpeg:dash:utc:direct:2014":case"urn:mpeg:dash:utc:direct:2012":i.method="DIRECT",i.value=Date.parse(i.value);break;case"urn:mpeg:dash:utc:http-ntp:2014":case"urn:mpeg:dash:utc:ntp:2014":case"urn:mpeg:dash:utc:sntp:2014":default:throw new Error(na)}return i}(Ta(t))},Ca={toUnsigned:function(t){return t>>>0}},Ea=Ca.toUnsigned,wa=Object.freeze({default:Ca,__moduleExports:Ca,toUnsigned:Ea}),Aa=(wa&&Ca||wa).toUnsigned;pa=function(t,e){var i,r,n,s,a,o=[];if(!e.length)return null;for(i=0;i<t.byteLength;)r=Aa(t[i]<<24|t[i+1]<<16|t[i+2]<<8|t[i+3]),n=fa(t.subarray(i+4,i+8)),s=1<r?i+r:t.byteLength,n===e[0]&&(1===e.length?o.push(t.subarray(i+8,s)):(a=pa(t.subarray(i+8,s),e.slice(1))).length&&(o=o.concat(a))),i=s;return o};fa=function(t){var e="";return e+=String.fromCharCode(t[0]),e+=String.fromCharCode(t[1]),e+=String.fromCharCode(t[2]),e+=String.fromCharCode(t[3])};var La=function(t){return pa(t,["moov","trak"]).reduce(function(t,e){var i,r,n,s,a;return(i=pa(e,["tkhd"])[0])?(r=i[0],s=Aa(i[n=0===r?12:20]<<24|i[n+1]<<16|i[n+2]<<8|i[n+3]),(a=pa(e,["mdia","mdhd"])[0])?(n=0===(r=a[0])?12:20,t[s]=Aa(a[n]<<24|a[n+1]<<16|a[n+2]<<8|a[n+3]),t):null):null},{})},Pa=function(n,t){var e,i,r;return e=pa(t,["moof","traf"]),i=[].concat.apply([],e.map(function(r){return pa(r,["tfhd"]).map(function(t){var e,i;return e=Aa(t[4]<<24|t[5]<<16|t[6]<<8|t[7]),i=n[e]||9e4,(pa(r,["tfdt"]).map(function(t){var e,i;return e=t[0],i=Aa(t[4]<<24|t[5]<<16|t[6]<<8|t[7]),1===e&&(i*=Math.pow(2,32),i+=Aa(t[8]<<24|t[9]<<16|t[10]<<8|t[11])),i})[0]||1/0)/i})})),r=Math.min.apply(null,i),isFinite(r)?r:0},Oa={H264_STREAM_TYPE:27,ADTS_STREAM_TYPE:15,METADATA_STREAM_TYPE:21},xa=Oa.H264_STREAM_TYPE,Ia=Oa.ADTS_STREAM_TYPE,Da=Oa.METADATA_STREAM_TYPE,Ra=Object.freeze({default:Oa,__moduleExports:Oa,H264_STREAM_TYPE:xa,ADTS_STREAM_TYPE:Ia,METADATA_STREAM_TYPE:Da}),Ma=function(){this.init=function(){var s={};this.on=function(t,e){s[t]||(s[t]=[]),s[t]=s[t].concat(e)},this.off=function(t,e){var i;return!!s[t]&&(i=s[t].indexOf(e),s[t]=s[t].slice(),s[t].splice(i,1),-1<i)},this.trigger=function(t){var e,i,r,n;if(e=s[t])if(2===arguments.length)for(r=e.length,i=0;i<r;++i)e[i].call(this,arguments[1]);else{for(n=[],i=arguments.length,i=1;i<arguments.length;++i)n.push(arguments[i]);for(r=e.length,i=0;i<r;++i)e[i].apply(this,n)}},this.dispose=function(){s={}}}};Ma.prototype.pipe=function(e){return this.on("data",function(t){e.push(t)}),this.on("done",function(t){e.flush(t)}),e},Ma.prototype.push=function(t){this.trigger("data",t)},Ma.prototype.flush=function(t){this.trigger("done",t)};var Ua=Ma,Na=Object.freeze({default:Ua,__moduleExports:Ua}),Ba=function(t,e){var i=1;for(e<t&&(i=-1);4294967296<Math.abs(e-t);)t+=8589934592*i;return t},ja=function t(e){var i,r;t.prototype.init.call(this),this.type_=e,this.push=function(t){t.type===this.type_&&(void 0===r&&(r=t.dts),t.dts=Ba(t.dts,r),t.pts=Ba(t.pts,r),i=t.dts,this.trigger("data",t))},this.flush=function(){r=i,this.trigger("done")},this.discontinuity=function(){i=r=void 0}};ja.prototype=new(Na&&Ua||Na);var Fa={TimestampRolloverStream:ja,handleRollover:Ba},Ha=Fa.TimestampRolloverStream,Va=Fa.handleRollover,qa=Object.freeze({default:Fa,__moduleExports:Fa,TimestampRolloverStream:Ha,handleRollover:Va}),Wa=Ra&&Oa||Ra,za=function(t){var e=31&t[1];return e<<=8,e|=t[2]},Ga=function(t){return!!(64&t[1])},Xa=function(t){var e=0;return 1<(48&t[3])>>>4&&(e+=t[4]+1),e},Ya=function(t){switch(t){case 5:return"slice_layer_without_partitioning_rbsp_idr";case 6:return"sei_rbsp";case 7:return"seq_parameter_set_rbsp";case 8:return"pic_parameter_set_rbsp";case 9:return"access_unit_delimiter_rbsp";default:return null}},$a={parseType:function(t,e){var i=za(t);return 0===i?"pat":i===e?"pmt":e?"pes":null},parsePat:function(t){var e=Ga(t),i=4+Xa(t);return e&&(i+=t[i]+1),(31&t[i+10])<<8|t[i+11]},parsePmt:function(t){var e={},i=Ga(t),r=4+Xa(t);if(i&&(r+=t[r]+1),1&t[r+5]){var n;n=3+((15&t[r+1])<<8|t[r+2])-4;for(var s=12+((15&t[r+10])<<8|t[r+11]);s<n;){var a=r+s;e[(31&t[a+1])<<8|t[a+2]]=t[a],s+=5+((15&t[a+3])<<8|t[a+4])}return e}},parsePayloadUnitStartIndicator:Ga,parsePesType:function(t,e){switch(e[za(t)]){case Wa.H264_STREAM_TYPE:return"video";case Wa.ADTS_STREAM_TYPE:return"audio";case Wa.METADATA_STREAM_TYPE:return"timed-metadata";default:return null}},parsePesTime:function(t){if(!Ga(t))return null;var e=4+Xa(t);if(e>=t.byteLength)return null;var i,r=null;return 192&(i=t[e+7])&&((r={}).pts=(14&t[e+9])<<27|(255&t[e+10])<<20|(254&t[e+11])<<12|(255&t[e+12])<<5|(254&t[e+13])>>>3,r.pts*=4,r.pts+=(6&t[e+13])>>>1,r.dts=r.pts,64&i&&(r.dts=(14&t[e+14])<<27|(255&t[e+15])<<20|(254&t[e+16])<<12|(255&t[e+17])<<5|(254&t[e+18])>>>3,r.dts*=4,r.dts+=(6&t[e+18])>>>1)),r},videoPacketContainsKeyFrame:function(t){for(var e=4+Xa(t),i=t.subarray(e),r=0,n=0,s=!1;n<i.byteLength-3;n++)if(1===i[n+2]){r=n+5;break}for(;r<i.byteLength;)switch(i[r]){case 0:if(0!==i[r-1]){r+=2;break}if(0!==i[r-2]){r++;break}for(n+3!==r-2&&"slice_layer_without_partitioning_rbsp_idr"===Ya(31&i[n+3])&&(s=!0);1!==i[++r]&&r<i.length;);n=r-2,r+=3;break;case 1:if(0!==i[r-1]||0!==i[r-2]){r+=3;break}"slice_layer_without_partitioning_rbsp_idr"===Ya(31&i[n+3])&&(s=!0),n=r-2,r+=3;break;default:r+=3}return i=i.subarray(n),r-=n,n=0,i&&3<i.byteLength&&"slice_layer_without_partitioning_rbsp_idr"===Ya(31&i[n+3])&&(s=!0),s}},Ka=$a.parseType,Qa=$a.parsePat,Ja=$a.parsePmt,Za=$a.parsePayloadUnitStartIndicator,to=$a.parsePesType,eo=$a.parsePesTime,io=$a.videoPacketContainsKeyFrame,ro=Object.freeze({default:$a,__moduleExports:$a,parseType:Ka,parsePat:Qa,parsePmt:Ja,parsePayloadUnitStartIndicator:Za,parsePesType:to,parsePesTime:eo,videoPacketContainsKeyFrame:io}),no=[96e3,88200,64e3,48e3,44100,32e3,24e3,22050,16e3,12e3,11025,8e3,7350],so=function(t){return t[0]<<21|t[1]<<14|t[2]<<7|t[3]},ao={parseId3TagSize:function(t,e){var i=t[e+6]<<21|t[e+7]<<14|t[e+8]<<7|t[e+9];return(16&t[e+5])>>4?i+20:i+10},parseAdtsSize:function(t,e){var i=(224&t[e+5])>>5,r=t[e+4]<<3;return 6144&t[e+3]|r|i},parseType:function(t,e){return t[e]==="I".charCodeAt(0)&&t[e+1]==="D".charCodeAt(0)&&t[e+2]==="3".charCodeAt(0)?"timed-metadata":!0&t[e]&&240==(240&t[e+1])?"audio":null},parseSampleRate:function(t){for(var e=0;e+5<t.length;){if(255===t[e]&&240==(246&t[e+1]))return no[(60&t[e+2])>>>2];e++}return null},parseAacTimestamp:function(t){var e,i,r;e=10,64&t[5]&&(e+=4,e+=so(t.subarray(10,14)));do{if((i=so(t.subarray(e+4,e+8)))<1)return null;if("PRIV"===String.fromCharCode(t[e],t[e+1],t[e+2],t[e+3])){r=t.subarray(e+10,e+i+10);for(var n=0;n<r.byteLength;n++)if(0===r[n]){if("com.apple.streaming.transportStreamTimestamp"===unescape(function(t,e,i){var r,n="";for(r=e;r<i;r++)n+="%"+("00"+t[r].toString(16)).slice(-2);return n}(r,0,n))){var s=r.subarray(n+1),a=(1&s[3])<<30|s[4]<<22|s[5]<<14|s[6]<<6|s[7]>>>2;return a*=4,a+=3&s[7]}break}}e+=10,e+=i}while(e<t.byteLength);return null}},oo=ao.parseId3TagSize,uo=ao.parseAdtsSize,lo=ao.parseType,co=ao.parseSampleRate,ho=ao.parseAacTimestamp,po=Object.freeze({default:ao,__moduleExports:ao,parseId3TagSize:oo,parseAdtsSize:uo,parseType:lo,parseSampleRate:co,parseAacTimestamp:ho}),fo=ro&&$a||ro,mo=po&&ao||po,go=(qa&&Fa||qa).handleRollover,yo={};yo.ts=fo,yo.aac=mo;var vo=188,_o=function(t,e,i){for(var r,n,s,a,o=0,u=vo,l=!1;u<t.byteLength;)if(71!==t[o]||71!==t[u])o++,u++;else{switch(r=t.subarray(o,u),yo.ts.parseType(r,e.pid)){case"pes":n=yo.ts.parsePesType(r,e.table),s=yo.ts.parsePayloadUnitStartIndicator(r),"audio"===n&&s&&(a=yo.ts.parsePesTime(r))&&(a.type="audio",i.audio.push(a),l=!0)}if(l)break;o+=vo,u+=vo}for(o=(u=t.byteLength)-vo,l=!1;0<=o;)if(71!==t[o]||71!==t[u])o--,u--;else{switch(r=t.subarray(o,u),yo.ts.parseType(r,e.pid)){case"pes":n=yo.ts.parsePesType(r,e.table),s=yo.ts.parsePayloadUnitStartIndicator(r),"audio"===n&&s&&(a=yo.ts.parsePesTime(r))&&(a.type="audio",i.audio.push(a),l=!0)}if(l)break;o-=vo,u-=vo}},bo=function(t,e,i){for(var r,n,s,a,o,u,l,c=0,h=vo,d=!1,p={data:[],size:0};h<t.byteLength;)if(71!==t[c]||71!==t[h])c++,h++;else{switch(r=t.subarray(c,h),yo.ts.parseType(r,e.pid)){case"pes":if(n=yo.ts.parsePesType(r,e.table),s=yo.ts.parsePayloadUnitStartIndicator(r),"video"===n&&(s&&!d&&(a=yo.ts.parsePesTime(r))&&(a.type="video",i.video.push(a),d=!0),!i.firstKeyFrame)){if(s&&0!==p.size){for(o=new Uint8Array(p.size),u=0;p.data.length;)l=p.data.shift(),o.set(l,u),u+=l.byteLength;yo.ts.videoPacketContainsKeyFrame(o)&&(i.firstKeyFrame=yo.ts.parsePesTime(o),i.firstKeyFrame.type="video"),p.size=0}p.data.push(r),p.size+=r.byteLength}}if(d&&i.firstKeyFrame)break;c+=vo,h+=vo}for(c=(h=t.byteLength)-vo,d=!1;0<=c;)if(71!==t[c]||71!==t[h])c--,h--;else{switch(r=t.subarray(c,h),yo.ts.parseType(r,e.pid)){case"pes":n=yo.ts.parsePesType(r,e.table),s=yo.ts.parsePayloadUnitStartIndicator(r),"video"===n&&s&&(a=yo.ts.parsePesTime(r))&&(a.type="video",i.video.push(a),d=!0)}if(d)break;c-=vo,h-=vo}},To=function(t){var e={pid:null,table:null},i={};for(var r in function(t,e){for(var i,r=0,n=vo;n<t.byteLength;)if(71!==t[r]||71!==t[n])r++,n++;else{switch(i=t.subarray(r,n),yo.ts.parseType(i,e.pid)){case"pat":e.pid||(e.pid=yo.ts.parsePat(i));break;case"pmt":e.table||(e.table=yo.ts.parsePmt(i))}if(e.pid&&e.table)return;r+=vo,n+=vo}}(t,e),e.table){if(e.table.hasOwnProperty(r))switch(e.table[r]){case Wa.H264_STREAM_TYPE:i.video=[],bo(t,e,i),0===i.video.length&&delete i.video;break;case Wa.ADTS_STREAM_TYPE:i.audio=[],_o(t,e,i),0===i.audio.length&&delete i.audio}}return i},So=function(t,e){var i,r;return(r=(i=t)[0]==="I".charCodeAt(0)&&i[1]==="D".charCodeAt(0)&&i[2]==="3".charCodeAt(0)?function(t){for(var e,i=!1,r=0,n=null,s=null,a=0,o=0;3<=t.length-o;){switch(yo.aac.parseType(t,o)){case"timed-metadata":if(t.length-o<10){i=!0;break}if((a=yo.aac.parseId3TagSize(t,o))>t.length){i=!0;break}null===s&&(e=t.subarray(o,o+a),s=yo.aac.parseAacTimestamp(e)),o+=a;break;case"audio":if(t.length-o<7){i=!0;break}if((a=yo.aac.parseAdtsSize(t,o))>t.length){i=!0;break}null===n&&(e=t.subarray(o,o+a),n=yo.aac.parseSampleRate(e)),r++,o+=a;break;default:o++}if(i)return null}if(null===n||null===s)return null;var u=9e4/n;return{audio:[{type:"audio",dts:s,pts:s},{type:"audio",dts:s+1024*r*u,pts:s+1024*r*u}]}}(t):To(t))&&(r.audio||r.video)?(function(t,e){if(t.audio&&t.audio.length){var i=e;"undefined"==typeof i&&(i=t.audio[0].dts),t.audio.forEach(function(t){t.dts=go(t.dts,i),t.pts=go(t.pts,i),t.dtsTime=t.dts/9e4,t.ptsTime=t.pts/9e4})}if(t.video&&t.video.length){var r=e;if("undefined"==typeof r&&(r=t.video[0].dts),t.video.forEach(function(t){t.dts=go(t.dts,r),t.pts=go(t.pts,r),t.dtsTime=t.dts/9e4,t.ptsTime=t.pts/9e4}),t.firstKeyFrame){var n=t.firstKeyFrame;n.dts=go(n.dts,r),n.pts=go(n.pts,r),n.dtsTime=n.dts/9e4,n.ptsTime=n.dts/9e4}}}(r,e),r):null};var ko=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},Co=function(){function r(t,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(t,e,i){return e&&r(t.prototype,e),i&&r(t,i),t}}(),Eo=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==("undefined"==typeof e?"undefined":v(e))&&"function"!=typeof e?t:e},wo=function(){var t=[[[],[],[],[],[]],[[],[],[],[],[]]],e=t[0],i=t[1],r=e[4],n=i[4],s=void 0,a=void 0,o=void 0,u=[],l=[],c=void 0,h=void 0,d=void 0,p=void 0,f=void 0;for(s=0;s<256;s++)l[(u[s]=s<<1^283*(s>>7))^s]=s;for(a=o=0;!r[a];a^=c||1,o=l[o]||1)for(d=(d=o^o<<1^o<<2^o<<3^o<<4)>>8^255&d^99,f=16843009*u[h=u[c=u[n[r[a]=d]=a]]]^65537*h^257*c^16843008*a,p=257*u[d]^16843008*d,s=0;s<4;s++)e[s][a]=p=p<<24^p>>>8,i[s][d]=f=f<<24^f>>>8;for(s=0;s<5;s++)e[s]=e[s].slice(0),i[s]=i[s].slice(0);return t},Ao=null,Lo=function(){function c(t){ko(this,c),Ao||(Ao=wo()),this._tables=[[Ao[0][0].slice(),Ao[0][1].slice(),Ao[0][2].slice(),Ao[0][3].slice(),Ao[0][4].slice()],[Ao[1][0].slice(),Ao[1][1].slice(),Ao[1][2].slice(),Ao[1][3].slice(),Ao[1][4].slice()]];var e=void 0,i=void 0,r=void 0,n=void 0,s=void 0,a=this._tables[0][4],o=this._tables[1],u=t.length,l=1;if(4!==u&&6!==u&&8!==u)throw new Error("Invalid aes key size");for(n=t.slice(0),s=[],this._key=[n,s],e=u;e<4*u+28;e++)r=n[e-1],(e%u==0||8===u&&e%u==4)&&(r=a[r>>>24]<<24^a[r>>16&255]<<16^a[r>>8&255]<<8^a[255&r],e%u==0&&(r=r<<8^r>>>24^l<<24,l=l<<1^283*(l>>7))),n[e]=n[e-u]^r;for(i=0;e;i++,e--)r=n[3&i?e:e-4],s[i]=e<=4||i<4?r:o[0][a[r>>>24]]^o[1][a[r>>16&255]]^o[2][a[r>>8&255]]^o[3][a[255&r]]}return c.prototype.decrypt=function(t,e,i,r,n,s){var a=this._key[1],o=t^a[0],u=r^a[1],l=i^a[2],c=e^a[3],h=void 0,d=void 0,p=void 0,f=a.length/4-2,m=void 0,g=4,y=this._tables[1],v=y[0],_=y[1],b=y[2],T=y[3],S=y[4];for(m=0;m<f;m++)h=v[o>>>24]^_[u>>16&255]^b[l>>8&255]^T[255&c]^a[g],d=v[u>>>24]^_[l>>16&255]^b[c>>8&255]^T[255&o]^a[g+1],p=v[l>>>24]^_[c>>16&255]^b[o>>8&255]^T[255&u]^a[g+2],c=v[c>>>24]^_[o>>16&255]^b[u>>8&255]^T[255&l]^a[g+3],g+=4,o=h,u=d,l=p;for(m=0;m<4;m++)n[(3&-m)+s]=S[o>>>24]<<24^S[u>>16&255]<<16^S[l>>8&255]<<8^S[255&c]^a[g++],h=o,o=u,u=l,l=c,c=h},c}(),Po=function(){function t(){ko(this,t),this.listeners={}}return t.prototype.on=function(t,e){this.listeners[t]||(this.listeners[t]=[]),this.listeners[t].push(e)},t.prototype.off=function(t,e){if(!this.listeners[t])return!1;var i=this.listeners[t].indexOf(e);return this.listeners[t].splice(i,1),-1<i},t.prototype.trigger=function(t){var e=this.listeners[t];if(e)if(2===arguments.length)for(var i=e.length,r=0;r<i;++r)e[r].call(this,arguments[1]);else for(var n=Array.prototype.slice.call(arguments,1),s=e.length,a=0;a<s;++a)e[a].apply(this,n)},t.prototype.dispose=function(){this.listeners={}},t.prototype.pipe=function(e){this.on("data",function(t){e.push(t)})},t}(),Oo=function(e){function i(){ko(this,i);var t=Eo(this,e.call(this,Po));return t.jobs=[],t.delay=1,t.timeout_=null,t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+("undefined"==typeof e?"undefined":v(e)));t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(i,e),i.prototype.processJob_=function(){this.jobs.shift()(),this.jobs.length?this.timeout_=setTimeout(this.processJob_.bind(this),this.delay):this.timeout_=null},i.prototype.push=function(t){this.jobs.push(t),this.timeout_||(this.timeout_=setTimeout(this.processJob_.bind(this),this.delay))},i}(Po),xo=function(t){return t<<24|(65280&t)<<8|(16711680&t)>>8|t>>>24},Io=function(t,e,i){var r=new Int32Array(t.buffer,t.byteOffset,t.byteLength>>2),n=new Lo(Array.prototype.slice.call(e)),s=new Uint8Array(t.byteLength),a=new Int32Array(s.buffer),o=void 0,u=void 0,l=void 0,c=void 0,h=void 0,d=void 0,p=void 0,f=void 0,m=void 0;for(o=i[0],u=i[1],l=i[2],c=i[3],m=0;m<r.length;m+=4)h=xo(r[m]),d=xo(r[m+1]),p=xo(r[m+2]),f=xo(r[m+3]),n.decrypt(h,d,p,f,a,m),a[m]=xo(a[m]^o),a[m+1]=xo(a[m+1]^u),a[m+2]=xo(a[m+2]^l),a[m+3]=xo(a[m+3]^c),o=h,u=d,l=p,c=f;return s},Do=function(){function u(t,e,i,r){ko(this,u);var n=u.STEP,s=new Int32Array(t.buffer),a=new Uint8Array(t.byteLength),o=0;for(this.asyncStream_=new Oo,this.asyncStream_.push(this.decryptChunk_(s.subarray(o,o+n),e,i,a)),o=n;o<s.length;o+=n)i=new Uint32Array([xo(s[o-4]),xo(s[o-3]),xo(s[o-2]),xo(s[o-1])]),this.asyncStream_.push(this.decryptChunk_(s.subarray(o,o+n),e,i,a));this.asyncStream_.push(function(){var t;r(null,(t=a).subarray(0,t.byteLength-t[t.byteLength-1]))})}return u.prototype.decryptChunk_=function(e,i,r,n){return function(){var t=Io(e,i,r);n.set(t,e.byteOffset)}},Co(u,null,[{key:"STEP",get:function(){return 32e3}}]),u}(),Ro=function(t,e){return/^[a-z]+:/i.test(e)?e:(/\/\//i.test(t)||(t=Os.buildAbsoluteURL(g.location.href,t)),Os.buildAbsoluteURL(t,e))},Mo=As.mergeOptions,Uo=As.log,No=function(n,s){["AUDIO","SUBTITLES"].forEach(function(t){for(var e in n.mediaGroups[t])for(var i in n.mediaGroups[t][e]){var r=n.mediaGroups[t][e][i];s(r,t,e,i)}})},Bo=function(t,e){var i=Mo(t,{}),r=i.playlists[e.uri];if(!r)return null;if(r.segments&&e.segments&&r.segments.length===e.segments.length&&r.mediaSequence===e.mediaSequence)return null;var n=Mo(r,e);r.segments&&(n.segments=function(t,e,i){var r=e.slice();i=i||0;for(var n=Math.min(t.length,e.length+i),s=i;s<n;s++)r[s-i]=Mo(t[s],r[s-i]);return r}(r.segments,e.segments,e.mediaSequence-r.mediaSequence)),n.segments.forEach(function(t){var e,i;e=t,i=n.resolvedUri,e.resolvedUri||(e.resolvedUri=Ro(i,e.uri)),e.key&&!e.key.resolvedUri&&(e.key.resolvedUri=Ro(i,e.key.uri)),e.map&&!e.map.resolvedUri&&(e.map.resolvedUri=Ro(i,e.map.uri))});for(var s=0;s<i.playlists.length;s++)i.playlists[s].uri===e.uri&&(i.playlists[s]=n);return i.playlists[e.uri]=n,i},jo=function(t){for(var e=t.playlists.length;e--;){var i=t.playlists[e];(t.playlists[i.uri]=i).resolvedUri=Ro(t.uri,i.uri),i.id=e,i.attributes||(i.attributes={},Uo.warn("Invalid playlist STREAM-INF detected. Missing BANDWIDTH attribute."))}},Fo=function(e){No(e,function(t){t.uri&&(t.resolvedUri=Ro(e.uri,t.uri))})},Ho=function(t,e){var i=t.segments[t.segments.length-1];return e&&i&&i.duration?1e3*i.duration:500*(t.targetDuration||10)},Vo=function(n){function s(t,e,i){y(this,s);var r=b(this,n.call(this));if(r.srcUrl=t,r.hls_=e,r.withCredentials=i,!r.srcUrl)throw new Error("A non-empty playlist URL is required");return r.state="HAVE_NOTHING",r.on("mediaupdatetimeout",function(){"HAVE_METADATA"===r.state&&(r.state="HAVE_CURRENT_METADATA",r.request=r.hls_.xhr({uri:Ro(r.master.uri,r.media().uri),withCredentials:r.withCredentials},function(t,e){if(r.request)return t?r.playlistRequestError(r.request,r.media().uri,"HAVE_METADATA"):void r.haveMetadata(r.request,r.media().uri)}))}),r}return _(s,n),s.prototype.playlistRequestError=function(t,e,i){this.request=null,i&&(this.state=i),this.error={playlist:this.master.playlists[e],status:t.status,message:"HLS playlist request error at URL: "+e,responseText:t.responseText,code:500<=t.status?4:2},this.trigger("error")},s.prototype.haveMetadata=function(t,e){var i=this;this.request=null,this.state="HAVE_METADATA";var r=new js;r.push(t.responseText),r.end(),r.manifest.uri=e,r.manifest.attributes=r.manifest.attributes||{};var n=Bo(this.master,r.manifest);this.targetDuration=r.manifest.targetDuration,n?(this.master=n,this.media_=this.master.playlists[r.manifest.uri]):this.trigger("playlistunchanged"),this.media().endList||(g.clearTimeout(this.mediaUpdateTimeout),this.mediaUpdateTimeout=g.setTimeout(function(){i.trigger("mediaupdatetimeout")},Ho(this.media(),!!n))),this.trigger("loadedplaylist")},s.prototype.dispose=function(){this.stopRequest(),g.clearTimeout(this.mediaUpdateTimeout)},s.prototype.stopRequest=function(){if(this.request){var t=this.request;this.request=null,t.onreadystatechange=null,t.abort()}},s.prototype.media=function(i){var r=this;if(!i)return this.media_;if("HAVE_NOTHING"===this.state)throw new Error("Cannot switch media playlist from "+this.state);var n=this.state;if("string"==typeof i){if(!this.master.playlists[i])throw new Error("Unknown playlist URI: "+i);i=this.master.playlists[i]}var t=!this.media_||i.uri!==this.media_.uri;if(this.master.playlists[i.uri].endList)return this.request&&(this.request.onreadystatechange=null,this.request.abort(),this.request=null),this.state="HAVE_METADATA",this.media_=i,void(t&&(this.trigger("mediachanging"),this.trigger("mediachange")));if(t){if(this.state="SWITCHING_MEDIA",this.request){if(Ro(this.master.uri,i.uri)===this.request.url)return;this.request.onreadystatechange=null,this.request.abort(),this.request=null}this.media_&&this.trigger("mediachanging"),this.request=this.hls_.xhr({uri:Ro(this.master.uri,i.uri),withCredentials:this.withCredentials},function(t,e){if(r.request){if(t)return r.playlistRequestError(r.request,i.uri,n);r.haveMetadata(e,i.uri),"HAVE_MASTER"===n?r.trigger("loadedmetadata"):r.trigger("mediachange")}})}},s.prototype.pause=function(){this.stopRequest(),g.clearTimeout(this.mediaUpdateTimeout),"HAVE_NOTHING"===this.state&&(this.started=!1),"SWITCHING_MEDIA"===this.state?this.media_?this.state="HAVE_METADATA":this.state="HAVE_MASTER":"HAVE_CURRENT_METADATA"===this.state&&(this.state="HAVE_METADATA")},s.prototype.load=function(t){var e=this;g.clearTimeout(this.mediaUpdateTimeout);var i=this.media();if(t){var r=i?i.targetDuration/2*1e3:5e3;this.mediaUpdateTimeout=g.setTimeout(function(){return e.load()},r)}else this.started?i&&!i.endList?this.trigger("mediaupdatetimeout"):this.trigger("loadedplaylist"):this.start()},s.prototype.start=function(){var r=this;this.started=!0,this.request=this.hls_.xhr({uri:this.srcUrl,withCredentials:this.withCredentials},function(t,e){if(r.request){if(r.request=null,t)return r.error={status:e.status,message:"HLS playlist request error at URL: "+r.srcUrl,responseText:e.responseText,code:2},"HAVE_NOTHING"===r.state&&(r.started=!1),r.trigger("error");var i=new js;return i.push(e.responseText),i.end(),r.state="HAVE_MASTER",i.manifest.uri=r.srcUrl,i.manifest.playlists?(r.master=i.manifest,jo(r.master),Fo(r.master),r.trigger("loadedplaylist"),void(r.request||r.media(i.manifest.playlists[0]))):(r.master={mediaGroups:{AUDIO:{},VIDEO:{},"CLOSED-CAPTIONS":{},SUBTITLES:{}},uri:g.location.href,playlists:[{uri:r.srcUrl,id:0}]},r.master.playlists[r.srcUrl]=r.master.playlists[0],r.master.playlists[0].resolvedUri=r.srcUrl,r.master.playlists[0].attributes=r.master.playlists[0].attributes||{},r.haveMetadata(e,r.srcUrl),r.trigger("loadedmetadata"))}})},s}(As.EventTarget),qo=As.createTimeRange,Wo=function(t,e,i){var r,n;return"undefined"==typeof e&&(e=t.mediaSequence+t.segments.length),e<t.mediaSequence?0:(r=function(t,e){var i=0,r=e-t.mediaSequence,n=t.segments[r];if(n){if("undefined"!=typeof n.start)return{result:n.start,precise:!0};if("undefined"!=typeof n.end)return{result:n.end-n.duration,precise:!0}}for(;r--;){if("undefined"!=typeof(n=t.segments[r]).end)return{result:i+n.end,precise:!0};if(i+=n.duration,"undefined"!=typeof n.start)return{result:i+n.start,precise:!0}}return{result:i,precise:!1}}(t,e)).precise?r.result:(n=function(t,e){for(var i=0,r=void 0,n=e-t.mediaSequence;n<t.segments.length;n++){if("undefined"!=typeof(r=t.segments[n]).start)return{result:r.start-i,precise:!0};if(i+=r.duration,"undefined"!=typeof r.end)return{result:r.end-i,precise:!0}}return{result:-1,precise:!1}}(t,e)).precise?n.result:r.result+i},zo=function(t,e,i){if(!t)return 0;if("number"!=typeof i&&(i=0),"undefined"==typeof e){if(t.totalDuration)return t.totalDuration;if(!t.endList)return g.Infinity}return Wo(t,e,i)},Go=function(t,e,i){var r=0;if(i<e){var n=[i,e];e=n[0],i=n[1]}if(e<0){for(var s=e;s<Math.min(0,i);s++)r+=t.targetDuration;e=0}for(var a=e;a<i;a++)r+=t.segments[a].duration;return r},Xo=function(t){if(!t.segments.length)return 0;for(var e=t.segments.length-1,i=t.segments[e].duration||t.targetDuration,r=i+2*t.targetDuration;e--&&!(r<=(i+=t.segments[e].duration)););return Math.max(0,e)},Yo=function(t,e,i){if(!t||!t.segments)return null;if(t.endList)return zo(t);if(null===e)return null;e=e||0;var r=i?Xo(t):t.segments.length;return Wo(t,t.mediaSequence+r,e)},$o=function(t){return t-Math.floor(t)==0},Ko=function(t,e){if($o(e))return e+.1*t;for(var i=e.toString().split(".")[1].length,r=1;r<=i;r++){var n=Math.pow(10,r),s=e*n;if($o(s)||r===i)return(s+t)/n}},Qo=Ko.bind(null,1),Jo=Ko.bind(null,-1),Zo=function(t){return t.excludeUntil&&t.excludeUntil>Date.now()},tu=function(t){return t.excludeUntil&&t.excludeUntil===1/0},eu=function(t){var e=Zo(t);return!t.disabled&&!e},iu=function(t,e){return e.attributes&&e.attributes[t]},ru=function(t,e){if(1===t.playlists.length)return!0;var i=e.attributes.BANDWIDTH||Number.MAX_VALUE;return 0===t.playlists.filter(function(t){return!!eu(t)&&(t.attributes.BANDWIDTH||0)<i}).length},nu={duration:zo,seekable:function(t,e){var i=e||0,r=Yo(t,e,!0);return null===r?qo():qo(i,r)},safeLiveIndex:Xo,getMediaInfoForTime:function(t,e,i,r){var n=void 0,s=void 0,a=t.segments.length,o=e-r;if(o<0){if(0<i)for(n=i-1;0<=n;n--)if(s=t.segments[n],0<(o+=Jo(s.duration)))return{mediaIndex:n,startTime:r-Go(t,i,n)};return{mediaIndex:0,startTime:e}}if(i<0){for(n=i;n<0;n++)if((o-=t.targetDuration)<0)return{mediaIndex:0,startTime:e};i=0}for(n=i;n<a;n++)if(s=t.segments[n],(o-=Qo(s.duration))<0)return{mediaIndex:n,startTime:r+Go(t,i,n)};return{mediaIndex:a-1,startTime:e}},isEnabled:eu,isDisabled:function(t){return t.disabled},isBlacklisted:Zo,isIncompatible:tu,playlistEnd:Yo,isAes:function(t){for(var e=0;e<t.segments.length;e++)if(t.segments[e].key)return!0;return!1},isFmp4:function(t){for(var e=0;e<t.segments.length;e++)if(t.segments[e].map)return!0;return!1},hasAttribute:iu,estimateSegmentRequestTime:function(t,e,i){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:0;return iu("BANDWIDTH",i)?(t*i.attributes.BANDWIDTH-8*r)/e:NaN},isLowestEnabledRendition:ru},su=As.xhr,au=As.mergeOptions,ou=function(){return function t(e,r){e=au({timeout:45e3},e);var i=t.beforeRequest||As.Hls.xhr.beforeRequest;if(i&&"function"==typeof i){var n=i(e);n&&(e=n)}var s=su(e,function(t,e){var i=s.response;!t&&i&&(s.responseTime=Date.now(),s.roundTripTime=s.responseTime-s.requestTime,s.bytesReceived=i.byteLength||i.length,s.bandwidth||(s.bandwidth=Math.floor(s.bytesReceived/s.roundTripTime*8*1e3))),e.headers&&(s.responseHeaders=e.headers),t&&"ETIMEDOUT"===t.code&&(s.timedout=!0),t||s.aborted||200===e.statusCode||206===e.statusCode||0===e.statusCode||(t=new Error("XHR Failed with a response of: "+(s&&(i||s.responseText)))),r(t,s)}),a=s.abort;return s.abort=function(){return s.aborted=!0,a.apply(s,arguments)},s.uri=e.uri,s.requestTime=Date.now(),s}},uu=function(t,e){var i=t.toString(16);return"00".substring(0,2-i.length)+i+(e%2?" ":"")},lu=function(t){return 32<=t&&t<126?String.fromCharCode(t):"."},cu=function(i){var r={};return Object.keys(i).forEach(function(t){var e=i[t];ArrayBuffer.isView(e)?r[t]={bytes:e.buffer,byteOffset:e.byteOffset,byteLength:e.byteLength}:r[t]=e}),r},hu=function(t){var e=t.byterange||{length:1/0,offset:0};return[e.length,e.offset,t.resolvedUri].join(",")},du=function(t){for(var e=Array.prototype.slice.call(t),i="",r=0;r<e.length/16;r++)i+=e.slice(16*r,16*r+16).map(uu).join("")+" "+e.slice(16*r,16*r+16).map(lu).join("")+"\n";return i},pu=Object.freeze({createTransferableMessage:cu,initSegmentId:hu,hexDump:du,tagDump:function(t){var e=t.bytes;return du(e)},textRanges:function(t){var e,i,r="",n=void 0;for(n=0;n<t.length;n++)r+=(i=n,(e=t).start(i)+"-"+e.end(i)+" ");return r}}),fu=1/30,mu=function(t,e){var i=[],r=void 0;if(t&&t.length)for(r=0;r<t.length;r++)e(t.start(r),t.end(r))&&i.push([t.start(r),t.end(r)]);return As.createTimeRanges(i)},gu=function(t,i){return mu(t,function(t,e){return t-fu<=i&&i<=e+fu})},yu=function(t,e){return mu(t,function(t){return e<=t-fu})},vu=function(t){var e=[];if(!t||!t.length)return"";for(var i=0;i<t.length;i++)e.push(t.start(i)+" => "+t.end(i));return e.join(", ")},_u=function(t){for(var e=[],i=0;i<t.length;i++)e.push({start:t.start(i),end:t.end(i)});return e},bu=function(t,e,i){var r=void 0,n=void 0;if(i&&i.cues)for(r=i.cues.length;r--;)(n=i.cues[r]).startTime<=e&&n.endTime>=t&&i.removeCue(n)},Tu=function(t){return isNaN(t)||Math.abs(t)===1/0?Number.MAX_VALUE:t},Su=function(t,e,i){var n=g.WebKitDataCue||g.VTTCue;if(e&&e.forEach(function(t){var e=t.stream;this.inbandTextTracks_[e].addCue(new n(t.startTime+this.timestampOffset,t.endTime+this.timestampOffset,t.text))},t),i){var s=Tu(t.mediaSource_.duration);if(i.forEach(function(t){var r=t.cueTime+this.timestampOffset;t.frames.forEach(function(t){var e,i=new n(r,r,t.value||t.url||t.data||"");i.frame=t,i.value=t,e=i,Object.defineProperties(e.frame,{id:{get:function(){return As.log.warn("cue.frame.id is deprecated. Use cue.value.key instead."),e.value.key}},value:{get:function(){return As.log.warn("cue.frame.value is deprecated. Use cue.value.data instead."),e.value.data}},privateData:{get:function(){return As.log.warn("cue.frame.privateData is deprecated. Use cue.value.data instead."),e.value.data}}}),this.metadataTrack_.addCue(i)},this)},t),t.metadataTrack_&&t.metadataTrack_.cues&&t.metadataTrack_.cues.length){for(var r=t.metadataTrack_.cues,a=[],o=0;o<r.length;o++)r[o]&&a.push(r[o]);var u=a.reduce(function(t,e){var i=t[e.startTime]||[];return i.push(e),t[e.startTime]=i,t},{}),l=Object.keys(u).sort(function(t,e){return Number(t)-Number(e)});l.forEach(function(t,e){var i=u[t],r=Number(l[e+1])||s;i.forEach(function(t){t.endTime=r})})}}},ku="undefined"!=typeof window?window:{},Cu="undefined"==typeof Symbol?"__target":Symbol(),Eu="application/javascript",wu=ku.BlobBuilder||ku.WebKitBlobBuilder||ku.MozBlobBuilder||ku.MSBlobBuilder,Au=ku.URL||ku.webkitURL||Au&&Au.msURL,Lu=ku.Worker;function Pu(n,s){return function(t){var e=this;if(!s)return new Lu(n);if(Lu&&!t){var i=Du(s.toString().replace(/^function.+?{/,"").slice(0,-1));return this[Cu]=new Lu(i),function(t,e){if(!t||!e)return;var i=t.terminate;t.objURL=e,t.terminate=function(){t.objURL&&Au.revokeObjectURL(t.objURL),i.call(t)}}(this[Cu],i),this[Cu]}var r={postMessage:function(t){e.onmessage&&setTimeout(function(){e.onmessage({data:t,target:r})})}};s.call(r),this.postMessage=function(t){setTimeout(function(){r.onmessage({data:t,target:e})})},this.isThisThread=!0}}if(Lu){var Ou,xu=Du("self.onmessage = function () {}"),Iu=new Uint8Array(1);try{(Ou=new Lu(xu)).postMessage(Iu,[Iu.buffer])}catch(t){Lu=null}finally{Au.revokeObjectURL(xu),Ou&&Ou.terminate()}}function Du(e){try{return Au.createObjectURL(new Blob([e],{type:Eu}))}catch(t){var i=new wu;return i.append(e),Au.createObjectURL(i.getBlob(type))}}var Ru=new Pu("./transmuxer-worker.worker.js",function(ie,t){var re=this;!function(){var o,e,i,n,s,r,t,a,u,l,c,h,d,p,f,m,g,y,v,_,b,T,S,k,C,E,w,A,L,P,O,x,I,D,R,M,U,N,B,j,F="undefined"!=typeof ie?ie:"undefined"!=typeof global?global:"undefined"!=typeof re?re:{},H="undefined"!=typeof ie?ie:"undefined"!=typeof F?F:"undefined"!=typeof re?re:{},V=Math.pow(2,32)-1;!function(){var t;if(T={avc1:[],avcC:[],btrt:[],dinf:[],dref:[],esds:[],ftyp:[],hdlr:[],mdat:[],mdhd:[],mdia:[],mfhd:[],minf:[],moof:[],moov:[],mp4a:[],mvex:[],mvhd:[],sdtp:[],smhd:[],stbl:[],stco:[],stsc:[],stsd:[],stsz:[],stts:[],styp:[],tfdt:[],tfhd:[],traf:[],trak:[],trun:[],trex:[],tkhd:[],vmhd:[]},"undefined"!=typeof Uint8Array){for(t in T)T.hasOwnProperty(t)&&(T[t]=[t.charCodeAt(0),t.charCodeAt(1),t.charCodeAt(2),t.charCodeAt(3)]);S=new Uint8Array(["i".charCodeAt(0),"s".charCodeAt(0),"o".charCodeAt(0),"m".charCodeAt(0)]),C=new Uint8Array(["a".charCodeAt(0),"v".charCodeAt(0),"c".charCodeAt(0),"1".charCodeAt(0)]),k=new Uint8Array([0,0,0,1]),E=new Uint8Array([0,0,0,0,0,0,0,0,118,105,100,101,0,0,0,0,0,0,0,0,0,0,0,0,86,105,100,101,111,72,97,110,100,108,101,114,0]),w=new Uint8Array([0,0,0,0,0,0,0,0,115,111,117,110,0,0,0,0,0,0,0,0,0,0,0,0,83,111,117,110,100,72,97,110,100,108,101,114,0]),A={video:E,audio:w},O=new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,12,117,114,108,32,0,0,0,1]),P=new Uint8Array([0,0,0,0,0,0,0,0]),x=new Uint8Array([0,0,0,0,0,0,0,0]),I=x,D=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0]),R=x,L=new Uint8Array([0,0,0,1,0,0,0,0,0,0,0,0])}}(),o=function(t){var e,i,r=[],n=0;for(e=1;e<arguments.length;e++)r.push(arguments[e]);for(e=r.length;e--;)n+=r[e].byteLength;for(i=new Uint8Array(n+8),new DataView(i.buffer,i.byteOffset,i.byteLength).setUint32(0,i.byteLength),i.set(t,4),e=0,n=8;e<r.length;e++)i.set(r[e],n),n+=r[e].byteLength;return i},e=function(){return o(T.dinf,o(T.dref,O))},i=function(t){return o(T.esds,new Uint8Array([0,0,0,0,3,25,0,0,0,4,17,64,21,0,6,0,0,0,218,192,0,0,218,192,5,2,t.audioobjecttype<<3|t.samplingfrequencyindex>>>1,t.samplingfrequencyindex<<7|t.channelcount<<3,6,1,2]))},f=function(t){return o(T.hdlr,A[t])},p=function(t){var e=new Uint8Array([0,0,0,0,0,0,0,2,0,0,0,3,0,1,95,144,t.duration>>>24&255,t.duration>>>16&255,t.duration>>>8&255,255&t.duration,85,196,0,0]);return t.samplerate&&(e[12]=t.samplerate>>>24&255,e[13]=t.samplerate>>>16&255,e[14]=t.samplerate>>>8&255,e[15]=255&t.samplerate),o(T.mdhd,e)},d=function(t){return o(T.mdia,p(t),f(t.type),r(t))},s=function(t){return o(T.mfhd,new Uint8Array([0,0,0,0,(4278190080&t)>>24,(16711680&t)>>16,(65280&t)>>8,255&t]))},r=function(t){return o(T.minf,"video"===t.type?o(T.vmhd,L):o(T.smhd,P),e(),g(t))},t=function(t,e){for(var i=[],r=e.length;r--;)i[r]=v(e[r]);return o.apply(null,[T.moof,s(t)].concat(i))},a=function(t){for(var e=t.length,i=[];e--;)i[e]=c(t[e]);return o.apply(null,[T.moov,l(4294967295)].concat(i).concat(u(t)))},u=function(t){for(var e=t.length,i=[];e--;)i[e]=_(t[e]);return o.apply(null,[T.mvex].concat(i))},l=function(t){var e=new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,2,0,1,95,144,(4278190080&t)>>24,(16711680&t)>>16,(65280&t)>>8,255&t,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,64,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,255,255,255,255]);return o(T.mvhd,e)},m=function(t){var e,i,r=t.samples||[],n=new Uint8Array(4+r.length);for(i=0;i<r.length;i++)e=r[i].flags,n[i+4]=e.dependsOn<<4|e.isDependedOn<<2|e.hasRedundancy;return o(T.sdtp,n)},g=function(t){return o(T.stbl,y(t),o(T.stts,R),o(T.stsc,I),o(T.stsz,D),o(T.stco,x))},y=function(t){return o(T.stsd,new Uint8Array([0,0,0,0,0,0,0,1]),"video"===t.type?M(t):U(t))},M=function(t){var e,i=t.sps||[],r=t.pps||[],n=[],s=[];for(e=0;e<i.length;e++)n.push((65280&i[e].byteLength)>>>8),n.push(255&i[e].byteLength),n=n.concat(Array.prototype.slice.call(i[e]));for(e=0;e<r.length;e++)s.push((65280&r[e].byteLength)>>>8),s.push(255&r[e].byteLength),s=s.concat(Array.prototype.slice.call(r[e]));return o(T.avc1,new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,(65280&t.width)>>8,255&t.width,(65280&t.height)>>8,255&t.height,0,72,0,0,0,72,0,0,0,0,0,0,0,1,19,118,105,100,101,111,106,115,45,99,111,110,116,114,105,98,45,104,108,115,0,0,0,0,0,0,0,0,0,0,0,0,0,24,17,17]),o(T.avcC,new Uint8Array([1,t.profileIdc,t.profileCompatibility,t.levelIdc,255].concat([i.length]).concat(n).concat([r.length]).concat(s))),o(T.btrt,new Uint8Array([0,28,156,128,0,45,198,192,0,45,198,192])))},U=function(t){return o(T.mp4a,new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,(65280&t.channelcount)>>8,255&t.channelcount,(65280&t.samplesize)>>8,255&t.samplesize,0,0,0,0,(65280&t.samplerate)>>8,255&t.samplerate,0,0]),i(t))},h=function(t){var e=new Uint8Array([0,0,0,7,0,0,0,0,0,0,0,0,(4278190080&t.id)>>24,(16711680&t.id)>>16,(65280&t.id)>>8,255&t.id,0,0,0,0,(4278190080&t.duration)>>24,(16711680&t.duration)>>16,(65280&t.duration)>>8,255&t.duration,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,64,0,0,0,(65280&t.width)>>8,255&t.width,0,0,(65280&t.height)>>8,255&t.height,0,0]);return o(T.tkhd,e)},v=function(t){var e,i,r,n,s,a;return e=o(T.tfhd,new Uint8Array([0,0,0,58,(4278190080&t.id)>>24,(16711680&t.id)>>16,(65280&t.id)>>8,255&t.id,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0])),s=Math.floor(t.baseMediaDecodeTime/(V+1)),a=Math.floor(t.baseMediaDecodeTime%(V+1)),i=o(T.tfdt,new Uint8Array([1,0,0,0,s>>>24&255,s>>>16&255,s>>>8&255,255&s,a>>>24&255,a>>>16&255,a>>>8&255,255&a])),92,"audio"===t.type?(r=b(t,92),o(T.traf,e,i,r)):(n=m(t),r=b(t,n.length+92),o(T.traf,e,i,r,n))},c=function(t){return t.duration=t.duration||4294967295,o(T.trak,h(t),d(t))},_=function(t){var e=new Uint8Array([0,0,0,0,(4278190080&t.id)>>24,(16711680&t.id)>>16,(65280&t.id)>>8,255&t.id,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1]);return"video"!==t.type&&(e[e.length-1]=0),o(T.trex,e)},j=function(t,e){var i=0,r=0,n=0,s=0;return t.length&&(void 0!==t[0].duration&&(i=1),void 0!==t[0].size&&(r=2),void 0!==t[0].flags&&(n=4),void 0!==t[0].compositionTimeOffset&&(s=8)),[0,0,i|r|n|s,1,(4278190080&t.length)>>>24,(16711680&t.length)>>>16,(65280&t.length)>>>8,255&t.length,(4278190080&e)>>>24,(16711680&e)>>>16,(65280&e)>>>8,255&e]},B=function(t,e){var i,r,n,s;for(e+=20+16*(r=t.samples||[]).length,i=j(r,e),s=0;s<r.length;s++)n=r[s],i=i.concat([(4278190080&n.duration)>>>24,(16711680&n.duration)>>>16,(65280&n.duration)>>>8,255&n.duration,(4278190080&n.size)>>>24,(16711680&n.size)>>>16,(65280&n.size)>>>8,255&n.size,n.flags.isLeading<<2|n.flags.dependsOn,n.flags.isDependedOn<<6|n.flags.hasRedundancy<<4|n.flags.paddingValue<<1|n.flags.isNonSyncSample,61440&n.flags.degradationPriority,15&n.flags.degradationPriority,(4278190080&n.compositionTimeOffset)>>>24,(16711680&n.compositionTimeOffset)>>>16,(65280&n.compositionTimeOffset)>>>8,255&n.compositionTimeOffset]);return o(T.trun,new Uint8Array(i))},N=function(t,e){var i,r,n,s;for(e+=20+8*(r=t.samples||[]).length,i=j(r,e),s=0;s<r.length;s++)n=r[s],i=i.concat([(4278190080&n.duration)>>>24,(16711680&n.duration)>>>16,(65280&n.duration)>>>8,255&n.duration,(4278190080&n.size)>>>24,(16711680&n.size)>>>16,(65280&n.size)>>>8,255&n.size]);return o(T.trun,new Uint8Array(i))},b=function(t,e){return"audio"===t.type?N(t,e):B(t,e)};var q={ftyp:n=function(){return o(T.ftyp,S,k,S,C)},mdat:function(t){return o(T.mdat,t)},moof:t,moov:a,initSegment:function(t){var e,i=n(),r=a(t);return(e=new Uint8Array(i.byteLength+r.byteLength)).set(i),e.set(r,i.byteLength),e}},W=function(){this.init=function(){var s={};this.on=function(t,e){s[t]||(s[t]=[]),s[t]=s[t].concat(e)},this.off=function(t,e){var i;return!!s[t]&&(i=s[t].indexOf(e),s[t]=s[t].slice(),s[t].splice(i,1),-1<i)},this.trigger=function(t){var e,i,r,n;if(e=s[t])if(2===arguments.length)for(r=e.length,i=0;i<r;++i)e[i].call(this,arguments[1]);else{for(n=[],i=arguments.length,i=1;i<arguments.length;++i)n.push(arguments[i]);for(r=e.length,i=0;i<r;++i)e[i].apply(this,n)}},this.dispose=function(){s={}}}};W.prototype.pipe=function(e){return this.on("data",function(t){e.push(t)}),this.on("done",function(t){e.flush(t)}),e},W.prototype.push=function(t){this.trigger("data",t)},W.prototype.flush=function(t){this.trigger("done",t)};var z=W,G=function t(){t.prototype.init.call(this),this.captionPackets_=[],this.ccStreams_=[new Q(0,0),new Q(0,1),new Q(1,0),new Q(1,1)],this.reset(),this.ccStreams_.forEach(function(t){t.on("data",this.trigger.bind(this,"data")),t.on("done",this.trigger.bind(this,"done"))},this)};(G.prototype=new z).push=function(t){var e,i,r;if("sei_rbsp"===t.nalUnitType&&(4===(e=function(t){for(var e=0,i={payloadType:-1,payloadSize:0},r=0,n=0;e<t.byteLength&&128!==t[e];){for(;255===t[e];)r+=255,e++;for(r+=t[e++];255===t[e];)n+=255,e++;if(n+=t[e++],!i.payload&&4===r){i.payloadType=r,i.payloadSize=n,i.payload=t.subarray(e,e+n);break}e+=n,n=r=0}return i}(t.escapedRBSP)).payloadType&&(i=181!==(r=e).payload[0]?null:49!=(r.payload[1]<<8|r.payload[2])?null:"GA94"!==String.fromCharCode(r.payload[3],r.payload[4],r.payload[5],r.payload[6])?null:3!==r.payload[7]?null:r.payload.subarray(8,r.payload.length-1))))if(t.dts<this.latestDts_)this.ignoreNextEqualDts_=!0;else{if(t.dts===this.latestDts_&&this.ignoreNextEqualDts_)return this.numSameDts_--,void(this.numSameDts_||(this.ignoreNextEqualDts_=!1));this.captionPackets_=this.captionPackets_.concat(function(t,e){var i,r,n,s,a=[];if(!(64&e[0]))return a;for(r=31&e[0],i=0;i<r;i++)s={type:3&e[2+(n=3*i)],pts:t},4&e[n+2]&&(s.ccData=e[n+3]<<8|e[n+4],a.push(s));return a}(t.pts,i)),this.latestDts_!==t.dts&&(this.numSameDts_=0),this.numSameDts_++,this.latestDts_=t.dts}},G.prototype.flush=function(){this.captionPackets_.length?(this.captionPackets_.forEach(function(t,e){t.presortIndex=e}),this.captionPackets_.sort(function(t,e){return t.pts===e.pts?t.presortIndex-e.presortIndex:t.pts-e.pts}),this.captionPackets_.forEach(function(t){t.type<2&&this.dispatchCea608Packet(t)},this),this.captionPackets_.length=0,this.ccStreams_.forEach(function(t){t.flush()},this)):this.ccStreams_.forEach(function(t){t.flush()},this)},G.prototype.reset=function(){this.latestDts_=null,this.ignoreNextEqualDts_=!1,this.numSameDts_=0,this.activeCea608Channel_=[null,null],this.ccStreams_.forEach(function(t){t.reset()})},G.prototype.dispatchCea608Packet=function(t){this.setsChannel1Active(t)?this.activeCea608Channel_[t.type]=0:this.setsChannel2Active(t)&&(this.activeCea608Channel_[t.type]=1),null!==this.activeCea608Channel_[t.type]&&this.ccStreams_[(t.type<<1)+this.activeCea608Channel_[t.type]].push(t)},G.prototype.setsChannel1Active=function(t){return 4096==(30720&t.ccData)},G.prototype.setsChannel2Active=function(t){return 6144==(30720&t.ccData)};var X={42:225,92:233,94:237,95:243,96:250,123:231,124:247,125:209,126:241,127:9608,304:174,305:176,306:189,307:191,308:8482,309:162,310:163,311:9834,312:224,313:160,314:232,315:226,316:234,317:238,318:244,319:251,544:193,545:201,546:211,547:218,548:220,549:252,550:8216,551:161,552:42,553:39,554:8212,555:169,556:8480,557:8226,558:8220,559:8221,560:192,561:194,562:199,563:200,564:202,565:203,566:235,567:206,568:207,569:239,570:212,571:217,572:249,573:219,574:171,575:187,800:195,801:227,802:205,803:204,804:236,805:210,806:242,807:213,808:245,809:123,810:125,811:92,812:94,813:95,814:124,815:126,816:196,817:228,818:214,819:246,820:223,821:165,822:164,823:9474,824:197,825:229,826:216,827:248,828:9484,829:9488,830:9492,831:9496},Y=function(t){return null===t?"":(t=X[t]||t,String.fromCharCode(t))},$=[4352,4384,4608,4640,5376,5408,5632,5664,5888,5920,4096,4864,4896,5120,5152],K=function(){for(var t=[],e=15;e--;)t.push("");return t},Q=function t(e,i){t.prototype.init.call(this),this.field_=e||0,this.dataChannel_=i||0,this.name_="CC"+(1+(this.field_<<1|this.dataChannel_)),this.setConstants(),this.reset(),this.push=function(t){var e,i,r,n,s;if((e=32639&t.ccData)!==this.lastControlCode_){if(4096==(61440&e)?this.lastControlCode_=e:e!==this.PADDING_&&(this.lastControlCode_=null),r=e>>>8,n=255&e,e!==this.PADDING_)if(e===this.RESUME_CAPTION_LOADING_)this.mode_="popOn";else if(e===this.END_OF_CAPTION_)this.clearFormatting(t.pts),this.flushDisplayed(t.pts),i=this.displayed_,this.displayed_=this.nonDisplayed_,this.nonDisplayed_=i,this.startPts_=t.pts;else if(e===this.ROLL_UP_2_ROWS_)this.topRow_=13,this.mode_="rollUp";else if(e===this.ROLL_UP_3_ROWS_)this.topRow_=12,this.mode_="rollUp";else if(e===this.ROLL_UP_4_ROWS_)this.topRow_=11,this.mode_="rollUp";else if(e===this.CARRIAGE_RETURN_)this.clearFormatting(t.pts),this.flushDisplayed(t.pts),this.shiftRowsUp_(),this.startPts_=t.pts;else if(e===this.BACKSPACE_)"popOn"===this.mode_?this.nonDisplayed_[14]=this.nonDisplayed_[14].slice(0,-1):this.displayed_[14]=this.displayed_[14].slice(0,-1);else if(e===this.ERASE_DISPLAYED_MEMORY_)this.flushDisplayed(t.pts),this.displayed_=K();else if(e===this.ERASE_NON_DISPLAYED_MEMORY_)this.nonDisplayed_=K();else if(e===this.RESUME_DIRECT_CAPTIONING_)this.mode_="paintOn";else if(this.isSpecialCharacter(r,n))s=Y((r=(3&r)<<8)|n),this[this.mode_](t.pts,s),this.column_++;else if(this.isExtCharacter(r,n))"popOn"===this.mode_?this.nonDisplayed_[this.row_]=this.nonDisplayed_[this.row_].slice(0,-1):this.displayed_[14]=this.displayed_[14].slice(0,-1),s=Y((r=(3&r)<<8)|n),this[this.mode_](t.pts,s),this.column_++;else if(this.isMidRowCode(r,n))this.clearFormatting(t.pts),this[this.mode_](t.pts," "),this.column_++,14==(14&n)&&this.addFormatting(t.pts,["i"]),1==(1&n)&&this.addFormatting(t.pts,["u"]);else if(this.isOffsetControlCode(r,n))this.column_+=3&n;else if(this.isPAC(r,n)){var a=$.indexOf(7968&e);a!==this.row_&&(this.clearFormatting(t.pts),this.row_=a),1&n&&-1===this.formatting_.indexOf("u")&&this.addFormatting(t.pts,["u"]),16==(16&e)&&(this.column_=4*((14&e)>>1)),this.isColorPAC(n)&&14==(14&n)&&this.addFormatting(t.pts,["i"])}else this.isNormalChar(r)&&(0===n&&(n=null),s=Y(r),s+=Y(n),this[this.mode_](t.pts,s),this.column_+=s.length)}else this.lastControlCode_=null}};Q.prototype=new z,Q.prototype.flushDisplayed=function(t){var e=this.displayed_.map(function(t){return t.trim()}).join("\n").replace(/^\n+|\n+$/g,"");e.length&&this.trigger("data",{startPts:this.startPts_,endPts:t,text:e,stream:this.name_})},Q.prototype.reset=function(){this.mode_="popOn",this.topRow_=0,this.startPts_=0,this.displayed_=K(),this.nonDisplayed_=K(),this.lastControlCode_=null,this.column_=0,this.row_=14,this.formatting_=[]},Q.prototype.setConstants=function(){0===this.dataChannel_?(this.BASE_=16,this.EXT_=17,this.CONTROL_=(20|this.field_)<<8,this.OFFSET_=23):1===this.dataChannel_&&(this.BASE_=24,this.EXT_=25,this.CONTROL_=(28|this.field_)<<8,this.OFFSET_=31),this.PADDING_=0,this.RESUME_CAPTION_LOADING_=32|this.CONTROL_,this.END_OF_CAPTION_=47|this.CONTROL_,this.ROLL_UP_2_ROWS_=37|this.CONTROL_,this.ROLL_UP_3_ROWS_=38|this.CONTROL_,this.ROLL_UP_4_ROWS_=39|this.CONTROL_,this.CARRIAGE_RETURN_=45|this.CONTROL_,this.RESUME_DIRECT_CAPTIONING_=41|this.CONTROL_,this.BACKSPACE_=33|this.CONTROL_,this.ERASE_DISPLAYED_MEMORY_=44|this.CONTROL_,this.ERASE_NON_DISPLAYED_MEMORY_=46|this.CONTROL_},Q.prototype.isSpecialCharacter=function(t,e){return t===this.EXT_&&48<=e&&e<=63},Q.prototype.isExtCharacter=function(t,e){return(t===this.EXT_+1||t===this.EXT_+2)&&32<=e&&e<=63},Q.prototype.isMidRowCode=function(t,e){return t===this.EXT_&&32<=e&&e<=47},Q.prototype.isOffsetControlCode=function(t,e){return t===this.OFFSET_&&33<=e&&e<=35},Q.prototype.isPAC=function(t,e){return t>=this.BASE_&&t<this.BASE_+8&&64<=e&&e<=127},Q.prototype.isColorPAC=function(t){return 64<=t&&t<=79||96<=t&&t<=127},Q.prototype.isNormalChar=function(t){return 32<=t&&t<=127},Q.prototype.addFormatting=function(t,e){this.formatting_=this.formatting_.concat(e);var i=e.reduce(function(t,e){return t+"<"+e+">"},"");this[this.mode_](t,i)},Q.prototype.clearFormatting=function(t){if(this.formatting_.length){var e=this.formatting_.reverse().reduce(function(t,e){return t+"</"+e+">"},"");this.formatting_=[],this[this.mode_](t,e)}},Q.prototype.popOn=function(t,e){var i=this.nonDisplayed_[this.row_];i+=e,this.nonDisplayed_[this.row_]=i},Q.prototype.rollUp=function(t,e){var i=this.displayed_[14];i+=e,this.displayed_[14]=i},Q.prototype.shiftRowsUp_=function(){var t;for(t=0;t<this.topRow_;t++)this.displayed_[t]="";for(t=this.topRow_;t<14;t++)this.displayed_[t]=this.displayed_[t+1];this.displayed_[14]=""},Q.prototype.paintOn=function(){};var J={CaptionStream:G,Cea608Stream:Q},Z={H264_STREAM_TYPE:27,ADTS_STREAM_TYPE:15,METADATA_STREAM_TYPE:21},tt=function(t,e){var i=1;for(e<t&&(i=-1);4294967296<Math.abs(e-t);)t+=8589934592*i;return t},et=function t(e){var i,r;t.prototype.init.call(this),this.type_=e,this.push=function(t){t.type===this.type_&&(void 0===r&&(r=t.dts),t.dts=tt(t.dts,r),t.pts=tt(t.pts,r),i=t.dts,this.trigger("data",t))},this.flush=function(){r=i,this.trigger("done")},this.discontinuity=function(){i=r=void 0}};et.prototype=new z;var it,rt=et,nt=function(t,e,i){var r,n="";for(r=e;r<i;r++)n+="%"+("00"+t[r].toString(16)).slice(-2);return n},st=function(t,e,i){return decodeURIComponent(nt(t,e,i))},at=function(t){return t[0]<<21|t[1]<<14|t[2]<<7|t[3]},ot={TXXX:function(t){var e;if(3===t.data[0]){for(e=1;e<t.data.length;e++)if(0===t.data[e]){t.description=st(t.data,1,e),t.value=st(t.data,e+1,t.data.length).replace(/\0*$/,"");break}t.data=t.value}},WXXX:function(t){var e;if(3===t.data[0])for(e=1;e<t.data.length;e++)if(0===t.data[e]){t.description=st(t.data,1,e),t.url=st(t.data,e+1,t.data.length);break}},PRIV:function(t){var e,i;for(e=0;e<t.data.length;e++)if(0===t.data[e]){t.owner=(i=t.data,unescape(nt(i,0,e)));break}t.privateData=t.data.subarray(e+1),t.data=t.privateData}};(it=function(t){var e,u={debug:!(!t||!t.debug),descriptor:t&&t.descriptor},l=0,c=[],h=0;if(it.prototype.init.call(this),this.dispatchType=Z.METADATA_STREAM_TYPE.toString(16),u.descriptor)for(e=0;e<u.descriptor.length;e++)this.dispatchType+=("00"+u.descriptor[e].toString(16)).slice(-2);this.push=function(t){var e,i,r,n,s;if("timed-metadata"===t.type)if(t.dataAlignmentIndicator&&(h=0,c.length=0),0===c.length&&(t.data.length<10||t.data[0]!=="I".charCodeAt(0)||t.data[1]!=="D".charCodeAt(0)||t.data[2]!=="3".charCodeAt(0)))u.debug;else if(c.push(t),h+=t.data.byteLength,1===c.length&&(l=at(t.data.subarray(6,10)),l+=10),!(h<l)){for(e={data:new Uint8Array(l),frames:[],pts:c[0].pts,dts:c[0].dts},s=0;s<l;)e.data.set(c[0].data.subarray(0,l-s),s),s+=c[0].data.byteLength,h-=c[0].data.byteLength,c.shift();i=10,64&e.data[5]&&(i+=4,i+=at(e.data.subarray(10,14)),l-=at(e.data.subarray(16,20)));do{if((r=at(e.data.subarray(i+4,i+8)))<1)return;if((n={id:String.fromCharCode(e.data[i],e.data[i+1],e.data[i+2],e.data[i+3]),data:e.data.subarray(i+10,i+r+10)}).key=n.id,ot[n.id]&&(ot[n.id](n),"com.apple.streaming.transportStreamTimestamp"===n.owner)){var a=n.data,o=(1&a[3])<<30|a[4]<<22|a[5]<<14|a[6]<<6|a[7]>>>2;o*=4,o+=3&a[7],n.timeStamp=o,void 0===e.pts&&void 0===e.dts&&(e.pts=n.timeStamp,e.dts=n.timeStamp),this.trigger("timestamp",n)}e.frames.push(n),i+=10,i+=r}while(i<l);this.trigger("data",e)}}}).prototype=new z;var ut,lt,ct,ht=it,dt=rt;(ut=function(){var n=new Uint8Array(188),s=0;ut.prototype.init.call(this),this.push=function(t){var e,i=0,r=188;for(s?((e=new Uint8Array(t.byteLength+s)).set(n.subarray(0,s)),e.set(t,s),s=0):e=t;r<e.byteLength;)71!==e[i]||71!==e[r]?(i++,r++):(this.trigger("data",e.subarray(i,r)),i+=188,r+=188);i<e.byteLength&&(n.set(e.subarray(i),0),s=e.byteLength-i)},this.flush=function(){188===s&&71===n[0]&&(this.trigger("data",n),s=0),this.trigger("done")}}).prototype=new z,(lt=function(){var r,n,s,a;lt.prototype.init.call(this),(a=this).packetsWaitingForPmt=[],this.programMapTable=void 0,r=function(t,e){var i=0;e.payloadUnitStartIndicator&&(i+=t[i]+1),"pat"===e.type?n(t.subarray(i),e):s(t.subarray(i),e)},n=function(t,e){e.section_number=t[7],e.last_section_number=t[8],a.pmtPid=(31&t[10])<<8|t[11],e.pmtPid=a.pmtPid},s=function(t,e){var i,r;if(1&t[5]){for(a.programMapTable={video:null,audio:null,"timed-metadata":{}},i=3+((15&t[1])<<8|t[2])-4,r=12+((15&t[10])<<8|t[11]);r<i;){var n=t[r],s=(31&t[r+1])<<8|t[r+2];n===Z.H264_STREAM_TYPE&&null===a.programMapTable.video?a.programMapTable.video=s:n===Z.ADTS_STREAM_TYPE&&null===a.programMapTable.audio?a.programMapTable.audio=s:n===Z.METADATA_STREAM_TYPE&&(a.programMapTable["timed-metadata"][s]=n),r+=5+((15&t[r+3])<<8|t[r+4])}e.programMapTable=a.programMapTable}},this.push=function(t){var e={},i=4;if(e.payloadUnitStartIndicator=!!(64&t[1]),e.pid=31&t[1],e.pid<<=8,e.pid|=t[2],1<(48&t[3])>>>4&&(i+=t[i]+1),0===e.pid)e.type="pat",r(t.subarray(i),e),this.trigger("data",e);else if(e.pid===this.pmtPid)for(e.type="pmt",r(t.subarray(i),e),this.trigger("data",e);this.packetsWaitingForPmt.length;)this.processPes_.apply(this,this.packetsWaitingForPmt.shift());else void 0===this.programMapTable?this.packetsWaitingForPmt.push([t,i,e]):this.processPes_(t,i,e)},this.processPes_=function(t,e,i){i.pid===this.programMapTable.video?i.streamType=Z.H264_STREAM_TYPE:i.pid===this.programMapTable.audio?i.streamType=Z.ADTS_STREAM_TYPE:i.streamType=this.programMapTable["timed-metadata"][i.pid],i.type="pes",i.data=t.subarray(e),this.trigger("data",i)}}).prototype=new z,lt.STREAM_TYPES={h264:27,adts:15},(ct=function(){var d=this,r={data:[],size:0},n={data:[],size:0},s={data:[],size:0},a=function(t,e,i){var r,n,s=new Uint8Array(t.size),a={type:e},o=0,u=0;if(t.data.length&&!(t.size<9)){for(a.trackId=t.data[0].pid,o=0;o<t.data.length;o++)n=t.data[o],s.set(n.data,u),u+=n.data.byteLength;var l,c,h;l=s,(c=a).packetLength=6+(l[4]<<8|l[5]),c.dataAlignmentIndicator=0!=(4&l[6]),192&(h=l[7])&&(c.pts=(14&l[9])<<27|(255&l[10])<<20|(254&l[11])<<12|(255&l[12])<<5|(254&l[13])>>>3,c.pts*=4,c.pts+=(6&l[13])>>>1,c.dts=c.pts,64&h&&(c.dts=(14&l[14])<<27|(255&l[15])<<20|(254&l[16])<<12|(255&l[17])<<5|(254&l[18])>>>3,c.dts*=4,c.dts+=(6&l[18])>>>1)),c.data=l.subarray(9+l[8]),r="video"===e||a.packetLength<=t.size,(i||r)&&(t.size=0,t.data.length=0),r&&d.trigger("data",a)}};ct.prototype.init.call(this),this.push=function(i){({pat:function(){},pes:function(){var t,e;switch(i.streamType){case Z.H264_STREAM_TYPE:case Z.H264_STREAM_TYPE:t=r,e="video";break;case Z.ADTS_STREAM_TYPE:t=n,e="audio";break;case Z.METADATA_STREAM_TYPE:t=s,e="timed-metadata";break;default:return}i.payloadUnitStartIndicator&&a(t,e,!0),t.data.push(i),t.size+=i.data.byteLength},pmt:function(){var t={type:"metadata",tracks:[]},e=i.programMapTable;null!==e.video&&t.tracks.push({timelineStartInfo:{baseMediaDecodeTime:0},id:+e.video,codec:"avc",type:"video"}),null!==e.audio&&t.tracks.push({timelineStartInfo:{baseMediaDecodeTime:0},id:+e.audio,codec:"adts",type:"audio"}),d.trigger("data",t)}})[i.type]()},this.flush=function(){a(r,"video"),a(n,"audio"),a(s,"timed-metadata"),this.trigger("done")}}).prototype=new z;var pt={PAT_PID:0,MP2T_PACKET_LENGTH:188,TransportPacketStream:ut,TransportParseStream:lt,ElementaryStream:ct,TimestampRolloverStream:dt,CaptionStream:J.CaptionStream,Cea608Stream:J.Cea608Stream,MetadataStream:ht};for(var ft in Z)Z.hasOwnProperty(ft)&&(pt[ft]=Z[ft]);var mt,gt=pt,yt=[96e3,88200,64e3,48e3,44100,32e3,24e3,22050,16e3,12e3,11025,8e3,7350];(mt=function(){var l;mt.prototype.init.call(this),this.push=function(t){var e,i,r,n,s,a,o=0,u=0;if("audio"===t.type)for(l?(n=l,(l=new Uint8Array(n.byteLength+t.data.byteLength)).set(n),l.set(t.data,n.byteLength)):l=t.data;o+5<l.length;)if(255===l[o]&&240==(246&l[o+1])){if(i=2*(1&~l[o+1]),e=(3&l[o+3])<<11|l[o+4]<<3|(224&l[o+5])>>5,a=9e4*(s=1024*(1+(3&l[o+6])))/yt[(60&l[o+2])>>>2],r=o+e,l.byteLength<r)return;if(this.trigger("data",{pts:t.pts+u*a,dts:t.dts+u*a,sampleCount:s,audioobjecttype:1+(l[o+2]>>>6&3),channelcount:(1&l[o+2])<<2|(192&l[o+3])>>>6,samplerate:yt[(60&l[o+2])>>>2],samplingfrequencyindex:(60&l[o+2])>>>2,samplesize:16,data:l.subarray(o+7+i,r)}),l.byteLength===r)return void(l=void 0);u++,l=l.subarray(r)}else o++},this.flush=function(){this.trigger("done")}}).prototype=new z;var vt,_t,bt,Tt=mt,St=function(r){var n=r.byteLength,s=0,a=0;this.length=function(){return 8*n},this.bitsAvailable=function(){return 8*n+a},this.loadWord=function(){var t=r.byteLength-n,e=new Uint8Array(4),i=Math.min(4,n);if(0===i)throw new Error("no bytes available");e.set(r.subarray(t,t+i)),s=new DataView(e.buffer).getUint32(0),a=8*i,n-=i},this.skipBits=function(t){var e;t<a||(t-=a,t-=8*(e=Math.floor(t/8)),n-=e,this.loadWord()),s<<=t,a-=t},this.readBits=function(t){var e=Math.min(a,t),i=s>>>32-e;return 0<(a-=e)?s<<=e:0<n&&this.loadWord(),0<(e=t-e)?i<<e|this.readBits(e):i},this.skipLeadingZeros=function(){var t;for(t=0;t<a;++t)if(0!=(s&2147483648>>>t))return s<<=t,a-=t,t;return this.loadWord(),t+this.skipLeadingZeros()},this.skipUnsignedExpGolomb=function(){this.skipBits(1+this.skipLeadingZeros())},this.skipExpGolomb=function(){this.skipBits(1+this.skipLeadingZeros())},this.readUnsignedExpGolomb=function(){var t=this.skipLeadingZeros();return this.readBits(t+1)-1},this.readExpGolomb=function(){var t=this.readUnsignedExpGolomb();return 1&t?1+t>>>1:-1*(t>>>1)},this.readBoolean=function(){return 1===this.readBits(1)},this.readUnsignedByte=function(){return this.readBits(8)},this.loadWord()};(_t=function(){var i,r,n=0;_t.prototype.init.call(this),this.push=function(t){var e;for(r?((e=new Uint8Array(r.byteLength+t.data.byteLength)).set(r),e.set(t.data,r.byteLength),r=e):r=t.data;n<r.byteLength-3;n++)if(1===r[n+2]){i=n+5;break}for(;i<r.byteLength;)switch(r[i]){case 0:if(0!==r[i-1]){i+=2;break}if(0!==r[i-2]){i++;break}for(n+3!==i-2&&this.trigger("data",r.subarray(n+3,i-2));1!==r[++i]&&i<r.length;);n=i-2,i+=3;break;case 1:if(0!==r[i-1]||0!==r[i-2]){i+=3;break}this.trigger("data",r.subarray(n+3,i-2)),n=i-2,i+=3;break;default:i+=3}r=r.subarray(n),i-=n,n=0},this.flush=function(){r&&3<r.byteLength&&this.trigger("data",r.subarray(n+3)),r=null,n=0,this.trigger("done")}}).prototype=new z,bt={100:!0,110:!0,122:!0,244:!0,44:!0,83:!0,86:!0,118:!0,128:!0,138:!0,139:!0,134:!0},(vt=function(){var i,r,n,s,a,o,_,e=new _t;vt.prototype.init.call(this),(i=this).push=function(t){"video"===t.type&&(r=t.trackId,n=t.pts,s=t.dts,e.push(t))},e.on("data",function(t){var e={trackId:r,pts:n,dts:s,data:t};switch(31&t[0]){case 5:e.nalUnitType="slice_layer_without_partitioning_rbsp_idr";break;case 6:e.nalUnitType="sei_rbsp",e.escapedRBSP=a(t.subarray(1));break;case 7:e.nalUnitType="seq_parameter_set_rbsp",e.escapedRBSP=a(t.subarray(1)),e.config=o(e.escapedRBSP);break;case 8:e.nalUnitType="pic_parameter_set_rbsp";break;case 9:e.nalUnitType="access_unit_delimiter_rbsp"}i.trigger("data",e)}),e.on("done",function(){i.trigger("done")}),this.flush=function(){e.flush()},_=function(t,e){var i,r=8,n=8;for(i=0;i<t;i++)0!==n&&(n=(r+e.readExpGolomb()+256)%256),r=0===n?r:n},a=function(t){for(var e,i,r=t.byteLength,n=[],s=1;s<r-2;)0===t[s]&&0===t[s+1]&&3===t[s+2]?(n.push(s+2),s+=2):s++;if(0===n.length)return t;e=r-n.length,i=new Uint8Array(e);var a=0;for(s=0;s<e;a++,s++)a===n[0]&&(a++,n.shift()),i[s]=t[a];return i},o=function(t){var e,i,r,n,s,a,o,u,l,c,h,d,p,f=0,m=0,g=0,y=0,v=1;if(i=(e=new St(t)).readUnsignedByte(),n=e.readUnsignedByte(),r=e.readUnsignedByte(),e.skipUnsignedExpGolomb(),bt[i]&&(3===(s=e.readUnsignedExpGolomb())&&e.skipBits(1),e.skipUnsignedExpGolomb(),e.skipUnsignedExpGolomb(),e.skipBits(1),e.readBoolean()))for(h=3!==s?8:12,p=0;p<h;p++)e.readBoolean()&&_(p<6?16:64,e);if(e.skipUnsignedExpGolomb(),0===(a=e.readUnsignedExpGolomb()))e.readUnsignedExpGolomb();else if(1===a)for(e.skipBits(1),e.skipExpGolomb(),e.skipExpGolomb(),o=e.readUnsignedExpGolomb(),p=0;p<o;p++)e.skipExpGolomb();if(e.skipUnsignedExpGolomb(),e.skipBits(1),u=e.readUnsignedExpGolomb(),l=e.readUnsignedExpGolomb(),0===(c=e.readBits(1))&&e.skipBits(1),e.skipBits(1),e.readBoolean()&&(f=e.readUnsignedExpGolomb(),m=e.readUnsignedExpGolomb(),g=e.readUnsignedExpGolomb(),y=e.readUnsignedExpGolomb()),e.readBoolean()&&e.readBoolean()){switch(e.readUnsignedByte()){case 1:d=[1,1];break;case 2:d=[12,11];break;case 3:d=[10,11];break;case 4:d=[16,11];break;case 5:d=[40,33];break;case 6:d=[24,11];break;case 7:d=[20,11];break;case 8:d=[32,11];break;case 9:d=[80,33];break;case 10:d=[18,11];break;case 11:d=[15,11];break;case 12:d=[64,33];break;case 13:d=[160,99];break;case 14:d=[4,3];break;case 15:d=[3,2];break;case 16:d=[2,1];break;case 255:d=[e.readUnsignedByte()<<8|e.readUnsignedByte(),e.readUnsignedByte()<<8|e.readUnsignedByte()]}d&&(v=d[0]/d[1])}return{profileIdc:i,levelIdc:r,profileCompatibility:n,width:Math.ceil((16*(u+1)-2*f-2*m)*v),height:(2-c)*(l+1)*16-2*g-2*y}}}).prototype=new z;var kt,Ct={H264Stream:vt,NalByteStream:_t};(kt=function(){var o=new Uint8Array,u=0;kt.prototype.init.call(this),this.setTimestamp=function(t){u=t},this.parseId3TagSize=function(t,e){var i=t[e+6]<<21|t[e+7]<<14|t[e+8]<<7|t[e+9];return(16&t[e+5])>>4?i+20:i+10},this.parseAdtsSize=function(t,e){var i=(224&t[e+5])>>5,r=t[e+4]<<3;return 6144&t[e+3]|r|i},this.push=function(t){var e,i,r,n,s=0,a=0;for(o.length?(n=o.length,(o=new Uint8Array(t.byteLength+n)).set(o.subarray(0,n)),o.set(t,n)):o=t;3<=o.length-a;)if(o[a]!=="I".charCodeAt(0)||o[a+1]!=="D".charCodeAt(0)||o[a+2]!=="3".charCodeAt(0))if(!0&o[a]&&240==(240&o[a+1])){if(o.length-a<7)break;if((s=this.parseAdtsSize(o,a))>o.length)break;r={type:"audio",data:o.subarray(a,a+s),pts:u,dts:u},this.trigger("data",r),a+=s}else a++;else{if(o.length-a<10)break;if((s=this.parseId3TagSize(o,a))>o.length)break;i={type:"timed-metadata",data:o.subarray(a,a+s)},this.trigger("data",i),a+=s}e=o.length-a,o=0<e?o.subarray(a):new Uint8Array}}).prototype=new z;var Et,wt,At,Lt,Pt,Ot,xt,It,Dt,Rt,Mt,Ut,Nt,Bt,jt,Ft=kt,Ht=[33,16,5,32,164,27],Vt=[33,65,108,84,1,2,4,8,168,2,4,8,17,191,252],qt=function(t){for(var e=[];t--;)e.push(0);return e},Wt={96000:[Ht,[227,64],qt(154),[56]],88200:[Ht,[231],qt(170),[56]],64000:[Ht,[248,192],qt(240),[56]],48000:[Ht,[255,192],qt(268),[55,148,128],qt(54),[112]],44100:[Ht,[255,192],qt(268),[55,163,128],qt(84),[112]],32000:[Ht,[255,192],qt(268),[55,234],qt(226),[112]],24000:[Ht,[255,192],qt(268),[55,255,128],qt(268),[111,112],qt(126),[224]],16000:[Ht,[255,192],qt(268),[55,255,128],qt(268),[111,255],qt(269),[223,108],qt(195),[1,192]],12000:[Vt,qt(268),[3,127,248],qt(268),[6,255,240],qt(268),[13,255,224],qt(268),[27,253,128],qt(259),[56]],11025:[Vt,qt(268),[3,127,248],qt(268),[6,255,240],qt(268),[13,255,224],qt(268),[27,255,192],qt(268),[55,175,128],qt(108),[112]],8000:[Vt,qt(268),[3,121,16],qt(47),[7]]},zt=(Et=Wt,Object.keys(Et).reduce(function(t,e){return t[e]=new Uint8Array(Et[e].reduce(function(t,e){return t.concat(e)},[])),t},{})),Gt=(wt=function(t){return 9e4*t},At=function(t,e){return t*e},Lt=function(t){return t/9e4},Pt=function(t,e){return t/e},function(t,e){return wt(Pt(t,e))}),Xt=function(t,e){return At(Lt(t),e)},Yt=Ct.H264Stream,$t=["audioobjecttype","channelcount","samplerate","samplingfrequencyindex","samplesize"],Kt=["width","height","profileIdc","levelIdc","profileCompatibility"];Rt=function(t){return t[0]==="I".charCodeAt(0)&&t[1]==="D".charCodeAt(0)&&t[2]==="3".charCodeAt(0)},Bt=function(t,e){var i;if(t.length!==e.length)return!1;for(i=0;i<t.length;i++)if(t[i]!==e[i])return!1;return!0},jt=function(t){var e,i=0;for(e=0;e<t.length;e++)i+=t[e].data.byteLength;return i},(xt=function(n,s){var a=[],o=0,e=0,l=0,c=1/0;s=s||{},xt.prototype.init.call(this),this.push=function(e){Mt(n,e),n&&$t.forEach(function(t){n[t]=e[t]}),a.push(e)},this.setEarliestDts=function(t){e=t-n.timelineStartInfo.baseMediaDecodeTime},this.setVideoBaseMediaDecodeTime=function(t){c=t},this.setAudioAppendStart=function(t){l=t},this.flush=function(){var t,e,i,r;0!==a.length&&(t=this.trimAdtsFramesByEarliestDts_(a),n.baseMediaDecodeTime=Nt(n,s.keepOriginalTimestamps),this.prefixWithSilence_(n,t),n.samples=this.generateSampleTable_(t),i=q.mdat(this.concatenateFrameData_(t)),a=[],e=q.moof(o,[n]),r=new Uint8Array(e.byteLength+i.byteLength),o++,r.set(e),r.set(i,e.byteLength),Ut(n),this.trigger("data",{track:n,boxes:r})),this.trigger("done","AudioSegmentStream")},this.prefixWithSilence_=function(t,e){var i,r,n,s,a=0,o=0,u=0;if(e.length&&(i=Gt(t.baseMediaDecodeTime,t.samplerate),r=Math.ceil(9e4/(t.samplerate/1024)),l&&c&&(a=i-Math.max(l,c),u=(o=Math.floor(a/r))*r),!(o<1||45e3<u))){for((n=zt[t.samplerate])||(n=e[0].data),s=0;s<o;s++)e.splice(s,0,{data:n});t.baseMediaDecodeTime-=Math.floor(Xt(u,t.samplerate))}},this.trimAdtsFramesByEarliestDts_=function(t){return n.minSegmentDts>=e?t:(n.minSegmentDts=1/0,t.filter(function(t){return t.dts>=e&&(n.minSegmentDts=Math.min(n.minSegmentDts,t.dts),n.minSegmentPts=n.minSegmentDts,!0)}))},this.generateSampleTable_=function(t){var e,i,r=[];for(e=0;e<t.length;e++)i=t[e],r.push({size:i.data.byteLength,duration:1024});return r},this.concatenateFrameData_=function(t){var e,i,r=0,n=new Uint8Array(jt(t));for(e=0;e<t.length;e++)i=t[e],n.set(i.data,r),r+=i.data.byteLength;return n}}).prototype=new z,(Ot=function(o,u){var e,i,l=0,c=[],h=[];u=u||{},Ot.prototype.init.call(this),delete o.minPTS,this.gopCache_=[],this.push=function(t){Mt(o,t),"seq_parameter_set_rbsp"!==t.nalUnitType||e||(e=t.config,o.sps=[t.data],Kt.forEach(function(t){o[t]=e[t]},this)),"pic_parameter_set_rbsp"!==t.nalUnitType||i||(i=t.data,o.pps=[t.data]),c.push(t)},this.flush=function(){for(var t,e,i,r,n,s;c.length&&"access_unit_delimiter_rbsp"!==c[0].nalUnitType;)c.shift();if(0===c.length)return this.resetStream_(),void this.trigger("done","VideoSegmentStream");if(t=this.groupNalsIntoFrames_(c),(i=this.groupFramesIntoGops_(t))[0][0].keyFrame||((e=this.getGopForFusion_(c[0],o))?(i.unshift(e),i.byteLength+=e.byteLength,i.nalCount+=e.nalCount,i.pts=e.pts,i.dts=e.dts,i.duration+=e.duration):i=this.extendFirstKeyFrame_(i)),h.length){var a;if(!(a=u.alignGopsAtEnd?this.alignGopsAtEnd_(i):this.alignGopsAtStart_(i)))return this.gopCache_.unshift({gop:i.pop(),pps:o.pps,sps:o.sps}),this.gopCache_.length=Math.min(6,this.gopCache_.length),c=[],this.resetStream_(),void this.trigger("done","VideoSegmentStream");Ut(o),i=a}Mt(o,i),o.samples=this.generateSampleTable_(i),n=q.mdat(this.concatenateNalData_(i)),o.baseMediaDecodeTime=Nt(o,u.keepOriginalTimestamps),this.trigger("processedGopsInfo",i.map(function(t){return{pts:t.pts,dts:t.dts,byteLength:t.byteLength}})),this.gopCache_.unshift({gop:i.pop(),pps:o.pps,sps:o.sps}),this.gopCache_.length=Math.min(6,this.gopCache_.length),c=[],this.trigger("baseMediaDecodeTime",o.baseMediaDecodeTime),this.trigger("timelineStartInfo",o.timelineStartInfo),r=q.moof(l,[o]),s=new Uint8Array(r.byteLength+n.byteLength),l++,s.set(r),s.set(n,r.byteLength),this.trigger("data",{track:o,boxes:s}),this.resetStream_(),this.trigger("done","VideoSegmentStream")},this.resetStream_=function(){Ut(o),i=e=void 0},this.getGopForFusion_=function(t){var e,i,r,n,s,a=1/0;for(s=0;s<this.gopCache_.length;s++)r=(n=this.gopCache_[s]).gop,o.pps&&Bt(o.pps[0],n.pps[0])&&o.sps&&Bt(o.sps[0],n.sps[0])&&(r.dts<o.timelineStartInfo.dts||-1e4<=(e=t.dts-r.dts-r.duration)&&e<=45e3&&(!i||e<a)&&(i=n,a=e));return i?i.gop:null},this.extendFirstKeyFrame_=function(t){var e;return!t[0][0].keyFrame&&1<t.length&&(e=t.shift(),t.byteLength-=e.byteLength,t.nalCount-=e.nalCount,t[0][0].dts=e.dts,t[0][0].pts=e.pts,t[0][0].duration+=e.duration),t},this.groupNalsIntoFrames_=function(t){var e,i,r=[],n=[];for(e=r.byteLength=0;e<t.length;e++)"access_unit_delimiter_rbsp"===(i=t[e]).nalUnitType?(r.length&&(r.duration=i.dts-r.dts,n.push(r)),(r=[i]).byteLength=i.data.byteLength,r.pts=i.pts,r.dts=i.dts):("slice_layer_without_partitioning_rbsp_idr"===i.nalUnitType&&(r.keyFrame=!0),r.duration=i.dts-r.dts,r.byteLength+=i.data.byteLength,r.push(i));return n.length&&(!r.duration||r.duration<=0)&&(r.duration=n[n.length-1].duration),n.push(r),n},this.groupFramesIntoGops_=function(t){var e,i,r=[],n=[];for(r.byteLength=0,r.nalCount=0,r.duration=0,r.pts=t[0].pts,r.dts=t[0].dts,n.byteLength=0,n.nalCount=0,n.duration=0,n.pts=t[0].pts,n.dts=t[0].dts,e=0;e<t.length;e++)(i=t[e]).keyFrame?(r.length&&(n.push(r),n.byteLength+=r.byteLength,n.nalCount+=r.nalCount,n.duration+=r.duration),(r=[i]).nalCount=i.length,r.byteLength=i.byteLength,r.pts=i.pts,r.dts=i.dts,r.duration=i.duration):(r.duration+=i.duration,r.nalCount+=i.length,r.byteLength+=i.byteLength,r.push(i));return n.length&&r.duration<=0&&(r.duration=n[n.length-1].duration),n.byteLength+=r.byteLength,n.nalCount+=r.nalCount,n.duration+=r.duration,n.push(r),n},this.generateSampleTable_=function(t,e){var i,r,n,s,a,o=e||0,u=[];for(i=0;i<t.length;i++)for(s=t[i],r=0;r<s.length;r++)a=s[r],(n={size:0,flags:{isLeading:0,dependsOn:1,isDependedOn:0,hasRedundancy:0,degradationPriority:0}}).dataOffset=o,n.compositionTimeOffset=a.pts-a.dts,n.duration=a.duration,n.size=4*a.length,n.size+=a.byteLength,a.keyFrame&&(n.flags.dependsOn=2),o+=n.size,u.push(n);return u},this.concatenateNalData_=function(t){var e,i,r,n,s,a,o=0,u=t.byteLength,l=t.nalCount,c=new Uint8Array(u+4*l),h=new DataView(c.buffer);for(e=0;e<t.length;e++)for(n=t[e],i=0;i<n.length;i++)for(s=n[i],r=0;r<s.length;r++)a=s[r],h.setUint32(o,a.data.byteLength),o+=4,c.set(a.data,o),o+=a.data.byteLength;return c},this.alignGopsAtStart_=function(t){var e,i,r,n,s,a,o,u;for(s=t.byteLength,a=t.nalCount,o=t.duration,e=i=0;e<h.length&&i<t.length&&(r=h[e],n=t[i],r.pts!==n.pts);)n.pts>r.pts?e++:(i++,s-=n.byteLength,a-=n.nalCount,o-=n.duration);return 0===i?t:i===t.length?null:((u=t.slice(i)).byteLength=s,u.duration=o,u.nalCount=a,u.pts=u[0].pts,u.dts=u[0].dts,u)},this.alignGopsAtEnd_=function(t){var e,i,r,n,s,a,o;for(e=h.length-1,i=t.length-1,s=null,a=!1;0<=e&&0<=i;){if(r=h[e],n=t[i],r.pts===n.pts){a=!0;break}r.pts>n.pts?e--:(e===h.length-1&&(s=i),i--)}if(!a&&null===s)return null;if(0===(o=a?i:s))return t;var u=t.slice(o),l=u.reduce(function(t,e){return t.byteLength+=e.byteLength,t.duration+=e.duration,t.nalCount+=e.nalCount,t},{byteLength:0,duration:0,nalCount:0});return u.byteLength=l.byteLength,u.duration=l.duration,u.nalCount=l.nalCount,u.pts=u[0].pts,u.dts=u[0].dts,u},this.alignGopsWith=function(t){h=t}}).prototype=new z,Mt=function(t,e){"number"==typeof e.pts&&(void 0===t.timelineStartInfo.pts&&(t.timelineStartInfo.pts=e.pts),void 0===t.minSegmentPts?t.minSegmentPts=e.pts:t.minSegmentPts=Math.min(t.minSegmentPts,e.pts),void 0===t.maxSegmentPts?t.maxSegmentPts=e.pts:t.maxSegmentPts=Math.max(t.maxSegmentPts,e.pts)),"number"==typeof e.dts&&(void 0===t.timelineStartInfo.dts&&(t.timelineStartInfo.dts=e.dts),void 0===t.minSegmentDts?t.minSegmentDts=e.dts:t.minSegmentDts=Math.min(t.minSegmentDts,e.dts),void 0===t.maxSegmentDts?t.maxSegmentDts=e.dts:t.maxSegmentDts=Math.max(t.maxSegmentDts,e.dts))},Ut=function(t){delete t.minSegmentDts,delete t.maxSegmentDts,delete t.minSegmentPts,delete t.maxSegmentPts},Nt=function(t,e){var i,r=t.minSegmentDts;return e||(r-=t.timelineStartInfo.dts),i=t.timelineStartInfo.baseMediaDecodeTime,i+=r,i=Math.max(0,i),"audio"===t.type&&(i*=t.samplerate/9e4,i=Math.floor(i)),i},(Dt=function(t,e){this.numberOfTracks=0,this.metadataStream=e,"undefined"!=typeof t.remux?this.remuxTracks=!!t.remux:this.remuxTracks=!0,this.pendingTracks=[],this.videoTrack=null,this.pendingBoxes=[],this.pendingCaptions=[],this.pendingMetadata=[],this.pendingBytes=0,this.emittedTracks=0,Dt.prototype.init.call(this),this.push=function(t){return t.text?this.pendingCaptions.push(t):t.frames?this.pendingMetadata.push(t):(this.pendingTracks.push(t.track),this.pendingBoxes.push(t.boxes),this.pendingBytes+=t.boxes.byteLength,"video"===t.track.type&&(this.videoTrack=t.track),void("audio"===t.track.type&&(this.audioTrack=t.track)))}}).prototype=new z,Dt.prototype.flush=function(t){var e,i,r,n,s=0,a={captions:[],captionStreams:{},metadata:[],info:{}},o=0;if(this.pendingTracks.length<this.numberOfTracks){if("VideoSegmentStream"!==t&&"AudioSegmentStream"!==t)return;if(this.remuxTracks)return;if(0===this.pendingTracks.length)return this.emittedTracks++,void(this.emittedTracks>=this.numberOfTracks&&(this.trigger("done"),this.emittedTracks=0))}for(this.videoTrack?(o=this.videoTrack.timelineStartInfo.pts,Kt.forEach(function(t){a.info[t]=this.videoTrack[t]},this)):this.audioTrack&&(o=this.audioTrack.timelineStartInfo.pts,$t.forEach(function(t){a.info[t]=this.audioTrack[t]},this)),1===this.pendingTracks.length?a.type=this.pendingTracks[0].type:a.type="combined",this.emittedTracks+=this.pendingTracks.length,r=q.initSegment(this.pendingTracks),a.initSegment=new Uint8Array(r.byteLength),a.initSegment.set(r),a.data=new Uint8Array(this.pendingBytes),n=0;n<this.pendingBoxes.length;n++)a.data.set(this.pendingBoxes[n],s),s+=this.pendingBoxes[n].byteLength;for(n=0;n<this.pendingCaptions.length;n++)(e=this.pendingCaptions[n]).startTime=e.startPts-o,e.startTime/=9e4,e.endTime=e.endPts-o,e.endTime/=9e4,a.captionStreams[e.stream]=!0,a.captions.push(e);for(n=0;n<this.pendingMetadata.length;n++)(i=this.pendingMetadata[n]).cueTime=i.pts-o,i.cueTime/=9e4,a.metadata.push(i);a.metadata.dispatchType=this.metadataStream.dispatchType,this.pendingTracks.length=0,this.videoTrack=null,this.pendingBoxes.length=0,this.pendingCaptions.length=0,this.pendingBytes=0,this.pendingMetadata.length=0,this.trigger("data",a),this.emittedTracks>=this.numberOfTracks&&(this.trigger("done"),this.emittedTracks=0)},(It=function(r){var n,s,a=this,i=!0;It.prototype.init.call(this),r=r||{},this.baseMediaDecodeTime=r.baseMediaDecodeTime||0,this.transmuxPipeline_={},this.setupAacPipeline=function(){var e={};(this.transmuxPipeline_=e).type="aac",e.metadataStream=new gt.MetadataStream,e.aacStream=new Ft,e.audioTimestampRolloverStream=new gt.TimestampRolloverStream("audio"),e.timedMetadataTimestampRolloverStream=new gt.TimestampRolloverStream("timed-metadata"),e.adtsStream=new Tt,e.coalesceStream=new Dt(r,e.metadataStream),e.headOfPipeline=e.aacStream,e.aacStream.pipe(e.audioTimestampRolloverStream).pipe(e.adtsStream),e.aacStream.pipe(e.timedMetadataTimestampRolloverStream).pipe(e.metadataStream).pipe(e.coalesceStream),e.metadataStream.on("timestamp",function(t){e.aacStream.setTimestamp(t.timeStamp)}),e.aacStream.on("data",function(t){"timed-metadata"!==t.type||e.audioSegmentStream||(s=s||{timelineStartInfo:{baseMediaDecodeTime:a.baseMediaDecodeTime},codec:"adts",type:"audio"},e.coalesceStream.numberOfTracks++,e.audioSegmentStream=new xt(s,r),e.adtsStream.pipe(e.audioSegmentStream).pipe(e.coalesceStream))}),e.coalesceStream.on("data",this.trigger.bind(this,"data")),e.coalesceStream.on("done",this.trigger.bind(this,"done"))},this.setupTsPipeline=function(){var i={};(this.transmuxPipeline_=i).type="ts",i.metadataStream=new gt.MetadataStream,i.packetStream=new gt.TransportPacketStream,i.parseStream=new gt.TransportParseStream,i.elementaryStream=new gt.ElementaryStream,i.videoTimestampRolloverStream=new gt.TimestampRolloverStream("video"),i.audioTimestampRolloverStream=new gt.TimestampRolloverStream("audio"),i.timedMetadataTimestampRolloverStream=new gt.TimestampRolloverStream("timed-metadata"),i.adtsStream=new Tt,i.h264Stream=new Yt,i.captionStream=new gt.CaptionStream,i.coalesceStream=new Dt(r,i.metadataStream),i.headOfPipeline=i.packetStream,i.packetStream.pipe(i.parseStream).pipe(i.elementaryStream),i.elementaryStream.pipe(i.videoTimestampRolloverStream).pipe(i.h264Stream),i.elementaryStream.pipe(i.audioTimestampRolloverStream).pipe(i.adtsStream),i.elementaryStream.pipe(i.timedMetadataTimestampRolloverStream).pipe(i.metadataStream).pipe(i.coalesceStream),i.h264Stream.pipe(i.captionStream).pipe(i.coalesceStream),i.elementaryStream.on("data",function(t){var e;if("metadata"===t.type){for(e=t.tracks.length;e--;)n||"video"!==t.tracks[e].type?s||"audio"!==t.tracks[e].type||((s=t.tracks[e]).timelineStartInfo.baseMediaDecodeTime=a.baseMediaDecodeTime):(n=t.tracks[e]).timelineStartInfo.baseMediaDecodeTime=a.baseMediaDecodeTime;n&&!i.videoSegmentStream&&(i.coalesceStream.numberOfTracks++,i.videoSegmentStream=new Ot(n,r),i.videoSegmentStream.on("timelineStartInfo",function(t){s&&(s.timelineStartInfo=t,i.audioSegmentStream.setEarliestDts(t.dts))}),i.videoSegmentStream.on("processedGopsInfo",a.trigger.bind(a,"gopInfo")),i.videoSegmentStream.on("baseMediaDecodeTime",function(t){s&&i.audioSegmentStream.setVideoBaseMediaDecodeTime(t)}),i.h264Stream.pipe(i.videoSegmentStream).pipe(i.coalesceStream)),s&&!i.audioSegmentStream&&(i.coalesceStream.numberOfTracks++,i.audioSegmentStream=new xt(s,r),i.adtsStream.pipe(i.audioSegmentStream).pipe(i.coalesceStream))}}),i.coalesceStream.on("data",this.trigger.bind(this,"data")),i.coalesceStream.on("done",this.trigger.bind(this,"done"))},this.setBaseMediaDecodeTime=function(t){var e=this.transmuxPipeline_;this.baseMediaDecodeTime=t,s&&(s.timelineStartInfo.dts=void 0,s.timelineStartInfo.pts=void 0,Ut(s),s.timelineStartInfo.baseMediaDecodeTime=t,e.audioTimestampRolloverStream&&e.audioTimestampRolloverStream.discontinuity()),n&&(e.videoSegmentStream&&(e.videoSegmentStream.gopCache_=[],e.videoTimestampRolloverStream.discontinuity()),n.timelineStartInfo.dts=void 0,n.timelineStartInfo.pts=void 0,Ut(n),e.captionStream.reset(),n.timelineStartInfo.baseMediaDecodeTime=t),e.timedMetadataTimestampRolloverStream&&e.timedMetadataTimestampRolloverStream.discontinuity()},this.setAudioAppendStart=function(t){s&&this.transmuxPipeline_.audioSegmentStream.setAudioAppendStart(t)},this.alignGopsWith=function(t){n&&this.transmuxPipeline_.videoSegmentStream&&this.transmuxPipeline_.videoSegmentStream.alignGopsWith(t)},this.push=function(t){if(i){var e=Rt(t);e&&"aac"!==this.transmuxPipeline_.type?this.setupAacPipeline():e||"ts"===this.transmuxPipeline_.type||this.setupTsPipeline(),i=!1}this.transmuxPipeline_.headOfPipeline.push(t)},this.flush=function(){i=!0,this.transmuxPipeline_.headOfPipeline.flush()},this.resetCaptions=function(){this.transmuxPipeline_.captionStream&&this.transmuxPipeline_.captionStream.reset()}}).prototype=new z;var Qt={Transmuxer:It,VideoSegmentStream:Ot,AudioSegmentStream:xt,AUDIO_PROPERTIES:$t,VIDEO_PROPERTIES:Kt},Jt={generator:q,Transmuxer:Qt.Transmuxer,AudioSegmentStream:Qt.AudioSegmentStream,VideoSegmentStream:Qt.VideoSegmentStream},Zt=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},te=function(){function r(t,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(t,e,i){return e&&r(t.prototype,e),i&&r(t,i),t}}(),ee=function(){function e(t){Zt(this,e),this.options=t||{},this.init()}return te(e,[{key:"init",value:function(){var t;this.transmuxer&&this.transmuxer.dispose(),this.transmuxer=new Jt.Transmuxer(this.options),(t=this.transmuxer).on("data",function(t){var e=t.initSegment;t.initSegment={data:e.buffer,byteOffset:e.byteOffset,byteLength:e.byteLength};var i=t.data;t.data=i.buffer,H.postMessage({action:"data",segment:t,byteOffset:i.byteOffset,byteLength:i.byteLength},[t.data])}),t.captionStream&&t.captionStream.on("data",function(t){H.postMessage({action:"caption",data:t})}),t.on("done",function(t){H.postMessage({action:"done"})}),t.on("gopInfo",function(t){H.postMessage({action:"gopInfo",gopInfo:t})})}},{key:"push",value:function(t){var e=new Uint8Array(t.data,t.byteOffset,t.byteLength);this.transmuxer.push(e)}},{key:"reset",value:function(){this.init()}},{key:"setTimestampOffset",value:function(t){var e=t.timestampOffset||0;this.transmuxer.setBaseMediaDecodeTime(Math.round(9e4*e))}},{key:"setAudioAppendStart",value:function(t){this.transmuxer.setAudioAppendStart(Math.ceil(9e4*t.appendStart))}},{key:"flush",value:function(t){this.transmuxer.flush()}},{key:"resetCaptions",value:function(){this.transmuxer.resetCaptions()}},{key:"alignGopsWith",value:function(t){this.transmuxer.alignGopsWith(t.gopsToAlignWith.slice())}}]),e}();new function(t){t.onmessage=function(t){"init"===t.data.action&&t.data.options?this.messageHandlers=new ee(t.data.options):(this.messageHandlers||(this.messageHandlers=new ee),t.data&&t.data.action&&"init"!==t.data.action&&this.messageHandlers[t.data.action]&&this.messageHandlers[t.data.action](t.data))}}(re)}()}),Mu=function(t){return/mp4a\.\d+.\d+/i.test(t)},Uu=function(t){return/avc1\.[\da-f]+/i.test(t)},Nu=function(t){return t.map(function(t){return t.replace(/avc1\.(\d+)\.(\d+)/i,function(t,e,i){return"avc1."+("00"+Number(e).toString(16)).slice(-2)+"00"+("00"+Number(i).toString(16)).slice(-2)})})},Bu=function(n){function s(t,e){y(this,s);var i=b(this,n.call(this,As.EventTarget));i.timestampOffset_=0,i.pendingBuffers_=[],i.bufferUpdating_=!1,i.mediaSource_=t,i.codecs_=e,i.audioCodec_=null,i.videoCodec_=null,i.audioDisabled_=!1,i.appendAudioInitSegment_=!0,i.gopBuffer_=[],i.timeMapping_=0,i.safeAppend_=11<=As.browser.IE_VERSION;var r={remux:!1,alignGopsAtEnd:i.safeAppend_};return i.codecs_.forEach(function(t){Mu(t)?i.audioCodec_=t:Uu(t)&&(i.videoCodec_=t)}),i.transmuxer_=new Ru,i.transmuxer_.postMessage({action:"init",options:r}),i.transmuxer_.onmessage=function(t){return"data"===t.data.action?i.data_(t):"done"===t.data.action?i.done_(t):"gopInfo"===t.data.action?i.appendGopInfo_(t):void 0},Object.defineProperty(i,"timestampOffset",{get:function(){return this.timestampOffset_},set:function(t){"number"==typeof t&&0<=t&&(this.timestampOffset_=t,this.appendAudioInitSegment_=!0,this.gopBuffer_.length=0,this.timeMapping_=0,this.transmuxer_.postMessage({action:"setTimestampOffset",timestampOffset:t}))}}),Object.defineProperty(i,"appendWindowStart",{get:function(){return(this.videoBuffer_||this.audioBuffer_).appendWindowStart},set:function(t){this.videoBuffer_&&(this.videoBuffer_.appendWindowStart=t),this.audioBuffer_&&(this.audioBuffer_.appendWindowStart=t)}}),Object.defineProperty(i,"updating",{get:function(){return!!(this.bufferUpdating_||!this.audioDisabled_&&this.audioBuffer_&&this.audioBuffer_.updating||this.videoBuffer_&&this.videoBuffer_.updating)}}),Object.defineProperty(i,"buffered",{get:function(){var t=null,e=null,i=0,r=[],n=[];if(!this.videoBuffer_&&!this.audioBuffer_)return As.createTimeRange();if(!this.videoBuffer_)return this.audioBuffer_.buffered;if(!this.audioBuffer_)return this.videoBuffer_.buffered;if(this.audioDisabled_)return this.videoBuffer_.buffered;if(0===this.videoBuffer_.buffered.length&&0===this.audioBuffer_.buffered.length)return As.createTimeRange();for(var s=this.videoBuffer_.buffered,a=this.audioBuffer_.buffered,o=s.length;o--;)r.push({time:s.start(o),type:"start"}),r.push({time:s.end(o),type:"end"});for(o=a.length;o--;)r.push({time:a.start(o),type:"start"}),r.push({time:a.end(o),type:"end"});for(r.sort(function(t,e){return t.time-e.time}),o=0;o<r.length;o++)"start"===r[o].type?2===++i&&(t=r[o].time):"end"===r[o].type&&1===--i&&(e=r[o].time),null!==t&&null!==e&&(n.push([t,e]),e=t=null);return As.createTimeRanges(n)}}),i}return _(s,n),s.prototype.data_=function(t){var e=t.data.segment;e.data=new Uint8Array(e.data,t.data.byteOffset,t.data.byteLength),e.initSegment=new Uint8Array(e.initSegment.data,e.initSegment.byteOffset,e.initSegment.byteLength),function(t,e,i){var r=e.player_;if(i.captions&&i.captions.length)for(var n in t.inbandTextTracks_||(t.inbandTextTracks_={}),i.captionStreams)if(!t.inbandTextTracks_[n]){r.tech_.trigger({type:"usage",name:"hls-608"});var s=r.textTracks().getTrackById(n);t.inbandTextTracks_[n]=s||r.addRemoteTextTrack({kind:"captions",id:n,label:n},!1).track}i.metadata&&i.metadata.length&&!t.metadataTrack_&&(t.metadataTrack_=r.addRemoteTextTrack({kind:"metadata",label:"Timed Metadata"},!1).track,t.metadataTrack_.inBandMetadataTrackDispatchType=i.metadata.dispatchType)}(this,this.mediaSource_,e),this.pendingBuffers_.push(e)},s.prototype.done_=function(t){"closed"!==this.mediaSource_.readyState?this.processPendingSegments_():this.pendingBuffers_.length=0},s.prototype.createRealSourceBuffers_=function(){var r=this,n=["audio","video"];n.forEach(function(e){if(r[e+"Codec_"]&&!r[e+"Buffer_"]){var i=null;if(r.mediaSource_[e+"Buffer_"])(i=r.mediaSource_[e+"Buffer_"]).updating=!1;else{var t=e+'/mp4;codecs="'+r[e+"Codec_"]+'"';i=function(t,e){var i=t.addSourceBuffer(e),r=Object.create(null);r.updating=!1,r.realBuffer_=i;var n=function(e){"function"==typeof i[e]?r[e]=function(){return i[e].apply(i,arguments)}:"undefined"==typeof r[e]&&Object.defineProperty(r,e,{get:function(){return i[e]},set:function(t){return i[e]=t}})};for(var s in i)n(s);return r}(r.mediaSource_.nativeMediaSource_,t),r.mediaSource_[e+"Buffer_"]=i}r[e+"Buffer_"]=i,["update","updatestart","updateend"].forEach(function(t){i.addEventListener(t,function(){if("audio"!==e||!r.audioDisabled_)return"updateend"===t&&(r[e+"Buffer_"].updating=!1),n.every(function(t){return!("audio"!==t||!r.audioDisabled_)||(e===t||!r[t+"Buffer_"]||!r[t+"Buffer_"].updating)})?r.trigger(t):void 0})})}})},s.prototype.appendBuffer=function(t){if(this.bufferUpdating_=!0,this.audioBuffer_&&this.audioBuffer_.buffered.length){var e=this.audioBuffer_.buffered;this.transmuxer_.postMessage({action:"setAudioAppendStart",appendStart:e.end(e.length-1)})}this.videoBuffer_&&this.transmuxer_.postMessage({action:"alignGopsWith",gopsToAlignWith:function(t,e,i){if(!e||!t.length)return[];var r=Math.ceil(9e4*(e.currentTime()-i+3)),n=void 0;for(n=0;n<t.length&&!(t[n].pts>r);n++);return t.slice(n)}(this.gopBuffer_,this.mediaSource_.player_,this.timeMapping_)}),this.transmuxer_.postMessage({action:"push",data:t.buffer,byteOffset:t.byteOffset,byteLength:t.byteLength},[t.buffer]),this.transmuxer_.postMessage({action:"flush"})},s.prototype.appendGopInfo_=function(t){this.gopBuffer_=function(t,e,i){if(!e.length)return t;if(i)return e.slice();for(var r=e[0].pts,n=0;n<t.length&&!(t[n].pts>=r);n++);return t.slice(0,n).concat(e)}(this.gopBuffer_,t.data.gopInfo,this.safeAppend_)},s.prototype.remove=function(t,e){if(this.videoBuffer_&&(this.videoBuffer_.updating=!0,this.videoBuffer_.remove(t,e),this.gopBuffer_=function(t,e,i,r){for(var n=Math.ceil(9e4*(e-r)),s=Math.ceil(9e4*(i-r)),a=t.slice(),o=t.length;o--&&!(t[o].pts<=s););if(-1===o)return a;for(var u=o+1;u--&&!(t[u].pts<=n););return u=Math.max(u,0),a.splice(u,o-u+1),a}(this.gopBuffer_,t,e,this.timeMapping_)),!this.audioDisabled_&&this.audioBuffer_&&(this.audioBuffer_.updating=!0,this.audioBuffer_.remove(t,e)),bu(t,e,this.metadataTrack_),this.inbandTextTracks_)for(var i in this.inbandTextTracks_)bu(t,e,this.inbandTextTracks_[i])},s.prototype.processPendingSegments_=function(){var t={video:{segments:[],bytes:0},audio:{segments:[],bytes:0},captions:[],metadata:[]};t=this.pendingBuffers_.reduce(function(t,e){var i=e.type,r=e.data,n=e.initSegment;return t[i].segments.push(r),t[i].bytes+=r.byteLength,t[i].initSegment=n,e.captions&&(t.captions=t.captions.concat(e.captions)),e.info&&(t[i].info=e.info),e.metadata&&(t.metadata=t.metadata.concat(e.metadata)),t},t),this.videoBuffer_||this.audioBuffer_||(0===t.video.bytes&&(this.videoCodec_=null),0===t.audio.bytes&&(this.audioCodec_=null),this.createRealSourceBuffers_()),t.audio.info&&this.mediaSource_.trigger({type:"audioinfo",info:t.audio.info}),t.video.info&&this.mediaSource_.trigger({type:"videoinfo",info:t.video.info}),this.appendAudioInitSegment_&&(!this.audioDisabled_&&this.audioBuffer_&&(t.audio.segments.unshift(t.audio.initSegment),t.audio.bytes+=t.audio.initSegment.byteLength),this.appendAudioInitSegment_=!1);var e=!1;this.videoBuffer_&&t.video.bytes?(t.video.segments.unshift(t.video.initSegment),t.video.bytes+=t.video.initSegment.byteLength,this.concatAndAppendSegments_(t.video,this.videoBuffer_),Su(this,t.captions,t.metadata)):!this.videoBuffer_||!this.audioDisabled_&&this.audioBuffer_||(e=!0),!this.audioDisabled_&&this.audioBuffer_&&this.concatAndAppendSegments_(t.audio,this.audioBuffer_),this.pendingBuffers_.length=0,e&&this.trigger("updateend"),this.bufferUpdating_=!1},s.prototype.concatAndAppendSegments_=function(t,e){var i=0,r=void 0;if(t.bytes){r=new Uint8Array(t.bytes),t.segments.forEach(function(t){r.set(t,i),i+=t.byteLength});try{e.updating=!0,e.appendBuffer(r)}catch(t){this.mediaSource_.player_&&this.mediaSource_.player_.error({code:-3,type:"APPEND_BUFFER_ERR",message:t.message,originalError:t})}}},s.prototype.abort=function(){this.videoBuffer_&&this.videoBuffer_.abort(),!this.audioDisabled_&&this.audioBuffer_&&this.audioBuffer_.abort(),this.transmuxer_&&this.transmuxer_.postMessage({action:"reset"}),this.pendingBuffers_.length=0,this.bufferUpdating_=!1},s}(As.EventTarget),ju=function(e){function i(){y(this,i);var s=b(this,e.call(this)),t=void 0;for(t in s.nativeMediaSource_=new g.MediaSource,s.nativeMediaSource_)t in i.prototype||"function"!=typeof s.nativeMediaSource_[t]||(s[t]=s.nativeMediaSource_[t].bind(s.nativeMediaSource_));return s.duration_=NaN,Object.defineProperty(s,"duration",{get:function(){return this.duration_===1/0?this.duration_:this.nativeMediaSource_.duration},set:function(t){(this.duration_=t)===1/0||(this.nativeMediaSource_.duration=t)}}),Object.defineProperty(s,"seekable",{get:function(){return this.duration_===1/0?As.createTimeRanges([[0,this.nativeMediaSource_.duration]]):this.nativeMediaSource_.seekable}}),Object.defineProperty(s,"readyState",{get:function(){return this.nativeMediaSource_.readyState}}),Object.defineProperty(s,"activeSourceBuffers",{get:function(){return this.activeSourceBuffers_}}),s.sourceBuffers=[],s.activeSourceBuffers_=[],s.updateActiveSourceBuffers_=function(){if(s.activeSourceBuffers_.length=0,1===s.sourceBuffers.length){var t=s.sourceBuffers[0];return t.appendAudioInitSegment_=!0,t.audioDisabled_=!t.audioCodec_,void s.activeSourceBuffers_.push(t)}for(var i=!1,r=!0,e=0;e<s.player_.audioTracks().length;e++){var n=s.player_.audioTracks()[e];if(n.enabled&&"main"!==n.kind){r=!(i=!0);break}}s.sourceBuffers.forEach(function(t,e){if(t.appendAudioInitSegment_=!0,t.videoCodec_&&t.audioCodec_)t.audioDisabled_=i;else if(t.videoCodec_&&!t.audioCodec_)t.audioDisabled_=!0,r=!1;else if(!t.videoCodec_&&t.audioCodec_&&(t.audioDisabled_=e?r:!r,t.audioDisabled_))return;s.activeSourceBuffers_.push(t)})},s.onPlayerMediachange_=function(){s.sourceBuffers.forEach(function(t){t.appendAudioInitSegment_=!0})},s.onHlsReset_=function(){s.sourceBuffers.forEach(function(t){t.transmuxer_&&t.transmuxer_.postMessage({action:"resetCaptions"})})},s.onHlsSegmentTimeMapping_=function(e){s.sourceBuffers.forEach(function(t){return t.timeMapping_=e.mapping})},["sourceopen","sourceclose","sourceended"].forEach(function(t){this.nativeMediaSource_.addEventListener(t,this.trigger.bind(this))},s),s.on("sourceopen",function(t){var e=p.querySelector('[src="'+s.url_+'"]');e&&(s.player_=As(e.parentNode),s.player_.tech_.on("hls-reset",s.onHlsReset_),s.player_.tech_.on("hls-segment-time-mapping",s.onHlsSegmentTimeMapping_),s.player_.audioTracks&&s.player_.audioTracks()&&(s.player_.audioTracks().on("change",s.updateActiveSourceBuffers_),s.player_.audioTracks().on("addtrack",s.updateActiveSourceBuffers_),s.player_.audioTracks().on("removetrack",s.updateActiveSourceBuffers_)),s.player_.on("mediachange",s.onPlayerMediachange_))}),s.on("sourceended",function(t){for(var e=Tu(s.duration),i=0;i<s.sourceBuffers.length;i++){var r=s.sourceBuffers[i],n=r.metadataTrack_&&r.metadataTrack_.cues;n&&n.length&&(n[n.length-1].endTime=e)}}),s.on("sourceclose",function(t){this.sourceBuffers.forEach(function(t){t.transmuxer_&&t.transmuxer_.terminate()}),this.sourceBuffers.length=0,this.player_&&(this.player_.audioTracks&&this.player_.audioTracks()&&(this.player_.audioTracks().off("change",this.updateActiveSourceBuffers_),this.player_.audioTracks().off("addtrack",this.updateActiveSourceBuffers_),this.player_.audioTracks().off("removetrack",this.updateActiveSourceBuffers_)),this.player_.el_&&(this.player_.off("mediachange",this.onPlayerMediachange_),this.player_.tech_.off("hls-reset",this.onHlsReset_),this.player_.tech_.off("hls-segment-time-mapping",this.onHlsSegmentTimeMapping_)))}),s}return _(i,e),i.prototype.addSeekableRange_=function(t,e){var i=void 0;if(this.duration!==1/0)throw(i=new Error("MediaSource.addSeekableRange() can only be invoked when the duration is Infinity")).name="InvalidStateError",i.code=11,i;(e>this.nativeMediaSource_.duration||isNaN(this.nativeMediaSource_.duration))&&(this.nativeMediaSource_.duration=e)},i.prototype.addSourceBuffer=function(t){var n,e,i=void 0,r=(n={type:"",parameters:{}},e=t.trim().split(";"),n.type=e.shift().trim(),e.forEach(function(t){var e=t.trim().split("=");if(1<e.length){var i=e[0].replace(/"/g,"").trim(),r=e[1].replace(/"/g,"").trim();n.parameters[i]=r}}),n);if(/^(video|audio)\/mp2t$/i.test(r.type)){var s=[];r.parameters&&r.parameters.codecs&&(s=r.parameters.codecs.split(","),s=(s=Nu(s)).filter(function(t){return Mu(t)||Uu(t)})),0===s.length&&(s=["avc1.4d400d","mp4a.40.2"]),i=new Bu(this,s),0!==this.sourceBuffers.length&&(this.sourceBuffers[0].createRealSourceBuffers_(),i.createRealSourceBuffers_(),this.sourceBuffers[0].audioDisabled_=!0)}else i=this.nativeMediaSource_.addSourceBuffer(t);return this.sourceBuffers.push(i),i},i}(As.EventTarget),Fu=0;As.mediaSources={};var Hu=function(t,e){var i=As.mediaSources[t];if(!i)throw new Error("Media Source not found (Video.js)");i.trigger({type:"sourceopen",swfId:e})},Vu=function(){return!!g.MediaSource&&!!g.MediaSource.isTypeSupported&&g.MediaSource.isTypeSupported('video/mp4;codecs="avc1.4d400d,mp4a.40.2"')},qu=function(){if(this.MediaSource={open:Hu,supportsNativeMediaSources:Vu},Vu())return new ju;throw new Error("Cannot use create a virtual MediaSource for this video")};qu.open=Hu,qu.supportsNativeMediaSources=Vu;var Wu={createObjectURL:function(t){var e=void 0;return t instanceof ju?(e=g.URL.createObjectURL(t.nativeMediaSource_),t.url_=e):t instanceof ju?(e="blob:vjs-media-source/"+Fu,Fu++,As.mediaSources[e]=t,e):(e=g.URL.createObjectURL(t),t.url_=e)}};As.MediaSource=qu,As.URL=Wu;var zu=As.mergeOptions,Gu=function(t,e){for(var a=zu(t,{duration:e.duration,minimumUpdatePeriod:e.minimumUpdatePeriod}),i=0;i<e.playlists.length;i++){var r=Bo(a,e.playlists[i]);r&&(a=r)}return No(e,function(t,e,i,r){if(t.playlists&&t.playlists.length){var n=t.playlists[0].uri,s=Bo(a,t.playlists[0]);s&&((a=s).mediaGroups[e][i][r].playlists[0]=a.playlists[n])}}),a},Xu=function(s){function a(t,e,i,r){y(this,a);var n=b(this,s.call(this));if(n.hls_=e,n.withCredentials=i,!t)throw new Error("A non-empty playlist URL or playlist is required");return n.on("minimumUpdatePeriod",function(){n.refreshXml_()}),n.on("mediaupdatetimeout",function(){n.refreshMedia_()}),"string"==typeof t?(n.srcUrl=t,n.state="HAVE_NOTHING",b(n)):(n.masterPlaylistLoader_=r,n.state="HAVE_METADATA",n.started=!0,n.media(t),g.setTimeout(function(){n.trigger("loadedmetadata")},0),n)}return _(a,s),a.prototype.dispose=function(){this.stopRequest(),g.clearTimeout(this.mediaUpdateTimeout)},a.prototype.stopRequest=function(){if(this.request){var t=this.request;this.request=null,t.onreadystatechange=null,t.abort()}},a.prototype.media=function(t){if(!t)return this.media_;if("HAVE_NOTHING"===this.state)throw new Error("Cannot switch media playlist from "+this.state);var e=this.state;if("string"==typeof t){if(!this.master.playlists[t])throw new Error("Unknown playlist URI: "+t);t=this.master.playlists[t]}var i=!this.media_||t.uri!==this.media_.uri;this.state="HAVE_METADATA",i&&(this.media_&&this.trigger("mediachanging"),this.media_=t,this.refreshMedia_(),"HAVE_MASTER"!==e&&this.trigger("mediachange"))},a.prototype.pause=function(){this.stopRequest(),"HAVE_NOTHING"===this.state&&(this.started=!1)},a.prototype.load=function(){this.started?this.trigger("loadedplaylist"):this.start()},a.prototype.parseMasterXml=function(){var s=Sa(this.masterXml_,{manifestUri:this.srcUrl,clientOffset:this.clientOffset_});s.uri=this.srcUrl;for(var t=0;t<s.playlists.length;t++){var e="placeholder-uri-"+t;s.playlists[t].uri=e,s.playlists[e]=s.playlists[t]}return No(s,function(t,e,i,r){if(t.playlists&&t.playlists.length){var n="placeholder-uri-"+e+"-"+i+"-"+r;t.playlists[0].uri=n,s.playlists[n]=t.playlists[0]}}),jo(s),Fo(s),s},a.prototype.start=function(){var i=this;this.started=!0,this.request=this.hls_.xhr({uri:this.srcUrl,withCredentials:this.withCredentials},function(t,e){if(i.request){if(i.request=null,t)return i.error={status:e.status,message:"DASH playlist request error at URL: "+i.srcUrl,responseText:e.responseText,code:2},"HAVE_NOTHING"===i.state&&(i.started=!1),i.trigger("error");i.masterXml_=e.responseText,e.responseHeaders&&e.responseHeaders.date?i.masterLoaded_=Date.parse(e.responseHeaders.date):i.masterLoaded_=Date.now(),i.syncClientServerClock_(i.onClientServerClockSync_.bind(i))}})},a.prototype.syncClientServerClock_=function(r){var n=this,s=ka(this.masterXml_);return null===s?(this.clientOffset_=this.masterLoaded_-Date.now(),r()):"DIRECT"===s.method?(this.clientOffset_=s.value-Date.now(),r()):void(this.request=this.hls_.xhr({uri:Ro(this.srcUrl,s.value),method:s.method,withCredentials:this.withCredentials},function(t,e){if(n.request){if(t)return n.clientOffset_=n.masterLoaded_-Date.now(),r();var i=void 0;i="HEAD"===s.method?e.responseHeaders&&e.responseHeaders.date?Date.parse(e.responseHeaders.date):n.masterLoaded_:Date.parse(e.responseText),n.clientOffset_=i-Date.now(),r()}}))},a.prototype.onClientServerClockSync_=function(){var t=this;this.master=this.parseMasterXml(),this.state="HAVE_MASTER",this.trigger("loadedplaylist"),this.media_||this.media(this.master.playlists[0]),g.setTimeout(function(){t.trigger("loadedmetadata")},0),this.master.minimumUpdatePeriod&&g.setTimeout(function(){t.trigger("minimumUpdatePeriod")},this.master.minimumUpdatePeriod)},a.prototype.refreshXml_=function(){var r=this;this.request=this.hls_.xhr({uri:this.srcUrl,withCredentials:this.withCredentials},function(t,e){if(r.request){if(r.request=null,t)return r.error={status:e.status,message:"DASH playlist request error at URL: "+r.srcUrl,responseText:e.responseText,code:2},"HAVE_NOTHING"===r.state&&(r.started=!1),r.trigger("error");r.masterXml_=e.responseText;var i=r.parseMasterXml();r.master=Gu(r.master,i),g.setTimeout(function(){r.trigger("minimumUpdatePeriod")},r.master.minimumUpdatePeriod)}})},a.prototype.refreshMedia_=function(){var t=this,e=void 0,i=void 0;this.masterPlaylistLoader_?(e=this.masterPlaylistLoader_.master,i=this.masterPlaylistLoader_.parseMasterXml()):(e=this.master,i=this.parseMasterXml());var r=Gu(e,i);r?(this.masterPlaylistLoader_?this.masterPlaylistLoader_.master=r:this.master=r,this.media_=r.playlists[this.media_.uri]):this.trigger("playlistunchanged"),this.media().endList||(this.mediaUpdateTimeout=g.setTimeout(function(){t.trigger("mediaupdatetimeout")},Ho(this.media(),!!r))),this.trigger("loadedplaylist")},a}(As.EventTarget),Yu=function(t){return As.log.debug?As.log.debug.bind(As,"VHS:",t+" >"):function(){}};function $u(){}var Ku=function(){function n(t,e,i,r){y(this,n),this.callbacks_=[],this.pendingCallback_=null,this.timestampOffset_=0,this.mediaSource=t,this.processedAppend_=!1,this.type_=i,this.mimeType_=e,this.logger_=Yu("SourceUpdater["+i+"]["+e+"]"),"closed"===t.readyState?t.addEventListener("sourceopen",this.createSourceBuffer_.bind(this,e,r)):this.createSourceBuffer_(e,r)}return n.prototype.createSourceBuffer_=function(t,e){var i=this;this.sourceBuffer_=this.mediaSource.addSourceBuffer(t),this.logger_("created SourceBuffer"),e&&(e.trigger("sourcebufferadded"),this.mediaSource.sourceBuffers.length<2)?e.on("sourcebufferadded",function(){i.start_()}):this.start_()},n.prototype.start_=function(){var e=this;this.started_=!0,this.onUpdateendCallback_=function(){var t=e.pendingCallback_;e.pendingCallback_=null,e.logger_("buffered ["+vu(e.buffered())+"]"),t&&t(),e.runCallback_()},this.sourceBuffer_.addEventListener("updateend",this.onUpdateendCallback_),this.runCallback_()},n.prototype.abort=function(t){var e=this;this.processedAppend_&&this.queueCallback_(function(){e.sourceBuffer_.abort()},t)},n.prototype.appendBuffer=function(t,e){var i=this;this.processedAppend_=!0,this.queueCallback_(function(){i.sourceBuffer_.appendBuffer(t)},e)},n.prototype.buffered=function(){return this.sourceBuffer_?this.sourceBuffer_.buffered:As.createTimeRanges()},n.prototype.remove=function(t,e){var i=this;this.processedAppend_&&this.queueCallback_(function(){i.logger_("remove ["+t+" => "+e+"]"),i.sourceBuffer_.remove(t,e)},$u)},n.prototype.updating=function(){return!this.sourceBuffer_||this.sourceBuffer_.updating||this.pendingCallback_},n.prototype.timestampOffset=function(t){var e=this;return"undefined"!=typeof t&&(this.queueCallback_(function(){e.sourceBuffer_.timestampOffset=t}),this.timestampOffset_=t),this.timestampOffset_},n.prototype.queueCallback_=function(t,e){this.callbacks_.push([t.bind(this),e]),this.runCallback_()},n.prototype.runCallback_=function(){var t=void 0;!this.updating()&&this.callbacks_.length&&this.started_&&(t=this.callbacks_.shift(),this.pendingCallback_=t[1],t[0]())},n.prototype.dispose=function(){this.sourceBuffer_.removeEventListener("updateend",this.onUpdateendCallback_),this.sourceBuffer_&&"open"===this.mediaSource.readyState&&this.sourceBuffer_.abort()},n}(),Qu={GOAL_BUFFER_LENGTH:30,MAX_GOAL_BUFFER_LENGTH:60,GOAL_BUFFER_LENGTH_RATE:1,BANDWIDTH_VARIANCE:1.2,BUFFER_LOW_WATER_LINE:0,MAX_BUFFER_LOW_WATER_LINE:30,BUFFER_LOW_WATER_LINE_RATE:1},Ju=2,Zu=-101,tl=-102,el=function(t){var e,i,r={};return t.byterange&&(r.Range=(e=t.byterange,i=e.offset+e.length-1,"bytes="+e.offset+"-"+i)),r},il=function(t){t.forEach(function(t){t.abort()})},rl=function(t,e){return e.timedout?{status:e.status,message:"HLS request timed-out at URL: "+e.uri,code:Zu,xhr:e}:e.aborted?{status:e.status,message:"HLS request aborted at URL: "+e.uri,code:tl,xhr:e}:t?{status:e.status,message:"HLS request errored at URL: "+e.uri,code:Ju,xhr:e}:null},nl=function(a,o,u){var l=[],c=0;return function(t,e){if(t&&(il(a),l.push(t)),(c+=1)===a.length){if(e.endOfAllRequests=Date.now(),0<l.length){var i=l.reduce(function(t,e){return e.code>t.code?e:t});return u(i,e)}return e.encryptedBytes?(n=e,s=u,(r=o).addEventListener("message",function t(e){if(e.data.source===n.requestId){r.removeEventListener("message",t);var i=e.data.decrypted;return n.bytes=new Uint8Array(i.bytes,i.byteOffset,i.byteLength),s(null,n)}}),void r.postMessage(cu({source:n.requestId,encrypted:n.encryptedBytes,key:n.key.bytes,iv:n.key.iv}),[n.encryptedBytes.buffer,n.key.bytes.buffer])):u(null,e)}var r,n,s}},sl=function(n,s){return function(t){var e,i,r;return n.stats=As.mergeOptions(n.stats,(i=(e=t).target,(r={bandwidth:1/0,bytesReceived:0,roundTripTime:Date.now()-i.requestTime||0}).bytesReceived=e.loaded,r.bandwidth=Math.floor(r.bytesReceived/r.roundTripTime*8*1e3),r)),!n.stats.firstBytesReceivedAt&&n.stats.bytesReceived&&(n.stats.firstBytesReceivedAt=Date.now()),s(t,n)}},al=function(t,e,i,r,n,s){var a,o,u,l,c=[],h=nl(c,i,s);if(r.key){var d=t(As.mergeOptions(e,{uri:r.key.resolvedUri,responseType:"arraybuffer"}),(a=r,o=h,function(t,e){var i=e.response,r=rl(t,e);if(r)return o(r,a);if(16!==i.byteLength)return o({status:e.status,message:"Invalid HLS key at URL: "+e.uri,code:Ju,xhr:e},a);var n=new DataView(i);return a.key.bytes=new Uint32Array([n.getUint32(0),n.getUint32(4),n.getUint32(8),n.getUint32(12)]),o(null,a)}));c.push(d)}if(r.map&&!r.map.bytes){var p=t(As.mergeOptions(e,{uri:r.map.resolvedUri,responseType:"arraybuffer",headers:el(r.map)}),(u=r,l=h,function(t,e){var i=e.response,r=rl(t,e);return r?l(r,u):0===i.byteLength?l({status:e.status,message:"Empty HLS segment content at URL: "+e.uri,code:Ju,xhr:e},u):(u.map.bytes=new Uint8Array(e.response),l(null,u))}));c.push(p)}var f,m,g=t(As.mergeOptions(e,{uri:r.resolvedUri,responseType:"arraybuffer",headers:el(r)}),(f=r,m=h,function(t,e){var i,r=e.response,n=rl(t,e);return n?m(n,f):0===r.byteLength?m({status:e.status,message:"Empty HLS segment content at URL: "+e.uri,code:Ju,xhr:e},f):(f.stats={bandwidth:(i=e).bandwidth,bytesReceived:i.bytesReceived||0,roundTripTime:i.roundTripTime||0},f.key?f.encryptedBytes=new Uint8Array(e.response):f.bytes=new Uint8Array(e.response),m(null,f))}));return g.addEventListener("progress",sl(r,n)),c.push(g),function(){return il(c)}},ol={videoCodec:"avc1",videoObjectTypeIndicator:".4d400d",audioProfile:"2"},ul=function(){var t,e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",i={codecCount:0};return i.codecCount=e.split(",").length,i.codecCount=i.codecCount||2,(t=/(^|\s|,)+(avc[13])([^ ,]*)/i.exec(e))&&(i.videoCodec=t[2],i.videoObjectTypeIndicator=t[3]),i.audioProfile=/(^|\s|,)+mp4a.[0-9A-Fa-f]+\.([0-9A-Fa-f]+)/i.exec(e),i.audioProfile=i.audioProfile&&i.audioProfile[2],i},ll=function(t,e,i){return t+"/"+e+'; codecs="'+i.filter(function(t){return!!t}).join(", ")+'"'},cl=function(t,e){var i,r,n=(i=e).segments&&i.segments.length&&i.segments[0].map?"mp4":"mp2t",s=(r=e.attributes||{}).CODECS?ul(r.CODECS):ol,a=e.attributes||{},o=!0,u=!1;if(!e)return[];if(t.mediaGroups.AUDIO&&a.AUDIO){var l=t.mediaGroups.AUDIO[a.AUDIO];if(l)for(var c in o=!(u=!0),l)if(!l[c].uri&&!l[c].playlists){o=!0;break}}u&&!s.audioProfile&&(o||(s.audioProfile=function(t,e){if(!t.mediaGroups.AUDIO||!e)return null;var i=t.mediaGroups.AUDIO[e];if(!i)return null;for(var r in i){var n=i[r];if(n.default&&n.playlists)return ul(n.playlists[0].attributes.CODECS).audioProfile}return null}(t,a.AUDIO)),s.audioProfile||(As.log.warn("Multiple audio tracks present but no audio codec string is specified. Attempting to use the default audio codec (mp4a.40.2)"),s.audioProfile=ol.audioProfile));var h={};s.videoCodec&&(h.video=""+s.videoCodec+s.videoObjectTypeIndicator),s.audioProfile&&(h.audio="mp4a.40."+s.audioProfile);var d=ll("audio",n,[h.audio]),p=ll("video",n,[h.video]),f=ll("video",n,[h.video,h.audio]);return u?!o&&h.video?[p,d]:o||h.video?[f,d]:[d,d]:h.video?[f]:[d]},hl=function(t,e){var i;return t&&(i=g.getComputedStyle(t))?i[e]:""},dl=function(t,r){var n=t.slice();t.sort(function(t,e){var i=r(t,e);return 0===i?n.indexOf(t)-n.indexOf(e):i})},pl=function(t,e){var i=void 0,r=void 0;return t.attributes.BANDWIDTH&&(i=t.attributes.BANDWIDTH),i=i||g.Number.MAX_VALUE,e.attributes.BANDWIDTH&&(r=e.attributes.BANDWIDTH),i-(r=r||g.Number.MAX_VALUE)},fl=function(t,e,i){if(!t||!e)return!1;var r=i===t.segments.length;return t.endList&&"open"===e.readyState&&r},ml=function(t){return"number"==typeof t&&isFinite(t)},gl=function(i){function r(t){y(this,r);var e=b(this,i.call(this));if(!t)throw new TypeError("Initialization settings are required");if("function"!=typeof t.currentTime)throw new TypeError("No currentTime getter specified");if(!t.mediaSource)throw new TypeError("No MediaSource specified");return e.bandwidth=t.bandwidth,e.throughput={rate:0,count:0},e.roundTrip=NaN,e.resetStats_(),e.mediaIndex=null,e.hasPlayed_=t.hasPlayed,e.currentTime_=t.currentTime,e.seekable_=t.seekable,e.seeking_=t.seeking,e.duration_=t.duration,e.mediaSource_=t.mediaSource,e.hls_=t.hls,e.loaderType_=t.loaderType,e.startingMedia_=void 0,e.segmentMetadataTrack_=t.segmentMetadataTrack,e.goalBufferLength_=t.goalBufferLength,e.sourceType_=t.sourceType,e.state_="INIT",e.checkBufferTimeout_=null,e.error_=void 0,e.currentTimeline_=-1,e.pendingSegment_=null,e.mimeType_=null,e.sourceUpdater_=null,e.xhrOptions_=null,e.activeInitSegmentId_=null,e.initSegments_={},e.decrypter_=t.decrypter,e.syncController_=t.syncController,e.syncPoint_={segmentIndex:0,time:0},e.syncController_.on("syncinfoupdate",function(){return e.trigger("syncinfoupdate")}),e.mediaSource_.addEventListener("sourceopen",function(){return e.ended_=!1}),e.fetchAtBuffer_=!1,e.logger_=Yu("SegmentLoader["+e.loaderType_+"]"),Object.defineProperty(e,"state",{get:function(){return this.state_},set:function(t){t!==this.state_&&(this.logger_(this.state_+" -> "+t),this.state_=t)}}),e}return _(r,i),r.prototype.resetStats_=function(){this.mediaBytesTransferred=0,this.mediaRequests=0,this.mediaRequestsAborted=0,this.mediaRequestsTimedout=0,this.mediaRequestsErrored=0,this.mediaTransferDuration=0,this.mediaSecondsLoaded=0},r.prototype.dispose=function(){this.state="DISPOSED",this.pause(),this.abort_(),this.sourceUpdater_&&this.sourceUpdater_.dispose(),this.resetStats_()},r.prototype.abort=function(){"WAITING"===this.state?(this.abort_(),this.state="READY",this.paused()||this.monitorBuffer_()):this.pendingSegment_&&(this.pendingSegment_=null)},r.prototype.abort_=function(){this.pendingSegment_&&this.pendingSegment_.abortRequests(),this.pendingSegment_=null},r.prototype.error=function(t){return"undefined"!=typeof t&&(this.error_=t),this.pendingSegment_=null,this.error_},r.prototype.endOfStream=function(){this.ended_=!0,this.pause(),this.trigger("ended")},r.prototype.buffered_=function(){return this.sourceUpdater_?this.sourceUpdater_.buffered():As.createTimeRanges()},r.prototype.initSegment=function(t){var e=1<arguments.length&&void 0!==arguments[1]&&arguments[1];if(!t)return null;var i=hu(t),r=this.initSegments_[i];return e&&!r&&t.bytes&&(this.initSegments_[i]=r={resolvedUri:t.resolvedUri,byterange:t.byterange,bytes:t.bytes}),r||t},r.prototype.couldBeginLoading_=function(){return this.playlist_&&(this.sourceUpdater_||this.mimeType_&&"INIT"===this.state)&&!this.paused()},r.prototype.load=function(){if(this.monitorBuffer_(),this.playlist_){if(this.syncController_.setDateTimeMapping(this.playlist_),"INIT"===this.state&&this.couldBeginLoading_())return this.init_();!this.couldBeginLoading_()||"READY"!==this.state&&"INIT"!==this.state||(this.state="READY")}},r.prototype.init_=function(){return this.state="READY",this.sourceUpdater_=new Ku(this.mediaSource_,this.mimeType_,this.loaderType_,this.sourceBufferEmitter_),this.resetEverything(),this.monitorBuffer_()},r.prototype.playlist=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};if(t){var i=this.playlist_,r=this.pendingSegment_;this.playlist_=t,this.xhrOptions_=e,this.hasPlayed_()||(t.syncInfo={mediaSequence:t.mediaSequence,time:0});var n=i?i.id:null;if(this.logger_("playlist update ["+n+" => "+t.id+"]"),this.trigger("syncinfoupdate"),"INIT"===this.state&&this.couldBeginLoading_())return this.init_();if(i&&i.uri===t.uri){var s=t.mediaSequence-i.mediaSequence;this.logger_("live window shift ["+s+"]"),null!==this.mediaIndex&&(this.mediaIndex-=s),r&&(r.mediaIndex-=s,0<=r.mediaIndex&&(r.segment=t.segments[r.mediaIndex])),this.syncController_.saveExpiredSegmentInfo(i,t)}else null!==this.mediaIndex&&this.resyncLoader()}},r.prototype.pause=function(){this.checkBufferTimeout_&&(g.clearTimeout(this.checkBufferTimeout_),this.checkBufferTimeout_=null)},r.prototype.paused=function(){return null===this.checkBufferTimeout_},r.prototype.mimeType=function(t,e){this.mimeType_||(this.mimeType_=t,this.sourceBufferEmitter_=e,"INIT"===this.state&&this.couldBeginLoading_()&&this.init_())},r.prototype.resetEverything=function(){this.ended_=!1,this.resetLoader(),this.remove(0,this.duration_()),this.trigger("reseteverything")},r.prototype.resetLoader=function(){this.fetchAtBuffer_=!1,this.resyncLoader()},r.prototype.resyncLoader=function(){this.mediaIndex=null,this.syncPoint_=null,this.abort()},r.prototype.remove=function(t,e){this.sourceUpdater_&&this.sourceUpdater_.remove(t,e),bu(t,e,this.segmentMetadataTrack_)},r.prototype.monitorBuffer_=function(){this.checkBufferTimeout_&&g.clearTimeout(this.checkBufferTimeout_),this.checkBufferTimeout_=g.setTimeout(this.monitorBufferTick_.bind(this),1)},r.prototype.monitorBufferTick_=function(){"READY"===this.state&&this.fillBuffer_(),this.checkBufferTimeout_&&g.clearTimeout(this.checkBufferTimeout_),this.checkBufferTimeout_=g.setTimeout(this.monitorBufferTick_.bind(this),500)},r.prototype.fillBuffer_=function(){if(!this.sourceUpdater_.updating()){this.syncPoint_||(this.syncPoint_=this.syncController_.getSyncPoint(this.playlist_,this.duration_(),this.currentTimeline_,this.currentTime_()));var t=this.checkBuffer_(this.buffered_(),this.playlist_,this.mediaIndex,this.hasPlayed_(),this.currentTime_(),this.syncPoint_);if(t)fl(this.playlist_,this.mediaSource_,t.mediaIndex)?this.endOfStream():(t.mediaIndex!==this.playlist_.segments.length-1||"ended"!==this.mediaSource_.readyState||this.seeking_())&&((t.timeline!==this.currentTimeline_||null!==t.startOfSegment&&t.startOfSegment<this.sourceUpdater_.timestampOffset())&&(this.syncController_.reset(),t.timestampOffset=t.startOfSegment),this.loadSegment_(t))}},r.prototype.checkBuffer_=function(t,e,i,r,n,s){var a=0,o=void 0;t.length&&(a=t.end(t.length-1));var u=Math.max(0,a-n);if(!e.segments.length)return null;if(u>=this.goalBufferLength_())return null;if(!r&&1<=u)return null;if(null===s)return i=this.getSyncSegmentCandidate_(e),this.generateSegmentInfo_(e,i,null,!0);if(null!==i){var l=e.segments[i];return o=l&&l.end?l.end:a,this.generateSegmentInfo_(e,i+1,o,!1)}if(this.fetchAtBuffer_){var c=nu.getMediaInfoForTime(e,a,s.segmentIndex,s.time);i=c.mediaIndex,o=c.startTime}else{var h=nu.getMediaInfoForTime(e,n,s.segmentIndex,s.time);i=h.mediaIndex,o=h.startTime}return this.generateSegmentInfo_(e,i,o,!1)},r.prototype.getSyncSegmentCandidate_=function(t){var e=this;if(-1===this.currentTimeline_)return 0;var i=t.segments.map(function(t,e){return{timeline:t.timeline,segmentIndex:e}}).filter(function(t){return t.timeline===e.currentTimeline_});return i.length?i[Math.min(i.length-1,1)].segmentIndex:Math.max(t.segments.length-1,0)},r.prototype.generateSegmentInfo_=function(t,e,i,r){if(e<0||e>=t.segments.length)return null;var n=t.segments[e];return{requestId:"segment-loader-"+Math.random(),uri:n.resolvedUri,mediaIndex:e,isSyncRequest:r,startOfSegment:i,playlist:t,bytes:null,encryptedBytes:null,timestampOffset:null,timeline:n.timeline,duration:n.duration,segment:n}},r.prototype.abortRequestEarly_=function(t){if(this.hls_.tech_.paused()||!this.xhrOptions_.timeout||!this.playlist_.attributes.BANDWIDTH)return!1;if(Date.now()-(t.firstBytesReceivedAt||Date.now())<1e3)return!1;var e=this.currentTime_(),i=t.bandwidth,r=this.pendingSegment_.duration,n=nu.estimateSegmentRequestTime(r,i,this.playlist_,t.bytesReceived),s=function(t,e){var i=2<arguments.length&&void 0!==arguments[2]?arguments[2]:1;return((t.length?t.end(t.length-1):0)-e)/i}(this.buffered_(),e,this.hls_.tech_.playbackRate())-1;if(n<=s)return!1;var a=function(t){var e=t.master,i=t.currentTime,r=t.bandwidth,n=t.duration,s=t.segmentDuration,a=t.timeUntilRebuffer,o=t.currentTimeline,u=t.syncController,l=e.playlists.filter(function(t){return!nu.isIncompatible(t)}),c=l.filter(nu.isEnabled);c.length||(c=l.filter(function(t){return!nu.isDisabled(t)}));var h=c.filter(nu.hasAttribute.bind(null,"BANDWIDTH")).map(function(t){var e=u.getSyncPoint(t,n,o,i)?1:2;return{playlist:t,rebufferingImpact:nu.estimateSegmentRequestTime(s,r,t)*e-a}}),d=h.filter(function(t){return t.rebufferingImpact<=0});return dl(d,function(t,e){return pl(e.playlist,t.playlist)}),d.length?d[0]:(dl(h,function(t,e){return t.rebufferingImpact-e.rebufferingImpact}),h[0]||null)}({master:this.hls_.playlists.master,currentTime:e,bandwidth:i,duration:this.duration_(),segmentDuration:r,timeUntilRebuffer:s,currentTimeline:this.currentTimeline_,syncController:this.syncController_});if(a){var o=n-s-a.rebufferingImpact,u=.5;return s<=fu&&(u=1),!a.playlist||a.playlist.uri===this.playlist_.uri||o<u?!1:(this.bandwidth=a.playlist.attributes.BANDWIDTH*Qu.BANDWIDTH_VARIANCE+1,this.abort(),this.trigger("earlyabort"),!0)}},r.prototype.handleProgress_=function(t,e){this.pendingSegment_&&e.requestId===this.pendingSegment_.requestId&&!this.abortRequestEarly_(e.stats)&&this.trigger("progress")},r.prototype.loadSegment_=function(t){this.state="WAITING",this.pendingSegment_=t,this.trimBackBuffer_(t),t.abortRequests=al(this.hls_.xhr,this.xhrOptions_,this.decrypter_,this.createSimplifiedSegmentObj_(t),this.handleProgress_.bind(this),this.segmentRequestFinished_.bind(this))},r.prototype.trimBackBuffer_=function(t){var e,i,r,n,s=(e=this.seekable_(),i=this.currentTime_(),r=this.playlist_.targetDuration||10,n=void 0,n=e.length&&0<e.start(0)&&e.start(0)<i?e.start(0):i-30,Math.min(n,i-r));0<s&&this.remove(0,s)},r.prototype.createSimplifiedSegmentObj_=function(t){var e=t.segment,i={resolvedUri:e.resolvedUri,byterange:e.byterange,requestId:t.requestId};if(e.key){var r=e.key.iv||new Uint32Array([0,0,0,t.mediaIndex+t.playlist.mediaSequence]);i.key={resolvedUri:e.key.resolvedUri,iv:r}}return e.map&&(i.map=this.initSegment(e.map)),i},r.prototype.segmentRequestFinished_=function(t,e){if(this.mediaRequests+=1,e.stats&&(this.mediaBytesTransferred+=e.stats.bytesReceived,this.mediaTransferDuration+=e.stats.roundTripTime),this.pendingSegment_){if(e.requestId===this.pendingSegment_.requestId){if(t)return this.pendingSegment_=null,this.state="READY",t.code===tl?void(this.mediaRequestsAborted+=1):(this.pause(),t.code===Zu?(this.mediaRequestsTimedout+=1,this.bandwidth=1,this.roundTrip=NaN,void this.trigger("bandwidthupdate")):(this.mediaRequestsErrored+=1,this.error(t),void this.trigger("error")));this.bandwidth=e.stats.bandwidth,this.roundTrip=e.stats.roundTripTime,e.map&&(e.map=this.initSegment(e.map,!0)),this.processSegmentResponse_(e)}}else this.mediaRequestsAborted+=1},r.prototype.processSegmentResponse_=function(t){var e=this.pendingSegment_;e.bytes=t.bytes,t.map&&(e.segment.map.bytes=t.map.bytes),e.endOfAllRequests=t.endOfAllRequests,this.handleSegment_()},r.prototype.handleSegment_=function(){var t=this;if(this.pendingSegment_){var e=this.pendingSegment_,i=e.segment,r=this.syncController_.probeSegmentInfo(e);"undefined"==typeof this.startingMedia_&&r&&(r.containsAudio||r.containsVideo)&&(this.startingMedia_={containsAudio:r.containsAudio,containsVideo:r.containsVideo});var n,s,a,o=(n=this.loaderType_,s=this.startingMedia_,a=r,"main"===n&&s&&a?a.containsAudio||a.containsVideo?s.containsVideo&&!a.containsVideo?"Only audio found in segment when we expected video. We can't switch to audio only from a stream that had video. To get rid of this message, please add codec information to the manifest.":!s.containsVideo&&a.containsVideo?"Video found in segment when we expected only audio. We can't switch to a stream with video from an audio only stream. To get rid of this message, please add codec information to the manifest.":null:"Neither audio nor video found in segment.":null);if(o)return this.error({message:o,blacklistDuration:1/0}),void this.trigger("error");if(e.isSyncRequest)return this.trigger("syncinfoupdate"),this.pendingSegment_=null,void(this.state="READY");null!==e.timestampOffset&&e.timestampOffset!==this.sourceUpdater_.timestampOffset()&&(this.sourceUpdater_.timestampOffset(e.timestampOffset),this.trigger("timestampoffset"));var u,l,c,h,d,p,f,m,g,y,v,_=this.syncController_.mappingForTimeline(e.timeline);if(null!==_&&this.trigger({type:"segmenttimemapping",mapping:_}),this.state="APPENDING",i.map){var b=hu(i.map);if(!this.activeInitSegmentId_||this.activeInitSegmentId_!==b){var T=this.initSegment(i.map);this.sourceUpdater_.appendBuffer(T.bytes,function(){t.activeInitSegmentId_=b})}}e.byteLength=e.bytes.byteLength,"number"==typeof i.start&&"number"==typeof i.end?this.mediaSecondsLoaded+=i.end-i.start:this.mediaSecondsLoaded+=i.duration,this.logger_((l=(u=e).segment,c=l.start,h=l.end,d=u.playlist,p=d.mediaSequence,f=d.id,m=d.segments,g=void 0===m?[]:m,y=u.mediaIndex,v=u.timeline,["appending ["+y+"] of ["+p+", "+(p+g.length)+"] from playlist ["+f+"]","["+c+" => "+h+"] in timeline ["+v+"]"].join(" "))),this.sourceUpdater_.appendBuffer(e.bytes,this.handleUpdateEnd_.bind(this))}else this.state="READY"},r.prototype.handleUpdateEnd_=function(){if(!this.pendingSegment_)return this.state="READY",void(this.paused()||this.monitorBuffer_());var t=this.pendingSegment_,e=t.segment,i=null!==this.mediaIndex;(this.pendingSegment_=null,this.recordThroughput_(t),this.addSegmentMetadataCue_(t),this.state="READY",this.mediaIndex=t.mediaIndex,this.fetchAtBuffer_=!0,this.currentTimeline_=t.timeline,this.trigger("syncinfoupdate"),e.end&&this.currentTime_()-e.end>3*t.playlist.targetDuration)?this.resetEverything():(i&&this.trigger("bandwidthupdate"),this.trigger("progress"),fl(t.playlist,this.mediaSource_,t.mediaIndex+1)&&this.endOfStream(),this.paused()||this.monitorBuffer_())},r.prototype.recordThroughput_=function(t){var e=this.throughput.rate,i=Date.now()-t.endOfAllRequests+1,r=Math.floor(t.byteLength/i*8*1e3);this.throughput.rate+=(r-e)/++this.throughput.count},r.prototype.addSegmentMetadataCue_=function(t){if(this.segmentMetadataTrack_){var e=t.segment,i=e.start,r=e.end;if(ml(i)&&ml(r)){bu(i,r,this.segmentMetadataTrack_);var n=g.WebKitDataCue||g.VTTCue,s={bandwidth:t.playlist.attributes.BANDWIDTH,resolution:t.playlist.attributes.RESOLUTION,codecs:t.playlist.attributes.CODECS,byteLength:t.byteLength,uri:t.uri,timeline:t.timeline,playlist:t.playlist.uri,start:i,end:r},a=new n(i,r,JSON.stringify(s));a.value=s,this.segmentMetadataTrack_.addCue(a)}}},r}(As.EventTarget),yl=new Uint8Array("\n\n".split("").map(function(t){return t.charCodeAt(0)})),vl=function(t){return String.fromCharCode.apply(null,t)},_l=function(r){function n(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};y(this,n);var i=b(this,r.call(this,t,e));return i.mediaSource_=null,i.subtitlesTrack_=null,i}return _(n,r),n.prototype.buffered_=function(){if(!this.subtitlesTrack_||!this.subtitlesTrack_.cues.length)return As.createTimeRanges();var t=this.subtitlesTrack_.cues,e=t[0].startTime,i=t[t.length-1].startTime;return As.createTimeRanges([[e,i]])},n.prototype.initSegment=function(t){var e=1<arguments.length&&void 0!==arguments[1]&&arguments[1];if(!t)return null;var i=hu(t),r=this.initSegments_[i];if(e&&!r&&t.bytes){var n=yl.byteLength+t.bytes.byteLength,s=new Uint8Array(n);s.set(t.bytes),s.set(yl,t.bytes.byteLength),this.initSegments_[i]=r={resolvedUri:t.resolvedUri,byterange:t.byterange,bytes:s}}return r||t},n.prototype.couldBeginLoading_=function(){return this.playlist_&&this.subtitlesTrack_&&!this.paused()},n.prototype.init_=function(){return this.state="READY",this.resetEverything(),this.monitorBuffer_()},n.prototype.track=function(t){return"undefined"==typeof t||(this.subtitlesTrack_=t,"INIT"===this.state&&this.couldBeginLoading_()&&this.init_()),this.subtitlesTrack_},n.prototype.remove=function(t,e){bu(t,e,this.subtitlesTrack_)},n.prototype.fillBuffer_=function(){var t=this;this.syncPoint_||(this.syncPoint_=this.syncController_.getSyncPoint(this.playlist_,this.duration_(),this.currentTimeline_,this.currentTime_()));var e=this.checkBuffer_(this.buffered_(),this.playlist_,this.mediaIndex,this.hasPlayed_(),this.currentTime_(),this.syncPoint_);if(e=this.skipEmptySegments_(e)){if(null===this.syncController_.timestampOffsetForTimeline(e.timeline)){return this.syncController_.one("timestampoffset",function(){t.state="READY",t.paused()||t.monitorBuffer_()}),void(this.state="WAITING_ON_TIMELINE")}this.loadSegment_(e)}},n.prototype.skipEmptySegments_=function(t){for(;t&&t.segment.empty;)t=this.generateSegmentInfo_(t.playlist,t.mediaIndex+1,t.startOfSegment+t.duration,t.isSyncRequest);return t},n.prototype.handleSegment_=function(){var e=this;if(this.pendingSegment_&&this.subtitlesTrack_){this.state="APPENDING";var t=this.pendingSegment_,i=t.segment;if("function"!=typeof g.WebVTT&&this.subtitlesTrack_&&this.subtitlesTrack_.tech_){var r=function(){e.handleSegment_()};return this.state="WAITING_ON_VTTJS",this.subtitlesTrack_.tech_.one("vttjsloaded",r),void this.subtitlesTrack_.tech_.one("vttjserror",function(){e.subtitlesTrack_.tech_.off("vttjsloaded",r),e.error({message:"Error loading vtt.js"}),e.state="READY",e.pause(),e.trigger("error")})}i.requested=!0;try{this.parseVTTCues_(t)}catch(t){return this.error({message:t.message}),this.state="READY",this.pause(),this.trigger("error")}if(this.updateTimeMapping_(t,this.syncController_.timelines[t.timeline],this.playlist_),t.isSyncRequest)return this.trigger("syncinfoupdate"),this.pendingSegment_=null,void(this.state="READY");t.byteLength=t.bytes.byteLength,this.mediaSecondsLoaded+=i.duration,t.cues.length&&this.remove(t.cues[0].endTime,t.cues[t.cues.length-1].endTime),t.cues.forEach(function(t){e.subtitlesTrack_.addCue(t)}),this.handleUpdateEnd_()}else this.state="READY"},n.prototype.parseVTTCues_=function(e){var t=void 0,i=!1;"function"==typeof g.TextDecoder?t=new g.TextDecoder("utf8"):(t=g.WebVTT.StringDecoder(),i=!0);var r=new g.WebVTT.Parser(g,g.vttjs,t);if(e.cues=[],e.timestampmap={MPEGTS:0,LOCAL:0},r.oncue=e.cues.push.bind(e.cues),r.ontimestampmap=function(t){return e.timestampmap=t},r.onparsingerror=function(t){As.log.warn("Error encountered when parsing cues: "+t.message)},e.segment.map){var n=e.segment.map.bytes;i&&(n=vl(n)),r.parse(n)}var s=e.bytes;i&&(s=vl(s)),r.parse(s),r.flush()},n.prototype.updateTimeMapping_=function(t,e,i){var r=t.segment;if(e)if(t.cues.length){var n=t.timestampmap,s=n.MPEGTS/9e4-n.LOCAL+e.mapping;if(t.cues.forEach(function(t){t.startTime+=s,t.endTime+=s}),!i.syncInfo){var a=t.cues[0].startTime,o=t.cues[t.cues.length-1].startTime;i.syncInfo={mediaSequence:i.mediaSequence+t.mediaIndex,time:Math.min(a,o-r.duration)}}}else r.empty=!0},n}(gl),bl=function(t,e){for(var i=t.cues,r=0;r<i.length;r++){var n=i[r];if(e>=n.adStartTime&&e<=n.adEndTime)return n}return null},Tl=So,Sl=[{name:"VOD",run:function(t,e,i,r,n){if(i!==1/0){return{time:0,segmentIndex:0}}return null}},{name:"ProgramDateTime",run:function(t,e,i,r,n){if(!t.datetimeToDisplayTime)return null;var s=e.segments||[],a=null,o=null;n=n||0;for(var u=0;u<s.length;u++){var l=s[u];if(l.dateTimeObject){var c=l.dateTimeObject.getTime()/1e3+t.datetimeToDisplayTime,h=Math.abs(n-c);if(null!==o&&o<h)break;o=h,a={time:c,segmentIndex:u}}}return a}},{name:"Segment",run:function(t,e,i,r,n){var s=e.segments||[],a=null,o=null;n=n||0;for(var u=0;u<s.length;u++){var l=s[u];if(l.timeline===r&&"undefined"!=typeof l.start){var c=Math.abs(n-l.start);if(null!==o&&o<c)break;(!a||null===o||c<=o)&&(o=c,a={time:l.start,segmentIndex:u})}}return a}},{name:"Discontinuity",run:function(t,e,i,r,n){var s=null;if(n=n||0,e.discontinuityStarts&&e.discontinuityStarts.length)for(var a=null,o=0;o<e.discontinuityStarts.length;o++){var u=e.discontinuityStarts[o],l=e.discontinuitySequence+o+1,c=t.discontinuities[l];if(c){var h=Math.abs(n-c.time);if(null!==a&&a<h)break;(!s||null===a||h<=a)&&(a=h,s={time:c.time,segmentIndex:u})}}return s}},{name:"Playlist",run:function(t,e,i,r,n){return e.syncInfo?{time:e.syncInfo.time,segmentIndex:e.syncInfo.mediaSequence-e.mediaSequence}:null}}],kl=function(e){function i(){y(this,i);var t=b(this,e.call(this));return t.inspectCache_=void 0,t.timelines=[],t.discontinuities=[],t.datetimeToDisplayTime=null,t.logger_=Yu("SyncController"),t}return _(i,e),i.prototype.getSyncPoint=function(t,e,i,r){var n=this.runStrategies_(t,e,i,r);return n.length?this.selectSyncPoint_(n,{key:"time",value:r}):null},i.prototype.getExpiredTime=function(t,e){if(!t||!t.segments)return null;var i=this.runStrategies_(t,e,t.discontinuitySequence,0);if(!i.length)return null;var r=this.selectSyncPoint_(i,{key:"segmentIndex",value:0});return 0<r.segmentIndex&&(r.time*=-1),Math.abs(r.time+Go(t,r.segmentIndex,0))},i.prototype.runStrategies_=function(t,e,i,r){for(var n=[],s=0;s<Sl.length;s++){var a=Sl[s],o=a.run(this,t,e,i,r);o&&(o.strategy=a.name,n.push({strategy:a.name,syncPoint:o}))}return n},i.prototype.selectSyncPoint_=function(t,e){for(var i=t[0].syncPoint,r=Math.abs(t[0].syncPoint[e.key]-e.value),n=t[0].strategy,s=1;s<t.length;s++){var a=Math.abs(t[s].syncPoint[e.key]-e.value);a<r&&(r=a,i=t[s].syncPoint,n=t[s].strategy)}return this.logger_("syncPoint for ["+e.key+": "+e.value+"] chosen with strategy ["+n+"]: [time:"+i.time+", segmentIndex:"+i.segmentIndex+"]"),i},i.prototype.saveExpiredSegmentInfo=function(t,e){for(var i=e.mediaSequence-t.mediaSequence-1;0<=i;i--){var r=t.segments[i];if(r&&"undefined"!=typeof r.start){e.syncInfo={mediaSequence:t.mediaSequence+i,time:r.start},this.logger_("playlist refresh sync: [time:"+e.syncInfo.time+", mediaSequence: "+e.syncInfo.mediaSequence+"]"),this.trigger("syncinfoupdate");break}}},i.prototype.setDateTimeMapping=function(t){if(!this.datetimeToDisplayTime&&t.segments&&t.segments.length&&t.segments[0].dateTimeObject){var e=t.segments[0].dateTimeObject.getTime()/1e3;this.datetimeToDisplayTime=-e}},i.prototype.reset=function(){this.inspectCache_=void 0},i.prototype.probeSegmentInfo=function(t){var e=t.segment,i=t.playlist,r=void 0;return(r=e.map?this.probeMp4Segment_(t):this.probeTsSegment_(t))&&this.calculateSegmentTimeMapping_(t,r)&&(this.saveDiscontinuitySyncInfo_(t),i.syncInfo||(i.syncInfo={mediaSequence:i.mediaSequence+t.mediaIndex,time:e.start})),r},i.prototype.probeMp4Segment_=function(t){var e=t.segment,i=La(e.map.bytes),r=Pa(i,t.bytes);return null!==t.timestampOffset&&(t.timestampOffset-=r),{start:r,end:r+e.duration}},i.prototype.probeTsSegment_=function(t){var e=Tl(t.bytes,this.inspectCache_),i=void 0,r=void 0;return e?(e.video&&2===e.video.length?(this.inspectCache_=e.video[1].dts,i=e.video[0].dtsTime,r=e.video[1].dtsTime):e.audio&&2===e.audio.length&&(this.inspectCache_=e.audio[1].dts,i=e.audio[0].dtsTime,r=e.audio[1].dtsTime),{start:i,end:r,containsVideo:e.video&&2===e.video.length,containsAudio:e.audio&&2===e.audio.length}):null},i.prototype.timestampOffsetForTimeline=function(t){return"undefined"==typeof this.timelines[t]?null:this.timelines[t].time},i.prototype.mappingForTimeline=function(t){return"undefined"==typeof this.timelines[t]?null:this.timelines[t].mapping},i.prototype.calculateSegmentTimeMapping_=function(t,e){var i=t.segment,r=this.timelines[t.timeline];if(null!==t.timestampOffset)r={time:t.startOfSegment,mapping:t.startOfSegment-e.start},this.timelines[t.timeline]=r,this.trigger("timestampoffset"),this.logger_("time mapping for timeline "+t.timeline+": [time: "+r.time+"] [mapping: "+r.mapping+"]"),i.start=t.startOfSegment,i.end=e.end+r.mapping;else{if(!r)return!1;i.start=e.start+r.mapping,i.end=e.end+r.mapping}return!0},i.prototype.saveDiscontinuitySyncInfo_=function(t){var e=t.playlist,i=t.segment;if(i.discontinuity)this.discontinuities[i.timeline]={time:i.start,accuracy:0};else if(e.discontinuityStarts&&e.discontinuityStarts.length)for(var r=0;r<e.discontinuityStarts.length;r++){var n=e.discontinuityStarts[r],s=e.discontinuitySequence+r+1,a=n-t.mediaIndex,o=Math.abs(a);if(!this.discontinuities[s]||this.discontinuities[s].accuracy>o){var u=void 0;u=a<0?i.start-Go(e,t.mediaIndex,n):i.end+Go(e,t.mediaIndex+1,n),this.discontinuities[s]={time:u,accuracy:o}}}},i}(As.EventTarget),Cl=new Pu("./decrypter-worker.worker.js",function(t,e){var i,s,h,r,n,d,p,g,a,l,y,o,u=this;i="undefined"!=typeof t?t:"undefined"!=typeof global?global:"undefined"!=typeof u?u:{},s="undefined"!=typeof t?t:"undefined"!=typeof i?i:"undefined"!=typeof u?u:{},h=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},r=function(){function r(t,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(t,e,i){return e&&r(t.prototype,e),i&&r(t,i),t}}(),n=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==("undefined"==typeof e?"undefined":v(e))&&"function"!=typeof e?t:e},d=function(){var t=[[[],[],[],[],[]],[[],[],[],[],[]]],e=t[0],i=t[1],r=e[4],n=i[4],s=void 0,a=void 0,o=void 0,u=[],l=[],c=void 0,h=void 0,d=void 0,p=void 0,f=void 0;for(s=0;s<256;s++)l[(u[s]=s<<1^283*(s>>7))^s]=s;for(a=o=0;!r[a];a^=c||1,o=l[o]||1)for(d=(d=o^o<<1^o<<2^o<<3^o<<4)>>8^255&d^99,f=16843009*u[h=u[c=u[n[r[a]=d]=a]]]^65537*h^257*c^16843008*a,p=257*u[d]^16843008*d,s=0;s<4;s++)e[s][a]=p=p<<24^p>>>8,i[s][d]=f=f<<24^f>>>8;for(s=0;s<5;s++)e[s]=e[s].slice(0),i[s]=i[s].slice(0);return t},p=null,g=function(){function c(t){h(this,c),p||(p=d()),this._tables=[[p[0][0].slice(),p[0][1].slice(),p[0][2].slice(),p[0][3].slice(),p[0][4].slice()],[p[1][0].slice(),p[1][1].slice(),p[1][2].slice(),p[1][3].slice(),p[1][4].slice()]];var e=void 0,i=void 0,r=void 0,n=void 0,s=void 0,a=this._tables[0][4],o=this._tables[1],u=t.length,l=1;if(4!==u&&6!==u&&8!==u)throw new Error("Invalid aes key size");for(n=t.slice(0),s=[],this._key=[n,s],e=u;e<4*u+28;e++)r=n[e-1],(e%u==0||8===u&&e%u==4)&&(r=a[r>>>24]<<24^a[r>>16&255]<<16^a[r>>8&255]<<8^a[255&r],e%u==0&&(r=r<<8^r>>>24^l<<24,l=l<<1^283*(l>>7))),n[e]=n[e-u]^r;for(i=0;e;i++,e--)r=n[3&i?e:e-4],s[i]=e<=4||i<4?r:o[0][a[r>>>24]]^o[1][a[r>>16&255]]^o[2][a[r>>8&255]]^o[3][a[255&r]]}return c.prototype.decrypt=function(t,e,i,r,n,s){var a=this._key[1],o=t^a[0],u=r^a[1],l=i^a[2],c=e^a[3],h=void 0,d=void 0,p=void 0,f=a.length/4-2,m=void 0,g=4,y=this._tables[1],v=y[0],_=y[1],b=y[2],T=y[3],S=y[4];for(m=0;m<f;m++)h=v[o>>>24]^_[u>>16&255]^b[l>>8&255]^T[255&c]^a[g],d=v[u>>>24]^_[l>>16&255]^b[c>>8&255]^T[255&o]^a[g+1],p=v[l>>>24]^_[c>>16&255]^b[o>>8&255]^T[255&u]^a[g+2],c=v[c>>>24]^_[o>>16&255]^b[u>>8&255]^T[255&l]^a[g+3],g+=4,o=h,u=d,l=p;for(m=0;m<4;m++)n[(3&-m)+s]=S[o>>>24]<<24^S[u>>16&255]<<16^S[l>>8&255]<<8^S[255&c]^a[g++],h=o,o=u,u=l,l=c,c=h},c}(),a=function(){function t(){h(this,t),this.listeners={}}return t.prototype.on=function(t,e){this.listeners[t]||(this.listeners[t]=[]),this.listeners[t].push(e)},t.prototype.off=function(t,e){if(!this.listeners[t])return!1;var i=this.listeners[t].indexOf(e);return this.listeners[t].splice(i,1),-1<i},t.prototype.trigger=function(t){var e=this.listeners[t];if(e)if(2===arguments.length)for(var i=e.length,r=0;r<i;++r)e[r].call(this,arguments[1]);else for(var n=Array.prototype.slice.call(arguments,1),s=e.length,a=0;a<s;++a)e[a].apply(this,n)},t.prototype.dispose=function(){this.listeners={}},t.prototype.pipe=function(e){this.on("data",function(t){e.push(t)})},t}(),l=function(e){function i(){h(this,i);var t=n(this,e.call(this,a));return t.jobs=[],t.delay=1,t.timeout_=null,t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+("undefined"==typeof e?"undefined":v(e)));t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(i,e),i.prototype.processJob_=function(){this.jobs.shift()(),this.jobs.length?this.timeout_=setTimeout(this.processJob_.bind(this),this.delay):this.timeout_=null},i.prototype.push=function(t){this.jobs.push(t),this.timeout_||(this.timeout_=setTimeout(this.processJob_.bind(this),this.delay))},i}(a),y=function(t){return t<<24|(65280&t)<<8|(16711680&t)>>8|t>>>24},o=function(){function u(t,e,i,r){h(this,u);var n=u.STEP,s=new Int32Array(t.buffer),a=new Uint8Array(t.byteLength),o=0;for(this.asyncStream_=new l,this.asyncStream_.push(this.decryptChunk_(s.subarray(o,o+n),e,i,a)),o=n;o<s.length;o+=n)i=new Uint32Array([y(s[o-4]),y(s[o-3]),y(s[o-2]),y(s[o-1])]),this.asyncStream_.push(this.decryptChunk_(s.subarray(o,o+n),e,i,a));this.asyncStream_.push(function(){var t;r(null,(t=a).subarray(0,t.byteLength-t[t.byteLength-1]))})}return u.prototype.decryptChunk_=function(e,i,r,n){return function(){var t=function(t,e,i){var r=new Int32Array(t.buffer,t.byteOffset,t.byteLength>>2),n=new g(Array.prototype.slice.call(e)),s=new Uint8Array(t.byteLength),a=new Int32Array(s.buffer),o=void 0,u=void 0,l=void 0,c=void 0,h=void 0,d=void 0,p=void 0,f=void 0,m=void 0;for(o=i[0],u=i[1],l=i[2],c=i[3],m=0;m<r.length;m+=4)h=y(r[m]),d=y(r[m+1]),p=y(r[m+2]),f=y(r[m+3]),n.decrypt(h,d,p,f,a,m),a[m]=y(a[m]^o),a[m+1]=y(a[m+1]^u),a[m+2]=y(a[m+2]^l),a[m+3]=y(a[m+3]^c),o=h,u=d,l=p,c=f;return s}(e,i,r);n.set(t,e.byteOffset)}},r(u,null,[{key:"STEP",get:function(){return 32e3}}]),u}(),new function(t){t.onmessage=function(t){var n=t.data,e=new Uint8Array(n.encrypted.bytes,n.encrypted.byteOffset,n.encrypted.byteLength),i=new Uint32Array(n.key.bytes,n.key.byteOffset,n.key.byteLength/4),r=new Uint32Array(n.iv.bytes,n.iv.byteOffset,n.iv.byteLength/4);new o(e,i,r,function(t,e){var i,r;s.postMessage((i={source:n.source,decrypted:e},r={},Object.keys(i).forEach(function(t){var e=i[t];ArrayBuffer.isView(e)?r[t]={bytes:e.buffer,byteOffset:e.byteOffset,byteLength:e.byteLength}:r[t]=e}),r),[e.buffer])})}}(u)}),El=function(t,e){t.abort(),t.pause(),e&&e.activePlaylistLoader&&(e.activePlaylistLoader.pause(),e.activePlaylistLoader=null)},wl=function(t,e){(e.activePlaylistLoader=t).load()},Al={AUDIO:function(u,l){return function(){var t=l.segmentLoaders[u],e=l.mediaTypes[u],i=l.blacklistCurrentPlaylist;El(t,e);var r=e.activeTrack(),n=e.activeGroup(),s=(n.filter(function(t){return t.default})[0]||n[0]).id,a=e.tracks[s];if(r!==a){for(var o in As.log.warn("Problem encountered loading the alternate audio track.Switching back to default."),e.tracks)e.tracks[o].enabled=e.tracks[o]===a;e.onTrackChanged()}else i({message:"Problem encountered loading the default audio track."})}},SUBTITLES:function(r,n){return function(){var t=n.segmentLoaders[r],e=n.mediaTypes[r];As.log.warn("Problem encountered loading the subtitle track.Disabling subtitle track."),El(t,e);var i=e.activeTrack();i&&(i.mode="disabled"),e.onTrackChanged()}}},Ll={AUDIO:function(t,e,i){if(e){var r=i.tech,n=i.requestOptions,s=i.segmentLoaders[t];e.on("loadedmetadata",function(){var t=e.media();s.playlist(t,n),(!r.paused()||t.endList&&"none"!==r.preload())&&s.load()}),e.on("loadedplaylist",function(){s.playlist(e.media(),n),r.paused()||s.load()}),e.on("error",Al[t](t,i))}},SUBTITLES:function(t,e,i){var r=i.tech,n=i.requestOptions,s=i.segmentLoaders[t],a=i.mediaTypes[t];e.on("loadedmetadata",function(){var t=e.media();s.playlist(t,n),s.track(a.activeTrack()),(!r.paused()||t.endList&&"none"!==r.preload())&&s.load()}),e.on("loadedplaylist",function(){s.playlist(e.media(),n),r.paused()||s.load()}),e.on("error",Al[t](t,i))}},Pl=function(e,i){return function(t){return t.attributes[e]===i}},Ol=function(e){return function(t){return t.resolvedUri===e}},xl={AUDIO:function(t,e){var i,r,n=e.hls,s=e.sourceType,a=e.segmentLoaders[t],o=e.requestOptions.withCredentials,u=e.master,l=u.mediaGroups,c=u.playlists,h=e.mediaTypes[t],d=h.groups,p=h.tracks,f=e.masterPlaylistLoader;for(var m in l[t]&&0!==Object.keys(l[t]).length||(l[t]={main:{default:{default:!0}}}),l[t]){d[m]||(d[m]=[]);var g=c.filter(Pl(t,m));for(var y in l[t][m]){var v=l[t][m][y];g.filter(Ol(v.resolvedUri)).length&&delete v.resolvedUri;var _=void 0;if(_=v.resolvedUri?new Vo(v.resolvedUri,n,o):v.playlists&&"dash"===s?new Xu(v.playlists[0],n,o,f):null,v=As.mergeOptions({id:y,playlistLoader:_},v),Ll[t](t,v.playlistLoader,e),d[m].push(v),"undefined"==typeof p[y]){var b=new As.AudioTrack({id:y,kind:(i=v,r=void 0,r=i.default?"main":"alternative",i.characteristics&&0<=i.characteristics.indexOf("public.accessibility.describes-video")&&(r="main-desc"),r),enabled:!1,language:v.language,default:v.default,label:y});p[y]=b}}}a.on("error",Al[t](t,e))},SUBTITLES:function(t,e){var i=e.tech,r=e.hls,n=e.sourceType,s=e.segmentLoaders[t],a=e.requestOptions.withCredentials,o=e.master.mediaGroups,u=e.mediaTypes[t],l=u.groups,c=u.tracks,h=e.masterPlaylistLoader;for(var d in o[t])for(var p in l[d]||(l[d]=[]),o[t][d])if(!o[t][d][p].forced){var f=o[t][d][p],m=void 0;if("hls"===n?m=new Vo(f.resolvedUri,r,a):"dash"===n&&(m=new Xu(f.playlists[0],r,a,h)),f=As.mergeOptions({id:p,playlistLoader:m},f),Ll[t](t,f.playlistLoader,e),l[d].push(f),"undefined"==typeof c[p]){var g=i.addRemoteTextTrack({id:p,kind:"subtitles",enabled:!1,language:f.language,label:p},!1).track;c[p]=g}}s.on("error",Al[t](t,e))},"CLOSED-CAPTIONS":function(t,e){var i=e.tech,r=e.master.mediaGroups,n=e.mediaTypes[t],s=n.groups,a=n.tracks;for(var o in r[t])for(var u in s[o]||(s[o]=[]),r[t][o]){var l=r[t][o][u];if(l.instreamId.match(/CC\d/)&&(s[o].push(As.mergeOptions({id:u},l)),"undefined"==typeof a[u])){var c=i.addRemoteTextTrack({id:l.instreamId,kind:"captions",enabled:!1,language:l.language,label:u},!1).track;a[u]=c}}}},Il={AUDIO:function(i,r){return function(){var t=r.mediaTypes[i].tracks;for(var e in t)if(t[e].enabled)return t[e];return null}},SUBTITLES:function(i,r){return function(){var t=r.mediaTypes[i].tracks;for(var e in t)if("showing"===t[e].mode)return t[e];return null}}},Dl=function(e){["AUDIO","SUBTITLES","CLOSED-CAPTIONS"].forEach(function(t){xl[t](t,e)});var i=e.mediaTypes,t=e.masterPlaylistLoader,r=e.tech,n=e.hls;["AUDIO","SUBTITLES"].forEach(function(t){var s,a,o,u,l,c;i[t].activeGroup=(s=t,a=e,function(e){var t=a.masterPlaylistLoader,i=a.mediaTypes[s].groups,r=t.media();if(!r)return null;var n=null;return r.attributes[s]&&(n=i[r.attributes[s]]),n=n||i.main,"undefined"==typeof e?n:null===e?null:n.filter(function(t){return t.id===e.id})[0]||null}),i[t].activeTrack=Il[t](t,e),i[t].onGroupChanged=(o=t,u=e,function(){var t=u.segmentLoaders,e=t[o],i=t.main,r=u.mediaTypes[o],n=r.activeTrack(),s=r.activeGroup(n),a=r.activePlaylistLoader;El(e,r),s&&(s.playlistLoader?(e.resyncLoader(),wl(s.playlistLoader,r)):a&&i.resetEverything())}),i[t].onTrackChanged=(l=t,c=e,function(){var t=c.segmentLoaders,e=t[l],i=t.main,r=c.mediaTypes[l],n=r.activeTrack(),s=r.activeGroup(n),a=r.activePlaylistLoader;El(e,r),s&&(s.playlistLoader?(a!==s.playlistLoader&&(e.track&&e.track(n),e.resetEverything()),wl(s.playlistLoader,r)):i.resetEverything())})});var s=i.AUDIO.activeGroup(),a=(s.filter(function(t){return t.default})[0]||s[0]).id;i.AUDIO.tracks[a].enabled=!0,i.AUDIO.onTrackChanged(),t.on("mediachange",function(){["AUDIO","SUBTITLES"].forEach(function(t){return i[t].onGroupChanged()})});var o=function(){i.AUDIO.onTrackChanged(),r.trigger({type:"usage",name:"hls-audio-change"})};for(var u in r.audioTracks().addEventListener("change",o),r.remoteTextTracks().addEventListener("change",i.SUBTITLES.onTrackChanged),n.on("dispose",function(){r.audioTracks().removeEventListener("change",o),r.remoteTextTracks().removeEventListener("change",i.SUBTITLES.onTrackChanged)}),r.clearTracks("audio"),i.AUDIO.tracks)r.audioTracks().addTrack(i.AUDIO.tracks[u])},Rl=function(){var e={};return["AUDIO","SUBTITLES","CLOSED-CAPTIONS"].forEach(function(t){e[t]={groups:{},tracks:{},activePlaylistLoader:null,activeGroup:$u,activeTrack:$u,onGroupChanged:$u,onTrackChanged:$u}}),e},Ml=void 0,Ul=["mediaRequests","mediaRequestsAborted","mediaRequestsTimedout","mediaRequestsErrored","mediaTransferDuration","mediaBytesTransferred"],Nl=function(t){return this.audioSegmentLoader_[t]+this.mainSegmentLoader_[t]},Bl=function(d){function p(t){y(this,p);var e=b(this,d.call(this)),i=t.url,r=t.withCredentials,n=t.tech,s=t.bandwidth,a=t.externHls,o=t.useCueTags,u=t.blacklistDuration,l=t.enableLowInitialPlaylist,c=t.sourceType;if(!i)throw new Error("A non-empty playlist URL is required");Ml=a,e.withCredentials=r,e.tech_=n,e.hls_=n.hls,e.sourceType_=c,e.useCueTags_=o,e.blacklistDuration=u,e.enableLowInitialPlaylist=l,e.useCueTags_&&(e.cueTagsTrack_=e.tech_.addTextTrack("metadata","ad-cues"),e.cueTagsTrack_.inBandMetadataTrackDispatchType=""),e.requestOptions_={withCredentials:e.withCredentials,timeout:null},e.mediaTypes_=Rl(),e.mediaSource=new As.MediaSource,e.mediaSource.addEventListener("sourceopen",e.handleSourceOpen_.bind(e)),e.seekable_=As.createTimeRanges(),e.hasPlayed_=function(){return!1},e.syncController_=new kl(t),e.segmentMetadataTrack_=n.addRemoteTextTrack({kind:"metadata",label:"segment-metadata"},!1).track,e.decrypter_=new Cl;var h={hls:e.hls_,mediaSource:e.mediaSource,currentTime:e.tech_.currentTime.bind(e.tech_),seekable:function(){return e.seekable()},seeking:function(){return e.tech_.seeking()},duration:function(){return e.mediaSource.duration},hasPlayed:function(){return e.hasPlayed_()},goalBufferLength:function(){return e.goalBufferLength()},bandwidth:s,syncController:e.syncController_,decrypter:e.decrypter_,sourceType:e.sourceType_};return e.masterPlaylistLoader_="dash"===e.sourceType_?new Xu(i,e.hls_,e.withCredentials):new Vo(i,e.hls_,e.withCredentials),e.setupMasterPlaylistLoaderListeners_(),e.mainSegmentLoader_=new gl(As.mergeOptions(h,{segmentMetadataTrack:e.segmentMetadataTrack_,loaderType:"main"}),t),e.audioSegmentLoader_=new gl(As.mergeOptions(h,{loaderType:"audio"}),t),e.subtitleSegmentLoader_=new _l(As.mergeOptions(h,{loaderType:"vtt"}),t),e.setupSegmentLoaderListeners_(),Ul.forEach(function(t){e[t+"_"]=Nl.bind(e,t)}),e.logger_=Yu("MPC"),e.masterPlaylistLoader_.load(),e}return _(p,d),p.prototype.setupMasterPlaylistLoaderListeners_=function(){var r=this;this.masterPlaylistLoader_.on("loadedmetadata",function(){var t=r.masterPlaylistLoader_.media(),e=1.5*r.masterPlaylistLoader_.targetDuration*1e3;ru(r.masterPlaylistLoader_.master,r.masterPlaylistLoader_.media())?r.requestOptions_.timeout=0:r.requestOptions_.timeout=e,t.endList&&"none"!==r.tech_.preload()&&(r.mainSegmentLoader_.playlist(t,r.requestOptions_),r.mainSegmentLoader_.load()),Dl({sourceType:r.sourceType_,segmentLoaders:{AUDIO:r.audioSegmentLoader_,SUBTITLES:r.subtitleSegmentLoader_,main:r.mainSegmentLoader_},tech:r.tech_,requestOptions:r.requestOptions_,masterPlaylistLoader:r.masterPlaylistLoader_,hls:r.hls_,master:r.master(),mediaTypes:r.mediaTypes_,blacklistCurrentPlaylist:r.blacklistCurrentPlaylist.bind(r)}),r.triggerPresenceUsage_(r.master(),t);try{r.setupSourceBuffers_()}catch(t){return As.log.warn("Failed to create SourceBuffers",t),r.mediaSource.endOfStream("decode")}r.setupFirstPlay(),r.trigger("selectedinitialmedia")}),this.masterPlaylistLoader_.on("loadedplaylist",function(){var t=r.masterPlaylistLoader_.media();if(!t){r.excludeUnsupportedVariants_();var e=void 0;return r.enableLowInitialPlaylist&&(e=r.selectInitialPlaylist()),e||(e=r.selectPlaylist()),r.initialMedia_=e,void r.masterPlaylistLoader_.media(r.initialMedia_)}if(r.useCueTags_&&r.updateAdCues_(t),r.mainSegmentLoader_.playlist(t,r.requestOptions_),r.updateDuration(),r.tech_.paused()||r.mainSegmentLoader_.load(),!t.endList){var i=function(){var t=r.seekable();0!==t.length&&r.mediaSource.addSeekableRange_(t.start(0),t.end(0))};if(r.duration()!==1/0){r.tech_.one("durationchange",function t(){r.duration()===1/0?i():r.tech_.one("durationchange",t)})}else i()}}),this.masterPlaylistLoader_.on("error",function(){r.blacklistCurrentPlaylist(r.masterPlaylistLoader_.error)}),this.masterPlaylistLoader_.on("mediachanging",function(){r.mainSegmentLoader_.abort(),r.mainSegmentLoader_.pause()}),this.masterPlaylistLoader_.on("mediachange",function(){var t=r.masterPlaylistLoader_.media(),e=1.5*r.masterPlaylistLoader_.targetDuration*1e3;ru(r.masterPlaylistLoader_.master,r.masterPlaylistLoader_.media())?r.requestOptions_.timeout=0:r.requestOptions_.timeout=e,r.mainSegmentLoader_.playlist(t,r.requestOptions_),r.mainSegmentLoader_.load(),r.tech_.trigger({type:"mediachange",bubbles:!0})}),this.masterPlaylistLoader_.on("playlistunchanged",function(){var t=r.masterPlaylistLoader_.media();r.stuckAtPlaylistEnd_(t)&&(r.blacklistCurrentPlaylist({message:"Playlist no longer updating."}),r.tech_.trigger("playliststuck"))}),this.masterPlaylistLoader_.on("renditiondisabled",function(){r.tech_.trigger({type:"usage",name:"hls-rendition-disabled"})}),this.masterPlaylistLoader_.on("renditionenabled",function(){r.tech_.trigger({type:"usage",name:"hls-rendition-enabled"})})},p.prototype.triggerPresenceUsage_=function(t,e){var i=t.mediaGroups||{},r=!0,n=Object.keys(i.AUDIO);for(var s in i.AUDIO)for(var a in i.AUDIO[s]){i.AUDIO[s][a].uri||(r=!1)}r&&this.tech_.trigger({type:"usage",name:"hls-demuxed"}),Object.keys(i.SUBTITLES).length&&this.tech_.trigger({type:"usage",name:"hls-webvtt"}),Ml.Playlist.isAes(e)&&this.tech_.trigger({type:"usage",name:"hls-aes"}),Ml.Playlist.isFmp4(e)&&this.tech_.trigger({type:"usage",name:"hls-fmp4"}),n.length&&1<Object.keys(i.AUDIO[n[0]]).length&&this.tech_.trigger({type:"usage",name:"hls-alternate-audio"}),this.useCueTags_&&this.tech_.trigger({type:"usage",name:"hls-playlist-cue-tags"})},p.prototype.setupSegmentLoaderListeners_=function(){var s=this;this.mainSegmentLoader_.on("bandwidthupdate",function(){var t=s.selectPlaylist(),e=s.masterPlaylistLoader_.media(),i=s.tech_.buffered(),r=i.length?i.end(i.length-1)-s.tech_.currentTime():0,n=s.bufferLowWaterLine();(!e.endList||s.duration()<Qu.MAX_BUFFER_LOW_WATER_LINE||t.attributes.BANDWIDTH<e.attributes.BANDWIDTH||n<=r)&&s.masterPlaylistLoader_.media(t),s.tech_.trigger("bandwidthupdate")}),this.mainSegmentLoader_.on("progress",function(){s.trigger("progress")}),this.mainSegmentLoader_.on("error",function(){s.blacklistCurrentPlaylist(s.mainSegmentLoader_.error())}),this.mainSegmentLoader_.on("syncinfoupdate",function(){s.onSyncInfoUpdate_()}),this.mainSegmentLoader_.on("timestampoffset",function(){s.tech_.trigger({type:"usage",name:"hls-timestamp-offset"})}),this.audioSegmentLoader_.on("syncinfoupdate",function(){s.onSyncInfoUpdate_()}),this.mainSegmentLoader_.on("ended",function(){s.onEndOfStream()}),this.mainSegmentLoader_.on("earlyabort",function(){s.blacklistCurrentPlaylist({message:"Aborted early because there isn't enough bandwidth to complete the request without rebuffering."},120)}),this.mainSegmentLoader_.on("reseteverything",function(){s.tech_.trigger("hls-reset")}),this.mainSegmentLoader_.on("segmenttimemapping",function(t){s.tech_.trigger({type:"hls-segment-time-mapping",mapping:t.mapping})}),this.audioSegmentLoader_.on("ended",function(){s.onEndOfStream()})},p.prototype.mediaSecondsLoaded_=function(){return Math.max(this.audioSegmentLoader_.mediaSecondsLoaded+this.mainSegmentLoader_.mediaSecondsLoaded)},p.prototype.load=function(){this.mainSegmentLoader_.load(),this.mediaTypes_.AUDIO.activePlaylistLoader&&this.audioSegmentLoader_.load(),this.mediaTypes_.SUBTITLES.activePlaylistLoader&&this.subtitleSegmentLoader_.load()},p.prototype.fastQualityChange_=function(){var t=this.selectPlaylist();t!==this.masterPlaylistLoader_.media()&&(this.masterPlaylistLoader_.media(t),this.mainSegmentLoader_.resetLoader())},p.prototype.play=function(){if(!this.setupFirstPlay()){this.tech_.ended()&&this.tech_.setCurrentTime(0),this.hasPlayed_()&&this.load();var t=this.tech_.seekable();return this.tech_.duration()===1/0&&this.tech_.currentTime()<t.start(0)?this.tech_.setCurrentTime(t.end(t.length-1)):void 0}},p.prototype.setupFirstPlay=function(){var t=this,e=this.masterPlaylistLoader_.media();if(!e||this.tech_.paused()||this.hasPlayed_())return!1;if(!e.endList){var i=this.seekable();if(!i.length)return!1;if(As.browser.IE_VERSION&&0===this.tech_.readyState())return this.tech_.one("loadedmetadata",function(){t.trigger("firstplay"),t.tech_.setCurrentTime(i.end(0)),t.hasPlayed_=function(){return!0}}),!1;this.trigger("firstplay"),this.tech_.setCurrentTime(i.end(0))}return this.hasPlayed_=function(){return!0},this.load(),!0},p.prototype.handleSourceOpen_=function(){try{this.setupSourceBuffers_()}catch(t){return As.log.warn("Failed to create Source Buffers",t),this.mediaSource.endOfStream("decode")}if(this.tech_.autoplay()){var t=this.tech_.play();"undefined"!=typeof t&&"function"==typeof t.then&&t.then(null,function(t){})}this.trigger("sourceopen")},p.prototype.onEndOfStream=function(){var t=this.mainSegmentLoader_.ended_;this.mediaTypes_.AUDIO.activePlaylistLoader&&(t=!this.mainSegmentLoader_.startingMedia_||this.mainSegmentLoader_.startingMedia_.containsVideo?t&&this.audioSegmentLoader_.ended_:this.audioSegmentLoader_.ended_),t&&this.mediaSource.endOfStream()},p.prototype.stuckAtPlaylistEnd_=function(t){if(!this.seekable().length)return!1;var e=this.syncController_.getExpiredTime(t,this.mediaSource.duration);if(null===e)return!1;var i=Ml.Playlist.playlistEnd(t,e),r=this.tech_.currentTime(),n=this.tech_.buffered();if(!n.length)return i-r<=.1;var s=n.end(n.length-1);return s-r<=.1&&i-s<=.1},p.prototype.blacklistCurrentPlaylist=function(){var t,e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},i=arguments[1],r=void 0;if(r=e.playlist||this.masterPlaylistLoader_.media(),i=i||e.blacklistDuration||this.blacklistDuration,!r){this.error=e;try{return this.mediaSource.endOfStream("network")}catch(t){return this.trigger("error")}}var n=1===this.masterPlaylistLoader_.master.playlists.filter(eu).length;return n?(As.log.warn("Problem encountered with the current HLS playlist. Trying again since it is the final playlist."),this.tech_.trigger("retryplaylist"),this.masterPlaylistLoader_.load(n)):(r.excludeUntil=Date.now()+1e3*i,this.tech_.trigger("blacklistplaylist"),this.tech_.trigger({type:"usage",name:"hls-rendition-blacklisted"}),t=this.selectPlaylist(),As.log.warn("Problem encountered with the current HLS playlist."+(e.message?" "+e.message:"")+" Switching to another playlist."),this.masterPlaylistLoader_.media(t))},p.prototype.pauseLoading=function(){this.mainSegmentLoader_.pause(),this.mediaTypes_.AUDIO.activePlaylistLoader&&this.audioSegmentLoader_.pause(),this.mediaTypes_.SUBTITLES.activePlaylistLoader&&this.subtitleSegmentLoader_.pause()},p.prototype.setCurrentTime=function(t){var e=gu(this.tech_.buffered(),t);return this.masterPlaylistLoader_&&this.masterPlaylistLoader_.media()&&this.masterPlaylistLoader_.media().segments?e&&e.length?t:(this.mainSegmentLoader_.resetEverything(),this.mainSegmentLoader_.abort(),this.mediaTypes_.AUDIO.activePlaylistLoader&&(this.audioSegmentLoader_.resetEverything(),this.audioSegmentLoader_.abort()),this.mediaTypes_.SUBTITLES.activePlaylistLoader&&(this.subtitleSegmentLoader_.resetEverything(),this.subtitleSegmentLoader_.abort()),void this.load()):0},p.prototype.duration=function(){return this.masterPlaylistLoader_?this.mediaSource?this.mediaSource.duration:Ml.Playlist.duration(this.masterPlaylistLoader_.media()):0},p.prototype.seekable=function(){return this.seekable_},p.prototype.onSyncInfoUpdate_=function(){var t=void 0,e=void 0;if(this.masterPlaylistLoader_){var i=this.masterPlaylistLoader_.media();if(i){var r=this.syncController_.getExpiredTime(i,this.mediaSource.duration);if(null!==r&&0!==(t=Ml.Playlist.seekable(i,r)).length){if(this.mediaTypes_.AUDIO.activePlaylistLoader){if(i=this.mediaTypes_.AUDIO.activePlaylistLoader.media(),null===(r=this.syncController_.getExpiredTime(i,this.mediaSource.duration)))return;if(0===(e=Ml.Playlist.seekable(i,r)).length)return}e?e.start(0)>t.end(0)||t.start(0)>e.end(0)?this.seekable_=t:this.seekable_=As.createTimeRanges([[e.start(0)>t.start(0)?e.start(0):t.start(0),e.end(0)<t.end(0)?e.end(0):t.end(0)]]):this.seekable_=t,this.logger_("seekable updated ["+vu(this.seekable_)+"]"),this.tech_.trigger("seekablechanged")}}}},p.prototype.updateDuration=function(){var e=this,t=this.mediaSource.duration,i=Ml.Playlist.duration(this.masterPlaylistLoader_.media()),r=this.tech_.buffered(),n=function t(){e.mediaSource.duration=i,e.tech_.trigger("durationchange"),e.mediaSource.removeEventListener("sourceopen",t)};0<r.length&&(i=Math.max(i,r.end(r.length-1))),t!==i&&("open"!==this.mediaSource.readyState?this.mediaSource.addEventListener("sourceopen",n):n())},p.prototype.dispose=function(){var r=this;this.decrypter_.terminate(),this.masterPlaylistLoader_.dispose(),this.mainSegmentLoader_.dispose(),["AUDIO","SUBTITLES"].forEach(function(t){var e=r.mediaTypes_[t].groups;for(var i in e)e[i].forEach(function(t){t.playlistLoader&&t.playlistLoader.dispose()})}),this.audioSegmentLoader_.dispose(),this.subtitleSegmentLoader_.dispose()},p.prototype.master=function(){return this.masterPlaylistLoader_.master},p.prototype.media=function(){return this.masterPlaylistLoader_.media()||this.initialMedia_},p.prototype.setupSourceBuffers_=function(){var t,e=this.masterPlaylistLoader_.media();if(e&&"open"===this.mediaSource.readyState){if((t=cl(this.masterPlaylistLoader_.master,e)).length<1)return this.error="No compatible SourceBuffer configuration for the variant stream:"+e.resolvedUri,this.mediaSource.endOfStream("decode");this.configureLoaderMimeTypes_(t),this.excludeIncompatibleVariants_(e)}},p.prototype.configureLoaderMimeTypes_=function(t){var e=1<t.length&&-1===t[0].indexOf(",")&&t[0]!==t[1]?new As.EventTarget:null;this.mainSegmentLoader_.mimeType(t[0],e),t[1]&&this.audioSegmentLoader_.mimeType(t[1],e)},p.prototype.excludeUnsupportedVariants_=function(){this.master().playlists.forEach(function(t){t.attributes.CODECS&&g.MediaSource&&g.MediaSource.isTypeSupported&&!g.MediaSource.isTypeSupported('video/mp4; codecs="'+t.attributes.CODECS.replace(/avc1\.(\d+)\.(\d+)/i,function(t){return Nu([t])[0]})+'"')&&(t.excludeUntil=1/0)})},p.prototype.excludeIncompatibleVariants_=function(t){var i=2,r=null,e=void 0;t.attributes.CODECS&&(e=ul(t.attributes.CODECS),r=e.videoCodec,i=e.codecCount),this.master().playlists.forEach(function(t){var e={codecCount:2,videoCodec:null};t.attributes.CODECS&&(e=ul(t.attributes.CODECS)),e.codecCount!==i&&(t.excludeUntil=1/0),e.videoCodec!==r&&(t.excludeUntil=1/0)})},p.prototype.updateAdCues_=function(t){var e=0,i=this.seekable();i.length&&(e=i.start(0)),function(t,e){var i=2<arguments.length&&void 0!==arguments[2]?arguments[2]:0;if(t.segments)for(var r=i,n=void 0,s=0;s<t.segments.length;s++){var a=t.segments[s];if(n||(n=bl(e,r+a.duration/2)),n){if("cueIn"in a){n.endTime=r,n.adEndTime=r,r+=a.duration,n=null;continue}if(r<n.endTime){r+=a.duration;continue}n.endTime+=a.duration}else if("cueOut"in a&&((n=new g.VTTCue(r,r+a.duration,a.cueOut)).adStartTime=r,n.adEndTime=r+parseFloat(a.cueOut),e.addCue(n)),"cueOutCont"in a){var o,u,l=a.cueOutCont.split("/").map(parseFloat);o=l[0],u=l[1],(n=new g.VTTCue(r,r+a.duration,"")).adStartTime=r-o,n.adEndTime=n.adStartTime+u,e.addCue(n)}r+=a.duration}}(t,this.cueTagsTrack_,e)},p.prototype.goalBufferLength=function(){var t=this.tech_.currentTime(),e=Qu.GOAL_BUFFER_LENGTH,i=Qu.GOAL_BUFFER_LENGTH_RATE,r=Math.max(e,Qu.MAX_GOAL_BUFFER_LENGTH);return Math.min(e+t*i,r)},p.prototype.bufferLowWaterLine=function(){var t=this.tech_.currentTime(),e=Qu.BUFFER_LOW_WATER_LINE,i=Qu.BUFFER_LOW_WATER_LINE_RATE,r=Math.max(e,Qu.MAX_BUFFER_LOW_WATER_LINE);return Math.min(e+t*i,r)},p}(As.EventTarget),jl=function t(e,i,r){y(this,t);var n,s,a,o=e.masterPlaylistController_.fastQualityChange_.bind(e.masterPlaylistController_);if(i.attributes.RESOLUTION){var u=i.attributes.RESOLUTION;this.width=u.width,this.height=u.height}this.bandwidth=i.attributes.BANDWIDTH,this.id=r,this.enabled=(n=e.playlists,s=i.uri,a=o,function(t){var e=n.master.playlists[s],i=tu(e),r=eu(e);return"undefined"==typeof t?r:(t?delete e.disabled:e.disabled=!0,t===r||i||(a(),t?n.trigger("renditionenabled"):n.trigger("renditiondisabled")),t)})},Fl=["seeking","seeked","pause","playing","error"],Hl=function(){function a(t){var e=this;y(this,a),this.tech_=t.tech,this.seekable=t.seekable,this.consecutiveUpdates=0,this.lastRecordedTime=null,this.timer_=null,this.checkCurrentTimeTimeout_=null,this.logger_=Yu("PlaybackWatcher"),this.logger_("initialize");var i=function(){return e.monitorCurrentTime_()},r=function(){return e.techWaiting_()},n=function(){return e.cancelTimer_()},s=function(){return e.fixesBadSeeks_()};this.tech_.on("seekablechanged",s),this.tech_.on("waiting",r),this.tech_.on(Fl,n),this.tech_.on("canplay",i),this.dispose=function(){e.logger_("dispose"),e.tech_.off("seekablechanged",s),e.tech_.off("waiting",r),e.tech_.off(Fl,n),e.tech_.off("canplay",i),e.checkCurrentTimeTimeout_&&g.clearTimeout(e.checkCurrentTimeTimeout_),e.cancelTimer_()}}return a.prototype.monitorCurrentTime_=function(){this.checkCurrentTime_(),this.checkCurrentTimeTimeout_&&g.clearTimeout(this.checkCurrentTimeTimeout_),this.checkCurrentTimeTimeout_=g.setTimeout(this.monitorCurrentTime_.bind(this),250)},a.prototype.checkCurrentTime_=function(){if(this.tech_.seeking()&&this.fixesBadSeeks_())return this.consecutiveUpdates=0,void(this.lastRecordedTime=this.tech_.currentTime());if(!this.tech_.paused()&&!this.tech_.seeking()){var t=this.tech_.currentTime(),e=this.tech_.buffered();if(this.lastRecordedTime===t&&(!e.length||t+.1>=e.end(e.length-1)))return this.techWaiting_();5<=this.consecutiveUpdates&&t===this.lastRecordedTime?(this.consecutiveUpdates++,this.waiting_()):t===this.lastRecordedTime?this.consecutiveUpdates++:(this.consecutiveUpdates=0,this.lastRecordedTime=t)}},a.prototype.cancelTimer_=function(){this.consecutiveUpdates=0,this.timer_&&(this.logger_("cancelTimer_"),clearTimeout(this.timer_)),this.timer_=null},a.prototype.fixesBadSeeks_=function(){var t=this.tech_.seeking(),e=this.seekable(),i=this.tech_.currentTime(),r=void 0;t&&this.afterSeekableWindow_(e,i)&&(r=e.end(e.length-1));t&&this.beforeSeekableWindow_(e,i)&&(r=e.start(0)+.1);return"undefined"!=typeof r&&(this.logger_("Trying to seek outside of seekable at time "+i+" with seekable range "+vu(e)+". Seeking to "+r+"."),this.tech_.setCurrentTime(r),!0)},a.prototype.waiting_=function(){if(!this.techWaiting_()){var t=this.tech_.currentTime(),e=this.tech_.buffered(),i=gu(e,t);return i.length&&t+3<=i.end(0)?(this.cancelTimer_(),this.tech_.setCurrentTime(t),this.logger_("Stopped at "+t+" while inside a buffered region ["+i.start(0)+" -> "+i.end(0)+"]. Attempting to resume playback by seeking to the current time."),void this.tech_.trigger({type:"usage",name:"hls-unknown-waiting"})):void 0}},a.prototype.techWaiting_=function(){var t=this.seekable(),e=this.tech_.currentTime();if(this.tech_.seeking()&&this.fixesBadSeeks_())return!0;if(this.tech_.seeking()||null!==this.timer_)return!0;if(this.beforeSeekableWindow_(t,e)){var i=t.end(t.length-1);return this.logger_("Fell out of live window at time "+e+". Seeking to live point (seekable end) "+i),this.cancelTimer_(),this.tech_.setCurrentTime(i),this.tech_.trigger({type:"usage",name:"hls-live-resync"}),!0}var r=this.tech_.buffered(),n=yu(r,e);if(this.videoUnderflow_(n,r,e))return this.cancelTimer_(),this.tech_.setCurrentTime(e),this.tech_.trigger({type:"usage",name:"hls-video-underflow"}),!0;if(0<n.length){var s=n.start(0)-e;return this.logger_("Stopped at "+e+", setting timer for "+s+", seeking to "+n.start(0)),this.timer_=setTimeout(this.skipTheGap_.bind(this),1e3*s,e),!0}return!1},a.prototype.afterSeekableWindow_=function(t,e){return!!t.length&&e>t.end(t.length-1)+.1},a.prototype.beforeSeekableWindow_=function(t,e){return!!(t.length&&0<t.start(0)&&e<t.start(0)-.1)},a.prototype.videoUnderflow_=function(t,e,i){if(0===t.length){var r=this.gapFromVideoUnderflow_(e,i);if(r)return this.logger_("Encountered a gap in video from "+r.start+" to "+r.end+". Seeking to current time "+i),!0}return!1},a.prototype.skipTheGap_=function(t){var e=this.tech_.buffered(),i=this.tech_.currentTime(),r=yu(e,i);this.cancelTimer_(),0!==r.length&&i===t&&(this.logger_("skipTheGap_:","currentTime:",i,"scheduled currentTime:",t,"nextRange start:",r.start(0)),this.tech_.setCurrentTime(r.start(0)+fu),this.tech_.trigger({type:"usage",name:"hls-gap-skip"}))},a.prototype.gapFromVideoUnderflow_=function(t,e){for(var i=function(t){if(t.length<2)return As.createTimeRanges();for(var e=[],i=1;i<t.length;i++){var r=t.end(i-1),n=t.start(i);e.push([r,n])}return As.createTimeRanges(e)}(t),r=0;r<i.length;r++){var n=i.start(r),s=i.end(r);if(e-n<4&&2<e-n)return{start:n,end:s}}return null},a}(),Vl={errorInterval:30,getSource:function(t){return t(this.tech({IWillNotUseThisInPlugins:!0}).currentSource_)}},ql=function(t){!function e(i,t){var r=0,n=0,s=As.mergeOptions(Vl,t);i.ready(function(){i.trigger({type:"usage",name:"hls-error-reload-initialized"})});var a=function(){n&&i.currentTime(n)},o=function(t){null!=t&&(n=i.duration()!==1/0&&i.currentTime()||0,i.one("loadedmetadata",a),i.src(t),i.trigger({type:"usage",name:"hls-error-reload"}),i.play())},u=function(){if(Date.now()-r<1e3*s.errorInterval)i.trigger({type:"usage",name:"hls-error-reload-canceled"});else{if(s.getSource&&"function"==typeof s.getSource)return r=Date.now(),s.getSource.call(i,o);As.log.error("ERROR: reloadSourceOnError - The option getSource must be a function!")}},l=function t(){i.off("loadedmetadata",a),i.off("error",u),i.off("dispose",t)};i.on("error",u),i.on("dispose",l),i.reloadSourceOnError=function(t){l(),e(i,t)}}(this,t)},Wl={PlaylistLoader:Vo,Playlist:nu,Decrypter:Do,AsyncStream:Oo,decrypt:Io,utils:pu,STANDARD_PLAYLIST_SELECTOR:function(){return function(t,e,i,r){var n=t.playlists.map(function(t){var e,i;return e=t.attributes.RESOLUTION&&t.attributes.RESOLUTION.width,i=t.attributes.RESOLUTION&&t.attributes.RESOLUTION.height,{bandwidth:t.attributes.BANDWIDTH||g.Number.MAX_VALUE,width:e,height:i,playlist:t}});dl(n,function(t,e){return t.bandwidth-e.bandwidth});var s=(n=n.filter(function(t){return!nu.isIncompatible(t.playlist)})).filter(function(t){return nu.isEnabled(t.playlist)});s.length||(s=n.filter(function(t){return!nu.isDisabled(t.playlist)}));var a=s.filter(function(t){return t.bandwidth*Qu.BANDWIDTH_VARIANCE<e}),o=a[a.length-1],u=a.filter(function(t){return t.bandwidth===o.bandwidth})[0],l=a.filter(function(t){return t.width&&t.height});dl(l,function(t,e){return t.width-e.width});var c=l.filter(function(t){return t.width===i&&t.height===r});o=c[c.length-1];var h=c.filter(function(t){return t.bandwidth===o.bandwidth})[0],d=void 0,p=void 0,f=void 0;h||(p=(d=l.filter(function(t){return t.width>i||t.height>r})).filter(function(t){return t.width===d[0].width&&t.height===d[0].height}),o=p[p.length-1],f=p.filter(function(t){return t.bandwidth===o.bandwidth})[0]);var m=f||h||u||s[0]||n[0];return m?m.playlist:null}(this.playlists.master,this.systemBandwidth,parseInt(hl(this.tech_.el(),"width"),10),parseInt(hl(this.tech_.el(),"height"),10))},INITIAL_PLAYLIST_SELECTOR:function(){var t=this.playlists.master.playlists.filter(nu.isEnabled);return dl(t,function(t,e){return pl(t,e)}),t.filter(function(t){return ul(t.attributes.CODECS).videoCodec})[0]||null},comparePlaylistBandwidth:pl,comparePlaylistResolution:function(t,e){var i=void 0,r=void 0;return t.attributes.RESOLUTION&&t.attributes.RESOLUTION.width&&(i=t.attributes.RESOLUTION.width),i=i||g.Number.MAX_VALUE,e.attributes.RESOLUTION&&e.attributes.RESOLUTION.width&&(r=e.attributes.RESOLUTION.width),i===(r=r||g.Number.MAX_VALUE)&&t.attributes.BANDWIDTH&&e.attributes.BANDWIDTH?t.attributes.BANDWIDTH-e.attributes.BANDWIDTH:i-r},xhr:ou()};["GOAL_BUFFER_LENGTH","MAX_GOAL_BUFFER_LENGTH","GOAL_BUFFER_LENGTH_RATE","BUFFER_LOW_WATER_LINE","MAX_BUFFER_LOW_WATER_LINE","BUFFER_LOW_WATER_LINE_RATE","BANDWIDTH_VARIANCE"].forEach(function(e){Object.defineProperty(Wl,e,{get:function(){return As.log.warn("using Hls."+e+" is UNSAFE be sure you know what you are doing"),Qu[e]},set:function(t){As.log.warn("using Hls."+e+" is UNSAFE be sure you know what you are doing"),"number"!=typeof t||t<0?As.log.warn("value of Hls."+e+" must be greater than or equal to 0"):Qu[e]=t}})});var zl=function(t){if(/^(audio|video|application)\/(x-|vnd\.apple\.)?mpegurl/i.test(t))return"hls";return/^application\/dash\+xml/i.test(t)?"dash":null},Gl=function(t,e){for(var i=e.media(),r=-1,n=0;n<t.length;n++)if(t[n].id===i.uri){r=n;break}t.selectedIndex_=r,t.trigger({selectedIndex:r,type:"change"})};Wl.canPlaySource=function(){return As.log.warn("HLS is no longer a tech. Please remove it from your player's techOrder.")};var Xl=function(t){if("dash"===t.options_.sourceType){var e=As.players[t.tech_.options_.playerId];if(e.eme){var i=function(t,e,i){if(!t)return t;var r={};for(var n in t)r[n]={audioContentType:'audio/mp4; codecs="'+i.attributes.CODECS+'"',videoContentType:'video/mp4; codecs="'+e.attributes.CODECS+'"'},e.contentProtection&&e.contentProtection[n]&&e.contentProtection[n].pssh&&(r[n].pssh=e.contentProtection[n].pssh),"string"==typeof t[n]&&(r[n].url=t[n]);return As.mergeOptions(t,r)}(t.source_.keySystems,t.playlists.media(),t.masterPlaylistController_.mediaTypes_.AUDIO.activePlaylistLoader.media());i&&(e.currentSource().keySystems=i)}}};Wl.supportsNativeHls=function(){var e=p.createElement("video");if(!As.getTech("Html5").isSupported())return!1;return["application/vnd.apple.mpegurl","audio/mpegurl","audio/x-mpegurl","application/x-mpegurl","video/x-mpegurl","video/mpegurl","application/mpegurl"].some(function(t){return/maybe|probably/i.test(e.canPlayType(t))})}(),Wl.supportsNativeDash=!!As.getTech("Html5").isSupported()&&/maybe|probably/i.test(p.createElement("video").canPlayType("application/dash+xml")),Wl.supportsTypeNatively=function(t){return"hls"===t?Wl.supportsNativeHls:"dash"===t&&Wl.supportsNativeDash},Wl.isSupported=function(){return As.log.warn("HLS is no longer a tech. Please remove it from your player's techOrder.")};var Yl=function(s){function a(t,e,i){y(this,a);var r=b(this,s.call(this,e,i.hls));if(e.options_&&e.options_.playerId){var n=As(e.options_.playerId);n.hasOwnProperty("hls")||Object.defineProperty(n,"hls",{get:function(){return As.log.warn("player.hls is deprecated. Use player.tech_.hls instead."),e.trigger({type:"usage",name:"hls-player-access"}),r}}),n.vhs=r,n.dash=r}if(r.tech_=e,r.source_=t,r.stats={},r.ignoreNextSeekingEvent_=!1,r.setOptions_(),r.options_.overrideNative&&(e.featuresNativeVideoTracks||e.featuresNativeAudioTracks))throw new Error("Overriding native HLS requires emulated tracks. See https://git.io/vMpjB");return r.on(p,["fullscreenchange","webkitfullscreenchange","mozfullscreenchange","MSFullscreenChange"],function(t){var e=p.fullscreenElement||p.webkitFullscreenElement||p.mozFullScreenElement||p.msFullscreenElement;e&&e.contains(r.tech_.el())&&r.masterPlaylistController_.fastQualityChange_()}),r.on(r.tech_,"seeking",function(){this.ignoreNextSeekingEvent_?this.ignoreNextSeekingEvent_=!1:this.setCurrentTime(this.tech_.currentTime())}),r.on(r.tech_,"error",function(){this.masterPlaylistController_&&this.masterPlaylistController_.pauseLoading()}),r.on(r.tech_,"play",r.play),r}return _(a,s),a.prototype.setOptions_=function(){var e=this;this.options_.withCredentials=this.options_.withCredentials||!1,"number"!=typeof this.options_.blacklistDuration&&(this.options_.blacklistDuration=300),"number"!=typeof this.options_.bandwidth&&(this.options_.bandwidth=4194304),this.options_.enableLowInitialPlaylist=this.options_.enableLowInitialPlaylist&&4194304===this.options_.bandwidth,["withCredentials","bandwidth"].forEach(function(t){"undefined"!=typeof e.source_[t]&&(e.options_[t]=e.source_[t])}),this.bandwidth=this.options_.bandwidth},a.prototype.src=function(t,e){var r=this;t&&(this.setOptions_(),this.options_.url=this.source_.src,this.options_.tech=this.tech_,this.options_.externHls=Wl,this.options_.sourceType=zl(e),this.masterPlaylistController_=new Bl(this.options_),this.playbackWatcher_=new Hl(As.mergeOptions(this.options_,{seekable:function(){return r.seekable()}})),this.masterPlaylistController_.on("error",function(){As.players[r.tech_.options_.playerId].error(r.masterPlaylistController_.error)}),this.masterPlaylistController_.selectPlaylist=this.selectPlaylist?this.selectPlaylist.bind(this):Wl.STANDARD_PLAYLIST_SELECTOR.bind(this),this.masterPlaylistController_.selectInitialPlaylist=Wl.INITIAL_PLAYLIST_SELECTOR.bind(this),this.playlists=this.masterPlaylistController_.masterPlaylistLoader_,this.mediaSource=this.masterPlaylistController_.mediaSource,Object.defineProperties(this,{selectPlaylist:{get:function(){return this.masterPlaylistController_.selectPlaylist},set:function(t){this.masterPlaylistController_.selectPlaylist=t.bind(this)}},throughput:{get:function(){return this.masterPlaylistController_.mainSegmentLoader_.throughput.rate},set:function(t){this.masterPlaylistController_.mainSegmentLoader_.throughput.rate=t,this.masterPlaylistController_.mainSegmentLoader_.throughput.count=1}},bandwidth:{get:function(){return this.masterPlaylistController_.mainSegmentLoader_.bandwidth},set:function(t){this.masterPlaylistController_.mainSegmentLoader_.bandwidth=t,this.masterPlaylistController_.mainSegmentLoader_.throughput={rate:0,count:0}}},systemBandwidth:{get:function(){var t=1/(this.bandwidth||1),e=void 0;return e=0<this.throughput?1/this.throughput:0,Math.floor(1/(t+e))},set:function(){As.log.error('The "systemBandwidth" property is read-only')}}}),Object.defineProperties(this.stats,{bandwidth:{get:function(){return r.bandwidth||0},enumerable:!0},mediaRequests:{get:function(){return r.masterPlaylistController_.mediaRequests_()||0},enumerable:!0},mediaRequestsAborted:{get:function(){return r.masterPlaylistController_.mediaRequestsAborted_()||0},enumerable:!0},mediaRequestsTimedout:{get:function(){return r.masterPlaylistController_.mediaRequestsTimedout_()||0},enumerable:!0},mediaRequestsErrored:{get:function(){return r.masterPlaylistController_.mediaRequestsErrored_()||0},enumerable:!0},mediaTransferDuration:{get:function(){return r.masterPlaylistController_.mediaTransferDuration_()||0},enumerable:!0},mediaBytesTransferred:{get:function(){return r.masterPlaylistController_.mediaBytesTransferred_()||0},enumerable:!0},mediaSecondsLoaded:{get:function(){return r.masterPlaylistController_.mediaSecondsLoaded_()||0},enumerable:!0},buffered:{get:function(){return _u(r.tech_.buffered())},enumerable:!0},currentTime:{get:function(){return r.tech_.currentTime()},enumerable:!0},currentSource:{get:function(){return r.tech_.currentSource_},enumerable:!0},currentTech:{get:function(){return r.tech_.name_},enumerable:!0},duration:{get:function(){return r.tech_.duration()},enumerable:!0},master:{get:function(){return r.playlists.master},enumerable:!0},playerDimensions:{get:function(){return r.tech_.currentDimensions()},enumerable:!0},seekable:{get:function(){return _u(r.tech_.seekable())},enumerable:!0},timestamp:{get:function(){return Date.now()},enumerable:!0},videoPlaybackQuality:{get:function(){return r.tech_.getVideoPlaybackQuality()},enumerable:!0}}),this.tech_.one("canplay",this.masterPlaylistController_.setupFirstPlay.bind(this.masterPlaylistController_)),this.masterPlaylistController_.on("selectedinitialmedia",function(){var i,t;t=(i=r).playlists,i.representations=function(){return t.master.playlists.filter(function(t){return!tu(t)}).map(function(t,e){return new jl(i,t,t.uri)})},Xl(r)}),this.on(this.masterPlaylistController_,"progress",function(){this.tech_.trigger("progress")}),this.on(this.masterPlaylistController_,"firstplay",function(){this.ignoreNextSeekingEvent_=!0}),this.tech_.ready(function(){return r.setupQualityLevels_()}),this.tech_.el()&&this.tech_.src(As.URL.createObjectURL(this.masterPlaylistController_.mediaSource)))},a.prototype.setupQualityLevels_=function(){var i=this,t=As.players[this.tech_.options_.playerId];t&&t.qualityLevels&&(this.qualityLevels_=t.qualityLevels(),this.masterPlaylistController_.on("selectedinitialmedia",function(){var e,t;e=i.qualityLevels_,(t=i).representations().forEach(function(t){e.addQualityLevel(t)}),Gl(e,t.playlists)}),this.playlists.on("mediachange",function(){Gl(i.qualityLevels_,i.playlists)}))},a.prototype.play=function(){this.masterPlaylistController_.play()},a.prototype.setCurrentTime=function(t){this.masterPlaylistController_.setCurrentTime(t)},a.prototype.duration=function(){return this.masterPlaylistController_.duration()},a.prototype.seekable=function(){return this.masterPlaylistController_.seekable()},a.prototype.dispose=function(){this.playbackWatcher_&&this.playbackWatcher_.dispose(),this.masterPlaylistController_&&this.masterPlaylistController_.dispose(),this.qualityLevels_&&this.qualityLevels_.dispose(),s.prototype.dispose.call(this)},a}(As.getComponent("Component")),$l={name:"videojs-http-streaming",VERSION:"1.0.0",canHandleSource:function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},i=As.mergeOptions(As.options,e);return $l.canPlayType(t.type,i)},handleSource:function(t,e){var i=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},r=As.mergeOptions(As.options,i);return e.hls=new Yl(t,e,r),e.hls.xhr=ou(),e.hls.src(t.src,t.type),e.hls},canPlayType:function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},i=As.mergeOptions(As.options,e).hls.overrideNative,r=zl(t);return r&&(!Wl.supportsTypeNatively(r)||i)?"maybe":""}};return"undefined"!=typeof As.MediaSource&&"undefined"!=typeof As.URL||(As.MediaSource=qu,As.URL=Wu),qu.supportsNativeMediaSources()&&As.getTech("Html5").registerSourceHandler($l,0),As.HlsHandler=Yl,As.HlsSourceHandler=$l,As.Hls=Wl,As.use||As.registerComponent("Hls",Wl),As.options.hls=As.options.hls||{},As.registerPlugin?As.registerPlugin("reloadSourceOnError",ql):As.plugin("reloadSourceOnError",ql),As});
;
//# sourceMappingURL=scripts.js.map