(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0c7b9806"],{"5fdd":function(e,t,n){"use strict";n("831f")},"831f":function(e,t,n){},d9a7:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"loaderMesh-container"},e._l(e.model,(function(t,o){return n("collapse-layout",{key:o,attrs:{icon:"#iconkucunfenxi",label:t.type},scopedSlots:e._u([{key:"container",fn:function(){return[n("div",{staticClass:"loaderMesh-main"},e._l(t.children,(function(o,a){return n("div",{key:a,staticClass:"loaderMesh-elem",on:{click:function(n){return e.addModel(t.type,o)}}},[n("div",{staticClass:"element-icon-box",style:{backgroundImage:"url('"+o.poster+"')"}}),n("div",{staticClass:"element-title",domProps:{textContent:e._s(o.name)}})])})),0)]},proxy:!0}],null,!0)})})),1)},a=[],i=(n("b0c0"),n("99af"),n("fb6a"),n("159b"),n("b64b"),n("4de1")),c=n("ec26"),r=n("0a5b"),s=n("8808"),l={components:{collapseLayout:i["a"]},data:function(){return{model:"",loaderMesh:{icon:"#iconkucunfenxi",getGeometryConfig:function(){return JSON.parse(JSON.stringify(s["b"]))},getMeshConfig:function(){return JSON.parse(JSON.stringify(r["b"]))}}}},methods:{addModel:function(e,t){var n=this,o={obj:"VisOBJLoader",fbx:"VisFBXLoader"};this.$store.commit("loadingManager/load",{url:t.url,loader:o[e],callBackFun:function(){var e=n.loaderMesh.getGeometryConfig(),o=n.loaderMesh.getMeshConfig();e.vid=Object(c["a"])(),e.url=t.url,o.vid=Object(c["a"])(),o.icon=n.loaderMesh.icon,o.name="".concat(t.name).concat(o.vid.slice(-2)),e.object=o.vid,o.geometry=e.vid,n.$store.commit("action/meshAdd",{geometryConfig:e,meshConfig:o})}})}},created:function(){var e=this;this.$axios.get("api/model").then((function(t){var n=[];Object.keys(t.data).forEach((function(e){n.push({type:e,children:t.data[e]})})),e.model=n}))}},d=l,u=(n("5fdd"),n("2877")),f=Object(u["a"])(d,o,a,!1,null,"6b2d1c66",null);t["default"]=f.exports}}]);