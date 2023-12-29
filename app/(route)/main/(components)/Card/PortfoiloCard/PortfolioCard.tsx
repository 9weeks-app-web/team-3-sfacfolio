import React from 'react';
import Card from '../Card';
import PortfolioCardFooter from './PortfolioCardFooter/PortfolioCardFooter';
import PortfolioCardBody from './PortfoiloCardBody/PortfolioCardBody';

export default function PortfolioCard() {
  const 참여인원 = 4;

  return (
    <Card
      imageUrl='https://s3-alpha-sig.figma.com/img/8b27/1ee9/fe6823b98f8d9fee57e77bba684c73ea?Expires=1704672000&Signature=ffM3ljiy7OPBL8yB7tYEnZNDknefqPnBgYqcaAROD~0TVszWb8upkU3ofaBqfZntftOjRTS5bD9hzcaFUXRxaV1cGuY8M5RcKXPJLPpd0gzEBUz3vCHVwkcQbA~4DyBmdyfZpBSo0zLjsSWXC8mwaDArvVqUI92wy5jjZNd7IMb1ZpNSjvvbTOQUT2WIjwX97KdJLOAve56W0Y~aK1DUpnPZd4OUEUj44foFQT5prMsb6-37Pu8QPWfKcqj5ryMv-BvuWpgrktZMSqUyH-Mboc-uf2yvDgM6GwbSVlhI9OATOm-ogOE5utAdF8zLsN3mWxpa6T0aJBaDiORfouCJIA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
      imageHover={true}
      badge='UXUI 인턴형 프로그램 과정'
      badgeColor='bg-secondary-weak'
      body={<PortfolioCardBody />}
      footer={<PortfolioCardFooter 참여인원={참여인원} />}
    />
  );
}
