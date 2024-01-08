'use client';
import Link from 'next/link';
import PlusIcon from '@/components/PlusIcon';

interface CompanyDetailLinkPropsType {
  link: any;
}

function CompanyDetailLink({ link }: CompanyDetailLinkPropsType) {
  return (
    <Link
      href={link}
      className='flex justify-center items-center gap-3 p-4 rounded-lg border border-primary-assitive'
    >
      <span className='text-lg font-medium leading-6 text-primary-heavy'>
        내 포트폴리오 올리기
      </span>
      <PlusIcon width={24} height={24} stroke={'#0059ff'} />
    </Link>
  );
}

export default CompanyDetailLink;
