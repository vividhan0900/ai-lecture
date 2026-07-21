// 차시 정보: 이 배열만 수정하면 메인 페이지 카드가 자동으로 반영됩니다.
// link: 교안이 준비되면 실제 강의안 페이지(예: lectures/lecture-01.html)나 PDF/노션 링크로 바꿔주세요.
const LECTURES = [
  {
    no: 1,
    title: "생성형 AI 트렌드와 공공행정의 변화",
    summary: "ChatGPT·Gemini·Claude 최신 트렌드와 정부 AI 정책을 살펴보고, 공무원 AI 활용 주의점과 프롬프트 황금공식(역목맥지)을 배웁니다.",
    link: "lectures/lecture-01.html",
  },
  {
    no: 2,
    title: "생성형 AI 활용 홍보 콘텐츠 제작 실습",
    summary: "콘텐츠 구조화 프롬프트로 포스터·인포그래픽·카드뉴스·유튜브 썸네일을 만들고, 미리캔버스로 완성해봅니다.",
    link: "lectures/lecture-02.html",
  },
  {
    no: 3,
    title: "AI 활용 공공행정 문서 작성과 자동화",
    summary: "ChatGPT 웹검색·심층리서치로 정책을 조사하고, 프로젝트 기능으로 공문서·민원답변·이메일 작성을 자동화합니다.",
    link: "lectures/lecture-03.html",
  },
  {
    no: 4,
    title: "행정·정책보고서 작성을 위한 딥리서치",
    summary: "제미나이 Gems로 나만의 AI 업무비서를 설계하고, 캔버스 기능으로 사업기획서·결과보고서·PPT까지 만듭니다.",
    link: "lectures/lecture-04.html",
  },
  {
    no: 5,
    title: "클로드(Claude) SKILL로 공공행정문서 생성",
    summary: "클로드 SKILL 기능으로 우리 기관 공문서 양식에 맞춰 HWPX 문서를 자동 생성하는 방법을 배웁니다.",
    link: "lectures/lecture-05.html",
  },
];

// 강의 정보(제목/강사/기간)는 여기서 수정 가능합니다.
const COURSE_INFO = {
  title: "생성형 AI 활용 실무역량 강화 교육",
  subtitle: "파주시청 공무원 대상 · 생성형 AI 실무 활용 교육",
  description:
    "ChatGPT, Gemini, Claude를 활용해 정책 조사부터 홍보 콘텐츠 제작, 공문서·민원 응답 자동화까지 — 공무원 실무에 바로 쓰는 생성형 AI 활용법을 배웁니다.",
  instructor: "한성은",
  instructorTags: ["한국강사교육협회 이사"],
  period: "2026.07.16",
};

const MATERIALS_SECTION = {
  title: "📚 강의 자료",
  desc: "강의안과 실습 파일을 내려받으세요.",
};

// 자료 카드 목록: 필요한 만큼 항목을 추가/삭제하세요.
// type: "padlet" → 버튼에 "패들렛 열기"가 표시되고 새 창으로 열립니다. (url에 패들렛 보드 링크를 넣으세요)
// type: "download" → 버튼에 "다운로드"가 표시됩니다. (url에 파일/노션 링크를 넣으세요)
const MATERIALS = [
  {
    icon: "📌",
    title: "실습 결과물 업로드 (패들렛)",
    description: "실습 중 만든 포스터·카드뉴스·프롬프트를 패들렛에 올리고 함께 공유해요",
    type: "padlet",
    url: "https://padlet.com/vividhan0900/bit-ly-ai-3-4xbn3a7e2134y94n",
  },
  {
    icon: "📊",
    title: "강의 자료 (PPTX)",
    description: "전체 차시 강의안 원본입니다. 업로드 후 이 링크를 교체해주세요",
    type: "download",
    url: "#",
  },
  {
    icon: "📎",
    title: "참고자료 1",
    description: "실습에 사용할 파일을 올리고 이 링크를 교체해주세요",
    type: "download",
    url: "#",
  },
  {
    icon: "📎",
    title: "참고자료 2",
    description: "실습에 사용할 파일을 올리고 이 링크를 교체해주세요",
    type: "download",
    url: "#",
  },
  {
    icon: "📎",
    title: "참고자료 3",
    description: "실습에 사용할 파일을 올리고 이 링크를 교체해주세요",
    type: "download",
    url: "#",
  },
  {
    icon: "📎",
    title: "참고자료 4",
    description: "실습에 사용할 파일을 올리고 이 링크를 교체해주세요",
    type: "download",
    url: "#",
  },
];
