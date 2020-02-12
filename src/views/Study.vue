<template>
    <div>
        <HeaderComponent head="Учебные проекты"></HeaderComponent>
        <MenuComponent></MenuComponent>
        <FooterComponent></FooterComponent>
    </div>
</template>

<script>
import HeaderComponent from '@/components/headerComponent'
import FooterComponent  from '@/components/footerComponent'
import MenuComponent  from '@/components/menuComponent'

export default {
    name: 'study',
    components: {
        HeaderComponent,
        MenuComponent,
        FooterComponent,
    }
}
</script>