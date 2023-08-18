exports.ids = [16];
exports.modules = {

/***/ 126:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(145);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("2ecd7faa", content, false, context)
};

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_publish_vue_vue_type_style_index_0_id_b37c0a9a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(126);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_publish_vue_vue_type_style_index_0_id_b37c0a9a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_publish_vue_vue_type_style_index_0_id_b37c0a9a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_publish_vue_vue_type_style_index_0_id_b37c0a9a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_publish_vue_vue_type_style_index_0_id_b37c0a9a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 145:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".iconbed-text[data-v-b37c0a9a]{margin:0 8px 0 2px;font-size:13px}.c-cascader[data-v-b37c0a9a]{border-radius:0}.mavonEditor[data-v-b37c0a9a]{width:100%;height:100%}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/User/publish.vue?vue&type=template&id=b37c0a9a&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"publish-content"},[_c('el-row',[_c('el-col',{attrs:{"span":8,"xs":20}},[_c('el-dialog',{attrs:{"title":"快捷发布","visible":_vm.dialog,"width":"600px;"},on:{"update:visible":function($event){_vm.dialog=$event}}},[_c('div',[_c('div',[_c('v-container',{attrs:{"fluid":""}},[_c('mavon-editor',{staticStyle:{"width":"100%","height":"800px"},attrs:{"toolbars":_vm.markdownOption,"ishljs":true},on:{"change":_vm.updateDoc,"save":_vm.saveDoc},model:{value:(_vm.contentParam.content),callback:function ($$v) {_vm.$set(_vm.contentParam, "content", $$v)},expression:"contentParam.content"}})],1),_vm._v(" "),_c('div',{staticClass:"woo-box-flex woo-box-alignCenter"},[_c('div',{staticClass:"woo-box-item-flex",staticStyle:{"align-self":"center"}},[_c('div',{staticClass:"woo-box-item-inlineBlock"},[_c('el-cascader',{staticClass:"c-cascader",attrs:{"size":"small","placeholder":"请选择分类","options":_vm.categoryOptions,"props":_vm.props},model:{value:(_vm.cascader),callback:function ($$v) {_vm.cascader=$$v},expression:"cascader"}})],1),_vm._v(" "),_c('el-switch',{attrs:{"active-value":"1","inactive-value":"0","active-text":"匿名","inactive-text":"不匿名"},model:{value:(_vm.contentParam.isAnonymous),callback:function ($$v) {_vm.$set(_vm.contentParam, "isAnonymous", $$v)},expression:"contentParam.isAnonymous"}}),_vm._v(" "),_c('div',{staticClass:"woo-box-item-inlineBlock"},[_c('el-button',{attrs:{"type":"text","disabled":_vm.disabled.picture},on:{"click":function($event){return _vm.selectPicture()}}},[_c('svg-icon',{staticClass:"woo-font woo-font--emotico",staticStyle:{"width":"18px","height":"18px"},attrs:{"icon-class":"picture"}}),_vm._v(" "),_c('span',{staticClass:"iconbed-text"},[_vm._v("图片")])],1)],1),_vm._v(" "),_c('div',{staticClass:"woo-box-item-inlineBlock"},[_c('el-button',{attrs:{"type":"text","disabled":_vm.disabled.video},on:{"click":function($event){return _vm.selectVideo()}}},[_c('svg-icon',{staticClass:"woo-font woo-font--emotico",staticStyle:{"width":"18px","height":"18px"},attrs:{"icon-class":"video"}}),_vm._v(" "),_c('span',{staticClass:"iconbed-text"},[_vm._v("视频")])],1)],1)],1),_vm._v(" "),_c('el-button',{staticStyle:{"margin-top":"15px"},attrs:{"type":"primary","round":"","disabled":_vm.contentParam.content.length <= 0},on:{"click":function($event){return _vm.publishContent()}}},[_vm._v("\n                发布\n              ")])],1),_vm._v(" "),_c('el-upload',{directives:[{name:"show",rawName:"v-show",value:(_vm.upload.show),expression:"upload.show"}],ref:"upload",staticStyle:{"height":"15x"},attrs:{"headers":_vm.upload.headers,"limit":_vm.upload.limit,"action":_vm.upload.action,"show-file-list":true,"list-type":_vm.upload.listType,"accept":_vm.upload.accept,"auto-upload":false,"on-change":_vm.handleChange,"on-preview":_vm.handlePreview,"on-remove":_vm.handleRemove,"on-exceed":_vm.handleExceed,"on-success":_vm.handleSuccess,"on-error":_vm.handleError}},[_c('button',{directives:[{name:"show",rawName:"v-show",value:(false),expression:"false"}],attrs:{"id":"uploadBtn"}})])],1)])])],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/User/publish.vue?vue&type=template&id=b37c0a9a&scoped=true&

