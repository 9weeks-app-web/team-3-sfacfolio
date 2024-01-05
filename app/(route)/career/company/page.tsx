'use client';

import React, { useState } from 'react';

import ModalLocations from './(component)/ModalLocations';
import ModalJob from './(component)/ModalJob';
import ModalTech from './(component)/ModalTech';
import ModalYears from './(component)/ModalYears';

export default function CompanyPage() {
  const [currentModal, setCurrentModal] = useState<
    null | 'years' | 'locations' | 'job' | 'tech'
  >('years');
  const [years, setYears] = useState<{ start: number; end: number }>({
    start: 1,
    end: 9,
  });
  const [locations, setLocations] = useState<string[] | 'all'>('all');
  const [job, setJob] = useState<string[] | 'all'>('all');
  const [tech, setTech] = useState<string[] | 'all'>(['health']);

  return (
    <div className='flex gap-3 p-3'>
      <div className='relative h-[46px]'>
        <button className='border p-2'>지역</button>
        {currentModal === 'locations' && (
          <ModalLocations data={locations} setData={setLocations} />
        )}
      </div>
      <div className='relative h-[46px]'>
        <button className='border p-2'>직무</button>
        {currentModal === 'job' && <ModalJob data={job} setData={setJob} />}
      </div>
      <div className='relative h-[46px]'>
        <button className='border p-2'>테크</button>
        {currentModal === 'tech' && <ModalTech data={tech} setData={setTech} />}
      </div>
      <div className='relative h-[46px]'>
        <button className='border p-2'>경력</button>
        {currentModal === 'years' && (
          <ModalYears data={years} setData={setYears} />
        )}
      </div>
    </div>
  );
}
