export default defineNuxtRouteMiddleware((to) => {
  const websiteStore = useWebsiteStore();
  if (to.path === '/logreg' && websiteStore.token) {
    return navigateTo('/');
  }
  return true;
});