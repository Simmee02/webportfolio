import beforeAfterImage from "@/assets/details/img_id2_detail.png";
import CheongImage1 from "@/assets/details/img_id1_detail_01.png";
import CheongImage2 from "@/assets/details/img_id1_detail_02.png";
import PoomyImage1 from "@/assets/details/img_id3_detail_04.png";
import PoomyImage2 from "@/assets/details/img_id3_detail_05.png";


export type ProjectDetailItem = {
  title: string;
  why: string;
  content: string;
};

export type ProjectDetailImage = {
  label: string;
  src: string;
};

export type ProjectDetail = {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  period: string;
  description: string;
  github?: string;
  details: ProjectDetailItem[];
  role?: string;
  highlight?: string[];
  images?: ProjectDetailImage[];
};

export const projectDetails: Record<string, ProjectDetail> = {
  "1": {
    id: "1",
    category: "해커톤",
    title: "청소 연구소 [우리집]\nFE 개발자",
    subtitle: "청소 서비스 고도화 및 신규 기능 전략 제안",
    period: "2026.01 ~ 2026.03",
    role: "Frontend Developer",
    description:
      "청소 외주 플랫폼 “청소연구소” 서비스 고도화 프로젝트입니다. 고객별 만족 기준 차이로 발생하는 불편을 해결하고자 공동 생활 관리 기능을 기획하고, 이를 통해 가사 분담 데이터를 축적해 매니저 파견 시 맞춤형 가이드로 활용할 수 있는 서비스 구조를 설계했습니다.",
    github: "https://github.com/catchSOLmind/cheongyeon-fe",
    highlight: [
      "공동 생활 관리 기능 기획",
      "가사 분담 데이터 축적 구조 설계",
      "매니저 파견 시 맞춤형 가이드 활용 구조 설계",
    ],
    details: [
      {
        title: "서비스 인프라 구조 개선",
        why: "Problem : 웹(HTTPS)에서 서버(HTTP)로 직접 통신 시 Mixed Content 오류 발생",
        content:
          "Solution : **CloudFront에서 HTTPS를 처리**하고 HTTP 서버로 요청을 전달하도록 구성. S3 버킷 OAC 설정으로 CloudFront에서만 S3에 접근하도록 보안 구조 개선.",
      },
      {
        title: "초대 링크 상태 관리",
        why: "Problem : 링크 기반 초대 진입 시 Zustand persist가 localStorage 이전 상태를 먼저 복원하면서 초대 ID가 덮어씌워지는 문제 발생",
        content:
          "Solution : URL 기반 초대 ID를 **persist 대상에서 제외**하고 **partialize 옵션을 적용**해 초대 링크 진입 시 상태가 덮어씌워지는 문제 방지.",
      },
      {
        title: "인증 및 프로필 상태 관리",
        why: "Problem : 인증 상태와 유저 프로필 데이터의 관심사가 달라 단일 스토어로 관리 시 책임 과중",
        content:
          "Solution : Zustand로 AuthStore와 UserStore를 **관심사 분리 설계**. **동적 import**로 스토어 간 의존성 문제 방지.",
      },
      {
        title: "코드 품질 관리",
        why: "Problem : 소규모 팀 환경에서 코드 리뷰 인력이 부족해 코드 품질을 일관되게 유지하기 어려운 문제 발생",
        content:
          "Solution : CodeRabbit을 도입해 **AI 기반 자동 코드 리뷰 환경**을 구축. 코드 컨벤션을 사전에 정의하고 PR 단계에서 자동 검증되도록 구성하여 코드 스타일 일관성을 유지하고 리뷰 부담을 줄임.",
      },
    ],
    images: [
      { label: "구현한 프론트엔드 UI", src: CheongImage1 },
      { label: "프론트엔드 시스템 아키텍처", src: CheongImage2 },
    ],
  },

  "2": {
    id: "2",
    category: "인턴십",
    title: "신한투자증권 블록체인부\n홈페이지 리뉴얼",
    subtitle: "인턴십 개인 프로젝트",
    period: "2025.05 ~ 2025.08",
    role: "Frontend Developer",
    description:
      "부서 홈페이지 리디자인 및 개발 프로젝트를 진행하였습니다. EC2 기반의 수동 배포 체계를 Vercel 자동 배포로 전환해 서버 비용을 70% 절감했고, 정적 웹페이지를 동적으로 개선해 사용자 경험을 향상시켰습니다.",
    highlight: [
      "서버 비용 약 70% 절감",
      "정적 웹 구조 개선",
      "SEO 및 검색 노출도 개선",
    ],
    details: [
      {
        title: "UX/UI 개선",
        why: "Problem : 단일 페이지 구조로 정보가 한 화면에 집중되어 있고, 인터랙션 없이 정적인 구성",
        content:
          "Solution : 메인 화면은 단순하게, 세부 내용은 depth를 깊게 구성해 **정보 구조 개선**. Framer Motion을 활용해 **인터랙션 애니메이션** 구현. 전체적인 레이아웃과 타이포그래피 개선.",
      },
      {
        title: "코드 품질 개선",
        why: "Problem : 모바일 환경 미지원 및 오래된 코드베이스",
        content:
          "Solution : React + TypeScript + Tailwind CSS 기반으로 리팩토링해 **반응형 웹** 구현. ESLint·Prettier 적용으로 **코드 컨벤션 통일 및 유지보수성 강화.**",
      },
      {
        title: "배포 환경 개선",
        why: "Problem : 정적 파일 서빙을 위해 EC2 인스턴스를 상시 운영하며 불필요한 비용 발생",
        content:
          "Solution : EC2 수동 배포에서 GitHub-**Vercel 자동 배포 환경**으로 전환해 **서버 비용 약 70% 절감.**",
      },
      {
        title: "검색 노출도 개선",
        why: "Problem : 관련 사업을 검색엔진에 검색 시 노출도 낮음",
        content:
          "Solution : **SEO 최적화** 메타 태그 및 시맨틱 HTML 구조 적용으로 **검색 노출도 개선**. Open Graph 설정으로 SNS 공유 시 미리보기 지원.",
      },
    ],

    images: [{ label: "리뉴얼 전/후 메인 페이지", src: beforeAfterImage }],
  },

  "3": {
    id: "3",
    category: "사이드 프로젝트",
    title: "POOMY\nFE 리드 개발자",
    subtitle: "위치 기반 소품샵 추천 어플 개발",
    period: "2024.03 ~ 2025.01",
    role: "FE Lead Developer",
    description:
      "소품(poom) + Lucky : 소품샵 찾아주는 앱, 푸미입니다. 사용자가 선택한 분위기나 장소를 통해 맞춤 소품샵을 추천해줍니다. 기획팀, 디자인팀, 개발팀 총 10명으로 구성되어 앱스토어 배포를 목표로 한 사이드 프로젝트 입니다.",
    github: "https://github.com/Poomyproject",
    highlight: ["위치 기반 탐색 경험 구현", "앱 구조 및 사용자 흐름 설계"],
    details: [
     {
        title: "찜 목록 로컬 캐싱",
        why: "Problem : 찜 목록 조회 시 서버 통신 지연으로 초기 로딩 속도가 느린 문제 발생",
        content:
          "Solution : AsyncStorage 기반 로컬 캐싱을 도입해 **로컬 데이터를 우선 표시하고 이후 서버 데이터를 갱신**하는 방식으로 사용자 체감 속도를 개선.",
      },
      {
        title: "공통 API 클라이언트 설계",
        why: "Problem : API 호출마다 토큰 첨부 및 에러 처리를 반복 구현해야 하는 비효율 발생",
        content:
          "Solution : Axios interceptor로 **토큰 자동 첨부 및 공통 에러 처리 중앙화**. 팀원들이 별도 설정 없이 API를 호출할 수 있도록 공통 클라이언트를 설계해 코드 중복을 줄이고 유지보수성을 개선.",
      },
      {
        title: "사용자 피드백 기반 개선",
        why: "Problem : 앱 배포 전 실제 사용자 환경에서의 사용성 문제 확인 필요",
        content:
          "Solution : TestFlight를 통해 23명의 사용자 피드백을 수집하고, **게스트 로그인 도입 및 위치 상세 정보(출구, 거리) 제공 기능 추가** 등 사용자 경험 개선 및 버그 수정 진행.",
      },
    ],
    images: [
      { label: "구현한 프론트엔드 UI", src: PoomyImage1 },
      { label: "구현한 프론트엔드 UI", src: PoomyImage2 },
    ],
  },
};
