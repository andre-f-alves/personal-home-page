type MenuButtonProps = {
  handleClick: () => void
  isMenuOpen: boolean
}

export default function MenuButton({
  handleClick,
  isMenuOpen,
}: Readonly<MenuButtonProps>) {
  return (
    <button
      type="button"
      title="Menu"
      onClick={handleClick}
      className="group p-[3px] rounded-[8px] cursor-pointer hover:bg-brand"
    >
      <svg
        width="32"
        height="32"
        version="1.1"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="m-auto"
      >
        <g
          strokeLinecap="square"
          strokeWidth="2"
          className="group-hover:stroke-white fill-none stroke-brand"
        >
          <path id="top-line" d="m4 6h16" className={`origin-center transition-transform duration-300 ease-in-out ${isMenuOpen ? "rotate-45 translate-y-[6px]" : ""}`}/>
          <path id="middle-line" d="m4 12h16" className={`transition-opacity duration-300 ease-in-out ${isMenuOpen ? "opacity-[0]" : ""}`}/>
          <path id="bottom-line" d="m4 18h16" className={`origin-center transition-transform duration-300 ease-in-out ${isMenuOpen ? "-rotate-45 -translate-y-[6px]" : ""}`}/>
        </g>
      </svg>
    </button>
  )
}
