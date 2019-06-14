<template>
  <el-tabs v-model="activeName">
      <el-tab-pane label="Home" name="first"><Carousel></Carousel></el-tab-pane>
      <el-tab-pane label="Timeline" name="second"><Timeline></Timeline></el-tab-pane>
      <el-tab-pane label="Table" name="fourth"><Tables></Tables></el-tab-pane>
      <el-tab-pane label="DatePicker" name="fifth"><DatePicker></DatePicker></el-tab-pane>
    </el-tabs>
</template>

<script>
import Carousel from './Carousel'
import Timeline from './Timeline'
import Tables from './Tables'
import DatePicker from './DatePicker'

export default {
  name: 'Header',
  components: {DatePicker, Tables, Timeline, Carousel},
  data () {
    return {
      activeName: 'first'
    }
  }
}
</script>

<style scoped>

</style>
