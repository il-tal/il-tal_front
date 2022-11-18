import { format, formatDistanceToNow } from "date-fns";
import { ko } from "date-fns/locale";
/**
 *  @param {Date} date  날짜 Date 값으로 입력
 *  @return {string}  현재 날짜와 입력된 날짜간의 차이를 반환
 *  calcDate("2022-10-04")
 */
export const calcDate = (date) => {
  const writeDate = new Date(date);
  const now = Date.now();
  const diffDate = (now - writeDate.getTime()) / 1000;
  if (diffDate < 60 * 1) {
    return "방금 전";
  }
  if (diffDate < 60 * 60 * 24 * 3) {
    return formatDistanceToNow(writeDate, { addSuffix: true, locale: ko });
  }
  return format(writeDate, "PPP", { locale: ko });
};

/**
 * @param { Date } date 날짜값 입력
 * @return { Date } 날짜를 입력받으면 한국 표기로 출력
 */
export const korDate = (date) => {
  const localeDate = new Date(date);
  return format(localeDate, "PPP", { locale: ko });
};
