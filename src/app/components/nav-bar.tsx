"use client"

import { useState, useEffect } from "react"

import NavMenu from "./nav-menu"
import MobileNavMenu from "./mobile-nav-menu"
import MenuButton from "./menu-button"

const links = [
  { href: "#home", text: "Início" },
  { href: "#projects", text: "Projetos" },
  { href: "#contact", text: "Contato" },
]

const menuItems = links.map(({ href, text }, index) => (
  <li key={index} className="text-center">
    <a href={href} className="font-semibold hover:text-brand hover:border-b-[2px] border-brand transition-[color] duration-200 ease-in-out">{text}</a>
  </li>
))

export default function NavBar() {
  const [ isMenuOpen, setIsMenuOpen ] = useState<boolean>(false)
  const [ isSmallScreen, setIsSmallScreen ] = useState<boolean>(true)

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768)
      setIsMenuOpen(false)
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <nav>
      {
        isSmallScreen ?
        <>
          <MenuButton handleClick={toggleMenu} isMenuOpen={isMenuOpen} />
          <MobileNavMenu isMenuOpen={isMenuOpen}>{menuItems}</MobileNavMenu>
        </> :
        <NavMenu>{menuItems}</NavMenu>
      }
    </nav>
  )
}
