<template>
   <div>
       <ul>
        <router-link to="/">
            <li>Home</li>   
        </router-link>
         <router-link to="/poesia">
            <li>Poesia</li>   
        </router-link>
         <router-link to="/prosa">
            <li>Prosa</li>   
        </router-link>
         <router-link to="/musica">
            <li>Musica Erudita</li>   
        </router-link>
          <router-link to="/contato">
            <li>Contato</li>   
        </router-link>
       </ul>
   </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    div{
        width:100%;
        height: 80px;
        background:gray;
    }
    ul{
        display:flex;
        justify-content:space-around;
        align-items: center;
        padding:20px;
    }
    li{
        font-family:monospace;
        color:white;
        font-size:25px;
        cursor:pointer;
    }

</style>
      