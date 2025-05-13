
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
 * Model tbl_campanias
 * 
 */
export type tbl_campanias = $Result.DefaultSelection<Prisma.$tbl_campaniasPayload>
/**
 * Model tbl_clientes
 * 
 */
export type tbl_clientes = $Result.DefaultSelection<Prisma.$tbl_clientesPayload>
/**
 * Model tbl_departamentos
 * 
 */
export type tbl_departamentos = $Result.DefaultSelection<Prisma.$tbl_departamentosPayload>
/**
 * Model tbl_det_productos
 * 
 */
export type tbl_det_productos = $Result.DefaultSelection<Prisma.$tbl_det_productosPayload>
/**
 * Model tbl_estados_usuario
 * 
 */
export type tbl_estados_usuario = $Result.DefaultSelection<Prisma.$tbl_estados_usuarioPayload>
/**
 * Model tbl_municipios
 * 
 */
export type tbl_municipios = $Result.DefaultSelection<Prisma.$tbl_municipiosPayload>
/**
 * Model tbl_pedidos
 * 
 */
export type tbl_pedidos = $Result.DefaultSelection<Prisma.$tbl_pedidosPayload>
/**
 * Model tbl_personas
 * 
 */
export type tbl_personas = $Result.DefaultSelection<Prisma.$tbl_personasPayload>
/**
 * Model tbl_productos
 * 
 */
export type tbl_productos = $Result.DefaultSelection<Prisma.$tbl_productosPayload>
/**
 * Model tbl_empresas
 * 
 */
export type tbl_empresas = $Result.DefaultSelection<Prisma.$tbl_empresasPayload>
/**
 * Model tbl_roles
 * 
 */
export type tbl_roles = $Result.DefaultSelection<Prisma.$tbl_rolesPayload>
/**
 * Model tbl_comercios
 * 
 */
export type tbl_comercios = $Result.DefaultSelection<Prisma.$tbl_comerciosPayload>
/**
 * Model tbl_transportadoras
 * 
 */
export type tbl_transportadoras = $Result.DefaultSelection<Prisma.$tbl_transportadorasPayload>
/**
 * Model tbl_usuarios
 * 
 */
export type tbl_usuarios = $Result.DefaultSelection<Prisma.$tbl_usuariosPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Tbl_campanias
 * const tbl_campanias = await prisma.tbl_campanias.findMany()
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
   * // Fetch zero or more Tbl_campanias
   * const tbl_campanias = await prisma.tbl_campanias.findMany()
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
   * `prisma.tbl_campanias`: Exposes CRUD operations for the **tbl_campanias** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tbl_campanias
    * const tbl_campanias = await prisma.tbl_campanias.findMany()
    * ```
    */
  get tbl_campanias(): Prisma.tbl_campaniasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tbl_clientes`: Exposes CRUD operations for the **tbl_clientes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tbl_clientes
    * const tbl_clientes = await prisma.tbl_clientes.findMany()
    * ```
    */
  get tbl_clientes(): Prisma.tbl_clientesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tbl_departamentos`: Exposes CRUD operations for the **tbl_departamentos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tbl_departamentos
    * const tbl_departamentos = await prisma.tbl_departamentos.findMany()
    * ```
    */
  get tbl_departamentos(): Prisma.tbl_departamentosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tbl_det_productos`: Exposes CRUD operations for the **tbl_det_productos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tbl_det_productos
    * const tbl_det_productos = await prisma.tbl_det_productos.findMany()
    * ```
    */
  get tbl_det_productos(): Prisma.tbl_det_productosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tbl_estados_usuario`: Exposes CRUD operations for the **tbl_estados_usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tbl_estados_usuarios
    * const tbl_estados_usuarios = await prisma.tbl_estados_usuario.findMany()
    * ```
    */
  get tbl_estados_usuario(): Prisma.tbl_estados_usuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tbl_municipios`: Exposes CRUD operations for the **tbl_municipios** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tbl_municipios
    * const tbl_municipios = await prisma.tbl_municipios.findMany()
    * ```
    */
  get tbl_municipios(): Prisma.tbl_municipiosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tbl_pedidos`: Exposes CRUD operations for the **tbl_pedidos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tbl_pedidos
    * const tbl_pedidos = await prisma.tbl_pedidos.findMany()
    * ```
    */
  get tbl_pedidos(): Prisma.tbl_pedidosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tbl_personas`: Exposes CRUD operations for the **tbl_personas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tbl_personas
    * const tbl_personas = await prisma.tbl_personas.findMany()
    * ```
    */
  get tbl_personas(): Prisma.tbl_personasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tbl_productos`: Exposes CRUD operations for the **tbl_productos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tbl_productos
    * const tbl_productos = await prisma.tbl_productos.findMany()
    * ```
    */
  get tbl_productos(): Prisma.tbl_productosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tbl_empresas`: Exposes CRUD operations for the **tbl_empresas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tbl_empresas
    * const tbl_empresas = await prisma.tbl_empresas.findMany()
    * ```
    */
  get tbl_empresas(): Prisma.tbl_empresasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tbl_roles`: Exposes CRUD operations for the **tbl_roles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tbl_roles
    * const tbl_roles = await prisma.tbl_roles.findMany()
    * ```
    */
  get tbl_roles(): Prisma.tbl_rolesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tbl_comercios`: Exposes CRUD operations for the **tbl_comercios** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tbl_comercios
    * const tbl_comercios = await prisma.tbl_comercios.findMany()
    * ```
    */
  get tbl_comercios(): Prisma.tbl_comerciosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tbl_transportadoras`: Exposes CRUD operations for the **tbl_transportadoras** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tbl_transportadoras
    * const tbl_transportadoras = await prisma.tbl_transportadoras.findMany()
    * ```
    */
  get tbl_transportadoras(): Prisma.tbl_transportadorasDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tbl_usuarios`: Exposes CRUD operations for the **tbl_usuarios** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tbl_usuarios
    * const tbl_usuarios = await prisma.tbl_usuarios.findMany()
    * ```
    */
  get tbl_usuarios(): Prisma.tbl_usuariosDelegate<ExtArgs, ClientOptions>;
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
    tbl_campanias: 'tbl_campanias',
    tbl_clientes: 'tbl_clientes',
    tbl_departamentos: 'tbl_departamentos',
    tbl_det_productos: 'tbl_det_productos',
    tbl_estados_usuario: 'tbl_estados_usuario',
    tbl_municipios: 'tbl_municipios',
    tbl_pedidos: 'tbl_pedidos',
    tbl_personas: 'tbl_personas',
    tbl_productos: 'tbl_productos',
    tbl_empresas: 'tbl_empresas',
    tbl_roles: 'tbl_roles',
    tbl_comercios: 'tbl_comercios',
    tbl_transportadoras: 'tbl_transportadoras',
    tbl_usuarios: 'tbl_usuarios'
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
      modelProps: "tbl_campanias" | "tbl_clientes" | "tbl_departamentos" | "tbl_det_productos" | "tbl_estados_usuario" | "tbl_municipios" | "tbl_pedidos" | "tbl_personas" | "tbl_productos" | "tbl_empresas" | "tbl_roles" | "tbl_comercios" | "tbl_transportadoras" | "tbl_usuarios"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      tbl_campanias: {
        payload: Prisma.$tbl_campaniasPayload<ExtArgs>
        fields: Prisma.tbl_campaniasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tbl_campaniasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_campaniasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tbl_campaniasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_campaniasPayload>
          }
          findFirst: {
            args: Prisma.tbl_campaniasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_campaniasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tbl_campaniasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_campaniasPayload>
          }
          findMany: {
            args: Prisma.tbl_campaniasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_campaniasPayload>[]
          }
          create: {
            args: Prisma.tbl_campaniasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_campaniasPayload>
          }
          createMany: {
            args: Prisma.tbl_campaniasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.tbl_campaniasCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_campaniasPayload>[]
          }
          delete: {
            args: Prisma.tbl_campaniasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_campaniasPayload>
          }
          update: {
            args: Prisma.tbl_campaniasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_campaniasPayload>
          }
          deleteMany: {
            args: Prisma.tbl_campaniasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tbl_campaniasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.tbl_campaniasUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_campaniasPayload>[]
          }
          upsert: {
            args: Prisma.tbl_campaniasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_campaniasPayload>
          }
          aggregate: {
            args: Prisma.Tbl_campaniasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTbl_campanias>
          }
          groupBy: {
            args: Prisma.tbl_campaniasGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tbl_campaniasGroupByOutputType>[]
          }
          count: {
            args: Prisma.tbl_campaniasCountArgs<ExtArgs>
            result: $Utils.Optional<Tbl_campaniasCountAggregateOutputType> | number
          }
        }
      }
      tbl_clientes: {
        payload: Prisma.$tbl_clientesPayload<ExtArgs>
        fields: Prisma.tbl_clientesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tbl_clientesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_clientesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tbl_clientesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_clientesPayload>
          }
          findFirst: {
            args: Prisma.tbl_clientesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_clientesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tbl_clientesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_clientesPayload>
          }
          findMany: {
            args: Prisma.tbl_clientesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_clientesPayload>[]
          }
          create: {
            args: Prisma.tbl_clientesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_clientesPayload>
          }
          createMany: {
            args: Prisma.tbl_clientesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.tbl_clientesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_clientesPayload>[]
          }
          delete: {
            args: Prisma.tbl_clientesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_clientesPayload>
          }
          update: {
            args: Prisma.tbl_clientesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_clientesPayload>
          }
          deleteMany: {
            args: Prisma.tbl_clientesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tbl_clientesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.tbl_clientesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_clientesPayload>[]
          }
          upsert: {
            args: Prisma.tbl_clientesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_clientesPayload>
          }
          aggregate: {
            args: Prisma.Tbl_clientesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTbl_clientes>
          }
          groupBy: {
            args: Prisma.tbl_clientesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tbl_clientesGroupByOutputType>[]
          }
          count: {
            args: Prisma.tbl_clientesCountArgs<ExtArgs>
            result: $Utils.Optional<Tbl_clientesCountAggregateOutputType> | number
          }
        }
      }
      tbl_departamentos: {
        payload: Prisma.$tbl_departamentosPayload<ExtArgs>
        fields: Prisma.tbl_departamentosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tbl_departamentosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_departamentosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tbl_departamentosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_departamentosPayload>
          }
          findFirst: {
            args: Prisma.tbl_departamentosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_departamentosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tbl_departamentosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_departamentosPayload>
          }
          findMany: {
            args: Prisma.tbl_departamentosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_departamentosPayload>[]
          }
          create: {
            args: Prisma.tbl_departamentosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_departamentosPayload>
          }
          createMany: {
            args: Prisma.tbl_departamentosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.tbl_departamentosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_departamentosPayload>[]
          }
          delete: {
            args: Prisma.tbl_departamentosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_departamentosPayload>
          }
          update: {
            args: Prisma.tbl_departamentosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_departamentosPayload>
          }
          deleteMany: {
            args: Prisma.tbl_departamentosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tbl_departamentosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.tbl_departamentosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_departamentosPayload>[]
          }
          upsert: {
            args: Prisma.tbl_departamentosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_departamentosPayload>
          }
          aggregate: {
            args: Prisma.Tbl_departamentosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTbl_departamentos>
          }
          groupBy: {
            args: Prisma.tbl_departamentosGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tbl_departamentosGroupByOutputType>[]
          }
          count: {
            args: Prisma.tbl_departamentosCountArgs<ExtArgs>
            result: $Utils.Optional<Tbl_departamentosCountAggregateOutputType> | number
          }
        }
      }
      tbl_det_productos: {
        payload: Prisma.$tbl_det_productosPayload<ExtArgs>
        fields: Prisma.tbl_det_productosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tbl_det_productosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_det_productosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tbl_det_productosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_det_productosPayload>
          }
          findFirst: {
            args: Prisma.tbl_det_productosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_det_productosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tbl_det_productosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_det_productosPayload>
          }
          findMany: {
            args: Prisma.tbl_det_productosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_det_productosPayload>[]
          }
          create: {
            args: Prisma.tbl_det_productosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_det_productosPayload>
          }
          createMany: {
            args: Prisma.tbl_det_productosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.tbl_det_productosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_det_productosPayload>[]
          }
          delete: {
            args: Prisma.tbl_det_productosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_det_productosPayload>
          }
          update: {
            args: Prisma.tbl_det_productosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_det_productosPayload>
          }
          deleteMany: {
            args: Prisma.tbl_det_productosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tbl_det_productosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.tbl_det_productosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_det_productosPayload>[]
          }
          upsert: {
            args: Prisma.tbl_det_productosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_det_productosPayload>
          }
          aggregate: {
            args: Prisma.Tbl_det_productosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTbl_det_productos>
          }
          groupBy: {
            args: Prisma.tbl_det_productosGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tbl_det_productosGroupByOutputType>[]
          }
          count: {
            args: Prisma.tbl_det_productosCountArgs<ExtArgs>
            result: $Utils.Optional<Tbl_det_productosCountAggregateOutputType> | number
          }
        }
      }
      tbl_estados_usuario: {
        payload: Prisma.$tbl_estados_usuarioPayload<ExtArgs>
        fields: Prisma.tbl_estados_usuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tbl_estados_usuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_estados_usuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tbl_estados_usuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_estados_usuarioPayload>
          }
          findFirst: {
            args: Prisma.tbl_estados_usuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_estados_usuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tbl_estados_usuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_estados_usuarioPayload>
          }
          findMany: {
            args: Prisma.tbl_estados_usuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_estados_usuarioPayload>[]
          }
          create: {
            args: Prisma.tbl_estados_usuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_estados_usuarioPayload>
          }
          createMany: {
            args: Prisma.tbl_estados_usuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.tbl_estados_usuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_estados_usuarioPayload>[]
          }
          delete: {
            args: Prisma.tbl_estados_usuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_estados_usuarioPayload>
          }
          update: {
            args: Prisma.tbl_estados_usuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_estados_usuarioPayload>
          }
          deleteMany: {
            args: Prisma.tbl_estados_usuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tbl_estados_usuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.tbl_estados_usuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_estados_usuarioPayload>[]
          }
          upsert: {
            args: Prisma.tbl_estados_usuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_estados_usuarioPayload>
          }
          aggregate: {
            args: Prisma.Tbl_estados_usuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTbl_estados_usuario>
          }
          groupBy: {
            args: Prisma.tbl_estados_usuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tbl_estados_usuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.tbl_estados_usuarioCountArgs<ExtArgs>
            result: $Utils.Optional<Tbl_estados_usuarioCountAggregateOutputType> | number
          }
        }
      }
      tbl_municipios: {
        payload: Prisma.$tbl_municipiosPayload<ExtArgs>
        fields: Prisma.tbl_municipiosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tbl_municipiosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_municipiosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tbl_municipiosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_municipiosPayload>
          }
          findFirst: {
            args: Prisma.tbl_municipiosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_municipiosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tbl_municipiosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_municipiosPayload>
          }
          findMany: {
            args: Prisma.tbl_municipiosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_municipiosPayload>[]
          }
          create: {
            args: Prisma.tbl_municipiosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_municipiosPayload>
          }
          createMany: {
            args: Prisma.tbl_municipiosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.tbl_municipiosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_municipiosPayload>[]
          }
          delete: {
            args: Prisma.tbl_municipiosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_municipiosPayload>
          }
          update: {
            args: Prisma.tbl_municipiosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_municipiosPayload>
          }
          deleteMany: {
            args: Prisma.tbl_municipiosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tbl_municipiosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.tbl_municipiosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_municipiosPayload>[]
          }
          upsert: {
            args: Prisma.tbl_municipiosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_municipiosPayload>
          }
          aggregate: {
            args: Prisma.Tbl_municipiosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTbl_municipios>
          }
          groupBy: {
            args: Prisma.tbl_municipiosGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tbl_municipiosGroupByOutputType>[]
          }
          count: {
            args: Prisma.tbl_municipiosCountArgs<ExtArgs>
            result: $Utils.Optional<Tbl_municipiosCountAggregateOutputType> | number
          }
        }
      }
      tbl_pedidos: {
        payload: Prisma.$tbl_pedidosPayload<ExtArgs>
        fields: Prisma.tbl_pedidosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tbl_pedidosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_pedidosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tbl_pedidosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_pedidosPayload>
          }
          findFirst: {
            args: Prisma.tbl_pedidosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_pedidosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tbl_pedidosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_pedidosPayload>
          }
          findMany: {
            args: Prisma.tbl_pedidosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_pedidosPayload>[]
          }
          create: {
            args: Prisma.tbl_pedidosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_pedidosPayload>
          }
          createMany: {
            args: Prisma.tbl_pedidosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.tbl_pedidosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_pedidosPayload>[]
          }
          delete: {
            args: Prisma.tbl_pedidosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_pedidosPayload>
          }
          update: {
            args: Prisma.tbl_pedidosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_pedidosPayload>
          }
          deleteMany: {
            args: Prisma.tbl_pedidosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tbl_pedidosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.tbl_pedidosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_pedidosPayload>[]
          }
          upsert: {
            args: Prisma.tbl_pedidosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_pedidosPayload>
          }
          aggregate: {
            args: Prisma.Tbl_pedidosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTbl_pedidos>
          }
          groupBy: {
            args: Prisma.tbl_pedidosGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tbl_pedidosGroupByOutputType>[]
          }
          count: {
            args: Prisma.tbl_pedidosCountArgs<ExtArgs>
            result: $Utils.Optional<Tbl_pedidosCountAggregateOutputType> | number
          }
        }
      }
      tbl_personas: {
        payload: Prisma.$tbl_personasPayload<ExtArgs>
        fields: Prisma.tbl_personasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tbl_personasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_personasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tbl_personasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_personasPayload>
          }
          findFirst: {
            args: Prisma.tbl_personasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_personasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tbl_personasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_personasPayload>
          }
          findMany: {
            args: Prisma.tbl_personasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_personasPayload>[]
          }
          create: {
            args: Prisma.tbl_personasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_personasPayload>
          }
          createMany: {
            args: Prisma.tbl_personasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.tbl_personasCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_personasPayload>[]
          }
          delete: {
            args: Prisma.tbl_personasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_personasPayload>
          }
          update: {
            args: Prisma.tbl_personasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_personasPayload>
          }
          deleteMany: {
            args: Prisma.tbl_personasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tbl_personasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.tbl_personasUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_personasPayload>[]
          }
          upsert: {
            args: Prisma.tbl_personasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_personasPayload>
          }
          aggregate: {
            args: Prisma.Tbl_personasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTbl_personas>
          }
          groupBy: {
            args: Prisma.tbl_personasGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tbl_personasGroupByOutputType>[]
          }
          count: {
            args: Prisma.tbl_personasCountArgs<ExtArgs>
            result: $Utils.Optional<Tbl_personasCountAggregateOutputType> | number
          }
        }
      }
      tbl_productos: {
        payload: Prisma.$tbl_productosPayload<ExtArgs>
        fields: Prisma.tbl_productosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tbl_productosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_productosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tbl_productosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_productosPayload>
          }
          findFirst: {
            args: Prisma.tbl_productosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_productosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tbl_productosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_productosPayload>
          }
          findMany: {
            args: Prisma.tbl_productosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_productosPayload>[]
          }
          create: {
            args: Prisma.tbl_productosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_productosPayload>
          }
          createMany: {
            args: Prisma.tbl_productosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.tbl_productosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_productosPayload>[]
          }
          delete: {
            args: Prisma.tbl_productosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_productosPayload>
          }
          update: {
            args: Prisma.tbl_productosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_productosPayload>
          }
          deleteMany: {
            args: Prisma.tbl_productosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tbl_productosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.tbl_productosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_productosPayload>[]
          }
          upsert: {
            args: Prisma.tbl_productosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_productosPayload>
          }
          aggregate: {
            args: Prisma.Tbl_productosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTbl_productos>
          }
          groupBy: {
            args: Prisma.tbl_productosGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tbl_productosGroupByOutputType>[]
          }
          count: {
            args: Prisma.tbl_productosCountArgs<ExtArgs>
            result: $Utils.Optional<Tbl_productosCountAggregateOutputType> | number
          }
        }
      }
      tbl_empresas: {
        payload: Prisma.$tbl_empresasPayload<ExtArgs>
        fields: Prisma.tbl_empresasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tbl_empresasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_empresasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tbl_empresasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_empresasPayload>
          }
          findFirst: {
            args: Prisma.tbl_empresasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_empresasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tbl_empresasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_empresasPayload>
          }
          findMany: {
            args: Prisma.tbl_empresasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_empresasPayload>[]
          }
          create: {
            args: Prisma.tbl_empresasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_empresasPayload>
          }
          createMany: {
            args: Prisma.tbl_empresasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.tbl_empresasCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_empresasPayload>[]
          }
          delete: {
            args: Prisma.tbl_empresasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_empresasPayload>
          }
          update: {
            args: Prisma.tbl_empresasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_empresasPayload>
          }
          deleteMany: {
            args: Prisma.tbl_empresasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tbl_empresasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.tbl_empresasUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_empresasPayload>[]
          }
          upsert: {
            args: Prisma.tbl_empresasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_empresasPayload>
          }
          aggregate: {
            args: Prisma.Tbl_empresasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTbl_empresas>
          }
          groupBy: {
            args: Prisma.tbl_empresasGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tbl_empresasGroupByOutputType>[]
          }
          count: {
            args: Prisma.tbl_empresasCountArgs<ExtArgs>
            result: $Utils.Optional<Tbl_empresasCountAggregateOutputType> | number
          }
        }
      }
      tbl_roles: {
        payload: Prisma.$tbl_rolesPayload<ExtArgs>
        fields: Prisma.tbl_rolesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tbl_rolesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_rolesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tbl_rolesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_rolesPayload>
          }
          findFirst: {
            args: Prisma.tbl_rolesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_rolesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tbl_rolesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_rolesPayload>
          }
          findMany: {
            args: Prisma.tbl_rolesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_rolesPayload>[]
          }
          create: {
            args: Prisma.tbl_rolesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_rolesPayload>
          }
          createMany: {
            args: Prisma.tbl_rolesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.tbl_rolesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_rolesPayload>[]
          }
          delete: {
            args: Prisma.tbl_rolesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_rolesPayload>
          }
          update: {
            args: Prisma.tbl_rolesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_rolesPayload>
          }
          deleteMany: {
            args: Prisma.tbl_rolesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tbl_rolesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.tbl_rolesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_rolesPayload>[]
          }
          upsert: {
            args: Prisma.tbl_rolesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_rolesPayload>
          }
          aggregate: {
            args: Prisma.Tbl_rolesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTbl_roles>
          }
          groupBy: {
            args: Prisma.tbl_rolesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tbl_rolesGroupByOutputType>[]
          }
          count: {
            args: Prisma.tbl_rolesCountArgs<ExtArgs>
            result: $Utils.Optional<Tbl_rolesCountAggregateOutputType> | number
          }
        }
      }
      tbl_comercios: {
        payload: Prisma.$tbl_comerciosPayload<ExtArgs>
        fields: Prisma.tbl_comerciosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tbl_comerciosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_comerciosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tbl_comerciosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_comerciosPayload>
          }
          findFirst: {
            args: Prisma.tbl_comerciosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_comerciosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tbl_comerciosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_comerciosPayload>
          }
          findMany: {
            args: Prisma.tbl_comerciosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_comerciosPayload>[]
          }
          create: {
            args: Prisma.tbl_comerciosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_comerciosPayload>
          }
          createMany: {
            args: Prisma.tbl_comerciosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.tbl_comerciosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_comerciosPayload>[]
          }
          delete: {
            args: Prisma.tbl_comerciosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_comerciosPayload>
          }
          update: {
            args: Prisma.tbl_comerciosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_comerciosPayload>
          }
          deleteMany: {
            args: Prisma.tbl_comerciosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tbl_comerciosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.tbl_comerciosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_comerciosPayload>[]
          }
          upsert: {
            args: Prisma.tbl_comerciosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_comerciosPayload>
          }
          aggregate: {
            args: Prisma.Tbl_comerciosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTbl_comercios>
          }
          groupBy: {
            args: Prisma.tbl_comerciosGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tbl_comerciosGroupByOutputType>[]
          }
          count: {
            args: Prisma.tbl_comerciosCountArgs<ExtArgs>
            result: $Utils.Optional<Tbl_comerciosCountAggregateOutputType> | number
          }
        }
      }
      tbl_transportadoras: {
        payload: Prisma.$tbl_transportadorasPayload<ExtArgs>
        fields: Prisma.tbl_transportadorasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tbl_transportadorasFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_transportadorasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tbl_transportadorasFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_transportadorasPayload>
          }
          findFirst: {
            args: Prisma.tbl_transportadorasFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_transportadorasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tbl_transportadorasFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_transportadorasPayload>
          }
          findMany: {
            args: Prisma.tbl_transportadorasFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_transportadorasPayload>[]
          }
          create: {
            args: Prisma.tbl_transportadorasCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_transportadorasPayload>
          }
          createMany: {
            args: Prisma.tbl_transportadorasCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.tbl_transportadorasCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_transportadorasPayload>[]
          }
          delete: {
            args: Prisma.tbl_transportadorasDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_transportadorasPayload>
          }
          update: {
            args: Prisma.tbl_transportadorasUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_transportadorasPayload>
          }
          deleteMany: {
            args: Prisma.tbl_transportadorasDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tbl_transportadorasUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.tbl_transportadorasUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_transportadorasPayload>[]
          }
          upsert: {
            args: Prisma.tbl_transportadorasUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_transportadorasPayload>
          }
          aggregate: {
            args: Prisma.Tbl_transportadorasAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTbl_transportadoras>
          }
          groupBy: {
            args: Prisma.tbl_transportadorasGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tbl_transportadorasGroupByOutputType>[]
          }
          count: {
            args: Prisma.tbl_transportadorasCountArgs<ExtArgs>
            result: $Utils.Optional<Tbl_transportadorasCountAggregateOutputType> | number
          }
        }
      }
      tbl_usuarios: {
        payload: Prisma.$tbl_usuariosPayload<ExtArgs>
        fields: Prisma.tbl_usuariosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tbl_usuariosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_usuariosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tbl_usuariosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_usuariosPayload>
          }
          findFirst: {
            args: Prisma.tbl_usuariosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_usuariosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tbl_usuariosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_usuariosPayload>
          }
          findMany: {
            args: Prisma.tbl_usuariosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_usuariosPayload>[]
          }
          create: {
            args: Prisma.tbl_usuariosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_usuariosPayload>
          }
          createMany: {
            args: Prisma.tbl_usuariosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.tbl_usuariosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_usuariosPayload>[]
          }
          delete: {
            args: Prisma.tbl_usuariosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_usuariosPayload>
          }
          update: {
            args: Prisma.tbl_usuariosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_usuariosPayload>
          }
          deleteMany: {
            args: Prisma.tbl_usuariosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tbl_usuariosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.tbl_usuariosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_usuariosPayload>[]
          }
          upsert: {
            args: Prisma.tbl_usuariosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tbl_usuariosPayload>
          }
          aggregate: {
            args: Prisma.Tbl_usuariosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTbl_usuarios>
          }
          groupBy: {
            args: Prisma.tbl_usuariosGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tbl_usuariosGroupByOutputType>[]
          }
          count: {
            args: Prisma.tbl_usuariosCountArgs<ExtArgs>
            result: $Utils.Optional<Tbl_usuariosCountAggregateOutputType> | number
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
    tbl_campanias?: tbl_campaniasOmit
    tbl_clientes?: tbl_clientesOmit
    tbl_departamentos?: tbl_departamentosOmit
    tbl_det_productos?: tbl_det_productosOmit
    tbl_estados_usuario?: tbl_estados_usuarioOmit
    tbl_municipios?: tbl_municipiosOmit
    tbl_pedidos?: tbl_pedidosOmit
    tbl_personas?: tbl_personasOmit
    tbl_productos?: tbl_productosOmit
    tbl_empresas?: tbl_empresasOmit
    tbl_roles?: tbl_rolesOmit
    tbl_comercios?: tbl_comerciosOmit
    tbl_transportadoras?: tbl_transportadorasOmit
    tbl_usuarios?: tbl_usuariosOmit
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
   * Count Type Tbl_clientesCountOutputType
   */

  export type Tbl_clientesCountOutputType = {
    pedidos: number
  }

  export type Tbl_clientesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedidos?: boolean | Tbl_clientesCountOutputTypeCountPedidosArgs
  }

  // Custom InputTypes
  /**
   * Tbl_clientesCountOutputType without action
   */
  export type Tbl_clientesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tbl_clientesCountOutputType
     */
    select?: Tbl_clientesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Tbl_clientesCountOutputType without action
   */
  export type Tbl_clientesCountOutputTypeCountPedidosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_pedidosWhereInput
  }


  /**
   * Count Type Tbl_departamentosCountOutputType
   */

  export type Tbl_departamentosCountOutputType = {
    municipios: number
  }

  export type Tbl_departamentosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    municipios?: boolean | Tbl_departamentosCountOutputTypeCountMunicipiosArgs
  }

  // Custom InputTypes
  /**
   * Tbl_departamentosCountOutputType without action
   */
  export type Tbl_departamentosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tbl_departamentosCountOutputType
     */
    select?: Tbl_departamentosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Tbl_departamentosCountOutputType without action
   */
  export type Tbl_departamentosCountOutputTypeCountMunicipiosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_municipiosWhereInput
  }


  /**
   * Count Type Tbl_det_productosCountOutputType
   */

  export type Tbl_det_productosCountOutputType = {
    pedidos: number
  }

  export type Tbl_det_productosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedidos?: boolean | Tbl_det_productosCountOutputTypeCountPedidosArgs
  }

  // Custom InputTypes
  /**
   * Tbl_det_productosCountOutputType without action
   */
  export type Tbl_det_productosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tbl_det_productosCountOutputType
     */
    select?: Tbl_det_productosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Tbl_det_productosCountOutputType without action
   */
  export type Tbl_det_productosCountOutputTypeCountPedidosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_pedidosWhereInput
  }


  /**
   * Count Type Tbl_estados_usuarioCountOutputType
   */

  export type Tbl_estados_usuarioCountOutputType = {
    usuarios: number
  }

  export type Tbl_estados_usuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | Tbl_estados_usuarioCountOutputTypeCountUsuariosArgs
  }

  // Custom InputTypes
  /**
   * Tbl_estados_usuarioCountOutputType without action
   */
  export type Tbl_estados_usuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tbl_estados_usuarioCountOutputType
     */
    select?: Tbl_estados_usuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Tbl_estados_usuarioCountOutputType without action
   */
  export type Tbl_estados_usuarioCountOutputTypeCountUsuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_usuariosWhereInput
  }


  /**
   * Count Type Tbl_municipiosCountOutputType
   */

  export type Tbl_municipiosCountOutputType = {
    clientes: number
  }

  export type Tbl_municipiosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clientes?: boolean | Tbl_municipiosCountOutputTypeCountClientesArgs
  }

  // Custom InputTypes
  /**
   * Tbl_municipiosCountOutputType without action
   */
  export type Tbl_municipiosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tbl_municipiosCountOutputType
     */
    select?: Tbl_municipiosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Tbl_municipiosCountOutputType without action
   */
  export type Tbl_municipiosCountOutputTypeCountClientesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_clientesWhereInput
  }


  /**
   * Count Type Tbl_personasCountOutputType
   */

  export type Tbl_personasCountOutputType = {
    usuarios: number
  }

  export type Tbl_personasCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | Tbl_personasCountOutputTypeCountUsuariosArgs
  }

  // Custom InputTypes
  /**
   * Tbl_personasCountOutputType without action
   */
  export type Tbl_personasCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tbl_personasCountOutputType
     */
    select?: Tbl_personasCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Tbl_personasCountOutputType without action
   */
  export type Tbl_personasCountOutputTypeCountUsuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_usuariosWhereInput
  }


  /**
   * Count Type Tbl_productosCountOutputType
   */

  export type Tbl_productosCountOutputType = {
    det_productos: number
  }

  export type Tbl_productosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    det_productos?: boolean | Tbl_productosCountOutputTypeCountDet_productosArgs
  }

  // Custom InputTypes
  /**
   * Tbl_productosCountOutputType without action
   */
  export type Tbl_productosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tbl_productosCountOutputType
     */
    select?: Tbl_productosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Tbl_productosCountOutputType without action
   */
  export type Tbl_productosCountOutputTypeCountDet_productosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_det_productosWhereInput
  }


  /**
   * Count Type Tbl_empresasCountOutputType
   */

  export type Tbl_empresasCountOutputType = {
    productos: number
  }

  export type Tbl_empresasCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productos?: boolean | Tbl_empresasCountOutputTypeCountProductosArgs
  }

  // Custom InputTypes
  /**
   * Tbl_empresasCountOutputType without action
   */
  export type Tbl_empresasCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tbl_empresasCountOutputType
     */
    select?: Tbl_empresasCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Tbl_empresasCountOutputType without action
   */
  export type Tbl_empresasCountOutputTypeCountProductosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_productosWhereInput
  }


  /**
   * Count Type Tbl_rolesCountOutputType
   */

  export type Tbl_rolesCountOutputType = {
    usuarios: number
  }

  export type Tbl_rolesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | Tbl_rolesCountOutputTypeCountUsuariosArgs
  }

  // Custom InputTypes
  /**
   * Tbl_rolesCountOutputType without action
   */
  export type Tbl_rolesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tbl_rolesCountOutputType
     */
    select?: Tbl_rolesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Tbl_rolesCountOutputType without action
   */
  export type Tbl_rolesCountOutputTypeCountUsuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_usuariosWhereInput
  }


  /**
   * Count Type Tbl_comerciosCountOutputType
   */

  export type Tbl_comerciosCountOutputType = {
    campanias: number
    clientes: number
  }

  export type Tbl_comerciosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campanias?: boolean | Tbl_comerciosCountOutputTypeCountCampaniasArgs
    clientes?: boolean | Tbl_comerciosCountOutputTypeCountClientesArgs
  }

  // Custom InputTypes
  /**
   * Tbl_comerciosCountOutputType without action
   */
  export type Tbl_comerciosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tbl_comerciosCountOutputType
     */
    select?: Tbl_comerciosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Tbl_comerciosCountOutputType without action
   */
  export type Tbl_comerciosCountOutputTypeCountCampaniasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_campaniasWhereInput
  }

  /**
   * Tbl_comerciosCountOutputType without action
   */
  export type Tbl_comerciosCountOutputTypeCountClientesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_clientesWhereInput
  }


  /**
   * Count Type Tbl_transportadorasCountOutputType
   */

  export type Tbl_transportadorasCountOutputType = {
    pedidos: number
  }

  export type Tbl_transportadorasCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedidos?: boolean | Tbl_transportadorasCountOutputTypeCountPedidosArgs
  }

  // Custom InputTypes
  /**
   * Tbl_transportadorasCountOutputType without action
   */
  export type Tbl_transportadorasCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tbl_transportadorasCountOutputType
     */
    select?: Tbl_transportadorasCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Tbl_transportadorasCountOutputType without action
   */
  export type Tbl_transportadorasCountOutputTypeCountPedidosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_pedidosWhereInput
  }


  /**
   * Count Type Tbl_usuariosCountOutputType
   */

  export type Tbl_usuariosCountOutputType = {
    comercios: number
  }

  export type Tbl_usuariosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comercios?: boolean | Tbl_usuariosCountOutputTypeCountComerciosArgs
  }

  // Custom InputTypes
  /**
   * Tbl_usuariosCountOutputType without action
   */
  export type Tbl_usuariosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tbl_usuariosCountOutputType
     */
    select?: Tbl_usuariosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Tbl_usuariosCountOutputType without action
   */
  export type Tbl_usuariosCountOutputTypeCountComerciosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_comerciosWhereInput
  }


  /**
   * Models
   */

  /**
   * Model tbl_campanias
   */

  export type AggregateTbl_campanias = {
    _count: Tbl_campaniasCountAggregateOutputType | null
    _avg: Tbl_campaniasAvgAggregateOutputType | null
    _sum: Tbl_campaniasSumAggregateOutputType | null
    _min: Tbl_campaniasMinAggregateOutputType | null
    _max: Tbl_campaniasMaxAggregateOutputType | null
  }

  export type Tbl_campaniasAvgAggregateOutputType = {
    pkid: number | null
    presupuesto_gastado: number | null
    fkid_tbl_comercios: number | null
  }

  export type Tbl_campaniasSumAggregateOutputType = {
    pkid: bigint | null
    presupuesto_gastado: number | null
    fkid_tbl_comercios: bigint | null
  }

  export type Tbl_campaniasMinAggregateOutputType = {
    pkid: bigint | null
    nombre: string | null
    presupuesto_gastado: number | null
    fecha_inicio: Date | null
    fecha_fin: Date | null
    fkid_tbl_comercios: bigint | null
  }

  export type Tbl_campaniasMaxAggregateOutputType = {
    pkid: bigint | null
    nombre: string | null
    presupuesto_gastado: number | null
    fecha_inicio: Date | null
    fecha_fin: Date | null
    fkid_tbl_comercios: bigint | null
  }

  export type Tbl_campaniasCountAggregateOutputType = {
    pkid: number
    nombre: number
    presupuesto_gastado: number
    fecha_inicio: number
    fecha_fin: number
    fkid_tbl_comercios: number
    _all: number
  }


  export type Tbl_campaniasAvgAggregateInputType = {
    pkid?: true
    presupuesto_gastado?: true
    fkid_tbl_comercios?: true
  }

  export type Tbl_campaniasSumAggregateInputType = {
    pkid?: true
    presupuesto_gastado?: true
    fkid_tbl_comercios?: true
  }

  export type Tbl_campaniasMinAggregateInputType = {
    pkid?: true
    nombre?: true
    presupuesto_gastado?: true
    fecha_inicio?: true
    fecha_fin?: true
    fkid_tbl_comercios?: true
  }

  export type Tbl_campaniasMaxAggregateInputType = {
    pkid?: true
    nombre?: true
    presupuesto_gastado?: true
    fecha_inicio?: true
    fecha_fin?: true
    fkid_tbl_comercios?: true
  }

  export type Tbl_campaniasCountAggregateInputType = {
    pkid?: true
    nombre?: true
    presupuesto_gastado?: true
    fecha_inicio?: true
    fecha_fin?: true
    fkid_tbl_comercios?: true
    _all?: true
  }

  export type Tbl_campaniasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_campanias to aggregate.
     */
    where?: tbl_campaniasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_campanias to fetch.
     */
    orderBy?: tbl_campaniasOrderByWithRelationInput | tbl_campaniasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tbl_campaniasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_campanias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_campanias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tbl_campanias
    **/
    _count?: true | Tbl_campaniasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tbl_campaniasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tbl_campaniasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tbl_campaniasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tbl_campaniasMaxAggregateInputType
  }

  export type GetTbl_campaniasAggregateType<T extends Tbl_campaniasAggregateArgs> = {
        [P in keyof T & keyof AggregateTbl_campanias]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTbl_campanias[P]>
      : GetScalarType<T[P], AggregateTbl_campanias[P]>
  }




  export type tbl_campaniasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_campaniasWhereInput
    orderBy?: tbl_campaniasOrderByWithAggregationInput | tbl_campaniasOrderByWithAggregationInput[]
    by: Tbl_campaniasScalarFieldEnum[] | Tbl_campaniasScalarFieldEnum
    having?: tbl_campaniasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tbl_campaniasCountAggregateInputType | true
    _avg?: Tbl_campaniasAvgAggregateInputType
    _sum?: Tbl_campaniasSumAggregateInputType
    _min?: Tbl_campaniasMinAggregateInputType
    _max?: Tbl_campaniasMaxAggregateInputType
  }

  export type Tbl_campaniasGroupByOutputType = {
    pkid: bigint
    nombre: string
    presupuesto_gastado: number
    fecha_inicio: Date
    fecha_fin: Date
    fkid_tbl_comercios: bigint | null
    _count: Tbl_campaniasCountAggregateOutputType | null
    _avg: Tbl_campaniasAvgAggregateOutputType | null
    _sum: Tbl_campaniasSumAggregateOutputType | null
    _min: Tbl_campaniasMinAggregateOutputType | null
    _max: Tbl_campaniasMaxAggregateOutputType | null
  }

  type GetTbl_campaniasGroupByPayload<T extends tbl_campaniasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tbl_campaniasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tbl_campaniasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tbl_campaniasGroupByOutputType[P]>
            : GetScalarType<T[P], Tbl_campaniasGroupByOutputType[P]>
        }
      >
    >


  export type tbl_campaniasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pkid?: boolean
    nombre?: boolean
    presupuesto_gastado?: boolean
    fecha_inicio?: boolean
    fecha_fin?: boolean
    fkid_tbl_comercios?: boolean
    comercio?: boolean | tbl_campanias$comercioArgs<ExtArgs>
  }, ExtArgs["result"]["tbl_campanias"]>

  export type tbl_campaniasSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pkid?: boolean
    nombre?: boolean
    presupuesto_gastado?: boolean
    fecha_inicio?: boolean
    fecha_fin?: boolean
    fkid_tbl_comercios?: boolean
    comercio?: boolean | tbl_campanias$comercioArgs<ExtArgs>
  }, ExtArgs["result"]["tbl_campanias"]>

  export type tbl_campaniasSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pkid?: boolean
    nombre?: boolean
    presupuesto_gastado?: boolean
    fecha_inicio?: boolean
    fecha_fin?: boolean
    fkid_tbl_comercios?: boolean
    comercio?: boolean | tbl_campanias$comercioArgs<ExtArgs>
  }, ExtArgs["result"]["tbl_campanias"]>

  export type tbl_campaniasSelectScalar = {
    pkid?: boolean
    nombre?: boolean
    presupuesto_gastado?: boolean
    fecha_inicio?: boolean
    fecha_fin?: boolean
    fkid_tbl_comercios?: boolean
  }

  export type tbl_campaniasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"pkid" | "nombre" | "presupuesto_gastado" | "fecha_inicio" | "fecha_fin" | "fkid_tbl_comercios", ExtArgs["result"]["tbl_campanias"]>
  export type tbl_campaniasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comercio?: boolean | tbl_campanias$comercioArgs<ExtArgs>
  }
  export type tbl_campaniasIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comercio?: boolean | tbl_campanias$comercioArgs<ExtArgs>
  }
  export type tbl_campaniasIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comercio?: boolean | tbl_campanias$comercioArgs<ExtArgs>
  }

  export type $tbl_campaniasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tbl_campanias"
    objects: {
      comercio: Prisma.$tbl_comerciosPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      pkid: bigint
      nombre: string
      presupuesto_gastado: number
      fecha_inicio: Date
      fecha_fin: Date
      fkid_tbl_comercios: bigint | null
    }, ExtArgs["result"]["tbl_campanias"]>
    composites: {}
  }

  type tbl_campaniasGetPayload<S extends boolean | null | undefined | tbl_campaniasDefaultArgs> = $Result.GetResult<Prisma.$tbl_campaniasPayload, S>

  type tbl_campaniasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tbl_campaniasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tbl_campaniasCountAggregateInputType | true
    }

  export interface tbl_campaniasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tbl_campanias'], meta: { name: 'tbl_campanias' } }
    /**
     * Find zero or one Tbl_campanias that matches the filter.
     * @param {tbl_campaniasFindUniqueArgs} args - Arguments to find a Tbl_campanias
     * @example
     * // Get one Tbl_campanias
     * const tbl_campanias = await prisma.tbl_campanias.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tbl_campaniasFindUniqueArgs>(args: SelectSubset<T, tbl_campaniasFindUniqueArgs<ExtArgs>>): Prisma__tbl_campaniasClient<$Result.GetResult<Prisma.$tbl_campaniasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tbl_campanias that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tbl_campaniasFindUniqueOrThrowArgs} args - Arguments to find a Tbl_campanias
     * @example
     * // Get one Tbl_campanias
     * const tbl_campanias = await prisma.tbl_campanias.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tbl_campaniasFindUniqueOrThrowArgs>(args: SelectSubset<T, tbl_campaniasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tbl_campaniasClient<$Result.GetResult<Prisma.$tbl_campaniasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_campanias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_campaniasFindFirstArgs} args - Arguments to find a Tbl_campanias
     * @example
     * // Get one Tbl_campanias
     * const tbl_campanias = await prisma.tbl_campanias.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tbl_campaniasFindFirstArgs>(args?: SelectSubset<T, tbl_campaniasFindFirstArgs<ExtArgs>>): Prisma__tbl_campaniasClient<$Result.GetResult<Prisma.$tbl_campaniasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_campanias that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_campaniasFindFirstOrThrowArgs} args - Arguments to find a Tbl_campanias
     * @example
     * // Get one Tbl_campanias
     * const tbl_campanias = await prisma.tbl_campanias.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tbl_campaniasFindFirstOrThrowArgs>(args?: SelectSubset<T, tbl_campaniasFindFirstOrThrowArgs<ExtArgs>>): Prisma__tbl_campaniasClient<$Result.GetResult<Prisma.$tbl_campaniasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tbl_campanias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_campaniasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tbl_campanias
     * const tbl_campanias = await prisma.tbl_campanias.findMany()
     * 
     * // Get first 10 Tbl_campanias
     * const tbl_campanias = await prisma.tbl_campanias.findMany({ take: 10 })
     * 
     * // Only select the `pkid`
     * const tbl_campaniasWithPkidOnly = await prisma.tbl_campanias.findMany({ select: { pkid: true } })
     * 
     */
    findMany<T extends tbl_campaniasFindManyArgs>(args?: SelectSubset<T, tbl_campaniasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_campaniasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tbl_campanias.
     * @param {tbl_campaniasCreateArgs} args - Arguments to create a Tbl_campanias.
     * @example
     * // Create one Tbl_campanias
     * const Tbl_campanias = await prisma.tbl_campanias.create({
     *   data: {
     *     // ... data to create a Tbl_campanias
     *   }
     * })
     * 
     */
    create<T extends tbl_campaniasCreateArgs>(args: SelectSubset<T, tbl_campaniasCreateArgs<ExtArgs>>): Prisma__tbl_campaniasClient<$Result.GetResult<Prisma.$tbl_campaniasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tbl_campanias.
     * @param {tbl_campaniasCreateManyArgs} args - Arguments to create many Tbl_campanias.
     * @example
     * // Create many Tbl_campanias
     * const tbl_campanias = await prisma.tbl_campanias.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tbl_campaniasCreateManyArgs>(args?: SelectSubset<T, tbl_campaniasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tbl_campanias and returns the data saved in the database.
     * @param {tbl_campaniasCreateManyAndReturnArgs} args - Arguments to create many Tbl_campanias.
     * @example
     * // Create many Tbl_campanias
     * const tbl_campanias = await prisma.tbl_campanias.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tbl_campanias and only return the `pkid`
     * const tbl_campaniasWithPkidOnly = await prisma.tbl_campanias.createManyAndReturn({
     *   select: { pkid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends tbl_campaniasCreateManyAndReturnArgs>(args?: SelectSubset<T, tbl_campaniasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_campaniasPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tbl_campanias.
     * @param {tbl_campaniasDeleteArgs} args - Arguments to delete one Tbl_campanias.
     * @example
     * // Delete one Tbl_campanias
     * const Tbl_campanias = await prisma.tbl_campanias.delete({
     *   where: {
     *     // ... filter to delete one Tbl_campanias
     *   }
     * })
     * 
     */
    delete<T extends tbl_campaniasDeleteArgs>(args: SelectSubset<T, tbl_campaniasDeleteArgs<ExtArgs>>): Prisma__tbl_campaniasClient<$Result.GetResult<Prisma.$tbl_campaniasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tbl_campanias.
     * @param {tbl_campaniasUpdateArgs} args - Arguments to update one Tbl_campanias.
     * @example
     * // Update one Tbl_campanias
     * const tbl_campanias = await prisma.tbl_campanias.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tbl_campaniasUpdateArgs>(args: SelectSubset<T, tbl_campaniasUpdateArgs<ExtArgs>>): Prisma__tbl_campaniasClient<$Result.GetResult<Prisma.$tbl_campaniasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tbl_campanias.
     * @param {tbl_campaniasDeleteManyArgs} args - Arguments to filter Tbl_campanias to delete.
     * @example
     * // Delete a few Tbl_campanias
     * const { count } = await prisma.tbl_campanias.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tbl_campaniasDeleteManyArgs>(args?: SelectSubset<T, tbl_campaniasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tbl_campanias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_campaniasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tbl_campanias
     * const tbl_campanias = await prisma.tbl_campanias.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tbl_campaniasUpdateManyArgs>(args: SelectSubset<T, tbl_campaniasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tbl_campanias and returns the data updated in the database.
     * @param {tbl_campaniasUpdateManyAndReturnArgs} args - Arguments to update many Tbl_campanias.
     * @example
     * // Update many Tbl_campanias
     * const tbl_campanias = await prisma.tbl_campanias.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tbl_campanias and only return the `pkid`
     * const tbl_campaniasWithPkidOnly = await prisma.tbl_campanias.updateManyAndReturn({
     *   select: { pkid: true },
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
    updateManyAndReturn<T extends tbl_campaniasUpdateManyAndReturnArgs>(args: SelectSubset<T, tbl_campaniasUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_campaniasPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tbl_campanias.
     * @param {tbl_campaniasUpsertArgs} args - Arguments to update or create a Tbl_campanias.
     * @example
     * // Update or create a Tbl_campanias
     * const tbl_campanias = await prisma.tbl_campanias.upsert({
     *   create: {
     *     // ... data to create a Tbl_campanias
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tbl_campanias we want to update
     *   }
     * })
     */
    upsert<T extends tbl_campaniasUpsertArgs>(args: SelectSubset<T, tbl_campaniasUpsertArgs<ExtArgs>>): Prisma__tbl_campaniasClient<$Result.GetResult<Prisma.$tbl_campaniasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tbl_campanias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_campaniasCountArgs} args - Arguments to filter Tbl_campanias to count.
     * @example
     * // Count the number of Tbl_campanias
     * const count = await prisma.tbl_campanias.count({
     *   where: {
     *     // ... the filter for the Tbl_campanias we want to count
     *   }
     * })
    **/
    count<T extends tbl_campaniasCountArgs>(
      args?: Subset<T, tbl_campaniasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tbl_campaniasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tbl_campanias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tbl_campaniasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tbl_campaniasAggregateArgs>(args: Subset<T, Tbl_campaniasAggregateArgs>): Prisma.PrismaPromise<GetTbl_campaniasAggregateType<T>>

    /**
     * Group by Tbl_campanias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_campaniasGroupByArgs} args - Group by arguments.
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
      T extends tbl_campaniasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tbl_campaniasGroupByArgs['orderBy'] }
        : { orderBy?: tbl_campaniasGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tbl_campaniasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTbl_campaniasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tbl_campanias model
   */
  readonly fields: tbl_campaniasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tbl_campanias.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tbl_campaniasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    comercio<T extends tbl_campanias$comercioArgs<ExtArgs> = {}>(args?: Subset<T, tbl_campanias$comercioArgs<ExtArgs>>): Prisma__tbl_comerciosClient<$Result.GetResult<Prisma.$tbl_comerciosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the tbl_campanias model
   */
  interface tbl_campaniasFieldRefs {
    readonly pkid: FieldRef<"tbl_campanias", 'BigInt'>
    readonly nombre: FieldRef<"tbl_campanias", 'String'>
    readonly presupuesto_gastado: FieldRef<"tbl_campanias", 'Float'>
    readonly fecha_inicio: FieldRef<"tbl_campanias", 'DateTime'>
    readonly fecha_fin: FieldRef<"tbl_campanias", 'DateTime'>
    readonly fkid_tbl_comercios: FieldRef<"tbl_campanias", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * tbl_campanias findUnique
   */
  export type tbl_campaniasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_campanias
     */
    select?: tbl_campaniasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_campanias
     */
    omit?: tbl_campaniasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_campaniasInclude<ExtArgs> | null
    /**
     * Filter, which tbl_campanias to fetch.
     */
    where: tbl_campaniasWhereUniqueInput
  }

  /**
   * tbl_campanias findUniqueOrThrow
   */
  export type tbl_campaniasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_campanias
     */
    select?: tbl_campaniasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_campanias
     */
    omit?: tbl_campaniasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_campaniasInclude<ExtArgs> | null
    /**
     * Filter, which tbl_campanias to fetch.
     */
    where: tbl_campaniasWhereUniqueInput
  }

  /**
   * tbl_campanias findFirst
   */
  export type tbl_campaniasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_campanias
     */
    select?: tbl_campaniasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_campanias
     */
    omit?: tbl_campaniasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_campaniasInclude<ExtArgs> | null
    /**
     * Filter, which tbl_campanias to fetch.
     */
    where?: tbl_campaniasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_campanias to fetch.
     */
    orderBy?: tbl_campaniasOrderByWithRelationInput | tbl_campaniasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_campanias.
     */
    cursor?: tbl_campaniasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_campanias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_campanias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_campanias.
     */
    distinct?: Tbl_campaniasScalarFieldEnum | Tbl_campaniasScalarFieldEnum[]
  }

  /**
   * tbl_campanias findFirstOrThrow
   */
  export type tbl_campaniasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_campanias
     */
    select?: tbl_campaniasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_campanias
     */
    omit?: tbl_campaniasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_campaniasInclude<ExtArgs> | null
    /**
     * Filter, which tbl_campanias to fetch.
     */
    where?: tbl_campaniasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_campanias to fetch.
     */
    orderBy?: tbl_campaniasOrderByWithRelationInput | tbl_campaniasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_campanias.
     */
    cursor?: tbl_campaniasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_campanias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_campanias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_campanias.
     */
    distinct?: Tbl_campaniasScalarFieldEnum | Tbl_campaniasScalarFieldEnum[]
  }

  /**
   * tbl_campanias findMany
   */
  export type tbl_campaniasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_campanias
     */
    select?: tbl_campaniasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_campanias
     */
    omit?: tbl_campaniasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_campaniasInclude<ExtArgs> | null
    /**
     * Filter, which tbl_campanias to fetch.
     */
    where?: tbl_campaniasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_campanias to fetch.
     */
    orderBy?: tbl_campaniasOrderByWithRelationInput | tbl_campaniasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tbl_campanias.
     */
    cursor?: tbl_campaniasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_campanias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_campanias.
     */
    skip?: number
    distinct?: Tbl_campaniasScalarFieldEnum | Tbl_campaniasScalarFieldEnum[]
  }

  /**
   * tbl_campanias create
   */
  export type tbl_campaniasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_campanias
     */
    select?: tbl_campaniasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_campanias
     */
    omit?: tbl_campaniasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_campaniasInclude<ExtArgs> | null
    /**
     * The data needed to create a tbl_campanias.
     */
    data: XOR<tbl_campaniasCreateInput, tbl_campaniasUncheckedCreateInput>
  }

  /**
   * tbl_campanias createMany
   */
  export type tbl_campaniasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tbl_campanias.
     */
    data: tbl_campaniasCreateManyInput | tbl_campaniasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tbl_campanias createManyAndReturn
   */
  export type tbl_campaniasCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_campanias
     */
    select?: tbl_campaniasSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_campanias
     */
    omit?: tbl_campaniasOmit<ExtArgs> | null
    /**
     * The data used to create many tbl_campanias.
     */
    data: tbl_campaniasCreateManyInput | tbl_campaniasCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_campaniasIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * tbl_campanias update
   */
  export type tbl_campaniasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_campanias
     */
    select?: tbl_campaniasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_campanias
     */
    omit?: tbl_campaniasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_campaniasInclude<ExtArgs> | null
    /**
     * The data needed to update a tbl_campanias.
     */
    data: XOR<tbl_campaniasUpdateInput, tbl_campaniasUncheckedUpdateInput>
    /**
     * Choose, which tbl_campanias to update.
     */
    where: tbl_campaniasWhereUniqueInput
  }

  /**
   * tbl_campanias updateMany
   */
  export type tbl_campaniasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tbl_campanias.
     */
    data: XOR<tbl_campaniasUpdateManyMutationInput, tbl_campaniasUncheckedUpdateManyInput>
    /**
     * Filter which tbl_campanias to update
     */
    where?: tbl_campaniasWhereInput
    /**
     * Limit how many tbl_campanias to update.
     */
    limit?: number
  }

  /**
   * tbl_campanias updateManyAndReturn
   */
  export type tbl_campaniasUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_campanias
     */
    select?: tbl_campaniasSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_campanias
     */
    omit?: tbl_campaniasOmit<ExtArgs> | null
    /**
     * The data used to update tbl_campanias.
     */
    data: XOR<tbl_campaniasUpdateManyMutationInput, tbl_campaniasUncheckedUpdateManyInput>
    /**
     * Filter which tbl_campanias to update
     */
    where?: tbl_campaniasWhereInput
    /**
     * Limit how many tbl_campanias to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_campaniasIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * tbl_campanias upsert
   */
  export type tbl_campaniasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_campanias
     */
    select?: tbl_campaniasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_campanias
     */
    omit?: tbl_campaniasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_campaniasInclude<ExtArgs> | null
    /**
     * The filter to search for the tbl_campanias to update in case it exists.
     */
    where: tbl_campaniasWhereUniqueInput
    /**
     * In case the tbl_campanias found by the `where` argument doesn't exist, create a new tbl_campanias with this data.
     */
    create: XOR<tbl_campaniasCreateInput, tbl_campaniasUncheckedCreateInput>
    /**
     * In case the tbl_campanias was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tbl_campaniasUpdateInput, tbl_campaniasUncheckedUpdateInput>
  }

  /**
   * tbl_campanias delete
   */
  export type tbl_campaniasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_campanias
     */
    select?: tbl_campaniasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_campanias
     */
    omit?: tbl_campaniasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_campaniasInclude<ExtArgs> | null
    /**
     * Filter which tbl_campanias to delete.
     */
    where: tbl_campaniasWhereUniqueInput
  }

  /**
   * tbl_campanias deleteMany
   */
  export type tbl_campaniasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_campanias to delete
     */
    where?: tbl_campaniasWhereInput
    /**
     * Limit how many tbl_campanias to delete.
     */
    limit?: number
  }

  /**
   * tbl_campanias.comercio
   */
  export type tbl_campanias$comercioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_comercios
     */
    select?: tbl_comerciosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_comercios
     */
    omit?: tbl_comerciosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_comerciosInclude<ExtArgs> | null
    where?: tbl_comerciosWhereInput
  }

  /**
   * tbl_campanias without action
   */
  export type tbl_campaniasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_campanias
     */
    select?: tbl_campaniasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_campanias
     */
    omit?: tbl_campaniasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_campaniasInclude<ExtArgs> | null
  }


  /**
   * Model tbl_clientes
   */

  export type AggregateTbl_clientes = {
    _count: Tbl_clientesCountAggregateOutputType | null
    _avg: Tbl_clientesAvgAggregateOutputType | null
    _sum: Tbl_clientesSumAggregateOutputType | null
    _min: Tbl_clientesMinAggregateOutputType | null
    _max: Tbl_clientesMaxAggregateOutputType | null
  }

  export type Tbl_clientesAvgAggregateOutputType = {
    pkid: number | null
    fkid_tbl_municipios: number | null
    fkid_tbl_comercios: number | null
  }

  export type Tbl_clientesSumAggregateOutputType = {
    pkid: bigint | null
    fkid_tbl_municipios: bigint | null
    fkid_tbl_comercios: bigint | null
  }

  export type Tbl_clientesMinAggregateOutputType = {
    pkid: bigint | null
    telefono: string | null
    nombres: string | null
    apellidos: string | null
    correo: string | null
    direccion: string | null
    fkid_tbl_municipios: bigint | null
    fkid_tbl_comercios: bigint | null
  }

  export type Tbl_clientesMaxAggregateOutputType = {
    pkid: bigint | null
    telefono: string | null
    nombres: string | null
    apellidos: string | null
    correo: string | null
    direccion: string | null
    fkid_tbl_municipios: bigint | null
    fkid_tbl_comercios: bigint | null
  }

  export type Tbl_clientesCountAggregateOutputType = {
    pkid: number
    telefono: number
    nombres: number
    apellidos: number
    correo: number
    direccion: number
    fkid_tbl_municipios: number
    fkid_tbl_comercios: number
    _all: number
  }


  export type Tbl_clientesAvgAggregateInputType = {
    pkid?: true
    fkid_tbl_municipios?: true
    fkid_tbl_comercios?: true
  }

  export type Tbl_clientesSumAggregateInputType = {
    pkid?: true
    fkid_tbl_municipios?: true
    fkid_tbl_comercios?: true
  }

  export type Tbl_clientesMinAggregateInputType = {
    pkid?: true
    telefono?: true
    nombres?: true
    apellidos?: true
    correo?: true
    direccion?: true
    fkid_tbl_municipios?: true
    fkid_tbl_comercios?: true
  }

  export type Tbl_clientesMaxAggregateInputType = {
    pkid?: true
    telefono?: true
    nombres?: true
    apellidos?: true
    correo?: true
    direccion?: true
    fkid_tbl_municipios?: true
    fkid_tbl_comercios?: true
  }

  export type Tbl_clientesCountAggregateInputType = {
    pkid?: true
    telefono?: true
    nombres?: true
    apellidos?: true
    correo?: true
    direccion?: true
    fkid_tbl_municipios?: true
    fkid_tbl_comercios?: true
    _all?: true
  }

  export type Tbl_clientesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_clientes to aggregate.
     */
    where?: tbl_clientesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_clientes to fetch.
     */
    orderBy?: tbl_clientesOrderByWithRelationInput | tbl_clientesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tbl_clientesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tbl_clientes
    **/
    _count?: true | Tbl_clientesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tbl_clientesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tbl_clientesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tbl_clientesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tbl_clientesMaxAggregateInputType
  }

  export type GetTbl_clientesAggregateType<T extends Tbl_clientesAggregateArgs> = {
        [P in keyof T & keyof AggregateTbl_clientes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTbl_clientes[P]>
      : GetScalarType<T[P], AggregateTbl_clientes[P]>
  }




  export type tbl_clientesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_clientesWhereInput
    orderBy?: tbl_clientesOrderByWithAggregationInput | tbl_clientesOrderByWithAggregationInput[]
    by: Tbl_clientesScalarFieldEnum[] | Tbl_clientesScalarFieldEnum
    having?: tbl_clientesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tbl_clientesCountAggregateInputType | true
    _avg?: Tbl_clientesAvgAggregateInputType
    _sum?: Tbl_clientesSumAggregateInputType
    _min?: Tbl_clientesMinAggregateInputType
    _max?: Tbl_clientesMaxAggregateInputType
  }

  export type Tbl_clientesGroupByOutputType = {
    pkid: bigint
    telefono: string
    nombres: string
    apellidos: string
    correo: string
    direccion: string
    fkid_tbl_municipios: bigint | null
    fkid_tbl_comercios: bigint | null
    _count: Tbl_clientesCountAggregateOutputType | null
    _avg: Tbl_clientesAvgAggregateOutputType | null
    _sum: Tbl_clientesSumAggregateOutputType | null
    _min: Tbl_clientesMinAggregateOutputType | null
    _max: Tbl_clientesMaxAggregateOutputType | null
  }

  type GetTbl_clientesGroupByPayload<T extends tbl_clientesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tbl_clientesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tbl_clientesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tbl_clientesGroupByOutputType[P]>
            : GetScalarType<T[P], Tbl_clientesGroupByOutputType[P]>
        }
      >
    >


  export type tbl_clientesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pkid?: boolean
    telefono?: boolean
    nombres?: boolean
    apellidos?: boolean
    correo?: boolean
    direccion?: boolean
    fkid_tbl_municipios?: boolean
    fkid_tbl_comercios?: boolean
    municipios?: boolean | tbl_clientes$municipiosArgs<ExtArgs>
    comercios?: boolean | tbl_clientes$comerciosArgs<ExtArgs>
    pedidos?: boolean | tbl_clientes$pedidosArgs<ExtArgs>
    _count?: boolean | Tbl_clientesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tbl_clientes"]>

  export type tbl_clientesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pkid?: boolean
    telefono?: boolean
    nombres?: boolean
    apellidos?: boolean
    correo?: boolean
    direccion?: boolean
    fkid_tbl_municipios?: boolean
    fkid_tbl_comercios?: boolean
    municipios?: boolean | tbl_clientes$municipiosArgs<ExtArgs>
    comercios?: boolean | tbl_clientes$comerciosArgs<ExtArgs>
  }, ExtArgs["result"]["tbl_clientes"]>

  export type tbl_clientesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pkid?: boolean
    telefono?: boolean
    nombres?: boolean
    apellidos?: boolean
    correo?: boolean
    direccion?: boolean
    fkid_tbl_municipios?: boolean
    fkid_tbl_comercios?: boolean
    municipios?: boolean | tbl_clientes$municipiosArgs<ExtArgs>
    comercios?: boolean | tbl_clientes$comerciosArgs<ExtArgs>
  }, ExtArgs["result"]["tbl_clientes"]>

  export type tbl_clientesSelectScalar = {
    pkid?: boolean
    telefono?: boolean
    nombres?: boolean
    apellidos?: boolean
    correo?: boolean
    direccion?: boolean
    fkid_tbl_municipios?: boolean
    fkid_tbl_comercios?: boolean
  }

  export type tbl_clientesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"pkid" | "telefono" | "nombres" | "apellidos" | "correo" | "direccion" | "fkid_tbl_municipios" | "fkid_tbl_comercios", ExtArgs["result"]["tbl_clientes"]>
  export type tbl_clientesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    municipios?: boolean | tbl_clientes$municipiosArgs<ExtArgs>
    comercios?: boolean | tbl_clientes$comerciosArgs<ExtArgs>
    pedidos?: boolean | tbl_clientes$pedidosArgs<ExtArgs>
    _count?: boolean | Tbl_clientesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type tbl_clientesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    municipios?: boolean | tbl_clientes$municipiosArgs<ExtArgs>
    comercios?: boolean | tbl_clientes$comerciosArgs<ExtArgs>
  }
  export type tbl_clientesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    municipios?: boolean | tbl_clientes$municipiosArgs<ExtArgs>
    comercios?: boolean | tbl_clientes$comerciosArgs<ExtArgs>
  }

  export type $tbl_clientesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tbl_clientes"
    objects: {
      municipios: Prisma.$tbl_municipiosPayload<ExtArgs> | null
      comercios: Prisma.$tbl_comerciosPayload<ExtArgs> | null
      pedidos: Prisma.$tbl_pedidosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      pkid: bigint
      telefono: string
      nombres: string
      apellidos: string
      correo: string
      direccion: string
      fkid_tbl_municipios: bigint | null
      fkid_tbl_comercios: bigint | null
    }, ExtArgs["result"]["tbl_clientes"]>
    composites: {}
  }

  type tbl_clientesGetPayload<S extends boolean | null | undefined | tbl_clientesDefaultArgs> = $Result.GetResult<Prisma.$tbl_clientesPayload, S>

  type tbl_clientesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tbl_clientesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tbl_clientesCountAggregateInputType | true
    }

  export interface tbl_clientesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tbl_clientes'], meta: { name: 'tbl_clientes' } }
    /**
     * Find zero or one Tbl_clientes that matches the filter.
     * @param {tbl_clientesFindUniqueArgs} args - Arguments to find a Tbl_clientes
     * @example
     * // Get one Tbl_clientes
     * const tbl_clientes = await prisma.tbl_clientes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tbl_clientesFindUniqueArgs>(args: SelectSubset<T, tbl_clientesFindUniqueArgs<ExtArgs>>): Prisma__tbl_clientesClient<$Result.GetResult<Prisma.$tbl_clientesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tbl_clientes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tbl_clientesFindUniqueOrThrowArgs} args - Arguments to find a Tbl_clientes
     * @example
     * // Get one Tbl_clientes
     * const tbl_clientes = await prisma.tbl_clientes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tbl_clientesFindUniqueOrThrowArgs>(args: SelectSubset<T, tbl_clientesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tbl_clientesClient<$Result.GetResult<Prisma.$tbl_clientesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_clientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_clientesFindFirstArgs} args - Arguments to find a Tbl_clientes
     * @example
     * // Get one Tbl_clientes
     * const tbl_clientes = await prisma.tbl_clientes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tbl_clientesFindFirstArgs>(args?: SelectSubset<T, tbl_clientesFindFirstArgs<ExtArgs>>): Prisma__tbl_clientesClient<$Result.GetResult<Prisma.$tbl_clientesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_clientes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_clientesFindFirstOrThrowArgs} args - Arguments to find a Tbl_clientes
     * @example
     * // Get one Tbl_clientes
     * const tbl_clientes = await prisma.tbl_clientes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tbl_clientesFindFirstOrThrowArgs>(args?: SelectSubset<T, tbl_clientesFindFirstOrThrowArgs<ExtArgs>>): Prisma__tbl_clientesClient<$Result.GetResult<Prisma.$tbl_clientesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tbl_clientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_clientesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tbl_clientes
     * const tbl_clientes = await prisma.tbl_clientes.findMany()
     * 
     * // Get first 10 Tbl_clientes
     * const tbl_clientes = await prisma.tbl_clientes.findMany({ take: 10 })
     * 
     * // Only select the `pkid`
     * const tbl_clientesWithPkidOnly = await prisma.tbl_clientes.findMany({ select: { pkid: true } })
     * 
     */
    findMany<T extends tbl_clientesFindManyArgs>(args?: SelectSubset<T, tbl_clientesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_clientesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tbl_clientes.
     * @param {tbl_clientesCreateArgs} args - Arguments to create a Tbl_clientes.
     * @example
     * // Create one Tbl_clientes
     * const Tbl_clientes = await prisma.tbl_clientes.create({
     *   data: {
     *     // ... data to create a Tbl_clientes
     *   }
     * })
     * 
     */
    create<T extends tbl_clientesCreateArgs>(args: SelectSubset<T, tbl_clientesCreateArgs<ExtArgs>>): Prisma__tbl_clientesClient<$Result.GetResult<Prisma.$tbl_clientesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tbl_clientes.
     * @param {tbl_clientesCreateManyArgs} args - Arguments to create many Tbl_clientes.
     * @example
     * // Create many Tbl_clientes
     * const tbl_clientes = await prisma.tbl_clientes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tbl_clientesCreateManyArgs>(args?: SelectSubset<T, tbl_clientesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tbl_clientes and returns the data saved in the database.
     * @param {tbl_clientesCreateManyAndReturnArgs} args - Arguments to create many Tbl_clientes.
     * @example
     * // Create many Tbl_clientes
     * const tbl_clientes = await prisma.tbl_clientes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tbl_clientes and only return the `pkid`
     * const tbl_clientesWithPkidOnly = await prisma.tbl_clientes.createManyAndReturn({
     *   select: { pkid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends tbl_clientesCreateManyAndReturnArgs>(args?: SelectSubset<T, tbl_clientesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_clientesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tbl_clientes.
     * @param {tbl_clientesDeleteArgs} args - Arguments to delete one Tbl_clientes.
     * @example
     * // Delete one Tbl_clientes
     * const Tbl_clientes = await prisma.tbl_clientes.delete({
     *   where: {
     *     // ... filter to delete one Tbl_clientes
     *   }
     * })
     * 
     */
    delete<T extends tbl_clientesDeleteArgs>(args: SelectSubset<T, tbl_clientesDeleteArgs<ExtArgs>>): Prisma__tbl_clientesClient<$Result.GetResult<Prisma.$tbl_clientesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tbl_clientes.
     * @param {tbl_clientesUpdateArgs} args - Arguments to update one Tbl_clientes.
     * @example
     * // Update one Tbl_clientes
     * const tbl_clientes = await prisma.tbl_clientes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tbl_clientesUpdateArgs>(args: SelectSubset<T, tbl_clientesUpdateArgs<ExtArgs>>): Prisma__tbl_clientesClient<$Result.GetResult<Prisma.$tbl_clientesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tbl_clientes.
     * @param {tbl_clientesDeleteManyArgs} args - Arguments to filter Tbl_clientes to delete.
     * @example
     * // Delete a few Tbl_clientes
     * const { count } = await prisma.tbl_clientes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tbl_clientesDeleteManyArgs>(args?: SelectSubset<T, tbl_clientesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tbl_clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_clientesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tbl_clientes
     * const tbl_clientes = await prisma.tbl_clientes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tbl_clientesUpdateManyArgs>(args: SelectSubset<T, tbl_clientesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tbl_clientes and returns the data updated in the database.
     * @param {tbl_clientesUpdateManyAndReturnArgs} args - Arguments to update many Tbl_clientes.
     * @example
     * // Update many Tbl_clientes
     * const tbl_clientes = await prisma.tbl_clientes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tbl_clientes and only return the `pkid`
     * const tbl_clientesWithPkidOnly = await prisma.tbl_clientes.updateManyAndReturn({
     *   select: { pkid: true },
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
    updateManyAndReturn<T extends tbl_clientesUpdateManyAndReturnArgs>(args: SelectSubset<T, tbl_clientesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_clientesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tbl_clientes.
     * @param {tbl_clientesUpsertArgs} args - Arguments to update or create a Tbl_clientes.
     * @example
     * // Update or create a Tbl_clientes
     * const tbl_clientes = await prisma.tbl_clientes.upsert({
     *   create: {
     *     // ... data to create a Tbl_clientes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tbl_clientes we want to update
     *   }
     * })
     */
    upsert<T extends tbl_clientesUpsertArgs>(args: SelectSubset<T, tbl_clientesUpsertArgs<ExtArgs>>): Prisma__tbl_clientesClient<$Result.GetResult<Prisma.$tbl_clientesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tbl_clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_clientesCountArgs} args - Arguments to filter Tbl_clientes to count.
     * @example
     * // Count the number of Tbl_clientes
     * const count = await prisma.tbl_clientes.count({
     *   where: {
     *     // ... the filter for the Tbl_clientes we want to count
     *   }
     * })
    **/
    count<T extends tbl_clientesCountArgs>(
      args?: Subset<T, tbl_clientesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tbl_clientesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tbl_clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tbl_clientesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tbl_clientesAggregateArgs>(args: Subset<T, Tbl_clientesAggregateArgs>): Prisma.PrismaPromise<GetTbl_clientesAggregateType<T>>

    /**
     * Group by Tbl_clientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_clientesGroupByArgs} args - Group by arguments.
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
      T extends tbl_clientesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tbl_clientesGroupByArgs['orderBy'] }
        : { orderBy?: tbl_clientesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tbl_clientesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTbl_clientesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tbl_clientes model
   */
  readonly fields: tbl_clientesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tbl_clientes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tbl_clientesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    municipios<T extends tbl_clientes$municipiosArgs<ExtArgs> = {}>(args?: Subset<T, tbl_clientes$municipiosArgs<ExtArgs>>): Prisma__tbl_municipiosClient<$Result.GetResult<Prisma.$tbl_municipiosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    comercios<T extends tbl_clientes$comerciosArgs<ExtArgs> = {}>(args?: Subset<T, tbl_clientes$comerciosArgs<ExtArgs>>): Prisma__tbl_comerciosClient<$Result.GetResult<Prisma.$tbl_comerciosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    pedidos<T extends tbl_clientes$pedidosArgs<ExtArgs> = {}>(args?: Subset<T, tbl_clientes$pedidosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_pedidosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the tbl_clientes model
   */
  interface tbl_clientesFieldRefs {
    readonly pkid: FieldRef<"tbl_clientes", 'BigInt'>
    readonly telefono: FieldRef<"tbl_clientes", 'String'>
    readonly nombres: FieldRef<"tbl_clientes", 'String'>
    readonly apellidos: FieldRef<"tbl_clientes", 'String'>
    readonly correo: FieldRef<"tbl_clientes", 'String'>
    readonly direccion: FieldRef<"tbl_clientes", 'String'>
    readonly fkid_tbl_municipios: FieldRef<"tbl_clientes", 'BigInt'>
    readonly fkid_tbl_comercios: FieldRef<"tbl_clientes", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * tbl_clientes findUnique
   */
  export type tbl_clientesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_clientes
     */
    select?: tbl_clientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_clientes
     */
    omit?: tbl_clientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_clientesInclude<ExtArgs> | null
    /**
     * Filter, which tbl_clientes to fetch.
     */
    where: tbl_clientesWhereUniqueInput
  }

  /**
   * tbl_clientes findUniqueOrThrow
   */
  export type tbl_clientesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_clientes
     */
    select?: tbl_clientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_clientes
     */
    omit?: tbl_clientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_clientesInclude<ExtArgs> | null
    /**
     * Filter, which tbl_clientes to fetch.
     */
    where: tbl_clientesWhereUniqueInput
  }

  /**
   * tbl_clientes findFirst
   */
  export type tbl_clientesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_clientes
     */
    select?: tbl_clientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_clientes
     */
    omit?: tbl_clientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_clientesInclude<ExtArgs> | null
    /**
     * Filter, which tbl_clientes to fetch.
     */
    where?: tbl_clientesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_clientes to fetch.
     */
    orderBy?: tbl_clientesOrderByWithRelationInput | tbl_clientesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_clientes.
     */
    cursor?: tbl_clientesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_clientes.
     */
    distinct?: Tbl_clientesScalarFieldEnum | Tbl_clientesScalarFieldEnum[]
  }

  /**
   * tbl_clientes findFirstOrThrow
   */
  export type tbl_clientesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_clientes
     */
    select?: tbl_clientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_clientes
     */
    omit?: tbl_clientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_clientesInclude<ExtArgs> | null
    /**
     * Filter, which tbl_clientes to fetch.
     */
    where?: tbl_clientesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_clientes to fetch.
     */
    orderBy?: tbl_clientesOrderByWithRelationInput | tbl_clientesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_clientes.
     */
    cursor?: tbl_clientesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_clientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_clientes.
     */
    distinct?: Tbl_clientesScalarFieldEnum | Tbl_clientesScalarFieldEnum[]
  }

  /**
   * tbl_clientes findMany
   */
  export type tbl_clientesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_clientes
     */
    select?: tbl_clientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_clientes
     */
    omit?: tbl_clientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_clientesInclude<ExtArgs> | null
    /**
     * Filter, which tbl_clientes to fetch.
     */
    where?: tbl_clientesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_clientes to fetch.
     */
    orderBy?: tbl_clientesOrderByWithRelationInput | tbl_clientesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tbl_clientes.
     */
    cursor?: tbl_clientesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_clientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_clientes.
     */
    skip?: number
    distinct?: Tbl_clientesScalarFieldEnum | Tbl_clientesScalarFieldEnum[]
  }

  /**
   * tbl_clientes create
   */
  export type tbl_clientesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_clientes
     */
    select?: tbl_clientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_clientes
     */
    omit?: tbl_clientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_clientesInclude<ExtArgs> | null
    /**
     * The data needed to create a tbl_clientes.
     */
    data: XOR<tbl_clientesCreateInput, tbl_clientesUncheckedCreateInput>
  }

  /**
   * tbl_clientes createMany
   */
  export type tbl_clientesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tbl_clientes.
     */
    data: tbl_clientesCreateManyInput | tbl_clientesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tbl_clientes createManyAndReturn
   */
  export type tbl_clientesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_clientes
     */
    select?: tbl_clientesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_clientes
     */
    omit?: tbl_clientesOmit<ExtArgs> | null
    /**
     * The data used to create many tbl_clientes.
     */
    data: tbl_clientesCreateManyInput | tbl_clientesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_clientesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * tbl_clientes update
   */
  export type tbl_clientesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_clientes
     */
    select?: tbl_clientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_clientes
     */
    omit?: tbl_clientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_clientesInclude<ExtArgs> | null
    /**
     * The data needed to update a tbl_clientes.
     */
    data: XOR<tbl_clientesUpdateInput, tbl_clientesUncheckedUpdateInput>
    /**
     * Choose, which tbl_clientes to update.
     */
    where: tbl_clientesWhereUniqueInput
  }

  /**
   * tbl_clientes updateMany
   */
  export type tbl_clientesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tbl_clientes.
     */
    data: XOR<tbl_clientesUpdateManyMutationInput, tbl_clientesUncheckedUpdateManyInput>
    /**
     * Filter which tbl_clientes to update
     */
    where?: tbl_clientesWhereInput
    /**
     * Limit how many tbl_clientes to update.
     */
    limit?: number
  }

  /**
   * tbl_clientes updateManyAndReturn
   */
  export type tbl_clientesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_clientes
     */
    select?: tbl_clientesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_clientes
     */
    omit?: tbl_clientesOmit<ExtArgs> | null
    /**
     * The data used to update tbl_clientes.
     */
    data: XOR<tbl_clientesUpdateManyMutationInput, tbl_clientesUncheckedUpdateManyInput>
    /**
     * Filter which tbl_clientes to update
     */
    where?: tbl_clientesWhereInput
    /**
     * Limit how many tbl_clientes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_clientesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * tbl_clientes upsert
   */
  export type tbl_clientesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_clientes
     */
    select?: tbl_clientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_clientes
     */
    omit?: tbl_clientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_clientesInclude<ExtArgs> | null
    /**
     * The filter to search for the tbl_clientes to update in case it exists.
     */
    where: tbl_clientesWhereUniqueInput
    /**
     * In case the tbl_clientes found by the `where` argument doesn't exist, create a new tbl_clientes with this data.
     */
    create: XOR<tbl_clientesCreateInput, tbl_clientesUncheckedCreateInput>
    /**
     * In case the tbl_clientes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tbl_clientesUpdateInput, tbl_clientesUncheckedUpdateInput>
  }

  /**
   * tbl_clientes delete
   */
  export type tbl_clientesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_clientes
     */
    select?: tbl_clientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_clientes
     */
    omit?: tbl_clientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_clientesInclude<ExtArgs> | null
    /**
     * Filter which tbl_clientes to delete.
     */
    where: tbl_clientesWhereUniqueInput
  }

  /**
   * tbl_clientes deleteMany
   */
  export type tbl_clientesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_clientes to delete
     */
    where?: tbl_clientesWhereInput
    /**
     * Limit how many tbl_clientes to delete.
     */
    limit?: number
  }

  /**
   * tbl_clientes.municipios
   */
  export type tbl_clientes$municipiosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_municipios
     */
    select?: tbl_municipiosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_municipios
     */
    omit?: tbl_municipiosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_municipiosInclude<ExtArgs> | null
    where?: tbl_municipiosWhereInput
  }

  /**
   * tbl_clientes.comercios
   */
  export type tbl_clientes$comerciosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_comercios
     */
    select?: tbl_comerciosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_comercios
     */
    omit?: tbl_comerciosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_comerciosInclude<ExtArgs> | null
    where?: tbl_comerciosWhereInput
  }

  /**
   * tbl_clientes.pedidos
   */
  export type tbl_clientes$pedidosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_pedidos
     */
    select?: tbl_pedidosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_pedidos
     */
    omit?: tbl_pedidosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_pedidosInclude<ExtArgs> | null
    where?: tbl_pedidosWhereInput
    orderBy?: tbl_pedidosOrderByWithRelationInput | tbl_pedidosOrderByWithRelationInput[]
    cursor?: tbl_pedidosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tbl_pedidosScalarFieldEnum | Tbl_pedidosScalarFieldEnum[]
  }

  /**
   * tbl_clientes without action
   */
  export type tbl_clientesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_clientes
     */
    select?: tbl_clientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_clientes
     */
    omit?: tbl_clientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_clientesInclude<ExtArgs> | null
  }


  /**
   * Model tbl_departamentos
   */

  export type AggregateTbl_departamentos = {
    _count: Tbl_departamentosCountAggregateOutputType | null
    _avg: Tbl_departamentosAvgAggregateOutputType | null
    _sum: Tbl_departamentosSumAggregateOutputType | null
    _min: Tbl_departamentosMinAggregateOutputType | null
    _max: Tbl_departamentosMaxAggregateOutputType | null
  }

  export type Tbl_departamentosAvgAggregateOutputType = {
    pkid: number | null
  }

  export type Tbl_departamentosSumAggregateOutputType = {
    pkid: bigint | null
  }

  export type Tbl_departamentosMinAggregateOutputType = {
    pkid: bigint | null
    nombre: string | null
    nomenclatura: string | null
  }

  export type Tbl_departamentosMaxAggregateOutputType = {
    pkid: bigint | null
    nombre: string | null
    nomenclatura: string | null
  }

  export type Tbl_departamentosCountAggregateOutputType = {
    pkid: number
    nombre: number
    nomenclatura: number
    _all: number
  }


  export type Tbl_departamentosAvgAggregateInputType = {
    pkid?: true
  }

  export type Tbl_departamentosSumAggregateInputType = {
    pkid?: true
  }

  export type Tbl_departamentosMinAggregateInputType = {
    pkid?: true
    nombre?: true
    nomenclatura?: true
  }

  export type Tbl_departamentosMaxAggregateInputType = {
    pkid?: true
    nombre?: true
    nomenclatura?: true
  }

  export type Tbl_departamentosCountAggregateInputType = {
    pkid?: true
    nombre?: true
    nomenclatura?: true
    _all?: true
  }

  export type Tbl_departamentosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_departamentos to aggregate.
     */
    where?: tbl_departamentosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_departamentos to fetch.
     */
    orderBy?: tbl_departamentosOrderByWithRelationInput | tbl_departamentosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tbl_departamentosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_departamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_departamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tbl_departamentos
    **/
    _count?: true | Tbl_departamentosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tbl_departamentosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tbl_departamentosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tbl_departamentosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tbl_departamentosMaxAggregateInputType
  }

  export type GetTbl_departamentosAggregateType<T extends Tbl_departamentosAggregateArgs> = {
        [P in keyof T & keyof AggregateTbl_departamentos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTbl_departamentos[P]>
      : GetScalarType<T[P], AggregateTbl_departamentos[P]>
  }




  export type tbl_departamentosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_departamentosWhereInput
    orderBy?: tbl_departamentosOrderByWithAggregationInput | tbl_departamentosOrderByWithAggregationInput[]
    by: Tbl_departamentosScalarFieldEnum[] | Tbl_departamentosScalarFieldEnum
    having?: tbl_departamentosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tbl_departamentosCountAggregateInputType | true
    _avg?: Tbl_departamentosAvgAggregateInputType
    _sum?: Tbl_departamentosSumAggregateInputType
    _min?: Tbl_departamentosMinAggregateInputType
    _max?: Tbl_departamentosMaxAggregateInputType
  }

  export type Tbl_departamentosGroupByOutputType = {
    pkid: bigint
    nombre: string
    nomenclatura: string
    _count: Tbl_departamentosCountAggregateOutputType | null
    _avg: Tbl_departamentosAvgAggregateOutputType | null
    _sum: Tbl_departamentosSumAggregateOutputType | null
    _min: Tbl_departamentosMinAggregateOutputType | null
    _max: Tbl_departamentosMaxAggregateOutputType | null
  }

  type GetTbl_departamentosGroupByPayload<T extends tbl_departamentosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tbl_departamentosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tbl_departamentosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tbl_departamentosGroupByOutputType[P]>
            : GetScalarType<T[P], Tbl_departamentosGroupByOutputType[P]>
        }
      >
    >


  export type tbl_departamentosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pkid?: boolean
    nombre?: boolean
    nomenclatura?: boolean
    municipios?: boolean | tbl_departamentos$municipiosArgs<ExtArgs>
    _count?: boolean | Tbl_departamentosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tbl_departamentos"]>

  export type tbl_departamentosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pkid?: boolean
    nombre?: boolean
    nomenclatura?: boolean
  }, ExtArgs["result"]["tbl_departamentos"]>

  export type tbl_departamentosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pkid?: boolean
    nombre?: boolean
    nomenclatura?: boolean
  }, ExtArgs["result"]["tbl_departamentos"]>

  export type tbl_departamentosSelectScalar = {
    pkid?: boolean
    nombre?: boolean
    nomenclatura?: boolean
  }

  export type tbl_departamentosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"pkid" | "nombre" | "nomenclatura", ExtArgs["result"]["tbl_departamentos"]>
  export type tbl_departamentosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    municipios?: boolean | tbl_departamentos$municipiosArgs<ExtArgs>
    _count?: boolean | Tbl_departamentosCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type tbl_departamentosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type tbl_departamentosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $tbl_departamentosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tbl_departamentos"
    objects: {
      municipios: Prisma.$tbl_municipiosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      pkid: bigint
      nombre: string
      nomenclatura: string
    }, ExtArgs["result"]["tbl_departamentos"]>
    composites: {}
  }

  type tbl_departamentosGetPayload<S extends boolean | null | undefined | tbl_departamentosDefaultArgs> = $Result.GetResult<Prisma.$tbl_departamentosPayload, S>

  type tbl_departamentosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tbl_departamentosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tbl_departamentosCountAggregateInputType | true
    }

  export interface tbl_departamentosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tbl_departamentos'], meta: { name: 'tbl_departamentos' } }
    /**
     * Find zero or one Tbl_departamentos that matches the filter.
     * @param {tbl_departamentosFindUniqueArgs} args - Arguments to find a Tbl_departamentos
     * @example
     * // Get one Tbl_departamentos
     * const tbl_departamentos = await prisma.tbl_departamentos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tbl_departamentosFindUniqueArgs>(args: SelectSubset<T, tbl_departamentosFindUniqueArgs<ExtArgs>>): Prisma__tbl_departamentosClient<$Result.GetResult<Prisma.$tbl_departamentosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tbl_departamentos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tbl_departamentosFindUniqueOrThrowArgs} args - Arguments to find a Tbl_departamentos
     * @example
     * // Get one Tbl_departamentos
     * const tbl_departamentos = await prisma.tbl_departamentos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tbl_departamentosFindUniqueOrThrowArgs>(args: SelectSubset<T, tbl_departamentosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tbl_departamentosClient<$Result.GetResult<Prisma.$tbl_departamentosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_departamentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_departamentosFindFirstArgs} args - Arguments to find a Tbl_departamentos
     * @example
     * // Get one Tbl_departamentos
     * const tbl_departamentos = await prisma.tbl_departamentos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tbl_departamentosFindFirstArgs>(args?: SelectSubset<T, tbl_departamentosFindFirstArgs<ExtArgs>>): Prisma__tbl_departamentosClient<$Result.GetResult<Prisma.$tbl_departamentosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_departamentos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_departamentosFindFirstOrThrowArgs} args - Arguments to find a Tbl_departamentos
     * @example
     * // Get one Tbl_departamentos
     * const tbl_departamentos = await prisma.tbl_departamentos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tbl_departamentosFindFirstOrThrowArgs>(args?: SelectSubset<T, tbl_departamentosFindFirstOrThrowArgs<ExtArgs>>): Prisma__tbl_departamentosClient<$Result.GetResult<Prisma.$tbl_departamentosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tbl_departamentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_departamentosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tbl_departamentos
     * const tbl_departamentos = await prisma.tbl_departamentos.findMany()
     * 
     * // Get first 10 Tbl_departamentos
     * const tbl_departamentos = await prisma.tbl_departamentos.findMany({ take: 10 })
     * 
     * // Only select the `pkid`
     * const tbl_departamentosWithPkidOnly = await prisma.tbl_departamentos.findMany({ select: { pkid: true } })
     * 
     */
    findMany<T extends tbl_departamentosFindManyArgs>(args?: SelectSubset<T, tbl_departamentosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_departamentosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tbl_departamentos.
     * @param {tbl_departamentosCreateArgs} args - Arguments to create a Tbl_departamentos.
     * @example
     * // Create one Tbl_departamentos
     * const Tbl_departamentos = await prisma.tbl_departamentos.create({
     *   data: {
     *     // ... data to create a Tbl_departamentos
     *   }
     * })
     * 
     */
    create<T extends tbl_departamentosCreateArgs>(args: SelectSubset<T, tbl_departamentosCreateArgs<ExtArgs>>): Prisma__tbl_departamentosClient<$Result.GetResult<Prisma.$tbl_departamentosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tbl_departamentos.
     * @param {tbl_departamentosCreateManyArgs} args - Arguments to create many Tbl_departamentos.
     * @example
     * // Create many Tbl_departamentos
     * const tbl_departamentos = await prisma.tbl_departamentos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tbl_departamentosCreateManyArgs>(args?: SelectSubset<T, tbl_departamentosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tbl_departamentos and returns the data saved in the database.
     * @param {tbl_departamentosCreateManyAndReturnArgs} args - Arguments to create many Tbl_departamentos.
     * @example
     * // Create many Tbl_departamentos
     * const tbl_departamentos = await prisma.tbl_departamentos.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tbl_departamentos and only return the `pkid`
     * const tbl_departamentosWithPkidOnly = await prisma.tbl_departamentos.createManyAndReturn({
     *   select: { pkid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends tbl_departamentosCreateManyAndReturnArgs>(args?: SelectSubset<T, tbl_departamentosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_departamentosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tbl_departamentos.
     * @param {tbl_departamentosDeleteArgs} args - Arguments to delete one Tbl_departamentos.
     * @example
     * // Delete one Tbl_departamentos
     * const Tbl_departamentos = await prisma.tbl_departamentos.delete({
     *   where: {
     *     // ... filter to delete one Tbl_departamentos
     *   }
     * })
     * 
     */
    delete<T extends tbl_departamentosDeleteArgs>(args: SelectSubset<T, tbl_departamentosDeleteArgs<ExtArgs>>): Prisma__tbl_departamentosClient<$Result.GetResult<Prisma.$tbl_departamentosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tbl_departamentos.
     * @param {tbl_departamentosUpdateArgs} args - Arguments to update one Tbl_departamentos.
     * @example
     * // Update one Tbl_departamentos
     * const tbl_departamentos = await prisma.tbl_departamentos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tbl_departamentosUpdateArgs>(args: SelectSubset<T, tbl_departamentosUpdateArgs<ExtArgs>>): Prisma__tbl_departamentosClient<$Result.GetResult<Prisma.$tbl_departamentosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tbl_departamentos.
     * @param {tbl_departamentosDeleteManyArgs} args - Arguments to filter Tbl_departamentos to delete.
     * @example
     * // Delete a few Tbl_departamentos
     * const { count } = await prisma.tbl_departamentos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tbl_departamentosDeleteManyArgs>(args?: SelectSubset<T, tbl_departamentosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tbl_departamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_departamentosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tbl_departamentos
     * const tbl_departamentos = await prisma.tbl_departamentos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tbl_departamentosUpdateManyArgs>(args: SelectSubset<T, tbl_departamentosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tbl_departamentos and returns the data updated in the database.
     * @param {tbl_departamentosUpdateManyAndReturnArgs} args - Arguments to update many Tbl_departamentos.
     * @example
     * // Update many Tbl_departamentos
     * const tbl_departamentos = await prisma.tbl_departamentos.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tbl_departamentos and only return the `pkid`
     * const tbl_departamentosWithPkidOnly = await prisma.tbl_departamentos.updateManyAndReturn({
     *   select: { pkid: true },
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
    updateManyAndReturn<T extends tbl_departamentosUpdateManyAndReturnArgs>(args: SelectSubset<T, tbl_departamentosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_departamentosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tbl_departamentos.
     * @param {tbl_departamentosUpsertArgs} args - Arguments to update or create a Tbl_departamentos.
     * @example
     * // Update or create a Tbl_departamentos
     * const tbl_departamentos = await prisma.tbl_departamentos.upsert({
     *   create: {
     *     // ... data to create a Tbl_departamentos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tbl_departamentos we want to update
     *   }
     * })
     */
    upsert<T extends tbl_departamentosUpsertArgs>(args: SelectSubset<T, tbl_departamentosUpsertArgs<ExtArgs>>): Prisma__tbl_departamentosClient<$Result.GetResult<Prisma.$tbl_departamentosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tbl_departamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_departamentosCountArgs} args - Arguments to filter Tbl_departamentos to count.
     * @example
     * // Count the number of Tbl_departamentos
     * const count = await prisma.tbl_departamentos.count({
     *   where: {
     *     // ... the filter for the Tbl_departamentos we want to count
     *   }
     * })
    **/
    count<T extends tbl_departamentosCountArgs>(
      args?: Subset<T, tbl_departamentosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tbl_departamentosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tbl_departamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tbl_departamentosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tbl_departamentosAggregateArgs>(args: Subset<T, Tbl_departamentosAggregateArgs>): Prisma.PrismaPromise<GetTbl_departamentosAggregateType<T>>

    /**
     * Group by Tbl_departamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_departamentosGroupByArgs} args - Group by arguments.
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
      T extends tbl_departamentosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tbl_departamentosGroupByArgs['orderBy'] }
        : { orderBy?: tbl_departamentosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tbl_departamentosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTbl_departamentosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tbl_departamentos model
   */
  readonly fields: tbl_departamentosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tbl_departamentos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tbl_departamentosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    municipios<T extends tbl_departamentos$municipiosArgs<ExtArgs> = {}>(args?: Subset<T, tbl_departamentos$municipiosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_municipiosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the tbl_departamentos model
   */
  interface tbl_departamentosFieldRefs {
    readonly pkid: FieldRef<"tbl_departamentos", 'BigInt'>
    readonly nombre: FieldRef<"tbl_departamentos", 'String'>
    readonly nomenclatura: FieldRef<"tbl_departamentos", 'String'>
  }
    

  // Custom InputTypes
  /**
   * tbl_departamentos findUnique
   */
  export type tbl_departamentosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_departamentos
     */
    select?: tbl_departamentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_departamentos
     */
    omit?: tbl_departamentosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_departamentosInclude<ExtArgs> | null
    /**
     * Filter, which tbl_departamentos to fetch.
     */
    where: tbl_departamentosWhereUniqueInput
  }

  /**
   * tbl_departamentos findUniqueOrThrow
   */
  export type tbl_departamentosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_departamentos
     */
    select?: tbl_departamentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_departamentos
     */
    omit?: tbl_departamentosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_departamentosInclude<ExtArgs> | null
    /**
     * Filter, which tbl_departamentos to fetch.
     */
    where: tbl_departamentosWhereUniqueInput
  }

  /**
   * tbl_departamentos findFirst
   */
  export type tbl_departamentosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_departamentos
     */
    select?: tbl_departamentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_departamentos
     */
    omit?: tbl_departamentosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_departamentosInclude<ExtArgs> | null
    /**
     * Filter, which tbl_departamentos to fetch.
     */
    where?: tbl_departamentosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_departamentos to fetch.
     */
    orderBy?: tbl_departamentosOrderByWithRelationInput | tbl_departamentosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_departamentos.
     */
    cursor?: tbl_departamentosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_departamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_departamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_departamentos.
     */
    distinct?: Tbl_departamentosScalarFieldEnum | Tbl_departamentosScalarFieldEnum[]
  }

  /**
   * tbl_departamentos findFirstOrThrow
   */
  export type tbl_departamentosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_departamentos
     */
    select?: tbl_departamentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_departamentos
     */
    omit?: tbl_departamentosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_departamentosInclude<ExtArgs> | null
    /**
     * Filter, which tbl_departamentos to fetch.
     */
    where?: tbl_departamentosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_departamentos to fetch.
     */
    orderBy?: tbl_departamentosOrderByWithRelationInput | tbl_departamentosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_departamentos.
     */
    cursor?: tbl_departamentosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_departamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_departamentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_departamentos.
     */
    distinct?: Tbl_departamentosScalarFieldEnum | Tbl_departamentosScalarFieldEnum[]
  }

  /**
   * tbl_departamentos findMany
   */
  export type tbl_departamentosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_departamentos
     */
    select?: tbl_departamentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_departamentos
     */
    omit?: tbl_departamentosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_departamentosInclude<ExtArgs> | null
    /**
     * Filter, which tbl_departamentos to fetch.
     */
    where?: tbl_departamentosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_departamentos to fetch.
     */
    orderBy?: tbl_departamentosOrderByWithRelationInput | tbl_departamentosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tbl_departamentos.
     */
    cursor?: tbl_departamentosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_departamentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_departamentos.
     */
    skip?: number
    distinct?: Tbl_departamentosScalarFieldEnum | Tbl_departamentosScalarFieldEnum[]
  }

  /**
   * tbl_departamentos create
   */
  export type tbl_departamentosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_departamentos
     */
    select?: tbl_departamentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_departamentos
     */
    omit?: tbl_departamentosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_departamentosInclude<ExtArgs> | null
    /**
     * The data needed to create a tbl_departamentos.
     */
    data: XOR<tbl_departamentosCreateInput, tbl_departamentosUncheckedCreateInput>
  }

  /**
   * tbl_departamentos createMany
   */
  export type tbl_departamentosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tbl_departamentos.
     */
    data: tbl_departamentosCreateManyInput | tbl_departamentosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tbl_departamentos createManyAndReturn
   */
  export type tbl_departamentosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_departamentos
     */
    select?: tbl_departamentosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_departamentos
     */
    omit?: tbl_departamentosOmit<ExtArgs> | null
    /**
     * The data used to create many tbl_departamentos.
     */
    data: tbl_departamentosCreateManyInput | tbl_departamentosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tbl_departamentos update
   */
  export type tbl_departamentosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_departamentos
     */
    select?: tbl_departamentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_departamentos
     */
    omit?: tbl_departamentosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_departamentosInclude<ExtArgs> | null
    /**
     * The data needed to update a tbl_departamentos.
     */
    data: XOR<tbl_departamentosUpdateInput, tbl_departamentosUncheckedUpdateInput>
    /**
     * Choose, which tbl_departamentos to update.
     */
    where: tbl_departamentosWhereUniqueInput
  }

  /**
   * tbl_departamentos updateMany
   */
  export type tbl_departamentosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tbl_departamentos.
     */
    data: XOR<tbl_departamentosUpdateManyMutationInput, tbl_departamentosUncheckedUpdateManyInput>
    /**
     * Filter which tbl_departamentos to update
     */
    where?: tbl_departamentosWhereInput
    /**
     * Limit how many tbl_departamentos to update.
     */
    limit?: number
  }

  /**
   * tbl_departamentos updateManyAndReturn
   */
  export type tbl_departamentosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_departamentos
     */
    select?: tbl_departamentosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_departamentos
     */
    omit?: tbl_departamentosOmit<ExtArgs> | null
    /**
     * The data used to update tbl_departamentos.
     */
    data: XOR<tbl_departamentosUpdateManyMutationInput, tbl_departamentosUncheckedUpdateManyInput>
    /**
     * Filter which tbl_departamentos to update
     */
    where?: tbl_departamentosWhereInput
    /**
     * Limit how many tbl_departamentos to update.
     */
    limit?: number
  }

  /**
   * tbl_departamentos upsert
   */
  export type tbl_departamentosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_departamentos
     */
    select?: tbl_departamentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_departamentos
     */
    omit?: tbl_departamentosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_departamentosInclude<ExtArgs> | null
    /**
     * The filter to search for the tbl_departamentos to update in case it exists.
     */
    where: tbl_departamentosWhereUniqueInput
    /**
     * In case the tbl_departamentos found by the `where` argument doesn't exist, create a new tbl_departamentos with this data.
     */
    create: XOR<tbl_departamentosCreateInput, tbl_departamentosUncheckedCreateInput>
    /**
     * In case the tbl_departamentos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tbl_departamentosUpdateInput, tbl_departamentosUncheckedUpdateInput>
  }

  /**
   * tbl_departamentos delete
   */
  export type tbl_departamentosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_departamentos
     */
    select?: tbl_departamentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_departamentos
     */
    omit?: tbl_departamentosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_departamentosInclude<ExtArgs> | null
    /**
     * Filter which tbl_departamentos to delete.
     */
    where: tbl_departamentosWhereUniqueInput
  }

  /**
   * tbl_departamentos deleteMany
   */
  export type tbl_departamentosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_departamentos to delete
     */
    where?: tbl_departamentosWhereInput
    /**
     * Limit how many tbl_departamentos to delete.
     */
    limit?: number
  }

  /**
   * tbl_departamentos.municipios
   */
  export type tbl_departamentos$municipiosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_municipios
     */
    select?: tbl_municipiosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_municipios
     */
    omit?: tbl_municipiosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_municipiosInclude<ExtArgs> | null
    where?: tbl_municipiosWhereInput
    orderBy?: tbl_municipiosOrderByWithRelationInput | tbl_municipiosOrderByWithRelationInput[]
    cursor?: tbl_municipiosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tbl_municipiosScalarFieldEnum | Tbl_municipiosScalarFieldEnum[]
  }

  /**
   * tbl_departamentos without action
   */
  export type tbl_departamentosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_departamentos
     */
    select?: tbl_departamentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_departamentos
     */
    omit?: tbl_departamentosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_departamentosInclude<ExtArgs> | null
  }


  /**
   * Model tbl_det_productos
   */

  export type AggregateTbl_det_productos = {
    _count: Tbl_det_productosCountAggregateOutputType | null
    _avg: Tbl_det_productosAvgAggregateOutputType | null
    _sum: Tbl_det_productosSumAggregateOutputType | null
    _min: Tbl_det_productosMinAggregateOutputType | null
    _max: Tbl_det_productosMaxAggregateOutputType | null
  }

  export type Tbl_det_productosAvgAggregateOutputType = {
    pkid: number | null
    fkid_tbl_productos: number | null
  }

  export type Tbl_det_productosSumAggregateOutputType = {
    pkid: bigint | null
    fkid_tbl_productos: bigint | null
  }

  export type Tbl_det_productosMinAggregateOutputType = {
    pkid: bigint | null
    nombre: string | null
    fkid_tbl_productos: bigint | null
  }

  export type Tbl_det_productosMaxAggregateOutputType = {
    pkid: bigint | null
    nombre: string | null
    fkid_tbl_productos: bigint | null
  }

  export type Tbl_det_productosCountAggregateOutputType = {
    pkid: number
    nombre: number
    fkid_tbl_productos: number
    _all: number
  }


  export type Tbl_det_productosAvgAggregateInputType = {
    pkid?: true
    fkid_tbl_productos?: true
  }

  export type Tbl_det_productosSumAggregateInputType = {
    pkid?: true
    fkid_tbl_productos?: true
  }

  export type Tbl_det_productosMinAggregateInputType = {
    pkid?: true
    nombre?: true
    fkid_tbl_productos?: true
  }

  export type Tbl_det_productosMaxAggregateInputType = {
    pkid?: true
    nombre?: true
    fkid_tbl_productos?: true
  }

  export type Tbl_det_productosCountAggregateInputType = {
    pkid?: true
    nombre?: true
    fkid_tbl_productos?: true
    _all?: true
  }

  export type Tbl_det_productosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_det_productos to aggregate.
     */
    where?: tbl_det_productosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_det_productos to fetch.
     */
    orderBy?: tbl_det_productosOrderByWithRelationInput | tbl_det_productosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tbl_det_productosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_det_productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_det_productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tbl_det_productos
    **/
    _count?: true | Tbl_det_productosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tbl_det_productosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tbl_det_productosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tbl_det_productosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tbl_det_productosMaxAggregateInputType
  }

  export type GetTbl_det_productosAggregateType<T extends Tbl_det_productosAggregateArgs> = {
        [P in keyof T & keyof AggregateTbl_det_productos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTbl_det_productos[P]>
      : GetScalarType<T[P], AggregateTbl_det_productos[P]>
  }




  export type tbl_det_productosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_det_productosWhereInput
    orderBy?: tbl_det_productosOrderByWithAggregationInput | tbl_det_productosOrderByWithAggregationInput[]
    by: Tbl_det_productosScalarFieldEnum[] | Tbl_det_productosScalarFieldEnum
    having?: tbl_det_productosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tbl_det_productosCountAggregateInputType | true
    _avg?: Tbl_det_productosAvgAggregateInputType
    _sum?: Tbl_det_productosSumAggregateInputType
    _min?: Tbl_det_productosMinAggregateInputType
    _max?: Tbl_det_productosMaxAggregateInputType
  }

  export type Tbl_det_productosGroupByOutputType = {
    pkid: bigint
    nombre: string
    fkid_tbl_productos: bigint | null
    _count: Tbl_det_productosCountAggregateOutputType | null
    _avg: Tbl_det_productosAvgAggregateOutputType | null
    _sum: Tbl_det_productosSumAggregateOutputType | null
    _min: Tbl_det_productosMinAggregateOutputType | null
    _max: Tbl_det_productosMaxAggregateOutputType | null
  }

  type GetTbl_det_productosGroupByPayload<T extends tbl_det_productosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tbl_det_productosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tbl_det_productosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tbl_det_productosGroupByOutputType[P]>
            : GetScalarType<T[P], Tbl_det_productosGroupByOutputType[P]>
        }
      >
    >


  export type tbl_det_productosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pkid?: boolean
    nombre?: boolean
    fkid_tbl_productos?: boolean
    productos?: boolean | tbl_det_productos$productosArgs<ExtArgs>
    pedidos?: boolean | tbl_det_productos$pedidosArgs<ExtArgs>
    _count?: boolean | Tbl_det_productosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tbl_det_productos"]>

  export type tbl_det_productosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pkid?: boolean
    nombre?: boolean
    fkid_tbl_productos?: boolean
    productos?: boolean | tbl_det_productos$productosArgs<ExtArgs>
  }, ExtArgs["result"]["tbl_det_productos"]>

  export type tbl_det_productosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pkid?: boolean
    nombre?: boolean
    fkid_tbl_productos?: boolean
    productos?: boolean | tbl_det_productos$productosArgs<ExtArgs>
  }, ExtArgs["result"]["tbl_det_productos"]>

  export type tbl_det_productosSelectScalar = {
    pkid?: boolean
    nombre?: boolean
    fkid_tbl_productos?: boolean
  }

  export type tbl_det_productosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"pkid" | "nombre" | "fkid_tbl_productos", ExtArgs["result"]["tbl_det_productos"]>
  export type tbl_det_productosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productos?: boolean | tbl_det_productos$productosArgs<ExtArgs>
    pedidos?: boolean | tbl_det_productos$pedidosArgs<ExtArgs>
    _count?: boolean | Tbl_det_productosCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type tbl_det_productosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productos?: boolean | tbl_det_productos$productosArgs<ExtArgs>
  }
  export type tbl_det_productosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productos?: boolean | tbl_det_productos$productosArgs<ExtArgs>
  }

  export type $tbl_det_productosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tbl_det_productos"
    objects: {
      productos: Prisma.$tbl_productosPayload<ExtArgs> | null
      pedidos: Prisma.$tbl_pedidosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      pkid: bigint
      nombre: string
      fkid_tbl_productos: bigint | null
    }, ExtArgs["result"]["tbl_det_productos"]>
    composites: {}
  }

  type tbl_det_productosGetPayload<S extends boolean | null | undefined | tbl_det_productosDefaultArgs> = $Result.GetResult<Prisma.$tbl_det_productosPayload, S>

  type tbl_det_productosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tbl_det_productosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tbl_det_productosCountAggregateInputType | true
    }

  export interface tbl_det_productosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tbl_det_productos'], meta: { name: 'tbl_det_productos' } }
    /**
     * Find zero or one Tbl_det_productos that matches the filter.
     * @param {tbl_det_productosFindUniqueArgs} args - Arguments to find a Tbl_det_productos
     * @example
     * // Get one Tbl_det_productos
     * const tbl_det_productos = await prisma.tbl_det_productos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tbl_det_productosFindUniqueArgs>(args: SelectSubset<T, tbl_det_productosFindUniqueArgs<ExtArgs>>): Prisma__tbl_det_productosClient<$Result.GetResult<Prisma.$tbl_det_productosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tbl_det_productos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tbl_det_productosFindUniqueOrThrowArgs} args - Arguments to find a Tbl_det_productos
     * @example
     * // Get one Tbl_det_productos
     * const tbl_det_productos = await prisma.tbl_det_productos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tbl_det_productosFindUniqueOrThrowArgs>(args: SelectSubset<T, tbl_det_productosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tbl_det_productosClient<$Result.GetResult<Prisma.$tbl_det_productosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_det_productos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_det_productosFindFirstArgs} args - Arguments to find a Tbl_det_productos
     * @example
     * // Get one Tbl_det_productos
     * const tbl_det_productos = await prisma.tbl_det_productos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tbl_det_productosFindFirstArgs>(args?: SelectSubset<T, tbl_det_productosFindFirstArgs<ExtArgs>>): Prisma__tbl_det_productosClient<$Result.GetResult<Prisma.$tbl_det_productosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_det_productos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_det_productosFindFirstOrThrowArgs} args - Arguments to find a Tbl_det_productos
     * @example
     * // Get one Tbl_det_productos
     * const tbl_det_productos = await prisma.tbl_det_productos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tbl_det_productosFindFirstOrThrowArgs>(args?: SelectSubset<T, tbl_det_productosFindFirstOrThrowArgs<ExtArgs>>): Prisma__tbl_det_productosClient<$Result.GetResult<Prisma.$tbl_det_productosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tbl_det_productos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_det_productosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tbl_det_productos
     * const tbl_det_productos = await prisma.tbl_det_productos.findMany()
     * 
     * // Get first 10 Tbl_det_productos
     * const tbl_det_productos = await prisma.tbl_det_productos.findMany({ take: 10 })
     * 
     * // Only select the `pkid`
     * const tbl_det_productosWithPkidOnly = await prisma.tbl_det_productos.findMany({ select: { pkid: true } })
     * 
     */
    findMany<T extends tbl_det_productosFindManyArgs>(args?: SelectSubset<T, tbl_det_productosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_det_productosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tbl_det_productos.
     * @param {tbl_det_productosCreateArgs} args - Arguments to create a Tbl_det_productos.
     * @example
     * // Create one Tbl_det_productos
     * const Tbl_det_productos = await prisma.tbl_det_productos.create({
     *   data: {
     *     // ... data to create a Tbl_det_productos
     *   }
     * })
     * 
     */
    create<T extends tbl_det_productosCreateArgs>(args: SelectSubset<T, tbl_det_productosCreateArgs<ExtArgs>>): Prisma__tbl_det_productosClient<$Result.GetResult<Prisma.$tbl_det_productosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tbl_det_productos.
     * @param {tbl_det_productosCreateManyArgs} args - Arguments to create many Tbl_det_productos.
     * @example
     * // Create many Tbl_det_productos
     * const tbl_det_productos = await prisma.tbl_det_productos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tbl_det_productosCreateManyArgs>(args?: SelectSubset<T, tbl_det_productosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tbl_det_productos and returns the data saved in the database.
     * @param {tbl_det_productosCreateManyAndReturnArgs} args - Arguments to create many Tbl_det_productos.
     * @example
     * // Create many Tbl_det_productos
     * const tbl_det_productos = await prisma.tbl_det_productos.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tbl_det_productos and only return the `pkid`
     * const tbl_det_productosWithPkidOnly = await prisma.tbl_det_productos.createManyAndReturn({
     *   select: { pkid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends tbl_det_productosCreateManyAndReturnArgs>(args?: SelectSubset<T, tbl_det_productosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_det_productosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tbl_det_productos.
     * @param {tbl_det_productosDeleteArgs} args - Arguments to delete one Tbl_det_productos.
     * @example
     * // Delete one Tbl_det_productos
     * const Tbl_det_productos = await prisma.tbl_det_productos.delete({
     *   where: {
     *     // ... filter to delete one Tbl_det_productos
     *   }
     * })
     * 
     */
    delete<T extends tbl_det_productosDeleteArgs>(args: SelectSubset<T, tbl_det_productosDeleteArgs<ExtArgs>>): Prisma__tbl_det_productosClient<$Result.GetResult<Prisma.$tbl_det_productosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tbl_det_productos.
     * @param {tbl_det_productosUpdateArgs} args - Arguments to update one Tbl_det_productos.
     * @example
     * // Update one Tbl_det_productos
     * const tbl_det_productos = await prisma.tbl_det_productos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tbl_det_productosUpdateArgs>(args: SelectSubset<T, tbl_det_productosUpdateArgs<ExtArgs>>): Prisma__tbl_det_productosClient<$Result.GetResult<Prisma.$tbl_det_productosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tbl_det_productos.
     * @param {tbl_det_productosDeleteManyArgs} args - Arguments to filter Tbl_det_productos to delete.
     * @example
     * // Delete a few Tbl_det_productos
     * const { count } = await prisma.tbl_det_productos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tbl_det_productosDeleteManyArgs>(args?: SelectSubset<T, tbl_det_productosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tbl_det_productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_det_productosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tbl_det_productos
     * const tbl_det_productos = await prisma.tbl_det_productos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tbl_det_productosUpdateManyArgs>(args: SelectSubset<T, tbl_det_productosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tbl_det_productos and returns the data updated in the database.
     * @param {tbl_det_productosUpdateManyAndReturnArgs} args - Arguments to update many Tbl_det_productos.
     * @example
     * // Update many Tbl_det_productos
     * const tbl_det_productos = await prisma.tbl_det_productos.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tbl_det_productos and only return the `pkid`
     * const tbl_det_productosWithPkidOnly = await prisma.tbl_det_productos.updateManyAndReturn({
     *   select: { pkid: true },
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
    updateManyAndReturn<T extends tbl_det_productosUpdateManyAndReturnArgs>(args: SelectSubset<T, tbl_det_productosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_det_productosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tbl_det_productos.
     * @param {tbl_det_productosUpsertArgs} args - Arguments to update or create a Tbl_det_productos.
     * @example
     * // Update or create a Tbl_det_productos
     * const tbl_det_productos = await prisma.tbl_det_productos.upsert({
     *   create: {
     *     // ... data to create a Tbl_det_productos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tbl_det_productos we want to update
     *   }
     * })
     */
    upsert<T extends tbl_det_productosUpsertArgs>(args: SelectSubset<T, tbl_det_productosUpsertArgs<ExtArgs>>): Prisma__tbl_det_productosClient<$Result.GetResult<Prisma.$tbl_det_productosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tbl_det_productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_det_productosCountArgs} args - Arguments to filter Tbl_det_productos to count.
     * @example
     * // Count the number of Tbl_det_productos
     * const count = await prisma.tbl_det_productos.count({
     *   where: {
     *     // ... the filter for the Tbl_det_productos we want to count
     *   }
     * })
    **/
    count<T extends tbl_det_productosCountArgs>(
      args?: Subset<T, tbl_det_productosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tbl_det_productosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tbl_det_productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tbl_det_productosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tbl_det_productosAggregateArgs>(args: Subset<T, Tbl_det_productosAggregateArgs>): Prisma.PrismaPromise<GetTbl_det_productosAggregateType<T>>

    /**
     * Group by Tbl_det_productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_det_productosGroupByArgs} args - Group by arguments.
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
      T extends tbl_det_productosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tbl_det_productosGroupByArgs['orderBy'] }
        : { orderBy?: tbl_det_productosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tbl_det_productosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTbl_det_productosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tbl_det_productos model
   */
  readonly fields: tbl_det_productosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tbl_det_productos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tbl_det_productosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    productos<T extends tbl_det_productos$productosArgs<ExtArgs> = {}>(args?: Subset<T, tbl_det_productos$productosArgs<ExtArgs>>): Prisma__tbl_productosClient<$Result.GetResult<Prisma.$tbl_productosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    pedidos<T extends tbl_det_productos$pedidosArgs<ExtArgs> = {}>(args?: Subset<T, tbl_det_productos$pedidosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_pedidosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the tbl_det_productos model
   */
  interface tbl_det_productosFieldRefs {
    readonly pkid: FieldRef<"tbl_det_productos", 'BigInt'>
    readonly nombre: FieldRef<"tbl_det_productos", 'String'>
    readonly fkid_tbl_productos: FieldRef<"tbl_det_productos", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * tbl_det_productos findUnique
   */
  export type tbl_det_productosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_det_productos
     */
    select?: tbl_det_productosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_det_productos
     */
    omit?: tbl_det_productosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_det_productosInclude<ExtArgs> | null
    /**
     * Filter, which tbl_det_productos to fetch.
     */
    where: tbl_det_productosWhereUniqueInput
  }

  /**
   * tbl_det_productos findUniqueOrThrow
   */
  export type tbl_det_productosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_det_productos
     */
    select?: tbl_det_productosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_det_productos
     */
    omit?: tbl_det_productosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_det_productosInclude<ExtArgs> | null
    /**
     * Filter, which tbl_det_productos to fetch.
     */
    where: tbl_det_productosWhereUniqueInput
  }

  /**
   * tbl_det_productos findFirst
   */
  export type tbl_det_productosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_det_productos
     */
    select?: tbl_det_productosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_det_productos
     */
    omit?: tbl_det_productosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_det_productosInclude<ExtArgs> | null
    /**
     * Filter, which tbl_det_productos to fetch.
     */
    where?: tbl_det_productosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_det_productos to fetch.
     */
    orderBy?: tbl_det_productosOrderByWithRelationInput | tbl_det_productosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_det_productos.
     */
    cursor?: tbl_det_productosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_det_productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_det_productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_det_productos.
     */
    distinct?: Tbl_det_productosScalarFieldEnum | Tbl_det_productosScalarFieldEnum[]
  }

  /**
   * tbl_det_productos findFirstOrThrow
   */
  export type tbl_det_productosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_det_productos
     */
    select?: tbl_det_productosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_det_productos
     */
    omit?: tbl_det_productosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_det_productosInclude<ExtArgs> | null
    /**
     * Filter, which tbl_det_productos to fetch.
     */
    where?: tbl_det_productosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_det_productos to fetch.
     */
    orderBy?: tbl_det_productosOrderByWithRelationInput | tbl_det_productosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_det_productos.
     */
    cursor?: tbl_det_productosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_det_productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_det_productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_det_productos.
     */
    distinct?: Tbl_det_productosScalarFieldEnum | Tbl_det_productosScalarFieldEnum[]
  }

  /**
   * tbl_det_productos findMany
   */
  export type tbl_det_productosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_det_productos
     */
    select?: tbl_det_productosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_det_productos
     */
    omit?: tbl_det_productosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_det_productosInclude<ExtArgs> | null
    /**
     * Filter, which tbl_det_productos to fetch.
     */
    where?: tbl_det_productosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_det_productos to fetch.
     */
    orderBy?: tbl_det_productosOrderByWithRelationInput | tbl_det_productosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tbl_det_productos.
     */
    cursor?: tbl_det_productosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_det_productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_det_productos.
     */
    skip?: number
    distinct?: Tbl_det_productosScalarFieldEnum | Tbl_det_productosScalarFieldEnum[]
  }

  /**
   * tbl_det_productos create
   */
  export type tbl_det_productosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_det_productos
     */
    select?: tbl_det_productosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_det_productos
     */
    omit?: tbl_det_productosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_det_productosInclude<ExtArgs> | null
    /**
     * The data needed to create a tbl_det_productos.
     */
    data: XOR<tbl_det_productosCreateInput, tbl_det_productosUncheckedCreateInput>
  }

  /**
   * tbl_det_productos createMany
   */
  export type tbl_det_productosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tbl_det_productos.
     */
    data: tbl_det_productosCreateManyInput | tbl_det_productosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tbl_det_productos createManyAndReturn
   */
  export type tbl_det_productosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_det_productos
     */
    select?: tbl_det_productosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_det_productos
     */
    omit?: tbl_det_productosOmit<ExtArgs> | null
    /**
     * The data used to create many tbl_det_productos.
     */
    data: tbl_det_productosCreateManyInput | tbl_det_productosCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_det_productosIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * tbl_det_productos update
   */
  export type tbl_det_productosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_det_productos
     */
    select?: tbl_det_productosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_det_productos
     */
    omit?: tbl_det_productosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_det_productosInclude<ExtArgs> | null
    /**
     * The data needed to update a tbl_det_productos.
     */
    data: XOR<tbl_det_productosUpdateInput, tbl_det_productosUncheckedUpdateInput>
    /**
     * Choose, which tbl_det_productos to update.
     */
    where: tbl_det_productosWhereUniqueInput
  }

  /**
   * tbl_det_productos updateMany
   */
  export type tbl_det_productosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tbl_det_productos.
     */
    data: XOR<tbl_det_productosUpdateManyMutationInput, tbl_det_productosUncheckedUpdateManyInput>
    /**
     * Filter which tbl_det_productos to update
     */
    where?: tbl_det_productosWhereInput
    /**
     * Limit how many tbl_det_productos to update.
     */
    limit?: number
  }

  /**
   * tbl_det_productos updateManyAndReturn
   */
  export type tbl_det_productosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_det_productos
     */
    select?: tbl_det_productosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_det_productos
     */
    omit?: tbl_det_productosOmit<ExtArgs> | null
    /**
     * The data used to update tbl_det_productos.
     */
    data: XOR<tbl_det_productosUpdateManyMutationInput, tbl_det_productosUncheckedUpdateManyInput>
    /**
     * Filter which tbl_det_productos to update
     */
    where?: tbl_det_productosWhereInput
    /**
     * Limit how many tbl_det_productos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_det_productosIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * tbl_det_productos upsert
   */
  export type tbl_det_productosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_det_productos
     */
    select?: tbl_det_productosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_det_productos
     */
    omit?: tbl_det_productosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_det_productosInclude<ExtArgs> | null
    /**
     * The filter to search for the tbl_det_productos to update in case it exists.
     */
    where: tbl_det_productosWhereUniqueInput
    /**
     * In case the tbl_det_productos found by the `where` argument doesn't exist, create a new tbl_det_productos with this data.
     */
    create: XOR<tbl_det_productosCreateInput, tbl_det_productosUncheckedCreateInput>
    /**
     * In case the tbl_det_productos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tbl_det_productosUpdateInput, tbl_det_productosUncheckedUpdateInput>
  }

  /**
   * tbl_det_productos delete
   */
  export type tbl_det_productosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_det_productos
     */
    select?: tbl_det_productosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_det_productos
     */
    omit?: tbl_det_productosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_det_productosInclude<ExtArgs> | null
    /**
     * Filter which tbl_det_productos to delete.
     */
    where: tbl_det_productosWhereUniqueInput
  }

  /**
   * tbl_det_productos deleteMany
   */
  export type tbl_det_productosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_det_productos to delete
     */
    where?: tbl_det_productosWhereInput
    /**
     * Limit how many tbl_det_productos to delete.
     */
    limit?: number
  }

  /**
   * tbl_det_productos.productos
   */
  export type tbl_det_productos$productosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_productos
     */
    select?: tbl_productosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_productos
     */
    omit?: tbl_productosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_productosInclude<ExtArgs> | null
    where?: tbl_productosWhereInput
  }

  /**
   * tbl_det_productos.pedidos
   */
  export type tbl_det_productos$pedidosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_pedidos
     */
    select?: tbl_pedidosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_pedidos
     */
    omit?: tbl_pedidosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_pedidosInclude<ExtArgs> | null
    where?: tbl_pedidosWhereInput
    orderBy?: tbl_pedidosOrderByWithRelationInput | tbl_pedidosOrderByWithRelationInput[]
    cursor?: tbl_pedidosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tbl_pedidosScalarFieldEnum | Tbl_pedidosScalarFieldEnum[]
  }

  /**
   * tbl_det_productos without action
   */
  export type tbl_det_productosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_det_productos
     */
    select?: tbl_det_productosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_det_productos
     */
    omit?: tbl_det_productosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_det_productosInclude<ExtArgs> | null
  }


  /**
   * Model tbl_estados_usuario
   */

  export type AggregateTbl_estados_usuario = {
    _count: Tbl_estados_usuarioCountAggregateOutputType | null
    _avg: Tbl_estados_usuarioAvgAggregateOutputType | null
    _sum: Tbl_estados_usuarioSumAggregateOutputType | null
    _min: Tbl_estados_usuarioMinAggregateOutputType | null
    _max: Tbl_estados_usuarioMaxAggregateOutputType | null
  }

  export type Tbl_estados_usuarioAvgAggregateOutputType = {
    pkid: number | null
  }

  export type Tbl_estados_usuarioSumAggregateOutputType = {
    pkid: bigint | null
  }

  export type Tbl_estados_usuarioMinAggregateOutputType = {
    pkid: bigint | null
    nombre: string | null
    nomenclatura: string | null
  }

  export type Tbl_estados_usuarioMaxAggregateOutputType = {
    pkid: bigint | null
    nombre: string | null
    nomenclatura: string | null
  }

  export type Tbl_estados_usuarioCountAggregateOutputType = {
    pkid: number
    nombre: number
    nomenclatura: number
    _all: number
  }


  export type Tbl_estados_usuarioAvgAggregateInputType = {
    pkid?: true
  }

  export type Tbl_estados_usuarioSumAggregateInputType = {
    pkid?: true
  }

  export type Tbl_estados_usuarioMinAggregateInputType = {
    pkid?: true
    nombre?: true
    nomenclatura?: true
  }

  export type Tbl_estados_usuarioMaxAggregateInputType = {
    pkid?: true
    nombre?: true
    nomenclatura?: true
  }

  export type Tbl_estados_usuarioCountAggregateInputType = {
    pkid?: true
    nombre?: true
    nomenclatura?: true
    _all?: true
  }

  export type Tbl_estados_usuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_estados_usuario to aggregate.
     */
    where?: tbl_estados_usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_estados_usuarios to fetch.
     */
    orderBy?: tbl_estados_usuarioOrderByWithRelationInput | tbl_estados_usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tbl_estados_usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_estados_usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_estados_usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tbl_estados_usuarios
    **/
    _count?: true | Tbl_estados_usuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tbl_estados_usuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tbl_estados_usuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tbl_estados_usuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tbl_estados_usuarioMaxAggregateInputType
  }

  export type GetTbl_estados_usuarioAggregateType<T extends Tbl_estados_usuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateTbl_estados_usuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTbl_estados_usuario[P]>
      : GetScalarType<T[P], AggregateTbl_estados_usuario[P]>
  }




  export type tbl_estados_usuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_estados_usuarioWhereInput
    orderBy?: tbl_estados_usuarioOrderByWithAggregationInput | tbl_estados_usuarioOrderByWithAggregationInput[]
    by: Tbl_estados_usuarioScalarFieldEnum[] | Tbl_estados_usuarioScalarFieldEnum
    having?: tbl_estados_usuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tbl_estados_usuarioCountAggregateInputType | true
    _avg?: Tbl_estados_usuarioAvgAggregateInputType
    _sum?: Tbl_estados_usuarioSumAggregateInputType
    _min?: Tbl_estados_usuarioMinAggregateInputType
    _max?: Tbl_estados_usuarioMaxAggregateInputType
  }

  export type Tbl_estados_usuarioGroupByOutputType = {
    pkid: bigint
    nombre: string
    nomenclatura: string
    _count: Tbl_estados_usuarioCountAggregateOutputType | null
    _avg: Tbl_estados_usuarioAvgAggregateOutputType | null
    _sum: Tbl_estados_usuarioSumAggregateOutputType | null
    _min: Tbl_estados_usuarioMinAggregateOutputType | null
    _max: Tbl_estados_usuarioMaxAggregateOutputType | null
  }

  type GetTbl_estados_usuarioGroupByPayload<T extends tbl_estados_usuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tbl_estados_usuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tbl_estados_usuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tbl_estados_usuarioGroupByOutputType[P]>
            : GetScalarType<T[P], Tbl_estados_usuarioGroupByOutputType[P]>
        }
      >
    >


  export type tbl_estados_usuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pkid?: boolean
    nombre?: boolean
    nomenclatura?: boolean
    usuarios?: boolean | tbl_estados_usuario$usuariosArgs<ExtArgs>
    _count?: boolean | Tbl_estados_usuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tbl_estados_usuario"]>

  export type tbl_estados_usuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pkid?: boolean
    nombre?: boolean
    nomenclatura?: boolean
  }, ExtArgs["result"]["tbl_estados_usuario"]>

  export type tbl_estados_usuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pkid?: boolean
    nombre?: boolean
    nomenclatura?: boolean
  }, ExtArgs["result"]["tbl_estados_usuario"]>

  export type tbl_estados_usuarioSelectScalar = {
    pkid?: boolean
    nombre?: boolean
    nomenclatura?: boolean
  }

  export type tbl_estados_usuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"pkid" | "nombre" | "nomenclatura", ExtArgs["result"]["tbl_estados_usuario"]>
  export type tbl_estados_usuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | tbl_estados_usuario$usuariosArgs<ExtArgs>
    _count?: boolean | Tbl_estados_usuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type tbl_estados_usuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type tbl_estados_usuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $tbl_estados_usuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tbl_estados_usuario"
    objects: {
      usuarios: Prisma.$tbl_usuariosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      pkid: bigint
      nombre: string
      nomenclatura: string
    }, ExtArgs["result"]["tbl_estados_usuario"]>
    composites: {}
  }

  type tbl_estados_usuarioGetPayload<S extends boolean | null | undefined | tbl_estados_usuarioDefaultArgs> = $Result.GetResult<Prisma.$tbl_estados_usuarioPayload, S>

  type tbl_estados_usuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tbl_estados_usuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tbl_estados_usuarioCountAggregateInputType | true
    }

  export interface tbl_estados_usuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tbl_estados_usuario'], meta: { name: 'tbl_estados_usuario' } }
    /**
     * Find zero or one Tbl_estados_usuario that matches the filter.
     * @param {tbl_estados_usuarioFindUniqueArgs} args - Arguments to find a Tbl_estados_usuario
     * @example
     * // Get one Tbl_estados_usuario
     * const tbl_estados_usuario = await prisma.tbl_estados_usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tbl_estados_usuarioFindUniqueArgs>(args: SelectSubset<T, tbl_estados_usuarioFindUniqueArgs<ExtArgs>>): Prisma__tbl_estados_usuarioClient<$Result.GetResult<Prisma.$tbl_estados_usuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tbl_estados_usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tbl_estados_usuarioFindUniqueOrThrowArgs} args - Arguments to find a Tbl_estados_usuario
     * @example
     * // Get one Tbl_estados_usuario
     * const tbl_estados_usuario = await prisma.tbl_estados_usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tbl_estados_usuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, tbl_estados_usuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tbl_estados_usuarioClient<$Result.GetResult<Prisma.$tbl_estados_usuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_estados_usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_estados_usuarioFindFirstArgs} args - Arguments to find a Tbl_estados_usuario
     * @example
     * // Get one Tbl_estados_usuario
     * const tbl_estados_usuario = await prisma.tbl_estados_usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tbl_estados_usuarioFindFirstArgs>(args?: SelectSubset<T, tbl_estados_usuarioFindFirstArgs<ExtArgs>>): Prisma__tbl_estados_usuarioClient<$Result.GetResult<Prisma.$tbl_estados_usuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_estados_usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_estados_usuarioFindFirstOrThrowArgs} args - Arguments to find a Tbl_estados_usuario
     * @example
     * // Get one Tbl_estados_usuario
     * const tbl_estados_usuario = await prisma.tbl_estados_usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tbl_estados_usuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, tbl_estados_usuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__tbl_estados_usuarioClient<$Result.GetResult<Prisma.$tbl_estados_usuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tbl_estados_usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_estados_usuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tbl_estados_usuarios
     * const tbl_estados_usuarios = await prisma.tbl_estados_usuario.findMany()
     * 
     * // Get first 10 Tbl_estados_usuarios
     * const tbl_estados_usuarios = await prisma.tbl_estados_usuario.findMany({ take: 10 })
     * 
     * // Only select the `pkid`
     * const tbl_estados_usuarioWithPkidOnly = await prisma.tbl_estados_usuario.findMany({ select: { pkid: true } })
     * 
     */
    findMany<T extends tbl_estados_usuarioFindManyArgs>(args?: SelectSubset<T, tbl_estados_usuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_estados_usuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tbl_estados_usuario.
     * @param {tbl_estados_usuarioCreateArgs} args - Arguments to create a Tbl_estados_usuario.
     * @example
     * // Create one Tbl_estados_usuario
     * const Tbl_estados_usuario = await prisma.tbl_estados_usuario.create({
     *   data: {
     *     // ... data to create a Tbl_estados_usuario
     *   }
     * })
     * 
     */
    create<T extends tbl_estados_usuarioCreateArgs>(args: SelectSubset<T, tbl_estados_usuarioCreateArgs<ExtArgs>>): Prisma__tbl_estados_usuarioClient<$Result.GetResult<Prisma.$tbl_estados_usuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tbl_estados_usuarios.
     * @param {tbl_estados_usuarioCreateManyArgs} args - Arguments to create many Tbl_estados_usuarios.
     * @example
     * // Create many Tbl_estados_usuarios
     * const tbl_estados_usuario = await prisma.tbl_estados_usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tbl_estados_usuarioCreateManyArgs>(args?: SelectSubset<T, tbl_estados_usuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tbl_estados_usuarios and returns the data saved in the database.
     * @param {tbl_estados_usuarioCreateManyAndReturnArgs} args - Arguments to create many Tbl_estados_usuarios.
     * @example
     * // Create many Tbl_estados_usuarios
     * const tbl_estados_usuario = await prisma.tbl_estados_usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tbl_estados_usuarios and only return the `pkid`
     * const tbl_estados_usuarioWithPkidOnly = await prisma.tbl_estados_usuario.createManyAndReturn({
     *   select: { pkid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends tbl_estados_usuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, tbl_estados_usuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_estados_usuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tbl_estados_usuario.
     * @param {tbl_estados_usuarioDeleteArgs} args - Arguments to delete one Tbl_estados_usuario.
     * @example
     * // Delete one Tbl_estados_usuario
     * const Tbl_estados_usuario = await prisma.tbl_estados_usuario.delete({
     *   where: {
     *     // ... filter to delete one Tbl_estados_usuario
     *   }
     * })
     * 
     */
    delete<T extends tbl_estados_usuarioDeleteArgs>(args: SelectSubset<T, tbl_estados_usuarioDeleteArgs<ExtArgs>>): Prisma__tbl_estados_usuarioClient<$Result.GetResult<Prisma.$tbl_estados_usuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tbl_estados_usuario.
     * @param {tbl_estados_usuarioUpdateArgs} args - Arguments to update one Tbl_estados_usuario.
     * @example
     * // Update one Tbl_estados_usuario
     * const tbl_estados_usuario = await prisma.tbl_estados_usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tbl_estados_usuarioUpdateArgs>(args: SelectSubset<T, tbl_estados_usuarioUpdateArgs<ExtArgs>>): Prisma__tbl_estados_usuarioClient<$Result.GetResult<Prisma.$tbl_estados_usuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tbl_estados_usuarios.
     * @param {tbl_estados_usuarioDeleteManyArgs} args - Arguments to filter Tbl_estados_usuarios to delete.
     * @example
     * // Delete a few Tbl_estados_usuarios
     * const { count } = await prisma.tbl_estados_usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tbl_estados_usuarioDeleteManyArgs>(args?: SelectSubset<T, tbl_estados_usuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tbl_estados_usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_estados_usuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tbl_estados_usuarios
     * const tbl_estados_usuario = await prisma.tbl_estados_usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tbl_estados_usuarioUpdateManyArgs>(args: SelectSubset<T, tbl_estados_usuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tbl_estados_usuarios and returns the data updated in the database.
     * @param {tbl_estados_usuarioUpdateManyAndReturnArgs} args - Arguments to update many Tbl_estados_usuarios.
     * @example
     * // Update many Tbl_estados_usuarios
     * const tbl_estados_usuario = await prisma.tbl_estados_usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tbl_estados_usuarios and only return the `pkid`
     * const tbl_estados_usuarioWithPkidOnly = await prisma.tbl_estados_usuario.updateManyAndReturn({
     *   select: { pkid: true },
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
    updateManyAndReturn<T extends tbl_estados_usuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, tbl_estados_usuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_estados_usuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tbl_estados_usuario.
     * @param {tbl_estados_usuarioUpsertArgs} args - Arguments to update or create a Tbl_estados_usuario.
     * @example
     * // Update or create a Tbl_estados_usuario
     * const tbl_estados_usuario = await prisma.tbl_estados_usuario.upsert({
     *   create: {
     *     // ... data to create a Tbl_estados_usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tbl_estados_usuario we want to update
     *   }
     * })
     */
    upsert<T extends tbl_estados_usuarioUpsertArgs>(args: SelectSubset<T, tbl_estados_usuarioUpsertArgs<ExtArgs>>): Prisma__tbl_estados_usuarioClient<$Result.GetResult<Prisma.$tbl_estados_usuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tbl_estados_usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_estados_usuarioCountArgs} args - Arguments to filter Tbl_estados_usuarios to count.
     * @example
     * // Count the number of Tbl_estados_usuarios
     * const count = await prisma.tbl_estados_usuario.count({
     *   where: {
     *     // ... the filter for the Tbl_estados_usuarios we want to count
     *   }
     * })
    **/
    count<T extends tbl_estados_usuarioCountArgs>(
      args?: Subset<T, tbl_estados_usuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tbl_estados_usuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tbl_estados_usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tbl_estados_usuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tbl_estados_usuarioAggregateArgs>(args: Subset<T, Tbl_estados_usuarioAggregateArgs>): Prisma.PrismaPromise<GetTbl_estados_usuarioAggregateType<T>>

    /**
     * Group by Tbl_estados_usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_estados_usuarioGroupByArgs} args - Group by arguments.
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
      T extends tbl_estados_usuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tbl_estados_usuarioGroupByArgs['orderBy'] }
        : { orderBy?: tbl_estados_usuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tbl_estados_usuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTbl_estados_usuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tbl_estados_usuario model
   */
  readonly fields: tbl_estados_usuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tbl_estados_usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tbl_estados_usuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuarios<T extends tbl_estados_usuario$usuariosArgs<ExtArgs> = {}>(args?: Subset<T, tbl_estados_usuario$usuariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_usuariosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the tbl_estados_usuario model
   */
  interface tbl_estados_usuarioFieldRefs {
    readonly pkid: FieldRef<"tbl_estados_usuario", 'BigInt'>
    readonly nombre: FieldRef<"tbl_estados_usuario", 'String'>
    readonly nomenclatura: FieldRef<"tbl_estados_usuario", 'String'>
  }
    

  // Custom InputTypes
  /**
   * tbl_estados_usuario findUnique
   */
  export type tbl_estados_usuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_estados_usuario
     */
    select?: tbl_estados_usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_estados_usuario
     */
    omit?: tbl_estados_usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_estados_usuarioInclude<ExtArgs> | null
    /**
     * Filter, which tbl_estados_usuario to fetch.
     */
    where: tbl_estados_usuarioWhereUniqueInput
  }

  /**
   * tbl_estados_usuario findUniqueOrThrow
   */
  export type tbl_estados_usuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_estados_usuario
     */
    select?: tbl_estados_usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_estados_usuario
     */
    omit?: tbl_estados_usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_estados_usuarioInclude<ExtArgs> | null
    /**
     * Filter, which tbl_estados_usuario to fetch.
     */
    where: tbl_estados_usuarioWhereUniqueInput
  }

  /**
   * tbl_estados_usuario findFirst
   */
  export type tbl_estados_usuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_estados_usuario
     */
    select?: tbl_estados_usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_estados_usuario
     */
    omit?: tbl_estados_usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_estados_usuarioInclude<ExtArgs> | null
    /**
     * Filter, which tbl_estados_usuario to fetch.
     */
    where?: tbl_estados_usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_estados_usuarios to fetch.
     */
    orderBy?: tbl_estados_usuarioOrderByWithRelationInput | tbl_estados_usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_estados_usuarios.
     */
    cursor?: tbl_estados_usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_estados_usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_estados_usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_estados_usuarios.
     */
    distinct?: Tbl_estados_usuarioScalarFieldEnum | Tbl_estados_usuarioScalarFieldEnum[]
  }

  /**
   * tbl_estados_usuario findFirstOrThrow
   */
  export type tbl_estados_usuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_estados_usuario
     */
    select?: tbl_estados_usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_estados_usuario
     */
    omit?: tbl_estados_usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_estados_usuarioInclude<ExtArgs> | null
    /**
     * Filter, which tbl_estados_usuario to fetch.
     */
    where?: tbl_estados_usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_estados_usuarios to fetch.
     */
    orderBy?: tbl_estados_usuarioOrderByWithRelationInput | tbl_estados_usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_estados_usuarios.
     */
    cursor?: tbl_estados_usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_estados_usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_estados_usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_estados_usuarios.
     */
    distinct?: Tbl_estados_usuarioScalarFieldEnum | Tbl_estados_usuarioScalarFieldEnum[]
  }

  /**
   * tbl_estados_usuario findMany
   */
  export type tbl_estados_usuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_estados_usuario
     */
    select?: tbl_estados_usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_estados_usuario
     */
    omit?: tbl_estados_usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_estados_usuarioInclude<ExtArgs> | null
    /**
     * Filter, which tbl_estados_usuarios to fetch.
     */
    where?: tbl_estados_usuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_estados_usuarios to fetch.
     */
    orderBy?: tbl_estados_usuarioOrderByWithRelationInput | tbl_estados_usuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tbl_estados_usuarios.
     */
    cursor?: tbl_estados_usuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_estados_usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_estados_usuarios.
     */
    skip?: number
    distinct?: Tbl_estados_usuarioScalarFieldEnum | Tbl_estados_usuarioScalarFieldEnum[]
  }

  /**
   * tbl_estados_usuario create
   */
  export type tbl_estados_usuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_estados_usuario
     */
    select?: tbl_estados_usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_estados_usuario
     */
    omit?: tbl_estados_usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_estados_usuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a tbl_estados_usuario.
     */
    data: XOR<tbl_estados_usuarioCreateInput, tbl_estados_usuarioUncheckedCreateInput>
  }

  /**
   * tbl_estados_usuario createMany
   */
  export type tbl_estados_usuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tbl_estados_usuarios.
     */
    data: tbl_estados_usuarioCreateManyInput | tbl_estados_usuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tbl_estados_usuario createManyAndReturn
   */
  export type tbl_estados_usuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_estados_usuario
     */
    select?: tbl_estados_usuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_estados_usuario
     */
    omit?: tbl_estados_usuarioOmit<ExtArgs> | null
    /**
     * The data used to create many tbl_estados_usuarios.
     */
    data: tbl_estados_usuarioCreateManyInput | tbl_estados_usuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tbl_estados_usuario update
   */
  export type tbl_estados_usuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_estados_usuario
     */
    select?: tbl_estados_usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_estados_usuario
     */
    omit?: tbl_estados_usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_estados_usuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a tbl_estados_usuario.
     */
    data: XOR<tbl_estados_usuarioUpdateInput, tbl_estados_usuarioUncheckedUpdateInput>
    /**
     * Choose, which tbl_estados_usuario to update.
     */
    where: tbl_estados_usuarioWhereUniqueInput
  }

  /**
   * tbl_estados_usuario updateMany
   */
  export type tbl_estados_usuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tbl_estados_usuarios.
     */
    data: XOR<tbl_estados_usuarioUpdateManyMutationInput, tbl_estados_usuarioUncheckedUpdateManyInput>
    /**
     * Filter which tbl_estados_usuarios to update
     */
    where?: tbl_estados_usuarioWhereInput
    /**
     * Limit how many tbl_estados_usuarios to update.
     */
    limit?: number
  }

  /**
   * tbl_estados_usuario updateManyAndReturn
   */
  export type tbl_estados_usuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_estados_usuario
     */
    select?: tbl_estados_usuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_estados_usuario
     */
    omit?: tbl_estados_usuarioOmit<ExtArgs> | null
    /**
     * The data used to update tbl_estados_usuarios.
     */
    data: XOR<tbl_estados_usuarioUpdateManyMutationInput, tbl_estados_usuarioUncheckedUpdateManyInput>
    /**
     * Filter which tbl_estados_usuarios to update
     */
    where?: tbl_estados_usuarioWhereInput
    /**
     * Limit how many tbl_estados_usuarios to update.
     */
    limit?: number
  }

  /**
   * tbl_estados_usuario upsert
   */
  export type tbl_estados_usuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_estados_usuario
     */
    select?: tbl_estados_usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_estados_usuario
     */
    omit?: tbl_estados_usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_estados_usuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the tbl_estados_usuario to update in case it exists.
     */
    where: tbl_estados_usuarioWhereUniqueInput
    /**
     * In case the tbl_estados_usuario found by the `where` argument doesn't exist, create a new tbl_estados_usuario with this data.
     */
    create: XOR<tbl_estados_usuarioCreateInput, tbl_estados_usuarioUncheckedCreateInput>
    /**
     * In case the tbl_estados_usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tbl_estados_usuarioUpdateInput, tbl_estados_usuarioUncheckedUpdateInput>
  }

  /**
   * tbl_estados_usuario delete
   */
  export type tbl_estados_usuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_estados_usuario
     */
    select?: tbl_estados_usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_estados_usuario
     */
    omit?: tbl_estados_usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_estados_usuarioInclude<ExtArgs> | null
    /**
     * Filter which tbl_estados_usuario to delete.
     */
    where: tbl_estados_usuarioWhereUniqueInput
  }

  /**
   * tbl_estados_usuario deleteMany
   */
  export type tbl_estados_usuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_estados_usuarios to delete
     */
    where?: tbl_estados_usuarioWhereInput
    /**
     * Limit how many tbl_estados_usuarios to delete.
     */
    limit?: number
  }

  /**
   * tbl_estados_usuario.usuarios
   */
  export type tbl_estados_usuario$usuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_usuarios
     */
    select?: tbl_usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_usuarios
     */
    omit?: tbl_usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_usuariosInclude<ExtArgs> | null
    where?: tbl_usuariosWhereInput
    orderBy?: tbl_usuariosOrderByWithRelationInput | tbl_usuariosOrderByWithRelationInput[]
    cursor?: tbl_usuariosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tbl_usuariosScalarFieldEnum | Tbl_usuariosScalarFieldEnum[]
  }

  /**
   * tbl_estados_usuario without action
   */
  export type tbl_estados_usuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_estados_usuario
     */
    select?: tbl_estados_usuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_estados_usuario
     */
    omit?: tbl_estados_usuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_estados_usuarioInclude<ExtArgs> | null
  }


  /**
   * Model tbl_municipios
   */

  export type AggregateTbl_municipios = {
    _count: Tbl_municipiosCountAggregateOutputType | null
    _avg: Tbl_municipiosAvgAggregateOutputType | null
    _sum: Tbl_municipiosSumAggregateOutputType | null
    _min: Tbl_municipiosMinAggregateOutputType | null
    _max: Tbl_municipiosMaxAggregateOutputType | null
  }

  export type Tbl_municipiosAvgAggregateOutputType = {
    pkid: number | null
    fkid_tbl_departamentos: number | null
  }

  export type Tbl_municipiosSumAggregateOutputType = {
    pkid: bigint | null
    fkid_tbl_departamentos: bigint | null
  }

  export type Tbl_municipiosMinAggregateOutputType = {
    pkid: bigint | null
    nombre: string | null
    nomenclatura: string | null
    fkid_tbl_departamentos: bigint | null
  }

  export type Tbl_municipiosMaxAggregateOutputType = {
    pkid: bigint | null
    nombre: string | null
    nomenclatura: string | null
    fkid_tbl_departamentos: bigint | null
  }

  export type Tbl_municipiosCountAggregateOutputType = {
    pkid: number
    nombre: number
    nomenclatura: number
    fkid_tbl_departamentos: number
    _all: number
  }


  export type Tbl_municipiosAvgAggregateInputType = {
    pkid?: true
    fkid_tbl_departamentos?: true
  }

  export type Tbl_municipiosSumAggregateInputType = {
    pkid?: true
    fkid_tbl_departamentos?: true
  }

  export type Tbl_municipiosMinAggregateInputType = {
    pkid?: true
    nombre?: true
    nomenclatura?: true
    fkid_tbl_departamentos?: true
  }

  export type Tbl_municipiosMaxAggregateInputType = {
    pkid?: true
    nombre?: true
    nomenclatura?: true
    fkid_tbl_departamentos?: true
  }

  export type Tbl_municipiosCountAggregateInputType = {
    pkid?: true
    nombre?: true
    nomenclatura?: true
    fkid_tbl_departamentos?: true
    _all?: true
  }

  export type Tbl_municipiosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_municipios to aggregate.
     */
    where?: tbl_municipiosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_municipios to fetch.
     */
    orderBy?: tbl_municipiosOrderByWithRelationInput | tbl_municipiosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tbl_municipiosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_municipios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_municipios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tbl_municipios
    **/
    _count?: true | Tbl_municipiosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tbl_municipiosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tbl_municipiosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tbl_municipiosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tbl_municipiosMaxAggregateInputType
  }

  export type GetTbl_municipiosAggregateType<T extends Tbl_municipiosAggregateArgs> = {
        [P in keyof T & keyof AggregateTbl_municipios]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTbl_municipios[P]>
      : GetScalarType<T[P], AggregateTbl_municipios[P]>
  }




  export type tbl_municipiosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_municipiosWhereInput
    orderBy?: tbl_municipiosOrderByWithAggregationInput | tbl_municipiosOrderByWithAggregationInput[]
    by: Tbl_municipiosScalarFieldEnum[] | Tbl_municipiosScalarFieldEnum
    having?: tbl_municipiosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tbl_municipiosCountAggregateInputType | true
    _avg?: Tbl_municipiosAvgAggregateInputType
    _sum?: Tbl_municipiosSumAggregateInputType
    _min?: Tbl_municipiosMinAggregateInputType
    _max?: Tbl_municipiosMaxAggregateInputType
  }

  export type Tbl_municipiosGroupByOutputType = {
    pkid: bigint
    nombre: string
    nomenclatura: string
    fkid_tbl_departamentos: bigint | null
    _count: Tbl_municipiosCountAggregateOutputType | null
    _avg: Tbl_municipiosAvgAggregateOutputType | null
    _sum: Tbl_municipiosSumAggregateOutputType | null
    _min: Tbl_municipiosMinAggregateOutputType | null
    _max: Tbl_municipiosMaxAggregateOutputType | null
  }

  type GetTbl_municipiosGroupByPayload<T extends tbl_municipiosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tbl_municipiosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tbl_municipiosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tbl_municipiosGroupByOutputType[P]>
            : GetScalarType<T[P], Tbl_municipiosGroupByOutputType[P]>
        }
      >
    >


  export type tbl_municipiosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pkid?: boolean
    nombre?: boolean
    nomenclatura?: boolean
    fkid_tbl_departamentos?: boolean
    departamento?: boolean | tbl_municipios$departamentoArgs<ExtArgs>
    clientes?: boolean | tbl_municipios$clientesArgs<ExtArgs>
    _count?: boolean | Tbl_municipiosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tbl_municipios"]>

  export type tbl_municipiosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pkid?: boolean
    nombre?: boolean
    nomenclatura?: boolean
    fkid_tbl_departamentos?: boolean
    departamento?: boolean | tbl_municipios$departamentoArgs<ExtArgs>
  }, ExtArgs["result"]["tbl_municipios"]>

  export type tbl_municipiosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pkid?: boolean
    nombre?: boolean
    nomenclatura?: boolean
    fkid_tbl_departamentos?: boolean
    departamento?: boolean | tbl_municipios$departamentoArgs<ExtArgs>
  }, ExtArgs["result"]["tbl_municipios"]>

  export type tbl_municipiosSelectScalar = {
    pkid?: boolean
    nombre?: boolean
    nomenclatura?: boolean
    fkid_tbl_departamentos?: boolean
  }

  export type tbl_municipiosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"pkid" | "nombre" | "nomenclatura" | "fkid_tbl_departamentos", ExtArgs["result"]["tbl_municipios"]>
  export type tbl_municipiosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    departamento?: boolean | tbl_municipios$departamentoArgs<ExtArgs>
    clientes?: boolean | tbl_municipios$clientesArgs<ExtArgs>
    _count?: boolean | Tbl_municipiosCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type tbl_municipiosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    departamento?: boolean | tbl_municipios$departamentoArgs<ExtArgs>
  }
  export type tbl_municipiosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    departamento?: boolean | tbl_municipios$departamentoArgs<ExtArgs>
  }

  export type $tbl_municipiosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tbl_municipios"
    objects: {
      departamento: Prisma.$tbl_departamentosPayload<ExtArgs> | null
      clientes: Prisma.$tbl_clientesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      pkid: bigint
      nombre: string
      nomenclatura: string
      fkid_tbl_departamentos: bigint | null
    }, ExtArgs["result"]["tbl_municipios"]>
    composites: {}
  }

  type tbl_municipiosGetPayload<S extends boolean | null | undefined | tbl_municipiosDefaultArgs> = $Result.GetResult<Prisma.$tbl_municipiosPayload, S>

  type tbl_municipiosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tbl_municipiosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tbl_municipiosCountAggregateInputType | true
    }

  export interface tbl_municipiosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tbl_municipios'], meta: { name: 'tbl_municipios' } }
    /**
     * Find zero or one Tbl_municipios that matches the filter.
     * @param {tbl_municipiosFindUniqueArgs} args - Arguments to find a Tbl_municipios
     * @example
     * // Get one Tbl_municipios
     * const tbl_municipios = await prisma.tbl_municipios.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tbl_municipiosFindUniqueArgs>(args: SelectSubset<T, tbl_municipiosFindUniqueArgs<ExtArgs>>): Prisma__tbl_municipiosClient<$Result.GetResult<Prisma.$tbl_municipiosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tbl_municipios that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tbl_municipiosFindUniqueOrThrowArgs} args - Arguments to find a Tbl_municipios
     * @example
     * // Get one Tbl_municipios
     * const tbl_municipios = await prisma.tbl_municipios.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tbl_municipiosFindUniqueOrThrowArgs>(args: SelectSubset<T, tbl_municipiosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tbl_municipiosClient<$Result.GetResult<Prisma.$tbl_municipiosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_municipios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_municipiosFindFirstArgs} args - Arguments to find a Tbl_municipios
     * @example
     * // Get one Tbl_municipios
     * const tbl_municipios = await prisma.tbl_municipios.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tbl_municipiosFindFirstArgs>(args?: SelectSubset<T, tbl_municipiosFindFirstArgs<ExtArgs>>): Prisma__tbl_municipiosClient<$Result.GetResult<Prisma.$tbl_municipiosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_municipios that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_municipiosFindFirstOrThrowArgs} args - Arguments to find a Tbl_municipios
     * @example
     * // Get one Tbl_municipios
     * const tbl_municipios = await prisma.tbl_municipios.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tbl_municipiosFindFirstOrThrowArgs>(args?: SelectSubset<T, tbl_municipiosFindFirstOrThrowArgs<ExtArgs>>): Prisma__tbl_municipiosClient<$Result.GetResult<Prisma.$tbl_municipiosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tbl_municipios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_municipiosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tbl_municipios
     * const tbl_municipios = await prisma.tbl_municipios.findMany()
     * 
     * // Get first 10 Tbl_municipios
     * const tbl_municipios = await prisma.tbl_municipios.findMany({ take: 10 })
     * 
     * // Only select the `pkid`
     * const tbl_municipiosWithPkidOnly = await prisma.tbl_municipios.findMany({ select: { pkid: true } })
     * 
     */
    findMany<T extends tbl_municipiosFindManyArgs>(args?: SelectSubset<T, tbl_municipiosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_municipiosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tbl_municipios.
     * @param {tbl_municipiosCreateArgs} args - Arguments to create a Tbl_municipios.
     * @example
     * // Create one Tbl_municipios
     * const Tbl_municipios = await prisma.tbl_municipios.create({
     *   data: {
     *     // ... data to create a Tbl_municipios
     *   }
     * })
     * 
     */
    create<T extends tbl_municipiosCreateArgs>(args: SelectSubset<T, tbl_municipiosCreateArgs<ExtArgs>>): Prisma__tbl_municipiosClient<$Result.GetResult<Prisma.$tbl_municipiosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tbl_municipios.
     * @param {tbl_municipiosCreateManyArgs} args - Arguments to create many Tbl_municipios.
     * @example
     * // Create many Tbl_municipios
     * const tbl_municipios = await prisma.tbl_municipios.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tbl_municipiosCreateManyArgs>(args?: SelectSubset<T, tbl_municipiosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tbl_municipios and returns the data saved in the database.
     * @param {tbl_municipiosCreateManyAndReturnArgs} args - Arguments to create many Tbl_municipios.
     * @example
     * // Create many Tbl_municipios
     * const tbl_municipios = await prisma.tbl_municipios.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tbl_municipios and only return the `pkid`
     * const tbl_municipiosWithPkidOnly = await prisma.tbl_municipios.createManyAndReturn({
     *   select: { pkid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends tbl_municipiosCreateManyAndReturnArgs>(args?: SelectSubset<T, tbl_municipiosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_municipiosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tbl_municipios.
     * @param {tbl_municipiosDeleteArgs} args - Arguments to delete one Tbl_municipios.
     * @example
     * // Delete one Tbl_municipios
     * const Tbl_municipios = await prisma.tbl_municipios.delete({
     *   where: {
     *     // ... filter to delete one Tbl_municipios
     *   }
     * })
     * 
     */
    delete<T extends tbl_municipiosDeleteArgs>(args: SelectSubset<T, tbl_municipiosDeleteArgs<ExtArgs>>): Prisma__tbl_municipiosClient<$Result.GetResult<Prisma.$tbl_municipiosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tbl_municipios.
     * @param {tbl_municipiosUpdateArgs} args - Arguments to update one Tbl_municipios.
     * @example
     * // Update one Tbl_municipios
     * const tbl_municipios = await prisma.tbl_municipios.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tbl_municipiosUpdateArgs>(args: SelectSubset<T, tbl_municipiosUpdateArgs<ExtArgs>>): Prisma__tbl_municipiosClient<$Result.GetResult<Prisma.$tbl_municipiosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tbl_municipios.
     * @param {tbl_municipiosDeleteManyArgs} args - Arguments to filter Tbl_municipios to delete.
     * @example
     * // Delete a few Tbl_municipios
     * const { count } = await prisma.tbl_municipios.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tbl_municipiosDeleteManyArgs>(args?: SelectSubset<T, tbl_municipiosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tbl_municipios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_municipiosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tbl_municipios
     * const tbl_municipios = await prisma.tbl_municipios.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tbl_municipiosUpdateManyArgs>(args: SelectSubset<T, tbl_municipiosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tbl_municipios and returns the data updated in the database.
     * @param {tbl_municipiosUpdateManyAndReturnArgs} args - Arguments to update many Tbl_municipios.
     * @example
     * // Update many Tbl_municipios
     * const tbl_municipios = await prisma.tbl_municipios.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tbl_municipios and only return the `pkid`
     * const tbl_municipiosWithPkidOnly = await prisma.tbl_municipios.updateManyAndReturn({
     *   select: { pkid: true },
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
    updateManyAndReturn<T extends tbl_municipiosUpdateManyAndReturnArgs>(args: SelectSubset<T, tbl_municipiosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_municipiosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tbl_municipios.
     * @param {tbl_municipiosUpsertArgs} args - Arguments to update or create a Tbl_municipios.
     * @example
     * // Update or create a Tbl_municipios
     * const tbl_municipios = await prisma.tbl_municipios.upsert({
     *   create: {
     *     // ... data to create a Tbl_municipios
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tbl_municipios we want to update
     *   }
     * })
     */
    upsert<T extends tbl_municipiosUpsertArgs>(args: SelectSubset<T, tbl_municipiosUpsertArgs<ExtArgs>>): Prisma__tbl_municipiosClient<$Result.GetResult<Prisma.$tbl_municipiosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tbl_municipios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_municipiosCountArgs} args - Arguments to filter Tbl_municipios to count.
     * @example
     * // Count the number of Tbl_municipios
     * const count = await prisma.tbl_municipios.count({
     *   where: {
     *     // ... the filter for the Tbl_municipios we want to count
     *   }
     * })
    **/
    count<T extends tbl_municipiosCountArgs>(
      args?: Subset<T, tbl_municipiosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tbl_municipiosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tbl_municipios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tbl_municipiosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tbl_municipiosAggregateArgs>(args: Subset<T, Tbl_municipiosAggregateArgs>): Prisma.PrismaPromise<GetTbl_municipiosAggregateType<T>>

    /**
     * Group by Tbl_municipios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_municipiosGroupByArgs} args - Group by arguments.
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
      T extends tbl_municipiosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tbl_municipiosGroupByArgs['orderBy'] }
        : { orderBy?: tbl_municipiosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tbl_municipiosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTbl_municipiosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tbl_municipios model
   */
  readonly fields: tbl_municipiosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tbl_municipios.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tbl_municipiosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    departamento<T extends tbl_municipios$departamentoArgs<ExtArgs> = {}>(args?: Subset<T, tbl_municipios$departamentoArgs<ExtArgs>>): Prisma__tbl_departamentosClient<$Result.GetResult<Prisma.$tbl_departamentosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    clientes<T extends tbl_municipios$clientesArgs<ExtArgs> = {}>(args?: Subset<T, tbl_municipios$clientesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_clientesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the tbl_municipios model
   */
  interface tbl_municipiosFieldRefs {
    readonly pkid: FieldRef<"tbl_municipios", 'BigInt'>
    readonly nombre: FieldRef<"tbl_municipios", 'String'>
    readonly nomenclatura: FieldRef<"tbl_municipios", 'String'>
    readonly fkid_tbl_departamentos: FieldRef<"tbl_municipios", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * tbl_municipios findUnique
   */
  export type tbl_municipiosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_municipios
     */
    select?: tbl_municipiosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_municipios
     */
    omit?: tbl_municipiosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_municipiosInclude<ExtArgs> | null
    /**
     * Filter, which tbl_municipios to fetch.
     */
    where: tbl_municipiosWhereUniqueInput
  }

  /**
   * tbl_municipios findUniqueOrThrow
   */
  export type tbl_municipiosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_municipios
     */
    select?: tbl_municipiosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_municipios
     */
    omit?: tbl_municipiosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_municipiosInclude<ExtArgs> | null
    /**
     * Filter, which tbl_municipios to fetch.
     */
    where: tbl_municipiosWhereUniqueInput
  }

  /**
   * tbl_municipios findFirst
   */
  export type tbl_municipiosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_municipios
     */
    select?: tbl_municipiosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_municipios
     */
    omit?: tbl_municipiosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_municipiosInclude<ExtArgs> | null
    /**
     * Filter, which tbl_municipios to fetch.
     */
    where?: tbl_municipiosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_municipios to fetch.
     */
    orderBy?: tbl_municipiosOrderByWithRelationInput | tbl_municipiosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_municipios.
     */
    cursor?: tbl_municipiosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_municipios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_municipios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_municipios.
     */
    distinct?: Tbl_municipiosScalarFieldEnum | Tbl_municipiosScalarFieldEnum[]
  }

  /**
   * tbl_municipios findFirstOrThrow
   */
  export type tbl_municipiosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_municipios
     */
    select?: tbl_municipiosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_municipios
     */
    omit?: tbl_municipiosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_municipiosInclude<ExtArgs> | null
    /**
     * Filter, which tbl_municipios to fetch.
     */
    where?: tbl_municipiosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_municipios to fetch.
     */
    orderBy?: tbl_municipiosOrderByWithRelationInput | tbl_municipiosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_municipios.
     */
    cursor?: tbl_municipiosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_municipios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_municipios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_municipios.
     */
    distinct?: Tbl_municipiosScalarFieldEnum | Tbl_municipiosScalarFieldEnum[]
  }

  /**
   * tbl_municipios findMany
   */
  export type tbl_municipiosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_municipios
     */
    select?: tbl_municipiosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_municipios
     */
    omit?: tbl_municipiosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_municipiosInclude<ExtArgs> | null
    /**
     * Filter, which tbl_municipios to fetch.
     */
    where?: tbl_municipiosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_municipios to fetch.
     */
    orderBy?: tbl_municipiosOrderByWithRelationInput | tbl_municipiosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tbl_municipios.
     */
    cursor?: tbl_municipiosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_municipios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_municipios.
     */
    skip?: number
    distinct?: Tbl_municipiosScalarFieldEnum | Tbl_municipiosScalarFieldEnum[]
  }

  /**
   * tbl_municipios create
   */
  export type tbl_municipiosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_municipios
     */
    select?: tbl_municipiosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_municipios
     */
    omit?: tbl_municipiosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_municipiosInclude<ExtArgs> | null
    /**
     * The data needed to create a tbl_municipios.
     */
    data: XOR<tbl_municipiosCreateInput, tbl_municipiosUncheckedCreateInput>
  }

  /**
   * tbl_municipios createMany
   */
  export type tbl_municipiosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tbl_municipios.
     */
    data: tbl_municipiosCreateManyInput | tbl_municipiosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tbl_municipios createManyAndReturn
   */
  export type tbl_municipiosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_municipios
     */
    select?: tbl_municipiosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_municipios
     */
    omit?: tbl_municipiosOmit<ExtArgs> | null
    /**
     * The data used to create many tbl_municipios.
     */
    data: tbl_municipiosCreateManyInput | tbl_municipiosCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_municipiosIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * tbl_municipios update
   */
  export type tbl_municipiosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_municipios
     */
    select?: tbl_municipiosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_municipios
     */
    omit?: tbl_municipiosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_municipiosInclude<ExtArgs> | null
    /**
     * The data needed to update a tbl_municipios.
     */
    data: XOR<tbl_municipiosUpdateInput, tbl_municipiosUncheckedUpdateInput>
    /**
     * Choose, which tbl_municipios to update.
     */
    where: tbl_municipiosWhereUniqueInput
  }

  /**
   * tbl_municipios updateMany
   */
  export type tbl_municipiosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tbl_municipios.
     */
    data: XOR<tbl_municipiosUpdateManyMutationInput, tbl_municipiosUncheckedUpdateManyInput>
    /**
     * Filter which tbl_municipios to update
     */
    where?: tbl_municipiosWhereInput
    /**
     * Limit how many tbl_municipios to update.
     */
    limit?: number
  }

  /**
   * tbl_municipios updateManyAndReturn
   */
  export type tbl_municipiosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_municipios
     */
    select?: tbl_municipiosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_municipios
     */
    omit?: tbl_municipiosOmit<ExtArgs> | null
    /**
     * The data used to update tbl_municipios.
     */
    data: XOR<tbl_municipiosUpdateManyMutationInput, tbl_municipiosUncheckedUpdateManyInput>
    /**
     * Filter which tbl_municipios to update
     */
    where?: tbl_municipiosWhereInput
    /**
     * Limit how many tbl_municipios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_municipiosIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * tbl_municipios upsert
   */
  export type tbl_municipiosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_municipios
     */
    select?: tbl_municipiosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_municipios
     */
    omit?: tbl_municipiosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_municipiosInclude<ExtArgs> | null
    /**
     * The filter to search for the tbl_municipios to update in case it exists.
     */
    where: tbl_municipiosWhereUniqueInput
    /**
     * In case the tbl_municipios found by the `where` argument doesn't exist, create a new tbl_municipios with this data.
     */
    create: XOR<tbl_municipiosCreateInput, tbl_municipiosUncheckedCreateInput>
    /**
     * In case the tbl_municipios was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tbl_municipiosUpdateInput, tbl_municipiosUncheckedUpdateInput>
  }

  /**
   * tbl_municipios delete
   */
  export type tbl_municipiosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_municipios
     */
    select?: tbl_municipiosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_municipios
     */
    omit?: tbl_municipiosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_municipiosInclude<ExtArgs> | null
    /**
     * Filter which tbl_municipios to delete.
     */
    where: tbl_municipiosWhereUniqueInput
  }

  /**
   * tbl_municipios deleteMany
   */
  export type tbl_municipiosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_municipios to delete
     */
    where?: tbl_municipiosWhereInput
    /**
     * Limit how many tbl_municipios to delete.
     */
    limit?: number
  }

  /**
   * tbl_municipios.departamento
   */
  export type tbl_municipios$departamentoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_departamentos
     */
    select?: tbl_departamentosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_departamentos
     */
    omit?: tbl_departamentosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_departamentosInclude<ExtArgs> | null
    where?: tbl_departamentosWhereInput
  }

  /**
   * tbl_municipios.clientes
   */
  export type tbl_municipios$clientesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_clientes
     */
    select?: tbl_clientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_clientes
     */
    omit?: tbl_clientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_clientesInclude<ExtArgs> | null
    where?: tbl_clientesWhereInput
    orderBy?: tbl_clientesOrderByWithRelationInput | tbl_clientesOrderByWithRelationInput[]
    cursor?: tbl_clientesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tbl_clientesScalarFieldEnum | Tbl_clientesScalarFieldEnum[]
  }

  /**
   * tbl_municipios without action
   */
  export type tbl_municipiosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_municipios
     */
    select?: tbl_municipiosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_municipios
     */
    omit?: tbl_municipiosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_municipiosInclude<ExtArgs> | null
  }


  /**
   * Model tbl_pedidos
   */

  export type AggregateTbl_pedidos = {
    _count: Tbl_pedidosCountAggregateOutputType | null
    _avg: Tbl_pedidosAvgAggregateOutputType | null
    _sum: Tbl_pedidosSumAggregateOutputType | null
    _min: Tbl_pedidosMinAggregateOutputType | null
    _max: Tbl_pedidosMaxAggregateOutputType | null
  }

  export type Tbl_pedidosAvgAggregateOutputType = {
    pkid: number | null
    fkid_tbl_clientes: number | null
    fkid_tbl_det_productos: number | null
    fkid_tbl_transportadoras: number | null
    valor: number | null
  }

  export type Tbl_pedidosSumAggregateOutputType = {
    pkid: bigint | null
    fkid_tbl_clientes: bigint | null
    fkid_tbl_det_productos: bigint | null
    fkid_tbl_transportadoras: bigint | null
    valor: number | null
  }

  export type Tbl_pedidosMinAggregateOutputType = {
    pkid: bigint | null
    fkid_tbl_clientes: bigint | null
    fkid_tbl_det_productos: bigint | null
    fkid_tbl_transportadoras: bigint | null
    valor: number | null
    fecha: Date | null
  }

  export type Tbl_pedidosMaxAggregateOutputType = {
    pkid: bigint | null
    fkid_tbl_clientes: bigint | null
    fkid_tbl_det_productos: bigint | null
    fkid_tbl_transportadoras: bigint | null
    valor: number | null
    fecha: Date | null
  }

  export type Tbl_pedidosCountAggregateOutputType = {
    pkid: number
    fkid_tbl_clientes: number
    fkid_tbl_det_productos: number
    fkid_tbl_transportadoras: number
    valor: number
    fecha: number
    _all: number
  }


  export type Tbl_pedidosAvgAggregateInputType = {
    pkid?: true
    fkid_tbl_clientes?: true
    fkid_tbl_det_productos?: true
    fkid_tbl_transportadoras?: true
    valor?: true
  }

  export type Tbl_pedidosSumAggregateInputType = {
    pkid?: true
    fkid_tbl_clientes?: true
    fkid_tbl_det_productos?: true
    fkid_tbl_transportadoras?: true
    valor?: true
  }

  export type Tbl_pedidosMinAggregateInputType = {
    pkid?: true
    fkid_tbl_clientes?: true
    fkid_tbl_det_productos?: true
    fkid_tbl_transportadoras?: true
    valor?: true
    fecha?: true
  }

  export type Tbl_pedidosMaxAggregateInputType = {
    pkid?: true
    fkid_tbl_clientes?: true
    fkid_tbl_det_productos?: true
    fkid_tbl_transportadoras?: true
    valor?: true
    fecha?: true
  }

  export type Tbl_pedidosCountAggregateInputType = {
    pkid?: true
    fkid_tbl_clientes?: true
    fkid_tbl_det_productos?: true
    fkid_tbl_transportadoras?: true
    valor?: true
    fecha?: true
    _all?: true
  }

  export type Tbl_pedidosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_pedidos to aggregate.
     */
    where?: tbl_pedidosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_pedidos to fetch.
     */
    orderBy?: tbl_pedidosOrderByWithRelationInput | tbl_pedidosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tbl_pedidosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tbl_pedidos
    **/
    _count?: true | Tbl_pedidosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tbl_pedidosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tbl_pedidosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tbl_pedidosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tbl_pedidosMaxAggregateInputType
  }

  export type GetTbl_pedidosAggregateType<T extends Tbl_pedidosAggregateArgs> = {
        [P in keyof T & keyof AggregateTbl_pedidos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTbl_pedidos[P]>
      : GetScalarType<T[P], AggregateTbl_pedidos[P]>
  }




  export type tbl_pedidosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_pedidosWhereInput
    orderBy?: tbl_pedidosOrderByWithAggregationInput | tbl_pedidosOrderByWithAggregationInput[]
    by: Tbl_pedidosScalarFieldEnum[] | Tbl_pedidosScalarFieldEnum
    having?: tbl_pedidosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tbl_pedidosCountAggregateInputType | true
    _avg?: Tbl_pedidosAvgAggregateInputType
    _sum?: Tbl_pedidosSumAggregateInputType
    _min?: Tbl_pedidosMinAggregateInputType
    _max?: Tbl_pedidosMaxAggregateInputType
  }

  export type Tbl_pedidosGroupByOutputType = {
    pkid: bigint
    fkid_tbl_clientes: bigint | null
    fkid_tbl_det_productos: bigint | null
    fkid_tbl_transportadoras: bigint | null
    valor: number
    fecha: Date
    _count: Tbl_pedidosCountAggregateOutputType | null
    _avg: Tbl_pedidosAvgAggregateOutputType | null
    _sum: Tbl_pedidosSumAggregateOutputType | null
    _min: Tbl_pedidosMinAggregateOutputType | null
    _max: Tbl_pedidosMaxAggregateOutputType | null
  }

  type GetTbl_pedidosGroupByPayload<T extends tbl_pedidosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tbl_pedidosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tbl_pedidosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tbl_pedidosGroupByOutputType[P]>
            : GetScalarType<T[P], Tbl_pedidosGroupByOutputType[P]>
        }
      >
    >


  export type tbl_pedidosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pkid?: boolean
    fkid_tbl_clientes?: boolean
    fkid_tbl_det_productos?: boolean
    fkid_tbl_transportadoras?: boolean
    valor?: boolean
    fecha?: boolean
    clientes?: boolean | tbl_pedidos$clientesArgs<ExtArgs>
    det_productos?: boolean | tbl_pedidos$det_productosArgs<ExtArgs>
    transportadoras?: boolean | tbl_pedidos$transportadorasArgs<ExtArgs>
  }, ExtArgs["result"]["tbl_pedidos"]>

  export type tbl_pedidosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pkid?: boolean
    fkid_tbl_clientes?: boolean
    fkid_tbl_det_productos?: boolean
    fkid_tbl_transportadoras?: boolean
    valor?: boolean
    fecha?: boolean
    clientes?: boolean | tbl_pedidos$clientesArgs<ExtArgs>
    det_productos?: boolean | tbl_pedidos$det_productosArgs<ExtArgs>
    transportadoras?: boolean | tbl_pedidos$transportadorasArgs<ExtArgs>
  }, ExtArgs["result"]["tbl_pedidos"]>

  export type tbl_pedidosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pkid?: boolean
    fkid_tbl_clientes?: boolean
    fkid_tbl_det_productos?: boolean
    fkid_tbl_transportadoras?: boolean
    valor?: boolean
    fecha?: boolean
    clientes?: boolean | tbl_pedidos$clientesArgs<ExtArgs>
    det_productos?: boolean | tbl_pedidos$det_productosArgs<ExtArgs>
    transportadoras?: boolean | tbl_pedidos$transportadorasArgs<ExtArgs>
  }, ExtArgs["result"]["tbl_pedidos"]>

  export type tbl_pedidosSelectScalar = {
    pkid?: boolean
    fkid_tbl_clientes?: boolean
    fkid_tbl_det_productos?: boolean
    fkid_tbl_transportadoras?: boolean
    valor?: boolean
    fecha?: boolean
  }

  export type tbl_pedidosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"pkid" | "fkid_tbl_clientes" | "fkid_tbl_det_productos" | "fkid_tbl_transportadoras" | "valor" | "fecha", ExtArgs["result"]["tbl_pedidos"]>
  export type tbl_pedidosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clientes?: boolean | tbl_pedidos$clientesArgs<ExtArgs>
    det_productos?: boolean | tbl_pedidos$det_productosArgs<ExtArgs>
    transportadoras?: boolean | tbl_pedidos$transportadorasArgs<ExtArgs>
  }
  export type tbl_pedidosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clientes?: boolean | tbl_pedidos$clientesArgs<ExtArgs>
    det_productos?: boolean | tbl_pedidos$det_productosArgs<ExtArgs>
    transportadoras?: boolean | tbl_pedidos$transportadorasArgs<ExtArgs>
  }
  export type tbl_pedidosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clientes?: boolean | tbl_pedidos$clientesArgs<ExtArgs>
    det_productos?: boolean | tbl_pedidos$det_productosArgs<ExtArgs>
    transportadoras?: boolean | tbl_pedidos$transportadorasArgs<ExtArgs>
  }

  export type $tbl_pedidosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tbl_pedidos"
    objects: {
      clientes: Prisma.$tbl_clientesPayload<ExtArgs> | null
      det_productos: Prisma.$tbl_det_productosPayload<ExtArgs> | null
      transportadoras: Prisma.$tbl_transportadorasPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      pkid: bigint
      fkid_tbl_clientes: bigint | null
      fkid_tbl_det_productos: bigint | null
      fkid_tbl_transportadoras: bigint | null
      valor: number
      fecha: Date
    }, ExtArgs["result"]["tbl_pedidos"]>
    composites: {}
  }

  type tbl_pedidosGetPayload<S extends boolean | null | undefined | tbl_pedidosDefaultArgs> = $Result.GetResult<Prisma.$tbl_pedidosPayload, S>

  type tbl_pedidosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tbl_pedidosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tbl_pedidosCountAggregateInputType | true
    }

  export interface tbl_pedidosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tbl_pedidos'], meta: { name: 'tbl_pedidos' } }
    /**
     * Find zero or one Tbl_pedidos that matches the filter.
     * @param {tbl_pedidosFindUniqueArgs} args - Arguments to find a Tbl_pedidos
     * @example
     * // Get one Tbl_pedidos
     * const tbl_pedidos = await prisma.tbl_pedidos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tbl_pedidosFindUniqueArgs>(args: SelectSubset<T, tbl_pedidosFindUniqueArgs<ExtArgs>>): Prisma__tbl_pedidosClient<$Result.GetResult<Prisma.$tbl_pedidosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tbl_pedidos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tbl_pedidosFindUniqueOrThrowArgs} args - Arguments to find a Tbl_pedidos
     * @example
     * // Get one Tbl_pedidos
     * const tbl_pedidos = await prisma.tbl_pedidos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tbl_pedidosFindUniqueOrThrowArgs>(args: SelectSubset<T, tbl_pedidosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tbl_pedidosClient<$Result.GetResult<Prisma.$tbl_pedidosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_pedidos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_pedidosFindFirstArgs} args - Arguments to find a Tbl_pedidos
     * @example
     * // Get one Tbl_pedidos
     * const tbl_pedidos = await prisma.tbl_pedidos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tbl_pedidosFindFirstArgs>(args?: SelectSubset<T, tbl_pedidosFindFirstArgs<ExtArgs>>): Prisma__tbl_pedidosClient<$Result.GetResult<Prisma.$tbl_pedidosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_pedidos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_pedidosFindFirstOrThrowArgs} args - Arguments to find a Tbl_pedidos
     * @example
     * // Get one Tbl_pedidos
     * const tbl_pedidos = await prisma.tbl_pedidos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tbl_pedidosFindFirstOrThrowArgs>(args?: SelectSubset<T, tbl_pedidosFindFirstOrThrowArgs<ExtArgs>>): Prisma__tbl_pedidosClient<$Result.GetResult<Prisma.$tbl_pedidosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tbl_pedidos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_pedidosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tbl_pedidos
     * const tbl_pedidos = await prisma.tbl_pedidos.findMany()
     * 
     * // Get first 10 Tbl_pedidos
     * const tbl_pedidos = await prisma.tbl_pedidos.findMany({ take: 10 })
     * 
     * // Only select the `pkid`
     * const tbl_pedidosWithPkidOnly = await prisma.tbl_pedidos.findMany({ select: { pkid: true } })
     * 
     */
    findMany<T extends tbl_pedidosFindManyArgs>(args?: SelectSubset<T, tbl_pedidosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_pedidosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tbl_pedidos.
     * @param {tbl_pedidosCreateArgs} args - Arguments to create a Tbl_pedidos.
     * @example
     * // Create one Tbl_pedidos
     * const Tbl_pedidos = await prisma.tbl_pedidos.create({
     *   data: {
     *     // ... data to create a Tbl_pedidos
     *   }
     * })
     * 
     */
    create<T extends tbl_pedidosCreateArgs>(args: SelectSubset<T, tbl_pedidosCreateArgs<ExtArgs>>): Prisma__tbl_pedidosClient<$Result.GetResult<Prisma.$tbl_pedidosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tbl_pedidos.
     * @param {tbl_pedidosCreateManyArgs} args - Arguments to create many Tbl_pedidos.
     * @example
     * // Create many Tbl_pedidos
     * const tbl_pedidos = await prisma.tbl_pedidos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tbl_pedidosCreateManyArgs>(args?: SelectSubset<T, tbl_pedidosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tbl_pedidos and returns the data saved in the database.
     * @param {tbl_pedidosCreateManyAndReturnArgs} args - Arguments to create many Tbl_pedidos.
     * @example
     * // Create many Tbl_pedidos
     * const tbl_pedidos = await prisma.tbl_pedidos.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tbl_pedidos and only return the `pkid`
     * const tbl_pedidosWithPkidOnly = await prisma.tbl_pedidos.createManyAndReturn({
     *   select: { pkid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends tbl_pedidosCreateManyAndReturnArgs>(args?: SelectSubset<T, tbl_pedidosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_pedidosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tbl_pedidos.
     * @param {tbl_pedidosDeleteArgs} args - Arguments to delete one Tbl_pedidos.
     * @example
     * // Delete one Tbl_pedidos
     * const Tbl_pedidos = await prisma.tbl_pedidos.delete({
     *   where: {
     *     // ... filter to delete one Tbl_pedidos
     *   }
     * })
     * 
     */
    delete<T extends tbl_pedidosDeleteArgs>(args: SelectSubset<T, tbl_pedidosDeleteArgs<ExtArgs>>): Prisma__tbl_pedidosClient<$Result.GetResult<Prisma.$tbl_pedidosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tbl_pedidos.
     * @param {tbl_pedidosUpdateArgs} args - Arguments to update one Tbl_pedidos.
     * @example
     * // Update one Tbl_pedidos
     * const tbl_pedidos = await prisma.tbl_pedidos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tbl_pedidosUpdateArgs>(args: SelectSubset<T, tbl_pedidosUpdateArgs<ExtArgs>>): Prisma__tbl_pedidosClient<$Result.GetResult<Prisma.$tbl_pedidosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tbl_pedidos.
     * @param {tbl_pedidosDeleteManyArgs} args - Arguments to filter Tbl_pedidos to delete.
     * @example
     * // Delete a few Tbl_pedidos
     * const { count } = await prisma.tbl_pedidos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tbl_pedidosDeleteManyArgs>(args?: SelectSubset<T, tbl_pedidosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tbl_pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_pedidosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tbl_pedidos
     * const tbl_pedidos = await prisma.tbl_pedidos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tbl_pedidosUpdateManyArgs>(args: SelectSubset<T, tbl_pedidosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tbl_pedidos and returns the data updated in the database.
     * @param {tbl_pedidosUpdateManyAndReturnArgs} args - Arguments to update many Tbl_pedidos.
     * @example
     * // Update many Tbl_pedidos
     * const tbl_pedidos = await prisma.tbl_pedidos.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tbl_pedidos and only return the `pkid`
     * const tbl_pedidosWithPkidOnly = await prisma.tbl_pedidos.updateManyAndReturn({
     *   select: { pkid: true },
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
    updateManyAndReturn<T extends tbl_pedidosUpdateManyAndReturnArgs>(args: SelectSubset<T, tbl_pedidosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_pedidosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tbl_pedidos.
     * @param {tbl_pedidosUpsertArgs} args - Arguments to update or create a Tbl_pedidos.
     * @example
     * // Update or create a Tbl_pedidos
     * const tbl_pedidos = await prisma.tbl_pedidos.upsert({
     *   create: {
     *     // ... data to create a Tbl_pedidos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tbl_pedidos we want to update
     *   }
     * })
     */
    upsert<T extends tbl_pedidosUpsertArgs>(args: SelectSubset<T, tbl_pedidosUpsertArgs<ExtArgs>>): Prisma__tbl_pedidosClient<$Result.GetResult<Prisma.$tbl_pedidosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tbl_pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_pedidosCountArgs} args - Arguments to filter Tbl_pedidos to count.
     * @example
     * // Count the number of Tbl_pedidos
     * const count = await prisma.tbl_pedidos.count({
     *   where: {
     *     // ... the filter for the Tbl_pedidos we want to count
     *   }
     * })
    **/
    count<T extends tbl_pedidosCountArgs>(
      args?: Subset<T, tbl_pedidosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tbl_pedidosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tbl_pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tbl_pedidosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tbl_pedidosAggregateArgs>(args: Subset<T, Tbl_pedidosAggregateArgs>): Prisma.PrismaPromise<GetTbl_pedidosAggregateType<T>>

    /**
     * Group by Tbl_pedidos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_pedidosGroupByArgs} args - Group by arguments.
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
      T extends tbl_pedidosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tbl_pedidosGroupByArgs['orderBy'] }
        : { orderBy?: tbl_pedidosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tbl_pedidosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTbl_pedidosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tbl_pedidos model
   */
  readonly fields: tbl_pedidosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tbl_pedidos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tbl_pedidosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    clientes<T extends tbl_pedidos$clientesArgs<ExtArgs> = {}>(args?: Subset<T, tbl_pedidos$clientesArgs<ExtArgs>>): Prisma__tbl_clientesClient<$Result.GetResult<Prisma.$tbl_clientesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    det_productos<T extends tbl_pedidos$det_productosArgs<ExtArgs> = {}>(args?: Subset<T, tbl_pedidos$det_productosArgs<ExtArgs>>): Prisma__tbl_det_productosClient<$Result.GetResult<Prisma.$tbl_det_productosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    transportadoras<T extends tbl_pedidos$transportadorasArgs<ExtArgs> = {}>(args?: Subset<T, tbl_pedidos$transportadorasArgs<ExtArgs>>): Prisma__tbl_transportadorasClient<$Result.GetResult<Prisma.$tbl_transportadorasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the tbl_pedidos model
   */
  interface tbl_pedidosFieldRefs {
    readonly pkid: FieldRef<"tbl_pedidos", 'BigInt'>
    readonly fkid_tbl_clientes: FieldRef<"tbl_pedidos", 'BigInt'>
    readonly fkid_tbl_det_productos: FieldRef<"tbl_pedidos", 'BigInt'>
    readonly fkid_tbl_transportadoras: FieldRef<"tbl_pedidos", 'BigInt'>
    readonly valor: FieldRef<"tbl_pedidos", 'Float'>
    readonly fecha: FieldRef<"tbl_pedidos", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * tbl_pedidos findUnique
   */
  export type tbl_pedidosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_pedidos
     */
    select?: tbl_pedidosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_pedidos
     */
    omit?: tbl_pedidosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_pedidosInclude<ExtArgs> | null
    /**
     * Filter, which tbl_pedidos to fetch.
     */
    where: tbl_pedidosWhereUniqueInput
  }

  /**
   * tbl_pedidos findUniqueOrThrow
   */
  export type tbl_pedidosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_pedidos
     */
    select?: tbl_pedidosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_pedidos
     */
    omit?: tbl_pedidosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_pedidosInclude<ExtArgs> | null
    /**
     * Filter, which tbl_pedidos to fetch.
     */
    where: tbl_pedidosWhereUniqueInput
  }

  /**
   * tbl_pedidos findFirst
   */
  export type tbl_pedidosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_pedidos
     */
    select?: tbl_pedidosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_pedidos
     */
    omit?: tbl_pedidosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_pedidosInclude<ExtArgs> | null
    /**
     * Filter, which tbl_pedidos to fetch.
     */
    where?: tbl_pedidosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_pedidos to fetch.
     */
    orderBy?: tbl_pedidosOrderByWithRelationInput | tbl_pedidosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_pedidos.
     */
    cursor?: tbl_pedidosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_pedidos.
     */
    distinct?: Tbl_pedidosScalarFieldEnum | Tbl_pedidosScalarFieldEnum[]
  }

  /**
   * tbl_pedidos findFirstOrThrow
   */
  export type tbl_pedidosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_pedidos
     */
    select?: tbl_pedidosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_pedidos
     */
    omit?: tbl_pedidosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_pedidosInclude<ExtArgs> | null
    /**
     * Filter, which tbl_pedidos to fetch.
     */
    where?: tbl_pedidosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_pedidos to fetch.
     */
    orderBy?: tbl_pedidosOrderByWithRelationInput | tbl_pedidosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_pedidos.
     */
    cursor?: tbl_pedidosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_pedidos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_pedidos.
     */
    distinct?: Tbl_pedidosScalarFieldEnum | Tbl_pedidosScalarFieldEnum[]
  }

  /**
   * tbl_pedidos findMany
   */
  export type tbl_pedidosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_pedidos
     */
    select?: tbl_pedidosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_pedidos
     */
    omit?: tbl_pedidosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_pedidosInclude<ExtArgs> | null
    /**
     * Filter, which tbl_pedidos to fetch.
     */
    where?: tbl_pedidosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_pedidos to fetch.
     */
    orderBy?: tbl_pedidosOrderByWithRelationInput | tbl_pedidosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tbl_pedidos.
     */
    cursor?: tbl_pedidosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_pedidos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_pedidos.
     */
    skip?: number
    distinct?: Tbl_pedidosScalarFieldEnum | Tbl_pedidosScalarFieldEnum[]
  }

  /**
   * tbl_pedidos create
   */
  export type tbl_pedidosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_pedidos
     */
    select?: tbl_pedidosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_pedidos
     */
    omit?: tbl_pedidosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_pedidosInclude<ExtArgs> | null
    /**
     * The data needed to create a tbl_pedidos.
     */
    data: XOR<tbl_pedidosCreateInput, tbl_pedidosUncheckedCreateInput>
  }

  /**
   * tbl_pedidos createMany
   */
  export type tbl_pedidosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tbl_pedidos.
     */
    data: tbl_pedidosCreateManyInput | tbl_pedidosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tbl_pedidos createManyAndReturn
   */
  export type tbl_pedidosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_pedidos
     */
    select?: tbl_pedidosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_pedidos
     */
    omit?: tbl_pedidosOmit<ExtArgs> | null
    /**
     * The data used to create many tbl_pedidos.
     */
    data: tbl_pedidosCreateManyInput | tbl_pedidosCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_pedidosIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * tbl_pedidos update
   */
  export type tbl_pedidosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_pedidos
     */
    select?: tbl_pedidosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_pedidos
     */
    omit?: tbl_pedidosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_pedidosInclude<ExtArgs> | null
    /**
     * The data needed to update a tbl_pedidos.
     */
    data: XOR<tbl_pedidosUpdateInput, tbl_pedidosUncheckedUpdateInput>
    /**
     * Choose, which tbl_pedidos to update.
     */
    where: tbl_pedidosWhereUniqueInput
  }

  /**
   * tbl_pedidos updateMany
   */
  export type tbl_pedidosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tbl_pedidos.
     */
    data: XOR<tbl_pedidosUpdateManyMutationInput, tbl_pedidosUncheckedUpdateManyInput>
    /**
     * Filter which tbl_pedidos to update
     */
    where?: tbl_pedidosWhereInput
    /**
     * Limit how many tbl_pedidos to update.
     */
    limit?: number
  }

  /**
   * tbl_pedidos updateManyAndReturn
   */
  export type tbl_pedidosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_pedidos
     */
    select?: tbl_pedidosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_pedidos
     */
    omit?: tbl_pedidosOmit<ExtArgs> | null
    /**
     * The data used to update tbl_pedidos.
     */
    data: XOR<tbl_pedidosUpdateManyMutationInput, tbl_pedidosUncheckedUpdateManyInput>
    /**
     * Filter which tbl_pedidos to update
     */
    where?: tbl_pedidosWhereInput
    /**
     * Limit how many tbl_pedidos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_pedidosIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * tbl_pedidos upsert
   */
  export type tbl_pedidosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_pedidos
     */
    select?: tbl_pedidosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_pedidos
     */
    omit?: tbl_pedidosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_pedidosInclude<ExtArgs> | null
    /**
     * The filter to search for the tbl_pedidos to update in case it exists.
     */
    where: tbl_pedidosWhereUniqueInput
    /**
     * In case the tbl_pedidos found by the `where` argument doesn't exist, create a new tbl_pedidos with this data.
     */
    create: XOR<tbl_pedidosCreateInput, tbl_pedidosUncheckedCreateInput>
    /**
     * In case the tbl_pedidos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tbl_pedidosUpdateInput, tbl_pedidosUncheckedUpdateInput>
  }

  /**
   * tbl_pedidos delete
   */
  export type tbl_pedidosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_pedidos
     */
    select?: tbl_pedidosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_pedidos
     */
    omit?: tbl_pedidosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_pedidosInclude<ExtArgs> | null
    /**
     * Filter which tbl_pedidos to delete.
     */
    where: tbl_pedidosWhereUniqueInput
  }

  /**
   * tbl_pedidos deleteMany
   */
  export type tbl_pedidosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_pedidos to delete
     */
    where?: tbl_pedidosWhereInput
    /**
     * Limit how many tbl_pedidos to delete.
     */
    limit?: number
  }

  /**
   * tbl_pedidos.clientes
   */
  export type tbl_pedidos$clientesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_clientes
     */
    select?: tbl_clientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_clientes
     */
    omit?: tbl_clientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_clientesInclude<ExtArgs> | null
    where?: tbl_clientesWhereInput
  }

  /**
   * tbl_pedidos.det_productos
   */
  export type tbl_pedidos$det_productosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_det_productos
     */
    select?: tbl_det_productosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_det_productos
     */
    omit?: tbl_det_productosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_det_productosInclude<ExtArgs> | null
    where?: tbl_det_productosWhereInput
  }

  /**
   * tbl_pedidos.transportadoras
   */
  export type tbl_pedidos$transportadorasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_transportadoras
     */
    select?: tbl_transportadorasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_transportadoras
     */
    omit?: tbl_transportadorasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_transportadorasInclude<ExtArgs> | null
    where?: tbl_transportadorasWhereInput
  }

  /**
   * tbl_pedidos without action
   */
  export type tbl_pedidosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_pedidos
     */
    select?: tbl_pedidosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_pedidos
     */
    omit?: tbl_pedidosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_pedidosInclude<ExtArgs> | null
  }


  /**
   * Model tbl_personas
   */

  export type AggregateTbl_personas = {
    _count: Tbl_personasCountAggregateOutputType | null
    _avg: Tbl_personasAvgAggregateOutputType | null
    _sum: Tbl_personasSumAggregateOutputType | null
    _min: Tbl_personasMinAggregateOutputType | null
    _max: Tbl_personasMaxAggregateOutputType | null
  }

  export type Tbl_personasAvgAggregateOutputType = {
    pkid: number | null
  }

  export type Tbl_personasSumAggregateOutputType = {
    pkid: bigint | null
  }

  export type Tbl_personasMinAggregateOutputType = {
    pkid: bigint | null
    nombres: string | null
    apellidos: string | null
    correo: string | null
  }

  export type Tbl_personasMaxAggregateOutputType = {
    pkid: bigint | null
    nombres: string | null
    apellidos: string | null
    correo: string | null
  }

  export type Tbl_personasCountAggregateOutputType = {
    pkid: number
    nombres: number
    apellidos: number
    correo: number
    _all: number
  }


  export type Tbl_personasAvgAggregateInputType = {
    pkid?: true
  }

  export type Tbl_personasSumAggregateInputType = {
    pkid?: true
  }

  export type Tbl_personasMinAggregateInputType = {
    pkid?: true
    nombres?: true
    apellidos?: true
    correo?: true
  }

  export type Tbl_personasMaxAggregateInputType = {
    pkid?: true
    nombres?: true
    apellidos?: true
    correo?: true
  }

  export type Tbl_personasCountAggregateInputType = {
    pkid?: true
    nombres?: true
    apellidos?: true
    correo?: true
    _all?: true
  }

  export type Tbl_personasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_personas to aggregate.
     */
    where?: tbl_personasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_personas to fetch.
     */
    orderBy?: tbl_personasOrderByWithRelationInput | tbl_personasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tbl_personasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_personas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_personas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tbl_personas
    **/
    _count?: true | Tbl_personasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tbl_personasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tbl_personasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tbl_personasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tbl_personasMaxAggregateInputType
  }

  export type GetTbl_personasAggregateType<T extends Tbl_personasAggregateArgs> = {
        [P in keyof T & keyof AggregateTbl_personas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTbl_personas[P]>
      : GetScalarType<T[P], AggregateTbl_personas[P]>
  }




  export type tbl_personasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_personasWhereInput
    orderBy?: tbl_personasOrderByWithAggregationInput | tbl_personasOrderByWithAggregationInput[]
    by: Tbl_personasScalarFieldEnum[] | Tbl_personasScalarFieldEnum
    having?: tbl_personasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tbl_personasCountAggregateInputType | true
    _avg?: Tbl_personasAvgAggregateInputType
    _sum?: Tbl_personasSumAggregateInputType
    _min?: Tbl_personasMinAggregateInputType
    _max?: Tbl_personasMaxAggregateInputType
  }

  export type Tbl_personasGroupByOutputType = {
    pkid: bigint
    nombres: string
    apellidos: string
    correo: string
    _count: Tbl_personasCountAggregateOutputType | null
    _avg: Tbl_personasAvgAggregateOutputType | null
    _sum: Tbl_personasSumAggregateOutputType | null
    _min: Tbl_personasMinAggregateOutputType | null
    _max: Tbl_personasMaxAggregateOutputType | null
  }

  type GetTbl_personasGroupByPayload<T extends tbl_personasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tbl_personasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tbl_personasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tbl_personasGroupByOutputType[P]>
            : GetScalarType<T[P], Tbl_personasGroupByOutputType[P]>
        }
      >
    >


  export type tbl_personasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pkid?: boolean
    nombres?: boolean
    apellidos?: boolean
    correo?: boolean
    usuarios?: boolean | tbl_personas$usuariosArgs<ExtArgs>
    _count?: boolean | Tbl_personasCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tbl_personas"]>

  export type tbl_personasSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pkid?: boolean
    nombres?: boolean
    apellidos?: boolean
    correo?: boolean
  }, ExtArgs["result"]["tbl_personas"]>

  export type tbl_personasSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pkid?: boolean
    nombres?: boolean
    apellidos?: boolean
    correo?: boolean
  }, ExtArgs["result"]["tbl_personas"]>

  export type tbl_personasSelectScalar = {
    pkid?: boolean
    nombres?: boolean
    apellidos?: boolean
    correo?: boolean
  }

  export type tbl_personasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"pkid" | "nombres" | "apellidos" | "correo", ExtArgs["result"]["tbl_personas"]>
  export type tbl_personasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | tbl_personas$usuariosArgs<ExtArgs>
    _count?: boolean | Tbl_personasCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type tbl_personasIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type tbl_personasIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $tbl_personasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tbl_personas"
    objects: {
      usuarios: Prisma.$tbl_usuariosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      pkid: bigint
      nombres: string
      apellidos: string
      correo: string
    }, ExtArgs["result"]["tbl_personas"]>
    composites: {}
  }

  type tbl_personasGetPayload<S extends boolean | null | undefined | tbl_personasDefaultArgs> = $Result.GetResult<Prisma.$tbl_personasPayload, S>

  type tbl_personasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tbl_personasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tbl_personasCountAggregateInputType | true
    }

  export interface tbl_personasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tbl_personas'], meta: { name: 'tbl_personas' } }
    /**
     * Find zero or one Tbl_personas that matches the filter.
     * @param {tbl_personasFindUniqueArgs} args - Arguments to find a Tbl_personas
     * @example
     * // Get one Tbl_personas
     * const tbl_personas = await prisma.tbl_personas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tbl_personasFindUniqueArgs>(args: SelectSubset<T, tbl_personasFindUniqueArgs<ExtArgs>>): Prisma__tbl_personasClient<$Result.GetResult<Prisma.$tbl_personasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tbl_personas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tbl_personasFindUniqueOrThrowArgs} args - Arguments to find a Tbl_personas
     * @example
     * // Get one Tbl_personas
     * const tbl_personas = await prisma.tbl_personas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tbl_personasFindUniqueOrThrowArgs>(args: SelectSubset<T, tbl_personasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tbl_personasClient<$Result.GetResult<Prisma.$tbl_personasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_personas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_personasFindFirstArgs} args - Arguments to find a Tbl_personas
     * @example
     * // Get one Tbl_personas
     * const tbl_personas = await prisma.tbl_personas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tbl_personasFindFirstArgs>(args?: SelectSubset<T, tbl_personasFindFirstArgs<ExtArgs>>): Prisma__tbl_personasClient<$Result.GetResult<Prisma.$tbl_personasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_personas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_personasFindFirstOrThrowArgs} args - Arguments to find a Tbl_personas
     * @example
     * // Get one Tbl_personas
     * const tbl_personas = await prisma.tbl_personas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tbl_personasFindFirstOrThrowArgs>(args?: SelectSubset<T, tbl_personasFindFirstOrThrowArgs<ExtArgs>>): Prisma__tbl_personasClient<$Result.GetResult<Prisma.$tbl_personasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tbl_personas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_personasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tbl_personas
     * const tbl_personas = await prisma.tbl_personas.findMany()
     * 
     * // Get first 10 Tbl_personas
     * const tbl_personas = await prisma.tbl_personas.findMany({ take: 10 })
     * 
     * // Only select the `pkid`
     * const tbl_personasWithPkidOnly = await prisma.tbl_personas.findMany({ select: { pkid: true } })
     * 
     */
    findMany<T extends tbl_personasFindManyArgs>(args?: SelectSubset<T, tbl_personasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_personasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tbl_personas.
     * @param {tbl_personasCreateArgs} args - Arguments to create a Tbl_personas.
     * @example
     * // Create one Tbl_personas
     * const Tbl_personas = await prisma.tbl_personas.create({
     *   data: {
     *     // ... data to create a Tbl_personas
     *   }
     * })
     * 
     */
    create<T extends tbl_personasCreateArgs>(args: SelectSubset<T, tbl_personasCreateArgs<ExtArgs>>): Prisma__tbl_personasClient<$Result.GetResult<Prisma.$tbl_personasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tbl_personas.
     * @param {tbl_personasCreateManyArgs} args - Arguments to create many Tbl_personas.
     * @example
     * // Create many Tbl_personas
     * const tbl_personas = await prisma.tbl_personas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tbl_personasCreateManyArgs>(args?: SelectSubset<T, tbl_personasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tbl_personas and returns the data saved in the database.
     * @param {tbl_personasCreateManyAndReturnArgs} args - Arguments to create many Tbl_personas.
     * @example
     * // Create many Tbl_personas
     * const tbl_personas = await prisma.tbl_personas.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tbl_personas and only return the `pkid`
     * const tbl_personasWithPkidOnly = await prisma.tbl_personas.createManyAndReturn({
     *   select: { pkid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends tbl_personasCreateManyAndReturnArgs>(args?: SelectSubset<T, tbl_personasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_personasPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tbl_personas.
     * @param {tbl_personasDeleteArgs} args - Arguments to delete one Tbl_personas.
     * @example
     * // Delete one Tbl_personas
     * const Tbl_personas = await prisma.tbl_personas.delete({
     *   where: {
     *     // ... filter to delete one Tbl_personas
     *   }
     * })
     * 
     */
    delete<T extends tbl_personasDeleteArgs>(args: SelectSubset<T, tbl_personasDeleteArgs<ExtArgs>>): Prisma__tbl_personasClient<$Result.GetResult<Prisma.$tbl_personasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tbl_personas.
     * @param {tbl_personasUpdateArgs} args - Arguments to update one Tbl_personas.
     * @example
     * // Update one Tbl_personas
     * const tbl_personas = await prisma.tbl_personas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tbl_personasUpdateArgs>(args: SelectSubset<T, tbl_personasUpdateArgs<ExtArgs>>): Prisma__tbl_personasClient<$Result.GetResult<Prisma.$tbl_personasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tbl_personas.
     * @param {tbl_personasDeleteManyArgs} args - Arguments to filter Tbl_personas to delete.
     * @example
     * // Delete a few Tbl_personas
     * const { count } = await prisma.tbl_personas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tbl_personasDeleteManyArgs>(args?: SelectSubset<T, tbl_personasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tbl_personas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_personasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tbl_personas
     * const tbl_personas = await prisma.tbl_personas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tbl_personasUpdateManyArgs>(args: SelectSubset<T, tbl_personasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tbl_personas and returns the data updated in the database.
     * @param {tbl_personasUpdateManyAndReturnArgs} args - Arguments to update many Tbl_personas.
     * @example
     * // Update many Tbl_personas
     * const tbl_personas = await prisma.tbl_personas.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tbl_personas and only return the `pkid`
     * const tbl_personasWithPkidOnly = await prisma.tbl_personas.updateManyAndReturn({
     *   select: { pkid: true },
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
    updateManyAndReturn<T extends tbl_personasUpdateManyAndReturnArgs>(args: SelectSubset<T, tbl_personasUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_personasPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tbl_personas.
     * @param {tbl_personasUpsertArgs} args - Arguments to update or create a Tbl_personas.
     * @example
     * // Update or create a Tbl_personas
     * const tbl_personas = await prisma.tbl_personas.upsert({
     *   create: {
     *     // ... data to create a Tbl_personas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tbl_personas we want to update
     *   }
     * })
     */
    upsert<T extends tbl_personasUpsertArgs>(args: SelectSubset<T, tbl_personasUpsertArgs<ExtArgs>>): Prisma__tbl_personasClient<$Result.GetResult<Prisma.$tbl_personasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tbl_personas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_personasCountArgs} args - Arguments to filter Tbl_personas to count.
     * @example
     * // Count the number of Tbl_personas
     * const count = await prisma.tbl_personas.count({
     *   where: {
     *     // ... the filter for the Tbl_personas we want to count
     *   }
     * })
    **/
    count<T extends tbl_personasCountArgs>(
      args?: Subset<T, tbl_personasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tbl_personasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tbl_personas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tbl_personasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tbl_personasAggregateArgs>(args: Subset<T, Tbl_personasAggregateArgs>): Prisma.PrismaPromise<GetTbl_personasAggregateType<T>>

    /**
     * Group by Tbl_personas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_personasGroupByArgs} args - Group by arguments.
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
      T extends tbl_personasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tbl_personasGroupByArgs['orderBy'] }
        : { orderBy?: tbl_personasGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tbl_personasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTbl_personasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tbl_personas model
   */
  readonly fields: tbl_personasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tbl_personas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tbl_personasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuarios<T extends tbl_personas$usuariosArgs<ExtArgs> = {}>(args?: Subset<T, tbl_personas$usuariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_usuariosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the tbl_personas model
   */
  interface tbl_personasFieldRefs {
    readonly pkid: FieldRef<"tbl_personas", 'BigInt'>
    readonly nombres: FieldRef<"tbl_personas", 'String'>
    readonly apellidos: FieldRef<"tbl_personas", 'String'>
    readonly correo: FieldRef<"tbl_personas", 'String'>
  }
    

  // Custom InputTypes
  /**
   * tbl_personas findUnique
   */
  export type tbl_personasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_personas
     */
    select?: tbl_personasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_personas
     */
    omit?: tbl_personasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_personasInclude<ExtArgs> | null
    /**
     * Filter, which tbl_personas to fetch.
     */
    where: tbl_personasWhereUniqueInput
  }

  /**
   * tbl_personas findUniqueOrThrow
   */
  export type tbl_personasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_personas
     */
    select?: tbl_personasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_personas
     */
    omit?: tbl_personasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_personasInclude<ExtArgs> | null
    /**
     * Filter, which tbl_personas to fetch.
     */
    where: tbl_personasWhereUniqueInput
  }

  /**
   * tbl_personas findFirst
   */
  export type tbl_personasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_personas
     */
    select?: tbl_personasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_personas
     */
    omit?: tbl_personasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_personasInclude<ExtArgs> | null
    /**
     * Filter, which tbl_personas to fetch.
     */
    where?: tbl_personasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_personas to fetch.
     */
    orderBy?: tbl_personasOrderByWithRelationInput | tbl_personasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_personas.
     */
    cursor?: tbl_personasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_personas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_personas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_personas.
     */
    distinct?: Tbl_personasScalarFieldEnum | Tbl_personasScalarFieldEnum[]
  }

  /**
   * tbl_personas findFirstOrThrow
   */
  export type tbl_personasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_personas
     */
    select?: tbl_personasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_personas
     */
    omit?: tbl_personasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_personasInclude<ExtArgs> | null
    /**
     * Filter, which tbl_personas to fetch.
     */
    where?: tbl_personasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_personas to fetch.
     */
    orderBy?: tbl_personasOrderByWithRelationInput | tbl_personasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_personas.
     */
    cursor?: tbl_personasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_personas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_personas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_personas.
     */
    distinct?: Tbl_personasScalarFieldEnum | Tbl_personasScalarFieldEnum[]
  }

  /**
   * tbl_personas findMany
   */
  export type tbl_personasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_personas
     */
    select?: tbl_personasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_personas
     */
    omit?: tbl_personasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_personasInclude<ExtArgs> | null
    /**
     * Filter, which tbl_personas to fetch.
     */
    where?: tbl_personasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_personas to fetch.
     */
    orderBy?: tbl_personasOrderByWithRelationInput | tbl_personasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tbl_personas.
     */
    cursor?: tbl_personasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_personas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_personas.
     */
    skip?: number
    distinct?: Tbl_personasScalarFieldEnum | Tbl_personasScalarFieldEnum[]
  }

  /**
   * tbl_personas create
   */
  export type tbl_personasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_personas
     */
    select?: tbl_personasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_personas
     */
    omit?: tbl_personasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_personasInclude<ExtArgs> | null
    /**
     * The data needed to create a tbl_personas.
     */
    data: XOR<tbl_personasCreateInput, tbl_personasUncheckedCreateInput>
  }

  /**
   * tbl_personas createMany
   */
  export type tbl_personasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tbl_personas.
     */
    data: tbl_personasCreateManyInput | tbl_personasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tbl_personas createManyAndReturn
   */
  export type tbl_personasCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_personas
     */
    select?: tbl_personasSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_personas
     */
    omit?: tbl_personasOmit<ExtArgs> | null
    /**
     * The data used to create many tbl_personas.
     */
    data: tbl_personasCreateManyInput | tbl_personasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tbl_personas update
   */
  export type tbl_personasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_personas
     */
    select?: tbl_personasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_personas
     */
    omit?: tbl_personasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_personasInclude<ExtArgs> | null
    /**
     * The data needed to update a tbl_personas.
     */
    data: XOR<tbl_personasUpdateInput, tbl_personasUncheckedUpdateInput>
    /**
     * Choose, which tbl_personas to update.
     */
    where: tbl_personasWhereUniqueInput
  }

  /**
   * tbl_personas updateMany
   */
  export type tbl_personasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tbl_personas.
     */
    data: XOR<tbl_personasUpdateManyMutationInput, tbl_personasUncheckedUpdateManyInput>
    /**
     * Filter which tbl_personas to update
     */
    where?: tbl_personasWhereInput
    /**
     * Limit how many tbl_personas to update.
     */
    limit?: number
  }

  /**
   * tbl_personas updateManyAndReturn
   */
  export type tbl_personasUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_personas
     */
    select?: tbl_personasSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_personas
     */
    omit?: tbl_personasOmit<ExtArgs> | null
    /**
     * The data used to update tbl_personas.
     */
    data: XOR<tbl_personasUpdateManyMutationInput, tbl_personasUncheckedUpdateManyInput>
    /**
     * Filter which tbl_personas to update
     */
    where?: tbl_personasWhereInput
    /**
     * Limit how many tbl_personas to update.
     */
    limit?: number
  }

  /**
   * tbl_personas upsert
   */
  export type tbl_personasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_personas
     */
    select?: tbl_personasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_personas
     */
    omit?: tbl_personasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_personasInclude<ExtArgs> | null
    /**
     * The filter to search for the tbl_personas to update in case it exists.
     */
    where: tbl_personasWhereUniqueInput
    /**
     * In case the tbl_personas found by the `where` argument doesn't exist, create a new tbl_personas with this data.
     */
    create: XOR<tbl_personasCreateInput, tbl_personasUncheckedCreateInput>
    /**
     * In case the tbl_personas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tbl_personasUpdateInput, tbl_personasUncheckedUpdateInput>
  }

  /**
   * tbl_personas delete
   */
  export type tbl_personasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_personas
     */
    select?: tbl_personasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_personas
     */
    omit?: tbl_personasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_personasInclude<ExtArgs> | null
    /**
     * Filter which tbl_personas to delete.
     */
    where: tbl_personasWhereUniqueInput
  }

  /**
   * tbl_personas deleteMany
   */
  export type tbl_personasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_personas to delete
     */
    where?: tbl_personasWhereInput
    /**
     * Limit how many tbl_personas to delete.
     */
    limit?: number
  }

  /**
   * tbl_personas.usuarios
   */
  export type tbl_personas$usuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_usuarios
     */
    select?: tbl_usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_usuarios
     */
    omit?: tbl_usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_usuariosInclude<ExtArgs> | null
    where?: tbl_usuariosWhereInput
    orderBy?: tbl_usuariosOrderByWithRelationInput | tbl_usuariosOrderByWithRelationInput[]
    cursor?: tbl_usuariosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tbl_usuariosScalarFieldEnum | Tbl_usuariosScalarFieldEnum[]
  }

  /**
   * tbl_personas without action
   */
  export type tbl_personasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_personas
     */
    select?: tbl_personasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_personas
     */
    omit?: tbl_personasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_personasInclude<ExtArgs> | null
  }


  /**
   * Model tbl_productos
   */

  export type AggregateTbl_productos = {
    _count: Tbl_productosCountAggregateOutputType | null
    _avg: Tbl_productosAvgAggregateOutputType | null
    _sum: Tbl_productosSumAggregateOutputType | null
    _min: Tbl_productosMinAggregateOutputType | null
    _max: Tbl_productosMaxAggregateOutputType | null
  }

  export type Tbl_productosAvgAggregateOutputType = {
    pkid: number | null
    costo: number | null
    valor: number | null
    fkid_tbl_empresas: number | null
  }

  export type Tbl_productosSumAggregateOutputType = {
    pkid: bigint | null
    costo: number | null
    valor: number | null
    fkid_tbl_empresas: bigint | null
  }

  export type Tbl_productosMinAggregateOutputType = {
    pkid: bigint | null
    nombre: string | null
    costo: number | null
    valor: number | null
    fkid_tbl_empresas: bigint | null
  }

  export type Tbl_productosMaxAggregateOutputType = {
    pkid: bigint | null
    nombre: string | null
    costo: number | null
    valor: number | null
    fkid_tbl_empresas: bigint | null
  }

  export type Tbl_productosCountAggregateOutputType = {
    pkid: number
    nombre: number
    costo: number
    valor: number
    fkid_tbl_empresas: number
    _all: number
  }


  export type Tbl_productosAvgAggregateInputType = {
    pkid?: true
    costo?: true
    valor?: true
    fkid_tbl_empresas?: true
  }

  export type Tbl_productosSumAggregateInputType = {
    pkid?: true
    costo?: true
    valor?: true
    fkid_tbl_empresas?: true
  }

  export type Tbl_productosMinAggregateInputType = {
    pkid?: true
    nombre?: true
    costo?: true
    valor?: true
    fkid_tbl_empresas?: true
  }

  export type Tbl_productosMaxAggregateInputType = {
    pkid?: true
    nombre?: true
    costo?: true
    valor?: true
    fkid_tbl_empresas?: true
  }

  export type Tbl_productosCountAggregateInputType = {
    pkid?: true
    nombre?: true
    costo?: true
    valor?: true
    fkid_tbl_empresas?: true
    _all?: true
  }

  export type Tbl_productosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_productos to aggregate.
     */
    where?: tbl_productosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_productos to fetch.
     */
    orderBy?: tbl_productosOrderByWithRelationInput | tbl_productosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tbl_productosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tbl_productos
    **/
    _count?: true | Tbl_productosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tbl_productosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tbl_productosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tbl_productosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tbl_productosMaxAggregateInputType
  }

  export type GetTbl_productosAggregateType<T extends Tbl_productosAggregateArgs> = {
        [P in keyof T & keyof AggregateTbl_productos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTbl_productos[P]>
      : GetScalarType<T[P], AggregateTbl_productos[P]>
  }




  export type tbl_productosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_productosWhereInput
    orderBy?: tbl_productosOrderByWithAggregationInput | tbl_productosOrderByWithAggregationInput[]
    by: Tbl_productosScalarFieldEnum[] | Tbl_productosScalarFieldEnum
    having?: tbl_productosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tbl_productosCountAggregateInputType | true
    _avg?: Tbl_productosAvgAggregateInputType
    _sum?: Tbl_productosSumAggregateInputType
    _min?: Tbl_productosMinAggregateInputType
    _max?: Tbl_productosMaxAggregateInputType
  }

  export type Tbl_productosGroupByOutputType = {
    pkid: bigint
    nombre: string
    costo: number
    valor: number
    fkid_tbl_empresas: bigint | null
    _count: Tbl_productosCountAggregateOutputType | null
    _avg: Tbl_productosAvgAggregateOutputType | null
    _sum: Tbl_productosSumAggregateOutputType | null
    _min: Tbl_productosMinAggregateOutputType | null
    _max: Tbl_productosMaxAggregateOutputType | null
  }

  type GetTbl_productosGroupByPayload<T extends tbl_productosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tbl_productosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tbl_productosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tbl_productosGroupByOutputType[P]>
            : GetScalarType<T[P], Tbl_productosGroupByOutputType[P]>
        }
      >
    >


  export type tbl_productosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pkid?: boolean
    nombre?: boolean
    costo?: boolean
    valor?: boolean
    fkid_tbl_empresas?: boolean
    empresas?: boolean | tbl_productos$empresasArgs<ExtArgs>
    det_productos?: boolean | tbl_productos$det_productosArgs<ExtArgs>
    _count?: boolean | Tbl_productosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tbl_productos"]>

  export type tbl_productosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pkid?: boolean
    nombre?: boolean
    costo?: boolean
    valor?: boolean
    fkid_tbl_empresas?: boolean
    empresas?: boolean | tbl_productos$empresasArgs<ExtArgs>
  }, ExtArgs["result"]["tbl_productos"]>

  export type tbl_productosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pkid?: boolean
    nombre?: boolean
    costo?: boolean
    valor?: boolean
    fkid_tbl_empresas?: boolean
    empresas?: boolean | tbl_productos$empresasArgs<ExtArgs>
  }, ExtArgs["result"]["tbl_productos"]>

  export type tbl_productosSelectScalar = {
    pkid?: boolean
    nombre?: boolean
    costo?: boolean
    valor?: boolean
    fkid_tbl_empresas?: boolean
  }

  export type tbl_productosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"pkid" | "nombre" | "costo" | "valor" | "fkid_tbl_empresas", ExtArgs["result"]["tbl_productos"]>
  export type tbl_productosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    empresas?: boolean | tbl_productos$empresasArgs<ExtArgs>
    det_productos?: boolean | tbl_productos$det_productosArgs<ExtArgs>
    _count?: boolean | Tbl_productosCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type tbl_productosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    empresas?: boolean | tbl_productos$empresasArgs<ExtArgs>
  }
  export type tbl_productosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    empresas?: boolean | tbl_productos$empresasArgs<ExtArgs>
  }

  export type $tbl_productosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tbl_productos"
    objects: {
      empresas: Prisma.$tbl_empresasPayload<ExtArgs> | null
      det_productos: Prisma.$tbl_det_productosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      pkid: bigint
      nombre: string
      costo: number
      valor: number
      fkid_tbl_empresas: bigint | null
    }, ExtArgs["result"]["tbl_productos"]>
    composites: {}
  }

  type tbl_productosGetPayload<S extends boolean | null | undefined | tbl_productosDefaultArgs> = $Result.GetResult<Prisma.$tbl_productosPayload, S>

  type tbl_productosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tbl_productosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tbl_productosCountAggregateInputType | true
    }

  export interface tbl_productosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tbl_productos'], meta: { name: 'tbl_productos' } }
    /**
     * Find zero or one Tbl_productos that matches the filter.
     * @param {tbl_productosFindUniqueArgs} args - Arguments to find a Tbl_productos
     * @example
     * // Get one Tbl_productos
     * const tbl_productos = await prisma.tbl_productos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tbl_productosFindUniqueArgs>(args: SelectSubset<T, tbl_productosFindUniqueArgs<ExtArgs>>): Prisma__tbl_productosClient<$Result.GetResult<Prisma.$tbl_productosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tbl_productos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tbl_productosFindUniqueOrThrowArgs} args - Arguments to find a Tbl_productos
     * @example
     * // Get one Tbl_productos
     * const tbl_productos = await prisma.tbl_productos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tbl_productosFindUniqueOrThrowArgs>(args: SelectSubset<T, tbl_productosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tbl_productosClient<$Result.GetResult<Prisma.$tbl_productosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_productos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_productosFindFirstArgs} args - Arguments to find a Tbl_productos
     * @example
     * // Get one Tbl_productos
     * const tbl_productos = await prisma.tbl_productos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tbl_productosFindFirstArgs>(args?: SelectSubset<T, tbl_productosFindFirstArgs<ExtArgs>>): Prisma__tbl_productosClient<$Result.GetResult<Prisma.$tbl_productosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_productos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_productosFindFirstOrThrowArgs} args - Arguments to find a Tbl_productos
     * @example
     * // Get one Tbl_productos
     * const tbl_productos = await prisma.tbl_productos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tbl_productosFindFirstOrThrowArgs>(args?: SelectSubset<T, tbl_productosFindFirstOrThrowArgs<ExtArgs>>): Prisma__tbl_productosClient<$Result.GetResult<Prisma.$tbl_productosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tbl_productos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_productosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tbl_productos
     * const tbl_productos = await prisma.tbl_productos.findMany()
     * 
     * // Get first 10 Tbl_productos
     * const tbl_productos = await prisma.tbl_productos.findMany({ take: 10 })
     * 
     * // Only select the `pkid`
     * const tbl_productosWithPkidOnly = await prisma.tbl_productos.findMany({ select: { pkid: true } })
     * 
     */
    findMany<T extends tbl_productosFindManyArgs>(args?: SelectSubset<T, tbl_productosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_productosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tbl_productos.
     * @param {tbl_productosCreateArgs} args - Arguments to create a Tbl_productos.
     * @example
     * // Create one Tbl_productos
     * const Tbl_productos = await prisma.tbl_productos.create({
     *   data: {
     *     // ... data to create a Tbl_productos
     *   }
     * })
     * 
     */
    create<T extends tbl_productosCreateArgs>(args: SelectSubset<T, tbl_productosCreateArgs<ExtArgs>>): Prisma__tbl_productosClient<$Result.GetResult<Prisma.$tbl_productosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tbl_productos.
     * @param {tbl_productosCreateManyArgs} args - Arguments to create many Tbl_productos.
     * @example
     * // Create many Tbl_productos
     * const tbl_productos = await prisma.tbl_productos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tbl_productosCreateManyArgs>(args?: SelectSubset<T, tbl_productosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tbl_productos and returns the data saved in the database.
     * @param {tbl_productosCreateManyAndReturnArgs} args - Arguments to create many Tbl_productos.
     * @example
     * // Create many Tbl_productos
     * const tbl_productos = await prisma.tbl_productos.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tbl_productos and only return the `pkid`
     * const tbl_productosWithPkidOnly = await prisma.tbl_productos.createManyAndReturn({
     *   select: { pkid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends tbl_productosCreateManyAndReturnArgs>(args?: SelectSubset<T, tbl_productosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_productosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tbl_productos.
     * @param {tbl_productosDeleteArgs} args - Arguments to delete one Tbl_productos.
     * @example
     * // Delete one Tbl_productos
     * const Tbl_productos = await prisma.tbl_productos.delete({
     *   where: {
     *     // ... filter to delete one Tbl_productos
     *   }
     * })
     * 
     */
    delete<T extends tbl_productosDeleteArgs>(args: SelectSubset<T, tbl_productosDeleteArgs<ExtArgs>>): Prisma__tbl_productosClient<$Result.GetResult<Prisma.$tbl_productosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tbl_productos.
     * @param {tbl_productosUpdateArgs} args - Arguments to update one Tbl_productos.
     * @example
     * // Update one Tbl_productos
     * const tbl_productos = await prisma.tbl_productos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tbl_productosUpdateArgs>(args: SelectSubset<T, tbl_productosUpdateArgs<ExtArgs>>): Prisma__tbl_productosClient<$Result.GetResult<Prisma.$tbl_productosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tbl_productos.
     * @param {tbl_productosDeleteManyArgs} args - Arguments to filter Tbl_productos to delete.
     * @example
     * // Delete a few Tbl_productos
     * const { count } = await prisma.tbl_productos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tbl_productosDeleteManyArgs>(args?: SelectSubset<T, tbl_productosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tbl_productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_productosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tbl_productos
     * const tbl_productos = await prisma.tbl_productos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tbl_productosUpdateManyArgs>(args: SelectSubset<T, tbl_productosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tbl_productos and returns the data updated in the database.
     * @param {tbl_productosUpdateManyAndReturnArgs} args - Arguments to update many Tbl_productos.
     * @example
     * // Update many Tbl_productos
     * const tbl_productos = await prisma.tbl_productos.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tbl_productos and only return the `pkid`
     * const tbl_productosWithPkidOnly = await prisma.tbl_productos.updateManyAndReturn({
     *   select: { pkid: true },
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
    updateManyAndReturn<T extends tbl_productosUpdateManyAndReturnArgs>(args: SelectSubset<T, tbl_productosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_productosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tbl_productos.
     * @param {tbl_productosUpsertArgs} args - Arguments to update or create a Tbl_productos.
     * @example
     * // Update or create a Tbl_productos
     * const tbl_productos = await prisma.tbl_productos.upsert({
     *   create: {
     *     // ... data to create a Tbl_productos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tbl_productos we want to update
     *   }
     * })
     */
    upsert<T extends tbl_productosUpsertArgs>(args: SelectSubset<T, tbl_productosUpsertArgs<ExtArgs>>): Prisma__tbl_productosClient<$Result.GetResult<Prisma.$tbl_productosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tbl_productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_productosCountArgs} args - Arguments to filter Tbl_productos to count.
     * @example
     * // Count the number of Tbl_productos
     * const count = await prisma.tbl_productos.count({
     *   where: {
     *     // ... the filter for the Tbl_productos we want to count
     *   }
     * })
    **/
    count<T extends tbl_productosCountArgs>(
      args?: Subset<T, tbl_productosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tbl_productosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tbl_productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tbl_productosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tbl_productosAggregateArgs>(args: Subset<T, Tbl_productosAggregateArgs>): Prisma.PrismaPromise<GetTbl_productosAggregateType<T>>

    /**
     * Group by Tbl_productos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_productosGroupByArgs} args - Group by arguments.
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
      T extends tbl_productosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tbl_productosGroupByArgs['orderBy'] }
        : { orderBy?: tbl_productosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tbl_productosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTbl_productosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tbl_productos model
   */
  readonly fields: tbl_productosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tbl_productos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tbl_productosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    empresas<T extends tbl_productos$empresasArgs<ExtArgs> = {}>(args?: Subset<T, tbl_productos$empresasArgs<ExtArgs>>): Prisma__tbl_empresasClient<$Result.GetResult<Prisma.$tbl_empresasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    det_productos<T extends tbl_productos$det_productosArgs<ExtArgs> = {}>(args?: Subset<T, tbl_productos$det_productosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_det_productosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the tbl_productos model
   */
  interface tbl_productosFieldRefs {
    readonly pkid: FieldRef<"tbl_productos", 'BigInt'>
    readonly nombre: FieldRef<"tbl_productos", 'String'>
    readonly costo: FieldRef<"tbl_productos", 'Float'>
    readonly valor: FieldRef<"tbl_productos", 'Float'>
    readonly fkid_tbl_empresas: FieldRef<"tbl_productos", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * tbl_productos findUnique
   */
  export type tbl_productosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_productos
     */
    select?: tbl_productosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_productos
     */
    omit?: tbl_productosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_productosInclude<ExtArgs> | null
    /**
     * Filter, which tbl_productos to fetch.
     */
    where: tbl_productosWhereUniqueInput
  }

  /**
   * tbl_productos findUniqueOrThrow
   */
  export type tbl_productosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_productos
     */
    select?: tbl_productosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_productos
     */
    omit?: tbl_productosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_productosInclude<ExtArgs> | null
    /**
     * Filter, which tbl_productos to fetch.
     */
    where: tbl_productosWhereUniqueInput
  }

  /**
   * tbl_productos findFirst
   */
  export type tbl_productosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_productos
     */
    select?: tbl_productosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_productos
     */
    omit?: tbl_productosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_productosInclude<ExtArgs> | null
    /**
     * Filter, which tbl_productos to fetch.
     */
    where?: tbl_productosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_productos to fetch.
     */
    orderBy?: tbl_productosOrderByWithRelationInput | tbl_productosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_productos.
     */
    cursor?: tbl_productosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_productos.
     */
    distinct?: Tbl_productosScalarFieldEnum | Tbl_productosScalarFieldEnum[]
  }

  /**
   * tbl_productos findFirstOrThrow
   */
  export type tbl_productosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_productos
     */
    select?: tbl_productosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_productos
     */
    omit?: tbl_productosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_productosInclude<ExtArgs> | null
    /**
     * Filter, which tbl_productos to fetch.
     */
    where?: tbl_productosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_productos to fetch.
     */
    orderBy?: tbl_productosOrderByWithRelationInput | tbl_productosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_productos.
     */
    cursor?: tbl_productosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_productos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_productos.
     */
    distinct?: Tbl_productosScalarFieldEnum | Tbl_productosScalarFieldEnum[]
  }

  /**
   * tbl_productos findMany
   */
  export type tbl_productosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_productos
     */
    select?: tbl_productosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_productos
     */
    omit?: tbl_productosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_productosInclude<ExtArgs> | null
    /**
     * Filter, which tbl_productos to fetch.
     */
    where?: tbl_productosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_productos to fetch.
     */
    orderBy?: tbl_productosOrderByWithRelationInput | tbl_productosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tbl_productos.
     */
    cursor?: tbl_productosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_productos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_productos.
     */
    skip?: number
    distinct?: Tbl_productosScalarFieldEnum | Tbl_productosScalarFieldEnum[]
  }

  /**
   * tbl_productos create
   */
  export type tbl_productosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_productos
     */
    select?: tbl_productosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_productos
     */
    omit?: tbl_productosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_productosInclude<ExtArgs> | null
    /**
     * The data needed to create a tbl_productos.
     */
    data: XOR<tbl_productosCreateInput, tbl_productosUncheckedCreateInput>
  }

  /**
   * tbl_productos createMany
   */
  export type tbl_productosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tbl_productos.
     */
    data: tbl_productosCreateManyInput | tbl_productosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tbl_productos createManyAndReturn
   */
  export type tbl_productosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_productos
     */
    select?: tbl_productosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_productos
     */
    omit?: tbl_productosOmit<ExtArgs> | null
    /**
     * The data used to create many tbl_productos.
     */
    data: tbl_productosCreateManyInput | tbl_productosCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_productosIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * tbl_productos update
   */
  export type tbl_productosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_productos
     */
    select?: tbl_productosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_productos
     */
    omit?: tbl_productosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_productosInclude<ExtArgs> | null
    /**
     * The data needed to update a tbl_productos.
     */
    data: XOR<tbl_productosUpdateInput, tbl_productosUncheckedUpdateInput>
    /**
     * Choose, which tbl_productos to update.
     */
    where: tbl_productosWhereUniqueInput
  }

  /**
   * tbl_productos updateMany
   */
  export type tbl_productosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tbl_productos.
     */
    data: XOR<tbl_productosUpdateManyMutationInput, tbl_productosUncheckedUpdateManyInput>
    /**
     * Filter which tbl_productos to update
     */
    where?: tbl_productosWhereInput
    /**
     * Limit how many tbl_productos to update.
     */
    limit?: number
  }

  /**
   * tbl_productos updateManyAndReturn
   */
  export type tbl_productosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_productos
     */
    select?: tbl_productosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_productos
     */
    omit?: tbl_productosOmit<ExtArgs> | null
    /**
     * The data used to update tbl_productos.
     */
    data: XOR<tbl_productosUpdateManyMutationInput, tbl_productosUncheckedUpdateManyInput>
    /**
     * Filter which tbl_productos to update
     */
    where?: tbl_productosWhereInput
    /**
     * Limit how many tbl_productos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_productosIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * tbl_productos upsert
   */
  export type tbl_productosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_productos
     */
    select?: tbl_productosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_productos
     */
    omit?: tbl_productosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_productosInclude<ExtArgs> | null
    /**
     * The filter to search for the tbl_productos to update in case it exists.
     */
    where: tbl_productosWhereUniqueInput
    /**
     * In case the tbl_productos found by the `where` argument doesn't exist, create a new tbl_productos with this data.
     */
    create: XOR<tbl_productosCreateInput, tbl_productosUncheckedCreateInput>
    /**
     * In case the tbl_productos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tbl_productosUpdateInput, tbl_productosUncheckedUpdateInput>
  }

  /**
   * tbl_productos delete
   */
  export type tbl_productosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_productos
     */
    select?: tbl_productosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_productos
     */
    omit?: tbl_productosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_productosInclude<ExtArgs> | null
    /**
     * Filter which tbl_productos to delete.
     */
    where: tbl_productosWhereUniqueInput
  }

  /**
   * tbl_productos deleteMany
   */
  export type tbl_productosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_productos to delete
     */
    where?: tbl_productosWhereInput
    /**
     * Limit how many tbl_productos to delete.
     */
    limit?: number
  }

  /**
   * tbl_productos.empresas
   */
  export type tbl_productos$empresasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_empresas
     */
    select?: tbl_empresasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_empresas
     */
    omit?: tbl_empresasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_empresasInclude<ExtArgs> | null
    where?: tbl_empresasWhereInput
  }

  /**
   * tbl_productos.det_productos
   */
  export type tbl_productos$det_productosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_det_productos
     */
    select?: tbl_det_productosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_det_productos
     */
    omit?: tbl_det_productosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_det_productosInclude<ExtArgs> | null
    where?: tbl_det_productosWhereInput
    orderBy?: tbl_det_productosOrderByWithRelationInput | tbl_det_productosOrderByWithRelationInput[]
    cursor?: tbl_det_productosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tbl_det_productosScalarFieldEnum | Tbl_det_productosScalarFieldEnum[]
  }

  /**
   * tbl_productos without action
   */
  export type tbl_productosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_productos
     */
    select?: tbl_productosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_productos
     */
    omit?: tbl_productosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_productosInclude<ExtArgs> | null
  }


  /**
   * Model tbl_empresas
   */

  export type AggregateTbl_empresas = {
    _count: Tbl_empresasCountAggregateOutputType | null
    _avg: Tbl_empresasAvgAggregateOutputType | null
    _sum: Tbl_empresasSumAggregateOutputType | null
    _min: Tbl_empresasMinAggregateOutputType | null
    _max: Tbl_empresasMaxAggregateOutputType | null
  }

  export type Tbl_empresasAvgAggregateOutputType = {
    pkid: number | null
  }

  export type Tbl_empresasSumAggregateOutputType = {
    pkid: bigint | null
  }

  export type Tbl_empresasMinAggregateOutputType = {
    pkid: bigint | null
    nit: string | null
    nombre: string | null
    telefono: string | null
    correo: string | null
  }

  export type Tbl_empresasMaxAggregateOutputType = {
    pkid: bigint | null
    nit: string | null
    nombre: string | null
    telefono: string | null
    correo: string | null
  }

  export type Tbl_empresasCountAggregateOutputType = {
    pkid: number
    nit: number
    nombre: number
    telefono: number
    correo: number
    _all: number
  }


  export type Tbl_empresasAvgAggregateInputType = {
    pkid?: true
  }

  export type Tbl_empresasSumAggregateInputType = {
    pkid?: true
  }

  export type Tbl_empresasMinAggregateInputType = {
    pkid?: true
    nit?: true
    nombre?: true
    telefono?: true
    correo?: true
  }

  export type Tbl_empresasMaxAggregateInputType = {
    pkid?: true
    nit?: true
    nombre?: true
    telefono?: true
    correo?: true
  }

  export type Tbl_empresasCountAggregateInputType = {
    pkid?: true
    nit?: true
    nombre?: true
    telefono?: true
    correo?: true
    _all?: true
  }

  export type Tbl_empresasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_empresas to aggregate.
     */
    where?: tbl_empresasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_empresas to fetch.
     */
    orderBy?: tbl_empresasOrderByWithRelationInput | tbl_empresasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tbl_empresasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_empresas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_empresas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tbl_empresas
    **/
    _count?: true | Tbl_empresasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tbl_empresasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tbl_empresasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tbl_empresasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tbl_empresasMaxAggregateInputType
  }

  export type GetTbl_empresasAggregateType<T extends Tbl_empresasAggregateArgs> = {
        [P in keyof T & keyof AggregateTbl_empresas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTbl_empresas[P]>
      : GetScalarType<T[P], AggregateTbl_empresas[P]>
  }




  export type tbl_empresasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_empresasWhereInput
    orderBy?: tbl_empresasOrderByWithAggregationInput | tbl_empresasOrderByWithAggregationInput[]
    by: Tbl_empresasScalarFieldEnum[] | Tbl_empresasScalarFieldEnum
    having?: tbl_empresasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tbl_empresasCountAggregateInputType | true
    _avg?: Tbl_empresasAvgAggregateInputType
    _sum?: Tbl_empresasSumAggregateInputType
    _min?: Tbl_empresasMinAggregateInputType
    _max?: Tbl_empresasMaxAggregateInputType
  }

  export type Tbl_empresasGroupByOutputType = {
    pkid: bigint
    nit: string
    nombre: string
    telefono: string
    correo: string
    _count: Tbl_empresasCountAggregateOutputType | null
    _avg: Tbl_empresasAvgAggregateOutputType | null
    _sum: Tbl_empresasSumAggregateOutputType | null
    _min: Tbl_empresasMinAggregateOutputType | null
    _max: Tbl_empresasMaxAggregateOutputType | null
  }

  type GetTbl_empresasGroupByPayload<T extends tbl_empresasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tbl_empresasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tbl_empresasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tbl_empresasGroupByOutputType[P]>
            : GetScalarType<T[P], Tbl_empresasGroupByOutputType[P]>
        }
      >
    >


  export type tbl_empresasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pkid?: boolean
    nit?: boolean
    nombre?: boolean
    telefono?: boolean
    correo?: boolean
    productos?: boolean | tbl_empresas$productosArgs<ExtArgs>
    _count?: boolean | Tbl_empresasCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tbl_empresas"]>

  export type tbl_empresasSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pkid?: boolean
    nit?: boolean
    nombre?: boolean
    telefono?: boolean
    correo?: boolean
  }, ExtArgs["result"]["tbl_empresas"]>

  export type tbl_empresasSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pkid?: boolean
    nit?: boolean
    nombre?: boolean
    telefono?: boolean
    correo?: boolean
  }, ExtArgs["result"]["tbl_empresas"]>

  export type tbl_empresasSelectScalar = {
    pkid?: boolean
    nit?: boolean
    nombre?: boolean
    telefono?: boolean
    correo?: boolean
  }

  export type tbl_empresasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"pkid" | "nit" | "nombre" | "telefono" | "correo", ExtArgs["result"]["tbl_empresas"]>
  export type tbl_empresasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    productos?: boolean | tbl_empresas$productosArgs<ExtArgs>
    _count?: boolean | Tbl_empresasCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type tbl_empresasIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type tbl_empresasIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $tbl_empresasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tbl_empresas"
    objects: {
      productos: Prisma.$tbl_productosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      pkid: bigint
      nit: string
      nombre: string
      telefono: string
      correo: string
    }, ExtArgs["result"]["tbl_empresas"]>
    composites: {}
  }

  type tbl_empresasGetPayload<S extends boolean | null | undefined | tbl_empresasDefaultArgs> = $Result.GetResult<Prisma.$tbl_empresasPayload, S>

  type tbl_empresasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tbl_empresasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tbl_empresasCountAggregateInputType | true
    }

  export interface tbl_empresasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tbl_empresas'], meta: { name: 'tbl_empresas' } }
    /**
     * Find zero or one Tbl_empresas that matches the filter.
     * @param {tbl_empresasFindUniqueArgs} args - Arguments to find a Tbl_empresas
     * @example
     * // Get one Tbl_empresas
     * const tbl_empresas = await prisma.tbl_empresas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tbl_empresasFindUniqueArgs>(args: SelectSubset<T, tbl_empresasFindUniqueArgs<ExtArgs>>): Prisma__tbl_empresasClient<$Result.GetResult<Prisma.$tbl_empresasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tbl_empresas that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tbl_empresasFindUniqueOrThrowArgs} args - Arguments to find a Tbl_empresas
     * @example
     * // Get one Tbl_empresas
     * const tbl_empresas = await prisma.tbl_empresas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tbl_empresasFindUniqueOrThrowArgs>(args: SelectSubset<T, tbl_empresasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tbl_empresasClient<$Result.GetResult<Prisma.$tbl_empresasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_empresas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_empresasFindFirstArgs} args - Arguments to find a Tbl_empresas
     * @example
     * // Get one Tbl_empresas
     * const tbl_empresas = await prisma.tbl_empresas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tbl_empresasFindFirstArgs>(args?: SelectSubset<T, tbl_empresasFindFirstArgs<ExtArgs>>): Prisma__tbl_empresasClient<$Result.GetResult<Prisma.$tbl_empresasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_empresas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_empresasFindFirstOrThrowArgs} args - Arguments to find a Tbl_empresas
     * @example
     * // Get one Tbl_empresas
     * const tbl_empresas = await prisma.tbl_empresas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tbl_empresasFindFirstOrThrowArgs>(args?: SelectSubset<T, tbl_empresasFindFirstOrThrowArgs<ExtArgs>>): Prisma__tbl_empresasClient<$Result.GetResult<Prisma.$tbl_empresasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tbl_empresas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_empresasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tbl_empresas
     * const tbl_empresas = await prisma.tbl_empresas.findMany()
     * 
     * // Get first 10 Tbl_empresas
     * const tbl_empresas = await prisma.tbl_empresas.findMany({ take: 10 })
     * 
     * // Only select the `pkid`
     * const tbl_empresasWithPkidOnly = await prisma.tbl_empresas.findMany({ select: { pkid: true } })
     * 
     */
    findMany<T extends tbl_empresasFindManyArgs>(args?: SelectSubset<T, tbl_empresasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_empresasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tbl_empresas.
     * @param {tbl_empresasCreateArgs} args - Arguments to create a Tbl_empresas.
     * @example
     * // Create one Tbl_empresas
     * const Tbl_empresas = await prisma.tbl_empresas.create({
     *   data: {
     *     // ... data to create a Tbl_empresas
     *   }
     * })
     * 
     */
    create<T extends tbl_empresasCreateArgs>(args: SelectSubset<T, tbl_empresasCreateArgs<ExtArgs>>): Prisma__tbl_empresasClient<$Result.GetResult<Prisma.$tbl_empresasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tbl_empresas.
     * @param {tbl_empresasCreateManyArgs} args - Arguments to create many Tbl_empresas.
     * @example
     * // Create many Tbl_empresas
     * const tbl_empresas = await prisma.tbl_empresas.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tbl_empresasCreateManyArgs>(args?: SelectSubset<T, tbl_empresasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tbl_empresas and returns the data saved in the database.
     * @param {tbl_empresasCreateManyAndReturnArgs} args - Arguments to create many Tbl_empresas.
     * @example
     * // Create many Tbl_empresas
     * const tbl_empresas = await prisma.tbl_empresas.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tbl_empresas and only return the `pkid`
     * const tbl_empresasWithPkidOnly = await prisma.tbl_empresas.createManyAndReturn({
     *   select: { pkid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends tbl_empresasCreateManyAndReturnArgs>(args?: SelectSubset<T, tbl_empresasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_empresasPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tbl_empresas.
     * @param {tbl_empresasDeleteArgs} args - Arguments to delete one Tbl_empresas.
     * @example
     * // Delete one Tbl_empresas
     * const Tbl_empresas = await prisma.tbl_empresas.delete({
     *   where: {
     *     // ... filter to delete one Tbl_empresas
     *   }
     * })
     * 
     */
    delete<T extends tbl_empresasDeleteArgs>(args: SelectSubset<T, tbl_empresasDeleteArgs<ExtArgs>>): Prisma__tbl_empresasClient<$Result.GetResult<Prisma.$tbl_empresasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tbl_empresas.
     * @param {tbl_empresasUpdateArgs} args - Arguments to update one Tbl_empresas.
     * @example
     * // Update one Tbl_empresas
     * const tbl_empresas = await prisma.tbl_empresas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tbl_empresasUpdateArgs>(args: SelectSubset<T, tbl_empresasUpdateArgs<ExtArgs>>): Prisma__tbl_empresasClient<$Result.GetResult<Prisma.$tbl_empresasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tbl_empresas.
     * @param {tbl_empresasDeleteManyArgs} args - Arguments to filter Tbl_empresas to delete.
     * @example
     * // Delete a few Tbl_empresas
     * const { count } = await prisma.tbl_empresas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tbl_empresasDeleteManyArgs>(args?: SelectSubset<T, tbl_empresasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tbl_empresas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_empresasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tbl_empresas
     * const tbl_empresas = await prisma.tbl_empresas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tbl_empresasUpdateManyArgs>(args: SelectSubset<T, tbl_empresasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tbl_empresas and returns the data updated in the database.
     * @param {tbl_empresasUpdateManyAndReturnArgs} args - Arguments to update many Tbl_empresas.
     * @example
     * // Update many Tbl_empresas
     * const tbl_empresas = await prisma.tbl_empresas.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tbl_empresas and only return the `pkid`
     * const tbl_empresasWithPkidOnly = await prisma.tbl_empresas.updateManyAndReturn({
     *   select: { pkid: true },
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
    updateManyAndReturn<T extends tbl_empresasUpdateManyAndReturnArgs>(args: SelectSubset<T, tbl_empresasUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_empresasPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tbl_empresas.
     * @param {tbl_empresasUpsertArgs} args - Arguments to update or create a Tbl_empresas.
     * @example
     * // Update or create a Tbl_empresas
     * const tbl_empresas = await prisma.tbl_empresas.upsert({
     *   create: {
     *     // ... data to create a Tbl_empresas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tbl_empresas we want to update
     *   }
     * })
     */
    upsert<T extends tbl_empresasUpsertArgs>(args: SelectSubset<T, tbl_empresasUpsertArgs<ExtArgs>>): Prisma__tbl_empresasClient<$Result.GetResult<Prisma.$tbl_empresasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tbl_empresas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_empresasCountArgs} args - Arguments to filter Tbl_empresas to count.
     * @example
     * // Count the number of Tbl_empresas
     * const count = await prisma.tbl_empresas.count({
     *   where: {
     *     // ... the filter for the Tbl_empresas we want to count
     *   }
     * })
    **/
    count<T extends tbl_empresasCountArgs>(
      args?: Subset<T, tbl_empresasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tbl_empresasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tbl_empresas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tbl_empresasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tbl_empresasAggregateArgs>(args: Subset<T, Tbl_empresasAggregateArgs>): Prisma.PrismaPromise<GetTbl_empresasAggregateType<T>>

    /**
     * Group by Tbl_empresas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_empresasGroupByArgs} args - Group by arguments.
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
      T extends tbl_empresasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tbl_empresasGroupByArgs['orderBy'] }
        : { orderBy?: tbl_empresasGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tbl_empresasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTbl_empresasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tbl_empresas model
   */
  readonly fields: tbl_empresasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tbl_empresas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tbl_empresasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    productos<T extends tbl_empresas$productosArgs<ExtArgs> = {}>(args?: Subset<T, tbl_empresas$productosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_productosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the tbl_empresas model
   */
  interface tbl_empresasFieldRefs {
    readonly pkid: FieldRef<"tbl_empresas", 'BigInt'>
    readonly nit: FieldRef<"tbl_empresas", 'String'>
    readonly nombre: FieldRef<"tbl_empresas", 'String'>
    readonly telefono: FieldRef<"tbl_empresas", 'String'>
    readonly correo: FieldRef<"tbl_empresas", 'String'>
  }
    

  // Custom InputTypes
  /**
   * tbl_empresas findUnique
   */
  export type tbl_empresasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_empresas
     */
    select?: tbl_empresasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_empresas
     */
    omit?: tbl_empresasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_empresasInclude<ExtArgs> | null
    /**
     * Filter, which tbl_empresas to fetch.
     */
    where: tbl_empresasWhereUniqueInput
  }

  /**
   * tbl_empresas findUniqueOrThrow
   */
  export type tbl_empresasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_empresas
     */
    select?: tbl_empresasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_empresas
     */
    omit?: tbl_empresasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_empresasInclude<ExtArgs> | null
    /**
     * Filter, which tbl_empresas to fetch.
     */
    where: tbl_empresasWhereUniqueInput
  }

  /**
   * tbl_empresas findFirst
   */
  export type tbl_empresasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_empresas
     */
    select?: tbl_empresasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_empresas
     */
    omit?: tbl_empresasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_empresasInclude<ExtArgs> | null
    /**
     * Filter, which tbl_empresas to fetch.
     */
    where?: tbl_empresasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_empresas to fetch.
     */
    orderBy?: tbl_empresasOrderByWithRelationInput | tbl_empresasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_empresas.
     */
    cursor?: tbl_empresasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_empresas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_empresas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_empresas.
     */
    distinct?: Tbl_empresasScalarFieldEnum | Tbl_empresasScalarFieldEnum[]
  }

  /**
   * tbl_empresas findFirstOrThrow
   */
  export type tbl_empresasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_empresas
     */
    select?: tbl_empresasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_empresas
     */
    omit?: tbl_empresasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_empresasInclude<ExtArgs> | null
    /**
     * Filter, which tbl_empresas to fetch.
     */
    where?: tbl_empresasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_empresas to fetch.
     */
    orderBy?: tbl_empresasOrderByWithRelationInput | tbl_empresasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_empresas.
     */
    cursor?: tbl_empresasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_empresas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_empresas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_empresas.
     */
    distinct?: Tbl_empresasScalarFieldEnum | Tbl_empresasScalarFieldEnum[]
  }

  /**
   * tbl_empresas findMany
   */
  export type tbl_empresasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_empresas
     */
    select?: tbl_empresasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_empresas
     */
    omit?: tbl_empresasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_empresasInclude<ExtArgs> | null
    /**
     * Filter, which tbl_empresas to fetch.
     */
    where?: tbl_empresasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_empresas to fetch.
     */
    orderBy?: tbl_empresasOrderByWithRelationInput | tbl_empresasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tbl_empresas.
     */
    cursor?: tbl_empresasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_empresas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_empresas.
     */
    skip?: number
    distinct?: Tbl_empresasScalarFieldEnum | Tbl_empresasScalarFieldEnum[]
  }

  /**
   * tbl_empresas create
   */
  export type tbl_empresasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_empresas
     */
    select?: tbl_empresasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_empresas
     */
    omit?: tbl_empresasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_empresasInclude<ExtArgs> | null
    /**
     * The data needed to create a tbl_empresas.
     */
    data: XOR<tbl_empresasCreateInput, tbl_empresasUncheckedCreateInput>
  }

  /**
   * tbl_empresas createMany
   */
  export type tbl_empresasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tbl_empresas.
     */
    data: tbl_empresasCreateManyInput | tbl_empresasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tbl_empresas createManyAndReturn
   */
  export type tbl_empresasCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_empresas
     */
    select?: tbl_empresasSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_empresas
     */
    omit?: tbl_empresasOmit<ExtArgs> | null
    /**
     * The data used to create many tbl_empresas.
     */
    data: tbl_empresasCreateManyInput | tbl_empresasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tbl_empresas update
   */
  export type tbl_empresasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_empresas
     */
    select?: tbl_empresasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_empresas
     */
    omit?: tbl_empresasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_empresasInclude<ExtArgs> | null
    /**
     * The data needed to update a tbl_empresas.
     */
    data: XOR<tbl_empresasUpdateInput, tbl_empresasUncheckedUpdateInput>
    /**
     * Choose, which tbl_empresas to update.
     */
    where: tbl_empresasWhereUniqueInput
  }

  /**
   * tbl_empresas updateMany
   */
  export type tbl_empresasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tbl_empresas.
     */
    data: XOR<tbl_empresasUpdateManyMutationInput, tbl_empresasUncheckedUpdateManyInput>
    /**
     * Filter which tbl_empresas to update
     */
    where?: tbl_empresasWhereInput
    /**
     * Limit how many tbl_empresas to update.
     */
    limit?: number
  }

  /**
   * tbl_empresas updateManyAndReturn
   */
  export type tbl_empresasUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_empresas
     */
    select?: tbl_empresasSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_empresas
     */
    omit?: tbl_empresasOmit<ExtArgs> | null
    /**
     * The data used to update tbl_empresas.
     */
    data: XOR<tbl_empresasUpdateManyMutationInput, tbl_empresasUncheckedUpdateManyInput>
    /**
     * Filter which tbl_empresas to update
     */
    where?: tbl_empresasWhereInput
    /**
     * Limit how many tbl_empresas to update.
     */
    limit?: number
  }

  /**
   * tbl_empresas upsert
   */
  export type tbl_empresasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_empresas
     */
    select?: tbl_empresasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_empresas
     */
    omit?: tbl_empresasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_empresasInclude<ExtArgs> | null
    /**
     * The filter to search for the tbl_empresas to update in case it exists.
     */
    where: tbl_empresasWhereUniqueInput
    /**
     * In case the tbl_empresas found by the `where` argument doesn't exist, create a new tbl_empresas with this data.
     */
    create: XOR<tbl_empresasCreateInput, tbl_empresasUncheckedCreateInput>
    /**
     * In case the tbl_empresas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tbl_empresasUpdateInput, tbl_empresasUncheckedUpdateInput>
  }

  /**
   * tbl_empresas delete
   */
  export type tbl_empresasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_empresas
     */
    select?: tbl_empresasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_empresas
     */
    omit?: tbl_empresasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_empresasInclude<ExtArgs> | null
    /**
     * Filter which tbl_empresas to delete.
     */
    where: tbl_empresasWhereUniqueInput
  }

  /**
   * tbl_empresas deleteMany
   */
  export type tbl_empresasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_empresas to delete
     */
    where?: tbl_empresasWhereInput
    /**
     * Limit how many tbl_empresas to delete.
     */
    limit?: number
  }

  /**
   * tbl_empresas.productos
   */
  export type tbl_empresas$productosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_productos
     */
    select?: tbl_productosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_productos
     */
    omit?: tbl_productosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_productosInclude<ExtArgs> | null
    where?: tbl_productosWhereInput
    orderBy?: tbl_productosOrderByWithRelationInput | tbl_productosOrderByWithRelationInput[]
    cursor?: tbl_productosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tbl_productosScalarFieldEnum | Tbl_productosScalarFieldEnum[]
  }

  /**
   * tbl_empresas without action
   */
  export type tbl_empresasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_empresas
     */
    select?: tbl_empresasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_empresas
     */
    omit?: tbl_empresasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_empresasInclude<ExtArgs> | null
  }


  /**
   * Model tbl_roles
   */

  export type AggregateTbl_roles = {
    _count: Tbl_rolesCountAggregateOutputType | null
    _avg: Tbl_rolesAvgAggregateOutputType | null
    _sum: Tbl_rolesSumAggregateOutputType | null
    _min: Tbl_rolesMinAggregateOutputType | null
    _max: Tbl_rolesMaxAggregateOutputType | null
  }

  export type Tbl_rolesAvgAggregateOutputType = {
    pkid: number | null
  }

  export type Tbl_rolesSumAggregateOutputType = {
    pkid: bigint | null
  }

  export type Tbl_rolesMinAggregateOutputType = {
    pkid: bigint | null
    nombre: string | null
    nomenclatura: string | null
  }

  export type Tbl_rolesMaxAggregateOutputType = {
    pkid: bigint | null
    nombre: string | null
    nomenclatura: string | null
  }

  export type Tbl_rolesCountAggregateOutputType = {
    pkid: number
    nombre: number
    nomenclatura: number
    _all: number
  }


  export type Tbl_rolesAvgAggregateInputType = {
    pkid?: true
  }

  export type Tbl_rolesSumAggregateInputType = {
    pkid?: true
  }

  export type Tbl_rolesMinAggregateInputType = {
    pkid?: true
    nombre?: true
    nomenclatura?: true
  }

  export type Tbl_rolesMaxAggregateInputType = {
    pkid?: true
    nombre?: true
    nomenclatura?: true
  }

  export type Tbl_rolesCountAggregateInputType = {
    pkid?: true
    nombre?: true
    nomenclatura?: true
    _all?: true
  }

  export type Tbl_rolesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_roles to aggregate.
     */
    where?: tbl_rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_roles to fetch.
     */
    orderBy?: tbl_rolesOrderByWithRelationInput | tbl_rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tbl_rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tbl_roles
    **/
    _count?: true | Tbl_rolesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tbl_rolesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tbl_rolesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tbl_rolesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tbl_rolesMaxAggregateInputType
  }

  export type GetTbl_rolesAggregateType<T extends Tbl_rolesAggregateArgs> = {
        [P in keyof T & keyof AggregateTbl_roles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTbl_roles[P]>
      : GetScalarType<T[P], AggregateTbl_roles[P]>
  }




  export type tbl_rolesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_rolesWhereInput
    orderBy?: tbl_rolesOrderByWithAggregationInput | tbl_rolesOrderByWithAggregationInput[]
    by: Tbl_rolesScalarFieldEnum[] | Tbl_rolesScalarFieldEnum
    having?: tbl_rolesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tbl_rolesCountAggregateInputType | true
    _avg?: Tbl_rolesAvgAggregateInputType
    _sum?: Tbl_rolesSumAggregateInputType
    _min?: Tbl_rolesMinAggregateInputType
    _max?: Tbl_rolesMaxAggregateInputType
  }

  export type Tbl_rolesGroupByOutputType = {
    pkid: bigint
    nombre: string
    nomenclatura: string
    _count: Tbl_rolesCountAggregateOutputType | null
    _avg: Tbl_rolesAvgAggregateOutputType | null
    _sum: Tbl_rolesSumAggregateOutputType | null
    _min: Tbl_rolesMinAggregateOutputType | null
    _max: Tbl_rolesMaxAggregateOutputType | null
  }

  type GetTbl_rolesGroupByPayload<T extends tbl_rolesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tbl_rolesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tbl_rolesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tbl_rolesGroupByOutputType[P]>
            : GetScalarType<T[P], Tbl_rolesGroupByOutputType[P]>
        }
      >
    >


  export type tbl_rolesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pkid?: boolean
    nombre?: boolean
    nomenclatura?: boolean
    usuarios?: boolean | tbl_roles$usuariosArgs<ExtArgs>
    _count?: boolean | Tbl_rolesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tbl_roles"]>

  export type tbl_rolesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pkid?: boolean
    nombre?: boolean
    nomenclatura?: boolean
  }, ExtArgs["result"]["tbl_roles"]>

  export type tbl_rolesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pkid?: boolean
    nombre?: boolean
    nomenclatura?: boolean
  }, ExtArgs["result"]["tbl_roles"]>

  export type tbl_rolesSelectScalar = {
    pkid?: boolean
    nombre?: boolean
    nomenclatura?: boolean
  }

  export type tbl_rolesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"pkid" | "nombre" | "nomenclatura", ExtArgs["result"]["tbl_roles"]>
  export type tbl_rolesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | tbl_roles$usuariosArgs<ExtArgs>
    _count?: boolean | Tbl_rolesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type tbl_rolesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type tbl_rolesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $tbl_rolesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tbl_roles"
    objects: {
      usuarios: Prisma.$tbl_usuariosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      pkid: bigint
      nombre: string
      nomenclatura: string
    }, ExtArgs["result"]["tbl_roles"]>
    composites: {}
  }

  type tbl_rolesGetPayload<S extends boolean | null | undefined | tbl_rolesDefaultArgs> = $Result.GetResult<Prisma.$tbl_rolesPayload, S>

  type tbl_rolesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tbl_rolesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tbl_rolesCountAggregateInputType | true
    }

  export interface tbl_rolesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tbl_roles'], meta: { name: 'tbl_roles' } }
    /**
     * Find zero or one Tbl_roles that matches the filter.
     * @param {tbl_rolesFindUniqueArgs} args - Arguments to find a Tbl_roles
     * @example
     * // Get one Tbl_roles
     * const tbl_roles = await prisma.tbl_roles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tbl_rolesFindUniqueArgs>(args: SelectSubset<T, tbl_rolesFindUniqueArgs<ExtArgs>>): Prisma__tbl_rolesClient<$Result.GetResult<Prisma.$tbl_rolesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tbl_roles that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tbl_rolesFindUniqueOrThrowArgs} args - Arguments to find a Tbl_roles
     * @example
     * // Get one Tbl_roles
     * const tbl_roles = await prisma.tbl_roles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tbl_rolesFindUniqueOrThrowArgs>(args: SelectSubset<T, tbl_rolesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tbl_rolesClient<$Result.GetResult<Prisma.$tbl_rolesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_rolesFindFirstArgs} args - Arguments to find a Tbl_roles
     * @example
     * // Get one Tbl_roles
     * const tbl_roles = await prisma.tbl_roles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tbl_rolesFindFirstArgs>(args?: SelectSubset<T, tbl_rolesFindFirstArgs<ExtArgs>>): Prisma__tbl_rolesClient<$Result.GetResult<Prisma.$tbl_rolesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_roles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_rolesFindFirstOrThrowArgs} args - Arguments to find a Tbl_roles
     * @example
     * // Get one Tbl_roles
     * const tbl_roles = await prisma.tbl_roles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tbl_rolesFindFirstOrThrowArgs>(args?: SelectSubset<T, tbl_rolesFindFirstOrThrowArgs<ExtArgs>>): Prisma__tbl_rolesClient<$Result.GetResult<Prisma.$tbl_rolesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tbl_roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_rolesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tbl_roles
     * const tbl_roles = await prisma.tbl_roles.findMany()
     * 
     * // Get first 10 Tbl_roles
     * const tbl_roles = await prisma.tbl_roles.findMany({ take: 10 })
     * 
     * // Only select the `pkid`
     * const tbl_rolesWithPkidOnly = await prisma.tbl_roles.findMany({ select: { pkid: true } })
     * 
     */
    findMany<T extends tbl_rolesFindManyArgs>(args?: SelectSubset<T, tbl_rolesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_rolesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tbl_roles.
     * @param {tbl_rolesCreateArgs} args - Arguments to create a Tbl_roles.
     * @example
     * // Create one Tbl_roles
     * const Tbl_roles = await prisma.tbl_roles.create({
     *   data: {
     *     // ... data to create a Tbl_roles
     *   }
     * })
     * 
     */
    create<T extends tbl_rolesCreateArgs>(args: SelectSubset<T, tbl_rolesCreateArgs<ExtArgs>>): Prisma__tbl_rolesClient<$Result.GetResult<Prisma.$tbl_rolesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tbl_roles.
     * @param {tbl_rolesCreateManyArgs} args - Arguments to create many Tbl_roles.
     * @example
     * // Create many Tbl_roles
     * const tbl_roles = await prisma.tbl_roles.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tbl_rolesCreateManyArgs>(args?: SelectSubset<T, tbl_rolesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tbl_roles and returns the data saved in the database.
     * @param {tbl_rolesCreateManyAndReturnArgs} args - Arguments to create many Tbl_roles.
     * @example
     * // Create many Tbl_roles
     * const tbl_roles = await prisma.tbl_roles.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tbl_roles and only return the `pkid`
     * const tbl_rolesWithPkidOnly = await prisma.tbl_roles.createManyAndReturn({
     *   select: { pkid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends tbl_rolesCreateManyAndReturnArgs>(args?: SelectSubset<T, tbl_rolesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_rolesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tbl_roles.
     * @param {tbl_rolesDeleteArgs} args - Arguments to delete one Tbl_roles.
     * @example
     * // Delete one Tbl_roles
     * const Tbl_roles = await prisma.tbl_roles.delete({
     *   where: {
     *     // ... filter to delete one Tbl_roles
     *   }
     * })
     * 
     */
    delete<T extends tbl_rolesDeleteArgs>(args: SelectSubset<T, tbl_rolesDeleteArgs<ExtArgs>>): Prisma__tbl_rolesClient<$Result.GetResult<Prisma.$tbl_rolesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tbl_roles.
     * @param {tbl_rolesUpdateArgs} args - Arguments to update one Tbl_roles.
     * @example
     * // Update one Tbl_roles
     * const tbl_roles = await prisma.tbl_roles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tbl_rolesUpdateArgs>(args: SelectSubset<T, tbl_rolesUpdateArgs<ExtArgs>>): Prisma__tbl_rolesClient<$Result.GetResult<Prisma.$tbl_rolesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tbl_roles.
     * @param {tbl_rolesDeleteManyArgs} args - Arguments to filter Tbl_roles to delete.
     * @example
     * // Delete a few Tbl_roles
     * const { count } = await prisma.tbl_roles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tbl_rolesDeleteManyArgs>(args?: SelectSubset<T, tbl_rolesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tbl_roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_rolesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tbl_roles
     * const tbl_roles = await prisma.tbl_roles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tbl_rolesUpdateManyArgs>(args: SelectSubset<T, tbl_rolesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tbl_roles and returns the data updated in the database.
     * @param {tbl_rolesUpdateManyAndReturnArgs} args - Arguments to update many Tbl_roles.
     * @example
     * // Update many Tbl_roles
     * const tbl_roles = await prisma.tbl_roles.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tbl_roles and only return the `pkid`
     * const tbl_rolesWithPkidOnly = await prisma.tbl_roles.updateManyAndReturn({
     *   select: { pkid: true },
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
    updateManyAndReturn<T extends tbl_rolesUpdateManyAndReturnArgs>(args: SelectSubset<T, tbl_rolesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_rolesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tbl_roles.
     * @param {tbl_rolesUpsertArgs} args - Arguments to update or create a Tbl_roles.
     * @example
     * // Update or create a Tbl_roles
     * const tbl_roles = await prisma.tbl_roles.upsert({
     *   create: {
     *     // ... data to create a Tbl_roles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tbl_roles we want to update
     *   }
     * })
     */
    upsert<T extends tbl_rolesUpsertArgs>(args: SelectSubset<T, tbl_rolesUpsertArgs<ExtArgs>>): Prisma__tbl_rolesClient<$Result.GetResult<Prisma.$tbl_rolesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tbl_roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_rolesCountArgs} args - Arguments to filter Tbl_roles to count.
     * @example
     * // Count the number of Tbl_roles
     * const count = await prisma.tbl_roles.count({
     *   where: {
     *     // ... the filter for the Tbl_roles we want to count
     *   }
     * })
    **/
    count<T extends tbl_rolesCountArgs>(
      args?: Subset<T, tbl_rolesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tbl_rolesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tbl_roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tbl_rolesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tbl_rolesAggregateArgs>(args: Subset<T, Tbl_rolesAggregateArgs>): Prisma.PrismaPromise<GetTbl_rolesAggregateType<T>>

    /**
     * Group by Tbl_roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_rolesGroupByArgs} args - Group by arguments.
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
      T extends tbl_rolesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tbl_rolesGroupByArgs['orderBy'] }
        : { orderBy?: tbl_rolesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tbl_rolesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTbl_rolesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tbl_roles model
   */
  readonly fields: tbl_rolesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tbl_roles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tbl_rolesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuarios<T extends tbl_roles$usuariosArgs<ExtArgs> = {}>(args?: Subset<T, tbl_roles$usuariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_usuariosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the tbl_roles model
   */
  interface tbl_rolesFieldRefs {
    readonly pkid: FieldRef<"tbl_roles", 'BigInt'>
    readonly nombre: FieldRef<"tbl_roles", 'String'>
    readonly nomenclatura: FieldRef<"tbl_roles", 'String'>
  }
    

  // Custom InputTypes
  /**
   * tbl_roles findUnique
   */
  export type tbl_rolesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_roles
     */
    select?: tbl_rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_roles
     */
    omit?: tbl_rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_rolesInclude<ExtArgs> | null
    /**
     * Filter, which tbl_roles to fetch.
     */
    where: tbl_rolesWhereUniqueInput
  }

  /**
   * tbl_roles findUniqueOrThrow
   */
  export type tbl_rolesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_roles
     */
    select?: tbl_rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_roles
     */
    omit?: tbl_rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_rolesInclude<ExtArgs> | null
    /**
     * Filter, which tbl_roles to fetch.
     */
    where: tbl_rolesWhereUniqueInput
  }

  /**
   * tbl_roles findFirst
   */
  export type tbl_rolesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_roles
     */
    select?: tbl_rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_roles
     */
    omit?: tbl_rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_rolesInclude<ExtArgs> | null
    /**
     * Filter, which tbl_roles to fetch.
     */
    where?: tbl_rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_roles to fetch.
     */
    orderBy?: tbl_rolesOrderByWithRelationInput | tbl_rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_roles.
     */
    cursor?: tbl_rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_roles.
     */
    distinct?: Tbl_rolesScalarFieldEnum | Tbl_rolesScalarFieldEnum[]
  }

  /**
   * tbl_roles findFirstOrThrow
   */
  export type tbl_rolesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_roles
     */
    select?: tbl_rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_roles
     */
    omit?: tbl_rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_rolesInclude<ExtArgs> | null
    /**
     * Filter, which tbl_roles to fetch.
     */
    where?: tbl_rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_roles to fetch.
     */
    orderBy?: tbl_rolesOrderByWithRelationInput | tbl_rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_roles.
     */
    cursor?: tbl_rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_roles.
     */
    distinct?: Tbl_rolesScalarFieldEnum | Tbl_rolesScalarFieldEnum[]
  }

  /**
   * tbl_roles findMany
   */
  export type tbl_rolesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_roles
     */
    select?: tbl_rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_roles
     */
    omit?: tbl_rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_rolesInclude<ExtArgs> | null
    /**
     * Filter, which tbl_roles to fetch.
     */
    where?: tbl_rolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_roles to fetch.
     */
    orderBy?: tbl_rolesOrderByWithRelationInput | tbl_rolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tbl_roles.
     */
    cursor?: tbl_rolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_roles.
     */
    skip?: number
    distinct?: Tbl_rolesScalarFieldEnum | Tbl_rolesScalarFieldEnum[]
  }

  /**
   * tbl_roles create
   */
  export type tbl_rolesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_roles
     */
    select?: tbl_rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_roles
     */
    omit?: tbl_rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_rolesInclude<ExtArgs> | null
    /**
     * The data needed to create a tbl_roles.
     */
    data: XOR<tbl_rolesCreateInput, tbl_rolesUncheckedCreateInput>
  }

  /**
   * tbl_roles createMany
   */
  export type tbl_rolesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tbl_roles.
     */
    data: tbl_rolesCreateManyInput | tbl_rolesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tbl_roles createManyAndReturn
   */
  export type tbl_rolesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_roles
     */
    select?: tbl_rolesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_roles
     */
    omit?: tbl_rolesOmit<ExtArgs> | null
    /**
     * The data used to create many tbl_roles.
     */
    data: tbl_rolesCreateManyInput | tbl_rolesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tbl_roles update
   */
  export type tbl_rolesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_roles
     */
    select?: tbl_rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_roles
     */
    omit?: tbl_rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_rolesInclude<ExtArgs> | null
    /**
     * The data needed to update a tbl_roles.
     */
    data: XOR<tbl_rolesUpdateInput, tbl_rolesUncheckedUpdateInput>
    /**
     * Choose, which tbl_roles to update.
     */
    where: tbl_rolesWhereUniqueInput
  }

  /**
   * tbl_roles updateMany
   */
  export type tbl_rolesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tbl_roles.
     */
    data: XOR<tbl_rolesUpdateManyMutationInput, tbl_rolesUncheckedUpdateManyInput>
    /**
     * Filter which tbl_roles to update
     */
    where?: tbl_rolesWhereInput
    /**
     * Limit how many tbl_roles to update.
     */
    limit?: number
  }

  /**
   * tbl_roles updateManyAndReturn
   */
  export type tbl_rolesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_roles
     */
    select?: tbl_rolesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_roles
     */
    omit?: tbl_rolesOmit<ExtArgs> | null
    /**
     * The data used to update tbl_roles.
     */
    data: XOR<tbl_rolesUpdateManyMutationInput, tbl_rolesUncheckedUpdateManyInput>
    /**
     * Filter which tbl_roles to update
     */
    where?: tbl_rolesWhereInput
    /**
     * Limit how many tbl_roles to update.
     */
    limit?: number
  }

  /**
   * tbl_roles upsert
   */
  export type tbl_rolesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_roles
     */
    select?: tbl_rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_roles
     */
    omit?: tbl_rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_rolesInclude<ExtArgs> | null
    /**
     * The filter to search for the tbl_roles to update in case it exists.
     */
    where: tbl_rolesWhereUniqueInput
    /**
     * In case the tbl_roles found by the `where` argument doesn't exist, create a new tbl_roles with this data.
     */
    create: XOR<tbl_rolesCreateInput, tbl_rolesUncheckedCreateInput>
    /**
     * In case the tbl_roles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tbl_rolesUpdateInput, tbl_rolesUncheckedUpdateInput>
  }

  /**
   * tbl_roles delete
   */
  export type tbl_rolesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_roles
     */
    select?: tbl_rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_roles
     */
    omit?: tbl_rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_rolesInclude<ExtArgs> | null
    /**
     * Filter which tbl_roles to delete.
     */
    where: tbl_rolesWhereUniqueInput
  }

  /**
   * tbl_roles deleteMany
   */
  export type tbl_rolesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_roles to delete
     */
    where?: tbl_rolesWhereInput
    /**
     * Limit how many tbl_roles to delete.
     */
    limit?: number
  }

  /**
   * tbl_roles.usuarios
   */
  export type tbl_roles$usuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_usuarios
     */
    select?: tbl_usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_usuarios
     */
    omit?: tbl_usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_usuariosInclude<ExtArgs> | null
    where?: tbl_usuariosWhereInput
    orderBy?: tbl_usuariosOrderByWithRelationInput | tbl_usuariosOrderByWithRelationInput[]
    cursor?: tbl_usuariosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tbl_usuariosScalarFieldEnum | Tbl_usuariosScalarFieldEnum[]
  }

  /**
   * tbl_roles without action
   */
  export type tbl_rolesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_roles
     */
    select?: tbl_rolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_roles
     */
    omit?: tbl_rolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_rolesInclude<ExtArgs> | null
  }


  /**
   * Model tbl_comercios
   */

  export type AggregateTbl_comercios = {
    _count: Tbl_comerciosCountAggregateOutputType | null
    _avg: Tbl_comerciosAvgAggregateOutputType | null
    _sum: Tbl_comerciosSumAggregateOutputType | null
    _min: Tbl_comerciosMinAggregateOutputType | null
    _max: Tbl_comerciosMaxAggregateOutputType | null
  }

  export type Tbl_comerciosAvgAggregateOutputType = {
    pkid: number | null
  }

  export type Tbl_comerciosSumAggregateOutputType = {
    pkid: bigint | null
  }

  export type Tbl_comerciosMinAggregateOutputType = {
    pkid: bigint | null
    nombre: string | null
    telefono: string | null
    correo: string | null
    fkusuario_tbl_usuarios: string | null
  }

  export type Tbl_comerciosMaxAggregateOutputType = {
    pkid: bigint | null
    nombre: string | null
    telefono: string | null
    correo: string | null
    fkusuario_tbl_usuarios: string | null
  }

  export type Tbl_comerciosCountAggregateOutputType = {
    pkid: number
    nombre: number
    telefono: number
    correo: number
    fkusuario_tbl_usuarios: number
    _all: number
  }


  export type Tbl_comerciosAvgAggregateInputType = {
    pkid?: true
  }

  export type Tbl_comerciosSumAggregateInputType = {
    pkid?: true
  }

  export type Tbl_comerciosMinAggregateInputType = {
    pkid?: true
    nombre?: true
    telefono?: true
    correo?: true
    fkusuario_tbl_usuarios?: true
  }

  export type Tbl_comerciosMaxAggregateInputType = {
    pkid?: true
    nombre?: true
    telefono?: true
    correo?: true
    fkusuario_tbl_usuarios?: true
  }

  export type Tbl_comerciosCountAggregateInputType = {
    pkid?: true
    nombre?: true
    telefono?: true
    correo?: true
    fkusuario_tbl_usuarios?: true
    _all?: true
  }

  export type Tbl_comerciosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_comercios to aggregate.
     */
    where?: tbl_comerciosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_comercios to fetch.
     */
    orderBy?: tbl_comerciosOrderByWithRelationInput | tbl_comerciosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tbl_comerciosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_comercios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_comercios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tbl_comercios
    **/
    _count?: true | Tbl_comerciosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tbl_comerciosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tbl_comerciosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tbl_comerciosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tbl_comerciosMaxAggregateInputType
  }

  export type GetTbl_comerciosAggregateType<T extends Tbl_comerciosAggregateArgs> = {
        [P in keyof T & keyof AggregateTbl_comercios]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTbl_comercios[P]>
      : GetScalarType<T[P], AggregateTbl_comercios[P]>
  }




  export type tbl_comerciosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_comerciosWhereInput
    orderBy?: tbl_comerciosOrderByWithAggregationInput | tbl_comerciosOrderByWithAggregationInput[]
    by: Tbl_comerciosScalarFieldEnum[] | Tbl_comerciosScalarFieldEnum
    having?: tbl_comerciosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tbl_comerciosCountAggregateInputType | true
    _avg?: Tbl_comerciosAvgAggregateInputType
    _sum?: Tbl_comerciosSumAggregateInputType
    _min?: Tbl_comerciosMinAggregateInputType
    _max?: Tbl_comerciosMaxAggregateInputType
  }

  export type Tbl_comerciosGroupByOutputType = {
    pkid: bigint
    nombre: string
    telefono: string
    correo: string
    fkusuario_tbl_usuarios: string | null
    _count: Tbl_comerciosCountAggregateOutputType | null
    _avg: Tbl_comerciosAvgAggregateOutputType | null
    _sum: Tbl_comerciosSumAggregateOutputType | null
    _min: Tbl_comerciosMinAggregateOutputType | null
    _max: Tbl_comerciosMaxAggregateOutputType | null
  }

  type GetTbl_comerciosGroupByPayload<T extends tbl_comerciosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tbl_comerciosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tbl_comerciosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tbl_comerciosGroupByOutputType[P]>
            : GetScalarType<T[P], Tbl_comerciosGroupByOutputType[P]>
        }
      >
    >


  export type tbl_comerciosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pkid?: boolean
    nombre?: boolean
    telefono?: boolean
    correo?: boolean
    fkusuario_tbl_usuarios?: boolean
    usuarios?: boolean | tbl_comercios$usuariosArgs<ExtArgs>
    campanias?: boolean | tbl_comercios$campaniasArgs<ExtArgs>
    clientes?: boolean | tbl_comercios$clientesArgs<ExtArgs>
    _count?: boolean | Tbl_comerciosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tbl_comercios"]>

  export type tbl_comerciosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pkid?: boolean
    nombre?: boolean
    telefono?: boolean
    correo?: boolean
    fkusuario_tbl_usuarios?: boolean
    usuarios?: boolean | tbl_comercios$usuariosArgs<ExtArgs>
  }, ExtArgs["result"]["tbl_comercios"]>

  export type tbl_comerciosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pkid?: boolean
    nombre?: boolean
    telefono?: boolean
    correo?: boolean
    fkusuario_tbl_usuarios?: boolean
    usuarios?: boolean | tbl_comercios$usuariosArgs<ExtArgs>
  }, ExtArgs["result"]["tbl_comercios"]>

  export type tbl_comerciosSelectScalar = {
    pkid?: boolean
    nombre?: boolean
    telefono?: boolean
    correo?: boolean
    fkusuario_tbl_usuarios?: boolean
  }

  export type tbl_comerciosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"pkid" | "nombre" | "telefono" | "correo" | "fkusuario_tbl_usuarios", ExtArgs["result"]["tbl_comercios"]>
  export type tbl_comerciosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | tbl_comercios$usuariosArgs<ExtArgs>
    campanias?: boolean | tbl_comercios$campaniasArgs<ExtArgs>
    clientes?: boolean | tbl_comercios$clientesArgs<ExtArgs>
    _count?: boolean | Tbl_comerciosCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type tbl_comerciosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | tbl_comercios$usuariosArgs<ExtArgs>
  }
  export type tbl_comerciosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarios?: boolean | tbl_comercios$usuariosArgs<ExtArgs>
  }

  export type $tbl_comerciosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tbl_comercios"
    objects: {
      usuarios: Prisma.$tbl_usuariosPayload<ExtArgs> | null
      campanias: Prisma.$tbl_campaniasPayload<ExtArgs>[]
      clientes: Prisma.$tbl_clientesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      pkid: bigint
      nombre: string
      telefono: string
      correo: string
      fkusuario_tbl_usuarios: string | null
    }, ExtArgs["result"]["tbl_comercios"]>
    composites: {}
  }

  type tbl_comerciosGetPayload<S extends boolean | null | undefined | tbl_comerciosDefaultArgs> = $Result.GetResult<Prisma.$tbl_comerciosPayload, S>

  type tbl_comerciosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tbl_comerciosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tbl_comerciosCountAggregateInputType | true
    }

  export interface tbl_comerciosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tbl_comercios'], meta: { name: 'tbl_comercios' } }
    /**
     * Find zero or one Tbl_comercios that matches the filter.
     * @param {tbl_comerciosFindUniqueArgs} args - Arguments to find a Tbl_comercios
     * @example
     * // Get one Tbl_comercios
     * const tbl_comercios = await prisma.tbl_comercios.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tbl_comerciosFindUniqueArgs>(args: SelectSubset<T, tbl_comerciosFindUniqueArgs<ExtArgs>>): Prisma__tbl_comerciosClient<$Result.GetResult<Prisma.$tbl_comerciosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tbl_comercios that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tbl_comerciosFindUniqueOrThrowArgs} args - Arguments to find a Tbl_comercios
     * @example
     * // Get one Tbl_comercios
     * const tbl_comercios = await prisma.tbl_comercios.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tbl_comerciosFindUniqueOrThrowArgs>(args: SelectSubset<T, tbl_comerciosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tbl_comerciosClient<$Result.GetResult<Prisma.$tbl_comerciosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_comercios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_comerciosFindFirstArgs} args - Arguments to find a Tbl_comercios
     * @example
     * // Get one Tbl_comercios
     * const tbl_comercios = await prisma.tbl_comercios.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tbl_comerciosFindFirstArgs>(args?: SelectSubset<T, tbl_comerciosFindFirstArgs<ExtArgs>>): Prisma__tbl_comerciosClient<$Result.GetResult<Prisma.$tbl_comerciosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_comercios that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_comerciosFindFirstOrThrowArgs} args - Arguments to find a Tbl_comercios
     * @example
     * // Get one Tbl_comercios
     * const tbl_comercios = await prisma.tbl_comercios.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tbl_comerciosFindFirstOrThrowArgs>(args?: SelectSubset<T, tbl_comerciosFindFirstOrThrowArgs<ExtArgs>>): Prisma__tbl_comerciosClient<$Result.GetResult<Prisma.$tbl_comerciosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tbl_comercios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_comerciosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tbl_comercios
     * const tbl_comercios = await prisma.tbl_comercios.findMany()
     * 
     * // Get first 10 Tbl_comercios
     * const tbl_comercios = await prisma.tbl_comercios.findMany({ take: 10 })
     * 
     * // Only select the `pkid`
     * const tbl_comerciosWithPkidOnly = await prisma.tbl_comercios.findMany({ select: { pkid: true } })
     * 
     */
    findMany<T extends tbl_comerciosFindManyArgs>(args?: SelectSubset<T, tbl_comerciosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_comerciosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tbl_comercios.
     * @param {tbl_comerciosCreateArgs} args - Arguments to create a Tbl_comercios.
     * @example
     * // Create one Tbl_comercios
     * const Tbl_comercios = await prisma.tbl_comercios.create({
     *   data: {
     *     // ... data to create a Tbl_comercios
     *   }
     * })
     * 
     */
    create<T extends tbl_comerciosCreateArgs>(args: SelectSubset<T, tbl_comerciosCreateArgs<ExtArgs>>): Prisma__tbl_comerciosClient<$Result.GetResult<Prisma.$tbl_comerciosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tbl_comercios.
     * @param {tbl_comerciosCreateManyArgs} args - Arguments to create many Tbl_comercios.
     * @example
     * // Create many Tbl_comercios
     * const tbl_comercios = await prisma.tbl_comercios.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tbl_comerciosCreateManyArgs>(args?: SelectSubset<T, tbl_comerciosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tbl_comercios and returns the data saved in the database.
     * @param {tbl_comerciosCreateManyAndReturnArgs} args - Arguments to create many Tbl_comercios.
     * @example
     * // Create many Tbl_comercios
     * const tbl_comercios = await prisma.tbl_comercios.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tbl_comercios and only return the `pkid`
     * const tbl_comerciosWithPkidOnly = await prisma.tbl_comercios.createManyAndReturn({
     *   select: { pkid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends tbl_comerciosCreateManyAndReturnArgs>(args?: SelectSubset<T, tbl_comerciosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_comerciosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tbl_comercios.
     * @param {tbl_comerciosDeleteArgs} args - Arguments to delete one Tbl_comercios.
     * @example
     * // Delete one Tbl_comercios
     * const Tbl_comercios = await prisma.tbl_comercios.delete({
     *   where: {
     *     // ... filter to delete one Tbl_comercios
     *   }
     * })
     * 
     */
    delete<T extends tbl_comerciosDeleteArgs>(args: SelectSubset<T, tbl_comerciosDeleteArgs<ExtArgs>>): Prisma__tbl_comerciosClient<$Result.GetResult<Prisma.$tbl_comerciosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tbl_comercios.
     * @param {tbl_comerciosUpdateArgs} args - Arguments to update one Tbl_comercios.
     * @example
     * // Update one Tbl_comercios
     * const tbl_comercios = await prisma.tbl_comercios.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tbl_comerciosUpdateArgs>(args: SelectSubset<T, tbl_comerciosUpdateArgs<ExtArgs>>): Prisma__tbl_comerciosClient<$Result.GetResult<Prisma.$tbl_comerciosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tbl_comercios.
     * @param {tbl_comerciosDeleteManyArgs} args - Arguments to filter Tbl_comercios to delete.
     * @example
     * // Delete a few Tbl_comercios
     * const { count } = await prisma.tbl_comercios.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tbl_comerciosDeleteManyArgs>(args?: SelectSubset<T, tbl_comerciosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tbl_comercios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_comerciosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tbl_comercios
     * const tbl_comercios = await prisma.tbl_comercios.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tbl_comerciosUpdateManyArgs>(args: SelectSubset<T, tbl_comerciosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tbl_comercios and returns the data updated in the database.
     * @param {tbl_comerciosUpdateManyAndReturnArgs} args - Arguments to update many Tbl_comercios.
     * @example
     * // Update many Tbl_comercios
     * const tbl_comercios = await prisma.tbl_comercios.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tbl_comercios and only return the `pkid`
     * const tbl_comerciosWithPkidOnly = await prisma.tbl_comercios.updateManyAndReturn({
     *   select: { pkid: true },
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
    updateManyAndReturn<T extends tbl_comerciosUpdateManyAndReturnArgs>(args: SelectSubset<T, tbl_comerciosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_comerciosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tbl_comercios.
     * @param {tbl_comerciosUpsertArgs} args - Arguments to update or create a Tbl_comercios.
     * @example
     * // Update or create a Tbl_comercios
     * const tbl_comercios = await prisma.tbl_comercios.upsert({
     *   create: {
     *     // ... data to create a Tbl_comercios
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tbl_comercios we want to update
     *   }
     * })
     */
    upsert<T extends tbl_comerciosUpsertArgs>(args: SelectSubset<T, tbl_comerciosUpsertArgs<ExtArgs>>): Prisma__tbl_comerciosClient<$Result.GetResult<Prisma.$tbl_comerciosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tbl_comercios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_comerciosCountArgs} args - Arguments to filter Tbl_comercios to count.
     * @example
     * // Count the number of Tbl_comercios
     * const count = await prisma.tbl_comercios.count({
     *   where: {
     *     // ... the filter for the Tbl_comercios we want to count
     *   }
     * })
    **/
    count<T extends tbl_comerciosCountArgs>(
      args?: Subset<T, tbl_comerciosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tbl_comerciosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tbl_comercios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tbl_comerciosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tbl_comerciosAggregateArgs>(args: Subset<T, Tbl_comerciosAggregateArgs>): Prisma.PrismaPromise<GetTbl_comerciosAggregateType<T>>

    /**
     * Group by Tbl_comercios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_comerciosGroupByArgs} args - Group by arguments.
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
      T extends tbl_comerciosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tbl_comerciosGroupByArgs['orderBy'] }
        : { orderBy?: tbl_comerciosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tbl_comerciosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTbl_comerciosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tbl_comercios model
   */
  readonly fields: tbl_comerciosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tbl_comercios.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tbl_comerciosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuarios<T extends tbl_comercios$usuariosArgs<ExtArgs> = {}>(args?: Subset<T, tbl_comercios$usuariosArgs<ExtArgs>>): Prisma__tbl_usuariosClient<$Result.GetResult<Prisma.$tbl_usuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    campanias<T extends tbl_comercios$campaniasArgs<ExtArgs> = {}>(args?: Subset<T, tbl_comercios$campaniasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_campaniasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    clientes<T extends tbl_comercios$clientesArgs<ExtArgs> = {}>(args?: Subset<T, tbl_comercios$clientesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_clientesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the tbl_comercios model
   */
  interface tbl_comerciosFieldRefs {
    readonly pkid: FieldRef<"tbl_comercios", 'BigInt'>
    readonly nombre: FieldRef<"tbl_comercios", 'String'>
    readonly telefono: FieldRef<"tbl_comercios", 'String'>
    readonly correo: FieldRef<"tbl_comercios", 'String'>
    readonly fkusuario_tbl_usuarios: FieldRef<"tbl_comercios", 'String'>
  }
    

  // Custom InputTypes
  /**
   * tbl_comercios findUnique
   */
  export type tbl_comerciosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_comercios
     */
    select?: tbl_comerciosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_comercios
     */
    omit?: tbl_comerciosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_comerciosInclude<ExtArgs> | null
    /**
     * Filter, which tbl_comercios to fetch.
     */
    where: tbl_comerciosWhereUniqueInput
  }

  /**
   * tbl_comercios findUniqueOrThrow
   */
  export type tbl_comerciosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_comercios
     */
    select?: tbl_comerciosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_comercios
     */
    omit?: tbl_comerciosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_comerciosInclude<ExtArgs> | null
    /**
     * Filter, which tbl_comercios to fetch.
     */
    where: tbl_comerciosWhereUniqueInput
  }

  /**
   * tbl_comercios findFirst
   */
  export type tbl_comerciosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_comercios
     */
    select?: tbl_comerciosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_comercios
     */
    omit?: tbl_comerciosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_comerciosInclude<ExtArgs> | null
    /**
     * Filter, which tbl_comercios to fetch.
     */
    where?: tbl_comerciosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_comercios to fetch.
     */
    orderBy?: tbl_comerciosOrderByWithRelationInput | tbl_comerciosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_comercios.
     */
    cursor?: tbl_comerciosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_comercios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_comercios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_comercios.
     */
    distinct?: Tbl_comerciosScalarFieldEnum | Tbl_comerciosScalarFieldEnum[]
  }

  /**
   * tbl_comercios findFirstOrThrow
   */
  export type tbl_comerciosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_comercios
     */
    select?: tbl_comerciosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_comercios
     */
    omit?: tbl_comerciosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_comerciosInclude<ExtArgs> | null
    /**
     * Filter, which tbl_comercios to fetch.
     */
    where?: tbl_comerciosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_comercios to fetch.
     */
    orderBy?: tbl_comerciosOrderByWithRelationInput | tbl_comerciosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_comercios.
     */
    cursor?: tbl_comerciosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_comercios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_comercios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_comercios.
     */
    distinct?: Tbl_comerciosScalarFieldEnum | Tbl_comerciosScalarFieldEnum[]
  }

  /**
   * tbl_comercios findMany
   */
  export type tbl_comerciosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_comercios
     */
    select?: tbl_comerciosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_comercios
     */
    omit?: tbl_comerciosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_comerciosInclude<ExtArgs> | null
    /**
     * Filter, which tbl_comercios to fetch.
     */
    where?: tbl_comerciosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_comercios to fetch.
     */
    orderBy?: tbl_comerciosOrderByWithRelationInput | tbl_comerciosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tbl_comercios.
     */
    cursor?: tbl_comerciosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_comercios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_comercios.
     */
    skip?: number
    distinct?: Tbl_comerciosScalarFieldEnum | Tbl_comerciosScalarFieldEnum[]
  }

  /**
   * tbl_comercios create
   */
  export type tbl_comerciosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_comercios
     */
    select?: tbl_comerciosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_comercios
     */
    omit?: tbl_comerciosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_comerciosInclude<ExtArgs> | null
    /**
     * The data needed to create a tbl_comercios.
     */
    data: XOR<tbl_comerciosCreateInput, tbl_comerciosUncheckedCreateInput>
  }

  /**
   * tbl_comercios createMany
   */
  export type tbl_comerciosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tbl_comercios.
     */
    data: tbl_comerciosCreateManyInput | tbl_comerciosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tbl_comercios createManyAndReturn
   */
  export type tbl_comerciosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_comercios
     */
    select?: tbl_comerciosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_comercios
     */
    omit?: tbl_comerciosOmit<ExtArgs> | null
    /**
     * The data used to create many tbl_comercios.
     */
    data: tbl_comerciosCreateManyInput | tbl_comerciosCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_comerciosIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * tbl_comercios update
   */
  export type tbl_comerciosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_comercios
     */
    select?: tbl_comerciosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_comercios
     */
    omit?: tbl_comerciosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_comerciosInclude<ExtArgs> | null
    /**
     * The data needed to update a tbl_comercios.
     */
    data: XOR<tbl_comerciosUpdateInput, tbl_comerciosUncheckedUpdateInput>
    /**
     * Choose, which tbl_comercios to update.
     */
    where: tbl_comerciosWhereUniqueInput
  }

  /**
   * tbl_comercios updateMany
   */
  export type tbl_comerciosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tbl_comercios.
     */
    data: XOR<tbl_comerciosUpdateManyMutationInput, tbl_comerciosUncheckedUpdateManyInput>
    /**
     * Filter which tbl_comercios to update
     */
    where?: tbl_comerciosWhereInput
    /**
     * Limit how many tbl_comercios to update.
     */
    limit?: number
  }

  /**
   * tbl_comercios updateManyAndReturn
   */
  export type tbl_comerciosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_comercios
     */
    select?: tbl_comerciosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_comercios
     */
    omit?: tbl_comerciosOmit<ExtArgs> | null
    /**
     * The data used to update tbl_comercios.
     */
    data: XOR<tbl_comerciosUpdateManyMutationInput, tbl_comerciosUncheckedUpdateManyInput>
    /**
     * Filter which tbl_comercios to update
     */
    where?: tbl_comerciosWhereInput
    /**
     * Limit how many tbl_comercios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_comerciosIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * tbl_comercios upsert
   */
  export type tbl_comerciosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_comercios
     */
    select?: tbl_comerciosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_comercios
     */
    omit?: tbl_comerciosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_comerciosInclude<ExtArgs> | null
    /**
     * The filter to search for the tbl_comercios to update in case it exists.
     */
    where: tbl_comerciosWhereUniqueInput
    /**
     * In case the tbl_comercios found by the `where` argument doesn't exist, create a new tbl_comercios with this data.
     */
    create: XOR<tbl_comerciosCreateInput, tbl_comerciosUncheckedCreateInput>
    /**
     * In case the tbl_comercios was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tbl_comerciosUpdateInput, tbl_comerciosUncheckedUpdateInput>
  }

  /**
   * tbl_comercios delete
   */
  export type tbl_comerciosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_comercios
     */
    select?: tbl_comerciosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_comercios
     */
    omit?: tbl_comerciosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_comerciosInclude<ExtArgs> | null
    /**
     * Filter which tbl_comercios to delete.
     */
    where: tbl_comerciosWhereUniqueInput
  }

  /**
   * tbl_comercios deleteMany
   */
  export type tbl_comerciosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_comercios to delete
     */
    where?: tbl_comerciosWhereInput
    /**
     * Limit how many tbl_comercios to delete.
     */
    limit?: number
  }

  /**
   * tbl_comercios.usuarios
   */
  export type tbl_comercios$usuariosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_usuarios
     */
    select?: tbl_usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_usuarios
     */
    omit?: tbl_usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_usuariosInclude<ExtArgs> | null
    where?: tbl_usuariosWhereInput
  }

  /**
   * tbl_comercios.campanias
   */
  export type tbl_comercios$campaniasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_campanias
     */
    select?: tbl_campaniasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_campanias
     */
    omit?: tbl_campaniasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_campaniasInclude<ExtArgs> | null
    where?: tbl_campaniasWhereInput
    orderBy?: tbl_campaniasOrderByWithRelationInput | tbl_campaniasOrderByWithRelationInput[]
    cursor?: tbl_campaniasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tbl_campaniasScalarFieldEnum | Tbl_campaniasScalarFieldEnum[]
  }

  /**
   * tbl_comercios.clientes
   */
  export type tbl_comercios$clientesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_clientes
     */
    select?: tbl_clientesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_clientes
     */
    omit?: tbl_clientesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_clientesInclude<ExtArgs> | null
    where?: tbl_clientesWhereInput
    orderBy?: tbl_clientesOrderByWithRelationInput | tbl_clientesOrderByWithRelationInput[]
    cursor?: tbl_clientesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tbl_clientesScalarFieldEnum | Tbl_clientesScalarFieldEnum[]
  }

  /**
   * tbl_comercios without action
   */
  export type tbl_comerciosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_comercios
     */
    select?: tbl_comerciosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_comercios
     */
    omit?: tbl_comerciosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_comerciosInclude<ExtArgs> | null
  }


  /**
   * Model tbl_transportadoras
   */

  export type AggregateTbl_transportadoras = {
    _count: Tbl_transportadorasCountAggregateOutputType | null
    _avg: Tbl_transportadorasAvgAggregateOutputType | null
    _sum: Tbl_transportadorasSumAggregateOutputType | null
    _min: Tbl_transportadorasMinAggregateOutputType | null
    _max: Tbl_transportadorasMaxAggregateOutputType | null
  }

  export type Tbl_transportadorasAvgAggregateOutputType = {
    pkid: number | null
  }

  export type Tbl_transportadorasSumAggregateOutputType = {
    pkid: bigint | null
  }

  export type Tbl_transportadorasMinAggregateOutputType = {
    pkid: bigint | null
    nombre: string | null
    nomenclatura: string | null
  }

  export type Tbl_transportadorasMaxAggregateOutputType = {
    pkid: bigint | null
    nombre: string | null
    nomenclatura: string | null
  }

  export type Tbl_transportadorasCountAggregateOutputType = {
    pkid: number
    nombre: number
    nomenclatura: number
    _all: number
  }


  export type Tbl_transportadorasAvgAggregateInputType = {
    pkid?: true
  }

  export type Tbl_transportadorasSumAggregateInputType = {
    pkid?: true
  }

  export type Tbl_transportadorasMinAggregateInputType = {
    pkid?: true
    nombre?: true
    nomenclatura?: true
  }

  export type Tbl_transportadorasMaxAggregateInputType = {
    pkid?: true
    nombre?: true
    nomenclatura?: true
  }

  export type Tbl_transportadorasCountAggregateInputType = {
    pkid?: true
    nombre?: true
    nomenclatura?: true
    _all?: true
  }

  export type Tbl_transportadorasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_transportadoras to aggregate.
     */
    where?: tbl_transportadorasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_transportadoras to fetch.
     */
    orderBy?: tbl_transportadorasOrderByWithRelationInput | tbl_transportadorasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tbl_transportadorasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_transportadoras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_transportadoras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tbl_transportadoras
    **/
    _count?: true | Tbl_transportadorasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tbl_transportadorasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tbl_transportadorasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tbl_transportadorasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tbl_transportadorasMaxAggregateInputType
  }

  export type GetTbl_transportadorasAggregateType<T extends Tbl_transportadorasAggregateArgs> = {
        [P in keyof T & keyof AggregateTbl_transportadoras]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTbl_transportadoras[P]>
      : GetScalarType<T[P], AggregateTbl_transportadoras[P]>
  }




  export type tbl_transportadorasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_transportadorasWhereInput
    orderBy?: tbl_transportadorasOrderByWithAggregationInput | tbl_transportadorasOrderByWithAggregationInput[]
    by: Tbl_transportadorasScalarFieldEnum[] | Tbl_transportadorasScalarFieldEnum
    having?: tbl_transportadorasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tbl_transportadorasCountAggregateInputType | true
    _avg?: Tbl_transportadorasAvgAggregateInputType
    _sum?: Tbl_transportadorasSumAggregateInputType
    _min?: Tbl_transportadorasMinAggregateInputType
    _max?: Tbl_transportadorasMaxAggregateInputType
  }

  export type Tbl_transportadorasGroupByOutputType = {
    pkid: bigint
    nombre: string
    nomenclatura: string
    _count: Tbl_transportadorasCountAggregateOutputType | null
    _avg: Tbl_transportadorasAvgAggregateOutputType | null
    _sum: Tbl_transportadorasSumAggregateOutputType | null
    _min: Tbl_transportadorasMinAggregateOutputType | null
    _max: Tbl_transportadorasMaxAggregateOutputType | null
  }

  type GetTbl_transportadorasGroupByPayload<T extends tbl_transportadorasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tbl_transportadorasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tbl_transportadorasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tbl_transportadorasGroupByOutputType[P]>
            : GetScalarType<T[P], Tbl_transportadorasGroupByOutputType[P]>
        }
      >
    >


  export type tbl_transportadorasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pkid?: boolean
    nombre?: boolean
    nomenclatura?: boolean
    pedidos?: boolean | tbl_transportadoras$pedidosArgs<ExtArgs>
    _count?: boolean | Tbl_transportadorasCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tbl_transportadoras"]>

  export type tbl_transportadorasSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pkid?: boolean
    nombre?: boolean
    nomenclatura?: boolean
  }, ExtArgs["result"]["tbl_transportadoras"]>

  export type tbl_transportadorasSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pkid?: boolean
    nombre?: boolean
    nomenclatura?: boolean
  }, ExtArgs["result"]["tbl_transportadoras"]>

  export type tbl_transportadorasSelectScalar = {
    pkid?: boolean
    nombre?: boolean
    nomenclatura?: boolean
  }

  export type tbl_transportadorasOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"pkid" | "nombre" | "nomenclatura", ExtArgs["result"]["tbl_transportadoras"]>
  export type tbl_transportadorasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pedidos?: boolean | tbl_transportadoras$pedidosArgs<ExtArgs>
    _count?: boolean | Tbl_transportadorasCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type tbl_transportadorasIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type tbl_transportadorasIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $tbl_transportadorasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tbl_transportadoras"
    objects: {
      pedidos: Prisma.$tbl_pedidosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      pkid: bigint
      nombre: string
      nomenclatura: string
    }, ExtArgs["result"]["tbl_transportadoras"]>
    composites: {}
  }

  type tbl_transportadorasGetPayload<S extends boolean | null | undefined | tbl_transportadorasDefaultArgs> = $Result.GetResult<Prisma.$tbl_transportadorasPayload, S>

  type tbl_transportadorasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tbl_transportadorasFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tbl_transportadorasCountAggregateInputType | true
    }

  export interface tbl_transportadorasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tbl_transportadoras'], meta: { name: 'tbl_transportadoras' } }
    /**
     * Find zero or one Tbl_transportadoras that matches the filter.
     * @param {tbl_transportadorasFindUniqueArgs} args - Arguments to find a Tbl_transportadoras
     * @example
     * // Get one Tbl_transportadoras
     * const tbl_transportadoras = await prisma.tbl_transportadoras.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tbl_transportadorasFindUniqueArgs>(args: SelectSubset<T, tbl_transportadorasFindUniqueArgs<ExtArgs>>): Prisma__tbl_transportadorasClient<$Result.GetResult<Prisma.$tbl_transportadorasPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tbl_transportadoras that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tbl_transportadorasFindUniqueOrThrowArgs} args - Arguments to find a Tbl_transportadoras
     * @example
     * // Get one Tbl_transportadoras
     * const tbl_transportadoras = await prisma.tbl_transportadoras.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tbl_transportadorasFindUniqueOrThrowArgs>(args: SelectSubset<T, tbl_transportadorasFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tbl_transportadorasClient<$Result.GetResult<Prisma.$tbl_transportadorasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_transportadoras that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_transportadorasFindFirstArgs} args - Arguments to find a Tbl_transportadoras
     * @example
     * // Get one Tbl_transportadoras
     * const tbl_transportadoras = await prisma.tbl_transportadoras.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tbl_transportadorasFindFirstArgs>(args?: SelectSubset<T, tbl_transportadorasFindFirstArgs<ExtArgs>>): Prisma__tbl_transportadorasClient<$Result.GetResult<Prisma.$tbl_transportadorasPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_transportadoras that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_transportadorasFindFirstOrThrowArgs} args - Arguments to find a Tbl_transportadoras
     * @example
     * // Get one Tbl_transportadoras
     * const tbl_transportadoras = await prisma.tbl_transportadoras.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tbl_transportadorasFindFirstOrThrowArgs>(args?: SelectSubset<T, tbl_transportadorasFindFirstOrThrowArgs<ExtArgs>>): Prisma__tbl_transportadorasClient<$Result.GetResult<Prisma.$tbl_transportadorasPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tbl_transportadoras that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_transportadorasFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tbl_transportadoras
     * const tbl_transportadoras = await prisma.tbl_transportadoras.findMany()
     * 
     * // Get first 10 Tbl_transportadoras
     * const tbl_transportadoras = await prisma.tbl_transportadoras.findMany({ take: 10 })
     * 
     * // Only select the `pkid`
     * const tbl_transportadorasWithPkidOnly = await prisma.tbl_transportadoras.findMany({ select: { pkid: true } })
     * 
     */
    findMany<T extends tbl_transportadorasFindManyArgs>(args?: SelectSubset<T, tbl_transportadorasFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_transportadorasPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tbl_transportadoras.
     * @param {tbl_transportadorasCreateArgs} args - Arguments to create a Tbl_transportadoras.
     * @example
     * // Create one Tbl_transportadoras
     * const Tbl_transportadoras = await prisma.tbl_transportadoras.create({
     *   data: {
     *     // ... data to create a Tbl_transportadoras
     *   }
     * })
     * 
     */
    create<T extends tbl_transportadorasCreateArgs>(args: SelectSubset<T, tbl_transportadorasCreateArgs<ExtArgs>>): Prisma__tbl_transportadorasClient<$Result.GetResult<Prisma.$tbl_transportadorasPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tbl_transportadoras.
     * @param {tbl_transportadorasCreateManyArgs} args - Arguments to create many Tbl_transportadoras.
     * @example
     * // Create many Tbl_transportadoras
     * const tbl_transportadoras = await prisma.tbl_transportadoras.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tbl_transportadorasCreateManyArgs>(args?: SelectSubset<T, tbl_transportadorasCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tbl_transportadoras and returns the data saved in the database.
     * @param {tbl_transportadorasCreateManyAndReturnArgs} args - Arguments to create many Tbl_transportadoras.
     * @example
     * // Create many Tbl_transportadoras
     * const tbl_transportadoras = await prisma.tbl_transportadoras.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tbl_transportadoras and only return the `pkid`
     * const tbl_transportadorasWithPkidOnly = await prisma.tbl_transportadoras.createManyAndReturn({
     *   select: { pkid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends tbl_transportadorasCreateManyAndReturnArgs>(args?: SelectSubset<T, tbl_transportadorasCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_transportadorasPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tbl_transportadoras.
     * @param {tbl_transportadorasDeleteArgs} args - Arguments to delete one Tbl_transportadoras.
     * @example
     * // Delete one Tbl_transportadoras
     * const Tbl_transportadoras = await prisma.tbl_transportadoras.delete({
     *   where: {
     *     // ... filter to delete one Tbl_transportadoras
     *   }
     * })
     * 
     */
    delete<T extends tbl_transportadorasDeleteArgs>(args: SelectSubset<T, tbl_transportadorasDeleteArgs<ExtArgs>>): Prisma__tbl_transportadorasClient<$Result.GetResult<Prisma.$tbl_transportadorasPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tbl_transportadoras.
     * @param {tbl_transportadorasUpdateArgs} args - Arguments to update one Tbl_transportadoras.
     * @example
     * // Update one Tbl_transportadoras
     * const tbl_transportadoras = await prisma.tbl_transportadoras.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tbl_transportadorasUpdateArgs>(args: SelectSubset<T, tbl_transportadorasUpdateArgs<ExtArgs>>): Prisma__tbl_transportadorasClient<$Result.GetResult<Prisma.$tbl_transportadorasPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tbl_transportadoras.
     * @param {tbl_transportadorasDeleteManyArgs} args - Arguments to filter Tbl_transportadoras to delete.
     * @example
     * // Delete a few Tbl_transportadoras
     * const { count } = await prisma.tbl_transportadoras.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tbl_transportadorasDeleteManyArgs>(args?: SelectSubset<T, tbl_transportadorasDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tbl_transportadoras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_transportadorasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tbl_transportadoras
     * const tbl_transportadoras = await prisma.tbl_transportadoras.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tbl_transportadorasUpdateManyArgs>(args: SelectSubset<T, tbl_transportadorasUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tbl_transportadoras and returns the data updated in the database.
     * @param {tbl_transportadorasUpdateManyAndReturnArgs} args - Arguments to update many Tbl_transportadoras.
     * @example
     * // Update many Tbl_transportadoras
     * const tbl_transportadoras = await prisma.tbl_transportadoras.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tbl_transportadoras and only return the `pkid`
     * const tbl_transportadorasWithPkidOnly = await prisma.tbl_transportadoras.updateManyAndReturn({
     *   select: { pkid: true },
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
    updateManyAndReturn<T extends tbl_transportadorasUpdateManyAndReturnArgs>(args: SelectSubset<T, tbl_transportadorasUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_transportadorasPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tbl_transportadoras.
     * @param {tbl_transportadorasUpsertArgs} args - Arguments to update or create a Tbl_transportadoras.
     * @example
     * // Update or create a Tbl_transportadoras
     * const tbl_transportadoras = await prisma.tbl_transportadoras.upsert({
     *   create: {
     *     // ... data to create a Tbl_transportadoras
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tbl_transportadoras we want to update
     *   }
     * })
     */
    upsert<T extends tbl_transportadorasUpsertArgs>(args: SelectSubset<T, tbl_transportadorasUpsertArgs<ExtArgs>>): Prisma__tbl_transportadorasClient<$Result.GetResult<Prisma.$tbl_transportadorasPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tbl_transportadoras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_transportadorasCountArgs} args - Arguments to filter Tbl_transportadoras to count.
     * @example
     * // Count the number of Tbl_transportadoras
     * const count = await prisma.tbl_transportadoras.count({
     *   where: {
     *     // ... the filter for the Tbl_transportadoras we want to count
     *   }
     * })
    **/
    count<T extends tbl_transportadorasCountArgs>(
      args?: Subset<T, tbl_transportadorasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tbl_transportadorasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tbl_transportadoras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tbl_transportadorasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tbl_transportadorasAggregateArgs>(args: Subset<T, Tbl_transportadorasAggregateArgs>): Prisma.PrismaPromise<GetTbl_transportadorasAggregateType<T>>

    /**
     * Group by Tbl_transportadoras.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_transportadorasGroupByArgs} args - Group by arguments.
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
      T extends tbl_transportadorasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tbl_transportadorasGroupByArgs['orderBy'] }
        : { orderBy?: tbl_transportadorasGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tbl_transportadorasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTbl_transportadorasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tbl_transportadoras model
   */
  readonly fields: tbl_transportadorasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tbl_transportadoras.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tbl_transportadorasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pedidos<T extends tbl_transportadoras$pedidosArgs<ExtArgs> = {}>(args?: Subset<T, tbl_transportadoras$pedidosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_pedidosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the tbl_transportadoras model
   */
  interface tbl_transportadorasFieldRefs {
    readonly pkid: FieldRef<"tbl_transportadoras", 'BigInt'>
    readonly nombre: FieldRef<"tbl_transportadoras", 'String'>
    readonly nomenclatura: FieldRef<"tbl_transportadoras", 'String'>
  }
    

  // Custom InputTypes
  /**
   * tbl_transportadoras findUnique
   */
  export type tbl_transportadorasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_transportadoras
     */
    select?: tbl_transportadorasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_transportadoras
     */
    omit?: tbl_transportadorasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_transportadorasInclude<ExtArgs> | null
    /**
     * Filter, which tbl_transportadoras to fetch.
     */
    where: tbl_transportadorasWhereUniqueInput
  }

  /**
   * tbl_transportadoras findUniqueOrThrow
   */
  export type tbl_transportadorasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_transportadoras
     */
    select?: tbl_transportadorasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_transportadoras
     */
    omit?: tbl_transportadorasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_transportadorasInclude<ExtArgs> | null
    /**
     * Filter, which tbl_transportadoras to fetch.
     */
    where: tbl_transportadorasWhereUniqueInput
  }

  /**
   * tbl_transportadoras findFirst
   */
  export type tbl_transportadorasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_transportadoras
     */
    select?: tbl_transportadorasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_transportadoras
     */
    omit?: tbl_transportadorasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_transportadorasInclude<ExtArgs> | null
    /**
     * Filter, which tbl_transportadoras to fetch.
     */
    where?: tbl_transportadorasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_transportadoras to fetch.
     */
    orderBy?: tbl_transportadorasOrderByWithRelationInput | tbl_transportadorasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_transportadoras.
     */
    cursor?: tbl_transportadorasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_transportadoras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_transportadoras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_transportadoras.
     */
    distinct?: Tbl_transportadorasScalarFieldEnum | Tbl_transportadorasScalarFieldEnum[]
  }

  /**
   * tbl_transportadoras findFirstOrThrow
   */
  export type tbl_transportadorasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_transportadoras
     */
    select?: tbl_transportadorasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_transportadoras
     */
    omit?: tbl_transportadorasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_transportadorasInclude<ExtArgs> | null
    /**
     * Filter, which tbl_transportadoras to fetch.
     */
    where?: tbl_transportadorasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_transportadoras to fetch.
     */
    orderBy?: tbl_transportadorasOrderByWithRelationInput | tbl_transportadorasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_transportadoras.
     */
    cursor?: tbl_transportadorasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_transportadoras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_transportadoras.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_transportadoras.
     */
    distinct?: Tbl_transportadorasScalarFieldEnum | Tbl_transportadorasScalarFieldEnum[]
  }

  /**
   * tbl_transportadoras findMany
   */
  export type tbl_transportadorasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_transportadoras
     */
    select?: tbl_transportadorasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_transportadoras
     */
    omit?: tbl_transportadorasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_transportadorasInclude<ExtArgs> | null
    /**
     * Filter, which tbl_transportadoras to fetch.
     */
    where?: tbl_transportadorasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_transportadoras to fetch.
     */
    orderBy?: tbl_transportadorasOrderByWithRelationInput | tbl_transportadorasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tbl_transportadoras.
     */
    cursor?: tbl_transportadorasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_transportadoras from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_transportadoras.
     */
    skip?: number
    distinct?: Tbl_transportadorasScalarFieldEnum | Tbl_transportadorasScalarFieldEnum[]
  }

  /**
   * tbl_transportadoras create
   */
  export type tbl_transportadorasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_transportadoras
     */
    select?: tbl_transportadorasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_transportadoras
     */
    omit?: tbl_transportadorasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_transportadorasInclude<ExtArgs> | null
    /**
     * The data needed to create a tbl_transportadoras.
     */
    data: XOR<tbl_transportadorasCreateInput, tbl_transportadorasUncheckedCreateInput>
  }

  /**
   * tbl_transportadoras createMany
   */
  export type tbl_transportadorasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tbl_transportadoras.
     */
    data: tbl_transportadorasCreateManyInput | tbl_transportadorasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tbl_transportadoras createManyAndReturn
   */
  export type tbl_transportadorasCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_transportadoras
     */
    select?: tbl_transportadorasSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_transportadoras
     */
    omit?: tbl_transportadorasOmit<ExtArgs> | null
    /**
     * The data used to create many tbl_transportadoras.
     */
    data: tbl_transportadorasCreateManyInput | tbl_transportadorasCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tbl_transportadoras update
   */
  export type tbl_transportadorasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_transportadoras
     */
    select?: tbl_transportadorasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_transportadoras
     */
    omit?: tbl_transportadorasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_transportadorasInclude<ExtArgs> | null
    /**
     * The data needed to update a tbl_transportadoras.
     */
    data: XOR<tbl_transportadorasUpdateInput, tbl_transportadorasUncheckedUpdateInput>
    /**
     * Choose, which tbl_transportadoras to update.
     */
    where: tbl_transportadorasWhereUniqueInput
  }

  /**
   * tbl_transportadoras updateMany
   */
  export type tbl_transportadorasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tbl_transportadoras.
     */
    data: XOR<tbl_transportadorasUpdateManyMutationInput, tbl_transportadorasUncheckedUpdateManyInput>
    /**
     * Filter which tbl_transportadoras to update
     */
    where?: tbl_transportadorasWhereInput
    /**
     * Limit how many tbl_transportadoras to update.
     */
    limit?: number
  }

  /**
   * tbl_transportadoras updateManyAndReturn
   */
  export type tbl_transportadorasUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_transportadoras
     */
    select?: tbl_transportadorasSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_transportadoras
     */
    omit?: tbl_transportadorasOmit<ExtArgs> | null
    /**
     * The data used to update tbl_transportadoras.
     */
    data: XOR<tbl_transportadorasUpdateManyMutationInput, tbl_transportadorasUncheckedUpdateManyInput>
    /**
     * Filter which tbl_transportadoras to update
     */
    where?: tbl_transportadorasWhereInput
    /**
     * Limit how many tbl_transportadoras to update.
     */
    limit?: number
  }

  /**
   * tbl_transportadoras upsert
   */
  export type tbl_transportadorasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_transportadoras
     */
    select?: tbl_transportadorasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_transportadoras
     */
    omit?: tbl_transportadorasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_transportadorasInclude<ExtArgs> | null
    /**
     * The filter to search for the tbl_transportadoras to update in case it exists.
     */
    where: tbl_transportadorasWhereUniqueInput
    /**
     * In case the tbl_transportadoras found by the `where` argument doesn't exist, create a new tbl_transportadoras with this data.
     */
    create: XOR<tbl_transportadorasCreateInput, tbl_transportadorasUncheckedCreateInput>
    /**
     * In case the tbl_transportadoras was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tbl_transportadorasUpdateInput, tbl_transportadorasUncheckedUpdateInput>
  }

  /**
   * tbl_transportadoras delete
   */
  export type tbl_transportadorasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_transportadoras
     */
    select?: tbl_transportadorasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_transportadoras
     */
    omit?: tbl_transportadorasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_transportadorasInclude<ExtArgs> | null
    /**
     * Filter which tbl_transportadoras to delete.
     */
    where: tbl_transportadorasWhereUniqueInput
  }

  /**
   * tbl_transportadoras deleteMany
   */
  export type tbl_transportadorasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_transportadoras to delete
     */
    where?: tbl_transportadorasWhereInput
    /**
     * Limit how many tbl_transportadoras to delete.
     */
    limit?: number
  }

  /**
   * tbl_transportadoras.pedidos
   */
  export type tbl_transportadoras$pedidosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_pedidos
     */
    select?: tbl_pedidosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_pedidos
     */
    omit?: tbl_pedidosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_pedidosInclude<ExtArgs> | null
    where?: tbl_pedidosWhereInput
    orderBy?: tbl_pedidosOrderByWithRelationInput | tbl_pedidosOrderByWithRelationInput[]
    cursor?: tbl_pedidosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tbl_pedidosScalarFieldEnum | Tbl_pedidosScalarFieldEnum[]
  }

  /**
   * tbl_transportadoras without action
   */
  export type tbl_transportadorasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_transportadoras
     */
    select?: tbl_transportadorasSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_transportadoras
     */
    omit?: tbl_transportadorasOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_transportadorasInclude<ExtArgs> | null
  }


  /**
   * Model tbl_usuarios
   */

  export type AggregateTbl_usuarios = {
    _count: Tbl_usuariosCountAggregateOutputType | null
    _avg: Tbl_usuariosAvgAggregateOutputType | null
    _sum: Tbl_usuariosSumAggregateOutputType | null
    _min: Tbl_usuariosMinAggregateOutputType | null
    _max: Tbl_usuariosMaxAggregateOutputType | null
  }

  export type Tbl_usuariosAvgAggregateOutputType = {
    fkid_tbl_roles: number | null
    fkid_tbl_estados_usuario: number | null
    fkid_tbl_personas: number | null
  }

  export type Tbl_usuariosSumAggregateOutputType = {
    fkid_tbl_roles: bigint | null
    fkid_tbl_estados_usuario: bigint | null
    fkid_tbl_personas: bigint | null
  }

  export type Tbl_usuariosMinAggregateOutputType = {
    pkusuario: string | null
    contrase_a: string | null
    fkid_tbl_roles: bigint | null
    fkid_tbl_estados_usuario: bigint | null
    fkid_tbl_personas: bigint | null
  }

  export type Tbl_usuariosMaxAggregateOutputType = {
    pkusuario: string | null
    contrase_a: string | null
    fkid_tbl_roles: bigint | null
    fkid_tbl_estados_usuario: bigint | null
    fkid_tbl_personas: bigint | null
  }

  export type Tbl_usuariosCountAggregateOutputType = {
    pkusuario: number
    contrase_a: number
    fkid_tbl_roles: number
    fkid_tbl_estados_usuario: number
    fkid_tbl_personas: number
    _all: number
  }


  export type Tbl_usuariosAvgAggregateInputType = {
    fkid_tbl_roles?: true
    fkid_tbl_estados_usuario?: true
    fkid_tbl_personas?: true
  }

  export type Tbl_usuariosSumAggregateInputType = {
    fkid_tbl_roles?: true
    fkid_tbl_estados_usuario?: true
    fkid_tbl_personas?: true
  }

  export type Tbl_usuariosMinAggregateInputType = {
    pkusuario?: true
    contrase_a?: true
    fkid_tbl_roles?: true
    fkid_tbl_estados_usuario?: true
    fkid_tbl_personas?: true
  }

  export type Tbl_usuariosMaxAggregateInputType = {
    pkusuario?: true
    contrase_a?: true
    fkid_tbl_roles?: true
    fkid_tbl_estados_usuario?: true
    fkid_tbl_personas?: true
  }

  export type Tbl_usuariosCountAggregateInputType = {
    pkusuario?: true
    contrase_a?: true
    fkid_tbl_roles?: true
    fkid_tbl_estados_usuario?: true
    fkid_tbl_personas?: true
    _all?: true
  }

  export type Tbl_usuariosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_usuarios to aggregate.
     */
    where?: tbl_usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_usuarios to fetch.
     */
    orderBy?: tbl_usuariosOrderByWithRelationInput | tbl_usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tbl_usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tbl_usuarios
    **/
    _count?: true | Tbl_usuariosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tbl_usuariosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tbl_usuariosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tbl_usuariosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tbl_usuariosMaxAggregateInputType
  }

  export type GetTbl_usuariosAggregateType<T extends Tbl_usuariosAggregateArgs> = {
        [P in keyof T & keyof AggregateTbl_usuarios]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTbl_usuarios[P]>
      : GetScalarType<T[P], AggregateTbl_usuarios[P]>
  }




  export type tbl_usuariosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tbl_usuariosWhereInput
    orderBy?: tbl_usuariosOrderByWithAggregationInput | tbl_usuariosOrderByWithAggregationInput[]
    by: Tbl_usuariosScalarFieldEnum[] | Tbl_usuariosScalarFieldEnum
    having?: tbl_usuariosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tbl_usuariosCountAggregateInputType | true
    _avg?: Tbl_usuariosAvgAggregateInputType
    _sum?: Tbl_usuariosSumAggregateInputType
    _min?: Tbl_usuariosMinAggregateInputType
    _max?: Tbl_usuariosMaxAggregateInputType
  }

  export type Tbl_usuariosGroupByOutputType = {
    pkusuario: string
    contrase_a: string
    fkid_tbl_roles: bigint
    fkid_tbl_estados_usuario: bigint
    fkid_tbl_personas: bigint
    _count: Tbl_usuariosCountAggregateOutputType | null
    _avg: Tbl_usuariosAvgAggregateOutputType | null
    _sum: Tbl_usuariosSumAggregateOutputType | null
    _min: Tbl_usuariosMinAggregateOutputType | null
    _max: Tbl_usuariosMaxAggregateOutputType | null
  }

  type GetTbl_usuariosGroupByPayload<T extends tbl_usuariosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tbl_usuariosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tbl_usuariosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tbl_usuariosGroupByOutputType[P]>
            : GetScalarType<T[P], Tbl_usuariosGroupByOutputType[P]>
        }
      >
    >


  export type tbl_usuariosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pkusuario?: boolean
    contrase_a?: boolean
    fkid_tbl_roles?: boolean
    fkid_tbl_estados_usuario?: boolean
    fkid_tbl_personas?: boolean
    persona?: boolean | tbl_personasDefaultArgs<ExtArgs>
    rol?: boolean | tbl_rolesDefaultArgs<ExtArgs>
    estado?: boolean | tbl_estados_usuarioDefaultArgs<ExtArgs>
    comercios?: boolean | tbl_usuarios$comerciosArgs<ExtArgs>
    _count?: boolean | Tbl_usuariosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tbl_usuarios"]>

  export type tbl_usuariosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pkusuario?: boolean
    contrase_a?: boolean
    fkid_tbl_roles?: boolean
    fkid_tbl_estados_usuario?: boolean
    fkid_tbl_personas?: boolean
    persona?: boolean | tbl_personasDefaultArgs<ExtArgs>
    rol?: boolean | tbl_rolesDefaultArgs<ExtArgs>
    estado?: boolean | tbl_estados_usuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tbl_usuarios"]>

  export type tbl_usuariosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pkusuario?: boolean
    contrase_a?: boolean
    fkid_tbl_roles?: boolean
    fkid_tbl_estados_usuario?: boolean
    fkid_tbl_personas?: boolean
    persona?: boolean | tbl_personasDefaultArgs<ExtArgs>
    rol?: boolean | tbl_rolesDefaultArgs<ExtArgs>
    estado?: boolean | tbl_estados_usuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tbl_usuarios"]>

  export type tbl_usuariosSelectScalar = {
    pkusuario?: boolean
    contrase_a?: boolean
    fkid_tbl_roles?: boolean
    fkid_tbl_estados_usuario?: boolean
    fkid_tbl_personas?: boolean
  }

  export type tbl_usuariosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"pkusuario" | "contrase_a" | "fkid_tbl_roles" | "fkid_tbl_estados_usuario" | "fkid_tbl_personas", ExtArgs["result"]["tbl_usuarios"]>
  export type tbl_usuariosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    persona?: boolean | tbl_personasDefaultArgs<ExtArgs>
    rol?: boolean | tbl_rolesDefaultArgs<ExtArgs>
    estado?: boolean | tbl_estados_usuarioDefaultArgs<ExtArgs>
    comercios?: boolean | tbl_usuarios$comerciosArgs<ExtArgs>
    _count?: boolean | Tbl_usuariosCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type tbl_usuariosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    persona?: boolean | tbl_personasDefaultArgs<ExtArgs>
    rol?: boolean | tbl_rolesDefaultArgs<ExtArgs>
    estado?: boolean | tbl_estados_usuarioDefaultArgs<ExtArgs>
  }
  export type tbl_usuariosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    persona?: boolean | tbl_personasDefaultArgs<ExtArgs>
    rol?: boolean | tbl_rolesDefaultArgs<ExtArgs>
    estado?: boolean | tbl_estados_usuarioDefaultArgs<ExtArgs>
  }

  export type $tbl_usuariosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tbl_usuarios"
    objects: {
      persona: Prisma.$tbl_personasPayload<ExtArgs>
      rol: Prisma.$tbl_rolesPayload<ExtArgs>
      estado: Prisma.$tbl_estados_usuarioPayload<ExtArgs>
      comercios: Prisma.$tbl_comerciosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      pkusuario: string
      contrase_a: string
      fkid_tbl_roles: bigint
      fkid_tbl_estados_usuario: bigint
      fkid_tbl_personas: bigint
    }, ExtArgs["result"]["tbl_usuarios"]>
    composites: {}
  }

  type tbl_usuariosGetPayload<S extends boolean | null | undefined | tbl_usuariosDefaultArgs> = $Result.GetResult<Prisma.$tbl_usuariosPayload, S>

  type tbl_usuariosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tbl_usuariosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tbl_usuariosCountAggregateInputType | true
    }

  export interface tbl_usuariosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tbl_usuarios'], meta: { name: 'tbl_usuarios' } }
    /**
     * Find zero or one Tbl_usuarios that matches the filter.
     * @param {tbl_usuariosFindUniqueArgs} args - Arguments to find a Tbl_usuarios
     * @example
     * // Get one Tbl_usuarios
     * const tbl_usuarios = await prisma.tbl_usuarios.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tbl_usuariosFindUniqueArgs>(args: SelectSubset<T, tbl_usuariosFindUniqueArgs<ExtArgs>>): Prisma__tbl_usuariosClient<$Result.GetResult<Prisma.$tbl_usuariosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tbl_usuarios that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tbl_usuariosFindUniqueOrThrowArgs} args - Arguments to find a Tbl_usuarios
     * @example
     * // Get one Tbl_usuarios
     * const tbl_usuarios = await prisma.tbl_usuarios.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tbl_usuariosFindUniqueOrThrowArgs>(args: SelectSubset<T, tbl_usuariosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tbl_usuariosClient<$Result.GetResult<Prisma.$tbl_usuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_usuariosFindFirstArgs} args - Arguments to find a Tbl_usuarios
     * @example
     * // Get one Tbl_usuarios
     * const tbl_usuarios = await prisma.tbl_usuarios.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tbl_usuariosFindFirstArgs>(args?: SelectSubset<T, tbl_usuariosFindFirstArgs<ExtArgs>>): Prisma__tbl_usuariosClient<$Result.GetResult<Prisma.$tbl_usuariosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tbl_usuarios that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_usuariosFindFirstOrThrowArgs} args - Arguments to find a Tbl_usuarios
     * @example
     * // Get one Tbl_usuarios
     * const tbl_usuarios = await prisma.tbl_usuarios.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tbl_usuariosFindFirstOrThrowArgs>(args?: SelectSubset<T, tbl_usuariosFindFirstOrThrowArgs<ExtArgs>>): Prisma__tbl_usuariosClient<$Result.GetResult<Prisma.$tbl_usuariosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tbl_usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_usuariosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tbl_usuarios
     * const tbl_usuarios = await prisma.tbl_usuarios.findMany()
     * 
     * // Get first 10 Tbl_usuarios
     * const tbl_usuarios = await prisma.tbl_usuarios.findMany({ take: 10 })
     * 
     * // Only select the `pkusuario`
     * const tbl_usuariosWithPkusuarioOnly = await prisma.tbl_usuarios.findMany({ select: { pkusuario: true } })
     * 
     */
    findMany<T extends tbl_usuariosFindManyArgs>(args?: SelectSubset<T, tbl_usuariosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_usuariosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tbl_usuarios.
     * @param {tbl_usuariosCreateArgs} args - Arguments to create a Tbl_usuarios.
     * @example
     * // Create one Tbl_usuarios
     * const Tbl_usuarios = await prisma.tbl_usuarios.create({
     *   data: {
     *     // ... data to create a Tbl_usuarios
     *   }
     * })
     * 
     */
    create<T extends tbl_usuariosCreateArgs>(args: SelectSubset<T, tbl_usuariosCreateArgs<ExtArgs>>): Prisma__tbl_usuariosClient<$Result.GetResult<Prisma.$tbl_usuariosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tbl_usuarios.
     * @param {tbl_usuariosCreateManyArgs} args - Arguments to create many Tbl_usuarios.
     * @example
     * // Create many Tbl_usuarios
     * const tbl_usuarios = await prisma.tbl_usuarios.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tbl_usuariosCreateManyArgs>(args?: SelectSubset<T, tbl_usuariosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tbl_usuarios and returns the data saved in the database.
     * @param {tbl_usuariosCreateManyAndReturnArgs} args - Arguments to create many Tbl_usuarios.
     * @example
     * // Create many Tbl_usuarios
     * const tbl_usuarios = await prisma.tbl_usuarios.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tbl_usuarios and only return the `pkusuario`
     * const tbl_usuariosWithPkusuarioOnly = await prisma.tbl_usuarios.createManyAndReturn({
     *   select: { pkusuario: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends tbl_usuariosCreateManyAndReturnArgs>(args?: SelectSubset<T, tbl_usuariosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_usuariosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tbl_usuarios.
     * @param {tbl_usuariosDeleteArgs} args - Arguments to delete one Tbl_usuarios.
     * @example
     * // Delete one Tbl_usuarios
     * const Tbl_usuarios = await prisma.tbl_usuarios.delete({
     *   where: {
     *     // ... filter to delete one Tbl_usuarios
     *   }
     * })
     * 
     */
    delete<T extends tbl_usuariosDeleteArgs>(args: SelectSubset<T, tbl_usuariosDeleteArgs<ExtArgs>>): Prisma__tbl_usuariosClient<$Result.GetResult<Prisma.$tbl_usuariosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tbl_usuarios.
     * @param {tbl_usuariosUpdateArgs} args - Arguments to update one Tbl_usuarios.
     * @example
     * // Update one Tbl_usuarios
     * const tbl_usuarios = await prisma.tbl_usuarios.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tbl_usuariosUpdateArgs>(args: SelectSubset<T, tbl_usuariosUpdateArgs<ExtArgs>>): Prisma__tbl_usuariosClient<$Result.GetResult<Prisma.$tbl_usuariosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tbl_usuarios.
     * @param {tbl_usuariosDeleteManyArgs} args - Arguments to filter Tbl_usuarios to delete.
     * @example
     * // Delete a few Tbl_usuarios
     * const { count } = await prisma.tbl_usuarios.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tbl_usuariosDeleteManyArgs>(args?: SelectSubset<T, tbl_usuariosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tbl_usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_usuariosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tbl_usuarios
     * const tbl_usuarios = await prisma.tbl_usuarios.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tbl_usuariosUpdateManyArgs>(args: SelectSubset<T, tbl_usuariosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tbl_usuarios and returns the data updated in the database.
     * @param {tbl_usuariosUpdateManyAndReturnArgs} args - Arguments to update many Tbl_usuarios.
     * @example
     * // Update many Tbl_usuarios
     * const tbl_usuarios = await prisma.tbl_usuarios.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tbl_usuarios and only return the `pkusuario`
     * const tbl_usuariosWithPkusuarioOnly = await prisma.tbl_usuarios.updateManyAndReturn({
     *   select: { pkusuario: true },
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
    updateManyAndReturn<T extends tbl_usuariosUpdateManyAndReturnArgs>(args: SelectSubset<T, tbl_usuariosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_usuariosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tbl_usuarios.
     * @param {tbl_usuariosUpsertArgs} args - Arguments to update or create a Tbl_usuarios.
     * @example
     * // Update or create a Tbl_usuarios
     * const tbl_usuarios = await prisma.tbl_usuarios.upsert({
     *   create: {
     *     // ... data to create a Tbl_usuarios
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tbl_usuarios we want to update
     *   }
     * })
     */
    upsert<T extends tbl_usuariosUpsertArgs>(args: SelectSubset<T, tbl_usuariosUpsertArgs<ExtArgs>>): Prisma__tbl_usuariosClient<$Result.GetResult<Prisma.$tbl_usuariosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tbl_usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_usuariosCountArgs} args - Arguments to filter Tbl_usuarios to count.
     * @example
     * // Count the number of Tbl_usuarios
     * const count = await prisma.tbl_usuarios.count({
     *   where: {
     *     // ... the filter for the Tbl_usuarios we want to count
     *   }
     * })
    **/
    count<T extends tbl_usuariosCountArgs>(
      args?: Subset<T, tbl_usuariosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tbl_usuariosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tbl_usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tbl_usuariosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Tbl_usuariosAggregateArgs>(args: Subset<T, Tbl_usuariosAggregateArgs>): Prisma.PrismaPromise<GetTbl_usuariosAggregateType<T>>

    /**
     * Group by Tbl_usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tbl_usuariosGroupByArgs} args - Group by arguments.
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
      T extends tbl_usuariosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tbl_usuariosGroupByArgs['orderBy'] }
        : { orderBy?: tbl_usuariosGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tbl_usuariosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTbl_usuariosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tbl_usuarios model
   */
  readonly fields: tbl_usuariosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tbl_usuarios.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tbl_usuariosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    persona<T extends tbl_personasDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tbl_personasDefaultArgs<ExtArgs>>): Prisma__tbl_personasClient<$Result.GetResult<Prisma.$tbl_personasPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    rol<T extends tbl_rolesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tbl_rolesDefaultArgs<ExtArgs>>): Prisma__tbl_rolesClient<$Result.GetResult<Prisma.$tbl_rolesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    estado<T extends tbl_estados_usuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tbl_estados_usuarioDefaultArgs<ExtArgs>>): Prisma__tbl_estados_usuarioClient<$Result.GetResult<Prisma.$tbl_estados_usuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    comercios<T extends tbl_usuarios$comerciosArgs<ExtArgs> = {}>(args?: Subset<T, tbl_usuarios$comerciosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tbl_comerciosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the tbl_usuarios model
   */
  interface tbl_usuariosFieldRefs {
    readonly pkusuario: FieldRef<"tbl_usuarios", 'String'>
    readonly contrase_a: FieldRef<"tbl_usuarios", 'String'>
    readonly fkid_tbl_roles: FieldRef<"tbl_usuarios", 'BigInt'>
    readonly fkid_tbl_estados_usuario: FieldRef<"tbl_usuarios", 'BigInt'>
    readonly fkid_tbl_personas: FieldRef<"tbl_usuarios", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * tbl_usuarios findUnique
   */
  export type tbl_usuariosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_usuarios
     */
    select?: tbl_usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_usuarios
     */
    omit?: tbl_usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_usuariosInclude<ExtArgs> | null
    /**
     * Filter, which tbl_usuarios to fetch.
     */
    where: tbl_usuariosWhereUniqueInput
  }

  /**
   * tbl_usuarios findUniqueOrThrow
   */
  export type tbl_usuariosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_usuarios
     */
    select?: tbl_usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_usuarios
     */
    omit?: tbl_usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_usuariosInclude<ExtArgs> | null
    /**
     * Filter, which tbl_usuarios to fetch.
     */
    where: tbl_usuariosWhereUniqueInput
  }

  /**
   * tbl_usuarios findFirst
   */
  export type tbl_usuariosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_usuarios
     */
    select?: tbl_usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_usuarios
     */
    omit?: tbl_usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_usuariosInclude<ExtArgs> | null
    /**
     * Filter, which tbl_usuarios to fetch.
     */
    where?: tbl_usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_usuarios to fetch.
     */
    orderBy?: tbl_usuariosOrderByWithRelationInput | tbl_usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_usuarios.
     */
    cursor?: tbl_usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_usuarios.
     */
    distinct?: Tbl_usuariosScalarFieldEnum | Tbl_usuariosScalarFieldEnum[]
  }

  /**
   * tbl_usuarios findFirstOrThrow
   */
  export type tbl_usuariosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_usuarios
     */
    select?: tbl_usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_usuarios
     */
    omit?: tbl_usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_usuariosInclude<ExtArgs> | null
    /**
     * Filter, which tbl_usuarios to fetch.
     */
    where?: tbl_usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_usuarios to fetch.
     */
    orderBy?: tbl_usuariosOrderByWithRelationInput | tbl_usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tbl_usuarios.
     */
    cursor?: tbl_usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tbl_usuarios.
     */
    distinct?: Tbl_usuariosScalarFieldEnum | Tbl_usuariosScalarFieldEnum[]
  }

  /**
   * tbl_usuarios findMany
   */
  export type tbl_usuariosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_usuarios
     */
    select?: tbl_usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_usuarios
     */
    omit?: tbl_usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_usuariosInclude<ExtArgs> | null
    /**
     * Filter, which tbl_usuarios to fetch.
     */
    where?: tbl_usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tbl_usuarios to fetch.
     */
    orderBy?: tbl_usuariosOrderByWithRelationInput | tbl_usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tbl_usuarios.
     */
    cursor?: tbl_usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tbl_usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tbl_usuarios.
     */
    skip?: number
    distinct?: Tbl_usuariosScalarFieldEnum | Tbl_usuariosScalarFieldEnum[]
  }

  /**
   * tbl_usuarios create
   */
  export type tbl_usuariosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_usuarios
     */
    select?: tbl_usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_usuarios
     */
    omit?: tbl_usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_usuariosInclude<ExtArgs> | null
    /**
     * The data needed to create a tbl_usuarios.
     */
    data: XOR<tbl_usuariosCreateInput, tbl_usuariosUncheckedCreateInput>
  }

  /**
   * tbl_usuarios createMany
   */
  export type tbl_usuariosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tbl_usuarios.
     */
    data: tbl_usuariosCreateManyInput | tbl_usuariosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tbl_usuarios createManyAndReturn
   */
  export type tbl_usuariosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_usuarios
     */
    select?: tbl_usuariosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_usuarios
     */
    omit?: tbl_usuariosOmit<ExtArgs> | null
    /**
     * The data used to create many tbl_usuarios.
     */
    data: tbl_usuariosCreateManyInput | tbl_usuariosCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_usuariosIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * tbl_usuarios update
   */
  export type tbl_usuariosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_usuarios
     */
    select?: tbl_usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_usuarios
     */
    omit?: tbl_usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_usuariosInclude<ExtArgs> | null
    /**
     * The data needed to update a tbl_usuarios.
     */
    data: XOR<tbl_usuariosUpdateInput, tbl_usuariosUncheckedUpdateInput>
    /**
     * Choose, which tbl_usuarios to update.
     */
    where: tbl_usuariosWhereUniqueInput
  }

  /**
   * tbl_usuarios updateMany
   */
  export type tbl_usuariosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tbl_usuarios.
     */
    data: XOR<tbl_usuariosUpdateManyMutationInput, tbl_usuariosUncheckedUpdateManyInput>
    /**
     * Filter which tbl_usuarios to update
     */
    where?: tbl_usuariosWhereInput
    /**
     * Limit how many tbl_usuarios to update.
     */
    limit?: number
  }

  /**
   * tbl_usuarios updateManyAndReturn
   */
  export type tbl_usuariosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_usuarios
     */
    select?: tbl_usuariosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_usuarios
     */
    omit?: tbl_usuariosOmit<ExtArgs> | null
    /**
     * The data used to update tbl_usuarios.
     */
    data: XOR<tbl_usuariosUpdateManyMutationInput, tbl_usuariosUncheckedUpdateManyInput>
    /**
     * Filter which tbl_usuarios to update
     */
    where?: tbl_usuariosWhereInput
    /**
     * Limit how many tbl_usuarios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_usuariosIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * tbl_usuarios upsert
   */
  export type tbl_usuariosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_usuarios
     */
    select?: tbl_usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_usuarios
     */
    omit?: tbl_usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_usuariosInclude<ExtArgs> | null
    /**
     * The filter to search for the tbl_usuarios to update in case it exists.
     */
    where: tbl_usuariosWhereUniqueInput
    /**
     * In case the tbl_usuarios found by the `where` argument doesn't exist, create a new tbl_usuarios with this data.
     */
    create: XOR<tbl_usuariosCreateInput, tbl_usuariosUncheckedCreateInput>
    /**
     * In case the tbl_usuarios was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tbl_usuariosUpdateInput, tbl_usuariosUncheckedUpdateInput>
  }

  /**
   * tbl_usuarios delete
   */
  export type tbl_usuariosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_usuarios
     */
    select?: tbl_usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_usuarios
     */
    omit?: tbl_usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_usuariosInclude<ExtArgs> | null
    /**
     * Filter which tbl_usuarios to delete.
     */
    where: tbl_usuariosWhereUniqueInput
  }

  /**
   * tbl_usuarios deleteMany
   */
  export type tbl_usuariosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tbl_usuarios to delete
     */
    where?: tbl_usuariosWhereInput
    /**
     * Limit how many tbl_usuarios to delete.
     */
    limit?: number
  }

  /**
   * tbl_usuarios.comercios
   */
  export type tbl_usuarios$comerciosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_comercios
     */
    select?: tbl_comerciosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_comercios
     */
    omit?: tbl_comerciosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_comerciosInclude<ExtArgs> | null
    where?: tbl_comerciosWhereInput
    orderBy?: tbl_comerciosOrderByWithRelationInput | tbl_comerciosOrderByWithRelationInput[]
    cursor?: tbl_comerciosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Tbl_comerciosScalarFieldEnum | Tbl_comerciosScalarFieldEnum[]
  }

  /**
   * tbl_usuarios without action
   */
  export type tbl_usuariosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tbl_usuarios
     */
    select?: tbl_usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tbl_usuarios
     */
    omit?: tbl_usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tbl_usuariosInclude<ExtArgs> | null
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


  export const Tbl_campaniasScalarFieldEnum: {
    pkid: 'pkid',
    nombre: 'nombre',
    presupuesto_gastado: 'presupuesto_gastado',
    fecha_inicio: 'fecha_inicio',
    fecha_fin: 'fecha_fin',
    fkid_tbl_comercios: 'fkid_tbl_comercios'
  };

  export type Tbl_campaniasScalarFieldEnum = (typeof Tbl_campaniasScalarFieldEnum)[keyof typeof Tbl_campaniasScalarFieldEnum]


  export const Tbl_clientesScalarFieldEnum: {
    pkid: 'pkid',
    telefono: 'telefono',
    nombres: 'nombres',
    apellidos: 'apellidos',
    correo: 'correo',
    direccion: 'direccion',
    fkid_tbl_municipios: 'fkid_tbl_municipios',
    fkid_tbl_comercios: 'fkid_tbl_comercios'
  };

  export type Tbl_clientesScalarFieldEnum = (typeof Tbl_clientesScalarFieldEnum)[keyof typeof Tbl_clientesScalarFieldEnum]


  export const Tbl_departamentosScalarFieldEnum: {
    pkid: 'pkid',
    nombre: 'nombre',
    nomenclatura: 'nomenclatura'
  };

  export type Tbl_departamentosScalarFieldEnum = (typeof Tbl_departamentosScalarFieldEnum)[keyof typeof Tbl_departamentosScalarFieldEnum]


  export const Tbl_det_productosScalarFieldEnum: {
    pkid: 'pkid',
    nombre: 'nombre',
    fkid_tbl_productos: 'fkid_tbl_productos'
  };

  export type Tbl_det_productosScalarFieldEnum = (typeof Tbl_det_productosScalarFieldEnum)[keyof typeof Tbl_det_productosScalarFieldEnum]


  export const Tbl_estados_usuarioScalarFieldEnum: {
    pkid: 'pkid',
    nombre: 'nombre',
    nomenclatura: 'nomenclatura'
  };

  export type Tbl_estados_usuarioScalarFieldEnum = (typeof Tbl_estados_usuarioScalarFieldEnum)[keyof typeof Tbl_estados_usuarioScalarFieldEnum]


  export const Tbl_municipiosScalarFieldEnum: {
    pkid: 'pkid',
    nombre: 'nombre',
    nomenclatura: 'nomenclatura',
    fkid_tbl_departamentos: 'fkid_tbl_departamentos'
  };

  export type Tbl_municipiosScalarFieldEnum = (typeof Tbl_municipiosScalarFieldEnum)[keyof typeof Tbl_municipiosScalarFieldEnum]


  export const Tbl_pedidosScalarFieldEnum: {
    pkid: 'pkid',
    fkid_tbl_clientes: 'fkid_tbl_clientes',
    fkid_tbl_det_productos: 'fkid_tbl_det_productos',
    fkid_tbl_transportadoras: 'fkid_tbl_transportadoras',
    valor: 'valor',
    fecha: 'fecha'
  };

  export type Tbl_pedidosScalarFieldEnum = (typeof Tbl_pedidosScalarFieldEnum)[keyof typeof Tbl_pedidosScalarFieldEnum]


  export const Tbl_personasScalarFieldEnum: {
    pkid: 'pkid',
    nombres: 'nombres',
    apellidos: 'apellidos',
    correo: 'correo'
  };

  export type Tbl_personasScalarFieldEnum = (typeof Tbl_personasScalarFieldEnum)[keyof typeof Tbl_personasScalarFieldEnum]


  export const Tbl_productosScalarFieldEnum: {
    pkid: 'pkid',
    nombre: 'nombre',
    costo: 'costo',
    valor: 'valor',
    fkid_tbl_empresas: 'fkid_tbl_empresas'
  };

  export type Tbl_productosScalarFieldEnum = (typeof Tbl_productosScalarFieldEnum)[keyof typeof Tbl_productosScalarFieldEnum]


  export const Tbl_empresasScalarFieldEnum: {
    pkid: 'pkid',
    nit: 'nit',
    nombre: 'nombre',
    telefono: 'telefono',
    correo: 'correo'
  };

  export type Tbl_empresasScalarFieldEnum = (typeof Tbl_empresasScalarFieldEnum)[keyof typeof Tbl_empresasScalarFieldEnum]


  export const Tbl_rolesScalarFieldEnum: {
    pkid: 'pkid',
    nombre: 'nombre',
    nomenclatura: 'nomenclatura'
  };

  export type Tbl_rolesScalarFieldEnum = (typeof Tbl_rolesScalarFieldEnum)[keyof typeof Tbl_rolesScalarFieldEnum]


  export const Tbl_comerciosScalarFieldEnum: {
    pkid: 'pkid',
    nombre: 'nombre',
    telefono: 'telefono',
    correo: 'correo',
    fkusuario_tbl_usuarios: 'fkusuario_tbl_usuarios'
  };

  export type Tbl_comerciosScalarFieldEnum = (typeof Tbl_comerciosScalarFieldEnum)[keyof typeof Tbl_comerciosScalarFieldEnum]


  export const Tbl_transportadorasScalarFieldEnum: {
    pkid: 'pkid',
    nombre: 'nombre',
    nomenclatura: 'nomenclatura'
  };

  export type Tbl_transportadorasScalarFieldEnum = (typeof Tbl_transportadorasScalarFieldEnum)[keyof typeof Tbl_transportadorasScalarFieldEnum]


  export const Tbl_usuariosScalarFieldEnum: {
    pkusuario: 'pkusuario',
    contrase_a: 'contrase_a',
    fkid_tbl_roles: 'fkid_tbl_roles',
    fkid_tbl_estados_usuario: 'fkid_tbl_estados_usuario',
    fkid_tbl_personas: 'fkid_tbl_personas'
  };

  export type Tbl_usuariosScalarFieldEnum = (typeof Tbl_usuariosScalarFieldEnum)[keyof typeof Tbl_usuariosScalarFieldEnum]


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
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


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
   * Deep Input Types
   */


  export type tbl_campaniasWhereInput = {
    AND?: tbl_campaniasWhereInput | tbl_campaniasWhereInput[]
    OR?: tbl_campaniasWhereInput[]
    NOT?: tbl_campaniasWhereInput | tbl_campaniasWhereInput[]
    pkid?: BigIntFilter<"tbl_campanias"> | bigint | number
    nombre?: StringFilter<"tbl_campanias"> | string
    presupuesto_gastado?: FloatFilter<"tbl_campanias"> | number
    fecha_inicio?: DateTimeFilter<"tbl_campanias"> | Date | string
    fecha_fin?: DateTimeFilter<"tbl_campanias"> | Date | string
    fkid_tbl_comercios?: BigIntNullableFilter<"tbl_campanias"> | bigint | number | null
    comercio?: XOR<Tbl_comerciosNullableScalarRelationFilter, tbl_comerciosWhereInput> | null
  }

  export type tbl_campaniasOrderByWithRelationInput = {
    pkid?: SortOrder
    nombre?: SortOrder
    presupuesto_gastado?: SortOrder
    fecha_inicio?: SortOrder
    fecha_fin?: SortOrder
    fkid_tbl_comercios?: SortOrderInput | SortOrder
    comercio?: tbl_comerciosOrderByWithRelationInput
  }

  export type tbl_campaniasWhereUniqueInput = Prisma.AtLeast<{
    pkid?: bigint | number
    AND?: tbl_campaniasWhereInput | tbl_campaniasWhereInput[]
    OR?: tbl_campaniasWhereInput[]
    NOT?: tbl_campaniasWhereInput | tbl_campaniasWhereInput[]
    nombre?: StringFilter<"tbl_campanias"> | string
    presupuesto_gastado?: FloatFilter<"tbl_campanias"> | number
    fecha_inicio?: DateTimeFilter<"tbl_campanias"> | Date | string
    fecha_fin?: DateTimeFilter<"tbl_campanias"> | Date | string
    fkid_tbl_comercios?: BigIntNullableFilter<"tbl_campanias"> | bigint | number | null
    comercio?: XOR<Tbl_comerciosNullableScalarRelationFilter, tbl_comerciosWhereInput> | null
  }, "pkid">

  export type tbl_campaniasOrderByWithAggregationInput = {
    pkid?: SortOrder
    nombre?: SortOrder
    presupuesto_gastado?: SortOrder
    fecha_inicio?: SortOrder
    fecha_fin?: SortOrder
    fkid_tbl_comercios?: SortOrderInput | SortOrder
    _count?: tbl_campaniasCountOrderByAggregateInput
    _avg?: tbl_campaniasAvgOrderByAggregateInput
    _max?: tbl_campaniasMaxOrderByAggregateInput
    _min?: tbl_campaniasMinOrderByAggregateInput
    _sum?: tbl_campaniasSumOrderByAggregateInput
  }

  export type tbl_campaniasScalarWhereWithAggregatesInput = {
    AND?: tbl_campaniasScalarWhereWithAggregatesInput | tbl_campaniasScalarWhereWithAggregatesInput[]
    OR?: tbl_campaniasScalarWhereWithAggregatesInput[]
    NOT?: tbl_campaniasScalarWhereWithAggregatesInput | tbl_campaniasScalarWhereWithAggregatesInput[]
    pkid?: BigIntWithAggregatesFilter<"tbl_campanias"> | bigint | number
    nombre?: StringWithAggregatesFilter<"tbl_campanias"> | string
    presupuesto_gastado?: FloatWithAggregatesFilter<"tbl_campanias"> | number
    fecha_inicio?: DateTimeWithAggregatesFilter<"tbl_campanias"> | Date | string
    fecha_fin?: DateTimeWithAggregatesFilter<"tbl_campanias"> | Date | string
    fkid_tbl_comercios?: BigIntNullableWithAggregatesFilter<"tbl_campanias"> | bigint | number | null
  }

  export type tbl_clientesWhereInput = {
    AND?: tbl_clientesWhereInput | tbl_clientesWhereInput[]
    OR?: tbl_clientesWhereInput[]
    NOT?: tbl_clientesWhereInput | tbl_clientesWhereInput[]
    pkid?: BigIntFilter<"tbl_clientes"> | bigint | number
    telefono?: StringFilter<"tbl_clientes"> | string
    nombres?: StringFilter<"tbl_clientes"> | string
    apellidos?: StringFilter<"tbl_clientes"> | string
    correo?: StringFilter<"tbl_clientes"> | string
    direccion?: StringFilter<"tbl_clientes"> | string
    fkid_tbl_municipios?: BigIntNullableFilter<"tbl_clientes"> | bigint | number | null
    fkid_tbl_comercios?: BigIntNullableFilter<"tbl_clientes"> | bigint | number | null
    municipios?: XOR<Tbl_municipiosNullableScalarRelationFilter, tbl_municipiosWhereInput> | null
    comercios?: XOR<Tbl_comerciosNullableScalarRelationFilter, tbl_comerciosWhereInput> | null
    pedidos?: Tbl_pedidosListRelationFilter
  }

  export type tbl_clientesOrderByWithRelationInput = {
    pkid?: SortOrder
    telefono?: SortOrder
    nombres?: SortOrder
    apellidos?: SortOrder
    correo?: SortOrder
    direccion?: SortOrder
    fkid_tbl_municipios?: SortOrderInput | SortOrder
    fkid_tbl_comercios?: SortOrderInput | SortOrder
    municipios?: tbl_municipiosOrderByWithRelationInput
    comercios?: tbl_comerciosOrderByWithRelationInput
    pedidos?: tbl_pedidosOrderByRelationAggregateInput
  }

  export type tbl_clientesWhereUniqueInput = Prisma.AtLeast<{
    pkid?: bigint | number
    telefono?: string
    AND?: tbl_clientesWhereInput | tbl_clientesWhereInput[]
    OR?: tbl_clientesWhereInput[]
    NOT?: tbl_clientesWhereInput | tbl_clientesWhereInput[]
    nombres?: StringFilter<"tbl_clientes"> | string
    apellidos?: StringFilter<"tbl_clientes"> | string
    correo?: StringFilter<"tbl_clientes"> | string
    direccion?: StringFilter<"tbl_clientes"> | string
    fkid_tbl_municipios?: BigIntNullableFilter<"tbl_clientes"> | bigint | number | null
    fkid_tbl_comercios?: BigIntNullableFilter<"tbl_clientes"> | bigint | number | null
    municipios?: XOR<Tbl_municipiosNullableScalarRelationFilter, tbl_municipiosWhereInput> | null
    comercios?: XOR<Tbl_comerciosNullableScalarRelationFilter, tbl_comerciosWhereInput> | null
    pedidos?: Tbl_pedidosListRelationFilter
  }, "pkid" | "telefono">

  export type tbl_clientesOrderByWithAggregationInput = {
    pkid?: SortOrder
    telefono?: SortOrder
    nombres?: SortOrder
    apellidos?: SortOrder
    correo?: SortOrder
    direccion?: SortOrder
    fkid_tbl_municipios?: SortOrderInput | SortOrder
    fkid_tbl_comercios?: SortOrderInput | SortOrder
    _count?: tbl_clientesCountOrderByAggregateInput
    _avg?: tbl_clientesAvgOrderByAggregateInput
    _max?: tbl_clientesMaxOrderByAggregateInput
    _min?: tbl_clientesMinOrderByAggregateInput
    _sum?: tbl_clientesSumOrderByAggregateInput
  }

  export type tbl_clientesScalarWhereWithAggregatesInput = {
    AND?: tbl_clientesScalarWhereWithAggregatesInput | tbl_clientesScalarWhereWithAggregatesInput[]
    OR?: tbl_clientesScalarWhereWithAggregatesInput[]
    NOT?: tbl_clientesScalarWhereWithAggregatesInput | tbl_clientesScalarWhereWithAggregatesInput[]
    pkid?: BigIntWithAggregatesFilter<"tbl_clientes"> | bigint | number
    telefono?: StringWithAggregatesFilter<"tbl_clientes"> | string
    nombres?: StringWithAggregatesFilter<"tbl_clientes"> | string
    apellidos?: StringWithAggregatesFilter<"tbl_clientes"> | string
    correo?: StringWithAggregatesFilter<"tbl_clientes"> | string
    direccion?: StringWithAggregatesFilter<"tbl_clientes"> | string
    fkid_tbl_municipios?: BigIntNullableWithAggregatesFilter<"tbl_clientes"> | bigint | number | null
    fkid_tbl_comercios?: BigIntNullableWithAggregatesFilter<"tbl_clientes"> | bigint | number | null
  }

  export type tbl_departamentosWhereInput = {
    AND?: tbl_departamentosWhereInput | tbl_departamentosWhereInput[]
    OR?: tbl_departamentosWhereInput[]
    NOT?: tbl_departamentosWhereInput | tbl_departamentosWhereInput[]
    pkid?: BigIntFilter<"tbl_departamentos"> | bigint | number
    nombre?: StringFilter<"tbl_departamentos"> | string
    nomenclatura?: StringFilter<"tbl_departamentos"> | string
    municipios?: Tbl_municipiosListRelationFilter
  }

  export type tbl_departamentosOrderByWithRelationInput = {
    pkid?: SortOrder
    nombre?: SortOrder
    nomenclatura?: SortOrder
    municipios?: tbl_municipiosOrderByRelationAggregateInput
  }

  export type tbl_departamentosWhereUniqueInput = Prisma.AtLeast<{
    pkid?: bigint | number
    AND?: tbl_departamentosWhereInput | tbl_departamentosWhereInput[]
    OR?: tbl_departamentosWhereInput[]
    NOT?: tbl_departamentosWhereInput | tbl_departamentosWhereInput[]
    nombre?: StringFilter<"tbl_departamentos"> | string
    nomenclatura?: StringFilter<"tbl_departamentos"> | string
    municipios?: Tbl_municipiosListRelationFilter
  }, "pkid">

  export type tbl_departamentosOrderByWithAggregationInput = {
    pkid?: SortOrder
    nombre?: SortOrder
    nomenclatura?: SortOrder
    _count?: tbl_departamentosCountOrderByAggregateInput
    _avg?: tbl_departamentosAvgOrderByAggregateInput
    _max?: tbl_departamentosMaxOrderByAggregateInput
    _min?: tbl_departamentosMinOrderByAggregateInput
    _sum?: tbl_departamentosSumOrderByAggregateInput
  }

  export type tbl_departamentosScalarWhereWithAggregatesInput = {
    AND?: tbl_departamentosScalarWhereWithAggregatesInput | tbl_departamentosScalarWhereWithAggregatesInput[]
    OR?: tbl_departamentosScalarWhereWithAggregatesInput[]
    NOT?: tbl_departamentosScalarWhereWithAggregatesInput | tbl_departamentosScalarWhereWithAggregatesInput[]
    pkid?: BigIntWithAggregatesFilter<"tbl_departamentos"> | bigint | number
    nombre?: StringWithAggregatesFilter<"tbl_departamentos"> | string
    nomenclatura?: StringWithAggregatesFilter<"tbl_departamentos"> | string
  }

  export type tbl_det_productosWhereInput = {
    AND?: tbl_det_productosWhereInput | tbl_det_productosWhereInput[]
    OR?: tbl_det_productosWhereInput[]
    NOT?: tbl_det_productosWhereInput | tbl_det_productosWhereInput[]
    pkid?: BigIntFilter<"tbl_det_productos"> | bigint | number
    nombre?: StringFilter<"tbl_det_productos"> | string
    fkid_tbl_productos?: BigIntNullableFilter<"tbl_det_productos"> | bigint | number | null
    productos?: XOR<Tbl_productosNullableScalarRelationFilter, tbl_productosWhereInput> | null
    pedidos?: Tbl_pedidosListRelationFilter
  }

  export type tbl_det_productosOrderByWithRelationInput = {
    pkid?: SortOrder
    nombre?: SortOrder
    fkid_tbl_productos?: SortOrderInput | SortOrder
    productos?: tbl_productosOrderByWithRelationInput
    pedidos?: tbl_pedidosOrderByRelationAggregateInput
  }

  export type tbl_det_productosWhereUniqueInput = Prisma.AtLeast<{
    pkid?: bigint | number
    AND?: tbl_det_productosWhereInput | tbl_det_productosWhereInput[]
    OR?: tbl_det_productosWhereInput[]
    NOT?: tbl_det_productosWhereInput | tbl_det_productosWhereInput[]
    nombre?: StringFilter<"tbl_det_productos"> | string
    fkid_tbl_productos?: BigIntNullableFilter<"tbl_det_productos"> | bigint | number | null
    productos?: XOR<Tbl_productosNullableScalarRelationFilter, tbl_productosWhereInput> | null
    pedidos?: Tbl_pedidosListRelationFilter
  }, "pkid">

  export type tbl_det_productosOrderByWithAggregationInput = {
    pkid?: SortOrder
    nombre?: SortOrder
    fkid_tbl_productos?: SortOrderInput | SortOrder
    _count?: tbl_det_productosCountOrderByAggregateInput
    _avg?: tbl_det_productosAvgOrderByAggregateInput
    _max?: tbl_det_productosMaxOrderByAggregateInput
    _min?: tbl_det_productosMinOrderByAggregateInput
    _sum?: tbl_det_productosSumOrderByAggregateInput
  }

  export type tbl_det_productosScalarWhereWithAggregatesInput = {
    AND?: tbl_det_productosScalarWhereWithAggregatesInput | tbl_det_productosScalarWhereWithAggregatesInput[]
    OR?: tbl_det_productosScalarWhereWithAggregatesInput[]
    NOT?: tbl_det_productosScalarWhereWithAggregatesInput | tbl_det_productosScalarWhereWithAggregatesInput[]
    pkid?: BigIntWithAggregatesFilter<"tbl_det_productos"> | bigint | number
    nombre?: StringWithAggregatesFilter<"tbl_det_productos"> | string
    fkid_tbl_productos?: BigIntNullableWithAggregatesFilter<"tbl_det_productos"> | bigint | number | null
  }

  export type tbl_estados_usuarioWhereInput = {
    AND?: tbl_estados_usuarioWhereInput | tbl_estados_usuarioWhereInput[]
    OR?: tbl_estados_usuarioWhereInput[]
    NOT?: tbl_estados_usuarioWhereInput | tbl_estados_usuarioWhereInput[]
    pkid?: BigIntFilter<"tbl_estados_usuario"> | bigint | number
    nombre?: StringFilter<"tbl_estados_usuario"> | string
    nomenclatura?: StringFilter<"tbl_estados_usuario"> | string
    usuarios?: Tbl_usuariosListRelationFilter
  }

  export type tbl_estados_usuarioOrderByWithRelationInput = {
    pkid?: SortOrder
    nombre?: SortOrder
    nomenclatura?: SortOrder
    usuarios?: tbl_usuariosOrderByRelationAggregateInput
  }

  export type tbl_estados_usuarioWhereUniqueInput = Prisma.AtLeast<{
    pkid?: bigint | number
    AND?: tbl_estados_usuarioWhereInput | tbl_estados_usuarioWhereInput[]
    OR?: tbl_estados_usuarioWhereInput[]
    NOT?: tbl_estados_usuarioWhereInput | tbl_estados_usuarioWhereInput[]
    nombre?: StringFilter<"tbl_estados_usuario"> | string
    nomenclatura?: StringFilter<"tbl_estados_usuario"> | string
    usuarios?: Tbl_usuariosListRelationFilter
  }, "pkid">

  export type tbl_estados_usuarioOrderByWithAggregationInput = {
    pkid?: SortOrder
    nombre?: SortOrder
    nomenclatura?: SortOrder
    _count?: tbl_estados_usuarioCountOrderByAggregateInput
    _avg?: tbl_estados_usuarioAvgOrderByAggregateInput
    _max?: tbl_estados_usuarioMaxOrderByAggregateInput
    _min?: tbl_estados_usuarioMinOrderByAggregateInput
    _sum?: tbl_estados_usuarioSumOrderByAggregateInput
  }

  export type tbl_estados_usuarioScalarWhereWithAggregatesInput = {
    AND?: tbl_estados_usuarioScalarWhereWithAggregatesInput | tbl_estados_usuarioScalarWhereWithAggregatesInput[]
    OR?: tbl_estados_usuarioScalarWhereWithAggregatesInput[]
    NOT?: tbl_estados_usuarioScalarWhereWithAggregatesInput | tbl_estados_usuarioScalarWhereWithAggregatesInput[]
    pkid?: BigIntWithAggregatesFilter<"tbl_estados_usuario"> | bigint | number
    nombre?: StringWithAggregatesFilter<"tbl_estados_usuario"> | string
    nomenclatura?: StringWithAggregatesFilter<"tbl_estados_usuario"> | string
  }

  export type tbl_municipiosWhereInput = {
    AND?: tbl_municipiosWhereInput | tbl_municipiosWhereInput[]
    OR?: tbl_municipiosWhereInput[]
    NOT?: tbl_municipiosWhereInput | tbl_municipiosWhereInput[]
    pkid?: BigIntFilter<"tbl_municipios"> | bigint | number
    nombre?: StringFilter<"tbl_municipios"> | string
    nomenclatura?: StringFilter<"tbl_municipios"> | string
    fkid_tbl_departamentos?: BigIntNullableFilter<"tbl_municipios"> | bigint | number | null
    departamento?: XOR<Tbl_departamentosNullableScalarRelationFilter, tbl_departamentosWhereInput> | null
    clientes?: Tbl_clientesListRelationFilter
  }

  export type tbl_municipiosOrderByWithRelationInput = {
    pkid?: SortOrder
    nombre?: SortOrder
    nomenclatura?: SortOrder
    fkid_tbl_departamentos?: SortOrderInput | SortOrder
    departamento?: tbl_departamentosOrderByWithRelationInput
    clientes?: tbl_clientesOrderByRelationAggregateInput
  }

  export type tbl_municipiosWhereUniqueInput = Prisma.AtLeast<{
    pkid?: bigint | number
    AND?: tbl_municipiosWhereInput | tbl_municipiosWhereInput[]
    OR?: tbl_municipiosWhereInput[]
    NOT?: tbl_municipiosWhereInput | tbl_municipiosWhereInput[]
    nombre?: StringFilter<"tbl_municipios"> | string
    nomenclatura?: StringFilter<"tbl_municipios"> | string
    fkid_tbl_departamentos?: BigIntNullableFilter<"tbl_municipios"> | bigint | number | null
    departamento?: XOR<Tbl_departamentosNullableScalarRelationFilter, tbl_departamentosWhereInput> | null
    clientes?: Tbl_clientesListRelationFilter
  }, "pkid">

  export type tbl_municipiosOrderByWithAggregationInput = {
    pkid?: SortOrder
    nombre?: SortOrder
    nomenclatura?: SortOrder
    fkid_tbl_departamentos?: SortOrderInput | SortOrder
    _count?: tbl_municipiosCountOrderByAggregateInput
    _avg?: tbl_municipiosAvgOrderByAggregateInput
    _max?: tbl_municipiosMaxOrderByAggregateInput
    _min?: tbl_municipiosMinOrderByAggregateInput
    _sum?: tbl_municipiosSumOrderByAggregateInput
  }

  export type tbl_municipiosScalarWhereWithAggregatesInput = {
    AND?: tbl_municipiosScalarWhereWithAggregatesInput | tbl_municipiosScalarWhereWithAggregatesInput[]
    OR?: tbl_municipiosScalarWhereWithAggregatesInput[]
    NOT?: tbl_municipiosScalarWhereWithAggregatesInput | tbl_municipiosScalarWhereWithAggregatesInput[]
    pkid?: BigIntWithAggregatesFilter<"tbl_municipios"> | bigint | number
    nombre?: StringWithAggregatesFilter<"tbl_municipios"> | string
    nomenclatura?: StringWithAggregatesFilter<"tbl_municipios"> | string
    fkid_tbl_departamentos?: BigIntNullableWithAggregatesFilter<"tbl_municipios"> | bigint | number | null
  }

  export type tbl_pedidosWhereInput = {
    AND?: tbl_pedidosWhereInput | tbl_pedidosWhereInput[]
    OR?: tbl_pedidosWhereInput[]
    NOT?: tbl_pedidosWhereInput | tbl_pedidosWhereInput[]
    pkid?: BigIntFilter<"tbl_pedidos"> | bigint | number
    fkid_tbl_clientes?: BigIntNullableFilter<"tbl_pedidos"> | bigint | number | null
    fkid_tbl_det_productos?: BigIntNullableFilter<"tbl_pedidos"> | bigint | number | null
    fkid_tbl_transportadoras?: BigIntNullableFilter<"tbl_pedidos"> | bigint | number | null
    valor?: FloatFilter<"tbl_pedidos"> | number
    fecha?: DateTimeFilter<"tbl_pedidos"> | Date | string
    clientes?: XOR<Tbl_clientesNullableScalarRelationFilter, tbl_clientesWhereInput> | null
    det_productos?: XOR<Tbl_det_productosNullableScalarRelationFilter, tbl_det_productosWhereInput> | null
    transportadoras?: XOR<Tbl_transportadorasNullableScalarRelationFilter, tbl_transportadorasWhereInput> | null
  }

  export type tbl_pedidosOrderByWithRelationInput = {
    pkid?: SortOrder
    fkid_tbl_clientes?: SortOrderInput | SortOrder
    fkid_tbl_det_productos?: SortOrderInput | SortOrder
    fkid_tbl_transportadoras?: SortOrderInput | SortOrder
    valor?: SortOrder
    fecha?: SortOrder
    clientes?: tbl_clientesOrderByWithRelationInput
    det_productos?: tbl_det_productosOrderByWithRelationInput
    transportadoras?: tbl_transportadorasOrderByWithRelationInput
  }

  export type tbl_pedidosWhereUniqueInput = Prisma.AtLeast<{
    pkid?: bigint | number
    AND?: tbl_pedidosWhereInput | tbl_pedidosWhereInput[]
    OR?: tbl_pedidosWhereInput[]
    NOT?: tbl_pedidosWhereInput | tbl_pedidosWhereInput[]
    fkid_tbl_clientes?: BigIntNullableFilter<"tbl_pedidos"> | bigint | number | null
    fkid_tbl_det_productos?: BigIntNullableFilter<"tbl_pedidos"> | bigint | number | null
    fkid_tbl_transportadoras?: BigIntNullableFilter<"tbl_pedidos"> | bigint | number | null
    valor?: FloatFilter<"tbl_pedidos"> | number
    fecha?: DateTimeFilter<"tbl_pedidos"> | Date | string
    clientes?: XOR<Tbl_clientesNullableScalarRelationFilter, tbl_clientesWhereInput> | null
    det_productos?: XOR<Tbl_det_productosNullableScalarRelationFilter, tbl_det_productosWhereInput> | null
    transportadoras?: XOR<Tbl_transportadorasNullableScalarRelationFilter, tbl_transportadorasWhereInput> | null
  }, "pkid">

  export type tbl_pedidosOrderByWithAggregationInput = {
    pkid?: SortOrder
    fkid_tbl_clientes?: SortOrderInput | SortOrder
    fkid_tbl_det_productos?: SortOrderInput | SortOrder
    fkid_tbl_transportadoras?: SortOrderInput | SortOrder
    valor?: SortOrder
    fecha?: SortOrder
    _count?: tbl_pedidosCountOrderByAggregateInput
    _avg?: tbl_pedidosAvgOrderByAggregateInput
    _max?: tbl_pedidosMaxOrderByAggregateInput
    _min?: tbl_pedidosMinOrderByAggregateInput
    _sum?: tbl_pedidosSumOrderByAggregateInput
  }

  export type tbl_pedidosScalarWhereWithAggregatesInput = {
    AND?: tbl_pedidosScalarWhereWithAggregatesInput | tbl_pedidosScalarWhereWithAggregatesInput[]
    OR?: tbl_pedidosScalarWhereWithAggregatesInput[]
    NOT?: tbl_pedidosScalarWhereWithAggregatesInput | tbl_pedidosScalarWhereWithAggregatesInput[]
    pkid?: BigIntWithAggregatesFilter<"tbl_pedidos"> | bigint | number
    fkid_tbl_clientes?: BigIntNullableWithAggregatesFilter<"tbl_pedidos"> | bigint | number | null
    fkid_tbl_det_productos?: BigIntNullableWithAggregatesFilter<"tbl_pedidos"> | bigint | number | null
    fkid_tbl_transportadoras?: BigIntNullableWithAggregatesFilter<"tbl_pedidos"> | bigint | number | null
    valor?: FloatWithAggregatesFilter<"tbl_pedidos"> | number
    fecha?: DateTimeWithAggregatesFilter<"tbl_pedidos"> | Date | string
  }

  export type tbl_personasWhereInput = {
    AND?: tbl_personasWhereInput | tbl_personasWhereInput[]
    OR?: tbl_personasWhereInput[]
    NOT?: tbl_personasWhereInput | tbl_personasWhereInput[]
    pkid?: BigIntFilter<"tbl_personas"> | bigint | number
    nombres?: StringFilter<"tbl_personas"> | string
    apellidos?: StringFilter<"tbl_personas"> | string
    correo?: StringFilter<"tbl_personas"> | string
    usuarios?: Tbl_usuariosListRelationFilter
  }

  export type tbl_personasOrderByWithRelationInput = {
    pkid?: SortOrder
    nombres?: SortOrder
    apellidos?: SortOrder
    correo?: SortOrder
    usuarios?: tbl_usuariosOrderByRelationAggregateInput
  }

  export type tbl_personasWhereUniqueInput = Prisma.AtLeast<{
    pkid?: bigint | number
    AND?: tbl_personasWhereInput | tbl_personasWhereInput[]
    OR?: tbl_personasWhereInput[]
    NOT?: tbl_personasWhereInput | tbl_personasWhereInput[]
    nombres?: StringFilter<"tbl_personas"> | string
    apellidos?: StringFilter<"tbl_personas"> | string
    correo?: StringFilter<"tbl_personas"> | string
    usuarios?: Tbl_usuariosListRelationFilter
  }, "pkid">

  export type tbl_personasOrderByWithAggregationInput = {
    pkid?: SortOrder
    nombres?: SortOrder
    apellidos?: SortOrder
    correo?: SortOrder
    _count?: tbl_personasCountOrderByAggregateInput
    _avg?: tbl_personasAvgOrderByAggregateInput
    _max?: tbl_personasMaxOrderByAggregateInput
    _min?: tbl_personasMinOrderByAggregateInput
    _sum?: tbl_personasSumOrderByAggregateInput
  }

  export type tbl_personasScalarWhereWithAggregatesInput = {
    AND?: tbl_personasScalarWhereWithAggregatesInput | tbl_personasScalarWhereWithAggregatesInput[]
    OR?: tbl_personasScalarWhereWithAggregatesInput[]
    NOT?: tbl_personasScalarWhereWithAggregatesInput | tbl_personasScalarWhereWithAggregatesInput[]
    pkid?: BigIntWithAggregatesFilter<"tbl_personas"> | bigint | number
    nombres?: StringWithAggregatesFilter<"tbl_personas"> | string
    apellidos?: StringWithAggregatesFilter<"tbl_personas"> | string
    correo?: StringWithAggregatesFilter<"tbl_personas"> | string
  }

  export type tbl_productosWhereInput = {
    AND?: tbl_productosWhereInput | tbl_productosWhereInput[]
    OR?: tbl_productosWhereInput[]
    NOT?: tbl_productosWhereInput | tbl_productosWhereInput[]
    pkid?: BigIntFilter<"tbl_productos"> | bigint | number
    nombre?: StringFilter<"tbl_productos"> | string
    costo?: FloatFilter<"tbl_productos"> | number
    valor?: FloatFilter<"tbl_productos"> | number
    fkid_tbl_empresas?: BigIntNullableFilter<"tbl_productos"> | bigint | number | null
    empresas?: XOR<Tbl_empresasNullableScalarRelationFilter, tbl_empresasWhereInput> | null
    det_productos?: Tbl_det_productosListRelationFilter
  }

  export type tbl_productosOrderByWithRelationInput = {
    pkid?: SortOrder
    nombre?: SortOrder
    costo?: SortOrder
    valor?: SortOrder
    fkid_tbl_empresas?: SortOrderInput | SortOrder
    empresas?: tbl_empresasOrderByWithRelationInput
    det_productos?: tbl_det_productosOrderByRelationAggregateInput
  }

  export type tbl_productosWhereUniqueInput = Prisma.AtLeast<{
    pkid?: bigint | number
    AND?: tbl_productosWhereInput | tbl_productosWhereInput[]
    OR?: tbl_productosWhereInput[]
    NOT?: tbl_productosWhereInput | tbl_productosWhereInput[]
    nombre?: StringFilter<"tbl_productos"> | string
    costo?: FloatFilter<"tbl_productos"> | number
    valor?: FloatFilter<"tbl_productos"> | number
    fkid_tbl_empresas?: BigIntNullableFilter<"tbl_productos"> | bigint | number | null
    empresas?: XOR<Tbl_empresasNullableScalarRelationFilter, tbl_empresasWhereInput> | null
    det_productos?: Tbl_det_productosListRelationFilter
  }, "pkid">

  export type tbl_productosOrderByWithAggregationInput = {
    pkid?: SortOrder
    nombre?: SortOrder
    costo?: SortOrder
    valor?: SortOrder
    fkid_tbl_empresas?: SortOrderInput | SortOrder
    _count?: tbl_productosCountOrderByAggregateInput
    _avg?: tbl_productosAvgOrderByAggregateInput
    _max?: tbl_productosMaxOrderByAggregateInput
    _min?: tbl_productosMinOrderByAggregateInput
    _sum?: tbl_productosSumOrderByAggregateInput
  }

  export type tbl_productosScalarWhereWithAggregatesInput = {
    AND?: tbl_productosScalarWhereWithAggregatesInput | tbl_productosScalarWhereWithAggregatesInput[]
    OR?: tbl_productosScalarWhereWithAggregatesInput[]
    NOT?: tbl_productosScalarWhereWithAggregatesInput | tbl_productosScalarWhereWithAggregatesInput[]
    pkid?: BigIntWithAggregatesFilter<"tbl_productos"> | bigint | number
    nombre?: StringWithAggregatesFilter<"tbl_productos"> | string
    costo?: FloatWithAggregatesFilter<"tbl_productos"> | number
    valor?: FloatWithAggregatesFilter<"tbl_productos"> | number
    fkid_tbl_empresas?: BigIntNullableWithAggregatesFilter<"tbl_productos"> | bigint | number | null
  }

  export type tbl_empresasWhereInput = {
    AND?: tbl_empresasWhereInput | tbl_empresasWhereInput[]
    OR?: tbl_empresasWhereInput[]
    NOT?: tbl_empresasWhereInput | tbl_empresasWhereInput[]
    pkid?: BigIntFilter<"tbl_empresas"> | bigint | number
    nit?: StringFilter<"tbl_empresas"> | string
    nombre?: StringFilter<"tbl_empresas"> | string
    telefono?: StringFilter<"tbl_empresas"> | string
    correo?: StringFilter<"tbl_empresas"> | string
    productos?: Tbl_productosListRelationFilter
  }

  export type tbl_empresasOrderByWithRelationInput = {
    pkid?: SortOrder
    nit?: SortOrder
    nombre?: SortOrder
    telefono?: SortOrder
    correo?: SortOrder
    productos?: tbl_productosOrderByRelationAggregateInput
  }

  export type tbl_empresasWhereUniqueInput = Prisma.AtLeast<{
    pkid?: bigint | number
    AND?: tbl_empresasWhereInput | tbl_empresasWhereInput[]
    OR?: tbl_empresasWhereInput[]
    NOT?: tbl_empresasWhereInput | tbl_empresasWhereInput[]
    nit?: StringFilter<"tbl_empresas"> | string
    nombre?: StringFilter<"tbl_empresas"> | string
    telefono?: StringFilter<"tbl_empresas"> | string
    correo?: StringFilter<"tbl_empresas"> | string
    productos?: Tbl_productosListRelationFilter
  }, "pkid">

  export type tbl_empresasOrderByWithAggregationInput = {
    pkid?: SortOrder
    nit?: SortOrder
    nombre?: SortOrder
    telefono?: SortOrder
    correo?: SortOrder
    _count?: tbl_empresasCountOrderByAggregateInput
    _avg?: tbl_empresasAvgOrderByAggregateInput
    _max?: tbl_empresasMaxOrderByAggregateInput
    _min?: tbl_empresasMinOrderByAggregateInput
    _sum?: tbl_empresasSumOrderByAggregateInput
  }

  export type tbl_empresasScalarWhereWithAggregatesInput = {
    AND?: tbl_empresasScalarWhereWithAggregatesInput | tbl_empresasScalarWhereWithAggregatesInput[]
    OR?: tbl_empresasScalarWhereWithAggregatesInput[]
    NOT?: tbl_empresasScalarWhereWithAggregatesInput | tbl_empresasScalarWhereWithAggregatesInput[]
    pkid?: BigIntWithAggregatesFilter<"tbl_empresas"> | bigint | number
    nit?: StringWithAggregatesFilter<"tbl_empresas"> | string
    nombre?: StringWithAggregatesFilter<"tbl_empresas"> | string
    telefono?: StringWithAggregatesFilter<"tbl_empresas"> | string
    correo?: StringWithAggregatesFilter<"tbl_empresas"> | string
  }

  export type tbl_rolesWhereInput = {
    AND?: tbl_rolesWhereInput | tbl_rolesWhereInput[]
    OR?: tbl_rolesWhereInput[]
    NOT?: tbl_rolesWhereInput | tbl_rolesWhereInput[]
    pkid?: BigIntFilter<"tbl_roles"> | bigint | number
    nombre?: StringFilter<"tbl_roles"> | string
    nomenclatura?: StringFilter<"tbl_roles"> | string
    usuarios?: Tbl_usuariosListRelationFilter
  }

  export type tbl_rolesOrderByWithRelationInput = {
    pkid?: SortOrder
    nombre?: SortOrder
    nomenclatura?: SortOrder
    usuarios?: tbl_usuariosOrderByRelationAggregateInput
  }

  export type tbl_rolesWhereUniqueInput = Prisma.AtLeast<{
    pkid?: bigint | number
    AND?: tbl_rolesWhereInput | tbl_rolesWhereInput[]
    OR?: tbl_rolesWhereInput[]
    NOT?: tbl_rolesWhereInput | tbl_rolesWhereInput[]
    nombre?: StringFilter<"tbl_roles"> | string
    nomenclatura?: StringFilter<"tbl_roles"> | string
    usuarios?: Tbl_usuariosListRelationFilter
  }, "pkid">

  export type tbl_rolesOrderByWithAggregationInput = {
    pkid?: SortOrder
    nombre?: SortOrder
    nomenclatura?: SortOrder
    _count?: tbl_rolesCountOrderByAggregateInput
    _avg?: tbl_rolesAvgOrderByAggregateInput
    _max?: tbl_rolesMaxOrderByAggregateInput
    _min?: tbl_rolesMinOrderByAggregateInput
    _sum?: tbl_rolesSumOrderByAggregateInput
  }

  export type tbl_rolesScalarWhereWithAggregatesInput = {
    AND?: tbl_rolesScalarWhereWithAggregatesInput | tbl_rolesScalarWhereWithAggregatesInput[]
    OR?: tbl_rolesScalarWhereWithAggregatesInput[]
    NOT?: tbl_rolesScalarWhereWithAggregatesInput | tbl_rolesScalarWhereWithAggregatesInput[]
    pkid?: BigIntWithAggregatesFilter<"tbl_roles"> | bigint | number
    nombre?: StringWithAggregatesFilter<"tbl_roles"> | string
    nomenclatura?: StringWithAggregatesFilter<"tbl_roles"> | string
  }

  export type tbl_comerciosWhereInput = {
    AND?: tbl_comerciosWhereInput | tbl_comerciosWhereInput[]
    OR?: tbl_comerciosWhereInput[]
    NOT?: tbl_comerciosWhereInput | tbl_comerciosWhereInput[]
    pkid?: BigIntFilter<"tbl_comercios"> | bigint | number
    nombre?: StringFilter<"tbl_comercios"> | string
    telefono?: StringFilter<"tbl_comercios"> | string
    correo?: StringFilter<"tbl_comercios"> | string
    fkusuario_tbl_usuarios?: StringNullableFilter<"tbl_comercios"> | string | null
    usuarios?: XOR<Tbl_usuariosNullableScalarRelationFilter, tbl_usuariosWhereInput> | null
    campanias?: Tbl_campaniasListRelationFilter
    clientes?: Tbl_clientesListRelationFilter
  }

  export type tbl_comerciosOrderByWithRelationInput = {
    pkid?: SortOrder
    nombre?: SortOrder
    telefono?: SortOrder
    correo?: SortOrder
    fkusuario_tbl_usuarios?: SortOrderInput | SortOrder
    usuarios?: tbl_usuariosOrderByWithRelationInput
    campanias?: tbl_campaniasOrderByRelationAggregateInput
    clientes?: tbl_clientesOrderByRelationAggregateInput
  }

  export type tbl_comerciosWhereUniqueInput = Prisma.AtLeast<{
    pkid?: bigint | number
    AND?: tbl_comerciosWhereInput | tbl_comerciosWhereInput[]
    OR?: tbl_comerciosWhereInput[]
    NOT?: tbl_comerciosWhereInput | tbl_comerciosWhereInput[]
    nombre?: StringFilter<"tbl_comercios"> | string
    telefono?: StringFilter<"tbl_comercios"> | string
    correo?: StringFilter<"tbl_comercios"> | string
    fkusuario_tbl_usuarios?: StringNullableFilter<"tbl_comercios"> | string | null
    usuarios?: XOR<Tbl_usuariosNullableScalarRelationFilter, tbl_usuariosWhereInput> | null
    campanias?: Tbl_campaniasListRelationFilter
    clientes?: Tbl_clientesListRelationFilter
  }, "pkid">

  export type tbl_comerciosOrderByWithAggregationInput = {
    pkid?: SortOrder
    nombre?: SortOrder
    telefono?: SortOrder
    correo?: SortOrder
    fkusuario_tbl_usuarios?: SortOrderInput | SortOrder
    _count?: tbl_comerciosCountOrderByAggregateInput
    _avg?: tbl_comerciosAvgOrderByAggregateInput
    _max?: tbl_comerciosMaxOrderByAggregateInput
    _min?: tbl_comerciosMinOrderByAggregateInput
    _sum?: tbl_comerciosSumOrderByAggregateInput
  }

  export type tbl_comerciosScalarWhereWithAggregatesInput = {
    AND?: tbl_comerciosScalarWhereWithAggregatesInput | tbl_comerciosScalarWhereWithAggregatesInput[]
    OR?: tbl_comerciosScalarWhereWithAggregatesInput[]
    NOT?: tbl_comerciosScalarWhereWithAggregatesInput | tbl_comerciosScalarWhereWithAggregatesInput[]
    pkid?: BigIntWithAggregatesFilter<"tbl_comercios"> | bigint | number
    nombre?: StringWithAggregatesFilter<"tbl_comercios"> | string
    telefono?: StringWithAggregatesFilter<"tbl_comercios"> | string
    correo?: StringWithAggregatesFilter<"tbl_comercios"> | string
    fkusuario_tbl_usuarios?: StringNullableWithAggregatesFilter<"tbl_comercios"> | string | null
  }

  export type tbl_transportadorasWhereInput = {
    AND?: tbl_transportadorasWhereInput | tbl_transportadorasWhereInput[]
    OR?: tbl_transportadorasWhereInput[]
    NOT?: tbl_transportadorasWhereInput | tbl_transportadorasWhereInput[]
    pkid?: BigIntFilter<"tbl_transportadoras"> | bigint | number
    nombre?: StringFilter<"tbl_transportadoras"> | string
    nomenclatura?: StringFilter<"tbl_transportadoras"> | string
    pedidos?: Tbl_pedidosListRelationFilter
  }

  export type tbl_transportadorasOrderByWithRelationInput = {
    pkid?: SortOrder
    nombre?: SortOrder
    nomenclatura?: SortOrder
    pedidos?: tbl_pedidosOrderByRelationAggregateInput
  }

  export type tbl_transportadorasWhereUniqueInput = Prisma.AtLeast<{
    pkid?: bigint | number
    AND?: tbl_transportadorasWhereInput | tbl_transportadorasWhereInput[]
    OR?: tbl_transportadorasWhereInput[]
    NOT?: tbl_transportadorasWhereInput | tbl_transportadorasWhereInput[]
    nombre?: StringFilter<"tbl_transportadoras"> | string
    nomenclatura?: StringFilter<"tbl_transportadoras"> | string
    pedidos?: Tbl_pedidosListRelationFilter
  }, "pkid">

  export type tbl_transportadorasOrderByWithAggregationInput = {
    pkid?: SortOrder
    nombre?: SortOrder
    nomenclatura?: SortOrder
    _count?: tbl_transportadorasCountOrderByAggregateInput
    _avg?: tbl_transportadorasAvgOrderByAggregateInput
    _max?: tbl_transportadorasMaxOrderByAggregateInput
    _min?: tbl_transportadorasMinOrderByAggregateInput
    _sum?: tbl_transportadorasSumOrderByAggregateInput
  }

  export type tbl_transportadorasScalarWhereWithAggregatesInput = {
    AND?: tbl_transportadorasScalarWhereWithAggregatesInput | tbl_transportadorasScalarWhereWithAggregatesInput[]
    OR?: tbl_transportadorasScalarWhereWithAggregatesInput[]
    NOT?: tbl_transportadorasScalarWhereWithAggregatesInput | tbl_transportadorasScalarWhereWithAggregatesInput[]
    pkid?: BigIntWithAggregatesFilter<"tbl_transportadoras"> | bigint | number
    nombre?: StringWithAggregatesFilter<"tbl_transportadoras"> | string
    nomenclatura?: StringWithAggregatesFilter<"tbl_transportadoras"> | string
  }

  export type tbl_usuariosWhereInput = {
    AND?: tbl_usuariosWhereInput | tbl_usuariosWhereInput[]
    OR?: tbl_usuariosWhereInput[]
    NOT?: tbl_usuariosWhereInput | tbl_usuariosWhereInput[]
    pkusuario?: StringFilter<"tbl_usuarios"> | string
    contrase_a?: StringFilter<"tbl_usuarios"> | string
    fkid_tbl_roles?: BigIntFilter<"tbl_usuarios"> | bigint | number
    fkid_tbl_estados_usuario?: BigIntFilter<"tbl_usuarios"> | bigint | number
    fkid_tbl_personas?: BigIntFilter<"tbl_usuarios"> | bigint | number
    persona?: XOR<Tbl_personasScalarRelationFilter, tbl_personasWhereInput>
    rol?: XOR<Tbl_rolesScalarRelationFilter, tbl_rolesWhereInput>
    estado?: XOR<Tbl_estados_usuarioScalarRelationFilter, tbl_estados_usuarioWhereInput>
    comercios?: Tbl_comerciosListRelationFilter
  }

  export type tbl_usuariosOrderByWithRelationInput = {
    pkusuario?: SortOrder
    contrase_a?: SortOrder
    fkid_tbl_roles?: SortOrder
    fkid_tbl_estados_usuario?: SortOrder
    fkid_tbl_personas?: SortOrder
    persona?: tbl_personasOrderByWithRelationInput
    rol?: tbl_rolesOrderByWithRelationInput
    estado?: tbl_estados_usuarioOrderByWithRelationInput
    comercios?: tbl_comerciosOrderByRelationAggregateInput
  }

  export type tbl_usuariosWhereUniqueInput = Prisma.AtLeast<{
    pkusuario?: string
    AND?: tbl_usuariosWhereInput | tbl_usuariosWhereInput[]
    OR?: tbl_usuariosWhereInput[]
    NOT?: tbl_usuariosWhereInput | tbl_usuariosWhereInput[]
    contrase_a?: StringFilter<"tbl_usuarios"> | string
    fkid_tbl_roles?: BigIntFilter<"tbl_usuarios"> | bigint | number
    fkid_tbl_estados_usuario?: BigIntFilter<"tbl_usuarios"> | bigint | number
    fkid_tbl_personas?: BigIntFilter<"tbl_usuarios"> | bigint | number
    persona?: XOR<Tbl_personasScalarRelationFilter, tbl_personasWhereInput>
    rol?: XOR<Tbl_rolesScalarRelationFilter, tbl_rolesWhereInput>
    estado?: XOR<Tbl_estados_usuarioScalarRelationFilter, tbl_estados_usuarioWhereInput>
    comercios?: Tbl_comerciosListRelationFilter
  }, "pkusuario">

  export type tbl_usuariosOrderByWithAggregationInput = {
    pkusuario?: SortOrder
    contrase_a?: SortOrder
    fkid_tbl_roles?: SortOrder
    fkid_tbl_estados_usuario?: SortOrder
    fkid_tbl_personas?: SortOrder
    _count?: tbl_usuariosCountOrderByAggregateInput
    _avg?: tbl_usuariosAvgOrderByAggregateInput
    _max?: tbl_usuariosMaxOrderByAggregateInput
    _min?: tbl_usuariosMinOrderByAggregateInput
    _sum?: tbl_usuariosSumOrderByAggregateInput
  }

  export type tbl_usuariosScalarWhereWithAggregatesInput = {
    AND?: tbl_usuariosScalarWhereWithAggregatesInput | tbl_usuariosScalarWhereWithAggregatesInput[]
    OR?: tbl_usuariosScalarWhereWithAggregatesInput[]
    NOT?: tbl_usuariosScalarWhereWithAggregatesInput | tbl_usuariosScalarWhereWithAggregatesInput[]
    pkusuario?: StringWithAggregatesFilter<"tbl_usuarios"> | string
    contrase_a?: StringWithAggregatesFilter<"tbl_usuarios"> | string
    fkid_tbl_roles?: BigIntWithAggregatesFilter<"tbl_usuarios"> | bigint | number
    fkid_tbl_estados_usuario?: BigIntWithAggregatesFilter<"tbl_usuarios"> | bigint | number
    fkid_tbl_personas?: BigIntWithAggregatesFilter<"tbl_usuarios"> | bigint | number
  }

  export type tbl_campaniasCreateInput = {
    pkid?: bigint | number
    nombre: string
    presupuesto_gastado: number
    fecha_inicio: Date | string
    fecha_fin: Date | string
    comercio?: tbl_comerciosCreateNestedOneWithoutCampaniasInput
  }

  export type tbl_campaniasUncheckedCreateInput = {
    pkid?: bigint | number
    nombre: string
    presupuesto_gastado: number
    fecha_inicio: Date | string
    fecha_fin: Date | string
    fkid_tbl_comercios?: bigint | number | null
  }

  export type tbl_campaniasUpdateInput = {
    pkid?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre?: StringFieldUpdateOperationsInput | string
    presupuesto_gastado?: FloatFieldUpdateOperationsInput | number
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    comercio?: tbl_comerciosUpdateOneWithoutCampaniasNestedInput
  }

  export type tbl_campaniasUncheckedUpdateInput = {
    pkid?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre?: StringFieldUpdateOperationsInput | string
    presupuesto_gastado?: FloatFieldUpdateOperationsInput | number
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    fkid_tbl_comercios?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type tbl_campaniasCreateManyInput = {
    pkid?: bigint | number
    nombre: string
    presupuesto_gastado: number
    fecha_inicio: Date | string
    fecha_fin: Date | string
    fkid_tbl_comercios?: bigint | number | null
  }

  export type tbl_campaniasUpdateManyMutationInput = {
    pkid?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre?: StringFieldUpdateOperationsInput | string
    presupuesto_gastado?: FloatFieldUpdateOperationsInput | number
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tbl_campaniasUncheckedUpdateManyInput = {
    pkid?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre?: StringFieldUpdateOperationsInput | string
    presupuesto_gastado?: FloatFieldUpdateOperationsInput | number
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: DateTimeFieldUpdateOperationsInput | Date | string
    fkid_tbl_comercios?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type tbl_clientesCreateInput = {
    pkid?: bigint | number
    telefono: string
    nombres: string
    apellidos: string
    correo: string
    direccion: string
    municipios?: tbl_municipiosCreateNestedOneWithoutClientesInput
    comercios?: tbl_comerciosCreateNestedOneWithoutClientesInput
    pedidos?: tbl_pedidosCreateNestedManyWithoutClientesInput
  }

  export type tbl_clientesUncheckedCreateInput = {
    pkid?: bigint | number
    telefono: string
    nombres: string
    apellidos: string
    correo: string
    direccion: string
    fkid_tbl_municipios?: bigint | number | null
    fkid_tbl_comercios?: bigint | number | null
    pedidos?: tbl_pedidosUncheckedCreateNestedManyWithoutClientesInput
  }

  export type tbl_clientesUpdateInput = {
    pkid?: BigIntFieldUpdateOperationsInput | bigint | number
    telefono?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    municipios?: tbl_municipiosUpdateOneWithoutClientesNestedInput
    comercios?: tbl_comerciosUpdateOneWithoutClientesNestedInput
    pedidos?: tbl_pedidosUpdateManyWithoutClientesNestedInput
  }

  export type tbl_clientesUncheckedUpdateInput = {
    pkid?: BigIntFieldUpdateOperationsInput | bigint | number
    telefono?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    fkid_tbl_municipios?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    fkid_tbl_comercios?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    pedidos?: tbl_pedidosUncheckedUpdateManyWithoutClientesNestedInput
  }

  export type tbl_clientesCreateManyInput = {
    pkid?: bigint | number
    telefono: string
    nombres: string
    apellidos: string
    correo: string
    direccion: string
    fkid_tbl_municipios?: bigint | number | null
    fkid_tbl_comercios?: bigint | number | null
  }

  export type tbl_clientesUpdateManyMutationInput = {
    pkid?: BigIntFieldUpdateOperationsInput | bigint | number
    telefono?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
  }

  export type tbl_clientesUncheckedUpdateManyInput = {
    pkid?: BigIntFieldUpdateOperationsInput | bigint | number
    telefono?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    fkid_tbl_municipios?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    fkid_tbl_comercios?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type tbl_departamentosCreateInput = {
    pkid?: bigint | number
    nombre: string
    nomenclatura: string
    municipios?: tbl_municipiosCreateNestedManyWithoutDepartamentoInput
  }

  export type tbl_departamentosUncheckedCreateInput = {
    pkid?: bigint | number
    nombre: string
    nomenclatura: string
    municipios?: tbl_municipiosUncheckedCreateNestedManyWithoutDepartamentoInput
  }

  export type tbl_departamentosUpdateInput = {
    pkid?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre?: StringFieldUpdateOperationsInput | string
    nomenclatura?: StringFieldUpdateOperationsInput | string
    municipios?: tbl_municipiosUpdateManyWithoutDepartamentoNestedInput
  }

  export type tbl_departamentosUncheckedUpdateInput = {
    pkid?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre?: StringFieldUpdateOperationsInput | string
    nomenclatura?: StringFieldUpdateOperationsInput | string
    municipios?: tbl_municipiosUncheckedUpdateManyWithoutDepartamentoNestedInput
  }

  export type tbl_departamentosCreateManyInput = {
    pkid?: bigint | number
    nombre: string
    nomenclatura: string
  }

  export type tbl_departamentosUpdateManyMutationInput = {
    pkid?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre?: StringFieldUpdateOperationsInput | string
    nomenclatura?: StringFieldUpdateOperationsInput | string
  }

  export type tbl_departamentosUncheckedUpdateManyInput = {
    pkid?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre?: StringFieldUpdateOperationsInput | string
    nomenclatura?: StringFieldUpdateOperationsInput | string
  }

  export type tbl_det_productosCreateInput = {
    pkid?: bigint | number
    nombre: string
    productos?: tbl_productosCreateNestedOneWithoutDet_productosInput
    pedidos?: tbl_pedidosCreateNestedManyWithoutDet_productosInput
  }

  export type tbl_det_productosUncheckedCreateInput = {
    pkid?: bigint | number
    nombre: string
    fkid_tbl_productos?: bigint | number | null
    pedidos?: tbl_pedidosUncheckedCreateNestedManyWithoutDet_productosInput
  }

  export type tbl_det_productosUpdateInput = {
    pkid?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre?: StringFieldUpdateOperationsInput | string
    productos?: tbl_productosUpdateOneWithoutDet_productosNestedInput
    pedidos?: tbl_pedidosUpdateManyWithoutDet_productosNestedInput
  }

  export type tbl_det_productosUncheckedUpdateInput = {
    pkid?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre?: StringFieldUpdateOperationsInput | string
    fkid_tbl_productos?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    pedidos?: tbl_pedidosUncheckedUpdateManyWithoutDet_productosNestedInput
  }

  export type tbl_det_productosCreateManyInput = {
    pkid?: bigint | number
    nombre: string
    fkid_tbl_productos?: bigint | number | null
  }

  export type tbl_det_productosUpdateManyMutationInput = {
    pkid?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type tbl_det_productosUncheckedUpdateManyInput = {
    pkid?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre?: StringFieldUpdateOperationsInput | string
    fkid_tbl_productos?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type tbl_estados_usuarioCreateInput = {
    pkid?: bigint | number
    nombre: string
    nomenclatura: string
    usuarios?: tbl_usuariosCreateNestedManyWithoutEstadoInput
  }

  export type tbl_estados_usuarioUncheckedCreateInput = {
    pkid?: bigint | number
    nombre: string
    nomenclatura: string
    usuarios?: tbl_usuariosUncheckedCreateNestedManyWithoutEstadoInput
  }

  export type tbl_estados_usuarioUpdateInput = {
    pkid?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre?: StringFieldUpdateOperationsInput | string
    nomenclatura?: StringFieldUpdateOperationsInput | string
    usuarios?: tbl_usuariosUpdateManyWithoutEstadoNestedInput
  }

  export type tbl_estados_usuarioUncheckedUpdateInput = {
    pkid?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre?: StringFieldUpdateOperationsInput | string
    nomenclatura?: StringFieldUpdateOperationsInput | string
    usuarios?: tbl_usuariosUncheckedUpdateManyWithoutEstadoNestedInput
  }

  export type tbl_estados_usuarioCreateManyInput = {
    pkid?: bigint | number
    nombre: string
    nomenclatura: string
  }

  export type tbl_estados_usuarioUpdateManyMutationInput = {
    pkid?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre?: StringFieldUpdateOperationsInput | string
    nomenclatura?: StringFieldUpdateOperationsInput | string
  }

  export type tbl_estados_usuarioUncheckedUpdateManyInput = {
    pkid?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre?: StringFieldUpdateOperationsInput | string
    nomenclatura?: StringFieldUpdateOperationsInput | string
  }

  export type tbl_municipiosCreateInput = {
    pkid?: bigint | number
    nombre: string
    nomenclatura: string
    departamento?: tbl_departamentosCreateNestedOneWithoutMunicipiosInput
    clientes?: tbl_clientesCreateNestedManyWithoutMunicipiosInput
  }

  export type tbl_municipiosUncheckedCreateInput = {
    pkid?: bigint | number
    nombre: string
    nomenclatura: string
    fkid_tbl_departamentos?: bigint | number | null
    clientes?: tbl_clientesUncheckedCreateNestedManyWithoutMunicipiosInput
  }

  export type tbl_municipiosUpdateInput = {
    pkid?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre?: StringFieldUpdateOperationsInput | string
    nomenclatura?: StringFieldUpdateOperationsInput | string
    departamento?: tbl_departamentosUpdateOneWithoutMunicipiosNestedInput
    clientes?: tbl_clientesUpdateManyWithoutMunicipiosNestedInput
  }

  export type tbl_municipiosUncheckedUpdateInput = {
    pkid?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre?: StringFieldUpdateOperationsInput | string
    nomenclatura?: StringFieldUpdateOperationsInput | string
    fkid_tbl_departamentos?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    clientes?: tbl_clientesUncheckedUpdateManyWithoutMunicipiosNestedInput
  }

  export type tbl_municipiosCreateManyInput = {
    pkid?: bigint | number
    nombre: string
    nomenclatura: string
    fkid_tbl_departamentos?: bigint | number | null
  }

  export type tbl_municipiosUpdateManyMutationInput = {
    pkid?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre?: StringFieldUpdateOperationsInput | string
    nomenclatura?: StringFieldUpdateOperationsInput | string
  }

  export type tbl_municipiosUncheckedUpdateManyInput = {
    pkid?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre?: StringFieldUpdateOperationsInput | string
    nomenclatura?: StringFieldUpdateOperationsInput | string
    fkid_tbl_departamentos?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type tbl_pedidosCreateInput = {
    pkid?: bigint | number
    valor: number
    fecha: Date | string
    clientes?: tbl_clientesCreateNestedOneWithoutPedidosInput
    det_productos?: tbl_det_productosCreateNestedOneWithoutPedidosInput
    transportadoras?: tbl_transportadorasCreateNestedOneWithoutPedidosInput
  }

  export type tbl_pedidosUncheckedCreateInput = {
    pkid?: bigint | number
    fkid_tbl_clientes?: bigint | number | null
    fkid_tbl_det_productos?: bigint | number | null
    fkid_tbl_transportadoras?: bigint | number | null
    valor: number
    fecha: Date | string
  }

  export type tbl_pedidosUpdateInput = {
    pkid?: BigIntFieldUpdateOperationsInput | bigint | number
    valor?: FloatFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    clientes?: tbl_clientesUpdateOneWithoutPedidosNestedInput
    det_productos?: tbl_det_productosUpdateOneWithoutPedidosNestedInput
    transportadoras?: tbl_transportadorasUpdateOneWithoutPedidosNestedInput
  }

  export type tbl_pedidosUncheckedUpdateInput = {
    pkid?: BigIntFieldUpdateOperationsInput | bigint | number
    fkid_tbl_clientes?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    fkid_tbl_det_productos?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    fkid_tbl_transportadoras?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    valor?: FloatFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tbl_pedidosCreateManyInput = {
    pkid?: bigint | number
    fkid_tbl_clientes?: bigint | number | null
    fkid_tbl_det_productos?: bigint | number | null
    fkid_tbl_transportadoras?: bigint | number | null
    valor: number
    fecha: Date | string
  }

  export type tbl_pedidosUpdateManyMutationInput = {
    pkid?: BigIntFieldUpdateOperationsInput | bigint | number
    valor?: FloatFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tbl_pedidosUncheckedUpdateManyInput = {
    pkid?: BigIntFieldUpdateOperationsInput | bigint | number
    fkid_tbl_clientes?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    fkid_tbl_det_productos?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    fkid_tbl_transportadoras?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    valor?: FloatFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tbl_personasCreateInput = {
    pkid?: bigint | number
    nombres: string
    apellidos: string
    correo: string
    usuarios?: tbl_usuariosCreateNestedManyWithoutPersonaInput
  }

  export type tbl_personasUncheckedCreateInput = {
    pkid?: bigint | number
    nombres: string
    apellidos: string
    correo: string
    usuarios?: tbl_usuariosUncheckedCreateNestedManyWithoutPersonaInput
  }

  export type tbl_personasUpdateInput = {
    pkid?: BigIntFieldUpdateOperationsInput | bigint | number
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    usuarios?: tbl_usuariosUpdateManyWithoutPersonaNestedInput
  }

  export type tbl_personasUncheckedUpdateInput = {
    pkid?: BigIntFieldUpdateOperationsInput | bigint | number
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    usuarios?: tbl_usuariosUncheckedUpdateManyWithoutPersonaNestedInput
  }

  export type tbl_personasCreateManyInput = {
    pkid?: bigint | number
    nombres: string
    apellidos: string
    correo: string
  }

  export type tbl_personasUpdateManyMutationInput = {
    pkid?: BigIntFieldUpdateOperationsInput | bigint | number
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
  }

  export type tbl_personasUncheckedUpdateManyInput = {
    pkid?: BigIntFieldUpdateOperationsInput | bigint | number
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
  }

  export type tbl_productosCreateInput = {
    pkid?: bigint | number
    nombre: string
    costo: number
    valor: number
    empresas?: tbl_empresasCreateNestedOneWithoutProductosInput
    det_productos?: tbl_det_productosCreateNestedManyWithoutProductosInput
  }

  export type tbl_productosUncheckedCreateInput = {
    pkid?: bigint | number
    nombre: string
    costo: number
    valor: number
    fkid_tbl_empresas?: bigint | number | null
    det_productos?: tbl_det_productosUncheckedCreateNestedManyWithoutProductosInput
  }

  export type tbl_productosUpdateInput = {
    pkid?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre?: StringFieldUpdateOperationsInput | string
    costo?: FloatFieldUpdateOperationsInput | number
    valor?: FloatFieldUpdateOperationsInput | number
    empresas?: tbl_empresasUpdateOneWithoutProductosNestedInput
    det_productos?: tbl_det_productosUpdateManyWithoutProductosNestedInput
  }

  export type tbl_productosUncheckedUpdateInput = {
    pkid?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre?: StringFieldUpdateOperationsInput | string
    costo?: FloatFieldUpdateOperationsInput | number
    valor?: FloatFieldUpdateOperationsInput | number
    fkid_tbl_empresas?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    det_productos?: tbl_det_productosUncheckedUpdateManyWithoutProductosNestedInput
  }

  export type tbl_productosCreateManyInput = {
    pkid?: bigint | number
    nombre: string
    costo: number
    valor: number
    fkid_tbl_empresas?: bigint | number | null
  }

  export type tbl_productosUpdateManyMutationInput = {
    pkid?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre?: StringFieldUpdateOperationsInput | string
    costo?: FloatFieldUpdateOperationsInput | number
    valor?: FloatFieldUpdateOperationsInput | number
  }

  export type tbl_productosUncheckedUpdateManyInput = {
    pkid?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre?: StringFieldUpdateOperationsInput | string
    costo?: FloatFieldUpdateOperationsInput | number
    valor?: FloatFieldUpdateOperationsInput | number
    fkid_tbl_empresas?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type tbl_empresasCreateInput = {
    pkid?: bigint | number
    nit: string
    nombre: string
    telefono: string
    correo: string
    productos?: tbl_productosCreateNestedManyWithoutEmpresasInput
  }

  export type tbl_empresasUncheckedCreateInput = {
    pkid?: bigint | number
    nit: string
    nombre: string
    telefono: string
    correo: string
    productos?: tbl_productosUncheckedCreateNestedManyWithoutEmpresasInput
  }

  export type tbl_empresasUpdateInput = {
    pkid?: BigIntFieldUpdateOperationsInput | bigint | number
    nit?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    productos?: tbl_productosUpdateManyWithoutEmpresasNestedInput
  }

  export type tbl_empresasUncheckedUpdateInput = {
    pkid?: BigIntFieldUpdateOperationsInput | bigint | number
    nit?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    productos?: tbl_productosUncheckedUpdateManyWithoutEmpresasNestedInput
  }

  export type tbl_empresasCreateManyInput = {
    pkid?: bigint | number
    nit: string
    nombre: string
    telefono: string
    correo: string
  }

  export type tbl_empresasUpdateManyMutationInput = {
    pkid?: BigIntFieldUpdateOperationsInput | bigint | number
    nit?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
  }

  export type tbl_empresasUncheckedUpdateManyInput = {
    pkid?: BigIntFieldUpdateOperationsInput | bigint | number
    nit?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
  }

  export type tbl_rolesCreateInput = {
    pkid?: bigint | number
    nombre: string
    nomenclatura: string
    usuarios?: tbl_usuariosCreateNestedManyWithoutRolInput
  }

  export type tbl_rolesUncheckedCreateInput = {
    pkid?: bigint | number
    nombre: string
    nomenclatura: string
    usuarios?: tbl_usuariosUncheckedCreateNestedManyWithoutRolInput
  }

  export type tbl_rolesUpdateInput = {
    pkid?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre?: StringFieldUpdateOperationsInput | string
    nomenclatura?: StringFieldUpdateOperationsInput | string
    usuarios?: tbl_usuariosUpdateManyWithoutRolNestedInput
  }

  export type tbl_rolesUncheckedUpdateInput = {
    pkid?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre?: StringFieldUpdateOperationsInput | string
    nomenclatura?: StringFieldUpdateOperationsInput | string
    usuarios?: tbl_usuariosUncheckedUpdateManyWithoutRolNestedInput
  }

  export type tbl_rolesCreateManyInput = {
    pkid?: bigint | number
    nombre: string
    nomenclatura: string
  }

  export type tbl_rolesUpdateManyMutationInput = {
    pkid?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre?: StringFieldUpdateOperationsInput | string
    nomenclatura?: StringFieldUpdateOperationsInput | string
  }

  export type tbl_rolesUncheckedUpdateManyInput = {
    pkid?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre?: StringFieldUpdateOperationsInput | string
    nomenclatura?: StringFieldUpdateOperationsInput | string
  }

  export type tbl_comerciosCreateInput = {
    pkid?: bigint | number
    nombre: string
    telefono: string
    correo: string
    usuarios?: tbl_usuariosCreateNestedOneWithoutComerciosInput
    campanias?: tbl_campaniasCreateNestedManyWithoutComercioInput
    clientes?: tbl_clientesCreateNestedManyWithoutComerciosInput
  }

  export type tbl_comerciosUncheckedCreateInput = {
    pkid?: bigint | number
    nombre: string
    telefono: string
    correo: string
    fkusuario_tbl_usuarios?: string | null
    campanias?: tbl_campaniasUncheckedCreateNestedManyWithoutComercioInput
    clientes?: tbl_clientesUncheckedCreateNestedManyWithoutComerciosInput
  }

  export type tbl_comerciosUpdateInput = {
    pkid?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    usuarios?: tbl_usuariosUpdateOneWithoutComerciosNestedInput
    campanias?: tbl_campaniasUpdateManyWithoutComercioNestedInput
    clientes?: tbl_clientesUpdateManyWithoutComerciosNestedInput
  }

  export type tbl_comerciosUncheckedUpdateInput = {
    pkid?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    fkusuario_tbl_usuarios?: NullableStringFieldUpdateOperationsInput | string | null
    campanias?: tbl_campaniasUncheckedUpdateManyWithoutComercioNestedInput
    clientes?: tbl_clientesUncheckedUpdateManyWithoutComerciosNestedInput
  }

  export type tbl_comerciosCreateManyInput = {
    pkid?: bigint | number
    nombre: string
    telefono: string
    correo: string
    fkusuario_tbl_usuarios?: string | null
  }

  export type tbl_comerciosUpdateManyMutationInput = {
    pkid?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
  }

  export type tbl_comerciosUncheckedUpdateManyInput = {
    pkid?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    fkusuario_tbl_usuarios?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type tbl_transportadorasCreateInput = {
    pkid?: bigint | number
    nombre: string
    nomenclatura: string
    pedidos?: tbl_pedidosCreateNestedManyWithoutTransportadorasInput
  }

  export type tbl_transportadorasUncheckedCreateInput = {
    pkid?: bigint | number
    nombre: string
    nomenclatura: string
    pedidos?: tbl_pedidosUncheckedCreateNestedManyWithoutTransportadorasInput
  }

  export type tbl_transportadorasUpdateInput = {
    pkid?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre?: StringFieldUpdateOperationsInput | string
    nomenclatura?: StringFieldUpdateOperationsInput | string
    pedidos?: tbl_pedidosUpdateManyWithoutTransportadorasNestedInput
  }

  export type tbl_transportadorasUncheckedUpdateInput = {
    pkid?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre?: StringFieldUpdateOperationsInput | string
    nomenclatura?: StringFieldUpdateOperationsInput | string
    pedidos?: tbl_pedidosUncheckedUpdateManyWithoutTransportadorasNestedInput
  }

  export type tbl_transportadorasCreateManyInput = {
    pkid?: bigint | number
    nombre: string
    nomenclatura: string
  }

  export type tbl_transportadorasUpdateManyMutationInput = {
    pkid?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre?: StringFieldUpdateOperationsInput | string
    nomenclatura?: StringFieldUpdateOperationsInput | string
  }

  export type tbl_transportadorasUncheckedUpdateManyInput = {
    pkid?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre?: StringFieldUpdateOperationsInput | string
    nomenclatura?: StringFieldUpdateOperationsInput | string
  }

  export type tbl_usuariosCreateInput = {
    pkusuario: string
    contrase_a: string
    persona: tbl_personasCreateNestedOneWithoutUsuariosInput
    rol: tbl_rolesCreateNestedOneWithoutUsuariosInput
    estado: tbl_estados_usuarioCreateNestedOneWithoutUsuariosInput
    comercios?: tbl_comerciosCreateNestedManyWithoutUsuariosInput
  }

  export type tbl_usuariosUncheckedCreateInput = {
    pkusuario: string
    contrase_a: string
    fkid_tbl_roles: bigint | number
    fkid_tbl_estados_usuario: bigint | number
    fkid_tbl_personas: bigint | number
    comercios?: tbl_comerciosUncheckedCreateNestedManyWithoutUsuariosInput
  }

  export type tbl_usuariosUpdateInput = {
    pkusuario?: StringFieldUpdateOperationsInput | string
    contrase_a?: StringFieldUpdateOperationsInput | string
    persona?: tbl_personasUpdateOneRequiredWithoutUsuariosNestedInput
    rol?: tbl_rolesUpdateOneRequiredWithoutUsuariosNestedInput
    estado?: tbl_estados_usuarioUpdateOneRequiredWithoutUsuariosNestedInput
    comercios?: tbl_comerciosUpdateManyWithoutUsuariosNestedInput
  }

  export type tbl_usuariosUncheckedUpdateInput = {
    pkusuario?: StringFieldUpdateOperationsInput | string
    contrase_a?: StringFieldUpdateOperationsInput | string
    fkid_tbl_roles?: BigIntFieldUpdateOperationsInput | bigint | number
    fkid_tbl_estados_usuario?: BigIntFieldUpdateOperationsInput | bigint | number
    fkid_tbl_personas?: BigIntFieldUpdateOperationsInput | bigint | number
    comercios?: tbl_comerciosUncheckedUpdateManyWithoutUsuariosNestedInput
  }

  export type tbl_usuariosCreateManyInput = {
    pkusuario: string
    contrase_a: string
    fkid_tbl_roles: bigint | number
    fkid_tbl_estados_usuario: bigint | number
    fkid_tbl_personas: bigint | number
  }

  export type tbl_usuariosUpdateManyMutationInput = {
    pkusuario?: StringFieldUpdateOperationsInput | string
    contrase_a?: StringFieldUpdateOperationsInput | string
  }

  export type tbl_usuariosUncheckedUpdateManyInput = {
    pkusuario?: StringFieldUpdateOperationsInput | string
    contrase_a?: StringFieldUpdateOperationsInput | string
    fkid_tbl_roles?: BigIntFieldUpdateOperationsInput | bigint | number
    fkid_tbl_estados_usuario?: BigIntFieldUpdateOperationsInput | bigint | number
    fkid_tbl_personas?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type Tbl_comerciosNullableScalarRelationFilter = {
    is?: tbl_comerciosWhereInput | null
    isNot?: tbl_comerciosWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type tbl_campaniasCountOrderByAggregateInput = {
    pkid?: SortOrder
    nombre?: SortOrder
    presupuesto_gastado?: SortOrder
    fecha_inicio?: SortOrder
    fecha_fin?: SortOrder
    fkid_tbl_comercios?: SortOrder
  }

  export type tbl_campaniasAvgOrderByAggregateInput = {
    pkid?: SortOrder
    presupuesto_gastado?: SortOrder
    fkid_tbl_comercios?: SortOrder
  }

  export type tbl_campaniasMaxOrderByAggregateInput = {
    pkid?: SortOrder
    nombre?: SortOrder
    presupuesto_gastado?: SortOrder
    fecha_inicio?: SortOrder
    fecha_fin?: SortOrder
    fkid_tbl_comercios?: SortOrder
  }

  export type tbl_campaniasMinOrderByAggregateInput = {
    pkid?: SortOrder
    nombre?: SortOrder
    presupuesto_gastado?: SortOrder
    fecha_inicio?: SortOrder
    fecha_fin?: SortOrder
    fkid_tbl_comercios?: SortOrder
  }

  export type tbl_campaniasSumOrderByAggregateInput = {
    pkid?: SortOrder
    presupuesto_gastado?: SortOrder
    fkid_tbl_comercios?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
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

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type Tbl_municipiosNullableScalarRelationFilter = {
    is?: tbl_municipiosWhereInput | null
    isNot?: tbl_municipiosWhereInput | null
  }

  export type Tbl_pedidosListRelationFilter = {
    every?: tbl_pedidosWhereInput
    some?: tbl_pedidosWhereInput
    none?: tbl_pedidosWhereInput
  }

  export type tbl_pedidosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tbl_clientesCountOrderByAggregateInput = {
    pkid?: SortOrder
    telefono?: SortOrder
    nombres?: SortOrder
    apellidos?: SortOrder
    correo?: SortOrder
    direccion?: SortOrder
    fkid_tbl_municipios?: SortOrder
    fkid_tbl_comercios?: SortOrder
  }

  export type tbl_clientesAvgOrderByAggregateInput = {
    pkid?: SortOrder
    fkid_tbl_municipios?: SortOrder
    fkid_tbl_comercios?: SortOrder
  }

  export type tbl_clientesMaxOrderByAggregateInput = {
    pkid?: SortOrder
    telefono?: SortOrder
    nombres?: SortOrder
    apellidos?: SortOrder
    correo?: SortOrder
    direccion?: SortOrder
    fkid_tbl_municipios?: SortOrder
    fkid_tbl_comercios?: SortOrder
  }

  export type tbl_clientesMinOrderByAggregateInput = {
    pkid?: SortOrder
    telefono?: SortOrder
    nombres?: SortOrder
    apellidos?: SortOrder
    correo?: SortOrder
    direccion?: SortOrder
    fkid_tbl_municipios?: SortOrder
    fkid_tbl_comercios?: SortOrder
  }

  export type tbl_clientesSumOrderByAggregateInput = {
    pkid?: SortOrder
    fkid_tbl_municipios?: SortOrder
    fkid_tbl_comercios?: SortOrder
  }

  export type Tbl_municipiosListRelationFilter = {
    every?: tbl_municipiosWhereInput
    some?: tbl_municipiosWhereInput
    none?: tbl_municipiosWhereInput
  }

  export type tbl_municipiosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tbl_departamentosCountOrderByAggregateInput = {
    pkid?: SortOrder
    nombre?: SortOrder
    nomenclatura?: SortOrder
  }

  export type tbl_departamentosAvgOrderByAggregateInput = {
    pkid?: SortOrder
  }

  export type tbl_departamentosMaxOrderByAggregateInput = {
    pkid?: SortOrder
    nombre?: SortOrder
    nomenclatura?: SortOrder
  }

  export type tbl_departamentosMinOrderByAggregateInput = {
    pkid?: SortOrder
    nombre?: SortOrder
    nomenclatura?: SortOrder
  }

  export type tbl_departamentosSumOrderByAggregateInput = {
    pkid?: SortOrder
  }

  export type Tbl_productosNullableScalarRelationFilter = {
    is?: tbl_productosWhereInput | null
    isNot?: tbl_productosWhereInput | null
  }

  export type tbl_det_productosCountOrderByAggregateInput = {
    pkid?: SortOrder
    nombre?: SortOrder
    fkid_tbl_productos?: SortOrder
  }

  export type tbl_det_productosAvgOrderByAggregateInput = {
    pkid?: SortOrder
    fkid_tbl_productos?: SortOrder
  }

  export type tbl_det_productosMaxOrderByAggregateInput = {
    pkid?: SortOrder
    nombre?: SortOrder
    fkid_tbl_productos?: SortOrder
  }

  export type tbl_det_productosMinOrderByAggregateInput = {
    pkid?: SortOrder
    nombre?: SortOrder
    fkid_tbl_productos?: SortOrder
  }

  export type tbl_det_productosSumOrderByAggregateInput = {
    pkid?: SortOrder
    fkid_tbl_productos?: SortOrder
  }

  export type Tbl_usuariosListRelationFilter = {
    every?: tbl_usuariosWhereInput
    some?: tbl_usuariosWhereInput
    none?: tbl_usuariosWhereInput
  }

  export type tbl_usuariosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tbl_estados_usuarioCountOrderByAggregateInput = {
    pkid?: SortOrder
    nombre?: SortOrder
    nomenclatura?: SortOrder
  }

  export type tbl_estados_usuarioAvgOrderByAggregateInput = {
    pkid?: SortOrder
  }

  export type tbl_estados_usuarioMaxOrderByAggregateInput = {
    pkid?: SortOrder
    nombre?: SortOrder
    nomenclatura?: SortOrder
  }

  export type tbl_estados_usuarioMinOrderByAggregateInput = {
    pkid?: SortOrder
    nombre?: SortOrder
    nomenclatura?: SortOrder
  }

  export type tbl_estados_usuarioSumOrderByAggregateInput = {
    pkid?: SortOrder
  }

  export type Tbl_departamentosNullableScalarRelationFilter = {
    is?: tbl_departamentosWhereInput | null
    isNot?: tbl_departamentosWhereInput | null
  }

  export type Tbl_clientesListRelationFilter = {
    every?: tbl_clientesWhereInput
    some?: tbl_clientesWhereInput
    none?: tbl_clientesWhereInput
  }

  export type tbl_clientesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tbl_municipiosCountOrderByAggregateInput = {
    pkid?: SortOrder
    nombre?: SortOrder
    nomenclatura?: SortOrder
    fkid_tbl_departamentos?: SortOrder
  }

  export type tbl_municipiosAvgOrderByAggregateInput = {
    pkid?: SortOrder
    fkid_tbl_departamentos?: SortOrder
  }

  export type tbl_municipiosMaxOrderByAggregateInput = {
    pkid?: SortOrder
    nombre?: SortOrder
    nomenclatura?: SortOrder
    fkid_tbl_departamentos?: SortOrder
  }

  export type tbl_municipiosMinOrderByAggregateInput = {
    pkid?: SortOrder
    nombre?: SortOrder
    nomenclatura?: SortOrder
    fkid_tbl_departamentos?: SortOrder
  }

  export type tbl_municipiosSumOrderByAggregateInput = {
    pkid?: SortOrder
    fkid_tbl_departamentos?: SortOrder
  }

  export type Tbl_clientesNullableScalarRelationFilter = {
    is?: tbl_clientesWhereInput | null
    isNot?: tbl_clientesWhereInput | null
  }

  export type Tbl_det_productosNullableScalarRelationFilter = {
    is?: tbl_det_productosWhereInput | null
    isNot?: tbl_det_productosWhereInput | null
  }

  export type Tbl_transportadorasNullableScalarRelationFilter = {
    is?: tbl_transportadorasWhereInput | null
    isNot?: tbl_transportadorasWhereInput | null
  }

  export type tbl_pedidosCountOrderByAggregateInput = {
    pkid?: SortOrder
    fkid_tbl_clientes?: SortOrder
    fkid_tbl_det_productos?: SortOrder
    fkid_tbl_transportadoras?: SortOrder
    valor?: SortOrder
    fecha?: SortOrder
  }

  export type tbl_pedidosAvgOrderByAggregateInput = {
    pkid?: SortOrder
    fkid_tbl_clientes?: SortOrder
    fkid_tbl_det_productos?: SortOrder
    fkid_tbl_transportadoras?: SortOrder
    valor?: SortOrder
  }

  export type tbl_pedidosMaxOrderByAggregateInput = {
    pkid?: SortOrder
    fkid_tbl_clientes?: SortOrder
    fkid_tbl_det_productos?: SortOrder
    fkid_tbl_transportadoras?: SortOrder
    valor?: SortOrder
    fecha?: SortOrder
  }

  export type tbl_pedidosMinOrderByAggregateInput = {
    pkid?: SortOrder
    fkid_tbl_clientes?: SortOrder
    fkid_tbl_det_productos?: SortOrder
    fkid_tbl_transportadoras?: SortOrder
    valor?: SortOrder
    fecha?: SortOrder
  }

  export type tbl_pedidosSumOrderByAggregateInput = {
    pkid?: SortOrder
    fkid_tbl_clientes?: SortOrder
    fkid_tbl_det_productos?: SortOrder
    fkid_tbl_transportadoras?: SortOrder
    valor?: SortOrder
  }

  export type tbl_personasCountOrderByAggregateInput = {
    pkid?: SortOrder
    nombres?: SortOrder
    apellidos?: SortOrder
    correo?: SortOrder
  }

  export type tbl_personasAvgOrderByAggregateInput = {
    pkid?: SortOrder
  }

  export type tbl_personasMaxOrderByAggregateInput = {
    pkid?: SortOrder
    nombres?: SortOrder
    apellidos?: SortOrder
    correo?: SortOrder
  }

  export type tbl_personasMinOrderByAggregateInput = {
    pkid?: SortOrder
    nombres?: SortOrder
    apellidos?: SortOrder
    correo?: SortOrder
  }

  export type tbl_personasSumOrderByAggregateInput = {
    pkid?: SortOrder
  }

  export type Tbl_empresasNullableScalarRelationFilter = {
    is?: tbl_empresasWhereInput | null
    isNot?: tbl_empresasWhereInput | null
  }

  export type Tbl_det_productosListRelationFilter = {
    every?: tbl_det_productosWhereInput
    some?: tbl_det_productosWhereInput
    none?: tbl_det_productosWhereInput
  }

  export type tbl_det_productosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tbl_productosCountOrderByAggregateInput = {
    pkid?: SortOrder
    nombre?: SortOrder
    costo?: SortOrder
    valor?: SortOrder
    fkid_tbl_empresas?: SortOrder
  }

  export type tbl_productosAvgOrderByAggregateInput = {
    pkid?: SortOrder
    costo?: SortOrder
    valor?: SortOrder
    fkid_tbl_empresas?: SortOrder
  }

  export type tbl_productosMaxOrderByAggregateInput = {
    pkid?: SortOrder
    nombre?: SortOrder
    costo?: SortOrder
    valor?: SortOrder
    fkid_tbl_empresas?: SortOrder
  }

  export type tbl_productosMinOrderByAggregateInput = {
    pkid?: SortOrder
    nombre?: SortOrder
    costo?: SortOrder
    valor?: SortOrder
    fkid_tbl_empresas?: SortOrder
  }

  export type tbl_productosSumOrderByAggregateInput = {
    pkid?: SortOrder
    costo?: SortOrder
    valor?: SortOrder
    fkid_tbl_empresas?: SortOrder
  }

  export type Tbl_productosListRelationFilter = {
    every?: tbl_productosWhereInput
    some?: tbl_productosWhereInput
    none?: tbl_productosWhereInput
  }

  export type tbl_productosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tbl_empresasCountOrderByAggregateInput = {
    pkid?: SortOrder
    nit?: SortOrder
    nombre?: SortOrder
    telefono?: SortOrder
    correo?: SortOrder
  }

  export type tbl_empresasAvgOrderByAggregateInput = {
    pkid?: SortOrder
  }

  export type tbl_empresasMaxOrderByAggregateInput = {
    pkid?: SortOrder
    nit?: SortOrder
    nombre?: SortOrder
    telefono?: SortOrder
    correo?: SortOrder
  }

  export type tbl_empresasMinOrderByAggregateInput = {
    pkid?: SortOrder
    nit?: SortOrder
    nombre?: SortOrder
    telefono?: SortOrder
    correo?: SortOrder
  }

  export type tbl_empresasSumOrderByAggregateInput = {
    pkid?: SortOrder
  }

  export type tbl_rolesCountOrderByAggregateInput = {
    pkid?: SortOrder
    nombre?: SortOrder
    nomenclatura?: SortOrder
  }

  export type tbl_rolesAvgOrderByAggregateInput = {
    pkid?: SortOrder
  }

  export type tbl_rolesMaxOrderByAggregateInput = {
    pkid?: SortOrder
    nombre?: SortOrder
    nomenclatura?: SortOrder
  }

  export type tbl_rolesMinOrderByAggregateInput = {
    pkid?: SortOrder
    nombre?: SortOrder
    nomenclatura?: SortOrder
  }

  export type tbl_rolesSumOrderByAggregateInput = {
    pkid?: SortOrder
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

  export type Tbl_usuariosNullableScalarRelationFilter = {
    is?: tbl_usuariosWhereInput | null
    isNot?: tbl_usuariosWhereInput | null
  }

  export type Tbl_campaniasListRelationFilter = {
    every?: tbl_campaniasWhereInput
    some?: tbl_campaniasWhereInput
    none?: tbl_campaniasWhereInput
  }

  export type tbl_campaniasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tbl_comerciosCountOrderByAggregateInput = {
    pkid?: SortOrder
    nombre?: SortOrder
    telefono?: SortOrder
    correo?: SortOrder
    fkusuario_tbl_usuarios?: SortOrder
  }

  export type tbl_comerciosAvgOrderByAggregateInput = {
    pkid?: SortOrder
  }

  export type tbl_comerciosMaxOrderByAggregateInput = {
    pkid?: SortOrder
    nombre?: SortOrder
    telefono?: SortOrder
    correo?: SortOrder
    fkusuario_tbl_usuarios?: SortOrder
  }

  export type tbl_comerciosMinOrderByAggregateInput = {
    pkid?: SortOrder
    nombre?: SortOrder
    telefono?: SortOrder
    correo?: SortOrder
    fkusuario_tbl_usuarios?: SortOrder
  }

  export type tbl_comerciosSumOrderByAggregateInput = {
    pkid?: SortOrder
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

  export type tbl_transportadorasCountOrderByAggregateInput = {
    pkid?: SortOrder
    nombre?: SortOrder
    nomenclatura?: SortOrder
  }

  export type tbl_transportadorasAvgOrderByAggregateInput = {
    pkid?: SortOrder
  }

  export type tbl_transportadorasMaxOrderByAggregateInput = {
    pkid?: SortOrder
    nombre?: SortOrder
    nomenclatura?: SortOrder
  }

  export type tbl_transportadorasMinOrderByAggregateInput = {
    pkid?: SortOrder
    nombre?: SortOrder
    nomenclatura?: SortOrder
  }

  export type tbl_transportadorasSumOrderByAggregateInput = {
    pkid?: SortOrder
  }

  export type Tbl_personasScalarRelationFilter = {
    is?: tbl_personasWhereInput
    isNot?: tbl_personasWhereInput
  }

  export type Tbl_rolesScalarRelationFilter = {
    is?: tbl_rolesWhereInput
    isNot?: tbl_rolesWhereInput
  }

  export type Tbl_estados_usuarioScalarRelationFilter = {
    is?: tbl_estados_usuarioWhereInput
    isNot?: tbl_estados_usuarioWhereInput
  }

  export type Tbl_comerciosListRelationFilter = {
    every?: tbl_comerciosWhereInput
    some?: tbl_comerciosWhereInput
    none?: tbl_comerciosWhereInput
  }

  export type tbl_comerciosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type tbl_usuariosCountOrderByAggregateInput = {
    pkusuario?: SortOrder
    contrase_a?: SortOrder
    fkid_tbl_roles?: SortOrder
    fkid_tbl_estados_usuario?: SortOrder
    fkid_tbl_personas?: SortOrder
  }

  export type tbl_usuariosAvgOrderByAggregateInput = {
    fkid_tbl_roles?: SortOrder
    fkid_tbl_estados_usuario?: SortOrder
    fkid_tbl_personas?: SortOrder
  }

  export type tbl_usuariosMaxOrderByAggregateInput = {
    pkusuario?: SortOrder
    contrase_a?: SortOrder
    fkid_tbl_roles?: SortOrder
    fkid_tbl_estados_usuario?: SortOrder
    fkid_tbl_personas?: SortOrder
  }

  export type tbl_usuariosMinOrderByAggregateInput = {
    pkusuario?: SortOrder
    contrase_a?: SortOrder
    fkid_tbl_roles?: SortOrder
    fkid_tbl_estados_usuario?: SortOrder
    fkid_tbl_personas?: SortOrder
  }

  export type tbl_usuariosSumOrderByAggregateInput = {
    fkid_tbl_roles?: SortOrder
    fkid_tbl_estados_usuario?: SortOrder
    fkid_tbl_personas?: SortOrder
  }

  export type tbl_comerciosCreateNestedOneWithoutCampaniasInput = {
    create?: XOR<tbl_comerciosCreateWithoutCampaniasInput, tbl_comerciosUncheckedCreateWithoutCampaniasInput>
    connectOrCreate?: tbl_comerciosCreateOrConnectWithoutCampaniasInput
    connect?: tbl_comerciosWhereUniqueInput
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type tbl_comerciosUpdateOneWithoutCampaniasNestedInput = {
    create?: XOR<tbl_comerciosCreateWithoutCampaniasInput, tbl_comerciosUncheckedCreateWithoutCampaniasInput>
    connectOrCreate?: tbl_comerciosCreateOrConnectWithoutCampaniasInput
    upsert?: tbl_comerciosUpsertWithoutCampaniasInput
    disconnect?: tbl_comerciosWhereInput | boolean
    delete?: tbl_comerciosWhereInput | boolean
    connect?: tbl_comerciosWhereUniqueInput
    update?: XOR<XOR<tbl_comerciosUpdateToOneWithWhereWithoutCampaniasInput, tbl_comerciosUpdateWithoutCampaniasInput>, tbl_comerciosUncheckedUpdateWithoutCampaniasInput>
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type tbl_municipiosCreateNestedOneWithoutClientesInput = {
    create?: XOR<tbl_municipiosCreateWithoutClientesInput, tbl_municipiosUncheckedCreateWithoutClientesInput>
    connectOrCreate?: tbl_municipiosCreateOrConnectWithoutClientesInput
    connect?: tbl_municipiosWhereUniqueInput
  }

  export type tbl_comerciosCreateNestedOneWithoutClientesInput = {
    create?: XOR<tbl_comerciosCreateWithoutClientesInput, tbl_comerciosUncheckedCreateWithoutClientesInput>
    connectOrCreate?: tbl_comerciosCreateOrConnectWithoutClientesInput
    connect?: tbl_comerciosWhereUniqueInput
  }

  export type tbl_pedidosCreateNestedManyWithoutClientesInput = {
    create?: XOR<tbl_pedidosCreateWithoutClientesInput, tbl_pedidosUncheckedCreateWithoutClientesInput> | tbl_pedidosCreateWithoutClientesInput[] | tbl_pedidosUncheckedCreateWithoutClientesInput[]
    connectOrCreate?: tbl_pedidosCreateOrConnectWithoutClientesInput | tbl_pedidosCreateOrConnectWithoutClientesInput[]
    createMany?: tbl_pedidosCreateManyClientesInputEnvelope
    connect?: tbl_pedidosWhereUniqueInput | tbl_pedidosWhereUniqueInput[]
  }

  export type tbl_pedidosUncheckedCreateNestedManyWithoutClientesInput = {
    create?: XOR<tbl_pedidosCreateWithoutClientesInput, tbl_pedidosUncheckedCreateWithoutClientesInput> | tbl_pedidosCreateWithoutClientesInput[] | tbl_pedidosUncheckedCreateWithoutClientesInput[]
    connectOrCreate?: tbl_pedidosCreateOrConnectWithoutClientesInput | tbl_pedidosCreateOrConnectWithoutClientesInput[]
    createMany?: tbl_pedidosCreateManyClientesInputEnvelope
    connect?: tbl_pedidosWhereUniqueInput | tbl_pedidosWhereUniqueInput[]
  }

  export type tbl_municipiosUpdateOneWithoutClientesNestedInput = {
    create?: XOR<tbl_municipiosCreateWithoutClientesInput, tbl_municipiosUncheckedCreateWithoutClientesInput>
    connectOrCreate?: tbl_municipiosCreateOrConnectWithoutClientesInput
    upsert?: tbl_municipiosUpsertWithoutClientesInput
    disconnect?: tbl_municipiosWhereInput | boolean
    delete?: tbl_municipiosWhereInput | boolean
    connect?: tbl_municipiosWhereUniqueInput
    update?: XOR<XOR<tbl_municipiosUpdateToOneWithWhereWithoutClientesInput, tbl_municipiosUpdateWithoutClientesInput>, tbl_municipiosUncheckedUpdateWithoutClientesInput>
  }

  export type tbl_comerciosUpdateOneWithoutClientesNestedInput = {
    create?: XOR<tbl_comerciosCreateWithoutClientesInput, tbl_comerciosUncheckedCreateWithoutClientesInput>
    connectOrCreate?: tbl_comerciosCreateOrConnectWithoutClientesInput
    upsert?: tbl_comerciosUpsertWithoutClientesInput
    disconnect?: tbl_comerciosWhereInput | boolean
    delete?: tbl_comerciosWhereInput | boolean
    connect?: tbl_comerciosWhereUniqueInput
    update?: XOR<XOR<tbl_comerciosUpdateToOneWithWhereWithoutClientesInput, tbl_comerciosUpdateWithoutClientesInput>, tbl_comerciosUncheckedUpdateWithoutClientesInput>
  }

  export type tbl_pedidosUpdateManyWithoutClientesNestedInput = {
    create?: XOR<tbl_pedidosCreateWithoutClientesInput, tbl_pedidosUncheckedCreateWithoutClientesInput> | tbl_pedidosCreateWithoutClientesInput[] | tbl_pedidosUncheckedCreateWithoutClientesInput[]
    connectOrCreate?: tbl_pedidosCreateOrConnectWithoutClientesInput | tbl_pedidosCreateOrConnectWithoutClientesInput[]
    upsert?: tbl_pedidosUpsertWithWhereUniqueWithoutClientesInput | tbl_pedidosUpsertWithWhereUniqueWithoutClientesInput[]
    createMany?: tbl_pedidosCreateManyClientesInputEnvelope
    set?: tbl_pedidosWhereUniqueInput | tbl_pedidosWhereUniqueInput[]
    disconnect?: tbl_pedidosWhereUniqueInput | tbl_pedidosWhereUniqueInput[]
    delete?: tbl_pedidosWhereUniqueInput | tbl_pedidosWhereUniqueInput[]
    connect?: tbl_pedidosWhereUniqueInput | tbl_pedidosWhereUniqueInput[]
    update?: tbl_pedidosUpdateWithWhereUniqueWithoutClientesInput | tbl_pedidosUpdateWithWhereUniqueWithoutClientesInput[]
    updateMany?: tbl_pedidosUpdateManyWithWhereWithoutClientesInput | tbl_pedidosUpdateManyWithWhereWithoutClientesInput[]
    deleteMany?: tbl_pedidosScalarWhereInput | tbl_pedidosScalarWhereInput[]
  }

  export type tbl_pedidosUncheckedUpdateManyWithoutClientesNestedInput = {
    create?: XOR<tbl_pedidosCreateWithoutClientesInput, tbl_pedidosUncheckedCreateWithoutClientesInput> | tbl_pedidosCreateWithoutClientesInput[] | tbl_pedidosUncheckedCreateWithoutClientesInput[]
    connectOrCreate?: tbl_pedidosCreateOrConnectWithoutClientesInput | tbl_pedidosCreateOrConnectWithoutClientesInput[]
    upsert?: tbl_pedidosUpsertWithWhereUniqueWithoutClientesInput | tbl_pedidosUpsertWithWhereUniqueWithoutClientesInput[]
    createMany?: tbl_pedidosCreateManyClientesInputEnvelope
    set?: tbl_pedidosWhereUniqueInput | tbl_pedidosWhereUniqueInput[]
    disconnect?: tbl_pedidosWhereUniqueInput | tbl_pedidosWhereUniqueInput[]
    delete?: tbl_pedidosWhereUniqueInput | tbl_pedidosWhereUniqueInput[]
    connect?: tbl_pedidosWhereUniqueInput | tbl_pedidosWhereUniqueInput[]
    update?: tbl_pedidosUpdateWithWhereUniqueWithoutClientesInput | tbl_pedidosUpdateWithWhereUniqueWithoutClientesInput[]
    updateMany?: tbl_pedidosUpdateManyWithWhereWithoutClientesInput | tbl_pedidosUpdateManyWithWhereWithoutClientesInput[]
    deleteMany?: tbl_pedidosScalarWhereInput | tbl_pedidosScalarWhereInput[]
  }

  export type tbl_municipiosCreateNestedManyWithoutDepartamentoInput = {
    create?: XOR<tbl_municipiosCreateWithoutDepartamentoInput, tbl_municipiosUncheckedCreateWithoutDepartamentoInput> | tbl_municipiosCreateWithoutDepartamentoInput[] | tbl_municipiosUncheckedCreateWithoutDepartamentoInput[]
    connectOrCreate?: tbl_municipiosCreateOrConnectWithoutDepartamentoInput | tbl_municipiosCreateOrConnectWithoutDepartamentoInput[]
    createMany?: tbl_municipiosCreateManyDepartamentoInputEnvelope
    connect?: tbl_municipiosWhereUniqueInput | tbl_municipiosWhereUniqueInput[]
  }

  export type tbl_municipiosUncheckedCreateNestedManyWithoutDepartamentoInput = {
    create?: XOR<tbl_municipiosCreateWithoutDepartamentoInput, tbl_municipiosUncheckedCreateWithoutDepartamentoInput> | tbl_municipiosCreateWithoutDepartamentoInput[] | tbl_municipiosUncheckedCreateWithoutDepartamentoInput[]
    connectOrCreate?: tbl_municipiosCreateOrConnectWithoutDepartamentoInput | tbl_municipiosCreateOrConnectWithoutDepartamentoInput[]
    createMany?: tbl_municipiosCreateManyDepartamentoInputEnvelope
    connect?: tbl_municipiosWhereUniqueInput | tbl_municipiosWhereUniqueInput[]
  }

  export type tbl_municipiosUpdateManyWithoutDepartamentoNestedInput = {
    create?: XOR<tbl_municipiosCreateWithoutDepartamentoInput, tbl_municipiosUncheckedCreateWithoutDepartamentoInput> | tbl_municipiosCreateWithoutDepartamentoInput[] | tbl_municipiosUncheckedCreateWithoutDepartamentoInput[]
    connectOrCreate?: tbl_municipiosCreateOrConnectWithoutDepartamentoInput | tbl_municipiosCreateOrConnectWithoutDepartamentoInput[]
    upsert?: tbl_municipiosUpsertWithWhereUniqueWithoutDepartamentoInput | tbl_municipiosUpsertWithWhereUniqueWithoutDepartamentoInput[]
    createMany?: tbl_municipiosCreateManyDepartamentoInputEnvelope
    set?: tbl_municipiosWhereUniqueInput | tbl_municipiosWhereUniqueInput[]
    disconnect?: tbl_municipiosWhereUniqueInput | tbl_municipiosWhereUniqueInput[]
    delete?: tbl_municipiosWhereUniqueInput | tbl_municipiosWhereUniqueInput[]
    connect?: tbl_municipiosWhereUniqueInput | tbl_municipiosWhereUniqueInput[]
    update?: tbl_municipiosUpdateWithWhereUniqueWithoutDepartamentoInput | tbl_municipiosUpdateWithWhereUniqueWithoutDepartamentoInput[]
    updateMany?: tbl_municipiosUpdateManyWithWhereWithoutDepartamentoInput | tbl_municipiosUpdateManyWithWhereWithoutDepartamentoInput[]
    deleteMany?: tbl_municipiosScalarWhereInput | tbl_municipiosScalarWhereInput[]
  }

  export type tbl_municipiosUncheckedUpdateManyWithoutDepartamentoNestedInput = {
    create?: XOR<tbl_municipiosCreateWithoutDepartamentoInput, tbl_municipiosUncheckedCreateWithoutDepartamentoInput> | tbl_municipiosCreateWithoutDepartamentoInput[] | tbl_municipiosUncheckedCreateWithoutDepartamentoInput[]
    connectOrCreate?: tbl_municipiosCreateOrConnectWithoutDepartamentoInput | tbl_municipiosCreateOrConnectWithoutDepartamentoInput[]
    upsert?: tbl_municipiosUpsertWithWhereUniqueWithoutDepartamentoInput | tbl_municipiosUpsertWithWhereUniqueWithoutDepartamentoInput[]
    createMany?: tbl_municipiosCreateManyDepartamentoInputEnvelope
    set?: tbl_municipiosWhereUniqueInput | tbl_municipiosWhereUniqueInput[]
    disconnect?: tbl_municipiosWhereUniqueInput | tbl_municipiosWhereUniqueInput[]
    delete?: tbl_municipiosWhereUniqueInput | tbl_municipiosWhereUniqueInput[]
    connect?: tbl_municipiosWhereUniqueInput | tbl_municipiosWhereUniqueInput[]
    update?: tbl_municipiosUpdateWithWhereUniqueWithoutDepartamentoInput | tbl_municipiosUpdateWithWhereUniqueWithoutDepartamentoInput[]
    updateMany?: tbl_municipiosUpdateManyWithWhereWithoutDepartamentoInput | tbl_municipiosUpdateManyWithWhereWithoutDepartamentoInput[]
    deleteMany?: tbl_municipiosScalarWhereInput | tbl_municipiosScalarWhereInput[]
  }

  export type tbl_productosCreateNestedOneWithoutDet_productosInput = {
    create?: XOR<tbl_productosCreateWithoutDet_productosInput, tbl_productosUncheckedCreateWithoutDet_productosInput>
    connectOrCreate?: tbl_productosCreateOrConnectWithoutDet_productosInput
    connect?: tbl_productosWhereUniqueInput
  }

  export type tbl_pedidosCreateNestedManyWithoutDet_productosInput = {
    create?: XOR<tbl_pedidosCreateWithoutDet_productosInput, tbl_pedidosUncheckedCreateWithoutDet_productosInput> | tbl_pedidosCreateWithoutDet_productosInput[] | tbl_pedidosUncheckedCreateWithoutDet_productosInput[]
    connectOrCreate?: tbl_pedidosCreateOrConnectWithoutDet_productosInput | tbl_pedidosCreateOrConnectWithoutDet_productosInput[]
    createMany?: tbl_pedidosCreateManyDet_productosInputEnvelope
    connect?: tbl_pedidosWhereUniqueInput | tbl_pedidosWhereUniqueInput[]
  }

  export type tbl_pedidosUncheckedCreateNestedManyWithoutDet_productosInput = {
    create?: XOR<tbl_pedidosCreateWithoutDet_productosInput, tbl_pedidosUncheckedCreateWithoutDet_productosInput> | tbl_pedidosCreateWithoutDet_productosInput[] | tbl_pedidosUncheckedCreateWithoutDet_productosInput[]
    connectOrCreate?: tbl_pedidosCreateOrConnectWithoutDet_productosInput | tbl_pedidosCreateOrConnectWithoutDet_productosInput[]
    createMany?: tbl_pedidosCreateManyDet_productosInputEnvelope
    connect?: tbl_pedidosWhereUniqueInput | tbl_pedidosWhereUniqueInput[]
  }

  export type tbl_productosUpdateOneWithoutDet_productosNestedInput = {
    create?: XOR<tbl_productosCreateWithoutDet_productosInput, tbl_productosUncheckedCreateWithoutDet_productosInput>
    connectOrCreate?: tbl_productosCreateOrConnectWithoutDet_productosInput
    upsert?: tbl_productosUpsertWithoutDet_productosInput
    disconnect?: tbl_productosWhereInput | boolean
    delete?: tbl_productosWhereInput | boolean
    connect?: tbl_productosWhereUniqueInput
    update?: XOR<XOR<tbl_productosUpdateToOneWithWhereWithoutDet_productosInput, tbl_productosUpdateWithoutDet_productosInput>, tbl_productosUncheckedUpdateWithoutDet_productosInput>
  }

  export type tbl_pedidosUpdateManyWithoutDet_productosNestedInput = {
    create?: XOR<tbl_pedidosCreateWithoutDet_productosInput, tbl_pedidosUncheckedCreateWithoutDet_productosInput> | tbl_pedidosCreateWithoutDet_productosInput[] | tbl_pedidosUncheckedCreateWithoutDet_productosInput[]
    connectOrCreate?: tbl_pedidosCreateOrConnectWithoutDet_productosInput | tbl_pedidosCreateOrConnectWithoutDet_productosInput[]
    upsert?: tbl_pedidosUpsertWithWhereUniqueWithoutDet_productosInput | tbl_pedidosUpsertWithWhereUniqueWithoutDet_productosInput[]
    createMany?: tbl_pedidosCreateManyDet_productosInputEnvelope
    set?: tbl_pedidosWhereUniqueInput | tbl_pedidosWhereUniqueInput[]
    disconnect?: tbl_pedidosWhereUniqueInput | tbl_pedidosWhereUniqueInput[]
    delete?: tbl_pedidosWhereUniqueInput | tbl_pedidosWhereUniqueInput[]
    connect?: tbl_pedidosWhereUniqueInput | tbl_pedidosWhereUniqueInput[]
    update?: tbl_pedidosUpdateWithWhereUniqueWithoutDet_productosInput | tbl_pedidosUpdateWithWhereUniqueWithoutDet_productosInput[]
    updateMany?: tbl_pedidosUpdateManyWithWhereWithoutDet_productosInput | tbl_pedidosUpdateManyWithWhereWithoutDet_productosInput[]
    deleteMany?: tbl_pedidosScalarWhereInput | tbl_pedidosScalarWhereInput[]
  }

  export type tbl_pedidosUncheckedUpdateManyWithoutDet_productosNestedInput = {
    create?: XOR<tbl_pedidosCreateWithoutDet_productosInput, tbl_pedidosUncheckedCreateWithoutDet_productosInput> | tbl_pedidosCreateWithoutDet_productosInput[] | tbl_pedidosUncheckedCreateWithoutDet_productosInput[]
    connectOrCreate?: tbl_pedidosCreateOrConnectWithoutDet_productosInput | tbl_pedidosCreateOrConnectWithoutDet_productosInput[]
    upsert?: tbl_pedidosUpsertWithWhereUniqueWithoutDet_productosInput | tbl_pedidosUpsertWithWhereUniqueWithoutDet_productosInput[]
    createMany?: tbl_pedidosCreateManyDet_productosInputEnvelope
    set?: tbl_pedidosWhereUniqueInput | tbl_pedidosWhereUniqueInput[]
    disconnect?: tbl_pedidosWhereUniqueInput | tbl_pedidosWhereUniqueInput[]
    delete?: tbl_pedidosWhereUniqueInput | tbl_pedidosWhereUniqueInput[]
    connect?: tbl_pedidosWhereUniqueInput | tbl_pedidosWhereUniqueInput[]
    update?: tbl_pedidosUpdateWithWhereUniqueWithoutDet_productosInput | tbl_pedidosUpdateWithWhereUniqueWithoutDet_productosInput[]
    updateMany?: tbl_pedidosUpdateManyWithWhereWithoutDet_productosInput | tbl_pedidosUpdateManyWithWhereWithoutDet_productosInput[]
    deleteMany?: tbl_pedidosScalarWhereInput | tbl_pedidosScalarWhereInput[]
  }

  export type tbl_usuariosCreateNestedManyWithoutEstadoInput = {
    create?: XOR<tbl_usuariosCreateWithoutEstadoInput, tbl_usuariosUncheckedCreateWithoutEstadoInput> | tbl_usuariosCreateWithoutEstadoInput[] | tbl_usuariosUncheckedCreateWithoutEstadoInput[]
    connectOrCreate?: tbl_usuariosCreateOrConnectWithoutEstadoInput | tbl_usuariosCreateOrConnectWithoutEstadoInput[]
    createMany?: tbl_usuariosCreateManyEstadoInputEnvelope
    connect?: tbl_usuariosWhereUniqueInput | tbl_usuariosWhereUniqueInput[]
  }

  export type tbl_usuariosUncheckedCreateNestedManyWithoutEstadoInput = {
    create?: XOR<tbl_usuariosCreateWithoutEstadoInput, tbl_usuariosUncheckedCreateWithoutEstadoInput> | tbl_usuariosCreateWithoutEstadoInput[] | tbl_usuariosUncheckedCreateWithoutEstadoInput[]
    connectOrCreate?: tbl_usuariosCreateOrConnectWithoutEstadoInput | tbl_usuariosCreateOrConnectWithoutEstadoInput[]
    createMany?: tbl_usuariosCreateManyEstadoInputEnvelope
    connect?: tbl_usuariosWhereUniqueInput | tbl_usuariosWhereUniqueInput[]
  }

  export type tbl_usuariosUpdateManyWithoutEstadoNestedInput = {
    create?: XOR<tbl_usuariosCreateWithoutEstadoInput, tbl_usuariosUncheckedCreateWithoutEstadoInput> | tbl_usuariosCreateWithoutEstadoInput[] | tbl_usuariosUncheckedCreateWithoutEstadoInput[]
    connectOrCreate?: tbl_usuariosCreateOrConnectWithoutEstadoInput | tbl_usuariosCreateOrConnectWithoutEstadoInput[]
    upsert?: tbl_usuariosUpsertWithWhereUniqueWithoutEstadoInput | tbl_usuariosUpsertWithWhereUniqueWithoutEstadoInput[]
    createMany?: tbl_usuariosCreateManyEstadoInputEnvelope
    set?: tbl_usuariosWhereUniqueInput | tbl_usuariosWhereUniqueInput[]
    disconnect?: tbl_usuariosWhereUniqueInput | tbl_usuariosWhereUniqueInput[]
    delete?: tbl_usuariosWhereUniqueInput | tbl_usuariosWhereUniqueInput[]
    connect?: tbl_usuariosWhereUniqueInput | tbl_usuariosWhereUniqueInput[]
    update?: tbl_usuariosUpdateWithWhereUniqueWithoutEstadoInput | tbl_usuariosUpdateWithWhereUniqueWithoutEstadoInput[]
    updateMany?: tbl_usuariosUpdateManyWithWhereWithoutEstadoInput | tbl_usuariosUpdateManyWithWhereWithoutEstadoInput[]
    deleteMany?: tbl_usuariosScalarWhereInput | tbl_usuariosScalarWhereInput[]
  }

  export type tbl_usuariosUncheckedUpdateManyWithoutEstadoNestedInput = {
    create?: XOR<tbl_usuariosCreateWithoutEstadoInput, tbl_usuariosUncheckedCreateWithoutEstadoInput> | tbl_usuariosCreateWithoutEstadoInput[] | tbl_usuariosUncheckedCreateWithoutEstadoInput[]
    connectOrCreate?: tbl_usuariosCreateOrConnectWithoutEstadoInput | tbl_usuariosCreateOrConnectWithoutEstadoInput[]
    upsert?: tbl_usuariosUpsertWithWhereUniqueWithoutEstadoInput | tbl_usuariosUpsertWithWhereUniqueWithoutEstadoInput[]
    createMany?: tbl_usuariosCreateManyEstadoInputEnvelope
    set?: tbl_usuariosWhereUniqueInput | tbl_usuariosWhereUniqueInput[]
    disconnect?: tbl_usuariosWhereUniqueInput | tbl_usuariosWhereUniqueInput[]
    delete?: tbl_usuariosWhereUniqueInput | tbl_usuariosWhereUniqueInput[]
    connect?: tbl_usuariosWhereUniqueInput | tbl_usuariosWhereUniqueInput[]
    update?: tbl_usuariosUpdateWithWhereUniqueWithoutEstadoInput | tbl_usuariosUpdateWithWhereUniqueWithoutEstadoInput[]
    updateMany?: tbl_usuariosUpdateManyWithWhereWithoutEstadoInput | tbl_usuariosUpdateManyWithWhereWithoutEstadoInput[]
    deleteMany?: tbl_usuariosScalarWhereInput | tbl_usuariosScalarWhereInput[]
  }

  export type tbl_departamentosCreateNestedOneWithoutMunicipiosInput = {
    create?: XOR<tbl_departamentosCreateWithoutMunicipiosInput, tbl_departamentosUncheckedCreateWithoutMunicipiosInput>
    connectOrCreate?: tbl_departamentosCreateOrConnectWithoutMunicipiosInput
    connect?: tbl_departamentosWhereUniqueInput
  }

  export type tbl_clientesCreateNestedManyWithoutMunicipiosInput = {
    create?: XOR<tbl_clientesCreateWithoutMunicipiosInput, tbl_clientesUncheckedCreateWithoutMunicipiosInput> | tbl_clientesCreateWithoutMunicipiosInput[] | tbl_clientesUncheckedCreateWithoutMunicipiosInput[]
    connectOrCreate?: tbl_clientesCreateOrConnectWithoutMunicipiosInput | tbl_clientesCreateOrConnectWithoutMunicipiosInput[]
    createMany?: tbl_clientesCreateManyMunicipiosInputEnvelope
    connect?: tbl_clientesWhereUniqueInput | tbl_clientesWhereUniqueInput[]
  }

  export type tbl_clientesUncheckedCreateNestedManyWithoutMunicipiosInput = {
    create?: XOR<tbl_clientesCreateWithoutMunicipiosInput, tbl_clientesUncheckedCreateWithoutMunicipiosInput> | tbl_clientesCreateWithoutMunicipiosInput[] | tbl_clientesUncheckedCreateWithoutMunicipiosInput[]
    connectOrCreate?: tbl_clientesCreateOrConnectWithoutMunicipiosInput | tbl_clientesCreateOrConnectWithoutMunicipiosInput[]
    createMany?: tbl_clientesCreateManyMunicipiosInputEnvelope
    connect?: tbl_clientesWhereUniqueInput | tbl_clientesWhereUniqueInput[]
  }

  export type tbl_departamentosUpdateOneWithoutMunicipiosNestedInput = {
    create?: XOR<tbl_departamentosCreateWithoutMunicipiosInput, tbl_departamentosUncheckedCreateWithoutMunicipiosInput>
    connectOrCreate?: tbl_departamentosCreateOrConnectWithoutMunicipiosInput
    upsert?: tbl_departamentosUpsertWithoutMunicipiosInput
    disconnect?: tbl_departamentosWhereInput | boolean
    delete?: tbl_departamentosWhereInput | boolean
    connect?: tbl_departamentosWhereUniqueInput
    update?: XOR<XOR<tbl_departamentosUpdateToOneWithWhereWithoutMunicipiosInput, tbl_departamentosUpdateWithoutMunicipiosInput>, tbl_departamentosUncheckedUpdateWithoutMunicipiosInput>
  }

  export type tbl_clientesUpdateManyWithoutMunicipiosNestedInput = {
    create?: XOR<tbl_clientesCreateWithoutMunicipiosInput, tbl_clientesUncheckedCreateWithoutMunicipiosInput> | tbl_clientesCreateWithoutMunicipiosInput[] | tbl_clientesUncheckedCreateWithoutMunicipiosInput[]
    connectOrCreate?: tbl_clientesCreateOrConnectWithoutMunicipiosInput | tbl_clientesCreateOrConnectWithoutMunicipiosInput[]
    upsert?: tbl_clientesUpsertWithWhereUniqueWithoutMunicipiosInput | tbl_clientesUpsertWithWhereUniqueWithoutMunicipiosInput[]
    createMany?: tbl_clientesCreateManyMunicipiosInputEnvelope
    set?: tbl_clientesWhereUniqueInput | tbl_clientesWhereUniqueInput[]
    disconnect?: tbl_clientesWhereUniqueInput | tbl_clientesWhereUniqueInput[]
    delete?: tbl_clientesWhereUniqueInput | tbl_clientesWhereUniqueInput[]
    connect?: tbl_clientesWhereUniqueInput | tbl_clientesWhereUniqueInput[]
    update?: tbl_clientesUpdateWithWhereUniqueWithoutMunicipiosInput | tbl_clientesUpdateWithWhereUniqueWithoutMunicipiosInput[]
    updateMany?: tbl_clientesUpdateManyWithWhereWithoutMunicipiosInput | tbl_clientesUpdateManyWithWhereWithoutMunicipiosInput[]
    deleteMany?: tbl_clientesScalarWhereInput | tbl_clientesScalarWhereInput[]
  }

  export type tbl_clientesUncheckedUpdateManyWithoutMunicipiosNestedInput = {
    create?: XOR<tbl_clientesCreateWithoutMunicipiosInput, tbl_clientesUncheckedCreateWithoutMunicipiosInput> | tbl_clientesCreateWithoutMunicipiosInput[] | tbl_clientesUncheckedCreateWithoutMunicipiosInput[]
    connectOrCreate?: tbl_clientesCreateOrConnectWithoutMunicipiosInput | tbl_clientesCreateOrConnectWithoutMunicipiosInput[]
    upsert?: tbl_clientesUpsertWithWhereUniqueWithoutMunicipiosInput | tbl_clientesUpsertWithWhereUniqueWithoutMunicipiosInput[]
    createMany?: tbl_clientesCreateManyMunicipiosInputEnvelope
    set?: tbl_clientesWhereUniqueInput | tbl_clientesWhereUniqueInput[]
    disconnect?: tbl_clientesWhereUniqueInput | tbl_clientesWhereUniqueInput[]
    delete?: tbl_clientesWhereUniqueInput | tbl_clientesWhereUniqueInput[]
    connect?: tbl_clientesWhereUniqueInput | tbl_clientesWhereUniqueInput[]
    update?: tbl_clientesUpdateWithWhereUniqueWithoutMunicipiosInput | tbl_clientesUpdateWithWhereUniqueWithoutMunicipiosInput[]
    updateMany?: tbl_clientesUpdateManyWithWhereWithoutMunicipiosInput | tbl_clientesUpdateManyWithWhereWithoutMunicipiosInput[]
    deleteMany?: tbl_clientesScalarWhereInput | tbl_clientesScalarWhereInput[]
  }

  export type tbl_clientesCreateNestedOneWithoutPedidosInput = {
    create?: XOR<tbl_clientesCreateWithoutPedidosInput, tbl_clientesUncheckedCreateWithoutPedidosInput>
    connectOrCreate?: tbl_clientesCreateOrConnectWithoutPedidosInput
    connect?: tbl_clientesWhereUniqueInput
  }

  export type tbl_det_productosCreateNestedOneWithoutPedidosInput = {
    create?: XOR<tbl_det_productosCreateWithoutPedidosInput, tbl_det_productosUncheckedCreateWithoutPedidosInput>
    connectOrCreate?: tbl_det_productosCreateOrConnectWithoutPedidosInput
    connect?: tbl_det_productosWhereUniqueInput
  }

  export type tbl_transportadorasCreateNestedOneWithoutPedidosInput = {
    create?: XOR<tbl_transportadorasCreateWithoutPedidosInput, tbl_transportadorasUncheckedCreateWithoutPedidosInput>
    connectOrCreate?: tbl_transportadorasCreateOrConnectWithoutPedidosInput
    connect?: tbl_transportadorasWhereUniqueInput
  }

  export type tbl_clientesUpdateOneWithoutPedidosNestedInput = {
    create?: XOR<tbl_clientesCreateWithoutPedidosInput, tbl_clientesUncheckedCreateWithoutPedidosInput>
    connectOrCreate?: tbl_clientesCreateOrConnectWithoutPedidosInput
    upsert?: tbl_clientesUpsertWithoutPedidosInput
    disconnect?: tbl_clientesWhereInput | boolean
    delete?: tbl_clientesWhereInput | boolean
    connect?: tbl_clientesWhereUniqueInput
    update?: XOR<XOR<tbl_clientesUpdateToOneWithWhereWithoutPedidosInput, tbl_clientesUpdateWithoutPedidosInput>, tbl_clientesUncheckedUpdateWithoutPedidosInput>
  }

  export type tbl_det_productosUpdateOneWithoutPedidosNestedInput = {
    create?: XOR<tbl_det_productosCreateWithoutPedidosInput, tbl_det_productosUncheckedCreateWithoutPedidosInput>
    connectOrCreate?: tbl_det_productosCreateOrConnectWithoutPedidosInput
    upsert?: tbl_det_productosUpsertWithoutPedidosInput
    disconnect?: tbl_det_productosWhereInput | boolean
    delete?: tbl_det_productosWhereInput | boolean
    connect?: tbl_det_productosWhereUniqueInput
    update?: XOR<XOR<tbl_det_productosUpdateToOneWithWhereWithoutPedidosInput, tbl_det_productosUpdateWithoutPedidosInput>, tbl_det_productosUncheckedUpdateWithoutPedidosInput>
  }

  export type tbl_transportadorasUpdateOneWithoutPedidosNestedInput = {
    create?: XOR<tbl_transportadorasCreateWithoutPedidosInput, tbl_transportadorasUncheckedCreateWithoutPedidosInput>
    connectOrCreate?: tbl_transportadorasCreateOrConnectWithoutPedidosInput
    upsert?: tbl_transportadorasUpsertWithoutPedidosInput
    disconnect?: tbl_transportadorasWhereInput | boolean
    delete?: tbl_transportadorasWhereInput | boolean
    connect?: tbl_transportadorasWhereUniqueInput
    update?: XOR<XOR<tbl_transportadorasUpdateToOneWithWhereWithoutPedidosInput, tbl_transportadorasUpdateWithoutPedidosInput>, tbl_transportadorasUncheckedUpdateWithoutPedidosInput>
  }

  export type tbl_usuariosCreateNestedManyWithoutPersonaInput = {
    create?: XOR<tbl_usuariosCreateWithoutPersonaInput, tbl_usuariosUncheckedCreateWithoutPersonaInput> | tbl_usuariosCreateWithoutPersonaInput[] | tbl_usuariosUncheckedCreateWithoutPersonaInput[]
    connectOrCreate?: tbl_usuariosCreateOrConnectWithoutPersonaInput | tbl_usuariosCreateOrConnectWithoutPersonaInput[]
    createMany?: tbl_usuariosCreateManyPersonaInputEnvelope
    connect?: tbl_usuariosWhereUniqueInput | tbl_usuariosWhereUniqueInput[]
  }

  export type tbl_usuariosUncheckedCreateNestedManyWithoutPersonaInput = {
    create?: XOR<tbl_usuariosCreateWithoutPersonaInput, tbl_usuariosUncheckedCreateWithoutPersonaInput> | tbl_usuariosCreateWithoutPersonaInput[] | tbl_usuariosUncheckedCreateWithoutPersonaInput[]
    connectOrCreate?: tbl_usuariosCreateOrConnectWithoutPersonaInput | tbl_usuariosCreateOrConnectWithoutPersonaInput[]
    createMany?: tbl_usuariosCreateManyPersonaInputEnvelope
    connect?: tbl_usuariosWhereUniqueInput | tbl_usuariosWhereUniqueInput[]
  }

  export type tbl_usuariosUpdateManyWithoutPersonaNestedInput = {
    create?: XOR<tbl_usuariosCreateWithoutPersonaInput, tbl_usuariosUncheckedCreateWithoutPersonaInput> | tbl_usuariosCreateWithoutPersonaInput[] | tbl_usuariosUncheckedCreateWithoutPersonaInput[]
    connectOrCreate?: tbl_usuariosCreateOrConnectWithoutPersonaInput | tbl_usuariosCreateOrConnectWithoutPersonaInput[]
    upsert?: tbl_usuariosUpsertWithWhereUniqueWithoutPersonaInput | tbl_usuariosUpsertWithWhereUniqueWithoutPersonaInput[]
    createMany?: tbl_usuariosCreateManyPersonaInputEnvelope
    set?: tbl_usuariosWhereUniqueInput | tbl_usuariosWhereUniqueInput[]
    disconnect?: tbl_usuariosWhereUniqueInput | tbl_usuariosWhereUniqueInput[]
    delete?: tbl_usuariosWhereUniqueInput | tbl_usuariosWhereUniqueInput[]
    connect?: tbl_usuariosWhereUniqueInput | tbl_usuariosWhereUniqueInput[]
    update?: tbl_usuariosUpdateWithWhereUniqueWithoutPersonaInput | tbl_usuariosUpdateWithWhereUniqueWithoutPersonaInput[]
    updateMany?: tbl_usuariosUpdateManyWithWhereWithoutPersonaInput | tbl_usuariosUpdateManyWithWhereWithoutPersonaInput[]
    deleteMany?: tbl_usuariosScalarWhereInput | tbl_usuariosScalarWhereInput[]
  }

  export type tbl_usuariosUncheckedUpdateManyWithoutPersonaNestedInput = {
    create?: XOR<tbl_usuariosCreateWithoutPersonaInput, tbl_usuariosUncheckedCreateWithoutPersonaInput> | tbl_usuariosCreateWithoutPersonaInput[] | tbl_usuariosUncheckedCreateWithoutPersonaInput[]
    connectOrCreate?: tbl_usuariosCreateOrConnectWithoutPersonaInput | tbl_usuariosCreateOrConnectWithoutPersonaInput[]
    upsert?: tbl_usuariosUpsertWithWhereUniqueWithoutPersonaInput | tbl_usuariosUpsertWithWhereUniqueWithoutPersonaInput[]
    createMany?: tbl_usuariosCreateManyPersonaInputEnvelope
    set?: tbl_usuariosWhereUniqueInput | tbl_usuariosWhereUniqueInput[]
    disconnect?: tbl_usuariosWhereUniqueInput | tbl_usuariosWhereUniqueInput[]
    delete?: tbl_usuariosWhereUniqueInput | tbl_usuariosWhereUniqueInput[]
    connect?: tbl_usuariosWhereUniqueInput | tbl_usuariosWhereUniqueInput[]
    update?: tbl_usuariosUpdateWithWhereUniqueWithoutPersonaInput | tbl_usuariosUpdateWithWhereUniqueWithoutPersonaInput[]
    updateMany?: tbl_usuariosUpdateManyWithWhereWithoutPersonaInput | tbl_usuariosUpdateManyWithWhereWithoutPersonaInput[]
    deleteMany?: tbl_usuariosScalarWhereInput | tbl_usuariosScalarWhereInput[]
  }

  export type tbl_empresasCreateNestedOneWithoutProductosInput = {
    create?: XOR<tbl_empresasCreateWithoutProductosInput, tbl_empresasUncheckedCreateWithoutProductosInput>
    connectOrCreate?: tbl_empresasCreateOrConnectWithoutProductosInput
    connect?: tbl_empresasWhereUniqueInput
  }

  export type tbl_det_productosCreateNestedManyWithoutProductosInput = {
    create?: XOR<tbl_det_productosCreateWithoutProductosInput, tbl_det_productosUncheckedCreateWithoutProductosInput> | tbl_det_productosCreateWithoutProductosInput[] | tbl_det_productosUncheckedCreateWithoutProductosInput[]
    connectOrCreate?: tbl_det_productosCreateOrConnectWithoutProductosInput | tbl_det_productosCreateOrConnectWithoutProductosInput[]
    createMany?: tbl_det_productosCreateManyProductosInputEnvelope
    connect?: tbl_det_productosWhereUniqueInput | tbl_det_productosWhereUniqueInput[]
  }

  export type tbl_det_productosUncheckedCreateNestedManyWithoutProductosInput = {
    create?: XOR<tbl_det_productosCreateWithoutProductosInput, tbl_det_productosUncheckedCreateWithoutProductosInput> | tbl_det_productosCreateWithoutProductosInput[] | tbl_det_productosUncheckedCreateWithoutProductosInput[]
    connectOrCreate?: tbl_det_productosCreateOrConnectWithoutProductosInput | tbl_det_productosCreateOrConnectWithoutProductosInput[]
    createMany?: tbl_det_productosCreateManyProductosInputEnvelope
    connect?: tbl_det_productosWhereUniqueInput | tbl_det_productosWhereUniqueInput[]
  }

  export type tbl_empresasUpdateOneWithoutProductosNestedInput = {
    create?: XOR<tbl_empresasCreateWithoutProductosInput, tbl_empresasUncheckedCreateWithoutProductosInput>
    connectOrCreate?: tbl_empresasCreateOrConnectWithoutProductosInput
    upsert?: tbl_empresasUpsertWithoutProductosInput
    disconnect?: tbl_empresasWhereInput | boolean
    delete?: tbl_empresasWhereInput | boolean
    connect?: tbl_empresasWhereUniqueInput
    update?: XOR<XOR<tbl_empresasUpdateToOneWithWhereWithoutProductosInput, tbl_empresasUpdateWithoutProductosInput>, tbl_empresasUncheckedUpdateWithoutProductosInput>
  }

  export type tbl_det_productosUpdateManyWithoutProductosNestedInput = {
    create?: XOR<tbl_det_productosCreateWithoutProductosInput, tbl_det_productosUncheckedCreateWithoutProductosInput> | tbl_det_productosCreateWithoutProductosInput[] | tbl_det_productosUncheckedCreateWithoutProductosInput[]
    connectOrCreate?: tbl_det_productosCreateOrConnectWithoutProductosInput | tbl_det_productosCreateOrConnectWithoutProductosInput[]
    upsert?: tbl_det_productosUpsertWithWhereUniqueWithoutProductosInput | tbl_det_productosUpsertWithWhereUniqueWithoutProductosInput[]
    createMany?: tbl_det_productosCreateManyProductosInputEnvelope
    set?: tbl_det_productosWhereUniqueInput | tbl_det_productosWhereUniqueInput[]
    disconnect?: tbl_det_productosWhereUniqueInput | tbl_det_productosWhereUniqueInput[]
    delete?: tbl_det_productosWhereUniqueInput | tbl_det_productosWhereUniqueInput[]
    connect?: tbl_det_productosWhereUniqueInput | tbl_det_productosWhereUniqueInput[]
    update?: tbl_det_productosUpdateWithWhereUniqueWithoutProductosInput | tbl_det_productosUpdateWithWhereUniqueWithoutProductosInput[]
    updateMany?: tbl_det_productosUpdateManyWithWhereWithoutProductosInput | tbl_det_productosUpdateManyWithWhereWithoutProductosInput[]
    deleteMany?: tbl_det_productosScalarWhereInput | tbl_det_productosScalarWhereInput[]
  }

  export type tbl_det_productosUncheckedUpdateManyWithoutProductosNestedInput = {
    create?: XOR<tbl_det_productosCreateWithoutProductosInput, tbl_det_productosUncheckedCreateWithoutProductosInput> | tbl_det_productosCreateWithoutProductosInput[] | tbl_det_productosUncheckedCreateWithoutProductosInput[]
    connectOrCreate?: tbl_det_productosCreateOrConnectWithoutProductosInput | tbl_det_productosCreateOrConnectWithoutProductosInput[]
    upsert?: tbl_det_productosUpsertWithWhereUniqueWithoutProductosInput | tbl_det_productosUpsertWithWhereUniqueWithoutProductosInput[]
    createMany?: tbl_det_productosCreateManyProductosInputEnvelope
    set?: tbl_det_productosWhereUniqueInput | tbl_det_productosWhereUniqueInput[]
    disconnect?: tbl_det_productosWhereUniqueInput | tbl_det_productosWhereUniqueInput[]
    delete?: tbl_det_productosWhereUniqueInput | tbl_det_productosWhereUniqueInput[]
    connect?: tbl_det_productosWhereUniqueInput | tbl_det_productosWhereUniqueInput[]
    update?: tbl_det_productosUpdateWithWhereUniqueWithoutProductosInput | tbl_det_productosUpdateWithWhereUniqueWithoutProductosInput[]
    updateMany?: tbl_det_productosUpdateManyWithWhereWithoutProductosInput | tbl_det_productosUpdateManyWithWhereWithoutProductosInput[]
    deleteMany?: tbl_det_productosScalarWhereInput | tbl_det_productosScalarWhereInput[]
  }

  export type tbl_productosCreateNestedManyWithoutEmpresasInput = {
    create?: XOR<tbl_productosCreateWithoutEmpresasInput, tbl_productosUncheckedCreateWithoutEmpresasInput> | tbl_productosCreateWithoutEmpresasInput[] | tbl_productosUncheckedCreateWithoutEmpresasInput[]
    connectOrCreate?: tbl_productosCreateOrConnectWithoutEmpresasInput | tbl_productosCreateOrConnectWithoutEmpresasInput[]
    createMany?: tbl_productosCreateManyEmpresasInputEnvelope
    connect?: tbl_productosWhereUniqueInput | tbl_productosWhereUniqueInput[]
  }

  export type tbl_productosUncheckedCreateNestedManyWithoutEmpresasInput = {
    create?: XOR<tbl_productosCreateWithoutEmpresasInput, tbl_productosUncheckedCreateWithoutEmpresasInput> | tbl_productosCreateWithoutEmpresasInput[] | tbl_productosUncheckedCreateWithoutEmpresasInput[]
    connectOrCreate?: tbl_productosCreateOrConnectWithoutEmpresasInput | tbl_productosCreateOrConnectWithoutEmpresasInput[]
    createMany?: tbl_productosCreateManyEmpresasInputEnvelope
    connect?: tbl_productosWhereUniqueInput | tbl_productosWhereUniqueInput[]
  }

  export type tbl_productosUpdateManyWithoutEmpresasNestedInput = {
    create?: XOR<tbl_productosCreateWithoutEmpresasInput, tbl_productosUncheckedCreateWithoutEmpresasInput> | tbl_productosCreateWithoutEmpresasInput[] | tbl_productosUncheckedCreateWithoutEmpresasInput[]
    connectOrCreate?: tbl_productosCreateOrConnectWithoutEmpresasInput | tbl_productosCreateOrConnectWithoutEmpresasInput[]
    upsert?: tbl_productosUpsertWithWhereUniqueWithoutEmpresasInput | tbl_productosUpsertWithWhereUniqueWithoutEmpresasInput[]
    createMany?: tbl_productosCreateManyEmpresasInputEnvelope
    set?: tbl_productosWhereUniqueInput | tbl_productosWhereUniqueInput[]
    disconnect?: tbl_productosWhereUniqueInput | tbl_productosWhereUniqueInput[]
    delete?: tbl_productosWhereUniqueInput | tbl_productosWhereUniqueInput[]
    connect?: tbl_productosWhereUniqueInput | tbl_productosWhereUniqueInput[]
    update?: tbl_productosUpdateWithWhereUniqueWithoutEmpresasInput | tbl_productosUpdateWithWhereUniqueWithoutEmpresasInput[]
    updateMany?: tbl_productosUpdateManyWithWhereWithoutEmpresasInput | tbl_productosUpdateManyWithWhereWithoutEmpresasInput[]
    deleteMany?: tbl_productosScalarWhereInput | tbl_productosScalarWhereInput[]
  }

  export type tbl_productosUncheckedUpdateManyWithoutEmpresasNestedInput = {
    create?: XOR<tbl_productosCreateWithoutEmpresasInput, tbl_productosUncheckedCreateWithoutEmpresasInput> | tbl_productosCreateWithoutEmpresasInput[] | tbl_productosUncheckedCreateWithoutEmpresasInput[]
    connectOrCreate?: tbl_productosCreateOrConnectWithoutEmpresasInput | tbl_productosCreateOrConnectWithoutEmpresasInput[]
    upsert?: tbl_productosUpsertWithWhereUniqueWithoutEmpresasInput | tbl_productosUpsertWithWhereUniqueWithoutEmpresasInput[]
    createMany?: tbl_productosCreateManyEmpresasInputEnvelope
    set?: tbl_productosWhereUniqueInput | tbl_productosWhereUniqueInput[]
    disconnect?: tbl_productosWhereUniqueInput | tbl_productosWhereUniqueInput[]
    delete?: tbl_productosWhereUniqueInput | tbl_productosWhereUniqueInput[]
    connect?: tbl_productosWhereUniqueInput | tbl_productosWhereUniqueInput[]
    update?: tbl_productosUpdateWithWhereUniqueWithoutEmpresasInput | tbl_productosUpdateWithWhereUniqueWithoutEmpresasInput[]
    updateMany?: tbl_productosUpdateManyWithWhereWithoutEmpresasInput | tbl_productosUpdateManyWithWhereWithoutEmpresasInput[]
    deleteMany?: tbl_productosScalarWhereInput | tbl_productosScalarWhereInput[]
  }

  export type tbl_usuariosCreateNestedManyWithoutRolInput = {
    create?: XOR<tbl_usuariosCreateWithoutRolInput, tbl_usuariosUncheckedCreateWithoutRolInput> | tbl_usuariosCreateWithoutRolInput[] | tbl_usuariosUncheckedCreateWithoutRolInput[]
    connectOrCreate?: tbl_usuariosCreateOrConnectWithoutRolInput | tbl_usuariosCreateOrConnectWithoutRolInput[]
    createMany?: tbl_usuariosCreateManyRolInputEnvelope
    connect?: tbl_usuariosWhereUniqueInput | tbl_usuariosWhereUniqueInput[]
  }

  export type tbl_usuariosUncheckedCreateNestedManyWithoutRolInput = {
    create?: XOR<tbl_usuariosCreateWithoutRolInput, tbl_usuariosUncheckedCreateWithoutRolInput> | tbl_usuariosCreateWithoutRolInput[] | tbl_usuariosUncheckedCreateWithoutRolInput[]
    connectOrCreate?: tbl_usuariosCreateOrConnectWithoutRolInput | tbl_usuariosCreateOrConnectWithoutRolInput[]
    createMany?: tbl_usuariosCreateManyRolInputEnvelope
    connect?: tbl_usuariosWhereUniqueInput | tbl_usuariosWhereUniqueInput[]
  }

  export type tbl_usuariosUpdateManyWithoutRolNestedInput = {
    create?: XOR<tbl_usuariosCreateWithoutRolInput, tbl_usuariosUncheckedCreateWithoutRolInput> | tbl_usuariosCreateWithoutRolInput[] | tbl_usuariosUncheckedCreateWithoutRolInput[]
    connectOrCreate?: tbl_usuariosCreateOrConnectWithoutRolInput | tbl_usuariosCreateOrConnectWithoutRolInput[]
    upsert?: tbl_usuariosUpsertWithWhereUniqueWithoutRolInput | tbl_usuariosUpsertWithWhereUniqueWithoutRolInput[]
    createMany?: tbl_usuariosCreateManyRolInputEnvelope
    set?: tbl_usuariosWhereUniqueInput | tbl_usuariosWhereUniqueInput[]
    disconnect?: tbl_usuariosWhereUniqueInput | tbl_usuariosWhereUniqueInput[]
    delete?: tbl_usuariosWhereUniqueInput | tbl_usuariosWhereUniqueInput[]
    connect?: tbl_usuariosWhereUniqueInput | tbl_usuariosWhereUniqueInput[]
    update?: tbl_usuariosUpdateWithWhereUniqueWithoutRolInput | tbl_usuariosUpdateWithWhereUniqueWithoutRolInput[]
    updateMany?: tbl_usuariosUpdateManyWithWhereWithoutRolInput | tbl_usuariosUpdateManyWithWhereWithoutRolInput[]
    deleteMany?: tbl_usuariosScalarWhereInput | tbl_usuariosScalarWhereInput[]
  }

  export type tbl_usuariosUncheckedUpdateManyWithoutRolNestedInput = {
    create?: XOR<tbl_usuariosCreateWithoutRolInput, tbl_usuariosUncheckedCreateWithoutRolInput> | tbl_usuariosCreateWithoutRolInput[] | tbl_usuariosUncheckedCreateWithoutRolInput[]
    connectOrCreate?: tbl_usuariosCreateOrConnectWithoutRolInput | tbl_usuariosCreateOrConnectWithoutRolInput[]
    upsert?: tbl_usuariosUpsertWithWhereUniqueWithoutRolInput | tbl_usuariosUpsertWithWhereUniqueWithoutRolInput[]
    createMany?: tbl_usuariosCreateManyRolInputEnvelope
    set?: tbl_usuariosWhereUniqueInput | tbl_usuariosWhereUniqueInput[]
    disconnect?: tbl_usuariosWhereUniqueInput | tbl_usuariosWhereUniqueInput[]
    delete?: tbl_usuariosWhereUniqueInput | tbl_usuariosWhereUniqueInput[]
    connect?: tbl_usuariosWhereUniqueInput | tbl_usuariosWhereUniqueInput[]
    update?: tbl_usuariosUpdateWithWhereUniqueWithoutRolInput | tbl_usuariosUpdateWithWhereUniqueWithoutRolInput[]
    updateMany?: tbl_usuariosUpdateManyWithWhereWithoutRolInput | tbl_usuariosUpdateManyWithWhereWithoutRolInput[]
    deleteMany?: tbl_usuariosScalarWhereInput | tbl_usuariosScalarWhereInput[]
  }

  export type tbl_usuariosCreateNestedOneWithoutComerciosInput = {
    create?: XOR<tbl_usuariosCreateWithoutComerciosInput, tbl_usuariosUncheckedCreateWithoutComerciosInput>
    connectOrCreate?: tbl_usuariosCreateOrConnectWithoutComerciosInput
    connect?: tbl_usuariosWhereUniqueInput
  }

  export type tbl_campaniasCreateNestedManyWithoutComercioInput = {
    create?: XOR<tbl_campaniasCreateWithoutComercioInput, tbl_campaniasUncheckedCreateWithoutComercioInput> | tbl_campaniasCreateWithoutComercioInput[] | tbl_campaniasUncheckedCreateWithoutComercioInput[]
    connectOrCreate?: tbl_campaniasCreateOrConnectWithoutComercioInput | tbl_campaniasCreateOrConnectWithoutComercioInput[]
    createMany?: tbl_campaniasCreateManyComercioInputEnvelope
    connect?: tbl_campaniasWhereUniqueInput | tbl_campaniasWhereUniqueInput[]
  }

  export type tbl_clientesCreateNestedManyWithoutComerciosInput = {
    create?: XOR<tbl_clientesCreateWithoutComerciosInput, tbl_clientesUncheckedCreateWithoutComerciosInput> | tbl_clientesCreateWithoutComerciosInput[] | tbl_clientesUncheckedCreateWithoutComerciosInput[]
    connectOrCreate?: tbl_clientesCreateOrConnectWithoutComerciosInput | tbl_clientesCreateOrConnectWithoutComerciosInput[]
    createMany?: tbl_clientesCreateManyComerciosInputEnvelope
    connect?: tbl_clientesWhereUniqueInput | tbl_clientesWhereUniqueInput[]
  }

  export type tbl_campaniasUncheckedCreateNestedManyWithoutComercioInput = {
    create?: XOR<tbl_campaniasCreateWithoutComercioInput, tbl_campaniasUncheckedCreateWithoutComercioInput> | tbl_campaniasCreateWithoutComercioInput[] | tbl_campaniasUncheckedCreateWithoutComercioInput[]
    connectOrCreate?: tbl_campaniasCreateOrConnectWithoutComercioInput | tbl_campaniasCreateOrConnectWithoutComercioInput[]
    createMany?: tbl_campaniasCreateManyComercioInputEnvelope
    connect?: tbl_campaniasWhereUniqueInput | tbl_campaniasWhereUniqueInput[]
  }

  export type tbl_clientesUncheckedCreateNestedManyWithoutComerciosInput = {
    create?: XOR<tbl_clientesCreateWithoutComerciosInput, tbl_clientesUncheckedCreateWithoutComerciosInput> | tbl_clientesCreateWithoutComerciosInput[] | tbl_clientesUncheckedCreateWithoutComerciosInput[]
    connectOrCreate?: tbl_clientesCreateOrConnectWithoutComerciosInput | tbl_clientesCreateOrConnectWithoutComerciosInput[]
    createMany?: tbl_clientesCreateManyComerciosInputEnvelope
    connect?: tbl_clientesWhereUniqueInput | tbl_clientesWhereUniqueInput[]
  }

  export type tbl_usuariosUpdateOneWithoutComerciosNestedInput = {
    create?: XOR<tbl_usuariosCreateWithoutComerciosInput, tbl_usuariosUncheckedCreateWithoutComerciosInput>
    connectOrCreate?: tbl_usuariosCreateOrConnectWithoutComerciosInput
    upsert?: tbl_usuariosUpsertWithoutComerciosInput
    disconnect?: tbl_usuariosWhereInput | boolean
    delete?: tbl_usuariosWhereInput | boolean
    connect?: tbl_usuariosWhereUniqueInput
    update?: XOR<XOR<tbl_usuariosUpdateToOneWithWhereWithoutComerciosInput, tbl_usuariosUpdateWithoutComerciosInput>, tbl_usuariosUncheckedUpdateWithoutComerciosInput>
  }

  export type tbl_campaniasUpdateManyWithoutComercioNestedInput = {
    create?: XOR<tbl_campaniasCreateWithoutComercioInput, tbl_campaniasUncheckedCreateWithoutComercioInput> | tbl_campaniasCreateWithoutComercioInput[] | tbl_campaniasUncheckedCreateWithoutComercioInput[]
    connectOrCreate?: tbl_campaniasCreateOrConnectWithoutComercioInput | tbl_campaniasCreateOrConnectWithoutComercioInput[]
    upsert?: tbl_campaniasUpsertWithWhereUniqueWithoutComercioInput | tbl_campaniasUpsertWithWhereUniqueWithoutComercioInput[]
    createMany?: tbl_campaniasCreateManyComercioInputEnvelope
    set?: tbl_campaniasWhereUniqueInput | tbl_campaniasWhereUniqueInput[]
    disconnect?: tbl_campaniasWhereUniqueInput | tbl_campaniasWhereUniqueInput[]
    delete?: tbl_campaniasWhereUniqueInput | tbl_campaniasWhereUniqueInput[]
    connect?: tbl_campaniasWhereUniqueInput | tbl_campaniasWhereUniqueInput[]
    update?: tbl_campaniasUpdateWithWhereUniqueWithoutComercioInput | tbl_campaniasUpdateWithWhereUniqueWithoutComercioInput[]
    updateMany?: tbl_campaniasUpdateManyWithWhereWithoutComercioInput | tbl_campaniasUpdateManyWithWhereWithoutComercioInput[]
    deleteMany?: tbl_campaniasScalarWhereInput | tbl_campaniasScalarWhereInput[]
  }

  export type tbl_clientesUpdateManyWithoutComerciosNestedInput = {
    create?: XOR<tbl_clientesCreateWithoutComerciosInput, tbl_clientesUncheckedCreateWithoutComerciosInput> | tbl_clientesCreateWithoutComerciosInput[] | tbl_clientesUncheckedCreateWithoutComerciosInput[]
    connectOrCreate?: tbl_clientesCreateOrConnectWithoutComerciosInput | tbl_clientesCreateOrConnectWithoutComerciosInput[]
    upsert?: tbl_clientesUpsertWithWhereUniqueWithoutComerciosInput | tbl_clientesUpsertWithWhereUniqueWithoutComerciosInput[]
    createMany?: tbl_clientesCreateManyComerciosInputEnvelope
    set?: tbl_clientesWhereUniqueInput | tbl_clientesWhereUniqueInput[]
    disconnect?: tbl_clientesWhereUniqueInput | tbl_clientesWhereUniqueInput[]
    delete?: tbl_clientesWhereUniqueInput | tbl_clientesWhereUniqueInput[]
    connect?: tbl_clientesWhereUniqueInput | tbl_clientesWhereUniqueInput[]
    update?: tbl_clientesUpdateWithWhereUniqueWithoutComerciosInput | tbl_clientesUpdateWithWhereUniqueWithoutComerciosInput[]
    updateMany?: tbl_clientesUpdateManyWithWhereWithoutComerciosInput | tbl_clientesUpdateManyWithWhereWithoutComerciosInput[]
    deleteMany?: tbl_clientesScalarWhereInput | tbl_clientesScalarWhereInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type tbl_campaniasUncheckedUpdateManyWithoutComercioNestedInput = {
    create?: XOR<tbl_campaniasCreateWithoutComercioInput, tbl_campaniasUncheckedCreateWithoutComercioInput> | tbl_campaniasCreateWithoutComercioInput[] | tbl_campaniasUncheckedCreateWithoutComercioInput[]
    connectOrCreate?: tbl_campaniasCreateOrConnectWithoutComercioInput | tbl_campaniasCreateOrConnectWithoutComercioInput[]
    upsert?: tbl_campaniasUpsertWithWhereUniqueWithoutComercioInput | tbl_campaniasUpsertWithWhereUniqueWithoutComercioInput[]
    createMany?: tbl_campaniasCreateManyComercioInputEnvelope
    set?: tbl_campaniasWhereUniqueInput | tbl_campaniasWhereUniqueInput[]
    disconnect?: tbl_campaniasWhereUniqueInput | tbl_campaniasWhereUniqueInput[]
    delete?: tbl_campaniasWhereUniqueInput | tbl_campaniasWhereUniqueInput[]
    connect?: tbl_campaniasWhereUniqueInput | tbl_campaniasWhereUniqueInput[]
    update?: tbl_campaniasUpdateWithWhereUniqueWithoutComercioInput | tbl_campaniasUpdateWithWhereUniqueWithoutComercioInput[]
    updateMany?: tbl_campaniasUpdateManyWithWhereWithoutComercioInput | tbl_campaniasUpdateManyWithWhereWithoutComercioInput[]
    deleteMany?: tbl_campaniasScalarWhereInput | tbl_campaniasScalarWhereInput[]
  }

  export type tbl_clientesUncheckedUpdateManyWithoutComerciosNestedInput = {
    create?: XOR<tbl_clientesCreateWithoutComerciosInput, tbl_clientesUncheckedCreateWithoutComerciosInput> | tbl_clientesCreateWithoutComerciosInput[] | tbl_clientesUncheckedCreateWithoutComerciosInput[]
    connectOrCreate?: tbl_clientesCreateOrConnectWithoutComerciosInput | tbl_clientesCreateOrConnectWithoutComerciosInput[]
    upsert?: tbl_clientesUpsertWithWhereUniqueWithoutComerciosInput | tbl_clientesUpsertWithWhereUniqueWithoutComerciosInput[]
    createMany?: tbl_clientesCreateManyComerciosInputEnvelope
    set?: tbl_clientesWhereUniqueInput | tbl_clientesWhereUniqueInput[]
    disconnect?: tbl_clientesWhereUniqueInput | tbl_clientesWhereUniqueInput[]
    delete?: tbl_clientesWhereUniqueInput | tbl_clientesWhereUniqueInput[]
    connect?: tbl_clientesWhereUniqueInput | tbl_clientesWhereUniqueInput[]
    update?: tbl_clientesUpdateWithWhereUniqueWithoutComerciosInput | tbl_clientesUpdateWithWhereUniqueWithoutComerciosInput[]
    updateMany?: tbl_clientesUpdateManyWithWhereWithoutComerciosInput | tbl_clientesUpdateManyWithWhereWithoutComerciosInput[]
    deleteMany?: tbl_clientesScalarWhereInput | tbl_clientesScalarWhereInput[]
  }

  export type tbl_pedidosCreateNestedManyWithoutTransportadorasInput = {
    create?: XOR<tbl_pedidosCreateWithoutTransportadorasInput, tbl_pedidosUncheckedCreateWithoutTransportadorasInput> | tbl_pedidosCreateWithoutTransportadorasInput[] | tbl_pedidosUncheckedCreateWithoutTransportadorasInput[]
    connectOrCreate?: tbl_pedidosCreateOrConnectWithoutTransportadorasInput | tbl_pedidosCreateOrConnectWithoutTransportadorasInput[]
    createMany?: tbl_pedidosCreateManyTransportadorasInputEnvelope
    connect?: tbl_pedidosWhereUniqueInput | tbl_pedidosWhereUniqueInput[]
  }

  export type tbl_pedidosUncheckedCreateNestedManyWithoutTransportadorasInput = {
    create?: XOR<tbl_pedidosCreateWithoutTransportadorasInput, tbl_pedidosUncheckedCreateWithoutTransportadorasInput> | tbl_pedidosCreateWithoutTransportadorasInput[] | tbl_pedidosUncheckedCreateWithoutTransportadorasInput[]
    connectOrCreate?: tbl_pedidosCreateOrConnectWithoutTransportadorasInput | tbl_pedidosCreateOrConnectWithoutTransportadorasInput[]
    createMany?: tbl_pedidosCreateManyTransportadorasInputEnvelope
    connect?: tbl_pedidosWhereUniqueInput | tbl_pedidosWhereUniqueInput[]
  }

  export type tbl_pedidosUpdateManyWithoutTransportadorasNestedInput = {
    create?: XOR<tbl_pedidosCreateWithoutTransportadorasInput, tbl_pedidosUncheckedCreateWithoutTransportadorasInput> | tbl_pedidosCreateWithoutTransportadorasInput[] | tbl_pedidosUncheckedCreateWithoutTransportadorasInput[]
    connectOrCreate?: tbl_pedidosCreateOrConnectWithoutTransportadorasInput | tbl_pedidosCreateOrConnectWithoutTransportadorasInput[]
    upsert?: tbl_pedidosUpsertWithWhereUniqueWithoutTransportadorasInput | tbl_pedidosUpsertWithWhereUniqueWithoutTransportadorasInput[]
    createMany?: tbl_pedidosCreateManyTransportadorasInputEnvelope
    set?: tbl_pedidosWhereUniqueInput | tbl_pedidosWhereUniqueInput[]
    disconnect?: tbl_pedidosWhereUniqueInput | tbl_pedidosWhereUniqueInput[]
    delete?: tbl_pedidosWhereUniqueInput | tbl_pedidosWhereUniqueInput[]
    connect?: tbl_pedidosWhereUniqueInput | tbl_pedidosWhereUniqueInput[]
    update?: tbl_pedidosUpdateWithWhereUniqueWithoutTransportadorasInput | tbl_pedidosUpdateWithWhereUniqueWithoutTransportadorasInput[]
    updateMany?: tbl_pedidosUpdateManyWithWhereWithoutTransportadorasInput | tbl_pedidosUpdateManyWithWhereWithoutTransportadorasInput[]
    deleteMany?: tbl_pedidosScalarWhereInput | tbl_pedidosScalarWhereInput[]
  }

  export type tbl_pedidosUncheckedUpdateManyWithoutTransportadorasNestedInput = {
    create?: XOR<tbl_pedidosCreateWithoutTransportadorasInput, tbl_pedidosUncheckedCreateWithoutTransportadorasInput> | tbl_pedidosCreateWithoutTransportadorasInput[] | tbl_pedidosUncheckedCreateWithoutTransportadorasInput[]
    connectOrCreate?: tbl_pedidosCreateOrConnectWithoutTransportadorasInput | tbl_pedidosCreateOrConnectWithoutTransportadorasInput[]
    upsert?: tbl_pedidosUpsertWithWhereUniqueWithoutTransportadorasInput | tbl_pedidosUpsertWithWhereUniqueWithoutTransportadorasInput[]
    createMany?: tbl_pedidosCreateManyTransportadorasInputEnvelope
    set?: tbl_pedidosWhereUniqueInput | tbl_pedidosWhereUniqueInput[]
    disconnect?: tbl_pedidosWhereUniqueInput | tbl_pedidosWhereUniqueInput[]
    delete?: tbl_pedidosWhereUniqueInput | tbl_pedidosWhereUniqueInput[]
    connect?: tbl_pedidosWhereUniqueInput | tbl_pedidosWhereUniqueInput[]
    update?: tbl_pedidosUpdateWithWhereUniqueWithoutTransportadorasInput | tbl_pedidosUpdateWithWhereUniqueWithoutTransportadorasInput[]
    updateMany?: tbl_pedidosUpdateManyWithWhereWithoutTransportadorasInput | tbl_pedidosUpdateManyWithWhereWithoutTransportadorasInput[]
    deleteMany?: tbl_pedidosScalarWhereInput | tbl_pedidosScalarWhereInput[]
  }

  export type tbl_personasCreateNestedOneWithoutUsuariosInput = {
    create?: XOR<tbl_personasCreateWithoutUsuariosInput, tbl_personasUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: tbl_personasCreateOrConnectWithoutUsuariosInput
    connect?: tbl_personasWhereUniqueInput
  }

  export type tbl_rolesCreateNestedOneWithoutUsuariosInput = {
    create?: XOR<tbl_rolesCreateWithoutUsuariosInput, tbl_rolesUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: tbl_rolesCreateOrConnectWithoutUsuariosInput
    connect?: tbl_rolesWhereUniqueInput
  }

  export type tbl_estados_usuarioCreateNestedOneWithoutUsuariosInput = {
    create?: XOR<tbl_estados_usuarioCreateWithoutUsuariosInput, tbl_estados_usuarioUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: tbl_estados_usuarioCreateOrConnectWithoutUsuariosInput
    connect?: tbl_estados_usuarioWhereUniqueInput
  }

  export type tbl_comerciosCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<tbl_comerciosCreateWithoutUsuariosInput, tbl_comerciosUncheckedCreateWithoutUsuariosInput> | tbl_comerciosCreateWithoutUsuariosInput[] | tbl_comerciosUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: tbl_comerciosCreateOrConnectWithoutUsuariosInput | tbl_comerciosCreateOrConnectWithoutUsuariosInput[]
    createMany?: tbl_comerciosCreateManyUsuariosInputEnvelope
    connect?: tbl_comerciosWhereUniqueInput | tbl_comerciosWhereUniqueInput[]
  }

  export type tbl_comerciosUncheckedCreateNestedManyWithoutUsuariosInput = {
    create?: XOR<tbl_comerciosCreateWithoutUsuariosInput, tbl_comerciosUncheckedCreateWithoutUsuariosInput> | tbl_comerciosCreateWithoutUsuariosInput[] | tbl_comerciosUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: tbl_comerciosCreateOrConnectWithoutUsuariosInput | tbl_comerciosCreateOrConnectWithoutUsuariosInput[]
    createMany?: tbl_comerciosCreateManyUsuariosInputEnvelope
    connect?: tbl_comerciosWhereUniqueInput | tbl_comerciosWhereUniqueInput[]
  }

  export type tbl_personasUpdateOneRequiredWithoutUsuariosNestedInput = {
    create?: XOR<tbl_personasCreateWithoutUsuariosInput, tbl_personasUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: tbl_personasCreateOrConnectWithoutUsuariosInput
    upsert?: tbl_personasUpsertWithoutUsuariosInput
    connect?: tbl_personasWhereUniqueInput
    update?: XOR<XOR<tbl_personasUpdateToOneWithWhereWithoutUsuariosInput, tbl_personasUpdateWithoutUsuariosInput>, tbl_personasUncheckedUpdateWithoutUsuariosInput>
  }

  export type tbl_rolesUpdateOneRequiredWithoutUsuariosNestedInput = {
    create?: XOR<tbl_rolesCreateWithoutUsuariosInput, tbl_rolesUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: tbl_rolesCreateOrConnectWithoutUsuariosInput
    upsert?: tbl_rolesUpsertWithoutUsuariosInput
    connect?: tbl_rolesWhereUniqueInput
    update?: XOR<XOR<tbl_rolesUpdateToOneWithWhereWithoutUsuariosInput, tbl_rolesUpdateWithoutUsuariosInput>, tbl_rolesUncheckedUpdateWithoutUsuariosInput>
  }

  export type tbl_estados_usuarioUpdateOneRequiredWithoutUsuariosNestedInput = {
    create?: XOR<tbl_estados_usuarioCreateWithoutUsuariosInput, tbl_estados_usuarioUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: tbl_estados_usuarioCreateOrConnectWithoutUsuariosInput
    upsert?: tbl_estados_usuarioUpsertWithoutUsuariosInput
    connect?: tbl_estados_usuarioWhereUniqueInput
    update?: XOR<XOR<tbl_estados_usuarioUpdateToOneWithWhereWithoutUsuariosInput, tbl_estados_usuarioUpdateWithoutUsuariosInput>, tbl_estados_usuarioUncheckedUpdateWithoutUsuariosInput>
  }

  export type tbl_comerciosUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<tbl_comerciosCreateWithoutUsuariosInput, tbl_comerciosUncheckedCreateWithoutUsuariosInput> | tbl_comerciosCreateWithoutUsuariosInput[] | tbl_comerciosUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: tbl_comerciosCreateOrConnectWithoutUsuariosInput | tbl_comerciosCreateOrConnectWithoutUsuariosInput[]
    upsert?: tbl_comerciosUpsertWithWhereUniqueWithoutUsuariosInput | tbl_comerciosUpsertWithWhereUniqueWithoutUsuariosInput[]
    createMany?: tbl_comerciosCreateManyUsuariosInputEnvelope
    set?: tbl_comerciosWhereUniqueInput | tbl_comerciosWhereUniqueInput[]
    disconnect?: tbl_comerciosWhereUniqueInput | tbl_comerciosWhereUniqueInput[]
    delete?: tbl_comerciosWhereUniqueInput | tbl_comerciosWhereUniqueInput[]
    connect?: tbl_comerciosWhereUniqueInput | tbl_comerciosWhereUniqueInput[]
    update?: tbl_comerciosUpdateWithWhereUniqueWithoutUsuariosInput | tbl_comerciosUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: tbl_comerciosUpdateManyWithWhereWithoutUsuariosInput | tbl_comerciosUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: tbl_comerciosScalarWhereInput | tbl_comerciosScalarWhereInput[]
  }

  export type tbl_comerciosUncheckedUpdateManyWithoutUsuariosNestedInput = {
    create?: XOR<tbl_comerciosCreateWithoutUsuariosInput, tbl_comerciosUncheckedCreateWithoutUsuariosInput> | tbl_comerciosCreateWithoutUsuariosInput[] | tbl_comerciosUncheckedCreateWithoutUsuariosInput[]
    connectOrCreate?: tbl_comerciosCreateOrConnectWithoutUsuariosInput | tbl_comerciosCreateOrConnectWithoutUsuariosInput[]
    upsert?: tbl_comerciosUpsertWithWhereUniqueWithoutUsuariosInput | tbl_comerciosUpsertWithWhereUniqueWithoutUsuariosInput[]
    createMany?: tbl_comerciosCreateManyUsuariosInputEnvelope
    set?: tbl_comerciosWhereUniqueInput | tbl_comerciosWhereUniqueInput[]
    disconnect?: tbl_comerciosWhereUniqueInput | tbl_comerciosWhereUniqueInput[]
    delete?: tbl_comerciosWhereUniqueInput | tbl_comerciosWhereUniqueInput[]
    connect?: tbl_comerciosWhereUniqueInput | tbl_comerciosWhereUniqueInput[]
    update?: tbl_comerciosUpdateWithWhereUniqueWithoutUsuariosInput | tbl_comerciosUpdateWithWhereUniqueWithoutUsuariosInput[]
    updateMany?: tbl_comerciosUpdateManyWithWhereWithoutUsuariosInput | tbl_comerciosUpdateManyWithWhereWithoutUsuariosInput[]
    deleteMany?: tbl_comerciosScalarWhereInput | tbl_comerciosScalarWhereInput[]
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
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

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
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

  export type tbl_comerciosCreateWithoutCampaniasInput = {
    pkid?: bigint | number
    nombre: string
    telefono: string
    correo: string
    usuarios?: tbl_usuariosCreateNestedOneWithoutComerciosInput
    clientes?: tbl_clientesCreateNestedManyWithoutComerciosInput
  }

  export type tbl_comerciosUncheckedCreateWithoutCampaniasInput = {
    pkid?: bigint | number
    nombre: string
    telefono: string
    correo: string
    fkusuario_tbl_usuarios?: string | null
    clientes?: tbl_clientesUncheckedCreateNestedManyWithoutComerciosInput
  }

  export type tbl_comerciosCreateOrConnectWithoutCampaniasInput = {
    where: tbl_comerciosWhereUniqueInput
    create: XOR<tbl_comerciosCreateWithoutCampaniasInput, tbl_comerciosUncheckedCreateWithoutCampaniasInput>
  }

  export type tbl_comerciosUpsertWithoutCampaniasInput = {
    update: XOR<tbl_comerciosUpdateWithoutCampaniasInput, tbl_comerciosUncheckedUpdateWithoutCampaniasInput>
    create: XOR<tbl_comerciosCreateWithoutCampaniasInput, tbl_comerciosUncheckedCreateWithoutCampaniasInput>
    where?: tbl_comerciosWhereInput
  }

  export type tbl_comerciosUpdateToOneWithWhereWithoutCampaniasInput = {
    where?: tbl_comerciosWhereInput
    data: XOR<tbl_comerciosUpdateWithoutCampaniasInput, tbl_comerciosUncheckedUpdateWithoutCampaniasInput>
  }

  export type tbl_comerciosUpdateWithoutCampaniasInput = {
    pkid?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    usuarios?: tbl_usuariosUpdateOneWithoutComerciosNestedInput
    clientes?: tbl_clientesUpdateManyWithoutComerciosNestedInput
  }

  export type tbl_comerciosUncheckedUpdateWithoutCampaniasInput = {
    pkid?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    fkusuario_tbl_usuarios?: NullableStringFieldUpdateOperationsInput | string | null
    clientes?: tbl_clientesUncheckedUpdateManyWithoutComerciosNestedInput
  }

  export type tbl_municipiosCreateWithoutClientesInput = {
    pkid?: bigint | number
    nombre: string
    nomenclatura: string
    departamento?: tbl_departamentosCreateNestedOneWithoutMunicipiosInput
  }

  export type tbl_municipiosUncheckedCreateWithoutClientesInput = {
    pkid?: bigint | number
    nombre: string
    nomenclatura: string
    fkid_tbl_departamentos?: bigint | number | null
  }

  export type tbl_municipiosCreateOrConnectWithoutClientesInput = {
    where: tbl_municipiosWhereUniqueInput
    create: XOR<tbl_municipiosCreateWithoutClientesInput, tbl_municipiosUncheckedCreateWithoutClientesInput>
  }

  export type tbl_comerciosCreateWithoutClientesInput = {
    pkid?: bigint | number
    nombre: string
    telefono: string
    correo: string
    usuarios?: tbl_usuariosCreateNestedOneWithoutComerciosInput
    campanias?: tbl_campaniasCreateNestedManyWithoutComercioInput
  }

  export type tbl_comerciosUncheckedCreateWithoutClientesInput = {
    pkid?: bigint | number
    nombre: string
    telefono: string
    correo: string
    fkusuario_tbl_usuarios?: string | null
    campanias?: tbl_campaniasUncheckedCreateNestedManyWithoutComercioInput
  }

  export type tbl_comerciosCreateOrConnectWithoutClientesInput = {
    where: tbl_comerciosWhereUniqueInput
    create: XOR<tbl_comerciosCreateWithoutClientesInput, tbl_comerciosUncheckedCreateWithoutClientesInput>
  }

  export type tbl_pedidosCreateWithoutClientesInput = {
    pkid?: bigint | number
    valor: number
    fecha: Date | string
    det_productos?: tbl_det_productosCreateNestedOneWithoutPedidosInput
    transportadoras?: tbl_transportadorasCreateNestedOneWithoutPedidosInput
  }

  export type tbl_pedidosUncheckedCreateWithoutClientesInput = {
    pkid?: bigint | number
    fkid_tbl_det_productos?: bigint | number | null
    fkid_tbl_transportadoras?: bigint | number | null
    valor: number
    fecha: Date | string
  }

  export type tbl_pedidosCreateOrConnectWithoutClientesInput = {
    where: tbl_pedidosWhereUniqueInput
    create: XOR<tbl_pedidosCreateWithoutClientesInput, tbl_pedidosUncheckedCreateWithoutClientesInput>
  }

  export type tbl_pedidosCreateManyClientesInputEnvelope = {
    data: tbl_pedidosCreateManyClientesInput | tbl_pedidosCreateManyClientesInput[]
    skipDuplicates?: boolean
  }

  export type tbl_municipiosUpsertWithoutClientesInput = {
    update: XOR<tbl_municipiosUpdateWithoutClientesInput, tbl_municipiosUncheckedUpdateWithoutClientesInput>
    create: XOR<tbl_municipiosCreateWithoutClientesInput, tbl_municipiosUncheckedCreateWithoutClientesInput>
    where?: tbl_municipiosWhereInput
  }

  export type tbl_municipiosUpdateToOneWithWhereWithoutClientesInput = {
    where?: tbl_municipiosWhereInput
    data: XOR<tbl_municipiosUpdateWithoutClientesInput, tbl_municipiosUncheckedUpdateWithoutClientesInput>
  }

  export type tbl_municipiosUpdateWithoutClientesInput = {
    pkid?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre?: StringFieldUpdateOperationsInput | string
    nomenclatura?: StringFieldUpdateOperationsInput | string
    departamento?: tbl_departamentosUpdateOneWithoutMunicipiosNestedInput
  }

  export type tbl_municipiosUncheckedUpdateWithoutClientesInput = {
    pkid?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre?: StringFieldUpdateOperationsInput | string
    nomenclatura?: StringFieldUpdateOperationsInput | string
    fkid_tbl_departamentos?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type tbl_comerciosUpsertWithoutClientesInput = {
    update: XOR<tbl_comerciosUpdateWithoutClientesInput, tbl_comerciosUncheckedUpdateWithoutClientesInput>
    create: XOR<tbl_comerciosCreateWithoutClientesInput, tbl_comerciosUncheckedCreateWithoutClientesInput>
    where?: tbl_comerciosWhereInput
  }

  export type tbl_comerciosUpdateToOneWithWhereWithoutClientesInput = {
    where?: tbl_comerciosWhereInput
    data: XOR<tbl_comerciosUpdateWithoutClientesInput, tbl_comerciosUncheckedUpdateWithoutClientesInput>
  }

  export type tbl_comerciosUpdateWithoutClientesInput = {
    pkid?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    usuarios?: tbl_usuariosUpdateOneWithoutComerciosNestedInput
    campanias?: tbl_campaniasUpdateManyWithoutComercioNestedInput
  }

  export type tbl_comerciosUncheckedUpdateWithoutClientesInput = {
    pkid?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    fkusuario_tbl_usuarios?: NullableStringFieldUpdateOperationsInput | string | null
    campanias?: tbl_campaniasUncheckedUpdateManyWithoutComercioNestedInput
  }

  export type tbl_pedidosUpsertWithWhereUniqueWithoutClientesInput = {
    where: tbl_pedidosWhereUniqueInput
    update: XOR<tbl_pedidosUpdateWithoutClientesInput, tbl_pedidosUncheckedUpdateWithoutClientesInput>
    create: XOR<tbl_pedidosCreateWithoutClientesInput, tbl_pedidosUncheckedCreateWithoutClientesInput>
  }

  export type tbl_pedidosUpdateWithWhereUniqueWithoutClientesInput = {
    where: tbl_pedidosWhereUniqueInput
    data: XOR<tbl_pedidosUpdateWithoutClientesInput, tbl_pedidosUncheckedUpdateWithoutClientesInput>
  }

  export type tbl_pedidosUpdateManyWithWhereWithoutClientesInput = {
    where: tbl_pedidosScalarWhereInput
    data: XOR<tbl_pedidosUpdateManyMutationInput, tbl_pedidosUncheckedUpdateManyWithoutClientesInput>
  }

  export type tbl_pedidosScalarWhereInput = {
    AND?: tbl_pedidosScalarWhereInput | tbl_pedidosScalarWhereInput[]
    OR?: tbl_pedidosScalarWhereInput[]
    NOT?: tbl_pedidosScalarWhereInput | tbl_pedidosScalarWhereInput[]
    pkid?: BigIntFilter<"tbl_pedidos"> | bigint | number
    fkid_tbl_clientes?: BigIntNullableFilter<"tbl_pedidos"> | bigint | number | null
    fkid_tbl_det_productos?: BigIntNullableFilter<"tbl_pedidos"> | bigint | number | null
    fkid_tbl_transportadoras?: BigIntNullableFilter<"tbl_pedidos"> | bigint | number | null
    valor?: FloatFilter<"tbl_pedidos"> | number
    fecha?: DateTimeFilter<"tbl_pedidos"> | Date | string
  }

  export type tbl_municipiosCreateWithoutDepartamentoInput = {
    pkid?: bigint | number
    nombre: string
    nomenclatura: string
    clientes?: tbl_clientesCreateNestedManyWithoutMunicipiosInput
  }

  export type tbl_municipiosUncheckedCreateWithoutDepartamentoInput = {
    pkid?: bigint | number
    nombre: string
    nomenclatura: string
    clientes?: tbl_clientesUncheckedCreateNestedManyWithoutMunicipiosInput
  }

  export type tbl_municipiosCreateOrConnectWithoutDepartamentoInput = {
    where: tbl_municipiosWhereUniqueInput
    create: XOR<tbl_municipiosCreateWithoutDepartamentoInput, tbl_municipiosUncheckedCreateWithoutDepartamentoInput>
  }

  export type tbl_municipiosCreateManyDepartamentoInputEnvelope = {
    data: tbl_municipiosCreateManyDepartamentoInput | tbl_municipiosCreateManyDepartamentoInput[]
    skipDuplicates?: boolean
  }

  export type tbl_municipiosUpsertWithWhereUniqueWithoutDepartamentoInput = {
    where: tbl_municipiosWhereUniqueInput
    update: XOR<tbl_municipiosUpdateWithoutDepartamentoInput, tbl_municipiosUncheckedUpdateWithoutDepartamentoInput>
    create: XOR<tbl_municipiosCreateWithoutDepartamentoInput, tbl_municipiosUncheckedCreateWithoutDepartamentoInput>
  }

  export type tbl_municipiosUpdateWithWhereUniqueWithoutDepartamentoInput = {
    where: tbl_municipiosWhereUniqueInput
    data: XOR<tbl_municipiosUpdateWithoutDepartamentoInput, tbl_municipiosUncheckedUpdateWithoutDepartamentoInput>
  }

  export type tbl_municipiosUpdateManyWithWhereWithoutDepartamentoInput = {
    where: tbl_municipiosScalarWhereInput
    data: XOR<tbl_municipiosUpdateManyMutationInput, tbl_municipiosUncheckedUpdateManyWithoutDepartamentoInput>
  }

  export type tbl_municipiosScalarWhereInput = {
    AND?: tbl_municipiosScalarWhereInput | tbl_municipiosScalarWhereInput[]
    OR?: tbl_municipiosScalarWhereInput[]
    NOT?: tbl_municipiosScalarWhereInput | tbl_municipiosScalarWhereInput[]
    pkid?: BigIntFilter<"tbl_municipios"> | bigint | number
    nombre?: StringFilter<"tbl_municipios"> | string
    nomenclatura?: StringFilter<"tbl_municipios"> | string
    fkid_tbl_departamentos?: BigIntNullableFilter<"tbl_municipios"> | bigint | number | null
  }

  export type tbl_productosCreateWithoutDet_productosInput = {
    pkid?: bigint | number
    nombre: string
    costo: number
    valor: number
    empresas?: tbl_empresasCreateNestedOneWithoutProductosInput
  }

  export type tbl_productosUncheckedCreateWithoutDet_productosInput = {
    pkid?: bigint | number
    nombre: string
    costo: number
    valor: number
    fkid_tbl_empresas?: bigint | number | null
  }

  export type tbl_productosCreateOrConnectWithoutDet_productosInput = {
    where: tbl_productosWhereUniqueInput
    create: XOR<tbl_productosCreateWithoutDet_productosInput, tbl_productosUncheckedCreateWithoutDet_productosInput>
  }

  export type tbl_pedidosCreateWithoutDet_productosInput = {
    pkid?: bigint | number
    valor: number
    fecha: Date | string
    clientes?: tbl_clientesCreateNestedOneWithoutPedidosInput
    transportadoras?: tbl_transportadorasCreateNestedOneWithoutPedidosInput
  }

  export type tbl_pedidosUncheckedCreateWithoutDet_productosInput = {
    pkid?: bigint | number
    fkid_tbl_clientes?: bigint | number | null
    fkid_tbl_transportadoras?: bigint | number | null
    valor: number
    fecha: Date | string
  }

  export type tbl_pedidosCreateOrConnectWithoutDet_productosInput = {
    where: tbl_pedidosWhereUniqueInput
    create: XOR<tbl_pedidosCreateWithoutDet_productosInput, tbl_pedidosUncheckedCreateWithoutDet_productosInput>
  }

  export type tbl_pedidosCreateManyDet_productosInputEnvelope = {
    data: tbl_pedidosCreateManyDet_productosInput | tbl_pedidosCreateManyDet_productosInput[]
    skipDuplicates?: boolean
  }

  export type tbl_productosUpsertWithoutDet_productosInput = {
    update: XOR<tbl_productosUpdateWithoutDet_productosInput, tbl_productosUncheckedUpdateWithoutDet_productosInput>
    create: XOR<tbl_productosCreateWithoutDet_productosInput, tbl_productosUncheckedCreateWithoutDet_productosInput>
    where?: tbl_productosWhereInput
  }

  export type tbl_productosUpdateToOneWithWhereWithoutDet_productosInput = {
    where?: tbl_productosWhereInput
    data: XOR<tbl_productosUpdateWithoutDet_productosInput, tbl_productosUncheckedUpdateWithoutDet_productosInput>
  }

  export type tbl_productosUpdateWithoutDet_productosInput = {
    pkid?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre?: StringFieldUpdateOperationsInput | string
    costo?: FloatFieldUpdateOperationsInput | number
    valor?: FloatFieldUpdateOperationsInput | number
    empresas?: tbl_empresasUpdateOneWithoutProductosNestedInput
  }

  export type tbl_productosUncheckedUpdateWithoutDet_productosInput = {
    pkid?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre?: StringFieldUpdateOperationsInput | string
    costo?: FloatFieldUpdateOperationsInput | number
    valor?: FloatFieldUpdateOperationsInput | number
    fkid_tbl_empresas?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type tbl_pedidosUpsertWithWhereUniqueWithoutDet_productosInput = {
    where: tbl_pedidosWhereUniqueInput
    update: XOR<tbl_pedidosUpdateWithoutDet_productosInput, tbl_pedidosUncheckedUpdateWithoutDet_productosInput>
    create: XOR<tbl_pedidosCreateWithoutDet_productosInput, tbl_pedidosUncheckedCreateWithoutDet_productosInput>
  }

  export type tbl_pedidosUpdateWithWhereUniqueWithoutDet_productosInput = {
    where: tbl_pedidosWhereUniqueInput
    data: XOR<tbl_pedidosUpdateWithoutDet_productosInput, tbl_pedidosUncheckedUpdateWithoutDet_productosInput>
  }

  export type tbl_pedidosUpdateManyWithWhereWithoutDet_productosInput = {
    where: tbl_pedidosScalarWhereInput
    data: XOR<tbl_pedidosUpdateManyMutationInput, tbl_pedidosUncheckedUpdateManyWithoutDet_productosInput>
  }

  export type tbl_usuariosCreateWithoutEstadoInput = {
    pkusuario: string
    contrase_a: string
    persona: tbl_personasCreateNestedOneWithoutUsuariosInput
    rol: tbl_rolesCreateNestedOneWithoutUsuariosInput
    comercios?: tbl_comerciosCreateNestedManyWithoutUsuariosInput
  }

  export type tbl_usuariosUncheckedCreateWithoutEstadoInput = {
    pkusuario: string
    contrase_a: string
    fkid_tbl_roles: bigint | number
    fkid_tbl_personas: bigint | number
    comercios?: tbl_comerciosUncheckedCreateNestedManyWithoutUsuariosInput
  }

  export type tbl_usuariosCreateOrConnectWithoutEstadoInput = {
    where: tbl_usuariosWhereUniqueInput
    create: XOR<tbl_usuariosCreateWithoutEstadoInput, tbl_usuariosUncheckedCreateWithoutEstadoInput>
  }

  export type tbl_usuariosCreateManyEstadoInputEnvelope = {
    data: tbl_usuariosCreateManyEstadoInput | tbl_usuariosCreateManyEstadoInput[]
    skipDuplicates?: boolean
  }

  export type tbl_usuariosUpsertWithWhereUniqueWithoutEstadoInput = {
    where: tbl_usuariosWhereUniqueInput
    update: XOR<tbl_usuariosUpdateWithoutEstadoInput, tbl_usuariosUncheckedUpdateWithoutEstadoInput>
    create: XOR<tbl_usuariosCreateWithoutEstadoInput, tbl_usuariosUncheckedCreateWithoutEstadoInput>
  }

  export type tbl_usuariosUpdateWithWhereUniqueWithoutEstadoInput = {
    where: tbl_usuariosWhereUniqueInput
    data: XOR<tbl_usuariosUpdateWithoutEstadoInput, tbl_usuariosUncheckedUpdateWithoutEstadoInput>
  }

  export type tbl_usuariosUpdateManyWithWhereWithoutEstadoInput = {
    where: tbl_usuariosScalarWhereInput
    data: XOR<tbl_usuariosUpdateManyMutationInput, tbl_usuariosUncheckedUpdateManyWithoutEstadoInput>
  }

  export type tbl_usuariosScalarWhereInput = {
    AND?: tbl_usuariosScalarWhereInput | tbl_usuariosScalarWhereInput[]
    OR?: tbl_usuariosScalarWhereInput[]
    NOT?: tbl_usuariosScalarWhereInput | tbl_usuariosScalarWhereInput[]
    pkusuario?: StringFilter<"tbl_usuarios"> | string
    contrase_a?: StringFilter<"tbl_usuarios"> | string
    fkid_tbl_roles?: BigIntFilter<"tbl_usuarios"> | bigint | number
    fkid_tbl_estados_usuario?: BigIntFilter<"tbl_usuarios"> | bigint | number
    fkid_tbl_personas?: BigIntFilter<"tbl_usuarios"> | bigint | number
  }

  export type tbl_departamentosCreateWithoutMunicipiosInput = {
    pkid?: bigint | number
    nombre: string
    nomenclatura: string
  }

  export type tbl_departamentosUncheckedCreateWithoutMunicipiosInput = {
    pkid?: bigint | number
    nombre: string
    nomenclatura: string
  }

  export type tbl_departamentosCreateOrConnectWithoutMunicipiosInput = {
    where: tbl_departamentosWhereUniqueInput
    create: XOR<tbl_departamentosCreateWithoutMunicipiosInput, tbl_departamentosUncheckedCreateWithoutMunicipiosInput>
  }

  export type tbl_clientesCreateWithoutMunicipiosInput = {
    pkid?: bigint | number
    telefono: string
    nombres: string
    apellidos: string
    correo: string
    direccion: string
    comercios?: tbl_comerciosCreateNestedOneWithoutClientesInput
    pedidos?: tbl_pedidosCreateNestedManyWithoutClientesInput
  }

  export type tbl_clientesUncheckedCreateWithoutMunicipiosInput = {
    pkid?: bigint | number
    telefono: string
    nombres: string
    apellidos: string
    correo: string
    direccion: string
    fkid_tbl_comercios?: bigint | number | null
    pedidos?: tbl_pedidosUncheckedCreateNestedManyWithoutClientesInput
  }

  export type tbl_clientesCreateOrConnectWithoutMunicipiosInput = {
    where: tbl_clientesWhereUniqueInput
    create: XOR<tbl_clientesCreateWithoutMunicipiosInput, tbl_clientesUncheckedCreateWithoutMunicipiosInput>
  }

  export type tbl_clientesCreateManyMunicipiosInputEnvelope = {
    data: tbl_clientesCreateManyMunicipiosInput | tbl_clientesCreateManyMunicipiosInput[]
    skipDuplicates?: boolean
  }

  export type tbl_departamentosUpsertWithoutMunicipiosInput = {
    update: XOR<tbl_departamentosUpdateWithoutMunicipiosInput, tbl_departamentosUncheckedUpdateWithoutMunicipiosInput>
    create: XOR<tbl_departamentosCreateWithoutMunicipiosInput, tbl_departamentosUncheckedCreateWithoutMunicipiosInput>
    where?: tbl_departamentosWhereInput
  }

  export type tbl_departamentosUpdateToOneWithWhereWithoutMunicipiosInput = {
    where?: tbl_departamentosWhereInput
    data: XOR<tbl_departamentosUpdateWithoutMunicipiosInput, tbl_departamentosUncheckedUpdateWithoutMunicipiosInput>
  }

  export type tbl_departamentosUpdateWithoutMunicipiosInput = {
    pkid?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre?: StringFieldUpdateOperationsInput | string
    nomenclatura?: StringFieldUpdateOperationsInput | string
  }

  export type tbl_departamentosUncheckedUpdateWithoutMunicipiosInput = {
    pkid?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre?: StringFieldUpdateOperationsInput | string
    nomenclatura?: StringFieldUpdateOperationsInput | string
  }

  export type tbl_clientesUpsertWithWhereUniqueWithoutMunicipiosInput = {
    where: tbl_clientesWhereUniqueInput
    update: XOR<tbl_clientesUpdateWithoutMunicipiosInput, tbl_clientesUncheckedUpdateWithoutMunicipiosInput>
    create: XOR<tbl_clientesCreateWithoutMunicipiosInput, tbl_clientesUncheckedCreateWithoutMunicipiosInput>
  }

  export type tbl_clientesUpdateWithWhereUniqueWithoutMunicipiosInput = {
    where: tbl_clientesWhereUniqueInput
    data: XOR<tbl_clientesUpdateWithoutMunicipiosInput, tbl_clientesUncheckedUpdateWithoutMunicipiosInput>
  }

  export type tbl_clientesUpdateManyWithWhereWithoutMunicipiosInput = {
    where: tbl_clientesScalarWhereInput
    data: XOR<tbl_clientesUpdateManyMutationInput, tbl_clientesUncheckedUpdateManyWithoutMunicipiosInput>
  }

  export type tbl_clientesScalarWhereInput = {
    AND?: tbl_clientesScalarWhereInput | tbl_clientesScalarWhereInput[]
    OR?: tbl_clientesScalarWhereInput[]
    NOT?: tbl_clientesScalarWhereInput | tbl_clientesScalarWhereInput[]
    pkid?: BigIntFilter<"tbl_clientes"> | bigint | number
    telefono?: StringFilter<"tbl_clientes"> | string
    nombres?: StringFilter<"tbl_clientes"> | string
    apellidos?: StringFilter<"tbl_clientes"> | string
    correo?: StringFilter<"tbl_clientes"> | string
    direccion?: StringFilter<"tbl_clientes"> | string
    fkid_tbl_municipios?: BigIntNullableFilter<"tbl_clientes"> | bigint | number | null
    fkid_tbl_comercios?: BigIntNullableFilter<"tbl_clientes"> | bigint | number | null
  }

  export type tbl_clientesCreateWithoutPedidosInput = {
    pkid?: bigint | number
    telefono: string
    nombres: string
    apellidos: string
    correo: string
    direccion: string
    municipios?: tbl_municipiosCreateNestedOneWithoutClientesInput
    comercios?: tbl_comerciosCreateNestedOneWithoutClientesInput
  }

  export type tbl_clientesUncheckedCreateWithoutPedidosInput = {
    pkid?: bigint | number
    telefono: string
    nombres: string
    apellidos: string
    correo: string
    direccion: string
    fkid_tbl_municipios?: bigint | number | null
    fkid_tbl_comercios?: bigint | number | null
  }

  export type tbl_clientesCreateOrConnectWithoutPedidosInput = {
    where: tbl_clientesWhereUniqueInput
    create: XOR<tbl_clientesCreateWithoutPedidosInput, tbl_clientesUncheckedCreateWithoutPedidosInput>
  }

  export type tbl_det_productosCreateWithoutPedidosInput = {
    pkid?: bigint | number
    nombre: string
    productos?: tbl_productosCreateNestedOneWithoutDet_productosInput
  }

  export type tbl_det_productosUncheckedCreateWithoutPedidosInput = {
    pkid?: bigint | number
    nombre: string
    fkid_tbl_productos?: bigint | number | null
  }

  export type tbl_det_productosCreateOrConnectWithoutPedidosInput = {
    where: tbl_det_productosWhereUniqueInput
    create: XOR<tbl_det_productosCreateWithoutPedidosInput, tbl_det_productosUncheckedCreateWithoutPedidosInput>
  }

  export type tbl_transportadorasCreateWithoutPedidosInput = {
    pkid?: bigint | number
    nombre: string
    nomenclatura: string
  }

  export type tbl_transportadorasUncheckedCreateWithoutPedidosInput = {
    pkid?: bigint | number
    nombre: string
    nomenclatura: string
  }

  export type tbl_transportadorasCreateOrConnectWithoutPedidosInput = {
    where: tbl_transportadorasWhereUniqueInput
    create: XOR<tbl_transportadorasCreateWithoutPedidosInput, tbl_transportadorasUncheckedCreateWithoutPedidosInput>
  }

  export type tbl_clientesUpsertWithoutPedidosInput = {
    update: XOR<tbl_clientesUpdateWithoutPedidosInput, tbl_clientesUncheckedUpdateWithoutPedidosInput>
    create: XOR<tbl_clientesCreateWithoutPedidosInput, tbl_clientesUncheckedCreateWithoutPedidosInput>
    where?: tbl_clientesWhereInput
  }

  export type tbl_clientesUpdateToOneWithWhereWithoutPedidosInput = {
    where?: tbl_clientesWhereInput
    data: XOR<tbl_clientesUpdateWithoutPedidosInput, tbl_clientesUncheckedUpdateWithoutPedidosInput>
  }

  export type tbl_clientesUpdateWithoutPedidosInput = {
    pkid?: BigIntFieldUpdateOperationsInput | bigint | number
    telefono?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    municipios?: tbl_municipiosUpdateOneWithoutClientesNestedInput
    comercios?: tbl_comerciosUpdateOneWithoutClientesNestedInput
  }

  export type tbl_clientesUncheckedUpdateWithoutPedidosInput = {
    pkid?: BigIntFieldUpdateOperationsInput | bigint | number
    telefono?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    fkid_tbl_municipios?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    fkid_tbl_comercios?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type tbl_det_productosUpsertWithoutPedidosInput = {
    update: XOR<tbl_det_productosUpdateWithoutPedidosInput, tbl_det_productosUncheckedUpdateWithoutPedidosInput>
    create: XOR<tbl_det_productosCreateWithoutPedidosInput, tbl_det_productosUncheckedCreateWithoutPedidosInput>
    where?: tbl_det_productosWhereInput
  }

  export type tbl_det_productosUpdateToOneWithWhereWithoutPedidosInput = {
    where?: tbl_det_productosWhereInput
    data: XOR<tbl_det_productosUpdateWithoutPedidosInput, tbl_det_productosUncheckedUpdateWithoutPedidosInput>
  }

  export type tbl_det_productosUpdateWithoutPedidosInput = {
    pkid?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre?: StringFieldUpdateOperationsInput | string
    productos?: tbl_productosUpdateOneWithoutDet_productosNestedInput
  }

  export type tbl_det_productosUncheckedUpdateWithoutPedidosInput = {
    pkid?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre?: StringFieldUpdateOperationsInput | string
    fkid_tbl_productos?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type tbl_transportadorasUpsertWithoutPedidosInput = {
    update: XOR<tbl_transportadorasUpdateWithoutPedidosInput, tbl_transportadorasUncheckedUpdateWithoutPedidosInput>
    create: XOR<tbl_transportadorasCreateWithoutPedidosInput, tbl_transportadorasUncheckedCreateWithoutPedidosInput>
    where?: tbl_transportadorasWhereInput
  }

  export type tbl_transportadorasUpdateToOneWithWhereWithoutPedidosInput = {
    where?: tbl_transportadorasWhereInput
    data: XOR<tbl_transportadorasUpdateWithoutPedidosInput, tbl_transportadorasUncheckedUpdateWithoutPedidosInput>
  }

  export type tbl_transportadorasUpdateWithoutPedidosInput = {
    pkid?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre?: StringFieldUpdateOperationsInput | string
    nomenclatura?: StringFieldUpdateOperationsInput | string
  }

  export type tbl_transportadorasUncheckedUpdateWithoutPedidosInput = {
    pkid?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre?: StringFieldUpdateOperationsInput | string
    nomenclatura?: StringFieldUpdateOperationsInput | string
  }

  export type tbl_usuariosCreateWithoutPersonaInput = {
    pkusuario: string
    contrase_a: string
    rol: tbl_rolesCreateNestedOneWithoutUsuariosInput
    estado: tbl_estados_usuarioCreateNestedOneWithoutUsuariosInput
    comercios?: tbl_comerciosCreateNestedManyWithoutUsuariosInput
  }

  export type tbl_usuariosUncheckedCreateWithoutPersonaInput = {
    pkusuario: string
    contrase_a: string
    fkid_tbl_roles: bigint | number
    fkid_tbl_estados_usuario: bigint | number
    comercios?: tbl_comerciosUncheckedCreateNestedManyWithoutUsuariosInput
  }

  export type tbl_usuariosCreateOrConnectWithoutPersonaInput = {
    where: tbl_usuariosWhereUniqueInput
    create: XOR<tbl_usuariosCreateWithoutPersonaInput, tbl_usuariosUncheckedCreateWithoutPersonaInput>
  }

  export type tbl_usuariosCreateManyPersonaInputEnvelope = {
    data: tbl_usuariosCreateManyPersonaInput | tbl_usuariosCreateManyPersonaInput[]
    skipDuplicates?: boolean
  }

  export type tbl_usuariosUpsertWithWhereUniqueWithoutPersonaInput = {
    where: tbl_usuariosWhereUniqueInput
    update: XOR<tbl_usuariosUpdateWithoutPersonaInput, tbl_usuariosUncheckedUpdateWithoutPersonaInput>
    create: XOR<tbl_usuariosCreateWithoutPersonaInput, tbl_usuariosUncheckedCreateWithoutPersonaInput>
  }

  export type tbl_usuariosUpdateWithWhereUniqueWithoutPersonaInput = {
    where: tbl_usuariosWhereUniqueInput
    data: XOR<tbl_usuariosUpdateWithoutPersonaInput, tbl_usuariosUncheckedUpdateWithoutPersonaInput>
  }

  export type tbl_usuariosUpdateManyWithWhereWithoutPersonaInput = {
    where: tbl_usuariosScalarWhereInput
    data: XOR<tbl_usuariosUpdateManyMutationInput, tbl_usuariosUncheckedUpdateManyWithoutPersonaInput>
  }

  export type tbl_empresasCreateWithoutProductosInput = {
    pkid?: bigint | number
    nit: string
    nombre: string
    telefono: string
    correo: string
  }

  export type tbl_empresasUncheckedCreateWithoutProductosInput = {
    pkid?: bigint | number
    nit: string
    nombre: string
    telefono: string
    correo: string
  }

  export type tbl_empresasCreateOrConnectWithoutProductosInput = {
    where: tbl_empresasWhereUniqueInput
    create: XOR<tbl_empresasCreateWithoutProductosInput, tbl_empresasUncheckedCreateWithoutProductosInput>
  }

  export type tbl_det_productosCreateWithoutProductosInput = {
    pkid?: bigint | number
    nombre: string
    pedidos?: tbl_pedidosCreateNestedManyWithoutDet_productosInput
  }

  export type tbl_det_productosUncheckedCreateWithoutProductosInput = {
    pkid?: bigint | number
    nombre: string
    pedidos?: tbl_pedidosUncheckedCreateNestedManyWithoutDet_productosInput
  }

  export type tbl_det_productosCreateOrConnectWithoutProductosInput = {
    where: tbl_det_productosWhereUniqueInput
    create: XOR<tbl_det_productosCreateWithoutProductosInput, tbl_det_productosUncheckedCreateWithoutProductosInput>
  }

  export type tbl_det_productosCreateManyProductosInputEnvelope = {
    data: tbl_det_productosCreateManyProductosInput | tbl_det_productosCreateManyProductosInput[]
    skipDuplicates?: boolean
  }

  export type tbl_empresasUpsertWithoutProductosInput = {
    update: XOR<tbl_empresasUpdateWithoutProductosInput, tbl_empresasUncheckedUpdateWithoutProductosInput>
    create: XOR<tbl_empresasCreateWithoutProductosInput, tbl_empresasUncheckedCreateWithoutProductosInput>
    where?: tbl_empresasWhereInput
  }

  export type tbl_empresasUpdateToOneWithWhereWithoutProductosInput = {
    where?: tbl_empresasWhereInput
    data: XOR<tbl_empresasUpdateWithoutProductosInput, tbl_empresasUncheckedUpdateWithoutProductosInput>
  }

  export type tbl_empresasUpdateWithoutProductosInput = {
    pkid?: BigIntFieldUpdateOperationsInput | bigint | number
    nit?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
  }

  export type tbl_empresasUncheckedUpdateWithoutProductosInput = {
    pkid?: BigIntFieldUpdateOperationsInput | bigint | number
    nit?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
  }

  export type tbl_det_productosUpsertWithWhereUniqueWithoutProductosInput = {
    where: tbl_det_productosWhereUniqueInput
    update: XOR<tbl_det_productosUpdateWithoutProductosInput, tbl_det_productosUncheckedUpdateWithoutProductosInput>
    create: XOR<tbl_det_productosCreateWithoutProductosInput, tbl_det_productosUncheckedCreateWithoutProductosInput>
  }

  export type tbl_det_productosUpdateWithWhereUniqueWithoutProductosInput = {
    where: tbl_det_productosWhereUniqueInput
    data: XOR<tbl_det_productosUpdateWithoutProductosInput, tbl_det_productosUncheckedUpdateWithoutProductosInput>
  }

  export type tbl_det_productosUpdateManyWithWhereWithoutProductosInput = {
    where: tbl_det_productosScalarWhereInput
    data: XOR<tbl_det_productosUpdateManyMutationInput, tbl_det_productosUncheckedUpdateManyWithoutProductosInput>
  }

  export type tbl_det_productosScalarWhereInput = {
    AND?: tbl_det_productosScalarWhereInput | tbl_det_productosScalarWhereInput[]
    OR?: tbl_det_productosScalarWhereInput[]
    NOT?: tbl_det_productosScalarWhereInput | tbl_det_productosScalarWhereInput[]
    pkid?: BigIntFilter<"tbl_det_productos"> | bigint | number
    nombre?: StringFilter<"tbl_det_productos"> | string
    fkid_tbl_productos?: BigIntNullableFilter<"tbl_det_productos"> | bigint | number | null
  }

  export type tbl_productosCreateWithoutEmpresasInput = {
    pkid?: bigint | number
    nombre: string
    costo: number
    valor: number
    det_productos?: tbl_det_productosCreateNestedManyWithoutProductosInput
  }

  export type tbl_productosUncheckedCreateWithoutEmpresasInput = {
    pkid?: bigint | number
    nombre: string
    costo: number
    valor: number
    det_productos?: tbl_det_productosUncheckedCreateNestedManyWithoutProductosInput
  }

  export type tbl_productosCreateOrConnectWithoutEmpresasInput = {
    where: tbl_productosWhereUniqueInput
    create: XOR<tbl_productosCreateWithoutEmpresasInput, tbl_productosUncheckedCreateWithoutEmpresasInput>
  }

  export type tbl_productosCreateManyEmpresasInputEnvelope = {
    data: tbl_productosCreateManyEmpresasInput | tbl_productosCreateManyEmpresasInput[]
    skipDuplicates?: boolean
  }

  export type tbl_productosUpsertWithWhereUniqueWithoutEmpresasInput = {
    where: tbl_productosWhereUniqueInput
    update: XOR<tbl_productosUpdateWithoutEmpresasInput, tbl_productosUncheckedUpdateWithoutEmpresasInput>
    create: XOR<tbl_productosCreateWithoutEmpresasInput, tbl_productosUncheckedCreateWithoutEmpresasInput>
  }

  export type tbl_productosUpdateWithWhereUniqueWithoutEmpresasInput = {
    where: tbl_productosWhereUniqueInput
    data: XOR<tbl_productosUpdateWithoutEmpresasInput, tbl_productosUncheckedUpdateWithoutEmpresasInput>
  }

  export type tbl_productosUpdateManyWithWhereWithoutEmpresasInput = {
    where: tbl_productosScalarWhereInput
    data: XOR<tbl_productosUpdateManyMutationInput, tbl_productosUncheckedUpdateManyWithoutEmpresasInput>
  }

  export type tbl_productosScalarWhereInput = {
    AND?: tbl_productosScalarWhereInput | tbl_productosScalarWhereInput[]
    OR?: tbl_productosScalarWhereInput[]
    NOT?: tbl_productosScalarWhereInput | tbl_productosScalarWhereInput[]
    pkid?: BigIntFilter<"tbl_productos"> | bigint | number
    nombre?: StringFilter<"tbl_productos"> | string
    costo?: FloatFilter<"tbl_productos"> | number
    valor?: FloatFilter<"tbl_productos"> | number
    fkid_tbl_empresas?: BigIntNullableFilter<"tbl_productos"> | bigint | number | null
  }

  export type tbl_usuariosCreateWithoutRolInput = {
    pkusuario: string
    contrase_a: string
    persona: tbl_personasCreateNestedOneWithoutUsuariosInput
    estado: tbl_estados_usuarioCreateNestedOneWithoutUsuariosInput
    comercios?: tbl_comerciosCreateNestedManyWithoutUsuariosInput
  }

  export type tbl_usuariosUncheckedCreateWithoutRolInput = {
    pkusuario: string
    contrase_a: string
    fkid_tbl_estados_usuario: bigint | number
    fkid_tbl_personas: bigint | number
    comercios?: tbl_comerciosUncheckedCreateNestedManyWithoutUsuariosInput
  }

  export type tbl_usuariosCreateOrConnectWithoutRolInput = {
    where: tbl_usuariosWhereUniqueInput
    create: XOR<tbl_usuariosCreateWithoutRolInput, tbl_usuariosUncheckedCreateWithoutRolInput>
  }

  export type tbl_usuariosCreateManyRolInputEnvelope = {
    data: tbl_usuariosCreateManyRolInput | tbl_usuariosCreateManyRolInput[]
    skipDuplicates?: boolean
  }

  export type tbl_usuariosUpsertWithWhereUniqueWithoutRolInput = {
    where: tbl_usuariosWhereUniqueInput
    update: XOR<tbl_usuariosUpdateWithoutRolInput, tbl_usuariosUncheckedUpdateWithoutRolInput>
    create: XOR<tbl_usuariosCreateWithoutRolInput, tbl_usuariosUncheckedCreateWithoutRolInput>
  }

  export type tbl_usuariosUpdateWithWhereUniqueWithoutRolInput = {
    where: tbl_usuariosWhereUniqueInput
    data: XOR<tbl_usuariosUpdateWithoutRolInput, tbl_usuariosUncheckedUpdateWithoutRolInput>
  }

  export type tbl_usuariosUpdateManyWithWhereWithoutRolInput = {
    where: tbl_usuariosScalarWhereInput
    data: XOR<tbl_usuariosUpdateManyMutationInput, tbl_usuariosUncheckedUpdateManyWithoutRolInput>
  }

  export type tbl_usuariosCreateWithoutComerciosInput = {
    pkusuario: string
    contrase_a: string
    persona: tbl_personasCreateNestedOneWithoutUsuariosInput
    rol: tbl_rolesCreateNestedOneWithoutUsuariosInput
    estado: tbl_estados_usuarioCreateNestedOneWithoutUsuariosInput
  }

  export type tbl_usuariosUncheckedCreateWithoutComerciosInput = {
    pkusuario: string
    contrase_a: string
    fkid_tbl_roles: bigint | number
    fkid_tbl_estados_usuario: bigint | number
    fkid_tbl_personas: bigint | number
  }

  export type tbl_usuariosCreateOrConnectWithoutComerciosInput = {
    where: tbl_usuariosWhereUniqueInput
    create: XOR<tbl_usuariosCreateWithoutComerciosInput, tbl_usuariosUncheckedCreateWithoutComerciosInput>
  }

  export type tbl_campaniasCreateWithoutComercioInput = {
    pkid?: bigint | number
    nombre: string
    presupuesto_gastado: number
    fecha_inicio: Date | string
    fecha_fin: Date | string
  }

  export type tbl_campaniasUncheckedCreateWithoutComercioInput = {
    pkid?: bigint | number
    nombre: string
    presupuesto_gastado: number
    fecha_inicio: Date | string
    fecha_fin: Date | string
  }

  export type tbl_campaniasCreateOrConnectWithoutComercioInput = {
    where: tbl_campaniasWhereUniqueInput
    create: XOR<tbl_campaniasCreateWithoutComercioInput, tbl_campaniasUncheckedCreateWithoutComercioInput>
  }

  export type tbl_campaniasCreateManyComercioInputEnvelope = {
    data: tbl_campaniasCreateManyComercioInput | tbl_campaniasCreateManyComercioInput[]
    skipDuplicates?: boolean
  }

  export type tbl_clientesCreateWithoutComerciosInput = {
    pkid?: bigint | number
    telefono: string
    nombres: string
    apellidos: string
    correo: string
    direccion: string
    municipios?: tbl_municipiosCreateNestedOneWithoutClientesInput
    pedidos?: tbl_pedidosCreateNestedManyWithoutClientesInput
  }

  export type tbl_clientesUncheckedCreateWithoutComerciosInput = {
    pkid?: bigint | number
    telefono: string
    nombres: string
    apellidos: string
    correo: string
    direccion: string
    fkid_tbl_municipios?: bigint | number | null
    pedidos?: tbl_pedidosUncheckedCreateNestedManyWithoutClientesInput
  }

  export type tbl_clientesCreateOrConnectWithoutComerciosInput = {
    where: tbl_clientesWhereUniqueInput
    create: XOR<tbl_clientesCreateWithoutComerciosInput, tbl_clientesUncheckedCreateWithoutComerciosInput>
  }

  export type tbl_clientesCreateManyComerciosInputEnvelope = {
    data: tbl_clientesCreateManyComerciosInput | tbl_clientesCreateManyComerciosInput[]
    skipDuplicates?: boolean
  }

  export type tbl_usuariosUpsertWithoutComerciosInput = {
    update: XOR<tbl_usuariosUpdateWithoutComerciosInput, tbl_usuariosUncheckedUpdateWithoutComerciosInput>
    create: XOR<tbl_usuariosCreateWithoutComerciosInput, tbl_usuariosUncheckedCreateWithoutComerciosInput>
    where?: tbl_usuariosWhereInput
  }

  export type tbl_usuariosUpdateToOneWithWhereWithoutComerciosInput = {
    where?: tbl_usuariosWhereInput
    data: XOR<tbl_usuariosUpdateWithoutComerciosInput, tbl_usuariosUncheckedUpdateWithoutComerciosInput>
  }

  export type tbl_usuariosUpdateWithoutComerciosInput = {
    pkusuario?: StringFieldUpdateOperationsInput | string
    contrase_a?: StringFieldUpdateOperationsInput | string
    persona?: tbl_personasUpdateOneRequiredWithoutUsuariosNestedInput
    rol?: tbl_rolesUpdateOneRequiredWithoutUsuariosNestedInput
    estado?: tbl_estados_usuarioUpdateOneRequiredWithoutUsuariosNestedInput
  }

  export type tbl_usuariosUncheckedUpdateWithoutComerciosInput = {
    pkusuario?: StringFieldUpdateOperationsInput | string
    contrase_a?: StringFieldUpdateOperationsInput | string
    fkid_tbl_roles?: BigIntFieldUpdateOperationsInput | bigint | number
    fkid_tbl_estados_usuario?: BigIntFieldUpdateOperationsInput | bigint | number
    fkid_tbl_personas?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type tbl_campaniasUpsertWithWhereUniqueWithoutComercioInput = {
    where: tbl_campaniasWhereUniqueInput
    update: XOR<tbl_campaniasUpdateWithoutComercioInput, tbl_campaniasUncheckedUpdateWithoutComercioInput>
    create: XOR<tbl_campaniasCreateWithoutComercioInput, tbl_campaniasUncheckedCreateWithoutComercioInput>
  }

  export type tbl_campaniasUpdateWithWhereUniqueWithoutComercioInput = {
    where: tbl_campaniasWhereUniqueInput
    data: XOR<tbl_campaniasUpdateWithoutComercioInput, tbl_campaniasUncheckedUpdateWithoutComercioInput>
  }

  export type tbl_campaniasUpdateManyWithWhereWithoutComercioInput = {
    where: tbl_campaniasScalarWhereInput
    data: XOR<tbl_campaniasUpdateManyMutationInput, tbl_campaniasUncheckedUpdateManyWithoutComercioInput>
  }

  export type tbl_campaniasScalarWhereInput = {
    AND?: tbl_campaniasScalarWhereInput | tbl_campaniasScalarWhereInput[]
    OR?: tbl_campaniasScalarWhereInput[]
    NOT?: tbl_campaniasScalarWhereInput | tbl_campaniasScalarWhereInput[]
    pkid?: BigIntFilter<"tbl_campanias"> | bigint | number
    nombre?: StringFilter<"tbl_campanias"> | string
    presupuesto_gastado?: FloatFilter<"tbl_campanias"> | number
    fecha_inicio?: DateTimeFilter<"tbl_campanias"> | Date | string
    fecha_fin?: DateTimeFilter<"tbl_campanias"> | Date | string
    fkid_tbl_comercios?: BigIntNullableFilter<"tbl_campanias"> | bigint | number | null
  }

  export type tbl_clientesUpsertWithWhereUniqueWithoutComerciosInput = {
    where: tbl_clientesWhereUniqueInput
    update: XOR<tbl_clientesUpdateWithoutComerciosInput, tbl_clientesUncheckedUpdateWithoutComerciosInput>
    create: XOR<tbl_clientesCreateWithoutComerciosInput, tbl_clientesUncheckedCreateWithoutComerciosInput>
  }

  export type tbl_clientesUpdateWithWhereUniqueWithoutComerciosInput = {
    where: tbl_clientesWhereUniqueInput
    data: XOR<tbl_clientesUpdateWithoutComerciosInput, tbl_clientesUncheckedUpdateWithoutComerciosInput>
  }

  export type tbl_clientesUpdateManyWithWhereWithoutComerciosInput = {
    where: tbl_clientesScalarWhereInput
    data: XOR<tbl_clientesUpdateManyMutationInput, tbl_clientesUncheckedUpdateManyWithoutComerciosInput>
  }

  export type tbl_pedidosCreateWithoutTransportadorasInput = {
    pkid?: bigint | number
    valor: number
    fecha: Date | string
    clientes?: tbl_clientesCreateNestedOneWithoutPedidosInput
    det_productos?: tbl_det_productosCreateNestedOneWithoutPedidosInput
  }

  export type tbl_pedidosUncheckedCreateWithoutTransportadorasInput = {
    pkid?: bigint | number
    fkid_tbl_clientes?: bigint | number | null
    fkid_tbl_det_productos?: bigint | number | null
    valor: number
    fecha: Date | string
  }

  export type tbl_pedidosCreateOrConnectWithoutTransportadorasInput = {
    where: tbl_pedidosWhereUniqueInput
    create: XOR<tbl_pedidosCreateWithoutTransportadorasInput, tbl_pedidosUncheckedCreateWithoutTransportadorasInput>
  }

  export type tbl_pedidosCreateManyTransportadorasInputEnvelope = {
    data: tbl_pedidosCreateManyTransportadorasInput | tbl_pedidosCreateManyTransportadorasInput[]
    skipDuplicates?: boolean
  }

  export type tbl_pedidosUpsertWithWhereUniqueWithoutTransportadorasInput = {
    where: tbl_pedidosWhereUniqueInput
    update: XOR<tbl_pedidosUpdateWithoutTransportadorasInput, tbl_pedidosUncheckedUpdateWithoutTransportadorasInput>
    create: XOR<tbl_pedidosCreateWithoutTransportadorasInput, tbl_pedidosUncheckedCreateWithoutTransportadorasInput>
  }

  export type tbl_pedidosUpdateWithWhereUniqueWithoutTransportadorasInput = {
    where: tbl_pedidosWhereUniqueInput
    data: XOR<tbl_pedidosUpdateWithoutTransportadorasInput, tbl_pedidosUncheckedUpdateWithoutTransportadorasInput>
  }

  export type tbl_pedidosUpdateManyWithWhereWithoutTransportadorasInput = {
    where: tbl_pedidosScalarWhereInput
    data: XOR<tbl_pedidosUpdateManyMutationInput, tbl_pedidosUncheckedUpdateManyWithoutTransportadorasInput>
  }

  export type tbl_personasCreateWithoutUsuariosInput = {
    pkid?: bigint | number
    nombres: string
    apellidos: string
    correo: string
  }

  export type tbl_personasUncheckedCreateWithoutUsuariosInput = {
    pkid?: bigint | number
    nombres: string
    apellidos: string
    correo: string
  }

  export type tbl_personasCreateOrConnectWithoutUsuariosInput = {
    where: tbl_personasWhereUniqueInput
    create: XOR<tbl_personasCreateWithoutUsuariosInput, tbl_personasUncheckedCreateWithoutUsuariosInput>
  }

  export type tbl_rolesCreateWithoutUsuariosInput = {
    pkid?: bigint | number
    nombre: string
    nomenclatura: string
  }

  export type tbl_rolesUncheckedCreateWithoutUsuariosInput = {
    pkid?: bigint | number
    nombre: string
    nomenclatura: string
  }

  export type tbl_rolesCreateOrConnectWithoutUsuariosInput = {
    where: tbl_rolesWhereUniqueInput
    create: XOR<tbl_rolesCreateWithoutUsuariosInput, tbl_rolesUncheckedCreateWithoutUsuariosInput>
  }

  export type tbl_estados_usuarioCreateWithoutUsuariosInput = {
    pkid?: bigint | number
    nombre: string
    nomenclatura: string
  }

  export type tbl_estados_usuarioUncheckedCreateWithoutUsuariosInput = {
    pkid?: bigint | number
    nombre: string
    nomenclatura: string
  }

  export type tbl_estados_usuarioCreateOrConnectWithoutUsuariosInput = {
    where: tbl_estados_usuarioWhereUniqueInput
    create: XOR<tbl_estados_usuarioCreateWithoutUsuariosInput, tbl_estados_usuarioUncheckedCreateWithoutUsuariosInput>
  }

  export type tbl_comerciosCreateWithoutUsuariosInput = {
    pkid?: bigint | number
    nombre: string
    telefono: string
    correo: string
    campanias?: tbl_campaniasCreateNestedManyWithoutComercioInput
    clientes?: tbl_clientesCreateNestedManyWithoutComerciosInput
  }

  export type tbl_comerciosUncheckedCreateWithoutUsuariosInput = {
    pkid?: bigint | number
    nombre: string
    telefono: string
    correo: string
    campanias?: tbl_campaniasUncheckedCreateNestedManyWithoutComercioInput
    clientes?: tbl_clientesUncheckedCreateNestedManyWithoutComerciosInput
  }

  export type tbl_comerciosCreateOrConnectWithoutUsuariosInput = {
    where: tbl_comerciosWhereUniqueInput
    create: XOR<tbl_comerciosCreateWithoutUsuariosInput, tbl_comerciosUncheckedCreateWithoutUsuariosInput>
  }

  export type tbl_comerciosCreateManyUsuariosInputEnvelope = {
    data: tbl_comerciosCreateManyUsuariosInput | tbl_comerciosCreateManyUsuariosInput[]
    skipDuplicates?: boolean
  }

  export type tbl_personasUpsertWithoutUsuariosInput = {
    update: XOR<tbl_personasUpdateWithoutUsuariosInput, tbl_personasUncheckedUpdateWithoutUsuariosInput>
    create: XOR<tbl_personasCreateWithoutUsuariosInput, tbl_personasUncheckedCreateWithoutUsuariosInput>
    where?: tbl_personasWhereInput
  }

  export type tbl_personasUpdateToOneWithWhereWithoutUsuariosInput = {
    where?: tbl_personasWhereInput
    data: XOR<tbl_personasUpdateWithoutUsuariosInput, tbl_personasUncheckedUpdateWithoutUsuariosInput>
  }

  export type tbl_personasUpdateWithoutUsuariosInput = {
    pkid?: BigIntFieldUpdateOperationsInput | bigint | number
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
  }

  export type tbl_personasUncheckedUpdateWithoutUsuariosInput = {
    pkid?: BigIntFieldUpdateOperationsInput | bigint | number
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
  }

  export type tbl_rolesUpsertWithoutUsuariosInput = {
    update: XOR<tbl_rolesUpdateWithoutUsuariosInput, tbl_rolesUncheckedUpdateWithoutUsuariosInput>
    create: XOR<tbl_rolesCreateWithoutUsuariosInput, tbl_rolesUncheckedCreateWithoutUsuariosInput>
    where?: tbl_rolesWhereInput
  }

  export type tbl_rolesUpdateToOneWithWhereWithoutUsuariosInput = {
    where?: tbl_rolesWhereInput
    data: XOR<tbl_rolesUpdateWithoutUsuariosInput, tbl_rolesUncheckedUpdateWithoutUsuariosInput>
  }

  export type tbl_rolesUpdateWithoutUsuariosInput = {
    pkid?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre?: StringFieldUpdateOperationsInput | string
    nomenclatura?: StringFieldUpdateOperationsInput | string
  }

  export type tbl_rolesUncheckedUpdateWithoutUsuariosInput = {
    pkid?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre?: StringFieldUpdateOperationsInput | string
    nomenclatura?: StringFieldUpdateOperationsInput | string
  }

  export type tbl_estados_usuarioUpsertWithoutUsuariosInput = {
    update: XOR<tbl_estados_usuarioUpdateWithoutUsuariosInput, tbl_estados_usuarioUncheckedUpdateWithoutUsuariosInput>
    create: XOR<tbl_estados_usuarioCreateWithoutUsuariosInput, tbl_estados_usuarioUncheckedCreateWithoutUsuariosInput>
    where?: tbl_estados_usuarioWhereInput
  }

  export type tbl_estados_usuarioUpdateToOneWithWhereWithoutUsuariosInput = {
    where?: tbl_estados_usuarioWhereInput
    data: XOR<tbl_estados_usuarioUpdateWithoutUsuariosInput, tbl_estados_usuarioUncheckedUpdateWithoutUsuariosInput>
  }

  export type tbl_estados_usuarioUpdateWithoutUsuariosInput = {
    pkid?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre?: StringFieldUpdateOperationsInput | string
    nomenclatura?: StringFieldUpdateOperationsInput | string
  }

  export type tbl_estados_usuarioUncheckedUpdateWithoutUsuariosInput = {
    pkid?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre?: StringFieldUpdateOperationsInput | string
    nomenclatura?: StringFieldUpdateOperationsInput | string
  }

  export type tbl_comerciosUpsertWithWhereUniqueWithoutUsuariosInput = {
    where: tbl_comerciosWhereUniqueInput
    update: XOR<tbl_comerciosUpdateWithoutUsuariosInput, tbl_comerciosUncheckedUpdateWithoutUsuariosInput>
    create: XOR<tbl_comerciosCreateWithoutUsuariosInput, tbl_comerciosUncheckedCreateWithoutUsuariosInput>
  }

  export type tbl_comerciosUpdateWithWhereUniqueWithoutUsuariosInput = {
    where: tbl_comerciosWhereUniqueInput
    data: XOR<tbl_comerciosUpdateWithoutUsuariosInput, tbl_comerciosUncheckedUpdateWithoutUsuariosInput>
  }

  export type tbl_comerciosUpdateManyWithWhereWithoutUsuariosInput = {
    where: tbl_comerciosScalarWhereInput
    data: XOR<tbl_comerciosUpdateManyMutationInput, tbl_comerciosUncheckedUpdateManyWithoutUsuariosInput>
  }

  export type tbl_comerciosScalarWhereInput = {
    AND?: tbl_comerciosScalarWhereInput | tbl_comerciosScalarWhereInput[]
    OR?: tbl_comerciosScalarWhereInput[]
    NOT?: tbl_comerciosScalarWhereInput | tbl_comerciosScalarWhereInput[]
    pkid?: BigIntFilter<"tbl_comercios"> | bigint | number
    nombre?: StringFilter<"tbl_comercios"> | string
    telefono?: StringFilter<"tbl_comercios"> | string
    correo?: StringFilter<"tbl_comercios"> | string
    fkusuario_tbl_usuarios?: StringNullableFilter<"tbl_comercios"> | string | null
  }

  export type tbl_pedidosCreateManyClientesInput = {
    pkid?: bigint | number
    fkid_tbl_det_productos?: bigint | number | null
    fkid_tbl_transportadoras?: bigint | number | null
    valor: number
    fecha: Date | string
  }

  export type tbl_pedidosUpdateWithoutClientesInput = {
    pkid?: BigIntFieldUpdateOperationsInput | bigint | number
    valor?: FloatFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    det_productos?: tbl_det_productosUpdateOneWithoutPedidosNestedInput
    transportadoras?: tbl_transportadorasUpdateOneWithoutPedidosNestedInput
  }

  export type tbl_pedidosUncheckedUpdateWithoutClientesInput = {
    pkid?: BigIntFieldUpdateOperationsInput | bigint | number
    fkid_tbl_det_productos?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    fkid_tbl_transportadoras?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    valor?: FloatFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tbl_pedidosUncheckedUpdateManyWithoutClientesInput = {
    pkid?: BigIntFieldUpdateOperationsInput | bigint | number
    fkid_tbl_det_productos?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    fkid_tbl_transportadoras?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    valor?: FloatFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tbl_municipiosCreateManyDepartamentoInput = {
    pkid?: bigint | number
    nombre: string
    nomenclatura: string
  }

  export type tbl_municipiosUpdateWithoutDepartamentoInput = {
    pkid?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre?: StringFieldUpdateOperationsInput | string
    nomenclatura?: StringFieldUpdateOperationsInput | string
    clientes?: tbl_clientesUpdateManyWithoutMunicipiosNestedInput
  }

  export type tbl_municipiosUncheckedUpdateWithoutDepartamentoInput = {
    pkid?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre?: StringFieldUpdateOperationsInput | string
    nomenclatura?: StringFieldUpdateOperationsInput | string
    clientes?: tbl_clientesUncheckedUpdateManyWithoutMunicipiosNestedInput
  }

  export type tbl_municipiosUncheckedUpdateManyWithoutDepartamentoInput = {
    pkid?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre?: StringFieldUpdateOperationsInput | string
    nomenclatura?: StringFieldUpdateOperationsInput | string
  }

  export type tbl_pedidosCreateManyDet_productosInput = {
    pkid?: bigint | number
    fkid_tbl_clientes?: bigint | number | null
    fkid_tbl_transportadoras?: bigint | number | null
    valor: number
    fecha: Date | string
  }

  export type tbl_pedidosUpdateWithoutDet_productosInput = {
    pkid?: BigIntFieldUpdateOperationsInput | bigint | number
    valor?: FloatFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    clientes?: tbl_clientesUpdateOneWithoutPedidosNestedInput
    transportadoras?: tbl_transportadorasUpdateOneWithoutPedidosNestedInput
  }

  export type tbl_pedidosUncheckedUpdateWithoutDet_productosInput = {
    pkid?: BigIntFieldUpdateOperationsInput | bigint | number
    fkid_tbl_clientes?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    fkid_tbl_transportadoras?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    valor?: FloatFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tbl_pedidosUncheckedUpdateManyWithoutDet_productosInput = {
    pkid?: BigIntFieldUpdateOperationsInput | bigint | number
    fkid_tbl_clientes?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    fkid_tbl_transportadoras?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    valor?: FloatFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tbl_usuariosCreateManyEstadoInput = {
    pkusuario: string
    contrase_a: string
    fkid_tbl_roles: bigint | number
    fkid_tbl_personas: bigint | number
  }

  export type tbl_usuariosUpdateWithoutEstadoInput = {
    pkusuario?: StringFieldUpdateOperationsInput | string
    contrase_a?: StringFieldUpdateOperationsInput | string
    persona?: tbl_personasUpdateOneRequiredWithoutUsuariosNestedInput
    rol?: tbl_rolesUpdateOneRequiredWithoutUsuariosNestedInput
    comercios?: tbl_comerciosUpdateManyWithoutUsuariosNestedInput
  }

  export type tbl_usuariosUncheckedUpdateWithoutEstadoInput = {
    pkusuario?: StringFieldUpdateOperationsInput | string
    contrase_a?: StringFieldUpdateOperationsInput | string
    fkid_tbl_roles?: BigIntFieldUpdateOperationsInput | bigint | number
    fkid_tbl_personas?: BigIntFieldUpdateOperationsInput | bigint | number
    comercios?: tbl_comerciosUncheckedUpdateManyWithoutUsuariosNestedInput
  }

  export type tbl_usuariosUncheckedUpdateManyWithoutEstadoInput = {
    pkusuario?: StringFieldUpdateOperationsInput | string
    contrase_a?: StringFieldUpdateOperationsInput | string
    fkid_tbl_roles?: BigIntFieldUpdateOperationsInput | bigint | number
    fkid_tbl_personas?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type tbl_clientesCreateManyMunicipiosInput = {
    pkid?: bigint | number
    telefono: string
    nombres: string
    apellidos: string
    correo: string
    direccion: string
    fkid_tbl_comercios?: bigint | number | null
  }

  export type tbl_clientesUpdateWithoutMunicipiosInput = {
    pkid?: BigIntFieldUpdateOperationsInput | bigint | number
    telefono?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    comercios?: tbl_comerciosUpdateOneWithoutClientesNestedInput
    pedidos?: tbl_pedidosUpdateManyWithoutClientesNestedInput
  }

  export type tbl_clientesUncheckedUpdateWithoutMunicipiosInput = {
    pkid?: BigIntFieldUpdateOperationsInput | bigint | number
    telefono?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    fkid_tbl_comercios?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    pedidos?: tbl_pedidosUncheckedUpdateManyWithoutClientesNestedInput
  }

  export type tbl_clientesUncheckedUpdateManyWithoutMunicipiosInput = {
    pkid?: BigIntFieldUpdateOperationsInput | bigint | number
    telefono?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    fkid_tbl_comercios?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type tbl_usuariosCreateManyPersonaInput = {
    pkusuario: string
    contrase_a: string
    fkid_tbl_roles: bigint | number
    fkid_tbl_estados_usuario: bigint | number
  }

  export type tbl_usuariosUpdateWithoutPersonaInput = {
    pkusuario?: StringFieldUpdateOperationsInput | string
    contrase_a?: StringFieldUpdateOperationsInput | string
    rol?: tbl_rolesUpdateOneRequiredWithoutUsuariosNestedInput
    estado?: tbl_estados_usuarioUpdateOneRequiredWithoutUsuariosNestedInput
    comercios?: tbl_comerciosUpdateManyWithoutUsuariosNestedInput
  }

  export type tbl_usuariosUncheckedUpdateWithoutPersonaInput = {
    pkusuario?: StringFieldUpdateOperationsInput | string
    contrase_a?: StringFieldUpdateOperationsInput | string
    fkid_tbl_roles?: BigIntFieldUpdateOperationsInput | bigint | number
    fkid_tbl_estados_usuario?: BigIntFieldUpdateOperationsInput | bigint | number
    comercios?: tbl_comerciosUncheckedUpdateManyWithoutUsuariosNestedInput
  }

  export type tbl_usuariosUncheckedUpdateManyWithoutPersonaInput = {
    pkusuario?: StringFieldUpdateOperationsInput | string
    contrase_a?: StringFieldUpdateOperationsInput | string
    fkid_tbl_roles?: BigIntFieldUpdateOperationsInput | bigint | number
    fkid_tbl_estados_usuario?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type tbl_det_productosCreateManyProductosInput = {
    pkid?: bigint | number
    nombre: string
  }

  export type tbl_det_productosUpdateWithoutProductosInput = {
    pkid?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre?: StringFieldUpdateOperationsInput | string
    pedidos?: tbl_pedidosUpdateManyWithoutDet_productosNestedInput
  }

  export type tbl_det_productosUncheckedUpdateWithoutProductosInput = {
    pkid?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre?: StringFieldUpdateOperationsInput | string
    pedidos?: tbl_pedidosUncheckedUpdateManyWithoutDet_productosNestedInput
  }

  export type tbl_det_productosUncheckedUpdateManyWithoutProductosInput = {
    pkid?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre?: StringFieldUpdateOperationsInput | string
  }

  export type tbl_productosCreateManyEmpresasInput = {
    pkid?: bigint | number
    nombre: string
    costo: number
    valor: number
  }

  export type tbl_productosUpdateWithoutEmpresasInput = {
    pkid?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre?: StringFieldUpdateOperationsInput | string
    costo?: FloatFieldUpdateOperationsInput | number
    valor?: FloatFieldUpdateOperationsInput | number
    det_productos?: tbl_det_productosUpdateManyWithoutProductosNestedInput
  }

  export type tbl_productosUncheckedUpdateWithoutEmpresasInput = {
    pkid?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre?: StringFieldUpdateOperationsInput | string
    costo?: FloatFieldUpdateOperationsInput | number
    valor?: FloatFieldUpdateOperationsInput | number
    det_productos?: tbl_det_productosUncheckedUpdateManyWithoutProductosNestedInput
  }

  export type tbl_productosUncheckedUpdateManyWithoutEmpresasInput = {
    pkid?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre?: StringFieldUpdateOperationsInput | string
    costo?: FloatFieldUpdateOperationsInput | number
    valor?: FloatFieldUpdateOperationsInput | number
  }

  export type tbl_usuariosCreateManyRolInput = {
    pkusuario: string
    contrase_a: string
    fkid_tbl_estados_usuario: bigint | number
    fkid_tbl_personas: bigint | number
  }

  export type tbl_usuariosUpdateWithoutRolInput = {
    pkusuario?: StringFieldUpdateOperationsInput | string
    contrase_a?: StringFieldUpdateOperationsInput | string
    persona?: tbl_personasUpdateOneRequiredWithoutUsuariosNestedInput
    estado?: tbl_estados_usuarioUpdateOneRequiredWithoutUsuariosNestedInput
    comercios?: tbl_comerciosUpdateManyWithoutUsuariosNestedInput
  }

  export type tbl_usuariosUncheckedUpdateWithoutRolInput = {
    pkusuario?: StringFieldUpdateOperationsInput | string
    contrase_a?: StringFieldUpdateOperationsInput | string
    fkid_tbl_estados_usuario?: BigIntFieldUpdateOperationsInput | bigint | number
    fkid_tbl_personas?: BigIntFieldUpdateOperationsInput | bigint | number
    comercios?: tbl_comerciosUncheckedUpdateManyWithoutUsuariosNestedInput
  }

  export type tbl_usuariosUncheckedUpdateManyWithoutRolInput = {
    pkusuario?: StringFieldUpdateOperationsInput | string
    contrase_a?: StringFieldUpdateOperationsInput | string
    fkid_tbl_estados_usuario?: BigIntFieldUpdateOperationsInput | bigint | number
    fkid_tbl_personas?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type tbl_campaniasCreateManyComercioInput = {
    pkid?: bigint | number
    nombre: string
    presupuesto_gastado: number
    fecha_inicio: Date | string
    fecha_fin: Date | string
  }

  export type tbl_clientesCreateManyComerciosInput = {
    pkid?: bigint | number
    telefono: string
    nombres: string
    apellidos: string
    correo: string
    direccion: string
    fkid_tbl_municipios?: bigint | number | null
  }

  export type tbl_campaniasUpdateWithoutComercioInput = {
    pkid?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre?: StringFieldUpdateOperationsInput | string
    presupuesto_gastado?: FloatFieldUpdateOperationsInput | number
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tbl_campaniasUncheckedUpdateWithoutComercioInput = {
    pkid?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre?: StringFieldUpdateOperationsInput | string
    presupuesto_gastado?: FloatFieldUpdateOperationsInput | number
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tbl_campaniasUncheckedUpdateManyWithoutComercioInput = {
    pkid?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre?: StringFieldUpdateOperationsInput | string
    presupuesto_gastado?: FloatFieldUpdateOperationsInput | number
    fecha_inicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fecha_fin?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tbl_clientesUpdateWithoutComerciosInput = {
    pkid?: BigIntFieldUpdateOperationsInput | bigint | number
    telefono?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    municipios?: tbl_municipiosUpdateOneWithoutClientesNestedInput
    pedidos?: tbl_pedidosUpdateManyWithoutClientesNestedInput
  }

  export type tbl_clientesUncheckedUpdateWithoutComerciosInput = {
    pkid?: BigIntFieldUpdateOperationsInput | bigint | number
    telefono?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    fkid_tbl_municipios?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    pedidos?: tbl_pedidosUncheckedUpdateManyWithoutClientesNestedInput
  }

  export type tbl_clientesUncheckedUpdateManyWithoutComerciosInput = {
    pkid?: BigIntFieldUpdateOperationsInput | bigint | number
    telefono?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    fkid_tbl_municipios?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type tbl_pedidosCreateManyTransportadorasInput = {
    pkid?: bigint | number
    fkid_tbl_clientes?: bigint | number | null
    fkid_tbl_det_productos?: bigint | number | null
    valor: number
    fecha: Date | string
  }

  export type tbl_pedidosUpdateWithoutTransportadorasInput = {
    pkid?: BigIntFieldUpdateOperationsInput | bigint | number
    valor?: FloatFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    clientes?: tbl_clientesUpdateOneWithoutPedidosNestedInput
    det_productos?: tbl_det_productosUpdateOneWithoutPedidosNestedInput
  }

  export type tbl_pedidosUncheckedUpdateWithoutTransportadorasInput = {
    pkid?: BigIntFieldUpdateOperationsInput | bigint | number
    fkid_tbl_clientes?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    fkid_tbl_det_productos?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    valor?: FloatFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tbl_pedidosUncheckedUpdateManyWithoutTransportadorasInput = {
    pkid?: BigIntFieldUpdateOperationsInput | bigint | number
    fkid_tbl_clientes?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    fkid_tbl_det_productos?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    valor?: FloatFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type tbl_comerciosCreateManyUsuariosInput = {
    pkid?: bigint | number
    nombre: string
    telefono: string
    correo: string
  }

  export type tbl_comerciosUpdateWithoutUsuariosInput = {
    pkid?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    campanias?: tbl_campaniasUpdateManyWithoutComercioNestedInput
    clientes?: tbl_clientesUpdateManyWithoutComerciosNestedInput
  }

  export type tbl_comerciosUncheckedUpdateWithoutUsuariosInput = {
    pkid?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    campanias?: tbl_campaniasUncheckedUpdateManyWithoutComercioNestedInput
    clientes?: tbl_clientesUncheckedUpdateManyWithoutComerciosNestedInput
  }

  export type tbl_comerciosUncheckedUpdateManyWithoutUsuariosInput = {
    pkid?: BigIntFieldUpdateOperationsInput | bigint | number
    nombre?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
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