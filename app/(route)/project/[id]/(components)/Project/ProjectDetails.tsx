import Image from 'next/image';

import { ProjectDataType } from '@/types/project';

import ProfileImage from '@/components/ProfileImage';
import ProjectInfoLabel from './ProjectInfoLabel';
import ProjectInfoText from './ProjectInfoText';
import ProjectDefaultThumbnail from '@images/ProjectDefaultThumbnail.svg';

interface ProjectDetailsProps {
  data: ProjectDataType;
}

export default function ProjectDetails({ data }: ProjectDetailsProps) {
  return (
    <>
      {/* 프로젝트 타이틀 */}
      <div>
        <div className='flex items-center justify-between'>
          <div className='flex gap-[10px]'>
            <ProjectInfoLabel contents='마감 4일 전' type='period' />
            <ProjectInfoLabel contents='사이드 프로젝트' />
            <ProjectInfoLabel contents='중급' />
          </div>
          <span className='text-text-alternative'>{data.createdAt}</span>
        </div>
        <p className='mt-[18px] text-title font-bold tracking-[0.4px]'>
          {data.title}
        </p>
      </div>

      {/* 프로젝트 정보 */}
      <div>
        <div className='mt-16 flex items-center gap-[18px] text-text-alternative'>
          <ProfileImage width={50} height={50} />
          <span>{data.userName}</span>
        </div>
        <div className='mt-7 flex justify-between'>
          <Image
            src={ProjectDefaultThumbnail}
            alt='project default thumbnail'
          />
          <div className='flex w-[685px] flex-wrap'>
            <ProjectInfoText
              type='진행방식'
              value={data.workingMethod}
              className='w-1/2'
            />
            <ProjectInfoText
              type='모집마감'
              value={data.recruitDeadline}
              className='w-1/2'
            />
            <ProjectInfoText
              type='예상기간'
              value={data.estimatedTime}
              className='w-1/2'
            />
            <ProjectInfoText
              type='진행단계'
              value={data.progressStatus}
              className='w-1/2'
            />
            <ProjectInfoText
              type='신청방법'
              value={data.applicationMethod}
              className='w-1/2'
            />
            <ProjectInfoText
              type='모집인원'
              value={data.numberOfParticipants}
              className='w-1/2'
            />
            <ProjectInfoText type='연락방법' value={data.contactMethod} />
            <ProjectInfoText type='필요기술' value={data.requiredSkills} />
            <ProjectInfoText type='모집직군' value={data.recruitPositions} />
          </div>
        </div>
      </div>
    </>
  );
}
