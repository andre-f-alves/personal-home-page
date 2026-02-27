"use client"

import { useState, useEffect } from "react"
import { useActiveSection } from "@/app/hooks/useActiveSection"

import NavMenu from "./nav-menu"
import MobileNavMenu from "./mobile-nav-menu"
import MenuButton from "./menu-button"

const links = [
  { href: "#home", text: "Início" },
  { href: "#projects", text: "Projetos" },
  { href: "#contact", text: "Contato" },
]

function MenuItem({ href, text }: { href: string, text: string }) {
  const activeSection = useActiveSection(links.map(link => link.href.substring(1)))

  return (
    <li className="text-center">
      <a
        href={href}
        className={`font-semibold hover:text-brand border-b-[2px] border-transparent hover:border-brand ${activeSection === href.substring(1) ? "text-brand! border-brand!" : ""}`}
      >
        {text}
      </a>
    </li>
  )
}

const menuItems = links.map(({ href, text }, index) => (
  <MenuItem key={index} href={href} text={text} />
))

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(true)

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
