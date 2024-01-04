import React, { useEffect, useState } from 'react';
import IconUnCheckedCircle from '@images/IconUnCheckedCircle.svg';
import IconCheckedCircle from '@images/IconCheckedCircle.svg';
import IconCheckedCircleWhite from '@images/IconCheckedCircleWhite.svg';
import SignUpStageOneImage from '@images/SignUpStageOneImage.svg';
import Image from 'next/image';

interface StageOneProps {
  setStage: React.Dispatch<React.SetStateAction<number>>;
}

export default function StageOne({ setStage }: StageOneProps) {
  const [allTerms, setAllTerms] = useState(false);
  const [terms, setTerms] = useState({
    terms1: false,
    terms2: false,
    terms3: false,
  });
  const { terms1, terms2, terms3 } = terms;
  const [terms4, setTerms4] = useState(false);

  useEffect(() => {
    setTerms(() =>
      allTerms
        ? {
            terms1: true,
            terms2: true,
            terms3: true,
          }
        : {
            terms1: false,
            terms2: false,
            terms3: false,
          },
    );
    setTerms4(() => (allTerms ? true : false));
  }, [allTerms]);

  return (
    <div className='flex'>
      <div className='relative h-screen w-[514px] shrink-0 bg-[#EBF2FF]'>
        <div className='absolute left-5 top-[109px] h-[700px] w-[700px]'>
          <Image src={SignUpStageOneImage} alt='login-image' fill />
        </div>
      </div>

      <div className='z-10 flex h-screen w-full items-center justify-center bg-white'>
        <div className='w-[447px]'>
          <div className='mb-[34px]'>
            <h4 className='text-title font-bold'>환영합니다.</h4>
            <p className='font-[18px] text-[#828282]'>
              원활한 서비스 이용을 위해 동의해주세요.
            </p>
          </div>

          <div className='mb-[300px]'>
            <div
              className={`mb-4 h-12 w-full rounded-[8px] border border-line-normal p-2 ${
                allTerms
                  ? 'bg-primary-heavy text-white'
                  : 'bg-background-primary text-black'
              }  `}
            >
              <div className='flex items-center gap-2'>
                <div
                  className='h-8 w-8 cursor-pointer'
                  onClick={() => setAllTerms(prev => !prev)}
                >
                  <Image
                    src={
                      allTerms ? IconCheckedCircleWhite : IconUnCheckedCircle
                    }
                    alt='check-icon'
                  />
                </div>
                <p>모든 약관에 동의합니다!</p>
              </div>
            </div>
            <div className='mb-2 h-12 w-full p-2'>
              <div className='flex items-center gap-2'>
                <div
                  className='h-8 w-8 cursor-pointer'
                  onClick={() =>
                    setTerms(prev => ({
                      ...prev,
                      terms1: !prev.terms1,
                    }))
                  }
                >
                  <Image
                    src={terms1 ? IconCheckedCircle : IconUnCheckedCircle}
                    alt='check-icon'
                  />
                </div>
                <p>(필수)만 14세 이상입니다.</p>
              </div>
            </div>
            <div className='mb-2 h-12 w-full p-2'>
              <div className='flex items-center gap-2'>
                <div
                  className='h-8 w-8 cursor-pointer'
                  onClick={() =>
                    setTerms(prev => ({
                      ...prev,
                      terms2: !prev.terms2,
                    }))
                  }
                >
                  <Image
                    src={terms2 ? IconCheckedCircle : IconUnCheckedCircle}
                    alt='check-icon'
                  />
                </div>
                <p>(필수)서비스 이용약관</p>
              </div>
            </div>
            <div className='mb-2 h-12 w-full p-2'>
              <div className='flex items-center gap-2'>
                <div
                  className='h-8 w-8 cursor-pointer'
                  onClick={() =>
                    setTerms(prev => ({
                      ...prev,
                      terms3: !prev.terms3,
                    }))
                  }
                >
                  <Image
                    src={terms3 ? IconCheckedCircle : IconUnCheckedCircle}
                    alt='check-icon'
                  />
                </div>
                <p>(필수)개인정보처리방침</p>
              </div>
            </div>
            <div className='mb-2 h-12 w-full p-2'>
              <div className='flex items-center gap-2'>
                <div
                  className='h-8 w-8 cursor-pointer'
                  onClick={() => setTerms4(prev => !prev)}
                >
                  <Image
                    src={terms4 ? IconCheckedCircle : IconUnCheckedCircle}
                    alt='check-icon'
                  />
                </div>
                <p>(선택)마케팅 정보 수신동의</p>
              </div>
            </div>
          </div>

          <button
            onClick={() => setStage(prev => prev + 1)}
            className='mb-4 flex h-12 w-full items-center justify-center rounded-[8px] bg-primary-heavy py-4 text-white disabled:bg-slate-300'
            disabled={
              JSON.stringify(terms) !==
              JSON.stringify({
                terms1: true,
                terms2: true,
                terms3: true,
              })
            }
          >
            다음
          </button>
        </div>
      </div>
    </div>
  );
}
