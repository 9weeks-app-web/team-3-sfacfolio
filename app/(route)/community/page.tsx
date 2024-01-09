import RealTimeKeyword from '../../components/RealTime/RealTimeKeyword';
import CommunityBanner from './(components)/CommunityBanner';

import { PopularKeywordsDummy_COMMUNITY } from '@/dummy';
import CommunityMenu from './(components)/CommunityMenu';

export default function page() {
  return (
    <>
      {/* main banner */}
      <CommunityBanner />

      <div className='container'>
        {/* side section */}
        <section className=''>
          <CommunityMenu />
          <RealTimeKeyword
            keywords={PopularKeywordsDummy_COMMUNITY}
            type='community'
          />
        </section>

        {/* post article */}
        <article></article>
      </div>
    </>
  );
}
