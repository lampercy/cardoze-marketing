<template>
    <div id="main">
        <div id="home">
            <div id="header">
                <a href="#home">Home</a>
                <a href="#features">Features</a>
                <a href="#how-it-works">How it works</a>
                <a href="#contact-us">Contact us</a>
            </div>
            <div id="home-content">
                <div id="left">
                    <img id="app-name" src="../assets/cardoze.png" />
                    <p id="subtitle">Your daily dose of language!</p>
                    <a id="learn-more" href="#how-it-works">
                        <img src="../assets/Learn more.png" />
                    </a>
                </div>
                <div id="right">
                    <img id="pencil" src="../assets/Pencil.png" />
                    <div id="phone-wrapper">
                        <img id="phone" src="../assets/Phone.png" />
                        <swiper id="swiper" :options="swiperOptions">
                            <swiper-slide>
                                <img class="app-screen" src="../assets/APP1.png">
                            </swiper-slide>
                            <swiper-slide>
                                <img class="app-screen" src="../assets/APP2.png">
                            </swiper-slide>
                            <swiper-slide>
                                <img class="app-screen" src="../assets/APP3.png">
                            </swiper-slide>
                            <swiper-slide>
                                <img class="app-screen" src="../assets/APP4.png">
                            </swiper-slide>
                            <swiper-slide>
                                <img class="app-screen" src="../assets/APP5.png">
                            </swiper-slide>
                        </swiper>
                    </div>

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
            <div id="video-wrapper-outer">
                <div id="video-wrapper-inner">
                    <iframe
                        id="video"
                        src="https://www.youtube.com/embed/LEYzg4D9Or0"
                        frameborder="0"
                        allowfullscreen
                    />
                </div>
            </div>
            <p id="how-it-works-title">
                <span>Cardoze</span><br id="break">Language at your fingertips!
            </p>
            <img id="students" src="../assets/Students.png">
        </div>
        <div id="contact-us">
            <div id="contact-us-title">Contact us</div>
            <form action="https://send.pageclip.co/HYTPpvJXlROc2QlGv84A1SehHZlnPZb6" id="contact-us-form" method="post">
                <div class="email-row">
                    <div class="email-field-title">First Name</div>
                    <input class="email-field-input" type="text" name="name" required />
                </div>
                <div class="email-row">
                    <div class="email-field-title">Email</div>
                    <input class="email-field-input" type="email" name="email" required />
                </div>
                <div class="email-row">
                    <div class="email-field-title">Message</div>
                    <textarea
                        class="email-field-input textarea"
                        type="email"
                        name="message"
                        required
                    />
                </div>
                <div id="submit-wrapper">
                    <button type="submit" id="submit">
                        <img src="../assets/Send icon.png" />
                    </button>
                </div>
            </form>
            <div id="footer">
                @ {{ year }} CARDOZE. All rights reserved.
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
    @Prop() private msg!: string;

    data() {
        return {
            swiperOptions: {
                loop: true,
                autoplay: {
                    delay: 4000,
                    disableOnInteraction: false,
                },
            },
            year: (new Date()).getFullYear(),
        };
    }
}
</script>

<style scoped lang="scss">
$mobile-width: 1000px;
$xs-mobile-width: 420px;

#main {
    color: #2d65c2;
    font-family: 'Raleway', sans-serif;
    letter-spacing: 2px;
}

#home {
    background-image: url('../assets/BG.png');
    padding: 28px 42px;
    background-size: cover;
    @media (max-width: $mobile-width) {
        padding: 28px 18px;
    }
}

#header {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 30px;

    @media (max-width: $mobile-width) {
        justify-content: center;
        flex-wrap: wrap;
        line-height: 24px;
    }

    a {
        margin-left: 40px;
        color: #333;
        text-transform: uppercase;
        text-decoration: none;
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
    margin-top: 50px;
    @media (max-width: $mobile-width) {
        width: 300px;
    }
}

#subtitle {
    font-size: 24px;
    font-weight: normal;
    letter-spacing: 2.5px;
    margin-top: 25px;
    margin-bottom: 45px;

    @media (max-width: $mobile-width) {
        font-size: 18px;
    }
}

