import { isIOS, isAndroid, isApp } from './utils'
const JSBridge = {
    isApp,

    // APP离线环境
    isOfflineApp: isApp && location.protocol === 'file:',

    // H5 调用 App
    /**
     * 调用 App 方法
     * @param event：事件名称
     * @param data：json 数据
     * @param successCallBack: 成功回调
     * @param failCallBack: 失败回调
     * @returns {Promise<object>}
     */
    callApp(event, data = {}) { },

    /**
     * 注册 H5 供 app 调用的方法
     * @param fnName
     * @param fn
     */
    registerFn(fnName, fn) { },

    /**
     * 注销 H5 供 app 调用的方法
     * @param fnName
     */
    unregisterFn(fnName) { },

    /**
     * 跳转至app模块
     * @param url
     * @param isWaitingResult
     * @returns {*|Promise<Object>}
     */
    gotoNativeModule(url, isWaitingResult = false) { },

    /**
     * 在APP内新打开
     * @param url
     * @param titleBarVisible
     * @param title
     */
    gotoNewWebview(url, titleBarVisible = true, title = '') { },

    /**
     * 监控页面活动状态
     * @param activated
     * @param deactivated
     */
    watchPageActivity(activated, deactivated) { },
    /**
     * 调用app方法 注册全局事件
     * @param event：事件名称
     * @param data：json数据
     * @param successCallBack: 主动设置成功回调
     * @param failCallBack: 主动设置失败回调
     * @returns {Promise<object>}
     */
    callAppNoPromise(event, data = {}, successCallBackName, failCallBackName) { },

    /**
     * 获取app用户信息，防止多次获取
     * @param needUpdate 是否需要再次更新
     * @returns {*|Promise<Object>}
     */
    _appUser: {
        _loaded: false, // 是否从APP加载过数据，该字段不是从app中获取
        userName: '',
        phoneNum: '',
        userId: '',
        userToken: '', // 用户token，没有则代表未登录
    },
    getAppUser(needUpdate) { }
}
export default JSBridge
