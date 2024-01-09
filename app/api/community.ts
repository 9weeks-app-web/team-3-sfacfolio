import { CommunityPostDummy } from '@/dummy';

export const fetchDummyPosts = async (
  page: number,
  category: string,
  itemsPerPage = 10,
) => {
  console.log(category, page);
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
