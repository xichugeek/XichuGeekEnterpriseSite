# 部署指南

本文适用于普通 Ubuntu VPS。示例域名 `www.your-company.example`、邮箱和目录需换成自己的值。上线前确保演示公司、案例、联系信息和截图已经替换或明确标注。

## 1. 准备域名和服务器

将域名的 A/AAAA 记录指向你自己的 VPS 公网地址，在云防火墙和系统防火墙放行 80/443。不要把服务器 IP、SSH 私钥、DNS API Token 或生产密码写入仓库。安装 Docker Engine 与 Compose 插件；安装方式以 Docker 官方对应 Ubuntu 版本文档为准。

## 2. 构建并启动

```bash
git clone https://github.com/xichugeek/XichuGeekEnterpriseSite.git
cd XichuGeekEnterpriseSite
export PUBLIC_SITE_URL=https://www.your-company.example
export SITE_PORT=8080
docker compose up -d --build
docker compose ps
curl -I http://127.0.0.1:8080/
```

构建时的 `PUBLIC_SITE_URL` 写入 canonical、Open Graph 和 sitemap。改域名后必须重建。部署前还要把 `src/config/site.ts` 中的占位内容换成真实资料，并检查 `robots.txt`、`sitemap.xml` 和所有页面链接。

## 3. 反向代理和 HTTPS

在 VPS 的主机 Nginx、Caddy 或现有入口代理上，为你的域名建立 HTTPS 站点，并反向代理到 `http://127.0.0.1:8080`。建议把 Compose 端口改为仅绑定本机，例如将 `ports` 临时改为 `127.0.0.1:8080:80`，避免直接暴露容器 HTTP 端口。HTTPS 证书可通过 Let's Encrypt 的 ACME 客户端自动签发与续期；先确认域名解析和 80/443 可达。域名代理处传递 `Host`、`X-Forwarded-For`、`X-Forwarded-Proto`，并将 HTTP 重定向到 HTTPS。

本项目的 `nginx.conf` 是**容器内部的静态文件服务配置**，不包含域名证书或生产环境入口设置。容器运行时不需要 Node.js。

## 4. 验收

- 首页、服务、项目、关于、联系页面可访问；不存在的路径返回 404。
- 浏览器地址使用 HTTPS，无混合内容；邮件链接指向正确邮箱。
- 页面源码中的 canonical 和 `og:url` 指向正式域名。
- `/robots.txt` 和 `/sitemap.xml` 可访问且域名正确。
- 移动端菜单可用，页面没有水平滚动。

## 5. 更新与回滚

更新前记录当前 Git commit 或发布 tag，保留可回滚的版本：

```bash
git rev-parse --short HEAD
git pull --ff-only
PUBLIC_SITE_URL=https://www.your-company.example docker compose up -d --build
```

如新版本有问题，在**部署工作目录**切回事先记录的 tag/commit，再用同一个正式域名重建容器。推荐用单独的部署检出目录或发布流水线管理版本，避免在有未提交修改的工作树中切换。静态站无数据库迁移；回滚仍需检查内容和缓存。将旧版镜像留存一段时间可以缩短回退时间。

## 安全与运维

本 Starter 不需要运行时密钥。真实服务器的 SSH、代理证书、监控凭据和第三方 Token 应放在服务器的受控配置中，不能进入 Git。定期更新基础镜像与系统补丁。站点是静态文件，仍应监控容器健康状态和 HTTPS 证书续期。
