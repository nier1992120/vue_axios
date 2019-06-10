<template>
  <div>
    <Header></Header>
    <Userlist></Userlist>
  </div>
</template>

<script>
import Header from './Header'
import Userlist from './Userlist'
export default {
  name: 'HelloWHeaorld',
  components: {Userlist, Header},
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
