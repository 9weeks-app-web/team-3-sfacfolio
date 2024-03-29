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
  logo: string;
}

export default function JobOfferCard({
  imageUrl,
  dDay,
  company,
  logo,
  ...props
}: JobOfferCardProps) {
  return (
    <Card
      imageUrl={imageUrl}
      imageHover={false}
      badge={dDay ? `D-` + dDay : '상시'}
      share={true}
      body={<JobOfferCardBody {...props} />}
      footer={<JobOfferCardFooter company={company} logo={logo} />}
    />
  );
}
