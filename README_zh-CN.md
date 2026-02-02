## TanStack Start Mix Render Template

基于 **TanStack Start** 与 **TanStack Router** 的混合渲染模板，内置 SSR/SPA 数据加载演示、Server Functions 与 API 路由示例，并集成 **EdgeOne** 适配器支持部署。

## 功能特性

- **混合渲染演示**：包含 SPA 模式、全 SSR、仅数据 SSR 示例。
- **Server Functions**：使用 `createServerFn` 的待办读写示例。
- **API 路由**：示例 API 端点与客户端调用页面。
- **文件路由**：基于 `src/routes` 自动生成路由。
- **现代技术栈**：Vite + React 19 + Tailwind CSS + TypeScript。

## 技术栈

- **框架**：TanStack Start + TanStack Router
- **构建工具**：Vite
- **UI**：React 19 + Tailwind CSS
- **语言**：TypeScript
- **部署适配**：EdgeOne（`@edgeone/tanstack-start`）

## 快速开始

```bash
pnpm install
edgeone pages dev
```

开发服务器默认运行在 `http://localhost:3000`。

## 常用脚本（EdgeOne Pages）

- **本地开发**：`edgeone pages dev`
- **构建**：`edgeone pages build`
- **部署**：`edgeone pages deploy`

## 页面概览

- **/**：主页（展示 TanStack Start 亮点）。
- **/demo/start/server-funcs**：Server Functions 演示（待办列表）。
- **/demo/start/api-request**：客户端请求 API 示例。
- **/demo/api/names**：返回静态 JSON 列表的 API 路由。
- **/demo/start/ssr**：SSR 演示索引页。
- **/demo/start/ssr/spa-mode**：纯客户端渲染（`ssr: false`）。
- **/demo/start/ssr/full-ssr**：完整 SSR（loader 预取）。
- **/demo/start/ssr/data-only**：仅数据 SSR（`ssr: 'data-only'`）。

## 适配器配置说明

EdgeOne 适配器已集成到 `vite.config.ts` 中：

```ts
import edgeoneAdapter from "@edgeone/tanstack-start";

// 在 plugins 数组中
plugins: [
  // ...
  edgeoneAdapter(),
],
```

## 适配器使用说明

EdgeOne 适配器已在 `vite.config.ts` 中配置。部署到 EdgeOne Pages 前请确保已安装并登录 EdgeOne Pages CLI：

```bash
# 安装 EdgeOne Pages CLI
npm install -g @edgeone/cli

# 登录 EdgeOne
edgeone login

# 部署
edgeone pages deploy
```

更多详情请参阅 [EdgeOne Pages 文档](https://pages.edgeone.ai/zh/document/edgeone-cli)。

## 学习资源

- **TanStack Start**：[官方文档](https://tanstack.com/start/latest)
- **TanStack Router**：[官方文档](https://tanstack.com/router/latest)
- **EdgeOne Pages**：[产品文档](https://pages.edgeone.ai/zh/document/framework-tanstack-start)

## 部署

一键将该项目部署到 EdgeOne Pages：

[![Deploy with EdgeOne Pages](https://cdnstatic.tencentcs.com/edgeone/pages/deploy.svg)](https://console.cloud.tencent.com/edgeone/pages/new?from=github&template=tanstack-start-mix-render-template)

更多模板：[EdgeOne Pages 模板](https://pages.edgeone.ai/templates)
