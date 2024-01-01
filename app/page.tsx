import Image from 'next/image';
import { socialIcons } from '@images/SocialIcons';
import Container from './components/Container';

export default function Home() {
  return (
    <main>
      <Container className='border'>
        <Image src={socialIcons.youtube} alt='test' />
        <div className='text-8xl font-extrabold'>폰트테스트</div>
      </Container>
    </main>
  );
}
