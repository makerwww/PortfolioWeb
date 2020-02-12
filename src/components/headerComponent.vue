<template>
    <header>
        <h1>{{head}}</h1>
        <div @click="burgerClick" class="cross-burger">
			<div class="line-block"></div>
			<div class="line-block"></div>
			<div class="line-block"></div>
		</div>
    </header>
</template>

<script>
import { eventEmitter } from '../main';

export default {
    name: 'headerComponent',
    props: ['head'],
    data() {
        return {
            burgerState: false,
            line: document.querySelectorAll('.line-block'), 
        }
    },
    methods: {
        burgerClick(event){
            if(!event.currentTarget.classList.contains('active')){
                this.showMenu(event);  
            } else {
                this.hideMenu(event);
            }
        },
        hideMenu(e){
            this.line[0].classList.remove('line-block-new-pos') 
            this.line[2].classList.remove('line-block-new-pos-2') 
            setTimeout(function(){
                this.line[1].style.width = '75%' 
            },100) 	
            e.currentTarget.classList.remove('active');
            this.burgerState = !this.burgerState;
            eventEmitter.$emit('burgerChanged', this.burgerState);
        },
        showMenu(e) {
            e.currentTarget.classList.add('active');
            this.burgerState = !this.burgerState;
            eventEmitter.$emit('burgerChanged', this.burgerState)
            this.line[1].style.width = '0px';
            setTimeout(() => {
                this.line[0].classList.add('line-block-new-pos');
                this.line[2].classList.add('line-block-new-pos-2');
            },100)
        }
    },
    computed: {
        
    }
    
}
</script>

<style lang="sass">
    header
        display: flex
        width: 100%
        height: 80px
        align-items: center
        justify-content: center
        position: relative
        background-color: #FFF
        h1 
            font-size: 1.7rem
            max-width: 1200px
            color: #333
            margin: 0 auto
            text-align: center
        &:after
            content: ""
            display: block
            position: absolute
            border: #FFF 25px solid
            border-left-color: transparent
            border-top-color: transparent
            transform: rotate(45deg)
            top: 62%
    .cross-burger
        display: flex
        position: absolute
        top: 80px
        width: 30px 
        height: 15px
        justify-content: space-around
        align-items: center
        flex-flow: column
        z-index: 100
        cursor: pointer
        transition: 0.5s

    .line-block
        width: 75%
        height: 3px
        background-color: black
        border-radius: 5px
        transition: 0.3s 

    .line-block-new-pos
        margin-top: 0px 
        transform: rotate(45deg)
    
    .line-block-new-pos-2
        margin-top: -30px
        transform: rotate(-45deg) 
    
</style>