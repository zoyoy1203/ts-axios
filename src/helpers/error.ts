import { AxiosRequestConfig, AxiosResponse } from '../types'
export class AxiosError extends Error{
    isAxiosError: boolean
    config: AxiosRequestConfig
    code?: string | null
    request?: any
    response?: AxiosResponse

    constructor(
        message: string,
        config: AxiosRequestConfig,
        code?: string | null,
        request?: any,
        response?: AxiosResponse
    ){
        super(message)
        
        this.config = config
        this.code = code
        this.request = request
        this.response = response
        this.isAxiosError = true

        Object.setPrototypeOf(this, AxiosError.prototype) // 该句是为了修复坑，这用弄，才能使用方法（继承了Error,Array,Map的类）
    }

}

// 工厂函数， 通过createError 创建一个AxiosError的实例
export function createError(
    message: string,
    config: AxiosRequestConfig,
    code?: string | null,
    request?: any,
    response?: AxiosResponse
) {
    const error = new AxiosError(message,config,code,request,response)
    return error
}