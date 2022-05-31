<template>
    <div id="footer">
        <div class="footerMobil">
            <div class="footerMobilLogo"><img src="@/assets/img/ForieNetwork.png" alt="Forie Network" /></div>
            <div class="changeMobilLanguage">
                <select name="changeLanguage" id="language">
                    <option value="Turkey"><country-flag country="tr" size="small" />Turkey</option>
                    <option value="English"><country-flag country="en" size="small" />English</option>
                    <option value="Spanish"><country-flag country="sp" size="small" />Spanish</option>
                    <option value="Arabic"><country-flag country="ab" size="small" />Arabic</option>
                </select>
            </div>
        </div>
        <div class="footerLogo"><img src="@/assets/img/ForieNetwork.png" alt="Forie Network" /></div>
        <div class="footerText">
            <p>© 1997-2022 TURKISHEXPORTER.COM.TR | All Rights Reserved.</p>
            <p>
                This website belongs to Turkishexporter which is the largest export portal of Turkey. Due to its membership
                EUROTRAY METAL has been allocated. You can reach this member company from
                <router-link to="/">EUROTRAY METAL contact page</router-link> or call :
                <a href="tel:+90262 290 26 15">+90262 290 26 15</a>
            </p>
        </div>
        <div class="changeLanguage">
            <select name="changeLanguage" id="language">
                <option value="Turkey"><country-flag country="tr" size="small" />Turkey</option>
                <option value="English"><country-flag country="en" size="small" />English</option>
                <option value="Spanish"><country-flag country="sp" size="small" />Spanish</option>
                <option value="Arabic"><country-flag country="ab" size="small" />Arabic</option>
            </select>
        </div>
    </div>
</template>

<script>
export default {
    name: "FooterView",
    components: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#footer {
    width: 100%;
    height: 56px;
    background: #fff;
    position: realtive;
    bottom: 0;
    left: 0;
    text-align: center;
    justify-content: center;
    display: flex;
    box-sizing: border-box;
    flex-wrap: wrap;
    margin-top: 50px;
}
#footer div {
    border: 1px solid #ccc;
    /* background: #ac8d1e; */
}
#footer .footerLogo {
    width: 15%;
    display: flex;
    justify-content: center;
    align-items: center;
}
#footer .footerLogo img {
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
}
#footer .footerText {
    width: 65%;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.4px;
    color: #000000;
    mix-blend-mode: normal;
}
#footer .footerText a:nth-child(1) {
    color: #005eb5;
}
#footer .changeLanguage {
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
}
#footer .changeLanguage select,
#footer .changeMobilLanguage select {
    width: 60%;
    height: 30px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background: #fff;
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.4px;
    color: #000000;
    mix-blend-mode: normal;
}
.footerMobil {
    display: none;
}
@media only screen and (max-width: 475px) {
    #footer {
        height: 100%;
        flex-direction: column;
    }
    #footer div {
        border: none;
    }
    .footerLogo {
        display: none !important;
    }
    #footer .footerText {
        width: 100%;
    }
    .changeLanguage {
        display: none !important;
    }
    .footerMobil {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        align-content: center;
        border-bottom: none;
        border-right: none;
        border-left: none;
        height: 100px;
        border-top: 1px solid #ccc !important;
    }
    #footer .footerMobilLogo {
        width: 100%;
        height: 100%;

        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-self: center;
        align-items: center;
        align-content: center;
    }
    #footer .footerMobilLogo img {
        width: 100%;
        max-width: 100%;
    }
    #footer .changeMobilLanguage {
        width: 100%;
    }
    #footer .changeMobilLanguage select {
        width: 100%;
        max-width: 70%;
        height: 50px;
        border: none;
    }
}
</style>
