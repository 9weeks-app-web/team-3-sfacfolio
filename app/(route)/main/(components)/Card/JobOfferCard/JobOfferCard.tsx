import React from 'react';
import Card from '../Card';
import JobOfferCardFooter from './JobOfferCardFooter';
import JobOfferCardBody from './JobOfferCardBody';

export default function JobOfferCard({ dDay = 20 }: { dDay: number }) {
  return (
    <Card
      imageUrl='https://s3-alpha-sig.figma.com/img/8b27/1ee9/fe6823b98f8d9fee57e77bba684c73ea?Expires=1704672000&Signature=ffM3ljiy7OPBL8yB7tYEnZNDknefqPnBgYqcaAROD~0TVszWb8upkU3ofaBqfZntftOjRTS5bD9hzcaFUXRxaV1cGuY8M5RcKXPJLPpd0gzEBUz3vCHVwkcQbA~4DyBmdyfZpBSo0zLjsSWXC8mwaDArvVqUI92wy5jjZNd7IMb1ZpNSjvvbTOQUT2WIjwX97KdJLOAve56W0Y~aK1DUpnPZd4OUEUj44foFQT5prMsb6-37Pu8QPWfKcqj5ryMv-BvuWpgrktZMSqUyH-Mboc-uf2yvDgM6GwbSVlhI9OATOm-ogOE5utAdF8zLsN3mWxpa6T0aJBaDiORfouCJIA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
      imageHover={false}
      badge={`D-${dDay ? dDay : 0}`}
      share={true}
      badgeColor='bg-primary-heavy'
      body={<JobOfferCardBody />}
      footer={<JobOfferCardFooter />}
    />
  );
}
