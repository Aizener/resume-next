interface QueryData<T> {
  data: T,
  total: number
}

interface RouteLink {
  title: string;
  path: string;
}

interface ListRecord {
  name: string;
  job: string,
  beginTime: string;
  endTime: string;
  content: string;
  contentHtml: string;
  order: number;
}

interface User {
  avatar: string;
  createdAt: string;
  email: string;
  id: string;
  intro: string;
  recordEnNumber: number;
  roleId: string;
  updatedAt: string;
  username: string;
}

interface Resume {
  id: string;
  address: string;
  age: string;
  avatar: string;
  createdTime: string;
  education: string;
  email: string;
  industry: string;
  mobile: string;
  advantage: string;
  advantageHtml: string;
  projects: string;
  realname: string;
  status: string;
  title: string;
  works: string;
  other: string;
  template: Template;
}

interface Generate {
  id: string;
  date: string;
  times: string;
  resume: Resume;
  resumeId: string;
  user: User;
  userId: string;
}

interface GenerateDetail {
  id: string;
  title: string;
  url: string;
  status: string;
  createdTime: string;
}

// interface Download {}

interface DownloadRecord {
  id: string;
  title: string;
  url: string;
  createdTime: string;
}

interface Template {
  id: string;
  title: string;
  type: string;
  path: string;
  usedTimes: string;
}

interface TemplateType {
  type: string;
}