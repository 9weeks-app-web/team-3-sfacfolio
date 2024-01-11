import { CommunityPostType } from '@/types';
import CommunityPostBox from '@/(route)/community/(components)/CommunityPostBox';

interface RealTimeCommunityProps {
  posts?: CommunityPostType[];
}

// 더미 데이터 입니다.
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
];

function RealTimeCommunity({
  posts = CommunityPostDummy,
}: RealTimeCommunityProps) {
  return (
    <div className='flex w-[822px] flex-col gap-6'>
      {posts?.map(post => <CommunityPostBox post={post} key={post.title} />)}
    </div>
  );
}

export default RealTimeCommunity;
