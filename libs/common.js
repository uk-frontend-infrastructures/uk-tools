/**
 * 返回其数据类型
 * @param {*} para 
 * @returns 
 */
function _dataType(para) {
    return Object.prototype.toString.call(para)
};

/**
 * 数组去重
 * @param {*} arr 
 * @returns 
 */
function _arrUnique1(arr) {
    return [...new Set(arr)]
};
/**
 * 数组去重
 * @param {*} arr 
 * @returns 
 */
function _arrUnique2(arr) {
    var obj = {};
    return arr.filter(ele => {
        if (!obj[ele]) {
            obj[ele] = true;
            return true;
        }
    })
};
/**
 * 数组去重
 * @param {*} arr 
 * @returns 
 */
function _arrUnique3(arr) {
    var result = [];
    arr.forEach(ele => {
        if (result.indexOf(ele) == -1) {
            result.push(ele)
        }
    })
    return result;
};

/**
 * 字符串去重
 * @param {*} curStr 
 * @returns 
 */
function _characterUnique(curStr) {
    var obj = {},
        str = '',
        len = curStr.length;
    for (var i = 0; i < len; i++) {
        if (!obj[curStr[i]]) {
            str += curStr[i];
            obj[curStr[i]] = true;
        }
    }
    return str;
};

//深克隆（深克隆不考虑函数）
function _deepClone1(obj, result) {
    var result = result || {};
    for (var prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            if (typeof obj[prop] == 'object' && obj[prop] !== null) {
                // 引用值(obj/array)且不为null
                if (Object.prototype.toString.call(obj[prop]) == '[object Object]') {
                    // 对象
                    result[prop] = {};
                } else {
                    // 数组
                    result[prop] = [];
                }
                deepClone(obj[prop], result[prop])
            } else {
                // 原始值或func
                result[prop] = obj[prop]
            }
        }
    }
    return result;
};

// 深浅克隆是针对引用值
function _deepClone2(target) {
    if (typeof (target) !== 'object') {
        return target;
    }
    var result;
    if (Object.prototype.toString.call(target) == '[object Array]') {
        // 数组
        result = []
    } else {
        // 对象
        result = {};
    }
    for (var prop in target) {
        if (target.hasOwnProperty(prop)) {
            result[prop] = deepClone(target[prop])
        }
    }
    return result;
};

// 找出字符串中第一次只出现一次的字母
function _firstAppear(str) {
    var obj = {},
        len = str.length;
    for (var i = 0; i < len; i++) {
        if (obj[str[i]]) {
            obj[str[i]]++;
        } else {
            obj[str[i]] = 1;
        }
    }
    for (var prop in obj) {
        if (obj[prop] == 1) {
            return prop;
        }
    }
};

// 找元素的第n级父元素
function _eleParents(ele, n) {
    while (ele && n) {
        ele = ele.parentElement ? ele.parentElement : ele.parentNode;
        n--;
    }
    return ele;
};

// 返回元素的第n个兄弟节点
function _retSibling(e, n) {
    while (e && n) {
        if (n > 0) {
            if (e.nextElementSibling) {
                e = e.nextElementSibling;
            } else {
                for (e = e.nextSibling; e && e.nodeType !== 1; e = e.nextSibling);
            }
            n--;
        } else {
            if (e.previousElementSibling) {
                e = e.previousElementSibling;
            } else {
                for (e = e.previousElementSibling; e && e.nodeType !== 1; e = e.previousElementSibling);
            }
            n++;
        }
    }
    return e;
};

// 判断元素有没有子元素
function _hasChildren(e) {
    var children = e.childNodes,
        len = children.length;
    for (var i = 0; i < len; i++) {
        if (children[i].nodeType === 1) {
            return true;
        }
    }
    return false;
};

// 获得滚动条的滚动距离
function _getScrollOffset() {
    if (window.pageXOffset) {
        return {
            x: window.pageXOffset,
            y: window.pageYOffset
        }
    } else {
        return {
            x: document.body.scrollLeft + document.documentElement.scrollLeft,
            y: document.body.scrollTop + document.documentElement.scrollTop
        }
    }
};

// 获得视口的尺寸
function _getViewportOffset() {
    if (window.innerWidth) {
        return {
            w: window.innerWidth,
            h: window.innerHeight
        }
    } else {
        // ie8及其以下
        if (document.compatMode === "BackCompat") {
            // 怪异模式
            return {
                w: document.body.clientWidth,
                h: document.body.clientHeight
            }
        } else {
            // 标准模式
            return {
                w: document.documentElement.clientWidth,
                h: document.documentElement.clientHeight
            }
        }
    }
};

// 取消冒泡
function _stopBubble(e) {
    if (e && e.stopPropagation) {
        e.stopPropagation();
    } else {
        window.event.cancelBubble = true;
    }
};

