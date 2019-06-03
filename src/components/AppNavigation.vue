<template>
    <span>
        <v-toolbar app color="light-blue darken-4" dark>
            <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
            <v-spacer class="hidden-md-and-up"></v-spacer>
            <router-link to="/">
                <v-toolbar-title>{{appTitle}}</v-toolbar-title>
            </router-link>
            <v-btn flat class="hidden-sm-and-down" :to="{path:'/articleList',query: {cat: 'news'}}">新闻</v-btn>
            <v-btn flat class="hidden-sm-and-down" :to="{path:'/articleList',query: {cat: 'notification'}}">通知公告</v-btn>
            <v-btn flat class="hidden-sm-and-down" :to="{path:'/articleList',query: {cat: 'policy'}}">政策法规</v-btn>
            <v-menu offset-y>
                  <template v-slot:activator="{ on }">
                    <v-btn
                            flat
                            class="hidden-sm-and-down"
                            v-on="on"
                    >
                      补贴申报
                    </v-btn>
                  </template>
                  <v-list>
                    <v-list-tile
                            v-for="(item, index) in appItems2"
                            :key="index"
                            @click="appSelected(index)"
                    >
                      <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                    </v-list-tile>
                  </v-list>
            </v-menu>
            <v-btn flat class="hidden-sm-and-down" to="/supermarket">金融超市</v-btn>
            <v-btn flat class="hidden-sm-and-down" to="/loanRequirementNew">融资需求</v-btn>
            <v-btn flat class="hidden-sm-and-down" to="/enterpriseMan" v-if="this.$store.getters.getUser.role=='COUNTY_USER'|this.$store.getters.getUser.role=='MUNICIPAL_USER'">入库企业管理</v-btn>
            <v-btn flat class="hidden-sm-and-down" to="/userman" @click="showUsers()" v-if="this.$store.getters.getUser.role=='ADMIN'">用户管理</v-btn>
            <v-menu offset-y v-if="this.$store.getters.getUser.role=='ADMIN'">
                  <template v-slot:activator="{ on }">
                    <v-btn
                            flat
                            class="hidden-sm-and-down"
                            v-on="on"
                    >
                      新闻通知公告管理
                    </v-btn>
                  </template>
                  <v-list>
                    <v-list-tile
                            v-for="(item, index) in newsItems"
                            :key="index"
                            @click="newsItemSelected(index)"
                    >
                      <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                    </v-list-tile>
                  </v-list>
            </v-menu>
            <v-menu offset-y v-if="this.$store.getters.getUser.role==='COUNTY_USER'
                                  |this.$store.getters.getUser.role==='COUNTY_GROUP_USER'
                                  |this.$store.getters.getUser.role==='MUNICIPAL_USER'
                                  |this.$store.getters.getUser.role==='MUNICIPAL_GROUP_USER'
                                  |this.$store.getters.getUser.role==='MUNICIPAL_DEP_USER'
                                  |this.$store.getters.getUser.role==='BANK_USER'">
                  <template v-slot:activator="{ on }">
                    <v-btn
                            flat
                            class="hidden-sm-and-down"
                            v-on="on"
                    >
                      行政审批
                    </v-btn>
                  </template>
                  <v-list>
                    <v-list-tile
                            v-for="(item, index) in appItems"
                            :key="index"
                            @click="itemSelected(index)"
                    >
                      <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                    </v-list-tile>
                  </v-list>
            </v-menu>
            <v-spacer class="hidden-sm-and-down"></v-spacer>

            <v-btn flat class="hidden-sm-and-down" to="/sign-in" v-show="!isLogin">登录</v-btn>
            <v-btn flat class="hidden-sm-and-down" to="/sign-in" v-show="isLogin" @click="logout">退出</v-btn>
            <v-btn color="brown lighten-3" class="hidden-sm-and-down" to="/enterpriseRegister">注册</v-btn>
        </v-toolbar>
        <v-navigation-drawer app v-model="drawer" color="light-blue darken-4" dark clipped temporary>
            <v-list>
              <v-list-tile>
                <v-list-tile-action>
                  <v-icon>home</v-icon>
                </v-list-tile-action>
                <v-list-tile-title>主页</v-list-tile-title>
              </v-list-tile>

              <v-list-group
                      prepend-icon="account_circle"
                      value="true"
              >
                <template v-slot:activator>
                  <v-list-tile>
                    <v-list-tile-title>管理后台</v-list-tile-title>
                  </v-list-tile>
                </template>
                  <v-list-tile
                          v-for="(admin, i) in admins"
                          :key="i"
                          @click="onAdmin(i)"
                  >
                    <v-list-tile-title v-text="admin[0]"></v-list-tile-title>
                    <v-list-tile-action>
                      <v-icon v-text="admin[1]"></v-icon>
                    </v-list-tile-action>
                  </v-list-tile>
              </v-list-group>

              <v-list-group prepend-icon="account_circle"
                            value="true">
                  <template v-slot:activator>
                  <v-list-tile>
                    <v-list-tile-title>用户中心</v-list-tile-title>
                  </v-list-tile>
                </template>
                  <v-list-tile
                          v-for="(user, i) in users"
                          :key="i"
                          @click="onUser(i)"
                  >
                    <v-list-tile-title v-text="user[0]"></v-list-tile-title>
                    <v-list-tile-action>
                      <v-icon v-text="user[1]"></v-icon>
                    </v-list-tile-action>
                  </v-list-tile>
              </v-list-group>

              <v-list-group
                          prepend-icon="account_circle"
                          value="true"
              >
                <template v-slot:activator>
                  <v-list-tile>
                    <v-list-tile-title>银行后台</v-list-tile-title>
                  </v-list-tile>
                </template>
                  <v-list-tile
                          v-for="(bank, i) in banks"
                          :key="i"
                          @click="onBank(i)"
                  >
                    <v-list-tile-title v-text="bank[0]"></v-list-tile-title>
                    <v-list-tile-action>
                      <v-icon v-text="bank[1]"></v-icon>
                    </v-list-tile-action>
                  </v-list-tile>
              </v-list-group>

              <v-list-group
                         prepend-icon="account_circle"
                         value="true"
              >
                <template v-slot:activator>
                  <v-list-tile>
                    <v-list-tile-title>政务后台</v-list-tile-title>
                  </v-list-tile>
                </template>
                  <v-list-tile
                          v-for="(gov, i) in govs"
                          :key="i"
                          @click="onGov(i)"
                  >
                    <v-list-tile-title v-text="gov[0]"></v-list-tile-title>
                    <v-list-tile-action>
                      <v-icon v-text="gov[1]"></v-icon>
                    </v-list-tile-action>
                  </v-list-tile>
              </v-list-group>
            </v-list>
        </v-navigation-drawer>
    </span>
