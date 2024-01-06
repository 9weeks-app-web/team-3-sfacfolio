interface CompanyDetailRangePropsType {
  isPortfolio: boolean;
  progress: number;
}

function CompanyDetailRange({
  isPortfolio,
  progress,
}: CompanyDetailRangePropsType) {
  return (
    <div className='flex flex-col gap-2'>
      <div className='flex justify-between text-lg font-medium text-primary-heavy'>
        <span>내 포트폴리오</span>
        <span>{isPortfolio ? `${progress}%` : '??%'}</span>
      </div>
      <div className='w-full h-[18px] bg-background-primary rounded-full'>
        <div
          className='h-full bg-gradient-to-r from-[#0059ff] to-[#7a42f0] rounded-full'
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}

export default CompanyDetailRange;
