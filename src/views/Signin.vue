<template>
    <v-container fluid fill-height class="login" style="max-height: 100vh;">
        <v-layout justify-center align-center column pa-5>
            <div
                    id="e3"
                    style="max-width: 700px; margin: auto;"
                    class="grey lighten-3"
            >
            <v-toolbar
                    color="light-blue darken-4"
                    dark
            >
                <v-toolbar-side-icon></v-toolbar-side-icon>
                <v-toolbar-title>欢迎您登录丽江金融服务平台</v-toolbar-title>
                <v-spacer></v-spacer>
            </v-toolbar>
            <v-card>
                <form>
                    <v-layout column>
                    <v-flex pa-1>
                    <v-text-field
                            v-model="username"
                            v-validate="'required'"
                            :error-messages="errors.collect('username')"
                            label="用户名"
                            data-vv-name="username"
                            outline
                            required
                    ></v-text-field>
                    </v-flex>
                    <v-flex pa-1>
                    <v-text-field
                            v-model="password"
                            v-validate="'required'"
                            :error-messages="errors.collect('password')"
                            label="密码"
                            :append-icon="e1 ? 'visibility' : 'visibility_off'"
                            :append-icon-cb="() => (e1 = !e1)"
                            :type="e1 ? 'password' : 'text'"
                            data-vv-name="password"
                            outline
                            required
                    ></v-text-field>
                    </v-flex>
                    </v-layout>

                    <v-layout justify-center>
                    <v-btn @click="submit" color="success">登录</v-btn>
                    <v-btn @click="clear">重置</v-btn>
                    </v-layout>
                </form>
            </v-card>
            </div>
        </v-layout>
    </v-container>
</template>

<script>
    import api from '../api'

    export default {
        $_veeValidate: {
            validator: 'new'
        },

        data: () => ({
            name: '',
            email: '',
            e1: true,
            dictionary: {
                custom: {
                    username: {
                        required: () => '用户名不能为空'
                        // custom messages
                    },
                    password: {
                        required: () => '密码不能为空'
                    }
                }
            }
        }),

        mounted () {
            this.$validator.localize('zh_cn', this.dictionary)
        },

        methods: {
            submit () {
                this.$validator.validateAll().then(result => {
                    if(result) {
                        api.request('post', '/auth/signin', {
                            'username': this.username,
                            'password': this.password,
                        }).then(response => {
                            console.log(response.data)
                            if(response.status == 200 && response.data.auth == true){
                                this.$store.commit('userStatus', response.data);

                                sessionStorage.setItem('username',response.data.username);
                                sessionStorage.setItem('accessToken', response.data.accessToken);
                                sessionStorage.setItem('role', response.data.role);
                                sessionStorage.setItem('region', response.data.region);
                                sessionStorage.setItem('uid', response.data.uid);
                                sessionStorage.setItem('orgId', response.data.orgId);

                                console.log(this.$store);
                                this.$store.commit('setIsLogin', true);
                                this.$router.push({ path: '/' })
                                //强制刷新
                                //this.$router.go(0)
                            }else{
                                alert('用户名密码错误')
                            }
                        })
                    }
                })
            },
            clear () {
                this.username = ''
                this.password = ''
                this.$validator.reset()
            }
        }
    }
</script>

<style scoped>
    .login {
        background: url('../assets/login.jpg');
        background-size: cover;
        width: 100%;
        height: 100%;
    }
</style>