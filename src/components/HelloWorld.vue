<template>
    <div id="main">
        <div id="home">
            <div id="header">
                <a href="#home">Home</a>
                <a href="#features">Features</a>
                <a href="#how-it-works">How it works</a>
                <a href="mailto:rikinhim@gmail.com">Contact us</a>
            </div>
            <div id="home-content">
                <div id="left">
                    <img id="app-name" src="../assets/cardoze.png" />
                    <p id="subtitle">Never forget vocabulary ever again!</p>
                    <a id="learn-more" href="#how-it-works">
                        <img src="../assets/learn more.png" />
                    </a>
                </div>
                <div id="right">
                    <img id="phone" src="../assets/Phone.png" />
                </div>
            </div>
        </div>
        <div id="features">
            <p id="features-title">
                <span>Simple</span>
                &
                <span>Powerful</span>
                tool for language learners
            </p>
            <div id="icons">
                <div class="icon">
                    <img src="../assets/F1.png">
                    <p>Create flashcards<br>in a second</p>
                </div>
                <div class="icon">
                    <img src="../assets/F2.png">
                    <p>Enhance memory<br>with spaced repetition</p>
                </div>
                <div class="icon">
                    <img src="../assets/F3.png">
                    <p>Social sharing and<br>challenge</p>
                </div>
                <div class="icon">
                    <img src="../assets/F4.png">
                    <p>Freely customize<br>your collections</p>
                </div>
            </div>
        </div>
        <div id="how-it-works">
                <iframe id="video" src="https://www.youtube.com/embed/L9GowoGK1tk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <p id="how-it-works-title">
                <span>Cardoze</span><br id="break">One tap, One word
            </p>
            <img id="students" src="../assets/Students.png">
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
}
</script>

<style scoped lang="scss">
$mobile-width: 900px;

#main {
    color: #2d65c2;
    font-family: 'Raleway', sans-serif;
}

#home {
    background-image: url('../assets/BG.png');
    padding: 28px 42px;
    background-size: cover;
}

#header {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 60px;

    @media (max-width: $mobile-width) {
        justify-content: center;
    }

    a {
        margin-left: 40px;
        color: #333;
        text-transform: uppercase;
        text-decoration: none;
        letter-spacing: 2px;
        font-size: 16px;
        white-space: nowrap;

        @media (max-width: $mobile-width) {
            font-size: 12px;
            margin-left: 10px;
            margin-right: 10px;
        }
    }
}

#app-name {
    width: 412px;
    max-width: 100%;
    margin-top: 10px;
    @media (max-width: $mobile-width) {
        width: 300px;
    }
}

#subtitle {
    font-family: 'Lobster', cursive;
    font-size: 24px;
    font-weight: normal;
    letter-spacing: 2.5px;
    margin-top: 25px;
    margin-bottom: 45px;

    @media (max-width: $mobile-width) {
        font-size: 18px;
    }
}

#phone {
    width: 283px;
    margin-bottom: -86px;

    @media (max-width: $mobile-width) {
        margin-top: 30px;
        width: 366px;
        margin-bottom: -71px;
        margin-left: -7px;
    }
}

#home-content {
    display: flex;
    max-width: 1200px;
    margin: 0 auto;
    justify-content: space-between;
    @media (max-width: $mobile-width) {
        flex-flow: column;
    }
}

#left {
    margin-left: 50px;
    @media (max-width: $mobile-width) {
        margin-left: 0;
    }
}

@media (max-width: $mobile-width) {
    #left, #right {
        text-align: center;
    }
}

#learn-more {
    img {
        width: 186px;
        max-width: 100%;
        @media (max-width: $mobile-width) {
            width: 150px;
            margin-top: 10px;
        }
    }
}

#features {
    text-align: center;
    padding: 50px;
}

#features-title {
    font-size: 24px;
    letter-spacing: 2px;
    line-height: 30px;
    span {
        text-transform: uppercase;
        font-weight: bold;
    }
}

#how-it-works-title {
    font-size: 24px;
    letter-spacing: 2px;
    span {
        letter-spacing: 4px;
        font-size: 30px;
        text-transform: uppercase;
        font-weight: bold;
        display: block;
    }
}

#icons {
    display: flex;
    justify-content: center;
    margin-top: 60px;

    @media (max-width: $mobile-width) {
        flex-flow: column;
        align-items: center;
    }
}

.icon {
    margin-right: 20px;
    margin-left: 20px;
    width: 165px;
    img {
        width: 111px;
    }

    @media (max-width: $mobile-width) {
        margin-bottom: 30px;
    }
}

#how-it-works {
    text-align: center;
    padding: 50px;
}

#students {
    width: 600px;
    max-width: 100%;
    margin-top: 20px;
}

#id {
    display: none;
    @media (max-width: $mobile-width) {
        display: inline-block;
    }
}

#video {
    margin-bottom: 70px;
    max-width: 100%;
    width: 720px;
    max-width: 100%;
    height: 480px;
    @media (max-width: $mobile-width) {
        height: 300px;
    }
    padding: 5px;
    background-image: url('../assets/BG.png');
    background-size: cover;
}

</style>
