<template>
    <nav>
        <div class="link-block">
            <router-link to="/">
                <img src="@/assets/study.png" alt="">
                Главная
            </router-link>
            <div class="square-block red">
                <p>
                    Меня зовут<br>
                    <strong class="black">Васильев Игорь</strong>
                </p>
            </div>
            <div class="square-block green">
                <p>
                    Закончил <br>
                    <strong class="black">МГТУ им. Н.Э. Баумана</strong>
                </p>
            </div>
            <router-link to="/online">
                <img src="@/assets/web.png" alt="web">
                Проекты в сети
            </router-link>
            <router-link to="/study">
                <img src="@/assets/study.png" alt="study">
                Учебные проекты
            </router-link>
            <div class="square-block grey">
                <p>
                    Хочу заниматься <br>
                    <strong class="black">Front-end разработкой</strong> 
                </p>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'navComponent'
}
</script>

<style scoped lang="sass">
    nav 
        display: flex
        width: 100%
    .link-block 
        display: flex
        justify-content: center
        width: 95%
        border-radius: 5px
        overflow: hidden
        margin:0 auto
        flex-wrap: wrap
    .square-block
        display: flex
        justify-content: center
        align-items: center
        width: 50%
        min-width: 350px
        min-height: 250px
        font-size: 150%
        transition: 0.2s
        box-sizing: border-box
        strong 
            font-size: 110%
    .red
        background-color: #BD3C4E
    .green
        background-color: #E2D6BE
    .grey
        background-color: #586474
    .black
        color: #000
    a
        text-decoration: none
        font-size: 24px
        color: #000F75
        display: flex
        flex-flow: column
        justify-content: center
        align-items: center
        width: 50%
        min-width: 350px
        min-height: 250px
        background-color: #72CCCA
        transition: 0.2s
        box-sizing: border-box
        img 
            width: 60px
            height: 60px
            margin-bottom: 10px
        &:hover
            font-size: 26px

    @keyframe rotate
        to 
            transform: rotate(180deg)

    // @keyframe shake
    //     50%
    //         transform: rotate(15deg)
    //     75%
    //         transform: rotate(0deg)
    //     to
    //         transform: rotate(-15deg)




</style>