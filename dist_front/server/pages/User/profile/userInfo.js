exports.ids = [15,14];
exports.modules = {

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_userEmail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_userEmail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_userEmail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_userEmail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_userEmail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 105:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".email-code{width:33%;height:38px;float:right}.email-code img{cursor:pointer;vertical-align:middle;height:38px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 106:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(115);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("50524426", content, false, context)
};

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/User/profile/userEmail.vue?vue&type=template&id=7cbb6bbf&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('el-form',{ref:"emailForm",attrs:{"model":_vm.emailForm,"rules":_vm.emailRules}},[_c('h3',[_vm._v("密码验证")]),_vm._v(" "),_c('el-form-item',{attrs:{"prop":"password"}},[_c('el-input',{attrs:{"type":"password","auto-complete":"off","placeholder":"密码"},model:{value:(_vm.emailForm.password),callback:function ($$v) {_vm.$set(_vm.emailForm, "password", $$v)},expression:"emailForm.password"}},[_c('svg-icon',{staticClass:"el-input__icon input-icon",attrs:{"slot":"prefix","icon-class":"password"},slot:"prefix"})],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"prop":"email"}},[_c('el-input',{attrs:{"type":"text","auto-complete":"off","placeholder":"邮箱"},model:{value:(_vm.emailForm.email),callback:function ($$v) {_vm.$set(_vm.emailForm, "email", $$v)},expression:"emailForm.email"}},[_c('svg-icon',{staticClass:"el-input__icon input-icon",attrs:{"slot":"prefix","icon-class":"user"},slot:"prefix"})],1)],1),_vm._v(" "),_c('el-form-item',{attrs:{"prop":"code"}},[_c('el-input',{staticStyle:{"width":"63%"},attrs:{"auto-complete":"off","placeholder":"验证码"},nativeOn:{"keyup":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.handleEmail.apply(null, arguments)}},model:{value:(_vm.emailForm.code),callback:function ($$v) {_vm.$set(_vm.emailForm, "code", $$v)},expression:"emailForm.code"}},[_c('svg-icon',{staticClass:"el-input__icon input-icon",attrs:{"slot":"prefix","icon-class":"validCode"},slot:"prefix"})],1),_vm._v(" "),_c('div',{staticClass:"email-code"},[_c('img',{staticClass:"email-code-img",attrs:{"src":_vm.codeUrl},on:{"click":_vm.getCode}})])],1),_vm._v(" "),_c('el-form-item',{staticStyle:{"width":"100%"}},[_c('el-button',{staticStyle:{"width":"100%"},attrs:{"loading":_vm.loading,"size":"medium","type":_vm.isShow?'info':'primary',"disabled":_vm.isShow},nativeOn:{"click":function($event){$event.preventDefault();return _vm.handleEmail.apply(null, arguments)}}},[(!_vm.loading)?_c('span',[_vm._v(_vm._s(_vm.isShow ? _vm.count : "开始绑定"))]):_c('span',[_vm._v("请 求 中...")])])],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/User/profile/userEmail.vue?vue&type=template&id=7cbb6bbf&

// EXTERNAL MODULE: ./api/login.js
var login = __webpack_require__(18);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/User/profile/userEmail.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var userEmailvue_type_script_lang_js_ = ({
  props: {
    user: {
      type: Object
    }
  },

  data() {
    const checkEmail = (rule, value, callback) => {
      //判断用户名是否存在
      Object(login["b" /* checkEmailUnique */])(value).then(response => {
        if (response.data !== true) {
          callback(new Error("邮箱已经存在"));
          return;
        } else {
          callback();
        }
      });
    };

    return {
      emailRules: {
        email: [{
          required: true,
          message: "邮箱地址不能为空",
          trigger: "blur"
        }, {
          type: "email",
          message: "请输入正确的邮箱地址",
          trigger: ["blur", "change"]
        }, {
          required: true,
          validator: checkEmail,
          trigger: "blur"
        }],
        password: [{
          required: true,
          message: "密码不能为",
          trigger: "blur"
        }],
        code: [{
          required: true,
          message: "验证码不能为空",
          trigger: "blur"
        }]
      },
      emailForm: {
        password: "",
        email: "",
        code: "",
        uuid: ""
      },
      codeUrl: "",
      loading: false,
      //倒计时
      isShow: false,
      count: 0
    };
  },

  created() {
    this.getCode();
  },

  watch: {
    user(news, olds) {
      this.emailForm.email = this.handleCampusUrl(news.avatar);
    }

  },
  methods: {
    getCode() {
      Object(login["f" /* getCodeImg */])().then(res => {
        this.captchaEnabled = res.captchaEnabled === undefined ? true : res.captchaEnabled;

        if (this.captchaEnabled) {
          this.codeUrl = "data:image/gif;base64," + res.img;
          this.emailForm.uuid = res.uuid;
        }
      });
    },

    handleEmail() {
      this.$refs.emailForm.validate(valid => {
        if (valid) {
          this.loading = true;
          Object(login["a" /* bindMail */])(this.emailForm).then(response => {
            this.$message({
              message: response.msg,
              type: "success"
            });
            this.loading = false;
            this.getCode();
            this.verification();
          }).catch(() => {
            this.loading = false;
            this.getCode();
          });
        }
      });
    },

    //倒计时
    verification() {
      this.isShow = true; //倒计时

      this.count = 60; //赋值多少秒

      var times = setInterval(() => {
        this.count--; //递减

        if (this.count <= 0) {
          // <=0 变成获取按钮
          this.isShow = false;
          clearInterval(times);
        }
      }, 1000); //1000毫秒后执行
    }

  }
});
// CONCATENATED MODULE: ./pages/User/profile/userEmail.vue?vue&type=script&lang=js&
 /* harmony default export */ var profile_userEmailvue_type_script_lang_js_ = (userEmailvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/User/profile/userEmail.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(104)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  profile_userEmailvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "69739c46"
  
)

/* harmony default export */ var userEmail = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {SvgIcon: __webpack_require__(16).default})


/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_userInfo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(106);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_userInfo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_userInfo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_userInfo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_userInfo_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 115:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".email-code{width:33%;height:38px;float:right}.email-code img{cursor:pointer;vertical-align:middle;height:38px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/User/profile/userInfo.vue?vue&type=template&id=e6e39a3e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('el-form',{ref:"form",attrs:{"model":_vm.user,"rules":_vm.rules,"label-width":"80px"}},[_c('el-form-item',{attrs:{"label":"用户昵称","prop":"nickName"}},[_c('el-input',{attrs:{"maxlength":"30"},model:{value:(_vm.user.nickName),callback:function ($$v) {_vm.$set(_vm.user, "nickName", $$v)},expression:"user.nickName"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"邮箱","prop":"email"}},[_c('div',{staticStyle:{"display":"flex"}},[_c('el-input',{attrs:{"maxlength":"50"},model:{value:(_vm.user.email),callback:function ($$v) {_vm.$set(_vm.user, "email", $$v)},expression:"user.email"}})],1)]),_vm._v(" "),_c('el-form-item',{attrs:{"label":"性别"}},[_c('el-radio-group',{model:{value:(_vm.user.sex),callback:function ($$v) {_vm.$set(_vm.user, "sex", $$v)},expression:"user.sex"}},[_c('el-radio',{attrs:{"label":"0"}},[_vm._v("男")]),_vm._v(" "),_c('el-radio',{attrs:{"label":"1"}},[_vm._v("女")])],1)],1),_vm._v(" "),_c('el-form-item',[_c('el-button',{attrs:{"type":"primary","size":"mini"},on:{"click":_vm.submit}},[_vm._v("保存")]),_vm._v(" "),_c('el-button',{attrs:{"type":"danger","size":"mini"},on:{"click":_vm.close}},[_vm._v("关闭")])],1)],1),_vm._ssrNode(" "),_c('el-dialog',{attrs:{"title":"更换邮箱","visible":_vm.dialogVisible,"width":"600px"},on:{"update:visible":function($event){_vm.dialogVisible=$event}}},[(_vm.user !== undefined)?_c('userEmail',{attrs:{"user":_vm.user}}):_vm._e()],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/User/profile/userInfo.vue?vue&type=template&id=e6e39a3e&

// EXTERNAL MODULE: ./api/userInfo.js
var userInfo = __webpack_require__(17);

// EXTERNAL MODULE: ./api/login.js
var login = __webpack_require__(18);

// EXTERNAL MODULE: ./pages/User/profile/userEmail.vue + 4 modules
var userEmail = __webpack_require__(111);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/User/profile/userInfo.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var userInfovue_type_script_lang_js_ = ({
  components: {
    userEmail: userEmail["default"]
  },
  props: {
    user: {
      type: Object
    }
  },

  data() {
    const checkEmail = (rule, value, callback) => {
      //判断用户名是否存在
      Object(login["b" /* checkEmailUnique */])(value).then(response => {
        if (response.data !== true) {
          callback(new Error("邮箱已经存在"));
          return;
        } else {
          callback();
        }
      });
    };

    return {
      // 表单校验
      rules: {
        nickName: [{
          required: true,
          message: "用户昵称不能为空",
          trigger: "blur"
        }] // phonenumber: [
        //   { required: true, message: "手机号码不能为空", trigger: "blur" },
        //   {
        //     pattern: /^1[3|4|5|6|7|8|9][0-9]\d{8}$/,
        //     message: "请输入正确的手机号码",
        //     trigger: "blur",
        //   },
        // ],

      },
      emailRules: {
        email: [{
          required: true,
          message: "邮箱地址不能为空",
          trigger: "blur"
        }, {
          type: "email",
          message: "请输入正确的邮箱地址",
          trigger: ["blur", "change"]
        }, {
          required: true,
          validator: checkEmail,
          trigger: "blur"
        }]
      },
      dialogVisible: false,
      emailForm: {
        email: "",
        code: "",
        uuid: ""
      },
      codeUrl: "",
      loading: false
    };
  },

  created() {},

  methods: {
    submit() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          userInfo["a" /* default */].updateUserProfile(this.user).then(response => {
            this.$modal.msgSuccess("修改成功");
          });
        }
      });
    },

    close() {
      this.$tab.closePage();
    },

    openDialog() {
      this.dialogVisible = true;
    },

    getCode() {
      Object(login["f" /* getCodeImg */])().then(res => {
        this.captchaEnabled = res.captchaEnabled === undefined ? true : res.captchaEnabled;

        if (this.captchaEnabled) {
          this.codeUrl = "data:image/gif;base64," + res.img;
          this.emailForm.uuid = res.uuid;
        }
      });
    },

    handleEmail() {}

  }
});
// CONCATENATED MODULE: ./pages/User/profile/userInfo.vue?vue&type=script&lang=js&
 /* harmony default export */ var profile_userInfovue_type_script_lang_js_ = (userInfovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/User/profile/userInfo.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(114)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  profile_userInfovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "2e550c18"
  
)

/* harmony default export */ var profile_userInfo = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(105);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("662a6ece", content, false, context)
};

/***/ })

};;
//# sourceMappingURL=userInfo.js.map