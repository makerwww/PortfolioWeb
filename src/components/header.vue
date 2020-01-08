<template>
    <header>
        <h1>Портфолио работ</h1>
    </header>
</template>

<script>
export default {
    name: 'header',
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
            border: #FFF 20px solid
            border-left-color: transparent
            border-top-color: transparent
            transform: rotate(45deg)
            top: 70%



</style>