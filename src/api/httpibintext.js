import  { httpbinInstance }  from './index'

export const getHttpbinTest = (param) => {
    return httpbinInstance.request({
        url:'/get?param=' + param
    })
}
