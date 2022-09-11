<template>
    <div>
        <!-- chnage this to v-toolbar -->
        <v-navigation-drawer
            fixed
            clipped
            app
            v-model="navBar"
            class="navdrawer, application theme--light"
            data-app="true"
        >
            <v-list dense class="pt-0">
                <router-link
                    to="/"
                    class="btn--active btn btn--flat btn--router"
                >
                    <v-list-tile>
                        <v-list-tile-action>
                            <v-icon>dashboard</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>Home</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </router-link>
                <router-link
                    to="/Gallery"
                    class="btn--active btn btn--flat btn--router"
                >
                    <v-list-tile>
                        <v-list-tile-action>
                            <v-icon>dashboard</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>Gallery</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </router-link>
                <router-link
                    to="/Miners"
                    class="btn--active btn btn--flat btn--router"
                >
                    <v-list-tile>
                        <v-list-tile-action>
                            <v-icon>dashboard</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>Miners</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </router-link>
                <router-link
                    to="/ConnectWallet"
                    class="btn--active btn btn--flat btn--router"
                >
                    <v-list-tile>
                        <v-list-tile-action>
                            <v-icon>dashboard</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>Wallet</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </router-link>
                <router-link
                    to="/About"
                    class="btn--active btn btn--flat btn--router"
                >
                    <v-list-tile>
                        <v-list-tile-action>
                            <v-icon>dashboard</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>About</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </router-link>

                <router-link
                    to="/Signin"
                    v-if="!logined"
                    class="btn--active btn btn--flat btn--router"
                >
                    <v-list-tile>
                        <v-list-tile-action>
                            <v-icon>dashboard</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                            <v-list-tile-title>Signin</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </router-link>
            </v-list>
        </v-navigation-drawer>

        <v-toolbar
            app
            data-app="true"
            data-booted="true"
            class="cyanBlue toolbar theme--dark"
            style="
                margin-top: 0px;
                padding-right: 0px;
                padding-left: 0px;
                transform: translateY(0px);
            "
        >
            <v-toolbar-side-icon
                @click.stop="updateNaviBar"
            ></v-toolbar-side-icon>
            <v-toolbar-title class="toolbar__title">
                <span>Seikatsu</span>
            </v-toolbar-title>
            <v-spacer class="spacer"></v-spacer>
            <v-toolbar-items
                class="hidden-sm-and-down v-toolbar__content"
                style="height: 64px"
            >
                <a
                    href="https://twitter.com/Stacked_Toadz"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-white hover:text-blue-200 sm:px-3 sm:py-2 social px-2 py-1 flex items-center justify-center"
                    ><span class="sr-only">Twitter</span
                    ><svg
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        class="sm:h-8 sm:w-8 w-5 h-5"
                    >
                        <path
                            d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                        ></path></svg></a
                ><a
                    href="https://discord.gg/stackedtoadz"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-white hover:text-blue-200 sm:px-3 sm:py-2 social px-2 py-1 flex items-center justify-center"
                    ><span class="sr-only">Discord</span
                    ><svg
                        fill="currentColor"
                        width="30pt"
                        height="24pt"
                        viewBox="0 0 30 24"
                        aria-hidden="true"
                        class="sm:h-8 sm:w-8 w-5 h-5"
                    >
                        <g id="surface1">
                            <path
                                d="M 25.394531 2.136719 C 23.484375 1.230469 21.433594 0.5625 19.289062 0.179688 C 19.25 0.175781 19.210938 0.191406 19.191406 0.230469 C 18.929688 0.714844 18.636719 1.34375 18.429688 1.84375 C 16.125 1.484375 13.832031 1.484375 11.574219 1.84375 C 11.367188 1.335938 11.066406 0.714844 10.800781 0.230469 C 10.78125 0.195312 10.742188 0.175781 10.703125 0.179688 C 8.558594 0.5625 6.507812 1.230469 4.597656 2.136719 C 4.578125 2.144531 4.566406 2.15625 4.554688 2.171875 C 0.667969 8.171875 -0.398438 14.027344 0.125 19.808594 C 0.125 19.835938 0.140625 19.863281 0.164062 19.878906 C 2.730469 21.824219 5.214844 23.007812 7.652344 23.789062 C 7.691406 23.800781 7.734375 23.789062 7.757812 23.753906 C 8.335938 22.941406 8.851562 22.082031 9.292969 21.179688 C 9.316406 21.128906 9.292969 21.066406 9.238281 21.042969 C 8.425781 20.722656 7.648438 20.335938 6.898438 19.890625 C 6.839844 19.855469 6.835938 19.769531 6.890625 19.726562 C 7.046875 19.605469 7.203125 19.480469 7.355469 19.351562 C 7.382812 19.328125 7.421875 19.324219 7.453125 19.335938 C 12.363281 21.652344 17.675781 21.652344 22.527344 19.335938 C 22.5625 19.320312 22.597656 19.328125 22.625 19.351562 C 22.777344 19.476562 22.933594 19.605469 23.09375 19.726562 C 23.148438 19.769531 23.144531 19.855469 23.085938 19.890625 C 22.335938 20.34375 21.558594 20.722656 20.742188 21.042969 C 20.691406 21.0625 20.667969 21.128906 20.691406 21.179688 C 21.144531 22.082031 21.65625 22.941406 22.222656 23.753906 C 22.246094 23.789062 22.289062 23.800781 22.328125 23.789062 C 24.78125 23.007812 27.265625 21.824219 29.832031 19.878906 C 29.855469 19.863281 29.867188 19.835938 29.871094 19.808594 C 30.496094 13.125 28.824219 7.320312 25.433594 2.175781 C 25.425781 2.15625 25.414062 2.144531 25.394531 2.136719 Z M 10.023438 16.289062 C 8.546875 16.289062 7.328125 14.886719 7.328125 13.164062 C 7.328125 11.445312 8.523438 10.042969 10.023438 10.042969 C 11.539062 10.042969 12.746094 11.457031 12.722656 13.164062 C 12.722656 14.886719 11.527344 16.289062 10.023438 16.289062 Z M 19.992188 16.289062 C 18.515625 16.289062 17.296875 14.886719 17.296875 13.164062 C 17.296875 11.445312 18.492188 10.042969 19.992188 10.042969 C 21.507812 10.042969 22.714844 11.457031 22.691406 13.164062 C 22.691406 14.886719 21.507812 16.289062 19.992188 16.289062 Z M 19.992188 16.289062 "
                            ></path>
                        </g></svg></a
                ><a
                    href="https://etherscan.io/address/0x099A16F0414CB0Cc0555d5f1f8140166462D39Ff#writeContract"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-white hover:text-blue-200 sm:px-3 sm:py-2 social px-2 py-1 flex items-center justify-center"
                    ><span class="sr-only">Etherscan</span
                    ><svg
                        fill="currentColor"
                        width="24pt"
                        height="24pt"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        class="sm:h-8 sm:w-8 w-5 h-5"
                    >
                        <g id="surface1">
                            <path
                                d="M 4.984375 10.9375 C 4.984375 10.679688 5.089844 10.429688 5.285156 10.246094 C 5.476562 10.066406 5.734375 9.960938 6.003906 9.964844 L 7.699219 9.96875 C 8.261719 9.96875 8.714844 10.40625 8.714844 10.945312 L 8.714844 17.078125 C 8.90625 17.023438 9.152344 16.96875 9.417969 16.90625 C 9.800781 16.820312 10.074219 16.492188 10.074219 16.117188 L 10.074219 8.507812 C 10.074219 7.96875 10.527344 7.53125 11.089844 7.53125 L 12.785156 7.53125 C 13.347656 7.53125 13.804688 7.96875 13.804688 8.507812 L 13.804688 15.570312 C 13.804688 15.570312 14.230469 15.40625 14.644531 15.238281 C 14.957031 15.109375 15.160156 14.816406 15.160156 14.488281 L 15.160156 6.066406 C 15.160156 5.53125 15.617188 5.09375 16.179688 5.09375 L 17.875 5.09375 C 18.4375 5.09375 18.894531 5.53125 18.894531 6.066406 L 18.894531 13 C 20.363281 11.980469 21.855469 10.75 23.035156 9.273438 C 23.386719 8.839844 23.484375 8.265625 23.296875 7.746094 C 21.65625 3.167969 17.191406 0.0664062 12.140625 0 C 5.492188 -0.0859375 0 5.117188 0 11.488281 C -0.0078125 13.503906 0.542969 15.484375 1.59375 17.234375 C 1.886719 17.722656 2.449219 18 3.039062 17.953125 C 3.359375 17.925781 3.757812 17.886719 4.234375 17.832031 C 4.660156 17.785156 4.984375 17.4375 4.984375 17.027344 L 4.984375 10.9375 "
                            ></path>
                            <path
                                d="M 4.945312 20.777344 C 8.59375 23.316406 13.417969 23.683594 17.4375 21.722656 C 21.453125 19.761719 23.980469 15.808594 23.980469 11.488281 C 23.980469 11.222656 23.96875 10.960938 23.949219 10.699219 C 19.570312 16.960938 11.484375 19.886719 4.945312 20.777344 "
                            ></path>
                        </g></svg></a
                ><a
                    href="https://opensea.io/collection/stackedtoadz"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-white hover:text-blue-200 sm:px-3 sm:py-2 social px-2 py-1 flex items-center justify-center"
                    ><span class="sr-only">Opensea</span
                    ><svg
                        fill="currentColor"
                        width="24pt"
                        height="24pt"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        class="sm:h-8 sm:w-8 w-5 h-5"
                    >
                        <g id="surface1">
                            <path
                                d="M 12 0 C 5.375 0 0 5.375 0 12 C 0 18.625 5.375 24 12 24 C 18.625 24 24 18.625 24 12 C 24 5.375 18.628906 0 12 0 Z M 5.921875 12.402344 L 5.972656 12.320312 L 9.09375 7.4375 C 9.140625 7.367188 9.246094 7.375 9.28125 7.453125 C 9.800781 8.621094 10.253906 10.074219 10.042969 10.980469 C 9.953125 11.351562 9.707031 11.855469 9.425781 12.320312 C 9.390625 12.390625 9.351562 12.457031 9.308594 12.519531 C 9.289062 12.550781 9.257812 12.566406 9.222656 12.566406 L 6.011719 12.566406 C 5.925781 12.566406 5.875 12.472656 5.921875 12.402344 Z M 19.832031 14.082031 C 19.832031 14.128906 19.808594 14.167969 19.769531 14.183594 C 19.527344 14.289062 18.699219 14.667969 18.355469 15.144531 C 17.476562 16.367188 16.808594 18.113281 15.308594 18.113281 L 9.054688 18.113281 C 6.835938 18.113281 5.039062 16.3125 5.039062 14.089844 L 5.039062 14.015625 C 5.039062 13.957031 5.089844 13.910156 5.148438 13.910156 L 8.632812 13.910156 C 8.703125 13.910156 8.753906 13.972656 8.746094 14.042969 C 8.722656 14.269531 8.765625 14.5 8.871094 14.710938 C 9.078125 15.132812 9.507812 15.394531 9.972656 15.394531 L 11.699219 15.394531 L 11.699219 14.046875 L 9.992188 14.046875 C 9.90625 14.046875 9.851562 13.945312 9.902344 13.875 C 9.921875 13.84375 9.941406 13.816406 9.964844 13.78125 C 10.125 13.554688 10.355469 13.199219 10.585938 12.792969 C 10.742188 12.519531 10.894531 12.226562 11.015625 11.933594 C 11.039062 11.878906 11.058594 11.824219 11.082031 11.773438 C 11.113281 11.679688 11.148438 11.589844 11.171875 11.503906 C 11.195312 11.429688 11.21875 11.351562 11.238281 11.28125 C 11.292969 11.03125 11.320312 10.765625 11.320312 10.492188 C 11.320312 10.386719 11.3125 10.273438 11.304688 10.167969 C 11.300781 10.046875 11.285156 9.929688 11.269531 9.8125 C 11.261719 9.710938 11.242188 9.605469 11.222656 9.5 C 11.195312 9.34375 11.164062 9.191406 11.125 9.035156 L 11.109375 8.972656 C 11.082031 8.867188 11.054688 8.765625 11.019531 8.65625 C 10.921875 8.320312 10.8125 7.992188 10.691406 7.683594 C 10.648438 7.5625 10.601562 7.445312 10.550781 7.328125 C 10.476562 7.152344 10.402344 6.992188 10.335938 6.839844 C 10.300781 6.769531 10.273438 6.707031 10.242188 6.644531 C 10.210938 6.570312 10.175781 6.5 10.140625 6.429688 C 10.117188 6.375 10.085938 6.328125 10.066406 6.277344 L 9.855469 5.890625 C 9.828125 5.835938 9.875 5.773438 9.933594 5.789062 L 11.253906 6.144531 L 11.257812 6.144531 C 11.261719 6.144531 11.261719 6.144531 11.261719 6.144531 L 11.4375 6.195312 L 11.628906 6.25 L 11.699219 6.269531 L 11.699219 5.488281 C 11.699219 5.105469 12 4.800781 12.375 4.800781 C 12.5625 4.800781 12.734375 4.875 12.855469 5 C 12.976562 5.125 13.054688 5.296875 13.054688 5.488281 L 13.054688 6.652344 L 13.195312 6.6875 C 13.203125 6.695312 13.21875 6.699219 13.226562 6.707031 C 13.261719 6.730469 13.308594 6.769531 13.371094 6.816406 C 13.421875 6.855469 13.476562 6.902344 13.539062 6.953125 C 13.664062 7.054688 13.820312 7.1875 13.984375 7.339844 C 14.027344 7.378906 14.070312 7.414062 14.113281 7.457031 C 14.324219 7.65625 14.566406 7.890625 14.796875 8.148438 C 14.859375 8.222656 14.921875 8.292969 14.988281 8.375 C 15.050781 8.453125 15.121094 8.53125 15.175781 8.605469 C 15.257812 8.710938 15.339844 8.816406 15.414062 8.929688 C 15.445312 8.984375 15.488281 9.039062 15.519531 9.089844 C 15.613281 9.234375 15.695312 9.378906 15.773438 9.527344 C 15.808594 9.59375 15.84375 9.667969 15.871094 9.738281 C 15.960938 9.9375 16.03125 10.136719 16.074219 10.335938 C 16.085938 10.378906 16.097656 10.425781 16.101562 10.46875 L 16.101562 10.476562 C 16.117188 10.535156 16.121094 10.597656 16.125 10.664062 C 16.144531 10.867188 16.136719 11.074219 16.09375 11.28125 C 16.074219 11.367188 16.046875 11.449219 16.019531 11.535156 C 15.988281 11.621094 15.960938 11.707031 15.921875 11.792969 C 15.847656 11.960938 15.761719 12.132812 15.65625 12.292969 C 15.625 12.351562 15.582031 12.414062 15.542969 12.476562 C 15.5 12.539062 15.457031 12.597656 15.417969 12.65625 C 15.363281 12.730469 15.304688 12.804688 15.246094 12.875 C 15.191406 12.949219 15.140625 13.019531 15.078125 13.085938 C 14.996094 13.183594 14.917969 13.273438 14.835938 13.363281 C 14.785156 13.421875 14.734375 13.480469 14.679688 13.535156 C 14.625 13.59375 14.570312 13.644531 14.523438 13.695312 C 14.4375 13.777344 14.371094 13.839844 14.3125 13.894531 L 14.175781 14.019531 C 14.15625 14.039062 14.132812 14.046875 14.105469 14.046875 L 13.054688 14.046875 L 13.054688 15.394531 L 14.375 15.394531 C 14.671875 15.394531 14.953125 15.289062 15.179688 15.097656 C 15.257812 15.027344 15.59375 14.734375 15.996094 14.292969 C 16.011719 14.277344 16.027344 14.269531 16.046875 14.261719 L 19.695312 13.207031 C 19.765625 13.1875 19.832031 13.238281 19.832031 13.308594 Z M 19.832031 14.082031 "
                            ></path>
                        </g></svg
                ></a>
                <router-link
                    to="/"
                    class="btn--active btn btn--flat btn--router"
                    style="position: relative"
                    ><v-btn flat style="color: white">Home</v-btn></router-link
                >
                <router-link
                    to="/Gallery"
                    class="btn--active btn btn--flat btn--router"
                    style="position: relative"
                >
                    <v-btn flat style="color: white"
                        >Gallery<i
                            aria-hidden="true"
                            class="icon icon--right theme--dark material-icons"
                            >palette</i
                        ></v-btn
                    ></router-link
                >
                <router-link
                    to="/Miners"
                    class="btn--active btn btn--flat btn--router"
                    style="position: relative"
                >
                    <v-btn flat style="color: white"
                        >Miners<i
                            aria-hidden="true"
                            class="icon icon--right theme--dark material-icons"
                            >gavel</i
                        ></v-btn
                    ></router-link
                >
                <router-link
                    to="/About"
                    class="btn--active btn btn--flat btn--router"
                    style="position: relative"
                >
                    <v-btn flat style="color: white"
                        >About<i
                            aria-hidden="true"
                            class="icon icon--right theme--dark material-icons"
                            >help_outline</i
                        ></v-btn
                    ></router-link
                >
                <div id="demo">
                    <!--close init connect-->
                    <vue-metamask
                        ref="metamask"
                        :initConnect="false"
                    ></vue-metamask>

                    <!--click button call Init-->
                    <v-btn v-on:click="connectWallet">Connect Wallet</v-btn>
                </div>
            </v-toolbar-items>
        </v-toolbar>

        <v-content style="padding: 0px">
            <router-view v-if="loaded" />
        </v-content>
    </div>
