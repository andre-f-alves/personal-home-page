import Section from "./section"
import ProjectCard from "./project-card"

export default function ProjectsSection() {
  return (
    <Section id="projects" title="Projects">
      <div className="flex flex-wrap justify-center gap-8 max-w-max mx-auto">
        <ProjectCard
          title="Snake Game"
          description="Jogo Snake clássico desenvolvido para navegadores com opção para download e uso offline."
          technologies={["JavaScript", "HTML", "CSS"]}
          imageSrc="/imgs/snake-screenshot.jpeg"
          projectLink="https://andre-f-alves.github.io/snake/"
          repositoryLink="https://github.com/andre-f-alves/snake" />
      </div>
    </Section>
  )
}
