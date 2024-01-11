import Image from 'next/image';

import BannerImage from '@images/SpacQuiz/BannerImage.svg';

export default function Banner() {
  return (
    <div className='my-6 flex h-[142px] w-full items-center justify-between rounded-lg bg-primary-assitive px-[45px] py-6'>
      <div className='flex items-center justify-center gap-[10px]'>
        <Image src={BannerImage} alt='banner image' />
        <div>
          <p className='text-[20px] font-bold text-text-normal'>
            매주 월요일! A/B가 업데이트 됩니다!
          </p>
          <p className='text-[18px] text-text-normal'>
            UX/UI 퀴즈를 맞히고 멋진 디자이너로 성장해 보세요!
          </p>
        </div>
      </div>
      <button className='h-12 w-[312px] rounded-lg bg-primary-heavy text-center font-bold text-white'>
        최신 퀴즈 풀러가기
      </button>
    </div>
  );
}
