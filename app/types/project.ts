export interface ProjectDataType {
  id: number;
  title: string;
  userName: string;
  createdAt: string;
  workingMethod: string;
  recruitDeadline: string;
  estimatedTime: string;
  progressStatus: string;
  applicationMethod: string;
  numberOfParticipants: string;
  contactMethod: ContactMethodType;
  requiredSkills: string[];
  recruitPositions: RecruitmentPositionType[];
  description: string;
  NumberOfApplicants: number;
  comments: CommentType[];
}

export interface ContactMethodType {
  type: string;
  value: string;
}

export interface RecruitmentPositionType {
  position: string;
  number: number;
  isRecruitClosed: boolean;
}

export interface ReplyCommentType {
  id: number;
  username: string;
  date: string;
  comment: string;
  likes: number;
}

export interface CommentType {
  id: number;
  image?: string;
  username: string;
  date: string;
  comment: string;
  likes: number;
  reply: ReplyCommentType[];
}