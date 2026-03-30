import { motion } from "framer-motion"
import bubble1 from '@/assets/img_bubble_01.png'
import bubble2 from '@/assets/img_bubble_02.png'

type KeywordItem = { type: 'keyword'; text: string; dark: boolean; rotate: number; x?: number; y?: number }
type BubbleItem = { type: 'bubble'; src: string; rotate: number; x?: number; y?: number }
type Item = KeywordItem | BubbleItem

const items: Item[] = [
  { type: 'keyword', text: "Proactive", dark: true, rotate: -50, x: 34, y: 58 },
  { type: 'bubble', src: bubble1, rotate: 0, x: 10, y: 0 },
  { type: 'keyword', text: "Frontend Developer", dark: false, rotate: -16, x: -120, y: 80 },
  { type: 'keyword', text: "Problem Solver", dark: false, rotate: 12, x: -220, y: -4 },
  { type: 'keyword', text: "AI Integration", dark: true, rotate: 23, x: 300, y: -26 },
  { type: 'keyword', text: "User-Centered", dark: false, rotate: -5, x: -75, y: 20 },
  { type: 'bubble', src: bubble2, rotate: -8, x: -86, y: 50 },
]

const projects = [
  {
    category: "제키몬",
    title: "청소 연구소 [우리집]",
    role: "FE 개발자",
    description: "청소 서비스 고도화 및 신규 기능 전략 제안",
    stacks: ["React", "TypeScript"],
  },
  {
    category: "인턴십",
    title: "신한투자증권 블록체인부\n홈페이지 리뉴얼",
    role: "",
    description: "웹 아키텍처 개선 및 배포 자동화 체계 구축",
    stacks: ["React", "TypeScript"],
  },
  {
    category: "사이드 프로젝트",
    title: "POOMY",
    role: "FE 리드 개발자",
    description: "위치 기반 소품샵 추천 어플 개발",
    stacks: ["React Native", "Python", "ios"],
  },
  {
    category: "공모전",
    title: "HEAROD",
    role: "Android 개발자",
    description: "수어 번역 어플",
    stacks: ["Kotlin", "openCV", "Mediapipe"],
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay }
  })
}

