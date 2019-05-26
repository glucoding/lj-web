<template>
    <v-container fluid fill-height>
        <v-layout row align-center justify-center wrap>
            <v-flex xs6 sm6 md6 lg8>
            <v-toolbar
                    color="light-blue darken-4"
                    dark
                    tabs
            >
                <v-toolbar-side-icon></v-toolbar-side-icon>

                <v-toolbar-title>企业入库</v-toolbar-title>

                <v-spacer></v-spacer>

                <v-btn icon>
                    <v-icon>search</v-icon>
                </v-btn>

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

            <v-flex xs12 sm12 md12 lg8>
            <v-tabs-items v-model="tab">
                <v-tab-item>
                            <form>
                                <v-text-field
                                        v-model="username"
                                        v-validate="'required|max:20'"
                                        :counter="20"
                                        :error-messages="errors.collect('username')"
                                        label="用户名"
                                        data-vv-name="username"
                                        required
                                ></v-text-field>
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
                                <v-text-field
                                        v-model="email"
                                        v-validate="'required|email'"
                                        :error-messages="errors.collect('email')"
                                        label="E-mail"
                                        data-vv-name="email"
                                        required
                                ></v-text-field>
                                <v-text-field
                                        v-model="mobile"
                                        v-validate="'required|max:10'"
                                        :error-messages="errors.collect('mobile')"
                                        label="手机号码"
                                        data-vv-name="mobile"
                                        required
                                ></v-text-field>
                            </form>
                </v-tab-item>
                <v-tab-item>
                    <form>
                        <v-text-field
                                v-model="entName"
                                v-validate="'required|max:20'"
                                :counter="20"
                                :error-messages="errors.collect('entName')"
                                label="企业名称"
                                data-vv-name="entName"
                                required
                        ></v-text-field>
                        <v-text-field
                                v-model="rep"
                                v-validate="'required|max:10'"
                                :counter="10"
                                :error-messages="errors.collect('rep')"
                                label="法定代表人"
                                data-vv-name="rep"
                                required
                        ></v-text-field>
                        <v-text-field
                                v-model="registerAmount"
                                v-validate="'required|max:10'"
                                :counter="10"
                                :error-messages="errors.collect('registerAmount')"
                                label="注册资本"
                                data-vv-name="registerAmount"
                                required
                        ></v-text-field>
                        <v-text-field
                                v-model="contact"
                                v-validate="'required|max:10'"
                                :counter="10"
                                :error-messages="errors.collect('contact')"
                                label="联系人"
                                data-vv-name="contact"
                                required
                        ></v-text-field>
                        <v-text-field
                                v-model="tel"
                                v-validate="'required'"
                                :error-messages="errors.collect('tel')"
                                label="联系电话"
                                data-vv-name="tel"
                                required
                        ></v-text-field>
                        <v-text-field
                                v-model="mobile"
                                v-validate="'required|max:10'"
                                :error-messages="errors.collect('mobile')"
                                label="手机号码"
                                data-vv-name="mobile"
                                required
                        ></v-text-field>
                        <v-select
                                v-model="region"
                                v-validate="'required'"
                                :items="regions"
                                :error-messages="errors.collect('region')"
                                label="所属区县"
                                data-vv-name="region"
                                required
                        ></v-select>
                        <v-text-field
                                v-model="industryGrossProduce"
                                v-validate="'required|max:10'"
                                :counter="10"
                                :error-messages="errors.collect('industryGrossProduce')"
                                label="工业总产值（万元）"
                                data-vv-name="industryGrossProduce"
                                required
                        ></v-text-field>
                        <v-text-field
                                v-model="salesAmount"
                                v-validate="'required|max:10'"
                                :counter="10"
                                :error-messages="errors.collect('salesAmount')"
                                label="销售额（万元）"
                                data-vv-name="salesAmount"
                                required
                        ></v-text-field>
                        <v-text-field
                                v-model="profit"
                                v-validate="'required|max:10'"
                                :counter="10"
                                :error-messages="errors.collect('profit')"
                                label="利润（万元）"
                                data-vv-name="profit"
                                required
                        ></v-text-field>
                        <v-text-field
                                v-model="taxContribute"
                                v-validate="'required|max:10'"
                                :counter="10"
                                :error-messages="errors.collect('taxContribute')"
                                label="税金（万元）"
                                data-vv-name="taxContribute"
                                required
                        ></v-text-field>
                        <v-text-field
                                v-model="totalAsset"
                                v-validate="'required|max:10'"
                                :counter="10"
                                :error-messages="errors.collect('totalAsset')"
                                label="总资产（万元）"
                                data-vv-name="totalAsset"
                                required
                        ></v-text-field>
                        <v-text-field
                                v-model="debtAmount"
                                v-validate="'required|max:10'"
                                :counter="10"
                                :error-messages="errors.collect('debtAmount')"
                                label="负债总额（万元）"
                                data-vv-name="debtAmount"
                                required
                        ></v-text-field>
                        <v-text-field
                                v-model="debtRate"
                                v-validate="'required|max:10'"
                                :counter="10"
                                :error-messages="errors.collect('debtRate')"
                                label="资产负债率（%）"
                                data-vv-name="debtRate"
                                required
                        ></v-text-field>
                        <v-textarea v-model="entIntroduction"
                                    v-validate="required"
                                    :error-messages="errors.collect('entIntroduction')"
                                    label="企业简介(300字以内）"
                                    data-vv-name="entIntroduction"
                                    required
                        >

                        </v-textarea>
                    </form>
                </v-tab-item>
            </v-tabs-items>
            </v-flex>
            <v-flex xs5 sm5 md5 lg5 >
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

            items: [
                '1.用户基本信息',
                '2.用户所属企业基本信息'
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