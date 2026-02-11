"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiGit,
  SiFigma,
  SiFirebase,
  SiVercel,
  SiExpo,
} from "react-icons/si";

const skills = [
  { name: "React", icon: SiReact, color: "text-blue-400" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
  { name: "expo", icon: SiExpo, color: "text-black" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-400" },
  { name: "Git", icon: SiGit, color: "text-orange-500" },
  { name: "Figma", icon: SiFigma, color: "text-pink-500" },
  { name: "Firebase", icon: SiFirebase, color: "text-yellow-500" },
  { name: "Vercel", icon: SiVercel, color: "text-white" },
];

export default function Skills() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.5, rotate: -180 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id='skills'
      className='py-32 px-6 bg-stone-950/50'>
      <motion.div
        ref={ref}
        className='max-w-6xl mx-auto'
        variants={containerVariants}
        initial='hidden'
        animate={inView ? "visible" : "hidden"}>
        <motion.div
          className='text-center mb-12 md:mb-16'
          variants={itemVariants}>
          <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold mb-4 gradient-text'>
            Skills
          </h2>
          <div className='w-24 h-0.5 bg-stone-700 mx-auto' />
          <p className='text-stone-400 mt-4 md:mt-6 text-base md:text-lg px-4'>
            제가 사용하는 주요 기술 스택입니다
          </p>
        </motion.div>

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8'>
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                className='group relative'
                variants={itemVariants}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.2 }}>
                <div className='flex flex-col items-center justify-center p-6 rounded-lg bg-stone-900 border border-stone-800 hover:border-stone-700 transition-all duration-300 cursor-pointer'>
                  <Icon
                    className={`w-12 h-12 ${skill.color} mb-3 group-hover:scale-125 transition-transform duration-300`}
                  />
                  <span className='text-sm font-semibold text-stone-300 group-hover:text-stone-100 transition-colors'>
                    {skill.name}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 추가 기술 태그 */}
        <motion.div
          className='mt-16 flex flex-wrap justify-center gap-4'
          variants={itemVariants}>
          {["HTML5", "CSS3", "Python", "C"].map((tech, index) => (
            <motion.span
              key={tech}
              className='px-4 py-2 rounded-lg bg-stone-900 border border-stone-800 text-stone-400 text-sm font-medium'
              initial={{ opacity: 0, scale: 0 }}
              animate={
                inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
              }
              transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
              whileHover={{
                scale: 1.1,
                borderColor: "rgba(249, 115, 22, 0.3)",
              }}>
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
