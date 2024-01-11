import React from 'react';
import MoreButton from './(components)/MoreButton';
import BannerCarousel from './(components)/(BannerCarousel)/BannerCarousel';
import SectionHeader from './(components)/SectionHeader';
import SectionWrapper from './(components)/SectionWrapper';
import SectionSliderWrapper from './(components)/SectionSliderWrapper';
import CategoryButtonWrap from '../../components/CategoryButtonWrap';
import PortfolioCard from './(components)/Card/PortfoiloCard/PortfolioCard';
import JobOfferCard from './(components)/Card/JobOfferCard/JobOfferCard';
import RealTimeContainer from '../../components/RealTime/RealTimeContainer';
import RealTimeCommunity from '../../components/RealTime/RealTimeCommunity';
import RealTimeKeyword from '../../components/RealTime/RealTimeKeyword';
import CardContainer from './(components)/Card/CardContainer';
import ProjectMatchingBanner from './(components)/FindProjectCard/ProjectMatchingBanner';
import { portfolioCategories } from '@/constants';
import { JobOfferDummy, PortfolioDummy } from '@/dummy';
import SpacQuizWrap from './(components)/SpacQuiz/SpacQuizWrap';
import PortfolioCardCarousel from './(components)/PortfolioCard/PortfolioCardCarousel';
import ProjectCard from './(components)/ProjectCard/ProjectCard';

