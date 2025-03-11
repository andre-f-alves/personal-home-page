import NavLink from "./nav-link";

export default function NavBar({
  isMenuOpen
}: {
  isMenuOpen: boolean
}) {
  return (
    <nav className={`fixed top-[60px] right-0 w-[50vw] h-(--mobile-navbar-height) ${isMenuOpen ? "translate-x-0" : "translate-x-full"} bg-gray-200`}>
      <ul className="flex flex-col justify-around items-center h-full">
        <li>
          <NavLink href="#home">Início</NavLink>
        </li>

        <li>
          <NavLink href="#technologies">Tecnologias</NavLink>
        </li>

        <li>
          <NavLink href="#projects">Projetos</NavLink>
        </li>
      </ul>
    </nav>
  );
};
