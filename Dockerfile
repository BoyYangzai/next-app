# 使用官方 Node.js 18 镜像作为基础镜像
FROM node:18-alpine AS base

# 安装 libc6-compat 以提高兼容性
RUN apk add --no-cache libc6-compat

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 pnpm-lock.yaml
COPY package.json pnpm-lock.yaml* ./

# 安装 pnpm
RUN npm install -g pnpm

# 安装依赖（跳过 prepare 脚本）
RUN pnpm install --frozen-lockfile --ignore-scripts

# 复制所有源代码（构建时需要）
COPY . .

# 构建应用
RUN pnpm run build

# 生产环境镜像
FROM node:18-alpine AS runner
WORKDIR /app

# 创建非 root 用户
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# 复制 package.json 和 pnpm-lock.yaml
COPY package.json pnpm-lock.yaml* ./

# 安装 pnpm
RUN npm install -g pnpm

# 复制构建产物和运行时必需文件
COPY --from=base /app/public ./public
COPY --from=base /app/.next ./.next
COPY --from=base /app/next.config.mjs ./
COPY --from=base /app/middleware.ts ./

# 复制运行时必需的应用文件
COPY --from=base /app/app ./app
COPY --from=base /app/components ./components
COPY --from=base /app/config ./config
COPY --from=base /app/i18n ./i18n
COPY --from=base /app/lib ./lib
COPY --from=base /app/store ./store
COPY --from=base /app/theme ./theme

# 安装生产依赖（跳过 prepare 脚本）
RUN pnpm install --frozen-lockfile --prod --ignore-scripts

USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["pnpm", "start"] 
