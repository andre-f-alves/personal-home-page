import ProjectCard from "./project-card"

export default function ProjectsSection() {
  return (
    <section id="projects" className="w-full">
      <div className="p-[1rem_2rem] md:p-[1rem_4rem]">
        <h2 className="text-h2 mb-8">Projetos</h2>
        
        <div className="grid grid-rows-3 lg:grid-cols-3 gap-8">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </section>
  )
}
