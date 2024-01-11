import JobOfferCard from '@/(route)/main/(components)/Card/JobOfferCard/JobOfferCard';
import { JobOfferDummy } from '@/dummy';
import React from 'react';

function InterestingNotice() {
  return (
    <div className='mt-6 grid grid-cols-3'>
      {JobOfferDummy.map(job => (
        <JobOfferCard
          company={job.company}
          logo={job.logo}
          key={job.id}
          category={job.category}
          career={job.career}
          title={job.title}
          imageUrl={job.imageUrl}
        />
      ))}
    </div>
  );
}

export default InterestingNotice;
