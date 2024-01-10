'use client';

import { useState } from 'react';
import SettingWrap from './(components)/SettingWrap';
import ToggleSwitch from '../../../components/ToggleSwitch';
import SettingToggle from './(components)/SettingToggle';

interface toggleType {
  [key: string]: boolean;
}

export default function SettingPage() {
  const [toggleStates, setToggleStates] = useState<toggleType>({
    notificationsEnabled: false,
    privatePortfolio: false,
    followNotifications: false,
    portfolioViewsNotifications: false,
    communityPostNotifications: false,
    projectViewsNotifications: false,
    jobOfferNotifications: false,
    emailFeedbackNotifications: false,
    projectOfferNotifications: false,
    inquiryResponseNotifications: false,
    announcementsNotifications: false,
    proposalReceivingSettings: false,
    emailProjectOffers: false,
    messageProjectOffers: false,
    emailJobOffers: false,
    messageJobOffers: false,
  });

  const handleToggle = (toggleId: string) => {
    setToggleStates(prevStates => ({
      ...prevStates,
      [toggleId]: !prevStates[toggleId],
    }));
  };

  return (
    <div className='min-h-screen bg-background-primary'>
      <div className='mx-auto w-[954px] py-[13px]'>
        <SettingWrap>
          <div className='flex items-center justify-between p-6'>
            <p className='text-[20px] font-bold text-text-normal'>알림 설정</p>
            <ToggleSwitch
              checked={toggleStates['notificationsEnabled']}
              onChange={() => handleToggle('notificationsEnabled')}
            />
          </div>
        </SettingWrap>

        <SettingWrap>
          <div className='mb-6 p-6'>
            <p className='text-[20px] font-bold text-text-normal'>
              비공개 설정
            </p>
          </div>
          <div className='p-6'>
            <p className='mb-4 text-[18px] font-bold text-text-normal'>
              내 비공개 설정
            </p>
            <div className='flex flex-col gap-3'>
              <SettingToggle
                title='내 포트폴리오/프로젝트 비공개 설정'
                checked={toggleStates['privatePortfolio']}
                onToggle={() => handleToggle('privatePortfolio')}
              />
            </div>
          </div>
        </SettingWrap>

        <SettingWrap>
          <div className='border-b border-line-normal p-6'>
            <p className='mb-4 text-[18px] font-bold text-text-normal'>
              계정 활동 알림
            </p>
            <div className='flex flex-col gap-3'>
              <SettingToggle
                title='팔로우 알림'
                checked={toggleStates['followNotifications']}
                onToggle={() => handleToggle('followNotifications')}
              />
              <SettingToggle
                title='내 포트폴리오 조회/관심 알림'
                checked={toggleStates['portfolioViewsNotifications']}
                onToggle={() => handleToggle('portfolioViewsNotifications')}
              />
              <SettingToggle
                title='내 커뮤니티 글 조회/관심 알림'
                checked={toggleStates['communityPostNotifications']}
                onToggle={() => handleToggle('communityPostNotifications')}
              />
              <SettingToggle
                title='내 프로젝트 조회/관심 알림'
                checked={toggleStates['projectViewsNotifications']}
                onToggle={() => handleToggle('projectViewsNotifications')}
              />
            </div>
          </div>
          <div className='border-b border-line-normal p-6'>
            <p className='mb-4 text-[18px] font-bold text-text-normal'>
              제안 메세지 알림
            </p>
            <div className='flex flex-col gap-3'>
              <SettingToggle
                title='스팩폴리오 메세지로 채용 제안 알림'
                checked={toggleStates['jobOfferNotifications']}
                onToggle={() => handleToggle('jobOfferNotifications')}
              />
              <SettingToggle
                title='이메일로 의견 제안 알림'
                checked={toggleStates['emailFeedbackNotifications']}
                onToggle={() => handleToggle('emailFeedbackNotifications')}
              />
              <SettingToggle
                title='스팩폴리오 메세지로 프로젝트 제안 알림'
                checked={toggleStates['projectOfferNotifications']}
                onToggle={() => handleToggle('projectOfferNotifications')}
              />
            </div>
          </div>
          <div className='p-6'>
            <p className='mb-4 text-[18px] font-bold text-text-normal'>
              기타 알림
            </p>
            <div className='flex flex-col gap-3'>
              <SettingToggle
                title='문의/신고 답변 알림'
                checked={toggleStates['inquiryResponseNotifications']}
                onToggle={() => handleToggle('inquiryResponseNotifications')}
              />
              <SettingToggle
                title='공지사항/이벤트 알림'
                checked={toggleStates['announcementsNotifications']}
                onToggle={() => handleToggle('announcementsNotifications')}
              />
            </div>
          </div>
        </SettingWrap>

        <SettingWrap>
          <div className='mb-6 flex items-center justify-between p-6'>
            <p className='text-[20px] font-bold text-text-normal'>
              제안 받기 설정
            </p>
            <ToggleSwitch
              checked={toggleStates['proposalReceivingSettings']}
              onChange={() => handleToggle('proposalReceivingSettings')}
            />
          </div>
          <div className='border-b border-line-normal p-6'>
            <p className='mb-4 text-[18px] font-bold text-text-normal'>
              프로젝트 제안 받기
            </p>
            <div className='flex flex-col gap-3'>
              <SettingToggle
                title='이메일 제안 받기'
                checked={toggleStates['emailProjectOffers']}
                onToggle={() => handleToggle('emailProjectOffers')}
              />
              <SettingToggle
                title='스팩폴리오 메세지 제안 받기'
                checked={toggleStates['messageProjectOffers']}
                onToggle={() => handleToggle('messageProjectOffers')}
              />
            </div>
          </div>
          <div className='p-6'>
            <p className='mb-4 text-[18px] font-bold text-text-normal'>
              채용 제안 받기
            </p>
            <div className='flex flex-col gap-3'>
              <SettingToggle
                title='이메일 제안 받기'
                checked={toggleStates['emailJobOffers']}
                onToggle={() => handleToggle('emailJobOffers')}
              />
              <SettingToggle
                title='스팩폴리오 메세지 제안 받기'
                checked={toggleStates['messageJobOffers']}
                onToggle={() => handleToggle('messageJobOffers')}
              />
            </div>
          </div>
        </SettingWrap>
      </div>
    </div>
  );
}
