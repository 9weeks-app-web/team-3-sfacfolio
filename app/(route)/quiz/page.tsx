'use client';

import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { useQuery } from 'react-query';

import SearchInput from '@/components/SearchInput';
import DropDownFilterProps from '@/components/DropDownFilter';
import Banner from './(components)/Banner';
import SpacQuizBox from './(components)/SpacQuizBox';
import Pagination from '@/components/Pagination';
import Loader from '@/components/Loader';

import { fetchDummyPosts } from '@/api/spacQuiz';
import ArrowDownButton from '@images/ArrowDownButton.svg';

export default function pages() {
  const router = useRouter();
  const params = useSearchParams();
  const currentPage = parseInt(params.get('page') || '1');

  const queryKey = [`quiz-${currentPage}`];
  const { data, isLoading, isError } = useQuery(
    queryKey,
    () => fetchDummyPosts(currentPage),
    { keepPreviousData: true },
  );

  // 페이지네이션 변경 시 라우터 업데이트
  const changePage = (page: number) => {
    router.push(`/quiz?&page=${page}`);
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
    <div className='mx-auto w-[954px]'>
      <SearchInput />

      <div className='flex items-center justify-between'>
        <p className='text-title font-bold'>A/B 퀴즈</p>
        <DropDownFilterProps filterCategory='정렬방식' filterOption='인기 순' />
      </div>

      <Banner />

      <div className='mb-11 flex flex-wrap gap-6'>
        {data.posts.map(item => (
          <SpacQuizBox
            key={item.id}
            id={item.id}
            title={item.title}
            date={item.date}
            image={item.image}
          />
        ))}
      </div>

      <Pagination
        total={data.totalPages}
        page={currentPage.toString()}
        changePage={changePage}
      />
    </div>
  );
}