</template>

<script>
import VueMetamask from "vue-metamask";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/messaging";

import firebaseConfig from "@/firebase/firebase";

import store from "@/store/index.js";

export default {
    name: "Header",
    data() {
        return {
            navBar: false,
        };
    },
    components: {
        VueMetamask,
    },
    created() {
        firebase.initializeApp(firebaseConfig);

        // for messaging
        if (firebase.messaging.isSupported() && firebaseConfig.messageKey) {
            const messaging = firebase.messaging();
            messaging.usePublicVapidKey(firebaseConfig.messageKey);

            // Request Permission of Notifications
            messaging
                .requestPermission()
                .then(() => {
                    console.log("Notification permission granted.");

                    // Get Token
                    messaging.getToken().then((token) => {
                        console.log(token);
                    });
                })
                .catch((err) => {
                    console.log("Unable to get permission to notify.", err);
                });
        }
        store.dispatch("setUser", {});
    },
    computed: {
        logined() {
            return !!this.$store.getters.getUser;
        },
        loaded() {
            return !this.$store.getters.getUserLoading;
        },
    },
    methods: {
        updateNaviBar: function () {
            this.navBar = !this.navBar;
        },
        connectWallet() {
            this.$refs.metamask.init();
        },
    },
};
</script>

<style>
.w-5 {
    width: 1.25rem;
}
.h-5 {
    height: 1.25rem;
}
.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
}
svg {
    color: white;
    fill: currentColor;
}
.mr-1 {
    margin-right: 0.25rem;
}
.sm\:px-3 {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
}
.sm\:py-2 {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
}
.social {
    margin-left: 20px;
    display: flex;
}
</style>
