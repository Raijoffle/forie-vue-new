<template>
    <div class="contact">
        <div class="contactSupplier">
            <div class="contactTitle">
                <div class="contactLine">
                    <div>
                        <div class="titleLine"><img src="@/assets/img/whiteTriangle.png" alt="" /></div>
                    </div>
                </div>
                <div class="contactText">
                    <span><h2>Contact</h2></span>
                </div>
            </div>
            <div class="contactImage">
                <img src="@/assets/img/supplierImage.jpg" alt="" />
                <div class="whiteTriangle"><img src="@/assets/img/whiteTriangle.png" alt="" /></div>
            </div>
        </div>
        <div class="contactFormDiv">
            <div class="contactUserData">
                <div class="userData">
                    <div>Authorized Person <span>Eser KAYA</span></div>
                    <div>Addres<span>Şekerpınar Mah. Ece Sk. No: 3, Gebze, Kocaeli, Turkey</span></div>
                    <div>Phone<span>+90 262 290 26 15</span></div>
                </div>
                <div class="contactMap">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1020.8679793430531!2d32.495572703049696!3d37.88865821081736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d08fa3eb531243%3A0x5201a4aa27e4506c!2zU0VPIFV6bWFuxLEgfCBXZWIgVGFzYXLEsW0gfCBXZWIgR2VsacWfdGlybWUgfCBTRU8!5e0!3m2!1str!2str!4v1652098040974!5m2!1str!2str"
                        width="400"
                        height="300"
                        style="border: 0"
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
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
export default {};
</script>
<style scoped>
.contact {
    width: 100%;
    height: 100%;
    align-items: center;
}
.contactSupplier {
    width: 100%;
    height: 225px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-end;
    overflow: hidden;
    position: relative;
}
.contactTitle {
    width: 30%;
}
.contactText {
    height: 150px;
    width: 100%;
    background-color: #005eb5;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.contactText h2 {
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
.contactLine {
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
.contactImage {
    width: 70%;
    height: 225px;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.contactImage img {
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
.contactFormDiv {
    margin-top: 40px;
    margin-bottom: 120px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
}
.contactUserData div {
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 28px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    color: #005eb5;
    margin: 4px 0px;
}
.contactUserData div span {
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
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: right;
    flex-wrap: wrap;
}
.inputShort {
    display: flex;
}
.inputLong div:nth-child(2),
.inputLong div:nth-child(2) input {
    width: 100%;
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
.contactForm .inputShort input {
    margin-right: 24px;
}

.contactForm div:nth-child(3),
.contactForm div:nth-child(3) input,
.contactForm div:nth-child(4),
.contactForm div:nth-child(4) input,
.contactForm div:nth-child(5),
.contactForm div:nth-child(5) input,
.contactForm div:nth-child(2) select {
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
.contactMap {
    margin-top: 50px !important;
}
.formButton {
    /* width: 560px; */
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
.formSingle {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap;
}
.formSingle div:nth-child(1) {
    margin-right: 50px;
}
@media only screen and (max-width: 1920px) {
    .contactMap {
        display: none !important;
    }
}
@media only screen and (max-width: 1200px) {
    .contactMap {
        display: block !important;
    }
}
@media only screen and (max-width: 1024px) {
    .contactFormDiv {
        justify-content: center;
    }
    .formSingle {
        flex-wrap: wrap;
    }
    .formSingle div:nth-child(1) {
        margin-right: 0px;
    }
    .formSingle div {
        width: 300px;
    }
    .formSingle div input {
        width: 300px;
    }
    .contactForm div select,
    .contactForm div textarea,
    .formSubject input,
    .formSubject,
    .contactForm div:nth-child(4) {
        width: 300px !important;
    }
    .formButton {
        width: 300px !important;
    }
}
@media only screen and (max-width: 975px) {
    .contactUserData {
        width: 100%;
    }
    .userData div,
    .userData div span {
        width: 100%;
    }
    .formSingle div,
    .formSingle div input,
    .contactForm,
    .contactForm div input,
    .contactForm div select,
    .contactForm div:nth-child(4) textarea,
    .contactForm div:nth-child(4),
    .contactForm div:nth-child(2),
    .contactForm div:nth-child(2) select,
    .contactForm div:nth-child(1),
    .formSubject {
        width: 100% !important;
    }
    .formButton {
        height: 90px;
        width: 100% !important;
    }
    .formButton div[data-v-13b6e01b] {
        width: 80px !important;
    }
}
@media only screen and (max-width: 768px) {
    .contactTitle {
        width: 400px;
    }
    .contactImage {
        position: absolute;
    }
    .contactTitle {
        z-index: 3;
        position: absolute;
        top: -50px;
        width: 100%;
    }
    .contactImage {
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
    .contactLine {
        background-color: transparent;
    }
    .contactContent {
        width: 100%;
    }
    .contactTitle {
        width: 100%;
    }
    .anoutImage {
        width: 892px;
    }
    .contactMap {
        display: none !important;
    }
}
</style>
