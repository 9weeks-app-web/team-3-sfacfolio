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
  participants: ParticipantsType[];
  contactMethod: ContactMethodType;
  requiredSkills: string[];
  recruitPositions: RecruitmentPositionType[];
  description: string;
  NumberOfApplicants: number;
  comments: CommentType[];
}

export interface ParticipantsType {
  userName: string;
  position: string;
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
  username: string;
  date: string;
  comment: string;
  likes: number;
}

export interface CommentType {
  username: string;
  date: string;
  comment: string;
  likes: number;
  reply: ReplyCommentType[];
}
