import Image from 'next/image';

import { NAV_ITEMS } from '@/constants/layout';
import {
  EllipsisHorizontalIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';

import Logo from '../../public/logo.png';

export default function Header() {

    return (
        <header className="border-b sticky border-b-gray-200 shadow-sm top-0 z-50 left-0 bg-white mx-auto h-[52px] px-4">
            <div className='flex items-center justify-between mx-auto max-w-[1100px] h-full'>
                <EllipsisHorizontalIcon className='w-6 block lg:hidden h-6 text-gray-800' />
                <Image src={Logo} alt="Logo" width={172} height={47} />
                <nav className="hidden lg:flex gap-6">
                    {NAV_ITEMS.map((item) => (
                        <a className='text-gray-800 hover:text-blue-500 transition-all text-sm font-semibold'
                            key={item}
                            href="#"
                        >{item}
                        </a>
                    ))}
                </nav>
                <MagnifyingGlassIcon className='w-6 h-6 text-gray-800' />
            </div>
        </header>
    );
} 