import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import store from './store.js';

Vue.use(Router);

let router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('./views/About.vue'),
            meta: {
                guest: true,
            }
        },
        {
            path: '/sign-in',
            name: 'signin',
            component: () => import('./views/Signin.vue'),
            /*meta: {
                guest: true,
            }*/
        },
        {
            path: '/join',
            name: 'join',
            component: () => import('./views/Join.vue')
        },
        {
            path: '/userman',
            name: 'userman',
            component: () => import('./views/UserMan.vue'),
            meta: {
                requiresAuth: true,
                is_admin : true
            }
        },
        {
            path: '/loanguideapp',
            name: 'loanguideapp',
            component: () => import('./views/LoanGuideApplication.vue')
        },
        {
            path: '/loanguideappman',
            name: 'loanguideappman',
            component: () => import('./views/LoanGuideApplicationMan.vue')
        },
        {
            path: '/enterpriseRegister',
            name: 'enterpriseRegister',
            component: () => import('./views/Enterprise.vue')
        },
        {
            path: '/enterpriseMan',
            name: 'enterpriseMan',
            component: () => import('./views/EnterpriseMan.vue')
        },
        {
            path: '/articleEdit',
            name: 'articleEdit',
            component: () => import('./views/ArticleEdit.vue')
        },
        {
            path: '/articleMan',
            name: 'articleMan',
            component: () => import('./views/ArticleMan.vue')
        },
        {
            path: '/article',
            name: 'article',
            component: () => import('./views/Article.vue')
        },
        {
            path: '/articleList',
            name: 'articleList',
            component: () => import('./views/ArticleList.vue')
        },
        {
            path: '/loanProducts',
            name: 'loanProducts',
            component: () => import('./views/LoanProducts.vue')
        },
        {
            path: '/loanProductNew',
            name: 'loanProductNew',
            component: () => import('./views/LoanProductNew.vue')
        },
        {
            path: '/loanProductsMan',
            name: 'loanProductsMan',
            component: () => import('./views/LoanProductsMan.vue')
        },
        {
            path: '/supermarket',
            name: 'supermarket',
            component: () => import('./views/Supermarket.vue')
        },
        {
            path: '/loanProductDetail',
            name: 'loanProductDetail',
            component: () => import('./views/LoanProductDetail.vue')
        },
        {
            path: '/loanProductApp',
            name: 'loanProductApp',
            component: () => import('./views/LoanProductApp.vue')
        },
        {
            path: '/loanProductAppMan',
            name: 'loanProductAppMan',
            component: () => import('./views/LoanProductAppMan.vue')
        },
        {
            path: '/userInfo',
            name: 'userInfo',
            component: () => import('./views/UserInfo.vue')
        },
        {
            path: '/loanProductAppFeedback',
            name: 'loanProductAppFeedback',
            component: () => import('./views/LoanProductAppFeedback.vue')
        },
        {
            path: '/loanRequirementNew',
            name: 'loanRequirementNew',
            component: () => import('./views/LoanRequirementNew.vue')
        }
    ]
});

router.beforeEach((to, from, next) => {
    //console.log(store);
    if(to.matched.some(record => record.meta.requiresAuth)) {
        if (store.getters.getUser.accessToken == null) {
            next({
                path: '/sign-in',
                params: { nextUrl: to.fullPath }
            })
        } else {
            let user = store.getters.getUser;
            if(to.matched.some(record => record.meta.is_admin)) {
                if(user.role == 'ADMIN'){
                    next()
                }
                else{
                    next({ name: 'signin'})
                }
            }else {
                next()
            }
        }
    } else if(to.matched.some(record => record.meta.guest)) {
        if(store.getters.getUser.accessToken == null){
            next()
        }
        else{
            next()
        }
    }else {
        next()
    }
});

export default router;