function MainPage() {
  return (
    <>
      <BannerCarousel />

      {/* 맞춤 추천 포트폴리오 */}
      <SectionWrapper>
        <SectionHeader
          title='김스팩 님이 좋아할 만한 작품을 감상해 보세요!'
          subTitle='맞춤 추천 포트폴리오'
          more='/'
        />
        <CategoryButtonWrap type='button' categories={portfolioCategories} />
        <CardContainer>
          {PortfolioDummy.slice(0, 8).map(portfolio => (
            <PortfolioCard key={portfolio.id} {...portfolio} />
          ))}
        </CardContainer>
      </SectionWrapper>

      {/* 스팩폴리오 Pick */}
      <SectionSliderWrapper
        className='relative overflow-hidden bg-background-primary py-[80px]'
        slider={<PortfolioCardCarousel />}
      ></SectionSliderWrapper>

      {/* 프로젝트 */}
      <SectionWrapper>
        <SectionHeader
          title='김스팩 님이 원하던 바로 그 프로젝트!'
          subTitle='프로젝트 어디서 찾지'
          className='mb-6'
          more='/project'
        />
        <div className='grid grid-cols-2 gap-6'>
          <ProjectCard
            title='콘텐츠 기반 공연예술 큐레이션 플랫폼 제작에 함께 하실 분을 찾고 있습니다. '
            imgUrl='https://s3-alpha-sig.figma.com/img/d713/0dae/8832502f449da9b8943bed8e78291cf1?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OMU6z5h7QvMmt9l5-CqnlDu9-3LzULsIUHJHegy41es4Q0oG4ROJ~DffJ8vDyLVRAZOkC0aE9EGG24lWbUWFanSKG8Sb1g8plF5uQOwS8j6h8BfD3vybBBND9R8Ko1R4KriB0NWEJF1P9KgIL5l4JRrOK3neu2MX9Kh3ID-VJAq1pf4VH228bP-PUVkIq6hFjt-jeTD6XbcTLYFLaXuyVGnQDr4Nu5XfdQzkSvNoy4ZkyuYgX~LByaLjkxOXm6db4V6r5~siu4wiKSo1c72-wu~zgKR9mO03lN1xvN~lXVQqxO-8usTpkBZhvJxwNOFu4Sst~uLVAJjcd~0XKYsQUQ__'
            period={5}
            memeberRecruit={[
              { position: '웹 프론트엔드', status: '마감' },
              { position: 'UI/UX 디자인', status: '마감' },
              { position: '3D 디자인', status: 1 },
            ]}
          />
          <ProjectCard
            title='관심분야 놀거리 테마 추천 플랫폼으로 좋아하는 축제,전시,팝업 등 놓치지 마세요!'
            imgUrl='https://s3-alpha-sig.figma.com/img/4f9b/707b/c66bcbdd473c961f8349702bca329355?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Eu3acktviOh1QfPIYL9vHECYCSE0p1o5M8AMZEtIJHCgj4-XEAiXUsEESt34UnjMHn0s83GPh5MPKDMIUHE~aWEaq0dIl-cAKbkTvs945qTG1zedW4kJDcD3QLqR~NVqx5gn4Bo2R27p3-LqCbuqMUUggXVeNonQn3-4PENlam-3-fG4mRYzZGxA5IJVQFvmzR1X1AQm-AoYyckSly2rjvdG4C2aQ-cxcA6avGCB84d4gQdBBS-FTpr0c-EQLcVMqSrwGhjRf3aDskCJLgSn2s1GdvlsfQ5sHT5szoN8zgs6IG99F-ExufBHGQBqkeSYKs8qh6KoEZlrWeVitSlFAg__'
            period={4}
            memeberRecruit={[
              { position: '게임클라이언트', status: 1 },
              { position: '그래픽 디자인', status: 1 },
              { position: '프로젝트 매니저', status: '마감' },
            ]}
          />
          <ProjectCard
            title='귀여운 플래시 게임제작하실분 모집합니다! 함께 만들며 귀여워져 봐요!'
            imgUrl='https://s3-alpha-sig.figma.com/img/ece8/2435/8151932732f3827f5eb7bcafe029a1b6?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G7tM353AvjlLbxK56R23PdEVNZN727C42ZAYnrRHz2P9b-Z585Pf-B7Sro0h1mPD8LGizwU0DQJaeOZcKufkj6YqLafhU6AM~mVrvTHvBrK6umycx2jrolFRjzJixGKwSLKPxXVWsrfTpjrqjlBiNeMarms3i4yI0tJUxhDy0N~Eapx9RAuOzooR16maj8tXONMnPWb4DmdPCn4tR-GLXAKIe6anZPmBXM7PLqVEJid5QanPkMTS9Jq34nINnJV18F-8vULAxFXxFTSsdok5wmOJ1WIMH7wHbbEWyi1vzNAHxuo09RfIFURqJAVuDz5d7Ce1j3t7cL-UhR4V8LE-2Q__'
            period={6}
            memeberRecruit={[{ position: '웹 프론트엔드', status: 1 }]}
          />
          <ProjectCard
            title='영화 커뮤니티 서비스 제작합니다. 영화 좋아하시는 분들이라면 누구든지 환영!'
            imgUrl='https://s3-alpha-sig.figma.com/img/1a8d/65c0/5de1b3e8a0697048c232640d45206135?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oB60ljWtBA~v7YAk2Uk5MbgvS~ReAbiARuE6tmjw9eUybFmcwhS~cijzT-63J29csmPGgmqEbV8uMqJu39GZmQ658Bh1ImzyTQ21Oq6JOfQMGb4PPoLls7E59f6yg3ROX2BJo1uhqBerewaGiWM~PQiOp~en82q3Bbb5Syn3ePamPdHFkPAy0wn4itn-2C53BOJVyQfkV9ogz59HRwc8Cd2A8TYsaIKxP8TlIbnimHvA1iJP1Wv1u9WPlhCEmHGxIeECQa8NFwgXvWh5wIeLKijnJt7tDB23d7Q36Ll7hqWhXmACuiUkTMOzDCIkzpCLIpmQ8nA6~dLERzCPRGnjoQ__'
            period={4}
            memeberRecruit={[{ position: '프로젝트 매니저', status: 1 }]}
          />
        </div>
      </SectionWrapper>
      <ProjectMatchingBanner />

      {/* 스팩퀴즈 */}
      <SectionWrapper>
        <SectionHeader
          title='스팩이들을 위한 디자인 인사이트!'
          subTitle='이번 주 스팩퀴즈'
          more='/quiz'
        />
        <SpacQuizWrap />
      </SectionWrapper>

      {/* 커뮤니티 */}
      <SectionWrapper className='bg-background-primary'>
        <SectionHeader
          title='커뮤니티에서 스팩이들과 이야기 나눠보세요!'
          subTitle='스팩이들이 관심갖는 토픽'
          more='/community'
        />
        <RealTimeContainer>
          <RealTimeCommunity />
          <RealTimeKeyword type='main' />
        </RealTimeContainer>
      </SectionWrapper>

      {/* 채용 공고 */}
      <SectionWrapper>
        <SectionHeader
          subTitle='스나이퍼팩토리가 취뽀를 기원합니다!'
          title='따끈 따끈 디자인 채용공고'
          more='/career'
        />
        <CategoryButtonWrap type='button' categories={portfolioCategories} />
        <CardContainer>
          {JobOfferDummy.slice(4).map(jobOffer => (
            <JobOfferCard key={jobOffer.id} {...jobOffer} />
          ))}
        </CardContainer>
      </SectionWrapper>
    </>
  );
}

export default MainPage;
