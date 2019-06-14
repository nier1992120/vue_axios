<template>
    <div v-for="item in items">
      <img :src="item.img">
      <p>{{item.title}}</p>
      <label>{{item.author}}</label>
      <p>{{item.desc}}</p>
      <label>{{item.date}}</label>
    </div>
</template>

<script>
export default {
  name: 'NewsList',
  data () {
    return {
      items: []
    }
  },
  methods: {
    showItems () {
      this.$axios.post('item/itemList')
        .then(res => {
          this.items = res.data
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  created () {
    this.showItems()
  }

}
</script>

<style scoped>

</style>
