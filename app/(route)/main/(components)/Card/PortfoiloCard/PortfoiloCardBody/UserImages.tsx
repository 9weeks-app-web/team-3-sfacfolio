import React from 'react';

export default function UserImages({ 참여인원 }: { 참여인원: number }) {
  if (참여인원 === 1) {
    return <div className='h-[100%] w-[100%] bg-black'></div>;
  } else if (참여인원 === 2) {
    return (
      <>
        <div className='h-[100%] w-[50%] bg-black'></div>
        <div className='h-[100%] w-[50%] bg-blue-400'></div>
      </>
    );
  } else if (참여인원 === 3) {
    return (
      <>
        <div className='h-[50%] w-[50%] bg-black'></div>
        <div className='h-[50%] w-[50%] bg-blue-400'></div>
        <div className='h-[50%] w-[100%] bg-red-400'></div>
      </>
    );
  } else {
    return (
      <>
        <div className='h-[50%] w-[50%] bg-black'></div>
        <div className='h-[50%] w-[50%] bg-blue-400'></div>
        <div className='h-[50%] w-[50%] bg-red-400'></div>
        <div className='h-[50%] w-[50%] bg-green-400'></div>
      </>
    );
  }
}
