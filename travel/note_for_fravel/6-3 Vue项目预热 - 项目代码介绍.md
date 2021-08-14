<h3>6-3 Vue项目预热 - 项目代码介绍</h3>
```
package.json    第三方模块依赖
package-lock.json   依赖版本
index.html      首页模版文件
.gitignore      git上传忽略文件
eslintrc        代码检查
eslintignore    代码检查忽略文件
editorconfig    统一编辑器自动化代码格式化
babelrc         babelrc语法解析器, 把vue转换成浏览器能够理解的内容

/static         静态资源内容
/node_modules   项目依赖的第三方node包
/src            整个项目源代码
    main.js  入口文件
    App.vue  项目最原始的根组件
    /router/index.js    路由
    /component          小组件
    /assert             图片类资源
config          配置文件
    index.js 基础的配置信息
    dev.env.js 开发环境配置信息
    prod.env.js 线上环境配置信息
build           项目打包的webpack的一些配置内容
    webpack.base.conf.js 基础webpack配置

之后的开发过程中, 这些配置代码, 不需要做太多的改动, 我们需要做的是 在 src下做源代码的开发

```

