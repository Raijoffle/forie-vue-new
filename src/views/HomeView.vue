<template>
    <div class="home">
        <div class="homeSupplier">
            <div class="supplierImage">
                <img src="@/assets/img/supplierImage.jpg" alt="" />
                <div class="supplierSquares">
                    <div></div>
                    <div></div>
                    <div></div>
                    <h1>Eurotray Metal Kablo Taşıma ve Elektrik San. Tic. A.Ş.</h1>
                </div>
                <img src="@/assets/img/whiteTriangle.png" alt="" />
            </div>
        </div>
        <div class="homeAbout">
            <div class="aboutImageDiv">
                <div class="aboutImage">
                    <img src="@/assets/img/alkim81.png" alt="" />
                </div>
            </div>
            <div class="aboutContent">
                <div class="aboutTitle">
                    <img src="@/assets/img/blueTriangle.png" alt="" />
                    <h2>About</h2>
                </div>
                <div class="aboutText">
                    <p>
                        As a member of metal industry based group of companies, Eurotray brings decades of metal manafactoring
                        experince with the construction industry since the early 1990s. New facility which is equipped with the
                        latestproduction machenry and we hod, was established in 2012 in order prowide best quality and high
                        capacity to the customer needs .
                    </p>
                </div>
                <div class="moreAboutBtnDiv">
                    <div class="aboutMoreBtn"><span>More Information</span></div>
                </div>
            </div>
        </div>
        <div class="homeProduct">
            <div class="productSliderDiv">
                <div class="productSlider">
                    <carousel :settings="settings" :breakpoints="breakpoints">
                        <slide v-for="slide in 10" :key="slide">
                            <div class="carousel__item">
                                <img class="w-100" :src="require(`/src/assets/img/alkim81.png`)" />
                            </div>
                            <small :title="slide" style="margin-top: 191px; position: absolute; z-index: 6"
                                >{{ slide }} slide</small
                            >
                        </slide>
                        <template #addons>
                            <div class="sider-btn" id="sliderBtn">
                                <Navigation />
                            </div>
                        </template>
                    </carousel>
                </div>
            </div>
            <div class="productContent">
                <div class="productTitle">
                    <img src="@/assets/img/brownTriangle.png" alt="" />
                    <h2>Product</h2>
                </div>
                <div class="productText">
                    <p>
                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis vel
                        erat sit amet dolor facilisis ullamcorper. Aenean venenatis mollis mi vel tempor.
                    </p>
                </div>
                <div class="moreProductBtnDiv">
                    <div class="productMoreBtn"><span>All Products</span></div>
                </div>
            </div>
        </div>
        <div class="homeProductsCount">
            <div class="countContent">
                <div class="countTitle">
                    <h3>
                        Eurotray Metal Kablo Taşıma ve Elektrik San. Tic. A.Ş. Experts in Manufacturing and Exporting Products
                    </h3>
                </div>
                <div class="countTypes">
                    <div class="squareContainer">
                        <div class="countSquare">
                            <span class="">01</span>
                        </div>
                        <span>Cable Trays</span>
                    </div>
                    <div class="squareContainer">
                        <div class="countSquare">
                            <span class="">02</span>
                        </div>
                        <span>Cable Ladders</span>
                    </div>
                    <div class="squareContainer">
                        <div class="countSquare">
                            <span class="">03</span>
                        </div>
                        <span>Wire Mesh Trays</span>
                    </div>
                    <div class="squareContainer">
                        <div class="countSquare">
                            <span class="">04</span>
                        </div>
                        <span>Standart Cable Trays</span>
                    </div>
                </div>
                <div class="countTags">
                    <div class="countTagBox">
                        <span class="countTagText">05 - Heavy Duty Cable Trays</span>
                    </div>
                    <div class="countTagBox">
                        <span class="countTagText">06 - Strenghened Cable Trays</span>
                    </div>
                    <div class="countTagBox">
                        <span class="countTagText"> 07 - Unperforated Cable Trays</span>
                    </div>
                    <div class="countTagBox">
                        <span class="countTagText">08 - Unperforated Heavy Duty Cable Trays</span>
                    </div>
                    <div class="countTagBox">
                        <span class="countTagText"> 09 - Wire Mesh Cable Trays</span>
                    </div>
                    <div class="countTagBox">
                        <span class="countTagText">10 - Trunking Cable Trays</span>
                    </div>
                    <div class="countTagBox">
                        <span class="countTagText"> 11 - Marine Cable Trays</span>
                    </div>
                    <div class="countTagBox">
                        <span class="countTagText">12 - Underfloor Cable Trays</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="homeContact">
            <div class="contactText">
                <div class="contactTitle">
                    <img src="@/assets/img/blueTriangle.png" alt="" />
                    <h2>Contact</h2>
                </div>
                <div class="contactUserData">
                    <div>
                        <span>Authorized Person</span>
                        <span>Eser KAYA</span>
                    </div>
                    <div>
                        <span>Addres</span>
                        <span class="mt-3">Şekerpınar Mah. Ece Sk. No: 3, Gebze, Kocaeli, Turkey</span>
                    </div>
                    <div>
                        <span>Phone</span>
                        <span>+90 262 290 26 15</span>
                    </div>
                </div>
            </div>
            <div class="contactForm">
                <div class="formSingle">
                    <div>
                        <input type="text" placeholder="Name Surname" />
                    </div>
                    <div>
                        <input type="mail" placeholder="E-mail" />
                    </div>
                </div>
                <div>
                    <select name="contactSelectCountry" id="contactSelectCountry">
                        <option value="0">Select Country</option>
                        <option value="1">Turkey</option>
                        <option value="2">Germany</option>
                        <option value="3">France</option>
                        <option value="4">Spain</option>
                        <option value="5">Italy</option>
                        <option value="6">Russia</option>
                        <option value="7">China</option>
                        <option value="8">Japan</option>
                        <option value="9">USA</option>
                    </select>
                </div>
                <div class="formSubject">
                    <input type="text" placeholder="Subject" />
                </div>
                <div>
                    <textarea name="message" id="messagearea" cols="70" rows="10" placeholder="Message"></textarea>
                </div>
                <div class="formButton">
                    <div class="attachBtn"><span class="material-icons">attach_file</span>Attach</div>
                    <div class="sendBtn"><span>Send</span></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import $ from "jquery";
