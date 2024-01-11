import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Setting from '@images/Setting.svg';

interface Alarm {
  id: string;
  name: string;
  image: string;
  type: 'like' | 'comment';
  comment?: string;
  portfolio: string;
  portfolioImage: string;
  timestamp: number;
}

interface AlarmDropDownPropsType {
  setIsAlarmOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const alarmLists = ['알림', '제안'];

const alarms: Alarm[] = [
  {
    id: '1',
    name: '채순',
    image:
      'https://s3-alpha-sig.figma.com/img/9d1a/2ca9/f33dbd616650cadf3695e9921c16fd63?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fzsFMHVTO4YX4IAxKGlxec56ZRf5QKpVVm0pbEEr8EI4FGXca~HHbvy4weyLaOqstCcsKz~VL8~gocSfGMKBobD3jZZDZOIl~heqmKod-LosOgq-lGrvP4TmAwp9uHN93jDLM1GY7KaVG1P~OJUyjmAKf67~5VM-CyMZtu6Vbv5WSXeTH2DEqguxLaPd8cCQuwDYzBI1wjidBwiB0lTlQnRBfMSZ~Gya-V4m58bGqS2gXHi1kD9stQ7BE96lUTZFpLWErLgnIrkdWD606qtxK955vHC9DBAppg4Wt~Ud4L62VrG1r~Onw0l9kac7EfstrZgzeAV37AM3t09GMQMs6g__',
    type: 'like',
    portfolio: '교육 앱 디자인',
    portfolioImage:
      'https://s3-alpha-sig.figma.com/img/b3a4/1c1f/0e10ae3a876c5c0f809f61f75db78296?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I2FkKx4ruWehEKld~fgZLvKCER6dDj7gAWQhla7VVh87A80Ez5WWBfiXp8FOvwQkf4eOLTFdmpX6hqD~0JW6wu5~mJS-7UObRB7Ch-iZo-cpXks4fn0fxoYYVIj7n1lLOs7M6FfR04-XsWLOA16-UQm5N4FqxTE1trg0hULjAF1JeJvevmY95aKtCv~OZM8Uy-QmuVOU8O3v4D5NKSTwM~mFdqKA2ehBgrmU6lck8ZmxDdtzS9tVPU2oxREdVjQoyQ7mxFTP0neSXgC-Z30mWFilqNIN2WVvCRXC-dlW3ARJqcmfgChuqEtbXQpvcp-iLz1s64Hyc6aw0JmK9a5axA__',
    timestamp: 3,
  },
  {
    id: '2',
    name: '동동바라',
    image:
      'https://s3-alpha-sig.figma.com/img/7198/3718/c7763623d7cfa9714af3c443f9abdf19?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Gkzx213i-6Qnek2qyjoLe78O~0P4-MBdDZxieuwXm50ohaAzidT933N6-l3wlLTQVfpROYLepw91yKAN0beIhlbB9w-3BZB2nT9jAHJi3YeLuYiWnRb1dZnNf~Qvk6kmCQLxfEjWdwD7LRt9EEUnJQP7y3G9kmdN08PkaOxHsrswo8Pz5s6ewLOE5R1QX7iTCZBO3fCcmybdcmKOyECW7TsZhEBTbt0QQvDp~AxOmAw~ZntyiMmYiznbtA~EzLWlGMGooi4Hl8USw4xnSFQEqzWVWHKYDHNjZWnBkZh7afPEleXFpFcDXpnucEKODz5ktTUWUFMk8UHSmaApRSnSXw__',
    type: 'like',
    portfolio: '교육 앱 디자인',
    portfolioImage:
      'https://s3-alpha-sig.figma.com/img/b3a4/1c1f/0e10ae3a876c5c0f809f61f75db78296?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I2FkKx4ruWehEKld~fgZLvKCER6dDj7gAWQhla7VVh87A80Ez5WWBfiXp8FOvwQkf4eOLTFdmpX6hqD~0JW6wu5~mJS-7UObRB7Ch-iZo-cpXks4fn0fxoYYVIj7n1lLOs7M6FfR04-XsWLOA16-UQm5N4FqxTE1trg0hULjAF1JeJvevmY95aKtCv~OZM8Uy-QmuVOU8O3v4D5NKSTwM~mFdqKA2ehBgrmU6lck8ZmxDdtzS9tVPU2oxREdVjQoyQ7mxFTP0neSXgC-Z30mWFilqNIN2WVvCRXC-dlW3ARJqcmfgChuqEtbXQpvcp-iLz1s64Hyc6aw0JmK9a5axA__',
    timestamp: 5,
  },
  {
    id: '3',
    name: 'Dain Kim',
    image:
      'https://s3-alpha-sig.figma.com/img/809c/204d/c17274f75ab0a69190d548fbdc707649?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aKSxHeULY1F5OrX5m34XyymchtSN2coXg7r9C2VpAqBupex58Sm-yIF4zRK0DQ-lzu3rORqxdwAo0qZwAB~fwTaSaeg~LD~-D1ew85GHO8ztL2YZewP4c0JvKtrWRNVIxXzl18rw2crKfSekBYN3LL0BvAtiDq7N6qG63swoeBPJ51qSkoPbLVK72PRWaNZMoywRnWVbUZPI4Ec3yI5qH2orsxALTL7~NhFiBjkF6CIhUeygEifPbqz9qri8r0T6ZnrnjzdwhF5qhIEnYrZNk~0AJ1qREj0SaS68gCViD4WAaiY-GLrjXEWtJdpOkeN8vRU2amEwvVUhsUHt5ulEug__',
    type: 'comment',
    comment: '오 잘 만드셨는데여 굿굿 나이스',
    portfolio: '교육 앱 디자인',
    portfolioImage:
      'https://s3-alpha-sig.figma.com/img/b3a4/1c1f/0e10ae3a876c5c0f809f61f75db78296?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I2FkKx4ruWehEKld~fgZLvKCER6dDj7gAWQhla7VVh87A80Ez5WWBfiXp8FOvwQkf4eOLTFdmpX6hqD~0JW6wu5~mJS-7UObRB7Ch-iZo-cpXks4fn0fxoYYVIj7n1lLOs7M6FfR04-XsWLOA16-UQm5N4FqxTE1trg0hULjAF1JeJvevmY95aKtCv~OZM8Uy-QmuVOU8O3v4D5NKSTwM~mFdqKA2ehBgrmU6lck8ZmxDdtzS9tVPU2oxREdVjQoyQ7mxFTP0neSXgC-Z30mWFilqNIN2WVvCRXC-dlW3ARJqcmfgChuqEtbXQpvcp-iLz1s64Hyc6aw0JmK9a5axA__',
    timestamp: 7,
  },
  {
    id: '4',
    name: 'Yerim Kim',
    image:
      'https://s3-alpha-sig.figma.com/img/e048/c694/3e1bc2387d45e7d1454f27bf72012208?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cNJqxKEgUp5sjY6ncooCPTlSQcZsHoJgMyAoAqz5NstkC6KyityPuP-mNTrI3BshBySuqW3Ikmtv8HyEYw1QYVxP286oPLVm-NpzPu~uauA6JQSOFYMlo5aZ6dXUH1PC3oR64iIvbPaNbpEHAHUnTrwJjjT1G3cnQum04iVoNfCF0tbUR9Gtc1LQoH8jYuI2j2o1wIsaovyg2xEZLSeS1dH9pAwTQZaB15h95bCDkg3FtXtYn7O7atLerU1NUcY0AeG-9K2bf63l33v8mbqMeLqjJRtulwD3~uY3JrAKTwezlIVb~b1hJrD6ZZ-izmizofIqnH9PSy7jRg9BIJ4~3Q__',
    type: 'like',
    portfolio: '교육 앱 디자인',
    portfolioImage:
      'https://s3-alpha-sig.figma.com/img/b3a4/1c1f/0e10ae3a876c5c0f809f61f75db78296?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I2FkKx4ruWehEKld~fgZLvKCER6dDj7gAWQhla7VVh87A80Ez5WWBfiXp8FOvwQkf4eOLTFdmpX6hqD~0JW6wu5~mJS-7UObRB7Ch-iZo-cpXks4fn0fxoYYVIj7n1lLOs7M6FfR04-XsWLOA16-UQm5N4FqxTE1trg0hULjAF1JeJvevmY95aKtCv~OZM8Uy-QmuVOU8O3v4D5NKSTwM~mFdqKA2ehBgrmU6lck8ZmxDdtzS9tVPU2oxREdVjQoyQ7mxFTP0neSXgC-Z30mWFilqNIN2WVvCRXC-dlW3ARJqcmfgChuqEtbXQpvcp-iLz1s64Hyc6aw0JmK9a5axA__',
    timestamp: 10,
  },
];

function AlarmDropDown({ setIsAlarmOpen }: AlarmDropDownPropsType) {
  const [selectedList, setSelectedList] = useState(alarmLists[0]);
  return (
    <div className='z-[300] cursor-default absolute top-[57px] right-[-5px]'>
      <div className='relative w-[423px] max-h-[523px] rounded-lg shadow-[0px_0px_3px_0px_rgba(0,0,0,0.25)] bg-white overflow-hidden'>
        <div className='flex justify-between items-center pl-[14px] pr-[21px] py-[18px] border-b'>
          <div className='flex gap-[3px] text-label2 font-bold leading-[22px]'>
            <span>읽지 않은 알림</span>
            <span>4</span>
          </div>
          <div className='cursor-pointer'>
            <Image src={Setting} alt='settings' />
          </div>
        </div>
        <ul className='grid grid-cols-2'>
          {alarmLists.map(list => (
            <li
              key={list}
              className={`${
                selectedList === list
                  ? 'text-primary-heavy border-primary-heavy'
                  : 'text-text-alternative'
              } cursor-pointer text-center py-3 text-label1 font-bold  border-b-2`}
              onClick={() => setSelectedList(list)}
            >
              {list}
            </li>
          ))}
        </ul>
        <div className='overflow-auto max-h-[420px]'>
          {selectedList === alarmLists[0] ? (
            <ul>
              {alarms.map(alarm => (
                <li
                  key={alarm.id}
                  className='cursor-pointer px-4 py-2 border-b hover:bg-background-primary'
                  onClick={() => setIsAlarmOpen(false)}
                >
                  <Link href={`/portfolio/${alarm.id}`}>
                    <div className='flex gap-3 pl-2'>
                      <div className='relative w-8 h-8 rounded-full overflow-hidden'>
                        <Image
                          src={alarm.image}
                          alt='avatar'
                          fill
                          objectFit='cover'
                        />
                      </div>
                      <div className='flex flex-col gap-4'>
                        <span className='text-label3 font-medium text-text-normal'>
                          {alarm.type === 'like'
                            ? `${alarm.name}님이 내 작업을 좋아합니다.`
                            : `${alarm.name}님이 내 작업에 댓글을 남겼습니다.`}
                        </span>
                        <div className='flex gap-[6px]'>
                          <div className='relative w-[45px] h-[45px] border rounded-lg overflow-hidden'>
                            <Image
                              src={alarm.portfolioImage}
                              alt='portfolio'
                              fill
                              objectFit='cover'
                            />
                          </div>
                          <span className='text-xs font-normal text-text-normal'>
                            {alarm.portfolio}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className='flex justify-end'>
                      <span className='text-xs font-normal leading-5 text-text-disable '>
                        {alarm.timestamp}분 전
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <div className='text-center py-10 text-label1 font-medium text-text-alternative'>
              아직 제안이 없습니다.
            </div>
          )}
        </div>
      </div>
      <div className='absolute -top-[4px] left-[200px] w-0 h-0 border-[10px] border-white border-l-transparentshadow-md rotate-45 shadow-[0px_0px_3px_0px_rgba(0,0,0,0.25)]'></div>
      <div className='absolute top-0 left-[195px] w-0 h-0 border-[15px] border-white border-l-transparentshadow-md'></div>
    </div>
  );
}

export default AlarmDropDown;
