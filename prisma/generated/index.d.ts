
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Role
 * 
 */
export type Role = $Result.DefaultSelection<Prisma.$RolePayload>
/**
 * Model Sign
 * 
 */
export type Sign = $Result.DefaultSelection<Prisma.$SignPayload>
/**
 * Model AIGenerator
 * 
 */
export type AIGenerator = $Result.DefaultSelection<Prisma.$AIGeneratorPayload>
/**
 * Model AIGenerateContent
 * 
 */
export type AIGenerateContent = $Result.DefaultSelection<Prisma.$AIGenerateContentPayload>
/**
 * Model Profile
 * 
 */
export type Profile = $Result.DefaultSelection<Prisma.$ProfilePayload>
/**
 * Model Invite
 * 
 */
export type Invite = $Result.DefaultSelection<Prisma.$InvitePayload>
/**
 * Model Resume
 * 
 */
export type Resume = $Result.DefaultSelection<Prisma.$ResumePayload>
/**
 * Model Works
 * 
 */
export type Works = $Result.DefaultSelection<Prisma.$WorksPayload>
/**
 * Model Projects
 * 
 */
export type Projects = $Result.DefaultSelection<Prisma.$ProjectsPayload>
/**
 * Model Template
 * 
 */
export type Template = $Result.DefaultSelection<Prisma.$TemplatePayload>
/**
 * Model Download
 * 
 */
export type Download = $Result.DefaultSelection<Prisma.$DownloadPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.role`: Exposes CRUD operations for the **Role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.RoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sign`: Exposes CRUD operations for the **Sign** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Signs
    * const signs = await prisma.sign.findMany()
    * ```
    */
  get sign(): Prisma.SignDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.aIGenerator`: Exposes CRUD operations for the **AIGenerator** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AIGenerators
    * const aIGenerators = await prisma.aIGenerator.findMany()
    * ```
    */
  get aIGenerator(): Prisma.AIGeneratorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.aIGenerateContent`: Exposes CRUD operations for the **AIGenerateContent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AIGenerateContents
    * const aIGenerateContents = await prisma.aIGenerateContent.findMany()
    * ```
    */
  get aIGenerateContent(): Prisma.AIGenerateContentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.profile`: Exposes CRUD operations for the **Profile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profiles
    * const profiles = await prisma.profile.findMany()
    * ```
    */
  get profile(): Prisma.ProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.invite`: Exposes CRUD operations for the **Invite** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Invites
    * const invites = await prisma.invite.findMany()
    * ```
    */
  get invite(): Prisma.InviteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.resume`: Exposes CRUD operations for the **Resume** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Resumes
    * const resumes = await prisma.resume.findMany()
    * ```
    */
  get resume(): Prisma.ResumeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.works`: Exposes CRUD operations for the **Works** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Works
    * const works = await prisma.works.findMany()
    * ```
    */
  get works(): Prisma.WorksDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.projects`: Exposes CRUD operations for the **Projects** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.projects.findMany()
    * ```
    */
  get projects(): Prisma.ProjectsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.template`: Exposes CRUD operations for the **Template** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Templates
    * const templates = await prisma.template.findMany()
    * ```
    */
  get template(): Prisma.TemplateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.download`: Exposes CRUD operations for the **Download** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Downloads
    * const downloads = await prisma.download.findMany()
    * ```
    */
  get download(): Prisma.DownloadDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
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

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "role" | "sign" | "aIGenerator" | "aIGenerateContent" | "profile" | "invite" | "resume" | "works" | "projects" | "template" | "download"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Role: {
        payload: Prisma.$RolePayload<ExtArgs>
        fields: Prisma.RoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findFirst: {
            args: Prisma.RoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findMany: {
            args: Prisma.RoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          create: {
            args: Prisma.RoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          createMany: {
            args: Prisma.RoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          delete: {
            args: Prisma.RoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          update: {
            args: Prisma.RoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          deleteMany: {
            args: Prisma.RoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          upsert: {
            args: Prisma.RoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRole>
          }
          groupBy: {
            args: Prisma.RoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoleCountArgs<ExtArgs>
            result: $Utils.Optional<RoleCountAggregateOutputType> | number
          }
        }
      }
      Sign: {
        payload: Prisma.$SignPayload<ExtArgs>
        fields: Prisma.SignFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SignFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SignFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignPayload>
          }
          findFirst: {
            args: Prisma.SignFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SignFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignPayload>
          }
          findMany: {
            args: Prisma.SignFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignPayload>[]
          }
          create: {
            args: Prisma.SignCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignPayload>
          }
          createMany: {
            args: Prisma.SignCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SignCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignPayload>[]
          }
          delete: {
            args: Prisma.SignDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignPayload>
          }
          update: {
            args: Prisma.SignUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignPayload>
          }
          deleteMany: {
            args: Prisma.SignDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SignUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SignUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignPayload>[]
          }
          upsert: {
            args: Prisma.SignUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SignPayload>
          }
          aggregate: {
            args: Prisma.SignAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSign>
          }
          groupBy: {
            args: Prisma.SignGroupByArgs<ExtArgs>
            result: $Utils.Optional<SignGroupByOutputType>[]
          }
          count: {
            args: Prisma.SignCountArgs<ExtArgs>
            result: $Utils.Optional<SignCountAggregateOutputType> | number
          }
        }
      }
      AIGenerator: {
        payload: Prisma.$AIGeneratorPayload<ExtArgs>
        fields: Prisma.AIGeneratorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AIGeneratorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIGeneratorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AIGeneratorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIGeneratorPayload>
          }
          findFirst: {
            args: Prisma.AIGeneratorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIGeneratorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AIGeneratorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIGeneratorPayload>
          }
          findMany: {
            args: Prisma.AIGeneratorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIGeneratorPayload>[]
          }
          create: {
            args: Prisma.AIGeneratorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIGeneratorPayload>
          }
          createMany: {
            args: Prisma.AIGeneratorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AIGeneratorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIGeneratorPayload>[]
          }
          delete: {
            args: Prisma.AIGeneratorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIGeneratorPayload>
          }
          update: {
            args: Prisma.AIGeneratorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIGeneratorPayload>
          }
          deleteMany: {
            args: Prisma.AIGeneratorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AIGeneratorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AIGeneratorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIGeneratorPayload>[]
          }
          upsert: {
            args: Prisma.AIGeneratorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIGeneratorPayload>
          }
          aggregate: {
            args: Prisma.AIGeneratorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAIGenerator>
          }
          groupBy: {
            args: Prisma.AIGeneratorGroupByArgs<ExtArgs>
            result: $Utils.Optional<AIGeneratorGroupByOutputType>[]
          }
          count: {
            args: Prisma.AIGeneratorCountArgs<ExtArgs>
            result: $Utils.Optional<AIGeneratorCountAggregateOutputType> | number
          }
        }
      }
      AIGenerateContent: {
        payload: Prisma.$AIGenerateContentPayload<ExtArgs>
        fields: Prisma.AIGenerateContentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AIGenerateContentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIGenerateContentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AIGenerateContentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIGenerateContentPayload>
          }
          findFirst: {
            args: Prisma.AIGenerateContentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIGenerateContentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AIGenerateContentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIGenerateContentPayload>
          }
          findMany: {
            args: Prisma.AIGenerateContentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIGenerateContentPayload>[]
          }
          create: {
            args: Prisma.AIGenerateContentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIGenerateContentPayload>
          }
          createMany: {
            args: Prisma.AIGenerateContentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AIGenerateContentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIGenerateContentPayload>[]
          }
          delete: {
            args: Prisma.AIGenerateContentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIGenerateContentPayload>
          }
          update: {
            args: Prisma.AIGenerateContentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIGenerateContentPayload>
          }
          deleteMany: {
            args: Prisma.AIGenerateContentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AIGenerateContentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AIGenerateContentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIGenerateContentPayload>[]
          }
          upsert: {
            args: Prisma.AIGenerateContentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIGenerateContentPayload>
          }
          aggregate: {
            args: Prisma.AIGenerateContentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAIGenerateContent>
          }
          groupBy: {
            args: Prisma.AIGenerateContentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AIGenerateContentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AIGenerateContentCountArgs<ExtArgs>
            result: $Utils.Optional<AIGenerateContentCountAggregateOutputType> | number
          }
        }
      }
      Profile: {
        payload: Prisma.$ProfilePayload<ExtArgs>
        fields: Prisma.ProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findFirst: {
            args: Prisma.ProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findMany: {
            args: Prisma.ProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          create: {
            args: Prisma.ProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          createMany: {
            args: Prisma.ProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          delete: {
            args: Prisma.ProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          update: {
            args: Prisma.ProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          deleteMany: {
            args: Prisma.ProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          upsert: {
            args: Prisma.ProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          aggregate: {
            args: Prisma.ProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfile>
          }
          groupBy: {
            args: Prisma.ProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfileCountArgs<ExtArgs>
            result: $Utils.Optional<ProfileCountAggregateOutputType> | number
          }
        }
      }
      Invite: {
        payload: Prisma.$InvitePayload<ExtArgs>
        fields: Prisma.InviteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InviteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InviteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitePayload>
          }
          findFirst: {
            args: Prisma.InviteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InviteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitePayload>
          }
          findMany: {
            args: Prisma.InviteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitePayload>[]
          }
          create: {
            args: Prisma.InviteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitePayload>
          }
          createMany: {
            args: Prisma.InviteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InviteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitePayload>[]
          }
          delete: {
            args: Prisma.InviteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitePayload>
          }
          update: {
            args: Prisma.InviteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitePayload>
          }
          deleteMany: {
            args: Prisma.InviteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InviteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InviteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitePayload>[]
          }
          upsert: {
            args: Prisma.InviteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InvitePayload>
          }
          aggregate: {
            args: Prisma.InviteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInvite>
          }
          groupBy: {
            args: Prisma.InviteGroupByArgs<ExtArgs>
            result: $Utils.Optional<InviteGroupByOutputType>[]
          }
          count: {
            args: Prisma.InviteCountArgs<ExtArgs>
            result: $Utils.Optional<InviteCountAggregateOutputType> | number
          }
        }
      }
      Resume: {
        payload: Prisma.$ResumePayload<ExtArgs>
        fields: Prisma.ResumeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResumeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResumeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>
          }
          findFirst: {
            args: Prisma.ResumeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResumeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>
          }
          findMany: {
            args: Prisma.ResumeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>[]
          }
          create: {
            args: Prisma.ResumeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>
          }
          createMany: {
            args: Prisma.ResumeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ResumeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>[]
          }
          delete: {
            args: Prisma.ResumeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>
          }
          update: {
            args: Prisma.ResumeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>
          }
          deleteMany: {
            args: Prisma.ResumeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ResumeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ResumeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>[]
          }
          upsert: {
            args: Prisma.ResumeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResumePayload>
          }
          aggregate: {
            args: Prisma.ResumeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateResume>
          }
          groupBy: {
            args: Prisma.ResumeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ResumeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ResumeCountArgs<ExtArgs>
            result: $Utils.Optional<ResumeCountAggregateOutputType> | number
          }
        }
      }
      Works: {
        payload: Prisma.$WorksPayload<ExtArgs>
        fields: Prisma.WorksFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorksFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorksPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorksFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorksPayload>
          }
          findFirst: {
            args: Prisma.WorksFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorksPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorksFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorksPayload>
          }
          findMany: {
            args: Prisma.WorksFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorksPayload>[]
          }
          create: {
            args: Prisma.WorksCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorksPayload>
          }
          createMany: {
            args: Prisma.WorksCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorksCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorksPayload>[]
          }
          delete: {
            args: Prisma.WorksDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorksPayload>
          }
          update: {
            args: Prisma.WorksUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorksPayload>
          }
          deleteMany: {
            args: Prisma.WorksDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorksUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorksUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorksPayload>[]
          }
          upsert: {
            args: Prisma.WorksUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorksPayload>
          }
          aggregate: {
            args: Prisma.WorksAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorks>
          }
          groupBy: {
            args: Prisma.WorksGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorksGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorksCountArgs<ExtArgs>
            result: $Utils.Optional<WorksCountAggregateOutputType> | number
          }
        }
      }
      Projects: {
        payload: Prisma.$ProjectsPayload<ExtArgs>
        fields: Prisma.ProjectsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectsPayload>
          }
          findFirst: {
            args: Prisma.ProjectsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectsPayload>
          }
          findMany: {
            args: Prisma.ProjectsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectsPayload>[]
          }
          create: {
            args: Prisma.ProjectsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectsPayload>
          }
          createMany: {
            args: Prisma.ProjectsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectsPayload>[]
          }
          delete: {
            args: Prisma.ProjectsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectsPayload>
          }
          update: {
            args: Prisma.ProjectsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectsPayload>
          }
          deleteMany: {
            args: Prisma.ProjectsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectsPayload>[]
          }
          upsert: {
            args: Prisma.ProjectsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectsPayload>
          }
          aggregate: {
            args: Prisma.ProjectsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProjects>
          }
          groupBy: {
            args: Prisma.ProjectsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectsCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectsCountAggregateOutputType> | number
          }
        }
      }
      Template: {
        payload: Prisma.$TemplatePayload<ExtArgs>
        fields: Prisma.TemplateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TemplateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TemplateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          findFirst: {
            args: Prisma.TemplateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TemplateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          findMany: {
            args: Prisma.TemplateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>[]
          }
          create: {
            args: Prisma.TemplateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          createMany: {
            args: Prisma.TemplateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TemplateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>[]
          }
          delete: {
            args: Prisma.TemplateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          update: {
            args: Prisma.TemplateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          deleteMany: {
            args: Prisma.TemplateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TemplateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TemplateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>[]
          }
          upsert: {
            args: Prisma.TemplateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          aggregate: {
            args: Prisma.TemplateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTemplate>
          }
          groupBy: {
            args: Prisma.TemplateGroupByArgs<ExtArgs>
            result: $Utils.Optional<TemplateGroupByOutputType>[]
          }
          count: {
            args: Prisma.TemplateCountArgs<ExtArgs>
            result: $Utils.Optional<TemplateCountAggregateOutputType> | number
          }
        }
      }
      Download: {
        payload: Prisma.$DownloadPayload<ExtArgs>
        fields: Prisma.DownloadFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DownloadFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DownloadPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DownloadFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DownloadPayload>
          }
          findFirst: {
            args: Prisma.DownloadFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DownloadPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DownloadFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DownloadPayload>
          }
          findMany: {
            args: Prisma.DownloadFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DownloadPayload>[]
          }
          create: {
            args: Prisma.DownloadCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DownloadPayload>
          }
          createMany: {
            args: Prisma.DownloadCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DownloadCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DownloadPayload>[]
          }
          delete: {
            args: Prisma.DownloadDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DownloadPayload>
          }
          update: {
            args: Prisma.DownloadUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DownloadPayload>
          }
          deleteMany: {
            args: Prisma.DownloadDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DownloadUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DownloadUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DownloadPayload>[]
          }
          upsert: {
            args: Prisma.DownloadUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DownloadPayload>
          }
          aggregate: {
            args: Prisma.DownloadAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDownload>
          }
          groupBy: {
            args: Prisma.DownloadGroupByArgs<ExtArgs>
            result: $Utils.Optional<DownloadGroupByOutputType>[]
          }
          count: {
            args: Prisma.DownloadCountArgs<ExtArgs>
            result: $Utils.Optional<DownloadCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    role?: RoleOmit
    sign?: SignOmit
    aIGenerator?: AIGeneratorOmit
    aIGenerateContent?: AIGenerateContentOmit
    profile?: ProfileOmit
    invite?: InviteOmit
    resume?: ResumeOmit
    works?: WorksOmit
    projects?: ProjectsOmit
    template?: TemplateOmit
    download?: DownloadOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    resume: number
    inviter: number
    invitee: number
    aiGenerator: number
    sign: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resume?: boolean | UserCountOutputTypeCountResumeArgs
    inviter?: boolean | UserCountOutputTypeCountInviterArgs
    invitee?: boolean | UserCountOutputTypeCountInviteeArgs
    aiGenerator?: boolean | UserCountOutputTypeCountAiGeneratorArgs
    sign?: boolean | UserCountOutputTypeCountSignArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountResumeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResumeWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountInviterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InviteWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountInviteeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InviteWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAiGeneratorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AIGeneratorWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSignArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SignWhereInput
  }


  /**
   * Count Type AIGeneratorCountOutputType
   */

  export type AIGeneratorCountOutputType = {
    aiGenerateContent: number
  }

  export type AIGeneratorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    aiGenerateContent?: boolean | AIGeneratorCountOutputTypeCountAiGenerateContentArgs
  }

  // Custom InputTypes
  /**
   * AIGeneratorCountOutputType without action
   */
  export type AIGeneratorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIGeneratorCountOutputType
     */
    select?: AIGeneratorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AIGeneratorCountOutputType without action
   */
  export type AIGeneratorCountOutputTypeCountAiGenerateContentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AIGenerateContentWhereInput
  }


  /**
   * Count Type ResumeCountOutputType
   */

  export type ResumeCountOutputType = {
    works: number
    projects: number
  }

  export type ResumeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    works?: boolean | ResumeCountOutputTypeCountWorksArgs
    projects?: boolean | ResumeCountOutputTypeCountProjectsArgs
  }

  // Custom InputTypes
  /**
   * ResumeCountOutputType without action
   */
  export type ResumeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResumeCountOutputType
     */
    select?: ResumeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ResumeCountOutputType without action
   */
  export type ResumeCountOutputTypeCountWorksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorksWhereInput
  }

  /**
   * ResumeCountOutputType without action
   */
  export type ResumeCountOutputTypeCountProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectsWhereInput
  }


  /**
   * Count Type TemplateCountOutputType
   */

  export type TemplateCountOutputType = {
    resume: number
  }

  export type TemplateCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resume?: boolean | TemplateCountOutputTypeCountResumeArgs
  }

  // Custom InputTypes
  /**
   * TemplateCountOutputType without action
   */
  export type TemplateCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateCountOutputType
     */
    select?: TemplateCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TemplateCountOutputType without action
   */
  export type TemplateCountOutputTypeCountResumeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResumeWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
    email: string | null
    mobile: string | null
    status: string | null
    createdTime: Date | null
    updatedTime: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
    email: string | null
    mobile: string | null
    status: string | null
    createdTime: Date | null
    updatedTime: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    password: number
    email: number
    mobile: number
    status: number
    createdTime: number
    updatedTime: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    email?: true
    mobile?: true
    status?: true
    createdTime?: true
    updatedTime?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    email?: true
    mobile?: true
    status?: true
    createdTime?: true
    updatedTime?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    email?: true
    mobile?: true
    status?: true
    createdTime?: true
    updatedTime?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    username: string
    password: string
    email: string | null
    mobile: string | null
    status: string | null
    createdTime: Date
    updatedTime: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    email?: boolean
    mobile?: boolean
    status?: boolean
    createdTime?: boolean
    updatedTime?: boolean
    profile?: boolean | User$profileArgs<ExtArgs>
    resume?: boolean | User$resumeArgs<ExtArgs>
    inviter?: boolean | User$inviterArgs<ExtArgs>
    invitee?: boolean | User$inviteeArgs<ExtArgs>
    aiGenerator?: boolean | User$aiGeneratorArgs<ExtArgs>
    sign?: boolean | User$signArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    email?: boolean
    mobile?: boolean
    status?: boolean
    createdTime?: boolean
    updatedTime?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    email?: boolean
    mobile?: boolean
    status?: boolean
    createdTime?: boolean
    updatedTime?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    email?: boolean
    mobile?: boolean
    status?: boolean
    createdTime?: boolean
    updatedTime?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "password" | "email" | "mobile" | "status" | "createdTime" | "updatedTime", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | User$profileArgs<ExtArgs>
    resume?: boolean | User$resumeArgs<ExtArgs>
    inviter?: boolean | User$inviterArgs<ExtArgs>
    invitee?: boolean | User$inviteeArgs<ExtArgs>
    aiGenerator?: boolean | User$aiGeneratorArgs<ExtArgs>
    sign?: boolean | User$signArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      profile: Prisma.$ProfilePayload<ExtArgs> | null
      resume: Prisma.$ResumePayload<ExtArgs>[]
      inviter: Prisma.$InvitePayload<ExtArgs>[]
      invitee: Prisma.$InvitePayload<ExtArgs>[]
      aiGenerator: Prisma.$AIGeneratorPayload<ExtArgs>[]
      sign: Prisma.$SignPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      password: string
      email: string | null
      mobile: string | null
      status: string | null
      createdTime: Date
      updatedTime: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profile<T extends User$profileArgs<ExtArgs> = {}>(args?: Subset<T, User$profileArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    resume<T extends User$resumeArgs<ExtArgs> = {}>(args?: Subset<T, User$resumeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    inviter<T extends User$inviterArgs<ExtArgs> = {}>(args?: Subset<T, User$inviterArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvitePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    invitee<T extends User$inviteeArgs<ExtArgs> = {}>(args?: Subset<T, User$inviteeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvitePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    aiGenerator<T extends User$aiGeneratorArgs<ExtArgs> = {}>(args?: Subset<T, User$aiGeneratorArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AIGeneratorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sign<T extends User$signArgs<ExtArgs> = {}>(args?: Subset<T, User$signArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SignPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly mobile: FieldRef<"User", 'String'>
    readonly status: FieldRef<"User", 'String'>
    readonly createdTime: FieldRef<"User", 'DateTime'>
    readonly updatedTime: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.profile
   */
  export type User$profileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    where?: ProfileWhereInput
  }

  /**
   * User.resume
   */
  export type User$resumeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    where?: ResumeWhereInput
    orderBy?: ResumeOrderByWithRelationInput | ResumeOrderByWithRelationInput[]
    cursor?: ResumeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ResumeScalarFieldEnum | ResumeScalarFieldEnum[]
  }

  /**
   * User.inviter
   */
  export type User$inviterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invite
     */
    select?: InviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invite
     */
    omit?: InviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InviteInclude<ExtArgs> | null
    where?: InviteWhereInput
    orderBy?: InviteOrderByWithRelationInput | InviteOrderByWithRelationInput[]
    cursor?: InviteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InviteScalarFieldEnum | InviteScalarFieldEnum[]
  }

  /**
   * User.invitee
   */
  export type User$inviteeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invite
     */
    select?: InviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invite
     */
    omit?: InviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InviteInclude<ExtArgs> | null
    where?: InviteWhereInput
    orderBy?: InviteOrderByWithRelationInput | InviteOrderByWithRelationInput[]
    cursor?: InviteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InviteScalarFieldEnum | InviteScalarFieldEnum[]
  }

  /**
   * User.aiGenerator
   */
  export type User$aiGeneratorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIGenerator
     */
    select?: AIGeneratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIGenerator
     */
    omit?: AIGeneratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIGeneratorInclude<ExtArgs> | null
    where?: AIGeneratorWhereInput
    orderBy?: AIGeneratorOrderByWithRelationInput | AIGeneratorOrderByWithRelationInput[]
    cursor?: AIGeneratorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AIGeneratorScalarFieldEnum | AIGeneratorScalarFieldEnum[]
  }

  /**
   * User.sign
   */
  export type User$signArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sign
     */
    select?: SignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sign
     */
    omit?: SignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignInclude<ExtArgs> | null
    where?: SignWhereInput
    orderBy?: SignOrderByWithRelationInput | SignOrderByWithRelationInput[]
    cursor?: SignWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SignScalarFieldEnum | SignScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleMinAggregateOutputType = {
    id: string | null
    name: string | null
    title: string | null
    createdTime: Date | null
    updatedTime: Date | null
  }

  export type RoleMaxAggregateOutputType = {
    id: string | null
    name: string | null
    title: string | null
    createdTime: Date | null
    updatedTime: Date | null
  }

  export type RoleCountAggregateOutputType = {
    id: number
    name: number
    title: number
    createdTime: number
    updatedTime: number
    _all: number
  }


  export type RoleMinAggregateInputType = {
    id?: true
    name?: true
    title?: true
    createdTime?: true
    updatedTime?: true
  }

  export type RoleMaxAggregateInputType = {
    id?: true
    name?: true
    title?: true
    createdTime?: true
    updatedTime?: true
  }

  export type RoleCountAggregateInputType = {
    id?: true
    name?: true
    title?: true
    createdTime?: true
    updatedTime?: true
    _all?: true
  }

  export type RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Role to aggregate.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }




  export type RoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithAggregationInput | RoleOrderByWithAggregationInput[]
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum
    having?: RoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }

  export type RoleGroupByOutputType = {
    id: string
    name: string
    title: string
    createdTime: Date
    updatedTime: Date
    _count: RoleCountAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends RoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleGroupByOutputType[P]>
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      >
    >


  export type RoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    title?: boolean
    createdTime?: boolean
    updatedTime?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    title?: boolean
    createdTime?: boolean
    updatedTime?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    title?: boolean
    createdTime?: boolean
    updatedTime?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectScalar = {
    id?: boolean
    name?: boolean
    title?: boolean
    createdTime?: boolean
    updatedTime?: boolean
  }

  export type RoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "title" | "createdTime" | "updatedTime", ExtArgs["result"]["role"]>

  export type $RolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Role"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      title: string
      createdTime: Date
      updatedTime: Date
    }, ExtArgs["result"]["role"]>
    composites: {}
  }

  type RoleGetPayload<S extends boolean | null | undefined | RoleDefaultArgs> = $Result.GetResult<Prisma.$RolePayload, S>

  type RoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoleCountAggregateInputType | true
    }

  export interface RoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Role'], meta: { name: 'Role' } }
    /**
     * Find zero or one Role that matches the filter.
     * @param {RoleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoleFindUniqueArgs>(args: SelectSubset<T, RoleFindUniqueArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Role that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoleFindUniqueOrThrowArgs>(args: SelectSubset<T, RoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoleFindFirstArgs>(args?: SelectSubset<T, RoleFindFirstArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoleFindFirstOrThrowArgs>(args?: SelectSubset<T, RoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roleWithIdOnly = await prisma.role.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoleFindManyArgs>(args?: SelectSubset<T, RoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Role.
     * @param {RoleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
     */
    create<T extends RoleCreateArgs>(args: SelectSubset<T, RoleCreateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roles.
     * @param {RoleCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoleCreateManyArgs>(args?: SelectSubset<T, RoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Roles and returns the data saved in the database.
     * @param {RoleCreateManyAndReturnArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoleCreateManyAndReturnArgs>(args?: SelectSubset<T, RoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Role.
     * @param {RoleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
     */
    delete<T extends RoleDeleteArgs>(args: SelectSubset<T, RoleDeleteArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Role.
     * @param {RoleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoleUpdateArgs>(args: SelectSubset<T, RoleUpdateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roles.
     * @param {RoleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoleDeleteManyArgs>(args?: SelectSubset<T, RoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoleUpdateManyArgs>(args: SelectSubset<T, RoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles and returns the data updated in the database.
     * @param {RoleUpdateManyAndReturnArgs} args - Arguments to update many Roles.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RoleUpdateManyAndReturnArgs>(args: SelectSubset<T, RoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Role.
     * @param {RoleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
     */
    upsert<T extends RoleUpsertArgs>(args: SelectSubset<T, RoleUpsertArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RoleCountArgs>(
      args?: Subset<T, RoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleGroupByArgs['orderBy'] }
        : { orderBy?: RoleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Role model
   */
  readonly fields: RoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Role model
   */
  interface RoleFieldRefs {
    readonly id: FieldRef<"Role", 'String'>
    readonly name: FieldRef<"Role", 'String'>
    readonly title: FieldRef<"Role", 'String'>
    readonly createdTime: FieldRef<"Role", 'DateTime'>
    readonly updatedTime: FieldRef<"Role", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Role findUnique
   */
  export type RoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findUniqueOrThrow
   */
  export type RoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findFirst
   */
  export type RoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findFirstOrThrow
   */
  export type RoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findMany
   */
  export type RoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role create
   */
  export type RoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data needed to create a Role.
     */
    data: XOR<RoleCreateInput, RoleUncheckedCreateInput>
  }

  /**
   * Role createMany
   */
  export type RoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role createManyAndReturn
   */
  export type RoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role update
   */
  export type RoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data needed to update a Role.
     */
    data: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
    /**
     * Choose, which Role to update.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role updateMany
   */
  export type RoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role updateManyAndReturn
   */
  export type RoleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role upsert
   */
  export type RoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The filter to search for the Role to update in case it exists.
     */
    where: RoleWhereUniqueInput
    /**
     * In case the Role found by the `where` argument doesn't exist, create a new Role with this data.
     */
    create: XOR<RoleCreateInput, RoleUncheckedCreateInput>
    /**
     * In case the Role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
  }

  /**
   * Role delete
   */
  export type RoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Filter which Role to delete.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role deleteMany
   */
  export type RoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to delete
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to delete.
     */
    limit?: number
  }

  /**
   * Role without action
   */
  export type RoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
  }


  /**
   * Model Sign
   */

  export type AggregateSign = {
    _count: SignCountAggregateOutputType | null
    _avg: SignAvgAggregateOutputType | null
    _sum: SignSumAggregateOutputType | null
    _min: SignMinAggregateOutputType | null
    _max: SignMaxAggregateOutputType | null
  }

  export type SignAvgAggregateOutputType = {
    date: number | null
  }

  export type SignSumAggregateOutputType = {
    date: number | null
  }

  export type SignMinAggregateOutputType = {
    id: string | null
    date: number | null
    userId: string | null
    createdTime: Date | null
    updatedTime: Date | null
  }

  export type SignMaxAggregateOutputType = {
    id: string | null
    date: number | null
    userId: string | null
    createdTime: Date | null
    updatedTime: Date | null
  }

  export type SignCountAggregateOutputType = {
    id: number
    date: number
    userId: number
    createdTime: number
    updatedTime: number
    _all: number
  }


  export type SignAvgAggregateInputType = {
    date?: true
  }

  export type SignSumAggregateInputType = {
    date?: true
  }

  export type SignMinAggregateInputType = {
    id?: true
    date?: true
    userId?: true
    createdTime?: true
    updatedTime?: true
  }

  export type SignMaxAggregateInputType = {
    id?: true
    date?: true
    userId?: true
    createdTime?: true
    updatedTime?: true
  }

  export type SignCountAggregateInputType = {
    id?: true
    date?: true
    userId?: true
    createdTime?: true
    updatedTime?: true
    _all?: true
  }

  export type SignAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sign to aggregate.
     */
    where?: SignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Signs to fetch.
     */
    orderBy?: SignOrderByWithRelationInput | SignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Signs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Signs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Signs
    **/
    _count?: true | SignCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SignAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SignSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SignMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SignMaxAggregateInputType
  }

  export type GetSignAggregateType<T extends SignAggregateArgs> = {
        [P in keyof T & keyof AggregateSign]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSign[P]>
      : GetScalarType<T[P], AggregateSign[P]>
  }




  export type SignGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SignWhereInput
    orderBy?: SignOrderByWithAggregationInput | SignOrderByWithAggregationInput[]
    by: SignScalarFieldEnum[] | SignScalarFieldEnum
    having?: SignScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SignCountAggregateInputType | true
    _avg?: SignAvgAggregateInputType
    _sum?: SignSumAggregateInputType
    _min?: SignMinAggregateInputType
    _max?: SignMaxAggregateInputType
  }

  export type SignGroupByOutputType = {
    id: string
    date: number
    userId: string
    createdTime: Date
    updatedTime: Date
    _count: SignCountAggregateOutputType | null
    _avg: SignAvgAggregateOutputType | null
    _sum: SignSumAggregateOutputType | null
    _min: SignMinAggregateOutputType | null
    _max: SignMaxAggregateOutputType | null
  }

  type GetSignGroupByPayload<T extends SignGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SignGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SignGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SignGroupByOutputType[P]>
            : GetScalarType<T[P], SignGroupByOutputType[P]>
        }
      >
    >


  export type SignSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    userId?: boolean
    createdTime?: boolean
    updatedTime?: boolean
    user?: boolean | Sign$userArgs<ExtArgs>
  }, ExtArgs["result"]["sign"]>

  export type SignSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    userId?: boolean
    createdTime?: boolean
    updatedTime?: boolean
    user?: boolean | Sign$userArgs<ExtArgs>
  }, ExtArgs["result"]["sign"]>

  export type SignSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    userId?: boolean
    createdTime?: boolean
    updatedTime?: boolean
    user?: boolean | Sign$userArgs<ExtArgs>
  }, ExtArgs["result"]["sign"]>

  export type SignSelectScalar = {
    id?: boolean
    date?: boolean
    userId?: boolean
    createdTime?: boolean
    updatedTime?: boolean
  }

  export type SignOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "date" | "userId" | "createdTime" | "updatedTime", ExtArgs["result"]["sign"]>
  export type SignInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Sign$userArgs<ExtArgs>
  }
  export type SignIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Sign$userArgs<ExtArgs>
  }
  export type SignIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Sign$userArgs<ExtArgs>
  }

  export type $SignPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sign"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      date: number
      userId: string
      createdTime: Date
      updatedTime: Date
    }, ExtArgs["result"]["sign"]>
    composites: {}
  }

  type SignGetPayload<S extends boolean | null | undefined | SignDefaultArgs> = $Result.GetResult<Prisma.$SignPayload, S>

  type SignCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SignFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SignCountAggregateInputType | true
    }

  export interface SignDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sign'], meta: { name: 'Sign' } }
    /**
     * Find zero or one Sign that matches the filter.
     * @param {SignFindUniqueArgs} args - Arguments to find a Sign
     * @example
     * // Get one Sign
     * const sign = await prisma.sign.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SignFindUniqueArgs>(args: SelectSubset<T, SignFindUniqueArgs<ExtArgs>>): Prisma__SignClient<$Result.GetResult<Prisma.$SignPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sign that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SignFindUniqueOrThrowArgs} args - Arguments to find a Sign
     * @example
     * // Get one Sign
     * const sign = await prisma.sign.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SignFindUniqueOrThrowArgs>(args: SelectSubset<T, SignFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SignClient<$Result.GetResult<Prisma.$SignPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sign that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SignFindFirstArgs} args - Arguments to find a Sign
     * @example
     * // Get one Sign
     * const sign = await prisma.sign.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SignFindFirstArgs>(args?: SelectSubset<T, SignFindFirstArgs<ExtArgs>>): Prisma__SignClient<$Result.GetResult<Prisma.$SignPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sign that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SignFindFirstOrThrowArgs} args - Arguments to find a Sign
     * @example
     * // Get one Sign
     * const sign = await prisma.sign.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SignFindFirstOrThrowArgs>(args?: SelectSubset<T, SignFindFirstOrThrowArgs<ExtArgs>>): Prisma__SignClient<$Result.GetResult<Prisma.$SignPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Signs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SignFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Signs
     * const signs = await prisma.sign.findMany()
     * 
     * // Get first 10 Signs
     * const signs = await prisma.sign.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const signWithIdOnly = await prisma.sign.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SignFindManyArgs>(args?: SelectSubset<T, SignFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SignPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sign.
     * @param {SignCreateArgs} args - Arguments to create a Sign.
     * @example
     * // Create one Sign
     * const Sign = await prisma.sign.create({
     *   data: {
     *     // ... data to create a Sign
     *   }
     * })
     * 
     */
    create<T extends SignCreateArgs>(args: SelectSubset<T, SignCreateArgs<ExtArgs>>): Prisma__SignClient<$Result.GetResult<Prisma.$SignPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Signs.
     * @param {SignCreateManyArgs} args - Arguments to create many Signs.
     * @example
     * // Create many Signs
     * const sign = await prisma.sign.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SignCreateManyArgs>(args?: SelectSubset<T, SignCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Signs and returns the data saved in the database.
     * @param {SignCreateManyAndReturnArgs} args - Arguments to create many Signs.
     * @example
     * // Create many Signs
     * const sign = await prisma.sign.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Signs and only return the `id`
     * const signWithIdOnly = await prisma.sign.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SignCreateManyAndReturnArgs>(args?: SelectSubset<T, SignCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SignPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sign.
     * @param {SignDeleteArgs} args - Arguments to delete one Sign.
     * @example
     * // Delete one Sign
     * const Sign = await prisma.sign.delete({
     *   where: {
     *     // ... filter to delete one Sign
     *   }
     * })
     * 
     */
    delete<T extends SignDeleteArgs>(args: SelectSubset<T, SignDeleteArgs<ExtArgs>>): Prisma__SignClient<$Result.GetResult<Prisma.$SignPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sign.
     * @param {SignUpdateArgs} args - Arguments to update one Sign.
     * @example
     * // Update one Sign
     * const sign = await prisma.sign.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SignUpdateArgs>(args: SelectSubset<T, SignUpdateArgs<ExtArgs>>): Prisma__SignClient<$Result.GetResult<Prisma.$SignPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Signs.
     * @param {SignDeleteManyArgs} args - Arguments to filter Signs to delete.
     * @example
     * // Delete a few Signs
     * const { count } = await prisma.sign.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SignDeleteManyArgs>(args?: SelectSubset<T, SignDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Signs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SignUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Signs
     * const sign = await prisma.sign.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SignUpdateManyArgs>(args: SelectSubset<T, SignUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Signs and returns the data updated in the database.
     * @param {SignUpdateManyAndReturnArgs} args - Arguments to update many Signs.
     * @example
     * // Update many Signs
     * const sign = await prisma.sign.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Signs and only return the `id`
     * const signWithIdOnly = await prisma.sign.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SignUpdateManyAndReturnArgs>(args: SelectSubset<T, SignUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SignPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sign.
     * @param {SignUpsertArgs} args - Arguments to update or create a Sign.
     * @example
     * // Update or create a Sign
     * const sign = await prisma.sign.upsert({
     *   create: {
     *     // ... data to create a Sign
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sign we want to update
     *   }
     * })
     */
    upsert<T extends SignUpsertArgs>(args: SelectSubset<T, SignUpsertArgs<ExtArgs>>): Prisma__SignClient<$Result.GetResult<Prisma.$SignPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Signs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SignCountArgs} args - Arguments to filter Signs to count.
     * @example
     * // Count the number of Signs
     * const count = await prisma.sign.count({
     *   where: {
     *     // ... the filter for the Signs we want to count
     *   }
     * })
    **/
    count<T extends SignCountArgs>(
      args?: Subset<T, SignCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SignCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sign.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SignAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SignAggregateArgs>(args: Subset<T, SignAggregateArgs>): Prisma.PrismaPromise<GetSignAggregateType<T>>

    /**
     * Group by Sign.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SignGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SignGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SignGroupByArgs['orderBy'] }
        : { orderBy?: SignGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SignGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSignGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sign model
   */
  readonly fields: SignFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sign.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SignClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Sign$userArgs<ExtArgs> = {}>(args?: Subset<T, Sign$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Sign model
   */
  interface SignFieldRefs {
    readonly id: FieldRef<"Sign", 'String'>
    readonly date: FieldRef<"Sign", 'Int'>
    readonly userId: FieldRef<"Sign", 'String'>
    readonly createdTime: FieldRef<"Sign", 'DateTime'>
    readonly updatedTime: FieldRef<"Sign", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Sign findUnique
   */
  export type SignFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sign
     */
    select?: SignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sign
     */
    omit?: SignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignInclude<ExtArgs> | null
    /**
     * Filter, which Sign to fetch.
     */
    where: SignWhereUniqueInput
  }

  /**
   * Sign findUniqueOrThrow
   */
  export type SignFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sign
     */
    select?: SignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sign
     */
    omit?: SignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignInclude<ExtArgs> | null
    /**
     * Filter, which Sign to fetch.
     */
    where: SignWhereUniqueInput
  }

  /**
   * Sign findFirst
   */
  export type SignFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sign
     */
    select?: SignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sign
     */
    omit?: SignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignInclude<ExtArgs> | null
    /**
     * Filter, which Sign to fetch.
     */
    where?: SignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Signs to fetch.
     */
    orderBy?: SignOrderByWithRelationInput | SignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Signs.
     */
    cursor?: SignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Signs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Signs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Signs.
     */
    distinct?: SignScalarFieldEnum | SignScalarFieldEnum[]
  }

  /**
   * Sign findFirstOrThrow
   */
  export type SignFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sign
     */
    select?: SignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sign
     */
    omit?: SignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignInclude<ExtArgs> | null
    /**
     * Filter, which Sign to fetch.
     */
    where?: SignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Signs to fetch.
     */
    orderBy?: SignOrderByWithRelationInput | SignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Signs.
     */
    cursor?: SignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Signs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Signs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Signs.
     */
    distinct?: SignScalarFieldEnum | SignScalarFieldEnum[]
  }

  /**
   * Sign findMany
   */
  export type SignFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sign
     */
    select?: SignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sign
     */
    omit?: SignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignInclude<ExtArgs> | null
    /**
     * Filter, which Signs to fetch.
     */
    where?: SignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Signs to fetch.
     */
    orderBy?: SignOrderByWithRelationInput | SignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Signs.
     */
    cursor?: SignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Signs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Signs.
     */
    skip?: number
    distinct?: SignScalarFieldEnum | SignScalarFieldEnum[]
  }

  /**
   * Sign create
   */
  export type SignCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sign
     */
    select?: SignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sign
     */
    omit?: SignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignInclude<ExtArgs> | null
    /**
     * The data needed to create a Sign.
     */
    data: XOR<SignCreateInput, SignUncheckedCreateInput>
  }

  /**
   * Sign createMany
   */
  export type SignCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Signs.
     */
    data: SignCreateManyInput | SignCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sign createManyAndReturn
   */
  export type SignCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sign
     */
    select?: SignSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sign
     */
    omit?: SignOmit<ExtArgs> | null
    /**
     * The data used to create many Signs.
     */
    data: SignCreateManyInput | SignCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sign update
   */
  export type SignUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sign
     */
    select?: SignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sign
     */
    omit?: SignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignInclude<ExtArgs> | null
    /**
     * The data needed to update a Sign.
     */
    data: XOR<SignUpdateInput, SignUncheckedUpdateInput>
    /**
     * Choose, which Sign to update.
     */
    where: SignWhereUniqueInput
  }

  /**
   * Sign updateMany
   */
  export type SignUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Signs.
     */
    data: XOR<SignUpdateManyMutationInput, SignUncheckedUpdateManyInput>
    /**
     * Filter which Signs to update
     */
    where?: SignWhereInput
    /**
     * Limit how many Signs to update.
     */
    limit?: number
  }

  /**
   * Sign updateManyAndReturn
   */
  export type SignUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sign
     */
    select?: SignSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sign
     */
    omit?: SignOmit<ExtArgs> | null
    /**
     * The data used to update Signs.
     */
    data: XOR<SignUpdateManyMutationInput, SignUncheckedUpdateManyInput>
    /**
     * Filter which Signs to update
     */
    where?: SignWhereInput
    /**
     * Limit how many Signs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sign upsert
   */
  export type SignUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sign
     */
    select?: SignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sign
     */
    omit?: SignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignInclude<ExtArgs> | null
    /**
     * The filter to search for the Sign to update in case it exists.
     */
    where: SignWhereUniqueInput
    /**
     * In case the Sign found by the `where` argument doesn't exist, create a new Sign with this data.
     */
    create: XOR<SignCreateInput, SignUncheckedCreateInput>
    /**
     * In case the Sign was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SignUpdateInput, SignUncheckedUpdateInput>
  }

  /**
   * Sign delete
   */
  export type SignDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sign
     */
    select?: SignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sign
     */
    omit?: SignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignInclude<ExtArgs> | null
    /**
     * Filter which Sign to delete.
     */
    where: SignWhereUniqueInput
  }

  /**
   * Sign deleteMany
   */
  export type SignDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Signs to delete
     */
    where?: SignWhereInput
    /**
     * Limit how many Signs to delete.
     */
    limit?: number
  }

  /**
   * Sign.user
   */
  export type Sign$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Sign without action
   */
  export type SignDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sign
     */
    select?: SignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sign
     */
    omit?: SignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SignInclude<ExtArgs> | null
  }


  /**
   * Model AIGenerator
   */

  export type AggregateAIGenerator = {
    _count: AIGeneratorCountAggregateOutputType | null
    _avg: AIGeneratorAvgAggregateOutputType | null
    _sum: AIGeneratorSumAggregateOutputType | null
    _min: AIGeneratorMinAggregateOutputType | null
    _max: AIGeneratorMaxAggregateOutputType | null
  }

  export type AIGeneratorAvgAggregateOutputType = {
    date: number | null
    times: number | null
  }

  export type AIGeneratorSumAggregateOutputType = {
    date: number | null
    times: number | null
  }

  export type AIGeneratorMinAggregateOutputType = {
    id: string | null
    desc: string | null
    date: number | null
    times: number | null
    userId: string | null
    createdTime: Date | null
    updatedTime: Date | null
  }

  export type AIGeneratorMaxAggregateOutputType = {
    id: string | null
    desc: string | null
    date: number | null
    times: number | null
    userId: string | null
    createdTime: Date | null
    updatedTime: Date | null
  }

  export type AIGeneratorCountAggregateOutputType = {
    id: number
    desc: number
    date: number
    times: number
    userId: number
    createdTime: number
    updatedTime: number
    _all: number
  }


  export type AIGeneratorAvgAggregateInputType = {
    date?: true
    times?: true
  }

  export type AIGeneratorSumAggregateInputType = {
    date?: true
    times?: true
  }

  export type AIGeneratorMinAggregateInputType = {
    id?: true
    desc?: true
    date?: true
    times?: true
    userId?: true
    createdTime?: true
    updatedTime?: true
  }

  export type AIGeneratorMaxAggregateInputType = {
    id?: true
    desc?: true
    date?: true
    times?: true
    userId?: true
    createdTime?: true
    updatedTime?: true
  }

  export type AIGeneratorCountAggregateInputType = {
    id?: true
    desc?: true
    date?: true
    times?: true
    userId?: true
    createdTime?: true
    updatedTime?: true
    _all?: true
  }

  export type AIGeneratorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AIGenerator to aggregate.
     */
    where?: AIGeneratorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIGenerators to fetch.
     */
    orderBy?: AIGeneratorOrderByWithRelationInput | AIGeneratorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AIGeneratorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIGenerators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIGenerators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AIGenerators
    **/
    _count?: true | AIGeneratorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AIGeneratorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AIGeneratorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AIGeneratorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AIGeneratorMaxAggregateInputType
  }

  export type GetAIGeneratorAggregateType<T extends AIGeneratorAggregateArgs> = {
        [P in keyof T & keyof AggregateAIGenerator]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAIGenerator[P]>
      : GetScalarType<T[P], AggregateAIGenerator[P]>
  }




  export type AIGeneratorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AIGeneratorWhereInput
    orderBy?: AIGeneratorOrderByWithAggregationInput | AIGeneratorOrderByWithAggregationInput[]
    by: AIGeneratorScalarFieldEnum[] | AIGeneratorScalarFieldEnum
    having?: AIGeneratorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AIGeneratorCountAggregateInputType | true
    _avg?: AIGeneratorAvgAggregateInputType
    _sum?: AIGeneratorSumAggregateInputType
    _min?: AIGeneratorMinAggregateInputType
    _max?: AIGeneratorMaxAggregateInputType
  }

  export type AIGeneratorGroupByOutputType = {
    id: string
    desc: string
    date: number
    times: number
    userId: string
    createdTime: Date
    updatedTime: Date
    _count: AIGeneratorCountAggregateOutputType | null
    _avg: AIGeneratorAvgAggregateOutputType | null
    _sum: AIGeneratorSumAggregateOutputType | null
    _min: AIGeneratorMinAggregateOutputType | null
    _max: AIGeneratorMaxAggregateOutputType | null
  }

  type GetAIGeneratorGroupByPayload<T extends AIGeneratorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AIGeneratorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AIGeneratorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AIGeneratorGroupByOutputType[P]>
            : GetScalarType<T[P], AIGeneratorGroupByOutputType[P]>
        }
      >
    >


  export type AIGeneratorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    desc?: boolean
    date?: boolean
    times?: boolean
    userId?: boolean
    createdTime?: boolean
    updatedTime?: boolean
    user?: boolean | AIGenerator$userArgs<ExtArgs>
    aiGenerateContent?: boolean | AIGenerator$aiGenerateContentArgs<ExtArgs>
    _count?: boolean | AIGeneratorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aIGenerator"]>

  export type AIGeneratorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    desc?: boolean
    date?: boolean
    times?: boolean
    userId?: boolean
    createdTime?: boolean
    updatedTime?: boolean
    user?: boolean | AIGenerator$userArgs<ExtArgs>
  }, ExtArgs["result"]["aIGenerator"]>

  export type AIGeneratorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    desc?: boolean
    date?: boolean
    times?: boolean
    userId?: boolean
    createdTime?: boolean
    updatedTime?: boolean
    user?: boolean | AIGenerator$userArgs<ExtArgs>
  }, ExtArgs["result"]["aIGenerator"]>

  export type AIGeneratorSelectScalar = {
    id?: boolean
    desc?: boolean
    date?: boolean
    times?: boolean
    userId?: boolean
    createdTime?: boolean
    updatedTime?: boolean
  }

  export type AIGeneratorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "desc" | "date" | "times" | "userId" | "createdTime" | "updatedTime", ExtArgs["result"]["aIGenerator"]>
  export type AIGeneratorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | AIGenerator$userArgs<ExtArgs>
    aiGenerateContent?: boolean | AIGenerator$aiGenerateContentArgs<ExtArgs>
    _count?: boolean | AIGeneratorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AIGeneratorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | AIGenerator$userArgs<ExtArgs>
  }
  export type AIGeneratorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | AIGenerator$userArgs<ExtArgs>
  }

  export type $AIGeneratorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AIGenerator"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      aiGenerateContent: Prisma.$AIGenerateContentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      desc: string
      date: number
      times: number
      userId: string
      createdTime: Date
      updatedTime: Date
    }, ExtArgs["result"]["aIGenerator"]>
    composites: {}
  }

  type AIGeneratorGetPayload<S extends boolean | null | undefined | AIGeneratorDefaultArgs> = $Result.GetResult<Prisma.$AIGeneratorPayload, S>

  type AIGeneratorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AIGeneratorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AIGeneratorCountAggregateInputType | true
    }

  export interface AIGeneratorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AIGenerator'], meta: { name: 'AIGenerator' } }
    /**
     * Find zero or one AIGenerator that matches the filter.
     * @param {AIGeneratorFindUniqueArgs} args - Arguments to find a AIGenerator
     * @example
     * // Get one AIGenerator
     * const aIGenerator = await prisma.aIGenerator.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AIGeneratorFindUniqueArgs>(args: SelectSubset<T, AIGeneratorFindUniqueArgs<ExtArgs>>): Prisma__AIGeneratorClient<$Result.GetResult<Prisma.$AIGeneratorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AIGenerator that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AIGeneratorFindUniqueOrThrowArgs} args - Arguments to find a AIGenerator
     * @example
     * // Get one AIGenerator
     * const aIGenerator = await prisma.aIGenerator.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AIGeneratorFindUniqueOrThrowArgs>(args: SelectSubset<T, AIGeneratorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AIGeneratorClient<$Result.GetResult<Prisma.$AIGeneratorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AIGenerator that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIGeneratorFindFirstArgs} args - Arguments to find a AIGenerator
     * @example
     * // Get one AIGenerator
     * const aIGenerator = await prisma.aIGenerator.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AIGeneratorFindFirstArgs>(args?: SelectSubset<T, AIGeneratorFindFirstArgs<ExtArgs>>): Prisma__AIGeneratorClient<$Result.GetResult<Prisma.$AIGeneratorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AIGenerator that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIGeneratorFindFirstOrThrowArgs} args - Arguments to find a AIGenerator
     * @example
     * // Get one AIGenerator
     * const aIGenerator = await prisma.aIGenerator.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AIGeneratorFindFirstOrThrowArgs>(args?: SelectSubset<T, AIGeneratorFindFirstOrThrowArgs<ExtArgs>>): Prisma__AIGeneratorClient<$Result.GetResult<Prisma.$AIGeneratorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AIGenerators that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIGeneratorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AIGenerators
     * const aIGenerators = await prisma.aIGenerator.findMany()
     * 
     * // Get first 10 AIGenerators
     * const aIGenerators = await prisma.aIGenerator.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aIGeneratorWithIdOnly = await prisma.aIGenerator.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AIGeneratorFindManyArgs>(args?: SelectSubset<T, AIGeneratorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AIGeneratorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AIGenerator.
     * @param {AIGeneratorCreateArgs} args - Arguments to create a AIGenerator.
     * @example
     * // Create one AIGenerator
     * const AIGenerator = await prisma.aIGenerator.create({
     *   data: {
     *     // ... data to create a AIGenerator
     *   }
     * })
     * 
     */
    create<T extends AIGeneratorCreateArgs>(args: SelectSubset<T, AIGeneratorCreateArgs<ExtArgs>>): Prisma__AIGeneratorClient<$Result.GetResult<Prisma.$AIGeneratorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AIGenerators.
     * @param {AIGeneratorCreateManyArgs} args - Arguments to create many AIGenerators.
     * @example
     * // Create many AIGenerators
     * const aIGenerator = await prisma.aIGenerator.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AIGeneratorCreateManyArgs>(args?: SelectSubset<T, AIGeneratorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AIGenerators and returns the data saved in the database.
     * @param {AIGeneratorCreateManyAndReturnArgs} args - Arguments to create many AIGenerators.
     * @example
     * // Create many AIGenerators
     * const aIGenerator = await prisma.aIGenerator.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AIGenerators and only return the `id`
     * const aIGeneratorWithIdOnly = await prisma.aIGenerator.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AIGeneratorCreateManyAndReturnArgs>(args?: SelectSubset<T, AIGeneratorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AIGeneratorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AIGenerator.
     * @param {AIGeneratorDeleteArgs} args - Arguments to delete one AIGenerator.
     * @example
     * // Delete one AIGenerator
     * const AIGenerator = await prisma.aIGenerator.delete({
     *   where: {
     *     // ... filter to delete one AIGenerator
     *   }
     * })
     * 
     */
    delete<T extends AIGeneratorDeleteArgs>(args: SelectSubset<T, AIGeneratorDeleteArgs<ExtArgs>>): Prisma__AIGeneratorClient<$Result.GetResult<Prisma.$AIGeneratorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AIGenerator.
     * @param {AIGeneratorUpdateArgs} args - Arguments to update one AIGenerator.
     * @example
     * // Update one AIGenerator
     * const aIGenerator = await prisma.aIGenerator.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AIGeneratorUpdateArgs>(args: SelectSubset<T, AIGeneratorUpdateArgs<ExtArgs>>): Prisma__AIGeneratorClient<$Result.GetResult<Prisma.$AIGeneratorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AIGenerators.
     * @param {AIGeneratorDeleteManyArgs} args - Arguments to filter AIGenerators to delete.
     * @example
     * // Delete a few AIGenerators
     * const { count } = await prisma.aIGenerator.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AIGeneratorDeleteManyArgs>(args?: SelectSubset<T, AIGeneratorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AIGenerators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIGeneratorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AIGenerators
     * const aIGenerator = await prisma.aIGenerator.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AIGeneratorUpdateManyArgs>(args: SelectSubset<T, AIGeneratorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AIGenerators and returns the data updated in the database.
     * @param {AIGeneratorUpdateManyAndReturnArgs} args - Arguments to update many AIGenerators.
     * @example
     * // Update many AIGenerators
     * const aIGenerator = await prisma.aIGenerator.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AIGenerators and only return the `id`
     * const aIGeneratorWithIdOnly = await prisma.aIGenerator.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AIGeneratorUpdateManyAndReturnArgs>(args: SelectSubset<T, AIGeneratorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AIGeneratorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AIGenerator.
     * @param {AIGeneratorUpsertArgs} args - Arguments to update or create a AIGenerator.
     * @example
     * // Update or create a AIGenerator
     * const aIGenerator = await prisma.aIGenerator.upsert({
     *   create: {
     *     // ... data to create a AIGenerator
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AIGenerator we want to update
     *   }
     * })
     */
    upsert<T extends AIGeneratorUpsertArgs>(args: SelectSubset<T, AIGeneratorUpsertArgs<ExtArgs>>): Prisma__AIGeneratorClient<$Result.GetResult<Prisma.$AIGeneratorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AIGenerators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIGeneratorCountArgs} args - Arguments to filter AIGenerators to count.
     * @example
     * // Count the number of AIGenerators
     * const count = await prisma.aIGenerator.count({
     *   where: {
     *     // ... the filter for the AIGenerators we want to count
     *   }
     * })
    **/
    count<T extends AIGeneratorCountArgs>(
      args?: Subset<T, AIGeneratorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AIGeneratorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AIGenerator.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIGeneratorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AIGeneratorAggregateArgs>(args: Subset<T, AIGeneratorAggregateArgs>): Prisma.PrismaPromise<GetAIGeneratorAggregateType<T>>

    /**
     * Group by AIGenerator.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIGeneratorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AIGeneratorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AIGeneratorGroupByArgs['orderBy'] }
        : { orderBy?: AIGeneratorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AIGeneratorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAIGeneratorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AIGenerator model
   */
  readonly fields: AIGeneratorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AIGenerator.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AIGeneratorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends AIGenerator$userArgs<ExtArgs> = {}>(args?: Subset<T, AIGenerator$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    aiGenerateContent<T extends AIGenerator$aiGenerateContentArgs<ExtArgs> = {}>(args?: Subset<T, AIGenerator$aiGenerateContentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AIGenerateContentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AIGenerator model
   */
  interface AIGeneratorFieldRefs {
    readonly id: FieldRef<"AIGenerator", 'String'>
    readonly desc: FieldRef<"AIGenerator", 'String'>
    readonly date: FieldRef<"AIGenerator", 'Int'>
    readonly times: FieldRef<"AIGenerator", 'Int'>
    readonly userId: FieldRef<"AIGenerator", 'String'>
    readonly createdTime: FieldRef<"AIGenerator", 'DateTime'>
    readonly updatedTime: FieldRef<"AIGenerator", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AIGenerator findUnique
   */
  export type AIGeneratorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIGenerator
     */
    select?: AIGeneratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIGenerator
     */
    omit?: AIGeneratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIGeneratorInclude<ExtArgs> | null
    /**
     * Filter, which AIGenerator to fetch.
     */
    where: AIGeneratorWhereUniqueInput
  }

  /**
   * AIGenerator findUniqueOrThrow
   */
  export type AIGeneratorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIGenerator
     */
    select?: AIGeneratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIGenerator
     */
    omit?: AIGeneratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIGeneratorInclude<ExtArgs> | null
    /**
     * Filter, which AIGenerator to fetch.
     */
    where: AIGeneratorWhereUniqueInput
  }

  /**
   * AIGenerator findFirst
   */
  export type AIGeneratorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIGenerator
     */
    select?: AIGeneratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIGenerator
     */
    omit?: AIGeneratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIGeneratorInclude<ExtArgs> | null
    /**
     * Filter, which AIGenerator to fetch.
     */
    where?: AIGeneratorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIGenerators to fetch.
     */
    orderBy?: AIGeneratorOrderByWithRelationInput | AIGeneratorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AIGenerators.
     */
    cursor?: AIGeneratorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIGenerators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIGenerators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AIGenerators.
     */
    distinct?: AIGeneratorScalarFieldEnum | AIGeneratorScalarFieldEnum[]
  }

  /**
   * AIGenerator findFirstOrThrow
   */
  export type AIGeneratorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIGenerator
     */
    select?: AIGeneratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIGenerator
     */
    omit?: AIGeneratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIGeneratorInclude<ExtArgs> | null
    /**
     * Filter, which AIGenerator to fetch.
     */
    where?: AIGeneratorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIGenerators to fetch.
     */
    orderBy?: AIGeneratorOrderByWithRelationInput | AIGeneratorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AIGenerators.
     */
    cursor?: AIGeneratorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIGenerators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIGenerators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AIGenerators.
     */
    distinct?: AIGeneratorScalarFieldEnum | AIGeneratorScalarFieldEnum[]
  }

  /**
   * AIGenerator findMany
   */
  export type AIGeneratorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIGenerator
     */
    select?: AIGeneratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIGenerator
     */
    omit?: AIGeneratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIGeneratorInclude<ExtArgs> | null
    /**
     * Filter, which AIGenerators to fetch.
     */
    where?: AIGeneratorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIGenerators to fetch.
     */
    orderBy?: AIGeneratorOrderByWithRelationInput | AIGeneratorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AIGenerators.
     */
    cursor?: AIGeneratorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIGenerators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIGenerators.
     */
    skip?: number
    distinct?: AIGeneratorScalarFieldEnum | AIGeneratorScalarFieldEnum[]
  }

  /**
   * AIGenerator create
   */
  export type AIGeneratorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIGenerator
     */
    select?: AIGeneratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIGenerator
     */
    omit?: AIGeneratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIGeneratorInclude<ExtArgs> | null
    /**
     * The data needed to create a AIGenerator.
     */
    data: XOR<AIGeneratorCreateInput, AIGeneratorUncheckedCreateInput>
  }

  /**
   * AIGenerator createMany
   */
  export type AIGeneratorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AIGenerators.
     */
    data: AIGeneratorCreateManyInput | AIGeneratorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AIGenerator createManyAndReturn
   */
  export type AIGeneratorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIGenerator
     */
    select?: AIGeneratorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AIGenerator
     */
    omit?: AIGeneratorOmit<ExtArgs> | null
    /**
     * The data used to create many AIGenerators.
     */
    data: AIGeneratorCreateManyInput | AIGeneratorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIGeneratorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AIGenerator update
   */
  export type AIGeneratorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIGenerator
     */
    select?: AIGeneratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIGenerator
     */
    omit?: AIGeneratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIGeneratorInclude<ExtArgs> | null
    /**
     * The data needed to update a AIGenerator.
     */
    data: XOR<AIGeneratorUpdateInput, AIGeneratorUncheckedUpdateInput>
    /**
     * Choose, which AIGenerator to update.
     */
    where: AIGeneratorWhereUniqueInput
  }

  /**
   * AIGenerator updateMany
   */
  export type AIGeneratorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AIGenerators.
     */
    data: XOR<AIGeneratorUpdateManyMutationInput, AIGeneratorUncheckedUpdateManyInput>
    /**
     * Filter which AIGenerators to update
     */
    where?: AIGeneratorWhereInput
    /**
     * Limit how many AIGenerators to update.
     */
    limit?: number
  }

  /**
   * AIGenerator updateManyAndReturn
   */
  export type AIGeneratorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIGenerator
     */
    select?: AIGeneratorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AIGenerator
     */
    omit?: AIGeneratorOmit<ExtArgs> | null
    /**
     * The data used to update AIGenerators.
     */
    data: XOR<AIGeneratorUpdateManyMutationInput, AIGeneratorUncheckedUpdateManyInput>
    /**
     * Filter which AIGenerators to update
     */
    where?: AIGeneratorWhereInput
    /**
     * Limit how many AIGenerators to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIGeneratorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AIGenerator upsert
   */
  export type AIGeneratorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIGenerator
     */
    select?: AIGeneratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIGenerator
     */
    omit?: AIGeneratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIGeneratorInclude<ExtArgs> | null
    /**
     * The filter to search for the AIGenerator to update in case it exists.
     */
    where: AIGeneratorWhereUniqueInput
    /**
     * In case the AIGenerator found by the `where` argument doesn't exist, create a new AIGenerator with this data.
     */
    create: XOR<AIGeneratorCreateInput, AIGeneratorUncheckedCreateInput>
    /**
     * In case the AIGenerator was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AIGeneratorUpdateInput, AIGeneratorUncheckedUpdateInput>
  }

  /**
   * AIGenerator delete
   */
  export type AIGeneratorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIGenerator
     */
    select?: AIGeneratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIGenerator
     */
    omit?: AIGeneratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIGeneratorInclude<ExtArgs> | null
    /**
     * Filter which AIGenerator to delete.
     */
    where: AIGeneratorWhereUniqueInput
  }

  /**
   * AIGenerator deleteMany
   */
  export type AIGeneratorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AIGenerators to delete
     */
    where?: AIGeneratorWhereInput
    /**
     * Limit how many AIGenerators to delete.
     */
    limit?: number
  }

  /**
   * AIGenerator.user
   */
  export type AIGenerator$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * AIGenerator.aiGenerateContent
   */
  export type AIGenerator$aiGenerateContentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIGenerateContent
     */
    select?: AIGenerateContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIGenerateContent
     */
    omit?: AIGenerateContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIGenerateContentInclude<ExtArgs> | null
    where?: AIGenerateContentWhereInput
    orderBy?: AIGenerateContentOrderByWithRelationInput | AIGenerateContentOrderByWithRelationInput[]
    cursor?: AIGenerateContentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AIGenerateContentScalarFieldEnum | AIGenerateContentScalarFieldEnum[]
  }

  /**
   * AIGenerator without action
   */
  export type AIGeneratorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIGenerator
     */
    select?: AIGeneratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIGenerator
     */
    omit?: AIGeneratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIGeneratorInclude<ExtArgs> | null
  }


  /**
   * Model AIGenerateContent
   */

  export type AggregateAIGenerateContent = {
    _count: AIGenerateContentCountAggregateOutputType | null
    _avg: AIGenerateContentAvgAggregateOutputType | null
    _sum: AIGenerateContentSumAggregateOutputType | null
    _min: AIGenerateContentMinAggregateOutputType | null
    _max: AIGenerateContentMaxAggregateOutputType | null
  }

  export type AIGenerateContentAvgAggregateOutputType = {
    promptTokens: number | null
    completionTokens: number | null
  }

  export type AIGenerateContentSumAggregateOutputType = {
    promptTokens: number | null
    completionTokens: number | null
  }

  export type AIGenerateContentMinAggregateOutputType = {
    id: string | null
    gid: string | null
    model: string | null
    promptTokens: number | null
    completionTokens: number | null
    object: string | null
    userMessage: string | null
    aiGeneratorId: string | null
    createdTime: Date | null
    updatedTime: Date | null
  }

  export type AIGenerateContentMaxAggregateOutputType = {
    id: string | null
    gid: string | null
    model: string | null
    promptTokens: number | null
    completionTokens: number | null
    object: string | null
    userMessage: string | null
    aiGeneratorId: string | null
    createdTime: Date | null
    updatedTime: Date | null
  }

  export type AIGenerateContentCountAggregateOutputType = {
    id: number
    gid: number
    model: number
    promptTokens: number
    completionTokens: number
    object: number
    userMessage: number
    aiGeneratorId: number
    createdTime: number
    updatedTime: number
    _all: number
  }


  export type AIGenerateContentAvgAggregateInputType = {
    promptTokens?: true
    completionTokens?: true
  }

  export type AIGenerateContentSumAggregateInputType = {
    promptTokens?: true
    completionTokens?: true
  }

  export type AIGenerateContentMinAggregateInputType = {
    id?: true
    gid?: true
    model?: true
    promptTokens?: true
    completionTokens?: true
    object?: true
    userMessage?: true
    aiGeneratorId?: true
    createdTime?: true
    updatedTime?: true
  }

  export type AIGenerateContentMaxAggregateInputType = {
    id?: true
    gid?: true
    model?: true
    promptTokens?: true
    completionTokens?: true
    object?: true
    userMessage?: true
    aiGeneratorId?: true
    createdTime?: true
    updatedTime?: true
  }

  export type AIGenerateContentCountAggregateInputType = {
    id?: true
    gid?: true
    model?: true
    promptTokens?: true
    completionTokens?: true
    object?: true
    userMessage?: true
    aiGeneratorId?: true
    createdTime?: true
    updatedTime?: true
    _all?: true
  }

  export type AIGenerateContentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AIGenerateContent to aggregate.
     */
    where?: AIGenerateContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIGenerateContents to fetch.
     */
    orderBy?: AIGenerateContentOrderByWithRelationInput | AIGenerateContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AIGenerateContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIGenerateContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIGenerateContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AIGenerateContents
    **/
    _count?: true | AIGenerateContentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AIGenerateContentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AIGenerateContentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AIGenerateContentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AIGenerateContentMaxAggregateInputType
  }

  export type GetAIGenerateContentAggregateType<T extends AIGenerateContentAggregateArgs> = {
        [P in keyof T & keyof AggregateAIGenerateContent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAIGenerateContent[P]>
      : GetScalarType<T[P], AggregateAIGenerateContent[P]>
  }




  export type AIGenerateContentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AIGenerateContentWhereInput
    orderBy?: AIGenerateContentOrderByWithAggregationInput | AIGenerateContentOrderByWithAggregationInput[]
    by: AIGenerateContentScalarFieldEnum[] | AIGenerateContentScalarFieldEnum
    having?: AIGenerateContentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AIGenerateContentCountAggregateInputType | true
    _avg?: AIGenerateContentAvgAggregateInputType
    _sum?: AIGenerateContentSumAggregateInputType
    _min?: AIGenerateContentMinAggregateInputType
    _max?: AIGenerateContentMaxAggregateInputType
  }

  export type AIGenerateContentGroupByOutputType = {
    id: string
    gid: string
    model: string
    promptTokens: number
    completionTokens: number
    object: string
    userMessage: string
    aiGeneratorId: string | null
    createdTime: Date
    updatedTime: Date
    _count: AIGenerateContentCountAggregateOutputType | null
    _avg: AIGenerateContentAvgAggregateOutputType | null
    _sum: AIGenerateContentSumAggregateOutputType | null
    _min: AIGenerateContentMinAggregateOutputType | null
    _max: AIGenerateContentMaxAggregateOutputType | null
  }

  type GetAIGenerateContentGroupByPayload<T extends AIGenerateContentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AIGenerateContentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AIGenerateContentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AIGenerateContentGroupByOutputType[P]>
            : GetScalarType<T[P], AIGenerateContentGroupByOutputType[P]>
        }
      >
    >


  export type AIGenerateContentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gid?: boolean
    model?: boolean
    promptTokens?: boolean
    completionTokens?: boolean
    object?: boolean
    userMessage?: boolean
    aiGeneratorId?: boolean
    createdTime?: boolean
    updatedTime?: boolean
    aiGenerator?: boolean | AIGenerateContent$aiGeneratorArgs<ExtArgs>
  }, ExtArgs["result"]["aIGenerateContent"]>

  export type AIGenerateContentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gid?: boolean
    model?: boolean
    promptTokens?: boolean
    completionTokens?: boolean
    object?: boolean
    userMessage?: boolean
    aiGeneratorId?: boolean
    createdTime?: boolean
    updatedTime?: boolean
    aiGenerator?: boolean | AIGenerateContent$aiGeneratorArgs<ExtArgs>
  }, ExtArgs["result"]["aIGenerateContent"]>

  export type AIGenerateContentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gid?: boolean
    model?: boolean
    promptTokens?: boolean
    completionTokens?: boolean
    object?: boolean
    userMessage?: boolean
    aiGeneratorId?: boolean
    createdTime?: boolean
    updatedTime?: boolean
    aiGenerator?: boolean | AIGenerateContent$aiGeneratorArgs<ExtArgs>
  }, ExtArgs["result"]["aIGenerateContent"]>

  export type AIGenerateContentSelectScalar = {
    id?: boolean
    gid?: boolean
    model?: boolean
    promptTokens?: boolean
    completionTokens?: boolean
    object?: boolean
    userMessage?: boolean
    aiGeneratorId?: boolean
    createdTime?: boolean
    updatedTime?: boolean
  }

  export type AIGenerateContentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "gid" | "model" | "promptTokens" | "completionTokens" | "object" | "userMessage" | "aiGeneratorId" | "createdTime" | "updatedTime", ExtArgs["result"]["aIGenerateContent"]>
  export type AIGenerateContentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    aiGenerator?: boolean | AIGenerateContent$aiGeneratorArgs<ExtArgs>
  }
  export type AIGenerateContentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    aiGenerator?: boolean | AIGenerateContent$aiGeneratorArgs<ExtArgs>
  }
  export type AIGenerateContentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    aiGenerator?: boolean | AIGenerateContent$aiGeneratorArgs<ExtArgs>
  }

  export type $AIGenerateContentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AIGenerateContent"
    objects: {
      aiGenerator: Prisma.$AIGeneratorPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      gid: string
      model: string
      promptTokens: number
      completionTokens: number
      object: string
      userMessage: string
      aiGeneratorId: string | null
      createdTime: Date
      updatedTime: Date
    }, ExtArgs["result"]["aIGenerateContent"]>
    composites: {}
  }

  type AIGenerateContentGetPayload<S extends boolean | null | undefined | AIGenerateContentDefaultArgs> = $Result.GetResult<Prisma.$AIGenerateContentPayload, S>

  type AIGenerateContentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AIGenerateContentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AIGenerateContentCountAggregateInputType | true
    }

  export interface AIGenerateContentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AIGenerateContent'], meta: { name: 'AIGenerateContent' } }
    /**
     * Find zero or one AIGenerateContent that matches the filter.
     * @param {AIGenerateContentFindUniqueArgs} args - Arguments to find a AIGenerateContent
     * @example
     * // Get one AIGenerateContent
     * const aIGenerateContent = await prisma.aIGenerateContent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AIGenerateContentFindUniqueArgs>(args: SelectSubset<T, AIGenerateContentFindUniqueArgs<ExtArgs>>): Prisma__AIGenerateContentClient<$Result.GetResult<Prisma.$AIGenerateContentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AIGenerateContent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AIGenerateContentFindUniqueOrThrowArgs} args - Arguments to find a AIGenerateContent
     * @example
     * // Get one AIGenerateContent
     * const aIGenerateContent = await prisma.aIGenerateContent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AIGenerateContentFindUniqueOrThrowArgs>(args: SelectSubset<T, AIGenerateContentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AIGenerateContentClient<$Result.GetResult<Prisma.$AIGenerateContentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AIGenerateContent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIGenerateContentFindFirstArgs} args - Arguments to find a AIGenerateContent
     * @example
     * // Get one AIGenerateContent
     * const aIGenerateContent = await prisma.aIGenerateContent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AIGenerateContentFindFirstArgs>(args?: SelectSubset<T, AIGenerateContentFindFirstArgs<ExtArgs>>): Prisma__AIGenerateContentClient<$Result.GetResult<Prisma.$AIGenerateContentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AIGenerateContent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIGenerateContentFindFirstOrThrowArgs} args - Arguments to find a AIGenerateContent
     * @example
     * // Get one AIGenerateContent
     * const aIGenerateContent = await prisma.aIGenerateContent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AIGenerateContentFindFirstOrThrowArgs>(args?: SelectSubset<T, AIGenerateContentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AIGenerateContentClient<$Result.GetResult<Prisma.$AIGenerateContentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AIGenerateContents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIGenerateContentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AIGenerateContents
     * const aIGenerateContents = await prisma.aIGenerateContent.findMany()
     * 
     * // Get first 10 AIGenerateContents
     * const aIGenerateContents = await prisma.aIGenerateContent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aIGenerateContentWithIdOnly = await prisma.aIGenerateContent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AIGenerateContentFindManyArgs>(args?: SelectSubset<T, AIGenerateContentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AIGenerateContentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AIGenerateContent.
     * @param {AIGenerateContentCreateArgs} args - Arguments to create a AIGenerateContent.
     * @example
     * // Create one AIGenerateContent
     * const AIGenerateContent = await prisma.aIGenerateContent.create({
     *   data: {
     *     // ... data to create a AIGenerateContent
     *   }
     * })
     * 
     */
    create<T extends AIGenerateContentCreateArgs>(args: SelectSubset<T, AIGenerateContentCreateArgs<ExtArgs>>): Prisma__AIGenerateContentClient<$Result.GetResult<Prisma.$AIGenerateContentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AIGenerateContents.
     * @param {AIGenerateContentCreateManyArgs} args - Arguments to create many AIGenerateContents.
     * @example
     * // Create many AIGenerateContents
     * const aIGenerateContent = await prisma.aIGenerateContent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AIGenerateContentCreateManyArgs>(args?: SelectSubset<T, AIGenerateContentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AIGenerateContents and returns the data saved in the database.
     * @param {AIGenerateContentCreateManyAndReturnArgs} args - Arguments to create many AIGenerateContents.
     * @example
     * // Create many AIGenerateContents
     * const aIGenerateContent = await prisma.aIGenerateContent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AIGenerateContents and only return the `id`
     * const aIGenerateContentWithIdOnly = await prisma.aIGenerateContent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AIGenerateContentCreateManyAndReturnArgs>(args?: SelectSubset<T, AIGenerateContentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AIGenerateContentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AIGenerateContent.
     * @param {AIGenerateContentDeleteArgs} args - Arguments to delete one AIGenerateContent.
     * @example
     * // Delete one AIGenerateContent
     * const AIGenerateContent = await prisma.aIGenerateContent.delete({
     *   where: {
     *     // ... filter to delete one AIGenerateContent
     *   }
     * })
     * 
     */
    delete<T extends AIGenerateContentDeleteArgs>(args: SelectSubset<T, AIGenerateContentDeleteArgs<ExtArgs>>): Prisma__AIGenerateContentClient<$Result.GetResult<Prisma.$AIGenerateContentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AIGenerateContent.
     * @param {AIGenerateContentUpdateArgs} args - Arguments to update one AIGenerateContent.
     * @example
     * // Update one AIGenerateContent
     * const aIGenerateContent = await prisma.aIGenerateContent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AIGenerateContentUpdateArgs>(args: SelectSubset<T, AIGenerateContentUpdateArgs<ExtArgs>>): Prisma__AIGenerateContentClient<$Result.GetResult<Prisma.$AIGenerateContentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AIGenerateContents.
     * @param {AIGenerateContentDeleteManyArgs} args - Arguments to filter AIGenerateContents to delete.
     * @example
     * // Delete a few AIGenerateContents
     * const { count } = await prisma.aIGenerateContent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AIGenerateContentDeleteManyArgs>(args?: SelectSubset<T, AIGenerateContentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AIGenerateContents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIGenerateContentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AIGenerateContents
     * const aIGenerateContent = await prisma.aIGenerateContent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AIGenerateContentUpdateManyArgs>(args: SelectSubset<T, AIGenerateContentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AIGenerateContents and returns the data updated in the database.
     * @param {AIGenerateContentUpdateManyAndReturnArgs} args - Arguments to update many AIGenerateContents.
     * @example
     * // Update many AIGenerateContents
     * const aIGenerateContent = await prisma.aIGenerateContent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AIGenerateContents and only return the `id`
     * const aIGenerateContentWithIdOnly = await prisma.aIGenerateContent.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AIGenerateContentUpdateManyAndReturnArgs>(args: SelectSubset<T, AIGenerateContentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AIGenerateContentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AIGenerateContent.
     * @param {AIGenerateContentUpsertArgs} args - Arguments to update or create a AIGenerateContent.
     * @example
     * // Update or create a AIGenerateContent
     * const aIGenerateContent = await prisma.aIGenerateContent.upsert({
     *   create: {
     *     // ... data to create a AIGenerateContent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AIGenerateContent we want to update
     *   }
     * })
     */
    upsert<T extends AIGenerateContentUpsertArgs>(args: SelectSubset<T, AIGenerateContentUpsertArgs<ExtArgs>>): Prisma__AIGenerateContentClient<$Result.GetResult<Prisma.$AIGenerateContentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AIGenerateContents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIGenerateContentCountArgs} args - Arguments to filter AIGenerateContents to count.
     * @example
     * // Count the number of AIGenerateContents
     * const count = await prisma.aIGenerateContent.count({
     *   where: {
     *     // ... the filter for the AIGenerateContents we want to count
     *   }
     * })
    **/
    count<T extends AIGenerateContentCountArgs>(
      args?: Subset<T, AIGenerateContentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AIGenerateContentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AIGenerateContent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIGenerateContentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AIGenerateContentAggregateArgs>(args: Subset<T, AIGenerateContentAggregateArgs>): Prisma.PrismaPromise<GetAIGenerateContentAggregateType<T>>

    /**
     * Group by AIGenerateContent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIGenerateContentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AIGenerateContentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AIGenerateContentGroupByArgs['orderBy'] }
        : { orderBy?: AIGenerateContentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AIGenerateContentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAIGenerateContentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AIGenerateContent model
   */
  readonly fields: AIGenerateContentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AIGenerateContent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AIGenerateContentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    aiGenerator<T extends AIGenerateContent$aiGeneratorArgs<ExtArgs> = {}>(args?: Subset<T, AIGenerateContent$aiGeneratorArgs<ExtArgs>>): Prisma__AIGeneratorClient<$Result.GetResult<Prisma.$AIGeneratorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AIGenerateContent model
   */
  interface AIGenerateContentFieldRefs {
    readonly id: FieldRef<"AIGenerateContent", 'String'>
    readonly gid: FieldRef<"AIGenerateContent", 'String'>
    readonly model: FieldRef<"AIGenerateContent", 'String'>
    readonly promptTokens: FieldRef<"AIGenerateContent", 'Int'>
    readonly completionTokens: FieldRef<"AIGenerateContent", 'Int'>
    readonly object: FieldRef<"AIGenerateContent", 'String'>
    readonly userMessage: FieldRef<"AIGenerateContent", 'String'>
    readonly aiGeneratorId: FieldRef<"AIGenerateContent", 'String'>
    readonly createdTime: FieldRef<"AIGenerateContent", 'DateTime'>
    readonly updatedTime: FieldRef<"AIGenerateContent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AIGenerateContent findUnique
   */
  export type AIGenerateContentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIGenerateContent
     */
    select?: AIGenerateContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIGenerateContent
     */
    omit?: AIGenerateContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIGenerateContentInclude<ExtArgs> | null
    /**
     * Filter, which AIGenerateContent to fetch.
     */
    where: AIGenerateContentWhereUniqueInput
  }

  /**
   * AIGenerateContent findUniqueOrThrow
   */
  export type AIGenerateContentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIGenerateContent
     */
    select?: AIGenerateContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIGenerateContent
     */
    omit?: AIGenerateContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIGenerateContentInclude<ExtArgs> | null
    /**
     * Filter, which AIGenerateContent to fetch.
     */
    where: AIGenerateContentWhereUniqueInput
  }

  /**
   * AIGenerateContent findFirst
   */
  export type AIGenerateContentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIGenerateContent
     */
    select?: AIGenerateContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIGenerateContent
     */
    omit?: AIGenerateContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIGenerateContentInclude<ExtArgs> | null
    /**
     * Filter, which AIGenerateContent to fetch.
     */
    where?: AIGenerateContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIGenerateContents to fetch.
     */
    orderBy?: AIGenerateContentOrderByWithRelationInput | AIGenerateContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AIGenerateContents.
     */
    cursor?: AIGenerateContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIGenerateContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIGenerateContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AIGenerateContents.
     */
    distinct?: AIGenerateContentScalarFieldEnum | AIGenerateContentScalarFieldEnum[]
  }

  /**
   * AIGenerateContent findFirstOrThrow
   */
  export type AIGenerateContentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIGenerateContent
     */
    select?: AIGenerateContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIGenerateContent
     */
    omit?: AIGenerateContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIGenerateContentInclude<ExtArgs> | null
    /**
     * Filter, which AIGenerateContent to fetch.
     */
    where?: AIGenerateContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIGenerateContents to fetch.
     */
    orderBy?: AIGenerateContentOrderByWithRelationInput | AIGenerateContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AIGenerateContents.
     */
    cursor?: AIGenerateContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIGenerateContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIGenerateContents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AIGenerateContents.
     */
    distinct?: AIGenerateContentScalarFieldEnum | AIGenerateContentScalarFieldEnum[]
  }

  /**
   * AIGenerateContent findMany
   */
  export type AIGenerateContentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIGenerateContent
     */
    select?: AIGenerateContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIGenerateContent
     */
    omit?: AIGenerateContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIGenerateContentInclude<ExtArgs> | null
    /**
     * Filter, which AIGenerateContents to fetch.
     */
    where?: AIGenerateContentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIGenerateContents to fetch.
     */
    orderBy?: AIGenerateContentOrderByWithRelationInput | AIGenerateContentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AIGenerateContents.
     */
    cursor?: AIGenerateContentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIGenerateContents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIGenerateContents.
     */
    skip?: number
    distinct?: AIGenerateContentScalarFieldEnum | AIGenerateContentScalarFieldEnum[]
  }

  /**
   * AIGenerateContent create
   */
  export type AIGenerateContentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIGenerateContent
     */
    select?: AIGenerateContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIGenerateContent
     */
    omit?: AIGenerateContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIGenerateContentInclude<ExtArgs> | null
    /**
     * The data needed to create a AIGenerateContent.
     */
    data: XOR<AIGenerateContentCreateInput, AIGenerateContentUncheckedCreateInput>
  }

  /**
   * AIGenerateContent createMany
   */
  export type AIGenerateContentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AIGenerateContents.
     */
    data: AIGenerateContentCreateManyInput | AIGenerateContentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AIGenerateContent createManyAndReturn
   */
  export type AIGenerateContentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIGenerateContent
     */
    select?: AIGenerateContentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AIGenerateContent
     */
    omit?: AIGenerateContentOmit<ExtArgs> | null
    /**
     * The data used to create many AIGenerateContents.
     */
    data: AIGenerateContentCreateManyInput | AIGenerateContentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIGenerateContentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AIGenerateContent update
   */
  export type AIGenerateContentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIGenerateContent
     */
    select?: AIGenerateContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIGenerateContent
     */
    omit?: AIGenerateContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIGenerateContentInclude<ExtArgs> | null
    /**
     * The data needed to update a AIGenerateContent.
     */
    data: XOR<AIGenerateContentUpdateInput, AIGenerateContentUncheckedUpdateInput>
    /**
     * Choose, which AIGenerateContent to update.
     */
    where: AIGenerateContentWhereUniqueInput
  }

  /**
   * AIGenerateContent updateMany
   */
  export type AIGenerateContentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AIGenerateContents.
     */
    data: XOR<AIGenerateContentUpdateManyMutationInput, AIGenerateContentUncheckedUpdateManyInput>
    /**
     * Filter which AIGenerateContents to update
     */
    where?: AIGenerateContentWhereInput
    /**
     * Limit how many AIGenerateContents to update.
     */
    limit?: number
  }

  /**
   * AIGenerateContent updateManyAndReturn
   */
  export type AIGenerateContentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIGenerateContent
     */
    select?: AIGenerateContentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AIGenerateContent
     */
    omit?: AIGenerateContentOmit<ExtArgs> | null
    /**
     * The data used to update AIGenerateContents.
     */
    data: XOR<AIGenerateContentUpdateManyMutationInput, AIGenerateContentUncheckedUpdateManyInput>
    /**
     * Filter which AIGenerateContents to update
     */
    where?: AIGenerateContentWhereInput
    /**
     * Limit how many AIGenerateContents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIGenerateContentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AIGenerateContent upsert
   */
  export type AIGenerateContentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIGenerateContent
     */
    select?: AIGenerateContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIGenerateContent
     */
    omit?: AIGenerateContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIGenerateContentInclude<ExtArgs> | null
    /**
     * The filter to search for the AIGenerateContent to update in case it exists.
     */
    where: AIGenerateContentWhereUniqueInput
    /**
     * In case the AIGenerateContent found by the `where` argument doesn't exist, create a new AIGenerateContent with this data.
     */
    create: XOR<AIGenerateContentCreateInput, AIGenerateContentUncheckedCreateInput>
    /**
     * In case the AIGenerateContent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AIGenerateContentUpdateInput, AIGenerateContentUncheckedUpdateInput>
  }

  /**
   * AIGenerateContent delete
   */
  export type AIGenerateContentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIGenerateContent
     */
    select?: AIGenerateContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIGenerateContent
     */
    omit?: AIGenerateContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIGenerateContentInclude<ExtArgs> | null
    /**
     * Filter which AIGenerateContent to delete.
     */
    where: AIGenerateContentWhereUniqueInput
  }

  /**
   * AIGenerateContent deleteMany
   */
  export type AIGenerateContentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AIGenerateContents to delete
     */
    where?: AIGenerateContentWhereInput
    /**
     * Limit how many AIGenerateContents to delete.
     */
    limit?: number
  }

  /**
   * AIGenerateContent.aiGenerator
   */
  export type AIGenerateContent$aiGeneratorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIGenerator
     */
    select?: AIGeneratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIGenerator
     */
    omit?: AIGeneratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIGeneratorInclude<ExtArgs> | null
    where?: AIGeneratorWhereInput
  }

  /**
   * AIGenerateContent without action
   */
  export type AIGenerateContentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIGenerateContent
     */
    select?: AIGenerateContentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIGenerateContent
     */
    omit?: AIGenerateContentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIGenerateContentInclude<ExtArgs> | null
  }


  /**
   * Model Profile
   */

  export type AggregateProfile = {
    _count: ProfileCountAggregateOutputType | null
    _avg: ProfileAvgAggregateOutputType | null
    _sum: ProfileSumAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  export type ProfileAvgAggregateOutputType = {
    score: number | null
    grade: number | null
  }

  export type ProfileSumAggregateOutputType = {
    score: number | null
    grade: number | null
  }

  export type ProfileMinAggregateOutputType = {
    id: string | null
    score: number | null
    grade: number | null
    userID: string | null
    createdTime: Date | null
    updatedTime: Date | null
  }

  export type ProfileMaxAggregateOutputType = {
    id: string | null
    score: number | null
    grade: number | null
    userID: string | null
    createdTime: Date | null
    updatedTime: Date | null
  }

  export type ProfileCountAggregateOutputType = {
    id: number
    score: number
    grade: number
    userID: number
    createdTime: number
    updatedTime: number
    _all: number
  }


  export type ProfileAvgAggregateInputType = {
    score?: true
    grade?: true
  }

  export type ProfileSumAggregateInputType = {
    score?: true
    grade?: true
  }

  export type ProfileMinAggregateInputType = {
    id?: true
    score?: true
    grade?: true
    userID?: true
    createdTime?: true
    updatedTime?: true
  }

  export type ProfileMaxAggregateInputType = {
    id?: true
    score?: true
    grade?: true
    userID?: true
    createdTime?: true
    updatedTime?: true
  }

  export type ProfileCountAggregateInputType = {
    id?: true
    score?: true
    grade?: true
    userID?: true
    createdTime?: true
    updatedTime?: true
    _all?: true
  }

  export type ProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profile to aggregate.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Profiles
    **/
    _count?: true | ProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfileMaxAggregateInputType
  }

  export type GetProfileAggregateType<T extends ProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfile[P]>
      : GetScalarType<T[P], AggregateProfile[P]>
  }




  export type ProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfileWhereInput
    orderBy?: ProfileOrderByWithAggregationInput | ProfileOrderByWithAggregationInput[]
    by: ProfileScalarFieldEnum[] | ProfileScalarFieldEnum
    having?: ProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfileCountAggregateInputType | true
    _avg?: ProfileAvgAggregateInputType
    _sum?: ProfileSumAggregateInputType
    _min?: ProfileMinAggregateInputType
    _max?: ProfileMaxAggregateInputType
  }

  export type ProfileGroupByOutputType = {
    id: string
    score: number | null
    grade: number | null
    userID: string | null
    createdTime: Date
    updatedTime: Date
    _count: ProfileCountAggregateOutputType | null
    _avg: ProfileAvgAggregateOutputType | null
    _sum: ProfileSumAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  type GetProfileGroupByPayload<T extends ProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfileGroupByOutputType[P]>
            : GetScalarType<T[P], ProfileGroupByOutputType[P]>
        }
      >
    >


  export type ProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    score?: boolean
    grade?: boolean
    userID?: boolean
    createdTime?: boolean
    updatedTime?: boolean
    user?: boolean | Profile$userArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    score?: boolean
    grade?: boolean
    userID?: boolean
    createdTime?: boolean
    updatedTime?: boolean
    user?: boolean | Profile$userArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    score?: boolean
    grade?: boolean
    userID?: boolean
    createdTime?: boolean
    updatedTime?: boolean
    user?: boolean | Profile$userArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectScalar = {
    id?: boolean
    score?: boolean
    grade?: boolean
    userID?: boolean
    createdTime?: boolean
    updatedTime?: boolean
  }

  export type ProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "score" | "grade" | "userID" | "createdTime" | "updatedTime", ExtArgs["result"]["profile"]>
  export type ProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Profile$userArgs<ExtArgs>
  }
  export type ProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Profile$userArgs<ExtArgs>
  }
  export type ProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Profile$userArgs<ExtArgs>
  }

  export type $ProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Profile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      score: number | null
      grade: number | null
      userID: string | null
      createdTime: Date
      updatedTime: Date
    }, ExtArgs["result"]["profile"]>
    composites: {}
  }

  type ProfileGetPayload<S extends boolean | null | undefined | ProfileDefaultArgs> = $Result.GetResult<Prisma.$ProfilePayload, S>

  type ProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfileCountAggregateInputType | true
    }

  export interface ProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Profile'], meta: { name: 'Profile' } }
    /**
     * Find zero or one Profile that matches the filter.
     * @param {ProfileFindUniqueArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfileFindUniqueArgs>(args: SelectSubset<T, ProfileFindUniqueArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Profile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfileFindUniqueOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfileFindFirstArgs>(args?: SelectSubset<T, ProfileFindFirstArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profiles
     * const profiles = await prisma.profile.findMany()
     * 
     * // Get first 10 Profiles
     * const profiles = await prisma.profile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profileWithIdOnly = await prisma.profile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProfileFindManyArgs>(args?: SelectSubset<T, ProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Profile.
     * @param {ProfileCreateArgs} args - Arguments to create a Profile.
     * @example
     * // Create one Profile
     * const Profile = await prisma.profile.create({
     *   data: {
     *     // ... data to create a Profile
     *   }
     * })
     * 
     */
    create<T extends ProfileCreateArgs>(args: SelectSubset<T, ProfileCreateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Profiles.
     * @param {ProfileCreateManyArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfileCreateManyArgs>(args?: SelectSubset<T, ProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Profiles and returns the data saved in the database.
     * @param {ProfileCreateManyAndReturnArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Profiles and only return the `id`
     * const profileWithIdOnly = await prisma.profile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Profile.
     * @param {ProfileDeleteArgs} args - Arguments to delete one Profile.
     * @example
     * // Delete one Profile
     * const Profile = await prisma.profile.delete({
     *   where: {
     *     // ... filter to delete one Profile
     *   }
     * })
     * 
     */
    delete<T extends ProfileDeleteArgs>(args: SelectSubset<T, ProfileDeleteArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Profile.
     * @param {ProfileUpdateArgs} args - Arguments to update one Profile.
     * @example
     * // Update one Profile
     * const profile = await prisma.profile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfileUpdateArgs>(args: SelectSubset<T, ProfileUpdateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Profiles.
     * @param {ProfileDeleteManyArgs} args - Arguments to filter Profiles to delete.
     * @example
     * // Delete a few Profiles
     * const { count } = await prisma.profile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfileDeleteManyArgs>(args?: SelectSubset<T, ProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfileUpdateManyArgs>(args: SelectSubset<T, ProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles and returns the data updated in the database.
     * @param {ProfileUpdateManyAndReturnArgs} args - Arguments to update many Profiles.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Profiles and only return the `id`
     * const profileWithIdOnly = await prisma.profile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, ProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Profile.
     * @param {ProfileUpsertArgs} args - Arguments to update or create a Profile.
     * @example
     * // Update or create a Profile
     * const profile = await prisma.profile.upsert({
     *   create: {
     *     // ... data to create a Profile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profile we want to update
     *   }
     * })
     */
    upsert<T extends ProfileUpsertArgs>(args: SelectSubset<T, ProfileUpsertArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileCountArgs} args - Arguments to filter Profiles to count.
     * @example
     * // Count the number of Profiles
     * const count = await prisma.profile.count({
     *   where: {
     *     // ... the filter for the Profiles we want to count
     *   }
     * })
    **/
    count<T extends ProfileCountArgs>(
      args?: Subset<T, ProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProfileAggregateArgs>(args: Subset<T, ProfileAggregateArgs>): Prisma.PrismaPromise<GetProfileAggregateType<T>>

    /**
     * Group by Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfileGroupByArgs['orderBy'] }
        : { orderBy?: ProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Profile model
   */
  readonly fields: ProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Profile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Profile$userArgs<ExtArgs> = {}>(args?: Subset<T, Profile$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Profile model
   */
  interface ProfileFieldRefs {
    readonly id: FieldRef<"Profile", 'String'>
    readonly score: FieldRef<"Profile", 'Int'>
    readonly grade: FieldRef<"Profile", 'Int'>
    readonly userID: FieldRef<"Profile", 'String'>
    readonly createdTime: FieldRef<"Profile", 'DateTime'>
    readonly updatedTime: FieldRef<"Profile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Profile findUnique
   */
  export type ProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findUniqueOrThrow
   */
  export type ProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findFirst
   */
  export type ProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findFirstOrThrow
   */
  export type ProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findMany
   */
  export type ProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profiles to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile create
   */
  export type ProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a Profile.
     */
    data: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
  }

  /**
   * Profile createMany
   */
  export type ProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Profile createManyAndReturn
   */
  export type ProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Profile update
   */
  export type ProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a Profile.
     */
    data: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
    /**
     * Choose, which Profile to update.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile updateMany
   */
  export type ProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
  }

  /**
   * Profile updateManyAndReturn
   */
  export type ProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Profile upsert
   */
  export type ProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the Profile to update in case it exists.
     */
    where: ProfileWhereUniqueInput
    /**
     * In case the Profile found by the `where` argument doesn't exist, create a new Profile with this data.
     */
    create: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
    /**
     * In case the Profile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
  }

  /**
   * Profile delete
   */
  export type ProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter which Profile to delete.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile deleteMany
   */
  export type ProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profiles to delete
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to delete.
     */
    limit?: number
  }

  /**
   * Profile.user
   */
  export type Profile$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Profile without action
   */
  export type ProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
  }


  /**
   * Model Invite
   */

  export type AggregateInvite = {
    _count: InviteCountAggregateOutputType | null
    _min: InviteMinAggregateOutputType | null
    _max: InviteMaxAggregateOutputType | null
  }

  export type InviteMinAggregateOutputType = {
    id: string | null
    inviterId: string | null
    inviteeId: string | null
    createdTime: Date | null
    updatedTime: Date | null
  }

  export type InviteMaxAggregateOutputType = {
    id: string | null
    inviterId: string | null
    inviteeId: string | null
    createdTime: Date | null
    updatedTime: Date | null
  }

  export type InviteCountAggregateOutputType = {
    id: number
    inviterId: number
    inviteeId: number
    createdTime: number
    updatedTime: number
    _all: number
  }


  export type InviteMinAggregateInputType = {
    id?: true
    inviterId?: true
    inviteeId?: true
    createdTime?: true
    updatedTime?: true
  }

  export type InviteMaxAggregateInputType = {
    id?: true
    inviterId?: true
    inviteeId?: true
    createdTime?: true
    updatedTime?: true
  }

  export type InviteCountAggregateInputType = {
    id?: true
    inviterId?: true
    inviteeId?: true
    createdTime?: true
    updatedTime?: true
    _all?: true
  }

  export type InviteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invite to aggregate.
     */
    where?: InviteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invites to fetch.
     */
    orderBy?: InviteOrderByWithRelationInput | InviteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InviteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Invites
    **/
    _count?: true | InviteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InviteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InviteMaxAggregateInputType
  }

  export type GetInviteAggregateType<T extends InviteAggregateArgs> = {
        [P in keyof T & keyof AggregateInvite]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvite[P]>
      : GetScalarType<T[P], AggregateInvite[P]>
  }




  export type InviteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InviteWhereInput
    orderBy?: InviteOrderByWithAggregationInput | InviteOrderByWithAggregationInput[]
    by: InviteScalarFieldEnum[] | InviteScalarFieldEnum
    having?: InviteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InviteCountAggregateInputType | true
    _min?: InviteMinAggregateInputType
    _max?: InviteMaxAggregateInputType
  }

  export type InviteGroupByOutputType = {
    id: string
    inviterId: string | null
    inviteeId: string | null
    createdTime: Date
    updatedTime: Date
    _count: InviteCountAggregateOutputType | null
    _min: InviteMinAggregateOutputType | null
    _max: InviteMaxAggregateOutputType | null
  }

  type GetInviteGroupByPayload<T extends InviteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InviteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InviteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InviteGroupByOutputType[P]>
            : GetScalarType<T[P], InviteGroupByOutputType[P]>
        }
      >
    >


  export type InviteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    inviterId?: boolean
    inviteeId?: boolean
    createdTime?: boolean
    updatedTime?: boolean
    inviter?: boolean | Invite$inviterArgs<ExtArgs>
    invitee?: boolean | Invite$inviteeArgs<ExtArgs>
  }, ExtArgs["result"]["invite"]>

  export type InviteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    inviterId?: boolean
    inviteeId?: boolean
    createdTime?: boolean
    updatedTime?: boolean
    inviter?: boolean | Invite$inviterArgs<ExtArgs>
    invitee?: boolean | Invite$inviteeArgs<ExtArgs>
  }, ExtArgs["result"]["invite"]>

  export type InviteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    inviterId?: boolean
    inviteeId?: boolean
    createdTime?: boolean
    updatedTime?: boolean
    inviter?: boolean | Invite$inviterArgs<ExtArgs>
    invitee?: boolean | Invite$inviteeArgs<ExtArgs>
  }, ExtArgs["result"]["invite"]>

  export type InviteSelectScalar = {
    id?: boolean
    inviterId?: boolean
    inviteeId?: boolean
    createdTime?: boolean
    updatedTime?: boolean
  }

  export type InviteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "inviterId" | "inviteeId" | "createdTime" | "updatedTime", ExtArgs["result"]["invite"]>
  export type InviteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inviter?: boolean | Invite$inviterArgs<ExtArgs>
    invitee?: boolean | Invite$inviteeArgs<ExtArgs>
  }
  export type InviteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inviter?: boolean | Invite$inviterArgs<ExtArgs>
    invitee?: boolean | Invite$inviteeArgs<ExtArgs>
  }
  export type InviteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inviter?: boolean | Invite$inviterArgs<ExtArgs>
    invitee?: boolean | Invite$inviteeArgs<ExtArgs>
  }

  export type $InvitePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Invite"
    objects: {
      inviter: Prisma.$UserPayload<ExtArgs> | null
      invitee: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      inviterId: string | null
      inviteeId: string | null
      createdTime: Date
      updatedTime: Date
    }, ExtArgs["result"]["invite"]>
    composites: {}
  }

  type InviteGetPayload<S extends boolean | null | undefined | InviteDefaultArgs> = $Result.GetResult<Prisma.$InvitePayload, S>

  type InviteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InviteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InviteCountAggregateInputType | true
    }

  export interface InviteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Invite'], meta: { name: 'Invite' } }
    /**
     * Find zero or one Invite that matches the filter.
     * @param {InviteFindUniqueArgs} args - Arguments to find a Invite
     * @example
     * // Get one Invite
     * const invite = await prisma.invite.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InviteFindUniqueArgs>(args: SelectSubset<T, InviteFindUniqueArgs<ExtArgs>>): Prisma__InviteClient<$Result.GetResult<Prisma.$InvitePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Invite that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InviteFindUniqueOrThrowArgs} args - Arguments to find a Invite
     * @example
     * // Get one Invite
     * const invite = await prisma.invite.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InviteFindUniqueOrThrowArgs>(args: SelectSubset<T, InviteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InviteClient<$Result.GetResult<Prisma.$InvitePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invite that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InviteFindFirstArgs} args - Arguments to find a Invite
     * @example
     * // Get one Invite
     * const invite = await prisma.invite.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InviteFindFirstArgs>(args?: SelectSubset<T, InviteFindFirstArgs<ExtArgs>>): Prisma__InviteClient<$Result.GetResult<Prisma.$InvitePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Invite that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InviteFindFirstOrThrowArgs} args - Arguments to find a Invite
     * @example
     * // Get one Invite
     * const invite = await prisma.invite.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InviteFindFirstOrThrowArgs>(args?: SelectSubset<T, InviteFindFirstOrThrowArgs<ExtArgs>>): Prisma__InviteClient<$Result.GetResult<Prisma.$InvitePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Invites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InviteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Invites
     * const invites = await prisma.invite.findMany()
     * 
     * // Get first 10 Invites
     * const invites = await prisma.invite.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inviteWithIdOnly = await prisma.invite.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InviteFindManyArgs>(args?: SelectSubset<T, InviteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvitePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Invite.
     * @param {InviteCreateArgs} args - Arguments to create a Invite.
     * @example
     * // Create one Invite
     * const Invite = await prisma.invite.create({
     *   data: {
     *     // ... data to create a Invite
     *   }
     * })
     * 
     */
    create<T extends InviteCreateArgs>(args: SelectSubset<T, InviteCreateArgs<ExtArgs>>): Prisma__InviteClient<$Result.GetResult<Prisma.$InvitePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Invites.
     * @param {InviteCreateManyArgs} args - Arguments to create many Invites.
     * @example
     * // Create many Invites
     * const invite = await prisma.invite.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InviteCreateManyArgs>(args?: SelectSubset<T, InviteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Invites and returns the data saved in the database.
     * @param {InviteCreateManyAndReturnArgs} args - Arguments to create many Invites.
     * @example
     * // Create many Invites
     * const invite = await prisma.invite.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Invites and only return the `id`
     * const inviteWithIdOnly = await prisma.invite.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InviteCreateManyAndReturnArgs>(args?: SelectSubset<T, InviteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvitePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Invite.
     * @param {InviteDeleteArgs} args - Arguments to delete one Invite.
     * @example
     * // Delete one Invite
     * const Invite = await prisma.invite.delete({
     *   where: {
     *     // ... filter to delete one Invite
     *   }
     * })
     * 
     */
    delete<T extends InviteDeleteArgs>(args: SelectSubset<T, InviteDeleteArgs<ExtArgs>>): Prisma__InviteClient<$Result.GetResult<Prisma.$InvitePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Invite.
     * @param {InviteUpdateArgs} args - Arguments to update one Invite.
     * @example
     * // Update one Invite
     * const invite = await prisma.invite.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InviteUpdateArgs>(args: SelectSubset<T, InviteUpdateArgs<ExtArgs>>): Prisma__InviteClient<$Result.GetResult<Prisma.$InvitePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Invites.
     * @param {InviteDeleteManyArgs} args - Arguments to filter Invites to delete.
     * @example
     * // Delete a few Invites
     * const { count } = await prisma.invite.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InviteDeleteManyArgs>(args?: SelectSubset<T, InviteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InviteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Invites
     * const invite = await prisma.invite.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InviteUpdateManyArgs>(args: SelectSubset<T, InviteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Invites and returns the data updated in the database.
     * @param {InviteUpdateManyAndReturnArgs} args - Arguments to update many Invites.
     * @example
     * // Update many Invites
     * const invite = await prisma.invite.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Invites and only return the `id`
     * const inviteWithIdOnly = await prisma.invite.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InviteUpdateManyAndReturnArgs>(args: SelectSubset<T, InviteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InvitePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Invite.
     * @param {InviteUpsertArgs} args - Arguments to update or create a Invite.
     * @example
     * // Update or create a Invite
     * const invite = await prisma.invite.upsert({
     *   create: {
     *     // ... data to create a Invite
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Invite we want to update
     *   }
     * })
     */
    upsert<T extends InviteUpsertArgs>(args: SelectSubset<T, InviteUpsertArgs<ExtArgs>>): Prisma__InviteClient<$Result.GetResult<Prisma.$InvitePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Invites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InviteCountArgs} args - Arguments to filter Invites to count.
     * @example
     * // Count the number of Invites
     * const count = await prisma.invite.count({
     *   where: {
     *     // ... the filter for the Invites we want to count
     *   }
     * })
    **/
    count<T extends InviteCountArgs>(
      args?: Subset<T, InviteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InviteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Invite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InviteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InviteAggregateArgs>(args: Subset<T, InviteAggregateArgs>): Prisma.PrismaPromise<GetInviteAggregateType<T>>

    /**
     * Group by Invite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InviteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InviteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InviteGroupByArgs['orderBy'] }
        : { orderBy?: InviteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InviteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInviteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Invite model
   */
  readonly fields: InviteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Invite.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InviteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    inviter<T extends Invite$inviterArgs<ExtArgs> = {}>(args?: Subset<T, Invite$inviterArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    invitee<T extends Invite$inviteeArgs<ExtArgs> = {}>(args?: Subset<T, Invite$inviteeArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Invite model
   */
  interface InviteFieldRefs {
    readonly id: FieldRef<"Invite", 'String'>
    readonly inviterId: FieldRef<"Invite", 'String'>
    readonly inviteeId: FieldRef<"Invite", 'String'>
    readonly createdTime: FieldRef<"Invite", 'DateTime'>
    readonly updatedTime: FieldRef<"Invite", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Invite findUnique
   */
  export type InviteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invite
     */
    select?: InviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invite
     */
    omit?: InviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InviteInclude<ExtArgs> | null
    /**
     * Filter, which Invite to fetch.
     */
    where: InviteWhereUniqueInput
  }

  /**
   * Invite findUniqueOrThrow
   */
  export type InviteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invite
     */
    select?: InviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invite
     */
    omit?: InviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InviteInclude<ExtArgs> | null
    /**
     * Filter, which Invite to fetch.
     */
    where: InviteWhereUniqueInput
  }

  /**
   * Invite findFirst
   */
  export type InviteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invite
     */
    select?: InviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invite
     */
    omit?: InviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InviteInclude<ExtArgs> | null
    /**
     * Filter, which Invite to fetch.
     */
    where?: InviteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invites to fetch.
     */
    orderBy?: InviteOrderByWithRelationInput | InviteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invites.
     */
    cursor?: InviteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invites.
     */
    distinct?: InviteScalarFieldEnum | InviteScalarFieldEnum[]
  }

  /**
   * Invite findFirstOrThrow
   */
  export type InviteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invite
     */
    select?: InviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invite
     */
    omit?: InviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InviteInclude<ExtArgs> | null
    /**
     * Filter, which Invite to fetch.
     */
    where?: InviteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invites to fetch.
     */
    orderBy?: InviteOrderByWithRelationInput | InviteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Invites.
     */
    cursor?: InviteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Invites.
     */
    distinct?: InviteScalarFieldEnum | InviteScalarFieldEnum[]
  }

  /**
   * Invite findMany
   */
  export type InviteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invite
     */
    select?: InviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invite
     */
    omit?: InviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InviteInclude<ExtArgs> | null
    /**
     * Filter, which Invites to fetch.
     */
    where?: InviteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Invites to fetch.
     */
    orderBy?: InviteOrderByWithRelationInput | InviteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Invites.
     */
    cursor?: InviteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Invites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Invites.
     */
    skip?: number
    distinct?: InviteScalarFieldEnum | InviteScalarFieldEnum[]
  }

  /**
   * Invite create
   */
  export type InviteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invite
     */
    select?: InviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invite
     */
    omit?: InviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InviteInclude<ExtArgs> | null
    /**
     * The data needed to create a Invite.
     */
    data: XOR<InviteCreateInput, InviteUncheckedCreateInput>
  }

  /**
   * Invite createMany
   */
  export type InviteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Invites.
     */
    data: InviteCreateManyInput | InviteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Invite createManyAndReturn
   */
  export type InviteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invite
     */
    select?: InviteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Invite
     */
    omit?: InviteOmit<ExtArgs> | null
    /**
     * The data used to create many Invites.
     */
    data: InviteCreateManyInput | InviteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InviteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Invite update
   */
  export type InviteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invite
     */
    select?: InviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invite
     */
    omit?: InviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InviteInclude<ExtArgs> | null
    /**
     * The data needed to update a Invite.
     */
    data: XOR<InviteUpdateInput, InviteUncheckedUpdateInput>
    /**
     * Choose, which Invite to update.
     */
    where: InviteWhereUniqueInput
  }

  /**
   * Invite updateMany
   */
  export type InviteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Invites.
     */
    data: XOR<InviteUpdateManyMutationInput, InviteUncheckedUpdateManyInput>
    /**
     * Filter which Invites to update
     */
    where?: InviteWhereInput
    /**
     * Limit how many Invites to update.
     */
    limit?: number
  }

  /**
   * Invite updateManyAndReturn
   */
  export type InviteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invite
     */
    select?: InviteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Invite
     */
    omit?: InviteOmit<ExtArgs> | null
    /**
     * The data used to update Invites.
     */
    data: XOR<InviteUpdateManyMutationInput, InviteUncheckedUpdateManyInput>
    /**
     * Filter which Invites to update
     */
    where?: InviteWhereInput
    /**
     * Limit how many Invites to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InviteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Invite upsert
   */
  export type InviteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invite
     */
    select?: InviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invite
     */
    omit?: InviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InviteInclude<ExtArgs> | null
    /**
     * The filter to search for the Invite to update in case it exists.
     */
    where: InviteWhereUniqueInput
    /**
     * In case the Invite found by the `where` argument doesn't exist, create a new Invite with this data.
     */
    create: XOR<InviteCreateInput, InviteUncheckedCreateInput>
    /**
     * In case the Invite was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InviteUpdateInput, InviteUncheckedUpdateInput>
  }

  /**
   * Invite delete
   */
  export type InviteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invite
     */
    select?: InviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invite
     */
    omit?: InviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InviteInclude<ExtArgs> | null
    /**
     * Filter which Invite to delete.
     */
    where: InviteWhereUniqueInput
  }

  /**
   * Invite deleteMany
   */
  export type InviteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Invites to delete
     */
    where?: InviteWhereInput
    /**
     * Limit how many Invites to delete.
     */
    limit?: number
  }

  /**
   * Invite.inviter
   */
  export type Invite$inviterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Invite.invitee
   */
  export type Invite$inviteeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Invite without action
   */
  export type InviteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Invite
     */
    select?: InviteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Invite
     */
    omit?: InviteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InviteInclude<ExtArgs> | null
  }


  /**
   * Model Resume
   */

  export type AggregateResume = {
    _count: ResumeCountAggregateOutputType | null
    _avg: ResumeAvgAggregateOutputType | null
    _sum: ResumeSumAggregateOutputType | null
    _min: ResumeMinAggregateOutputType | null
    _max: ResumeMaxAggregateOutputType | null
  }

  export type ResumeAvgAggregateOutputType = {
    age: number | null
  }

  export type ResumeSumAggregateOutputType = {
    age: number | null
  }

  export type ResumeMinAggregateOutputType = {
    id: string | null
    title: string | null
    realname: string | null
    age: number | null
    education: string | null
    address: string | null
    mobile: string | null
    email: string | null
    avatar: string | null
    status: string | null
    industry: string | null
    userId: string | null
    templateId: string | null
    createdTime: Date | null
    updatedTime: Date | null
  }

  export type ResumeMaxAggregateOutputType = {
    id: string | null
    title: string | null
    realname: string | null
    age: number | null
    education: string | null
    address: string | null
    mobile: string | null
    email: string | null
    avatar: string | null
    status: string | null
    industry: string | null
    userId: string | null
    templateId: string | null
    createdTime: Date | null
    updatedTime: Date | null
  }

  export type ResumeCountAggregateOutputType = {
    id: number
    title: number
    realname: number
    age: number
    education: number
    address: number
    mobile: number
    email: number
    avatar: number
    status: number
    industry: number
    userId: number
    templateId: number
    createdTime: number
    updatedTime: number
    _all: number
  }


  export type ResumeAvgAggregateInputType = {
    age?: true
  }

  export type ResumeSumAggregateInputType = {
    age?: true
  }

  export type ResumeMinAggregateInputType = {
    id?: true
    title?: true
    realname?: true
    age?: true
    education?: true
    address?: true
    mobile?: true
    email?: true
    avatar?: true
    status?: true
    industry?: true
    userId?: true
    templateId?: true
    createdTime?: true
    updatedTime?: true
  }

  export type ResumeMaxAggregateInputType = {
    id?: true
    title?: true
    realname?: true
    age?: true
    education?: true
    address?: true
    mobile?: true
    email?: true
    avatar?: true
    status?: true
    industry?: true
    userId?: true
    templateId?: true
    createdTime?: true
    updatedTime?: true
  }

  export type ResumeCountAggregateInputType = {
    id?: true
    title?: true
    realname?: true
    age?: true
    education?: true
    address?: true
    mobile?: true
    email?: true
    avatar?: true
    status?: true
    industry?: true
    userId?: true
    templateId?: true
    createdTime?: true
    updatedTime?: true
    _all?: true
  }

  export type ResumeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Resume to aggregate.
     */
    where?: ResumeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resumes to fetch.
     */
    orderBy?: ResumeOrderByWithRelationInput | ResumeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResumeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resumes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resumes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Resumes
    **/
    _count?: true | ResumeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ResumeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ResumeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResumeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResumeMaxAggregateInputType
  }

  export type GetResumeAggregateType<T extends ResumeAggregateArgs> = {
        [P in keyof T & keyof AggregateResume]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResume[P]>
      : GetScalarType<T[P], AggregateResume[P]>
  }




  export type ResumeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResumeWhereInput
    orderBy?: ResumeOrderByWithAggregationInput | ResumeOrderByWithAggregationInput[]
    by: ResumeScalarFieldEnum[] | ResumeScalarFieldEnum
    having?: ResumeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResumeCountAggregateInputType | true
    _avg?: ResumeAvgAggregateInputType
    _sum?: ResumeSumAggregateInputType
    _min?: ResumeMinAggregateInputType
    _max?: ResumeMaxAggregateInputType
  }

  export type ResumeGroupByOutputType = {
    id: string
    title: string
    realname: string | null
    age: number | null
    education: string | null
    address: string | null
    mobile: string | null
    email: string | null
    avatar: string | null
    status: string | null
    industry: string | null
    userId: string | null
    templateId: string | null
    createdTime: Date
    updatedTime: Date
    _count: ResumeCountAggregateOutputType | null
    _avg: ResumeAvgAggregateOutputType | null
    _sum: ResumeSumAggregateOutputType | null
    _min: ResumeMinAggregateOutputType | null
    _max: ResumeMaxAggregateOutputType | null
  }

  type GetResumeGroupByPayload<T extends ResumeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResumeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResumeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResumeGroupByOutputType[P]>
            : GetScalarType<T[P], ResumeGroupByOutputType[P]>
        }
      >
    >


  export type ResumeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    realname?: boolean
    age?: boolean
    education?: boolean
    address?: boolean
    mobile?: boolean
    email?: boolean
    avatar?: boolean
    status?: boolean
    industry?: boolean
    userId?: boolean
    templateId?: boolean
    createdTime?: boolean
    updatedTime?: boolean
    works?: boolean | Resume$worksArgs<ExtArgs>
    projects?: boolean | Resume$projectsArgs<ExtArgs>
    user?: boolean | Resume$userArgs<ExtArgs>
    template?: boolean | Resume$templateArgs<ExtArgs>
    _count?: boolean | ResumeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resume"]>

  export type ResumeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    realname?: boolean
    age?: boolean
    education?: boolean
    address?: boolean
    mobile?: boolean
    email?: boolean
    avatar?: boolean
    status?: boolean
    industry?: boolean
    userId?: boolean
    templateId?: boolean
    createdTime?: boolean
    updatedTime?: boolean
    user?: boolean | Resume$userArgs<ExtArgs>
    template?: boolean | Resume$templateArgs<ExtArgs>
  }, ExtArgs["result"]["resume"]>

  export type ResumeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    realname?: boolean
    age?: boolean
    education?: boolean
    address?: boolean
    mobile?: boolean
    email?: boolean
    avatar?: boolean
    status?: boolean
    industry?: boolean
    userId?: boolean
    templateId?: boolean
    createdTime?: boolean
    updatedTime?: boolean
    user?: boolean | Resume$userArgs<ExtArgs>
    template?: boolean | Resume$templateArgs<ExtArgs>
  }, ExtArgs["result"]["resume"]>

  export type ResumeSelectScalar = {
    id?: boolean
    title?: boolean
    realname?: boolean
    age?: boolean
    education?: boolean
    address?: boolean
    mobile?: boolean
    email?: boolean
    avatar?: boolean
    status?: boolean
    industry?: boolean
    userId?: boolean
    templateId?: boolean
    createdTime?: boolean
    updatedTime?: boolean
  }

  export type ResumeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "realname" | "age" | "education" | "address" | "mobile" | "email" | "avatar" | "status" | "industry" | "userId" | "templateId" | "createdTime" | "updatedTime", ExtArgs["result"]["resume"]>
  export type ResumeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    works?: boolean | Resume$worksArgs<ExtArgs>
    projects?: boolean | Resume$projectsArgs<ExtArgs>
    user?: boolean | Resume$userArgs<ExtArgs>
    template?: boolean | Resume$templateArgs<ExtArgs>
    _count?: boolean | ResumeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ResumeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Resume$userArgs<ExtArgs>
    template?: boolean | Resume$templateArgs<ExtArgs>
  }
  export type ResumeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Resume$userArgs<ExtArgs>
    template?: boolean | Resume$templateArgs<ExtArgs>
  }

  export type $ResumePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Resume"
    objects: {
      works: Prisma.$WorksPayload<ExtArgs>[]
      projects: Prisma.$ProjectsPayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs> | null
      template: Prisma.$TemplatePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      realname: string | null
      age: number | null
      education: string | null
      address: string | null
      mobile: string | null
      email: string | null
      avatar: string | null
      status: string | null
      industry: string | null
      userId: string | null
      templateId: string | null
      createdTime: Date
      updatedTime: Date
    }, ExtArgs["result"]["resume"]>
    composites: {}
  }

  type ResumeGetPayload<S extends boolean | null | undefined | ResumeDefaultArgs> = $Result.GetResult<Prisma.$ResumePayload, S>

  type ResumeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ResumeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ResumeCountAggregateInputType | true
    }

  export interface ResumeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Resume'], meta: { name: 'Resume' } }
    /**
     * Find zero or one Resume that matches the filter.
     * @param {ResumeFindUniqueArgs} args - Arguments to find a Resume
     * @example
     * // Get one Resume
     * const resume = await prisma.resume.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ResumeFindUniqueArgs>(args: SelectSubset<T, ResumeFindUniqueArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Resume that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ResumeFindUniqueOrThrowArgs} args - Arguments to find a Resume
     * @example
     * // Get one Resume
     * const resume = await prisma.resume.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ResumeFindUniqueOrThrowArgs>(args: SelectSubset<T, ResumeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Resume that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeFindFirstArgs} args - Arguments to find a Resume
     * @example
     * // Get one Resume
     * const resume = await prisma.resume.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ResumeFindFirstArgs>(args?: SelectSubset<T, ResumeFindFirstArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Resume that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeFindFirstOrThrowArgs} args - Arguments to find a Resume
     * @example
     * // Get one Resume
     * const resume = await prisma.resume.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ResumeFindFirstOrThrowArgs>(args?: SelectSubset<T, ResumeFindFirstOrThrowArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Resumes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Resumes
     * const resumes = await prisma.resume.findMany()
     * 
     * // Get first 10 Resumes
     * const resumes = await prisma.resume.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const resumeWithIdOnly = await prisma.resume.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ResumeFindManyArgs>(args?: SelectSubset<T, ResumeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Resume.
     * @param {ResumeCreateArgs} args - Arguments to create a Resume.
     * @example
     * // Create one Resume
     * const Resume = await prisma.resume.create({
     *   data: {
     *     // ... data to create a Resume
     *   }
     * })
     * 
     */
    create<T extends ResumeCreateArgs>(args: SelectSubset<T, ResumeCreateArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Resumes.
     * @param {ResumeCreateManyArgs} args - Arguments to create many Resumes.
     * @example
     * // Create many Resumes
     * const resume = await prisma.resume.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ResumeCreateManyArgs>(args?: SelectSubset<T, ResumeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Resumes and returns the data saved in the database.
     * @param {ResumeCreateManyAndReturnArgs} args - Arguments to create many Resumes.
     * @example
     * // Create many Resumes
     * const resume = await prisma.resume.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Resumes and only return the `id`
     * const resumeWithIdOnly = await prisma.resume.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ResumeCreateManyAndReturnArgs>(args?: SelectSubset<T, ResumeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Resume.
     * @param {ResumeDeleteArgs} args - Arguments to delete one Resume.
     * @example
     * // Delete one Resume
     * const Resume = await prisma.resume.delete({
     *   where: {
     *     // ... filter to delete one Resume
     *   }
     * })
     * 
     */
    delete<T extends ResumeDeleteArgs>(args: SelectSubset<T, ResumeDeleteArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Resume.
     * @param {ResumeUpdateArgs} args - Arguments to update one Resume.
     * @example
     * // Update one Resume
     * const resume = await prisma.resume.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ResumeUpdateArgs>(args: SelectSubset<T, ResumeUpdateArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Resumes.
     * @param {ResumeDeleteManyArgs} args - Arguments to filter Resumes to delete.
     * @example
     * // Delete a few Resumes
     * const { count } = await prisma.resume.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ResumeDeleteManyArgs>(args?: SelectSubset<T, ResumeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Resumes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Resumes
     * const resume = await prisma.resume.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ResumeUpdateManyArgs>(args: SelectSubset<T, ResumeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Resumes and returns the data updated in the database.
     * @param {ResumeUpdateManyAndReturnArgs} args - Arguments to update many Resumes.
     * @example
     * // Update many Resumes
     * const resume = await prisma.resume.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Resumes and only return the `id`
     * const resumeWithIdOnly = await prisma.resume.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ResumeUpdateManyAndReturnArgs>(args: SelectSubset<T, ResumeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Resume.
     * @param {ResumeUpsertArgs} args - Arguments to update or create a Resume.
     * @example
     * // Update or create a Resume
     * const resume = await prisma.resume.upsert({
     *   create: {
     *     // ... data to create a Resume
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Resume we want to update
     *   }
     * })
     */
    upsert<T extends ResumeUpsertArgs>(args: SelectSubset<T, ResumeUpsertArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Resumes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeCountArgs} args - Arguments to filter Resumes to count.
     * @example
     * // Count the number of Resumes
     * const count = await prisma.resume.count({
     *   where: {
     *     // ... the filter for the Resumes we want to count
     *   }
     * })
    **/
    count<T extends ResumeCountArgs>(
      args?: Subset<T, ResumeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResumeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Resume.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ResumeAggregateArgs>(args: Subset<T, ResumeAggregateArgs>): Prisma.PrismaPromise<GetResumeAggregateType<T>>

    /**
     * Group by Resume.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResumeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ResumeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResumeGroupByArgs['orderBy'] }
        : { orderBy?: ResumeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ResumeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResumeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Resume model
   */
  readonly fields: ResumeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Resume.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResumeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    works<T extends Resume$worksArgs<ExtArgs> = {}>(args?: Subset<T, Resume$worksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    projects<T extends Resume$projectsArgs<ExtArgs> = {}>(args?: Subset<T, Resume$projectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends Resume$userArgs<ExtArgs> = {}>(args?: Subset<T, Resume$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    template<T extends Resume$templateArgs<ExtArgs> = {}>(args?: Subset<T, Resume$templateArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Resume model
   */
  interface ResumeFieldRefs {
    readonly id: FieldRef<"Resume", 'String'>
    readonly title: FieldRef<"Resume", 'String'>
    readonly realname: FieldRef<"Resume", 'String'>
    readonly age: FieldRef<"Resume", 'Int'>
    readonly education: FieldRef<"Resume", 'String'>
    readonly address: FieldRef<"Resume", 'String'>
    readonly mobile: FieldRef<"Resume", 'String'>
    readonly email: FieldRef<"Resume", 'String'>
    readonly avatar: FieldRef<"Resume", 'String'>
    readonly status: FieldRef<"Resume", 'String'>
    readonly industry: FieldRef<"Resume", 'String'>
    readonly userId: FieldRef<"Resume", 'String'>
    readonly templateId: FieldRef<"Resume", 'String'>
    readonly createdTime: FieldRef<"Resume", 'DateTime'>
    readonly updatedTime: FieldRef<"Resume", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Resume findUnique
   */
  export type ResumeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * Filter, which Resume to fetch.
     */
    where: ResumeWhereUniqueInput
  }

  /**
   * Resume findUniqueOrThrow
   */
  export type ResumeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * Filter, which Resume to fetch.
     */
    where: ResumeWhereUniqueInput
  }

  /**
   * Resume findFirst
   */
  export type ResumeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * Filter, which Resume to fetch.
     */
    where?: ResumeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resumes to fetch.
     */
    orderBy?: ResumeOrderByWithRelationInput | ResumeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Resumes.
     */
    cursor?: ResumeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resumes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resumes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Resumes.
     */
    distinct?: ResumeScalarFieldEnum | ResumeScalarFieldEnum[]
  }

  /**
   * Resume findFirstOrThrow
   */
  export type ResumeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * Filter, which Resume to fetch.
     */
    where?: ResumeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resumes to fetch.
     */
    orderBy?: ResumeOrderByWithRelationInput | ResumeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Resumes.
     */
    cursor?: ResumeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resumes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resumes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Resumes.
     */
    distinct?: ResumeScalarFieldEnum | ResumeScalarFieldEnum[]
  }

  /**
   * Resume findMany
   */
  export type ResumeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * Filter, which Resumes to fetch.
     */
    where?: ResumeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resumes to fetch.
     */
    orderBy?: ResumeOrderByWithRelationInput | ResumeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Resumes.
     */
    cursor?: ResumeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resumes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resumes.
     */
    skip?: number
    distinct?: ResumeScalarFieldEnum | ResumeScalarFieldEnum[]
  }

  /**
   * Resume create
   */
  export type ResumeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * The data needed to create a Resume.
     */
    data: XOR<ResumeCreateInput, ResumeUncheckedCreateInput>
  }

  /**
   * Resume createMany
   */
  export type ResumeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Resumes.
     */
    data: ResumeCreateManyInput | ResumeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Resume createManyAndReturn
   */
  export type ResumeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * The data used to create many Resumes.
     */
    data: ResumeCreateManyInput | ResumeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Resume update
   */
  export type ResumeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * The data needed to update a Resume.
     */
    data: XOR<ResumeUpdateInput, ResumeUncheckedUpdateInput>
    /**
     * Choose, which Resume to update.
     */
    where: ResumeWhereUniqueInput
  }

  /**
   * Resume updateMany
   */
  export type ResumeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Resumes.
     */
    data: XOR<ResumeUpdateManyMutationInput, ResumeUncheckedUpdateManyInput>
    /**
     * Filter which Resumes to update
     */
    where?: ResumeWhereInput
    /**
     * Limit how many Resumes to update.
     */
    limit?: number
  }

  /**
   * Resume updateManyAndReturn
   */
  export type ResumeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * The data used to update Resumes.
     */
    data: XOR<ResumeUpdateManyMutationInput, ResumeUncheckedUpdateManyInput>
    /**
     * Filter which Resumes to update
     */
    where?: ResumeWhereInput
    /**
     * Limit how many Resumes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Resume upsert
   */
  export type ResumeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * The filter to search for the Resume to update in case it exists.
     */
    where: ResumeWhereUniqueInput
    /**
     * In case the Resume found by the `where` argument doesn't exist, create a new Resume with this data.
     */
    create: XOR<ResumeCreateInput, ResumeUncheckedCreateInput>
    /**
     * In case the Resume was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResumeUpdateInput, ResumeUncheckedUpdateInput>
  }

  /**
   * Resume delete
   */
  export type ResumeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    /**
     * Filter which Resume to delete.
     */
    where: ResumeWhereUniqueInput
  }

  /**
   * Resume deleteMany
   */
  export type ResumeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Resumes to delete
     */
    where?: ResumeWhereInput
    /**
     * Limit how many Resumes to delete.
     */
    limit?: number
  }

  /**
   * Resume.works
   */
  export type Resume$worksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Works
     */
    select?: WorksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Works
     */
    omit?: WorksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorksInclude<ExtArgs> | null
    where?: WorksWhereInput
    orderBy?: WorksOrderByWithRelationInput | WorksOrderByWithRelationInput[]
    cursor?: WorksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorksScalarFieldEnum | WorksScalarFieldEnum[]
  }

  /**
   * Resume.projects
   */
  export type Resume$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projects
     */
    select?: ProjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projects
     */
    omit?: ProjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectsInclude<ExtArgs> | null
    where?: ProjectsWhereInput
    orderBy?: ProjectsOrderByWithRelationInput | ProjectsOrderByWithRelationInput[]
    cursor?: ProjectsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectsScalarFieldEnum | ProjectsScalarFieldEnum[]
  }

  /**
   * Resume.user
   */
  export type Resume$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Resume.template
   */
  export type Resume$templateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    where?: TemplateWhereInput
  }

  /**
   * Resume without action
   */
  export type ResumeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
  }


  /**
   * Model Works
   */

  export type AggregateWorks = {
    _count: WorksCountAggregateOutputType | null
    _min: WorksMinAggregateOutputType | null
    _max: WorksMaxAggregateOutputType | null
  }

  export type WorksMinAggregateOutputType = {
    id: string | null
    content: string | null
    resumeId: string | null
    createdTime: Date | null
    updatedTime: Date | null
  }

  export type WorksMaxAggregateOutputType = {
    id: string | null
    content: string | null
    resumeId: string | null
    createdTime: Date | null
    updatedTime: Date | null
  }

  export type WorksCountAggregateOutputType = {
    id: number
    content: number
    resumeId: number
    createdTime: number
    updatedTime: number
    _all: number
  }


  export type WorksMinAggregateInputType = {
    id?: true
    content?: true
    resumeId?: true
    createdTime?: true
    updatedTime?: true
  }

  export type WorksMaxAggregateInputType = {
    id?: true
    content?: true
    resumeId?: true
    createdTime?: true
    updatedTime?: true
  }

  export type WorksCountAggregateInputType = {
    id?: true
    content?: true
    resumeId?: true
    createdTime?: true
    updatedTime?: true
    _all?: true
  }

  export type WorksAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Works to aggregate.
     */
    where?: WorksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Works to fetch.
     */
    orderBy?: WorksOrderByWithRelationInput | WorksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Works from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Works.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Works
    **/
    _count?: true | WorksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorksMaxAggregateInputType
  }

  export type GetWorksAggregateType<T extends WorksAggregateArgs> = {
        [P in keyof T & keyof AggregateWorks]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorks[P]>
      : GetScalarType<T[P], AggregateWorks[P]>
  }




  export type WorksGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorksWhereInput
    orderBy?: WorksOrderByWithAggregationInput | WorksOrderByWithAggregationInput[]
    by: WorksScalarFieldEnum[] | WorksScalarFieldEnum
    having?: WorksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorksCountAggregateInputType | true
    _min?: WorksMinAggregateInputType
    _max?: WorksMaxAggregateInputType
  }

  export type WorksGroupByOutputType = {
    id: string
    content: string
    resumeId: string
    createdTime: Date
    updatedTime: Date
    _count: WorksCountAggregateOutputType | null
    _min: WorksMinAggregateOutputType | null
    _max: WorksMaxAggregateOutputType | null
  }

  type GetWorksGroupByPayload<T extends WorksGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorksGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorksGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorksGroupByOutputType[P]>
            : GetScalarType<T[P], WorksGroupByOutputType[P]>
        }
      >
    >


  export type WorksSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    resumeId?: boolean
    createdTime?: boolean
    updatedTime?: boolean
    resume?: boolean | Works$resumeArgs<ExtArgs>
  }, ExtArgs["result"]["works"]>

  export type WorksSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    resumeId?: boolean
    createdTime?: boolean
    updatedTime?: boolean
    resume?: boolean | Works$resumeArgs<ExtArgs>
  }, ExtArgs["result"]["works"]>

  export type WorksSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    resumeId?: boolean
    createdTime?: boolean
    updatedTime?: boolean
    resume?: boolean | Works$resumeArgs<ExtArgs>
  }, ExtArgs["result"]["works"]>

  export type WorksSelectScalar = {
    id?: boolean
    content?: boolean
    resumeId?: boolean
    createdTime?: boolean
    updatedTime?: boolean
  }

  export type WorksOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "resumeId" | "createdTime" | "updatedTime", ExtArgs["result"]["works"]>
  export type WorksInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resume?: boolean | Works$resumeArgs<ExtArgs>
  }
  export type WorksIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resume?: boolean | Works$resumeArgs<ExtArgs>
  }
  export type WorksIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resume?: boolean | Works$resumeArgs<ExtArgs>
  }

  export type $WorksPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Works"
    objects: {
      resume: Prisma.$ResumePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      content: string
      resumeId: string
      createdTime: Date
      updatedTime: Date
    }, ExtArgs["result"]["works"]>
    composites: {}
  }

  type WorksGetPayload<S extends boolean | null | undefined | WorksDefaultArgs> = $Result.GetResult<Prisma.$WorksPayload, S>

  type WorksCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorksFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorksCountAggregateInputType | true
    }

  export interface WorksDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Works'], meta: { name: 'Works' } }
    /**
     * Find zero or one Works that matches the filter.
     * @param {WorksFindUniqueArgs} args - Arguments to find a Works
     * @example
     * // Get one Works
     * const works = await prisma.works.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorksFindUniqueArgs>(args: SelectSubset<T, WorksFindUniqueArgs<ExtArgs>>): Prisma__WorksClient<$Result.GetResult<Prisma.$WorksPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Works that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorksFindUniqueOrThrowArgs} args - Arguments to find a Works
     * @example
     * // Get one Works
     * const works = await prisma.works.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorksFindUniqueOrThrowArgs>(args: SelectSubset<T, WorksFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorksClient<$Result.GetResult<Prisma.$WorksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Works that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorksFindFirstArgs} args - Arguments to find a Works
     * @example
     * // Get one Works
     * const works = await prisma.works.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorksFindFirstArgs>(args?: SelectSubset<T, WorksFindFirstArgs<ExtArgs>>): Prisma__WorksClient<$Result.GetResult<Prisma.$WorksPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Works that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorksFindFirstOrThrowArgs} args - Arguments to find a Works
     * @example
     * // Get one Works
     * const works = await prisma.works.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorksFindFirstOrThrowArgs>(args?: SelectSubset<T, WorksFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorksClient<$Result.GetResult<Prisma.$WorksPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Works that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorksFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Works
     * const works = await prisma.works.findMany()
     * 
     * // Get first 10 Works
     * const works = await prisma.works.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const worksWithIdOnly = await prisma.works.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorksFindManyArgs>(args?: SelectSubset<T, WorksFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Works.
     * @param {WorksCreateArgs} args - Arguments to create a Works.
     * @example
     * // Create one Works
     * const Works = await prisma.works.create({
     *   data: {
     *     // ... data to create a Works
     *   }
     * })
     * 
     */
    create<T extends WorksCreateArgs>(args: SelectSubset<T, WorksCreateArgs<ExtArgs>>): Prisma__WorksClient<$Result.GetResult<Prisma.$WorksPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Works.
     * @param {WorksCreateManyArgs} args - Arguments to create many Works.
     * @example
     * // Create many Works
     * const works = await prisma.works.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorksCreateManyArgs>(args?: SelectSubset<T, WorksCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Works and returns the data saved in the database.
     * @param {WorksCreateManyAndReturnArgs} args - Arguments to create many Works.
     * @example
     * // Create many Works
     * const works = await prisma.works.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Works and only return the `id`
     * const worksWithIdOnly = await prisma.works.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorksCreateManyAndReturnArgs>(args?: SelectSubset<T, WorksCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorksPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Works.
     * @param {WorksDeleteArgs} args - Arguments to delete one Works.
     * @example
     * // Delete one Works
     * const Works = await prisma.works.delete({
     *   where: {
     *     // ... filter to delete one Works
     *   }
     * })
     * 
     */
    delete<T extends WorksDeleteArgs>(args: SelectSubset<T, WorksDeleteArgs<ExtArgs>>): Prisma__WorksClient<$Result.GetResult<Prisma.$WorksPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Works.
     * @param {WorksUpdateArgs} args - Arguments to update one Works.
     * @example
     * // Update one Works
     * const works = await prisma.works.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorksUpdateArgs>(args: SelectSubset<T, WorksUpdateArgs<ExtArgs>>): Prisma__WorksClient<$Result.GetResult<Prisma.$WorksPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Works.
     * @param {WorksDeleteManyArgs} args - Arguments to filter Works to delete.
     * @example
     * // Delete a few Works
     * const { count } = await prisma.works.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorksDeleteManyArgs>(args?: SelectSubset<T, WorksDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Works.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Works
     * const works = await prisma.works.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorksUpdateManyArgs>(args: SelectSubset<T, WorksUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Works and returns the data updated in the database.
     * @param {WorksUpdateManyAndReturnArgs} args - Arguments to update many Works.
     * @example
     * // Update many Works
     * const works = await prisma.works.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Works and only return the `id`
     * const worksWithIdOnly = await prisma.works.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WorksUpdateManyAndReturnArgs>(args: SelectSubset<T, WorksUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorksPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Works.
     * @param {WorksUpsertArgs} args - Arguments to update or create a Works.
     * @example
     * // Update or create a Works
     * const works = await prisma.works.upsert({
     *   create: {
     *     // ... data to create a Works
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Works we want to update
     *   }
     * })
     */
    upsert<T extends WorksUpsertArgs>(args: SelectSubset<T, WorksUpsertArgs<ExtArgs>>): Prisma__WorksClient<$Result.GetResult<Prisma.$WorksPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Works.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorksCountArgs} args - Arguments to filter Works to count.
     * @example
     * // Count the number of Works
     * const count = await prisma.works.count({
     *   where: {
     *     // ... the filter for the Works we want to count
     *   }
     * })
    **/
    count<T extends WorksCountArgs>(
      args?: Subset<T, WorksCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Works.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorksAggregateArgs>(args: Subset<T, WorksAggregateArgs>): Prisma.PrismaPromise<GetWorksAggregateType<T>>

    /**
     * Group by Works.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorksGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorksGroupByArgs['orderBy'] }
        : { orderBy?: WorksGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Works model
   */
  readonly fields: WorksFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Works.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorksClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    resume<T extends Works$resumeArgs<ExtArgs> = {}>(args?: Subset<T, Works$resumeArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Works model
   */
  interface WorksFieldRefs {
    readonly id: FieldRef<"Works", 'String'>
    readonly content: FieldRef<"Works", 'String'>
    readonly resumeId: FieldRef<"Works", 'String'>
    readonly createdTime: FieldRef<"Works", 'DateTime'>
    readonly updatedTime: FieldRef<"Works", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Works findUnique
   */
  export type WorksFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Works
     */
    select?: WorksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Works
     */
    omit?: WorksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorksInclude<ExtArgs> | null
    /**
     * Filter, which Works to fetch.
     */
    where: WorksWhereUniqueInput
  }

  /**
   * Works findUniqueOrThrow
   */
  export type WorksFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Works
     */
    select?: WorksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Works
     */
    omit?: WorksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorksInclude<ExtArgs> | null
    /**
     * Filter, which Works to fetch.
     */
    where: WorksWhereUniqueInput
  }

  /**
   * Works findFirst
   */
  export type WorksFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Works
     */
    select?: WorksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Works
     */
    omit?: WorksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorksInclude<ExtArgs> | null
    /**
     * Filter, which Works to fetch.
     */
    where?: WorksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Works to fetch.
     */
    orderBy?: WorksOrderByWithRelationInput | WorksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Works.
     */
    cursor?: WorksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Works from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Works.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Works.
     */
    distinct?: WorksScalarFieldEnum | WorksScalarFieldEnum[]
  }

  /**
   * Works findFirstOrThrow
   */
  export type WorksFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Works
     */
    select?: WorksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Works
     */
    omit?: WorksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorksInclude<ExtArgs> | null
    /**
     * Filter, which Works to fetch.
     */
    where?: WorksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Works to fetch.
     */
    orderBy?: WorksOrderByWithRelationInput | WorksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Works.
     */
    cursor?: WorksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Works from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Works.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Works.
     */
    distinct?: WorksScalarFieldEnum | WorksScalarFieldEnum[]
  }

  /**
   * Works findMany
   */
  export type WorksFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Works
     */
    select?: WorksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Works
     */
    omit?: WorksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorksInclude<ExtArgs> | null
    /**
     * Filter, which Works to fetch.
     */
    where?: WorksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Works to fetch.
     */
    orderBy?: WorksOrderByWithRelationInput | WorksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Works.
     */
    cursor?: WorksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Works from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Works.
     */
    skip?: number
    distinct?: WorksScalarFieldEnum | WorksScalarFieldEnum[]
  }

  /**
   * Works create
   */
  export type WorksCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Works
     */
    select?: WorksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Works
     */
    omit?: WorksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorksInclude<ExtArgs> | null
    /**
     * The data needed to create a Works.
     */
    data: XOR<WorksCreateInput, WorksUncheckedCreateInput>
  }

  /**
   * Works createMany
   */
  export type WorksCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Works.
     */
    data: WorksCreateManyInput | WorksCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Works createManyAndReturn
   */
  export type WorksCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Works
     */
    select?: WorksSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Works
     */
    omit?: WorksOmit<ExtArgs> | null
    /**
     * The data used to create many Works.
     */
    data: WorksCreateManyInput | WorksCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorksIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Works update
   */
  export type WorksUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Works
     */
    select?: WorksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Works
     */
    omit?: WorksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorksInclude<ExtArgs> | null
    /**
     * The data needed to update a Works.
     */
    data: XOR<WorksUpdateInput, WorksUncheckedUpdateInput>
    /**
     * Choose, which Works to update.
     */
    where: WorksWhereUniqueInput
  }

  /**
   * Works updateMany
   */
  export type WorksUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Works.
     */
    data: XOR<WorksUpdateManyMutationInput, WorksUncheckedUpdateManyInput>
    /**
     * Filter which Works to update
     */
    where?: WorksWhereInput
    /**
     * Limit how many Works to update.
     */
    limit?: number
  }

  /**
   * Works updateManyAndReturn
   */
  export type WorksUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Works
     */
    select?: WorksSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Works
     */
    omit?: WorksOmit<ExtArgs> | null
    /**
     * The data used to update Works.
     */
    data: XOR<WorksUpdateManyMutationInput, WorksUncheckedUpdateManyInput>
    /**
     * Filter which Works to update
     */
    where?: WorksWhereInput
    /**
     * Limit how many Works to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorksIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Works upsert
   */
  export type WorksUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Works
     */
    select?: WorksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Works
     */
    omit?: WorksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorksInclude<ExtArgs> | null
    /**
     * The filter to search for the Works to update in case it exists.
     */
    where: WorksWhereUniqueInput
    /**
     * In case the Works found by the `where` argument doesn't exist, create a new Works with this data.
     */
    create: XOR<WorksCreateInput, WorksUncheckedCreateInput>
    /**
     * In case the Works was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorksUpdateInput, WorksUncheckedUpdateInput>
  }

  /**
   * Works delete
   */
  export type WorksDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Works
     */
    select?: WorksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Works
     */
    omit?: WorksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorksInclude<ExtArgs> | null
    /**
     * Filter which Works to delete.
     */
    where: WorksWhereUniqueInput
  }

  /**
   * Works deleteMany
   */
  export type WorksDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Works to delete
     */
    where?: WorksWhereInput
    /**
     * Limit how many Works to delete.
     */
    limit?: number
  }

  /**
   * Works.resume
   */
  export type Works$resumeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    where?: ResumeWhereInput
  }

  /**
   * Works without action
   */
  export type WorksDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Works
     */
    select?: WorksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Works
     */
    omit?: WorksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorksInclude<ExtArgs> | null
  }


  /**
   * Model Projects
   */

  export type AggregateProjects = {
    _count: ProjectsCountAggregateOutputType | null
    _min: ProjectsMinAggregateOutputType | null
    _max: ProjectsMaxAggregateOutputType | null
  }

  export type ProjectsMinAggregateOutputType = {
    id: string | null
    content: string | null
    resumeId: string | null
    createdTime: Date | null
    updatedTime: Date | null
  }

  export type ProjectsMaxAggregateOutputType = {
    id: string | null
    content: string | null
    resumeId: string | null
    createdTime: Date | null
    updatedTime: Date | null
  }

  export type ProjectsCountAggregateOutputType = {
    id: number
    content: number
    resumeId: number
    createdTime: number
    updatedTime: number
    _all: number
  }


  export type ProjectsMinAggregateInputType = {
    id?: true
    content?: true
    resumeId?: true
    createdTime?: true
    updatedTime?: true
  }

  export type ProjectsMaxAggregateInputType = {
    id?: true
    content?: true
    resumeId?: true
    createdTime?: true
    updatedTime?: true
  }

  export type ProjectsCountAggregateInputType = {
    id?: true
    content?: true
    resumeId?: true
    createdTime?: true
    updatedTime?: true
    _all?: true
  }

  export type ProjectsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to aggregate.
     */
    where?: ProjectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectsOrderByWithRelationInput | ProjectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectsMaxAggregateInputType
  }

  export type GetProjectsAggregateType<T extends ProjectsAggregateArgs> = {
        [P in keyof T & keyof AggregateProjects]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjects[P]>
      : GetScalarType<T[P], AggregateProjects[P]>
  }




  export type ProjectsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectsWhereInput
    orderBy?: ProjectsOrderByWithAggregationInput | ProjectsOrderByWithAggregationInput[]
    by: ProjectsScalarFieldEnum[] | ProjectsScalarFieldEnum
    having?: ProjectsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectsCountAggregateInputType | true
    _min?: ProjectsMinAggregateInputType
    _max?: ProjectsMaxAggregateInputType
  }

  export type ProjectsGroupByOutputType = {
    id: string
    content: string
    resumeId: string
    createdTime: Date
    updatedTime: Date
    _count: ProjectsCountAggregateOutputType | null
    _min: ProjectsMinAggregateOutputType | null
    _max: ProjectsMaxAggregateOutputType | null
  }

  type GetProjectsGroupByPayload<T extends ProjectsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectsGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectsGroupByOutputType[P]>
        }
      >
    >


  export type ProjectsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    resumeId?: boolean
    createdTime?: boolean
    updatedTime?: boolean
    resume?: boolean | Projects$resumeArgs<ExtArgs>
  }, ExtArgs["result"]["projects"]>

  export type ProjectsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    resumeId?: boolean
    createdTime?: boolean
    updatedTime?: boolean
    resume?: boolean | Projects$resumeArgs<ExtArgs>
  }, ExtArgs["result"]["projects"]>

  export type ProjectsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    resumeId?: boolean
    createdTime?: boolean
    updatedTime?: boolean
    resume?: boolean | Projects$resumeArgs<ExtArgs>
  }, ExtArgs["result"]["projects"]>

  export type ProjectsSelectScalar = {
    id?: boolean
    content?: boolean
    resumeId?: boolean
    createdTime?: boolean
    updatedTime?: boolean
  }

  export type ProjectsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "resumeId" | "createdTime" | "updatedTime", ExtArgs["result"]["projects"]>
  export type ProjectsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resume?: boolean | Projects$resumeArgs<ExtArgs>
  }
  export type ProjectsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resume?: boolean | Projects$resumeArgs<ExtArgs>
  }
  export type ProjectsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resume?: boolean | Projects$resumeArgs<ExtArgs>
  }

  export type $ProjectsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Projects"
    objects: {
      resume: Prisma.$ResumePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      content: string
      resumeId: string
      createdTime: Date
      updatedTime: Date
    }, ExtArgs["result"]["projects"]>
    composites: {}
  }

  type ProjectsGetPayload<S extends boolean | null | undefined | ProjectsDefaultArgs> = $Result.GetResult<Prisma.$ProjectsPayload, S>

  type ProjectsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectsCountAggregateInputType | true
    }

  export interface ProjectsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Projects'], meta: { name: 'Projects' } }
    /**
     * Find zero or one Projects that matches the filter.
     * @param {ProjectsFindUniqueArgs} args - Arguments to find a Projects
     * @example
     * // Get one Projects
     * const projects = await prisma.projects.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectsFindUniqueArgs>(args: SelectSubset<T, ProjectsFindUniqueArgs<ExtArgs>>): Prisma__ProjectsClient<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Projects that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectsFindUniqueOrThrowArgs} args - Arguments to find a Projects
     * @example
     * // Get one Projects
     * const projects = await prisma.projects.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectsFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectsClient<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectsFindFirstArgs} args - Arguments to find a Projects
     * @example
     * // Get one Projects
     * const projects = await prisma.projects.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectsFindFirstArgs>(args?: SelectSubset<T, ProjectsFindFirstArgs<ExtArgs>>): Prisma__ProjectsClient<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Projects that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectsFindFirstOrThrowArgs} args - Arguments to find a Projects
     * @example
     * // Get one Projects
     * const projects = await prisma.projects.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectsFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectsClient<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.projects.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.projects.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectsWithIdOnly = await prisma.projects.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectsFindManyArgs>(args?: SelectSubset<T, ProjectsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Projects.
     * @param {ProjectsCreateArgs} args - Arguments to create a Projects.
     * @example
     * // Create one Projects
     * const Projects = await prisma.projects.create({
     *   data: {
     *     // ... data to create a Projects
     *   }
     * })
     * 
     */
    create<T extends ProjectsCreateArgs>(args: SelectSubset<T, ProjectsCreateArgs<ExtArgs>>): Prisma__ProjectsClient<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {ProjectsCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const projects = await prisma.projects.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectsCreateManyArgs>(args?: SelectSubset<T, ProjectsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {ProjectsCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const projects = await prisma.projects.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `id`
     * const projectsWithIdOnly = await prisma.projects.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectsCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Projects.
     * @param {ProjectsDeleteArgs} args - Arguments to delete one Projects.
     * @example
     * // Delete one Projects
     * const Projects = await prisma.projects.delete({
     *   where: {
     *     // ... filter to delete one Projects
     *   }
     * })
     * 
     */
    delete<T extends ProjectsDeleteArgs>(args: SelectSubset<T, ProjectsDeleteArgs<ExtArgs>>): Prisma__ProjectsClient<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Projects.
     * @param {ProjectsUpdateArgs} args - Arguments to update one Projects.
     * @example
     * // Update one Projects
     * const projects = await prisma.projects.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectsUpdateArgs>(args: SelectSubset<T, ProjectsUpdateArgs<ExtArgs>>): Prisma__ProjectsClient<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {ProjectsDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.projects.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectsDeleteManyArgs>(args?: SelectSubset<T, ProjectsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const projects = await prisma.projects.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectsUpdateManyArgs>(args: SelectSubset<T, ProjectsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects and returns the data updated in the database.
     * @param {ProjectsUpdateManyAndReturnArgs} args - Arguments to update many Projects.
     * @example
     * // Update many Projects
     * const projects = await prisma.projects.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projects and only return the `id`
     * const projectsWithIdOnly = await prisma.projects.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProjectsUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Projects.
     * @param {ProjectsUpsertArgs} args - Arguments to update or create a Projects.
     * @example
     * // Update or create a Projects
     * const projects = await prisma.projects.upsert({
     *   create: {
     *     // ... data to create a Projects
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Projects we want to update
     *   }
     * })
     */
    upsert<T extends ProjectsUpsertArgs>(args: SelectSubset<T, ProjectsUpsertArgs<ExtArgs>>): Prisma__ProjectsClient<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectsCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.projects.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectsCountArgs>(
      args?: Subset<T, ProjectsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectsAggregateArgs>(args: Subset<T, ProjectsAggregateArgs>): Prisma.PrismaPromise<GetProjectsAggregateType<T>>

    /**
     * Group by Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectsGroupByArgs['orderBy'] }
        : { orderBy?: ProjectsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Projects model
   */
  readonly fields: ProjectsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Projects.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    resume<T extends Projects$resumeArgs<ExtArgs> = {}>(args?: Subset<T, Projects$resumeArgs<ExtArgs>>): Prisma__ResumeClient<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Projects model
   */
  interface ProjectsFieldRefs {
    readonly id: FieldRef<"Projects", 'String'>
    readonly content: FieldRef<"Projects", 'String'>
    readonly resumeId: FieldRef<"Projects", 'String'>
    readonly createdTime: FieldRef<"Projects", 'DateTime'>
    readonly updatedTime: FieldRef<"Projects", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Projects findUnique
   */
  export type ProjectsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projects
     */
    select?: ProjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projects
     */
    omit?: ProjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectsInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where: ProjectsWhereUniqueInput
  }

  /**
   * Projects findUniqueOrThrow
   */
  export type ProjectsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projects
     */
    select?: ProjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projects
     */
    omit?: ProjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectsInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where: ProjectsWhereUniqueInput
  }

  /**
   * Projects findFirst
   */
  export type ProjectsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projects
     */
    select?: ProjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projects
     */
    omit?: ProjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectsInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectsOrderByWithRelationInput | ProjectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectsScalarFieldEnum | ProjectsScalarFieldEnum[]
  }

  /**
   * Projects findFirstOrThrow
   */
  export type ProjectsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projects
     */
    select?: ProjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projects
     */
    omit?: ProjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectsInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectsOrderByWithRelationInput | ProjectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectsScalarFieldEnum | ProjectsScalarFieldEnum[]
  }

  /**
   * Projects findMany
   */
  export type ProjectsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projects
     */
    select?: ProjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projects
     */
    omit?: ProjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectsInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectsOrderByWithRelationInput | ProjectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectsScalarFieldEnum | ProjectsScalarFieldEnum[]
  }

  /**
   * Projects create
   */
  export type ProjectsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projects
     */
    select?: ProjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projects
     */
    omit?: ProjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectsInclude<ExtArgs> | null
    /**
     * The data needed to create a Projects.
     */
    data: XOR<ProjectsCreateInput, ProjectsUncheckedCreateInput>
  }

  /**
   * Projects createMany
   */
  export type ProjectsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectsCreateManyInput | ProjectsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Projects createManyAndReturn
   */
  export type ProjectsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projects
     */
    select?: ProjectsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Projects
     */
    omit?: ProjectsOmit<ExtArgs> | null
    /**
     * The data used to create many Projects.
     */
    data: ProjectsCreateManyInput | ProjectsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Projects update
   */
  export type ProjectsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projects
     */
    select?: ProjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projects
     */
    omit?: ProjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectsInclude<ExtArgs> | null
    /**
     * The data needed to update a Projects.
     */
    data: XOR<ProjectsUpdateInput, ProjectsUncheckedUpdateInput>
    /**
     * Choose, which Projects to update.
     */
    where: ProjectsWhereUniqueInput
  }

  /**
   * Projects updateMany
   */
  export type ProjectsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectsUpdateManyMutationInput, ProjectsUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectsWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Projects updateManyAndReturn
   */
  export type ProjectsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projects
     */
    select?: ProjectsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Projects
     */
    omit?: ProjectsOmit<ExtArgs> | null
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectsUpdateManyMutationInput, ProjectsUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectsWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Projects upsert
   */
  export type ProjectsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projects
     */
    select?: ProjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projects
     */
    omit?: ProjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectsInclude<ExtArgs> | null
    /**
     * The filter to search for the Projects to update in case it exists.
     */
    where: ProjectsWhereUniqueInput
    /**
     * In case the Projects found by the `where` argument doesn't exist, create a new Projects with this data.
     */
    create: XOR<ProjectsCreateInput, ProjectsUncheckedCreateInput>
    /**
     * In case the Projects was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectsUpdateInput, ProjectsUncheckedUpdateInput>
  }

  /**
   * Projects delete
   */
  export type ProjectsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projects
     */
    select?: ProjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projects
     */
    omit?: ProjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectsInclude<ExtArgs> | null
    /**
     * Filter which Projects to delete.
     */
    where: ProjectsWhereUniqueInput
  }

  /**
   * Projects deleteMany
   */
  export type ProjectsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectsWhereInput
    /**
     * Limit how many Projects to delete.
     */
    limit?: number
  }

  /**
   * Projects.resume
   */
  export type Projects$resumeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    where?: ResumeWhereInput
  }

  /**
   * Projects without action
   */
  export type ProjectsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projects
     */
    select?: ProjectsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Projects
     */
    omit?: ProjectsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectsInclude<ExtArgs> | null
  }


  /**
   * Model Template
   */

  export type AggregateTemplate = {
    _count: TemplateCountAggregateOutputType | null
    _min: TemplateMinAggregateOutputType | null
    _max: TemplateMaxAggregateOutputType | null
  }

  export type TemplateMinAggregateOutputType = {
    id: string | null
    title: string | null
    path: string | null
    type: string | null
    createdTime: Date | null
    updatedTime: Date | null
  }

  export type TemplateMaxAggregateOutputType = {
    id: string | null
    title: string | null
    path: string | null
    type: string | null
    createdTime: Date | null
    updatedTime: Date | null
  }

  export type TemplateCountAggregateOutputType = {
    id: number
    title: number
    path: number
    type: number
    createdTime: number
    updatedTime: number
    _all: number
  }


  export type TemplateMinAggregateInputType = {
    id?: true
    title?: true
    path?: true
    type?: true
    createdTime?: true
    updatedTime?: true
  }

  export type TemplateMaxAggregateInputType = {
    id?: true
    title?: true
    path?: true
    type?: true
    createdTime?: true
    updatedTime?: true
  }

  export type TemplateCountAggregateInputType = {
    id?: true
    title?: true
    path?: true
    type?: true
    createdTime?: true
    updatedTime?: true
    _all?: true
  }

  export type TemplateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Template to aggregate.
     */
    where?: TemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Templates to fetch.
     */
    orderBy?: TemplateOrderByWithRelationInput | TemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Templates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Templates
    **/
    _count?: true | TemplateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TemplateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TemplateMaxAggregateInputType
  }

  export type GetTemplateAggregateType<T extends TemplateAggregateArgs> = {
        [P in keyof T & keyof AggregateTemplate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTemplate[P]>
      : GetScalarType<T[P], AggregateTemplate[P]>
  }




  export type TemplateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TemplateWhereInput
    orderBy?: TemplateOrderByWithAggregationInput | TemplateOrderByWithAggregationInput[]
    by: TemplateScalarFieldEnum[] | TemplateScalarFieldEnum
    having?: TemplateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TemplateCountAggregateInputType | true
    _min?: TemplateMinAggregateInputType
    _max?: TemplateMaxAggregateInputType
  }

  export type TemplateGroupByOutputType = {
    id: string
    title: string
    path: string
    type: string | null
    createdTime: Date
    updatedTime: Date
    _count: TemplateCountAggregateOutputType | null
    _min: TemplateMinAggregateOutputType | null
    _max: TemplateMaxAggregateOutputType | null
  }

  type GetTemplateGroupByPayload<T extends TemplateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TemplateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TemplateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TemplateGroupByOutputType[P]>
            : GetScalarType<T[P], TemplateGroupByOutputType[P]>
        }
      >
    >


  export type TemplateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    path?: boolean
    type?: boolean
    createdTime?: boolean
    updatedTime?: boolean
    resume?: boolean | Template$resumeArgs<ExtArgs>
    _count?: boolean | TemplateCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["template"]>

  export type TemplateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    path?: boolean
    type?: boolean
    createdTime?: boolean
    updatedTime?: boolean
  }, ExtArgs["result"]["template"]>

  export type TemplateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    path?: boolean
    type?: boolean
    createdTime?: boolean
    updatedTime?: boolean
  }, ExtArgs["result"]["template"]>

  export type TemplateSelectScalar = {
    id?: boolean
    title?: boolean
    path?: boolean
    type?: boolean
    createdTime?: boolean
    updatedTime?: boolean
  }

  export type TemplateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "path" | "type" | "createdTime" | "updatedTime", ExtArgs["result"]["template"]>
  export type TemplateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    resume?: boolean | Template$resumeArgs<ExtArgs>
    _count?: boolean | TemplateCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TemplateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TemplateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TemplatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Template"
    objects: {
      resume: Prisma.$ResumePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      path: string
      type: string | null
      createdTime: Date
      updatedTime: Date
    }, ExtArgs["result"]["template"]>
    composites: {}
  }

  type TemplateGetPayload<S extends boolean | null | undefined | TemplateDefaultArgs> = $Result.GetResult<Prisma.$TemplatePayload, S>

  type TemplateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TemplateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TemplateCountAggregateInputType | true
    }

  export interface TemplateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Template'], meta: { name: 'Template' } }
    /**
     * Find zero or one Template that matches the filter.
     * @param {TemplateFindUniqueArgs} args - Arguments to find a Template
     * @example
     * // Get one Template
     * const template = await prisma.template.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TemplateFindUniqueArgs>(args: SelectSubset<T, TemplateFindUniqueArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Template that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TemplateFindUniqueOrThrowArgs} args - Arguments to find a Template
     * @example
     * // Get one Template
     * const template = await prisma.template.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TemplateFindUniqueOrThrowArgs>(args: SelectSubset<T, TemplateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Template that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateFindFirstArgs} args - Arguments to find a Template
     * @example
     * // Get one Template
     * const template = await prisma.template.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TemplateFindFirstArgs>(args?: SelectSubset<T, TemplateFindFirstArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Template that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateFindFirstOrThrowArgs} args - Arguments to find a Template
     * @example
     * // Get one Template
     * const template = await prisma.template.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TemplateFindFirstOrThrowArgs>(args?: SelectSubset<T, TemplateFindFirstOrThrowArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Templates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Templates
     * const templates = await prisma.template.findMany()
     * 
     * // Get first 10 Templates
     * const templates = await prisma.template.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const templateWithIdOnly = await prisma.template.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TemplateFindManyArgs>(args?: SelectSubset<T, TemplateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Template.
     * @param {TemplateCreateArgs} args - Arguments to create a Template.
     * @example
     * // Create one Template
     * const Template = await prisma.template.create({
     *   data: {
     *     // ... data to create a Template
     *   }
     * })
     * 
     */
    create<T extends TemplateCreateArgs>(args: SelectSubset<T, TemplateCreateArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Templates.
     * @param {TemplateCreateManyArgs} args - Arguments to create many Templates.
     * @example
     * // Create many Templates
     * const template = await prisma.template.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TemplateCreateManyArgs>(args?: SelectSubset<T, TemplateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Templates and returns the data saved in the database.
     * @param {TemplateCreateManyAndReturnArgs} args - Arguments to create many Templates.
     * @example
     * // Create many Templates
     * const template = await prisma.template.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Templates and only return the `id`
     * const templateWithIdOnly = await prisma.template.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TemplateCreateManyAndReturnArgs>(args?: SelectSubset<T, TemplateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Template.
     * @param {TemplateDeleteArgs} args - Arguments to delete one Template.
     * @example
     * // Delete one Template
     * const Template = await prisma.template.delete({
     *   where: {
     *     // ... filter to delete one Template
     *   }
     * })
     * 
     */
    delete<T extends TemplateDeleteArgs>(args: SelectSubset<T, TemplateDeleteArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Template.
     * @param {TemplateUpdateArgs} args - Arguments to update one Template.
     * @example
     * // Update one Template
     * const template = await prisma.template.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TemplateUpdateArgs>(args: SelectSubset<T, TemplateUpdateArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Templates.
     * @param {TemplateDeleteManyArgs} args - Arguments to filter Templates to delete.
     * @example
     * // Delete a few Templates
     * const { count } = await prisma.template.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TemplateDeleteManyArgs>(args?: SelectSubset<T, TemplateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Templates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Templates
     * const template = await prisma.template.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TemplateUpdateManyArgs>(args: SelectSubset<T, TemplateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Templates and returns the data updated in the database.
     * @param {TemplateUpdateManyAndReturnArgs} args - Arguments to update many Templates.
     * @example
     * // Update many Templates
     * const template = await prisma.template.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Templates and only return the `id`
     * const templateWithIdOnly = await prisma.template.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TemplateUpdateManyAndReturnArgs>(args: SelectSubset<T, TemplateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Template.
     * @param {TemplateUpsertArgs} args - Arguments to update or create a Template.
     * @example
     * // Update or create a Template
     * const template = await prisma.template.upsert({
     *   create: {
     *     // ... data to create a Template
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Template we want to update
     *   }
     * })
     */
    upsert<T extends TemplateUpsertArgs>(args: SelectSubset<T, TemplateUpsertArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Templates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateCountArgs} args - Arguments to filter Templates to count.
     * @example
     * // Count the number of Templates
     * const count = await prisma.template.count({
     *   where: {
     *     // ... the filter for the Templates we want to count
     *   }
     * })
    **/
    count<T extends TemplateCountArgs>(
      args?: Subset<T, TemplateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TemplateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Template.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TemplateAggregateArgs>(args: Subset<T, TemplateAggregateArgs>): Prisma.PrismaPromise<GetTemplateAggregateType<T>>

    /**
     * Group by Template.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TemplateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TemplateGroupByArgs['orderBy'] }
        : { orderBy?: TemplateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TemplateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTemplateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Template model
   */
  readonly fields: TemplateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Template.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TemplateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    resume<T extends Template$resumeArgs<ExtArgs> = {}>(args?: Subset<T, Template$resumeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResumePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Template model
   */
  interface TemplateFieldRefs {
    readonly id: FieldRef<"Template", 'String'>
    readonly title: FieldRef<"Template", 'String'>
    readonly path: FieldRef<"Template", 'String'>
    readonly type: FieldRef<"Template", 'String'>
    readonly createdTime: FieldRef<"Template", 'DateTime'>
    readonly updatedTime: FieldRef<"Template", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Template findUnique
   */
  export type TemplateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * Filter, which Template to fetch.
     */
    where: TemplateWhereUniqueInput
  }

  /**
   * Template findUniqueOrThrow
   */
  export type TemplateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * Filter, which Template to fetch.
     */
    where: TemplateWhereUniqueInput
  }

  /**
   * Template findFirst
   */
  export type TemplateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * Filter, which Template to fetch.
     */
    where?: TemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Templates to fetch.
     */
    orderBy?: TemplateOrderByWithRelationInput | TemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Templates.
     */
    cursor?: TemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Templates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Templates.
     */
    distinct?: TemplateScalarFieldEnum | TemplateScalarFieldEnum[]
  }

  /**
   * Template findFirstOrThrow
   */
  export type TemplateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * Filter, which Template to fetch.
     */
    where?: TemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Templates to fetch.
     */
    orderBy?: TemplateOrderByWithRelationInput | TemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Templates.
     */
    cursor?: TemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Templates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Templates.
     */
    distinct?: TemplateScalarFieldEnum | TemplateScalarFieldEnum[]
  }

  /**
   * Template findMany
   */
  export type TemplateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * Filter, which Templates to fetch.
     */
    where?: TemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Templates to fetch.
     */
    orderBy?: TemplateOrderByWithRelationInput | TemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Templates.
     */
    cursor?: TemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Templates.
     */
    skip?: number
    distinct?: TemplateScalarFieldEnum | TemplateScalarFieldEnum[]
  }

  /**
   * Template create
   */
  export type TemplateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * The data needed to create a Template.
     */
    data: XOR<TemplateCreateInput, TemplateUncheckedCreateInput>
  }

  /**
   * Template createMany
   */
  export type TemplateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Templates.
     */
    data: TemplateCreateManyInput | TemplateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Template createManyAndReturn
   */
  export type TemplateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * The data used to create many Templates.
     */
    data: TemplateCreateManyInput | TemplateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Template update
   */
  export type TemplateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * The data needed to update a Template.
     */
    data: XOR<TemplateUpdateInput, TemplateUncheckedUpdateInput>
    /**
     * Choose, which Template to update.
     */
    where: TemplateWhereUniqueInput
  }

  /**
   * Template updateMany
   */
  export type TemplateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Templates.
     */
    data: XOR<TemplateUpdateManyMutationInput, TemplateUncheckedUpdateManyInput>
    /**
     * Filter which Templates to update
     */
    where?: TemplateWhereInput
    /**
     * Limit how many Templates to update.
     */
    limit?: number
  }

  /**
   * Template updateManyAndReturn
   */
  export type TemplateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * The data used to update Templates.
     */
    data: XOR<TemplateUpdateManyMutationInput, TemplateUncheckedUpdateManyInput>
    /**
     * Filter which Templates to update
     */
    where?: TemplateWhereInput
    /**
     * Limit how many Templates to update.
     */
    limit?: number
  }

  /**
   * Template upsert
   */
  export type TemplateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * The filter to search for the Template to update in case it exists.
     */
    where: TemplateWhereUniqueInput
    /**
     * In case the Template found by the `where` argument doesn't exist, create a new Template with this data.
     */
    create: XOR<TemplateCreateInput, TemplateUncheckedCreateInput>
    /**
     * In case the Template was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TemplateUpdateInput, TemplateUncheckedUpdateInput>
  }

  /**
   * Template delete
   */
  export type TemplateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * Filter which Template to delete.
     */
    where: TemplateWhereUniqueInput
  }

  /**
   * Template deleteMany
   */
  export type TemplateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Templates to delete
     */
    where?: TemplateWhereInput
    /**
     * Limit how many Templates to delete.
     */
    limit?: number
  }

  /**
   * Template.resume
   */
  export type Template$resumeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resume
     */
    select?: ResumeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resume
     */
    omit?: ResumeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResumeInclude<ExtArgs> | null
    where?: ResumeWhereInput
    orderBy?: ResumeOrderByWithRelationInput | ResumeOrderByWithRelationInput[]
    cursor?: ResumeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ResumeScalarFieldEnum | ResumeScalarFieldEnum[]
  }

  /**
   * Template without action
   */
  export type TemplateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
  }


  /**
   * Model Download
   */

  export type AggregateDownload = {
    _count: DownloadCountAggregateOutputType | null
    _min: DownloadMinAggregateOutputType | null
    _max: DownloadMaxAggregateOutputType | null
  }

  export type DownloadMinAggregateOutputType = {
    id: string | null
    title: string | null
    url: string | null
    createdTime: Date | null
    updatedTime: Date | null
  }

  export type DownloadMaxAggregateOutputType = {
    id: string | null
    title: string | null
    url: string | null
    createdTime: Date | null
    updatedTime: Date | null
  }

  export type DownloadCountAggregateOutputType = {
    id: number
    title: number
    url: number
    createdTime: number
    updatedTime: number
    _all: number
  }


  export type DownloadMinAggregateInputType = {
    id?: true
    title?: true
    url?: true
    createdTime?: true
    updatedTime?: true
  }

  export type DownloadMaxAggregateInputType = {
    id?: true
    title?: true
    url?: true
    createdTime?: true
    updatedTime?: true
  }

  export type DownloadCountAggregateInputType = {
    id?: true
    title?: true
    url?: true
    createdTime?: true
    updatedTime?: true
    _all?: true
  }

  export type DownloadAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Download to aggregate.
     */
    where?: DownloadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Downloads to fetch.
     */
    orderBy?: DownloadOrderByWithRelationInput | DownloadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DownloadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Downloads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Downloads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Downloads
    **/
    _count?: true | DownloadCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DownloadMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DownloadMaxAggregateInputType
  }

  export type GetDownloadAggregateType<T extends DownloadAggregateArgs> = {
        [P in keyof T & keyof AggregateDownload]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDownload[P]>
      : GetScalarType<T[P], AggregateDownload[P]>
  }




  export type DownloadGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DownloadWhereInput
    orderBy?: DownloadOrderByWithAggregationInput | DownloadOrderByWithAggregationInput[]
    by: DownloadScalarFieldEnum[] | DownloadScalarFieldEnum
    having?: DownloadScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DownloadCountAggregateInputType | true
    _min?: DownloadMinAggregateInputType
    _max?: DownloadMaxAggregateInputType
  }

  export type DownloadGroupByOutputType = {
    id: string
    title: string
    url: string
    createdTime: Date
    updatedTime: Date
    _count: DownloadCountAggregateOutputType | null
    _min: DownloadMinAggregateOutputType | null
    _max: DownloadMaxAggregateOutputType | null
  }

  type GetDownloadGroupByPayload<T extends DownloadGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DownloadGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DownloadGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DownloadGroupByOutputType[P]>
            : GetScalarType<T[P], DownloadGroupByOutputType[P]>
        }
      >
    >


  export type DownloadSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    url?: boolean
    createdTime?: boolean
    updatedTime?: boolean
  }, ExtArgs["result"]["download"]>

  export type DownloadSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    url?: boolean
    createdTime?: boolean
    updatedTime?: boolean
  }, ExtArgs["result"]["download"]>

  export type DownloadSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    url?: boolean
    createdTime?: boolean
    updatedTime?: boolean
  }, ExtArgs["result"]["download"]>

  export type DownloadSelectScalar = {
    id?: boolean
    title?: boolean
    url?: boolean
    createdTime?: boolean
    updatedTime?: boolean
  }

  export type DownloadOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "url" | "createdTime" | "updatedTime", ExtArgs["result"]["download"]>

  export type $DownloadPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Download"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      url: string
      createdTime: Date
      updatedTime: Date
    }, ExtArgs["result"]["download"]>
    composites: {}
  }

  type DownloadGetPayload<S extends boolean | null | undefined | DownloadDefaultArgs> = $Result.GetResult<Prisma.$DownloadPayload, S>

  type DownloadCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DownloadFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DownloadCountAggregateInputType | true
    }

  export interface DownloadDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Download'], meta: { name: 'Download' } }
    /**
     * Find zero or one Download that matches the filter.
     * @param {DownloadFindUniqueArgs} args - Arguments to find a Download
     * @example
     * // Get one Download
     * const download = await prisma.download.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DownloadFindUniqueArgs>(args: SelectSubset<T, DownloadFindUniqueArgs<ExtArgs>>): Prisma__DownloadClient<$Result.GetResult<Prisma.$DownloadPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Download that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DownloadFindUniqueOrThrowArgs} args - Arguments to find a Download
     * @example
     * // Get one Download
     * const download = await prisma.download.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DownloadFindUniqueOrThrowArgs>(args: SelectSubset<T, DownloadFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DownloadClient<$Result.GetResult<Prisma.$DownloadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Download that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DownloadFindFirstArgs} args - Arguments to find a Download
     * @example
     * // Get one Download
     * const download = await prisma.download.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DownloadFindFirstArgs>(args?: SelectSubset<T, DownloadFindFirstArgs<ExtArgs>>): Prisma__DownloadClient<$Result.GetResult<Prisma.$DownloadPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Download that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DownloadFindFirstOrThrowArgs} args - Arguments to find a Download
     * @example
     * // Get one Download
     * const download = await prisma.download.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DownloadFindFirstOrThrowArgs>(args?: SelectSubset<T, DownloadFindFirstOrThrowArgs<ExtArgs>>): Prisma__DownloadClient<$Result.GetResult<Prisma.$DownloadPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Downloads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DownloadFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Downloads
     * const downloads = await prisma.download.findMany()
     * 
     * // Get first 10 Downloads
     * const downloads = await prisma.download.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const downloadWithIdOnly = await prisma.download.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DownloadFindManyArgs>(args?: SelectSubset<T, DownloadFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DownloadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Download.
     * @param {DownloadCreateArgs} args - Arguments to create a Download.
     * @example
     * // Create one Download
     * const Download = await prisma.download.create({
     *   data: {
     *     // ... data to create a Download
     *   }
     * })
     * 
     */
    create<T extends DownloadCreateArgs>(args: SelectSubset<T, DownloadCreateArgs<ExtArgs>>): Prisma__DownloadClient<$Result.GetResult<Prisma.$DownloadPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Downloads.
     * @param {DownloadCreateManyArgs} args - Arguments to create many Downloads.
     * @example
     * // Create many Downloads
     * const download = await prisma.download.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DownloadCreateManyArgs>(args?: SelectSubset<T, DownloadCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Downloads and returns the data saved in the database.
     * @param {DownloadCreateManyAndReturnArgs} args - Arguments to create many Downloads.
     * @example
     * // Create many Downloads
     * const download = await prisma.download.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Downloads and only return the `id`
     * const downloadWithIdOnly = await prisma.download.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DownloadCreateManyAndReturnArgs>(args?: SelectSubset<T, DownloadCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DownloadPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Download.
     * @param {DownloadDeleteArgs} args - Arguments to delete one Download.
     * @example
     * // Delete one Download
     * const Download = await prisma.download.delete({
     *   where: {
     *     // ... filter to delete one Download
     *   }
     * })
     * 
     */
    delete<T extends DownloadDeleteArgs>(args: SelectSubset<T, DownloadDeleteArgs<ExtArgs>>): Prisma__DownloadClient<$Result.GetResult<Prisma.$DownloadPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Download.
     * @param {DownloadUpdateArgs} args - Arguments to update one Download.
     * @example
     * // Update one Download
     * const download = await prisma.download.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DownloadUpdateArgs>(args: SelectSubset<T, DownloadUpdateArgs<ExtArgs>>): Prisma__DownloadClient<$Result.GetResult<Prisma.$DownloadPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Downloads.
     * @param {DownloadDeleteManyArgs} args - Arguments to filter Downloads to delete.
     * @example
     * // Delete a few Downloads
     * const { count } = await prisma.download.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DownloadDeleteManyArgs>(args?: SelectSubset<T, DownloadDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Downloads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DownloadUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Downloads
     * const download = await prisma.download.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DownloadUpdateManyArgs>(args: SelectSubset<T, DownloadUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Downloads and returns the data updated in the database.
     * @param {DownloadUpdateManyAndReturnArgs} args - Arguments to update many Downloads.
     * @example
     * // Update many Downloads
     * const download = await prisma.download.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Downloads and only return the `id`
     * const downloadWithIdOnly = await prisma.download.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DownloadUpdateManyAndReturnArgs>(args: SelectSubset<T, DownloadUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DownloadPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Download.
     * @param {DownloadUpsertArgs} args - Arguments to update or create a Download.
     * @example
     * // Update or create a Download
     * const download = await prisma.download.upsert({
     *   create: {
     *     // ... data to create a Download
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Download we want to update
     *   }
     * })
     */
    upsert<T extends DownloadUpsertArgs>(args: SelectSubset<T, DownloadUpsertArgs<ExtArgs>>): Prisma__DownloadClient<$Result.GetResult<Prisma.$DownloadPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Downloads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DownloadCountArgs} args - Arguments to filter Downloads to count.
     * @example
     * // Count the number of Downloads
     * const count = await prisma.download.count({
     *   where: {
     *     // ... the filter for the Downloads we want to count
     *   }
     * })
    **/
    count<T extends DownloadCountArgs>(
      args?: Subset<T, DownloadCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DownloadCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Download.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DownloadAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DownloadAggregateArgs>(args: Subset<T, DownloadAggregateArgs>): Prisma.PrismaPromise<GetDownloadAggregateType<T>>

    /**
     * Group by Download.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DownloadGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DownloadGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DownloadGroupByArgs['orderBy'] }
        : { orderBy?: DownloadGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DownloadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDownloadGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Download model
   */
  readonly fields: DownloadFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Download.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DownloadClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Download model
   */
  interface DownloadFieldRefs {
    readonly id: FieldRef<"Download", 'String'>
    readonly title: FieldRef<"Download", 'String'>
    readonly url: FieldRef<"Download", 'String'>
    readonly createdTime: FieldRef<"Download", 'DateTime'>
    readonly updatedTime: FieldRef<"Download", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Download findUnique
   */
  export type DownloadFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Download
     */
    select?: DownloadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Download
     */
    omit?: DownloadOmit<ExtArgs> | null
    /**
     * Filter, which Download to fetch.
     */
    where: DownloadWhereUniqueInput
  }

  /**
   * Download findUniqueOrThrow
   */
  export type DownloadFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Download
     */
    select?: DownloadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Download
     */
    omit?: DownloadOmit<ExtArgs> | null
    /**
     * Filter, which Download to fetch.
     */
    where: DownloadWhereUniqueInput
  }

  /**
   * Download findFirst
   */
  export type DownloadFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Download
     */
    select?: DownloadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Download
     */
    omit?: DownloadOmit<ExtArgs> | null
    /**
     * Filter, which Download to fetch.
     */
    where?: DownloadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Downloads to fetch.
     */
    orderBy?: DownloadOrderByWithRelationInput | DownloadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Downloads.
     */
    cursor?: DownloadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Downloads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Downloads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Downloads.
     */
    distinct?: DownloadScalarFieldEnum | DownloadScalarFieldEnum[]
  }

  /**
   * Download findFirstOrThrow
   */
  export type DownloadFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Download
     */
    select?: DownloadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Download
     */
    omit?: DownloadOmit<ExtArgs> | null
    /**
     * Filter, which Download to fetch.
     */
    where?: DownloadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Downloads to fetch.
     */
    orderBy?: DownloadOrderByWithRelationInput | DownloadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Downloads.
     */
    cursor?: DownloadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Downloads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Downloads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Downloads.
     */
    distinct?: DownloadScalarFieldEnum | DownloadScalarFieldEnum[]
  }

  /**
   * Download findMany
   */
  export type DownloadFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Download
     */
    select?: DownloadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Download
     */
    omit?: DownloadOmit<ExtArgs> | null
    /**
     * Filter, which Downloads to fetch.
     */
    where?: DownloadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Downloads to fetch.
     */
    orderBy?: DownloadOrderByWithRelationInput | DownloadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Downloads.
     */
    cursor?: DownloadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Downloads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Downloads.
     */
    skip?: number
    distinct?: DownloadScalarFieldEnum | DownloadScalarFieldEnum[]
  }

  /**
   * Download create
   */
  export type DownloadCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Download
     */
    select?: DownloadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Download
     */
    omit?: DownloadOmit<ExtArgs> | null
    /**
     * The data needed to create a Download.
     */
    data: XOR<DownloadCreateInput, DownloadUncheckedCreateInput>
  }

  /**
   * Download createMany
   */
  export type DownloadCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Downloads.
     */
    data: DownloadCreateManyInput | DownloadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Download createManyAndReturn
   */
  export type DownloadCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Download
     */
    select?: DownloadSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Download
     */
    omit?: DownloadOmit<ExtArgs> | null
    /**
     * The data used to create many Downloads.
     */
    data: DownloadCreateManyInput | DownloadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Download update
   */
  export type DownloadUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Download
     */
    select?: DownloadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Download
     */
    omit?: DownloadOmit<ExtArgs> | null
    /**
     * The data needed to update a Download.
     */
    data: XOR<DownloadUpdateInput, DownloadUncheckedUpdateInput>
    /**
     * Choose, which Download to update.
     */
    where: DownloadWhereUniqueInput
  }

  /**
   * Download updateMany
   */
  export type DownloadUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Downloads.
     */
    data: XOR<DownloadUpdateManyMutationInput, DownloadUncheckedUpdateManyInput>
    /**
     * Filter which Downloads to update
     */
    where?: DownloadWhereInput
    /**
     * Limit how many Downloads to update.
     */
    limit?: number
  }

  /**
   * Download updateManyAndReturn
   */
  export type DownloadUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Download
     */
    select?: DownloadSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Download
     */
    omit?: DownloadOmit<ExtArgs> | null
    /**
     * The data used to update Downloads.
     */
    data: XOR<DownloadUpdateManyMutationInput, DownloadUncheckedUpdateManyInput>
    /**
     * Filter which Downloads to update
     */
    where?: DownloadWhereInput
    /**
     * Limit how many Downloads to update.
     */
    limit?: number
  }

  /**
   * Download upsert
   */
  export type DownloadUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Download
     */
    select?: DownloadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Download
     */
    omit?: DownloadOmit<ExtArgs> | null
    /**
     * The filter to search for the Download to update in case it exists.
     */
    where: DownloadWhereUniqueInput
    /**
     * In case the Download found by the `where` argument doesn't exist, create a new Download with this data.
     */
    create: XOR<DownloadCreateInput, DownloadUncheckedCreateInput>
    /**
     * In case the Download was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DownloadUpdateInput, DownloadUncheckedUpdateInput>
  }

  /**
   * Download delete
   */
  export type DownloadDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Download
     */
    select?: DownloadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Download
     */
    omit?: DownloadOmit<ExtArgs> | null
    /**
     * Filter which Download to delete.
     */
    where: DownloadWhereUniqueInput
  }

  /**
   * Download deleteMany
   */
  export type DownloadDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Downloads to delete
     */
    where?: DownloadWhereInput
    /**
     * Limit how many Downloads to delete.
     */
    limit?: number
  }

  /**
   * Download without action
   */
  export type DownloadDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Download
     */
    select?: DownloadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Download
     */
    omit?: DownloadOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    email: 'email',
    mobile: 'mobile',
    status: 'status',
    createdTime: 'createdTime',
    updatedTime: 'updatedTime'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RoleScalarFieldEnum: {
    id: 'id',
    name: 'name',
    title: 'title',
    createdTime: 'createdTime',
    updatedTime: 'updatedTime'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const SignScalarFieldEnum: {
    id: 'id',
    date: 'date',
    userId: 'userId',
    createdTime: 'createdTime',
    updatedTime: 'updatedTime'
  };

  export type SignScalarFieldEnum = (typeof SignScalarFieldEnum)[keyof typeof SignScalarFieldEnum]


  export const AIGeneratorScalarFieldEnum: {
    id: 'id',
    desc: 'desc',
    date: 'date',
    times: 'times',
    userId: 'userId',
    createdTime: 'createdTime',
    updatedTime: 'updatedTime'
  };

  export type AIGeneratorScalarFieldEnum = (typeof AIGeneratorScalarFieldEnum)[keyof typeof AIGeneratorScalarFieldEnum]


  export const AIGenerateContentScalarFieldEnum: {
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

  export type AIGenerateContentScalarFieldEnum = (typeof AIGenerateContentScalarFieldEnum)[keyof typeof AIGenerateContentScalarFieldEnum]


  export const ProfileScalarFieldEnum: {
    id: 'id',
    score: 'score',
    grade: 'grade',
    userID: 'userID',
    createdTime: 'createdTime',
    updatedTime: 'updatedTime'
  };

  export type ProfileScalarFieldEnum = (typeof ProfileScalarFieldEnum)[keyof typeof ProfileScalarFieldEnum]


  export const InviteScalarFieldEnum: {
    id: 'id',
    inviterId: 'inviterId',
    inviteeId: 'inviteeId',
    createdTime: 'createdTime',
    updatedTime: 'updatedTime'
  };

  export type InviteScalarFieldEnum = (typeof InviteScalarFieldEnum)[keyof typeof InviteScalarFieldEnum]


  export const ResumeScalarFieldEnum: {
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

  export type ResumeScalarFieldEnum = (typeof ResumeScalarFieldEnum)[keyof typeof ResumeScalarFieldEnum]


  export const WorksScalarFieldEnum: {
    id: 'id',
    content: 'content',
    resumeId: 'resumeId',
    createdTime: 'createdTime',
    updatedTime: 'updatedTime'
  };

  export type WorksScalarFieldEnum = (typeof WorksScalarFieldEnum)[keyof typeof WorksScalarFieldEnum]


  export const ProjectsScalarFieldEnum: {
    id: 'id',
    content: 'content',
    resumeId: 'resumeId',
    createdTime: 'createdTime',
    updatedTime: 'updatedTime'
  };

  export type ProjectsScalarFieldEnum = (typeof ProjectsScalarFieldEnum)[keyof typeof ProjectsScalarFieldEnum]


  export const TemplateScalarFieldEnum: {
    id: 'id',
    title: 'title',
    path: 'path',
    type: 'type',
    createdTime: 'createdTime',
    updatedTime: 'updatedTime'
  };

  export type TemplateScalarFieldEnum = (typeof TemplateScalarFieldEnum)[keyof typeof TemplateScalarFieldEnum]


  export const DownloadScalarFieldEnum: {
    id: 'id',
    title: 'title',
    url: 'url',
    createdTime: 'createdTime',
    updatedTime: 'updatedTime'
  };

  export type DownloadScalarFieldEnum = (typeof DownloadScalarFieldEnum)[keyof typeof DownloadScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    email?: StringNullableFilter<"User"> | string | null
    mobile?: StringNullableFilter<"User"> | string | null
    status?: StringNullableFilter<"User"> | string | null
    createdTime?: DateTimeFilter<"User"> | Date | string
    updatedTime?: DateTimeFilter<"User"> | Date | string
    profile?: XOR<ProfileNullableScalarRelationFilter, ProfileWhereInput> | null
    resume?: ResumeListRelationFilter
    inviter?: InviteListRelationFilter
    invitee?: InviteListRelationFilter
    aiGenerator?: AIGeneratorListRelationFilter
    sign?: SignListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrderInput | SortOrder
    mobile?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    createdTime?: SortOrder
    updatedTime?: SortOrder
    profile?: ProfileOrderByWithRelationInput
    resume?: ResumeOrderByRelationAggregateInput
    inviter?: InviteOrderByRelationAggregateInput
    invitee?: InviteOrderByRelationAggregateInput
    aiGenerator?: AIGeneratorOrderByRelationAggregateInput
    sign?: SignOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    email?: string
    mobile?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    status?: StringNullableFilter<"User"> | string | null
    createdTime?: DateTimeFilter<"User"> | Date | string
    updatedTime?: DateTimeFilter<"User"> | Date | string
    profile?: XOR<ProfileNullableScalarRelationFilter, ProfileWhereInput> | null
    resume?: ResumeListRelationFilter
    inviter?: InviteListRelationFilter
    invitee?: InviteListRelationFilter
    aiGenerator?: AIGeneratorListRelationFilter
    sign?: SignListRelationFilter
  }, "id" | "username" | "email" | "mobile">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrderInput | SortOrder
    mobile?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    createdTime?: SortOrder
    updatedTime?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    mobile?: StringNullableWithAggregatesFilter<"User"> | string | null
    status?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdTime?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedTime?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type RoleWhereInput = {
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    id?: StringFilter<"Role"> | string
    name?: StringFilter<"Role"> | string
    title?: StringFilter<"Role"> | string
    createdTime?: DateTimeFilter<"Role"> | Date | string
    updatedTime?: DateTimeFilter<"Role"> | Date | string
  }

  export type RoleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    title?: SortOrder
    createdTime?: SortOrder
    updatedTime?: SortOrder
  }

  export type RoleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    title?: string
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    createdTime?: DateTimeFilter<"Role"> | Date | string
    updatedTime?: DateTimeFilter<"Role"> | Date | string
  }, "id" | "name" | "title">

  export type RoleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    title?: SortOrder
    createdTime?: SortOrder
    updatedTime?: SortOrder
    _count?: RoleCountOrderByAggregateInput
    _max?: RoleMaxOrderByAggregateInput
    _min?: RoleMinOrderByAggregateInput
  }

  export type RoleScalarWhereWithAggregatesInput = {
    AND?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    OR?: RoleScalarWhereWithAggregatesInput[]
    NOT?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Role"> | string
    name?: StringWithAggregatesFilter<"Role"> | string
    title?: StringWithAggregatesFilter<"Role"> | string
    createdTime?: DateTimeWithAggregatesFilter<"Role"> | Date | string
    updatedTime?: DateTimeWithAggregatesFilter<"Role"> | Date | string
  }

  export type SignWhereInput = {
    AND?: SignWhereInput | SignWhereInput[]
    OR?: SignWhereInput[]
    NOT?: SignWhereInput | SignWhereInput[]
    id?: StringFilter<"Sign"> | string
    date?: IntFilter<"Sign"> | number
    userId?: StringFilter<"Sign"> | string
    createdTime?: DateTimeFilter<"Sign"> | Date | string
    updatedTime?: DateTimeFilter<"Sign"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type SignOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    userId?: SortOrder
    createdTime?: SortOrder
    updatedTime?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SignWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SignWhereInput | SignWhereInput[]
    OR?: SignWhereInput[]
    NOT?: SignWhereInput | SignWhereInput[]
    date?: IntFilter<"Sign"> | number
    userId?: StringFilter<"Sign"> | string
    createdTime?: DateTimeFilter<"Sign"> | Date | string
    updatedTime?: DateTimeFilter<"Sign"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type SignOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    userId?: SortOrder
    createdTime?: SortOrder
    updatedTime?: SortOrder
    _count?: SignCountOrderByAggregateInput
    _avg?: SignAvgOrderByAggregateInput
    _max?: SignMaxOrderByAggregateInput
    _min?: SignMinOrderByAggregateInput
    _sum?: SignSumOrderByAggregateInput
  }

  export type SignScalarWhereWithAggregatesInput = {
    AND?: SignScalarWhereWithAggregatesInput | SignScalarWhereWithAggregatesInput[]
    OR?: SignScalarWhereWithAggregatesInput[]
    NOT?: SignScalarWhereWithAggregatesInput | SignScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Sign"> | string
    date?: IntWithAggregatesFilter<"Sign"> | number
    userId?: StringWithAggregatesFilter<"Sign"> | string
    createdTime?: DateTimeWithAggregatesFilter<"Sign"> | Date | string
    updatedTime?: DateTimeWithAggregatesFilter<"Sign"> | Date | string
  }

  export type AIGeneratorWhereInput = {
    AND?: AIGeneratorWhereInput | AIGeneratorWhereInput[]
    OR?: AIGeneratorWhereInput[]
    NOT?: AIGeneratorWhereInput | AIGeneratorWhereInput[]
    id?: StringFilter<"AIGenerator"> | string
    desc?: StringFilter<"AIGenerator"> | string
    date?: IntFilter<"AIGenerator"> | number
    times?: IntFilter<"AIGenerator"> | number
    userId?: StringFilter<"AIGenerator"> | string
    createdTime?: DateTimeFilter<"AIGenerator"> | Date | string
    updatedTime?: DateTimeFilter<"AIGenerator"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    aiGenerateContent?: AIGenerateContentListRelationFilter
  }

  export type AIGeneratorOrderByWithRelationInput = {
    id?: SortOrder
    desc?: SortOrder
    date?: SortOrder
    times?: SortOrder
    userId?: SortOrder
    createdTime?: SortOrder
    updatedTime?: SortOrder
    user?: UserOrderByWithRelationInput
    aiGenerateContent?: AIGenerateContentOrderByRelationAggregateInput
  }

  export type AIGeneratorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AIGeneratorWhereInput | AIGeneratorWhereInput[]
    OR?: AIGeneratorWhereInput[]
    NOT?: AIGeneratorWhereInput | AIGeneratorWhereInput[]
    desc?: StringFilter<"AIGenerator"> | string
    date?: IntFilter<"AIGenerator"> | number
    times?: IntFilter<"AIGenerator"> | number
    userId?: StringFilter<"AIGenerator"> | string
    createdTime?: DateTimeFilter<"AIGenerator"> | Date | string
    updatedTime?: DateTimeFilter<"AIGenerator"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    aiGenerateContent?: AIGenerateContentListRelationFilter
  }, "id">

  export type AIGeneratorOrderByWithAggregationInput = {
    id?: SortOrder
    desc?: SortOrder
    date?: SortOrder
    times?: SortOrder
    userId?: SortOrder
    createdTime?: SortOrder
    updatedTime?: SortOrder
    _count?: AIGeneratorCountOrderByAggregateInput
    _avg?: AIGeneratorAvgOrderByAggregateInput
    _max?: AIGeneratorMaxOrderByAggregateInput
    _min?: AIGeneratorMinOrderByAggregateInput
    _sum?: AIGeneratorSumOrderByAggregateInput
  }

  export type AIGeneratorScalarWhereWithAggregatesInput = {
    AND?: AIGeneratorScalarWhereWithAggregatesInput | AIGeneratorScalarWhereWithAggregatesInput[]
    OR?: AIGeneratorScalarWhereWithAggregatesInput[]
    NOT?: AIGeneratorScalarWhereWithAggregatesInput | AIGeneratorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AIGenerator"> | string
    desc?: StringWithAggregatesFilter<"AIGenerator"> | string
    date?: IntWithAggregatesFilter<"AIGenerator"> | number
    times?: IntWithAggregatesFilter<"AIGenerator"> | number
    userId?: StringWithAggregatesFilter<"AIGenerator"> | string
    createdTime?: DateTimeWithAggregatesFilter<"AIGenerator"> | Date | string
    updatedTime?: DateTimeWithAggregatesFilter<"AIGenerator"> | Date | string
  }

  export type AIGenerateContentWhereInput = {
    AND?: AIGenerateContentWhereInput | AIGenerateContentWhereInput[]
    OR?: AIGenerateContentWhereInput[]
    NOT?: AIGenerateContentWhereInput | AIGenerateContentWhereInput[]
    id?: StringFilter<"AIGenerateContent"> | string
    gid?: StringFilter<"AIGenerateContent"> | string
    model?: StringFilter<"AIGenerateContent"> | string
    promptTokens?: IntFilter<"AIGenerateContent"> | number
    completionTokens?: IntFilter<"AIGenerateContent"> | number
    object?: StringFilter<"AIGenerateContent"> | string
    userMessage?: StringFilter<"AIGenerateContent"> | string
    aiGeneratorId?: StringNullableFilter<"AIGenerateContent"> | string | null
    createdTime?: DateTimeFilter<"AIGenerateContent"> | Date | string
    updatedTime?: DateTimeFilter<"AIGenerateContent"> | Date | string
    aiGenerator?: XOR<AIGeneratorNullableScalarRelationFilter, AIGeneratorWhereInput> | null
  }

  export type AIGenerateContentOrderByWithRelationInput = {
    id?: SortOrder
    gid?: SortOrder
    model?: SortOrder
    promptTokens?: SortOrder
    completionTokens?: SortOrder
    object?: SortOrder
    userMessage?: SortOrder
    aiGeneratorId?: SortOrderInput | SortOrder
    createdTime?: SortOrder
    updatedTime?: SortOrder
    aiGenerator?: AIGeneratorOrderByWithRelationInput
  }

  export type AIGenerateContentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AIGenerateContentWhereInput | AIGenerateContentWhereInput[]
    OR?: AIGenerateContentWhereInput[]
    NOT?: AIGenerateContentWhereInput | AIGenerateContentWhereInput[]
    gid?: StringFilter<"AIGenerateContent"> | string
    model?: StringFilter<"AIGenerateContent"> | string
    promptTokens?: IntFilter<"AIGenerateContent"> | number
    completionTokens?: IntFilter<"AIGenerateContent"> | number
    object?: StringFilter<"AIGenerateContent"> | string
    userMessage?: StringFilter<"AIGenerateContent"> | string
    aiGeneratorId?: StringNullableFilter<"AIGenerateContent"> | string | null
    createdTime?: DateTimeFilter<"AIGenerateContent"> | Date | string
    updatedTime?: DateTimeFilter<"AIGenerateContent"> | Date | string
    aiGenerator?: XOR<AIGeneratorNullableScalarRelationFilter, AIGeneratorWhereInput> | null
  }, "id">

  export type AIGenerateContentOrderByWithAggregationInput = {
    id?: SortOrder
    gid?: SortOrder
    model?: SortOrder
    promptTokens?: SortOrder
    completionTokens?: SortOrder
    object?: SortOrder
    userMessage?: SortOrder
    aiGeneratorId?: SortOrderInput | SortOrder
    createdTime?: SortOrder
    updatedTime?: SortOrder
    _count?: AIGenerateContentCountOrderByAggregateInput
    _avg?: AIGenerateContentAvgOrderByAggregateInput
    _max?: AIGenerateContentMaxOrderByAggregateInput
    _min?: AIGenerateContentMinOrderByAggregateInput
    _sum?: AIGenerateContentSumOrderByAggregateInput
  }

  export type AIGenerateContentScalarWhereWithAggregatesInput = {
    AND?: AIGenerateContentScalarWhereWithAggregatesInput | AIGenerateContentScalarWhereWithAggregatesInput[]
    OR?: AIGenerateContentScalarWhereWithAggregatesInput[]
    NOT?: AIGenerateContentScalarWhereWithAggregatesInput | AIGenerateContentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AIGenerateContent"> | string
    gid?: StringWithAggregatesFilter<"AIGenerateContent"> | string
    model?: StringWithAggregatesFilter<"AIGenerateContent"> | string
    promptTokens?: IntWithAggregatesFilter<"AIGenerateContent"> | number
    completionTokens?: IntWithAggregatesFilter<"AIGenerateContent"> | number
    object?: StringWithAggregatesFilter<"AIGenerateContent"> | string
    userMessage?: StringWithAggregatesFilter<"AIGenerateContent"> | string
    aiGeneratorId?: StringNullableWithAggregatesFilter<"AIGenerateContent"> | string | null
    createdTime?: DateTimeWithAggregatesFilter<"AIGenerateContent"> | Date | string
    updatedTime?: DateTimeWithAggregatesFilter<"AIGenerateContent"> | Date | string
  }

  export type ProfileWhereInput = {
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    id?: StringFilter<"Profile"> | string
    score?: IntNullableFilter<"Profile"> | number | null
    grade?: IntNullableFilter<"Profile"> | number | null
    userID?: StringNullableFilter<"Profile"> | string | null
    createdTime?: DateTimeFilter<"Profile"> | Date | string
    updatedTime?: DateTimeFilter<"Profile"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type ProfileOrderByWithRelationInput = {
    id?: SortOrder
    score?: SortOrderInput | SortOrder
    grade?: SortOrderInput | SortOrder
    userID?: SortOrderInput | SortOrder
    createdTime?: SortOrder
    updatedTime?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userID?: string
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    score?: IntNullableFilter<"Profile"> | number | null
    grade?: IntNullableFilter<"Profile"> | number | null
    createdTime?: DateTimeFilter<"Profile"> | Date | string
    updatedTime?: DateTimeFilter<"Profile"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id" | "userID">

  export type ProfileOrderByWithAggregationInput = {
    id?: SortOrder
    score?: SortOrderInput | SortOrder
    grade?: SortOrderInput | SortOrder
    userID?: SortOrderInput | SortOrder
    createdTime?: SortOrder
    updatedTime?: SortOrder
    _count?: ProfileCountOrderByAggregateInput
    _avg?: ProfileAvgOrderByAggregateInput
    _max?: ProfileMaxOrderByAggregateInput
    _min?: ProfileMinOrderByAggregateInput
    _sum?: ProfileSumOrderByAggregateInput
  }

  export type ProfileScalarWhereWithAggregatesInput = {
    AND?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    OR?: ProfileScalarWhereWithAggregatesInput[]
    NOT?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Profile"> | string
    score?: IntNullableWithAggregatesFilter<"Profile"> | number | null
    grade?: IntNullableWithAggregatesFilter<"Profile"> | number | null
    userID?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    createdTime?: DateTimeWithAggregatesFilter<"Profile"> | Date | string
    updatedTime?: DateTimeWithAggregatesFilter<"Profile"> | Date | string
  }

  export type InviteWhereInput = {
    AND?: InviteWhereInput | InviteWhereInput[]
    OR?: InviteWhereInput[]
    NOT?: InviteWhereInput | InviteWhereInput[]
    id?: StringFilter<"Invite"> | string
    inviterId?: StringNullableFilter<"Invite"> | string | null
    inviteeId?: StringNullableFilter<"Invite"> | string | null
    createdTime?: DateTimeFilter<"Invite"> | Date | string
    updatedTime?: DateTimeFilter<"Invite"> | Date | string
    inviter?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    invitee?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type InviteOrderByWithRelationInput = {
    id?: SortOrder
    inviterId?: SortOrderInput | SortOrder
    inviteeId?: SortOrderInput | SortOrder
    createdTime?: SortOrder
    updatedTime?: SortOrder
    inviter?: UserOrderByWithRelationInput
    invitee?: UserOrderByWithRelationInput
  }

  export type InviteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InviteWhereInput | InviteWhereInput[]
    OR?: InviteWhereInput[]
    NOT?: InviteWhereInput | InviteWhereInput[]
    inviterId?: StringNullableFilter<"Invite"> | string | null
    inviteeId?: StringNullableFilter<"Invite"> | string | null
    createdTime?: DateTimeFilter<"Invite"> | Date | string
    updatedTime?: DateTimeFilter<"Invite"> | Date | string
    inviter?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    invitee?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type InviteOrderByWithAggregationInput = {
    id?: SortOrder
    inviterId?: SortOrderInput | SortOrder
    inviteeId?: SortOrderInput | SortOrder
    createdTime?: SortOrder
    updatedTime?: SortOrder
    _count?: InviteCountOrderByAggregateInput
    _max?: InviteMaxOrderByAggregateInput
    _min?: InviteMinOrderByAggregateInput
  }

  export type InviteScalarWhereWithAggregatesInput = {
    AND?: InviteScalarWhereWithAggregatesInput | InviteScalarWhereWithAggregatesInput[]
    OR?: InviteScalarWhereWithAggregatesInput[]
    NOT?: InviteScalarWhereWithAggregatesInput | InviteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Invite"> | string
    inviterId?: StringNullableWithAggregatesFilter<"Invite"> | string | null
    inviteeId?: StringNullableWithAggregatesFilter<"Invite"> | string | null
    createdTime?: DateTimeWithAggregatesFilter<"Invite"> | Date | string
    updatedTime?: DateTimeWithAggregatesFilter<"Invite"> | Date | string
  }

  export type ResumeWhereInput = {
    AND?: ResumeWhereInput | ResumeWhereInput[]
    OR?: ResumeWhereInput[]
    NOT?: ResumeWhereInput | ResumeWhereInput[]
    id?: StringFilter<"Resume"> | string
    title?: StringFilter<"Resume"> | string
    realname?: StringNullableFilter<"Resume"> | string | null
    age?: IntNullableFilter<"Resume"> | number | null
    education?: StringNullableFilter<"Resume"> | string | null
    address?: StringNullableFilter<"Resume"> | string | null
    mobile?: StringNullableFilter<"Resume"> | string | null
    email?: StringNullableFilter<"Resume"> | string | null
    avatar?: StringNullableFilter<"Resume"> | string | null
    status?: StringNullableFilter<"Resume"> | string | null
    industry?: StringNullableFilter<"Resume"> | string | null
    userId?: StringNullableFilter<"Resume"> | string | null
    templateId?: StringNullableFilter<"Resume"> | string | null
    createdTime?: DateTimeFilter<"Resume"> | Date | string
    updatedTime?: DateTimeFilter<"Resume"> | Date | string
    works?: WorksListRelationFilter
    projects?: ProjectsListRelationFilter
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    template?: XOR<TemplateNullableScalarRelationFilter, TemplateWhereInput> | null
  }

  export type ResumeOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    realname?: SortOrderInput | SortOrder
    age?: SortOrderInput | SortOrder
    education?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    mobile?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    industry?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    templateId?: SortOrderInput | SortOrder
    createdTime?: SortOrder
    updatedTime?: SortOrder
    works?: WorksOrderByRelationAggregateInput
    projects?: ProjectsOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
    template?: TemplateOrderByWithRelationInput
  }

  export type ResumeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    title?: string
    AND?: ResumeWhereInput | ResumeWhereInput[]
    OR?: ResumeWhereInput[]
    NOT?: ResumeWhereInput | ResumeWhereInput[]
    realname?: StringNullableFilter<"Resume"> | string | null
    age?: IntNullableFilter<"Resume"> | number | null
    education?: StringNullableFilter<"Resume"> | string | null
    address?: StringNullableFilter<"Resume"> | string | null
    mobile?: StringNullableFilter<"Resume"> | string | null
    email?: StringNullableFilter<"Resume"> | string | null
    avatar?: StringNullableFilter<"Resume"> | string | null
    status?: StringNullableFilter<"Resume"> | string | null
    industry?: StringNullableFilter<"Resume"> | string | null
    userId?: StringNullableFilter<"Resume"> | string | null
    templateId?: StringNullableFilter<"Resume"> | string | null
    createdTime?: DateTimeFilter<"Resume"> | Date | string
    updatedTime?: DateTimeFilter<"Resume"> | Date | string
    works?: WorksListRelationFilter
    projects?: ProjectsListRelationFilter
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    template?: XOR<TemplateNullableScalarRelationFilter, TemplateWhereInput> | null
  }, "id" | "title">

  export type ResumeOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    realname?: SortOrderInput | SortOrder
    age?: SortOrderInput | SortOrder
    education?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    mobile?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    industry?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    templateId?: SortOrderInput | SortOrder
    createdTime?: SortOrder
    updatedTime?: SortOrder
    _count?: ResumeCountOrderByAggregateInput
    _avg?: ResumeAvgOrderByAggregateInput
    _max?: ResumeMaxOrderByAggregateInput
    _min?: ResumeMinOrderByAggregateInput
    _sum?: ResumeSumOrderByAggregateInput
  }

  export type ResumeScalarWhereWithAggregatesInput = {
    AND?: ResumeScalarWhereWithAggregatesInput | ResumeScalarWhereWithAggregatesInput[]
    OR?: ResumeScalarWhereWithAggregatesInput[]
    NOT?: ResumeScalarWhereWithAggregatesInput | ResumeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Resume"> | string
    title?: StringWithAggregatesFilter<"Resume"> | string
    realname?: StringNullableWithAggregatesFilter<"Resume"> | string | null
    age?: IntNullableWithAggregatesFilter<"Resume"> | number | null
    education?: StringNullableWithAggregatesFilter<"Resume"> | string | null
    address?: StringNullableWithAggregatesFilter<"Resume"> | string | null
    mobile?: StringNullableWithAggregatesFilter<"Resume"> | string | null
    email?: StringNullableWithAggregatesFilter<"Resume"> | string | null
    avatar?: StringNullableWithAggregatesFilter<"Resume"> | string | null
    status?: StringNullableWithAggregatesFilter<"Resume"> | string | null
    industry?: StringNullableWithAggregatesFilter<"Resume"> | string | null
    userId?: StringNullableWithAggregatesFilter<"Resume"> | string | null
    templateId?: StringNullableWithAggregatesFilter<"Resume"> | string | null
    createdTime?: DateTimeWithAggregatesFilter<"Resume"> | Date | string
    updatedTime?: DateTimeWithAggregatesFilter<"Resume"> | Date | string
  }

  export type WorksWhereInput = {
    AND?: WorksWhereInput | WorksWhereInput[]
    OR?: WorksWhereInput[]
    NOT?: WorksWhereInput | WorksWhereInput[]
    id?: StringFilter<"Works"> | string
    content?: StringFilter<"Works"> | string
    resumeId?: StringFilter<"Works"> | string
    createdTime?: DateTimeFilter<"Works"> | Date | string
    updatedTime?: DateTimeFilter<"Works"> | Date | string
    resume?: XOR<ResumeNullableScalarRelationFilter, ResumeWhereInput> | null
  }

  export type WorksOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    resumeId?: SortOrder
    createdTime?: SortOrder
    updatedTime?: SortOrder
    resume?: ResumeOrderByWithRelationInput
  }

  export type WorksWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WorksWhereInput | WorksWhereInput[]
    OR?: WorksWhereInput[]
    NOT?: WorksWhereInput | WorksWhereInput[]
    content?: StringFilter<"Works"> | string
    resumeId?: StringFilter<"Works"> | string
    createdTime?: DateTimeFilter<"Works"> | Date | string
    updatedTime?: DateTimeFilter<"Works"> | Date | string
    resume?: XOR<ResumeNullableScalarRelationFilter, ResumeWhereInput> | null
  }, "id">

  export type WorksOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    resumeId?: SortOrder
    createdTime?: SortOrder
    updatedTime?: SortOrder
    _count?: WorksCountOrderByAggregateInput
    _max?: WorksMaxOrderByAggregateInput
    _min?: WorksMinOrderByAggregateInput
  }

  export type WorksScalarWhereWithAggregatesInput = {
    AND?: WorksScalarWhereWithAggregatesInput | WorksScalarWhereWithAggregatesInput[]
    OR?: WorksScalarWhereWithAggregatesInput[]
    NOT?: WorksScalarWhereWithAggregatesInput | WorksScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Works"> | string
    content?: StringWithAggregatesFilter<"Works"> | string
    resumeId?: StringWithAggregatesFilter<"Works"> | string
    createdTime?: DateTimeWithAggregatesFilter<"Works"> | Date | string
    updatedTime?: DateTimeWithAggregatesFilter<"Works"> | Date | string
  }

  export type ProjectsWhereInput = {
    AND?: ProjectsWhereInput | ProjectsWhereInput[]
    OR?: ProjectsWhereInput[]
    NOT?: ProjectsWhereInput | ProjectsWhereInput[]
    id?: StringFilter<"Projects"> | string
    content?: StringFilter<"Projects"> | string
    resumeId?: StringFilter<"Projects"> | string
    createdTime?: DateTimeFilter<"Projects"> | Date | string
    updatedTime?: DateTimeFilter<"Projects"> | Date | string
    resume?: XOR<ResumeNullableScalarRelationFilter, ResumeWhereInput> | null
  }

  export type ProjectsOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    resumeId?: SortOrder
    createdTime?: SortOrder
    updatedTime?: SortOrder
    resume?: ResumeOrderByWithRelationInput
  }

  export type ProjectsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProjectsWhereInput | ProjectsWhereInput[]
    OR?: ProjectsWhereInput[]
    NOT?: ProjectsWhereInput | ProjectsWhereInput[]
    content?: StringFilter<"Projects"> | string
    resumeId?: StringFilter<"Projects"> | string
    createdTime?: DateTimeFilter<"Projects"> | Date | string
    updatedTime?: DateTimeFilter<"Projects"> | Date | string
    resume?: XOR<ResumeNullableScalarRelationFilter, ResumeWhereInput> | null
  }, "id">

  export type ProjectsOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    resumeId?: SortOrder
    createdTime?: SortOrder
    updatedTime?: SortOrder
    _count?: ProjectsCountOrderByAggregateInput
    _max?: ProjectsMaxOrderByAggregateInput
    _min?: ProjectsMinOrderByAggregateInput
  }

  export type ProjectsScalarWhereWithAggregatesInput = {
    AND?: ProjectsScalarWhereWithAggregatesInput | ProjectsScalarWhereWithAggregatesInput[]
    OR?: ProjectsScalarWhereWithAggregatesInput[]
    NOT?: ProjectsScalarWhereWithAggregatesInput | ProjectsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Projects"> | string
    content?: StringWithAggregatesFilter<"Projects"> | string
    resumeId?: StringWithAggregatesFilter<"Projects"> | string
    createdTime?: DateTimeWithAggregatesFilter<"Projects"> | Date | string
    updatedTime?: DateTimeWithAggregatesFilter<"Projects"> | Date | string
  }

  export type TemplateWhereInput = {
    AND?: TemplateWhereInput | TemplateWhereInput[]
    OR?: TemplateWhereInput[]
    NOT?: TemplateWhereInput | TemplateWhereInput[]
    id?: StringFilter<"Template"> | string
    title?: StringFilter<"Template"> | string
    path?: StringFilter<"Template"> | string
    type?: StringNullableFilter<"Template"> | string | null
    createdTime?: DateTimeFilter<"Template"> | Date | string
    updatedTime?: DateTimeFilter<"Template"> | Date | string
    resume?: ResumeListRelationFilter
  }

  export type TemplateOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    path?: SortOrder
    type?: SortOrderInput | SortOrder
    createdTime?: SortOrder
    updatedTime?: SortOrder
    resume?: ResumeOrderByRelationAggregateInput
  }

  export type TemplateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TemplateWhereInput | TemplateWhereInput[]
    OR?: TemplateWhereInput[]
    NOT?: TemplateWhereInput | TemplateWhereInput[]
    title?: StringFilter<"Template"> | string
    path?: StringFilter<"Template"> | string
    type?: StringNullableFilter<"Template"> | string | null
    createdTime?: DateTimeFilter<"Template"> | Date | string
    updatedTime?: DateTimeFilter<"Template"> | Date | string
    resume?: ResumeListRelationFilter
  }, "id">

  export type TemplateOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    path?: SortOrder
    type?: SortOrderInput | SortOrder
    createdTime?: SortOrder
    updatedTime?: SortOrder
    _count?: TemplateCountOrderByAggregateInput
    _max?: TemplateMaxOrderByAggregateInput
    _min?: TemplateMinOrderByAggregateInput
  }

  export type TemplateScalarWhereWithAggregatesInput = {
    AND?: TemplateScalarWhereWithAggregatesInput | TemplateScalarWhereWithAggregatesInput[]
    OR?: TemplateScalarWhereWithAggregatesInput[]
    NOT?: TemplateScalarWhereWithAggregatesInput | TemplateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Template"> | string
    title?: StringWithAggregatesFilter<"Template"> | string
    path?: StringWithAggregatesFilter<"Template"> | string
    type?: StringNullableWithAggregatesFilter<"Template"> | string | null
    createdTime?: DateTimeWithAggregatesFilter<"Template"> | Date | string
    updatedTime?: DateTimeWithAggregatesFilter<"Template"> | Date | string
  }

  export type DownloadWhereInput = {
    AND?: DownloadWhereInput | DownloadWhereInput[]
    OR?: DownloadWhereInput[]
    NOT?: DownloadWhereInput | DownloadWhereInput[]
    id?: StringFilter<"Download"> | string
    title?: StringFilter<"Download"> | string
    url?: StringFilter<"Download"> | string
    createdTime?: DateTimeFilter<"Download"> | Date | string
    updatedTime?: DateTimeFilter<"Download"> | Date | string
  }

  export type DownloadOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    url?: SortOrder
    createdTime?: SortOrder
    updatedTime?: SortOrder
  }

  export type DownloadWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DownloadWhereInput | DownloadWhereInput[]
    OR?: DownloadWhereInput[]
    NOT?: DownloadWhereInput | DownloadWhereInput[]
    title?: StringFilter<"Download"> | string
    url?: StringFilter<"Download"> | string
    createdTime?: DateTimeFilter<"Download"> | Date | string
    updatedTime?: DateTimeFilter<"Download"> | Date | string
  }, "id">

  export type DownloadOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    url?: SortOrder
    createdTime?: SortOrder
    updatedTime?: SortOrder
    _count?: DownloadCountOrderByAggregateInput
    _max?: DownloadMaxOrderByAggregateInput
    _min?: DownloadMinOrderByAggregateInput
  }

  export type DownloadScalarWhereWithAggregatesInput = {
    AND?: DownloadScalarWhereWithAggregatesInput | DownloadScalarWhereWithAggregatesInput[]
    OR?: DownloadScalarWhereWithAggregatesInput[]
    NOT?: DownloadScalarWhereWithAggregatesInput | DownloadScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Download"> | string
    title?: StringWithAggregatesFilter<"Download"> | string
    url?: StringWithAggregatesFilter<"Download"> | string
    createdTime?: DateTimeWithAggregatesFilter<"Download"> | Date | string
    updatedTime?: DateTimeWithAggregatesFilter<"Download"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    username: string
    password: string
    email?: string | null
    mobile?: string | null
    status?: string | null
    createdTime?: Date | string
    updatedTime?: Date | string
    profile?: ProfileCreateNestedOneWithoutUserInput
    resume?: ResumeCreateNestedManyWithoutUserInput
    inviter?: InviteCreateNestedManyWithoutInviterInput
    invitee?: InviteCreateNestedManyWithoutInviteeInput
    aiGenerator?: AIGeneratorCreateNestedManyWithoutUserInput
    sign?: SignCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    username: string
    password: string
    email?: string | null
    mobile?: string | null
    status?: string | null
    createdTime?: Date | string
    updatedTime?: Date | string
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    resume?: ResumeUncheckedCreateNestedManyWithoutUserInput
    inviter?: InviteUncheckedCreateNestedManyWithoutInviterInput
    invitee?: InviteUncheckedCreateNestedManyWithoutInviteeInput
    aiGenerator?: AIGeneratorUncheckedCreateNestedManyWithoutUserInput
    sign?: SignUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createdTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneWithoutUserNestedInput
    resume?: ResumeUpdateManyWithoutUserNestedInput
    inviter?: InviteUpdateManyWithoutInviterNestedInput
    invitee?: InviteUpdateManyWithoutInviteeNestedInput
    aiGenerator?: AIGeneratorUpdateManyWithoutUserNestedInput
    sign?: SignUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createdTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    resume?: ResumeUncheckedUpdateManyWithoutUserNestedInput
    inviter?: InviteUncheckedUpdateManyWithoutInviterNestedInput
    invitee?: InviteUncheckedUpdateManyWithoutInviteeNestedInput
    aiGenerator?: AIGeneratorUncheckedUpdateManyWithoutUserNestedInput
    sign?: SignUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    username: string
    password: string
    email?: string | null
    mobile?: string | null
    status?: string | null
    createdTime?: Date | string
    updatedTime?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createdTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createdTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleCreateInput = {
    id?: string
    name: string
    title: string
    createdTime?: Date | string
    updatedTime?: Date | string
  }

  export type RoleUncheckedCreateInput = {
    id?: string
    name: string
    title: string
    createdTime?: Date | string
    updatedTime?: Date | string
  }

  export type RoleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleCreateManyInput = {
    id?: string
    name: string
    title: string
    createdTime?: Date | string
    updatedTime?: Date | string
  }

  export type RoleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SignCreateInput = {
    id?: string
    date: number
    createdTime?: Date | string
    updatedTime?: Date | string
    user?: UserCreateNestedOneWithoutSignInput
  }

  export type SignUncheckedCreateInput = {
    id?: string
    date: number
    userId: string
    createdTime?: Date | string
    updatedTime?: Date | string
  }

  export type SignUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: IntFieldUpdateOperationsInput | number
    createdTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutSignNestedInput
  }

  export type SignUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    createdTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SignCreateManyInput = {
    id?: string
    date: number
    userId: string
    createdTime?: Date | string
    updatedTime?: Date | string
  }

  export type SignUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: IntFieldUpdateOperationsInput | number
    createdTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SignUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    createdTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AIGeneratorCreateInput = {
    id?: string
    desc: string
    date: number
    times: number
    createdTime?: Date | string
    updatedTime?: Date | string
    user?: UserCreateNestedOneWithoutAiGeneratorInput
    aiGenerateContent?: AIGenerateContentCreateNestedManyWithoutAiGeneratorInput
  }

  export type AIGeneratorUncheckedCreateInput = {
    id?: string
    desc: string
    date: number
    times: number
    userId: string
    createdTime?: Date | string
    updatedTime?: Date | string
    aiGenerateContent?: AIGenerateContentUncheckedCreateNestedManyWithoutAiGeneratorInput
  }

  export type AIGeneratorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    date?: IntFieldUpdateOperationsInput | number
    times?: IntFieldUpdateOperationsInput | number
    createdTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutAiGeneratorNestedInput
    aiGenerateContent?: AIGenerateContentUpdateManyWithoutAiGeneratorNestedInput
  }

  export type AIGeneratorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    date?: IntFieldUpdateOperationsInput | number
    times?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    createdTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    aiGenerateContent?: AIGenerateContentUncheckedUpdateManyWithoutAiGeneratorNestedInput
  }

  export type AIGeneratorCreateManyInput = {
    id?: string
    desc: string
    date: number
    times: number
    userId: string
    createdTime?: Date | string
    updatedTime?: Date | string
  }

  export type AIGeneratorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    date?: IntFieldUpdateOperationsInput | number
    times?: IntFieldUpdateOperationsInput | number
    createdTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AIGeneratorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    date?: IntFieldUpdateOperationsInput | number
    times?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    createdTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AIGenerateContentCreateInput = {
    id?: string
    gid: string
    model: string
    promptTokens: number
    completionTokens: number
    object: string
    userMessage: string
    createdTime?: Date | string
    updatedTime?: Date | string
    aiGenerator?: AIGeneratorCreateNestedOneWithoutAiGenerateContentInput
  }

  export type AIGenerateContentUncheckedCreateInput = {
    id?: string
    gid: string
    model: string
    promptTokens: number
    completionTokens: number
    object: string
    userMessage: string
    aiGeneratorId?: string | null
    createdTime?: Date | string
    updatedTime?: Date | string
  }

  export type AIGenerateContentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    gid?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    promptTokens?: IntFieldUpdateOperationsInput | number
    completionTokens?: IntFieldUpdateOperationsInput | number
    object?: StringFieldUpdateOperationsInput | string
    userMessage?: StringFieldUpdateOperationsInput | string
    createdTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    aiGenerator?: AIGeneratorUpdateOneWithoutAiGenerateContentNestedInput
  }

  export type AIGenerateContentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    gid?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    promptTokens?: IntFieldUpdateOperationsInput | number
    completionTokens?: IntFieldUpdateOperationsInput | number
    object?: StringFieldUpdateOperationsInput | string
    userMessage?: StringFieldUpdateOperationsInput | string
    aiGeneratorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AIGenerateContentCreateManyInput = {
    id?: string
    gid: string
    model: string
    promptTokens: number
    completionTokens: number
    object: string
    userMessage: string
    aiGeneratorId?: string | null
    createdTime?: Date | string
    updatedTime?: Date | string
  }

  export type AIGenerateContentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    gid?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    promptTokens?: IntFieldUpdateOperationsInput | number
    completionTokens?: IntFieldUpdateOperationsInput | number
    object?: StringFieldUpdateOperationsInput | string
    userMessage?: StringFieldUpdateOperationsInput | string
    createdTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AIGenerateContentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    gid?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    promptTokens?: IntFieldUpdateOperationsInput | number
    completionTokens?: IntFieldUpdateOperationsInput | number
    object?: StringFieldUpdateOperationsInput | string
    userMessage?: StringFieldUpdateOperationsInput | string
    aiGeneratorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileCreateInput = {
    id?: string
    score?: number | null
    grade?: number | null
    createdTime?: Date | string
    updatedTime?: Date | string
    user?: UserCreateNestedOneWithoutProfileInput
  }

  export type ProfileUncheckedCreateInput = {
    id?: string
    score?: number | null
    grade?: number | null
    userID?: string | null
    createdTime?: Date | string
    updatedTime?: Date | string
  }

  export type ProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: NullableIntFieldUpdateOperationsInput | number | null
    grade?: NullableIntFieldUpdateOperationsInput | number | null
    createdTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: NullableIntFieldUpdateOperationsInput | number | null
    grade?: NullableIntFieldUpdateOperationsInput | number | null
    userID?: NullableStringFieldUpdateOperationsInput | string | null
    createdTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileCreateManyInput = {
    id?: string
    score?: number | null
    grade?: number | null
    userID?: string | null
    createdTime?: Date | string
    updatedTime?: Date | string
  }

  export type ProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: NullableIntFieldUpdateOperationsInput | number | null
    grade?: NullableIntFieldUpdateOperationsInput | number | null
    createdTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: NullableIntFieldUpdateOperationsInput | number | null
    grade?: NullableIntFieldUpdateOperationsInput | number | null
    userID?: NullableStringFieldUpdateOperationsInput | string | null
    createdTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InviteCreateInput = {
    id?: string
    createdTime?: Date | string
    updatedTime?: Date | string
    inviter?: UserCreateNestedOneWithoutInviterInput
    invitee?: UserCreateNestedOneWithoutInviteeInput
  }

  export type InviteUncheckedCreateInput = {
    id?: string
    inviterId?: string | null
    inviteeId?: string | null
    createdTime?: Date | string
    updatedTime?: Date | string
  }

  export type InviteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    inviter?: UserUpdateOneWithoutInviterNestedInput
    invitee?: UserUpdateOneWithoutInviteeNestedInput
  }

  export type InviteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    inviterId?: NullableStringFieldUpdateOperationsInput | string | null
    inviteeId?: NullableStringFieldUpdateOperationsInput | string | null
    createdTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InviteCreateManyInput = {
    id?: string
    inviterId?: string | null
    inviteeId?: string | null
    createdTime?: Date | string
    updatedTime?: Date | string
  }

  export type InviteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InviteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    inviterId?: NullableStringFieldUpdateOperationsInput | string | null
    inviteeId?: NullableStringFieldUpdateOperationsInput | string | null
    createdTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResumeCreateInput = {
    id?: string
    title: string
    realname?: string | null
    age?: number | null
    education?: string | null
    address?: string | null
    mobile?: string | null
    email?: string | null
    avatar?: string | null
    status?: string | null
    industry?: string | null
    createdTime?: Date | string
    updatedTime?: Date | string
    works?: WorksCreateNestedManyWithoutResumeInput
    projects?: ProjectsCreateNestedManyWithoutResumeInput
    user?: UserCreateNestedOneWithoutResumeInput
    template?: TemplateCreateNestedOneWithoutResumeInput
  }

  export type ResumeUncheckedCreateInput = {
    id?: string
    title: string
    realname?: string | null
    age?: number | null
    education?: string | null
    address?: string | null
    mobile?: string | null
    email?: string | null
    avatar?: string | null
    status?: string | null
    industry?: string | null
    userId?: string | null
    templateId?: string | null
    createdTime?: Date | string
    updatedTime?: Date | string
    works?: WorksUncheckedCreateNestedManyWithoutResumeInput
    projects?: ProjectsUncheckedCreateNestedManyWithoutResumeInput
  }

  export type ResumeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    realname?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    createdTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    works?: WorksUpdateManyWithoutResumeNestedInput
    projects?: ProjectsUpdateManyWithoutResumeNestedInput
    user?: UserUpdateOneWithoutResumeNestedInput
    template?: TemplateUpdateOneWithoutResumeNestedInput
  }

  export type ResumeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    realname?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    templateId?: NullableStringFieldUpdateOperationsInput | string | null
    createdTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    works?: WorksUncheckedUpdateManyWithoutResumeNestedInput
    projects?: ProjectsUncheckedUpdateManyWithoutResumeNestedInput
  }

  export type ResumeCreateManyInput = {
    id?: string
    title: string
    realname?: string | null
    age?: number | null
    education?: string | null
    address?: string | null
    mobile?: string | null
    email?: string | null
    avatar?: string | null
    status?: string | null
    industry?: string | null
    userId?: string | null
    templateId?: string | null
    createdTime?: Date | string
    updatedTime?: Date | string
  }

  export type ResumeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    realname?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    createdTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResumeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    realname?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    templateId?: NullableStringFieldUpdateOperationsInput | string | null
    createdTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorksCreateInput = {
    id?: string
    content: string
    createdTime?: Date | string
    updatedTime?: Date | string
    resume?: ResumeCreateNestedOneWithoutWorksInput
  }

  export type WorksUncheckedCreateInput = {
    id?: string
    content: string
    resumeId: string
    createdTime?: Date | string
    updatedTime?: Date | string
  }

  export type WorksUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    resume?: ResumeUpdateOneWithoutWorksNestedInput
  }

  export type WorksUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    resumeId?: StringFieldUpdateOperationsInput | string
    createdTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorksCreateManyInput = {
    id?: string
    content: string
    resumeId: string
    createdTime?: Date | string
    updatedTime?: Date | string
  }

  export type WorksUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorksUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    resumeId?: StringFieldUpdateOperationsInput | string
    createdTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectsCreateInput = {
    id?: string
    content: string
    createdTime?: Date | string
    updatedTime?: Date | string
    resume?: ResumeCreateNestedOneWithoutProjectsInput
  }

  export type ProjectsUncheckedCreateInput = {
    id?: string
    content: string
    resumeId: string
    createdTime?: Date | string
    updatedTime?: Date | string
  }

  export type ProjectsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    resume?: ResumeUpdateOneWithoutProjectsNestedInput
  }

  export type ProjectsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    resumeId?: StringFieldUpdateOperationsInput | string
    createdTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectsCreateManyInput = {
    id?: string
    content: string
    resumeId: string
    createdTime?: Date | string
    updatedTime?: Date | string
  }

  export type ProjectsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    resumeId?: StringFieldUpdateOperationsInput | string
    createdTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemplateCreateInput = {
    id?: string
    title?: string
    path?: string
    type?: string | null
    createdTime?: Date | string
    updatedTime?: Date | string
    resume?: ResumeCreateNestedManyWithoutTemplateInput
  }

  export type TemplateUncheckedCreateInput = {
    id?: string
    title?: string
    path?: string
    type?: string | null
    createdTime?: Date | string
    updatedTime?: Date | string
    resume?: ResumeUncheckedCreateNestedManyWithoutTemplateInput
  }

  export type TemplateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    createdTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    resume?: ResumeUpdateManyWithoutTemplateNestedInput
  }

  export type TemplateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    createdTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    resume?: ResumeUncheckedUpdateManyWithoutTemplateNestedInput
  }

  export type TemplateCreateManyInput = {
    id?: string
    title?: string
    path?: string
    type?: string | null
    createdTime?: Date | string
    updatedTime?: Date | string
  }

  export type TemplateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    createdTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemplateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    createdTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DownloadCreateInput = {
    id?: string
    title: string
    url: string
    createdTime?: Date | string
    updatedTime?: Date | string
  }

  export type DownloadUncheckedCreateInput = {
    id?: string
    title: string
    url: string
    createdTime?: Date | string
    updatedTime?: Date | string
  }

  export type DownloadUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DownloadUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DownloadCreateManyInput = {
    id?: string
    title: string
    url: string
    createdTime?: Date | string
    updatedTime?: Date | string
  }

  export type DownloadUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DownloadUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ProfileNullableScalarRelationFilter = {
    is?: ProfileWhereInput | null
    isNot?: ProfileWhereInput | null
  }

  export type ResumeListRelationFilter = {
    every?: ResumeWhereInput
    some?: ResumeWhereInput
    none?: ResumeWhereInput
  }

  export type InviteListRelationFilter = {
    every?: InviteWhereInput
    some?: InviteWhereInput
    none?: InviteWhereInput
  }

  export type AIGeneratorListRelationFilter = {
    every?: AIGeneratorWhereInput
    some?: AIGeneratorWhereInput
    none?: AIGeneratorWhereInput
  }

  export type SignListRelationFilter = {
    every?: SignWhereInput
    some?: SignWhereInput
    none?: SignWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ResumeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InviteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AIGeneratorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SignOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    mobile?: SortOrder
    status?: SortOrder
    createdTime?: SortOrder
    updatedTime?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    mobile?: SortOrder
    status?: SortOrder
    createdTime?: SortOrder
    updatedTime?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    mobile?: SortOrder
    status?: SortOrder
    createdTime?: SortOrder
    updatedTime?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type RoleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    title?: SortOrder
    createdTime?: SortOrder
    updatedTime?: SortOrder
  }

  export type RoleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    title?: SortOrder
    createdTime?: SortOrder
    updatedTime?: SortOrder
  }

  export type RoleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    title?: SortOrder
    createdTime?: SortOrder
    updatedTime?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type SignCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    userId?: SortOrder
    createdTime?: SortOrder
    updatedTime?: SortOrder
  }

  export type SignAvgOrderByAggregateInput = {
    date?: SortOrder
  }

  export type SignMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    userId?: SortOrder
    createdTime?: SortOrder
    updatedTime?: SortOrder
  }

  export type SignMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    userId?: SortOrder
    createdTime?: SortOrder
    updatedTime?: SortOrder
  }

  export type SignSumOrderByAggregateInput = {
    date?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type AIGenerateContentListRelationFilter = {
    every?: AIGenerateContentWhereInput
    some?: AIGenerateContentWhereInput
    none?: AIGenerateContentWhereInput
  }

  export type AIGenerateContentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AIGeneratorCountOrderByAggregateInput = {
    id?: SortOrder
    desc?: SortOrder
    date?: SortOrder
    times?: SortOrder
    userId?: SortOrder
    createdTime?: SortOrder
    updatedTime?: SortOrder
  }

  export type AIGeneratorAvgOrderByAggregateInput = {
    date?: SortOrder
    times?: SortOrder
  }

  export type AIGeneratorMaxOrderByAggregateInput = {
    id?: SortOrder
    desc?: SortOrder
    date?: SortOrder
    times?: SortOrder
    userId?: SortOrder
    createdTime?: SortOrder
    updatedTime?: SortOrder
  }

  export type AIGeneratorMinOrderByAggregateInput = {
    id?: SortOrder
    desc?: SortOrder
    date?: SortOrder
    times?: SortOrder
    userId?: SortOrder
    createdTime?: SortOrder
    updatedTime?: SortOrder
  }

  export type AIGeneratorSumOrderByAggregateInput = {
    date?: SortOrder
    times?: SortOrder
  }

  export type AIGeneratorNullableScalarRelationFilter = {
    is?: AIGeneratorWhereInput | null
    isNot?: AIGeneratorWhereInput | null
  }

  export type AIGenerateContentCountOrderByAggregateInput = {
    id?: SortOrder
    gid?: SortOrder
    model?: SortOrder
    promptTokens?: SortOrder
    completionTokens?: SortOrder
    object?: SortOrder
    userMessage?: SortOrder
    aiGeneratorId?: SortOrder
    createdTime?: SortOrder
    updatedTime?: SortOrder
  }

  export type AIGenerateContentAvgOrderByAggregateInput = {
    promptTokens?: SortOrder
    completionTokens?: SortOrder
  }

  export type AIGenerateContentMaxOrderByAggregateInput = {
    id?: SortOrder
    gid?: SortOrder
    model?: SortOrder
    promptTokens?: SortOrder
    completionTokens?: SortOrder
    object?: SortOrder
    userMessage?: SortOrder
    aiGeneratorId?: SortOrder
    createdTime?: SortOrder
    updatedTime?: SortOrder
  }

  export type AIGenerateContentMinOrderByAggregateInput = {
    id?: SortOrder
    gid?: SortOrder
    model?: SortOrder
    promptTokens?: SortOrder
    completionTokens?: SortOrder
    object?: SortOrder
    userMessage?: SortOrder
    aiGeneratorId?: SortOrder
    createdTime?: SortOrder
    updatedTime?: SortOrder
  }

  export type AIGenerateContentSumOrderByAggregateInput = {
    promptTokens?: SortOrder
    completionTokens?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ProfileCountOrderByAggregateInput = {
    id?: SortOrder
    score?: SortOrder
    grade?: SortOrder
    userID?: SortOrder
    createdTime?: SortOrder
    updatedTime?: SortOrder
  }

  export type ProfileAvgOrderByAggregateInput = {
    score?: SortOrder
    grade?: SortOrder
  }

  export type ProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    score?: SortOrder
    grade?: SortOrder
    userID?: SortOrder
    createdTime?: SortOrder
    updatedTime?: SortOrder
  }

  export type ProfileMinOrderByAggregateInput = {
    id?: SortOrder
    score?: SortOrder
    grade?: SortOrder
    userID?: SortOrder
    createdTime?: SortOrder
    updatedTime?: SortOrder
  }

  export type ProfileSumOrderByAggregateInput = {
    score?: SortOrder
    grade?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type InviteCountOrderByAggregateInput = {
    id?: SortOrder
    inviterId?: SortOrder
    inviteeId?: SortOrder
    createdTime?: SortOrder
    updatedTime?: SortOrder
  }

  export type InviteMaxOrderByAggregateInput = {
    id?: SortOrder
    inviterId?: SortOrder
    inviteeId?: SortOrder
    createdTime?: SortOrder
    updatedTime?: SortOrder
  }

  export type InviteMinOrderByAggregateInput = {
    id?: SortOrder
    inviterId?: SortOrder
    inviteeId?: SortOrder
    createdTime?: SortOrder
    updatedTime?: SortOrder
  }

  export type WorksListRelationFilter = {
    every?: WorksWhereInput
    some?: WorksWhereInput
    none?: WorksWhereInput
  }

  export type ProjectsListRelationFilter = {
    every?: ProjectsWhereInput
    some?: ProjectsWhereInput
    none?: ProjectsWhereInput
  }

  export type TemplateNullableScalarRelationFilter = {
    is?: TemplateWhereInput | null
    isNot?: TemplateWhereInput | null
  }

  export type WorksOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ResumeCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    realname?: SortOrder
    age?: SortOrder
    education?: SortOrder
    address?: SortOrder
    mobile?: SortOrder
    email?: SortOrder
    avatar?: SortOrder
    status?: SortOrder
    industry?: SortOrder
    userId?: SortOrder
    templateId?: SortOrder
    createdTime?: SortOrder
    updatedTime?: SortOrder
  }

  export type ResumeAvgOrderByAggregateInput = {
    age?: SortOrder
  }

  export type ResumeMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    realname?: SortOrder
    age?: SortOrder
    education?: SortOrder
    address?: SortOrder
    mobile?: SortOrder
    email?: SortOrder
    avatar?: SortOrder
    status?: SortOrder
    industry?: SortOrder
    userId?: SortOrder
    templateId?: SortOrder
    createdTime?: SortOrder
    updatedTime?: SortOrder
  }

  export type ResumeMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    realname?: SortOrder
    age?: SortOrder
    education?: SortOrder
    address?: SortOrder
    mobile?: SortOrder
    email?: SortOrder
    avatar?: SortOrder
    status?: SortOrder
    industry?: SortOrder
    userId?: SortOrder
    templateId?: SortOrder
    createdTime?: SortOrder
    updatedTime?: SortOrder
  }

  export type ResumeSumOrderByAggregateInput = {
    age?: SortOrder
  }

  export type ResumeNullableScalarRelationFilter = {
    is?: ResumeWhereInput | null
    isNot?: ResumeWhereInput | null
  }

  export type WorksCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    resumeId?: SortOrder
    createdTime?: SortOrder
    updatedTime?: SortOrder
  }

  export type WorksMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    resumeId?: SortOrder
    createdTime?: SortOrder
    updatedTime?: SortOrder
  }

  export type WorksMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    resumeId?: SortOrder
    createdTime?: SortOrder
    updatedTime?: SortOrder
  }

  export type ProjectsCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    resumeId?: SortOrder
    createdTime?: SortOrder
    updatedTime?: SortOrder
  }

  export type ProjectsMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    resumeId?: SortOrder
    createdTime?: SortOrder
    updatedTime?: SortOrder
  }

  export type ProjectsMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    resumeId?: SortOrder
    createdTime?: SortOrder
    updatedTime?: SortOrder
  }

  export type TemplateCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    path?: SortOrder
    type?: SortOrder
    createdTime?: SortOrder
    updatedTime?: SortOrder
  }

  export type TemplateMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    path?: SortOrder
    type?: SortOrder
    createdTime?: SortOrder
    updatedTime?: SortOrder
  }

  export type TemplateMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    path?: SortOrder
    type?: SortOrder
    createdTime?: SortOrder
    updatedTime?: SortOrder
  }

  export type DownloadCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    url?: SortOrder
    createdTime?: SortOrder
    updatedTime?: SortOrder
  }

  export type DownloadMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    url?: SortOrder
    createdTime?: SortOrder
    updatedTime?: SortOrder
  }

  export type DownloadMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    url?: SortOrder
    createdTime?: SortOrder
    updatedTime?: SortOrder
  }

  export type ProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    connect?: ProfileWhereUniqueInput
  }

  export type ResumeCreateNestedManyWithoutUserInput = {
    create?: XOR<ResumeCreateWithoutUserInput, ResumeUncheckedCreateWithoutUserInput> | ResumeCreateWithoutUserInput[] | ResumeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ResumeCreateOrConnectWithoutUserInput | ResumeCreateOrConnectWithoutUserInput[]
    createMany?: ResumeCreateManyUserInputEnvelope
    connect?: ResumeWhereUniqueInput | ResumeWhereUniqueInput[]
  }

  export type InviteCreateNestedManyWithoutInviterInput = {
    create?: XOR<InviteCreateWithoutInviterInput, InviteUncheckedCreateWithoutInviterInput> | InviteCreateWithoutInviterInput[] | InviteUncheckedCreateWithoutInviterInput[]
    connectOrCreate?: InviteCreateOrConnectWithoutInviterInput | InviteCreateOrConnectWithoutInviterInput[]
    createMany?: InviteCreateManyInviterInputEnvelope
    connect?: InviteWhereUniqueInput | InviteWhereUniqueInput[]
  }

  export type InviteCreateNestedManyWithoutInviteeInput = {
    create?: XOR<InviteCreateWithoutInviteeInput, InviteUncheckedCreateWithoutInviteeInput> | InviteCreateWithoutInviteeInput[] | InviteUncheckedCreateWithoutInviteeInput[]
    connectOrCreate?: InviteCreateOrConnectWithoutInviteeInput | InviteCreateOrConnectWithoutInviteeInput[]
    createMany?: InviteCreateManyInviteeInputEnvelope
    connect?: InviteWhereUniqueInput | InviteWhereUniqueInput[]
  }

  export type AIGeneratorCreateNestedManyWithoutUserInput = {
    create?: XOR<AIGeneratorCreateWithoutUserInput, AIGeneratorUncheckedCreateWithoutUserInput> | AIGeneratorCreateWithoutUserInput[] | AIGeneratorUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AIGeneratorCreateOrConnectWithoutUserInput | AIGeneratorCreateOrConnectWithoutUserInput[]
    createMany?: AIGeneratorCreateManyUserInputEnvelope
    connect?: AIGeneratorWhereUniqueInput | AIGeneratorWhereUniqueInput[]
  }

  export type SignCreateNestedManyWithoutUserInput = {
    create?: XOR<SignCreateWithoutUserInput, SignUncheckedCreateWithoutUserInput> | SignCreateWithoutUserInput[] | SignUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SignCreateOrConnectWithoutUserInput | SignCreateOrConnectWithoutUserInput[]
    createMany?: SignCreateManyUserInputEnvelope
    connect?: SignWhereUniqueInput | SignWhereUniqueInput[]
  }

  export type ProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    connect?: ProfileWhereUniqueInput
  }

  export type ResumeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ResumeCreateWithoutUserInput, ResumeUncheckedCreateWithoutUserInput> | ResumeCreateWithoutUserInput[] | ResumeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ResumeCreateOrConnectWithoutUserInput | ResumeCreateOrConnectWithoutUserInput[]
    createMany?: ResumeCreateManyUserInputEnvelope
    connect?: ResumeWhereUniqueInput | ResumeWhereUniqueInput[]
  }

  export type InviteUncheckedCreateNestedManyWithoutInviterInput = {
    create?: XOR<InviteCreateWithoutInviterInput, InviteUncheckedCreateWithoutInviterInput> | InviteCreateWithoutInviterInput[] | InviteUncheckedCreateWithoutInviterInput[]
    connectOrCreate?: InviteCreateOrConnectWithoutInviterInput | InviteCreateOrConnectWithoutInviterInput[]
    createMany?: InviteCreateManyInviterInputEnvelope
    connect?: InviteWhereUniqueInput | InviteWhereUniqueInput[]
  }

  export type InviteUncheckedCreateNestedManyWithoutInviteeInput = {
    create?: XOR<InviteCreateWithoutInviteeInput, InviteUncheckedCreateWithoutInviteeInput> | InviteCreateWithoutInviteeInput[] | InviteUncheckedCreateWithoutInviteeInput[]
    connectOrCreate?: InviteCreateOrConnectWithoutInviteeInput | InviteCreateOrConnectWithoutInviteeInput[]
    createMany?: InviteCreateManyInviteeInputEnvelope
    connect?: InviteWhereUniqueInput | InviteWhereUniqueInput[]
  }

  export type AIGeneratorUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AIGeneratorCreateWithoutUserInput, AIGeneratorUncheckedCreateWithoutUserInput> | AIGeneratorCreateWithoutUserInput[] | AIGeneratorUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AIGeneratorCreateOrConnectWithoutUserInput | AIGeneratorCreateOrConnectWithoutUserInput[]
    createMany?: AIGeneratorCreateManyUserInputEnvelope
    connect?: AIGeneratorWhereUniqueInput | AIGeneratorWhereUniqueInput[]
  }

  export type SignUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SignCreateWithoutUserInput, SignUncheckedCreateWithoutUserInput> | SignCreateWithoutUserInput[] | SignUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SignCreateOrConnectWithoutUserInput | SignCreateOrConnectWithoutUserInput[]
    createMany?: SignCreateManyUserInputEnvelope
    connect?: SignWhereUniqueInput | SignWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    upsert?: ProfileUpsertWithoutUserInput
    disconnect?: ProfileWhereInput | boolean
    delete?: ProfileWhereInput | boolean
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutUserInput, ProfileUpdateWithoutUserInput>, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type ResumeUpdateManyWithoutUserNestedInput = {
    create?: XOR<ResumeCreateWithoutUserInput, ResumeUncheckedCreateWithoutUserInput> | ResumeCreateWithoutUserInput[] | ResumeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ResumeCreateOrConnectWithoutUserInput | ResumeCreateOrConnectWithoutUserInput[]
    upsert?: ResumeUpsertWithWhereUniqueWithoutUserInput | ResumeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ResumeCreateManyUserInputEnvelope
    set?: ResumeWhereUniqueInput | ResumeWhereUniqueInput[]
    disconnect?: ResumeWhereUniqueInput | ResumeWhereUniqueInput[]
    delete?: ResumeWhereUniqueInput | ResumeWhereUniqueInput[]
    connect?: ResumeWhereUniqueInput | ResumeWhereUniqueInput[]
    update?: ResumeUpdateWithWhereUniqueWithoutUserInput | ResumeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ResumeUpdateManyWithWhereWithoutUserInput | ResumeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ResumeScalarWhereInput | ResumeScalarWhereInput[]
  }

  export type InviteUpdateManyWithoutInviterNestedInput = {
    create?: XOR<InviteCreateWithoutInviterInput, InviteUncheckedCreateWithoutInviterInput> | InviteCreateWithoutInviterInput[] | InviteUncheckedCreateWithoutInviterInput[]
    connectOrCreate?: InviteCreateOrConnectWithoutInviterInput | InviteCreateOrConnectWithoutInviterInput[]
    upsert?: InviteUpsertWithWhereUniqueWithoutInviterInput | InviteUpsertWithWhereUniqueWithoutInviterInput[]
    createMany?: InviteCreateManyInviterInputEnvelope
    set?: InviteWhereUniqueInput | InviteWhereUniqueInput[]
    disconnect?: InviteWhereUniqueInput | InviteWhereUniqueInput[]
    delete?: InviteWhereUniqueInput | InviteWhereUniqueInput[]
    connect?: InviteWhereUniqueInput | InviteWhereUniqueInput[]
    update?: InviteUpdateWithWhereUniqueWithoutInviterInput | InviteUpdateWithWhereUniqueWithoutInviterInput[]
    updateMany?: InviteUpdateManyWithWhereWithoutInviterInput | InviteUpdateManyWithWhereWithoutInviterInput[]
    deleteMany?: InviteScalarWhereInput | InviteScalarWhereInput[]
  }

  export type InviteUpdateManyWithoutInviteeNestedInput = {
    create?: XOR<InviteCreateWithoutInviteeInput, InviteUncheckedCreateWithoutInviteeInput> | InviteCreateWithoutInviteeInput[] | InviteUncheckedCreateWithoutInviteeInput[]
    connectOrCreate?: InviteCreateOrConnectWithoutInviteeInput | InviteCreateOrConnectWithoutInviteeInput[]
    upsert?: InviteUpsertWithWhereUniqueWithoutInviteeInput | InviteUpsertWithWhereUniqueWithoutInviteeInput[]
    createMany?: InviteCreateManyInviteeInputEnvelope
    set?: InviteWhereUniqueInput | InviteWhereUniqueInput[]
    disconnect?: InviteWhereUniqueInput | InviteWhereUniqueInput[]
    delete?: InviteWhereUniqueInput | InviteWhereUniqueInput[]
    connect?: InviteWhereUniqueInput | InviteWhereUniqueInput[]
    update?: InviteUpdateWithWhereUniqueWithoutInviteeInput | InviteUpdateWithWhereUniqueWithoutInviteeInput[]
    updateMany?: InviteUpdateManyWithWhereWithoutInviteeInput | InviteUpdateManyWithWhereWithoutInviteeInput[]
    deleteMany?: InviteScalarWhereInput | InviteScalarWhereInput[]
  }

  export type AIGeneratorUpdateManyWithoutUserNestedInput = {
    create?: XOR<AIGeneratorCreateWithoutUserInput, AIGeneratorUncheckedCreateWithoutUserInput> | AIGeneratorCreateWithoutUserInput[] | AIGeneratorUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AIGeneratorCreateOrConnectWithoutUserInput | AIGeneratorCreateOrConnectWithoutUserInput[]
    upsert?: AIGeneratorUpsertWithWhereUniqueWithoutUserInput | AIGeneratorUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AIGeneratorCreateManyUserInputEnvelope
    set?: AIGeneratorWhereUniqueInput | AIGeneratorWhereUniqueInput[]
    disconnect?: AIGeneratorWhereUniqueInput | AIGeneratorWhereUniqueInput[]
    delete?: AIGeneratorWhereUniqueInput | AIGeneratorWhereUniqueInput[]
    connect?: AIGeneratorWhereUniqueInput | AIGeneratorWhereUniqueInput[]
    update?: AIGeneratorUpdateWithWhereUniqueWithoutUserInput | AIGeneratorUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AIGeneratorUpdateManyWithWhereWithoutUserInput | AIGeneratorUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AIGeneratorScalarWhereInput | AIGeneratorScalarWhereInput[]
  }

  export type SignUpdateManyWithoutUserNestedInput = {
    create?: XOR<SignCreateWithoutUserInput, SignUncheckedCreateWithoutUserInput> | SignCreateWithoutUserInput[] | SignUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SignCreateOrConnectWithoutUserInput | SignCreateOrConnectWithoutUserInput[]
    upsert?: SignUpsertWithWhereUniqueWithoutUserInput | SignUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SignCreateManyUserInputEnvelope
    set?: SignWhereUniqueInput | SignWhereUniqueInput[]
    disconnect?: SignWhereUniqueInput | SignWhereUniqueInput[]
    delete?: SignWhereUniqueInput | SignWhereUniqueInput[]
    connect?: SignWhereUniqueInput | SignWhereUniqueInput[]
    update?: SignUpdateWithWhereUniqueWithoutUserInput | SignUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SignUpdateManyWithWhereWithoutUserInput | SignUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SignScalarWhereInput | SignScalarWhereInput[]
  }

  export type ProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    upsert?: ProfileUpsertWithoutUserInput
    disconnect?: ProfileWhereInput | boolean
    delete?: ProfileWhereInput | boolean
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutUserInput, ProfileUpdateWithoutUserInput>, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type ResumeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ResumeCreateWithoutUserInput, ResumeUncheckedCreateWithoutUserInput> | ResumeCreateWithoutUserInput[] | ResumeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ResumeCreateOrConnectWithoutUserInput | ResumeCreateOrConnectWithoutUserInput[]
    upsert?: ResumeUpsertWithWhereUniqueWithoutUserInput | ResumeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ResumeCreateManyUserInputEnvelope
    set?: ResumeWhereUniqueInput | ResumeWhereUniqueInput[]
    disconnect?: ResumeWhereUniqueInput | ResumeWhereUniqueInput[]
    delete?: ResumeWhereUniqueInput | ResumeWhereUniqueInput[]
    connect?: ResumeWhereUniqueInput | ResumeWhereUniqueInput[]
    update?: ResumeUpdateWithWhereUniqueWithoutUserInput | ResumeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ResumeUpdateManyWithWhereWithoutUserInput | ResumeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ResumeScalarWhereInput | ResumeScalarWhereInput[]
  }

  export type InviteUncheckedUpdateManyWithoutInviterNestedInput = {
    create?: XOR<InviteCreateWithoutInviterInput, InviteUncheckedCreateWithoutInviterInput> | InviteCreateWithoutInviterInput[] | InviteUncheckedCreateWithoutInviterInput[]
    connectOrCreate?: InviteCreateOrConnectWithoutInviterInput | InviteCreateOrConnectWithoutInviterInput[]
    upsert?: InviteUpsertWithWhereUniqueWithoutInviterInput | InviteUpsertWithWhereUniqueWithoutInviterInput[]
    createMany?: InviteCreateManyInviterInputEnvelope
    set?: InviteWhereUniqueInput | InviteWhereUniqueInput[]
    disconnect?: InviteWhereUniqueInput | InviteWhereUniqueInput[]
    delete?: InviteWhereUniqueInput | InviteWhereUniqueInput[]
    connect?: InviteWhereUniqueInput | InviteWhereUniqueInput[]
    update?: InviteUpdateWithWhereUniqueWithoutInviterInput | InviteUpdateWithWhereUniqueWithoutInviterInput[]
    updateMany?: InviteUpdateManyWithWhereWithoutInviterInput | InviteUpdateManyWithWhereWithoutInviterInput[]
    deleteMany?: InviteScalarWhereInput | InviteScalarWhereInput[]
  }

  export type InviteUncheckedUpdateManyWithoutInviteeNestedInput = {
    create?: XOR<InviteCreateWithoutInviteeInput, InviteUncheckedCreateWithoutInviteeInput> | InviteCreateWithoutInviteeInput[] | InviteUncheckedCreateWithoutInviteeInput[]
    connectOrCreate?: InviteCreateOrConnectWithoutInviteeInput | InviteCreateOrConnectWithoutInviteeInput[]
    upsert?: InviteUpsertWithWhereUniqueWithoutInviteeInput | InviteUpsertWithWhereUniqueWithoutInviteeInput[]
    createMany?: InviteCreateManyInviteeInputEnvelope
    set?: InviteWhereUniqueInput | InviteWhereUniqueInput[]
    disconnect?: InviteWhereUniqueInput | InviteWhereUniqueInput[]
    delete?: InviteWhereUniqueInput | InviteWhereUniqueInput[]
    connect?: InviteWhereUniqueInput | InviteWhereUniqueInput[]
    update?: InviteUpdateWithWhereUniqueWithoutInviteeInput | InviteUpdateWithWhereUniqueWithoutInviteeInput[]
    updateMany?: InviteUpdateManyWithWhereWithoutInviteeInput | InviteUpdateManyWithWhereWithoutInviteeInput[]
    deleteMany?: InviteScalarWhereInput | InviteScalarWhereInput[]
  }

  export type AIGeneratorUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AIGeneratorCreateWithoutUserInput, AIGeneratorUncheckedCreateWithoutUserInput> | AIGeneratorCreateWithoutUserInput[] | AIGeneratorUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AIGeneratorCreateOrConnectWithoutUserInput | AIGeneratorCreateOrConnectWithoutUserInput[]
    upsert?: AIGeneratorUpsertWithWhereUniqueWithoutUserInput | AIGeneratorUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AIGeneratorCreateManyUserInputEnvelope
    set?: AIGeneratorWhereUniqueInput | AIGeneratorWhereUniqueInput[]
    disconnect?: AIGeneratorWhereUniqueInput | AIGeneratorWhereUniqueInput[]
    delete?: AIGeneratorWhereUniqueInput | AIGeneratorWhereUniqueInput[]
    connect?: AIGeneratorWhereUniqueInput | AIGeneratorWhereUniqueInput[]
    update?: AIGeneratorUpdateWithWhereUniqueWithoutUserInput | AIGeneratorUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AIGeneratorUpdateManyWithWhereWithoutUserInput | AIGeneratorUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AIGeneratorScalarWhereInput | AIGeneratorScalarWhereInput[]
  }

  export type SignUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SignCreateWithoutUserInput, SignUncheckedCreateWithoutUserInput> | SignCreateWithoutUserInput[] | SignUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SignCreateOrConnectWithoutUserInput | SignCreateOrConnectWithoutUserInput[]
    upsert?: SignUpsertWithWhereUniqueWithoutUserInput | SignUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SignCreateManyUserInputEnvelope
    set?: SignWhereUniqueInput | SignWhereUniqueInput[]
    disconnect?: SignWhereUniqueInput | SignWhereUniqueInput[]
    delete?: SignWhereUniqueInput | SignWhereUniqueInput[]
    connect?: SignWhereUniqueInput | SignWhereUniqueInput[]
    update?: SignUpdateWithWhereUniqueWithoutUserInput | SignUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SignUpdateManyWithWhereWithoutUserInput | SignUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SignScalarWhereInput | SignScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSignInput = {
    create?: XOR<UserCreateWithoutSignInput, UserUncheckedCreateWithoutSignInput>
    connectOrCreate?: UserCreateOrConnectWithoutSignInput
    connect?: UserWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneWithoutSignNestedInput = {
    create?: XOR<UserCreateWithoutSignInput, UserUncheckedCreateWithoutSignInput>
    connectOrCreate?: UserCreateOrConnectWithoutSignInput
    upsert?: UserUpsertWithoutSignInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSignInput, UserUpdateWithoutSignInput>, UserUncheckedUpdateWithoutSignInput>
  }

  export type UserCreateNestedOneWithoutAiGeneratorInput = {
    create?: XOR<UserCreateWithoutAiGeneratorInput, UserUncheckedCreateWithoutAiGeneratorInput>
    connectOrCreate?: UserCreateOrConnectWithoutAiGeneratorInput
    connect?: UserWhereUniqueInput
  }

  export type AIGenerateContentCreateNestedManyWithoutAiGeneratorInput = {
    create?: XOR<AIGenerateContentCreateWithoutAiGeneratorInput, AIGenerateContentUncheckedCreateWithoutAiGeneratorInput> | AIGenerateContentCreateWithoutAiGeneratorInput[] | AIGenerateContentUncheckedCreateWithoutAiGeneratorInput[]
    connectOrCreate?: AIGenerateContentCreateOrConnectWithoutAiGeneratorInput | AIGenerateContentCreateOrConnectWithoutAiGeneratorInput[]
    createMany?: AIGenerateContentCreateManyAiGeneratorInputEnvelope
    connect?: AIGenerateContentWhereUniqueInput | AIGenerateContentWhereUniqueInput[]
  }

  export type AIGenerateContentUncheckedCreateNestedManyWithoutAiGeneratorInput = {
    create?: XOR<AIGenerateContentCreateWithoutAiGeneratorInput, AIGenerateContentUncheckedCreateWithoutAiGeneratorInput> | AIGenerateContentCreateWithoutAiGeneratorInput[] | AIGenerateContentUncheckedCreateWithoutAiGeneratorInput[]
    connectOrCreate?: AIGenerateContentCreateOrConnectWithoutAiGeneratorInput | AIGenerateContentCreateOrConnectWithoutAiGeneratorInput[]
    createMany?: AIGenerateContentCreateManyAiGeneratorInputEnvelope
    connect?: AIGenerateContentWhereUniqueInput | AIGenerateContentWhereUniqueInput[]
  }

  export type UserUpdateOneWithoutAiGeneratorNestedInput = {
    create?: XOR<UserCreateWithoutAiGeneratorInput, UserUncheckedCreateWithoutAiGeneratorInput>
    connectOrCreate?: UserCreateOrConnectWithoutAiGeneratorInput
    upsert?: UserUpsertWithoutAiGeneratorInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAiGeneratorInput, UserUpdateWithoutAiGeneratorInput>, UserUncheckedUpdateWithoutAiGeneratorInput>
  }

  export type AIGenerateContentUpdateManyWithoutAiGeneratorNestedInput = {
    create?: XOR<AIGenerateContentCreateWithoutAiGeneratorInput, AIGenerateContentUncheckedCreateWithoutAiGeneratorInput> | AIGenerateContentCreateWithoutAiGeneratorInput[] | AIGenerateContentUncheckedCreateWithoutAiGeneratorInput[]
    connectOrCreate?: AIGenerateContentCreateOrConnectWithoutAiGeneratorInput | AIGenerateContentCreateOrConnectWithoutAiGeneratorInput[]
    upsert?: AIGenerateContentUpsertWithWhereUniqueWithoutAiGeneratorInput | AIGenerateContentUpsertWithWhereUniqueWithoutAiGeneratorInput[]
    createMany?: AIGenerateContentCreateManyAiGeneratorInputEnvelope
    set?: AIGenerateContentWhereUniqueInput | AIGenerateContentWhereUniqueInput[]
    disconnect?: AIGenerateContentWhereUniqueInput | AIGenerateContentWhereUniqueInput[]
    delete?: AIGenerateContentWhereUniqueInput | AIGenerateContentWhereUniqueInput[]
    connect?: AIGenerateContentWhereUniqueInput | AIGenerateContentWhereUniqueInput[]
    update?: AIGenerateContentUpdateWithWhereUniqueWithoutAiGeneratorInput | AIGenerateContentUpdateWithWhereUniqueWithoutAiGeneratorInput[]
    updateMany?: AIGenerateContentUpdateManyWithWhereWithoutAiGeneratorInput | AIGenerateContentUpdateManyWithWhereWithoutAiGeneratorInput[]
    deleteMany?: AIGenerateContentScalarWhereInput | AIGenerateContentScalarWhereInput[]
  }

  export type AIGenerateContentUncheckedUpdateManyWithoutAiGeneratorNestedInput = {
    create?: XOR<AIGenerateContentCreateWithoutAiGeneratorInput, AIGenerateContentUncheckedCreateWithoutAiGeneratorInput> | AIGenerateContentCreateWithoutAiGeneratorInput[] | AIGenerateContentUncheckedCreateWithoutAiGeneratorInput[]
    connectOrCreate?: AIGenerateContentCreateOrConnectWithoutAiGeneratorInput | AIGenerateContentCreateOrConnectWithoutAiGeneratorInput[]
    upsert?: AIGenerateContentUpsertWithWhereUniqueWithoutAiGeneratorInput | AIGenerateContentUpsertWithWhereUniqueWithoutAiGeneratorInput[]
    createMany?: AIGenerateContentCreateManyAiGeneratorInputEnvelope
    set?: AIGenerateContentWhereUniqueInput | AIGenerateContentWhereUniqueInput[]
    disconnect?: AIGenerateContentWhereUniqueInput | AIGenerateContentWhereUniqueInput[]
    delete?: AIGenerateContentWhereUniqueInput | AIGenerateContentWhereUniqueInput[]
    connect?: AIGenerateContentWhereUniqueInput | AIGenerateContentWhereUniqueInput[]
    update?: AIGenerateContentUpdateWithWhereUniqueWithoutAiGeneratorInput | AIGenerateContentUpdateWithWhereUniqueWithoutAiGeneratorInput[]
    updateMany?: AIGenerateContentUpdateManyWithWhereWithoutAiGeneratorInput | AIGenerateContentUpdateManyWithWhereWithoutAiGeneratorInput[]
    deleteMany?: AIGenerateContentScalarWhereInput | AIGenerateContentScalarWhereInput[]
  }

  export type AIGeneratorCreateNestedOneWithoutAiGenerateContentInput = {
    create?: XOR<AIGeneratorCreateWithoutAiGenerateContentInput, AIGeneratorUncheckedCreateWithoutAiGenerateContentInput>
    connectOrCreate?: AIGeneratorCreateOrConnectWithoutAiGenerateContentInput
    connect?: AIGeneratorWhereUniqueInput
  }

  export type AIGeneratorUpdateOneWithoutAiGenerateContentNestedInput = {
    create?: XOR<AIGeneratorCreateWithoutAiGenerateContentInput, AIGeneratorUncheckedCreateWithoutAiGenerateContentInput>
    connectOrCreate?: AIGeneratorCreateOrConnectWithoutAiGenerateContentInput
    upsert?: AIGeneratorUpsertWithoutAiGenerateContentInput
    disconnect?: AIGeneratorWhereInput | boolean
    delete?: AIGeneratorWhereInput | boolean
    connect?: AIGeneratorWhereUniqueInput
    update?: XOR<XOR<AIGeneratorUpdateToOneWithWhereWithoutAiGenerateContentInput, AIGeneratorUpdateWithoutAiGenerateContentInput>, AIGeneratorUncheckedUpdateWithoutAiGenerateContentInput>
  }

  export type UserCreateNestedOneWithoutProfileInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    connect?: UserWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneWithoutProfileNestedInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    upsert?: UserUpsertWithoutProfileInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProfileInput, UserUpdateWithoutProfileInput>, UserUncheckedUpdateWithoutProfileInput>
  }

  export type UserCreateNestedOneWithoutInviterInput = {
    create?: XOR<UserCreateWithoutInviterInput, UserUncheckedCreateWithoutInviterInput>
    connectOrCreate?: UserCreateOrConnectWithoutInviterInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutInviteeInput = {
    create?: XOR<UserCreateWithoutInviteeInput, UserUncheckedCreateWithoutInviteeInput>
    connectOrCreate?: UserCreateOrConnectWithoutInviteeInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneWithoutInviterNestedInput = {
    create?: XOR<UserCreateWithoutInviterInput, UserUncheckedCreateWithoutInviterInput>
    connectOrCreate?: UserCreateOrConnectWithoutInviterInput
    upsert?: UserUpsertWithoutInviterInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutInviterInput, UserUpdateWithoutInviterInput>, UserUncheckedUpdateWithoutInviterInput>
  }

  export type UserUpdateOneWithoutInviteeNestedInput = {
    create?: XOR<UserCreateWithoutInviteeInput, UserUncheckedCreateWithoutInviteeInput>
    connectOrCreate?: UserCreateOrConnectWithoutInviteeInput
    upsert?: UserUpsertWithoutInviteeInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutInviteeInput, UserUpdateWithoutInviteeInput>, UserUncheckedUpdateWithoutInviteeInput>
  }

  export type WorksCreateNestedManyWithoutResumeInput = {
    create?: XOR<WorksCreateWithoutResumeInput, WorksUncheckedCreateWithoutResumeInput> | WorksCreateWithoutResumeInput[] | WorksUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: WorksCreateOrConnectWithoutResumeInput | WorksCreateOrConnectWithoutResumeInput[]
    createMany?: WorksCreateManyResumeInputEnvelope
    connect?: WorksWhereUniqueInput | WorksWhereUniqueInput[]
  }

  export type ProjectsCreateNestedManyWithoutResumeInput = {
    create?: XOR<ProjectsCreateWithoutResumeInput, ProjectsUncheckedCreateWithoutResumeInput> | ProjectsCreateWithoutResumeInput[] | ProjectsUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: ProjectsCreateOrConnectWithoutResumeInput | ProjectsCreateOrConnectWithoutResumeInput[]
    createMany?: ProjectsCreateManyResumeInputEnvelope
    connect?: ProjectsWhereUniqueInput | ProjectsWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutResumeInput = {
    create?: XOR<UserCreateWithoutResumeInput, UserUncheckedCreateWithoutResumeInput>
    connectOrCreate?: UserCreateOrConnectWithoutResumeInput
    connect?: UserWhereUniqueInput
  }

  export type TemplateCreateNestedOneWithoutResumeInput = {
    create?: XOR<TemplateCreateWithoutResumeInput, TemplateUncheckedCreateWithoutResumeInput>
    connectOrCreate?: TemplateCreateOrConnectWithoutResumeInput
    connect?: TemplateWhereUniqueInput
  }

  export type WorksUncheckedCreateNestedManyWithoutResumeInput = {
    create?: XOR<WorksCreateWithoutResumeInput, WorksUncheckedCreateWithoutResumeInput> | WorksCreateWithoutResumeInput[] | WorksUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: WorksCreateOrConnectWithoutResumeInput | WorksCreateOrConnectWithoutResumeInput[]
    createMany?: WorksCreateManyResumeInputEnvelope
    connect?: WorksWhereUniqueInput | WorksWhereUniqueInput[]
  }

  export type ProjectsUncheckedCreateNestedManyWithoutResumeInput = {
    create?: XOR<ProjectsCreateWithoutResumeInput, ProjectsUncheckedCreateWithoutResumeInput> | ProjectsCreateWithoutResumeInput[] | ProjectsUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: ProjectsCreateOrConnectWithoutResumeInput | ProjectsCreateOrConnectWithoutResumeInput[]
    createMany?: ProjectsCreateManyResumeInputEnvelope
    connect?: ProjectsWhereUniqueInput | ProjectsWhereUniqueInput[]
  }

  export type WorksUpdateManyWithoutResumeNestedInput = {
    create?: XOR<WorksCreateWithoutResumeInput, WorksUncheckedCreateWithoutResumeInput> | WorksCreateWithoutResumeInput[] | WorksUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: WorksCreateOrConnectWithoutResumeInput | WorksCreateOrConnectWithoutResumeInput[]
    upsert?: WorksUpsertWithWhereUniqueWithoutResumeInput | WorksUpsertWithWhereUniqueWithoutResumeInput[]
    createMany?: WorksCreateManyResumeInputEnvelope
    set?: WorksWhereUniqueInput | WorksWhereUniqueInput[]
    disconnect?: WorksWhereUniqueInput | WorksWhereUniqueInput[]
    delete?: WorksWhereUniqueInput | WorksWhereUniqueInput[]
    connect?: WorksWhereUniqueInput | WorksWhereUniqueInput[]
    update?: WorksUpdateWithWhereUniqueWithoutResumeInput | WorksUpdateWithWhereUniqueWithoutResumeInput[]
    updateMany?: WorksUpdateManyWithWhereWithoutResumeInput | WorksUpdateManyWithWhereWithoutResumeInput[]
    deleteMany?: WorksScalarWhereInput | WorksScalarWhereInput[]
  }

  export type ProjectsUpdateManyWithoutResumeNestedInput = {
    create?: XOR<ProjectsCreateWithoutResumeInput, ProjectsUncheckedCreateWithoutResumeInput> | ProjectsCreateWithoutResumeInput[] | ProjectsUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: ProjectsCreateOrConnectWithoutResumeInput | ProjectsCreateOrConnectWithoutResumeInput[]
    upsert?: ProjectsUpsertWithWhereUniqueWithoutResumeInput | ProjectsUpsertWithWhereUniqueWithoutResumeInput[]
    createMany?: ProjectsCreateManyResumeInputEnvelope
    set?: ProjectsWhereUniqueInput | ProjectsWhereUniqueInput[]
    disconnect?: ProjectsWhereUniqueInput | ProjectsWhereUniqueInput[]
    delete?: ProjectsWhereUniqueInput | ProjectsWhereUniqueInput[]
    connect?: ProjectsWhereUniqueInput | ProjectsWhereUniqueInput[]
    update?: ProjectsUpdateWithWhereUniqueWithoutResumeInput | ProjectsUpdateWithWhereUniqueWithoutResumeInput[]
    updateMany?: ProjectsUpdateManyWithWhereWithoutResumeInput | ProjectsUpdateManyWithWhereWithoutResumeInput[]
    deleteMany?: ProjectsScalarWhereInput | ProjectsScalarWhereInput[]
  }

  export type UserUpdateOneWithoutResumeNestedInput = {
    create?: XOR<UserCreateWithoutResumeInput, UserUncheckedCreateWithoutResumeInput>
    connectOrCreate?: UserCreateOrConnectWithoutResumeInput
    upsert?: UserUpsertWithoutResumeInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutResumeInput, UserUpdateWithoutResumeInput>, UserUncheckedUpdateWithoutResumeInput>
  }

  export type TemplateUpdateOneWithoutResumeNestedInput = {
    create?: XOR<TemplateCreateWithoutResumeInput, TemplateUncheckedCreateWithoutResumeInput>
    connectOrCreate?: TemplateCreateOrConnectWithoutResumeInput
    upsert?: TemplateUpsertWithoutResumeInput
    disconnect?: TemplateWhereInput | boolean
    delete?: TemplateWhereInput | boolean
    connect?: TemplateWhereUniqueInput
    update?: XOR<XOR<TemplateUpdateToOneWithWhereWithoutResumeInput, TemplateUpdateWithoutResumeInput>, TemplateUncheckedUpdateWithoutResumeInput>
  }

  export type WorksUncheckedUpdateManyWithoutResumeNestedInput = {
    create?: XOR<WorksCreateWithoutResumeInput, WorksUncheckedCreateWithoutResumeInput> | WorksCreateWithoutResumeInput[] | WorksUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: WorksCreateOrConnectWithoutResumeInput | WorksCreateOrConnectWithoutResumeInput[]
    upsert?: WorksUpsertWithWhereUniqueWithoutResumeInput | WorksUpsertWithWhereUniqueWithoutResumeInput[]
    createMany?: WorksCreateManyResumeInputEnvelope
    set?: WorksWhereUniqueInput | WorksWhereUniqueInput[]
    disconnect?: WorksWhereUniqueInput | WorksWhereUniqueInput[]
    delete?: WorksWhereUniqueInput | WorksWhereUniqueInput[]
    connect?: WorksWhereUniqueInput | WorksWhereUniqueInput[]
    update?: WorksUpdateWithWhereUniqueWithoutResumeInput | WorksUpdateWithWhereUniqueWithoutResumeInput[]
    updateMany?: WorksUpdateManyWithWhereWithoutResumeInput | WorksUpdateManyWithWhereWithoutResumeInput[]
    deleteMany?: WorksScalarWhereInput | WorksScalarWhereInput[]
  }

  export type ProjectsUncheckedUpdateManyWithoutResumeNestedInput = {
    create?: XOR<ProjectsCreateWithoutResumeInput, ProjectsUncheckedCreateWithoutResumeInput> | ProjectsCreateWithoutResumeInput[] | ProjectsUncheckedCreateWithoutResumeInput[]
    connectOrCreate?: ProjectsCreateOrConnectWithoutResumeInput | ProjectsCreateOrConnectWithoutResumeInput[]
    upsert?: ProjectsUpsertWithWhereUniqueWithoutResumeInput | ProjectsUpsertWithWhereUniqueWithoutResumeInput[]
    createMany?: ProjectsCreateManyResumeInputEnvelope
    set?: ProjectsWhereUniqueInput | ProjectsWhereUniqueInput[]
    disconnect?: ProjectsWhereUniqueInput | ProjectsWhereUniqueInput[]
    delete?: ProjectsWhereUniqueInput | ProjectsWhereUniqueInput[]
    connect?: ProjectsWhereUniqueInput | ProjectsWhereUniqueInput[]
    update?: ProjectsUpdateWithWhereUniqueWithoutResumeInput | ProjectsUpdateWithWhereUniqueWithoutResumeInput[]
    updateMany?: ProjectsUpdateManyWithWhereWithoutResumeInput | ProjectsUpdateManyWithWhereWithoutResumeInput[]
    deleteMany?: ProjectsScalarWhereInput | ProjectsScalarWhereInput[]
  }

  export type ResumeCreateNestedOneWithoutWorksInput = {
    create?: XOR<ResumeCreateWithoutWorksInput, ResumeUncheckedCreateWithoutWorksInput>
    connectOrCreate?: ResumeCreateOrConnectWithoutWorksInput
    connect?: ResumeWhereUniqueInput
  }

  export type ResumeUpdateOneWithoutWorksNestedInput = {
    create?: XOR<ResumeCreateWithoutWorksInput, ResumeUncheckedCreateWithoutWorksInput>
    connectOrCreate?: ResumeCreateOrConnectWithoutWorksInput
    upsert?: ResumeUpsertWithoutWorksInput
    disconnect?: ResumeWhereInput | boolean
    delete?: ResumeWhereInput | boolean
    connect?: ResumeWhereUniqueInput
    update?: XOR<XOR<ResumeUpdateToOneWithWhereWithoutWorksInput, ResumeUpdateWithoutWorksInput>, ResumeUncheckedUpdateWithoutWorksInput>
  }

  export type ResumeCreateNestedOneWithoutProjectsInput = {
    create?: XOR<ResumeCreateWithoutProjectsInput, ResumeUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: ResumeCreateOrConnectWithoutProjectsInput
    connect?: ResumeWhereUniqueInput
  }

  export type ResumeUpdateOneWithoutProjectsNestedInput = {
    create?: XOR<ResumeCreateWithoutProjectsInput, ResumeUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: ResumeCreateOrConnectWithoutProjectsInput
    upsert?: ResumeUpsertWithoutProjectsInput
    disconnect?: ResumeWhereInput | boolean
    delete?: ResumeWhereInput | boolean
    connect?: ResumeWhereUniqueInput
    update?: XOR<XOR<ResumeUpdateToOneWithWhereWithoutProjectsInput, ResumeUpdateWithoutProjectsInput>, ResumeUncheckedUpdateWithoutProjectsInput>
  }

  export type ResumeCreateNestedManyWithoutTemplateInput = {
    create?: XOR<ResumeCreateWithoutTemplateInput, ResumeUncheckedCreateWithoutTemplateInput> | ResumeCreateWithoutTemplateInput[] | ResumeUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: ResumeCreateOrConnectWithoutTemplateInput | ResumeCreateOrConnectWithoutTemplateInput[]
    createMany?: ResumeCreateManyTemplateInputEnvelope
    connect?: ResumeWhereUniqueInput | ResumeWhereUniqueInput[]
  }

  export type ResumeUncheckedCreateNestedManyWithoutTemplateInput = {
    create?: XOR<ResumeCreateWithoutTemplateInput, ResumeUncheckedCreateWithoutTemplateInput> | ResumeCreateWithoutTemplateInput[] | ResumeUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: ResumeCreateOrConnectWithoutTemplateInput | ResumeCreateOrConnectWithoutTemplateInput[]
    createMany?: ResumeCreateManyTemplateInputEnvelope
    connect?: ResumeWhereUniqueInput | ResumeWhereUniqueInput[]
  }

  export type ResumeUpdateManyWithoutTemplateNestedInput = {
    create?: XOR<ResumeCreateWithoutTemplateInput, ResumeUncheckedCreateWithoutTemplateInput> | ResumeCreateWithoutTemplateInput[] | ResumeUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: ResumeCreateOrConnectWithoutTemplateInput | ResumeCreateOrConnectWithoutTemplateInput[]
    upsert?: ResumeUpsertWithWhereUniqueWithoutTemplateInput | ResumeUpsertWithWhereUniqueWithoutTemplateInput[]
    createMany?: ResumeCreateManyTemplateInputEnvelope
    set?: ResumeWhereUniqueInput | ResumeWhereUniqueInput[]
    disconnect?: ResumeWhereUniqueInput | ResumeWhereUniqueInput[]
    delete?: ResumeWhereUniqueInput | ResumeWhereUniqueInput[]
    connect?: ResumeWhereUniqueInput | ResumeWhereUniqueInput[]
    update?: ResumeUpdateWithWhereUniqueWithoutTemplateInput | ResumeUpdateWithWhereUniqueWithoutTemplateInput[]
    updateMany?: ResumeUpdateManyWithWhereWithoutTemplateInput | ResumeUpdateManyWithWhereWithoutTemplateInput[]
    deleteMany?: ResumeScalarWhereInput | ResumeScalarWhereInput[]
  }

  export type ResumeUncheckedUpdateManyWithoutTemplateNestedInput = {
    create?: XOR<ResumeCreateWithoutTemplateInput, ResumeUncheckedCreateWithoutTemplateInput> | ResumeCreateWithoutTemplateInput[] | ResumeUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: ResumeCreateOrConnectWithoutTemplateInput | ResumeCreateOrConnectWithoutTemplateInput[]
    upsert?: ResumeUpsertWithWhereUniqueWithoutTemplateInput | ResumeUpsertWithWhereUniqueWithoutTemplateInput[]
    createMany?: ResumeCreateManyTemplateInputEnvelope
    set?: ResumeWhereUniqueInput | ResumeWhereUniqueInput[]
    disconnect?: ResumeWhereUniqueInput | ResumeWhereUniqueInput[]
    delete?: ResumeWhereUniqueInput | ResumeWhereUniqueInput[]
    connect?: ResumeWhereUniqueInput | ResumeWhereUniqueInput[]
    update?: ResumeUpdateWithWhereUniqueWithoutTemplateInput | ResumeUpdateWithWhereUniqueWithoutTemplateInput[]
    updateMany?: ResumeUpdateManyWithWhereWithoutTemplateInput | ResumeUpdateManyWithWhereWithoutTemplateInput[]
    deleteMany?: ResumeScalarWhereInput | ResumeScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type ProfileCreateWithoutUserInput = {
    id?: string
    score?: number | null
    grade?: number | null
    createdTime?: Date | string
    updatedTime?: Date | string
  }

  export type ProfileUncheckedCreateWithoutUserInput = {
    id?: string
    score?: number | null
    grade?: number | null
    createdTime?: Date | string
    updatedTime?: Date | string
  }

  export type ProfileCreateOrConnectWithoutUserInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
  }

  export type ResumeCreateWithoutUserInput = {
    id?: string
    title: string
    realname?: string | null
    age?: number | null
    education?: string | null
    address?: string | null
    mobile?: string | null
    email?: string | null
    avatar?: string | null
    status?: string | null
    industry?: string | null
    createdTime?: Date | string
    updatedTime?: Date | string
    works?: WorksCreateNestedManyWithoutResumeInput
    projects?: ProjectsCreateNestedManyWithoutResumeInput
    template?: TemplateCreateNestedOneWithoutResumeInput
  }

  export type ResumeUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    realname?: string | null
    age?: number | null
    education?: string | null
    address?: string | null
    mobile?: string | null
    email?: string | null
    avatar?: string | null
    status?: string | null
    industry?: string | null
    templateId?: string | null
    createdTime?: Date | string
    updatedTime?: Date | string
    works?: WorksUncheckedCreateNestedManyWithoutResumeInput
    projects?: ProjectsUncheckedCreateNestedManyWithoutResumeInput
  }

  export type ResumeCreateOrConnectWithoutUserInput = {
    where: ResumeWhereUniqueInput
    create: XOR<ResumeCreateWithoutUserInput, ResumeUncheckedCreateWithoutUserInput>
  }

  export type ResumeCreateManyUserInputEnvelope = {
    data: ResumeCreateManyUserInput | ResumeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type InviteCreateWithoutInviterInput = {
    id?: string
    createdTime?: Date | string
    updatedTime?: Date | string
    invitee?: UserCreateNestedOneWithoutInviteeInput
  }

  export type InviteUncheckedCreateWithoutInviterInput = {
    id?: string
    inviteeId?: string | null
    createdTime?: Date | string
    updatedTime?: Date | string
  }

  export type InviteCreateOrConnectWithoutInviterInput = {
    where: InviteWhereUniqueInput
    create: XOR<InviteCreateWithoutInviterInput, InviteUncheckedCreateWithoutInviterInput>
  }

  export type InviteCreateManyInviterInputEnvelope = {
    data: InviteCreateManyInviterInput | InviteCreateManyInviterInput[]
    skipDuplicates?: boolean
  }

  export type InviteCreateWithoutInviteeInput = {
    id?: string
    createdTime?: Date | string
    updatedTime?: Date | string
    inviter?: UserCreateNestedOneWithoutInviterInput
  }

  export type InviteUncheckedCreateWithoutInviteeInput = {
    id?: string
    inviterId?: string | null
    createdTime?: Date | string
    updatedTime?: Date | string
  }

  export type InviteCreateOrConnectWithoutInviteeInput = {
    where: InviteWhereUniqueInput
    create: XOR<InviteCreateWithoutInviteeInput, InviteUncheckedCreateWithoutInviteeInput>
  }

  export type InviteCreateManyInviteeInputEnvelope = {
    data: InviteCreateManyInviteeInput | InviteCreateManyInviteeInput[]
    skipDuplicates?: boolean
  }

  export type AIGeneratorCreateWithoutUserInput = {
    id?: string
    desc: string
    date: number
    times: number
    createdTime?: Date | string
    updatedTime?: Date | string
    aiGenerateContent?: AIGenerateContentCreateNestedManyWithoutAiGeneratorInput
  }

  export type AIGeneratorUncheckedCreateWithoutUserInput = {
    id?: string
    desc: string
    date: number
    times: number
    createdTime?: Date | string
    updatedTime?: Date | string
    aiGenerateContent?: AIGenerateContentUncheckedCreateNestedManyWithoutAiGeneratorInput
  }

  export type AIGeneratorCreateOrConnectWithoutUserInput = {
    where: AIGeneratorWhereUniqueInput
    create: XOR<AIGeneratorCreateWithoutUserInput, AIGeneratorUncheckedCreateWithoutUserInput>
  }

  export type AIGeneratorCreateManyUserInputEnvelope = {
    data: AIGeneratorCreateManyUserInput | AIGeneratorCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SignCreateWithoutUserInput = {
    id?: string
    date: number
    createdTime?: Date | string
    updatedTime?: Date | string
  }

  export type SignUncheckedCreateWithoutUserInput = {
    id?: string
    date: number
    createdTime?: Date | string
    updatedTime?: Date | string
  }

  export type SignCreateOrConnectWithoutUserInput = {
    where: SignWhereUniqueInput
    create: XOR<SignCreateWithoutUserInput, SignUncheckedCreateWithoutUserInput>
  }

  export type SignCreateManyUserInputEnvelope = {
    data: SignCreateManyUserInput | SignCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProfileUpsertWithoutUserInput = {
    update: XOR<ProfileUpdateWithoutUserInput, ProfileUncheckedUpdateWithoutUserInput>
    create: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutUserInput, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type ProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: NullableIntFieldUpdateOperationsInput | number | null
    grade?: NullableIntFieldUpdateOperationsInput | number | null
    createdTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: NullableIntFieldUpdateOperationsInput | number | null
    grade?: NullableIntFieldUpdateOperationsInput | number | null
    createdTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResumeUpsertWithWhereUniqueWithoutUserInput = {
    where: ResumeWhereUniqueInput
    update: XOR<ResumeUpdateWithoutUserInput, ResumeUncheckedUpdateWithoutUserInput>
    create: XOR<ResumeCreateWithoutUserInput, ResumeUncheckedCreateWithoutUserInput>
  }

  export type ResumeUpdateWithWhereUniqueWithoutUserInput = {
    where: ResumeWhereUniqueInput
    data: XOR<ResumeUpdateWithoutUserInput, ResumeUncheckedUpdateWithoutUserInput>
  }

  export type ResumeUpdateManyWithWhereWithoutUserInput = {
    where: ResumeScalarWhereInput
    data: XOR<ResumeUpdateManyMutationInput, ResumeUncheckedUpdateManyWithoutUserInput>
  }

  export type ResumeScalarWhereInput = {
    AND?: ResumeScalarWhereInput | ResumeScalarWhereInput[]
    OR?: ResumeScalarWhereInput[]
    NOT?: ResumeScalarWhereInput | ResumeScalarWhereInput[]
    id?: StringFilter<"Resume"> | string
    title?: StringFilter<"Resume"> | string
    realname?: StringNullableFilter<"Resume"> | string | null
    age?: IntNullableFilter<"Resume"> | number | null
    education?: StringNullableFilter<"Resume"> | string | null
    address?: StringNullableFilter<"Resume"> | string | null
    mobile?: StringNullableFilter<"Resume"> | string | null
    email?: StringNullableFilter<"Resume"> | string | null
    avatar?: StringNullableFilter<"Resume"> | string | null
    status?: StringNullableFilter<"Resume"> | string | null
    industry?: StringNullableFilter<"Resume"> | string | null
    userId?: StringNullableFilter<"Resume"> | string | null
    templateId?: StringNullableFilter<"Resume"> | string | null
    createdTime?: DateTimeFilter<"Resume"> | Date | string
    updatedTime?: DateTimeFilter<"Resume"> | Date | string
  }

  export type InviteUpsertWithWhereUniqueWithoutInviterInput = {
    where: InviteWhereUniqueInput
    update: XOR<InviteUpdateWithoutInviterInput, InviteUncheckedUpdateWithoutInviterInput>
    create: XOR<InviteCreateWithoutInviterInput, InviteUncheckedCreateWithoutInviterInput>
  }

  export type InviteUpdateWithWhereUniqueWithoutInviterInput = {
    where: InviteWhereUniqueInput
    data: XOR<InviteUpdateWithoutInviterInput, InviteUncheckedUpdateWithoutInviterInput>
  }

  export type InviteUpdateManyWithWhereWithoutInviterInput = {
    where: InviteScalarWhereInput
    data: XOR<InviteUpdateManyMutationInput, InviteUncheckedUpdateManyWithoutInviterInput>
  }

  export type InviteScalarWhereInput = {
    AND?: InviteScalarWhereInput | InviteScalarWhereInput[]
    OR?: InviteScalarWhereInput[]
    NOT?: InviteScalarWhereInput | InviteScalarWhereInput[]
    id?: StringFilter<"Invite"> | string
    inviterId?: StringNullableFilter<"Invite"> | string | null
    inviteeId?: StringNullableFilter<"Invite"> | string | null
    createdTime?: DateTimeFilter<"Invite"> | Date | string
    updatedTime?: DateTimeFilter<"Invite"> | Date | string
  }

  export type InviteUpsertWithWhereUniqueWithoutInviteeInput = {
    where: InviteWhereUniqueInput
    update: XOR<InviteUpdateWithoutInviteeInput, InviteUncheckedUpdateWithoutInviteeInput>
    create: XOR<InviteCreateWithoutInviteeInput, InviteUncheckedCreateWithoutInviteeInput>
  }

  export type InviteUpdateWithWhereUniqueWithoutInviteeInput = {
    where: InviteWhereUniqueInput
    data: XOR<InviteUpdateWithoutInviteeInput, InviteUncheckedUpdateWithoutInviteeInput>
  }

  export type InviteUpdateManyWithWhereWithoutInviteeInput = {
    where: InviteScalarWhereInput
    data: XOR<InviteUpdateManyMutationInput, InviteUncheckedUpdateManyWithoutInviteeInput>
  }

  export type AIGeneratorUpsertWithWhereUniqueWithoutUserInput = {
    where: AIGeneratorWhereUniqueInput
    update: XOR<AIGeneratorUpdateWithoutUserInput, AIGeneratorUncheckedUpdateWithoutUserInput>
    create: XOR<AIGeneratorCreateWithoutUserInput, AIGeneratorUncheckedCreateWithoutUserInput>
  }

  export type AIGeneratorUpdateWithWhereUniqueWithoutUserInput = {
    where: AIGeneratorWhereUniqueInput
    data: XOR<AIGeneratorUpdateWithoutUserInput, AIGeneratorUncheckedUpdateWithoutUserInput>
  }

  export type AIGeneratorUpdateManyWithWhereWithoutUserInput = {
    where: AIGeneratorScalarWhereInput
    data: XOR<AIGeneratorUpdateManyMutationInput, AIGeneratorUncheckedUpdateManyWithoutUserInput>
  }

  export type AIGeneratorScalarWhereInput = {
    AND?: AIGeneratorScalarWhereInput | AIGeneratorScalarWhereInput[]
    OR?: AIGeneratorScalarWhereInput[]
    NOT?: AIGeneratorScalarWhereInput | AIGeneratorScalarWhereInput[]
    id?: StringFilter<"AIGenerator"> | string
    desc?: StringFilter<"AIGenerator"> | string
    date?: IntFilter<"AIGenerator"> | number
    times?: IntFilter<"AIGenerator"> | number
    userId?: StringFilter<"AIGenerator"> | string
    createdTime?: DateTimeFilter<"AIGenerator"> | Date | string
    updatedTime?: DateTimeFilter<"AIGenerator"> | Date | string
  }

  export type SignUpsertWithWhereUniqueWithoutUserInput = {
    where: SignWhereUniqueInput
    update: XOR<SignUpdateWithoutUserInput, SignUncheckedUpdateWithoutUserInput>
    create: XOR<SignCreateWithoutUserInput, SignUncheckedCreateWithoutUserInput>
  }

  export type SignUpdateWithWhereUniqueWithoutUserInput = {
    where: SignWhereUniqueInput
    data: XOR<SignUpdateWithoutUserInput, SignUncheckedUpdateWithoutUserInput>
  }

  export type SignUpdateManyWithWhereWithoutUserInput = {
    where: SignScalarWhereInput
    data: XOR<SignUpdateManyMutationInput, SignUncheckedUpdateManyWithoutUserInput>
  }

  export type SignScalarWhereInput = {
    AND?: SignScalarWhereInput | SignScalarWhereInput[]
    OR?: SignScalarWhereInput[]
    NOT?: SignScalarWhereInput | SignScalarWhereInput[]
    id?: StringFilter<"Sign"> | string
    date?: IntFilter<"Sign"> | number
    userId?: StringFilter<"Sign"> | string
    createdTime?: DateTimeFilter<"Sign"> | Date | string
    updatedTime?: DateTimeFilter<"Sign"> | Date | string
  }

  export type UserCreateWithoutSignInput = {
    id?: string
    username: string
    password: string
    email?: string | null
    mobile?: string | null
    status?: string | null
    createdTime?: Date | string
    updatedTime?: Date | string
    profile?: ProfileCreateNestedOneWithoutUserInput
    resume?: ResumeCreateNestedManyWithoutUserInput
    inviter?: InviteCreateNestedManyWithoutInviterInput
    invitee?: InviteCreateNestedManyWithoutInviteeInput
    aiGenerator?: AIGeneratorCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSignInput = {
    id?: string
    username: string
    password: string
    email?: string | null
    mobile?: string | null
    status?: string | null
    createdTime?: Date | string
    updatedTime?: Date | string
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    resume?: ResumeUncheckedCreateNestedManyWithoutUserInput
    inviter?: InviteUncheckedCreateNestedManyWithoutInviterInput
    invitee?: InviteUncheckedCreateNestedManyWithoutInviteeInput
    aiGenerator?: AIGeneratorUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSignInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSignInput, UserUncheckedCreateWithoutSignInput>
  }

  export type UserUpsertWithoutSignInput = {
    update: XOR<UserUpdateWithoutSignInput, UserUncheckedUpdateWithoutSignInput>
    create: XOR<UserCreateWithoutSignInput, UserUncheckedCreateWithoutSignInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSignInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSignInput, UserUncheckedUpdateWithoutSignInput>
  }

  export type UserUpdateWithoutSignInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createdTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneWithoutUserNestedInput
    resume?: ResumeUpdateManyWithoutUserNestedInput
    inviter?: InviteUpdateManyWithoutInviterNestedInput
    invitee?: InviteUpdateManyWithoutInviteeNestedInput
    aiGenerator?: AIGeneratorUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSignInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createdTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    resume?: ResumeUncheckedUpdateManyWithoutUserNestedInput
    inviter?: InviteUncheckedUpdateManyWithoutInviterNestedInput
    invitee?: InviteUncheckedUpdateManyWithoutInviteeNestedInput
    aiGenerator?: AIGeneratorUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutAiGeneratorInput = {
    id?: string
    username: string
    password: string
    email?: string | null
    mobile?: string | null
    status?: string | null
    createdTime?: Date | string
    updatedTime?: Date | string
    profile?: ProfileCreateNestedOneWithoutUserInput
    resume?: ResumeCreateNestedManyWithoutUserInput
    inviter?: InviteCreateNestedManyWithoutInviterInput
    invitee?: InviteCreateNestedManyWithoutInviteeInput
    sign?: SignCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAiGeneratorInput = {
    id?: string
    username: string
    password: string
    email?: string | null
    mobile?: string | null
    status?: string | null
    createdTime?: Date | string
    updatedTime?: Date | string
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    resume?: ResumeUncheckedCreateNestedManyWithoutUserInput
    inviter?: InviteUncheckedCreateNestedManyWithoutInviterInput
    invitee?: InviteUncheckedCreateNestedManyWithoutInviteeInput
    sign?: SignUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAiGeneratorInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAiGeneratorInput, UserUncheckedCreateWithoutAiGeneratorInput>
  }

  export type AIGenerateContentCreateWithoutAiGeneratorInput = {
    id?: string
    gid: string
    model: string
    promptTokens: number
    completionTokens: number
    object: string
    userMessage: string
    createdTime?: Date | string
    updatedTime?: Date | string
  }

  export type AIGenerateContentUncheckedCreateWithoutAiGeneratorInput = {
    id?: string
    gid: string
    model: string
    promptTokens: number
    completionTokens: number
    object: string
    userMessage: string
    createdTime?: Date | string
    updatedTime?: Date | string
  }

  export type AIGenerateContentCreateOrConnectWithoutAiGeneratorInput = {
    where: AIGenerateContentWhereUniqueInput
    create: XOR<AIGenerateContentCreateWithoutAiGeneratorInput, AIGenerateContentUncheckedCreateWithoutAiGeneratorInput>
  }

  export type AIGenerateContentCreateManyAiGeneratorInputEnvelope = {
    data: AIGenerateContentCreateManyAiGeneratorInput | AIGenerateContentCreateManyAiGeneratorInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutAiGeneratorInput = {
    update: XOR<UserUpdateWithoutAiGeneratorInput, UserUncheckedUpdateWithoutAiGeneratorInput>
    create: XOR<UserCreateWithoutAiGeneratorInput, UserUncheckedCreateWithoutAiGeneratorInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAiGeneratorInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAiGeneratorInput, UserUncheckedUpdateWithoutAiGeneratorInput>
  }

  export type UserUpdateWithoutAiGeneratorInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createdTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneWithoutUserNestedInput
    resume?: ResumeUpdateManyWithoutUserNestedInput
    inviter?: InviteUpdateManyWithoutInviterNestedInput
    invitee?: InviteUpdateManyWithoutInviteeNestedInput
    sign?: SignUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAiGeneratorInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createdTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    resume?: ResumeUncheckedUpdateManyWithoutUserNestedInput
    inviter?: InviteUncheckedUpdateManyWithoutInviterNestedInput
    invitee?: InviteUncheckedUpdateManyWithoutInviteeNestedInput
    sign?: SignUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AIGenerateContentUpsertWithWhereUniqueWithoutAiGeneratorInput = {
    where: AIGenerateContentWhereUniqueInput
    update: XOR<AIGenerateContentUpdateWithoutAiGeneratorInput, AIGenerateContentUncheckedUpdateWithoutAiGeneratorInput>
    create: XOR<AIGenerateContentCreateWithoutAiGeneratorInput, AIGenerateContentUncheckedCreateWithoutAiGeneratorInput>
  }

  export type AIGenerateContentUpdateWithWhereUniqueWithoutAiGeneratorInput = {
    where: AIGenerateContentWhereUniqueInput
    data: XOR<AIGenerateContentUpdateWithoutAiGeneratorInput, AIGenerateContentUncheckedUpdateWithoutAiGeneratorInput>
  }

  export type AIGenerateContentUpdateManyWithWhereWithoutAiGeneratorInput = {
    where: AIGenerateContentScalarWhereInput
    data: XOR<AIGenerateContentUpdateManyMutationInput, AIGenerateContentUncheckedUpdateManyWithoutAiGeneratorInput>
  }

  export type AIGenerateContentScalarWhereInput = {
    AND?: AIGenerateContentScalarWhereInput | AIGenerateContentScalarWhereInput[]
    OR?: AIGenerateContentScalarWhereInput[]
    NOT?: AIGenerateContentScalarWhereInput | AIGenerateContentScalarWhereInput[]
    id?: StringFilter<"AIGenerateContent"> | string
    gid?: StringFilter<"AIGenerateContent"> | string
    model?: StringFilter<"AIGenerateContent"> | string
    promptTokens?: IntFilter<"AIGenerateContent"> | number
    completionTokens?: IntFilter<"AIGenerateContent"> | number
    object?: StringFilter<"AIGenerateContent"> | string
    userMessage?: StringFilter<"AIGenerateContent"> | string
    aiGeneratorId?: StringNullableFilter<"AIGenerateContent"> | string | null
    createdTime?: DateTimeFilter<"AIGenerateContent"> | Date | string
    updatedTime?: DateTimeFilter<"AIGenerateContent"> | Date | string
  }

  export type AIGeneratorCreateWithoutAiGenerateContentInput = {
    id?: string
    desc: string
    date: number
    times: number
    createdTime?: Date | string
    updatedTime?: Date | string
    user?: UserCreateNestedOneWithoutAiGeneratorInput
  }

  export type AIGeneratorUncheckedCreateWithoutAiGenerateContentInput = {
    id?: string
    desc: string
    date: number
    times: number
    userId: string
    createdTime?: Date | string
    updatedTime?: Date | string
  }

  export type AIGeneratorCreateOrConnectWithoutAiGenerateContentInput = {
    where: AIGeneratorWhereUniqueInput
    create: XOR<AIGeneratorCreateWithoutAiGenerateContentInput, AIGeneratorUncheckedCreateWithoutAiGenerateContentInput>
  }

  export type AIGeneratorUpsertWithoutAiGenerateContentInput = {
    update: XOR<AIGeneratorUpdateWithoutAiGenerateContentInput, AIGeneratorUncheckedUpdateWithoutAiGenerateContentInput>
    create: XOR<AIGeneratorCreateWithoutAiGenerateContentInput, AIGeneratorUncheckedCreateWithoutAiGenerateContentInput>
    where?: AIGeneratorWhereInput
  }

  export type AIGeneratorUpdateToOneWithWhereWithoutAiGenerateContentInput = {
    where?: AIGeneratorWhereInput
    data: XOR<AIGeneratorUpdateWithoutAiGenerateContentInput, AIGeneratorUncheckedUpdateWithoutAiGenerateContentInput>
  }

  export type AIGeneratorUpdateWithoutAiGenerateContentInput = {
    id?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    date?: IntFieldUpdateOperationsInput | number
    times?: IntFieldUpdateOperationsInput | number
    createdTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutAiGeneratorNestedInput
  }

  export type AIGeneratorUncheckedUpdateWithoutAiGenerateContentInput = {
    id?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    date?: IntFieldUpdateOperationsInput | number
    times?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    createdTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutProfileInput = {
    id?: string
    username: string
    password: string
    email?: string | null
    mobile?: string | null
    status?: string | null
    createdTime?: Date | string
    updatedTime?: Date | string
    resume?: ResumeCreateNestedManyWithoutUserInput
    inviter?: InviteCreateNestedManyWithoutInviterInput
    invitee?: InviteCreateNestedManyWithoutInviteeInput
    aiGenerator?: AIGeneratorCreateNestedManyWithoutUserInput
    sign?: SignCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProfileInput = {
    id?: string
    username: string
    password: string
    email?: string | null
    mobile?: string | null
    status?: string | null
    createdTime?: Date | string
    updatedTime?: Date | string
    resume?: ResumeUncheckedCreateNestedManyWithoutUserInput
    inviter?: InviteUncheckedCreateNestedManyWithoutInviterInput
    invitee?: InviteUncheckedCreateNestedManyWithoutInviteeInput
    aiGenerator?: AIGeneratorUncheckedCreateNestedManyWithoutUserInput
    sign?: SignUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
  }

  export type UserUpsertWithoutProfileInput = {
    update: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
  }

  export type UserUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createdTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    resume?: ResumeUpdateManyWithoutUserNestedInput
    inviter?: InviteUpdateManyWithoutInviterNestedInput
    invitee?: InviteUpdateManyWithoutInviteeNestedInput
    aiGenerator?: AIGeneratorUpdateManyWithoutUserNestedInput
    sign?: SignUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createdTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    resume?: ResumeUncheckedUpdateManyWithoutUserNestedInput
    inviter?: InviteUncheckedUpdateManyWithoutInviterNestedInput
    invitee?: InviteUncheckedUpdateManyWithoutInviteeNestedInput
    aiGenerator?: AIGeneratorUncheckedUpdateManyWithoutUserNestedInput
    sign?: SignUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutInviterInput = {
    id?: string
    username: string
    password: string
    email?: string | null
    mobile?: string | null
    status?: string | null
    createdTime?: Date | string
    updatedTime?: Date | string
    profile?: ProfileCreateNestedOneWithoutUserInput
    resume?: ResumeCreateNestedManyWithoutUserInput
    invitee?: InviteCreateNestedManyWithoutInviteeInput
    aiGenerator?: AIGeneratorCreateNestedManyWithoutUserInput
    sign?: SignCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutInviterInput = {
    id?: string
    username: string
    password: string
    email?: string | null
    mobile?: string | null
    status?: string | null
    createdTime?: Date | string
    updatedTime?: Date | string
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    resume?: ResumeUncheckedCreateNestedManyWithoutUserInput
    invitee?: InviteUncheckedCreateNestedManyWithoutInviteeInput
    aiGenerator?: AIGeneratorUncheckedCreateNestedManyWithoutUserInput
    sign?: SignUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutInviterInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutInviterInput, UserUncheckedCreateWithoutInviterInput>
  }

  export type UserCreateWithoutInviteeInput = {
    id?: string
    username: string
    password: string
    email?: string | null
    mobile?: string | null
    status?: string | null
    createdTime?: Date | string
    updatedTime?: Date | string
    profile?: ProfileCreateNestedOneWithoutUserInput
    resume?: ResumeCreateNestedManyWithoutUserInput
    inviter?: InviteCreateNestedManyWithoutInviterInput
    aiGenerator?: AIGeneratorCreateNestedManyWithoutUserInput
    sign?: SignCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutInviteeInput = {
    id?: string
    username: string
    password: string
    email?: string | null
    mobile?: string | null
    status?: string | null
    createdTime?: Date | string
    updatedTime?: Date | string
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    resume?: ResumeUncheckedCreateNestedManyWithoutUserInput
    inviter?: InviteUncheckedCreateNestedManyWithoutInviterInput
    aiGenerator?: AIGeneratorUncheckedCreateNestedManyWithoutUserInput
    sign?: SignUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutInviteeInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutInviteeInput, UserUncheckedCreateWithoutInviteeInput>
  }

  export type UserUpsertWithoutInviterInput = {
    update: XOR<UserUpdateWithoutInviterInput, UserUncheckedUpdateWithoutInviterInput>
    create: XOR<UserCreateWithoutInviterInput, UserUncheckedCreateWithoutInviterInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutInviterInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutInviterInput, UserUncheckedUpdateWithoutInviterInput>
  }

  export type UserUpdateWithoutInviterInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createdTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneWithoutUserNestedInput
    resume?: ResumeUpdateManyWithoutUserNestedInput
    invitee?: InviteUpdateManyWithoutInviteeNestedInput
    aiGenerator?: AIGeneratorUpdateManyWithoutUserNestedInput
    sign?: SignUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutInviterInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createdTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    resume?: ResumeUncheckedUpdateManyWithoutUserNestedInput
    invitee?: InviteUncheckedUpdateManyWithoutInviteeNestedInput
    aiGenerator?: AIGeneratorUncheckedUpdateManyWithoutUserNestedInput
    sign?: SignUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutInviteeInput = {
    update: XOR<UserUpdateWithoutInviteeInput, UserUncheckedUpdateWithoutInviteeInput>
    create: XOR<UserCreateWithoutInviteeInput, UserUncheckedCreateWithoutInviteeInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutInviteeInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutInviteeInput, UserUncheckedUpdateWithoutInviteeInput>
  }

  export type UserUpdateWithoutInviteeInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createdTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneWithoutUserNestedInput
    resume?: ResumeUpdateManyWithoutUserNestedInput
    inviter?: InviteUpdateManyWithoutInviterNestedInput
    aiGenerator?: AIGeneratorUpdateManyWithoutUserNestedInput
    sign?: SignUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutInviteeInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createdTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    resume?: ResumeUncheckedUpdateManyWithoutUserNestedInput
    inviter?: InviteUncheckedUpdateManyWithoutInviterNestedInput
    aiGenerator?: AIGeneratorUncheckedUpdateManyWithoutUserNestedInput
    sign?: SignUncheckedUpdateManyWithoutUserNestedInput
  }

  export type WorksCreateWithoutResumeInput = {
    id?: string
    content: string
    createdTime?: Date | string
    updatedTime?: Date | string
  }

  export type WorksUncheckedCreateWithoutResumeInput = {
    id?: string
    content: string
    createdTime?: Date | string
    updatedTime?: Date | string
  }

  export type WorksCreateOrConnectWithoutResumeInput = {
    where: WorksWhereUniqueInput
    create: XOR<WorksCreateWithoutResumeInput, WorksUncheckedCreateWithoutResumeInput>
  }

  export type WorksCreateManyResumeInputEnvelope = {
    data: WorksCreateManyResumeInput | WorksCreateManyResumeInput[]
    skipDuplicates?: boolean
  }

  export type ProjectsCreateWithoutResumeInput = {
    id?: string
    content: string
    createdTime?: Date | string
    updatedTime?: Date | string
  }

  export type ProjectsUncheckedCreateWithoutResumeInput = {
    id?: string
    content: string
    createdTime?: Date | string
    updatedTime?: Date | string
  }

  export type ProjectsCreateOrConnectWithoutResumeInput = {
    where: ProjectsWhereUniqueInput
    create: XOR<ProjectsCreateWithoutResumeInput, ProjectsUncheckedCreateWithoutResumeInput>
  }

  export type ProjectsCreateManyResumeInputEnvelope = {
    data: ProjectsCreateManyResumeInput | ProjectsCreateManyResumeInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutResumeInput = {
    id?: string
    username: string
    password: string
    email?: string | null
    mobile?: string | null
    status?: string | null
    createdTime?: Date | string
    updatedTime?: Date | string
    profile?: ProfileCreateNestedOneWithoutUserInput
    inviter?: InviteCreateNestedManyWithoutInviterInput
    invitee?: InviteCreateNestedManyWithoutInviteeInput
    aiGenerator?: AIGeneratorCreateNestedManyWithoutUserInput
    sign?: SignCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutResumeInput = {
    id?: string
    username: string
    password: string
    email?: string | null
    mobile?: string | null
    status?: string | null
    createdTime?: Date | string
    updatedTime?: Date | string
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    inviter?: InviteUncheckedCreateNestedManyWithoutInviterInput
    invitee?: InviteUncheckedCreateNestedManyWithoutInviteeInput
    aiGenerator?: AIGeneratorUncheckedCreateNestedManyWithoutUserInput
    sign?: SignUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutResumeInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutResumeInput, UserUncheckedCreateWithoutResumeInput>
  }

  export type TemplateCreateWithoutResumeInput = {
    id?: string
    title?: string
    path?: string
    type?: string | null
    createdTime?: Date | string
    updatedTime?: Date | string
  }

  export type TemplateUncheckedCreateWithoutResumeInput = {
    id?: string
    title?: string
    path?: string
    type?: string | null
    createdTime?: Date | string
    updatedTime?: Date | string
  }

  export type TemplateCreateOrConnectWithoutResumeInput = {
    where: TemplateWhereUniqueInput
    create: XOR<TemplateCreateWithoutResumeInput, TemplateUncheckedCreateWithoutResumeInput>
  }

  export type WorksUpsertWithWhereUniqueWithoutResumeInput = {
    where: WorksWhereUniqueInput
    update: XOR<WorksUpdateWithoutResumeInput, WorksUncheckedUpdateWithoutResumeInput>
    create: XOR<WorksCreateWithoutResumeInput, WorksUncheckedCreateWithoutResumeInput>
  }

  export type WorksUpdateWithWhereUniqueWithoutResumeInput = {
    where: WorksWhereUniqueInput
    data: XOR<WorksUpdateWithoutResumeInput, WorksUncheckedUpdateWithoutResumeInput>
  }

  export type WorksUpdateManyWithWhereWithoutResumeInput = {
    where: WorksScalarWhereInput
    data: XOR<WorksUpdateManyMutationInput, WorksUncheckedUpdateManyWithoutResumeInput>
  }

  export type WorksScalarWhereInput = {
    AND?: WorksScalarWhereInput | WorksScalarWhereInput[]
    OR?: WorksScalarWhereInput[]
    NOT?: WorksScalarWhereInput | WorksScalarWhereInput[]
    id?: StringFilter<"Works"> | string
    content?: StringFilter<"Works"> | string
    resumeId?: StringFilter<"Works"> | string
    createdTime?: DateTimeFilter<"Works"> | Date | string
    updatedTime?: DateTimeFilter<"Works"> | Date | string
  }

  export type ProjectsUpsertWithWhereUniqueWithoutResumeInput = {
    where: ProjectsWhereUniqueInput
    update: XOR<ProjectsUpdateWithoutResumeInput, ProjectsUncheckedUpdateWithoutResumeInput>
    create: XOR<ProjectsCreateWithoutResumeInput, ProjectsUncheckedCreateWithoutResumeInput>
  }

  export type ProjectsUpdateWithWhereUniqueWithoutResumeInput = {
    where: ProjectsWhereUniqueInput
    data: XOR<ProjectsUpdateWithoutResumeInput, ProjectsUncheckedUpdateWithoutResumeInput>
  }

  export type ProjectsUpdateManyWithWhereWithoutResumeInput = {
    where: ProjectsScalarWhereInput
    data: XOR<ProjectsUpdateManyMutationInput, ProjectsUncheckedUpdateManyWithoutResumeInput>
  }

  export type ProjectsScalarWhereInput = {
    AND?: ProjectsScalarWhereInput | ProjectsScalarWhereInput[]
    OR?: ProjectsScalarWhereInput[]
    NOT?: ProjectsScalarWhereInput | ProjectsScalarWhereInput[]
    id?: StringFilter<"Projects"> | string
    content?: StringFilter<"Projects"> | string
    resumeId?: StringFilter<"Projects"> | string
    createdTime?: DateTimeFilter<"Projects"> | Date | string
    updatedTime?: DateTimeFilter<"Projects"> | Date | string
  }

  export type UserUpsertWithoutResumeInput = {
    update: XOR<UserUpdateWithoutResumeInput, UserUncheckedUpdateWithoutResumeInput>
    create: XOR<UserCreateWithoutResumeInput, UserUncheckedCreateWithoutResumeInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutResumeInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutResumeInput, UserUncheckedUpdateWithoutResumeInput>
  }

  export type UserUpdateWithoutResumeInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createdTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneWithoutUserNestedInput
    inviter?: InviteUpdateManyWithoutInviterNestedInput
    invitee?: InviteUpdateManyWithoutInviteeNestedInput
    aiGenerator?: AIGeneratorUpdateManyWithoutUserNestedInput
    sign?: SignUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutResumeInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    createdTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    inviter?: InviteUncheckedUpdateManyWithoutInviterNestedInput
    invitee?: InviteUncheckedUpdateManyWithoutInviteeNestedInput
    aiGenerator?: AIGeneratorUncheckedUpdateManyWithoutUserNestedInput
    sign?: SignUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TemplateUpsertWithoutResumeInput = {
    update: XOR<TemplateUpdateWithoutResumeInput, TemplateUncheckedUpdateWithoutResumeInput>
    create: XOR<TemplateCreateWithoutResumeInput, TemplateUncheckedCreateWithoutResumeInput>
    where?: TemplateWhereInput
  }

  export type TemplateUpdateToOneWithWhereWithoutResumeInput = {
    where?: TemplateWhereInput
    data: XOR<TemplateUpdateWithoutResumeInput, TemplateUncheckedUpdateWithoutResumeInput>
  }

  export type TemplateUpdateWithoutResumeInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    createdTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemplateUncheckedUpdateWithoutResumeInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    type?: NullableStringFieldUpdateOperationsInput | string | null
    createdTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResumeCreateWithoutWorksInput = {
    id?: string
    title: string
    realname?: string | null
    age?: number | null
    education?: string | null
    address?: string | null
    mobile?: string | null
    email?: string | null
    avatar?: string | null
    status?: string | null
    industry?: string | null
    createdTime?: Date | string
    updatedTime?: Date | string
    projects?: ProjectsCreateNestedManyWithoutResumeInput
    user?: UserCreateNestedOneWithoutResumeInput
    template?: TemplateCreateNestedOneWithoutResumeInput
  }

  export type ResumeUncheckedCreateWithoutWorksInput = {
    id?: string
    title: string
    realname?: string | null
    age?: number | null
    education?: string | null
    address?: string | null
    mobile?: string | null
    email?: string | null
    avatar?: string | null
    status?: string | null
    industry?: string | null
    userId?: string | null
    templateId?: string | null
    createdTime?: Date | string
    updatedTime?: Date | string
    projects?: ProjectsUncheckedCreateNestedManyWithoutResumeInput
  }

  export type ResumeCreateOrConnectWithoutWorksInput = {
    where: ResumeWhereUniqueInput
    create: XOR<ResumeCreateWithoutWorksInput, ResumeUncheckedCreateWithoutWorksInput>
  }

  export type ResumeUpsertWithoutWorksInput = {
    update: XOR<ResumeUpdateWithoutWorksInput, ResumeUncheckedUpdateWithoutWorksInput>
    create: XOR<ResumeCreateWithoutWorksInput, ResumeUncheckedCreateWithoutWorksInput>
    where?: ResumeWhereInput
  }

  export type ResumeUpdateToOneWithWhereWithoutWorksInput = {
    where?: ResumeWhereInput
    data: XOR<ResumeUpdateWithoutWorksInput, ResumeUncheckedUpdateWithoutWorksInput>
  }

  export type ResumeUpdateWithoutWorksInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    realname?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    createdTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ProjectsUpdateManyWithoutResumeNestedInput
    user?: UserUpdateOneWithoutResumeNestedInput
    template?: TemplateUpdateOneWithoutResumeNestedInput
  }

  export type ResumeUncheckedUpdateWithoutWorksInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    realname?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    templateId?: NullableStringFieldUpdateOperationsInput | string | null
    createdTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ProjectsUncheckedUpdateManyWithoutResumeNestedInput
  }

  export type ResumeCreateWithoutProjectsInput = {
    id?: string
    title: string
    realname?: string | null
    age?: number | null
    education?: string | null
    address?: string | null
    mobile?: string | null
    email?: string | null
    avatar?: string | null
    status?: string | null
    industry?: string | null
    createdTime?: Date | string
    updatedTime?: Date | string
    works?: WorksCreateNestedManyWithoutResumeInput
    user?: UserCreateNestedOneWithoutResumeInput
    template?: TemplateCreateNestedOneWithoutResumeInput
  }

  export type ResumeUncheckedCreateWithoutProjectsInput = {
    id?: string
    title: string
    realname?: string | null
    age?: number | null
    education?: string | null
    address?: string | null
    mobile?: string | null
    email?: string | null
    avatar?: string | null
    status?: string | null
    industry?: string | null
    userId?: string | null
    templateId?: string | null
    createdTime?: Date | string
    updatedTime?: Date | string
    works?: WorksUncheckedCreateNestedManyWithoutResumeInput
  }

  export type ResumeCreateOrConnectWithoutProjectsInput = {
    where: ResumeWhereUniqueInput
    create: XOR<ResumeCreateWithoutProjectsInput, ResumeUncheckedCreateWithoutProjectsInput>
  }

  export type ResumeUpsertWithoutProjectsInput = {
    update: XOR<ResumeUpdateWithoutProjectsInput, ResumeUncheckedUpdateWithoutProjectsInput>
    create: XOR<ResumeCreateWithoutProjectsInput, ResumeUncheckedCreateWithoutProjectsInput>
    where?: ResumeWhereInput
  }

  export type ResumeUpdateToOneWithWhereWithoutProjectsInput = {
    where?: ResumeWhereInput
    data: XOR<ResumeUpdateWithoutProjectsInput, ResumeUncheckedUpdateWithoutProjectsInput>
  }

  export type ResumeUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    realname?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    createdTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    works?: WorksUpdateManyWithoutResumeNestedInput
    user?: UserUpdateOneWithoutResumeNestedInput
    template?: TemplateUpdateOneWithoutResumeNestedInput
  }

  export type ResumeUncheckedUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    realname?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    templateId?: NullableStringFieldUpdateOperationsInput | string | null
    createdTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    works?: WorksUncheckedUpdateManyWithoutResumeNestedInput
  }

  export type ResumeCreateWithoutTemplateInput = {
    id?: string
    title: string
    realname?: string | null
    age?: number | null
    education?: string | null
    address?: string | null
    mobile?: string | null
    email?: string | null
    avatar?: string | null
    status?: string | null
    industry?: string | null
    createdTime?: Date | string
    updatedTime?: Date | string
    works?: WorksCreateNestedManyWithoutResumeInput
    projects?: ProjectsCreateNestedManyWithoutResumeInput
    user?: UserCreateNestedOneWithoutResumeInput
  }

  export type ResumeUncheckedCreateWithoutTemplateInput = {
    id?: string
    title: string
    realname?: string | null
    age?: number | null
    education?: string | null
    address?: string | null
    mobile?: string | null
    email?: string | null
    avatar?: string | null
    status?: string | null
    industry?: string | null
    userId?: string | null
    createdTime?: Date | string
    updatedTime?: Date | string
    works?: WorksUncheckedCreateNestedManyWithoutResumeInput
    projects?: ProjectsUncheckedCreateNestedManyWithoutResumeInput
  }

  export type ResumeCreateOrConnectWithoutTemplateInput = {
    where: ResumeWhereUniqueInput
    create: XOR<ResumeCreateWithoutTemplateInput, ResumeUncheckedCreateWithoutTemplateInput>
  }

  export type ResumeCreateManyTemplateInputEnvelope = {
    data: ResumeCreateManyTemplateInput | ResumeCreateManyTemplateInput[]
    skipDuplicates?: boolean
  }

  export type ResumeUpsertWithWhereUniqueWithoutTemplateInput = {
    where: ResumeWhereUniqueInput
    update: XOR<ResumeUpdateWithoutTemplateInput, ResumeUncheckedUpdateWithoutTemplateInput>
    create: XOR<ResumeCreateWithoutTemplateInput, ResumeUncheckedCreateWithoutTemplateInput>
  }

  export type ResumeUpdateWithWhereUniqueWithoutTemplateInput = {
    where: ResumeWhereUniqueInput
    data: XOR<ResumeUpdateWithoutTemplateInput, ResumeUncheckedUpdateWithoutTemplateInput>
  }

  export type ResumeUpdateManyWithWhereWithoutTemplateInput = {
    where: ResumeScalarWhereInput
    data: XOR<ResumeUpdateManyMutationInput, ResumeUncheckedUpdateManyWithoutTemplateInput>
  }

  export type ResumeCreateManyUserInput = {
    id?: string
    title: string
    realname?: string | null
    age?: number | null
    education?: string | null
    address?: string | null
    mobile?: string | null
    email?: string | null
    avatar?: string | null
    status?: string | null
    industry?: string | null
    templateId?: string | null
    createdTime?: Date | string
    updatedTime?: Date | string
  }

  export type InviteCreateManyInviterInput = {
    id?: string
    inviteeId?: string | null
    createdTime?: Date | string
    updatedTime?: Date | string
  }

  export type InviteCreateManyInviteeInput = {
    id?: string
    inviterId?: string | null
    createdTime?: Date | string
    updatedTime?: Date | string
  }

  export type AIGeneratorCreateManyUserInput = {
    id?: string
    desc: string
    date: number
    times: number
    createdTime?: Date | string
    updatedTime?: Date | string
  }

  export type SignCreateManyUserInput = {
    id?: string
    date: number
    createdTime?: Date | string
    updatedTime?: Date | string
  }

  export type ResumeUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    realname?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    createdTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    works?: WorksUpdateManyWithoutResumeNestedInput
    projects?: ProjectsUpdateManyWithoutResumeNestedInput
    template?: TemplateUpdateOneWithoutResumeNestedInput
  }

  export type ResumeUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    realname?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    templateId?: NullableStringFieldUpdateOperationsInput | string | null
    createdTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    works?: WorksUncheckedUpdateManyWithoutResumeNestedInput
    projects?: ProjectsUncheckedUpdateManyWithoutResumeNestedInput
  }

  export type ResumeUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    realname?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    templateId?: NullableStringFieldUpdateOperationsInput | string | null
    createdTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InviteUpdateWithoutInviterInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    invitee?: UserUpdateOneWithoutInviteeNestedInput
  }

  export type InviteUncheckedUpdateWithoutInviterInput = {
    id?: StringFieldUpdateOperationsInput | string
    inviteeId?: NullableStringFieldUpdateOperationsInput | string | null
    createdTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InviteUncheckedUpdateManyWithoutInviterInput = {
    id?: StringFieldUpdateOperationsInput | string
    inviteeId?: NullableStringFieldUpdateOperationsInput | string | null
    createdTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InviteUpdateWithoutInviteeInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    inviter?: UserUpdateOneWithoutInviterNestedInput
  }

  export type InviteUncheckedUpdateWithoutInviteeInput = {
    id?: StringFieldUpdateOperationsInput | string
    inviterId?: NullableStringFieldUpdateOperationsInput | string | null
    createdTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InviteUncheckedUpdateManyWithoutInviteeInput = {
    id?: StringFieldUpdateOperationsInput | string
    inviterId?: NullableStringFieldUpdateOperationsInput | string | null
    createdTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AIGeneratorUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    date?: IntFieldUpdateOperationsInput | number
    times?: IntFieldUpdateOperationsInput | number
    createdTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    aiGenerateContent?: AIGenerateContentUpdateManyWithoutAiGeneratorNestedInput
  }

  export type AIGeneratorUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    date?: IntFieldUpdateOperationsInput | number
    times?: IntFieldUpdateOperationsInput | number
    createdTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    aiGenerateContent?: AIGenerateContentUncheckedUpdateManyWithoutAiGeneratorNestedInput
  }

  export type AIGeneratorUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    desc?: StringFieldUpdateOperationsInput | string
    date?: IntFieldUpdateOperationsInput | number
    times?: IntFieldUpdateOperationsInput | number
    createdTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SignUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: IntFieldUpdateOperationsInput | number
    createdTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SignUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: IntFieldUpdateOperationsInput | number
    createdTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SignUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: IntFieldUpdateOperationsInput | number
    createdTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AIGenerateContentCreateManyAiGeneratorInput = {
    id?: string
    gid: string
    model: string
    promptTokens: number
    completionTokens: number
    object: string
    userMessage: string
    createdTime?: Date | string
    updatedTime?: Date | string
  }

  export type AIGenerateContentUpdateWithoutAiGeneratorInput = {
    id?: StringFieldUpdateOperationsInput | string
    gid?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    promptTokens?: IntFieldUpdateOperationsInput | number
    completionTokens?: IntFieldUpdateOperationsInput | number
    object?: StringFieldUpdateOperationsInput | string
    userMessage?: StringFieldUpdateOperationsInput | string
    createdTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AIGenerateContentUncheckedUpdateWithoutAiGeneratorInput = {
    id?: StringFieldUpdateOperationsInput | string
    gid?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    promptTokens?: IntFieldUpdateOperationsInput | number
    completionTokens?: IntFieldUpdateOperationsInput | number
    object?: StringFieldUpdateOperationsInput | string
    userMessage?: StringFieldUpdateOperationsInput | string
    createdTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AIGenerateContentUncheckedUpdateManyWithoutAiGeneratorInput = {
    id?: StringFieldUpdateOperationsInput | string
    gid?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    promptTokens?: IntFieldUpdateOperationsInput | number
    completionTokens?: IntFieldUpdateOperationsInput | number
    object?: StringFieldUpdateOperationsInput | string
    userMessage?: StringFieldUpdateOperationsInput | string
    createdTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorksCreateManyResumeInput = {
    id?: string
    content: string
    createdTime?: Date | string
    updatedTime?: Date | string
  }

  export type ProjectsCreateManyResumeInput = {
    id?: string
    content: string
    createdTime?: Date | string
    updatedTime?: Date | string
  }

  export type WorksUpdateWithoutResumeInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorksUncheckedUpdateWithoutResumeInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorksUncheckedUpdateManyWithoutResumeInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectsUpdateWithoutResumeInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectsUncheckedUpdateWithoutResumeInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectsUncheckedUpdateManyWithoutResumeInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResumeCreateManyTemplateInput = {
    id?: string
    title: string
    realname?: string | null
    age?: number | null
    education?: string | null
    address?: string | null
    mobile?: string | null
    email?: string | null
    avatar?: string | null
    status?: string | null
    industry?: string | null
    userId?: string | null
    createdTime?: Date | string
    updatedTime?: Date | string
  }

  export type ResumeUpdateWithoutTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    realname?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    createdTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    works?: WorksUpdateManyWithoutResumeNestedInput
    projects?: ProjectsUpdateManyWithoutResumeNestedInput
    user?: UserUpdateOneWithoutResumeNestedInput
  }

  export type ResumeUncheckedUpdateWithoutTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    realname?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedTime?: DateTimeFieldUpdateOperationsInput | Date | string
    works?: WorksUncheckedUpdateManyWithoutResumeNestedInput
    projects?: ProjectsUncheckedUpdateManyWithoutResumeNestedInput
  }

  export type ResumeUncheckedUpdateManyWithoutTemplateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    realname?: NullableStringFieldUpdateOperationsInput | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    industry?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdTime?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}