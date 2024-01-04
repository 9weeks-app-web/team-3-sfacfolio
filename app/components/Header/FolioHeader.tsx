'use client';
import React from 'react';
import { useRouter, useSelectedLayoutSegment } from 'next/navigation';
import FolioHeaderInput from './FolioHeaderInput';
import LoginButton from './LoginButton';
import Image from 'next/image';
import LogoFolio from '@images/LogoFolio.svg';
import useAuthStatus from '@/hooks/useAuthStatus';
import UploadButton from './UploadButton';
import { auth } from '@/utils/firebase';

const menuItems = [
  { name: '홈', segment: null }, // segment 'home'으로 수정 필요
  { name: '포트폴리오', segment: 'portfolio' },
  { name: '프로젝트', segment: 'project' },
  { name: '채용', segment: 'recruit' },
  { name: '커뮤니티', segment: 'community' },
];

function FolioHeader() {
  // TODO: 경로 설정 방식 확인 후 segment에 따라 css 적용
  const segment = useSelectedLayoutSegment();
  const router = useRouter();
  const { loggedIn, setLoggedIn } = useAuthStatus();

  const onLogout = () => {
    auth.signOut();
    setLoggedIn(false);
    router.push('/signin');
  };

  return (
    <div className='box-border flex h-14 w-full justify-between border-b-2 border-b-line-normal bg-background-secondary px-10'>
      <div className='flex'>
        <Image src={LogoFolio} alt='logo' width={63.76} height={16.14} />
        <ul className='ml-6 flex text-label1 leading-4 text-text-alternative'>
          {menuItems.map(item => (
            <li
              key={item.name}
              className={`relative flex h-14 w-[88px] cursor-pointer items-center justify-center px-2 py-3 tracking-[-0.16px] ${
                segment === item.segment
                  ? ' text-text-normal before:absolute before:bottom-0 before:block before:h-[2px] before:w-full before:bg-primary-heavy'
                  : ''
              }`}
            >
              <span className='w-[72px] text-center'>{item.name}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className='flex items-center gap-6'>
        <FolioHeaderInput />
        {loggedIn ? <UploadButton /> : <LoginButton />}
        {loggedIn && (
          <div
            onClick={onLogout}
            className='h-10 w-10 cursor-pointer rounded-full bg-black'
          ></div>
        )}
      </div>
    </div>
  );
}

export default FolioHeader;
