import Background from "./components/background"
import Header from "./components/header"
import HomeSection from "./components/home-section"
import ProjectsSection from "./components/projects-section"
import ContactSection from "./components/contact-section"
import Footer from "./components/footer"

export default function Home() {
  return (
    <>
      <Background />
      
      <div className="sticky z-50 top-0 left-0 w-full bg-panel-color shadow-md">
        <Header />
      </div>

      <main className="relative flex flex-col gap-30 max-w-7xl mx-auto">
        <HomeSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  )
}
