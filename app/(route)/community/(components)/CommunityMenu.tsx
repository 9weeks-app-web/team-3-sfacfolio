'use client';

import { useState } from 'react';

const menu = [
  { name: '실시간 인기 글', path: '' },
  { name: '질의응답', path: '' },
  { name: '자유게시판', path: '' },
  { name: '스팩 후기', path: '' },
];

export default function CommunityMenu() {
  const [currentMenu, setCurrentMenu] = useState('실시간 인기 글');

  return (
    <ul className='my-[60px] w-[267px]'>
      {menu.map(item => {
        return (
          <li
            key={item.name}
            className={`flex h-[60px] cursor-pointer items-center rounded-lg p-4 text-[18px] ${
              currentMenu === item.name &&
              'bg-background-primary text-primary-heavy'
            }`}
            onClick={() => setCurrentMenu(item.name)}
          >
            {item.name}
          </li>
        );
      })}
    </ul>
  );
}
