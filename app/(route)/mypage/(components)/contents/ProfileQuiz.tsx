import SpacQuizBox from '@/(route)/quiz/(components)/SpacQuizBox';
import DropDownFilter from '@/components/DropDownFilter';
import { SpacQuizDummy } from '@/dummy/spacQuiz';
import ProfileQuizTable from './ProfileQuizTable';

export default function ProfileQuiz() {
  return (
    <div>
      <ProfileQuizTable />

      <div className='float-end mb-6 mt-4 flex'>
        <DropDownFilter filterCategory='정렬방식' filterOption='최신 순' />
      </div>
      <div className='grid w-full grid-cols-3 gap-2'>
        {SpacQuizDummy.slice(0, 6).map((item, i) => (
          <SpacQuizBox
            key={i}
            id={item.id}
            title={item.title}
            date={item.date}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
}
