"use client";

import { use } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import { projects } from "../../data/projects";
import { FiArrowLeft, FiGithub, FiExternalLink } from "react-icons/fi";

export default function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);
  const router = useRouter();
  const projectId = parseInt(resolvedParams.id);
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className='min-h-screen bg-stone-950 flex items-center justify-center'>
        <div className='text-center'>
          <h1 className='text-2xl font-bold text-stone-100 mb-4'>
            프로젝트를 찾을 수 없습니다
          </h1>
          <button
            onClick={() => router.push("/#projects")}
            className='px-6 py-3 bg-stone-800 border border-stone-700 rounded-lg text-stone-100 hover:border-orange-500 hover:text-orange-500 transition-all'>
            프로젝트 목록으로
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-stone-950 text-stone-100'>
      {/* 헤더 */}
      <motion.div className='sticky top-0 z-50 bg-stone-950/80 backdrop-blur-sm border-b border-stone-800'>
        <div className='max-w-6xl mx-auto px-6 py-4 flex items-center justify-between'>
          <button
            onClick={() => router.back()}
            className='flex items-center gap-2 px-4 py-2 border border-stone-700 rounded-lg text-stone-300 hover:border-orange-500 hover:text-orange-500 transition-all'>
            <FiArrowLeft className='w-4 h-4' />
            <span>뒤로가기</span>
          </button>
          <div className='flex gap-4'>
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='p-2 border border-stone-700 rounded-lg text-stone-300 hover:border-orange-500 hover:text-orange-500 transition-all'>
                <FiGithub className='w-5 h-5' />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='p-2 border border-stone-700 rounded-lg text-stone-300 hover:border-orange-500 hover:text-orange-500 transition-all'>
                <FiExternalLink className='w-5 h-5' />
              </a>
            )}
          </div>
        </div>
      </motion.div>

      {/* 메인 컨텐츠 */}
      <div className='max-w-6xl mx-auto px-6 py-16'>
        {/* 프로젝트 헤더 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='mb-12'>
          {/* 로고 이미지 또는 제목 */}
          {project.logoImg && (
            <div className='relative w-32 h-32 mb-6 mx-auto'>
              <Image
                src={project.logoImg}
                alt={`${project.title} 로고`}
                fill
                className='object-contain'
                sizes='128px'
              />
            </div>
          )}
          <div className='flex items-center gap-4 mb-4 justify-center'>
            {project.featured && (
              <span className='px-3 py-1 text-xs font-semibold bg-orange-500 rounded-lg text-white'>
                Featured
              </span>
            )}
            <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold text-stone-100'>
              {project.title}
            </h1>
          </div>
          <p className='text-xl text-stone-400 mb-6'>
            {project.longDescription}
          </p>

          {/* 기술 스택 */}
          <div className='flex flex-wrap gap-2'>
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className='px-4 py-2 bg-stone-900 border border-stone-800 text-stone-300 rounded-lg text-sm'>
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* 개발 상세 정보 */}
        {project.developmentDetails && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='space-y-12'>
            {/* 개요 */}
            <section>
              <h2 className='text-2xl font-bold text-stone-100 mb-4'>
                프로젝트 개요
              </h2>
              <p className='text-stone-300 leading-relaxed text-lg'>
                {project.developmentDetails.overview}
              </p>
            </section>

            {/* 주요 기능 */}
            {project.developmentDetails.keyFeatures && (
              <section>
                <h2 className='text-2xl font-bold text-stone-100 mb-4'>
                  주요 기능
                </h2>
                <ul className='space-y-3'>
                  {project.developmentDetails.keyFeatures.map(
                    (feature, index) => (
                      <li
                        key={index}
                        className='flex items-start gap-3 text-stone-300'>
                        <span className='text-orange-500 mt-1'>•</span>
                        <span>{feature}</span>
                      </li>
                    )
                  )}
                </ul>
              </section>
            )}

            {/* 도전 과제 */}
            {project.developmentDetails.challenges && (
              <section>
                <h2 className='text-2xl font-bold text-stone-100 mb-4'>
                  도전 과제
                </h2>
                <ul className='space-y-3'>
                  {project.developmentDetails.challenges.map(
                    (challenge, index) => (
                      <li
                        key={index}
                        className='flex items-start gap-3 text-stone-300'>
                        <span className='text-orange-500 mt-1'>•</span>
                        <span>{challenge}</span>
                      </li>
                    )
                  )}
                </ul>
              </section>
            )}

            {/* 해결 방법 */}
            {project.developmentDetails.solutions && (
              <section>
                <h2 className='text-2xl font-bold text-stone-100 mb-4'>
                  해결 방법
                </h2>
                <ul className='space-y-3'>
                  {project.developmentDetails.solutions.map(
                    (solution, index) => (
                      <li
                        key={index}
                        className='flex items-start gap-3 text-stone-300'>
                        <span className='text-orange-500 mt-1'>•</span>
                        <span>{solution}</span>
                      </li>
                    )
                  )}
                </ul>
              </section>
            )}

            {/* 성능 최적화 */}
            {project.developmentDetails.performanceOptimizations && (
              <section>
                <h2 className='text-2xl font-bold text-stone-100 mb-4'>
                  성능 최적화
                </h2>
                <ul className='space-y-3'>
                  {project.developmentDetails.performanceOptimizations.map(
                    (optimization, index) => (
                      <li
                        key={index}
                        className='flex items-start gap-3 text-stone-300'>
                        <span className='text-orange-500 mt-1'>•</span>
                        <span>{optimization}</span>
                      </li>
                    )
                  )}
                </ul>
              </section>
            )}
          </motion.div>
        )}

        {/* 개발 상세 정보가 없는 경우 */}
        {!project.developmentDetails && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='text-center py-16'>
            <p className='text-stone-400 text-lg'>상세 정보가 준비 중입니다.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
