import React from 'react';

function ApplyStatusTable() {
  return (
    <table className='w-full'>
      <thead>
        <tr className='bg-background-tertiary text-text-alternative'>
          <th className='rounded-tl-lg py-[18px] font-normal leading-4'>
            지원 회사
          </th>
          <th className='font-normal leading-4'>지원 포지션</th>
          <th className='font-normal leading-4'>작성 시간</th>
          <th className='rounded-tr-lg font-normal leading-4 '>진행 상태</th>
        </tr>
      </thead>
      <tbody>
        <tr className=''>
          <td className='py-[18px] text-center leading-4'>스나이퍼팩토리</td>
          <td className='text-center leading-4'>UIUX 디자이너</td>
          <td className='text-center leading-4'>2023.11.11.</td>
          <td className='text-center leading-4'>지원 완료</td>
        </tr>
        <tr>
          <td className='py-[18px] text-center leading-4'>스나이퍼팩토리</td>
          <td className='text-center leading-4'>UIUX 디자이너</td>
          <td className='text-center leading-4'>2023.11.11.</td>
          <td className='text-center leading-4 text-status-positive'>
            서류 통과
          </td>
        </tr>
        <tr>
          <td className='py-[18px] text-center leading-4'>스나이퍼팩토리</td>
          <td className='text-center leading-4'>UIUX 디자이너</td>
          <td className='text-center leading-4'>2023.11.11.</td>
          <td className='text-center leading-4 text-primary-heavy'>
            최종 합격
          </td>
        </tr>
        <tr>
          <td className='py-[18px] text-center leading-4'>스나이퍼팩토리</td>
          <td className='text-center leading-4'>UIUX 디자이너</td>
          <td className='text-center leading-4'>2023.11.11.</td>
          <td className='text-center leading-4 text-status-alert'>불합격</td>
        </tr>
      </tbody>
    </table>
  );
}

export default ApplyStatusTable;
