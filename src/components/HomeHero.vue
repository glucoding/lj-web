<template>
    <v-container fluid fill-height class="home-hero" style="max-height: 100vh;">
        <v-layout justify-center align-center column pa-5>
            <!--<div class="display-3 font-weight-black white--text text-xs-center">丽江市中小企业金融服务平台</div>
            <div class="display-2 font-weight-black red--text text-xs-center mb-3">Lijiang SME Finance Service Platform</div>
            <div class="display-1 font-weight-bold white--text text-xs-center">丽江市工信委、丽江市金融办</div>
            <v-btn fab class="mt-5 brown darken-4">
                <v-icon large color="white">expand_more</v-icon>
            </v-btn>-->
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        name: 'HomeHero'
    };
</script>

<style scoped>
    .home-hero {
        background: url('../assets/back.jpg');
        background-size: contain;
        width: 100%;
        height: 100%;
    }
</style>