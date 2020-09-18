// 此模块封装了表单校验的相关工具
var form_verification = {

  //输入参数为tel和msg的input标签对象
  tel_check: function (tel,msg) {
    console.log("手机号校验");
    let reg_tel = /^1[3456789]\d{9}$/;
    let flag = reg_tel.test(tel.value);
    if (flag == false) {
      if (tel.value == '') {
        console.log("手机号为空");
        msg.innerHTML = "请输入手机号";
      } else {
        console.log("手机号格式不正确");
        msg.innerHTML = "手机号格式不正确";
      }
    }
    return flag;
  },

  //输入参数为pwd和msg的input标签对象
  pwd_check: function (pwd,msg) {
    console.log("密码校验");
    if (pwd.value == "") {
      console.log("密码为空");
      msg.innerHTML = "请输入密码";
      return false;
    }
    return true;
  },
  
  v_code_check:function(_this){
    let reg_v_code = /^[A-Za-z0-9]{4}$/;
    let flag = reg_v_code.test(_this.v_code);
    if (flag == false) {
      if (_this.v_code == '') {
        _this.msg = "请输入验证码";
      } else {
        _this.msg = "验证码格式不正确";
      }
    }
    return flag;
  }
}

