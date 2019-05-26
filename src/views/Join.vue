<template>
    <v-container fluid fill-height>
        <v-layout row align-center justify-center>
            <v-flex xs12 sm12 md4 lg8>
                <h2>新用户注册</h2>
                <v-sapcer></v-sapcer>
                    <div id="app">
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
                                        v-model="name"
                                        v-validate="'required|max:10'"
                                        :counter="10"
                                        :error-messages="errors.collect('name')"
                                        label="Name"
                                        data-vv-name="name"
                                        required
                                ></v-text-field>
                                <v-text-field
                                    v-model="password"
                                    v-validate="'required|max:20'"
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
                                        v-validate="'required|max:20'"
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
                                <v-select
                                        v-model="select"
                                        v-validate="'required'"
                                        :items="items"
                                        :error-messages="errors.collect('select')"
                                        label="系统角色"
                                        data-vv-name="select"
                                        required
                                ></v-select>
                                <v-select
                                        v-model="region"
                                        v-validate="'required'"
                                        :items="regions"
                                        :error-messages="errors.collect('region')"
                                        label="所属区县"
                                        data-vv-name="select"
                                        required
                                ></v-select>
                                <v-checkbox
                                        v-model="checkbox"
                                        v-validate="'required'"
                                        :error-messages="errors.collect('checkbox')"
                                        value="1"
                                        label="Option"
                                        data-vv-name="checkbox"
                                        type="checkbox"
                                        required
                                ></v-checkbox>

                                <v-btn @click="submit">提交</v-btn>
                                <v-btn @click="clear">重置</v-btn>
                            </form>
                    </div>
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
            username: '',
            name: '',
            password: '',
            password2: '',
            email: '',
            mobile: '',
            select: null,
            region: null,
            regions: [
                '古城区',
                '玉龙纳西族自治县',
                '永胜县',
                '华坪县',
                '宁蒗彝族自治县'
            ],
            items: [
                'ADMIN',
                'COUNTY_USER',
                'COUNTY_GROUP_USER',
                'MUNICIPAL_USER',
                'MUNICIPAL_GROUP_USER',
                'MUNICIPAL_DEP_USER',
                'BANK_USER'
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
                    },
                    region: {
                        required: '用户必须指定所属区域'
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
                        api.request('post', '/auth/signup', {
                            'username': this.username,
                            'name': this.name,
                            'password': this.password,
                            'email': this.email,
                            'mobile': this.mobile,
                            'region': this.region,
                            'roles': [this.select]
                        }).then(response => {
                            console.log(response)
                            if(response.status == 200){
                                alert('新用户添加成功')
                                console.log(response.data)
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