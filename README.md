基于[create-react-app](https://github.com/facebookincubator/create-react-app) eject后项目文件

### 主要差异

1. 使用webpack2  

2. 加入react-hot-loader3  
支持react组件的热更新

3. 多入口  
兼容原项目结构，主要目的在于避免反复安装依赖，可以当做一个项目目录，而不是单应用
要使用多入口，需要在src和public目录下建相同的文件名项目，在启动时加入'-- app=[appname]'参数，示例如下：
  * npm start -- app=[appname]
  * npm run build -- app=[appname]
  * serve -s build/[appname]

4. code-splitting（懒加载）  
使用[lazy-load-react](https://github.com/JoV5/lazy-load-react)支持react组件的懒加载

5. 库文件按需打包  
需要在项目src下加入配置文件appconfig.js，参考示例配置


##### Webpack2 的问题

##### 不支持chunk的重命名

##### React Hot Loader 3 的使用及遗留问题

###### 参考文章：

[Migration to 3.0](https://github.com/gaearon/react-hot-loader/tree/next/docs)

[Known Limitations](https://github.com/gaearon/react-hot-loader/blob/next/docs/Known%20Limitations.md)

[React Hot Loader 3 beta 升级指南](https://sebastianblade.com/react-hot-loader-3-beta-upgrade-guide)


###### code splitting
[code-split-component](https://github.com/ctrlplusb/code-split-component)

[react-async-component](https://github.com/ctrlplusb/react-async-component)

[react-code-splitting](https://github.com/didierfranc/react-code-splitting)


