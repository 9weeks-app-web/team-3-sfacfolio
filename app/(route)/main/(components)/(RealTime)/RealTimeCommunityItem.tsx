import Image from 'next/image';
import { communityIcons } from '../../../../../public/assets/images/CommunityIcons';

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
      className='cursor-pointer py-[19px] pr-5 pl-[25px] border-t-2 tracking-[-0.18px]'
      key={community.id}
    >
      <span className='text-lg font-medium'>{community.title}</span>
      <p className='text-label1 font-normal text-text-alternative overflow-hidden text-ellipsis whitespace-nowrap'>
        {community.content}
      </p>
      <div className='flex justify-between mt-5'>
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
