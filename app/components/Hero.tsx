"use client";

import { motion } from "framer-motion";
import { useState } from "react";

interface Particle {
  initialX: number;
  initialY: number;
  targetX: number;
  targetY: number;
  duration: number;
}

export default function Hero() {
  // 파티클 초기 위치와 애니메이션 값을 lazy initialization으로 생성
  const [particles] = useState<Particle[]>(() => {
    if (typeof window === "undefined") return [];
    return Array.from({ length: 20 }, () => ({
      initialX: Math.random() * window.innerWidth,
      initialY: Math.random() * window.innerHeight,
      targetX: Math.random() * window.innerWidth,
      targetY: Math.random() * window.innerHeight,
      duration: Math.random() * 10 + 10,
    }));
  });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <section className='relative min-h-screen flex items-center justify-center overflow-hidden'>
      {/* 애니메이션 배경 */}
      <div className='absolute inset-0 animated-gradient opacity-20' />

      {/* 파티클 효과 */}
      {particles.length > 0 && (
        <div className='absolute inset-0 overflow-hidden'>
          {particles.map((particle, i) => (
            <motion.div
              key={i}
              className='absolute w-2 h-2 bg-stone-600 rounded-full opacity-20'
              initial={{
                x: particle.initialX,
                y: particle.initialY,
              }}
              animate={{
                y: [null, particle.targetY],
                x: [null, particle.targetX],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>
      )}

      {/* 메인 컨텐츠 */}
      <motion.div
        className='relative z-10 max-w-5xl mx-auto px-6 text-center'
        variants={containerVariants}
        initial='hidden'
        animate='visible'>
        <motion.div variants={itemVariants}>
          <motion.p
            className='text-base sm:text-lg md:text-xl lg:text-2xl text-stone-300 mb-8 sm:mb-12 max-w-2xl mx-auto px-4'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}>
            창의적이고 혁신적인 웹 경험을 만들어갑니다
            <br className='hidden sm:block' />
            <span className='gradient-text-blue text-sm sm:text-base md:text-lg lg:text-xl block sm:inline'>
              사용자 중심의 디자인과 최신 기술을 결합합니다
            </span>
          </motion.p>
        </motion.div>

        <motion.div
          className='flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4'
          variants={itemVariants}>
          <motion.button
            onClick={() => scrollToSection("projects")}
            className='w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-stone-800 border border-stone-700 rounded-lg text-stone-100 font-semibold text-base sm:text-lg hover:border-orange-500 hover:text-orange-500 transition-all duration-300'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}>
            프로젝트 보기
          </motion.button>
          <motion.button
            onClick={() => scrollToSection("contact")}
            className='w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 border-2 border-stone-700 rounded-lg text-stone-300 font-semibold text-base sm:text-lg hover:border-stone-600 hover:bg-stone-800 transition-all duration-300'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}>
            연락하기
          </motion.button>
        </motion.div>
      </motion.div>

      {/* 스크롤 인디케이터 */}
      <motion.div
        className='absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}>
        <motion.div
          className='w-6 h-10 border-2 border-stone-600 rounded-full flex justify-center p-2 cursor-pointer hover:border-orange-500 transition-colors'
          onClick={() => scrollToSection("about")}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}>
          <motion.div
            className='w-1 h-3 bg-stone-500 rounded-full'
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
