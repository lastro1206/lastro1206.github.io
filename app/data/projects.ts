export interface Project {
  id: number;
  logoImg?: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  developmentDetails?: {
    overview: string;
    challenges: string[];
    solutions: string[];
    performanceOptimizations?: string[];
    keyFeatures?: string[];
  };
}

export const projects: Project[] = [
  {
    id: 1,
    logoImg: "/image/jeonlog.png",
    title: "전:록",
    description: "전시 기록 공유 및 커뮤니티 플랫폼",
    longDescription:
      "전시회를 다녀온 후 느낀 점과 사진을 기록하고 공유할 수 있는 모바일 앱입니다. Rich Text Editor를 활용한 자유로운 글 작성, 해시태그를 통한 콘텐츠 분류, 팔로우 기반 소셜 기능, 실시간 알림 등을 제공하여 전시 문화를 즐기는 사용자들의 커뮤니티를 형성합니다.",
    technologies: [
      "expo",
      "TypeScript",
      "React Native",
      "Zustand",
      "Axios",
      "expo-notifications",
      "react-native-pell-rich-editor",
    ],
    liveUrl: "https://jeonlog.com",
    featured: true,
    developmentDetails: {
      overview:
        "전:록은 전시회를 다녀온 사용자들이 자신의 경험을 기록하고 공유할 수 있는 플랫폼입니다. Rich Text Editor를 활용한 자유로운 글 작성, 해시태그 기반 콘텐츠 분류, 소셜 기능(팔로우/좋아요/댓글), 실시간 푸시 알림 등 핵심 기능을 구현했습니다.",
      challenges: [
        "Rich Text Editor에서 입력한 해시태그가 백엔드로 정확히 전달되지 않는 문제",
        "전시 기록 삭제 후 리스트에서 중복 키 경고 발생",
        "API 에러 메시지가 상세하게 표시되지 않아 디버깅 어려움",
        "알림 권한 요청 타이밍 관리 및 푸시 토큰 등록 로직 복잡성",
        "검색 기능에서 인기 검색어와 최근 검색어 상태 관리",
        "다양한 API 응답 구조에 대한 일관된 파싱 처리",
      ],
      solutions: [
        "useHashtags 커스텀 훅을 통해 해시태그 상태를 중앙 관리하고, 요청 바디 생성 시 # 기호 제거 및 유효성 검증 로직 구현",
        "useFocusEffect 훅을 활용하여 화면 포커스 시 데이터 자동 갱신으로 중복 키 문제 해결",
        "Axios 인터셉터에서 에러 응답의 상세 메시지를 추출하여 CustomAlert로 표시하는 에러 핸들링 시스템 구축",
        "온보딩 플로우에서만 알림 권한을 요청하고, 이후에는 권한 상태만 확인하도록 권한 관리 로직 단순화",
        "expo-secure-store를 활용한 최근 검색어 로컬 저장 및 기본값 처리로 검색 UX 개선",
        "다양한 필드명(hashtags, hashtag, tags, tagList)과 데이터 타입(배열, 문자열)을 처리하는 유연한 파싱 로직 구현",
      ],
      performanceOptimizations: [
        "Zustand의 Shallow 비교를 활용하여 불필요한 리렌더링 방지",
        "useFocusEffect와 useCallback을 조합하여 화면 포커스 시에만 데이터 갱신하도록 최적화",
        "FlatList의 keyExtractor를 명시적으로 지정하여 리스트 렌더링 성능 향상",
        "이미지 URL 추출 및 중복 제거 로직으로 불필요한 네트워크 요청 감소",
        "API 응답 데이터를 변환하는 transformRecord 함수를 통해 일관된 데이터 구조 보장",
        "__DEV__ 플래그를 활용하여 프로덕션 빌드에서 디버그 로그 제거로 성능 개선",
      ],
      keyFeatures: [
        "Rich Text Editor를 활용한 자유로운 전시 기록 작성 및 수정",
        "해시태그 입력 및 필터링을 통한 콘텐츠 분류 및 검색",
        "팔로우/팔로워 시스템을 통한 사용자 간 소셜 네트워킹",
        "좋아요 및 댓글 기능으로 사용자 간 상호작용 지원",
        "실시간 푸시 알림을 통한 새로운 콘텐츠 및 상호작용 알림",
        "인기 검색어 및 최근 검색어 기능으로 검색 UX 개선",
        "소셜 로그인(Apple, Google, Naver) 지원",
        "전시 정보 검색 및 선택 기능",
        "사용자 프로필 관리 및 전시 기록 모아보기",
      ],
    },
  },
  {
    id: 2,
    logoImg: "/image/roomy.png",
    title: "루미 (Roomy)",
    description: "AI 기반 기숙사 룸메이트 매칭 및 시설 관리 플랫폼",
    longDescription:
      "사용자의 생활 패턴을 AI로 분석해 최적의 룸메이트를 매칭해주고, 기숙사 내 낙후 시설물을 사진으로 찍으면 AI가 신고서를 자동 생성해주는 원스톱 기숙사 관리 솔루션입니다.",
    technologies: ["expo", "TypeScript", "React Native", "Zustand", "Axios"],
    githubUrl: "https://github.com/lastro1206/Roomy-frontend",
    featured: true,
    developmentDetails: {
      overview:
        "루미는 기숙사 생활의 가장 큰 페인 포인트인 '룸메이트 갈등'과 '시설 신고의 번거로움'을 해결하기 위해 기획된 앱입니다. 해커톤 기간 동안 기획부터 AI 모델 연동, 프론트엔드 개발까지 완료했습니다.",
      challenges: [
        "다양한 생활 패턴 데이터를 기반으로 한 매칭 로직 구현",
        "시설물 판독 AI 모델과의 실시간 통신 및 데이터 처리",
        "해커톤 기간 내 완성도를 위한 효율적인 상태 관리",
      ],
      solutions: [
        "Zustand를 활용한 전역 상태 관리로 복잡한 설문 데이터 및 유저 정보 동기화",
        "Axios 인터셉터를 통한 안정적인 AI API 통신 및 에러 핸들링",
        "Expo Image Picker 및 Vision API 연동을 통한 사진 업로드 및 판독 워크플로우 최적화",
      ],
      performanceOptimizations: [
        "Zustand의 Shallow Picker를 사용하여 불필요한 리렌더링 방지",
        "Axios 인스턴스화를 통한 API 호출 구조화 및 유지보수성 향상",
        "이미지 업로드 전 클라이언트 사이드 압축으로 데이터 사용량 70% 절감",
        "설문지 폼 단계별 컴포넌트 분리(Code Splitting)를 통한 초기 렌더링 속도 개선",
      ],
      keyFeatures: [
        "AI 기반 라이프스타일 분석 및 룸메이트 추천 시스템",
        "낙후 시설 사진 인식 및 유지보수 신고 초안 자동 생성",
        "시설물 결함 중요도(우선순위) 자동 판독 알고리즘",
        "Zustand 기반의 유연한 사용자 프로필 및 매칭 선호도 관리 시스템",
      ],
    },
  },

  {
    id: 4,
    title: "포트폴리오 웹사이트",
    logoImg: "/image/portfolio.jpg",
    description: "개발자 포트폴리오를 위한 웹사이트",
    longDescription:
      "애니메이션과 인터랙티브 요소가 풍부한 포트폴리오 웹사이트. Framer Motion을 활용한 부드러운 애니메이션과 반응형 디자인을 구현했습니다.",
    technologies: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS"],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: false,
    developmentDetails: {
      overview:
        "개발자의 역량과 프로젝트를 효과적으로 보여주는 모던한 포트폴리오 웹사이트입니다.",
      challenges: ["부드러운 애니메이션 구현", "성능 최적화", "SEO 최적화"],
      solutions: [
        "Framer Motion을 활용한 고성능 애니메이션",
        "이미지 최적화 및 코드 스플리팅",
        "Next.js의 SSR/SSG 기능 활용",
      ],
      performanceOptimizations: [
        "이미지 최적화로 로딩 시간 단축",
        "코드 스플리팅으로 초기 번들 크기 감소",
        "애니메이션 성능 최적화",
      ],
      keyFeatures: [
        "인터랙티브 애니메이션",
        "반응형 디자인",
        "프로젝트 포트폴리오",
      ],
    },
  },
];
