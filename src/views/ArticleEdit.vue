<template>
    <v-container>
       <v-layout>
       <v-flex>
           <v-card>
               <v-card-title>发布新文章</v-card-title>
               <form>
                   <v-layout column wrap pa-3>
                   <v-flex>
                   <v-text-field
                           v-model="title"
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
                           v-model="tags"
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
                           <v-radio-group v-model="type" row>
                               <v-radio
                                       label="新闻"
                                       color="red"
                                       value="news"
                               ></v-radio>
                               <v-radio
                                       label="通知公告"
                                       color="orange"
                                       value="notification"
                               ></v-radio>
                               <v-radio
                                       label="政策法规"
                                       color="blue"
                                       value="policy"
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
                       <Editor ref="froalaEditor" @on-change="changeContent" v-model="formData.content"></Editor>
                   </v-flex>
                   </v-layout>
                   <v-layout row align-center justify-center fill-height pa-3>
                       <v-btn @click="cancel" color="info">取消</v-btn>
                       <v-btn color="success" @click="onSubmit('form')">提交</v-btn>
                   </v-layout>
               </form>
           </v-card>
       </v-flex>
       </v-layout>
    </v-container>
</template>

<script>
    import Editor from "../components/Editor"
    import api from "../api"
    //import store from "../store"

    export default {
        data: () => ({
            formData: {
                content: ''
            },
            $_veeValidate: {
                validator: 'new'
            },
            title: '',
            createTime: '',
            editor: '',
            content: '',
            type: '',
            tags: '',
            count: '',
            media: [],
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
                    }
                }
            }
        }),
        components: {
          Editor
        },
        mounted () {
            this.$validator.localize('zh_cn', this.dictionary)
        },
        methods: {
            init() {
              this.$nextTick(()=> {
                  console.log(this.formData.content)
                  this.$refs.froalaEditor.setHtml(this.formData.content)
              })
            },
            changeContent(html) {
                this.formData.content = html
                console.log(this.formData.content);
            },
            onSubmit() {
                this.$validator.validateAll().then(result => {
                    console.log(this.$store.getters.getUser)
                    if (result) {
                        api.request('post', '/article', {
                            'title': this.title,
                            'createTime': new Date(),
                            'editor': this.$store.getters.getUser.username,
                            'content': this.formData.content,
                            'type': this.type,
                            'tags': this.tags,
                            'count': this.count,
                            'media': this.media
                        }).then(response => {
                            if (response.status == 200) {
                                alert('文章添加成功')
                                console.log(response.data)
                            }
                        })
                    }
                })
            },
            cancel() {

            }
        }
    };
</script>

<style></style>
