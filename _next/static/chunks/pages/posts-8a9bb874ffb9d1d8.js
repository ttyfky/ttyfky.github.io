(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[679],{7484:function(t){t.exports=function(){"use strict";var t="millisecond",e="second",n="minute",i="hour",s="day",r="week",a="month",o="quarter",u="year",c="date",l=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d+)?$/,h=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,d={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},f=function(t,e,n){var i=String(t);return!i||i.length>=e?t:""+Array(e+1-i.length).join(n)+t},E={s:f,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),i=Math.floor(n/60),s=n%60;return(e<=0?"+":"-")+f(i,2,"0")+":"+f(s,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var i=12*(n.year()-e.year())+(n.month()-e.month()),s=e.clone().add(i,a),r=n-s<0,o=e.clone().add(i+(r?-1:1),a);return+(-(i+(n-s)/(r?s-o:o-s))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(l){return{M:a,y:u,w:r,d:s,D:c,h:i,m:n,s:e,ms:t,Q:o}[l]||String(l||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},m="en",y={};y[m]=d;var g=function(t){return t instanceof k},p=function(t,e,n){var i;if(!t)return m;if("string"==typeof t)y[t]&&(i=t),e&&(y[t]=e,i=t);else{var s=t.name;y[s]=t,i=s}return!n&&i&&(m=i),i||!n&&m},$=function(t,e){if(g(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new k(n)},v=E;v.l=p,v.i=g,v.w=function(t,e){return $(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var k=function(){function d(t){this.$L=this.$L||p(t.locale,null,!0),this.parse(t)}var f=d.prototype;return f.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(v.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var i=e.match(l);if(i){var s=i[2]-1||0,r=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)):new Date(i[1],s,i[3]||1,i[4]||0,i[5]||0,i[6]||0,r)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},f.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},f.$utils=function(){return v},f.isValid=function(){return!("Invalid Date"===this.$d.toString())},f.isSame=function(t,e){var n=$(t);return this.startOf(e)<=n&&n<=this.endOf(e)},f.isAfter=function(t,e){return $(t)<this.startOf(e)},f.isBefore=function(t,e){return this.endOf(e)<$(t)},f.$g=function(t,e,n){return v.u(t)?this[e]:this.set(n,t)},f.unix=function(){return Math.floor(this.valueOf()/1e3)},f.valueOf=function(){return this.$d.getTime()},f.startOf=function(t,o){var l=this,h=!!v.u(o)||o,d=v.p(t),f=function(t,e){var n=v.w(l.$u?Date.UTC(l.$y,e,t):new Date(l.$y,e,t),l);return h?n:n.endOf(s)},E=function(t,e){return v.w(l.toDate()[t].apply(l.toDate("s"),(h?[0,0,0,0]:[23,59,59,999]).slice(e)),l)},m=this.$W,y=this.$M,g=this.$D,p="set"+(this.$u?"UTC":"");switch(d){case u:return h?f(1,0):f(31,11);case a:return h?f(1,y):f(0,y+1);case r:var $=this.$locale().weekStart||0,k=(m<$?m+7:m)-$;return f(h?g-k:g+(6-k),y);case s:case c:return E(p+"Hours",0);case i:return E(p+"Minutes",1);case n:return E(p+"Seconds",2);case e:return E(p+"Milliseconds",3);default:return this.clone()}},f.endOf=function(t){return this.startOf(t,!1)},f.$set=function(r,o){var l,h=v.p(r),d="set"+(this.$u?"UTC":""),f=(l={},l[s]=d+"Date",l[c]=d+"Date",l[a]=d+"Month",l[u]=d+"FullYear",l[i]=d+"Hours",l[n]=d+"Minutes",l[e]=d+"Seconds",l[t]=d+"Milliseconds",l)[h],E=h===s?this.$D+(o-this.$W):o;if(h===a||h===u){var m=this.clone().set(c,1);m.$d[f](E),m.init(),this.$d=m.set(c,Math.min(this.$D,m.daysInMonth())).$d}else f&&this.$d[f](E);return this.init(),this},f.set=function(t,e){return this.clone().$set(t,e)},f.get=function(t){return this[v.p(t)]()},f.add=function(t,o){var c,l=this;t=Number(t);var h=v.p(o),d=function(e){var n=$(l);return v.w(n.date(n.date()+Math.round(e*t)),l)};if(h===a)return this.set(a,this.$M+t);if(h===u)return this.set(u,this.$y+t);if(h===s)return d(1);if(h===r)return d(7);var f=(c={},c[n]=6e4,c[i]=36e5,c[e]=1e3,c)[h]||1,E=this.$d.getTime()+t*f;return v.w(E,this)},f.subtract=function(t,e){return this.add(-1*t,e)},f.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",i=v.z(this),s=this.$locale(),r=this.$H,a=this.$m,o=this.$M,u=s.weekdays,c=s.months,l=function(t,i,s,r){return t&&(t[i]||t(e,n))||s[i].substr(0,r)},d=function(t){return v.s(r%12||12,t,"0")},f=s.meridiem||function(t,e,n){var i=t<12?"AM":"PM";return n?i.toLowerCase():i},E={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:v.s(o+1,2,"0"),MMM:l(s.monthsShort,o,c,3),MMMM:l(c,o),D:this.$D,DD:v.s(this.$D,2,"0"),d:String(this.$W),dd:l(s.weekdaysMin,this.$W,u,2),ddd:l(s.weekdaysShort,this.$W,u,3),dddd:u[this.$W],H:String(r),HH:v.s(r,2,"0"),h:d(1),hh:d(2),a:f(r,a,!0),A:f(r,a,!1),m:String(a),mm:v.s(a,2,"0"),s:String(this.$s),ss:v.s(this.$s,2,"0"),SSS:v.s(this.$ms,3,"0"),Z:i};return n.replace(h,(function(t,e){return e||E[t]||i.replace(":","")}))},f.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},f.diff=function(t,c,l){var h,d=v.p(c),f=$(t),E=6e4*(f.utcOffset()-this.utcOffset()),m=this-f,y=v.m(this,f);return y=(h={},h[u]=y/12,h[a]=y,h[o]=y/3,h[r]=(m-E)/6048e5,h[s]=(m-E)/864e5,h[i]=m/36e5,h[n]=m/6e4,h[e]=m/1e3,h)[d]||m,l?y:v.a(y)},f.daysInMonth=function(){return this.endOf(a).$D},f.$locale=function(){return y[this.$L]},f.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),i=p(t,e,!0);return i&&(n.$L=i),n},f.clone=function(){return v.w(this.$d,this)},f.toDate=function(){return new Date(this.valueOf())},f.toJSON=function(){return this.isValid()?this.toISOString():null},f.toISOString=function(){return this.$d.toISOString()},f.toString=function(){return this.$d.toUTCString()},d}(),b=k.prototype;return $.prototype=b,[["$ms",t],["$s",e],["$m",n],["$H",i],["$W",s],["$M",a],["$y",u],["$D",c]].forEach((function(t){b[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),$.extend=function(t,e){return t(e,k,$),$},$.locale=p,$.isDayjs=g,$.unix=function(t){return $(1e3*t)},$.en=y[m],$.Ls=y,$}()},4110:function(t){t.exports=function(){"use strict";return function(t,e,n){t=t||{};var i=e.prototype,s={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};n.en.relativeTime=s;var r=function(e,i,r,a){for(var o,u,c,l=r.$locale().relativeTime||s,h=t.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],d=h.length,f=0;f<d;f+=1){var E=h[f];E.d&&(o=a?n(e).diff(r,E.d,!0):r.diff(e,E.d,!0));var m=(t.rounding||Math.round)(Math.abs(o));if(c=o>0,m<=E.r||!E.r){m<=1&&f>0&&(E=h[f-1]);var y=l[E.l];u="string"==typeof y?y.replace("%d",m):y(m,i,E.l,c);break}}return i?u:(c?l.future:l.past).replace("%s",u)};i.to=function(t,e){return r(t,e,this,!0)},i.from=function(t,e){return r(t,e,this)};var a=function(t){return t.$u?n.utc():n()};i.toNow=function(t){return this.to(a(this),t)},i.fromNow=function(t){return this.from(a(this),t)}}}()},1834:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts",function(){return n(7155)}])},5779:function(t,e,n){"use strict";n.d(e,{v:function(){return i}});var i={id:"ttyfky",name:"Tatsuya Fukui",role:"Software Engineer",bio:"Software engineer who loves fishing.",avatarSrc:"/avatars/profile.jpg",sources:["https://medium.com/@tty_belong/feed","https://zenn.dev/ttyfky/feed"],includeUrlRegex:"medium.com|zenn.dev|ttyfky.github.io|posts",twitterUsername:"ttyfky",githubUsername:"ttyfky",linkedinUsername:"tatsuyafukui",websiteUrl:""}},2509:function(t,e,n){"use strict";n.d(e,{p:function(){return E}});var i=n(5893),s=n(7294),r=n(7484),a=n.n(r),o=n(4110),u=n.n(o),c=JSON.parse('[{"link":"posts/hello-world","isoDate":"2022-02-27","title":"Hello Next.js Blog","dateMiliSeconds":1645920000000,"published":true,"authorName":"Tatsuya Fukui","authorId":"ttyfky"},{"title":"\u30d8\u30c3\u30c9\u30ec\u30b9Shopify\u3092\u5229\u7528\u3057\u305f\u306b\u3053\u30b9\u30de","link":"https://medium.com/belong-official-blog/%E3%83%98%E3%83%83%E3%83%89%E3%83%AC%E3%82%B9shopify%E3%82%92%E5%88%A9%E7%94%A8%E3%81%97%E3%81%9F%E3%81%AB%E3%81%93%E3%82%B9%E3%83%9E-33bbe2ffdbdb?source=rss-72c3c6064527------2","isoDate":"2022-02-09T09:06:53.000Z","dateMiliSeconds":1644397613000,"authorName":"Tatsuya Fukui","authorId":"ttyfky"},{"title":"2022\u5e74\u59cb Belong \u306e\u6280\u8853\u30b9\u30bf\u30c3\u30af\u30ec\u30d3\u30e5\u30fc","link":"https://medium.com/belong-official-blog/2022%E5%B9%B4%E5%A7%8B-belong-%E3%81%AE%E6%8A%80%E8%A1%93%E3%82%B9%E3%82%BF%E3%83%83%E3%82%AF%E3%83%AC%E3%83%93%E3%83%A5%E3%83%BC-942f16753cd7?source=rss-72c3c6064527------2","isoDate":"2022-01-28T09:27:49.000Z","dateMiliSeconds":1643362069000,"authorName":"Tatsuya Fukui","authorId":"ttyfky"},{"title":"SaaS \u306b\u304a\u3051\u308b\u30de\u30eb\u30c1\u30c6\u30ca\u30f3\u30c8\u5206\u96e2\u30e2\u30c7\u30eb","link":"https://medium.com/belong-official-blog/saas-%E3%81%AB%E3%81%8A%E3%81%91%E3%82%8B%E3%83%9E%E3%83%AB%E3%83%81%E3%83%86%E3%83%8A%E3%83%B3%E3%83%88%E5%88%86%E9%9B%A2%E3%83%A2%E3%83%87%E3%83%AB-6e3f50b7b2fe?source=rss-72c3c6064527------2","isoDate":"2021-10-20T12:53:58.000Z","dateMiliSeconds":1634734438000,"authorName":"Tatsuya Fukui","authorId":"ttyfky"},{"title":"Belong\u306f\u4e2d\u53e4\u643a\u5e2f\u8ca9\u58f2(\u3060\u3051)\u306e\u4f1a\u793e\u3058\u3083\u3042\u308a\u307e\u305b\u3093\u3001\u3068\u3044\u3046\u8a71","link":"https://medium.com/belong-official-blog/belong%E3%81%AF%E4%B8%AD%E5%8F%A4%E6%90%BA%E5%B8%AF%E8%B2%A9%E5%A3%B2-%E3%81%A0%E3%81%91-%E3%81%AE%E4%BC%9A%E7%A4%BE%E3%81%98%E3%82%83%E3%81%82%E3%82%8A%E3%81%BE%E3%81%9B%E3%82%93-%E3%81%A8%E3%81%84%E3%81%86%E8%A9%B1-811a6c6aa3c9?source=rss-72c3c6064527------2","isoDate":"2021-10-19T07:09:30.000Z","dateMiliSeconds":1634627370000,"authorName":"Tatsuya Fukui","authorId":"ttyfky"},{"title":"\u306b\u3053\u30b9\u30de\u3092\u53d6\u308a\u5dfb\u304f\u30c6\u30af\u30ce\u30ed\u30b8\u30fc","link":"https://medium.com/belong-official-blog/%E3%81%AB%E3%81%93%E3%82%B9%E3%83%9E%E3%82%92%E5%8F%96%E3%82%8A%E5%B7%BB%E3%81%8F%E3%83%86%E3%82%AF%E3%83%8E%E3%83%AD%E3%82%B8%E3%83%BC-7668f9fc1962?source=rss-72c3c6064527------2","isoDate":"2021-09-24T06:15:41.000Z","dateMiliSeconds":1632464141000,"authorName":"Tatsuya Fukui","authorId":"ttyfky"},{"title":"Belong TechTalk 2021Q2 Greatest Hits","link":"https://medium.com/belong-official-blog/belong-techtalk-2021q2-greatest-hits-82bcb5587a86?source=rss-72c3c6064527------2","isoDate":"2021-07-07T08:49:25.000Z","dateMiliSeconds":1625647765000,"authorName":"Tatsuya Fukui","authorId":"ttyfky"},{"title":"Belong Inc. \u3067\u30a8\u30f3\u30b8\u30cb\u30a2\u30ea\u30f3\u30b0\u30c1\u30fc\u30e0\u3092\u7acb\u3061\u4e0a\u3052\u305f 1 \u5e74","link":"https://medium.com/belong-official-blog/belong-inc-%E3%81%A7%E3%82%A8%E3%83%B3%E3%82%B8%E3%83%8B%E3%82%A2%E3%83%AA%E3%83%B3%E3%82%B0%E3%83%81%E3%83%BC%E3%83%A0%E3%82%92%E7%AB%8B%E3%81%A1%E4%B8%8A%E3%81%92%E3%81%9F-1-%E5%B9%B4-e0bce35a6633?source=rss-72c3c6064527------2","isoDate":"2021-06-22T10:44:32.000Z","dateMiliSeconds":1624358672000,"authorName":"Tatsuya Fukui","authorId":"ttyfky"},{"title":"Belong TechTalk 2021Q1 Greatest Hits","link":"https://medium.com/belong-official-blog/belong-techtalk-2021q1-greatest-hits-fbb3cb22225?source=rss-72c3c6064527------2","isoDate":"2021-04-22T02:16:17.000Z","dateMiliSeconds":1619057777000,"authorName":"Tatsuya Fukui","authorId":"ttyfky"},{"title":"Cloud Run \u306e\u5229\u7528\u304b\u3089\u306e\u534a\u5e74\u3092\u632f\u308a\u8fd4\u308b","link":"https://medium.com/belong-official-blog/cloud-run-%E3%81%AE%E5%88%A9%E7%94%A8%E3%81%8B%E3%82%89%E3%81%AE%E5%8D%8A%E5%B9%B4%E3%82%92%E6%8C%AF%E3%82%8A%E8%BF%94%E3%82%8B-c36037a5af0b?source=rss-72c3c6064527------2","isoDate":"2020-12-15T17:28:03.000Z","dateMiliSeconds":1608053283000,"authorName":"Tatsuya Fukui","authorId":"ttyfky"},{"title":"Belong Inc. \u306e\u5b9f\u4f8b\u3092\u542b\u3081\u305f SDLC \u306e\u7d39\u4ecb","link":"https://medium.com/belong-official-blog/belong-inc-%E3%81%AE%E5%AE%9F%E4%BE%8B%E3%82%92%E5%90%AB%E3%82%81%E3%81%9F-sdlc-%E3%81%AE%E7%B4%B9%E4%BB%8B-657276ebd0b7?source=rss-72c3c6064527------2","isoDate":"2020-10-11T13:32:29.000Z","dateMiliSeconds":1602423149000,"authorName":"Tatsuya Fukui","authorId":"ttyfky"}]'),l=n(5779);function h(){return l.v}function d(t){return"https://www.google.com/s2/favicons?domain=".concat(t)}a().extend(u());var f=function(t){var e=t.item,n=(e.authorId,e.title),s=e.isoDate,r=e.link,o=e.dateMiliSeconds,u=h(),c=function(t){if(t.includes("posts"))return"ttyfky.github.io";var e=new URL(t);return(null===e||void 0===e?void 0:e.hostname)||"blog"}(r);return(0,i.jsxs)("article",{className:"post-link",children:[(0,i.jsxs)("div",{className:"post-link__author",children:[(0,i.jsx)("img",{src:u.avatarSrc,className:"post-link__author-img",width:35,height:35}),(0,i.jsxs)("div",{className:"post-link__author-name",children:[(0,i.jsx)("div",{className:"post-link__author-name",children:u.id}),(0,i.jsx)("time",{dateTime:s,className:"post-link__date",children:a()(s).fromNow()})]})]}),(0,i.jsxs)("a",{href:r,className:"post-link__main-link",children:[(0,i.jsx)("h2",{className:"post-link__title",children:n}),c&&(0,i.jsxs)("div",{className:"post-link__site",children:[(0,i.jsx)("img",{src:d(c),width:14,height:14,className:"post-link__site-favicon"}),c]})]}),o&&o>Date.now()-2592e5&&(0,i.jsx)("div",{className:"post-link__new-label",children:"NEW"})]})},E=function(t){var e=c,n=(0,s.useState)(32),r=n[0],a=n[1],o=(null===e||void 0===e?void 0:e.length)||0,u=o-r>0;return o?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:"post-list",children:e.slice(0,r).map((function(t,e){return(0,i.jsx)(f,{item:t},"post-item-".concat(e))}))}),u&&(0,i.jsx)("div",{className:"post-list-load",children:(0,i.jsx)("button",{onClick:function(){return a(r+32)},className:"post-list-load__button",children:"LOAD MORE"})})]}):(0,i.jsx)("div",{className:"post-list-empty",children:"No posts yet"})}},7155:function(t,e,n){"use strict";n.r(e);var i=n(5893),s=n(4256),r=n(2509);e.default=function(t){return(0,i.jsx)(s.v,{children:(0,i.jsx)(r.p,{})})}}},function(t){t.O(0,[774,888,179],(function(){return e=1834,t(t.s=e);var e}));var e=t.O();_N_E=e}]);