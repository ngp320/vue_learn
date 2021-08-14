```
src/main.js 的挂载点 #app 指的就是 /index.html 里的<div id="app"></div>
其他笔记在代码里...
主要笔记:
src/main.js
src/App.uve
src/router/index.js

```
![duo](./pic/6-5%20多页应用%2020210814.png)

![dan](./pic/6-5%20单页应用%2020210814.png)
单页应用, 例如 /src/home/Home.vue等 不请求后端html文件, 页面跟着变
js感知url变化, js动态把当前内容 清楚, 再显示新的组件.
单页应用, 首屏展示出来, 需要你请求一次html, 同时还需要你去发一个js请求, 两个请求都回来了, 首屏才会展示出来, 所以相对多页应用, 首屏时间稍慢一点
搜索引擎只认识html中的内容, 不认识js中的内容. 所以SEO较差

