import { PopularKeywordsDummy } from '@/dummy';
import RealTimeKeywordItem from './RealTimeKeywordItem';
import { KeywordType } from '@/types';

interface RealTImekeywordPropsType {
  keywords?: KeywordType[];
  type?: string;
}

function RealTimeKeyword({
  keywords = PopularKeywordsDummy,
  type,
}: RealTImekeywordPropsType) {
  return type === 'main' ? (
    <div
      className={`relative h-[572px] w-[431px] overflow-hidden rounded-lg border border-line-normal bg-white leading-6 text-text-normal`}
    >
      <div className={`h-[72px] p-6 text-[20px] font-bold text-text-normal`}>
        스팩이들이 고민하는 토픽 Top10 🏆
      </div>
      <div className={`hide-scrollbar h-[calc(100%-72px)] overflow-scroll p-4`}>
        {keywords?.map((keyword, index) => (
          <RealTimeKeywordItem
            keyword={keyword}
            rank={index}
            key={index}
            type={type}
          />
        ))}
        <div className='absolute bottom-0 left-0 h-[71px] w-full bg-gradient-to-b from-transparent to-white'></div>
      </div>
    </div>
  ) : (
    <div
      className={`relative w-[267px] overflow-hidden rounded-lg border-2 border-line-normal leading-6 text-text-normal`}
    >
      <div className={`px-6 py-4 text-subTitle font-bold text-text-strong`}>
        인기 키워드
      </div>
      <div className={`hide-scrollbar h-[380px] overflow-scroll pt-3`}>
        {keywords?.map((keyword, index) => (
          <RealTimeKeywordItem
            keyword={keyword}
            rank={index}
            key={index}
            type={type}
          />
        ))}
        <div className='absolute bottom-0 left-0 h-[100px] w-full bg-gradient-to-b from-transparent to-white'></div>
      </div>
    </div>
  );
}

export default RealTimeKeyword;
