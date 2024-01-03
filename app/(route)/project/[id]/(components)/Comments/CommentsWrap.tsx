import { CommentType } from '@/types/project';

import ProjectSectionTitle from '../Project/ProjectSectionTitle';
import CommentsListWrap from './CommentsListWrap';

export interface CommentsWrapProps {
  comments: CommentType[];
}

export default function CommentsWrap({ comments }: CommentsWrapProps) {
  return (
    <div className='mt-8'>
      <ProjectSectionTitle title='댓글' number={4} />

      <form className='flex justify-between'>
        <input
          type='input'
          placeholder='댓글을 입력하세요.'
          className='h-12 w-[calc(100%-144px-10px)] rounded-lg border border-line-normal bg-background-primary px-[14px] py-4 outline-none'
        />
        <button className='h-12 w-36 rounded-lg border border-line-normal bg-background-secondary'>
          등록
        </button>
      </form>

      <CommentsListWrap comments={comments} />
    </div>
  );
}
