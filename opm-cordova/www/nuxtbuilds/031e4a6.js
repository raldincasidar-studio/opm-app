(window.webpackJsonp=window.webpackJsonp||[]).push([[5,2],{288:function(t,e,n){t.exports=n.p+"img/Background.b705b56.png"},289:function(t,e,n){var content=n(291);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(70).default)("828ea73c",content,!0,{sourceMap:!1})},290:function(t,e,n){"use strict";n(289)},291:function(t,e,n){var o=n(69),r=n(145),c=n(288),d=o(!1),l=r(c);d.push([t.i,".fade-enter-active[data-v-48e530ee],.fade-leave-active[data-v-48e530ee]{transition:opacity .3s ease-in-out}.fade-enter[data-v-48e530ee],.fade-leave-to[data-v-48e530ee]{opacity:0;transition:all .3s cubic-bezier(.4,0,.2,1) 0s}.slide-enter-active[data-v-48e530ee],.slide-leave-active[data-v-48e530ee]{transition:transform .3s cubic-bezier(.4,0,.2,1)}.slide-enter[data-v-48e530ee],.slide-leave-to[data-v-48e530ee]{transform:translateX(-100%);transition:all .3s cubic-bezier(.4,0,.2,1) 0s}.navbar[data-v-48e530ee]{display:flex;flex-direction:row;align-items:center;padding:5px 10px;z-index:99999;position:sticky;top:0;box-shadow:0 3px 6px rgba(0,0,0,.05);background-color:rgba(221,244,255,.7411764706);-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px)}.navbar a.menu[data-v-48e530ee]{padding:10px 10px 9px;border-radius:50%}.navbar a.menu i.material-icons[data-v-48e530ee]{font-size:30px}.navbar .title[data-v-48e530ee]{width:100%;padding:14px;font-size:20px;color:#03263f}.backdrop[data-v-48e530ee]{z-index:99999998;background-color:rgba(0,0,0,.291);right:0}.backdrop[data-v-48e530ee],.sidenav[data-v-48e530ee]{position:fixed;top:0;left:0;bottom:0}.sidenav[data-v-48e530ee]{background-color:#ddf4ff;box-shadow:3px 0 6px rgba(0,0,0,.078);width:100%;max-width:300px;z-index:99999999}.sidenav .image[data-v-48e530ee]{padding:130px;background:url("+l+") no-repeat bottom;background-size:cover}.sidenav .content[data-v-48e530ee]{margin-top:-200px}.sidenav .content .stall-icon[data-v-48e530ee]{padding:20px;display:inline-block;border-radius:50%;background-color:rgba(0,0,0,.077);margin:20px}.sidenav .content .stall-icon i.material-icons[data-v-48e530ee]{font-size:50px;color:#0b63e6}.sidenav .content .stall[data-v-48e530ee]{margin:5px 20px;font-size:24px;font-weight:700}.sidenav .content .name[data-v-48e530ee]{font-size:15px;font-weight:400;margin:0 20px 20px}.sidenav .content .menu-item[data-v-48e530ee]{padding:10px 20px;display:block;text-decoration:none}.sidenav .content .menu-item i.material-icons[data-v-48e530ee]{font-size:35px;margin-right:20px;color:#0b63e6}.sidenav .content .menu-item span[data-v-48e530ee]{font-weight:700}.sidenav .content .menu-item.active[data-v-48e530ee]{background-color:rgba(0,0,0,.042)}",""]),t.exports=d},292:function(t,e,n){"use strict";n.r(e);var o={props:["back","title"],data:function(){return{sidenav:!1}}},r=(n(290),n(51)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("eh",[e("div",{staticClass:"navbar"},[t.back?t._e():e("a",{directives:[{name:"wave",rawName:"v-wave"}],staticClass:"menu",on:{click:function(e){t.sidenav=!0}}},[e("i",{staticClass:"material-icons"},[t._v("menu")])]),t.back?e("a",{directives:[{name:"wave",rawName:"v-wave"}],staticClass:"menu",on:{click:function(e){return t.$router.go(-1)}}},[e("i",{staticClass:"material-icons"},[t._v("arrow_back")])]):t._e(),e("a",{staticClass:"title"},[t._v(t._s(t.title||"Opol Public Market"))]),t.back?t._e():e("nuxt-link",{directives:[{name:"wave",rawName:"v-wave"}],staticClass:"menu right",attrs:{to:"/notifications"}},[e("i",{staticClass:"material-icons"},[t._v("notifications")])])],1),e("Transition",{attrs:{name:"fade"}},[t.sidenav?e("div",{staticClass:"backdrop",on:{click:function(e){t.sidenav=!1}}}):t._e()]),e("Transition",{attrs:{name:"slide"}},[t.sidenav?e("div",{staticClass:"sidenav"},[e("div",{staticClass:"image"}),e("div",{staticClass:"content"},[e("div",{staticClass:"stall-icon"},[e("i",{staticClass:"material-icons"},[t._v("store")])]),e("h6",{staticClass:"stall"},[t._v("Stall #16")]),e("h6",{staticClass:"name"},[t._v("Juan Luna De pedro")]),e("nuxt-link",{directives:[{name:"wave",rawName:"v-wave"}],staticClass:"menu-item active",attrs:{to:"/dashboard"}},[e("i",{staticClass:"material-icons"},[t._v("store")]),e("span",[t._v("Home")])]),e("nuxt-link",{directives:[{name:"wave",rawName:"v-wave"}],staticClass:"menu-item",attrs:{to:"/make-a-payment"}},[e("i",{staticClass:"material-icons"},[t._v("payments")]),e("span",[t._v("Make A Payment")])]),e("nuxt-link",{directives:[{name:"wave",rawName:"v-wave"}],staticClass:"menu-item",attrs:{to:"/record-history"}},[e("i",{staticClass:"material-icons"},[t._v("receipt_long")]),e("span",[t._v("View Record History")])]),e("nuxt-link",{directives:[{name:"wave",rawName:"v-wave"}],staticClass:"menu-item",attrs:{to:"/balance"}},[e("i",{staticClass:"material-icons"},[t._v("account_balance")]),e("span",[t._v("View Balance")])]),e("nuxt-link",{directives:[{name:"wave",rawName:"v-wave"}],staticClass:"menu-item",attrs:{to:"/login"}},[e("i",{staticClass:"material-icons"},[t._v("logout")]),e("span",[t._v("Logout")])])],1)]):t._e()])],1)}),[],!1,null,"48e530ee",null);e.default=component.exports},293:function(t,e,n){t.exports=n.p+"img/logo.4a32e48.png"},296:function(t,e,n){var content=n(307);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(70).default)("2322ae54",content,!0,{sourceMap:!1})},306:function(t,e,n){"use strict";n(296)},307:function(t,e,n){var o=n(69),r=n(145),c=n(288),d=o(!1),l=r(c);d.push([t.i,".page[data-v-6481e4e4]{min-height:100vh;background-color:#ddf4ff}.image[data-v-6481e4e4]{padding:150px;background:url("+l+") no-repeat bottom;background-size:cover}.contents[data-v-6481e4e4]{padding:15px}.contents .center[data-v-6481e4e4]{text-align:center;padding:0;margin:-200px 0 30px}.contents img[data-v-6481e4e4]{width:100%;max-width:150px;margin:auto}.contents h5.stall[data-v-6481e4e4]{font-size:25px;font-weight:700;text-align:center;color:#1746a2;margin:5px 0}.contents h6.name[data-v-6481e4e4]{text-align:center;font-size:19px;font-weight:400;color:#0b63e6;margin-bottom:20px}.contents .grid-buttons[data-v-6481e4e4]{display:flex}.contents .grid-buttons a[data-v-6481e4e4]{padding:5px 10px;display:flex;flex-direction:column;border-radius:15px;border:2px solid rgba(11,99,230,.4470588235);background-color:#daeaf1;text-align:center;width:calc(33.33% - 10px);aspect-ratio:1/1;margin:5px;align-items:center;justify-content:center}.contents .grid-buttons a i.material-icons[data-v-6481e4e4]{font-size:40px;color:#3caeff}.contents .grid-buttons a span[data-v-6481e4e4]{font-size:13px;color:rgba(30,30,30,.7019607843);font-weight:700}.contents .status[data-v-6481e4e4]{display:flex;justify-content:space-between;margin:40px 0;align-items:center}.contents .status h5[data-v-6481e4e4]{font-size:20px}.contents .status .tag[data-v-6481e4e4]{padding:5px 15px;border:1px solid #32bf45;border-radius:10px;color:#32bf45}.contents .status .tag i.material-icons[data-v-6481e4e4]{margin-right:10px;color:#32bf45}.contents .status .tag span[data-v-6481e4e4]{color:#32bf45;font-size:15px}.contents h3.heading[data-v-6481e4e4]{margin:30px 30px 20px;font-size:20px;text-align:center}.contents table[data-v-6481e4e4]{width:100%;font-size:17px;border-collapse:collapse}.contents table thead[data-v-6481e4e4]{padding:15px 10px;border-bottom:1px solid rgba(0,0,0,.159)}.contents table th[data-v-6481e4e4]{text-align:left;padding:10px}.contents table th[data-v-6481e4e4]:nth-child(2){text-align:center}.contents table th[data-v-6481e4e4]:nth-child(3){text-align:right}.contents table tr[data-v-6481e4e4]{border-bottom:1px solid rgba(0,0,0,.159)}.contents table td[data-v-6481e4e4]{text-align:left;padding:15px 10px}.contents table td[data-v-6481e4e4]:nth-child(2){text-align:center}.contents table td[data-v-6481e4e4]:nth-child(3){text-align:right}.contents table td.green[data-v-6481e4e4]{color:#32bf45}.contents table td.orange[data-v-6481e4e4]{color:#c1652b}",""]),t.exports=d},322:function(t,e,n){"use strict";n.r(e);var o=[function(){var t=this._self._c;return t("p",{staticClass:"center"},[t("img",{attrs:{src:n(293),label:"Logo"}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"status"},[e("h5",[t._v("Status")]),e("div",{staticClass:"tag"},[e("i",{staticClass:"material-icons"},[t._v("check")]),e("span",[t._v("PAID")])])])},function(){var t=this,e=t._self._c;return e("table",[e("thead",[e("th",[t._v("Date")]),e("th",[t._v("Payment")]),e("th",[t._v("Status")])]),e("tbody",[e("tr",[e("td",[t._v("Oct 27, 2022")]),e("td",[t._v("PHP 3,499.00")]),e("td",{staticClass:"green"},[t._v("Verified")])]),e("tr",[e("td",[t._v("Oct 27, 2022")]),e("td",[t._v("PHP 3,499.00")]),e("td",{staticClass:"green"},[t._v("Verified")])]),e("tr",[e("td",[t._v("Oct 27, 2022")]),e("td",[t._v("PHP 3,499.00")]),e("td",{staticClass:"orange"},[t._v("Under Verif.")])]),e("tr",[e("td",[t._v("Oct 27, 2022")]),e("td",[t._v("PHP 3,499.00")]),e("td",{staticClass:"green"},[t._v("Verified")])])])])}],r=(n(306),n(51)),component=Object(r.a)({},(function(){var t=this,e=t._self._c;return e("div",{staticClass:"page"},[e("Navbar",{attrs:{title:"Dashboard"}}),e("div",{staticClass:"image"}),e("div",{staticClass:"contents"},[t._m(0),e("h5",{staticClass:"stall"},[t._v("Stall #15")]),e("h6",{staticClass:"name"},[t._v("Juan D. Luna")]),e("div",{staticClass:"grid-buttons"},[e("nuxt-link",{directives:[{name:"wave",rawName:"v-wave"}],attrs:{to:"/make-a-payment"}},[e("div",[e("i",{staticClass:"material-icons"},[t._v("payments")]),e("br"),e("span",[t._v("Payment")])])]),e("nuxt-link",{directives:[{name:"wave",rawName:"v-wave"}],attrs:{to:"/record-history"}},[e("div",[e("i",{staticClass:"material-icons"},[t._v("receipt_long")]),e("br"),e("span",[t._v("History")])])]),e("nuxt-link",{directives:[{name:"wave",rawName:"v-wave"}],attrs:{to:"/balance"}},[e("div",[e("i",{staticClass:"material-icons"},[t._v("account_balance")]),e("br"),e("span",[t._v("Balance")])])])],1),t._m(1),e("h3",{staticClass:"heading"},[t._v("Record Summary")]),t._m(2)])],1)}),o,!1,null,"6481e4e4",null);e.default=component.exports;installComponents(component,{Navbar:n(292).default})}}]);