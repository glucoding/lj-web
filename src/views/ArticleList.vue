<template>
<v-container fluid fill-height class="home-hero" style="max-height: 100vh;">
    <v-layout row >
        <v-flex xs12 sm6 offset-sm3 pa-5>
            <v-card>
                <v-toolbar color="light-blue darken-4" dark>
                    <v-toolbar-side-icon></v-toolbar-side-icon>

                    <v-toolbar-title>{{cat}}</v-toolbar-title>

                    <v-spacer></v-spacer>

                    <v-btn icon>
                        <v-icon>search</v-icon>
                    </v-btn>
                </v-toolbar>

                <v-list two-line>
                    <template v-for="(item, index) in articles">
                        <!--<v-subheader
                                v-if="item.header"
                                :key="item.header"
                        >
                            {{ item.header }}
                        </v-subheader>-->

                        <v-divider
                        ></v-divider>

                        <v-list-tile
                                :key="item.title"
                                @click="openArticle(item)"
                        >
                            <!--<v-list-tile-avatar>
                                <img :src="item.avatar">
                            </v-list-tile-avatar>-->

                            <v-list-tile-content>
                                <v-list-tile-title v-html="item.title"></v-list-tile-title>
                                <v-list-tile-sub-title v-html="item.editor + '\xa0\xa0\xa0' + item.createTime.slice(0,-14)"></v-list-tile-sub-title>
                            </v-list-tile-content>
                        </v-list-tile>
                    </template>
                </v-list>
            </v-card>
        </v-flex>
    </v-layout>
    </v-container>
</template>

<script>
    import api from "../api";

    export default {
        data: () => ({
            articles:[],
            cat: ""
        }),
        created () {
            this.initialize()
        },
        methods: {
            initialize() {
                this.cat = this.$route.query.cat
                api.request('get','/articlesByType/'+ this.$route.query.cat, {
                }).then(response => {
                    if(response.status == 200){
                        this.articles = response.data;
                    }else{
                        alert("找不到您要查看的文章")
                    }
                })
            },
            openArticle(item) {
                this.$router.push({path:'/article',query: {_id: item._id}})
            }
        },
        watch: {
            // 如果路由有变化，会再次执行该方法
            "$route": "initialize"
        }
    }
</script>

<style scoped>
    .home-hero {
        background: url('../assets/background5.jpg');
        background-size: cover;
        width: 100%;
        height: 100%;
    }
</style>