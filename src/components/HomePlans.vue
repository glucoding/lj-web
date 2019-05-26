<template>
    <v-container grid-list-lg>
        <v-layout row>
            <v-flex xs12 class="text-xs-center display-1 font-weight-black my-5">在线融资服务</v-flex>
        </v-layout>
        <v-layout row wrap>
            <v-flex xs12 sm12 md4>
                <v-card>
                    <v-responsive>
                        <v-img :src="require('@/assets/bank1.jpg')" aspect-ratio="1">
                            <v-container fill-height fluid>
                                <v-layout fill-height>
                                    <v-flex xs12 align-end flexbox>
                                        <span class="headline white--text">招商银行</span>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-img>
                    </v-responsive>
                    <v-card-text>
                        <div>
                            <h3 class="headline mb-0">招商银行</h3>
                            <div>“中小企业融资担保一路通”为中小企业设计多品种融资套餐。
                            </div>
                        </div>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn outline block color="green" @click="showProduct('zhao')">在线申请</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
            <v-flex xs12 sm12 md4>
                <v-card>
                    <v-responsive>
                        <v-img :src="require('@/assets/bank2.jpg')" aspect-ratio="1">
                            <v-container fill-height fluid>
                                <v-layout fill-height>
                                    <v-flex xs12 align-end flexbox>
                                        <span class="headline white--text">建设银行</span>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-img>
                    </v-responsive>
                    <v-card-text>
                        <div>
                            <h3 class="headline mb-0">建设银行</h3>
                            <div>在“成长之路”和“速贷通”服务品牌基础上，逐步推出中小企业联贷联保贷款、中小企业贸易链融资贷款、中小企业法人账户透支、中小企业保理业务等多项创新信贷产品。
                            </div>
                        </div>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn outline block color="green" @click="showProduct('paleo')">在线申请</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
            <v-flex xs12 sm12 md4>
                <v-card>
                    <v-responsive>
                        <v-img :src="require('@/assets/bank3.jpg')" aspect-ratio="1">
                            <v-container fill-height fluid>
                                <v-layout fill-height>
                                    <v-flex xs12 align-end flexbox>
                                        <span class="headline white--text">富滇银行</span>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-img>
                    </v-responsive>
                    <v-card-text>
                        <div>
                            <h3 class="headline mb-0">富滇银行</h3>
                            <div>“金芝麻”中小企业融资方案是针对中小企业在产、购、销各环节的融资需求特点开发的与中小企业现金流、物流紧密结合的特色金融产品。
                            </div>
                        </div>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn outline block color="green" @click="showProduct('vegan')">在线申请</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        data: () => ({

        }),
        methods: {
            showProduct (name) {
                switch(name){
                    case 'zhao':
                        window.location.href = "file:///C:/Users/gehao/Desktop/招行页面/招商银行小企业金融+.html"
                        break
                    case 'jian':
                        window.location.href = "http://www.ccb.com"
                        break
                }
            }
        }
    }
</script>