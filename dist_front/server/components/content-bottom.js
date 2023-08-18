exports.ids = [6,2,3,4];
exports.modules = {

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

const api_name = `/api/operate`;
/* harmony default export */ __webpack_exports__["a"] = ({
  // 删除发表的评论
  deletePin(coid) {
    return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
      url: `${api_name}/delComment`,
      method: `post`,
      data: coid
    });
  },

  // 删除发布的信息
  deleteContent(cid) {
    return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
      url: `campus/delContent/` + cid,
      method: `delete`
    });
  },

  //提交点赞信息
  zanContent(cid) {
    return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
      url: `campus/zan/` + cid,
      method: `get`
    });
  },

  // 发布评论
  toComment(toCommentVo) {
    return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
      url: `campus/toComment`,
      method: `post`,
      data: toCommentVo
    });
  },

  //发布内容
  publishContent(sendContentVo) {
    return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
      url: `campus/sendContent`,
      method: 'post',
      data: sendContentVo
    });
  },

  //获取自己发的信息
  ownContents(contentSet) {
    return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
      url: `campus/ownContents`,
      method: 'post',
      data: contentSet
    });
  }

});

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CommentUser.vue?vue&type=template&id=358ffc7c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"commen-u",staticStyle:{"margin-top":"5px"}},[_vm._ssrNode("<div class=\"comment-list\">","</div>",[_vm._ssrNode("<div class=\"comment-item\" style=\"margin-top: 10px\">","</div>",[_vm._ssrNode("<div class=\"woo-box-flex\">","</div>",[_c('el-avatar',{attrs:{"shape":"circle","size":40,"src":_vm.handleCampusUrl(_vm.commentObj.avatar)}}),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"woo-box-item-flex\" style=\"margin: -2px 0 0 10px\">","</div>",[_vm._ssrNode("<div><span class=\"comment-nick\">"+_vm._ssrEscape(" "+_vm._s(_vm.commentObj.userNickName)+"\n              ")+((_vm.commentObj.toUserNickName!=null)?("<span><i class=\"el-icon-caret-right\" style=\"color:black\"></i>"+_vm._ssrEscape(" "+_vm._s(_vm.commentObj.toUserNickName))+"</span>"):"<!---->")+"</span> "+((_vm.commentObj.userId == _vm.contentObj.userId)?("<span class=\"comment-item-tag\" style=\"background: rgb(254, 44, 85)\"><span>作者</span></span>"):"<!---->")+"</div> <div style=\"text-align: left; margin-top: 5px\">"+_vm._ssrEscape("\n            "+_vm._s(_vm.commentObj.coContent)+"\n          ")+"</div> "),_vm._ssrNode("<div class=\"\n              comment-info\n              woo-box-flex woo-box-alignCenter woo-box-justifyBetween\n            \">","</div>",[_vm._ssrNode("<div><span>"+_vm._ssrEscape(" "+_vm._s(_vm.handelTimeFormat(_vm.commentObj.createTime))+" ")+"</span> <span>"+_vm._ssrEscape("·"+_vm._s(_vm.commentObj.address))+"</span></div> "),_vm._ssrNode("<div class=\"woo-box-flex\" style=\"margin-right: 20px\">","</div>",[_vm._ssrNode("<div class=\"\n                  comment-iconbed\n                  woo-box-flex woo-box-alignCenter woo-box-justifyCenter\n                \">","</div>",[(_vm.commentObj.userId == _vm.loginUserId)?_c('svg-icon',{staticClass:"comment-tool-iconbed",attrs:{"icon-class":"delete"}}):_vm._e()],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"\n                  comment-iconbed\n                  woo-box-flex woo-box-alignCenter woo-box-justifyCenter\n                \">","</div>",[_c('svg-icon',{staticClass:"comment-tool-iconbed",attrs:{"icon-class":"comment"}})],1)],2)],2)],2)],2)])]),_vm._ssrNode(" "),_c('el-dialog',{attrs:{"title":"回复","visible":_vm.dialog,"width":"600px","append-to-body":""},on:{"update:visible":function($event){_vm.dialog=$event}}},[_c('div',{staticClass:"woo-box-item-flex",staticStyle:{"align-self":"center"}},[_c('el-input',{attrs:{"type":"textarea","placeholder":"发布你的回复","autosize":{ minRows: 2, maxRows: 5 },"maxlength":"100","show-word-limit":""},model:{value:(_vm.dialogText),callback:function ($$v) {_vm.dialogText=$$v},expression:"dialogText"}})],1),_vm._v(" "),_c('div',{staticClass:"woo-box-flex woo-box-alignCenter"},[_c('div',{staticClass:"woo-box-item-flex",staticStyle:{"align-self":"center"}}),_vm._v(" "),_c('el-button',{staticStyle:{"margin-top":"15px"},attrs:{"type":"primary","round":"","disabled":_vm.dialogText.length <= 0},on:{"click":function($event){return _vm.addCommentChild()}}},[_vm._v("\n        回复\n      ")])],1)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/CommentUser.vue?vue&type=template&id=358ffc7c&

// EXTERNAL MODULE: ./utils/auth.js
var auth = __webpack_require__(10);

// EXTERNAL MODULE: ./api/operate.js
var operate = __webpack_require__(70);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CommentUser.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var CommentUservue_type_script_lang_js_ = ({
  name: "CommentUser",
  props: ["commentObj", "contentObj"],

  data() {
    //这里存放数据
    return {
      loginUserId: 0,
      //添加评论参数
      toCommentQuery: {
        contentId: null,
        commentId: null,
        coContent: ""
      },
      //****评论弹出框 */
      dialog: false,
      dialogText: "",
      dialogCommentId: ""
    };
  },

  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},

  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    if (Object(auth["a" /* getToken */])() !== undefined) {
      this.loginUserId = this.globalVariable.userInfoGlobal.userId;
    }
  },

  //方法集合
  methods: {
    //添加子评论
    openCommentChild(commentId) {
      this.dialog = true;
      this.dialogCommentId = commentId;
    },

    addCommentChild() {
      this.toCommentQuery.commentId = this.dialogCommentId;
      this.toCommentQuery.contentId = null;
      this.toCommentQuery.coContent = this.dialogText;
      this.dialog = false;
      operate["a" /* default */].toComment(this.toCommentQuery).then(response => {
        this.$message({
          type: "success",
          message: "评论成功!"
        });
        this.dialogText = "";
        this.$emit("co-success", response);
      });
    }

  }
});
// CONCATENATED MODULE: ./components/CommentUser.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_CommentUservue_type_script_lang_js_ = (CommentUservue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/CommentUser.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(77)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_CommentUservue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "71009876"
  
)

