import NavBar from "./nav-bar"

export default function Header() {
  return (
    <header className="relative flex justify-between items-center max-w-[120rem] py-4 px-8 md:px-16 mx-auto bg-panel-color">
      <span className="font-[Consolas] text-[1.25rem] text-brand leading-none">
        &lt;André<br />&nbsp;&nbsp;Alves/&gt;
      </span>

      <NavBar />
    </header>
  )
}
