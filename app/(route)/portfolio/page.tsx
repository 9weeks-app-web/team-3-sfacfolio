import CategoryButtonWrap from '@/components/CategoryButtonWrap';
import SectionHeader from '../main/(components)/SectionHeader';
import SectionWrapper from '../main/(components)/SectionWrapper';
import CardContainer from '../main/(components)/Card/CardContainer';
import PortfolioCard from '../main/(components)/Card/PortfoiloCard/PortfolioCard';
import PortfolioUserSection from './(components)/PortfolioUserSection';
import PortfolioBannerCarousel from './(components)/PortfolioBannerCarousel';
import { portfolioCategories } from '@/constants';
import { PortfolioDummy } from '@/dummy';

function PortfolioPage() {
  return (
    <>
      <PortfolioBannerCarousel />
      <SectionWrapper>
        <SectionHeader title='인기급상승 포트폴리오' />
        <CategoryButtonWrap type='button' categories={portfolioCategories} />
        <CardContainer>
          {PortfolioDummy.slice(0, 8).map(portfolio => (
            <PortfolioCard key={portfolio.id} {...portfolio} />
          ))}
        </CardContainer>
      </SectionWrapper>
      <PortfolioUserSection />
      <SectionWrapper>
        <SectionHeader title='직군별 포트폴리오' />
        <CategoryButtonWrap type='button' categories={portfolioCategories} />
        <CardContainer>
          {PortfolioDummy.slice(0, 8).map(portfolio => (
            <PortfolioCard key={portfolio.id} {...portfolio} />
          ))}
        </CardContainer>
        <CardContainer>
          {PortfolioDummy.slice(0, 8).map(portfolio => (
            <PortfolioCard key={portfolio.id} {...portfolio} />
          ))}
        </CardContainer>
      </SectionWrapper>
    </>
  );
}

export default PortfolioPage;
