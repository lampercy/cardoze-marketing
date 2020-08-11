<template>
    <div id="main">
        <div id="section-1">
            <div id="header">
                <a href="#">Home</a>
                <a href="#">Features</a>
                <a href="#">How it work</a>
                <a href="#">Contact us</a>
            </div>
            <div id="section-1-content">
                <div id="left">
                    <img id="app-name" src="../assets/cardoze.png" />
                    <h4 id="subtitle">Never forget vocabulary ever again!</h4>
                    <a id="learn-more" href="#">
                        <img src="../assets/learn more.png" />
                    </a>
                </div>
                <div id="right">
                    <img id="phone" src="../assets/Phone.png" />
                </div>
            </div>
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
$mobile-width: 850px;

#main {
    color: #2d65c2;
}

#section-1 {
    background-image: url('../assets/BG.png');
    padding: 28px 42px;
    background-size: cover;
}

#header {
    font-family: 'Raleway', sans-serif;
    display: flex;
    justify-content: flex-end;
    margin-bottom: 60px;

    @media (max-width: $mobile-width) {
        justify-content: center;
    }

    a {
        margin-left: 40px;
        color: #000;
        text-transform: uppercase;
        text-decoration: none;
        letter-spacing: 2px;
        font-size: 18px;
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
}

#subtitle {
    font-family: 'Lobster', cursive;
    font-size: 24px;
    font-weight: normal;
    letter-spacing: 1px;
    margin-top: 25px;
}

#phone {
    width: 526px;
    margin-bottom: -86px;

    @media (max-width: $mobile-width) {
        margin-top: 30px;
        width: 366px;
        margin-bottom: -71px;
    }
}

#section-1-content {
    display: flex;
    max-width: 1200px;
    margin: 0 auto;
    justify-content: space-between;
    @media (max-width: $mobile-width) {
        flex-flow: column;
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
    }
}

</style>
