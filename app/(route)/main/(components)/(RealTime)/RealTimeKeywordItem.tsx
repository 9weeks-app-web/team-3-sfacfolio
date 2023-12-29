import Image from 'next/image';
import { communityIcons } from '../../../../../public/assets/images/CommunityIcons';

interface KeywordType {
  content: string;
  rank: 'rise' | 'maintain' | 'decline';
}

function RealTimeKeywordItem({
  keyword,
  rank,
}: {
  keyword: KeywordType;
  rank: number;
}) {
  return (
    <div className='pl-9 pr-6 py-4 flex justify-between items-center text-label1 font-medium'>
      <div className='space-x-[38px]'>
        <span className={`${rank < 3 && 'text-primary-heavy'}`}>
          {rank + 1}
        </span>
        <span className='text-[18px]'>{keyword.content}</span>
      </div>
      <span>
        {keyword.rank === 'rise' && (
          <Image src={communityIcons.risePolygon} alt='rise' />
        )}
        {keyword.rank === 'decline' && (
          <Image src={communityIcons.declinePolygon} alt='decline' />
        )}
        {keyword.rank === 'maintain' && (
          <div className='w-[10px] h-[2px] bg-[#d9d9d9] rounded-sm' />
        )}
      </span>
    </div>
  );
}

export default RealTimeKeywordItem;
