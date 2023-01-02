<template>
  <div class="container-fluid header">
   <div class="container">
      <div class="header-div">
        <img class="header-img" src="../assets/logo-app.png" alt="">
        <div class="header-derecho">
          <UserLoggedComponent @enviar="Salir($event)" :userImg="imagen" :userName="nombre"/> 
        </div>
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
      tipo:Boolean
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
    .header-derecho{
      display:flex;
      flex-direction: row;
      align-items: center;
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