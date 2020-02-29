import { AxiosRequestConfig } from './types'
import xhr from './xhr'
import { buildURL } from './helpers/url'
import { transformRequest } from './helpers/data'
function axios (config: AxiosRequestConfig) {
    processConfig(config)
    xhr(config)
}

// 对config进行一些处理
function processConfig(config: AxiosRequestConfig): void {
    // 对url进行一些处理
    config.url = transformURL(config)
    // 对data进行一些处理
    config.data = transformRequestData(config)
}

function transformURL(config: AxiosRequestConfig): string {
    const { url, params } = config
    return buildURL(url, params)
}

function transformRequestData(config: AxiosRequestConfig): any{
    return transformRequest(config.data)
}

export default axios