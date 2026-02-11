import { projects } from "../../data/projects";
import ProjectDetailClient from "./_components/ProjectDetail";
import { notFound } from "next/navigation";

// 정적 경로 생성을 위한 함수
export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id.toString(),
  }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const projectId = parseInt((await params).id);
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    notFound();
  }

  return <ProjectDetailClient project={project} />;
}
