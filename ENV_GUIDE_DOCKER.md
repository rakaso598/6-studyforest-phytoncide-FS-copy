# Docker 환경변수 및 단일 컨테이너 가이드

## 1. 단일 컨테이너 구조 개요
- 프론트엔드(Vite 빌드 결과)와 백엔드(Express)를 하나의 컨테이너에서 함께 실행
- Express 서버가 `/frontend/dist`의 정적 파일을 서빙하며, API와 프론트엔드가 모두 8080 포트에서 동작

## 2. Dockerfile 주요 변경점
- 멀티스테이지 빌드로 프론트엔드와 백엔드 모두 빌드
- 프론트엔드 빌드 결과물을 백엔드 컨테이너에 복사
- 컨테이너 실행 시 Express 서버가 프론트엔드 정적 파일과 API를 모두 제공
- 컨테이너 포트를 8080으로 통일

## 3. 환경변수 관리 방법
- 환경변수는 `.env` 파일 또는 배포 환경(GCP Cloud Run 등)에서 직접 입력
- 주요 환경변수 예시:
  ```env
  DATABASE_URL=postgres://user:password@host:port/dbname
  VITE_API_URL=http://localhost:8080
  ```
- Cloud Run 등에서는 배포 설정에서 환경변수 직접 입력

## 4. 빌드 및 실행 방법
1. 도커 이미지 빌드
   ```bash
   docker build -t studyforest-app .
   ```
2. 컨테이너 실행 (로컬 .env 파일 사용)
   ```bash
   docker run -p 8080:8080 --env-file .env studyforest-app
   ```
3. 또는 환경변수 직접 주입
   ```bash
   docker run -p 8080:8080 -e DATABASE_URL=... -e VITE_API_URL=... studyforest-app
   ```

## 5. GCP Cloud Run 배포 시 참고
- 컨테이너 이미지를 레지스트리에 푸시 후 Cloud Run에서 이미지 선택
- Cloud Run 환경변수 설정에서 DATABASE_URL 등 입력
- 별도 추가 작업 없이 바로 서비스 가능

---
이 가이드를 참고해 단일 컨테이너 환경에서 손쉽게 배포 및 환경변수 관리를 할 수 있습니다.
