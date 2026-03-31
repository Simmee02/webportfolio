import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import bubble1 from "@/assets/img_bubble_01.png";
import bubble2 from "@/assets/img_bubble_02.png";
import about01 from "@/assets/img_about_01.png";
import about02 from "@/assets/img_about_02.png";
import about03 from "@/assets/img_about_03.png";
import about04 from "@/assets/img_about_04.png";
import imgGithub from "@/assets/logos/img_github.png";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects"; 

/// 메인 키워드 버블 요소
type KeywordItem = {
  type: "keyword";
  text: string;
  dark: boolean;
  rotate: number;
  x?: number;
  y?: number;
};

type BubbleItem = {
  type: "bubble";
  src: string;
  rotate: number;
  x?: number;
  y?: number;
};

type Item = KeywordItem | BubbleItem;

// 프로젝트 카드 요소
type Project = {
  category: string;
  title: string;
  description: string;
  stacks: string[];
  subtitle?: string;
};

const items: Item[] = [
  { type: "keyword", text: "Proactive", dark: true, rotate: -50, x: 34, y: 58 },
  { type: "bubble", src: bubble1, rotate: 0, x: 10, y: 0 },
  {
    type: "keyword",
    text: "Frontend Developer",
    dark: false,
    rotate: -16,
    x: -120,
    y: 80,
  },
  {
    type: "keyword",
    text: "Problem Solver",
    dark: false,
    rotate: 12,
    x: -220,
    y: -4,
  },
  {
    type: "keyword",
    text: "AI Integration",
    dark: true,
    rotate: 23,
    x: 300,
    y: -26,
  },
  {
    type: "keyword",
    text: "User-Centered",
    dark: false,
    rotate: -5,
    x: -75,
    y: 20,
  },
  { type: "bubble", src: bubble2, rotate: -8, x: -86, y: 50 },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay },
  }),
};

