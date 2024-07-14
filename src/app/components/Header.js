'use client'
import Link from 'next/link';
import { useState } from 'react';
import DropdownMenu from './DropdownMenu';
import { FaRegHeart } from "react-icons/fa";
import { BsBag } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
export default function Header() {
  const [dropdown, setDropdown] = useState(null);

  const handleMouseEnter = (menu) => {
    setDropdown(menu);
  };

  const handleMouseLeave = () => {
    setDropdown(null);
  };

  const navItems = [
    { name: 'New & Featured', link: '/new-featured' },
    { name: 'Men', link: '/men' },
    { name: 'Women', link: '/women' },
    { name: 'Kids', link: '/kids' },
    { name: 'Sale', link: '/sale' },
    { name: 'Customise', link: '/customise' },
    { name: 'SNKRS', link: '/snkrs' },
  ];

  return (
    <header className="bg-white shadow ">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 min-w-[1020px]">
      <img src="/NikeImg/NikeLogo.svg" alt="Nike" className="h-12" />
        <div className="flex items-center">
          
          <nav className="relative">
            <ul className="flex space-x-4  font-medium">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  onMouseEnter={() => handleMouseEnter(item.name)}
                  onMouseLeave={handleMouseLeave}
                  className="relative"
                >
                  <Link href={item.link} legacyBehavior>
                    <a className="hover:underline">{item.name}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex items-center space-x-6">
          <div className='p-1 rounded-xl flex justify-center items-center bg-gray-300 gap-2  '><IoSearch /><input placeholder='Search' className=' bg-transparent outline-none'  ></input></div>
          <Link href="/#" legacyBehavior><a className="hover:underline"><FaRegHeart /></a></Link>
          <Link href="/#" legacyBehavior><a className="hover:underline"><BsBag /></a></Link>
        </div>
      </div>
      {dropdown && <DropdownMenu category={dropdown} />}
    </header>
  ); 
}
