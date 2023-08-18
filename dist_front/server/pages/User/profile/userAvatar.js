exports.ids = [13];
exports.modules = {

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(113);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("2530e80d", content, false, context)
};

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_userAvatar_vue_vue_type_style_index_0_id_19b8580e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(103);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_userAvatar_vue_vue_type_style_index_0_id_19b8580e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_userAvatar_vue_vue_type_style_index_0_id_19b8580e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_userAvatar_vue_vue_type_style_index_0_id_19b8580e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_userAvatar_vue_vue_type_style_index_0_id_19b8580e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 113:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".user-info-head[data-v-19b8580e]{position:relative;display:inline-block;height:120px}.user-info-head[data-v-19b8580e]:hover:after{content:\"+\";position:absolute;left:0;right:0;top:0;bottom:0;color:#eee;background:rgba(0,0,0,.5);font-size:24px;font-style:normal;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;cursor:pointer;line-height:110px;border-radius:50%}.img-circle[data-v-19b8580e]{border-radius:50%}.img-lg[data-v-19b8580e]{width:120px;height:120px}.avatar-upload-preview[data-v-19b8580e]{position:absolute;top:50%;transform:translate(50%,-50%);width:200px;height:200px;border-radius:50%;box-shadow:0 0 4px #ccc;overflow:hidden}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/User/profile/userAvatar.vue?vue&type=template&id=19b8580e&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('client-only',[_c('div',{staticClass:"user-info-head",on:{"click":function($event){return _vm.editCropper()}}},[_c('img',{staticClass:"img-circle img-lg",attrs:{"src":_vm.options.img,"title":"点击上传头像"}})]),_vm._v(" "),(_vm.open)?_c('el-dialog',{attrs:{"title":_vm.title,"visible":_vm.open,"width":"800px","append-to-body":""},on:{"update:visible":function($event){_vm.open=$event},"opened":_vm.modalOpened,"close":_vm.closeDialog}},[_c('el-row',[_c('el-col',{style:({ height: '350px' }),attrs:{"xs":24,"md":12}},[_c('client-only',[(_vm.visible)?_c('VueCropper',{ref:"cropper",attrs:{"img":_vm.options.img,"info":true,"autoCrop":_vm.options.autoCrop,"autoCropWidth":_vm.options.autoCropWidth,"autoCropHeight":_vm.options.autoCropHeight,"fixedBox":_vm.options.fixedBox},on:{"real-time":_vm.realTimeImg}}):_vm._e()],1)],1),_vm._v(" "),_c('el-col',{style:({ height: '350px' }),attrs:{"xs":24,"md":12}},[_c('div',{staticClass:"avatar-upload-preview"},[_c('img',{style:(_vm.previews.img),attrs:{"src":_vm.previews.url}})])])],1),_vm._v(" "),_c('br'),_vm._v(" "),_c('el-row',[_c('el-col',{attrs:{"lg":2,"md":2}},[_c('el-upload',{attrs:{"action":"#","http-request":_vm.requestUpload,"show-file-list":false,"before-upload":_vm.beforeUpload}},[_c('el-button',{attrs:{"size":"small"}},[_vm._v("\n              选择\n              "),_c('i',{staticClass:"el-icon-upload el-icon--right"})])],1)],1),_vm._v(" "),_c('el-col',{attrs:{"lg":{ span: 1, offset: 2 },"md":2}},[_c('el-button',{attrs:{"icon":"el-icon-plus","size":"small"},on:{"click":function($event){return _vm.changeScale(1)}}})],1),_vm._v(" "),_c('el-col',{attrs:{"lg":{ span: 1, offset: 1 },"md":2}},[_c('el-button',{attrs:{"icon":"el-icon-minus","size":"small"},on:{"click":function($event){return _vm.changeScale(-1)}}})],1),_vm._v(" "),_c('el-col',{attrs:{"lg":{ span: 1, offset: 1 },"md":2}},[_c('el-button',{attrs:{"icon":"el-icon-refresh-left","size":"small"},on:{"click":function($event){return _vm.rotateLeft()}}})],1),_vm._v(" "),_c('el-col',{attrs:{"lg":{ span: 1, offset: 1 },"md":2}},[_c('el-button',{attrs:{"icon":"el-icon-refresh-right","size":"small"},on:{"click":function($event){return _vm.rotateRight()}}})],1),_vm._v(" "),_c('el-col',{attrs:{"lg":{ span: 2, offset: 6 },"md":2}},[_c('el-button',{attrs:{"type":"primary","size":"small"},on:{"click":function($event){return _vm.uploadImg()}}},[_vm._v("提 交")])],1)],1)],1):_vm._e()],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/User/profile/userAvatar.vue?vue&type=template&id=19b8580e&scoped=true&

