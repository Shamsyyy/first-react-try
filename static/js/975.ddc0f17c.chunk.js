"use strict";(self.webpackChunkreact_1=self.webpackChunkreact_1||[]).push([[975],{8975:function(e,s,n){n.r(s),n.d(s,{default:function(){return A}});var i=n(2791),a=n(2906),t="Dialogs_dialogs__6LdAN",r="Dialogs_dialogsItems__xWIyo",d="Dialogs_messages__Luhif",o="Dialogs_addPost__zYOfw",u="DialogItem_dialog__84T3t",c=n(1087),l=n(184),g=function(e){var s="/dialogs/"+e.id;return(0,l.jsx)("div",{className:u,children:(0,l.jsx)(c.OL,{to:s,children:e.name})})},m="Message_message__-oD1C",h=function(e){return(0,l.jsx)("div",{className:m,children:e.message})},f=n(6139),x=n(704),_=n(8610),j=n(7307),v=(0,x.Z)({form:"dialogAddMessageForm"})((function(e){return(0,l.jsxs)("form",{onSubmit:e.handleSubmit,children:[(0,l.jsx)("div",{children:(0,l.jsx)(f.Z,{component:j.gx,name:"newMessageText",placeholder:"Enter you text",validate:[_.C,(0,_.D)(50)]})}),(0,l.jsx)("div",{children:(0,l.jsx)("button",{children:"Send a message"})})]})})),p=function(e){var s=e.dialogs.map((function(e){return(0,l.jsx)(g,{name:e.name,id:e.id},e.id)})),n=e.messages.map((function(e){return(0,l.jsx)(h,{message:e.message},e.id)}));return(0,l.jsxs)("div",{className:t,children:[(0,l.jsx)("div",{className:r,children:s}),(0,l.jsxs)("div",{className:d,children:[n,(0,l.jsx)("div",{className:o,children:(0,l.jsx)(v,{onSubmit:function(s){e.sendMessage(s.newMessageText)}})})]})]})},M=n(8687),w=n(1413),D=n(5671),N=n(3144),Z=n(136),b=n(516),C=n(7689),k=function(e){return{isAuth:e.authReducer.isAuth}},A=(0,n(7781).qC)((0,M.$j)((function(e){return{dialogs:e.dialogsReducer.dialogs,messages:e.dialogsReducer.messages,newMessageText:e.dialogsReducer.newMessageText}}),(function(e){return{sendMessage:function(s){e((0,a.B)(s))}}})),(function(e){var s=function(s){(0,Z.Z)(i,s);var n=(0,b.Z)(i);function i(){return(0,D.Z)(this,i),n.apply(this,arguments)}return(0,N.Z)(i,[{key:"render",value:function(){return this.props.isAuth?(0,l.jsx)(e,(0,w.Z)({},this.props)):(0,l.jsx)(C.Fg,{to:"/Login"})}}]),i}(i.Component);return(0,M.$j)(k)(s)}))(p)}}]);
//# sourceMappingURL=975.ddc0f17c.chunk.js.map