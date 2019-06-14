<template>
  <div>
    <el-header style="line-height: 50px">用户登录界面</el-header>
    <el-form>
      <el-form-item>
        <el-input v-model="username" placeholder="请输入用户名" clearable></el-input>
      </el-form-item>

      <el-form-item>
        <el-input v-model="pwd" placeholder="请输入密码" clearable show-password></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="login">登录</el-button>
        <router-link to="./register"><span>还没有新账户？去注册</span></router-link>
      </el-form-item>
    </el-form>
  </div>

</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      username: '',
      pwd: ''
    }
  },
  methods: {
    login () {
      this.$router.push({path: './'})
    }
  }
}
</script>

<style scoped>

</style>
