<template>
    <v-layout fluid column>
        <v-flex ma-3>
            <v-card class="body-2">
                <search-bar></search-bar>
            </v-card>
        </v-flex>
        <v-layout row wrap>
            <v-flex ma-3>
                <v-card>
                    <v-toolbar color="light-blue darken-4" dark>
                        <v-toolbar-side-icon></v-toolbar-side-icon>

                        <v-toolbar-title>融资产品推荐/微型企业</v-toolbar-title>

                        <v-spacer></v-spacer>
                    </v-toolbar>

                    <v-list two-line>
                        <template v-for="(item, index) in itemsMicro">
                            <v-subheader
                                    v-if="item.header"
                                    :key="item.header"
                            >
                                {{ item.header }}
                            </v-subheader>

                            <v-divider
                                    v-else-if="item.divider"
                                    :key="index"
                                    :inset="item.inset"
                            ></v-divider>

                            <v-list-tile
                                    v-else
                                    :key="item.title"
                                    avatar
                                    @click="query(item)"
                            >
                                <v-list-tile-avatar>
                                    <img :src="item.avatar">
                                </v-list-tile-avatar>

                                <v-list-tile-content>
                                    <v-list-tile-title v-html="item.title"></v-list-tile-title>
                                    <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
                                </v-list-tile-content>
                            </v-list-tile>
                        </template>
                    </v-list>
                </v-card>
            </v-flex>

            <v-flex ma-3>
                <v-card>
                    <v-toolbar color="light-blue darken-4" dark>
                        <v-toolbar-side-icon></v-toolbar-side-icon>

                        <v-toolbar-title>融资产品推荐/小型企业</v-toolbar-title>

                        <v-spacer></v-spacer>
                    </v-toolbar>

                    <v-list two-line>
                        <template v-for="(item, index) in itemsSmall">
                            <v-subheader
                                    v-if="item.header"
                                    :key="item.header"
                            >
                                {{ item.header }}
                            </v-subheader>

                            <v-divider
                                    v-else-if="item.divider"
                                    :key="index"
                                    :inset="item.inset"
                            ></v-divider>

                            <v-list-tile
                                    v-else
                                    :key="item.title"
                                    avatar
                                    @click="query(item)"
                            >
                                <v-list-tile-avatar>
                                    <img :src="item.avatar">
                                </v-list-tile-avatar>

                                <v-list-tile-content>
                                    <v-list-tile-title v-html="item.title"></v-list-tile-title>
                                    <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
                                </v-list-tile-content>
                            </v-list-tile>
                        </template>
                    </v-list>
                </v-card>
            </v-flex>
        </v-layout>

        <v-layout row wrap>
            <v-flex ma-3>
                <v-card>
                    <v-toolbar color="light-blue darken-4" dark>
                        <v-toolbar-side-icon></v-toolbar-side-icon>

                        <v-toolbar-title>融资产品推荐/大、中型企业</v-toolbar-title>

                        <v-spacer></v-spacer>
                    </v-toolbar>

                    <v-list two-line>
                        <template v-for="(item, index) in itemsBig">
                            <v-subheader
                                    v-if="item.header"
                                    :key="item.header"
                            >
                                {{ item.header }}
                            </v-subheader>

                            <v-divider
                                    v-else-if="item.divider"
                                    :key="index"
                                    :inset="item.inset"
                            ></v-divider>

                            <v-list-tile
                                    v-else
                                    :key="item.title"
                                    avatar
                                    @click="query(item)"
                            >
                                <v-list-tile-avatar>
                                    <img :src="item.avatar">
                                </v-list-tile-avatar>

                                <v-list-tile-content>
                                    <v-list-tile-title v-html="item.title"></v-list-tile-title>
                                    <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
                                </v-list-tile-content>
                            </v-list-tile>
                        </template>
                    </v-list>
                </v-card>
            </v-flex>

                <v-flex ma-3>
                    <v-card>
                        <v-toolbar color="light-blue darken-4" dark>
                            <v-toolbar-side-icon></v-toolbar-side-icon>

                            <v-toolbar-title>融资产品推荐/个体工商户</v-toolbar-title>

                            <v-spacer></v-spacer>

                        </v-toolbar>

                        <v-list two-line>
                            <template v-for="(item, index) in itemsPersonal">
                                <v-subheader
                                        v-if="item.header"
                                        :key="item.header"
                                >
                                    {{ item.header }}
                                </v-subheader>

                                <v-divider
                                        v-else-if="item.divider"
                                        :key="index"
                                        :inset="item.inset"
                                ></v-divider>

                                <v-list-tile
                                        v-else
                                        :key="item.title"
                                        avatar
                                        @click="query(item)"
                                >
                                    <v-list-tile-avatar>
                                        <img :src="item.avatar">
                                    </v-list-tile-avatar>

                                    <v-list-tile-content>
                                        <v-list-tile-title v-html="item.title"></v-list-tile-title>
                                        <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
                                    </v-list-tile-content>
                                </v-list-tile>
                            </template>
                        </v-list>
                    </v-card>
                </v-flex>
            </v-layout>
    </v-layout>
