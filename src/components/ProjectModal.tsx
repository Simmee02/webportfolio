import { motion, AnimatePresence } from "framer-motion";
import type { ProjectDetail } from "@/data/projectDetails";

type ProjectModalProps = {
  project: ProjectDetail | null;
  onClose: () => void;
};

const projectThemeMap: Record<
  string,
  {
    titleColor: string;
    accentText: string;
    accentBg: string;
    accentBorder: string;
    whyText: string;
  }
> = {
  "1": {
    titleColor: "text-[#27C6DB]",
    accentText: "text-[#27C6DB]",
    accentBg: "bg-sky-50",
    accentBorder: "border-sky-100",
    whyText: "text-main-black",
  },
  "2": {
    titleColor: "text-[#0046FF]",
    accentText: "text-[#0046FF]",
    accentBg: "bg-blue-50",
    accentBorder: "border-blue-100",
    whyText: "text-main-black",
  },
  "3": {
    titleColor: "text-[#20AC67]",
    accentText: "text-[#20AC67]",
    accentBg: "bg-green-50",
    accentBorder: "border-green-100",
    whyText: "text-main-black",
  },
};

const defaultTheme = {
  titleColor: "text-main-blue",
  accentText: "text-main-blue",
  accentBg: "bg-blue-50",
  accentBorder: "border-blue-100",
  whyText: "text-main-black",
};

const renderHighlighted = (text: string, accentBg: string) => {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <mark key={i} className={`${accentBg} rounded px-0.5`}>
        {part}
      </mark>
    ) : (
      part
    ),
  );
};

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  const theme = projectThemeMap[project.id] ?? defaultTheme;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center px-3 sm:px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="bg-white rounded-3xl w-[92vw] max-w-[800px] max-h-[85vh] overflow-y-auto px-5 py-6 sm:px-6 sm:py-8 md:p-12 relative"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="absolute top-4 right-4 sm:top-6 sm:right-6 text-gray-400 hover:text-gray-700 text-lg sm:text-xl"
            onClick={onClose}
          >
            ✕
          </button>

          <h2
            className={`text-[26px] leading-[1.3] sm:text-3xl font-bold text-center whitespace-pre-line mb-2 ${theme.titleColor}`}
          >
            {project.title}
          </h2>

          <p className="text-xs sm:text-sm text-main-black text-center mb-2 break-keep">
            {project.subtitle}
          </p>

          <p
            className={`text-xs sm:text-sm text-center mb-6 text-gray-500 ${theme.accentText}`}
          >
            {project.period}
          </p>

          <div className="space-y-7 sm:space-y-8">
            <section>
              <h3 className="text-base sm:text-lg font-semibold text-main-black mb-3">
                프로젝트 소개
              </h3>

              <div className="bg-gray-100 rounded-2xl px-4 py-4 sm:px-6 sm:py-5">
                <div className="flex gap-3 sm:gap-4 items-start">
                  <span className="text-lg sm:text-xl mt-0.5 sm:mt-1 shrink-0">
                    💡
                  </span>

                  <p className="text-sm leading-6 text-gray-700 whitespace-pre-line md:text-base md:leading-7 break-keep">
                    {project.description}
                  </p>
                </div>

                {project.github && (
                  <div className="mt-4 pl-7 sm:pl-8">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-xs leading-6 text-gray-600 break-all hover:underline sm:text-sm"
                    >
                      ✨ GitHub : {project.github}
                    </a>
                  </div>
                )}
              </div>
            </section>

            <section>
              <h3 className="text-base sm:text-lg font-semibold text-main-black mb-3">
                주요 기여
              </h3>

              <div className="space-y-5">
                {project.details.map((detail, index) => (
                  <div
                    key={index}
                    className="border-t border-gray-100 pt-5 first:border-t-0 first:pt-0"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`text-lg ${theme.accentText}`}>•</span>
                      <p
                        className={`text-sm sm:text-base font-medium break-keep ${theme.accentText}`}
                      >
                        {detail.title}
                      </p>
                    </div>

                    <ul className="pl-4 space-y-1">
                      <li className="flex items-start gap-2">
                        <span className="text-gray-400 mt-1">•</span>
                        <p className="text-sm sm:text-base text-main-black leading-6 break-keep">
                          {detail.why}
                        </p>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-gray-400 mt-1">•</span>
                        <p className="text-sm leading-6 text-gray-700 md:text-base md:leading-7 break-keep">
                          {renderHighlighted(detail.content, theme.accentBg)}
                        </p>
                      </li>
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {project.images && project.images.length > 0 && (
              <section>
                <h3 className="text-base sm:text-lg font-semibold text-main-black mb-3">
                  화면 이미지
                </h3>

                <div
                  className={
                    project.images.length === 1
                      ? "space-y-4"
                      : "grid grid-cols-1 sm:grid-cols-2 gap-4"
                  }
                >
                  {project.images.map((image, index) => (
                    <div key={index}>
                      <p className="text-sm sm:text-base text-gray-400 mb-2 break-keep">
                        {image.label}
                      </p>

                      <div className="rounded-2xl overflow-hidden border border-gray-200">
                        <img
                          src={image.src}
                          alt={image.label}
                          className="w-full h-auto object-contain"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
