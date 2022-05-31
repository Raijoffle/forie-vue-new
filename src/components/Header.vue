<template>
    <div id="header">
        <div class="container">
            <div class="headerIcon">
                <img src="https://cdn.forie.com/storage/general/logo/forie-logo.svg" alt="" />
            </div>
            <div class="headerLinks">
                <div class="loginlink">
                    <router-link to="/login"> <span class="material-icons">verified_user</span> Log In</router-link>
                </div>
                <router-link to="/"> Home Page </router-link>
                <router-link to="/about"> About Us </router-link>
                <router-link to="/product"> Our Products </router-link>
                <router-link to="/contact"> Contact </router-link>
                <router-link class="myaccount" to="/requestforquotation"> Request For Quotation</router-link>
                <div class="accountModal">
                    <div>
                        <router-link to="/"> <span class="material-icons">person</span> My Page</router-link>
                    </div>
                    <div>
                        <router-link to="/"> <span class="material-icons">business_center</span> Company Managment</router-link>
                    </div>
                    <div>
                        <router-link to="/"> <span class="material-icons">mail</span> Message Center</router-link>
                    </div>
                    <div>
                        <router-link to="/"> <span class="material-icons">public</span> Request Center</router-link>
                    </div>
                    <div>
                        <router-link to="/"> <span class="material-icons">logout</span> Log Out</router-link>
                    </div>
                </div>
            </div>
            <div class="headerMobil">
                <span class="material-icons"> search </span>
                <span class="material-icons mobilMenuIcon" @click="openMobilMenuActive"> menu </span>
                <span class="material-icons mobilMenuClose"> close </span>
            </div>

            <div class="headerSearchAndLogin">
                <div class="headerSearch">
                    <span class="iconofsearch">
                        <span class="material-icons searchIcon" @click="targetSearch"> search </span></span
                    >
                    <input id="headerSearchInput" type="text" placeholder="Search..." />
                </div>
                <div class="headerAccount">
                    <div class="headerSignUp">
                        <div class="headerSignUpButton">
                            <router-link to="/login"
                                ><span class="material-icons verifiedUser">verified_user</span> Log in</router-link
                            >
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import $ from "jquery";
export default {
    name: "HeaderView",
    props: {},
    methods: {
        targetSearch() {
            document.getElementById("headerSearchInput").focus();
        },
        openMobilMenuActive() {
            const mobilMenuIcon = $(".mobilMenuIcon");
            const headerLinks = $(".headerLinks");
            const headerFixed = $("#header");

            mobilMenuIcon.click(() => {
                headerLinks.addClass("mobilMenu-active");
                $(".mobilMenuIcon").hide();
                $(".mobilMenuClose").show();
                headerFixed.addClass("headerFixed");
            });
            $(".mobilMenuClose").click(() => {
                headerLinks.removeClass("mobilMenu-active");
                $(".mobilMenuIcon").show();
                $(".mobilMenuClose").hide();
                headerFixed.removeClass("headerFixed");
            });
            $(".headerLinks a").click(() => {
                headerLinks.removeClass("mobilMenu-active");
                $(".mobilMenuIcon").show();
                $(".mobilMenuClose").hide();
                headerFixed.removeClass("headerFixed");
            });
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
    font-family: "DM Sans", sans-serif;
    font-style: normal;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.1px;
    font-weight: 500;
    text-decoration: none;
}
.headerSearchAndLogin {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    height: 56px;
}
.headerLinks {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    position: relative;
    width: 60%;
    margin: 4px 8px;
    float: left;
    top: 16px;
}
.headerLinks a {
    margin: 0px 8px;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
}
.headerLinks a span {
    font-size: 15px;
    margin-right: 10px;
}
.headerLinks a.router-link-exact-active {
    color: #005eb5;
}
#header {
    width: 100%;
    height: 56px;
    background: #fff;
    position: relative;
    top: 0;
    left: 0;
    text-align: center;
    justify-content: center;
    display: flex;
    box-sizing: border-box;
    z-index: 30;
}
.headerIcon {
    float: left;
    position: relative;
    box-sizing: border-box;
    align-items: center;
    display: flex;
    align-items: center;
    align-content: center;
    max-width: 200px;
    top: 50%;
    transform: translateY(-50%);
    z-index: 13;
}
.headerIcon img {
    max-height: 53px;
}
.headerSearch {
    position: relative;
    float: left;
    margin: 2px 8px;
    top: 6px;
    width: 170px;
    height: 40px;
    text-align: left;
    border-radius: 100px;
    background-color: #fdfbff;
}
.headerSearch input {
    position: relative;
    display: inline-block;
    width: 83%;
    margin: 0px auto;
    top: 12px;
    left: 12px;
    text-align: left;
    padding-left: 10px;
    background-color: #fdfbff;
    font-size: 13px;
}
.searchIcon {
    position: relative;
    width: 5%;
    float: left;
    top: 8px;
    left: 4px;
    color: #005eb5;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;
    z-index: 2;
}
#headerSearchInput::placeholder {
    font-family: "DM Sans", sans-serif;
    font-style: normal;
    font-weight: 400;
    color: #5d5e61;
    letter-spacing: 0.25px;
    font-size: 14px;
    line-height: 20px;
    text-align: left;
}
.headerAccount {
    width: 100px;
    height: 40px;
    float: right;
    margin-left: 0;
    display: flex;
}