/* harmony default export */ var CommentUser = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {SvgIcon: __webpack_require__(16).default})


/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

const api_name = `/tourist`;
/* harmony default export */ __webpack_exports__["a"] = ({
  //用户通过cid查询的数据
  getUserByCids(cid) {
    return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
      url: `${api_name}/content/` + cid,
      method: `get`
    });
  },

  // 获取评论
  getpinlun(cid) {
    return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
      url: `${api_name}/getComment/` + cid,
      method: `get`
    });
  },

  //获取所有分类
  getCategoryList() {
    return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
      url: `/campus/categoryList`,
      method: `get`
    });
  },

  //获取消息盒子内容集合
  getContent(contentVo) {
    return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
      url: `/campus/contentList`,
      method: `get`,
      params: contentVo
    });
  },

  //获取消息盒子内容集合
  getContentById(id) {
    return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
      url: `/campus/getContent`,
      method: `get`,
      params: {
        id
      }
    });
  },

  //获取一级评论
  getOneLevelComment(CommentEntity) {
    return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
      url: `/campus/getOneLevelComment`,
      method: `get`,
      params: CommentEntity
    });
  },

  //获取子评论
  getCommentChildren(CommentEntity) {
    return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
      url: `/campus/getCommentChildren`,
      method: `get`,
      params: CommentEntity
    });
  },

  //查询简单热门信息墙内容列表
  getSimpleHotContent() {
    return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
      url: `/campus/simpleHotContent`,
      method: `get`
    });
  },

  //游客通过cid查询的数据
  getUserCid(cid) {
    return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
      url: `${api_name}/contents`,
      method: `post`,
      data: cid
    });
  },

  //判断 邮箱或昵称 是否存在
  isExist(loginVo) {
    return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
      url: `${api_name}/isExist`,
      method: `post`,
      data: loginVo
    });
  }

});

