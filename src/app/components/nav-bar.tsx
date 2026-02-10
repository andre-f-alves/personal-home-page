import NavLink from "./nav-link"

interface NavBarProps {
  links: Array<{ href: string, text: string }>
  isMenuOpen: boolean
}

export default function NavBar({
  links,
  isMenuOpen,
}: Readonly<NavBarProps>) {
  return (
    <nav className={`fixed top-0 right-0 w-[50vw] h-full pt-[80px] transition-transform duration-500 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"} bg-gray-200`}>
      <ul className="flex flex-col justify-around items-center gap-[48px] list-none">
        {links.map(({ href, text }, index) => (
          <li key={index} className="text-center">
            <NavLink href={href}>{text}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