export default function Main() {
  return (
    <div className="bg-[#F6F6F6]">

      {/* 메인 섹션 */}
      <div className="relative h-screen overflow-hidden">
        <div className="mt-30 mx-20 max-w-3xl">
          <p className="text-main-blue text-2xl font-medium mb-3">Portfolio</p>
          <h1 className="text-4xl font-bold mb-4 text-main-black">
            안녕하세요.<br />
            사용자의 시선에서 문제를 발견하고<br />
            기술로 해결하는 개발자 심지영입니다.
          </h1>
          <p className="text-2xl text-[#ACACAC] font-semibold">
            웹/앱 개발 경험을 보유하고 있으며,<br />
            코드 구조를 이해하고 품질을 개선하는 개발자를 목표로 하고 있습니다.
          </p>
        </div>

        <div className="absolute bottom-24 right-18 flex flex-wrap max-w-4xl justify-end items-end">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ y: -200, opacity: 0, rotate: item.rotate, x: item.x ?? 0 }}
              animate={{ y: item.y ?? 0, opacity: 1, rotate: item.rotate, x: item.x ?? 0 }}
              transition={{
                delay: i * 0.15,
                type: "spring",
                stiffness: 70,
                damping: 8
              }}
            >
              {item.type === 'keyword' ? (
                <div className={`
                  ${item.dark ? "bg-main-black" : "bg-main-blue"}
                  text-white px-10 py-4 rounded-full text-2xl font-extralight whitespace-nowrap
                `}>
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
        <p className="text-sm text-gray-400 mb-8">다양한 프로젝트와 인턴십을 통해 역량을 쌓아왔습니다.</p>

        <div className="grid grid-cols-2 gap-6">

          {/* 왼쪽 */}
          <div className="flex flex-col gap-6">

            {/* Education */}
            <motion.div
              className="bg-white rounded-2xl p-6"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              custom={0}
              viewport={{ once: true }}
            >
              <p className="text-xs font-medium text-gray-400 tracking-widest uppercase mb-4">Education</p>
              <div className="flex flex-col gap-4">
                <div>
                  <p className="text-sm font-medium text-gray-900">성신여자대학교</p>
                  <p className="text-sm text-gray-500">2021.03 — 2026.08 졸업예정</p>
                  <p className="text-xs text-gray-400">주전공 서비스디자인공학과 · 복수전공 AI융합학부</p>
                </div>
                <div className="border-t border-gray-100 pt-4">
                  <p className="text-sm font-medium text-gray-900">Google 머신러닝 부트캠프 2024</p>
                  <p className="text-sm text-gray-500">수료</p>
                </div>
              </div>
            </motion.div>

            {/* Skills */}
            <motion.div
              className="bg-white rounded-2xl p-6"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              custom={0.1}
              viewport={{ once: true }}
            >
              <p className="text-xs font-medium text-gray-400 tracking-widest uppercase mb-4">Skills</p>
              <div className="flex flex-col gap-3">
                <div>
                  <p className="text-xs text-gray-400 mb-1">Languages</p>
                  <p className="text-sm text-gray-900">JavaScript · TypeScript · Python · HTML · CSS</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-1">Frontend</p>
                  <p className="text-sm text-gray-900">React <span className="text-gray-400 text-xs">— 신한투자증권, 청소연구소</span></p>
                  <p className="text-sm text-gray-900">React-Native <span className="text-gray-400 text-xs">— Poomy</span></p>
                  <p className="text-sm text-gray-900">Tailwind · Framer Motion</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-1">Infra</p>
                  <p className="text-sm text-gray-900">AWS EC2 · S3 · CloudFront · Vercel</p>
                </div>
              </div>
            </motion.div>

          </div>

          {/* 오른쪽 */}
          <div className="flex flex-col gap-6">

            {/* Internship */}
            <motion.div
              className="bg-white rounded-2xl p-6"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              custom={0.2}
              viewport={{ once: true }}
            >
              <p className="text-xs font-medium text-gray-400 tracking-widest uppercase mb-4">Internship</p>
              <div>
                <div className="flex justify-between items-start mb-2">
                  <p className="text-sm font-medium text-gray-900">신한투자증권</p>
                  <span className="text-xs text-gray-400">2025.03 — 08</span>
                </div>
                <p className="text-xs text-gray-500 mb-2">블록체인스크럼부 Tech 팀</p>
                <div className="flex flex-col gap-1">
                  <p className="text-sm text-gray-900 pl-3 relative"><span className="absolute left-0 text-gray-400">—</span>제휴사 API 연동 및 트러블슈팅</p>
                  <p className="text-sm text-gray-900 pl-3 relative"><span className="absolute left-0 text-gray-400">—</span>블록체인 기반 신사업 기획 및 리서치</p>
                  <p className="text-sm text-gray-900 pl-3 relative"><span className="absolute left-0 text-gray-400">—</span>부서 홈페이지 리팩토링 및 프론트엔드 개발</p>
                  <p className="text-sm text-gray-900 pl-3 relative"><span className="absolute left-0 text-gray-400">—</span>테스트 환경 내 DB 관리 업무 지원</p>
                </div>
              </div>
            </motion.div>

            {/* Awards */}
            <motion.div
              className="bg-white rounded-2xl p-6"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              custom={0.3}
              viewport={{ once: true }}
            >
              <p className="text-xs font-medium text-gray-400 tracking-widest uppercase mb-4">Awards</p>
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-900">신한스퀘어브릿지 해커톤</p>
                  <span className="text-xs font-medium bg-gray-100 text-gray-700 px-3 py-1 rounded-md">대상</span>
                </div>
                <div className="border-t border-gray-100 pt-3 flex justify-between items-center">
                  <p className="text-sm text-gray-900">프로보노 ICT멘토링 공모전</p>
                  <span className="text-xs font-medium bg-gray-100 text-gray-700 px-3 py-1 rounded-md">금상</span>
                </div>
                <div className="border-t border-gray-100 pt-3 flex justify-between items-center">
                  <p className="text-sm text-gray-900">DPG AI Challenge 2024</p>
                  <span className="text-xs font-medium bg-gray-100 text-gray-700 px-3 py-1 rounded-md">장려상</span>
                </div>
                <div className="border-t border-gray-100 pt-3 flex justify-between items-center">
                  <p className="text-sm text-gray-900">교내 IT 경진대회 (2023, 2024)</p>
                  <span className="text-xs font-medium bg-gray-100 text-gray-700 px-3 py-1 rounded-md">우수상</span>
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </div>

      {/* Projects 섹션 */}
<div className="px-20 py-20">
  <p className="text-main-blue text-2xl font-medium mb-2">Projects</p>
  <p className="text-gray-400 text-sm mb-8">각 프로젝트의 세부 내용을 확인해보세요.</p>

  <div className="grid grid-cols-4 gap-4">
    {projects.map((project, i) => (
      <motion.div
        key={i}
        className="bg-white rounded-2xl p-6 cursor-pointer"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: i * 0.1 }}
        whileHover={{ y: -4 }}
      >
        <p className="text-xs text-gray-400 mb-3">{project.category}</p>
        <h3 className="text-lg font-bold text-main-black mb-1 whitespace-pre-line">{project.title}</h3>
        <p className="text-sm font-medium text-main-blue mb-2">{project.role}</p>
        <p className="text-xs text-gray-400 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.stacks.map((stack, j) => (
            <span key={j} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
              {stack}
            </span>
          ))}
        </div>
      </motion.div>
    ))}
  </div>
</div>

    </div>
  )
}