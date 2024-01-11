import Image from 'next/image';
import React from 'react';

import ProjectTypeTag from '@/(route)/main/(components)/ProjectCard/ProjectTypeTag';
import MemberRecruitTag from './MemberRecruitTag';

import { ProjectType } from '@/dummy/project';
import IconBookmark from '@images/IconBookmark.svg';

function ProjectCard({
  period,
  imgUrl,
  title,
  memberRecruit,
  workingMethod,
}: ProjectType) {
  return (
    <div className='flex h-[302px] w-[302px] flex-col overflow-hidden rounded-lg border border-line-normal'>
      <div className='relative h-[130px] w-full shrink-0 p-4'>
        <Image src={imgUrl} alt='projectImage' fill objectFit='cover' />
        <div className='absolute top-4 flex w-[270px] items-center justify-between'>
          <ProjectTypeTag type={workingMethod} />
          <Image src={IconBookmark} alt='bookmark' className='cursor-pointer' />
        </div>
      </div>

      <div className='flex h-[calc(100%-130px)] w-full cursor-pointer flex-col justify-between p-[15px]'>
        <div className='flex flex-col'>
          <div className='text-caption1 leading-4 text-text-alternative'>
            {period}주 프로젝트
          </div>
          <div className='font-bold leading-6 text-text-normal'>{title}</div>
        </div>
        <div className='flex flex-wrap gap-2'>
          {memberRecruit.slice(0, 2).map(info => (
            <MemberRecruitTag
              position={info.position}
              status={info.status}
              key={info.position}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
