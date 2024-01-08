import React, { ReactNode } from 'react';

export default function CardContainer({ children }: { children: ReactNode }) {
  return <div className='mt-6 grid grid-cols-4 gap-6'>{children}</div>;
}