// 获取url中的参数
function _getUrlParam() {
    var sHref = window.location.href;
    var args = sHref.split('?');
    if (args[0] === sHref) {
        return '';
    }
    var hrefarr = args[1].split('#')[0].split('&');
    var obj = {};
    for (var i = 0; i < hrefarr.length; i++) {
        hrefarr[i] = hrefarr[i].split('=');
        obj[hrefarr[i][0]] = hrefarr[i][1];
    }
    return obj;
};

// 异步加载script
function _loadScript(url, callback) {
    var oscript = document.createElement('script');
    if (oscript.readyState) { // ie8及以下版本
        oscript.onreadystatechange = function () {
            if (oscript.readyState === 'complete' || oscript.readyState === 'loaded') {
                callback();
            }
        }
    } else {
        oscript.onload = function () {
            callback()
        };
    }
    oscript.src = url;
    document.body.appendChild(oscript);
};

// 防抖
function _debounce(handle, delay) {
    var timer = null;
    return function () {
        var _self = this,
            _args = arguments;
        clearTimeout(timer);
        timer = setTimeout(function () {
            handle.apply(_self, _args)
        }, delay)
    }
};

// 节流
function _throttle(handler, wait) {
    var lastTime = 0;
    return function (e) {
        var nowTime = new Date().getTime();
        if (nowTime - lastTime > wait) {
            handler.apply(this, arguments);
            lastTime = nowTime;
        }
    }
};

// 格式化时间
function _formatDate(t, str) {
    var obj = {
        yyyy: t.getFullYear(),
        yy: ("" + t.getFullYear()).slice(-2),
        M: t.getMonth() + 1,
        MM: ("0" + (t.getMonth() + 1)).slice(-2),
        d: t.getDate(),
        dd: ("0" + t.getDate()).slice(-2),
        H: t.getHours(),
        HH: ("0" + t.getHours()).slice(-2),
        h: t.getHours() % 12,
        hh: ("0" + t.getHours() % 12).slice(-2),
        m: t.getMinutes(),
        mm: ("0" + t.getMinutes()).slice(-2),
        s: t.getSeconds(),
        ss: ("0" + t.getSeconds()).slice(-2),
        w: ['日', '一', '二', '三', '四', '五', '六'][t.getDay()]
    };
    return str.replace(/([a-z]+)/ig, function ($1) {
        return obj[$1]
    });
};

// 函数柯里化
// 是把接受多个参数的函数变换成接受一个单一参数(最初函数的第一个参数)的函数，并且返回接受余下的参数且返回结果的新函数的技术
function _curryFun(fn) {
    var length = fn.length,
        args = [];
    var result = function (arg) {
        args.push(arg);
        length--;
        if (length <= 0) {
            return fn.apply(this, args);
        } else {
            return result;
        }
    }
    return result;
};

// fetch请求的封装
function _fetch(url, setting) { // fetch请求的封装
    let opts = { // 设置参数的初始值
        method: (setting.method || 'GET').toUpperCase(), // 请求方式
        headers: setting.headers || {}, // 请求头设置
        credentials: setting.credentials || true, // 设置cookie是否一起发送
        body: setting.body || {},
        mode: setting.mode || 'no-cors', // 可以设置 cors, no-cors, same-origin
        redirect: setting.redirect || 'follow', // follow, error, manual
        cache: setting.cache || 'default' // 设置 cache 模式 (default, reload, no-cache)
    }
    let dataType = setting.dataType || 'json' // 解析方式
    let data = setting.data || '' // 参数
    let paramsFormat = function (obj) { // 参数格式
        var str = ''
        for (var i in obj) {
            str += `${i}=${obj[i]}&`
        }
        return str.split('').slice(0, -1).join('')
    }

    if (opts.method === 'GET') {
        url = url + (data ? `?${paramsFormat(data)}` : '')
    } else {
        setting.body = data || {}
    }
    return new Promise((resolve, reject) => {
        fetch(url, opts).then(async res => {
            let data = dataType === 'text' ? await res.text() : dataType === 'blob' ? await res.blob() : await res.json()
            resolve(data)
        }).catch(e => {
            reject(e)
        })
    })
};

// 文本复制功能
function _copyTxt(text, fn) { // 复制功能
    if (typeof document.execCommand !== 'function') {
        console.log('复制失败，请长按复制')
        return
    }
    var dom = document.createElement('textarea')
    dom.value = text
    dom.setAttribute('style', 'display: block;width: 1px;height: 1px;')
    document.body.appendChild(dom)
    dom.select()
    var result = document.execCommand('copy')
    document.body.removeChild(dom)
    if (result) {
        console.log('复制成功')
        typeof fn === 'function' && fn()
        return
    }
    if (typeof document.createRange !== 'function') {
        console.log('复制失败，请长按复制')
        return
    }
    var range = document.createRange()
    var div = document.createElement('div')
    div.innerhtml = text
    div.setAttribute('style', 'height: 1px;fontSize: 1px;overflow: hidden;')
    document.body.appendChild(div)
    range.selectNode(div)
    var selection = window.getSelection()
    console.log(selection)
    if (selection.rangeCount > 0) {
        selection.removeAllRanges()
    }
    selection.addRange(range)
    document.execCommand('copy')
    typeof fn === 'function' && fn()
    console.log('复制成功')
};