/***/ }),

/***/ 73:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(78);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("6df03586", content, false, context)
};

/***/ }),

/***/ 74:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(81);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("d2e19b40", content, false, context)
};

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CommentChild.vue?vue&type=template&id=5a28021e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"comment-child"},[_vm._ssrNode("<div style=\"margin: 15px 20px 0\"></div> "),_vm._ssrNode("<div class=\"comment-children\">","</div>",[_c('CommentUser',{attrs:{"commentObj":_vm.commentObj,"contentObj":_vm.contentObj},on:{"co-success":_vm.commentSuccess}}),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"comment-more-replies\">","</div>",[_vm._ssrNode("<div class=\"comment-more-list\">","</div>",[_vm._ssrNode("<div class=\"comment-more-item\">","</div>",[(_vm.commentChildren != null)?_vm._ssrNode("<div>","</div>",_vm._l((_vm.commentChildren),function(item,keys){return _vm._ssrNode("<div>","</div>",[_c('CommentUser',{attrs:{"commentObj":item,"contentObj":_vm.contentObj},on:{"co-success":_vm.commentSuccess}})],1)}),0):_vm._e()])])])],2),_vm._ssrNode(" "+((_vm.total == 0)?("<div></div>"):"<!---->")+" "),(this.$route.name == 'c-contentId')?_vm._ssrNode("<div class=\"fenye\">","</div>",[_c('el-pagination',{attrs:{"hide-on-single-page":true,"background":"","layout":"prev, pager, next","total":_vm.total,"current-page":_vm.currentPage,"page-size":5},on:{"current-change":_vm.handleCurrentChange}})],1):_vm._e()],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/CommentChild.vue?vue&type=template&id=5a28021e&

// EXTERNAL MODULE: ./api/tourist.js
var tourist = __webpack_require__(72);

// EXTERNAL MODULE: ./api/operate.js
var operate = __webpack_require__(70);

// EXTERNAL MODULE: ./utils/auth.js
var auth = __webpack_require__(10);

// EXTERNAL MODULE: ./components/CommentUser.vue + 4 modules
var CommentUser = __webpack_require__(71);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CommentChild.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


 //组件


/* harmony default export */ var CommentChildvue_type_script_lang_js_ = ({
  name: "CommentChild",
  props: ["contentObj", "commentObj"],
  components: {
    CommentUser: CommentUser["default"]
  },

  data() {
    //这里存放数据
    return {
      commentChildren: null,
      //评论请求参数
      commentQuery: {
        contentId: "",
        pageNum: 1
      },
      //登录账户的用户id
      loginUserId: 0,
      //****分页 */
      total: 0,
      //一级评论数量
      currentPage: 1
    };
  },

  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.getCommentList(this.currentPage);
  },

  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    if (Object(auth["a" /* getToken */])() !== undefined) {
      this.loginUserId = this.globalVariable.userInfoGlobal.userId;
    }
  },

  //方法集合
  methods: {
    //加载子评论
    getCommentList(currentPage) {
      this.commentQuery.commentId = this.commentObj.commentId;
      this.commentQuery.pageNum = currentPage;
      tourist["a" /* default */].getCommentChildren(this.commentQuery).then(response => {
        this.commentChildren = response.rows;
        this.total = parseInt(response.total);
      });
    },

    //当页数改变的时候
    handleCurrentChange(val) {
      this.currentPage = val;
      this.getCommentList(this.currentPage);
    },

    //评论成功后
    commentSuccess(response) {
      this.handleCurrentChange(1);
    }

  }
});
// CONCATENATED MODULE: ./components/CommentChild.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_CommentChildvue_type_script_lang_js_ = (CommentChildvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/CommentChild.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(80)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_CommentChildvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "112e2312"
  
)

