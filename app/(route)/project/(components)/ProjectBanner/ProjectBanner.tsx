import Image from 'next/image';
import React from 'react';
import BusinessStrategy from '@images/BusinessStrategy.svg';
import ProjectButton from '../common/ProjectButton';
import PlusIcon from '@/components/Icons/PlusIcon';

function ProjectBanner() {
  return (
    <div className='flex h-[497px] w-full items-center justify-between bg-black px-[100px] text-white'>
      <div className='w-[568px]'>
        <h2 className='mb-[10px] text-5xl'>
          <span className='font-bold'>&lsquo;프로젝트 매칭하기&lsquo;</span>로
          빠르고 간편하게 시작하세요!
        </h2>
        <p className='mb-[49px]'>
          수 많은 프로젝트 중에서 나에게 필요한 프로젝트를 찾아주는 프로젝트
          매칭 서비스로
          <br /> 빠르고 간편하게 경험을 쌓을 수 있습니다.
        </p>
        <div className='flex gap-[15px]'>
          <ProjectButton color='white' size='big'>
            프로젝트 매칭하기
          </ProjectButton>
          <ProjectButton color='transparent' size='big'>
            프로젝트 만들기
            <PlusIcon size={18} color='white' />
          </ProjectButton>
        </div>
      </div>
      <Image
        src={BusinessStrategy}
        alt={'배너 이미지'}
        width={668}
        height={497}
      />
    </div>
  );
}

export default ProjectBanner;