// 常用正则验证
function _checkStr(str, type) { // 常用正则验证，注意type大小写
    switch (type) {
        case 'phone': // 手机号码
            return /^1[3|4|5|6|7|8|9][0-9]{9}$/.test(str)
        case 'tel': // 座机
            return /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(str)
        case 'card': // 身份证
            return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(str)
        case 'pwd': // 密码以字母开头，长度在6~18之间，只能包含字母、数字和下划线
            return /^[a-zA-Z]\w{5,17}$/.test(str)
        case 'postal': // 邮政编码
            return /[1-9]\d{5}(?!\d)/.test(str)
        case 'QQ': // QQ号
            return /^[1-9][0-9]{4,9}$/.test(str)
        case 'email': // 邮箱
            return /^[\w-]+(.[\w-]+)*@[\w-]+(.[\w-]+)+$/.test(str)
        case 'money': // 金额(小数点2位)
            return /^\d*(?:.\d{0,2})?$/.test(str)
        // case 'URL': // 网址
        //     return /(http|ftp|https):/ / [\w - _] + (.[\w - _]+) +([\w -.,@?^=%&: /~+#]*[\w-@?^=%&/~+#])?/.test(str)
        case 'IP': // IP
            return /((?:(?:25[0-5]|2[0-4]\d|[01]?\d?\d)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d?\d))/.test(str)
        case 'date': // 日期时间
            return /^(\d{4})-(\d{2})-(\d{2}) (\d{2})(?::\d{2}|:(\d{2}):(\d{2}))$/.test(str) ||
                /^(\d{4})-(\d{2})-(\d{2})$/.test(str)
        case 'number': // 数字
            return /^[0-9]$/.test(str)
        case 'english': // 英文
            return /^[a-zA-Z]+$/.test(str)
        case 'chinese': // 中文
            return /^[\u4E00-\u9FA5]+$/.test(str)
        case 'lower': // 小写
            return /^[a-z]+$/.test(str)
        case 'upper': // 大写
            return /^[A-Z]+$/.test(str)
        case 'HTML': // HTML标记
            return /<("[^"]*"|'[^']*'|[^'">])*>/.test(str)
        default:
            return true
    }
};

// 去除空格， type:  1-所有空格  2-前后空格  3-前空格 4-后空格
function _trim(str, type) {
    type = type || 1
    switch (type) {
        case 1:
            return str.replace(/\s+/g, '')
        case 2:
            return str.replace(/(^\s*)|(\s*$)/g, '')
        case 3:
            return str.replace(/(^\s*)/g, '')
        case 4:
            return str.replace(/(\s*$)/g, '')
        default:
            return str
    }
};

// 将阿拉伯数字翻译成中文的大写数字
function _numberToChinese(num) {
    let AA = new Array('零', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十')
    let BB = new Array('', '十', '百', '仟', '萬', '億', '点', '')
    let a = ('' + num).replace(/(^0*)/g, '').split('.')
    let k = 0
    let re = ''
    for (let i = a[0].length - 1; i >= 0; i--) {
        switch (k) {
            case 0:
                re = BB[7] + re
                break
            case 4:
                if (!new RegExp('0{4}//d{' + (a[0].length - i - 1) + '}$').test(a[0])) {
                    re = BB[4] + re
                }
                break
            case 8:
                re = BB[5] + re
                BB[7] = BB[5]
                k = 0
                break
        }
        if (k % 4 === 2 && a[0].charAt(i + 2) !== 0 && a[0].charAt(i + 1) === 0) {
            re = AA[0] + re
        }
        if (a[0].charAt(i) !== 0) {
            re = AA[a[0].charAt(i)] + BB[k % 4] + re
        }
        k++
    }
    if (a.length > 1) { // 加上小数部分(如果有小数部分)
        re += BB[6]
        for (let i = 0; i < a[1].length; i++) {
            re += AA[a[1].charAt(i)]
        }
    }
    if (re === '一十') {
        re = '十'
    }
    if (re.match(/^一/) && re.length === 3) {
        re = re.replace('一', '')
    }
    return re
};
export const _UK_COMMON = {
    _dataType,
    _arrUnique1,
    _arrUnique2,
    _arrUnique3,
    _characterUnique,
    _deepClone1,
    _deepClone2,
    _firstAppear,
    _eleParents,
    _retSibling,
    _hasChildren,
    _getScrollOffset,
    _getViewportOffset,
    _stopBubble,
    _getUrlParam,
    _loadScript,
    _debounce,
    _throttle,
    _formatDate,
    _curryFun,
    _fetch,
    _copyTxt,
    _checkStr,
    _trim,
    _numberToChinese
};