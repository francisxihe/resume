import{_ as o,c as e,m as t,a,t as n,U as i,o as s}from"./chunks/framework.qvcCyPxx.js";const d="/resume/assets/微前端架构.QkIqiprK.jpg",k=JSON.parse('{"title":"微前端和monorepo","description":"","frontmatter":{"title":"微前端和monorepo"},"headers":[],"relativePath":"interview/architecture/micro-frontends&monorepo.md","filePath":"interview/architecture/micro-frontends&monorepo.md"}'),l={name:"interview/architecture/micro-frontends&monorepo.md"},p={id:"frontmatter-title",tabindex:"-1"},h=t("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),u=i('<h2 id="_1-项目背景" tabindex="-1">1.项目背景 <a class="header-anchor" href="#_1-项目背景" aria-label="Permalink to &quot;1.项目背景&quot;">​</a></h2><p>微前端我个人认为非常适合后台管理系统开发，尤其是在项目中往往拥有多个业务系统，每个系统都有自己的开发团队和技术栈，而这些系统之间需要进行数据共享和交互，微前端技术可以让这些系统更加灵活地集成在一起。 另外，在电商、金融等领域也可以应用微前端技术，例如电商平台通常会包含多个子系统，如商品管理、订单管理、支付管理等，这些子系统可以通过微前端技术进行集成，提高系统的整体性能和用户体验。</p><h2 id="_2-项目问题" tabindex="-1">2.项目问题 <a class="header-anchor" href="#_2-项目问题" aria-label="Permalink to &quot;2.项目问题&quot;">​</a></h2><ol><li>框架版本不一致（主要集中在 Vue2.6 和 Vue2.7 和是否使用 TS）；</li><li>客户需求不明确，需要频繁的页面维度搬运代码（尤其是不同版本项目之间的迁移）；</li><li>项目数量较多且进入功能常规迭代和维护阶段，每个仓库都有自己的版本控制和依赖管理，代码管理复杂，难以维护。</li></ol><p>针对问题 1，适合上微前端，针对问题 2 和问题 3，更适合用 monorepo 的方式管理代码。所以最终使用微前端加 monorepo 的方案。</p><h2 id="_3-monorepo-技术选型" tabindex="-1">3.Monorepo 技术选型 <a class="header-anchor" href="#_3-monorepo-技术选型" aria-label="Permalink to &quot;3.Monorepo 技术选型&quot;">​</a></h2><h3 id="构建型-vs-轻量型" tabindex="-1">构建型 VS 轻量型 <a class="header-anchor" href="#构建型-vs-轻量型" aria-label="Permalink to &quot;构建型 VS 轻量型&quot;">​</a></h3><table><thead><tr><th></th><th>轻量型框架</th><th>构建型框架</th></tr></thead><tbody><tr><td>特点</td><td>渐进式方案，主要为了解决依赖管理、版本管理等基本问题。</td><td>在满足解决基本问题的功能基础上，着重解决大型仓库复杂增加导致的工作流（lint、构建、单元测试、集成测试）变慢导致的构建效率低的问题。</td></tr><tr><td>优点</td><td><strong>易于上手和使用</strong>：这些工具配置简单，新用户可以快速上手。<br> <strong>优化的依赖管理</strong>：轻量型工具提供了有效的依赖管理和链接策略，简化了在单一代码库中管理多个包的复杂性。<br> <strong>社区支持</strong>：由于使用门槛较低，这类工具拥有活跃的社区和丰富的资源，方便获取帮助和插件。</td><td><strong>高性能和可扩展性</strong>：这些工具设计之初就考虑到了构建性能，能够有效地管理和构建大型代码库，支持大规模团队协作。 <br> <strong>智能缓存和增量构建</strong>：通过智能缓存和增量构建机制，这类工具可以显著减少构建和测试时间，提高开发效率</td></tr><tr><td>缺点</td><td><strong>功能有限</strong>：虽然足够应对常见的项目管理需求，但在高级功能（如增量构建、跨语言构建等）方面可能不如构建型工具全面。<br> <strong>性能和可扩展性限制</strong>：对于非常大的代码库或者高度复杂的项目，轻量型工具可能无法提供足够的性能和可扩展性。</td><td><strong>学习成本</strong>：这类工具的配置和使用相对复杂，需要时间和精力去学习。 <br><strong>配置和维护成本</strong>：高度可定制化意味着更复杂的配置，这可能导致项目的维护成本增加。</td></tr></tbody></table><p>考虑到：</p><ol><li>monorepo 架构不是一个新的概念，尤其是构建型框架的代表之一的 nx 已经推出来五年，并且社区反响也是相当不错的；</li><li>构建型框架完全满足现有的项目需求，并且随着业务进入功能常规迭代阶段，短期不会出现构建型框架无法解决的痛点；</li><li>构建型框架的配置更多的是项目层面的，比如 npm 包的管理，项目的运行方式等，不会影响到业务代码，所以即使出现框架的调整，对业务的影响几乎为零；</li><li>在技术尝试的时候，只是用 pnpm 搭建的最基本的功能的轻量型框架就花费了比较多的时间，社区中各种方案要么本身就不完善要么文档缺失。比起拼凑出一个功能稳定性都有待商榷的轻量型框架，学习和熟悉构建型框架的的成本可能更低一些；</li><li>构建型可以搭配轻量型，例如 Turborepo + Lerna，他们可以各司其职。</li></ol><p>综上轻量型&quot;不轻&quot;，构建型&quot;不重&quot;，所以最终还是考虑使用构建型框架</p><h3 id="turborepo-vs-nx" tabindex="-1">Turborepo VS Nx <a class="header-anchor" href="#turborepo-vs-nx" aria-label="Permalink to &quot;Turborepo VS Nx&quot;">​</a></h3><table><thead><tr><th></th><th>Turborepo</th><th>Nx</th></tr></thead><tbody><tr><td>设计哲学</td><td>TurboRepo 是一个高性能的构建系统，专注于提高 JavaScript 和 TypeScript 项目的构建和测试速度。 <br> 侧重于提高构建和 CI/CD 流程的效率，提供高效的缓存机制和增量构建策略，可以显著减少重复构建的时间</td><td>Nx 是一个基于项目的全栈开发工具，支持多种技术栈和框架，如 Angular、React、Node.js 等。<br> 旨在提高团队之间的协作效率，同时减少重复工作和依赖管理的复杂度。<br> Nx 提供了一套丰富的工具和扩展，支持代码生成、依赖图分析、增量构建等功能。</td></tr><tr><td>核心功能</td><td><strong>高性能构建和测试</strong>：通过智能缓存和并行执行任务，TurboRepo 大幅减少了构建和测试所需的时间。<br><strong>可扩展的任务运行器</strong>：TurboRepo 的任务运行器支持自定义任务和工作流，易于与现有的 CI/CD 流程集成。<br><strong>简洁的配置</strong>：TurboRepo 提供了更为简洁和直观的配置选项，便于快速上手和维护。</td><td><strong>代码生成和工作流自动化</strong>：Nx 提供了强大的 Schematics，可以自动生成应用、库、组件和其他代码结构，减少手动编码工作。<br> <strong>依赖图分析</strong>：通过分析和可视化项目依赖关系，Nx 帮助开发者理解和管理代码之间的依赖，优化构建和测试流程。<br><strong>增量构建和测试</strong>：利用 Nx 的 Affected 工具，可以只构建和测试受到改动影响的项目，而不是整个仓库，提高开发效率。</td></tr></tbody></table><h4 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h4><p>说说个人实际二者对比使用下来，发现：</p><p><strong>Turborepo：</strong></p><ol><li>几乎完全沿用常规项目配置，额外的配置非常少；</li><li>各个项目相对独立，虽然提供了 Learn 的 workspace 的方式和直接引用两种方式引用 monorepo 内的项目，但是 workspace 的方式支持度比较好，直接引用打包、TS 的支持度都不高，说明目前更适合子项目相对独立的情况使用；</li><li>底层用 Rust 写的，速度非常快，项目规模还不够完全体现它的优势，但是快肯定更好一些。</li></ol><p><strong>Nx：</strong></p><ol><li>需要重写一套运行和包管理的配置；</li><li>官方推荐所有的 npm 依赖都写在根目录直接管理，子项目可以直接无痛引用 monorepo 内的其他子项目，这也就意味着给开发者开了个口子，毕竟可以直接引用，谁还愿意用 workspace 的方式（因为所有包都在根目录管理，nx 用这种方式反而显得比较另类），比较适合各个子项目有统一技术栈的情况；</li><li>可以生成可视化项目依赖关系，方便开发者分析和管理代码之间的依赖，优化构建和测试流程；</li><li>底层用 TS 写的，便于阅读源码，了解其原理。</li></ol><p>Nx 能生成可视化项目依赖关系和无痛直接引用 monorepo 内的项目真的很香，但是依旧选择了 Turborepo。因为项目中存在多个版本的 Vue，Nx 的各个项目耦合度过高，实际使用中比较担心成员出现不同版本组件混用出现不可预知的错误，另外 Turborepo 几乎零配置可以快速完成项目改造。</p><h2 id="_4-微前端技术选型" tabindex="-1">4.微前端技术选型 <a class="header-anchor" href="#_4-微前端技术选型" aria-label="Permalink to &quot;4.微前端技术选型&quot;">​</a></h2><p>市面上比较流行的几种方案，Qiankun、Micro App、EMP、Wujie，其中 EMP 和 webpack 强耦合，Micro App 正式版还没发布，这两个暂不考虑。</p><h3 id="qiankun-vs-wujie" tabindex="-1">Qiankun VS Wujie <a class="header-anchor" href="#qiankun-vs-wujie" aria-label="Permalink to &quot;Qiankun VS Wujie&quot;">​</a></h3><table><thead><tr><th></th><th>Qiankun</th><th>Wujie</th></tr></thead><tbody><tr><td>应用加载机制</td><td>首先基于 single-spa 注册子应用，然后通过 import-html-entry 获取子应用的相关资源并对这些资源进行加工，随后构造和执行一些生命周期中需要执行的方法，并返回一个函数，该函数的返回值是一个包括了子应用生命周期方法的对象</td><td>无需注册，直接将子应用注入主应用同域的 iframe 中运行</td></tr><tr><td>沙箱隔离机制</td><td>js 隔离机制： SnapshotSandbox、LegacySandbox、ProxySandbox<br>css 隔离机制：strictStyleIsolation、experimentalStyleIsolation</td><td>js 通过 iframe 来隔离，css 通过 webcomponent + shadowdom 来隔离</td></tr><tr><td>路由保持机制</td><td>通过 props 实现全局路由数据的存储及共享</td><td>浏览器的前进后退可以不作任何处理直接作用于子应用，通过监听 iframe 的路由变化可以将子应用的 url 同步到主应用</td></tr><tr><td>应用通信机制</td><td>通过发布订阅模式来实现通信，状态和回调处理函数全局统一维护，全局状态发生变化时触发各个应用注册的回调函数执行，将新旧状态传递到所有应用</td><td>提供多种通信方式：window.parent 直接通信、props 数据注入、去中心化 EventBus 通信机制</td></tr><tr><td>优点</td><td>能监听路由自动加载和卸载当前路由对应的子应用；<br> 具有完备沙箱方案来隔离 js 和 css；<br> 支持静态资源预加载；<br>应用间通信简单；</td><td>具备 qiankun 的所有优点外还具有：<br>主应用使用成本及子应用适配成本低；<br>css 沙箱和 js 沙箱都采用了原生隔离，无需担心污染问题；<br>支持路由保活和共享依赖；<br>具有强大插件系统，方便在运行时修改子应用代码；</td></tr><tr><td>缺点</td><td>基于路由匹配，无法同时激活多个子应用，也不支持子应用保活；<br>改造成本较大，从 webpack、代码、路由等都要做一系列的适配；<br>css 沙箱无法绝对的隔离，js 沙箱在某些场景下执行性能下降严重；<br> vite 等 ES Module 脚本运行支持有限</td><td>Edge79(2020-01-15) 才支持 ShadowRoot，兼容性不够够<br>2022 年才推出的 1.0 正式版本，到选型时满打满算一年，对于一个开源项目来说，时间还是短了点</td></tr></tbody></table><p>从技术人的角度更希望用更完善的&quot;新技术&quot;, iframe 虽然是老古董了，但是老树开新花，Wujie 还是给我眼前一亮。但是因为 ToG 项目用户的设备一般更新不会太快，Wujie 的兼容性确实是无法跨越的问题。所以最终还是选择更成熟的 Qiankun。</p><h2 id="项目设计" tabindex="-1">项目设计 <a class="header-anchor" href="#项目设计" aria-label="Permalink to &quot;项目设计&quot;">​</a></h2><p><img src="'+d+'" alt=""></p><p><strong>app</strong> 存放最终的运行的项目，包括微前端的基座项目和子项目。</p><p><strong>modules</strong> 层存放功能块，将一些可复用或者被频繁迁移的模块或者页面写在 modules 中，同时 modules 拥有独立的运行环境，通过 workspace 的方式被 app 层引用。这样一些小功能也能避免版本不一致导致无法迁移。</p><p><strong>packages</strong> 存放工具包，通过 workspace 的方式被 app 和 modules 层引用。</p><ul><li><p><strong>api</strong> 不同项目对应后端应用，功能迁移后后端也只是在不同应用部署相同的功能，接口相对地址不变，接口调用用依赖注入的方式抽离出来。这样所有的接口调用方法都集中存放，后端迁移前端不需要做任何改动；</p></li><li><p>单仓库项目中的其他通用模块，不一一举例...</p></li></ul><p>参考：</p><ul><li>ChatGPT</li><li><a href="https://nx.dev/" target="_blank" rel="noreferrer">Nx</a></li><li><a href="https://turbo.build/repo" target="_blank" rel="noreferrer">Turborepo</a></li></ul>',33);function b(r,c,m,g,_,f){return s(),e("div",null,[t("h1",p,[a(n(r.$frontmatter.title)+" ",1),h]),u])}const q=o(l,[["render",b]]);export{k as __pageData,q as default};
