// 文件

/**
 * @param: fileName - 文件名称
 * @param: 无后缀匹配 - false
 * @param: 匹配 图片 - image
 * @param: 匹配 txt - txt
 * @param: 匹配 excel - excel
 * @param: 匹配 word - word
 * @param: 匹配 pdf - pdf
 * @param: 匹配 ppt - ppt
 * @param: 匹配 视频 - video
 * @param: 匹配 音频 - radio
 * @param: 其他匹配项 - other
 **/
function _fileSuffixTypeUtil(fileName) {
    // 后缀获取
    var suffix = "";
    // 获取类型结果
    var result = "";
    try {
        var flieArr = fileName.split(".");
        suffix = flieArr[flieArr.length - 1];
    } catch (err) {
        suffix = "";
    }
    // fileName无后缀返回 false
    if (!suffix) {
        result = false;
        return result;
    }
    // 图片格式
    var imglist = ["png", "jpg", "jpeg", "bmp", "gif"];
    // 进行图片匹配
    result = imglist.some(function (item) {
        return item == suffix;
    });
    if (result) {
        result = "image";
        return result;
    }
    // 匹配txt
    var txtlist = ["txt"];
    result = txtlist.some(function (item) {
        return item == suffix;
    });
    if (result) {
        result = "txt";
        return result;
    }
    // 匹配 excel
    var excelist = ["xls", "xlsx"];
    result = excelist.some(function (item) {
        return item == suffix;
    });
    if (result) {
        result = "excel";
        return result;
    }
    // 匹配 word
    var wordlist = ["doc", "docx"];
    result = wordlist.some(function (item) {
        return item == suffix;
    });
    if (result) {
        result = "word";
        return result;
    }
    // 匹配 pdf
    var pdflist = ["pdf"];
    result = pdflist.some(function (item) {
        return item == suffix;
    });
    if (result) {
        result = "pdf";
        return result;
    }
    // 匹配 ppt
    var pptlist = ["ppt"];
    result = pptlist.some(function (item) {
        return item == suffix;
    });
    if (result) {
        result = "ppt";
        return result;
    }
    // 匹配 视频
    var videolist = ["mp4", "m2v", "mkv"];
    result = videolist.some(function (item) {
        return item == suffix;
    });
    if (result) {
        result = "video";
        return result;
    }
    // 匹配 音频
    var radiolist = ["mp3", "wav", "wmv"];
    result = radiolist.some(function (item) {
        return item == suffix;
    });
    if (result) {
        result = "radio";
        return result;
    }
    // 其他 文件类型
    result = "other";
    return result;
};

/**
 * @param: fileType - 文件类型
 * @param: fileName - 文件名称
 * @param: data  - 数据流文件
 **/
export function _downloadFile(fileType, bucketName, data) {
    let downType = "";
    let downName = "";
    if (fileType == "image") {
        downType = "image/png";
        downName = fileName + ".png";
    } else if (fileType == "word") {
        downType = "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
        downName = fileName + ".docx";
    } else if (fileType == "video") {
        downType = "video/mpeg4";
        downName = fileName + ".mp4";
    } else if (fileType == "radio") {
        downType = "audio/mpeg";
        downName = fileName + ".mp3";
    } else if (fileType == "pdf") {
        downType = "application/pdf";
        downName = fileName + ".pdf";
    }
    let blob = new Blob([data], { type: downType });
    let downloadElement = document.createElement("a");
    let href = window.URL.createObjectURL(blob);
    downloadElement.href = href;
    document.body.appendChild(downloadElement);
    //downloadElement.setAttribute("download", downName);//设置下载名称
    downloadElement.download = downName; //设置下载文件名称
    downloadElement.click();
    document.body.removeChild(downloadElement); //移除元素；防止连续点击创建多个a标签
    window.URL.revokeObjectURL(href);
};

export const _UK_FILE = {
    _fileSuffixTypeUtil,
    _downloadFile
};