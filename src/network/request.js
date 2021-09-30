import axios from 'axios'

export function request(config){
    // 1.创建axios的实例
    const ins = axios.create({
        baseURL:'http://123.207.32.32:8000',
        timeout: 5000
    })

    // 2.axios拦截器
    // a.请求拦截
    ins.interceptors.request.use(config => {
        // 什么时候要拦截请求
        // （1）当config中的信息不符合服务器的要求时
        // （2）当每次发送请求时，要求在界面中显示一个图标时
        // （3）某些网络请求，必须要携带一定的信息
        return config
    },err => {
        console.log(err)
    })

    // b.响应拦截
    ins.interceptors.response.use(config => {
        return config.data
    },err => {
        console.log(err)
    })


    // 3.发送真正的网络请求
    return ins(config)
}