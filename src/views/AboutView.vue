<template>
    <div class="about">
        <div class="aboutSupplier">
            <div class="aboutTitle">
                <div class="aboutLine">
                    <div>
                        <div class="titleLine"><img src="@/assets/img/whiteTriangle.png" alt="" /></div>
                    </div>
                </div>
                <div class="aboutText">
                    <span><h2>About Us</h2></span>
                </div>
            </div>
            <div class="aboutImage">
                <img src="@/assets/img/supplierImage.jpg" alt="" />
                <div class="whiteTriangle"><img src="@/assets/img/whiteTriangle.png" alt="" /></div>
            </div>
        </div>
        <div class="aboutContent">
            <div class="contentText">
                <span>
                    <p>
                        &nbsp;&nbsp; In the light of our 100% home production and always-positive stock principle; our team
                        contributes to the selection of the right product, solutions to the problems our customers face, and
                        assures the application and gives full support to our customer starting from the design phase of the
                        Project. Since we have a project-oriented point of view, we propose a strategic action plan and deliver on
                        time in the proper order. To do this, we design our production automation ourselves and invest
                        continuously.
                    </p>
                    <br />
                    <p>
                        &nbsp;&nbsp;Therefore, we both provide continuity reasonable prices to our customers. We do not compromise
                        on understanding, openness, transparency, trust, product project, and standard requirements, which are
                        based on our quality assurance system from supplier selection to packaging. By this means, while we keep
                        growing, we continue our production with the capacity of 20.000 tons/year in our Dilovası Factory, which
                        we established in 2011, and with the strength, we receive from our strong references, we contribute to the
                        economy of our country.
                    </p>
                </span>
            </div>
        </div>
        <div class="aboutStatus">
            <div>
                <div class="statusIcon"><span class="material-icons"> segment </span></div>
                <div>
                    <span class="statusTitle"><h4>Business Segments</h4></span>
                    <span class="statusText">
                        <span>• Exporter</span>
                        <span>• Manufactuer</span>
                    </span>
                </div>
            </div>
            <div>
                <div class="statusIcon"><span class="material-icons"> category </span></div>
                <div>
                    <span class="statusTitle"><h4>Categories</h4></span>
                    <span class="statusText">
                        <span>• Electric - Electronic</span>
                        <span>• Electrical Supplies -- Instrument</span>
                    </span>
                </div>
            </div>
            <div>
                <div class="statusIcon"><span class="material-icons"> card_membership </span></div>
                <div>
                    <span class="statusTitle"><h4>Certificates</h4></span>
                    <span class="statusText">
                        <span>• ISO9001</span>
                    </span>
                </div>
            </div>
            <div>
                <div class="statusIcon"><span class="material-icons"> branding_watermark </span></div>
                <div>
                    <span class="statusTitle"><h4>Brands</h4></span>
                    <span class="statusText">
                        <span>• CEMESAN</span>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {};
</script>
<style scoped>
.about {
    width: 100%;
    height: 100%;
    /* display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; */
}
.aboutSupplier {
    width: 100%;
    height: 225px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-end;
    overflow: hidden;
    position: relative;
}
.aboutTitle {
    width: 30%;
}
.aboutText {
    height: 150px;
    width: 100%;
    background-color: #005eb5;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.aboutText h2 {
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
.aboutLine {
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
.aboutImage {
    width: 70%;
    height: 225px;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.aboutImage img {
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

.aboutContent {
    max-height: 800px;
    height: 100%;
    width: 743px;
    margin: 0 auto;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    text-align: left;
}
.contentText {
    width: 90%;
    height: 100%;
    position: static;
    left: 192.5px;
    top: 0px;
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    letter-spacing: 0.5px;
    text-indent: 16px;
    color: #000000;
}
.aboutStatus {
    width: 743px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    margin-top: 50px;
}
.statusIcon {
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    height: 50px;
    width: 100%;
}
.aboutStatus div:nth-child(1) .statusIcon {
    color: #005eb5;
}
.aboutStatus div:nth-child(2) .statusIcon {
    color: #555f71;
}
.aboutStatus div:nth-child(3) .statusIcon {
    color: #6e5675;
}
.aboutStatus div:nth-child(4) .statusIcon {
    color: #005eb5;
}
.statusTitle {
    width: 150px;
    height: 24px;
    left: 192px;
    top: 426px;
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    align-items: center;
    justify-content: left;
    letter-spacing: 0.1px;
    color: #000000;
}
.statusText {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: left;
    text-align: left;
    width: 150px;
    height: 100%;
    max-height: 150px;
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.5px;
    color: #000000;
}
@media only screen and (max-width: 768px) {
    .aboutTitle {
        width: 400px;
    }
    .aboutImage {
        position: absolute;
    }
    .aboutTitle {
        z-index: 3;
        position: absolute;
        top: -50px;
        width: 100%;
    }
    .aboutImage {
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
    .aboutLine {
        background-color: transparent;
    }
    .aboutContent {
        width: 100%;
    }
    .contentText {
        width: 100%;
    }
    .contentText span p {
        width: 100%;
    }
    .aboutStatus {
        width: 100%;
    }
}
@media only screen and (max-width: 480px) {
    .aboutStatus {
        margin-top: 100px;
    }
}
</style>
