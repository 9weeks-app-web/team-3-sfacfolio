import Image from 'next/image';
import CompanyDetailButton from './CompanyDetailButton';
import CompanyDetailRange from './CompanyDetailRange';
import CompanyDetailLink from './CompanyDetailLink';
import BannerImage from '@images/BannerImage.png';
import { CompanyHireType } from '@/types/hire';

function CompanySticky({ data }: { data: CompanyHireType }) {
  return (
    <div className='sticky top-[153px] flex flex-col gap-6 w-[411px] h-fit'>
      {/* 회사 정보 */}
      <div className='flex gap-3 p-6 border rounded-lg bg-white'>
        {/* 회사 이미지 */}
        <div className='w-14 h-14 rounded-full bg-black'>
          {data.companyAvatar && (
            <Image src={data.companyAvatar} alt='company' fill />
          )}
        </div>
        {/* 회사 이름 */}
        <div className='font-medium'>
          <p className='text-lg leading-6'>{data.notice}</p>
          <span className='text-label1  leading-6 text-text-assitive '>
            {data.company}
          </span>
        </div>
      </div>
      {/* 북마크 및 지원 */}
      <div className='flex flex-col justify-center gap-4 h-[232px] px-6 border rounded-lg bg-white'>
        <span className='text-lg font-bold left-6'>
          공고를 확인하고 바로 지원해 보세요!
        </span>
        <CompanyDetailButton mode='bookmark' isActive={false} />
        <CompanyDetailButton mode='apply' isActive={!data.isHire} />
      </div>
      {/* 포트폴리오 퍼센트 */}
      <div className='flex flex-col gap-10 p-6 border rounded-lg bg-white'>
        <div className='flex flex-col gap-2 text-primary-heavy'>
          <span className='text-lg font-bold leading-6'>
            내 포트폴리오 이 기업과 맞을까?
          </span>
          <span className='text-label1 font-normal leading-6'>
            내 포트폴리오와 기업과의 매칭률을 확인해 보세요.
          </span>
        </div>
        <CompanyDetailRange progress={80} isPortfolio={false} />
        <CompanyDetailLink link={'/'} />
      </div>
      {/* 베너 */}
      <div className='relative h-[136px] rounded-lg bg-white overflow-hidden'>
        <Image src={BannerImage} alt='banner' objectFit='cover' fill />
      </div>
    </div>
  );
}

export default CompanySticky;
