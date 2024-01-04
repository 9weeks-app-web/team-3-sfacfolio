import { ParticipantsType } from '@/types/project';

import ProfileImage from '@/components/ProfileImage';
import ProjectSectionTitle from './ProjectSectionTitle';

export interface ProjectApplicationProps {
  participants: ParticipantsType[];
}

export default function ProjectApplication({
  participants,
}: ProjectApplicationProps) {
  const number = participants.length;

  return (
    <div className='my-20'>
      <ProjectSectionTitle title='프로젝트 참여 신청' number={number} />
      <div className='flex flex-row'>
        {participants.map((item, i) => {
          if (i === 0) {
            return <ProfileImage width={100} height={100} key={i} />;
          } else {
            return (
              <ProfileImage
                width={100}
                height={100}
                key={i}
                className='ml-[-25px]'
              />
            );
          }
        })}
      </div>
    </div>
  );
}
