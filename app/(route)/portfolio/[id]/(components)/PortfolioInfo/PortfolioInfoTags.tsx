function PortfolioInfoTags() {
  return (
    <div className='flex flex-col gap-5 px-6 py-5 border-b'>
      <span className='text-label1 font-bold leading-6'>태그</span>
      <ul className='flex gap-3 flex-wrap'>
        {['캐릭터', 'BX', '단체', '피그마', '일러스트레이션'].map(tag => (
          <li className='px-3 py-2 border rounded-full'>
            <span className='text-label1 font-medium leading-4'>#{tag}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PortfolioInfoTags;
