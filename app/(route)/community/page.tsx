'use client';

import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useRouter, useSearchParams } from 'next/navigation';

import RealTimeKeyword from '../../components/RealTime/RealTimeKeyword';
import CommunityBanner from './(components)/CommunityBanner';
import CommunityMenu from './(components)/CommunityMenu';
import CommunitySearch from './(components)/CommunitySearch';
import CommunityPostList from './(components)/CommunityPostList';
import CommunityPagination from './(components)/CommunityPagination';

import { PopularKeywordsDummy_COMMUNITY } from '@/dummy';
import { fetchDummyPosts } from '@/api/community';
import Loader from '@/components/Loader';

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
  const router = useRouter();
  const [currentMenu, setCurrentMenu] = useState('실시간 인기 글');

  const params = useSearchParams();
  const currentPage = parseInt(params.get('page') || '1');
  const currentCategory = params.get('category') || 'hot';

  // React Query를 사용하여 더미 데이터 가져오기
  const queryKey = [`posts-${currentCategory}-${currentPage}`];
  const { data, isLoading, isError } = useQuery(
    queryKey,
    () => fetchDummyPosts(currentPage, currentMenu),
    { keepPreviousData: true },
  );

  // 메뉴 변경 시 라우터 업데이트
  const changeMenu = (menuName: string) => {
    const menuItem = menu.find(item => item.name === menuName);
    if (menuItem) {
      setCurrentMenu(menuName);
      router.push(`/community?category=${menuItem.path}&page=1`);
    }
  };

  // 페이지네이션 변경 시 라우터 업데이트
  const changePage = (page: number) => {
    router.push(`/community?category=${currentCategory}&page=${page}`);
  };

  if (isLoading) {
    return (
      <div className='container flex h-screen items-center justify-center p-5 text-center'>
        <Loader />
      </div>
    );
  }
  if (!data || isError) {
    return (
      <div className='container flex h-screen items-center justify-center p-5 text-center'>
        데이터 로드 중 오류가 생겼습니다.
        <br />
        다시 시도해 주세요.
      </div>
    );
  }

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
            setCurrentMenu={changeMenu}
          />
          <RealTimeKeyword
            keywords={PopularKeywordsDummy_COMMUNITY}
            type='community'
          />
        </section>

        {/* post article */}
        <article className='w-[954px]'>
          <CommunitySearch />

          <CommunityPostList currentMenu={currentMenu} posts={data.posts} />

          <CommunityPagination
            total={data.totalPages}
            page={currentPage.toString()}
            changePage={changePage}
          />
        </article>
      </div>
    </>
  );
}
