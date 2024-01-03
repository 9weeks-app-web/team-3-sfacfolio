import CommentsBox from './CommentsBox';

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

interface CommentsWrapProps {
  comments: CommentType[];
}

export default function CommentsWrap({ comments }: CommentsWrapProps) {
  return (
    <div className='my-14 flex w-full flex-col items-end'>
      {comments.map((comment: CommentType) => (
        <CommentsBox comment={comment} key={comment.id} />
      ))}
    </div>
  );
}
