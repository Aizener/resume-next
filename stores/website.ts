export const useWebsiteStore = defineStore(
  'websiteStore',
  () => {
    const token = ref('');
    const user = ref<User | null>()
    const saveToken = (_token: string) => {
      token.value = _token;
    }
    const saveUser = (_user: User | null) => {
      user.value = _user;
    }

    return {
      user,
      token,
      saveUser,
      saveToken
    }
  },
  {
    persist: true
  }
)