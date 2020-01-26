<template>
    <transition name="slide">
    <div class="slide-menu">
            <div class="links">
                <router-link to="/">Главная</router-link>
                <router-link to="/">Обо мне</router-link>
                <router-link to="/study">Учебные проекты</router-link>
                <router-link to="/online">Проекты в сети</router-link>
            </div>
    </div>
    </transition>
</template>

<script>
import {eventEmitter} from '../main';

export default {
    name: 'menuComponent',
    methods: {

    },
    created() {
        eventEmitter.$on('burgerChanged' , (burgerState) =>{
            if(!burgerState){
                // document.querySelector('.slide-menu').style.display = 'none';
            } else {
                // document.querySelector('.slide-menu').style.display = 'flex';
                document.querySelector('.slide-menu').slideDown(400)
                }

        })
    },
}
</script>

<style lang="sass">
    .slide-menu
        display: flex
        justify-content: center
        position: absolute
        top: 0px
        left: 0px
        z-index: 10
        width: 100%
        height: 100%
        background-color: rgba(255,255,255,0.8)
        display: none
    .links 
        display: flex
        flex-flow: column
        margin: 200px auto
        a 
            text-decoration: none
            font-size: 30px
            margin: 30px auto
            color: #000F75
            &:hover 
                color: #BD3C4E
        
    
    
</style>