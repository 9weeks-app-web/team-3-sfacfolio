import { CommunityPostDummy } from '@/dummy/community';
import { CommunityPostType } from '@/types';
import { db } from '@/utils/firebase';
import { collection, getDocs, orderBy, query, where } from 'firebase/firestore';

export const fetchDummyPosts = async (
  page: number,
  category: string,
  itemsPerPage = 10,
) => {
  // 필터링 로직
  const filteredPosts =
    category === '실시간 인기 글'
      ? CommunityPostDummy
      : CommunityPostDummy.filter(post => post.category === category);

  // 페이지네이션 로직
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedPosts = filteredPosts.slice(startIndex, endIndex);

  return {
    posts: paginatedPosts,
    total: filteredPosts.length,
    totalPages: Math.ceil(filteredPosts.length / itemsPerPage),
  };
};

export const fetchPosts = async (
  category = '실시간 인기 글',
  page = 1,
  itemsPerPage = 10,
) => {
  let q;
  if (category === '실시간 인기 글') {
    q = query(collection(db, 'community'), orderBy('publishedAt', 'desc'));
  } else {
    q = query(
      collection(db, 'community'),
      where('category', '==', category),
      orderBy('publishedAt', 'desc'),
    );
  }

  const querySnapshot = await getDocs(q);
  const posts: CommunityPostType[] = [];
  querySnapshot.forEach(doc => {
    const data = doc.data() as CommunityPostType;
    posts.push({ id: doc.id, ...data });
  });

  // 페이지네이션 로직
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedPosts = posts.slice(startIndex, endIndex);

  return {
    posts: paginatedPosts,
    total: posts.length,
    totalPages: Math.ceil(posts.length / itemsPerPage),
  };
};
