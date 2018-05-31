# supply-chain-finance

> A Vue.js project based on vue + vue-router + webpack + vuex + axios

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
## 目录结构

```
项目根目录
├── build/                      # webpack配置文件
│   ├── build.js                # 打包执行文件
│   ├── check-versions.js       # npm node 版本检测
│   ├── utils.js                # loader 处理文件
│   ├── vue-loader.conf.js      # vue-loader 的配置文件
│   ├── webpack.base.conf.js    # webpack 基础配置文件
│   ├── webpack.dev.conf.js     # webpack 开发环境配置
│   ├── webpack.prod.conf.js    # webpack 生产环境配置
├── config
│   ├── dev.env.js              # 项目开发环境配置
│   ├── index.js                # 项目配置文件
│   ├── prod.env.js             # 项目生产环境配置
├── node_modules                # 项目依赖包
├── src/
│   ├── assets                  # 模块依赖资源文件
│   ├── API                     # 接口封装
│   │   ├── index.js            # 封装 axios 方法
│   ├── components              # UI 组件
│   ├── directives              # vue 自定义指令
│   ├── router                  # 路由
│   ├── pages                   # 视图页面
│   │   ├── admin               # 后台管理
│   │   └── index               # 前台页面
│   ├── vuex                    # vuex 状态管理
│   ├── App.vue                 # 主要APP的组件
│   └── main.js                 # app 入口文件
├── static                      # 静态资源文件
├── test
│   └── unit                    # unit 单元测试
│   │   ├── specs               # test spec files
│   │   ├── index.js            # test build entry file
│   │   └── karma.conf.js       # test runner config file
│   └── e2e/                    # e2e 端到端测试
│   │   ├── specs               # test spec files
│   │   ├── custom-assertions/  # custom assertions for e2e tests
│   │   ├── runner.js           # test runner script
│   │   └── nightwatch.conf.js  # test runner config file
├── .babelrc                    # babel 用于编译执行Es6 配置文件
├── .postcssrc.js               # postcss 用于编译CSS相关（less、scss、sass） 配置文件
├── .eslintrc.js                # eslint 代码检查 配置文件
├── .editorconfig               # 编辑器配置文件
├── index.html                  # 首页模板
└── package.json                # 项目依赖


```
## 相关版本
 + vue     2.9.3
 + webpack 3.9.1
 + node    v9.8.0
 + npm     5.6.0
 + axios   0.18.0
 + vue-router 3.0.1
 + vuex    3.0.1