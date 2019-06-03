<template>
    <div id="app">
            <div>
                <v-toolbar flat color="light-blue darken-4" dark>
                    <v-toolbar-title>融资产品管理</v-toolbar-title>
                    <v-divider
                            class="mx-2"
                            inset
                            vertical
                    ></v-divider>
                    <v-spacer></v-spacer>
                    <v-dialog v-model="dialog" max-width="700px">
                        <template v-slot:activator="{ on }">
                            <v-btn color="primary" dark class="mb-2" v-on="on">新增融资产品</v-btn>
                        </template>
                        <v-card>
                            <v-layout row align-center justify-center>
                                <v-flex xs12 sm12 md4 lg8>
                                    <v-toolbar
                                            color="light-blue darken-4" dark
                                    >
                                        <v-toolbar-side-icon></v-toolbar-side-icon>
                                        <v-toolbar-title>融资产品信息</v-toolbar-title>
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
                                                                v-model="editedItem.orgName"
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
                                                                v-model="editedItem.name"
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
                                                                v-model="editedItem.type"
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
                                                                v-model="editedItem.approveBy"
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
                                                                v-model="editedItem.serviceFor"
                                                                value="微型企业"
                                                                label="微型企业"
                                                                data-vv-name="serviceFor"
                                                                type="checkbox"
                                                        ></v-checkbox>
                                                    </v-flex>
                                                    <v-flex>
                                                        <v-checkbox
                                                                v-model="editedItem.serviceFor"
                                                                value="个体工商户"
                                                                label="个体工商户"
                                                                data-vv-name="serviceFor"
                                                                type="checkbox"
                                                        ></v-checkbox>
                                                    </v-flex>
                                                    <v-flex>
                                                        <v-checkbox
                                                                v-model="editedItem.serviceFor"
                                                                value="小型企业"
                                                                label="小型企业"
                                                                data-vv-name="serviceFor"
                                                                type="checkbox"
                                                        ></v-checkbox>
                                                    </v-flex>
                                                    <v-flex>
                                                        <v-checkbox
                                                                v-model="editedItem.serviceFor"
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
                                                                v-model="editedItem.guaranteeBy"
                                                                value="信用"
                                                                label="信用"
                                                                data-vv-name="guaranteeBy"
                                                                type="checkbox"
                                                        ></v-checkbox>
                                                    </v-flex>
                                                    <v-flex>
                                                        <v-checkbox
                                                                v-model="editedItem.guaranteeBy"
                                                                value="抵押"
                                                                label="抵押"
                                                                data-vv-name="guaranteeBy"
                                                                type="checkbox"
                                                        ></v-checkbox>
                                                    </v-flex>
                                                    <v-flex>
                                                        <v-checkbox
                                                                v-model="editedItem.guaranteeBy"
                                                                value="质押"
                                                                label="质押"
                                                                data-vv-name="guaranteeBy"
                                                                type="checkbox"
                                                        ></v-checkbox>
                                                    </v-flex>
                                                    <v-flex>
                                                        <v-checkbox
                                                                v-model="editedItem.guaranteeBy"
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
                                                                v-model="editedItem.interestRate"
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
                                                                v-model="editedItem.minimumAmount"
                                                                v-validate="'required|max:10'"
                                                                :error-messages="errors.collect('minimumAmount')"
                                                                label="最低额度"
                                                                data-vv-name="minimumAmount"
                                                                required
                                                        ></v-text-field>
                                                    </v-flex>
                                                    <v-flex ma-3>
                                                        <v-text-field
                                                                v-model="editedItem.maximumAmount"
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
                                                                v-model="editedItem.durationLimit"
                                                                :max="36"
                                                                thumb-label
                                                                :step="1"
                                                        ></v-slider>
                                                    </v-flex>
                                                    <v-flex ma-3>
                                                        <v-text-field
                                                                v-model="editedItem.remainingAmount"
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
                                                        v-model="editedItem.intro"
                                                        v-validate="'required|max:100'"
                                                        :error-messages="errors.collect('intro')"
                                                        label="产品简要介绍"
                                                        data-vv-name="intro"
                                                        required
                                                ></v-textarea>
                                                <v-textarea
                                                        outline
                                                        v-model="editedItem.remark"
                                                        v-validate="'required|max:100'"
                                                        label="备注"
                                                        data-vv-name="remark"
                                                ></v-textarea>
                                            </v-card>

                                            <v-card flat>
                                                <v-card-title>上传产品图片</v-card-title>
                                                <v-layout row>
                                                    <select-single-file v-if="this.editedIndex === -1"></select-single-file>
                                                </v-layout>
                                                <v-img v-if="this.editedIndex != -1"
                                                        class="white--text"
                                                        height="200px"
                                                        v-bind:src="'http://localhost:8081/uploads/'+editedItem.img"
                                                ></v-img>
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
                        </v-card>
                    </v-dialog>
                </v-toolbar>
                <v-data-table
                        :headers="headers"
                        :items="products"
                        class="elevation-1"
                >
                    <template v-slot:items="props">
                        <td>{{ props.item._id }}</td>
                        <td class="text-xl-left">{{ props.item.name }}</td>
                        <td class="text-xl-left">{{ props.item.type }}</td>
                        <td class="text-xl-left">{{ props.item.serviceFor }}</td>
                        <td class="text-xl-left">{{ props.item.guaranteeBy }}</td>
                        <td class="text-xl-left">{{ props.item.interestRate }}</td>
                        <td class="justify-center layout px-5">
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
    </div>
