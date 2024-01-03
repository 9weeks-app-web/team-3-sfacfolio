import { CommentType } from '@/types/project';

import ProfileImage from '@/components/ProfileImage';
import HeartIcon from '@/components/HeartIcon';
import ReplyBox from './ReplyBox';

interface CommentsBoxProps {
  comment: CommentType;
}

export default function CommentsBox({ comment }: CommentsBoxProps) {
  console.log(comment.reply);
  return (
    <>
      <div className='w-full border-b border-line-normal px-14 py-6'>
        <div className='mb-4 flex justify-between'>
          <div className='flex items-center justify-center'>
            <ProfileImage width={50} height={50} />
            <span className='ml-3 mr-6 text-label1 font-bold'>
              {comment.username}
            </span>
            <span className='text-label2 font-medium text-text-alternative'>
              {comment.date}
            </span>
          </div>
          <div className='flex gap-4'>
            <button className='flex items-center justify-center'>
              <HeartIcon size={24} color='#8A8A8A' />
              <span className='ml-1 text-caption2 font-medium text-text-alternative'>
                {comment.likes}
              </span>
            </button>
            <button className='font-medium text-text-assitive'>대댓글</button>
            <button className='font-medium text-text-assitive'>신고</button>
          </div>
        </div>
        <div className='text-[20px]'>{comment.comment}</div>
      </div>
      {comment.reply.length > 0 &&
        comment.reply.map(item => <ReplyBox comment={item} key={item.id} />)}
    </>
  );
}
