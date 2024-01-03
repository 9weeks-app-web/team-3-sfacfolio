'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import SelectInput from './(components)/SelectInput';
import RadioInput from './(components)/RadioInput';
import Textarea from './(components)/Textarea';
import CheckInput from './(components)/CheckInput';
import Asterisk from '@images/Asterisk.svg';
import SmapleImage1 from '@images/Sample_Image_1.png';
import SmapleImage2 from '@images/Sample_Image_2.png';
import SmapleImage3 from '@images/Sample_Image_3.png';
import SmapleImage4 from '@images/Sample_Image_4.png';
import SmapleImage5 from '@images/Sample_Image_5.png';
import SmapleImage6 from '@images/Sample_Image_6.png';

const projectList = ['사이드 프로젝트', '프리랜스/외주'];

const projectProgress = [
  { id: 1, title: '분석/설계' },
  { id: 2, title: '기획' },
  { id: 3, title: '디자인' },
  { id: 4, title: '퍼블리싱' },
  { id: 5, title: '개발' },
  { id: 6, title: '운영중' },
];

const projectLavel = [
  { id: 1, title: '초급' },
  { id: 2, title: '중급' },
  { id: 3, title: '고급' },
];

const sampleImage = [
  { src: SmapleImage1, bgColor: 'bg-[#ffbaba]' },
  { src: SmapleImage2, bgColor: 'bg-[#f3adca]' },
  { src: SmapleImage3, bgColor: 'bg-[#abd2ff]' },
  { src: SmapleImage4, bgColor: 'bg-[#bdebb1]' },
  { src: SmapleImage5, bgColor: 'bg-[#b5c9ff]' },
  { src: SmapleImage6, bgColor: 'bg-[#ffde8a]' },
];

const skills = [
  { id: 1, title: 'JAVA' },
  { id: 2, title: 'Android' },
  { id: 3, title: 'IOS' },
  { id: 4, title: 'Python' },
  { id: 5, title: 'JSP' },
  { id: 6, title: 'PHP' },
  { id: 7, title: 'ASP' },
  { id: 8, title: 'C' },
  { id: 9, title: 'C#' },
  { id: 10, title: 'C++' },
  { id: 11, title: 'MFC' },
  { id: 12, title: '.Net' },
  { id: 13, title: 'Node.js' },
  { id: 14, title: 'Vue.js' },
  { id: 15, title: 'React.js' },
  { id: 16, title: 'JQuery' },
  { id: 17, title: 'JavaScript' },
  { id: 18, title: 'Oracle' },
  { id: 19, title: 'MSSQL' },
  { id: 20, title: 'MYsql' },
  { id: 21, title: 'MariaDB' },
  { id: 22, title: 'MongoDB' },
  { id: 23, title: 'PostgreSQL' },
  { id: 24, title: 'HTML5' },
  { id: 25, title: 'CSS' },
  { id: 26, title: 'BootStrap' },
  { id: 27, title: '웹표준' },
  { id: 28, title: 'PhotoShop' },
  { id: 29, title: 'Illustrator' },
  { id: 30, title: 'Adobe XD' },
  { id: 31, title: 'InDesign' },
  { id: 32, title: 'Zeplin' },
  { id: 33, title: 'Sketch' },
];

