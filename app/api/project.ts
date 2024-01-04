import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  getDoc,
  onSnapshot,
  updateDoc,
} from 'firebase/firestore';
import { db } from '@/utils/firebase';

import { CommentType, ProjectDataType } from '@/types/project';

// 프로젝트 ID를 사용하여 페이지 로드 시 데이터를 초기 로딩
export const fetchProject = async (
  projectId: string,
): Promise<ProjectDataType> => {
  const projectRef = doc(db, 'project', projectId);
  const projectSnap = await getDoc(projectRef);

  if (projectSnap.exists()) {
    return projectSnap.data() as ProjectDataType;
  } else {
    throw new Error('해당하는 프로젝트가 없습니다.');
  }
};

// 프로젝트 데이터의 실시간 변경을 감시하며, 변경 사항이 있을 때마다 콜백 함수를 호출
export const subscribeToProjectUpdates = (
  projectId: string,
  onUpdate: (project: ProjectDataType | undefined) => void,
) => {
  const projectRef = doc(db, 'project', projectId);

  return onSnapshot(
    projectRef,
    doc => {
      if (doc.exists()) {
        onUpdate(doc.data() as ProjectDataType);
      } else {
        onUpdate(undefined);
      }
    },
    error => {
      console.error('Error fetching project:', error);
    },
  );
};

export const addComment = async (
  projectId: string,
  commentData: CommentType,
) => {
  const projectDocRef = doc(db, 'project', projectId);
  return await updateDoc(projectDocRef, {
    comments: arrayUnion(commentData),
  });
};
