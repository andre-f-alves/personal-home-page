import NavBar from "./nav-bar"

export default function Header() {
  return (
    <header className="sticky top-0 left-0 z-10 p-[16px_24px] flex justify-between items-center max-w-[120rem] mx-auto bg-gray-200">
      <span className="font-[Consolas] text-[1.25rem] text-brand leading-none">
        &lt;André<br />&nbsp;&nbsp;Alves/&gt;
      </span>

      <NavBar />
    </header>
  )
}
