import { Timestamp } from 'firebase/firestore';

export function calculateDaysBeforeDeadline(deadline: string) {
  const today = new Date();
  const deadlineDate = new Date(deadline);

  const timeDiff = deadlineDate.getTime() - today.getTime();
  const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

  return '마감 ' + daysLeft + '일 전';
}

export function timeAgo(inputDateStr: Timestamp | Date): string {
  // 현재 시간과 비교할 날짜를 Date 객체로 변환
  const inputDate =
    inputDateStr instanceof Timestamp ? inputDateStr.toDate() : inputDateStr;

  // inputDate가 Date 타입이 아니면 오류 처리
  if (!(inputDate instanceof Date) || isNaN(inputDate.getTime())) {
    throw new Error('inputDateStr must be a Date or a Firestore Timestamp');
  }

  const now = new Date();

  // 시간 차이 계산
  const diff = now.getTime() - inputDate.getTime();

  // 밀리초를 분, 시, 일 단위로 변환
  const minutes = Math.round(diff / 60000);
  const hours = Math.round(diff / 3600000);
  const days = Math.round(diff / (3600000 * 24));

  if (minutes < 60) {
    return `${minutes}분 전`;
  } else if (hours < 24) {
    return `${hours}시간 전`;
  } else if (days < 10) {
    return `${days}일 전`;
  } else {
    return inputDate.toLocaleDateString('ko-KR');
  }
}
