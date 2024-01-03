import ProjectInfoLabel from './(components)/ProjectInfoLabel';

export default function ProjectDetailPage() {
  return (
    <div className='min-h-screen bg-background-primary py-16'>
      <div className='container rounded-3xl bg-white px-[106px] py-10'>
        {/* 프로젝트 정보 Wrapper */}
        <div>
          {/* 프로젝트 타이틀 */}
          <div>
            <div className='flex gap-[10px]'>
              <ProjectInfoLabel contents='마감 4일 전' type='period' />
              <ProjectInfoLabel contents='사이드 프로젝트' />
              <ProjectInfoLabel contents='중급' />
            </div>
          </div>
          {/* 프로젝트 정보 */}
          <div></div>
          {/* 프로젝트 지원 */}
          <div></div>
          {/* 프로젝트 소개 */}
          <div></div>
          {/* 프로젝트 참여 신청 */}
          <div></div>
        </div>
        {/* 댓글 Wrapper */}
        <div></div>
      </div>
    </div>
  );
}
