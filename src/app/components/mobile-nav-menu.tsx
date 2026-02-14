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
      console.log(headerHeight)
      topRef.current = headerHeight
    }
  })

  return (
    <div className={`fixed top-[${topRef.current}px] bottom-0 right-0 p-[1rem_15vw] transition-transform duration-500 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"} bg-gray-200`}>
      <ul className="flex flex-col items-center gap-[3rem] list-none">
        {children}
      </ul>
    </div>
  )
}
