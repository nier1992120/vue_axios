export default {
  showMessage (msg, type) {
    this.$message(
      {
        showClose: true,
        message: msg,
        type: type
      }
    )
  },
  showmsg () {
    alert('aa')
  }
}
