import { CommentType } from '@/types/project';

import { useForm } from 'react-hook-form';
import { UseQueryResult, useMutation, useQueryClient } from 'react-query';

import ProjectSectionTitle from '../Project/ProjectSectionTitle';
import CommentsListWrap from './CommentsListWrap';
import { addComment } from '@/api/project';
import { getCurrentDateTimeFormatted } from '@/utils/dateUtils';
import { useState } from 'react';

export interface CommentsWrapProps {
  projectId?: string;
  comments: CommentType[];
  refetch?: () => Promise<UseQueryResult<any, unknown>>;
}

export default function CommentsWrap({
  projectId,
  comments,
  refetch,
}: CommentsWrapProps) {
  const [commentCount, setCommentCount] = useState<number>(comments.length);
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm<{ body: string }>();

  const addCommentMutation = useMutation(
    (newComment: CommentType) => addComment(projectId!, newComment),
    {
      onSuccess: () => {
        setCommentCount(prevCount => prevCount + 1);
        queryClient.invalidateQueries('comments');
        resetField('body');
        refetch!();
      },
      onError: () => {
        alert('다시 시도해 주세요.');
        console.log(errors);
      },
    },
  );

  const onSubmit = (data: { body: string }) => {
    console.log(data);
    const comment = {
      username: 'test',
      date: getCurrentDateTimeFormatted(),
      comment: data.body,
      likes: 0,
      reply: [],
    };
    addCommentMutation.mutate(comment);
  };

  return (
    <div className='mt-8'>
      <ProjectSectionTitle title='댓글' number={commentCount} />

      <form className='flex justify-between' onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register('body', { required: true })}
          type='input'
          placeholder='댓글을 입력하세요.'
          className='h-12 w-[calc(100%-144px-10px)] rounded-lg border border-line-normal bg-background-primary px-[14px] py-4 outline-none'
        />
        <button
          type='submit'
          className='h-12 w-36 rounded-lg border border-line-normal bg-background-secondary'
        >
          등록
        </button>
      </form>

      <CommentsListWrap comments={comments} />
    </div>
  );
}
