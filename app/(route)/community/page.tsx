'use client';

import { useState } from 'react';

import RealTimeKeyword from '../../components/RealTime/RealTimeKeyword';
import CommunityBanner from './(components)/CommunityBanner';
import CommunityMenu from './(components)/CommunityMenu';
import CommunitySearch from './(components)/CommunitySearch';
import CommunityPostList from './(components)/CommunityPostList';

import { CommunityPostDummy, PopularKeywordsDummy_COMMUNITY } from '@/dummy';
import CommunityPagination from './(components)/CommunityPagination';
import { useSearchParams } from 'next/navigation';

export interface menuType {
  name: string;
  path: string;
}

const menu = [
  { name: '실시간 인기 글', path: 'hot' },
  { name: '질의응답', path: 'qna' },
  { name: '자유게시판', path: 'free' },
  { name: '스팩 후기', path: 'review' },
];

export default function page() {
  const [currentMenu, setCurrentMenu] = useState('실시간 인기 글');
  const posts = CommunityPostDummy;

  const params = useSearchParams();

  const currentPage = params.get('page') || '1';
  const itemsPerPage = 10;
  const totalPage = Math.ceil(posts.length / itemsPerPage);

  // Pagination logic
  const startIndex = (parseInt(currentPage) - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visiblePosts = posts.slice(startIndex, endIndex);

  const constructPathname = () => {
    const currentMenuItem = menu.find(item => item.name === currentMenu);
    const categoryPath = currentMenuItem ? currentMenuItem.path : 'hot';
    return {
      pathname: '/community',
      query: { category: categoryPath, page: currentPage },
    };
  };

  return (
    <>
      {/* main banner */}
      <CommunityBanner />

      <div className='container mb-[60px] flex justify-between'>
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

          <CommunityPostList currentMenu={currentMenu} posts={visiblePosts} />

          <CommunityPagination
            total={totalPage}
            page={currentPage}
            pathname={constructPathname()}
          />
        </article>
      </div>
    </>
  );
}
