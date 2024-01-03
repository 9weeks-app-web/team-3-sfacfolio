function PortfolioDetailPage() {
  return (
    <div className='bg-background-primary flex justify-center py-20'>
      <div className='w-fit h-fit flex gap-[25px]'>
        <div className='w-[845px] h-[500vh] bg-white'>Portfolio Image</div>
        <div className='overflow-auto sticky top-0 w-[390px] h-[1000px] bg-white'>
          <div className='h-[200vh]'>Portfolio Info</div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioDetailPage;
