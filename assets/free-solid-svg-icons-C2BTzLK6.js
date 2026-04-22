import{B as e,D as t,F as n,G as r,H as i,I as a,J as o,K as s,L as c,M as l,N as u,P as d,R as f,U as p,V as m,W as h,Z as g,a as _,c as v,d as y,f as b,h as x,j as S,l as C,m as w,o as T,q as E,t as ee,u as te,v as ne,x as re,z as ie}from"./_plugin-vue_export-helper-DP8cthO1.js";var ae=Object.create,oe=Object.defineProperty,se=Object.getOwnPropertyDescriptor,ce=Object.getOwnPropertyNames,le=Object.getPrototypeOf,ue=Object.prototype.hasOwnProperty,D=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),de=(e,t)=>{let n={};for(var r in e)oe(n,r,{get:e[r],enumerable:!0});return t||oe(n,Symbol.toStringTag,{value:`Module`}),n},fe=(e,t,n,r)=>{if(t&&typeof t==`object`||typeof t==`function`)for(var i=ce(t),a=0,o=i.length,s;a<o;a++)s=i[a],!ue.call(e,s)&&s!==n&&oe(e,s,{get:(e=>t[e]).bind(null,s),enumerable:!(r=se(t,s))||r.enumerable});return e},pe=(e,t,n)=>(n=e==null?{}:ae(le(e)),fe(t||!e||!e.__esModule?oe(n,`default`,{value:e,enumerable:!0}):n,e)),me=D(((e,t)=>{(function(n,r){typeof e==`object`&&t!==void 0?t.exports=r():typeof define==`function`&&define.amd?define(r):(n=typeof globalThis<`u`?globalThis:n||self).dayjs=r()})(e,(function(){var e=1e3,t=6e4,n=36e5,r=`millisecond`,i=`second`,a=`minute`,o=`hour`,s=`day`,c=`week`,l=`month`,u=`quarter`,d=`year`,f=`date`,p=`Invalid Date`,m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,h=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:`en`,weekdays:`Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday`.split(`_`),months:`January_February_March_April_May_June_July_August_September_October_November_December`.split(`_`),ordinal:function(e){var t=[`th`,`st`,`nd`,`rd`],n=e%100;return`[`+e+(t[(n-20)%10]||t[n]||t[0])+`]`}},_=function(e,t,n){var r=String(e);return!r||r.length>=t?e:``+Array(t+1-r.length).join(n)+e},v={s:_,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),i=n%60;return(t<=0?`+`:`-`)+_(r,2,`0`)+`:`+_(i,2,`0`)},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),i=t.clone().add(r,l),a=n-i<0,o=t.clone().add(r+(a?-1:1),l);return+(-(r+(n-i)/(a?i-o:o-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:l,y:d,w:c,d:s,D:f,h:o,m:a,s:i,ms:r,Q:u}[e]||String(e||``).toLowerCase().replace(/s$/,``)},u:function(e){return e===void 0}},y=`en`,b={};b[y]=g;var x=`$isDayjsObject`,S=function(e){return e instanceof E||!(!e||!e[x])},C=function e(t,n,r){var i;if(!t)return y;if(typeof t==`string`){var a=t.toLowerCase();b[a]&&(i=a),n&&(b[a]=n,i=a);var o=t.split(`-`);if(!i&&o.length>1)return e(o[0])}else{var s=t.name;b[s]=t,i=s}return!r&&i&&(y=i),i||!r&&y},w=function(e,t){if(S(e))return e.clone();var n=typeof t==`object`?t:{};return n.date=e,n.args=arguments,new E(n)},T=v;T.l=C,T.i=S,T.w=function(e,t){return w(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var E=function(){function g(e){this.$L=C(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[x]=!0}var _=g.prototype;return _.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(t===null)return new Date(NaN);if(T.u(t))return new Date;if(t instanceof Date)return new Date(t);if(typeof t==`string`&&!/Z$/i.test(t)){var r=t.match(m);if(r){var i=r[2]-1||0,a=(r[7]||`0`).substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,a)}}return new Date(t)}(e),this.init()},_.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},_.$utils=function(){return T},_.isValid=function(){return this.$d.toString()!==p},_.isSame=function(e,t){var n=w(e);return this.startOf(t)<=n&&n<=this.endOf(t)},_.isAfter=function(e,t){return w(e)<this.startOf(t)},_.isBefore=function(e,t){return this.endOf(t)<w(e)},_.$g=function(e,t,n){return T.u(e)?this[t]:this.set(n,e)},_.unix=function(){return Math.floor(this.valueOf()/1e3)},_.valueOf=function(){return this.$d.getTime()},_.startOf=function(e,t){var n=this,r=!!T.u(t)||t,u=T.p(e),p=function(e,t){var i=T.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?i:i.endOf(s)},m=function(e,t){return T.w(n.toDate()[e].apply(n.toDate(`s`),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},h=this.$W,g=this.$M,_=this.$D,v=`set`+(this.$u?`UTC`:``);switch(u){case d:return r?p(1,0):p(31,11);case l:return r?p(1,g):p(0,g+1);case c:var y=this.$locale().weekStart||0,b=(h<y?h+7:h)-y;return p(r?_-b:_+(6-b),g);case s:case f:return m(v+`Hours`,0);case o:return m(v+`Minutes`,1);case a:return m(v+`Seconds`,2);case i:return m(v+`Milliseconds`,3);default:return this.clone()}},_.endOf=function(e){return this.startOf(e,!1)},_.$set=function(e,t){var n,c=T.p(e),u=`set`+(this.$u?`UTC`:``),p=(n={},n[s]=u+`Date`,n[f]=u+`Date`,n[l]=u+`Month`,n[d]=u+`FullYear`,n[o]=u+`Hours`,n[a]=u+`Minutes`,n[i]=u+`Seconds`,n[r]=u+`Milliseconds`,n)[c],m=c===s?this.$D+(t-this.$W):t;if(c===l||c===d){var h=this.clone().set(f,1);h.$d[p](m),h.init(),this.$d=h.set(f,Math.min(this.$D,h.daysInMonth())).$d}else p&&this.$d[p](m);return this.init(),this},_.set=function(e,t){return this.clone().$set(e,t)},_.get=function(e){return this[T.p(e)]()},_.add=function(r,u){var f,p=this;r=Number(r);var m=T.p(u),h=function(e){var t=w(p);return T.w(t.date(t.date()+Math.round(e*r)),p)};if(m===l)return this.set(l,this.$M+r);if(m===d)return this.set(d,this.$y+r);if(m===s)return h(1);if(m===c)return h(7);var g=(f={},f[a]=t,f[o]=n,f[i]=e,f)[m]||1,_=this.$d.getTime()+r*g;return T.w(_,this)},_.subtract=function(e,t){return this.add(-1*e,t)},_.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||p;var r=e||`YYYY-MM-DDTHH:mm:ssZ`,i=T.z(this),a=this.$H,o=this.$m,s=this.$M,c=n.weekdays,l=n.months,u=n.meridiem,d=function(e,n,i,a){return e&&(e[n]||e(t,r))||i[n].slice(0,a)},f=function(e){return T.s(a%12||12,e,`0`)},m=u||function(e,t,n){var r=e<12?`AM`:`PM`;return n?r.toLowerCase():r};return r.replace(h,(function(e,r){return r||function(e){switch(e){case`YY`:return String(t.$y).slice(-2);case`YYYY`:return T.s(t.$y,4,`0`);case`M`:return s+1;case`MM`:return T.s(s+1,2,`0`);case`MMM`:return d(n.monthsShort,s,l,3);case`MMMM`:return d(l,s);case`D`:return t.$D;case`DD`:return T.s(t.$D,2,`0`);case`d`:return String(t.$W);case`dd`:return d(n.weekdaysMin,t.$W,c,2);case`ddd`:return d(n.weekdaysShort,t.$W,c,3);case`dddd`:return c[t.$W];case`H`:return String(a);case`HH`:return T.s(a,2,`0`);case`h`:return f(1);case`hh`:return f(2);case`a`:return m(a,o,!0);case`A`:return m(a,o,!1);case`m`:return String(o);case`mm`:return T.s(o,2,`0`);case`s`:return String(t.$s);case`ss`:return T.s(t.$s,2,`0`);case`SSS`:return T.s(t.$ms,3,`0`);case`Z`:return i}return null}(e)||i.replace(`:`,``)}))},_.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},_.diff=function(r,f,p){var m,h=this,g=T.p(f),_=w(r),v=(_.utcOffset()-this.utcOffset())*t,y=this-_,b=function(){return T.m(h,_)};switch(g){case d:m=b()/12;break;case l:m=b();break;case u:m=b()/3;break;case c:m=(y-v)/6048e5;break;case s:m=(y-v)/864e5;break;case o:m=y/n;break;case a:m=y/t;break;case i:m=y/e;break;default:m=y}return p?m:T.a(m)},_.daysInMonth=function(){return this.endOf(l).$D},_.$locale=function(){return b[this.$L]},_.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=C(e,t,!0);return r&&(n.$L=r),n},_.clone=function(){return T.w(this.$d,this)},_.toDate=function(){return new Date(this.valueOf())},_.toJSON=function(){return this.isValid()?this.toISOString():null},_.toISOString=function(){return this.$d.toISOString()},_.toString=function(){return this.$d.toUTCString()},g}(),ee=E.prototype;return w.prototype=ee,[[`$ms`,r],[`$s`,i],[`$m`,a],[`$H`,o],[`$W`,s],[`$M`,l],[`$y`,d],[`$D`,f]].forEach((function(e){ee[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),w.extend=function(e,t){return e.$i||=(e(t,E,w),!0),w},w.locale=C,w.isDayjs=S,w.unix=function(e){return w(1e3*e)},w.en=b[y],w.Ls=b,w.p={},w}))})),he=D(((e,t)=>{(function(n,r){typeof e==`object`&&t!==void 0?t.exports=r(me()):typeof define==`function`&&define.amd?define([`dayjs`],r):(n=typeof globalThis<`u`?globalThis:n||self).dayjs_locale_zh_cn=r(n.dayjs)})(e,(function(e){function t(e){return e&&typeof e==`object`&&`default`in e?e:{default:e}}var n=t(e),r={name:`zh-cn`,weekdays:`星期日_星期一_星期二_星期三_星期四_星期五_星期六`.split(`_`),weekdaysShort:`周日_周一_周二_周三_周四_周五_周六`.split(`_`),weekdaysMin:`日_一_二_三_四_五_六`.split(`_`),months:`一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月`.split(`_`),monthsShort:`1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月`.split(`_`),ordinal:function(e,t){return t===`W`?e+`周`:e+`日`},weekStart:1,yearStart:4,formats:{LT:`HH:mm`,LTS:`HH:mm:ss`,L:`YYYY/MM/DD`,LL:`YYYY年M月D日`,LLL:`YYYY年M月D日Ah点mm分`,LLLL:`YYYY年M月D日ddddAh点mm分`,l:`YYYY/M/D`,ll:`YYYY年M月D日`,lll:`YYYY年M月D日 HH:mm`,llll:`YYYY年M月D日dddd HH:mm`},relativeTime:{future:`%s内`,past:`%s前`,s:`几秒`,m:`1 分钟`,mm:`%d 分钟`,h:`1 小时`,hh:`%d 小时`,d:`1 天`,dd:`%d 天`,M:`1 个月`,MM:`%d 个月`,y:`1 年`,yy:`%d 年`},meridiem:function(e,t){var n=100*e+t;return n<600?`凌晨`:n<900?`早上`:n<1100?`上午`:n<1300?`中午`:n<1800?`下午`:`晚上`}};return n.default.locale(r,null,!0),r}))})),ge=D(((e,t)=>{(function(n,r){typeof e==`object`&&t!==void 0?t.exports=r():typeof define==`function`&&define.amd?define(r):(n=typeof globalThis<`u`?globalThis:n||self).dayjs_plugin_customParseFormat=r()})(e,(function(){var e={LTS:`h:mm:ss A`,LT:`h:mm A`,L:`MM/DD/YYYY`,LL:`MMMM D, YYYY`,LLL:`MMMM D, YYYY h:mm A`,LLLL:`dddd, MMMM D, YYYY h:mm A`},t=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d/,r=/\d\d/,i=/\d\d?/,a=/\d*[^-_:/,()\s\d]+/,o={},s=function(e){return(e=+e)+(e>68?1900:2e3)},c=function(e){return function(t){this[e]=+t}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(e){(this.zone||={}).offset=function(e){if(!e||e===`Z`)return 0;var t=e.match(/([+-]|\d\d)/g),n=60*t[1]+(+t[2]||0);return n===0?0:t[0]===`+`?-n:n}(e)}],u=function(e){var t=o[e];return t&&(t.indexOf?t:t.s.concat(t.f))},d=function(e,t){var n,r=o.meridiem;if(r){for(var i=1;i<=24;i+=1)if(e.indexOf(r(i,0,t))>-1){n=i>12;break}}else n=e===(t?`pm`:`PM`);return n},f={A:[a,function(e){this.afternoon=d(e,!1)}],a:[a,function(e){this.afternoon=d(e,!0)}],Q:[n,function(e){this.month=3*(e-1)+1}],S:[n,function(e){this.milliseconds=100*e}],SS:[r,function(e){this.milliseconds=10*e}],SSS:[/\d{3}/,function(e){this.milliseconds=+e}],s:[i,c(`seconds`)],ss:[i,c(`seconds`)],m:[i,c(`minutes`)],mm:[i,c(`minutes`)],H:[i,c(`hours`)],h:[i,c(`hours`)],HH:[i,c(`hours`)],hh:[i,c(`hours`)],D:[i,c(`day`)],DD:[r,c(`day`)],Do:[a,function(e){var t=o.ordinal,n=e.match(/\d+/);if(this.day=n[0],t)for(var r=1;r<=31;r+=1)t(r).replace(/\[|\]/g,``)===e&&(this.day=r)}],w:[i,c(`week`)],ww:[r,c(`week`)],M:[i,c(`month`)],MM:[r,c(`month`)],MMM:[a,function(e){var t=u(`months`),n=(u(`monthsShort`)||t.map((function(e){return e.slice(0,3)}))).indexOf(e)+1;if(n<1)throw Error();this.month=n%12||n}],MMMM:[a,function(e){var t=u(`months`).indexOf(e)+1;if(t<1)throw Error();this.month=t%12||t}],Y:[/[+-]?\d+/,c(`year`)],YY:[r,function(e){this.year=s(e)}],YYYY:[/\d{4}/,c(`year`)],Z:l,ZZ:l};function p(n){for(var r=n,i=o&&o.formats,a=(n=r.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,(function(t,n,r){var a=r&&r.toUpperCase();return n||i[r]||e[r]||i[a].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,(function(e,t,n){return t||n.slice(1)}))}))).match(t),s=a.length,c=0;c<s;c+=1){var l=a[c],u=f[l],d=u&&u[0],p=u&&u[1];a[c]=p?{regex:d,parser:p}:l.replace(/^\[|\]$/g,``)}return function(e){for(var t={},n=0,r=0;n<s;n+=1){var i=a[n];if(typeof i==`string`)r+=i.length;else{var o=i.regex,c=i.parser,l=e.slice(r),u=o.exec(l)[0];c.call(t,u),e=e.replace(u,``)}}return function(e){var t=e.afternoon;if(t!==void 0){var n=e.hours;t?n<12&&(e.hours+=12):n===12&&(e.hours=0),delete e.afternoon}}(t),t}}return function(e,t,n){n.p.customParseFormat=!0,e&&e.parseTwoDigitYear&&(s=e.parseTwoDigitYear);var r=t.prototype,i=r.parse;r.parse=function(e){var t=e.date,r=e.utc,a=e.args;this.$u=r;var s=a[1];if(typeof s==`string`){var c=!0===a[2],l=!0===a[3],u=c||l,d=a[2];l&&(d=a[2]),o=this.$locale(),!c&&d&&(o=n.Ls[d]),this.$d=function(e,t,n,r){try{if([`x`,`X`].indexOf(t)>-1)return new Date((t===`X`?1e3:1)*e);var i=p(t)(e),a=i.year,o=i.month,s=i.day,c=i.hours,l=i.minutes,u=i.seconds,d=i.milliseconds,f=i.zone,m=i.week,h=new Date,g=s||(a||o?1:h.getDate()),_=a||h.getFullYear(),v=0;a&&!o||(v=o>0?o-1:h.getMonth());var y,b=c||0,x=l||0,S=u||0,C=d||0;return f?new Date(Date.UTC(_,v,g,b,x,S,C+60*f.offset*1e3)):n?new Date(Date.UTC(_,v,g,b,x,S,C)):(y=new Date(_,v,g,b,x,S,C),m&&(y=r(y).week(m).toDate()),y)}catch{return new Date(``)}}(t,s,r,n),this.init(),d&&!0!==d&&(this.$L=this.locale(d).$L),u&&t!=this.format(s)&&(this.$d=new Date(``)),o={}}else if(s instanceof Array)for(var f=s.length,m=1;m<=f;m+=1){a[1]=s[m-1];var h=n.apply(this,a);if(h.isValid()){this.$d=h.$d,this.$L=h.$L,this.init();break}m===f&&(this.$d=new Date(``))}else i.call(this,e)}}}))})),_e=D(((e,t)=>{(function(n,r){typeof e==`object`&&t!==void 0?t.exports=r():typeof define==`function`&&define.amd?define(r):(n=typeof globalThis<`u`?globalThis:n||self).dayjs_plugin_relativeTime=r()})(e,(function(){return function(e,t,n){e||={};var r=t.prototype,i={future:`in %s`,past:`%s ago`,s:`a few seconds`,m:`a minute`,mm:`%d minutes`,h:`an hour`,hh:`%d hours`,d:`a day`,dd:`%d days`,M:`a month`,MM:`%d months`,y:`a year`,yy:`%d years`};function a(e,t,n,i){return r.fromToBase(e,t,n,i)}n.en.relativeTime=i,r.fromToBase=function(t,r,a,o,s){for(var c,l,u,d=a.$locale().relativeTime||i,f=e.thresholds||[{l:`s`,r:44,d:`second`},{l:`m`,r:89},{l:`mm`,r:44,d:`minute`},{l:`h`,r:89},{l:`hh`,r:21,d:`hour`},{l:`d`,r:35},{l:`dd`,r:25,d:`day`},{l:`M`,r:45},{l:`MM`,r:10,d:`month`},{l:`y`,r:17},{l:`yy`,d:`year`}],p=f.length,m=0;m<p;m+=1){var h=f[m];h.d&&(c=o?n(t).diff(a,h.d,!0):a.diff(t,h.d,!0));var g=(e.rounding||Math.round)(Math.abs(c));if(u=c>0,g<=h.r||!h.r){g<=1&&m>0&&(h=f[m-1]);var _=d[h.l];s&&(g=s(``+g)),l=typeof _==`string`?_.replace(`%d`,g):_(g,r,h.l,u);break}}if(r)return l;var v=u?d.future:d.past;return typeof v==`function`?v(l):v.replace(`%s`,l)},r.to=function(e,t){return a(e,t,this,!0)},r.from=function(e,t){return a(e,t,this)};var o=function(e){return e.$u?n.utc():n()};r.toNow=function(e){return this.to(o(this),e)},r.fromNow=function(e){return this.from(o(this),e)}}}))})),ve=D(((e,t)=>{(function(n,r){typeof e==`object`&&t!==void 0?t.exports=r():typeof define==`function`&&define.amd?define(r):(n=typeof globalThis<`u`?globalThis:n||self).dayjs_plugin_isBetween=r()})(e,(function(){return function(e,t,n){t.prototype.isBetween=function(e,t,r,i){var a=n(e),o=n(t),s=(i||=`()`)[0]===`(`,c=i[1]===`)`;return(s?this.isAfter(a,r):!this.isBefore(a,r))&&(c?this.isBefore(o,r):!this.isAfter(o,r))||(s?this.isBefore(a,r):!this.isAfter(a,r))&&(c?this.isAfter(o,r):!this.isBefore(o,r))}}}))})),ye=D(((e,t)=>{(function(n,r){typeof e==`object`&&t!==void 0?t.exports=r():typeof define==`function`&&define.amd?define(r):(n=typeof globalThis<`u`?globalThis:n||self).dayjs_plugin_weekday=r()})(e,(function(){return function(e,t){t.prototype.weekday=function(e){var t=this.$locale().weekStart||0,n=this.$W,r=(n<t?n+7:n)-t;return this.$utils().u(e)?r:this.subtract(r,`day`).add(e,`day`)}}}))})),O=pe(me(),1);he();var be=pe(ge(),1),xe=pe(_e(),1),Se=pe(ve(),1),Ce=pe(ye(),1);O.default.extend(be.default),O.default.extend(xe.default),O.default.extend(Se.default),O.default.extend(Ce.default),O.default.locale(`zh-cn`),O.default.prototype.defaultFormat=`YYYY-MM-DD HH:mm:ss`,O.default.prototype.formatRaw=O.default.prototype.format,O.default.prototype.format=function(e=this.defaultFormat){return this.formatRaw(e||this.defaultFormat)};var we=O.default,Te=void 0,Ee=typeof window<`u`&&window.trustedTypes;if(Ee)try{Te=Ee.createPolicy(`vue`,{createHTML:e=>e})}catch{}var De=Te?e=>Te.createHTML(e):e=>e,Oe=`http://www.w3.org/2000/svg`,ke=`http://www.w3.org/1998/Math/MathML`,k=typeof document<`u`?document:null,Ae=k&&k.createElement(`template`),je={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{let t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{let i=t===`svg`?k.createElementNS(Oe,e):t===`mathml`?k.createElementNS(ke,e):n?k.createElement(e,{is:n}):k.createElement(e);return e===`select`&&r&&r.multiple!=null&&i.setAttribute(`multiple`,r.multiple),i},createText:e=>k.createTextNode(e),createComment:e=>k.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>k.querySelector(e),setScopeId(e,t){e.setAttribute(t,``)},insertStaticContent(e,t,n,r,i,a){let o=n?n.previousSibling:t.lastChild;if(i&&(i===a||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===a||!(i=i.nextSibling)););else{Ae.innerHTML=De(r===`svg`?`<svg>${e}</svg>`:r===`mathml`?`<math>${e}</math>`:e);let i=Ae.content;if(r===`svg`||r===`mathml`){let e=i.firstChild;for(;e.firstChild;)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Me=Symbol(`_vtc`);function Ne(e,t,n){let r=e[Me];r&&(t=(t?[t,...r]:[...r]).join(` `)),t==null?e.removeAttribute(`class`):n?e.setAttribute(`class`,t):e.className=t}var Pe=Symbol(`_vod`),Fe=Symbol(`_vsh`),Ie={name:`show`,beforeMount(e,{value:t},{transition:n}){e[Pe]=e.style.display===`none`?``:e.style.display,n&&t?n.beforeEnter(e):Le(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!=!n&&(r?t?(r.beforeEnter(e),Le(e,!0),r.enter(e)):r.leave(e,()=>{Le(e,!1)}):Le(e,t))},beforeUnmount(e,{value:t}){Le(e,t)}};function Le(e,t){e.style.display=t?e[Pe]:`none`,e[Fe]=!t}var Re=Symbol(``),ze=/(?:^|;)\s*display\s*:/;function Be(e,t,n){let r=e.style,i=h(n),a=!1;if(n&&!i){if(t)if(h(t))for(let e of t.split(`;`)){let t=e.slice(0,e.indexOf(`:`)).trim();n[t]??He(r,t,``)}else for(let e in t)n[e]??He(r,e,``);for(let e in n)e===`display`&&(a=!0),He(r,e,n[e])}else if(i){if(t!==n){let e=r[Re];e&&(n+=`;`+e),r.cssText=n,a=ze.test(n)}}else t&&e.removeAttribute(`style`);Pe in e&&(e[Pe]=a?r.display:``,e[Fe]&&(r.display=`none`))}var Ve=/\s*!important$/;function He(e,t,r){if(f(r))r.forEach(n=>He(e,t,n));else if(r??=``,t.startsWith(`--`))e.setProperty(t,r);else{let i=Ge(e,t);Ve.test(r)?e.setProperty(n(i),r.replace(Ve,``),`important`):e[i]=r}}var Ue=[`Webkit`,`Moz`,`ms`],We={};function Ge(e,t){let n=We[t];if(n)return n;let r=l(t);if(r!==`filter`&&r in e)return We[t]=r;r=u(r);for(let n=0;n<Ue.length;n++){let i=Ue[n]+r;if(i in e)return We[t]=i}return t}var Ke=`http://www.w3.org/1999/xlink`;function qe(e,t,n,i,o,s=p(t)){i&&t.startsWith(`xlink:`)?n==null?e.removeAttributeNS(Ke,t.slice(6,t.length)):e.setAttributeNS(Ke,t,n):n==null||s&&!a(n)?e.removeAttribute(t):e.setAttribute(t,s?``:r(n)?String(n):n)}function Je(e,t,n,r,i){if(t===`innerHTML`||t===`textContent`){n!=null&&(e[t]=t===`innerHTML`?De(n):n);return}let o=e.tagName;if(t===`value`&&o!==`PROGRESS`&&!o.includes(`-`)){let r=o===`OPTION`?e.getAttribute(`value`)||``:e.value,i=n==null?e.type===`checkbox`?`on`:``:String(n);(r!==i||!(`_value`in e))&&(e.value=i),n??e.removeAttribute(t),e._value=n;return}let s=!1;if(n===``||n==null){let r=typeof e[t];r===`boolean`?n=a(n):n==null&&r===`string`?(n=``,s=!0):r===`number`&&(n=0,s=!0)}try{e[t]=n}catch{}s&&e.removeAttribute(i||t)}function A(e,t,n,r){e.addEventListener(t,n,r)}function Ye(e,t,n,r){e.removeEventListener(t,n,r)}var Xe=Symbol(`_vei`);function Ze(e,t,n,r,i=null){let a=e[Xe]||(e[Xe]={}),o=a[t];if(r&&o)o.value=r;else{let[n,s]=$e(t);r?A(e,n,a[t]=rt(r,i),s):o&&(Ye(e,n,o,s),a[t]=void 0)}}var Qe=/(?:Once|Passive|Capture)$/;function $e(e){let t;if(Qe.test(e)){t={};let n;for(;n=e.match(Qe);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[e[2]===`:`?e.slice(3):n(e.slice(2)),t]}var et=0,tt=Promise.resolve(),nt=()=>et||=(tt.then(()=>et=0),Date.now());function rt(e,t){let n=e=>{if(!e._vts)e._vts=Date.now();else if(e._vts<=n.attached)return;_(it(e,n.value),t,5,[e])};return n.value=e,n.attached=nt(),n}function it(e,t){if(f(t)){let n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(e=>t=>!t._stopped&&e&&e(t))}else return t}var at=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,ot=(t,n,r,i,a,o)=>{let s=a===`svg`;n===`class`?Ne(t,i,s):n===`style`?Be(t,r,i):m(n)?e(n)||Ze(t,n,r,i,o):(n[0]===`.`?(n=n.slice(1),!0):n[0]===`^`?(n=n.slice(1),!1):st(t,n,i,s))?(Je(t,n,i),!t.tagName.includes(`-`)&&(n===`value`||n===`checked`||n===`selected`)&&qe(t,n,i,s,o,n!==`value`)):t._isVueCE&&(ct(t,n)||t._def.__asyncLoader&&(/[A-Z]/.test(n)||!h(i)))?Je(t,l(n),i,o,n):(n===`true-value`?t._trueValue=i:n===`false-value`&&(t._falseValue=i),qe(t,n,i,s))};function st(e,t,n,r){if(r)return!!(t===`innerHTML`||t===`textContent`||t in e&&at(t)&&ie(n));if(t===`spellcheck`||t===`draggable`||t===`translate`||t===`autocorrect`||t===`sandbox`&&e.tagName===`IFRAME`||t===`form`||t===`list`&&e.tagName===`INPUT`||t===`type`&&e.tagName===`TEXTAREA`)return!1;if(t===`width`||t===`height`){let t=e.tagName;if(t===`IMG`||t===`VIDEO`||t===`CANVAS`||t===`SOURCE`)return!1}return at(t)&&h(n)?!1:t in e}function ct(e,t){let n=e._def.props;if(!n)return!1;let r=l(t);return Array.isArray(n)?n.some(e=>l(e)===r):Object.keys(n).some(e=>l(e)===r)}var j=e=>{let t=e.props[`onUpdate:modelValue`]||!1;return f(t)?e=>c(t,e):t};function lt(e){e.target.composing=!0}function ut(e){let t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event(`input`)))}var M=Symbol(`_assign`);function dt(e,t,n){return t&&(e=e.trim()),n&&(e=o(e)),e}var ft={created(e,{modifiers:{lazy:t,trim:n,number:r}},i){e[M]=j(i);let a=r||i.props&&i.props.type===`number`;A(e,t?`change`:`input`,t=>{t.target.composing||e[M](dt(e.value,n,a))}),(n||a)&&A(e,`change`,()=>{e.value=dt(e.value,n,a)}),t||(A(e,`compositionstart`,lt),A(e,`compositionend`,ut),A(e,`change`,ut))},mounted(e,{value:t}){e.value=t??``},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:r,trim:i,number:a}},s){if(e[M]=j(s),e.composing)return;let c=(a||e.type===`number`)&&!/^0\d/.test(e.value)?o(e.value):e.value,l=t??``;if(c===l)return;let u=e.getRootNode();(u instanceof Document||u instanceof ShadowRoot)&&u.activeElement===e&&e.type!==`range`&&(r&&t===n||i&&e.value.trim()===l)||(e.value=l)}},pt={deep:!0,created(e,t,n){e[M]=j(n),A(e,`change`,()=>{let t=e._modelValue,n=vt(e),r=e.checked,a=e[M];if(f(t)){let e=E(t,n),i=e!==-1;if(r&&!i)a(t.concat(n));else if(!r&&i){let n=[...t];n.splice(e,1),a(n)}}else if(i(t)){let e=new Set(t);r?e.add(n):e.delete(n),a(e)}else a(yt(e,r))})},mounted:mt,beforeUpdate(e,t,n){e[M]=j(n),mt(e,t,n)}};function mt(e,{value:t,oldValue:n},r){e._modelValue=t;let a;if(f(t))a=E(t,r.props.value)>-1;else if(i(t))a=t.has(r.props.value);else{if(t===n)return;a=s(t,yt(e,!0))}e.checked!==a&&(e.checked=a)}var ht={created(e,{value:t},n){e.checked=s(t,n.props.value),e[M]=j(n),A(e,`change`,()=>{e[M](vt(e))})},beforeUpdate(e,{value:t,oldValue:n},r){e[M]=j(r),t!==n&&(e.checked=s(t,r.props.value))}},gt={deep:!0,created(e,{value:t,modifiers:{number:n}},r){let a=i(t);A(e,`change`,()=>{let t=Array.prototype.filter.call(e.options,e=>e.selected).map(e=>n?o(vt(e)):vt(e));e[M](e.multiple?a?new Set(t):t:t[0]),e._assigning=!0,ne(()=>{e._assigning=!1})}),e[M]=j(r)},mounted(e,{value:t}){_t(e,t)},beforeUpdate(e,t,n){e[M]=j(n)},updated(e,{value:t}){e._assigning||_t(e,t)}};function _t(e,t){let n=e.multiple,r=f(t);if(!(n&&!r&&!i(t))){for(let i=0,a=e.options.length;i<a;i++){let a=e.options[i],o=vt(a);if(n)if(r){let e=typeof o;e===`string`||e===`number`?a.selected=t.some(e=>String(e)===String(o)):a.selected=E(t,o)>-1}else a.selected=t.has(o);else if(s(vt(a),t)){e.selectedIndex!==i&&(e.selectedIndex=i);return}}!n&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function vt(e){return`_value`in e?e._value:e.value}function yt(e,t){let n=t?`_trueValue`:`_falseValue`;return n in e?e[n]:t}var bt={created(e,t,n){St(e,t,n,null,`created`)},mounted(e,t,n){St(e,t,n,null,`mounted`)},beforeUpdate(e,t,n,r){St(e,t,n,r,`beforeUpdate`)},updated(e,t,n,r){St(e,t,n,r,`updated`)}};function xt(e,t){switch(e){case`SELECT`:return gt;case`TEXTAREA`:return ft;default:switch(t){case`checkbox`:return pt;case`radio`:return ht;default:return ft}}}function St(e,t,n,r,i){let a=xt(e.tagName,n.props&&n.props.type)[i];a&&a(e,t,n,r)}var Ct=[`ctrl`,`shift`,`alt`,`meta`],wt={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>`button`in e&&e.button!==0,middle:e=>`button`in e&&e.button!==1,right:e=>`button`in e&&e.button!==2,exact:(e,t)=>Ct.some(n=>e[`${n}Key`]&&!t.includes(n))},Tt=(e,t)=>{if(!e)return e;let n=e._withMods||={},r=t.join(`.`);return n[r]||(n[r]=((n,...r)=>{for(let e=0;e<t.length;e++){let r=wt[t[e]];if(r&&r(n,t))return}return e(n,...r)}))},Et={esc:`escape`,space:` `,up:`arrow-up`,left:`arrow-left`,right:`arrow-right`,down:`arrow-down`,delete:`backspace`},Dt=(e,t)=>{let r=e._withKeys||={},i=t.join(`.`);return r[i]||(r[i]=(r=>{if(!(`key`in r))return;let i=n(r.key);if(t.some(e=>e===i||Et[e]===i))return e(r)}))},Ot=d({patchProp:ot},je),kt;function At(){return kt||=y(Ot)}var jt=((...e)=>{At().render(...e)}),Mt=((...e)=>{let t=At().createApp(...e),{mount:n}=t;return t.mount=e=>{let r=Pt(e);if(!r)return;let i=t._component;!ie(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent=``);let a=n(r,!1,Nt(r));return r instanceof Element&&(r.removeAttribute(`v-cloak`),r.setAttribute(`data-v-app`,``)),a},t});function Nt(e){if(e instanceof SVGElement)return`svg`;if(typeof MathMLElement==`function`&&e instanceof MathMLElement)return`mathml`}function Pt(e){return h(e)?document.querySelector(e):e}var Ft=e=>e?``:void 0,It=e=>e!==!1;function Lt(e,t,n){return(t=Bt(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Rt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?Rt(Object(n),!0).forEach(function(t){Lt(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Rt(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function zt(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function Bt(e){var t=zt(e,`string`);return typeof t==`symbol`?t:t+``}var Vt=()=>{},Ht={},Ut={},Wt=null,Gt={mark:Vt,measure:Vt};try{typeof window<`u`&&(Ht=window),typeof document<`u`&&(Ut=document),typeof MutationObserver<`u`&&(Wt=MutationObserver),typeof performance<`u`&&(Gt=performance)}catch{}var{userAgent:Kt=``}=Ht.navigator||{},P=Ht,F=Ut,qt=Wt,Jt=Gt;P.document;var I=!!F.documentElement&&!!F.head&&typeof F.addEventListener==`function`&&typeof F.createElement==`function`,Yt=~Kt.indexOf(`MSIE`)||~Kt.indexOf(`Trident/`),Xt=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,Zt=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,Qt={classic:{fa:`solid`,fas:`solid`,"fa-solid":`solid`,far:`regular`,"fa-regular":`regular`,fal:`light`,"fa-light":`light`,fat:`thin`,"fa-thin":`thin`,fab:`brands`,"fa-brands":`brands`},duotone:{fa:`solid`,fad:`solid`,"fa-solid":`solid`,"fa-duotone":`solid`,fadr:`regular`,"fa-regular":`regular`,fadl:`light`,"fa-light":`light`,fadt:`thin`,"fa-thin":`thin`},sharp:{fa:`solid`,fass:`solid`,"fa-solid":`solid`,fasr:`regular`,"fa-regular":`regular`,fasl:`light`,"fa-light":`light`,fast:`thin`,"fa-thin":`thin`},"sharp-duotone":{fa:`solid`,fasds:`solid`,"fa-solid":`solid`,fasdr:`regular`,"fa-regular":`regular`,fasdl:`light`,"fa-light":`light`,fasdt:`thin`,"fa-thin":`thin`}},$t={GROUP:`duotone-group`,SWAP_OPACITY:`swap-opacity`,PRIMARY:`primary`,SECONDARY:`secondary`},en=[`fa-classic`,`fa-duotone`,`fa-sharp`,`fa-sharp-duotone`],L=`classic`,tn=`duotone`,nn=[L,tn,`sharp`,`sharp-duotone`],rn={classic:{900:`fas`,400:`far`,normal:`far`,300:`fal`,100:`fat`},duotone:{900:`fad`,400:`fadr`,300:`fadl`,100:`fadt`},sharp:{900:`fass`,400:`fasr`,300:`fasl`,100:`fast`},"sharp-duotone":{900:`fasds`,400:`fasdr`,300:`fasdl`,100:`fasdt`}},an={"Font Awesome 6 Free":{900:`fas`,400:`far`},"Font Awesome 6 Pro":{900:`fas`,400:`far`,normal:`far`,300:`fal`,100:`fat`},"Font Awesome 6 Brands":{400:`fab`,normal:`fab`},"Font Awesome 6 Duotone":{900:`fad`,400:`fadr`,normal:`fadr`,300:`fadl`,100:`fadt`},"Font Awesome 6 Sharp":{900:`fass`,400:`fasr`,normal:`fasr`,300:`fasl`,100:`fast`},"Font Awesome 6 Sharp Duotone":{900:`fasds`,400:`fasdr`,normal:`fasdr`,300:`fasdl`,100:`fasdt`}},on=new Map([[`classic`,{defaultShortPrefixId:`fas`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`,`brands`],futureStyleIds:[],defaultFontWeight:900}],[`sharp`,{defaultShortPrefixId:`fass`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`duotone`,{defaultShortPrefixId:`fad`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}],[`sharp-duotone`,{defaultShortPrefixId:`fasds`,defaultStyleId:`solid`,styleIds:[`solid`,`regular`,`light`,`thin`],futureStyleIds:[],defaultFontWeight:900}]]),sn={classic:{solid:`fas`,regular:`far`,light:`fal`,thin:`fat`,brands:`fab`},duotone:{solid:`fad`,regular:`fadr`,light:`fadl`,thin:`fadt`},sharp:{solid:`fass`,regular:`fasr`,light:`fasl`,thin:`fast`},"sharp-duotone":{solid:`fasds`,regular:`fasdr`,light:`fasdl`,thin:`fasdt`}},cn=[`fak`,`fa-kit`,`fakd`,`fa-kit-duotone`],ln={kit:{fak:`kit`,"fa-kit":`kit`},"kit-duotone":{fakd:`kit-duotone`,"fa-kit-duotone":`kit-duotone`}},un=[`kit`],dn={kit:{"fa-kit":`fak`},"kit-duotone":{"fa-kit-duotone":`fakd`}},fn=[`fak`,`fakd`],pn={kit:{fak:`fa-kit`},"kit-duotone":{fakd:`fa-kit-duotone`}},mn={kit:{kit:`fak`},"kit-duotone":{"kit-duotone":`fakd`}},hn={GROUP:`duotone-group`,SWAP_OPACITY:`swap-opacity`,PRIMARY:`primary`,SECONDARY:`secondary`},gn=[`fa-classic`,`fa-duotone`,`fa-sharp`,`fa-sharp-duotone`],_n=[`fak`,`fa-kit`,`fakd`,`fa-kit-duotone`],vn={"Font Awesome Kit":{400:`fak`,normal:`fak`},"Font Awesome Kit Duotone":{400:`fakd`,normal:`fakd`}},yn={classic:{"fa-brands":`fab`,"fa-duotone":`fad`,"fa-light":`fal`,"fa-regular":`far`,"fa-solid":`fas`,"fa-thin":`fat`},duotone:{"fa-regular":`fadr`,"fa-light":`fadl`,"fa-thin":`fadt`},sharp:{"fa-solid":`fass`,"fa-regular":`fasr`,"fa-light":`fasl`,"fa-thin":`fast`},"sharp-duotone":{"fa-solid":`fasds`,"fa-regular":`fasdr`,"fa-light":`fasdl`,"fa-thin":`fasdt`}},bn={classic:[`fas`,`far`,`fal`,`fat`,`fad`],duotone:[`fadr`,`fadl`,`fadt`],sharp:[`fass`,`fasr`,`fasl`,`fast`],"sharp-duotone":[`fasds`,`fasdr`,`fasdl`,`fasdt`]},xn={classic:{fab:`fa-brands`,fad:`fa-duotone`,fal:`fa-light`,far:`fa-regular`,fas:`fa-solid`,fat:`fa-thin`},duotone:{fadr:`fa-regular`,fadl:`fa-light`,fadt:`fa-thin`},sharp:{fass:`fa-solid`,fasr:`fa-regular`,fasl:`fa-light`,fast:`fa-thin`},"sharp-duotone":{fasds:`fa-solid`,fasdr:`fa-regular`,fasdl:`fa-light`,fasdt:`fa-thin`}},Sn=[`fa-solid`,`fa-regular`,`fa-light`,`fa-thin`,`fa-duotone`,`fa-brands`],Cn=[`fa`,`fas`,`far`,`fal`,`fat`,`fad`,`fadr`,`fadl`,`fadt`,`fab`,`fass`,`fasr`,`fasl`,`fast`,`fasds`,`fasdr`,`fasdl`,`fasdt`,...gn,...Sn],wn=[`solid`,`regular`,`light`,`thin`,`duotone`,`brands`],Tn=[1,2,3,4,5,6,7,8,9,10],En=Tn.concat([11,12,13,14,15,16,17,18,19,20]),Dn=[...Object.keys(bn),...wn,`2xs`,`xs`,`sm`,`lg`,`xl`,`2xl`,`beat`,`border`,`fade`,`beat-fade`,`bounce`,`flip-both`,`flip-horizontal`,`flip-vertical`,`flip`,`fw`,`inverse`,`layers-counter`,`layers-text`,`layers`,`li`,`pull-left`,`pull-right`,`pulse`,`rotate-180`,`rotate-270`,`rotate-90`,`rotate-by`,`shake`,`spin-pulse`,`spin-reverse`,`spin`,`stack-1x`,`stack-2x`,`stack`,`ul`,hn.GROUP,hn.SWAP_OPACITY,hn.PRIMARY,hn.SECONDARY].concat(Tn.map(e=>`${e}x`),En.map(e=>`w-${e}`)),On={"Font Awesome 5 Free":{900:`fas`,400:`far`},"Font Awesome 5 Pro":{900:`fas`,400:`far`,normal:`far`,300:`fal`},"Font Awesome 5 Brands":{400:`fab`,normal:`fab`},"Font Awesome 5 Duotone":{900:`fad`}},R=`___FONT_AWESOME___`,kn=16,An=`fa`,jn=`svg-inline--fa`,z=`data-fa-i2svg`,Mn=`data-fa-pseudo-element`,Nn=`data-fa-pseudo-element-pending`,Pn=`data-prefix`,Fn=`data-icon`,In=`fontawesome-i2svg`,Ln=`async`,Rn=[`HTML`,`HEAD`,`STYLE`,`SCRIPT`],zn=(()=>{try{return!0}catch{return!1}})();function Bn(e){return new Proxy(e,{get(e,t){return t in e?e[t]:e[L]}})}var Vn=N({},Qt);Vn[L]=N(N(N(N({},{"fa-duotone":`duotone`}),Qt[L]),ln.kit),ln[`kit-duotone`]);var Hn=Bn(Vn),Un=N({},sn);Un[L]=N(N(N(N({},{duotone:`fad`}),Un[L]),mn.kit),mn[`kit-duotone`]);var Wn=Bn(Un),Gn=N({},xn);Gn[L]=N(N({},Gn[L]),pn.kit);var Kn=Bn(Gn),qn=N({},yn);qn[L]=N(N({},qn[L]),dn.kit),Bn(qn);var Jn=Xt,Yn=`fa-layers-text`,Xn=Zt;Bn(N({},rn));var Zn=[`class`,`data-prefix`,`data-icon`,`data-fa-transform`,`data-fa-mask`],Qn=$t,$n=[...un,...Dn],er=P.FontAwesomeConfig||{};function tr(e){var t=F.querySelector(`script[`+e+`]`);if(t)return t.getAttribute(e)}function nr(e){return e===``?!0:e===`false`?!1:e===`true`?!0:e}F&&typeof F.querySelector==`function`&&[[`data-family-prefix`,`familyPrefix`],[`data-css-prefix`,`cssPrefix`],[`data-family-default`,`familyDefault`],[`data-style-default`,`styleDefault`],[`data-replacement-class`,`replacementClass`],[`data-auto-replace-svg`,`autoReplaceSvg`],[`data-auto-add-css`,`autoAddCss`],[`data-auto-a11y`,`autoA11y`],[`data-search-pseudo-elements`,`searchPseudoElements`],[`data-observe-mutations`,`observeMutations`],[`data-mutate-approach`,`mutateApproach`],[`data-keep-original-source`,`keepOriginalSource`],[`data-measure-performance`,`measurePerformance`],[`data-show-missing-icons`,`showMissingIcons`]].forEach(e=>{let[t,n]=e,r=nr(tr(t));r!=null&&(er[n]=r)});var rr={styleDefault:`solid`,familyDefault:L,cssPrefix:An,replacementClass:jn,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:`async`,keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};er.familyPrefix&&(er.cssPrefix=er.familyPrefix);var B=N(N({},rr),er);B.autoReplaceSvg||(B.observeMutations=!1);var V={};Object.keys(rr).forEach(e=>{Object.defineProperty(V,e,{enumerable:!0,set:function(t){B[e]=t,ir.forEach(e=>e(V))},get:function(){return B[e]}})}),Object.defineProperty(V,`familyPrefix`,{enumerable:!0,set:function(e){B.cssPrefix=e,ir.forEach(e=>e(V))},get:function(){return B.cssPrefix}}),P.FontAwesomeConfig=V;var ir=[];function ar(e){return ir.push(e),()=>{ir.splice(ir.indexOf(e),1)}}var H=kn,U={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function or(e){if(!e||!I)return;let t=F.createElement(`style`);t.setAttribute(`type`,`text/css`),t.innerHTML=e;let n=F.head.childNodes,r=null;for(let e=n.length-1;e>-1;e--){let t=n[e],i=(t.tagName||``).toUpperCase();[`STYLE`,`LINK`].indexOf(i)>-1&&(r=t)}return F.head.insertBefore(t,r),e}var sr=`0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`;function cr(){let e=12,t=``;for(;e-- >0;)t+=sr[Math.random()*62|0];return t}function W(e){let t=[];for(let n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function lr(e){return e.classList?W(e.classList):(e.getAttribute(`class`)||``).split(` `).filter(e=>e)}function ur(e){return`${e}`.replace(/&/g,`&amp;`).replace(/"/g,`&quot;`).replace(/'/g,`&#39;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`)}function dr(e){return Object.keys(e||{}).reduce((t,n)=>t+`${n}="${ur(e[n])}" `,``).trim()}function fr(e){return Object.keys(e||{}).reduce((t,n)=>t+`${n}: ${e[n].trim()};`,``)}function pr(e){return e.size!==U.size||e.x!==U.x||e.y!==U.y||e.rotate!==U.rotate||e.flipX||e.flipY}function mr(e){let{transform:t,containerWidth:n,iconWidth:r}=e;return{outer:{transform:`translate(${n/2} 256)`},inner:{transform:`${`translate(${t.x*32}, ${t.y*32}) `} ${`scale(${t.size/16*(t.flipX?-1:1)}, ${t.size/16*(t.flipY?-1:1)}) `} ${`rotate(${t.rotate} 0 0)`}`},path:{transform:`translate(${r/2*-1} -256)`}}}function hr(e){let{transform:t,width:n=kn,height:r=kn,startCentered:i=!1}=e,a=``;return i&&Yt?a+=`translate(${t.x/H-n/2}em, ${t.y/H-r/2}em) `:i?a+=`translate(calc(-50% + ${t.x/H}em), calc(-50% + ${t.y/H}em)) `:a+=`translate(${t.x/H}em, ${t.y/H}em) `,a+=`scale(${t.size/H*(t.flipX?-1:1)}, ${t.size/H*(t.flipY?-1:1)}) `,a+=`rotate(${t.rotate}deg) `,a}var gr=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
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
  left: calc(-1 * var(--fa-li-width, 2em));
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
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
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
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
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
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
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
}`;function _r(){let e=An,t=jn,n=V.cssPrefix,r=V.replacementClass,i=gr;if(n!==e||r!==t){let a=RegExp(`\\.${e}\\-`,`g`),o=RegExp(`\\--${e}\\-`,`g`),s=RegExp(`\\.${t}`,`g`);i=i.replace(a,`.${n}-`).replace(o,`--${n}-`).replace(s,`.${r}`)}return i}var vr=!1;function yr(){V.autoAddCss&&!vr&&(or(_r()),vr=!0)}var br={mixout(){return{dom:{css:_r,insertCss:yr}}},hooks(){return{beforeDOMElementCreation(){yr()},beforeI2svg(){yr()}}}},G=P||{};G[R]||(G[R]={}),G[R].styles||(G[R].styles={}),G[R].hooks||(G[R].hooks={}),G[R].shims||(G[R].shims=[]);var K=G[R],xr=[],Sr=function(){F.removeEventListener(`DOMContentLoaded`,Sr),Cr=1,xr.map(e=>e())},Cr=!1;I&&(Cr=(F.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(F.readyState),Cr||F.addEventListener(`DOMContentLoaded`,Sr));function wr(e){I&&(Cr?setTimeout(e,0):xr.push(e))}function Tr(e){let{tag:t,attributes:n={},children:r=[]}=e;return typeof e==`string`?ur(e):`<${t} ${dr(n)}>${r.map(Tr).join(``)}</${t}>`}function Er(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Dr=function(e,t){return function(n,r,i,a){return e.call(t,n,r,i,a)}},Or=function(e,t,n,r){var i=Object.keys(e),a=i.length,o=r===void 0?t:Dr(t,r),s,c,l;for(n===void 0?(s=1,l=e[i[0]]):(s=0,l=n);s<a;s++)c=i[s],l=o(l,e[c],c,e);return l};function kr(e){let t=[],n=0,r=e.length;for(;n<r;){let i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){let r=e.charCodeAt(n++);(r&64512)==56320?t.push(((i&1023)<<10)+(r&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function Ar(e){let t=kr(e);return t.length===1?t[0].toString(16):null}function jr(e,t){let n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function Mr(e){return Object.keys(e).reduce((t,n)=>{let r=e[n];return r.icon?t[r.iconName]=r.icon:t[n]=r,t},{})}function Nr(e,t){let{skipHooks:n=!1}=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=Mr(t);typeof K.hooks.addPack==`function`&&!n?K.hooks.addPack(e,Mr(t)):K.styles[e]=N(N({},K.styles[e]||{}),r),e===`fas`&&Nr(`fa`,t)}var{styles:Pr,shims:Fr}=K,Ir=Object.keys(Kn),Lr=Ir.reduce((e,t)=>(e[t]=Object.keys(Kn[t]),e),{}),Rr=null,zr={},Br={},Vr={},Hr={},Ur={};function Wr(e){return~$n.indexOf(e)}function Gr(e,t){let n=t.split(`-`),r=n[0],i=n.slice(1).join(`-`);return r===e&&i!==``&&!Wr(i)?i:null}var Kr=()=>{let e=e=>Or(Pr,(t,n,r)=>(t[r]=Or(n,e,{}),t),{});zr=e((e,t,n)=>(t[3]&&(e[t[3]]=n),t[2]&&t[2].filter(e=>typeof e==`number`).forEach(t=>{e[t.toString(16)]=n}),e)),Br=e((e,t,n)=>(e[n]=n,t[2]&&t[2].filter(e=>typeof e==`string`).forEach(t=>{e[t]=n}),e)),Ur=e((e,t,n)=>{let r=t[2];return e[n]=n,r.forEach(t=>{e[t]=n}),e});let t=`far`in Pr||V.autoFetchSvg,n=Or(Fr,(e,n)=>{let r=n[0],i=n[1],a=n[2];return i===`far`&&!t&&(i=`fas`),typeof r==`string`&&(e.names[r]={prefix:i,iconName:a}),typeof r==`number`&&(e.unicodes[r.toString(16)]={prefix:i,iconName:a}),e},{names:{},unicodes:{}});Vr=n.names,Hr=n.unicodes,Rr=$r(V.styleDefault,{family:V.familyDefault})};ar(e=>{Rr=$r(e.styleDefault,{family:V.familyDefault})}),Kr();function qr(e,t){return(zr[e]||{})[t]}function Jr(e,t){return(Br[e]||{})[t]}function q(e,t){return(Ur[e]||{})[t]}function Yr(e){return Vr[e]||{prefix:null,iconName:null}}function Xr(e){let t=Hr[e],n=qr(`fas`,e);return t||(n?{prefix:`fas`,iconName:n}:null)||{prefix:null,iconName:null}}function J(){return Rr}var Zr=()=>({prefix:null,iconName:null,rest:[]});function Qr(e){let t=L,n=Ir.reduce((e,t)=>(e[t]=`${V.cssPrefix}-${t}`,e),{});return nn.forEach(r=>{(e.includes(n[r])||e.some(e=>Lr[r].includes(e)))&&(t=r)}),t}function $r(e){let{family:t=L}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=Hn[t][e];if(t===tn&&!e)return`fad`;let r=Wn[t][e]||Wn[t][n],i=e in K.styles?e:null;return r||i||null}function ei(e){let t=[],n=null;return e.forEach(e=>{let r=Gr(V.cssPrefix,e);r?n=r:e&&t.push(e)}),{iconName:n,rest:t}}function ti(e){return e.sort().filter((e,t,n)=>n.indexOf(e)===t)}function ni(e){let{skipLookups:t=!1}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=null,r=Cn.concat(_n),i=ti(e.filter(e=>r.includes(e))),a=ti(e.filter(e=>!Cn.includes(e))),[o=null]=i.filter(e=>(n=e,!en.includes(e))),s=Qr(i),c=N(N({},ei(a)),{},{prefix:$r(o,{family:s})});return N(N(N({},c),oi({values:e,family:s,styles:Pr,config:V,canonical:c,givenPrefix:n})),ri(t,n,c))}function ri(e,t,n){let{prefix:r,iconName:i}=n;if(e||!r||!i)return{prefix:r,iconName:i};let a=t===`fa`?Yr(i):{},o=q(r,i);return i=a.iconName||o||i,r=a.prefix||r,r===`far`&&!Pr.far&&Pr.fas&&!V.autoFetchSvg&&(r=`fas`),{prefix:r,iconName:i}}var ii=nn.filter(e=>e!==L||e!==tn),ai=Object.keys(xn).filter(e=>e!==L).map(e=>Object.keys(xn[e])).flat();function oi(e){let{values:t,family:n,canonical:r,givenPrefix:i=``,styles:a={},config:o={}}=e,s=n===tn,c=t.includes(`fa-duotone`)||t.includes(`fad`),l=o.familyDefault===`duotone`,u=r.prefix===`fad`||r.prefix===`fa-duotone`;return!s&&(c||l||u)&&(r.prefix=`fad`),(t.includes(`fa-brands`)||t.includes(`fab`))&&(r.prefix=`fab`),!r.prefix&&ii.includes(n)&&(Object.keys(a).find(e=>ai.includes(e))||o.autoFetchSvg)&&(r.prefix=on.get(n).defaultShortPrefixId,r.iconName=q(r.prefix,r.iconName)||r.iconName),(r.prefix===`fa`||i===`fa`)&&(r.prefix=J()||`fas`),r}var si=class{constructor(){this.definitions={}}add(){let e=[...arguments].reduce(this._pullDefinitions,{});Object.keys(e).forEach(t=>{this.definitions[t]=N(N({},this.definitions[t]||{}),e[t]),Nr(t,e[t]);let n=Kn[L][t];n&&Nr(n,e[t]),Kr()})}reset(){this.definitions={}}_pullDefinitions(e,t){let n=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(n).map(t=>{let{prefix:r,iconName:i,icon:a}=n[t],o=a[2];e[r]||(e[r]={}),o.length>0&&o.forEach(t=>{typeof t==`string`&&(e[r][t]=a)}),e[r][i]=a}),e}},ci=[],li={},ui={},di=Object.keys(ui);function fi(e,t){let{mixoutsTo:n}=t;return ci=e,li={},Object.keys(ui).forEach(e=>{di.indexOf(e)===-1&&delete ui[e]}),ci.forEach(e=>{let t=e.mixout?e.mixout():{};if(Object.keys(t).forEach(e=>{typeof t[e]==`function`&&(n[e]=t[e]),typeof t[e]==`object`&&Object.keys(t[e]).forEach(r=>{n[e]||(n[e]={}),n[e][r]=t[e][r]})}),e.hooks){let t=e.hooks();Object.keys(t).forEach(e=>{li[e]||(li[e]=[]),li[e].push(t[e])})}e.provides&&e.provides(ui)}),n}function pi(e,t){var n=[...arguments].slice(2);return(li[e]||[]).forEach(e=>{t=e.apply(null,[t,...n])}),t}function Y(e){var t=[...arguments].slice(1);(li[e]||[]).forEach(e=>{e.apply(null,t)})}function X(){let e=arguments[0],t=Array.prototype.slice.call(arguments,1);return ui[e]?ui[e].apply(null,t):void 0}function mi(e){e.prefix===`fa`&&(e.prefix=`fas`);let{iconName:t}=e,n=e.prefix||J();if(t)return t=q(n,t)||t,Er(hi.definitions,n,t)||Er(K.styles,n,t)}var hi=new si,Z={noAuto:()=>{V.autoReplaceSvg=!1,V.observeMutations=!1,Y(`noAuto`)},config:V,dom:{i2svg:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return I?(Y(`beforeI2svg`,e),X(`pseudoElements2svg`,e),X(`i2svg`,e)):Promise.reject(Error(`Operation requires a DOM of some kind.`))},watch:function(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},{autoReplaceSvgRoot:t}=e;V.autoReplaceSvg===!1&&(V.autoReplaceSvg=!0),V.observeMutations=!0,wr(()=>{gi({autoReplaceSvgRoot:t}),Y(`watch`,e)})}},parse:{icon:e=>{if(e===null)return null;if(typeof e==`object`&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:q(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){let t=e[1].indexOf(`fa-`)===0?e[1].slice(3):e[1],n=$r(e[0]);return{prefix:n,iconName:q(n,t)||t}}if(typeof e==`string`&&(e.indexOf(`${V.cssPrefix}-`)>-1||e.match(Jn))){let t=ni(e.split(` `),{skipLookups:!0});return{prefix:t.prefix||J(),iconName:q(t.prefix,t.iconName)||t.iconName}}if(typeof e==`string`){let t=J();return{prefix:t,iconName:q(t,e)||e}}}},library:hi,findIconDefinition:mi,toHtml:Tr},gi=function(){let{autoReplaceSvgRoot:e=F}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};(Object.keys(K.styles).length>0||V.autoFetchSvg)&&I&&V.autoReplaceSvg&&Z.dom.i2svg({node:e})};function _i(e,t){return Object.defineProperty(e,`abstract`,{get:t}),Object.defineProperty(e,`html`,{get:function(){return e.abstract.map(e=>Tr(e))}}),Object.defineProperty(e,`node`,{get:function(){if(!I)return;let t=F.createElement(`div`);return t.innerHTML=e.html,t.children}}),e}function vi(e){let{children:t,main:n,mask:r,attributes:i,styles:a,transform:o}=e;if(pr(o)&&n.found&&!r.found){let{width:e,height:t}=n,r={x:e/t/2,y:.5};i.style=fr(N(N({},a),{},{"transform-origin":`${r.x+o.x/16}em ${r.y+o.y/16}em`}))}return[{tag:`svg`,attributes:i,children:t}]}function yi(e){let{prefix:t,iconName:n,children:r,attributes:i,symbol:a}=e,o=a===!0?`${t}-${V.cssPrefix}-${n}`:a;return[{tag:`svg`,attributes:{style:`display: none;`},children:[{tag:`symbol`,attributes:N(N({},i),{},{id:o}),children:r}]}]}function bi(e){let{icons:{main:t,mask:n},prefix:r,iconName:i,transform:a,symbol:o,title:s,maskId:c,titleId:l,extra:u,watchable:d=!1}=e,{width:f,height:p}=n.found?n:t,m=fn.includes(r),h=[V.replacementClass,i?`${V.cssPrefix}-${i}`:``].filter(e=>u.classes.indexOf(e)===-1).filter(e=>e!==``||!!e).concat(u.classes).join(` `),g={children:[],attributes:N(N({},u.attributes),{},{"data-prefix":r,"data-icon":i,class:h,role:u.attributes.role||`img`,xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 ${f} ${p}`})},_=m&&!~u.classes.indexOf(`fa-fw`)?{width:`${f/p*16*.0625}em`}:{};d&&(g.attributes[z]=``),s&&(g.children.push({tag:`title`,attributes:{id:g.attributes[`aria-labelledby`]||`title-${l||cr()}`},children:[s]}),delete g.attributes.title);let v=N(N({},g),{},{prefix:r,iconName:i,main:t,mask:n,maskId:c,transform:a,symbol:o,styles:N(N({},_),u.styles)}),{children:y,attributes:b}=n.found&&t.found?X(`generateAbstractMask`,v)||{children:[],attributes:{}}:X(`generateAbstractIcon`,v)||{children:[],attributes:{}};return v.children=y,v.attributes=b,o?yi(v):vi(v)}function xi(e){let{content:t,width:n,height:r,transform:i,title:a,extra:o,watchable:s=!1}=e,c=N(N(N({},o.attributes),a?{title:a}:{}),{},{class:o.classes.join(` `)});s&&(c[z]=``);let l=N({},o.styles);pr(i)&&(l.transform=hr({transform:i,startCentered:!0,width:n,height:r}),l[`-webkit-transform`]=l.transform);let u=fr(l);u.length>0&&(c.style=u);let d=[];return d.push({tag:`span`,attributes:c,children:[t]}),a&&d.push({tag:`span`,attributes:{class:`sr-only`},children:[a]}),d}function Si(e){let{content:t,title:n,extra:r}=e,i=N(N(N({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(` `)}),a=fr(r.styles);a.length>0&&(i.style=a);let o=[];return o.push({tag:`span`,attributes:i,children:[t]}),n&&o.push({tag:`span`,attributes:{class:`sr-only`},children:[n]}),o}var{styles:Ci}=K;function wi(e){let t=e[0],n=e[1],[r]=e.slice(4),i=null;return i=Array.isArray(r)?{tag:`g`,attributes:{class:`${V.cssPrefix}-${Qn.GROUP}`},children:[{tag:`path`,attributes:{class:`${V.cssPrefix}-${Qn.SECONDARY}`,fill:`currentColor`,d:r[0]}},{tag:`path`,attributes:{class:`${V.cssPrefix}-${Qn.PRIMARY}`,fill:`currentColor`,d:r[1]}}]}:{tag:`path`,attributes:{fill:`currentColor`,d:r}},{found:!0,width:t,height:n,icon:i}}var Ti={found:!1,width:512,height:512};function Ei(e,t){!zn&&!V.showMissingIcons&&e&&console.error(`Icon with name "${e}" and prefix "${t}" is missing.`)}function Di(e,t){let n=t;return t===`fa`&&V.styleDefault!==null&&(t=J()),new Promise((r,i)=>{if(n===`fa`){let n=Yr(e)||{};e=n.iconName||e,t=n.prefix||t}if(e&&t&&Ci[t]&&Ci[t][e]){let n=Ci[t][e];return r(wi(n))}Ei(e,t),r(N(N({},Ti),{},{icon:V.showMissingIcons&&e&&X(`missingIconAbstract`)||{}}))})}var Oi=()=>{},ki=V.measurePerformance&&Jt&&Jt.mark&&Jt.measure?Jt:{mark:Oi,measure:Oi},Ai=`FA "6.7.2"`,ji=e=>(ki.mark(`${Ai} ${e} begins`),()=>Mi(e)),Mi=e=>{ki.mark(`${Ai} ${e} ends`),ki.measure(`${Ai} ${e}`,`${Ai} ${e} begins`,`${Ai} ${e} ends`)},Ni={begin:ji,end:Mi},Pi=()=>{};function Fi(e){return typeof(e.getAttribute?e.getAttribute(z):null)==`string`}function Ii(e){let t=e.getAttribute?e.getAttribute(Pn):null,n=e.getAttribute?e.getAttribute(Fn):null;return t&&n}function Li(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(V.replacementClass)}function Ri(){return V.autoReplaceSvg===!0?Ui.replace:Ui[V.autoReplaceSvg]||Ui.replace}function zi(e){return F.createElementNS(`http://www.w3.org/2000/svg`,e)}function Bi(e){return F.createElement(e)}function Vi(e){let{ceFn:t=e.tag===`svg`?zi:Bi}=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(typeof e==`string`)return F.createTextNode(e);let n=t(e.tag);return Object.keys(e.attributes||[]).forEach(function(t){n.setAttribute(t,e.attributes[t])}),(e.children||[]).forEach(function(e){n.appendChild(Vi(e,{ceFn:t}))}),n}function Hi(e){let t=` ${e.outerHTML} `;return t=`${t}Font Awesome fontawesome.com `,t}var Ui={replace:function(e){let t=e[0];if(t.parentNode)if(e[1].forEach(e=>{t.parentNode.insertBefore(Vi(e),t)}),t.getAttribute(z)===null&&V.keepOriginalSource){let e=F.createComment(Hi(t));t.parentNode.replaceChild(e,t)}else t.remove()},nest:function(e){let t=e[0],n=e[1];if(~lr(t).indexOf(V.replacementClass))return Ui.replace(e);let r=RegExp(`${V.cssPrefix}-.*`);if(delete n[0].attributes.id,n[0].attributes.class){let e=n[0].attributes.class.split(` `).reduce((e,t)=>(t===V.replacementClass||t.match(r)?e.toSvg.push(t):e.toNode.push(t),e),{toNode:[],toSvg:[]});n[0].attributes.class=e.toSvg.join(` `),e.toNode.length===0?t.removeAttribute(`class`):t.setAttribute(`class`,e.toNode.join(` `))}let i=n.map(e=>Tr(e)).join(`
`);t.setAttribute(z,``),t.innerHTML=i}};function Wi(e){e()}function Gi(e,t){let n=typeof t==`function`?t:Pi;if(e.length===0)n();else{let t=Wi;V.mutateApproach===Ln&&(t=P.requestAnimationFrame||Wi),t(()=>{let t=Ri(),r=Ni.begin(`mutate`);e.map(t),r(),n()})}}var Ki=!1;function qi(){Ki=!0}function Ji(){Ki=!1}var Yi=null;function Xi(e){if(!qt||!V.observeMutations)return;let{treeCallback:t=Pi,nodeCallback:n=Pi,pseudoElementsCallback:r=Pi,observeMutationsRoot:i=F}=e;Yi=new qt(e=>{if(Ki)return;let i=J();W(e).forEach(e=>{if(e.type===`childList`&&e.addedNodes.length>0&&!Fi(e.addedNodes[0])&&(V.searchPseudoElements&&r(e.target),t(e.target)),e.type===`attributes`&&e.target.parentNode&&V.searchPseudoElements&&r(e.target.parentNode),e.type===`attributes`&&Fi(e.target)&&~Zn.indexOf(e.attributeName))if(e.attributeName===`class`&&Ii(e.target)){let{prefix:t,iconName:n}=ni(lr(e.target));e.target.setAttribute(Pn,t||i),n&&e.target.setAttribute(Fn,n)}else Li(e.target)&&n(e.target)})}),I&&Yi.observe(i,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Zi(){Yi&&Yi.disconnect()}function Qi(e){let t=e.getAttribute(`style`),n=[];return t&&(n=t.split(`;`).reduce((e,t)=>{let n=t.split(`:`),r=n[0],i=n.slice(1);return r&&i.length>0&&(e[r]=i.join(`:`).trim()),e},{})),n}function $i(e){let t=e.getAttribute(`data-prefix`),n=e.getAttribute(`data-icon`),r=e.innerText===void 0?``:e.innerText.trim(),i=ni(lr(e));return i.prefix||=J(),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix?i:(i.prefix&&r.length>0&&(i.iconName=Jr(i.prefix,e.innerText)||qr(i.prefix,Ar(e.innerText))),!i.iconName&&V.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data),i)}function ea(e){let t=W(e.attributes).reduce((e,t)=>(e.name!==`class`&&e.name!==`style`&&(e[t.name]=t.value),e),{}),n=e.getAttribute(`title`),r=e.getAttribute(`data-fa-title-id`);return V.autoA11y&&(n?t[`aria-labelledby`]=`${V.replacementClass}-title-${r||cr()}`:(t[`aria-hidden`]=`true`,t.focusable=`false`)),t}function ta(){return{iconName:null,title:null,titleId:null,prefix:null,transform:U,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function na(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},{iconName:n,prefix:r,rest:i}=$i(e),a=ea(e),o=pi(`parseNodeAttributes`,{},e),s=t.styleParser?Qi(e):[];return N({iconName:n,title:e.getAttribute(`title`),titleId:e.getAttribute(`data-fa-title-id`),prefix:r,transform:U,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:s,attributes:a}},o)}var{styles:ra}=K;function ia(e){let t=V.autoReplaceSvg===`nest`?na(e,{styleParser:!1}):na(e);return~t.extra.classes.indexOf(Yn)?X(`generateLayersText`,e,t):X(`generateSvgReplacementMutation`,e,t)}function aa(){return[...cn,...Cn]}function oa(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!I)return Promise.resolve();let n=F.documentElement.classList,r=e=>n.add(`${In}-${e}`),i=e=>n.remove(`${In}-${e}`),a=V.autoFetchSvg?aa():en.concat(Object.keys(ra));a.includes(`fa`)||a.push(`fa`);let o=[`.${Yn}:not([${z}])`].concat(a.map(e=>`.${e}:not([${z}])`)).join(`, `);if(o.length===0)return Promise.resolve();let s=[];try{s=W(e.querySelectorAll(o))}catch{}if(s.length>0)r(`pending`),i(`complete`);else return Promise.resolve();let c=Ni.begin(`onTree`),l=s.reduce((e,t)=>{try{let n=ia(t);n&&e.push(n)}catch(e){zn||e.name===`MissingIcon`&&console.error(e)}return e},[]);return new Promise((e,n)=>{Promise.all(l).then(n=>{Gi(n,()=>{r(`active`),r(`complete`),i(`pending`),typeof t==`function`&&t(),c(),e()})}).catch(e=>{c(),n(e)})})}function sa(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;ia(e).then(e=>{e&&Gi([e],t)})}function ca(e){return function(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:mi(t||{}),{mask:i}=n;return i&&=(i||{}).icon?i:mi(i||{}),e(r,N(N({},n),{},{mask:i}))}}var la=function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:n=U,symbol:r=!1,mask:i=null,maskId:a=null,title:o=null,titleId:s=null,classes:c=[],attributes:l={},styles:u={}}=t;if(!e)return;let{prefix:d,iconName:f,icon:p}=e;return _i(N({type:`icon`},e),()=>(Y(`beforeDOMElementCreation`,{iconDefinition:e,params:t}),V.autoA11y&&(o?l[`aria-labelledby`]=`${V.replacementClass}-title-${s||cr()}`:(l[`aria-hidden`]=`true`,l.focusable=`false`)),bi({icons:{main:wi(p),mask:i?wi(i.icon):{found:!1,width:null,height:null,icon:{}}},prefix:d,iconName:f,transform:N(N({},U),n),symbol:r,title:o,maskId:a,titleId:s,extra:{attributes:l,styles:u,classes:c}})))},ua={mixout(){return{icon:ca(la)}},hooks(){return{mutationObserverCallbacks(e){return e.treeCallback=oa,e.nodeCallback=sa,e}}},provides(e){e.i2svg=function(e){let{node:t=F,callback:n=()=>{}}=e;return oa(t,n)},e.generateSvgReplacementMutation=function(e,t){let{iconName:n,title:r,titleId:i,prefix:a,transform:o,symbol:s,mask:c,maskId:l,extra:u}=t;return new Promise((t,d)=>{Promise.all([Di(n,a),c.iconName?Di(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(c=>{let[d,f]=c;t([e,bi({icons:{main:d,mask:f},prefix:a,iconName:n,transform:o,symbol:s,maskId:l,title:r,titleId:i,extra:u,watchable:!0})])}).catch(d)})},e.generateAbstractIcon=function(e){let{children:t,attributes:n,main:r,transform:i,styles:a}=e,o=fr(a);o.length>0&&(n.style=o);let s;return pr(i)&&(s=X(`generateAbstractTransformGrouping`,{main:r,transform:i,containerWidth:r.width,iconWidth:r.width})),t.push(s||r.icon),{children:t,attributes:n}}}},da={mixout(){return{layer(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{classes:n=[]}=t;return _i({type:`layer`},()=>{Y(`beforeDOMElementCreation`,{assembler:e,params:t});let r=[];return e(e=>{Array.isArray(e)?e.map(e=>{r=r.concat(e.abstract)}):r=r.concat(e.abstract)}),[{tag:`span`,attributes:{class:[`${V.cssPrefix}-layers`,...n].join(` `)},children:r}]})}}}},fa={mixout(){return{counter(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{title:n=null,classes:r=[],attributes:i={},styles:a={}}=t;return _i({type:`counter`,content:e},()=>(Y(`beforeDOMElementCreation`,{content:e,params:t}),Si({content:e.toString(),title:n,extra:{attributes:i,styles:a,classes:[`${V.cssPrefix}-layers-counter`,...r]}})))}}}},pa={mixout(){return{text(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},{transform:n=U,title:r=null,classes:i=[],attributes:a={},styles:o={}}=t;return _i({type:`text`,content:e},()=>(Y(`beforeDOMElementCreation`,{content:e,params:t}),xi({content:e,transform:N(N({},U),n),title:r,extra:{attributes:a,styles:o,classes:[`${V.cssPrefix}-layers-text`,...i]}})))}}},provides(e){e.generateLayersText=function(e,t){let{title:n,transform:r,extra:i}=t,a=null,o=null;if(Yt){let t=parseInt(getComputedStyle(e).fontSize,10),n=e.getBoundingClientRect();a=n.width/t,o=n.height/t}return V.autoA11y&&!n&&(i.attributes[`aria-hidden`]=`true`),Promise.resolve([e,xi({content:e.innerHTML,width:a,height:o,transform:r,title:n,extra:i,watchable:!0})])}}},ma=RegExp(`"`,`ug`),ha=[1105920,1112319],ga=N(N(N(N({},{FontAwesome:{normal:`fas`,400:`fas`}}),an),On),vn),_a=Object.keys(ga).reduce((e,t)=>(e[t.toLowerCase()]=ga[t],e),{}),va=Object.keys(_a).reduce((e,t)=>{let n=_a[t];return e[t]=n[900]||[...Object.entries(n)][0][1],e},{});function ya(e){let t=e.replace(ma,``),n=jr(t,0),r=n>=ha[0]&&n<=ha[1],i=t.length===2?t[0]===t[1]:!1;return{value:Ar(i?t[0]:t),isSecondary:r||i}}function ba(e,t){let n=e.replace(/^['"]|['"]$/g,``).toLowerCase(),r=parseInt(t),i=isNaN(r)?`normal`:r;return(_a[n]||{})[i]||va[n]}function xa(e,t){let n=`${Nn}${t.replace(`:`,`-`)}`;return new Promise((r,i)=>{if(e.getAttribute(n)!==null)return r();let a=W(e.children).filter(e=>e.getAttribute(Mn)===t)[0],o=P.getComputedStyle(e,t),s=o.getPropertyValue(`font-family`),c=s.match(Xn),l=o.getPropertyValue(`font-weight`),u=o.getPropertyValue(`content`);if(a&&!c)return e.removeChild(a),r();if(c&&u!==`none`&&u!==``){let u=o.getPropertyValue(`content`),d=ba(s,l),{value:f,isSecondary:p}=ya(u),m=c[0].startsWith(`FontAwesome`),h=qr(d,f),g=h;if(m){let e=Xr(f);e.iconName&&e.prefix&&(h=e.iconName,d=e.prefix)}if(h&&!p&&(!a||a.getAttribute(Pn)!==d||a.getAttribute(Fn)!==g)){e.setAttribute(n,g),a&&e.removeChild(a);let o=ta(),{extra:s}=o;s.attributes[Mn]=t,Di(h,d).then(i=>{let a=bi(N(N({},o),{},{icons:{main:i,mask:Zr()},prefix:d,iconName:g,extra:s,watchable:!0})),c=F.createElementNS(`http://www.w3.org/2000/svg`,`svg`);t===`::before`?e.insertBefore(c,e.firstChild):e.appendChild(c),c.outerHTML=a.map(e=>Tr(e)).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function Sa(e){return Promise.all([xa(e,`::before`),xa(e,`::after`)])}function Ca(e){return e.parentNode!==document.head&&!~Rn.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Mn)&&(!e.parentNode||e.parentNode.tagName!==`svg`)}function wa(e){if(I)return new Promise((t,n)=>{let r=W(e.querySelectorAll(`*`)).filter(Ca).map(Sa),i=Ni.begin(`searchPseudoElements`);qi(),Promise.all(r).then(()=>{i(),Ji(),t()}).catch(()=>{i(),Ji(),n()})})}var Ta={hooks(){return{mutationObserverCallbacks(e){return e.pseudoElementsCallback=wa,e}}},provides(e){e.pseudoElements2svg=function(e){let{node:t=F}=e;V.searchPseudoElements&&wa(t)}}},Ea=!1,Da={mixout(){return{dom:{unwatch(){qi(),Ea=!0}}}},hooks(){return{bootstrap(){Xi(pi(`mutationObserverCallbacks`,{}))},noAuto(){Zi()},watch(e){let{observeMutationsRoot:t}=e;Ea?Ji():Xi(pi(`mutationObserverCallbacks`,{observeMutationsRoot:t}))}}}},Oa=e=>e.toLowerCase().split(` `).reduce((e,t)=>{let n=t.toLowerCase().split(`-`),r=n[0],i=n.slice(1).join(`-`);if(r&&i===`h`)return e.flipX=!0,e;if(r&&i===`v`)return e.flipY=!0,e;if(i=parseFloat(i),isNaN(i))return e;switch(r){case`grow`:e.size+=i;break;case`shrink`:e.size-=i;break;case`left`:e.x-=i;break;case`right`:e.x+=i;break;case`up`:e.y-=i;break;case`down`:e.y+=i;break;case`rotate`:e.rotate+=i;break}return e},{size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0}),ka={mixout(){return{parse:{transform:e=>Oa(e)}}},hooks(){return{parseNodeAttributes(e,t){let n=t.getAttribute(`data-fa-transform`);return n&&(e.transform=Oa(n)),e}}},provides(e){e.generateAbstractTransformGrouping=function(e){let{main:t,transform:n,containerWidth:r,iconWidth:i}=e,a={outer:{transform:`translate(${r/2} 256)`},inner:{transform:`${`translate(${n.x*32}, ${n.y*32}) `} ${`scale(${n.size/16*(n.flipX?-1:1)}, ${n.size/16*(n.flipY?-1:1)}) `} ${`rotate(${n.rotate} 0 0)`}`},path:{transform:`translate(${i/2*-1} -256)`}};return{tag:`g`,attributes:N({},a.outer),children:[{tag:`g`,attributes:N({},a.inner),children:[{tag:t.icon.tag,children:t.icon.children,attributes:N(N({},t.icon.attributes),a.path)}]}]}}}},Aa={x:0,y:0,width:`100%`,height:`100%`};function ja(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill=`black`),e}function Ma(e){return e.tag===`g`?e.children:[e]}fi([br,ua,da,fa,pa,Ta,Da,ka,{hooks(){return{parseNodeAttributes(e,t){let n=t.getAttribute(`data-fa-mask`),r=n?ni(n.split(` `).map(e=>e.trim())):Zr();return r.prefix||=J(),e.mask=r,e.maskId=t.getAttribute(`data-fa-mask-id`),e}}},provides(e){e.generateAbstractMask=function(e){let{children:t,attributes:n,main:r,mask:i,maskId:a,transform:o}=e,{width:s,icon:c}=r,{width:l,icon:u}=i,d=mr({transform:o,containerWidth:l,iconWidth:s}),f={tag:`rect`,attributes:N(N({},Aa),{},{fill:`white`})},p=c.children?{children:c.children.map(ja)}:{},m={tag:`g`,attributes:N({},d.inner),children:[ja(N({tag:c.tag,attributes:N(N({},c.attributes),d.path)},p))]},h={tag:`g`,attributes:N({},d.outer),children:[m]},g=`mask-${a||cr()}`,_=`clip-${a||cr()}`,v={tag:`mask`,attributes:N(N({},Aa),{},{id:g,maskUnits:`userSpaceOnUse`,maskContentUnits:`userSpaceOnUse`}),children:[f,h]},y={tag:`defs`,children:[{tag:`clipPath`,attributes:{id:_},children:Ma(u)},v]};return t.push(y,{tag:`rect`,attributes:N({fill:`currentColor`,"clip-path":`url(#${_})`,mask:`url(#${g})`},Aa)}),{children:t,attributes:n}}}},{provides(e){let t=!1;P.matchMedia&&(t=P.matchMedia(`(prefers-reduced-motion: reduce)`).matches),e.missingIconAbstract=function(){let e=[],n={fill:`currentColor`},r={attributeType:`XML`,repeatCount:`indefinite`,dur:`2s`};e.push({tag:`path`,attributes:N(N({},n),{},{d:`M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z`})});let i=N(N({},r),{},{attributeName:`opacity`}),a={tag:`circle`,attributes:N(N({},n),{},{cx:`256`,cy:`364`,r:`28`}),children:[]};return t||a.children.push({tag:`animate`,attributes:N(N({},r),{},{attributeName:`r`,values:`28;14;28;28;14;28;`})},{tag:`animate`,attributes:N(N({},i),{},{values:`1;0;1;1;0;1;`})}),e.push(a),e.push({tag:`path`,attributes:N(N({},n),{},{opacity:`1`,d:`M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z`}),children:t?[]:[{tag:`animate`,attributes:N(N({},i),{},{values:`1;0;0;0;0;1;`})}]}),t||e.push({tag:`path`,attributes:N(N({},n),{},{opacity:`0`,d:`M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z`}),children:[{tag:`animate`,attributes:N(N({},i),{},{values:`0;0;1;1;0;0;`})}]}),{tag:`g`,attributes:{class:`missing`},children:e}}}},{hooks(){return{parseNodeAttributes(e,t){let n=t.getAttribute(`data-fa-symbol`);return e.symbol=n===null?!1:n===``?!0:n,e}}}}],{mixoutsTo:Z}),Z.noAuto;var Na=Z.config;Z.library,Z.dom;var Pa=Z.parse;Z.findIconDefinition,Z.toHtml;var Fa=Z.icon;Z.layer;var Ia=Z.text;Z.counter;function La(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function Ra(e){if(Array.isArray(e))return La(e)}function Q(e,t,n){return(t=Ka(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function za(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function Ba(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Va(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function $(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?Va(Object(n),!0).forEach(function(t){Q(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Va(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function Ha(e,t){if(e==null)return{};var n,r,i=Ua(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function Ua(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function Wa(e){return Ra(e)||za(e)||Ja(e)||Ba()}function Ga(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function Ka(e){var t=Ga(e,`string`);return typeof t==`symbol`?t:t+``}function qa(e){"@babel/helpers - typeof";return qa=typeof Symbol==`function`&&typeof Symbol.iterator==`symbol`?function(e){return typeof e}:function(e){return e&&typeof Symbol==`function`&&e.constructor===Symbol&&e!==Symbol.prototype?`symbol`:typeof e},qa(e)}function Ja(e,t){if(e){if(typeof e==`string`)return La(e,t);var n={}.toString.call(e).slice(8,-1);return n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`?Array.from(e):n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?La(e,t):void 0}}function Ya(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Q({},e,t):{}}function Xa(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip===`horizontal`||e.flip===`both`,"fa-flip-vertical":e.flip===`vertical`||e.flip===`both`},Q(Q(Q(Q(Q(Q(Q(Q(Q(Q(t,`fa-${e.size}`,e.size!==null),`fa-rotate-${e.rotation}`,e.rotation!==null),`fa-rotate-by`,e.rotateBy),`fa-pull-${e.pull}`,e.pull!==null),`fa-swap-opacity`,e.swapOpacity),`fa-bounce`,e.bounce),`fa-shake`,e.shake),`fa-beat`,e.beat),`fa-fade`,e.fade),`fa-beat-fade`,e.beatFade),Q(Q(Q(Q(t,`fa-flash`,e.flash),`fa-spin-pulse`,e.spinPulse),`fa-spin-reverse`,e.spinReverse),`fa-width-auto`,e.widthAuto));return Object.keys(n).map(function(e){return n[e]?e:null}).filter(function(e){return e})}var Za=typeof globalThis<`u`?globalThis:typeof window<`u`?window:typeof global<`u`?global:typeof self<`u`?self:{},Qa={exports:{}};(function(e){(function(t){var n=function(e,t,r){if(!l(t)||d(t)||f(t)||p(t)||c(t))return t;var i,a=0,o=0;if(u(t))for(i=[],o=t.length;a<o;a++)i.push(n(e,t[a],r));else for(var s in i={},t)Object.prototype.hasOwnProperty.call(t,s)&&(i[e(s,r)]=n(e,t[s],r));return i},r=function(e,t){t||={};var n=t.separator||`_`,r=t.split||/(?=[A-Z])/;return e.split(r).join(n)},i=function(e){return m(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(e,t){return t?t.toUpperCase():``}),e.substr(0,1).toLowerCase()+e.substr(1))},a=function(e){var t=i(e);return t.substr(0,1).toUpperCase()+t.substr(1)},o=function(e,t){return r(e,t).toLowerCase()},s=Object.prototype.toString,c=function(e){return typeof e==`function`},l=function(e){return e===Object(e)},u=function(e){return s.call(e)==`[object Array]`},d=function(e){return s.call(e)==`[object Date]`},f=function(e){return s.call(e)==`[object RegExp]`},p=function(e){return s.call(e)==`[object Boolean]`},m=function(e){return e-=0,e===e},h=function(e,t){var n=t&&`process`in t?t.process:t;return typeof n==`function`?function(t,r){return n(t,e,r)}:e},g={camelize:i,decamelize:o,pascalize:a,depascalize:o,camelizeKeys:function(e,t){return n(h(i,t),e)},decamelizeKeys:function(e,t){return n(h(o,t),e,t)},pascalizeKeys:function(e,t){return n(h(a,t),e)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=g:t.humps=g})(Za)})(Qa);var $a=Qa.exports,eo=[`gradientFill`],to=[`class`,`style`],no=[`type`,`stops`,`id`];function ro(e){return e.split(`;`).map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,t){var n=t.indexOf(`:`),r=$a.camelize(t.slice(0,n));return e[r]=t.slice(n+1).trim(),e},{})}function io(e){return e.split(/\s+/).reduce(function(e,t){return e[t]=!0,e},{})}function ao(e,t){return x(`stop`,$({key:`${t}-${e.offset}`,offset:e.offset,"stop-color":e.color},e.opacity!==void 0&&{"stop-opacity":e.opacity}))}function oo(e){if(typeof e==`string`)return e;var t=(e.children||[]).map(oo);return e.tag===`path`&&e.attributes&&`fill`in e.attributes?$($({},e),{},{attributes:$($({},e.attributes),{},{fill:void 0}),children:t}):$($({},e),{},{children:t})}function so(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e==`string`)return e;var r=t.gradientFill,i=r===void 0?null:r,a=Ha(t,eo),o=i||`fill`in n?oo(e):e,s=(o.children||[]).map(function(e){return so(e,{},{})}),c=Object.keys(o.attributes||{}).reduce(function(e,t){var n=o.attributes[t];switch(t){case`class`:e.class=io(n);break;case`style`:e.style=ro(n);break;default:e.attrs[t]=n}return e},{attrs:{},class:{},style:{}});n.class;var l=n.style,u=l===void 0?{}:l,d=Ha(n,to);if(i&&i.id&&(i.type===`linear`||i.type===`radial`)){var f=i.type,p=i.stops,m=p===void 0?[]:p,h=i.id,g=Ha(i,no),_=x(f===`linear`?`linearGradient`:`radialGradient`,$($({},g),{},{id:h}),m.map(ao));return x(o.tag,$($($($({},a),{},{class:c.class,style:$($({},c.style),u)},c.attrs),d),{},{fill:`url(#${h})`}),[_].concat(Wa(s)))}return x(e.tag,$($($({},a),{},{class:c.class,style:$($({},c.style),u)},c.attrs),d),s)}var co=!1;try{co=!0}catch{}function lo(){if(!co&&console&&typeof console.error==`function`){var e;(e=console).error.apply(e,arguments)}}function uo(e){if(e&&qa(e)===`object`&&e.prefix&&e.iconName&&e.icon)return e;if(Pa.icon)return Pa.icon(e);if(e===null)return null;if(qa(e)===`object`&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e==`string`)return{prefix:`fas`,iconName:e}}var fo=w({name:`FontAwesomeIcon`,props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,`horizontal`,`vertical`,`both`].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return[`right`,`left`].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},rotateBy:{type:Boolean,default:!1},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return[`2xs`,`xs`,`sm`,`lg`,`xl`,`2xl`,`1x`,`2x`,`3x`,`4x`,`5x`,`6x`,`7x`,`8x`,`9x`,`10x`].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1},widthAuto:{type:Boolean,default:!1},gradientFill:{type:Object,default:null,validator:function(e){return typeof e.id!=`string`||!e.id?(console.warn(`FontAwesomeIcon: gradientFill.id must be a non-empty string`),!1):e.type!==`linear`&&e.type!==`radial`?(console.warn(`FontAwesomeIcon: gradientFill.type must be "linear" or "radial"`),!1):!0}}},setup:function(e,n){var r=n.attrs,i=T(function(){return uo(e.icon)}),a=T(function(){return Ya(`classes`,Xa(e))}),o=T(function(){return Ya(`transform`,typeof e.transform==`string`?Pa.transform(e.transform):e.transform)}),s=T(function(){return Ya(`mask`,uo(e.mask))}),c=T(function(){var t=$($($($({},a.value),o.value),s.value),{},{symbol:e.symbol,maskId:e.maskId});return t.title=e.title,t.titleId=e.titleId,Fa(i.value,t)});t(c,function(e){if(!e)return lo(`Could not find one or more icon(s)`,i.value,s.value)},{immediate:!0}),e.gradientFill&&e.symbol&&lo(`gradientFill is not supported when symbol is true and will be ignored`);var l=T(function(){return c.value?so(c.value.abstract[0],{gradientFill:e.symbol?null:e.gradientFill},r):null});return function(){return l.value}}});w({name:`FontAwesomeLayers`,props:{fixedWidth:{type:Boolean,default:!1}},setup:function(e,t){var n=t.slots,r=Na.familyPrefix,i=T(function(){return[`${r}-layers`].concat(Wa(e.fixedWidth?[`${r}-fw`]:[]))});return function(){return x(`div`,{class:i.value},n.default?n.default():[])}}}),w({name:`FontAwesomeLayersText`,props:{value:{type:[String,Number],default:``},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(e){return[`bottom-left`,`bottom-right`,`top-left`,`top-right`].indexOf(e)>-1}}},setup:function(e,t){var n=t.attrs,r=Na.familyPrefix,i=T(function(){return Ya(`classes`,[].concat(Wa(e.counter?[`${r}-layers-counter`]:[]),Wa(e.position?[`${r}-layers-${e.position}`]:[])))}),a=T(function(){return Ya(`transform`,typeof e.transform==`string`?Pa.transform(e.transform):e.transform)}),o=T(function(){var t=Ia(e.value.toString(),$($({},a.value),i.value)).abstract;return e.counter&&(t[0].attributes.class=t[0].attributes.class.replace(`fa-layers-text`,``)),t[0]}),s=T(function(){return so(o.value,{},n)});return function(){return s.value}}});var po=[`white`,`disabled`,`title`],mo=ee({__name:`click`,props:{text:{type:String,default:``},white:{type:[Boolean,String],default:!1},disable:{type:[Boolean,String],default:!1},icon:{type:[String,Array,Object],default:null},spin:{type:Boolean,default:!1}},setup(e){return(t,n)=>(re(),te(`comp-click`,{white:S(Ft)(e.white),disabled:S(Ft)(e.disable),title:e.text},[e.icon?(re(),v(S(fo),{key:0,class:`inline icon`,icon:e.icon,spin:e.spin},null,8,[`icon`,`spin`])):C(``,!0),b(g(e.icon?` `:``)+g(e.text),1)],8,po))}},[[`__scopeId`,`data-v-f688a93b`]]),ho={prefix:`fas`,iconName:`pen-ruler`,icon:[512,512,[`pencil-ruler`],`f5ae`,`M469.3 19.3l23.4 23.4c25 25 25 65.5 0 90.5l-56.4 56.4L322.3 75.7l56.4-56.4c25-25 65.5-25 90.5 0zM44.9 353.2L299.7 98.3 413.7 212.3 158.8 467.1c-6.7 6.7-15.1 11.6-24.2 14.2l-104 29.7c-8.4 2.4-17.4 .1-23.6-6.1s-8.5-15.2-6.1-23.6l29.7-104c2.6-9.2 7.5-17.5 14.2-24.2zM249.4 103.4L103.4 249.4 16 161.9c-18.7-18.7-18.7-49.1 0-67.9L94.1 16c18.7-18.7 49.1-18.7 67.9 0l19.8 19.8c-.3 .3-.7 .6-1 .9l-64 64c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l64-64c.3-.3 .6-.7 .9-1l45.1 45.1zM408.6 262.6l45.1 45.1c-.3 .3-.7 .6-1 .9l-64 64c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l64-64c.3-.3 .6-.7 .9-1L496 350.1c18.7 18.7 18.7 49.1 0 67.9L417.9 496c-18.7 18.7-49.1 18.7-67.9 0l-87.4-87.4L408.6 262.6z`]},go={prefix:`fas`,iconName:`eye-slash`,icon:[640,512,[],`f070`,`M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z`]},_o={prefix:`fas`,iconName:`rotate-left`,icon:[512,512,[`rotate-back`,`rotate-backward`,`undo-alt`],`f2ea`,`M48.5 224L40 224c-13.3 0-24-10.7-24-24L16 72c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2L98.6 96.6c87.6-86.5 228.7-86.2 315.8 1c87.5 87.5 87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3c-62.2-62.2-162.7-62.5-225.3-1L185 183c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8L48.5 224z`]},vo={prefix:`fas`,iconName:`eye`,icon:[576,512,[128065],`f06e`,`M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z`]},yo={prefix:`fas`,iconName:`star-of-david`,icon:[512,512,[10017],`f69a`,`M404.2 309.5L383.1 344l42.3 0-21.1-34.5zM371.4 256l-54-88-122.8 0-54 88 54 88 122.8 0 54-88zm65.7 0l53.4 87c3.6 5.9 5.5 12.7 5.5 19.6c0 20.7-16.8 37.4-37.4 37.4l-109.8 0-56.2 91.5C284.8 504.3 270.9 512 256 512s-28.8-7.7-36.6-20.5L163.3 400 53.4 400C32.8 400 16 383.2 16 362.6c0-6.9 1.9-13.7 5.5-19.6l53.4-87L21.5 169c-3.6-5.9-5.5-12.7-5.5-19.6C16 128.8 32.8 112 53.4 112l109.8 0 56.2-91.5C227.2 7.7 241.1 0 256 0s28.8 7.7 36.6 20.5L348.7 112l109.8 0c20.7 0 37.4 16.8 37.4 37.4c0 6.9-1.9 13.7-5.5 19.6l-53.4 87zm-54-88l21.1 34.5L425.4 168l-42.3 0zM283 112L256 68l-27 44 54 0zM128.9 168l-42.3 0 21.1 34.5L128.9 168zM107.8 309.5L86.6 344l42.3 0-21.1-34.5zM229 400l27 44 27-44-54 0z`]},bo={prefix:`fas`,iconName:`angle-down`,icon:[448,512,[8964],`f107`,`M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z`]},xo={prefix:`fas`,iconName:`baseball`,icon:[512,512,[129358,9918,`baseball-ball`],`f433`,`M62.7 223.4c-4.8 .4-9.7 .6-14.7 .6c-15.6 0-30.8-2-45.2-5.9C19.2 107.1 107.1 19.2 218.1 2.8C222 17.2 224 32.4 224 48c0 4.9-.2 9.8-.6 14.7c-.7 8.8 5.8 16.5 14.6 17.3s16.5-5.8 17.3-14.6c.5-5.7 .7-11.5 .7-17.3c0-16.5-1.9-32.6-5.6-47.9c1.8 0 3.7-.1 5.6-.1C397.4 0 512 114.6 512 256c0 1.9 0 3.7-.1 5.6c-15.4-3.6-31.4-5.6-47.9-5.6c-5.8 0-11.6 .2-17.3 .7c-8.8 .7-15.4 8.5-14.6 17.3s8.5 15.4 17.3 14.6c4.8-.4 9.7-.6 14.7-.6c15.6 0 30.8 2 45.2 5.9C492.8 404.9 404.9 492.8 293.9 509.2C290 494.8 288 479.6 288 464c0-4.9 .2-9.8 .6-14.7c.7-8.8-5.8-16.5-14.6-17.3s-16.5 5.8-17.3 14.6c-.5 5.7-.7 11.5-.7 17.3c0 16.5 1.9 32.6 5.6 47.9c-1.8 0-3.7 .1-5.6 .1C114.6 512 0 397.4 0 256c0-1.9 0-3.7 .1-5.6C15.4 254.1 31.5 256 48 256c5.8 0 11.6-.2 17.3-.7c8.8-.7 15.4-8.5 14.6-17.3s-8.5-15.4-17.3-14.6zM121.3 208c-8 3.7-11.6 13.2-7.9 21.2s13.2 11.6 21.2 7.9c45.2-20.8 81.7-57.2 102.5-102.5c3.7-8 .2-17.5-7.9-21.2s-17.5-.2-21.2 7.9c-17.6 38.3-48.5 69.2-86.7 86.7zm277.2 74.7c-3.7-8-13.2-11.6-21.2-7.9c-45.2 20.8-81.7 57.2-102.5 102.5c-3.7 8-.2 17.5 7.9 21.2s17.5 .2 21.2-7.9c17.6-38.3 48.5-69.2 86.7-86.7c8-3.7 11.6-13.2 7.9-21.2z`]},So={prefix:`fas`,iconName:`angle-up`,icon:[448,512,[8963],`f106`,`M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z`]},Co={prefix:`fas`,iconName:`trophy`,icon:[576,512,[127942],`f091`,`M400 0L176 0c-26.5 0-48.1 21.8-47.1 48.2c.2 5.3 .4 10.6 .7 15.8L24 64C10.7 64 0 74.7 0 88c0 92.6 33.5 157 78.5 200.7c44.3 43.1 98.3 64.8 138.1 75.8c23.4 6.5 39.4 26 39.4 45.6c0 20.9-17 37.9-37.9 37.9L192 448c-17.7 0-32 14.3-32 32s14.3 32 32 32l192 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-26.1 0C337 448 320 431 320 410.1c0-19.6 15.9-39.2 39.4-45.6c39.9-11 93.9-32.7 138.2-75.8C542.5 245 576 180.6 576 88c0-13.3-10.7-24-24-24L446.4 64c.3-5.2 .5-10.4 .7-15.8C448.1 21.8 426.5 0 400 0zM48.9 112l84.4 0c9.1 90.1 29.2 150.3 51.9 190.6c-24.9-11-50.8-26.5-73.2-48.3c-32-31.1-58-76-63-142.3zM464.1 254.3c-22.4 21.8-48.3 37.3-73.2 48.3c22.7-40.3 42.8-100.5 51.9-190.6l84.4 0c-5.1 66.3-31.1 111.2-63 142.3z`]},wo={prefix:`fas`,iconName:`book`,icon:[448,512,[128212],`f02d`,`M96 0C43 0 0 43 0 96L0 416c0 53 43 96 96 96l288 0 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-64c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L384 0 96 0zm0 384l256 0 0 64L96 448c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16zm16 48l192 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z`]},To={prefix:`fas`,iconName:`check`,icon:[448,512,[10003,10004],`f00c`,`M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z`]};export{we as C,Tt as S,jt as _,To as a,Ie as b,ho as c,Co as d,mo as f,Mt as g,Ft as h,wo as i,_o as l,It as m,So as n,vo as o,fo as p,xo as r,go as s,bo as t,yo as u,bt as v,de as w,Dt as x,ft as y};