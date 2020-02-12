<template>
    <div>
        <HeaderComponent head="Проекты в сети"></HeaderComponent>
        <MenuComponent></MenuComponent>
        <FooterComponent></FooterComponent>
    </div>
</template>

<script>
import HeaderComponent from '@/components/headerComponent'
import FooterComponent  from '@/components/footerComponent'
import MenuComponent  from '@/components/menuComponent'

export default {
    name: 'online',
    components: {
        HeaderComponent,
        MenuComponent,
        FooterComponent,
    }
}
</script>