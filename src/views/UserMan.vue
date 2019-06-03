<template>
    <div id="app">
        <v-app id="inspire">
            <div>
                <v-toolbar flat color="light-blue darken-4" dark>
                    <v-toolbar-title>系统用户管理</v-toolbar-title>
                    <v-divider
                            class="mx-2"
                            inset
                            vertical
                    ></v-divider>
                    <v-spacer></v-spacer>
                    <v-dialog v-model="dialog" max-width="500px">
                        <template v-slot:activator="{ on }">
                            <v-btn color="primary" dark class="mb-2" v-on="on">新增用户</v-btn>
                        </template>
                        <v-card>
                            <v-card-title>
                                <span class="headline">{{ formTitle }}</span>
                            </v-card-title>

                            <v-card-text>
                                <v-container grid-list-md>
                                    <v-layout wrap>
                                        <v-flex xs12 sm6 md4>
                                            <v-text-field v-model="editedItem._id" label="号码"></v-text-field>
                                        </v-flex>
                                        <v-flex xs12 sm6 md4>
                                            <v-text-field v-model="editedItem.username" label="用户名"></v-text-field>
                                        </v-flex>
                                        <v-flex xs12 sm6 md4>
                                            <v-text-field v-model="editedItem.name" label="实名"></v-text-field>
                                        </v-flex>
                                        <v-flex xs12 sm6 md4>
                                            <v-text-field v-model="editedItem.password" label="密码"></v-text-field>
                                        </v-flex>
                                        <v-flex xs12 sm6 md4>
                                            <v-text-field v-model="editedItem.email" label="电子邮件"></v-text-field>
                                        </v-flex>
                                        <v-flex xs12 sm6 md4>
                                            <v-text-field v-model="editedItem.mobile" label="手机号码"></v-text-field>
                                        </v-flex>
                                        <v-flex xs12 sm6 md4>
                                            <v-select v-model="editedItem.roles" :items="items" label="角色"></v-select>
                                        </v-flex>
                                    </v-layout>
                                </v-container>
                            </v-card-text>

                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="blue darken-1" flat @click="close">取消</v-btn>
                                <v-btn color="blue darken-1" flat @click="save">保存</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </v-toolbar>
                <v-data-table
                        :headers="headers"
                        :items="users"
                        class="elevation-1"
                >
                    <template v-slot:items="props">
                        <td>{{ props.item._id }}</td>
                        <td class="text-xl-left">{{ props.item.username }}</td>
                        <td class="text-xl-left">{{ props.item.name }}</td>
                        <td class="text-xl-left">{{ props.item.email }}</td>
                        <td class="text-xl-left">{{ props.item.mobile }}</td>
                        <td class="text-xl-left">{{ props.item.roles }}</td>
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
                { text: '用户名', value: 'username' },
                { text: '实名', value: 'name' },
                { text: '电子邮件', value: 'email' },
                { text: '手机号码', value: 'mobile' },
                { text: '角色', value: 'roles', sortable: false }
            ],
            users: [],
            editedIndex: -1,
            editedItem: {
                _id: '',
                username: '',
                name: '',
                password: '',
                email: '',
                mobile: '',
                roles: []
            },
            defaultItem: {
                _id: '',
                username: '',
                name: '',
                password: '',
                email: '',
                mobile: '',
                roles: []
            },
            items: [
                'ADMIN',
                'USER',
                'M-USER',
                'C-USER'
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
                //this.users = this.$store.getters.getUserList;
                api.request('get','/users', {}).then(response => {
                    if(response.status == 200){
                        this.users = response.data
                    }else{
                        alert('数据加载失败')
                    }
                })
            },

            editItem (item) {
                this.editedIndex = this.users.indexOf(item)
                this.editedItem = Object.assign({}, item)
                this.dialog = true
            },

            deleteItem (item) {
                const index = this.users.indexOf(item)
                this.editedIndex = this.users.indexOf(item)
                this.editedItem = Object.assign({}, item)
                if(confirm('你确定你要删除此项么?')) {
                    api.request('delete', '/users/' + this.editedItem._id, {
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
                        'username': this.editedItem.username,
                        'name': this.editedItem.name,
                        'password': this.editedItem.password,
                        'email': this.editedItem.email,
                        'mobile': this.editedItem.mobile,
                        'roles': [ this.editedItem.roles ]
                    }).then(response => {
                        if(response.status == 200){
                            alert('用户修改成功')
                            this.users.update(this.editedItem)
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
                            this.users.push(this.editedItem)
                            //this.$router.push({ path: '/' })
                        }
                    })
                }
                this.close()
            }
        }
    })
</script>
