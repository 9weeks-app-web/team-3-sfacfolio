import RealTimeKeyword from '../../components/RealTime/RealTimeKeyword';
import CommunityBanner from './(components)/CommunityBanner';

import { PopularKeywordsDummy_COMMUNITY } from '@/dummy';

export default function page() {
  return (
    <>
      {/* main banner */}
      <CommunityBanner />

      {/* side section */}
      <section>
        <ul>
          <li>실시간 인기 글</li>
          <li>질의응답</li>
          <li>자유게시판</li>
          <li>스팩 후기</li>
        </ul>
        <RealTimeKeyword
          keywords={PopularKeywordsDummy_COMMUNITY}
          type='community'
        />
      </section>

      {/* post article */}
      <article></article>
    </>
  );
}
