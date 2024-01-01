import Image from 'next/image';
import { communityIcons } from '@images/CommunityIcons';

interface CommunityType {
  id: string;
  categoray: string;
  likeCount: number;
  comments: string[];
  title: string;
  content: string;
}

function RealTimeCommunityItem({ community }: { community: CommunityType }) {
  return (
    <div
      className='cursor-pointer border-t-2 py-[19px] pl-[25px] pr-5 tracking-[-0.18px]'
      key={community.id}
    >
      <span className='text-lg font-medium'>{community.title}</span>
      <p className='truncate text-label1 font-normal text-text-alternative'>
        {community.content}
      </p>
      <div className='mt-5 flex justify-between'>
        <span className='text-label2 font-medium text-text-alternative '>
          {community.categoray}
        </span>
        <div className='flex space-x-[14px]'>
          <div className='flex space-x-1'>
            <Image src={communityIcons.heart} alt='heart' />
            <span className='text-label2'>{community.likeCount}</span>
          </div>
          <div className='flex space-x-1'>
            <Image src={communityIcons.comment} alt='comment' />
            <span className='text-label2'>{community.comments.length}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RealTimeCommunityItem;
