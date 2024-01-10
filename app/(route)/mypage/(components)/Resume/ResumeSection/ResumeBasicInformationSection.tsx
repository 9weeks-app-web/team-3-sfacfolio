import ResumeSection from './ResumeSection';
import ResumeLabelList from '../ResumeInput/ResumeLabelList';
import ResumeRadioInput from '../ResumeInput/ResumeRadioInput';
import ResumeTextInput from '../ResumeInput/ResumeTextInput';

function ResumeBasicInformationSection() {
  return (
    <ResumeSection
      title='기본정보'
      subTitle='해당 정보는 프로필 편집에서 수정가능해요.'
    >
      <ResumeTextInput
        label='성함'
        placeholder='썽함'
        isExtendRadio={true}
        radioName='gender'
        radioList={['남성', '여성']}
      />
      <ResumeTextInput label='생년월일' placeholder='생년월일' />
      <ResumeTextInput label='이메일' placeholder='이메일' />
      <ResumeTextInput label='전화번호' placeholder='전화번호' />
      <ResumeTextInput label='주소' placeholder='주소' />
      <ResumeRadioInput
        label='취업 우대 및 병역'
        radioName='preference'
        radioList={[
          '보훈대상',
          '취업보호 대상',
          '고용지원금 대상',
          '장애',
          '병역',
        ]}
      />
      <ResumeLabelList
        label='사용 프로그램'
        labelList={[
          { name: '피그마' },
          { name: '일러스트레이션' },
          { name: '포토샵' },
          { name: '인디자인' },
          { name: '제플린' },
          { name: '어도비XD' },
        ]}
      />
    </ResumeSection>
  );
}

export default ResumeBasicInformationSection;
