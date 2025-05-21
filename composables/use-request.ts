// type HttpResponse<T> = {
//   statusCode: number;
//   message: string;
//   data: T
// }
import { useWebsiteStore } from "~/stores/website";

type RequestMethod = "GET" | "HEAD" | "PATCH" | "POST" | "PUT" | "DELETE";

const useRequest = <T>(
  api: string,
  method: RequestMethod = "GET",
  params?: Record<string, number | string>,
  body?: Record<string, number | string>,
) => {
  return new Promise<T>((resolve) => {
    const runtimeConfig = useRuntimeConfig();
    const websiteStore = useWebsiteStore();
    $fetch(api, {
      baseURL: runtimeConfig.public.baseURL, 
      method,
      params,
      body,
      onRequestError(err) {
        console.log('err', err);
      },
      onRequest(req) {
        console.log('webstore', websiteStore, websiteStore.token);
        req.options.headers.set('Authorization', `Bearer ${websiteStore.token}`);
      },
      onResponse(result) {
        const res = result.response._data;
        const route = useRoute();
        const router = useRouter();
        const toast = useToast();
        if (res.statusCode === 200 || res.statusCode === 201) {
          return resolve(res.data);
        } else if (res.statusCode === 401) {
          if (import.meta.client) {
            websiteStore.saveToken('');
            websiteStore.saveUser(null);
            toast.add({ title: '身份信息验证失败', description: '你的身份信息或已过期，请重新登入！', color: 'error' });
            router.replace({
              path: `/logreg`,
              query: {
                ...route.query,
                redirect: route.path
              }
            });
          }
        } else {
          const message = typeof res.message === 'string' ? res.message : '操作失败！';
          toast.add({ title: '警告', description: message, color: 'warning' });
        }
        resolve(res.data);
      }
    });
  });
};

export const useRequestGet = <T>(api: string, params?: Record<string, number | string>) => useRequest<T>(api, 'GET', params, undefined);
export const useRequestPost = <T>(api: string, body?: Record<string, number | string>) => useRequest<T>(api, 'POST', undefined, body);
export const useRequestPut = <T>(api: string, body?: Record<string, number | string>) => useRequest<T>(api, 'PUT', undefined, body);
export const useRequestDelete = <T>(api: string, body?: Record<string, number | string>) => useRequest<T>(api, 'DELETE', undefined, body);

export const useRequestData = async <T>(key: string, {
  api,
  method = "GET",
  params = undefined,
  body = undefined
}: {
  api: string,
  method?: RequestMethod,
  params?: Record<string, number | string>,
  body?: Record<string, number | string>,
}) => {
  const runtimeConfig = useRuntimeConfig();
  const websiteStore = useWebsiteStore();
  const { data: result, error } = await useAsyncData<{
    statusCode: number,
    data: T,
    message: string
  }>(key, () => {
    return $fetch(api, {
      baseURL: runtimeConfig.public.baseURL, 
      method,
      params,
      body,
      onRequest(req) {
        req.options.headers.set('Authorization', `Bearer ${websiteStore.token}`);
      },
    });
  });
  const res = result.value;
  const route = useRoute();
  const router = useRouter();
  const toast = useToast();
  if (error.value) {
    return;
  }
  if (!res) {
    return;
  }
  if (res.statusCode === 200 || res.statusCode === 201) {
    return res.data;
  } else if (res.statusCode === 401) {
    if (import.meta.client) {
      websiteStore.saveToken('');
      websiteStore.saveUser(null);
      toast.add({ title: '身份信息验证失败', description: '你的身份信息或已过期，请重新登入！', color: 'error' });
      router.replace({
        path: `/logreg`,
        query: {
          ...route.query,
          redirect: route.path
        }
      });
    }
  } else {
    const message = typeof res.message === 'string' ? res.message : '操作失败！';
    toast.add({ title: '警告', description: message, color: 'warning' });
  }
};