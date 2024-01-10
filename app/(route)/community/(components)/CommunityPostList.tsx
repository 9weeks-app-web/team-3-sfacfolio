import CommunityPostBox from './CommunityPostBox';
import CommunityWriteButton from './CommunityWriteButton';
import CategoryButtonWrap from '@/components/CategoryButtonWrap';

import { CommunityPostType } from '@/types';
import { communityFilterCategories } from '@/constants';

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
      <div className='flex items-center justify-between pt-4'>
        <p className='text-title font-bold'>{currentMenu}</p>
        <CommunityWriteButton />
      </div>

      {currentMenu !== '실시간 인기 글' && (
        <CategoryButtonWrap
          type='button'
          gradient=' to-background-primary'
          categories={communityFilterCategories}
          className=''
        />
      )}

      <div className='flex flex-col gap-6 pt-4'>
        {posts.length === 0 ? (
          <div className='w-full rounded-lg border border-line-normal px-[22px] py-4 text-text-alternative'>
            게시글이 없습니다.
          </div>
        ) : (
          posts.map((post: CommunityPostType, i: number) => (
            <CommunityPostBox post={post} key={i} />
          ))
        )}
      </div>

      <div className='mt-6 flex items-center justify-end'>
        <CommunityWriteButton />
      </div>
    </div>
  );
}
