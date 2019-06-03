<template>
    <v-container grid-list-md>
        <v-layout row align-center justify-center wrap>
            <v-flex xs12 ma-3>
            <v-toolbar
                    color="light-blue darken-4"
                    dark
                    tabs
            >
                <v-toolbar-side-icon></v-toolbar-side-icon>

                <v-toolbar-title>企业入库</v-toolbar-title>

                <v-spacer></v-spacer>

                <v-btn icon>
                    <v-icon>more_vert</v-icon>
                </v-btn>

                <template v-slot:extension>
                    <v-tabs
                            v-model="tab"
                            color="light-blue darken-4"
                            grow
                    >
                        <v-tabs-slider color="yellow"></v-tabs-slider>

                        <v-tab
                                v-for="item in items"
                                :key="item"
                        >
                            {{ item }}
                        </v-tab>
                    </v-tabs>
                </template>
            </v-toolbar>
            </v-flex>

            <v-flex xs12 ma-3>
            <v-tabs-items v-model="tab">
                <v-tab-item>
                            <form>
                                <v-layout row>
                                    <v-flex ma-3>
                                    <v-text-field
                                            v-model="username"
                                            v-validate="'required|max:20'"
                                            :counter="20"
                                            :error-messages="errors.collect('username')"
                                            label="用户名"
                                            data-vv-name="username"
                                            required
                                    ></v-text-field>
                                    </v-flex>
                                </v-layout>
                                <v-layout row>
                                    <v-flex ma-3>
                                    <v-text-field
                                            v-model="password"
                                            v-validate="'required|max:10'"
                                            :counter="10"
                                            :error-messages="errors.collect('password')"
                                            label="密码"
                                            data-vv-name="password"
                                            :append-icon="e1 ? 'visibility' : 'visibility_off'"
                                            :append-icon-cb="() => (e1 = !e1)"
                                            :type="e1 ? 'password' : 'text'"
                                            counter
                                            required
                                    ></v-text-field>
                                    </v-flex>
                                    <v-flex ma-3>
                                    <v-text-field
                                            v-model="password2"
                                            v-validate="'required|max:10'"
                                            :counter="10"
                                            :error-messages="errors.collect('password2')"
                                            label="再次输入密码"
                                            data-vv-name="password2"
                                            :append-icon="e1 ? 'visibility' : 'visibility_off'"
                                            :append-icon-cb="() => (e1 = !e1)"
                                            :type="e1 ? 'password' : 'text'"
                                            counter
                                            required
                                    ></v-text-field>
                                    </v-flex>
                                </v-layout>
                                <v-layout row>
                                <v-flex ma-3>
                                <v-text-field
                                        v-model="email"
                                        v-validate="'required|email'"
                                        :error-messages="errors.collect('email')"
                                        label="E-mail"
                                        data-vv-name="email"
                                        required
                                ></v-text-field>
                                </v-flex>
                                <v-flex ma-3>
                                    <v-text-field
                                        v-model="mobile"
                                        v-validate="'required|max:10'"
                                        :error-messages="errors.collect('mobile')"
                                        label="手机号码"
                                        data-vv-name="mobile"
                                        required
                                ></v-text-field>
                                </v-flex>
                                </v-layout>
                            </form>
                </v-tab-item>
                <v-tab-item>
                    <form>
                        <v-layout row>
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
                                v-model="registerAmount"
                                v-validate="'required|max:10'"
                                :counter="10"
                                :error-messages="errors.collect('registerAmount')"
                                label="注册资本"
                                data-vv-name="registerAmount"
                                required
                        ></v-text-field>
                        </v-flex>
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
                        </v-layout>
                        <v-layout row>
                        <v-flex ma-3>
                        <v-text-field
                                v-model="tel"
                                v-validate="'required'"
                                :error-messages="errors.collect('tel')"
                                label="联系电话"
                                data-vv-name="tel"
                                required
                        ></v-text-field>
                        </v-flex>
                        <v-flex ma-3>
                        <v-text-field
                                v-model="mobile"
                                v-validate="'required|max:10'"
                                :error-messages="errors.collect('mobile')"
                                label="手机号码"
                                data-vv-name="mobile"
                                required
                        ></v-text-field>
                        </v-flex>
                        </v-layout>
                        <v-layout row>
                        <v-flex ma-3>
                        <v-select
                                v-model="region"
                                v-validate="'required'"
                                :items="regions"
                                :error-messages="errors.collect('region')"
                                label="所属区县"
                                data-vv-name="region"
                                required
                        ></v-select>
                        </v-flex>
                        <v-flex ma-3>
                        <v-text-field
                                v-model="industryGrossProduce"
                                v-validate="'required|max:10'"
                                :counter="10"
                                :error-messages="errors.collect('industryGrossProduce')"
                                label="工业总产值（万元）"
                                data-vv-name="industryGrossProduce"
                                required
                        ></v-text-field>
                        </v-flex>
                        </v-layout>
                        <v-layout row>
                        <v-flex ma-3>
                        <v-text-field
                                v-model="salesAmount"
                                v-validate="'required|max:10'"
                                :counter="10"
                                :error-messages="errors.collect('salesAmount')"
                                label="销售额（万元）"
                                data-vv-name="salesAmount"
                                required
                        ></v-text-field>
                        </v-flex>
                        <v-flex ma-3>
                        <v-text-field
                                v-model="profit"
                                v-validate="'required|max:10'"
                                :counter="10"
                                :error-messages="errors.collect('profit')"
                                label="利润（万元）"
                                data-vv-name="profit"
                                required
                        ></v-text-field>
                        </v-flex>
                        </v-layout>
                        <v-layout row>
                        <v-flex ma-3>
                        <v-text-field
                                v-model="taxContribute"
                                v-validate="'required|max:10'"
                                :counter="10"
                                :error-messages="errors.collect('taxContribute')"
                                label="税金（万元）"
                                data-vv-name="taxContribute"
                                required
                        ></v-text-field>
                        </v-flex>
                        <v-flex ma-3>
                        <v-text-field
                                v-model="totalAsset"
                                v-validate="'required|max:10'"
                                :counter="10"
                                :error-messages="errors.collect('totalAsset')"
                                label="总资产（万元）"
                                data-vv-name="totalAsset"
                                required
                        ></v-text-field>
                        </v-flex>
                        </v-layout>
                        <v-layout row>
                        <v-flex ma-3>
                        <v-text-field
                                v-model="debtAmount"
                                v-validate="'required|max:10'"
                                :counter="10"
                                :error-messages="errors.collect('debtAmount')"
                                label="负债总额（万元）"
                                data-vv-name="debtAmount"
                                required
                        ></v-text-field>
                        </v-flex>
                        <v-flex ma-3>
                        <v-text-field
                                v-model="debtRate"
                                v-validate="'required|max:10'"
                                :counter="10"
                                :error-messages="errors.collect('debtRate')"
                                label="资产负债率（%）"
                                data-vv-name="debtRate"
                                required
                        ></v-text-field>
                        </v-flex>
                        </v-layout>
                        <v-layout>
                        <v-flex ma-3>
                        <v-textarea outline
                                    v-model="entIntroduction"
                                    v-validate="required"
                                    :error-messages="errors.collect('entIntroduction')"
                                    label="企业简介(300字以内）"
                                    data-vv-name="entIntroduction"
                                    required
                        >

                        </v-textarea>
                        </v-flex>
                        </v-layout>
                    </form>
                </v-tab-item>
                <v-tab-item>
                    <form>
                        <v-card>
                            <v-card-title class="title align-center">保密声明</v-card-title>
                            <v-card-text class="red lighten-2">
                                丽江中小企业金融服务平台的业务是建立在与客户彼此信任的基础之上的，为了向您提供更优质、更高效的融资产品和服务，平台将通过www.ljfinance.com网站（以下简称“本平台”）收集您的部分信息。为了使您提供的所有信息都能得到机密保障，平台采用下述关于信息保护的政策：

                                1.本网站收集信息的范围仅限于那些丽江中小企业金融服务平台认为对了解您的财务需求和开展业务所必需的相关资料。

                                2.平台将对您提供的信息严格保密，除具备下列情形之一外，不会向任何外部机构披露您的信息：

                                （1）经过您事先同意而提供给银行查看您企业的背景记录；

                                （2）应法律法规的要求而披露；

                                （3）应政府部门或其他代理机构的要求而披露；

                                （4）应上级监管机构的要求而披露；

                                3.平台尽力确保对您的信息纪录是准确和及时的。

                                4.本网站设有严格的安全系统，以防止未经授权的任何人、包括平台的职员获取您的信息。

                                5.任何第三方，在得到平台许可获取您的个人信息时，都被要求严格遵守保密责任。

                                丽江中小企业金融服务平台遵守对以上政策的承诺，并将竭力维护您给于的信任。
                            </v-card-text>
                        </v-card>
                        <v-card flat>
                            <v-card-text>云南省市场监管网上办事大厅登录信息</v-card-text>
                            <v-layout row>
                                <v-flex ma-3>
                                    <v-text-field
                                            v-model="marketUsername"
                                            v-validate="'required|max:20'"
                                            :counter="20"
                                            :error-messages="errors.collect('marketUsername')"
                                            label="用户名"
                                            data-vv-name="marketUsername"
                                            required
                                    ></v-text-field>
                                </v-flex>
                                <v-flex ma-3>
                                    <v-text-field
                                            v-model="marketPassword"
                                            v-validate="'required|max:10'"
                                            :counter="10"
                                            :error-messages="errors.collect('marketPassword')"
                                            label="密码"
                                            data-vv-name="marketPassword"
                                            :append-icon="e1 ? 'visibility' : 'visibility_off'"
                                            :append-icon-cb="() => (e1 = !e1)"
                                            :type="e1 ? 'password' : 'text'"
                                            counter
                                            required
                                    ></v-text-field>
                                </v-flex>
                            </v-layout>
                        </v-card>
                        <v-card flat>
                            <v-card-text>云南省电子税务局登录信息</v-card-text>
                            <v-layout row>
                                <v-flex ma-3>
                                    <v-text-field
                                            v-model="taxUsername"
                                            v-validate="'required|max:20'"
                                            :counter="20"
                                            :error-messages="errors.collect('taxUsername')"
                                            label="用户名"
                                            data-vv-name="taxUsername"
                                            required
                                    ></v-text-field>
                                </v-flex>
                                <v-flex ma-3>
                                    <v-text-field
                                            v-model="taxPassword"
                                            v-validate="'required|max:10'"
                                            :counter="10"
                                            :error-messages="errors.collect('taxPassword')"
                                            label="密码"
                                            data-vv-name="taxPassword"
                                            :append-icon="e1 ? 'visibility' : 'visibility_off'"
                                            :append-icon-cb="() => (e1 = !e1)"
                                            :type="e1 ? 'password' : 'text'"
                                            counter
                                            required
                                    ></v-text-field>
                                </v-flex>
                            </v-layout>
                        </v-card>
                        <v-card flat>
                            <v-card-text>云南省劳动保障执法年审信息系统登录信息</v-card-text>
                            <v-layout row>
                                <v-flex ma-3>
                                    <v-text-field
                                            v-model="hrUsername"
                                            v-validate="'required|max:20'"
                                            :counter="20"
                                            :error-messages="errors.collect('hrUsername')"
                                            label="用户名"
                                            data-vv-name="hrUsername"
                                            required
                                    ></v-text-field>
                                </v-flex>
                                <v-flex ma-3>
                                    <v-text-field
                                            v-model="hrPassword"
                                            v-validate="'required|max:10'"
                                            :counter="10"
                                            :error-messages="errors.collect('hrPassword')"
                                            label="密码"
                                            data-vv-name="hrPassword"
                                            :append-icon="e1 ? 'visibility' : 'visibility_off'"
                                            :append-icon-cb="() => (e1 = !e1)"
                                            :type="e1 ? 'password' : 'text'"
                                            counter
                                            required
                                    ></v-text-field>
                                </v-flex>
                            </v-layout>
                        </v-card>
                        <v-card flat>
                            <v-card-text>云南电网网上营业厅登录信息</v-card-text>
                            <v-layout row>
                                <v-flex ma-3>
                                    <v-text-field
                                            v-model="electricUsername"
                                            v-validate="'required|max:20'"
                                            :counter="20"
                                            :error-messages="errors.collect('electricUsername')"
                                            label="用户名"
                                            data-vv-name="electricUsername"
                                            required
                                    ></v-text-field>
                                </v-flex>
                                <v-flex ma-3>
                                    <v-text-field
                                            v-model="electricPassword"
                                            v-validate="'required|max:10'"
                                            :counter="10"
                                            :error-messages="errors.collect('electricPassword')"
                                            label="密码"
                                            data-vv-name="electricPassword"
                                            :append-icon="e1 ? 'visibility' : 'visibility_off'"
                                            :append-icon-cb="() => (e1 = !e1)"
                                            :type="e1 ? 'password' : 'text'"
                                            counter
                                            required
                                    ></v-text-field>
                                </v-flex>
                            </v-layout>
                        </v-card>
                    </form>
                </v-tab-item>
            </v-tabs-items>
            </v-flex>

            <v-flex ma-3>
                <v-btn @click="submit" color="success">提交申请</v-btn>
                <v-btn @click="clear" color="info">重置</v-btn>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
    import api from "../api"

    export default({
        name: 'Join',
        $_veeValidate: {
            validator: 'new'
        },

        data: () => ({
            //用户基本信息
            username: '',
            name: '',
            password: '',
            password2: '',
            email: '',
            mobile: '',
            orgId:'',
            select: null,

            //企业基本信息
            entName: '', //企业名称
            rep: '', //法定代表人
            registerAmount: '', //注册资本
            contact: '', //联系人
            tel: '', //联系电话
            mobile: '', //手机
            industryGrossProduce: '', //工业总产值
            salesAmount: '', //销售额
            profit: '', //利润
            taxContribute: '', //税金
            totalAsset: '', //总资产
            debtAmount: '', //负债总额
            debtRate: '', //资产负债率
            entIntroduction: '', //企业简介
            approveBy: '', //经办科室
            remark: '', //审核意见
            region: '', //所属区县
            status: '', //审核状态 1：申请中 2：已入库

            marketUsername: '',
            marketPassword: '',
            taxUsername: '',
            taxPassword: '',
            hrUsername: '',
            hrPassword: '',
            electricUsername: '',
            electricPassword: '',

            items: [
                '1.用户基本信息',
                '2.用户所属企业基本信息',
                '3.背景调查所需信息'
            ],
            tab: null,
            regions: [
                '古城区',
                '玉龙纳西族自治县',
                '永胜县',
                '华坪县',
                '宁蒗彝族自治县'
            ],
            checkbox: null,
            e1: true,
            e2: true,
            e3: true,
            e4: true,
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
            this.$validator.localize('zh_cn', this.dictionary)
        },

        methods: {
            submit () {
                console.log(this.username)
                this.$validator.validateAll().then(result => {
                    console.log(this.username);
                    if(result) {
                        //提交企业
                        api.request('post', '/enterprises', {
                            'entName': this.entName, //企业名称
                            'rep': this.rep, //法定代表人
                            'registerAmount': this.registerAmount, //注册资本
                            'contact': this.contact, //联系人
                            'tel': this.tel, //联系电话
                            'mobile': this.mobile, //手机
                            'industryGrossProduce': this.industryGrossProduce, //工业总产值
                            'salesAmount': this.salesAmount, //销售额
                            'profit': this.profit, //利润
                            'taxContribute': this.taxContribute, //税金
                            'totalAsset': this.totalAsset, //总资产
                            'debtAmount': this.debtAmount, //负债总额
                            'debtRate': this.debtRate, //资产负债率
                            'entIntroduction': this.entIntroduction, //企业简介
                            'approveBy': this.approveBy, //经办科室
                            'remark': this.remark, //审核意见
                            'region': this.region, //所属区县
                            'status': '1', //审核状态 1：申请中 2：已入库

                            marketUsername: this.marketUsername,
                            marketPassword: this.marketPassword,
                            taxUsername: this.taxUsername,
                            taxPassword: this.taxPassword,
                            hrUsername: this.hrUsername,
                            hrPassword: this.hrPassword,
                            electricUsername: this.electricUsername,
                            electricPassword: this.electricPassword
                        }).then(response => {
                            console.log(response)
                            if(response.status == 200){
                                alert('新企业添加成功')
                                console.log(response.data);
                                //提交用户
                                api.request('post', '/auth/signup', {
                                    'username': this.username,
                                    'name': this.name,
                                    'password': this.password,
                                    'email': this.email,
                                    'mobile': this.mobile,
                                    'roles': ['USER'],
                                    'region': this.region,
                                    'orgId': response.data._id
                                }).then(response => {
                                    console.log(response)
                                    if(response.status == 200){
                                        alert('新用户添加成功')
                                        console.log(response.data)
                                    }
                                })
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