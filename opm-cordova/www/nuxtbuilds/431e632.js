(window.webpackJsonp=window.webpackJsonp||[]).push([[10,2],{293:function(t,e,n){t.exports=n.p+"img/Background.b705b56.png"},294:function(t,e,n){var content=n(296);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(71).default)("1807ced1",content,!0,{sourceMap:!1})},295:function(t,e,n){"use strict";n(294)},296:function(t,e,n){var o=n(70),r=n(147),c=n(293),d=o(!1),l=r(c);d.push([t.i,".fade-enter-active[data-v-89620b2c],.fade-leave-active[data-v-89620b2c]{transition:opacity .3s ease-in-out}.fade-enter[data-v-89620b2c],.fade-leave-to[data-v-89620b2c]{opacity:0;transition:all .3s cubic-bezier(.4,0,.2,1) 0s}.slide-enter-active[data-v-89620b2c],.slide-leave-active[data-v-89620b2c]{transition:transform .3s cubic-bezier(.4,0,.2,1)}.slide-enter[data-v-89620b2c],.slide-leave-to[data-v-89620b2c]{transform:translateX(-100%);transition:all .3s cubic-bezier(.4,0,.2,1) 0s}.navbar[data-v-89620b2c]{display:flex;flex-direction:row;align-items:center;padding:5px 10px;z-index:999;position:sticky;top:0;box-shadow:0 3px 6px rgba(0,0,0,.05);background-color:rgba(221,244,255,.7411764706);-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px)}.navbar a.menu[data-v-89620b2c]{padding:10px 10px 9px;border-radius:50%}.navbar a.menu i.material-icons[data-v-89620b2c]{font-size:30px}.navbar .title[data-v-89620b2c]{width:100%;padding:14px;font-size:20px;color:#03263f}.backdrop[data-v-89620b2c]{z-index:99999998;background-color:rgba(0,0,0,.291);right:0}.backdrop[data-v-89620b2c],.sidenav[data-v-89620b2c]{position:fixed;top:0;left:0;bottom:0}.sidenav[data-v-89620b2c]{background-color:#ddf4ff;box-shadow:3px 0 6px rgba(0,0,0,.078);width:100%;max-width:300px;z-index:99999999}.sidenav .image[data-v-89620b2c]{padding:130px;background:url("+l+") no-repeat bottom;background-size:cover}.sidenav .content[data-v-89620b2c]{margin-top:-200px}.sidenav .content .stall-icon[data-v-89620b2c]{padding:20px;display:inline-block;border-radius:50%;background-color:rgba(0,0,0,.077);margin:20px}.sidenav .content .stall-icon i.material-icons[data-v-89620b2c]{font-size:50px;color:#0b63e6}.sidenav .content .stall[data-v-89620b2c]{margin:5px 20px;font-size:24px;font-weight:700}.sidenav .content .name[data-v-89620b2c]{font-size:15px;font-weight:400;margin:0 20px 20px}.sidenav .content .menu-item[data-v-89620b2c]{padding:10px 20px;display:block;text-decoration:none}.sidenav .content .menu-item i.material-icons[data-v-89620b2c]{font-size:35px;margin-right:20px;color:#0b63e6}.sidenav .content .menu-item span[data-v-89620b2c]{font-weight:700}.sidenav .content .menu-item.active[data-v-89620b2c]{background-color:rgba(0,0,0,.042)}",""]),t.exports=d},297:function(t,e,n){"use strict";n.r(e);n(46),n(31),n(45),n(16),n(72),n(37),n(73);var o=n(27),r=(n(26),n(74),n(75));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var l={props:["back","title"],data:function(){return{sidenav:!1}},computed:d({},Object(r.c)("auth",["auth"])),methods:d(d({},Object(r.b)("auth",["removeAuth"])),{},{logOut:function(){this.removeAuth(),this.$swal.fire({title:"Logged Out!",toast:!0,timer:3e3,position:"top",icon:"success",timerProgressBar:!0,showCloseButton:!1,showConfirmButton:!1}),this.$router.replace("/login")}})},v=(n(295),n(55)),component=Object(v.a)(l,(function(){var t=this,e=t._self._c;return e("eh",[e("div",{staticClass:"navbar"},[t.back?t._e():e("a",{directives:[{name:"wave",rawName:"v-wave"}],staticClass:"menu",on:{click:function(e){t.sidenav=!0}}},[e("i",{staticClass:"material-icons"},[t._v("menu")])]),t.back?e("a",{directives:[{name:"wave",rawName:"v-wave"}],staticClass:"menu",on:{click:function(e){return t.$router.go(-1)}}},[e("i",{staticClass:"material-icons"},[t._v("arrow_back")])]):t._e(),e("a",{staticClass:"title"},[t._v(t._s(t.title||"Opol Public Market"))]),t.back?t._e():e("nuxt-link",{directives:[{name:"wave",rawName:"v-wave"}],staticClass:"menu right",attrs:{to:"/notifications"}},[e("i",{staticClass:"material-icons"},[t._v("notifications")])])],1),e("Transition",{attrs:{name:"fade"}},[t.sidenav?e("div",{staticClass:"backdrop",on:{click:function(e){t.sidenav=!1}}}):t._e()]),e("Transition",{attrs:{name:"slide"}},[t.sidenav?e("div",{staticClass:"sidenav"},[e("div",{staticClass:"image"}),e("div",{staticClass:"content"},[e("div",{staticClass:"stall-icon"},[e("i",{staticClass:"material-icons"},[t._v("store")])]),e("h6",{staticClass:"stall"},[t._v(t._s(t.auth.stall_no?"Stall # "+t.auth.stall_no:"No Stall Number"))]),e("h6",{staticClass:"name"},[t._v(t._s(t.auth.firstname)+" "+t._s(t.auth.lastname))]),e("nuxt-link",{directives:[{name:"wave",rawName:"v-wave"}],staticClass:"menu-item active",attrs:{to:"/dashboard"}},[e("i",{staticClass:"material-icons"},[t._v("store")]),e("span",[t._v("Home")])]),t.auth.stall_no?e("nuxt-link",{directives:[{name:"wave",rawName:"v-wave"}],staticClass:"menu-item",attrs:{to:"/make-a-payment"}},[e("i",{staticClass:"material-icons"},[t._v("payments")]),e("span",[t._v("Make A Payment")])]):t._e(),e("nuxt-link",{directives:[{name:"wave",rawName:"v-wave"}],staticClass:"menu-item",attrs:{to:"/record-history"}},[e("i",{staticClass:"material-icons"},[t._v("receipt_long")]),e("span",[t._v("View Record History")])]),t.auth.stall_no?e("nuxt-link",{directives:[{name:"wave",rawName:"v-wave"}],staticClass:"menu-item",attrs:{to:"/balance"}},[e("i",{staticClass:"material-icons"},[t._v("account_balance")]),e("span",[t._v("View Balance")])]):t._e(),e("a",{directives:[{name:"wave",rawName:"v-wave"}],staticClass:"menu-item",on:{click:t.logOut}},[e("i",{staticClass:"material-icons"},[t._v("logout")]),e("span",[t._v("Logout")])])],1)]):t._e()])],1)}),[],!1,null,"89620b2c",null);e.default=component.exports},305:function(t,e,n){var content=n(321);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(71).default)("7f61d16c",content,!0,{sourceMap:!1})},320:function(t,e,n){"use strict";n(305)},321:function(t,e,n){var o=n(70),r=n(147),c=n(293),d=o(!1),l=r(c);d.push([t.i,".page[data-v-7df86608]{min-height:100vh;background-color:#ddf4ff}.image[data-v-7df86608]{padding:150px;background:url("+l+") no-repeat bottom;background-size:cover}.contents[data-v-7df86608]{padding:15px;margin-top:-100px}.contents .center[data-v-7df86608]{text-align:center;padding:0;margin:-200px 0 30px}.contents img[data-v-7df86608]{width:100%;max-width:150px;margin:auto}.contents h5.stall[data-v-7df86608]{font-size:30px;font-weight:700;text-align:center;border-bottom:2px dashed;padding:10px;margin:5px 0 50px}.contents h6.name[data-v-7df86608]{text-align:center;font-size:19px;font-weight:400;color:#0b63e6;margin-bottom:20px}.contents .grid-buttons[data-v-7df86608]{display:flex}.contents .grid-buttons a[data-v-7df86608]{padding:10px;border-radius:15px;border:2px solid rgba(11,99,230,.4470588235);background-color:#daeaf1;text-align:center;width:calc(33.33% - 10px);margin:5px;align-items:center;justify-content:center}.contents .grid-buttons a i.material-icons[data-v-7df86608]{font-size:50px;color:#3caeff}.contents .grid-buttons a span[data-v-7df86608]{font-size:13px;color:rgba(30,30,30,.7019607843);font-weight:700}.contents .status[data-v-7df86608]{display:flex;justify-content:space-between;margin:40px 0;align-items:center}.contents .status h5[data-v-7df86608]{font-size:20px}.contents .status .tag[data-v-7df86608]{padding:5px 15px;border:1px solid #32bf45;border-radius:10px;color:#32bf45}.contents .status .tag i.material-icons[data-v-7df86608]{margin-right:10px;color:#32bf45}.contents .status .tag span[data-v-7df86608]{color:#32bf45;font-size:15px}.contents h3.heading[data-v-7df86608]{margin:30px 30px 20px;font-size:20px;text-align:center}.contents table[data-v-7df86608]{width:100%;font-size:17px;border-collapse:collapse}.contents table thead[data-v-7df86608]{padding:15px 10px;border-bottom:1px solid rgba(0,0,0,.159)}.contents table th[data-v-7df86608]{text-align:left;padding:10px}.contents table th[data-v-7df86608]:nth-child(2){text-align:center}.contents table th[data-v-7df86608]:nth-child(3){text-align:right}.contents table tr[data-v-7df86608]{border-bottom:1px solid rgba(0,0,0,.159)}.contents table td[data-v-7df86608]{text-align:left;padding:15px 10px}.contents table td[data-v-7df86608]:nth-child(2){text-align:center}.contents table td[data-v-7df86608]:nth-child(3){text-align:right}.contents table td.green[data-v-7df86608]{color:#32bf45}.contents table td.orange[data-v-7df86608]{color:#c1652b}",""]),t.exports=d},330:function(t,e,n){"use strict";n.r(e);n(46),n(31),n(45),n(16),n(72),n(37),n(73);var o=n(27),r=n(14),c=(n(76),n(75));function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var l={data:function(){return{record_summary:[]}},mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.$axios.get("/get_record_history?id="+t.auth.id).then((function(e){"error"!=e.data.status?(t.record_summary=e.data.record_summary,console.log(e.data)):t.$swal.fire({title:e.data.message,toast:!0,timer:3e3,position:"top",icon:"error",timerProgressBar:!0,showCloseButton:!1,showConfirmButton:!1})})).catch((function(e){console.error(e),t.$swal.fire({title:"Network error",toast:!0,timer:3e3,position:"top",icon:"error",timerProgressBar:!0,showCloseButton:!1,showConfirmButton:!1})}));case 1:case"end":return e.stop()}}),e)})))()},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.c)("auth",["auth"]))},v=l,f=(n(320),n(55)),component=Object(f.a)(v,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"page"},[e("Navbar",{attrs:{title:"Payment History",back:"true"}}),e("div",{staticClass:"image"}),e("div",{staticClass:"contents"},[e("h5",{staticClass:"stall"},[t._v("Record History")]),e("table",[t._m(0),e("tbody",t._l(t.record_summary,(function(n,i){return e("tr",{key:i},[e("td",[t._v(t._s(n.date))]),e("td",[t._v("PHP "+t._s(n.amount))]),e("td",{class:{green:"Verified"==n.status,orange:"Verified"!=n.status}},[t._v(t._s(n.status))])])})),0)])])],1)}),[function(){var t=this,e=t._self._c;return e("thead",[e("th",[t._v("Date")]),e("th",[t._v("Payment")]),e("th",[t._v("Status")])])}],!1,null,"7df86608",null);e.default=component.exports;installComponents(component,{Navbar:n(297).default})}}]);