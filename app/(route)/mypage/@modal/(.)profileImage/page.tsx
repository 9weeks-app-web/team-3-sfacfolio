'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import IconReset from '@images/IconReset.svg';
import IconSwap from '@images/IconSwap.svg';
import CameraIcon from '@/components/Icons/CameraIcon';

export default function page() {
  const router = useRouter();
  const [backgroundImage, setBackgroundImage] = useState(
    'https://mblogthumb-phinf.pstatic.net/MjAyMTA2MjRfMTM4/MDAxNjI0NDk1MzI1MTk3.avaD5VvmpyGw7z2tdhNhBlcHxUnEVV3eRrHGvdoz7bwg.tfj1878sxmZjORWWb0nViJZUJWXlJI20X7vB3ZHSkekg.PNG.1991offi/500px-Checkerboard_pattern.svg.png?type=w800',
  );
  const [profileImage, setProfileImage] = useState(
    'https://i.pinimg.com/736x/c2/20/84/c22084c37ddc45ead9dce9ab04c641ff.jpg',
  );

  const handleBackgroundChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.onloadend = () => {
        setBackgroundImage(reader.result as string);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleProfileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };

      reader.readAsDataURL(file);
    }
  };

  const setDefaultImages = () => {
    setBackgroundImage(
      'https://mblogthumb-phinf.pstatic.net/MjAyMTA2MjRfMTM4/MDAxNjI0NDk1MzI1MTk3.avaD5VvmpyGw7z2tdhNhBlcHxUnEVV3eRrHGvdoz7bwg.tfj1878sxmZjORWWb0nViJZUJWXlJI20X7vB3ZHSkekg.PNG.1991offi/500px-Checkerboard_pattern.svg.png?type=w800',
    );
    setProfileImage(
      'https://i.pinimg.com/736x/c2/20/84/c22084c37ddc45ead9dce9ab04c641ff.jpg',
    );
  };

  return (
    <div className='fixed left-0 top-0 z-[1000] h-screen w-screen bg-black/60'>
      <div className='absolute left-1/2 top-1/2 w-[580px] -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white'>
        {/* modal header */}
        <div className='flex justify-between border-b border-line-normal px-6 py-4'>
          <div className='flex items-center justify-center gap-2'>
            <p className='text-[18px] font-bold text-text-alternative'>
              이미지 수정
            </p>
          </div>
          <div
            className='flex cursor-pointer items-center justify-center gap-1'
            onClick={setDefaultImages}
          >
            <Image src={IconReset} alt='reset button' />
            <span className='text-caption2 font-medium text-text-alternative'>
              전체 초기화
            </span>
          </div>
        </div>

        {/* modal contents */}
        <div className='flex w-full flex-col px-6 py-[18px]'>
          <div className='relative h-[450px] w-full overflow-hidden rounded-lg'>
            <Image
              src={backgroundImage}
              alt={`user's background image`}
              width={0}
              height={0}
              sizes='100%'
              className='h-full w-full object-cover'
            />

            <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
              <div className='h-[120px] w-[120px] overflow-hidden rounded-full bg-white'>
                <Image
                  src={profileImage}
                  alt={`user's profile image`}
                  width={0}
                  height={0}
                  sizes='100%'
                  className='h-full w-full object-cover'
                />
              </div>

              <label className='absolute bottom-0 right-0 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-line-normal bg-white'>
                <CameraIcon color='#000000' size={24} />
                <input
                  id='profile-upload'
                  type='file'
                  accept='image/*'
                  onChange={handleProfileChange}
                  className='hidden'
                />
              </label>
            </div>

            <label className='absolute bottom-6 left-1/2 flex -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center gap-2 rounded-full border border-line-normal bg-white p-3 font-bold'>
              <CameraIcon color='#000000' size={24} /> 배경화면 설정
              <input
                id='background-upload'
                type='file'
                accept='image/*'
                onChange={handleBackgroundChange}
                className='hidden'
              />
            </label>
          </div>

          <button
            className='mt-4 flex items-center justify-center gap-2 text-label2 font-medium'
            onClick={setDefaultImages}
          >
            <Image src={IconSwap} alt='기본 이미지로 전체 변경' />
            기본 이미지로 전체 변경
          </button>
        </div>

        {/* modal buttons */}
        <div className='flex w-full flex-col gap-3 px-6 py-7'>
          <button className='h-12 w-full rounded-lg border border-primary-heavy bg-primary-heavy text-label1 font-bold text-white'>
            저장하기
          </button>
          <button
            className='h-12 w-full rounded-lg border border-primary-heavy bg-white text-label1 font-bold text-primary-heavy'
            onClick={() => router.back()}
          >
            취소
          </button>
        </div>
      </div>
    </div>
  );
}
