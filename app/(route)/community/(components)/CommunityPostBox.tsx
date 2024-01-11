'use client';

import Image from 'next/image';
import { Viewer } from '@toast-ui/react-editor';

import CommunityTag from './CommunityTag';
import HeartIcon from '@/components/Icons/HeartIcon';
import EyeIcon from '@/components/Icons/EyeIcon';

import { CommunityPostType } from '@/types';
import styles from '@/style/community.module.css';
import IconMessage from '@images/IconMessage.svg';
import { timeAgo } from '@/utils/dateUtils';

interface CommunityPostBoxProps {
  post: CommunityPostType;
}

export default function CommunityPostBox({ post }: CommunityPostBoxProps) {
  const content =
    post.content.length >= 60
      ? post.content.substr(0, 60) + '...'
      : post.content;

  const date = timeAgo(post.publishedAt);

  return (
    <div
      className={`${styles.communityPostBox} w-full cursor-pointer rounded-lg border border-line-normal bg-white px-[22px] py-4 hover:bg-background-primary`}
    >
      <div className='flex w-full items-center'>
        <div className='w-[calc(100%-60px)] pr-4'>
          <p className='mb-2 text-[18px] font-medium'>{post.title}</p>
          <p className='text-label1 text-text-alternative'>
            <Viewer initialValue={content} />
          </p>
        </div>
        <div className='h-[60px] w-[60px] overflow-hidden rounded'>
          {post.thumbnail && (
            <Image
              src={post.thumbnail}
              alt='thumbnail'
              width={0}
              height={0}
              sizes='100%'
              className='h-full w-full object-cover'
            />
          )}
        </div>
      </div>

      <div className='my-4 flex gap-2'>
        {post.hashTags.map(tag => (
          <CommunityTag tag={tag} key={tag} />
        ))}
      </div>

      <div className='flex items-center justify-between'>
        <div className='text-caption2 text-text-alternative '>
          <span>{post.category}</span>
          <span className='px-[6px] text-line-normal'>|</span>
          <span>{date}</span>
        </div>
        <div className='flex gap-3'>
          <div className='flex items-center justify-center gap-1 text-caption2 text-text-alternative'>
            <HeartIcon size={20} color='#C4C4C4' />
            {post.likes ? post.likes.toLocaleString('ko-KR') : '0'}
          </div>
          <div className='flex items-center justify-center gap-1 text-caption2 text-text-alternative'>
            <Image src={IconMessage} alt='' />
            {post.comments ? post.comments.length.toLocaleString('ko-KR') : '0'}
          </div>
          <div className='flex items-center justify-center gap-1 text-caption2 text-text-alternative'>
            <EyeIcon size={20} color='#C4C4C4' />
            {post.views ? post.views.toLocaleString('ko-KR') : '0'}
          </div>
        </div>
      </div>
    </div>
  );
}
