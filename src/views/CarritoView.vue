<template>
    <div class="container content">
      <h1 class="titulo">Este es tu carrito</h1>
      <CarritoComponent />
    </div>
</template>

<script>
import CarritoComponent from '@/components/CarritoComponent.vue'

export default {
  name: 'CarritoView',
  props:{
    paso:Boolean,
  },
    
  components:{
    CarritoComponent,

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