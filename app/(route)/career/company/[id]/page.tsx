'use client';
import { useParams } from 'next/navigation';
import CompanyInfo from './(components)/CompanyInfo/CompanyInfo';
import CompanySticky from './(components)/CompanySticky/CompanySticky';
import { useQuery } from 'react-query';
import { fetchHire } from '@/api/hire';
import Loader from '@/components/Loader';
import { CompanyHireType } from '@/types/hire';

interface HireQueryResult {
  data: CompanyHireType;
  isLoading: boolean;
  isError: boolean;
}

function CareerCompanyDetailPage() {
  const { id } = useParams();

  const { data, isLoading, isError } = useQuery(['hire', id], () =>
    fetchHire(Array.isArray(id) ? id[0] : id),
  ) as HireQueryResult;

  return (
    <>
      {isLoading ? (
        <div className='container flex h-screen items-center justify-center p-5 text-center'>
          <Loader />
        </div>
      ) : isError ? (
        <div className='container flex h-screen items-center justify-center p-5 text-center'>
          데이터 로드 중 오류가 생겼습니다.
          <br />
          다시 시도해 주세요.
        </div>
      ) : (
        <div className='bg-background-primary '>
          <div className='container pt-12 pb-[124px] flex justify-between'>
            <CompanyInfo data={data} />
            <CompanySticky data={data} />
          </div>
        </div>
      )}
    </>
  );
}

export default CareerCompanyDetailPage;
