"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function About() {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const strengths = [
    {
      title: "사용자 경험",
      description: "직관적이고 아름다운 인터페이스 설계",
    },
    {
      title: "성능 최적화",
      description: "빠르고 효율적인 웹 애플리케이션 개발",
    },
    {
      title: "반응형 디자인",
      description: "모든 디바이스에서 완벽한 경험 제공",
    },
    { title: "최신 기술", description: "최신 프레임워크와 도구 활용" },
  ];

  return (
    <section
      id='about'
      className='py-32 px-6 relative'>
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
            About Me
          </h2>
          <div className='w-24 h-0.5 bg-stone-700 mx-auto' />
        </motion.div>

        <div className='grid md:grid-cols-2 gap-12 items-center'>
          {/* 프로필 이미지 영역 */}
          <motion.div
            className='relative'
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}>
            <div className='relative w-full aspect-square max-w-md mx-auto'>
              {/* 그라데이션 보더 */}
              <div className='absolute inset-0 bg-stone-800 rounded-full blur-xl opacity-30' />

              {/* 프로필 이미지 컨테이너 */}
              <div className='relative w-full h-full rounded-full overflow-hidden border-2 border-stone-700'>
                <div className='w-full h-full rounded-full bg-stone-900 flex items-center justify-center'>
                  <div className='text-6xl font-bold text-stone-100'>
                    홍석준
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 자기소개 텍스트 */}
          <motion.div
            className='space-y-4 md:space-y-6'
            variants={itemVariants}>
            <p className='text-base sm:text-lg md:text-xl text-stone-300 leading-relaxed'>
              안녕하세요! 저는 프론트엔드 개발자
              <span className='font-bold text-stone-100'> 홍석준</span>
              입니다. 사용자에게 최고의 경험을 제공하는 것을 목표로 하며,
              아름답고 기능적인 웹 애플리케이션을 만드는 것을 좋아합니다.
            </p>
            <p className='text-base sm:text-lg md:text-xl text-stone-300 leading-relaxed'>
              코드의 품질과 사용자 경험을 동시에 고려하며, 최신 기술 트렌드를
              학습하고 적용하는 것에 열정을 가지고 있습니다.
            </p>

            {/* 주요 강점 */}
            <div className='grid grid-cols-2 gap-4 mt-8'>
              {strengths.map((strength, index) => (
                <motion.div
                  key={index}
                  className='p-6 rounded-lg bg-stone-900 border border-stone-800 hover:border-stone-700 transition-all duration-300'
                  whileHover={{ scale: 1.05, y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ delay: 0.4 + index * 0.1 }}>
                  <h3 className='text-lg font-semibold gradient-text-blue mb-2'>
                    {strength.title}
                  </h3>
                  <p className='text-sm text-stone-400'>
                    {strength.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
