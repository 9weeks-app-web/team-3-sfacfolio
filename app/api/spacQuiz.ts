import { SpacQuizDummy } from '@/dummy/spacQuiz';

export const fetchDummyPosts = async (page: number, itemsPerPage = 12) => {
  // 페이지네이션 로직
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedPosts = SpacQuizDummy.slice(startIndex, endIndex);

  return {
    posts: paginatedPosts,
    total: SpacQuizDummy.length,
    totalPages: Math.ceil(SpacQuizDummy.length / itemsPerPage),
  };
};
