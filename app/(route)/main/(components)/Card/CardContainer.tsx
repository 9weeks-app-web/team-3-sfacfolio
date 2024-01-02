import React, { ReactNode } from 'react';

export default function CardContainer({ children }: { children: ReactNode }) {
  return (
    <div className='grid grid-cols-4 gap-x-6 gap-y-9 mt-6'>{children}</div>
  );
}
