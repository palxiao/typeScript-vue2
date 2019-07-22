
const environment: number = 1;

let apiUrl!: string;
let webUrl!: string;
if (environment === 0) {
    apiUrl = 'http://dev.yun.bicobrand.com/api';
    webUrl = 'http://dev.yun.bicobrand.com';
} else {
    apiUrl = 'http://yun.bicobrand.com/api';
    webUrl = 'http://yun.bicobrand.com';
}

export default {
    VERSION: '0.0.1',
    APP_COPYRIGHT: ' ',
    API_URL: apiUrl,
    WEB_URL: webUrl,
    // IMG_URL: 'http://report.bicobrand.com/api',
    // login: 'http://dev.report.bicobrand.com/login',
    // wx_redirectUri: 'http://localhost:8080'
    // wx_redirectUri: 'http://192.168.2.130:8080'
    mapConfig: {
        key: 'f8f21b7f8b2c4aa3f591d49bc780ddec',
        plugin: ['AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType'],
        v: '1.4.4'
    }
}
