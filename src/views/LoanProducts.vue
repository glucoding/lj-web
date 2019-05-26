<template>
    <v-container grid-list-lg>
        <v-layout row wrap>
            <v-flex xs12 sm12 md4>
                <v-card>
                    <v-responsive>
                        <v-img :src="require('@/assets/zhao.jpg')" aspect-ratio="1">
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
                        <v-img :src="require('@/assets/jian.jpg')" aspect-ratio="1">
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
                        <v-btn outline block color="green" @click="showProduct('jian')">在线申请</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
            <v-flex xs12 sm12 md4>
                <v-card>
                    <v-responsive>
                        <v-img :src="require('@/assets/fudian.jpg')" aspect-ratio="1">
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
        <v-layout row wrap>
            <v-flex xs12 sm12 md4>
                <v-card>
                    <v-responsive>
                        <v-img :src="require('@/assets/gong.jpg')" aspect-ratio="1">
                            <v-container fill-height fluid>
                                <v-layout fill-height>
                                    <v-flex xs12 align-end flexbox>
                                        <span class="headline white--text">工商银行</span>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-img>
                    </v-responsive>
                    <v-card-text>
                        <div>
                            <h3 class="headline mb-0">工商银行</h3>
                            <div>专为中小企业量身打造了融资服务品牌——“财智融通”，这一品牌以融资产品为核心，辐射结算、理财、投资银行、电子银行、国际业务和银行卡业务，以及信托、证券、基金等其他金融产品。
                            </div>
                        </div>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn outline block color="green" @click="showProduct('keto')">在线申请</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
            <v-flex xs12 sm12 md4>
                <v-card>
                    <v-responsive>
                        <v-img :src="require('@/assets/jiao.jpg')" aspect-ratio="1">
                            <v-container fill-height fluid>
                                <v-layout fill-height>
                                    <v-flex xs12 align-end flexbox>
                                        <span class="headline white--text">交通银行</span>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-img>
                    </v-responsive>
                    <v-card-text>
                        <div>
                            <h3 class="headline mb-0">交通银行</h3>
                            <div>“展业通”包含：知识产权质押贷款、房地产抵押贷款和其他担保形式贷款。
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
                        <v-img :src="require('@/assets/nong.jpg')" aspect-ratio="1">
                            <v-container fill-height fluid>
                                <v-layout fill-height>
                                    <v-flex xs12 align-end flexbox>
                                        <span class="headline white--text">农业银行</span>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-img>
                    </v-responsive>
                    <v-card-text>
                        <div>
                            <h3 class="headline mb-0">农业银行</h3>
                            <div>收付通”贸易融资产品是接受开证银行或其指定银行已承付的信用证项下应收账款作质押，为以往面临授信瓶颈、担保有困难的企业办理信用证开立和后续进口押汇的业务。
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
            if(!this.$store.getters.getIsLogin){
                this.$router.push({path:'/sign-in'})
            }else {
                switch (name) {
                    case 'zhao':
                        window.location.href = "https://gtb.cmbchina.com/CmbBank_GTB/UI/Public/Login.aspx"
                        break
                    case 'jian':
                        window.location.href = "http://scompany1.ccb.com/cn/home/s_company_indexv3.html"
                        break
                }
            }
        }
    }
}
</script>