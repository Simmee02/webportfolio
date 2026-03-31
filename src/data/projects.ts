import imgReact from '@/assets/logos/img_react.png'
import imgTs from '@/assets/logos/img_ts.png'
import imgJs from '@/assets/logos/img_js.png'
import imgTail from '@/assets/logos/img_tail.png'
import imgFm from '@/assets/logos/img_fm.png'
import imgGithub from '@/assets/logos/img_github.png'
import imgVercel from '@/assets/logos/img_vercel.png'
import imgAws from '@/assets/logos/img_aws.png'

export type Project = {
  category: string;
  title: string;
  description: string;
  stacks: string[];
  subtitle?: string;
  categoryColor?: string; // 카테고리 텍스트 색상
  tagColor?: string; // 태그 테두리/텍스트 색상
  techImages?: string[];
};

export const projects: Project[] = [
  {
    category: "해커톤",
    title: "청소 연구소 [우리집]\n FE 개발자",
    description: "청소 서비스 고도화 및 신규 기능 전략 제안",
    stacks: ["React", "TypeScript", "JavaScript"],
    subtitle: "청소 외주 플랫폼 서비스 고도화 프로젝트",
    categoryColor: "text-main-blue",
    tagColor: "border-main-blue text-main-blue",
    techImages: [imgReact, imgTs, imgJs, imgTail, imgGithub, imgAws],
  },
  {
    category: "인턴십",
    title: "신한투자증권 블록체인부\n홈페이지 리뉴얼",
    description: "레거시 코드 리팩토링 및 배포 자동화 구축",
    stacks: ["React", "TypeScript"],
    subtitle: "인턴 개인 프로젝트",
    categoryColor: "text-purple-400",
    tagColor: "border-purple-400 text-purple-400",
    techImages: [imgReact, imgTs, imgTail, imgFm, imgVercel, imgGithub],
  },
  {
    category: "사이드 프로젝트",
    title: "POOMY \n FE 리드 개발자",
    description: "위치 기반 소품샵 추천 어플 개발",
    stacks: ["React Native", "JavaScript", "ios"],
    subtitle: "소품샵 찾아주는 앱, 푸미",
    categoryColor: "text-orange-400",
    tagColor: "border-orange-400 text-orange-400",
    techImages: [imgReact, imgTs, imgGithub],
  },
];
