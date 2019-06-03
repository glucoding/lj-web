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
                    <v-card>
                        <v-layout row align-center justify-center>
                            <v-flex xs12 sm12 md4 lg8>
                                <v-toolbar
                                        color="light-blue darken-4" dark
                                >
                                    <v-toolbar-side-icon></v-toolbar-side-icon>
                                    <v-toolbar-title>融资申请书</v-toolbar-title>
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
                                                            v-model="editedItem.repTel"
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
                                                            v-model="editedItem.repMobile"
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
                                                            v-model="editedItem.contact"
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
                                                            v-model="editedItem.contactTel"
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
                                                            v-model="editedItem.address"
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
                                                            v-model="editedItem.email"
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
                                                            v-model="editedItem.industry"
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
                                                            v-model="editedItem.numOfEmployees"
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
                                                            v-model="editedItem.totalIncome"
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
                                                            v-model="editedItem.totalAsset"
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
                                                                v-model="editedItem.duration"
                                                                :max="36"
                                                                thumb-label
                                                                :step="1"
                                                        ></v-slider>
                                                    </v-flex>
                                                </v-layout>
                                                <v-layout>
                                                    <v-flex ma-3>
                                                        <v-text-field
                                                                v-model="editedItem.loanAmount"
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
                                                                v-model="editedItem.usage"
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
                                                                v-model="editedItem.productName"
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
                                                                v-model="editedItem.repaymentBy"
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
                                                        <v-textarea
                                                                outline
                                                                v-model="editedItem.selfBankLoan"
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
                                                                v-model="editedItem.familyBankLoan"
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
                                                                v-model="editedItem.selfOtherBankLoan"
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
                                                                v-model="editedItem.familyOtherBankLoan"
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
                                                            <v-btn @click="submit" color="success" v-if="this.$store.getters.getUser.role=='USER'">提交修改</v-btn>
                                                            <v-btn @click="audit" color="error" v-if="this.$store.getters.getUser.role=='BANK_USER'">审核</v-btn>
                                                            <v-btn @click="checkBackground" color="info" v-if="this.$store.getters.getUser.role=='BANK_USER'">背景调查</v-btn>
                                                            <v-btn @click="close" color="info">返回</v-btn>
                                                        </v-flex>
                                                    </v-layout>
                                                </v-card>
                                            </v-card>
                                        </v-card>
                                    </form>
                                </div>
                            </v-flex>
                        </v-layout>
                    </v-card>
                </v-dialog>
                <v-dialog v-model="dialog2" max-width="400px">
                    <v-card>
                        <v-toolbar
                                color="light-blue darken-4" dark
                        >
                            <v-toolbar-side-icon></v-toolbar-side-icon>
                            <v-toolbar-title>融资申请审核</v-toolbar-title>
                            <v-spacer></v-spacer>
                        </v-toolbar>
                        <v-layout>
                            <v-flex ma-3>
                                <v-textarea
                                        outline
                                        v-model="editedItem.remark"
                                        v-validate="'required|max:10'"
                                        :error-messages="errors.collect('remark')"
                                        label="审核意见"
                                        data-vv-name="remark"
                                        required
                                ></v-textarea>
                            </v-flex>
                        </v-layout>
                        <v-layout row align-center justify-center>
                            <v-btn @click="audit" color="success">审核通过</v-btn>
                            <v-btn @click="audit" color="error">审核不通过</v-btn>
                        </v-layout>
                    </v-card>
                </v-dialog>
                <v-dialog v-model="dialog3" max-width="600px">
                    <v-card>
                        <progress-bar></progress-bar>
                    </v-card>
                </v-dialog>
                <v-dialog v-model="dialog4" v-if="ent!=null" max-width="400px">
                    <v-card flat>
                        <v-card-text>云南省市场监管网上办事大厅登录信息</v-card-text>
                        <v-layout row>
                            <v-flex ma-3>
                                <v-text-field
                                        v-model="ent.marketUsername"
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
                                        v-model="ent.marketPassword"
                                        v-validate="'required|max:10'"
                                        :counter="10"
                                        :error-messages="errors.collect('marketPassword')"
                                        label="密码"
                                        data-vv-name="marketPassword"
                                        :append-icon="e1 ? 'visibility' : 'visibility_off'"
                                        :append-icon-cb="() => (e1 = !e1)"
                                        :type="e1 ? 'password' : 'text'"
                                        counter
                                ></v-text-field>
                            </v-flex>
                            <v-flex ma-3>
                                <v-btn @click="open1" color="info">前往调查</v-btn>
                            </v-flex>
                        </v-layout>
                    </v-card>
                    <v-card flat>
                        <v-card-text>云南省电子税务局登录信息</v-card-text>
                        <v-layout row>
                            <v-flex ma-3>
                                <v-text-field
                                        v-model="ent.taxUsername"
                                        v-validate="'required|max:20'"
                                        :counter="20"
                                        :error-messages="errors.collect('taxUsername')"
                                        label="用户名"
                                        data-vv-name="taxUsername"
                                ></v-text-field>
                            </v-flex>
                            <v-flex ma-3>
                                <v-text-field
                                        v-model="ent.taxPassword"
                                        v-validate="'required|max:10'"
                                        :counter="10"
                                        :error-messages="errors.collect('taxPassword')"
                                        label="密码"
                                        data-vv-name="taxPassword"
                                        :append-icon="e1 ? 'visibility' : 'visibility_off'"
                                        :append-icon-cb="() => (e1 = !e1)"
                                        :type="e1 ? 'password' : 'text'"
                                        counter
                                ></v-text-field>
                            </v-flex>
                            <v-flex ma-3>
                                <v-btn @click="open2" color="info">前往调查</v-btn>
                            </v-flex>
                        </v-layout>
                    </v-card>
                    <v-card flat>
                        <v-card-text>云南省劳动保障执法年审信息系统登录信息</v-card-text>
                        <v-layout row>
                            <v-flex ma-3>
                                <v-text-field
                                        v-model="ent.hrUsername"
                                        v-validate="'required|max:20'"
                                        :counter="20"
                                        :error-messages="errors.collect('hrUsername')"
                                        label="用户名"
                                        data-vv-name="hrUsername"
                                ></v-text-field>
                            </v-flex>
                            <v-flex ma-3>
                                <v-text-field
                                        v-model="ent.hrPassword"
                                        v-validate="'required|max:10'"
                                        :counter="10"
                                        :error-messages="errors.collect('hrPassword')"
                                        label="密码"
                                        data-vv-name="hrPassword"
                                        :append-icon="e1 ? 'visibility' : 'visibility_off'"
                                        :append-icon-cb="() => (e1 = !e1)"
                                        :type="e1 ? 'password' : 'text'"
                                        counter
                                ></v-text-field>
                            </v-flex>
                            <v-flex ma-3>
                                <v-btn @click="open3" color="info">前往调查</v-btn>
                            </v-flex>
                        </v-layout>
                    </v-card>
                    <v-card flat>
                        <v-card-text>云南电网网上营业厅登录信息</v-card-text>
                        <v-layout row>
                            <v-flex ma-3>
                                <v-text-field
                                        v-model="ent.electricUsername"
                                        v-validate="'required|max:20'"
                                        :counter="20"
                                        :error-messages="errors.collect('electricUsername')"
                                        label="用户名"
                                        data-vv-name="electricUsername"
                                ></v-text-field>
                            </v-flex>
                            <v-flex ma-3>
                                <v-text-field
                                        v-model="ent.electricPassword"
                                        v-validate="'required|max:10'"
                                        :counter="10"
                                        :error-messages="errors.collect('electricPassword')"
                                        label="密码"
                                        data-vv-name="electricPassword"
                                        :append-icon="e1 ? 'visibility' : 'visibility_off'"
                                        :append-icon-cb="() => (e1 = !e1)"
                                        :type="e1 ? 'password' : 'text'"
                                        counter
                                ></v-text-field>
                            </v-flex>
                            <v-flex ma-3>
                                <v-btn @click="open4" color="info">前往调查</v-btn>
                            </v-flex>
                        </v-layout>
                    </v-card>
                </v-dialog>
            </v-toolbar>
            <v-data-table
                    :headers="headers"
                    :items="applications"
                    class="elevation-1"
            >
                <template v-slot:items="props">
                    <td>{{ props.item._id }}</td>
                    <td class="text-xl-left">{{ props.item.entName }}</td>
                    <td class="text-xl-left">{{ props.item.productName }}</td>
                    <td class="text-xl-left">{{ props.item.submitTime }}</td>
                    <td class="text-xl-left">{{ props.item.loanAmount }}</td>
                    <td class="text-xl-left">{{ props.item.status }}</td>
                    <td class="justify-center layout px-5">
                        <v-icon
                                medium
                                class="fas fa-edit"
                                @click="editItem(props.item)"
                        >
                            &nbsp;
                        </v-icon>
                        <v-icon
                                medium
                                class="fas fa-trash-alt"
                                @click="deleteItem(props.item)"
                        >
                        </v-icon>
                        <v-icon
                                medium
                                class="fas fa-hamsa"
                                @click="progressView(props.item)"
                        >

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
    import ProgressBar from "../components/ProgressBar"

    export default({
        data: () => ({
            dialog: false,
            dialog2: false,
            dialog3: false,
            dialog4: false,
            ent: null,
            e1: true,
            headers: [
                {
                    text: '序号',
                    align: 'left',
                    sortable: false,
                    value: '_id'
                },
                { text: '申请公司', value: 'entName' },
                { text: '申请产品', value: 'productName' },
                { text: '申请时间', value: 'submitTime' },
                { text: '申请金额', value: 'loanAmount' },
                { text: '当前状态', value: 'status' }
            ],
            applications: [],
            editedIndex: -1,
            editedItem: {
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
            },
            defaultItem: {
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
            },
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
            ]
        }),

        components: {
            ProgressBar
        },

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
                if(this.$store.getters.getUser.role == 'BANK_USER'){
                    api.request('get','/loanProductAppByBank/' + this.$store.getters.getUser.orgId, {}).then(response => {
                        if(response.status == 200){
                            this.applications = response.data
                            let i = 0
                            for(i in this.applications){
                                api.request('get','/loanProduct/' + this.applications[i].productId, {}).then(response => {
                                    if(response.status == 200){
                                         this.applications[i].productName = response.data.name
                                    }else{
                                        alert('产品名称加载失败')
                                    }
                                })
                            }
                        }else{
                            alert('申请数据加载失败')
                        }
                    })
                }else if(this.$store.getters.getUser.role == 'USER'){
                    api.request('get','/loanProductAppByEnt/' + this.$store.getters.getUser.orgId, {}).then(response => {
                        if(response.status == 200){
                            this.applications = response.data
                            let i = 0
                            for(i in this.applications){
                                api.request('get','/loanProduct/' + this.applications[i].productId, {}).then(response => {
                                    if(response.status == 200){
                                        this.applications[i].productName = response.data.name
                                    }else{
                                        alert('产品名称加载失败')
                                    }
                                })
                            }
                        }else{
                            alert('申请数据加载失败')
                        }
                    })
                }
            },

            editItem (item) {
                this.editedIndex = this.applications.indexOf(item)
                this.editedItem = Object.assign({}, item)

                api.request('get','/enterprises/'+ this.editedItem.entId).then(response => {
                    if(response.status == 200){
                        this.ent = response.data
                    }else{
                        alert('企业数据获取失败')
                    }
                    console.log(this.ent)
                })

                this.dialog = true
            },

            deleteItem (item) {
                const index = this.applications.indexOf(item)
                this.editedIndex = this.applications.indexOf(item)
                this.editedItem = Object.assign({}, item)
                if(confirm('你确定你要删除此项么?')) {
                    api.request('delete', '/loanProduct/' + this.editedItem._id, {
                    }).then(response => {
                        if(response.status == 200){
                            alert('用户删除成功')
                            this.applications.splice(index, 1)
                            //this.users.push(this.editedItem)
                            //this.$router.push({ path: '/' })
                        }
                    })
                }
            },

            progressView(item){
                this.dialog3 = true
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
                    api.request('put', '/loanProductApp/' + this.editedItem._id, {
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
                        loanAmount: this.loanAmount, //借款金额
                        duration: this.duration, //期限
                        usage: this.usage, //借款用途
                        productId: this.productId, //信贷品种
                        productName: this.productName,//For displaying product
                        repaymentBy: this.repaymentBy, //还款来源
                        guaranteeBy: this.guaranteeBy, //担保方式
                        selfBankLoan: this.selfBankLoan, //贷款人在本行过去贷款情况
                        familyBankLoan: this.familyBankLoan, //贷款人家庭在本行过去贷款情况
                        selfOtherBankLoan: this.selfOtherBankLoan, //贷款人在其他银行贷款情况
                        familyOtherBankLoan: this.familyBankLoan, //贷款人家庭在其他银行贷款情况
                        attachments: this.attachments,


                        submitTime: this.submitTime,
                        remark: this.remark, //审核意见
                        status: '', //审核状态 1：申请中 2：已入库
                    }).then(response => {
                        if(response.status == 200){
                            alert('融资申请修改成功')
                            this.users.update(this.editedItem)
                            //this.users.push(this.editedItem)
                            //this.$router.push({ path: '/' })
                        }
                    })
                } else {
                    api.request('post', '/auth/signup', {
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
                        loanAmount: this.loanAmount, //借款金额
                        duration: this.duration, //期限
                        usage: this.usage, //借款用途
                        productId: this.productId, //信贷品种
                        productName: this.productName,//For displaying product
                        repaymentBy: this.repaymentBy, //还款来源
                        guaranteeBy: this.guaranteeBy, //担保方式
                        selfBankLoan: this.selfBankLoan, //贷款人在本行过去贷款情况
                        familyBankLoan: this.familyBankLoan, //贷款人家庭在本行过去贷款情况
                        selfOtherBankLoan: this.selfOtherBankLoan, //贷款人在其他银行贷款情况
                        familyOtherBankLoan: this.familyBankLoan, //贷款人家庭在其他银行贷款情况
                        attachments: this.attachments,


                        submitTime: this.submitTime,
                        remark: this.remark, //审核意见
                        status: '', //审核状态 1：申请中 2：已入库
                    }).then(response => {
                        if(response.status == 200){
                            alert('新融资产品添加成功')
                            this.products.push(this.editedItem)
                            //this.$router.push({ path: '/' })
                        }
                    })
                }
                this.close()
            },
            audit() {
                this.dialog2 = true
            },
            checkBackground() {
                this.dialog4 = true
            },
            open1() {
                window.location.href = "http://gsxt.ynaic.gov.cn/webportal1/g/xtsy,yhdl"
            },
            open2() {
                window.location.href = "https://etax.yunnan.chinatax.gov.cn/zjgfdzswj/main/index.html"
            },
            open3() {
                window.location.href = "http://220.165.251.18:8082/sjcj/login.jsp"
            },
            open4() {
                window.location.href = "http://95598.yn.csg.cn"
            }
        }
    })
</script>
