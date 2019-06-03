<template>
    <v-container fluid fill-height>
        <v-layout row align-center justify-center>
            <v-flex xs12 sm12 md4 lg8>
                <v-toolbar
                        color="light-blue darken-4" dark
                >
                    <v-toolbar-side-icon></v-toolbar-side-icon>
                    <v-toolbar-title>新增融资需求</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-btn icon>
                        <v-icon>search</v-icon>
                    </v-btn>
                </v-toolbar>
                <div>
                    <form>
                        <card flat>
                            <v-layout row align-center justify-center>
                                <v-flex ma-3>
                                    <v-text-field
                                            v-model="entName"
                                            v-validate="'required|max:20'"
                                            :counter="20"
                                            :error-messages="errors.collect('entName')"
                                            label="企业名称"
                                            data-vv-name="entName"
                                            required
                                    ></v-text-field>
                                </v-flex>
                                <v-flex ma-3>
                                    <v-text-field
                                            v-model="loanAmount"
                                            v-validate="'required|max:10'"
                                            :counter="10"
                                            :error-messages="errors.collect('loanAmount')"
                                            label="融资金额"
                                            data-vv-name="loanAmount"
                                            required
                                    ></v-text-field>
                                </v-flex>
                            </v-layout>
                            <v-layout row>
                                <v-flex ma-3>
                                    <v-select
                                            v-model="loanWay"
                                            v-validate="'required'"
                                            :items="loanWayItems"
                                            :error-messages="errors.collect('loanWay')"
                                            label="融资方式"
                                            data-vv-name="loanWay"
                                            required
                                    ></v-select>
                                </v-flex>
                                <v-flex ma-3>
                                    <v-menu
                                            v-model="setTime"
                                            :close-on-content-click="false"
                                            :nudge-right="40"
                                            lazy
                                            transition="scale-transition"
                                            offset-y
                                            full-width
                                            min-width="290px"
                                    >
                                        <template v-slot:activator="{ on }">
                                            <v-text-field
                                                    v-model="loanTime"
                                                    label="预计融资时间"
                                                    prepend-icon="event"
                                                    readonly
                                                    v-on="on"
                                            ></v-text-field>
                                        </template>
                                        <v-date-picker v-model="loanTime" @input="menu2 = false"></v-date-picker>
                                    </v-menu>
                                </v-flex>
                            </v-layout>
                            <v-layout row>
                                <v-flex ma-3>
                                    <v-select
                                            v-model="entType"
                                            v-validate="'required'"
                                            :items="entTypeItems"
                                            :error-messages="errors.collect('entType')"
                                            label="企业类型"
                                            data-vv-name="entType"
                                            required
                                    ></v-select>
                                </v-flex>
                                <v-flex ma-3>
                                    <v-select
                                            v-model="loanUsage"
                                            v-validate="'required'"
                                            :items="loanUsageItems"
                                            :error-messages="errors.collect('loanUsage')"
                                            label="融资用途"
                                            data-vv-name="loanUsage"
                                            required
                                    ></v-select>
                                </v-flex>
                            </v-layout>
                        </card>

                        <v-card flat>
                            <v-card-title>企业可接受的担保方式</v-card-title>
                            <v-layout row>
                                <v-flex>
                                    <v-checkbox
                                            v-model="guaranteeBy"
                                            value="房产抵押"
                                            label="房产抵押"
                                            data-vv-name="guaranteeBy"
                                            type="checkbox"
                                    ></v-checkbox>
                                </v-flex>
                                <v-flex>
                                    <v-checkbox
                                            v-model="guaranteeBy"
                                            value="票据或存单质押"
                                            label="票据或存单质押"
                                            data-vv-name="guaranteeBy"
                                            type="checkbox"
                                    ></v-checkbox>
                                </v-flex>
                                <v-flex>
                                    <v-checkbox
                                            v-model="guaranteeBy"
                                            value="抵押+知识产权质押"
                                            label="抵押+知识产权质押"
                                            data-vv-name="guaranteeBy"
                                            type="checkbox"
                                    ></v-checkbox>
                                </v-flex>
                                <v-flex>
                                    <v-checkbox
                                            v-model="guaranteeBy"
                                            value="保理"
                                            label="保理"
                                            data-vv-name="guaranteeBy"
                                            type="checkbox"
                                    ></v-checkbox>
                                </v-flex>
                            </v-layout>
                            <v-layout row>
                                <v-flex>
                                    <v-checkbox
                                            v-model="guaranteeBy"
                                            value="应收账款质押"
                                            label="应收账款质押"
                                            data-vv-name="guaranteeBy"
                                            type="checkbox"
                                    ></v-checkbox>
                                </v-flex>
                                <v-flex>
                                    <v-checkbox
                                            v-model="guaranteeBy"
                                            value="仓单质押"
                                            label="仓单质押"
                                            data-vv-name="guaranteeBy"
                                            type="checkbox"
                                    ></v-checkbox>
                                </v-flex>
                                <v-flex>
                                    <v-checkbox
                                            v-model="guaranteeBy"
                                            value="机器设备抵押"
                                            label="机器设备抵押"
                                            data-vv-name="guaranteeBy"
                                            type="checkbox"
                                    ></v-checkbox>
                                </v-flex>
                                <v-flex>
                                    <v-checkbox
                                            v-model="guaranteeBy"
                                            value="股权质押"
                                            label="股权质押"
                                            data-vv-name="guaranteeBy"
                                            type="checkbox"
                                    ></v-checkbox>
                                </v-flex>
                            </v-layout>
                            <v-layout row>
                                <v-flex>
                                    <v-checkbox
                                            v-model="guaranteeBy"
                                            value="应收账款质押"
                                            label="应收账款质押"
                                            data-vv-name="guaranteeBy"
                                            type="checkbox"
                                    ></v-checkbox>
                                </v-flex>
                                <v-flex>
                                    <v-checkbox
                                            v-model="guaranteeBy"
                                            value="仓单质押"
                                            label="仓单质押"
                                            data-vv-name="guaranteeBy"
                                            type="checkbox"
                                    ></v-checkbox>
                                </v-flex>
                                <v-flex>
                                    <v-checkbox
                                            v-model="guaranteeBy"
                                            value="担保公司保证"
                                            label="担保公司保证"
                                            data-vv-name="guaranteeBy"
                                            type="checkbox"
                                    ></v-checkbox>
                                </v-flex>
                                <v-flex>
                                    <v-checkbox
                                            v-model="guaranteeBy"
                                            value="担保公司保证+知识产权质押"
                                            label="担保公司保证+知识产权质押"
                                            data-vv-name="guaranteeBy"
                                            type="checkbox"
                                    ></v-checkbox>
                                </v-flex>
                            </v-layout>
                        </v-card>

                        <v-card flat>
                            <v-layout column align-center justify-center>
                                <v-flex ma-3>
                                    <v-btn @click="submit" color="success">提交</v-btn>

                                    <v-btn @click="clear" color="warning">重置</v-btn>
                                </v-flex>
                            </v-layout>
                        </v-card>
                    </form>
                </div>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
    import api from "../api"
    let moment = require("moment");

    export default({
        name: 'Join',
        $_veeValidate: {
            validator: 'new'
        },

        data: () => ({
            entId: '',
            entName: '', //企业名称
            loanAmount: '', //融资金额
            loanTime: '', //预计融资时间
            loanWay: '',//融资方式
            entType: '', //企业类型
            loanUsage: '', //融资用途
            guaranteeBy: [],//担保方式
            time: '',
            loanWayItems: [
                '贷款',
                '担保',
                '风险投资',
                '知识产权质押',
                'PE',
                'IPO',
                '其他'
            ], //产品类型
            loanUsageItems: [
                '产品研发',
                '设备购置',
                '厂房建设',
                '市场开拓',
                '扩大产能',
                '科技保险',
                '其他'
            ],
            entTypeItems: [
              '一般企业',
              '高新技术企业',
              '创新型企业',
              '创新型试点企业',
              '创新型培育企业',
              '技术先进型企业',
              '专利优势企业'
            ],
            dictionary: {
                attributes: {
                    email: 'E-mail Address'
                    // custom attributes
                },
                custom: {
                    name: {
                        required: () => 'Name can not be empty',
                        max: 'The name field may not be greater than 10 characters'
                        // custom messages
                    },
                    username: {
                        required: () => '必须填写用户名',
                        max: '用户名不得超过十个字符'
                    },
                    password: {
                        required: () => '必须填写密码',
                        max: '密码不得超过十个字符'
                    },
                    mobile: {
                        required: () => '必须填写手机号',
                        max: '手机号不得超过13个字符'
                    },
                    select: {
                        required: 'Select field is required'
                    },
                    region: {
                        required: '用户必须指定所属区域'
                    }
                }
            }
        }),

        mounted () {
            this.$validator.localize('zh_cn', this.dictionary)
            //获取当前用户所属企业名称
            api.request('get', '/enterprises/' + this.$store.getters.getUser.orgId, {}).then(response => {
                this.entId = this.$store.getters.getUser.orgId
                this.entName = response.data.entName
            })
        },

        methods: {
            submit () {
                this.$validator.validateAll().then(result => {
                    if(result) {
                        this.time = moment(new Date()).format("YYYY-MM-DD");
                        api.request('post', '/requirement', {
                            entId: this.entId,
                            entName: this.entName, //企业名称
                            loanAmount: this.loanAmount, //融资金额
                            loanTime: this.loanTime, //预计融资时间
                            loanWay: this.loanWay,//融资方式
                            entType: this.entType, //企业类型
                            loanUsage: this.loanUsage, //融资用途
                            guaranteeBy: this.guaranteeBy,//担保方式
                            time: this.time,
                        }).then(response => {
                            console.log(response)
                            if(response.status == 200){
                                alert('新产品添加成功')
                                console.log(response.data)
                                this.$router.push({ path: '/' })
                            }
                        })
                    }
                })
            },
            clear () {
                this.entId = ''
                this.entName = ''
                this.loanAmount = ''
                this.loanTime = ''
                this.loanWay = ''
                this.entType = ''
                this.loanUsage = ''
                this.guaranteeBy = []
                this.time = ''
                this.$validator.reset()
            }
        }
    })
</script>
<style scoped>
</style>