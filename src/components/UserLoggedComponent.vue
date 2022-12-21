<template>
  <div class="contenedorUser">
    <img class="avatar" :src="userImg" alt="">
    <div>
        <p class="m-2">{{userName}}</p>
    </div>
    <div>
        <button @click="logOut()" class="btn btn-success">LogOut</button>
    </div>    
  </div>
</template>

<script>
export default {
    name:'UserLoggedComponent',
    props:{
        userImg:String,
        userName:String,
    },
    data() {
        return {
            out:2,
        }
    },    
    methods:{
        logOut(){
            this.out=0
            this.$router.push('/');
            this.$emit("enviar",this.out);
        }
    },
}
</script>

<style scoped>
    .contenedorUser{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        max-width: 350px;
        padding-top: 10px;
   
    }
    .avatar{
        height: 40px;
        width: 40px;
        border-radius: 50%;
    }
</style>