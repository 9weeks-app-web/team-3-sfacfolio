import React from 'react';
import FooterLogo from '@images/FooterLogo.png';
import Image from 'next/image';
import FooterInfo from './FooterInfo';
import SocialIcons from './SocialIcons';

export default function Footer() {
  return (
    <footer className='h-[68px] bg-[#f4f4f4] py-[12px] pl-[22px] pr-[15px] text-[12px] text-[#565656]'>
      <div className='flex justify-between'>
        <FooterInfo />
        <div className='flex items-start gap-7'>
          <div className='flex items-center justify-between'>
            <SocialIcons />
          </div>
          <Image src={FooterLogo} alt='test' className='h-5' />
        </div>
      </div>
    </footer>
  );
}
