(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cd39b9bc"],{"2f58":function(t,e,n){"use strict";var i=n("fd83"),a=n.n(i);a.a},f461:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"g-inherit m-article p-setting"},[n("x-header",{staticClass:"m-tab",attrs:{"left-options":{backText:" "}}},[n("h1",{staticClass:"m-tab-top"},[t._v(t._s(t.config.title))]),n("a",{attrs:{slot:"left"},slot:"left"}),"select"!==t.config.inputType&&t.config.enable?n("a",{attrs:{slot:"right"},on:{click:function(){return t.update()}},slot:"right"},[t._v("确定")]):t._e()]),n("group",["text"===t.config.inputType?n("x-input",{ref:"input",attrs:{placeholder:t.placeHolder,disabled:!t.config.enable,max:10},model:{value:t.inputModel,callback:function(e){t.inputModel=e},expression:"inputModel"}}):"textarea"===t.config.inputType?n("x-textarea",{ref:"input",attrs:{placeholder:t.placeHolder,readonly:!t.config.enable,max:30},model:{value:t.inputModel,callback:function(e){t.inputModel=e},expression:"inputModel"}}):"select"===t.config.inputType?t._l(t.selects,function(e,i){return n("cell",{key:i,attrs:{"value-align":"left"},nativeOn:{click:function(n){return function(){return t.update(e.key)}()}}},[t._v("\n      "+t._s(e.value)+"\n      "),t.inputModel===e.key?n("span",{staticClass:"icon-selected",attrs:{slot:"child",width:"25",height:"25"},slot:"child"}):t._e()])}):t._e()],2)],1)},a=[],o=n("bd86"),s=n("ed08"),l={data:function(){return{inputModel:"",placeHolder:""}},computed:{config:function(){var t=this.$store.state.teamSettingConfig;if(t.teamId)return this.inputModel=t.defaultValue?t.defaultValue:"",this.placeHolder=t.placeHolder?t.placeHolder:t.enable?"请输入":"无",t;history.go(-1)},selects:function(){var t=s["a"].teamConfigMap[this.config.updateKey],e=[];for(var n in t)t.hasOwnProperty(n)&&e.push({key:n,value:t[n]});return e}},mounted:function(){var t=this;setTimeout(function(){t.$refs.input&&t.$refs.input.focus()},500)},methods:{update:function(t){var e,n=this;if(void 0===t&&this.inputModel.length<1)this.$toast("请输入内容后提交");else{var i=this.config.confirmCallback;if(i&&"function"===typeof i)i(this.config.teamId,this.config.updateKey,t||this.inputModel);else{this.$store.dispatch("showLoading");var a=this.config.updateInfoInTeam?"updateInfoInTeam":"updateTeam";this.$store.dispatch("delegateTeamFunction",{functionName:a,options:(e={teamId:this.config.teamId},Object(o["a"])(e,this.config.updateKey,t||this.inputModel),Object(o["a"])(e,"done",function(t,e){n.$store.dispatch("hideLoading"),t?n.$toast(t):(n.$toast("更改成功"),setTimeout(function(){history.go(-1)},200))}),e)})}}}}},c=l,u=(n("2f58"),n("2877")),r=Object(u["a"])(c,i,a,!1,null,"1662288c",null);e["default"]=r.exports},fd83:function(t,e,n){}}]);
//# sourceMappingURL=chunk-cd39b9bc.aa157ec6.js.map