function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  if (!project) return null;
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="bg-white rounded-3xl w-[700px] max-h-[85vh] overflow-y-auto p-12 relative"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="absolute top-6 right-6 text-gray-400 hover:text-gray-700 text-xl"
            onClick={onClose}
          >
            ✕
          </button>

          <h2 className="text-3xl font-bold text-main-blue text-center whitespace-pre-line mb-2">
            {project.title}
          </h2>
          <p className="text-sm text-gray-400 text-center mb-6">
            {project.subtitle}
          </p>
          <p className="text-sm text-gray-600 text-center mb-8">
            {project.description}
          </p>
          <p className="text-sm text-gray-400 text-center">내용 추가 예정</p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Main() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="bg-[#F6F6F6]">
      {/* 메인 섹션 */}
      <div className="relative h-screen overflow-hidden">
        <div className="mt-30 mx-20 max-w-3xl">
          <p className="text-main-blue text-2xl font-medium mb-3">Portfolio</p>
          <h1 className="text-4xl mb-4 text-main-black">
            <span className="font-medium">안녕하세요.</span>
            <br />
            <span className="font-bold">사용자의 시선에서 문제를 발견</span>
            <span className="font-medium">하고</span>
            <br />
            <span className="font-medium">기술로 </span>
            <span className="font-bold">해결</span>
            <span className="font-medium">하는 개발자 </span>
            <span className="font-bold">심지영</span>
            <span className="font-medium">입니다.</span>
          </h1>
          <p className="text-xl text-[#ACACAC] font-medium">
            웹/앱 개발 경험을 보유하고 있으며,
            <br />
            코드 구조를 이해하고 품질을 개선하는 개발자를 목표로 하고 있습니다.
          </p>
        </div>

        <div className="absolute bottom-24 right-18 flex flex-wrap max-w-4xl justify-end items-end">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{
                y: -200,
                opacity: 0,
                rotate: item.rotate,
                x: item.x ?? 0,
              }}
              animate={{
                y: item.y ?? 0,
                opacity: 1,
                rotate: item.rotate,
                x: item.x ?? 0,
              }}
              transition={{
                delay: i * 0.15,
                type: "spring",
                stiffness: 70,
                damping: 8,
              }}
            >
              {item.type === "keyword" ? (
                <div
                  className={`
                  ${item.dark ? "bg-main-black" : "bg-main-blue"}
                  text-white px-10 py-4 rounded-full text-2xl font-extralight whitespace-nowrap
                `}
                >
                  {item.text}
                </div>
              ) : (
                <img src={item.src} className="w-18 h-18 object-contain" />
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* About 섹션 */}
      <div className="px-20 py-20">
        <p className="text-main-blue text-2xl font-medium mb-2">About</p>
        <p className="text-s text-gray-400 mb-8">
          다양한 프로젝트와 인턴십을 통해 역량을 쌓아왔습니다.
        </p>

        <div className="grid grid-cols-2 gap-6">
          <div className="flex flex-col gap-6">
            <motion.div
              className="bg-white rounded-2xl p-6 h-full"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              custom={0}
              viewport={{ once: true }}
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2 mb-4">
                  <img src={about01} className="w-6 h-6 object-contain" />
                  <p className="text-sm font-medium text-gray-400 tracking-widest uppercase">
                    Education
                  </p>
                </div>
                <div>
                  <p className="text-base font-medium text-gray-900">
                    성신여자대학교
                  </p>
                  <p className="text-base text-gray-500">
                    2021.03 ~ 2026.08 (졸업예정)
                  </p>
                  <p className="text-sm text-gray-400">
                    주전공 서비스디자인공학과 · 복수전공 AI융합학부
                  </p>
                </div>
                <div className="border-t border-gray-100 pt-4">
                  <p className="text-base font-medium text-gray-900">
                    Google 머신러닝 부트캠프 2024
                  </p>
                  <p className="text-base text-gray-500">수료</p>
                  <p className="text-sm text-gray-400">
                    신조어 생성 언어 모델 개발 (Gemma 파인튜닝)
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl p-6"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              custom={0.1}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 mb-4">
                <img src={about03} className="w-6 h-6 object-contain" />
                <p className="text-sm font-medium text-gray-400 tracking-widest uppercase">
                  Skills
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <div>
                  <p className="text-sm text-gray-400 mb-1">Languages</p>
                  <p className="text-base text-gray-900">
                    JavaScript · TypeScript · Python · HTML · CSS
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Frontend</p>
                  <p className="text-base text-gray-900">
                    React{" "}
                    <span className="text-gray-400 text-sm">
                      — 신한투자증권, 청소연구소 웹 개발
                    </span>
                  </p>
                  <p className="text-base text-gray-900">
                    React-Native{" "}
                    <span className="text-gray-400 text-sm">
                      — Poomy 앱 개발
                    </span>
                  </p>
                  <p className="text-base text-gray-900">
                    Tailwind · Framer Motion · Zustand · Axios
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-1">Infra</p>
                  <p className="text-base text-gray-900">
                    AWS EC2 · S3 · CloudFront · Vercel
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="flex flex-col gap-6">
            <motion.div
              className="bg-white rounded-2xl p-6"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              custom={0.2}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 mb-4">
                <img src={about02} className="w-6 h-6 object-contain" />
                <p className="text-sm font-medium text-gray-400 tracking-widest uppercase">
                  Internship
                </p>
              </div>
              <div>
                <div className="flex justify-between items-start mb-2">
                  <p className="text-base font-medium text-gray-900">
                    신한투자증권
                  </p>
                  <span className="text-sm text-gray-400">2025.03 ~ 08</span>
                </div>
                <p className="text-sm text-gray-500 mb-2">블록체인부 Tech 팀</p>
                <div className="flex flex-col gap-2">
                  <p className="text-base text-gray-900 pl-3 relative mt-1">
                    <span className="absolute left-0 text-gray-400">•</span>
                    제휴사{" "}
                    <mark className="bg-blue-100 text-gray-900 px-1">
                      API 연동 및 트러블슈팅
                    </mark>
                  </p>
                  <p className="text-base text-gray-900 pl-4 relative">
                    <span className="absolute left-0 text-gray-400">•</span>
                    부서 홈페이지
                    <mark className="bg-blue-100 text-gray-900 px-1">
                      리팩토링
                    </mark>
                  </p>
                  <p className="text-base text-gray-900 pl-3 relative">
                    <span className="absolute left-0 text-gray-400">•</span>
                    테스트 환경 내
                    <mark className="bg-blue-100 text-gray-900 px-1">
                      DB 관리
                    </mark>{" "}
                    업무 지원
                  </p>
                  <p className="text-base text-gray-900 pl-3 relative">
                    <span className="absolute left-0 text-gray-400">•</span>
                    토큰증권 기반 신사업 기획 및 기술 리서치
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl p-6"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              custom={0.3}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 mb-4">
                <img src={about04} className="w-6 h-6 object-contain" />
                <p className="text-sm font-medium text-gray-400 tracking-widest uppercase">
                  Awards
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center">
                  <p className="text-base text-gray-900">
                    신한스퀘어브릿지 해커톤
                  </p>
                  <span className="text-sm font-medium bg-gray-100 text-gray-700 px-3 py-1 rounded-md">
                    대상
                  </span>
                </div>
                <div className="border-t border-gray-100 pt-4 flex justify-between items-center">
                  <p className="text-base text-gray-900">
                    프로보노 ICT멘토링 공모전
                  </p>
                  <span className="text-sm font-medium bg-gray-100 text-gray-700 px-3 py-1 rounded-md">
                    금상
                  </span>
                </div>
                <div className="border-t border-gray-100 pt-4 flex justify-between items-center">
                  <p className="text-base text-gray-900">
                    DPG AI Challenge 2024
                  </p>
                  <span className="text-sm font-medium bg-gray-100 text-gray-700 px-3 py-1 rounded-md">
                    장려상
                  </span>
                </div>
                <div className="border-t border-gray-100 pt-4 pb-2 flex justify-between items-center">
                  <p className="text-base text-gray-900">
                    교내 IT 경진대회 (2023, 2024)
                  </p>
                  <span className="text-sm font-medium bg-gray-100 text-gray-700 px-3 py-1 rounded-md">
                    우수상
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Projects 섹션 */}
      <div className="px-20 py-20">
        <p className="text-main-blue text-2xl font-medium mb-2">Projects</p>
        <p className="text-gray-400 text-s mb-8">
          각 프로젝트의 세부 내용을 확인해보세요.
        </p>

        <div className="grid grid-cols-3 gap-4">
          {projects.map((project, i) => (
            <ProjectCard
              key={i}
              project={project}
              index={i}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      {/* Contact 섹션 */}
      <div className="px-20 py-20">
        <p className="text-main-blue text-2xl font-medium mb-2">Contact me.</p>
        <p className="text-gray-400 text-s mb-8">
          더 궁금한 내용이 있다면 연락주세요.
        </p>

        <div className="grid grid-cols-2 gap-4">
          <a
            href="https://github.com/Simmee02"
            target="_blank"
            className="bg-white rounded-2xl px-8 py-5 flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <img src={imgGithub} className="w-8 h-8" />
              <span className="text-lg font-bold text-main-black">
                깃허브 바로가기
              </span>
              <span className="text-sm text-gray-400">
                go to Simmee02's Github
              </span>
            </div>
            <div className="bg-main-blue rounded-full w-10 h-10 flex items-center justify-center text-white">
              →
            </div>
          </a>

          <a
            href="mail to:jysim07@gmail.com"
            className="bg-white rounded-2xl px-8 py-5 flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <span className="text-lg font-bold text-main-black">
                메일 보내기
              </span>
              <span className="text-sm text-gray-400">
                send e-mail to jysim07@gmail.com
              </span>
            </div>
            <div className="bg-main-blue rounded-full w-10 h-10 flex items-center justify-center text-white">
              →
            </div>
          </a>
        </div>
      </div>

      {/* 팝업 */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
