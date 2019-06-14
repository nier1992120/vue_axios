<template>
  <div class="block">
    <el-button @click="dateSearch">搜索</el-button>
    <el-date-picker v-model="value1" type="datetime" placeholder="选择日期时间"></el-date-picker>

    <el-date-picker v-model="value3" type="datetime" placeholder="选择日期时间" default-time="12:00:00"></el-date-picker>

    <el-date-picker v-model="value2" type="datetime" placeholder="选择日期时间" align="right" :picker-options="pickerOptions"></el-date-picker>

  </div>

</template>

<script>
export default {
  name: 'TimePicker',
  data () {
    return {
      pickerOptions: {
        shortcuts: [
          {
            text: '今天',
            onClick (picker) {
              picker.$emit('pick', new Date())
            }
          }, {
            text: '昨天',
            onClick (picker) {
              const date = new Date()
              date.setTime(date.getTime() - 3600 * 1000 * 24)
              picker.$emit('pick', date)
            }
          }, {
            text: '一周前',
            onClick (picker) {
              const date = new Date()
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
              picker.$emit('pick', date)
            }
          }]
      },
      value1: '',
      value2: '',
      value3: ''
    }
  },
  methods: {
    dateSearch () {
      console.log(this.value1)
      console.log(this.value2)
      console.log(this.value3)
    }
  }

}
</script>

<style scoped>

</style>
