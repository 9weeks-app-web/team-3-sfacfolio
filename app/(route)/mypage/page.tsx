import Link from 'next/link';

function MyPage() {
  return (
    <>
      <Link href={{ pathname: '/mypage/profileImage' }}>
        profile image edit
      </Link>
    </>
  );
}
export default MyPage;
