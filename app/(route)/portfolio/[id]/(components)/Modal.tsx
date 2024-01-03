'use client';
import { useRef } from 'react';
import { useRouter } from 'next/navigation';

function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const overlay = useRef<HTMLDivElement>(null);

  const onDismiss = (evnet: React.MouseEvent<HTMLElement>) => {
    if (evnet.target === overlay.current) {
      router.back();
    }
  };

  return (
    <div
      className='z-20 overflow-auto fixed top-0 left-0 flex justify-center pt-20 pb-[355px]  w-screen h-screen bg-[rgba(0,0,0,0.8)]'
      ref={overlay}
      onClick={onDismiss}
    >
      {children}
    </div>
  );
}

export default Modal;
