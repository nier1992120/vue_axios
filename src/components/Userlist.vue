<template>
  <div>
    <el-table :data="tableData" style="width: 100%" stripe border>
      <el-table-column prop="date" label="日期" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)" class="el-icon-edit">编辑</el-button>
        <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)" class="el-icon-remove">删除</el-button>
      </template>
    </el-table-column>
    </el-table>
    <Pagination :total = "total"></Pagination>
  </div>

</template>

<script>
import Pagination from './Pagination'
export default {
  name: 'UserList',
  components: {Pagination},
  data () {
    return {
      total: 10,
      tableData: []
    }
  },
  methods: {
    getTableList () {
      this.$axios.get('item/tableList', {
        params: {
          pageSize: 15,
          currentPage: 1
        }
      })
        .then(res => {
          this.tableData = res.data.tableList
          this.total = res.data.total
        })
        .catch(error => {
          console.log(error)
        })
    }

  },
  created () {
    this.getTableList()
  }
}
</script>

<style scoped>

</style>
