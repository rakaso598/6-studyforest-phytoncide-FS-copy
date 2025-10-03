# Docker Compose 환경변수 주입 가이드

## 환경변수 주입 방법

### 1. .env 파일 사용 (권장)
- 프로젝트 루트에 `.env` 파일 생성 후, 아래와 같이 작성:
  ```env
  DATABASE_URL=postgres://user:password@host:port/dbname
  VITE_API_URL=http://localhost:5090
  ```
- `docker-compose up --build` 실행 시 자동으로 주입됨

### 2. 명령어로 직접 주입
- 실행 시 환경변수를 명시적으로 넘길 수 있음:
  ```bash
  DATABASE_URL=postgres://user:password@host:port/dbname VITE_API_URL=http://localhost:5090 docker-compose up --build
  ```

## 참고
- `.env` 파일은 깃허브에 올리지 말고, 배포 환경에서는 직접 환경변수를 주입하세요.
- docker-compose.yml의 `environment` 항목에서 `${변수명}`으로 참조 가능
