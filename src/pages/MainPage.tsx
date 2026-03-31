import { useState } from "react";
import { motion } from "framer-motion";
import bubble1 from "@/assets/img_bubble_01.png";
import bubble2 from "@/assets/img_bubble_02.png";
import about01 from "@/assets/img_about_01.png";
import about02 from "@/assets/img_about_02.png";
import about03 from "@/assets/img_about_03.png";
import about04 from "@/assets/img_about_04.png";
import imgGithub from "@/assets/logos/img_github.png";
import imgMail from "@/assets/img_mail.png";
import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";
import { projects } from "@/data/projects";
import { projectDetails, type ProjectDetail } from "@/data/projectDetails";

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

const items: Item[] = [
  { type: "keyword", text: "Proactive", dark: true, rotate: -50, x: 34, y: 58 },
  { type: "bubble", src: bubble1, rotate: 0, x: 10, y: 0 },
  { type: "keyword", text: "Frontend Developer", dark: false, rotate: -16, x: -120, y: 80 },
  { type: "keyword", text: "Problem Solver", dark: false, rotate: 12, x: -220, y: -4 },
  { type: "keyword", text: "AI Integration", dark: true, rotate: 23, x: 300, y: -26 },
  { type: "keyword", text: "User-Centered", dark: false, rotate: -5, x: -375, y: 20 },
  { type: "bubble", src: bubble2, rotate: -8, x: -386, y: 50 },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay },
  }),
};

