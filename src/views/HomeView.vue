<template>
   <div class="container content">
         <div v-if="paso===true" class="titulo">
            <h1>Dashboard de Administrador</h1>
            <DashboardAdmComponent />
         </div>
         <div v-else class="titulo">
            <h1>Dashboard de Cliente</h1>
         </div>
   </div>
</template>

<script>
import DashboardAdmComponent from '@/components/DashboardAdmComponent.vue'

export default {
  name: 'HomeView',
  props:{
    paso:Boolean,
  },
    
  components:{
    DashboardAdmComponent,

  } 
}
</script>

<style scoped>
  .content{
   padding: 15px;
   display: flex;
   flex-direction: row;
   column-gap: 15px;
   row-gap: 15px;
   justify-content: space-evenly;
   flex-wrap: wrap;
   background-color: white;
   margin-bottom: 0px;
   box-shadow: 5px 5px 10px #888888;
  }
  .titulo{
   width: 100%;
   text-align: center;
   padding: 30px;
  }
</style>