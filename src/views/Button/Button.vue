<template>
    <button @click="onClick()" :style="{background: color}" class="btn">
        {{ text }}</button>
</template>

<script>
export default {
    name: 'Button',
    props: {
        text: String,
        color: String
    },
    methods:{
        onClick(){
            console.log('click')
        },
    }
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Mitr:wght@300;500&family=Prompt:wght@200;300&display=swap");
    button{
        border-radius: 16px;
        color:white;
        background-color: #CC9833;
        font-size: 18px;
        font-family: 'Mitr', sans-serif;
        font-weight: 300;
    }
</style>