<template>
  <div>
    <el-table :data="userList" style="width: 100%" stripe border>
      <el-table-column prop="id" label="序列" width="180"></el-table-column>
      <el-table-column prop="username" label="姓名" width="180"></el-table-column>
      <el-table-column prop="age" label="年龄"></el-table-column>
      <el-table-column prop="phone" label="电话"></el-table-column>
      <el-table-column prop="mail" label="邮箱"></el-table-column>

      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index,scope.row)" class="el-icon-edit">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)" class="el-icon-remove">删除</el-button>
        </template>
     </el-table-column>
    </el-table>
<!--    编辑-->
    <el-dialog title="编辑" :visible.sync="dialogVisible.edit" width="30%">
      <el-form>
        <el-form-item>
          <el-input v-model="row.id"  disabled></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="row.username" placeholder="请输入名称" clearable></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="row.age" placeholder="请输入年龄" clearable></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="row.phone" placeholder="请输入电话" clearable></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="row.mail" placeholder="请输入邮箱" clearable></el-input>
        </el-form-item>

      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible.edit = false">取 消</el-button>
        <el-button type="primary" @click="editUserInfo()">确 定</el-button>
      </span>
    </el-dialog>

    <!--    删除-->
    <el-dialog title="删除" :visible.sync="dialogVisible.delete" width="30%" center>
      <el-form>
        <span>确定删除这条信息吗？</span>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible.delete = false">取 消</el-button>
        <el-button type="primary" @click="deleteUser()">确 定</el-button>
      </span>
    </el-dialog>

<!--    分页-->
    <Pagination :total = "total"></Pagination>
  </div>

</template>

<script>
import Pagination from './Pagination'
export default {
  name: 'UserList1',
  components: {Pagination},
  data () {
    return {
      total: 10,
      userList: [],
      dialogVisible: {
        edit: false,
        delete: false
      },
      row: {}
    }
  },
  methods: {
    getTableList () {
      this.$axios.get('item/getUserList', {
        params: {
          pageSize: 10,
          currentPage: 1
        }
      })
        .then(res => {
          this.userList = res.data.userList
          this.total = res.data.total
        })
        .catch(error => {
          console.log(error)
        })
    },
    handleEdit (index, row) {
      this.dialogVisible.edit = true
      this.row = JSON.parse(JSON.stringify(row))// 对象深拷贝，防止数据修改同时进行
      this.row.index = index// 初始化
    },
    editUserInfo () {
      this.userList[this.row.index].username = this.row.username // 修改属性值
      this.userList[this.row.index].age = this.row.age
      this.userList[this.row.index].phone = this.row.phone
      this.userList[this.row.index].mail = this.row.mail
      this.dialogVisible.edit = false
    },
    handleDelete (index) {
      this.dialogVisible.delete = true
      this.row.index = index
    },
    deleteUser () {
      this.userList.splice(this.row.index, 1)// 删除或修改数组元素
      this.dialogVisible.delete = false
      // this.common.showMessage('操作成功', 'success')
      // this.common.showmsg()
    }
  },
  created () {
    this.getTableList()
  }
}
</script>

<style scoped>

</style>
