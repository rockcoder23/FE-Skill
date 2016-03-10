#### 原理 
Xss(cross-site scripting)攻击指的是攻击者往Web页面里插入恶意 html标签或者javascript代码。比如：攻击者在论坛中放一个看似安全的链接，骗取用户点击后，
窃取cookie中的用户私密信息；或者攻击者在论坛中加一个恶意表单。当用户提交表单的时候，却把信息传送到攻击者的服务器中，而不是用户原本以为的信任站点。

#### eBook
	


#### 防范
对用户输入的地方和url使用到的参数进行长度和html标签进行过滤或者编码。
```js
/**
 * HTML转义
 * @param str
 * @returns {string}
 */
exports.html_encode = function(str) {
    str = String(str) || "";
    return str.toString()
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/\"/g, '&quot;')
        .replace(/'/g, '&#039;');
};

/**
 * URL转义
 * @param str
 * @returns {string}
 */
exports.url_encode = function(str) {
    return encodeURIComponent(str);
};

```


