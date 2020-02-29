import { AxiosRequestConfig } from './types'
import xhr from './xhr'
import { buildURL } from './helpers/url'

function axios (config: AxiosRequestConfig) {
    processConfig(config)
    xhr(config)
}

// 对config进行一些处理
function processConfig(config: AxiosRequestConfig): void {
    // 对url进行一些处理
    config.url = transformURL(config)
}

function transformURL(config: AxiosRequestConfig): string {
    const { url, params } = config
    return buildURL(url, params)
}

export default axios