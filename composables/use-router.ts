export const toResumeCreatePage = (item: Template) => {
  const router = useRouter();
  router.push({
    path: '/resume/create',
    query: {
      id: item.id,
      path: item.path,
    }
  });
}

export const toHomePage = () => {
  const router = useRouter();
  router.push('/');
}