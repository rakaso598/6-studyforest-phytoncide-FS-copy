// prisma/mock.data.js
const BASE_DATE = new Date("2025-08-19");

const dateOnly = (date) => date.toISOString().slice(0, 10);

const d = (offset) => {
  const dt = new Date(BASE_DATE);
  dt.setDate(dt.getDate() + offset);
  return dateOnly(dt);
};

export const studiesMock = [
  {
    nickName: "김개발",
    title: "알고리즘",
    description: "매일 알고리즘 한 문제씩",
    point: 21,
    background: "bg1",
    emojis: [
      { emojiContent: "👍", count: 5 },
      { emojiContent: "🔥", count: 2 },
    ],
    habits: [
      { title: "코테 1문제", doneDates: [d(-3), d(-1), d(0), d(2)] },
      { title: "CS 공부", doneDates: [d(-2), d(1)] },
    ],
  },
  {
    nickName: "박프론트",
    title: "영어",
    description: "리스닝/스피킹 루틴",
    point: 13,
    background: "bg3",
    emojis: [{ emojiContent: "💪", count: 3 }],
    habits: [
      { title: "리스닝 30분", doneDates: [d(-4), d(-1), d(0)] },
      { title: "스피킹 15분", doneDates: [d(-2), d(1)] },
    ],
  },
  {
    nickName: "이디자인",
    title: "독서",
    description: "하루 20분 독서",
    point: 9,
    background: "bg5",
    emojis: [{ emojiContent: "📚", count: 4 }],
    habits: [{ title: "독서 20분", doneDates: [d(-3), d(0), d(2)] }],
  },
  {
    nickName: "최백엔드",
    title: "운동",
    description: "홈트와 스트레칭",
    point: 15,
    background: "bg2",
    emojis: [{ emojiContent: "💯", count: 1 }],
    habits: [
      { title: "푸쉬업", doneDates: [d(-3), d(-2), d(1)] },
      { title: "스트레칭", doneDates: [d(-1), d(0), d(2)] },
    ],
  },
  {
    nickName: "정데브옵스",
    title: "자료구조",
    description: "하루 한 주제 정리",
    point: 18,
    background: "bg4",
    emojis: [{ emojiContent: "🧠", count: 2 }],
    habits: [
      { title: "요약 정리", doneDates: [d(-2), d(0), d(1)] },
      { title: "문제 풀이", doneDates: [d(-3), d(2)] },
    ],
  },
  {
    nickName: "오테스터",
    title: "네트워크",
    description: "OSI, TCP/IP 복습",
    point: 12,
    background: "bg6",
    emojis: [{ emojiContent: "🧪", count: 1 }],
    habits: [
      { title: "이론 읽기", doneDates: [d(-1), d(0)] },
      { title: "퀴즈", doneDates: [d(-2), d(1)] },
    ],
  },
  {
    nickName: "한데이터",
    title: "DB",
    description: "SQL과 정규화",
    point: 16,
    background: "bg8",
    emojis: [{ emojiContent: "🗄️", count: 2 }],
    habits: [
      { title: "SQL 연습", doneDates: [d(-3), d(0), d(1)] },
      { title: "개념 정리", doneDates: [d(-2), d(2)] },
    ],
  },
  {
    nickName: "유PM",
    title: "회고",
    description: "데일리 회고",
    point: 8,
    background: "bg7",
    emojis: [{ emojiContent: "📝", count: 3 }],
    habits: [{ title: "하루 회고", doneDates: [d(-3), d(-1), d(0), d(1)] }],
  },
  {
    nickName: "노기획",
    title: "블로그",
    description: "주 3회 포스팅",
    point: 17,
    background: "bg5",
    emojis: [{ emojiContent: "✍️", count: 2 }],
    habits: [
      { title: "글쓰기", doneDates: [d(-3), d(0), d(2)] },
      { title: "리뷰", doneDates: [d(-1), d(1)] },
    ],
  },
  {
    nickName: "신리서처",
    title: "리팩토링",
    description: "레거시 개선",
    point: 14,
    background: "bg1",
    emojis: [{ emojiContent: "🧹", count: 1 }],
    habits: [
      { title: "코드 정리", doneDates: [d(-2), d(0), d(1)] },
      { title: "리뷰", doneDates: [d(-1), d(2)] },
    ],
  },
  {
    nickName: "문AI",
    title: "타이핑",
    description: "타자 연습",
    point: 10,
    background: "bg2",
    emojis: [{ emojiContent: "⌨️", count: 4 }],
    habits: [{ title: "타자 10분", doneDates: [d(-3), d(-1), d(0), d(1)] }],
  },
  {
    nickName: "서IOS",
    title: "코테",
    description: "코딩테스트 대비",
    point: 22,
    background: "bg3",
    emojis: [{ emojiContent: "🚀", count: 3 }],
    habits: [
      { title: "문제 풀이", doneDates: [d(-3), d(-1), d(0), d(2)] },
      { title: "오답 정리", doneDates: [d(-2), d(1)] },
    ],
  },
  {
    nickName: "윤안드",
    title: "CS",
    description: "핵심 CS 정리",
    point: 19,
    background: "bg4",
    emojis: [{ emojiContent: "📘", count: 2 }],
    habits: [
      { title: "정리", doneDates: [d(-2), d(0), d(2)] },
      { title: "퀴즈", doneDates: [d(-1), d(1)] },
    ],
  },
  {
    nickName: "배서버",
    title: "면접",
    description: "면접 준비",
    point: 11,
    background: "bg6",
    emojis: [{ emojiContent: "🙋", count: 1 }],
    habits: [
      { title: "질문 목록", doneDates: [d(-3), d(0)] },
      { title: "답변 연습", doneDates: [d(-2), d(1)] },
    ],
  },
  {
    nickName: "장웹",
    title: "프젝정리",
    description: "진행 중인 프로젝트 정리",
    point: 12,
    background: "bg8",
    emojis: [{ emojiContent: "🗂️", count: 2 }],
    habits: [
      { title: "이슈 정리", doneDates: [d(-1), d(0), d(2)] },
      { title: "문서화", doneDates: [d(-3), d(1)] },
    ],
  },
  {
    nickName: "곽리뷰",
    title: "코드리뷰",
    description: "동료 코드 리뷰",
    point: 7,
    background: "bg7",
    emojis: [{ emojiContent: "👀", count: 1 }],
    habits: [{ title: "리뷰", doneDates: [d(-2), d(0), d(1)] }],
  },
  {
    nickName: "채QA",
    title: "테스트",
    description: "테스트 케이스 작성",
    point: 8,
    background: "bg5",
    emojis: [{ emojiContent: "🧩", count: 1 }],
    habits: [
      { title: "케이스 작성", doneDates: [d(-3), d(0)] },
      { title: "실행", doneDates: [d(-1), d(1)] },
    ],
  },
];