#pencil {
    width: 396px;
    position: absolute;
    bottom: -46px;
    left: -365px;

    @media (max-width: $mobile-width) {
        display: none;
    }
}

#phone-wrapper {
    position: relative;
    margin-bottom: -147px;

    @media (max-width: $mobile-width) {
        margin-top: 30px;
        width: 366px;
        margin: 0 auto;
        margin-bottom: 0;
    }

    @media (max-width: $xs-mobile-width) {
        width: 283px;
    }
}

#phone {
    width: 366px;
    @media (max-width: $xs-mobile-width) {
        width: 283px;
    }
}

#swiper {
    position: absolute;
    top: 42px;
    width: 276px;
    left: 45px;
    height: 499px;
    border-radius: 34px 34px 0 0;
    @media (max-width: $xs-mobile-width) {
        top: 33px;
        width: 213px;
        left: 35px;
        border-radius: 27px 27px 0 0;
        height: 385px;
    }
}

.app-screen {
    width: 277px;
    @media (max-width: $xs-mobile-width) {
        width: 214px;
    }
}

#home-content {
    display: flex;
    max-width: 1200px;
    padding-left: 50px;
    margin: 0 auto;
    justify-content: space-between;
    @media (max-width: $mobile-width) {
        flex-flow: column;
        padding-left: 0;
    }
}

#left {
    margin-left: 50px;
    @media (max-width: $mobile-width) {
        margin-left: 0;
    }
}

#right {
    position: relative;
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
            width: 200px;
            margin-top: 10px;
            margin-left: 10px;
        }
    }
}

#features {
    text-align: center;
    padding: 50px;
    @media (max-width: $mobile-width) {
        padding: 28px;
    }
}

#features-title {
    font-size: 24px;
    line-height: 30px;
    margin-top: 45px;
    span {
        text-transform: uppercase;
        font-weight: bold;
    }
}

#how-it-works-title {
    font-size: 24px;
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

    @media (max-width: 922px) {
        width: 440px;
        align-items: center;
        max-width: 100%;
        flex-wrap: wrap;
        margin-left: auto;
        margin-right: auto;
    }
}

.icon {
    width: 215px;
    line-height: 20px;

    img {
        width: 111px;
    }

    @media (max-width: $mobile-width) {
        margin-bottom: 30px;
    }
}

#how-it-works {
    text-align: center;
    @media (max-width: $mobile-width) {
        padding: 28px;
    }
}

#students {
    width: 600px;
    max-width: 100%;
    margin-top: 20px;
    margin-bottom: 30px;
}

#id {
    display: none;
    @media (max-width: $mobile-width) {
        display: inline-block;
    }
}

#video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

#video-wrapper-outer {
    max-width: 100%;
    width: 720px;
    margin: 0 auto;
    margin-bottom: 70px;
    background-image: url('../assets/BG.png');
    background-size: cover;
    padding: 5px;
}

#video-wrapper-inner {
    position: relative;
    width: 100%;
    padding-bottom: 56.25%;
    @media (max-width: $mobile-width) {
        padding-bottom: 60%;
    }
}

#contact-us {
    text-align: center;
    background-color: #2d65c2;
    padding: 50px 28px 16px;
}

#contact-us-title {
    color: white;
    font-size: 18px;
    margin-bottom: 36px;
    text-transform: uppercase;
    letter-spacing: 4px;
}

#contact-us-form {
    width: 450px;
    margin: 0 auto;
    max-width: 100%;
    margin-bottom: 60px;
}

.email-field-title {
    color: white;
    text-align: left;
    margin-bottom: 8px;
    text-transform: uppercase;
    font-size: 12px;
}

.email-field-input {
    width: 100%;
    padding: 4px 8px;
    &.textarea {
        height: 150px;
    }
}

.email-row {
    margin-bottom: 18px;
}

#submit-wrapper {
    text-align: right;
    @media (max-width: $mobile-width) {
        text-align: center;
    }
}

#submit {
    text-align: right;
    background: none;
    border: none;
    img {
        width: 140px;
        margin-right: -15px;
    }
}

#footer {
    text-align: left;
    color: white;
    font-size: 11px;

    @media (max-width: $mobile-width) {
        text-align: center;
    }
}

</style>
