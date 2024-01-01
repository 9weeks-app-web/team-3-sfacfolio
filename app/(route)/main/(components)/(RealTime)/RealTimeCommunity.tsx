import RealTimeCommunityItem from './RealTimeCommunityItem';

interface CommunityType {
  id: string;
  categoray: string;
  likeCount: number;
  comments: string[];
  title: string;
  content: string;
}

interface RealTImeCommunityPropsType {
  title: string;
  communities?: CommunityType[];
}
// 더미 데이터 입니다.
const dummyCommunities: CommunityType[] = [
  {
    id: '1',
    categoray: '자유게시판',
    likeCount: 999,
    comments: ['1'],
    title: 'UXUI 인턴형 프로젝트 1기 후기',
    content:
      '이번에 인턴형 프로그램 1기로 참여한 채수니입니다. 10월부터 사전 직무교육 후에 팀 프로젝트를 진행했습니다. 이번에 인턴형 프로그램 1기로 참여한 채수니입니다. 10월부터 사전 직무교육 후에 팀 프로젝트를 진행했습니다.',
  },
  {
    id: '2',
    categoray: '자유게시판',
    likeCount: 999,
    comments: ['1'],
    title: 'UXUI 인턴형 프로젝트 1기 후기',
    content:
      '이번에 인턴형 프로그램 1기로 참여한 채수니입니다. 10월부터 사전 직무교육 후에 팀 프로젝트를 진행했습니다. 이번에 인턴형 프로그램 1기로 참여한 채수니입니다. 10월부터 사전 직무교육 후에 팀 프로젝트를 진행했습니다.',
  },
  {
    id: '3',
    categoray: '자유게시판',
    likeCount: 999,
    comments: ['1'],
    title: 'UXUI 인턴형 프로젝트 1기 후기',
    content:
      '이번에 인턴형 프로젝트 프로그램 1기로 참여한 채수니입니다. 10월부터 사전 직무교육 후에 팀 프로젝트를 진행했습니다. 이번에 인턴형 프로젝트 프로그램 1기로 참여한 채수니입니다. 10월부터 사전 직무교육 후에 팀 프로젝트를 진행했습니다.',
  },
];

function RealTImeCommunity({
  title,
  communities = dummyCommunities,
}: RealTImeCommunityPropsType) {
  return (
    <div className='w-[825px] border-2 rounded-lg leading-6 text-text-normal border-line-normal '>
      <div className='px-6 py-5 text-subTitle font-bold text-text-strong'>
        {title}
      </div>
      <div>
        {communities?.map(community => (
          <RealTimeCommunityItem community={community} key={community.id} />
        ))}
      </div>
    </div>
  );
}

export default RealTImeCommunity;
