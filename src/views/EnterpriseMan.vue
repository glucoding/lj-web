<template>
    <div id="app">
        <v-app id="inspire">
            <div>
                <v-toolbar flat color="light-blue darken-4" dark>
                    <v-toolbar-title>待入库中小企业列表</v-toolbar-title>
                    <v-divider
                            class="mx-2"
                            inset
                            vertical
                    ></v-divider>
                    <v-spacer></v-spacer>
                    <v-dialog v-model="dialog" max-width="1000px">
                        <v-container grid-list-md>
                            <v-card flat>
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
                                                                v-model="editedItem.entName"
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
                                                                v-model="editedItem.rep"
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
                                                                v-model="editedItem.registerAmount"
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
                                                                v-model="editedItem.contact"
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
                                                                v-model="editedItem.tel"
                                                                v-validate="'required'"
                                                                :error-messages="errors.collect('tel')"
                                                                label="联系电话"
                                                                data-vv-name="tel"
                                                                required
                                                        ></v-text-field>
                                                    </v-flex>
                                                    <v-flex ma-3>
                                                        <v-text-field
                                                                v-model="editedItem.mobile"
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
                                                                v-model="editedItem.region"
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
                                                                v-model="editedItem.industryGrossProduce"
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
                                                                v-model="editedItem.salesAmount"
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
                                                                v-model="editedItem.profit"
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
                                                                v-model="editedItem.taxContribute"
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
                                                                v-model="editedItem.totalAsset"
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
                                                                v-model="editedItem.debtAmount"
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
                                                                v-model="editedItem.debtRate"
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
                                                                    v-model="editedItem.entIntroduction"
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
                                                <v-card flat>
                                                    <v-card-text>云南省市场监管网上办事大厅登录信息</v-card-text>
                                                    <v-layout row>
                                                        <v-flex ma-3>
                                                            <v-text-field
                                                                    v-model="editedItem.marketUsername"
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
                                                                    v-model="editedItem.marketPassword"
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
                                                                    v-model="editedItem.taxUsername"
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
                                                                    v-model="editedItem.taxPassword"
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
                                                                    v-model="editedItem.hrUsername"
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
                                                                    v-model="editedItem.hrPassword"
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
                                                                    v-model="editedItem.electricUsername"
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
                                                                    v-model="editedItem.electricPassword"
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
                                    <v-btn @click="onOK" color="success">审核通过</v-btn>
                                    <v-btn @click="close" color="warning">审核不通过</v-btn>
                                </v-flex>
                            </v-layout>
                            </v-card>
                        </v-container>
                    </v-dialog>
                </v-toolbar>
                <v-data-table
                        :headers="headers"
                        :items="enterprises"
                        class="elevation-2"
                >
                    <template v-slot:no-data>
                        <v-alert :value="true" color="error" icon="warning">
                            抱歉，目前没有数据哦！ :(
                        </v-alert>
                    </template>
                    <template v-slot:items="props">
                        <td>{{ props.item._id }}</td>
                        <td class="text-xl-left">{{ props.item.entName }}</td>
                        <td class="text-xl-left">{{ props.item.contact }}</td>
                        <td class="text-xl-left">{{ props.item.mobile }}</td>
                        <td class="text-xl-left">{{ props.item.region }}</td>
                        <td class="text-xl-left">{{ props.item.industryGrossProduce }}</td>
                        <td class="text-xl-left">{{ props.item.status }}</td>
                        <td class="justify-center layout px-0">
                            <v-icon
                                    medium
                                    class="mr-2"
                                    @click="editItem(props.item)"
                            >
                                edit
                            </v-icon>
                            <v-icon
                                    medium
                                    @click="deleteItem(props.item)"
                            >
                                delete
                            </v-icon>
                        </td>
                    </template>
                    <template v-slot:no-data>
                        <v-btn color="primary" @click="initialize">重置</v-btn>
                    </template>
                </v-data-table>
            </div>
        </v-app>
    </div>
</template>

<script>
    import api from "../api"

    export default({
        // el: '#app',
        data: () => ({
            dialog: false,
            tab: null,
            headers: [
                {
                    text: '序号',
                    align: 'left',
                    sortable: false,
                    value: '_id'
                },
                { text: '企业名称', value: 'entName', sortable: true},
                { text: '联系人', value: 'contact', sortable: true},
                { text: '手机号码', value: 'mobile' },
                { text: '所属区县', value: 'region' },
                { text: '工业总产值', value: 'industryGrossProduce' },
                { text: '当前状态', value: 'status'}
            ],
            enterprises: [],
            editedIndex: -1,
            editedItem: {
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
                region: '',
                status: '', //审核状态 1：申请中 2：已入库
            },
            regions: [
                '古城区',
                '玉龙纳西族自治县',
                '永胜县',
                '华坪县',
                '宁蒗彝族自治县'
            ],
            items: [
                '1.企业基本信息',
                '2.背景调查所需信息'
            ],
            defaultItem: {
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
                status: '', //审核状态 1：申请中 2：已入库

                regions: [
                    '古城区',
                    '玉龙纳西族自治县',
                    '永胜县',
                    '华坪县',
                    '宁蒗彝族自治县'
                ]
            },
        }),

        computed: {
            formTitle () {
                return this.editedIndex === -1 ? '新增企业' : '查看企业信息'
            }
        },

        watch: {
            dialog (val) {
                val || this.close()
            }
        },

        created () {
            this.initialize()
        },

        methods: {
            initialize () {
                api.request('get','/enterprisesByStatus/' + '1', {
                }).then(response => {
                    if(response.status == 200){
                        this.enterprises = response.data;
                        //this.users.push(this.editedItem)
                        //this.$router.push({ path: '/' })
                    }
                })
            },

            editItem (item) {
                this.editedIndex = this.enterprises.indexOf(item)
                this.editedItem = Object.assign({}, item)
                this.dialog = true
            },

            deleteItem (item) {
                const index = this.enterprises.indexOf(item)
                this.editedIndex = this.enterprises.indexOf(item)
                this.editedItem = Object.assign({}, item)
                if(confirm('你确定你要删除此项么? 删除以后不可恢复哦')) {
                    api.request('delete', '/loanGuideApp/' + this.editedItem._id, {
                    }).then(response => {
                        if(response.status == 200){
                            alert('用户删除成功')
                            this.enterprises.splice(index, 1)
                            //this.users.push(this.editedItem)
                            //this.$router.push({ path: '/' })
                        }
                    })
                }
            },

            close () {
                this.dialog = false
                setTimeout(() => {
                    this.editedItem = Object.assign({}, this.defaultItem)
                    this.editedIndex = -1
                }, 300)
            },

            save () {
                if (this.editedIndex > -1) {
                    Object.assign(this.enterprises[this.editedIndex], this.editedItem)
                    api.request('put', '/enterprises/' + this.editedItem._id, {
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
                        'status': this.status, //审核状态 1：申请中 2：已入库

                        'assetGuarantee': this.editedItem.assetGuarantee,
                        'land': this.editedItem.land,
                        'factory': this.editedItem.factory,
                        'house': this.editedItem.house,
                        'machine': this.editedItem.machine,
                        'assetOther': this.editedItem.assetOther,
                        'promiseGuarantee': this.editedItem.promiseGuarantee,
                        'thirdParty': this.editedItem.thirdParty,
                        'shareHolder': this.editedItem.shareHolder,
                        'mortgageeOther': this.editedItem.mortgageeOther,
                        'reevaluate': this.editedItem.reevaluate
                    }).then(response => {
                        if(response.status == 200){
                            alert('更新成功')
                            this.applications.update(this.editedItem)
                            //this.users.push(this.editedItem)
                            //this.$router.push({ path: '/' })
                        }
                    })
                } else {
                    api.request('post', '/auth/signup', {
                        'username': this.editedItem.username,
                        'name': this.editedItem.name,
                        'password': this.editedItem.password,
                        'email': this.editedItem.email,
                        'mobile': this.editedItem.mobile,
                        'roles': [ this.editedItem.roles ]
                    }).then(response => {
                        if(response.status == 200){
                            alert('更新成功')
                            this.applications.push(this.editedItem)
                            //this.$router.push({ path: '/' })
                        }
                    })
                }
                this.close()
            },

            onOK() {
                if(this.editedItem.status < 2){
                    this.editedItem.status = '2'
                    this.save()
                }else{
                    alert('已经入库成功')
                }

            }
        }
    })
</script>

<style>
    .mytable .v-table tbody th td tr:not(:last-child) {
        background-color: lightgoldenrodyellow;
        border-bottom: none;
        font-size: 20px;
    }
</style>
