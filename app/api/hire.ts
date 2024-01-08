import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/utils/firebase';

export async function fetchHire(id: string) {
  const hireRef = doc(db, 'hire', id);
  const hireSnap = await getDoc(hireRef);

  if (hireSnap.exists()) {
    return hireSnap.data();
  } else {
    throw new Error('해당하는 채용정보가 없습니다.');
  }
}
