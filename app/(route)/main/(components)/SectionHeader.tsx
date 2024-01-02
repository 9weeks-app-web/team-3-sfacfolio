import Link from 'next/link';
import { UrlObject } from 'url';
import Image from 'next/image';
import { Icons } from '@images';

interface SectionHeaderProps {
  title: string;
  more?: any;
  className?: string;
}

function SectionHeader({ title, more, className = '' }: SectionHeaderProps) {
  return (
    <div className={`flex items-center justify-between ${className}`}>
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
