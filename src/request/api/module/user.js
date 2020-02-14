/**
 * article模块接口列表
 */

import base from './base'; // 导入接口域名列表
import instance from '../../axios'; // 导入http中创建的axios实例
// import Vuex from '../../../store/index'; // 导入数据变量

const user = {
    /**
     * 淘宝客返利-商品列表接口
     * page 请求页码数
     */  
    commodity (page) {        
        return instance.get(`${base.ur}/api/commodity/index`,{page});    
    },
    /**
     * 首页
     */
    shareshop () {
        return instance.post(`${base.didong}api/v4.shareshop/index`);
    },
}

export default user;