'use client';

import React, { useState } from 'react';

import ModalLocations from './(component)/ModalLocations';
import ModalJob from './(component)/ModalJob';
import ModalTech from './(component)/ModalTech';
import ModalYears from './(component)/ModalYears';

export default function CompanyPage() {
  const [currentModal, setCurrentModal] = useState<
    null | '경력' | '지역' | '직무' | '테크'
  >('직무');
  const [years, setYears] = useState<{ start: number; end: number }>({
    start: 1,
    end: 9,
  });
  const [locations, setLocations] = useState<string[]>([]);
  const [job, setJob] = useState<string[]>([]);
  const [tech, setTech] = useState<string[]>([]);

  const onClose = () => setCurrentModal(null);

  return (
    <div className='flex gap-3 p-3'>
      <div className='relative h-[46px]'>
        <button className='border p-2' onClick={() => setCurrentModal('지역')}>
          지역
        </button>
        {currentModal === '지역' && (
          <ModalLocations
            data={locations}
            setData={setLocations}
            onClose={onClose}
          />
        )}
      </div>
      <div className='relative h-[46px]'>
        <button className='border p-2' onClick={() => setCurrentModal('직무')}>
          직무
        </button>
        {currentModal === '직무' && (
          <ModalJob data={job} setData={setJob} onClose={onClose} />
        )}
      </div>
      <div className='relative h-[46px]'>
        <button className='border p-2' onClick={() => setCurrentModal('테크')}>
          테크
        </button>
        {currentModal === '테크' && (
          <ModalTech data={tech} setData={setTech} onClose={onClose} />
        )}
      </div>
      <div className='relative h-[46px]'>
        <button className='border p-2' onClick={() => setCurrentModal('경력')}>
          경력
        </button>
        {currentModal === '경력' && (
          <ModalYears data={years} setData={setYears} onClose={onClose} />
        )}
      </div>
    </div>
  );
}
