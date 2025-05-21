export default defineNuxtRouteMiddleware(() => {
  const deviceType = useState('deviceType');
  if (!deviceType.value) {
    const userAgent = useRequestHeaders()['user-agent'];
    const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(userAgent);
  
    // 创建或更新全局状态
    deviceType.value = isMobile ? 'mobile' : 'web';
  }
});