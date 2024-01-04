'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import FolioHeaderInput from './FolioHeaderInput';
import LoginButton from './LoginButton';
import Image from 'next/image';
import LogoFolio from '@images/LogoFolio.svg';
import Link from 'next/link';

const menuItems = [
  { name: '홈', segment: 'main' },
  { name: '포트폴리오', segment: 'portfolio' },
  { name: '프로젝트', segment: 'project' },
  { name: '채용', segment: 'recruit' },
  { name: '커뮤니티', segment: 'community' },
];

function FolioHeader() {
  const pathname = usePathname();

  return (
    <div className='box-border flex h-14 w-full justify-between border-b-2 border-b-line-normal bg-background-secondary px-10'>
      <div className='flex'>
        <Link href={{ pathname: '/main' }}>
          <Image src={LogoFolio} alt='logo' width={63.76} height={16.14} />
        </Link>
        <ul className='ml-6 flex text-label1 leading-4 text-text-alternative'>
          {menuItems.map(item => (
            <Link key={item.name} href={{ pathname: `/${item.segment}` }}>
              <li
                key={item.name}
                className={`relative flex h-14 w-[88px] cursor-pointer items-center justify-center px-2 py-3 tracking-[-0.16px] ${
                  pathname.startsWith(`/${item.segment}`)
                    ? ' text-text-normal before:absolute before:bottom-0 before:block before:h-[2px] before:w-full before:bg-primary-heavy'
                    : ''
                }`}
              >
                <span className='w-[72px] text-center'>{item.name}</span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <div className='flex items-center gap-6'>
        <FolioHeaderInput />
        <LoginButton />
      </div>
    </div>
  );
}

export default FolioHeader;