function ProjectAddPage() {
  const [selectedProject, setSelectedProject] = useState('사이드 프로젝트');
  const handleListClick = (project: string) => {
    setSelectedProject(project);
  };

  return (
    <div className='container pt-[154px] pb-16 bg-background-primary space-y-20'>
      {/* 헤더 */}
      <div>
        <h3 className='text-title font-bold'>프로젝트 등록</h3>
        <ul className='flex gap-6 mt-[34px]'>
          {projectList.map(project => (
            <li
              key={project}
              className={`${
                project === selectedProject ? 'text-white bg-primary-heavy' : ''
              } text-label1 px-4 py-3 rounded-full cursor-pointer`}
              onClick={() => handleListClick(project)}
            >
              {project}
            </li>
          ))}
        </ul>
      </div>
      {/* 프로젝트 정보 */}
      <div className='w-[1280px] bg-background-secondary p-[50px] rounded-[18px]'>
        <h4 className='flex items-start gap-[5px] text-subTitle font-bold py-[10px] leading-6'>
          프로젝트 정보
          <Image src={Asterisk} alt='asterisk' />
        </h4>
        <div className='grid grid-cols-2 space-y-[34px] pt-[34px]'>
          <div className='flex flex-col col-span-2'>
            <label htmlFor='title' className='text-[20px] font-bold py-4'>
              프로젝트명
            </label>
            <input
              type='text'
              id='title'
              className='w-[730px] h-[52px] text-[20px] font-medium border border-line-normal rounded-lg focus:outline-none px-[15px]'
            />
          </div>
          <SelectInput
            label='진행방식'
            placeholder='온라인/오프라인'
            options={['온라인', '오프라인']}
          />
          <SelectInput
            label='모집인원'
            placeholder='모집인원'
            options={[
              '1명',
              '2명',
              '3명',
              '4명',
              '5명',
              '6명',
              '7명',
              '8명',
              '9명',
              '10명 이상',
            ]}
          />
          <SelectInput
            label='모집직군'
            placeholder='모집직군'
            options={['다지아너', '백엔드', '프론트엔드', '기획자']}
          />
          <SelectInput
            label='예상기간'
            placeholder='예상기간'
            options={[
              '1개월',
              '2개월',
              '3개월',
              '4개월',
              '5개월',
              '6개월',
              '7개월',
              '8개월',
              '9개월',
              '10개월',
              '11개월',
              '12개월 이상(장기프로젝트)',
            ]}
          />
          <SelectInput label='모집마감' placeholder='모집마감' options={[]} />
          <SelectInput
            label='신청방법'
            placeholder='신청방법'
            options={['카카오톡 오픈 채팅방', '구글폼']}
          />
          <SelectInput
            label='연락방법'
            placeholder='연락방법'
            options={['이메일', '카카오톡', '구글폼']}
            mode='extend'
          />
        </div>
      </div>
      {/* 세부 정보 */}
      <div className='w-[1280px] bg-background-secondary px-[50px] py-20 rounded-[18px]'>
        <h4 className='text-subTitle font-bold py-[10px] leading-6'>
          세부 정보
        </h4>
        <div className='flex flex-col space-y-[34px] pt-[34px]'>
          <RadioInput label='프로젝트 진행단계' items={projectProgress} />
          <Textarea label='프로젝트 소개' />
          <CheckInput label='필요기술 SPEC (최대 5개)' items={skills} />
          <RadioInput label='참여가능 등급' items={projectLavel} />
        </div>
      </div>
      {/* 사진등록 */}
      <div className='w-[1280px] bg-background-secondary px-[50px] py-20 rounded-[18px]'>
        <h4 className='text-subTitle font-bold py-[10px] leading-6'>
          사진등록
        </h4>
        <div className='flex flex-col space-y-[34px] pt-[34px]'>
          <div className='flex flex-col col-span-2'>
            <label htmlFor='title' className='text-[20px] font-bold py-4'>
              첨부파일 등록
            </label>
            <div className='flex justify-between'>
              <input
                type='text'
                id='title'
                className='w-[979px] h-[67px] text-[20px] font-medium border border-line-normal rounded-lg focus:outline-none px-[15px]'
              />
              <label
                htmlFor='image'
                className='inline-block text-center w-[190px] h-[67px] text-subTitle text-white bg-text-disable p-[15px] rounded-lg'
              >
                첨부 파일
              </label>
              <input type='file' id='image' className='hidden' />
            </div>
          </div>
          <div className='flex flex-col col-span-2'>
            <label htmlFor='title' className='text-[20px] font-bold py-4'>
              샘플 사진 등록
            </label>
            <div className='flex flex-wrap gap-[26px]'>
              {sampleImage.map(image => (
                <div
                  className={`${image.bgColor} relative items-center w-[280px] h-[212px] rounded-xl`}
                >
                  <Image
                    src={image.src}
                    alt='sample_image'
                    placeholder='blur'
                    fill
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectAddPage;
