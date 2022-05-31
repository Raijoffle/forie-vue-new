<template>
    <div class="serverError">
        <div class="logo">
            <img src="@/assets/img/Frame.png" alt="" />
        </div>
        <div class="page">
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
.serverError {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
    z-index: 30;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}
.supplierImage {
    position: Relative;
    height: 100%;
    max-height: 1080px;
}
.errorSupplier .supplierImage img:nth-child(1) {
    width: 100%;
    max-width: 1080px;
}
.errorSupplier .supplierImage img:nth-child(3) {
    position: absolute;
    bottom: 3px;
    right: 0;
}
.supplierSquares {
    position: absolute;
    width: 100%;
    height: 100%;
    max-height: 490px;
    top: 0;
    left: 0;
    z-index: 6;
}
.supplierSquares div {
    background-image: url(@/assets/img/supplierSquare.svg);
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
    background-image: url(@/assets/img/supplierSquare.svg);
    top: 55%;
    left: 23%;
    transform: translate(-23%, -55%);
    z-index: 2;
    background: linear-gradient(0deg, rgba(165, 200, 255, 0.11), rgba(165, 200, 255, 0.11)), #1b1b1d;

    background-blend-mode: screen;
}
.supplierSquares div:nth-child(3) {
    background-image: url(@/assets/img/supplierSquare.svg);
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
.logo {
    display: flex;
    width: 100%;
    max-width: 1080px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
}
@media only screen and (max-width: 768px) {
    .logo {
        justify-content: center;
        align-items: center;
    }
}
@media only screen and (max-width: 680px) {
    .supplierSquares div {
        max-width: 320px;
        height: 180px;
    }
    .supplierSquares h1 {
        font-size: 24px;
        line-height: 30px;
    }
    .supplierImage {
        height: 350px;
    }
    .supplierImage img:nth-child(1) {
        height: 100%;
        max-height: 350px;
        width: 400px;
    }
}
@media only screen and (max-width: 480px) {
    .supplierSquares div {
        max-width: 220px;
        height: 80px;
    }
    .supplierSquares h1 {
        width: 220px;
        font-size: 16px;
        line-height: 20px;
    }
}
@media only screen and (max-width: 280px) {
    .supplierSquares div {
        max-width: 160px;
        height: 60px;
    }
    .supplierSquares h1 {
        width: 160px;
        font-size: 12px;
        line-height: 16px;
    }
}
</style>
