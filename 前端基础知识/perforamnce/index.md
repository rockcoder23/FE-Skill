#### 优化的技巧

##### 书写时
1. 从编写上尽量使用 CSS 通配符选择器等, 尽量减少不必要的DOM操作， 尽量避免全局变量。书写CSS3动画的时候可以，适当采用硬件加速。

2. icon图片可以使用iconfont代替或者使用雪碧图。

3. 把重要的静态文件放头部，不重要的放到尾部或者加上defer, async。

##### 上线前
1. 代码进行压缩和加md5戳，对静态代码文件进行combo，增加Expires，Cache-Control，和ETag等http头部。

3. 使用CDN, 或者开启Gzip压缩。


##### 上线后
1. 可以通过采取监测系统对页面进行性能分析，再采取进一步优化措施。比如pigpipe等来提高首屏速度。