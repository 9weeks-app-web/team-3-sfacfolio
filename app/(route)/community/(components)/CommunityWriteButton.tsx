import Image from 'next/image';
import Link from 'next/link';

import IconEdit from '@images/IconEdit.svg';

export default function CommunityWriteButton() {
  return (
    <Link
      href={{ pathname: `/community/write` }}
      className='flex h-12 w-[120px] items-center justify-center gap-2 rounded-lg bg-primary-heavy text-label1 font-medium text-white'
    >
      <Image src={IconEdit} alt='글쓰기 버튼' />
      <span>글쓰기</span>
    </Link>
  );
}
