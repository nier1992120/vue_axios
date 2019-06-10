<template>
  <div class="user_panel">
    <h1>新用户注册界面</h1>
    <div class="from_ctrl">
      <span>username:</span>
      <input v-model="username" required/>
    </div>
    <div class="from_ctrl">
      <span>pwd:</span>
      <input v-model="pwd" required/>
    <div class="from_ctrl">
      <span>rpwd:</span>
      <input v-model="rpwd" required/>
    </div>
  </div>
    <div class="form_ctrl">
      <router-link to="/login"><span>已有账号去登录</span></router-link>
     <span @click="register">注册</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      username: '',
      pwd: '',
      rpwd: ''
    }
  },
  methods: {
    register: function () {
      alert(this.username)
    }
  }
}
</script>

<style scoped>
.user_panel {
  border: 1px solid #ccc;
  width: 500px;
  height: 300px;
  border-radius: 5px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -250px;
  margin-top: -150px;
}
  .from_ctrl {
    margin:20px auto;
  }

  .from_ctrl span {
    text-align: right;
    display: inline-grid;
    width:80px;
  }
  .from_ctrl input {
    text-indent: 10px;
    line-height: 30px;
    border-radius: 5px;
    border: 1px solid #ddd;
  }
</style>
