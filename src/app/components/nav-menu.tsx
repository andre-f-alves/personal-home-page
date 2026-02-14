type NavMenuProps = {
  children: React.ReactNode
}

export default function NavMenu({
  children
}: Readonly<NavMenuProps>) {
  return (
    <div>
      <ul className="flex gap-[3rem]">
        {children}
      </ul>
    </div>
  )
}
