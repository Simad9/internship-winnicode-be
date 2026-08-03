
/**
 * Client
**/

import * as runtime from './runtime/client.js';
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
 * Model Task
 * 
 */
export type Task = $Result.DefaultSelection<Prisma.$TaskPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model News
 * 
 */
export type News = $Result.DefaultSelection<Prisma.$NewsPayload>
/**
 * Model Like
 * 
 */
export type Like = $Result.DefaultSelection<Prisma.$LikePayload>
/**
 * Model Save
 * 
 */
export type Save = $Result.DefaultSelection<Prisma.$SavePayload>
/**
 * Model Comment
 * 
 */
export type Comment = $Result.DefaultSelection<Prisma.$CommentPayload>
/**
 * Model Pending
 * 
 */
export type Pending = $Result.DefaultSelection<Prisma.$PendingPayload>
/**
 * Model Mark
 * 
 */
export type Mark = $Result.DefaultSelection<Prisma.$MarkPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  public: 'public',
  intern: 'intern',
  admin: 'admin'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Status_News: {
  pending: 'pending',
  approved: 'approved',
  revised: 'revised'
};

export type Status_News = (typeof Status_News)[keyof typeof Status_News]


export const Status_Category: {
  accepted: 'accepted',
  decline: 'decline'
};

export type Status_Category = (typeof Status_Category)[keyof typeof Status_Category]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type Status_News = $Enums.Status_News

export const Status_News: typeof $Enums.Status_News

export type Status_Category = $Enums.Status_Category

