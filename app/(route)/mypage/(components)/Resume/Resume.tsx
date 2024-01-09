'use client';
import { useState } from 'react';
import RequiredResume from './RequiredResume';
import ResumeHeader from './ResumeHeader';
import AdditionalResume from './AdditionalResume';

const resumeTypes = ['필수 정보', '부가 정보'];

function Resume() {
  const [selectedList, setSelectedList] = useState(resumeTypes[0]);
  return (
    <div className='w-[954px] mx-auto bg-white'>
      <ResumeHeader
        lists={resumeTypes}
        selectedList={selectedList}
        setSelectedList={setSelectedList}
      />
      <div className='space-y-8 pt-9'>
        {selectedList === resumeTypes[0] && <RequiredResume />}
        {selectedList === resumeTypes[1] && <AdditionalResume />}
      </div>
    </div>
  );
}
export default Resume;
