(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"051b":function(e,t,i){},"5abc":function(e,t,i){"use strict";var a=i("9d0a"),n=i.n(a);n.a},"713b":function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"q-pa-md",staticStyle:{height:"100vh"}},[i("q-layout",{staticClass:"shadow-2 rounded-borders",staticStyle:{"min-height":"0px !important"},attrs:{view:"lHh lpr lFf",container:""}},[i("q-header",{attrs:{elevated:""}},[i("div",{staticClass:"q-ma-sm",staticStyle:{display:"flex"}},[i("FileMenu",{staticClass:"top-menu"}),i("EditMenu",{staticClass:"top-menu"}),i("ViewMenu",{staticClass:"top-menu"})],1),i("div",{staticClass:"q-pa-xs q-pl-md row items-center"},[i("ToolsButtonGroup",{staticClass:"menu-margin"}),i("StrokeWidthInput",{staticClass:"menu-margin"}),i("AppColorPicker",{staticClass:"menu-margin"})],1)]),i("q-page-container",[i("q-page",[i("router-view")],1)],1)],1)],1)},n=[],s=i("fea4"),o=i("a8b5"),r=i("d85d"),c=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"cursor-pointer non-selectable",attrs:{id:"menu-file"}},[e._v("\n  Edit\n  "),i("q-menu",[i("q-list",{staticStyle:{"min-width":"100px"},attrs:{dense:""}},[i("q-item",{style:e.editor.CanUndo()?{}:e.GetUnselectableStyle(),attrs:{clickable:e.editor.CanUndo(),"v-close-popup":e.editor.CanUndo()},on:{click:function(t){return e.editor.Undo()}}},[i("q-item-section",[e._v("Undo")]),i("q-item-section",{attrs:{side:""}},[e._v("Ctrl + Z")])],1),i("q-item",{style:e.editor.CanRedo()?{}:e.GetUnselectableStyle(),attrs:{clickable:e.editor.CanRedo(),"v-close-popup":e.editor.CanRedo()},on:{click:function(t){return e.editor.Redo()}}},[i("q-item-section",[e._v("Redo")]),i("q-item-section",{attrs:{side:""}},[e._v("Ctrl + Y")])],1),i("q-item",{attrs:{clickable:""},on:{click:function(t){e.editor.Copy(e.editor.GetSelectedShape())}}},[i("q-item-section",[e._v("Copy")]),i("q-item-section",{attrs:{side:""}},[e._v("Ctrl + C")])],1),i("q-item",{attrs:{clickable:""},on:{click:function(t){return e.HandlePaste()}}},[i("q-item-section",[e._v("Paste")]),i("q-item-section",{attrs:{side:""}},[e._v("Ctrl + V")])],1)],1)],1)],1)},l=[],d=i("5e53"),u=i("ea0b"),p={name:"EditMenu",data:function(){return{editor:d["a"].editor}},methods:{GetUnselectableStyle:function(){return{color:"lightgrey"}},HandlePaste:function(){var e=new u["a"](this.editor,{x:0,y:0});e.Execute()}}},m=p,v=(i("5abc"),i("2877")),b=i("4e73"),f=i("1c1c"),h=i("66e5"),q=i("4074"),C=i("7f67"),_=i("eebe"),w=i.n(_),k=Object(v["a"])(m,c,l,!1,null,"6b4f3f43",null),y=k.exports;w()(k,"components",{QMenu:b["a"],QList:f["a"],QItem:h["a"],QItemSection:q["a"]}),w()(k,"directives",{ClosePopup:C["a"]});var S=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"cursor-pointer non-selectable",attrs:{id:"menu-view"}},[e._v("\n  View\n  "),i("q-menu",[i("q-list",{staticStyle:{"min-width":"100px"},attrs:{dense:""}},[e._e(),i("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""},on:{click:function(t){e.editor.shapesListVisible=!e.editor.shapesListVisible}}},[i("q-item-section",{attrs:{side:""}},[e.editor.shapesListVisible?i("span",[e._v("✓")]):e._e()]),i("q-item-section",[e._v("Show Created Shapes List")])],1),i("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""},on:{click:function(t){e.editor.shapeAttributesVisible=!e.editor.shapeAttributesVisible}}},[i("q-item-section",{attrs:{side:""}},[e.editor.shapeAttributesVisible?i("span",[e._v("✓")]):e._e()]),i("q-item-section",[e._v("Show Shape Attributes")])],1)],1)],1)],1)},g=[],M={name:"FileMenu",data:function(){return{editor:d["a"].editor}},methods:{ToggleDarkMode:function(){this.$q.dark.toggle()}}},Q=M,x=(i("d587"),Object(v["a"])(Q,S,g,!1,null,"5d3cbe7e",null)),V=x.exports;w()(x,"components",{QMenu:b["a"],QList:f["a"],QItem:h["a"],QItemSection:q["a"]}),w()(x,"directives",{ClosePopup:C["a"]});var P=i("9b71"),E={name:"MainLayout",components:{ToolsButtonGroup:s["a"],AppColorPicker:o["a"],FileMenu:r["a"],EditMenu:y,ViewMenu:V,StrokeWidthInput:P["a"]}},L=E,U=(i("c269"),i("4d5a")),A=i("e359"),G=i("09e3"),I=i("9989"),R=Object(v["a"])(L,a,n,!1,null,"31d83fa9",null);t["default"]=R.exports;w()(R,"components",{QLayout:U["a"],QHeader:A["a"],QPageContainer:G["a"],QPage:I["a"]})},"9d0a":function(e,t,i){},a5b2:function(e,t,i){},c269:function(e,t,i){"use strict";var a=i("051b"),n=i.n(a);n.a},d587:function(e,t,i){"use strict";var a=i("a5b2"),n=i.n(a);n.a}}]);