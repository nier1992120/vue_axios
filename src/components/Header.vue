<template>
    <div>
      <ul class="header_nav">
        <router-link to="/"><li>Home</li></router-link>
        <router-link to="/about"><li>About us</li></router-link>
        <router-link to="/contact"><li>Contact</li></router-link>
        <router-link to=""><li @mouseenter="enter" @mouseleave="leave" id="usercenter">User</li></router-link>
      </ul>
      <ul class="user" v-if="isshow">
        <router-link to="/baseinfo"><li>baseinfo</li></router-link>
        <router-link to="/setting"><li>setting</li></router-link>
        <router-link to="/login"><li>Loginout</li></router-link>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'Header',
  el: '#usercenter',
  data () {
    return {
      isshow: false
    }
  },
  methods: {
    enter () {
      this.isshow = true
    },
    leave () {
      this.isshow = false
    }
  }

}
</script>

<style scoped>
.header_nav {
  background: black;
}
.header_nav li{
  list-style: none;
  text-decoration: none;
  display: inline-grid;
  padding: 30px 40px;
  color: #fff;
  font-size: 24px;
}
.user {
  width: 100px;
  border: 1px solid #ccc;
  text-align: left;
  padding: 0;
  margin: 0;
  position: absolute;
  top: 104px;
  right: 350px;
  background: #fff;
}

.user li {
  padding: 20px;
  list-style: none;
  font-size: 18px;
  color: #333;
  line-height: 30px;
  border-bottom: 1px solid #ccc;
  cursor: pointer;

  /*display: none;*/
}
.user li:hover {
  opacity: 0.8;
}
.user li:active {
  opacity: 0.5;
}
.user:last-child(li){
  border-bottom: 0;
}
</style>
