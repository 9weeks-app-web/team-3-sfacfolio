'use client';
import Image from 'next/image';
import { useState } from 'react';

function ABTest() {
  const [showExplanation, setShowExplanation] = useState(false);
  const [correctOption] = useState<'A' | 'B'>('A'); // 정답이 A라고 가정

  return (
    <div>
      {/* AB Test Description */}
      <div className='my-[32px] text-center'>
        <p className='text-title font-bold'>어떤 디자인이 더 적절할까요?</p>
        <span className='text-subTitle font-medium'>선택해 보세요</span>
      </div>

      {/* Options */}
      <div className='relative flex h-[300px] w-full overflow-hidden rounded-3xl'>
        {/* Option A */}
        <div
          className='group relative h-full w-3/6 cursor-pointer'
          onClick={() => setShowExplanation(true)}
        >
          <Image
            src='/assets/images/ABtest_A.png'
            alt='A'
            layout='fill'
            objectFit='contain'
            objectPosition='center'
            className='!relative'
            loading='lazy'
          />
          <div
            className={`absolute left-0 top-0 hidden h-full w-full bg-primary-heavy opacity-40  ${
              !showExplanation && 'group-hover:block'
            }`}
          ></div>
          <p
            className={`absolute right-10 top-0 text-[114px] font-bold ${
              showExplanation
                ? correctOption === 'A'
                  ? 'block text-primary-heavy'
                  : 'hidden'
                : 'text-text-alternative group-hover:text-white'
            }`}
          >
            A
          </p>
        </div>
        {/* Option B */}
        <div
          className='group relative h-full w-3/6 cursor-pointer bg-[#F3F2F8]'
          onClick={() => setShowExplanation(true)}
        >
          <Image
            src='/assets/images/ABtest_B.png'
            alt='B'
            layout='fill'
            objectFit='contain'
            objectPosition='center'
            className='!relative'
            loading='lazy'
          />
          <div className='absolute left-0 top-0 hidden h-full w-full bg-primary-heavy opacity-40 group-hover:block'></div>
          <p
            className={`absolute left-10 top-0 text-[114px] font-bold ${
              showExplanation
                ? correctOption === 'B'
                  ? 'block text-primary-heavy'
                  : 'hidden'
                : 'text-text-alternative group-hover:text-white'
            }`}
          >
            B
          </p>
        </div>

        {/* Answer Div */}
        {showExplanation && (
          <div
            className={`absolute h-full w-3/6 cursor-pointer  ${
              correctOption === 'A' ? 'right-0' : 'left-0'
            }`}
          >
            <div
              className='absolute left-0 top-0 h-full w-full bg-black/80 px-[40px] py-[60px] text-white
              '
            >
              <p className='mb-4 text-title font-bold'>정답은 A!</p>
              <span className='text-subTitle'>
                옵션이 적다면 드롭다운 메뉴보다 라디오 버튼이 좋아요.
                <br />
                사용자가 모든 옵션을 명확하게 파악할 수 있고,
                <br />
                보다 빠르게 입력할 수 있어요.
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ABTest;
