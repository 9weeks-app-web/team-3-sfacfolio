import SpacQuizBox from '../../../quiz/(components)/SpacQuizBox';
import { SpacQuizDummy } from '@/dummy/spacQuiz';

export default function SpacQuizWrap() {
  return (
    <div className='mt-6 flex w-full gap-6'>
      {SpacQuizDummy.slice(0, 4).map((item, i) => (
        <SpacQuizBox
          key={i}
          id={item.id}
          title={item.title}
          date={item.date}
          image={item.image}
        />
      ))}
    </div>
  );
}