</template>

<script>
    export default {
        name: 'AppNavigation',
        data() {
            return {
                appTitle: '丽江中小企业金融服务平台',
                drawer: null,
                items: [
                    { title: '菜单' },
                    { title: '登录' },
                    { title: '注册' }
                ],
                appItems: [
                    { title: '信贷引导资金审核' },
                    { title: '风险补偿金申请审核' },
                    { title: '贷款贴息专项资金申请审核' }
                ],
                appItems2: [
                    { title: '信贷引导资金申请' },
                    { title: '风险补偿金申请' },
                    { title: '贷款贴息专项资金申请' }
                ],
                newsItems: [
                    { title: '发布新文章' },
                    { title: '文章管理' }
                ],
                admins: [
                    ['用户管理', 'people_outline'],
                    ['文章发布','fas fa-feather'],
                    ['文章管理','fas fa-tasks'],
                    ['数据备份', 'fas fa-database']
                ],
                users: [
                    ['我的融资申请','fas fa-feather'],
                    ['我的项目申请','fas fa-tasks'],
                    ['管理我的信息','fas fa-id-card-alt'],
                    ['发布融资需求', 'fas fa-feather'],
                    ['融资需求管理', 'fas fa-tasks']
                ],
                banks: [
                    ['发布融资产品','fas fa-feather'],
                    ['管理融资产品', 'fas fa-tasks'],
                    ['融资申请审核', 'fas fa-user-check'],
                    ['融资进度反馈','fas fa-comments']

                ],
                govs: [
                    ['企业入库审核','fas fa-user-check'],
                    ['信贷引导资金申请审核','fas fa-user-check'],
                    ['风险补偿金申请审核','fas fa-user-check'],
                    ['贷款贴息转向资金申请审核','fas fa-user-check'],
                ]
            };
        },
        //inject: ['reload'],
        methods: {
            showUsers() {
                console.log('dispatched');
                this.$store.dispatch('getUsers');
            },
            itemSelected(index){
                console.log(index);
                if(index==0){
                    if(this.$store.getters.getIsLogin){
                        this.$router.push({ path: '/loanGuideAppMan' })
                    }else{
                        this.$router.push({ path: '/sign-in' })
                    }
                }else if(index == 1){

                }else if(index == 2){

                }
            },
            appSelected(index){
                console.log(index);
                if(index==0){
                    console.log(this.$store.getters.getIsLogin)
                    if(this.$store.getters.getIsLogin){
                        this.$router.push({ path: '/loanGuideApp' })
                    }else{
                        this.$router.push({ path: '/sign-in' })
                    }
                }else if(index == 1){

                }else if(index == 2){

                }
            },
            newsItemSelected(index) {
                if(index==0){
                    this.$router.push({ path: '/articleEdit' })
                }else{
                    this.$router.push({ path: '/articleMan' })
                }
            },
            logout() {
                this.$store.commit('userStatus', null)
                this.$router.go(0)
                //this.refresh()


            },
            onAdmin(i) {
                switch(i){
                    case 0:
                        this.$router.push({ path: '/userman' })
                        break
                    case 1:
                        this.$router.push({ path: '/articleEdit' })
                        break
                    case 2:
                        this.$router.push({ path: '/articleMan' })
                        break
                    case 3:
                        break
                }
            },
            onUser(i) {
                switch(i){
                    case 0:
                        this.$router.push({ path: '/loanProductAppMan' })
                        break
                    case 1:
                        this.$router.push({ path: '/loanguideappman' })
                        break
                    case 2:
                        this.$router.push({ path: '/userInfo' })
                        break
                    case 3:
                        this.$router.push({ path: '/loanRequirementNew'})
                        break
                    case 4:
                        this.$router.push({ path: '/loanRequirementMan'})
                        break
                }
            },
            onBank(i) {
                switch(i){
                    case 0:
                        this.$router.push({ path: '/loanProductNew' })
                        break
                    case 1:
                        this.$router.push({ path: '/loanProductsMan' })
                        break
                    case 2:
                        this.$router.push({ path: '/loanProductAppMan' })
                        break
                    case 3:
                        this.$router.push({ path: '/loanProductAppFeedback' })
                        break
                }
            },
            onGov(i) {
                switch(i){
                    case 0:
                        this.$router.push({ path: '/enterpriseMan' })
                        break
                    case 1:
                        this.$router.push({ path: '/loanGuideAppMan' })
                        break
                    case 2:
                        this.$router.push({ path: '/articleMan' })
                        break
                    case 3:
                        break
                }
            },
            refresh() {
                this.reload()
            }
        },
        computed: {
            isLogin() {
                //console.log("inside islogin")
                if(sessionStorage.getItem('username')&&sessionStorage.getItem('accessToken')){
                    let usr = {
                        'username': sessionStorage.getItem('username'),
                        'accessToken':sessionStorage.getItem('accessToken'),
                        'role':sessionStorage.getItem('role'),
                        'region':sessionStorage.getItem('region'),
                        'uid':sessionStorage.getItem('uid'),
                        'orgId':sessionStorage.getItem('orgId')
                    }
                    this.$store.commit('userStatus', usr)
                }else{
                    this.$store.commit('userStatus', null)
                }
                return this.$store.getters.getIsLogin
            }
        },
        updated: function() {
            console.log(this.drawer)
        }
    };
</script>

<style scoped>
    a {
        color: white;
        text-decoration: none;
    }
</style>