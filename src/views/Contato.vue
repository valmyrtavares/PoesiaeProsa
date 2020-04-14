<template>
<div>
  <h2>Contatos</h2>
<p>{{api}}</p>
<p>{{res}}</p>
</div>
</template>

<script>
import fetchData from '@/mixins/fetchData.js'
export default {
name:"Contato",
props:["res"],
mixins:[fetchData],

            
    created(){
        this.fetchData("/contato");
    }
}
       
       
    
   

</script>

<style>

</style>