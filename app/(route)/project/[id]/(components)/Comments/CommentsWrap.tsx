import { CommentType } from '@/types/project';

import CommentsBox from './CommentsBox';

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
