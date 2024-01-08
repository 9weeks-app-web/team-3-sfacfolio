'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import LogoFolio from '@images/LogoFolio.svg';
import Link from 'next/link';
import useAuthStatus from '@/hooks/useAuthStatus';
import { auth } from '@/utils/firebase';
import IconAdd from '@images/IconAdd.svg';
import HeaderButton from './HeaderButton';
import Bell from '@images/Bell.svg';
import Search from '@images/Search.svg';
import { usePathname, useRouter } from 'next/navigation';
import FolioHeaderInput from './FolioHeaderInput'; // TODO: 컴포넌트 안쓰게 되면 삭제

const menuItems = [
  { name: '홈', segment: 'main' },
  { name: '포트폴리오', segment: 'portfolio' },
  { name: '프로젝트', segment: 'project' },
  { name: '채용', segment: 'career' },
  { name: '커뮤니티', segment: 'community' },
  { name: 'A/B 퀴즈', segment: 'quiz' },
];

function FolioHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const { loggedIn, setLoggedIn } = useAuthStatus();

  const onLogout = () => {
    auth.signOut();
    setLoggedIn(false);
    router.push('/signin');
  };

  // useEffect(() => {}, [loggedIn]);

  return (
    <div className='box-border flex h-[62px] w-full justify-between border-b-2 border-b-line-normal bg-background-secondary px-20'>
      <div className='flex items-center'>
        <div className='px-4'>
          <Link href={{ pathname: '/main' }}>
            <Image src={LogoFolio} alt='logo' width={87} height={24.3} />
          </Link>
        </div>
        <ul className='ml-6 flex text-label1 leading-4 text-text-alternative'>
          {menuItems.map(item => (
            <Link key={item.name} href={{ pathname: `/${item.segment}` }}>
              <li
                key={item.name}
                className={`relative flex h-[62px] w-[88px] cursor-pointer items-center justify-center px-2 py-3 tracking-[-0.16px] ${
                  pathname.startsWith(`/${item.segment}`)
                    ? ' font-bold text-primary-heavy before:absolute before:bottom-[-1px] before:block before:h-[2px] before:w-full before:bg-primary-heavy'
                    : ''
                }`}
              >
                <span
                  className={`w-[72px] text-center ${
                    pathname.startsWith(`/${item.segment}`) &&
                    'font-bold text-primary-heavy'
                  }`}
                >
                  {item.name}
                </span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <div className='flex h-[62px] items-center gap-4'>
        <button>
          <Image src={Search} alt='search' width={24} height={24} />
        </button>
        <button>
          <Image src={Bell} alt='bell' width={24} height={24} />
        </button>
        {loggedIn && (
          <div
            onClick={onLogout}
            className='h-10 w-10 cursor-pointer rounded-full bg-black'
          ></div>
        )}
        {loggedIn ? (
          <HeaderButton href={'/'} className='py-[9px] text-caption1'>
            <Image src={IconAdd} width={14} height={14} alt='add-icon' />
            <span>작업물 올리기</span>
          </HeaderButton>
        ) : (
          <HeaderButton href={'/signin'} className='font-bold'>
            로그인
          </HeaderButton>
        )}
      </div>
    </div>
  );
}

export default FolioHeader;
