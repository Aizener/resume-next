export const CreateResume = () => {
  const api = (api: string) => `/resume/${api}`;
  return {
    Get: () => api('get'),
    List: () => api('list'),
    Create: () => api('create'),
    Update: () => api('update'),
    Generate: () => api('generate'),
    Delete: (id: string) => api(id),
  }
}

const CreateTemplate = () => {
  const api = (api: string) => `/template/${api}`;
  return {
    List: () => api('list'),
    New: () => api('new'),
    Recommend: () => api('recommend'),
    Types: () => api('types')
  }
}

const CreateDownload = () => {
  const api = (api: string) => `/download/${api}`;
  return {
    Save: () => api('save'),
    List: () => api('list'),
  }
}

const CreateGenerate = () => {
  const api = (api: string) => `/generate/${api}`;
  return {
    List: () => api('list')
  }
}

const CreateAuth = () => {
  const api = (api: string) => `/auth/${api}`;
  return {
    Register: () => api('logreg')
  }
}

const CreateQiniu = () => {
  const api = (api: string) => `/qiniu/${api}`;
  return {
    GetDownloadUrl: (key: string) => api(`download/${key}`)
  }
}

const CreateAi = () => {
  const api = (api: string) => `/ai/${api}`;
  return {
    GenerateContent: () => api(`generate`)
  }
}

export const Api = {
  Resume: CreateResume(),
  Template: CreateTemplate(),
  Download: CreateDownload(),
  Generate: CreateGenerate(),
  Auth: CreateAuth(),
  Qiniu: CreateQiniu(),
  Ai: CreateAi()
}

// export const Apis = {
//   // RESUME
//   GET_RESUME: '/resume/get',
//   GET_RESUME_LIST: '/resume/list',
//   CREATE_RESUME: '/resume/create',
//   UPDATE_RESUME: '/resume/update',
//   GENERATE_RESUME: '/resume/generate',
//   DELETE_RESUME: (id: string) => `/resume/${id}`,
//   // Template
//   Template: {
//     Base: '/template',
//     List: () => `${Base}/list`,
//   },
//   // DOWNLOAD
//   Download: {
//     Save: `${DOWNLOAD}/save`,
//     List: `${DOWNLOAD}/list`
//   },
//   // Generate
//   Generate: {
//     List: `${GENERATE}/list`,
//   },
//   // AUTH
//   REGISTER: `${AUTH}/logreg`,
//   // Qiniu
//   GET_DOWNLOAD_URL: (key: string) => `/qiniu/download/${key}`
// };