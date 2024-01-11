import CommunityPostBox from '@/(route)/community/(components)/CommunityPostBox';
import CategoryButtonWrap from '@/components/CategoryButtonWrap';
import DropDownFilter from '@/components/DropDownFilter';
import { CommunityPostDummy } from '@/dummy/community';

import { CommunityPostType } from '@/types';

const myCategories = [
  { title: '전체 활동' },
  { title: '내가 쓴 글' },
  { title: '내가 쓴 댓글' },
];
const likesCategories = [
  { title: '전체 활동' },
  { title: '질의응답' },
  { title: '자유게시판' },
  { title: '스팩 후기' },
];

export interface ProfileContentsProps {
  currentSubTab?: string;
}

export default function ProfileCommunity({
  currentSubTab,
}: ProfileContentsProps) {
  return (
    <div>
      <CategoryButtonWrap
        type='button'
        categories={
          currentSubTab === '내 커뮤니티 활동' ? myCategories : likesCategories
        }
      />
      <div className='float-end mb-6 mt-4 flex'>
        <DropDownFilter filterCategory='정렬방식' filterOption='최신 순' />
      </div>

      <div className='flex w-full flex-col gap-6 pt-4'>
        {CommunityPostDummy.length === 0 ? (
          <div className='w-full rounded-lg border border-line-normal px-[22px] py-4 text-text-alternative'>
            게시글이 없습니다.
          </div>
        ) : (
          CommunityPostDummy.slice(0, 4).map(
            (post: CommunityPostType, i: number) => (
              <CommunityPostBox post={post} key={i} />
            ),
          )
        )}
      </div>
    </div>
  );
}
