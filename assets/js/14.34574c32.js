(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{213:function(t,e,n){},253:function(t,e,n){"use strict";var a=n(213);n.n(a).a},267:function(t,e,n){"use strict";n.r(e);var a={name:"Home",data:function(){return{currentPage:1}},props:{content:{type:Array,default:function(){return[]}}},computed:{pagination:function(){return+this.$themeConfig.pagination||5},posts:function(){return this.content.slice(this.pagination*this.currentPage-this.pagination,this.pagination*this.currentPage)}},methods:{changePage:function(t){this.currentPage=t,window.scrollTo({top:0})},toTaglist:function(t){this.$router.push("/tags/"+t.target.innerText)}}},s=(n(253),n(17)),i=Object(s.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-row",{staticClass:"home-container",attrs:{type:"flex",justify:"center"}},[t._l(t.posts,(function(e){return n("el-row",{key:e.id,attrs:{type:"flex",justify:"center"}},[n("el-col",{attrs:{span:23,xs:{span:23},sm:{span:23},md:{span:23},lg:{span:23}}},[n("el-card",{staticClass:"box-card"},[n("div",{attrs:{slot:"header"},slot:"header"},[n("div",{staticClass:"post-title-time"},[t._v("\n                        "+t._s(e.lastUpdated)+"\n                    ")]),t._v(" "),n("router-link",{staticClass:"post-title-link",attrs:{to:e.path}},[t._v(t._s(e.title)+"\n                    ")])],1),t._v(" "),e.excerpt?n("div",[e.excerpt?n("div",[n("div",{staticClass:"post-excerpt",domProps:{innerHTML:t._s(e.excerpt)}})]):t._e(),t._v(" "),e.tags.length?n("div",{staticClass:"post-footer"},t._l(e.tags,(function(e,a){return n("el-tag",{key:a,staticClass:"tag-items-wrap",attrs:{size:"medium",hit:!0},on:{click:t.toTaglist}},[t._v(t._s(e)+"\n                        ")])})),1):t._e()]):t._e()])],1)],1)})),t._v(" "),n("el-row",{directives:[{name:"show",rawName:"v-show",value:t.content.length,expression:"content.length"}],staticClass:"pagination-wrap",attrs:{type:"flex",justify:"center",align:"middle"}},[n("el-col",{attrs:{span:16,xs:{span:24},sm:{span:20},md:{span:18},lg:{span:16}}},[n("el-pagination",{key:"fenyei",staticClass:"pagination",attrs:{"current-page":t.currentPage,background:"",layout:"prev, pager, next","page-size":t.pagination,total:t.content.length},on:{"current-change":t.changePage}})],1)],1)],2)}),[],!1,null,"6e751f9d",null);e.default=i.exports}}]);