// import axios from "axios";
import { defineComponent } from "vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
export default defineComponent({
    name: "HomeView",
    data: () => ({
        // carousel settings
        settings: {
            itemsToShow: 1,
            snapAlign: "center",
        },
        // breakpoints are mobile first
        // any settings not specified will fallback to the carousel settings
        breakpoints: {
            // 200: {
            //     itemsToShow: 1,
            //     snapAlign: "center",
            // },
            // 300: {
            //     itemsToShow: 1,
            //     snapAlign: "center",
            // },
            // 400: {
            //     itemsToShow: 1,
            //     snapAlign: "center",
            // },
            // 500: {
            //     itemsToShow: 1,
            //     snapAlign: "center",
            // },
            // 600: {
            //     itemsToShow: 1,
            //     snapAlign: "center",
            // },
            // // 700px and up
            // 700: {
            //     itemsToShow: 1,
            //     snapAlign: "center",
            // },
            // // 1024 and up
            // 1024: {
            //     itemsToShow: 1,
            //     snapAlign: "start",
            // },
        },
    }),
    components: {
        Carousel,
        Slide,
        Navigation,
    },
    created() {
        // axios.get(this.url).then((response) => (this.products = response.data));
    },
    methods: {},
});
$(document).ready(function () {
    $(".aboutMoreBtn").click(function () {
        console.log("object");
    });
});
</script>

<style lang="postcss">
@media only screen and (max-width: 480px) {
    .sider-btn .carousel__prev,
    .sider-btn .carousel__next {
        top: 40%;
    }
}
@media only screen and (max-width: 420px) {
    .sider-btn .carousel__prev,
    .sider-btn .carousel__next {
        top: 35%;
    }
}
@media only screen and (max-width: 375px) {
    .sider-btn .carousel__prev,
    .sider-btn .carousel__next {
        top: 45%;
    }
}
</style>
<style scoped>
.home {
    height: 100%;
}
.homeSupplier {
    position: relative;
    height: 100%;
    width: 100%;
    max-height: 500px;
}
.supplierImage {
    width: 100%;
    max-height: 500px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}