</template>

<script>
    import SearchBar from '@/components/SearchBar'
    import api from '../api/'

    export default {
        data () {
            return {
                smallItems: [],
                microItems: [],
                bigItems:[],
                personalItems: [],

                itemsMicro: [],
                itemsSmall: [],
                itemsBig: [],
                itemsPersonal:[],
            }
        },
        components: {
            SearchBar
        },
        methods: {
            initialize () {
                api.request('get','/loanProduct', {}).then(response => {
                    if(response.status == 200){
                        let products = response.data
                        console.log(products)
                        let i;
                        let j;

                        for(i in products){
                            for(j in products[i].serviceFor){
                                if(products[i].serviceFor[j] == '微型企业'){
                                    this.microItems.push(products[i])
                                }else if(products[i].serviceFor[j] == '小型企业'){
                                    this.smallItems.push(products[i])
                                }else if(products[i].serviceFor[j] == '个体工商户'){
                                    this.personalItems.push(products[i])
                                }else if(products[i].serviceFor[j] == '大、中型企业'){
                                    this.bigItems.push(products[i])
                                }
                            }
                        }

                        this.itemsMicro.push({ header: '微型企业' })
                        for(i in this.microItems){
                                this.itemsMicro.push({
                                    avatar: 'http://localhost:8081/uploads/' + this.microItems[i].img,
                                    title: this.microItems[i].name,
                                    subtitle: "<span class='text--primary'>利率水平:" + this.microItems[i].interestRate + "</span> &mdash;" + this.microItems[i].orgName,
                                    id: this.microItems[i]._id
                                })
                                this.itemsMicro.push({ divider: true, inset: true })
                        }

                        this.itemsSmall.push({ header: '小型企业' })
                        for(i in this.smallItems){
                            this.itemsSmall.push({
                                avatar: 'http://localhost:8081/uploads/' + this.smallItems[i].img,
                                title: this.smallItems[i].name,
                                subtitle: "<span class='text--primary'>利率水平：" + this.smallItems[i].interestRate + "</span> &mdash;" + this.smallItems[i].orgName,
                                id: this.smallItems[i]._id
                            })
                            this.itemsSmall.push({ divider: true, inset: true })
                        }

                        this.itemsBig.push({ header: '大、中型企业' })
                        for(i in this.bigItems){
                            this.itemsBig.push({
                                avatar: 'http://localhost:8081/uploads/' + this.bigItems[i].img,
                                title: this.bigItems[i].name,
                                subtitle: "<span class='text--primary'>利率水平：" + this.bigItems[i].interestRate + "</span> &mdash;" + this.bigItems[i].orgName,
                                id: this.bigItems[i]._id
                            })
                            this.itemsBig.push({ divider: true, inset: true })
                        }

                        this.itemsPersonal.push({ header: '个体工商户' })
                        for(i in this.personalItems){
                            this.itemsPersonal.push({
                                avatar: 'http://localhost:8081/uploads/' + this.personalItems[i].img,
                                title: this.personalItems[i].name,
                                subtitle: "<span class='text--primary'>利率水平：" + this.personalItems[i].interestRate + "</span> &mdash;" + this.personalItems[i].orgName,
                                id: this.personalItems[i]._id
                            })
                            this.itemsPersonal.push({ divider: true, inset: true })
                        }

                    }else{
                        alert('数据加载失败')
                    }
                })
            },
            query (item){
                this.$router.push({path:'/loanProductDetail',query: {_id: item.id}})
            }
        },
        mounted() {
            this.initialize();
        }

    }
</script>