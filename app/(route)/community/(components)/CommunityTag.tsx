import styles from '@/style/community.module.css';

interface CommunityTagProps {
  tag: string;
}

export default function CommunityTag({ tag }: CommunityTagProps) {
  return (
    <div
      className={`${styles.communityTag} rounded-full border border-line-normal bg-background-primary px-3 py-1 text-caption3 font-medium text-text-normal`}
    >
      #{tag}
    </div>
  );
}
