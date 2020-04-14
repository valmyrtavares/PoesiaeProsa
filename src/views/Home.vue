<template>
  <div>
    <h1>Home</h1>
    <p>{{res}}</p>
</div>
</template>


<script>
export default {
name:"Home",
props:["res"],
 created(){
        console.log("Testando Tudo")
        
    }
}
</script>

<style>

</style>