<template>
    <v-container>
        <v-layout column fluid>
            <v-flex xs12 md6 lg6>
                <v-toolbar color="light-blue darken-4" dark>
                    <v-toolbar-side-icon></v-toolbar-side-icon>
                    <v-toolbar-title>文章内容</v-toolbar-title>

                    <v-spacer></v-spacer>

                    <v-btn icon>
                        <v-icon>search</v-icon>
                    </v-btn>
                </v-toolbar>
            </v-flex>
            <v-flex xs12 md6 lg6>
                <v-card>
                    <v-card-title>
                        <div><span class="headline">{{ title }}</span></div>
                    </v-card-title>
                    <v-card-media>
                        <div>
                            <span class="v-subheader">{{ editor }}</span>
                            <span class="v-subheader">{{ createTime.slice(0,-14) }}</span>
                        </div>
                    </v-card-media>
                    <v-card-text v-html="content">
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import api from "../api";

export default {
    data: () => ({
        title:'',
        createTime:'',
        type:'',
        content:'',
        editor:'',
        tags:'',
        media:[]
    }),
    created () {
        this.initialize()
    },
    methods: {
        initialize() {
            api.request('get','/articles/' + this.$route.query._id, {
            }).then(response => {
                if(response.status == 200){
                    this.title = response.data.title
                    this.createTime = response.data.createTime
                    this.type = response.data.type
                    this.content = response.data.content
                    this.editor = response.data.editor
                    this.tags = response.data.tags
                    this.media = response.data.media
                }else{
                    alert("找不到您要查看的文章")
                }
            })
        }
    }
}
</script>