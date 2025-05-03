# 軟體工程師演示應用

這是一個展示軟體工程師日常工作的互動式 React 應用。

## 部署到 GitHub Pages 步驟

### 1. 安裝 gh-pages 包

```bash
npm install gh-pages --save-dev
```

### 2. 修改 package.json

在 package.json 中添加以下內容：

```json
{
  "homepage": "https://你的用戶名.github.io/repository名稱",
  "scripts": {
    // 保留現有的scripts
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

請將`你的用戶名`和`repository名稱`替換為您的 GitHub 用戶名和儲存庫名稱。

### 3. 修改 vite.config.js

如果您使用的是 Vite，需要修改 vite.config.js 文件：

```javascript
export default defineConfig({
  base: "/repository名稱/",
  plugins: [react()],
});
```

### 4. 創建 GitHub 儲存庫

1. 訪問[GitHub](https://github.com)並登入您的帳戶
2. 點擊右上角的"+"圖標，選擇"New repository"
3. 設置儲存庫名稱，選擇公開或私人
4. 點擊"Create repository"

### 5. 將代碼推送到 GitHub

```bash
git init
git add .
git commit -m "初始提交"
git branch -M main
git remote add origin https://github.com/你的用戶名/repository名稱.git
git push -u origin main
```

### 6. 部署應用

```bash
npm run deploy
```

執行完成後，您的應用將被部署到 GitHub Pages，可以通過以下 URL 訪問：
https://你的用戶名.github.io/repository 名稱/

### 7. 設置 GitHub Pages

1. 在 GitHub 儲存庫頁面，點擊"Settings"
2. 在左側菜單中，點擊"Pages"
3. 在"Build and deployment"部分，將"Source"設置為"Deploy from a branch"
4. 選擇"gh-pages"分支和"/(root)"文件夾，然後點擊"Save"

部署完成後，您可以在 GitHub Pages 設置頁面看到應用的訪問鏈接。
