// 차시 정보: 이 배열만 수정하면 메인 페이지 카드가 자동으로 반영됩니다.
// link: 교안이 준비되면 실제 강의안 페이지(예: lectures/lecture-01.html)나 PDF/노션 링크로 바꿔주세요.
const LECTURES = [
  {
    no: 1,
    title: "1차시 제목을 입력하세요",
    summary: "이 차시에서 다루는 내용을 한두 줄로 요약해서 적어주세요.",
    link: "lectures/lecture-01.html",
  },
  {
    no: 2,
    title: "2차시 제목을 입력하세요",
    summary: "이 차시에서 다루는 내용을 한두 줄로 요약해서 적어주세요.",
    link: "lectures/lecture-02.html",
  },
  {
    no: 3,
    title: "3차시 제목을 입력하세요",
    summary: "이 차시에서 다루는 내용을 한두 줄로 요약해서 적어주세요.",
    link: "lectures/lecture-03.html",
  },
  {
    no: 4,
    title: "4차시 제목을 입력하세요",
    summary: "이 차시에서 다루는 내용을 한두 줄로 요약해서 적어주세요.",
    link: "lectures/lecture-04.html",
  },
  {
    no: 5,
    title: "5차시 제목을 입력하세요",
    summary: "이 차시에서 다루는 내용을 한두 줄로 요약해서 적어주세요.",
    link: "lectures/lecture-05.html",
  },
  {
    no: 6,
    title: "6차시 제목을 입력하세요",
    summary: "이 차시에서 다루는 내용을 한두 줄로 요약해서 적어주세요.",
    link: "lectures/lecture-06.html",
  },
];

// 강의 정보(제목/강사/기간)는 여기서 수정 가능합니다.
const COURSE_INFO = {
  title: "강의명을 입력하세요",
  instructor: "강사명",
  instructorLinks: [
    // { label: "포트폴리오", url: "https://example.com" },
  ],
  period: "0000.00.00",
};

const MATERIALS_SECTION = {
  title: "강의 자료",
  desc: "강의안과 실습 파일을 내려받으세요.",
};

// 자료 카드 목록: 필요한 만큼 항목을 추가/삭제하세요.
// type: "padlet" → 버튼에 "패들렛 열기"가 표시되고 새 창으로 열립니다. (url에 패들렛 보드 링크를 넣으세요)
// type: "download" → 버튼에 "다운로드"가 표시됩니다. (url에 파일/노션 링크를 넣으세요)
const MATERIALS = [
  {
    icon: "📄",
    title: "실습 프롬프트 모음 (패들렛)",
    description: "실습 프롬프트를 패들렛에서 모아 보고 함께 공유해요",
    type: "padlet",
    url: "https://padlet.com/vividhan0900/padlet-48y4o0i5vn9cbp3g",
  },
  {
    icon: "📄",
    title: "자료 제목을 입력하세요 (PDF)",
    description: "자료에 대한 설명을 한 줄로 적어주세요",
    type: "download",
    url: "#",
  },
  {
    icon: "📄",
    title: "자료 제목을 입력하세요 (PDF)",
    description: "자료에 대한 설명을 한 줄로 적어주세요",
    type: "download",
    url: "#",
  },
  {
    icon: "📄",
    title: "자료 제목을 입력하세요 (CSV)",
    description: "자료에 대한 설명을 한 줄로 적어주세요",
    type: "download",
    url: "#",
  },
];
