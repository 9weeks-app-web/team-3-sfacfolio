import React from 'react';
import { footerInfo } from '@/constants';

export default function FooterInfo() {
  return (
    <ul className='mb-[22px] flex max-w-[919px] flex-wrap gap-1.5'>
      {footerInfo.map(item => (
        <li key={item.id}>
          {item.text}
          <span className='ml-1.5'>{item.icon ?? '|'}</span>
        </li>
      ))}
    </ul>
  );
}
