import PortfolioInfoHeader from './PortfolioInfoHeader';
import PortfolioinfoLevel from './PortfolioinfoLevel';
import PortfoliIoInfoTools from './PortfoliIoInfoTools';
import PortfolioInfoTags from './PortfolioInfoTags';
import PortfolioInfoComments from './PortfolioInfoComments';

function PortfolioInfo() {
  return (
    <div className='overflow-auto sticky top-0 w-[425px] h-[800px] bg-white rounded-tl-lg rounded-bl-lg'>
      <div className='h-fit'>
        <PortfolioInfoHeader />
        <PortfolioinfoLevel />
        <PortfoliIoInfoTools />
        <PortfolioInfoTags />
        <PortfolioInfoComments />
      </div>
    </div>
  );
}

export default PortfolioInfo;
