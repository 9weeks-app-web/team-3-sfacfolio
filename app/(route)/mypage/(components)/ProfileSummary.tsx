import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ProfileBackground from '@images/ProfileBackground.svg';
import Camera from '@images/Camera.svg';
import Setting from '@images/Setting.svg';
import Share from '@images/Share.svg';
import ProfileUtilButton from './ProfileUtilButton';
import ProfileItem from './ProfileItem';
import ProfileButton from './ProfileButton';
import { MyProfileProps } from './ProfileDetail';

function ProfileSummary({ setCurrentTab }: Omit<MyProfileProps, 'currentTab'>) {
  return (
    <div className='relative h-[550px] w-[954px] overflow-hidden rounded-t-lg'>
      <Image
        src={ProfileBackground}
        alt='background'
        className='absolute left-0 top-0'
      />
      <div className='absolute left-0 top-0 h-[550px] w-[954px] bg-gradient-to-r from-[rgba(0,0,0,0.60)] to-[rgba(0,0,0,0.60)] px-[169px] pb-10 pt-6'>
        <div className='absolute right-6 top-6 flex gap-4'>
          <ProfileUtilButton url={Setting} />
          <ProfileUtilButton url={Share} />
        </div>
        <div className='flex flex-col items-center gap-4 border-b border-line-normal pb-8 '>
          <div className='relative flex h-[182px] w-[182px] items-center justify-center rounded-full border-[3px] border-white'>
            <Image
              src='https://plus.unsplash.com/premium_photo-1704546883637-0a759faf7871?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
              fill
              className='rounded-full object-cover'
              alt='profile'
            />
            <Link
              href={{ pathname: '/mypage/profileImage' }}
              className='absolute bottom-0 right-0 z-10'
            >
              <ProfileUtilButton url={Camera} />
            </Link>
          </div>
          <div className='text-title font-bold leading-7 text-white'>
            김스팩
          </div>
          <p className='text-white'>
            안녕하세요, UIUX 디자이너 김스팩입니다. 사용자의 삶을 달라지게 하고
            세상을 바꿀 수 있는 디자인을 사랑해요! 많은 관심 감사합니다 :)
          </p>
        </div>
        <div className='mt-8 flex flex-col gap-8'>
          <div className='flex justify-center gap-14'>
            <ProfileItem category='작업' count={12} />
            <ProfileItem category='좋아요' count={56} />
            <ProfileItem category='팔로잉' count={225} />
            <ProfileItem category='팔로우' count={87} />
          </div>
          <div className='flex justify-between'>
            <ProfileButton text='프로필 편집' />
            <ProfileButton
              text='제안 관리'
              option='white'
              setCurrentTab={setCurrentTab}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileSummary;
