<template>
    <v-container fluid fill-height>
        <v-layout row align-center justify-center>
            <v-flex xs12 sm12 md4 lg8>
                <h2>民营企业信贷引导资金申请</h2>
                <v-sapcer></v-sapcer>
                <v-card>
                <!--<div id="app">-->
                    <form>
                        <v-card pa-3 ma-3>
                        <v-card-title>基本信息</v-card-title>
                        <v-layout row>
                        <v-flex md4 ma-3>
                        <v-text-field
                                v-model="entName"
                                v-validate="'required|max:60'"
                                :counter="20"
                                :error-messages="errors.collect('entName')"
                                label="申请企业"
                                data-vv-name="entName"
                                required
                        ></v-text-field>
                        </v-flex>
                        <v-flex md4 ma-3>
                        <v-text-field
                                v-model="rep"
                                v-validate="'required|max:60'"
                                :counter="20"
                                :error-messages="errors.collect('rep')"
                                label="法定代表人"
                                data-vv-name="rep"
                                required
                        ></v-text-field>
                        </v-flex>
                        <v-flex md4 ma-3>
                        <v-text-field
                                v-model="registerAmount"
                                v-validate="'required|max:20'"
                                :counter="10"
                                :error-messages="errors.collect('registerAmount')"
                                label="注册资本"
                                data-vv-name="registerAmount"
                                required
                        ></v-text-field>
                        </v-flex>
                        </v-layout>
                        <v-flex xs12 sm12 md12>
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
                                            v-model="estTime"
                                            label="成立时间"
                                            prepend-icon="event"
                                            readonly
                                            v-on="on"
                                    ></v-text-field>
                                </template>
                                <v-date-picker v-model="estTime" @input="menu2 = false"></v-date-picker>
                            </v-menu>
                        </v-flex>
                        <v-layout row>
                        <v-flex md4 ma-3>
                        <v-text-field
                                v-model="contact"
                                v-validate="'required|max:60'"
                                :counter="20"
                                :error-messages="errors.collect('contact')"
                                label="联系人"
                                data-vv-name="contact"
                                required
                        ></v-text-field>
                        </v-flex>
                        <v-flex md4 ma-3>
                        <v-text-field
                                v-model="tel"
                                v-validate="'required|max:20'"
                                :counter="10"
                                :error-messages="errors.collect('tel')"
                                label="电话"
                                data-vv-name="tel"
                                required
                        ></v-text-field>
                        </v-flex>
                        <v-flex md4 ma-3>
                        <v-text-field
                                v-model="mobile"
                                v-validate="'required|max:20'"
                                :counter="10"
                                :error-messages="errors.collect('mobile')"
                                label="手机"
                                data-vv-name="mobile"
                                required
                        ></v-text-field>
                        </v-flex>
                        </v-layout>
                        </v-card>
                        <v-card pa-3 ma-3>
                        <v-card-title>贷款情况</v-card-title>
                        <v-layout row>
                        <v-flex md4 ma-3>
                        <v-text-field
                                v-model="totalAsset"
                                v-validate="'required|max:20'"
                                :counter="10"
                                :error-messages="errors.collect('totalAsset')"
                                label="资产总额"
                                data-vv-name="totalAsset"
                                required
                        ></v-text-field>
                        </v-flex>
                        <v-flex md4 ma-3>
                        <v-text-field
                                v-model="totalLoan"
                                v-validate="'required|max:20'"
                                :counter="10"
                                :error-messages="errors.collect('totalLoan')"
                                label="负债总额"
                                data-vv-name="totalLoan"
                                required
                        ></v-text-field>
                        </v-flex>
                        <v-flex md4 ma-3>
                        <v-text-field
                                v-model="assetLoanRate"
                                v-validate="'required|max:20'"
                                :counter="10"
                                :error-messages="errors.collect('assetLoanRate')"
                                label="资产负债率"
                                data-vv-name="assetLoanRate"
                                required
                        ></v-text-field>
                        </v-flex>
                        </v-layout>
                        <v-layout row>
                        <v-flex md4 ma-3>
                        <v-select
                                v-model="loanBank"
                                v-validate="'required'"
                                :items="items"
                                :error-messages="errors.collect('loanBank')"
                                label="贷款银行"
                                data-vv-name="loanBank"
                                required
                        ></v-select>
                        </v-flex>
                        <v-flex md4 ma-3>
                        <v-text-field
                                v-model="contractNumber"
                                v-validate="'required|email'"
                                :error-messages="errors.collect('contractNumber')"
                                label="流动资金贷款合同号"
                                data-vv-name="contractNumber"
                                required
                        ></v-text-field>
                        </v-flex>
                        <v-flex md4 ma-3>
                        <v-text-field
                                v-model="loanAmount"
                                v-validate="'required|max:10'"
                                :error-messages="errors.collect('loanAmount')"
                                label="流动资金贷款总额"
                                data-vv-name="loanAmount"
                                required
                        ></v-text-field>
                        </v-flex>
                        </v-layout>
                        <v-layout row>
                        <v-flex md6 ma-3>
                        <v-text-field
                                v-model="loanRange"
                                v-validate="'required|max:10'"
                                :error-messages="errors.collect('loanRange')"
                                label="流动资金贷款时限"
                                data-vv-name="loanRange"
                                required
                        ></v-text-field>
                        </v-flex>
                        <v-flex md6 ma-3>
                        <v-text-field
                                v-model="loanAmountFromSociety"
                                v-validate="'required|max:10'"
                                :error-messages="errors.collect('loanAmountFromSociety')"
                                label="民间贷款金额"
                                data-vv-name="loanAmountFromSociety"
                                required
                        ></v-text-field>
                        </v-flex>
                        </v-layout>
                        </v-card>
                        <v-card>
                            <v-card-title primary-title>
                                贷款担保方式
                            </v-card-title>
                            <v-layout row>
                            <v-flex md2>
                            <v-checkbox
                                    v-model="assetGuarantee"
                                    v-validate="'required'"
                                    :error-messages="errors.collect('guarantee')"
                                    value="1"
                                    label="自有资产抵押"
                                    data-vv-name="guarantee"
                                    type="checkbox"
                            ></v-checkbox>
                            </v-flex>
                            <v-flex md2>
                            <v-checkbox v-if="assetGuarantee == 1"
                                    v-model="land"
                                    v-validate="'required'"
                                    :error-messages="errors.collect('guarantee')"
                                    value="1"
                                    label="土地"
                                    data-vv-name="guarantee"
                                    type="checkbox"
                            ></v-checkbox>
                            </v-flex>
                            <v-flex md2>
                            <v-checkbox v-if="assetGuarantee == 1"
                                    v-model="factory"
                                    v-validate="'required'"
                                    :error-messages="errors.collect('guarantee')"
                                    value="1"
                                    label="厂房"
                                    data-vv-name="guarantee"
                                    type="checkbox"
                            ></v-checkbox>
                            </v-flex>
                            <v-flex md2>
                            <v-checkbox v-if="assetGuarantee == 1"
                                    v-model="house"
                                    v-validate="'required'"
                                    :error-messages="errors.collect('guarantee')"
                                    value="1"
                                    label="住宅、写字楼"
                                    data-vv-name="guarantee"
                                    type="checkbox"
                            ></v-checkbox>
                            </v-flex>
                            <v-flex md2>
                                <v-checkbox v-if="assetGuarantee == 1"
                                            v-model="machine"
                                            v-validate="'required'"
                                            :error-messages="errors.collect('machine')"
                                            value="1"
                                            label="机器"
                                            data-vv-name="machine"
                                            type="checkbox"
                                ></v-checkbox>
                            </v-flex>
                            <v-flex md2>
                                <v-checkbox v-if="assetGuarantee == 1"
                                            v-model="assetOther"
                                            v-validate="'required'"
                                            :error-messages="errors.collect('machine')"
                                            value="1"
                                            label="其他"
                                            data-vv-name="machine"
                                            type="checkbox"
                                ></v-checkbox>
                            </v-flex>
                            </v-layout>
                            <v-layout row>
                                <v-flex md2>
                                    <v-checkbox
                                            v-model="promiseGuarantee"
                                            v-validate="'required'"
                                            :error-messages="errors.collect('guarantee')"
                                            value="1"
                                            label="保证担保"
                                            data-vv-name="guarantee"
                                            type="checkbox"
                                    ></v-checkbox>
                                </v-flex>
                                <v-flex md2>
                                    <v-checkbox v-if="promiseGuarantee == 1"
                                                v-model="thirdParty"
                                                v-validate="'required'"
                                                :error-messages="errors.collect('guarantee')"
                                                value="1"
                                                label="第三方担保"
                                                data-vv-name="guarantee"
                                                type="checkbox"
                                    ></v-checkbox>
                                </v-flex>
                                <v-flex md2>
                                    <v-checkbox v-if="promiseGuarantee == 1"
                                                v-model="shareHolder"
                                                v-validate="'required'"
                                                :error-messages="errors.collect('guarantee')"
                                                value="1"
                                                label="股东担保"
                                                data-vv-name="guarantee"
                                                type="checkbox"
                                    ></v-checkbox>
                                </v-flex>
                                <v-flex md2>
                                    <v-checkbox v-if="promiseGuarantee == 1"
                                                v-model="mortgageeOther"
                                                v-validate="'required'"
                                                :error-messages="errors.collect('guarantee')"
                                                value="1"
                                                label="其他"
                                                data-vv-name="guarantee"
                                                type="checkbox"
                                    ></v-checkbox>
                                </v-flex>
                            </v-layout>
                        <v-layout row>
                        <v-checkbox
                                v-model="reevaluate"
                                v-validate="'required'"
                                :error-messages="errors.collect('mortgagee')"
                                value="1"
                                label="抵押物是否需要重新评估"
                                data-vv-name="mortgage"
                                type="checkbox"
                                required
                        ></v-checkbox>
                        </v-layout>
                        </v-card>
                        <v-card>
                            <v-textarea
                                    outline
                                    name="appAmount"
                                    v-model="appAmount"
                                    label="申请使用民营企业信贷引导资金额（万元）"
                            ></v-textarea>
                        </v-card>
                        <v-card>
                            <v-textarea
                                    outline
                                    name="entComment"
                                    v-model="entComment"
                                    label="申请民营企业信贷引导资金企业意见"
                            ></v-textarea>
                        </v-card>
                        <v-card>
                            <v-card-title>请按照申报要求上传附件</v-card-title>
                            <select-files></select-files>
                        </v-card>
                        <div align="center">
                        <v-btn @click="submit" color="success">提交</v-btn>
                        <v-btn @click="clear" color="info">重置</v-btn>
                        </div>
                    </form>
                <!--</div>-->
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
    import api from "../api"
    import SelectFiles from "../components/SelectFiles";

    export default({
        name: 'Join',
        $_veeValidate: {
            validator: 'new'
        },

        components: {
          SelectFiles
        },

        data: () => ({
            entName: '',//申请企业
            rep: '',//法定代表人
            registerAmount: '', //注册资本
            estTime: '', //成立时间
            contact: '', //联系人
            tel: '', //电话
            mobile: '', //手机
            totalAsset: '', //资产总额
            totalLoan: '', //负债总额
            assetLoanRate: '', //资产负债
            loanBank: '', //贷款银行
            contractNumber: '', //流动资金贷款合同号
            loanAmount: '', //流动资金贷款总额
            loanRange: '', //流动资金贷款时限
            loanAmountFromSociety: '', //民间借贷资金额
            //guarantee: '', //担保方式
            //mortgagee: '', //抵押物是否需重新评估
            appAmount: '', //申请使用民营企业信贷引导资金额
            entComment: '', //申请民营企业信贷引导资金企业意见
            bankComment: '', //贷款银行对企业流动资金贷款审核意见1
            countyComment: '', //县区主管部门审核意见2
            countyGuideGroupComment: '', //县区民营企业信贷引导资金工作协调领导小组办公室审核意见3
            municipalComment: '', //市主管部门审核意见4
            depComment: '', //经办科室5
            municipalGuideGroupComment: '', //市民营企业信贷引导资金工作协调领导小组办公室审核意见6
            //age: { type: Number, min: 18, max: 65, required: true }
            appStatus: '', //1-6

            assetGuarantee: '0',
            land: '0',
            factory: '0',
            house: '0',
            machine: '0',
            assetOther: '0',
            promiseGuarantee: '0',
            thirdParty: '0',
            shareHolder: '0',
            mortgageeOther: '0',
            reevaluate: '0',

            attachments: [],

            items: [
                '招商银行',
                '建设银行',
                '农业银行',
                '中国银行',
                '交通银行',
                '工商银行'
            ],
            checkbox: null,
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
                    }
                }
            }
        }),

        mounted () {
            this.$validator.localize('zh', this.dictionary)
        },

        methods: {
            submit () {
                if(this.$store.getters.getLoanGuideAppFiles.length == 0){
                    alert('请上传附件')
                    return
                }else{
                    console.log(this.$store.getters.getLoanGuideAppFiles)
                    this.attachments = this.$store.getters.getLoanGuideAppFiles;
                    console.log(this.attachments);
                }

                this.$validator.validateAll().then(result => {
                    if(result) {
                        api.request('post', '/loanGuideApp', {
                            'entName': this.entName,//申请企业
                            'rep': this.rep,//法定代表人
                            'registerAmount': this.registerAmount, //注册资本
                            'estTime': this.estTime, //成立时间
                            'contact': this.contact, //联系人
                            'tel': this.tel, //电话
                            'mobile': this.mobile, //手机
                            'totalAsset': this.totalAsset, //资产总额
                            'totalLoan': this.totalLoan, //负债总额
                            'assetLoanRate': this.assetLoanRate, //资产负债
                            'loanBank': this.loanBank, //贷款银行
                            'contractNumber': this.contractNumber, //流动资金贷款合同号
                            'loanAmount': this.loanAmount, //流动资金贷款总额
                            'loanRange': this.loanRange, //流动资金贷款时限
                            'loanAmountFromSociety': this.loanAmountFromSociety, //民间借贷资金额
                            'appAmount': this.appAmount, //申请使用民营企业信贷引导资金额
                            'entComment': this.entComment, //申请民营企业信贷引导资金企业意见
                            'bankComment': '', //贷款银行对企业流动资金贷款审核意见1
                            'countyComment': '', //县区主管部门审核意见2
                            'countyGuideGroupComment': '', //县区民营企业信贷引导资金工作协调领导小组办公室审核意见3
                            'municipalComment': '', //市主管部门审核意见4
                            'depComment': '', //经办科室5
                            'municipalGuideGroupComment': '', //市民营企业信贷引导资金工作协调领导小组办公室审核意见6
                            'appStatus': '1', //1-6

                            'assetGuarantee': this.assetGuarantee,
                            'land': this.land,
                            'factory': this.factory,
                            'house': this.house,
                            'machine': this.machine,
                            'assetOther': this.assetOther,
                            'promiseGuarantee': this.promiseGuarantee,
                            'thirdParty': this.thirdParty,
                            'shareHolder': this.shareHolder,
                            'mortgageeOther' : this.mortgageeOther,
                            'reevaluate' : this.reevaluate,
                            'attachments': this.attachments
                        }).then(response => {
                            console.log(response)
                            if(response.status == 200){
                                alert('申请提交成功')
                                this.$router.push({ path: '/' })
                            }
                        })
                    }
                })
            },
            clear () {
                this.entName = ''
                this.rep = ''
                this.registerAmount= ''
                this.estTime= ''
                this.contact= ''
                this.tel= ''
                this.mobile= ''
                this.totalAsset= ''
                this.totalLoan= ''
                this.assetLoanRate= ''
                this.loanBank= ''
                this.contractNumber= ''
                this.loanAmount= ''
                this.loanRange= ''
                this.loanAmountFromSociety= ''
                this.appAmount= ''
                this.entComment= ''
                this.appStatus= ''

                this.assetGuarantee= '0'
                this.land= '0'
                this.factory= '0'
                this.house= '0'
                this.machine= '0'
                this.assetOther= '0'
                this.promiseGuarantee = '0'
                this.thirdParty= '0'
                this.shareHolder= '0'
                this.mortgageeOther= '0'
                this.reevaluate= '0'
                this.attchments = []

                this.$validator.reset()
            }
        }
    })
</script>
<style scoped>
    .one-line {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
</style>