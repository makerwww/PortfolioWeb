<template>
    <footer>
        <p>
           &copy;Васильев Игорь Дмитриевич 2020
        </p>
    </footer>
</template>

<script>
export default {
    name: 'footerComponent'
}
</script>

<style lang="sass">
    footer
        display: flex
        width: 100%
        height: 30px
        color: #000
        position: relative
        bottom: 0
        left: 0
        justify-content: center
        p 
            display: flex
            align-items: center
            width: 90%
            margin: 0 auto
        &:before
            content: ""
            display: block
            position: absolute
            border: #FFF 15px solid
            border-right-color: transparent
            border-bottom-color: transparent
            transform: rotate(45deg)
            bottom: 10px
            margin: 0 auto



</style>