<template>
    <div class="notAuth">
        <div class="notAuthSupplier">
            <div class="notAuthTitle">
                <div class="notAuthLine">
                    <div>
                        <div class="titleLine"><img src="@/assets/img/whiteTriangle.png" alt="" /></div>
                    </div>
                </div>
                <div class="notAuthText">
                    <span><h2>You are not authorized to access.</h2></span>
                </div>
            </div>
            <div class="notAuthImage">
                <img src="@/assets/img/supplierImage.jpg" alt="" />
                <div class="whiteTriangle"><img src="@/assets/img/whiteTriangle.png" alt="" /></div>
            </div>
        </div>
        <div class="pageLinksText">You can browse the following pages.</div>
        <div class="pageLinks">
            <div>
                <div><span class="material-icons">home</span><span>HomePage</span> <span>Go</span></div>
            </div>
            <div>
                <div><span class="material-icons">business</span><span>About</span> <span>Read</span></div>
            </div>
            <div>
                <div><span class="material-icons">shopping_cart</span><span>Products</span> <span>Review</span></div>
            </div>
            <div>
                <div><span class="material-icons">phone</span> <span>Contact</span> <span>Call</span></div>
            </div>
        </div>
        <div class="errorPageProducts">
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
            </div>
            <div class="allProducts"><span>All Products</span></div>
        </div>
    </div>
</template>
<script>
export default {};
</script>
<style scoped>
.notAuth {
    width: 100%;
    height: 100%;
}
.notAuthSupplier {
    width: 100%;
    height: 225px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-end;
    overflow: hidden;
}
.notAuthTitle {
    width: 30%;
}
.notAuthText {
    height: 150px;
    width: 100%;
    background-color: #005eb5;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.notAuthText h2 {
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
    text-align: left;
}
.notAuthLine {
    width: calc(100% - 10%);
    height: 75px;
    background-color: #fff;
    position: relative;
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
.notAuthImage {
    width: 70%;
    height: 225px;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.notAuthImage img {
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
    transform: rotate(180deg);
}
.pageLinksText {
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 28px;
    text-align: center;
    font-feature-settings: "liga" off;
    color: #323231;
    margin: 24px 0px;
}
.pageLinks {
    /* margin-top: 25px; */
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
}
.pageLinks div {
    height: 180px;
    width: 115px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    cursor: pointer;
    transition: all 0.3s ease;
}
.pageLinks div:hover {
    box-shadow: 0px 0px 10px #ebf1ff;
}
.pageLinks div span:nth-child(1) {
    background-color: #ebf1ff;
    width: 100px;
    height: 100px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: #005eb5;
    border-radius: 100px;
}
.pageLinks div span:nth-child(2) {
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 28px;
    text-align: center;
    font-feature-settings: "liga" off;
    color: #000000;
}
.pageLinks div span:nth-child(3) {
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    letter-spacing: 0.25px;
    color: #1277db;
}
.errorPageProducts {
    margin-top: 50px;
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
    transition: all 0.3s ease;
    cursor: pointer;
}
.productDiv:hover {
    box-shadow: 0px 0px 10px rgba(116, 119, 127, 0.2);
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
.allProducts {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
}
.allProducts span {
    width: 128px;
    height: 48px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 12px 16px;
    border: 2px solid #6e5675;
    border-radius: 8px;
    margin: 0px 0px;
    cursor: pointer;
    transition: all 0.3s ease;
}
.allProducts span:hover {
    box-shadow: 0px 0px 10px rgb(110, 86, 117, 0.5);
}
@media only screen and (max-width: 1920px) {
}
@media only screen and (max-width: 1200px) {
}
@media only screen and (max-width: 768px) {
    .notAuthTitle {
        width: 400px;
    }
    .anoutImage {
        width: 892px;
    }
}
</style>