// EXTERNAL MODULE: ./api/userInfo.js
var userInfo = __webpack_require__(17);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/User/profile/userAvatar.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
 // const VueCropper = (resolve) => resolve(require("vue-cropper"));

/* harmony default export */ var userAvatarvue_type_script_lang_js_ = ({
  props: {
    user: {
      type: Object
    }
  },

  // components: { VueCropper },
  data() {
    return {
      // 是否显示弹出层
      open: false,
      // 是否显示cropper
      visible: false,
      // 弹出层标题
      title: "修改头像",
      options: {
        img: "",
        //裁剪图片的地址
        autoCrop: true,
        // 是否默认生成截图框
        autoCropWidth: 200,
        // 默认生成截图框宽度
        autoCropHeight: 200,
        // 默认生成截图框高度
        fixedBox: true // 固定截图框大小 不允许改变

      },
      previews: {}
    };
  },

  created() {
    if (false) {} // this.options.img = this.handleCampusUrl(news.avatar);

  },

  watch: {
    user(news, olds) {
      this.options.img = this.handleCampusUrl(news.avatar);
    }

  },
  methods: {
    // 编辑头像
    editCropper() {
      this.open = true;
      this.visible = true;
    },

    // 打开弹出层结束时的回调
    modalOpened() {
      this.visible = true;
    },

    // 覆盖默认的上传行为
    requestUpload() {},

    // 向左旋转
    rotateLeft() {
      this.$refs.cropper.rotateLeft();
    },

    // 向右旋转
    rotateRight() {
      this.$refs.cropper.rotateRight();
    },

    // 图片缩放
    changeScale(num) {
      num = num || 1;
      this.$refs.cropper.changeScale(num);
    },

    // 上传预处理
    beforeUpload(file) {
      if (file.type.indexOf("image/") == -1) {
        this.$modal.msgError("文件格式错误，请上传图片类型,如：JPG，PNG后缀的文件。");
      } else {
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onload = () => {
          this.options.img = reader.result;
        };
      }
    },

    // 上传图片
    uploadImg() {
      this.$refs.cropper.getCropBlob(data => {
        let formData = new FormData();
        formData.append("avatarfile", data);
        userInfo["a" /* default */].uploadAvatar(formData).then(response => {
          this.open = false;
          this.options.img = this.handleCampusUrl(response.imgUrl); // store.commit('SET_AVATAR', this.options.img);

          this.$modal.msgSuccess("修改成功");
          this.visible = false;
        });
      });
    },

    // 实时预览
    realTimeImg(data) {
      this.previews = data;
    },

    // 关闭窗口
    closeDialog() {
      this.options.img = this.handleCampusUrl(this.user.avatar);
      this.visible = false;
    }

  }
});
// CONCATENATED MODULE: ./pages/User/profile/userAvatar.vue?vue&type=script&lang=js&
 /* harmony default export */ var profile_userAvatarvue_type_script_lang_js_ = (userAvatarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/User/profile/userAvatar.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(112)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  profile_userAvatarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "19b8580e",
  "60fed59f"
  
)

/* harmony default export */ var userAvatar = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=userAvatar.js.map