export default function calculateDaysBeforeDeadline(deadline: string) {
  const today = new Date();
  const deadlineDate = new Date(deadline);

  const timeDiff = deadlineDate.getTime() - today.getTime();
  const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

  return '마감 ' + daysLeft + '일 전';
}
