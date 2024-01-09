import ResumeSection from './ResumeSection';
import ResumeChangingInput from '../ResumeInput/ResumeChangingInput';

function ResumeAbilitySection() {
  return (
    <ResumeSection
      title='자격/어학/수상'
      subTitle='자세하게 작성할 수록 기업 매칭률이 올라가요!'
      isButton={true}
      buttonValue='자격/어학/수상 추가하기'
    >
      <ResumeChangingInput />
    </ResumeSection>
  );
}

export default ResumeAbilitySection;
