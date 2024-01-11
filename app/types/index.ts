import { Timestamp } from 'firebase/firestore';

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

export interface KeywordType {
  content: string;
  rank: 'rise' | 'maintain' | 'decline';
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

export interface CommunityPostType {
  id?: string;
  title: string;
  content: string;
  hashTags: string[];
  category: '질의응답' | '자유게시판' | '스팩 후기';
  publishedAt: Timestamp;
  likes?: number;
  comments?: CommunityCommentType[];
  views?: number;
  thumbnail?: string;
}

interface CommunityCommentType {
  name: string;
  content: string;
  createdAt: string;
  likes: number;
  comments: string[];
} // TODO: 타입 재설정 필요

interface JobOpeningType {
  id: string;
  category: string;
  endDate: string;
  title: string;
  type: string;
  company: string;
}

export interface ProfileOfferType {
  id: number;
  type: '채용' | '프로젝트';
  title: string;
  name: string;
  date: string;
  thumbnail: string;
  tech: string;
  job: string;
  message: string;
  workingMethod: string;
  client: string;
  period: string;
  budget?: string;
  link?: string;
  file?: string;
  progressStatus?: string;
}