/* harmony default export */ var CommentChild = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {CommentUser: __webpack_require__(71).default})


/***/ }),

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(86);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("7c0fe920", content, false, context)
};

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentUser_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentUser_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentUser_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentUser_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentUser_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".comment-nick{font-weight:bolder;font-size:12px;color:#eb7350;text-align:left}.comment-item-tag{flex-shrink:0;font-size:10px;height:16px;margin-left:8px;color:#fff;align-items:center;border-radius:4px;display:inline-flex;font-weight:500;justify-content:center;line-height:20px;padding:0 4px}.comment-tool-iconbed{font-size:14px;color:grey;margin:0 0 0 10px;position:relative}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Comment.vue?vue&type=template&id=67a4ed00&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"Comment"},[_vm._ssrNode("<div style=\"margin: 15px 20px 0\"></div> "),_vm._ssrNode("<div class=\"woo-box-flex\" style=\"margin: 0 10px\">","</div>",[_vm._ssrNode("<div>","</div>",[_c('el-avatar',{staticClass:"content-box-avatar",attrs:{"shape":"circle","size":40,"src":_vm.handleCampusUrl(_vm.contentObj.params.avatar)}})],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"woo-box-item-flex\">","</div>",[_vm._ssrNode("<div>","</div>",[_vm._ssrNode("<div class=\"woo-box-item-flex\" style=\"align-self: center\">","</div>",[_c('el-input',{attrs:{"type":"textarea","autosize":{ minRows: 1.3, maxRows: 5 },"placeholder":"发布你的评论","maxlength":"100","show-word-limit":""},model:{value:(_vm.toCommentQuery.coContent),callback:function ($$v) {_vm.$set(_vm.toCommentQuery, "coContent", $$v)},expression:"toCommentQuery.coContent"}})],1),_vm._ssrNode(" "),_vm._ssrNode("<div style=\"margin-top: 10px\">","</div>",[_vm._ssrNode("<div class=\"woo-box-flex woo-box-alignCenter\">","</div>",[_vm._ssrNode("<div class=\"woo-box-item-flex\" style=\"align-self: center\"></div> "),_c('el-button',{attrs:{"type":"primary","round":"","disabled":_vm.toCommentQuery.coContent.length <= 0},on:{"click":function($event){return _vm.addComment()}}},[_vm._v("\n              评论\n            ")])],2)])],2)])],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"comment-list\">","</div>",_vm._l((_vm.commentOneLevelList),function(item,keys){return _vm._ssrNode("<div class=\"comment-item\" style=\"margin-top: 20px\">","</div>",[_vm._ssrNode("<div class=\"woo-box-flex\">","</div>",[_c('el-avatar',{attrs:{"shape":"circle","size":40,"src":_vm.handleCampusUrl(item.avatar)}}),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"woo-box-item-flex\" style=\"margin: -2px 0 0 10px\">","</div>",[_vm._ssrNode("<div><span class=\"comment-nick\">"+_vm._ssrEscape(" "+_vm._s(item.userNickName))+"</span> "+((item.userId == _vm.contentObj.userId)?("<span class=\"comment-item-tag\" style=\"background: rgb(254, 44, 85)\"><span>作者</span></span>"):"<!---->")+"</div> <div style=\"margin-top: 4px\">"+_vm._ssrEscape("\n            "+_vm._s(item.coContent)+"\n          ")+"</div> "),_vm._ssrNode("<div class=\"comment-info woo-box-flex woo-box-alignCenter woo-box-justifyBetween\">","</div>",[_vm._ssrNode("<div><span>"+_vm._ssrEscape(" "+_vm._s(_vm.handelTimeFormat(item.createTime))+" ")+"</span> <span>"+_vm._ssrEscape("·"+_vm._s(item.address))+"</span></div> "),_vm._ssrNode("<div class=\"woo-box-flex\" style=\"margin-right: 20px\">","</div>",[_vm._ssrNode("<div class=\"comment-iconbed woo-box-flex woo-box-alignCenter woo-box-justifyCenter\"></div> "),_vm._ssrNode("<div class=\"comment-iconbed woo-box-flex woo-box-alignCenter woo-box-justifyCenter\">","</div>",[_c('svg-icon',{staticClass:"comment-tool-iconbed",attrs:{"icon-class":"comment"}})],1)],2)],2)],2)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"comment-more-replies\">","</div>",[_vm._ssrNode("<div class=\"comment-more-list\">","</div>",[_vm._ssrNode("<div class=\"comment-more-item\">","</div>",[(item.children !== undefined)?_vm._ssrNode("<div>","</div>",[_c('CommentUser',{attrs:{"commentObj":item.children[0],"contentObj":_vm.contentObj},on:{"co-success":_vm.commentSuccess}})],1):_vm._e()]),_vm._ssrNode(" "+((item.childrenCount > 1)?("<div class=\"comment-more-item\"><div style=\"color: #eb7350; text-align: left\"><span>"+_vm._ssrEscape("共"+_vm._s(item.children == undefined
                    ? item.childrenCount
                    : item.childrenCount)+"条回复")+"</span></div></div>"):"<!---->"))],2)])],2)}),0),_vm._ssrNode(" "),(this.$route.name == 'index' && _vm.commentTotal != 0)?_vm._ssrNode("<div>","</div>",[_vm._ssrNode("<div class=\"woo-divider-main woo-divider-x\" style=\"margin: 7px 20px 0 20px\"></div> "),_c('nuxt-link',{attrs:{"to":'/c/' + _vm.contentObj.contentId}},[_c('div',{staticClass:"woo-box-flex woo-box-alignCenter woo-box-justifyCenter CommentFeed_more"},[_c('div',[_vm._v("查看全部"+_vm._s(_vm.commentTotal)+"条评论")]),_vm._v(" "),_c('i',{staticClass:"woo-font woo-font--angleRight"})])])],2):_vm._e(),_vm._ssrNode(" "+((_vm.commentTotal == 0)?("<div></div>"):"<!---->")+" "),(this.$route.name == 'c-contentId')?_vm._ssrNode("<div class=\"fenye\">","</div>",[_c('el-pagination',{attrs:{"hide-on-single-page":true,"background":"","layout":"prev, pager, next","total":_vm.total,"current-page":_vm.currentPage,"page-size":5},on:{"current-change":_vm.handleCurrentChange}})],1):_vm._e(),_vm._ssrNode(" "),_c('el-dialog',{attrs:{"title":"回复","visible":_vm.dialog,"width":"600px"},on:{"update:visible":function($event){_vm.dialog=$event}}},[_c('div',{staticClass:"woo-box-item-flex",staticStyle:{"align-self":"center"}},[_c('el-input',{attrs:{"type":"textarea","placeholder":"发布你的回复","autosize":{ minRows: 2, maxRows: 5 },"maxlength":"100","show-word-limit":""},model:{value:(_vm.dialogText),callback:function ($$v) {_vm.dialogText=$$v},expression:"dialogText"}})],1),_vm._v(" "),_c('div',{staticClass:"woo-box-flex woo-box-alignCenter"},[_c('div',{staticClass:"woo-box-item-flex",staticStyle:{"align-self":"center"}}),_vm._v(" "),_c('el-button',{staticStyle:{"margin-top":"15px"},attrs:{"type":"primary","round":"","disabled":_vm.dialogText.length <= 0},on:{"click":function($event){return _vm.addCommentChild()}}},[_vm._v("\n        回复\n      ")])],1)]),_vm._ssrNode(" "),_c('el-dialog',{attrs:{"title":"回复列表","visible":_vm.dialogChildren,"width":"600px"},on:{"update:visible":function($event){_vm.dialogChildren=$event}}},[_c('div',[_c('CommentChild',{attrs:{"commentObj":_vm.commentOneLevelObj,"contentObj":_vm.contentObj}})],1)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Comment.vue?vue&type=template&id=67a4ed00&

// EXTERNAL MODULE: ./api/tourist.js
var tourist = __webpack_require__(72);

// EXTERNAL MODULE: ./api/operate.js
var operate = __webpack_require__(70);

// EXTERNAL MODULE: ./utils/auth.js
var auth = __webpack_require__(10);

// EXTERNAL MODULE: ./components/CommentUser.vue + 4 modules
var CommentUser = __webpack_require__(71);

// EXTERNAL MODULE: ./components/CommentChild.vue + 4 modules
var CommentChild = __webpack_require__(75);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Comment.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


 //组件



/* harmony default export */ var Commentvue_type_script_lang_js_ = ({
  name: "Comment",
  props: ["contentObj"],
  components: {
    CommentUser: CommentUser["default"],
    CommentChild: CommentChild["default"]
  },

  data() {
    //这里存放数据
    return {
      commentOneLevelList: null,
      //评论请求参数
      commentQuery: {
        contentId: "",
        pageNum: 1
      },
      //添加评论参数
      toCommentQuery: {
        contentId: null,
        commentId: null,
        coContent: ""
      },
      //登录账户的用户id
      loginUserId: 0,
      //评论总数量
      commentTotal: 0,
      //****无限滚动,后续更改 */
      scrollLoading: false,
      scrollNoMore: false,
      //****分页 */
      total: 0,
      //一级评论数量
      currentPage: 1,
      //****评论弹出框 */
      dialog: false,
      dialogText: "",
      dialogCommentId: "",
      //子评论列表弹出框
      dialogChildren: false,
      //一级评论内容
      commentOneLevelObj: {}
    };
  },

  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.getCommentList(this.currentPage);
  },

  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    if (Object(auth["a" /* getToken */])() !== undefined) {
      this.loginUserId = this.globalVariable.userInfoGlobal.userId;
    }
  },

  //方法集合
  methods: {
    //加载一级评论
    getCommentList(currentPage) {
      this.commentQuery.contentId = this.contentObj.contentId;
      this.commentQuery.pageNum = currentPage;
      tourist["a" /* default */].getOneLevelComment(this.commentQuery).then(response => {
        this.commentOneLevelList = this.handleTree(response.rows, "commentId");
        this.commentTotal = parseInt(response.allTotal);
        this.total = parseInt(response.total);
      });
    },

    //当页数改变的时候
    handleCurrentChange(val) {
      this.currentPage = val;
      this.getCommentList(this.currentPage);
    },

    //评论成功后
    commentSuccess(response) {
      this.handleCurrentChange(1);
    },

    //添加评论
    addComment() {
      this.toCommentQuery.commentId = null;
      this.toCommentQuery.contentId = this.contentObj.contentId;
      operate["a" /* default */].toComment(this.toCommentQuery).then(response => {
        this.$message({
          type: "success",
          message: "评论成功!"
        });
        this.toCommentQuery.coContent = "";
        this.getCommentList(1);
      });
    },

    //添加子评论
    openCommentChild(commentId) {
      this.dialog = true;
      this.dialogCommentId = commentId;
    },

    addCommentChild() {
      this.toCommentQuery.commentId = this.dialogCommentId;
      this.toCommentQuery.contentId = null;
      this.toCommentQuery.coContent = this.dialogText;
      this.dialog = false;
      operate["a" /* default */].toComment(this.toCommentQuery).then(response => {
        this.$message({
          type: "success",
          message: "评论成功!"
        });
        this.dialogText = "";
        this.toCommentQuery.coContent = "";
        this.currentPage = 1;
        this.getCommentList(this.currentPage);
      });
    },

    //查看子评论
    showChildren(commentObj) {
      this.commentOneLevelObj = commentObj;
      this.dialogChildren = true;
    }

  }
});
// CONCATENATED MODULE: ./components/Comment.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Commentvue_type_script_lang_js_ = (Commentvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/Comment.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(85)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Commentvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "3238f25a"
  
)

