exports.ids = [7];
exports.modules = {

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(99);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("3f6e3d48", content, false, context)
};

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ContentFile.vue?vue&type=template&id=3c32873e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ContentFile",attrs:{"id":"fileWidth"}},[(_vm.contentType == 1)?_vm._ssrNode("<div class=\"picture file-row\">","</div>",_vm._l((_vm.fileList),function(item,key){return _vm._ssrNode("<div class=\"picture_item\">","</div>",[_c('el-image',{style:(_vm.image.style),attrs:{"fit":_vm.image.fit,"src":item,"preview-src-list":_vm.fileList}})],1)}),0):_vm._e(),_vm._ssrNode(" "+((_vm.contentType == 2)?("<div><video align=\"center\""+(_vm._ssrAttr("loop",true))+(_vm._ssrAttr("autoplay",false))+" width=\"100%\""+(_vm._ssrAttr("height",_vm.videoHeight))+" aspectRatio=\"16:9\""+(_vm._ssrAttr("fluid",true))+" preload=\"none\""+(_vm._ssrAttr("controls",true))+(_vm._ssrAttr("muted",false))+" style=\"border-radius: 10px\"><source"+(_vm._ssrAttr("src",_vm.fileList[0]))+" type=\"video/mp4\">\n      您的浏览器不支持视频标签！\n    </video></div>"):"<!---->"))],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/ContentFile.vue?vue&type=template&id=3c32873e&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/ContentFile.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var ContentFilevue_type_script_lang_js_ = ({
  name: "ContentFile",
  props: ["fileUrls", "contentType"],
  components: {},

  data() {
    //这里存放数据
    return {
      host: {"DESCN":"线上环境","API_BASE_URL":"https://v1.campus.oddfar.com"}.API_BASE_URL,
      //图片样式
      image: {
        style: "border-radius: 10px; position: static; width: 33%",
        fit: "contain"
      },
      //视频样式
      videoHeight: "300px;",
      //修改后的文件列表
      fileList: ""
    };
  },

  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.setFileStyle();
    this.setFileUrls();
  },

  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    var div = document.getElementById("fileWidth");
  },

  //方法集合
  methods: {
    //设置样式
    setFileStyle() {
      let width = document.documentElement.clientWidth;
      let height = document.documentElement.clientHeight;

      if (width < 642) {
        this.videoHeight = "162px;";
      }
    },

    //处理url
    setFileUrls() {
      this.fileList = this.fileUrls.map(item => {
        if (item.trim().startsWith("http") == false) {
          return item = this.host + item;
        }
      });

      if (this.fileList.length > 1) {
        this.image.style = "border-radius: 10px; width: 25%;aspect-ratio:1/1";
        this.image.fit = "cover";
      }
    }

  }
});
// CONCATENATED MODULE: ./components/ContentFile.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ContentFilevue_type_script_lang_js_ = (ContentFilevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/ContentFile.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(98)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_ContentFilevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "602dede0"
  
)

/* harmony default export */ var ContentFile = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentFile_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentFile_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentFile_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentFile_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentFile_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".picture_item{display:inline;padding-left:.25rem;padding-top:.25rem}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=content-file.js.map