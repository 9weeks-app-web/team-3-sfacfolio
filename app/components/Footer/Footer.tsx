import React from 'react';
import Logo from '../../../public/assets/images/Logo.svg';
import Image from 'next/image';
import FooterInfo from './FooterInfo';
import SocialIcons from './SocialIcons';

export default function Footer() {
  return (
    <footer className='bg-white text-[12px] text-[#565656]'>
      <div className='pb-[12px] pl-[55px] pr-[26px] pt-[84px]'>
        <Image src={Logo} alt='test' className='mb-[30px]' />
        <FooterInfo />
        <div className='flex items-center justify-between'>
          <p>&copy; 2023 와이엠에스닷코 Co. All rights reserved.</p>
          <SocialIcons />
        </div>
      </div>
    </footer>
  );
}
