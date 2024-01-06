import { ReplyCommentType } from '@/types/project';

import ProfileImage from '@/components/ProfileImage';
import HeartIcon from '@/components/Icons/HeartIcon';

interface CommentsBoxProps {
  comment: ReplyCommentType;
}

export default function ReplyBox({ comment }: CommentsBoxProps) {
  return (
    <>
      <div className='flex w-[calc(100%-56px)] border-b border-line-normal px-14 py-6'>
        <div className='w-1'>
          <div className='h-10 w-full bg-line-normal'></div>
        </div>
        <div className='w-[calc(100%-4px)] pl-4'>
          <div className='mb-4 flex justify-between'>
            <div className='flex items-center justify-center'>
              <ProfileImage width={40} height={40} />
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
              <button className='font-medium text-text-assitive'>신고</button>
            </div>
          </div>
          <div className='text-[20px]'>{comment.comment}</div>
        </div>
      </div>
    </>
  );
}
