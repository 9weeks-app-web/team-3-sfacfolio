'use client';

import { useEffect, useState } from 'react';

import RealTimeKeyword from '../../components/RealTime/RealTimeKeyword';
import CommunityBanner from './(components)/CommunityBanner';
import CommunityMenu from './(components)/CommunityMenu';
import CommunitySearch from './(components)/CommunitySearch';
import CommunityPostList from './(components)/CommunityPostList';

import { CommunityPostDummy, PopularKeywordsDummy_COMMUNITY } from '@/dummy';
import CommunityPagination from './(components)/CommunityPagination';
import { useRouter, useSearchParams } from 'next/navigation';
import { CommunityPostType } from '@/types';

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

// 상수와 헬퍼 함수 정의
const ITEMS_PER_PAGE = 10;

const sortByViews = (posts: CommunityPostType[]) => {
  return posts.slice().sort((a, b) => b.views - a.views);
};

const sortByCreatedAt = (posts: CommunityPostType[]) => {
  return posts
    .slice()
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    );
};

const findCurrentMenuItem = (currentMenu: string) =>
  menu.find(item => item.name === currentMenu) || menu[0];

const filterAndSortPosts = (
  currentMenu: string,
  posts: CommunityPostType[],
) => {
  if (currentMenu === '실시간 인기 글') {
    return sortByViews(posts);
  } else {
    const filteredPosts = posts.filter(post => post.category === currentMenu);
    return sortByCreatedAt(filteredPosts);
  }
};

export default function page() {
  const [currentMenu, setCurrentMenu] = useState('실시간 인기 글');
  const posts = CommunityPostDummy;

  const router = useRouter();
  const params = useSearchParams();
  const currentPage = params.get('page') || '1';

  // 현재 메뉴와 관련된 게시글 필터링 및 정렬
  const currentMenuItem = findCurrentMenuItem(currentMenu);
  const sortedAndFilteredPosts = filterAndSortPosts(
    currentMenuItem.name,
    posts,
  );

  // 페이지네이션 계산
  const totalPage = Math.ceil(sortedAndFilteredPosts.length / ITEMS_PER_PAGE);
  const startIndex = (parseInt(currentPage) - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const visiblePosts = sortedAndFilteredPosts.slice(startIndex, endIndex);

  // URL 생성 함수
  const constructPathname = () => {
    const currentMenuItem = menu.find(item => item.name === currentMenu);
    const categoryPath = currentMenuItem ? currentMenuItem.path : 'hot';
    return {
      pathname: '/community',
      query: { category: categoryPath, page: currentPage },
    };
  };

  // 메뉴 변경 시 URL 업데이트
  useEffect(() => {
    // currentMenu와 관련된 menu path 찾기
    const currentMenuItem = menu.find(item => item.name === currentMenu);
    const categoryPath = currentMenuItem ? currentMenuItem.path : 'hot';

    router.push(`/community?category=${categoryPath}&page=${currentPage}`);
  }, [currentMenu, currentPage, router]);

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
