<template>
  <div class="container-fluid header">
   <div class="container">
      <div class="header-div">
        <img class="header-img" src="../assets/logo-app.png" alt="">
        <UserLoggedComponent @enviar="Salir($event)" :userImg="imagen" :userName="nombre"/> 
      </div>  
   </div>
  </div>
</template>

<script>
import UserLoggedComponent from './UserLoggedComponent.vue'
export default {
    name: "HeaderComponent",
    components: { 
      UserLoggedComponent,
     },
     props:{
      imagen:String,
      nombre:String,
     },
     methods:{
      Salir(op){
        this.$emit("salir",op);
        },
     }
}
</script>

<style scoped>
    .header{
        background-color: white;
        height: 60px;
    }
    .header-div{
      display:flex;
      flex-direction: row;
      justify-content: space-between;
    }
    .header-img{
      height: 55px;
      width: 150px; 
    }
</style>