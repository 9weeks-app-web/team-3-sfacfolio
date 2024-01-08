'use client';

import { useRouter } from 'next/navigation';

export default function page() {
  const router = useRouter();

  return (
    <div className='fixed left-0 top-0 z-[1000] h-screen w-screen bg-black/60'>
      page
      <span onClick={() => router.back()}>Close modal</span>
    </div>
  );
}
