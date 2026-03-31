import imgReact from "@/assets/logos/img_react.png";
import imgReactNative from "@/assets/logos/img_reactnative.png";
import imgTs from "@/assets/logos/img_ts.png";
import imgJs from "@/assets/logos/img_js.png";
import imgTail from "@/assets/logos/img_tail.png";
import imgFm from "@/assets/logos/img_fm.png";
import imgGithub from "@/assets/logos/img_github.png";
import imgVercel from "@/assets/logos/img_vercel.png";
import imgAws from "@/assets/logos/img_aws.png";
import imgFigma from "@/assets/logos/img_figma.png";
import imgPython from "@/assets/logos/img_python.png";

export type Project = {
  id: string;
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
    id: "1",
    category: "해커톤",
    title: "청소 연구소 [우리집]\n FE 개발자",
    description: "청소 서비스 고도화 및 신규 기능 전략 제안",
    stacks: ["React", "TypeScript", "JavaScript"],
    subtitle: "청소 외주 플랫폼 서비스 고도화 프로젝트",
    categoryColor: "text-[#27C6DB]",
    tagColor: "border-[#27C6DB] text-[#27C6DB]",
    techImages: [imgReact, imgTs, imgJs, imgTail, imgGithub, imgAws],
  },
  { 
    id: "2",
    category: "인턴십",
    title: "신한투자증권 블록체인부\n홈페이지 리뉴얼",
    description: "레거시 코드 리팩토링 및 배포 자동화 구축",
    stacks: ["React", "TypeScript"],
    subtitle: "인턴 개인 프로젝트",
    categoryColor: "text-[#0046FF]",
    tagColor: "border-[#0046FF] text-[#0046FF]",
    techImages: [imgReact, imgTs, imgTail, imgFm, imgVercel, imgGithub, imgFigma ],
  },
  {
    id: "3",
    category: "사이드 프로젝트",
    title: "POOMY \n FE 리드 개발자",
    description: "위치 기반 소품샵 추천 어플 개발",
    stacks: ["React Native", "JavaScript", "ios"],
    subtitle: "소품샵 찾아주는 앱, 푸미",
    categoryColor: "text-[#20AC67]",
    tagColor: "border-[#20AC67] text-[#20AC67]",
    techImages: [imgReactNative, imgJs, imgGithub, imgPython],
  },
];
