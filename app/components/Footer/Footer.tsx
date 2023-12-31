import React from 'react';
import FooterLogo from '@images/FooterLogo.svg';
import Image from 'next/image';
import FooterInfo from './FooterInfo';
import SocialIcons from './SocialIcons';

export default function Footer() {
  return (
    <footer className='fixed bottom-0 z-[10] w-full bg-white py-[12px] pl-[22px] pr-[15px] text-[12px] text-[#565656]'>
      <div className='flex justify-between'>
        <FooterInfo />
        <div className='flex items-start gap-7'>
          <SocialIcons />
          <Image src={FooterLogo} alt='test' className='h-5' />
        </div>
      </div>
    </footer>
  );
}
