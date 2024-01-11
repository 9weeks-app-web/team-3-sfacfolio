'use client';
import React, { useState } from 'react';
import ProfileSummary from './ProfileSummary';
import ProfileDetail, { ProfileTabMenusType } from './ProfileDetail';

function MyProfile() {
  const [currentTab, setCurrentTab] = useState<ProfileTabMenusType | null>(
    '커리어',
  );

  return (
    <>
      <ProfileSummary setCurrentTab={setCurrentTab} />
      <ProfileDetail currentTab={currentTab} setCurrentTab={setCurrentTab} />
    </>
  );
}

export default MyProfile;
