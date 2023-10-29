# 使用 Node.js 執行環境作為基底映像
FROM node:18 as build-stage

# 設定工作目錄
WORKDIR /app

# 複製 package.json 和 package-lock.json 到工作目錄
COPY package*.json ./

# 安裝依賴
RUN npm install

# 複製源碼到工作目錄
COPY . .

# 編譯 React 應用
RUN npm run build

# 使用 Nginx 作為基底映像，用於部署編譯後的 React 應用
FROM nginx:1.19 as production-stage

# 複製編譯後的應用到 Nginx 的公開目錄
COPY --from=build-stage /app/build /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf


# 指定容器啟動時的命令
CMD ["nginx", "-g", "daemon off;"]
