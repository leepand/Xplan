(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4570591a"],{4928:function(e,t,r){e.exports=r.p+"img/icon-yes.d2f9f035.svg"},"60be":function(e,t,r){e.exports=r.p+"img/icon-no.439e8214.svg"},caa9:function(e,t,r){"use strict";r.r(t);var s=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("section",[s("el-col",{staticClass:"toolbar",staticStyle:{"padding-bottom":"0px"},attrs:{span:24}},[s("el-form",{attrs:{inline:!0,model:e.filters},nativeOn:{submit:function(e){e.preventDefault()}}},[s("el-form-item",[s("el-input",{attrs:{placeholder:"名称"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.getProjectList(t)}},model:{value:e.filters.name,callback:function(t){e.$set(e.filters,"name",t)},expression:"filters.name"}})],1),s("el-form-item",[s("el-button",{attrs:{type:"primary"},on:{click:e.getProjectList}},[e._v("查询")])],1),s("el-form-item",[s("el-button",{attrs:{type:"primary"},on:{click:e.handleAdd}},[e._v("新增")])],1)],1)],1),s("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:e.project,"highlight-current-row":""},on:{"selection-change":e.selsChange}},[s("el-table-column",{attrs:{type:"selection","min-width":"5%"}}),s("el-table-column",{attrs:{prop:"name",label:"项目名称","min-width":"20%",sortable:"","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[s("el-icon",{attrs:{name:"name"}}),t.row.status?s("router-link",{staticStyle:{cursor:"pointer",color:"#0000FF","text-decoration":"underline"},attrs:{to:{name:"项目概况",params:{project_id:t.row.id}}}},[e._v("\n                    "+e._s(t.row.name)+"\n                ")]):e._e(),e._v("\n                "+e._s(t.row.status?"":t.row.name)+"\n            ")]}}])}),s("el-table-column",{attrs:{prop:"user",label:"Owner","min-width":"10%",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n                "+e._s(e.users[t.row.user_id].login_name)+"\n            ")]}}])}),s("el-table-column",{attrs:{prop:"version",label:"版本","min-width":"12%",sortable:""}}),s("el-table-column",{attrs:{prop:"proj_type",label:"类型","min-width":"9%",sortable:""},scopedSlots:e._u([{key:"default",fn:function(t){return["recs"===t.row.proj_type?s("span",[e._v("产品推荐")]):e._e(),"promotions"===t.row.proj_type?s("span",[e._v("个性化促销")]):e._e(),"general"===t.row.proj_type?s("span",[e._v("通用")]):e._e()]}}])}),s("el-table-column",{attrs:{prop:"LastUpdateTime",formatter:e.formatTime,label:"最后修改时间","min-width":"16%",sortable:""}}),s("el-table-column",{attrs:{prop:"status",label:"状态","min-width":"9%",sortable:""},scopedSlots:e._u([{key:"default",fn:function(e){return[s("img",{directives:[{name:"show",rawName:"v-show",value:e.row.status,expression:"scope.row.status"}],attrs:{src:r("4928")}}),s("img",{directives:[{name:"show",rawName:"v-show",value:!e.row.status,expression:"!scope.row.status"}],attrs:{src:r("60be")}})]}}])}),s("el-table-column",{attrs:{label:"操作","min-width":"19%"},scopedSlots:e._u([{key:"default",fn:function(t){return[s("el-button",{attrs:{size:"small"},on:{click:function(r){return e.handleEdit(t.$index,t.row)}}},[e._v("编辑")]),s("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(r){return e.handleDel(t.$index,t.row)}}},[e._v("删除")]),s("el-button",{attrs:{type:"info",size:"small"},on:{click:function(r){return e.handleChangeStatus(t.$index,t.row)}}},[e._v(e._s(!1===t.row.status?"启用":"禁用"))])]}}])})],1),s("el-col",{staticClass:"toolbar",attrs:{span:24}},[s("el-button",{attrs:{type:"danger",disabled:0===this.sels.length},on:{click:e.batchRemove}},[e._v("批量删除")]),s("el-pagination",{staticStyle:{float:"right"},attrs:{layout:"prev, pager, next","page-size":10,"page-count":e.total},on:{"current-change":e.handleCurrentChange}})],1),s("el-dialog",{staticStyle:{width:"75%",left:"12.5%"},attrs:{title:"编辑",visible:e.editFormVisible,"close-on-click-modal":!1},on:{"update:visible":function(t){e.editFormVisible=t}}},[s("el-form",{ref:"editForm",attrs:{model:e.editForm,"label-width":"80px",rules:e.editFormRules}},[s("el-form-item",{attrs:{label:"项目名称",prop:"name"}},[s("el-input",{attrs:{"auto-complete":"off"},model:{value:e.editForm.name,callback:function(t){e.$set(e.editForm,"name",t)},expression:"editForm.name"}})],1),s("el-row",{attrs:{gutter:24}},[s("el-col",{attrs:{span:12}},[s("el-form-item",{attrs:{label:"类型",prop:"type"}},[s("el-select",{attrs:{placeholder:"请选择"},model:{value:e.editForm.proj_type,callback:function(t){e.$set(e.editForm,"proj_type",t)},expression:"editForm.proj_type"}},e._l(e.options,(function(e){return s("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)],1),s("el-col",{attrs:{span:12}},[s("el-form-item",{attrs:{label:"版本号",prop:"version"}},[s("el-input",{attrs:{"auto-complete":"off"},model:{value:e.editForm.version,callback:function(t){e.$set(e.editForm,"version",t)},expression:"editForm.version"}})],1)],1)],1),s("el-form-item",{attrs:{label:"描述",prop:"description"}},[s("el-input",{attrs:{type:"textarea",rows:6},model:{value:e.editForm.description,callback:function(t){e.$set(e.editForm,"description",t)},expression:"editForm.description"}})],1)],1),s("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{nativeOn:{click:function(t){e.editFormVisible=!1}}},[e._v("取消")]),s("el-button",{attrs:{type:"primary",loading:e.editLoading},nativeOn:{click:function(t){return e.editSubmit(t)}}},[e._v("提交")])],1)],1),s("el-dialog",{staticStyle:{width:"75%",left:"12.5%"},attrs:{title:"新增",visible:e.addFormVisible,"close-on-click-modal":!1},on:{"update:visible":function(t){e.addFormVisible=t}}},[s("el-form",{ref:"addForm",attrs:{model:e.addForm,"label-width":"80px",rules:e.addFormRules}},[s("el-form-item",{attrs:{label:"项目名称",prop:"name"}},[s("el-input",{attrs:{"auto-complete":"off"},model:{value:e.addForm.name,callback:function(t){e.$set(e.addForm,"name","string"===typeof t?t.trim():t)},expression:"addForm.name"}})],1),s("el-row",{attrs:{gutter:24}},[s("el-col",{attrs:{span:12}},[s("el-form-item",{attrs:{label:"类型",prop:"type"}},[s("el-select",{attrs:{placeholder:"请选择"},model:{value:e.addForm.type,callback:function(t){e.$set(e.addForm,"type",t)},expression:"addForm.type"}},e._l(e.options,(function(e){return s("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1)],1),s("el-col",{attrs:{span:12}},[s("el-form-item",{attrs:{label:"版本号",prop:"version"}},[s("el-input",{attrs:{"auto-complete":"off"},model:{value:e.addForm.version,callback:function(t){e.$set(e.addForm,"version","string"===typeof t?t.trim():t)},expression:"addForm.version"}})],1)],1)],1),s("el-form-item",{attrs:{label:"描述",prop:"description"}},[s("el-input",{attrs:{type:"textarea",rows:6},model:{value:e.addForm.description,callback:function(t){e.$set(e.addForm,"description",t)},expression:"addForm.description"}})],1)],1),s("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{nativeOn:{click:function(t){e.addFormVisible=!1}}},[e._v("取消")]),s("el-button",{attrs:{type:"primary",loading:e.addLoading},nativeOn:{click:function(t){return e.addSubmit(t)}}},[e._v("提交")])],1)],1)],1)},o=[],a=(r("7f7f"),r("1157")),n=r.n(a),i=r("c1df"),l=r.n(i),d=r("4ec3"),m={data:function(){return{users:{},filters:{name:""},project:[],total:0,page:1,listLoading:!1,sels:[],editFormVisible:!1,editLoading:!1,options:[{label:"产品推荐",value:"recs"},{label:"个性化促销",value:"promotions"},{label:"通用",value:"general"}],editFormRules:{name:[{required:!0,message:"请输入名称",trigger:"blur"},{min:1,max:50,message:"长度在 1 到 50 个字符",trigger:"blur"}],proj_type:[{required:!0,message:"请选择类型",trigger:"blur"}],version:[{required:!0,message:"请输入版本号",trigger:"blur"},{min:1,max:20,message:"长度在 1 到 20 个字符",trigger:"blur"}],description:[{required:!1,message:"请输入描述",trigger:"blur"},{max:1024,message:"不能超过1024个字符",trigger:"blur"}]},editForm:{name:"",version:"",proj_type:"",description:""},addFormVisible:!1,addLoading:!1,addFormRules:{name:[{required:!0,message:"请输入名称",trigger:"blur"},{min:1,max:50,message:"长度在 1 到 50 个字符",trigger:"blur"}],type:[{required:!0,message:"请选择类型",trigger:"blur"}],version:[{required:!0,message:"请输入版本号",trigger:"blur"},{min:1,max:20,message:"长度在 1 到 20 个字符",trigger:"blur"}],description:[{required:!1,message:"请输入版本号",trigger:"blur"},{max:1024,message:"不能超过1024个字符",trigger:"blur"}]},addForm:{name:"",version:"",type:"",description:""}}},methods:{formatTime2:function(e,t){var r=new Date(e[t.property]);return r.getFullYear()+"-"+r.getMonth()+"-"+r.getDate()+" "+r.getHours()+":"+r.getMinutes()+":"+r.getSeconds()},formatTime:function(e,t){var r=e[t.property];return"undefined"===typeof r?"":l()(r).format("YYYY-MM-DD HH:mm:ss")},getUserInfo:function(){var e=this,t={project_id:e.$route.params.project_id};n.a.ajax({type:"get",url:d["p"]+"/api/user/get_user_meta",async:!0,data:t,headers:{Authorization:"Token "+JSON.parse(sessionStorage.getItem("token"))},timeout:5e3,success:function(t){"999999"===t.code?(e.users=t.data.users,console.log(e.users,"self.users")):e.$message.error({message:t.msg,center:!0})}})},getProjectList:function(){this.listLoading=!0;var e=this,t={page:e.page,user_key:JSON.parse(sessionStorage.getItem("name")),name:e.filters.name},r={"Content-Type":"application/json",Authorization:"Token "+JSON.parse(sessionStorage.getItem("token"))};Object(d["h"])(r,t).then((function(t){e.listLoading=!1;var r=t.msg,s=t.code,o=t.data;"999999"===s?(e.total=o.total,e.project=o.data):e.$message.error({message:r,center:!0})}))},handleDel:function(e,t){var r=this;this.$confirm("确认删除该记录吗?","提示",{type:"warning"}).then((function(){r.listLoading=!0;var e=r,s={ids:[t.id],user_key:JSON.parse(sessionStorage.getItem("name"))},o={"Content-Type":"application/json",Authorization:"Token "+JSON.parse(sessionStorage.getItem("token"))};Object(d["d"])(o,s).then((function(t){var r=t.msg,s=t.code;"999999"===s?e.$message({message:"删除成功",center:!0,type:"success"}):e.$message.error({message:r,center:!0}),e.getProjectList()}))}))},handleChangeStatus:function(e,t){var r=this;this.listLoading=!0;var s={project_id:t.id,user_key:JSON.parse(sessionStorage.getItem("name"))},o={"Content-Type":"application/json",Authorization:"Token "+JSON.parse(sessionStorage.getItem("token"))};t.status?Object(d["e"])(o,s).then((function(e){var s=e.msg,o=e.code;r.listLoading=!1,"999999"===o?(r.$message({message:"禁用成功",center:!0,type:"success"}),t.status=!t.status):r.$message.error({message:s,center:!0})})):Object(d["f"])(o,s).then((function(e){var s=e.msg,o=e.code;r.listLoading=!1,"999999"===o?(r.$message({message:"启用成功",center:!0,type:"success"}),t.status=!t.status):r.$message.error({message:s,center:!0})}))},handleCurrentChange:function(e){this.page=e,this.getProjectList()},handleEdit:function(e,t){this.editFormVisible=!0,this.editForm=Object.assign({},t)},handleAdd:function(){this.addFormVisible=!0},editSubmit:function(){var e=this,t=this;this.$refs.editForm.validate((function(r){r&&e.$confirm("确认提交吗？","提示",{}).then((function(){t.editLoading=!0;var e={project_id:t.editForm.id,name:t.editForm.name,type:t.editForm.proj_type,version:t.editForm.version,description:t.editForm.description,user_key:JSON.parse(sessionStorage.getItem("name"))},r={"Content-Type":"application/json",Authorization:"Token "+JSON.parse(sessionStorage.getItem("token"))};Object(d["r"])(r,e).then((function(e){var r=e.msg,s=e.code;t.editLoading=!1,"999999"===s?(t.$message({message:"修改成功",center:!0,type:"success"}),t.$refs["editForm"].resetFields(),t.editFormVisible=!1,t.getProjectList()):t.$message.error({message:r,center:!0})}))}))}))},addSubmit:function(){var e=this;this.$refs.addForm.validate((function(t){if(t){var r=e;e.$confirm("确认提交吗？","提示",{}).then((function(){r.addLoading=!0;var e=JSON.stringify({name:r.addForm.name,type:r.addForm.type,version:r.addForm.version,description:r.addForm.description,user:JSON.parse(sessionStorage.getItem("name"))}),t={"Content-Type":"application/json",Authorization:"Token "+JSON.parse(sessionStorage.getItem("token"))};Object(d["c"])(t,e).then((function(e){var t=e.msg,s=e.code;r.addLoading=!1,"999999"===s?(r.$message({message:"添加成功",center:!0,type:"success"}),r.$refs["addForm"].resetFields(),r.addFormVisible=!1,r.getProjectList()):"999997"===s?r.$message.error({message:t,center:!0}):(r.$message.error({message:t,center:!0}),r.$refs["addForm"].resetFields(),r.addFormVisible=!1,r.getProjectList())}))}))}}))},selsChange:function(e){this.sels=e},batchRemove:function(){var e=this,t=this.sels.map((function(e){return e.id}));this.$confirm("确认删除选中记录吗？","提示",{type:"warning"}).then((function(){e.listLoading=!0;var r=e,s={ids:t,user_key:JSON.parse(sessionStorage.getItem("name"))},o={"Content-Type":"application/json",Authorization:"Token "+JSON.parse(sessionStorage.getItem("token"))};Object(d["d"])(o,s).then((function(e){var t=e.msg,s=e.code;"999999"===s?r.$message({message:"删除成功",center:!0,type:"success"}):r.$message.error({message:t,center:!0}),r.getProjectList()}))}))}},mounted:function(){this.getProjectList(),this.getUserInfo()}},c=m,u=r("2877"),p=Object(u["a"])(c,s,o,!1,null,null,null);t["default"]=p.exports}}]);
//# sourceMappingURL=chunk-4570591a.9fe88c8b.js.map