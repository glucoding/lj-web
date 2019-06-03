<template>
    <v-container fluid fill-height>
        <v-layout row align-center justify-center>
            <v-flex xs12 sm12 md4 lg8>
                <v-toolbar
                        color="light-blue darken-4" dark
                >
                    <v-toolbar-side-icon></v-toolbar-side-icon>
                    <v-toolbar-title>填写融资产品意向申请表</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-btn icon>
                        <v-icon>search</v-icon>
                    </v-btn>
                </v-toolbar>
                <div>
                    <form>
                        <v-card flat>
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
                                            v-model="rep"
                                            v-validate="'required|max:10'"
                                            :counter="10"
                                            :error-messages="errors.collect('rep')"
                                            label="法定代表人"
                                            data-vv-name="rep"
                                            required
                                    ></v-text-field>
                                </v-flex>
                            </v-layout>
                            <v-layout row>
                                <v-flex ma-3>
                                    <v-text-field
                                            v-model="repTel"
                                            v-validate="'required|max:10'"
                                            :counter="10"
                                            :error-messages="errors.collect('repTel')"
                                            label="法定代表人电话"
                                            data-vv-name="repTel"
                                            required
                                    ></v-text-field>
                                </v-flex>
                                <v-flex ma-3>
                                    <v-text-field
                                            v-model="repMobile"
                                            v-validate="'required|max:13'"
                                            :counter="13"
                                            :error-messages="errors.collect('repMobile')"
                                            label="法定代表人手机"
                                            data-vv-name="repMobile"
                                            required
                                    ></v-text-field>
                                </v-flex>
                            </v-layout>
                            <v-layout row>
                                <v-flex ma-3>
                                    <v-text-field
                                             v-model="contact"
                                             v-validate="'required|max:10'"
                                             :counter="10"
                                             :error-messages="errors.collect('contact')"
                                             label="联系人"
                                             data-vv-name="contact"
                                             required
                                    ></v-text-field>
                                </v-flex>
                                <v-flex ma-3>
                                    <v-text-field
                                            v-model="contactTel"
                                            v-validate="'required|max:10'"
                                            :counter="10"
                                            :error-messages="errors.collect('contactTel')"
                                            label="联系人电话"
                                            data-vv-name="contactTel"
                                            required
                                    ></v-text-field>
                                </v-flex>
                            </v-layout>
                            <v-layout row>
                                <v-flex ma-3>
                                    <v-text-field
                                            v-model="address"
                                            v-validate="'required|max:10'"
                                            :counter="10"
                                            :error-messages="errors.collect('address')"
                                            label="地址"
                                            data-vv-name="address"
                                            required
                                    ></v-text-field>
                                </v-flex>
                                <v-flex ma-3>
                                    <v-text-field
                                            v-model="email"
                                            v-validate="'required|max:13'"
                                            :counter="13"
                                            :error-messages="errors.collect('email')"
                                            label="邮件"
                                            data-vv-name="email"
                                            required
                                    ></v-text-field>
                                </v-flex>
                            </v-layout>
                            <v-layout row>
                                <v-flex ma-3>
                                    <v-select
                                            v-model="industry"
                                            v-validate="'required'"
                                            :items="industryItems"
                                            :error-messages="errors.collect('industry')"
                                            label="所属行业"
                                            data-vv-name="industry"
                                            required
                                    ></v-select>
                                </v-flex>
                                <v-flex ma-3>
                                    <v-text-field
                                            v-model="numOfEmployees"
                                            v-validate="'required|max:13'"
                                            :counter="13"
                                            :error-messages="errors.collect('numOfEmployees')"
                                            label="员工人数"
                                            data-vv-name="numOfEmployees"
                                            required
                                    ></v-text-field>
                                </v-flex>
                            </v-layout>
                            <v-layout row>
                                <v-flex ma-3>
                                    <v-text-field
                                            v-model="totalIncome"
                                            v-validate="'required|max:13'"
                                            :counter="13"
                                            :error-messages="errors.collect('totalIncome')"
                                            label="税金"
                                            data-vv-name="totalIncome"
                                            required
                                    ></v-text-field>
                                </v-flex>
                                <v-flex ma-3>
                                    <v-text-field
                                            v-model="totalAsset"
                                            v-validate="'required|max:13'"
                                            :counter="13"
                                            :error-messages="errors.collect('totalAsset')"
                                            label="总资产"
                                            data-vv-name="totalAsset"
                                            required
                                    ></v-text-field>
                                </v-flex>
                            </v-layout>

                            <v-card>
                                <v-layout row>
                                    <v-flex ma-3>
                                        <v-slider
                                                label="融资期限"
                                                v-model="duration"
                                                :max="36"
                                                thumb-label
                                                :step="1"
                                        ></v-slider>
                                    </v-flex>
                                </v-layout>
                                <v-layout>
                                    <v-flex ma-3>
                                        <v-text-field
                                                v-model="loanAmount"
                                                v-validate="'required|max:13'"
                                                :counter="13"
                                                :error-messages="errors.collect('loanAmount')"
                                                label="信贷金额"
                                                data-vv-name="loanAmount"
                                                required
                                        ></v-text-field>
                                    </v-flex>
                                    <v-flex ma-3>
                                        <v-text-field
                                                v-model="usage"
                                                v-validate="'required|max:13'"
                                                :counter="13"
                                                :error-messages="errors.collect('usage')"
                                                label="借款用途"
                                                data-vv-name="usage"
                                                required
                                        ></v-text-field>
                                    </v-flex>
                                </v-layout>
                                <v-layout row>
                                    <v-flex ma-3>
                                        <v-text-field
                                                v-model="productName"
                                                v-validate="'required|max:13'"
                                                :counter="13"
                                                :error-messages="errors.collect('productName')"
                                                label="借款品种"
                                                data-vv-name="productName"
                                                required
                                        ></v-text-field>
                                    </v-flex>
                                    <v-flex ma-3>
                                        <v-select
                                                v-model="repaymentBy"
                                                v-validate="'required'"
                                                :items="repaymentByItems"
                                                :error-messages="errors.collect('repaymentBy')"
                                                label="还款来源"
                                                data-vv-name="repaymentBy"
                                                required
                                        ></v-select>
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
                                        <v-textarea
                                                outline
                                                v-model="selfBankLoan"
                                                v-validate="'required|max:50'"
                                                :error-messages="errors.collect('selfBankLoan')"
                                                label="贷款人在本行过去贷款情况"
                                                data-vv-name="selfBankLoan"
                                                required
                                        ></v-textarea>
                                    </v-flex>
                                </v-layout>
                                <v-layout row>
                                    <v-flex ma-3>
                                        <v-textarea
                                                outline
                                                v-model="familyBankLoan"
                                                v-validate="'required|max:50'"
                                                :error-messages="errors.collect('familyBankLoan')"
                                                label="贷款人家庭在本行过去贷款情况"
                                                data-vv-name="familyBankLoan"
                                                required
                                        ></v-textarea>
                                    </v-flex>
                                </v-layout>
                                <v-layout row>
                                    <v-flex ma-3>
                                        <v-textarea
                                                outline
                                                v-model="selfOtherBankLoan"
                                                v-validate="'required|max:10'"
                                                :error-messages="errors.collect('selfOtherBankLoan')"
                                                label="贷款人在其他银行贷款情况"
                                                data-vv-name="selfOtherBankLoan"
                                                required
                                        ></v-textarea>
                                    </v-flex>
                                </v-layout>
                                <v-layout row>
                                    <v-flex ma-3>
                                        <v-textarea
                                                outline
                                                v-model="familyOtherBankLoan"
                                                v-validate="'required|max:10'"
                                                :error-messages="errors.collect('familyOtherBankLoan')"
                                                label="贷款人家庭在其他银行贷款情况"
                                                data-vv-name="familyOtherBankLoan"
                                                required
                                        ></v-textarea>
                                    </v-flex>
                                </v-layout>

                                <v-card flat>
                                    <v-layout column align-center justify-center>
                                        <v-flex ma-3>
                                            <v-btn @click="submit" color="success">提交</v-btn>

                                            <v-btn @click="clear" color="warning">重置</v-btn>
                                        </v-flex>
                                    </v-layout>
                                </v-card>
                            </v-card>
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
            entId: '', //企业id
            entName: '', //企业名称
            rep: '', //法定代表人
            repTel: '', //法定代表人电话
            repMobile: '', //法定代表人移动电话
            contact: '', //联系人
            contactTel: '', //联系电话
            contactMobile: '', //联系移动电话
            address: '', //企业地址
            email: '', //电子邮件
            industry: '', //所属行业
            numOfEmployees: '', //员工人数
            totalIncome: '', //税金
            totalAsset: '', //总资产

            //申请基本信息
            loanAmount:'', //借款金额
            duration: '', //期限
            usage: '', //借款用途
            orgId: '', //所属银行id
            productId: '', //信贷品种
            productName: '',//For displaying product
            repaymentBy: '', //还款来源
            guaranteeBy: '', //担保方式
            selfBankLoan: '', //贷款人在本行过去贷款情况
            familyBankLoan: '', //贷款人家庭在本行过去贷款情况
            selfOtherBankLoan: '', //贷款人在其他银行贷款情况
            familyOtherBankLoan: '', //贷款人家庭在其他银行贷款情况
            attachments: '',


            submitTime: '',
            remark: '', //审核意见
            status: '', //审核状态 1：申请中 2：已入库

            industryItems: [
                '农、林、牧、渔业',
                '采矿业',
                '制造业',
                '电力、热力、燃气及水生产和供应业',
                '建筑业',
                '批发和零售业',
                '交通运输、仓储和邮政业',
                '住宿和餐饮业',
                '信息传输、软件和信息技术服务业',
                '金融业',
                '房地产业',
                '科学研究和技术服务业',
                '水利、环境和公共设施管理业',
                '居民服务、修理及其他服务业',
                '教育',
                '卫生和社会工作',
                '文化、体育和娱乐业',
                '公共管理、社会保障和社会组织',
                '国际组织'
            ],

            repaymentByItems: [
              '销售回款',
              '其他'
            ],

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
                this.entId = response.data._id
                this.entName = response.data.entName
                this.rep = response.data.rep
                this.contact = response.data.contact
            })
            api.request('get', '/loanProduct/' + this.$route.query._id, {}).then(response => {
              this.productId = response.data._id
              this.productName = response.data.name
              this.orgId = response.data.orgId
            })
        },

        methods: {
            submit () {
                this.$validator.validateAll().then(result => {
                    this.img = this.$store.getters.getSingleUploadFile;

                    if(result) {
                        api.request('post', '/loanProductApp', {
                            entId: this.entId, //企业id
                            entName: this.entName, //企业名称
                            rep: this.rep, //法定代表人
                            repTel: this.repTel, //法定代表人电话
                            repMobile: this.repMobile, //法定代表人移动电话
                            contact: this.contact, //联系人
                            contactTel: this.contactTel, //联系电话
                            contactMobile: this.contactMobile, //联系移动电话
                            address: this.address, //企业地址
                            email: this.email, //电子邮件
                            industry: this.industry, //所属行业
                            numOfEmployees: this.numOfEmployees, //员工人数
                            totalIncome: this.totalIncome, //税金
                            totalAsset: this.totalAsset, //总资产

                            //申请基本信息
                            loanAmount:this.loanAmount, //借款金额
                            duration: this.duration, //期限
                            usage: this.usage, //借款用途
                            orgId: this.orgId,
                            productId: this.productId, //信贷品种
                            repaymentBy: this.repaymentBy, //还款来源
                            guaranteeBy: this.guaranteeBy, //担保方式
                            selfBankLoan: this.selfBankLoan, //贷款人在本行过去贷款情况
                            familyBankLoan: this.familyBankLoan, //贷款人家庭在本行过去贷款情况
                            selfOtherBankLoan: this.selfOtherBankLoan, //贷款人在其他银行贷款情况
                            familyOtherBankLoan: this.familyOtherBankLoan, //贷款人家庭在其他银行贷款情况
                            attachments: this.attachments,


                            submitTime: new Date(),
                            //remark: this.remark, //审核意见
                            status: 1, //审核状态 1：意向申请中 2:意向申请审查通过，进入正式审批流程 3：银行审批通过，4：贷款已发放
                        }).then(response => {
                            console.log(response)
                            if(response.status == 200){
                                alert('申请提交成功')
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