'use client';

import { useState } from 'react';

import MenuButton from './menu-button';
import NavBar from './nav-bar';

export default function Header() {
  const [ isMenuOpen, setIsMenuOpen ] = useState<boolean>(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 left-0 flex justify-between items-center w-full h-[60px] bg-gray-200">
      <span className="pl-[8px] font-[Consolas] text-[1.25rem] text-[#ff6a00] leading-none">
        &lt;André<br />&nbsp;&nbsp;Alves/&gt;
      </span>

      <MenuButton handleClick={toggleMenu} isMenuOpen={isMenuOpen}/>
      <NavBar isMenuOpen={isMenuOpen}/>
    </header>
  );
};
