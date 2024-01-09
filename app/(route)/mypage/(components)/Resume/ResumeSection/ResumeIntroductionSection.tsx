import ResumeSection from './ResumeSection';
import ResumeTextArea from '../ResumeInput/ResumeTextArea';

function ResumeIntroductionSection() {
  return (
    <ResumeSection
      title='자기소개서'
      subTitle='나를 뽐낼 수 있는 자기소개를 적어보세요!'
      isButton={true}
      buttonValue='자기소개서 추가하기'
    >
      <ResumeTextArea
        label='자기소개'
        placeholder='자기소개를 입력해 주세요. (1000자 이내)'
      />
    </ResumeSection>
  );
}

export default ResumeIntroductionSection;
