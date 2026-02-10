"use client"

import { useState } from "react"

import MenuButton from "./menu-button"
import NavBar from "./nav-bar"

export default function Header() {
  const [ isMenuOpen, setIsMenuOpen ] = useState<boolean>(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="sticky top-0 left-0 z-10 p-[16px_24px] flex justify-between items-center w-full bg-gray-200">
      <span className="font-[Consolas] text-[1.25rem] text-brand leading-none">
        &lt;André<br />&nbsp;&nbsp;Alves/&gt;
      </span>

      <MenuButton handleClick={toggleMenu} isMenuOpen={isMenuOpen}/>
      <NavBar
        links={[
          { href: "#home", text: "Início" },
          { href: "#projects", text: "Projetos" },
          { href: "#contact", text: "Contato" },
        ]}
        isMenuOpen={isMenuOpen}
      />
    </header>
  )
}
