import SpacQuizBox from '../../../quiz/(components)/SpacQuizBox';

import SpacQuiz1 from '@images/SpacQuiz/SpacQuiz1.png';
import SpacQuiz2 from '@images/SpacQuiz/SpacQuiz2.png';
import SpacQuiz3 from '@images/SpacQuiz/SpacQuiz3.png';
import SpacQuiz4 from '@images/SpacQuiz/SpacQuiz4.png';

export default function SpacQuizWrap() {
  return (
    <div className='mt-6 flex w-full gap-6'>
      <SpacQuizBox
        title={['웹 환경에', ' 적절한 것은? (2)']}
        date='2023년 12월 넷째 주'
        image={SpacQuiz1}
      />
      <SpacQuizBox
        title={['웹 환경에', ' 적절한 것은? (1)']}
        date='2023년 12월 셋째 주'
        image={SpacQuiz2}
      />
      <SpacQuizBox
        title={['모바일 환경에', ' 적절한 것은? (2)']}
        date='2023년 12월 둘째 주'
        image={SpacQuiz3}
      />
      <SpacQuizBox
        title={['미디어 플랫폼에', ' 적절한 것은?']}
        date='2023년 12월 첫째 주'
        image={SpacQuiz4}
      />
    </div>
  );
}
