import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import router from './router';
import store from './store';
import VeeValidate from 'vee-validate';
import VueFroala from 'vue-froala-wysiwyg';
import jQuery from 'jquery'

require('froala-editor/js/froala_editor.pkgd.min')
require('froala-editor/css/froala_editor.pkgd.min.css')
require('font-awesome/css/font-awesome.css')
require('froala-editor/js/languages/zh_cn')
require('froala-editor/css/froala_style.min.css')

Vue.config.productionTip = false;

const Vuetify = require('vuetify');


Vue.use(VeeValidate);
Vue.use(Vuetify);
Vue.use(VueFroala);
Vue.use(jQuery);

window.jQuery = window.$ = jQuery
//window.$ = jQuery

Vue.filter('loanGuideAppFilter', function (value) {
    if (!value) return ''
    value = value.toString()
    let res = '-1'
    switch(value){
        case '1':
            res = '待银行审核中'
            break
        case '2':
            res = '待区县审核中'
            break
        case '3':
            res = '待区县领导小组审核中'
            break
        case '4':
            res = '待市级审核中'
            break
        case '5':
            res = '待科室填写意见中'
            break
        case '6':
            res = '待市级领导小组审核中'
            break
        case '0':
            res = '审核已通过'
            break
    }
    return res
})

Vue.filter('roleFilter', function (value) {
    if (!value) return ''
    value = value.toString()
    let res = '-1'
    switch(value){
        case 'ADMIN':
            res = '系统管理员'
            break
        case 'USER':
            res = '企业用户'
            break
        case 'BANK_USER':
            res = '银行用户'
            break
        case 'COUNTY_USER':
            res = '县区管理'
            break
        case 'COUNTY_GROUP_USER':
            res = '县区领导小组'
            break
        case 'MUNICIPAL_USER':
            res = '市级管理'
            break
        case 'MUNICIPAL_DEP_USER':
            res = '市级科室'
            break
        case 'MUNICIPAL_GROUP_USER':
            res = '市级领导小组'
            break
    }
    return res
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
