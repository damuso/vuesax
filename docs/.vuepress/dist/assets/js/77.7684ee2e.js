(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{281:function(t,i,n){},349:function(t,i,n){"use strict";var e=n(281);n.n(e).a},397:function(t,i,n){"use strict";n.r(i);var e={data:function(){return{val:null}},methods:{prompt:function(){var t=this;this.$vs.prompt({title:"Dialog Confirm Default",text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",color:"primary",input:{placeholder:"Name",value:this.val,maxLength:20,type:"text"},confirm:function(i){t.val=i,t.$vs.notify({title:"Muy Bien",text:"Gracias "+i,color:"success"})},cancel:function(i){t.$vs.notify({title:"Cancel",text:"Gracias "+i,color:"danger"})}})}}},s=(n(349),n(0)),a=Object(s.a)(e,function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"centerx"},[i("div",{staticClass:"modelx"},[this._v("\n    "+this._s(null==this.val?"null":this.val)+"\n  ")]),i("vs-button",{attrs:{"vs-type":"primary-border"},on:{click:this.prompt}},[this._v("Run prompt")])],1)},[],!1,null,null,null);i.default=a.exports}}]);