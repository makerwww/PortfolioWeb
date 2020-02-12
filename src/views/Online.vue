<template>
    <div>
        <HeaderComponent head="Проекты в сети"></HeaderComponent>
        <MenuComponent></MenuComponent>
        <div class="projects">
            <div class="projects__item" v-for="item in onlineProj" :key="item.id">
                
                <div class="item__info"></div>
            </div>
        </div>
        <FooterComponent></FooterComponent>
    </div>
</template>

<script>
import HeaderComponent from '@/components/headerComponent'
import FooterComponent  from '@/components/footerComponent'
import MenuComponent  from '@/components/menuComponent'
import onlineProj from '@/assets/online.json'

export default {
    name: 'online',
    components: {
        HeaderComponent,
        MenuComponent,
        FooterComponent,
    },
    data() {
        return {
            onlineProj,
        }
    },
    methods: {
        getJson() {
            window.console.log(onlineProj.vibermed)
        },
    },
    mounted(){
    },
}
</script>

<style lang="sass">
    .projects 
        display: flex 
        max-width: 1200px
        min-height: 600px
        margin: 0 auto
        flex-flow: column

        &__item
            width: 1200px
            height: 500px
            display: flex 
            background: lightgreen
            margin: 15px 0
    img 
        width: 200px
        height: 400px

</style>