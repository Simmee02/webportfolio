import { motion } from "framer-motion";
import type { Project } from "@/data/projects";

type Props = {
  project: Project;
  onClick: () => void;
  index: number;
};

export default function ProjectCard({ project, onClick, index }: Props) {
  return (
    <motion.div
      className="bg-white rounded-2xl p-6 cursor-pointer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      onClick={onClick}
    >
      <p className={`text-xs mb-3 ${project.categoryColor ?? "text-gray-400"}`}>
        {project.category}
      </p>
      <h3 className="text-lg font-bold text-main-black mb-1 whitespace-pre-line">
        {project.title}
      </h3>
      <p className="text-xs text-gray-400 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.stacks.map((stack, j) => (
          <span
            key={j}
            className={`text-xs border px-3 py-1 rounded-full ${project.tagColor ?? "border-gray-300 text-gray-600"}`}
          >
            {stack}
          </span>
        ))}
      </div>

      {project.techImages && (
        <div className="flex flex-wrap items-center gap-3 pt-4 pb-10">
          {project.techImages.map((img, j) => (
            <img key={j} src={img} className="w-8 h-8 object-contain" />
          ))}
        </div>
      )}
    </motion.div>
  );
}