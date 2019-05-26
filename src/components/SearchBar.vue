<template>
    <v-card>
        <v-layout row>
        <v-flex sm1 md2 lg2 ma-3>
        <v-avatar color="indigo">
            <v-icon dark>account_circle</v-icon>
        </v-avatar>
        </v-flex>
        <v-flex sm1 md2 lg2 ma-3>
            <v-card-title>查询适合您的融资产品</v-card-title>
        </v-flex>
        </v-layout>
        <v-layout align-center justify-center>
        <form>
            <v-layout row>
                <v-flex ma-3>
                    <v-select
                            v-model="bank"
                            :items="banks"
                            label="金融结构"
                            data-vv-name="bank"
                    ></v-select>
                </v-flex>
                <v-flex ma-3>
                    <v-select
                            v-model="type"
                            :items="types"
                            label="融资产品类型"
                            data-vv-name="type"
                    ></v-select>
                </v-flex>
                <v-flex ma-3>
                    <v-select
                            v-model="serviceFor"
                            :items="serviceForItems"
                            label="适用对象"
                            data-vv-name="serviceFor"
                    ></v-select>
                </v-flex>
                <v-flex ma-3>
                    <v-select
                            v-model="guaranteeBy"
                            :items="guaranteeByItems"
                            label="担保方式"
                            data-vv-name="guaranteeBy"
                    ></v-select>
                </v-flex>

                <v-flex ma-3>
                    <v-btn @click="onsubmit" color="info">查询</v-btn>
                </v-flex>

            </v-layout>
        </form>
        </v-layout>
    </v-card>
</template>

<script>
    import api from "../api"

    export default {
        data: () => ({
            bank: '',
            type: '',
            serviceFor: '',
            guaranteeBy: '',

            serviceForItems:[
                '小型企业',
                '微型企业',
                '大中型企业',
                '个体工商户'
            ],
            types: [
                '流动资金贷款',
                '项目贷款',
                '固定资产贷款',
                '融资类担保',
                '个人助业',
                '个人生产经营贷款',
                '银行承兑汇票',
                '票据贴现',
                '个人生产经营贷款',
                '项目投资贷款或经营周转贷款'
            ],
            guaranteeByItems:[
                '抵押',
                '信用',
                '质押',
                '保证'
            ],
            banks: [
                '富滇银行',
                '工行银行',
                '富滇村镇银行',
                '邮储银行',
                '招商银行',
                '中国银行',
                '农业银行',
                "农开行",
                "信用合作社"
            ]
        }),
        methods: {
            onsubmit() {
                api.request('post', '/loanProductByCondition',{
                    'name': this.bank,
                    'type': this.type,
                    'serviceFor': this.serviceFor,
                    'guaranteeBy': this.guaranteeBy
                }).then(response => {
                    console.log(response.data)
                })
            }
        }
    };
</script>