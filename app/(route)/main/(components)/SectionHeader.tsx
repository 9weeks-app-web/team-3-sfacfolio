import Link from 'next/link';
import { UrlObject } from 'url';
import Image from 'next/image';
import { Icons } from '../../../../public/assets/images';

interface SectionHeaderProps {
  title: string;
  more?: UrlObject;
}

function SectionHeader({ title, more }: SectionHeaderProps) {
  return (
    <div className='flex h-[56px] items-center justify-between'>
      <p className='text-title font-bold '>{title}</p>
      {more && (
        <Link
          href={more}
          className='flex items-center text-[18px] text-text-alternative'
        >
          더보기
          <Image src={Icons.moreButton} alt='more-button' className='ml-1' />
        </Link>
      )}
    </div>
  );
}

export default SectionHeader;
