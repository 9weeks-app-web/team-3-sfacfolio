import CategoryButtonWrap from '@/components/CategoryButtonWrap';
import SectionHeader from '../main/(components)/SectionHeader';
import SectionWrapper from '../main/(components)/SectionWrapper';
import PortfolioBannerCarousel from './(components)/PortfolioBannerCarousel';
import CardContainer from '../main/(components)/Card/CardContainer';
import PortfolioCard from '../main/(components)/Card/PortfoiloCard/PortfolioCard';
import { portfolioCategories } from '@/constants';
import { PortfolioDummy } from '@/dummy';
import PortfolioOwnerCardSlider from './[id]/(components)/PortfolioDetail/PortfolioOwnerCardSlider';
import PortfolioUserSection from './(components)/PortfolioUserSection';

function PortfolioPage() {
  return (
    <>
      <PortfolioBannerCarousel />
      <SectionWrapper>
        <SectionHeader title='인기급상승 포트폴리오' />
        <CategoryButtonWrap type='button' categories={portfolioCategories} />
        <CardContainer>
          {PortfolioDummy.map(portfolio => (
            <PortfolioCard key={portfolio.id} {...portfolio} />
          ))}
        </CardContainer>
      </SectionWrapper>
      <PortfolioUserSection />
      <SectionWrapper>
        <SectionHeader title='직군별 포트폴리오' />
        <CategoryButtonWrap type='button' categories={portfolioCategories} />
        <CardContainer>
          {PortfolioDummy.map(portfolio => (
            <PortfolioCard key={portfolio.id} {...portfolio} />
          ))}
        </CardContainer>
        <CardContainer>
          {PortfolioDummy.map(portfolio => (
            <PortfolioCard key={portfolio.id} {...portfolio} />
          ))}
        </CardContainer>
      </SectionWrapper>
    </>
  );
}

export default PortfolioPage;
