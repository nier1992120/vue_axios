<template>
 <div class="waterFlowWrap">
   <div v-for="a in imageData" ><img :src="a.image"></div>
 </div>
</template>

<script>
export default {
  name: 'Waterflow',
  data () {
    return {
      imageData: []
    }
  },
  methods: {
    getImageData: function () {
      this.$axios.get('item/getImages')
        .then(res => {
          console.log(res)
          this.imageData = res.data
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  created () {
    this.getImageData()
  }
}
</script>

<style scoped>
.waterFlowWrap {
 column-width: 250px;
  -webkit-column-width: 250px;
  -moz-column-width: 250px;
  column-gap: 5px;
  -webkit-column-gap: 5px;
  -moz-column-gap: 5px;
}
.waterFlowWrap div {
  width: 250px;
  overflow: hidden;
  margin: 5px 0;
}
</style>
