import Image from 'next/image';

import CommunityBannerImage from '@images/CommunityBanner.svg';
import PlusIcon from '@/components/Icons/PlusIcon';

export default function CommunityBanner() {
  return (
    <div className='relative h-[448px] w-full'>
      <Image
        src={CommunityBannerImage}
        alt='Community banner'
        layout='fill'
        objectFit='cover'
      />
      <div className='container absolute left-1/2 top-1/2 flex h-full -translate-x-1/2 -translate-y-1/2 flex-col justify-center'>
        <p className='mb-2 text-[50px] font-extrabold leading-tight'>
          스팩에서 준비한 자유로운
          <br />
          커뮤니티와 스팩 후기까지!
        </p>
        <p className='mb-10 text-[20px] font-medium leading-6'>
          질문하고 자유롭게 소통할 수 있는 게시판과
          <br />
          스팩만의 솔직한 후기를 볼 수 있어요!
        </p>
        <div className='flex gap-4'>
          <button className='rounded-full border border-black bg-black px-5 py-[14px] text-[18px] font-bold text-white'>
            스팩 후기 보러 가기
          </button>
          <button className='flex items-center justify-center gap-3 rounded-full border border-black px-5 py-[14px] text-[18px] font-bold'>
            커뮤니티 글쓰기 <PlusIcon size={18} color='black' />
          </button>
        </div>
      </div>
    </div>
  );
}
