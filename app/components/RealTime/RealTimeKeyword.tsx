import RealTimeKeywordItem from './RealTimeKeywordItem';
import { KeywordType } from '@/types';

interface RealTImekeywordPropsType {
  keywords?: KeywordType[];
  type?: string;
}

function RealTimeKeyword({ keywords, type }: RealTImekeywordPropsType) {
  return (
    <div
      className={`rounded-lg border-2 border-line-normal leading-6 text-text-normal ${
        type === 'community' ? 'w-[267px]' : 'w-[431px]'
      }`}
    >
      <div
        className={`text-subTitle font-bold text-text-strong ${
          type === 'community' ? 'px-6 py-4' : 'px-6 py-5'
        }`}
      >
        인기 키워드
      </div>
      <div className={`border-t-2  ${type === 'community' ? 'pt-5' : 'pt-1'}`}>
        {keywords?.map((keyword, index) => (
          <RealTimeKeywordItem
            keyword={keyword}
            rank={index}
            key={index}
            type={type}
          />
        ))}
      </div>
    </div>
  );
}

export default RealTimeKeyword;
