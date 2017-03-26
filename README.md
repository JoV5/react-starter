基于[create-react-app](https://github.com/facebookincubator/create-react-app)创建的项目eject后，在不影响原有功能的前提下，进行了一些定制的react项目模板。

### 主要差异

1. 使用webpack2  

2. 加入react-hot-loader3  
支持react组件的热更新

3. 多入口  
兼容原项目结构，主要目的在于避免反复安装依赖，可以当做一个项目目录，而不是单应用
要使用多入口，需要在src和public目录下建相同的文件名项目，在启动时加入'-- app=appname'参数，示例如下：
  * npm start -- app=appname
  * npm run build -- app=appname
  * serve -s build/appname

4. code-splitting（懒加载）  
使用[lazy-load-react](https://github.com/JoV5/lazy-load-react)支持react组件的懒加载

5. 第三方库按需分离  
需要在项目src下加入配置文件appconfig.js，参考[示例配置](https://github.com/JoV5/react-starter/blob/master/src/react-router/appconfig.js)

6. 支持alias配置  
参考[示例配置](https://github.com/JoV5/react-starter/blob/master/src/react-router/appconfig.js)

详细差异与使用，请参考文章[用create-react-app定制自己的react项目模板](https://github.com/JoV5/blog/blob/master/%E5%89%8D%E7%AB%AF/React/%E7%94%A8create-react-app%E5%AE%9A%E5%88%B6%E8%87%AA%E5%B7%B1%E7%9A%84react%E9%A1%B9%E7%9B%AE%E6%A8%A1%E6%9D%BF.md)


### 一些问题

1. 使用import()代码分离不支持chunk的重命名

2. React Hot Loader 3 的使用及遗留问题

### 参考文章：

[用create-react-app定制自己的react项目模板](https://github.com/JoV5/blog/blob/master/%E5%89%8D%E7%AB%AF/React/%E7%94%A8create-react-app%E5%AE%9A%E5%88%B6%E8%87%AA%E5%B7%B1%E7%9A%84react%E9%A1%B9%E7%9B%AE%E6%A8%A1%E6%9D%BF.md)

[react hot loader Migration to 3.0](https://github.com/gaearon/react-hot-loader/tree/next/docs)

[react hot loader Known Limitations](https://github.com/gaearon/react-hot-loader/blob/next/docs/Known%20Limitations.md)

[React Hot Loader 3 beta 升级指南](https://sebastianblade.com/react-hot-loader-3-beta-upgrade-guide)

[webpack2 code-splitting-libraries](https://webpack.js.org/guides/code-splitting-libraries/)

[webpack2 Resolve](https://webpack.js.org/configuration/resolve) 

[webpack2 Migrating from v1 to v2](https://webpack.js.org/guides/migrating/)