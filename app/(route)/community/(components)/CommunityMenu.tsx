import { Dispatch, SetStateAction } from 'react';
import { menuType } from '../page';

interface CommunityMenuProps {
  menu: menuType[];
  currentMenu: string;
  setCurrentMenu: Dispatch<SetStateAction<string>>;
}

export default function CommunityMenu({
  menu,
  currentMenu,
  setCurrentMenu,
}: CommunityMenuProps) {
  return (
    <ul className='my-[60px] w-[267px]'>
      {menu.map((item: menuType) => {
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
