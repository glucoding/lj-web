<template>
    <div id="app">
        <v-app id="inspire">
            <div>
                <v-toolbar flat color="light-blue darken-4" dark>
                    <v-toolbar-title>贷款引导资金申请列表</v-toolbar-title>
                    <v-divider
                            class="mx-2"
                            inset
                            vertical
                    ></v-divider>
                    <v-spacer></v-spacer>
                    <v-dialog v-model="dialog" max-width="1000px">
                        <v-card>
                            <v-toolbar flat color="light-blue darken-4" dark>
                                <v-toolbar-title>贷款引导资金申请信息</v-toolbar-title>
                            </v-toolbar>

                            <v-card-text class="red--text">{{editedItem.appStatus|loanGuideAppFilter}}</v-card-text>
                                <v-container grid-list-md>
                                    <v-layout column align-center justify-center>
                                        <v-flex xs12 sm12 md4 lg8>

                                            <v-card>
                                                <!--<div id="app">-->
                                                <form>
                                                    <v-card ma-3>
                                                        <v-card-title class="blue--text">基本信息</v-card-title>
                                                        <v-layout row>
                                                            <v-flex md4 ma-3>
                                                                <v-text-field
                                                                        v-model="editedItem.entName"
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
                                                                        v-model="editedItem.rep"
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
                                                                        v-model="editedItem.registerAmount"
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
                                                                    v-model="editedItem.setTime"
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
                                                                            v-model="editedItem.estTime"
                                                                            label="成立时间"
                                                                            prepend-icon="event"
                                                                            readonly
                                                                            v-on="on"
                                                                    ></v-text-field>
                                                                </template>
                                                                <v-date-picker v-model="editedItem.estTime" @input="menu2 = false"></v-date-picker>
                                                            </v-menu>
                                                        </v-flex>
                                                        <v-layout row>
                                                            <v-flex md4 ma-3>
                                                                <v-text-field
                                                                        v-model="editedItem.contact"
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
                                                                        v-model="editedItem.tel"
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
                                                                        v-model="editedItem.mobile"
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
                                                    <v-card ma-3>
                                                        <v-card-title>贷款情况</v-card-title>
                                                        <v-layout row>
                                                            <v-flex md4 ma-3>
                                                                <v-text-field
                                                                        v-model="editedItem.totalAsset"
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
                                                                        v-model="editedItem.totalLoan"
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
                                                                        v-model="editedItem.assetLoanRate"
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
                                                                        v-model="editedItem.loanBank"
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
                                                                        v-model="editedItem.contractNumber"
                                                                        v-validate="'required|email'"
                                                                        :error-messages="errors.collect('contractNumber')"
                                                                        label="流动资金贷款合同号"
                                                                        data-vv-name="contractNumber"
                                                                        required
                                                                ></v-text-field>
                                                            </v-flex>
                                                            <v-flex md4 ma-3>
                                                                <v-text-field
                                                                        v-model="editedItem.loanAmount"
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
                                                                        v-model="editedItem.loanRange"
                                                                        v-validate="'required|max:10'"
                                                                        :error-messages="errors.collect('loanRange')"
                                                                        label="流动资金贷款时限"
                                                                        data-vv-name="loanRange"
                                                                        required
                                                                ></v-text-field>
                                                            </v-flex>
                                                            <v-flex md6 ma-3>
                                                                <v-text-field
                                                                        v-model="editedItem.loanAmountFromSociety"
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
                                                                        v-model="editedItem.assetOther"
                                                                        v-validate="'required'"
                                                                        :error-messages="errors.collect('guarantee')"
                                                                        value="1"
                                                                        label="自有资产抵押"
                                                                        data-vv-name="guarantee"
                                                                        type="checkbox"
                                                                ></v-checkbox>
                                                            </v-flex>
                                                            <v-flex md2>
                                                                <v-checkbox
                                                                            v-model="editedItem.land"
                                                                            v-validate="'required'"
                                                                            :error-messages="errors.collect('guarantee')"
                                                                            value="1"
                                                                            label="土地"
                                                                            data-vv-name="guarantee"
                                                                            type="checkbox"
                                                                ></v-checkbox>
                                                            </v-flex>
                                                            <v-flex md2>
                                                                <v-checkbox
                                                                            v-model="editedItem.factory"
                                                                            v-validate="'required'"
                                                                            :error-messages="errors.collect('guarantee')"
                                                                            value="1"
                                                                            label="厂房"
                                                                            data-vv-name="guarantee"
                                                                            type="checkbox"
                                                                ></v-checkbox>
                                                            </v-flex>
                                                            <v-flex md2>
                                                                <v-checkbox
                                                                            v-model="editedItem.house"
                                                                            v-validate="'required'"
                                                                            :error-messages="errors.collect('guarantee')"
                                                                            value="1"
                                                                            label="住宅、写字楼"
                                                                            data-vv-name="guarantee"
                                                                            type="checkbox"
                                                                ></v-checkbox>
                                                            </v-flex>
                                                            <v-flex md2>
                                                                <v-checkbox
                                                                            v-model="editedItem.machine"
                                                                            v-validate="'required'"
                                                                            :error-messages="errors.collect('machine')"
                                                                            value="1"
                                                                            label="机器"
                                                                            data-vv-name="machine"
                                                                            type="checkbox"
                                                                ></v-checkbox>
                                                            </v-flex>
                                                            <v-flex md2>
                                                                <v-checkbox
                                                                            v-model="editedItem.assetOther"
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
                                                                        v-model="editedItem.promiseGuarantee"
                                                                        v-validate="'required'"
                                                                        :error-messages="errors.collect('guarantee')"
                                                                        value="1"
                                                                        label="保证担保"
                                                                        data-vv-name="guarantee"
                                                                        type="checkbox"
                                                                ></v-checkbox>
                                                            </v-flex>
                                                            <v-flex md2>
                                                                <v-checkbox
                                                                            v-model="editedItem.thirdParty"
                                                                            v-validate="'required'"
                                                                            :error-messages="errors.collect('guarantee')"
                                                                            value="1"
                                                                            label="第三方担保"
                                                                            data-vv-name="guarantee"
                                                                            type="checkbox"
                                                                ></v-checkbox>
                                                            </v-flex>
                                                            <v-flex md2>
                                                                <v-checkbox
                                                                            v-model="editedItem.shareHolder"
                                                                            v-validate="'required'"
                                                                            :error-messages="errors.collect('guarantee')"
                                                                            value="1"
                                                                            label="股东担保"
                                                                            data-vv-name="guarantee"
                                                                            type="checkbox"
                                                                ></v-checkbox>
                                                            </v-flex>
                                                            <v-flex md2>
                                                                <v-checkbox
                                                                            v-model="editedItem.mortgageeOther"
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
                                                                    v-model="editedItem.reevaluate"
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
                                                                v-model="editedItem.appAmount"
                                                                label="申请使用民营企业信贷引导资金额（万元）"
                                                        ></v-textarea>
                                                    </v-card>
                                                    <v-card>
                                                        <v-textarea
                                                                outline
                                                                name="entComment"
                                                                v-model="editedItem.entComment"
                                                                label="申请民营企业信贷引导资金企业意见"
                                                        ></v-textarea>
                                                    </v-card>
                                                    <v-card v-if="this.$store.getters.getUser.role == 'BANK_USER'">
                                                        <v-textarea
                                                                outline
                                                                name="bankComment"
                                                                v-model="editedItem.bankComment"
                                                                label="贷款银行对企业流动资金贷款审核意见"
                                                        ></v-textarea>
                                                    </v-card>
                                                    <v-card v-if="this.$store.getters.getUser.role == 'COUNTY_USER'">
                                                        <v-textarea
                                                                outline
                                                                name="countyComment"
                                                                v-model="editedItem.countyComment"
                                                                label="县区主管部门审核意见"
                                                        ></v-textarea>
                                                    </v-card>
                                                    <v-card v-if="this.$store.getters.getUser.role == 'COUNTY_GROUP_USER'">
                                                        <v-textarea
                                                                outline
                                                                name="countyGuideGroupComment"
                                                                v-model="editedItem.countyGuideGroupComment"
                                                                label="县区民营企业信贷引导资金工作协调领导小组办公室审核意见"
                                                        ></v-textarea>
                                                    </v-card>
                                                    <v-card v-if="this.$store.getters.getUser.role == 'MUNICIPAL_USER'">
                                                        <v-textarea
                                                                outline
                                                                name="municipalComment"
                                                                v-model="editedItem.municipalComment"
                                                                label="市主管部门审核意见"
                                                        ></v-textarea>
                                                    </v-card>
                                                    <v-card v-if="this.$store.getters.getUser.role == 'MUNICIPAL_DEP_USER'">
                                                        <v-textarea
                                                                outline
                                                                name="depComment"
                                                                v-model="editedItem.depComment"
                                                                label="经办科室意见"
                                                        ></v-textarea>
                                                    </v-card>
                                                    <v-card v-if="this.$store.getters.getUser.role == 'MUNICIPAL_GROUP_USER'">
                                                        <v-textarea
                                                                outline
                                                                name="municipalGuideGroupComment"
                                                                v-model="editedItem.municipalGuideGroupComment"
                                                                label="市民营企业信贷引导资金工作协调领导小组办公室审核意见"
                                                        ></v-textarea>
                                                    </v-card>
                                                </form>
                                                <!--</div>-->
                                            </v-card>
                                        </v-flex>
                                        <v-flex ma-3>
                                            <v-card flat>
                                                <v-spacer></v-spacer>
                                                <v-btn color="success" @click="audit" v-if="this.$store.getters.getUser.role != 'USER'">审核</v-btn>
                                                <v-btn color="info" @click="close">取消</v-btn>
                                                <v-btn color="info" @click="save" v-if="this.$store.getters.getUser.role == 'USER'">保存</v-btn>
                                            </v-card>
                                        </v-flex>
                                    </v-layout>

                                </v-container>
                        </v-card>
                    </v-dialog>
                    <v-dialog v-model="countyDialog" max-width="400px">
                        <v-card>
                            <v-toolbar
                                    color="light-blue darken-4" dark
                            >
                                <v-toolbar-side-icon></v-toolbar-side-icon>
                                <v-toolbar-title>信贷引导资金申请审核</v-toolbar-title>
                                <v-spacer></v-spacer>
                            </v-toolbar>
                            <v-layout>
                                <v-flex ma-3>
                                    <v-textarea
                                            outline
                                            v-model="editedItem.countyComment"
                                            :error-messages="errors.collect('countyComment')"
                                            label="县区主管部门审核意见"
                                            data-vv-name="countyComment"
                                    ></v-textarea>
                                </v-flex>
                            </v-layout>
                            <v-layout row align-center justify-center>
                                <v-btn @click="onOk" color="success">审核通过</v-btn>
                                <v-btn @click="close" color="error">审核不通过</v-btn>
                            </v-layout>
                        </v-card>
                    </v-dialog>
                    <v-dialog v-model="countyGroupDialog" max-width="400px">
                        <v-card>
                            <v-toolbar
                                    color="light-blue darken-4" dark
                            >
                                <v-toolbar-side-icon></v-toolbar-side-icon>
                                <v-toolbar-title>信贷引导资金申请审核</v-toolbar-title>
                                <v-spacer></v-spacer>
                            </v-toolbar>
                            <v-layout>
                                <v-flex ma-3>
                                    <v-textarea
                                            outline
                                            v-model="editedItem.countyGuideGroupComment"
                                            :error-messages="errors.collect('countyGuideGroupComment')"
                                            label="县区领导小组审核意见"
                                            data-vv-name="countyGuideGroupComment"
                                    ></v-textarea>
                                </v-flex>
                            </v-layout>
                            <v-layout row align-center justify-center>
                                <v-btn @click="onOk" color="success">审核通过</v-btn>
                                <v-btn @click="close" color="error">审核不通过</v-btn>
                            </v-layout>
                        </v-card>
                    </v-dialog>
                    <v-dialog v-model="municipalDialog" max-width="400px">
                        <v-card>
                            <v-toolbar
                                    color="light-blue darken-4" dark
                            >
                                <v-toolbar-side-icon></v-toolbar-side-icon>
                                <v-toolbar-title>信贷引导资金申请审核</v-toolbar-title>
                                <v-spacer></v-spacer>
                            </v-toolbar>
                            <v-layout>
                                <v-flex ma-3>
                                    <v-textarea
                                            outline
                                            v-model="editedItem.municipalComment"
                                            :error-messages="errors.collect('municipalComment')"
                                            label="市主管部门审核意见"
                                            data-vv-name="municipalComment"
                                    ></v-textarea>
                                </v-flex>
                            </v-layout>
                            <v-layout row align-center justify-center>
                                <v-btn @click="onOk" color="success">审核通过</v-btn>
                                <v-btn @click="close" color="error">审核不通过</v-btn>
                            </v-layout>
                        </v-card>
                    </v-dialog>
                    <v-dialog v-model="municipalDepDialog" max-width="400px">
                        <v-card>
                            <v-toolbar
                                    color="light-blue darken-4" dark
                            >
                                <v-toolbar-side-icon></v-toolbar-side-icon>
                                <v-toolbar-title>信贷引导资金申请审核</v-toolbar-title>
                                <v-spacer></v-spacer>
                            </v-toolbar>
                            <v-layout>
                                <v-flex ma-3>
                                    <v-textarea
                                            outline
                                            v-model="editedItem.depComment"
                                            :error-messages="errors.collect('depComment')"
                                            label="市级相关科室审核意见"
                                            data-vv-name="depComment"
                                    ></v-textarea>
                                </v-flex>
                            </v-layout>
                            <v-layout row align-center justify-center>
                                <v-btn @click="onOk" color="success">审核通过</v-btn>
                                <v-btn @click="close" color="error">审核不通过</v-btn>
                            </v-layout>
                        </v-card>
                    </v-dialog>
                    <v-dialog v-model="municipalGroupDialog" max-width="400px">
                        <v-card>
                            <v-toolbar
                                    color="light-blue darken-4" dark
                            >
                                <v-toolbar-side-icon></v-toolbar-side-icon>
                                <v-toolbar-title>信贷引导资金申请审核</v-toolbar-title>
                                <v-spacer></v-spacer>
                            </v-toolbar>
                            <v-layout>
                                <v-flex ma-3>
                                    <v-textarea
                                            outline
                                            v-model="editedItem.municipalGuideGroupComment"
                                            :error-messages="errors.collect('municipalGuideGroupComment')"
                                            label="市领导小组审核意见"
                                            data-vv-name="municipalGuideGroupComment"
                                    ></v-textarea>
                                </v-flex>
                            </v-layout>
                            <v-layout row align-center justify-center>
                                <v-btn @click="onOk" color="success">审核通过</v-btn>
                                <v-btn @click="close" color="error">审核不通过</v-btn>
                            </v-layout>
                        </v-card>
                    </v-dialog>
                    <v-dialog v-model="progressDialog" max-width="600px">
                        <v-card>
                            <loan-guide-app-progress-bar></loan-guide-app-progress-bar>
                        </v-card>
                    </v-dialog>
                </v-toolbar>
                <v-data-table
                        :headers="headers"
                        :items="applications"
                        class="elevation-1 body-2"
                >
                    <template v-slot:no-data>
                        <v-alert :value="true" color="error" icon="warning">
                            抱歉，目前没有数据哦！ :(
                        </v-alert>
                    </template>
                    <template v-slot:items="props">
                        <td>{{ props.item._id }}</td>
                        <td class="text-xl-left">{{ props.item.entName }}</td>
                        <td class="text-xl-left">{{ props.item.mobile }}</td>
                        <td class="text-xl-left">{{ props.item.loanBank }}</td>
                        <td class="text-xl-left">{{ props.item.appAmount }}</td>
                        <td class="text-xl-left">{{ props.item.appStatus | loanGuideAppFilter }}</td>
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
                                    class="mr-2"
                                    @click="checkProgress(props.item)"
                            >
                                update
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
    import LoanGuideAppProgressBar from "../components/LoanGuideAppProgressBar"

    export default({
        // el: '#app',
        data: () => ({
            dialog: false,
            countyDialog: false,
            countyGroupDialog: false,
            municipalDialog: false,
            municipalGroupDialog: false,
            municipalDepDialog: false,
            progressDialog: false,
            headers: [
                {
                    text: '序号',
                    align: 'left',
                    sortable: false,
                    value: '_id'
                },
                { text: '申请企业', value: 'entName', sortable: true},
                { text: '手机', value: 'mobile' },
                { text: '贷款银行', value: 'loanBank' },
                { text: '申请金额', value: 'appAmount' },
                { text: '申请进度', value: 'appStatus'}
            ],
            applications: [],
            editedIndex: -1,
            editedItem: {
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
                reevaluate: '0'
            },
            defaultItem: {
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
                reevaluate: '0'
            },
            items: [
                '招商银行',
                '建设银行',
                '农业银行',
                '中国银行',
                '交通银行',
                '工商银行'
            ]
        }),

        components: {
          LoanGuideAppProgressBar
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
                console.log('start initialising')
                api.request('get','/loanGuideApps', {
                }).then(response => {
                    if(response.status == 200){
                        this.applications = response.data;
                        console.log(this.applications);
                        //this.users.push(this.editedItem)
                        //this.$router.push({ path: '/' })
                    }
                })
                console.log(this.applications)
            },

            editItem (item) {
                this.editedIndex = this.applications.indexOf(item)
                this.editedItem = Object.assign({}, item)
                this.dialog = true
            },

            deleteItem (item) {
                const index = this.applications.indexOf(item)
                this.editedIndex = this.applications.indexOf(item)
                this.editedItem = Object.assign({}, item)
                if(confirm('你确定你要删除此项么? 删除以后不可恢复哦')) {
                    api.request('delete', '/loanGuideApp/' + this.editedItem._id, {
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

            //1:user, 2:county, 3:county group, 4:municipal, 5: municipal dep, 6: municipal group
            audit() {
                if(this.$store.getters.getUser.role == 'COUNTY_USER'){
                    this.countyDialog = true
                }else if(this.$store.getters.getUser.role == 'COUNTY_GROUP_USER'){
                    this.countyGroupDialog = true
                }else if(this.$store.getters.getUser.role == 'MUNICIPAL_USER'){
                    this.municipalDialog = true
                }else if(this.$store.getters.getUser.role == 'MUNICIPAL_DEP_USER'){
                    this.municipalDepDialog = true
                }else if(this.$store.getters.getUser.role == 'MUNICIPAL_GROUP_USER'){
                    this.municipalGroupDialog = true
                }
            },

            onOk() {
                this.editedItem.appStatus ++
                this.save()
            },

            checkProgress(item) {
                this.progressDialog = true
            }
        }
    })
</script>
