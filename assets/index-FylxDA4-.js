const __vite__fileDeps=["./manager-DkXiNyLo.js","./meta-CBIvezNa.js","./combo-BfnybSlt.js","./texter-xvqufEH4.js","./texter-7w8SmD0u.css","./combo-RInSccvc.css","./manager-1Ww6eH57.css","./analysis-DouqDFt6.js","./gacha-item-CRRaeyRB.js","./gacha-item-T2YggpZZ.css","./pool-title-ChMdoZw8.js","./pool-title-_J7fdrHl.css","./analysis-BUZGntM4.css","./manager-CuQDfBiO.js","./manager-DE3ZUCJq.css","./grid-D80Jlh9g.js","./grid-DP1_Vlaq.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();window.NENV_I18N_LOCALE="zh";/**
* @vue/shared v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function bl(e,t){const n=new Set(e.split(","));return r=>n.has(r)}const ke={},Or=[],gt=()=>{},gh=()=>!1,co=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),yl=e=>e.startsWith("onUpdate:"),qe=Object.assign,wl=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},bh=Object.prototype.hasOwnProperty,ve=(e,t)=>bh.call(e,t),ne=Array.isArray,Sr=e=>Ur(e)==="[object Map]",Hr=e=>Ur(e)==="[object Set]",Nc=e=>Ur(e)==="[object Date]",yh=e=>Ur(e)==="[object RegExp]",ce=e=>typeof e=="function",De=e=>typeof e=="string",Qt=e=>typeof e=="symbol",Oe=e=>e!==null&&typeof e=="object",id=e=>(Oe(e)||ce(e))&&ce(e.then)&&ce(e.catch),od=Object.prototype.toString,Ur=e=>od.call(e),wh=e=>Ur(e).slice(8,-1),sd=e=>Ur(e)==="[object Object]",_l=e=>De(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,ra=bl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),uo=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},_h=/-(\w)/g,Wt=uo(e=>e.replace(_h,(t,n)=>n?n.toUpperCase():"")),xh=/\B([A-Z])/g,hr=uo(e=>e.replace(xh,"-$1").toLowerCase()),fo=uo(e=>e.charAt(0).toUpperCase()+e.slice(1)),kr=uo(e=>e?`on${fo(e)}`:""),Sn=(e,t)=>!Object.is(e,t),Tr=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},ld=(e,t,n,r=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:r,value:n})},Hi=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Mc;const cd=()=>Mc||(Mc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ht(e){if(ne(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=De(r)?Sh(r):Ht(r);if(a)for(const i in a)t[i]=a[i]}return t}else if(De(e)||Oe(e))return e}const Ah=/;(?![^(]*\))/g,Eh=/:([^]+)/,Oh=/\/\*[^]*?\*\//g;function Sh(e){const t={};return e.replace(Oh,"").split(Ah).forEach(n=>{if(n){const r=n.split(Eh);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Cr(e){let t="";if(De(e))t=e;else if(ne(e))for(let n=0;n<e.length;n++){const r=Cr(e[n]);r&&(t+=r+" ")}else if(Oe(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const kh="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Th=bl(kh);function ud(e){return!!e||e===""}function Ch(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=or(e[r],t[r]);return n}function or(e,t){if(e===t)return!0;let n=Nc(e),r=Nc(t);if(n||r)return n&&r?e.getTime()===t.getTime():!1;if(n=Qt(e),r=Qt(t),n||r)return e===t;if(n=ne(e),r=ne(t),n||r)return n&&r?Ch(e,t):!1;if(n=Oe(e),r=Oe(t),n||r){if(!n||!r)return!1;const a=Object.keys(e).length,i=Object.keys(t).length;if(a!==i)return!1;for(const o in e){const s=e.hasOwnProperty(o),l=t.hasOwnProperty(o);if(s&&!l||!s&&l||!or(e[o],t[o]))return!1}}return String(e)===String(t)}function xl(e,t){return e.findIndex(n=>or(n,t))}const bt=e=>De(e)?e:e==null?"":ne(e)||Oe(e)&&(e.toString===od||!ce(e.toString))?JSON.stringify(e,fd,2):String(e),fd=(e,t)=>t&&t.__v_isRef?fd(e,t.value):Sr(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a],i)=>(n[zo(r,i)+" =>"]=a,n),{})}:Hr(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>zo(n))}:Qt(t)?zo(t):Oe(t)&&!ne(t)&&!sd(t)?String(t):t,zo=(e,t="")=>{var n;return Qt(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ot;class $h{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ot,!t&&Ot&&(this.index=(Ot.scopes||(Ot.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=Ot;try{return Ot=this,t()}finally{Ot=n}}}on(){Ot=this}off(){Ot=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this._active=!1}}}function Ph(e,t=Ot){t&&t.active&&t.effects.push(e)}function Nh(){return Ot}let Qn;class Al{constructor(t,n,r,a){this.fn=t,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Ph(this,a)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,Ln();for(let t=0;t<this._depsLength;t++){const n=this.deps[t];if(n.computed&&(Mh(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),In()}return this._dirtyLevel>=4}set dirty(t){this._dirtyLevel=t?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let t=En,n=Qn;try{return En=!0,Qn=this,this._runnings++,Rc(this),this.fn()}finally{Lc(this),this._runnings--,Qn=n,En=t}}stop(){this.active&&(Rc(this),Lc(this),this.onStop&&this.onStop(),this.active=!1)}}function Mh(e){return e.value}function Rc(e){e._trackId++,e._depsLength=0}function Lc(e){if(e.deps.length>e._depsLength){for(let t=e._depsLength;t<e.deps.length;t++)dd(e.deps[t],e);e.deps.length=e._depsLength}}function dd(e,t){const n=e.get(t);n!==void 0&&t._trackId!==n&&(e.delete(t),e.size===0&&e.cleanup())}let En=!0,gs=0;const md=[];function Ln(){md.push(En),En=!1}function In(){const e=md.pop();En=e===void 0?!0:e}function El(){gs++}function Ol(){for(gs--;!gs&&bs.length;)bs.shift()()}function pd(e,t,n){if(t.get(e)!==e._trackId){t.set(e,e._trackId);const r=e.deps[e._depsLength];r!==t?(r&&dd(r,e),e.deps[e._depsLength++]=t):e._depsLength++}}const bs=[];function hd(e,t,n){El();for(const r of e.keys()){let a;r._dirtyLevel<t&&(a??(a=e.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r._dirtyLevel=t),r._shouldSchedule&&(a??(a=e.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==2&&(r._shouldSchedule=!1,r.scheduler&&bs.push(r.scheduler)))}Ol()}const vd=(e,t)=>{const n=new Map;return n.cleanup=e,n.computed=t,n},ys=new WeakMap,er=Symbol(""),ws=Symbol("");function st(e,t,n){if(En&&Qn){let r=ys.get(e);r||ys.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=vd(()=>r.delete(n))),pd(Qn,a)}}function Zt(e,t,n,r,a,i){const o=ys.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&ne(e)){const l=Number(r);o.forEach((u,c)=>{(c==="length"||!Qt(c)&&c>=l)&&s.push(u)})}else switch(n!==void 0&&s.push(o.get(n)),t){case"add":ne(e)?_l(n)&&s.push(o.get("length")):(s.push(o.get(er)),Sr(e)&&s.push(o.get(ws)));break;case"delete":ne(e)||(s.push(o.get(er)),Sr(e)&&s.push(o.get(ws)));break;case"set":Sr(e)&&s.push(o.get(er));break}El();for(const l of s)l&&hd(l,4);Ol()}const Rh=bl("__proto__,__v_isRef,__isVue"),gd=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Qt)),Ic=Lh();function Lh(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=ye(this);for(let i=0,o=this.length;i<o;i++)st(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(ye)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Ln(),El();const r=ye(this)[t].apply(this,n);return Ol(),In(),r}}),e}function Ih(e){Qt(e)||(e=String(e));const t=ye(this);return st(t,"has",e),t.hasOwnProperty(e)}class bd{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){const a=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!a;if(n==="__v_isReadonly")return a;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(a?i?Gh:xd:i?_d:wd).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const o=ne(t);if(!a){if(o&&ve(Ic,n))return Reflect.get(Ic,n,r);if(n==="hasOwnProperty")return Ih}const s=Reflect.get(t,n,r);return(Qt(n)?gd.has(n):Rh(n))||(a||st(t,"get",n),i)?s:lt(s)?o&&_l(n)?s:s.value:Oe(s)?a?Ad(s):po(s):s}}class yd extends bd{constructor(t=!1){super(!1,t)}set(t,n,r,a){let i=t[n];if(!this._isShallow){const l=ga(i);if(!Ui(r)&&!ga(r)&&(i=ye(i),r=ye(r)),!ne(t)&&lt(i)&&!lt(r))return l?!1:(i.value=r,!0)}const o=ne(t)&&_l(n)?Number(n)<t.length:ve(t,n),s=Reflect.set(t,n,r,a);return t===ye(a)&&(o?Sn(r,i)&&Zt(t,"set",n,r):Zt(t,"add",n,r)),s}deleteProperty(t,n){const r=ve(t,n);t[n];const a=Reflect.deleteProperty(t,n);return a&&r&&Zt(t,"delete",n,void 0),a}has(t,n){const r=Reflect.has(t,n);return(!Qt(n)||!gd.has(n))&&st(t,"has",n),r}ownKeys(t){return st(t,"iterate",ne(t)?"length":er),Reflect.ownKeys(t)}}class Dh extends bd{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Fh=new yd,jh=new Dh,zh=new yd(!0);const Sl=e=>e,mo=e=>Reflect.getPrototypeOf(e);function Za(e,t,n=!1,r=!1){e=e.__v_raw;const a=ye(e),i=ye(t);n||(Sn(t,i)&&st(a,"get",t),st(a,"get",i));const{has:o}=mo(a),s=r?Sl:n?Cl:ba;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function Qa(e,t=!1){const n=this.__v_raw,r=ye(n),a=ye(e);return t||(Sn(e,a)&&st(r,"has",e),st(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function ei(e,t=!1){return e=e.__v_raw,!t&&st(ye(e),"iterate",er),Reflect.get(e,"size",e)}function Dc(e){e=ye(e);const t=ye(this);return mo(t).has.call(t,e)||(t.add(e),Zt(t,"add",e,e)),this}function Fc(e,t){t=ye(t);const n=ye(this),{has:r,get:a}=mo(n);let i=r.call(n,e);i||(e=ye(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?Sn(t,o)&&Zt(n,"set",e,t):Zt(n,"add",e,t),this}function jc(e){const t=ye(this),{has:n,get:r}=mo(t);let a=n.call(t,e);a||(e=ye(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&Zt(t,"delete",e,void 0),i}function zc(){const e=ye(this),t=e.size!==0,n=e.clear();return t&&Zt(e,"clear",void 0,void 0),n}function ti(e,t){return function(r,a){const i=this,o=i.__v_raw,s=ye(o),l=t?Sl:e?Cl:ba;return!e&&st(s,"iterate",er),o.forEach((u,c)=>r.call(a,l(u),l(c),i))}}function ni(e,t,n){return function(...r){const a=this.__v_raw,i=ye(a),o=Sr(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,u=a[e](...r),c=n?Sl:t?Cl:ba;return!t&&st(i,"iterate",l?ws:er),{next(){const{value:f,done:p}=u.next();return p?{value:f,done:p}:{value:s?[c(f[0]),c(f[1])]:c(f),done:p}},[Symbol.iterator](){return this}}}}function mn(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Bh(){const e={get(i){return Za(this,i)},get size(){return ei(this)},has:Qa,add:Dc,set:Fc,delete:jc,clear:zc,forEach:ti(!1,!1)},t={get(i){return Za(this,i,!1,!0)},get size(){return ei(this)},has:Qa,add:Dc,set:Fc,delete:jc,clear:zc,forEach:ti(!1,!0)},n={get(i){return Za(this,i,!0)},get size(){return ei(this,!0)},has(i){return Qa.call(this,i,!0)},add:mn("add"),set:mn("set"),delete:mn("delete"),clear:mn("clear"),forEach:ti(!0,!1)},r={get(i){return Za(this,i,!0,!0)},get size(){return ei(this,!0)},has(i){return Qa.call(this,i,!0)},add:mn("add"),set:mn("set"),delete:mn("delete"),clear:mn("clear"),forEach:ti(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=ni(i,!1,!1),n[i]=ni(i,!0,!1),t[i]=ni(i,!1,!0),r[i]=ni(i,!0,!0)}),[e,n,t,r]}const[Hh,Uh,Yh,Wh]=Bh();function kl(e,t){const n=t?e?Wh:Yh:e?Uh:Hh;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(ve(n,a)&&a in r?n:r,a,i)}const Vh={get:kl(!1,!1)},qh={get:kl(!1,!0)},Kh={get:kl(!0,!1)};const wd=new WeakMap,_d=new WeakMap,xd=new WeakMap,Gh=new WeakMap;function Xh(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Jh(e){return e.__v_skip||!Object.isExtensible(e)?0:Xh(wh(e))}function po(e){return ga(e)?e:Tl(e,!1,Fh,Vh,wd)}function Zh(e){return Tl(e,!1,zh,qh,_d)}function Ad(e){return Tl(e,!0,jh,Kh,xd)}function Tl(e,t,n,r,a){if(!Oe(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=Jh(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function aa(e){return ga(e)?aa(e.__v_raw):!!(e&&e.__v_isReactive)}function ga(e){return!!(e&&e.__v_isReadonly)}function Ui(e){return!!(e&&e.__v_isShallow)}function Ed(e){return e?!!e.__v_raw:!1}function ye(e){const t=e&&e.__v_raw;return t?ye(t):e}function Qh(e){return Object.isExtensible(e)&&ld(e,"__v_skip",!0),e}const ba=e=>Oe(e)?po(e):e,Cl=e=>Oe(e)?Ad(e):e;class Od{constructor(t,n,r,a){this.getter=t,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Al(()=>t(this._value),()=>ki(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=ye(this);return(!t._cacheable||t.effect.dirty)&&Sn(t._value,t._value=t.effect.run())&&ki(t,4),Sd(t),t.effect._dirtyLevel>=2&&ki(t,2),t._value}set value(t){this._setter(t)}get _dirty(){return this.effect.dirty}set _dirty(t){this.effect.dirty=t}}function ev(e,t,n=!1){let r,a;const i=ce(e);return i?(r=e,a=gt):(r=e.get,a=e.set),new Od(r,a,i||!a,n)}function Sd(e){var t;En&&Qn&&(e=ye(e),pd(Qn,(t=e.dep)!=null?t:e.dep=vd(()=>e.dep=void 0,e instanceof Od?e:void 0)))}function ki(e,t=4,n){e=ye(e);const r=e.dep;r&&hd(r,t)}function lt(e){return!!(e&&e.__v_isRef===!0)}function we(e){return tv(e,!1)}function tv(e,t){return lt(e)?e:new nv(e,t)}class nv{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:ye(t),this._value=n?t:ba(t)}get value(){return Sd(this),this._value}set value(t){const n=this.__v_isShallow||Ui(t)||ga(t);t=n?t:ye(t),Sn(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:ba(t),ki(this,4))}}function Se(e){return lt(e)?e.value:e}const rv={get:(e,t,n)=>Se(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return lt(a)&&!lt(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function kd(e){return aa(e)?e:new Proxy(e,rv)}/**
* @vue/runtime-core v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function On(e,t,n,r){try{return r?e(...r):e()}catch(a){ho(a,t,n)}}function Pt(e,t,n,r){if(ce(e)){const a=On(e,t,n,r);return a&&id(a)&&a.catch(i=>{ho(i,t,n)}),a}if(ne(e)){const a=[];for(let i=0;i<e.length;i++)a.push(Pt(e[i],t,n,r));return a}}function ho(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=`https://vuejs.org/error-reference/#runtime-${n}`;for(;i;){const u=i.ec;if(u){for(let c=0;c<u.length;c++)if(u[c](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){Ln(),On(l,null,10,[e,o,s]),In();return}}av(e,n,a,r)}function av(e,t,n,r=!0){console.error(e)}let ya=!1,_s=!1;const Ze=[];let jt=0;const $r=[];let yn=null,Yn=0;const Td=Promise.resolve();let $l=null;function Yi(e){const t=$l||Td;return e?t.then(this?e.bind(this):e):t}function iv(e){let t=jt+1,n=Ze.length;for(;t<n;){const r=t+n>>>1,a=Ze[r],i=wa(a);i<e||i===e&&a.pre?t=r+1:n=r}return t}function Pl(e){(!Ze.length||!Ze.includes(e,ya&&e.allowRecurse?jt+1:jt))&&(e.id==null?Ze.push(e):Ze.splice(iv(e.id),0,e),Cd())}function Cd(){!ya&&!_s&&(_s=!0,$l=Td.then(Pd))}function ov(e){const t=Ze.indexOf(e);t>jt&&Ze.splice(t,1)}function sv(e){ne(e)?$r.push(...e):(!yn||!yn.includes(e,e.allowRecurse?Yn+1:Yn))&&$r.push(e),Cd()}function Bc(e,t,n=ya?jt+1:0){for(;n<Ze.length;n++){const r=Ze[n];if(r&&r.pre){if(e&&r.id!==e.uid)continue;Ze.splice(n,1),n--,r()}}}function $d(e){if($r.length){const t=[...new Set($r)].sort((n,r)=>wa(n)-wa(r));if($r.length=0,yn){yn.push(...t);return}for(yn=t,Yn=0;Yn<yn.length;Yn++)yn[Yn]();yn=null,Yn=0}}const wa=e=>e.id==null?1/0:e.id,lv=(e,t)=>{const n=wa(e)-wa(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Pd(e){_s=!1,ya=!0,Ze.sort(lv);try{for(jt=0;jt<Ze.length;jt++){const t=Ze[jt];t&&t.active!==!1&&On(t,null,14)}}finally{jt=0,Ze.length=0,$d(),ya=!1,$l=null,(Ze.length||$r.length)&&Pd()}}function cv(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||ke;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const c=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:p}=r[c]||ke;p&&(a=n.map(m=>De(m)?m.trim():m)),f&&(a=n.map(Hi))}let s,l=r[s=kr(t)]||r[s=kr(Wt(t))];!l&&i&&(l=r[s=kr(hr(t))]),l&&Pt(l,e,6,a);const u=r[s+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Pt(u,e,6,a)}}function Nd(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!ce(e)){const l=u=>{const c=Nd(u,t,!0);c&&(s=!0,qe(o,c))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(Oe(e)&&r.set(e,null),null):(ne(i)?i.forEach(l=>o[l]=null):qe(o,i),Oe(e)&&r.set(e,o),o)}function vo(e,t){return!e||!co(t)?!1:(t=t.slice(2).replace(/Once$/,""),ve(e,t[0].toLowerCase()+t.slice(1))||ve(e,hr(t))||ve(e,t))}let Ye=null,go=null;function Wi(e){const t=Ye;return Ye=e,go=e&&e.type.__scopeId||null,t}function tA(e){go=e}function nA(){go=null}function uv(e,t=Ye,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&eu(-1);const i=Wi(t);let o;try{o=e(...a)}finally{Wi(i),r._d&&eu(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Bo(e){const{type:t,vnode:n,proxy:r,withProxy:a,propsOptions:[i],slots:o,attrs:s,emit:l,render:u,renderCache:c,props:f,data:p,setupState:m,ctx:b,inheritAttrs:y}=e,A=Wi(e);let g,h;try{if(n.shapeFlag&4){const d=a||r,E=d;g=It(u.call(E,d,c,f,m,p,b)),h=s}else{const d=t;g=It(d.length>1?d(f,{attrs:s,slots:o,emit:l}):d(f,null)),h=t.props?s:fv(s)}}catch(d){la.length=0,ho(d,e,1),g=Qe(kn)}let _=g;if(h&&y!==!1){const d=Object.keys(h),{shapeFlag:E}=_;d.length&&E&7&&(i&&d.some(yl)&&(h=dv(h,i)),_=sr(_,h,!1,!0))}return n.dirs&&(_=sr(_,null,!1,!0),_.dirs=_.dirs?_.dirs.concat(n.dirs):n.dirs),n.transition&&(_.transition=n.transition),g=_,Wi(A),g}const fv=e=>{let t;for(const n in e)(n==="class"||n==="style"||co(n))&&((t||(t={}))[n]=e[n]);return t},dv=(e,t)=>{const n={};for(const r in e)(!yl(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function mv(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,u=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Hc(r,o,u):!!o;if(l&8){const c=t.dynamicProps;for(let f=0;f<c.length;f++){const p=c[f];if(o[p]!==r[p]&&!vo(u,p))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?Hc(r,o,u):!0:!!o;return!1}function Hc(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!vo(n,i))return!0}return!1}function pv({vnode:e,parent:t},n){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=t.vnode).el=n,t=t.parent;else break}}const Md="components",hv="directives",Rd=Symbol.for("v-ndc");function Nl(e){return De(e)?Ld(Md,e,!1)||e:e||Rd}function rA(e){return Ld(hv,e)}function Ld(e,t,n=!0,r=!1){const a=Ye||Je;if(a){const i=a.type;if(e===Md){const s=Cs(i,!1);if(s&&(s===t||s===Wt(t)||s===fo(Wt(t))))return i}const o=Uc(a[e]||i[e],t)||Uc(a.appContext[e],t);return!o&&r?i:o}}function Uc(e,t){return e&&(e[t]||e[Wt(t)]||e[fo(Wt(t))])}const Id=e=>e.__isSuspense;function vv(e,t){t&&t.pendingBranch?ne(e)?t.effects.push(...e):t.effects.push(e):sv(e)}const gv=Symbol.for("v-scx"),bv=()=>Nr(gv),ri={};function Ut(e,t,n){return Dd(e,t,n)}function Dd(e,t,{immediate:n,deep:r,flush:a,once:i,onTrack:o,onTrigger:s}=ke){if(t&&i){const x=t;t=(...T)=>{x(...T),E()}}const l=Je,u=x=>r===!0?x:Vn(x,r===!1?1:void 0);let c,f=!1,p=!1;if(lt(e)?(c=()=>e.value,f=Ui(e)):aa(e)?(c=()=>u(e),f=!0):ne(e)?(p=!0,f=e.some(x=>aa(x)||Ui(x)),c=()=>e.map(x=>{if(lt(x))return x.value;if(aa(x))return u(x);if(ce(x))return On(x,l,2)})):ce(e)?t?c=()=>On(e,l,2):c=()=>(m&&m(),Pt(e,l,3,[b])):c=gt,t&&r){const x=c;c=()=>Vn(x())}let m,b=x=>{m=_.onStop=()=>{On(x,l,4),m=_.onStop=void 0}},y;if(wo)if(b=gt,t?n&&Pt(t,l,3,[c(),p?[]:void 0,b]):c(),a==="sync"){const x=bv();y=x.__watcherHandles||(x.__watcherHandles=[])}else return gt;let A=p?new Array(e.length).fill(ri):ri;const g=()=>{if(!(!_.active||!_.dirty))if(t){const x=_.run();(r||f||(p?x.some((T,F)=>Sn(T,A[F])):Sn(x,A)))&&(m&&m(),Pt(t,l,3,[x,A===ri?void 0:p&&A[0]===ri?[]:A,b]),A=x)}else _.run()};g.allowRecurse=!!t;let h;a==="sync"?h=g:a==="post"?h=()=>Ge(g,l&&l.suspense):(g.pre=!0,l&&(g.id=l.uid),h=()=>Pl(g));const _=new Al(c,gt,h),d=Nh(),E=()=>{_.stop(),d&&wl(d.effects,_)};return t?n?g():A=_.run():a==="post"?Ge(_.run.bind(_),l&&l.suspense):_.run(),y&&y.push(E),E}function yv(e,t,n){const r=this.proxy,a=De(e)?e.includes(".")?Fd(r,e):()=>r[e]:e.bind(r,r);let i;ce(t)?i=t:(i=t.handler,n=t);const o=Ia(this),s=Dd(a,i.bind(r),n);return o(),s}function Fd(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function Vn(e,t=1/0,n){if(t<=0||!Oe(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,lt(e))Vn(e.value,t,n);else if(ne(e))for(let r=0;r<e.length;r++)Vn(e[r],t,n);else if(Hr(e)||Sr(e))e.forEach(r=>{Vn(r,t,n)});else if(sd(e))for(const r in e)Vn(e[r],t,n);return e}function An(e,t){if(Ye===null)return e;const n=_o(Ye)||Ye.proxy,r=e.dirs||(e.dirs=[]);for(let a=0;a<t.length;a++){let[i,o,s,l=ke]=t[a];i&&(ce(i)&&(i={mounted:i,updated:i}),i.deep&&Vn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:s,modifiers:l}))}return e}function jn(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(Ln(),Pt(l,n,8,[e.el,s,e,t]),In())}}function jd(e,t){e.shapeFlag&6&&e.component?jd(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}/*! #__NO_SIDE_EFFECTS__ */function Ml(e,t){return ce(e)?qe({name:e.name},t,{setup:e}):e}const Pr=e=>!!e.type.__asyncLoader,zd=e=>e.type.__isKeepAlive,wv={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:t}){const n=sg(),r=n.ctx;if(!r.renderer)return()=>{const h=t.default&&t.default();return h&&h.length===1?h[0]:h};const a=new Map,i=new Set;let o=null;const s=n.suspense,{renderer:{p:l,m:u,um:c,o:{createElement:f}}}=r,p=f("div");r.activate=(h,_,d,E,x)=>{const T=h.component;u(h,_,d,0,s),l(T.vnode,h,_,d,T,s,E,h.slotScopeIds,x),Ge(()=>{T.isDeactivated=!1,T.a&&Tr(T.a);const F=h.props&&h.props.onVnodeMounted;F&&vt(F,T.parent,h)},s)},r.deactivate=h=>{const _=h.component;u(h,p,null,1,s),Ge(()=>{_.da&&Tr(_.da);const d=h.props&&h.props.onVnodeUnmounted;d&&vt(d,_.parent,h),_.isDeactivated=!0},s)};function m(h){Ho(h),c(h,n,s,!0)}function b(h){a.forEach((_,d)=>{const E=Cs(_.type);E&&(!h||!h(E))&&y(d)})}function y(h){const _=a.get(h);!o||!br(_,o)?m(_):o&&Ho(o),a.delete(h),i.delete(h)}Ut(()=>[e.include,e.exclude],([h,_])=>{h&&b(d=>Zr(h,d)),_&&b(d=>!Zr(_,d))},{flush:"post",deep:!0});let A=null;const g=()=>{A!=null&&a.set(A,Uo(n.subTree))};return Rl(g),Hd(g),Ud(()=>{a.forEach(h=>{const{subTree:_,suspense:d}=n,E=Uo(_);if(h.type===E.type&&h.key===E.key){Ho(E);const x=E.component.da;x&&Ge(x,d);return}m(h)})}),()=>{if(A=null,!t.default)return null;const h=t.default(),_=h[0];if(h.length>1)return o=null,h;if(!xa(_)||!(_.shapeFlag&4)&&!(_.shapeFlag&128))return o=null,_;let d=Uo(_);const E=d.type,x=Cs(Pr(d)?d.type.__asyncResolved||{}:E),{include:T,exclude:F,max:I}=e;if(T&&(!x||!Zr(T,x))||F&&x&&Zr(F,x))return o=d,_;const H=d.key==null?E:d.key,B=a.get(H);return d.el&&(d=sr(d),_.shapeFlag&128&&(_.ssContent=d)),A=H,B?(d.el=B.el,d.component=B.component,d.transition&&jd(d,d.transition),d.shapeFlag|=512,i.delete(H),i.add(H)):(i.add(H),I&&i.size>parseInt(I,10)&&y(i.values().next().value)),d.shapeFlag|=256,o=d,Id(_.type)?_:d}}},_v=wv;function Zr(e,t){return ne(e)?e.some(n=>Zr(n,t)):De(e)?e.split(",").includes(t):yh(e)?e.test(t):!1}function xv(e,t){Bd(e,"a",t)}function Av(e,t){Bd(e,"da",t)}function Bd(e,t,n=Je){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(bo(t,r,n),n){let a=n.parent;for(;a&&a.parent;)zd(a.parent.vnode)&&Ev(r,t,n,a),a=a.parent}}function Ev(e,t,n,r){const a=bo(t,e,r,!0);Ll(()=>{wl(r[t],a)},n)}function Ho(e){e.shapeFlag&=-257,e.shapeFlag&=-513}function Uo(e){return e.shapeFlag&128?e.ssContent:e}function bo(e,t,n=Je,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Ln();const s=Ia(n),l=Pt(t,n,e,o);return s(),In(),l});return r?a.unshift(i):a.push(i),i}}const cn=e=>(t,n=Je)=>(!wo||e==="sp")&&bo(e,(...r)=>t(...r),n),Ov=cn("bm"),Rl=cn("m"),Sv=cn("bu"),Hd=cn("u"),Ud=cn("bum"),Ll=cn("um"),kv=cn("sp"),Tv=cn("rtg"),Cv=cn("rtc");function $v(e,t=Je){bo("ec",e,t)}function Vi(e,t,n,r){let a;const i=n;if(ne(e)||De(e)){a=new Array(e.length);for(let o=0,s=e.length;o<s;o++)a[o]=t(e[o],o,void 0,i)}else if(typeof e=="number"){a=new Array(e);for(let o=0;o<e;o++)a[o]=t(o+1,o,void 0,i)}else if(Oe(e))if(e[Symbol.iterator])a=Array.from(e,(o,s)=>t(o,s,void 0,i));else{const o=Object.keys(e);a=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const u=o[s];a[s]=t(e[u],u,s,i)}}else a=[];return a}function Pv(e,t,n={},r,a){if(Ye.isCE||Ye.parent&&Pr(Ye.parent)&&Ye.parent.isCE)return n.name=t,Qe("slot",n,r);let i=e[t];i&&i._c&&(i._d=!1),de();const o=i&&Yd(i(n)),s=ft(je,{key:n.key||o&&o.key||`_${t}`},o||[],o&&e._===1?64:-2);return i&&i._c&&(i._d=!0),s}function Yd(e){return e.some(t=>xa(t)?!(t.type===kn||t.type===je&&!Yd(t.children)):!0)?e:null}function Nv(e,t){const n={};for(const r in e)n[kr(r)]=e[r];return n}const xs=e=>e?im(e)?_o(e)||e.proxy:xs(e.parent):null,ia=qe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>xs(e.parent),$root:e=>xs(e.root),$emit:e=>e.emit,$options:e=>Il(e),$forceUpdate:e=>e.f||(e.f=()=>{e.effect.dirty=!0,Pl(e.update)}),$nextTick:e=>e.n||(e.n=Yi.bind(e.proxy)),$watch:e=>yv.bind(e)}),Yo=(e,t)=>e!==ke&&!e.__isScriptSetup&&ve(e,t),Mv={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let u;if(t[0]!=="$"){const m=o[t];if(m!==void 0)switch(m){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(Yo(r,t))return o[t]=1,r[t];if(a!==ke&&ve(a,t))return o[t]=2,a[t];if((u=e.propsOptions[0])&&ve(u,t))return o[t]=3,i[t];if(n!==ke&&ve(n,t))return o[t]=4,n[t];As&&(o[t]=0)}}const c=ia[t];let f,p;if(c)return t==="$attrs"&&st(e.attrs,"get",""),c(e);if((f=s.__cssModules)&&(f=f[t]))return f;if(n!==ke&&ve(n,t))return o[t]=4,n[t];if(p=l.config.globalProperties,ve(p,t))return p[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return Yo(a,t)?(a[t]=n,!0):r!==ke&&ve(r,t)?(r[t]=n,!0):ve(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==ke&&ve(e,o)||Yo(t,o)||(s=i[0])&&ve(s,o)||ve(r,o)||ve(ia,o)||ve(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:ve(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Yc(e){return ne(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let As=!0;function Rv(e){const t=Il(e),n=e.proxy,r=e.ctx;As=!1,t.beforeCreate&&Wc(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:u,created:c,beforeMount:f,mounted:p,beforeUpdate:m,updated:b,activated:y,deactivated:A,beforeDestroy:g,beforeUnmount:h,destroyed:_,unmounted:d,render:E,renderTracked:x,renderTriggered:T,errorCaptured:F,serverPrefetch:I,expose:H,inheritAttrs:B,components:ie,directives:se,filters:Y}=t;if(u&&Lv(u,r,null),o)for(const M in o){const C=o[M];ce(C)&&(r[M]=C.bind(n))}if(a){const M=a.call(n,n);Oe(M)&&(e.data=po(M))}if(As=!0,i)for(const M in i){const C=i[M],V=ce(C)?C.bind(n,n):ce(C.get)?C.get.bind(n,n):gt,G=!ce(C)&&ce(C.set)?C.set.bind(n):gt,ae=Ue({get:V,set:G});Object.defineProperty(r,M,{enumerable:!0,configurable:!0,get:()=>ae.value,set:oe=>ae.value=oe})}if(s)for(const M in s)Wd(s[M],r,n,M);if(l){const M=ce(l)?l.call(n):l;Reflect.ownKeys(M).forEach(C=>{Bv(C,M[C])})}c&&Wc(c,e,"c");function $(M,C){ne(C)?C.forEach(V=>M(V.bind(n))):C&&M(C.bind(n))}if($(Ov,f),$(Rl,p),$(Sv,m),$(Hd,b),$(xv,y),$(Av,A),$($v,F),$(Cv,x),$(Tv,T),$(Ud,h),$(Ll,d),$(kv,I),ne(H))if(H.length){const M=e.exposed||(e.exposed={});H.forEach(C=>{Object.defineProperty(M,C,{get:()=>n[C],set:V=>n[C]=V})})}else e.exposed||(e.exposed={});E&&e.render===gt&&(e.render=E),B!=null&&(e.inheritAttrs=B),ie&&(e.components=ie),se&&(e.directives=se)}function Lv(e,t,n=gt){ne(e)&&(e=Es(e));for(const r in e){const a=e[r];let i;Oe(a)?"default"in a?i=Nr(a.from||r,a.default,!0):i=Nr(a.from||r):i=Nr(a),lt(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[r]=i}}function Wc(e,t,n){Pt(ne(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Wd(e,t,n,r){const a=r.includes(".")?Fd(n,r):()=>n[r];if(De(e)){const i=t[e];ce(i)&&Ut(a,i)}else if(ce(e))Ut(a,e.bind(n));else if(Oe(e))if(ne(e))e.forEach(i=>Wd(i,t,n,r));else{const i=ce(e.handler)?e.handler.bind(n):t[e.handler];ce(i)&&Ut(a,i,e)}}function Il(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(u=>qi(l,u,o,!0)),qi(l,t,o)),Oe(t)&&i.set(t,l),l}function qi(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&qi(e,i,n,!0),a&&a.forEach(o=>qi(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=Iv[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const Iv={data:Vc,props:qc,emits:qc,methods:Qr,computed:Qr,beforeCreate:tt,created:tt,beforeMount:tt,mounted:tt,beforeUpdate:tt,updated:tt,beforeDestroy:tt,beforeUnmount:tt,destroyed:tt,unmounted:tt,activated:tt,deactivated:tt,errorCaptured:tt,serverPrefetch:tt,components:Qr,directives:Qr,watch:Fv,provide:Vc,inject:Dv};function Vc(e,t){return t?e?function(){return qe(ce(e)?e.call(this,this):e,ce(t)?t.call(this,this):t)}:t:e}function Dv(e,t){return Qr(Es(e),Es(t))}function Es(e){if(ne(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function tt(e,t){return e?[...new Set([].concat(e,t))]:t}function Qr(e,t){return e?qe(Object.create(null),e,t):t}function qc(e,t){return e?ne(e)&&ne(t)?[...new Set([...e,...t])]:qe(Object.create(null),Yc(e),Yc(t??{})):t}function Fv(e,t){if(!e)return t;if(!t)return e;const n=qe(Object.create(null),e);for(const r in t)n[r]=tt(e[r],t[r]);return n}function Vd(){return{app:null,config:{isNativeTag:gh,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let jv=0;function zv(e,t){return function(r,a=null){ce(r)||(r=qe({},r)),a!=null&&!Oe(a)&&(a=null);const i=Vd(),o=new WeakSet;let s=!1;const l=i.app={_uid:jv++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:mg,get config(){return i.config},set config(u){},use(u,...c){return o.has(u)||(u&&ce(u.install)?(o.add(u),u.install(l,...c)):ce(u)&&(o.add(u),u(l,...c))),l},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),l},component(u,c){return c?(i.components[u]=c,l):i.components[u]},directive(u,c){return c?(i.directives[u]=c,l):i.directives[u]},mount(u,c,f){if(!s){const p=Qe(r,a);return p.appContext=i,f===!0?f="svg":f===!1&&(f=void 0),c&&t?t(p,u):e(p,u,f),s=!0,l._container=u,u.__vue_app__=l,_o(p.component)||p.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(u,c){return i.provides[u]=c,l},runWithContext(u){const c=oa;oa=l;try{return u()}finally{oa=c}}};return l}}let oa=null;function Bv(e,t){if(Je){let n=Je.provides;const r=Je.parent&&Je.parent.provides;r===n&&(n=Je.provides=Object.create(r)),n[e]=t}}function Nr(e,t,n=!1){const r=Je||Ye;if(r||oa){const a=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:oa._context.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&ce(t)?t.call(r&&r.proxy):t}}const qd={},Kd=()=>Object.create(qd),Gd=e=>Object.getPrototypeOf(e)===qd;function Hv(e,t,n,r=!1){const a={},i=Kd();e.propsDefaults=Object.create(null),Xd(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:Zh(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function Uv(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=ye(a),[l]=e.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const c=e.vnode.dynamicProps;for(let f=0;f<c.length;f++){let p=c[f];if(vo(e.emitsOptions,p))continue;const m=t[p];if(l)if(ve(i,p))m!==i[p]&&(i[p]=m,u=!0);else{const b=Wt(p);a[b]=Os(l,s,b,m,e,!1)}else m!==i[p]&&(i[p]=m,u=!0)}}}else{Xd(e,t,a,i)&&(u=!0);let c;for(const f in s)(!t||!ve(t,f)&&((c=hr(f))===f||!ve(t,c)))&&(l?n&&(n[f]!==void 0||n[c]!==void 0)&&(a[f]=Os(l,s,f,void 0,e,!0)):delete a[f]);if(i!==s)for(const f in i)(!t||!ve(t,f))&&(delete i[f],u=!0)}u&&Zt(e.attrs,"set","")}function Xd(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(ra(l))continue;const u=t[l];let c;a&&ve(a,c=Wt(l))?!i||!i.includes(c)?n[c]=u:(s||(s={}))[c]=u:vo(e.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(i){const l=ye(n),u=s||ke;for(let c=0;c<i.length;c++){const f=i[c];n[f]=Os(a,l,f,u[f],e,!ve(u,f))}}return o}function Os(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=ve(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&ce(l)){const{propsDefaults:u}=a;if(n in u)r=u[n];else{const c=Ia(a);r=u[n]=l.call(null,t),c()}}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===hr(n))&&(r=!0))}return r}function Jd(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!ce(e)){const c=f=>{l=!0;const[p,m]=Jd(f,t,!0);qe(o,p),m&&s.push(...m)};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!i&&!l)return Oe(e)&&r.set(e,Or),Or;if(ne(i))for(let c=0;c<i.length;c++){const f=Wt(i[c]);Kc(f)&&(o[f]=ke)}else if(i)for(const c in i){const f=Wt(c);if(Kc(f)){const p=i[c],m=o[f]=ne(p)||ce(p)?{type:p}:qe({},p);if(m){const b=Jc(Boolean,m.type),y=Jc(String,m.type);m[0]=b>-1,m[1]=y<0||b<y,(b>-1||ve(m,"default"))&&s.push(f)}}}const u=[o,s];return Oe(e)&&r.set(e,u),u}function Kc(e){return e[0]!=="$"&&!ra(e)}function Gc(e){return e===null?"null":typeof e=="function"?e.name||"":typeof e=="object"&&e.constructor&&e.constructor.name||""}function Xc(e,t){return Gc(e)===Gc(t)}function Jc(e,t){return ne(t)?t.findIndex(n=>Xc(n,e)):ce(t)&&Xc(t,e)?0:-1}const Zd=e=>e[0]==="_"||e==="$stable",Dl=e=>ne(e)?e.map(It):[It(e)],Yv=(e,t,n)=>{if(t._n)return t;const r=uv((...a)=>Dl(t(...a)),n);return r._c=!1,r},Qd=(e,t,n)=>{const r=e._ctx;for(const a in e){if(Zd(a))continue;const i=e[a];if(ce(i))t[a]=Yv(a,i,r);else if(i!=null){const o=Dl(i);t[a]=()=>o}}},em=(e,t)=>{const n=Dl(t);e.slots.default=()=>n},Wv=(e,t)=>{const n=e.slots=Kd();if(e.vnode.shapeFlag&32){const r=t._;r?(qe(n,t),ld(n,"_",r,!0)):Qd(t,n)}else t&&em(e,t)},Vv=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=ke;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(qe(a,t),!n&&s===1&&delete a._):(i=!t.$stable,Qd(t,a)),o=t}else t&&(em(e,t),o={default:1});if(i)for(const s in a)!Zd(s)&&o[s]==null&&delete a[s]};function Ss(e,t,n,r,a=!1){if(ne(e)){e.forEach((p,m)=>Ss(p,t&&(ne(t)?t[m]:t),n,r,a));return}if(Pr(r)&&!a)return;const i=r.shapeFlag&4?_o(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,u=t&&t.r,c=s.refs===ke?s.refs={}:s.refs,f=s.setupState;if(u!=null&&u!==l&&(De(u)?(c[u]=null,ve(f,u)&&(f[u]=null)):lt(u)&&(u.value=null)),ce(l))On(l,s,12,[o,c]);else{const p=De(l),m=lt(l);if(p||m){const b=()=>{if(e.f){const y=p?ve(f,l)?f[l]:c[l]:l.value;a?ne(y)&&wl(y,i):ne(y)?y.includes(i)||y.push(i):p?(c[l]=[i],ve(f,l)&&(f[l]=c[l])):(l.value=[i],e.k&&(c[e.k]=l.value))}else p?(c[l]=o,ve(f,l)&&(f[l]=o)):m&&(l.value=o,e.k&&(c[e.k]=o))};o?(b.id=-1,Ge(b,n)):b()}}}const Ge=vv;function qv(e){return Kv(e)}function Kv(e,t){const n=cd();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:u,setElementText:c,parentNode:f,nextSibling:p,setScopeId:m=gt,insertStaticContent:b}=e,y=(v,w,O,P=null,N=null,j=null,U=void 0,L=null,z=!!w.dynamicChildren)=>{if(v===w)return;v&&!br(v,w)&&(P=Re(v),oe(v,N,j,!0),v=null),w.patchFlag===-2&&(z=!1,w.dynamicChildren=null);const{type:R,ref:W,shapeFlag:te}=w;switch(R){case yo:A(v,w,O,P);break;case kn:g(v,w,O,P);break;case Vo:v==null&&h(w,O,P,U);break;case je:ie(v,w,O,P,N,j,U,L,z);break;default:te&1?E(v,w,O,P,N,j,U,L,z):te&6?se(v,w,O,P,N,j,U,L,z):(te&64||te&128)&&R.process(v,w,O,P,N,j,U,L,z,pe)}W!=null&&N&&Ss(W,v&&v.ref,j,w||v,!w)},A=(v,w,O,P)=>{if(v==null)r(w.el=s(w.children),O,P);else{const N=w.el=v.el;w.children!==v.children&&u(N,w.children)}},g=(v,w,O,P)=>{v==null?r(w.el=l(w.children||""),O,P):w.el=v.el},h=(v,w,O,P)=>{[v.el,v.anchor]=b(v.children,w,O,P,v.el,v.anchor)},_=({el:v,anchor:w},O,P)=>{let N;for(;v&&v!==w;)N=p(v),r(v,O,P),v=N;r(w,O,P)},d=({el:v,anchor:w})=>{let O;for(;v&&v!==w;)O=p(v),a(v),v=O;a(w)},E=(v,w,O,P,N,j,U,L,z)=>{w.type==="svg"?U="svg":w.type==="math"&&(U="mathml"),v==null?x(w,O,P,N,j,U,L,z):I(v,w,N,j,U,L,z)},x=(v,w,O,P,N,j,U,L)=>{let z,R;const{props:W,shapeFlag:te,transition:ee,dirs:re}=v;if(z=v.el=o(v.type,j,W&&W.is,W),te&8?c(z,v.children):te&16&&F(v.children,z,null,P,N,Wo(v,j),U,L),re&&jn(v,null,P,"created"),T(z,v,v.scopeId,U,P),W){for(const he in W)he!=="value"&&!ra(he)&&i(z,he,null,W[he],j,v.children,P,N,xe);"value"in W&&i(z,"value",null,W.value,j),(R=W.onVnodeBeforeMount)&&vt(R,P,v)}re&&jn(v,null,P,"beforeMount");const ue=Gv(N,ee);ue&&ee.beforeEnter(z),r(z,w,O),((R=W&&W.onVnodeMounted)||ue||re)&&Ge(()=>{R&&vt(R,P,v),ue&&ee.enter(z),re&&jn(v,null,P,"mounted")},N)},T=(v,w,O,P,N)=>{if(O&&m(v,O),P)for(let j=0;j<P.length;j++)m(v,P[j]);if(N){let j=N.subTree;if(w===j){const U=N.vnode;T(v,U,U.scopeId,U.slotScopeIds,N.parent)}}},F=(v,w,O,P,N,j,U,L,z=0)=>{for(let R=z;R<v.length;R++){const W=v[R]=L?wn(v[R]):It(v[R]);y(null,W,w,O,P,N,j,U,L)}},I=(v,w,O,P,N,j,U)=>{const L=w.el=v.el;let{patchFlag:z,dynamicChildren:R,dirs:W}=w;z|=v.patchFlag&16;const te=v.props||ke,ee=w.props||ke;let re;if(O&&zn(O,!1),(re=ee.onVnodeBeforeUpdate)&&vt(re,O,w,v),W&&jn(w,v,O,"beforeUpdate"),O&&zn(O,!0),R?H(v.dynamicChildren,R,L,O,P,Wo(w,N),j):U||C(v,w,L,null,O,P,Wo(w,N),j,!1),z>0){if(z&16)B(L,w,te,ee,O,P,N);else if(z&2&&te.class!==ee.class&&i(L,"class",null,ee.class,N),z&4&&i(L,"style",te.style,ee.style,N),z&8){const ue=w.dynamicProps;for(let he=0;he<ue.length;he++){const Ae=ue[he],Be=te[Ae],ct=ee[Ae];(ct!==Be||Ae==="value")&&i(L,Ae,Be,ct,N,v.children,O,P,xe)}}z&1&&v.children!==w.children&&c(L,w.children)}else!U&&R==null&&B(L,w,te,ee,O,P,N);((re=ee.onVnodeUpdated)||W)&&Ge(()=>{re&&vt(re,O,w,v),W&&jn(w,v,O,"updated")},P)},H=(v,w,O,P,N,j,U)=>{for(let L=0;L<w.length;L++){const z=v[L],R=w[L],W=z.el&&(z.type===je||!br(z,R)||z.shapeFlag&70)?f(z.el):O;y(z,R,W,null,P,N,j,U,!0)}},B=(v,w,O,P,N,j,U)=>{if(O!==P){if(O!==ke)for(const L in O)!ra(L)&&!(L in P)&&i(v,L,O[L],null,U,w.children,N,j,xe);for(const L in P){if(ra(L))continue;const z=P[L],R=O[L];z!==R&&L!=="value"&&i(v,L,R,z,U,w.children,N,j,xe)}"value"in P&&i(v,"value",O.value,P.value,U)}},ie=(v,w,O,P,N,j,U,L,z)=>{const R=w.el=v?v.el:s(""),W=w.anchor=v?v.anchor:s("");let{patchFlag:te,dynamicChildren:ee,slotScopeIds:re}=w;re&&(L=L?L.concat(re):re),v==null?(r(R,O,P),r(W,O,P),F(w.children||[],O,W,N,j,U,L,z)):te>0&&te&64&&ee&&v.dynamicChildren?(H(v.dynamicChildren,ee,O,N,j,U,L),(w.key!=null||N&&w===N.subTree)&&Fl(v,w,!0)):C(v,w,O,W,N,j,U,L,z)},se=(v,w,O,P,N,j,U,L,z)=>{w.slotScopeIds=L,v==null?w.shapeFlag&512?N.ctx.activate(w,O,P,U,z):Y(w,O,P,N,j,U,z):D(v,w,z)},Y=(v,w,O,P,N,j,U)=>{const L=v.component=og(v,P,N);if(zd(v)&&(L.ctx.renderer=pe),lg(L),L.asyncDep){if(N&&N.registerDep(L,$),!v.el){const z=L.subTree=Qe(kn);g(null,z,w,O)}}else $(L,v,w,O,N,j,U)},D=(v,w,O)=>{const P=w.component=v.component;if(mv(v,w,O))if(P.asyncDep&&!P.asyncResolved){M(P,w,O);return}else P.next=w,ov(P.update),P.effect.dirty=!0,P.update();else w.el=v.el,P.vnode=w},$=(v,w,O,P,N,j,U)=>{const L=()=>{if(v.isMounted){let{next:W,bu:te,u:ee,parent:re,vnode:ue}=v;{const dn=tm(v);if(dn){W&&(W.el=ue.el,M(v,W,U)),dn.asyncDep.then(()=>{v.isUnmounted||L()});return}}let he=W,Ae;zn(v,!1),W?(W.el=ue.el,M(v,W,U)):W=ue,te&&Tr(te),(Ae=W.props&&W.props.onVnodeBeforeUpdate)&&vt(Ae,re,W,ue),zn(v,!0);const Be=Bo(v),ct=v.subTree;v.subTree=Be,y(ct,Be,f(ct.el),Re(ct),v,N,j),W.el=Be.el,he===null&&pv(v,Be.el),ee&&Ge(ee,N),(Ae=W.props&&W.props.onVnodeUpdated)&&Ge(()=>vt(Ae,re,W,ue),N)}else{let W;const{el:te,props:ee}=w,{bm:re,m:ue,parent:he}=v,Ae=Pr(w);if(zn(v,!1),re&&Tr(re),!Ae&&(W=ee&&ee.onVnodeBeforeMount)&&vt(W,he,w),zn(v,!0),te&&Ke){const Be=()=>{v.subTree=Bo(v),Ke(te,v.subTree,v,N,null)};Ae?w.type.__asyncLoader().then(()=>!v.isUnmounted&&Be()):Be()}else{const Be=v.subTree=Bo(v);y(null,Be,O,P,v,N,j),w.el=Be.el}if(ue&&Ge(ue,N),!Ae&&(W=ee&&ee.onVnodeMounted)){const Be=w;Ge(()=>vt(W,he,Be),N)}(w.shapeFlag&256||he&&Pr(he.vnode)&&he.vnode.shapeFlag&256)&&v.a&&Ge(v.a,N),v.isMounted=!0,w=O=P=null}},z=v.effect=new Al(L,gt,()=>Pl(R),v.scope),R=v.update=()=>{z.dirty&&z.run()};R.id=v.uid,zn(v,!0),R()},M=(v,w,O)=>{w.component=v;const P=v.vnode.props;v.vnode=w,v.next=null,Uv(v,w.props,P,O),Vv(v,w.children,O),Ln(),Bc(v),In()},C=(v,w,O,P,N,j,U,L,z=!1)=>{const R=v&&v.children,W=v?v.shapeFlag:0,te=w.children,{patchFlag:ee,shapeFlag:re}=w;if(ee>0){if(ee&128){G(R,te,O,P,N,j,U,L,z);return}else if(ee&256){V(R,te,O,P,N,j,U,L,z);return}}re&8?(W&16&&xe(R,N,j),te!==R&&c(O,te)):W&16?re&16?G(R,te,O,P,N,j,U,L,z):xe(R,N,j,!0):(W&8&&c(O,""),re&16&&F(te,O,P,N,j,U,L,z))},V=(v,w,O,P,N,j,U,L,z)=>{v=v||Or,w=w||Or;const R=v.length,W=w.length,te=Math.min(R,W);let ee;for(ee=0;ee<te;ee++){const re=w[ee]=z?wn(w[ee]):It(w[ee]);y(v[ee],re,O,null,N,j,U,L,z)}R>W?xe(v,N,j,!0,!1,te):F(w,O,P,N,j,U,L,z,te)},G=(v,w,O,P,N,j,U,L,z)=>{let R=0;const W=w.length;let te=v.length-1,ee=W-1;for(;R<=te&&R<=ee;){const re=v[R],ue=w[R]=z?wn(w[R]):It(w[R]);if(br(re,ue))y(re,ue,O,null,N,j,U,L,z);else break;R++}for(;R<=te&&R<=ee;){const re=v[te],ue=w[ee]=z?wn(w[ee]):It(w[ee]);if(br(re,ue))y(re,ue,O,null,N,j,U,L,z);else break;te--,ee--}if(R>te){if(R<=ee){const re=ee+1,ue=re<W?w[re].el:P;for(;R<=ee;)y(null,w[R]=z?wn(w[R]):It(w[R]),O,ue,N,j,U,L,z),R++}}else if(R>ee)for(;R<=te;)oe(v[R],N,j,!0),R++;else{const re=R,ue=R,he=new Map;for(R=ue;R<=ee;R++){const J=w[R]=z?wn(w[R]):It(w[R]);J.key!=null&&he.set(J.key,R)}let Ae,Be=0;const ct=ee-ue+1;let dn=!1,Ga=0;const k=new Array(ct);for(R=0;R<ct;R++)k[R]=0;for(R=re;R<=te;R++){const J=v[R];if(Be>=ct){oe(J,N,j,!0);continue}let fe;if(J.key!=null)fe=he.get(J.key);else for(Ae=ue;Ae<=ee;Ae++)if(k[Ae-ue]===0&&br(J,w[Ae])){fe=Ae;break}fe===void 0?oe(J,N,j,!0):(k[fe-ue]=R+1,fe>=Ga?Ga=fe:dn=!0,y(J,w[fe],O,null,N,j,U,L,z),Be++)}const X=dn?Xv(k):Or;for(Ae=X.length-1,R=ct-1;R>=0;R--){const J=ue+R,fe=w[J],me=J+1<W?w[J+1].el:P;k[R]===0?y(null,fe,O,me,N,j,U,L,z):dn&&(Ae<0||R!==X[Ae]?ae(fe,O,me,2):Ae--)}}},ae=(v,w,O,P,N=null)=>{const{el:j,type:U,transition:L,children:z,shapeFlag:R}=v;if(R&6){ae(v.component.subTree,w,O,P);return}if(R&128){v.suspense.move(w,O,P);return}if(R&64){U.move(v,w,O,pe);return}if(U===je){r(j,w,O);for(let te=0;te<z.length;te++)ae(z[te],w,O,P);r(v.anchor,w,O);return}if(U===Vo){_(v,w,O);return}if(P!==2&&R&1&&L)if(P===0)L.beforeEnter(j),r(j,w,O),Ge(()=>L.enter(j),N);else{const{leave:te,delayLeave:ee,afterLeave:re}=L,ue=()=>r(j,w,O),he=()=>{te(j,()=>{ue(),re&&re()})};ee?ee(j,ue,he):he()}else r(j,w,O)},oe=(v,w,O,P=!1,N=!1)=>{const{type:j,props:U,ref:L,children:z,dynamicChildren:R,shapeFlag:W,patchFlag:te,dirs:ee}=v;if(L!=null&&Ss(L,null,O,v,!0),W&256){w.ctx.deactivate(v);return}const re=W&1&&ee,ue=!Pr(v);let he;if(ue&&(he=U&&U.onVnodeBeforeUnmount)&&vt(he,w,v),W&6)_e(v.component,O,P);else{if(W&128){v.suspense.unmount(O,P);return}re&&jn(v,null,w,"beforeUnmount"),W&64?v.type.remove(v,w,O,N,pe,P):R&&(j!==je||te>0&&te&64)?xe(R,w,O,!1,!0):(j===je&&te&384||!N&&W&16)&&xe(z,w,O),P&&ge(v)}(ue&&(he=U&&U.onVnodeUnmounted)||re)&&Ge(()=>{he&&vt(he,w,v),re&&jn(v,null,w,"unmounted")},O)},ge=v=>{const{type:w,el:O,anchor:P,transition:N}=v;if(w===je){be(O,P);return}if(w===Vo){d(v);return}const j=()=>{a(O),N&&!N.persisted&&N.afterLeave&&N.afterLeave()};if(v.shapeFlag&1&&N&&!N.persisted){const{leave:U,delayLeave:L}=N,z=()=>U(O,j);L?L(v.el,j,z):z()}else j()},be=(v,w)=>{let O;for(;v!==w;)O=p(v),a(v),v=O;a(w)},_e=(v,w,O)=>{const{bum:P,scope:N,update:j,subTree:U,um:L}=v;P&&Tr(P),N.stop(),j&&(j.active=!1,oe(U,v,w,O)),L&&Ge(L,w),Ge(()=>{v.isUnmounted=!0},w),w&&w.pendingBranch&&!w.isUnmounted&&v.asyncDep&&!v.asyncResolved&&v.suspenseId===w.pendingId&&(w.deps--,w.deps===0&&w.resolve())},xe=(v,w,O,P=!1,N=!1,j=0)=>{for(let U=j;U<v.length;U++)oe(v[U],w,O,P,N)},Re=v=>v.shapeFlag&6?Re(v.component.subTree):v.shapeFlag&128?v.suspense.next():p(v.anchor||v.el);let Ne=!1;const Fe=(v,w,O)=>{v==null?w._vnode&&oe(w._vnode,null,null,!0):y(w._vnode||null,v,w,null,null,null,O),Ne||(Ne=!0,Bc(),$d(),Ne=!1),w._vnode=v},pe={p:y,um:oe,m:ae,r:ge,mt:Y,mc:F,pc:C,pbc:H,n:Re,o:e};let Me,Ke;return{render:Fe,hydrate:Me,createApp:zv(Fe,Me)}}function Wo({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function zn({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Gv(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Fl(e,t,n=!1){const r=e.children,a=t.children;if(ne(r)&&ne(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=wn(a[i]),s.el=o.el),n||Fl(o,s)),s.type===yo&&(s.el=o.el)}}function Xv(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const u=e[r];if(u!==0){if(a=n[n.length-1],e[a]<u){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<u?i=s+1:o=s;u<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}function tm(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:tm(t)}const Jv=e=>e.__isTeleport,sa=e=>e&&(e.disabled||e.disabled===""),Zc=e=>typeof SVGElement<"u"&&e instanceof SVGElement,Qc=e=>typeof MathMLElement=="function"&&e instanceof MathMLElement,ks=(e,t)=>{const n=e&&e.to;return De(n)?t?t(n):null:n},Zv={name:"Teleport",__isTeleport:!0,process(e,t,n,r,a,i,o,s,l,u){const{mc:c,pc:f,pbc:p,o:{insert:m,querySelector:b,createText:y,createComment:A}}=u,g=sa(t.props);let{shapeFlag:h,children:_,dynamicChildren:d}=t;if(e==null){const E=t.el=y(""),x=t.anchor=y("");m(E,n,r),m(x,n,r);const T=t.target=ks(t.props,b),F=t.targetAnchor=y("");T&&(m(F,T),o==="svg"||Zc(T)?o="svg":(o==="mathml"||Qc(T))&&(o="mathml"));const I=(H,B)=>{h&16&&c(_,H,B,a,i,o,s,l)};g?I(n,x):T&&I(T,F)}else{t.el=e.el;const E=t.anchor=e.anchor,x=t.target=e.target,T=t.targetAnchor=e.targetAnchor,F=sa(e.props),I=F?n:x,H=F?E:T;if(o==="svg"||Zc(x)?o="svg":(o==="mathml"||Qc(x))&&(o="mathml"),d?(p(e.dynamicChildren,d,I,a,i,o,s),Fl(e,t,!0)):l||f(e,t,I,H,a,i,o,s,!1),g)F?t.props&&e.props&&t.props.to!==e.props.to&&(t.props.to=e.props.to):ai(t,n,E,u,1);else if((t.props&&t.props.to)!==(e.props&&e.props.to)){const B=t.target=ks(t.props,b);B&&ai(t,B,null,u,0)}else F&&ai(t,x,T,u,1)}nm(t)},remove(e,t,n,r,{um:a,o:{remove:i}},o){const{shapeFlag:s,children:l,anchor:u,targetAnchor:c,target:f,props:p}=e;if(f&&i(c),o&&i(u),s&16){const m=o||!sa(p);for(let b=0;b<l.length;b++){const y=l[b];a(y,t,n,m,!!y.dynamicChildren)}}},move:ai,hydrate:Qv};function ai(e,t,n,{o:{insert:r},m:a},i=2){i===0&&r(e.targetAnchor,t,n);const{el:o,anchor:s,shapeFlag:l,children:u,props:c}=e,f=i===2;if(f&&r(o,t,n),(!f||sa(c))&&l&16)for(let p=0;p<u.length;p++)a(u[p],t,n,2);f&&r(s,t,n)}function Qv(e,t,n,r,a,i,{o:{nextSibling:o,parentNode:s,querySelector:l}},u){const c=t.target=ks(t.props,l);if(c){const f=c._lpa||c.firstChild;if(t.shapeFlag&16)if(sa(t.props))t.anchor=u(o(e),t,s(e),n,r,a,i),t.targetAnchor=f;else{t.anchor=o(e);let p=f;for(;p;)if(p=o(p),p&&p.nodeType===8&&p.data==="teleport anchor"){t.targetAnchor=p,c._lpa=t.targetAnchor&&o(t.targetAnchor);break}u(f,t,c,n,r,a,i)}nm(t)}return t.anchor&&o(t.anchor)}const eg=Zv;function nm(e){const t=e.ctx;if(t&&t.ut){let n=e.children[0].el;for(;n&&n!==e.targetAnchor;)n.nodeType===1&&n.setAttribute("data-v-owner",t.uid),n=n.nextSibling;t.ut()}}const je=Symbol.for("v-fgt"),yo=Symbol.for("v-txt"),kn=Symbol.for("v-cmt"),Vo=Symbol.for("v-stc"),la=[];let kt=null;function de(e=!1){la.push(kt=e?null:[])}function tg(){la.pop(),kt=la[la.length-1]||null}let _a=1;function eu(e){_a+=e}function rm(e){return e.dynamicChildren=_a>0?kt||Or:null,tg(),_a>0&&kt&&kt.push(e),e}function Ee(e,t,n,r,a,i){return rm(Xe(e,t,n,r,a,i,!0))}function ft(e,t,n,r,a){return rm(Qe(e,t,n,r,a,!0))}function xa(e){return e?e.__v_isVNode===!0:!1}function br(e,t){return e.type===t.type&&e.key===t.key}const am=({key:e})=>e??null,Ti=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?De(e)||lt(e)||ce(e)?{i:Ye,r:e,k:t,f:!!n}:e:null);function Xe(e,t=null,n=null,r=0,a=null,i=e===je?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&am(t),ref:t&&Ti(t),scopeId:go,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:Ye};return s?(zl(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=De(n)?8:16),_a>0&&!o&&kt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&kt.push(l),l}const Qe=ng;function ng(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===Rd)&&(e=kn),xa(e)){const s=sr(e,t,!0);return n&&zl(s,n),_a>0&&!i&&kt&&(s.shapeFlag&6?kt[kt.indexOf(e)]=s:kt.push(s)),s.patchFlag|=-2,s}if(dg(e)&&(e=e.__vccOpts),t){t=rg(t);let{class:s,style:l}=t;s&&!De(s)&&(t.class=Cr(s)),Oe(l)&&(Ed(l)&&!ne(l)&&(l=qe({},l)),t.style=Ht(l))}const o=De(e)?1:Id(e)?128:Jv(e)?64:Oe(e)?4:ce(e)?2:0;return Xe(e,t,n,r,a,o,i,!0)}function rg(e){return e?Ed(e)||Gd(e)?qe({},e):e:null}function sr(e,t,n=!1,r=!1){const{props:a,ref:i,patchFlag:o,children:s,transition:l}=e,u=t?Ki(a||{},t):a,c={__v_isVNode:!0,__v_skip:!0,type:e.type,props:u,key:u&&am(u),ref:t&&t.ref?n&&i?ne(i)?i.concat(Ti(t)):[i,Ti(t)]:Ti(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:s,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==je?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&sr(e.ssContent),ssFallback:e.ssFallback&&sr(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l&&r&&(c.transition=l.clone(c)),c}function jl(e=" ",t=0){return Qe(yo,null,e,t)}function He(e="",t=!1){return t?(de(),ft(kn,null,e)):Qe(kn,null,e)}function It(e){return e==null||typeof e=="boolean"?Qe(kn):ne(e)?Qe(je,null,e.slice()):typeof e=="object"?wn(e):Qe(yo,null,String(e))}function wn(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:sr(e)}function zl(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(ne(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),zl(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!Gd(t)?t._ctx=Ye:a===3&&Ye&&(Ye.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else ce(t)?(t={default:t,_ctx:Ye},n=32):(t=String(t),r&64?(n=16,t=[jl(t)]):n=8);e.children=t,e.shapeFlag|=n}function Ki(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=Cr([t.class,r.class]));else if(a==="style")t.style=Ht([t.style,r.style]);else if(co(a)){const i=t[a],o=r[a];o&&i!==o&&!(ne(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function vt(e,t,n,r=null){Pt(e,t,7,[n,r])}const ag=Vd();let ig=0;function og(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||ag,i={uid:ig++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new $h(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Jd(r,a),emitsOptions:Nd(r,a),emit:null,emitted:null,propsDefaults:ke,inheritAttrs:r.inheritAttrs,ctx:ke,data:ke,props:ke,attrs:ke,slots:ke,refs:ke,setupState:ke,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=cv.bind(null,i),e.ce&&e.ce(i),i}let Je=null;const sg=()=>Je||Ye;let Gi,Ts;{const e=cd(),t=(n,r)=>{let a;return(a=e[n])||(a=e[n]=[]),a.push(r),i=>{a.length>1?a.forEach(o=>o(i)):a[0](i)}};Gi=t("__VUE_INSTANCE_SETTERS__",n=>Je=n),Ts=t("__VUE_SSR_SETTERS__",n=>wo=n)}const Ia=e=>{const t=Je;return Gi(e),e.scope.on(),()=>{e.scope.off(),Gi(t)}},tu=()=>{Je&&Je.scope.off(),Gi(null)};function im(e){return e.vnode.shapeFlag&4}let wo=!1;function lg(e,t=!1){t&&Ts(t);const{props:n,children:r}=e.vnode,a=im(e);Hv(e,n,a,t),Wv(e,r);const i=a?cg(e,t):void 0;return t&&Ts(!1),i}function cg(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Mv);const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?fg(e):null,i=Ia(e);Ln();const o=On(r,e,0,[e.props,a]);if(In(),i(),id(o)){if(o.then(tu,tu),t)return o.then(s=>{nu(e,s,t)}).catch(s=>{ho(s,e,0)});e.asyncDep=o}else nu(e,o,t)}else om(e,t)}function nu(e,t,n){ce(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Oe(t)&&(e.setupState=kd(t)),om(e,n)}let ru;function om(e,t,n){const r=e.type;if(!e.render){if(!t&&ru&&!r.render){const a=r.template||Il(e).template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,u=qe(qe({isCustomElement:i,delimiters:s},o),l);r.render=ru(a,u)}}e.render=r.render||gt}{const a=Ia(e);Ln();try{Rv(e)}finally{In(),a()}}}const ug={get(e,t){return st(e,"get",""),e[t]}};function fg(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,ug),slots:e.slots,emit:e.emit,expose:t}}function _o(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(kd(Qh(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in ia)return ia[n](e)},has(t,n){return n in t||n in ia}}))}function Cs(e,t=!0){return ce(e)?e.displayName||e.name:e.name||t&&e.__name}function dg(e){return ce(e)&&"__vccOpts"in e}const Ue=(e,t)=>ev(e,t,wo);function sm(e,t,n){const r=arguments.length;return r===2?Oe(t)&&!ne(t)?xa(t)?Qe(e,null,[t]):Qe(e,t):Qe(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&xa(n)&&(n=[n]),Qe(e,t,n))}const mg="3.4.27";/**
* @vue/runtime-dom v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const pg="http://www.w3.org/2000/svg",hg="http://www.w3.org/1998/Math/MathML",_n=typeof document<"u"?document:null,au=_n&&_n.createElement("template"),vg={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t==="svg"?_n.createElementNS(pg,e):t==="mathml"?_n.createElementNS(hg,e):_n.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>_n.createTextNode(e),createComment:e=>_n.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>_n.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{au.innerHTML=r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e;const s=au.content;if(r==="svg"||r==="mathml"){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},gg=Symbol("_vtc");function bg(e,t,n){const r=e[gg];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Xi=Symbol("_vod"),lm=Symbol("_vsh"),qn={beforeMount(e,{value:t},{transition:n}){e[Xi]=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):Gr(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!=!n&&(r?t?(r.beforeEnter(e),Gr(e,!0),r.enter(e)):r.leave(e,()=>{Gr(e,!1)}):Gr(e,t))},beforeUnmount(e,{value:t}){Gr(e,t)}};function Gr(e,t){e.style.display=t?e[Xi]:"none",e[lm]=!t}const yg=Symbol(""),wg=/(^|;)\s*display\s*:/;function _g(e,t,n){const r=e.style,a=De(n);let i=!1;if(n&&!a){if(t)if(De(t))for(const o of t.split(";")){const s=o.slice(0,o.indexOf(":")).trim();n[s]==null&&Ci(r,s,"")}else for(const o in t)n[o]==null&&Ci(r,o,"");for(const o in n)o==="display"&&(i=!0),Ci(r,o,n[o])}else if(a){if(t!==n){const o=r[yg];o&&(n+=";"+o),r.cssText=n,i=wg.test(n)}}else t&&e.removeAttribute("style");Xi in e&&(e[Xi]=i?r.display:"",e[lm]&&(r.display="none"))}const iu=/\s*!important$/;function Ci(e,t,n){if(ne(n))n.forEach(r=>Ci(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=xg(e,t);iu.test(n)?e.setProperty(hr(r),n.replace(iu,""),"important"):e[r]=n}}const ou=["Webkit","Moz","ms"],qo={};function xg(e,t){const n=qo[t];if(n)return n;let r=Wt(t);if(r!=="filter"&&r in e)return qo[t]=r;r=fo(r);for(let a=0;a<ou.length;a++){const i=ou[a]+r;if(i in e)return qo[t]=i}return t}const su="http://www.w3.org/1999/xlink";function Ag(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(su,t.slice(6,t.length)):e.setAttributeNS(su,t,n);else{const i=Th(t);n==null||i&&!ud(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function Eg(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n??"";return}const s=e.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){const u=s==="OPTION"?e.getAttribute("value")||"":e.value,c=n??"";(u!==c||!("_value"in e))&&(e.value=c),n==null&&e.removeAttribute(t),e._value=n;return}let l=!1;if(n===""||n==null){const u=typeof e[t];u==="boolean"?n=ud(n):n==null&&u==="string"?(n="",l=!0):u==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}function Gt(e,t,n,r){e.addEventListener(t,n,r)}function Og(e,t,n,r){e.removeEventListener(t,n,r)}const lu=Symbol("_vei");function Sg(e,t,n,r,a=null){const i=e[lu]||(e[lu]={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=kg(t);if(r){const u=i[t]=$g(r,a);Gt(e,s,u,l)}else o&&(Og(e,s,o,l),i[t]=void 0)}}const cu=/(?:Once|Passive|Capture)$/;function kg(e){let t;if(cu.test(e)){t={};let r;for(;r=e.match(cu);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):hr(e.slice(2)),t]}let Ko=0;const Tg=Promise.resolve(),Cg=()=>Ko||(Tg.then(()=>Ko=0),Ko=Date.now());function $g(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Pt(Pg(r,n.value),t,5,[r])};return n.value=e,n.attached=Cg(),n}function Pg(e,t){if(ne(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const uu=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Ng=(e,t,n,r,a,i,o,s,l)=>{const u=a==="svg";t==="class"?bg(e,r,u):t==="style"?_g(e,n,r):co(t)?yl(t)||Sg(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Mg(e,t,r,u))?Eg(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Ag(e,t,r,u))};function Mg(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&uu(t)&&ce(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const a=e.tagName;if(a==="IMG"||a==="VIDEO"||a==="CANVAS"||a==="SOURCE")return!1}return uu(t)&&De(n)?!1:t in e}const Tn=e=>{const t=e.props["onUpdate:modelValue"]||!1;return ne(t)?n=>Tr(t,n):t};function Rg(e){e.target.composing=!0}function fu(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const yt=Symbol("_assign"),du={created(e,{modifiers:{lazy:t,trim:n,number:r}},a){e[yt]=Tn(a);const i=r||a.props&&a.props.type==="number";Gt(e,t?"change":"input",o=>{if(o.target.composing)return;let s=e.value;n&&(s=s.trim()),i&&(s=Hi(s)),e[yt](s)}),n&&Gt(e,"change",()=>{e.value=e.value.trim()}),t||(Gt(e,"compositionstart",Rg),Gt(e,"compositionend",fu),Gt(e,"change",fu))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:a}},i){if(e[yt]=Tn(i),e.composing)return;const o=(a||e.type==="number")&&!/^0\d/.test(e.value)?Hi(e.value):e.value,s=t??"";o!==s&&(document.activeElement===e&&e.type!=="range"&&(n||r&&e.value.trim()===s)||(e.value=s))}},Lg={deep:!0,created(e,t,n){e[yt]=Tn(n),Gt(e,"change",()=>{const r=e._modelValue,a=Lr(e),i=e.checked,o=e[yt];if(ne(r)){const s=xl(r,a),l=s!==-1;if(i&&!l)o(r.concat(a));else if(!i&&l){const u=[...r];u.splice(s,1),o(u)}}else if(Hr(r)){const s=new Set(r);i?s.add(a):s.delete(a),o(s)}else o(cm(e,i))})},mounted:mu,beforeUpdate(e,t,n){e[yt]=Tn(n),mu(e,t,n)}};function mu(e,{value:t,oldValue:n},r){e._modelValue=t,ne(t)?e.checked=xl(t,r.props.value)>-1:Hr(t)?e.checked=t.has(r.props.value):t!==n&&(e.checked=or(t,cm(e,!0)))}const Ig={created(e,{value:t},n){e.checked=or(t,n.props.value),e[yt]=Tn(n),Gt(e,"change",()=>{e[yt](Lr(e))})},beforeUpdate(e,{value:t,oldValue:n},r){e[yt]=Tn(r),t!==n&&(e.checked=or(t,r.props.value))}},Dg={deep:!0,created(e,{value:t,modifiers:{number:n}},r){const a=Hr(t);Gt(e,"change",()=>{const i=Array.prototype.filter.call(e.options,o=>o.selected).map(o=>n?Hi(Lr(o)):Lr(o));e[yt](e.multiple?a?new Set(i):i:i[0]),e._assigning=!0,Yi(()=>{e._assigning=!1})}),e[yt]=Tn(r)},mounted(e,{value:t,modifiers:{number:n}}){pu(e,t)},beforeUpdate(e,t,n){e[yt]=Tn(n)},updated(e,{value:t,modifiers:{number:n}}){e._assigning||pu(e,t)}};function pu(e,t,n){const r=e.multiple,a=ne(t);if(!(r&&!a&&!Hr(t))){for(let i=0,o=e.options.length;i<o;i++){const s=e.options[i],l=Lr(s);if(r)if(a){const u=typeof l;u==="string"||u==="number"?s.selected=t.some(c=>String(c)===String(l)):s.selected=xl(t,l)>-1}else s.selected=t.has(l);else if(or(Lr(s),t)){e.selectedIndex!==i&&(e.selectedIndex=i);return}}!r&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function Lr(e){return"_value"in e?e._value:e.value}function cm(e,t){const n=t?"_trueValue":"_falseValue";return n in e?e[n]:t}const aA={created(e,t,n){ii(e,t,n,null,"created")},mounted(e,t,n){ii(e,t,n,null,"mounted")},beforeUpdate(e,t,n,r){ii(e,t,n,r,"beforeUpdate")},updated(e,t,n,r){ii(e,t,n,r,"updated")}};function Fg(e,t){switch(e){case"SELECT":return Dg;case"TEXTAREA":return du;default:switch(t){case"checkbox":return Lg;case"radio":return Ig;default:return du}}}function ii(e,t,n,r,a){const o=Fg(e.tagName,n.props&&n.props.type)[a];o&&o(e,t,n,r)}const jg=["ctrl","shift","alt","meta"],zg={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>jg.some(n=>e[`${n}Key`]&&!t.includes(n))},Kt=(e,t)=>{const n=e._withMods||(e._withMods={}),r=t.join(".");return n[r]||(n[r]=(a,...i)=>{for(let o=0;o<t.length;o++){const s=zg[t[o]];if(s&&s(a,t))return}return e(a,...i)})},Bg={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Bn=(e,t)=>{const n=e._withKeys||(e._withKeys={}),r=t.join(".");return n[r]||(n[r]=a=>{if(!("key"in a))return;const i=hr(a.key);if(t.some(o=>o===i||Bg[o]===i))return e(a)})},Hg=qe({patchProp:Ng},vg);let hu;function um(){return hu||(hu=qv(Hg))}const Ug=(...e)=>{um().render(...e)},Bl=(...e)=>{const t=um().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=Wg(r);if(!a)return;const i=t._component;!ce(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,Yg(a));return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function Yg(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Wg(e){return De(e)?document.querySelector(e):e}var Yr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Da(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var fm={exports:{}};(function(e,t){(function(n,r){e.exports=r()})(Yr,function(){var n=1e3,r=6e4,a=36e5,i="millisecond",o="second",s="minute",l="hour",u="day",c="week",f="month",p="quarter",m="year",b="date",y="Invalid Date",A=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,g=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,h={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(Y){var D=["th","st","nd","rd"],$=Y%100;return"["+Y+(D[($-20)%10]||D[$]||D[0])+"]"}},_=function(Y,D,$){var M=String(Y);return!M||M.length>=D?Y:""+Array(D+1-M.length).join($)+Y},d={s:_,z:function(Y){var D=-Y.utcOffset(),$=Math.abs(D),M=Math.floor($/60),C=$%60;return(D<=0?"+":"-")+_(M,2,"0")+":"+_(C,2,"0")},m:function Y(D,$){if(D.date()<$.date())return-Y($,D);var M=12*($.year()-D.year())+($.month()-D.month()),C=D.clone().add(M,f),V=$-C<0,G=D.clone().add(M+(V?-1:1),f);return+(-(M+($-C)/(V?C-G:G-C))||0)},a:function(Y){return Y<0?Math.ceil(Y)||0:Math.floor(Y)},p:function(Y){return{M:f,y:m,w:c,d:u,D:b,h:l,m:s,s:o,ms:i,Q:p}[Y]||String(Y||"").toLowerCase().replace(/s$/,"")},u:function(Y){return Y===void 0}},E="en",x={};x[E]=h;var T="$isDayjsObject",F=function(Y){return Y instanceof ie||!(!Y||!Y[T])},I=function Y(D,$,M){var C;if(!D)return E;if(typeof D=="string"){var V=D.toLowerCase();x[V]&&(C=V),$&&(x[V]=$,C=V);var G=D.split("-");if(!C&&G.length>1)return Y(G[0])}else{var ae=D.name;x[ae]=D,C=ae}return!M&&C&&(E=C),C||!M&&E},H=function(Y,D){if(F(Y))return Y.clone();var $=typeof D=="object"?D:{};return $.date=Y,$.args=arguments,new ie($)},B=d;B.l=I,B.i=F,B.w=function(Y,D){return H(Y,{locale:D.$L,utc:D.$u,x:D.$x,$offset:D.$offset})};var ie=function(){function Y($){this.$L=I($.locale,null,!0),this.parse($),this.$x=this.$x||$.x||{},this[T]=!0}var D=Y.prototype;return D.parse=function($){this.$d=function(M){var C=M.date,V=M.utc;if(C===null)return new Date(NaN);if(B.u(C))return new Date;if(C instanceof Date)return new Date(C);if(typeof C=="string"&&!/Z$/i.test(C)){var G=C.match(A);if(G){var ae=G[2]-1||0,oe=(G[7]||"0").substring(0,3);return V?new Date(Date.UTC(G[1],ae,G[3]||1,G[4]||0,G[5]||0,G[6]||0,oe)):new Date(G[1],ae,G[3]||1,G[4]||0,G[5]||0,G[6]||0,oe)}}return new Date(C)}($),this.init()},D.init=function(){var $=this.$d;this.$y=$.getFullYear(),this.$M=$.getMonth(),this.$D=$.getDate(),this.$W=$.getDay(),this.$H=$.getHours(),this.$m=$.getMinutes(),this.$s=$.getSeconds(),this.$ms=$.getMilliseconds()},D.$utils=function(){return B},D.isValid=function(){return this.$d.toString()!==y},D.isSame=function($,M){var C=H($);return this.startOf(M)<=C&&C<=this.endOf(M)},D.isAfter=function($,M){return H($)<this.startOf(M)},D.isBefore=function($,M){return this.endOf(M)<H($)},D.$g=function($,M,C){return B.u($)?this[M]:this.set(C,$)},D.unix=function(){return Math.floor(this.valueOf()/1e3)},D.valueOf=function(){return this.$d.getTime()},D.startOf=function($,M){var C=this,V=!!B.u(M)||M,G=B.p($),ae=function(Fe,pe){var Me=B.w(C.$u?Date.UTC(C.$y,pe,Fe):new Date(C.$y,pe,Fe),C);return V?Me:Me.endOf(u)},oe=function(Fe,pe){return B.w(C.toDate()[Fe].apply(C.toDate("s"),(V?[0,0,0,0]:[23,59,59,999]).slice(pe)),C)},ge=this.$W,be=this.$M,_e=this.$D,xe="set"+(this.$u?"UTC":"");switch(G){case m:return V?ae(1,0):ae(31,11);case f:return V?ae(1,be):ae(0,be+1);case c:var Re=this.$locale().weekStart||0,Ne=(ge<Re?ge+7:ge)-Re;return ae(V?_e-Ne:_e+(6-Ne),be);case u:case b:return oe(xe+"Hours",0);case l:return oe(xe+"Minutes",1);case s:return oe(xe+"Seconds",2);case o:return oe(xe+"Milliseconds",3);default:return this.clone()}},D.endOf=function($){return this.startOf($,!1)},D.$set=function($,M){var C,V=B.p($),G="set"+(this.$u?"UTC":""),ae=(C={},C[u]=G+"Date",C[b]=G+"Date",C[f]=G+"Month",C[m]=G+"FullYear",C[l]=G+"Hours",C[s]=G+"Minutes",C[o]=G+"Seconds",C[i]=G+"Milliseconds",C)[V],oe=V===u?this.$D+(M-this.$W):M;if(V===f||V===m){var ge=this.clone().set(b,1);ge.$d[ae](oe),ge.init(),this.$d=ge.set(b,Math.min(this.$D,ge.daysInMonth())).$d}else ae&&this.$d[ae](oe);return this.init(),this},D.set=function($,M){return this.clone().$set($,M)},D.get=function($){return this[B.p($)]()},D.add=function($,M){var C,V=this;$=Number($);var G=B.p(M),ae=function(be){var _e=H(V);return B.w(_e.date(_e.date()+Math.round(be*$)),V)};if(G===f)return this.set(f,this.$M+$);if(G===m)return this.set(m,this.$y+$);if(G===u)return ae(1);if(G===c)return ae(7);var oe=(C={},C[s]=r,C[l]=a,C[o]=n,C)[G]||1,ge=this.$d.getTime()+$*oe;return B.w(ge,this)},D.subtract=function($,M){return this.add(-1*$,M)},D.format=function($){var M=this,C=this.$locale();if(!this.isValid())return C.invalidDate||y;var V=$||"YYYY-MM-DDTHH:mm:ssZ",G=B.z(this),ae=this.$H,oe=this.$m,ge=this.$M,be=C.weekdays,_e=C.months,xe=C.meridiem,Re=function(pe,Me,Ke,v){return pe&&(pe[Me]||pe(M,V))||Ke[Me].slice(0,v)},Ne=function(pe){return B.s(ae%12||12,pe,"0")},Fe=xe||function(pe,Me,Ke){var v=pe<12?"AM":"PM";return Ke?v.toLowerCase():v};return V.replace(g,function(pe,Me){return Me||function(Ke){switch(Ke){case"YY":return String(M.$y).slice(-2);case"YYYY":return B.s(M.$y,4,"0");case"M":return ge+1;case"MM":return B.s(ge+1,2,"0");case"MMM":return Re(C.monthsShort,ge,_e,3);case"MMMM":return Re(_e,ge);case"D":return M.$D;case"DD":return B.s(M.$D,2,"0");case"d":return String(M.$W);case"dd":return Re(C.weekdaysMin,M.$W,be,2);case"ddd":return Re(C.weekdaysShort,M.$W,be,3);case"dddd":return be[M.$W];case"H":return String(ae);case"HH":return B.s(ae,2,"0");case"h":return Ne(1);case"hh":return Ne(2);case"a":return Fe(ae,oe,!0);case"A":return Fe(ae,oe,!1);case"m":return String(oe);case"mm":return B.s(oe,2,"0");case"s":return String(M.$s);case"ss":return B.s(M.$s,2,"0");case"SSS":return B.s(M.$ms,3,"0");case"Z":return G}return null}(pe)||G.replace(":","")})},D.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},D.diff=function($,M,C){var V,G=this,ae=B.p(M),oe=H($),ge=(oe.utcOffset()-this.utcOffset())*r,be=this-oe,_e=function(){return B.m(G,oe)};switch(ae){case m:V=_e()/12;break;case f:V=_e();break;case p:V=_e()/3;break;case c:V=(be-ge)/6048e5;break;case u:V=(be-ge)/864e5;break;case l:V=be/a;break;case s:V=be/r;break;case o:V=be/n;break;default:V=be}return C?V:B.a(V)},D.daysInMonth=function(){return this.endOf(f).$D},D.$locale=function(){return x[this.$L]},D.locale=function($,M){if(!$)return this.$L;var C=this.clone(),V=I($,M,!0);return V&&(C.$L=V),C},D.clone=function(){return B.w(this.$d,this)},D.toDate=function(){return new Date(this.valueOf())},D.toJSON=function(){return this.isValid()?this.toISOString():null},D.toISOString=function(){return this.$d.toISOString()},D.toString=function(){return this.$d.toUTCString()},Y}(),se=ie.prototype;return H.prototype=se,[["$ms",i],["$s",o],["$m",s],["$H",l],["$W",u],["$M",f],["$y",m],["$D",b]].forEach(function(Y){se[Y[1]]=function(D){return this.$g(D,Y[0],Y[1])}}),H.extend=function(Y,D){return Y.$i||(Y(D,ie,H),Y.$i=!0),H},H.locale=I,H.isDayjs=F,H.unix=function(Y){return H(1e3*Y)},H.en=x[E],H.Ls=x,H.p={},H})})(fm);var dm=fm.exports;const Vt=Da(dm);var Vg={exports:{}};(function(e,t){(function(n,r){e.exports=r(dm)})(Yr,function(n){function r(o){return o&&typeof o=="object"&&"default"in o?o:{default:o}}var a=r(n),i={name:"zh-cn",weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"周日_周一_周二_周三_周四_周五_周六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),ordinal:function(o,s){return s==="W"?o+"周":o+"日"},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日Ah点mm分",LLLL:"YYYY年M月D日ddddAh点mm分",l:"YYYY/M/D",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日dddd HH:mm"},relativeTime:{future:"%s内",past:"%s前",s:"几秒",m:"1 分钟",mm:"%d 分钟",h:"1 小时",hh:"%d 小时",d:"1 天",dd:"%d 天",M:"1 个月",MM:"%d 个月",y:"1 年",yy:"%d 年"},meridiem:function(o,s){var l=100*o+s;return l<600?"凌晨":l<900?"早上":l<1100?"上午":l<1300?"中午":l<1800?"下午":"晚上"}};return a.default.locale(i,null,!0),i})})(Vg);var mm={exports:{}};(function(e,t){(function(n,r){e.exports=r()})(Yr,function(){var n={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},r=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,a=/\d\d/,i=/\d\d?/,o=/\d*[^-_:/,()\s\d]+/,s={},l=function(y){return(y=+y)+(y>68?1900:2e3)},u=function(y){return function(A){this[y]=+A}},c=[/[+-]\d\d:?(\d\d)?|Z/,function(y){(this.zone||(this.zone={})).offset=function(A){if(!A||A==="Z")return 0;var g=A.match(/([+-]|\d\d)/g),h=60*g[1]+(+g[2]||0);return h===0?0:g[0]==="+"?-h:h}(y)}],f=function(y){var A=s[y];return A&&(A.indexOf?A:A.s.concat(A.f))},p=function(y,A){var g,h=s.meridiem;if(h){for(var _=1;_<=24;_+=1)if(y.indexOf(h(_,0,A))>-1){g=_>12;break}}else g=y===(A?"pm":"PM");return g},m={A:[o,function(y){this.afternoon=p(y,!1)}],a:[o,function(y){this.afternoon=p(y,!0)}],S:[/\d/,function(y){this.milliseconds=100*+y}],SS:[a,function(y){this.milliseconds=10*+y}],SSS:[/\d{3}/,function(y){this.milliseconds=+y}],s:[i,u("seconds")],ss:[i,u("seconds")],m:[i,u("minutes")],mm:[i,u("minutes")],H:[i,u("hours")],h:[i,u("hours")],HH:[i,u("hours")],hh:[i,u("hours")],D:[i,u("day")],DD:[a,u("day")],Do:[o,function(y){var A=s.ordinal,g=y.match(/\d+/);if(this.day=g[0],A)for(var h=1;h<=31;h+=1)A(h).replace(/\[|\]/g,"")===y&&(this.day=h)}],M:[i,u("month")],MM:[a,u("month")],MMM:[o,function(y){var A=f("months"),g=(f("monthsShort")||A.map(function(h){return h.slice(0,3)})).indexOf(y)+1;if(g<1)throw new Error;this.month=g%12||g}],MMMM:[o,function(y){var A=f("months").indexOf(y)+1;if(A<1)throw new Error;this.month=A%12||A}],Y:[/[+-]?\d+/,u("year")],YY:[a,function(y){this.year=l(y)}],YYYY:[/\d{4}/,u("year")],Z:c,ZZ:c};function b(y){var A,g;A=y,g=s&&s.formats;for(var h=(y=A.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(I,H,B){var ie=B&&B.toUpperCase();return H||g[B]||n[B]||g[ie].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(se,Y,D){return Y||D.slice(1)})})).match(r),_=h.length,d=0;d<_;d+=1){var E=h[d],x=m[E],T=x&&x[0],F=x&&x[1];h[d]=F?{regex:T,parser:F}:E.replace(/^\[|\]$/g,"")}return function(I){for(var H={},B=0,ie=0;B<_;B+=1){var se=h[B];if(typeof se=="string")ie+=se.length;else{var Y=se.regex,D=se.parser,$=I.slice(ie),M=Y.exec($)[0];D.call(H,M),I=I.replace(M,"")}}return function(C){var V=C.afternoon;if(V!==void 0){var G=C.hours;V?G<12&&(C.hours+=12):G===12&&(C.hours=0),delete C.afternoon}}(H),H}}return function(y,A,g){g.p.customParseFormat=!0,y&&y.parseTwoDigitYear&&(l=y.parseTwoDigitYear);var h=A.prototype,_=h.parse;h.parse=function(d){var E=d.date,x=d.utc,T=d.args;this.$u=x;var F=T[1];if(typeof F=="string"){var I=T[2]===!0,H=T[3]===!0,B=I||H,ie=T[2];H&&(ie=T[2]),s=this.$locale(),!I&&ie&&(s=g.Ls[ie]),this.$d=function($,M,C){try{if(["x","X"].indexOf(M)>-1)return new Date((M==="X"?1e3:1)*$);var V=b(M)($),G=V.year,ae=V.month,oe=V.day,ge=V.hours,be=V.minutes,_e=V.seconds,xe=V.milliseconds,Re=V.zone,Ne=new Date,Fe=oe||(G||ae?1:Ne.getDate()),pe=G||Ne.getFullYear(),Me=0;G&&!ae||(Me=ae>0?ae-1:Ne.getMonth());var Ke=ge||0,v=be||0,w=_e||0,O=xe||0;return Re?new Date(Date.UTC(pe,Me,Fe,Ke,v,w,O+60*Re.offset*1e3)):C?new Date(Date.UTC(pe,Me,Fe,Ke,v,w,O)):new Date(pe,Me,Fe,Ke,v,w,O)}catch{return new Date("")}}(E,F,x),this.init(),ie&&ie!==!0&&(this.$L=this.locale(ie).$L),B&&E!=this.format(F)&&(this.$d=new Date("")),s={}}else if(F instanceof Array)for(var se=F.length,Y=1;Y<=se;Y+=1){T[1]=F[Y-1];var D=g.apply(this,T);if(D.isValid()){this.$d=D.$d,this.$L=D.$L,this.init();break}Y===se&&(this.$d=new Date(""))}else _.call(this,d)}}})})(mm);var qg=mm.exports;const Kg=Da(qg);var pm={exports:{}};(function(e,t){(function(n,r){e.exports=r()})(Yr,function(){return function(n,r,a){n=n||{};var i=r.prototype,o={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function s(u,c,f,p){return i.fromToBase(u,c,f,p)}a.en.relativeTime=o,i.fromToBase=function(u,c,f,p,m){for(var b,y,A,g=f.$locale().relativeTime||o,h=n.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],_=h.length,d=0;d<_;d+=1){var E=h[d];E.d&&(b=p?a(u).diff(f,E.d,!0):f.diff(u,E.d,!0));var x=(n.rounding||Math.round)(Math.abs(b));if(A=b>0,x<=E.r||!E.r){x<=1&&d>0&&(E=h[d-1]);var T=g[E.l];m&&(x=m(""+x)),y=typeof T=="string"?T.replace("%d",x):T(x,c,E.l,A);break}}if(c)return y;var F=A?g.future:g.past;return typeof F=="function"?F(y):F.replace("%s",y)},i.to=function(u,c){return s(u,c,this,!0)},i.from=function(u,c){return s(u,c,this)};var l=function(u){return u.$u?a.utc():a()};i.toNow=function(u){return this.to(l(this),u)},i.fromNow=function(u){return this.from(l(this),u)}}})})(pm);var Gg=pm.exports;const Xg=Da(Gg);var hm={exports:{}};(function(e,t){(function(n,r){e.exports=r()})(Yr,function(){return function(n,r,a){r.prototype.isBetween=function(i,o,s,l){var u=a(i),c=a(o),f=(l=l||"()")[0]==="(",p=l[1]===")";return(f?this.isAfter(u,s):!this.isBefore(u,s))&&(p?this.isBefore(c,s):!this.isAfter(c,s))||(f?this.isBefore(u,s):!this.isAfter(u,s))&&(p?this.isAfter(c,s):!this.isBefore(c,s))}}})})(hm);var Jg=hm.exports;const Zg=Da(Jg);var vm={exports:{}};(function(e,t){(function(n,r){e.exports=r()})(Yr,function(){return function(n,r){r.prototype.weekday=function(a){var i=this.$locale().weekStart||0,o=this.$W,s=(o<i?o+7:o)-i;return this.$utils().u(a)?s:this.subtract(s,"day").add(a,"day")}}})})(vm);var Qg=vm.exports;const eb=Da(Qg);Vt.extend(Kg);Vt.extend(Xg);Vt.extend(Zg);Vt.extend(eb);Vt.locale("zh-cn");Vt.prototype.defaultFormat="YYYY-MM-DD HH:mm:ss";Vt.prototype.formatRaw=Vt.prototype.format;Vt.prototype.format=function(e=this.defaultFormat){return this.formatRaw(e||this.defaultFormat)};const tb="modulepreload",nb=function(e,t){return new URL(e,t).href},vu={},Hn=function(t,n,r){let a=Promise.resolve();if(n&&n.length>0){const i=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),s=o?.nonce||o?.getAttribute("nonce");a=Promise.all(n.map(l=>{if(l=nb(l,r),l in vu)return;vu[l]=!0;const u=l.endsWith(".css"),c=u?'[rel="stylesheet"]':"";if(!!r)for(let m=i.length-1;m>=0;m--){const b=i[m];if(b.href===l&&(!u||b.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${c}`))return;const p=document.createElement("link");if(p.rel=u?"stylesheet":tb,u||(p.as="script",p.crossOrigin=""),p.href=l,s&&p.setAttribute("nonce",s),document.head.appendChild(p),u)return new Promise((m,b)=>{p.addEventListener("load",m),p.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${l}`)))})}))}return a.then(()=>t()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})},lr=globalThis??global??window;if(lr===void 0)throw Error("Could not find global variable");const Hl=lr?.process?.env??lr;if(Hl===void 0)throw Error("Could not find global enviroment");const gm=e=>e.split(";").filter(t=>t.trim()).map(t=>t.trim().toLowerCase()),$s=gm(((Hl?.NENV_I18N_LOCALE??"")+";en").replace(/(^|;)\s*en\s*(?=;\s*en\s*$)/,"")),rb=gm(((Hl?.NENV_I18N_FORMAT??"")+";proto").replace(/(^|;)\s*proto\s*(?=;\s*proto\s*$)/,""));function bm(e,t,n=$s){const r=lr.NI18N;n.map(a=>{try{const i=t[a];r.addResourceBundle(a,e,i,!0,!0)}catch{}})}if(!("NI18N"in lr)){const e=lr.NI18N=(await Hn(()=>import("./i18next-DU_hMuVV.js"),[],import.meta.url)).default;e.init({lng:$s[0],fallbackLng:$s,resources:{}});const t=e.translator.interpolator.escape,n=r=>r?.toString?.()?.replace?.(/([~{}[\]])/g,"\\$1")??r;e.services.formatter.add("term@hades",r=>`~[${n(r)}]`),e.services.formatter.add("value@hades",r=>`~{${n(r)}}`),e.services.formatter.add("valueType",r=>`${t(r)} <${typeof r}>`),e.services.formatter.add("valueTypeUnescape",r=>`${r} <${typeof r}>`),e.services.formatter.add("valueType@hades",r=>`~{${t(n(r))} <${typeof r}>}`),e.services.formatter.add("valueTypeUnescape@hades",r=>`~{${n(r)} <${typeof r}>}`)}function ab(e,t={},n,r=""){const a=lr.NI18N.t(e,Object.assign({},t,{lng:n}));return r?`${r} --> ${a}`:a}function ym(e,t,n=rb){return(r,a,i="")=>ab(n.map(o=>`${e}:${r}@${o}`),a,t,i)}const ib={"invalidStringifyReplacer@proto":"'replacer' argument must be of type function, value: {{-value,valueType}}","invalidStringifyReplacer@hades":"~[replacer] argument must be of type ~{function}, ~[value] {{-value,valueType@hades}}","invalidParseProtoAction@proto":"'option.protoAction' argument must be one of 'error', 'ignore', 'preserve' or undefined, value: {{-value,valueType}}","invalidParseProtoAction@hades":"~[option.protoAction] argument must be one of ~{'error'}, ~{'ignore'}, ~{'preserve'} or ~{undefined}, ~[value] {{-value,valueType@hades}}","invalidParseConstructorAction@proto":"'option.constructorAction' argument must be one of 'error', 'ignore', 'preserve' or undefined, value: {{-value,valueType}}","invalidParseConstructorAction@hades":"~[option.constructorAction] argument must be one of ~{'error'}, ~{'ignore'}, ~{'preserve'} or ~{undefined}, ~[value] {{-value,valueType@hades}}"},ob={ArgumentError:ib,SyntaxError:{"unexpectedChar@proto":"syntax error, expected char '{{charExpected}}' instead of '{{char}}', index: {{index}}","unexpectedChar@hades":"syntax error, expected ~[char] {{charExpected,value@hades}} instead of {{char,value@hades}}, index {{index,value@hades}}","unexpectedWord@proto":"syntax error, unexpected word '{{char}}', index: {{index}}","unexpectedWord@hades":"syntax error, unexpected ~[word] {{char,value@hades}}, index {{index,value@hades}}","badNumber@proto":"syntax error, bad number '{{string}}', index: {{index}}","badNumber@hades":"syntax error, bad ~[number] {{string,value@hades}}, index {{index,value@hades}}","badString@proto":"syntax error, bad string '{{string}}', index: {{index}}","badString@hades":"syntax error, bad ~[string] {{string,value@hades}}, index {{index,value@hades}}","badArray@proto":"syntax error, bad array '{{string}}', index: {{index}}","badArray@hades":"syntax error, bad ~[array] {{string,value@hades}}, index {{index,value@hades}}","badObject@proto":"syntax error, bad object '{{string}}', index: {{index}}","badObject@hades":"syntax error, bad ~[object] {{string,value@hades}}, index {{index,value@hades}}","containForbiddenPrototype@proto":"object contains forbidden prototype property '{{key}}', index: {{index}}","containForbiddenPrototype@hades":"object contains forbidden ~[prototype property] {{key,value@hades}}, index {{index,value@hades}}","containForbiddenConstructor@proto":"object contains forbidden constructor property '{{key}}', index: {{index}}","containForbiddenConstructor@hades":"object contains forbidden ~[constructor property] {{key,value@hades}}, index {{index,value@hades}}"}},sb={"invalidStringifyReplacer@proto":"参数'replacer'必须是类型function，值：{{-value,valueType}}","invalidStringifyReplacer@hades":"参数~[replacer]必须是类型~{function}，值{{-value,valueType@hades}}","invalidParseProtoAction@proto":"参数'option.protoAction'必须是'error'、'ignore'、'preserve'或undefined的其中之一，值：{{-value,valueType}}","invalidParseProtoAction@hades":"参数~[option.protoAction]必须是~{'error'}、~{'ignore'}、~{'preserve'}或~{undefined}的其中之一，值{{-value,valueType@hades}}","invalidParseConstructorAction@proto":"参数'option.constructorAction'必须是'error'、'ignore'、'preserve'或undefined的其中之一，值：{{-value,valueType}}","invalidParseConstructorAction@hades":"参数~[option.constructorAction]必须是~{'error'}、~{'ignore'}、~{'preserve'}或~{undefined}的其中之一，值{{-value,valueType@hades}}"},lb={ArgumentError:sb,SyntaxError:{"unexpectedChar@proto":"语法错误，预期字符是'{{charExpected}}'而非'{{char}}'，位置：{{index}}","unexpectedChar@hades":"语法错误，预期~[字符]是{{charExpected,value@hades}}而非{{char,value@hades}}，位置{{index,value@hades}}","unexpectedWord@proto":"语法错误，预期外的词语'{{char}}'，位置：{{index}}","unexpectedWord@hades":"语法错误，预期外的~[词语]{{char,value@hades}}，位置{{index,value@hades}}","badNumber@proto":"语法错误，损坏的数字'{{string}}'，位置：{{index}}","badNumber@hades":"语法错误，损坏的~[数字]{{string,value@hades}}，位置{{index,value@hades}}","badString@proto":"语法错误，损坏的字符串'{{string}}'，位置：{{index}}","badString@hades":"语法错误，损坏的~[字符串]{{string,value@hades}}，位置{{index,value@hades}}","badArray@proto":"语法错误，损坏的数组'{{string}}'，位置：{{index}}","badArray@hades":"语法错误，损坏的~[数组]'{{string,value@hades}}'，位置{{index,value@hades}}","badObject@proto":"语法错误，损坏的对象'{{string}}'，位置：{{index}}","badObject@hades":"语法错误，损坏的~[对象]'{{string,value@hades}}'，位置{{index,value@hades}}","containForbiddenPrototype@proto":"~[对象]包含禁止的原型属性'{{key}}'，位置：{{index}}","containForbiddenPrototype@hades":"~[对象]包含禁止的~[原型属性]{{key,value@hades}}，位置{{index,value@hades}}","containForbiddenConstructor@proto":"~[对象]包含禁止的构造属性'{{key}}'，位置：{{index}}","containForbiddenConstructor@hades":"~[对象]包含禁止的~[构造属性]{{key,value@hades}}，位置{{index,value@hades}}"}};bm("@nuogz/json-bigint",{en:ob,zh:lb});const Et=ym("@nuogz/json-bigint"),gu={'"':'"',"\\":"\\","/":"/",b:"\b",f:"\f",n:`
`,r:"\r",t:"	"},cb=/^(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])$/,ub=/^(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)$/;function fb(e,t,n){const r={preferParseAsBigInt:!1,preferBigIntString:!1,protoAction:"error",constructorAction:"error"};if(r.protoAction!="error"&&r.protoAction!="ignore"&&r.protoAction!="preserve")throw Error(Et("ArgumentError.invalidParseProtoAction",{value:r.protoAction},"JSONBigint.parse"));if(r.constructorAction!="error"&&r.constructorAction!="ignore"&&r.constructorAction!="preserve")throw Error(Et("ArgumentError.invalidParseConstructorAction",{value:r.constructorAction},"JSONBigint.parse"));const a=String(e);let i=0,o=" ";const s=()=>{for(;o&&o<=" ";)l()},l=A=>{if(A&&A!==o)throw Error(Et("SyntaxError.unexpectedChar",{charExpected:A,char:o,index:i},"JSONBigint.parse"));return o=a.charAt(i),i+=1,o},u=()=>{let A="";for(o=="-"&&(A="-",l("-"));o>="0"&&o<="9";)A+=o,l();if(o==".")for(A+=".";l()&&o>="0"&&o<="9";)A+=o;if(o=="e"||o=="E")for(A+=o,l(),(o=="-"||o=="+")&&(A+=o,l());o>="0"&&o<="9";)A+=o,l();const g=Number(A);if(!isFinite(g))throw Error(Et("SyntaxError.badNumber",{string:A,index:i},"JSONBigint.parse"));return Number.isSafeInteger(g)?r.preferParseAsBigInt?BigInt(g):g:r.preferBigIntString?A:/[.eE]/.test(A)?g:BigInt(A)},c=()=>{const A=i;let g="";if(o=='"'){let h=i;for(;l();){if(o=='"')return i-1>h&&(g+=a.substring(h,i-1)),l(),g;if(o=="\\"){if(i-1>h&&(g+=a.substring(h,i-1)),l(),o=="u"){let _=0;for(let d=0;d<4;d++){const E=parseInt(l(),16);if(!isFinite(E))break;_=_*16+E}g+=String.fromCharCode(_)}else if(typeof gu[o]=="string")g+=gu[o];else break;h=i}}}throw Error(Et("SyntaxError.badString",{string:a.substring(A-1,i-1),index:i},"JSONBigint.parse"))},f=()=>{switch(o){case"t":return l("t"),l("r"),l("u"),l("e"),!0;case"f":return l("f"),l("a"),l("l"),l("s"),l("e"),!1;case"n":return l("n"),l("u"),l("l"),l("l"),null}throw Error(Et("SyntaxError.unexpectedWord",{char:o,index:i},"JSONBigint.parse"))},p=()=>{const A=i,g=[];if(o=="["){if(l("["),s(),o=="]")return l("]"),g;for(;o;){if(g.push(b()),s(),o=="]")return l("]"),g;l(","),s()}}throw Error(Et("SyntaxError.badArray",{string:a.substring(A-1,i-1),index:i},"JSONBigint.parse"))},m=()=>{const A=i,g={};if(o=="{"){if(l("{"),s(),o=="}")return l("}"),g;for(;o;){const h=c();if(s(),l(":"),cb.test(h)){if(r.protoAction=="error")throw Error(Et("SyntaxError.containForbiddenPrototype",{key:h,index:i},"JSONBigint.parse"));r.protoAction=="ignore"?b():g[h]=b()}else if(ub.test(h)){if(r.constructorAction=="error")throw Error(Et("SyntaxError.containForbiddenConstructor",{key:h,index:i},"JSONBigint.parse"));r.constructorAction=="ignore"?b():g[h]=b()}else g[h]=b();if(s(),o=="}")return l("}"),g;l(","),s()}}throw Error(Et("SyntaxError.badObject",{string:a.substring(A-1,i-1),index:i},"JSONBigint.parse"))},b=()=>{switch(s(),o){case"{":return m();case"[":return p();case'"':return c();case"-":return u();default:return o>="0"&&o<="9"?u():f()}},y=b();if(s(),o)throw Error(Et("SyntaxError.SyntaxError",{char:o,index:i},"JSONBigint.parse"));return y}const Go=/[\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,db={'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t"},bu=e=>(Go.lastIndex=0,`"${Go.test(e)?e.replace(Go,n=>db[n]??"\\u"+n.charCodeAt(0).toString(16).padStart(4,"0")):e}"`);function mb(e,t,n){let r="",a="";const i=(o,s)=>{let l,u=r,c,f=s[o];switch(typeof f?.toJSON=="function"&&(f=f.toJSON(o)),typeof f){case"string":return bu(f);case"number":return isFinite(f)?String(f):"null";case"boolean":case"null":case"bigint":return String(f);case"object":{if(!f)return"null";if(r+=a,c=[],f instanceof Array){l=f.length;for(let b=0;b<l;b++)c[b]=i(b,f)||"null";const m=c.length==0?"[]":r?`[
`+r+c.join(`,
`+r)+`
`+u+"]":"["+c.join(",")+"]";return r=u,m}Object.keys(f).forEach(m=>{const b=i(m,f);b&&c.push(bu(m)+(r?": ":":")+b)});const p=c.length==0?"{}":r?`{
`+r+c.join(`,
`+r)+`
`+u+"}":"{"+c.join(",")+"}";return r=u,p}}};return i("",{"":e})}const yu=(e,t)=>fb(mb(e)),tr=e=>e?"":void 0;function wm(e,t){return function(){return e.apply(t,arguments)}}const{toString:pb}=Object.prototype,{getPrototypeOf:Ul}=Object,xo=(e=>t=>{const n=pb.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Mt=e=>(e=e.toLowerCase(),t=>xo(t)===e),Ao=e=>t=>typeof t===e,{isArray:Wr}=Array,Aa=Ao("undefined");function hb(e){return e!==null&&!Aa(e)&&e.constructor!==null&&!Aa(e.constructor)&&wt(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const _m=Mt("ArrayBuffer");function vb(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&_m(e.buffer),t}const gb=Ao("string"),wt=Ao("function"),xm=Ao("number"),Eo=e=>e!==null&&typeof e=="object",bb=e=>e===!0||e===!1,$i=e=>{if(xo(e)!=="object")return!1;const t=Ul(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},yb=Mt("Date"),wb=Mt("File"),_b=Mt("Blob"),xb=Mt("FileList"),Ab=e=>Eo(e)&&wt(e.pipe),Eb=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||wt(e.append)&&((t=xo(e))==="formdata"||t==="object"&&wt(e.toString)&&e.toString()==="[object FormData]"))},Ob=Mt("URLSearchParams"),[Sb,kb,Tb,Cb]=["ReadableStream","Request","Response","Headers"].map(Mt),$b=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Fa(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,a;if(typeof e!="object"&&(e=[e]),Wr(e))for(r=0,a=e.length;r<a;r++)t.call(null,e[r],r,e);else{const i=n?Object.getOwnPropertyNames(e):Object.keys(e),o=i.length;let s;for(r=0;r<o;r++)s=i[r],t.call(null,e[s],s,e)}}function Am(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,a;for(;r-- >0;)if(a=n[r],t===a.toLowerCase())return a;return null}const Em=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Om=e=>!Aa(e)&&e!==Em;function Ps(){const{caseless:e}=Om(this)&&this||{},t={},n=(r,a)=>{const i=e&&Am(t,a)||a;$i(t[i])&&$i(r)?t[i]=Ps(t[i],r):$i(r)?t[i]=Ps({},r):Wr(r)?t[i]=r.slice():t[i]=r};for(let r=0,a=arguments.length;r<a;r++)arguments[r]&&Fa(arguments[r],n);return t}const Pb=(e,t,n,{allOwnKeys:r}={})=>(Fa(t,(a,i)=>{n&&wt(a)?e[i]=wm(a,n):e[i]=a},{allOwnKeys:r}),e),Nb=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Mb=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},Rb=(e,t,n,r)=>{let a,i,o;const s={};if(t=t||{},e==null)return t;do{for(a=Object.getOwnPropertyNames(e),i=a.length;i-- >0;)o=a[i],(!r||r(o,e,t))&&!s[o]&&(t[o]=e[o],s[o]=!0);e=n!==!1&&Ul(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Lb=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},Ib=e=>{if(!e)return null;if(Wr(e))return e;let t=e.length;if(!xm(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},Db=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Ul(Uint8Array)),Fb=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let a;for(;(a=r.next())&&!a.done;){const i=a.value;t.call(e,i[0],i[1])}},jb=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},zb=Mt("HTMLFormElement"),Bb=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,a){return r.toUpperCase()+a}),wu=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Hb=Mt("RegExp"),Sm=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};Fa(n,(a,i)=>{let o;(o=t(a,i,e))!==!1&&(r[i]=o||a)}),Object.defineProperties(e,r)},Ub=e=>{Sm(e,(t,n)=>{if(wt(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(wt(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Yb=(e,t)=>{const n={},r=a=>{a.forEach(i=>{n[i]=!0})};return Wr(e)?r(e):r(String(e).split(t)),n},Wb=()=>{},Vb=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t,Xo="abcdefghijklmnopqrstuvwxyz",_u="0123456789",km={DIGIT:_u,ALPHA:Xo,ALPHA_DIGIT:Xo+Xo.toUpperCase()+_u},qb=(e=16,t=km.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function Kb(e){return!!(e&&wt(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const Gb=e=>{const t=new Array(10),n=(r,a)=>{if(Eo(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[a]=r;const i=Wr(r)?[]:{};return Fa(r,(o,s)=>{const l=n(o,a+1);!Aa(l)&&(i[s]=l)}),t[a]=void 0,i}}return r};return n(e,0)},Xb=Mt("AsyncFunction"),Jb=e=>e&&(Eo(e)||wt(e))&&wt(e.then)&&wt(e.catch),S={isArray:Wr,isArrayBuffer:_m,isBuffer:hb,isFormData:Eb,isArrayBufferView:vb,isString:gb,isNumber:xm,isBoolean:bb,isObject:Eo,isPlainObject:$i,isReadableStream:Sb,isRequest:kb,isResponse:Tb,isHeaders:Cb,isUndefined:Aa,isDate:yb,isFile:wb,isBlob:_b,isRegExp:Hb,isFunction:wt,isStream:Ab,isURLSearchParams:Ob,isTypedArray:Db,isFileList:xb,forEach:Fa,merge:Ps,extend:Pb,trim:$b,stripBOM:Nb,inherits:Mb,toFlatObject:Rb,kindOf:xo,kindOfTest:Mt,endsWith:Lb,toArray:Ib,forEachEntry:Fb,matchAll:jb,isHTMLForm:zb,hasOwnProperty:wu,hasOwnProp:wu,reduceDescriptors:Sm,freezeMethods:Ub,toObjectSet:Yb,toCamelCase:Bb,noop:Wb,toFiniteNumber:Vb,findKey:Am,global:Em,isContextDefined:Om,ALPHABET:km,generateString:qb,isSpecCompliantForm:Kb,toJSONObject:Gb,isAsyncFn:Xb,isThenable:Jb};function le(e,t,n,r,a){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),a&&(this.response=a)}S.inherits(le,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:S.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Tm=le.prototype,Cm={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Cm[e]={value:e}});Object.defineProperties(le,Cm);Object.defineProperty(Tm,"isAxiosError",{value:!0});le.from=(e,t,n,r,a,i)=>{const o=Object.create(Tm);return S.toFlatObject(e,o,function(l){return l!==Error.prototype},s=>s!=="isAxiosError"),le.call(o,e.message,t,n,r,a),o.cause=e,o.name=e.name,i&&Object.assign(o,i),o};const Zb=null;function Ns(e){return S.isPlainObject(e)||S.isArray(e)}function $m(e){return S.endsWith(e,"[]")?e.slice(0,-2):e}function xu(e,t,n){return e?e.concat(t).map(function(a,i){return a=$m(a),!n&&i?"["+a+"]":a}).join(n?".":""):t}function Qb(e){return S.isArray(e)&&!e.some(Ns)}const ey=S.toFlatObject(S,{},null,function(t){return/^is[A-Z]/.test(t)});function Oo(e,t,n){if(!S.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=S.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(y,A){return!S.isUndefined(A[y])});const r=n.metaTokens,a=n.visitor||c,i=n.dots,o=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&S.isSpecCompliantForm(t);if(!S.isFunction(a))throw new TypeError("visitor must be a function");function u(b){if(b===null)return"";if(S.isDate(b))return b.toISOString();if(!l&&S.isBlob(b))throw new le("Blob is not supported. Use a Buffer instead.");return S.isArrayBuffer(b)||S.isTypedArray(b)?l&&typeof Blob=="function"?new Blob([b]):Buffer.from(b):b}function c(b,y,A){let g=b;if(b&&!A&&typeof b=="object"){if(S.endsWith(y,"{}"))y=r?y:y.slice(0,-2),b=JSON.stringify(b);else if(S.isArray(b)&&Qb(b)||(S.isFileList(b)||S.endsWith(y,"[]"))&&(g=S.toArray(b)))return y=$m(y),g.forEach(function(_,d){!(S.isUndefined(_)||_===null)&&t.append(o===!0?xu([y],d,i):o===null?y:y+"[]",u(_))}),!1}return Ns(b)?!0:(t.append(xu(A,y,i),u(b)),!1)}const f=[],p=Object.assign(ey,{defaultVisitor:c,convertValue:u,isVisitable:Ns});function m(b,y){if(!S.isUndefined(b)){if(f.indexOf(b)!==-1)throw Error("Circular reference detected in "+y.join("."));f.push(b),S.forEach(b,function(g,h){(!(S.isUndefined(g)||g===null)&&a.call(t,g,S.isString(h)?h.trim():h,y,p))===!0&&m(g,y?y.concat(h):[h])}),f.pop()}}if(!S.isObject(e))throw new TypeError("data must be an object");return m(e),t}function Au(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function Yl(e,t){this._pairs=[],e&&Oo(e,this,t)}const Pm=Yl.prototype;Pm.append=function(t,n){this._pairs.push([t,n])};Pm.toString=function(t){const n=t?function(r){return t.call(this,r,Au)}:Au;return this._pairs.map(function(a){return n(a[0])+"="+n(a[1])},"").join("&")};function ty(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Nm(e,t,n){if(!t)return e;const r=n&&n.encode||ty,a=n&&n.serialize;let i;if(a?i=a(t,n):i=S.isURLSearchParams(t)?t.toString():new Yl(t,n).toString(r),i){const o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class Eu{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){S.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Mm={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},ny=typeof URLSearchParams<"u"?URLSearchParams:Yl,ry=typeof FormData<"u"?FormData:null,ay=typeof Blob<"u"?Blob:null,iy={isBrowser:!0,classes:{URLSearchParams:ny,FormData:ry,Blob:ay},protocols:["http","https","file","blob","url","data"]},Wl=typeof window<"u"&&typeof document<"u",oy=(e=>Wl&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),sy=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",ly=Wl&&window.location.href||"http://localhost",cy=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Wl,hasStandardBrowserEnv:oy,hasStandardBrowserWebWorkerEnv:sy,origin:ly},Symbol.toStringTag,{value:"Module"})),Nt={...cy,...iy};function uy(e,t){return Oo(e,new Nt.classes.URLSearchParams,Object.assign({visitor:function(n,r,a,i){return Nt.isNode&&S.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}function fy(e){return S.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function dy(e){const t={},n=Object.keys(e);let r;const a=n.length;let i;for(r=0;r<a;r++)i=n[r],t[i]=e[i];return t}function Rm(e){function t(n,r,a,i){let o=n[i++];if(o==="__proto__")return!0;const s=Number.isFinite(+o),l=i>=n.length;return o=!o&&S.isArray(a)?a.length:o,l?(S.hasOwnProp(a,o)?a[o]=[a[o],r]:a[o]=r,!s):((!a[o]||!S.isObject(a[o]))&&(a[o]=[]),t(n,r,a[o],i)&&S.isArray(a[o])&&(a[o]=dy(a[o])),!s)}if(S.isFormData(e)&&S.isFunction(e.entries)){const n={};return S.forEachEntry(e,(r,a)=>{t(fy(r),a,n,0)}),n}return null}function my(e,t,n){if(S.isString(e))try{return(t||JSON.parse)(e),S.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const ja={transitional:Mm,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",a=r.indexOf("application/json")>-1,i=S.isObject(t);if(i&&S.isHTMLForm(t)&&(t=new FormData(t)),S.isFormData(t))return a?JSON.stringify(Rm(t)):t;if(S.isArrayBuffer(t)||S.isBuffer(t)||S.isStream(t)||S.isFile(t)||S.isBlob(t)||S.isReadableStream(t))return t;if(S.isArrayBufferView(t))return t.buffer;if(S.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let s;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return uy(t,this.formSerializer).toString();if((s=S.isFileList(t))||r.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return Oo(s?{"files[]":t}:t,l&&new l,this.formSerializer)}}return i||a?(n.setContentType("application/json",!1),my(t)):t}],transformResponse:[function(t){const n=this.transitional||ja.transitional,r=n&&n.forcedJSONParsing,a=this.responseType==="json";if(S.isResponse(t)||S.isReadableStream(t))return t;if(t&&S.isString(t)&&(r&&!this.responseType||a)){const o=!(n&&n.silentJSONParsing)&&a;try{return JSON.parse(t)}catch(s){if(o)throw s.name==="SyntaxError"?le.from(s,le.ERR_BAD_RESPONSE,this,null,this.response):s}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Nt.classes.FormData,Blob:Nt.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};S.forEach(["delete","get","head","post","put","patch"],e=>{ja.headers[e]={}});const py=S.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),hy=e=>{const t={};let n,r,a;return e&&e.split(`
`).forEach(function(o){a=o.indexOf(":"),n=o.substring(0,a).trim().toLowerCase(),r=o.substring(a+1).trim(),!(!n||t[n]&&py[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Ou=Symbol("internals");function Xr(e){return e&&String(e).trim().toLowerCase()}function Pi(e){return e===!1||e==null?e:S.isArray(e)?e.map(Pi):String(e)}function vy(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const gy=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Jo(e,t,n,r,a){if(S.isFunction(r))return r.call(this,t,n);if(a&&(t=n),!!S.isString(t)){if(S.isString(r))return t.indexOf(r)!==-1;if(S.isRegExp(r))return r.test(t)}}function by(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function yy(e,t){const n=S.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(a,i,o){return this[r].call(this,t,a,i,o)},configurable:!0})})}class at{constructor(t){t&&this.set(t)}set(t,n,r){const a=this;function i(s,l,u){const c=Xr(l);if(!c)throw new Error("header name must be a non-empty string");const f=S.findKey(a,c);(!f||a[f]===void 0||u===!0||u===void 0&&a[f]!==!1)&&(a[f||l]=Pi(s))}const o=(s,l)=>S.forEach(s,(u,c)=>i(u,c,l));if(S.isPlainObject(t)||t instanceof this.constructor)o(t,n);else if(S.isString(t)&&(t=t.trim())&&!gy(t))o(hy(t),n);else if(S.isHeaders(t))for(const[s,l]of t.entries())i(l,s,r);else t!=null&&i(n,t,r);return this}get(t,n){if(t=Xr(t),t){const r=S.findKey(this,t);if(r){const a=this[r];if(!n)return a;if(n===!0)return vy(a);if(S.isFunction(n))return n.call(this,a,r);if(S.isRegExp(n))return n.exec(a);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=Xr(t),t){const r=S.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Jo(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let a=!1;function i(o){if(o=Xr(o),o){const s=S.findKey(r,o);s&&(!n||Jo(r,r[s],s,n))&&(delete r[s],a=!0)}}return S.isArray(t)?t.forEach(i):i(t),a}clear(t){const n=Object.keys(this);let r=n.length,a=!1;for(;r--;){const i=n[r];(!t||Jo(this,this[i],i,t,!0))&&(delete this[i],a=!0)}return a}normalize(t){const n=this,r={};return S.forEach(this,(a,i)=>{const o=S.findKey(r,i);if(o){n[o]=Pi(a),delete n[i];return}const s=t?by(i):String(i).trim();s!==i&&delete n[i],n[s]=Pi(a),r[s]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return S.forEach(this,(r,a)=>{r!=null&&r!==!1&&(n[a]=t&&S.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(a=>r.set(a)),r}static accessor(t){const r=(this[Ou]=this[Ou]={accessors:{}}).accessors,a=this.prototype;function i(o){const s=Xr(o);r[s]||(yy(a,o),r[s]=!0)}return S.isArray(t)?t.forEach(i):i(t),this}}at.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);S.reduceDescriptors(at.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});S.freezeMethods(at);function Zo(e,t){const n=this||ja,r=t||n,a=at.from(r.headers);let i=r.data;return S.forEach(e,function(s){i=s.call(n,i,a.normalize(),t?t.status:void 0)}),a.normalize(),i}function Lm(e){return!!(e&&e.__CANCEL__)}function Vr(e,t,n){le.call(this,e??"canceled",le.ERR_CANCELED,t,n),this.name="CanceledError"}S.inherits(Vr,le,{__CANCEL__:!0});function Im(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new le("Request failed with status code "+n.status,[le.ERR_BAD_REQUEST,le.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function wy(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function _y(e,t){e=e||10;const n=new Array(e),r=new Array(e);let a=0,i=0,o;return t=t!==void 0?t:1e3,function(l){const u=Date.now(),c=r[i];o||(o=u),n[a]=l,r[a]=u;let f=i,p=0;for(;f!==a;)p+=n[f++],f=f%e;if(a=(a+1)%e,a===i&&(i=(i+1)%e),u-o<t)return;const m=c&&u-c;return m?Math.round(p*1e3/m):void 0}}function xy(e,t){let n=0;const r=1e3/t;let a=null;return function(){const o=this===!0,s=Date.now();if(o||s-n>r)return a&&(clearTimeout(a),a=null),n=s,e.apply(null,arguments);a||(a=setTimeout(()=>(a=null,n=Date.now(),e.apply(null,arguments)),r-(s-n)))}}const Ji=(e,t,n=3)=>{let r=0;const a=_y(50,250);return xy(i=>{const o=i.loaded,s=i.lengthComputable?i.total:void 0,l=o-r,u=a(l),c=o<=s;r=o;const f={loaded:o,total:s,progress:s?o/s:void 0,bytes:l,rate:u||void 0,estimated:u&&s&&c?(s-o)/u:void 0,event:i,lengthComputable:s!=null};f[t?"download":"upload"]=!0,e(f)},n)},Ay=Nt.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function a(i){let o=i;return t&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=a(window.location.href),function(o){const s=S.isString(o)?a(o):o;return s.protocol===r.protocol&&s.host===r.host}}():function(){return function(){return!0}}(),Ey=Nt.hasStandardBrowserEnv?{write(e,t,n,r,a,i){const o=[e+"="+encodeURIComponent(t)];S.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),S.isString(r)&&o.push("path="+r),S.isString(a)&&o.push("domain="+a),i===!0&&o.push("secure"),document.cookie=o.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function Oy(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function Sy(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function Dm(e,t){return e&&!Oy(t)?Sy(e,t):t}const Su=e=>e instanceof at?{...e}:e;function cr(e,t){t=t||{};const n={};function r(u,c,f){return S.isPlainObject(u)&&S.isPlainObject(c)?S.merge.call({caseless:f},u,c):S.isPlainObject(c)?S.merge({},c):S.isArray(c)?c.slice():c}function a(u,c,f){if(S.isUndefined(c)){if(!S.isUndefined(u))return r(void 0,u,f)}else return r(u,c,f)}function i(u,c){if(!S.isUndefined(c))return r(void 0,c)}function o(u,c){if(S.isUndefined(c)){if(!S.isUndefined(u))return r(void 0,u)}else return r(void 0,c)}function s(u,c,f){if(f in t)return r(u,c);if(f in e)return r(void 0,u)}const l={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:s,headers:(u,c)=>a(Su(u),Su(c),!0)};return S.forEach(Object.keys(Object.assign({},e,t)),function(c){const f=l[c]||a,p=f(e[c],t[c],c);S.isUndefined(p)&&f!==s||(n[c]=p)}),n}const Fm=e=>{const t=cr({},e);let{data:n,withXSRFToken:r,xsrfHeaderName:a,xsrfCookieName:i,headers:o,auth:s}=t;t.headers=o=at.from(o),t.url=Nm(Dm(t.baseURL,t.url),e.params,e.paramsSerializer),s&&o.set("Authorization","Basic "+btoa((s.username||"")+":"+(s.password?unescape(encodeURIComponent(s.password)):"")));let l;if(S.isFormData(n)){if(Nt.hasStandardBrowserEnv||Nt.hasStandardBrowserWebWorkerEnv)o.setContentType(void 0);else if((l=o.getContentType())!==!1){const[u,...c]=l?l.split(";").map(f=>f.trim()).filter(Boolean):[];o.setContentType([u||"multipart/form-data",...c].join("; "))}}if(Nt.hasStandardBrowserEnv&&(r&&S.isFunction(r)&&(r=r(t)),r||r!==!1&&Ay(t.url))){const u=a&&i&&Ey.read(i);u&&o.set(a,u)}return t},ky=typeof XMLHttpRequest<"u",Ty=ky&&function(e){return new Promise(function(n,r){const a=Fm(e);let i=a.data;const o=at.from(a.headers).normalize();let{responseType:s}=a,l;function u(){a.cancelToken&&a.cancelToken.unsubscribe(l),a.signal&&a.signal.removeEventListener("abort",l)}let c=new XMLHttpRequest;c.open(a.method.toUpperCase(),a.url,!0),c.timeout=a.timeout;function f(){if(!c)return;const m=at.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),y={data:!s||s==="text"||s==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:m,config:e,request:c};Im(function(g){n(g),u()},function(g){r(g),u()},y),c=null}"onloadend"in c?c.onloadend=f:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(f)},c.onabort=function(){c&&(r(new le("Request aborted",le.ECONNABORTED,a,c)),c=null)},c.onerror=function(){r(new le("Network Error",le.ERR_NETWORK,a,c)),c=null},c.ontimeout=function(){let b=a.timeout?"timeout of "+a.timeout+"ms exceeded":"timeout exceeded";const y=a.transitional||Mm;a.timeoutErrorMessage&&(b=a.timeoutErrorMessage),r(new le(b,y.clarifyTimeoutError?le.ETIMEDOUT:le.ECONNABORTED,a,c)),c=null},i===void 0&&o.setContentType(null),"setRequestHeader"in c&&S.forEach(o.toJSON(),function(b,y){c.setRequestHeader(y,b)}),S.isUndefined(a.withCredentials)||(c.withCredentials=!!a.withCredentials),s&&s!=="json"&&(c.responseType=a.responseType),typeof a.onDownloadProgress=="function"&&c.addEventListener("progress",Ji(a.onDownloadProgress,!0)),typeof a.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",Ji(a.onUploadProgress)),(a.cancelToken||a.signal)&&(l=m=>{c&&(r(!m||m.type?new Vr(null,e,c):m),c.abort(),c=null)},a.cancelToken&&a.cancelToken.subscribe(l),a.signal&&(a.signal.aborted?l():a.signal.addEventListener("abort",l)));const p=wy(a.url);if(p&&Nt.protocols.indexOf(p)===-1){r(new le("Unsupported protocol "+p+":",le.ERR_BAD_REQUEST,e));return}c.send(i||null)})},Cy=(e,t)=>{let n=new AbortController,r;const a=function(l){if(!r){r=!0,o();const u=l instanceof Error?l:this.reason;n.abort(u instanceof le?u:new Vr(u instanceof Error?u.message:u))}};let i=t&&setTimeout(()=>{a(new le(`timeout ${t} of ms exceeded`,le.ETIMEDOUT))},t);const o=()=>{e&&(i&&clearTimeout(i),i=null,e.forEach(l=>{l&&(l.removeEventListener?l.removeEventListener("abort",a):l.unsubscribe(a))}),e=null)};e.forEach(l=>l&&l.addEventListener&&l.addEventListener("abort",a));const{signal:s}=n;return s.unsubscribe=o,[s,()=>{i&&clearTimeout(i),i=null}]},$y=function*(e,t){let n=e.byteLength;if(!t||n<t){yield e;return}let r=0,a;for(;r<n;)a=r+t,yield e.slice(r,a),r=a},Py=async function*(e,t,n){for await(const r of e)yield*$y(ArrayBuffer.isView(r)?r:await n(String(r)),t)},ku=(e,t,n,r,a)=>{const i=Py(e,t,a);let o=0;return new ReadableStream({type:"bytes",async pull(s){const{done:l,value:u}=await i.next();if(l){s.close(),r();return}let c=u.byteLength;n&&n(o+=c),s.enqueue(new Uint8Array(u))},cancel(s){return r(s),i.return()}},{highWaterMark:2})},Tu=(e,t)=>{const n=e!=null;return r=>setTimeout(()=>t({lengthComputable:n,total:e,loaded:r}))},So=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",jm=So&&typeof ReadableStream=="function",Ms=So&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),Ny=jm&&(()=>{let e=!1;const t=new Request(Nt.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t})(),Cu=64*1024,Rs=jm&&!!(()=>{try{return S.isReadableStream(new Response("").body)}catch{}})(),Zi={stream:Rs&&(e=>e.body)};So&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!Zi[t]&&(Zi[t]=S.isFunction(e[t])?n=>n[t]():(n,r)=>{throw new le(`Response type '${t}' is not supported`,le.ERR_NOT_SUPPORT,r)})})})(new Response);const My=async e=>{if(e==null)return 0;if(S.isBlob(e))return e.size;if(S.isSpecCompliantForm(e))return(await new Request(e).arrayBuffer()).byteLength;if(S.isArrayBufferView(e))return e.byteLength;if(S.isURLSearchParams(e)&&(e=e+""),S.isString(e))return(await Ms(e)).byteLength},Ry=async(e,t)=>{const n=S.toFiniteNumber(e.getContentLength());return n??My(t)},Ly=So&&(async e=>{let{url:t,method:n,data:r,signal:a,cancelToken:i,timeout:o,onDownloadProgress:s,onUploadProgress:l,responseType:u,headers:c,withCredentials:f="same-origin",fetchOptions:p}=Fm(e);u=u?(u+"").toLowerCase():"text";let[m,b]=a||i||o?Cy([a,i],o):[],y,A;const g=()=>{!y&&setTimeout(()=>{m&&m.unsubscribe()}),y=!0};let h;try{if(l&&Ny&&n!=="get"&&n!=="head"&&(h=await Ry(c,r))!==0){let x=new Request(t,{method:"POST",body:r,duplex:"half"}),T;S.isFormData(r)&&(T=x.headers.get("content-type"))&&c.setContentType(T),x.body&&(r=ku(x.body,Cu,Tu(h,Ji(l)),null,Ms))}S.isString(f)||(f=f?"cors":"omit"),A=new Request(t,{...p,signal:m,method:n.toUpperCase(),headers:c.normalize().toJSON(),body:r,duplex:"half",withCredentials:f});let _=await fetch(A);const d=Rs&&(u==="stream"||u==="response");if(Rs&&(s||d)){const x={};["status","statusText","headers"].forEach(F=>{x[F]=_[F]});const T=S.toFiniteNumber(_.headers.get("content-length"));_=new Response(ku(_.body,Cu,s&&Tu(T,Ji(s,!0)),d&&g,Ms),x)}u=u||"text";let E=await Zi[S.findKey(Zi,u)||"text"](_,e);return!d&&g(),b&&b(),await new Promise((x,T)=>{Im(x,T,{data:E,headers:at.from(_.headers),status:_.status,statusText:_.statusText,config:e,request:A})})}catch(_){throw g(),_&&_.name==="TypeError"&&/fetch/i.test(_.message)?Object.assign(new le("Network Error",le.ERR_NETWORK,e,A),{cause:_.cause||_}):le.from(_,_&&_.code,e,A)}}),Ls={http:Zb,xhr:Ty,fetch:Ly};S.forEach(Ls,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const $u=e=>`- ${e}`,Iy=e=>S.isFunction(e)||e===null||e===!1,zm={getAdapter:e=>{e=S.isArray(e)?e:[e];const{length:t}=e;let n,r;const a={};for(let i=0;i<t;i++){n=e[i];let o;if(r=n,!Iy(n)&&(r=Ls[(o=String(n)).toLowerCase()],r===void 0))throw new le(`Unknown adapter '${o}'`);if(r)break;a[o||"#"+i]=r}if(!r){const i=Object.entries(a).map(([s,l])=>`adapter ${s} `+(l===!1?"is not supported by the environment":"is not available in the build"));let o=t?i.length>1?`since :
`+i.map($u).join(`
`):" "+$u(i[0]):"as no adapter specified";throw new le("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return r},adapters:Ls};function Qo(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Vr(null,e)}function Pu(e){return Qo(e),e.headers=at.from(e.headers),e.data=Zo.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),zm.getAdapter(e.adapter||ja.adapter)(e).then(function(r){return Qo(e),r.data=Zo.call(e,e.transformResponse,r),r.headers=at.from(r.headers),r},function(r){return Lm(r)||(Qo(e),r&&r.response&&(r.response.data=Zo.call(e,e.transformResponse,r.response),r.response.headers=at.from(r.response.headers))),Promise.reject(r)})}const Bm="1.7.2",Vl={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Vl[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Nu={};Vl.transitional=function(t,n,r){function a(i,o){return"[Axios v"+Bm+"] Transitional option '"+i+"'"+o+(r?". "+r:"")}return(i,o,s)=>{if(t===!1)throw new le(a(o," has been removed"+(n?" in "+n:"")),le.ERR_DEPRECATED);return n&&!Nu[o]&&(Nu[o]=!0,console.warn(a(o," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(i,o,s):!0}};function Dy(e,t,n){if(typeof e!="object")throw new le("options must be an object",le.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let a=r.length;for(;a-- >0;){const i=r[a],o=t[i];if(o){const s=e[i],l=s===void 0||o(s,i,e);if(l!==!0)throw new le("option "+i+" must be "+l,le.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new le("Unknown option "+i,le.ERR_BAD_OPTION)}}const Is={assertOptions:Dy,validators:Vl},pn=Is.validators;class nr{constructor(t){this.defaults=t,this.interceptors={request:new Eu,response:new Eu}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let a;Error.captureStackTrace?Error.captureStackTrace(a={}):a=new Error;const i=a.stack?a.stack.replace(/^.+\n/,""):"";try{r.stack?i&&!String(r.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+i):r.stack=i}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=cr(this.defaults,n);const{transitional:r,paramsSerializer:a,headers:i}=n;r!==void 0&&Is.assertOptions(r,{silentJSONParsing:pn.transitional(pn.boolean),forcedJSONParsing:pn.transitional(pn.boolean),clarifyTimeoutError:pn.transitional(pn.boolean)},!1),a!=null&&(S.isFunction(a)?n.paramsSerializer={serialize:a}:Is.assertOptions(a,{encode:pn.function,serialize:pn.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=i&&S.merge(i.common,i[n.method]);i&&S.forEach(["delete","get","head","post","put","patch","common"],b=>{delete i[b]}),n.headers=at.concat(o,i);const s=[];let l=!0;this.interceptors.request.forEach(function(y){typeof y.runWhen=="function"&&y.runWhen(n)===!1||(l=l&&y.synchronous,s.unshift(y.fulfilled,y.rejected))});const u=[];this.interceptors.response.forEach(function(y){u.push(y.fulfilled,y.rejected)});let c,f=0,p;if(!l){const b=[Pu.bind(this),void 0];for(b.unshift.apply(b,s),b.push.apply(b,u),p=b.length,c=Promise.resolve(n);f<p;)c=c.then(b[f++],b[f++]);return c}p=s.length;let m=n;for(f=0;f<p;){const b=s[f++],y=s[f++];try{m=b(m)}catch(A){y.call(this,A);break}}try{c=Pu.call(this,m)}catch(b){return Promise.reject(b)}for(f=0,p=u.length;f<p;)c=c.then(u[f++],u[f++]);return c}getUri(t){t=cr(this.defaults,t);const n=Dm(t.baseURL,t.url);return Nm(n,t.params,t.paramsSerializer)}}S.forEach(["delete","get","head","options"],function(t){nr.prototype[t]=function(n,r){return this.request(cr(r||{},{method:t,url:n,data:(r||{}).data}))}});S.forEach(["post","put","patch"],function(t){function n(r){return function(i,o,s){return this.request(cr(s||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}nr.prototype[t]=n(),nr.prototype[t+"Form"]=n(!0)});class ql{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(a=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](a);r._listeners=null}),this.promise.then=a=>{let i;const o=new Promise(s=>{r.subscribe(s),i=s}).then(a);return o.cancel=function(){r.unsubscribe(i)},o},t(function(i,o,s){r.reason||(r.reason=new Vr(i,o,s),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new ql(function(a){t=a}),cancel:t}}}function Fy(e){return function(n){return e.apply(null,n)}}function jy(e){return S.isObject(e)&&e.isAxiosError===!0}const Ds={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Ds).forEach(([e,t])=>{Ds[t]=e});function Hm(e){const t=new nr(e),n=wm(nr.prototype.request,t);return S.extend(n,nr.prototype,t,{allOwnKeys:!0}),S.extend(n,t,null,{allOwnKeys:!0}),n.create=function(a){return Hm(cr(e,a))},n}const ze=Hm(ja);ze.Axios=nr;ze.CanceledError=Vr;ze.CancelToken=ql;ze.isCancel=Lm;ze.VERSION=Bm;ze.toFormData=Oo;ze.AxiosError=le;ze.Cancel=ze.CanceledError;ze.all=function(t){return Promise.all(t)};ze.spread=Fy;ze.isAxiosError=jy;ze.mergeConfig=cr;ze.AxiosHeaders=at;ze.formToJSON=e=>Rm(S.isHTMLForm(e)?new FormData(e):e);ze.getAdapter=zm.getAdapter;ze.HttpStatusCode=Ds;ze.default=ze;const zy={"requestUnsuccessful@proto":"Request Unsuccessful"},By={"requestUnsuccessful@proto":"请求不成功"};bm("@nuogz/aegis",{en:zy,zh:By});const Hy=ym("@nuogz/aegis");class Kl{static alert=(t,n)=>window.alert((n?n+`:
`:"")+t);alert=Kl.alert;prefixDefault="./api";constructor(t,n){t&&(this.alert=t),n&&(this.prefixDefault=n)}parseURLAction=(t,n=this.prefixDefault)=>`${n}${n.endsWith("/")?"":"/"}${t}`;parseResult=async t=>{if(t.success)return t.message&&this.alert&&await this.alert(t.message,t.messageTitle),t.data;throw t.message||Hy("requestUnsuccessful")};$get=async(t,n,r={})=>{const a=yu(Object.assign({params:n},r)),i=this.parseURLAction(t,a.prefix);delete a.prefix;const o=a.return??"data-parsed";delete a.return;const s=await ze.get(i,a);return o=="response"?s:o=="raw"?s.data:this.parseResult(s.data)};$post=async(t,n,r={},a=!1)=>{const i=yu(r);n instanceof FormData&&(typeof i.headers=="object"&&i.headers?i.headers["Content-Type"]="multipart/form-data":i.headers={"Content-Type":"multipart/form-data"});const o=this.parseURLAction(t,i.prefix);delete i.prefix;const s=i.return??"data-parsed";delete i.return;const l=await ze.post(o,n,i);return s=="response"?l:s=="raw"?l.data:this.parseResult(l.data)};$jump=async(t,n,r={})=>{const a=this.parseURLAction(t,r.prefix),i=new URLSearchParams;Object.entries(n).forEach(([o,s])=>i.append(o,typeof s=="object"?JSON.stringify(s):s)),window.location.href=`${a}?${i.toString()}`};$open=async(t,n,r={})=>{const a=this.parseURLAction(t,r.prefix),i=new URLSearchParams;Object.entries(n).forEach(([o,s])=>i.append(o,typeof s=="object"?JSON.stringify(s):s)),window.open(`${a}?${i.toString()}`,r.target,r.features)}}const en=new Kl;en.$get.bind(en);en.$post.bind(en);en.$jump.bind(en);en.$open.bind(en);function Mu(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function q(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Mu(Object(n),!0).forEach(function(r){We(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Mu(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Qi(e){"@babel/helpers - typeof";return Qi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Qi(e)}function Uy(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Yy(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Wy(e,t,n){return t&&Yy(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function We(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Gl(e,t){return qy(e)||Gy(e,t)||Um(e,t)||Jy()}function za(e){return Vy(e)||Ky(e)||Um(e)||Xy()}function Vy(e){if(Array.isArray(e))return Fs(e)}function qy(e){if(Array.isArray(e))return e}function Ky(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Gy(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function Um(e,t){if(e){if(typeof e=="string")return Fs(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Fs(e,t)}}function Fs(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Xy(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Jy(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Ru=function(){},Xl={},Ym={},Wm=null,Vm={mark:Ru,measure:Ru};try{typeof window<"u"&&(Xl=window),typeof document<"u"&&(Ym=document),typeof MutationObserver<"u"&&(Wm=MutationObserver),typeof performance<"u"&&(Vm=performance)}catch{}var Zy=Xl.navigator||{},Lu=Zy.userAgent,Iu=Lu===void 0?"":Lu,Cn=Xl,$e=Ym,Du=Wm,oi=Vm;Cn.document;var un=!!$e.documentElement&&!!$e.head&&typeof $e.addEventListener=="function"&&typeof $e.createElement=="function",qm=~Iu.indexOf("MSIE")||~Iu.indexOf("Trident/"),si,li,ci,ui,fi,tn="___FONT_AWESOME___",js=16,Km="fa",Gm="svg-inline--fa",ur="data-fa-i2svg",zs="data-fa-pseudo-element",Qy="data-fa-pseudo-element-pending",Jl="data-prefix",Zl="data-icon",Fu="fontawesome-i2svg",e1="async",t1=["HTML","HEAD","STYLE","SCRIPT"],Xm=function(){try{return!0}catch{return!1}}(),Te="classic",Le="sharp",Ql=[Te,Le];function Ba(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[Te]}})}var Ea=Ba((si={},We(si,Te,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),We(si,Le,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),si)),Oa=Ba((li={},We(li,Te,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),We(li,Le,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),li)),Sa=Ba((ci={},We(ci,Te,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),We(ci,Le,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),ci)),n1=Ba((ui={},We(ui,Te,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),We(ui,Le,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),ui)),r1=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,Jm="fa-layers-text",a1=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,i1=Ba((fi={},We(fi,Te,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),We(fi,Le,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),fi)),Zm=[1,2,3,4,5,6,7,8,9,10],o1=Zm.concat([11,12,13,14,15,16,17,18,19,20]),s1=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Kn={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ka=new Set;Object.keys(Oa[Te]).map(ka.add.bind(ka));Object.keys(Oa[Le]).map(ka.add.bind(ka));var l1=[].concat(Ql,za(ka),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Kn.GROUP,Kn.SWAP_OPACITY,Kn.PRIMARY,Kn.SECONDARY]).concat(Zm.map(function(e){return"".concat(e,"x")})).concat(o1.map(function(e){return"w-".concat(e)})),ca=Cn.FontAwesomeConfig||{};function c1(e){var t=$e.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function u1(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if($e&&typeof $e.querySelector=="function"){var f1=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];f1.forEach(function(e){var t=Gl(e,2),n=t[0],r=t[1],a=u1(c1(n));a!=null&&(ca[r]=a)})}var Qm={styleDefault:"solid",familyDefault:"classic",cssPrefix:Km,replacementClass:Gm,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ca.familyPrefix&&(ca.cssPrefix=ca.familyPrefix);var Ir=q(q({},Qm),ca);Ir.autoReplaceSvg||(Ir.observeMutations=!1);var Z={};Object.keys(Qm).forEach(function(e){Object.defineProperty(Z,e,{enumerable:!0,set:function(n){Ir[e]=n,ua.forEach(function(r){return r(Z)})},get:function(){return Ir[e]}})});Object.defineProperty(Z,"familyPrefix",{enumerable:!0,set:function(t){Ir.cssPrefix=t,ua.forEach(function(n){return n(Z)})},get:function(){return Ir.cssPrefix}});Cn.FontAwesomeConfig=Z;var ua=[];function d1(e){return ua.push(e),function(){ua.splice(ua.indexOf(e),1)}}var hn=js,zt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function m1(e){if(!(!e||!un)){var t=$e.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=$e.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return $e.head.insertBefore(t,r),e}}var p1="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Ta(){for(var e=12,t="";e-- >0;)t+=p1[Math.random()*62|0];return t}function qr(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function ec(e){return e.classList?qr(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function ep(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function h1(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(ep(e[n]),'" ')},"").trim()}function ko(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function tc(e){return e.size!==zt.size||e.x!==zt.x||e.y!==zt.y||e.rotate!==zt.rotate||e.flipX||e.flipY}function v1(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:u}}function g1(e){var t=e.transform,n=e.width,r=n===void 0?js:n,a=e.height,i=a===void 0?js:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&qm?l+="translate(".concat(t.x/hn-r/2,"em, ").concat(t.y/hn-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/hn,"em), calc(-50% + ").concat(t.y/hn,"em)) "):l+="translate(".concat(t.x/hn,"em, ").concat(t.y/hn,"em) "),l+="scale(".concat(t.size/hn*(t.flipX?-1:1),", ").concat(t.size/hn*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var b1=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
          transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function tp(){var e=Km,t=Gm,n=Z.cssPrefix,r=Z.replacementClass,a=b1;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var ju=!1;function es(){Z.autoAddCss&&!ju&&(m1(tp()),ju=!0)}var y1={mixout:function(){return{dom:{css:tp,insertCss:es}}},hooks:function(){return{beforeDOMElementCreation:function(){es()},beforeI2svg:function(){es()}}}},nn=Cn||{};nn[tn]||(nn[tn]={});nn[tn].styles||(nn[tn].styles={});nn[tn].hooks||(nn[tn].hooks={});nn[tn].shims||(nn[tn].shims=[]);var Tt=nn[tn],np=[],w1=function e(){$e.removeEventListener("DOMContentLoaded",e),eo=1,np.map(function(t){return t()})},eo=!1;un&&(eo=($e.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test($e.readyState),eo||$e.addEventListener("DOMContentLoaded",w1));function _1(e){un&&(eo?setTimeout(e,0):np.push(e))}function Ha(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?ep(e):"<".concat(t," ").concat(h1(r),">").concat(i.map(Ha).join(""),"</").concat(t,">")}function zu(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var ts=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=n,l,u,c;for(r===void 0?(l=1,c=t[i[0]]):(l=0,c=r);l<o;l++)u=i[l],c=s(c,t[u],u,t);return c};function x1(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function Bs(e){var t=x1(e);return t.length===1?t[0].toString(16):null}function A1(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function Bu(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function Hs(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=Bu(t);typeof Tt.hooks.addPack=="function"&&!a?Tt.hooks.addPack(e,Bu(t)):Tt.styles[e]=q(q({},Tt.styles[e]||{}),i),e==="fas"&&Hs("fa",t)}var di,mi,pi,_r=Tt.styles,E1=Tt.shims,O1=(di={},We(di,Te,Object.values(Sa[Te])),We(di,Le,Object.values(Sa[Le])),di),nc=null,rp={},ap={},ip={},op={},sp={},S1=(mi={},We(mi,Te,Object.keys(Ea[Te])),We(mi,Le,Object.keys(Ea[Le])),mi);function k1(e){return~l1.indexOf(e)}function T1(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!k1(a)?a:null}var lp=function(){var t=function(i){return ts(_r,function(o,s,l){return o[l]=ts(s,i,{}),o},{})};rp=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),ap=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),sp=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in _r||Z.autoFetchSvg,r=ts(E1,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});ip=r.names,op=r.unicodes,nc=To(Z.styleDefault,{family:Z.familyDefault})};d1(function(e){nc=To(e.styleDefault,{family:Z.familyDefault})});lp();function rc(e,t){return(rp[e]||{})[t]}function C1(e,t){return(ap[e]||{})[t]}function Gn(e,t){return(sp[e]||{})[t]}function cp(e){return ip[e]||{prefix:null,iconName:null}}function $1(e){var t=op[e],n=rc("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function $n(){return nc}var ac=function(){return{prefix:null,iconName:null,rest:[]}};function To(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?Te:n,a=Ea[r][e],i=Oa[r][e]||Oa[r][a],o=e in Tt.styles?e:null;return i||o||null}var Hu=(pi={},We(pi,Te,Object.keys(Sa[Te])),We(pi,Le,Object.keys(Sa[Le])),pi);function Co(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},We(t,Te,"".concat(Z.cssPrefix,"-").concat(Te)),We(t,Le,"".concat(Z.cssPrefix,"-").concat(Le)),t),o=null,s=Te;(e.includes(i[Te])||e.some(function(u){return Hu[Te].includes(u)}))&&(s=Te),(e.includes(i[Le])||e.some(function(u){return Hu[Le].includes(u)}))&&(s=Le);var l=e.reduce(function(u,c){var f=T1(Z.cssPrefix,c);if(_r[c]?(c=O1[s].includes(c)?n1[s][c]:c,o=c,u.prefix=c):S1[s].indexOf(c)>-1?(o=c,u.prefix=To(c,{family:s})):f?u.iconName=f:c!==Z.replacementClass&&c!==i[Te]&&c!==i[Le]&&u.rest.push(c),!a&&u.prefix&&u.iconName){var p=o==="fa"?cp(u.iconName):{},m=Gn(u.prefix,u.iconName);p.prefix&&(o=null),u.iconName=p.iconName||m||u.iconName,u.prefix=p.prefix||u.prefix,u.prefix==="far"&&!_r.far&&_r.fas&&!Z.autoFetchSvg&&(u.prefix="fas")}return u},ac());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===Le&&(_r.fass||Z.autoFetchSvg)&&(l.prefix="fass",l.iconName=Gn(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=$n()||"fas"),l}var P1=function(){function e(){Uy(this,e),this.definitions={}}return Wy(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=q(q({},n.definitions[s]||{}),o[s]),Hs(s,o[s]);var l=Sa[Te][s];l&&Hs(l,o[s]),lp()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,u=o.icon,c=u[2];n[s]||(n[s]={}),c.length>0&&c.forEach(function(f){typeof f=="string"&&(n[s][f]=u)}),n[s][l]=u}),n}}]),e}(),Uu=[],xr={},Mr={},N1=Object.keys(Mr);function M1(e,t){var n=t.mixoutsTo;return Uu=e,xr={},Object.keys(Mr).forEach(function(r){N1.indexOf(r)===-1&&delete Mr[r]}),Uu.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),Qi(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){xr[o]||(xr[o]=[]),xr[o].push(i[o])})}r.provides&&r.provides(Mr)}),n}function Us(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=xr[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function fr(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=xr[e]||[];a.forEach(function(i){i.apply(null,n)})}function rn(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Mr[e]?Mr[e].apply(null,t):void 0}function Ys(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||$n();if(t)return t=Gn(n,t)||t,zu(up.definitions,n,t)||zu(Tt.styles,n,t)}var up=new P1,R1=function(){Z.autoReplaceSvg=!1,Z.observeMutations=!1,fr("noAuto")},L1={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return un?(fr("beforeI2svg",t),rn("pseudoElements2svg",t),rn("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;Z.autoReplaceSvg===!1&&(Z.autoReplaceSvg=!0),Z.observeMutations=!0,_1(function(){D1({autoReplaceSvgRoot:n}),fr("watch",t)})}},I1={icon:function(t){if(t===null)return null;if(Qi(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Gn(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=To(t[0]);return{prefix:r,iconName:Gn(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(Z.cssPrefix,"-"))>-1||t.match(r1))){var a=Co(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||$n(),iconName:Gn(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=$n();return{prefix:i,iconName:Gn(i,t)||t}}}},mt={noAuto:R1,config:Z,dom:L1,parse:I1,library:up,findIconDefinition:Ys,toHtml:Ha},D1=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?$e:n;(Object.keys(Tt.styles).length>0||Z.autoFetchSvg)&&un&&Z.autoReplaceSvg&&mt.dom.i2svg({node:r})};function $o(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Ha(r)})}}),Object.defineProperty(e,"node",{get:function(){if(un){var r=$e.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function F1(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(tc(o)&&n.found&&!r.found){var s=n.width,l=n.height,u={x:s/l/2,y:.5};a.style=ko(q(q({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function j1(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(Z.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:q(q({},a),{},{id:o}),children:r}]}]}function ic(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,u=e.maskId,c=e.titleId,f=e.extra,p=e.watchable,m=p===void 0?!1:p,b=r.found?r:n,y=b.width,A=b.height,g=a==="fak",h=[Z.replacementClass,i?"".concat(Z.cssPrefix,"-").concat(i):""].filter(function(I){return f.classes.indexOf(I)===-1}).filter(function(I){return I!==""||!!I}).concat(f.classes).join(" "),_={children:[],attributes:q(q({},f.attributes),{},{"data-prefix":a,"data-icon":i,class:h,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(y," ").concat(A)})},d=g&&!~f.classes.indexOf("fa-fw")?{width:"".concat(y/A*16*.0625,"em")}:{};m&&(_.attributes[ur]=""),l&&(_.children.push({tag:"title",attributes:{id:_.attributes["aria-labelledby"]||"title-".concat(c||Ta())},children:[l]}),delete _.attributes.title);var E=q(q({},_),{},{prefix:a,iconName:i,main:n,mask:r,maskId:u,transform:o,symbol:s,styles:q(q({},d),f.styles)}),x=r.found&&n.found?rn("generateAbstractMask",E)||{children:[],attributes:{}}:rn("generateAbstractIcon",E)||{children:[],attributes:{}},T=x.children,F=x.attributes;return E.children=T,E.attributes=F,s?j1(E):F1(E)}function Yu(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,u=q(q(q({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(u[ur]="");var c=q({},o.styles);tc(a)&&(c.transform=g1({transform:a,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var f=ko(c);f.length>0&&(u.style=f);var p=[];return p.push({tag:"span",attributes:u,children:[t]}),i&&p.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),p}function z1(e){var t=e.content,n=e.title,r=e.extra,a=q(q(q({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=ko(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var ns=Tt.styles;function Ws(e){var t=e[0],n=e[1],r=e.slice(4),a=Gl(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(Z.cssPrefix,"-").concat(Kn.GROUP)},children:[{tag:"path",attributes:{class:"".concat(Z.cssPrefix,"-").concat(Kn.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(Z.cssPrefix,"-").concat(Kn.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var B1={found:!1,width:512,height:512};function H1(e,t){!Xm&&!Z.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Vs(e,t){var n=t;return t==="fa"&&Z.styleDefault!==null&&(t=$n()),new Promise(function(r,a){if(rn("missingIconAbstract"),n==="fa"){var i=cp(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&ns[t]&&ns[t][e]){var o=ns[t][e];return r(Ws(o))}H1(e,t),r(q(q({},B1),{},{icon:Z.showMissingIcons&&e?rn("missingIconAbstract")||{}:{}}))})}var Wu=function(){},qs=Z.measurePerformance&&oi&&oi.mark&&oi.measure?oi:{mark:Wu,measure:Wu},ea='FA "6.5.2"',U1=function(t){return qs.mark("".concat(ea," ").concat(t," begins")),function(){return fp(t)}},fp=function(t){qs.mark("".concat(ea," ").concat(t," ends")),qs.measure("".concat(ea," ").concat(t),"".concat(ea," ").concat(t," begins"),"".concat(ea," ").concat(t," ends"))},oc={begin:U1,end:fp},Ni=function(){};function Vu(e){var t=e.getAttribute?e.getAttribute(ur):null;return typeof t=="string"}function Y1(e){var t=e.getAttribute?e.getAttribute(Jl):null,n=e.getAttribute?e.getAttribute(Zl):null;return t&&n}function W1(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(Z.replacementClass)}function V1(){if(Z.autoReplaceSvg===!0)return Mi.replace;var e=Mi[Z.autoReplaceSvg];return e||Mi.replace}function q1(e){return $e.createElementNS("http://www.w3.org/2000/svg",e)}function K1(e){return $e.createElement(e)}function dp(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?q1:K1:n;if(typeof e=="string")return $e.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(dp(o,{ceFn:r}))}),a}function G1(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Mi={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(dp(a),n)}),n.getAttribute(ur)===null&&Z.keepOriginalSource){var r=$e.createComment(G1(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~ec(n).indexOf(Z.replacementClass))return Mi.replace(t);var a=new RegExp("".concat(Z.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===Z.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return Ha(s)}).join(`
`);n.setAttribute(ur,""),n.innerHTML=o}};function qu(e){e()}function mp(e,t){var n=typeof t=="function"?t:Ni;if(e.length===0)n();else{var r=qu;Z.mutateApproach===e1&&(r=Cn.requestAnimationFrame||qu),r(function(){var a=V1(),i=oc.begin("mutate");e.map(a),i(),n()})}}var sc=!1;function pp(){sc=!0}function Ks(){sc=!1}var to=null;function Ku(e){if(Du&&Z.observeMutations){var t=e.treeCallback,n=t===void 0?Ni:t,r=e.nodeCallback,a=r===void 0?Ni:r,i=e.pseudoElementsCallback,o=i===void 0?Ni:i,s=e.observeMutationsRoot,l=s===void 0?$e:s;to=new Du(function(u){if(!sc){var c=$n();qr(u).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!Vu(f.addedNodes[0])&&(Z.searchPseudoElements&&o(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&Z.searchPseudoElements&&o(f.target.parentNode),f.type==="attributes"&&Vu(f.target)&&~s1.indexOf(f.attributeName))if(f.attributeName==="class"&&Y1(f.target)){var p=Co(ec(f.target)),m=p.prefix,b=p.iconName;f.target.setAttribute(Jl,m||c),b&&f.target.setAttribute(Zl,b)}else W1(f.target)&&a(f.target)})}}),un&&to.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function X1(){to&&to.disconnect()}function J1(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function Z1(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=Co(ec(e));return a.prefix||(a.prefix=$n()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=C1(a.prefix,e.innerText)||rc(a.prefix,Bs(e.innerText))),!a.iconName&&Z.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function Q1(e){var t=qr(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return Z.autoA11y&&(n?t["aria-labelledby"]="".concat(Z.replacementClass,"-title-").concat(r||Ta()):(t["aria-hidden"]="true",t.focusable="false")),t}function e0(){return{iconName:null,title:null,titleId:null,prefix:null,transform:zt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Gu(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Z1(e),r=n.iconName,a=n.prefix,i=n.rest,o=Q1(e),s=Us("parseNodeAttributes",{},e),l=t.styleParser?J1(e):[];return q({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:zt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var t0=Tt.styles;function hp(e){var t=Z.autoReplaceSvg==="nest"?Gu(e,{styleParser:!1}):Gu(e);return~t.extra.classes.indexOf(Jm)?rn("generateLayersText",e,t):rn("generateSvgReplacementMutation",e,t)}var Pn=new Set;Ql.map(function(e){Pn.add("fa-".concat(e))});Object.keys(Ea[Te]).map(Pn.add.bind(Pn));Object.keys(Ea[Le]).map(Pn.add.bind(Pn));Pn=za(Pn);function Xu(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!un)return Promise.resolve();var n=$e.documentElement.classList,r=function(f){return n.add("".concat(Fu,"-").concat(f))},a=function(f){return n.remove("".concat(Fu,"-").concat(f))},i=Z.autoFetchSvg?Pn:Ql.map(function(c){return"fa-".concat(c)}).concat(Object.keys(t0));i.includes("fa")||i.push("fa");var o=[".".concat(Jm,":not([").concat(ur,"])")].concat(i.map(function(c){return".".concat(c,":not([").concat(ur,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=qr(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=oc.begin("onTree"),u=s.reduce(function(c,f){try{var p=hp(f);p&&c.push(p)}catch(m){Xm||m.name==="MissingIcon"&&console.error(m)}return c},[]);return new Promise(function(c,f){Promise.all(u).then(function(p){mp(p,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),c()})}).catch(function(p){l(),f(p)})})}function n0(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;hp(e).then(function(n){n&&mp([n],t)})}function r0(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Ys(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:Ys(a||{})),e(r,q(q({},n),{},{mask:a}))}}var a0=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?zt:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,u=n.maskId,c=u===void 0?null:u,f=n.title,p=f===void 0?null:f,m=n.titleId,b=m===void 0?null:m,y=n.classes,A=y===void 0?[]:y,g=n.attributes,h=g===void 0?{}:g,_=n.styles,d=_===void 0?{}:_;if(t){var E=t.prefix,x=t.iconName,T=t.icon;return $o(q({type:"icon"},t),function(){return fr("beforeDOMElementCreation",{iconDefinition:t,params:n}),Z.autoA11y&&(p?h["aria-labelledby"]="".concat(Z.replacementClass,"-title-").concat(b||Ta()):(h["aria-hidden"]="true",h.focusable="false")),ic({icons:{main:Ws(T),mask:l?Ws(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:E,iconName:x,transform:q(q({},zt),a),symbol:o,title:p,maskId:c,titleId:b,extra:{attributes:h,styles:d,classes:A}})})}},i0={mixout:function(){return{icon:r0(a0)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Xu,n.nodeCallback=n0,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?$e:r,i=n.callback,o=i===void 0?function(){}:i;return Xu(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,u=r.symbol,c=r.mask,f=r.maskId,p=r.extra;return new Promise(function(m,b){Promise.all([Vs(a,s),c.iconName?Vs(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(y){var A=Gl(y,2),g=A[0],h=A[1];m([n,ic({icons:{main:g,mask:h},prefix:s,iconName:a,transform:l,symbol:u,maskId:f,title:i,titleId:o,extra:p,watchable:!0})])}).catch(b)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=ko(s);l.length>0&&(a.style=l);var u;return tc(o)&&(u=rn("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(u||i.icon),{children:r,attributes:a}}}},o0={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return $o({type:"layer"},function(){fr("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(Z.cssPrefix,"-layers")].concat(za(i)).join(" ")},children:o}]})}}}},s0={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,c=r.styles,f=c===void 0?{}:c;return $o({type:"counter",content:n},function(){return fr("beforeDOMElementCreation",{content:n,params:r}),z1({content:n.toString(),title:i,extra:{attributes:u,styles:f,classes:["".concat(Z.cssPrefix,"-layers-counter")].concat(za(s))}})})}}}},l0={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?zt:a,o=r.title,s=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,c=r.attributes,f=c===void 0?{}:c,p=r.styles,m=p===void 0?{}:p;return $o({type:"text",content:n},function(){return fr("beforeDOMElementCreation",{content:n,params:r}),Yu({content:n,transform:q(q({},zt),i),title:s,extra:{attributes:f,styles:m,classes:["".concat(Z.cssPrefix,"-layers-text")].concat(za(u))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(qm){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();s=c.width/u,l=c.height/u}return Z.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Yu({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},c0=new RegExp('"',"ug"),Ju=[1105920,1112319];function u0(e){var t=e.replace(c0,""),n=A1(t,0),r=n>=Ju[0]&&n<=Ju[1],a=t.length===2?t[0]===t[1]:!1;return{value:Bs(a?t[0]:t),isSecondary:r||a}}function Zu(e,t){var n="".concat(Qy).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=qr(e.children),o=i.filter(function(T){return T.getAttribute(zs)===t})[0],s=Cn.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(a1),u=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&c!=="none"&&c!==""){var f=s.getPropertyValue("content"),p=~["Sharp"].indexOf(l[2])?Le:Te,m=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Oa[p][l[2].toLowerCase()]:i1[p][u],b=u0(f),y=b.value,A=b.isSecondary,g=l[0].startsWith("FontAwesome"),h=rc(m,y),_=h;if(g){var d=$1(y);d.iconName&&d.prefix&&(h=d.iconName,m=d.prefix)}if(h&&!A&&(!o||o.getAttribute(Jl)!==m||o.getAttribute(Zl)!==_)){e.setAttribute(n,_),o&&e.removeChild(o);var E=e0(),x=E.extra;x.attributes[zs]=t,Vs(h,m).then(function(T){var F=ic(q(q({},E),{},{icons:{main:T,mask:ac()},prefix:m,iconName:_,extra:x,watchable:!0})),I=$e.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(I,e.firstChild):e.appendChild(I),I.outerHTML=F.map(function(H){return Ha(H)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function f0(e){return Promise.all([Zu(e,"::before"),Zu(e,"::after")])}function d0(e){return e.parentNode!==document.head&&!~t1.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(zs)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Qu(e){if(un)return new Promise(function(t,n){var r=qr(e.querySelectorAll("*")).filter(d0).map(f0),a=oc.begin("searchPseudoElements");pp(),Promise.all(r).then(function(){a(),Ks(),t()}).catch(function(){a(),Ks(),n()})})}var m0={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Qu,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?$e:r;Z.searchPseudoElements&&Qu(a)}}},ef=!1,p0={mixout:function(){return{dom:{unwatch:function(){pp(),ef=!0}}}},hooks:function(){return{bootstrap:function(){Ku(Us("mutationObserverCallbacks",{}))},noAuto:function(){X1()},watch:function(n){var r=n.observeMutationsRoot;ef?Ks():Ku(Us("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},tf=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},h0={mixout:function(){return{parse:{transform:function(n){return tf(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=tf(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),u="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),c="rotate(".concat(a.rotate," 0 0)"),f={transform:"".concat(l," ").concat(u," ").concat(c)},p={transform:"translate(".concat(o/2*-1," -256)")},m={outer:s,inner:f,path:p};return{tag:"g",attributes:q({},m.outer),children:[{tag:"g",attributes:q({},m.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:q(q({},r.icon.attributes),m.path)}]}]}}}},rs={x:0,y:0,width:"100%",height:"100%"};function nf(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function v0(e){return e.tag==="g"?e.children:[e]}var g0={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?Co(a.split(" ").map(function(o){return o.trim()})):ac();return i.prefix||(i.prefix=$n()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,u=i.width,c=i.icon,f=o.width,p=o.icon,m=v1({transform:l,containerWidth:f,iconWidth:u}),b={tag:"rect",attributes:q(q({},rs),{},{fill:"white"})},y=c.children?{children:c.children.map(nf)}:{},A={tag:"g",attributes:q({},m.inner),children:[nf(q({tag:c.tag,attributes:q(q({},c.attributes),m.path)},y))]},g={tag:"g",attributes:q({},m.outer),children:[A]},h="mask-".concat(s||Ta()),_="clip-".concat(s||Ta()),d={tag:"mask",attributes:q(q({},rs),{},{id:h,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[b,g]},E={tag:"defs",children:[{tag:"clipPath",attributes:{id:_},children:v0(p)},d]};return r.push(E,{tag:"rect",attributes:q({fill:"currentColor","clip-path":"url(#".concat(_,")"),mask:"url(#".concat(h,")")},rs)}),{children:r,attributes:a}}}},b0={provides:function(t){var n=!1;Cn.matchMedia&&(n=Cn.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:q(q({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=q(q({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:q(q({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:q(q({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:q(q({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:q(q({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:q(q({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:q(q({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:q(q({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},y0={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},w0=[y1,i0,o0,s0,l0,m0,p0,h0,g0,b0,y0];M1(w0,{mixoutsTo:mt});mt.noAuto;mt.config;mt.library;mt.dom;var Gs=mt.parse;mt.findIconDefinition;mt.toHtml;var _0=mt.icon;mt.layer;mt.text;mt.counter;function rf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Xt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?rf(Object(n),!0).forEach(function(r){nt(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):rf(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function x0(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function A0(e){var t=x0(e,"string");return typeof t=="symbol"?t:t+""}function no(e){"@babel/helpers - typeof";return no=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},no(e)}function nt(e,t,n){return t=A0(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function E0(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function O0(e,t){if(e==null)return{};var n=E0(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var S0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},vp={exports:{}};(function(e){(function(t){var n=function(g,h,_){if(!u(h)||f(h)||p(h)||m(h)||l(h))return h;var d,E=0,x=0;if(c(h))for(d=[],x=h.length;E<x;E++)d.push(n(g,h[E],_));else{d={};for(var T in h)Object.prototype.hasOwnProperty.call(h,T)&&(d[g(T,_)]=n(g,h[T],_))}return d},r=function(g,h){h=h||{};var _=h.separator||"_",d=h.split||/(?=[A-Z])/;return g.split(d).join(_)},a=function(g){return b(g)?g:(g=g.replace(/[\-_\s]+(.)?/g,function(h,_){return _?_.toUpperCase():""}),g.substr(0,1).toLowerCase()+g.substr(1))},i=function(g){var h=a(g);return h.substr(0,1).toUpperCase()+h.substr(1)},o=function(g,h){return r(g,h).toLowerCase()},s=Object.prototype.toString,l=function(g){return typeof g=="function"},u=function(g){return g===Object(g)},c=function(g){return s.call(g)=="[object Array]"},f=function(g){return s.call(g)=="[object Date]"},p=function(g){return s.call(g)=="[object RegExp]"},m=function(g){return s.call(g)=="[object Boolean]"},b=function(g){return g=g-0,g===g},y=function(g,h){var _=h&&"process"in h?h.process:h;return typeof _!="function"?g:function(d,E){return _(d,g,E)}},A={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(g,h){return n(y(a,h),g)},decamelizeKeys:function(g,h){return n(y(o,h),g,h)},pascalizeKeys:function(g,h){return n(y(i,h),g)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=A:t.humps=A})(S0)})(vp);var k0=vp.exports,T0=["class","style"];function C0(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=k0.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function $0(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function gp(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return gp(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,u){var c=e.attributes[u];switch(u){case"class":l.class=$0(c);break;case"style":l.style=C0(c);break;default:l.attrs[u]=c}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=O0(n,T0);return sm(e.tag,Xt(Xt(Xt({},t),{},{class:a.class,style:Xt(Xt({},a.style),o)},a.attrs),s),r)}var bp=!1;try{bp=!0}catch{}function P0(){if(!bp&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function as(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?nt({},e,t):{}}function N0(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},nt(nt(nt(nt(nt(nt(nt(nt(nt(nt(t,"fa-".concat(e.size),e.size!==null),"fa-rotate-".concat(e.rotation),e.rotation!==null),"fa-pull-".concat(e.pull),e.pull!==null),"fa-swap-opacity",e.swapOpacity),"fa-bounce",e.bounce),"fa-shake",e.shake),"fa-beat",e.beat),"fa-fade",e.fade),"fa-beat-fade",e.beatFade),"fa-flash",e.flash),nt(nt(t,"fa-spin-pulse",e.spinPulse),"fa-spin-reverse",e.spinReverse));return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function af(e){if(e&&no(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Gs.icon)return Gs.icon(e);if(e===null)return null;if(no(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var M0=Ml({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=Ue(function(){return af(t.icon)}),i=Ue(function(){return as("classes",N0(t))}),o=Ue(function(){return as("transform",typeof t.transform=="string"?Gs.transform(t.transform):t.transform)}),s=Ue(function(){return as("mask",af(t.mask))}),l=Ue(function(){return _0(a.value,Xt(Xt(Xt(Xt({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title,titleId:t.titleId,maskId:t.maskId}))});Ut(l,function(c){if(!c)return P0("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var u=Ue(function(){return l.value?gp(l.value.abstract[0],{},r):null});return function(){return u.value}}});const Ua=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n},R0=["white","disabled","title"],L0={__name:"click",props:{text:{type:String,default:""},white:{type:[Boolean,String],default:!1},disable:{type:[Boolean,String],default:!1},icon:{type:[String,Array,Object],default:null},spin:{type:Boolean,default:!1}},setup(e){return(t,n)=>(de(),Ee("comp-click",{white:Se(tr)(e.white),disabled:Se(tr)(e.disable),title:e.text},[e.icon?(de(),ft(Se(M0),{key:0,class:"inline icon",icon:e.icon,spin:e.spin},null,8,["icon","spin"])):He("",!0),jl(bt(e.icon?" ":"")+bt(e.text),1)],8,R0))}},is=Ua(L0,[["__scopeId","data-v-bdf6dc74"]]);var iA={prefix:"fas",iconName:"eye-slash",icon:[640,512,[],"f070","M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"]},oA={prefix:"fas",iconName:"rotate-left",icon:[512,512,["rotate-back","rotate-backward","undo-alt"],"f2ea","M48.5 224H40c-13.3 0-24-10.7-24-24V72c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2L98.6 96.6c87.6-86.5 228.7-86.2 315.8 1c87.5 87.5 87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3c-62.2-62.2-162.7-62.5-225.3-1L185 183c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8H48.5z"]},sA={prefix:"fas",iconName:"eye",icon:[576,512,[128065],"f06e","M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"]},I0={prefix:"fas",iconName:"star-of-david",icon:[512,512,[10017],"f69a","M404.2 309.5L383.1 344h42.3l-21.1-34.5zM371.4 256l-54-88H194.6l-54 88 54 88H317.4l54-88zm65.7 0l53.4 87c3.6 5.9 5.5 12.7 5.5 19.6c0 20.7-16.8 37.4-37.4 37.4H348.7l-56.2 91.5C284.8 504.3 270.9 512 256 512s-28.8-7.7-36.6-20.5L163.3 400H53.4C32.8 400 16 383.2 16 362.6c0-6.9 1.9-13.7 5.5-19.6l53.4-87L21.5 169c-3.6-5.9-5.5-12.7-5.5-19.6C16 128.8 32.8 112 53.4 112H163.3l56.2-91.5C227.2 7.7 241.1 0 256 0s28.8 7.7 36.6 20.5L348.7 112H458.6c20.7 0 37.4 16.8 37.4 37.4c0 6.9-1.9 13.7-5.5 19.6l-53.4 87zm-54-88l21.1 34.5L425.4 168H383.1zM283 112L256 68l-27 44h54zM128.9 168H86.6l21.1 34.5L128.9 168zM107.8 309.5L86.6 344h42.3l-21.1-34.5zM229 400l27 44 27-44H229z"]},lA={prefix:"fas",iconName:"angle-down",icon:[448,512,[8964],"f107","M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"]},cA={prefix:"fas",iconName:"paragraph",icon:[448,512,[182],"f1dd","M192 32h64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H384l0 352c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-352H288V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V352H192c-88.4 0-160-71.6-160-160s71.6-160 160-160z"]},uA={prefix:"fas",iconName:"angle-up",icon:[448,512,[8963],"f106","M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z"]},D0={prefix:"fas",iconName:"trophy",icon:[576,512,[127942],"f091","M400 0H176c-26.5 0-48.1 21.8-47.1 48.2c.2 5.3 .4 10.6 .7 15.8H24C10.7 64 0 74.7 0 88c0 92.6 33.5 157 78.5 200.7c44.3 43.1 98.3 64.8 138.1 75.8c23.4 6.5 39.4 26 39.4 45.6c0 20.9-17 37.9-37.9 37.9H192c-17.7 0-32 14.3-32 32s14.3 32 32 32H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H357.9C337 448 320 431 320 410.1c0-19.6 15.9-39.2 39.4-45.6c39.9-11 93.9-32.7 138.2-75.8C542.5 245 576 180.6 576 88c0-13.3-10.7-24-24-24H446.4c.3-5.2 .5-10.4 .7-15.8C448.1 21.8 426.5 0 400 0zM48.9 112h84.4c9.1 90.1 29.2 150.3 51.9 190.6c-24.9-11-50.8-26.5-73.2-48.3c-32-31.1-58-76-63-142.3zM464.1 254.3c-22.4 21.8-48.3 37.3-73.2 48.3c22.7-40.3 42.8-100.5 51.9-190.6h84.4c-5.1 66.3-31.1 111.2-63 142.3z"]},of={prefix:"fas",iconName:"book",icon:[448,512,[128212],"f02d","M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z"]},fA={prefix:"fas",iconName:"check",icon:[448,512,[10003,10004],"f00c","M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"]},it="top",xt="bottom",At="right",ot="left",lc="auto",Ya=[it,xt,At,ot],Dr="start",Ca="end",F0="clippingParents",yp="viewport",Jr="popper",j0="reference",sf=Ya.reduce(function(e,t){return e.concat([t+"-"+Dr,t+"-"+Ca])},[]),wp=[].concat(Ya,[lc]).reduce(function(e,t){return e.concat([t,t+"-"+Dr,t+"-"+Ca])},[]),z0="beforeRead",B0="read",H0="afterRead",U0="beforeMain",Y0="main",W0="afterMain",V0="beforeWrite",q0="write",K0="afterWrite",G0=[z0,B0,H0,U0,Y0,W0,V0,q0,K0];function qt(e){return e?(e.nodeName||"").toLowerCase():null}function dt(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function dr(e){var t=dt(e).Element;return e instanceof t||e instanceof Element}function _t(e){var t=dt(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function cc(e){if(typeof ShadowRoot>"u")return!1;var t=dt(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function X0(e){var t=e.state;Object.keys(t.elements).forEach(function(n){var r=t.styles[n]||{},a=t.attributes[n]||{},i=t.elements[n];!_t(i)||!qt(i)||(Object.assign(i.style,r),Object.keys(a).forEach(function(o){var s=a[o];s===!1?i.removeAttribute(o):i.setAttribute(o,s===!0?"":s)}))})}function J0(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach(function(r){var a=t.elements[r],i=t.attributes[r]||{},o=Object.keys(t.styles.hasOwnProperty(r)?t.styles[r]:n[r]),s=o.reduce(function(l,u){return l[u]="",l},{});!_t(a)||!qt(a)||(Object.assign(a.style,s),Object.keys(i).forEach(function(l){a.removeAttribute(l)}))})}}const _p={name:"applyStyles",enabled:!0,phase:"write",fn:X0,effect:J0,requires:["computeStyles"]};function Yt(e){return e.split("-")[0]}var rr=Math.max,ro=Math.min,Fr=Math.round;function Xs(){var e=navigator.userAgentData;return e!=null&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function xp(){return!/^((?!chrome|android).)*safari/i.test(Xs())}function jr(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!1);var r=e.getBoundingClientRect(),a=1,i=1;t&&_t(e)&&(a=e.offsetWidth>0&&Fr(r.width)/e.offsetWidth||1,i=e.offsetHeight>0&&Fr(r.height)/e.offsetHeight||1);var o=dr(e)?dt(e):window,s=o.visualViewport,l=!xp()&&n,u=(r.left+(l&&s?s.offsetLeft:0))/a,c=(r.top+(l&&s?s.offsetTop:0))/i,f=r.width/a,p=r.height/i;return{width:f,height:p,top:c,right:u+f,bottom:c+p,left:u,x:u,y:c}}function uc(e){var t=jr(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function Ap(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&cc(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function an(e){return dt(e).getComputedStyle(e)}function Z0(e){return["table","td","th"].indexOf(qt(e))>=0}function Dn(e){return((dr(e)?e.ownerDocument:e.document)||window.document).documentElement}function Po(e){return qt(e)==="html"?e:e.assignedSlot||e.parentNode||(cc(e)?e.host:null)||Dn(e)}function lf(e){return!_t(e)||an(e).position==="fixed"?null:e.offsetParent}function Q0(e){var t=/firefox/i.test(Xs()),n=/Trident/i.test(Xs());if(n&&_t(e)){var r=an(e);if(r.position==="fixed")return null}var a=Po(e);for(cc(a)&&(a=a.host);_t(a)&&["html","body"].indexOf(qt(a))<0;){var i=an(a);if(i.transform!=="none"||i.perspective!=="none"||i.contain==="paint"||["transform","perspective"].indexOf(i.willChange)!==-1||t&&i.willChange==="filter"||t&&i.filter&&i.filter!=="none")return a;a=a.parentNode}return null}function Wa(e){for(var t=dt(e),n=lf(e);n&&Z0(n)&&an(n).position==="static";)n=lf(n);return n&&(qt(n)==="html"||qt(n)==="body"&&an(n).position==="static")?t:n||Q0(e)||t}function fc(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function fa(e,t,n){return rr(e,ro(t,n))}function ew(e,t,n){var r=fa(e,t,n);return r>n?n:r}function Ep(){return{top:0,right:0,bottom:0,left:0}}function Op(e){return Object.assign({},Ep(),e)}function Sp(e,t){return t.reduce(function(n,r){return n[r]=e,n},{})}var tw=function(t,n){return t=typeof t=="function"?t(Object.assign({},n.rects,{placement:n.placement})):t,Op(typeof t!="number"?t:Sp(t,Ya))};function nw(e){var t,n=e.state,r=e.name,a=e.options,i=n.elements.arrow,o=n.modifiersData.popperOffsets,s=Yt(n.placement),l=fc(s),u=[ot,At].indexOf(s)>=0,c=u?"height":"width";if(!(!i||!o)){var f=tw(a.padding,n),p=uc(i),m=l==="y"?it:ot,b=l==="y"?xt:At,y=n.rects.reference[c]+n.rects.reference[l]-o[l]-n.rects.popper[c],A=o[l]-n.rects.reference[l],g=Wa(i),h=g?l==="y"?g.clientHeight||0:g.clientWidth||0:0,_=y/2-A/2,d=f[m],E=h-p[c]-f[b],x=h/2-p[c]/2+_,T=fa(d,x,E),F=l;n.modifiersData[r]=(t={},t[F]=T,t.centerOffset=T-x,t)}}function rw(e){var t=e.state,n=e.options,r=n.element,a=r===void 0?"[data-popper-arrow]":r;a!=null&&(typeof a=="string"&&(a=t.elements.popper.querySelector(a),!a)||Ap(t.elements.popper,a)&&(t.elements.arrow=a))}const aw={name:"arrow",enabled:!0,phase:"main",fn:nw,effect:rw,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function zr(e){return e.split("-")[1]}var iw={top:"auto",right:"auto",bottom:"auto",left:"auto"};function ow(e,t){var n=e.x,r=e.y,a=t.devicePixelRatio||1;return{x:Fr(n*a)/a||0,y:Fr(r*a)/a||0}}function cf(e){var t,n=e.popper,r=e.popperRect,a=e.placement,i=e.variation,o=e.offsets,s=e.position,l=e.gpuAcceleration,u=e.adaptive,c=e.roundOffsets,f=e.isFixed,p=o.x,m=p===void 0?0:p,b=o.y,y=b===void 0?0:b,A=typeof c=="function"?c({x:m,y}):{x:m,y};m=A.x,y=A.y;var g=o.hasOwnProperty("x"),h=o.hasOwnProperty("y"),_=ot,d=it,E=window;if(u){var x=Wa(n),T="clientHeight",F="clientWidth";if(x===dt(n)&&(x=Dn(n),an(x).position!=="static"&&s==="absolute"&&(T="scrollHeight",F="scrollWidth")),x=x,a===it||(a===ot||a===At)&&i===Ca){d=xt;var I=f&&x===E&&E.visualViewport?E.visualViewport.height:x[T];y-=I-r.height,y*=l?1:-1}if(a===ot||(a===it||a===xt)&&i===Ca){_=At;var H=f&&x===E&&E.visualViewport?E.visualViewport.width:x[F];m-=H-r.width,m*=l?1:-1}}var B=Object.assign({position:s},u&&iw),ie=c===!0?ow({x:m,y},dt(n)):{x:m,y};if(m=ie.x,y=ie.y,l){var se;return Object.assign({},B,(se={},se[d]=h?"0":"",se[_]=g?"0":"",se.transform=(E.devicePixelRatio||1)<=1?"translate("+m+"px, "+y+"px)":"translate3d("+m+"px, "+y+"px, 0)",se))}return Object.assign({},B,(t={},t[d]=h?y+"px":"",t[_]=g?m+"px":"",t.transform="",t))}function sw(e){var t=e.state,n=e.options,r=n.gpuAcceleration,a=r===void 0?!0:r,i=n.adaptive,o=i===void 0?!0:i,s=n.roundOffsets,l=s===void 0?!0:s,u={placement:Yt(t.placement),variation:zr(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:a,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,cf(Object.assign({},u,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:o,roundOffsets:l})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,cf(Object.assign({},u,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const lw={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:sw,data:{}};var hi={passive:!0};function cw(e){var t=e.state,n=e.instance,r=e.options,a=r.scroll,i=a===void 0?!0:a,o=r.resize,s=o===void 0?!0:o,l=dt(t.elements.popper),u=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&u.forEach(function(c){c.addEventListener("scroll",n.update,hi)}),s&&l.addEventListener("resize",n.update,hi),function(){i&&u.forEach(function(c){c.removeEventListener("scroll",n.update,hi)}),s&&l.removeEventListener("resize",n.update,hi)}}const uw={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:cw,data:{}};var fw={left:"right",right:"left",bottom:"top",top:"bottom"};function Ri(e){return e.replace(/left|right|bottom|top/g,function(t){return fw[t]})}var dw={start:"end",end:"start"};function uf(e){return e.replace(/start|end/g,function(t){return dw[t]})}function dc(e){var t=dt(e),n=t.pageXOffset,r=t.pageYOffset;return{scrollLeft:n,scrollTop:r}}function mc(e){return jr(Dn(e)).left+dc(e).scrollLeft}function mw(e,t){var n=dt(e),r=Dn(e),a=n.visualViewport,i=r.clientWidth,o=r.clientHeight,s=0,l=0;if(a){i=a.width,o=a.height;var u=xp();(u||!u&&t==="fixed")&&(s=a.offsetLeft,l=a.offsetTop)}return{width:i,height:o,x:s+mc(e),y:l}}function pw(e){var t,n=Dn(e),r=dc(e),a=(t=e.ownerDocument)==null?void 0:t.body,i=rr(n.scrollWidth,n.clientWidth,a?a.scrollWidth:0,a?a.clientWidth:0),o=rr(n.scrollHeight,n.clientHeight,a?a.scrollHeight:0,a?a.clientHeight:0),s=-r.scrollLeft+mc(e),l=-r.scrollTop;return an(a||n).direction==="rtl"&&(s+=rr(n.clientWidth,a?a.clientWidth:0)-i),{width:i,height:o,x:s,y:l}}function pc(e){var t=an(e),n=t.overflow,r=t.overflowX,a=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+a+r)}function kp(e){return["html","body","#document"].indexOf(qt(e))>=0?e.ownerDocument.body:_t(e)&&pc(e)?e:kp(Po(e))}function da(e,t){var n;t===void 0&&(t=[]);var r=kp(e),a=r===((n=e.ownerDocument)==null?void 0:n.body),i=dt(r),o=a?[i].concat(i.visualViewport||[],pc(r)?r:[]):r,s=t.concat(o);return a?s:s.concat(da(Po(o)))}function Js(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function hw(e,t){var n=jr(e,!1,t==="fixed");return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}function ff(e,t,n){return t===yp?Js(mw(e,n)):dr(t)?hw(t,n):Js(pw(Dn(e)))}function vw(e){var t=da(Po(e)),n=["absolute","fixed"].indexOf(an(e).position)>=0,r=n&&_t(e)?Wa(e):e;return dr(r)?t.filter(function(a){return dr(a)&&Ap(a,r)&&qt(a)!=="body"}):[]}function gw(e,t,n,r){var a=t==="clippingParents"?vw(e):[].concat(t),i=[].concat(a,[n]),o=i[0],s=i.reduce(function(l,u){var c=ff(e,u,r);return l.top=rr(c.top,l.top),l.right=ro(c.right,l.right),l.bottom=ro(c.bottom,l.bottom),l.left=rr(c.left,l.left),l},ff(e,o,r));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function Tp(e){var t=e.reference,n=e.element,r=e.placement,a=r?Yt(r):null,i=r?zr(r):null,o=t.x+t.width/2-n.width/2,s=t.y+t.height/2-n.height/2,l;switch(a){case it:l={x:o,y:t.y-n.height};break;case xt:l={x:o,y:t.y+t.height};break;case At:l={x:t.x+t.width,y:s};break;case ot:l={x:t.x-n.width,y:s};break;default:l={x:t.x,y:t.y}}var u=a?fc(a):null;if(u!=null){var c=u==="y"?"height":"width";switch(i){case Dr:l[u]=l[u]-(t[c]/2-n[c]/2);break;case Ca:l[u]=l[u]+(t[c]/2-n[c]/2);break}}return l}function $a(e,t){t===void 0&&(t={});var n=t,r=n.placement,a=r===void 0?e.placement:r,i=n.strategy,o=i===void 0?e.strategy:i,s=n.boundary,l=s===void 0?F0:s,u=n.rootBoundary,c=u===void 0?yp:u,f=n.elementContext,p=f===void 0?Jr:f,m=n.altBoundary,b=m===void 0?!1:m,y=n.padding,A=y===void 0?0:y,g=Op(typeof A!="number"?A:Sp(A,Ya)),h=p===Jr?j0:Jr,_=e.rects.popper,d=e.elements[b?h:p],E=gw(dr(d)?d:d.contextElement||Dn(e.elements.popper),l,c,o),x=jr(e.elements.reference),T=Tp({reference:x,element:_,strategy:"absolute",placement:a}),F=Js(Object.assign({},_,T)),I=p===Jr?F:x,H={top:E.top-I.top+g.top,bottom:I.bottom-E.bottom+g.bottom,left:E.left-I.left+g.left,right:I.right-E.right+g.right},B=e.modifiersData.offset;if(p===Jr&&B){var ie=B[a];Object.keys(H).forEach(function(se){var Y=[At,xt].indexOf(se)>=0?1:-1,D=[it,xt].indexOf(se)>=0?"y":"x";H[se]+=ie[D]*Y})}return H}function bw(e,t){t===void 0&&(t={});var n=t,r=n.placement,a=n.boundary,i=n.rootBoundary,o=n.padding,s=n.flipVariations,l=n.allowedAutoPlacements,u=l===void 0?wp:l,c=zr(r),f=c?s?sf:sf.filter(function(b){return zr(b)===c}):Ya,p=f.filter(function(b){return u.indexOf(b)>=0});p.length===0&&(p=f);var m=p.reduce(function(b,y){return b[y]=$a(e,{placement:y,boundary:a,rootBoundary:i,padding:o})[Yt(y)],b},{});return Object.keys(m).sort(function(b,y){return m[b]-m[y]})}function yw(e){if(Yt(e)===lc)return[];var t=Ri(e);return[uf(e),t,uf(t)]}function ww(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var a=n.mainAxis,i=a===void 0?!0:a,o=n.altAxis,s=o===void 0?!0:o,l=n.fallbackPlacements,u=n.padding,c=n.boundary,f=n.rootBoundary,p=n.altBoundary,m=n.flipVariations,b=m===void 0?!0:m,y=n.allowedAutoPlacements,A=t.options.placement,g=Yt(A),h=g===A,_=l||(h||!b?[Ri(A)]:yw(A)),d=[A].concat(_).reduce(function(be,_e){return be.concat(Yt(_e)===lc?bw(t,{placement:_e,boundary:c,rootBoundary:f,padding:u,flipVariations:b,allowedAutoPlacements:y}):_e)},[]),E=t.rects.reference,x=t.rects.popper,T=new Map,F=!0,I=d[0],H=0;H<d.length;H++){var B=d[H],ie=Yt(B),se=zr(B)===Dr,Y=[it,xt].indexOf(ie)>=0,D=Y?"width":"height",$=$a(t,{placement:B,boundary:c,rootBoundary:f,altBoundary:p,padding:u}),M=Y?se?At:ot:se?xt:it;E[D]>x[D]&&(M=Ri(M));var C=Ri(M),V=[];if(i&&V.push($[ie]<=0),s&&V.push($[M]<=0,$[C]<=0),V.every(function(be){return be})){I=B,F=!1;break}T.set(B,V)}if(F)for(var G=b?3:1,ae=function(_e){var xe=d.find(function(Re){var Ne=T.get(Re);if(Ne)return Ne.slice(0,_e).every(function(Fe){return Fe})});if(xe)return I=xe,"break"},oe=G;oe>0;oe--){var ge=ae(oe);if(ge==="break")break}t.placement!==I&&(t.modifiersData[r]._skip=!0,t.placement=I,t.reset=!0)}}const _w={name:"flip",enabled:!0,phase:"main",fn:ww,requiresIfExists:["offset"],data:{_skip:!1}};function df(e,t,n){return n===void 0&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function mf(e){return[it,At,xt,ot].some(function(t){return e[t]>=0})}function xw(e){var t=e.state,n=e.name,r=t.rects.reference,a=t.rects.popper,i=t.modifiersData.preventOverflow,o=$a(t,{elementContext:"reference"}),s=$a(t,{altBoundary:!0}),l=df(o,r),u=df(s,a,i),c=mf(l),f=mf(u);t.modifiersData[n]={referenceClippingOffsets:l,popperEscapeOffsets:u,isReferenceHidden:c,hasPopperEscaped:f},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":c,"data-popper-escaped":f})}const Aw={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:xw};function Ew(e,t,n){var r=Yt(e),a=[ot,it].indexOf(r)>=0?-1:1,i=typeof n=="function"?n(Object.assign({},t,{placement:e})):n,o=i[0],s=i[1];return o=o||0,s=(s||0)*a,[ot,At].indexOf(r)>=0?{x:s,y:o}:{x:o,y:s}}function Ow(e){var t=e.state,n=e.options,r=e.name,a=n.offset,i=a===void 0?[0,0]:a,o=wp.reduce(function(c,f){return c[f]=Ew(f,t.rects,i),c},{}),s=o[t.placement],l=s.x,u=s.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=l,t.modifiersData.popperOffsets.y+=u),t.modifiersData[r]=o}const Sw={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Ow};function kw(e){var t=e.state,n=e.name;t.modifiersData[n]=Tp({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}const Tw={name:"popperOffsets",enabled:!0,phase:"read",fn:kw,data:{}};function Cw(e){return e==="x"?"y":"x"}function $w(e){var t=e.state,n=e.options,r=e.name,a=n.mainAxis,i=a===void 0?!0:a,o=n.altAxis,s=o===void 0?!1:o,l=n.boundary,u=n.rootBoundary,c=n.altBoundary,f=n.padding,p=n.tether,m=p===void 0?!0:p,b=n.tetherOffset,y=b===void 0?0:b,A=$a(t,{boundary:l,rootBoundary:u,padding:f,altBoundary:c}),g=Yt(t.placement),h=zr(t.placement),_=!h,d=fc(g),E=Cw(d),x=t.modifiersData.popperOffsets,T=t.rects.reference,F=t.rects.popper,I=typeof y=="function"?y(Object.assign({},t.rects,{placement:t.placement})):y,H=typeof I=="number"?{mainAxis:I,altAxis:I}:Object.assign({mainAxis:0,altAxis:0},I),B=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,ie={x:0,y:0};if(x){if(i){var se,Y=d==="y"?it:ot,D=d==="y"?xt:At,$=d==="y"?"height":"width",M=x[d],C=M+A[Y],V=M-A[D],G=m?-F[$]/2:0,ae=h===Dr?T[$]:F[$],oe=h===Dr?-F[$]:-T[$],ge=t.elements.arrow,be=m&&ge?uc(ge):{width:0,height:0},_e=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:Ep(),xe=_e[Y],Re=_e[D],Ne=fa(0,T[$],be[$]),Fe=_?T[$]/2-G-Ne-xe-H.mainAxis:ae-Ne-xe-H.mainAxis,pe=_?-T[$]/2+G+Ne+Re+H.mainAxis:oe+Ne+Re+H.mainAxis,Me=t.elements.arrow&&Wa(t.elements.arrow),Ke=Me?d==="y"?Me.clientTop||0:Me.clientLeft||0:0,v=(se=B?.[d])!=null?se:0,w=M+Fe-v-Ke,O=M+pe-v,P=fa(m?ro(C,w):C,M,m?rr(V,O):V);x[d]=P,ie[d]=P-M}if(s){var N,j=d==="x"?it:ot,U=d==="x"?xt:At,L=x[E],z=E==="y"?"height":"width",R=L+A[j],W=L-A[U],te=[it,ot].indexOf(g)!==-1,ee=(N=B?.[E])!=null?N:0,re=te?R:L-T[z]-F[z]-ee+H.altAxis,ue=te?L+T[z]+F[z]-ee-H.altAxis:W,he=m&&te?ew(re,L,ue):fa(m?re:R,L,m?ue:W);x[E]=he,ie[E]=he-L}t.modifiersData[r]=ie}}const Pw={name:"preventOverflow",enabled:!0,phase:"main",fn:$w,requiresIfExists:["offset"]};function Nw(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function Mw(e){return e===dt(e)||!_t(e)?dc(e):Nw(e)}function Rw(e){var t=e.getBoundingClientRect(),n=Fr(t.width)/e.offsetWidth||1,r=Fr(t.height)/e.offsetHeight||1;return n!==1||r!==1}function Lw(e,t,n){n===void 0&&(n=!1);var r=_t(t),a=_t(t)&&Rw(t),i=Dn(t),o=jr(e,a,n),s={scrollLeft:0,scrollTop:0},l={x:0,y:0};return(r||!r&&!n)&&((qt(t)!=="body"||pc(i))&&(s=Mw(t)),_t(t)?(l=jr(t,!0),l.x+=t.clientLeft,l.y+=t.clientTop):i&&(l.x=mc(i))),{x:o.left+s.scrollLeft-l.x,y:o.top+s.scrollTop-l.y,width:o.width,height:o.height}}function Iw(e){var t=new Map,n=new Set,r=[];e.forEach(function(i){t.set(i.name,i)});function a(i){n.add(i.name);var o=[].concat(i.requires||[],i.requiresIfExists||[]);o.forEach(function(s){if(!n.has(s)){var l=t.get(s);l&&a(l)}}),r.push(i)}return e.forEach(function(i){n.has(i.name)||a(i)}),r}function Dw(e){var t=Iw(e);return G0.reduce(function(n,r){return n.concat(t.filter(function(a){return a.phase===r}))},[])}function Fw(e){var t;return function(){return t||(t=new Promise(function(n){Promise.resolve().then(function(){t=void 0,n(e())})})),t}}function jw(e){var t=e.reduce(function(n,r){var a=n[r.name];return n[r.name]=a?Object.assign({},a,r,{options:Object.assign({},a.options,r.options),data:Object.assign({},a.data,r.data)}):r,n},{});return Object.keys(t).map(function(n){return t[n]})}var pf={placement:"bottom",modifiers:[],strategy:"absolute"};function hf(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some(function(r){return!(r&&typeof r.getBoundingClientRect=="function")})}function zw(e){e===void 0&&(e={});var t=e,n=t.defaultModifiers,r=n===void 0?[]:n,a=t.defaultOptions,i=a===void 0?pf:a;return function(s,l,u){u===void 0&&(u=i);var c={placement:"bottom",orderedModifiers:[],options:Object.assign({},pf,i),modifiersData:{},elements:{reference:s,popper:l},attributes:{},styles:{}},f=[],p=!1,m={state:c,setOptions:function(g){var h=typeof g=="function"?g(c.options):g;y(),c.options=Object.assign({},i,c.options,h),c.scrollParents={reference:dr(s)?da(s):s.contextElement?da(s.contextElement):[],popper:da(l)};var _=Dw(jw([].concat(r,c.options.modifiers)));return c.orderedModifiers=_.filter(function(d){return d.enabled}),b(),m.update()},forceUpdate:function(){if(!p){var g=c.elements,h=g.reference,_=g.popper;if(hf(h,_)){c.rects={reference:Lw(h,Wa(_),c.options.strategy==="fixed"),popper:uc(_)},c.reset=!1,c.placement=c.options.placement,c.orderedModifiers.forEach(function(H){return c.modifiersData[H.name]=Object.assign({},H.data)});for(var d=0;d<c.orderedModifiers.length;d++){if(c.reset===!0){c.reset=!1,d=-1;continue}var E=c.orderedModifiers[d],x=E.fn,T=E.options,F=T===void 0?{}:T,I=E.name;typeof x=="function"&&(c=x({state:c,options:F,name:I,instance:m})||c)}}}},update:Fw(function(){return new Promise(function(A){m.forceUpdate(),A(c)})}),destroy:function(){y(),p=!0}};if(!hf(s,l))return m;m.setOptions(u).then(function(A){!p&&u.onFirstUpdate&&u.onFirstUpdate(A)});function b(){c.orderedModifiers.forEach(function(A){var g=A.name,h=A.options,_=h===void 0?{}:h,d=A.effect;if(typeof d=="function"){var E=d({state:c,name:g,instance:m,options:_}),x=function(){};f.push(E||x)}})}function y(){f.forEach(function(A){return A()}),f=[]}return m}}var Bw=[uw,Tw,lw,_p,Sw,_w,Pw,aw,Aw],Hw=zw({defaultModifiers:Bw}),Uw="tippy-box",Cp="tippy-content",Yw="tippy-backdrop",$p="tippy-arrow",Pp="tippy-svg-arrow",Un={passive:!0,capture:!0},Np=function(){return document.body};function os(e,t,n){if(Array.isArray(e)){var r=e[t];return r??(Array.isArray(n)?n[t]:n)}return e}function hc(e,t){var n={}.toString.call(e);return n.indexOf("[object")===0&&n.indexOf(t+"]")>-1}function Mp(e,t){return typeof e=="function"?e.apply(void 0,t):e}function vf(e,t){if(t===0)return e;var n;return function(r){clearTimeout(n),n=setTimeout(function(){e(r)},t)}}function Ww(e){return e.split(/\s+/).filter(Boolean)}function yr(e){return[].concat(e)}function gf(e,t){e.indexOf(t)===-1&&e.push(t)}function Vw(e){return e.filter(function(t,n){return e.indexOf(t)===n})}function qw(e){return e.split("-")[0]}function ao(e){return[].slice.call(e)}function bf(e){return Object.keys(e).reduce(function(t,n){return e[n]!==void 0&&(t[n]=e[n]),t},{})}function ma(){return document.createElement("div")}function No(e){return["Element","Fragment"].some(function(t){return hc(e,t)})}function Kw(e){return hc(e,"NodeList")}function Gw(e){return hc(e,"MouseEvent")}function Xw(e){return!!(e&&e._tippy&&e._tippy.reference===e)}function Jw(e){return No(e)?[e]:Kw(e)?ao(e):Array.isArray(e)?e:ao(document.querySelectorAll(e))}function ss(e,t){e.forEach(function(n){n&&(n.style.transitionDuration=t+"ms")})}function yf(e,t){e.forEach(function(n){n&&n.setAttribute("data-state",t)})}function Zw(e){var t,n=yr(e),r=n[0];return r!=null&&(t=r.ownerDocument)!=null&&t.body?r.ownerDocument:document}function Qw(e,t){var n=t.clientX,r=t.clientY;return e.every(function(a){var i=a.popperRect,o=a.popperState,s=a.props,l=s.interactiveBorder,u=qw(o.placement),c=o.modifiersData.offset;if(!c)return!0;var f=u==="bottom"?c.top.y:0,p=u==="top"?c.bottom.y:0,m=u==="right"?c.left.x:0,b=u==="left"?c.right.x:0,y=i.top-r+f>l,A=r-i.bottom-p>l,g=i.left-n+m>l,h=n-i.right-b>l;return y||A||g||h})}function ls(e,t,n){var r=t+"EventListener";["transitionend","webkitTransitionEnd"].forEach(function(a){e[r](a,n)})}function wf(e,t){for(var n=t;n;){var r;if(e.contains(n))return!0;n=n.getRootNode==null||(r=n.getRootNode())==null?void 0:r.host}return!1}var Dt={isTouch:!1},_f=0;function e_(){Dt.isTouch||(Dt.isTouch=!0,window.performance&&document.addEventListener("mousemove",Rp))}function Rp(){var e=performance.now();e-_f<20&&(Dt.isTouch=!1,document.removeEventListener("mousemove",Rp)),_f=e}function t_(){var e=document.activeElement;if(Xw(e)){var t=e._tippy;e.blur&&!t.state.isVisible&&e.blur()}}function n_(){document.addEventListener("touchstart",e_,Un),window.addEventListener("blur",t_)}var r_=typeof window<"u"&&typeof document<"u",a_=r_?!!window.msCrypto:!1,i_={animateFill:!1,followCursor:!1,inlinePositioning:!1,sticky:!1},o_={allowHTML:!1,animation:"fade",arrow:!0,content:"",inertia:!1,maxWidth:350,role:"tooltip",theme:"",zIndex:9999},Ct=Object.assign({appendTo:Np,aria:{content:"auto",expanded:"auto"},delay:0,duration:[300,250],getReferenceClientRect:null,hideOnClick:!0,ignoreAttributes:!1,interactive:!1,interactiveBorder:2,interactiveDebounce:0,moveTransition:"",offset:[0,10],onAfterUpdate:function(){},onBeforeUpdate:function(){},onCreate:function(){},onDestroy:function(){},onHidden:function(){},onHide:function(){},onMount:function(){},onShow:function(){},onShown:function(){},onTrigger:function(){},onUntrigger:function(){},onClickOutside:function(){},placement:"top",plugins:[],popperOptions:{},render:null,showOnCreate:!1,touch:!0,trigger:"mouseenter focus",triggerTarget:null},i_,o_),s_=Object.keys(Ct),l_=function(t){var n=Object.keys(t);n.forEach(function(r){Ct[r]=t[r]})};function Lp(e){var t=e.plugins||[],n=t.reduce(function(r,a){var i=a.name,o=a.defaultValue;if(i){var s;r[i]=e[i]!==void 0?e[i]:(s=Ct[i])!=null?s:o}return r},{});return Object.assign({},e,n)}function c_(e,t){var n=t?Object.keys(Lp(Object.assign({},Ct,{plugins:t}))):s_,r=n.reduce(function(a,i){var o=(e.getAttribute("data-tippy-"+i)||"").trim();if(!o)return a;if(i==="content")a[i]=o;else try{a[i]=JSON.parse(o)}catch{a[i]=o}return a},{});return r}function xf(e,t){var n=Object.assign({},t,{content:Mp(t.content,[e])},t.ignoreAttributes?{}:c_(e,t.plugins));return n.aria=Object.assign({},Ct.aria,n.aria),n.aria={expanded:n.aria.expanded==="auto"?t.interactive:n.aria.expanded,content:n.aria.content==="auto"?t.interactive?null:"describedby":n.aria.content},n}var u_=function(){return"innerHTML"};function Zs(e,t){e[u_()]=t}function Af(e){var t=ma();return e===!0?t.className=$p:(t.className=Pp,No(e)?t.appendChild(e):Zs(t,e)),t}function Ef(e,t){No(t.content)?(Zs(e,""),e.appendChild(t.content)):typeof t.content!="function"&&(t.allowHTML?Zs(e,t.content):e.textContent=t.content)}function Qs(e){var t=e.firstElementChild,n=ao(t.children);return{box:t,content:n.find(function(r){return r.classList.contains(Cp)}),arrow:n.find(function(r){return r.classList.contains($p)||r.classList.contains(Pp)}),backdrop:n.find(function(r){return r.classList.contains(Yw)})}}function Ip(e){var t=ma(),n=ma();n.className=Uw,n.setAttribute("data-state","hidden"),n.setAttribute("tabindex","-1");var r=ma();r.className=Cp,r.setAttribute("data-state","hidden"),Ef(r,e.props),t.appendChild(n),n.appendChild(r),a(e.props,e.props);function a(i,o){var s=Qs(t),l=s.box,u=s.content,c=s.arrow;o.theme?l.setAttribute("data-theme",o.theme):l.removeAttribute("data-theme"),typeof o.animation=="string"?l.setAttribute("data-animation",o.animation):l.removeAttribute("data-animation"),o.inertia?l.setAttribute("data-inertia",""):l.removeAttribute("data-inertia"),l.style.maxWidth=typeof o.maxWidth=="number"?o.maxWidth+"px":o.maxWidth,o.role?l.setAttribute("role",o.role):l.removeAttribute("role"),(i.content!==o.content||i.allowHTML!==o.allowHTML)&&Ef(u,e.props),o.arrow?c?i.arrow!==o.arrow&&(l.removeChild(c),l.appendChild(Af(o.arrow))):l.appendChild(Af(o.arrow)):c&&l.removeChild(c)}return{popper:t,onUpdate:a}}Ip.$$tippy=!0;var f_=1,vi=[],cs=[];function d_(e,t){var n=xf(e,Object.assign({},Ct,Lp(bf(t)))),r,a,i,o=!1,s=!1,l=!1,u=!1,c,f,p,m=[],b=vf(w,n.interactiveDebounce),y,A=f_++,g=null,h=Vw(n.plugins),_={isEnabled:!0,isVisible:!1,isDestroyed:!1,isMounted:!1,isShown:!1},d={id:A,reference:e,popper:ma(),popperInstance:g,props:n,state:_,plugins:h,clearDelayTimeouts:re,setProps:ue,setContent:he,show:Ae,hide:Be,hideWithInteractivity:ct,enable:te,disable:ee,unmount:dn,destroy:Ga};if(!n.render)return d;var E=n.render(d),x=E.popper,T=E.onUpdate;x.setAttribute("data-tippy-root",""),x.id="tippy-"+d.id,d.popper=x,e._tippy=d,x._tippy=d;var F=h.map(function(k){return k.fn(d)}),I=e.hasAttribute("aria-expanded");return Me(),G(),M(),C("onCreate",[d]),n.showOnCreate&&R(),x.addEventListener("mouseenter",function(){d.props.interactive&&d.state.isVisible&&d.clearDelayTimeouts()}),x.addEventListener("mouseleave",function(){d.props.interactive&&d.props.trigger.indexOf("mouseenter")>=0&&Y().addEventListener("mousemove",b)}),d;function H(){var k=d.props.touch;return Array.isArray(k)?k:[k,0]}function B(){return H()[0]==="hold"}function ie(){var k;return!!((k=d.props.render)!=null&&k.$$tippy)}function se(){return y||e}function Y(){var k=se().parentNode;return k?Zw(k):document}function D(){return Qs(x)}function $(k){return d.state.isMounted&&!d.state.isVisible||Dt.isTouch||c&&c.type==="focus"?0:os(d.props.delay,k?0:1,Ct.delay)}function M(k){k===void 0&&(k=!1),x.style.pointerEvents=d.props.interactive&&!k?"":"none",x.style.zIndex=""+d.props.zIndex}function C(k,X,J){if(J===void 0&&(J=!0),F.forEach(function(me){me[k]&&me[k].apply(me,X)}),J){var fe;(fe=d.props)[k].apply(fe,X)}}function V(){var k=d.props.aria;if(k.content){var X="aria-"+k.content,J=x.id,fe=yr(d.props.triggerTarget||e);fe.forEach(function(me){var et=me.getAttribute(X);if(d.state.isVisible)me.setAttribute(X,et?et+" "+J:J);else{var ht=et&&et.replace(J,"").trim();ht?me.setAttribute(X,ht):me.removeAttribute(X)}})}}function G(){if(!(I||!d.props.aria.expanded)){var k=yr(d.props.triggerTarget||e);k.forEach(function(X){d.props.interactive?X.setAttribute("aria-expanded",d.state.isVisible&&X===se()?"true":"false"):X.removeAttribute("aria-expanded")})}}function ae(){Y().removeEventListener("mousemove",b),vi=vi.filter(function(k){return k!==b})}function oe(k){if(!(Dt.isTouch&&(l||k.type==="mousedown"))){var X=k.composedPath&&k.composedPath()[0]||k.target;if(!(d.props.interactive&&wf(x,X))){if(yr(d.props.triggerTarget||e).some(function(J){return wf(J,X)})){if(Dt.isTouch||d.state.isVisible&&d.props.trigger.indexOf("click")>=0)return}else C("onClickOutside",[d,k]);d.props.hideOnClick===!0&&(d.clearDelayTimeouts(),d.hide(),s=!0,setTimeout(function(){s=!1}),d.state.isMounted||xe())}}}function ge(){l=!0}function be(){l=!1}function _e(){var k=Y();k.addEventListener("mousedown",oe,!0),k.addEventListener("touchend",oe,Un),k.addEventListener("touchstart",be,Un),k.addEventListener("touchmove",ge,Un)}function xe(){var k=Y();k.removeEventListener("mousedown",oe,!0),k.removeEventListener("touchend",oe,Un),k.removeEventListener("touchstart",be,Un),k.removeEventListener("touchmove",ge,Un)}function Re(k,X){Fe(k,function(){!d.state.isVisible&&x.parentNode&&x.parentNode.contains(x)&&X()})}function Ne(k,X){Fe(k,X)}function Fe(k,X){var J=D().box;function fe(me){me.target===J&&(ls(J,"remove",fe),X())}if(k===0)return X();ls(J,"remove",f),ls(J,"add",fe),f=fe}function pe(k,X,J){J===void 0&&(J=!1);var fe=yr(d.props.triggerTarget||e);fe.forEach(function(me){me.addEventListener(k,X,J),m.push({node:me,eventType:k,handler:X,options:J})})}function Me(){B()&&(pe("touchstart",v,{passive:!0}),pe("touchend",O,{passive:!0})),Ww(d.props.trigger).forEach(function(k){if(k!=="manual")switch(pe(k,v),k){case"mouseenter":pe("mouseleave",O);break;case"focus":pe(a_?"focusout":"blur",P);break;case"focusin":pe("focusout",P);break}})}function Ke(){m.forEach(function(k){var X=k.node,J=k.eventType,fe=k.handler,me=k.options;X.removeEventListener(J,fe,me)}),m=[]}function v(k){var X,J=!1;if(!(!d.state.isEnabled||N(k)||s)){var fe=((X=c)==null?void 0:X.type)==="focus";c=k,y=k.currentTarget,G(),!d.state.isVisible&&Gw(k)&&vi.forEach(function(me){return me(k)}),k.type==="click"&&(d.props.trigger.indexOf("mouseenter")<0||o)&&d.props.hideOnClick!==!1&&d.state.isVisible?J=!0:R(k),k.type==="click"&&(o=!J),J&&!fe&&W(k)}}function w(k){var X=k.target,J=se().contains(X)||x.contains(X);if(!(k.type==="mousemove"&&J)){var fe=z().concat(x).map(function(me){var et,ht=me._tippy,vr=(et=ht.popperInstance)==null?void 0:et.state;return vr?{popperRect:me.getBoundingClientRect(),popperState:vr,props:n}:null}).filter(Boolean);Qw(fe,k)&&(ae(),W(k))}}function O(k){var X=N(k)||d.props.trigger.indexOf("click")>=0&&o;if(!X){if(d.props.interactive){d.hideWithInteractivity(k);return}W(k)}}function P(k){d.props.trigger.indexOf("focusin")<0&&k.target!==se()||d.props.interactive&&k.relatedTarget&&x.contains(k.relatedTarget)||W(k)}function N(k){return Dt.isTouch?B()!==k.type.indexOf("touch")>=0:!1}function j(){U();var k=d.props,X=k.popperOptions,J=k.placement,fe=k.offset,me=k.getReferenceClientRect,et=k.moveTransition,ht=ie()?Qs(x).arrow:null,vr=me?{getBoundingClientRect:me,contextElement:me.contextElement||se()}:e,Pc={name:"$$tippy",enabled:!0,phase:"beforeWrite",requires:["computeStyles"],fn:function(Xa){var gr=Xa.state;if(ie()){var vh=D(),jo=vh.box;["placement","reference-hidden","escaped"].forEach(function(Ja){Ja==="placement"?jo.setAttribute("data-placement",gr.placement):gr.attributes.popper["data-popper-"+Ja]?jo.setAttribute("data-"+Ja,""):jo.removeAttribute("data-"+Ja)}),gr.attributes.popper={}}}},Fn=[{name:"offset",options:{offset:fe}},{name:"preventOverflow",options:{padding:{top:2,bottom:2,left:5,right:5}}},{name:"flip",options:{padding:5}},{name:"computeStyles",options:{adaptive:!et}},Pc];ie()&&ht&&Fn.push({name:"arrow",options:{element:ht,padding:3}}),Fn.push.apply(Fn,X?.modifiers||[]),d.popperInstance=Hw(vr,x,Object.assign({},X,{placement:J,onFirstUpdate:p,modifiers:Fn}))}function U(){d.popperInstance&&(d.popperInstance.destroy(),d.popperInstance=null)}function L(){var k=d.props.appendTo,X,J=se();d.props.interactive&&k===Np||k==="parent"?X=J.parentNode:X=Mp(k,[J]),X.contains(x)||X.appendChild(x),d.state.isMounted=!0,j()}function z(){return ao(x.querySelectorAll("[data-tippy-root]"))}function R(k){d.clearDelayTimeouts(),k&&C("onTrigger",[d,k]),_e();var X=$(!0),J=H(),fe=J[0],me=J[1];Dt.isTouch&&fe==="hold"&&me&&(X=me),X?r=setTimeout(function(){d.show()},X):d.show()}function W(k){if(d.clearDelayTimeouts(),C("onUntrigger",[d,k]),!d.state.isVisible){xe();return}if(!(d.props.trigger.indexOf("mouseenter")>=0&&d.props.trigger.indexOf("click")>=0&&["mouseleave","mousemove"].indexOf(k.type)>=0&&o)){var X=$(!1);X?a=setTimeout(function(){d.state.isVisible&&d.hide()},X):i=requestAnimationFrame(function(){d.hide()})}}function te(){d.state.isEnabled=!0}function ee(){d.hide(),d.state.isEnabled=!1}function re(){clearTimeout(r),clearTimeout(a),cancelAnimationFrame(i)}function ue(k){if(!d.state.isDestroyed){C("onBeforeUpdate",[d,k]),Ke();var X=d.props,J=xf(e,Object.assign({},X,bf(k),{ignoreAttributes:!0}));d.props=J,Me(),X.interactiveDebounce!==J.interactiveDebounce&&(ae(),b=vf(w,J.interactiveDebounce)),X.triggerTarget&&!J.triggerTarget?yr(X.triggerTarget).forEach(function(fe){fe.removeAttribute("aria-expanded")}):J.triggerTarget&&e.removeAttribute("aria-expanded"),G(),M(),T&&T(X,J),d.popperInstance&&(j(),z().forEach(function(fe){requestAnimationFrame(fe._tippy.popperInstance.forceUpdate)})),C("onAfterUpdate",[d,k])}}function he(k){d.setProps({content:k})}function Ae(){var k=d.state.isVisible,X=d.state.isDestroyed,J=!d.state.isEnabled,fe=Dt.isTouch&&!d.props.touch,me=os(d.props.duration,0,Ct.duration);if(!(k||X||J||fe)&&!se().hasAttribute("disabled")&&(C("onShow",[d],!1),d.props.onShow(d)!==!1)){if(d.state.isVisible=!0,ie()&&(x.style.visibility="visible"),M(),_e(),d.state.isMounted||(x.style.transition="none"),ie()){var et=D(),ht=et.box,vr=et.content;ss([ht,vr],0)}p=function(){var Fn;if(!(!d.state.isVisible||u)){if(u=!0,x.offsetHeight,x.style.transition=d.props.moveTransition,ie()&&d.props.animation){var Fo=D(),Xa=Fo.box,gr=Fo.content;ss([Xa,gr],me),yf([Xa,gr],"visible")}V(),G(),gf(cs,d),(Fn=d.popperInstance)==null||Fn.forceUpdate(),C("onMount",[d]),d.props.animation&&ie()&&Ne(me,function(){d.state.isShown=!0,C("onShown",[d])})}},L()}}function Be(){var k=!d.state.isVisible,X=d.state.isDestroyed,J=!d.state.isEnabled,fe=os(d.props.duration,1,Ct.duration);if(!(k||X||J)&&(C("onHide",[d],!1),d.props.onHide(d)!==!1)){if(d.state.isVisible=!1,d.state.isShown=!1,u=!1,o=!1,ie()&&(x.style.visibility="hidden"),ae(),xe(),M(!0),ie()){var me=D(),et=me.box,ht=me.content;d.props.animation&&(ss([et,ht],fe),yf([et,ht],"hidden"))}V(),G(),d.props.animation?ie()&&Re(fe,d.unmount):d.unmount()}}function ct(k){Y().addEventListener("mousemove",b),gf(vi,b),b(k)}function dn(){d.state.isVisible&&d.hide(),d.state.isMounted&&(U(),z().forEach(function(k){k._tippy.unmount()}),x.parentNode&&x.parentNode.removeChild(x),cs=cs.filter(function(k){return k!==d}),d.state.isMounted=!1,C("onHidden",[d]))}function Ga(){d.state.isDestroyed||(d.clearDelayTimeouts(),d.unmount(),Ke(),delete e._tippy,d.state.isDestroyed=!0,C("onDestroy",[d]))}}function ar(e,t){t===void 0&&(t={});var n=Ct.plugins.concat(t.plugins||[]);n_();var r=Object.assign({},t,{plugins:n}),a=Jw(e),i=a.reduce(function(o,s){var l=s&&d_(s,r);return l&&o.push(l),o},[]);return No(e)?i[0]:i}ar.defaultProps=Ct;ar.setDefaultProps=l_;ar.currentInput=Dt;Object.assign({},_p,{effect:function(t){var n=t.state,r={popper:{position:n.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};Object.assign(n.elements.popper.style,r.popper),n.styles=r,n.elements.arrow&&Object.assign(n.elements.arrow.style,r.arrow)}});ar.setDefaultProps({render:Ip});const m_=["color"],el=we(""),tl=we(""),wr=we(0),ut=we({text:"",value:null,reverse:!0}),Rt=we({text:"",value:null,reverse:!0}),Lt=we({text:"",value:null,reverse:!0}),Li=we(null),Ii=we(!1),Di=we(null),Mo=(e="",t="",n=0,r={},a={},i={},o)=>(el.value=String(t),tl.value=String(e),ut.value=r,Rt.value=a,Lt.value=i,wr.value=n,Li.value=o,new Promise(s=>{Di.value=s,Ii.value=!0})),nl=(e,t="提示",n={text:"确定",value:!0},r,a,i=1,o)=>Mo(e,t,i,n,r,a,o),dA=(e,t="提示",n={text:"是",value:!0},r={text:"否",value:!1,reverse:!0},a,i=2,o)=>Mo(e,t,i,n,r,a,o),mA=(e,t="提示",n={text:"是",value:!0},r={text:"否",value:!1},a={text:"取消",value:"cancel",reverse:!0},i=3,o)=>Mo(e,t,i,n,r,a,o),pA=(e="操作",t,n="失败",r={text:"确定",value:!0},a,i,o=0,s="$fail")=>{const l=`${e}失败，原因：${t?.message??t??"未知"}`;return Mo(l,n,o,r,a,i,s)},p_=async e=>{const t=Bl(v_),n=document.createElement("div");n.id="alert",t.mixin({data(){return{brop:tr}}}),document.body.appendChild(n),t.mount(n)},h_={__name:"index",setup(e){const t=we(!1),n=we(0),r=we(0),a=Ue(()=>Li.value?.startsWith("$")?!1:Li.value??!1),i=m=>m?.startsWith("$")?m.replace("$","").toLowerCase():null,o=Ue(()=>i(Li.value)),s=we(!1),l=we(null);Ut(Ii,m=>{m&&(setTimeout(()=>{n.value=(window.innerHeight-l.value.clientHeight)/2,r.value=(window.innerWidth-l.value.clientWidth)/2,setTimeout(()=>l.value.querySelector("comp-click:last-child").focus(),0)},0),s.value=!0)});const u=(m,b=!1)=>{if(b)if(wr.value)wr.value==1?m=ut.value:wr.value==2?m=Rt.value:wr.value==3&&(m=Lt.value);else return;if(el.value=null,tl.value=null,wr.value=0,ut.value={text:null,value:null,reverse:!0},Rt.value={text:null,value:null,reverse:!0},Lt.value={text:null,value:null,reverse:!0},Ii.value=!1,s.value=!1,typeof Di.value=="function")try{Di.value(m)}finally{Di.value=null}},c=m=>{m.buttons==1&&(n.value+=m.movementY,r.value+=m.movementX)},f=()=>t.value=!0,p=()=>t.value=!1;return(m,b)=>(de(),Ee(je,null,[An(Xe("comp-mask",null,null,512),[[qn,s.value]]),An(Xe("comp-alert",{ref_key:"win",ref:l,style:Ht({top:n.value+"px",left:r.value+"px",borderColor:a.value}),color:o.value},[Xe("p-title",{style:Ht({cursor:t.value?"move":"default"}),onMousemove:c,onMousedown:f,onMouseup:p,onMouseout:p},[Xe("p-title-text",null,bt(el.value||"提示"),1)],36),Xe("p-body",null,[Xe("p-body-content",null,bt(tl.value||""),1),Xe("p-body-clicks",null,[Lt.value&&Lt.value.text?(de(),ft(Se(is),{key:0,tabindex:"1403",white:Se(tr)(Lt.value.reverse),text:Lt.value.text,color:i(Lt.value.color),onClick:b[0]||(b[0]=y=>u(Lt.value.value)),onKeydown:[b[1]||(b[1]=Bn(Kt(y=>u(Lt.value.value),["prevent"]),["enter","space"])),b[2]||(b[2]=Bn(Kt(y=>u(ut.value.value,!0),["prevent"]),["esc"]))]},null,8,["white","text","color"])):He("",!0),Rt.value&&Rt.value.text?(de(),ft(Se(is),{key:1,tabindex:"1402",white:Se(tr)(Rt.value.reverse),text:Rt.value.text,color:i(Rt.value.color),onClick:b[3]||(b[3]=y=>u(Rt.value.value)),onKeydown:[b[4]||(b[4]=Bn(Kt(y=>u(Rt.value.value),["prevent"]),["enter","space"])),b[5]||(b[5]=Bn(Kt(y=>u(ut.value.value,!0),["prevent"]),["esc"]))]},null,8,["white","text","color"])):He("",!0),ut.value&&ut.value.text?(de(),ft(Se(is),{key:2,tabindex:"1401",white:Se(tr)(ut.value.reverse),text:ut.value.text,color:i(ut.value.color),onClick:b[6]||(b[6]=y=>u(ut.value.value)),onKeydown:[b[7]||(b[7]=Bn(Kt(y=>u(ut.value.value),["prevent"]),["enter","space"])),b[8]||(b[8]=Bn(Kt(y=>u(ut.value.value,!0),["prevent"]),["esc"]))]},null,8,["white","text","color"])):He("",!0)])])],12,m_),[[qn,Ii.value]])],64))}},v_=Ua(h_,[["__scopeId","data-v-a6a18973"]]),g_={props:{el:{type:Element,default:null},comp:{type:Object,default:null},props:{type:Object,default(){return{}}},listener:{type:Object,default(){return{}}},on:{type:Object,default(){return{}}},keep:{type:Boolean,default:!1},showNow:{type:Boolean,default:!0},option:{type:Object,default(){return{}}}},emits:["show","hide"],data(){return{}},computed:{optionTippy(){return Object.assign({theme:"light-border",interactive:!0,animation:"",duration:[0,0],onHidden:this.hide,onShown:this.onShown},this.option)}},mounted(){this.tippy=this.Tippy(this.el,Object.assign({content:this.$el},this.optionTippy)),this.showNow&&this.show()},unmounted(){this.$elTippy.parentNode.removeChild(this.$elTippy)},methods:{show(){return this.tippy&&(this.tippy.show(),this.$emit("show",this),typeof this.on.show=="function"&&this.on.show(this)),this},hide(){return this.tippy&&(this.keep?this.tippy.hide():(this.tippy.destroy(),this.$app.unmount()),this.$emit("hide",this),typeof this.on.hide=="function"&&this.on.hide(this)),this},onShown(){this?.$refs?.comp?.$forceUpdate()}}};function b_(e,t,n,r,a,i){return de(),ft(Nl(n.comp),Ki({ref:"comp",class:"test"},n.props,Nv(n.listener),{onHide:i.hide}),null,16,["onHide"])}const y_=Ua(g_,[["render",b_]]),w_=e=>{let t="top";return!(e.value instanceof Element)&&typeof e.value=="object"&&e.value&&e.value.placement?t=e.value.placement:e.modifiers.placement?t=e.modifiers.placement:e.modifiers.bottom?t="bottom":e.modifiers.left?t="left":e.modifiers.right?t="right":e.modifiers.leftStart?t="left-start":e.modifiers.rightStart?t="right-start":e.modifiers.leftEnd?t="left-end":e.modifiers.rightEnd?t="right-end":e.modifiers.topStart?t="top-start":e.modifiers.topEnd?t="top-end":e.modifiers.bottomStart?t="bottom-start":e.modifiers.bottomEnd&&(t="bottom-end"),t},Fi=(e,t=!1)=>{const n=t?e.oldValue:e.value;return n instanceof Element?n:typeof n=="object"&&n?n.content||"":n||e.expression||""},__=["showOnInit","interactive","theme","hideOnClick","delay","duration","trigger","triggerTarget","maxWidth","followCursor","zIndex","offset","distance"],Of=e=>{const t={content:Fi(e),theme:"light-border",placement:w_(e),animation:"",duration:[0,0]};!(e.value instanceof Element)&&typeof e.value=="object"&&e.value&&e.value.duration&&(t.duration=e.value.duration),e.modifiers.interactive&&(t.interactive=!0);for(const n of __)e.modifiers[n]!==void 0&&(t[n]=e.modifiers[n]);if(e.on)for(const n in e.on){const r=e.on[n];typeof r=="function"&&(t[`on${n.replace(/^./,n[0].toUpperCase())}`]=r)}return t},x_=async e=>{e.provide("$tip",r=>{const a=document.createElement("div");document.body.insertBefore(a,document.body.children[0]);const i=Bl(y_,r);i.config.globalProperties.Tippy=ar,i.config.globalProperties.$app=i,i.config.globalProperties.$elTippy=a,i.mount(a)});const t=(r,a)=>{if(a.value!==!1)return ar(r,Of(a))},n=(r,a)=>{if(a.value!==!1&&Fi(a)!=Fi(a,!0)){const i=r._tippy;i?i.setContent(Fi(a)):ar(r,Of(a))}};e.directive("tip",{mounted:t,updated:n})},Dp=function(e){let t=Array.isArray(e)?[]:{};if(e&&typeof e=="object")for(let n in e)e.hasOwnProperty(n)&&(e[n]&&typeof e[n]=="object"?t[n]=Dp(e[n]):t[n]=e[n]);return t};var ir=Ml({name:"MouseMenu",props:{appendToBody:{type:Boolean,default:!0},menuWidth:{type:Number,default:200},menuList:{type:Array,required:!0},menuHiddenFn:{type:Function},hasIcon:{type:Boolean,default:!1},iconType:{type:String,default:"font-icon"},menuWrapperCss:Object,menuItemCss:Object,el:{type:Object,required:!0},params:{type:[String,Number,Array,Object]},useLongPressInMobile:Boolean,longPressDuration:Number,longPressPreventDefault:[Function,Boolean],injectCloseListener:{type:Boolean,default:!0},customClass:String,disabled:{type:Function}},emits:["open","close"],setup(e,{emit:t}){const n=we(0),r=we(0),a=we(!1),i=we(0),o=we(0),s=we(!1),l=we(null),u=we([]),c=Ue(()=>e.menuList.some(E=>E.children&&E.children.length>0)),f=we(10),p=we();Ut(s,async E=>{if(E){await Yi();let x=p.value;e.menuWrapperCss&&Object.keys(e.menuWrapperCss).map(F=>{x.style.setProperty(`--menu-${F}`,e.menuWrapperCss&&e.menuWrapperCss[F])}),e.menuItemCss&&Object.keys(e.menuItemCss).map(F=>{x.style.setProperty(`--menu-item-${F}`,e.menuItemCss&&e.menuItemCss[F])});let T=e.menuItemCss?.arrowSize?.match(/\d+/);T?f.value=~~T[0]||10:f.value=10,x.style.setProperty("--menu-item-arrowRealSize",f.value/2+"px"),t("open",e.params,l.value,e.el)}else t("close",e.params,l.value,e.el)});const m=(E,x)=>{E.disabled||(E.fn&&typeof E.fn=="function"&&E.fn(e.params,l.value,e.el,x),s.value=!1)},b=(E,x)=>{E.disabled||(E.fn&&typeof E.fn=="function"&&!E.disabled&&(E.fn(e.params,l.value,e.el,x),a.value=!1),s.value=!1)},y=(E,x)=>{if(x.children&&!x.disabled){a.value=!0;const T=E.currentTarget;if(!T)return;const{offsetWidth:F}=T,I=T.querySelector(".__menu__sub__wrapper");if(!I)return;const{offsetWidth:H,offsetHeight:B}=I,{innerWidth:ie,innerHeight:se}=window,{top:Y,left:D}=T.getBoundingClientRect();D+F+H>ie-5?n.value=D-H+5:n.value=D+F,Y+B>se-5?r.value=se-B:r.value=Y+5}},A=(E,x,T,F)=>E.map(I=>(I.children&&(I.children=A(I.children,x,T,F)),I.label&&typeof I.label=="function"&&(I.label=I.label(F,x,T)),I.tips&&typeof I.tips=="function"&&(I.tips=I.tips(F,x,T)),I.icon&&typeof I.icon=="function"&&(I.icon=I.icon(F,x,T)),I.hidden&&typeof I.hidden=="function"&&(I.hidden=I.hidden(F,x,T)),I.disabled&&typeof I.disabled=="function"&&(I.disabled=I.disabled(F,x,T)),I)),g=async(E=0,x=0)=>{if(l.value=document.elementFromPoint(E-1,x-1),e.menuHiddenFn?s.value=!e.menuHiddenFn(e.params,l.value,e.el):s.value=!0,!s.value)return;u.value=Dp(e.menuList),u.value=A(u.value,l.value,e.el,e.params),await Yi();const{innerWidth:T,innerHeight:F}=window,H=p.value.offsetHeight,B=e.menuWidth||200;o.value=E+B+1>T?T-B-5:E+1,i.value=x+H+1>F?F-H-5:x+1},h=()=>{s.value=!1},_=Ue(()=>e.useLongPressInMobile&&"ontouchstart"in window?"touchstart":"mousedown"),d=E=>{p.value&&!p.value.contains(E.currentTarget)&&(s.value=!1,document.oncontextmenu=null)};return Ut(()=>e.injectCloseListener,E=>{E?document.addEventListener(_.value,d):document.removeEventListener(_.value,d)},{immediate:!0}),Ll(()=>{document.removeEventListener(_.value,d)}),{subLeft:n,subTop:r,hoverFlag:a,menuTop:i,menuLeft:o,showMenu:s,clickDomEl:l,calcMenuList:u,arrowSize:f,hasSubMenu:c,MenuWrapper:p,handleMenuItemClick:m,handleSubMenuItemClick:b,handleMenuMouseEnter:y,show:g,close:h,clickEventKey:_}}});const A_=["onMouseenter"],E_={key:0,class:"__menu__item-icon"},O_=["innerHTML"],S_={class:"__menu__item-label"},k_={class:"__menu__item-tips"},T_={class:"__menu__item-arrow-after"},C_={class:"__menu__sub__item-label"},$_={class:"__menu__sub__item-tips"};function P_(e,t,n,r,a,i){return de(),ft(eg,{to:"body",disabled:!e.appendToBody},[e.showMenu?(de(),Ee("div",{key:0,ref:"MenuWrapper",class:Cr(["__menu__wrapper",e.customClass]),style:Ht({width:`${e.menuWidth}px`,top:`${e.menuTop}px`,left:`${e.menuLeft}px`})},[(de(!0),Ee(je,null,Vi(e.calcMenuList,(o,s)=>(de(),Ee(je,null,[!o.hidden&&!o.line?(de(),Ee("div",Ki({key:s,class:["__menu__item",o.disabled&&"disabled",o.customClass]},{[kr(e.clickEventKey)]:Kt(l=>e.handleMenuItemClick(o,l),["stop"])},{onMouseenter:l=>e.handleMenuMouseEnter(l,o)}),[e.hasIcon?(de(),Ee("div",E_,[e.iconType==="font-icon"?An((de(),Ee("i",{key:0,class:Cr(o.icon)},null,2)),[[qn,o.icon]]):e.iconType==="svg-icon"?An((de(),Ee("div",{key:1,class:"__menu__item-icon-svg",innerHTML:o.icon},null,8,O_)),[[qn,o.icon]]):e.iconType==="vnode-icon"?(de(),ft(Nl(o.icon),{key:2})):He("v-if",!0)])):He("v-if",!0),Xe("span",S_,bt(o.label),1),Xe("span",k_,bt(o.tips||""),1),e.hasSubMenu?(de(),Ee("span",{key:1,class:Cr(["__menu__item-arrow",{show:e.hasSubMenu&&o.children}]),style:Ht({width:e.arrowSize+"px",height:e.arrowSize+"px"})},[An(Xe("span",T_,null,512),[[qn,e.hasSubMenu&&o.children]])],6)):He("v-if",!0),o.children&&o.children.length>0?An((de(),Ee("div",{key:2,class:"__menu__sub__wrapper",style:Ht({top:`${e.subTop}px`,left:`${e.subLeft}px`})},[(de(!0),Ee(je,null,Vi(o.children,(l,u)=>(de(),Ee(je,null,[!l.hidden&&!l.line?(de(),Ee("div",Ki({key:u,class:["__menu__sub__item",l.disabled&&"disabled",l.customClass]},{[kr(e.clickEventKey)]:Kt(c=>e.handleSubMenuItemClick(l,c),["stop"])}),[Xe("span",C_,bt(l.label),1),Xe("span",$_,bt(l.tips||""),1)],16)):He("v-if",!0),l.line?(de(),Ee("div",{key:u,class:"__menu__line"})):He("v-if",!0)],64))),256))],4)),[[qn,e.hoverFlag]]):He("v-if",!0)],16,A_)):He("v-if",!0),!o.hidden&&o.line?(de(),Ee("div",{key:s,class:"__menu__line"})):He("v-if",!0)],64))),256))],6)):He("v-if",!0)],8,["disabled"])}function N_(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(typeof document>"u")){var r=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css",n==="top"&&r.firstChild?r.insertBefore(a,r.firstChild):r.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}var M_=`.__menu__mask[data-v-3d21bc0a] {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 999;
}
.__menu__wrapper[data-v-3d21bc0a] {
  --menu-background: #c8f2f0;
  --menu-boxShadow: 0 1px 5px #888;
  --menu-padding: 5px 0;
  --menu-borderRadius: 0;
  --menu-item-height: 30px;
  --menu-item-padding: 0 10px;
  --menu-item-iconSize: 20px;
  --menu-item-iconFontSize: 14px;
  --menu-item-iconColor: #484852;
  --menu-item-labelColor: #484852;
  --menu-item-labelFontSize: 14px;
  --menu-item-tipsColor: #889;
  --menu-item-tipsFontSize: 12px;
  --menu-item-arrowColor: #484852;
  --menu-item-disabledColor: #bcc;
  --menu-item-hoverBackground: rgba(255, 255, 255, 0.8);
  --menu-item-hoverIconColor: inherit;
  --menu-item-hoverLabelColor: inherit;
  --menu-item-hoverTipsColor: inherit;
  --menu-item-hoverArrowColor: inherit;
  --menu-lineColor: #ccc;
  --menu-lineMargin: 5px 0;
}
.__menu__wrapper[data-v-3d21bc0a] {
  position: fixed;
  width: 200px;
  background: var(--menu-background);
  box-shadow: var(--menu-boxShadow);
  padding: var(--menu-padding);
  border-radius: var(--menu-borderRadius);
  z-index: 99999;
}
.__menu__line[data-v-3d21bc0a],
.__menu__sub__line[data-v-3d21bc0a] {
  border-top: 1px solid var(--menu-lineColor);
  margin: var(--menu-lineMargin);
}
.__menu__item[data-v-3d21bc0a],
.__menu__sub__item[data-v-3d21bc0a] {
  display: flex;
  height: var(--menu-item-height);
  align-items: center;
  cursor: pointer;
  padding: var(--menu-item-padding);
}
.__menu__item .__menu__item-icon[data-v-3d21bc0a],
.__menu__sub__item .__menu__item-icon[data-v-3d21bc0a] {
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--menu-item-iconColor);
  width: var(--menu-item-iconSize);
  height: var(--menu-item-iconSize);
}
.__menu__item .__menu__item-icon i[data-v-3d21bc0a],
.__menu__sub__item .__menu__item-icon i[data-v-3d21bc0a] {
  font-size: var(--menu-item-iconFontSize);
}
.__menu__item .__menu__item-icon .__menu__item-icon-svg[data-v-3d21bc0a],
.__menu__sub__item .__menu__item-icon .__menu__item-icon-svg[data-v-3d21bc0a] {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}
.__menu__item .__menu__item-label[data-v-3d21bc0a],
.__menu__item .__menu__sub__item-label[data-v-3d21bc0a],
.__menu__sub__item .__menu__item-label[data-v-3d21bc0a],
.__menu__sub__item .__menu__sub__item-label[data-v-3d21bc0a] {
  width: 100%;
  max-height: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  font-size: var(--menu-item-labelFontSize);
  color: var(--menu-item-labelColor);
  margin-right: 5px;
  overflow: hidden;
}
.__menu__item .__menu__item-tips[data-v-3d21bc0a],
.__menu__item .__menu__sub__item-tips[data-v-3d21bc0a],
.__menu__sub__item .__menu__item-tips[data-v-3d21bc0a],
.__menu__sub__item .__menu__sub__item-tips[data-v-3d21bc0a] {
  font-size: var(--menu-item-tipsFontSize);
  color: var(--menu-item-tipsColor);
}
.__menu__item .__menu__item-arrow[data-v-3d21bc0a],
.__menu__sub__item .__menu__item-arrow[data-v-3d21bc0a] {
  width: 10px;
  height: 10px;
  margin-left: 5px;
  position: relative;
}
.__menu__item.disabled[data-v-3d21bc0a],
.__menu__sub__item.disabled[data-v-3d21bc0a] {
  cursor: not-allowed;
}
.__menu__item.disabled .__menu__item-icon[data-v-3d21bc0a],
.__menu__item.disabled .__menu__item-label[data-v-3d21bc0a],
.__menu__item.disabled .__menu__sub__item-label[data-v-3d21bc0a],
.__menu__item.disabled .__menu__item-tips[data-v-3d21bc0a],
.__menu__item.disabled .__menu__sub__item-tips[data-v-3d21bc0a],
.__menu__sub__item.disabled .__menu__item-icon[data-v-3d21bc0a],
.__menu__sub__item.disabled .__menu__item-label[data-v-3d21bc0a],
.__menu__sub__item.disabled .__menu__sub__item-label[data-v-3d21bc0a],
.__menu__sub__item.disabled .__menu__item-tips[data-v-3d21bc0a],
.__menu__sub__item.disabled .__menu__sub__item-tips[data-v-3d21bc0a] {
  color: var(--menu-item-disabledColor);
}
.__menu__item.disabled .__menu__item-arrow .__menu__item-arrow-after[data-v-3d21bc0a],
.__menu__sub__item.disabled .__menu__item-arrow .__menu__item-arrow-after[data-v-3d21bc0a] {
  border-left: var(--menu-item-arrowRealSize) solid var(--menu-item-disabledColor);
}
.__menu__item[data-v-3d21bc0a]:not(.disabled):hover {
  background: var(--menu-item-hoverBackground);
}
.__menu__item:not(.disabled):hover .__menu__item-icon[data-v-3d21bc0a] {
  color: var(--menu-item-hoverIconColor);
}
.__menu__item:not(.disabled):hover .__menu__item-label[data-v-3d21bc0a] {
  color: var(--menu-item-hoverLabelColor);
}
.__menu__item:not(.disabled):hover .__menu__item-tips[data-v-3d21bc0a] {
  color: var(--menu-item-hoverTipsColor);
}
.__menu__item:not(.disabled):hover .__menu__item-arrow[data-v-3d21bc0a] {
  color: var(--menu-item-hoverArrowColor);
}
.__menu__sub__item[data-v-3d21bc0a]:not(.disabled):hover {
  background: var(--menu-item-hoverBackground);
}
.__menu__sub__item:not(.disabled):hover .__menu__sub__item-label[data-v-3d21bc0a] {
  color: var(--menu-item-hoverLabelColor);
}
.__menu__sub__item:not(.disabled):hover .__menu__sub__item-tips[data-v-3d21bc0a] {
  color: var(--menu-item-hoverTipsColor);
}
.__menu__item-icon[data-v-3d21bc0a] {
  width: 20px;
  height: 20px;
  text-align: center;
  line-height: 20px;
  margin-right: 4px;
}
.__menu__item-arrow.show .__menu__item-arrow-after[data-v-3d21bc0a] {
  position: absolute;
  width: 0;
  height: 0;
  left: 8px;
  border-left: var(--menu-item-arrowRealSize) solid var(--menu-item-arrowColor);
  border-top: var(--menu-item-arrowRealSize) solid transparent;
  border-bottom: var(--menu-item-arrowRealSize) solid transparent;
}
.__menu__sub__wrapper[data-v-3d21bc0a] {
  position: fixed;
  visibility: hidden;
  width: 200px;
  background: var(--menu-background);
  box-shadow: var(--menu-boxShadow);
  padding: var(--menu-padding);
  border-radius: var(--menu-borderRadius);
}
.__menu__item:hover .__menu__sub__wrapper[data-v-3d21bc0a] {
  visibility: visible;
}`;N_(M_);ir.render=P_;ir.__scopeId="data-v-3d21bc0a";ir.__file="packages/mouse-menu/mouse-menu.vue";function R_(e,t,n){let r=document.createElement(e);return r.setAttribute("class",t),r}ir.install=e=>{e.component(ir.name,ir)};function Sf(e){const t="__mouse__menu__container";let n;document.querySelector(`.${t}`)?n=document.querySelector(`.${t}`):n=R_("div",t);const r=Qe(ir,e);return Ug(r,n),document.body.appendChild(n),r.component?.proxy}let xn,gi,rl,Xn;function L_(e,t,n=500,r){rl=a=>{xn&&xn.close(),typeof r=="function"?r(a,e)&&a.preventDefault():typeof r=="boolean"&&r&&a.preventDefault(),gi&&clearTimeout(gi),gi=window.setTimeout(()=>{t(a)},n)},Xn=()=>{clearTimeout(gi)},e.addEventListener("touchstart",rl),e.addEventListener("touchmove",Xn),e.addEventListener("touchend",Xn),e.addEventListener("touchcancel",Xn)}function Fp(e){e.removeEventListener("touchstart",rl),e.removeEventListener("touchmove",Xn),e.removeEventListener("touchend",Xn),e.removeEventListener("touchcancel",Xn)}let ji,kf;const I_=(e,t)=>{const{value:n}=t;if(n.menuList.length>0)ji=r=>{if(typeof n.disabled=="function"&&n.disabled(n.params))return;r.preventDefault(),xn=Sf({el:e,...n});const{x:a,y:i}=r;xn.show(a,i)},e.removeEventListener("contextmenu",ji),e.addEventListener("contextmenu",ji),n.useLongPressInMobile&&"ontouchstart"in window&&(kf=r=>{if(typeof n.disabled=="function"&&n.disabled(n.params))return;xn=Sf({el:e,...n});const{touches:a}=r,{clientX:i,clientY:o}=a[0];xn.show(i,o),document.onmousedown=null,e.onmousedown=null,setTimeout(()=>{document.onmousedown=()=>xn.close(),e.onmousedown=()=>xn.close()},500)},Fp(e),L_(e,kf,n.longPressDuration||500,n.longPressPreventDefault));else throw new Error("At least set one menu list!")},D_=e=>{e.removeEventListener("contextmenu",ji),"touchstart"in window&&Fp(e)},Tf={mounted:I_,unmounted:D_},F_=async e=>{e.directive("menu",{mounted:(t,n,r,a)=>n.value?.menuList?.length?Tf.mounted(t,n,r,a):void 0,unmounted:Tf.unmounted})},vn=(e,t,n)=>{const r=e[t];return r?typeof r=="function"?r():Promise.resolve(r):new Promise((a,i)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(i.bind(null,new Error("Unknown variable dynamic import: "+t+(t.split("/").length!==n?". Note that variables only represent file names one level deep.":""))))})};async function j_(e){const t=n=>async r=>{if(e.component(r))return n.value=r;try{const a=String(r).split("-");try{if(a.length==2)e.component(r,(await vn(Object.assign({"../achievement/manager.vue":()=>Hn(()=>import("./manager-DkXiNyLo.js"),__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url),"../gacha/analysis.vue":()=>Hn(()=>import("./analysis-DouqDFt6.js"),__vite__mapDeps([7,1,8,9,10,11,2,3,4,5,12]),import.meta.url),"../profile/manager.vue":()=>Hn(()=>import("./manager-CuQDfBiO.js"),__vite__mapDeps([13,1,3,4,14]),import.meta.url)}),`../${a[0]}/${a[1]}.vue`,3)).default);else if(a.length==3)e.component(r,(await vn(Object.assign({"../database/character/grid.vue":()=>Hn(()=>import("./grid-D80Jlh9g.js"),__vite__mapDeps([15,1,16]),import.meta.url),"../gacha/comp/gacha-item.vue":()=>Hn(()=>import("./gacha-item-CRRaeyRB.js"),__vite__mapDeps([8,1,9]),import.meta.url),"../gacha/comp/pool-title.vue":()=>Hn(()=>import("./pool-title-ChMdoZw8.js"),__vite__mapDeps([10,1,11]),import.meta.url)}),`../${a[0]}/${a[1]}/${a[2]}.vue`,4)).default);else if(a.length==4)e.component(r,(await vn(Object.assign({}),`../${a[0]}/${a[1]}/${a[2]}/${a[3]}.vue`,5)).default);else if(a.length==5)e.component(r,(await vn(Object.assign({}),`../${a[0]}/${a[1]}/${a[2]}/${a[3]}/${a[4]}.vue`,6)).default);else throw TypeError(`模块深度不为[2,3,4,5]: ${r}`)}catch(i){if(!i.message.startsWith("Unknown variable dynamic import"))throw nl(`加载模块失败: ${r}, ${i.message||i}`,"加载模块失败"),i;if(a.length==2)e.component(r,(await vn(Object.assign({}),`../${a[0]}/${a[1]}/index.vue`,4)).default);else if(a.length==3)e.component(r,(await vn(Object.assign({}),`../${a[0]}/${a[1]}/${a[2]}/index.vue`,5)).default);else if(a.length==4)e.component(r,(await vn(Object.assign({}),`../${a[0]}/${a[1]}/${a[2]}/${a[3]}/index.vue`,6)).default);else if(a.length==5)e.component(r,(await vn(Object.assign({}),`../${a[0]}/${a[1]}/${a[2]}/${a[3]}/${a[4]}/index.vue`,7)).default);else throw TypeError(`模块深度不为[2,3,4,5]: ${r}`)}n.value=r}catch(a){throw nl(`加载模块失败: ${r}, ${a.message||a}`,"加载模块失败"),a}};e.provide("load-module",t)}function us(e){if(!vc(e))throw new Error("Parameter was not an error")}function vc(e){return z_(e)==="[object Error]"||e instanceof Error}function z_(e){return Object.prototype.toString.call(e)}function B_(e){let t,n="";if(e.length===0)t={};else if(vc(e[0]))t={cause:e[0]},n=e.slice(1).join(" ")||"";else if(e[0]&&typeof e[0]=="object")t=Object.assign({},e[0]),n=e.slice(1).join(" ")||"";else if(typeof e[0]=="string")t={},n=n=e.join(" ")||"";else throw new Error("Invalid arguments passed to Layerr");return{options:t,shortMessage:n}}class St extends Error{constructor(t,n){const r=[...arguments],{options:a,shortMessage:i}=B_(r);let o=i;if(a.cause&&(o=`${o}: ${a.cause.message}`),super(o),this.message=o,a.name&&typeof a.name=="string"?this.name=a.name:this.name="Layerr",a.cause&&Object.defineProperty(this,"_cause",{value:a.cause}),Object.defineProperty(this,"_info",{value:{}}),a.info&&typeof a.info=="object"&&Object.assign(this._info,a.info),Error.captureStackTrace){const s=a.constructorOpt||this.constructor;Error.captureStackTrace(this,s)}}static cause(t){return us(t),t._cause&&vc(t._cause)?t._cause:null}static fullStack(t){us(t);const n=St.cause(t);return n?`${t.stack}
caused by: ${St.fullStack(n)}`:t.stack}static info(t){us(t);const n={},r=St.cause(t);return r&&Object.assign(n,St.info(r)),t._info&&Object.assign(n,t._info),n}cause(){return St.cause(this)}toString(){let t=this.name||this.constructor.name||this.constructor.prototype.name;return this.message&&(t=`${t}: ${this.message}`),t}}const jp="0123456789ABCDEFGHJKMNPQRSTVWXYZ",pa=32,Cf=0xffffffffffff,H_=10,U_=16,ta=Object.freeze({source:"ulid"});function Y_(e){const t=W_(),n=t&&(t.crypto||t.msCrypto)||null;if(typeof n?.getRandomValues=="function")return()=>{const r=new Uint8Array(1);return n.getRandomValues(r),r[0]/255};if(typeof n?.randomBytes=="function")return()=>n.randomBytes(1).readUInt8()/255;throw new St({info:{code:"PRNG_DETECT",...ta}},"Failed to find a reliable PRNG")}function W_(){return K_()?self:typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:null}function V_(e,t){let n="";for(;e>0;e--)n=G_(t)+n;return n}function q_(e,t){if(isNaN(e))throw new St({info:{code:"ENC_TIME_NAN",...ta}},`Time must be a number: ${e}`);if(e>Cf)throw new St({info:{code:"ENC_TIME_SIZE_EXCEED",...ta}},`Cannot encode a time larger than ${Cf}: ${e}`);if(e<0)throw new St({info:{code:"ENC_TIME_NEG",...ta}},`Time must be positive: ${e}`);if(Number.isInteger(e)===!1)throw new St({info:{code:"ENC_TIME_TYPE",...ta}},`Time must be an integer: ${e}`);let n,r="";for(let a=t;a>0;a--)n=e%pa,r=jp.charAt(n)+r,e=(e-n)/pa;return r}function K_(){return typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope}function G_(e){let t=Math.floor(e()*pa);return t===pa&&(t=pa-1),jp.charAt(t)}function X_(e,t){const n=Y_(),r=isNaN(e)?Date.now():e;return q_(r,H_)+V_(U_,n)}class J_{id;module;admin;typeTab;typeList;option;icon;title;header;group;tipsTitle;info;params;paramsDelay;inited=!1;constructor(t,n,r,a={},i=[]){const{type:o="icon|title",typeList:s,icon:l,title:u,header:c,group:f,tipsTitle:p}=a;this.id=t,this.module=n,this.admin=r,this.typeTab=o,this.typeList=s??n,this.option=a,this.icon=l,this.title=u,this.header=c,this.group=f,this.tipsTitle=p,this.info={},this.params=i??{}}get typesTab(){return this.typeTab?.split("|")??[]}async changeToSelf(t,n=!1,...r){this.admin.change(this,t,n,...r)}}const $f=Symbol("use-handle-init");class gc{static sUseHandleInit=$f;sUseHandleInit=$f;tabs$id={};idTabNow="";historiesTab=[];modulePre;get now(){return this.tabs$id[this.idTabNow]}get list(){return Object.values(this.tabs$id)}constructor(){return po(this)}add(t,n={},...r){const a=X_(),i=(n.only?Object.values(this.tabs$id).find(o=>o.typeList==n.typeList):void 0)??(this.tabs$id[a]=new J_(a,t,this,n));return n.delay?i.paramsDelay=r:this.change(i,"create-tab",!0,...r),i}del(t){const n=this.now,r=this.tabs$id,a=Object.keys(r),i=a.indexOf(t.id);if(delete this.tabs$id[t.id],n===t){this.historiesTab.pop();const o=this.historiesTab.pop();o?this.change(o,"remove-tab"):this.change(r[a[i+1]??a[i-1]],"remove-tab")}this.historiesTab=this.historiesTab.filter(o=>o!==t).filter((o,s,l)=>o!==l[s-1])}changeOrAdd(t,n={},...r){let a=this.list.find(i=>i.module==t&&(typeof n.handleFind=="function"?n.handleFind(i,this,t,n,...r):r.join("||")==i.params.join("||")));return a?this.change(a,n.reason,!!r.length,...r):a=this.add(t,n,...r),a}change(t,n,r=!1,...a){this.idTabNow!=t.id&&(this.idTabNow=t.id,this.modulePre=t.module,this.historiesTab[this.historiesTab.length-1]!==t&&this.historiesTab.push(t),this.emitChanged(n,r,...a))}async emitChanged(t,n=!1,...r){const a=this.now;"paramsDelay"in a&&(a.params=a.paramsDelay,delete a.paramsDelay),n&&(a.params=r);const i=this.handlesTab$typeList[a.typeList];if(i)for(const[o,s,l]of i)try{o.value=a,!a.inited&&typeof s=="function"?(await s(a,t),a.inited=!0):typeof l=="function"?await l(a,t):l===gc.sUseHandleInit&&await s(a,t)}catch(u){globalThis.console.error("Occur error when emitting change tab.",u)}}handlesTab$typeList={};addTabHandle(t,n,r,a){(this.handlesTab$typeList[t]??(this.handlesTab$typeList[t]=[])).push([n,r,a])}}function Pf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function K(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Pf(Object(n),!0).forEach(function(r){Ve(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Pf(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function io(e){"@babel/helpers - typeof";return io=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},io(e)}function Z_(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Q_(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ex(e,t,n){return t&&Q_(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function Ve(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function bc(e,t){return nx(e)||ax(e,t)||zp(e,t)||ox()}function Va(e){return tx(e)||rx(e)||zp(e)||ix()}function tx(e){if(Array.isArray(e))return al(e)}function nx(e){if(Array.isArray(e))return e}function rx(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function ax(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function zp(e,t){if(e){if(typeof e=="string")return al(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return al(e,t)}}function al(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function ix(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ox(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Nf=function(){},yc={},Bp={},Hp=null,Up={mark:Nf,measure:Nf};try{typeof window<"u"&&(yc=window),typeof document<"u"&&(Bp=document),typeof MutationObserver<"u"&&(Hp=MutationObserver),typeof performance<"u"&&(Up=performance)}catch{}var sx=yc.navigator||{},Mf=sx.userAgent,Rf=Mf===void 0?"":Mf,Nn=yc,Pe=Bp,Lf=Hp,bi=Up;Nn.document;var fn=!!Pe.documentElement&&!!Pe.head&&typeof Pe.addEventListener=="function"&&typeof Pe.createElement=="function",Yp=~Rf.indexOf("MSIE")||~Rf.indexOf("Trident/"),yi,wi,_i,xi,Ai,on="___FONT_AWESOME___",il=16,Wp="fa",Vp="svg-inline--fa",mr="data-fa-i2svg",ol="data-fa-pseudo-element",lx="data-fa-pseudo-element-pending",wc="data-prefix",_c="data-icon",If="fontawesome-i2svg",cx="async",ux=["HTML","HEAD","STYLE","SCRIPT"],qp=function(){try{return!0}catch{return!1}}(),Ce="classic",Ie="sharp",xc=[Ce,Ie];function qa(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[Ce]}})}var Pa=qa((yi={},Ve(yi,Ce,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),Ve(yi,Ie,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),yi)),Na=qa((wi={},Ve(wi,Ce,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Ve(wi,Ie,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),wi)),Ma=qa((_i={},Ve(_i,Ce,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Ve(_i,Ie,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),_i)),fx=qa((xi={},Ve(xi,Ce,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Ve(xi,Ie,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),xi)),dx=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,Kp="fa-layers-text",mx=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,px=qa((Ai={},Ve(Ai,Ce,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Ve(Ai,Ie,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),Ai)),Gp=[1,2,3,4,5,6,7,8,9,10],hx=Gp.concat([11,12,13,14,15,16,17,18,19,20]),vx=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Jn={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Ra=new Set;Object.keys(Na[Ce]).map(Ra.add.bind(Ra));Object.keys(Na[Ie]).map(Ra.add.bind(Ra));var gx=[].concat(xc,Va(Ra),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Jn.GROUP,Jn.SWAP_OPACITY,Jn.PRIMARY,Jn.SECONDARY]).concat(Gp.map(function(e){return"".concat(e,"x")})).concat(hx.map(function(e){return"w-".concat(e)})),ha=Nn.FontAwesomeConfig||{};function bx(e){var t=Pe.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function yx(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(Pe&&typeof Pe.querySelector=="function"){var wx=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];wx.forEach(function(e){var t=bc(e,2),n=t[0],r=t[1],a=yx(bx(n));a!=null&&(ha[r]=a)})}var Xp={styleDefault:"solid",familyDefault:"classic",cssPrefix:Wp,replacementClass:Vp,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ha.familyPrefix&&(ha.cssPrefix=ha.familyPrefix);var Br=K(K({},Xp),ha);Br.autoReplaceSvg||(Br.observeMutations=!1);var Q={};Object.keys(Xp).forEach(function(e){Object.defineProperty(Q,e,{enumerable:!0,set:function(n){Br[e]=n,va.forEach(function(r){return r(Q)})},get:function(){return Br[e]}})});Object.defineProperty(Q,"familyPrefix",{enumerable:!0,set:function(t){Br.cssPrefix=t,va.forEach(function(n){return n(Q)})},get:function(){return Br.cssPrefix}});Nn.FontAwesomeConfig=Q;var va=[];function _x(e){return va.push(e),function(){va.splice(va.indexOf(e),1)}}var gn=il,Bt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function xx(e){if(!(!e||!fn)){var t=Pe.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=Pe.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return Pe.head.insertBefore(t,r),e}}var Ax="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function La(){for(var e=12,t="";e-- >0;)t+=Ax[Math.random()*62|0];return t}function Kr(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Ac(e){return e.classList?Kr(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Jp(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ex(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Jp(e[n]),'" ')},"").trim()}function Ro(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Ec(e){return e.size!==Bt.size||e.x!==Bt.x||e.y!==Bt.y||e.rotate!==Bt.rotate||e.flipX||e.flipY}function Ox(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:u}}function Sx(e){var t=e.transform,n=e.width,r=n===void 0?il:n,a=e.height,i=a===void 0?il:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&Yp?l+="translate(".concat(t.x/gn-r/2,"em, ").concat(t.y/gn-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/gn,"em), calc(-50% + ").concat(t.y/gn,"em)) "):l+="translate(".concat(t.x/gn,"em, ").concat(t.y/gn,"em) "),l+="scale(".concat(t.size/gn*(t.flipX?-1:1),", ").concat(t.size/gn*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var kx=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
          transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Zp(){var e=Wp,t=Vp,n=Q.cssPrefix,r=Q.replacementClass,a=kx;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var Df=!1;function fs(){Q.autoAddCss&&!Df&&(xx(Zp()),Df=!0)}var Tx={mixout:function(){return{dom:{css:Zp,insertCss:fs}}},hooks:function(){return{beforeDOMElementCreation:function(){fs()},beforeI2svg:function(){fs()}}}},sn=Nn||{};sn[on]||(sn[on]={});sn[on].styles||(sn[on].styles={});sn[on].hooks||(sn[on].hooks={});sn[on].shims||(sn[on].shims=[]);var $t=sn[on],Qp=[],Cx=function e(){Pe.removeEventListener("DOMContentLoaded",e),oo=1,Qp.map(function(t){return t()})},oo=!1;fn&&(oo=(Pe.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Pe.readyState),oo||Pe.addEventListener("DOMContentLoaded",Cx));function $x(e){fn&&(oo?setTimeout(e,0):Qp.push(e))}function Ka(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?Jp(e):"<".concat(t," ").concat(Ex(r),">").concat(i.map(Ka).join(""),"</").concat(t,">")}function Ff(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var ds=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=n,l,u,c;for(r===void 0?(l=1,c=t[i[0]]):(l=0,c=r);l<o;l++)u=i[l],c=s(c,t[u],u,t);return c};function Px(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function sl(e){var t=Px(e);return t.length===1?t[0].toString(16):null}function Nx(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function jf(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function ll(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=jf(t);typeof $t.hooks.addPack=="function"&&!a?$t.hooks.addPack(e,jf(t)):$t.styles[e]=K(K({},$t.styles[e]||{}),i),e==="fas"&&ll("fa",t)}var Ei,Oi,Si,Ar=$t.styles,Mx=$t.shims,Rx=(Ei={},Ve(Ei,Ce,Object.values(Ma[Ce])),Ve(Ei,Ie,Object.values(Ma[Ie])),Ei),Oc=null,eh={},th={},nh={},rh={},ah={},Lx=(Oi={},Ve(Oi,Ce,Object.keys(Pa[Ce])),Ve(Oi,Ie,Object.keys(Pa[Ie])),Oi);function Ix(e){return~gx.indexOf(e)}function Dx(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!Ix(a)?a:null}var ih=function(){var t=function(i){return ds(Ar,function(o,s,l){return o[l]=ds(s,i,{}),o},{})};eh=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),th=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),ah=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in Ar||Q.autoFetchSvg,r=ds(Mx,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});nh=r.names,rh=r.unicodes,Oc=Lo(Q.styleDefault,{family:Q.familyDefault})};_x(function(e){Oc=Lo(e.styleDefault,{family:Q.familyDefault})});ih();function Sc(e,t){return(eh[e]||{})[t]}function Fx(e,t){return(th[e]||{})[t]}function Zn(e,t){return(ah[e]||{})[t]}function oh(e){return nh[e]||{prefix:null,iconName:null}}function jx(e){var t=rh[e],n=Sc("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Mn(){return Oc}var kc=function(){return{prefix:null,iconName:null,rest:[]}};function Lo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?Ce:n,a=Pa[r][e],i=Na[r][e]||Na[r][a],o=e in $t.styles?e:null;return i||o||null}var zf=(Si={},Ve(Si,Ce,Object.keys(Ma[Ce])),Ve(Si,Ie,Object.keys(Ma[Ie])),Si);function Io(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},Ve(t,Ce,"".concat(Q.cssPrefix,"-").concat(Ce)),Ve(t,Ie,"".concat(Q.cssPrefix,"-").concat(Ie)),t),o=null,s=Ce;(e.includes(i[Ce])||e.some(function(u){return zf[Ce].includes(u)}))&&(s=Ce),(e.includes(i[Ie])||e.some(function(u){return zf[Ie].includes(u)}))&&(s=Ie);var l=e.reduce(function(u,c){var f=Dx(Q.cssPrefix,c);if(Ar[c]?(c=Rx[s].includes(c)?fx[s][c]:c,o=c,u.prefix=c):Lx[s].indexOf(c)>-1?(o=c,u.prefix=Lo(c,{family:s})):f?u.iconName=f:c!==Q.replacementClass&&c!==i[Ce]&&c!==i[Ie]&&u.rest.push(c),!a&&u.prefix&&u.iconName){var p=o==="fa"?oh(u.iconName):{},m=Zn(u.prefix,u.iconName);p.prefix&&(o=null),u.iconName=p.iconName||m||u.iconName,u.prefix=p.prefix||u.prefix,u.prefix==="far"&&!Ar.far&&Ar.fas&&!Q.autoFetchSvg&&(u.prefix="fas")}return u},kc());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===Ie&&(Ar.fass||Q.autoFetchSvg)&&(l.prefix="fass",l.iconName=Zn(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=Mn()||"fas"),l}var zx=function(){function e(){Z_(this,e),this.definitions={}}return ex(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=K(K({},n.definitions[s]||{}),o[s]),ll(s,o[s]);var l=Ma[Ce][s];l&&ll(l,o[s]),ih()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,u=o.icon,c=u[2];n[s]||(n[s]={}),c.length>0&&c.forEach(function(f){typeof f=="string"&&(n[s][f]=u)}),n[s][l]=u}),n}}]),e}(),Bf=[],Er={},Rr={},Bx=Object.keys(Rr);function Hx(e,t){var n=t.mixoutsTo;return Bf=e,Er={},Object.keys(Rr).forEach(function(r){Bx.indexOf(r)===-1&&delete Rr[r]}),Bf.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),io(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){Er[o]||(Er[o]=[]),Er[o].push(i[o])})}r.provides&&r.provides(Rr)}),n}function cl(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=Er[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function pr(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=Er[e]||[];a.forEach(function(i){i.apply(null,n)})}function ln(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Rr[e]?Rr[e].apply(null,t):void 0}function ul(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Mn();if(t)return t=Zn(n,t)||t,Ff(sh.definitions,n,t)||Ff($t.styles,n,t)}var sh=new zx,Ux=function(){Q.autoReplaceSvg=!1,Q.observeMutations=!1,pr("noAuto")},Yx={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return fn?(pr("beforeI2svg",t),ln("pseudoElements2svg",t),ln("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;Q.autoReplaceSvg===!1&&(Q.autoReplaceSvg=!0),Q.observeMutations=!0,$x(function(){Vx({autoReplaceSvgRoot:n}),pr("watch",t)})}},Wx={icon:function(t){if(t===null)return null;if(io(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Zn(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Lo(t[0]);return{prefix:r,iconName:Zn(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(Q.cssPrefix,"-"))>-1||t.match(dx))){var a=Io(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||Mn(),iconName:Zn(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=Mn();return{prefix:i,iconName:Zn(i,t)||t}}}},pt={noAuto:Ux,config:Q,dom:Yx,parse:Wx,library:sh,findIconDefinition:ul,toHtml:Ka},Vx=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?Pe:n;(Object.keys($t.styles).length>0||Q.autoFetchSvg)&&fn&&Q.autoReplaceSvg&&pt.dom.i2svg({node:r})};function Do(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Ka(r)})}}),Object.defineProperty(e,"node",{get:function(){if(fn){var r=Pe.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function qx(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(Ec(o)&&n.found&&!r.found){var s=n.width,l=n.height,u={x:s/l/2,y:.5};a.style=Ro(K(K({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function Kx(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(Q.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:K(K({},a),{},{id:o}),children:r}]}]}function Tc(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,u=e.maskId,c=e.titleId,f=e.extra,p=e.watchable,m=p===void 0?!1:p,b=r.found?r:n,y=b.width,A=b.height,g=a==="fak",h=[Q.replacementClass,i?"".concat(Q.cssPrefix,"-").concat(i):""].filter(function(I){return f.classes.indexOf(I)===-1}).filter(function(I){return I!==""||!!I}).concat(f.classes).join(" "),_={children:[],attributes:K(K({},f.attributes),{},{"data-prefix":a,"data-icon":i,class:h,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(y," ").concat(A)})},d=g&&!~f.classes.indexOf("fa-fw")?{width:"".concat(y/A*16*.0625,"em")}:{};m&&(_.attributes[mr]=""),l&&(_.children.push({tag:"title",attributes:{id:_.attributes["aria-labelledby"]||"title-".concat(c||La())},children:[l]}),delete _.attributes.title);var E=K(K({},_),{},{prefix:a,iconName:i,main:n,mask:r,maskId:u,transform:o,symbol:s,styles:K(K({},d),f.styles)}),x=r.found&&n.found?ln("generateAbstractMask",E)||{children:[],attributes:{}}:ln("generateAbstractIcon",E)||{children:[],attributes:{}},T=x.children,F=x.attributes;return E.children=T,E.attributes=F,s?Kx(E):qx(E)}function Hf(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,u=K(K(K({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(u[mr]="");var c=K({},o.styles);Ec(a)&&(c.transform=Sx({transform:a,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var f=Ro(c);f.length>0&&(u.style=f);var p=[];return p.push({tag:"span",attributes:u,children:[t]}),i&&p.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),p}function Gx(e){var t=e.content,n=e.title,r=e.extra,a=K(K(K({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Ro(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var ms=$t.styles;function fl(e){var t=e[0],n=e[1],r=e.slice(4),a=bc(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(Q.cssPrefix,"-").concat(Jn.GROUP)},children:[{tag:"path",attributes:{class:"".concat(Q.cssPrefix,"-").concat(Jn.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(Q.cssPrefix,"-").concat(Jn.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var Xx={found:!1,width:512,height:512};function Jx(e,t){!qp&&!Q.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function dl(e,t){var n=t;return t==="fa"&&Q.styleDefault!==null&&(t=Mn()),new Promise(function(r,a){if(ln("missingIconAbstract"),n==="fa"){var i=oh(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&ms[t]&&ms[t][e]){var o=ms[t][e];return r(fl(o))}Jx(e,t),r(K(K({},Xx),{},{icon:Q.showMissingIcons&&e?ln("missingIconAbstract")||{}:{}}))})}var Uf=function(){},ml=Q.measurePerformance&&bi&&bi.mark&&bi.measure?bi:{mark:Uf,measure:Uf},na='FA "6.5.2"',Zx=function(t){return ml.mark("".concat(na," ").concat(t," begins")),function(){return lh(t)}},lh=function(t){ml.mark("".concat(na," ").concat(t," ends")),ml.measure("".concat(na," ").concat(t),"".concat(na," ").concat(t," begins"),"".concat(na," ").concat(t," ends"))},Cc={begin:Zx,end:lh},zi=function(){};function Yf(e){var t=e.getAttribute?e.getAttribute(mr):null;return typeof t=="string"}function Qx(e){var t=e.getAttribute?e.getAttribute(wc):null,n=e.getAttribute?e.getAttribute(_c):null;return t&&n}function e2(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(Q.replacementClass)}function t2(){if(Q.autoReplaceSvg===!0)return Bi.replace;var e=Bi[Q.autoReplaceSvg];return e||Bi.replace}function n2(e){return Pe.createElementNS("http://www.w3.org/2000/svg",e)}function r2(e){return Pe.createElement(e)}function ch(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?n2:r2:n;if(typeof e=="string")return Pe.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(ch(o,{ceFn:r}))}),a}function a2(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Bi={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(ch(a),n)}),n.getAttribute(mr)===null&&Q.keepOriginalSource){var r=Pe.createComment(a2(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Ac(n).indexOf(Q.replacementClass))return Bi.replace(t);var a=new RegExp("".concat(Q.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===Q.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return Ka(s)}).join(`
`);n.setAttribute(mr,""),n.innerHTML=o}};function Wf(e){e()}function uh(e,t){var n=typeof t=="function"?t:zi;if(e.length===0)n();else{var r=Wf;Q.mutateApproach===cx&&(r=Nn.requestAnimationFrame||Wf),r(function(){var a=t2(),i=Cc.begin("mutate");e.map(a),i(),n()})}}var $c=!1;function fh(){$c=!0}function pl(){$c=!1}var so=null;function Vf(e){if(Lf&&Q.observeMutations){var t=e.treeCallback,n=t===void 0?zi:t,r=e.nodeCallback,a=r===void 0?zi:r,i=e.pseudoElementsCallback,o=i===void 0?zi:i,s=e.observeMutationsRoot,l=s===void 0?Pe:s;so=new Lf(function(u){if(!$c){var c=Mn();Kr(u).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!Yf(f.addedNodes[0])&&(Q.searchPseudoElements&&o(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&Q.searchPseudoElements&&o(f.target.parentNode),f.type==="attributes"&&Yf(f.target)&&~vx.indexOf(f.attributeName))if(f.attributeName==="class"&&Qx(f.target)){var p=Io(Ac(f.target)),m=p.prefix,b=p.iconName;f.target.setAttribute(wc,m||c),b&&f.target.setAttribute(_c,b)}else e2(f.target)&&a(f.target)})}}),fn&&so.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function i2(){so&&so.disconnect()}function o2(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function s2(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=Io(Ac(e));return a.prefix||(a.prefix=Mn()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=Fx(a.prefix,e.innerText)||Sc(a.prefix,sl(e.innerText))),!a.iconName&&Q.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function l2(e){var t=Kr(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return Q.autoA11y&&(n?t["aria-labelledby"]="".concat(Q.replacementClass,"-title-").concat(r||La()):(t["aria-hidden"]="true",t.focusable="false")),t}function c2(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Bt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function qf(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=s2(e),r=n.iconName,a=n.prefix,i=n.rest,o=l2(e),s=cl("parseNodeAttributes",{},e),l=t.styleParser?o2(e):[];return K({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Bt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var u2=$t.styles;function dh(e){var t=Q.autoReplaceSvg==="nest"?qf(e,{styleParser:!1}):qf(e);return~t.extra.classes.indexOf(Kp)?ln("generateLayersText",e,t):ln("generateSvgReplacementMutation",e,t)}var Rn=new Set;xc.map(function(e){Rn.add("fa-".concat(e))});Object.keys(Pa[Ce]).map(Rn.add.bind(Rn));Object.keys(Pa[Ie]).map(Rn.add.bind(Rn));Rn=Va(Rn);function Kf(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!fn)return Promise.resolve();var n=Pe.documentElement.classList,r=function(f){return n.add("".concat(If,"-").concat(f))},a=function(f){return n.remove("".concat(If,"-").concat(f))},i=Q.autoFetchSvg?Rn:xc.map(function(c){return"fa-".concat(c)}).concat(Object.keys(u2));i.includes("fa")||i.push("fa");var o=[".".concat(Kp,":not([").concat(mr,"])")].concat(i.map(function(c){return".".concat(c,":not([").concat(mr,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Kr(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=Cc.begin("onTree"),u=s.reduce(function(c,f){try{var p=dh(f);p&&c.push(p)}catch(m){qp||m.name==="MissingIcon"&&console.error(m)}return c},[]);return new Promise(function(c,f){Promise.all(u).then(function(p){uh(p,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),c()})}).catch(function(p){l(),f(p)})})}function f2(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;dh(e).then(function(n){n&&uh([n],t)})}function d2(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:ul(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:ul(a||{})),e(r,K(K({},n),{},{mask:a}))}}var m2=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Bt:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,u=n.maskId,c=u===void 0?null:u,f=n.title,p=f===void 0?null:f,m=n.titleId,b=m===void 0?null:m,y=n.classes,A=y===void 0?[]:y,g=n.attributes,h=g===void 0?{}:g,_=n.styles,d=_===void 0?{}:_;if(t){var E=t.prefix,x=t.iconName,T=t.icon;return Do(K({type:"icon"},t),function(){return pr("beforeDOMElementCreation",{iconDefinition:t,params:n}),Q.autoA11y&&(p?h["aria-labelledby"]="".concat(Q.replacementClass,"-title-").concat(b||La()):(h["aria-hidden"]="true",h.focusable="false")),Tc({icons:{main:fl(T),mask:l?fl(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:E,iconName:x,transform:K(K({},Bt),a),symbol:o,title:p,maskId:c,titleId:b,extra:{attributes:h,styles:d,classes:A}})})}},p2={mixout:function(){return{icon:d2(m2)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Kf,n.nodeCallback=f2,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?Pe:r,i=n.callback,o=i===void 0?function(){}:i;return Kf(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,u=r.symbol,c=r.mask,f=r.maskId,p=r.extra;return new Promise(function(m,b){Promise.all([dl(a,s),c.iconName?dl(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(y){var A=bc(y,2),g=A[0],h=A[1];m([n,Tc({icons:{main:g,mask:h},prefix:s,iconName:a,transform:l,symbol:u,maskId:f,title:i,titleId:o,extra:p,watchable:!0})])}).catch(b)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=Ro(s);l.length>0&&(a.style=l);var u;return Ec(o)&&(u=ln("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(u||i.icon),{children:r,attributes:a}}}},h2={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return Do({type:"layer"},function(){pr("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(Q.cssPrefix,"-layers")].concat(Va(i)).join(" ")},children:o}]})}}}},v2={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,c=r.styles,f=c===void 0?{}:c;return Do({type:"counter",content:n},function(){return pr("beforeDOMElementCreation",{content:n,params:r}),Gx({content:n.toString(),title:i,extra:{attributes:u,styles:f,classes:["".concat(Q.cssPrefix,"-layers-counter")].concat(Va(s))}})})}}}},g2={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Bt:a,o=r.title,s=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,c=r.attributes,f=c===void 0?{}:c,p=r.styles,m=p===void 0?{}:p;return Do({type:"text",content:n},function(){return pr("beforeDOMElementCreation",{content:n,params:r}),Hf({content:n,transform:K(K({},Bt),i),title:s,extra:{attributes:f,styles:m,classes:["".concat(Q.cssPrefix,"-layers-text")].concat(Va(u))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(Yp){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();s=c.width/u,l=c.height/u}return Q.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Hf({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},b2=new RegExp('"',"ug"),Gf=[1105920,1112319];function y2(e){var t=e.replace(b2,""),n=Nx(t,0),r=n>=Gf[0]&&n<=Gf[1],a=t.length===2?t[0]===t[1]:!1;return{value:sl(a?t[0]:t),isSecondary:r||a}}function Xf(e,t){var n="".concat(lx).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=Kr(e.children),o=i.filter(function(T){return T.getAttribute(ol)===t})[0],s=Nn.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(mx),u=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&c!=="none"&&c!==""){var f=s.getPropertyValue("content"),p=~["Sharp"].indexOf(l[2])?Ie:Ce,m=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Na[p][l[2].toLowerCase()]:px[p][u],b=y2(f),y=b.value,A=b.isSecondary,g=l[0].startsWith("FontAwesome"),h=Sc(m,y),_=h;if(g){var d=jx(y);d.iconName&&d.prefix&&(h=d.iconName,m=d.prefix)}if(h&&!A&&(!o||o.getAttribute(wc)!==m||o.getAttribute(_c)!==_)){e.setAttribute(n,_),o&&e.removeChild(o);var E=c2(),x=E.extra;x.attributes[ol]=t,dl(h,m).then(function(T){var F=Tc(K(K({},E),{},{icons:{main:T,mask:kc()},prefix:m,iconName:_,extra:x,watchable:!0})),I=Pe.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(I,e.firstChild):e.appendChild(I),I.outerHTML=F.map(function(H){return Ka(H)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function w2(e){return Promise.all([Xf(e,"::before"),Xf(e,"::after")])}function _2(e){return e.parentNode!==document.head&&!~ux.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(ol)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Jf(e){if(fn)return new Promise(function(t,n){var r=Kr(e.querySelectorAll("*")).filter(_2).map(w2),a=Cc.begin("searchPseudoElements");fh(),Promise.all(r).then(function(){a(),pl(),t()}).catch(function(){a(),pl(),n()})})}var x2={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Jf,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?Pe:r;Q.searchPseudoElements&&Jf(a)}}},Zf=!1,A2={mixout:function(){return{dom:{unwatch:function(){fh(),Zf=!0}}}},hooks:function(){return{bootstrap:function(){Vf(cl("mutationObserverCallbacks",{}))},noAuto:function(){i2()},watch:function(n){var r=n.observeMutationsRoot;Zf?pl():Vf(cl("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Qf=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},E2={mixout:function(){return{parse:{transform:function(n){return Qf(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=Qf(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),u="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),c="rotate(".concat(a.rotate," 0 0)"),f={transform:"".concat(l," ").concat(u," ").concat(c)},p={transform:"translate(".concat(o/2*-1," -256)")},m={outer:s,inner:f,path:p};return{tag:"g",attributes:K({},m.outer),children:[{tag:"g",attributes:K({},m.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:K(K({},r.icon.attributes),m.path)}]}]}}}},ps={x:0,y:0,width:"100%",height:"100%"};function ed(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function O2(e){return e.tag==="g"?e.children:[e]}var S2={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?Io(a.split(" ").map(function(o){return o.trim()})):kc();return i.prefix||(i.prefix=Mn()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,u=i.width,c=i.icon,f=o.width,p=o.icon,m=Ox({transform:l,containerWidth:f,iconWidth:u}),b={tag:"rect",attributes:K(K({},ps),{},{fill:"white"})},y=c.children?{children:c.children.map(ed)}:{},A={tag:"g",attributes:K({},m.inner),children:[ed(K({tag:c.tag,attributes:K(K({},c.attributes),m.path)},y))]},g={tag:"g",attributes:K({},m.outer),children:[A]},h="mask-".concat(s||La()),_="clip-".concat(s||La()),d={tag:"mask",attributes:K(K({},ps),{},{id:h,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[b,g]},E={tag:"defs",children:[{tag:"clipPath",attributes:{id:_},children:O2(p)},d]};return r.push(E,{tag:"rect",attributes:K({fill:"currentColor","clip-path":"url(#".concat(_,")"),mask:"url(#".concat(h,")")},ps)}),{children:r,attributes:a}}}},k2={provides:function(t){var n=!1;Nn.matchMedia&&(n=Nn.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:K(K({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=K(K({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:K(K({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:K(K({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:K(K({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:K(K({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:K(K({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:K(K({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:K(K({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},T2={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},C2=[Tx,p2,h2,v2,g2,x2,A2,E2,S2,k2,T2];Hx(C2,{mixoutsTo:pt});pt.noAuto;pt.config;pt.library;pt.dom;var hl=pt.parse;pt.findIconDefinition;pt.toHtml;var $2=pt.icon;pt.layer;pt.text;pt.counter;function td(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Jt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?td(Object(n),!0).forEach(function(r){rt(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):td(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function P2(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function N2(e){var t=P2(e,"string");return typeof t=="symbol"?t:t+""}function lo(e){"@babel/helpers - typeof";return lo=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},lo(e)}function rt(e,t,n){return t=N2(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function M2(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function R2(e,t){if(e==null)return{};var n=M2(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var L2=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},mh={exports:{}};(function(e){(function(t){var n=function(g,h,_){if(!u(h)||f(h)||p(h)||m(h)||l(h))return h;var d,E=0,x=0;if(c(h))for(d=[],x=h.length;E<x;E++)d.push(n(g,h[E],_));else{d={};for(var T in h)Object.prototype.hasOwnProperty.call(h,T)&&(d[g(T,_)]=n(g,h[T],_))}return d},r=function(g,h){h=h||{};var _=h.separator||"_",d=h.split||/(?=[A-Z])/;return g.split(d).join(_)},a=function(g){return b(g)?g:(g=g.replace(/[\-_\s]+(.)?/g,function(h,_){return _?_.toUpperCase():""}),g.substr(0,1).toLowerCase()+g.substr(1))},i=function(g){var h=a(g);return h.substr(0,1).toUpperCase()+h.substr(1)},o=function(g,h){return r(g,h).toLowerCase()},s=Object.prototype.toString,l=function(g){return typeof g=="function"},u=function(g){return g===Object(g)},c=function(g){return s.call(g)=="[object Array]"},f=function(g){return s.call(g)=="[object Date]"},p=function(g){return s.call(g)=="[object RegExp]"},m=function(g){return s.call(g)=="[object Boolean]"},b=function(g){return g=g-0,g===g},y=function(g,h){var _=h&&"process"in h?h.process:h;return typeof _!="function"?g:function(d,E){return _(d,g,E)}},A={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(g,h){return n(y(a,h),g)},decamelizeKeys:function(g,h){return n(y(o,h),g,h)},pascalizeKeys:function(g,h){return n(y(i,h),g)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=A:t.humps=A})(L2)})(mh);var I2=mh.exports,D2=["class","style"];function F2(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=I2.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function j2(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function ph(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return ph(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,u){var c=e.attributes[u];switch(u){case"class":l.class=j2(c);break;case"style":l.style=F2(c);break;default:l.attrs[u]=c}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=R2(n,D2);return sm(e.tag,Jt(Jt(Jt({},t),{},{class:a.class,style:Jt(Jt({},a.style),o)},a.attrs),s),r)}var hh=!1;try{hh=!0}catch{}function z2(){if(!hh&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function hs(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?rt({},e,t):{}}function B2(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},rt(rt(rt(rt(rt(rt(rt(rt(rt(rt(t,"fa-".concat(e.size),e.size!==null),"fa-rotate-".concat(e.rotation),e.rotation!==null),"fa-pull-".concat(e.pull),e.pull!==null),"fa-swap-opacity",e.swapOpacity),"fa-bounce",e.bounce),"fa-shake",e.shake),"fa-beat",e.beat),"fa-fade",e.fade),"fa-beat-fade",e.beatFade),"fa-flash",e.flash),rt(rt(t,"fa-spin-pulse",e.spinPulse),"fa-spin-reverse",e.spinReverse));return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function nd(e){if(e&&lo(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(hl.icon)return hl.icon(e);if(e===null)return null;if(lo(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var rd=Ml({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=Ue(function(){return nd(t.icon)}),i=Ue(function(){return hs("classes",B2(t))}),o=Ue(function(){return hs("transform",typeof t.transform=="string"?hl.transform(t.transform):t.transform)}),s=Ue(function(){return hs("mask",nd(t.mask))}),l=Ue(function(){return $2(a.value,Jt(Jt(Jt(Jt({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title,titleId:t.titleId,maskId:t.maskId}))});Ut(l,function(c){if(!c)return z2("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var u=Ue(function(){return l.value?ph(l.value.abstract[0],{},r):null});return function(){return u.value}}});const vs=e=>e?"":void 0,H2=e=>e!==!1,U2=["hidden","now","onClick"],Y2={key:0,class:"float-right"},W2=["now","tabindex","onClick","onKeydown"],Ft=new gc,vl=we(null),V2=we(null),bn=we({}),q2={__name:"index",props:{hidden:{type:[Boolean,String],default:!1}},emits:["show-menu-background"],setup(e,{emit:t}){const n=e,r=t,a=Ue(()=>H2(n.hidden)),i=we("");Ut(i,Nr("load-module")(vl)),Ft.modulePre=i;const o=Nr("app"),s=o.directive("tip")??{},l=o.directive("menu")??{},u=Ue(()=>{const c=[{id:"default",text:"",showed:!0,tabs:[]}];let f={},p=0;for(const m of Ft.list){if(m.option?.hidden)continue;let b=f;!m.group||!m.group?.id?b=c[0]:f.id!=m.group?.id&&c.push(b=f={id:m.group.id,text:m.group.text,showed:!0,tabs:[]}),!bn[b.id]&&b.tabs.push({tab:m,index:p++})}return c.filter(m=>m.tabs.length)});return(c,f)=>a.value?He("",!0):(de(),Ee("comp-sidebar",{key:0,ref_key:"domSidebar",ref:V2,"back-scheme":"main",onContextmenu:f[0]||(f[0]=Kt(p=>r("show-menu-background",p),["self","prevent"]))},[Pv(c.$slots,"buttons-before",{},void 0),(de(!0),Ee(je,null,Vi(u.value,p=>(de(),Ee(je,{key:p.id},[p.id!="default"?An((de(),Ee("p-group-name",{key:0,hidden:Se(vs)(bn.value[p.id]),now:Se(vs)(bn.value[p.id]&&p.tabs.find(({tab:m})=>Se(Ft).now===m)),onClick:m=>bn.value[p.id]=!bn.value[p.id]},[Xe("span",null,bt(p.text),1),bn.value[p.id]?(de(),Ee("span",Y2,bt(bn.value[p.id]?"+":""),1)):He("",!0)],8,U2)),[[Se(s),p.text,void 0,{right:!0}]]):He("",!0),(de(!0),Ee(je,null,Vi(p.tabs,({tab:m,index:b})=>An((de(),Ee("p-tab",{key:m.id,now:Se(vs)(Se(Ft).now===m),tabindex:1e3+b,style:Ht(m.option.style),onClick:y=>Se(Ft).change(m,"switch-tab"),onKeydown:Bn(y=>Se(Ft).change(m,"switch-tab-key"),["enter","space"])},[m.typesTab.includes("icon-corn")&&m.icon?(de(),ft(Se(rd),{key:0,icon:m.icon,corn:""},null,8,["icon"])):He("",!0),m.typesTab.includes("icon")&&m.icon?(de(),ft(Se(rd),{key:1,icon:m.icon},null,8,["icon"])):He("",!0),m.typesTab.includes("title")&&m.title?(de(),Ee(je,{key:2},[jl(bt(m.typesTab.includes("icon")?" ":""),1),Xe("p-title",null,bt(m.title),1)],64)):He("",!0),m.typesTab.includes("header")&&m.header?(de(),Ee("p-header",{key:3,style:Ht({backgroundImage:`url(${m.header})`})},null,4)):He("",!0)],44,W2)),[[qn,!bn.value[p.id]],[Se(s),m.tipsTitle||m.title,void 0,{right:!0}],[Se(l),{params:m,...m.option.menu}]])),128))],64))),128))],544))}},K2=Ua(q2,[["__scopeId","data-v-709c8eec"]]);class G2{id;item;pool;time}class X2{id;status=0;timeFinished;timeShelved;shelved}class J2{id;nick;uid;keyAuth;versionKeyAuth;timeFetchFirst;timeFetchLast;sizeCharacter;countAchievement;name;level;levelWorld;logsParsed;infosAchievementPlayer$id}class Z2{profiles=[];$profiles=we(this.profiles);constructor(){this.load()}parse(t){const n=[];for(const r of t){const a=new J2;a.id=r.id,a.nick=r.nick,a.uid=r.uid,a.keyAuth=r.keyAuth,a.versionKeyAuth=r.versionKeyAuth,a.timeFetchFirst=r.timeFetchFirst,a.timeFetchLast=r.timeFetchLast,a.sizeCharacter=r.sizeCharacter,a.countAchievement=r.countAchievement,a.name=r.name,a.level=r.level,a.levelWorld=r.levelWorld,a.logsParsed=[];for(const i of r.logsParsed){const o=new G2;o.id=i.id,o.item=i.item,o.pool=i.pool,o.time=i.time,a.logsParsed.push(o)}a.infosAchievementPlayer$id={};for(const i in r.infosAchievementPlayer$id){const o=r.infosAchievementPlayer$id[i],s=new X2;s.id=o.id,s.status=o.status,s.shelved=o.shelved,s.timeFinished=o.timeFinished,s.timeShelved=o.timeShelved,a.infosAchievementPlayer$id[i]=s}n.push(a)}return n}load({willUpdateRef:t=!0,willDryLoad:n=!1}={}){let r=localStorage.getItem("profiles");try{r===null&&(r="[]");const a=JSON.parse(r);if(!(a instanceof Array))throw Error("校验档案集数据：数据类型不是[数组]");const i=this.parse(a);return n||(this.profiles=i),t?(this.$profiles.value=i,this.$profiles):this.profiles}catch(a){if(n)throw Error(`读取档案集：${a}`);{const i=`profiles-${Vt().format("YYMMDDHHmmss")}`;throw localStorage.setItem(`profiles-bad-${i}`,r),localStorage.setItem("profiles","[]"),Error(`读取档案集：${a}
  ● 数据已重置
  ● 错误数据已备份到localStorage.profiles-bad-${i}`)}}}save(){localStorage.setItem("profiles",JSON.stringify(this.profiles))}}const gl=await new Z2;window.PA=gl;const Q2={__name:"index",setup(e){return document.title="DR星铁笔记",Rl(()=>{const t=localStorage.getItem("last-profile-id");Ft.add("database-character-grid",{type:"icon|title",title:"角色归属",icon:of,delay:!0}),Ft.add("profile-manager",{type:"icon|title",title:"档案管理",icon:of,delay:!!(t&&gl.$profiles.value.length)});for(const n of gl.profiles)Ft.add("achievement-manager",{type:"icon|title",title:"成就管理",icon:D0,delay:n.id!=t,group:{id:n.id,text:n.nick??n.name}},n.id),Ft.add("gacha-analysis",{type:"icon|title",title:"跃迁分析",icon:I0,delay:n.id!=t,group:{id:n.id,text:n.nick??n.name}},n.id)}),(t,n)=>(de(),Ee(je,null,[Qe(Se(K2)),Xe("p-main",null,[(de(),ft(_v,null,[(de(),ft(Nl(Se(vl)),{key:`module-${Se(vl)}`}))],1024))])],64))}},eA=Ua(Q2,[["__scopeId","data-v-9596dd53"]]),Wn=Bl(eA);Wn.provide("app",Wn);const ad=async()=>{Wn.mixin({data(){return{brop:tr}}}),en.alert=nl,await p_(),await x_(Wn),await F_(Wn),await j_(Wn),Wn.mount("#app")};document.readyState=="complete"?await ad():window.addEventListener("load",ad);export{pA as $,Ht as A,Bn as B,is as C,Vt as D,Kt as E,je as F,uA as G,lA as H,An as I,qn as J,Yi as K,du as L,rA as M,dA as N,mA as O,gl as P,I0 as Q,D0 as R,aA as S,Ll as T,Ua as _,de as a,Ee as b,Ue as c,Xe as d,Qe as e,Vi as f,bt as g,ft as h,fA as i,oA as j,He as k,iA as l,sA as m,X2 as n,Rl as o,cA as p,M0 as q,we as r,jl as s,Ft as t,Se as u,tA as v,Ut as w,nA as x,ar as y,tr as z};
