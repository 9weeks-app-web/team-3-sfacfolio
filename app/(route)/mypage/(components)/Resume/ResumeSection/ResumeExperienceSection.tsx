import ResumeSection from './ResumeSection';
import ResumePeriodInput from '../ResumeInput/ResumePeriodInput';
import ResumeSelectInput from '../ResumeInput/ResumeSelectInput';
import ResumeTextArea from '../ResumeInput/ResumeTextArea';
import ResumeTextInput from '../ResumeInput/ResumeTextInput';

function ResumeExperienceSection() {
  return (
    <ResumeSection
      title='경험/활동/교육'
      subTitle='스나이퍼팩토리에서 수강한 교육/프로젝트를 한 번에 불러올 수 있어요!'
      isLink={true}
      linkText='불러오기'
      isButton={true}
      buttonValue='경험/활동/교육 추가하기'
    >
      <ResumeSelectInput
        label='활동 구분'
        placeholder='활동 구분 선택'
        options={[
          '교내활동',
          '인턴',
          '자원봉사',
          '동아리',
          '아르바이트',
          '사회활동',
          '수행과제',
          '해외연수',
          '교육이수내역',
        ]}
      />
      <ResumeTextInput label='기관/장소명' placeholder='기관/장소명' />
      <ResumePeriodInput
        label='참여 기간'
        firstPlaceholder='시작년원'
        secondPlaceholder='종료년월'
        checkList={['진행중']}
      />
      <ResumeTextArea
        label='활동 설명'
        placeholder='경험/활동/교육에서 성취한 업무 능력에 관하여 작성해주세요.'
      />
    </ResumeSection>
  );
}

export default ResumeExperienceSection;
