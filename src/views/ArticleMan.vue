<template>
            <div>
                <v-toolbar flat color="white">
                    <v-toolbar-title>文章管理</v-toolbar-title>
                    <v-divider
                            class="mx-2"
                            inset
                            vertical
                    ></v-divider>
                    <v-spacer></v-spacer>
                    <v-dialog v-model="dialog" max-width="800px">
                        <template v-slot:activator="{ on }">
                            <v-btn color="primary" dark class="mb-2" v-on="on">发布文章</v-btn>
                        </template>
                        <v-card>
                            <v-card-title>
                                <span class="headline">{{ formTitle }}</span>
                            </v-card-title>

                            <v-card-text>
                                <v-card-title>发布新文章</v-card-title>
                                <form>
                                    <v-layout column wrap pa-3>
                                        <v-flex>
                                            <v-text-field
                                                    v-model="editedItem.title"
                                                    v-validate="'required|max:50'"
                                                    :counter="20"
                                                    :error-messages="errors.collect('title')"
                                                    label="标题"
                                                    data-vv-name="title"
                                                    required
                                            ></v-text-field>
                                        </v-flex>
                                        <v-flex>
                                            <v-text-field
                                                    v-model="editedItem.tags"
                                                    v-validate="'required|max:50'"
                                                    :counter="20"
                                                    :error-messages="errors.collect('tags')"
                                                    label="关键字"
                                                    data-vv-name="tags"
                                                    required
                                            ></v-text-field>
                                        </v-flex>
                                    </v-layout>
                                    <v-layout column wrap pa-3>
                                        <v-flex>
                                            <v-label>选择文章类型</v-label>
                                        </v-flex>
                                        <v-flex>
                                            <v-radio-group v-model="editedItem.type" row>
                                                <v-radio
                                                        label="新闻"
                                                        color="red"
                                                        value="red"
                                                ></v-radio>
                                                <v-radio
                                                        label="通知公告"
                                                        color="orange"
                                                        value="orange"
                                                ></v-radio>
                                                <v-radio
                                                        label="政策法规"
                                                        color="blue"
                                                        value=""
                                                ></v-radio>
                                            </v-radio-group>
                                        </v-flex>
                                    </v-layout>
                                    <v-layout column pa-2>
                                        <v-flex>
                                            <v-toolbar
                                                    color="light-blue darken-4"
                                                    dark
                                                    tabs
                                            >
                                                <v-toolbar-title>编辑内容</v-toolbar-title>
                                            </v-toolbar>
                                        </v-flex>
                                        <v-flex>
                                            <Editor ref="froalaEditor" @on-change="changeContent" v-model="editedItem.content"></Editor>
                                        </v-flex>
                                    </v-layout>
                                </form>
                            </v-card-text>

                            <v-card-actions>
                                <v-layout row align-center justify-center fill-height pa-3>
                                    <v-btn @click="cancel" color="info">取消</v-btn>
                                    <v-btn color="success" @click="save">提交</v-btn>
                                </v-layout>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </v-toolbar>
                <v-data-table
                        :headers="headers"
                        :items="articles"
                        class="elevation-1"
                >
                    <template v-slot:items="props">
                        <td>{{ props.item._id }}</td>
                        <td class="text-xl-left">{{ props.item.title }}</td>
                        <td class="text-xl-left">{{ props.item.type }}</td>
                        <td class="text-xl-left">{{ props.item.tags }}</td>
                        <td class="text-xl-left">{{ props.item.editor }}</td>
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
</template>

<script>
    import api from "../api"
    import Editor from "../components/Editor"

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
                { text: '文章标题', value: 'title' },
                { text: '类型', value: 'type' },
                { text: '关键字', value: 'tags' },
                { text: '编辑者', value: 'editor' },
            ],
            articles: [],
            editedIndex: -1,
            editedItem: {
                _id: '',
                title: '',
                createTime: '',
                editor: '',
                content: '',
                type: '',
                tags: '',
                count: '',
                media: []
            },
            defaultItem: {
                _id: '',
                title: '',
                createTime: '',
                editor: '',
                content: '',
                type: '',
                tags: '',
                count: '',
                media: []
            }
        }),

        components: {
            Editor
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
            init() {
                this.$nextTick(()=> {
                    console.log(this.editedItem.content)
                    this.$refs.froalaEditor.setHtml(this.editedItem.content)
                })
            },

            changeContent(html) {
                this.editedItem.content = html
                console.log(this.editedItem.content);
            },

            initialize () {
                api.request('get','/articles', {
                }).then(response => {
                    if(response.status == 200){
                        this.articles = response.data;
                        console.log(this.articles);
                        //this.users.push(this.editedItem)
                        //this.$router.push({ path: '/' })
                    }
                })
            },

            editItem (item) {
                this.editedIndex = this.articles.indexOf(item)
                this.editedItem = Object.assign({}, item)
                //确保编辑控件显示内容
                this.$refs.froalaEditor.setHtml(this.editedItem.content)
                this.dialog = true
            },

            deleteItem (item) {
                const index = this.articles.indexOf(item)
                this.editedIndex = this.articles.indexOf(item)
                this.editedItem = Object.assign({}, item)
                if(confirm('你确定你要删除此项么?')) {
                    api.request('delete', '/articles/' + this.editedItem._id, {
                    }).then(response => {
                        if(response.status == 200){
                            alert('用户删除成功')
                            this.articles.splice(index, 1)
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
                    Object.assign(this.articles[this.editedIndex], this.editedItem)
                    api.request('put', '/articles/' + this.editedItem._id, {
                        'title': this.editedItem.title,
                        'createTime': this.editedItem.createTime,
                        'editor': this.editedItem.editor,
                        'content': this.editedItem.content,
                        'type': this.editedItem.type,
                        'tags': this.editedItem.tags,
                        'count': this.editedItem.count,
                        'media': this.editedItem.media
                    }).then(response => {
                        if(response.status == 200){
                            alert('文章修改成功')
                            this.articles.update(this.editedItem)
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
