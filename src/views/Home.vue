<template>
  <div class="home">
    <HeaderComponent></HeaderComponent>
    <MenuComponent></MenuComponent>
    <NavComponent></NavComponent>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
import HeaderComponent from '@/components/headerComponent'
import NavComponent  from '@/components/navComponent'
import FooterComponent  from '@/components/footerComponent'
import MenuComponent  from '@/components/menuComponent'

export default {
  name: 'home',
  components: {
    HeaderComponent,
    NavComponent,
    FooterComponent,
    MenuComponent,
  }
}
</script>
