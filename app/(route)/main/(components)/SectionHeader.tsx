import Link from 'next/link';
import Image from 'next/image';
import MoreButton from '@images/MoreButton.svg';

interface SectionHeaderProps {
  title: string;
  subTitle?: string;
  more?: string;
  className?: string;
}

function SectionHeader({
  subTitle,
  title,
  more,
  className = '',
}: SectionHeaderProps) {
  return (
    <div className={`flex items-center justify-between ${className}`}>
      <div className='flex flex-col gap-2.5'>
        <h3 className='text-subTitle leading-6 text-primary-heavy'>
          {subTitle}
        </h3>
        <h2 className='text-title font-bold leading-7'>{title}</h2>
      </div>
      {more && (
        <Link
          href={{ pathname: more }}
          className='flex items-center text-[18px] text-text-alternative'
        >
          더보기
          <Image src={MoreButton} alt='more button' className='ml-1' />
        </Link>
      )}
    </div>
  );
}

export default SectionHeader;
