# Bobo Records

一个 Public Records 气质的个人网站：左侧是个人介绍和漂浮图片，右侧竖向页面展示鸡尾酒配方、音乐乐评和电影记录。后台入口独立隐藏，只有知道入口和密码的人可以修改内容。

## 本地预览

```bash
npm install
cp .env.example .env
npm start
```

打开：

```text
http://localhost:5173
```

## 本地密码

把 `.env` 里的这些值改掉：

```bash
ADMIN_PASSWORD=你的后台密码
TOKEN_SECRET=一串很长的随机字符
```

`TOKEN_SECRET` 可以随便生成一串长一点的字符，比如 32 位以上。它不是登录密码，是用来保护登录 token 的密钥。

## 后台入口

后台入口是：

```text
http://localhost:5173/#admin
```

线上就是：

```text
https://你的-vercel-域名/#admin
```

也可以在页面按 `Shift + A` 打开后台。

## Vercel 后端配置

在 Vercel 项目里添加环境变量：

- `ADMIN_PASSWORD`：你的后台登录密码
- `TOKEN_SECRET`：一串很长的随机字符，用来签发登录 token
- `KV_REST_API_URL` / `KV_REST_API_TOKEN`：Vercel KV 或 Upstash Redis REST 凭据

也可以使用 Upstash 的变量名：

- `UPSTASH_REDIS_REST_URL`
- `UPSTASH_REDIS_REST_TOKEN`

如果没有配置 KV/Upstash，后端会使用本地 `data/content.json`，这只适合本地开发，不适合 Vercel 生产环境持久保存。

配置完成后重新部署一次 Vercel。以后你在 `/#admin` 里改图片、鸡尾酒、音乐和电影，数据会通过 API 写进 KV/Upstash。
