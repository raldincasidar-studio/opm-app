(window.webpackJsonp=window.webpackJsonp||[]).push([[10,2],{288:function(t,e,n){t.exports=n.p+"img/Background.b705b56.png"},289:function(t,e,n){var content=n(291);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(70).default)("828ea73c",content,!0,{sourceMap:!1})},290:function(t,e,n){"use strict";n(289)},291:function(t,e,n){var o=n(69),c=n(145),r=n(288),d=o(!1),l=c(r);d.push([t.i,".fade-enter-active[data-v-48e530ee],.fade-leave-active[data-v-48e530ee]{transition:opacity .3s ease-in-out}.fade-enter[data-v-48e530ee],.fade-leave-to[data-v-48e530ee]{opacity:0;transition:all .3s cubic-bezier(.4,0,.2,1) 0s}.slide-enter-active[data-v-48e530ee],.slide-leave-active[data-v-48e530ee]{transition:transform .3s cubic-bezier(.4,0,.2,1)}.slide-enter[data-v-48e530ee],.slide-leave-to[data-v-48e530ee]{transform:translateX(-100%);transition:all .3s cubic-bezier(.4,0,.2,1) 0s}.navbar[data-v-48e530ee]{display:flex;flex-direction:row;align-items:center;padding:5px 10px;z-index:99999;position:sticky;top:0;box-shadow:0 3px 6px rgba(0,0,0,.05);background-color:rgba(221,244,255,.7411764706);-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px)}.navbar a.menu[data-v-48e530ee]{padding:10px 10px 9px;border-radius:50%}.navbar a.menu i.material-icons[data-v-48e530ee]{font-size:30px}.navbar .title[data-v-48e530ee]{width:100%;padding:14px;font-size:20px;color:#03263f}.backdrop[data-v-48e530ee]{z-index:99999998;background-color:rgba(0,0,0,.291);right:0}.backdrop[data-v-48e530ee],.sidenav[data-v-48e530ee]{position:fixed;top:0;left:0;bottom:0}.sidenav[data-v-48e530ee]{background-color:#ddf4ff;box-shadow:3px 0 6px rgba(0,0,0,.078);width:100%;max-width:300px;z-index:99999999}.sidenav .image[data-v-48e530ee]{padding:130px;background:url("+l+") no-repeat bottom;background-size:cover}.sidenav .content[data-v-48e530ee]{margin-top:-200px}.sidenav .content .stall-icon[data-v-48e530ee]{padding:20px;display:inline-block;border-radius:50%;background-color:rgba(0,0,0,.077);margin:20px}.sidenav .content .stall-icon i.material-icons[data-v-48e530ee]{font-size:50px;color:#0b63e6}.sidenav .content .stall[data-v-48e530ee]{margin:5px 20px;font-size:24px;font-weight:700}.sidenav .content .name[data-v-48e530ee]{font-size:15px;font-weight:400;margin:0 20px 20px}.sidenav .content .menu-item[data-v-48e530ee]{padding:10px 20px;display:block;text-decoration:none}.sidenav .content .menu-item i.material-icons[data-v-48e530ee]{font-size:35px;margin-right:20px;color:#0b63e6}.sidenav .content .menu-item span[data-v-48e530ee]{font-weight:700}.sidenav .content .menu-item.active[data-v-48e530ee]{background-color:rgba(0,0,0,.042)}",""]),t.exports=d},292:function(t,e,n){"use strict";n.r(e);var o={props:["back","title"],data:function(){return{sidenav:!1}}},c=(n(290),n(51)),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("eh",[e("div",{staticClass:"navbar"},[t.back?t._e():e("a",{directives:[{name:"wave",rawName:"v-wave"}],staticClass:"menu",on:{click:function(e){t.sidenav=!0}}},[e("i",{staticClass:"material-icons"},[t._v("menu")])]),t.back?e("a",{directives:[{name:"wave",rawName:"v-wave"}],staticClass:"menu",on:{click:function(e){return t.$router.go(-1)}}},[e("i",{staticClass:"material-icons"},[t._v("arrow_back")])]):t._e(),e("a",{staticClass:"title"},[t._v(t._s(t.title||"Opol Public Market"))]),t.back?t._e():e("nuxt-link",{directives:[{name:"wave",rawName:"v-wave"}],staticClass:"menu right",attrs:{to:"/notifications"}},[e("i",{staticClass:"material-icons"},[t._v("notifications")])])],1),e("Transition",{attrs:{name:"fade"}},[t.sidenav?e("div",{staticClass:"backdrop",on:{click:function(e){t.sidenav=!1}}}):t._e()]),e("Transition",{attrs:{name:"slide"}},[t.sidenav?e("div",{staticClass:"sidenav"},[e("div",{staticClass:"image"}),e("div",{staticClass:"content"},[e("div",{staticClass:"stall-icon"},[e("i",{staticClass:"material-icons"},[t._v("store")])]),e("h6",{staticClass:"stall"},[t._v("Stall #16")]),e("h6",{staticClass:"name"},[t._v("Juan Luna De pedro")]),e("nuxt-link",{directives:[{name:"wave",rawName:"v-wave"}],staticClass:"menu-item active",attrs:{to:"/dashboard"}},[e("i",{staticClass:"material-icons"},[t._v("store")]),e("span",[t._v("Home")])]),e("nuxt-link",{directives:[{name:"wave",rawName:"v-wave"}],staticClass:"menu-item",attrs:{to:"/make-a-payment"}},[e("i",{staticClass:"material-icons"},[t._v("payments")]),e("span",[t._v("Make A Payment")])]),e("nuxt-link",{directives:[{name:"wave",rawName:"v-wave"}],staticClass:"menu-item",attrs:{to:"/record-history"}},[e("i",{staticClass:"material-icons"},[t._v("receipt_long")]),e("span",[t._v("View Record History")])]),e("nuxt-link",{directives:[{name:"wave",rawName:"v-wave"}],staticClass:"menu-item",attrs:{to:"/balance"}},[e("i",{staticClass:"material-icons"},[t._v("account_balance")]),e("span",[t._v("View Balance")])]),e("nuxt-link",{directives:[{name:"wave",rawName:"v-wave"}],staticClass:"menu-item",attrs:{to:"/login"}},[e("i",{staticClass:"material-icons"},[t._v("logout")]),e("span",[t._v("Logout")])])],1)]):t._e()])],1)}),[],!1,null,"48e530ee",null);e.default=component.exports},300:function(t,e,n){var content=n(316);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(70).default)("7ee06380",content,!0,{sourceMap:!1})},315:function(t,e,n){"use strict";n(300)},316:function(t,e,n){var o=n(69),c=n(145),r=n(288),d=o(!1),l=c(r);d.push([t.i,".page[data-v-188b3b0c]{min-height:100vh;background-color:#ddf4ff}.image[data-v-188b3b0c]{padding:150px;background:url("+l+") no-repeat bottom;background-size:cover}.contents[data-v-188b3b0c]{padding:15px;margin-top:-100px}.contents .center[data-v-188b3b0c]{text-align:center;padding:0;margin:-200px 0 30px}.contents img[data-v-188b3b0c]{width:100%;max-width:150px;margin:auto}.contents h5.stall[data-v-188b3b0c]{font-size:30px;font-weight:700;text-align:center;border-bottom:2px dashed;padding:10px;margin:5px 0 50px}.contents h6.name[data-v-188b3b0c]{text-align:center;font-size:19px;font-weight:400;color:#0b63e6;margin-bottom:20px}.contents .grid-buttons[data-v-188b3b0c]{display:flex}.contents .grid-buttons a[data-v-188b3b0c]{padding:10px;border-radius:15px;border:2px solid rgba(11,99,230,.4470588235);background-color:#daeaf1;text-align:center;width:calc(33.33% - 10px);margin:5px;align-items:center;justify-content:center}.contents .grid-buttons a i.material-icons[data-v-188b3b0c]{font-size:50px;color:#3caeff}.contents .grid-buttons a span[data-v-188b3b0c]{font-size:13px;color:rgba(30,30,30,.7019607843);font-weight:700}.contents .status[data-v-188b3b0c]{display:flex;justify-content:space-between;margin:40px 0;align-items:center}.contents .status h5[data-v-188b3b0c]{font-size:20px}.contents .status .tag[data-v-188b3b0c]{padding:5px 15px;border:1px solid #32bf45;border-radius:10px;color:#32bf45}.contents .status .tag i.material-icons[data-v-188b3b0c]{margin-right:10px;color:#32bf45}.contents .status .tag span[data-v-188b3b0c]{color:#32bf45;font-size:15px}.contents h3.heading[data-v-188b3b0c]{margin:30px 30px 20px;font-size:20px;text-align:center}.contents table[data-v-188b3b0c]{width:100%;font-size:17px;border-collapse:collapse}.contents table thead[data-v-188b3b0c]{padding:15px 10px;border-bottom:1px solid rgba(0,0,0,.159)}.contents table th[data-v-188b3b0c]{text-align:left;padding:10px}.contents table th[data-v-188b3b0c]:nth-child(2){text-align:center}.contents table th[data-v-188b3b0c]:nth-child(3){text-align:right}.contents table tr[data-v-188b3b0c]{border-bottom:1px solid rgba(0,0,0,.159)}.contents table td[data-v-188b3b0c]{text-align:left;padding:15px 10px}.contents table td[data-v-188b3b0c]:nth-child(2){text-align:center}.contents table td[data-v-188b3b0c]:nth-child(3){text-align:right}.contents table td.green[data-v-188b3b0c]{color:#32bf45}.contents table td.orange[data-v-188b3b0c]{color:#c1652b}",""]),t.exports=d},326:function(t,e,n){"use strict";n.r(e);n(315);var o=n(51),component=Object(o.a)({},(function(){var t=this._self._c;return t("div",{staticClass:"page"},[t("Navbar",{attrs:{title:"Payment History",back:"true"}}),t("div",{staticClass:"image"}),this._m(0)],1)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"contents"},[e("h5",{staticClass:"stall"},[t._v("Record History")]),e("table",[e("thead",[e("th",[t._v("Date")]),e("th",[t._v("Payment")]),e("th",[t._v("Status")])]),e("tbody",[e("tr",[e("td",[t._v("Oct 27, 2022")]),e("td",[t._v("PHP 3,499.00")]),e("td",{staticClass:"green"},[t._v("Verified")])]),e("tr",[e("td",[t._v("Oct 27, 2022")]),e("td",[t._v("PHP 3,499.00")]),e("td",{staticClass:"green"},[t._v("Verified")])]),e("tr",[e("td",[t._v("Oct 27, 2022")]),e("td",[t._v("PHP 3,499.00")]),e("td",{staticClass:"orange"},[t._v("Under Verif.")])]),e("tr",[e("td",[t._v("Oct 27, 2022")]),e("td",[t._v("PHP 3,499.00")]),e("td",{staticClass:"green"},[t._v("Verified")])])])])])}],!1,null,"188b3b0c",null);e.default=component.exports;installComponents(component,{Navbar:n(292).default})}}]);