"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { FiGithub, FiLinkedin, FiMail, FiCopy, FiCheck } from "react-icons/fi";

const socialLinks = [
  {
    name: "GitHub",
    icon: FiGithub,
    url: "https://github.com/lastro1206",
    color: "hover:text-gray-300",
  },
  {
    name: "LinkedIn",
    icon: FiLinkedin,
    url: "https://www.linkedin.com/in/%EC%84%9D%EC%A4%80-%ED%99%8D-a34a01358/",
    color: "hover:text-blue-400",
  },
  {
    name: "GMAIL",
    icon: FiMail,
    url: "https://mail.google.com/mail/u/0/#inbox",
    color: "hover:text-blue-400",
  },
];

export default function Contact() {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [emailCopied, setEmailCopied] = useState(false);
  const email = "vnfmsrhdrks2005@gmail.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

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

  return (
    <section
      id='contact'
      className='py-32 px-6 bg-stone-950/50'>
      <motion.div
        ref={ref}
        className='max-w-4xl mx-auto text-center'
        variants={containerVariants}
        initial='hidden'
        animate={inView ? "visible" : "hidden"}>
        <motion.div variants={itemVariants}>
          <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold mb-4 gradient-text'>
            Contact
          </h2>
          <div className='w-24 h-0.5 bg-stone-700 mx-auto mb-6 md:mb-8' />
          <p className='text-stone-400 text-base md:text-lg mb-8 md:mb-12 px-4'>
            함께 일하고 싶으신가요? 언제든지 연락주세요!
          </p>
        </motion.div>

        {/* 이메일 복사 버튼 */}
        <motion.div
          className='mb-12'
          variants={itemVariants}>
          <motion.button
            onClick={copyEmail}
            className='group relative px-6 sm:px-8 md:px-10 py-4 sm:py-5 bg-stone-900 border border-stone-800 rounded-lg text-stone-100 font-semibold text-sm sm:text-base md:text-lg flex items-center gap-2 sm:gap-3 mx-auto hover:border-orange-500 hover:text-orange-500 transition-all duration-300'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}>
            <FiMail className='w-4 h-4 sm:w-5 sm:h-5' />
            <span className='break-all sm:break-normal'>{email}</span>
            {emailCopied ? (
              <FiCheck className='w-4 h-4 sm:w-5 sm:h-5 text-green-300 flex-shrink-0' />
            ) : (
              <FiCopy className='w-4 h-4 sm:w-5 sm:h-5 opacity-70 group-hover:opacity-100 flex-shrink-0' />
            )}
          </motion.button>
          {emailCopied && (
            <motion.p
              className='text-green-400 mt-2 text-sm'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}>
              이메일이 복사되었습니다!
            </motion.p>
          )}
        </motion.div>

        {/* 소셜 링크 */}
        <motion.div
          className='flex justify-center gap-6 flex-wrap'
          variants={itemVariants}>
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={social.name}
                href={social.url}
                target='_blank'
                rel='noopener noreferrer'
                className='group relative p-4 rounded-lg bg-stone-900 border border-stone-800 hover:border-stone-700 transition-all duration-300'
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}>
                <Icon
                  className={`w-6 h-6 text-stone-400 ${social.color} transition-colors`}
                />
                <span className='absolute -bottom-10 left-1/2 transform -translate-x-1/2 text-xs text-stone-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap'>
                  {social.name}
                </span>
              </motion.a>
            );
          })}
        </motion.div>

        {/* 하단 메시지 */}
        <motion.div
          className='mt-16 pt-8 border-t border-gray-800'
          variants={itemVariants}>
          <p className='text-stone-500 text-sm'>
            빠른 응답을 위해 이메일을 선호합니다. 보통 24시간 이내에
            답변드립니다.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
