import NavigationLink from "./navigation-link";

export default function NavigationBar() {
  return (
    <nav className="inline-block">
      <ul className="h-full">
        <li>
          <NavigationLink href="#home">Início</NavigationLink>
        </li>

        <li>
          <NavigationLink href="#technologies">Tecnologias</NavigationLink>
        </li>

        <li>
          <NavigationLink href="#projects">Projetos</NavigationLink>
        </li>
      </ul>
    </nav>
  );
}
