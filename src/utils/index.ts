import Vue from 'vue';
// import store from '../store'
import router from '../router'
import * as services from '../api/index'
import * as utils from './utils'
/** 全局过滤器 */
import filter from './filter'
filter(Vue)
/** 路由钩 */
import hook from './widget/hook'
hook(router)
/** 全局组件 */
// import modules from './widget/modules'
// modules(Vue)
/** 高德地图 */
import VueAMap from 'vue-amap'
Vue.use(VueAMap)
VueAMap.initAMapApiLoader(utils.config.mapConfig)

/**
 * 全局组件方法
 */
export default {

    install(myVue: Type.Object) {

        myVue.prototype.$ajax = services; // http请求

        myVue.prototype.$utils = utils; // 工具类挂载

        myVue.prototype.$bus = new Vue(); // 广播事件

        /**
         * 判断是否微信客户端
         */
        myVue.prototype.$isWX = () => {
            const ua = window.navigator.userAgent.toLowerCase();
            const match = ua.match(/MicroMessenger/i) + '' || '';
            if (match === 'micromessenger') {
                return true;
            } else {
                return false;
            }
        }

    }

}
