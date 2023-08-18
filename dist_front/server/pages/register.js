exports.ids = [20];
exports.modules = {

/***/ 121:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(135);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("7557931a", content, false, context)
};

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(121);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_register_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 135:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".register{display:flex;justify-content:center;align-items:center;height:100%}.title{margin:0 auto 30px;text-align:center;color:#707070}.register-form{border-radius:6px;background:#fff;width:400px;padding:25px 25px 5px}.el-input,.el-input input{height:38px}.register-tip{font-size:13px;text-align:center;color:#bfbfbf}.register-code{width:33%;height:38px;float:right}.register-code img{cursor:pointer;vertical-align:middle}.el-register-footer{height:40px;line-height:40px;position:fixed;bottom:0;width:100%;text-align:center;color:#fff;font-family:Arial;font-size:12px;letter-spacing:1px}.register-code-img{height:38px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/register.vue?vue&type=template&id=09f257a1&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"register"},[_c('el-form',{ref:"registerForm",staticClass:"register-form",attrs:{"model":_vm.registerForm,"rules":_vm.registerRules}},[_c('h3',{staticClass:"title"},[_vm._v("校园信息墙")]),_vm._v(" "),_c('el-form-item',{attrs:{"prop":"username"}},[_c('el-input',{attrs:{"type":"text","auto-complete":"off","placeholder":"账号"},model:{value:(_vm.registerForm.username),callback:function ($$v) {_vm.$set(_vm.registerForm, "username", $$v)},expression:"registerForm.username"}},[_c('svg-icon',{staticClass:"el-input__icon input-icon",attrs:{"slot":"prefix","icon-class":"user"},slot:"prefix"})],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"prop":"password"}},[_c('el-input',{attrs:{"type":"password","auto-complete":"off","placeholder":"密码"},nativeOn:{"keyup":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.handleRegister.apply(null, arguments)}},model:{value:(_vm.registerForm.password),callback:function ($$v) {_vm.$set(_vm.registerForm, "password", $$v)},expression:"registerForm.password"}},[_c('svg-icon',{staticClass:"el-input__icon input-icon",attrs:{"slot":"prefix","icon-class":"password"},slot:"prefix"})],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"prop":"confirmPassword"}},[_c('el-input',{attrs:{"type":"password","auto-complete":"off","placeholder":"确认密码"},nativeOn:{"keyup":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.handleRegister.apply(null, arguments)}},model:{value:(_vm.registerForm.confirmPassword),callback:function ($$v) {_vm.$set(_vm.registerForm, "confirmPassword", $$v)},expression:"registerForm.confirmPassword"}},[_c('svg-icon',{staticClass:"el-input__icon input-icon",attrs:{"slot":"prefix","icon-class":"password"},slot:"prefix"})],1)],1),_vm._v(" "),(_vm.captchaEnabled)?_c('el-form-item',{attrs:{"prop":"code"}},[_c('el-input',{staticStyle:{"width":"63%"},attrs:{"auto-complete":"off","placeholder":"验证码"},nativeOn:{"keyup":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.handleRegister.apply(null, arguments)}},model:{value:(_vm.registerForm.code),callback:function ($$v) {_vm.$set(_vm.registerForm, "code", $$v)},expression:"registerForm.code"}},[_c('svg-icon',{staticClass:"el-input__icon input-icon",attrs:{"slot":"prefix","icon-class":"validCode"},slot:"prefix"})],1),_vm._v(" "),_c('div',{staticClass:"register-code"},[_c('img',{staticClass:"register-code-img",attrs:{"src":_vm.codeUrl},on:{"click":_vm.getCode}})])],1):_vm._e(),_vm._v(" "),_c('el-form-item',{staticStyle:{"width":"100%"}},[_c('el-button',{staticStyle:{"width":"100%"},attrs:{"loading":_vm.loading,"size":"medium","type":"primary"},nativeOn:{"click":function($event){$event.preventDefault();return _vm.handleRegister.apply(null, arguments)}}},[(!_vm.loading)?_c('span',[_vm._v("注 册")]):_c('span',[_vm._v("注 册 中...")])]),_vm._v(" "),_c('div',{staticStyle:{"float":"right"}},[_c('router-link',{staticClass:"link-type",attrs:{"to":'/userlogin'}},[_vm._v("使用已有账户登录")])],1)],1)],1),_vm._ssrNode(" <div class=\"el-register-footer\"><span>Copyright © 2018-2022 ruoyi.vip All Rights Reserved.</span></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/register.vue?vue&type=template&id=09f257a1&

// EXTERNAL MODULE: ./api/login.js
var login = __webpack_require__(18);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/register.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var registervue_type_script_lang_js_ = ({
  name: "Register",

  data() {
    const equalToPassword = (rule, value, callback) => {
      if (this.registerForm.password !== value) {
        callback(new Error("两次输入的密码不一致"));
      } else {
        callback();
      }
    };

    const checkUserName = (rule, value, callback) => {
      //判断用户名是否存在
      Object(login["c" /* checkUserNameUnique */])(value).then(response => {
        if (response.data !== true) {
          callback(new Error("用户名已经存在"));
          return;
        } else {
          callback();
        }
      });
    };

    return {
      codeUrl: "",
      registerForm: {
        username: "",
        password: "",
        confirmPassword: "",
        code: "",
        uuid: ""
      },
      registerRules: {
        username: [{
          required: true,
          trigger: "blur",
          message: "请输入您的账号"
        }, {
          min: 2,
          max: 20,
          message: "用户账号长度必须介于 2 和 20 之间",
          trigger: "blur"
        }, {
          required: true,
          validator: checkUserName,
          trigger: "blur"
        }],
        password: [{
          required: true,
          trigger: "blur",
          message: "请输入您的密码"
        }, {
          min: 5,
          max: 20,
          message: "用户密码长度必须介于 5 和 20 之间",
          trigger: "blur"
        }],
        confirmPassword: [{
          required: true,
          trigger: "blur",
          message: "请再次输入您的密码"
        }, {
          required: true,
          validator: equalToPassword,
          trigger: "blur"
        }],
        code: [{
          required: true,
          trigger: "change",
          message: "请输入验证码"
        }]
      },
      loading: false,
      captchaEnabled: true
    };
  },

  created() {
    this.getCode();
  },

  methods: {
    getCode() {
      Object(login["f" /* getCodeImg */])().then(res => {
        this.captchaEnabled = res.captchaEnabled === undefined ? true : res.captchaEnabled;

        if (this.captchaEnabled) {
          this.codeUrl = "data:image/gif;base64," + res.img;
          this.registerForm.uuid = res.uuid;
        }
      });
    },

    handleRegister() {
      this.$refs.registerForm.validate(valid => {
        if (valid) {
          this.loading = true;
          Object(login["j" /* register */])(this.registerForm).then(res => {
            const username = this.registerForm.username;
            this.$alert("<font color='red'>恭喜你，您的账号 " + username + " 注册成功！</font>", "系统提示", {
              dangerouslyUseHTMLString: true,
              type: "success"
            }).then(() => {
              this.$router.push("/userlogin");
            }).catch(() => {});
          }).catch(() => {
            this.loading = false;

            if (this.captchaEnabled) {
              this.getCode();
            }
          });
        }
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/register.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_registervue_type_script_lang_js_ = (registervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/register.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(134)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_registervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "513978a2"
  
)

/* harmony default export */ var register = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {SvgIcon: __webpack_require__(16).default})


/***/ })

};;
//# sourceMappingURL=register.js.map