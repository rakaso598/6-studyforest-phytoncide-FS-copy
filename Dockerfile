# 단일 컨테이너용 Dockerfile
FROM node:20-alpine AS frontend-build
WORKDIR /app/frontend

# 프론트엔드 의존성 설치
COPY frontend/package.json frontend/package-lock.json ./
RUN npm install

# 소스 복사 및 빌드
COPY frontend .
RUN npm run build

FROM node:20-alpine AS backend-build
WORKDIR /app/backend

# 백엔드 의존성 설치
COPY backend/package.json backend/package-lock.json ./
RUN npm install --production

# 소스 복사
COPY backend .

# 프론트엔드 빌드 결과를 백엔드에 복사
COPY --from=frontend-build /app/frontend/dist ../frontend/dist

WORKDIR /app/backend

# Prisma generate (필요시)
RUN npx prisma generate

EXPOSE 5090
CMD ["npm", "run", "server"]
