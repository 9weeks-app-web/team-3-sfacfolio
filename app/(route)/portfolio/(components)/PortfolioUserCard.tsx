import Image from 'next/image';

interface OwnerType {
  name: string;
  position: string;
  image: string;
  portfolios: string[];
}

interface PortfolioUserCardPropsType {
  owner: OwnerType;
}

function PortfolioUserCard({ owner }: PortfolioUserCardPropsType) {
  return (
    <div className='w-[628px] p-6 border rounded-lg bg-white'>
      <div className='flex justify-between items-center pb-4 mb-4 border-b'>
        <div className='flex gap-[26px] items-center'>
          <div className='relative w-20 h-20 rounded-full bg-gray-500 overflow-hidden'>
            <Image src={owner.image} alt='avatar' fill objectFit='cover' />
          </div>
          <div className='flex flex-col gap-3 leading-[22px]'>
            <span className='text-xl font-bold text-text-normal'>
              Duke Mong
            </span>
            <span className='text-label1 font-medium text-text-assitive '>
              BX 디자이너
            </span>
          </div>
        </div>
        <span className='cursor-pointer text-lg font-bold leading-6 text-primary-weak'>
          팔로우
        </span>
      </div>
      <div className='flex justify-between'>
        {owner.portfolios.map(poerfolio => (
          <div className='relative w-[133px] h-[133px] rounded-lg bg-gray-500'>
            <Image src={poerfolio} alt='portfolio' fill objectFit='cover' />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PortfolioUserCard;
