/**
 * article模块接口列表
 */

import config from '../../plugins/config'; // 导入接口域名列表
import instance from '../../plugins/axios'; // 导入http中创建的axios实例
// import Vuex from '../../../store/index'; // 导入数据变量

const user = {
    /**
     * 淘宝客返利-商品列表接口
     * page 请求页码数
     */  
    commodity (page) {        
        return instance.get(`${config.ur}/api/commodity/index`,{page});    
    },
    /**
     * 首页
     */
    shareshop () {
        return instance.post(`${config.Axios.baseURL[process.env.NODE_ENV]}api/v4.shareshop/index`);
    },
     /**
     * 分享签名
     */
    share () {
        return instance.post(`${config.Axios.baseURL['production']}/didong_xl/lecture/get_signature/`);
    },
}

export default user;