export const Status_Category: typeof $Enums.Status_Category

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

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
   * `prisma.task`: Exposes CRUD operations for the **Task** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tasks
    * const tasks = await prisma.task.findMany()
    * ```
    */
  get task(): Prisma.TaskDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.news`: Exposes CRUD operations for the **News** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more News
    * const news = await prisma.news.findMany()
    * ```
    */
  get news(): Prisma.NewsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.like`: Exposes CRUD operations for the **Like** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Likes
    * const likes = await prisma.like.findMany()
    * ```
    */
  get like(): Prisma.LikeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.save`: Exposes CRUD operations for the **Save** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Saves
    * const saves = await prisma.save.findMany()
    * ```
    */
  get save(): Prisma.SaveDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comment`: Exposes CRUD operations for the **Comment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comment.findMany()
    * ```
    */
  get comment(): Prisma.CommentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pending`: Exposes CRUD operations for the **Pending** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pendings
    * const pendings = await prisma.pending.findMany()
    * ```
    */
  get pending(): Prisma.PendingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mark`: Exposes CRUD operations for the **Mark** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Marks
    * const marks = await prisma.mark.findMany()
    * ```
    */
  get mark(): Prisma.MarkDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.9.1
   * Query Engine version: e922089b7d7502aff4249d5da3420f6fa55fc6ad
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

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
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
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
    Task: 'Task',
    Category: 'Category',
    News: 'News',
    Like: 'Like',
    Save: 'Save',
    Comment: 'Comment',
    Pending: 'Pending',
    Mark: 'Mark'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "task" | "category" | "news" | "like" | "save" | "comment" | "pending" | "mark"
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
      Task: {
        payload: Prisma.$TaskPayload<ExtArgs>
        fields: Prisma.TaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findFirst: {
            args: Prisma.TaskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findMany: {
            args: Prisma.TaskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          create: {
            args: Prisma.TaskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          createMany: {
            args: Prisma.TaskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TaskCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          delete: {
            args: Prisma.TaskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          update: {
            args: Prisma.TaskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          deleteMany: {
            args: Prisma.TaskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TaskUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          upsert: {
            args: Prisma.TaskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          aggregate: {
            args: Prisma.TaskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTask>
          }
          groupBy: {
            args: Prisma.TaskGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskCountArgs<ExtArgs>
            result: $Utils.Optional<TaskCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      News: {
        payload: Prisma.$NewsPayload<ExtArgs>
        fields: Prisma.NewsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NewsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NewsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          findFirst: {
            args: Prisma.NewsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NewsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          findMany: {
            args: Prisma.NewsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>[]
          }
          create: {
            args: Prisma.NewsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          createMany: {
            args: Prisma.NewsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NewsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>[]
          }
          delete: {
            args: Prisma.NewsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          update: {
            args: Prisma.NewsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          deleteMany: {
            args: Prisma.NewsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NewsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NewsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>[]
          }
          upsert: {
            args: Prisma.NewsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          aggregate: {
            args: Prisma.NewsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNews>
          }
          groupBy: {
            args: Prisma.NewsGroupByArgs<ExtArgs>
            result: $Utils.Optional<NewsGroupByOutputType>[]
          }
          count: {
            args: Prisma.NewsCountArgs<ExtArgs>
            result: $Utils.Optional<NewsCountAggregateOutputType> | number
          }
        }
      }
      Like: {
        payload: Prisma.$LikePayload<ExtArgs>
        fields: Prisma.LikeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LikeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LikeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>
          }
          findFirst: {
            args: Prisma.LikeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LikeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>
          }
          findMany: {
            args: Prisma.LikeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>[]
          }
          create: {
            args: Prisma.LikeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>
          }
          createMany: {
            args: Prisma.LikeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LikeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>[]
          }
          delete: {
            args: Prisma.LikeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>
          }
          update: {
            args: Prisma.LikeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>
          }
          deleteMany: {
            args: Prisma.LikeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LikeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LikeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>[]
          }
          upsert: {
            args: Prisma.LikeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikePayload>
          }
          aggregate: {
            args: Prisma.LikeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLike>
          }
          groupBy: {
            args: Prisma.LikeGroupByArgs<ExtArgs>
            result: $Utils.Optional<LikeGroupByOutputType>[]
          }
          count: {
            args: Prisma.LikeCountArgs<ExtArgs>
            result: $Utils.Optional<LikeCountAggregateOutputType> | number
          }
        }
      }
      Save: {
        payload: Prisma.$SavePayload<ExtArgs>
        fields: Prisma.SaveFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SaveFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SaveFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavePayload>
          }
          findFirst: {
            args: Prisma.SaveFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SaveFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavePayload>
          }
          findMany: {
            args: Prisma.SaveFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavePayload>[]
          }
          create: {
            args: Prisma.SaveCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavePayload>
          }
          createMany: {
            args: Prisma.SaveCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SaveCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavePayload>[]
          }
          delete: {
            args: Prisma.SaveDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavePayload>
          }
          update: {
            args: Prisma.SaveUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavePayload>
          }
          deleteMany: {
            args: Prisma.SaveDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SaveUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SaveUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavePayload>[]
          }
          upsert: {
            args: Prisma.SaveUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavePayload>
          }
          aggregate: {
            args: Prisma.SaveAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSave>
          }
          groupBy: {
            args: Prisma.SaveGroupByArgs<ExtArgs>
            result: $Utils.Optional<SaveGroupByOutputType>[]
          }
          count: {
            args: Prisma.SaveCountArgs<ExtArgs>
            result: $Utils.Optional<SaveCountAggregateOutputType> | number
          }
        }
      }
      Comment: {
        payload: Prisma.$CommentPayload<ExtArgs>
        fields: Prisma.CommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findFirst: {
            args: Prisma.CommentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findMany: {
            args: Prisma.CommentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          create: {
            args: Prisma.CommentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          createMany: {
            args: Prisma.CommentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          delete: {
            args: Prisma.CommentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          update: {
            args: Prisma.CommentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          deleteMany: {
            args: Prisma.CommentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          upsert: {
            args: Prisma.CommentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          aggregate: {
            args: Prisma.CommentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComment>
          }
          groupBy: {
            args: Prisma.CommentGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentCountArgs<ExtArgs>
            result: $Utils.Optional<CommentCountAggregateOutputType> | number
          }
        }
      }
      Pending: {
        payload: Prisma.$PendingPayload<ExtArgs>
        fields: Prisma.PendingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PendingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PendingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendingPayload>
          }
          findFirst: {
            args: Prisma.PendingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PendingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendingPayload>
          }
          findMany: {
            args: Prisma.PendingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendingPayload>[]
          }
          create: {
            args: Prisma.PendingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendingPayload>
          }
          createMany: {
            args: Prisma.PendingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PendingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendingPayload>[]
          }
          delete: {
            args: Prisma.PendingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendingPayload>
          }
          update: {
            args: Prisma.PendingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendingPayload>
          }
          deleteMany: {
            args: Prisma.PendingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PendingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PendingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendingPayload>[]
          }
          upsert: {
            args: Prisma.PendingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PendingPayload>
          }
          aggregate: {
            args: Prisma.PendingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePending>
          }
          groupBy: {
            args: Prisma.PendingGroupByArgs<ExtArgs>
            result: $Utils.Optional<PendingGroupByOutputType>[]
          }
          count: {
            args: Prisma.PendingCountArgs<ExtArgs>
            result: $Utils.Optional<PendingCountAggregateOutputType> | number
          }
        }
      }
      Mark: {
        payload: Prisma.$MarkPayload<ExtArgs>
        fields: Prisma.MarkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MarkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MarkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarkPayload>
          }
          findFirst: {
            args: Prisma.MarkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MarkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarkPayload>
          }
          findMany: {
            args: Prisma.MarkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarkPayload>[]
          }
          create: {
            args: Prisma.MarkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarkPayload>
          }
          createMany: {
            args: Prisma.MarkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MarkCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarkPayload>[]
          }
          delete: {
            args: Prisma.MarkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarkPayload>
          }
          update: {
            args: Prisma.MarkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarkPayload>
          }
          deleteMany: {
            args: Prisma.MarkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MarkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MarkUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarkPayload>[]
          }
          upsert: {
            args: Prisma.MarkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarkPayload>
          }
          aggregate: {
            args: Prisma.MarkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMark>
          }
          groupBy: {
            args: Prisma.MarkGroupByArgs<ExtArgs>
            result: $Utils.Optional<MarkGroupByOutputType>[]
          }
          count: {
            args: Prisma.MarkCountArgs<ExtArgs>
            result: $Utils.Optional<MarkCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    task?: TaskOmit
    category?: CategoryOmit
    news?: NewsOmit
    like?: LikeOmit
    save?: SaveOmit
    comment?: CommentOmit
    pending?: PendingOmit
    mark?: MarkOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    news: number
    comments: number
    likes: number
    saves: number
    marks: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    news?: boolean | UserCountOutputTypeCountNewsArgs
    comments?: boolean | UserCountOutputTypeCountCommentsArgs
    likes?: boolean | UserCountOutputTypeCountLikesArgs
    saves?: boolean | UserCountOutputTypeCountSavesArgs
    marks?: boolean | UserCountOutputTypeCountMarksArgs
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
  export type UserCountOutputTypeCountNewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikeWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSavesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SaveWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMarksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MarkWhereInput
  }


  /**
   * Count Type TaskCountOutputType
   */

  export type TaskCountOutputType = {
    news: number
    marks: number
  }

  export type TaskCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    news?: boolean | TaskCountOutputTypeCountNewsArgs
    marks?: boolean | TaskCountOutputTypeCountMarksArgs
  }

  // Custom InputTypes
  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskCountOutputType
     */
    select?: TaskCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeCountNewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsWhereInput
  }

  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeCountMarksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MarkWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    news: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    news?: boolean | CategoryCountOutputTypeCountNewsArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountNewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsWhereInput
  }


  /**
   * Count Type NewsCountOutputType
   */

  export type NewsCountOutputType = {
    likes: number
    saves: number
    comments: number
    pending: number
  }

  export type NewsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    likes?: boolean | NewsCountOutputTypeCountLikesArgs
    saves?: boolean | NewsCountOutputTypeCountSavesArgs
    comments?: boolean | NewsCountOutputTypeCountCommentsArgs
    pending?: boolean | NewsCountOutputTypeCountPendingArgs
  }

  // Custom InputTypes
  /**
   * NewsCountOutputType without action
   */
  export type NewsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsCountOutputType
     */
    select?: NewsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * NewsCountOutputType without action
   */
  export type NewsCountOutputTypeCountLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikeWhereInput
  }

  /**
   * NewsCountOutputType without action
   */
  export type NewsCountOutputTypeCountSavesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SaveWhereInput
  }

  /**
   * NewsCountOutputType without action
   */
  export type NewsCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }

  /**
   * NewsCountOutputType without action
   */
  export type NewsCountOutputTypeCountPendingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PendingWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id_user: number | null
  }

  export type UserSumAggregateOutputType = {
    id_user: number | null
  }

  export type UserMinAggregateOutputType = {
    id_user: number | null
    name: string | null
    username: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    profile_picture: string | null
    refresh_token: string | null
    university: string | null
    major: string | null
    internship_date: Date | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id_user: number | null
    name: string | null
    username: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    profile_picture: string | null
    refresh_token: string | null
    university: string | null
    major: string | null
    internship_date: Date | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    id_user: number
    name: number
    username: number
    email: number
    password: number
    role: number
    profile_picture: number
    refresh_token: number
    university: number
    major: number
    internship_date: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id_user?: true
  }

  export type UserSumAggregateInputType = {
    id_user?: true
  }

  export type UserMinAggregateInputType = {
    id_user?: true
    name?: true
    username?: true
    email?: true
    password?: true
    role?: true
    profile_picture?: true
    refresh_token?: true
    university?: true
    major?: true
    internship_date?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type UserMaxAggregateInputType = {
    id_user?: true
    name?: true
    username?: true
    email?: true
    password?: true
    role?: true
    profile_picture?: true
    refresh_token?: true
    university?: true
    major?: true
    internship_date?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type UserCountAggregateInputType = {
    id_user?: true
    name?: true
    username?: true
    email?: true
    password?: true
    role?: true
    profile_picture?: true
    refresh_token?: true
    university?: true
    major?: true
    internship_date?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id_user: number
    name: string
    username: string
    email: string
    password: string
    role: $Enums.Role
    profile_picture: string | null
    refresh_token: string | null
    university: string | null
    major: string | null
    internship_date: Date | null
    created_at: Date
    updated_at: Date | null
    deleted_at: Date | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
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
    id_user?: boolean
    name?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    profile_picture?: boolean
    refresh_token?: boolean
    university?: boolean
    major?: boolean
    internship_date?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    news?: boolean | User$newsArgs<ExtArgs>
    comments?: boolean | User$commentsArgs<ExtArgs>
    likes?: boolean | User$likesArgs<ExtArgs>
    saves?: boolean | User$savesArgs<ExtArgs>
    marks?: boolean | User$marksArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_user?: boolean
    name?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    profile_picture?: boolean
    refresh_token?: boolean
    university?: boolean
    major?: boolean
    internship_date?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_user?: boolean
    name?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    profile_picture?: boolean
    refresh_token?: boolean
    university?: boolean
    major?: boolean
    internship_date?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id_user?: boolean
    name?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    profile_picture?: boolean
    refresh_token?: boolean
    university?: boolean
    major?: boolean
    internship_date?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_user" | "name" | "username" | "email" | "password" | "role" | "profile_picture" | "refresh_token" | "university" | "major" | "internship_date" | "created_at" | "updated_at" | "deleted_at", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    news?: boolean | User$newsArgs<ExtArgs>
    comments?: boolean | User$commentsArgs<ExtArgs>
    likes?: boolean | User$likesArgs<ExtArgs>
    saves?: boolean | User$savesArgs<ExtArgs>
    marks?: boolean | User$marksArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      news: Prisma.$NewsPayload<ExtArgs>[]
      comments: Prisma.$CommentPayload<ExtArgs>[]
      likes: Prisma.$LikePayload<ExtArgs>[]
      saves: Prisma.$SavePayload<ExtArgs>[]
      marks: Prisma.$MarkPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_user: number
      name: string
      username: string
      email: string
      password: string
      role: $Enums.Role
      profile_picture: string | null
      refresh_token: string | null
      university: string | null
      major: string | null
      internship_date: Date | null
      created_at: Date
      updated_at: Date | null
      deleted_at: Date | null
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
     * // Only select the `id_user`
     * const userWithId_userOnly = await prisma.user.findMany({ select: { id_user: true } })
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
     * // Create many Users and only return the `id_user`
     * const userWithId_userOnly = await prisma.user.createManyAndReturn({
     *   select: { id_user: true },
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
     * // Update zero or more Users and only return the `id_user`
     * const userWithId_userOnly = await prisma.user.updateManyAndReturn({
     *   select: { id_user: true },
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
    news<T extends User$newsArgs<ExtArgs> = {}>(args?: Subset<T, User$newsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comments<T extends User$commentsArgs<ExtArgs> = {}>(args?: Subset<T, User$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    likes<T extends User$likesArgs<ExtArgs> = {}>(args?: Subset<T, User$likesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    saves<T extends User$savesArgs<ExtArgs> = {}>(args?: Subset<T, User$savesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    marks<T extends User$marksArgs<ExtArgs> = {}>(args?: Subset<T, User$marksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id_user: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly profile_picture: FieldRef<"User", 'String'>
    readonly refresh_token: FieldRef<"User", 'String'>
    readonly university: FieldRef<"User", 'String'>
    readonly major: FieldRef<"User", 'String'>
    readonly internship_date: FieldRef<"User", 'DateTime'>
    readonly created_at: FieldRef<"User", 'DateTime'>
    readonly updated_at: FieldRef<"User", 'DateTime'>
    readonly deleted_at: FieldRef<"User", 'DateTime'>
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
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
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
   * User.news
   */
  export type User$newsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    where?: NewsWhereInput
    orderBy?: NewsOrderByWithRelationInput | NewsOrderByWithRelationInput[]
    cursor?: NewsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NewsScalarFieldEnum | NewsScalarFieldEnum[]
  }

  /**
   * User.comments
   */
  export type User$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * User.likes
   */
  export type User$likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    where?: LikeWhereInput
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[]
    cursor?: LikeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[]
  }

  /**
   * User.saves
   */
  export type User$savesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Save
     */
    select?: SaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Save
     */
    omit?: SaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaveInclude<ExtArgs> | null
    where?: SaveWhereInput
    orderBy?: SaveOrderByWithRelationInput | SaveOrderByWithRelationInput[]
    cursor?: SaveWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SaveScalarFieldEnum | SaveScalarFieldEnum[]
  }

  /**
   * User.marks
   */
  export type User$marksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mark
     */
    select?: MarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mark
     */
    omit?: MarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkInclude<ExtArgs> | null
    where?: MarkWhereInput
    orderBy?: MarkOrderByWithRelationInput | MarkOrderByWithRelationInput[]
    cursor?: MarkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MarkScalarFieldEnum | MarkScalarFieldEnum[]
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
   * Model Task
   */

  export type AggregateTask = {
    _count: TaskCountAggregateOutputType | null
    _avg: TaskAvgAggregateOutputType | null
    _sum: TaskSumAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  export type TaskAvgAggregateOutputType = {
    id_task: number | null
  }

  export type TaskSumAggregateOutputType = {
    id_task: number | null
  }

  export type TaskMinAggregateOutputType = {
    id_task: number | null
    task_title: string | null
    task_deadline: Date | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type TaskMaxAggregateOutputType = {
    id_task: number | null
    task_title: string | null
    task_deadline: Date | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type TaskCountAggregateOutputType = {
    id_task: number
    task_title: number
    task_deadline: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type TaskAvgAggregateInputType = {
    id_task?: true
  }

  export type TaskSumAggregateInputType = {
    id_task?: true
  }

  export type TaskMinAggregateInputType = {
    id_task?: true
    task_title?: true
    task_deadline?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type TaskMaxAggregateInputType = {
    id_task?: true
    task_title?: true
    task_deadline?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type TaskCountAggregateInputType = {
    id_task?: true
    task_title?: true
    task_deadline?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type TaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Task to aggregate.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tasks
    **/
    _count?: true | TaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TaskAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TaskSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskMaxAggregateInputType
  }

  export type GetTaskAggregateType<T extends TaskAggregateArgs> = {
        [P in keyof T & keyof AggregateTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTask[P]>
      : GetScalarType<T[P], AggregateTask[P]>
  }




  export type TaskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithAggregationInput | TaskOrderByWithAggregationInput[]
    by: TaskScalarFieldEnum[] | TaskScalarFieldEnum
    having?: TaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskCountAggregateInputType | true
    _avg?: TaskAvgAggregateInputType
    _sum?: TaskSumAggregateInputType
    _min?: TaskMinAggregateInputType
    _max?: TaskMaxAggregateInputType
  }

  export type TaskGroupByOutputType = {
    id_task: number
    task_title: string
    task_deadline: Date
    created_at: Date
    updated_at: Date | null
    deleted_at: Date | null
    _count: TaskCountAggregateOutputType | null
    _avg: TaskAvgAggregateOutputType | null
    _sum: TaskSumAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  type GetTaskGroupByPayload<T extends TaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskGroupByOutputType[P]>
            : GetScalarType<T[P], TaskGroupByOutputType[P]>
        }
      >
    >


  export type TaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_task?: boolean
    task_title?: boolean
    task_deadline?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    news?: boolean | Task$newsArgs<ExtArgs>
    marks?: boolean | Task$marksArgs<ExtArgs>
    _count?: boolean | TaskCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_task?: boolean
    task_title?: boolean
    task_deadline?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }, ExtArgs["result"]["task"]>

  export type TaskSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_task?: boolean
    task_title?: boolean
    task_deadline?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }, ExtArgs["result"]["task"]>

  export type TaskSelectScalar = {
    id_task?: boolean
    task_title?: boolean
    task_deadline?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }

  export type TaskOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_task" | "task_title" | "task_deadline" | "created_at" | "updated_at" | "deleted_at", ExtArgs["result"]["task"]>
  export type TaskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    news?: boolean | Task$newsArgs<ExtArgs>
    marks?: boolean | Task$marksArgs<ExtArgs>
    _count?: boolean | TaskCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TaskIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TaskIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Task"
    objects: {
      news: Prisma.$NewsPayload<ExtArgs>[]
      marks: Prisma.$MarkPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_task: number
      task_title: string
      task_deadline: Date
      created_at: Date
      updated_at: Date | null
      deleted_at: Date | null
    }, ExtArgs["result"]["task"]>
    composites: {}
  }

  type TaskGetPayload<S extends boolean | null | undefined | TaskDefaultArgs> = $Result.GetResult<Prisma.$TaskPayload, S>

  type TaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TaskFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaskCountAggregateInputType | true
    }

  export interface TaskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Task'], meta: { name: 'Task' } }
    /**
     * Find zero or one Task that matches the filter.
     * @param {TaskFindUniqueArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskFindUniqueArgs>(args: SelectSubset<T, TaskFindUniqueArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Task that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TaskFindUniqueOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskFindUniqueOrThrowArgs>(args: SelectSubset<T, TaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskFindFirstArgs>(args?: SelectSubset<T, TaskFindFirstArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskFindFirstOrThrowArgs>(args?: SelectSubset<T, TaskFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tasks
     * const tasks = await prisma.task.findMany()
     * 
     * // Get first 10 Tasks
     * const tasks = await prisma.task.findMany({ take: 10 })
     * 
     * // Only select the `id_task`
     * const taskWithId_taskOnly = await prisma.task.findMany({ select: { id_task: true } })
     * 
     */
    findMany<T extends TaskFindManyArgs>(args?: SelectSubset<T, TaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Task.
     * @param {TaskCreateArgs} args - Arguments to create a Task.
     * @example
     * // Create one Task
     * const Task = await prisma.task.create({
     *   data: {
     *     // ... data to create a Task
     *   }
     * })
     * 
     */
    create<T extends TaskCreateArgs>(args: SelectSubset<T, TaskCreateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tasks.
     * @param {TaskCreateManyArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaskCreateManyArgs>(args?: SelectSubset<T, TaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tasks and returns the data saved in the database.
     * @param {TaskCreateManyAndReturnArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tasks and only return the `id_task`
     * const taskWithId_taskOnly = await prisma.task.createManyAndReturn({
     *   select: { id_task: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TaskCreateManyAndReturnArgs>(args?: SelectSubset<T, TaskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Task.
     * @param {TaskDeleteArgs} args - Arguments to delete one Task.
     * @example
     * // Delete one Task
     * const Task = await prisma.task.delete({
     *   where: {
     *     // ... filter to delete one Task
     *   }
     * })
     * 
     */
    delete<T extends TaskDeleteArgs>(args: SelectSubset<T, TaskDeleteArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Task.
     * @param {TaskUpdateArgs} args - Arguments to update one Task.
     * @example
     * // Update one Task
     * const task = await prisma.task.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaskUpdateArgs>(args: SelectSubset<T, TaskUpdateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tasks.
     * @param {TaskDeleteManyArgs} args - Arguments to filter Tasks to delete.
     * @example
     * // Delete a few Tasks
     * const { count } = await prisma.task.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaskDeleteManyArgs>(args?: SelectSubset<T, TaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaskUpdateManyArgs>(args: SelectSubset<T, TaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks and returns the data updated in the database.
     * @param {TaskUpdateManyAndReturnArgs} args - Arguments to update many Tasks.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tasks and only return the `id_task`
     * const taskWithId_taskOnly = await prisma.task.updateManyAndReturn({
     *   select: { id_task: true },
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
    updateManyAndReturn<T extends TaskUpdateManyAndReturnArgs>(args: SelectSubset<T, TaskUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Task.
     * @param {TaskUpsertArgs} args - Arguments to update or create a Task.
     * @example
     * // Update or create a Task
     * const task = await prisma.task.upsert({
     *   create: {
     *     // ... data to create a Task
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Task we want to update
     *   }
     * })
     */
    upsert<T extends TaskUpsertArgs>(args: SelectSubset<T, TaskUpsertArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskCountArgs} args - Arguments to filter Tasks to count.
     * @example
     * // Count the number of Tasks
     * const count = await prisma.task.count({
     *   where: {
     *     // ... the filter for the Tasks we want to count
     *   }
     * })
    **/
    count<T extends TaskCountArgs>(
      args?: Subset<T, TaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TaskAggregateArgs>(args: Subset<T, TaskAggregateArgs>): Prisma.PrismaPromise<GetTaskAggregateType<T>>

    /**
     * Group by Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskGroupByArgs} args - Group by arguments.
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
      T extends TaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskGroupByArgs['orderBy'] }
        : { orderBy?: TaskGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Task model
   */
  readonly fields: TaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Task.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    news<T extends Task$newsArgs<ExtArgs> = {}>(args?: Subset<T, Task$newsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    marks<T extends Task$marksArgs<ExtArgs> = {}>(args?: Subset<T, Task$marksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Task model
   */
  interface TaskFieldRefs {
    readonly id_task: FieldRef<"Task", 'Int'>
    readonly task_title: FieldRef<"Task", 'String'>
    readonly task_deadline: FieldRef<"Task", 'DateTime'>
    readonly created_at: FieldRef<"Task", 'DateTime'>
    readonly updated_at: FieldRef<"Task", 'DateTime'>
    readonly deleted_at: FieldRef<"Task", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Task findUnique
   */
  export type TaskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findUniqueOrThrow
   */
  export type TaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findFirst
   */
  export type TaskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findFirstOrThrow
   */
  export type TaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findMany
   */
  export type TaskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Tasks to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task create
   */
  export type TaskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to create a Task.
     */
    data: XOR<TaskCreateInput, TaskUncheckedCreateInput>
  }

  /**
   * Task createMany
   */
  export type TaskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Task createManyAndReturn
   */
  export type TaskCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Task update
   */
  export type TaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to update a Task.
     */
    data: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
    /**
     * Choose, which Task to update.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task updateMany
   */
  export type TaskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to update.
     */
    limit?: number
  }

  /**
   * Task updateManyAndReturn
   */
  export type TaskUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to update.
     */
    limit?: number
  }

  /**
   * Task upsert
   */
  export type TaskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The filter to search for the Task to update in case it exists.
     */
    where: TaskWhereUniqueInput
    /**
     * In case the Task found by the `where` argument doesn't exist, create a new Task with this data.
     */
    create: XOR<TaskCreateInput, TaskUncheckedCreateInput>
    /**
     * In case the Task was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
  }

  /**
   * Task delete
   */
  export type TaskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter which Task to delete.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task deleteMany
   */
  export type TaskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tasks to delete
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to delete.
     */
    limit?: number
  }

  /**
   * Task.news
   */
  export type Task$newsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    where?: NewsWhereInput
    orderBy?: NewsOrderByWithRelationInput | NewsOrderByWithRelationInput[]
    cursor?: NewsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NewsScalarFieldEnum | NewsScalarFieldEnum[]
  }

  /**
   * Task.marks
   */
  export type Task$marksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mark
     */
    select?: MarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mark
     */
    omit?: MarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkInclude<ExtArgs> | null
    where?: MarkWhereInput
    orderBy?: MarkOrderByWithRelationInput | MarkOrderByWithRelationInput[]
    cursor?: MarkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MarkScalarFieldEnum | MarkScalarFieldEnum[]
  }

  /**
   * Task without action
   */
  export type TaskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    id_category: number | null
  }

  export type CategorySumAggregateOutputType = {
    id_category: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id_category: number | null
    category: string | null
    status: $Enums.Status_Category | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type CategoryMaxAggregateOutputType = {
    id_category: number | null
    category: string | null
    status: $Enums.Status_Category | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type CategoryCountAggregateOutputType = {
    id_category: number
    category: number
    status: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    id_category?: true
  }

  export type CategorySumAggregateInputType = {
    id_category?: true
  }

  export type CategoryMinAggregateInputType = {
    id_category?: true
    category?: true
    status?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type CategoryMaxAggregateInputType = {
    id_category?: true
    category?: true
    status?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type CategoryCountAggregateInputType = {
    id_category?: true
    category?: true
    status?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id_category: number
    category: string
    status: $Enums.Status_Category
    created_at: Date
    updated_at: Date | null
    deleted_at: Date | null
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_category?: boolean
    category?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    news?: boolean | Category$newsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_category?: boolean
    category?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_category?: boolean
    category?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id_category?: boolean
    category?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_category" | "category" | "status" | "created_at" | "updated_at" | "deleted_at", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    news?: boolean | Category$newsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      news: Prisma.$NewsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_category: number
      category: string
      status: $Enums.Status_Category
      created_at: Date
      updated_at: Date | null
      deleted_at: Date | null
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id_category`
     * const categoryWithId_categoryOnly = await prisma.category.findMany({ select: { id_category: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id_category`
     * const categoryWithId_categoryOnly = await prisma.category.createManyAndReturn({
     *   select: { id_category: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id_category`
     * const categoryWithId_categoryOnly = await prisma.category.updateManyAndReturn({
     *   select: { id_category: true },
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
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    news<T extends Category$newsArgs<ExtArgs> = {}>(args?: Subset<T, Category$newsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id_category: FieldRef<"Category", 'Int'>
    readonly category: FieldRef<"Category", 'String'>
    readonly status: FieldRef<"Category", 'Status_Category'>
    readonly created_at: FieldRef<"Category", 'DateTime'>
    readonly updated_at: FieldRef<"Category", 'DateTime'>
    readonly deleted_at: FieldRef<"Category", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.news
   */
  export type Category$newsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    where?: NewsWhereInput
    orderBy?: NewsOrderByWithRelationInput | NewsOrderByWithRelationInput[]
    cursor?: NewsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NewsScalarFieldEnum | NewsScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model News
   */

  export type AggregateNews = {
    _count: NewsCountAggregateOutputType | null
    _avg: NewsAvgAggregateOutputType | null
    _sum: NewsSumAggregateOutputType | null
    _min: NewsMinAggregateOutputType | null
    _max: NewsMaxAggregateOutputType | null
  }

  export type NewsAvgAggregateOutputType = {
    id_news: number | null
    taskId: number | null
    categoryId: number | null
    authorId: number | null
  }

  export type NewsSumAggregateOutputType = {
    id_news: number | null
    taskId: number | null
    categoryId: number | null
    authorId: number | null
  }

  export type NewsMinAggregateOutputType = {
    id_news: number | null
    taskId: number | null
    categoryId: number | null
    authorId: number | null
    title: string | null
    content: string | null
    image: string | null
    status: $Enums.Status_News | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type NewsMaxAggregateOutputType = {
    id_news: number | null
    taskId: number | null
    categoryId: number | null
    authorId: number | null
    title: string | null
    content: string | null
    image: string | null
    status: $Enums.Status_News | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type NewsCountAggregateOutputType = {
    id_news: number
    taskId: number
    categoryId: number
    authorId: number
    title: number
    content: number
    image: number
    status: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type NewsAvgAggregateInputType = {
    id_news?: true
    taskId?: true
    categoryId?: true
    authorId?: true
  }

  export type NewsSumAggregateInputType = {
    id_news?: true
    taskId?: true
    categoryId?: true
    authorId?: true
  }

  export type NewsMinAggregateInputType = {
    id_news?: true
    taskId?: true
    categoryId?: true
    authorId?: true
    title?: true
    content?: true
    image?: true
    status?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type NewsMaxAggregateInputType = {
    id_news?: true
    taskId?: true
    categoryId?: true
    authorId?: true
    title?: true
    content?: true
    image?: true
    status?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type NewsCountAggregateInputType = {
    id_news?: true
    taskId?: true
    categoryId?: true
    authorId?: true
    title?: true
    content?: true
    image?: true
    status?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type NewsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which News to aggregate.
     */
    where?: NewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of News to fetch.
     */
    orderBy?: NewsOrderByWithRelationInput | NewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` News from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` News.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned News
    **/
    _count?: true | NewsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NewsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NewsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NewsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NewsMaxAggregateInputType
  }

  export type GetNewsAggregateType<T extends NewsAggregateArgs> = {
        [P in keyof T & keyof AggregateNews]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNews[P]>
      : GetScalarType<T[P], AggregateNews[P]>
  }




  export type NewsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsWhereInput
    orderBy?: NewsOrderByWithAggregationInput | NewsOrderByWithAggregationInput[]
    by: NewsScalarFieldEnum[] | NewsScalarFieldEnum
    having?: NewsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NewsCountAggregateInputType | true
    _avg?: NewsAvgAggregateInputType
    _sum?: NewsSumAggregateInputType
    _min?: NewsMinAggregateInputType
    _max?: NewsMaxAggregateInputType
  }

  export type NewsGroupByOutputType = {
    id_news: number
    taskId: number
    categoryId: number
    authorId: number
    title: string
    content: string
    image: string
    status: $Enums.Status_News | null
    created_at: Date
    updated_at: Date | null
    deleted_at: Date | null
    _count: NewsCountAggregateOutputType | null
    _avg: NewsAvgAggregateOutputType | null
    _sum: NewsSumAggregateOutputType | null
    _min: NewsMinAggregateOutputType | null
    _max: NewsMaxAggregateOutputType | null
  }

  type GetNewsGroupByPayload<T extends NewsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NewsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NewsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NewsGroupByOutputType[P]>
            : GetScalarType<T[P], NewsGroupByOutputType[P]>
        }
      >
    >


  export type NewsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_news?: boolean
    taskId?: boolean
    categoryId?: boolean
    authorId?: boolean
    title?: boolean
    content?: boolean
    image?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
    likes?: boolean | News$likesArgs<ExtArgs>
    saves?: boolean | News$savesArgs<ExtArgs>
    comments?: boolean | News$commentsArgs<ExtArgs>
    pending?: boolean | News$pendingArgs<ExtArgs>
    _count?: boolean | NewsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["news"]>

  export type NewsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_news?: boolean
    taskId?: boolean
    categoryId?: boolean
    authorId?: boolean
    title?: boolean
    content?: boolean
    image?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["news"]>

  export type NewsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_news?: boolean
    taskId?: boolean
    categoryId?: boolean
    authorId?: boolean
    title?: boolean
    content?: boolean
    image?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["news"]>

  export type NewsSelectScalar = {
    id_news?: boolean
    taskId?: boolean
    categoryId?: boolean
    authorId?: boolean
    title?: boolean
    content?: boolean
    image?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }

  export type NewsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_news" | "taskId" | "categoryId" | "authorId" | "title" | "content" | "image" | "status" | "created_at" | "updated_at" | "deleted_at", ExtArgs["result"]["news"]>
  export type NewsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
    likes?: boolean | News$likesArgs<ExtArgs>
    saves?: boolean | News$savesArgs<ExtArgs>
    comments?: boolean | News$commentsArgs<ExtArgs>
    pending?: boolean | News$pendingArgs<ExtArgs>
    _count?: boolean | NewsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type NewsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NewsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $NewsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "News"
    objects: {
      task: Prisma.$TaskPayload<ExtArgs>
      category: Prisma.$CategoryPayload<ExtArgs>
      author: Prisma.$UserPayload<ExtArgs>
      likes: Prisma.$LikePayload<ExtArgs>[]
      saves: Prisma.$SavePayload<ExtArgs>[]
      comments: Prisma.$CommentPayload<ExtArgs>[]
      pending: Prisma.$PendingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_news: number
      taskId: number
      categoryId: number
      authorId: number
      title: string
      content: string
      image: string
      status: $Enums.Status_News | null
      created_at: Date
      updated_at: Date | null
      deleted_at: Date | null
    }, ExtArgs["result"]["news"]>
    composites: {}
  }

  type NewsGetPayload<S extends boolean | null | undefined | NewsDefaultArgs> = $Result.GetResult<Prisma.$NewsPayload, S>

  type NewsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NewsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NewsCountAggregateInputType | true
    }

  export interface NewsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['News'], meta: { name: 'News' } }
    /**
     * Find zero or one News that matches the filter.
     * @param {NewsFindUniqueArgs} args - Arguments to find a News
     * @example
     * // Get one News
     * const news = await prisma.news.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NewsFindUniqueArgs>(args: SelectSubset<T, NewsFindUniqueArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one News that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NewsFindUniqueOrThrowArgs} args - Arguments to find a News
     * @example
     * // Get one News
     * const news = await prisma.news.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NewsFindUniqueOrThrowArgs>(args: SelectSubset<T, NewsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first News that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsFindFirstArgs} args - Arguments to find a News
     * @example
     * // Get one News
     * const news = await prisma.news.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NewsFindFirstArgs>(args?: SelectSubset<T, NewsFindFirstArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first News that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsFindFirstOrThrowArgs} args - Arguments to find a News
     * @example
     * // Get one News
     * const news = await prisma.news.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NewsFindFirstOrThrowArgs>(args?: SelectSubset<T, NewsFindFirstOrThrowArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more News that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all News
     * const news = await prisma.news.findMany()
     * 
     * // Get first 10 News
     * const news = await prisma.news.findMany({ take: 10 })
     * 
     * // Only select the `id_news`
     * const newsWithId_newsOnly = await prisma.news.findMany({ select: { id_news: true } })
     * 
     */
    findMany<T extends NewsFindManyArgs>(args?: SelectSubset<T, NewsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a News.
     * @param {NewsCreateArgs} args - Arguments to create a News.
     * @example
     * // Create one News
     * const News = await prisma.news.create({
     *   data: {
     *     // ... data to create a News
     *   }
     * })
     * 
     */
    create<T extends NewsCreateArgs>(args: SelectSubset<T, NewsCreateArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many News.
     * @param {NewsCreateManyArgs} args - Arguments to create many News.
     * @example
     * // Create many News
     * const news = await prisma.news.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NewsCreateManyArgs>(args?: SelectSubset<T, NewsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many News and returns the data saved in the database.
     * @param {NewsCreateManyAndReturnArgs} args - Arguments to create many News.
     * @example
     * // Create many News
     * const news = await prisma.news.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many News and only return the `id_news`
     * const newsWithId_newsOnly = await prisma.news.createManyAndReturn({
     *   select: { id_news: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NewsCreateManyAndReturnArgs>(args?: SelectSubset<T, NewsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a News.
     * @param {NewsDeleteArgs} args - Arguments to delete one News.
     * @example
     * // Delete one News
     * const News = await prisma.news.delete({
     *   where: {
     *     // ... filter to delete one News
     *   }
     * })
     * 
     */
    delete<T extends NewsDeleteArgs>(args: SelectSubset<T, NewsDeleteArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one News.
     * @param {NewsUpdateArgs} args - Arguments to update one News.
     * @example
     * // Update one News
     * const news = await prisma.news.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NewsUpdateArgs>(args: SelectSubset<T, NewsUpdateArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more News.
     * @param {NewsDeleteManyArgs} args - Arguments to filter News to delete.
     * @example
     * // Delete a few News
     * const { count } = await prisma.news.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NewsDeleteManyArgs>(args?: SelectSubset<T, NewsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more News.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many News
     * const news = await prisma.news.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NewsUpdateManyArgs>(args: SelectSubset<T, NewsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more News and returns the data updated in the database.
     * @param {NewsUpdateManyAndReturnArgs} args - Arguments to update many News.
     * @example
     * // Update many News
     * const news = await prisma.news.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more News and only return the `id_news`
     * const newsWithId_newsOnly = await prisma.news.updateManyAndReturn({
     *   select: { id_news: true },
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
    updateManyAndReturn<T extends NewsUpdateManyAndReturnArgs>(args: SelectSubset<T, NewsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one News.
     * @param {NewsUpsertArgs} args - Arguments to update or create a News.
     * @example
     * // Update or create a News
     * const news = await prisma.news.upsert({
     *   create: {
     *     // ... data to create a News
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the News we want to update
     *   }
     * })
     */
    upsert<T extends NewsUpsertArgs>(args: SelectSubset<T, NewsUpsertArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of News.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsCountArgs} args - Arguments to filter News to count.
     * @example
     * // Count the number of News
     * const count = await prisma.news.count({
     *   where: {
     *     // ... the filter for the News we want to count
     *   }
     * })
    **/
    count<T extends NewsCountArgs>(
      args?: Subset<T, NewsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NewsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a News.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NewsAggregateArgs>(args: Subset<T, NewsAggregateArgs>): Prisma.PrismaPromise<GetNewsAggregateType<T>>

    /**
     * Group by News.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsGroupByArgs} args - Group by arguments.
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
      T extends NewsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NewsGroupByArgs['orderBy'] }
        : { orderBy?: NewsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NewsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNewsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the News model
   */
  readonly fields: NewsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for News.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NewsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    task<T extends TaskDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TaskDefaultArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    likes<T extends News$likesArgs<ExtArgs> = {}>(args?: Subset<T, News$likesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    saves<T extends News$savesArgs<ExtArgs> = {}>(args?: Subset<T, News$savesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comments<T extends News$commentsArgs<ExtArgs> = {}>(args?: Subset<T, News$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pending<T extends News$pendingArgs<ExtArgs> = {}>(args?: Subset<T, News$pendingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PendingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the News model
   */
  interface NewsFieldRefs {
    readonly id_news: FieldRef<"News", 'Int'>
    readonly taskId: FieldRef<"News", 'Int'>
    readonly categoryId: FieldRef<"News", 'Int'>
    readonly authorId: FieldRef<"News", 'Int'>
    readonly title: FieldRef<"News", 'String'>
    readonly content: FieldRef<"News", 'String'>
    readonly image: FieldRef<"News", 'String'>
    readonly status: FieldRef<"News", 'Status_News'>
    readonly created_at: FieldRef<"News", 'DateTime'>
    readonly updated_at: FieldRef<"News", 'DateTime'>
    readonly deleted_at: FieldRef<"News", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * News findUnique
   */
  export type NewsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * Filter, which News to fetch.
     */
    where: NewsWhereUniqueInput
  }

  /**
   * News findUniqueOrThrow
   */
  export type NewsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * Filter, which News to fetch.
     */
    where: NewsWhereUniqueInput
  }

  /**
   * News findFirst
   */
  export type NewsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * Filter, which News to fetch.
     */
    where?: NewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of News to fetch.
     */
    orderBy?: NewsOrderByWithRelationInput | NewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for News.
     */
    cursor?: NewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` News from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` News.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of News.
     */
    distinct?: NewsScalarFieldEnum | NewsScalarFieldEnum[]
  }

  /**
   * News findFirstOrThrow
   */
  export type NewsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * Filter, which News to fetch.
     */
    where?: NewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of News to fetch.
     */
    orderBy?: NewsOrderByWithRelationInput | NewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for News.
     */
    cursor?: NewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` News from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` News.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of News.
     */
    distinct?: NewsScalarFieldEnum | NewsScalarFieldEnum[]
  }

  /**
   * News findMany
   */
  export type NewsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * Filter, which News to fetch.
     */
    where?: NewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of News to fetch.
     */
    orderBy?: NewsOrderByWithRelationInput | NewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing News.
     */
    cursor?: NewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` News from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` News.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of News.
     */
    distinct?: NewsScalarFieldEnum | NewsScalarFieldEnum[]
  }

  /**
   * News create
   */
  export type NewsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * The data needed to create a News.
     */
    data: XOR<NewsCreateInput, NewsUncheckedCreateInput>
  }

  /**
   * News createMany
   */
  export type NewsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many News.
     */
    data: NewsCreateManyInput | NewsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * News createManyAndReturn
   */
  export type NewsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * The data used to create many News.
     */
    data: NewsCreateManyInput | NewsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * News update
   */
  export type NewsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * The data needed to update a News.
     */
    data: XOR<NewsUpdateInput, NewsUncheckedUpdateInput>
    /**
     * Choose, which News to update.
     */
    where: NewsWhereUniqueInput
  }

  /**
   * News updateMany
   */
  export type NewsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update News.
     */
    data: XOR<NewsUpdateManyMutationInput, NewsUncheckedUpdateManyInput>
    /**
     * Filter which News to update
     */
    where?: NewsWhereInput
    /**
     * Limit how many News to update.
     */
    limit?: number
  }

  /**
   * News updateManyAndReturn
   */
  export type NewsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * The data used to update News.
     */
    data: XOR<NewsUpdateManyMutationInput, NewsUncheckedUpdateManyInput>
    /**
     * Filter which News to update
     */
    where?: NewsWhereInput
    /**
     * Limit how many News to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * News upsert
   */
  export type NewsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * The filter to search for the News to update in case it exists.
     */
    where: NewsWhereUniqueInput
    /**
     * In case the News found by the `where` argument doesn't exist, create a new News with this data.
     */
    create: XOR<NewsCreateInput, NewsUncheckedCreateInput>
    /**
     * In case the News was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NewsUpdateInput, NewsUncheckedUpdateInput>
  }

  /**
   * News delete
   */
  export type NewsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * Filter which News to delete.
     */
    where: NewsWhereUniqueInput
  }

  /**
   * News deleteMany
   */
  export type NewsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which News to delete
     */
    where?: NewsWhereInput
    /**
     * Limit how many News to delete.
     */
    limit?: number
  }

  /**
   * News.likes
   */
  export type News$likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    where?: LikeWhereInput
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[]
    cursor?: LikeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[]
  }

  /**
   * News.saves
   */
  export type News$savesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Save
     */
    select?: SaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Save
     */
    omit?: SaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaveInclude<ExtArgs> | null
    where?: SaveWhereInput
    orderBy?: SaveOrderByWithRelationInput | SaveOrderByWithRelationInput[]
    cursor?: SaveWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SaveScalarFieldEnum | SaveScalarFieldEnum[]
  }

  /**
   * News.comments
   */
  export type News$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * News.pending
   */
  export type News$pendingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pending
     */
    select?: PendingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pending
     */
    omit?: PendingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendingInclude<ExtArgs> | null
    where?: PendingWhereInput
    orderBy?: PendingOrderByWithRelationInput | PendingOrderByWithRelationInput[]
    cursor?: PendingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PendingScalarFieldEnum | PendingScalarFieldEnum[]
  }

  /**
   * News without action
   */
  export type NewsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
  }


  /**
   * Model Like
   */

  export type AggregateLike = {
    _count: LikeCountAggregateOutputType | null
    _avg: LikeAvgAggregateOutputType | null
    _sum: LikeSumAggregateOutputType | null
    _min: LikeMinAggregateOutputType | null
    _max: LikeMaxAggregateOutputType | null
  }

  export type LikeAvgAggregateOutputType = {
    id_like: number | null
    newsId: number | null
    userId: number | null
  }

  export type LikeSumAggregateOutputType = {
    id_like: number | null
    newsId: number | null
    userId: number | null
  }

  export type LikeMinAggregateOutputType = {
    id_like: number | null
    newsId: number | null
    userId: number | null
    like: boolean | null
    timestamp: Date | null
  }

  export type LikeMaxAggregateOutputType = {
    id_like: number | null
    newsId: number | null
    userId: number | null
    like: boolean | null
    timestamp: Date | null
  }

  export type LikeCountAggregateOutputType = {
    id_like: number
    newsId: number
    userId: number
    like: number
    timestamp: number
    _all: number
  }


  export type LikeAvgAggregateInputType = {
    id_like?: true
    newsId?: true
    userId?: true
  }

  export type LikeSumAggregateInputType = {
    id_like?: true
    newsId?: true
    userId?: true
  }

  export type LikeMinAggregateInputType = {
    id_like?: true
    newsId?: true
    userId?: true
    like?: true
    timestamp?: true
  }

  export type LikeMaxAggregateInputType = {
    id_like?: true
    newsId?: true
    userId?: true
    like?: true
    timestamp?: true
  }

  export type LikeCountAggregateInputType = {
    id_like?: true
    newsId?: true
    userId?: true
    like?: true
    timestamp?: true
    _all?: true
  }

  export type LikeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Like to aggregate.
     */
    where?: LikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     */
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Likes
    **/
    _count?: true | LikeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LikeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LikeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LikeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LikeMaxAggregateInputType
  }

  export type GetLikeAggregateType<T extends LikeAggregateArgs> = {
        [P in keyof T & keyof AggregateLike]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLike[P]>
      : GetScalarType<T[P], AggregateLike[P]>
  }




  export type LikeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikeWhereInput
    orderBy?: LikeOrderByWithAggregationInput | LikeOrderByWithAggregationInput[]
    by: LikeScalarFieldEnum[] | LikeScalarFieldEnum
    having?: LikeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LikeCountAggregateInputType | true
    _avg?: LikeAvgAggregateInputType
    _sum?: LikeSumAggregateInputType
    _min?: LikeMinAggregateInputType
    _max?: LikeMaxAggregateInputType
  }

  export type LikeGroupByOutputType = {
    id_like: number
    newsId: number
    userId: number
    like: boolean
    timestamp: Date
    _count: LikeCountAggregateOutputType | null
    _avg: LikeAvgAggregateOutputType | null
    _sum: LikeSumAggregateOutputType | null
    _min: LikeMinAggregateOutputType | null
    _max: LikeMaxAggregateOutputType | null
  }

  type GetLikeGroupByPayload<T extends LikeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LikeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LikeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LikeGroupByOutputType[P]>
            : GetScalarType<T[P], LikeGroupByOutputType[P]>
        }
      >
    >


  export type LikeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_like?: boolean
    newsId?: boolean
    userId?: boolean
    like?: boolean
    timestamp?: boolean
    news?: boolean | NewsDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["like"]>

  export type LikeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_like?: boolean
    newsId?: boolean
    userId?: boolean
    like?: boolean
    timestamp?: boolean
    news?: boolean | NewsDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["like"]>

  export type LikeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_like?: boolean
    newsId?: boolean
    userId?: boolean
    like?: boolean
    timestamp?: boolean
    news?: boolean | NewsDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["like"]>

  export type LikeSelectScalar = {
    id_like?: boolean
    newsId?: boolean
    userId?: boolean
    like?: boolean
    timestamp?: boolean
  }

  export type LikeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_like" | "newsId" | "userId" | "like" | "timestamp", ExtArgs["result"]["like"]>
  export type LikeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    news?: boolean | NewsDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LikeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    news?: boolean | NewsDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type LikeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    news?: boolean | NewsDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $LikePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Like"
    objects: {
      news: Prisma.$NewsPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_like: number
      newsId: number
      userId: number
      like: boolean
      timestamp: Date
    }, ExtArgs["result"]["like"]>
    composites: {}
  }

  type LikeGetPayload<S extends boolean | null | undefined | LikeDefaultArgs> = $Result.GetResult<Prisma.$LikePayload, S>

  type LikeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LikeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LikeCountAggregateInputType | true
    }

  export interface LikeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Like'], meta: { name: 'Like' } }
    /**
     * Find zero or one Like that matches the filter.
     * @param {LikeFindUniqueArgs} args - Arguments to find a Like
     * @example
     * // Get one Like
     * const like = await prisma.like.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LikeFindUniqueArgs>(args: SelectSubset<T, LikeFindUniqueArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Like that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LikeFindUniqueOrThrowArgs} args - Arguments to find a Like
     * @example
     * // Get one Like
     * const like = await prisma.like.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LikeFindUniqueOrThrowArgs>(args: SelectSubset<T, LikeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Like that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeFindFirstArgs} args - Arguments to find a Like
     * @example
     * // Get one Like
     * const like = await prisma.like.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LikeFindFirstArgs>(args?: SelectSubset<T, LikeFindFirstArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Like that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeFindFirstOrThrowArgs} args - Arguments to find a Like
     * @example
     * // Get one Like
     * const like = await prisma.like.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LikeFindFirstOrThrowArgs>(args?: SelectSubset<T, LikeFindFirstOrThrowArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Likes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Likes
     * const likes = await prisma.like.findMany()
     * 
     * // Get first 10 Likes
     * const likes = await prisma.like.findMany({ take: 10 })
     * 
     * // Only select the `id_like`
     * const likeWithId_likeOnly = await prisma.like.findMany({ select: { id_like: true } })
     * 
     */
    findMany<T extends LikeFindManyArgs>(args?: SelectSubset<T, LikeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Like.
     * @param {LikeCreateArgs} args - Arguments to create a Like.
     * @example
     * // Create one Like
     * const Like = await prisma.like.create({
     *   data: {
     *     // ... data to create a Like
     *   }
     * })
     * 
     */
    create<T extends LikeCreateArgs>(args: SelectSubset<T, LikeCreateArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Likes.
     * @param {LikeCreateManyArgs} args - Arguments to create many Likes.
     * @example
     * // Create many Likes
     * const like = await prisma.like.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LikeCreateManyArgs>(args?: SelectSubset<T, LikeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Likes and returns the data saved in the database.
     * @param {LikeCreateManyAndReturnArgs} args - Arguments to create many Likes.
     * @example
     * // Create many Likes
     * const like = await prisma.like.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Likes and only return the `id_like`
     * const likeWithId_likeOnly = await prisma.like.createManyAndReturn({
     *   select: { id_like: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LikeCreateManyAndReturnArgs>(args?: SelectSubset<T, LikeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Like.
     * @param {LikeDeleteArgs} args - Arguments to delete one Like.
     * @example
     * // Delete one Like
     * const Like = await prisma.like.delete({
     *   where: {
     *     // ... filter to delete one Like
     *   }
     * })
     * 
     */
    delete<T extends LikeDeleteArgs>(args: SelectSubset<T, LikeDeleteArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Like.
     * @param {LikeUpdateArgs} args - Arguments to update one Like.
     * @example
     * // Update one Like
     * const like = await prisma.like.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LikeUpdateArgs>(args: SelectSubset<T, LikeUpdateArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Likes.
     * @param {LikeDeleteManyArgs} args - Arguments to filter Likes to delete.
     * @example
     * // Delete a few Likes
     * const { count } = await prisma.like.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LikeDeleteManyArgs>(args?: SelectSubset<T, LikeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Likes
     * const like = await prisma.like.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LikeUpdateManyArgs>(args: SelectSubset<T, LikeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Likes and returns the data updated in the database.
     * @param {LikeUpdateManyAndReturnArgs} args - Arguments to update many Likes.
     * @example
     * // Update many Likes
     * const like = await prisma.like.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Likes and only return the `id_like`
     * const likeWithId_likeOnly = await prisma.like.updateManyAndReturn({
     *   select: { id_like: true },
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
    updateManyAndReturn<T extends LikeUpdateManyAndReturnArgs>(args: SelectSubset<T, LikeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Like.
     * @param {LikeUpsertArgs} args - Arguments to update or create a Like.
     * @example
     * // Update or create a Like
     * const like = await prisma.like.upsert({
     *   create: {
     *     // ... data to create a Like
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Like we want to update
     *   }
     * })
     */
    upsert<T extends LikeUpsertArgs>(args: SelectSubset<T, LikeUpsertArgs<ExtArgs>>): Prisma__LikeClient<$Result.GetResult<Prisma.$LikePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeCountArgs} args - Arguments to filter Likes to count.
     * @example
     * // Count the number of Likes
     * const count = await prisma.like.count({
     *   where: {
     *     // ... the filter for the Likes we want to count
     *   }
     * })
    **/
    count<T extends LikeCountArgs>(
      args?: Subset<T, LikeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LikeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Like.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LikeAggregateArgs>(args: Subset<T, LikeAggregateArgs>): Prisma.PrismaPromise<GetLikeAggregateType<T>>

    /**
     * Group by Like.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeGroupByArgs} args - Group by arguments.
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
      T extends LikeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LikeGroupByArgs['orderBy'] }
        : { orderBy?: LikeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LikeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLikeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Like model
   */
  readonly fields: LikeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Like.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LikeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    news<T extends NewsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NewsDefaultArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Like model
   */
  interface LikeFieldRefs {
    readonly id_like: FieldRef<"Like", 'Int'>
    readonly newsId: FieldRef<"Like", 'Int'>
    readonly userId: FieldRef<"Like", 'Int'>
    readonly like: FieldRef<"Like", 'Boolean'>
    readonly timestamp: FieldRef<"Like", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Like findUnique
   */
  export type LikeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * Filter, which Like to fetch.
     */
    where: LikeWhereUniqueInput
  }

  /**
   * Like findUniqueOrThrow
   */
  export type LikeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * Filter, which Like to fetch.
     */
    where: LikeWhereUniqueInput
  }

  /**
   * Like findFirst
   */
  export type LikeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * Filter, which Like to fetch.
     */
    where?: LikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     */
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Likes.
     */
    cursor?: LikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Likes.
     */
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[]
  }

  /**
   * Like findFirstOrThrow
   */
  export type LikeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * Filter, which Like to fetch.
     */
    where?: LikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     */
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Likes.
     */
    cursor?: LikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Likes.
     */
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[]
  }

  /**
   * Like findMany
   */
  export type LikeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * Filter, which Likes to fetch.
     */
    where?: LikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     */
    orderBy?: LikeOrderByWithRelationInput | LikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Likes.
     */
    cursor?: LikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Likes.
     */
    distinct?: LikeScalarFieldEnum | LikeScalarFieldEnum[]
  }

  /**
   * Like create
   */
  export type LikeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * The data needed to create a Like.
     */
    data: XOR<LikeCreateInput, LikeUncheckedCreateInput>
  }

  /**
   * Like createMany
   */
  export type LikeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Likes.
     */
    data: LikeCreateManyInput | LikeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Like createManyAndReturn
   */
  export type LikeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * The data used to create many Likes.
     */
    data: LikeCreateManyInput | LikeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Like update
   */
  export type LikeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * The data needed to update a Like.
     */
    data: XOR<LikeUpdateInput, LikeUncheckedUpdateInput>
    /**
     * Choose, which Like to update.
     */
    where: LikeWhereUniqueInput
  }

  /**
   * Like updateMany
   */
  export type LikeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Likes.
     */
    data: XOR<LikeUpdateManyMutationInput, LikeUncheckedUpdateManyInput>
    /**
     * Filter which Likes to update
     */
    where?: LikeWhereInput
    /**
     * Limit how many Likes to update.
     */
    limit?: number
  }

  /**
   * Like updateManyAndReturn
   */
  export type LikeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * The data used to update Likes.
     */
    data: XOR<LikeUpdateManyMutationInput, LikeUncheckedUpdateManyInput>
    /**
     * Filter which Likes to update
     */
    where?: LikeWhereInput
    /**
     * Limit how many Likes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Like upsert
   */
  export type LikeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * The filter to search for the Like to update in case it exists.
     */
    where: LikeWhereUniqueInput
    /**
     * In case the Like found by the `where` argument doesn't exist, create a new Like with this data.
     */
    create: XOR<LikeCreateInput, LikeUncheckedCreateInput>
    /**
     * In case the Like was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LikeUpdateInput, LikeUncheckedUpdateInput>
  }

  /**
   * Like delete
   */
  export type LikeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
    /**
     * Filter which Like to delete.
     */
    where: LikeWhereUniqueInput
  }

  /**
   * Like deleteMany
   */
  export type LikeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Likes to delete
     */
    where?: LikeWhereInput
    /**
     * Limit how many Likes to delete.
     */
    limit?: number
  }

  /**
   * Like without action
   */
  export type LikeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Like
     */
    select?: LikeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Like
     */
    omit?: LikeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeInclude<ExtArgs> | null
  }


  /**
   * Model Save
   */

  export type AggregateSave = {
    _count: SaveCountAggregateOutputType | null
    _avg: SaveAvgAggregateOutputType | null
    _sum: SaveSumAggregateOutputType | null
    _min: SaveMinAggregateOutputType | null
    _max: SaveMaxAggregateOutputType | null
  }

  export type SaveAvgAggregateOutputType = {
    id_save: number | null
    newsId: number | null
    userId: number | null
  }

  export type SaveSumAggregateOutputType = {
    id_save: number | null
    newsId: number | null
    userId: number | null
  }

  export type SaveMinAggregateOutputType = {
    id_save: number | null
    newsId: number | null
    userId: number | null
    saved_news: boolean | null
    timestamp: Date | null
  }

  export type SaveMaxAggregateOutputType = {
    id_save: number | null
    newsId: number | null
    userId: number | null
    saved_news: boolean | null
    timestamp: Date | null
  }

  export type SaveCountAggregateOutputType = {
    id_save: number
    newsId: number
    userId: number
    saved_news: number
    timestamp: number
    _all: number
  }


  export type SaveAvgAggregateInputType = {
    id_save?: true
    newsId?: true
    userId?: true
  }

  export type SaveSumAggregateInputType = {
    id_save?: true
    newsId?: true
    userId?: true
  }

  export type SaveMinAggregateInputType = {
    id_save?: true
    newsId?: true
    userId?: true
    saved_news?: true
    timestamp?: true
  }

  export type SaveMaxAggregateInputType = {
    id_save?: true
    newsId?: true
    userId?: true
    saved_news?: true
    timestamp?: true
  }

  export type SaveCountAggregateInputType = {
    id_save?: true
    newsId?: true
    userId?: true
    saved_news?: true
    timestamp?: true
    _all?: true
  }

  export type SaveAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Save to aggregate.
     */
    where?: SaveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Saves to fetch.
     */
    orderBy?: SaveOrderByWithRelationInput | SaveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SaveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Saves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Saves.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Saves
    **/
    _count?: true | SaveCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SaveAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SaveSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SaveMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SaveMaxAggregateInputType
  }

  export type GetSaveAggregateType<T extends SaveAggregateArgs> = {
        [P in keyof T & keyof AggregateSave]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSave[P]>
      : GetScalarType<T[P], AggregateSave[P]>
  }




  export type SaveGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SaveWhereInput
    orderBy?: SaveOrderByWithAggregationInput | SaveOrderByWithAggregationInput[]
    by: SaveScalarFieldEnum[] | SaveScalarFieldEnum
    having?: SaveScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SaveCountAggregateInputType | true
    _avg?: SaveAvgAggregateInputType
    _sum?: SaveSumAggregateInputType
    _min?: SaveMinAggregateInputType
    _max?: SaveMaxAggregateInputType
  }

  export type SaveGroupByOutputType = {
    id_save: number
    newsId: number
    userId: number
    saved_news: boolean
    timestamp: Date
    _count: SaveCountAggregateOutputType | null
    _avg: SaveAvgAggregateOutputType | null
    _sum: SaveSumAggregateOutputType | null
    _min: SaveMinAggregateOutputType | null
    _max: SaveMaxAggregateOutputType | null
  }

  type GetSaveGroupByPayload<T extends SaveGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SaveGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SaveGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SaveGroupByOutputType[P]>
            : GetScalarType<T[P], SaveGroupByOutputType[P]>
        }
      >
    >


  export type SaveSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_save?: boolean
    newsId?: boolean
    userId?: boolean
    saved_news?: boolean
    timestamp?: boolean
    news?: boolean | NewsDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["save"]>

  export type SaveSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_save?: boolean
    newsId?: boolean
    userId?: boolean
    saved_news?: boolean
    timestamp?: boolean
    news?: boolean | NewsDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["save"]>

  export type SaveSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_save?: boolean
    newsId?: boolean
    userId?: boolean
    saved_news?: boolean
    timestamp?: boolean
    news?: boolean | NewsDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["save"]>

  export type SaveSelectScalar = {
    id_save?: boolean
    newsId?: boolean
    userId?: boolean
    saved_news?: boolean
    timestamp?: boolean
  }

  export type SaveOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_save" | "newsId" | "userId" | "saved_news" | "timestamp", ExtArgs["result"]["save"]>
  export type SaveInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    news?: boolean | NewsDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SaveIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    news?: boolean | NewsDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SaveIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    news?: boolean | NewsDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SavePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Save"
    objects: {
      news: Prisma.$NewsPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_save: number
      newsId: number
      userId: number
      saved_news: boolean
      timestamp: Date
    }, ExtArgs["result"]["save"]>
    composites: {}
  }

  type SaveGetPayload<S extends boolean | null | undefined | SaveDefaultArgs> = $Result.GetResult<Prisma.$SavePayload, S>

  type SaveCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SaveFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SaveCountAggregateInputType | true
    }

  export interface SaveDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Save'], meta: { name: 'Save' } }
    /**
     * Find zero or one Save that matches the filter.
     * @param {SaveFindUniqueArgs} args - Arguments to find a Save
     * @example
     * // Get one Save
     * const save = await prisma.save.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SaveFindUniqueArgs>(args: SelectSubset<T, SaveFindUniqueArgs<ExtArgs>>): Prisma__SaveClient<$Result.GetResult<Prisma.$SavePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Save that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SaveFindUniqueOrThrowArgs} args - Arguments to find a Save
     * @example
     * // Get one Save
     * const save = await prisma.save.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SaveFindUniqueOrThrowArgs>(args: SelectSubset<T, SaveFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SaveClient<$Result.GetResult<Prisma.$SavePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Save that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaveFindFirstArgs} args - Arguments to find a Save
     * @example
     * // Get one Save
     * const save = await prisma.save.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SaveFindFirstArgs>(args?: SelectSubset<T, SaveFindFirstArgs<ExtArgs>>): Prisma__SaveClient<$Result.GetResult<Prisma.$SavePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Save that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaveFindFirstOrThrowArgs} args - Arguments to find a Save
     * @example
     * // Get one Save
     * const save = await prisma.save.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SaveFindFirstOrThrowArgs>(args?: SelectSubset<T, SaveFindFirstOrThrowArgs<ExtArgs>>): Prisma__SaveClient<$Result.GetResult<Prisma.$SavePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Saves that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaveFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Saves
     * const saves = await prisma.save.findMany()
     * 
     * // Get first 10 Saves
     * const saves = await prisma.save.findMany({ take: 10 })
     * 
     * // Only select the `id_save`
     * const saveWithId_saveOnly = await prisma.save.findMany({ select: { id_save: true } })
     * 
     */
    findMany<T extends SaveFindManyArgs>(args?: SelectSubset<T, SaveFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Save.
     * @param {SaveCreateArgs} args - Arguments to create a Save.
     * @example
     * // Create one Save
     * const Save = await prisma.save.create({
     *   data: {
     *     // ... data to create a Save
     *   }
     * })
     * 
     */
    create<T extends SaveCreateArgs>(args: SelectSubset<T, SaveCreateArgs<ExtArgs>>): Prisma__SaveClient<$Result.GetResult<Prisma.$SavePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Saves.
     * @param {SaveCreateManyArgs} args - Arguments to create many Saves.
     * @example
     * // Create many Saves
     * const save = await prisma.save.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SaveCreateManyArgs>(args?: SelectSubset<T, SaveCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Saves and returns the data saved in the database.
     * @param {SaveCreateManyAndReturnArgs} args - Arguments to create many Saves.
     * @example
     * // Create many Saves
     * const save = await prisma.save.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Saves and only return the `id_save`
     * const saveWithId_saveOnly = await prisma.save.createManyAndReturn({
     *   select: { id_save: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SaveCreateManyAndReturnArgs>(args?: SelectSubset<T, SaveCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Save.
     * @param {SaveDeleteArgs} args - Arguments to delete one Save.
     * @example
     * // Delete one Save
     * const Save = await prisma.save.delete({
     *   where: {
     *     // ... filter to delete one Save
     *   }
     * })
     * 
     */
    delete<T extends SaveDeleteArgs>(args: SelectSubset<T, SaveDeleteArgs<ExtArgs>>): Prisma__SaveClient<$Result.GetResult<Prisma.$SavePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Save.
     * @param {SaveUpdateArgs} args - Arguments to update one Save.
     * @example
     * // Update one Save
     * const save = await prisma.save.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SaveUpdateArgs>(args: SelectSubset<T, SaveUpdateArgs<ExtArgs>>): Prisma__SaveClient<$Result.GetResult<Prisma.$SavePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Saves.
     * @param {SaveDeleteManyArgs} args - Arguments to filter Saves to delete.
     * @example
     * // Delete a few Saves
     * const { count } = await prisma.save.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SaveDeleteManyArgs>(args?: SelectSubset<T, SaveDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Saves.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaveUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Saves
     * const save = await prisma.save.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SaveUpdateManyArgs>(args: SelectSubset<T, SaveUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Saves and returns the data updated in the database.
     * @param {SaveUpdateManyAndReturnArgs} args - Arguments to update many Saves.
     * @example
     * // Update many Saves
     * const save = await prisma.save.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Saves and only return the `id_save`
     * const saveWithId_saveOnly = await prisma.save.updateManyAndReturn({
     *   select: { id_save: true },
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
    updateManyAndReturn<T extends SaveUpdateManyAndReturnArgs>(args: SelectSubset<T, SaveUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Save.
     * @param {SaveUpsertArgs} args - Arguments to update or create a Save.
     * @example
     * // Update or create a Save
     * const save = await prisma.save.upsert({
     *   create: {
     *     // ... data to create a Save
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Save we want to update
     *   }
     * })
     */
    upsert<T extends SaveUpsertArgs>(args: SelectSubset<T, SaveUpsertArgs<ExtArgs>>): Prisma__SaveClient<$Result.GetResult<Prisma.$SavePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Saves.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaveCountArgs} args - Arguments to filter Saves to count.
     * @example
     * // Count the number of Saves
     * const count = await prisma.save.count({
     *   where: {
     *     // ... the filter for the Saves we want to count
     *   }
     * })
    **/
    count<T extends SaveCountArgs>(
      args?: Subset<T, SaveCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SaveCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Save.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaveAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SaveAggregateArgs>(args: Subset<T, SaveAggregateArgs>): Prisma.PrismaPromise<GetSaveAggregateType<T>>

    /**
     * Group by Save.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaveGroupByArgs} args - Group by arguments.
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
      T extends SaveGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SaveGroupByArgs['orderBy'] }
        : { orderBy?: SaveGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SaveGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSaveGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Save model
   */
  readonly fields: SaveFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Save.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SaveClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    news<T extends NewsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NewsDefaultArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Save model
   */
  interface SaveFieldRefs {
    readonly id_save: FieldRef<"Save", 'Int'>
    readonly newsId: FieldRef<"Save", 'Int'>
    readonly userId: FieldRef<"Save", 'Int'>
    readonly saved_news: FieldRef<"Save", 'Boolean'>
    readonly timestamp: FieldRef<"Save", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Save findUnique
   */
  export type SaveFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Save
     */
    select?: SaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Save
     */
    omit?: SaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaveInclude<ExtArgs> | null
    /**
     * Filter, which Save to fetch.
     */
    where: SaveWhereUniqueInput
  }

  /**
   * Save findUniqueOrThrow
   */
  export type SaveFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Save
     */
    select?: SaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Save
     */
    omit?: SaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaveInclude<ExtArgs> | null
    /**
     * Filter, which Save to fetch.
     */
    where: SaveWhereUniqueInput
  }

  /**
   * Save findFirst
   */
  export type SaveFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Save
     */
    select?: SaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Save
     */
    omit?: SaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaveInclude<ExtArgs> | null
    /**
     * Filter, which Save to fetch.
     */
    where?: SaveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Saves to fetch.
     */
    orderBy?: SaveOrderByWithRelationInput | SaveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Saves.
     */
    cursor?: SaveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Saves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Saves.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Saves.
     */
    distinct?: SaveScalarFieldEnum | SaveScalarFieldEnum[]
  }

  /**
   * Save findFirstOrThrow
   */
  export type SaveFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Save
     */
    select?: SaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Save
     */
    omit?: SaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaveInclude<ExtArgs> | null
    /**
     * Filter, which Save to fetch.
     */
    where?: SaveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Saves to fetch.
     */
    orderBy?: SaveOrderByWithRelationInput | SaveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Saves.
     */
    cursor?: SaveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Saves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Saves.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Saves.
     */
    distinct?: SaveScalarFieldEnum | SaveScalarFieldEnum[]
  }

  /**
   * Save findMany
   */
  export type SaveFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Save
     */
    select?: SaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Save
     */
    omit?: SaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaveInclude<ExtArgs> | null
    /**
     * Filter, which Saves to fetch.
     */
    where?: SaveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Saves to fetch.
     */
    orderBy?: SaveOrderByWithRelationInput | SaveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Saves.
     */
    cursor?: SaveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Saves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Saves.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Saves.
     */
    distinct?: SaveScalarFieldEnum | SaveScalarFieldEnum[]
  }

  /**
   * Save create
   */
  export type SaveCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Save
     */
    select?: SaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Save
     */
    omit?: SaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaveInclude<ExtArgs> | null
    /**
     * The data needed to create a Save.
     */
    data: XOR<SaveCreateInput, SaveUncheckedCreateInput>
  }

  /**
   * Save createMany
   */
  export type SaveCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Saves.
     */
    data: SaveCreateManyInput | SaveCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Save createManyAndReturn
   */
  export type SaveCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Save
     */
    select?: SaveSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Save
     */
    omit?: SaveOmit<ExtArgs> | null
    /**
     * The data used to create many Saves.
     */
    data: SaveCreateManyInput | SaveCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaveIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Save update
   */
  export type SaveUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Save
     */
    select?: SaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Save
     */
    omit?: SaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaveInclude<ExtArgs> | null
    /**
     * The data needed to update a Save.
     */
    data: XOR<SaveUpdateInput, SaveUncheckedUpdateInput>
    /**
     * Choose, which Save to update.
     */
    where: SaveWhereUniqueInput
  }

  /**
   * Save updateMany
   */
  export type SaveUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Saves.
     */
    data: XOR<SaveUpdateManyMutationInput, SaveUncheckedUpdateManyInput>
    /**
     * Filter which Saves to update
     */
    where?: SaveWhereInput
    /**
     * Limit how many Saves to update.
     */
    limit?: number
  }

  /**
   * Save updateManyAndReturn
   */
  export type SaveUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Save
     */
    select?: SaveSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Save
     */
    omit?: SaveOmit<ExtArgs> | null
    /**
     * The data used to update Saves.
     */
    data: XOR<SaveUpdateManyMutationInput, SaveUncheckedUpdateManyInput>
    /**
     * Filter which Saves to update
     */
    where?: SaveWhereInput
    /**
     * Limit how many Saves to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaveIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Save upsert
   */
  export type SaveUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Save
     */
    select?: SaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Save
     */
    omit?: SaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaveInclude<ExtArgs> | null
    /**
     * The filter to search for the Save to update in case it exists.
     */
    where: SaveWhereUniqueInput
    /**
     * In case the Save found by the `where` argument doesn't exist, create a new Save with this data.
     */
    create: XOR<SaveCreateInput, SaveUncheckedCreateInput>
    /**
     * In case the Save was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SaveUpdateInput, SaveUncheckedUpdateInput>
  }

  /**
   * Save delete
   */
  export type SaveDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Save
     */
    select?: SaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Save
     */
    omit?: SaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaveInclude<ExtArgs> | null
    /**
     * Filter which Save to delete.
     */
    where: SaveWhereUniqueInput
  }

  /**
   * Save deleteMany
   */
  export type SaveDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Saves to delete
     */
    where?: SaveWhereInput
    /**
     * Limit how many Saves to delete.
     */
    limit?: number
  }

  /**
   * Save without action
   */
  export type SaveDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Save
     */
    select?: SaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Save
     */
    omit?: SaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaveInclude<ExtArgs> | null
  }


  /**
   * Model Comment
   */

  export type AggregateComment = {
    _count: CommentCountAggregateOutputType | null
    _avg: CommentAvgAggregateOutputType | null
    _sum: CommentSumAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  export type CommentAvgAggregateOutputType = {
    id_comment: number | null
    newsId: number | null
    userId: number | null
  }

  export type CommentSumAggregateOutputType = {
    id_comment: number | null
    newsId: number | null
    userId: number | null
  }

  export type CommentMinAggregateOutputType = {
    id_comment: number | null
    newsId: number | null
    userId: number | null
    comment: string | null
    timestamp: Date | null
  }

  export type CommentMaxAggregateOutputType = {
    id_comment: number | null
    newsId: number | null
    userId: number | null
    comment: string | null
    timestamp: Date | null
  }

  export type CommentCountAggregateOutputType = {
    id_comment: number
    newsId: number
    userId: number
    comment: number
    timestamp: number
    _all: number
  }


  export type CommentAvgAggregateInputType = {
    id_comment?: true
    newsId?: true
    userId?: true
  }

  export type CommentSumAggregateInputType = {
    id_comment?: true
    newsId?: true
    userId?: true
  }

  export type CommentMinAggregateInputType = {
    id_comment?: true
    newsId?: true
    userId?: true
    comment?: true
    timestamp?: true
  }

  export type CommentMaxAggregateInputType = {
    id_comment?: true
    newsId?: true
    userId?: true
    comment?: true
    timestamp?: true
  }

  export type CommentCountAggregateInputType = {
    id_comment?: true
    newsId?: true
    userId?: true
    comment?: true
    timestamp?: true
    _all?: true
  }

  export type CommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comment to aggregate.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comments
    **/
    _count?: true | CommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentMaxAggregateInputType
  }

  export type GetCommentAggregateType<T extends CommentAggregateArgs> = {
        [P in keyof T & keyof AggregateComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComment[P]>
      : GetScalarType<T[P], AggregateComment[P]>
  }




  export type CommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithAggregationInput | CommentOrderByWithAggregationInput[]
    by: CommentScalarFieldEnum[] | CommentScalarFieldEnum
    having?: CommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentCountAggregateInputType | true
    _avg?: CommentAvgAggregateInputType
    _sum?: CommentSumAggregateInputType
    _min?: CommentMinAggregateInputType
    _max?: CommentMaxAggregateInputType
  }

  export type CommentGroupByOutputType = {
    id_comment: number
    newsId: number
    userId: number
    comment: string
    timestamp: Date
    _count: CommentCountAggregateOutputType | null
    _avg: CommentAvgAggregateOutputType | null
    _sum: CommentSumAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  type GetCommentGroupByPayload<T extends CommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentGroupByOutputType[P]>
            : GetScalarType<T[P], CommentGroupByOutputType[P]>
        }
      >
    >


  export type CommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_comment?: boolean
    newsId?: boolean
    userId?: boolean
    comment?: boolean
    timestamp?: boolean
    news?: boolean | NewsDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_comment?: boolean
    newsId?: boolean
    userId?: boolean
    comment?: boolean
    timestamp?: boolean
    news?: boolean | NewsDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_comment?: boolean
    newsId?: boolean
    userId?: boolean
    comment?: boolean
    timestamp?: boolean
    news?: boolean | NewsDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectScalar = {
    id_comment?: boolean
    newsId?: boolean
    userId?: boolean
    comment?: boolean
    timestamp?: boolean
  }

  export type CommentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_comment" | "newsId" | "userId" | "comment" | "timestamp", ExtArgs["result"]["comment"]>
  export type CommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    news?: boolean | NewsDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CommentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    news?: boolean | NewsDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CommentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    news?: boolean | NewsDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comment"
    objects: {
      news: Prisma.$NewsPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_comment: number
      newsId: number
      userId: number
      comment: string
      timestamp: Date
    }, ExtArgs["result"]["comment"]>
    composites: {}
  }

  type CommentGetPayload<S extends boolean | null | undefined | CommentDefaultArgs> = $Result.GetResult<Prisma.$CommentPayload, S>

  type CommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentCountAggregateInputType | true
    }

  export interface CommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comment'], meta: { name: 'Comment' } }
    /**
     * Find zero or one Comment that matches the filter.
     * @param {CommentFindUniqueArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentFindUniqueArgs>(args: SelectSubset<T, CommentFindUniqueArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommentFindUniqueOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentFindUniqueOrThrowArgs>(args: SelectSubset<T, CommentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentFindFirstArgs>(args?: SelectSubset<T, CommentFindFirstArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentFindFirstOrThrowArgs>(args?: SelectSubset<T, CommentFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comment.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comment.findMany({ take: 10 })
     * 
     * // Only select the `id_comment`
     * const commentWithId_commentOnly = await prisma.comment.findMany({ select: { id_comment: true } })
     * 
     */
    findMany<T extends CommentFindManyArgs>(args?: SelectSubset<T, CommentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comment.
     * @param {CommentCreateArgs} args - Arguments to create a Comment.
     * @example
     * // Create one Comment
     * const Comment = await prisma.comment.create({
     *   data: {
     *     // ... data to create a Comment
     *   }
     * })
     * 
     */
    create<T extends CommentCreateArgs>(args: SelectSubset<T, CommentCreateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comments.
     * @param {CommentCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommentCreateManyArgs>(args?: SelectSubset<T, CommentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Comments and returns the data saved in the database.
     * @param {CommentCreateManyAndReturnArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Comments and only return the `id_comment`
     * const commentWithId_commentOnly = await prisma.comment.createManyAndReturn({
     *   select: { id_comment: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommentCreateManyAndReturnArgs>(args?: SelectSubset<T, CommentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Comment.
     * @param {CommentDeleteArgs} args - Arguments to delete one Comment.
     * @example
     * // Delete one Comment
     * const Comment = await prisma.comment.delete({
     *   where: {
     *     // ... filter to delete one Comment
     *   }
     * })
     * 
     */
    delete<T extends CommentDeleteArgs>(args: SelectSubset<T, CommentDeleteArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comment.
     * @param {CommentUpdateArgs} args - Arguments to update one Comment.
     * @example
     * // Update one Comment
     * const comment = await prisma.comment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommentUpdateArgs>(args: SelectSubset<T, CommentUpdateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comments.
     * @param {CommentDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommentDeleteManyArgs>(args?: SelectSubset<T, CommentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommentUpdateManyArgs>(args: SelectSubset<T, CommentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments and returns the data updated in the database.
     * @param {CommentUpdateManyAndReturnArgs} args - Arguments to update many Comments.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Comments and only return the `id_comment`
     * const commentWithId_commentOnly = await prisma.comment.updateManyAndReturn({
     *   select: { id_comment: true },
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
    updateManyAndReturn<T extends CommentUpdateManyAndReturnArgs>(args: SelectSubset<T, CommentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Comment.
     * @param {CommentUpsertArgs} args - Arguments to update or create a Comment.
     * @example
     * // Update or create a Comment
     * const comment = await prisma.comment.upsert({
     *   create: {
     *     // ... data to create a Comment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comment we want to update
     *   }
     * })
     */
    upsert<T extends CommentUpsertArgs>(args: SelectSubset<T, CommentUpsertArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comment.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends CommentCountArgs>(
      args?: Subset<T, CommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommentAggregateArgs>(args: Subset<T, CommentAggregateArgs>): Prisma.PrismaPromise<GetCommentAggregateType<T>>

    /**
     * Group by Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentGroupByArgs} args - Group by arguments.
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
      T extends CommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentGroupByArgs['orderBy'] }
        : { orderBy?: CommentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comment model
   */
  readonly fields: CommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    news<T extends NewsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NewsDefaultArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Comment model
   */
  interface CommentFieldRefs {
    readonly id_comment: FieldRef<"Comment", 'Int'>
    readonly newsId: FieldRef<"Comment", 'Int'>
    readonly userId: FieldRef<"Comment", 'Int'>
    readonly comment: FieldRef<"Comment", 'String'>
    readonly timestamp: FieldRef<"Comment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Comment findUnique
   */
  export type CommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findUniqueOrThrow
   */
  export type CommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findFirst
   */
  export type CommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findFirstOrThrow
   */
  export type CommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findMany
   */
  export type CommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment create
   */
  export type CommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to create a Comment.
     */
    data: XOR<CommentCreateInput, CommentUncheckedCreateInput>
  }

  /**
   * Comment createMany
   */
  export type CommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comment createManyAndReturn
   */
  export type CommentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comment update
   */
  export type CommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to update a Comment.
     */
    data: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
    /**
     * Choose, which Comment to update.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment updateMany
   */
  export type CommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
  }

  /**
   * Comment updateManyAndReturn
   */
  export type CommentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comment upsert
   */
  export type CommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The filter to search for the Comment to update in case it exists.
     */
    where: CommentWhereUniqueInput
    /**
     * In case the Comment found by the `where` argument doesn't exist, create a new Comment with this data.
     */
    create: XOR<CommentCreateInput, CommentUncheckedCreateInput>
    /**
     * In case the Comment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
  }

  /**
   * Comment delete
   */
  export type CommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter which Comment to delete.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment deleteMany
   */
  export type CommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to delete
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to delete.
     */
    limit?: number
  }

  /**
   * Comment without action
   */
  export type CommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
  }


  /**
   * Model Pending
   */

  export type AggregatePending = {
    _count: PendingCountAggregateOutputType | null
    _avg: PendingAvgAggregateOutputType | null
    _sum: PendingSumAggregateOutputType | null
    _min: PendingMinAggregateOutputType | null
    _max: PendingMaxAggregateOutputType | null
  }

  export type PendingAvgAggregateOutputType = {
    id_pending: number | null
    newsId: number | null
  }

  export type PendingSumAggregateOutputType = {
    id_pending: number | null
    newsId: number | null
  }

  export type PendingMinAggregateOutputType = {
    id_pending: number | null
    newsId: number | null
    status: $Enums.Status_News | null
    note: string | null
    created_at: Date | null
    resolved_at: Date | null
  }

  export type PendingMaxAggregateOutputType = {
    id_pending: number | null
    newsId: number | null
    status: $Enums.Status_News | null
    note: string | null
    created_at: Date | null
    resolved_at: Date | null
  }

  export type PendingCountAggregateOutputType = {
    id_pending: number
    newsId: number
    status: number
    note: number
    created_at: number
    resolved_at: number
    _all: number
  }


  export type PendingAvgAggregateInputType = {
    id_pending?: true
    newsId?: true
  }

  export type PendingSumAggregateInputType = {
    id_pending?: true
    newsId?: true
  }

  export type PendingMinAggregateInputType = {
    id_pending?: true
    newsId?: true
    status?: true
    note?: true
    created_at?: true
    resolved_at?: true
  }

  export type PendingMaxAggregateInputType = {
    id_pending?: true
    newsId?: true
    status?: true
    note?: true
    created_at?: true
    resolved_at?: true
  }

  export type PendingCountAggregateInputType = {
    id_pending?: true
    newsId?: true
    status?: true
    note?: true
    created_at?: true
    resolved_at?: true
    _all?: true
  }

  export type PendingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pending to aggregate.
     */
    where?: PendingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pendings to fetch.
     */
    orderBy?: PendingOrderByWithRelationInput | PendingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PendingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pendings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pendings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pendings
    **/
    _count?: true | PendingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PendingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PendingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PendingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PendingMaxAggregateInputType
  }

  export type GetPendingAggregateType<T extends PendingAggregateArgs> = {
        [P in keyof T & keyof AggregatePending]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePending[P]>
      : GetScalarType<T[P], AggregatePending[P]>
  }




  export type PendingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PendingWhereInput
    orderBy?: PendingOrderByWithAggregationInput | PendingOrderByWithAggregationInput[]
    by: PendingScalarFieldEnum[] | PendingScalarFieldEnum
    having?: PendingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PendingCountAggregateInputType | true
    _avg?: PendingAvgAggregateInputType
    _sum?: PendingSumAggregateInputType
    _min?: PendingMinAggregateInputType
    _max?: PendingMaxAggregateInputType
  }

  export type PendingGroupByOutputType = {
    id_pending: number
    newsId: number
    status: $Enums.Status_News
    note: string | null
    created_at: Date
    resolved_at: Date | null
    _count: PendingCountAggregateOutputType | null
    _avg: PendingAvgAggregateOutputType | null
    _sum: PendingSumAggregateOutputType | null
    _min: PendingMinAggregateOutputType | null
    _max: PendingMaxAggregateOutputType | null
  }

  type GetPendingGroupByPayload<T extends PendingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PendingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PendingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PendingGroupByOutputType[P]>
            : GetScalarType<T[P], PendingGroupByOutputType[P]>
        }
      >
    >


  export type PendingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_pending?: boolean
    newsId?: boolean
    status?: boolean
    note?: boolean
    created_at?: boolean
    resolved_at?: boolean
    news?: boolean | NewsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pending"]>

  export type PendingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_pending?: boolean
    newsId?: boolean
    status?: boolean
    note?: boolean
    created_at?: boolean
    resolved_at?: boolean
    news?: boolean | NewsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pending"]>

  export type PendingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_pending?: boolean
    newsId?: boolean
    status?: boolean
    note?: boolean
    created_at?: boolean
    resolved_at?: boolean
    news?: boolean | NewsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pending"]>

  export type PendingSelectScalar = {
    id_pending?: boolean
    newsId?: boolean
    status?: boolean
    note?: boolean
    created_at?: boolean
    resolved_at?: boolean
  }

  export type PendingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_pending" | "newsId" | "status" | "note" | "created_at" | "resolved_at", ExtArgs["result"]["pending"]>
  export type PendingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    news?: boolean | NewsDefaultArgs<ExtArgs>
  }
  export type PendingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    news?: boolean | NewsDefaultArgs<ExtArgs>
  }
  export type PendingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    news?: boolean | NewsDefaultArgs<ExtArgs>
  }

  export type $PendingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pending"
    objects: {
      news: Prisma.$NewsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_pending: number
      newsId: number
      status: $Enums.Status_News
      note: string | null
      created_at: Date
      resolved_at: Date | null
    }, ExtArgs["result"]["pending"]>
    composites: {}
  }

  type PendingGetPayload<S extends boolean | null | undefined | PendingDefaultArgs> = $Result.GetResult<Prisma.$PendingPayload, S>

  type PendingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PendingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PendingCountAggregateInputType | true
    }

  export interface PendingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pending'], meta: { name: 'Pending' } }
    /**
     * Find zero or one Pending that matches the filter.
     * @param {PendingFindUniqueArgs} args - Arguments to find a Pending
     * @example
     * // Get one Pending
     * const pending = await prisma.pending.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PendingFindUniqueArgs>(args: SelectSubset<T, PendingFindUniqueArgs<ExtArgs>>): Prisma__PendingClient<$Result.GetResult<Prisma.$PendingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pending that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PendingFindUniqueOrThrowArgs} args - Arguments to find a Pending
     * @example
     * // Get one Pending
     * const pending = await prisma.pending.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PendingFindUniqueOrThrowArgs>(args: SelectSubset<T, PendingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PendingClient<$Result.GetResult<Prisma.$PendingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pending that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendingFindFirstArgs} args - Arguments to find a Pending
     * @example
     * // Get one Pending
     * const pending = await prisma.pending.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PendingFindFirstArgs>(args?: SelectSubset<T, PendingFindFirstArgs<ExtArgs>>): Prisma__PendingClient<$Result.GetResult<Prisma.$PendingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pending that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendingFindFirstOrThrowArgs} args - Arguments to find a Pending
     * @example
     * // Get one Pending
     * const pending = await prisma.pending.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PendingFindFirstOrThrowArgs>(args?: SelectSubset<T, PendingFindFirstOrThrowArgs<ExtArgs>>): Prisma__PendingClient<$Result.GetResult<Prisma.$PendingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pendings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pendings
     * const pendings = await prisma.pending.findMany()
     * 
     * // Get first 10 Pendings
     * const pendings = await prisma.pending.findMany({ take: 10 })
     * 
     * // Only select the `id_pending`
     * const pendingWithId_pendingOnly = await prisma.pending.findMany({ select: { id_pending: true } })
     * 
     */
    findMany<T extends PendingFindManyArgs>(args?: SelectSubset<T, PendingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PendingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pending.
     * @param {PendingCreateArgs} args - Arguments to create a Pending.
     * @example
     * // Create one Pending
     * const Pending = await prisma.pending.create({
     *   data: {
     *     // ... data to create a Pending
     *   }
     * })
     * 
     */
    create<T extends PendingCreateArgs>(args: SelectSubset<T, PendingCreateArgs<ExtArgs>>): Prisma__PendingClient<$Result.GetResult<Prisma.$PendingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pendings.
     * @param {PendingCreateManyArgs} args - Arguments to create many Pendings.
     * @example
     * // Create many Pendings
     * const pending = await prisma.pending.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PendingCreateManyArgs>(args?: SelectSubset<T, PendingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pendings and returns the data saved in the database.
     * @param {PendingCreateManyAndReturnArgs} args - Arguments to create many Pendings.
     * @example
     * // Create many Pendings
     * const pending = await prisma.pending.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pendings and only return the `id_pending`
     * const pendingWithId_pendingOnly = await prisma.pending.createManyAndReturn({
     *   select: { id_pending: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PendingCreateManyAndReturnArgs>(args?: SelectSubset<T, PendingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PendingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pending.
     * @param {PendingDeleteArgs} args - Arguments to delete one Pending.
     * @example
     * // Delete one Pending
     * const Pending = await prisma.pending.delete({
     *   where: {
     *     // ... filter to delete one Pending
     *   }
     * })
     * 
     */
    delete<T extends PendingDeleteArgs>(args: SelectSubset<T, PendingDeleteArgs<ExtArgs>>): Prisma__PendingClient<$Result.GetResult<Prisma.$PendingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pending.
     * @param {PendingUpdateArgs} args - Arguments to update one Pending.
     * @example
     * // Update one Pending
     * const pending = await prisma.pending.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PendingUpdateArgs>(args: SelectSubset<T, PendingUpdateArgs<ExtArgs>>): Prisma__PendingClient<$Result.GetResult<Prisma.$PendingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pendings.
     * @param {PendingDeleteManyArgs} args - Arguments to filter Pendings to delete.
     * @example
     * // Delete a few Pendings
     * const { count } = await prisma.pending.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PendingDeleteManyArgs>(args?: SelectSubset<T, PendingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pendings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pendings
     * const pending = await prisma.pending.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PendingUpdateManyArgs>(args: SelectSubset<T, PendingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pendings and returns the data updated in the database.
     * @param {PendingUpdateManyAndReturnArgs} args - Arguments to update many Pendings.
     * @example
     * // Update many Pendings
     * const pending = await prisma.pending.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pendings and only return the `id_pending`
     * const pendingWithId_pendingOnly = await prisma.pending.updateManyAndReturn({
     *   select: { id_pending: true },
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
    updateManyAndReturn<T extends PendingUpdateManyAndReturnArgs>(args: SelectSubset<T, PendingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PendingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pending.
     * @param {PendingUpsertArgs} args - Arguments to update or create a Pending.
     * @example
     * // Update or create a Pending
     * const pending = await prisma.pending.upsert({
     *   create: {
     *     // ... data to create a Pending
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pending we want to update
     *   }
     * })
     */
    upsert<T extends PendingUpsertArgs>(args: SelectSubset<T, PendingUpsertArgs<ExtArgs>>): Prisma__PendingClient<$Result.GetResult<Prisma.$PendingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pendings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendingCountArgs} args - Arguments to filter Pendings to count.
     * @example
     * // Count the number of Pendings
     * const count = await prisma.pending.count({
     *   where: {
     *     // ... the filter for the Pendings we want to count
     *   }
     * })
    **/
    count<T extends PendingCountArgs>(
      args?: Subset<T, PendingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PendingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pending.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PendingAggregateArgs>(args: Subset<T, PendingAggregateArgs>): Prisma.PrismaPromise<GetPendingAggregateType<T>>

    /**
     * Group by Pending.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PendingGroupByArgs} args - Group by arguments.
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
      T extends PendingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PendingGroupByArgs['orderBy'] }
        : { orderBy?: PendingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PendingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPendingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pending model
   */
  readonly fields: PendingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pending.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PendingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    news<T extends NewsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NewsDefaultArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Pending model
   */
  interface PendingFieldRefs {
    readonly id_pending: FieldRef<"Pending", 'Int'>
    readonly newsId: FieldRef<"Pending", 'Int'>
    readonly status: FieldRef<"Pending", 'Status_News'>
    readonly note: FieldRef<"Pending", 'String'>
    readonly created_at: FieldRef<"Pending", 'DateTime'>
    readonly resolved_at: FieldRef<"Pending", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Pending findUnique
   */
  export type PendingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pending
     */
    select?: PendingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pending
     */
    omit?: PendingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendingInclude<ExtArgs> | null
    /**
     * Filter, which Pending to fetch.
     */
    where: PendingWhereUniqueInput
  }

  /**
   * Pending findUniqueOrThrow
   */
  export type PendingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pending
     */
    select?: PendingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pending
     */
    omit?: PendingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendingInclude<ExtArgs> | null
    /**
     * Filter, which Pending to fetch.
     */
    where: PendingWhereUniqueInput
  }

  /**
   * Pending findFirst
   */
  export type PendingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pending
     */
    select?: PendingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pending
     */
    omit?: PendingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendingInclude<ExtArgs> | null
    /**
     * Filter, which Pending to fetch.
     */
    where?: PendingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pendings to fetch.
     */
    orderBy?: PendingOrderByWithRelationInput | PendingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pendings.
     */
    cursor?: PendingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pendings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pendings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pendings.
     */
    distinct?: PendingScalarFieldEnum | PendingScalarFieldEnum[]
  }

  /**
   * Pending findFirstOrThrow
   */
  export type PendingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pending
     */
    select?: PendingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pending
     */
    omit?: PendingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendingInclude<ExtArgs> | null
    /**
     * Filter, which Pending to fetch.
     */
    where?: PendingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pendings to fetch.
     */
    orderBy?: PendingOrderByWithRelationInput | PendingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pendings.
     */
    cursor?: PendingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pendings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pendings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pendings.
     */
    distinct?: PendingScalarFieldEnum | PendingScalarFieldEnum[]
  }

  /**
   * Pending findMany
   */
  export type PendingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pending
     */
    select?: PendingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pending
     */
    omit?: PendingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendingInclude<ExtArgs> | null
    /**
     * Filter, which Pendings to fetch.
     */
    where?: PendingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pendings to fetch.
     */
    orderBy?: PendingOrderByWithRelationInput | PendingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pendings.
     */
    cursor?: PendingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pendings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pendings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pendings.
     */
    distinct?: PendingScalarFieldEnum | PendingScalarFieldEnum[]
  }

  /**
   * Pending create
   */
  export type PendingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pending
     */
    select?: PendingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pending
     */
    omit?: PendingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendingInclude<ExtArgs> | null
    /**
     * The data needed to create a Pending.
     */
    data: XOR<PendingCreateInput, PendingUncheckedCreateInput>
  }

  /**
   * Pending createMany
   */
  export type PendingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pendings.
     */
    data: PendingCreateManyInput | PendingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pending createManyAndReturn
   */
  export type PendingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pending
     */
    select?: PendingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pending
     */
    omit?: PendingOmit<ExtArgs> | null
    /**
     * The data used to create many Pendings.
     */
    data: PendingCreateManyInput | PendingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pending update
   */
  export type PendingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pending
     */
    select?: PendingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pending
     */
    omit?: PendingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendingInclude<ExtArgs> | null
    /**
     * The data needed to update a Pending.
     */
    data: XOR<PendingUpdateInput, PendingUncheckedUpdateInput>
    /**
     * Choose, which Pending to update.
     */
    where: PendingWhereUniqueInput
  }

  /**
   * Pending updateMany
   */
  export type PendingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pendings.
     */
    data: XOR<PendingUpdateManyMutationInput, PendingUncheckedUpdateManyInput>
    /**
     * Filter which Pendings to update
     */
    where?: PendingWhereInput
    /**
     * Limit how many Pendings to update.
     */
    limit?: number
  }

  /**
   * Pending updateManyAndReturn
   */
  export type PendingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pending
     */
    select?: PendingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pending
     */
    omit?: PendingOmit<ExtArgs> | null
    /**
     * The data used to update Pendings.
     */
    data: XOR<PendingUpdateManyMutationInput, PendingUncheckedUpdateManyInput>
    /**
     * Filter which Pendings to update
     */
    where?: PendingWhereInput
    /**
     * Limit how many Pendings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pending upsert
   */
  export type PendingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pending
     */
    select?: PendingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pending
     */
    omit?: PendingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendingInclude<ExtArgs> | null
    /**
     * The filter to search for the Pending to update in case it exists.
     */
    where: PendingWhereUniqueInput
    /**
     * In case the Pending found by the `where` argument doesn't exist, create a new Pending with this data.
     */
    create: XOR<PendingCreateInput, PendingUncheckedCreateInput>
    /**
     * In case the Pending was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PendingUpdateInput, PendingUncheckedUpdateInput>
  }

  /**
   * Pending delete
   */
  export type PendingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pending
     */
    select?: PendingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pending
     */
    omit?: PendingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendingInclude<ExtArgs> | null
    /**
     * Filter which Pending to delete.
     */
    where: PendingWhereUniqueInput
  }

  /**
   * Pending deleteMany
   */
  export type PendingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pendings to delete
     */
    where?: PendingWhereInput
    /**
     * Limit how many Pendings to delete.
     */
    limit?: number
  }

  /**
   * Pending without action
   */
  export type PendingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pending
     */
    select?: PendingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pending
     */
    omit?: PendingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PendingInclude<ExtArgs> | null
  }


  /**
   * Model Mark
   */

  export type AggregateMark = {
    _count: MarkCountAggregateOutputType | null
    _avg: MarkAvgAggregateOutputType | null
    _sum: MarkSumAggregateOutputType | null
    _min: MarkMinAggregateOutputType | null
    _max: MarkMaxAggregateOutputType | null
  }

  export type MarkAvgAggregateOutputType = {
    id_mark: number | null
    taskId: number | null
    userId: number | null
    mark: number | null
  }

  export type MarkSumAggregateOutputType = {
    id_mark: number | null
    taskId: number | null
    userId: number | null
    mark: number | null
  }

  export type MarkMinAggregateOutputType = {
    id_mark: number | null
    taskId: number | null
    userId: number | null
    mark: number | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type MarkMaxAggregateOutputType = {
    id_mark: number | null
    taskId: number | null
    userId: number | null
    mark: number | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type MarkCountAggregateOutputType = {
    id_mark: number
    taskId: number
    userId: number
    mark: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type MarkAvgAggregateInputType = {
    id_mark?: true
    taskId?: true
    userId?: true
    mark?: true
  }

  export type MarkSumAggregateInputType = {
    id_mark?: true
    taskId?: true
    userId?: true
    mark?: true
  }

  export type MarkMinAggregateInputType = {
    id_mark?: true
    taskId?: true
    userId?: true
    mark?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type MarkMaxAggregateInputType = {
    id_mark?: true
    taskId?: true
    userId?: true
    mark?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type MarkCountAggregateInputType = {
    id_mark?: true
    taskId?: true
    userId?: true
    mark?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type MarkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mark to aggregate.
     */
    where?: MarkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Marks to fetch.
     */
    orderBy?: MarkOrderByWithRelationInput | MarkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MarkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Marks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Marks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Marks
    **/
    _count?: true | MarkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MarkAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MarkSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MarkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MarkMaxAggregateInputType
  }

  export type GetMarkAggregateType<T extends MarkAggregateArgs> = {
        [P in keyof T & keyof AggregateMark]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMark[P]>
      : GetScalarType<T[P], AggregateMark[P]>
  }




  export type MarkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MarkWhereInput
    orderBy?: MarkOrderByWithAggregationInput | MarkOrderByWithAggregationInput[]
    by: MarkScalarFieldEnum[] | MarkScalarFieldEnum
    having?: MarkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MarkCountAggregateInputType | true
    _avg?: MarkAvgAggregateInputType
    _sum?: MarkSumAggregateInputType
    _min?: MarkMinAggregateInputType
    _max?: MarkMaxAggregateInputType
  }

  export type MarkGroupByOutputType = {
    id_mark: number
    taskId: number
    userId: number
    mark: number
    created_at: Date
    updated_at: Date | null
    deleted_at: Date | null
    _count: MarkCountAggregateOutputType | null
    _avg: MarkAvgAggregateOutputType | null
    _sum: MarkSumAggregateOutputType | null
    _min: MarkMinAggregateOutputType | null
    _max: MarkMaxAggregateOutputType | null
  }

  type GetMarkGroupByPayload<T extends MarkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MarkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MarkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MarkGroupByOutputType[P]>
            : GetScalarType<T[P], MarkGroupByOutputType[P]>
        }
      >
    >


  export type MarkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_mark?: boolean
    taskId?: boolean
    userId?: boolean
    mark?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    id_task?: boolean | TaskDefaultArgs<ExtArgs>
    id_user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mark"]>

  export type MarkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_mark?: boolean
    taskId?: boolean
    userId?: boolean
    mark?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    id_task?: boolean | TaskDefaultArgs<ExtArgs>
    id_user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mark"]>

  export type MarkSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_mark?: boolean
    taskId?: boolean
    userId?: boolean
    mark?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    id_task?: boolean | TaskDefaultArgs<ExtArgs>
    id_user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mark"]>

  export type MarkSelectScalar = {
    id_mark?: boolean
    taskId?: boolean
    userId?: boolean
    mark?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }

  export type MarkOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_mark" | "taskId" | "userId" | "mark" | "created_at" | "updated_at" | "deleted_at", ExtArgs["result"]["mark"]>
  export type MarkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    id_task?: boolean | TaskDefaultArgs<ExtArgs>
    id_user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MarkIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    id_task?: boolean | TaskDefaultArgs<ExtArgs>
    id_user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MarkIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    id_task?: boolean | TaskDefaultArgs<ExtArgs>
    id_user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MarkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Mark"
    objects: {
      id_task: Prisma.$TaskPayload<ExtArgs>
      id_user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_mark: number
      taskId: number
      userId: number
      mark: number
      created_at: Date
      updated_at: Date | null
      deleted_at: Date | null
    }, ExtArgs["result"]["mark"]>
    composites: {}
  }

  type MarkGetPayload<S extends boolean | null | undefined | MarkDefaultArgs> = $Result.GetResult<Prisma.$MarkPayload, S>

  type MarkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MarkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MarkCountAggregateInputType | true
    }

  export interface MarkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Mark'], meta: { name: 'Mark' } }
    /**
     * Find zero or one Mark that matches the filter.
     * @param {MarkFindUniqueArgs} args - Arguments to find a Mark
     * @example
     * // Get one Mark
     * const mark = await prisma.mark.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MarkFindUniqueArgs>(args: SelectSubset<T, MarkFindUniqueArgs<ExtArgs>>): Prisma__MarkClient<$Result.GetResult<Prisma.$MarkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Mark that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MarkFindUniqueOrThrowArgs} args - Arguments to find a Mark
     * @example
     * // Get one Mark
     * const mark = await prisma.mark.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MarkFindUniqueOrThrowArgs>(args: SelectSubset<T, MarkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MarkClient<$Result.GetResult<Prisma.$MarkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mark that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarkFindFirstArgs} args - Arguments to find a Mark
     * @example
     * // Get one Mark
     * const mark = await prisma.mark.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MarkFindFirstArgs>(args?: SelectSubset<T, MarkFindFirstArgs<ExtArgs>>): Prisma__MarkClient<$Result.GetResult<Prisma.$MarkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mark that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarkFindFirstOrThrowArgs} args - Arguments to find a Mark
     * @example
     * // Get one Mark
     * const mark = await prisma.mark.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MarkFindFirstOrThrowArgs>(args?: SelectSubset<T, MarkFindFirstOrThrowArgs<ExtArgs>>): Prisma__MarkClient<$Result.GetResult<Prisma.$MarkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Marks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Marks
     * const marks = await prisma.mark.findMany()
     * 
     * // Get first 10 Marks
     * const marks = await prisma.mark.findMany({ take: 10 })
     * 
     * // Only select the `id_mark`
     * const markWithId_markOnly = await prisma.mark.findMany({ select: { id_mark: true } })
     * 
     */
    findMany<T extends MarkFindManyArgs>(args?: SelectSubset<T, MarkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Mark.
     * @param {MarkCreateArgs} args - Arguments to create a Mark.
     * @example
     * // Create one Mark
     * const Mark = await prisma.mark.create({
     *   data: {
     *     // ... data to create a Mark
     *   }
     * })
     * 
     */
    create<T extends MarkCreateArgs>(args: SelectSubset<T, MarkCreateArgs<ExtArgs>>): Prisma__MarkClient<$Result.GetResult<Prisma.$MarkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Marks.
     * @param {MarkCreateManyArgs} args - Arguments to create many Marks.
     * @example
     * // Create many Marks
     * const mark = await prisma.mark.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MarkCreateManyArgs>(args?: SelectSubset<T, MarkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Marks and returns the data saved in the database.
     * @param {MarkCreateManyAndReturnArgs} args - Arguments to create many Marks.
     * @example
     * // Create many Marks
     * const mark = await prisma.mark.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Marks and only return the `id_mark`
     * const markWithId_markOnly = await prisma.mark.createManyAndReturn({
     *   select: { id_mark: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MarkCreateManyAndReturnArgs>(args?: SelectSubset<T, MarkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarkPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Mark.
     * @param {MarkDeleteArgs} args - Arguments to delete one Mark.
     * @example
     * // Delete one Mark
     * const Mark = await prisma.mark.delete({
     *   where: {
     *     // ... filter to delete one Mark
     *   }
     * })
     * 
     */
    delete<T extends MarkDeleteArgs>(args: SelectSubset<T, MarkDeleteArgs<ExtArgs>>): Prisma__MarkClient<$Result.GetResult<Prisma.$MarkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Mark.
     * @param {MarkUpdateArgs} args - Arguments to update one Mark.
     * @example
     * // Update one Mark
     * const mark = await prisma.mark.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MarkUpdateArgs>(args: SelectSubset<T, MarkUpdateArgs<ExtArgs>>): Prisma__MarkClient<$Result.GetResult<Prisma.$MarkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Marks.
     * @param {MarkDeleteManyArgs} args - Arguments to filter Marks to delete.
     * @example
     * // Delete a few Marks
     * const { count } = await prisma.mark.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MarkDeleteManyArgs>(args?: SelectSubset<T, MarkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Marks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Marks
     * const mark = await prisma.mark.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MarkUpdateManyArgs>(args: SelectSubset<T, MarkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Marks and returns the data updated in the database.
     * @param {MarkUpdateManyAndReturnArgs} args - Arguments to update many Marks.
     * @example
     * // Update many Marks
     * const mark = await prisma.mark.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Marks and only return the `id_mark`
     * const markWithId_markOnly = await prisma.mark.updateManyAndReturn({
     *   select: { id_mark: true },
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
    updateManyAndReturn<T extends MarkUpdateManyAndReturnArgs>(args: SelectSubset<T, MarkUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarkPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Mark.
     * @param {MarkUpsertArgs} args - Arguments to update or create a Mark.
     * @example
     * // Update or create a Mark
     * const mark = await prisma.mark.upsert({
     *   create: {
     *     // ... data to create a Mark
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mark we want to update
     *   }
     * })
     */
    upsert<T extends MarkUpsertArgs>(args: SelectSubset<T, MarkUpsertArgs<ExtArgs>>): Prisma__MarkClient<$Result.GetResult<Prisma.$MarkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Marks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarkCountArgs} args - Arguments to filter Marks to count.
     * @example
     * // Count the number of Marks
     * const count = await prisma.mark.count({
     *   where: {
     *     // ... the filter for the Marks we want to count
     *   }
     * })
    **/
    count<T extends MarkCountArgs>(
      args?: Subset<T, MarkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MarkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mark.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MarkAggregateArgs>(args: Subset<T, MarkAggregateArgs>): Prisma.PrismaPromise<GetMarkAggregateType<T>>

    /**
     * Group by Mark.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarkGroupByArgs} args - Group by arguments.
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
      T extends MarkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MarkGroupByArgs['orderBy'] }
        : { orderBy?: MarkGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MarkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMarkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Mark model
   */
  readonly fields: MarkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Mark.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MarkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    id_task<T extends TaskDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TaskDefaultArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    id_user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Mark model
   */
  interface MarkFieldRefs {
    readonly id_mark: FieldRef<"Mark", 'Int'>
    readonly taskId: FieldRef<"Mark", 'Int'>
    readonly userId: FieldRef<"Mark", 'Int'>
    readonly mark: FieldRef<"Mark", 'Int'>
    readonly created_at: FieldRef<"Mark", 'DateTime'>
    readonly updated_at: FieldRef<"Mark", 'DateTime'>
    readonly deleted_at: FieldRef<"Mark", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Mark findUnique
   */
  export type MarkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mark
     */
    select?: MarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mark
     */
    omit?: MarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkInclude<ExtArgs> | null
    /**
     * Filter, which Mark to fetch.
     */
    where: MarkWhereUniqueInput
  }

  /**
   * Mark findUniqueOrThrow
   */
  export type MarkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mark
     */
    select?: MarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mark
     */
    omit?: MarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkInclude<ExtArgs> | null
    /**
     * Filter, which Mark to fetch.
     */
    where: MarkWhereUniqueInput
  }

  /**
   * Mark findFirst
   */
  export type MarkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mark
     */
    select?: MarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mark
     */
    omit?: MarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkInclude<ExtArgs> | null
    /**
     * Filter, which Mark to fetch.
     */
    where?: MarkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Marks to fetch.
     */
    orderBy?: MarkOrderByWithRelationInput | MarkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Marks.
     */
    cursor?: MarkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Marks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Marks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Marks.
     */
    distinct?: MarkScalarFieldEnum | MarkScalarFieldEnum[]
  }

  /**
   * Mark findFirstOrThrow
   */
  export type MarkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mark
     */
    select?: MarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mark
     */
    omit?: MarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkInclude<ExtArgs> | null
    /**
     * Filter, which Mark to fetch.
     */
    where?: MarkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Marks to fetch.
     */
    orderBy?: MarkOrderByWithRelationInput | MarkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Marks.
     */
    cursor?: MarkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Marks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Marks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Marks.
     */
    distinct?: MarkScalarFieldEnum | MarkScalarFieldEnum[]
  }

  /**
   * Mark findMany
   */
  export type MarkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mark
     */
    select?: MarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mark
     */
    omit?: MarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkInclude<ExtArgs> | null
    /**
     * Filter, which Marks to fetch.
     */
    where?: MarkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Marks to fetch.
     */
    orderBy?: MarkOrderByWithRelationInput | MarkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Marks.
     */
    cursor?: MarkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Marks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Marks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Marks.
     */
    distinct?: MarkScalarFieldEnum | MarkScalarFieldEnum[]
  }

  /**
   * Mark create
   */
  export type MarkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mark
     */
    select?: MarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mark
     */
    omit?: MarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkInclude<ExtArgs> | null
    /**
     * The data needed to create a Mark.
     */
    data: XOR<MarkCreateInput, MarkUncheckedCreateInput>
  }

  /**
   * Mark createMany
   */
  export type MarkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Marks.
     */
    data: MarkCreateManyInput | MarkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Mark createManyAndReturn
   */
  export type MarkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mark
     */
    select?: MarkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Mark
     */
    omit?: MarkOmit<ExtArgs> | null
    /**
     * The data used to create many Marks.
     */
    data: MarkCreateManyInput | MarkCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Mark update
   */
  export type MarkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mark
     */
    select?: MarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mark
     */
    omit?: MarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkInclude<ExtArgs> | null
    /**
     * The data needed to update a Mark.
     */
    data: XOR<MarkUpdateInput, MarkUncheckedUpdateInput>
    /**
     * Choose, which Mark to update.
     */
    where: MarkWhereUniqueInput
  }

  /**
   * Mark updateMany
   */
  export type MarkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Marks.
     */
    data: XOR<MarkUpdateManyMutationInput, MarkUncheckedUpdateManyInput>
    /**
     * Filter which Marks to update
     */
    where?: MarkWhereInput
    /**
     * Limit how many Marks to update.
     */
    limit?: number
  }

  /**
   * Mark updateManyAndReturn
   */
  export type MarkUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mark
     */
    select?: MarkSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Mark
     */
    omit?: MarkOmit<ExtArgs> | null
    /**
     * The data used to update Marks.
     */
    data: XOR<MarkUpdateManyMutationInput, MarkUncheckedUpdateManyInput>
    /**
     * Filter which Marks to update
     */
    where?: MarkWhereInput
    /**
     * Limit how many Marks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Mark upsert
   */
  export type MarkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mark
     */
    select?: MarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mark
     */
    omit?: MarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkInclude<ExtArgs> | null
    /**
     * The filter to search for the Mark to update in case it exists.
     */
    where: MarkWhereUniqueInput
    /**
     * In case the Mark found by the `where` argument doesn't exist, create a new Mark with this data.
     */
    create: XOR<MarkCreateInput, MarkUncheckedCreateInput>
    /**
     * In case the Mark was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MarkUpdateInput, MarkUncheckedUpdateInput>
  }

  /**
   * Mark delete
   */
  export type MarkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mark
     */
    select?: MarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mark
     */
    omit?: MarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkInclude<ExtArgs> | null
    /**
     * Filter which Mark to delete.
     */
    where: MarkWhereUniqueInput
  }

  /**
   * Mark deleteMany
   */
  export type MarkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Marks to delete
     */
    where?: MarkWhereInput
    /**
     * Limit how many Marks to delete.
     */
    limit?: number
  }

  /**
   * Mark without action
   */
  export type MarkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mark
     */
    select?: MarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mark
     */
    omit?: MarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkInclude<ExtArgs> | null
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
    id_user: 'id_user',
    name: 'name',
    username: 'username',
    email: 'email',
    password: 'password',
    role: 'role',
    profile_picture: 'profile_picture',
    refresh_token: 'refresh_token',
    university: 'university',
    major: 'major',
    internship_date: 'internship_date',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TaskScalarFieldEnum: {
    id_task: 'id_task',
    task_title: 'task_title',
    task_deadline: 'task_deadline',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type TaskScalarFieldEnum = (typeof TaskScalarFieldEnum)[keyof typeof TaskScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id_category: 'id_category',
    category: 'category',
    status: 'status',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const NewsScalarFieldEnum: {
    id_news: 'id_news',
    taskId: 'taskId',
    categoryId: 'categoryId',
    authorId: 'authorId',
    title: 'title',
    content: 'content',
    image: 'image',
    status: 'status',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type NewsScalarFieldEnum = (typeof NewsScalarFieldEnum)[keyof typeof NewsScalarFieldEnum]


  export const LikeScalarFieldEnum: {
    id_like: 'id_like',
    newsId: 'newsId',
    userId: 'userId',
    like: 'like',
    timestamp: 'timestamp'
  };

  export type LikeScalarFieldEnum = (typeof LikeScalarFieldEnum)[keyof typeof LikeScalarFieldEnum]


  export const SaveScalarFieldEnum: {
    id_save: 'id_save',
    newsId: 'newsId',
    userId: 'userId',
    saved_news: 'saved_news',
    timestamp: 'timestamp'
  };

  export type SaveScalarFieldEnum = (typeof SaveScalarFieldEnum)[keyof typeof SaveScalarFieldEnum]


  export const CommentScalarFieldEnum: {
    id_comment: 'id_comment',
    newsId: 'newsId',
    userId: 'userId',
    comment: 'comment',
    timestamp: 'timestamp'
  };

  export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum]


  export const PendingScalarFieldEnum: {
    id_pending: 'id_pending',
    newsId: 'newsId',
    status: 'status',
    note: 'note',
    created_at: 'created_at',
    resolved_at: 'resolved_at'
  };

  export type PendingScalarFieldEnum = (typeof PendingScalarFieldEnum)[keyof typeof PendingScalarFieldEnum]


  export const MarkScalarFieldEnum: {
    id_mark: 'id_mark',
    taskId: 'taskId',
    userId: 'userId',
    mark: 'mark',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type MarkScalarFieldEnum = (typeof MarkScalarFieldEnum)[keyof typeof MarkScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Status_Category'
   */
  export type EnumStatus_CategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status_Category'>
    


  /**
   * Reference to a field of type 'Status_Category[]'
   */
  export type ListEnumStatus_CategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status_Category[]'>
    


  /**
   * Reference to a field of type 'Status_News'
   */
  export type EnumStatus_NewsFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status_News'>
    


  /**
   * Reference to a field of type 'Status_News[]'
   */
  export type ListEnumStatus_NewsFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status_News[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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
    id_user?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    profile_picture?: StringNullableFilter<"User"> | string | null
    refresh_token?: StringNullableFilter<"User"> | string | null
    university?: StringNullableFilter<"User"> | string | null
    major?: StringNullableFilter<"User"> | string | null
    internship_date?: DateTimeNullableFilter<"User"> | Date | string | null
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeNullableFilter<"User"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"User"> | Date | string | null
    news?: NewsListRelationFilter
    comments?: CommentListRelationFilter
    likes?: LikeListRelationFilter
    saves?: SaveListRelationFilter
    marks?: MarkListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id_user?: SortOrder
    name?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    profile_picture?: SortOrderInput | SortOrder
    refresh_token?: SortOrderInput | SortOrder
    university?: SortOrderInput | SortOrder
    major?: SortOrderInput | SortOrder
    internship_date?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    news?: NewsOrderByRelationAggregateInput
    comments?: CommentOrderByRelationAggregateInput
    likes?: LikeOrderByRelationAggregateInput
    saves?: SaveOrderByRelationAggregateInput
    marks?: MarkOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id_user?: number
    username?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    profile_picture?: StringNullableFilter<"User"> | string | null
    refresh_token?: StringNullableFilter<"User"> | string | null
    university?: StringNullableFilter<"User"> | string | null
    major?: StringNullableFilter<"User"> | string | null
    internship_date?: DateTimeNullableFilter<"User"> | Date | string | null
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeNullableFilter<"User"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"User"> | Date | string | null
    news?: NewsListRelationFilter
    comments?: CommentListRelationFilter
    likes?: LikeListRelationFilter
    saves?: SaveListRelationFilter
    marks?: MarkListRelationFilter
  }, "id_user" | "username" | "email">

  export type UserOrderByWithAggregationInput = {
    id_user?: SortOrder
    name?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    profile_picture?: SortOrderInput | SortOrder
    refresh_token?: SortOrderInput | SortOrder
    university?: SortOrderInput | SortOrder
    major?: SortOrderInput | SortOrder
    internship_date?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id_user?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    profile_picture?: StringNullableWithAggregatesFilter<"User"> | string | null
    refresh_token?: StringNullableWithAggregatesFilter<"User"> | string | null
    university?: StringNullableWithAggregatesFilter<"User"> | string | null
    major?: StringNullableWithAggregatesFilter<"User"> | string | null
    internship_date?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updated_at?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    deleted_at?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type TaskWhereInput = {
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    id_task?: IntFilter<"Task"> | number
    task_title?: StringFilter<"Task"> | string
    task_deadline?: DateTimeFilter<"Task"> | Date | string
    created_at?: DateTimeFilter<"Task"> | Date | string
    updated_at?: DateTimeNullableFilter<"Task"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"Task"> | Date | string | null
    news?: NewsListRelationFilter
    marks?: MarkListRelationFilter
  }

  export type TaskOrderByWithRelationInput = {
    id_task?: SortOrder
    task_title?: SortOrder
    task_deadline?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    news?: NewsOrderByRelationAggregateInput
    marks?: MarkOrderByRelationAggregateInput
  }

  export type TaskWhereUniqueInput = Prisma.AtLeast<{
    id_task?: number
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    task_title?: StringFilter<"Task"> | string
    task_deadline?: DateTimeFilter<"Task"> | Date | string
    created_at?: DateTimeFilter<"Task"> | Date | string
    updated_at?: DateTimeNullableFilter<"Task"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"Task"> | Date | string | null
    news?: NewsListRelationFilter
    marks?: MarkListRelationFilter
  }, "id_task">

  export type TaskOrderByWithAggregationInput = {
    id_task?: SortOrder
    task_title?: SortOrder
    task_deadline?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: TaskCountOrderByAggregateInput
    _avg?: TaskAvgOrderByAggregateInput
    _max?: TaskMaxOrderByAggregateInput
    _min?: TaskMinOrderByAggregateInput
    _sum?: TaskSumOrderByAggregateInput
  }

  export type TaskScalarWhereWithAggregatesInput = {
    AND?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    OR?: TaskScalarWhereWithAggregatesInput[]
    NOT?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    id_task?: IntWithAggregatesFilter<"Task"> | number
    task_title?: StringWithAggregatesFilter<"Task"> | string
    task_deadline?: DateTimeWithAggregatesFilter<"Task"> | Date | string
    created_at?: DateTimeWithAggregatesFilter<"Task"> | Date | string
    updated_at?: DateTimeNullableWithAggregatesFilter<"Task"> | Date | string | null
    deleted_at?: DateTimeNullableWithAggregatesFilter<"Task"> | Date | string | null
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id_category?: IntFilter<"Category"> | number
    category?: StringFilter<"Category"> | string
    status?: EnumStatus_CategoryFilter<"Category"> | $Enums.Status_Category
    created_at?: DateTimeFilter<"Category"> | Date | string
    updated_at?: DateTimeNullableFilter<"Category"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"Category"> | Date | string | null
    news?: NewsListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id_category?: SortOrder
    category?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    news?: NewsOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id_category?: number
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    category?: StringFilter<"Category"> | string
    status?: EnumStatus_CategoryFilter<"Category"> | $Enums.Status_Category
    created_at?: DateTimeFilter<"Category"> | Date | string
    updated_at?: DateTimeNullableFilter<"Category"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"Category"> | Date | string | null
    news?: NewsListRelationFilter
  }, "id_category">

  export type CategoryOrderByWithAggregationInput = {
    id_category?: SortOrder
    category?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id_category?: IntWithAggregatesFilter<"Category"> | number
    category?: StringWithAggregatesFilter<"Category"> | string
    status?: EnumStatus_CategoryWithAggregatesFilter<"Category"> | $Enums.Status_Category
    created_at?: DateTimeWithAggregatesFilter<"Category"> | Date | string
    updated_at?: DateTimeNullableWithAggregatesFilter<"Category"> | Date | string | null
    deleted_at?: DateTimeNullableWithAggregatesFilter<"Category"> | Date | string | null
  }

  export type NewsWhereInput = {
    AND?: NewsWhereInput | NewsWhereInput[]
    OR?: NewsWhereInput[]
    NOT?: NewsWhereInput | NewsWhereInput[]
    id_news?: IntFilter<"News"> | number
    taskId?: IntFilter<"News"> | number
    categoryId?: IntFilter<"News"> | number
    authorId?: IntFilter<"News"> | number
    title?: StringFilter<"News"> | string
    content?: StringFilter<"News"> | string
    image?: StringFilter<"News"> | string
    status?: EnumStatus_NewsNullableFilter<"News"> | $Enums.Status_News | null
    created_at?: DateTimeFilter<"News"> | Date | string
    updated_at?: DateTimeNullableFilter<"News"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"News"> | Date | string | null
    task?: XOR<TaskScalarRelationFilter, TaskWhereInput>
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    likes?: LikeListRelationFilter
    saves?: SaveListRelationFilter
    comments?: CommentListRelationFilter
    pending?: PendingListRelationFilter
  }

  export type NewsOrderByWithRelationInput = {
    id_news?: SortOrder
    taskId?: SortOrder
    categoryId?: SortOrder
    authorId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    image?: SortOrder
    status?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    task?: TaskOrderByWithRelationInput
    category?: CategoryOrderByWithRelationInput
    author?: UserOrderByWithRelationInput
    likes?: LikeOrderByRelationAggregateInput
    saves?: SaveOrderByRelationAggregateInput
    comments?: CommentOrderByRelationAggregateInput
    pending?: PendingOrderByRelationAggregateInput
  }

  export type NewsWhereUniqueInput = Prisma.AtLeast<{
    id_news?: number
    AND?: NewsWhereInput | NewsWhereInput[]
    OR?: NewsWhereInput[]
    NOT?: NewsWhereInput | NewsWhereInput[]
    taskId?: IntFilter<"News"> | number
    categoryId?: IntFilter<"News"> | number
    authorId?: IntFilter<"News"> | number
    title?: StringFilter<"News"> | string
    content?: StringFilter<"News"> | string
    image?: StringFilter<"News"> | string
    status?: EnumStatus_NewsNullableFilter<"News"> | $Enums.Status_News | null
    created_at?: DateTimeFilter<"News"> | Date | string
    updated_at?: DateTimeNullableFilter<"News"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"News"> | Date | string | null
    task?: XOR<TaskScalarRelationFilter, TaskWhereInput>
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    likes?: LikeListRelationFilter
    saves?: SaveListRelationFilter
    comments?: CommentListRelationFilter
    pending?: PendingListRelationFilter
  }, "id_news">

  export type NewsOrderByWithAggregationInput = {
    id_news?: SortOrder
    taskId?: SortOrder
    categoryId?: SortOrder
    authorId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    image?: SortOrder
    status?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: NewsCountOrderByAggregateInput
    _avg?: NewsAvgOrderByAggregateInput
    _max?: NewsMaxOrderByAggregateInput
    _min?: NewsMinOrderByAggregateInput
    _sum?: NewsSumOrderByAggregateInput
  }

  export type NewsScalarWhereWithAggregatesInput = {
    AND?: NewsScalarWhereWithAggregatesInput | NewsScalarWhereWithAggregatesInput[]
    OR?: NewsScalarWhereWithAggregatesInput[]
    NOT?: NewsScalarWhereWithAggregatesInput | NewsScalarWhereWithAggregatesInput[]
    id_news?: IntWithAggregatesFilter<"News"> | number
    taskId?: IntWithAggregatesFilter<"News"> | number
    categoryId?: IntWithAggregatesFilter<"News"> | number
    authorId?: IntWithAggregatesFilter<"News"> | number
    title?: StringWithAggregatesFilter<"News"> | string
    content?: StringWithAggregatesFilter<"News"> | string
    image?: StringWithAggregatesFilter<"News"> | string
    status?: EnumStatus_NewsNullableWithAggregatesFilter<"News"> | $Enums.Status_News | null
    created_at?: DateTimeWithAggregatesFilter<"News"> | Date | string
    updated_at?: DateTimeNullableWithAggregatesFilter<"News"> | Date | string | null
    deleted_at?: DateTimeNullableWithAggregatesFilter<"News"> | Date | string | null
  }

  export type LikeWhereInput = {
    AND?: LikeWhereInput | LikeWhereInput[]
    OR?: LikeWhereInput[]
    NOT?: LikeWhereInput | LikeWhereInput[]
    id_like?: IntFilter<"Like"> | number
    newsId?: IntFilter<"Like"> | number
    userId?: IntFilter<"Like"> | number
    like?: BoolFilter<"Like"> | boolean
    timestamp?: DateTimeFilter<"Like"> | Date | string
    news?: XOR<NewsScalarRelationFilter, NewsWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type LikeOrderByWithRelationInput = {
    id_like?: SortOrder
    newsId?: SortOrder
    userId?: SortOrder
    like?: SortOrder
    timestamp?: SortOrder
    news?: NewsOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type LikeWhereUniqueInput = Prisma.AtLeast<{
    id_like?: number
    AND?: LikeWhereInput | LikeWhereInput[]
    OR?: LikeWhereInput[]
    NOT?: LikeWhereInput | LikeWhereInput[]
    newsId?: IntFilter<"Like"> | number
    userId?: IntFilter<"Like"> | number
    like?: BoolFilter<"Like"> | boolean
    timestamp?: DateTimeFilter<"Like"> | Date | string
    news?: XOR<NewsScalarRelationFilter, NewsWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id_like">

  export type LikeOrderByWithAggregationInput = {
    id_like?: SortOrder
    newsId?: SortOrder
    userId?: SortOrder
    like?: SortOrder
    timestamp?: SortOrder
    _count?: LikeCountOrderByAggregateInput
    _avg?: LikeAvgOrderByAggregateInput
    _max?: LikeMaxOrderByAggregateInput
    _min?: LikeMinOrderByAggregateInput
    _sum?: LikeSumOrderByAggregateInput
  }

  export type LikeScalarWhereWithAggregatesInput = {
    AND?: LikeScalarWhereWithAggregatesInput | LikeScalarWhereWithAggregatesInput[]
    OR?: LikeScalarWhereWithAggregatesInput[]
    NOT?: LikeScalarWhereWithAggregatesInput | LikeScalarWhereWithAggregatesInput[]
    id_like?: IntWithAggregatesFilter<"Like"> | number
    newsId?: IntWithAggregatesFilter<"Like"> | number
    userId?: IntWithAggregatesFilter<"Like"> | number
    like?: BoolWithAggregatesFilter<"Like"> | boolean
    timestamp?: DateTimeWithAggregatesFilter<"Like"> | Date | string
  }

  export type SaveWhereInput = {
    AND?: SaveWhereInput | SaveWhereInput[]
    OR?: SaveWhereInput[]
    NOT?: SaveWhereInput | SaveWhereInput[]
    id_save?: IntFilter<"Save"> | number
    newsId?: IntFilter<"Save"> | number
    userId?: IntFilter<"Save"> | number
    saved_news?: BoolFilter<"Save"> | boolean
    timestamp?: DateTimeFilter<"Save"> | Date | string
    news?: XOR<NewsScalarRelationFilter, NewsWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SaveOrderByWithRelationInput = {
    id_save?: SortOrder
    newsId?: SortOrder
    userId?: SortOrder
    saved_news?: SortOrder
    timestamp?: SortOrder
    news?: NewsOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type SaveWhereUniqueInput = Prisma.AtLeast<{
    id_save?: number
    AND?: SaveWhereInput | SaveWhereInput[]
    OR?: SaveWhereInput[]
    NOT?: SaveWhereInput | SaveWhereInput[]
    newsId?: IntFilter<"Save"> | number
    userId?: IntFilter<"Save"> | number
    saved_news?: BoolFilter<"Save"> | boolean
    timestamp?: DateTimeFilter<"Save"> | Date | string
    news?: XOR<NewsScalarRelationFilter, NewsWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id_save">

  export type SaveOrderByWithAggregationInput = {
    id_save?: SortOrder
    newsId?: SortOrder
    userId?: SortOrder
    saved_news?: SortOrder
    timestamp?: SortOrder
    _count?: SaveCountOrderByAggregateInput
    _avg?: SaveAvgOrderByAggregateInput
    _max?: SaveMaxOrderByAggregateInput
    _min?: SaveMinOrderByAggregateInput
    _sum?: SaveSumOrderByAggregateInput
  }

  export type SaveScalarWhereWithAggregatesInput = {
    AND?: SaveScalarWhereWithAggregatesInput | SaveScalarWhereWithAggregatesInput[]
    OR?: SaveScalarWhereWithAggregatesInput[]
    NOT?: SaveScalarWhereWithAggregatesInput | SaveScalarWhereWithAggregatesInput[]
    id_save?: IntWithAggregatesFilter<"Save"> | number
    newsId?: IntWithAggregatesFilter<"Save"> | number
    userId?: IntWithAggregatesFilter<"Save"> | number
    saved_news?: BoolWithAggregatesFilter<"Save"> | boolean
    timestamp?: DateTimeWithAggregatesFilter<"Save"> | Date | string
  }

  export type CommentWhereInput = {
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    id_comment?: IntFilter<"Comment"> | number
    newsId?: IntFilter<"Comment"> | number
    userId?: IntFilter<"Comment"> | number
    comment?: StringFilter<"Comment"> | string
    timestamp?: DateTimeFilter<"Comment"> | Date | string
    news?: XOR<NewsScalarRelationFilter, NewsWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type CommentOrderByWithRelationInput = {
    id_comment?: SortOrder
    newsId?: SortOrder
    userId?: SortOrder
    comment?: SortOrder
    timestamp?: SortOrder
    news?: NewsOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type CommentWhereUniqueInput = Prisma.AtLeast<{
    id_comment?: number
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    newsId?: IntFilter<"Comment"> | number
    userId?: IntFilter<"Comment"> | number
    comment?: StringFilter<"Comment"> | string
    timestamp?: DateTimeFilter<"Comment"> | Date | string
    news?: XOR<NewsScalarRelationFilter, NewsWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id_comment">

  export type CommentOrderByWithAggregationInput = {
    id_comment?: SortOrder
    newsId?: SortOrder
    userId?: SortOrder
    comment?: SortOrder
    timestamp?: SortOrder
    _count?: CommentCountOrderByAggregateInput
    _avg?: CommentAvgOrderByAggregateInput
    _max?: CommentMaxOrderByAggregateInput
    _min?: CommentMinOrderByAggregateInput
    _sum?: CommentSumOrderByAggregateInput
  }

  export type CommentScalarWhereWithAggregatesInput = {
    AND?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    OR?: CommentScalarWhereWithAggregatesInput[]
    NOT?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    id_comment?: IntWithAggregatesFilter<"Comment"> | number
    newsId?: IntWithAggregatesFilter<"Comment"> | number
    userId?: IntWithAggregatesFilter<"Comment"> | number
    comment?: StringWithAggregatesFilter<"Comment"> | string
    timestamp?: DateTimeWithAggregatesFilter<"Comment"> | Date | string
  }

  export type PendingWhereInput = {
    AND?: PendingWhereInput | PendingWhereInput[]
    OR?: PendingWhereInput[]
    NOT?: PendingWhereInput | PendingWhereInput[]
    id_pending?: IntFilter<"Pending"> | number
    newsId?: IntFilter<"Pending"> | number
    status?: EnumStatus_NewsFilter<"Pending"> | $Enums.Status_News
    note?: StringNullableFilter<"Pending"> | string | null
    created_at?: DateTimeFilter<"Pending"> | Date | string
    resolved_at?: DateTimeNullableFilter<"Pending"> | Date | string | null
    news?: XOR<NewsScalarRelationFilter, NewsWhereInput>
  }

  export type PendingOrderByWithRelationInput = {
    id_pending?: SortOrder
    newsId?: SortOrder
    status?: SortOrder
    note?: SortOrderInput | SortOrder
    created_at?: SortOrder
    resolved_at?: SortOrderInput | SortOrder
    news?: NewsOrderByWithRelationInput
  }

  export type PendingWhereUniqueInput = Prisma.AtLeast<{
    id_pending?: number
    AND?: PendingWhereInput | PendingWhereInput[]
    OR?: PendingWhereInput[]
    NOT?: PendingWhereInput | PendingWhereInput[]
    newsId?: IntFilter<"Pending"> | number
    status?: EnumStatus_NewsFilter<"Pending"> | $Enums.Status_News
    note?: StringNullableFilter<"Pending"> | string | null
    created_at?: DateTimeFilter<"Pending"> | Date | string
    resolved_at?: DateTimeNullableFilter<"Pending"> | Date | string | null
    news?: XOR<NewsScalarRelationFilter, NewsWhereInput>
  }, "id_pending">

  export type PendingOrderByWithAggregationInput = {
    id_pending?: SortOrder
    newsId?: SortOrder
    status?: SortOrder
    note?: SortOrderInput | SortOrder
    created_at?: SortOrder
    resolved_at?: SortOrderInput | SortOrder
    _count?: PendingCountOrderByAggregateInput
    _avg?: PendingAvgOrderByAggregateInput
    _max?: PendingMaxOrderByAggregateInput
    _min?: PendingMinOrderByAggregateInput
    _sum?: PendingSumOrderByAggregateInput
  }

  export type PendingScalarWhereWithAggregatesInput = {
    AND?: PendingScalarWhereWithAggregatesInput | PendingScalarWhereWithAggregatesInput[]
    OR?: PendingScalarWhereWithAggregatesInput[]
    NOT?: PendingScalarWhereWithAggregatesInput | PendingScalarWhereWithAggregatesInput[]
    id_pending?: IntWithAggregatesFilter<"Pending"> | number
    newsId?: IntWithAggregatesFilter<"Pending"> | number
    status?: EnumStatus_NewsWithAggregatesFilter<"Pending"> | $Enums.Status_News
    note?: StringNullableWithAggregatesFilter<"Pending"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Pending"> | Date | string
    resolved_at?: DateTimeNullableWithAggregatesFilter<"Pending"> | Date | string | null
  }

  export type MarkWhereInput = {
    AND?: MarkWhereInput | MarkWhereInput[]
    OR?: MarkWhereInput[]
    NOT?: MarkWhereInput | MarkWhereInput[]
    id_mark?: IntFilter<"Mark"> | number
    taskId?: IntFilter<"Mark"> | number
    userId?: IntFilter<"Mark"> | number
    mark?: IntFilter<"Mark"> | number
    created_at?: DateTimeFilter<"Mark"> | Date | string
    updated_at?: DateTimeNullableFilter<"Mark"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"Mark"> | Date | string | null
    id_task?: XOR<TaskScalarRelationFilter, TaskWhereInput>
    id_user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type MarkOrderByWithRelationInput = {
    id_mark?: SortOrder
    taskId?: SortOrder
    userId?: SortOrder
    mark?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    id_task?: TaskOrderByWithRelationInput
    id_user?: UserOrderByWithRelationInput
  }

  export type MarkWhereUniqueInput = Prisma.AtLeast<{
    id_mark?: number
    userId_taskId?: MarkUserIdTaskIdCompoundUniqueInput
    AND?: MarkWhereInput | MarkWhereInput[]
    OR?: MarkWhereInput[]
    NOT?: MarkWhereInput | MarkWhereInput[]
    taskId?: IntFilter<"Mark"> | number
    userId?: IntFilter<"Mark"> | number
    mark?: IntFilter<"Mark"> | number
    created_at?: DateTimeFilter<"Mark"> | Date | string
    updated_at?: DateTimeNullableFilter<"Mark"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"Mark"> | Date | string | null
    id_task?: XOR<TaskScalarRelationFilter, TaskWhereInput>
    id_user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id_mark" | "userId_taskId">

  export type MarkOrderByWithAggregationInput = {
    id_mark?: SortOrder
    taskId?: SortOrder
    userId?: SortOrder
    mark?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: MarkCountOrderByAggregateInput
    _avg?: MarkAvgOrderByAggregateInput
    _max?: MarkMaxOrderByAggregateInput
    _min?: MarkMinOrderByAggregateInput
    _sum?: MarkSumOrderByAggregateInput
  }

  export type MarkScalarWhereWithAggregatesInput = {
    AND?: MarkScalarWhereWithAggregatesInput | MarkScalarWhereWithAggregatesInput[]
    OR?: MarkScalarWhereWithAggregatesInput[]
    NOT?: MarkScalarWhereWithAggregatesInput | MarkScalarWhereWithAggregatesInput[]
    id_mark?: IntWithAggregatesFilter<"Mark"> | number
    taskId?: IntWithAggregatesFilter<"Mark"> | number
    userId?: IntWithAggregatesFilter<"Mark"> | number
    mark?: IntWithAggregatesFilter<"Mark"> | number
    created_at?: DateTimeWithAggregatesFilter<"Mark"> | Date | string
    updated_at?: DateTimeNullableWithAggregatesFilter<"Mark"> | Date | string | null
    deleted_at?: DateTimeNullableWithAggregatesFilter<"Mark"> | Date | string | null
  }

  export type UserCreateInput = {
    name: string
    username: string
    email: string
    password: string
    role?: $Enums.Role
    profile_picture?: string | null
    refresh_token?: string | null
    university?: string | null
    major?: string | null
    internship_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    news?: NewsCreateNestedManyWithoutAuthorInput
    comments?: CommentCreateNestedManyWithoutUserInput
    likes?: LikeCreateNestedManyWithoutUserInput
    saves?: SaveCreateNestedManyWithoutUserInput
    marks?: MarkCreateNestedManyWithoutId_userInput
  }

  export type UserUncheckedCreateInput = {
    id_user?: number
    name: string
    username: string
    email: string
    password: string
    role?: $Enums.Role
    profile_picture?: string | null
    refresh_token?: string | null
    university?: string | null
    major?: string | null
    internship_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    news?: NewsUncheckedCreateNestedManyWithoutAuthorInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    likes?: LikeUncheckedCreateNestedManyWithoutUserInput
    saves?: SaveUncheckedCreateNestedManyWithoutUserInput
    marks?: MarkUncheckedCreateNestedManyWithoutId_userInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    university?: NullableStringFieldUpdateOperationsInput | string | null
    major?: NullableStringFieldUpdateOperationsInput | string | null
    internship_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    news?: NewsUpdateManyWithoutAuthorNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    likes?: LikeUpdateManyWithoutUserNestedInput
    saves?: SaveUpdateManyWithoutUserNestedInput
    marks?: MarkUpdateManyWithoutId_userNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id_user?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    university?: NullableStringFieldUpdateOperationsInput | string | null
    major?: NullableStringFieldUpdateOperationsInput | string | null
    internship_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    news?: NewsUncheckedUpdateManyWithoutAuthorNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    likes?: LikeUncheckedUpdateManyWithoutUserNestedInput
    saves?: SaveUncheckedUpdateManyWithoutUserNestedInput
    marks?: MarkUncheckedUpdateManyWithoutId_userNestedInput
  }

  export type UserCreateManyInput = {
    id_user?: number
    name: string
    username: string
    email: string
    password: string
    role?: $Enums.Role
    profile_picture?: string | null
    refresh_token?: string | null
    university?: string | null
    major?: string | null
    internship_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    university?: NullableStringFieldUpdateOperationsInput | string | null
    major?: NullableStringFieldUpdateOperationsInput | string | null
    internship_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id_user?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    university?: NullableStringFieldUpdateOperationsInput | string | null
    major?: NullableStringFieldUpdateOperationsInput | string | null
    internship_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TaskCreateInput = {
    task_title: string
    task_deadline: Date | string
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    news?: NewsCreateNestedManyWithoutTaskInput
    marks?: MarkCreateNestedManyWithoutId_taskInput
  }

  export type TaskUncheckedCreateInput = {
    id_task?: number
    task_title: string
    task_deadline: Date | string
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    news?: NewsUncheckedCreateNestedManyWithoutTaskInput
    marks?: MarkUncheckedCreateNestedManyWithoutId_taskInput
  }

  export type TaskUpdateInput = {
    task_title?: StringFieldUpdateOperationsInput | string
    task_deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    news?: NewsUpdateManyWithoutTaskNestedInput
    marks?: MarkUpdateManyWithoutId_taskNestedInput
  }

  export type TaskUncheckedUpdateInput = {
    id_task?: IntFieldUpdateOperationsInput | number
    task_title?: StringFieldUpdateOperationsInput | string
    task_deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    news?: NewsUncheckedUpdateManyWithoutTaskNestedInput
    marks?: MarkUncheckedUpdateManyWithoutId_taskNestedInput
  }

  export type TaskCreateManyInput = {
    id_task?: number
    task_title: string
    task_deadline: Date | string
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type TaskUpdateManyMutationInput = {
    task_title?: StringFieldUpdateOperationsInput | string
    task_deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TaskUncheckedUpdateManyInput = {
    id_task?: IntFieldUpdateOperationsInput | number
    task_title?: StringFieldUpdateOperationsInput | string
    task_deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CategoryCreateInput = {
    category: string
    status: $Enums.Status_Category
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    news?: NewsCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id_category?: number
    category: string
    status: $Enums.Status_Category
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    news?: NewsUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    category?: StringFieldUpdateOperationsInput | string
    status?: EnumStatus_CategoryFieldUpdateOperationsInput | $Enums.Status_Category
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    news?: NewsUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id_category?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    status?: EnumStatus_CategoryFieldUpdateOperationsInput | $Enums.Status_Category
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    news?: NewsUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id_category?: number
    category: string
    status: $Enums.Status_Category
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type CategoryUpdateManyMutationInput = {
    category?: StringFieldUpdateOperationsInput | string
    status?: EnumStatus_CategoryFieldUpdateOperationsInput | $Enums.Status_Category
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CategoryUncheckedUpdateManyInput = {
    id_category?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    status?: EnumStatus_CategoryFieldUpdateOperationsInput | $Enums.Status_Category
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type NewsCreateInput = {
    title: string
    content: string
    image: string
    status?: $Enums.Status_News | null
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    task: TaskCreateNestedOneWithoutNewsInput
    category: CategoryCreateNestedOneWithoutNewsInput
    author: UserCreateNestedOneWithoutNewsInput
    likes?: LikeCreateNestedManyWithoutNewsInput
    saves?: SaveCreateNestedManyWithoutNewsInput
    comments?: CommentCreateNestedManyWithoutNewsInput
    pending?: PendingCreateNestedManyWithoutNewsInput
  }

  export type NewsUncheckedCreateInput = {
    id_news?: number
    taskId: number
    categoryId: number
    authorId: number
    title: string
    content: string
    image: string
    status?: $Enums.Status_News | null
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    likes?: LikeUncheckedCreateNestedManyWithoutNewsInput
    saves?: SaveUncheckedCreateNestedManyWithoutNewsInput
    comments?: CommentUncheckedCreateNestedManyWithoutNewsInput
    pending?: PendingUncheckedCreateNestedManyWithoutNewsInput
  }

  export type NewsUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    status?: NullableEnumStatus_NewsFieldUpdateOperationsInput | $Enums.Status_News | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    task?: TaskUpdateOneRequiredWithoutNewsNestedInput
    category?: CategoryUpdateOneRequiredWithoutNewsNestedInput
    author?: UserUpdateOneRequiredWithoutNewsNestedInput
    likes?: LikeUpdateManyWithoutNewsNestedInput
    saves?: SaveUpdateManyWithoutNewsNestedInput
    comments?: CommentUpdateManyWithoutNewsNestedInput
    pending?: PendingUpdateManyWithoutNewsNestedInput
  }

  export type NewsUncheckedUpdateInput = {
    id_news?: IntFieldUpdateOperationsInput | number
    taskId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    authorId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    status?: NullableEnumStatus_NewsFieldUpdateOperationsInput | $Enums.Status_News | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    likes?: LikeUncheckedUpdateManyWithoutNewsNestedInput
    saves?: SaveUncheckedUpdateManyWithoutNewsNestedInput
    comments?: CommentUncheckedUpdateManyWithoutNewsNestedInput
    pending?: PendingUncheckedUpdateManyWithoutNewsNestedInput
  }

  export type NewsCreateManyInput = {
    id_news?: number
    taskId: number
    categoryId: number
    authorId: number
    title: string
    content: string
    image: string
    status?: $Enums.Status_News | null
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type NewsUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    status?: NullableEnumStatus_NewsFieldUpdateOperationsInput | $Enums.Status_News | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type NewsUncheckedUpdateManyInput = {
    id_news?: IntFieldUpdateOperationsInput | number
    taskId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    authorId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    status?: NullableEnumStatus_NewsFieldUpdateOperationsInput | $Enums.Status_News | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LikeCreateInput = {
    like: boolean
    timestamp?: Date | string
    news: NewsCreateNestedOneWithoutLikesInput
    user: UserCreateNestedOneWithoutLikesInput
  }

  export type LikeUncheckedCreateInput = {
    id_like?: number
    newsId: number
    userId: number
    like: boolean
    timestamp?: Date | string
  }

  export type LikeUpdateInput = {
    like?: BoolFieldUpdateOperationsInput | boolean
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    news?: NewsUpdateOneRequiredWithoutLikesNestedInput
    user?: UserUpdateOneRequiredWithoutLikesNestedInput
  }

  export type LikeUncheckedUpdateInput = {
    id_like?: IntFieldUpdateOperationsInput | number
    newsId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    like?: BoolFieldUpdateOperationsInput | boolean
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikeCreateManyInput = {
    id_like?: number
    newsId: number
    userId: number
    like: boolean
    timestamp?: Date | string
  }

  export type LikeUpdateManyMutationInput = {
    like?: BoolFieldUpdateOperationsInput | boolean
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikeUncheckedUpdateManyInput = {
    id_like?: IntFieldUpdateOperationsInput | number
    newsId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    like?: BoolFieldUpdateOperationsInput | boolean
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SaveCreateInput = {
    saved_news: boolean
    timestamp?: Date | string
    news: NewsCreateNestedOneWithoutSavesInput
    user: UserCreateNestedOneWithoutSavesInput
  }

  export type SaveUncheckedCreateInput = {
    id_save?: number
    newsId: number
    userId: number
    saved_news: boolean
    timestamp?: Date | string
  }

  export type SaveUpdateInput = {
    saved_news?: BoolFieldUpdateOperationsInput | boolean
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    news?: NewsUpdateOneRequiredWithoutSavesNestedInput
    user?: UserUpdateOneRequiredWithoutSavesNestedInput
  }

  export type SaveUncheckedUpdateInput = {
    id_save?: IntFieldUpdateOperationsInput | number
    newsId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    saved_news?: BoolFieldUpdateOperationsInput | boolean
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SaveCreateManyInput = {
    id_save?: number
    newsId: number
    userId: number
    saved_news: boolean
    timestamp?: Date | string
  }

  export type SaveUpdateManyMutationInput = {
    saved_news?: BoolFieldUpdateOperationsInput | boolean
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SaveUncheckedUpdateManyInput = {
    id_save?: IntFieldUpdateOperationsInput | number
    newsId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    saved_news?: BoolFieldUpdateOperationsInput | boolean
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateInput = {
    comment: string
    timestamp?: Date | string
    news: NewsCreateNestedOneWithoutCommentsInput
    user: UserCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateInput = {
    id_comment?: number
    newsId: number
    userId: number
    comment: string
    timestamp?: Date | string
  }

  export type CommentUpdateInput = {
    comment?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    news?: NewsUpdateOneRequiredWithoutCommentsNestedInput
    user?: UserUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateInput = {
    id_comment?: IntFieldUpdateOperationsInput | number
    newsId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateManyInput = {
    id_comment?: number
    newsId: number
    userId: number
    comment: string
    timestamp?: Date | string
  }

  export type CommentUpdateManyMutationInput = {
    comment?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyInput = {
    id_comment?: IntFieldUpdateOperationsInput | number
    newsId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PendingCreateInput = {
    status?: $Enums.Status_News
    note?: string | null
    created_at?: Date | string
    resolved_at?: Date | string | null
    news: NewsCreateNestedOneWithoutPendingInput
  }

  export type PendingUncheckedCreateInput = {
    id_pending?: number
    newsId: number
    status?: $Enums.Status_News
    note?: string | null
    created_at?: Date | string
    resolved_at?: Date | string | null
  }

  export type PendingUpdateInput = {
    status?: EnumStatus_NewsFieldUpdateOperationsInput | $Enums.Status_News
    note?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    resolved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    news?: NewsUpdateOneRequiredWithoutPendingNestedInput
  }

  export type PendingUncheckedUpdateInput = {
    id_pending?: IntFieldUpdateOperationsInput | number
    newsId?: IntFieldUpdateOperationsInput | number
    status?: EnumStatus_NewsFieldUpdateOperationsInput | $Enums.Status_News
    note?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    resolved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PendingCreateManyInput = {
    id_pending?: number
    newsId: number
    status?: $Enums.Status_News
    note?: string | null
    created_at?: Date | string
    resolved_at?: Date | string | null
  }

  export type PendingUpdateManyMutationInput = {
    status?: EnumStatus_NewsFieldUpdateOperationsInput | $Enums.Status_News
    note?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    resolved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PendingUncheckedUpdateManyInput = {
    id_pending?: IntFieldUpdateOperationsInput | number
    newsId?: IntFieldUpdateOperationsInput | number
    status?: EnumStatus_NewsFieldUpdateOperationsInput | $Enums.Status_News
    note?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    resolved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MarkCreateInput = {
    mark: number
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    id_task: TaskCreateNestedOneWithoutMarksInput
    id_user: UserCreateNestedOneWithoutMarksInput
  }

  export type MarkUncheckedCreateInput = {
    id_mark?: number
    taskId: number
    userId: number
    mark: number
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type MarkUpdateInput = {
    mark?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_task?: TaskUpdateOneRequiredWithoutMarksNestedInput
    id_user?: UserUpdateOneRequiredWithoutMarksNestedInput
  }

  export type MarkUncheckedUpdateInput = {
    id_mark?: IntFieldUpdateOperationsInput | number
    taskId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    mark?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MarkCreateManyInput = {
    id_mark?: number
    taskId: number
    userId: number
    mark: number
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type MarkUpdateManyMutationInput = {
    mark?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MarkUncheckedUpdateManyInput = {
    id_mark?: IntFieldUpdateOperationsInput | number
    taskId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    mark?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type NewsListRelationFilter = {
    every?: NewsWhereInput
    some?: NewsWhereInput
    none?: NewsWhereInput
  }

  export type CommentListRelationFilter = {
    every?: CommentWhereInput
    some?: CommentWhereInput
    none?: CommentWhereInput
  }

  export type LikeListRelationFilter = {
    every?: LikeWhereInput
    some?: LikeWhereInput
    none?: LikeWhereInput
  }

  export type SaveListRelationFilter = {
    every?: SaveWhereInput
    some?: SaveWhereInput
    none?: SaveWhereInput
  }

  export type MarkListRelationFilter = {
    every?: MarkWhereInput
    some?: MarkWhereInput
    none?: MarkWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type NewsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LikeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SaveOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MarkOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id_user?: SortOrder
    name?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    profile_picture?: SortOrder
    refresh_token?: SortOrder
    university?: SortOrder
    major?: SortOrder
    internship_date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id_user?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id_user?: SortOrder
    name?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    profile_picture?: SortOrder
    refresh_token?: SortOrder
    university?: SortOrder
    major?: SortOrder
    internship_date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id_user?: SortOrder
    name?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    profile_picture?: SortOrder
    refresh_token?: SortOrder
    university?: SortOrder
    major?: SortOrder
    internship_date?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id_user?: SortOrder
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type TaskCountOrderByAggregateInput = {
    id_task?: SortOrder
    task_title?: SortOrder
    task_deadline?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type TaskAvgOrderByAggregateInput = {
    id_task?: SortOrder
  }

  export type TaskMaxOrderByAggregateInput = {
    id_task?: SortOrder
    task_title?: SortOrder
    task_deadline?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type TaskMinOrderByAggregateInput = {
    id_task?: SortOrder
    task_title?: SortOrder
    task_deadline?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type TaskSumOrderByAggregateInput = {
    id_task?: SortOrder
  }

  export type EnumStatus_CategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.Status_Category | EnumStatus_CategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Status_Category[] | ListEnumStatus_CategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status_Category[] | ListEnumStatus_CategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumStatus_CategoryFilter<$PrismaModel> | $Enums.Status_Category
  }

  export type CategoryCountOrderByAggregateInput = {
    id_category?: SortOrder
    category?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    id_category?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id_category?: SortOrder
    category?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id_category?: SortOrder
    category?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    id_category?: SortOrder
  }

  export type EnumStatus_CategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status_Category | EnumStatus_CategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Status_Category[] | ListEnumStatus_CategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status_Category[] | ListEnumStatus_CategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumStatus_CategoryWithAggregatesFilter<$PrismaModel> | $Enums.Status_Category
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatus_CategoryFilter<$PrismaModel>
    _max?: NestedEnumStatus_CategoryFilter<$PrismaModel>
  }

  export type EnumStatus_NewsNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Status_News | EnumStatus_NewsFieldRefInput<$PrismaModel> | null
    in?: $Enums.Status_News[] | ListEnumStatus_NewsFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Status_News[] | ListEnumStatus_NewsFieldRefInput<$PrismaModel> | null
    not?: NestedEnumStatus_NewsNullableFilter<$PrismaModel> | $Enums.Status_News | null
  }

  export type TaskScalarRelationFilter = {
    is?: TaskWhereInput
    isNot?: TaskWhereInput
  }

  export type CategoryScalarRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PendingListRelationFilter = {
    every?: PendingWhereInput
    some?: PendingWhereInput
    none?: PendingWhereInput
  }

  export type PendingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NewsCountOrderByAggregateInput = {
    id_news?: SortOrder
    taskId?: SortOrder
    categoryId?: SortOrder
    authorId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    image?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type NewsAvgOrderByAggregateInput = {
    id_news?: SortOrder
    taskId?: SortOrder
    categoryId?: SortOrder
    authorId?: SortOrder
  }

  export type NewsMaxOrderByAggregateInput = {
    id_news?: SortOrder
    taskId?: SortOrder
    categoryId?: SortOrder
    authorId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    image?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type NewsMinOrderByAggregateInput = {
    id_news?: SortOrder
    taskId?: SortOrder
    categoryId?: SortOrder
    authorId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    image?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type NewsSumOrderByAggregateInput = {
    id_news?: SortOrder
    taskId?: SortOrder
    categoryId?: SortOrder
    authorId?: SortOrder
  }

  export type EnumStatus_NewsNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status_News | EnumStatus_NewsFieldRefInput<$PrismaModel> | null
    in?: $Enums.Status_News[] | ListEnumStatus_NewsFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Status_News[] | ListEnumStatus_NewsFieldRefInput<$PrismaModel> | null
    not?: NestedEnumStatus_NewsNullableWithAggregatesFilter<$PrismaModel> | $Enums.Status_News | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumStatus_NewsNullableFilter<$PrismaModel>
    _max?: NestedEnumStatus_NewsNullableFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NewsScalarRelationFilter = {
    is?: NewsWhereInput
    isNot?: NewsWhereInput
  }

  export type LikeCountOrderByAggregateInput = {
    id_like?: SortOrder
    newsId?: SortOrder
    userId?: SortOrder
    like?: SortOrder
    timestamp?: SortOrder
  }

  export type LikeAvgOrderByAggregateInput = {
    id_like?: SortOrder
    newsId?: SortOrder
    userId?: SortOrder
  }

  export type LikeMaxOrderByAggregateInput = {
    id_like?: SortOrder
    newsId?: SortOrder
    userId?: SortOrder
    like?: SortOrder
    timestamp?: SortOrder
  }

  export type LikeMinOrderByAggregateInput = {
    id_like?: SortOrder
    newsId?: SortOrder
    userId?: SortOrder
    like?: SortOrder
    timestamp?: SortOrder
  }

  export type LikeSumOrderByAggregateInput = {
    id_like?: SortOrder
    newsId?: SortOrder
    userId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type SaveCountOrderByAggregateInput = {
    id_save?: SortOrder
    newsId?: SortOrder
    userId?: SortOrder
    saved_news?: SortOrder
    timestamp?: SortOrder
  }

  export type SaveAvgOrderByAggregateInput = {
    id_save?: SortOrder
    newsId?: SortOrder
    userId?: SortOrder
  }

  export type SaveMaxOrderByAggregateInput = {
    id_save?: SortOrder
    newsId?: SortOrder
    userId?: SortOrder
    saved_news?: SortOrder
    timestamp?: SortOrder
  }

  export type SaveMinOrderByAggregateInput = {
    id_save?: SortOrder
    newsId?: SortOrder
    userId?: SortOrder
    saved_news?: SortOrder
    timestamp?: SortOrder
  }

  export type SaveSumOrderByAggregateInput = {
    id_save?: SortOrder
    newsId?: SortOrder
    userId?: SortOrder
  }

  export type CommentCountOrderByAggregateInput = {
    id_comment?: SortOrder
    newsId?: SortOrder
    userId?: SortOrder
    comment?: SortOrder
    timestamp?: SortOrder
  }

  export type CommentAvgOrderByAggregateInput = {
    id_comment?: SortOrder
    newsId?: SortOrder
    userId?: SortOrder
  }

  export type CommentMaxOrderByAggregateInput = {
    id_comment?: SortOrder
    newsId?: SortOrder
    userId?: SortOrder
    comment?: SortOrder
    timestamp?: SortOrder
  }

  export type CommentMinOrderByAggregateInput = {
    id_comment?: SortOrder
    newsId?: SortOrder
    userId?: SortOrder
    comment?: SortOrder
    timestamp?: SortOrder
  }

  export type CommentSumOrderByAggregateInput = {
    id_comment?: SortOrder
    newsId?: SortOrder
    userId?: SortOrder
  }

  export type EnumStatus_NewsFilter<$PrismaModel = never> = {
    equals?: $Enums.Status_News | EnumStatus_NewsFieldRefInput<$PrismaModel>
    in?: $Enums.Status_News[] | ListEnumStatus_NewsFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status_News[] | ListEnumStatus_NewsFieldRefInput<$PrismaModel>
    not?: NestedEnumStatus_NewsFilter<$PrismaModel> | $Enums.Status_News
  }

  export type PendingCountOrderByAggregateInput = {
    id_pending?: SortOrder
    newsId?: SortOrder
    status?: SortOrder
    note?: SortOrder
    created_at?: SortOrder
    resolved_at?: SortOrder
  }

  export type PendingAvgOrderByAggregateInput = {
    id_pending?: SortOrder
    newsId?: SortOrder
  }

  export type PendingMaxOrderByAggregateInput = {
    id_pending?: SortOrder
    newsId?: SortOrder
    status?: SortOrder
    note?: SortOrder
    created_at?: SortOrder
    resolved_at?: SortOrder
  }

  export type PendingMinOrderByAggregateInput = {
    id_pending?: SortOrder
    newsId?: SortOrder
    status?: SortOrder
    note?: SortOrder
    created_at?: SortOrder
    resolved_at?: SortOrder
  }

  export type PendingSumOrderByAggregateInput = {
    id_pending?: SortOrder
    newsId?: SortOrder
  }

  export type EnumStatus_NewsWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status_News | EnumStatus_NewsFieldRefInput<$PrismaModel>
    in?: $Enums.Status_News[] | ListEnumStatus_NewsFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status_News[] | ListEnumStatus_NewsFieldRefInput<$PrismaModel>
    not?: NestedEnumStatus_NewsWithAggregatesFilter<$PrismaModel> | $Enums.Status_News
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatus_NewsFilter<$PrismaModel>
    _max?: NestedEnumStatus_NewsFilter<$PrismaModel>
  }

  export type MarkUserIdTaskIdCompoundUniqueInput = {
    userId: number
    taskId: number
  }

  export type MarkCountOrderByAggregateInput = {
    id_mark?: SortOrder
    taskId?: SortOrder
    userId?: SortOrder
    mark?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type MarkAvgOrderByAggregateInput = {
    id_mark?: SortOrder
    taskId?: SortOrder
    userId?: SortOrder
    mark?: SortOrder
  }

  export type MarkMaxOrderByAggregateInput = {
    id_mark?: SortOrder
    taskId?: SortOrder
    userId?: SortOrder
    mark?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type MarkMinOrderByAggregateInput = {
    id_mark?: SortOrder
    taskId?: SortOrder
    userId?: SortOrder
    mark?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type MarkSumOrderByAggregateInput = {
    id_mark?: SortOrder
    taskId?: SortOrder
    userId?: SortOrder
    mark?: SortOrder
  }

  export type NewsCreateNestedManyWithoutAuthorInput = {
    create?: XOR<NewsCreateWithoutAuthorInput, NewsUncheckedCreateWithoutAuthorInput> | NewsCreateWithoutAuthorInput[] | NewsUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: NewsCreateOrConnectWithoutAuthorInput | NewsCreateOrConnectWithoutAuthorInput[]
    createMany?: NewsCreateManyAuthorInputEnvelope
    connect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
  }

  export type CommentCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type LikeCreateNestedManyWithoutUserInput = {
    create?: XOR<LikeCreateWithoutUserInput, LikeUncheckedCreateWithoutUserInput> | LikeCreateWithoutUserInput[] | LikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutUserInput | LikeCreateOrConnectWithoutUserInput[]
    createMany?: LikeCreateManyUserInputEnvelope
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
  }

  export type SaveCreateNestedManyWithoutUserInput = {
    create?: XOR<SaveCreateWithoutUserInput, SaveUncheckedCreateWithoutUserInput> | SaveCreateWithoutUserInput[] | SaveUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SaveCreateOrConnectWithoutUserInput | SaveCreateOrConnectWithoutUserInput[]
    createMany?: SaveCreateManyUserInputEnvelope
    connect?: SaveWhereUniqueInput | SaveWhereUniqueInput[]
  }

  export type MarkCreateNestedManyWithoutId_userInput = {
    create?: XOR<MarkCreateWithoutId_userInput, MarkUncheckedCreateWithoutId_userInput> | MarkCreateWithoutId_userInput[] | MarkUncheckedCreateWithoutId_userInput[]
    connectOrCreate?: MarkCreateOrConnectWithoutId_userInput | MarkCreateOrConnectWithoutId_userInput[]
    createMany?: MarkCreateManyId_userInputEnvelope
    connect?: MarkWhereUniqueInput | MarkWhereUniqueInput[]
  }

  export type NewsUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<NewsCreateWithoutAuthorInput, NewsUncheckedCreateWithoutAuthorInput> | NewsCreateWithoutAuthorInput[] | NewsUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: NewsCreateOrConnectWithoutAuthorInput | NewsCreateOrConnectWithoutAuthorInput[]
    createMany?: NewsCreateManyAuthorInputEnvelope
    connect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type LikeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LikeCreateWithoutUserInput, LikeUncheckedCreateWithoutUserInput> | LikeCreateWithoutUserInput[] | LikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutUserInput | LikeCreateOrConnectWithoutUserInput[]
    createMany?: LikeCreateManyUserInputEnvelope
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
  }

  export type SaveUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SaveCreateWithoutUserInput, SaveUncheckedCreateWithoutUserInput> | SaveCreateWithoutUserInput[] | SaveUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SaveCreateOrConnectWithoutUserInput | SaveCreateOrConnectWithoutUserInput[]
    createMany?: SaveCreateManyUserInputEnvelope
    connect?: SaveWhereUniqueInput | SaveWhereUniqueInput[]
  }

  export type MarkUncheckedCreateNestedManyWithoutId_userInput = {
    create?: XOR<MarkCreateWithoutId_userInput, MarkUncheckedCreateWithoutId_userInput> | MarkCreateWithoutId_userInput[] | MarkUncheckedCreateWithoutId_userInput[]
    connectOrCreate?: MarkCreateOrConnectWithoutId_userInput | MarkCreateOrConnectWithoutId_userInput[]
    createMany?: MarkCreateManyId_userInputEnvelope
    connect?: MarkWhereUniqueInput | MarkWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NewsUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<NewsCreateWithoutAuthorInput, NewsUncheckedCreateWithoutAuthorInput> | NewsCreateWithoutAuthorInput[] | NewsUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: NewsCreateOrConnectWithoutAuthorInput | NewsCreateOrConnectWithoutAuthorInput[]
    upsert?: NewsUpsertWithWhereUniqueWithoutAuthorInput | NewsUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: NewsCreateManyAuthorInputEnvelope
    set?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    disconnect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    delete?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    connect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    update?: NewsUpdateWithWhereUniqueWithoutAuthorInput | NewsUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: NewsUpdateManyWithWhereWithoutAuthorInput | NewsUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: NewsScalarWhereInput | NewsScalarWhereInput[]
  }

  export type CommentUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutUserInput | CommentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutUserInput | CommentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutUserInput | CommentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type LikeUpdateManyWithoutUserNestedInput = {
    create?: XOR<LikeCreateWithoutUserInput, LikeUncheckedCreateWithoutUserInput> | LikeCreateWithoutUserInput[] | LikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutUserInput | LikeCreateOrConnectWithoutUserInput[]
    upsert?: LikeUpsertWithWhereUniqueWithoutUserInput | LikeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LikeCreateManyUserInputEnvelope
    set?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    disconnect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    delete?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    update?: LikeUpdateWithWhereUniqueWithoutUserInput | LikeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LikeUpdateManyWithWhereWithoutUserInput | LikeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LikeScalarWhereInput | LikeScalarWhereInput[]
  }

  export type SaveUpdateManyWithoutUserNestedInput = {
    create?: XOR<SaveCreateWithoutUserInput, SaveUncheckedCreateWithoutUserInput> | SaveCreateWithoutUserInput[] | SaveUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SaveCreateOrConnectWithoutUserInput | SaveCreateOrConnectWithoutUserInput[]
    upsert?: SaveUpsertWithWhereUniqueWithoutUserInput | SaveUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SaveCreateManyUserInputEnvelope
    set?: SaveWhereUniqueInput | SaveWhereUniqueInput[]
    disconnect?: SaveWhereUniqueInput | SaveWhereUniqueInput[]
    delete?: SaveWhereUniqueInput | SaveWhereUniqueInput[]
    connect?: SaveWhereUniqueInput | SaveWhereUniqueInput[]
    update?: SaveUpdateWithWhereUniqueWithoutUserInput | SaveUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SaveUpdateManyWithWhereWithoutUserInput | SaveUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SaveScalarWhereInput | SaveScalarWhereInput[]
  }

  export type MarkUpdateManyWithoutId_userNestedInput = {
    create?: XOR<MarkCreateWithoutId_userInput, MarkUncheckedCreateWithoutId_userInput> | MarkCreateWithoutId_userInput[] | MarkUncheckedCreateWithoutId_userInput[]
    connectOrCreate?: MarkCreateOrConnectWithoutId_userInput | MarkCreateOrConnectWithoutId_userInput[]
    upsert?: MarkUpsertWithWhereUniqueWithoutId_userInput | MarkUpsertWithWhereUniqueWithoutId_userInput[]
    createMany?: MarkCreateManyId_userInputEnvelope
    set?: MarkWhereUniqueInput | MarkWhereUniqueInput[]
    disconnect?: MarkWhereUniqueInput | MarkWhereUniqueInput[]
    delete?: MarkWhereUniqueInput | MarkWhereUniqueInput[]
    connect?: MarkWhereUniqueInput | MarkWhereUniqueInput[]
    update?: MarkUpdateWithWhereUniqueWithoutId_userInput | MarkUpdateWithWhereUniqueWithoutId_userInput[]
    updateMany?: MarkUpdateManyWithWhereWithoutId_userInput | MarkUpdateManyWithWhereWithoutId_userInput[]
    deleteMany?: MarkScalarWhereInput | MarkScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NewsUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<NewsCreateWithoutAuthorInput, NewsUncheckedCreateWithoutAuthorInput> | NewsCreateWithoutAuthorInput[] | NewsUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: NewsCreateOrConnectWithoutAuthorInput | NewsCreateOrConnectWithoutAuthorInput[]
    upsert?: NewsUpsertWithWhereUniqueWithoutAuthorInput | NewsUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: NewsCreateManyAuthorInputEnvelope
    set?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    disconnect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    delete?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    connect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    update?: NewsUpdateWithWhereUniqueWithoutAuthorInput | NewsUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: NewsUpdateManyWithWhereWithoutAuthorInput | NewsUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: NewsScalarWhereInput | NewsScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput> | CommentCreateWithoutUserInput[] | CommentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutUserInput | CommentCreateOrConnectWithoutUserInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutUserInput | CommentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommentCreateManyUserInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutUserInput | CommentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutUserInput | CommentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type LikeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LikeCreateWithoutUserInput, LikeUncheckedCreateWithoutUserInput> | LikeCreateWithoutUserInput[] | LikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutUserInput | LikeCreateOrConnectWithoutUserInput[]
    upsert?: LikeUpsertWithWhereUniqueWithoutUserInput | LikeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LikeCreateManyUserInputEnvelope
    set?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    disconnect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    delete?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    update?: LikeUpdateWithWhereUniqueWithoutUserInput | LikeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LikeUpdateManyWithWhereWithoutUserInput | LikeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LikeScalarWhereInput | LikeScalarWhereInput[]
  }

  export type SaveUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SaveCreateWithoutUserInput, SaveUncheckedCreateWithoutUserInput> | SaveCreateWithoutUserInput[] | SaveUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SaveCreateOrConnectWithoutUserInput | SaveCreateOrConnectWithoutUserInput[]
    upsert?: SaveUpsertWithWhereUniqueWithoutUserInput | SaveUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SaveCreateManyUserInputEnvelope
    set?: SaveWhereUniqueInput | SaveWhereUniqueInput[]
    disconnect?: SaveWhereUniqueInput | SaveWhereUniqueInput[]
    delete?: SaveWhereUniqueInput | SaveWhereUniqueInput[]
    connect?: SaveWhereUniqueInput | SaveWhereUniqueInput[]
    update?: SaveUpdateWithWhereUniqueWithoutUserInput | SaveUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SaveUpdateManyWithWhereWithoutUserInput | SaveUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SaveScalarWhereInput | SaveScalarWhereInput[]
  }

  export type MarkUncheckedUpdateManyWithoutId_userNestedInput = {
    create?: XOR<MarkCreateWithoutId_userInput, MarkUncheckedCreateWithoutId_userInput> | MarkCreateWithoutId_userInput[] | MarkUncheckedCreateWithoutId_userInput[]
    connectOrCreate?: MarkCreateOrConnectWithoutId_userInput | MarkCreateOrConnectWithoutId_userInput[]
    upsert?: MarkUpsertWithWhereUniqueWithoutId_userInput | MarkUpsertWithWhereUniqueWithoutId_userInput[]
    createMany?: MarkCreateManyId_userInputEnvelope
    set?: MarkWhereUniqueInput | MarkWhereUniqueInput[]
    disconnect?: MarkWhereUniqueInput | MarkWhereUniqueInput[]
    delete?: MarkWhereUniqueInput | MarkWhereUniqueInput[]
    connect?: MarkWhereUniqueInput | MarkWhereUniqueInput[]
    update?: MarkUpdateWithWhereUniqueWithoutId_userInput | MarkUpdateWithWhereUniqueWithoutId_userInput[]
    updateMany?: MarkUpdateManyWithWhereWithoutId_userInput | MarkUpdateManyWithWhereWithoutId_userInput[]
    deleteMany?: MarkScalarWhereInput | MarkScalarWhereInput[]
  }

  export type NewsCreateNestedManyWithoutTaskInput = {
    create?: XOR<NewsCreateWithoutTaskInput, NewsUncheckedCreateWithoutTaskInput> | NewsCreateWithoutTaskInput[] | NewsUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: NewsCreateOrConnectWithoutTaskInput | NewsCreateOrConnectWithoutTaskInput[]
    createMany?: NewsCreateManyTaskInputEnvelope
    connect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
  }

  export type MarkCreateNestedManyWithoutId_taskInput = {
    create?: XOR<MarkCreateWithoutId_taskInput, MarkUncheckedCreateWithoutId_taskInput> | MarkCreateWithoutId_taskInput[] | MarkUncheckedCreateWithoutId_taskInput[]
    connectOrCreate?: MarkCreateOrConnectWithoutId_taskInput | MarkCreateOrConnectWithoutId_taskInput[]
    createMany?: MarkCreateManyId_taskInputEnvelope
    connect?: MarkWhereUniqueInput | MarkWhereUniqueInput[]
  }

  export type NewsUncheckedCreateNestedManyWithoutTaskInput = {
    create?: XOR<NewsCreateWithoutTaskInput, NewsUncheckedCreateWithoutTaskInput> | NewsCreateWithoutTaskInput[] | NewsUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: NewsCreateOrConnectWithoutTaskInput | NewsCreateOrConnectWithoutTaskInput[]
    createMany?: NewsCreateManyTaskInputEnvelope
    connect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
  }

  export type MarkUncheckedCreateNestedManyWithoutId_taskInput = {
    create?: XOR<MarkCreateWithoutId_taskInput, MarkUncheckedCreateWithoutId_taskInput> | MarkCreateWithoutId_taskInput[] | MarkUncheckedCreateWithoutId_taskInput[]
    connectOrCreate?: MarkCreateOrConnectWithoutId_taskInput | MarkCreateOrConnectWithoutId_taskInput[]
    createMany?: MarkCreateManyId_taskInputEnvelope
    connect?: MarkWhereUniqueInput | MarkWhereUniqueInput[]
  }

  export type NewsUpdateManyWithoutTaskNestedInput = {
    create?: XOR<NewsCreateWithoutTaskInput, NewsUncheckedCreateWithoutTaskInput> | NewsCreateWithoutTaskInput[] | NewsUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: NewsCreateOrConnectWithoutTaskInput | NewsCreateOrConnectWithoutTaskInput[]
    upsert?: NewsUpsertWithWhereUniqueWithoutTaskInput | NewsUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: NewsCreateManyTaskInputEnvelope
    set?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    disconnect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    delete?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    connect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    update?: NewsUpdateWithWhereUniqueWithoutTaskInput | NewsUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: NewsUpdateManyWithWhereWithoutTaskInput | NewsUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: NewsScalarWhereInput | NewsScalarWhereInput[]
  }

  export type MarkUpdateManyWithoutId_taskNestedInput = {
    create?: XOR<MarkCreateWithoutId_taskInput, MarkUncheckedCreateWithoutId_taskInput> | MarkCreateWithoutId_taskInput[] | MarkUncheckedCreateWithoutId_taskInput[]
    connectOrCreate?: MarkCreateOrConnectWithoutId_taskInput | MarkCreateOrConnectWithoutId_taskInput[]
    upsert?: MarkUpsertWithWhereUniqueWithoutId_taskInput | MarkUpsertWithWhereUniqueWithoutId_taskInput[]
    createMany?: MarkCreateManyId_taskInputEnvelope
    set?: MarkWhereUniqueInput | MarkWhereUniqueInput[]
    disconnect?: MarkWhereUniqueInput | MarkWhereUniqueInput[]
    delete?: MarkWhereUniqueInput | MarkWhereUniqueInput[]
    connect?: MarkWhereUniqueInput | MarkWhereUniqueInput[]
    update?: MarkUpdateWithWhereUniqueWithoutId_taskInput | MarkUpdateWithWhereUniqueWithoutId_taskInput[]
    updateMany?: MarkUpdateManyWithWhereWithoutId_taskInput | MarkUpdateManyWithWhereWithoutId_taskInput[]
    deleteMany?: MarkScalarWhereInput | MarkScalarWhereInput[]
  }

  export type NewsUncheckedUpdateManyWithoutTaskNestedInput = {
    create?: XOR<NewsCreateWithoutTaskInput, NewsUncheckedCreateWithoutTaskInput> | NewsCreateWithoutTaskInput[] | NewsUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: NewsCreateOrConnectWithoutTaskInput | NewsCreateOrConnectWithoutTaskInput[]
    upsert?: NewsUpsertWithWhereUniqueWithoutTaskInput | NewsUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: NewsCreateManyTaskInputEnvelope
    set?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    disconnect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    delete?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    connect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    update?: NewsUpdateWithWhereUniqueWithoutTaskInput | NewsUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: NewsUpdateManyWithWhereWithoutTaskInput | NewsUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: NewsScalarWhereInput | NewsScalarWhereInput[]
  }

  export type MarkUncheckedUpdateManyWithoutId_taskNestedInput = {
    create?: XOR<MarkCreateWithoutId_taskInput, MarkUncheckedCreateWithoutId_taskInput> | MarkCreateWithoutId_taskInput[] | MarkUncheckedCreateWithoutId_taskInput[]
    connectOrCreate?: MarkCreateOrConnectWithoutId_taskInput | MarkCreateOrConnectWithoutId_taskInput[]
    upsert?: MarkUpsertWithWhereUniqueWithoutId_taskInput | MarkUpsertWithWhereUniqueWithoutId_taskInput[]
    createMany?: MarkCreateManyId_taskInputEnvelope
    set?: MarkWhereUniqueInput | MarkWhereUniqueInput[]
    disconnect?: MarkWhereUniqueInput | MarkWhereUniqueInput[]
    delete?: MarkWhereUniqueInput | MarkWhereUniqueInput[]
    connect?: MarkWhereUniqueInput | MarkWhereUniqueInput[]
    update?: MarkUpdateWithWhereUniqueWithoutId_taskInput | MarkUpdateWithWhereUniqueWithoutId_taskInput[]
    updateMany?: MarkUpdateManyWithWhereWithoutId_taskInput | MarkUpdateManyWithWhereWithoutId_taskInput[]
    deleteMany?: MarkScalarWhereInput | MarkScalarWhereInput[]
  }

  export type NewsCreateNestedManyWithoutCategoryInput = {
    create?: XOR<NewsCreateWithoutCategoryInput, NewsUncheckedCreateWithoutCategoryInput> | NewsCreateWithoutCategoryInput[] | NewsUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: NewsCreateOrConnectWithoutCategoryInput | NewsCreateOrConnectWithoutCategoryInput[]
    createMany?: NewsCreateManyCategoryInputEnvelope
    connect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
  }

  export type NewsUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<NewsCreateWithoutCategoryInput, NewsUncheckedCreateWithoutCategoryInput> | NewsCreateWithoutCategoryInput[] | NewsUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: NewsCreateOrConnectWithoutCategoryInput | NewsCreateOrConnectWithoutCategoryInput[]
    createMany?: NewsCreateManyCategoryInputEnvelope
    connect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
  }

  export type EnumStatus_CategoryFieldUpdateOperationsInput = {
    set?: $Enums.Status_Category
  }

  export type NewsUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<NewsCreateWithoutCategoryInput, NewsUncheckedCreateWithoutCategoryInput> | NewsCreateWithoutCategoryInput[] | NewsUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: NewsCreateOrConnectWithoutCategoryInput | NewsCreateOrConnectWithoutCategoryInput[]
    upsert?: NewsUpsertWithWhereUniqueWithoutCategoryInput | NewsUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: NewsCreateManyCategoryInputEnvelope
    set?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    disconnect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    delete?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    connect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    update?: NewsUpdateWithWhereUniqueWithoutCategoryInput | NewsUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: NewsUpdateManyWithWhereWithoutCategoryInput | NewsUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: NewsScalarWhereInput | NewsScalarWhereInput[]
  }

  export type NewsUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<NewsCreateWithoutCategoryInput, NewsUncheckedCreateWithoutCategoryInput> | NewsCreateWithoutCategoryInput[] | NewsUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: NewsCreateOrConnectWithoutCategoryInput | NewsCreateOrConnectWithoutCategoryInput[]
    upsert?: NewsUpsertWithWhereUniqueWithoutCategoryInput | NewsUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: NewsCreateManyCategoryInputEnvelope
    set?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    disconnect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    delete?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    connect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    update?: NewsUpdateWithWhereUniqueWithoutCategoryInput | NewsUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: NewsUpdateManyWithWhereWithoutCategoryInput | NewsUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: NewsScalarWhereInput | NewsScalarWhereInput[]
  }

  export type TaskCreateNestedOneWithoutNewsInput = {
    create?: XOR<TaskCreateWithoutNewsInput, TaskUncheckedCreateWithoutNewsInput>
    connectOrCreate?: TaskCreateOrConnectWithoutNewsInput
    connect?: TaskWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutNewsInput = {
    create?: XOR<CategoryCreateWithoutNewsInput, CategoryUncheckedCreateWithoutNewsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutNewsInput
    connect?: CategoryWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutNewsInput = {
    create?: XOR<UserCreateWithoutNewsInput, UserUncheckedCreateWithoutNewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNewsInput
    connect?: UserWhereUniqueInput
  }

  export type LikeCreateNestedManyWithoutNewsInput = {
    create?: XOR<LikeCreateWithoutNewsInput, LikeUncheckedCreateWithoutNewsInput> | LikeCreateWithoutNewsInput[] | LikeUncheckedCreateWithoutNewsInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutNewsInput | LikeCreateOrConnectWithoutNewsInput[]
    createMany?: LikeCreateManyNewsInputEnvelope
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
  }

  export type SaveCreateNestedManyWithoutNewsInput = {
    create?: XOR<SaveCreateWithoutNewsInput, SaveUncheckedCreateWithoutNewsInput> | SaveCreateWithoutNewsInput[] | SaveUncheckedCreateWithoutNewsInput[]
    connectOrCreate?: SaveCreateOrConnectWithoutNewsInput | SaveCreateOrConnectWithoutNewsInput[]
    createMany?: SaveCreateManyNewsInputEnvelope
    connect?: SaveWhereUniqueInput | SaveWhereUniqueInput[]
  }

  export type CommentCreateNestedManyWithoutNewsInput = {
    create?: XOR<CommentCreateWithoutNewsInput, CommentUncheckedCreateWithoutNewsInput> | CommentCreateWithoutNewsInput[] | CommentUncheckedCreateWithoutNewsInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutNewsInput | CommentCreateOrConnectWithoutNewsInput[]
    createMany?: CommentCreateManyNewsInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type PendingCreateNestedManyWithoutNewsInput = {
    create?: XOR<PendingCreateWithoutNewsInput, PendingUncheckedCreateWithoutNewsInput> | PendingCreateWithoutNewsInput[] | PendingUncheckedCreateWithoutNewsInput[]
    connectOrCreate?: PendingCreateOrConnectWithoutNewsInput | PendingCreateOrConnectWithoutNewsInput[]
    createMany?: PendingCreateManyNewsInputEnvelope
    connect?: PendingWhereUniqueInput | PendingWhereUniqueInput[]
  }

  export type LikeUncheckedCreateNestedManyWithoutNewsInput = {
    create?: XOR<LikeCreateWithoutNewsInput, LikeUncheckedCreateWithoutNewsInput> | LikeCreateWithoutNewsInput[] | LikeUncheckedCreateWithoutNewsInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutNewsInput | LikeCreateOrConnectWithoutNewsInput[]
    createMany?: LikeCreateManyNewsInputEnvelope
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
  }

  export type SaveUncheckedCreateNestedManyWithoutNewsInput = {
    create?: XOR<SaveCreateWithoutNewsInput, SaveUncheckedCreateWithoutNewsInput> | SaveCreateWithoutNewsInput[] | SaveUncheckedCreateWithoutNewsInput[]
    connectOrCreate?: SaveCreateOrConnectWithoutNewsInput | SaveCreateOrConnectWithoutNewsInput[]
    createMany?: SaveCreateManyNewsInputEnvelope
    connect?: SaveWhereUniqueInput | SaveWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutNewsInput = {
    create?: XOR<CommentCreateWithoutNewsInput, CommentUncheckedCreateWithoutNewsInput> | CommentCreateWithoutNewsInput[] | CommentUncheckedCreateWithoutNewsInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutNewsInput | CommentCreateOrConnectWithoutNewsInput[]
    createMany?: CommentCreateManyNewsInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type PendingUncheckedCreateNestedManyWithoutNewsInput = {
    create?: XOR<PendingCreateWithoutNewsInput, PendingUncheckedCreateWithoutNewsInput> | PendingCreateWithoutNewsInput[] | PendingUncheckedCreateWithoutNewsInput[]
    connectOrCreate?: PendingCreateOrConnectWithoutNewsInput | PendingCreateOrConnectWithoutNewsInput[]
    createMany?: PendingCreateManyNewsInputEnvelope
    connect?: PendingWhereUniqueInput | PendingWhereUniqueInput[]
  }

  export type NullableEnumStatus_NewsFieldUpdateOperationsInput = {
    set?: $Enums.Status_News | null
  }

  export type TaskUpdateOneRequiredWithoutNewsNestedInput = {
    create?: XOR<TaskCreateWithoutNewsInput, TaskUncheckedCreateWithoutNewsInput>
    connectOrCreate?: TaskCreateOrConnectWithoutNewsInput
    upsert?: TaskUpsertWithoutNewsInput
    connect?: TaskWhereUniqueInput
    update?: XOR<XOR<TaskUpdateToOneWithWhereWithoutNewsInput, TaskUpdateWithoutNewsInput>, TaskUncheckedUpdateWithoutNewsInput>
  }

  export type CategoryUpdateOneRequiredWithoutNewsNestedInput = {
    create?: XOR<CategoryCreateWithoutNewsInput, CategoryUncheckedCreateWithoutNewsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutNewsInput
    upsert?: CategoryUpsertWithoutNewsInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutNewsInput, CategoryUpdateWithoutNewsInput>, CategoryUncheckedUpdateWithoutNewsInput>
  }

  export type UserUpdateOneRequiredWithoutNewsNestedInput = {
    create?: XOR<UserCreateWithoutNewsInput, UserUncheckedCreateWithoutNewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNewsInput
    upsert?: UserUpsertWithoutNewsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNewsInput, UserUpdateWithoutNewsInput>, UserUncheckedUpdateWithoutNewsInput>
  }

  export type LikeUpdateManyWithoutNewsNestedInput = {
    create?: XOR<LikeCreateWithoutNewsInput, LikeUncheckedCreateWithoutNewsInput> | LikeCreateWithoutNewsInput[] | LikeUncheckedCreateWithoutNewsInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutNewsInput | LikeCreateOrConnectWithoutNewsInput[]
    upsert?: LikeUpsertWithWhereUniqueWithoutNewsInput | LikeUpsertWithWhereUniqueWithoutNewsInput[]
    createMany?: LikeCreateManyNewsInputEnvelope
    set?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    disconnect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    delete?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    update?: LikeUpdateWithWhereUniqueWithoutNewsInput | LikeUpdateWithWhereUniqueWithoutNewsInput[]
    updateMany?: LikeUpdateManyWithWhereWithoutNewsInput | LikeUpdateManyWithWhereWithoutNewsInput[]
    deleteMany?: LikeScalarWhereInput | LikeScalarWhereInput[]
  }

  export type SaveUpdateManyWithoutNewsNestedInput = {
    create?: XOR<SaveCreateWithoutNewsInput, SaveUncheckedCreateWithoutNewsInput> | SaveCreateWithoutNewsInput[] | SaveUncheckedCreateWithoutNewsInput[]
    connectOrCreate?: SaveCreateOrConnectWithoutNewsInput | SaveCreateOrConnectWithoutNewsInput[]
    upsert?: SaveUpsertWithWhereUniqueWithoutNewsInput | SaveUpsertWithWhereUniqueWithoutNewsInput[]
    createMany?: SaveCreateManyNewsInputEnvelope
    set?: SaveWhereUniqueInput | SaveWhereUniqueInput[]
    disconnect?: SaveWhereUniqueInput | SaveWhereUniqueInput[]
    delete?: SaveWhereUniqueInput | SaveWhereUniqueInput[]
    connect?: SaveWhereUniqueInput | SaveWhereUniqueInput[]
    update?: SaveUpdateWithWhereUniqueWithoutNewsInput | SaveUpdateWithWhereUniqueWithoutNewsInput[]
    updateMany?: SaveUpdateManyWithWhereWithoutNewsInput | SaveUpdateManyWithWhereWithoutNewsInput[]
    deleteMany?: SaveScalarWhereInput | SaveScalarWhereInput[]
  }

  export type CommentUpdateManyWithoutNewsNestedInput = {
    create?: XOR<CommentCreateWithoutNewsInput, CommentUncheckedCreateWithoutNewsInput> | CommentCreateWithoutNewsInput[] | CommentUncheckedCreateWithoutNewsInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutNewsInput | CommentCreateOrConnectWithoutNewsInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutNewsInput | CommentUpsertWithWhereUniqueWithoutNewsInput[]
    createMany?: CommentCreateManyNewsInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutNewsInput | CommentUpdateWithWhereUniqueWithoutNewsInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutNewsInput | CommentUpdateManyWithWhereWithoutNewsInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type PendingUpdateManyWithoutNewsNestedInput = {
    create?: XOR<PendingCreateWithoutNewsInput, PendingUncheckedCreateWithoutNewsInput> | PendingCreateWithoutNewsInput[] | PendingUncheckedCreateWithoutNewsInput[]
    connectOrCreate?: PendingCreateOrConnectWithoutNewsInput | PendingCreateOrConnectWithoutNewsInput[]
    upsert?: PendingUpsertWithWhereUniqueWithoutNewsInput | PendingUpsertWithWhereUniqueWithoutNewsInput[]
    createMany?: PendingCreateManyNewsInputEnvelope
    set?: PendingWhereUniqueInput | PendingWhereUniqueInput[]
    disconnect?: PendingWhereUniqueInput | PendingWhereUniqueInput[]
    delete?: PendingWhereUniqueInput | PendingWhereUniqueInput[]
    connect?: PendingWhereUniqueInput | PendingWhereUniqueInput[]
    update?: PendingUpdateWithWhereUniqueWithoutNewsInput | PendingUpdateWithWhereUniqueWithoutNewsInput[]
    updateMany?: PendingUpdateManyWithWhereWithoutNewsInput | PendingUpdateManyWithWhereWithoutNewsInput[]
    deleteMany?: PendingScalarWhereInput | PendingScalarWhereInput[]
  }

  export type LikeUncheckedUpdateManyWithoutNewsNestedInput = {
    create?: XOR<LikeCreateWithoutNewsInput, LikeUncheckedCreateWithoutNewsInput> | LikeCreateWithoutNewsInput[] | LikeUncheckedCreateWithoutNewsInput[]
    connectOrCreate?: LikeCreateOrConnectWithoutNewsInput | LikeCreateOrConnectWithoutNewsInput[]
    upsert?: LikeUpsertWithWhereUniqueWithoutNewsInput | LikeUpsertWithWhereUniqueWithoutNewsInput[]
    createMany?: LikeCreateManyNewsInputEnvelope
    set?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    disconnect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    delete?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    connect?: LikeWhereUniqueInput | LikeWhereUniqueInput[]
    update?: LikeUpdateWithWhereUniqueWithoutNewsInput | LikeUpdateWithWhereUniqueWithoutNewsInput[]
    updateMany?: LikeUpdateManyWithWhereWithoutNewsInput | LikeUpdateManyWithWhereWithoutNewsInput[]
    deleteMany?: LikeScalarWhereInput | LikeScalarWhereInput[]
  }

  export type SaveUncheckedUpdateManyWithoutNewsNestedInput = {
    create?: XOR<SaveCreateWithoutNewsInput, SaveUncheckedCreateWithoutNewsInput> | SaveCreateWithoutNewsInput[] | SaveUncheckedCreateWithoutNewsInput[]
    connectOrCreate?: SaveCreateOrConnectWithoutNewsInput | SaveCreateOrConnectWithoutNewsInput[]
    upsert?: SaveUpsertWithWhereUniqueWithoutNewsInput | SaveUpsertWithWhereUniqueWithoutNewsInput[]
    createMany?: SaveCreateManyNewsInputEnvelope
    set?: SaveWhereUniqueInput | SaveWhereUniqueInput[]
    disconnect?: SaveWhereUniqueInput | SaveWhereUniqueInput[]
    delete?: SaveWhereUniqueInput | SaveWhereUniqueInput[]
    connect?: SaveWhereUniqueInput | SaveWhereUniqueInput[]
    update?: SaveUpdateWithWhereUniqueWithoutNewsInput | SaveUpdateWithWhereUniqueWithoutNewsInput[]
    updateMany?: SaveUpdateManyWithWhereWithoutNewsInput | SaveUpdateManyWithWhereWithoutNewsInput[]
    deleteMany?: SaveScalarWhereInput | SaveScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutNewsNestedInput = {
    create?: XOR<CommentCreateWithoutNewsInput, CommentUncheckedCreateWithoutNewsInput> | CommentCreateWithoutNewsInput[] | CommentUncheckedCreateWithoutNewsInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutNewsInput | CommentCreateOrConnectWithoutNewsInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutNewsInput | CommentUpsertWithWhereUniqueWithoutNewsInput[]
    createMany?: CommentCreateManyNewsInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutNewsInput | CommentUpdateWithWhereUniqueWithoutNewsInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutNewsInput | CommentUpdateManyWithWhereWithoutNewsInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type PendingUncheckedUpdateManyWithoutNewsNestedInput = {
    create?: XOR<PendingCreateWithoutNewsInput, PendingUncheckedCreateWithoutNewsInput> | PendingCreateWithoutNewsInput[] | PendingUncheckedCreateWithoutNewsInput[]
    connectOrCreate?: PendingCreateOrConnectWithoutNewsInput | PendingCreateOrConnectWithoutNewsInput[]
    upsert?: PendingUpsertWithWhereUniqueWithoutNewsInput | PendingUpsertWithWhereUniqueWithoutNewsInput[]
    createMany?: PendingCreateManyNewsInputEnvelope
    set?: PendingWhereUniqueInput | PendingWhereUniqueInput[]
    disconnect?: PendingWhereUniqueInput | PendingWhereUniqueInput[]
    delete?: PendingWhereUniqueInput | PendingWhereUniqueInput[]
    connect?: PendingWhereUniqueInput | PendingWhereUniqueInput[]
    update?: PendingUpdateWithWhereUniqueWithoutNewsInput | PendingUpdateWithWhereUniqueWithoutNewsInput[]
    updateMany?: PendingUpdateManyWithWhereWithoutNewsInput | PendingUpdateManyWithWhereWithoutNewsInput[]
    deleteMany?: PendingScalarWhereInput | PendingScalarWhereInput[]
  }

  export type NewsCreateNestedOneWithoutLikesInput = {
    create?: XOR<NewsCreateWithoutLikesInput, NewsUncheckedCreateWithoutLikesInput>
    connectOrCreate?: NewsCreateOrConnectWithoutLikesInput
    connect?: NewsWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutLikesInput = {
    create?: XOR<UserCreateWithoutLikesInput, UserUncheckedCreateWithoutLikesInput>
    connectOrCreate?: UserCreateOrConnectWithoutLikesInput
    connect?: UserWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NewsUpdateOneRequiredWithoutLikesNestedInput = {
    create?: XOR<NewsCreateWithoutLikesInput, NewsUncheckedCreateWithoutLikesInput>
    connectOrCreate?: NewsCreateOrConnectWithoutLikesInput
    upsert?: NewsUpsertWithoutLikesInput
    connect?: NewsWhereUniqueInput
    update?: XOR<XOR<NewsUpdateToOneWithWhereWithoutLikesInput, NewsUpdateWithoutLikesInput>, NewsUncheckedUpdateWithoutLikesInput>
  }

  export type UserUpdateOneRequiredWithoutLikesNestedInput = {
    create?: XOR<UserCreateWithoutLikesInput, UserUncheckedCreateWithoutLikesInput>
    connectOrCreate?: UserCreateOrConnectWithoutLikesInput
    upsert?: UserUpsertWithoutLikesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLikesInput, UserUpdateWithoutLikesInput>, UserUncheckedUpdateWithoutLikesInput>
  }

  export type NewsCreateNestedOneWithoutSavesInput = {
    create?: XOR<NewsCreateWithoutSavesInput, NewsUncheckedCreateWithoutSavesInput>
    connectOrCreate?: NewsCreateOrConnectWithoutSavesInput
    connect?: NewsWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSavesInput = {
    create?: XOR<UserCreateWithoutSavesInput, UserUncheckedCreateWithoutSavesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSavesInput
    connect?: UserWhereUniqueInput
  }

  export type NewsUpdateOneRequiredWithoutSavesNestedInput = {
    create?: XOR<NewsCreateWithoutSavesInput, NewsUncheckedCreateWithoutSavesInput>
    connectOrCreate?: NewsCreateOrConnectWithoutSavesInput
    upsert?: NewsUpsertWithoutSavesInput
    connect?: NewsWhereUniqueInput
    update?: XOR<XOR<NewsUpdateToOneWithWhereWithoutSavesInput, NewsUpdateWithoutSavesInput>, NewsUncheckedUpdateWithoutSavesInput>
  }

  export type UserUpdateOneRequiredWithoutSavesNestedInput = {
    create?: XOR<UserCreateWithoutSavesInput, UserUncheckedCreateWithoutSavesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSavesInput
    upsert?: UserUpsertWithoutSavesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSavesInput, UserUpdateWithoutSavesInput>, UserUncheckedUpdateWithoutSavesInput>
  }

  export type NewsCreateNestedOneWithoutCommentsInput = {
    create?: XOR<NewsCreateWithoutCommentsInput, NewsUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: NewsCreateOrConnectWithoutCommentsInput
    connect?: NewsWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCommentsInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    connect?: UserWhereUniqueInput
  }

  export type NewsUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<NewsCreateWithoutCommentsInput, NewsUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: NewsCreateOrConnectWithoutCommentsInput
    upsert?: NewsUpsertWithoutCommentsInput
    connect?: NewsWhereUniqueInput
    update?: XOR<XOR<NewsUpdateToOneWithWhereWithoutCommentsInput, NewsUpdateWithoutCommentsInput>, NewsUncheckedUpdateWithoutCommentsInput>
  }

  export type UserUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    upsert?: UserUpsertWithoutCommentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCommentsInput, UserUpdateWithoutCommentsInput>, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type NewsCreateNestedOneWithoutPendingInput = {
    create?: XOR<NewsCreateWithoutPendingInput, NewsUncheckedCreateWithoutPendingInput>
    connectOrCreate?: NewsCreateOrConnectWithoutPendingInput
    connect?: NewsWhereUniqueInput
  }

  export type EnumStatus_NewsFieldUpdateOperationsInput = {
    set?: $Enums.Status_News
  }

  export type NewsUpdateOneRequiredWithoutPendingNestedInput = {
    create?: XOR<NewsCreateWithoutPendingInput, NewsUncheckedCreateWithoutPendingInput>
    connectOrCreate?: NewsCreateOrConnectWithoutPendingInput
    upsert?: NewsUpsertWithoutPendingInput
    connect?: NewsWhereUniqueInput
    update?: XOR<XOR<NewsUpdateToOneWithWhereWithoutPendingInput, NewsUpdateWithoutPendingInput>, NewsUncheckedUpdateWithoutPendingInput>
  }

  export type TaskCreateNestedOneWithoutMarksInput = {
    create?: XOR<TaskCreateWithoutMarksInput, TaskUncheckedCreateWithoutMarksInput>
    connectOrCreate?: TaskCreateOrConnectWithoutMarksInput
    connect?: TaskWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutMarksInput = {
    create?: XOR<UserCreateWithoutMarksInput, UserUncheckedCreateWithoutMarksInput>
    connectOrCreate?: UserCreateOrConnectWithoutMarksInput
    connect?: UserWhereUniqueInput
  }

  export type TaskUpdateOneRequiredWithoutMarksNestedInput = {
    create?: XOR<TaskCreateWithoutMarksInput, TaskUncheckedCreateWithoutMarksInput>
    connectOrCreate?: TaskCreateOrConnectWithoutMarksInput
    upsert?: TaskUpsertWithoutMarksInput
    connect?: TaskWhereUniqueInput
    update?: XOR<XOR<TaskUpdateToOneWithWhereWithoutMarksInput, TaskUpdateWithoutMarksInput>, TaskUncheckedUpdateWithoutMarksInput>
  }

  export type UserUpdateOneRequiredWithoutMarksNestedInput = {
    create?: XOR<UserCreateWithoutMarksInput, UserUncheckedCreateWithoutMarksInput>
    connectOrCreate?: UserCreateOrConnectWithoutMarksInput
    upsert?: UserUpsertWithoutMarksInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMarksInput, UserUpdateWithoutMarksInput>, UserUncheckedUpdateWithoutMarksInput>
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type NestedEnumStatus_CategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.Status_Category | EnumStatus_CategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Status_Category[] | ListEnumStatus_CategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status_Category[] | ListEnumStatus_CategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumStatus_CategoryFilter<$PrismaModel> | $Enums.Status_Category
  }

  export type NestedEnumStatus_CategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status_Category | EnumStatus_CategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Status_Category[] | ListEnumStatus_CategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status_Category[] | ListEnumStatus_CategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumStatus_CategoryWithAggregatesFilter<$PrismaModel> | $Enums.Status_Category
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatus_CategoryFilter<$PrismaModel>
    _max?: NestedEnumStatus_CategoryFilter<$PrismaModel>
  }

  export type NestedEnumStatus_NewsNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Status_News | EnumStatus_NewsFieldRefInput<$PrismaModel> | null
    in?: $Enums.Status_News[] | ListEnumStatus_NewsFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Status_News[] | ListEnumStatus_NewsFieldRefInput<$PrismaModel> | null
    not?: NestedEnumStatus_NewsNullableFilter<$PrismaModel> | $Enums.Status_News | null
  }

  export type NestedEnumStatus_NewsNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status_News | EnumStatus_NewsFieldRefInput<$PrismaModel> | null
    in?: $Enums.Status_News[] | ListEnumStatus_NewsFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Status_News[] | ListEnumStatus_NewsFieldRefInput<$PrismaModel> | null
    not?: NestedEnumStatus_NewsNullableWithAggregatesFilter<$PrismaModel> | $Enums.Status_News | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumStatus_NewsNullableFilter<$PrismaModel>
    _max?: NestedEnumStatus_NewsNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumStatus_NewsFilter<$PrismaModel = never> = {
    equals?: $Enums.Status_News | EnumStatus_NewsFieldRefInput<$PrismaModel>
    in?: $Enums.Status_News[] | ListEnumStatus_NewsFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status_News[] | ListEnumStatus_NewsFieldRefInput<$PrismaModel>
    not?: NestedEnumStatus_NewsFilter<$PrismaModel> | $Enums.Status_News
  }

  export type NestedEnumStatus_NewsWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status_News | EnumStatus_NewsFieldRefInput<$PrismaModel>
    in?: $Enums.Status_News[] | ListEnumStatus_NewsFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status_News[] | ListEnumStatus_NewsFieldRefInput<$PrismaModel>
    not?: NestedEnumStatus_NewsWithAggregatesFilter<$PrismaModel> | $Enums.Status_News
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatus_NewsFilter<$PrismaModel>
    _max?: NestedEnumStatus_NewsFilter<$PrismaModel>
  }

  export type NewsCreateWithoutAuthorInput = {
    title: string
    content: string
    image: string
    status?: $Enums.Status_News | null
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    task: TaskCreateNestedOneWithoutNewsInput
    category: CategoryCreateNestedOneWithoutNewsInput
    likes?: LikeCreateNestedManyWithoutNewsInput
    saves?: SaveCreateNestedManyWithoutNewsInput
    comments?: CommentCreateNestedManyWithoutNewsInput
    pending?: PendingCreateNestedManyWithoutNewsInput
  }

  export type NewsUncheckedCreateWithoutAuthorInput = {
    id_news?: number
    taskId: number
    categoryId: number
    title: string
    content: string
    image: string
    status?: $Enums.Status_News | null
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    likes?: LikeUncheckedCreateNestedManyWithoutNewsInput
    saves?: SaveUncheckedCreateNestedManyWithoutNewsInput
    comments?: CommentUncheckedCreateNestedManyWithoutNewsInput
    pending?: PendingUncheckedCreateNestedManyWithoutNewsInput
  }

  export type NewsCreateOrConnectWithoutAuthorInput = {
    where: NewsWhereUniqueInput
    create: XOR<NewsCreateWithoutAuthorInput, NewsUncheckedCreateWithoutAuthorInput>
  }

  export type NewsCreateManyAuthorInputEnvelope = {
    data: NewsCreateManyAuthorInput | NewsCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type CommentCreateWithoutUserInput = {
    comment: string
    timestamp?: Date | string
    news: NewsCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateWithoutUserInput = {
    id_comment?: number
    newsId: number
    comment: string
    timestamp?: Date | string
  }

  export type CommentCreateOrConnectWithoutUserInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput>
  }

  export type CommentCreateManyUserInputEnvelope = {
    data: CommentCreateManyUserInput | CommentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type LikeCreateWithoutUserInput = {
    like: boolean
    timestamp?: Date | string
    news: NewsCreateNestedOneWithoutLikesInput
  }

  export type LikeUncheckedCreateWithoutUserInput = {
    id_like?: number
    newsId: number
    like: boolean
    timestamp?: Date | string
  }

  export type LikeCreateOrConnectWithoutUserInput = {
    where: LikeWhereUniqueInput
    create: XOR<LikeCreateWithoutUserInput, LikeUncheckedCreateWithoutUserInput>
  }

  export type LikeCreateManyUserInputEnvelope = {
    data: LikeCreateManyUserInput | LikeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SaveCreateWithoutUserInput = {
    saved_news: boolean
    timestamp?: Date | string
    news: NewsCreateNestedOneWithoutSavesInput
  }

  export type SaveUncheckedCreateWithoutUserInput = {
    id_save?: number
    newsId: number
    saved_news: boolean
    timestamp?: Date | string
  }

  export type SaveCreateOrConnectWithoutUserInput = {
    where: SaveWhereUniqueInput
    create: XOR<SaveCreateWithoutUserInput, SaveUncheckedCreateWithoutUserInput>
  }

  export type SaveCreateManyUserInputEnvelope = {
    data: SaveCreateManyUserInput | SaveCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MarkCreateWithoutId_userInput = {
    mark: number
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    id_task: TaskCreateNestedOneWithoutMarksInput
  }

  export type MarkUncheckedCreateWithoutId_userInput = {
    id_mark?: number
    taskId: number
    mark: number
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type MarkCreateOrConnectWithoutId_userInput = {
    where: MarkWhereUniqueInput
    create: XOR<MarkCreateWithoutId_userInput, MarkUncheckedCreateWithoutId_userInput>
  }

  export type MarkCreateManyId_userInputEnvelope = {
    data: MarkCreateManyId_userInput | MarkCreateManyId_userInput[]
    skipDuplicates?: boolean
  }

  export type NewsUpsertWithWhereUniqueWithoutAuthorInput = {
    where: NewsWhereUniqueInput
    update: XOR<NewsUpdateWithoutAuthorInput, NewsUncheckedUpdateWithoutAuthorInput>
    create: XOR<NewsCreateWithoutAuthorInput, NewsUncheckedCreateWithoutAuthorInput>
  }

  export type NewsUpdateWithWhereUniqueWithoutAuthorInput = {
    where: NewsWhereUniqueInput
    data: XOR<NewsUpdateWithoutAuthorInput, NewsUncheckedUpdateWithoutAuthorInput>
  }

  export type NewsUpdateManyWithWhereWithoutAuthorInput = {
    where: NewsScalarWhereInput
    data: XOR<NewsUpdateManyMutationInput, NewsUncheckedUpdateManyWithoutAuthorInput>
  }

  export type NewsScalarWhereInput = {
    AND?: NewsScalarWhereInput | NewsScalarWhereInput[]
    OR?: NewsScalarWhereInput[]
    NOT?: NewsScalarWhereInput | NewsScalarWhereInput[]
    id_news?: IntFilter<"News"> | number
    taskId?: IntFilter<"News"> | number
    categoryId?: IntFilter<"News"> | number
    authorId?: IntFilter<"News"> | number
    title?: StringFilter<"News"> | string
    content?: StringFilter<"News"> | string
    image?: StringFilter<"News"> | string
    status?: EnumStatus_NewsNullableFilter<"News"> | $Enums.Status_News | null
    created_at?: DateTimeFilter<"News"> | Date | string
    updated_at?: DateTimeNullableFilter<"News"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"News"> | Date | string | null
  }

  export type CommentUpsertWithWhereUniqueWithoutUserInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutUserInput, CommentUncheckedUpdateWithoutUserInput>
    create: XOR<CommentCreateWithoutUserInput, CommentUncheckedCreateWithoutUserInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutUserInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutUserInput, CommentUncheckedUpdateWithoutUserInput>
  }

  export type CommentUpdateManyWithWhereWithoutUserInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutUserInput>
  }

  export type CommentScalarWhereInput = {
    AND?: CommentScalarWhereInput | CommentScalarWhereInput[]
    OR?: CommentScalarWhereInput[]
    NOT?: CommentScalarWhereInput | CommentScalarWhereInput[]
    id_comment?: IntFilter<"Comment"> | number
    newsId?: IntFilter<"Comment"> | number
    userId?: IntFilter<"Comment"> | number
    comment?: StringFilter<"Comment"> | string
    timestamp?: DateTimeFilter<"Comment"> | Date | string
  }

  export type LikeUpsertWithWhereUniqueWithoutUserInput = {
    where: LikeWhereUniqueInput
    update: XOR<LikeUpdateWithoutUserInput, LikeUncheckedUpdateWithoutUserInput>
    create: XOR<LikeCreateWithoutUserInput, LikeUncheckedCreateWithoutUserInput>
  }

  export type LikeUpdateWithWhereUniqueWithoutUserInput = {
    where: LikeWhereUniqueInput
    data: XOR<LikeUpdateWithoutUserInput, LikeUncheckedUpdateWithoutUserInput>
  }

  export type LikeUpdateManyWithWhereWithoutUserInput = {
    where: LikeScalarWhereInput
    data: XOR<LikeUpdateManyMutationInput, LikeUncheckedUpdateManyWithoutUserInput>
  }

  export type LikeScalarWhereInput = {
    AND?: LikeScalarWhereInput | LikeScalarWhereInput[]
    OR?: LikeScalarWhereInput[]
    NOT?: LikeScalarWhereInput | LikeScalarWhereInput[]
    id_like?: IntFilter<"Like"> | number
    newsId?: IntFilter<"Like"> | number
    userId?: IntFilter<"Like"> | number
    like?: BoolFilter<"Like"> | boolean
    timestamp?: DateTimeFilter<"Like"> | Date | string
  }

  export type SaveUpsertWithWhereUniqueWithoutUserInput = {
    where: SaveWhereUniqueInput
    update: XOR<SaveUpdateWithoutUserInput, SaveUncheckedUpdateWithoutUserInput>
    create: XOR<SaveCreateWithoutUserInput, SaveUncheckedCreateWithoutUserInput>
  }

  export type SaveUpdateWithWhereUniqueWithoutUserInput = {
    where: SaveWhereUniqueInput
    data: XOR<SaveUpdateWithoutUserInput, SaveUncheckedUpdateWithoutUserInput>
  }

  export type SaveUpdateManyWithWhereWithoutUserInput = {
    where: SaveScalarWhereInput
    data: XOR<SaveUpdateManyMutationInput, SaveUncheckedUpdateManyWithoutUserInput>
  }

  export type SaveScalarWhereInput = {
    AND?: SaveScalarWhereInput | SaveScalarWhereInput[]
    OR?: SaveScalarWhereInput[]
    NOT?: SaveScalarWhereInput | SaveScalarWhereInput[]
    id_save?: IntFilter<"Save"> | number
    newsId?: IntFilter<"Save"> | number
    userId?: IntFilter<"Save"> | number
    saved_news?: BoolFilter<"Save"> | boolean
    timestamp?: DateTimeFilter<"Save"> | Date | string
  }

  export type MarkUpsertWithWhereUniqueWithoutId_userInput = {
    where: MarkWhereUniqueInput
    update: XOR<MarkUpdateWithoutId_userInput, MarkUncheckedUpdateWithoutId_userInput>
    create: XOR<MarkCreateWithoutId_userInput, MarkUncheckedCreateWithoutId_userInput>
  }

  export type MarkUpdateWithWhereUniqueWithoutId_userInput = {
    where: MarkWhereUniqueInput
    data: XOR<MarkUpdateWithoutId_userInput, MarkUncheckedUpdateWithoutId_userInput>
  }

  export type MarkUpdateManyWithWhereWithoutId_userInput = {
    where: MarkScalarWhereInput
    data: XOR<MarkUpdateManyMutationInput, MarkUncheckedUpdateManyWithoutId_userInput>
  }

  export type MarkScalarWhereInput = {
    AND?: MarkScalarWhereInput | MarkScalarWhereInput[]
    OR?: MarkScalarWhereInput[]
    NOT?: MarkScalarWhereInput | MarkScalarWhereInput[]
    id_mark?: IntFilter<"Mark"> | number
    taskId?: IntFilter<"Mark"> | number
    userId?: IntFilter<"Mark"> | number
    mark?: IntFilter<"Mark"> | number
    created_at?: DateTimeFilter<"Mark"> | Date | string
    updated_at?: DateTimeNullableFilter<"Mark"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"Mark"> | Date | string | null
  }

  export type NewsCreateWithoutTaskInput = {
    title: string
    content: string
    image: string
    status?: $Enums.Status_News | null
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    category: CategoryCreateNestedOneWithoutNewsInput
    author: UserCreateNestedOneWithoutNewsInput
    likes?: LikeCreateNestedManyWithoutNewsInput
    saves?: SaveCreateNestedManyWithoutNewsInput
    comments?: CommentCreateNestedManyWithoutNewsInput
    pending?: PendingCreateNestedManyWithoutNewsInput
  }

  export type NewsUncheckedCreateWithoutTaskInput = {
    id_news?: number
    categoryId: number
    authorId: number
    title: string
    content: string
    image: string
    status?: $Enums.Status_News | null
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    likes?: LikeUncheckedCreateNestedManyWithoutNewsInput
    saves?: SaveUncheckedCreateNestedManyWithoutNewsInput
    comments?: CommentUncheckedCreateNestedManyWithoutNewsInput
    pending?: PendingUncheckedCreateNestedManyWithoutNewsInput
  }

  export type NewsCreateOrConnectWithoutTaskInput = {
    where: NewsWhereUniqueInput
    create: XOR<NewsCreateWithoutTaskInput, NewsUncheckedCreateWithoutTaskInput>
  }

  export type NewsCreateManyTaskInputEnvelope = {
    data: NewsCreateManyTaskInput | NewsCreateManyTaskInput[]
    skipDuplicates?: boolean
  }

  export type MarkCreateWithoutId_taskInput = {
    mark: number
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    id_user: UserCreateNestedOneWithoutMarksInput
  }

  export type MarkUncheckedCreateWithoutId_taskInput = {
    id_mark?: number
    userId: number
    mark: number
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type MarkCreateOrConnectWithoutId_taskInput = {
    where: MarkWhereUniqueInput
    create: XOR<MarkCreateWithoutId_taskInput, MarkUncheckedCreateWithoutId_taskInput>
  }

  export type MarkCreateManyId_taskInputEnvelope = {
    data: MarkCreateManyId_taskInput | MarkCreateManyId_taskInput[]
    skipDuplicates?: boolean
  }

  export type NewsUpsertWithWhereUniqueWithoutTaskInput = {
    where: NewsWhereUniqueInput
    update: XOR<NewsUpdateWithoutTaskInput, NewsUncheckedUpdateWithoutTaskInput>
    create: XOR<NewsCreateWithoutTaskInput, NewsUncheckedCreateWithoutTaskInput>
  }

  export type NewsUpdateWithWhereUniqueWithoutTaskInput = {
    where: NewsWhereUniqueInput
    data: XOR<NewsUpdateWithoutTaskInput, NewsUncheckedUpdateWithoutTaskInput>
  }

  export type NewsUpdateManyWithWhereWithoutTaskInput = {
    where: NewsScalarWhereInput
    data: XOR<NewsUpdateManyMutationInput, NewsUncheckedUpdateManyWithoutTaskInput>
  }

  export type MarkUpsertWithWhereUniqueWithoutId_taskInput = {
    where: MarkWhereUniqueInput
    update: XOR<MarkUpdateWithoutId_taskInput, MarkUncheckedUpdateWithoutId_taskInput>
    create: XOR<MarkCreateWithoutId_taskInput, MarkUncheckedCreateWithoutId_taskInput>
  }

  export type MarkUpdateWithWhereUniqueWithoutId_taskInput = {
    where: MarkWhereUniqueInput
    data: XOR<MarkUpdateWithoutId_taskInput, MarkUncheckedUpdateWithoutId_taskInput>
  }

  export type MarkUpdateManyWithWhereWithoutId_taskInput = {
    where: MarkScalarWhereInput
    data: XOR<MarkUpdateManyMutationInput, MarkUncheckedUpdateManyWithoutId_taskInput>
  }

  export type NewsCreateWithoutCategoryInput = {
    title: string
    content: string
    image: string
    status?: $Enums.Status_News | null
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    task: TaskCreateNestedOneWithoutNewsInput
    author: UserCreateNestedOneWithoutNewsInput
    likes?: LikeCreateNestedManyWithoutNewsInput
    saves?: SaveCreateNestedManyWithoutNewsInput
    comments?: CommentCreateNestedManyWithoutNewsInput
    pending?: PendingCreateNestedManyWithoutNewsInput
  }

  export type NewsUncheckedCreateWithoutCategoryInput = {
    id_news?: number
    taskId: number
    authorId: number
    title: string
    content: string
    image: string
    status?: $Enums.Status_News | null
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    likes?: LikeUncheckedCreateNestedManyWithoutNewsInput
    saves?: SaveUncheckedCreateNestedManyWithoutNewsInput
    comments?: CommentUncheckedCreateNestedManyWithoutNewsInput
    pending?: PendingUncheckedCreateNestedManyWithoutNewsInput
  }

  export type NewsCreateOrConnectWithoutCategoryInput = {
    where: NewsWhereUniqueInput
    create: XOR<NewsCreateWithoutCategoryInput, NewsUncheckedCreateWithoutCategoryInput>
  }

  export type NewsCreateManyCategoryInputEnvelope = {
    data: NewsCreateManyCategoryInput | NewsCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type NewsUpsertWithWhereUniqueWithoutCategoryInput = {
    where: NewsWhereUniqueInput
    update: XOR<NewsUpdateWithoutCategoryInput, NewsUncheckedUpdateWithoutCategoryInput>
    create: XOR<NewsCreateWithoutCategoryInput, NewsUncheckedCreateWithoutCategoryInput>
  }

  export type NewsUpdateWithWhereUniqueWithoutCategoryInput = {
    where: NewsWhereUniqueInput
    data: XOR<NewsUpdateWithoutCategoryInput, NewsUncheckedUpdateWithoutCategoryInput>
  }

  export type NewsUpdateManyWithWhereWithoutCategoryInput = {
    where: NewsScalarWhereInput
    data: XOR<NewsUpdateManyMutationInput, NewsUncheckedUpdateManyWithoutCategoryInput>
  }

  export type TaskCreateWithoutNewsInput = {
    task_title: string
    task_deadline: Date | string
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    marks?: MarkCreateNestedManyWithoutId_taskInput
  }

  export type TaskUncheckedCreateWithoutNewsInput = {
    id_task?: number
    task_title: string
    task_deadline: Date | string
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    marks?: MarkUncheckedCreateNestedManyWithoutId_taskInput
  }

  export type TaskCreateOrConnectWithoutNewsInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutNewsInput, TaskUncheckedCreateWithoutNewsInput>
  }

  export type CategoryCreateWithoutNewsInput = {
    category: string
    status: $Enums.Status_Category
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type CategoryUncheckedCreateWithoutNewsInput = {
    id_category?: number
    category: string
    status: $Enums.Status_Category
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type CategoryCreateOrConnectWithoutNewsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutNewsInput, CategoryUncheckedCreateWithoutNewsInput>
  }

  export type UserCreateWithoutNewsInput = {
    name: string
    username: string
    email: string
    password: string
    role?: $Enums.Role
    profile_picture?: string | null
    refresh_token?: string | null
    university?: string | null
    major?: string | null
    internship_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    comments?: CommentCreateNestedManyWithoutUserInput
    likes?: LikeCreateNestedManyWithoutUserInput
    saves?: SaveCreateNestedManyWithoutUserInput
    marks?: MarkCreateNestedManyWithoutId_userInput
  }

  export type UserUncheckedCreateWithoutNewsInput = {
    id_user?: number
    name: string
    username: string
    email: string
    password: string
    role?: $Enums.Role
    profile_picture?: string | null
    refresh_token?: string | null
    university?: string | null
    major?: string | null
    internship_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    likes?: LikeUncheckedCreateNestedManyWithoutUserInput
    saves?: SaveUncheckedCreateNestedManyWithoutUserInput
    marks?: MarkUncheckedCreateNestedManyWithoutId_userInput
  }

  export type UserCreateOrConnectWithoutNewsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNewsInput, UserUncheckedCreateWithoutNewsInput>
  }

  export type LikeCreateWithoutNewsInput = {
    like: boolean
    timestamp?: Date | string
    user: UserCreateNestedOneWithoutLikesInput
  }

  export type LikeUncheckedCreateWithoutNewsInput = {
    id_like?: number
    userId: number
    like: boolean
    timestamp?: Date | string
  }

  export type LikeCreateOrConnectWithoutNewsInput = {
    where: LikeWhereUniqueInput
    create: XOR<LikeCreateWithoutNewsInput, LikeUncheckedCreateWithoutNewsInput>
  }

  export type LikeCreateManyNewsInputEnvelope = {
    data: LikeCreateManyNewsInput | LikeCreateManyNewsInput[]
    skipDuplicates?: boolean
  }

  export type SaveCreateWithoutNewsInput = {
    saved_news: boolean
    timestamp?: Date | string
    user: UserCreateNestedOneWithoutSavesInput
  }

  export type SaveUncheckedCreateWithoutNewsInput = {
    id_save?: number
    userId: number
    saved_news: boolean
    timestamp?: Date | string
  }

  export type SaveCreateOrConnectWithoutNewsInput = {
    where: SaveWhereUniqueInput
    create: XOR<SaveCreateWithoutNewsInput, SaveUncheckedCreateWithoutNewsInput>
  }

  export type SaveCreateManyNewsInputEnvelope = {
    data: SaveCreateManyNewsInput | SaveCreateManyNewsInput[]
    skipDuplicates?: boolean
  }

  export type CommentCreateWithoutNewsInput = {
    comment: string
    timestamp?: Date | string
    user: UserCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateWithoutNewsInput = {
    id_comment?: number
    userId: number
    comment: string
    timestamp?: Date | string
  }

  export type CommentCreateOrConnectWithoutNewsInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutNewsInput, CommentUncheckedCreateWithoutNewsInput>
  }

  export type CommentCreateManyNewsInputEnvelope = {
    data: CommentCreateManyNewsInput | CommentCreateManyNewsInput[]
    skipDuplicates?: boolean
  }

  export type PendingCreateWithoutNewsInput = {
    status?: $Enums.Status_News
    note?: string | null
    created_at?: Date | string
    resolved_at?: Date | string | null
  }

  export type PendingUncheckedCreateWithoutNewsInput = {
    id_pending?: number
    status?: $Enums.Status_News
    note?: string | null
    created_at?: Date | string
    resolved_at?: Date | string | null
  }

  export type PendingCreateOrConnectWithoutNewsInput = {
    where: PendingWhereUniqueInput
    create: XOR<PendingCreateWithoutNewsInput, PendingUncheckedCreateWithoutNewsInput>
  }

  export type PendingCreateManyNewsInputEnvelope = {
    data: PendingCreateManyNewsInput | PendingCreateManyNewsInput[]
    skipDuplicates?: boolean
  }

  export type TaskUpsertWithoutNewsInput = {
    update: XOR<TaskUpdateWithoutNewsInput, TaskUncheckedUpdateWithoutNewsInput>
    create: XOR<TaskCreateWithoutNewsInput, TaskUncheckedCreateWithoutNewsInput>
    where?: TaskWhereInput
  }

  export type TaskUpdateToOneWithWhereWithoutNewsInput = {
    where?: TaskWhereInput
    data: XOR<TaskUpdateWithoutNewsInput, TaskUncheckedUpdateWithoutNewsInput>
  }

  export type TaskUpdateWithoutNewsInput = {
    task_title?: StringFieldUpdateOperationsInput | string
    task_deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    marks?: MarkUpdateManyWithoutId_taskNestedInput
  }

  export type TaskUncheckedUpdateWithoutNewsInput = {
    id_task?: IntFieldUpdateOperationsInput | number
    task_title?: StringFieldUpdateOperationsInput | string
    task_deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    marks?: MarkUncheckedUpdateManyWithoutId_taskNestedInput
  }

  export type CategoryUpsertWithoutNewsInput = {
    update: XOR<CategoryUpdateWithoutNewsInput, CategoryUncheckedUpdateWithoutNewsInput>
    create: XOR<CategoryCreateWithoutNewsInput, CategoryUncheckedCreateWithoutNewsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutNewsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutNewsInput, CategoryUncheckedUpdateWithoutNewsInput>
  }

  export type CategoryUpdateWithoutNewsInput = {
    category?: StringFieldUpdateOperationsInput | string
    status?: EnumStatus_CategoryFieldUpdateOperationsInput | $Enums.Status_Category
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CategoryUncheckedUpdateWithoutNewsInput = {
    id_category?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    status?: EnumStatus_CategoryFieldUpdateOperationsInput | $Enums.Status_Category
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUpsertWithoutNewsInput = {
    update: XOR<UserUpdateWithoutNewsInput, UserUncheckedUpdateWithoutNewsInput>
    create: XOR<UserCreateWithoutNewsInput, UserUncheckedCreateWithoutNewsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNewsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNewsInput, UserUncheckedUpdateWithoutNewsInput>
  }

  export type UserUpdateWithoutNewsInput = {
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    university?: NullableStringFieldUpdateOperationsInput | string | null
    major?: NullableStringFieldUpdateOperationsInput | string | null
    internship_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comments?: CommentUpdateManyWithoutUserNestedInput
    likes?: LikeUpdateManyWithoutUserNestedInput
    saves?: SaveUpdateManyWithoutUserNestedInput
    marks?: MarkUpdateManyWithoutId_userNestedInput
  }

  export type UserUncheckedUpdateWithoutNewsInput = {
    id_user?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    university?: NullableStringFieldUpdateOperationsInput | string | null
    major?: NullableStringFieldUpdateOperationsInput | string | null
    internship_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    likes?: LikeUncheckedUpdateManyWithoutUserNestedInput
    saves?: SaveUncheckedUpdateManyWithoutUserNestedInput
    marks?: MarkUncheckedUpdateManyWithoutId_userNestedInput
  }

  export type LikeUpsertWithWhereUniqueWithoutNewsInput = {
    where: LikeWhereUniqueInput
    update: XOR<LikeUpdateWithoutNewsInput, LikeUncheckedUpdateWithoutNewsInput>
    create: XOR<LikeCreateWithoutNewsInput, LikeUncheckedCreateWithoutNewsInput>
  }

  export type LikeUpdateWithWhereUniqueWithoutNewsInput = {
    where: LikeWhereUniqueInput
    data: XOR<LikeUpdateWithoutNewsInput, LikeUncheckedUpdateWithoutNewsInput>
  }

  export type LikeUpdateManyWithWhereWithoutNewsInput = {
    where: LikeScalarWhereInput
    data: XOR<LikeUpdateManyMutationInput, LikeUncheckedUpdateManyWithoutNewsInput>
  }

  export type SaveUpsertWithWhereUniqueWithoutNewsInput = {
    where: SaveWhereUniqueInput
    update: XOR<SaveUpdateWithoutNewsInput, SaveUncheckedUpdateWithoutNewsInput>
    create: XOR<SaveCreateWithoutNewsInput, SaveUncheckedCreateWithoutNewsInput>
  }

  export type SaveUpdateWithWhereUniqueWithoutNewsInput = {
    where: SaveWhereUniqueInput
    data: XOR<SaveUpdateWithoutNewsInput, SaveUncheckedUpdateWithoutNewsInput>
  }

  export type SaveUpdateManyWithWhereWithoutNewsInput = {
    where: SaveScalarWhereInput
    data: XOR<SaveUpdateManyMutationInput, SaveUncheckedUpdateManyWithoutNewsInput>
  }

  export type CommentUpsertWithWhereUniqueWithoutNewsInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutNewsInput, CommentUncheckedUpdateWithoutNewsInput>
    create: XOR<CommentCreateWithoutNewsInput, CommentUncheckedCreateWithoutNewsInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutNewsInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutNewsInput, CommentUncheckedUpdateWithoutNewsInput>
  }

  export type CommentUpdateManyWithWhereWithoutNewsInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutNewsInput>
  }

  export type PendingUpsertWithWhereUniqueWithoutNewsInput = {
    where: PendingWhereUniqueInput
    update: XOR<PendingUpdateWithoutNewsInput, PendingUncheckedUpdateWithoutNewsInput>
    create: XOR<PendingCreateWithoutNewsInput, PendingUncheckedCreateWithoutNewsInput>
  }

  export type PendingUpdateWithWhereUniqueWithoutNewsInput = {
    where: PendingWhereUniqueInput
    data: XOR<PendingUpdateWithoutNewsInput, PendingUncheckedUpdateWithoutNewsInput>
  }

  export type PendingUpdateManyWithWhereWithoutNewsInput = {
    where: PendingScalarWhereInput
    data: XOR<PendingUpdateManyMutationInput, PendingUncheckedUpdateManyWithoutNewsInput>
  }

  export type PendingScalarWhereInput = {
    AND?: PendingScalarWhereInput | PendingScalarWhereInput[]
    OR?: PendingScalarWhereInput[]
    NOT?: PendingScalarWhereInput | PendingScalarWhereInput[]
    id_pending?: IntFilter<"Pending"> | number
    newsId?: IntFilter<"Pending"> | number
    status?: EnumStatus_NewsFilter<"Pending"> | $Enums.Status_News
    note?: StringNullableFilter<"Pending"> | string | null
    created_at?: DateTimeFilter<"Pending"> | Date | string
    resolved_at?: DateTimeNullableFilter<"Pending"> | Date | string | null
  }

  export type NewsCreateWithoutLikesInput = {
    title: string
    content: string
    image: string
    status?: $Enums.Status_News | null
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    task: TaskCreateNestedOneWithoutNewsInput
    category: CategoryCreateNestedOneWithoutNewsInput
    author: UserCreateNestedOneWithoutNewsInput
    saves?: SaveCreateNestedManyWithoutNewsInput
    comments?: CommentCreateNestedManyWithoutNewsInput
    pending?: PendingCreateNestedManyWithoutNewsInput
  }

  export type NewsUncheckedCreateWithoutLikesInput = {
    id_news?: number
    taskId: number
    categoryId: number
    authorId: number
    title: string
    content: string
    image: string
    status?: $Enums.Status_News | null
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    saves?: SaveUncheckedCreateNestedManyWithoutNewsInput
    comments?: CommentUncheckedCreateNestedManyWithoutNewsInput
    pending?: PendingUncheckedCreateNestedManyWithoutNewsInput
  }

  export type NewsCreateOrConnectWithoutLikesInput = {
    where: NewsWhereUniqueInput
    create: XOR<NewsCreateWithoutLikesInput, NewsUncheckedCreateWithoutLikesInput>
  }

  export type UserCreateWithoutLikesInput = {
    name: string
    username: string
    email: string
    password: string
    role?: $Enums.Role
    profile_picture?: string | null
    refresh_token?: string | null
    university?: string | null
    major?: string | null
    internship_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    news?: NewsCreateNestedManyWithoutAuthorInput
    comments?: CommentCreateNestedManyWithoutUserInput
    saves?: SaveCreateNestedManyWithoutUserInput
    marks?: MarkCreateNestedManyWithoutId_userInput
  }

  export type UserUncheckedCreateWithoutLikesInput = {
    id_user?: number
    name: string
    username: string
    email: string
    password: string
    role?: $Enums.Role
    profile_picture?: string | null
    refresh_token?: string | null
    university?: string | null
    major?: string | null
    internship_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    news?: NewsUncheckedCreateNestedManyWithoutAuthorInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    saves?: SaveUncheckedCreateNestedManyWithoutUserInput
    marks?: MarkUncheckedCreateNestedManyWithoutId_userInput
  }

  export type UserCreateOrConnectWithoutLikesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLikesInput, UserUncheckedCreateWithoutLikesInput>
  }

  export type NewsUpsertWithoutLikesInput = {
    update: XOR<NewsUpdateWithoutLikesInput, NewsUncheckedUpdateWithoutLikesInput>
    create: XOR<NewsCreateWithoutLikesInput, NewsUncheckedCreateWithoutLikesInput>
    where?: NewsWhereInput
  }

  export type NewsUpdateToOneWithWhereWithoutLikesInput = {
    where?: NewsWhereInput
    data: XOR<NewsUpdateWithoutLikesInput, NewsUncheckedUpdateWithoutLikesInput>
  }

  export type NewsUpdateWithoutLikesInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    status?: NullableEnumStatus_NewsFieldUpdateOperationsInput | $Enums.Status_News | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    task?: TaskUpdateOneRequiredWithoutNewsNestedInput
    category?: CategoryUpdateOneRequiredWithoutNewsNestedInput
    author?: UserUpdateOneRequiredWithoutNewsNestedInput
    saves?: SaveUpdateManyWithoutNewsNestedInput
    comments?: CommentUpdateManyWithoutNewsNestedInput
    pending?: PendingUpdateManyWithoutNewsNestedInput
  }

  export type NewsUncheckedUpdateWithoutLikesInput = {
    id_news?: IntFieldUpdateOperationsInput | number
    taskId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    authorId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    status?: NullableEnumStatus_NewsFieldUpdateOperationsInput | $Enums.Status_News | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    saves?: SaveUncheckedUpdateManyWithoutNewsNestedInput
    comments?: CommentUncheckedUpdateManyWithoutNewsNestedInput
    pending?: PendingUncheckedUpdateManyWithoutNewsNestedInput
  }

  export type UserUpsertWithoutLikesInput = {
    update: XOR<UserUpdateWithoutLikesInput, UserUncheckedUpdateWithoutLikesInput>
    create: XOR<UserCreateWithoutLikesInput, UserUncheckedCreateWithoutLikesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLikesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLikesInput, UserUncheckedUpdateWithoutLikesInput>
  }

  export type UserUpdateWithoutLikesInput = {
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    university?: NullableStringFieldUpdateOperationsInput | string | null
    major?: NullableStringFieldUpdateOperationsInput | string | null
    internship_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    news?: NewsUpdateManyWithoutAuthorNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    saves?: SaveUpdateManyWithoutUserNestedInput
    marks?: MarkUpdateManyWithoutId_userNestedInput
  }

  export type UserUncheckedUpdateWithoutLikesInput = {
    id_user?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    university?: NullableStringFieldUpdateOperationsInput | string | null
    major?: NullableStringFieldUpdateOperationsInput | string | null
    internship_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    news?: NewsUncheckedUpdateManyWithoutAuthorNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    saves?: SaveUncheckedUpdateManyWithoutUserNestedInput
    marks?: MarkUncheckedUpdateManyWithoutId_userNestedInput
  }

  export type NewsCreateWithoutSavesInput = {
    title: string
    content: string
    image: string
    status?: $Enums.Status_News | null
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    task: TaskCreateNestedOneWithoutNewsInput
    category: CategoryCreateNestedOneWithoutNewsInput
    author: UserCreateNestedOneWithoutNewsInput
    likes?: LikeCreateNestedManyWithoutNewsInput
    comments?: CommentCreateNestedManyWithoutNewsInput
    pending?: PendingCreateNestedManyWithoutNewsInput
  }

  export type NewsUncheckedCreateWithoutSavesInput = {
    id_news?: number
    taskId: number
    categoryId: number
    authorId: number
    title: string
    content: string
    image: string
    status?: $Enums.Status_News | null
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    likes?: LikeUncheckedCreateNestedManyWithoutNewsInput
    comments?: CommentUncheckedCreateNestedManyWithoutNewsInput
    pending?: PendingUncheckedCreateNestedManyWithoutNewsInput
  }

  export type NewsCreateOrConnectWithoutSavesInput = {
    where: NewsWhereUniqueInput
    create: XOR<NewsCreateWithoutSavesInput, NewsUncheckedCreateWithoutSavesInput>
  }

  export type UserCreateWithoutSavesInput = {
    name: string
    username: string
    email: string
    password: string
    role?: $Enums.Role
    profile_picture?: string | null
    refresh_token?: string | null
    university?: string | null
    major?: string | null
    internship_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    news?: NewsCreateNestedManyWithoutAuthorInput
    comments?: CommentCreateNestedManyWithoutUserInput
    likes?: LikeCreateNestedManyWithoutUserInput
    marks?: MarkCreateNestedManyWithoutId_userInput
  }

  export type UserUncheckedCreateWithoutSavesInput = {
    id_user?: number
    name: string
    username: string
    email: string
    password: string
    role?: $Enums.Role
    profile_picture?: string | null
    refresh_token?: string | null
    university?: string | null
    major?: string | null
    internship_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    news?: NewsUncheckedCreateNestedManyWithoutAuthorInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    likes?: LikeUncheckedCreateNestedManyWithoutUserInput
    marks?: MarkUncheckedCreateNestedManyWithoutId_userInput
  }

  export type UserCreateOrConnectWithoutSavesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSavesInput, UserUncheckedCreateWithoutSavesInput>
  }

  export type NewsUpsertWithoutSavesInput = {
    update: XOR<NewsUpdateWithoutSavesInput, NewsUncheckedUpdateWithoutSavesInput>
    create: XOR<NewsCreateWithoutSavesInput, NewsUncheckedCreateWithoutSavesInput>
    where?: NewsWhereInput
  }

  export type NewsUpdateToOneWithWhereWithoutSavesInput = {
    where?: NewsWhereInput
    data: XOR<NewsUpdateWithoutSavesInput, NewsUncheckedUpdateWithoutSavesInput>
  }

  export type NewsUpdateWithoutSavesInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    status?: NullableEnumStatus_NewsFieldUpdateOperationsInput | $Enums.Status_News | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    task?: TaskUpdateOneRequiredWithoutNewsNestedInput
    category?: CategoryUpdateOneRequiredWithoutNewsNestedInput
    author?: UserUpdateOneRequiredWithoutNewsNestedInput
    likes?: LikeUpdateManyWithoutNewsNestedInput
    comments?: CommentUpdateManyWithoutNewsNestedInput
    pending?: PendingUpdateManyWithoutNewsNestedInput
  }

  export type NewsUncheckedUpdateWithoutSavesInput = {
    id_news?: IntFieldUpdateOperationsInput | number
    taskId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    authorId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    status?: NullableEnumStatus_NewsFieldUpdateOperationsInput | $Enums.Status_News | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    likes?: LikeUncheckedUpdateManyWithoutNewsNestedInput
    comments?: CommentUncheckedUpdateManyWithoutNewsNestedInput
    pending?: PendingUncheckedUpdateManyWithoutNewsNestedInput
  }

  export type UserUpsertWithoutSavesInput = {
    update: XOR<UserUpdateWithoutSavesInput, UserUncheckedUpdateWithoutSavesInput>
    create: XOR<UserCreateWithoutSavesInput, UserUncheckedCreateWithoutSavesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSavesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSavesInput, UserUncheckedUpdateWithoutSavesInput>
  }

  export type UserUpdateWithoutSavesInput = {
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    university?: NullableStringFieldUpdateOperationsInput | string | null
    major?: NullableStringFieldUpdateOperationsInput | string | null
    internship_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    news?: NewsUpdateManyWithoutAuthorNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    likes?: LikeUpdateManyWithoutUserNestedInput
    marks?: MarkUpdateManyWithoutId_userNestedInput
  }

  export type UserUncheckedUpdateWithoutSavesInput = {
    id_user?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    university?: NullableStringFieldUpdateOperationsInput | string | null
    major?: NullableStringFieldUpdateOperationsInput | string | null
    internship_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    news?: NewsUncheckedUpdateManyWithoutAuthorNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    likes?: LikeUncheckedUpdateManyWithoutUserNestedInput
    marks?: MarkUncheckedUpdateManyWithoutId_userNestedInput
  }

  export type NewsCreateWithoutCommentsInput = {
    title: string
    content: string
    image: string
    status?: $Enums.Status_News | null
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    task: TaskCreateNestedOneWithoutNewsInput
    category: CategoryCreateNestedOneWithoutNewsInput
    author: UserCreateNestedOneWithoutNewsInput
    likes?: LikeCreateNestedManyWithoutNewsInput
    saves?: SaveCreateNestedManyWithoutNewsInput
    pending?: PendingCreateNestedManyWithoutNewsInput
  }

  export type NewsUncheckedCreateWithoutCommentsInput = {
    id_news?: number
    taskId: number
    categoryId: number
    authorId: number
    title: string
    content: string
    image: string
    status?: $Enums.Status_News | null
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    likes?: LikeUncheckedCreateNestedManyWithoutNewsInput
    saves?: SaveUncheckedCreateNestedManyWithoutNewsInput
    pending?: PendingUncheckedCreateNestedManyWithoutNewsInput
  }

  export type NewsCreateOrConnectWithoutCommentsInput = {
    where: NewsWhereUniqueInput
    create: XOR<NewsCreateWithoutCommentsInput, NewsUncheckedCreateWithoutCommentsInput>
  }

  export type UserCreateWithoutCommentsInput = {
    name: string
    username: string
    email: string
    password: string
    role?: $Enums.Role
    profile_picture?: string | null
    refresh_token?: string | null
    university?: string | null
    major?: string | null
    internship_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    news?: NewsCreateNestedManyWithoutAuthorInput
    likes?: LikeCreateNestedManyWithoutUserInput
    saves?: SaveCreateNestedManyWithoutUserInput
    marks?: MarkCreateNestedManyWithoutId_userInput
  }

  export type UserUncheckedCreateWithoutCommentsInput = {
    id_user?: number
    name: string
    username: string
    email: string
    password: string
    role?: $Enums.Role
    profile_picture?: string | null
    refresh_token?: string | null
    university?: string | null
    major?: string | null
    internship_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    news?: NewsUncheckedCreateNestedManyWithoutAuthorInput
    likes?: LikeUncheckedCreateNestedManyWithoutUserInput
    saves?: SaveUncheckedCreateNestedManyWithoutUserInput
    marks?: MarkUncheckedCreateNestedManyWithoutId_userInput
  }

  export type UserCreateOrConnectWithoutCommentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
  }

  export type NewsUpsertWithoutCommentsInput = {
    update: XOR<NewsUpdateWithoutCommentsInput, NewsUncheckedUpdateWithoutCommentsInput>
    create: XOR<NewsCreateWithoutCommentsInput, NewsUncheckedCreateWithoutCommentsInput>
    where?: NewsWhereInput
  }

  export type NewsUpdateToOneWithWhereWithoutCommentsInput = {
    where?: NewsWhereInput
    data: XOR<NewsUpdateWithoutCommentsInput, NewsUncheckedUpdateWithoutCommentsInput>
  }

  export type NewsUpdateWithoutCommentsInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    status?: NullableEnumStatus_NewsFieldUpdateOperationsInput | $Enums.Status_News | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    task?: TaskUpdateOneRequiredWithoutNewsNestedInput
    category?: CategoryUpdateOneRequiredWithoutNewsNestedInput
    author?: UserUpdateOneRequiredWithoutNewsNestedInput
    likes?: LikeUpdateManyWithoutNewsNestedInput
    saves?: SaveUpdateManyWithoutNewsNestedInput
    pending?: PendingUpdateManyWithoutNewsNestedInput
  }

  export type NewsUncheckedUpdateWithoutCommentsInput = {
    id_news?: IntFieldUpdateOperationsInput | number
    taskId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    authorId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    status?: NullableEnumStatus_NewsFieldUpdateOperationsInput | $Enums.Status_News | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    likes?: LikeUncheckedUpdateManyWithoutNewsNestedInput
    saves?: SaveUncheckedUpdateManyWithoutNewsNestedInput
    pending?: PendingUncheckedUpdateManyWithoutNewsNestedInput
  }

  export type UserUpsertWithoutCommentsInput = {
    update: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCommentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type UserUpdateWithoutCommentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    university?: NullableStringFieldUpdateOperationsInput | string | null
    major?: NullableStringFieldUpdateOperationsInput | string | null
    internship_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    news?: NewsUpdateManyWithoutAuthorNestedInput
    likes?: LikeUpdateManyWithoutUserNestedInput
    saves?: SaveUpdateManyWithoutUserNestedInput
    marks?: MarkUpdateManyWithoutId_userNestedInput
  }

  export type UserUncheckedUpdateWithoutCommentsInput = {
    id_user?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    university?: NullableStringFieldUpdateOperationsInput | string | null
    major?: NullableStringFieldUpdateOperationsInput | string | null
    internship_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    news?: NewsUncheckedUpdateManyWithoutAuthorNestedInput
    likes?: LikeUncheckedUpdateManyWithoutUserNestedInput
    saves?: SaveUncheckedUpdateManyWithoutUserNestedInput
    marks?: MarkUncheckedUpdateManyWithoutId_userNestedInput
  }

  export type NewsCreateWithoutPendingInput = {
    title: string
    content: string
    image: string
    status?: $Enums.Status_News | null
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    task: TaskCreateNestedOneWithoutNewsInput
    category: CategoryCreateNestedOneWithoutNewsInput
    author: UserCreateNestedOneWithoutNewsInput
    likes?: LikeCreateNestedManyWithoutNewsInput
    saves?: SaveCreateNestedManyWithoutNewsInput
    comments?: CommentCreateNestedManyWithoutNewsInput
  }

  export type NewsUncheckedCreateWithoutPendingInput = {
    id_news?: number
    taskId: number
    categoryId: number
    authorId: number
    title: string
    content: string
    image: string
    status?: $Enums.Status_News | null
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    likes?: LikeUncheckedCreateNestedManyWithoutNewsInput
    saves?: SaveUncheckedCreateNestedManyWithoutNewsInput
    comments?: CommentUncheckedCreateNestedManyWithoutNewsInput
  }

  export type NewsCreateOrConnectWithoutPendingInput = {
    where: NewsWhereUniqueInput
    create: XOR<NewsCreateWithoutPendingInput, NewsUncheckedCreateWithoutPendingInput>
  }

  export type NewsUpsertWithoutPendingInput = {
    update: XOR<NewsUpdateWithoutPendingInput, NewsUncheckedUpdateWithoutPendingInput>
    create: XOR<NewsCreateWithoutPendingInput, NewsUncheckedCreateWithoutPendingInput>
    where?: NewsWhereInput
  }

  export type NewsUpdateToOneWithWhereWithoutPendingInput = {
    where?: NewsWhereInput
    data: XOR<NewsUpdateWithoutPendingInput, NewsUncheckedUpdateWithoutPendingInput>
  }

  export type NewsUpdateWithoutPendingInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    status?: NullableEnumStatus_NewsFieldUpdateOperationsInput | $Enums.Status_News | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    task?: TaskUpdateOneRequiredWithoutNewsNestedInput
    category?: CategoryUpdateOneRequiredWithoutNewsNestedInput
    author?: UserUpdateOneRequiredWithoutNewsNestedInput
    likes?: LikeUpdateManyWithoutNewsNestedInput
    saves?: SaveUpdateManyWithoutNewsNestedInput
    comments?: CommentUpdateManyWithoutNewsNestedInput
  }

  export type NewsUncheckedUpdateWithoutPendingInput = {
    id_news?: IntFieldUpdateOperationsInput | number
    taskId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    authorId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    status?: NullableEnumStatus_NewsFieldUpdateOperationsInput | $Enums.Status_News | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    likes?: LikeUncheckedUpdateManyWithoutNewsNestedInput
    saves?: SaveUncheckedUpdateManyWithoutNewsNestedInput
    comments?: CommentUncheckedUpdateManyWithoutNewsNestedInput
  }

  export type TaskCreateWithoutMarksInput = {
    task_title: string
    task_deadline: Date | string
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    news?: NewsCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutMarksInput = {
    id_task?: number
    task_title: string
    task_deadline: Date | string
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    news?: NewsUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutMarksInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutMarksInput, TaskUncheckedCreateWithoutMarksInput>
  }

  export type UserCreateWithoutMarksInput = {
    name: string
    username: string
    email: string
    password: string
    role?: $Enums.Role
    profile_picture?: string | null
    refresh_token?: string | null
    university?: string | null
    major?: string | null
    internship_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    news?: NewsCreateNestedManyWithoutAuthorInput
    comments?: CommentCreateNestedManyWithoutUserInput
    likes?: LikeCreateNestedManyWithoutUserInput
    saves?: SaveCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMarksInput = {
    id_user?: number
    name: string
    username: string
    email: string
    password: string
    role?: $Enums.Role
    profile_picture?: string | null
    refresh_token?: string | null
    university?: string | null
    major?: string | null
    internship_date?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    news?: NewsUncheckedCreateNestedManyWithoutAuthorInput
    comments?: CommentUncheckedCreateNestedManyWithoutUserInput
    likes?: LikeUncheckedCreateNestedManyWithoutUserInput
    saves?: SaveUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMarksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMarksInput, UserUncheckedCreateWithoutMarksInput>
  }

  export type TaskUpsertWithoutMarksInput = {
    update: XOR<TaskUpdateWithoutMarksInput, TaskUncheckedUpdateWithoutMarksInput>
    create: XOR<TaskCreateWithoutMarksInput, TaskUncheckedCreateWithoutMarksInput>
    where?: TaskWhereInput
  }

  export type TaskUpdateToOneWithWhereWithoutMarksInput = {
    where?: TaskWhereInput
    data: XOR<TaskUpdateWithoutMarksInput, TaskUncheckedUpdateWithoutMarksInput>
  }

  export type TaskUpdateWithoutMarksInput = {
    task_title?: StringFieldUpdateOperationsInput | string
    task_deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    news?: NewsUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutMarksInput = {
    id_task?: IntFieldUpdateOperationsInput | number
    task_title?: StringFieldUpdateOperationsInput | string
    task_deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    news?: NewsUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type UserUpsertWithoutMarksInput = {
    update: XOR<UserUpdateWithoutMarksInput, UserUncheckedUpdateWithoutMarksInput>
    create: XOR<UserCreateWithoutMarksInput, UserUncheckedCreateWithoutMarksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMarksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMarksInput, UserUncheckedUpdateWithoutMarksInput>
  }

  export type UserUpdateWithoutMarksInput = {
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    university?: NullableStringFieldUpdateOperationsInput | string | null
    major?: NullableStringFieldUpdateOperationsInput | string | null
    internship_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    news?: NewsUpdateManyWithoutAuthorNestedInput
    comments?: CommentUpdateManyWithoutUserNestedInput
    likes?: LikeUpdateManyWithoutUserNestedInput
    saves?: SaveUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMarksInput = {
    id_user?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    university?: NullableStringFieldUpdateOperationsInput | string | null
    major?: NullableStringFieldUpdateOperationsInput | string | null
    internship_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    news?: NewsUncheckedUpdateManyWithoutAuthorNestedInput
    comments?: CommentUncheckedUpdateManyWithoutUserNestedInput
    likes?: LikeUncheckedUpdateManyWithoutUserNestedInput
    saves?: SaveUncheckedUpdateManyWithoutUserNestedInput
  }

  export type NewsCreateManyAuthorInput = {
    id_news?: number
    taskId: number
    categoryId: number
    title: string
    content: string
    image: string
    status?: $Enums.Status_News | null
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type CommentCreateManyUserInput = {
    id_comment?: number
    newsId: number
    comment: string
    timestamp?: Date | string
  }

  export type LikeCreateManyUserInput = {
    id_like?: number
    newsId: number
    like: boolean
    timestamp?: Date | string
  }

  export type SaveCreateManyUserInput = {
    id_save?: number
    newsId: number
    saved_news: boolean
    timestamp?: Date | string
  }

  export type MarkCreateManyId_userInput = {
    id_mark?: number
    taskId: number
    mark: number
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type NewsUpdateWithoutAuthorInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    status?: NullableEnumStatus_NewsFieldUpdateOperationsInput | $Enums.Status_News | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    task?: TaskUpdateOneRequiredWithoutNewsNestedInput
    category?: CategoryUpdateOneRequiredWithoutNewsNestedInput
    likes?: LikeUpdateManyWithoutNewsNestedInput
    saves?: SaveUpdateManyWithoutNewsNestedInput
    comments?: CommentUpdateManyWithoutNewsNestedInput
    pending?: PendingUpdateManyWithoutNewsNestedInput
  }

  export type NewsUncheckedUpdateWithoutAuthorInput = {
    id_news?: IntFieldUpdateOperationsInput | number
    taskId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    status?: NullableEnumStatus_NewsFieldUpdateOperationsInput | $Enums.Status_News | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    likes?: LikeUncheckedUpdateManyWithoutNewsNestedInput
    saves?: SaveUncheckedUpdateManyWithoutNewsNestedInput
    comments?: CommentUncheckedUpdateManyWithoutNewsNestedInput
    pending?: PendingUncheckedUpdateManyWithoutNewsNestedInput
  }

  export type NewsUncheckedUpdateManyWithoutAuthorInput = {
    id_news?: IntFieldUpdateOperationsInput | number
    taskId?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    status?: NullableEnumStatus_NewsFieldUpdateOperationsInput | $Enums.Status_News | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CommentUpdateWithoutUserInput = {
    comment?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    news?: NewsUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateWithoutUserInput = {
    id_comment?: IntFieldUpdateOperationsInput | number
    newsId?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyWithoutUserInput = {
    id_comment?: IntFieldUpdateOperationsInput | number
    newsId?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikeUpdateWithoutUserInput = {
    like?: BoolFieldUpdateOperationsInput | boolean
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    news?: NewsUpdateOneRequiredWithoutLikesNestedInput
  }

  export type LikeUncheckedUpdateWithoutUserInput = {
    id_like?: IntFieldUpdateOperationsInput | number
    newsId?: IntFieldUpdateOperationsInput | number
    like?: BoolFieldUpdateOperationsInput | boolean
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikeUncheckedUpdateManyWithoutUserInput = {
    id_like?: IntFieldUpdateOperationsInput | number
    newsId?: IntFieldUpdateOperationsInput | number
    like?: BoolFieldUpdateOperationsInput | boolean
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SaveUpdateWithoutUserInput = {
    saved_news?: BoolFieldUpdateOperationsInput | boolean
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    news?: NewsUpdateOneRequiredWithoutSavesNestedInput
  }

  export type SaveUncheckedUpdateWithoutUserInput = {
    id_save?: IntFieldUpdateOperationsInput | number
    newsId?: IntFieldUpdateOperationsInput | number
    saved_news?: BoolFieldUpdateOperationsInput | boolean
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SaveUncheckedUpdateManyWithoutUserInput = {
    id_save?: IntFieldUpdateOperationsInput | number
    newsId?: IntFieldUpdateOperationsInput | number
    saved_news?: BoolFieldUpdateOperationsInput | boolean
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MarkUpdateWithoutId_userInput = {
    mark?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_task?: TaskUpdateOneRequiredWithoutMarksNestedInput
  }

  export type MarkUncheckedUpdateWithoutId_userInput = {
    id_mark?: IntFieldUpdateOperationsInput | number
    taskId?: IntFieldUpdateOperationsInput | number
    mark?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MarkUncheckedUpdateManyWithoutId_userInput = {
    id_mark?: IntFieldUpdateOperationsInput | number
    taskId?: IntFieldUpdateOperationsInput | number
    mark?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type NewsCreateManyTaskInput = {
    id_news?: number
    categoryId: number
    authorId: number
    title: string
    content: string
    image: string
    status?: $Enums.Status_News | null
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type MarkCreateManyId_taskInput = {
    id_mark?: number
    userId: number
    mark: number
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type NewsUpdateWithoutTaskInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    status?: NullableEnumStatus_NewsFieldUpdateOperationsInput | $Enums.Status_News | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    category?: CategoryUpdateOneRequiredWithoutNewsNestedInput
    author?: UserUpdateOneRequiredWithoutNewsNestedInput
    likes?: LikeUpdateManyWithoutNewsNestedInput
    saves?: SaveUpdateManyWithoutNewsNestedInput
    comments?: CommentUpdateManyWithoutNewsNestedInput
    pending?: PendingUpdateManyWithoutNewsNestedInput
  }

  export type NewsUncheckedUpdateWithoutTaskInput = {
    id_news?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    authorId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    status?: NullableEnumStatus_NewsFieldUpdateOperationsInput | $Enums.Status_News | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    likes?: LikeUncheckedUpdateManyWithoutNewsNestedInput
    saves?: SaveUncheckedUpdateManyWithoutNewsNestedInput
    comments?: CommentUncheckedUpdateManyWithoutNewsNestedInput
    pending?: PendingUncheckedUpdateManyWithoutNewsNestedInput
  }

  export type NewsUncheckedUpdateManyWithoutTaskInput = {
    id_news?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    authorId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    status?: NullableEnumStatus_NewsFieldUpdateOperationsInput | $Enums.Status_News | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MarkUpdateWithoutId_taskInput = {
    mark?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    id_user?: UserUpdateOneRequiredWithoutMarksNestedInput
  }

  export type MarkUncheckedUpdateWithoutId_taskInput = {
    id_mark?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    mark?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MarkUncheckedUpdateManyWithoutId_taskInput = {
    id_mark?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    mark?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type NewsCreateManyCategoryInput = {
    id_news?: number
    taskId: number
    authorId: number
    title: string
    content: string
    image: string
    status?: $Enums.Status_News | null
    created_at?: Date | string
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type NewsUpdateWithoutCategoryInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    status?: NullableEnumStatus_NewsFieldUpdateOperationsInput | $Enums.Status_News | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    task?: TaskUpdateOneRequiredWithoutNewsNestedInput
    author?: UserUpdateOneRequiredWithoutNewsNestedInput
    likes?: LikeUpdateManyWithoutNewsNestedInput
    saves?: SaveUpdateManyWithoutNewsNestedInput
    comments?: CommentUpdateManyWithoutNewsNestedInput
    pending?: PendingUpdateManyWithoutNewsNestedInput
  }

  export type NewsUncheckedUpdateWithoutCategoryInput = {
    id_news?: IntFieldUpdateOperationsInput | number
    taskId?: IntFieldUpdateOperationsInput | number
    authorId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    status?: NullableEnumStatus_NewsFieldUpdateOperationsInput | $Enums.Status_News | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    likes?: LikeUncheckedUpdateManyWithoutNewsNestedInput
    saves?: SaveUncheckedUpdateManyWithoutNewsNestedInput
    comments?: CommentUncheckedUpdateManyWithoutNewsNestedInput
    pending?: PendingUncheckedUpdateManyWithoutNewsNestedInput
  }

  export type NewsUncheckedUpdateManyWithoutCategoryInput = {
    id_news?: IntFieldUpdateOperationsInput | number
    taskId?: IntFieldUpdateOperationsInput | number
    authorId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    status?: NullableEnumStatus_NewsFieldUpdateOperationsInput | $Enums.Status_News | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LikeCreateManyNewsInput = {
    id_like?: number
    userId: number
    like: boolean
    timestamp?: Date | string
  }

  export type SaveCreateManyNewsInput = {
    id_save?: number
    userId: number
    saved_news: boolean
    timestamp?: Date | string
  }

  export type CommentCreateManyNewsInput = {
    id_comment?: number
    userId: number
    comment: string
    timestamp?: Date | string
  }

  export type PendingCreateManyNewsInput = {
    id_pending?: number
    status?: $Enums.Status_News
    note?: string | null
    created_at?: Date | string
    resolved_at?: Date | string | null
  }

  export type LikeUpdateWithoutNewsInput = {
    like?: BoolFieldUpdateOperationsInput | boolean
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLikesNestedInput
  }

  export type LikeUncheckedUpdateWithoutNewsInput = {
    id_like?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    like?: BoolFieldUpdateOperationsInput | boolean
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikeUncheckedUpdateManyWithoutNewsInput = {
    id_like?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    like?: BoolFieldUpdateOperationsInput | boolean
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SaveUpdateWithoutNewsInput = {
    saved_news?: BoolFieldUpdateOperationsInput | boolean
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSavesNestedInput
  }

  export type SaveUncheckedUpdateWithoutNewsInput = {
    id_save?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    saved_news?: BoolFieldUpdateOperationsInput | boolean
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SaveUncheckedUpdateManyWithoutNewsInput = {
    id_save?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    saved_news?: BoolFieldUpdateOperationsInput | boolean
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUpdateWithoutNewsInput = {
    comment?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateWithoutNewsInput = {
    id_comment?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyWithoutNewsInput = {
    id_comment?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PendingUpdateWithoutNewsInput = {
    status?: EnumStatus_NewsFieldUpdateOperationsInput | $Enums.Status_News
    note?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    resolved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PendingUncheckedUpdateWithoutNewsInput = {
    id_pending?: IntFieldUpdateOperationsInput | number
    status?: EnumStatus_NewsFieldUpdateOperationsInput | $Enums.Status_News
    note?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    resolved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PendingUncheckedUpdateManyWithoutNewsInput = {
    id_pending?: IntFieldUpdateOperationsInput | number
    status?: EnumStatus_NewsFieldUpdateOperationsInput | $Enums.Status_News
    note?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    resolved_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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