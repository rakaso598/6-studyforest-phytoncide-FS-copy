# Prisma 테이블 미생성 오류 및 해결 가이드

## 오류 메시지 예시
```
Invalid `prisma.study.create()` invocation: The table `public.Study` does not exist in the current database.
```

## 원인
- 현재 데이터베이스에 `Study` 테이블이 존재하지 않아서 발생

## 주요 원인 및 해결 방법

### 1. Prisma 마이그레이션이 실행되지 않음
- 데이터베이스에 Prisma 스키마에 정의된 테이블이 실제로 생성되지 않은 상태
- 해결: 아래 명령어로 마이그레이션을 적용하세요.
  ```bash
  npx prisma migrate deploy
  ```
- 또는 개발 환경에서는
  ```bash
  npx prisma migrate dev
  ```

### 2. DATABASE_URL이 잘못되어 다른(빈) 데이터베이스에 연결된 경우
- 환경변수의 DB 주소가 올바른지 확인하세요.

### 3. 초기 seed 작업이 필요한 경우
- 마이그레이션 후 seed 스크립트가 있다면 실행하세요.
  ```bash
  npm run seed
  ```

## 정리
- Prisma 마이그레이션을 먼저 실행해 데이터베이스에 테이블을 생성하면 해결됩니다!
