<template>
  <el-container>
      <el-header>
        <Header></Header>
      </el-header>
<!--      <el-aside>-->
<!--        <Sidebar></Sidebar>-->
<!--      </el-aside>-->
<!--      <el-main>-->
<!--        <Contents></Contents>-->
<!--      </el-main>-->
      <el-footer>
        <Footer></Footer>
      </el-footer>
    </el-container>
</template>

<script>
import Header from './Header'
import Sidebar from './Sidebar'
import Contents from './Timeline'
import Footer from './Footer'
export default {
  name: 'Layout',
  components: {Header, Sidebar, Contents, Footer}
}
</script>

<style scoped>

</style>
