import PortfolioDetail from './(components)/PortfolioDetail/PortfolioDetail';
import PortfolioInfo from './(components)/PortfolioInfo/PortfolioInfo';

function PortfolioDetailPage() {
  return (
    <div className='bg-background-primary flex justify-center py-20'>
      <div className='w-fit h-fit flex gap-[25px]'>
        <PortfolioDetail />
        <PortfolioInfo />
      </div>
    </div>
  );
}

export default PortfolioDetailPage;
