<template>
  <el-menu>
     <el-submenu index="1">
       <template slot="title">
         <i class="el-icon-medal"></i>
         <span>Nav1</span>
       </template>
       <el-menu-item-group>
         <el-menu-item index="1-1">Options1</el-menu-item>
         <el-menu-item index="1-2">Options2</el-menu-item>
       </el-menu-item-group>
     </el-submenu>

     <el-submenu index="2">
       <template slot="title">
         <i class="el-icon-menu"></i>
         <span>Nav2</span>
       </template>
       <el-menu-item-group>
         <el-menu-item index="2-1">Options1</el-menu-item>
         <el-menu-item index="2-2">Options2</el-menu-item>
       </el-menu-item-group>
     </el-submenu>
   </el-menu>
</template>

<script>
export default {
  name: 'Sidebar'
}
</script>

<style scoped>

</style>
