<template>
  <div class="col-md-8">
    <table class="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Producto</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Precio</th>
                <th scope="col">Importe</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) of carritodetalle" :key="index">
                <th scope="row">{{item.prodid}}</th>
                <td>{{item.producto}}</td>
                <td>{{item.cantidad}}</td>
                <td>{{item.precio}}</td>
                <td>{{item.importe}}</td>
            </tr>
        </tbody>
    </table>
    <div class="col-md-12 text-center p-3">
        
        <button class="btn btn-danger m-3">Cancelo la compra</button>
        <button class="btn btn-light m-3"> Humm creo que me falto algo</button>
        <button class="btn btn-success m-3"> Listo Compro !</button>
        
    </div>
  </div>
</template>

<script>

export default {
    name:'CarritoComponent',
    data(){
        return{
            carritodetalle:Object,
            
        }    
    },
    created(){
            this.carritodetalle=JSON.parse(localStorage.getItem('items'))
          },

}
</script>

<style>

</style>