/* .headerAccount a.router-link-exact-active {
    color: #a5c8ff;
} */
/* .headerSignUp a.router-link-exact-active {
    color: #005eb5;
} */
.verifiedUser {
    font-size: 14px;
    margin-right: 3px;
    margin-top: 5px;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;
}

.headerSignUp {
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 2.5rem;
    background: #005eb5;
    border-radius: 100px;
    flex: none;
    order: 2;
    flex-grow: 0;
    top: 8px;
}
.headerSignUpButton {
    color: #fff;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.1px;
    font-feature-settings: "liga" off;
}
.headerSignUpButton a {
    color: #fff;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
}
.headerMobil {
    color: #005eb5;
    position: relative;
    top: 16px;
    float: right;
    display: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;
    z-index: 31;
}
.mobilMenuClose {
    display: none;
    position: relative;
    left: 3%;
    z-index: 2;
}
.headerMobil span {
    margin: 0px 8px;
}
.headerFixed {
    position: fixed !important;
    z-index: 12;
}
.headerLinks .loginlink {
    display: none;
}
.headerLinks .loginlink a {
    color: #fff;
}
.accountModal {
    display: none;
}
@media only screen and (max-width: 1200px) {
    .headerLinks a {
        font-size: 12.5px;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -o-user-select: none;
        user-select: none;
    }
    .headerLinks {
        width: 54%;
    }
}
@media only screen and (max-width: 1024px) {
    .searchIcon {
        left: 0px;
        position: relative;
        z-index: 6;
    }

    .headerAccount {
        display: none;
    }

    .headerMobil {
        display: inline-block;
        cursor: pointer;
        position: relative;
        z-index: 6;
    }
    .headerSearch {
        display: none;
    }
    .headerLinks a {
        color: #fff;
        font-size: 18px;
        width: fixed;
        height: 25px;
        margin: 16px;
        opacity: 1;
    }
    .headerLinks {
        margin: 0;
        width: 100%;
        height: calc(100vh - 54px);
        top: 54px;
        position: fixed;
        float: left;
        flex-direction: column;
        background-color: #1b1b1d;
        justify-content: flex-start;
        align-items: flex-start;
        display: none;
        z-index: -6;
    }
    .mobilMenu-active {
        right: 0px;
        animation: linksFade 0.3s ease-out;
        display: flex;
        z-index: 5;
        opacity: 1;
        visibility: inherit;
    }
    @keyframes linksFade {
        from {
            opacity: 0;
            transform: translateX(50px);
        }
        to {
            opacity: 1;
            transform: translateX(0px);
        }
    }
    .headerLinks .loginlink {
        display: block;
    }
    .headerLinks .loginlink a {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .accountModal {
        display: block;
        background: linear-gradient(0deg, rgba(165, 200, 255, 0.08), rgba(165, 200, 255, 0.08)), #1b1b1d;
        border-radius: 4px;
    }
    .accountModal div a span {
        color: #a5c8ff;
        margin-right: 18px;
    }
    .accountModal div {
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }
}
@media only screen and (max-width: 768px) {
    .headerSearch {
        display: none;
    }
}
@media only screen and (max-width: 320px) {
    .accountModal {
        width: 100%;
    }
}
</style>
<style lang="scss">
.headerLinks a.router-link-exact-active {
    &::before {
        content: "○";
        line-height: 16px;
        font-size: 32px;
        box-sizing: border-box;
        padding-bottom: 5px;
    }
}
</style>
