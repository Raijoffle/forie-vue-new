<template>
    <div class="product">
        <div class="productSupplier">
            <div class="productTitle">
                <div class="productLine">
                    <div>
                        <div class="titleLine"><img src="@/assets/img/whiteTriangle.png" alt="" /></div>
                    </div>
                </div>
                <div class="productText">
                    <span><h2>Our Product</h2></span>
                </div>
            </div>
            <div class="productImage">
                <img src="@/assets/img/supplierImage.jpg" alt="" />
                <div class="whiteTriangle"><img src="@/assets/img/whiteTriangle.png" alt="" /></div>
            </div>
        </div>
        <div class="productList">
            <div class="productDiv">
                <span class="productsImage"><img src="@/assets/img/Image1.png" alt="" /></span
                ><span class="productName">Cable Ladders</span>
            </div>
            <div class="productDiv">
                <span class="productsImage"><img src="@/assets/img/Image2.png" alt="" /></span
                ><span class="productName">Cable Trays</span>
            </div>
            <div class="productDiv">
                <span class="productsImage"><img src="@/assets/img/Image3.png" alt="" /></span
                ><span class="productName">Earthing Systems</span>
            </div>
            <div class="productDiv">
                <span class="productsImage"><img src="@/assets/img/Image4.png" alt="" /></span
                ><span class="productName">Electrical Installation Conduits</span>
            </div>
            <div class="productDiv">
                <span class="productsImage"><img src="@/assets/img/Image5.png" alt="" /></span
                ><span class="productName">Facade Fixing Systems</span>
            </div>
            <div class="productDiv">
                <span class="productsImage"><img src="@/assets/img/Image6.png" alt="" /></span
                ><span class="productName">Mechanical Support Systems</span>
            </div>
            <div class="productDiv">
                <span class="productsImage"><img src="@/assets/img/Image7.png" alt="" /></span
                ><span class="productName">Seismic Suspension Systems</span>
            </div>
            <div class="productDiv">
                <span class="productsImage"><img src="@/assets/img/Image8.png" alt="" /></span
                ><span class="productName">Solar Mounting Systems</span>
            </div>
            <div class="productDiv">
                <span class="productsImage"><img src="@/assets/img/Image9.png" alt="" /></span
                ><span class="productName">Underfloor Systems</span>
            </div>
            <div class="productDiv">
                <span class="productsImage"><img src="@/assets/img/Image10.png" alt="" /></span
                ><span class="productName">Wire Mesh Trays</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {};
</script>
<style scoped>
.product {
    width: 100%;
    height: 100%;
    /* display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; */
}
.productSupplier {
    width: 100%;
    height: 225px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-end;
    overflow: hidden;
    position: relative;
}
.productTitle {
    width: 30%;
}
.productText {
    height: 150px;
    width: 100%;
    background-color: #005eb5;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.productText h2 {
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 40px;
    display: flex;
    align-items: center;
    color: #ffffff;
    flex: none;
    order: 0;
    flex-grow: 1;
    margin: 0px 10px;
}
.productLine {
    width: calc(100% - 10%);
    height: 75px;
    background-color: #fff;
    position: relative;
    /* display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-end; */
}
.titleLine {
    width: 100%;
    height: 25px;
    background: linear-gradient(0deg, rgba(165, 200, 255, 0.14), rgba(165, 200, 255, 0.14)), #1b1b1d;
    position: absolute;
    bottom: 0;
}
.titleLine img {
    width: 25px;
    height: 25px;
    position: absolute;
    right: 0;
    top: 0;
    transform: rotate(270deg);
}
.productImage {
    width: 70%;
    height: 225px;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.productImage img {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
}
.whiteTriangle {
    position: absolute;
    width: 75px;
    height: 75px;
    z-index: 5;
    top: 0;
    left: 0;
}
.whiteTriangle img {
    /* background: #6e5675; */
    transform: rotate(180deg);
}
.productList {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: normal;
    align-items: center;

    margin-top: 26px;
}
.productDiv {
    width: 264px;
    height: 300px;
    margin: 24px 30px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    position: relative;
    box-sizing: border-box;
    background: #ffffff;
    border: 1px solid rgba(116, 119, 127, 0.08);
    border-radius: 12px;
    cursor: pointer;
}
.productDiv .productsImage img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    max-height: 300px;
    order: 1;
}
.productDiv .productName {
    position: static;
    width: 100%;
    height: 48px;
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.5px;
    color: #1b1b1d;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin: 0px 0px;
}
/* @media only screen and (max-width: 768px) {
    .productTitle {
        width: 400px;
    }
    .anoutImage {
        width: 892px;
    }
} */
@media only screen and (max-width: 1400px) {
    .productList {
        justify-content: center;
    }
}
@media only screen and (max-width: 768px) {
    .productTitle {
        width: 400px;
    }

    .productImage {
        position: absolute;
    }
    .productTitle {
        z-index: 3;
        position: absolute;
        top: -50px;
        width: 100%;
    }
    .productImage {
        width: 100%;
        top: 30px;
    }
    .whiteTriangle {
        bottom: 0 !important;
        right: 0 !important;
        top: auto;
        left: auto;
        transform: rotate(180deg);
    }
    .productLine {
        background-color: transparent;
    }
    .productContent {
        width: 100%;
    }
    .contentText {
        width: 100%;
    }
    .contentText span p {
        width: 100%;
    }
    .productStatus {
        width: 100%;
    }
}
</style>
