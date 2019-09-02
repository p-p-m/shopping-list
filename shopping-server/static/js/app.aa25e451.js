(function(e){function t(t){for(var i,s,o=t[0],u=t[1],c=t[2],m=0,p=[];m<o.length;m++)s=o[m],r[s]&&p.push(r[s][0]),r[s]=0;for(i in u)Object.prototype.hasOwnProperty.call(u,i)&&(e[i]=u[i]);l&&l(t);while(p.length)p.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],i=!0,o=1;o<n.length;o++){var u=n[o];0!==r[u]&&(i=!1)}i&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var i={},r={app:0},a=[];function s(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=i,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)s.d(n,i,function(t){return e[t]}.bind(null,i));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var l=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"088d":function(e,t,n){"use strict";var i=n("9921"),r=n.n(i);r.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var i=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container",attrs:{id:"app"}},[n("link",{attrs:{rel:"stylesheet",href:"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",integrity:"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T",crossorigin:"anonymous"}}),n("Header",{attrs:{items:e.items},on:{itemActivated:e.activateItem}}),n("Products",{directives:[{name:"show",rawName:"v-show",value:e.isItemActive("Shopping List"),expression:"isItemActive('Shopping List')"}]}),n("Recipes",{directives:[{name:"show",rawName:"v-show",value:e.isItemActive("Recipes"),expression:"isItemActive('Recipes')"}]})],1)},a=[],s=(n("7f7f"),n("ac6a"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[n("ul",{staticClass:"navbar-nav mr-auto"},e._l(e.items,function(t){return n("li",{key:t.name,staticClass:"nav-item",class:{active:t.isActive}},[n("a",{staticClass:"nav-link",attrs:{href:"#"},on:{click:function(n){return e.activateItem(t)}}},[e._v(e._s(t.name))])])}),0)])}),o=[],u={name:"Header",props:{items:Array},methods:{activateItem:function(e){this.$emit("itemActivated",e.name)}}},c=u,l=n("2877"),m=Object(l["a"])(c,s,o,!1,null,null,null),p=m.exports,d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.error?n("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[e._v("\n        "+e._s(e.error)+"\n    ")]):e._e(),n("form",[n("div",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.new_name,expression:"new_name"}],staticClass:"form-control",attrs:{list:"products",autocomplete:"off",type:"text",id:"name",placeholder:"name (required)"},domProps:{value:e.new_name},on:{input:function(t){t.target.composing||(e.new_name=t.target.value)}}}),n("datalist",{attrs:{id:"products"}},e._l(e.all_products,function(t){return n("option",{key:t},[e._v(e._s(t))])}),0)]),n("div",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.new_quantity,expression:"new_quantity"}],staticClass:"form-control",attrs:{type:"number",min:"0",step:"1",id:"quantity",placeholder:"quantity (required)"},domProps:{value:e.new_quantity},on:{input:function(t){t.target.composing||(e.new_quantity=t.target.value)}}})]),n("div",{staticClass:"form-group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.new_measurement,expression:"new_measurement"}],staticClass:"form-control lowercase",attrs:{list:"measurements",autocomplete:"off",type:"text",id:"measurement",placeholder:"measurement",pattern:"[a-z]*"},domProps:{value:e.new_measurement},on:{input:function(t){t.target.composing||(e.new_measurement=t.target.value)}}}),n("datalist",{attrs:{id:"measurements"}},e._l(e.all_measurements,function(t){return n("option",{key:t},[e._v(e._s(t))])}),0)]),n("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(t){return e.add()}}},[e._v("Add item")])]),n("br"),n("br"),n("ul",{staticClass:"list-group"},e._l(e.shopping_items,function(t){return n("li",{key:t.id,staticClass:"list-group-item"},[n("button",{staticClass:"btn btn-success",attrs:{type:"button"},on:{click:function(n){return e.done(t)}}},[e._v("Done")]),e._v("\n            "+e._s(t.name)+" - "+e._s(parseFloat(t.quantity).toFixed(3))+"\n            "),t.measurement?n("small",[e._v(e._s(t.measurement))]):e._e()])}),0)])},f=[],h=n("cebc"),v=(n("8615"),n("5df3"),n("4f7f"),n("75fc")),_=(n("456d"),{name:"Products",data:function(){var e=void 0;return e="http://zymud.pythonanywhere.com",{shopping_items:[{id:1,name:"test"}],new_name:null,new_quantity:null,new_measurement:null,error:null,base_url:e,all_measurements:[],all_products:[],autocomplete:{}}},mounted:function(){var e=this;this._fetch("/shopping_list").then(function(e){return e.json()}).then(function(t){e.shopping_items=t}),this._fetch("/product/autocomplete").then(function(e){return e.json()}).then(function(t){e.autocomplete=t,e.all_products=Object.keys(t),e.all_measurements=Object(v["a"])(new Set(Object.values(t)))})},methods:{_fetch:function(e,t){var n="".concat(this.base_url).concat(e);return fetch(n,Object(h["a"])({mode:"cors",headers:new Headers({"Access-Control-Allow-Origin":"*"})},t))},done:function(e){var t=this,n="/shopping_list/remove_item";this._fetch(n,{method:"POST",body:JSON.stringify({shopping_item_id:e.id})}).then(function(){t.shopping_items=t.shopping_items.filter(function(t){return t.id!==e.id})})},add:function(){var e=this;if(this.error=null,this.new_name&&this.new_quantity)if(isNaN(this.new_quantity))this.error="Quantity should be a number";else{var t={name:this.new_name,quantity:this.new_quantity,measurement:this.new_measurement};this._fetch("/shopping_list/add_item",{method:"POST",body:JSON.stringify(t)}).then(function(e){return e.json()}).then(function(t){e.shopping_items.push(t),e.new_name=null,e.new_quantity=null,e.new_measurement=null})}else this.error="Quantity and name should be defined"}}}),b=_,y=(n("088d"),Object(l["a"])(b,d,f,!1,null,"77b3b44a",null)),g=y.exports,w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v("Recipes should be displayed here")])},O=[],x={name:"Recipes"},j=x,C=Object(l["a"])(j,w,O,!1,null,null,null),A=C.exports,q={name:"app",components:{Header:p,Products:g,Recipes:A},data:function(){return{items:[{name:"Shopping List",isActive:!0},{name:"Recipes",isActive:!1}]}},methods:{activateItem:function(e){this.items.forEach(function(t){t.isActive=t.name===e})},isItemActive:function(e){return this.items.filter(function(t){return t.name===e&&t.isActive}).length>0}}},k=q,P=Object(l["a"])(k,r,a,!1,null,null,null),S=P.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(e){return e(S)}}).$mount("#app")},9921:function(e,t,n){}});
//# sourceMappingURL=app.aa25e451.js.map