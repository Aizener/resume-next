
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  username: 'username',
  password: 'password',
  email: 'email',
  mobile: 'mobile',
  status: 'status',
  createdTime: 'createdTime',
  updatedTime: 'updatedTime'
};

exports.Prisma.RoleScalarFieldEnum = {
  id: 'id',
  name: 'name',
  title: 'title',
  createdTime: 'createdTime',
  updatedTime: 'updatedTime'
};

exports.Prisma.SignScalarFieldEnum = {
  id: 'id',
  date: 'date',
  userId: 'userId',
  createdTime: 'createdTime',
  updatedTime: 'updatedTime'
};

exports.Prisma.AIGeneratorScalarFieldEnum = {
  id: 'id',
  desc: 'desc',
  date: 'date',
  times: 'times',
  userId: 'userId',
  createdTime: 'createdTime',
  updatedTime: 'updatedTime'
};

exports.Prisma.AIGenerateContentScalarFieldEnum = {
  id: 'id',
  gid: 'gid',
  model: 'model',
  promptTokens: 'promptTokens',
  completionTokens: 'completionTokens',
  object: 'object',
  userMessage: 'userMessage',
  aiGeneratorId: 'aiGeneratorId',
  createdTime: 'createdTime',
  updatedTime: 'updatedTime'
};

exports.Prisma.ProfileScalarFieldEnum = {
  id: 'id',
  score: 'score',
  grade: 'grade',
  userID: 'userID',
  createdTime: 'createdTime',
  updatedTime: 'updatedTime'
};

exports.Prisma.InviteScalarFieldEnum = {
  id: 'id',
  inviterId: 'inviterId',
  inviteeId: 'inviteeId',
  createdTime: 'createdTime',
  updatedTime: 'updatedTime'
};

exports.Prisma.ResumeScalarFieldEnum = {
  id: 'id',
  title: 'title',
  realname: 'realname',
  age: 'age',
  education: 'education',
  address: 'address',
  mobile: 'mobile',
  email: 'email',
  avatar: 'avatar',
  status: 'status',
  industry: 'industry',
  userId: 'userId',
  templateId: 'templateId',
  createdTime: 'createdTime',
  updatedTime: 'updatedTime'
};

exports.Prisma.WorksScalarFieldEnum = {
  id: 'id',
  content: 'content',
  resumeId: 'resumeId',
  createdTime: 'createdTime',
  updatedTime: 'updatedTime'
};

exports.Prisma.ProjectsScalarFieldEnum = {
  id: 'id',
  content: 'content',
  resumeId: 'resumeId',
  createdTime: 'createdTime',
  updatedTime: 'updatedTime'
};

exports.Prisma.TemplateScalarFieldEnum = {
  id: 'id',
  title: 'title',
  path: 'path',
  type: 'type',
  createdTime: 'createdTime',
  updatedTime: 'updatedTime'
};

exports.Prisma.DownloadScalarFieldEnum = {
  id: 'id',
  title: 'title',
  url: 'url',
  createdTime: 'createdTime',
  updatedTime: 'updatedTime'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  User: 'User',
  Role: 'Role',
  Sign: 'Sign',
  AIGenerator: 'AIGenerator',
  AIGenerateContent: 'AIGenerateContent',
  Profile: 'Profile',
  Invite: 'Invite',
  Resume: 'Resume',
  Works: 'Works',
  Projects: 'Projects',
  Template: 'Template',
  Download: 'Download'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
