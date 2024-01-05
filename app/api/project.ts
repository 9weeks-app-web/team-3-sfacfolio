import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/utils/firebase';

// 프로젝트 ID를 받아 해당 프로젝트의 데이터를 가져오는 함수
export async function fetchProject(projectId: string) {
  const projectRef = doc(db, 'project', projectId);
  const projectSnap = await getDoc(projectRef);

  if (projectSnap.exists()) {
    return projectSnap.data();
  } else {
    throw new Error('해당하는 프로젝트가 없습니다.');
  }
}
