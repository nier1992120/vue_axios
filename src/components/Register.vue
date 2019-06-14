<template>
  <div>
    <el-header style="line-height: 50px">用户注册界面</el-header>
      <el-form>
        <el-form-item>
          <el-input v-model="username" placeholder="请输入名称" clearable></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="pwd" placeholder="请输入密码" clearable show-password></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="rpwd" placeholder="请再次输入密码" clearable show-password></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="register">注册</el-button>
          <router-link to="./login"><span>已有账户，去登录</span></router-link>
        </el-form-item>
      </el-form>
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
    register () {
      this.$router.push({path: './login'})
    }
  }
}
</script>

<style scoped>

</style>
