<template>
    <v-app>
        <app-navigation></app-navigation>

        <v-content transition="slide-x-transition">
            <router-view></router-view>
        </v-content>
    </v-app>
</template>

<script>
    import AppNavigation from './components/AppNavigation';

    export default {
        name: 'App',
        components: {
            AppNavigation
        }
        /*provide() {
            reload:this.reload
        },
        data() {
            return {
                isRouterAlive: true
            }
        },
        methods: {
            reload() {
                this.isRouterAlive = false
                this.$nextTick(()=> {
                    this.isRouterAlive = true
                })
            }
        }*/
    };
</script>

<style>
    html { font-size: 80% } div { font-size: 1rem; }
    body {font-family: Helvetica, Tahoma, Arial, "Microsoft YaHei", "Hiragino Sans GB", "WenQuanYi Micro Hei", sans-serif;}
</style>