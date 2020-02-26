import axios from './axios';
import * as qiniu from 'qiniu-js';

const upload = {
    getUploadToken() {
        return axios.post('https://beta.ddgeyou.com/didong_xl/lecture/vue_get_qn_token/').then(res => {
            //获取上传token
            // eslint-disable-next-line no-console
            console.log("setUploadToken");
            // eslint-disable-next-line no-console
            console.log(res.data.token);

            return res.data.token
        })
    },
    
    uploadFiles(files) {
        let up = [];
        files.forEach(item => (
            up.push(this.uploadFile(item))
        ));
        return Promise.all(up)
    },
    
    uploadFile(file) {
        let config = {
            useCdnDomain: false,
        };
        let putExtra = {
            fname: Date.parse(new Date()) + String(Math.random()) + file.file.name,
            mimeType: null
        };
        return this.getUploadToken().then(token => {
            return new Promise((resolve, reject) => {
                qiniu.upload(file.file, putExtra.fname, token, putExtra, config).subscribe({
                    next(res){
                        // next: 接收上传进度信息
                        // total.loaded: 已上传大小，单位为字节。
                        // total.total: 本次上传的总量控制信息，单位为字节
                        // total.percent: 当前上传进度，范围：0～100。
                        // eslint-disable-next-line no-console
                        console.log("上传进度信息");
                        // eslint-disable-next-line no-console
                        console.log(res.total.percent);
                        // resolve(res)
                    },
                    error(err) {
                        reject(err)
                    },
                    complete(res) {
                        // 接收上传完成后的后端返回信息
                        resolve('http://cdns.ddgeyou.com/' + res.key)
                    },
                })
            })
        })
    }
    
};

export default upload
