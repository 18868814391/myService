(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-716a2376"],{2066:function(t,s,e){"use strict";var n=e("d238");e.n(n).a},b94e:function(t,s,e){"use strict";e.r(s);var n={data:function(){return{inputMsg:""}},computed:{to:function(){return this.$route.params.teamId}},methods:{sendMsg:function(){/^\s*$/.test(this.inputMsg)?this.$vux.alert.show({title:"请不要发送空消息"}):(this.$store.dispatch("sendMsg",{type:"text",scene:"team",to:this.to,text:this.inputMsg,needMsgReceipt:!0}),history.go(-1))}}},i=(e("2066"),e("2877")),a=Object(i.a)(n,function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{staticClass:"g-inherit m-article p-msg-receipt"},[e("x-header",{staticClass:"m-tab",attrs:{"left-options":{backText:" "}}},[e("h1",{staticClass:"m-tab-top"},[s._v("发送已读回执消息")]),e("a",{attrs:{slot:"left"},slot:"left"})]),e("div",{staticClass:"g-body"},[e("group",[e("x-textarea",{attrs:{placeholder:"输入消息内容"},model:{value:s.inputMsg,callback:function(t){s.inputMsg=t},expression:"inputMsg"}}),e("x-button",{attrs:{type:"primary"},nativeOn:{click:function(t){return s.sendMsg(t)}}},[s._v("发送")])],1),e("p",{staticClass:"tip"},[s._v("\n      已读回执能力支持文本、图片、音频、视频、文件、自定义等消息类型。此处仅以文本消息作为演示，开发者可以根据具体业务场景进行功能设计。\n    ")])],1)],1)},[],!1,null,null,null);s.default=a.exports},d238:function(t,s,e){}}]);