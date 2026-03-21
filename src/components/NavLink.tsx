'use client';
import { cn } from '@/utils/cn';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

type NavLinkProps = {
  children: ReactNode;
  href: string;
}

const NavLink = ({ children, href }: NavLinkProps) => {
  const pathname = usePathname();
    
  return <Link href={href} className={cn('py-2 px-4 hover:bg-blue-400 hover:text-white', {
    'bg-blue-500 text-white': href === pathname
  })}>
    {children}
  </Link>;
};

export default NavLink;