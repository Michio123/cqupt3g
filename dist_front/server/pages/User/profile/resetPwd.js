exports.ids = [12];
exports.modules = {

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/User/profile/resetPwd.vue?vue&type=template&id=317c03f0&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-form',{ref:"form",attrs:{"model":_vm.user,"rules":_vm.rules,"label-width":"80px"}},[_c('el-form-item',{attrs:{"label":"旧密码","prop":"oldPassword"}},[_c('el-input',{attrs:{"placeholder":"请输入旧密码","type":"password","show-password":""},model:{value:(_vm.user.oldPassword),callback:function ($$v) {_vm.$set(_vm.user, "oldPassword", $$v)},expression:"user.oldPassword"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"新密码","prop":"newPassword"}},[_c('el-input',{attrs:{"placeholder":"请输入新密码","type":"password","show-password":""},model:{value:(_vm.user.newPassword),callback:function ($$v) {_vm.$set(_vm.user, "newPassword", $$v)},expression:"user.newPassword"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"确认密码","prop":"confirmPassword"}},[_c('el-input',{attrs:{"placeholder":"请确认新密码","type":"password","show-password":""},model:{value:(_vm.user.confirmPassword),callback:function ($$v) {_vm.$set(_vm.user, "confirmPassword", $$v)},expression:"user.confirmPassword"}})],1),_vm._v(" "),_c('el-form-item',[_c('el-button',{attrs:{"type":"primary","size":"mini"},on:{"click":_vm.submit}},[_vm._v("保存")]),_vm._v(" "),_c('el-button',{attrs:{"type":"danger","size":"mini"},on:{"click":_vm.close}},[_vm._v("关闭")])],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/User/profile/resetPwd.vue?vue&type=template&id=317c03f0&

// EXTERNAL MODULE: ./api/userInfo.js
var userInfo = __webpack_require__(17);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/User/profile/resetPwd.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var resetPwdvue_type_script_lang_js_ = ({
  data() {
    const equalToPassword = (rule, value, callback) => {
      if (this.user.newPassword !== value) {
        callback(new Error("两次输入的密码不一致"));
      } else {
        callback();
      }
    };

    return {
      user: {
        oldPassword: undefined,
        newPassword: undefined,
        confirmPassword: undefined
      },
      // 表单校验
      rules: {
        oldPassword: [{
          required: true,
          message: "旧密码不能为空",
          trigger: "blur"
        }],
        newPassword: [{
          required: true,
          message: "新密码不能为空",
          trigger: "blur"
        }, {
          min: 6,
          max: 20,
          message: "长度在 6 到 20 个字符",
          trigger: "blur"
        }],
        confirmPassword: [{
          required: true,
          message: "确认密码不能为空",
          trigger: "blur"
        }, {
          required: true,
          validator: equalToPassword,
          trigger: "blur"
        }]
      }
    };
  },

  methods: {
    submit() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          userInfo["a" /* default */].updateUserPwd(this.user.oldPassword, this.user.newPassword).then(response => {
            this.$modal.msgSuccess("修改成功");
          });
        }
      });
    },

    close() {
      this.$tab.closePage();
    }

  }
});
// CONCATENATED MODULE: ./pages/User/profile/resetPwd.vue?vue&type=script&lang=js&
 /* harmony default export */ var profile_resetPwdvue_type_script_lang_js_ = (resetPwdvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/User/profile/resetPwd.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  profile_resetPwdvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "43ef706e"
  
)

/* harmony default export */ var resetPwd = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=resetPwd.js.map