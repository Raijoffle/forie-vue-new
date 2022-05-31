<template>
    <div class="request">
        <div class="requestSupplier">
            <div class="requestTitle">
                <div class="requestLine">
                    <div>
                        <div class="titleLine"><img src="@/assets/img/whiteTriangle.png" alt="" /></div>
                    </div>
                </div>
                <div class="requestText">
                    <span><h2>Request For Quotation</h2></span>
                </div>
            </div>
            <div class="requestImage">
                <img src="@/assets/img/supplierImage.jpg" alt="" />
                <div class="whiteTriangle"><img src="@/assets/img/whiteTriangle.png" alt="" /></div>
            </div>
        </div>
        <div class="requestForQuotationForm">
            <div><input type="text" placeholder="Name Surname" /></div>
            <div class="inputHalf">
                <div>
                    <input type="tel" id="phone" name="phone" placeholder="90-555-545-6178" required />
                </div>
                <div><input type="email" placeholder="info@forie.com" validation /></div>
            </div>
            <div>
                <select name="requestSelectCountry" id="requestSelectCountry">
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
            <div><textarea name="message" id="messagearea" cols="10" rows="10" placeholder="Message"></textarea></div>
        </div>
        <div class="agreement">
            <div>
                <span><input type="checkbox" id="agreement1" name="agreement1" value="agreement1" /></span>
                <span>
                    I would like to be informed of special promotions and news regarding Forie based on my personal interests and
                    give my consent as described in detail here.</span
                >
            </div>
            <div>
                <span><input type="checkbox" id="agreement2" name="agreement2" value="agreement2" /></span
                ><span>By clicking Sign Up, you confirm that you read and accept the Privacy Policy.</span>
            </div>
            <div>
                <span><input type="checkbox" id="agreement3" name="agreement3" value="agreement3" /></span
                ><span>
                    would like to activate the account and be informed of special promotions regarding Forie within the scope of
                    the Consent to Receiving Marketing Information.</span
                >
            </div>
        </div>
        <div class="formButton">
            <div class="attachBtn"><span class="material-icons">attach_file</span>Attach</div>
            <div class="sendBtn"><span>Send</span></div>
        </div>
    </div>
</template>
<script>
export default {};
</script>
<style scoped>
.request {
    width: 100%;
    height: 100%;
    /* display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; */
}
.requestSupplier {
    width: 100%;
    height: 225px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-end;
    overflow: hidden;
    position: relative;
}
.requestTitle {
    width: 30%;
}
.requestText {
    height: 150px;
    width: 100%;
    background-color: #005eb5;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.requestText h2 {
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
.requestLine {
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
.requestImage {
    width: 70%;
    height: 225px;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.requestImage img {
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
.requestForQuotationForm {
    margin: 0 auto;
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
}
.requestForQuotationForm div input,
.requestForQuotationForm div select {
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
.requestForQuotationForm div:nth-child(1) input[type="text"] {
    width: 570px;
}
.requestForQuotationForm div input::placeholder,
.requestForQuotationForm div select {
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
.requestForQuotationForm .inputShort input {
    margin-right: 24px;
}
.inputHalf {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
}
.inputHalf div {
    margin: 0px 30px;
}

.requestForQuotationForm div:nth-child(3),
.requestForQuotationForm div:nth-child(3) input,
.requestForQuotationForm div:nth-child(4),
.requestForQuotationForm div:nth-child(4) input,
.requestForQuotationForm div:nth-child(5),
.requestForQuotationForm div:nth-child(5) input,
.requestForQuotationForm div select {
    width: 570px;
}
.requestForQuotationForm div textarea {
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
.requestForQuotationForm div textarea ::placeholder {
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
.agreement {
    margin: 0 auto;
    width: 570px;
    height: 180px;
    display: flex;
    flex-direction: column;
}
.agreement div {
    width: 530px;
    height: 60px;
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.25px;
    color: #364153;
    text-align: left;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    position: relative;
}
.agreement div span:nth-child(1) {
    margin-right: 16px;
}
.formButton {
    width: 560px;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    margin-top: 50px;
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
@media only screen and (max-width: 768px) {
    .requestTitle {
        width: 400px;
    }
    .requestImage {
        position: absolute;
    }
    .requestTitle {
        z-index: 3;
        position: absolute;
        top: -50px;
        width: 100%;
    }
    .requestImage {
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
    .requestLine {
        background-color: transparent;
    }
    .requestContent {
        width: 100%;
    }
    .requestTitle {
        width: 100%;
    }

    /* ---------------------------------- */

    .inputHalf div,
    .inputHalf div input {
        margin: 6px 0px;
        width: 100%;
    }
    .inputHalf {
        flex-direction: column;
        width: 100%;
    }
    .requestForQuotationForm {
        flex-direction: column;
        align-content: center;
        width: 100%;
    }
    .requestForQuotationForm div:nth-child(1),
    .requestForQuotationForm div:nth-child(1) input[type="text"],
    .requestForQuotationForm div:nth-child(5),
    .requestForQuotationForm div:nth-child(3) select,
    .requestForQuotationForm div:nth-child(4) textarea,
    .requestForQuotationForm div:nth-child(4) {
        width: 100%;
    }
    .requestForQuotationForm div:nth-child(3) {
        width: 100%;
    }
    /* -------------------------------- */
    .agreement,
    .agreement div,
    .agreement div span:nth-child(2),
    .formButton {
        width: 100% !important;
        height: 100%;
    }
    .agreement div {
        margin: 6px 0px;
    }
}
@media only screen and (max-width: 375px) {
    .agreement div {
        margin: 8px 0px;
    }
}
</style>
