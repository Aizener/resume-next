export const formatDateToZHDate = (date: string) => {
  const time = new Date(date).getTime() + 1000 * 60 * 60 * 8;
  const d = new Date(time);
  const year = d.getFullYear();
  const month = (d.getMonth() + 1).toString().padStart(2, '0');
  const day = d.getDate().toString().padStart(2, '0');
  const hour = d.getHours().toString().padStart(2, '0');
  const minute = d.getMinutes().toString().padStart(2, '0');
  const second = d.getSeconds().toString().padStart(2, '0');

  return `${year}/${month}/${day} ${hour}:${minute}:${second}`;
};
