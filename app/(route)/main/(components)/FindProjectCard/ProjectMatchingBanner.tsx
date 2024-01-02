import React from 'react';
import Rocket from '@images/Rocket.svg';
import CaretCircleRight from '@images/CaretCircleRight.svg';
import Image from 'next/image';

function ProjectMatchingBanner() {
  return (
    <div className='flex items-center justify-between rounded-lg bg-primary-weak px-[60px] py-[26px] text-subTitle text-white'>
      <div className='flex items-center gap-[14px]'>
        <Image src={Rocket} alt='Rocket' width={54} height={54} />
        <div>
          <span className='font-bold'>원하는 프로젝트</span>가 없으신가요?
        </div>
      </div>
      <button className='flex items-center gap-2.5'>
        <div className='font-bold'>프로젝트 매칭하기</div>
        <Image src={CaretCircleRight} alt='이동' width={25} height={25} />
      </button>
    </div>
  );
}

export default ProjectMatchingBanner;
