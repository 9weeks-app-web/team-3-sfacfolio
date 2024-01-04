import Image from 'next/image';

interface ProfileImageProps {
  url?: string;
  width: number;
  height: number;
  className?: string;
}

export default function ProfileImage({
  url = 'https://images.unsplash.com/photo-1703535753934-7ab4ca4836c8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  width,
  height,
  className = '',
}: ProfileImageProps) {
  return (
    <div
      className={`flex ${'h-[' + height + 'px]'} ${
        'w-[' + width + 'px]'
      } items-center justify-center overflow-hidden rounded-full border-2 border-white ${className}`}
    >
      <Image
        src={url}
        alt='profile'
        width={width}
        height={height}
        style={{ height: height, width: width, objectFit: 'cover' }}
      />
    </div>
  );
}
