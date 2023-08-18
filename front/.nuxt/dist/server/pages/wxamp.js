exports.ids = [22];
exports.modules = {

/***/ 123:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(139);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("084218ba", content, false, context)
};

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_wxamp_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(123);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_wxamp_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_wxamp_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_wxamp_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_wxamp_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 139:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".wxamp{display:flex;justify-content:center;align-items:center}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/wxamp.vue?vue&type=template&id=2c7b20c1&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"wxamp"},[_vm._ssrNode("<div><span>使用微信扫一扫登录</span> <div style=\"margin-top: 20px\"><img"+(_vm._ssrAttr("src",_vm.imgUrl))+" class=\"code-img\"></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/wxamp.vue?vue&type=template&id=2c7b20c1&

// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__(11);

// EXTERNAL MODULE: ./api/userInfo.js
var userInfo = __webpack_require__(17);

// EXTERNAL MODULE: ./api/login.js
var login = __webpack_require__(18);

// EXTERNAL MODULE: ./utils/auth.js
var auth = __webpack_require__(10);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/wxamp.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var wxampvue_type_script_lang_js_ = ({
  data() {
    return {
      imgUrl: "",
      uuid: "",
      scanRes: false
    };
  },

  mounted() {
    this.getImage();
  },

  methods: {
    //获取二维码
    getImage() {
      Object(login["g" /* getWxampImg */])().then(res => {
        this.imgUrl = "data:image/gif;base64," + res.img;
        this.uuid = res.uuid;
        this.checkWxamp();
      });
    },

    //判断是否授权
    checkWxamp() {
      var count = 240; //赋值多少秒

      var times = setInterval(() => {
        this.count--; //递减

        this.checkWxampApi(); //登录成功

        if (this.scanRes) {
          clearInterval(times);
          this.$message.success("登录成功!");
          this.tologin();
        }

        if (count <= 0) {
          clearInterval(times);
        }
      }, 1000); //1000毫秒后执行
    },

    checkWxampApi() {
      Object(login["d" /* checkWxamp */])(this.uuid).then(res => {
        this.scanRes = res.msg == "1" ? true : false;
      });
    },

    tologin() {
      Object(login["k" /* wxampLogin */])(this.uuid).then(res => {
        Object(auth["c" /* setToken */])(res.token);
        window.close();
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/wxamp.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_wxampvue_type_script_lang_js_ = (wxampvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/wxamp.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(138)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_wxampvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "37e0acd4"
  
)

/* harmony default export */ var wxamp = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=wxamp.js.map