/**
 * @param {*} UA 即userAgent
 * @returns type: 设备类型
 *          masklayer: 就是给外部拿到判断是否显示遮罩层的,一些特殊环境要引导用户到外部去打开访问
 *          参考：https://www.jb51.net/article/146226.htm
 */

function isPhone(UA) {
    return /(Android|webOS|iPhone|iPod|tablet|BlackBerry|Mobile)/i.test(UA)
        ? true
        : false;
}

export function deviceType(UA) {
    if (isPhone(UA)) {
        return {
            type: "phone",
            masklayer: true
        };
    } else {
        return {
            type: "pc",
            masklayer: false
        };
    }
}