import Image from 'next/image';
import ArrowRightIcon from '@/components/ArrowRightIcon';
import Copyright1 from '@images/Copyright1.svg';
import Copyright2 from '@images/Copyright2.svg';
import Copyright3 from '@images/Copyright3.svg';
import Copyright4 from '@images/Copyright4.svg';
import Heart from '@images/Heart.svg';
import Comment from '@images/Comment.svg';
import Eye from '@images/Eye.svg';
import PortfolioOwnerCardSlider from './PortfolioOwnerCardSlider';

function PortfolioDetailFooter() {
  return (
    <div>
      <div className='flex justify-end gap-2 p-6'>
        <Image src={Copyright1} alt='copyright' />
        <Image src={Copyright2} alt='copyright' />
        <Image src={Copyright3} alt='copyright' />
        <Image src={Copyright4} alt='copyright' />
      </div>
      <div className='flex flex-col justify-center items-center gap-3 w-full h-[340px] bg-[#161c1d]'>
        <span className='text-subTitle font-bold leading-6 text-white'>
          강북구청 - 강북프렌즈
        </span>
        <span className='text-lg font-medium leading-6 text-text-assitive'>
          3일 전 | 그래픽 디자인 · 캐릭터 디자인
        </span>
        <div className='flex gap-3'>
          <div className='flex items-center gap-1'>
            <Image src={Heart} alt='heart' />
            <span className='text-label2 font-normal leading-[22px] text-text-alternative'>
              583
            </span>
          </div>
          <div className='flex items-center gap-1'>
            <Image src={Comment} alt='comment' />
            <span className='text-label2 font-normal leading-[22px] text-text-alternative'>
              135
            </span>
          </div>
          <div className='flex items-center gap-1'>
            <Image src={Eye} alt='eye' />
            <span className='text-label2 font-normal leading-[22px] text-text-alternative'>
              9,283
            </span>
          </div>
        </div>
      </div>
      <div className='cursor-pointer flex gap-[10px] justify-center items-center py-[22px]  text-white bg-primary-weak'>
        <span>위 작업은 UI/UX 인턴형 프로그램 과정에서 진행되었습니다.</span>
        <ArrowRightIcon width={14} height={14} fill='#ffffff' />
      </div>
      <div className='py-6 overflow-hidden'>
        <span className='px-6 text-[20px] font-semibold'>공동 작업자</span>
        <PortfolioOwnerCardSlider />
      </div>
    </div>
  );
}

export default PortfolioDetailFooter;
