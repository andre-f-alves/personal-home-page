"use client"

import { useState, useEffect } from "react"

export function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState<string>("")

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setActiveSection(entry.target.id)
      })
    }, {
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0
    })

    sectionIds.forEach(id => {
      const section = document.getElementById(id)
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [sectionIds])

  return activeSection
}
