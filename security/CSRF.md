#### 原理
一般是用户登录受信任网站A，并在本地生成Cookie。然后在不登出A的情况下，访问危险网站B或者URL。

Reference: https://github.com/pillarjs/understanding-csrf


#### 防范
1. 判断是否来自可信任的用户请求(比如referer, Token等);

