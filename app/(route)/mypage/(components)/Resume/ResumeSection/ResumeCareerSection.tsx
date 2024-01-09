import ResumeSection from './ResumeSection';
import ResumeButton from '../ResumeButton';
import ResumePeriodInput from '../ResumeInput/ResumePeriodInput';
import ResumeTextArea from '../ResumeInput/ResumeTextArea';
import ResumeTextInput from '../ResumeInput/ResumeTextInput';

function ResumeCareerSection() {
  return (
    <ResumeSection
      title='경력'
      subTitle='건강보험공단에서 경력을 한 번에 불러올 수 있어요!'
      isLink={true}
      linkText='불러오기'
      isButton={true}
      buttonValue='경력 추가하기'
    >
      <ResumeTextInput label='회사명' placeholder='회사명' />
      <ResumeTextInput label='직급/직책' placeholder='직급/직책' />
      <ResumePeriodInput
        label='재직 기간'
        firstPlaceholder='입사년원'
        secondPlaceholder='퇴사년월'
        checkList={['재직중']}
      />
      <ResumeTextArea
        label='담당 업무'
        placeholder='회사에서 담당한 업무 및 성과를 작성해주세요.'
      />
      <div className='flex gap-6'>
        <ResumeButton value='연봉' isPlus={true} />
        <ResumeButton value='근무지역' isPlus={true} />
      </div>
    </ResumeSection>
  );
}

export default ResumeCareerSection;
