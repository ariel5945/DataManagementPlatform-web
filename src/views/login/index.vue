<template>
  <div class="bg-con">
    <div class="bg-box">
      <div class="left-con">
        <img src="@/assets/img/loginbg.png" alt="" />
      </div>
      <div class="login-box">
        <p>洛宁县大数据产业服务平台</p>
        <div>
          <el-form
            ref="loginForm"
            :model="loginForm"
            :rules="loginRules"
            class="login-form"
            auto-complete="on"
            label-position="left"
          >
            <div class="title-container">
              <h3 class="title"></h3>
            </div>

            <el-form-item prop="username">
              <span class="svg-container">
                <!-- <svg-icon icon-class="user" /> -->
              </span>
              <el-input
                ref="username"
                v-model="loginForm.username"
                placeholder="请输入用户名"
                name="username"
                type="text"
                tabindex="1"
                auto-complete="on"
              />
            </el-form-item>

            <el-form-item prop="password">
              <span class="svg-container">
                <!-- <svg-icon icon-class="password" /> -->
              </span>
              <el-input
                :key="passwordType"
                ref="password"
                v-model="loginForm.password"
                :type="passwordType"
                placeholder="请输入密码"
                name="password"
                tabindex="2"
                auto-complete="on"
                @keyup.enter.native="handleLogin"
              />
              <span class="show-pwd" @click="showPwd">
                <svg-icon
                  style="background-color: #fff"
                  :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'"
                />
              </span>
            </el-form-item>

            <el-button
              :loading="loading"
              type="primary"
              style="width: 100%; margin-bottom: 30px"
              @click.native.prevent="handleLogin"
              >登录</el-button
            >
            <!-- <div class="tips">
              <span style="margin-right: 20px">username: admin</span>
              <span> password: any</span>
            </div> -->
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HTTP from "@/server/http";

export default {
  name: "Login",
  data() {
    // const validateUsername = (rule, value, callback) => {
    //   if (!validUsername(value)) {
    //     callback(new Error("请输入用户名"));
    //   } else {
    //     callback();
    //   }
    // };
    // const validatePassword = (rule, value, callback) => {
    //   if (value.length < 6) {
    //     callback(new Error("请输入不少于6位数的密码"));
    //   } else {
    //     callback();
    //   }
    // };
    return {
      loginForm: {
        username: "admin",
        password: "admin123",
      },
      loginRules: {
        username: [{ required: true, trigger: "blur" }],
        password: [
          { required: true, trigger: "blur" },
          {
            // min: 6,
            // max: 6,
            message: "密码长度在至少6个字符",
            trigger: "change",
          },
        ],
      },
      loading: false,
      passwordType: "password",
      redirect: undefined,
    };
  },
  watch: {
    $route: {
      handler: function (route) {
        this.redirect = route.query && route.query.redirect;
      },
      immediate: true,
    },
  },
  methods: {
    showPwd() {
      if (this.passwordType === "password") {
        this.passwordType = "";
      } else {
        this.passwordType = "password";
      }
      this.$nextTick(() => {
        this.$refs.password.focus();
      });
    },
      handleLogin() {
        this.$refs.loginForm.validate((valid) => {
          if (valid) {
            this.loading = true;
            this.$store
              .dispatch("user/login", this.loginForm)
              .then(() => {
                // this.$router.push({ path: this.redirect || "/" });
                this.$router.push('/')
                this.loading = false;
              })
              .catch(() => {
                this.loading = false;
              });
          } else {
            console.log("error submit!!");
            return false;
          }
        });
      },
    // handleLogin() {
    //   // let that = this;
    //   this.$refs.loginForm.validate((valid) => {
    //     if (!valid) return this.$message.warning("账号密码错误");

    //     let url = "/login";
    //     let data = {
    //       username: this.loginForm.username,
    //       password: this.loginForm.password,
    //     };
    //     HTTP.post(url, data, (res) => {
    //       if (res.code !== "0") return this.$message.warning("账号密码错误");
    //       window.sessionStorage.setItem("token", res.token);
    //       // if (this.checked == true) {
    //       //   sessionStorage.setItem("username", this.loginform.username);
    //       //   sessionStorage.setItem("password", this.loginform.password);
    //       // }
    //       this.$router.push("/");
    //     });
    //   });
    // },
  },
};
</script>

<style lang="scss">
$bg: #283443;
$light_gray: #fff;
$cursor: #fff;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}

/* reset element-ui css */
.login-container {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;

    input {
      background: transparent;
      border: 0px;
      -webkit-appearance: none;
      border-radius: 0px;
      padding: 12px 5px 12px 15px;
      color: $light_gray;
      height: 47px;
      caret-color: $cursor;

      &:-webkit-autofill {
        box-shadow: 0 0 0px 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }

  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}
</style>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;

.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;

  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;
  }

  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }

  .show-pwd {
    position: absolute;
    // right: 10px;
    // top: 7px;
    padding: 10px 60px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}
.bg-con {
  background-color: #1a2234;
  .bg-box {
    display: flex;
    .left-con {
      margin: 10px 20px;
      width: 40%;
      height: 98vh;
      z-index: 33;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .login-box {
    margin: 0 230px;
    width: 450px;
    height: 450px;
    border-radius: 6px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    p {
      color: #b1cffc;
      font-size: 36px;
      line-height: 0px;
      font-weight: 600;
      text-align: center;
      text-shadow: 0px 0px 5px #0f5dd8;
    }
    .avatar {
      width: 180px;
      height: 180px;
      border: 1px solid #eee;
      border-radius: 50%;
      padding: 10px;
      box-shadow: 0 0 10px #ddd;
      position: absolute;
      left: 50%;
      background-color: #fff;
      transform: translate(-50%, -60%);
      img {
        border-radius: 50%;
        width: 100%;
        height: 100%;
        background-color: #eee;
      }
    }
    .login-form {
      position: absolute;
      bottom: 0;
      width: 100%;
      padding: 10px 20px;
      box-sizing: border-box;
    }
  }
}
.el-button {
  width: 410px;
  text-align: center;
  margin: 30px 0;
  background: linear-gradient(139deg, #1fe5e6 0%, #3f96ce 100%);
}
</style>
