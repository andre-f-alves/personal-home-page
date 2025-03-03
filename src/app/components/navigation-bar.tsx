export default function NavigationBar() {
  return (
    <nav className="inline-block w-full">
      <ul className="flex justify-around items-center h-full">
        <li>
          <a href="#home">Início</a>
        </li>

        <li>
          <a href="#technologies">Tecnologias</a>
        </li>
        
        <li>
          <a href="#projects">Projetos</a>
        </li>
      </ul>
    </nav>
  );
}
