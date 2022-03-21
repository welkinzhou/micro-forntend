## micro frontend demo

## 微前端

### Why micro frontend

康威定律

> Any organization that designs a system (defined broadly) will produce a design whose structure is a copy of the organization's communication structure.

> 对于（广义）系统的设计组织，其设计产物的结构就是该组织内沟通结构的副本。

简单说，组织沟通方式决定系统设计。主要的设计理念，都离不开这个设定。

放到具体场景中来思考，比如说有一个产品，涉及到 300+ 个页面，很显然不能由一个小团队开发（开发周期过长），那就涉及到模块的拆分，不同团队之间的配合。不同的团队，习惯的技术栈和编码习惯都会不同，同时开发一个应用，沟通成本可想而知（比如说，git 的冲突都能给你烦死）。

还有一种常见的场景，在一个产品的不断开发和迭代中，可能会产生巨石应用（monolith）。所谓的巨石应用，就是功能非常复杂，模块间耦合度非常高的应用。后续由于技术更新，或者其他问题，打算重构项目时，发现整个项目铁板一块，不敢乱动。同时，巨石应用由于 codebase 非常大，每次打包消耗很大，且一点点修改都要全量打包。

简单总结，微前端希望解决的问题：

1. 实现多个项目独立开发，但在客户端显示为一个应用。
2. 解决技术栈限制，支持技术栈异构。
3. 子项目间解耦，独立部署上线。
4. 实现递增的重构，不需要一次性完成全部。

### 什么是 SPA（单页应用）

我们现在使用 Vue 大多数都是做的 SPA，字面意思理解，就是只有一个页面的应用。正常的一个应用，都不止一个页面，那么怎么理解这里的单页应用？

下面是我们打包出来的目录结构。可以看到，只有一个名为 index 的 html 文件，这个也就是 SPA 的页面。

```
dist
├── css
├── favicon.ico
├── img
├── index.html
└── js
```

### 微前端架构

项目架构

![deploy](./img/deployment.png)

前端实现

![中心化](./img/ssi.png)
