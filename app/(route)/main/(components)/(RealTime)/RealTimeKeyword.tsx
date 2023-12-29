import Image from 'next/image';
import { communityIcons } from '../../../../../public/assets/images/CommunityIcons';
import RealTimeKeywordItem from './RealTimeKeywordItem';

interface KeywordType {
  content: string;
  rank: 'rise' | 'maintain' | 'decline';
}

interface RealTImekeywordPropsType {
  keywords?: KeywordType[];
}
// 더미 데이터 입니다.
const dummyKeywords: KeywordType[] = [
  { content: '대외활동', rank: 'rise' },
  { content: 'UX디자인', rank: 'rise' },
  { content: '포트폴리오', rank: 'maintain' },
  { content: '취업', rank: 'decline' },
  { content: '퇴사', rank: 'maintain' },
  { content: '신입채용', rank: 'decline' },
  { content: '에이전시', rank: 'rise' },
];

function RealTimeKeyword({
  keywords = dummyKeywords,
}: RealTImekeywordPropsType) {
  return (
    <div className='w-[431px] border-2 rounded-lg leading-6 text-text-normal border-line-normal '>
      <div className='px-6 py-5 text-subTitle font-bold text-text-strong'>
        인기 키워드
      </div>
      <div className='border-t-2'>
        {keywords.map((keyword, index) => (
          <RealTimeKeywordItem keyword={keyword} rank={index} key={index} />
        ))}
      </div>
    </div>
  );
}

export default RealTimeKeyword;
