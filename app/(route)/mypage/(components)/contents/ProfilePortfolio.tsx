import Card from '@/(route)/main/(components)/Card/Card';
import PortfolioCardBody from '@/(route)/main/(components)/Card/PortfoiloCard/PortfoiloCardBody/PortfolioCardBody';
import CategoryButtonWrap from '@/components/CategoryButtonWrap';
import DropDownFilter from '@/components/DropDownFilter';

import { PortfolioDummy } from '@/dummy';

const categories = [
  { title: '디자인 전체' },
  { title: 'UX/UI 디자인' },
  { title: 'UX 디자인' },
  { title: 'UI 디자인' },
  { title: '웹 디자인' },
  { title: '인터렉션 디자인' },
];

export default function ProfilePortfolio() {
  return (
    <div>
      <CategoryButtonWrap type='button' categories={categories} />
      <div className='float-end mb-6 mt-4 flex'>
        <DropDownFilter filterCategory='정렬방식' filterOption='추천 순' />
      </div>
      <div className='grid w-full grid-cols-3 gap-2'>
        {PortfolioDummy.map(portfolio => (
          <Card
            key={portfolio.id}
            imageUrl={portfolio.imageUrl}
            imageHover={true}
            badge='UXUI 인턴형 프로그램 과정'
            body={
              <PortfolioCardBody
                title={portfolio.title}
                category={portfolio.category}
              />
            }
          />
        ))}
      </div>
    </div>
  );
}
