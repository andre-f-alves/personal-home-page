import Background from "./components/background"
import Header from "./components/header"
import HomeSection from "./components/home-section"

export default function Home() {
  return (
    <>
      <Background />
      
      <div className="sticky z-50 top-0 left-0 w-full bg-header-color">
        <Header />
      </div>

      <main className="relative max-w-[110rem] mx-auto">
        <HomeSection />
      </main>
    </>
  )
}
