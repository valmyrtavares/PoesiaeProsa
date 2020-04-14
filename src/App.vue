<template>
  <div id="app">
    <Header/>
   <router-view></router-view>
  </div>
</template>

<script>
import Header from "@/components/Header.vue"

export default {
  name: 'App',
  components: {
   Header
  }
}
</script>

<style>
 *{
        margin:0;
        padding: 0;
        font-family:"Avenir", Arial, Helvetica, sans-serif;
    }
  ul{
      list-style: none;
  }
  a{
      text-decoration: none;
  }
        
     
   
     


</style>
