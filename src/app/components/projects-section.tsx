import Section from "./section"
import ProjectCard from "./project-card"

export default function ProjectsSection() {
  return (
    <Section id="projects" title="Projects">
      <div className="flex flex-wrap justify-center gap-8 max-w-max mx-auto">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </Section>
  )
}
