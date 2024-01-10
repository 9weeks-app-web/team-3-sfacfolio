import Image from 'next/image';
import HeartIcon from '@/components/HeartIcon';
import EllipsisVertical from '@images/EllipsisVertical.svg';

function PortfolioInfoComments() {
  return (
    <div className='flex flex-col'>
      <span className='px-6 py-4 text-label1 font-bold leading-6'>댓글 7</span>
      <ul className='flex gap-3 flex-wrap'>
        {[
          {
            name: 'DAIN KIN',
            position: 'UI 디자이너',
            imgae:
              'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=3276&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            comment: '오 잘만드셨는데여 굿굿나이스',
            timestamp: '7분 전',
            heart: 0,
          },
          {
            name: '구글 코리아',
            position: 'UI 디자이너',
            imgae:
              'https://plus.unsplash.com/premium_photo-1664870883044-0d82e3d63d99?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            comment: '안녕하세요 구글 코리아입니다. 당신을 채용하고 싶습니다.',
            timestamp: '7분 전',
            heart: 0,
          },
          {
            name: 'Юлия Федоткина',
            position: 'UI 디자이너',
            imgae:
              'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=3322&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            comment:
              'Тот случай, когда математика точно пригодилась!!!! Необычное решение классная работа!Тот',
            timestamp: '7분 전',
            heart: 0,
          },
        ].map(comment => (
          <li className='w-full flex flex-col gap-[14px] px-6 py-4 border-b'>
            <div className='flex justify-between items-center'>
              <div className='flex gap-2 items-center'>
                <div className='relative w-10 h-10 rounded-full bg-gray-500 overflow-hidden'>
                  <Image
                    src={comment.imgae}
                    alt='avatar'
                    fill
                    objectFit='cover'
                  />
                </div>
                <div className='flex flex-col'>
                  <span className='text-label2 font-bold leading-[22px]'>
                    {comment.name}
                  </span>
                  <span className='text-label3 font-medium text-text-assitive leading-[18px]'>
                    {comment.position}
                  </span>
                </div>
              </div>
              <div>
                <Image src={EllipsisVertical} alt='more' />
              </div>
            </div>
            <div>
              <p className='text-label1 font-medium leading-6 text-text-normal'>
                {comment.comment}
              </p>
            </div>
            <div className='flex justify-between items-center'>
              <div className='text-label2 font-medium leading-[22px] text-text-assitive'>
                {comment.timestamp}
              </div>
              <div className='flex items-center gap-1'>
                <HeartIcon width={16} height={16} fill='#8a8a8a' />
                <span className='text-label2 font-normal text-text-alternative'>
                  {comment.heart}
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className='text-center py-4 border-b'>
        <span className='text-label1 font-bold leading-4 text-primary-heavy'>
          4개의 댓글 더보기
        </span>
      </div>
      <div className='px-[10px] pt-[14px] pb-5 flex justify-between'>
        <input
          type='text'
          placeholder='댓글을 입력하세요'
          className='w-[294px] h-[54px] px-[19px] bg-background-primary rounded-lg outline-none placeholder:text-label1 placeholder:font-medium placeholder:text-text-assitive'
        />
        <input
          type='submit'
          value={'등록'}
          className='cursor-pointer w-[84px] h-[54px] border rounded-lg text-label1 font-medium leading-4 text-text-assitive'
        />
      </div>
    </div>
  );
}

export default PortfolioInfoComments;
