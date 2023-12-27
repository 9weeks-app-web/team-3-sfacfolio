import Image from 'next/image';
import { socialIcons } from '../public/assets/images/SocialIcons';

export default function Home() {
  return (
    <main>
      <Image src={socialIcons.youtube} alt='test' />
      <div className='text-8xl font-extrabold'>폰트테스트</div>
    </main>
  );
}