</template>

<script>
    import api from "../api"

    export default({
        data: () => ({
            dialog: false,
            headers: [
                {
                    text: '序号',
                    align: 'left',
                    sortable: false,
                    value: '_id'
                },
                { text: '产品名称', value: 'name' },
                { text: '产品类型', value: 'type' },
                { text: '适用对象', value: 'serviceFor' },
                { text: '担保方式', value: 'guaranteeBy' },
                { text: '利率水平', value: 'interestRate' }
            ],
            products: [],
            editedIndex: -1,
            editedItem: {
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
            },
            defaultItem: {
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
            },
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
            ]
        }),

        computed: {
            formTitle () {
                return this.editedIndex === -1 ? '新增' : '编辑'
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
                console.log('inside')
                api.request('get','/loanProductByBank/' + this.$store.getters.getUser.orgId, {}).then(response => {
                    if(response.status == 200){
                        console.log(response.data)
                        this.products = response.data
                    }else{
                        alert('数据加载失败')
                    }
                })
            },

            editItem (item) {
                this.editedIndex = this.products.indexOf(item)
                this.editedItem = Object.assign({}, item)
                this.dialog = true
            },

            deleteItem (item) {
                const index = this.products.indexOf(item)
                this.editedIndex = this.products.indexOf(item)
                this.editedItem = Object.assign({}, item)
                if(confirm('你确定你要删除此项么?')) {
                    api.request('delete', '/loanProduct/' + this.editedItem._id, {
                    }).then(response => {
                        if(response.status == 200){
                            alert('用户删除成功')
                            this.users.splice(index, 1)
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
                    Object.assign(this.users[this.editedIndex], this.editedItem)
                    api.request('put', '/users/update/' + this.editedItem._id, {
                        orgId: this.orgId,
                        orgName: this.orgName, //金融机构名称
                        name: this.name, //产品名称
                        type: this.type,//产品类型
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
                        if(response.status == 200){
                            alert('融资产品修改成功')
                            this.users.update(this.editedItem)
                            //this.users.push(this.editedItem)
                            //this.$router.push({ path: '/' })
                        }
                    })
                } else {
                    api.request('post', '/auth/signup', {
                        orgId: this.orgId,
                        orgName: this.orgName, //金融机构名称
                        name: this.name, //产品名称
                        type: this.type,//产品类型
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
                        if(response.status == 200){
                            alert('新融资产品添加成功')
                            this.products.push(this.editedItem)
                            //this.$router.push({ path: '/' })
                        }
                    })
                }
                this.close()
            }
        }
    })
</script>
