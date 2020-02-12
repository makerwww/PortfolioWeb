<template>
    <div>
        <HeaderComponent head="Обо мне"></HeaderComponent>
        <MenuComponent></MenuComponent>
        <AboutMeComponent></AboutMeComponent>
        <FooterComponent></FooterComponent>
    </div>
</template>

<script>
import HeaderComponent from '@/components/headerComponent'
import FooterComponent  from '@/components/footerComponent'
import MenuComponent  from '@/components/menuComponent'
import AboutMeComponent from '@/components/aboutMeComponent'

export default {
    name: 'about',
    components: {
        HeaderComponent,
        FooterComponent,
        MenuComponent,
        AboutMeComponent,
    }
}
</script>