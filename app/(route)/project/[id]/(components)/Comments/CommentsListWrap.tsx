import { CommentType } from '@/types/project';
import { CommentsWrapProps } from './CommentsWrap';

import CommentsBox from './CommentsBox';

export default function CommentsListWrap({ comments }: CommentsWrapProps) {
  return (
    <div className='my-14 flex w-full flex-col items-end'>
      {comments.map((comment: CommentType, i) => (
        <CommentsBox comment={comment} key={i} />
      ))}
    </div>
  );
}
