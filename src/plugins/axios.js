
/**
 * axios封装
 * 请求拦截、响应拦截、错误统一处理
 */
import axios from 'axios';
// import router from '../router';
import store from '../store/index';
import { Toast } from 'vant';

/** 
 * 提示函数 
 * 禁止点击蒙层、显示一秒后关闭
 */
const tip = msg => {    
    Toast({        
        message: msg,        
        duration: 1000,        
        forbidClick: true    
    });
}

/** 
 * 跳转登录页
 * 携带当前页面路由，以期在登录页面完成登录后返回当前页面
 */
const toLogin = () => {
    // router.replace({
    //     path: '/login',        
    //     query: {
    //         redirect: router.currentRoute.fullPath
    //     }
    // });
    tip('跳转登录页');
}

/** 
 * 请求失败后的错误统一处理 
 * @param {Number} status 请求失败的状态码
 */
const errorHandle = (status, other) => {
    // 状态码判断
    switch (status) {
        case 400: tip('请求错误(400)'); break;
        // 401: 未登录状态，跳转登录页
        case 401: toLogin(); break;
        // 403 token过期
        // 清除token并跳转登录页
        case 403:
            tip('登录过期，请重新登录');
            // localStorage.removeItem('token');
            // store.commit('loginSuccess', null);
            // setTimeout(() => {
            //     toLogin();
            // }, 1000);
            break;
        // 404请求不存在
        case 404: tip('请求出错(404)'); break;
        case 408: tip('请求超时(408)'); break;
        case 500: tip('服务器错误(500)'); break;
        case 501: tip('服务未实现(501)'); break;
        case 502: tip('网络错误(502)'); break;
        case 503: tip('服务不可用(503)'); break;
        case 504: tip('网络超时(504)'); break;
        case 505: tip('HTTP版本不受支持(505)'); break;
        default:
            // eslint-disable-next-line no-console
            console.log(other);   
        }}
// 创建axios实例
var instance = axios.create({ timeout: 1000 * 12 });
// 设置post请求头
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
/** 
 * 请求拦截器 
 * 每次请求前，如果存在token则在请求头中携带token 
 */ 
let showLoading = false;//加载中弹框

let showLoadingNum = 0;//请求数据时加载数量

instance.interceptors.request.use(    
    config => {
        // 开始加载数据
        showLoadingNum += 1;
        if (!showLoading) {
            showLoading = true;
            Toast.loading({
                message: '加载中'
            })
        }
        // 登录流程控制中，根据本地是否存在token判断用户的登录情况        
        // 但是即使token存在，也有可能token是过期的，所以在每次的请求头中携带token        
        // 后台根据携带的token判断用户的登录情况，并返回给我们对应的状态码        
        // 而后我们可以在响应拦截器中，根据状态码进行一些统一的操作。        
        const token = store.state.token;        
        token && (config.headers.Authorization = token);        
        return config;    
    },    
    error => Promise.error(error))

// 响应拦截器
instance.interceptors.response.use(    
    // 请求成功
    res => {
        if (res.status === 200) {
            Promise.resolve(res)
            showLoadingNum -= 1;
            showLoadingNum === 0 && Toast.clear();
            return Promise.resolve(res);
        }else{
            return Promise.reject(res)
        }
    },

    // 请求失败
    error => {
        const { response } = error;
        if (response) {
            // 请求已发出，但是不在2xx的范围 
            errorHandle(response.status, response.data.message);
            return Promise.reject(response);
        } else {
            // 处理断网的情况
            tip('请求超时或断网');
        }
    });

export default instance;