'use client';

import React from 'react';
import CommunityMenu from '../(components)/CommunityMenu';
import { menu } from '../page';
import RealTimeKeyword from '@/components/RealTime/RealTimeKeyword';
import Image from 'next/image';
import CommunityDetailTag from './(components)/CommunityDetailTag';
import CommunityDetailLikeAndSaveButton from './(components)/CommunityDetailLikeAndSaveButton';
import Add from '@images/Add.svg';
import Frame from '@images/Frame.svg';
import HeartIcon from '@/components/Icons/HeartIcon';
import EyeIcon from '@/components/Icons/EyeIcon';
import MessageIcon from '@/components/Icons/MessageIcon';

function CommunityDetailPage() {
  return (
    <div className='container mb-20 flex justify-between gap-[60px]'>
      <aside>
        <CommunityMenu menu={menu} currentMenu={'실시간 인기 글'} />
        <RealTimeKeyword type='community' />
      </aside>
      <article className='mt-[60px] w-full'>
        <div className='border-y border-line-normal py-4'>
          <div className='mb-2 leading-4 text-text-alternative'>스팩 후기</div>
          <div className='mb-4 flex w-full items-center justify-between pr-[15px]'>
            <h1 className='text-title font-bold leading-[22px]'>
              UXUI 인턴형 프로그램 1기 후기
            </h1>
            <button>
              <Image src={Frame} alt='more' width={24} height={24} />
            </button>
          </div>
          <div className='flex w-full items-end justify-between'>
            <div className='flex items-center gap-[11px] text-caption1 text-text-alternative'>
              <div className='flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border-2 border-white'>
                <Image
                  src='https://s3-alpha-sig.figma.com/img/6891/b163/706b318f4281f7751f15952875b3da85?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g30-BWCx~0~WPSs4x7bRs2~zYExcY~Ol0cu9nf11X4w33hiTh-QKaDPllWvJ4MPR64fLesIPaz~j~JRCnuNY4b7rMd7K612wBry2tseWZ2dpcvM0jHQw34DOr9s0i8q8i5dYqa6YQkNWFhw6ftrVA5gibShs4-wuqMCfAB4iD~kwyoesD73cx6LJlqTnPfmlo9aWPgbLxY-3zkGse-ryedan-odk2vRRSg-shAWg38yv7J-MLP9hMO5CYf8WHWyZsjmM9lDvRG0BN3ihgF~4O9aeBehb7vSncY7QWhNX8PQGdOPOkglbUkZNnbiWeTh09UsroedVlETXlmT5OkVuKw__'
                  alt='profile'
                  width={40}
                  height={40}
                />
              </div>
              <div className='flex gap-2'>
                <span className='font-bold text-text-normal'>김길동</span>
                <span>2023.12.27</span>
                <span>14:09</span>
              </div>
            </div>
            <div className='flex items-center gap-4 text-text-alternative'>
              <div className='flex items-center gap-1 text-caption2 text-text-alternative'>
                <HeartIcon size={20} color='#8A8A8A' />
                <span>11</span>
              </div>
              <div className='flex items-center gap-1 text-caption2 text-text-alternative'>
                <MessageIcon size={18} color='#8A8A8A' />
                <span>4</span>
              </div>
              <div className='flex items-center gap-1 text-caption2 text-text-alternative'>
                <EyeIcon size={20} color='#8A8A8A' />
                <span>160</span>
              </div>
            </div>
          </div>
        </div>

        <div className='my-[60px] flex flex-col gap-6'>
          <Image
            src='https://s3-alpha-sig.figma.com/img/753e/a2d5/7229d65d41e36ff3134f052c6e137f68?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MSvl1yU9HEGKv1-Rq8PYEoheW7hVOOWs0yESW7C~xJq~JihtJkm~BQBuL1o6H1MAEEOxCbZOdgB7~i3QuWvOXRFkrySMlR-ClRVXzE2IxddwPrOaYVW9MTZY57UYu~K2tB0Jku8o-GYsMY-9w0qfx5l8OwELsITumKtdiRgE6w1U47hZMiB4wQZkk~iRDpLvA2PyjX-RVlpm64HNyn4198rfPxANjtoM7sTp-TjcEYdyCFUB5n8dlWh9FKVAUhOpTO0T0hhHaYq6tdpJafsqLwTdR5A3K9toaa-Wqvcz8A0qJ5AjTcsQHXJBcT9xJ8Rh9PjSjlp7YFGqrh51fv6sgA__'
            alt='content-image'
            width={954}
            height={478}
            className='rounded-lg'
          />
          <p>
            이번에 인턴형 프로그램 1기에 참여한 무순죽순채순입니다. 10월부터
            사전 직무교육 후에 팀 프로젝트를 진행했습니다.
            <br />
            처음 사전 직무 교육을 통해 UXUI에 대한 이론을 배우고 실습도
            진행합니다.
            <br />
            그리고 드디어 인턴형프로그램 과정! 총 3번의 팀 프로젝트를 진행했는데
            그중에 마지막 프로젝트가 가장 좋았습니다.
            <br />또 많은 사람들을 만나면서 배울점도 많습니다.
            <br />
            배우면서 돈도 받으니 기분이 좋습니다.
            <br />
            인턴수당으로 팀원들을 만나 맛있는 곱창을 사먹었습니다.
            <br />
            그러니 다들 많이 많이 참여하세요~호호호
          </p>
        </div>
        <div className='flex w-full items-end justify-between'>
          <div className='flex gap-2'>
            {['UX', '디자인', '인턴형프로그램'].map(tag => (
              <CommunityDetailTag key={tag} tag={tag} />
            ))}
          </div>
          <div className='flex gap-2'>
            <CommunityDetailLikeAndSaveButton mode={'like'} />
            <CommunityDetailLikeAndSaveButton mode={'save'} />
          </div>
        </div>
        <div className='relative my-[60px] flex h-[130px] w-full items-center overflow-hidden rounded-lg'>
          <Image
            src='https://s3-alpha-sig.figma.com/img/4997/7b34/40203af128e3acf510a0c31c402ac05b?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Myyt1rSAkFZZsZg3D5uCcEhJ4liX1xfV8GrQlOxXqT4RgkJNSS1hafTeWS879uaVFUUlA4O9uhpUUqDnlWwLX99MQtUdPDDcenDmDVVmKGYoKS4dBZLo7D0Ed7KFlm-VPOMnCVJNeBGf4gcBzROsZMYSwnKUzi0lGPLm3ZpOKpQ3Hx0P5oqP6PDOSUh0MY5oiDJneSmLCzDtiji68VqL4CMgwbAJMk7pJbgnaSZBqvmIket6woJv8-MdHBJHAO-c818visUT6KL6rcs8jKgEbfPO79O00KQd9AeIiic41g7SNcj~qfRYhgs4aSxU-dcQUnypwDx099s-3KenIA6QIg__'
            alt='banner'
            width={954}
            height={130}
          />
          <button className='absolute right-[44px] top-[39px] flex w-[238px] items-center justify-between rounded-full bg-white px-5 py-[14px] text-lg font-bold leading-6'>
            스팩 프로그램 참여하기
            <Image src={Add} alt='add' width={18} height={18} />
          </button>
        </div>
      </article>
    </div>
  );
}

export default CommunityDetailPage;
