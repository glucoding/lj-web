<template>
    <v-layout align-center justify-center>
        <v-flex xs12 sm6 lg6 offset-sm3 ma-3>
            <v-card>
                <v-img
                        class="white--text"
                        height="200px"
                        :src="'http://localhost:8081/uploads/'+ img"
                >
                    <v-container fill-height fluid>
                        <v-layout fill-height>
                            <v-flex xs12 align-end flexbox>
                                <span class="headline">{{orgName}}</span>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-img>
                <v-card-title>
                    <div>
                        <span class="grey--text">{{name}}</span><br>
                        <span>产品类型：{{type}}</span><br>
                        <span>适用对象：{{serviceFor}}</span><br>
                        <span>担保方式：{{guaranteeBy}}</span><br>
                        <span>利率水平：{{interestRate}}</span><br>
                        <span>最低额度：{{minimumAmount}}，最高额度：{{maximumAmount}}</span><br>
                        <span>融资期限：{{durationLimit}}，审批权限：{{approveBy}}</span>
                    </div>
                </v-card-title>
                <v-card-text>产品简要介绍：{{intro}}</v-card-text>
                <v-card-actions>
                    <v-btn color="info" @click="onsubmit">申请</v-btn>
                    <v-btn color="info">共享</v-btn>
                </v-card-actions>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
    import api from '../api'

    export default {
        data: () => ({
            _id:'',
            orgName: '', //金融机构名称
            name: '', //产品名称
            type: '', //产品类型
            serviceFor: [], //适用对象
            guaranteeBy: [], //担保方式
            interestRate: '', //利率水平
            minimumAmount: '', //最低额度
            maximumAmount: '', //最高额度
            durationLimit: '', //融资期限
            remainingAmount: '', //融资余额
            approveBy: '', //审批权限
            intro: '', //产品简要介绍
            img: '', //产品图片
            remark: '', //备注
        }),
        methods: {
            initialize () {
                api.request('get','/loanProduct/' + this.$route.query._id, {
                }).then(response => {
                    if(response.status == 200){
                        this._id = response.data._id
                        this.orgName = response.data.orgName
                        this.name = response.data.name
                        this.type = response.data.type
                        this.serviceFor = response.data.serviceFor
                        this.guaranteeBy = response.data.guaranteeBy
                        this.interestRate = response.data.interestRate
                        this.minimumAmount = response.data.minimumAmount
                        this.maximumAmount = response.data.maximumAmount
                        this.durationLimit = response.data.durationLimit
                        this.remainingAmount = response.data.remainingAmount
                        this.approveBy = response.data.approveBy
                        this.intro = response.data.intro
                        this.img = response.data.img
                        this.remark = response.data.remark
                    }else{
                        alert("找不到您要查看的融资产品")
                    }
                })
            },
            onsubmit () {
                this.$router.push({path:'/loanProductApp',query: {_id: this._id}})
            }
        },
        mounted() {
            this.initialize()
        }
    }
</script>