// EXTERNAL MODULE: ./api/operate.js
var operate = __webpack_require__(70);

// EXTERNAL MODULE: ./api/userInfo.js
var userInfo = __webpack_require__(17);

// EXTERNAL MODULE: ./api/tourist.js
var tourist = __webpack_require__(72);

// EXTERNAL MODULE: ./utils/auth.js
var auth = __webpack_require__(10);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/User/publish.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//引入接口定义的js文件




/* harmony default export */ var publishvue_type_script_lang_js_ = ({
  data() {
    return {
      //分类
      props: {
        expandTrigger: "hover",
        value: "categoryId",
        label: "categoryName",
        children: "children"
      },
      //请求参数
      contentParam: {
        categoryId: "",
        type: 0,
        isAnonymous: 0,
        content: "",
        fileList: []
      },
      //禁用
      disabled: {
        picture: false,
        video: false
      },
      //上传参数
      upload: {
        show: false,
        action: "",
        limit: 3,
        accept: "",
        listType: "",
        headers: {}
      },
      //选择的分类
      cascader: [],
      fileCount: 0,
      fileList: [],
      //分类列表
      categoryOptions: [],
      dialog: true,
      //1图片,2视频
      selectType: 0,
      markdownOption: {
        bold: true,
        // 粗体
        bold: true,
        // 粗体
        italic: true,
        // 斜体
        header: true,
        // 标题
        underline: true,
        // 下划线
        strikethrough: true,
        // 中划线
        mark: true,
        // 标记
        superscript: true,
        // 上角标
        subscript: true,
        // 下角标
        quote: true,
        // 引用
        ol: true,
        // 有序列表
        ul: true,
        // 无序列表
        link: true,
        // 链接
        imagelink: true,
        // 图片链接
        code: true,
        // code
        table: true,
        // 表格
        fullscreen: true,
        // 全屏编辑
        readmodel: true,
        // 沉浸式阅读
        htmlcode: true,
        // 展示html源码
        help: true,
        // 帮助

        /* 1.3.5 */
        undo: true,
        // 上一步
        redo: true,
        // 下一步
        trash: true,
        // 清空
        save: true,
        // 保存（触发events中的save事件）

        /* 1.4.2 */
        navigation: true,
        // 导航目录

        /* 2.1.8 */
        alignleft: true,
        // 左对齐
        aligncenter: true,
        // 居中
        alignright: true,
        // 右对齐

        /* 2.2.1 */
        subfield: true,
        // 单双栏模式
        preview: true // 预览

      },
      handbook: "#### how to use mavonEditor in nuxt.js",
      post: {
        content: "",
        html: ""
      }
    };
  },

  created() {
    if (Object(auth["a" /* getToken */])() === undefined) {
      this.$router.push({
        path: "/userlogin"
      });
    }

    this.upload.headers["Authorization"] = "Bearer " + Object(auth["a" /* getToken */])();
    this.haveMail();
  },

  mounted() {
    this.$nextTick(function () {
      //元素加载完成后执行的代码
      this.getTreeselect(); //this.$refs.searchAddress.$el.click()
    });
  },

  methods: {
    //初始化数据
    haveMail() {
      userInfo["a" /* default */].haveMail().then(response => {}).catch(response => {
        var count = 3; //赋值多少秒

        var times = setInterval(() => {
          count--; //递减

          if (count <= 0) {
            clearInterval(times);
            this.$router.push({
              path: "/user/profile"
            });
          } else {
            this.$message.warning("将再 " + count + " 秒后跳转到绑定邮箱页面");
          }
        }, 1000); //1000毫秒后执行
      });
    },

    //选择图片
    selectPicture() {
      //   this.$refs.uploadBtn.$el.click();
      //   this.$refs.uploadBtn.dispatchEvent(new MouseEvent('click'));
      this.upload.action = this.handleCampusUrl("/campus/imageUpload");
      this.upload.limit = 3;
      this.upload.accept = "image/*";
      this.upload.listType = "picture-card";
      this.selectType = 1;
      document.getElementById("uploadBtn").click();
    },

    selectVideo() {
      console.log("选择视频"); //   this.$refs.uploadBtn.$el.click();
      //   this.$refs.uploadBtn.dispatchEvent(new MouseEvent('click'));

      this.upload.action = this.handleCampusUrl("/campus/videoUpload");
      this.upload.limit = 1;
      this.upload.accept = "video/*";
      this.upload.listType = "text";
      this.selectType = 2;
      document.getElementById("uploadBtn").click();
    },

    /** 查询下拉树结构 */
    getTreeselect() {
      tourist["a" /* default */].getCategoryList().then(response => {
        let lists = response.data;

        for (let i = 0; i < lists.length; i++) {
          if (lists[i].type == "Y") {
            lists.splice(i, 1);
          }
        }

        this.categoryOptions = this.handleTree(lists, "categoryId");
      });
    },

    //文件移除
    handleRemove(file, fileList) {
      console.log(file, fileList);
      this.checkBtn();
    },

    //点击文件列表中已上传的文件时的钩子
    handlePreview(file) {
      console.log(file);
    },

    //上传成功
    handleSuccess(response, file, fileList) {
      if (response.code != 200) {
        fileList.splice(fileList.length - 1, 1);
        this.$message.warning(response.msg);
        setTimeout(() => {
          this.$message.error("上传失败，请重新上传");
        }, 1000);
      }

      this.checkBtn();
    },

    handleError(err, file, fileList) {
      this.$message.error("上传失败");
      this.checkBtn();
    },

    //文件改变
    handleChange(file, fileList) {
      console.log(file);
      this.fileList = fileList;
      let fileNum = fileList.length; //添加文件

      if (this.fileCount < fileNum) {
        if (file.raw.type.startsWith("image")) {
          this.disabled.video = true;
        } else {
          this.disabled.picture = true;
        }

        this.validated(file); //上传文件

        this.$refs.upload.submit();
      }

      this.fileCount = fileNum;

      if (fileNum > 0) {
        this.upload.show = true;
      }

      this.checkBtn();
    },

    handleExceed(files, fileList) {
      this.$message.warning(`上传数量超过限制`);
    },

    //验证文件类型
    validated(file) {
      // 若不符合类型，则让当前上传的文件去除掉即可，即从上传对列删除本次上传
      const size = file.size / 1024 / 1024;

      if (this.selectType == 1) {
        if (!file.raw.type.startsWith("image")) {
          this.$message.warning(`请选择图片`);
          this.fileList.splice(this.fileList.length - 1, 1);
        }

        if (size > 5) {
          this.fileList.splice(this.fileList.length - 1, 1);
          this.$message.warning("上传的图片大小不能超过 5MB!");
        }
      } else {
        if (!file.raw.type.startsWith("video")) {
          this.$message.warning(`请选择视频`);
          this.fileList.splice(this.fileList.length - 1, 1);
        }

        if (size > 20) {
          this.fileList.splice(this.fileList.length - 1, 1);
          this.$message.warning("上传的视频大小不能超过 20MB!");
        }
      }
    },

    checkBtn() {
      if (this.fileList.length == 0) {
        this.upload.show = false;
        this.disabled.picture = false;
        this.disabled.video = false;
      }
    },

    //发布
    publishContent() {
      this.contentParam.fileList = [];
      console.log(this.fileList);

      for (let file of this.fileList) {
        if (file.raw.type.startsWith("image")) {
          this.contentParam.type = 1;
        }

        if (file.raw.type.startsWith("video")) {
          this.contentParam.type = 2;
        }

        if (file.response !== undefined && file.response.code == 200) {
          this.contentParam.fileList.push(file.response.data.fileId);
        } else {
          console.log("禁止");
        }
      }

      if (this.cascader.length != 2) {
        this.$message.warning("请选择分类");
        return;
      } else {
        this.contentParam.categoryId = this.cascader[1];
      } //请求


      operate["a" /* default */].publishContent(this.contentParam).then(response => {
        // this.$message.success("发表成功，请等待管理的审核");
        this.$router.push({
          path: "/User/management?types=1"
        });
      });
    },

    updateDoc(markdown, render) {
      this.html = render;
      this.markdown = markdown;
    },

    saveDoc(markdown, render) {
      this.html = render;
      this.markdown = markdown;
    }

  }
});
// CONCATENATED MODULE: ./pages/User/publish.vue?vue&type=script&lang=js&
 /* harmony default export */ var User_publishvue_type_script_lang_js_ = (publishvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/User/publish.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(144)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  User_publishvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "b37c0a9a",
  "79838d2c"
  
)

/* harmony default export */ var publish = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {SvgIcon: __webpack_require__(16).default})


/***/ }),

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

/***/ })

};;
//# sourceMappingURL=publish.js.map