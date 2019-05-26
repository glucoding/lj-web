import Vue from 'vue';
import Vuex from 'vuex';
import Config from '@/config'
import api from '@/api'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        user: {
            auth: false,
            accessToken: '',
            username: '',
            role: '',
            region: '',
            uid: '',
            orgId: ''
        },
        isLogin: false,
        users: [],
        loanGuideAppFiles: [],
        singleUploadFile: null,
        apiUrl: Config.serverURI + '/users'
    },
    mutations: {
        setUsers(state, payload) {
            state.users = payload;
            console.log(payload);
        },

        setUser(state, payload) {
            state.user = payload;
            console.log(state.user);
        },

        setLoanGuideAppFiles(state, payload) {
            state.loanGuideAppFiles = payload;
            console.log(state.loanGuideAppFiles);
        },
        setSingleUploadFile(state, payload) {
            state.singleUploadFile = payload;
        },
        setIsLogin(state, payload) {
          state.isLogin = payload;
        },
        userStatus (state, payload) {
            if(payload){
                console.log(payload);
                state.user = payload;
                state.isLogin = true;
            }else if(payload == null){
                sessionStorage.setItem('username', null);
                sessionStorage.setItem('accessToken', '');
                sessionStorage.setItem('role', '');
                sessionStorage.setItem('uid', null);
                sessionStorage.setItem('orgId', null);

                state.user = null;
                state.isLogin = false;
            }
        }
    },
    actions: {
        async getUsers({ state, commit }) {
            try {
                console.log('inside getusers');
                let response = await api.request('get', '/users', {});
                console.log(response.data);
                commit('setUsers', response.data);
            } catch (error) {
                commit('setUsers', []);
            }
        }
    },
    getters: {
        getUserList: state => {
            return state.users;
        },

        getUser: state => {
            return state.user;
        },

        getLoanGuideAppFiles: state => {
            return state.loanGuideAppFiles;
        },
        getSingleUploadFile: state => {
            return state.singleUploadFile;
        },
        getIsLogin: state => {
            return state.isLogin;
        }
    }
});
