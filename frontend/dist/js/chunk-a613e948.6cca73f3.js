(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a613e948"],{"2cda":function(t,n,a){},"4ec3":function(t,n,a){"use strict";a.d(n,"p",(function(){return i})),a.d(n,"o",(function(){return r})),a.d(n,"h",(function(){return c})),a.d(n,"j",(function(){return u})),a.d(n,"i",(function(){return p})),a.d(n,"c",(function(){return d})),a.d(n,"d",(function(){return l})),a.d(n,"r",(function(){return f})),a.d(n,"e",(function(){return h})),a.d(n,"f",(function(){return g})),a.d(n,"k",(function(){return m})),a.d(n,"g",(function(){return w})),a.d(n,"b",(function(){return v})),a.d(n,"q",(function(){return _})),a.d(n,"n",(function(){return C})),a.d(n,"a",(function(){return P})),a.d(n,"l",(function(){return b}));var e=a("bc3a"),o=a.n(e);o.a.defaults.withCredentials=!1;var s="http://127.0.0.1:6003",i="http://127.0.0.1:6003",r=function(t){return o.a.post("".concat(s,"/login/userLogin"),t).then((function(t){return t.data}))},c=function(t,n){return o.a.get("".concat(s,"/api/project/project_list"),{params:n,headers:t}).then((function(t){return t.data}))},u=function(t,n){return o.a.get("".concat(s,"/api/dynamic/dynamic"),{params:n,headers:t}).then((function(t){return t.data}))},p=function(t,n){return o.a.get("".concat(s,"/api/title/project_info"),{params:n,headers:t}).then((function(t){return t.data}))},d=function(t,n){return o.a.post("".concat(s,"/api/project/add_project"),n,{headers:t}).then((function(t){return t.data}))},l=function(t,n){return o.a.post("".concat(s,"/api/project/del_project"),n,{headers:t}).then((function(t){return t.data}))},f=function(t,n){return o.a.post("".concat(s,"/api/project/update_project"),n,{headers:t}).then((function(t){return t.data}))},h=function(t,n){return o.a.post("".concat(s,"/api/project/disable_project"),n,{headers:t}).then((function(t){return t.data}))},g=function(t,n){return o.a.post("".concat(s,"/api/project/enable_project"),n,{headers:t}).then((function(t){return t.data}))},m=function(t,n){return o.a.get("".concat(s,"/api/member/project_member"),{params:n,headers:t}).then((function(t){return t.data}))},w=function(t,n){return o.a.get("".concat(s,"/api/member/alluserlist"),{params:n,headers:t}).then((function(t){return t.data}))},v=function(t,n){return o.a.post("".concat(s,"/api/automation/add_case"),n,{headers:t}).then((function(t){return t.data}))},_=function(t,n){return o.a.post("".concat(s,"/api/automation/update_case"),n,{headers:t}).then((function(t){return t.data}))},C=function(t,n){return o.a.post("".concat(s,"/api/automation/update_case22"),n,{headers:t}).then((function(t){return t.data}))},P=function(t,n){return o.a.post("".concat(s,"/api/automation/absetWinner"),n,{headers:t}).then((function(t){return t.data}))},b=function(t,n){return o.a.get("".concat(s,"/api/report/auto_test_report"),{params:n,headers:t}).then((function(t){return t.data}))}},"53aa":function(t,n,a){"use strict";a("2cda")},"57de":function(t,n,a){"use strict";a.r(n);var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"login-wrap"},[a("div",{staticClass:"operation-content"},[t._m(0),a("div",{staticClass:"login-body"},[a("div",{staticStyle:{display:"none"}},[t._v(t._s(t.exitsVal))]),a("div",{staticClass:"el-input input-account"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.inputAccount,expression:"inputAccount"}],staticClass:"el-input__inner",attrs:{type:"text",placeholder:"手机号码",maxlength:"11"},domProps:{value:t.inputAccount},on:{focus:function(n){t.passwordClean=!1,t.accountClean=t.inputAccount},input:function(n){n.target.composing||(t.inputAccount=n.target.value)}}})]),t.accountClean?a("i",{staticClass:"input-icon-0  el-icon-circle-cross",on:{click:function(n){return t.handleIconClick()}}}):t._e(),a("div",{staticClass:"password-input"},[1==t.passwordShow?a("el-input",{attrs:{type:"text",placeholder:"密码",maxlength:t.maxlengthP},on:{change:function(n){return t.passeordChange("P")},focus:function(n){t.accountClean=!1,t.passwordClean=t.inputPassword}},model:{value:t.inputPassword,callback:function(n){t.inputPassword=n},expression:"inputPassword"}}):t._e(),0==t.passwordShow?a("div",{staticClass:"hide-password"},[a("el-input",{attrs:{type:"password",placeholder:"密码",maxlength:t.maxlengthP},on:{change:function(n){return t.passeordChange("P")},focus:function(n){t.accountClean=!1,t.passwordClean=t.inputPassword}},model:{value:t.inputPassword,callback:function(n){t.inputPassword=n},expression:"inputPassword"}})],1):t._e(),t.passwordClean?a("i",{staticClass:"input-icon-1  el-icon-circle-cross",on:{click:function(n){return t.clearPassword()}}}):t._e(),a("i",{staticClass:"input-icon-2 el-icon-minus",on:{click:function(n){return t.passwordSeeClick()}}})],1),a("p",{staticClass:"forget-password"},[a("a",{attrs:{href:"javascript:void(0);"},on:{click:function(n){return t.goForgetPassword()}}},[t._v("忘记密码？")])]),t.passwordMistake?a("p",{staticClass:"password-mistake"},[t._m(1),a("a",{attrs:{href:"javascript:void(0);"},on:{click:function(n){return t.goResetPassword()}}},[t._v("重置密码")])]):t._e(),a("el-button",{attrs:{type:t.Info,disabled:t.disabled,loading:t.logining},on:{click:function(n){return t.primaryGo()}}},[t._v("登 录")]),a("p",{staticClass:"login-inquiry"},[t._v("还没有账号？"),a("a",{attrs:{href:"javascript:void(0);"},on:{click:function(n){return t.goSignIn()}}},[t._v("注册新账号")])])],1)]),t._m(2)])},o=[function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"login-title"},[a("span",{staticClass:"title0"},[t._v("X"),a("span",{staticStyle:{color:"#2ec0f6"}},[t._v("plan")])])])},function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("span",[a("i",{staticClass:"el-icon-information"}),t._v("\n            用户名或密码错误，请重新输入或\n          ")])},function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"footer"},[a("p",[t._v("©2020 上海丙晟科技科技有限公司")])])}],s=(a("7f7f"),a("c5f6"),a("a481"),a("4ec3")),i={data:function(){return{ifExist:"",Info:"info",logining:!1,disabled:!0,inputAccount:"",inputPassword:"",passwordShow:!1,passwordClean:!1,accountClean:!1,passwordMistake:!1,maxlengthP:20,minlengthP:6}},watch:{inputAccount:function(){this.accountClean=!1,this.inputAccount=this.inputAccount.replace(/\D/g,""),this.inputAccount?this.accountClean=!0:this.accountClean=!1},ifExist:function(t,n){2===Number(t)?(this.disabled=!1,this.Info="primary"):(this.disabled=!0,this.Info="info")}},computed:{exitsVal:function(){this.ifExist=Number(Boolean(this.inputAccount))+Number(Boolean(this.inputPassword))}},methods:{handleIconClick:function(){this.inputAccount=""},passwordSeeClick:function(){this.passwordShow=!this.passwordShow},clearPassword:function(){this.inputPassword=""},passeordChange:function(t){this.inputPassword&&"P"===t?this.passwordClean=!0:this.passwordClean=!1},primaryGo:function(){var t=this;if(""!==this.inputAccount&&""!==this.inputPassword){this.passwordMistake=!1;var n=!0;if(!n)return console.log("error submit!!"),!1;this.logining=!0;var a={login_name:this.inputAccount,password:this.inputPassword};console.log(a,"loginParams"),Object(s["o"])(a).then((function(n){t.logining=!1;var a=n.msg,e=n.code,o=n.token,s=n.name;200!==e?t.$message({message:a,type:"error"}):(t.$message({message:a,type:"success"}),sessionStorage.setItem("token",JSON.stringify(o)),sessionStorage.setItem("name",JSON.stringify(s)),t.$router.push({path:"/projectList"}))}))}else this.passwordMistake=!0},goForgetPassword:function(){this.$router.push({path:"/forgetPassword"})},goResetPassword:function(){this.$router.push({path:"/resetPassword"})},goSignIn:function(){this.$router.push({path:"/signIn"})}}},r=i,c=(a("ed84"),a("53aa"),a("2877")),u=Object(c["a"])(r,e,o,!1,null,"1c57716a",null);n["default"]=u.exports},"5e1a":function(t,n,a){},ed84:function(t,n,a){"use strict";a("5e1a")}}]);
//# sourceMappingURL=chunk-a613e948.6cca73f3.js.map