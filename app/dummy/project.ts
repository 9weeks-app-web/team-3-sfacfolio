export interface MemberRecruit {
  position: string;
  status: string | number;
}

export interface ProjectType {
  period: number;
  title: string;
  imgUrl: string;
  memberRecruit: MemberRecruit[];
  workingMethod: '온라인' | '오프라인';
}

export const projectDummy: ProjectType[] = [
  {
    title:
      '콘텐츠 기반 공연예술 큐레이션 플랫폼 제작에 함께 하실 분을 찾고 있습니다.',
    workingMethod: '오프라인',
    imgUrl:
      'https://s3-alpha-sig.figma.com/img/d713/0dae/8832502f449da9b8943bed8e78291cf1?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OMU6z5h7QvMmt9l5-CqnlDu9-3LzULsIUHJHegy41es4Q0oG4ROJ~DffJ8vDyLVRAZOkC0aE9EGG24lWbUWFanSKG8Sb1g8plF5uQOwS8j6h8BfD3vybBBND9R8Ko1R4KriB0NWEJF1P9KgIL5l4JRrOK3neu2MX9Kh3ID-VJAq1pf4VH228bP-PUVkIq6hFjt-jeTD6XbcTLYFLaXuyVGnQDr4Nu5XfdQzkSvNoy4ZkyuYgX~LByaLjkxOXm6db4V6r5~siu4wiKSo1c72-wu~zgKR9mO03lN1xvN~lXVQqxO-8usTpkBZhvJxwNOFu4Sst~uLVAJjcd~0XKYsQUQ__',
    period: 5,
    memberRecruit: [
      { position: '프론트엔드', status: '마감' },
      { position: 'UI/UX 디자인', status: '마감' },
      { position: '3D 디자인', status: 1 },
    ],
  },
  {
    title:
      '관심분야 놀거리 테마 추천 플랫폼으로 좋아하는 축제,전시,팝업 등 놓치지 마세요!',
    workingMethod: '온라인',
    imgUrl:
      'https://s3-alpha-sig.figma.com/img/4f9b/707b/c66bcbdd473c961f8349702bca329355?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Eu3acktviOh1QfPIYL9vHECYCSE0p1o5M8AMZEtIJHCgj4-XEAiXUsEESt34UnjMHn0s83GPh5MPKDMIUHE~aWEaq0dIl-cAKbkTvs945qTG1zedW4kJDcD3QLqR~NVqx5gn4Bo2R27p3-LqCbuqMUUggXVeNonQn3-4PENlam-3-fG4mRYzZGxA5IJVQFvmzR1X1AQm-AoYyckSly2rjvdG4C2aQ-cxcA6avGCB84d4gQdBBS-FTpr0c-EQLcVMqSrwGhjRf3aDskCJLgSn2s1GdvlsfQ5sHT5szoN8zgs6IG99F-ExufBHGQBqkeSYKs8qh6KoEZlrWeVitSlFAg__',
    period: 4,
    memberRecruit: [
      { position: '게임클라이언트', status: 1 },
      { position: '그래픽 디자인', status: 1 },
      { position: '프로젝트 매니저', status: '마감' },
    ],
  },
  {
    title:
      '귀여운 플래시 게임제작하실분 모집합니다! 함께 만들며 귀여워져 봐요!',
    workingMethod: '온라인',
    imgUrl:
      'https://s3-alpha-sig.figma.com/img/ece8/2435/8151932732f3827f5eb7bcafe029a1b6?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G7tM353AvjlLbxK56R23PdEVNZN727C42ZAYnrRHz2P9b-Z585Pf-B7Sro0h1mPD8LGizwU0DQJaeOZcKufkj6YqLafhU6AM~mVrvTHvBrK6umycx2jrolFRjzJixGKwSLKPxXVWsrfTpjrqjlBiNeMarms3i4yI0tJUxhDy0N~Eapx9RAuOzooR16maj8tXONMnPWb4DmdPCn4tR-GLXAKIe6anZPmBXM7PLqVEJid5QanPkMTS9Jq34nINnJV18F-8vULAxFXxFTSsdok5wmOJ1WIMH7wHbbEWyi1vzNAHxuo09RfIFURqJAVuDz5d7Ce1j3t7cL-UhR4V8LE-2Q__',
    period: 6,
    memberRecruit: [{ position: '프론트엔드', status: 1 }],
  },
  {
    title: '영화 커뮤니티 서비스 제작합니다. 영화 좋아하시는 분들 환영!',
    workingMethod: '온라인',
    imgUrl:
      'https://s3-alpha-sig.figma.com/img/e6e0/088e/806c4c2d2194b78525a4463aa09af9d4?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MrdorhqFBwJlwzbDxNxelcjzhjohtUgGHQmLxGVcdUrOFFeIqL8TgoTjouV5OdHVrj5Zc8OvKgYSVatMRnb8a-x4nEyN6XKT4cg87PaJnYPByD4CyE~hPG8uyoEsuU~7zhUbAjcc2lGUukyDSe0BV62IMYxQCwYIeECEEt~iv~0552~HmEa2pL3azTs3srg54xL8lnSpmZTT8hQdO7g4h3kLOuGI2jYukmuaNulyKYZWIR4MV4m3vJkmAp4FlgpwY2U7lEOm0qERseiYoUU7LzZ8mvjE7e~ZGl4bkihZsLjvPljmuPSrWDUMh9ZkZlK0kBdrNzPq7pstA8LDMNfCPw__',
    period: 4,
    memberRecruit: [
      { position: 'AI', status: '마감' },
      { position: 'UI/UX 디자인', status: '2' },
    ],
  },
  {
    title: '채팅 플랫폼 고도화 서비스 제작에 함께하실 분 모집합니다~',
    workingMethod: '오프라인',
    imgUrl:
      'https://s3-alpha-sig.figma.com/img/a08f/7fa1/5ce7258fb19401c636aa0fe0dc47a64c?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dJTiT66pM~p-aLONAxMQtM9hGaNA5CJx0fvn7VSUKoO3gGaT4VQiNJFrUXIbcv5PYTLuZHfThfyy~~ubhE7mqDANwhcO2e7OoxRTolfzmVOJLcZKG-VBJ53afgo5DbomZAgnkwic~ouNAfrQqo7auRmZl6f5L8hs99Bi6lTlnqitlbimA7BnYjgEy-69llgHR645hCnjdrlpFg3iBAV5yY0h3GSRBCpwqK5jsfF8SZZOtlEjelqgzJPOHwQVagDzQLJh~rm9ySALqPr626O94ri~wMpKyodQg8GAgkR8B56-PYOKQDmjy9MTk4e-EeOHJKx0YU6JNB5EETxD1~3TXA__',
    period: 4,
    memberRecruit: [
      { position: '프로덕트 매니저/오너', status: '1' },
      { position: 'IOS', status: '마감' },
    ],
  },
  {
    title: '동물의숲 좋아하는 개발자를 찾고 있어요...',
    workingMethod: '온라인',
    imgUrl:
      'https://s3-alpha-sig.figma.com/img/9b7d/2732/bad2f4ee6491ba648c07d8fc5b6a6a1d?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Lhqe~OsXwSmLUHM5Ypziz9qKhkgfeltyTkEBiFFh3--QdL-~IUrLXzHWDfiYHmnJJMCaaZsXersnO21v19vaNQXx6P-~mzny1qiq1PwqkM3ldiPaBC4~fGsJZeVTwuqQNNBUSI9Y1ux7liwb2fAGLa7FnhV7d0zM39qi4M1QuzwdjRTWtjG0y2Ut7iKRRhSI43zKPE7xzQZVou7cm7SzjdP9QMMf7pW677yzjoZIgL5ZfzGQjzRzlWuswvrJX3s1ydG3Q72IC9ncaQ1HoaLBzoRrR0N57TxQwC719cWA0UEn5BihWbT2IW3SHLrrAV2aYoP7jXnCd6XaLUcHJHWLJQ__',
    period: 4,
    memberRecruit: [{ position: '프롬프트 엔지니어', status: '1' }],
  },
  {
    title: '[개발자 모집] 비트코인 예측 서비스FLOWBIT',
    workingMethod: '온라인',
    imgUrl:
      'https://s3-alpha-sig.figma.com/img/d627/a9c9/6a5f610bcbf5d5b49ebc0a21cdd2a82d?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qObs97TuBtqQd2HQto9Gw5LVGueGXVEltJ6U-zGbrmq1sSCjwSbZjvxBSyPdS8fVKkwPTd6ett3wg~hJ0jf0-FFoQfuxIipElfefxERjQElIq1R-Zcpyo1RySDuKHQSvQF3Qab~eF1jqSi1pOnVTSj95NJ-dKF6-ftiprZStgdLPsHz7xOH7gcSDYTYNn-jsrHt8CZ~pkM-0wRVCAfvdDhnFtmDlabzkJwJek59iOv-DVEPwssc87piKC9f03DkfVEf0VsgTBgiiPr-fUShmZIO2mWvvJSVrwzOLTJs1uEJR-ltUZCaJN7Fl-InZ8DXaj3QB4h0z3RveBUN9usi-fg__',
    period: 6,
    memberRecruit: [
      { position: 'DB/빅데이터/DS', status: '1' },
      { position: '웹퍼블리셔', status: '2' },
    ],
  },
  {
    title: '[애프터] PM을 모집합니다.',
    workingMethod: '오프라인',
    imgUrl:
      'https://s3-alpha-sig.figma.com/img/6a0f/f6ac/dd4bd3ad1fcf626d6c78e2f50a4b9ec5?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BfQ8t3Ysz0ngkuOAcExAN9OqpyQdAZmTgRbrlGu5Sl6zItuYPZX-cXsufGGBIkzy4N7HtBEnU6Gy61Noa3anMUp-2dqflgPLh07Hrvfr-NsQ-zDXJF1~GPrNvFJGDi9C4dSAXp-yY1d6JIeW6qEzY6EBnsm0drnxZGLo5extxnCWSABzCYeHj~3OiQaPxpX586PR4O-~Uz~bB8q6H240SDleSzxGxFXkl5VwLP11F7xzMycSuhXRpWpm4c9ah~KFebLDYqdbunpZ0yp3flIxJXH~Naa6mZjwPincJWjGEllA-Wgwk1YAxIp33YeNXKxv-NM8ogo0C4ot0JPy57VxCQ__',
    period: 3,
    memberRecruit: [{ position: 'PM', status: '1' }],
  },
  {
    title: '병원 기록을 관리할 수 있는 서비스를 만들고자 해요',
    workingMethod: '오프라인',
    imgUrl:
      'https://s3-alpha-sig.figma.com/img/6685/6acb/8ab4ce99899b02287d0242490d37b6f9?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DBJetM82FuYJluB8J2GwnToDW5p2z5z~nAEiyofb5LV06iyjJH5EFwsttpkpDAqIkNwTMAar3Q0MYtwyvE4iMS70Wev7nr2GMwjS9btm-6z0vQ3HRnbrxJiQuh~AWyMfj-KwSmUE9Lko2ni1wzREbi0oZiTq~pySTxRH2T8mUAYtLD9pqEiE~va2T7Hcz4T-DFKvWFWj7BIyFgPjb9h5YD5PcVDPFxz0t~NvkeORCZUPbsu~lW9Dxa-SgWHO8LmsE9So5KX~un5jJECzpBQ28w-ZOK8wKafVbgEPEHt5rzhQG1aZ9iU1lNZjQjOSdo~GmcJVtmbuzJDGJPFBheKFEg__',
    period: 4,
    memberRecruit: [
      { position: 'IOS', status: '1' },
      { position: 'UI/UX 디자인', status: '1' },
    ],
  },
];
