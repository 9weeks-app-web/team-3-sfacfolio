import { CommunityPostType } from '@/types';
import CommunityPostBox from './CommunityPostBox';
import CommunityWriteButton from './CommunityWriteButton';

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
        <CommunityWriteButton />
      </div>

      <div className='flex flex-col gap-6'>
        {posts.map((post: CommunityPostType, i: number) => (
          <CommunityPostBox post={post} key={i} />
        ))}
      </div>

      <div className='mt-6 flex items-center justify-end'>
        <CommunityWriteButton />
      </div>
    </div>
  );
}
