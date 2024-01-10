import Modal from '@/(route)/portfolio/[id]/(components)/Modal';
import PortfolioDetail from '../../[id]/(components)/PortfolioDetail/PortfolioDetail';
import PortfolioInfo from '../../[id]/(components)/PortfolioInfo/PortfolioInfo';

function PortfolioDetailPage() {
  return (
    <Modal>
      <div className='w-fit h-fit flex gap-[25px]'>
        <PortfolioDetail />
        <PortfolioInfo />
      </div>
    </Modal>
  );
}

export default PortfolioDetailPage;
