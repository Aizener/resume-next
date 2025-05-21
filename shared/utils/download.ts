export const downloadFile = (title: string, url: string) => {
  const a = document.createElement('a');
  a.href = url;
  document.body.appendChild(a);
  a.target = '_blank';
  a.click();
  document.body.removeChild(a);
}