function Textarea({ label }: { label: string }) {
  return (
    <li className='flex flex-col col-span-2'>
      <label htmlFor='title' className='text-[20px] font-bold py-4'>
        {label}
      </label>
      <textarea
        className='h-[200px] border border-line-normal rounded-lg focus:outline-none p-[15px] resize-none'
        placeholder='생성할 프로젝트에 대해 자유롭게 작성해주요. 설명이 구체적일수록 모집이 쉬어집니다! ex) 요청사항, 우대사항, 업무 범위, 희망 경력 및 연령대'
      ></textarea>
    </li>
  );
}

export default Textarea;
