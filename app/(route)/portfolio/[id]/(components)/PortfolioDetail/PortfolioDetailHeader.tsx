'use client';
import Image from 'next/image';
import ArrowDownFull from '@images/ArrowDownFull.svg';
import { useState } from 'react';

const owners = [
  {
    name: 'Duke Mong',
    position: 'BX 디자이너',
    image:
      'https://images.unsplash.com/photo-1602734846297-9299fc2d4703?q=80&w=3436&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'HYEONJEONG Kim',
    position: 'UX 디자이너',
    image:
      'https://images.unsplash.com/photo-1500259783852-0ca9ce8a64dc?q=80&w=2448&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Jaehoon Lee',
    position: '프로덕트 매니저',
    image:
      'https://images.unsplash.com/photo-1561037404-61cd46aa615b?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Ynha KIM',
    position: '프론트 개발자',
    image:
      'https://images.unsplash.com/photo-1492681290082-e932832941e6?q=80&w=3271&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

function PortfolioDetailHeader() {
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {
    setIsOpen(pre => !pre);
  };

  return (
    <div className='relative flex items-center gap-6 px-[42px] pt-[33.5px] pb-[37.5px]'>
      <div className='relative w-[62px] h-[62px] rounded-full bg-gray-500 overflow-hidden'>
        <Image
          src='https://images.unsplash.com/photo-1602734846297-9299fc2d4703?q=80&w=3436&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt='avatar'
          fill
          objectFit='cover'
        />
      </div>
      <div className='space-y-[14px]'>
        <span className='text-subTitle font-bold leading-6'>
          강북구청 - 강북프렌즈
        </span>
        <div className='flex items-center gap-[7px] text-lg leading-4'>
          <span className='text-[#4e4e4e] font-semibold'>여러 소유자</span>
          <Image
            src={ArrowDownFull}
            alt='arrowDown'
            className='cursor-pointer'
            onClick={handleButtonClick}
          />
          <span className='text-[#a5a5a5] font-semibold'>모두 팔로우</span>
        </div>
      </div>
      <div className='absolute top-0 right-0 px-3 py-[10px] text-label1 font-bold rounded-tr-lg rounded-bl-lg text-white bg-primary-weak '>
        UI/UX 인턴형 프로그램 과정
      </div>

      <div
        className={`${
          !isOpen && 'h-0 opacity-0'
        } absolute h-fit top-[110px] left-[125px] transition-all`}
      >
        <ul className='relative w-[268px] p-4 space-y-4 rounded-lg shadow-[0px_0px_3px_0px_rgba(0,0,0,0.25)] bg-white'>
          {owners.map(owner => (
            <li
              key={owner.name}
              className='relative z-[300] flex justify-between items-center'
            >
              <div className='flex items-center gap-[5px]'>
                <div className='relative w-[40px] h-[40px] rounded-full bg-gray-500 overflow-hidden object-fill'>
                  <Image
                    src={owner.image}
                    alt='avatar'
                    fill
                    objectFit='cover'
                  />
                </div>
                <div className='flex flex-col'>
                  <span className='text-[11px] font-bold'>{owner.name}</span>
                  <span className='text-[11px] font-normal'>
                    {owner.position}
                  </span>
                </div>
              </div>
              <div>
                <span className='cursor-pointer text-[11px] font-semibold text-primary-weak'>
                  팔로우
                </span>
              </div>
            </li>
          ))}
        </ul>
        <div className='absolute -top-[4px] left-5 w-0 h-0 border-[10px] border-white border-l-transparentshadow-md rotate-45 shadow-[0px_0px_3px_0px_rgba(0,0,0,0.25)]'></div>
        <div className='absolute top-0 left-[15px] w-0 h-0 border-[15px] border-white border-l-transparentshadow-md'></div>
      </div>
    </div>
  );
}

export default PortfolioDetailHeader;
