import Image from 'next/image';
import React from 'react';
import CheckCircle from '@images/CheckCircle.svg';
import SignUpStageFourImage from '@images/SignUpStageFourImage.svg';
import { useRouter } from 'next/navigation';

export default function StageFour() {
  const router = useRouter();

  return (
    <div className='z-10 flex h-[calc(100vh-170px)] w-full items-center justify-center bg-white'>
      <div className='w-[447px]'>
        <div className='mb-[68px] w-full'>
          <Image
            src={SignUpStageFourImage}
            alt='successful-signup-image'
            quality={100}
            width={315}
            height={315}
            className='mx-auto'
          />
        </div>

        <div className='mb-[130px] text-center'>
          <div className='mb-[22px] w-full'>
            <Image src={CheckCircle} alt='check-icon' className='mx-auto' />
          </div>
          <h4 className='mb-3 text-title font-bold'>회원가입이 완료되었어요</h4>
          <p className='font-[18px] text-[#828282]'>
            지금 바로 다양한 포트폴리오를 감상해보세요!
          </p>
        </div>

        <button
          onClick={() => router.push('/signin')}
          className='mb-4 flex h-12 w-full items-center justify-center rounded-[8px] bg-primary-heavy py-4 text-white'
        >
          로그인하기
        </button>
      </div>
    </div>
  );
}
