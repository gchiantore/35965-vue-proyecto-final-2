<template>
    <div class="container">
        <div v-if="errores.length!=0" class="alert alert-danger">
            {{showErrors}}
        </div>
        <div class="row">
            <div class="col-md-3"></div>
            <div class="col-md-6">
                <form class="row g-3 needs-validation" id="productform" action="" @submit.prevent="formValidate">
                    <div class="col-md-12">
                        <label for="producto" class="form-label">Nombre del Producto</label>
                        <input v-model="objproducto.name" type="text" class="form-control" id="producto" value="">
                    </div>
                    <div class="col-md-12">
                        <label for="descrip" class="form-label">Descripcion del Producto</label>
                        <input v-model="objproducto.desc" type="text" class="form-control" id="descrip" value="">
                    </div>
                    <div class="col-md-12">
                        <label for="precio" class="form-label">precio del Producto</label>
                        <input v-model="objproducto.precio" type="text" class="form-control" id="precio" value="">
                    </div>
                    
                    <h5>Activo</h5>
                    <div class="row">
                        <div class="form-check col-md-4">
                            <input v-model="objproducto.activo" class="form-check-input" type="radio" name="flexRadioDefault" id="afirmativo" value="true" checked>
                            <label class="form-check-label" for="avirmativo">
                                SI
                            </label>
                        </div>
                            <div class="form-check col-md-4">
                            <input v-model="objproducto.activo" class="form-check-input" type="radio" name="flexRadioDefault" id="negativo" value="false">
                            <label class="form-check-label" for="negativo">
                                NO
                            </label>
                        </div>
                    </div>
                    <div class="col-12">
                        <button @click="btnCancelar()" class="btn btn-danger" type="cancel">Volver</button>
                        <button class="btn btn-success" type="submit">{{boton}}</button>
                    </div>
                </form>
                
            </div>
                <div class="col-md-3"></div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name:'ProductForm',
    props:{
        boton:String,
        modo:Number,
        produ:String
    },
    data() {
        return {
            producto:Object,
            objproducto:{
                name:'',
                desc:'',
                precio:0,
                activo:false,
            },
            listaproducto:Object,
            errores:[]
        }
    },    
    created(){
        if (this.modo==2){    
            const URLAPI="https://639e8f4e3542a261305d989b.mockapi.io/productos";
            axios.get(URLAPI)
                .then(response => response.data)
                .then(data =>{
                    this.listaproducto = data
                    this.producto=this.listaproducto.find(producto => producto.id === this.produ)
                    this.objproducto.name=this.producto.name
                    this.objproducto.desc=this.producto.desc
                    this.objproducto.precio=this.producto.precio
                    this.objproducto.activo=this.producto.activo
                })
        }        
    },            
    methods: {
        formValidate() {
            if(this.objproducto.name && this.objproducto.desc && this.objproducto.precio){
                if(this.modo==2){
                    setTimeout(() => {
                        const URLPUT="https://639e8f4e3542a261305d989b.mockapi.io/productos/"+this.produ
                        axios
                            .put(URLPUT, this.objproducto)
                            .then((resp) => {
                                this.getProducts();
                                console.log(resp)
                                });
                        this.$swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'El producto fue modificado con exito',
                            showConfirmButton: false,
                            timer: 1500
                            })      
                        this.$emit("enviar",false);
                        document.getElementById("productform").reset();
                        Object.assign(this.$data, this.$options.data());
                    }, 1000);
                }else{
                    setTimeout(() => {
                        const URLPOST="https://639e8f4e3542a261305d989b.mockapi.io/productos"
                        axios
                            .post(URLPOST, this.objproducto)
                            .then((resp) => {
                                this.getProducts();
                                console.log(resp)
                                });
                        console.log (this.objproducto)  
                        this.$swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'El producto fue agregado con exito',
                            showConfirmButton: false,
                            timer: 1500
                            })      
                        this.$emit("enviar",false);
                        document.getElementById("productform").reset();
                        Object.assign(this.$data, this.$options.data());
                    }, 1000);
                }
                return true;
            }
            if(!this.objproducto.name){
                this.errores.push("El nombre del producto es necesario ");
            }
            if(!this.objproducto.desc){
                this.errores.push("Debes seleccionar un Tama??o");
            }
            if(!this.objproducto.precio){
                this.errores.push("Debes elegir un tipo de Ridding")
            } 
            setTimeout(() => {
                this.errores=[];
            }, 3000);
        },
        btnCancelar(){
            this.$emit('enviar',false)
        },
        getProducts(){
          const URLAPI="https://639e8f4e3542a261305d989b.mockapi.io/productos";
          axios.get(URLAPI)
               .then(response => response.data)
               .then(data =>{
                  this.listaproducto = data
               })
        }
        
    },
    computed: {
        showErrors() {
            let formErrores=this.errores.join(" <---> ");
            return formErrores;
        }
    },
}
</script>

<style>

</style>