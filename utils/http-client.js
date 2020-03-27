// 请求方式的封装
import { ENV } from '../common/index.js';


export class HttpClient {
    request(url, method, data, header) {
        let promise = new Promise((resolve, rej) => {
            uni.request({
                url: ENV.BaseUrl + url,
                data: data ? data : null,
                method: method,
                header: header ? header : { 'content-type': 'application/x-www-form-urlencoded' },
                success: function (res) {
                    //接口调用成功返回数据做 数据的拦截res.data
                    resolve(res.data);
                },
                fail: function (error) {
                    console.log(error)
                }
            })
        });
        return promise;
    }
    get(url, data, header = {}) {
        return this.request({ url, method: METHOD.GET, data, header })
    }
    delete(url, data, header = {}) {
        return this.request({ url, method: METHOD.DELETE, data, header })
    }
    post(url, data, header = {}) {
        return this.request({ url, method: METHOD.POST, data, header })
    }
    put(url, data, header = {}) {
        return this.request({ url, method: METHOD.PUT, data, header })
    }
    all(tasks) {
        return Promise.all(tasks)
    }
}
