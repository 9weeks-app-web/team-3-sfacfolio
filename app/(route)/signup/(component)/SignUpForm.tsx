'use client';

import React, { useState } from 'react';
import StageOne from './(SignUpStage)/StageOne';
import StageTwo from './(SignUpStage)/StageTwo';
import StageThree from './(SignUpStage)/StageThree';

export default function SignUpForm() {
  const [stage, setStage] = useState(0);

  const array = [
    {
      id: 1,
      elem: <StageOne setStage={setStage} />,
    },
    {
      id: 2,
      elem: <StageTwo setStage={setStage} />,
    },
    {
      id: 3,
      elem: <StageThree />,
    },
  ];

  return array[stage].elem;
}
