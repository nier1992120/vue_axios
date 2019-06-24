<template>
  <el-tabs v-model="activeName">
      <el-tab-pane label="Home" name="first"><Carousel></Carousel></el-tab-pane>
      <el-tab-pane label="Timeline" name="second"><Timeline></Timeline></el-tab-pane>
      <el-tab-pane label="Table" name="fourth"><Tables></Tables></el-tab-pane>
      <el-tab-pane label="DatePicker" name="fifth"><DatePicker></DatePicker></el-tab-pane>
      <el-tab-pane label="Echarts" name="sixth"><Echarts></Echarts></el-tab-pane>
      <el-tab-pane label="Waterflow" name="seventh"><Waterflow></Waterflow></el-tab-pane>
    </el-tabs>
</template>

<script>
import Carousel from './Carousel'
import Timeline from './Timeline'
import Tables from './Tables'
import DatePicker from './DatePicker'
import Echarts from './Echarts'
import Waterflow from './Waterflow'

export default {
  name: 'Header',
  components: {Waterflow, Echarts, DatePicker, Tables, Timeline, Carousel},
  data () {
    return {
      activeName: 'first'
    }
  }
}
</script>

<style scoped>

</style>
