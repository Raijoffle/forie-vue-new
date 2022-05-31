<template>
    <div class="serverError">
        <div class="logo">
            <img src="@/assets/img/Frame.png" alt="" />
        </div>
        <div class="errorSupplier">
            <div class="supplierImage">
                <img src="@/assets/img/supplierImage.jpg" alt="" />
                <div class="supplierSquares">
                    <div></div>
                    <div></div>
                    <div></div>
                    <h1>An unknown error has occurred on the server.</h1>
                </div>
                <img src="@/assets/img/whiteTriangle.png" alt="" />
            </div>
        </div>
        <Footer class="errorFooter"></Footer>
    </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
export default {
    name: "ServerError",
    components: {
        Footer,
    },
};
</script>

<style scopeed>
.logo {
    width: 280px;
    height: 120px;
    left: 29%;
    transform: translateX(-29%);
    position: absolute;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.logo img {
    max-height: 120px;
    height: 100%;
    width: 100%;
}
.errorFooter {
    position: absolute;
}
.serverError {
    background-color: #fff;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 15;
}
.errorSupplier {
    position: relative;
    height: 50%;
    width: 50%;
    max-height: 500px;
    top: 50%;
    transform: translateY(-50%);
    margin: 0 auto;
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
}

.supplierSquares div {
    background-image: url(@/assets/img/supplierSquare.svg);
    position: absolute;
    max-width: 480px;
    width: 100%;
    height: 270px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
    background: linear-gradient(0deg, rgba(165, 200, 255, 0.14), rgba(165, 200, 255, 0.14)),
        linear-gradient(0deg, #1b1b1d, #1b1b1d);
    background-blend-mode: screen;
}
.supplierSquares div:nth-child(2) {
    top: 55%;
    left: 55%;
    transform: translate(-55%, -55%);
    z-index: 2;
    background: linear-gradient(0deg, rgba(165, 200, 255, 0.14), rgba(165, 200, 255, 0.14)),
        linear-gradient(0deg, #1b1b1d, #1b1b1d);
    background-blend-mode: screen;
}
.supplierSquares div:nth-child(3) {
    top: 60%;
    left: 60%;
    transform: translate(-60%, -60%);
    z-index: 1;
    background: linear-gradient(0deg, rgba(165, 200, 255, 0.11), rgba(165, 200, 255, 0.11)), #1b1b1d;
    background-blend-mode: screen;
}
.supplierSquares h1 {
    position: absolute;
    width: 330px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
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
</style>
