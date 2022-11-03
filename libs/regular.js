// 正则
export const _UK_REGULAR = {
    // 号码相关
    _Number: {
        // 手机号（以 1 开头）
        _cellPhoneNumber1: /^(?:(?:\+|00)86)?1\d{10}$/,
        // 手机号（以 13 至19 开头）
        _cellPhoneNumber2: /^(?:(?:\+|00)86)?1[3-9]\d{9}$/,
        // 手机号（以工信部公布的手机号段开头）
        _cellPhoneNumber3: /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[189]))\d{8}$/,
        // 国内固话号码
        _fixPhoneNumber: /\d{3}-\d{8}|\d{4}-\d{7}/,
        // 邮箱号
        _emailNumber: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
        // 邮政编码
        _postalCode: /[1-9]\d{5}(?!\d)/,
        // 身份证号
        _idNumber: /^[1-9]\d{5}(?:18|19|20)\d{2}(?:0[1-9]|10|11|12)(?:0[1-9]|[1-2]\d|30|31)\d{3}[\dXx]$/,
        // 银行卡号（公、私账户）
        _bankCardNumber: /^[1-9]\d{9,29}$/,
        // 车牌号
        _plateNumber: /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-HJ-NP-Z][A-HJ-NP-Z0-9]{4,5}[A-HJ-NP-Z0-9挂学警港澳]$/,
        // QQ 号
        _qqNumber: /^[1-9][0-9]{4,10}$/,
        // 微信号
        _wechatNumber: /^[a-zA-Z][-_a-zA-Z0-9]{5,19}$/,
        // 复杂密码1（必须包含大小写字母和数字的组合，不能使用特殊字符，长度在8-16之间）
        _complexCipher1: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/,
        // 复杂密码2（必须包含字母、数字、特殊字符：**@#$%^& `~()-+=* ）
        _complexCipher2: /^(?![a-zA-Z]+$)(?![A-Z0-9]+$)(?![A-Z\W_!@#$%^&* ~()-+=]+$)(?![a-z0-9]+$)(?![a-z\\W_!@#$%^& *~()-+=]+$)(?![0-9\W_!@#$%^&* ~()-+=]+$)[a-zA-Z0-9\\W_!@#$%^&*~()-+=]/,
        // 网址
        _url: /^(((ht|f)tps?):\/\/)?(^!@#$%^&*?.\s-?\.)+[a-z]{2,6}\/?/,
        // 网址带端口号
        _urlPort: /^((ht|f)tps?:\/\/)?[\w-]+(\.[\w-]+)+:\d{1,5}\/?$/,
    },
    // 数字相关
    _FIGURE: {
        // 纯数字
        _pureNumber: /^[0-9]*$/,
        // 整数
        _integer: /^-?[0-9]\d*$/,
        // 正整数
        _positiveInteger: /^\+?[1-9]\d*$/,
        // 非正整数
        _noPositiveInteger: /^-[1-9]\d*|0$/,
        // 负整数
        _negativeInteger: /^-[1-9]\d*$/,
        // 非负整数
        _noNegativeInteger: /^\d+$/,
        // 浮点数
        _floatingNumber: /^(-?\d+)(\.\d+)?$/,
        // 正浮点数
        _positiveFloatingNumber: /^[1-9]\d*\.\d*|0\.\d*[1-9]\d*$/,
        // 负浮点数
        _negativeFloatingNumber: /^-([1-9]\d*\.\d*|0\.\d*[1-9]\d*)/,
        // 小数
        _decimals: /^-?\d+\.\d+$/,
        // 正数/负数/小数
        _positiveNegativeDecimalsNumber: /^(\-|\+)?\d+(\.\d+)?$/,
        // md5 值
        _md5: /^([a-f\d]{32}|[A-F\d]{32})$/,
        // base64 值
        _base64: /^\s*data:(?:[a-z]+\/[a-z0-9-+.]+(?:;[a-z-]+=[a-z0-9-]+)?)?(?:;base64)?,([a-z0-9!$&',()*+;=\-._~:@/?%\s]*?)\s*$/i,
        // 必须包含数字和字母
        _containsNumbersAndLetters: /^(?=.*[a-zA-Z])(?=.*\d).+$/,

        // 正则参考 (替换关键字m、n，可转为目标正则)
        // n 位数字
        _nNumber: /^\d{n}$/,
        // 至少 n 位数字
        _least_n_Number: /^\d{n,}$/,
        // m 至 n 位的数字
        _m_to_n_Number: /^\d{m,n}$/
    },
    // 字符相关
    _CHARACTER: {
        // 正则参考 (替换关键字m、n，可转为目标正则)
        // m 至 n 位的字符
        _m_to_n_Number: /^.{3,20}$/,
        // 英文字母字符
        _enAlphabeticCharacter: /^[A-Za-z]+$/,
        // 大写英文字母字符
        _upEnAlphabeticCharacter: /^[A-Z]+$/,
        // 小写英文字母字符
        _lowEnAlphabeticCharacter: /^[a-z]+$/,
        // 汉字
        _chineseCharacters: /^[\u4e00-\u9fa5]{0,}$/,
    },
    // 时间相关
    _TIME: {
        // 24小时制时间（HH:mm:ss）
        _local_24HR: /^(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d$/,
        // 12小时制时间（hh:mm:ss） 
        _local_12HR: /^(?:1[0-2]|0?[1-9]):[0-5]\d:[0-5]\d$/,
    },
    // 编程相关
    _PROGRAM: {
        // 16进制颜色
        _hexadecimalColor: /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/,
        // 视频链接地址
        _videoLinkAddress: /^https?:\/\/(.+\/)+.+(\.(swf|avi|flv|mpg|rm|mov|wav|asf|3gp|mkv|rmvb|mp4))$/i,
        // 图片链接地址
        _imgLinkAddress: /^https?:\/\/(.+\/)+.+(\.(gif|png|jpg|jpeg|webp|svg|psd|bmp|tif))$/i,
    },
    // 生活相关
    _LIVES: {
        // 金额（可为负、首位可为0，支持千分位分隔）
        _moneyLoose: /^-?\d+(,\d{3})*(\.\d{1,2})?$/,
        // 金额（大于 0 ，两位小数）
        _money: /(^[1-9]{1}[0-9]*$)|(^[0-9]*\.[0-9]{2}$)/,
        // 金额（严格，不为负、小数点后最多两位，首位不为0）
        _moneyStrict: /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/,
        // 护照
        _passport: /(^[EeKkGgDdSsPpHh]\d{8}$)|(^(([Ee][a-fA-F])|([DdSsPp][Ee])|([Kk][Jj])|([Mm][Aa])|(1[45]))\d{7}$)/,
        // 香港身份证
        _hkID: /^[a-zA-Z]\d{6}\([\dA]\)$/,
        // 澳门身份证
        _macaoID: /^[1|5|7]\d{6}\(\d\)$/,
        // 台湾身份证
        _taiwanID: /^[a-zA-Z][0-9]{9}$/,
        // 股票代码
        _stockCode: /^(s[hz]|S[HZ])(000[\d]{3}|002[\d]{3}|300[\d]{3}|600[\d]{3}|60[\d]{4})$/,

        // 正则参考 (替换关键字a、b、c，可转为目标正则)
        // 不含 abc 的单词
        _noWords: /\b((?!abc)\w)+\b/
    }
};
