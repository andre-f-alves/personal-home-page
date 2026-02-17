import NavBar from "./nav-bar"

export default function Header() {
  return (
    <header className="sticky top-0 left-0 flex justify-between items-center max-w-[120rem] mx-auto p-[1rem_2rem] md:p-[1rem_4rem] bg-header-color shadow-md">
      <span className="font-[Consolas] text-[1.25rem] text-brand leading-none">
        &lt;André<br />&nbsp;&nbsp;Alves/&gt;
      </span>

      <NavBar />
    </header>
  )
}
