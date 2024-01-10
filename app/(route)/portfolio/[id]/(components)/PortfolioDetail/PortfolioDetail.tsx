import Image from 'next/image';
import PortfolioDetailFooter from './PortfolioDetailFooter';
import PortfolioDetailHeader from './PortfolioDetailHeader';
import Portfolio from '@images/Portfolio/Portfolio.png';

function PortfolioDetail() {
  return (
    <div className='relative w-[865px] bg-white rounded-tr-lg rounded-tl-lg'>
      <PortfolioDetailHeader />
      <Image src={Portfolio} alt='portfolio' />
      <PortfolioDetailFooter />
    </div>
  );
}

export default PortfolioDetail;
