<template>
    <v-container fluid fill-height>
        <v-layout row align-center justify-center>
            <v-flex xs12 sm12 md4 lg8>
                <v-toolbar
                        color="light-blue darken-4" dark
                >
                    <v-toolbar-side-icon></v-toolbar-side-icon>
                    <v-toolbar-title>新增融资产品</v-toolbar-title>
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
                                            v-model="orgName"
                                            v-validate="'required|max:20'"
                                            :counter="20"
                                            :error-messages="errors.collect('orgName')"
                                            label="金融机构名称"
                                            data-vv-name="orgName"
                                            required
                                    ></v-text-field>
                                </v-flex>
                                <v-flex ma-3>
                                <v-text-field
                                        v-model="name"
                                        v-validate="'required|max:10'"
                                        :counter="10"
                                        :error-messages="errors.collect('name')"
                                        label="产品名称"
                                        data-vv-name="name"
                                        required
                                ></v-text-field>
                                </v-flex>
                            </v-layout>
                            <v-layout row>
                                <v-flex ma-3>
                                    <v-select
                                            v-model="type"
                                            v-validate="'required'"
                                            :items="typeItems"
                                            :error-messages="errors.collect('type')"
                                            label="产品类型"
                                            data-vv-name="type"
                                            required
                                    ></v-select>
                                </v-flex>
                                <v-flex ma-3>
                                    <v-select
                                            v-model="approveBy"
                                            v-validate="'required'"
                                            :items="approveByItems"
                                            :error-messages="errors.collect('approveBy')"
                                            label="审批权限"
                                            data-vv-name="approveBy"
                                            required
                                    ></v-select>
                                </v-flex>
                            </v-layout>
                        </card>


                        <v-card flat>
                            <v-layout row>
                                <v-card-title>适用对象</v-card-title>
                                <v-flex>
                                    <v-checkbox
                                            v-model="serviceFor"
                                            value="微型企业"
                                            label="微型企业"
                                            data-vv-name="serviceFor"
                                            type="checkbox"
                                    ></v-checkbox>
                                </v-flex>
                                <v-flex>
                                    <v-checkbox
                                            v-model="serviceFor"
                                            value="个体工商户"
                                            label="个体工商户"
                                            data-vv-name="serviceFor"
                                            type="checkbox"
                                    ></v-checkbox>
                                </v-flex>
                                <v-flex>
                                    <v-checkbox
                                            v-model="serviceFor"
                                            value="小型企业"
                                            label="小型企业"
                                            data-vv-name="serviceFor"
                                            type="checkbox"
                                    ></v-checkbox>
                                </v-flex>
                                <v-flex>
                                    <v-checkbox
                                            v-model="serviceFor"
                                            value="大、中型企业"
                                            label="大、中型企业"
                                            data-vv-name="serviceFor"
                                            type="checkbox"
                                    ></v-checkbox>
                                </v-flex>
                            </v-layout>
                        </v-card>

                        <v-card flat>
                            <v-layout row>
                                <v-card-title>担保方式</v-card-title>
                                <v-flex>
                                    <v-checkbox
                                            v-model="guaranteeBy"
                                            value="信用"
                                            label="信用"
                                            data-vv-name="guaranteeBy"
                                            type="checkbox"
                                    ></v-checkbox>
                                </v-flex>
                                <v-flex>
                                    <v-checkbox
                                            v-model="guaranteeBy"
                                            value="抵押"
                                            label="抵押"
                                            data-vv-name="guaranteeBy"
                                            type="checkbox"
                                    ></v-checkbox>
                                </v-flex>
                                <v-flex>
                                    <v-checkbox
                                            v-model="guaranteeBy"
                                            value="质押"
                                            label="质押"
                                            data-vv-name="guaranteeBy"
                                            type="checkbox"
                                    ></v-checkbox>
                                </v-flex>
                                <v-flex>
                                    <v-checkbox
                                            v-model="guaranteeBy"
                                            value="保证"
                                            label="保证"
                                            data-vv-name="guaranteeBy"
                                            type="checkbox"
                                    ></v-checkbox>
                                </v-flex>
                            </v-layout>
                        </v-card>

                        <v-card flat>
                        <v-layout row>
                            <v-flex ma-3>
                            <v-text-field
                                    v-model="interestRate"
                                    v-validate="'required|max:10'"
                                    :error-messages="errors.collect('interestRate')"
                                    label="利率水平"
                                    data-vv-name="interestRate"
                                    required
                            ></v-text-field>
                            </v-flex>
                        </v-layout>
                        <v-layout row>
                            <v-flex ma-3>
                                <v-text-field
                                        v-model="minimumAmount"
                                        v-validate="'required|max:10'"
                                        :error-messages="errors.collect('minimumAmount')"
                                        label="最低额度"
                                        data-vv-name="minimumAmount"
                                        required
                                ></v-text-field>
                            </v-flex>
                            <v-flex ma-3>
                                <v-text-field
                                        v-model="maximumAmount"
                                        v-validate="'required|max:10'"
                                        :error-messages="errors.collect('maximumAmount')"
                                        label="最高额度"
                                        data-vv-name="maximumAmount"
                                        required
                                ></v-text-field>
                            </v-flex>
                        </v-layout>
                        <v-layout row>
                            <v-flex ma-3>
                                <v-slider
                                        label="融资期限"
                                        v-model="durationLimit"
                                        :max="36"
                                        thumb-label
                                        :step="1"
                                ></v-slider>
                            </v-flex>
                            <v-flex ma-3>
                                <v-text-field
                                        v-model="remainingAmount"
                                        v-validate="'required|max:10'"
                                        :error-messages="errors.collect('remainingAmount')"
                                        label="融资余额"
                                        data-vv-name="remainingAmount"
                                        required
                                ></v-text-field>
                            </v-flex>
                        </v-layout>
                        <v-textarea
                                outline
                                v-model="intro"
                                v-validate="'required|max:100'"
                                :error-messages="errors.collect('intro')"
                                label="产品简要介绍"
                                data-vv-name="intro"
                                required
                        ></v-textarea>
                        <v-textarea
                                outline
                                v-model="remark"
                                v-validate="'required|max:100'"
                                label="备注"
                                data-vv-name="remark"
                        ></v-textarea>
                        </v-card>

                        <v-card flat>
                            <v-card-title>上传产品图片</v-card-title>
                            <v-layout row>
                                <select-single-file></select-single-file>
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
    import SelectSingleFile from "../components/SelectSingleFile"

    export default({
        name: 'Join',
        $_veeValidate: {
            validator: 'new'
        },

        components: {
            SelectSingleFile
        },

        data: () => ({
            orgId: '',
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
            typeItems: [
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
            ], //产品类型
            approveByItems: [
              '市分行',
              '省分行',
              '总行'
            ],
            guaranteeByItems: [
              '信用担保',
              '水果权证'
            ],
            e1: false,
            e2: false,
            e3: false,
            e4: false,
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
                this.orgName = response.data.entName
            })
        },

        methods: {
            submit () {
                this.$validator.validateAll().then(result => {
                    this.img = this.$store.getters.getSingleUploadFile;

                    if(result) {
                        api.request('post', '/loanProduct', {
                            orgId: this.$store.getters.getUser.orgId,
                            orgName: this.orgName, //金融机构名称
                            name: this.name, //产品名称
                            type: this.type, //产品类型
                            serviceFor: this.serviceFor, //适用对象
                            guaranteeBy: this.guaranteeBy, //担保方式
                            interestRate: this.interestRate, //利率水平
                            minimumAmount: this.minimumAmount, //最低额度
                            maximumAmount: this.maximumAmount, //最高额度
                            durationLimit: this.durationLimit, //融资期限
                            remainingAmount: this.remainingAmount, //融资余额
                            approveBy: this.approveBy, //审批权限
                            intro: this.intro, //产品简要介绍
                            img: this.img, //产品图片
                            remark: this.remark, //备注
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
                this.name = ''
                this.email = ''
                this.select = null
                this.checkbox = null
                this.$validator.reset()
            }
        }
    })
</script>
<style scoped>
</style>