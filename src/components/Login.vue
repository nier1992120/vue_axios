<template>
  <div class="user_panel">
    <h1>用户登录界面</h1>
    <form>
      <div class="from_ctrl">
        <span>username:</span>
        <input v-model="username" required/>
      </div>
      <div class="from_ctrl">
        <span>pwd:</span>
        <input v-model="pwd" required/>
      </div>
      <div class="form_ctrl">
        <router-link to="/"><span class="tiny" @click="login($event)">登录</span></router-link>&nbsp;&nbsp;&nbsp;&nbsp;
        <router-link to="/register"><span class="tiny">还没有账户？去注册</span></router-link>
      </div>
    </form>
  </div>

</template>

<script>
export default {
  el: 'form',
  name: 'Login',
  data () {
    return {
      username: '',
      pwd: ''
    }
  },
  methods: {
    login: function (event) {
      event.preventDefault()
      let formData = new FormData()
      formData.append('username', this.username)
      formData.append('pwd', this.pwd)
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
