import React from 'react';

interface PortfolioCardBodyProps {
  title: string;
  category: string;
}

export default function PortfolioCardBody({
  title,
  category,
}: PortfolioCardBodyProps) {
  return (
    <div>
      <div className='mb-3 text-label1 font-bold leading-4 text-white'>
        {title}
      </div>
      <div className='text-label1 leading-4 text-white'>{category}</div>
    </div>
  );
}
