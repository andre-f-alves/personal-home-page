"use client"

import { useRef, useEffect } from "react"

type MobileNavMenuProps = {
  isMenuOpen: boolean
  children: React.ReactNode
}

export default function MobileNavMenu({
  isMenuOpen,
  children
}: Readonly<MobileNavMenuProps>) {
  const topRef = useRef<number>(0)

  useEffect(() => {
    const header = document.querySelector("header")
    if (header) {
      const headerHeight = header.getBoundingClientRect().height
      topRef.current = headerHeight
    }
  })

  return (
    <div style={{ top: `${topRef.current}px` }} className={`fixed right-0 bottom-0 p-[2rem_15vw] transition-transform duration-500 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"} bg-header-color`}>
      <ul className="flex flex-col items-center gap-[3rem] list-none">
        {children}
      </ul>
    </div>
  )
}
