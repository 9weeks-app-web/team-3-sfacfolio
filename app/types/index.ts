export {};

interface UserType {
  // TODO: 프로필 페이지 디자인에 따라 property 변경 가능
  id: number;
  avatar: string;
  name: string;
  email: string;
}

interface SpacfolioItemType {
  id: string;
  user: UserType[];
  likeCount: number;
  viewCount: number;
  thumbnail: string;
  title: string;
  badge1: boolean; // TODO: property명 변경 여부 확인
  badge2: boolean; // TODO: property명 변경 여부 확인
  category: string;
}

interface ProjectType {
  id: string;
  recuitEndDate: string;
  projectPeriod: string;
  title: string;
  user: UserType[];
  likeCount: number;
  viewCount: number;
  tags: string[];
  worker: {
    backend?: number;
    frontend?: number;
    designer?: number;
    planner?: number;
  };
}

// 댓글 테이블
interface DesignSniperCommentItemType {
  id: string;
  content: string;
  user: UserType;
  createdAt: string;
}

interface DesignSniperCommentType {
  id: string;
  parentId: string;
  comments: DesignSniperCommentItemType[];
}

// 글 테이블
interface DesignSniperType {
  id: string;
  title: string;
  a: number;
  b: number;
}

interface CommunityType {
  id: string;
  categoray: string;
  likeCount: number;
  comments: string[]; // TODO: 댓글 구성 확인 후 type 정의 필요
  title: string;
}

interface JobOpeningType {
  id: string;
  category: string;
  endDate: string;
  title: string;
  type: string;
  company: string;
}
