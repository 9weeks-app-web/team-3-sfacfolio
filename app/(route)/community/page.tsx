import Image from 'next/image';
import RealTimeKeyword from '../../components/RealTime/RealTimeKeyword';
import CommunityBanner from './(components)/CommunityBanner';
import CommunityMenu from './(components)/CommunityMenu';
import CommunitySearch from './(components)/CommunitySearch';

import { PopularKeywordsDummy_COMMUNITY } from '@/dummy';

export default function page() {
  return (
    <>
      {/* main banner */}
      <CommunityBanner />

      <div className='container flex justify-between '>
        {/* side section */}
        <section className=''>
          <CommunityMenu />
          <RealTimeKeyword
            keywords={PopularKeywordsDummy_COMMUNITY}
            type='community'
          />
        </section>

        {/* post article */}
        <article className='w-[954px]'>
          <CommunitySearch />
        </article>
      </div>
    </>
  );
}
