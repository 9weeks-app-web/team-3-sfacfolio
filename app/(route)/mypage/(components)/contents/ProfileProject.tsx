import DropDownFilter from '@/components/DropDownFilter';
import ProgressStatus from '../ProgressStatus';
import { ProfileContentsProps } from './ProfileCommunity';

export default function ProfileProject({
  currentSubTab,
}: ProfileContentsProps) {
  return (
    <div>
      {currentSubTab === '프로젝트 진행 상황' && <ProgressStatus />}

      <div className='float-end mb-6 mt-4 flex'>
        <DropDownFilter filterCategory='정렬방식' filterOption='최신 순' />
      </div>
    </div>
  );
}
