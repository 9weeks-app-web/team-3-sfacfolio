'use client';

import { useState } from 'react';

import RealTimeKeyword from '../../components/RealTime/RealTimeKeyword';
import CommunityBanner from './(components)/CommunityBanner';
import CommunityMenu from './(components)/CommunityMenu';
import CommunitySearch from './(components)/CommunitySearch';
import CommunityPostList from './(components)/CommunityPostList';

import { CommunityPostDummy, PopularKeywordsDummy_COMMUNITY } from '@/dummy';

export interface menuType {
  name: string;
  path: string;
}

const menu = [
  { name: '실시간 인기 글', path: '' },
  { name: '질의응답', path: '' },
  { name: '자유게시판', path: '' },
  { name: '스팩 후기', path: '' },
];

export default function page() {
  const [currentMenu, setCurrentMenu] = useState('실시간 인기 글');
  const posts = CommunityPostDummy;

  return (
    <>
      {/* main banner */}
      <CommunityBanner />

      <div className='container flex justify-between '>
        {/* side section */}
        <section className=''>
          <CommunityMenu
            menu={menu}
            currentMenu={currentMenu}
            setCurrentMenu={setCurrentMenu}
          />
          <RealTimeKeyword
            keywords={PopularKeywordsDummy_COMMUNITY}
            type='community'
          />
        </section>

        {/* post article */}
        <article className='w-[954px]'>
          <CommunitySearch />

          <CommunityPostList currentMenu={currentMenu} posts={posts} />
        </article>
      </div>
    </>
  );
}
