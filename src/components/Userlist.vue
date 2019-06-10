<template>
    <div>
      <table class="userlist" border="1" cellpadding="0" cellspacing="0">
        <tr>
          <td>Index</td>
          <td>Username</td>
          <td>pwd</td>
          <td>actions</td>
        </tr>
        <tr>
          <td>1</td>
          <td>nier</td>
          <td>123456</td>
          <td class="user_actions">
            <span @click="adduser">add</span>
            <span @click="edituser">edit</span>
            <span @click="deluser">del</span>
          </td>
        </tr>
      </table>
    </div>
</template>

<script>
export default {
  name: 'Userlist'
}
</script>

<style scoped>
.userlist {
  width: 100%;
  border: 1px solid #ddd;
  margin: 0 auto;
}
.userlist tr{
  line-height: 30px;
}
.userlist tr td {
  padding: 10px;
}
.user_actions span{
  font-size: 14px;
  cursor: pointer;
}
.user_actions span:hover{
  text-decoration: underline;
  font-size: 16px;
  color: blue;
}
</style>
