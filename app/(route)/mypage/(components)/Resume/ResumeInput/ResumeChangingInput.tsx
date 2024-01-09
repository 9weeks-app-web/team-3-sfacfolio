import { useState } from 'react';
import ResumeSelectInput from './ResumeSelectInput';
import ResumeSearchInput from './ResumeSearchInput';
import ResumeTextInput from './ResumeTextInput';

function ResumeChangingInput() {
  const [selectedOption, setSelctedOption] = useState<null | string>(null);
  return (
    <>
      <ResumeSelectInput
        label='활동 구분'
        placeholder='활동 구분'
        options={['자격', '어학', '수상']}
        isShort={true}
        setSelctedOption={setSelctedOption}
      />
      {selectedOption === '자격' && (
        <>
          <ResumeSearchInput label='자격증명' placeholder='자격증명' />
          <ResumeTextInput
            label='취득일'
            placeholder='취득년월'
            isShort={true}
          />
          <ResumeTextInput label='발행처/기관' placeholder='자격' />
        </>
      )}
      {selectedOption === '어학' && (
        <>
          <ResumeSelectInput
            label='언어'
            placeholder='언어 선택'
            options={[]}
            isShort={true}
          />
          <ResumeSelectInput
            label='어학시험명'
            placeholder='어학시험명 검색'
            options={[]}
          />
          <ResumeTextInput
            label='취득일'
            placeholder='취득년월'
            isShort={true}
          />
        </>
      )}
      {selectedOption === '수상' && (
        <>
          <ResumeTextInput label='수상/공모전명' placeholder='수상/공모전명' />
          <ResumeTextInput
            label='수상/공모'
            placeholder='취득년월'
            isShort={true}
          />
          <ResumeTextInput label='수여/주최기관' placeholder='수여/주최기관' />
        </>
      )}
    </>
  );
}

export default ResumeChangingInput;
