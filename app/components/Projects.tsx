"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { projects, Project } from "../data/projects";
import { FiGithub, FiExternalLink } from "react-icons/fi";

export default function Projects() {
  const router = useRouter();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const ProjectCard = ({ project }: { project: Project }) => {
    const handleCardClick = (e: React.MouseEvent) => {
      // 링크 버튼 클릭 시에는 라우팅하지 않음
      if ((e.target as HTMLElement).closest("a")) {
        return;
      }
      router.push(`/projects/${project.id}`);
    };

    return (
      <motion.div
        onClick={handleCardClick}
        className='group relative bg-stone-900 rounded-lg overflow-hidden border border-stone-800 hover:border-stone-700 transition-all duration-300 cursor-pointer'
        variants={itemVariants}
        whileHover={{ y: -10 }}
        initial={{ opacity: 0, rotateY: -15 }}
        animate={
          inView ? { opacity: 1, rotateY: 0 } : { opacity: 0, rotateY: -15 }
        }
        transition={{ duration: 0.6 }}>
        {/* 썸네일 영역 */}
        <div className='relative h-48 bg-stone-800 overflow-hidden'>
          <div className='absolute inset-0 flex items-center justify-center'>
            {project.logoImg ? (
              <div className='relative w-full h-full flex items-center justify-center p-8'>
                <Image
                  src={project.logoImg}
                  alt={`${project.title} 로고`}
                  fill
                  className='object-contain'
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                />
              </div>
            ) : (
              <div className='text-6xl font-bold text-white/20'>
                {project.title.charAt(0)}
              </div>
            )}
          </div>
          <div className='absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4'>
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all transform hover:scale-110'>
                <FiGithub className='w-6 h-6 text-white' />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='p-3 bg-white/10 rounded-full hover:bg-white/20 transition-all transform hover:scale-110'>
                <FiExternalLink className='w-6 h-6 text-white' />
              </a>
            )}
          </div>
        </div>

        {/* 콘텐츠 영역 */}
        <div className='p-6'>
          <div className='flex items-start justify-between mb-3'>
            <h3 className='text-xl font-bold gradient-text-blue'>
              {project.title}
            </h3>
            {project.featured && (
              <span className='px-3 py-1 text-xs font-semibold bg-orange-500 rounded-lg text-white'>
                Featured
              </span>
            )}
          </div>
          <p className='text-stone-400 mb-4 text-sm leading-relaxed'>
            {project.description}
          </p>

          {/* 기술 스택 */}
          <div className='flex flex-wrap gap-2'>
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className='px-3 py-1 text-xs bg-stone-800 text-stone-400 rounded-lg border border-stone-700'>
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* 글로우 효과 */}
        <div className='absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/5 transition-all duration-300 pointer-events-none' />
      </motion.div>
    );
  };

  return (
    <section
      id='projects'
      className='py-32 px-6'>
      <motion.div
        ref={ref}
        className='max-w-7xl mx-auto'
        variants={containerVariants}
        initial='hidden'
        animate={inView ? "visible" : "hidden"}>
        <motion.div
          className='text-center mb-12 md:mb-16'
          variants={itemVariants}>
          <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold mb-4 gradient-text'>
            Projects
          </h2>
          <div className='w-24 h-0.5 bg-stone-700 mx-auto' />
          <p className='text-stone-400 mt-4 md:mt-6 text-base md:text-lg px-4'>
            제가 작업한 주요 프로젝트들을 소개합니다
          </p>
        </motion.div>

        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
