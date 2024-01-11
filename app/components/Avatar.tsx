import Image from 'next/image';
import AvatarImage from '@images/avatar.jpg';

interface AvatarProps {
  src?: string | null;
}

export default function Avatar({ src }: AvatarProps) {
  return (
    <Image
      className='rounded-full'
      height={40}
      width={40}
      alt='Avatar'
      src={src || AvatarImage}
    />
  );
}
