function setTime() {
  const date = new Date();

  // 年月日
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  // 时分秒
  const hourNum = date.getHours();
  const hour = date.getHours().toString().padStart(2, '0');
  const minute = date.getMinutes().toString().padStart(2, '0');
  const second = date.getSeconds().toString().padStart(2, '0');

  // 星期
  const weeks = new Array(
    '星期日',
    '星期一',
    '星期二',
    '星期三',
    '星期四',
    '星期五',
    '星期六'
  );
  const weekday = date.getDay();
  const week = weeks[weekday];

  // 问候语
  let greetingText = '';
  if ((hourNum >= 6) & (hourNum < 12)) {
    greetingText = '早上好！';
  } else if ((hourNum >= 12) & (hourNum < 14)) {
    greetingText = '中午好！';
  } else if ((hourNum >= 14) & (hourNum < 18)) {
    greetingText = '下午好！';
  } else if ((hourNum >= 18) & (hourNum < 22)) {
    greetingText = '晚上好！';
  } else if (
    ((hourNum >= 22) & (hourNum <= 24)) |
    ((hourNum >= 0) & (hourNum < 6))
  ) {
    greetingText = '夜深了~';
  }

  // 实时显示
  const dateElement = document.getElementById('time');
  const greetingElement = document.getElementById('greeting');
  dateElement.innerText = `${year}年${month}月${day}日 ${week} ${hour}:${minute}:${second}`;
  greetingElement.innerText = greetingText;
}

setInterval(setTime, 50);
