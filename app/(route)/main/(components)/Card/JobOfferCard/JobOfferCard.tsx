import React from 'react';
import Card from '../Card';
import JobOfferCardFooter from './JobOfferCardFooter';
import JobOfferCardBody from './JobOfferCardBody';

interface JobOfferCardProps {
  category: string;
  career: string[];
  title: string;
  imageUrl: string;
  dDay?: number;
  company: string;
}

export default function JobOfferCard({
  imageUrl,
  dDay,
  company,
  ...props
}: JobOfferCardProps) {
  return (
    <Card
      imageUrl={imageUrl}
      imageHover={false}
      badge={dDay ? `D-` + dDay : '상시'}
      share={true}
      badgeColor='bg-white/20'
      body={<JobOfferCardBody {...props} />}
      footer={<JobOfferCardFooter company={company} />}
    />
  );
}
