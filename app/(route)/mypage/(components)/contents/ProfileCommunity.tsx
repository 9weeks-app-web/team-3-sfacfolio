import CommunityPostBox from '@/(route)/community/(components)/CommunityPostBox';
import CategoryButtonWrap from '@/components/CategoryButtonWrap';
import DropDownFilter from '@/components/DropDownFilter';

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

export const CommunityPostDummy: CommunityPostType[] = [
  {
    title: 'UXUI 인턴형 프로그램 1기 후기',
    content:
      '이번에 인턴형 프로그램 1기에 참여한 무순죽순채순입니다. 10월부터 사전 직무교육 후에 팀 프로젝트를 진행했습니다.',
    hashTags: ['UX', '디자인', '인턴형프로그램', '후기', '취업', 'UI'],
    category: '스팩 후기',
    publishedAt: new Date('2024-01-02 18:30'),
    likes: 12,
    comments: [
      { name: '', content: '', createdAt: '', likes: 0, comments: [] },
      { name: '', content: '', createdAt: '', likes: 0, comments: [] },
      { name: '', content: '', createdAt: '', likes: 0, comments: [] },
      { name: '', content: '', createdAt: '', likes: 0, comments: [] },
      { name: '', content: '', createdAt: '', likes: 0, comments: [] },
    ],
    views: 1892,
  },
  {
    title: '이번에 새로 시작한 서브 프로젝트 결과물',
    content:
      '벌써 3번째 서브 프로젝트 진행했다. 결과물 평가 좀 부탁드립니다. 스팩폴리오에도 올림. 많관부해주세요!',
    hashTags: ['UX', '디자인', '인턴형프로그램', '후기', '포트폴리오', '개발'],
    category: '자유게시판',
    publishedAt: new Date('2024-01-02 18:30'),
    likes: 124,
    comments: [
      { name: '', content: '', createdAt: '', likes: 0, comments: [] },
      { name: '', content: '', createdAt: '', likes: 0, comments: [] },
    ],
    views: 2480,
  },
  {
    title: '혹시 이번에 웅진씽크빅 합격 연락 받은사람?ㅜㅠ',
    content:
      '내가 이것저것 대외활동도 하고 면접도 나쁘지 않았는데, 아직 결과 안온듯,,ㅜㅠ 문자 받은사람있으신가요?',
    hashTags: ['회사', '취업', '인턴', '신입', '채용', '면접'],
    category: '질의응답',
    publishedAt: new Date('2024-01-02 18:30'),
    likes: 224,
    comments: [
      { name: '', content: '', createdAt: '', likes: 0, comments: [] },
      { name: '', content: '', createdAt: '', likes: 0, comments: [] },
      { name: '', content: '', createdAt: '', likes: 0, comments: [] },
      { name: '', content: '', createdAt: '', likes: 0, comments: [] },
      { name: '', content: '', createdAt: '', likes: 0, comments: [] },
      { name: '', content: '', createdAt: '', likes: 0, comments: [] },
      { name: '', content: '', createdAt: '', likes: 0, comments: [] },
      { name: '', content: '', createdAt: '', likes: 0, comments: [] },
      { name: '', content: '', createdAt: '', likes: 0, comments: [] },
    ],
    views: 2680,
  },
  {
    title: '혹시 이번에 웅진씽크빅 합격 연락 받은사람?ㅜㅠ',
    content:
      '내가 이것저것 대외활동도 하고 면접도 나쁘지 않았는데, 아직 결과 안온듯,,ㅜㅠ 문자 받은사람있으신가요?',
    hashTags: ['회사', '취업', '인턴', '신입', '채용', '면접'],
    category: '질의응답',
    publishedAt: new Date('2024-01-02 18:30'),
    likes: 224,
    comments: [
      { name: '', content: '', createdAt: '', likes: 0, comments: [] },
      { name: '', content: '', createdAt: '', likes: 0, comments: [] },
      { name: '', content: '', createdAt: '', likes: 0, comments: [] },
      { name: '', content: '', createdAt: '', likes: 0, comments: [] },
      { name: '', content: '', createdAt: '', likes: 0, comments: [] },
      { name: '', content: '', createdAt: '', likes: 0, comments: [] },
      { name: '', content: '', createdAt: '', likes: 0, comments: [] },
      { name: '', content: '', createdAt: '', likes: 0, comments: [] },
      { name: '', content: '', createdAt: '', likes: 0, comments: [] },
    ],
    views: 2680,
  },
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
