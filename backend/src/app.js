import express from "express";
import router from "./modules/index.module.js";
import errorHandler from "./middlewares/errorHandler.module.js";
import cors from "cors";
import healthCheckRouter from "./modules/healthCheck.module.js";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 5090;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.json());
app.use("/health-check", healthCheckRouter);
app.use(router);
app.use(errorHandler);

// 정적 파일 서빙 (프론트엔드 빌드 결과)
app.use(express.static(path.join(__dirname, "../../frontend/dist")));

// API 라우터 및 에러 핸들러 이후, SPA 라우팅 지원
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../../frontend/dist/index.html"));
});

app.listen(PORT, () => {
  console.log(`${PORT} 실행됨!`);
});
