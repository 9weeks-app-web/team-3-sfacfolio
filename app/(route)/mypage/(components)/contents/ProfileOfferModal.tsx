import Image from 'next/image';

import { ProfileOfferType } from '@/types';
import IconClose from '@images/IconClose.svg';
import IconOfferLink from '@images/IconOfferLink.svg';
import IconOfferClip from '@images/IconOfferClip.svg';

interface ProfileOfferModalProps {
  offer: ProfileOfferType | null;
  onClose: () => void;
}

export default function ProfileOfferModal({
  offer,
  onClose,
}: ProfileOfferModalProps) {
  console.log(offer);
  return (
    <div className='fixed bottom-0 left-0 z-[1000] h-screen w-screen bg-black/60'>
      <div className='absolute left-1/2 top-1/2 w-[580px] -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white'>
        {/* modal header */}
        <div className='flex justify-between border-b border-line-normal px-6 py-4'>
          <div className='flex items-center justify-center gap-2'>
            <p className='text-[18px] font-bold text-text-normal'>채용 제안</p>
          </div>
          <div className='flex cursor-pointer items-center'>
            <Image src={IconClose} alt='close button' onClick={onClose} />
          </div>
        </div>

        {/* modal contents */}
        <div className='flex flex-col gap-6 p-6'>
          <div className='flex flex-col items-center justify-center gap-4'>
            <p className='text-2xl font-bold text-text-normal'>
              {offer?.title}
            </p>
            <div className='flex gap-[6px] text-text-alternative'>
              {offer?.tech}
              <span className='text-label2 text-text-assitive'>|</span>
              {offer?.job}
            </div>
          </div>

          <div className='flex flex-col gap-3 rounded-lg border border-line-normal p-4'>
            <div className='flex items-center gap-5'>
              <div className='w-[72px] text-lg font-bold text-text-alternative'>
                진행방식
              </div>
              <p>{offer?.workingMethod}</p>
            </div>
            <div className='flex items-center gap-5'>
              <div className='w-[72px] text-lg font-bold text-text-alternative'>
                의뢰인
              </div>
              <p>{offer?.client}</p>
            </div>
            {offer?.type === '채용' && (
              <div className='flex items-center gap-5'>
                <div className='w-[72px] text-lg font-bold text-text-alternative'>
                  예산
                </div>
                <p>{offer?.budget}</p>
              </div>
            )}
            {offer?.type === '프로젝트' && (
              <div className='flex items-center gap-5'>
                <div className='w-[72px] text-lg font-bold text-text-alternative'>
                  진행도
                </div>
                <p>{offer?.progressStatus}</p>
              </div>
            )}
            <div className='flex items-center gap-5'>
              <div className='w-[72px] text-lg font-bold text-text-alternative'>
                {offer?.type === '채용' ? '채용기간' : '작업기간'}
              </div>
              <p>{offer?.period}</p>
            </div>
          </div>

          <div className='min-h-[120px] w-full rounded border border-line-normal bg-background-primary p-4 text-text-normal'>
            {offer?.message}
          </div>

          {offer?.type === '채용' && (
            <div className='flex w-full flex-col gap-3'>
              <button className='flex h-12 w-full items-center justify-center gap-1.5 rounded-lg border border-text-normal bg-white font-bold text-text-normal'>
                <span>{offer?.link}</span>
                <Image src={IconOfferLink} alt='link icon' />
              </button>
              <button className='flex h-12 w-full items-center justify-center gap-1.5 rounded-lg border border-text-normal bg-white font-bold text-text-normal'>
                <span>{offer?.file}</span>
                <Image src={IconOfferClip} alt='file icon' />
              </button>
            </div>
          )}

          <div className='flex justify-between'>
            <button className='h-12 w-[calc(50%-6px)] rounded-lg border border-text-normal bg-white font-bold text-text-normal'>
              제안 거절
            </button>
            <button className='h-12 w-[calc(50%-6px)] rounded-lg border border-text-normal bg-text-normal font-bold text-white'>
              제안 자세히 보기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
