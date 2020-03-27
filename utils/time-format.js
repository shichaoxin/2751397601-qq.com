// 格式化时间函数
export const formatTimeChange = (value) => {
  const time = new Date(value);
  const year = time.getFullYear();
  const month = time.getMonth() + 1;
  const day = time.getDate();
  const hour = time.getHours();
  const mintues = time.getMinutes();
  const seconds = time.getSeconds();
  const mm = month < 10 ? '0' + month : month;
  const dd = day < 10 ? '0' + day : day;
  const hh = hour < 10 ? '0' + hour : hour;
  const min = mintues < 10 ? '0' + mintues : mintues;
  const sec = seconds < 10 ? '0' + seconds : seconds;
  return `${year}-${mm}-${dd} ${hh}:${min}:${sec}`;
}