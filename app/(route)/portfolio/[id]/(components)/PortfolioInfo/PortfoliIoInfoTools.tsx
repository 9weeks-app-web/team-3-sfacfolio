import Image from 'next/image';
import Photoshop from '@images/Tools/Photoshop.svg';
import Illustrator from '@images/Tools/Illustrator.svg';
import Premiere from '@images/Tools/Premiere.svg';
import Figma from '@images/Tools/Figma.svg';

function PortfoliIoInfoTools() {
  return (
    <div className='flex flex-col gap-5 px-6 py-5 border-b'>
      <span className='text-label1 font-bold leading-6'>사용 툴</span>
      <ul className='flex gap-3 flex-wrap'>
        {[
          { tool: 'Photoshop', icon: Photoshop },
          { tool: 'Illustrator', icon: Illustrator },
          { tool: 'Premiere Pro', icon: Premiere },
          { tool: 'Figma', icon: Figma },
        ].map(list => (
          <li className='flex gap-[10px] px-4 py-2 border rounded'>
            <div className='w-6 h-6 rounded-lg bg-gray-500'>
              <Image src={list.icon} alt='tool' />
            </div>
            <span className='text-label1 font-medium leading-6'>
              {list.tool}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PortfoliIoInfoTools;
