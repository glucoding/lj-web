<template>
    <div id="app">
        <v-app id="inspire">
            <div>
                <v-toolbar flat color="white">
                    <v-toolbar-title>中小企业列表</v-toolbar-title>
                    <v-divider
                            class="mx-2"
                            inset
                            vertical
                    ></v-divider>
                    <v-spacer></v-spacer>
                    <v-dialog v-model="dialog" max-width="1000px">
                        <template v-slot:activator="{ on }">
                            <v-btn color="primary" dark class="mb-2" v-on="on">手动新增企业</v-btn>
                        </template>
                        <v-card>
                            <v-card-title>
                                <span class="headline">{{ formTitle }}</span>
                            </v-card-title>

                            <v-card-text>
                                <v-container grid-list-md>
                                    <v-text-field
                                            v-model="editedItem.entName"
                                            v-validate="'required|max:20'"
                                            :counter="20"
                                            :error-messages="errors.collect('entName')"
                                            label="企业名称"
                                            data-vv-name="entName"
                                            required
                                    ></v-text-field>
                                    <v-text-field
                                            v-model="editedItem.rep"
                                            v-validate="'required|max:10'"
                                            :counter="10"
                                            :error-messages="errors.collect('rep')"
                                            label="法定代表人"
                                            data-vv-name="rep"
                                            required
                                    ></v-text-field>
                                    <v-text-field
                                            v-model="editedItem.registerAmount"
                                            v-validate="'required|max:10'"
                                            :counter="10"
                                            :error-messages="errors.collect('registerAmount')"
                                            label="注册资本"
                                            data-vv-name="registerAmount"
                                            required
                                    ></v-text-field>
                                    <v-text-field
                                            v-model="editedItem.contact"
                                            v-validate="'required|max:10'"
                                            :counter="10"
                                            :error-messages="errors.collect('contact')"
                                            label="联系人"
                                            data-vv-name="contact"
                                            required
                                    ></v-text-field>
                                    <v-text-field
                                            v-model="editedItem.tel"
                                            v-validate="'required'"
                                            :error-messages="errors.collect('tel')"
                                            label="联系电话"
                                            data-vv-name="tel"
                                            required
                                    ></v-text-field>
                                    <v-text-field
                                            v-model="editedItem.mobile"
                                            v-validate="'required|max:10'"
                                            :error-messages="errors.collect('mobile')"
                                            label="手机号码"
                                            data-vv-name="mobile"
                                            required
                                    ></v-text-field>
                                    <v-select
                                            v-model="editedItem.region"
                                            v-validate="'required'"
                                            :items="regions"
                                            :error-messages="errors.collect('region')"
                                            label="所属区县"
                                            data-vv-name="region"
                                            required
                                    ></v-select>
                                    <v-text-field
                                            v-model="editedItem.industryGrossProduce"
                                            v-validate="'required|max:10'"
                                            :counter="10"
                                            :error-messages="errors.collect('industryGrossProduce')"
                                            label="工业总产值（万元）"
                                            data-vv-name="industryGrossProduce"
                                            required
                                    ></v-text-field>
                                    <v-text-field
                                            v-model="editedItem.salesAmount"
                                            v-validate="'required|max:10'"
                                            :counter="10"
                                            :error-messages="errors.collect('salesAmount')"
                                            label="销售额（万元）"
                                            data-vv-name="salesAmount"
                                            required
                                    ></v-text-field>
                                    <v-text-field
                                            v-model="editedItem.profit"
                                            v-validate="'required|max:10'"
                                            :counter="10"
                                            :error-messages="errors.collect('profit')"
                                            label="利润（万元）"
                                            data-vv-name="profit"
                                            required
                                    ></v-text-field>
                                    <v-text-field
                                            v-model="editedItem.taxContribute"
                                            v-validate="'required|max:10'"
                                            :counter="10"
                                            :error-messages="errors.collect('taxContribute')"
                                            label="税金（万元）"
                                            data-vv-name="taxContribute"
                                            required
                                    ></v-text-field>
                                    <v-text-field
                                            v-model="editedItem.totalAsset"
                                            v-validate="'required|max:10'"
                                            :counter="10"
                                            :error-messages="errors.collect('totalAsset')"
                                            label="总资产（万元）"
                                            data-vv-name="totalAsset"
                                            required
                                    ></v-text-field>
                                    <v-text-field
                                            v-model="editedItem.debtAmount"
                                            v-validate="'required|max:10'"
                                            :counter="10"
                                            :error-messages="errors.collect('debtAmount')"
                                            label="负债总额（万元）"
                                            data-vv-name="debtAmount"
                                            required
                                    ></v-text-field>
                                    <v-text-field
                                            v-model="editedItem.debtRate"
                                            v-validate="'required|max:10'"
                                            :counter="10"
                                            :error-messages="errors.collect('debtRate')"
                                            label="资产负债率（%）"
                                            data-vv-name="debtRate"
                                            required
                                    ></v-text-field>
                                    <v-textarea v-model="editedItem.entIntroduction"
                                                v-validate="required"
                                                :error-messages="errors.collect('entIntroduction')"
                                                label="企业简介(300字以内）"
                                                data-vv-name="entIntroduction"
                                                required
                                    ></v-textarea>
                                </v-container>
                            </v-card-text>

                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="blue darken-1" flat @click="audit" v-if="this.$store.getters.getUser.role != 'USER'">审核</v-btn>
                                <v-btn color="blue darken-1" flat @click="close">取消</v-btn>
                                <v-btn color="blue darken-1" flat @click="save">保存</v-btn>
                            </v-card-actions>
                        </v-card>
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
                console.log('start initialising')
                api.request('get','/enterprises', {
                }).then(response => {
                    if(response.status == 200){
                        this.enterprises = response.data;
                        console.log(this.enterprises);
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
                    Object.assign(this.applications[this.editedIndex], this.editedItem)
                    api.request('put', '/loanGuideApps/' + this.editedItem._id, {
                        'entName': this.editedItem.entName,//申请企业
                        'rep': this.editedItem.rep,//法定代表人
                        'registerAmount': this.editedItem.registerAmount, //注册资本
                        'estTime': this.editedItem.estTime, //成立时间
                        'contact': this.editedItem.contact, //联系人
                        'tel': this.editedItem.tel, //电话
                        'mobile': this.editedItem.mobile, //手机
                        'totalAsset': this.editedItem.totalAsset, //资产总额
                        'totalLoan': this.editedItem.totalLoan, //负债总额
                        'assetLoanRate': this.editedItem.assetLoanRate, //资产负债
                        'loanBank': this.editedItem.loanBank, //贷款银行
                        'contractNumber': this.editedItem.contractNumber, //流动资金贷款合同号
                        'loanAmount': this.editedItem.loanAmount, //流动资金贷款总额
                        'loanRange': this.editedItem.loanRange, //流动资金贷款时限
                        'loanAmountFromSociety': this.editedItem.loanAmountFromSociety, //民间借贷资金额
                        'appAmount': this.editedItem.appAmount, //申请使用民营企业信贷引导资金额
                        'entComment': this.editedItem.entComment, //申请民营企业信贷引导资金企业意见
                        'bankComment': this.editedItem.bankComment, //贷款银行对企业流动资金贷款审核意见1
                        'countyComment': this.editedItem.countyComment, //县区主管部门审核意见2
                        'countyGuideGroupComment': this.editedItem.countyGuideGroupComment, //县区民营企业信贷引导资金工作协调领导小组办公室审核意见3
                        'municipalComment': this.editedItem.municipalComment, //市主管部门审核意见4
                        'depComment': this.editedItem.depComment, //经办科室5
                        'municipalGuideGroupComment': this.editedItem.municipalGuideGroupComment, //市民营企业信贷引导资金工作协调领导小组办公室审核意见6
                        'appStatus': this.editedItem.appStatus, //1-6

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
                            alert('申请状态修改成功')
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
                            alert('新用户添加成功')
                            this.applications.push(this.editedItem)
                            //this.$router.push({ path: '/' })
                        }
                    })
                }
                this.close()
            },

            audit() {
                this.editedItem.status ++
                this.save()
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
