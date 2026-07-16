import{r as e,t}from"./rolldown-runtime-QTnfLwEv.js";import{B as n,D as r,F as i,G as a,H as o,I as s,J as c,K as l,L as u,M as d,N as f,P as p,R as m,U as h,V as g,W as _,Z as v,a as y,c as b,d as ee,f as x,h as S,j as C,l as w,m as T,o as E,q as te,t as ne,u as re,v as ie,x as ae,z as oe}from"./_plugin-vue_export-helper-FYFopUDl.js";var se=t(((e,t)=>{(function(n,r){typeof e==`object`&&t!==void 0?t.exports=r():typeof define==`function`&&define.amd?define(r):(n=typeof globalThis<`u`?globalThis:n||self).dayjs=r()})(e,(function(){var e=1e3,t=6e4,n=36e5,r=`millisecond`,i=`second`,a=`minute`,o=`hour`,s=`day`,c=`week`,l=`month`,u=`quarter`,d=`year`,f=`date`,p=`Invalid Date`,m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,h=/\[([^\]]+)]|YYYY|YY|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:`en`,weekdays:`Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday`.split(`_`),months:`January_February_March_April_May_June_July_August_September_October_November_December`.split(`_`),ordinal:function(e){var t=[`th`,`st`,`nd`,`rd`],n=e%100;return`[`+e+(t[(n-20)%10]||t[n]||t[0])+`]`}},_=function(e,t,n){var r=String(e);return!r||r.length>=t?e:``+Array(t+1-r.length).join(n)+e},v={s:_,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),i=n%60;return(t<=0?`+`:`-`)+_(r,2,`0`)+`:`+_(i,2,`0`)},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),i=t.clone().add(r,l),a=n-i<0,o=t.clone().add(r+(a?-1:1),l);return+(-(r+(n-i)/(a?i-o:o-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:l,y:d,w:c,d:s,D:f,h:o,m:a,s:i,ms:r,Q:u}[e]||String(e||``).toLowerCase().replace(/s$/,``)},u:function(e){return e===void 0}},y=`en`,b={};b[y]=g;var ee=`$isDayjsObject`,x=function(e){return e instanceof T||!(!e||!e[ee])},S=function e(t,n,r){var i;if(!t)return y;if(typeof t==`string`){var a=t.toLowerCase();b[a]&&(i=a),n&&(b[a]=n,i=a);var o=t.split(`-`);if(!i&&o.length>1)return e(o[0])}else{var s=t.name;b[s]=t,i=s}return!r&&i&&(y=i),i||!r&&y},C=function(e,t){if(x(e))return e.clone();var n=typeof t==`object`?t:{};return n.date=e,n.args=arguments,new T(n)},w=v;w.l=S,w.i=x,w.w=function(e,t){return C(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var T=function(){function g(e){this.$L=S(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[ee]=!0}var _=g.prototype;return _.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(t===null)return new Date(NaN);if(w.u(t))return new Date;if(t instanceof Date)return new Date(t);if(typeof t==`string`&&!/Z$/i.test(t)){var r=t.match(m);if(r){var i=r[2]-1||0,a=(r[7]||`0`).substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)}}return new Date(t)}(e),this.init()},_.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},_.$utils=function(){return w},_.isValid=function(){return this.$d.toString()!==p},_.isSame=function(e,t){var n=C(e);return this.startOf(t)<=n&&n<=this.endOf(t)},_.isAfter=function(e,t){return C(e)<this.startOf(t)},_.isBefore=function(e,t){return this.endOf(t)<C(e)},_.$g=function(e,t,n){return w.u(e)?this[t]:this.set(n,e)},_.unix=function(){return Math.floor(this.valueOf()/1e3)},_.valueOf=function(){return this.$d.getTime()},_.startOf=function(e,t){var n=this,r=!!w.u(t)||t,u=w.p(e),p=function(e,t){var i=w.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?i:i.endOf(s)},m=function(e,t){return w.w(n.toDate()[e].apply(n.toDate(`s`),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},h=this.$W,g=this.$M,_=this.$D,v=`set`+(this.$u?`UTC`:``);switch(u){case d:return r?p(1,0):p(31,11);case l:return r?p(1,g):p(0,g+1);case c:var y=this.$locale().weekStart||0,b=(h<y?h+7:h)-y;return p(r?_-b:_+(6-b),g);case s:case f:return m(v+`Hours`,0);case o:return m(v+`Minutes`,1);case a:return m(v+`Seconds`,2);case i:return m(v+`Milliseconds`,3);default:return this.clone()}},_.endOf=function(e){return this.startOf(e,!1)},_.$set=function(e,t){var n,c=w.p(e),u=`set`+(this.$u?`UTC`:``),p=(n={},n[s]=u+`Date`,n[f]=u+`Date`,n[l]=u+`Month`,n[d]=u+`FullYear`,n[o]=u+`Hours`,n[a]=u+`Minutes`,n[i]=u+`Seconds`,n[r]=u+`Milliseconds`,n)[c],m=c===s?this.$D+(t-this.$W):t;if(c===l||c===d){var h=this.clone().set(f,1);h.$d[p](m),h.init(),this.$d=h.set(f,Math.min(this.$D,h.daysInMonth())).$d}else p&&this.$d[p](m);return this.init(),this},_.set=function(e,t){return this.clone().$set(e,t)},_.get=function(e){return this[w.p(e)]()},_.add=function(r,u){var f,p=this;r=Number(r);var m=w.p(u),h=function(e){var t=C(p);return w.w(t.date(t.date()+Math.round(e*r)),p)};if(m===l)return this.set(l,this.$M+r);if(m===d)return this.set(d,this.$y+r);if(m===s)return h(1);if(m===c)return h(7);var g=(f={},f[a]=t,f[o]=n,f[i]=e,f)[m]||1,_=this.$d.getTime()+r*g;return w.w(_,this)},_.subtract=function(e,t){return this.add(-1*e,t)},_.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||p;var r=e||`YYYY-MM-DDTHH:mm:ssZ`,i=w.z(this),a=this.$H,o=this.$m,s=this.$M,c=n.weekdays,l=n.months,u=n.meridiem,d=function(e,n,i,a){return e&&(e[n]||e(t,r))||i[n].slice(0,a)},f=function(e){return w.s(a%12||12,e,`0`)},m=u||function(e,t,n){var r=e<12?`AM`:`PM`;return n?r.toLowerCase():r};return r.replace(h,(function(e,r){return r||function(e){switch(e){case`YY`:return String(t.$y).slice(-2);case`YYYY`:return w.s(t.$y,4,`0`);case`M`:return s+1;case`MM`:return w.s(s+1,2,`0`);case`MMM`:return d(n.monthsShort,s,l,3);case`MMMM`:return d(l,s);case`D`:return t.$D;case`DD`:return w.s(t.$D,2,`0`);case`d`:return String(t.$W);case`dd`:return d(n.weekdaysMin,t.$W,c,2);case`ddd`:return d(n.weekdaysShort,t.$W,c,3);case`dddd`:return c[t.$W];case`H`:return String(a);case`HH`:return w.s(a,2,`0`);case`h`:return f(1);case`hh`:return f(2);case`a`:return m(a,o,!0);case`A`:return m(a,o,!1);case`m`:return String(o);case`mm`:return w.s(o,2,`0`);case`s`:return String(t.$s);case`ss`:return w.s(t.$s,2,`0`);case`SSS`:return w.s(t.$ms,3,`0`);case`Z`:return i}return null}(e)||i.replace(`:`,``)}))},_.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},_.diff=function(r,f,p){var m,h=this,g=w.p(f),_=C(r),v=(_.utcOffset()-this.utcOffset())*t,y=this-_,b=function(){return w.m(h,_)};switch(g){case d:m=b()/12;break;case l:m=b();break;case u:m=b()/3;break;case c:m=(y-v)/6048e5;break;case s:m=(y-v)/864e5;break;case o:m=y/n;break;case a:m=y/t;break;case i:m=y/e;break;default:m=y}return p?m:w.a(m)},_.daysInMonth=function(){return this.endOf(l).$D},_.$locale=function(){return b[this.$L]},_.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=S(e,t,!0);return r&&(n.$L=r),n},_.clone=function(){return w.w(this.$d,this)},_.toDate=function(){return new Date(this.valueOf())},_.toJSON=function(){return this.isValid()?this.toISOString():null},_.toISOString=function(){return this.$d.toISOString()},_.toString=function(){return this.$d.toUTCString()},g}(),E=T.prototype;return C.prototype=E,[[`$ms`,r],[`$s`,i],[`$m`,a],[`$H`,o],[`$W`,s],[`$M`,l],[`$y`,d],[`$D`,f]].forEach((function(e){E[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),C.extend=function(e,t){return e.$i||=(e(t,T,C),!0),C},C.locale=S,C.isDayjs=x,C.unix=function(e){return C(1e3*e)},C.en=b[y],C.Ls=b,C.p={},C}))})),ce=t(((e,t)=>{(function(n,r){typeof e==`object`&&t!==void 0?t.exports=r(se()):typeof define==`function`&&define.amd?define([`dayjs`],r):(n=typeof globalThis<`u`?globalThis:n||self).dayjs_locale_zh_cn=r(n.dayjs)})(e,(function(e){function t(e){return e&&typeof e==`object`&&`default`in e?e:{default:e}}var n=t(e),r={name:`zh-cn`,weekdays:`星期日_星期一_星期二_星期三_星期四_星期五_星期六`.split(`_`),weekdaysShort:`周日_周一_周二_周三_周四_周五_周六`.split(`_`),weekdaysMin:`日_一_二_三_四_五_六`.split(`_`),months:`一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月`.split(`_`),monthsShort:`1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月`.split(`_`),ordinal:function(e,t){return t===`W`?e+`周`:e+`日`},weekStart:1,yearStart:4,formats:{LT:`HH:mm`,LTS:`HH:mm:ss`,L:`YYYY/MM/DD`,LL:`YYYY年M月D日`,LLL:`YYYY年M月D日Ah点mm分`,LLLL:`YYYY年M月D日ddddAh点mm分`,l:`YYYY/M/D`,ll:`YYYY年M月D日`,lll:`YYYY年M月D日 HH:mm`,llll:`YYYY年M月D日dddd HH:mm`},relativeTime:{future:`%s内`,past:`%s前`,s:`几秒`,m:`1 分钟`,mm:`%d 分钟`,h:`1 小时`,hh:`%d 小时`,d:`1 天`,dd:`%d 天`,M:`1 个月`,MM:`%d 个月`,y:`1 年`,yy:`%d 年`},meridiem:function(e,t){var n=100*e+t;return n<600?`凌晨`:n<900?`早上`:n<1100?`上午`:n<1300?`中午`:n<1800?`下午`:`晚上`}};return n.default.locale(r,null,!0),r}))})),le=t(((e,t)=>{(function(n,r){typeof e==`object`&&t!==void 0?t.exports=r():typeof define==`function`&&define.amd?define(r):(n=typeof globalThis<`u`?globalThis:n||self).dayjs_plugin_customParseFormat=r()})(e,(function(){var e={LTS:`h:mm:ss A`,LT:`h:mm A`,L:`MM/DD/YYYY`,LL:`MMMM D, YYYY`,LLL:`MMMM D, YYYY h:mm A`,LLLL:`dddd, MMMM D, YYYY h:mm A`},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d/,r=/\d\d/,i=/\d\d?/,a=/\d*[^-_:/,()\s\d]+/,o={},s=function(e){return(e=+e)+(e>68?1900:2e3)},c=function(e){return function(t){this[e]=+t}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||={}).offset=function(e){if(!e||e===`Z`)return 0;var t=e.match(/([+-]|\d\d)/g),n=60*t[1]+(+t[2]||0);return n===0?0:t[0]===`+`?-n:n}(e)}],u=function(e){var t=o[e];return t&&(t.indexOf?t:t.s.concat(t.f))},d=function(e,t){var n,r=o.meridiem;if(r){for(var i=1;i<=24;i+=1)if(e.indexOf(r(i,0,t))>-1){n=i>12;break}}else n=e===(t?`pm`:`PM`);return n},f={A:[a,function(e){this.afternoon=d(e,!1)}],a:[a,function(e){this.afternoon=d(e,!0)}],Q:[n,function(e){this.month=3*(e-1)+1}],S:[n,function(e){this.milliseconds=100*e}],SS:[r,function(e){this.milliseconds=10*e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[i,c(`seconds`)],ss:[i,c(`seconds`)],m:[i,c(`minutes`)],mm:[i,c(`minutes`)],H:[i,c(`hours`)],h:[i,c(`hours`)],HH:[i,c(`hours`)],hh:[i,c(`hours`)],D:[i,c(`day`)],DD:[r,c(`day`)],Do:[a,function(e){var t=o.ordinal,n=e.match(/\d+/);if(this.day=n[0],t)for(var r=1;r<=31;r+=1)t(r).replace(/\[|\]/g,``)===e&&(this.day=r)}],w:[i,c(`week`)],ww:[r,c(`week`)],M:[i,c(`month`)],MM:[r,c(`month`)],MMM:[a,function(e){var t=u(`months`),n=(u(`monthsShort`)||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(n<1)throw Error();this.month=n%12||n}],MMMM:[a,function(e){var t=u(`months`).indexOf(e)+1;if(t<1)throw Error();this.month=t%12||t}],Y:[/[+-]?\d+/,c(`year`)],YY:[r,function(e){this.year=s(e)}],YYYY:[/\d{4}/,c(`year`)],Z:l,ZZ:l};function p(n){for(var r=n,i=o&&o.formats,a=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,n,r){var a=r&&r.toUpperCase();return n||i[r]||e[r]||i[a].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,n){return t||n.slice(1)}))}))).match(t),s=a.length,c=0;c<s;c+=1){var l=a[c],u=f[l],d=u&&u[0],p=u&&u[1];a[c]=p?{regex:d,parser:p}:l.replace(/^\[|\]$/g,``)}return function(e){for(var t={},n=0,r=0;n<s;n+=1){var i=a[n];if(typeof i==`string`)r+=i.length;else{var o=i.regex,c=i.parser,l=e.slice(r),u=o.exec(l)[0];c.call(t,u),e=e.replace(u,``)}}return function(e){var t=e.afternoon;if(t!==void 0){var n=e.hours;t?n<12&&(e.hours+=12):n===12&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,n){n.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(s=e.parseTwoDigitYear);var r=t.prototype,i=r.parse;r.parse=function(e){var t=e.date,r=e.utc,a=e.args;this.$u=r;var s=a[1];if(typeof s==`string`){var c=!0===a[2],l=!0===a[3],u=c||l,d=a[2];l&&(d=a[2]),o=this.$locale(),!c&&d&&(o=n.Ls[d]),this.$d=function(e,t,n,r){try{if([`x`,`X`].indexOf(t)>-1)return new Date((t===`X`?1e3:1)*e);var i=p(t)(e),a=i.year,o=i.month,s=i.day,c=i.hours,l=i.minutes,u=i.seconds,d=i.milliseconds,f=i.zone,m=i.week,h=new Date,g=s||(a||o?1:h.getDate()),_=a||h.getFullYear(),v=0;a&&!o||(v=o>0?o-1:h.getMonth());var y,b=c||0,ee=l||0,x=u||0,S=d||0;return f?new Date(Date.UTC(_,v,g,b,ee,x,S+60*f.offset*1e3)):n?new Date(Date.UTC(_,v,g,b,ee,x,S)):(y=new Date(_,v,g,b,ee,x,S),m&&(y=r(y).week(m).toDate()),y)}catch{return new Date(``)}}(t,s,r,n),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),u&&t!=this.format(s)&&(this.$d=new Date(``)),o={}}else if(s instanceof Array)for(var f=s.length,m=1;m<=f;m+=1){a[1]=s[m-1];var h=n.apply(this,a);if(h.isValid()){this.$d=h.$d,this.$L=h.$L,this.init();break}m===f&&(this.$d=new Date(``))}else i.call(this,e)}}}))})),ue=t(((e,t)=>{(function(n,r){typeof e==`object`&&t!==void 0?t.exports=r():typeof define==`function`&&define.amd?define(r):(n=typeof globalThis<`u`?globalThis:n||self).dayjs_plugin_relativeTime=r()})(e,(function(){return function(e,t,n){e||={};var r=t.prototype,i={future:`in %s`,past:`%s ago`,s:`a few seconds`,m:`a minute`,mm:`%d minutes`,h:`an hour`,hh:`%d hours`,d:`a day`,dd:`%d days`,M:`a month`,MM:`%d months`,y:`a year`,yy:`%d years`};function a(e,t,n,i){return r.fromToBase(e,t,n,i)}n.en.relativeTime=i,r.fromToBase=function(t,r,a,o,s){for(var c,l,u,d=a.$locale().relativeTime||i,f=e.thresholds||[{l:`s`,r:44,d:`second`},{l:`m`,r:89},{l:`mm`,r:44,d:`minute`},{l:`h`,r:89},{l:`hh`,r:21,d:`hour`},{l:`d`,r:35},{l:`dd`,r:25,d:`day`},{l:`M`,r:45},{l:`MM`,r:10,d:`month`},{l:`y`,r:17},{l:`yy`,d:`year`}],p=f.length,m=0;m<p;m+=1){var h=f[m];h.d&&(c=o?n(t).diff(a,h.d,!0):a.diff(t,h.d,!0));var g=(e.rounding||Math.round)(Math.abs(c));if(u=c>0,g<=h.r||!h.r){g<=1&&m>0&&(h=f[m-1]);var _=d[h.l];s&&(g=s(``+g)),l=typeof _==`string`?_.replace(`%d`,g):_(g,r,h.l,u);break}}if(r)return l;var v=u?d.future:d.past;return typeof v==`function`?v(l):v.replace(`%s`,l)},r.to=function(e,t){return a(e,t,this,!0)},r.from=function(e,t){return a(e,t,this)};var o=function(e){return e.$u?n.utc():n()};r.toNow=function(e){return this.to(o(this),e)},r.fromNow=function(e){return this.from(o(this),e)}}}))})),de=t(((e,t)=>{(function(n,r){typeof e==`object`&&t!==void 0?t.exports=r():typeof define==`function`&&define.amd?define(r):(n=typeof globalThis<`u`?globalThis:n||self).dayjs_plugin_isBetween=r()})(e,(function(){return function(e,t,n){t.prototype.isBetween=function(e,t,r,i){var a=n(e),o=n(t),s=(i||=`()`)[0]===`(`,c=i[1]===`)`;return(s?this.isAfter(a,r):!this.isBefore(a,r))&&(c?this.isBefore(o,r):!this.isAfter(o,r))||(s?this.isBefore(a,r):!this.isAfter(a,r))&&(c?this.isAfter(o,r):!this.isBefore(o,r))}}}))})),fe=t(((e,t)=>{(function(n,r){typeof e==`object`&&t!==void 0?t.exports=r():typeof define==`function`&&define.amd?define(r):(n=typeof globalThis<`u`?globalThis:n||self).dayjs_plugin_weekday=r()})(e,(function(){return function(e,t){t.prototype.weekday=function(e){var t=this.$locale().weekStart||0,n=this.$W,r=(n<t?n+7:n)-t;return this.$utils().u(e)?r:this.subtract(r,`day`).add(e,`day`)}}}))})),D=e(se(),1);ce();var pe=e(le(),1),me=e(ue(),1),he=e(de(),1),ge=e(fe(),1);D.default.extend(pe.default),D.default.extend(me.default),D.default.extend(he.default),D.default.extend(ge.default),D.default.locale(`zh-cn`),D.default.prototype.defaultFormat=`YYYY-MM-DD HH:mm:ss`,D.default.prototype.formatRaw=D.default.prototype.format,D.default.prototype.format=function(e=this.defaultFormat){return this.formatRaw(e||this.defaultFormat)};var _e=D.default,ve=void 0,ye=typeof window<`u`&&window.trustedTypes;if(ye)try{ve=ye.createPolicy(`vue`,{createHTML:e=>e})}catch{}var be=ve?e=>ve.createHTML(e):e=>e,xe=`http://www.w3.org/2000/svg`,Se=`http://www.w3.org/1998/Math/MathML`,O=typeof document<`u`?document:null,Ce=O&&O.createElement(`template`),we={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{let t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{let i=t===`svg`?O.createElementNS(xe,e):t===`mathml`?O.createElementNS(Se,e):n?O.createElement(e,{is:n}):O.createElement(e);return e===`select`&&r&&r.multiple!=null&&i.setAttribute(`multiple`,r.multiple),i},createText:e=>O.createTextNode(e),createComment:e=>O.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>O.querySelector(e),setScopeId(e,t){e.setAttribute(t,``)},insertStaticContent(e,t,n,r,i,a){let o=n?n.previousSibling:t.lastChild;if(i&&(i===a||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===a||!(i=i.nextSibling)););else{Ce.innerHTML=be(r===`svg`?`<svg>${e}</svg>`:r===`mathml`?`<math>${e}</math>`:e);let i=Ce.content;if(r===`svg`||r===`mathml`){let e=i.firstChild;for(;e.firstChild;)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Te=Symbol(`_vtc`);function Ee(e,t,n){let r=e[Te];r&&(t=(t?[t,...r]:[...r]).join(` `)),t==null?e.removeAttribute(`class`):n?e.setAttribute(`class`,t):e.className=t}var De=Symbol(`_vod`),Oe=Symbol(`_vsh`),ke={name:`show`,beforeMount(e,{value:t},{transition:n}){e[De]=e.style.display===`none`?``:e.style.display,n&&t?n.beforeEnter(e):Ae(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!=!n&&(r?t?(r.beforeEnter(e),Ae(e,!0),r.enter(e)):r.leave(e,()=>{Ae(e,!1)}):Ae(e,t))},beforeUnmount(e,{value:t}){Ae(e,t)}};function Ae(e,t){e.style.display=t?e[De]:`none`,e[Oe]=!t}var je=Symbol(``),Me=/(?:^|;)\s*display\s*:/;function Ne(e,t,n){let r=e.style,i=_(n),a=!1;if(n&&!i){if(t)if(_(t))for(let e of t.split(`;`)){let t=e.slice(0,e.indexOf(`:`)).trim();n[t]??Fe(r,t,``)}else for(let e in t)n[e]??Fe(r,e,``);for(let i in n){i===`display`&&(a=!0);let o=n[i];o==null?Fe(r,i,``):ze(e,i,!_(t)&&t?t[i]:void 0,o)||Fe(r,i,o)}}else if(i){if(t!==n){let e=r[je];e&&(n+=`;`+e),r.cssText=n,a=Me.test(n)}}else t&&e.removeAttribute(`style`);De in e&&(e[De]=a?r.display:``,e[Oe]&&(r.display=`none`))}var Pe=/\s*!important$/;function Fe(e,t,n){if(m(n))n.forEach(n=>Fe(e,t,n));else if(n??=``,t.startsWith(`--`))e.setProperty(t,n);else{let r=Re(e,t);Pe.test(n)?e.setProperty(i(r),n.replace(Pe,``),`important`):e[r]=n}}var Ie=[`Webkit`,`Moz`,`ms`],Le={};function Re(e,t){let n=Le[t];if(n)return n;let r=d(t);if(r!==`filter`&&r in e)return Le[t]=r;r=f(r);for(let n=0;n<Ie.length;n++){let i=Ie[n]+r;if(i in e)return Le[t]=i}return t}function ze(e,t,n,r){return e.tagName===`TEXTAREA`&&(t===`width`||t===`height`)&&_(r)&&n===r}var Be=`http://www.w3.org/1999/xlink`;function Ve(e,t,n,r,i,o=h(t)){r&&t.startsWith(`xlink:`)?n==null?e.removeAttributeNS(Be,t.slice(6,t.length)):e.setAttributeNS(Be,t,n):n==null||o&&!s(n)?e.removeAttribute(t):e.setAttribute(t,o?``:a(n)?String(n):n)}function He(e,t,n,r,i){if(t===`innerHTML`||t===`textContent`){n!=null&&(e[t]=t===`innerHTML`?be(n):n);return}let a=e.tagName;if(t===`value`&&a!==`PROGRESS`&&!a.includes(`-`)){let r=a===`OPTION`?e.getAttribute(`value`)||``:e.value,i=n==null?e.type===`checkbox`?`on`:``:String(n);(r!==i||!(`_value`in e))&&(e.value=i),n??e.removeAttribute(t),e._value=n;return}let o=!1;if(n===``||n==null){let r=typeof e[t];r===`boolean`?n=s(n):n==null&&r===`string`?(n=``,o=!0):r===`number`&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(i||t)}function k(e,t,n,r){e.addEventListener(t,n,r)}function Ue(e,t,n,r){e.removeEventListener(t,n,r)}var We=Symbol(`_vei`);function Ge(e,t,n,r,i=null){let a=e[We]||(e[We]={}),o=a[t];if(r&&o)o.value=r;else{let[n,s]=Je(t);r?k(e,n,a[t]=Qe(r,i),s):o&&(Ue(e,n,o,s),a[t]=void 0)}}var Ke=/(Once|Passive|Capture)$/,qe=/^on:?(?:Once|Passive|Capture)$/;function Je(e){let t,n;for(;(n=e.match(Ke))&&!qe.test(e);)t||={},e=e.slice(0,e.length-n[1].length),t[n[1].toLowerCase()]=!0;return[e[2]===`:`?e.slice(3):i(e.slice(2)),t]}var Ye=0,Xe=Promise.resolve(),Ze=()=>Ye||=(Xe.then(()=>Ye=0),Date.now());function Qe(e,t){let n=e=>{if(!e._vts)e._vts=Date.now();else if(e._vts<=n.attached)return;let r=n.value;if(m(r)){let n=e.stopImmediatePropagation;e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0};let i=r.slice(),a=[e];for(let n=0;n<i.length&&!e._stopped;n++){let e=i[n];e&&y(e,t,5,a)}}else y(r,t,5,[e])};return n.value=e,n.attached=Ze(),n}var $e=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,et=(e,t,r,i,a,o)=>{let s=a===`svg`;t===`class`?Ee(e,i,s):t===`style`?Ne(e,r,i):g(t)?n(t)||Ge(e,t,r,i,o):(t[0]===`.`?(t=t.slice(1),!0):t[0]===`^`?(t=t.slice(1),!1):tt(e,t,i,s))?(He(e,t,i),!e.tagName.includes(`-`)&&(t===`value`||t===`checked`||t===`selected`)&&Ve(e,t,i,s,o,t!==`value`)):e._isVueCE&&(nt(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!_(i)))?He(e,d(t),i,o,t):(t===`true-value`?e._trueValue=i:t===`false-value`&&(e._falseValue=i),Ve(e,t,i,s))};function tt(e,t,n,r){if(r)return!!(t===`innerHTML`||t===`textContent`||t in e&&$e(t)&&oe(n));if(t===`spellcheck`||t===`draggable`||t===`translate`||t===`autocorrect`||t===`sandbox`&&e.tagName===`IFRAME`||t===`form`||t===`list`&&e.tagName===`INPUT`||t===`type`&&e.tagName===`TEXTAREA`)return!1;if(t===`width`||t===`height`){let t=e.tagName;if(t===`IMG`||t===`VIDEO`||t===`CANVAS`||t===`SOURCE`)return!1}return $e(t)&&_(n)?!1:t in e}function nt(e,t){let n=e._def.props;if(!n)return!1;let r=d(t);return Array.isArray(n)?n.some(e=>d(e)===r):Object.keys(n).some(e=>d(e)===r)}var A=e=>{let t=e.props[`onUpdate:modelValue`]||!1;return m(t)?e=>u(t,e):t};function rt(e){e.target.composing=!0}function it(e){let t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event(`input`)))}var j=Symbol(`_assign`);function at(e,t,n){return t&&(e=e.trim()),n&&(e=c(e)),e}var ot={created(e,{modifiers:{lazy:t,trim:n,number:r}},i){e[j]=A(i);let a=r||i.props&&i.props.type===`number`;k(e,t?`change`:`input`,t=>{t.target.composing||e[j](at(e.value,n,a))}),(n||a)&&k(e,`change`,()=>{e.value=at(e.value,n,a)}),t||(k(e,`compositionstart`,rt),k(e,`compositionend`,it),k(e,`change`,it))},mounted(e,{value:t}){e.value=t??``},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:r,trim:i,number:a}},o){if(e[j]=A(o),e.composing)return;let s=(a||e.type===`number`)&&!/^0\d/.test(e.value)?c(e.value):e.value,l=t??``;if(s===l)return;let u=e.getRootNode();(u instanceof Document||u instanceof ShadowRoot)&&u.activeElement===e&&e.type!==`range`&&(r&&t===n||i&&e.value.trim()===l)||(e.value=l)}},st={deep:!0,created(e,t,n){e[j]=A(n),k(e,`change`,()=>{let t=e._modelValue,n=M(e),r=e.checked,i=e[j];if(m(t)){let e=te(t,n),a=e!==-1;if(r&&!a)i(t.concat(n));else if(!r&&a){let n=[...t];n.splice(e,1),i(n)}}else if(o(t)){let e=new Set(t);r?e.add(n):e.delete(n),i(e)}else i(ft(e,r))})},mounted:ct,beforeUpdate(e,t,n){e[j]=A(n),ct(e,t,n)}};function ct(e,{value:t,oldValue:n},r){e._modelValue=t;let i;if(m(t))i=te(t,r.props.value)>-1;else if(o(t))i=t.has(r.props.value);else{if(t===n)return;i=l(t,ft(e,!0))}e.checked!==i&&(e.checked=i)}var lt={created(e,{value:t},n){e.checked=l(t,n.props.value),e[j]=A(n),k(e,`change`,()=>{e[j](M(e))})},beforeUpdate(e,{value:t,oldValue:n},r){e[j]=A(r),t!==n&&(e.checked=l(t,r.props.value))}},ut={deep:!0,created(e,{value:t,modifiers:{number:n}},r){let i=o(t);k(e,`change`,()=>{let t=Array.prototype.filter.call(e.options,e=>e.selected).map(e=>n?c(M(e)):M(e));e[j](e.multiple?i?new Set(t):t:t[0]),e._assigning=!0,ie(()=>{e._assigning=!1})}),e[j]=A(r)},mounted(e,{value:t}){dt(e,t)},beforeUpdate(e,t,n){e[j]=A(n)},updated(e,{value:t}){e._assigning||dt(e,t)}};function dt(e,t){let n=e.multiple,r=m(t);if(!(n&&!r&&!o(t))){for(let i=0,a=e.options.length;i<a;i++){let a=e.options[i],o=M(a);if(n)if(r){let e=typeof o;e===`string`||e===`number`?a.selected=t.some(e=>String(e)===String(o)):a.selected=te(t,o)>-1}else a.selected=t.has(o);else if(l(M(a),t)){e.selectedIndex!==i&&(e.selectedIndex=i);return}}!n&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function M(e){return`_value`in e?e._value:e.value}function ft(e,t){let n=t?`_trueValue`:`_falseValue`;return n in e?e[n]:t}var pt={created(e,t,n){ht(e,t,n,null,`created`)},mounted(e,t,n){ht(e,t,n,null,`mounted`)},beforeUpdate(e,t,n,r){ht(e,t,n,r,`beforeUpdate`)},updated(e,t,n,r){ht(e,t,n,r,`updated`)}};function mt(e,t){switch(e){case`SELECT`:return ut;case`TEXTAREA`:return ot;default:switch(t){case`checkbox`:return st;case`radio`:return lt;default:return ot}}}function ht(e,t,n,r,i){let a=mt(e.tagName,n.props&&n.props.type)[i];a&&a(e,t,n,r)}var gt=[`ctrl`,`shift`,`alt`,`meta`],_t={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>`button`in e&&e.button!==0,middle:e=>`button`in e&&e.button!==1,right:e=>`button`in e&&e.button!==2,exact:(e,t)=>gt.some(n=>e[`${n}Key`]&&!t.includes(n))},vt=(e,t)=>{if(!e)return e;let n=e._withMods||={},r=t.join(`.`);return n[r]||(n[r]=((n,...r)=>{for(let e=0;e<t.length;e++){let r=_t[t[e]];if(r&&r(n,t))return}return e(n,...r)}))},yt={esc:`escape`,space:` `,up:`arrow-up`,left:`arrow-left`,right:`arrow-right`,down:`arrow-down`,delete:`backspace`},bt=(e,t)=>{let n=e._withKeys||={},r=t.join(`.`);return n[r]||(n[r]=(n=>{if(!(`key`in n))return;let r=i(n.key);if(t.some(e=>e===r||yt[e]===r))return e(n)}))},xt=p({patchProp:et},we),St;function Ct(){return St||=ee(xt)}var wt=((...e)=>{Ct().render(...e)}),Tt=((...e)=>{let t=Ct().createApp(...e),{mount:n}=t;return t.mount=e=>{let r=Dt(e);if(!r)return;let i=t._component;!oe(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent=``);let a=n(r,!1,Et(r));return r instanceof Element&&(r.removeAttribute(`v-cloak`),r.setAttribute(`data-v-app`,``)),a},t});function Et(e){if(e instanceof SVGElement)return`svg`;if(typeof MathMLElement==`function`&&e instanceof MathMLElement)return`mathml`}function Dt(e){return _(e)?document.querySelector(e):e}var Ot=e=>e?``:void 0,kt=e=>e!==!1;function At(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function jt(e){if(Array.isArray(e))return e}function Mt(e){if(Array.isArray(e))return At(e)}function Nt(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)}function Pt(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,`value`in r&&(r.writable=!0),Object.defineProperty(e,Wt(r.key),r)}}function Ft(e,t,n){return t&&Pt(e.prototype,t),n&&Pt(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function It(e,t){var n=typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(!n){if(Array.isArray(e)||(n=Kt(e))||t&&e&&typeof e.length==`number`){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a,o=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){s=!0,a=e},f:function(){try{o||n.return==null||n.return()}finally{if(s)throw a}}}}function N(e,t,n){return(t=Wt(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Lt(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function Rt(e,t){var n=e==null?null:typeof Symbol<`u`&&e[Symbol.iterator]||e[`@@iterator`];if(n!=null){var r,i,a,o,s=[],c=!0,l=!1;try{if(a=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(e){l=!0,i=e}finally{try{if(!c&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(l)throw i}}return s}}function zt(){throw TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Bt(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Vt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?Vt(Object(n),!0).forEach(function(t){N(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Vt(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function Ht(e,t){return jt(e)||Rt(e,t)||Kt(e,t)||zt()}function F(e){return Mt(e)||Lt(e)||Kt(e)||Bt()}function Ut(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function Wt(e){var t=Ut(e,`string`);return typeof t==`symbol`?t:t+``}function Gt(e){"@babel/helpers - typeof";return Gt=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},Gt(e)}function Kt(e,t){if(e){if(typeof e==`string`)return At(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?At(e,t):void 0}}var qt=function(){},Jt={},Yt={},Xt=null,Zt={mark:qt,measure:qt};try{typeof window<`u`&&(Jt=window),typeof document<`u`&&(Yt=document),typeof MutationObserver<`u`&&(Xt=MutationObserver),typeof performance<`u`&&(Zt=performance)}catch{}var Qt=(Jt.navigator||{}).userAgent,$t=Qt===void 0?``:Qt,I=Jt,L=Yt,en=Xt,tn=Zt;I.document;var R=!!L.documentElement&&!!L.head&&typeof L.addEventListener==`function`&&typeof L.createElement==`function`,nn=~$t.indexOf(`MSIE`)||~$t.indexOf(`Trident/`),rn,an=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt|sldr|slpdr|pr|ms|vs)?[\-\ ]/,on=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Slab Duo|Slab Press Duo|Pixel|Mosaic|Vellum|Whiteboard)?.*/i,sn={classic:{fa:`solid`,fas:`solid`,"fa-solid":`solid`,far:`regular`,"fa-regular":`regular`,fal:`light`,"fa-light":`light`,fat:`thin`,"fa-thin":`thin`,fab:`brands`,"fa-brands":`brands`},duotone:{fa:`solid`,fad:`solid`,"fa-solid":`solid`,"fa-duotone":`solid`,fadr:`regular`,"fa-regular":`regular`,fadl:`light`,"fa-light":`light`,fadt:`thin`,"fa-thin":`thin`},sharp:{fa:`solid`,fass:`solid`,"fa-solid":`solid`,fasr:`regular`,"fa-regular":`regular`,fasl:`light`,"fa-light":`light`,fast:`thin`,"fa-thin":`thin`},"sharp-duotone":{fa:`solid`,fasds:`solid`,"fa-solid":`solid`,fasdr:`regular`,"fa-regular":`regular`,fasdl:`light`,"fa-light":`light`,fasdt:`thin`,"fa-thin":`thin`},slab:{"fa-regular":`regular`,faslr:`regular`},"slab-press":{"fa-regular":`regular`,faslpr:`regular`},"slab-duo":{"fa-regular":`regular`,fasldr:`regular`},"slab-press-duo":{"fa-regular":`regular`,faslpdr:`regular`},thumbprint:{"fa-light":`light`,fatl:`light`},vellum:{"fa-solid":`solid`,favs:`solid`},pixel:{"fa-regular":`regular`,fapr:`regular`},mosaic:{"fa-solid":`solid`,fams:`solid`},whiteboard:{"fa-semibold":`semibold`,fawsb:`semibold`},notdog:{"fa-solid":`solid`,fans:`solid`},"notdog-duo":{"fa-solid":`solid`,fands:`solid`},etch:{"fa-solid":`solid`,faes:`solid`},graphite:{"fa-thin":`thin`,fagt:`thin`},jelly:{"fa-regular":`regular`,fajr:`regular`},"jelly-fill":{"fa-regular":`regular`,fajfr:`regular`},"jelly-duo":{"fa-regular":`regular`,fajdr:`regular`},chisel:{"fa-regular":`regular`,facr:`regular`},utility:{"fa-semibold":`semibold`,fausb:`semibold`},"utility-duo":{"fa-semibold":`semibold`,faudsb:`semibold`},"utility-fill":{"fa-semibold":`semibold`,faufsb:`semibold`}},cn={GROUP:`duotone-group`,SWAP_OPACITY:`swap-opacity`,PRIMARY:`primary`,SECONDARY:`secondary`},ln=[`fa-classic`,`fa-duotone`,`fa-sharp`,`fa-sharp-duotone`,`fa-thumbprint`,`fa-whiteboard`,`fa-notdog`,`fa-notdog-duo`,`fa-chisel`,`fa-etch`,`fa-graphite`,`fa-jelly`,`fa-jelly-fill`,`fa-jelly-duo`,`fa-slab`,`fa-slab-press`,`fa-slab-press-duo`,`fa-slab-duo`,`fa-mosaic`,`fa-pixel`,`fa-vellum`,`fa-utility`,`fa-utility-duo`,`fa-utility-fill`],z=`classic`,un=`duotone`,dn=`sharp`,fn=`sharp-duotone`,pn=`chisel`,mn=`etch`,hn=`graphite`,gn=`jelly`,_n=`jelly-duo`,vn=`jelly-fill`,yn=`mosaic`,bn=`notdog`,xn=`notdog-duo`,Sn=`pixel`,Cn=`slab`,wn=`slab-duo`,Tn=`slab-press`,En=`slab-press-duo`,Dn=`thumbprint`,On=`utility`,kn=`utility-duo`,An=`utility-fill`,jn=`vellum`,Mn=`whiteboard`,Nn=`Classic`,Pn=`Duotone`,Fn=`Sharp`,In=`Sharp Duotone`,Ln=`Chisel`,Rn=`Etch`,zn=`Graphite`,Bn=`Jelly`,Vn=`Jelly Duo`,Hn=`Jelly Fill`,Un=`Mosaic`,Wn=`Notdog`,Gn=`Notdog Duo`,Kn=`Pixel`,qn=`Slab`,Jn=`Slab Duo`,Yn=`Slab Press`,Xn=`Slab Press Duo`,Zn=`Thumbprint`,Qn=`Utility`,$n=`Utility Duo`,er=`Utility Fill`,tr=`Vellum`,nr=`Whiteboard`,rr=[z,un,dn,fn,pn,mn,hn,gn,_n,vn,yn,bn,xn,Sn,Cn,wn,Tn,En,Dn,On,kn,An,jn,Mn];rn={},N(N(N(N(N(N(N(N(N(N(rn,z,Nn),un,Pn),dn,Fn),fn,In),pn,Ln),mn,Rn),hn,zn),gn,Bn),_n,Vn),vn,Hn),N(N(N(N(N(N(N(N(N(N(rn,yn,Un),bn,Wn),xn,Gn),Sn,Kn),Cn,qn),wn,Jn),Tn,Yn),En,Xn),Dn,Zn),On,Qn),N(N(N(N(rn,kn,$n),An,er),jn,tr),Mn,nr);var ir={classic:{900:`fas`,400:`far`,normal:`far`,300:`fal`,100:`fat`},duotone:{900:`fad`,400:`fadr`,300:`fadl`,100:`fadt`},sharp:{900:`fass`,400:`fasr`,300:`fasl`,100:`fast`},"sharp-duotone":{900:`fasds`,400:`fasdr`,300:`fasdl`,100:`fasdt`},slab:{400:`faslr`},"slab-press":{400:`faslpr`},"slab-duo":{400:`fasldr`},"slab-press-duo":{400:`faslpdr`},vellum:{900:`favs`},mosaic:{900:`fams`},pixel:{400:`fapr`},whiteboard:{600:`fawsb`},thumbprint:{300:`fatl`},notdog:{900:`fans`},"notdog-duo":{900:`fands`},etch:{900:`faes`},graphite:{100:`fagt`},chisel:{400:`facr`},jelly:{400:`fajr`},"jelly-fill":{400:`fajfr`},"jelly-duo":{400:`fajdr`},utility:{600:`fausb`},"utility-duo":{600:`faudsb`},"utility-fill":{600:`faufsb`}},ar={"Font Awesome 7 Free":{900:`fas`,400:`far`},"Font Awesome 7 Pro":{900:`fas`,400:`far`,normal:`far`,300:`fal`,100:`fat`},"Font Awesome 7 Brands":{400:`fab`,normal:`fab`},"Font Awesome 7 Duotone":{900:`fad`,400:`fadr`,normal:`fadr`,300:`fadl`,100:`fadt`},"Font Awesome 7 Sharp":{900:`fass`,400:`fasr`,normal:`fasr`,300:`fasl`,100:`fast`},"Font Awesome 7 Sharp Duotone":{900:`fasds`,400:`fasdr`,normal:`fasdr`,300:`fasdl`,100:`fasdt`},"Font Awesome 7 Jelly":{400:`fajr`,normal:`fajr`},"Font Awesome 7 Jelly Fill":{400:`fajfr`,normal:`fajfr`},"Font Awesome 7 Jelly Duo":{400:`fajdr`,normal:`fajdr`},"Font Awesome 7 Slab":{400:`faslr`,normal:`faslr`},"Font Awesome 7 Slab Press":{400:`faslpr`,normal:`faslpr`},"Font Awesome 7 Slab Duo":{400:`fasldr`,normal:`fasldr`},"Font Awesome 7 Slab Press Duo":{400:`faslpdr`,normal:`faslpdr`},"Font Awesome 7 Pixel":{400:`fapr`,normal:`fapr`},"Font Awesome 7 Mosaic":{900:`fams`,normal:`fams`},"Font Awesome 7 Vellum":{900:`favs`,normal:`favs`},"Font Awesome 7 Thumbprint":{300:`fatl`,normal:`fatl`},"Font Awesome 7 Notdog":{900:`fans`,normal:`fans`},"Font Awesome 7 Notdog Duo":{900:`fands`,normal:`fands`},"Font Awesome 7 Etch":{900:`faes`,normal:`faes`},"Font Awesome 7 Graphite":{100:`fagt`,normal:`fagt`},"Font Awesome 7 Chisel":{400:`facr`,normal:`facr`},"Font Awesome 7 Whiteboard":{600:`fawsb`,normal:`fawsb`},"Font Awesome 7 Utility":{600:`fausb`,normal:`fausb`},"Font Awesome 7 Utility Duo":{600:`faudsb`,normal:`faudsb`},"Font Awesome 7 Utility Fill":{600:`faufsb`,normal:`faufsb`}},or=new Map([[`classic`,{defaultShortPrefixId:`fas`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`,`brands`],futureStyleIds:[],defaultFontWeight:900}],[`duotone`,{defaultShortPrefixId:`fad`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`sharp`,{defaultShortPrefixId:`fass`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`sharp-duotone`,{defaultShortPrefixId:`fasds`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`chisel`,{defaultShortPrefixId:`facr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`etch`,{defaultShortPrefixId:`faes`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`graphite`,{defaultShortPrefixId:`fagt`,defaultStyleId:`thin`,styleIds:[`thin`],futureStyleIds:[],defaultFontWeight:100}],[`jelly`,{defaultShortPrefixId:`fajr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`jelly-duo`,{defaultShortPrefixId:`fajdr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`jelly-fill`,{defaultShortPrefixId:`fajfr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`mosaic`,{defaultShortPrefixId:`fams`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`notdog`,{defaultShortPrefixId:`fans`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`notdog-duo`,{defaultShortPrefixId:`fands`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`pixel`,{defaultShortPrefixId:`fapr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab`,{defaultShortPrefixId:`faslr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab-duo`,{defaultShortPrefixId:`fasldr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab-press`,{defaultShortPrefixId:`faslpr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`slab-press-duo`,{defaultShortPrefixId:`faslpdr`,defaultStyleId:`regular`,styleIds:[`regular`],futureStyleIds:[],defaultFontWeight:400}],[`thumbprint`,{defaultShortPrefixId:`fatl`,defaultStyleId:`light`,styleIds:[`light`],futureStyleIds:[],defaultFontWeight:300}],[`utility`,{defaultShortPrefixId:`fausb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`utility-duo`,{defaultShortPrefixId:`faudsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`utility-fill`,{defaultShortPrefixId:`faufsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}],[`vellum`,{defaultShortPrefixId:`favs`,defaultStyleId:`solid`,styleIds:[`solid`],futureStyleIds:[],defaultFontWeight:900}],[`whiteboard`,{defaultShortPrefixId:`fawsb`,defaultStyleId:`semibold`,styleIds:[`semibold`],futureStyleIds:[],defaultFontWeight:600}]]),sr={chisel:{regular:`facr`},classic:{brands:`fab`,light:`fal`,regular:`far`,solid:`fas`,thin:`fat`},duotone:{light:`fadl`,regular:`fadr`,solid:`fad`,thin:`fadt`},etch:{solid:`faes`},graphite:{thin:`fagt`},jelly:{regular:`fajr`},"jelly-duo":{regular:`fajdr`},"jelly-fill":{regular:`fajfr`},mosaic:{solid:`fams`},notdog:{solid:`fans`},"notdog-duo":{solid:`fands`},pixel:{regular:`fapr`},sharp:{light:`fasl`,regular:`fasr`,solid:`fass`,thin:`fast`},"sharp-duotone":{light:`fasdl`,regular:`fasdr`,solid:`fasds`,thin:`fasdt`},slab:{regular:`faslr`},"slab-duo":{regular:`fasldr`},"slab-press":{regular:`faslpr`},"slab-press-duo":{regular:`faslpdr`},thumbprint:{light:`fatl`},utility:{semibold:`fausb`},"utility-duo":{semibold:`faudsb`},"utility-fill":{semibold:`faufsb`},vellum:{solid:`favs`},whiteboard:{semibold:`fawsb`}},cr=[`fak`,`fa-kit`,`fakd`,`fa-kit-duotone`],lr={kit:{fak:`kit`,"fa-kit":`kit`},"kit-duotone":{fakd:`kit-duotone`,"fa-kit-duotone":`kit-duotone`}},ur=[`kit`];N(N({},`kit`,`Kit`),`kit-duotone`,`Kit Duotone`);var dr={kit:{"fa-kit":`fak`},"kit-duotone":{"fa-kit-duotone":`fakd`}},fr={"Font Awesome Kit":{400:`fak`,normal:`fak`},"Font Awesome Kit Duotone":{400:`fakd`,normal:`fakd`}},pr={kit:{fak:`fa-kit`},"kit-duotone":{fakd:`fa-kit-duotone`}},mr={kit:{kit:`fak`},"kit-duotone":{"kit-duotone":`fakd`}},hr,gr={GROUP:`duotone-group`,SWAP_OPACITY:`swap-opacity`,PRIMARY:`primary`,SECONDARY:`secondary`},_r=[`fa-classic`,`fa-duotone`,`fa-sharp`,`fa-sharp-duotone`,`fa-thumbprint`,`fa-whiteboard`,`fa-notdog`,`fa-notdog-duo`,`fa-chisel`,`fa-etch`,`fa-graphite`,`fa-jelly`,`fa-jelly-fill`,`fa-jelly-duo`,`fa-slab`,`fa-slab-press`,`fa-slab-press-duo`,`fa-slab-duo`,`fa-mosaic`,`fa-pixel`,`fa-vellum`,`fa-utility`,`fa-utility-duo`,`fa-utility-fill`];hr={},N(N(N(N(N(N(N(N(N(N(hr,`classic`,`Classic`),`duotone`,`Duotone`),`sharp`,`Sharp`),`sharp-duotone`,`Sharp Duotone`),`chisel`,`Chisel`),`etch`,`Etch`),`graphite`,`Graphite`),`jelly`,`Jelly`),`jelly-duo`,`Jelly Duo`),`jelly-fill`,`Jelly Fill`),N(N(N(N(N(N(N(N(N(N(hr,`mosaic`,`Mosaic`),`notdog`,`Notdog`),`notdog-duo`,`Notdog Duo`),`pixel`,`Pixel`),`slab`,`Slab`),`slab-duo`,`Slab Duo`),`slab-press`,`Slab Press`),`slab-press-duo`,`Slab Press Duo`),`thumbprint`,`Thumbprint`),`utility`,`Utility`),N(N(N(N(hr,`utility-duo`,`Utility Duo`),`utility-fill`,`Utility Fill`),`vellum`,`Vellum`),`whiteboard`,`Whiteboard`),N(N({},`kit`,`Kit`),`kit-duotone`,`Kit Duotone`);var vr={classic:{"fa-brands":`fab`,"fa-duotone":`fad`,"fa-light":`fal`,"fa-regular":`far`,"fa-solid":`fas`,"fa-thin":`fat`},duotone:{"fa-regular":`fadr`,"fa-light":`fadl`,"fa-thin":`fadt`},sharp:{"fa-solid":`fass`,"fa-regular":`fasr`,"fa-light":`fasl`,"fa-thin":`fast`},"sharp-duotone":{"fa-solid":`fasds`,"fa-regular":`fasdr`,"fa-light":`fasdl`,"fa-thin":`fasdt`},slab:{"fa-regular":`faslr`},"slab-press":{"fa-regular":`faslpr`},"slab-duo":{"fa-regular":`fasldr`},"slab-press-duo":{"fa-regular":`faslpdr`},pixel:{"fa-regular":`fapr`},mosaic:{"fa-solid":`fams`},vellum:{"fa-solid":`favs`},whiteboard:{"fa-semibold":`fawsb`},thumbprint:{"fa-light":`fatl`},notdog:{"fa-solid":`fans`},"notdog-duo":{"fa-solid":`fands`},etch:{"fa-solid":`faes`},graphite:{"fa-thin":`fagt`},jelly:{"fa-regular":`fajr`},"jelly-fill":{"fa-regular":`fajfr`},"jelly-duo":{"fa-regular":`fajdr`},chisel:{"fa-regular":`facr`},utility:{"fa-semibold":`fausb`},"utility-duo":{"fa-semibold":`faudsb`},"utility-fill":{"fa-semibold":`faufsb`}},yr={classic:[`fas`,`far`,`fal`,`fat`,`fad`],duotone:[`fadr`,`fadl`,`fadt`],sharp:[`fass`,`fasr`,`fasl`,`fast`],"sharp-duotone":[`fasds`,`fasdr`,`fasdl`,`fasdt`],slab:[`faslr`],"slab-press":[`faslpr`],"slab-duo":[`fasldr`],"slab-press-duo":[`faslpdr`],pixel:[`fapr`],mosaic:[`fams`],vellum:[`favs`],whiteboard:[`fawsb`],thumbprint:[`fatl`],notdog:[`fans`],"notdog-duo":[`fands`],etch:[`faes`],graphite:[`fagt`],jelly:[`fajr`],"jelly-fill":[`fajfr`],"jelly-duo":[`fajdr`],chisel:[`facr`],utility:[`fausb`],"utility-duo":[`faudsb`],"utility-fill":[`faufsb`]},br={classic:{fab:`fa-brands`,fad:`fa-duotone`,fal:`fa-light`,far:`fa-regular`,fas:`fa-solid`,fat:`fa-thin`},duotone:{fadr:`fa-regular`,fadl:`fa-light`,fadt:`fa-thin`},sharp:{fass:`fa-solid`,fasr:`fa-regular`,fasl:`fa-light`,fast:`fa-thin`},"sharp-duotone":{fasds:`fa-solid`,fasdr:`fa-regular`,fasdl:`fa-light`,fasdt:`fa-thin`},slab:{faslr:`fa-regular`},"slab-press":{faslpr:`fa-regular`},"slab-duo":{fasldr:`fa-regular`},"slab-press-duo":{faslpdr:`fa-regular`},pixel:{fapr:`fa-regular`},mosaic:{fams:`fa-solid`},vellum:{favs:`fa-solid`},whiteboard:{fawsb:`fa-semibold`},thumbprint:{fatl:`fa-light`},notdog:{fans:`fa-solid`},"notdog-duo":{fands:`fa-solid`},etch:{faes:`fa-solid`},graphite:{fagt:`fa-thin`},jelly:{fajr:`fa-regular`},"jelly-fill":{fajfr:`fa-regular`},"jelly-duo":{fajdr:`fa-regular`},chisel:{facr:`fa-regular`},utility:{fausb:`fa-semibold`},"utility-duo":{faudsb:`fa-semibold`},"utility-fill":{faufsb:`fa-semibold`}},xr=`fa.fas.far.fal.fat.fad.fadr.fadl.fadt.fab.fass.fasr.fasl.fast.fasds.fasdr.fasdl.fasdt.faslr.faslpr.fasldr.faslpdr.fapr.fams.favs.fawsb.fatl.fans.fands.faes.fagt.fajr.fajfr.fajdr.facr.fausb.faudsb.faufsb`.split(`.`).concat(_r,[`fa-solid`,`fa-regular`,`fa-light`,`fa-thin`,`fa-duotone`,`fa-brands`,`fa-semibold`]),Sr=[`solid`,`regular`,`light`,`thin`,`duotone`,`brands`,`semibold`],Cr=[1,2,3,4,5,6,7,8,9,10],wr=Cr.concat([11,12,13,14,15,16,17,18,19,20]),Tr=[].concat(F(Object.keys(yr)),Sr,[`aw`,`fw`,`pull-left`,`pull-right`],[`2xs`,`xs`,`sm`,`lg`,`xl`,`2xl`,`beat`,`beat-fade`,`border`,`bounce`,`buzz`,`canvas-square`,`canvas-roomy`,`fade`,`flip-360`,`flip-both`,`flip-horizontal`,`flip-vertical`,`flip`,`float`,`inverse`,`jello`,`layers`,`layers-bottom-left`,`layers-bottom-right`,`layers-counter`,`layers-text`,`layers-top-left`,`layers-top-right`,`li`,`pull-end`,`pull-start`,`pulse`,`rotate-180`,`rotate-270`,`rotate-90`,`rotate-by`,`shake`,`spin-pulse`,`spin-reverse`,`spin`,`spin-snap`,`spin-snap-4`,`spin-snap-8`,`stack-1x`,`stack-2x`,`stack`,`swing`,`ul`,`wag`,`width-auto`,`width-fixed`,gr.GROUP,gr.SWAP_OPACITY,gr.PRIMARY,gr.SECONDARY],Cr.map(function(e){return`${e}x`}),wr.map(function(e){return`w-${e}`})),Er={"Font Awesome 5 Free":{900:`fas`,400:`far`},"Font Awesome 5 Pro":{900:`fas`,400:`far`,normal:`far`,300:`fal`},"Font Awesome 5 Brands":{400:`fab`,normal:`fab`},"Font Awesome 5 Duotone":{900:`fad`}},B=`___FONT_AWESOME___`,Dr=16,Or=`fa`,kr=`svg-inline--fa`,V=`data-fa-i2svg`,Ar=`data-fa-pseudo-element`,jr=`data-fa-pseudo-element-pending`,Mr=`data-prefix`,Nr=`data-icon`,Pr=`fontawesome-i2svg`,Fr=`async`,Ir=[`HTML`,`HEAD`,`STYLE`,`SCRIPT`],Lr=[`::before`,`::after`,`:before`,`:after`],Rr=function(){try{return!0}catch{return!1}}();function zr(e){return new Proxy(e,{get:function(e,t){return t in e?e[t]:e[z]}})}var Br=P({},sn);Br[z]=P(P(P(P({},{"fa-duotone":`duotone`}),sn[z]),lr.kit),lr[`kit-duotone`]);var Vr=zr(Br),Hr=P({},sr);Hr[z]=P(P(P(P({},{duotone:`fad`}),Hr[z]),mr.kit),mr[`kit-duotone`]);var Ur=zr(Hr),Wr=P({},br);Wr[z]=P(P({},Wr[z]),pr.kit);var Gr=zr(Wr),Kr=P({},vr);Kr[z]=P(P({},Kr[z]),dr.kit),zr(Kr);var qr=an,Jr=`fa-layers-text`,Yr=on;zr(P({},ir));var Xr=[`class`,`data-prefix`,`data-icon`,`data-fa-transform`,`data-fa-mask`],Zr=cn,Qr=[].concat(F(ur),F(Tr)),$r=I.FontAwesomeConfig||{};function ei(e){var t=L.querySelector(`script[`+e+`]`);if(t)return t.getAttribute(e)}function ti(e){return e===``?!0:e===`false`?!1:e===`true`||e}L&&typeof L.querySelector==`function`&&[[`data-family-prefix`,`familyPrefix`],[`data-css-prefix`,`cssPrefix`],[`data-family-default`,`familyDefault`],[`data-style-default`,`styleDefault`],[`data-replacement-class`,`replacementClass`],[`data-auto-replace-svg`,`autoReplaceSvg`],[`data-auto-add-css`,`autoAddCss`],[`data-search-pseudo-elements`,`searchPseudoElements`],[`data-search-pseudo-elements-warnings`,`searchPseudoElementsWarnings`],[`data-search-pseudo-elements-full-scan`,`searchPseudoElementsFullScan`],[`data-observe-mutations`,`observeMutations`],[`data-mutate-approach`,`mutateApproach`],[`data-keep-original-source`,`keepOriginalSource`],[`data-measure-performance`,`measurePerformance`],[`data-show-missing-icons`,`showMissingIcons`]].forEach(function(e){var t=Ht(e,2),n=t[0],r=t[1],i=ti(ei(n));i!=null&&($r[r]=i)});var ni={styleDefault:`solid`,familyDefault:z,cssPrefix:Or,replacementClass:kr,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:`async`,keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};$r.familyPrefix&&($r.cssPrefix=$r.familyPrefix);var ri=P(P({},ni),$r);ri.autoReplaceSvg||(ri.observeMutations=!1);var H={};Object.keys(ni).forEach(function(e){Object.defineProperty(H,e,{enumerable:!0,set:function(t){ri[e]=t,ii.forEach(function(e){return e(H)})},get:function(){return ri[e]}})}),Object.defineProperty(H,"familyPrefix",{enumerable:!0,set:function(e){ri.cssPrefix=e,ii.forEach(function(e){return e(H)})},get:function(){return ri.cssPrefix}}),I.FontAwesomeConfig=H;var ii=[];function ai(e){return ii.push(e),function(){ii.splice(ii.indexOf(e),1)}}var U=Dr,W={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function oi(e){if(!(!e||!R)){var t=L.createElement(`style`);t.setAttribute(`type`,`text/css`),t.innerHTML=e;for(var n=L.head.childNodes,r=null,i=n.length-1;i>-1;i--){var a=n[i],o=(a.tagName||``).toUpperCase();[`STYLE`,`LINK`].indexOf(o)>-1&&(r=a)}return L.head.insertBefore(t,r),e}}var si=`0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`;function ci(){for(var e=12,t=``;e-->0;)t+=si[Math.random()*62|0];return t}function li(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function ui(e){return e.classList?li(e.classList):(e.getAttribute(`class`)||``).split(` `).filter(function(e){return e})}function di(e){return`${e}`.replace(/&/g,`&amp;`).replace(/"/g,`&quot;`).replace(/'/g,`&#39;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`)}function fi(e){return Object.keys(e||{}).reduce(function(t,n){return t+`${n}="${di(e[n])}" `},``).trim()}function pi(e){return Object.keys(e||{}).reduce(function(t,n){return t+`${n}: ${e[n].trim()};`},``)}function mi(e){return e.size!==W.size||e.x!==W.x||e.y!==W.y||e.rotate!==W.rotate||e.flipX||e.flipY}function hi(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth;return{outer:{transform:`translate(${n/2} 256)`},inner:{transform:`${`translate(${t.x*32}, ${t.y*32}) `} ${`scale(${t.size/16*(t.flipX?-1:1)}, ${t.size/16*(t.flipY?-1:1)}) `} ${`rotate(${t.rotate} 0 0)`}`},path:{transform:`translate(${r/2*-1} -256)`}}}function gi(e){var t=e.transform,n=e.width,r=n===void 0?Dr:n,i=e.height,a=i===void 0?Dr:i,o=e.startCentered,s=o!==void 0&&o,c=``;return s&&nn?c+=`translate(${t.x/U-r/2}em, ${t.y/U-a/2}em) `:s?c+=`translate(calc(-50% + ${t.x/U}em), calc(-50% + ${t.y/U}em)) `:c+=`translate(${t.x/U}em, ${t.y/U}em) `,c+=`scale(${t.size/U*(t.flipX?-1:1)}, ${t.size/U*(t.flipY?-1:1)}) `,c+=`rotate(${t.rotate}deg) `,c}var _i=`:root, :host {
  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';
  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';
  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';
  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';
  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';
  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';
  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';
  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';
  --fa-font-slab-duo-regular: normal 400 1em/1 'Font Awesome 7 Slab Duo';
  --fa-font-slab-press-duo-regular: normal 400 1em/1 'Font Awesome 7 Slab Press Duo';
  --fa-font-pixel-regular: normal 400 1em/1 'Font Awesome 7 Pixel';
  --fa-font-mosaic-solid: normal 900 1em/1 'Font Awesome 7 Mosaic';
  --fa-font-vellum-solid: normal 900 1em/1 'Font Awesome 7 Vellum';
  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';
  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';
  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';
  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';
  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';
  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';
  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';
  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';
  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';
  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';
  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';
  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';
  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
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
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
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
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
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
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
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
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-canvas-square {
  padding-block: 0.125em;
  margin-block-end: -0.125em;
}

.fa-canvas-roomy {
  padding-block: 0.25em;
  padding-inline: 0.125em;
  margin-block-end: -0.25em;
  box-sizing: content-box;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1.5s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-flip-360 {
  animation-name: fa-flip-360;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.75s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

.fa-spin-snap {
  animation-name: fa-spin-snap;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 3s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-snap-4 {
  animation-name: fa-spin-snap-4;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2.4s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-snap-8 {
  animation-name: fa-spin-snap-8;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 4s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-buzz {
  animation-name: fa-buzz;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.6s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-wag {
  animation-name: fa-wag;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.9s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
  transform-origin: bottom center;
}

.fa-float {
  animation-name: fa-float;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 3s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
  will-change: transform;
}

.fa-swing {
  animation-name: fa-swing;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1.2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
  transform-origin: top center;
}

.fa-jello {
  animation-name: fa-jello;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.9s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-flip-360,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse,
  .fa-buzz,
  .fa-float,
  .fa-jello,
  .fa-spin-snap,
  .fa-spin-snap-4,
  .fa-spin-snap-8,
  .fa-swing,
  .fa-wag {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(calc(1.25 * var(--fa-beat-scale, 1.25)));
  }
  45% {
    transform: scale(calc(1.22 * var(--fa-beat-scale, 1.22)));
  }
  65% {
    transform: scale(calc(1.25 * var(--fa-beat-scale, 1.25)));
  }
  90% {
    transform: scale(1);
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
    animation-timing-function: var(--fa-animation-timing);
  }
  14% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.06), var(--fa-bounce-start-scale-y, 0.94)) translateY(var(--fa-bounce-anticipation, 3px));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  32% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.94), var(--fa-bounce-jump-scale-y, 1.12)) translateY(calc(-1 * var(--fa-bounce-height, 0.5em)));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  52% {
    transform: scale(1, 1) translateY(calc(-1 * var(--fa-bounce-height, 0.5em) * 1.1));
    animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
  }
  70% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.06), var(--fa-bounce-land-scale-y, 0.92)) translateY(0);
    animation-timing-function: cubic-bezier(0.33, 0.33, 0.66, 1);
  }
  85% {
    transform: scale(0.98, 1.04) translateY(calc(-2px * var(--fa-bounce-rebound, 1)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  0% {
    opacity: 1;
    transform: scale(1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  40% {
    opacity: var(--fa-fade-opacity, 0.4);
    transform: scale(0.98);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes fa-beat-fade {
  0% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  25% {
    opacity: calc(var(--fa-beat-fade-opacity, 0.4) + 0.4);
    transform: scale(var(--fa-beat-fade-scale, 1.28));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  45% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.25));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  65% {
    opacity: calc(var(--fa-beat-fade-opacity, 0.4) + 0.4);
    transform: scale(var(--fa-beat-fade-scale, 1.28));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
}
@keyframes fa-flip {
  0% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  8% {
    transform: perspective(2em) scale(var(--fa-flip-anticipation-scale, 0.95)) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  35% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.6));
    animation-timing-function: linear;
  }
  65% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.5));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  92% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * var(--fa-flip-overshoot, 1.04)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -360deg));
  }
}
@keyframes fa-flip-360 {
  0% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  8% {
    transform: perspective(2em) scale(var(--fa-flip-anticipation-scale, 0.95)) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  50% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.6));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  80% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * var(--fa-flip-overshoot, 1.04)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -360deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  8% {
    transform: rotate(35deg) translateX(1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  20% {
    transform: rotate(-22deg) translateX(-1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  35% {
    transform: rotate(15deg) translateX(1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  50% {
    transform: rotate(-9deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  65% {
    transform: rotate(5deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  78% {
    transform: rotate(-3deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  90% {
    transform: rotate(1deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  12% {
    transform: rotate(60deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  16.67% {
    transform: rotate(60deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  28.67% {
    transform: rotate(120deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  33.33% {
    transform: rotate(120deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  45.33% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  62% {
    transform: rotate(240deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  66.67% {
    transform: rotate(240deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  78.67% {
    transform: rotate(300deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  83.33% {
    transform: rotate(300deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  95.33% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap-4 {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  15% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  25% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  40% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  65% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  75% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  90% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap-8 {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  9% {
    transform: rotate(45deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  12.5% {
    transform: rotate(45deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  21.5% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  25% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  34% {
    transform: rotate(135deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  37.5% {
    transform: rotate(135deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  46.5% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  59% {
    transform: rotate(225deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  62.5% {
    transform: rotate(225deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  71.5% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  75% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  84% {
    transform: rotate(315deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  87.5% {
    transform: rotate(315deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  96.5% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-buzz {
  0% {
    transform: translateX(0) rotate(0deg);
    animation-timing-function: cubic-bezier(0.1, 0, 0.9, 1);
  }
  5% {
    transform: translateX(var(--fa-buzz-distance, 4px)) rotate(0.5deg);
  }
  10% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px))) rotate(-0.5deg);
  }
  15% {
    transform: translateX(var(--fa-buzz-distance, 4px)) rotate(0.3deg);
  }
  20% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px))) rotate(-0.3deg);
  }
  25% {
    transform: translateX(calc(var(--fa-buzz-distance, 4px) * 0.7)) rotate(0.2deg);
  }
  30% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px) * 0.7)) rotate(-0.2deg);
  }
  35% {
    transform: translateX(calc(var(--fa-buzz-distance, 4px) * 0.4)) rotate(0.1deg);
  }
  40% {
    transform: translateX(0) rotate(0deg);
  }
  100% {
    transform: translateX(0) rotate(0deg);
  }
}
@keyframes fa-wag {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  12% {
    transform: rotate(var(--fa-wag-angle, 12deg));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  24% {
    transform: rotate(2deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  36% {
    transform: rotate(calc(var(--fa-wag-angle, 12deg) * 0.85));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  48% {
    transform: rotate(1deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  58% {
    transform: rotate(calc(var(--fa-wag-angle, 12deg) * 0.6));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  68% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-float {
  0% {
    transform: translateY(0) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  15% {
    transform: translateY(calc(-0.4 * var(--fa-float-height, 6px))) translateX(var(--fa-float-drift, 1px)) rotate(var(--fa-float-tilt, 1deg)) scale(1, 1);
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  35% {
    transform: translateY(calc(-1 * var(--fa-float-height, 6px))) translateX(0) rotate(0deg) scale(var(--fa-float-stretch-x, 0.98), var(--fa-float-stretch-y, 1.03));
    animation-timing-function: cubic-bezier(0.5, 0, 0.5, 0);
  }
  50% {
    transform: translateY(calc(-0.92 * var(--fa-float-height, 6px))) translateX(calc(-0.5 * var(--fa-float-drift, 1px))) rotate(calc(-0.5 * var(--fa-float-tilt, 1deg))) scale(0.995, 1.01);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  70% {
    transform: translateY(calc(-0.3 * var(--fa-float-height, 6px))) translateX(calc(-1 * var(--fa-float-drift, 1px))) rotate(calc(-1 * var(--fa-float-tilt, 1deg))) scale(1, 1);
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  90% {
    transform: translateY(calc(0.05 * var(--fa-float-height, 6px))) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: translateY(0) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
  }
}
@keyframes fa-swing {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  8% {
    transform: rotate(var(--fa-swing-angle, 22deg));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  18% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.85));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  28% {
    transform: rotate(calc(var(--fa-swing-angle, 22deg) * 0.65));
    animation-timing-function: cubic-bezier(0.35, 0, 0.65, 1);
  }
  38% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.45));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  48% {
    transform: rotate(calc(var(--fa-swing-angle, 22deg) * 0.25));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  56% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.1));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  64% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-jello {
  0% {
    transform: scale(1, 1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  12% {
    transform: scale(var(--fa-jello-scale-x, 1.15), calc(2 - var(--fa-jello-scale-x, 1.15)));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  24% {
    transform: scale(calc(2 - var(--fa-jello-scale-y, 1.12)), var(--fa-jello-scale-y, 1.12));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  36% {
    transform: scale(calc(1 + (var(--fa-jello-scale-x, 1.15) - 1) * 0.5), calc(2 - (1 + (var(--fa-jello-scale-x, 1.15) - 1) * 0.5)));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  48% {
    transform: scale(calc(2 - (1 + (var(--fa-jello-scale-y, 1.12) - 1) * 0.3)), calc(1 + (var(--fa-jello-scale-y, 1.12) - 1) * 0.3));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  58% {
    transform: scale(1.02, 0.98);
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  68% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
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

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;function vi(){var e=Or,t=kr,n=H.cssPrefix,r=H.replacementClass,i=_i;if(n!==e||r!==t){var a=RegExp(`\\.${e}\\-`,`g`),o=RegExp(`\\--${e}\\-`,`g`),s=RegExp(`\\.${t}`,`g`);i=i.replace(a,`.${n}-`).replace(o,`--${n}-`).replace(s,`.${r}`)}return i}var yi=!1;function bi(){H.autoAddCss&&!yi&&(oi(vi()),yi=!0)}var xi={mixout:function(){return{dom:{css:vi,insertCss:bi}}},hooks:function(){return{beforeDOMElementCreation:function(){bi()},beforeI2svg:function(){bi()}}}},G=I||{};G[B]||(G[B]={}),G[B].styles||(G[B].styles={}),G[B].hooks||(G[B].hooks={}),G[B].shims||(G[B].shims=[]);var K=G[B],Si=[],Ci=function(){L.removeEventListener(`DOMContentLoaded`,Ci),wi=1,Si.map(function(e){return e()})},wi=!1;R&&(wi=(L.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(L.readyState),wi||L.addEventListener(`DOMContentLoaded`,Ci));function Ti(e){R&&(wi?setTimeout(e,0):Si.push(e))}function Ei(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,a=i===void 0?[]:i;return typeof e==`string`?di(e):`<${t} ${fi(r)}>${a.map(Ei).join(``)}</${t}>`}function Di(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Oi=function(e,t){return function(n,r,i,a){return e.call(t,n,r,i,a)}},ki=function(e,t,n,r){var i=Object.keys(e),a=i.length,o=r===void 0?t:Oi(t,r),s,c,l;for(n===void 0?(s=1,l=e[i[0]]):(s=0,l=n);s<a;s++)c=i[s],l=o(l,e[c],c,e);return l};function Ai(e){return F(e).length===1?e.codePointAt(0).toString(16):null}function ji(e){return Object.keys(e).reduce(function(t,n){var r=e[n];return r.icon?t[r.iconName]=r.icon:t[n]=r,t},{})}function Mi(e,t){var n=(arguments.length>2&&arguments[2]!==void 0?arguments[2]:{}).skipHooks,r=n!==void 0&&n,i=ji(t);typeof K.hooks.addPack==`function`&&!r?K.hooks.addPack(e,ji(t)):K.styles[e]=P(P({},K.styles[e]||{}),i),e===`fas`&&Mi(`fa`,t)}var Ni=K.styles,Pi=K.shims,Fi=Object.keys(Gr),Ii=Fi.reduce(function(e,t){return e[t]=Object.keys(Gr[t]),e},{}),Li=null,Ri={},zi={},Bi={},Vi={},Hi={};function Ui(e){return~Qr.indexOf(e)}function Wi(e,t){var n=t.split(`-`),r=n[0],i=n.slice(1).join(`-`);return r===e&&i!==``&&!Ui(i)?i:null}var Gi=function(){var e=function(e){return ki(Ni,function(t,n,r){return t[r]=ki(n,e,{}),t},{})};Ri=e(function(e,t,n){return t[3]&&(e[t[3]]=n),t[2]&&t[2].filter(function(e){return typeof e==`number`}).forEach(function(t){e[t.toString(16)]=n}),e}),zi=e(function(e,t,n){return e[n]=n,t[2]&&t[2].filter(function(e){return typeof e==`string`}).forEach(function(t){e[t]=n}),e}),Hi=e(function(e,t,n){var r=t[2];return e[n]=n,r.forEach(function(t){e[t]=n}),e});var t=`far`in Ni||H.autoFetchSvg,n=ki(Pi,function(e,n){var r=n[0],i=n[1],a=n[2];return i===`far`&&!t&&(i=`fas`),typeof r==`string`&&(e.names[r]={prefix:i,iconName:a}),typeof r==`number`&&(e.unicodes[r.toString(16)]={prefix:i,iconName:a}),e},{names:{},unicodes:{}});Bi=n.names,Vi=n.unicodes,Li=Qi(H.styleDefault,{family:H.familyDefault})};ai(function(e){Li=Qi(e.styleDefault,{family:H.familyDefault})}),Gi();function Ki(e,t){return(Ri[e]||{})[t]}function qi(e,t){return(zi[e]||{})[t]}function q(e,t){return(Hi[e]||{})[t]}function Ji(e){return Bi[e]||{prefix:null,iconName:null}}function Yi(e){var t=Vi[e],n=Ki(`fas`,e);return t||(n?{prefix:`fas`,iconName:n}:null)||{prefix:null,iconName:null}}function J(){return Li}var Xi=function(){return{prefix:null,iconName:null,rest:[]}};function Zi(e){var t=z,n=Fi.reduce(function(e,t){return e[t]=`${H.cssPrefix}-${t}`,e},{});return rr.forEach(function(r){(e.includes(n[r])||e.some(function(e){return Ii[r].includes(e)}))&&(t=r)}),t}function Qi(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).family,n=t===void 0?z:t,r=Vr[n][e];if(n===un&&!e)return`fad`;var i=Ur[n][e]||Ur[n][r],a=e in K.styles?e:null;return i||a||null}function $i(e){var t=[],n=null;return e.forEach(function(e){var r=Wi(H.cssPrefix,e);r?n=r:e&&t.push(e)}),{iconName:n,rest:t}}function ea(e){return e.sort().filter(function(e,t,n){return n.indexOf(e)===t})}var ta=xr.concat(cr);function na(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).skipLookups,n=t!==void 0&&t,r=null,i=ea(e.filter(function(e){return ta.includes(e)})),a=ea(e.filter(function(e){return!ta.includes(e)})),o=Ht(i.filter(function(e){return r=e,!ln.includes(e)}),1)[0],s=o===void 0?null:o,c=Zi(i),l=P(P({},$i(a)),{},{prefix:Qi(s,{family:c})});return P(P(P({},l),oa({values:e,family:c,styles:Ni,config:H,canonical:l,givenPrefix:r})),ra(n,r,l))}function ra(e,t,n){var r=n.prefix,i=n.iconName;if(e||!r||!i)return{prefix:r,iconName:i};var a=t===`fa`?Ji(i):{},o=q(r,i);return i=a.iconName||o||i,r=a.prefix||r,r===`far`&&!Ni.far&&Ni.fas&&!H.autoFetchSvg&&(r=`fas`),{prefix:r,iconName:i}}var ia=rr.filter(function(e){return e!==z||e!==un}),aa=Object.keys(br).filter(function(e){return e!==z}).map(function(e){return Object.keys(br[e])}).flat();function oa(e){var t=e.values,n=e.family,r=e.canonical,i=e.givenPrefix,a=i===void 0?``:i,o=e.styles,s=o===void 0?{}:o,c=e.config,l=c===void 0?{}:c,u=n===un,d=t.includes(`fa-duotone`)||t.includes(`fad`),f=l.familyDefault===`duotone`,p=r.prefix===`fad`||r.prefix===`fa-duotone`;return!u&&(d||f||p)&&(r.prefix=`fad`),(t.includes(`fa-brands`)||t.includes(`fab`))&&(r.prefix=`fab`),!r.prefix&&ia.includes(n)&&(Object.keys(s).find(function(e){return aa.includes(e)})||l.autoFetchSvg)&&(r.prefix=or.get(n).defaultShortPrefixId,r.iconName=q(r.prefix,r.iconName)||r.iconName),(r.prefix===`fa`||a===`fa`)&&(r.prefix=J()||`fas`),r}var sa=function(){function e(){Nt(this,e),this.definitions={}}return Ft(e,[{key:`add`,value:function(){var e=this,t=[...arguments].reduce(this._pullDefinitions,{});Object.keys(t).forEach(function(n){e.definitions[n]=P(P({},e.definitions[n]||{}),t[n]),Mi(n,t[n]);var r=Gr[z][n];r&&Mi(r,t[n]),Gi()})}},{key:`reset`,value:function(){this.definitions={}}},{key:`_pullDefinitions`,value:function(e,t){var n=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(n).map(function(t){var r=n[t],i=r.prefix,a=r.iconName,o=r.icon,s=o[2];e[i]||(e[i]={}),s.length>0&&s.forEach(function(t){typeof t==`string`&&(e[i][t]=o)}),e[i][a]=o}),e}}])}(),ca=[],la={},ua={},da=Object.keys(ua);function fa(e,t){var n=t.mixoutsTo;return ca=e,la={},Object.keys(ua).forEach(function(e){da.indexOf(e)===-1&&delete ua[e]}),ca.forEach(function(e){var t=e.mixout?e.mixout():{};if(Object.keys(t).forEach(function(e){typeof t[e]==`function`&&(n[e]=t[e]),Gt(t[e])===`object`&&Object.keys(t[e]).forEach(function(r){n[e]||(n[e]={}),n[e][r]=t[e][r]})}),e.hooks){var r=e.hooks();Object.keys(r).forEach(function(e){la[e]||(la[e]=[]),la[e].push(r[e])})}e.provides&&e.provides(ua)}),n}function pa(e,t){var n=[...arguments].slice(2);return(la[e]||[]).forEach(function(e){t=e.apply(null,[t].concat(n))}),t}function Y(e){var t=[...arguments].slice(1);(la[e]||[]).forEach(function(e){e.apply(null,t)})}function X(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return ua[e]?ua[e].apply(null,t):void 0}function ma(e){e.prefix===`fa`&&(e.prefix=`fas`);var t=e.iconName,n=e.prefix||J();if(t)return t=q(n,t)||t,Di(ha.definitions,n,t)||Di(K.styles,n,t)}var ha=new sa,Z={noAuto:function(){H.autoReplaceSvg=!1,H.observeMutations=!1,Y(`noAuto`)},config:H,dom:{i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return R?(Y(`beforeI2svg`,e),X(`pseudoElements2svg`,e),X(`i2svg`,e)):Promise.reject(Error(`Operation requires a DOM of some kind.`))},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.autoReplaceSvgRoot;H.autoReplaceSvg===!1&&(H.autoReplaceSvg=!0),H.observeMutations=!0,Ti(function(){ga({autoReplaceSvgRoot:t}),Y(`watch`,e)})}},parse:{icon:function(e){if(e===null)return null;if(Gt(e)===`object`&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:q(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var t=e[1].indexOf(`fa-`)===0?e[1].slice(3):e[1],n=Qi(e[0]);return{prefix:n,iconName:q(n,t)||t}}if(typeof e==`string`&&(e.indexOf(`${H.cssPrefix}-`)>-1||e.match(qr))){var r=na(e.split(` `),{skipLookups:!0});return{prefix:r.prefix||J(),iconName:q(r.prefix,r.iconName)||r.iconName}}if(typeof e==`string`){var i=J();return{prefix:i,iconName:q(i,e)||e}}}},library:ha,findIconDefinition:ma,toHtml:Ei},ga=function(){var e=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:{}).autoReplaceSvgRoot,t=e===void 0?L:e;(Object.keys(K.styles).length>0||H.autoFetchSvg)&&R&&H.autoReplaceSvg&&Z.dom.i2svg({node:t})};function _a(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(e){return Ei(e)})}}),Object.defineProperty(e,"node",{get:function(){if(R){var t=L.createElement(`div`);return t.innerHTML=e.html,t.children}}}),e}function va(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,a=e.styles,o=e.transform;if(mi(o)&&n.found&&!r.found){var s={x:n.width/n.height/2,y:.5};i.style=pi(P(P({},a),{},{"transform-origin":`${s.x+o.x/16}em ${s.y+o.y/16}em`}))}return[{tag:`svg`,attributes:i,children:t}]}function ya(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,a=e.symbol,o=a===!0?`${t}-${H.cssPrefix}-${n}`:a;return[{tag:`svg`,attributes:{style:`display: none;`},children:[{tag:`symbol`,attributes:P(P({},i),{},{id:o}),children:r}]}]}function ba(e){return[`aria-label`,`aria-labelledby`,`title`,`role`].some(function(t){return t in e})}function xa(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,a=e.iconName,o=e.transform,s=e.symbol,c=e.maskId,l=e.extra,u=e.watchable,d=u!==void 0&&u,f=r.found?r:n,p=f.width,m=f.height,h=[H.replacementClass,a?`${H.cssPrefix}-${a}`:``].filter(function(e){return l.classes.indexOf(e)===-1}).filter(function(e){return e!==``||!!e}).concat(l.classes).join(` `),g={children:[],attributes:P(P({},l.attributes),{},{"data-prefix":i,"data-icon":a,class:h,role:l.attributes.role||`img`,viewBox:`0 0 ${p} ${m}`})};!ba(l.attributes)&&!l.attributes[`aria-hidden`]&&(g.attributes[`aria-hidden`]=`true`),d&&(g.attributes[V]=``);var _=P(P({},g),{},{prefix:i,iconName:a,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:P({},l.styles)}),v=r.found&&n.found?X(`generateAbstractMask`,_)||{children:[],attributes:{}}:X(`generateAbstractIcon`,_)||{children:[],attributes:{}},y=v.children,b=v.attributes;return _.children=y,_.attributes=b,s?ya(_):va(_)}function Sa(e){var t=e.content,n=e.width,r=e.height,i=e.transform,a=e.extra,o=e.watchable,s=o!==void 0&&o,c=P(P({},a.attributes),{},{class:a.classes.join(` `)});s&&(c[V]=``);var l=P({},a.styles);mi(i)&&(l.transform=gi({transform:i,startCentered:!0,width:n,height:r}),l[`-webkit-transform`]=l.transform);var u=pi(l);u.length>0&&(c.style=u);var d=[];return d.push({tag:`span`,attributes:c,children:[t]}),d}function Ca(e){var t=e.content,n=e.extra,r=P(P({},n.attributes),{},{class:n.classes.join(` `)}),i=pi(n.styles);i.length>0&&(r.style=i);var a=[];return a.push({tag:`span`,attributes:r,children:[t]}),a}var wa=K.styles;function Ta(e){var t=e[0],n=e[1],r=Ht(e.slice(4),1)[0],i=null;return i=Array.isArray(r)?{tag:`g`,attributes:{class:`${H.cssPrefix}-${Zr.GROUP}`},children:[{tag:`path`,attributes:{class:`${H.cssPrefix}-${Zr.SECONDARY}`,fill:`currentColor`,d:r[0]}},{tag:`path`,attributes:{class:`${H.cssPrefix}-${Zr.PRIMARY}`,fill:`currentColor`,d:r[1]}}]}:{tag:`path`,attributes:{fill:`currentColor`,d:r}},{found:!0,width:t,height:n,icon:i}}var Ea={found:!1,width:512,height:512};function Da(e,t){!Rr&&!H.showMissingIcons&&e&&console.error(`Icon with name "${e}" and prefix "${t}" is missing.`)}function Oa(e,t){var n=t;return t===`fa`&&H.styleDefault!==null&&(t=J()),new Promise(function(r,i){if(n===`fa`){var a=Ji(e)||{};e=a.iconName||e,t=a.prefix||t}if(e&&t&&wa[t]&&wa[t][e]){var o=wa[t][e];return r(Ta(o))}Da(e,t),r(P(P({},Ea),{},{icon:H.showMissingIcons&&e&&X(`missingIconAbstract`)||{}}))})}var ka=function(){},Aa=H.measurePerformance&&tn&&tn.mark&&tn.measure?tn:{mark:ka,measure:ka},ja=`FA "7.3.0"`,Ma=function(e){return Aa.mark(`${ja} ${e} begins`),function(){return Na(e)}},Na=function(e){Aa.mark(`${ja} ${e} ends`),Aa.measure(`${ja} ${e}`,`${ja} ${e} begins`,`${ja} ${e} ends`)},Pa={begin:Ma,end:Na},Fa=function(){};function Ia(e){return typeof(e.getAttribute?e.getAttribute(V):null)==`string`}function La(e){var t=e.getAttribute?e.getAttribute(Mr):null,n=e.getAttribute?e.getAttribute(Nr):null;return t&&n}function Ra(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(H.replacementClass)}function za(){return H.autoReplaceSvg===!0?Wa.replace:Wa[H.autoReplaceSvg]||Wa.replace}function Ba(e){return L.createElementNS(`http://www.w3.org/2000/svg`,e)}function Va(e){return L.createElement(e)}function Ha(e){var t=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{}).ceFn,n=t===void 0?e.tag===`svg`?Ba:Va:t;if(typeof e==`string`)return L.createTextNode(e);var r=n(e.tag);return Object.keys(e.attributes||[]).forEach(function(t){r.setAttribute(t,e.attributes[t])}),(e.children||[]).forEach(function(e){r.appendChild(Ha(e,{ceFn:n}))}),r}function Ua(e){var t=` ${e.outerHTML} `;return t=`${t}Font Awesome fontawesome.com `,t}var Wa={replace:function(e){var t=e[0];if(t.parentNode)if(e[1].forEach(function(e){t.parentNode.insertBefore(Ha(e),t)}),t.getAttribute(V)===null&&H.keepOriginalSource){var n=L.createComment(Ua(t));t.parentNode.replaceChild(n,t)}else t.remove()},nest:function(e){var t=e[0],n=e[1];if(~ui(t).indexOf(H.replacementClass))return Wa.replace(e);var r=RegExp(`${H.cssPrefix}-.*`);if(delete n[0].attributes.id,n[0].attributes.class){var i=n[0].attributes.class.split(` `).reduce(function(e,t){return t===H.replacementClass||t.match(r)?e.toSvg.push(t):e.toNode.push(t),e},{toNode:[],toSvg:[]});n[0].attributes.class=i.toSvg.join(` `),i.toNode.length===0?t.removeAttribute(`class`):t.setAttribute(`class`,i.toNode.join(` `))}var a=n.map(function(e){return Ei(e)}).join(`
`);t.setAttribute(V,``),t.innerHTML=a}};function Ga(e){e()}function Ka(e,t){var n=typeof t==`function`?t:Fa;if(e.length===0)n();else{var r=Ga;H.mutateApproach===Fr&&(r=I.requestAnimationFrame||Ga),r(function(){var t=za(),r=Pa.begin(`mutate`);e.map(t),r(),n()})}}var qa=!1;function Ja(){qa=!0}function Ya(){qa=!1}var Xa=null;function Za(e){if(en&&H.observeMutations){var t=e.treeCallback,n=t===void 0?Fa:t,r=e.nodeCallback,i=r===void 0?Fa:r,a=e.pseudoElementsCallback,o=a===void 0?Fa:a,s=e.observeMutationsRoot,c=s===void 0?L:s;Xa=new en(function(e){if(!qa){var t=J();li(e).forEach(function(e){if(e.type===`childList`&&e.addedNodes.length>0&&!Ia(e.addedNodes[0])&&(H.searchPseudoElements&&o(e.target),n(e.target)),e.type===`attributes`&&e.target.parentNode&&H.searchPseudoElements&&o([e.target],!0),e.type===`attributes`&&Ia(e.target)&&~Xr.indexOf(e.attributeName))if(e.attributeName===`class`&&La(e.target)){var r=na(ui(e.target)),a=r.prefix,s=r.iconName;e.target.setAttribute(Mr,a||t),s&&e.target.setAttribute(Nr,s)}else Ra(e.target)&&i(e.target)})}}),R&&Xa.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Qa(){Xa&&Xa.disconnect()}function $a(e){var t=e.getAttribute(`style`),n=[];return t&&(n=t.split(`;`).reduce(function(e,t){var n=t.split(`:`),r=n[0],i=n.slice(1);return r&&i.length>0&&(e[r]=i.join(`:`).trim()),e},{})),n}function eo(e){var t=e.getAttribute(`data-prefix`),n=e.getAttribute(`data-icon`),r=e.innerText===void 0?``:e.innerText.trim(),i=na(ui(e));return i.prefix||=J(),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix?i:(i.prefix&&r.length>0&&(i.iconName=qi(i.prefix,e.innerText)||Ki(i.prefix,Ai(e.innerText))),!i.iconName&&H.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data),i)}function to(e){return li(e.attributes).reduce(function(e,t){return e.name!==`class`&&e.name!==`style`&&(e[t.name]=t.value),e},{})}function no(){return{iconName:null,prefix:null,transform:W,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function ro(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=eo(e),r=n.iconName,i=n.prefix,a=n.rest,o=to(e),s=pa(`parseNodeAttributes`,{},e);return P({iconName:r,prefix:i,transform:W,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:t.styleParser?$a(e):[],attributes:o}},s)}var io=K.styles;function ao(e){var t=H.autoReplaceSvg===`nest`?ro(e,{styleParser:!1}):ro(e);return~t.extra.classes.indexOf(Jr)?X(`generateLayersText`,e,t):X(`generateSvgReplacementMutation`,e,t)}function oo(){return[].concat(F(cr),F(xr))}function so(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!R)return Promise.resolve();var n=L.documentElement.classList,r=function(e){return n.add(`${Pr}-${e}`)},i=function(e){return n.remove(`${Pr}-${e}`)},a=H.autoFetchSvg?oo():ln.concat(Object.keys(io));a.includes(`fa`)||a.push(`fa`);var o=[`.${Jr}:not([${V}])`].concat(a.map(function(e){return`.${e}:not([${V}])`})).join(`, `);if(o.length===0)return Promise.resolve();var s=[];try{s=li(e.querySelectorAll(o))}catch{}if(s.length>0)r(`pending`),i(`complete`);else return Promise.resolve();var c=Pa.begin(`onTree`),l=s.reduce(function(e,t){try{var n=ao(t);n&&e.push(n)}catch(e){Rr||e.name===`MissingIcon`&&console.error(e)}return e},[]);return new Promise(function(e,n){Promise.all(l).then(function(n){Ka(n,function(){r(`active`),r(`complete`),i(`pending`),typeof t==`function`&&t(),c(),e()})}).catch(function(e){c(),n(e)})})}function co(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;ao(e).then(function(e){e&&Ka([e],t)})}function lo(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:ma(t||{}),i=n.mask;return i&&=(i||{}).icon?i:ma(i||{}),e(r,P(P({},n),{},{mask:i}))}}var uo=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.transform,r=n===void 0?W:n,i=t.symbol,a=i!==void 0&&i,o=t.mask,s=o===void 0?null:o,c=t.maskId,l=c===void 0?null:c,u=t.classes,d=u===void 0?[]:u,f=t.attributes,p=f===void 0?{}:f,m=t.styles,h=m===void 0?{}:m;if(e){var g=e.prefix,_=e.iconName,v=e.icon;return _a(P({type:`icon`},e),function(){return Y(`beforeDOMElementCreation`,{iconDefinition:e,params:t}),xa({icons:{main:Ta(v),mask:s?Ta(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:g,iconName:_,transform:P(P({},W),r),symbol:a,maskId:l,extra:{attributes:p,styles:h,classes:d}})})}},fo={mixout:function(){return{icon:lo(uo)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=so,e.nodeCallback=co,e}}},provides:function(e){e.i2svg=function(e){var t=e.node,n=t===void 0?L:t,r=e.callback;return so(n,r===void 0?function(){}:r)},e.generateSvgReplacementMutation=function(e,t){var n=t.iconName,r=t.prefix,i=t.transform,a=t.symbol,o=t.mask,s=t.maskId,c=t.extra;return new Promise(function(t,l){Promise.all([Oa(n,r),o.iconName?Oa(o.iconName,o.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(o){var l=Ht(o,2),u=l[0],d=l[1];t([e,xa({icons:{main:u,mask:d},prefix:r,iconName:n,transform:i,symbol:a,maskId:s,extra:c,watchable:!0})])}).catch(l)})},e.generateAbstractIcon=function(e){var t=e.children,n=e.attributes,r=e.main,i=e.transform,a=e.styles,o=pi(a);o.length>0&&(n.style=o);var s;return mi(i)&&(s=X(`generateAbstractTransformGrouping`,{main:r,transform:i,containerWidth:r.width,iconWidth:r.width})),t.push(s||r.icon),{children:t,attributes:n}}}},po={mixout:function(){return{layer:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.classes,r=n===void 0?[]:n;return _a({type:`layer`},function(){Y(`beforeDOMElementCreation`,{assembler:e,params:t});var n=[];return e(function(e){Array.isArray(e)?e.map(function(e){n=n.concat(e.abstract)}):n=n.concat(e.abstract)}),[{tag:`span`,attributes:{class:[`${H.cssPrefix}-layers`].concat(F(r)).join(` `)},children:n}]})}}}},mo={mixout:function(){return{counter:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.title,r=n===void 0?null:n,i=t.classes,a=i===void 0?[]:i,o=t.attributes,s=o===void 0?{}:o,c=t.styles,l=c===void 0?{}:c;return _a({type:`counter`,content:e},function(){return Y(`beforeDOMElementCreation`,{content:e,params:t}),Ca({content:e.toString(),title:r,extra:{attributes:s,styles:l,classes:[`${H.cssPrefix}-layers-counter`].concat(F(a))}})})}}}},ho={mixout:function(){return{text:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.transform,r=n===void 0?W:n,i=t.classes,a=i===void 0?[]:i,o=t.attributes,s=o===void 0?{}:o,c=t.styles,l=c===void 0?{}:c;return _a({type:`text`,content:e},function(){return Y(`beforeDOMElementCreation`,{content:e,params:t}),Sa({content:e,transform:P(P({},W),r),extra:{attributes:s,styles:l,classes:[`${H.cssPrefix}-layers-text`].concat(F(a))}})})}}},provides:function(e){e.generateLayersText=function(e,t){var n=t.transform,r=t.extra,i=null,a=null;if(nn){var o=parseInt(getComputedStyle(e).fontSize,10),s=e.getBoundingClientRect();i=s.width/o,a=s.height/o}return Promise.resolve([e,Sa({content:e.innerHTML,width:i,height:a,transform:n,extra:r,watchable:!0})])}}},go=RegExp(`"`,`ug`),_o=[1105920,1112319],vo=P(P(P(P({},{FontAwesome:{normal:`fas`,400:`fas`}}),ar),Er),fr),yo=Object.keys(vo).reduce(function(e,t){return e[t.toLowerCase()]=vo[t],e},{}),bo=Object.keys(yo).reduce(function(e,t){var n=yo[t];return e[t]=n[900]||F(Object.entries(n))[0][1],e},{});function xo(e){return Ai(F(e.replace(go,``))[0]||``)}function So(e){var t=e.getPropertyValue(`font-feature-settings`).includes(`ss01`),n=e.getPropertyValue(`content`).replace(go,``),r=n.codePointAt(0),i=r>=_o[0]&&r<=_o[1],a=n.length===2&&n[0]===n[1];return i||a||t}function Co(e,t){var n=e.replace(/^['"]|['"]$/g,``).toLowerCase(),r=parseInt(t),i=isNaN(r)?`normal`:r;return(yo[n]||{})[i]||bo[n]}function wo(e,t){var n=`${jr}${t.replace(`:`,`-`)}`;return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var a=li(e.children).filter(function(e){return e.getAttribute(Ar)===t})[0],o=I.getComputedStyle(e,t),s=o.getPropertyValue(`font-family`),c=s.match(Yr),l=o.getPropertyValue(`font-weight`),u=o.getPropertyValue(`content`);if(a&&!c)return e.removeChild(a),r();if(c&&u!==`none`&&u!==``){var d=o.getPropertyValue(`content`),f=Co(s,l),p=xo(d),m=c[0].startsWith(`FontAwesome`),h=So(o),g=Ki(f,p),_=g;if(m){var v=Yi(p);v.iconName&&v.prefix&&(g=v.iconName,f=v.prefix)}if(g&&!h&&(!a||a.getAttribute(Mr)!==f||a.getAttribute(Nr)!==_)){e.setAttribute(n,_),a&&e.removeChild(a);var y=no(),b=y.extra;b.attributes[Ar]=t,Oa(g,f).then(function(i){var a=xa(P(P({},y),{},{icons:{main:i,mask:Xi()},prefix:f,iconName:_,extra:b,watchable:!0})),o=L.createElementNS(`http://www.w3.org/2000/svg`,`svg`);t===`::before`?e.insertBefore(o,e.firstChild):e.appendChild(o),o.outerHTML=a.map(function(e){return Ei(e)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function To(e){return Promise.all([wo(e,`::before`),wo(e,`::after`)])}function Eo(e){return e.parentNode!==document.head&&!~Ir.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Ar)&&(!e.parentNode||e.parentNode.tagName!==`svg`)}var Do=function(e){return!!e&&Lr.some(function(t){return e.includes(t)})},Oo=function(e){if(!e)return[];var t=new Set,n=e.split(/,(?![^()]*\))/).map(function(e){return e.trim()});n=n.flatMap(function(e){return e.includes(`(`)?e:e.split(`,`).map(function(e){return e.trim()})});var r=It(n),i;try{for(r.s();!(i=r.n()).done;){var a=i.value;if(Do(a)){var o=Lr.reduce(function(e,t){return e.replace(t,``)},a);o!==``&&o!==`*`&&t.add(o)}}}catch(e){r.e(e)}finally{r.f()}return t};function ko(e){var t=arguments.length>1&&arguments[1]!==void 0&&arguments[1];if(R){var n;if(t)n=e;else if(H.searchPseudoElementsFullScan)n=e.querySelectorAll(`*`);else{var r=new Set,i=It(document.styleSheets),a;try{for(i.s();!(a=i.n()).done;){var o=a.value;try{var s=It(o.cssRules),c;try{for(s.s();!(c=s.n()).done;){var l=c.value,u=It(Oo(l.selectorText)),d;try{for(u.s();!(d=u.n()).done;){var f=d.value;r.add(f)}}catch(e){u.e(e)}finally{u.f()}}}catch(e){s.e(e)}finally{s.f()}}catch(e){H.searchPseudoElementsWarnings&&console.warn(`Font Awesome: cannot parse stylesheet: ${o.href} (${e.message})
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`)}}}catch(e){i.e(e)}finally{i.f()}if(!r.size)return;var p=Array.from(r).join(`, `);try{n=e.querySelectorAll(p)}catch{}}return new Promise(function(e,t){var r=li(n).filter(Eo).map(To),i=Pa.begin(`searchPseudoElements`);Ja(),Promise.all(r).then(function(){i(),Ya(),e()}).catch(function(){i(),Ya(),t()})})}}var Ao={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=ko,e}}},provides:function(e){e.pseudoElements2svg=function(e){var t=e.node,n=t===void 0?L:t;H.searchPseudoElements&&ko(n)}}},jo=!1,Mo={mixout:function(){return{dom:{unwatch:function(){Ja(),jo=!0}}}},hooks:function(){return{bootstrap:function(){Za(pa(`mutationObserverCallbacks`,{}))},noAuto:function(){Qa()},watch:function(e){var t=e.observeMutationsRoot;jo?Ya():Za(pa(`mutationObserverCallbacks`,{observeMutationsRoot:t}))}}}},No=function(e){return e.toLowerCase().split(` `).reduce(function(e,t){var n=t.toLowerCase().split(`-`),r=n[0],i=n.slice(1).join(`-`);if(r&&i===`h`)return e.flipX=!0,e;if(r&&i===`v`)return e.flipY=!0,e;if(i=parseFloat(i),isNaN(i))return e;switch(r){case`grow`:e.size+=i;break;case`shrink`:e.size-=i;break;case`left`:e.x-=i;break;case`right`:e.x+=i;break;case`up`:e.y-=i;break;case`down`:e.y+=i;break;case`rotate`:e.rotate+=i;break}return e},{size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0})},Po={mixout:function(){return{parse:{transform:function(e){return No(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-transform`);return n&&(e.transform=No(n)),e}}},provides:function(e){e.generateAbstractTransformGrouping=function(e){var t=e.main,n=e.transform,r=e.containerWidth,i=e.iconWidth,a={outer:{transform:`translate(${r/2} 256)`},inner:{transform:`${`translate(${n.x*32}, ${n.y*32}) `} ${`scale(${n.size/16*(n.flipX?-1:1)}, ${n.size/16*(n.flipY?-1:1)}) `} ${`rotate(${n.rotate} 0 0)`}`},path:{transform:`translate(${i/2*-1} -256)`}};return{tag:`g`,attributes:P({},a.outer),children:[{tag:`g`,attributes:P({},a.inner),children:[{tag:t.icon.tag,children:t.icon.children,attributes:P(P({},t.icon.attributes),a.path)}]}]}}}},Fo={x:0,y:0,width:`100%`,height:`100%`};function Io(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill=`black`),e}function Lo(e){return e.tag===`g`?e.children:[e]}fa([xi,fo,po,mo,ho,Ao,Mo,Po,{hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-mask`),r=n?na(n.split(` `).map(function(e){return e.trim()})):Xi();return r.prefix||=J(),e.mask=r,e.maskId=t.getAttribute(`data-fa-mask-id`),e}}},provides:function(e){e.generateAbstractMask=function(e){var t=e.children,n=e.attributes,r=e.main,i=e.mask,a=e.maskId,o=e.transform,s=r.width,c=r.icon,l=i.width,u=i.icon,d=hi({transform:o,containerWidth:l,iconWidth:s}),f={tag:`rect`,attributes:P(P({},Fo),{},{fill:`white`})},p=c.children?{children:c.children.map(Io)}:{},m={tag:`g`,attributes:P({},d.inner),children:[Io(P({tag:c.tag,attributes:P(P({},c.attributes),d.path)},p))]},h={tag:`g`,attributes:P({},d.outer),children:[m]},g=`mask-${a||ci()}`,_=`clip-${a||ci()}`,v={tag:`mask`,attributes:P(P({},Fo),{},{id:g,maskUnits:`userSpaceOnUse`,maskContentUnits:`userSpaceOnUse`}),children:[f,h]},y={tag:`defs`,children:[{tag:`clipPath`,attributes:{id:_},children:Lo(u)},v]};return t.push(y,{tag:`rect`,attributes:P({fill:`currentColor`,"clip-path":`url(#${_})`,mask:`url(#${g})`},Fo)}),{children:t,attributes:n}}}},{provides:function(e){var t=!1;I.matchMedia&&(t=I.matchMedia(`(prefers-reduced-motion: reduce)`).matches),e.missingIconAbstract=function(){var e=[],n={fill:`currentColor`},r={attributeType:`XML`,repeatCount:`indefinite`,dur:`2s`};e.push({tag:`path`,attributes:P(P({},n),{},{d:`M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z`})});var i=P(P({},r),{},{attributeName:`opacity`}),a={tag:`circle`,attributes:P(P({},n),{},{cx:`256`,cy:`364`,r:`28`}),children:[]};return t||a.children.push({tag:`animate`,attributes:P(P({},r),{},{attributeName:`r`,values:`28;14;28;28;14;28;`})},{tag:`animate`,attributes:P(P({},i),{},{values:`1;0;1;1;0;1;`})}),e.push(a),e.push({tag:`path`,attributes:P(P({},n),{},{opacity:`1`,d:`M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z`}),children:t?[]:[{tag:`animate`,attributes:P(P({},i),{},{values:`1;0;0;0;0;1;`})}]}),t||e.push({tag:`path`,attributes:P(P({},n),{},{opacity:`0`,d:`M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z`}),children:[{tag:`animate`,attributes:P(P({},i),{},{values:`0;0;1;1;0;0;`})}]}),{tag:`g`,attributes:{class:`missing`},children:e}}}},{hooks:function(){return{parseNodeAttributes:function(e,t){var n=t.getAttribute(`data-fa-symbol`);return e.symbol=n===null?!1:n===``||n,e}}}}],{mixoutsTo:Z}),Z.noAuto;var Ro=Z.config;Z.library,Z.dom;var zo=Z.parse;Z.findIconDefinition,Z.toHtml;var Bo=Z.icon;Z.layer;var Vo=Z.text;Z.counter;function Ho(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function Uo(e){if(Array.isArray(e))return Ho(e)}function Q(e,t,n){return(t=Zo(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Wo(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function Go(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ko(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function $(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?Ko(Object(n),!0).forEach(function(t){Q(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ko(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function qo(e,t){if(e==null)return{};var n,r,i=Jo(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function Jo(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function Yo(e){return Uo(e)||Wo(e)||$o(e)||Go()}function Xo(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function Zo(e){var t=Xo(e,`string`);return typeof t==`symbol`?t:t+``}function Qo(e){"@babel/helpers - typeof";return Qo=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},Qo(e)}function $o(e,t){if(e){if(typeof e==`string`)return Ho(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Ho(e,t):void 0}}function es(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Q({},e,t):{}}function ts(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip===`horizontal`||e.flip===`both`,"fa-flip-vertical":e.flip===`vertical`||e.flip===`both`},Q(Q(Q(Q(Q(Q(Q(Q(Q(Q(t,`fa-${e.size}`,e.size!==null),`fa-rotate-${e.rotation}`,e.rotation!==null),`fa-rotate-by`,e.rotateBy),`fa-pull-${e.pull}`,e.pull!==null),`fa-swap-opacity`,e.swapOpacity),`fa-bounce`,e.bounce),`fa-shake`,e.shake),`fa-beat`,e.beat),`fa-fade`,e.fade),`fa-beat-fade`,e.beatFade),Q(Q(Q(Q(Q(Q(Q(Q(Q(Q(t,`fa-flash`,e.flash),`fa-spin-pulse`,e.spinPulse),`fa-spin-reverse`,e.spinReverse),`fa-width-auto`,e.widthAuto),`fa-canvas-square`,e.canvasSquare),`fa-canvas-roomy`,e.canvasRoomy),`fa-flip-360`,e.flip360),`fa-buzz`,e.buzz),`fa-float`,e.float),`fa-jello`,e.jello),Q(Q(Q(Q(Q(t,`fa-spin-snap`,e.spinSnap),`fa-spin-snap-4`,e.spinSnap4),`fa-spin-snap-8`,e.spinSnap8),`fa-swing`,e.swing),`fa-wag`,e.wag));return Object.keys(n).map(function(e){return n[e]?e:null}).filter(function(e){return e})}var ns=typeof globalThis<`u`?globalThis:typeof window<`u`?window:typeof global<`u`?global:typeof self<`u`?self:{},rs={exports:{}};(function(e){(function(t){var n=function(e,t,r){if(!l(t)||d(t)||f(t)||p(t)||c(t))return t;var i,a=0,o=0;if(u(t))for(i=[],o=t.length;a<o;a++)i.push(n(e,t[a],r));else for(var s in i={},t)Object.prototype.hasOwnProperty.call(t,s)&&(i[e(s,r)]=n(e,t[s],r));return i},r=function(e,t){t||={};var n=t.separator||`_`,r=t.split||/(?=[A-Z])/;return e.split(r).join(n)},i=function(e){return m(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(e,t){return t?t.toUpperCase():``}),e.substr(0,1).toLowerCase()+e.substr(1))},a=function(e){var t=i(e);return t.substr(0,1).toUpperCase()+t.substr(1)},o=function(e,t){return r(e,t).toLowerCase()},s=Object.prototype.toString,c=function(e){return typeof e==`function`},l=function(e){return e===Object(e)},u=function(e){return s.call(e)==`[object Array]`},d=function(e){return s.call(e)==`[object Date]`},f=function(e){return s.call(e)==`[object RegExp]`},p=function(e){return s.call(e)==`[object Boolean]`},m=function(e){return e-=0,e===e},h=function(e,t){var n=t&&`process`in t?t.process:t;return typeof n==`function`?function(t,r){return n(t,e,r)}:e},g={camelize:i,decamelize:o,pascalize:a,depascalize:o,camelizeKeys:function(e,t){return n(h(i,t),e)},decamelizeKeys:function(e,t){return n(h(o,t),e,t)},pascalizeKeys:function(e,t){return n(h(a,t),e)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=g:t.humps=g})(ns)})(rs);var is=rs.exports,as=[`gradientFill`],os=[`class`,`style`],ss=[`type`,`stops`,`id`];function cs(e){return e.split(`;`).map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,t){var n=t.indexOf(`:`),r=is.camelize(t.slice(0,n));return e[r]=t.slice(n+1).trim(),e},{})}function ls(e){return e.split(/\s+/).reduce(function(e,t){return e[t]=!0,e},{})}function us(e,t){return S(`stop`,$({key:`${t}-${e.offset}`,offset:e.offset,"stop-color":e.color},e.opacity!==void 0&&{"stop-opacity":e.opacity}))}function ds(e){if(typeof e==`string`)return e;var t=(e.children||[]).map(ds);return e.tag===`path`&&e.attributes&&`fill`in e.attributes?$($({},e),{},{attributes:$($({},e.attributes),{},{fill:void 0}),children:t}):$($({},e),{},{children:t})}function fs(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e==`string`)return e;var r=t.gradientFill,i=r===void 0?null:r,a=qo(t,as),o=i||`fill`in n?ds(e):e,s=(o.children||[]).map(function(e){return fs(e,{},{})}),c=Object.keys(o.attributes||{}).reduce(function(e,t){var n=o.attributes[t];switch(t){case`class`:e.class=ls(n);break;case`style`:e.style=cs(n);break;default:e.attrs[t]=n}return e},{attrs:{},class:{},style:{}});n.class;var l=n.style,u=l===void 0?{}:l,d=qo(n,os);if(i&&i.id&&(i.type===`linear`||i.type===`radial`)){var f=i.type,p=i.stops,m=p===void 0?[]:p,h=i.id,g=qo(i,ss),_=S(f===`linear`?`linearGradient`:`radialGradient`,$($({},g),{},{id:h}),m.map(us));return S(o.tag,$($($($({},a),{},{class:c.class,style:$($({},c.style),u)},c.attrs),d),{},{fill:`url(#${h})`}),[_].concat(Yo(s)))}return S(e.tag,$($($({},a),{},{class:c.class,style:$($({},c.style),u)},c.attrs),d),s)}var ps=!1;try{ps=!0}catch{}function ms(){if(!ps&&console&&typeof console.error==`function`){var e;(e=console).error.apply(e,arguments)}}function hs(e){if(e&&Qo(e)===`object`&&e.prefix&&e.iconName&&e.icon)return e;if(zo.icon)return zo.icon(e);if(e===null)return null;if(Qo(e)===`object`&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e==`string`)return{prefix:`fas`,iconName:e}}var gs=T({name:`FontAwesomeIcon`,props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,`horizontal`,`vertical`,`both`].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return[`right`,`left`].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},rotateBy:{type:Boolean,default:!1},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return[`2xs`,`xs`,`sm`,`lg`,`xl`,`2xl`,`1x`,`2x`,`3x`,`4x`,`5x`,`6x`,`7x`,`8x`,`9x`,`10x`].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1},widthAuto:{type:Boolean,default:!1},canvasSquare:{type:Boolean,default:!1},canvasRoomy:{type:Boolean,default:!1},gradientFill:{type:Object,default:null,validator:function(e){return typeof e.id!=`string`||!e.id?(console.warn(`FontAwesomeIcon: gradientFill.id must be a non-empty string`),!1):e.type!==`linear`&&e.type!==`radial`?(console.warn(`FontAwesomeIcon: gradientFill.type must be "linear" or "radial"`),!1):!0}},flip360:{type:Boolean,default:!1},buzz:{type:Boolean,default:!1},float:{type:Boolean,default:!1},jello:{type:Boolean,default:!1},spinSnap:{type:Boolean,default:!1},spinSnap4:{type:Boolean,default:!1},spinSnap8:{type:Boolean,default:!1},swing:{type:Boolean,default:!1},wag:{type:Boolean,default:!1}},setup:function(e,t){var n=t.attrs,i=E(function(){return hs(e.icon)}),a=E(function(){return es(`classes`,ts(e))}),o=E(function(){return es(`transform`,typeof e.transform==`string`?zo.transform(e.transform):e.transform)}),s=E(function(){return es(`mask`,hs(e.mask))}),c=E(function(){var t=$($($($({},a.value),o.value),s.value),{},{symbol:e.symbol,maskId:e.maskId});return t.title=e.title,t.titleId=e.titleId,Bo(i.value,t)});r(c,function(e){if(!e)return ms(`Could not find one or more icon(s)`,i.value,s.value)},{immediate:!0}),e.gradientFill&&e.symbol&&ms(`gradientFill is not supported when symbol is true and will be ignored`);var l=E(function(){return c.value?fs(c.value.abstract[0],{gradientFill:e.symbol?null:e.gradientFill},n):null});return function(){return l.value}}});T({name:`FontAwesomeLayers`,props:{fixedWidth:{type:Boolean,default:!1}},setup:function(e,t){var n=t.slots,r=Ro.familyPrefix,i=E(function(){return[`${r}-layers`].concat(Yo(e.fixedWidth?[`${r}-fw`]:[]))});return function(){return S(`div`,{class:i.value},n.default?n.default():[])}}}),T({name:`FontAwesomeLayersText`,props:{value:{type:[String,Number],default:``},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(e){return[`bottom-left`,`bottom-right`,`top-left`,`top-right`].indexOf(e)>-1}}},setup:function(e,t){var n=t.attrs,r=Ro.familyPrefix,i=E(function(){return es(`classes`,[].concat(Yo(e.counter?[`${r}-layers-counter`]:[]),Yo(e.position?[`${r}-layers-${e.position}`]:[])))}),a=E(function(){return es(`transform`,typeof e.transform==`string`?zo.transform(e.transform):e.transform)}),o=E(function(){var t=Vo(e.value.toString(),$($({},a.value),i.value)).abstract;return e.counter&&(t[0].attributes.class=t[0].attributes.class.replace(`fa-layers-text`,``)),t[0]}),s=E(function(){return fs(o.value,{},n)});return function(){return s.value}}});var _s=[`white`,`disabled`,`title`],vs=ne({__name:`click`,props:{text:{type:String,default:``},white:{type:[Boolean,String],default:!1},disable:{type:[Boolean,String],default:!1},icon:{type:[String,Array,Object],default:null},spin:{type:Boolean,default:!1}},setup(e){return(t,n)=>(ae(),re(`comp-click`,{white:C(Ot)(e.white),disabled:C(Ot)(e.disable),title:e.text},[e.icon?(ae(),b(C(gs),{key:0,class:`inline icon`,icon:e.icon,spin:e.spin},null,8,[`icon`,`spin`])):w(``,!0),x(v(e.icon?` `:``)+v(e.text),1)],8,_s))}},[[`__scopeId`,`data-v-753b96cc`]]),ys={prefix:`fas`,iconName:`trophy`,icon:[512,512,[127942],`f091`,`M144.3 0l224 0c26.5 0 48.1 21.8 47.1 48.2-.2 5.3-.4 10.6-.7 15.8l49.6 0c26.1 0 49.1 21.6 47.1 49.8-7.5 103.7-60.5 160.7-118 190.5-15.8 8.2-31.9 14.3-47.2 18.8-20.2 28.6-41.2 43.7-57.9 51.8l0 73.1 64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-192 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0 0-73.1c-16-7.7-35.9-22-55.3-48.3-18.4-4.8-38.4-12.1-57.9-23.1-54.1-30.3-102.9-87.4-109.9-189.9-1.9-28.1 21-49.7 47.1-49.7l49.6 0c-.3-5.2-.5-10.4-.7-15.8-1-26.5 20.6-48.2 47.1-48.2zM101.5 112l-52.4 0c6.2 84.7 45.1 127.1 85.2 149.6-14.4-37.3-26.3-86-32.8-149.6zM380 256.8c40.5-23.8 77.1-66.1 83.3-144.8L411 112c-6.2 60.9-17.4 108.2-31 144.8z`]},bs={prefix:`fas`,iconName:`eye`,icon:[576,512,[128065],`f06e`,`M288 32c-80.8 0-145.5 36.8-192.6 80.6-46.8 43.5-78.1 95.4-93 131.1-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64-11.5 0-22.3-3-31.7-8.4-1 10.9-.1 22.1 2.9 33.2 13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-12.2-45.7-55.5-74.8-101.1-70.8 5.3 9.3 8.4 20.1 8.4 31.7z`]},xs={prefix:`fas`,iconName:`book`,icon:[448,512,[128212],`f02d`,`M384 512L96 512c-53 0-96-43-96-96L0 96C0 43 43 0 96 0L400 0c26.5 0 48 21.5 48 48l0 288c0 20.9-13.4 38.7-32 45.3l0 66.7c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0zM96 384c-17.7 0-32 14.3-32 32s14.3 32 32 32l256 0 0-64-256 0zm32-232c0 13.3 10.7 24 24 24l176 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-176 0c-13.3 0-24 10.7-24 24zm24 72c-13.3 0-24 10.7-24 24s10.7 24 24 24l176 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-176 0z`]},Ss={prefix:`fas`,iconName:`pen-ruler`,icon:[512,512,[`pencil-ruler`],`f5ae`,`M404 0c19.2 0 37.6 7.6 51.1 21.2l35.7 35.7C504.4 70.4 512 88.8 512 108s-7.6 37.6-21.2 51.1L445.9 204 308 66.1 352.9 21.2C366.4 7.6 384.8 0 404 0zM58.9 315.1L274.1 100 412 237.9 196.9 453.1c-10.7 10.7-24.1 18.5-38.7 22.6L30.4 511.1c-8.3 2.3-17.3 0-23.4-6.2s-8.5-15.1-6.2-23.4L36.4 353.8c4.1-14.6 11.8-27.9 22.6-38.7zM225.4 80.8L80.8 225.4 11.7 156.3c-15.6-15.6-15.6-40.9 0-56.6l88-88c15.6-15.6 40.9-15.6 56.6 0l5.9 5.9-56.3 56.3c-7.8 7.8-7.8 20.5 0 28.3s20.5 7.8 28.3 0l56.3-56.3 34.9 34.9zM431.2 286.6l34.9 34.9-56.3 56.3c-7.8 7.8-7.8 20.5 0 28.3s20.5 7.8 28.3 0l56.3-56.3 5.9 5.9c15.6 15.6 15.6 40.9 0 56.6l-88 88c-15.6 15.6-40.9 15.6-56.6 0l-69.1-69.1 144.6-144.6z`]},Cs={prefix:`fas`,iconName:`star-of-david`,icon:[512,512,[10017],`f69a`,`M415.9 311.9l-27.8 48.1 55.7 0-27.8-48.1zM383.6 256l-60.2-104-134.8 0-60.2 104 60.2 104 134.8 0 60.2-104zm64.7 0l58.4 100.9c3.5 6 5.3 12.8 5.3 19.7 0 21.7-17.6 39.4-39.4 39.4l-117 0-61.3 105.8C286.5 535.6 271.8 544 256 544s-30.5-8.4-38.4-22.2l-61.3-105.8-117 0c-21.7 0-39.4-17.6-39.4-39.4 0-6.9 1.8-13.7 5.3-19.7L63.7 256 5.3 155.1C1.8 149.1 0 142.3 0 135.4 0 113.6 17.6 96 39.4 96l117 0 61.3-105.8C225.5-23.6 240.2-32 256-32s30.5 8.4 38.4 22.2l61.3 105.8 117 0c21.7 0 39.4 17.6 39.4 39.4 0 6.9-1.8 13.7-5.3 19.7L448.3 256zM388.1 152l27.8 48.1 27.8-48.1-55.7 0zM291 96l-35-60.4-35 60.4 70 0zM123.9 152l-55.7 0 27.8 48.1 27.8-48.1zM96.1 311.9l-27.8 48.1 55.7 0-27.8-48.1zM221 416l35 60.4 35-60.4-70 0z`]},ws={prefix:`fas`,iconName:`baseball`,icon:[512,512,[129358,9918,`baseball-ball`],`f433`,`M232.4 1.1c-122.2 11.4-219.5 108.7-230.9 230.9 16.2-.1 32-1.8 47.2-5 13-2.7 25.7 5.5 28.4 18.5s-5.5 25.7-18.5 28.4c-18.4 3.9-37.6 6-57.1 6.1 11.4 122.2 108.7 219.5 230.9 230.9 .1-19.5 2.2-38.7 6.1-57.1 2.7-13 15.5-21.3 28.4-18.5s21.3 15.5 18.5 28.4c-3.2 15.2-4.9 31-5 47.2 122.2-11.4 219.5-108.7 230.9-230.9-16.2 .1-32 1.8-47.2 5-13 2.7-25.7-5.5-28.4-18.5s5.5-25.7 18.5-28.4c18.4-3.9 37.6-6 57.1-6.1-11.4-122.2-108.7-219.5-230.9-230.9-.1 19.5-2.2 38.7-6.1 57.1-2.7 13-15.5 21.3-28.4 18.5s-21.3-15.5-18.5-28.4c3.2-15.2 4.9-31 5-47.2zm2.8 151.4c-21.4 32.9-49.5 60.9-82.3 82.3-11.1 7.2-26 4.1-33.2-7s-4.1-26 7-33.2c27.2-17.7 50.5-41 68.3-68.3 7.2-11.1 22.1-14.3 33.2-7s14.3 22.1 7 33.2zM393.1 284.2c7.2 11.1 4.1 26-7 33.2-27.2 17.7-50.5 41-68.3 68.3-7.2 11.1-22.1 14.3-33.2 7s-14.3-22.1-7-33.2c21.4-32.9 49.5-60.9 82.3-82.3 11.1-7.2 26-4.1 33.2 7z`]},Ts={prefix:`fas`,iconName:`check`,icon:[448,512,[10003,10004],`f00c`,`M434.8 70.1c14.3 10.4 17.5 30.4 7.1 44.7l-256 352c-5.5 7.6-14 12.3-23.4 13.1s-18.5-2.7-25.1-9.3l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l101.5 101.5 234-321.7c10.4-14.3 30.4-17.5 44.7-7.1z`]},Es={prefix:`fas`,iconName:`angle-down`,icon:[384,512,[8964],`f107`,`M169.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 306.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z`]},Ds={prefix:`fas`,iconName:`rotate-left`,icon:[512,512,[`rotate-back`,`rotate-backward`,`undo-alt`],`f2ea`,`M24 192l144 0c9.7 0 18.5-5.8 22.2-14.8s1.7-19.3-5.2-26.2l-46.7-46.7c75.3-58.6 184.3-53.3 253.5 15.9 75 75 75 196.5 0 271.5s-196.5 75-271.5 0c-10.2-10.2-19-21.3-26.4-33-9.5-14.9-29.3-19.3-44.2-9.8s-19.3 29.3-9.8 44.2C49.7 408.7 61.4 423.5 75 437 175 537 337 537 437 437S537 175 437 75C342.8-19.3 193.3-24.7 92.7 58.8L41 7C34.1 .2 23.8-1.9 14.8 1.8S0 14.3 0 24L0 168c0 13.3 10.7 24 24 24z`]},Os={prefix:`fas`,iconName:`eye-slash`,icon:[576,512,[],`f070`,`M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-96.4-96.4c2.7-2.4 5.4-4.8 8-7.2 46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1-47.1-43.7-111.8-80.6-192.6-80.6-56.8 0-105.6 18.2-146 44.2L41-24.9zM204.5 138.7c23.5-16.8 52.4-26.7 83.5-26.7 79.5 0 144 64.5 144 144 0 31.1-9.9 59.9-26.7 83.5l-34.7-34.7c12.7-21.4 17-47.7 10.1-73.7-13.7-51.2-66.4-81.6-117.6-67.9-8.6 2.3-16.7 5.7-24 10l-34.7-34.7zM325.3 395.1c-11.9 3.2-24.4 4.9-37.3 4.9-79.5 0-144-64.5-144-144 0-12.9 1.7-25.4 4.9-37.3L69.4 139.2c-32.6 36.8-55 75.8-66.9 104.5-3.3 7.9-3.3 16.7 0 24.6 14.9 35.7 46.2 87.7 93 131.1 47.1 43.7 111.8 80.6 192.6 80.6 37.3 0 71.2-7.9 101.5-20.6l-64.2-64.2z`]},ks={prefix:`fas`,iconName:`angle-up`,icon:[384,512,[8963],`f106`,`M169.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L192 205.3 54.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z`]};export{_e as C,vt as S,wt as _,Ts as a,ke as b,Ss as c,ys as d,vs as f,Tt as g,Ot as h,xs as i,Ds as l,kt as m,ks as n,bs as o,gs as p,ws as r,Os as s,Es as t,Cs as u,pt as v,bt as x,ot as y};