(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{274:function(t,n,e){"use strict";var i=e(1),o=e(275);i({target:"String",proto:!0,forced:e(276)("link")},{link:function(t){return o(this,"a","href",t)}})},275:function(t,n,e){var i=e(20),o=/"/g;t.exports=function(t,n,e,r){var s=String(i(t)),u="<"+n;return""!==e&&(u+=" "+e+'="'+String(r).replace(o,"&quot;")+'"'),u+">"+s+"</"+n+">"}},276:function(t,n,e){var i=e(3);t.exports=function(t){return i((function(){var n=""[t]('"');return n!==n.toLowerCase()||n.split('"').length>3}))}},277:function(t,n,e){t.exports=e.p+"assets/img/404.4d522fea.png"},373:function(t,n,e){"use strict";e.r(n);e(274);var i=e(24),o=e(277),r=e.n(o),s={components:{Link:i.a},data:function(){return{degaultNotFount:r.a,link:{text:"看看",link:"/"}}},computed:{resultLink:function(){return this.$site.themeConfig.notFoundInfo?this.$site.themeConfig.notFoundInfo:this.link}}},u=e(10),a=Object(u.a)(s,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"not-found",style:{"background-image":"url("+this.degaultNotFount+")"}},[n("p",{staticClass:"found-text"},[this._v("\n    您找的页面已经跑到火星上面了，再\n    "),n("Link",{attrs:{item:this.resultLink}}),this._v("\n    别的吧。\n  ")],1)])}),[],!1,null,null,null);n.default=a.exports}}]);