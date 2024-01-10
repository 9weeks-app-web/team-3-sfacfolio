import ResumeSection from './ResumeSection';
import ResumePeriodInput from '../ResumeInput/ResumePeriodInput';
import ResumeSearchInput from '../ResumeInput/ResumeSearchInput';
import ResumeSelectInput from '../ResumeInput/ResumeSelectInput';
import ResumeTextInput from '../ResumeInput/ResumeTextInput';

function ReusumeAcademicSection() {
  return (
    <ResumeSection title='학력' subTitle='최종학력을 기준으로 작성해주세요.'>
      <ResumeSelectInput
        label='학위'
        placeholder='학위 선택'
        options={['고등학교미만', '고등학교', '2-3년제', '4년제', '대학원']}
        isShort={true}
      />
      <ResumeSearchInput label='학교명' placeholder='학교명 검색' />
      <ResumeSelectInput
        label='졸업상태'
        placeholder='졸업상태 선택'
        options={['졸업', '졸업예정', '재학', '중퇴', '수료', '휴학']}
        isShort={true}
      />
      <ResumePeriodInput
        label='재학기간'
        firstPlaceholder='입학년월'
        secondPlaceholder='졸업년원'
        checkList={['대입검정고시', '편입']}
      />
      <ResumeSearchInput label='전공' placeholder='전공 검색' />
      <ResumeTextInput label='학점' placeholder='학점' isShort={true} />
      <ResumeSelectInput
        label='총점'
        placeholder='총점 선택'
        options={['']}
        isShort={true}
      />
    </ResumeSection>
  );
}

export default ReusumeAcademicSection;