export default function Main() {
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);

  const handleOpenProject = (projectId: string) => {
    const detail = projectDetails[projectId];
    if (!detail) {
      console.log("상세 데이터 없음:", projectId);
      return;
    }
    setSelectedProject(detail);
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
  };

  return (
    <div className="bg-[#F6F6F6]">
      {/* 메인 섹션 */}
      <div className="relative min-h-screen overflow-hidden md:h-screen">
        <div className="px-6 pt-12 max-w-3xl sm:px-8 md:mt-16 md:mx-20 md:px-0">
          <p className="text-main-blue text-base font-medium mb-3 sm:text-lg md:text-xl">
            Portfolio
          </p>

          <h1 className="text-2xl leading-[1.25] mb-4 text-main-black sm:text-3xl md:text-4xl md:leading-tight">
            <span className="font-medium">안녕하세요.</span>
            <br />
            <span className="font-bold break-keep">
              사용자의 시선에서 문제를 발견
            </span>
            <span className="font-medium">하고</span>
            <br />
            <span className="font-medium">기술로 </span>
            <span className="font-bold">해결</span>
            <span className="font-medium">하는 개발자 </span>
            <span className="font-bold">심지영</span>
            <span className="font-medium">입니다.</span>
          </h1>

          <p className="text-xs leading-6 text-[#ACACAC] font-medium sm:text-sm sm:leading-7 md:text-base break-keep">
            웹/앱 개발 경험을 보유하고 있으며,
            <br />
            코드 구조를 이해하고 품질을 개선하는 개발자를 목표로 하고 있습니다.
          </p>
        </div>

        {/* 모바일에서는 버블 숨김 */}
        <div className="hidden md:flex absolute bottom-24 right-18 flex-wrap max-w-4xl justify-end items-end">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ y: -200, opacity: 0, rotate: item.rotate, x: item.x ?? 0 }}
              animate={{ y: item.y ?? 0, opacity: 1, rotate: item.rotate, x: item.x ?? 0 }}
              transition={{ delay: i * 0.15, type: "spring", stiffness: 70, damping: 8 }}
            >
              {item.type === "keyword" ? (
                <div className={`${item.dark ? "bg-main-black" : "bg-main-blue"} text-white px-10 py-4 rounded-full text-xl font-extralight whitespace-nowrap`}>
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
      <div className="px-6 py-12 sm:px-8 md:px-20 md:py-20">
        <p className="text-main-blue text-lg font-medium mb-2 md:text-xl">
          About
        </p>
        <p className="text-xs text-gray-400 mb-8 md:text-sm break-keep">
          다양한 프로젝트와 인턴십을 통해 역량을 쌓아왔습니다.
        </p>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
          <div className="flex flex-col gap-5 md:gap-6">
            <motion.div
              className="bg-white rounded-2xl p-4 sm:p-5 md:p-6 h-full"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              custom={0}
              viewport={{ once: true }}
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2 mb-2 md:mb-4">
                  <img src={about01} className="w-5 h-5 md:w-6 md:h-6 object-contain" />
                  <p className="text-xs font-medium text-gray-400 tracking-widest uppercase">
                    Education
                  </p>
                </div>

                <div>
                  <p className="text-xs sm:text-sm font-medium text-gray-900 break-keep">
                    성신여자대학교
                  </p>
                  <p className="text-xs text-gray-500 md:text-sm">
                    2021.03 ~ 2026.08 (졸업예정)
                  </p>
                  <p className="text-xs leading-6 text-gray-400 break-keep">
                    주전공 서비스디자인공학과 · 복수전공 AI융합학부
                  </p>
                </div>

                <div className="border-t border-gray-100 pt-4">
                  <p className="text-xs sm:text-sm font-medium text-gray-900 break-keep">
                    Google 머신러닝 부트캠프 2024
                  </p>
                  <p className="text-xs text-gray-500 md:text-sm">수료</p>
                  <p className="text-xs leading-6 text-gray-400 break-keep">
                    신조어 생성 언어 모델 개발 (Gemma 파인튜닝)
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl p-4 sm:p-5 md:p-6"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              custom={0.1}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 mb-2 md:mb-4">
                <img src={about03} className="w-5 h-5 md:w-6 md:h-6 object-contain" />
                <p className="text-xs font-medium text-gray-400 tracking-widest uppercase">
                  Skills
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <div>
                  <p className="text-xs text-gray-400 mb-1">Languages</p>
                  <p className="text-xs leading-6 text-gray-900 md:text-sm break-keep">
                    JavaScript · TypeScript · Python · HTML · CSS
                  </p>
                </div>

                <div>
                  <p className="text-xs text-gray-400 mb-1">Frontend</p>
                  <p className="text-xs leading-6 text-gray-900 md:text-sm break-keep">
                    React{" "}
                    <span className="text-gray-400 text-xs">— 신한투자증권, 청소연구소 웹 개발</span>
                  </p>
                  <p className="text-xs leading-6 text-gray-900 md:text-sm break-keep">
                    React-Native{" "}
                    <span className="text-gray-400 text-xs">— Poomy 앱 개발</span>
                  </p>
                  <p className="text-xs leading-6 text-gray-900 md:text-sm break-keep">
                    Tailwind · Framer Motion · Zustand · Axios
                  </p>
                </div>

                <div>
                  <p className="text-xs text-gray-400 mb-1">Infra</p>
                  <p className="text-xs leading-6 text-gray-900 md:text-sm break-keep">
                    AWS EC2 · S3 · CloudFront · Vercel
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="flex flex-col gap-5 md:gap-6">
            <motion.div
              className="bg-white rounded-2xl p-4 sm:p-5 md:p-6"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              custom={0.2}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 mb-2 md:mb-4">
                <img src={about02} className="w-5 h-5 md:w-6 md:h-6 object-contain" />
                <p className="text-xs font-medium text-gray-400 tracking-widest uppercase">
                  Internship
                </p>
              </div>

              <div>
                <div className="flex flex-col gap-1 mb-2 sm:flex-row sm:justify-between sm:items-start">
                  <p className="text-xs sm:text-sm font-medium text-gray-900 break-keep">
                    신한투자증권
                  </p>
                  <span className="text-xs text-gray-400">2025.03 ~ 08</span>
                </div>

                <p className="text-xs text-gray-500 mb-3 break-keep">블록체인부 Tech 팀</p>

                <div className="flex flex-col gap-2">
                  <p className="text-xs leading-6 text-gray-900 pl-3 relative md:text-sm break-keep">
                    <span className="absolute left-0 text-gray-400">•</span>
                    제휴사{" "}
                    <mark className="bg-blue-100 text-gray-900 px-1">API 연동 및 트러블슈팅</mark>
                  </p>
                  <p className="text-xs leading-6 text-gray-900 pl-3 relative md:text-sm break-keep">
                    <span className="absolute left-0 text-gray-400">•</span>
                    부서 홈페이지{" "}
                    <mark className="bg-blue-100 text-gray-900 px-1">리팩토링</mark>
                  </p>
                  <p className="text-xs leading-6 text-gray-900 pl-3 relative md:text-sm break-keep">
                    <span className="absolute left-0 text-gray-400">•</span>
                    테스트 환경 내{" "}
                    <mark className="bg-blue-100 text-gray-900 px-1">DB 관리</mark>{" "}업무 지원
                  </p>
                  <p className="text-xs leading-6 text-gray-900 pl-3 relative md:text-sm break-keep">
                    <span className="absolute left-0 text-gray-400">•</span>
                    토큰증권 기반 신사업 기획 및 기술 리서치
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl p-4 sm:p-5 md:p-6"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              custom={0.3}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 mb-2 md:mb-4">
                <img src={about04} className="w-5 h-5 md:w-6 md:h-6 object-contain" />
                <p className="text-xs font-medium text-gray-400 tracking-widest uppercase">
                  Awards
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center gap-3">
                  <p className="text-xs text-gray-900 md:text-sm break-keep">신한스퀘어브릿지 해커톤</p>
                  <span className="shrink-0 text-xs font-medium bg-gray-100 text-gray-700 px-3 py-1 rounded-md">대상</span>
                </div>
                <div className="border-t border-gray-100 pt-4 flex justify-between items-center gap-3">
                  <p className="text-xs text-gray-900 md:text-sm break-keep">프로보노 ICT멘토링 공모전</p>
                  <span className="shrink-0 text-xs font-medium bg-gray-100 text-gray-700 px-3 py-1 rounded-md">금상</span>
                </div>
                <div className="border-t border-gray-100 pt-4 flex justify-between items-center gap-3">
                  <p className="text-xs text-gray-900 md:text-sm break-keep">DPG AI Challenge 2024</p>
                  <span className="shrink-0 text-xs font-medium bg-gray-100 text-gray-700 px-3 py-1 rounded-md">장려상</span>
                </div>
                <div className="border-t border-gray-100 pt-4 pb-2 flex justify-between items-center gap-3">
                  <p className="text-xs text-gray-900 md:text-sm break-keep">교내 IT 경진대회 (2023, 2024)</p>
                  <span className="shrink-0 text-xs font-medium bg-gray-100 text-gray-700 px-3 py-1 rounded-md">우수상</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Projects 섹션 */}
      <div className="px-6 py-12 sm:px-8 md:px-20 md:py-20">
        <p className="text-main-blue text-lg font-medium mb-2 md:text-xl">Projects</p>
        <p className="text-gray-400 text-xs mb-8 md:text-sm break-keep">
          각 프로젝트의 세부 내용을 확인해보세요.
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onClick={() => handleOpenProject(project.id)}
            />
          ))}
        </div>
      </div>

      {/* Contact 섹션 */}
      <div className="px-6 py-12 sm:px-8 md:px-20 md:py-20">
        <p className="text-main-blue text-lg font-medium mb-2 md:text-xl">Contact me.</p>
        <p className="text-gray-400 text-xs mb-8 md:text-sm break-keep">
          더 궁금한 내용이 있다면 연락주세요.
        </p>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <a
            href="https://github.com/Simmee02"
            target="_blank"
            rel="noreferrer"
            className="bg-white rounded-2xl px-4 py-4 sm:px-5 sm:py-5 md:px-8 flex items-center justify-between gap-4"
          >
            <div className="flex items-center gap-4 min-w-0">
              <img src={imgGithub} className="w-7 h-7 md:w-8 md:h-8 shrink-0" />
              <div className="min-w-0">
                <p className="text-xs sm:text-sm font-bold text-main-black break-keep">깃허브 바로가기</p>
                <p className="text-xs text-gray-400 truncate">go to Simmee02's Github</p>
              </div>
            </div>
            <div className="shrink-0 bg-main-blue rounded-full w-9 h-9 md:w-10 md:h-10 flex items-center justify-center text-white">→</div>
          </a>

          <a
            href="mailto:jysim07@gmail.com"
            className="bg-white rounded-2xl px-4 py-4 sm:px-5 sm:py-5 md:px-8 flex items-center justify-between gap-4"
          >
            <div className="flex items-center gap-4 min-w-0">
              <img src={imgMail} className="w-7 h-7 md:w-8 md:h-8 shrink-0" />
              <div className="min-w-0">
                <p className="text-xs sm:text-sm font-bold text-main-black break-keep">메일 보내기</p>
                <p className="text-xs text-gray-400 truncate">send e-mail to jysim07@gmail.com</p>
              </div>
            </div>
            <div className="shrink-0 bg-main-blue rounded-full w-9 h-9 md:w-10 md:h-10 flex items-center justify-center text-white">→</div>
          </a>
        </div>
      </div>

      <ProjectModal project={selectedProject} onClose={handleCloseProject} />
    </div>
  );
}