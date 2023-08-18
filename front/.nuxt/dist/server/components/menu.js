exports.ids = [9];
exports.modules = {

/***/ 109:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(117);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("48c28920", content, false, context)
};

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(109);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Menu_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 117:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".campus-menu{box-shadow:0 0 25px rgba(0,0,0,.1);position:-webkit-sticky;position:sticky;top:45px;background-color:#fff}.nav-title{margin:0;padding:10px 16px;line-height:26px;font-size:22px;font-weight:500}.el-menu-vertical:not(.el-menu--collapse){width:182px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Menu.vue?vue&type=template&id=c7b37c84&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"margin":"20px 8px 0 0"}},[_vm._ssrNode("<div class=\"campus-menu\""+(_vm._ssrStyle(null,{ height: _vm.menuHeight + 'px' }, null))+">","</div>",[_vm._ssrNode("<div>","</div>",[_vm._ssrNode("<h2 class=\"nav-title\">首页</h2> "),_c('el-menu',{staticClass:"el-menu-vertical",staticStyle:{"width":"182px"},attrs:{"default-active":"1","unique-opened":true,"background-color":"#ffffff","text-color":"#000000","active-text-color":"#d2691e"},on:{"select":_vm.handleSelectMenu}},_vm._l((_vm.categoryTree),function(item,i){return _c('div',{key:i},[(item.children != null)?_c('el-submenu',{attrs:{"index":item.categoryId}},[_c('template',{slot:"title"},[_c('svg-icon',{staticStyle:{"margin-right":"18px"},attrs:{"icon-class":item.icon}}),_vm._v(" "),_c('span',[_vm._v(_vm._s(item.categoryName))])],1),_vm._v(" "),_vm._l((item.children),function(child,i){return _c('el-menu-item',{key:i,attrs:{"index":child.categoryId}},[_c('svg-icon',{staticStyle:{"margin-right":"18px"},attrs:{"icon-class":item.icon}}),_vm._v(" "),_c('span',[_vm._v(_vm._s(child.categoryName))])],1)})],2):_c('el-menu-item',{attrs:{"index":item.categoryId}},[_c('template',{slot:"title"},[_c('svg-icon',{staticStyle:{"margin-right":"18px"},attrs:{"icon-class":item.icon}}),_vm._v(" "),_c('span',[_vm._v(_vm._s(item.categoryName))])],1)],2)],1)}),0)],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Menu.vue?vue&type=template&id=c7b37c84&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Menu.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Menuvue_type_script_lang_js_ = ({
  //import引入的组件需要注入到对象中才能使用
  components: {},
  props: ["categoryObj"],

  data() {
    //这里存放数据
    return {
      categoryTree: [],
      //选中的菜单id
      selectMenuId: null,
      menuHeight: "",
      screenWidth: null
    };
  },

  watch: {
    screenWidth: function (n, o) {
      if (n < 720) {} else {}
    }
  },

  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.categoryTree = this.handleTree(this.categoryObj, "categoryId");
    this.menuHeight = document.documentElement.clientHeight - 45;
  },

  mounted() {
    this.screenWidth = document.documentElement.clientWidth;

    window.onresize = () => {
      //屏幕尺寸变化
      return (() => {
        this.screenWidth = document.documentElement.clientWidth;
      })();
    };
  },

  //方法集合
  methods: {
    //点击菜单
    handleSelectMenu(key, keyPath) {
      /**
       *  传递值“子向父组件传值”
       * this.$emit("事件命名", data);
       * <CampusMenu v-on:"事件命名"="接受的方法()"></CampusMenu>
       */
      if (this.selectMenuId != key) {
        this.selectMenuId = key;
        this.$emit("handleCategory", key);
      }
    }

  }
});
// CONCATENATED MODULE: ./components/Menu.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Menuvue_type_script_lang_js_ = (Menuvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/Menu.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(116)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Menuvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "1b886b18"
  
)

/* harmony default export */ var Menu = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {SvgIcon: __webpack_require__(16).default})


/***/ })

};;
//# sourceMappingURL=menu.js.map