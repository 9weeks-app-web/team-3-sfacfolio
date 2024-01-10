import Image from 'next/image';
import CloseIcon from '@images/CloseIcon.svg';
import HeartIcon from '@/components/HeartIcon';

function PortfolioInfoHeader() {
  return (
    <div className='flex flex-col justify-between  h-[220px] px-6 py-9 border-b'>
      <div className='flex flex-col gap-3'>
        <div className='flex justify-between items-center'>
          <span className='text-label1 font-bold leading-6'>
            강북구청 - 강북프렌즈
          </span>
          <Image src={CloseIcon} alt='close' />
        </div>
        <span className='text-label2 font-medium text-text-alternative'>
          여러 소유자
        </span>
      </div>
      <div className='flex gap-4 self-center'>
        <button className='flex gap-1 justify-center items-center w-[100px] h-[35px] rounded-xl bg-[#f91d6c]'>
          <HeartIcon width={12} height={12} fill='#ffffff' />
          <span className='text-label1 font-semibold leading-normal text-white'>
            좋아요
          </span>
        </button>
        <button className='w-[100px] h-[35px] border rounded-xl'>
          <span className='text-label1 font-semibold text-text-normal'>
            공유
          </span>
        </button>
        <button className='w-[100px] h-[35px] border rounded-xl'>
          <span className='text-label1 font-semibold text-text-normal'>
            저장
          </span>
        </button>
      </div>
    </div>
  );
}

export default PortfolioInfoHeader;
