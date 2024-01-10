import Image from 'next/image';

interface OwnerType {
  name: string;
  position: string;
  image: string;
  portfolios: string[];
}

interface PortfolioOwnerCardPropsType {
  owner: OwnerType;
}

function PortfolioOwnerCard({ owner }: PortfolioOwnerCardPropsType) {
  return (
    <div className='w-[360px] p-4 border rounded-lg'>
      <div className='flex justify-between items-center pb-4 mb-4 border-b'>
        <div className='flex gap-[26px] items-center'>
          <div className='relative w-14 h-14 rounded-full bg-gray-500'>
            <Image src={owner.image} alt='avatar' fill objectFit='cover' />
          </div>
          <div className='flex flex-col gap-2 text-label2 leading-[22px]'>
            <span className='font-bold text-text-normal'>Duke Mong</span>
            <span className='font-medium text-text-assitive '>BX 디자이너</span>
          </div>
        </div>
        <span className='cursor-pointer text-label1 font-bold leading-4 text-primary-weak'>
          팔로우
        </span>
      </div>
      <div className='flex justify-between'>
        {owner.portfolios.map(poerfolio => (
          <div className='relative w-[70px] h-[70px] rounded-lg bg-gray-500'>
            <Image src={poerfolio} alt='portfolio' fill objectFit='cover' />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PortfolioOwnerCard;
