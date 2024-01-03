import Link from 'next/link';
import Image from 'next/image';
import MoreButton from '@images/MoreButton.svg';

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
          <Image src={MoreButton} alt='more-button' className='ml-1' />
        </Link>
      )}
    </div>
  );
}

export default SectionHeader;
