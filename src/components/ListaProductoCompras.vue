<template>
    <div>
        <div class="row row-cols-1 row-cols-md-4 g-4">    
            <div v-for="(product, i) of products" :key="i" class="col">
                <div class="card h-100 w-100">
                    <img :src="product.imagen" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">{{product.name}}</h5>
                        <p class="card-text">{{product.precio}}</p>
                        <button @click="agregarCarrito(product.id)" class="btn btn-success"><i class="bi bi-cart"></i>  Agregar</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name:'pruebaComponente',
    data(){
        return{
             products:Object,
             prod:Object,
             itemcarrito:{
                producto:'',
                cantidad:'',
                avatar:'',
                precio:0,
                importe:0
             }
        }
    },

    created(){
            const URLAPIPRODUCTOS="https://639e8f4e3542a261305d989b.mockapi.io/productos";
            axios.get(URLAPIPRODUCTOS)
                .then(response => response.data)
                .then(data =>{
                    this.products = data
                })  
     },
     methods:{
        agregarCarrito(id)
        {
            this.prod=this.products.find(prod => prod.id === id)
            this.itemcarrito.producto=this.prod.name
            this.itemcarrito.cantidad=1
            this.itemcarrito.precio=this.prod.precio
            this.itemcarrito.avatar=this.prod.imagen
            this.itemcarrito.importe=this.prod.precio * 1
            console.log(this.itemcarrito)
            const URLPOST="https://639e8f4e3542a261305d989b.mockapi.io/carritodetalle"
            axios
                .post(URLPOST, this.itemcarrito)
            console.log (this.itemcarrito)  
            this.$swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'El producto fue agregado con exito',
                showConfirmButton: false,
                timer: 1500
                }) 
        },
    }
}
</script>

<style>

</style>