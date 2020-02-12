<template>
    <div class="about-main">
        <div class="about-text">
            <h3>Немного обо мне</h3>
            <p>
                <span>Кто я:</span> Васильев Игорь
            </p>
            <p>
                <span>Поподробнее:</span> Я закончил факультет Информационное управление МГТУ им. Н.Э. Баумана в 2018 году. Во время учебы заинтересовало создание сайтов и решил заняться этим. Сначала изучал самостоятельно, потом начал проходить курсы. В данный момент прохожу курсы Geekbrains от Mail.ru<span class="blink-cursor"></span>
            </p><br>
            <p>
                <span>Что умею:</span> Сейчас владею следующими технологиями:
                <ul>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>JavaScript(ES6)</li>
                    <li>AJAX</li>
                    <li>jQuery</li>
                    <li>Bootstrap 4</li>
                    <li>GIT</li>
                    <li>в процессе изучения Vue.js</li>
                </ul>
            </p>
        </div>
        <div class="about-pyramid">
            <div class="pyramid-block">
                <div class="tringle-1"></div>
                <div class="tringle-2"></div>
                <div class="tringle-3"></div>
                <div class="tringle-4"></div>
                <div class="square"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}

</script>

<style lang="sass">
    .about-main
        display: flex
        // width: 1200px
        height: auto
        margin: 0 auto
        flex-wrap: wrap
        background-color: #BD3C4E
    .about-text
        display: flex
        width: 50%
        align-items: center
        flex-flow: column
        h3 
            margin: 30px
            width: 100%
            font-size: 24px
            text-align: center
            height: 30px
        p 
            width: 100%
            padding: 5px 20px
            font-size: 20px
            box-sizing: border-box
            line-height: 30px
            span 
                font-weight: bold
                color: white
            ul 
                margin: 10px 25px 
                list-style-type: square
                li 
                    font-weight: bold
                    font-size: 22px
                    padding: 5px
    .blink-cursor 
        &:before
            content: ''
            display: inline-block
            width: 2px 
            height: 22px 
            margin: 0 5px
            background-color: black
            animation: blink 1s infinite cubic-bezier(1, -0.37, 0.17, 1.49)

    .about-pyramid
        display: flex
        width: 50%
        max-height: 700px
        overflow: hidden
    .pyramid-block
        width: 90%
        height: 800px
        position: relative
        transform-style: preserve-3d
        perspective: 700px
        transform-origin: 0% 50% 50%
        transform: rotateX(80deg) rotateZ(0deg) 
        animation: rotation 8s infinite linear

    .tringle-1
        position: absolute
        top: 0px
        left: 200px
        border-left: 160px solid transparent
        border-right: 160px solid transparent
        border-top: 0px solid transparent
        border-bottom: 240px solid rgba(255,255,255,0.4)
        transform-origin: 0 100%
        transform: rotate3d(-1, 0, 0, 132deg)

    .tringle-1:after
        content: ''
        display: block
        width: 100px
        height: 100px
        background-image: url(../assets/html5.png)
        background-repeat: no-repeat
        background-size: contain
        position: absolute
        font-size: 26px
        top: 70px
        left: -50px
        transform: scale(-1,1)

    .tringle-2
        position: absolute
        top: 240px
        left: 520px
        border-left: 240px solid rgba(255,255,255,0.4)
        border-right: 0px solid transparent
        border-top: 160px solid transparent
        border-bottom: 160px solid transparent
        transform-origin: 0 0

        transform: rotate3d(0, -1, 0, 132deg)

    .tringle-2:after
        content: ''
        display: block
        width: 100px
        height: 100px
        background-image: url(../assets/css3.png)
        background-repeat: no-repeat
        background-size: contain
        position: absolute
        font-size: 26px
        top: -60px
        right: 70px
        transform: rotate(90deg) scale(-1,1)

    .tringle-3
        position: absolute
        top: 240px
        left: -40px
        border-left: 0px solid transparent
        border-right: 240px solid rgba(255,255,255,0.4)
        border-top: 160px solid transparent
        border-bottom: 160px solid transparent
        transform-origin: 100% 0
        transform: rotate3d(0, 1, 0, 132deg)

    .tringle-3:after
        content: ''
        display: block
        width: 90px
        height: 90px
        background-image: url(../assets/js.png)
        background-repeat: no-repeat
        background-size: contain
        position: absolute
        font-size: 26px
        top: -40px
        left: 80px
        transform: rotate(-90deg) scale(-1,1)

    .tringle-4
        position: absolute
        bottom: 0px
        left: 200px
        border-left: 160px solid transparent
        border-right: 160px solid transparent
        border-top: 240px solid rgba(255,255,255,0.4)
        border-bottom: 0px solid transparent
        transform-origin: 0 0
        transform: rotate3d(1, 0, 0, 132deg)

    .tringle-4:after
        content: ''
        display: block
        width: 80px
        height: 90px
        background-image: url(../assets/vue.png)
        background-repeat: no-repeat
        background-size: contain
        position: absolute
        font-size: 26px
        bottom: 90px
        left: -40px
        transform: rotate(180deg) scale(-1,1)


    .square
        width: 320px
        height: 320px
        position: absolute
        top: 240px
        left: 200px
        background-color: rgba(255,255,255,0.45)


    @keyframes rotation
        50%  
            transform: rotateX(80deg)  rotateZ(180deg) 
        to 
            transform: rotateX(80deg)  rotateZ(360deg)
    @keyframes blink
        // from 
        //     background-color: black
        to 
            background-color: transparent
</style>