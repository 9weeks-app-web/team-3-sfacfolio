import Image from 'next/image';
import { communityIcons } from '@images/CommunityIcons';

interface KeywordType {
  content: string;
  rank: 'rise' | 'maintain' | 'decline';
}

function RealTimeKeywordItem({
  keyword,
  rank,
  type,
}: {
  keyword: KeywordType;
  rank: number;
  type?: string;
}) {
  return (
    <div
      className={`flex items-center justify-between  text-label1 font-medium ${
        type === 'community' ? 'px-6 py-3.5' : 'py-4 pl-9 pr-6'
      }`}
    >
      <div className='space-x-[38px]'>
        <span
          className={`${
            rank < 3 ? 'text-primary-heavy' : 'text-text-alternative'
          }`}
        >
          {rank + 1}
        </span>
        <span
          className={`font-medium ${
            type === 'community' ? 'text-label1' : 'text-[18px]'
          }`}
        >
          {keyword.content}
        </span>
      </div>
      <span>
        {keyword.rank === 'rise' && (
          <Image src={communityIcons.risePolygon} alt='rise' />
        )}
        {keyword.rank === 'decline' && (
          <Image src={communityIcons.declinePolygon} alt='decline' />
        )}
        {keyword.rank === 'maintain' && (
          <div className='h-[2px] w-[10px] rounded-sm bg-[#d9d9d9]' />
        )}
      </span>
    </div>
  );
}

export default RealTimeKeywordItem;
