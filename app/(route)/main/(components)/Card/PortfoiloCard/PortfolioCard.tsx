import React from 'react';
import Card from '../Card';
import PortfolioCardFooter from './PortfolioCardFooter/PortfolioCardFooter';
import PortfolioCardBody from './PortfoiloCardBody/PortfolioCardBody';

interface PortfolioCardProps {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  content: null;
  workers: {
    id: number;
    name: string;
    userImage: string;
  }[];
  like: number;
  view: number;
}

export default function PortfolioCard({ ...props }: PortfolioCardProps) {
  const { title, category, workers, like, view } = props;

  return (
    <Card
      imageUrl={props.imageUrl}
      imageHover={true}
      badge='UXUI 인턴형 프로그램 과정'
      body={<PortfolioCardBody title={title} category={category} />}
      footer={<PortfolioCardFooter workers={workers} view={view} like={like} />}
    />
  );
}
