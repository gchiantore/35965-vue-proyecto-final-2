<template>
  <div class="col-md-8">
    <table class="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) of carritodetalle" :key="index">
                <th scope="row">{{item.id}}</th>
                <td>{{item.producto}}</td>
                <td>{{item.cantidad}}</td>
                <td>{{item.precio}}</td>
                <td>{{item.importe}}</td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name:'CarritoComponent',
    data(){
        return{
            carritodetalle:Object,
            
        }    
    },
    created(){
            const URLAPIPRODUCTOS="https://639e8f4e3542a261305d989b.mockapi.io/carritodetalle";
            axios.get(URLAPIPRODUCTOS)
                .then(response => response.data)
                .then(data =>{
                    this.carritodetalle = data
                })  
          },

}
</script>

<style>

</style>