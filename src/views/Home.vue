<template>
  <div class="home">
    <Header></Header>
    <Nav></Nav>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/header'
import Nav from '@/components/nav'
import Footer from '@/components/footer'

export default {
  name: 'home',
  components: {
    Header,
    Nav,
    Footer,
  }
}
</script>
