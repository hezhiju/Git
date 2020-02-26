 /**
 * 接口域名的管理
 */
const base = {    
    didong: 'http://didong.ddgeyou.com/',
    backup: 'http://backup.ddgeyou.com/',
    beta: 'https://beta.ddgeyou.com/',
    ur: 'http://121.199.68.77',
    
    // 不同环境中的请求域名（）
    Axios: {
        baseURL: {
            production: 'http://didong.ddgeyou.com/',
            development: 'http://beta.ddgeyou.com/',
            test: 'https://beta.ddgeyou.com/'
        }
    },
}

export default base;