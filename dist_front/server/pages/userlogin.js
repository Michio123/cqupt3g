exports.ids = [21];
exports.modules = {

/***/ 122:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(137);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("33d0fe4c", content, false, context)
};

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_userlogin_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(122);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_userlogin_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_userlogin_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_userlogin_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_userlogin_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".login{display:flex;justify-content:center;align-items:center;height:100%}.router-link-active{text-decoration:none}.login-form{border-radius:6px;background:#fff;width:400px;padding:25px 25px 5px}.el-input,.el-input input{height:38px}.input-icon{height:39px;width:14px;margin-left:2px}.login-tip{font-size:13px;text-align:center;color:#bfbfbf}.login-code{width:33%;height:38px;float:right}.login-code img{cursor:pointer;vertical-align:middle}.el-login-footer{height:40px;line-height:40px;position:fixed;bottom:0;width:100%;text-align:center;color:#fff;font-family:Arial;font-size:12px;letter-spacing:1px}.login-code-img{height:38px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/userlogin.vue?vue&type=template&id=366f0b58&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"ss"},[_vm._ssrNode("<div class=\"grid-content bg-purple-dark\">","</div>",[_vm._ssrNode("<div class=\"login\">","</div>",[_c('el-form',{ref:"loginForm",staticClass:"login-form",attrs:{"model":_vm.loginForm,"rules":_vm.loginRules}},[_c('h3',{staticClass:"title"},[_vm._v("校园论坛")]),_vm._v(" "),_c('el-form-item',{attrs:{"prop":"username"}},[_c('el-input',{attrs:{"type":"text","auto-complete":"off","placeholder":"账号"},model:{value:(_vm.loginForm.username),callback:function ($$v) {_vm.$set(_vm.loginForm, "username", $$v)},expression:"loginForm.username"}},[_c('svg-icon',{staticClass:"el-input__icon input-icon",attrs:{"slot":"prefix","icon-class":"user"},slot:"prefix"})],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"prop":"password"}},[_c('el-input',{attrs:{"type":"password","auto-complete":"off","placeholder":"密码"},nativeOn:{"keyup":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.handleLogin.apply(null, arguments)}},model:{value:(_vm.loginForm.password),callback:function ($$v) {_vm.$set(_vm.loginForm, "password", $$v)},expression:"loginForm.password"}},[_c('svg-icon',{staticClass:"el-input__icon input-icon",attrs:{"slot":"prefix","icon-class":"password"},slot:"prefix"})],1)],1),_vm._v(" "),(_vm.captchaEnabled)?_c('el-form-item',{attrs:{"prop":"code"}},[_c('el-input',{staticStyle:{"width":"63%"},attrs:{"auto-complete":"off","placeholder":"验证码"},nativeOn:{"keyup":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.handleLogin.apply(null, arguments)}},model:{value:(_vm.loginForm.code),callback:function ($$v) {_vm.$set(_vm.loginForm, "code", $$v)},expression:"loginForm.code"}},[_c('svg-icon',{staticClass:"el-input__icon input-icon",attrs:{"slot":"prefix","icon-class":"validCode"},slot:"prefix"})],1),_vm._v(" "),_c('div',{staticClass:"login-code"},[_c('img',{staticClass:"login-code-img",attrs:{"src":_vm.codeUrl},on:{"click":_vm.getCode}})])],1):_vm._e(),_vm._v(" "),_c('el-form-item',[_c('router-link',{staticClass:"router-link-active",staticStyle:{"float":"left"},attrs:{"to":{ path: 'Resetpassword' }}},[_c('el-link',{attrs:{"type":"danger"}},[_vm._v("忘记密码？")])],1),_vm._v(" "),_c('span',{staticClass:"router-link-active",staticStyle:{"float":"right"},on:{"click":_vm.openWxamp}})],1),_vm._v(" "),_c('el-form-item',{staticStyle:{"width":"100%"}},[_c('el-button',{staticStyle:{"width":"100%"},attrs:{"loading":_vm.loading,"size":"medium","type":"primary"},nativeOn:{"click":function($event){$event.preventDefault();return _vm.handleLogin.apply(null, arguments)}}},[(!_vm.loading)?_c('span',[_vm._v("登 录")]):_c('span',[_vm._v("登 录 中...")])]),_vm._v(" "),_c('div',{staticStyle:{"float":"right"}},[_c('router-link',{staticClass:"link-type",attrs:{"to":'/register'}},[_vm._v("立即注册")])],1)],1)],1)],1)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/userlogin.vue?vue&type=template&id=366f0b58&

// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__(11);

// EXTERNAL MODULE: ./api/userInfo.js
var userInfo = __webpack_require__(17);

// EXTERNAL MODULE: ./api/login.js
var login = __webpack_require__(18);

// EXTERNAL MODULE: ./utils/auth.js
var auth = __webpack_require__(10);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/userlogin.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var userloginvue_type_script_lang_js_ = ({
  data() {
    return {
      loginForm: {
        username: "",
        password: "",
        code: "",
        uuid: ""
      },
      codeUrl: "",
      loginRules: {
        username: [{
          required: true,
          trigger: "blur",
          message: "请输入您的账号"
        }],
        password: [{
          required: true,
          trigger: "blur",
          message: "请输入您的密码"
        }],
        code: [{
          required: true,
          trigger: "change",
          message: "请输入验证码"
        }]
      },
      loading: false,
      // 验证码开关
      captchaEnabled: true
    };
  },

  created() {
    if (Object(auth["a" /* getToken */])() !== undefined) {
      this.$router.push("/");
    } else if (this.$route.query.id != "") {
      if (this.$route.query.id == 1) {
        this.$message.error("请先登录！");
      } else if (this.$route.query.id == 2) {
        this.$message.success("修改成功!请登录!");
      }

      this.$router.push("/userlogin");
    }

    this.getCode();
  },

  methods: {
    //获取验证码
    getCode() {
      Object(login["f" /* getCodeImg */])().then(res => {
        this.captchaEnabled = res.captchaEnabled === undefined ? true : res.captchaEnabled;

        if (this.captchaEnabled) {
          this.codeUrl = "data:image/gif;base64," + res.img;
          this.loginForm.uuid = res.uuid;
        }
      });
    },

    //打开微信小程序二维码登录
    openWxamp() {
      var flag = window.open("/wxamp", "Campus", "width=400,height=700,left=30,top=10");
      var loop = setInterval(function () {
        if (flag.closed) {
          clearInterval(loop);
          window.location.reload();
        }
      }, 3);
    },

    // 用户登录
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true; //登录接口

          Object(login["h" /* login */])(this.loginForm).then(response => {
            // 登录成功 设置cookie
            this.setCookies(response); //重新加载

            window.location.reload();
          }).catch(response => {
            this.loading = false;

            if (this.captchaEnabled) {
              this.getCode();
            }
          });
        }
      });
    },

    //设置COOKIE
    setCookies(res) {
      Object(auth["c" /* setToken */])(res.token);
    }

  }
});
// CONCATENATED MODULE: ./pages/userlogin.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_userloginvue_type_script_lang_js_ = (userloginvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/userlogin.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(136)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_userloginvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "7adb2be2"
  
)

/* harmony default export */ var userlogin = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {SvgIcon: __webpack_require__(16).default})


/***/ })

};;
//# sourceMappingURL=userlogin.js.map