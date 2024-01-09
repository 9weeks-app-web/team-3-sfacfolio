import Image from 'next/image';

import { CommunityPostType } from '@/types';
import IconEdit from '@images/IconEdit.svg';
import CommunityPostBox from './CommunityPostBox';

interface CommunityPostListProps {
  currentMenu: string;
  posts: CommunityPostType[];
}

export default function CommunityPostList({
  currentMenu,
  posts,
}: CommunityPostListProps) {
  return (
    <div>
      <div className='flex items-center justify-between py-4'>
        <p className='text-title font-bold'>{currentMenu}</p>
        <button className='flex h-12 w-[156px] items-center justify-center gap-3 rounded-lg border border-line-normal bg-background-secondary text-label1 font-medium text-text-alternative'>
          <Image src={IconEdit} alt='글쓰기 버튼' />
          <span>글쓰기</span>
        </button>
      </div>

      <div className='flex flex-col gap-6'>
        {posts.map((post: CommunityPostType, i: number) => (
          <CommunityPostBox post={post} key={i} />
        ))}
      </div>
    </div>
  );
}
