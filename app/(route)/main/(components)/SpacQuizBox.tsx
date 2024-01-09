import Image, { StaticImageData } from 'next/image';

interface SpacQuizBoxProps {
  title: string[] | string;
  date: string;
  image: StaticImageData;
}

export default function SpacQuizBox({ title, date, image }: SpacQuizBoxProps) {
  return (
    <div
      className={`relative h-[302px] w-[302px] cursor-pointer overflow-hidden rounded-lg border border-line-normal`}
    >
      <Image
        src={image.src}
        alt='quiz image'
        width={0}
        height={0}
        sizes='100%'
        className='absolute left-0 top-0 h-full w-full object-cover'
      />
      <div className='absolute left-0 top-0 h-full w-full p-6'>
        <p className='mb-5 text-label1 text-text-alternative'>{date}</p>
        {Array.isArray(title) ? (
          title.map((line: string, index: number) => (
            <p key={index} className='text-[20px] font-bold text-text-normal'>
              {line}
            </p>
          ))
        ) : (
          <p className='text-[20px] font-bold text-text-normal'>{title}</p>
        )}
      </div>
    </div>
  );
}
