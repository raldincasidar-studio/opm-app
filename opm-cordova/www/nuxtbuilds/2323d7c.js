(window.webpackJsonp=window.webpackJsonp||[]).push([[8,2],{293:function(t,e,n){t.exports=n.p+"img/Background.b705b56.png"},294:function(t,e,n){var content=n(296);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(71).default)("1807ced1",content,!0,{sourceMap:!1})},295:function(t,e,n){"use strict";n(294)},296:function(t,e,n){var r=n(70),o=n(147),c=n(293),l=r(!1),d=o(c);l.push([t.i,".fade-enter-active[data-v-89620b2c],.fade-leave-active[data-v-89620b2c]{transition:opacity .3s ease-in-out}.fade-enter[data-v-89620b2c],.fade-leave-to[data-v-89620b2c]{opacity:0;transition:all .3s cubic-bezier(.4,0,.2,1) 0s}.slide-enter-active[data-v-89620b2c],.slide-leave-active[data-v-89620b2c]{transition:transform .3s cubic-bezier(.4,0,.2,1)}.slide-enter[data-v-89620b2c],.slide-leave-to[data-v-89620b2c]{transform:translateX(-100%);transition:all .3s cubic-bezier(.4,0,.2,1) 0s}.navbar[data-v-89620b2c]{display:flex;flex-direction:row;align-items:center;padding:5px 10px;z-index:999;position:sticky;top:0;box-shadow:0 3px 6px rgba(0,0,0,.05);background-color:rgba(221,244,255,.7411764706);-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px)}.navbar a.menu[data-v-89620b2c]{padding:10px 10px 9px;border-radius:50%}.navbar a.menu i.material-icons[data-v-89620b2c]{font-size:30px}.navbar .title[data-v-89620b2c]{width:100%;padding:14px;font-size:20px;color:#03263f}.backdrop[data-v-89620b2c]{z-index:99999998;background-color:rgba(0,0,0,.291);right:0}.backdrop[data-v-89620b2c],.sidenav[data-v-89620b2c]{position:fixed;top:0;left:0;bottom:0}.sidenav[data-v-89620b2c]{background-color:#ddf4ff;box-shadow:3px 0 6px rgba(0,0,0,.078);width:100%;max-width:300px;z-index:99999999}.sidenav .image[data-v-89620b2c]{padding:130px;background:url("+d+") no-repeat bottom;background-size:cover}.sidenav .content[data-v-89620b2c]{margin-top:-200px}.sidenav .content .stall-icon[data-v-89620b2c]{padding:20px;display:inline-block;border-radius:50%;background-color:rgba(0,0,0,.077);margin:20px}.sidenav .content .stall-icon i.material-icons[data-v-89620b2c]{font-size:50px;color:#0b63e6}.sidenav .content .stall[data-v-89620b2c]{margin:5px 20px;font-size:24px;font-weight:700}.sidenav .content .name[data-v-89620b2c]{font-size:15px;font-weight:400;margin:0 20px 20px}.sidenav .content .menu-item[data-v-89620b2c]{padding:10px 20px;display:block;text-decoration:none}.sidenav .content .menu-item i.material-icons[data-v-89620b2c]{font-size:35px;margin-right:20px;color:#0b63e6}.sidenav .content .menu-item span[data-v-89620b2c]{font-weight:700}.sidenav .content .menu-item.active[data-v-89620b2c]{background-color:rgba(0,0,0,.042)}",""]),t.exports=l},297:function(t,e,n){"use strict";n.r(e);n(46),n(31),n(45),n(16),n(72),n(37),n(73);var r=n(27),o=(n(26),n(74),n(75));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={props:["back","title"],data:function(){return{sidenav:!1}},computed:l({},Object(o.c)("auth",["auth"])),methods:l(l({},Object(o.b)("auth",["removeAuth"])),{},{logOut:function(){this.removeAuth(),this.$swal.fire({title:"Logged Out!",toast:!0,timer:3e3,position:"top",icon:"success",timerProgressBar:!0,showCloseButton:!1,showConfirmButton:!1}),this.$router.replace("/login")}})},v=(n(295),n(55)),component=Object(v.a)(d,(function(){var t=this,e=t._self._c;return e("eh",[e("div",{staticClass:"navbar"},[t.back?t._e():e("a",{directives:[{name:"wave",rawName:"v-wave"}],staticClass:"menu",on:{click:function(e){t.sidenav=!0}}},[e("i",{staticClass:"material-icons"},[t._v("menu")])]),t.back?e("a",{directives:[{name:"wave",rawName:"v-wave"}],staticClass:"menu",on:{click:function(e){return t.$router.go(-1)}}},[e("i",{staticClass:"material-icons"},[t._v("arrow_back")])]):t._e(),e("a",{staticClass:"title"},[t._v(t._s(t.title||"Opol Public Market"))]),t.back?t._e():e("nuxt-link",{directives:[{name:"wave",rawName:"v-wave"}],staticClass:"menu right",attrs:{to:"/notifications"}},[e("i",{staticClass:"material-icons"},[t._v("notifications")])])],1),e("Transition",{attrs:{name:"fade"}},[t.sidenav?e("div",{staticClass:"backdrop",on:{click:function(e){t.sidenav=!1}}}):t._e()]),e("Transition",{attrs:{name:"slide"}},[t.sidenav?e("div",{staticClass:"sidenav"},[e("div",{staticClass:"image"}),e("div",{staticClass:"content"},[e("div",{staticClass:"stall-icon"},[e("i",{staticClass:"material-icons"},[t._v("store")])]),e("h6",{staticClass:"stall"},[t._v(t._s(t.auth.stall_no?"Stall # "+t.auth.stall_no:"No Stall Number"))]),e("h6",{staticClass:"name"},[t._v(t._s(t.auth.firstname)+" "+t._s(t.auth.lastname))]),e("nuxt-link",{directives:[{name:"wave",rawName:"v-wave"}],staticClass:"menu-item active",attrs:{to:"/dashboard"}},[e("i",{staticClass:"material-icons"},[t._v("store")]),e("span",[t._v("Home")])]),t.auth.stall_no?e("nuxt-link",{directives:[{name:"wave",rawName:"v-wave"}],staticClass:"menu-item",attrs:{to:"/make-a-payment"}},[e("i",{staticClass:"material-icons"},[t._v("payments")]),e("span",[t._v("Make A Payment")])]):t._e(),e("nuxt-link",{directives:[{name:"wave",rawName:"v-wave"}],staticClass:"menu-item",attrs:{to:"/record-history"}},[e("i",{staticClass:"material-icons"},[t._v("receipt_long")]),e("span",[t._v("View Record History")])]),t.auth.stall_no?e("nuxt-link",{directives:[{name:"wave",rawName:"v-wave"}],staticClass:"menu-item",attrs:{to:"/balance"}},[e("i",{staticClass:"material-icons"},[t._v("account_balance")]),e("span",[t._v("View Balance")])]):t._e(),e("a",{directives:[{name:"wave",rawName:"v-wave"}],staticClass:"menu-item",on:{click:t.logOut}},[e("i",{staticClass:"material-icons"},[t._v("logout")]),e("span",[t._v("Logout")])])],1)]):t._e()])],1)}),[],!1,null,"89620b2c",null);e.default=component.exports},303:function(t,e,n){var content=n(317);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(71).default)("7b79f0c0",content,!0,{sourceMap:!1})},315:function(t,e,n){t.exports=n.p+"img/gcash.e99a0cc.png"},316:function(t,e,n){"use strict";n(303)},317:function(t,e,n){var r=n(70),o=n(147),c=n(293),l=r(!1),d=o(c);l.push([t.i,".page[data-v-a5adba58]{min-height:100vh;background-color:#ddf4ff}.image[data-v-a5adba58]{padding:150px;background:url("+d+") no-repeat bottom;background-size:cover}.contents[data-v-a5adba58]{padding:15px;margin-top:-100px}.contents h5.stall[data-v-a5adba58]{font-size:30px;font-weight:700;text-align:center;border-bottom:2px dashed;padding:10px;margin:5px 0 50px}.contents h6.steps[data-v-a5adba58]{font-size:19px;margin:20px 0}.contents .gcash-card[data-v-a5adba58]{background:linear-gradient(to bottom right,#0071ba,#1379bb) no-repeat 50%;border-radius:25px;padding:20px;margin:15px 0}.contents .gcash-card img[data-v-a5adba58]{width:100%;max-width:190px}.contents .gcash-card .context[data-v-a5adba58]{margin-top:30px}.contents .gcash-card .context .number[data-v-a5adba58]{font-size:23px;color:#fff}.contents .gcash-card .context .name[data-v-a5adba58]{font-size:16px;color:#fff;font-weight:400;opacity:.8}.contents .input-field[data-v-a5adba58]{margin:30px 10px;position:relative}.contents .input-field input[data-v-a5adba58]{width:100%;padding:15px 25px 15px 70px;background-color:rgba(0,0,0,.058);border:0;font-size:16px;border-radius:14px}.contents .input-field input[data-v-a5adba58]::-webkit-file-upload-button{display:none}.contents .input-field i.material-icons[data-v-a5adba58]{position:absolute;font-size:30px;color:#0b63e6;padding:12px}.contents button[data-v-a5adba58]{display:block;width:100%;padding:13px;color:#fff;font-size:16px;text-transform:uppercase;font-weight:700;background-color:#0b63e6;border:0;border-radius:10px;margin-bottom:20px}",""]),t.exports=l},328:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"gcash-card"},[e("img",{attrs:{src:n(315)}}),e("div",{staticClass:"context"},[e("h5",{staticClass:"number"},[t._v("0951-795-5767")]),e("h6",{staticClass:"name"},[t._v("Juan Luna Andres")])])])},function(){var t=this._self._c;return t("div",{staticClass:"input-field"},[t("i",{staticClass:"material-icons"},[this._v("upload_file")]),t("input",{attrs:{type:"file",accept:"image/*",id:"file"}})])}],o=(n(46),n(31),n(45),n(16),n(72),n(37),n(73),n(14)),c=n(27),l=(n(76),n(26),n(74),n(75));function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var v={data:function(){return{reference_number:""}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(l.c)("auth",["auth"])),mounted:function(){this.auth.stall_no||(this.$swal.fire({title:"You dont have a stall # yet.",text:"Please contact the Administrator",icon:"warning",showCloseButton:!1}),this.$router.replace("/dashboard"))},methods:{submitPayment:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!=t.reference_number){e.next=2;break}return e.abrupt("return",t.$swal.fire({title:"Empty reference number",toast:!0,timer:3e3,position:"top",icon:"error",timerProgressBar:!0,showCloseButton:!1,showConfirmButton:!1}));case 2:if(n=document.querySelector("#file").files[0]){e.next=5;break}return e.abrupt("return",t.$swal.fire({title:"File is empty",toast:!0,timer:3e3,position:"top",icon:"error",timerProgressBar:!0,showCloseButton:!1,showConfirmButton:!1}));case 5:return(r=new FormData).append("gcash_proof",n),r.append("gcash_reference",t.reference_number),r.append("id",t.auth.id),e.prev=9,e.next=12,t.$axios.post("/make-payment",r,{headers:{"Content-Type":"multipart/form-data"}});case 12:e.next=19;break;case 14:return e.prev=14,e.t0=e.catch(9),console.error(e.t0),t.$swal.fire({title:"Server Error!",toast:!0,timer:3e3,position:"top",icon:"error",timerProgressBar:!0,showCloseButton:!1,showConfirmButton:!1}),e.abrupt("return");case 19:t.$swal.fire({title:"Payment successfuly uploaded!",toast:!0,timer:3e3,position:"top",icon:"success",timerProgressBar:!0,showCloseButton:!1,showConfirmButton:!1}),t.$router.replace("/dashboard");case 21:case"end":return e.stop()}}),e,null,[[9,14]])})))()}}},m=v,f=(n(316),n(55)),component=Object(f.a)(m,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"page"},[e("Navbar",{attrs:{title:"Make A Payement",back:"true"}}),e("div",{staticClass:"image"}),e("div",{staticClass:"contents"},[e("h5",{staticClass:"stall"},[t._v("Make a Payment")]),e("h6",{staticClass:"steps"},[t._v("Step 1: Send your payment "),e("b",[t._v("(PHP "+t._s(t.auth.monthlypay)+")")]),t._v(" to:")]),t._m(0),e("h6",{staticClass:"steps"},[t._v("STEP 2: Upload your Payment Receipt")]),t._m(1),e("div",{staticClass:"input-field"},[e("i",{staticClass:"material-icons"},[t._v("123")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.reference_number,expression:"reference_number"}],attrs:{type:"text",placeholder:"Reference Number"},domProps:{value:t.reference_number},on:{input:function(e){e.target.composing||(t.reference_number=e.target.value)}}})]),e("button",{directives:[{name:"wave",rawName:"v-wave"}],on:{click:t.submitPayment}},[t._v("Submit Payment")])])],1)}),r,!1,null,"a5adba58",null);e.default=component.exports;installComponents(component,{Navbar:n(297).default})}}]);