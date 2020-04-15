<template>
  <div>
   
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
  
<style scoped> 
 
 div{
   height:100vh;
   width:100%;
  background:url("https://www.superprof.com.br/blog/wp-content/uploads/2016/11/arte-e-os-numeros.jpg");
  background-repeat:no-repeat;
   background-position: cover center center;
    background-size: 100% 100vh;

}

</style>