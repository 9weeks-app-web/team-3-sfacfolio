'use client';

import React, { useState } from 'react';
import { footerInfo1, footerInfo2 } from '@/constants';
import IconPolygon from '@images/IconPolygon.png';
import Image from 'next/image';

export default function FooterInfo() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <ul className='mb-2 flex max-w-[800px] flex-wrap gap-x-2'>
        {footerInfo1.map(item => (
          <li key={item.id} className='flex'>
            <span>{item.text}</span>
            {item.id === 1 && (
              <button
                onClick={() => setOpen(prev => !prev)}
                className='ml-1 flex items-center font-medium'
              >
                <span className='mr-1'>사업자 정보</span>
                <Image
                  src={IconPolygon}
                  alt='polygon'
                  className={`${open ? 'rotate-0' : 'rotate-180'}`}
                />
              </button>
            )}
          </li>
        ))}
      </ul>
      <ul
        className={`max-w-[800px] flex-wrap gap-x-3 ${
          open ? 'flex' : 'hidden'
        }`}
      >
        {footerInfo2.map(item => (
          <li key={item.id} className='flex'>
            <span>{item.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
