import Link from 'next/link';

export default function MyPage() {
  return (
    <>
      <Link href={{ pathname: '/mypage/profileImage' }}>
        profile image edit
      </Link>
    </>
);