/* harmony default export */ var Comment = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {SvgIcon: __webpack_require__(16).default,CommentUser: __webpack_require__(71).default,CommentChild: __webpack_require__(75).default})


/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentChild_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentChild_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentChild_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentChild_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentChild_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".comment-nick{font-weight:bolder;font-size:12px;color:#eb7350;text-align:left}.comment-list{font-size:12px;line-height:20px;color:#333}.comment-info{height:22px;margin:1px 0 0;color:#939393}.comment-iconbed{width:22px;height:22px;margin:0 0 0 10px}.comment-more-replies{position:relative;margin:6px 0 2px 44px}.comment-more-replies:before{content:\"\";position:absolute;top:4px;bottom:4px;left:0;border-left:2px solid #f2f2f2}.comment-more-list{padding:0 0 0 10px;line-height:20px;font-size:12px}.composer_btn{width:68px;padding-left:0!important;padding-right:0!important}.comment-item-tag{flex-shrink:0;font-size:10px;height:16px;margin-left:8px;color:#fff;align-items:center;border-radius:4px;display:inline-flex;font-weight:500;justify-content:center;line-height:20px;padding:0 4px}.comment-tool-iconbed{font-size:14px;color:grey}.CommentFeed_more{height:44px;background:#fff;font-size:14px;color:#333;cursor:pointer}.CommentFeed_more:hover{color:#eb7350}.fenye{width:100%;margin:0 auto;text-align:center}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(97);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("29c3a7ba", content, false, context)
};

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Comment_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Comment_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Comment_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Comment_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Comment_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".comment-nick{font-weight:bolder;font-size:12px;color:#eb7350;text-align:left}.comment-list{font-size:12px;line-height:20px;color:#333}.comment-info{height:22px;margin:1px 0 0;color:#939393}.comment-iconbed{width:22px;height:22px;margin:0 0 0 10px}.comment-more-replies{position:relative;margin:6px 0 2px 44px}.comment-more-replies:before{content:\"\";position:absolute;top:4px;bottom:4px;left:0;border-left:2px solid #f2f2f2}.comment-more-list{padding:0 0 0 10px;line-height:20px;font-size:12px}.composer_btn{width:68px;padding-left:0!important;padding-right:0!important}.comment-item-tag{flex-shrink:0;font-size:10px;height:16px;margin-left:8px;color:#fff;align-items:center;border-radius:4px;display:inline-flex;font-weight:500;justify-content:center;line-height:20px;padding:0 4px}.comment-tool-iconbed{font-size:14px;color:grey}.CommentFeed_more{height:44px;background:#fff;font-size:14px;color:#333;cursor:pointer}.CommentFeed_more:hover{color:#eb7350}.fenye{width:100%;margin:0 auto;text-align:center}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ContentBottom.vue?vue&type=template&id=770d8064&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ContentBottom"},[_vm._ssrNode("<div class=\"content-bootom-svg woo-box-flex woo-box-alignCenter\" style=\"margin: 10px 15px 15px 0px\"><div class=\"woo-box-item-flex\"><div class=\"\n          content-bottom-hover\n          woo-box-flex woo-box-alignCenter woo-box-justifyCenter\n        \"><div class=\"woo-pop-wrap\"><img width=\"20\" height=\"20\""+(_vm._ssrAttr("src",__webpack_require__(92)))+"> <span>分享链接</span></div></div></div> <div class=\"woo-box-item-flex\"><div class=\"\n          content-bottom-hover\n          woo-box-flex woo-box-alignCenter woo-box-justifyCenter\n        \"><div class=\"woo-pop-wrap\"><img width=\"20\" height=\"20\""+(_vm._ssrAttr("src",__webpack_require__(93)))+"> <span>评论</span></div></div></div> <div class=\"woo-box-item-flex\"><div class=\"\n          content-bottom-hover\n          woo-box-flex woo-box-alignCenter woo-box-justifyCenter\n        \"><div class=\"woo-pop-wrap\"><img width=\"20\" height=\"20\""+(_vm._ssrAttr("src",_vm.zanImg))+"> <span class=\"zan-num\">"+_vm._ssrEscape(_vm._s(_vm.contentObj.loveCount))+"</span></div></div></div></div> "),(_vm.showComment)?_vm._ssrNode("<div>","</div>",[_c('Comment',{attrs:{"contentObj":_vm.contentObj}})],1):_vm._e()],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/ContentBottom.vue?vue&type=template&id=770d8064&

