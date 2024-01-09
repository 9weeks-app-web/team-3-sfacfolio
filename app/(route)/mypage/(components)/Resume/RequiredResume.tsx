import ResumeBasicInformationSection from './ResumeSection/ResumeBasicInformationSection';
import ResumeCareerSection from './ResumeSection/ResumeCareerSection';
import ReusumeAcademicSection from './ResumeSection/ReusumeAcademicSection';

function RequiredResume() {
  return (
    <>
      <ResumeBasicInformationSection />
      <ReusumeAcademicSection />
      <ResumeCareerSection />
    </>
  );
}

export default RequiredResume;
