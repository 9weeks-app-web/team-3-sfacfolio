import Modal from '@/(route)/portfolio/[id]/(components)/Modal';

function PortfolioDetailPage() {
  return (
    <Modal>
      <div className='w-fit h-fit flex gap-[25px]'>
        <div className='w-[845px] h-[500vh] bg-white'>Portfolio Image</div>
        <div className='overflow-auto sticky top-0 w-[390px] h-[1000px] bg-white'>
          <div className='h-[200vh]'>Portfolio Info</div>
        </div>
      </div>
    </Modal>
  );
}

export default PortfolioDetailPage;