// EXTERNAL MODULE: ./api/operate.js
var operate = __webpack_require__(70);

// EXTERNAL MODULE: external "clipboard"
var external_clipboard_ = __webpack_require__(67);
var external_clipboard_default = /*#__PURE__*/__webpack_require__.n(external_clipboard_);

// EXTERNAL MODULE: ./utils/auth.js
var auth = __webpack_require__(10);

// EXTERNAL MODULE: ./components/Comment.vue + 4 modules
var Comment = __webpack_require__(79);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ContentBottom.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
const dzNotImage = __webpack_require__(94);

const dzImage = __webpack_require__(95);

 //复制

 //认证

 //组件


/* harmony default export */ var ContentBottomvue_type_script_lang_js_ = ({
  name: "ContentBottom",
  props: ["zanBoolean", "contentObj"],
  //import引入的组件需要注入到对象中才能使用
  components: {
    Comment: Comment["default"]
  },

  data() {
    //这里存放数据
    return {
      //点赞/没点赞的图片地址
      zanImg: "",
      //是否显示评论
      showComment: false,
      isZanBoo: false
    };
  },

  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},

  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.isZanBoo = this.zanBoolean;
    this.isZan();

    if (this.$route.name == 'c-contentId') {
      this.showComment = true;
    }
  },

  //方法集合
  methods: {
    //判断是否被点赞
    isZan() {
      if (this.isZanBoo == false) {
        this.zanImg = dzNotImage;
        return false;
      } else {
        this.zanImg = dzImage;
        return true;
      }
    },

    //点击评论
    clickComment() {
      this.showComment = !this.showComment;
    },

    //点赞
    setZan(contentId) {
      if (Object(auth["a" /* getToken */])() === undefined) {
        this.$router.push({
          path: "/userlogin",
          query: {
            id: "1"
          }
        });
      } else {
        if (this.isZanBoo == true) {
          //取消点赞
          this.isZanBoo = false;
          this.contentObj.loveCount--;
        } else {
          //设置点赞
          this.isZanBoo = true;
          this.contentObj.loveCount++;
        }

        this.isZan(contentId); //发送api

        operate["a" /* default */].zanContent(contentId).then(response => {
          if (response.data == 1) {//点赞
          }

          if (response.data == 0) {//取消点赞
          }
        });
      }
    },

    //复制分享链接
    copys(e, contentId) {
      const hostname = window.location.origin;
      const clipboard = new external_clipboard_default.a(e.target, {
        text: () => hostname + "/c/" + contentId
      });
      clipboard.on("success", e => {
        const h = this.$createElement;
        this.$notify({
          title: "复制成功：",
          message: h("i", {
            style: "color: teal"
          }, "快去分享给好盆友吧!")
        }); // 释放内存

        clipboard.destroy();
      });
      clipboard.on("error", e => {
        // 不支持复制
        Message({
          message: "该浏览器不支持自动复制",
          type: "warning"
        }); // 释放内存

        clipboard.destroy();
      });
    }

  }
});
// CONCATENATED MODULE: ./components/ContentBottom.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ContentBottomvue_type_script_lang_js_ = (ContentBottomvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/ContentBottom.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(96)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ContentBottomvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "2dda2182"
  
)

/* harmony default export */ var ContentBottom = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Comment: __webpack_require__(79).default})


/***/ }),

/***/ 92:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/fenxiang.ef15cae.png";

/***/ }),

/***/ 93:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/pinlun.a8a5722.png";

/***/ }),

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/dz.dd6ccc0.png";

/***/ }),

/***/ 95:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/dz1.b9ca7fe.png";

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentBottom_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentBottom_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentBottom_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentBottom_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentBottom_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".content-bootom-svg{color:#6e6e6e}.content-bootom-svg,.zan-num{font-size:10px;font-weight:bolder}.zan-num{cursor:pointer;margin-left:5px}.content-bottom-hover{cursor:pointer;color:#6e6e6e}.content-bottom-hover:hover{color:coral}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=content-bottom.js.map