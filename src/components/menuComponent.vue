<template>
    <transition name="slide">
        <div class="slide-menu">
                <div class="links">
                    <router-link to="/" @click="hideMenu">Главная</router-link>
                    <router-link to="/about">Обо мне</router-link>
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
    links: document.querySelectorAll('a'),
    methods: {
    },
    created() {
        eventEmitter.$on('burgerChanged' , (burgerState) =>{
            if(!burgerState){
                document.querySelector('.slide-menu').style.top = '-100%';
            } else {
                document.querySelector('.slide-menu').style.top = '0';
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
        top: -100%
        left: 0
        z-index: 10
        width: 100%
        height: 100%
        background-color: rgba(255,255,255,0.8)
        transition: 0.3s all
            
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
    .slide-enter-active
        animation: slideDown 1s linear
    .slide-leave-active
        animation: slideUp 1s linear

    @keyframes slideDown 
        to
            top: 0
    @keyframes slideUp
        to 
            top: -100%


        
    
    
</style>