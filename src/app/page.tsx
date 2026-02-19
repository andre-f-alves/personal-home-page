import Background from "./components/background"
import Header from "./components/header"
import HomeSection from "./components/home-section"
import ProjectsSection from "./components/projects-section"

export default function Home() {
  return (
    <>
      <Background />
      
      <div className="sticky z-50 top-0 left-0 w-full bg-header-color">
        <Header />
      </div>

      <main className="relative flex flex-col gap-30 max-w-[120rem] mx-auto">
        <HomeSection />
        <ProjectsSection />
      </main>
    </>
  )
}