.supplierImage img {
    width: 100%;
    max-height: 500px;
    height: 100%;
}
.supplierImage img:nth-child(3) {
    position: absolute;
    width: 75px;
    height: 75px;
    z-index: 5;
    right: 0;
    bottom: 0;
}
.supplierSquares {
    position: absolute;
    width: 100%;
    height: 500px;
    top: 0;
    left: 0;
    z-index: 6;
}
.supplierSquares div {
    background-image: url(../assets/img/supplierSquare.svg);
    position: absolute;
    max-width: 480px;
    width: 100%;
    height: 270px;
    top: 50%;
    left: 20%;
    transform: translate(-20%, -50%);
    z-index: 3;
    background: linear-gradient(0deg, rgba(165, 200, 255, 0.14), rgba(165, 200, 255, 0.14)),
        linear-gradient(0deg, #1b1b1d, #1b1b1d);
    background-blend-mode: screen;
}
.supplierSquares div:nth-child(2) {
    background-image: url(../assets/img/supplierSquare.svg);
    top: 55%;
    left: 23%;
    transform: translate(-23%, -55%);
    z-index: 2;
    background: linear-gradient(0deg, rgba(165, 200, 255, 0.11), rgba(165, 200, 255, 0.11)), #1b1b1d;

    background-blend-mode: screen;
}
.supplierSquares div:nth-child(3) {
    background-image: url(../assets/img/supplierSquare.svg);
    top: 60%;
    left: 26%;
    transform: translate(-26%, -60%);
    z-index: 1;
    background-blend-mode: screen;
}
.supplierSquares h1 {
    position: absolute;
    width: 330px;
    top: 50%;
    left: 25%;
    transform: translate(-25%, -50%);
    z-index: 4;
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 40px;
    letter-spacing: 0.4px;
    color: #ffffff;
    mix-blend-mode: normal;
    display: flex;
    align-items: center;
    text-align: left;
}
.homeAbout {
    margin-top: 75px;
    position: relative;
    height: 100%;
    width: 100%;
    /* background: #fcb; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
}
.aboutImageDiv {
    max-height: 407px;
    height: 100%;
    width: 630px;
    display: flex;
    align-items: center;
    justify-content: left;
    overflow: hidden;
}
.aboutImage img {
    max-height: 407px;
    height: 100%;
    width: 630px;
}
.aboutContent {
    width: 630px;
    /* background: #ffa; */
    height: 407px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding: 50px;
}
.aboutTitle {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.aboutTitle h2 {
    font-family: DM Sans;
    font-size: 32px;
    font-weight: 500;
    line-height: 40px;
    letter-spacing: 0em;
    text-align: left;
    color: #1b1b1d;
}
.aboutTitle img {
    margin-right: 8px;
}
.aboutText {
    margin-top: 30px;
    width: 530px;
    height: 150px;
    overflow-y: scroll;
}
.aboutText p {
    font-family: DM Sans;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.5px;
    text-align: left;
    color: #1b1b1d;
}
.aboutText p::after {
    content: "...";
    color: #005eb5;
    margin-left: -8.3px;
}
.moreAboutBtnDiv {
    width: 100%;
    margin-top: 30px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.aboutMoreBtn {
    color: #005eb5;
    height: 48px;
    width: 162px;
    left: 0px;
    top: 0px;
    padding: 12px, 16px, 12px, 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #005eb5;
    box-sizing: border-box;
    border-radius: 8px;
    cursor: pointer;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;
}
.aboutMoreBtn span {
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #005eb5;
}
.homeProduct {
    margin-top: 75px;
    position: relative;
    height: 100%;
    width: 100%;
    flex-direction: row-reverse;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
}
.productSliderDiv {
    max-height: 407px;
    height: 100%;
    width: 630px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    overflow: hidden;
}
.productSlider {
    box-sizing: border-box;
    padding: 0px 16px;
}
/* .sider-btn {
    background: #c8c6;
    top: 0;
} */
.carousel {
    width: 100%;
}
.carousel__item img {
    max-height: 407px;
    height: 70%;
    /* width: 630px; */
}
.productSlider section {
    max-height: 350px;
    height: 300px;
    width: 500px;
}
.carousel__slide {
    display: flex;
    flex-direction: column;
}
.productContent {
    width: 630px;
    /* background: #ffa; */
    height: 407px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    box-sizing: border-box;
    /* padding: 50px; */
}
.productTitle {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.productTitle h2 {
    font-family: DM Sans;
    font-size: 32px;
    font-weight: 500;
    line-height: 40px;
    letter-spacing: 0em;
    text-align: left;
    color: #1b1b1d;
}
.productTitle img {
    margin-right: 8px;
}
.productText {
    margin-top: 30px;
    width: 360px;
    height: 120px;
    overflow: hidden;
}
.productText p {
    font-family: DM Sans;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.5px;
    text-align: left;
    color: #1b1b1d;
}
.moreProductBtnDiv {
    width: 100%;
    margin-top: 30px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.productMoreBtn {
    color: #6e5675;
    height: 48px;
    width: 162px;
    left: 0px;
    top: 0px;
    padding: 12px, 16px, 12px, 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #6e5675;
    box-sizing: border-box;
    border-radius: 8px;
    cursor: pointer;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;
}
.productMoreBtn span {
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #6e5675;
}
.countContent {
    width: 100%;
    height: 500px;
    max-height: 960px;
    background: #d9e3f8;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
}
.countTitle h3 {
    font-family: DM Sans;
    font-style: normal;
    font-size: 28px;
    font-weight: 500;
    line-height: 36px;
    letter-spacing: 0em;
    text-align: center;
    width: 831px;
    height: 72px;
    color: #000000;
}
.countTypes {
    width: 100%;
    height: 110px;
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: space-around;
    flex-wrap: wrap;
}
.squareContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.squareContainer span:nth-child(2) {
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 28px;
    text-align: center;
    font-feature-settings: "liga" off;
    color: #555f71;
    margin: 3px 0px;
}
.countSquare {
    height: 70px;
    width: 70px;
    background: #fff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 40px;
    text-align: center;
    color: #555f71;
    letter-spacing: 0.1px;
}
.countTags {
    display: flex;
    flex-direction: row;
    align-items: center;
    align-content: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    height: 130px;
    overflow-x: scroll;
}
.countTagBox {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 6px 16px;
    position: static;
    /* width: 225px; */
    height: 32px;
    left: 0px;
    top: 0px;
    background: #fdfbff;
    border: 1px solid rgba(116, 119, 127, 0.16);
    box-sizing: border-box;
    border-radius: 8px;
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 0px 8px;
}
.countTagText {
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.1px;
    font-feature-settings: "liga" off;
    color: #43474f;
}
.homeContact {
    width: 1150px;
    /* height: 500px; */
    max-height: 960px;
    margin-top: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    float: right;
    margin: 0 auto;
    margin: 50px 0;
}
.homeContact .contactForm {
    width: 750px;
}
.homeContact .contactText {
    width: 400px;
}
.contactTitle {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.contactTitle h2 {
    font-family: DM Sans;
    font-size: 32px;
    font-weight: 500;
    line-height: 40px;
    letter-spacing: 0em;
    text-align: left;
    color: #1b1b1d;
}
.contactTitle img {
    margin-right: 8px;
}
.contactUserData div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin: 24px 0px;
}
.contactUserData div span:nth-child(1) {
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 28px;
    display: flex;
    align-items: center;
    color: #005eb5;
    margin: 4px 0px;
}
.contactUserData div span:nth-child(2) {
    position: static;
    width: 358px;
    height: 24px;
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    letter-spacing: 0.5px;
    color: #000000;
    text-align: left;
    flex: none;
    order: 1;
    flex-grow: 0;
    margin-top: 6px;
}
.contactForm {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: right;
    flex-wrap: wrap;
}
.contactForm div input,
.contactForm div select {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 16px;
    position: static;
    width: 256px;
    height: 56px;
    left: 288px;
    top: 0px;
    background: rgba(227, 226, 230, 0.08);
    border: 1px solid rgba(142, 145, 154, 0.16);
    box-sizing: border-box;
    border-radius: 8px;
    flex: none;
    order: 1;
    flex-grow: 1;
    margin: 16px 0px;
}
.contactForm div input::placeholder,
.contactForm div select {
    position: static;
    height: 56px;
    left: 0px;
    top: 0px;
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 56px;
    display: flex;
    align-items: center;
    letter-spacing: 0.25px;
    color: #000000;
    flex: none;
    order: 1;
    flex-grow: 0;
}
/* .contactForm div:nth-child(1),
.contactForm div:nth-child(1) input {
    /* margin-right: 24px;
} */

.contactForm div:nth-child(3),
.contactForm div:nth-child(3) input,
.contactForm div:nth-child(4),
.contactForm div:nth-child(4) input,
.contactForm div:nth-child(5),
.contactForm div:nth-child(5) input,
.contactForm div select {
    width: 560px;
}
.contactForm div textarea {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 16px;
    position: static;
    width: 570px;
    max-height: 100px;
    min-height: 100px;
    left: 288px;
    top: 0px;
    background: rgba(227, 226, 230, 0.08);
    border: 1px solid rgba(142, 145, 154, 0.16);
    box-sizing: border-box;
    border-radius: 8px;
    flex: none;
    order: 1;
    flex-grow: 1;
    margin: 16px 0px;
}
.contactForm div textarea ::placeholder {
    position: static;
    width: 59px;
    height: 56px;
    left: 0px;
    top: 0px;
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 56px;
    display: flex;
    align-items: center;
    letter-spacing: 0.25px;
    color: #000000;
    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 0px 10px;
}
.formButton {
    width: 560px;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-between;
}
.formButton div {
    position: static;
    left: 0px;
    top: 0px;
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}
.formButton div:hover {
    opacity: 0.8;
}
.attachBtn {
    position: static;
    width: 58px;
    height: 28px;
    left: 26px;
    top: 0px;
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    color: #005eb5;
    flex: none;
    order: 1;
    flex-grow: 0;
}
.sendBtn {
    width: 80px;
    height: 56px;
    padding: 14px 18px;
    position: static;
    left: 0%;
    right: 0%;
    top: 0%;
    bottom: 0%;
    background: #005eb5;
    border-radius: 8px;
    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 0px 0px;
}
.formSingle {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
}
.formSingle div:nth-child(1) {
    margin-right: 50px;
}
.sendBtn span {
    position: static;
    width: 44px;
    height: 28px;
    left: 0px;
    top: 0px;
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    color: #ffffff;
    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 0px 8px;
}
.carousel__viewport {
    height: 100%;
}

@media only screen and (max-width: 1399px) {
    .homeProduct {
        justify-content: center;
    }
    .homeAbout {
        justify-content: center;
    }
    .productText,
    .productText p {
        width: 100%;
    }
}
@media only screen and (max-width: 1300px) {
    .homeContact {
        width: 100%;
    }

    .contactForm {
        justify-content: center;
        align-items: center;
    }
}
@media only screen and (max-width: 1200px) {
    .supplierSquares {
        left: 0px;
        transform: translate(-5%, -15%);
    }
    .supplierSquares div {
        max-width: 380px;
        height: 170px;
    }
    .supplierSquares h1 {
        font-size: 28px;
    }
}
@media only screen and (max-width: 972px) {
    .supplierSquares {
        left: 0px;
        transform: translate(-5%, -15%);
    }
    .supplierSquares div {
        max-width: 320px;
        height: 110px;
    }
    .supplierSquares h1 {
        width: 250px;
        font-size: 22px;
    }
    /* .countTitle {
    } */
    .countTitle h3 {
        font-size: 20px;
        width: 100%;
    }
    .aboutText {
        width: 100%;
    }
    .countContent {
        height: 600px;
    }
    /* .countTitle {
    }
    .countTypes {
    }
    .countTags {
    } */
}
@media only screen and (max-width: 780px) {
    .carousel {
        width: 100% !important;
    }
}
@media only screen and (max-width: 768px) {
    .supplierSquares {
        left: 0px;
        transform: translate(-5%, -30%);
    }

    .formSingle div:nth-child(1) {
        margin-right: 0px;
    }
    .formSingle {
        flex-direction: column;
    }
    .contactForm {
        flex-direction: column;
        align-content: center;
    }
    .homeContact div input,
    .homeContact textarea,
    .homeContact select {
        width: 270px !important;
    }
    .contactForm div:nth-child(5),
    .contactForm div:nth-child(4) {
        width: 270px;
    }
    .contactForm div:nth-child(3) {
        width: 270px;
    }
}
@media only screen and (max-width: 480px) {
    .supplierSquares div {
        width: 270px;
        height: 90px;
    }
    .supplierSquares h1 {
        width: 200px;
        font-size: 16px;
        line-height: 20px;
    }
    .supplierSquares {
        transform: translate(-3%, -39%);
    }
}
@media only screen and (max-width: 425px) {
    .aboutContent,
    .productText {
        padding-left: 0;
        padding-right: 0;
    }
    .productText p {
        width: 100% !important;
    }
}
@media only screen and (max-width: 375px) {
    .supplierImage {
        height: 200px;
    }
    .productContent,
    .productText {
        width: 100%;
    }
    .productText p {
        width: 310px !important;
    }
    .homeContact .contactText {
        width: 100%;
    }
    .contactUserData div {
        width: 100%;
    }
    .contactUserData div span:nth-child(2) {
        width: 100%;
    }
    .carousel__item {
        height: 375px !important;
    }
}
@media only screen and (max-width: 320px) {
    .carousel__item {
        height: 320px !important;
    }
    .aboutContent {
        padding: 0px;
    }
    .aboutText {
        width: 280px;
    }
    .aboutText p {
        font-size: 11px;
        width: 250px;
    }
    .productContent {
        width: 320px;
        padding: 0px;
    }
    .productText {
        width: 280px;
    }
    .productText p {
        font-size: 11px;
        width: 250px;
    }
    .homeProductsCount .countContent {
        height: 850px;
        justify-content: space-between;
    }
    .countTitle {
        height: 150px;
    }
    .countTitle h3 {
        font-size: 16px;
        width: 270px;
    }
    .countTypes {
        height: 410px;
    }
    .countTypes .squareContainer .countSquare {
        height: 45px;
        width: 45px;
        font-size: 16px;
    }
    .countTypes .squareContainer span {
        font-size: 20px;
    }
    .countTags {
        height: 300px;
    }
    .countTags .countTagBox .countTagText {
        font-size: 12px;
    }
    .countTags {
        overflow-x: scroll;
    }
    .supplierSquares div {
        width: 200px;
        height: 60px;
    }
    .supplierSquares h1 {
        width: 190px;
        font-size: 14px;
        line-height: 20px;
    }
    .supplierSquares {
        transform: translate(-4%, -37%);
    }

    .homeContact .contactText[data-v-9ea40744] {
        width: 280px;
    }
    .contactUserData div span:nth-child(2) {
        width: 100%;
        height: 30px;
    }
    .homeProduct {
        justify-content: flex-end;
    }
    .aboutContent {
        width: 100% !important;
    }
    .productContent,
    .productText {
        width: 100% !important;
    }
    .productText p {
        width: 100% !important;
        height: 110px;
    }
}
@media only screen and (max-width: 280px) {
    .supplierSquares div {
        width: 200px;
        height: 60px;
    }
    .supplierSquares h1 {
        width: 190px;
        font-size: 12px;
        line-height: 20px;
    }
    .supplierSquares {
        transform: translate(-3%, -40%);
    }
    .productContent {
        width: 280px;
    }
    .homeContact .contactText[data-v-9ea40744] {
        width: 280px;
    }
    .contactUserData div span:nth-child(2) {
        width: 280px;
        height: 30px;
    }
    .carousel__item {
        height: 280px !important;
    }
}
</style>
