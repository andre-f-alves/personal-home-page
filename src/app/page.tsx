import Background from "./components/background"
import Header from "./components/header"
import Main from "./components/main"

export default function Home() {
  return (
    <>
      <Background />
      <div className="w-full bg-header-color backdrop-blur-[5px]">
        <Header />
      </div>
      <Main />
    </>
  )
}
