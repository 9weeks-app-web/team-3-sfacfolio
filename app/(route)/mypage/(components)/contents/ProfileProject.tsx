import DropDownFilter from '@/components/DropDownFilter';
import ProgressStatus from '../ProgressStatus';
import { ProfileContentsProps } from './ProfileCommunity';
import { projectDummy } from '@/dummy/project';
import ProjectCard from '@/components/ProjectCard';

export default function ProfileProject({
  currentSubTab,
}: ProfileContentsProps) {
  return (
    <div>
      {currentSubTab === '프로젝트 진행 상황' && <ProgressStatus />}

      <div className='float-end mb-6 mt-4 flex'>
        <DropDownFilter filterCategory='정렬방식' filterOption='최신 순' />
      </div>

      <div className='grid w-full grid-cols-3 gap-2'>
        {projectDummy.map((item, i) => (
          <ProjectCard
            key={i}
            title={item.title}
            imgUrl={item.imgUrl}
            period={item.period}
            memberRecruit={item.memberRecruit}
            workingMethod={item.workingMethod}
          />
        ))}
      </div>
    </div>
  );
}
