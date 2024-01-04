'use client';

import { useParams } from 'next/navigation';
import { useQuery, useQueryClient } from 'react-query';

import ProjectDetails from './(components)/Project/ProjectDetails';
import ProjectDescription from './(components)/Project/ProjectDescription';
import ProjectApplication from './(components)/Project/ProjectApplication';
import CommentsWrap from './(components)/Comments/CommentsWrap';
import FixedLayer from './(components)/FixedLayer';

import { fetchProject, subscribeToProjectUpdates } from '@/api/project';
import { calculateDaysBeforeDeadline } from '@/utils/dateUtils';
import { ProjectDataType } from '@/types/project';
import Loader from '@/components/Loader';
import { useEffect } from 'react';

interface ProjectQueryResult {
  data: ProjectDataType | undefined;
  isLoading: boolean;
  isError: boolean;
}

export default function ProjectDetailPage() {
  const queryClient = useQueryClient();
  const { id } = useParams();
  const projectId = Array.isArray(id) ? id[0] : id;

  const {
    data: project,
    isLoading,
    isError,
  } = useQuery(['project', projectId], () =>
    fetchProject(projectId),
  ) as ProjectQueryResult;

  useEffect(() => {
    const unsubscribe = subscribeToProjectUpdates(projectId, () => {
      // Firestore에서 데이터가 변경될 때마다 쿼리를 무효화
      queryClient.invalidateQueries(['project', projectId]);
    });

    return () => unsubscribe();
  }, [projectId, queryClient]);

  if (isLoading) {
    return (
      <div className='container flex h-screen items-center justify-center p-5 text-center'>
        <Loader />
      </div>
    );
  }
  if (!project || isError) {
    return (
      <div className='container flex h-screen items-center justify-center p-5 text-center'>
        데이터 로드 중 오류가 생겼습니다.
        <br />
        다시 시도해 주세요.
      </div>
    );
  }

  const leftDay = calculateDaysBeforeDeadline(project?.recruitDeadline);

  return (
    <div className='min-h-screen bg-background-primary py-16'>
      <div className='container relative rounded-3xl bg-white px-[106px] py-10'>
        {/* 프로젝트 정보 Wrapper */}
        <div>
          <ProjectDetails data={project} leftDay={leftDay} />

          <hr className='my-8' />

          {/* 프로젝트 소개 */}
          <ProjectDescription description={project?.description} />

          {/* 프로젝트 참여 신청 */}
          <ProjectApplication participants={project?.participants} />
        </div>

        <hr />

        {/* 댓글 Wrapper */}
        <CommentsWrap projectId={projectId} comments={project?.comments} />

        {/* 지원하기 fixed div */}
        <FixedLayer participants={project?.participants} leftDay={leftDay} />
      </div>
    </div>
  );
}
