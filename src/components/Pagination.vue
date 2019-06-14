<template>
  <el-pagination background layout="prev, pager, next" :total="total" @current-change="getTableList"></el-pagination>
</template>

<script>
export default {
  name: 'Pagination',
  props: [
    'total'
  ],
  methods: {
    getTableList () {
      this.$parent.getTableList()
    }
  }

}
</script>

<style scoped>

</style>
