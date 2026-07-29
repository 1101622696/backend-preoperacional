
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
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Vehiculo
 * 
 */
export type Vehiculo = $Result.DefaultSelection<Prisma.$VehiculoPayload>
/**
 * Model Preoperacional
 * 
 */
export type Preoperacional = $Result.DefaultSelection<Prisma.$PreoperacionalPayload>
/**
 * Model RefreshToken
 * 
 */
export type RefreshToken = $Result.DefaultSelection<Prisma.$RefreshTokenPayload>
/**
 * Model Solicitud
 * 
 */
export type Solicitud = $Result.DefaultSelection<Prisma.$SolicitudPayload>
/**
 * Model Viaje
 * 
 */
export type Viaje = $Result.DefaultSelection<Prisma.$ViajePayload>
/**
 * Model PuntoGps
 * 
 */
export type PuntoGps = $Result.DefaultSelection<Prisma.$PuntoGpsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Rol: {
  conductor: 'conductor',
  administrador: 'administrador'
};

export type Rol = (typeof Rol)[keyof typeof Rol]


export const Origen: {
  manual: 'manual',
  rrhh_api: 'rrhh_api'
};

export type Origen = (typeof Origen)[keyof typeof Origen]


export const EstadoSolicitud: {
  pendiente: 'pendiente',
  aprobada: 'aprobada',
  rechazada: 'rechazada',
  completada: 'completada',
  cancelada: 'cancelada'
};

export type EstadoSolicitud = (typeof EstadoSolicitud)[keyof typeof EstadoSolicitud]


export const EstadoViaje: {
  en_curso: 'en_curso',
  finalizado: 'finalizado',
  pendiente_sync: 'pendiente_sync'
};

export type EstadoViaje = (typeof EstadoViaje)[keyof typeof EstadoViaje]

}

export type Rol = $Enums.Rol

export const Rol: typeof $Enums.Rol

export type Origen = $Enums.Origen

export const Origen: typeof $Enums.Origen

export type EstadoSolicitud = $Enums.EstadoSolicitud

export const EstadoSolicitud: typeof $Enums.EstadoSolicitud

export type EstadoViaje = $Enums.EstadoViaje

export const EstadoViaje: typeof $Enums.EstadoViaje

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
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
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vehiculo`: Exposes CRUD operations for the **Vehiculo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vehiculos
    * const vehiculos = await prisma.vehiculo.findMany()
    * ```
    */
  get vehiculo(): Prisma.VehiculoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.preoperacional`: Exposes CRUD operations for the **Preoperacional** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Preoperacionals
    * const preoperacionals = await prisma.preoperacional.findMany()
    * ```
    */
  get preoperacional(): Prisma.PreoperacionalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.refreshToken`: Exposes CRUD operations for the **RefreshToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RefreshTokens
    * const refreshTokens = await prisma.refreshToken.findMany()
    * ```
    */
  get refreshToken(): Prisma.RefreshTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.solicitud`: Exposes CRUD operations for the **Solicitud** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Solicituds
    * const solicituds = await prisma.solicitud.findMany()
    * ```
    */
  get solicitud(): Prisma.SolicitudDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.viaje`: Exposes CRUD operations for the **Viaje** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Viajes
    * const viajes = await prisma.viaje.findMany()
    * ```
    */
  get viaje(): Prisma.ViajeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.puntoGps`: Exposes CRUD operations for the **PuntoGps** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PuntoGps
    * const puntoGps = await prisma.puntoGps.findMany()
    * ```
    */
  get puntoGps(): Prisma.PuntoGpsDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
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
    Usuario: 'Usuario',
    Vehiculo: 'Vehiculo',
    Preoperacional: 'Preoperacional',
    RefreshToken: 'RefreshToken',
    Solicitud: 'Solicitud',
    Viaje: 'Viaje',
    PuntoGps: 'PuntoGps'
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
      modelProps: "usuario" | "vehiculo" | "preoperacional" | "refreshToken" | "solicitud" | "viaje" | "puntoGps"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Vehiculo: {
        payload: Prisma.$VehiculoPayload<ExtArgs>
        fields: Prisma.VehiculoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VehiculoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiculoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VehiculoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiculoPayload>
          }
          findFirst: {
            args: Prisma.VehiculoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiculoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VehiculoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiculoPayload>
          }
          findMany: {
            args: Prisma.VehiculoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiculoPayload>[]
          }
          create: {
            args: Prisma.VehiculoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiculoPayload>
          }
          createMany: {
            args: Prisma.VehiculoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VehiculoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiculoPayload>[]
          }
          delete: {
            args: Prisma.VehiculoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiculoPayload>
          }
          update: {
            args: Prisma.VehiculoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiculoPayload>
          }
          deleteMany: {
            args: Prisma.VehiculoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VehiculoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VehiculoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiculoPayload>[]
          }
          upsert: {
            args: Prisma.VehiculoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiculoPayload>
          }
          aggregate: {
            args: Prisma.VehiculoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVehiculo>
          }
          groupBy: {
            args: Prisma.VehiculoGroupByArgs<ExtArgs>
            result: $Utils.Optional<VehiculoGroupByOutputType>[]
          }
          count: {
            args: Prisma.VehiculoCountArgs<ExtArgs>
            result: $Utils.Optional<VehiculoCountAggregateOutputType> | number
          }
        }
      }
      Preoperacional: {
        payload: Prisma.$PreoperacionalPayload<ExtArgs>
        fields: Prisma.PreoperacionalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PreoperacionalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreoperacionalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PreoperacionalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreoperacionalPayload>
          }
          findFirst: {
            args: Prisma.PreoperacionalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreoperacionalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PreoperacionalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreoperacionalPayload>
          }
          findMany: {
            args: Prisma.PreoperacionalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreoperacionalPayload>[]
          }
          create: {
            args: Prisma.PreoperacionalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreoperacionalPayload>
          }
          createMany: {
            args: Prisma.PreoperacionalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PreoperacionalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreoperacionalPayload>[]
          }
          delete: {
            args: Prisma.PreoperacionalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreoperacionalPayload>
          }
          update: {
            args: Prisma.PreoperacionalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreoperacionalPayload>
          }
          deleteMany: {
            args: Prisma.PreoperacionalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PreoperacionalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PreoperacionalUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreoperacionalPayload>[]
          }
          upsert: {
            args: Prisma.PreoperacionalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreoperacionalPayload>
          }
          aggregate: {
            args: Prisma.PreoperacionalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePreoperacional>
          }
          groupBy: {
            args: Prisma.PreoperacionalGroupByArgs<ExtArgs>
            result: $Utils.Optional<PreoperacionalGroupByOutputType>[]
          }
          count: {
            args: Prisma.PreoperacionalCountArgs<ExtArgs>
            result: $Utils.Optional<PreoperacionalCountAggregateOutputType> | number
          }
        }
      }
      RefreshToken: {
        payload: Prisma.$RefreshTokenPayload<ExtArgs>
        fields: Prisma.RefreshTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RefreshTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RefreshTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          findFirst: {
            args: Prisma.RefreshTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RefreshTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          findMany: {
            args: Prisma.RefreshTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
          }
          create: {
            args: Prisma.RefreshTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          createMany: {
            args: Prisma.RefreshTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RefreshTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
          }
          delete: {
            args: Prisma.RefreshTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          update: {
            args: Prisma.RefreshTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          deleteMany: {
            args: Prisma.RefreshTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RefreshTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RefreshTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
          }
          upsert: {
            args: Prisma.RefreshTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          aggregate: {
            args: Prisma.RefreshTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRefreshToken>
          }
          groupBy: {
            args: Prisma.RefreshTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<RefreshTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.RefreshTokenCountArgs<ExtArgs>
            result: $Utils.Optional<RefreshTokenCountAggregateOutputType> | number
          }
        }
      }
      Solicitud: {
        payload: Prisma.$SolicitudPayload<ExtArgs>
        fields: Prisma.SolicitudFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SolicitudFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolicitudPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SolicitudFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolicitudPayload>
          }
          findFirst: {
            args: Prisma.SolicitudFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolicitudPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SolicitudFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolicitudPayload>
          }
          findMany: {
            args: Prisma.SolicitudFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolicitudPayload>[]
          }
          create: {
            args: Prisma.SolicitudCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolicitudPayload>
          }
          createMany: {
            args: Prisma.SolicitudCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SolicitudCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolicitudPayload>[]
          }
          delete: {
            args: Prisma.SolicitudDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolicitudPayload>
          }
          update: {
            args: Prisma.SolicitudUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolicitudPayload>
          }
          deleteMany: {
            args: Prisma.SolicitudDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SolicitudUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SolicitudUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolicitudPayload>[]
          }
          upsert: {
            args: Prisma.SolicitudUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolicitudPayload>
          }
          aggregate: {
            args: Prisma.SolicitudAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSolicitud>
          }
          groupBy: {
            args: Prisma.SolicitudGroupByArgs<ExtArgs>
            result: $Utils.Optional<SolicitudGroupByOutputType>[]
          }
          count: {
            args: Prisma.SolicitudCountArgs<ExtArgs>
            result: $Utils.Optional<SolicitudCountAggregateOutputType> | number
          }
        }
      }
      Viaje: {
        payload: Prisma.$ViajePayload<ExtArgs>
        fields: Prisma.ViajeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ViajeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViajePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ViajeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViajePayload>
          }
          findFirst: {
            args: Prisma.ViajeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViajePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ViajeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViajePayload>
          }
          findMany: {
            args: Prisma.ViajeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViajePayload>[]
          }
          create: {
            args: Prisma.ViajeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViajePayload>
          }
          createMany: {
            args: Prisma.ViajeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ViajeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViajePayload>[]
          }
          delete: {
            args: Prisma.ViajeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViajePayload>
          }
          update: {
            args: Prisma.ViajeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViajePayload>
          }
          deleteMany: {
            args: Prisma.ViajeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ViajeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ViajeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViajePayload>[]
          }
          upsert: {
            args: Prisma.ViajeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViajePayload>
          }
          aggregate: {
            args: Prisma.ViajeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateViaje>
          }
          groupBy: {
            args: Prisma.ViajeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ViajeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ViajeCountArgs<ExtArgs>
            result: $Utils.Optional<ViajeCountAggregateOutputType> | number
          }
        }
      }
      PuntoGps: {
        payload: Prisma.$PuntoGpsPayload<ExtArgs>
        fields: Prisma.PuntoGpsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PuntoGpsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PuntoGpsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PuntoGpsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PuntoGpsPayload>
          }
          findFirst: {
            args: Prisma.PuntoGpsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PuntoGpsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PuntoGpsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PuntoGpsPayload>
          }
          findMany: {
            args: Prisma.PuntoGpsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PuntoGpsPayload>[]
          }
          delete: {
            args: Prisma.PuntoGpsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PuntoGpsPayload>
          }
          update: {
            args: Prisma.PuntoGpsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PuntoGpsPayload>
          }
          deleteMany: {
            args: Prisma.PuntoGpsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PuntoGpsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PuntoGpsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PuntoGpsPayload>[]
          }
          aggregate: {
            args: Prisma.PuntoGpsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePuntoGps>
          }
          groupBy: {
            args: Prisma.PuntoGpsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PuntoGpsGroupByOutputType>[]
          }
          count: {
            args: Prisma.PuntoGpsCountArgs<ExtArgs>
            result: $Utils.Optional<PuntoGpsCountAggregateOutputType> | number
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
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
    usuario?: UsuarioOmit
    vehiculo?: VehiculoOmit
    preoperacional?: PreoperacionalOmit
    refreshToken?: RefreshTokenOmit
    solicitud?: SolicitudOmit
    viaje?: ViajeOmit
    puntoGps?: PuntoGpsOmit
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
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    preoperacionales: number
    refreshTokens: number
    solicitudesCreadas: number
    solicitudesAprobadas: number
    viajes: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    preoperacionales?: boolean | UsuarioCountOutputTypeCountPreoperacionalesArgs
    refreshTokens?: boolean | UsuarioCountOutputTypeCountRefreshTokensArgs
    solicitudesCreadas?: boolean | UsuarioCountOutputTypeCountSolicitudesCreadasArgs
    solicitudesAprobadas?: boolean | UsuarioCountOutputTypeCountSolicitudesAprobadasArgs
    viajes?: boolean | UsuarioCountOutputTypeCountViajesArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountPreoperacionalesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PreoperacionalWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountRefreshTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefreshTokenWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountSolicitudesCreadasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SolicitudWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountSolicitudesAprobadasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SolicitudWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountViajesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ViajeWhereInput
  }


  /**
   * Count Type VehiculoCountOutputType
   */

  export type VehiculoCountOutputType = {
    preoperacionales: number
    solicitudes: number
    viajes: number
  }

  export type VehiculoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    preoperacionales?: boolean | VehiculoCountOutputTypeCountPreoperacionalesArgs
    solicitudes?: boolean | VehiculoCountOutputTypeCountSolicitudesArgs
    viajes?: boolean | VehiculoCountOutputTypeCountViajesArgs
  }

  // Custom InputTypes
  /**
   * VehiculoCountOutputType without action
   */
  export type VehiculoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehiculoCountOutputType
     */
    select?: VehiculoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VehiculoCountOutputType without action
   */
  export type VehiculoCountOutputTypeCountPreoperacionalesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PreoperacionalWhereInput
  }

  /**
   * VehiculoCountOutputType without action
   */
  export type VehiculoCountOutputTypeCountSolicitudesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SolicitudWhereInput
  }

  /**
   * VehiculoCountOutputType without action
   */
  export type VehiculoCountOutputTypeCountViajesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ViajeWhereInput
  }


  /**
   * Count Type PreoperacionalCountOutputType
   */

  export type PreoperacionalCountOutputType = {
    viajes: number
  }

  export type PreoperacionalCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    viajes?: boolean | PreoperacionalCountOutputTypeCountViajesArgs
  }

  // Custom InputTypes
  /**
   * PreoperacionalCountOutputType without action
   */
  export type PreoperacionalCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PreoperacionalCountOutputType
     */
    select?: PreoperacionalCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PreoperacionalCountOutputType without action
   */
  export type PreoperacionalCountOutputTypeCountViajesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ViajeWhereInput
  }


  /**
   * Count Type SolicitudCountOutputType
   */

  export type SolicitudCountOutputType = {
    preoperacionales: number
  }

  export type SolicitudCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    preoperacionales?: boolean | SolicitudCountOutputTypeCountPreoperacionalesArgs
  }

  // Custom InputTypes
  /**
   * SolicitudCountOutputType without action
   */
  export type SolicitudCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SolicitudCountOutputType
     */
    select?: SolicitudCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SolicitudCountOutputType without action
   */
  export type SolicitudCountOutputTypeCountPreoperacionalesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PreoperacionalWhereInput
  }


  /**
   * Count Type ViajeCountOutputType
   */

  export type ViajeCountOutputType = {
    puntosGps: number
  }

  export type ViajeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    puntosGps?: boolean | ViajeCountOutputTypeCountPuntosGpsArgs
  }

  // Custom InputTypes
  /**
   * ViajeCountOutputType without action
   */
  export type ViajeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViajeCountOutputType
     */
    select?: ViajeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ViajeCountOutputType without action
   */
  export type ViajeCountOutputTypeCountPuntosGpsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PuntoGpsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    cedula: string | null
    email: string | null
    passwordHash: string | null
    rol: $Enums.Rol | null
    origen: $Enums.Origen | null
    activo: boolean | null
    createdAt: Date | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    cedula: string | null
    email: string | null
    passwordHash: string | null
    rol: $Enums.Rol | null
    origen: $Enums.Origen | null
    activo: boolean | null
    createdAt: Date | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    nombre: number
    cedula: number
    email: number
    passwordHash: number
    rol: number
    origen: number
    activo: number
    createdAt: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id?: true
  }

  export type UsuarioSumAggregateInputType = {
    id?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    nombre?: true
    cedula?: true
    email?: true
    passwordHash?: true
    rol?: true
    origen?: true
    activo?: true
    createdAt?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    nombre?: true
    cedula?: true
    email?: true
    passwordHash?: true
    rol?: true
    origen?: true
    activo?: true
    createdAt?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    nombre?: true
    cedula?: true
    email?: true
    passwordHash?: true
    rol?: true
    origen?: true
    activo?: true
    createdAt?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: number
    nombre: string
    cedula: string
    email: string
    passwordHash: string
    rol: $Enums.Rol
    origen: $Enums.Origen
    activo: boolean
    createdAt: Date
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    cedula?: boolean
    email?: boolean
    passwordHash?: boolean
    rol?: boolean
    origen?: boolean
    activo?: boolean
    createdAt?: boolean
    preoperacionales?: boolean | Usuario$preoperacionalesArgs<ExtArgs>
    refreshTokens?: boolean | Usuario$refreshTokensArgs<ExtArgs>
    solicitudesCreadas?: boolean | Usuario$solicitudesCreadasArgs<ExtArgs>
    solicitudesAprobadas?: boolean | Usuario$solicitudesAprobadasArgs<ExtArgs>
    viajes?: boolean | Usuario$viajesArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    cedula?: boolean
    email?: boolean
    passwordHash?: boolean
    rol?: boolean
    origen?: boolean
    activo?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    cedula?: boolean
    email?: boolean
    passwordHash?: boolean
    rol?: boolean
    origen?: boolean
    activo?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id?: boolean
    nombre?: boolean
    cedula?: boolean
    email?: boolean
    passwordHash?: boolean
    rol?: boolean
    origen?: boolean
    activo?: boolean
    createdAt?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "cedula" | "email" | "passwordHash" | "rol" | "origen" | "activo" | "createdAt", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    preoperacionales?: boolean | Usuario$preoperacionalesArgs<ExtArgs>
    refreshTokens?: boolean | Usuario$refreshTokensArgs<ExtArgs>
    solicitudesCreadas?: boolean | Usuario$solicitudesCreadasArgs<ExtArgs>
    solicitudesAprobadas?: boolean | Usuario$solicitudesAprobadasArgs<ExtArgs>
    viajes?: boolean | Usuario$viajesArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      preoperacionales: Prisma.$PreoperacionalPayload<ExtArgs>[]
      refreshTokens: Prisma.$RefreshTokenPayload<ExtArgs>[]
      solicitudesCreadas: Prisma.$SolicitudPayload<ExtArgs>[]
      solicitudesAprobadas: Prisma.$SolicitudPayload<ExtArgs>[]
      viajes: Prisma.$ViajePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      cedula: string
      email: string
      passwordHash: string
      rol: $Enums.Rol
      origen: $Enums.Origen
      activo: boolean
      createdAt: Date
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.updateManyAndReturn({
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
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
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
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    preoperacionales<T extends Usuario$preoperacionalesArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$preoperacionalesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PreoperacionalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    refreshTokens<T extends Usuario$refreshTokensArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$refreshTokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    solicitudesCreadas<T extends Usuario$solicitudesCreadasArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$solicitudesCreadasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SolicitudPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    solicitudesAprobadas<T extends Usuario$solicitudesAprobadasArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$solicitudesAprobadasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SolicitudPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    viajes<T extends Usuario$viajesArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$viajesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViajePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'Int'>
    readonly nombre: FieldRef<"Usuario", 'String'>
    readonly cedula: FieldRef<"Usuario", 'String'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly passwordHash: FieldRef<"Usuario", 'String'>
    readonly rol: FieldRef<"Usuario", 'Rol'>
    readonly origen: FieldRef<"Usuario", 'Origen'>
    readonly activo: FieldRef<"Usuario", 'Boolean'>
    readonly createdAt: FieldRef<"Usuario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.preoperacionales
   */
  export type Usuario$preoperacionalesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preoperacional
     */
    select?: PreoperacionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preoperacional
     */
    omit?: PreoperacionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreoperacionalInclude<ExtArgs> | null
    where?: PreoperacionalWhereInput
    orderBy?: PreoperacionalOrderByWithRelationInput | PreoperacionalOrderByWithRelationInput[]
    cursor?: PreoperacionalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PreoperacionalScalarFieldEnum | PreoperacionalScalarFieldEnum[]
  }

  /**
   * Usuario.refreshTokens
   */
  export type Usuario$refreshTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    where?: RefreshTokenWhereInput
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    cursor?: RefreshTokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * Usuario.solicitudesCreadas
   */
  export type Usuario$solicitudesCreadasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solicitud
     */
    select?: SolicitudSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solicitud
     */
    omit?: SolicitudOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolicitudInclude<ExtArgs> | null
    where?: SolicitudWhereInput
    orderBy?: SolicitudOrderByWithRelationInput | SolicitudOrderByWithRelationInput[]
    cursor?: SolicitudWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SolicitudScalarFieldEnum | SolicitudScalarFieldEnum[]
  }

  /**
   * Usuario.solicitudesAprobadas
   */
  export type Usuario$solicitudesAprobadasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solicitud
     */
    select?: SolicitudSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solicitud
     */
    omit?: SolicitudOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolicitudInclude<ExtArgs> | null
    where?: SolicitudWhereInput
    orderBy?: SolicitudOrderByWithRelationInput | SolicitudOrderByWithRelationInput[]
    cursor?: SolicitudWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SolicitudScalarFieldEnum | SolicitudScalarFieldEnum[]
  }

  /**
   * Usuario.viajes
   */
  export type Usuario$viajesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Viaje
     */
    select?: ViajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Viaje
     */
    omit?: ViajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViajeInclude<ExtArgs> | null
    where?: ViajeWhereInput
    orderBy?: ViajeOrderByWithRelationInput | ViajeOrderByWithRelationInput[]
    cursor?: ViajeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ViajeScalarFieldEnum | ViajeScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Vehiculo
   */

  export type AggregateVehiculo = {
    _count: VehiculoCountAggregateOutputType | null
    _avg: VehiculoAvgAggregateOutputType | null
    _sum: VehiculoSumAggregateOutputType | null
    _min: VehiculoMinAggregateOutputType | null
    _max: VehiculoMaxAggregateOutputType | null
  }

  export type VehiculoAvgAggregateOutputType = {
    id: number | null
  }

  export type VehiculoSumAggregateOutputType = {
    id: number | null
  }

  export type VehiculoMinAggregateOutputType = {
    id: number | null
    placa: string | null
    marca: string | null
    modelo: string | null
    tieneGpsFisico: boolean | null
    polizaUrl: string | null
    soatUrl: string | null
    tecnomecanicaUrl: string | null
    activo: boolean | null
    createdAt: Date | null
  }

  export type VehiculoMaxAggregateOutputType = {
    id: number | null
    placa: string | null
    marca: string | null
    modelo: string | null
    tieneGpsFisico: boolean | null
    polizaUrl: string | null
    soatUrl: string | null
    tecnomecanicaUrl: string | null
    activo: boolean | null
    createdAt: Date | null
  }

  export type VehiculoCountAggregateOutputType = {
    id: number
    placa: number
    marca: number
    modelo: number
    tieneGpsFisico: number
    polizaUrl: number
    soatUrl: number
    tecnomecanicaUrl: number
    activo: number
    createdAt: number
    _all: number
  }


  export type VehiculoAvgAggregateInputType = {
    id?: true
  }

  export type VehiculoSumAggregateInputType = {
    id?: true
  }

  export type VehiculoMinAggregateInputType = {
    id?: true
    placa?: true
    marca?: true
    modelo?: true
    tieneGpsFisico?: true
    polizaUrl?: true
    soatUrl?: true
    tecnomecanicaUrl?: true
    activo?: true
    createdAt?: true
  }

  export type VehiculoMaxAggregateInputType = {
    id?: true
    placa?: true
    marca?: true
    modelo?: true
    tieneGpsFisico?: true
    polizaUrl?: true
    soatUrl?: true
    tecnomecanicaUrl?: true
    activo?: true
    createdAt?: true
  }

  export type VehiculoCountAggregateInputType = {
    id?: true
    placa?: true
    marca?: true
    modelo?: true
    tieneGpsFisico?: true
    polizaUrl?: true
    soatUrl?: true
    tecnomecanicaUrl?: true
    activo?: true
    createdAt?: true
    _all?: true
  }

  export type VehiculoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vehiculo to aggregate.
     */
    where?: VehiculoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehiculos to fetch.
     */
    orderBy?: VehiculoOrderByWithRelationInput | VehiculoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VehiculoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehiculos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehiculos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vehiculos
    **/
    _count?: true | VehiculoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VehiculoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VehiculoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VehiculoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VehiculoMaxAggregateInputType
  }

  export type GetVehiculoAggregateType<T extends VehiculoAggregateArgs> = {
        [P in keyof T & keyof AggregateVehiculo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVehiculo[P]>
      : GetScalarType<T[P], AggregateVehiculo[P]>
  }




  export type VehiculoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VehiculoWhereInput
    orderBy?: VehiculoOrderByWithAggregationInput | VehiculoOrderByWithAggregationInput[]
    by: VehiculoScalarFieldEnum[] | VehiculoScalarFieldEnum
    having?: VehiculoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VehiculoCountAggregateInputType | true
    _avg?: VehiculoAvgAggregateInputType
    _sum?: VehiculoSumAggregateInputType
    _min?: VehiculoMinAggregateInputType
    _max?: VehiculoMaxAggregateInputType
  }

  export type VehiculoGroupByOutputType = {
    id: number
    placa: string
    marca: string | null
    modelo: string | null
    tieneGpsFisico: boolean
    polizaUrl: string | null
    soatUrl: string | null
    tecnomecanicaUrl: string | null
    activo: boolean
    createdAt: Date
    _count: VehiculoCountAggregateOutputType | null
    _avg: VehiculoAvgAggregateOutputType | null
    _sum: VehiculoSumAggregateOutputType | null
    _min: VehiculoMinAggregateOutputType | null
    _max: VehiculoMaxAggregateOutputType | null
  }

  type GetVehiculoGroupByPayload<T extends VehiculoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VehiculoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VehiculoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VehiculoGroupByOutputType[P]>
            : GetScalarType<T[P], VehiculoGroupByOutputType[P]>
        }
      >
    >


  export type VehiculoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    placa?: boolean
    marca?: boolean
    modelo?: boolean
    tieneGpsFisico?: boolean
    polizaUrl?: boolean
    soatUrl?: boolean
    tecnomecanicaUrl?: boolean
    activo?: boolean
    createdAt?: boolean
    preoperacionales?: boolean | Vehiculo$preoperacionalesArgs<ExtArgs>
    solicitudes?: boolean | Vehiculo$solicitudesArgs<ExtArgs>
    viajes?: boolean | Vehiculo$viajesArgs<ExtArgs>
    _count?: boolean | VehiculoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehiculo"]>

  export type VehiculoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    placa?: boolean
    marca?: boolean
    modelo?: boolean
    tieneGpsFisico?: boolean
    polizaUrl?: boolean
    soatUrl?: boolean
    tecnomecanicaUrl?: boolean
    activo?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["vehiculo"]>

  export type VehiculoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    placa?: boolean
    marca?: boolean
    modelo?: boolean
    tieneGpsFisico?: boolean
    polizaUrl?: boolean
    soatUrl?: boolean
    tecnomecanicaUrl?: boolean
    activo?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["vehiculo"]>

  export type VehiculoSelectScalar = {
    id?: boolean
    placa?: boolean
    marca?: boolean
    modelo?: boolean
    tieneGpsFisico?: boolean
    polizaUrl?: boolean
    soatUrl?: boolean
    tecnomecanicaUrl?: boolean
    activo?: boolean
    createdAt?: boolean
  }

  export type VehiculoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "placa" | "marca" | "modelo" | "tieneGpsFisico" | "polizaUrl" | "soatUrl" | "tecnomecanicaUrl" | "activo" | "createdAt", ExtArgs["result"]["vehiculo"]>
  export type VehiculoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    preoperacionales?: boolean | Vehiculo$preoperacionalesArgs<ExtArgs>
    solicitudes?: boolean | Vehiculo$solicitudesArgs<ExtArgs>
    viajes?: boolean | Vehiculo$viajesArgs<ExtArgs>
    _count?: boolean | VehiculoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VehiculoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type VehiculoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $VehiculoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vehiculo"
    objects: {
      preoperacionales: Prisma.$PreoperacionalPayload<ExtArgs>[]
      solicitudes: Prisma.$SolicitudPayload<ExtArgs>[]
      viajes: Prisma.$ViajePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      placa: string
      marca: string | null
      modelo: string | null
      tieneGpsFisico: boolean
      polizaUrl: string | null
      soatUrl: string | null
      tecnomecanicaUrl: string | null
      activo: boolean
      createdAt: Date
    }, ExtArgs["result"]["vehiculo"]>
    composites: {}
  }

  type VehiculoGetPayload<S extends boolean | null | undefined | VehiculoDefaultArgs> = $Result.GetResult<Prisma.$VehiculoPayload, S>

  type VehiculoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VehiculoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VehiculoCountAggregateInputType | true
    }

  export interface VehiculoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vehiculo'], meta: { name: 'Vehiculo' } }
    /**
     * Find zero or one Vehiculo that matches the filter.
     * @param {VehiculoFindUniqueArgs} args - Arguments to find a Vehiculo
     * @example
     * // Get one Vehiculo
     * const vehiculo = await prisma.vehiculo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VehiculoFindUniqueArgs>(args: SelectSubset<T, VehiculoFindUniqueArgs<ExtArgs>>): Prisma__VehiculoClient<$Result.GetResult<Prisma.$VehiculoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vehiculo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VehiculoFindUniqueOrThrowArgs} args - Arguments to find a Vehiculo
     * @example
     * // Get one Vehiculo
     * const vehiculo = await prisma.vehiculo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VehiculoFindUniqueOrThrowArgs>(args: SelectSubset<T, VehiculoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VehiculoClient<$Result.GetResult<Prisma.$VehiculoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vehiculo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehiculoFindFirstArgs} args - Arguments to find a Vehiculo
     * @example
     * // Get one Vehiculo
     * const vehiculo = await prisma.vehiculo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VehiculoFindFirstArgs>(args?: SelectSubset<T, VehiculoFindFirstArgs<ExtArgs>>): Prisma__VehiculoClient<$Result.GetResult<Prisma.$VehiculoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vehiculo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehiculoFindFirstOrThrowArgs} args - Arguments to find a Vehiculo
     * @example
     * // Get one Vehiculo
     * const vehiculo = await prisma.vehiculo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VehiculoFindFirstOrThrowArgs>(args?: SelectSubset<T, VehiculoFindFirstOrThrowArgs<ExtArgs>>): Prisma__VehiculoClient<$Result.GetResult<Prisma.$VehiculoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vehiculos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehiculoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vehiculos
     * const vehiculos = await prisma.vehiculo.findMany()
     * 
     * // Get first 10 Vehiculos
     * const vehiculos = await prisma.vehiculo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vehiculoWithIdOnly = await prisma.vehiculo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VehiculoFindManyArgs>(args?: SelectSubset<T, VehiculoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiculoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vehiculo.
     * @param {VehiculoCreateArgs} args - Arguments to create a Vehiculo.
     * @example
     * // Create one Vehiculo
     * const Vehiculo = await prisma.vehiculo.create({
     *   data: {
     *     // ... data to create a Vehiculo
     *   }
     * })
     * 
     */
    create<T extends VehiculoCreateArgs>(args: SelectSubset<T, VehiculoCreateArgs<ExtArgs>>): Prisma__VehiculoClient<$Result.GetResult<Prisma.$VehiculoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vehiculos.
     * @param {VehiculoCreateManyArgs} args - Arguments to create many Vehiculos.
     * @example
     * // Create many Vehiculos
     * const vehiculo = await prisma.vehiculo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VehiculoCreateManyArgs>(args?: SelectSubset<T, VehiculoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Vehiculos and returns the data saved in the database.
     * @param {VehiculoCreateManyAndReturnArgs} args - Arguments to create many Vehiculos.
     * @example
     * // Create many Vehiculos
     * const vehiculo = await prisma.vehiculo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Vehiculos and only return the `id`
     * const vehiculoWithIdOnly = await prisma.vehiculo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VehiculoCreateManyAndReturnArgs>(args?: SelectSubset<T, VehiculoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiculoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Vehiculo.
     * @param {VehiculoDeleteArgs} args - Arguments to delete one Vehiculo.
     * @example
     * // Delete one Vehiculo
     * const Vehiculo = await prisma.vehiculo.delete({
     *   where: {
     *     // ... filter to delete one Vehiculo
     *   }
     * })
     * 
     */
    delete<T extends VehiculoDeleteArgs>(args: SelectSubset<T, VehiculoDeleteArgs<ExtArgs>>): Prisma__VehiculoClient<$Result.GetResult<Prisma.$VehiculoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vehiculo.
     * @param {VehiculoUpdateArgs} args - Arguments to update one Vehiculo.
     * @example
     * // Update one Vehiculo
     * const vehiculo = await prisma.vehiculo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VehiculoUpdateArgs>(args: SelectSubset<T, VehiculoUpdateArgs<ExtArgs>>): Prisma__VehiculoClient<$Result.GetResult<Prisma.$VehiculoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vehiculos.
     * @param {VehiculoDeleteManyArgs} args - Arguments to filter Vehiculos to delete.
     * @example
     * // Delete a few Vehiculos
     * const { count } = await prisma.vehiculo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VehiculoDeleteManyArgs>(args?: SelectSubset<T, VehiculoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vehiculos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehiculoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vehiculos
     * const vehiculo = await prisma.vehiculo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VehiculoUpdateManyArgs>(args: SelectSubset<T, VehiculoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vehiculos and returns the data updated in the database.
     * @param {VehiculoUpdateManyAndReturnArgs} args - Arguments to update many Vehiculos.
     * @example
     * // Update many Vehiculos
     * const vehiculo = await prisma.vehiculo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Vehiculos and only return the `id`
     * const vehiculoWithIdOnly = await prisma.vehiculo.updateManyAndReturn({
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
    updateManyAndReturn<T extends VehiculoUpdateManyAndReturnArgs>(args: SelectSubset<T, VehiculoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiculoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Vehiculo.
     * @param {VehiculoUpsertArgs} args - Arguments to update or create a Vehiculo.
     * @example
     * // Update or create a Vehiculo
     * const vehiculo = await prisma.vehiculo.upsert({
     *   create: {
     *     // ... data to create a Vehiculo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vehiculo we want to update
     *   }
     * })
     */
    upsert<T extends VehiculoUpsertArgs>(args: SelectSubset<T, VehiculoUpsertArgs<ExtArgs>>): Prisma__VehiculoClient<$Result.GetResult<Prisma.$VehiculoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vehiculos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehiculoCountArgs} args - Arguments to filter Vehiculos to count.
     * @example
     * // Count the number of Vehiculos
     * const count = await prisma.vehiculo.count({
     *   where: {
     *     // ... the filter for the Vehiculos we want to count
     *   }
     * })
    **/
    count<T extends VehiculoCountArgs>(
      args?: Subset<T, VehiculoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VehiculoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vehiculo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehiculoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VehiculoAggregateArgs>(args: Subset<T, VehiculoAggregateArgs>): Prisma.PrismaPromise<GetVehiculoAggregateType<T>>

    /**
     * Group by Vehiculo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehiculoGroupByArgs} args - Group by arguments.
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
      T extends VehiculoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VehiculoGroupByArgs['orderBy'] }
        : { orderBy?: VehiculoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VehiculoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVehiculoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vehiculo model
   */
  readonly fields: VehiculoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vehiculo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VehiculoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    preoperacionales<T extends Vehiculo$preoperacionalesArgs<ExtArgs> = {}>(args?: Subset<T, Vehiculo$preoperacionalesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PreoperacionalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    solicitudes<T extends Vehiculo$solicitudesArgs<ExtArgs> = {}>(args?: Subset<T, Vehiculo$solicitudesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SolicitudPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    viajes<T extends Vehiculo$viajesArgs<ExtArgs> = {}>(args?: Subset<T, Vehiculo$viajesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViajePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Vehiculo model
   */
  interface VehiculoFieldRefs {
    readonly id: FieldRef<"Vehiculo", 'Int'>
    readonly placa: FieldRef<"Vehiculo", 'String'>
    readonly marca: FieldRef<"Vehiculo", 'String'>
    readonly modelo: FieldRef<"Vehiculo", 'String'>
    readonly tieneGpsFisico: FieldRef<"Vehiculo", 'Boolean'>
    readonly polizaUrl: FieldRef<"Vehiculo", 'String'>
    readonly soatUrl: FieldRef<"Vehiculo", 'String'>
    readonly tecnomecanicaUrl: FieldRef<"Vehiculo", 'String'>
    readonly activo: FieldRef<"Vehiculo", 'Boolean'>
    readonly createdAt: FieldRef<"Vehiculo", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Vehiculo findUnique
   */
  export type VehiculoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehiculo
     */
    select?: VehiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehiculo
     */
    omit?: VehiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculoInclude<ExtArgs> | null
    /**
     * Filter, which Vehiculo to fetch.
     */
    where: VehiculoWhereUniqueInput
  }

  /**
   * Vehiculo findUniqueOrThrow
   */
  export type VehiculoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehiculo
     */
    select?: VehiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehiculo
     */
    omit?: VehiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculoInclude<ExtArgs> | null
    /**
     * Filter, which Vehiculo to fetch.
     */
    where: VehiculoWhereUniqueInput
  }

  /**
   * Vehiculo findFirst
   */
  export type VehiculoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehiculo
     */
    select?: VehiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehiculo
     */
    omit?: VehiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculoInclude<ExtArgs> | null
    /**
     * Filter, which Vehiculo to fetch.
     */
    where?: VehiculoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehiculos to fetch.
     */
    orderBy?: VehiculoOrderByWithRelationInput | VehiculoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vehiculos.
     */
    cursor?: VehiculoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehiculos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehiculos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehiculos.
     */
    distinct?: VehiculoScalarFieldEnum | VehiculoScalarFieldEnum[]
  }

  /**
   * Vehiculo findFirstOrThrow
   */
  export type VehiculoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehiculo
     */
    select?: VehiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehiculo
     */
    omit?: VehiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculoInclude<ExtArgs> | null
    /**
     * Filter, which Vehiculo to fetch.
     */
    where?: VehiculoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehiculos to fetch.
     */
    orderBy?: VehiculoOrderByWithRelationInput | VehiculoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vehiculos.
     */
    cursor?: VehiculoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehiculos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehiculos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehiculos.
     */
    distinct?: VehiculoScalarFieldEnum | VehiculoScalarFieldEnum[]
  }

  /**
   * Vehiculo findMany
   */
  export type VehiculoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehiculo
     */
    select?: VehiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehiculo
     */
    omit?: VehiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculoInclude<ExtArgs> | null
    /**
     * Filter, which Vehiculos to fetch.
     */
    where?: VehiculoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehiculos to fetch.
     */
    orderBy?: VehiculoOrderByWithRelationInput | VehiculoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vehiculos.
     */
    cursor?: VehiculoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehiculos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehiculos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehiculos.
     */
    distinct?: VehiculoScalarFieldEnum | VehiculoScalarFieldEnum[]
  }

  /**
   * Vehiculo create
   */
  export type VehiculoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehiculo
     */
    select?: VehiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehiculo
     */
    omit?: VehiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculoInclude<ExtArgs> | null
    /**
     * The data needed to create a Vehiculo.
     */
    data: XOR<VehiculoCreateInput, VehiculoUncheckedCreateInput>
  }

  /**
   * Vehiculo createMany
   */
  export type VehiculoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vehiculos.
     */
    data: VehiculoCreateManyInput | VehiculoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vehiculo createManyAndReturn
   */
  export type VehiculoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehiculo
     */
    select?: VehiculoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vehiculo
     */
    omit?: VehiculoOmit<ExtArgs> | null
    /**
     * The data used to create many Vehiculos.
     */
    data: VehiculoCreateManyInput | VehiculoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vehiculo update
   */
  export type VehiculoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehiculo
     */
    select?: VehiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehiculo
     */
    omit?: VehiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculoInclude<ExtArgs> | null
    /**
     * The data needed to update a Vehiculo.
     */
    data: XOR<VehiculoUpdateInput, VehiculoUncheckedUpdateInput>
    /**
     * Choose, which Vehiculo to update.
     */
    where: VehiculoWhereUniqueInput
  }

  /**
   * Vehiculo updateMany
   */
  export type VehiculoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vehiculos.
     */
    data: XOR<VehiculoUpdateManyMutationInput, VehiculoUncheckedUpdateManyInput>
    /**
     * Filter which Vehiculos to update
     */
    where?: VehiculoWhereInput
    /**
     * Limit how many Vehiculos to update.
     */
    limit?: number
  }

  /**
   * Vehiculo updateManyAndReturn
   */
  export type VehiculoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehiculo
     */
    select?: VehiculoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vehiculo
     */
    omit?: VehiculoOmit<ExtArgs> | null
    /**
     * The data used to update Vehiculos.
     */
    data: XOR<VehiculoUpdateManyMutationInput, VehiculoUncheckedUpdateManyInput>
    /**
     * Filter which Vehiculos to update
     */
    where?: VehiculoWhereInput
    /**
     * Limit how many Vehiculos to update.
     */
    limit?: number
  }

  /**
   * Vehiculo upsert
   */
  export type VehiculoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehiculo
     */
    select?: VehiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehiculo
     */
    omit?: VehiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculoInclude<ExtArgs> | null
    /**
     * The filter to search for the Vehiculo to update in case it exists.
     */
    where: VehiculoWhereUniqueInput
    /**
     * In case the Vehiculo found by the `where` argument doesn't exist, create a new Vehiculo with this data.
     */
    create: XOR<VehiculoCreateInput, VehiculoUncheckedCreateInput>
    /**
     * In case the Vehiculo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VehiculoUpdateInput, VehiculoUncheckedUpdateInput>
  }

  /**
   * Vehiculo delete
   */
  export type VehiculoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehiculo
     */
    select?: VehiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehiculo
     */
    omit?: VehiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculoInclude<ExtArgs> | null
    /**
     * Filter which Vehiculo to delete.
     */
    where: VehiculoWhereUniqueInput
  }

  /**
   * Vehiculo deleteMany
   */
  export type VehiculoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vehiculos to delete
     */
    where?: VehiculoWhereInput
    /**
     * Limit how many Vehiculos to delete.
     */
    limit?: number
  }

  /**
   * Vehiculo.preoperacionales
   */
  export type Vehiculo$preoperacionalesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preoperacional
     */
    select?: PreoperacionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preoperacional
     */
    omit?: PreoperacionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreoperacionalInclude<ExtArgs> | null
    where?: PreoperacionalWhereInput
    orderBy?: PreoperacionalOrderByWithRelationInput | PreoperacionalOrderByWithRelationInput[]
    cursor?: PreoperacionalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PreoperacionalScalarFieldEnum | PreoperacionalScalarFieldEnum[]
  }

  /**
   * Vehiculo.solicitudes
   */
  export type Vehiculo$solicitudesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solicitud
     */
    select?: SolicitudSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solicitud
     */
    omit?: SolicitudOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolicitudInclude<ExtArgs> | null
    where?: SolicitudWhereInput
    orderBy?: SolicitudOrderByWithRelationInput | SolicitudOrderByWithRelationInput[]
    cursor?: SolicitudWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SolicitudScalarFieldEnum | SolicitudScalarFieldEnum[]
  }

  /**
   * Vehiculo.viajes
   */
  export type Vehiculo$viajesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Viaje
     */
    select?: ViajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Viaje
     */
    omit?: ViajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViajeInclude<ExtArgs> | null
    where?: ViajeWhereInput
    orderBy?: ViajeOrderByWithRelationInput | ViajeOrderByWithRelationInput[]
    cursor?: ViajeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ViajeScalarFieldEnum | ViajeScalarFieldEnum[]
  }

  /**
   * Vehiculo without action
   */
  export type VehiculoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehiculo
     */
    select?: VehiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehiculo
     */
    omit?: VehiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculoInclude<ExtArgs> | null
  }


  /**
   * Model Preoperacional
   */

  export type AggregatePreoperacional = {
    _count: PreoperacionalCountAggregateOutputType | null
    _avg: PreoperacionalAvgAggregateOutputType | null
    _sum: PreoperacionalSumAggregateOutputType | null
    _min: PreoperacionalMinAggregateOutputType | null
    _max: PreoperacionalMaxAggregateOutputType | null
  }

  export type PreoperacionalAvgAggregateOutputType = {
    id: number | null
    consecutivo: number | null
    usuarioId: number | null
    vehiculoId: number | null
    solicitudId: number | null
  }

  export type PreoperacionalSumAggregateOutputType = {
    id: number | null
    consecutivo: number | null
    usuarioId: number | null
    vehiculoId: number | null
    solicitudId: number | null
  }

  export type PreoperacionalMinAggregateOutputType = {
    id: number | null
    consecutivo: number | null
    fecha: Date | null
    firmaUrl: string | null
    observaciones: string | null
    usuarioId: number | null
    vehiculoId: number | null
    createdAt: Date | null
    solicitudId: number | null
  }

  export type PreoperacionalMaxAggregateOutputType = {
    id: number | null
    consecutivo: number | null
    fecha: Date | null
    firmaUrl: string | null
    observaciones: string | null
    usuarioId: number | null
    vehiculoId: number | null
    createdAt: Date | null
    solicitudId: number | null
  }

  export type PreoperacionalCountAggregateOutputType = {
    id: number
    consecutivo: number
    fecha: number
    respuestas: number
    firmaUrl: number
    observaciones: number
    usuarioId: number
    vehiculoId: number
    createdAt: number
    solicitudId: number
    _all: number
  }


  export type PreoperacionalAvgAggregateInputType = {
    id?: true
    consecutivo?: true
    usuarioId?: true
    vehiculoId?: true
    solicitudId?: true
  }

  export type PreoperacionalSumAggregateInputType = {
    id?: true
    consecutivo?: true
    usuarioId?: true
    vehiculoId?: true
    solicitudId?: true
  }

  export type PreoperacionalMinAggregateInputType = {
    id?: true
    consecutivo?: true
    fecha?: true
    firmaUrl?: true
    observaciones?: true
    usuarioId?: true
    vehiculoId?: true
    createdAt?: true
    solicitudId?: true
  }

  export type PreoperacionalMaxAggregateInputType = {
    id?: true
    consecutivo?: true
    fecha?: true
    firmaUrl?: true
    observaciones?: true
    usuarioId?: true
    vehiculoId?: true
    createdAt?: true
    solicitudId?: true
  }

  export type PreoperacionalCountAggregateInputType = {
    id?: true
    consecutivo?: true
    fecha?: true
    respuestas?: true
    firmaUrl?: true
    observaciones?: true
    usuarioId?: true
    vehiculoId?: true
    createdAt?: true
    solicitudId?: true
    _all?: true
  }

  export type PreoperacionalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Preoperacional to aggregate.
     */
    where?: PreoperacionalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Preoperacionals to fetch.
     */
    orderBy?: PreoperacionalOrderByWithRelationInput | PreoperacionalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PreoperacionalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Preoperacionals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Preoperacionals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Preoperacionals
    **/
    _count?: true | PreoperacionalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PreoperacionalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PreoperacionalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PreoperacionalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PreoperacionalMaxAggregateInputType
  }

  export type GetPreoperacionalAggregateType<T extends PreoperacionalAggregateArgs> = {
        [P in keyof T & keyof AggregatePreoperacional]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePreoperacional[P]>
      : GetScalarType<T[P], AggregatePreoperacional[P]>
  }




  export type PreoperacionalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PreoperacionalWhereInput
    orderBy?: PreoperacionalOrderByWithAggregationInput | PreoperacionalOrderByWithAggregationInput[]
    by: PreoperacionalScalarFieldEnum[] | PreoperacionalScalarFieldEnum
    having?: PreoperacionalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PreoperacionalCountAggregateInputType | true
    _avg?: PreoperacionalAvgAggregateInputType
    _sum?: PreoperacionalSumAggregateInputType
    _min?: PreoperacionalMinAggregateInputType
    _max?: PreoperacionalMaxAggregateInputType
  }

  export type PreoperacionalGroupByOutputType = {
    id: number
    consecutivo: number
    fecha: Date
    respuestas: JsonValue
    firmaUrl: string | null
    observaciones: string | null
    usuarioId: number
    vehiculoId: number
    createdAt: Date
    solicitudId: number | null
    _count: PreoperacionalCountAggregateOutputType | null
    _avg: PreoperacionalAvgAggregateOutputType | null
    _sum: PreoperacionalSumAggregateOutputType | null
    _min: PreoperacionalMinAggregateOutputType | null
    _max: PreoperacionalMaxAggregateOutputType | null
  }

  type GetPreoperacionalGroupByPayload<T extends PreoperacionalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PreoperacionalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PreoperacionalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PreoperacionalGroupByOutputType[P]>
            : GetScalarType<T[P], PreoperacionalGroupByOutputType[P]>
        }
      >
    >


  export type PreoperacionalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    consecutivo?: boolean
    fecha?: boolean
    respuestas?: boolean
    firmaUrl?: boolean
    observaciones?: boolean
    usuarioId?: boolean
    vehiculoId?: boolean
    createdAt?: boolean
    solicitudId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    vehiculo?: boolean | VehiculoDefaultArgs<ExtArgs>
    solicitud?: boolean | Preoperacional$solicitudArgs<ExtArgs>
    viajes?: boolean | Preoperacional$viajesArgs<ExtArgs>
    _count?: boolean | PreoperacionalCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["preoperacional"]>

  export type PreoperacionalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    consecutivo?: boolean
    fecha?: boolean
    respuestas?: boolean
    firmaUrl?: boolean
    observaciones?: boolean
    usuarioId?: boolean
    vehiculoId?: boolean
    createdAt?: boolean
    solicitudId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    vehiculo?: boolean | VehiculoDefaultArgs<ExtArgs>
    solicitud?: boolean | Preoperacional$solicitudArgs<ExtArgs>
  }, ExtArgs["result"]["preoperacional"]>

  export type PreoperacionalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    consecutivo?: boolean
    fecha?: boolean
    respuestas?: boolean
    firmaUrl?: boolean
    observaciones?: boolean
    usuarioId?: boolean
    vehiculoId?: boolean
    createdAt?: boolean
    solicitudId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    vehiculo?: boolean | VehiculoDefaultArgs<ExtArgs>
    solicitud?: boolean | Preoperacional$solicitudArgs<ExtArgs>
  }, ExtArgs["result"]["preoperacional"]>

  export type PreoperacionalSelectScalar = {
    id?: boolean
    consecutivo?: boolean
    fecha?: boolean
    respuestas?: boolean
    firmaUrl?: boolean
    observaciones?: boolean
    usuarioId?: boolean
    vehiculoId?: boolean
    createdAt?: boolean
    solicitudId?: boolean
  }

  export type PreoperacionalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "consecutivo" | "fecha" | "respuestas" | "firmaUrl" | "observaciones" | "usuarioId" | "vehiculoId" | "createdAt" | "solicitudId", ExtArgs["result"]["preoperacional"]>
  export type PreoperacionalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    vehiculo?: boolean | VehiculoDefaultArgs<ExtArgs>
    solicitud?: boolean | Preoperacional$solicitudArgs<ExtArgs>
    viajes?: boolean | Preoperacional$viajesArgs<ExtArgs>
    _count?: boolean | PreoperacionalCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PreoperacionalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    vehiculo?: boolean | VehiculoDefaultArgs<ExtArgs>
    solicitud?: boolean | Preoperacional$solicitudArgs<ExtArgs>
  }
  export type PreoperacionalIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    vehiculo?: boolean | VehiculoDefaultArgs<ExtArgs>
    solicitud?: boolean | Preoperacional$solicitudArgs<ExtArgs>
  }

  export type $PreoperacionalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Preoperacional"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      vehiculo: Prisma.$VehiculoPayload<ExtArgs>
      solicitud: Prisma.$SolicitudPayload<ExtArgs> | null
      viajes: Prisma.$ViajePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      consecutivo: number
      fecha: Date
      respuestas: Prisma.JsonValue
      firmaUrl: string | null
      observaciones: string | null
      usuarioId: number
      vehiculoId: number
      createdAt: Date
      solicitudId: number | null
    }, ExtArgs["result"]["preoperacional"]>
    composites: {}
  }

  type PreoperacionalGetPayload<S extends boolean | null | undefined | PreoperacionalDefaultArgs> = $Result.GetResult<Prisma.$PreoperacionalPayload, S>

  type PreoperacionalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PreoperacionalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PreoperacionalCountAggregateInputType | true
    }

  export interface PreoperacionalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Preoperacional'], meta: { name: 'Preoperacional' } }
    /**
     * Find zero or one Preoperacional that matches the filter.
     * @param {PreoperacionalFindUniqueArgs} args - Arguments to find a Preoperacional
     * @example
     * // Get one Preoperacional
     * const preoperacional = await prisma.preoperacional.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PreoperacionalFindUniqueArgs>(args: SelectSubset<T, PreoperacionalFindUniqueArgs<ExtArgs>>): Prisma__PreoperacionalClient<$Result.GetResult<Prisma.$PreoperacionalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Preoperacional that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PreoperacionalFindUniqueOrThrowArgs} args - Arguments to find a Preoperacional
     * @example
     * // Get one Preoperacional
     * const preoperacional = await prisma.preoperacional.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PreoperacionalFindUniqueOrThrowArgs>(args: SelectSubset<T, PreoperacionalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PreoperacionalClient<$Result.GetResult<Prisma.$PreoperacionalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Preoperacional that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreoperacionalFindFirstArgs} args - Arguments to find a Preoperacional
     * @example
     * // Get one Preoperacional
     * const preoperacional = await prisma.preoperacional.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PreoperacionalFindFirstArgs>(args?: SelectSubset<T, PreoperacionalFindFirstArgs<ExtArgs>>): Prisma__PreoperacionalClient<$Result.GetResult<Prisma.$PreoperacionalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Preoperacional that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreoperacionalFindFirstOrThrowArgs} args - Arguments to find a Preoperacional
     * @example
     * // Get one Preoperacional
     * const preoperacional = await prisma.preoperacional.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PreoperacionalFindFirstOrThrowArgs>(args?: SelectSubset<T, PreoperacionalFindFirstOrThrowArgs<ExtArgs>>): Prisma__PreoperacionalClient<$Result.GetResult<Prisma.$PreoperacionalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Preoperacionals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreoperacionalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Preoperacionals
     * const preoperacionals = await prisma.preoperacional.findMany()
     * 
     * // Get first 10 Preoperacionals
     * const preoperacionals = await prisma.preoperacional.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const preoperacionalWithIdOnly = await prisma.preoperacional.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PreoperacionalFindManyArgs>(args?: SelectSubset<T, PreoperacionalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PreoperacionalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Preoperacional.
     * @param {PreoperacionalCreateArgs} args - Arguments to create a Preoperacional.
     * @example
     * // Create one Preoperacional
     * const Preoperacional = await prisma.preoperacional.create({
     *   data: {
     *     // ... data to create a Preoperacional
     *   }
     * })
     * 
     */
    create<T extends PreoperacionalCreateArgs>(args: SelectSubset<T, PreoperacionalCreateArgs<ExtArgs>>): Prisma__PreoperacionalClient<$Result.GetResult<Prisma.$PreoperacionalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Preoperacionals.
     * @param {PreoperacionalCreateManyArgs} args - Arguments to create many Preoperacionals.
     * @example
     * // Create many Preoperacionals
     * const preoperacional = await prisma.preoperacional.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PreoperacionalCreateManyArgs>(args?: SelectSubset<T, PreoperacionalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Preoperacionals and returns the data saved in the database.
     * @param {PreoperacionalCreateManyAndReturnArgs} args - Arguments to create many Preoperacionals.
     * @example
     * // Create many Preoperacionals
     * const preoperacional = await prisma.preoperacional.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Preoperacionals and only return the `id`
     * const preoperacionalWithIdOnly = await prisma.preoperacional.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PreoperacionalCreateManyAndReturnArgs>(args?: SelectSubset<T, PreoperacionalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PreoperacionalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Preoperacional.
     * @param {PreoperacionalDeleteArgs} args - Arguments to delete one Preoperacional.
     * @example
     * // Delete one Preoperacional
     * const Preoperacional = await prisma.preoperacional.delete({
     *   where: {
     *     // ... filter to delete one Preoperacional
     *   }
     * })
     * 
     */
    delete<T extends PreoperacionalDeleteArgs>(args: SelectSubset<T, PreoperacionalDeleteArgs<ExtArgs>>): Prisma__PreoperacionalClient<$Result.GetResult<Prisma.$PreoperacionalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Preoperacional.
     * @param {PreoperacionalUpdateArgs} args - Arguments to update one Preoperacional.
     * @example
     * // Update one Preoperacional
     * const preoperacional = await prisma.preoperacional.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PreoperacionalUpdateArgs>(args: SelectSubset<T, PreoperacionalUpdateArgs<ExtArgs>>): Prisma__PreoperacionalClient<$Result.GetResult<Prisma.$PreoperacionalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Preoperacionals.
     * @param {PreoperacionalDeleteManyArgs} args - Arguments to filter Preoperacionals to delete.
     * @example
     * // Delete a few Preoperacionals
     * const { count } = await prisma.preoperacional.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PreoperacionalDeleteManyArgs>(args?: SelectSubset<T, PreoperacionalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Preoperacionals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreoperacionalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Preoperacionals
     * const preoperacional = await prisma.preoperacional.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PreoperacionalUpdateManyArgs>(args: SelectSubset<T, PreoperacionalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Preoperacionals and returns the data updated in the database.
     * @param {PreoperacionalUpdateManyAndReturnArgs} args - Arguments to update many Preoperacionals.
     * @example
     * // Update many Preoperacionals
     * const preoperacional = await prisma.preoperacional.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Preoperacionals and only return the `id`
     * const preoperacionalWithIdOnly = await prisma.preoperacional.updateManyAndReturn({
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
    updateManyAndReturn<T extends PreoperacionalUpdateManyAndReturnArgs>(args: SelectSubset<T, PreoperacionalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PreoperacionalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Preoperacional.
     * @param {PreoperacionalUpsertArgs} args - Arguments to update or create a Preoperacional.
     * @example
     * // Update or create a Preoperacional
     * const preoperacional = await prisma.preoperacional.upsert({
     *   create: {
     *     // ... data to create a Preoperacional
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Preoperacional we want to update
     *   }
     * })
     */
    upsert<T extends PreoperacionalUpsertArgs>(args: SelectSubset<T, PreoperacionalUpsertArgs<ExtArgs>>): Prisma__PreoperacionalClient<$Result.GetResult<Prisma.$PreoperacionalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Preoperacionals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreoperacionalCountArgs} args - Arguments to filter Preoperacionals to count.
     * @example
     * // Count the number of Preoperacionals
     * const count = await prisma.preoperacional.count({
     *   where: {
     *     // ... the filter for the Preoperacionals we want to count
     *   }
     * })
    **/
    count<T extends PreoperacionalCountArgs>(
      args?: Subset<T, PreoperacionalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PreoperacionalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Preoperacional.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreoperacionalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PreoperacionalAggregateArgs>(args: Subset<T, PreoperacionalAggregateArgs>): Prisma.PrismaPromise<GetPreoperacionalAggregateType<T>>

    /**
     * Group by Preoperacional.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreoperacionalGroupByArgs} args - Group by arguments.
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
      T extends PreoperacionalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PreoperacionalGroupByArgs['orderBy'] }
        : { orderBy?: PreoperacionalGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PreoperacionalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPreoperacionalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Preoperacional model
   */
  readonly fields: PreoperacionalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Preoperacional.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PreoperacionalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    vehiculo<T extends VehiculoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VehiculoDefaultArgs<ExtArgs>>): Prisma__VehiculoClient<$Result.GetResult<Prisma.$VehiculoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    solicitud<T extends Preoperacional$solicitudArgs<ExtArgs> = {}>(args?: Subset<T, Preoperacional$solicitudArgs<ExtArgs>>): Prisma__SolicitudClient<$Result.GetResult<Prisma.$SolicitudPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    viajes<T extends Preoperacional$viajesArgs<ExtArgs> = {}>(args?: Subset<T, Preoperacional$viajesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViajePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Preoperacional model
   */
  interface PreoperacionalFieldRefs {
    readonly id: FieldRef<"Preoperacional", 'Int'>
    readonly consecutivo: FieldRef<"Preoperacional", 'Int'>
    readonly fecha: FieldRef<"Preoperacional", 'DateTime'>
    readonly respuestas: FieldRef<"Preoperacional", 'Json'>
    readonly firmaUrl: FieldRef<"Preoperacional", 'String'>
    readonly observaciones: FieldRef<"Preoperacional", 'String'>
    readonly usuarioId: FieldRef<"Preoperacional", 'Int'>
    readonly vehiculoId: FieldRef<"Preoperacional", 'Int'>
    readonly createdAt: FieldRef<"Preoperacional", 'DateTime'>
    readonly solicitudId: FieldRef<"Preoperacional", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Preoperacional findUnique
   */
  export type PreoperacionalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preoperacional
     */
    select?: PreoperacionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preoperacional
     */
    omit?: PreoperacionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreoperacionalInclude<ExtArgs> | null
    /**
     * Filter, which Preoperacional to fetch.
     */
    where: PreoperacionalWhereUniqueInput
  }

  /**
   * Preoperacional findUniqueOrThrow
   */
  export type PreoperacionalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preoperacional
     */
    select?: PreoperacionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preoperacional
     */
    omit?: PreoperacionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreoperacionalInclude<ExtArgs> | null
    /**
     * Filter, which Preoperacional to fetch.
     */
    where: PreoperacionalWhereUniqueInput
  }

  /**
   * Preoperacional findFirst
   */
  export type PreoperacionalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preoperacional
     */
    select?: PreoperacionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preoperacional
     */
    omit?: PreoperacionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreoperacionalInclude<ExtArgs> | null
    /**
     * Filter, which Preoperacional to fetch.
     */
    where?: PreoperacionalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Preoperacionals to fetch.
     */
    orderBy?: PreoperacionalOrderByWithRelationInput | PreoperacionalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Preoperacionals.
     */
    cursor?: PreoperacionalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Preoperacionals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Preoperacionals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Preoperacionals.
     */
    distinct?: PreoperacionalScalarFieldEnum | PreoperacionalScalarFieldEnum[]
  }

  /**
   * Preoperacional findFirstOrThrow
   */
  export type PreoperacionalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preoperacional
     */
    select?: PreoperacionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preoperacional
     */
    omit?: PreoperacionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreoperacionalInclude<ExtArgs> | null
    /**
     * Filter, which Preoperacional to fetch.
     */
    where?: PreoperacionalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Preoperacionals to fetch.
     */
    orderBy?: PreoperacionalOrderByWithRelationInput | PreoperacionalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Preoperacionals.
     */
    cursor?: PreoperacionalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Preoperacionals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Preoperacionals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Preoperacionals.
     */
    distinct?: PreoperacionalScalarFieldEnum | PreoperacionalScalarFieldEnum[]
  }

  /**
   * Preoperacional findMany
   */
  export type PreoperacionalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preoperacional
     */
    select?: PreoperacionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preoperacional
     */
    omit?: PreoperacionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreoperacionalInclude<ExtArgs> | null
    /**
     * Filter, which Preoperacionals to fetch.
     */
    where?: PreoperacionalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Preoperacionals to fetch.
     */
    orderBy?: PreoperacionalOrderByWithRelationInput | PreoperacionalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Preoperacionals.
     */
    cursor?: PreoperacionalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Preoperacionals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Preoperacionals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Preoperacionals.
     */
    distinct?: PreoperacionalScalarFieldEnum | PreoperacionalScalarFieldEnum[]
  }

  /**
   * Preoperacional create
   */
  export type PreoperacionalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preoperacional
     */
    select?: PreoperacionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preoperacional
     */
    omit?: PreoperacionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreoperacionalInclude<ExtArgs> | null
    /**
     * The data needed to create a Preoperacional.
     */
    data: XOR<PreoperacionalCreateInput, PreoperacionalUncheckedCreateInput>
  }

  /**
   * Preoperacional createMany
   */
  export type PreoperacionalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Preoperacionals.
     */
    data: PreoperacionalCreateManyInput | PreoperacionalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Preoperacional createManyAndReturn
   */
  export type PreoperacionalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preoperacional
     */
    select?: PreoperacionalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Preoperacional
     */
    omit?: PreoperacionalOmit<ExtArgs> | null
    /**
     * The data used to create many Preoperacionals.
     */
    data: PreoperacionalCreateManyInput | PreoperacionalCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreoperacionalIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Preoperacional update
   */
  export type PreoperacionalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preoperacional
     */
    select?: PreoperacionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preoperacional
     */
    omit?: PreoperacionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreoperacionalInclude<ExtArgs> | null
    /**
     * The data needed to update a Preoperacional.
     */
    data: XOR<PreoperacionalUpdateInput, PreoperacionalUncheckedUpdateInput>
    /**
     * Choose, which Preoperacional to update.
     */
    where: PreoperacionalWhereUniqueInput
  }

  /**
   * Preoperacional updateMany
   */
  export type PreoperacionalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Preoperacionals.
     */
    data: XOR<PreoperacionalUpdateManyMutationInput, PreoperacionalUncheckedUpdateManyInput>
    /**
     * Filter which Preoperacionals to update
     */
    where?: PreoperacionalWhereInput
    /**
     * Limit how many Preoperacionals to update.
     */
    limit?: number
  }

  /**
   * Preoperacional updateManyAndReturn
   */
  export type PreoperacionalUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preoperacional
     */
    select?: PreoperacionalSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Preoperacional
     */
    omit?: PreoperacionalOmit<ExtArgs> | null
    /**
     * The data used to update Preoperacionals.
     */
    data: XOR<PreoperacionalUpdateManyMutationInput, PreoperacionalUncheckedUpdateManyInput>
    /**
     * Filter which Preoperacionals to update
     */
    where?: PreoperacionalWhereInput
    /**
     * Limit how many Preoperacionals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreoperacionalIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Preoperacional upsert
   */
  export type PreoperacionalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preoperacional
     */
    select?: PreoperacionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preoperacional
     */
    omit?: PreoperacionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreoperacionalInclude<ExtArgs> | null
    /**
     * The filter to search for the Preoperacional to update in case it exists.
     */
    where: PreoperacionalWhereUniqueInput
    /**
     * In case the Preoperacional found by the `where` argument doesn't exist, create a new Preoperacional with this data.
     */
    create: XOR<PreoperacionalCreateInput, PreoperacionalUncheckedCreateInput>
    /**
     * In case the Preoperacional was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PreoperacionalUpdateInput, PreoperacionalUncheckedUpdateInput>
  }

  /**
   * Preoperacional delete
   */
  export type PreoperacionalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preoperacional
     */
    select?: PreoperacionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preoperacional
     */
    omit?: PreoperacionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreoperacionalInclude<ExtArgs> | null
    /**
     * Filter which Preoperacional to delete.
     */
    where: PreoperacionalWhereUniqueInput
  }

  /**
   * Preoperacional deleteMany
   */
  export type PreoperacionalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Preoperacionals to delete
     */
    where?: PreoperacionalWhereInput
    /**
     * Limit how many Preoperacionals to delete.
     */
    limit?: number
  }

  /**
   * Preoperacional.solicitud
   */
  export type Preoperacional$solicitudArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solicitud
     */
    select?: SolicitudSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solicitud
     */
    omit?: SolicitudOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolicitudInclude<ExtArgs> | null
    where?: SolicitudWhereInput
  }

  /**
   * Preoperacional.viajes
   */
  export type Preoperacional$viajesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Viaje
     */
    select?: ViajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Viaje
     */
    omit?: ViajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViajeInclude<ExtArgs> | null
    where?: ViajeWhereInput
    orderBy?: ViajeOrderByWithRelationInput | ViajeOrderByWithRelationInput[]
    cursor?: ViajeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ViajeScalarFieldEnum | ViajeScalarFieldEnum[]
  }

  /**
   * Preoperacional without action
   */
  export type PreoperacionalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preoperacional
     */
    select?: PreoperacionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preoperacional
     */
    omit?: PreoperacionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreoperacionalInclude<ExtArgs> | null
  }


  /**
   * Model RefreshToken
   */

  export type AggregateRefreshToken = {
    _count: RefreshTokenCountAggregateOutputType | null
    _avg: RefreshTokenAvgAggregateOutputType | null
    _sum: RefreshTokenSumAggregateOutputType | null
    _min: RefreshTokenMinAggregateOutputType | null
    _max: RefreshTokenMaxAggregateOutputType | null
  }

  export type RefreshTokenAvgAggregateOutputType = {
    id: number | null
    usuarioId: number | null
  }

  export type RefreshTokenSumAggregateOutputType = {
    id: number | null
    usuarioId: number | null
  }

  export type RefreshTokenMinAggregateOutputType = {
    id: number | null
    token: string | null
    usuarioId: number | null
    expiresAt: Date | null
    revocado: boolean | null
    createdAt: Date | null
  }

  export type RefreshTokenMaxAggregateOutputType = {
    id: number | null
    token: string | null
    usuarioId: number | null
    expiresAt: Date | null
    revocado: boolean | null
    createdAt: Date | null
  }

  export type RefreshTokenCountAggregateOutputType = {
    id: number
    token: number
    usuarioId: number
    expiresAt: number
    revocado: number
    createdAt: number
    _all: number
  }


  export type RefreshTokenAvgAggregateInputType = {
    id?: true
    usuarioId?: true
  }

  export type RefreshTokenSumAggregateInputType = {
    id?: true
    usuarioId?: true
  }

  export type RefreshTokenMinAggregateInputType = {
    id?: true
    token?: true
    usuarioId?: true
    expiresAt?: true
    revocado?: true
    createdAt?: true
  }

  export type RefreshTokenMaxAggregateInputType = {
    id?: true
    token?: true
    usuarioId?: true
    expiresAt?: true
    revocado?: true
    createdAt?: true
  }

  export type RefreshTokenCountAggregateInputType = {
    id?: true
    token?: true
    usuarioId?: true
    expiresAt?: true
    revocado?: true
    createdAt?: true
    _all?: true
  }

  export type RefreshTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RefreshToken to aggregate.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RefreshTokens
    **/
    _count?: true | RefreshTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RefreshTokenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RefreshTokenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RefreshTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RefreshTokenMaxAggregateInputType
  }

  export type GetRefreshTokenAggregateType<T extends RefreshTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateRefreshToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRefreshToken[P]>
      : GetScalarType<T[P], AggregateRefreshToken[P]>
  }




  export type RefreshTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefreshTokenWhereInput
    orderBy?: RefreshTokenOrderByWithAggregationInput | RefreshTokenOrderByWithAggregationInput[]
    by: RefreshTokenScalarFieldEnum[] | RefreshTokenScalarFieldEnum
    having?: RefreshTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RefreshTokenCountAggregateInputType | true
    _avg?: RefreshTokenAvgAggregateInputType
    _sum?: RefreshTokenSumAggregateInputType
    _min?: RefreshTokenMinAggregateInputType
    _max?: RefreshTokenMaxAggregateInputType
  }

  export type RefreshTokenGroupByOutputType = {
    id: number
    token: string
    usuarioId: number
    expiresAt: Date
    revocado: boolean
    createdAt: Date
    _count: RefreshTokenCountAggregateOutputType | null
    _avg: RefreshTokenAvgAggregateOutputType | null
    _sum: RefreshTokenSumAggregateOutputType | null
    _min: RefreshTokenMinAggregateOutputType | null
    _max: RefreshTokenMaxAggregateOutputType | null
  }

  type GetRefreshTokenGroupByPayload<T extends RefreshTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RefreshTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RefreshTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RefreshTokenGroupByOutputType[P]>
            : GetScalarType<T[P], RefreshTokenGroupByOutputType[P]>
        }
      >
    >


  export type RefreshTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    usuarioId?: boolean
    expiresAt?: boolean
    revocado?: boolean
    createdAt?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshToken"]>

  export type RefreshTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    usuarioId?: boolean
    expiresAt?: boolean
    revocado?: boolean
    createdAt?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshToken"]>

  export type RefreshTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    usuarioId?: boolean
    expiresAt?: boolean
    revocado?: boolean
    createdAt?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshToken"]>

  export type RefreshTokenSelectScalar = {
    id?: boolean
    token?: boolean
    usuarioId?: boolean
    expiresAt?: boolean
    revocado?: boolean
    createdAt?: boolean
  }

  export type RefreshTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "token" | "usuarioId" | "expiresAt" | "revocado" | "createdAt", ExtArgs["result"]["refreshToken"]>
  export type RefreshTokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type RefreshTokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type RefreshTokenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $RefreshTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RefreshToken"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      token: string
      usuarioId: number
      expiresAt: Date
      revocado: boolean
      createdAt: Date
    }, ExtArgs["result"]["refreshToken"]>
    composites: {}
  }

  type RefreshTokenGetPayload<S extends boolean | null | undefined | RefreshTokenDefaultArgs> = $Result.GetResult<Prisma.$RefreshTokenPayload, S>

  type RefreshTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RefreshTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RefreshTokenCountAggregateInputType | true
    }

  export interface RefreshTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RefreshToken'], meta: { name: 'RefreshToken' } }
    /**
     * Find zero or one RefreshToken that matches the filter.
     * @param {RefreshTokenFindUniqueArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RefreshTokenFindUniqueArgs>(args: SelectSubset<T, RefreshTokenFindUniqueArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RefreshToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RefreshTokenFindUniqueOrThrowArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RefreshTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, RefreshTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RefreshToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindFirstArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RefreshTokenFindFirstArgs>(args?: SelectSubset<T, RefreshTokenFindFirstArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RefreshToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindFirstOrThrowArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RefreshTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, RefreshTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RefreshTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RefreshTokens
     * const refreshTokens = await prisma.refreshToken.findMany()
     * 
     * // Get first 10 RefreshTokens
     * const refreshTokens = await prisma.refreshToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RefreshTokenFindManyArgs>(args?: SelectSubset<T, RefreshTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RefreshToken.
     * @param {RefreshTokenCreateArgs} args - Arguments to create a RefreshToken.
     * @example
     * // Create one RefreshToken
     * const RefreshToken = await prisma.refreshToken.create({
     *   data: {
     *     // ... data to create a RefreshToken
     *   }
     * })
     * 
     */
    create<T extends RefreshTokenCreateArgs>(args: SelectSubset<T, RefreshTokenCreateArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RefreshTokens.
     * @param {RefreshTokenCreateManyArgs} args - Arguments to create many RefreshTokens.
     * @example
     * // Create many RefreshTokens
     * const refreshToken = await prisma.refreshToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RefreshTokenCreateManyArgs>(args?: SelectSubset<T, RefreshTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RefreshTokens and returns the data saved in the database.
     * @param {RefreshTokenCreateManyAndReturnArgs} args - Arguments to create many RefreshTokens.
     * @example
     * // Create many RefreshTokens
     * const refreshToken = await prisma.refreshToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RefreshTokens and only return the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RefreshTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, RefreshTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RefreshToken.
     * @param {RefreshTokenDeleteArgs} args - Arguments to delete one RefreshToken.
     * @example
     * // Delete one RefreshToken
     * const RefreshToken = await prisma.refreshToken.delete({
     *   where: {
     *     // ... filter to delete one RefreshToken
     *   }
     * })
     * 
     */
    delete<T extends RefreshTokenDeleteArgs>(args: SelectSubset<T, RefreshTokenDeleteArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RefreshToken.
     * @param {RefreshTokenUpdateArgs} args - Arguments to update one RefreshToken.
     * @example
     * // Update one RefreshToken
     * const refreshToken = await prisma.refreshToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RefreshTokenUpdateArgs>(args: SelectSubset<T, RefreshTokenUpdateArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RefreshTokens.
     * @param {RefreshTokenDeleteManyArgs} args - Arguments to filter RefreshTokens to delete.
     * @example
     * // Delete a few RefreshTokens
     * const { count } = await prisma.refreshToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RefreshTokenDeleteManyArgs>(args?: SelectSubset<T, RefreshTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RefreshTokens
     * const refreshToken = await prisma.refreshToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RefreshTokenUpdateManyArgs>(args: SelectSubset<T, RefreshTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RefreshTokens and returns the data updated in the database.
     * @param {RefreshTokenUpdateManyAndReturnArgs} args - Arguments to update many RefreshTokens.
     * @example
     * // Update many RefreshTokens
     * const refreshToken = await prisma.refreshToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RefreshTokens and only return the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.updateManyAndReturn({
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
    updateManyAndReturn<T extends RefreshTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, RefreshTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RefreshToken.
     * @param {RefreshTokenUpsertArgs} args - Arguments to update or create a RefreshToken.
     * @example
     * // Update or create a RefreshToken
     * const refreshToken = await prisma.refreshToken.upsert({
     *   create: {
     *     // ... data to create a RefreshToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RefreshToken we want to update
     *   }
     * })
     */
    upsert<T extends RefreshTokenUpsertArgs>(args: SelectSubset<T, RefreshTokenUpsertArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenCountArgs} args - Arguments to filter RefreshTokens to count.
     * @example
     * // Count the number of RefreshTokens
     * const count = await prisma.refreshToken.count({
     *   where: {
     *     // ... the filter for the RefreshTokens we want to count
     *   }
     * })
    **/
    count<T extends RefreshTokenCountArgs>(
      args?: Subset<T, RefreshTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RefreshTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RefreshTokenAggregateArgs>(args: Subset<T, RefreshTokenAggregateArgs>): Prisma.PrismaPromise<GetRefreshTokenAggregateType<T>>

    /**
     * Group by RefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenGroupByArgs} args - Group by arguments.
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
      T extends RefreshTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RefreshTokenGroupByArgs['orderBy'] }
        : { orderBy?: RefreshTokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RefreshTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRefreshTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RefreshToken model
   */
  readonly fields: RefreshTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RefreshToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RefreshTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RefreshToken model
   */
  interface RefreshTokenFieldRefs {
    readonly id: FieldRef<"RefreshToken", 'Int'>
    readonly token: FieldRef<"RefreshToken", 'String'>
    readonly usuarioId: FieldRef<"RefreshToken", 'Int'>
    readonly expiresAt: FieldRef<"RefreshToken", 'DateTime'>
    readonly revocado: FieldRef<"RefreshToken", 'Boolean'>
    readonly createdAt: FieldRef<"RefreshToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RefreshToken findUnique
   */
  export type RefreshTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken findUniqueOrThrow
   */
  export type RefreshTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken findFirst
   */
  export type RefreshTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken findFirstOrThrow
   */
  export type RefreshTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken findMany
   */
  export type RefreshTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshTokens to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken create
   */
  export type RefreshTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The data needed to create a RefreshToken.
     */
    data: XOR<RefreshTokenCreateInput, RefreshTokenUncheckedCreateInput>
  }

  /**
   * RefreshToken createMany
   */
  export type RefreshTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RefreshTokens.
     */
    data: RefreshTokenCreateManyInput | RefreshTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RefreshToken createManyAndReturn
   */
  export type RefreshTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * The data used to create many RefreshTokens.
     */
    data: RefreshTokenCreateManyInput | RefreshTokenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RefreshToken update
   */
  export type RefreshTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The data needed to update a RefreshToken.
     */
    data: XOR<RefreshTokenUpdateInput, RefreshTokenUncheckedUpdateInput>
    /**
     * Choose, which RefreshToken to update.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken updateMany
   */
  export type RefreshTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RefreshTokens.
     */
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyInput>
    /**
     * Filter which RefreshTokens to update
     */
    where?: RefreshTokenWhereInput
    /**
     * Limit how many RefreshTokens to update.
     */
    limit?: number
  }

  /**
   * RefreshToken updateManyAndReturn
   */
  export type RefreshTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * The data used to update RefreshTokens.
     */
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyInput>
    /**
     * Filter which RefreshTokens to update
     */
    where?: RefreshTokenWhereInput
    /**
     * Limit how many RefreshTokens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RefreshToken upsert
   */
  export type RefreshTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The filter to search for the RefreshToken to update in case it exists.
     */
    where: RefreshTokenWhereUniqueInput
    /**
     * In case the RefreshToken found by the `where` argument doesn't exist, create a new RefreshToken with this data.
     */
    create: XOR<RefreshTokenCreateInput, RefreshTokenUncheckedCreateInput>
    /**
     * In case the RefreshToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RefreshTokenUpdateInput, RefreshTokenUncheckedUpdateInput>
  }

  /**
   * RefreshToken delete
   */
  export type RefreshTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter which RefreshToken to delete.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken deleteMany
   */
  export type RefreshTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RefreshTokens to delete
     */
    where?: RefreshTokenWhereInput
    /**
     * Limit how many RefreshTokens to delete.
     */
    limit?: number
  }

  /**
   * RefreshToken without action
   */
  export type RefreshTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
  }


  /**
   * Model Solicitud
   */

  export type AggregateSolicitud = {
    _count: SolicitudCountAggregateOutputType | null
    _avg: SolicitudAvgAggregateOutputType | null
    _sum: SolicitudSumAggregateOutputType | null
    _min: SolicitudMinAggregateOutputType | null
    _max: SolicitudMaxAggregateOutputType | null
  }

  export type SolicitudAvgAggregateOutputType = {
    id: number | null
    usuarioSolicitanteId: number | null
    vehiculoAsignadoId: number | null
    aprobadoPorId: number | null
  }

  export type SolicitudSumAggregateOutputType = {
    id: number | null
    usuarioSolicitanteId: number | null
    vehiculoAsignadoId: number | null
    aprobadoPorId: number | null
  }

  export type SolicitudMinAggregateOutputType = {
    id: number | null
    usuarioSolicitanteId: number | null
    motivo: string | null
    destino: string | null
    fechaRequerida: Date | null
    estado: $Enums.EstadoSolicitud | null
    vehiculoAsignadoId: number | null
    aprobadoPorId: number | null
    createdAt: Date | null
  }

  export type SolicitudMaxAggregateOutputType = {
    id: number | null
    usuarioSolicitanteId: number | null
    motivo: string | null
    destino: string | null
    fechaRequerida: Date | null
    estado: $Enums.EstadoSolicitud | null
    vehiculoAsignadoId: number | null
    aprobadoPorId: number | null
    createdAt: Date | null
  }

  export type SolicitudCountAggregateOutputType = {
    id: number
    usuarioSolicitanteId: number
    motivo: number
    destino: number
    fechaRequerida: number
    estado: number
    vehiculoAsignadoId: number
    aprobadoPorId: number
    createdAt: number
    _all: number
  }


  export type SolicitudAvgAggregateInputType = {
    id?: true
    usuarioSolicitanteId?: true
    vehiculoAsignadoId?: true
    aprobadoPorId?: true
  }

  export type SolicitudSumAggregateInputType = {
    id?: true
    usuarioSolicitanteId?: true
    vehiculoAsignadoId?: true
    aprobadoPorId?: true
  }

  export type SolicitudMinAggregateInputType = {
    id?: true
    usuarioSolicitanteId?: true
    motivo?: true
    destino?: true
    fechaRequerida?: true
    estado?: true
    vehiculoAsignadoId?: true
    aprobadoPorId?: true
    createdAt?: true
  }

  export type SolicitudMaxAggregateInputType = {
    id?: true
    usuarioSolicitanteId?: true
    motivo?: true
    destino?: true
    fechaRequerida?: true
    estado?: true
    vehiculoAsignadoId?: true
    aprobadoPorId?: true
    createdAt?: true
  }

  export type SolicitudCountAggregateInputType = {
    id?: true
    usuarioSolicitanteId?: true
    motivo?: true
    destino?: true
    fechaRequerida?: true
    estado?: true
    vehiculoAsignadoId?: true
    aprobadoPorId?: true
    createdAt?: true
    _all?: true
  }

  export type SolicitudAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Solicitud to aggregate.
     */
    where?: SolicitudWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Solicituds to fetch.
     */
    orderBy?: SolicitudOrderByWithRelationInput | SolicitudOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SolicitudWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Solicituds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Solicituds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Solicituds
    **/
    _count?: true | SolicitudCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SolicitudAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SolicitudSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SolicitudMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SolicitudMaxAggregateInputType
  }

  export type GetSolicitudAggregateType<T extends SolicitudAggregateArgs> = {
        [P in keyof T & keyof AggregateSolicitud]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSolicitud[P]>
      : GetScalarType<T[P], AggregateSolicitud[P]>
  }




  export type SolicitudGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SolicitudWhereInput
    orderBy?: SolicitudOrderByWithAggregationInput | SolicitudOrderByWithAggregationInput[]
    by: SolicitudScalarFieldEnum[] | SolicitudScalarFieldEnum
    having?: SolicitudScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SolicitudCountAggregateInputType | true
    _avg?: SolicitudAvgAggregateInputType
    _sum?: SolicitudSumAggregateInputType
    _min?: SolicitudMinAggregateInputType
    _max?: SolicitudMaxAggregateInputType
  }

  export type SolicitudGroupByOutputType = {
    id: number
    usuarioSolicitanteId: number
    motivo: string
    destino: string
    fechaRequerida: Date
    estado: $Enums.EstadoSolicitud
    vehiculoAsignadoId: number | null
    aprobadoPorId: number | null
    createdAt: Date
    _count: SolicitudCountAggregateOutputType | null
    _avg: SolicitudAvgAggregateOutputType | null
    _sum: SolicitudSumAggregateOutputType | null
    _min: SolicitudMinAggregateOutputType | null
    _max: SolicitudMaxAggregateOutputType | null
  }

  type GetSolicitudGroupByPayload<T extends SolicitudGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SolicitudGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SolicitudGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SolicitudGroupByOutputType[P]>
            : GetScalarType<T[P], SolicitudGroupByOutputType[P]>
        }
      >
    >


  export type SolicitudSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioSolicitanteId?: boolean
    motivo?: boolean
    destino?: boolean
    fechaRequerida?: boolean
    estado?: boolean
    vehiculoAsignadoId?: boolean
    aprobadoPorId?: boolean
    createdAt?: boolean
    usuarioSolicitante?: boolean | UsuarioDefaultArgs<ExtArgs>
    vehiculoAsignado?: boolean | Solicitud$vehiculoAsignadoArgs<ExtArgs>
    aprobadoPor?: boolean | Solicitud$aprobadoPorArgs<ExtArgs>
    preoperacionales?: boolean | Solicitud$preoperacionalesArgs<ExtArgs>
    _count?: boolean | SolicitudCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["solicitud"]>

  export type SolicitudSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioSolicitanteId?: boolean
    motivo?: boolean
    destino?: boolean
    fechaRequerida?: boolean
    estado?: boolean
    vehiculoAsignadoId?: boolean
    aprobadoPorId?: boolean
    createdAt?: boolean
    usuarioSolicitante?: boolean | UsuarioDefaultArgs<ExtArgs>
    vehiculoAsignado?: boolean | Solicitud$vehiculoAsignadoArgs<ExtArgs>
    aprobadoPor?: boolean | Solicitud$aprobadoPorArgs<ExtArgs>
  }, ExtArgs["result"]["solicitud"]>

  export type SolicitudSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioSolicitanteId?: boolean
    motivo?: boolean
    destino?: boolean
    fechaRequerida?: boolean
    estado?: boolean
    vehiculoAsignadoId?: boolean
    aprobadoPorId?: boolean
    createdAt?: boolean
    usuarioSolicitante?: boolean | UsuarioDefaultArgs<ExtArgs>
    vehiculoAsignado?: boolean | Solicitud$vehiculoAsignadoArgs<ExtArgs>
    aprobadoPor?: boolean | Solicitud$aprobadoPorArgs<ExtArgs>
  }, ExtArgs["result"]["solicitud"]>

  export type SolicitudSelectScalar = {
    id?: boolean
    usuarioSolicitanteId?: boolean
    motivo?: boolean
    destino?: boolean
    fechaRequerida?: boolean
    estado?: boolean
    vehiculoAsignadoId?: boolean
    aprobadoPorId?: boolean
    createdAt?: boolean
  }

  export type SolicitudOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "usuarioSolicitanteId" | "motivo" | "destino" | "fechaRequerida" | "estado" | "vehiculoAsignadoId" | "aprobadoPorId" | "createdAt", ExtArgs["result"]["solicitud"]>
  export type SolicitudInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarioSolicitante?: boolean | UsuarioDefaultArgs<ExtArgs>
    vehiculoAsignado?: boolean | Solicitud$vehiculoAsignadoArgs<ExtArgs>
    aprobadoPor?: boolean | Solicitud$aprobadoPorArgs<ExtArgs>
    preoperacionales?: boolean | Solicitud$preoperacionalesArgs<ExtArgs>
    _count?: boolean | SolicitudCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SolicitudIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarioSolicitante?: boolean | UsuarioDefaultArgs<ExtArgs>
    vehiculoAsignado?: boolean | Solicitud$vehiculoAsignadoArgs<ExtArgs>
    aprobadoPor?: boolean | Solicitud$aprobadoPorArgs<ExtArgs>
  }
  export type SolicitudIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuarioSolicitante?: boolean | UsuarioDefaultArgs<ExtArgs>
    vehiculoAsignado?: boolean | Solicitud$vehiculoAsignadoArgs<ExtArgs>
    aprobadoPor?: boolean | Solicitud$aprobadoPorArgs<ExtArgs>
  }

  export type $SolicitudPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Solicitud"
    objects: {
      usuarioSolicitante: Prisma.$UsuarioPayload<ExtArgs>
      vehiculoAsignado: Prisma.$VehiculoPayload<ExtArgs> | null
      aprobadoPor: Prisma.$UsuarioPayload<ExtArgs> | null
      preoperacionales: Prisma.$PreoperacionalPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      usuarioSolicitanteId: number
      motivo: string
      destino: string
      fechaRequerida: Date
      estado: $Enums.EstadoSolicitud
      vehiculoAsignadoId: number | null
      aprobadoPorId: number | null
      createdAt: Date
    }, ExtArgs["result"]["solicitud"]>
    composites: {}
  }

  type SolicitudGetPayload<S extends boolean | null | undefined | SolicitudDefaultArgs> = $Result.GetResult<Prisma.$SolicitudPayload, S>

  type SolicitudCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SolicitudFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SolicitudCountAggregateInputType | true
    }

  export interface SolicitudDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Solicitud'], meta: { name: 'Solicitud' } }
    /**
     * Find zero or one Solicitud that matches the filter.
     * @param {SolicitudFindUniqueArgs} args - Arguments to find a Solicitud
     * @example
     * // Get one Solicitud
     * const solicitud = await prisma.solicitud.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SolicitudFindUniqueArgs>(args: SelectSubset<T, SolicitudFindUniqueArgs<ExtArgs>>): Prisma__SolicitudClient<$Result.GetResult<Prisma.$SolicitudPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Solicitud that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SolicitudFindUniqueOrThrowArgs} args - Arguments to find a Solicitud
     * @example
     * // Get one Solicitud
     * const solicitud = await prisma.solicitud.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SolicitudFindUniqueOrThrowArgs>(args: SelectSubset<T, SolicitudFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SolicitudClient<$Result.GetResult<Prisma.$SolicitudPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Solicitud that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolicitudFindFirstArgs} args - Arguments to find a Solicitud
     * @example
     * // Get one Solicitud
     * const solicitud = await prisma.solicitud.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SolicitudFindFirstArgs>(args?: SelectSubset<T, SolicitudFindFirstArgs<ExtArgs>>): Prisma__SolicitudClient<$Result.GetResult<Prisma.$SolicitudPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Solicitud that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolicitudFindFirstOrThrowArgs} args - Arguments to find a Solicitud
     * @example
     * // Get one Solicitud
     * const solicitud = await prisma.solicitud.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SolicitudFindFirstOrThrowArgs>(args?: SelectSubset<T, SolicitudFindFirstOrThrowArgs<ExtArgs>>): Prisma__SolicitudClient<$Result.GetResult<Prisma.$SolicitudPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Solicituds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolicitudFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Solicituds
     * const solicituds = await prisma.solicitud.findMany()
     * 
     * // Get first 10 Solicituds
     * const solicituds = await prisma.solicitud.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const solicitudWithIdOnly = await prisma.solicitud.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SolicitudFindManyArgs>(args?: SelectSubset<T, SolicitudFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SolicitudPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Solicitud.
     * @param {SolicitudCreateArgs} args - Arguments to create a Solicitud.
     * @example
     * // Create one Solicitud
     * const Solicitud = await prisma.solicitud.create({
     *   data: {
     *     // ... data to create a Solicitud
     *   }
     * })
     * 
     */
    create<T extends SolicitudCreateArgs>(args: SelectSubset<T, SolicitudCreateArgs<ExtArgs>>): Prisma__SolicitudClient<$Result.GetResult<Prisma.$SolicitudPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Solicituds.
     * @param {SolicitudCreateManyArgs} args - Arguments to create many Solicituds.
     * @example
     * // Create many Solicituds
     * const solicitud = await prisma.solicitud.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SolicitudCreateManyArgs>(args?: SelectSubset<T, SolicitudCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Solicituds and returns the data saved in the database.
     * @param {SolicitudCreateManyAndReturnArgs} args - Arguments to create many Solicituds.
     * @example
     * // Create many Solicituds
     * const solicitud = await prisma.solicitud.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Solicituds and only return the `id`
     * const solicitudWithIdOnly = await prisma.solicitud.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SolicitudCreateManyAndReturnArgs>(args?: SelectSubset<T, SolicitudCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SolicitudPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Solicitud.
     * @param {SolicitudDeleteArgs} args - Arguments to delete one Solicitud.
     * @example
     * // Delete one Solicitud
     * const Solicitud = await prisma.solicitud.delete({
     *   where: {
     *     // ... filter to delete one Solicitud
     *   }
     * })
     * 
     */
    delete<T extends SolicitudDeleteArgs>(args: SelectSubset<T, SolicitudDeleteArgs<ExtArgs>>): Prisma__SolicitudClient<$Result.GetResult<Prisma.$SolicitudPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Solicitud.
     * @param {SolicitudUpdateArgs} args - Arguments to update one Solicitud.
     * @example
     * // Update one Solicitud
     * const solicitud = await prisma.solicitud.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SolicitudUpdateArgs>(args: SelectSubset<T, SolicitudUpdateArgs<ExtArgs>>): Prisma__SolicitudClient<$Result.GetResult<Prisma.$SolicitudPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Solicituds.
     * @param {SolicitudDeleteManyArgs} args - Arguments to filter Solicituds to delete.
     * @example
     * // Delete a few Solicituds
     * const { count } = await prisma.solicitud.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SolicitudDeleteManyArgs>(args?: SelectSubset<T, SolicitudDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Solicituds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolicitudUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Solicituds
     * const solicitud = await prisma.solicitud.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SolicitudUpdateManyArgs>(args: SelectSubset<T, SolicitudUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Solicituds and returns the data updated in the database.
     * @param {SolicitudUpdateManyAndReturnArgs} args - Arguments to update many Solicituds.
     * @example
     * // Update many Solicituds
     * const solicitud = await prisma.solicitud.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Solicituds and only return the `id`
     * const solicitudWithIdOnly = await prisma.solicitud.updateManyAndReturn({
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
    updateManyAndReturn<T extends SolicitudUpdateManyAndReturnArgs>(args: SelectSubset<T, SolicitudUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SolicitudPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Solicitud.
     * @param {SolicitudUpsertArgs} args - Arguments to update or create a Solicitud.
     * @example
     * // Update or create a Solicitud
     * const solicitud = await prisma.solicitud.upsert({
     *   create: {
     *     // ... data to create a Solicitud
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Solicitud we want to update
     *   }
     * })
     */
    upsert<T extends SolicitudUpsertArgs>(args: SelectSubset<T, SolicitudUpsertArgs<ExtArgs>>): Prisma__SolicitudClient<$Result.GetResult<Prisma.$SolicitudPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Solicituds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolicitudCountArgs} args - Arguments to filter Solicituds to count.
     * @example
     * // Count the number of Solicituds
     * const count = await prisma.solicitud.count({
     *   where: {
     *     // ... the filter for the Solicituds we want to count
     *   }
     * })
    **/
    count<T extends SolicitudCountArgs>(
      args?: Subset<T, SolicitudCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SolicitudCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Solicitud.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolicitudAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SolicitudAggregateArgs>(args: Subset<T, SolicitudAggregateArgs>): Prisma.PrismaPromise<GetSolicitudAggregateType<T>>

    /**
     * Group by Solicitud.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolicitudGroupByArgs} args - Group by arguments.
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
      T extends SolicitudGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SolicitudGroupByArgs['orderBy'] }
        : { orderBy?: SolicitudGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SolicitudGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSolicitudGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Solicitud model
   */
  readonly fields: SolicitudFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Solicitud.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SolicitudClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuarioSolicitante<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    vehiculoAsignado<T extends Solicitud$vehiculoAsignadoArgs<ExtArgs> = {}>(args?: Subset<T, Solicitud$vehiculoAsignadoArgs<ExtArgs>>): Prisma__VehiculoClient<$Result.GetResult<Prisma.$VehiculoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    aprobadoPor<T extends Solicitud$aprobadoPorArgs<ExtArgs> = {}>(args?: Subset<T, Solicitud$aprobadoPorArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    preoperacionales<T extends Solicitud$preoperacionalesArgs<ExtArgs> = {}>(args?: Subset<T, Solicitud$preoperacionalesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PreoperacionalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Solicitud model
   */
  interface SolicitudFieldRefs {
    readonly id: FieldRef<"Solicitud", 'Int'>
    readonly usuarioSolicitanteId: FieldRef<"Solicitud", 'Int'>
    readonly motivo: FieldRef<"Solicitud", 'String'>
    readonly destino: FieldRef<"Solicitud", 'String'>
    readonly fechaRequerida: FieldRef<"Solicitud", 'DateTime'>
    readonly estado: FieldRef<"Solicitud", 'EstadoSolicitud'>
    readonly vehiculoAsignadoId: FieldRef<"Solicitud", 'Int'>
    readonly aprobadoPorId: FieldRef<"Solicitud", 'Int'>
    readonly createdAt: FieldRef<"Solicitud", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Solicitud findUnique
   */
  export type SolicitudFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solicitud
     */
    select?: SolicitudSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solicitud
     */
    omit?: SolicitudOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolicitudInclude<ExtArgs> | null
    /**
     * Filter, which Solicitud to fetch.
     */
    where: SolicitudWhereUniqueInput
  }

  /**
   * Solicitud findUniqueOrThrow
   */
  export type SolicitudFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solicitud
     */
    select?: SolicitudSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solicitud
     */
    omit?: SolicitudOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolicitudInclude<ExtArgs> | null
    /**
     * Filter, which Solicitud to fetch.
     */
    where: SolicitudWhereUniqueInput
  }

  /**
   * Solicitud findFirst
   */
  export type SolicitudFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solicitud
     */
    select?: SolicitudSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solicitud
     */
    omit?: SolicitudOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolicitudInclude<ExtArgs> | null
    /**
     * Filter, which Solicitud to fetch.
     */
    where?: SolicitudWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Solicituds to fetch.
     */
    orderBy?: SolicitudOrderByWithRelationInput | SolicitudOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Solicituds.
     */
    cursor?: SolicitudWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Solicituds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Solicituds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Solicituds.
     */
    distinct?: SolicitudScalarFieldEnum | SolicitudScalarFieldEnum[]
  }

  /**
   * Solicitud findFirstOrThrow
   */
  export type SolicitudFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solicitud
     */
    select?: SolicitudSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solicitud
     */
    omit?: SolicitudOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolicitudInclude<ExtArgs> | null
    /**
     * Filter, which Solicitud to fetch.
     */
    where?: SolicitudWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Solicituds to fetch.
     */
    orderBy?: SolicitudOrderByWithRelationInput | SolicitudOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Solicituds.
     */
    cursor?: SolicitudWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Solicituds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Solicituds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Solicituds.
     */
    distinct?: SolicitudScalarFieldEnum | SolicitudScalarFieldEnum[]
  }

  /**
   * Solicitud findMany
   */
  export type SolicitudFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solicitud
     */
    select?: SolicitudSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solicitud
     */
    omit?: SolicitudOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolicitudInclude<ExtArgs> | null
    /**
     * Filter, which Solicituds to fetch.
     */
    where?: SolicitudWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Solicituds to fetch.
     */
    orderBy?: SolicitudOrderByWithRelationInput | SolicitudOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Solicituds.
     */
    cursor?: SolicitudWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Solicituds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Solicituds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Solicituds.
     */
    distinct?: SolicitudScalarFieldEnum | SolicitudScalarFieldEnum[]
  }

  /**
   * Solicitud create
   */
  export type SolicitudCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solicitud
     */
    select?: SolicitudSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solicitud
     */
    omit?: SolicitudOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolicitudInclude<ExtArgs> | null
    /**
     * The data needed to create a Solicitud.
     */
    data: XOR<SolicitudCreateInput, SolicitudUncheckedCreateInput>
  }

  /**
   * Solicitud createMany
   */
  export type SolicitudCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Solicituds.
     */
    data: SolicitudCreateManyInput | SolicitudCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Solicitud createManyAndReturn
   */
  export type SolicitudCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solicitud
     */
    select?: SolicitudSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Solicitud
     */
    omit?: SolicitudOmit<ExtArgs> | null
    /**
     * The data used to create many Solicituds.
     */
    data: SolicitudCreateManyInput | SolicitudCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolicitudIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Solicitud update
   */
  export type SolicitudUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solicitud
     */
    select?: SolicitudSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solicitud
     */
    omit?: SolicitudOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolicitudInclude<ExtArgs> | null
    /**
     * The data needed to update a Solicitud.
     */
    data: XOR<SolicitudUpdateInput, SolicitudUncheckedUpdateInput>
    /**
     * Choose, which Solicitud to update.
     */
    where: SolicitudWhereUniqueInput
  }

  /**
   * Solicitud updateMany
   */
  export type SolicitudUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Solicituds.
     */
    data: XOR<SolicitudUpdateManyMutationInput, SolicitudUncheckedUpdateManyInput>
    /**
     * Filter which Solicituds to update
     */
    where?: SolicitudWhereInput
    /**
     * Limit how many Solicituds to update.
     */
    limit?: number
  }

  /**
   * Solicitud updateManyAndReturn
   */
  export type SolicitudUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solicitud
     */
    select?: SolicitudSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Solicitud
     */
    omit?: SolicitudOmit<ExtArgs> | null
    /**
     * The data used to update Solicituds.
     */
    data: XOR<SolicitudUpdateManyMutationInput, SolicitudUncheckedUpdateManyInput>
    /**
     * Filter which Solicituds to update
     */
    where?: SolicitudWhereInput
    /**
     * Limit how many Solicituds to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolicitudIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Solicitud upsert
   */
  export type SolicitudUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solicitud
     */
    select?: SolicitudSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solicitud
     */
    omit?: SolicitudOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolicitudInclude<ExtArgs> | null
    /**
     * The filter to search for the Solicitud to update in case it exists.
     */
    where: SolicitudWhereUniqueInput
    /**
     * In case the Solicitud found by the `where` argument doesn't exist, create a new Solicitud with this data.
     */
    create: XOR<SolicitudCreateInput, SolicitudUncheckedCreateInput>
    /**
     * In case the Solicitud was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SolicitudUpdateInput, SolicitudUncheckedUpdateInput>
  }

  /**
   * Solicitud delete
   */
  export type SolicitudDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solicitud
     */
    select?: SolicitudSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solicitud
     */
    omit?: SolicitudOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolicitudInclude<ExtArgs> | null
    /**
     * Filter which Solicitud to delete.
     */
    where: SolicitudWhereUniqueInput
  }

  /**
   * Solicitud deleteMany
   */
  export type SolicitudDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Solicituds to delete
     */
    where?: SolicitudWhereInput
    /**
     * Limit how many Solicituds to delete.
     */
    limit?: number
  }

  /**
   * Solicitud.vehiculoAsignado
   */
  export type Solicitud$vehiculoAsignadoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehiculo
     */
    select?: VehiculoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehiculo
     */
    omit?: VehiculoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculoInclude<ExtArgs> | null
    where?: VehiculoWhereInput
  }

  /**
   * Solicitud.aprobadoPor
   */
  export type Solicitud$aprobadoPorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    where?: UsuarioWhereInput
  }

  /**
   * Solicitud.preoperacionales
   */
  export type Solicitud$preoperacionalesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preoperacional
     */
    select?: PreoperacionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preoperacional
     */
    omit?: PreoperacionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreoperacionalInclude<ExtArgs> | null
    where?: PreoperacionalWhereInput
    orderBy?: PreoperacionalOrderByWithRelationInput | PreoperacionalOrderByWithRelationInput[]
    cursor?: PreoperacionalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PreoperacionalScalarFieldEnum | PreoperacionalScalarFieldEnum[]
  }

  /**
   * Solicitud without action
   */
  export type SolicitudDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solicitud
     */
    select?: SolicitudSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solicitud
     */
    omit?: SolicitudOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolicitudInclude<ExtArgs> | null
  }


  /**
   * Model Viaje
   */

  export type AggregateViaje = {
    _count: ViajeCountAggregateOutputType | null
    _avg: ViajeAvgAggregateOutputType | null
    _sum: ViajeSumAggregateOutputType | null
    _min: ViajeMinAggregateOutputType | null
    _max: ViajeMaxAggregateOutputType | null
  }

  export type ViajeAvgAggregateOutputType = {
    vehiculoId: number | null
    conductorId: number | null
    preoperacionalId: number | null
    distanciaTotalKm: number | null
    velocidadPromedio: number | null
    velocidadMaxima: number | null
  }

  export type ViajeSumAggregateOutputType = {
    vehiculoId: number | null
    conductorId: number | null
    preoperacionalId: number | null
    distanciaTotalKm: number | null
    velocidadPromedio: number | null
    velocidadMaxima: number | null
  }

  export type ViajeMinAggregateOutputType = {
    id: string | null
    vehiculoId: number | null
    conductorId: number | null
    preoperacionalId: number | null
    horaInicio: Date | null
    horaFin: Date | null
    distanciaTotalKm: number | null
    velocidadPromedio: number | null
    velocidadMaxima: number | null
    estado: $Enums.EstadoViaje | null
    archivoRutaUrl: string | null
    createdAt: Date | null
  }

  export type ViajeMaxAggregateOutputType = {
    id: string | null
    vehiculoId: number | null
    conductorId: number | null
    preoperacionalId: number | null
    horaInicio: Date | null
    horaFin: Date | null
    distanciaTotalKm: number | null
    velocidadPromedio: number | null
    velocidadMaxima: number | null
    estado: $Enums.EstadoViaje | null
    archivoRutaUrl: string | null
    createdAt: Date | null
  }

  export type ViajeCountAggregateOutputType = {
    id: number
    vehiculoId: number
    conductorId: number
    preoperacionalId: number
    horaInicio: number
    horaFin: number
    distanciaTotalKm: number
    velocidadPromedio: number
    velocidadMaxima: number
    estado: number
    archivoRutaUrl: number
    createdAt: number
    _all: number
  }


  export type ViajeAvgAggregateInputType = {
    vehiculoId?: true
    conductorId?: true
    preoperacionalId?: true
    distanciaTotalKm?: true
    velocidadPromedio?: true
    velocidadMaxima?: true
  }

  export type ViajeSumAggregateInputType = {
    vehiculoId?: true
    conductorId?: true
    preoperacionalId?: true
    distanciaTotalKm?: true
    velocidadPromedio?: true
    velocidadMaxima?: true
  }

  export type ViajeMinAggregateInputType = {
    id?: true
    vehiculoId?: true
    conductorId?: true
    preoperacionalId?: true
    horaInicio?: true
    horaFin?: true
    distanciaTotalKm?: true
    velocidadPromedio?: true
    velocidadMaxima?: true
    estado?: true
    archivoRutaUrl?: true
    createdAt?: true
  }

  export type ViajeMaxAggregateInputType = {
    id?: true
    vehiculoId?: true
    conductorId?: true
    preoperacionalId?: true
    horaInicio?: true
    horaFin?: true
    distanciaTotalKm?: true
    velocidadPromedio?: true
    velocidadMaxima?: true
    estado?: true
    archivoRutaUrl?: true
    createdAt?: true
  }

  export type ViajeCountAggregateInputType = {
    id?: true
    vehiculoId?: true
    conductorId?: true
    preoperacionalId?: true
    horaInicio?: true
    horaFin?: true
    distanciaTotalKm?: true
    velocidadPromedio?: true
    velocidadMaxima?: true
    estado?: true
    archivoRutaUrl?: true
    createdAt?: true
    _all?: true
  }

  export type ViajeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Viaje to aggregate.
     */
    where?: ViajeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Viajes to fetch.
     */
    orderBy?: ViajeOrderByWithRelationInput | ViajeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ViajeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Viajes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Viajes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Viajes
    **/
    _count?: true | ViajeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ViajeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ViajeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ViajeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ViajeMaxAggregateInputType
  }

  export type GetViajeAggregateType<T extends ViajeAggregateArgs> = {
        [P in keyof T & keyof AggregateViaje]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateViaje[P]>
      : GetScalarType<T[P], AggregateViaje[P]>
  }




  export type ViajeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ViajeWhereInput
    orderBy?: ViajeOrderByWithAggregationInput | ViajeOrderByWithAggregationInput[]
    by: ViajeScalarFieldEnum[] | ViajeScalarFieldEnum
    having?: ViajeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ViajeCountAggregateInputType | true
    _avg?: ViajeAvgAggregateInputType
    _sum?: ViajeSumAggregateInputType
    _min?: ViajeMinAggregateInputType
    _max?: ViajeMaxAggregateInputType
  }

  export type ViajeGroupByOutputType = {
    id: string
    vehiculoId: number
    conductorId: number
    preoperacionalId: number | null
    horaInicio: Date
    horaFin: Date | null
    distanciaTotalKm: number | null
    velocidadPromedio: number | null
    velocidadMaxima: number | null
    estado: $Enums.EstadoViaje
    archivoRutaUrl: string | null
    createdAt: Date
    _count: ViajeCountAggregateOutputType | null
    _avg: ViajeAvgAggregateOutputType | null
    _sum: ViajeSumAggregateOutputType | null
    _min: ViajeMinAggregateOutputType | null
    _max: ViajeMaxAggregateOutputType | null
  }

  type GetViajeGroupByPayload<T extends ViajeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ViajeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ViajeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ViajeGroupByOutputType[P]>
            : GetScalarType<T[P], ViajeGroupByOutputType[P]>
        }
      >
    >


  export type ViajeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vehiculoId?: boolean
    conductorId?: boolean
    preoperacionalId?: boolean
    horaInicio?: boolean
    horaFin?: boolean
    distanciaTotalKm?: boolean
    velocidadPromedio?: boolean
    velocidadMaxima?: boolean
    estado?: boolean
    archivoRutaUrl?: boolean
    createdAt?: boolean
    vehiculo?: boolean | VehiculoDefaultArgs<ExtArgs>
    conductor?: boolean | UsuarioDefaultArgs<ExtArgs>
    preoperacional?: boolean | Viaje$preoperacionalArgs<ExtArgs>
    puntosGps?: boolean | Viaje$puntosGpsArgs<ExtArgs>
    _count?: boolean | ViajeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["viaje"]>

  export type ViajeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vehiculoId?: boolean
    conductorId?: boolean
    preoperacionalId?: boolean
    horaInicio?: boolean
    horaFin?: boolean
    distanciaTotalKm?: boolean
    velocidadPromedio?: boolean
    velocidadMaxima?: boolean
    estado?: boolean
    archivoRutaUrl?: boolean
    createdAt?: boolean
    vehiculo?: boolean | VehiculoDefaultArgs<ExtArgs>
    conductor?: boolean | UsuarioDefaultArgs<ExtArgs>
    preoperacional?: boolean | Viaje$preoperacionalArgs<ExtArgs>
  }, ExtArgs["result"]["viaje"]>

  export type ViajeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vehiculoId?: boolean
    conductorId?: boolean
    preoperacionalId?: boolean
    horaInicio?: boolean
    horaFin?: boolean
    distanciaTotalKm?: boolean
    velocidadPromedio?: boolean
    velocidadMaxima?: boolean
    estado?: boolean
    archivoRutaUrl?: boolean
    createdAt?: boolean
    vehiculo?: boolean | VehiculoDefaultArgs<ExtArgs>
    conductor?: boolean | UsuarioDefaultArgs<ExtArgs>
    preoperacional?: boolean | Viaje$preoperacionalArgs<ExtArgs>
  }, ExtArgs["result"]["viaje"]>

  export type ViajeSelectScalar = {
    id?: boolean
    vehiculoId?: boolean
    conductorId?: boolean
    preoperacionalId?: boolean
    horaInicio?: boolean
    horaFin?: boolean
    distanciaTotalKm?: boolean
    velocidadPromedio?: boolean
    velocidadMaxima?: boolean
    estado?: boolean
    archivoRutaUrl?: boolean
    createdAt?: boolean
  }

  export type ViajeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "vehiculoId" | "conductorId" | "preoperacionalId" | "horaInicio" | "horaFin" | "distanciaTotalKm" | "velocidadPromedio" | "velocidadMaxima" | "estado" | "archivoRutaUrl" | "createdAt", ExtArgs["result"]["viaje"]>
  export type ViajeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehiculo?: boolean | VehiculoDefaultArgs<ExtArgs>
    conductor?: boolean | UsuarioDefaultArgs<ExtArgs>
    preoperacional?: boolean | Viaje$preoperacionalArgs<ExtArgs>
    puntosGps?: boolean | Viaje$puntosGpsArgs<ExtArgs>
    _count?: boolean | ViajeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ViajeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehiculo?: boolean | VehiculoDefaultArgs<ExtArgs>
    conductor?: boolean | UsuarioDefaultArgs<ExtArgs>
    preoperacional?: boolean | Viaje$preoperacionalArgs<ExtArgs>
  }
  export type ViajeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehiculo?: boolean | VehiculoDefaultArgs<ExtArgs>
    conductor?: boolean | UsuarioDefaultArgs<ExtArgs>
    preoperacional?: boolean | Viaje$preoperacionalArgs<ExtArgs>
  }

  export type $ViajePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Viaje"
    objects: {
      vehiculo: Prisma.$VehiculoPayload<ExtArgs>
      conductor: Prisma.$UsuarioPayload<ExtArgs>
      preoperacional: Prisma.$PreoperacionalPayload<ExtArgs> | null
      puntosGps: Prisma.$PuntoGpsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      vehiculoId: number
      conductorId: number
      preoperacionalId: number | null
      horaInicio: Date
      horaFin: Date | null
      distanciaTotalKm: number | null
      velocidadPromedio: number | null
      velocidadMaxima: number | null
      estado: $Enums.EstadoViaje
      archivoRutaUrl: string | null
      createdAt: Date
    }, ExtArgs["result"]["viaje"]>
    composites: {}
  }

  type ViajeGetPayload<S extends boolean | null | undefined | ViajeDefaultArgs> = $Result.GetResult<Prisma.$ViajePayload, S>

  type ViajeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ViajeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ViajeCountAggregateInputType | true
    }

  export interface ViajeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Viaje'], meta: { name: 'Viaje' } }
    /**
     * Find zero or one Viaje that matches the filter.
     * @param {ViajeFindUniqueArgs} args - Arguments to find a Viaje
     * @example
     * // Get one Viaje
     * const viaje = await prisma.viaje.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ViajeFindUniqueArgs>(args: SelectSubset<T, ViajeFindUniqueArgs<ExtArgs>>): Prisma__ViajeClient<$Result.GetResult<Prisma.$ViajePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Viaje that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ViajeFindUniqueOrThrowArgs} args - Arguments to find a Viaje
     * @example
     * // Get one Viaje
     * const viaje = await prisma.viaje.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ViajeFindUniqueOrThrowArgs>(args: SelectSubset<T, ViajeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ViajeClient<$Result.GetResult<Prisma.$ViajePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Viaje that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViajeFindFirstArgs} args - Arguments to find a Viaje
     * @example
     * // Get one Viaje
     * const viaje = await prisma.viaje.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ViajeFindFirstArgs>(args?: SelectSubset<T, ViajeFindFirstArgs<ExtArgs>>): Prisma__ViajeClient<$Result.GetResult<Prisma.$ViajePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Viaje that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViajeFindFirstOrThrowArgs} args - Arguments to find a Viaje
     * @example
     * // Get one Viaje
     * const viaje = await prisma.viaje.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ViajeFindFirstOrThrowArgs>(args?: SelectSubset<T, ViajeFindFirstOrThrowArgs<ExtArgs>>): Prisma__ViajeClient<$Result.GetResult<Prisma.$ViajePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Viajes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViajeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Viajes
     * const viajes = await prisma.viaje.findMany()
     * 
     * // Get first 10 Viajes
     * const viajes = await prisma.viaje.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const viajeWithIdOnly = await prisma.viaje.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ViajeFindManyArgs>(args?: SelectSubset<T, ViajeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViajePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Viaje.
     * @param {ViajeCreateArgs} args - Arguments to create a Viaje.
     * @example
     * // Create one Viaje
     * const Viaje = await prisma.viaje.create({
     *   data: {
     *     // ... data to create a Viaje
     *   }
     * })
     * 
     */
    create<T extends ViajeCreateArgs>(args: SelectSubset<T, ViajeCreateArgs<ExtArgs>>): Prisma__ViajeClient<$Result.GetResult<Prisma.$ViajePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Viajes.
     * @param {ViajeCreateManyArgs} args - Arguments to create many Viajes.
     * @example
     * // Create many Viajes
     * const viaje = await prisma.viaje.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ViajeCreateManyArgs>(args?: SelectSubset<T, ViajeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Viajes and returns the data saved in the database.
     * @param {ViajeCreateManyAndReturnArgs} args - Arguments to create many Viajes.
     * @example
     * // Create many Viajes
     * const viaje = await prisma.viaje.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Viajes and only return the `id`
     * const viajeWithIdOnly = await prisma.viaje.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ViajeCreateManyAndReturnArgs>(args?: SelectSubset<T, ViajeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViajePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Viaje.
     * @param {ViajeDeleteArgs} args - Arguments to delete one Viaje.
     * @example
     * // Delete one Viaje
     * const Viaje = await prisma.viaje.delete({
     *   where: {
     *     // ... filter to delete one Viaje
     *   }
     * })
     * 
     */
    delete<T extends ViajeDeleteArgs>(args: SelectSubset<T, ViajeDeleteArgs<ExtArgs>>): Prisma__ViajeClient<$Result.GetResult<Prisma.$ViajePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Viaje.
     * @param {ViajeUpdateArgs} args - Arguments to update one Viaje.
     * @example
     * // Update one Viaje
     * const viaje = await prisma.viaje.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ViajeUpdateArgs>(args: SelectSubset<T, ViajeUpdateArgs<ExtArgs>>): Prisma__ViajeClient<$Result.GetResult<Prisma.$ViajePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Viajes.
     * @param {ViajeDeleteManyArgs} args - Arguments to filter Viajes to delete.
     * @example
     * // Delete a few Viajes
     * const { count } = await prisma.viaje.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ViajeDeleteManyArgs>(args?: SelectSubset<T, ViajeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Viajes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViajeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Viajes
     * const viaje = await prisma.viaje.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ViajeUpdateManyArgs>(args: SelectSubset<T, ViajeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Viajes and returns the data updated in the database.
     * @param {ViajeUpdateManyAndReturnArgs} args - Arguments to update many Viajes.
     * @example
     * // Update many Viajes
     * const viaje = await prisma.viaje.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Viajes and only return the `id`
     * const viajeWithIdOnly = await prisma.viaje.updateManyAndReturn({
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
    updateManyAndReturn<T extends ViajeUpdateManyAndReturnArgs>(args: SelectSubset<T, ViajeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViajePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Viaje.
     * @param {ViajeUpsertArgs} args - Arguments to update or create a Viaje.
     * @example
     * // Update or create a Viaje
     * const viaje = await prisma.viaje.upsert({
     *   create: {
     *     // ... data to create a Viaje
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Viaje we want to update
     *   }
     * })
     */
    upsert<T extends ViajeUpsertArgs>(args: SelectSubset<T, ViajeUpsertArgs<ExtArgs>>): Prisma__ViajeClient<$Result.GetResult<Prisma.$ViajePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Viajes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViajeCountArgs} args - Arguments to filter Viajes to count.
     * @example
     * // Count the number of Viajes
     * const count = await prisma.viaje.count({
     *   where: {
     *     // ... the filter for the Viajes we want to count
     *   }
     * })
    **/
    count<T extends ViajeCountArgs>(
      args?: Subset<T, ViajeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ViajeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Viaje.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViajeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ViajeAggregateArgs>(args: Subset<T, ViajeAggregateArgs>): Prisma.PrismaPromise<GetViajeAggregateType<T>>

    /**
     * Group by Viaje.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViajeGroupByArgs} args - Group by arguments.
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
      T extends ViajeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ViajeGroupByArgs['orderBy'] }
        : { orderBy?: ViajeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ViajeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetViajeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Viaje model
   */
  readonly fields: ViajeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Viaje.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ViajeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vehiculo<T extends VehiculoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VehiculoDefaultArgs<ExtArgs>>): Prisma__VehiculoClient<$Result.GetResult<Prisma.$VehiculoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    conductor<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    preoperacional<T extends Viaje$preoperacionalArgs<ExtArgs> = {}>(args?: Subset<T, Viaje$preoperacionalArgs<ExtArgs>>): Prisma__PreoperacionalClient<$Result.GetResult<Prisma.$PreoperacionalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    puntosGps<T extends Viaje$puntosGpsArgs<ExtArgs> = {}>(args?: Subset<T, Viaje$puntosGpsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PuntoGpsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Viaje model
   */
  interface ViajeFieldRefs {
    readonly id: FieldRef<"Viaje", 'String'>
    readonly vehiculoId: FieldRef<"Viaje", 'Int'>
    readonly conductorId: FieldRef<"Viaje", 'Int'>
    readonly preoperacionalId: FieldRef<"Viaje", 'Int'>
    readonly horaInicio: FieldRef<"Viaje", 'DateTime'>
    readonly horaFin: FieldRef<"Viaje", 'DateTime'>
    readonly distanciaTotalKm: FieldRef<"Viaje", 'Float'>
    readonly velocidadPromedio: FieldRef<"Viaje", 'Float'>
    readonly velocidadMaxima: FieldRef<"Viaje", 'Float'>
    readonly estado: FieldRef<"Viaje", 'EstadoViaje'>
    readonly archivoRutaUrl: FieldRef<"Viaje", 'String'>
    readonly createdAt: FieldRef<"Viaje", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Viaje findUnique
   */
  export type ViajeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Viaje
     */
    select?: ViajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Viaje
     */
    omit?: ViajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViajeInclude<ExtArgs> | null
    /**
     * Filter, which Viaje to fetch.
     */
    where: ViajeWhereUniqueInput
  }

  /**
   * Viaje findUniqueOrThrow
   */
  export type ViajeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Viaje
     */
    select?: ViajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Viaje
     */
    omit?: ViajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViajeInclude<ExtArgs> | null
    /**
     * Filter, which Viaje to fetch.
     */
    where: ViajeWhereUniqueInput
  }

  /**
   * Viaje findFirst
   */
  export type ViajeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Viaje
     */
    select?: ViajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Viaje
     */
    omit?: ViajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViajeInclude<ExtArgs> | null
    /**
     * Filter, which Viaje to fetch.
     */
    where?: ViajeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Viajes to fetch.
     */
    orderBy?: ViajeOrderByWithRelationInput | ViajeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Viajes.
     */
    cursor?: ViajeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Viajes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Viajes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Viajes.
     */
    distinct?: ViajeScalarFieldEnum | ViajeScalarFieldEnum[]
  }

  /**
   * Viaje findFirstOrThrow
   */
  export type ViajeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Viaje
     */
    select?: ViajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Viaje
     */
    omit?: ViajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViajeInclude<ExtArgs> | null
    /**
     * Filter, which Viaje to fetch.
     */
    where?: ViajeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Viajes to fetch.
     */
    orderBy?: ViajeOrderByWithRelationInput | ViajeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Viajes.
     */
    cursor?: ViajeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Viajes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Viajes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Viajes.
     */
    distinct?: ViajeScalarFieldEnum | ViajeScalarFieldEnum[]
  }

  /**
   * Viaje findMany
   */
  export type ViajeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Viaje
     */
    select?: ViajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Viaje
     */
    omit?: ViajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViajeInclude<ExtArgs> | null
    /**
     * Filter, which Viajes to fetch.
     */
    where?: ViajeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Viajes to fetch.
     */
    orderBy?: ViajeOrderByWithRelationInput | ViajeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Viajes.
     */
    cursor?: ViajeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Viajes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Viajes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Viajes.
     */
    distinct?: ViajeScalarFieldEnum | ViajeScalarFieldEnum[]
  }

  /**
   * Viaje create
   */
  export type ViajeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Viaje
     */
    select?: ViajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Viaje
     */
    omit?: ViajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViajeInclude<ExtArgs> | null
    /**
     * The data needed to create a Viaje.
     */
    data: XOR<ViajeCreateInput, ViajeUncheckedCreateInput>
  }

  /**
   * Viaje createMany
   */
  export type ViajeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Viajes.
     */
    data: ViajeCreateManyInput | ViajeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Viaje createManyAndReturn
   */
  export type ViajeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Viaje
     */
    select?: ViajeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Viaje
     */
    omit?: ViajeOmit<ExtArgs> | null
    /**
     * The data used to create many Viajes.
     */
    data: ViajeCreateManyInput | ViajeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViajeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Viaje update
   */
  export type ViajeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Viaje
     */
    select?: ViajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Viaje
     */
    omit?: ViajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViajeInclude<ExtArgs> | null
    /**
     * The data needed to update a Viaje.
     */
    data: XOR<ViajeUpdateInput, ViajeUncheckedUpdateInput>
    /**
     * Choose, which Viaje to update.
     */
    where: ViajeWhereUniqueInput
  }

  /**
   * Viaje updateMany
   */
  export type ViajeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Viajes.
     */
    data: XOR<ViajeUpdateManyMutationInput, ViajeUncheckedUpdateManyInput>
    /**
     * Filter which Viajes to update
     */
    where?: ViajeWhereInput
    /**
     * Limit how many Viajes to update.
     */
    limit?: number
  }

  /**
   * Viaje updateManyAndReturn
   */
  export type ViajeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Viaje
     */
    select?: ViajeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Viaje
     */
    omit?: ViajeOmit<ExtArgs> | null
    /**
     * The data used to update Viajes.
     */
    data: XOR<ViajeUpdateManyMutationInput, ViajeUncheckedUpdateManyInput>
    /**
     * Filter which Viajes to update
     */
    where?: ViajeWhereInput
    /**
     * Limit how many Viajes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViajeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Viaje upsert
   */
  export type ViajeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Viaje
     */
    select?: ViajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Viaje
     */
    omit?: ViajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViajeInclude<ExtArgs> | null
    /**
     * The filter to search for the Viaje to update in case it exists.
     */
    where: ViajeWhereUniqueInput
    /**
     * In case the Viaje found by the `where` argument doesn't exist, create a new Viaje with this data.
     */
    create: XOR<ViajeCreateInput, ViajeUncheckedCreateInput>
    /**
     * In case the Viaje was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ViajeUpdateInput, ViajeUncheckedUpdateInput>
  }

  /**
   * Viaje delete
   */
  export type ViajeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Viaje
     */
    select?: ViajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Viaje
     */
    omit?: ViajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViajeInclude<ExtArgs> | null
    /**
     * Filter which Viaje to delete.
     */
    where: ViajeWhereUniqueInput
  }

  /**
   * Viaje deleteMany
   */
  export type ViajeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Viajes to delete
     */
    where?: ViajeWhereInput
    /**
     * Limit how many Viajes to delete.
     */
    limit?: number
  }

  /**
   * Viaje.preoperacional
   */
  export type Viaje$preoperacionalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preoperacional
     */
    select?: PreoperacionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preoperacional
     */
    omit?: PreoperacionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreoperacionalInclude<ExtArgs> | null
    where?: PreoperacionalWhereInput
  }

  /**
   * Viaje.puntosGps
   */
  export type Viaje$puntosGpsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PuntoGps
     */
    select?: PuntoGpsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PuntoGps
     */
    omit?: PuntoGpsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PuntoGpsInclude<ExtArgs> | null
    where?: PuntoGpsWhereInput
    orderBy?: PuntoGpsOrderByWithRelationInput | PuntoGpsOrderByWithRelationInput[]
    cursor?: PuntoGpsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PuntoGpsScalarFieldEnum | PuntoGpsScalarFieldEnum[]
  }

  /**
   * Viaje without action
   */
  export type ViajeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Viaje
     */
    select?: ViajeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Viaje
     */
    omit?: ViajeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViajeInclude<ExtArgs> | null
  }


  /**
   * Model PuntoGps
   */

  export type AggregatePuntoGps = {
    _count: PuntoGpsCountAggregateOutputType | null
    _avg: PuntoGpsAvgAggregateOutputType | null
    _sum: PuntoGpsSumAggregateOutputType | null
    _min: PuntoGpsMinAggregateOutputType | null
    _max: PuntoGpsMaxAggregateOutputType | null
  }

  export type PuntoGpsAvgAggregateOutputType = {
    id: number | null
    velocidad: number | null
    precision: number | null
  }

  export type PuntoGpsSumAggregateOutputType = {
    id: number | null
    velocidad: number | null
    precision: number | null
  }

  export type PuntoGpsMinAggregateOutputType = {
    id: number | null
    viajeId: string | null
    velocidad: number | null
    precision: number | null
    timestamp: Date | null
  }

  export type PuntoGpsMaxAggregateOutputType = {
    id: number | null
    viajeId: string | null
    velocidad: number | null
    precision: number | null
    timestamp: Date | null
  }

  export type PuntoGpsCountAggregateOutputType = {
    id: number
    viajeId: number
    velocidad: number
    precision: number
    timestamp: number
    _all: number
  }


  export type PuntoGpsAvgAggregateInputType = {
    id?: true
    velocidad?: true
    precision?: true
  }

  export type PuntoGpsSumAggregateInputType = {
    id?: true
    velocidad?: true
    precision?: true
  }

  export type PuntoGpsMinAggregateInputType = {
    id?: true
    viajeId?: true
    velocidad?: true
    precision?: true
    timestamp?: true
  }

  export type PuntoGpsMaxAggregateInputType = {
    id?: true
    viajeId?: true
    velocidad?: true
    precision?: true
    timestamp?: true
  }

  export type PuntoGpsCountAggregateInputType = {
    id?: true
    viajeId?: true
    velocidad?: true
    precision?: true
    timestamp?: true
    _all?: true
  }

  export type PuntoGpsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PuntoGps to aggregate.
     */
    where?: PuntoGpsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PuntoGps to fetch.
     */
    orderBy?: PuntoGpsOrderByWithRelationInput | PuntoGpsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PuntoGpsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PuntoGps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PuntoGps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PuntoGps
    **/
    _count?: true | PuntoGpsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PuntoGpsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PuntoGpsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PuntoGpsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PuntoGpsMaxAggregateInputType
  }

  export type GetPuntoGpsAggregateType<T extends PuntoGpsAggregateArgs> = {
        [P in keyof T & keyof AggregatePuntoGps]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePuntoGps[P]>
      : GetScalarType<T[P], AggregatePuntoGps[P]>
  }




  export type PuntoGpsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PuntoGpsWhereInput
    orderBy?: PuntoGpsOrderByWithAggregationInput | PuntoGpsOrderByWithAggregationInput[]
    by: PuntoGpsScalarFieldEnum[] | PuntoGpsScalarFieldEnum
    having?: PuntoGpsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PuntoGpsCountAggregateInputType | true
    _avg?: PuntoGpsAvgAggregateInputType
    _sum?: PuntoGpsSumAggregateInputType
    _min?: PuntoGpsMinAggregateInputType
    _max?: PuntoGpsMaxAggregateInputType
  }

  export type PuntoGpsGroupByOutputType = {
    id: number
    viajeId: string
    velocidad: number | null
    precision: number | null
    timestamp: Date
    _count: PuntoGpsCountAggregateOutputType | null
    _avg: PuntoGpsAvgAggregateOutputType | null
    _sum: PuntoGpsSumAggregateOutputType | null
    _min: PuntoGpsMinAggregateOutputType | null
    _max: PuntoGpsMaxAggregateOutputType | null
  }

  type GetPuntoGpsGroupByPayload<T extends PuntoGpsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PuntoGpsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PuntoGpsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PuntoGpsGroupByOutputType[P]>
            : GetScalarType<T[P], PuntoGpsGroupByOutputType[P]>
        }
      >
    >


  export type PuntoGpsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    viajeId?: boolean
    velocidad?: boolean
    precision?: boolean
    timestamp?: boolean
    viaje?: boolean | ViajeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["puntoGps"]>


  export type PuntoGpsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    viajeId?: boolean
    velocidad?: boolean
    precision?: boolean
    timestamp?: boolean
    viaje?: boolean | ViajeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["puntoGps"]>

  export type PuntoGpsSelectScalar = {
    id?: boolean
    viajeId?: boolean
    velocidad?: boolean
    precision?: boolean
    timestamp?: boolean
  }

  export type PuntoGpsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "viajeId" | "velocidad" | "precision" | "timestamp", ExtArgs["result"]["puntoGps"]>
  export type PuntoGpsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    viaje?: boolean | ViajeDefaultArgs<ExtArgs>
  }
  export type PuntoGpsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    viaje?: boolean | ViajeDefaultArgs<ExtArgs>
  }

  export type $PuntoGpsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PuntoGps"
    objects: {
      viaje: Prisma.$ViajePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      viajeId: string
      velocidad: number | null
      precision: number | null
      timestamp: Date
    }, ExtArgs["result"]["puntoGps"]>
    composites: {}
  }

  type PuntoGpsGetPayload<S extends boolean | null | undefined | PuntoGpsDefaultArgs> = $Result.GetResult<Prisma.$PuntoGpsPayload, S>

  type PuntoGpsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PuntoGpsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PuntoGpsCountAggregateInputType | true
    }

  export interface PuntoGpsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PuntoGps'], meta: { name: 'PuntoGps' } }
    /**
     * Find zero or one PuntoGps that matches the filter.
     * @param {PuntoGpsFindUniqueArgs} args - Arguments to find a PuntoGps
     * @example
     * // Get one PuntoGps
     * const puntoGps = await prisma.puntoGps.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PuntoGpsFindUniqueArgs>(args: SelectSubset<T, PuntoGpsFindUniqueArgs<ExtArgs>>): Prisma__PuntoGpsClient<$Result.GetResult<Prisma.$PuntoGpsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PuntoGps that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PuntoGpsFindUniqueOrThrowArgs} args - Arguments to find a PuntoGps
     * @example
     * // Get one PuntoGps
     * const puntoGps = await prisma.puntoGps.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PuntoGpsFindUniqueOrThrowArgs>(args: SelectSubset<T, PuntoGpsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PuntoGpsClient<$Result.GetResult<Prisma.$PuntoGpsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PuntoGps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PuntoGpsFindFirstArgs} args - Arguments to find a PuntoGps
     * @example
     * // Get one PuntoGps
     * const puntoGps = await prisma.puntoGps.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PuntoGpsFindFirstArgs>(args?: SelectSubset<T, PuntoGpsFindFirstArgs<ExtArgs>>): Prisma__PuntoGpsClient<$Result.GetResult<Prisma.$PuntoGpsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PuntoGps that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PuntoGpsFindFirstOrThrowArgs} args - Arguments to find a PuntoGps
     * @example
     * // Get one PuntoGps
     * const puntoGps = await prisma.puntoGps.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PuntoGpsFindFirstOrThrowArgs>(args?: SelectSubset<T, PuntoGpsFindFirstOrThrowArgs<ExtArgs>>): Prisma__PuntoGpsClient<$Result.GetResult<Prisma.$PuntoGpsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PuntoGps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PuntoGpsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PuntoGps
     * const puntoGps = await prisma.puntoGps.findMany()
     * 
     * // Get first 10 PuntoGps
     * const puntoGps = await prisma.puntoGps.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const puntoGpsWithIdOnly = await prisma.puntoGps.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PuntoGpsFindManyArgs>(args?: SelectSubset<T, PuntoGpsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PuntoGpsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Delete a PuntoGps.
     * @param {PuntoGpsDeleteArgs} args - Arguments to delete one PuntoGps.
     * @example
     * // Delete one PuntoGps
     * const PuntoGps = await prisma.puntoGps.delete({
     *   where: {
     *     // ... filter to delete one PuntoGps
     *   }
     * })
     * 
     */
    delete<T extends PuntoGpsDeleteArgs>(args: SelectSubset<T, PuntoGpsDeleteArgs<ExtArgs>>): Prisma__PuntoGpsClient<$Result.GetResult<Prisma.$PuntoGpsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PuntoGps.
     * @param {PuntoGpsUpdateArgs} args - Arguments to update one PuntoGps.
     * @example
     * // Update one PuntoGps
     * const puntoGps = await prisma.puntoGps.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PuntoGpsUpdateArgs>(args: SelectSubset<T, PuntoGpsUpdateArgs<ExtArgs>>): Prisma__PuntoGpsClient<$Result.GetResult<Prisma.$PuntoGpsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PuntoGps.
     * @param {PuntoGpsDeleteManyArgs} args - Arguments to filter PuntoGps to delete.
     * @example
     * // Delete a few PuntoGps
     * const { count } = await prisma.puntoGps.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PuntoGpsDeleteManyArgs>(args?: SelectSubset<T, PuntoGpsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PuntoGps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PuntoGpsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PuntoGps
     * const puntoGps = await prisma.puntoGps.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PuntoGpsUpdateManyArgs>(args: SelectSubset<T, PuntoGpsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PuntoGps and returns the data updated in the database.
     * @param {PuntoGpsUpdateManyAndReturnArgs} args - Arguments to update many PuntoGps.
     * @example
     * // Update many PuntoGps
     * const puntoGps = await prisma.puntoGps.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PuntoGps and only return the `id`
     * const puntoGpsWithIdOnly = await prisma.puntoGps.updateManyAndReturn({
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
    updateManyAndReturn<T extends PuntoGpsUpdateManyAndReturnArgs>(args: SelectSubset<T, PuntoGpsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PuntoGpsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>


    /**
     * Count the number of PuntoGps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PuntoGpsCountArgs} args - Arguments to filter PuntoGps to count.
     * @example
     * // Count the number of PuntoGps
     * const count = await prisma.puntoGps.count({
     *   where: {
     *     // ... the filter for the PuntoGps we want to count
     *   }
     * })
    **/
    count<T extends PuntoGpsCountArgs>(
      args?: Subset<T, PuntoGpsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PuntoGpsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PuntoGps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PuntoGpsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PuntoGpsAggregateArgs>(args: Subset<T, PuntoGpsAggregateArgs>): Prisma.PrismaPromise<GetPuntoGpsAggregateType<T>>

    /**
     * Group by PuntoGps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PuntoGpsGroupByArgs} args - Group by arguments.
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
      T extends PuntoGpsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PuntoGpsGroupByArgs['orderBy'] }
        : { orderBy?: PuntoGpsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PuntoGpsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPuntoGpsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PuntoGps model
   */
  readonly fields: PuntoGpsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PuntoGps.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PuntoGpsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    viaje<T extends ViajeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ViajeDefaultArgs<ExtArgs>>): Prisma__ViajeClient<$Result.GetResult<Prisma.$ViajePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PuntoGps model
   */
  interface PuntoGpsFieldRefs {
    readonly id: FieldRef<"PuntoGps", 'Int'>
    readonly viajeId: FieldRef<"PuntoGps", 'String'>
    readonly velocidad: FieldRef<"PuntoGps", 'Float'>
    readonly precision: FieldRef<"PuntoGps", 'Float'>
    readonly timestamp: FieldRef<"PuntoGps", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PuntoGps findUnique
   */
  export type PuntoGpsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PuntoGps
     */
    select?: PuntoGpsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PuntoGps
     */
    omit?: PuntoGpsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PuntoGpsInclude<ExtArgs> | null
    /**
     * Filter, which PuntoGps to fetch.
     */
    where: PuntoGpsWhereUniqueInput
  }

  /**
   * PuntoGps findUniqueOrThrow
   */
  export type PuntoGpsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PuntoGps
     */
    select?: PuntoGpsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PuntoGps
     */
    omit?: PuntoGpsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PuntoGpsInclude<ExtArgs> | null
    /**
     * Filter, which PuntoGps to fetch.
     */
    where: PuntoGpsWhereUniqueInput
  }

  /**
   * PuntoGps findFirst
   */
  export type PuntoGpsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PuntoGps
     */
    select?: PuntoGpsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PuntoGps
     */
    omit?: PuntoGpsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PuntoGpsInclude<ExtArgs> | null
    /**
     * Filter, which PuntoGps to fetch.
     */
    where?: PuntoGpsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PuntoGps to fetch.
     */
    orderBy?: PuntoGpsOrderByWithRelationInput | PuntoGpsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PuntoGps.
     */
    cursor?: PuntoGpsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PuntoGps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PuntoGps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PuntoGps.
     */
    distinct?: PuntoGpsScalarFieldEnum | PuntoGpsScalarFieldEnum[]
  }

  /**
   * PuntoGps findFirstOrThrow
   */
  export type PuntoGpsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PuntoGps
     */
    select?: PuntoGpsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PuntoGps
     */
    omit?: PuntoGpsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PuntoGpsInclude<ExtArgs> | null
    /**
     * Filter, which PuntoGps to fetch.
     */
    where?: PuntoGpsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PuntoGps to fetch.
     */
    orderBy?: PuntoGpsOrderByWithRelationInput | PuntoGpsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PuntoGps.
     */
    cursor?: PuntoGpsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PuntoGps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PuntoGps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PuntoGps.
     */
    distinct?: PuntoGpsScalarFieldEnum | PuntoGpsScalarFieldEnum[]
  }

  /**
   * PuntoGps findMany
   */
  export type PuntoGpsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PuntoGps
     */
    select?: PuntoGpsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PuntoGps
     */
    omit?: PuntoGpsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PuntoGpsInclude<ExtArgs> | null
    /**
     * Filter, which PuntoGps to fetch.
     */
    where?: PuntoGpsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PuntoGps to fetch.
     */
    orderBy?: PuntoGpsOrderByWithRelationInput | PuntoGpsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PuntoGps.
     */
    cursor?: PuntoGpsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PuntoGps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PuntoGps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PuntoGps.
     */
    distinct?: PuntoGpsScalarFieldEnum | PuntoGpsScalarFieldEnum[]
  }

  /**
   * PuntoGps update
   */
  export type PuntoGpsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PuntoGps
     */
    select?: PuntoGpsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PuntoGps
     */
    omit?: PuntoGpsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PuntoGpsInclude<ExtArgs> | null
    /**
     * The data needed to update a PuntoGps.
     */
    data: XOR<PuntoGpsUpdateInput, PuntoGpsUncheckedUpdateInput>
    /**
     * Choose, which PuntoGps to update.
     */
    where: PuntoGpsWhereUniqueInput
  }

  /**
   * PuntoGps updateMany
   */
  export type PuntoGpsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PuntoGps.
     */
    data: XOR<PuntoGpsUpdateManyMutationInput, PuntoGpsUncheckedUpdateManyInput>
    /**
     * Filter which PuntoGps to update
     */
    where?: PuntoGpsWhereInput
    /**
     * Limit how many PuntoGps to update.
     */
    limit?: number
  }

  /**
   * PuntoGps updateManyAndReturn
   */
  export type PuntoGpsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PuntoGps
     */
    select?: PuntoGpsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PuntoGps
     */
    omit?: PuntoGpsOmit<ExtArgs> | null
    /**
     * The data used to update PuntoGps.
     */
    data: XOR<PuntoGpsUpdateManyMutationInput, PuntoGpsUncheckedUpdateManyInput>
    /**
     * Filter which PuntoGps to update
     */
    where?: PuntoGpsWhereInput
    /**
     * Limit how many PuntoGps to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PuntoGpsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PuntoGps delete
   */
  export type PuntoGpsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PuntoGps
     */
    select?: PuntoGpsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PuntoGps
     */
    omit?: PuntoGpsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PuntoGpsInclude<ExtArgs> | null
    /**
     * Filter which PuntoGps to delete.
     */
    where: PuntoGpsWhereUniqueInput
  }

  /**
   * PuntoGps deleteMany
   */
  export type PuntoGpsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PuntoGps to delete
     */
    where?: PuntoGpsWhereInput
    /**
     * Limit how many PuntoGps to delete.
     */
    limit?: number
  }

  /**
   * PuntoGps without action
   */
  export type PuntoGpsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PuntoGps
     */
    select?: PuntoGpsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PuntoGps
     */
    omit?: PuntoGpsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PuntoGpsInclude<ExtArgs> | null
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


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    cedula: 'cedula',
    email: 'email',
    passwordHash: 'passwordHash',
    rol: 'rol',
    origen: 'origen',
    activo: 'activo',
    createdAt: 'createdAt'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const VehiculoScalarFieldEnum: {
    id: 'id',
    placa: 'placa',
    marca: 'marca',
    modelo: 'modelo',
    tieneGpsFisico: 'tieneGpsFisico',
    polizaUrl: 'polizaUrl',
    soatUrl: 'soatUrl',
    tecnomecanicaUrl: 'tecnomecanicaUrl',
    activo: 'activo',
    createdAt: 'createdAt'
  };

  export type VehiculoScalarFieldEnum = (typeof VehiculoScalarFieldEnum)[keyof typeof VehiculoScalarFieldEnum]


  export const PreoperacionalScalarFieldEnum: {
    id: 'id',
    consecutivo: 'consecutivo',
    fecha: 'fecha',
    respuestas: 'respuestas',
    firmaUrl: 'firmaUrl',
    observaciones: 'observaciones',
    usuarioId: 'usuarioId',
    vehiculoId: 'vehiculoId',
    createdAt: 'createdAt',
    solicitudId: 'solicitudId'
  };

  export type PreoperacionalScalarFieldEnum = (typeof PreoperacionalScalarFieldEnum)[keyof typeof PreoperacionalScalarFieldEnum]


  export const RefreshTokenScalarFieldEnum: {
    id: 'id',
    token: 'token',
    usuarioId: 'usuarioId',
    expiresAt: 'expiresAt',
    revocado: 'revocado',
    createdAt: 'createdAt'
  };

  export type RefreshTokenScalarFieldEnum = (typeof RefreshTokenScalarFieldEnum)[keyof typeof RefreshTokenScalarFieldEnum]


  export const SolicitudScalarFieldEnum: {
    id: 'id',
    usuarioSolicitanteId: 'usuarioSolicitanteId',
    motivo: 'motivo',
    destino: 'destino',
    fechaRequerida: 'fechaRequerida',
    estado: 'estado',
    vehiculoAsignadoId: 'vehiculoAsignadoId',
    aprobadoPorId: 'aprobadoPorId',
    createdAt: 'createdAt'
  };

  export type SolicitudScalarFieldEnum = (typeof SolicitudScalarFieldEnum)[keyof typeof SolicitudScalarFieldEnum]


  export const ViajeScalarFieldEnum: {
    id: 'id',
    vehiculoId: 'vehiculoId',
    conductorId: 'conductorId',
    preoperacionalId: 'preoperacionalId',
    horaInicio: 'horaInicio',
    horaFin: 'horaFin',
    distanciaTotalKm: 'distanciaTotalKm',
    velocidadPromedio: 'velocidadPromedio',
    velocidadMaxima: 'velocidadMaxima',
    estado: 'estado',
    archivoRutaUrl: 'archivoRutaUrl',
    createdAt: 'createdAt'
  };

  export type ViajeScalarFieldEnum = (typeof ViajeScalarFieldEnum)[keyof typeof ViajeScalarFieldEnum]


  export const PuntoGpsScalarFieldEnum: {
    id: 'id',
    viajeId: 'viajeId',
    velocidad: 'velocidad',
    precision: 'precision',
    timestamp: 'timestamp'
  };

  export type PuntoGpsScalarFieldEnum = (typeof PuntoGpsScalarFieldEnum)[keyof typeof PuntoGpsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'Rol'
   */
  export type EnumRolFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Rol'>
    


  /**
   * Reference to a field of type 'Rol[]'
   */
  export type ListEnumRolFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Rol[]'>
    


  /**
   * Reference to a field of type 'Origen'
   */
  export type EnumOrigenFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Origen'>
    


  /**
   * Reference to a field of type 'Origen[]'
   */
  export type ListEnumOrigenFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Origen[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'EstadoSolicitud'
   */
  export type EnumEstadoSolicitudFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoSolicitud'>
    


  /**
   * Reference to a field of type 'EstadoSolicitud[]'
   */
  export type ListEnumEstadoSolicitudFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoSolicitud[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'EstadoViaje'
   */
  export type EnumEstadoViajeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoViaje'>
    


  /**
   * Reference to a field of type 'EstadoViaje[]'
   */
  export type ListEnumEstadoViajeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoViaje[]'>
    
  /**
   * Deep Input Types
   */


  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: IntFilter<"Usuario"> | number
    nombre?: StringFilter<"Usuario"> | string
    cedula?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    passwordHash?: StringFilter<"Usuario"> | string
    rol?: EnumRolFilter<"Usuario"> | $Enums.Rol
    origen?: EnumOrigenFilter<"Usuario"> | $Enums.Origen
    activo?: BoolFilter<"Usuario"> | boolean
    createdAt?: DateTimeFilter<"Usuario"> | Date | string
    preoperacionales?: PreoperacionalListRelationFilter
    refreshTokens?: RefreshTokenListRelationFilter
    solicitudesCreadas?: SolicitudListRelationFilter
    solicitudesAprobadas?: SolicitudListRelationFilter
    viajes?: ViajeListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    cedula?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    rol?: SortOrder
    origen?: SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
    preoperacionales?: PreoperacionalOrderByRelationAggregateInput
    refreshTokens?: RefreshTokenOrderByRelationAggregateInput
    solicitudesCreadas?: SolicitudOrderByRelationAggregateInput
    solicitudesAprobadas?: SolicitudOrderByRelationAggregateInput
    viajes?: ViajeOrderByRelationAggregateInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    cedula?: string
    email?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    nombre?: StringFilter<"Usuario"> | string
    passwordHash?: StringFilter<"Usuario"> | string
    rol?: EnumRolFilter<"Usuario"> | $Enums.Rol
    origen?: EnumOrigenFilter<"Usuario"> | $Enums.Origen
    activo?: BoolFilter<"Usuario"> | boolean
    createdAt?: DateTimeFilter<"Usuario"> | Date | string
    preoperacionales?: PreoperacionalListRelationFilter
    refreshTokens?: RefreshTokenListRelationFilter
    solicitudesCreadas?: SolicitudListRelationFilter
    solicitudesAprobadas?: SolicitudListRelationFilter
    viajes?: ViajeListRelationFilter
  }, "id" | "cedula" | "email">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    cedula?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    rol?: SortOrder
    origen?: SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Usuario"> | number
    nombre?: StringWithAggregatesFilter<"Usuario"> | string
    cedula?: StringWithAggregatesFilter<"Usuario"> | string
    email?: StringWithAggregatesFilter<"Usuario"> | string
    passwordHash?: StringWithAggregatesFilter<"Usuario"> | string
    rol?: EnumRolWithAggregatesFilter<"Usuario"> | $Enums.Rol
    origen?: EnumOrigenWithAggregatesFilter<"Usuario"> | $Enums.Origen
    activo?: BoolWithAggregatesFilter<"Usuario"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
  }

  export type VehiculoWhereInput = {
    AND?: VehiculoWhereInput | VehiculoWhereInput[]
    OR?: VehiculoWhereInput[]
    NOT?: VehiculoWhereInput | VehiculoWhereInput[]
    id?: IntFilter<"Vehiculo"> | number
    placa?: StringFilter<"Vehiculo"> | string
    marca?: StringNullableFilter<"Vehiculo"> | string | null
    modelo?: StringNullableFilter<"Vehiculo"> | string | null
    tieneGpsFisico?: BoolFilter<"Vehiculo"> | boolean
    polizaUrl?: StringNullableFilter<"Vehiculo"> | string | null
    soatUrl?: StringNullableFilter<"Vehiculo"> | string | null
    tecnomecanicaUrl?: StringNullableFilter<"Vehiculo"> | string | null
    activo?: BoolFilter<"Vehiculo"> | boolean
    createdAt?: DateTimeFilter<"Vehiculo"> | Date | string
    preoperacionales?: PreoperacionalListRelationFilter
    solicitudes?: SolicitudListRelationFilter
    viajes?: ViajeListRelationFilter
  }

  export type VehiculoOrderByWithRelationInput = {
    id?: SortOrder
    placa?: SortOrder
    marca?: SortOrderInput | SortOrder
    modelo?: SortOrderInput | SortOrder
    tieneGpsFisico?: SortOrder
    polizaUrl?: SortOrderInput | SortOrder
    soatUrl?: SortOrderInput | SortOrder
    tecnomecanicaUrl?: SortOrderInput | SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
    preoperacionales?: PreoperacionalOrderByRelationAggregateInput
    solicitudes?: SolicitudOrderByRelationAggregateInput
    viajes?: ViajeOrderByRelationAggregateInput
  }

  export type VehiculoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    placa?: string
    AND?: VehiculoWhereInput | VehiculoWhereInput[]
    OR?: VehiculoWhereInput[]
    NOT?: VehiculoWhereInput | VehiculoWhereInput[]
    marca?: StringNullableFilter<"Vehiculo"> | string | null
    modelo?: StringNullableFilter<"Vehiculo"> | string | null
    tieneGpsFisico?: BoolFilter<"Vehiculo"> | boolean
    polizaUrl?: StringNullableFilter<"Vehiculo"> | string | null
    soatUrl?: StringNullableFilter<"Vehiculo"> | string | null
    tecnomecanicaUrl?: StringNullableFilter<"Vehiculo"> | string | null
    activo?: BoolFilter<"Vehiculo"> | boolean
    createdAt?: DateTimeFilter<"Vehiculo"> | Date | string
    preoperacionales?: PreoperacionalListRelationFilter
    solicitudes?: SolicitudListRelationFilter
    viajes?: ViajeListRelationFilter
  }, "id" | "placa">

  export type VehiculoOrderByWithAggregationInput = {
    id?: SortOrder
    placa?: SortOrder
    marca?: SortOrderInput | SortOrder
    modelo?: SortOrderInput | SortOrder
    tieneGpsFisico?: SortOrder
    polizaUrl?: SortOrderInput | SortOrder
    soatUrl?: SortOrderInput | SortOrder
    tecnomecanicaUrl?: SortOrderInput | SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
    _count?: VehiculoCountOrderByAggregateInput
    _avg?: VehiculoAvgOrderByAggregateInput
    _max?: VehiculoMaxOrderByAggregateInput
    _min?: VehiculoMinOrderByAggregateInput
    _sum?: VehiculoSumOrderByAggregateInput
  }

  export type VehiculoScalarWhereWithAggregatesInput = {
    AND?: VehiculoScalarWhereWithAggregatesInput | VehiculoScalarWhereWithAggregatesInput[]
    OR?: VehiculoScalarWhereWithAggregatesInput[]
    NOT?: VehiculoScalarWhereWithAggregatesInput | VehiculoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Vehiculo"> | number
    placa?: StringWithAggregatesFilter<"Vehiculo"> | string
    marca?: StringNullableWithAggregatesFilter<"Vehiculo"> | string | null
    modelo?: StringNullableWithAggregatesFilter<"Vehiculo"> | string | null
    tieneGpsFisico?: BoolWithAggregatesFilter<"Vehiculo"> | boolean
    polizaUrl?: StringNullableWithAggregatesFilter<"Vehiculo"> | string | null
    soatUrl?: StringNullableWithAggregatesFilter<"Vehiculo"> | string | null
    tecnomecanicaUrl?: StringNullableWithAggregatesFilter<"Vehiculo"> | string | null
    activo?: BoolWithAggregatesFilter<"Vehiculo"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Vehiculo"> | Date | string
  }

  export type PreoperacionalWhereInput = {
    AND?: PreoperacionalWhereInput | PreoperacionalWhereInput[]
    OR?: PreoperacionalWhereInput[]
    NOT?: PreoperacionalWhereInput | PreoperacionalWhereInput[]
    id?: IntFilter<"Preoperacional"> | number
    consecutivo?: IntFilter<"Preoperacional"> | number
    fecha?: DateTimeFilter<"Preoperacional"> | Date | string
    respuestas?: JsonFilter<"Preoperacional">
    firmaUrl?: StringNullableFilter<"Preoperacional"> | string | null
    observaciones?: StringNullableFilter<"Preoperacional"> | string | null
    usuarioId?: IntFilter<"Preoperacional"> | number
    vehiculoId?: IntFilter<"Preoperacional"> | number
    createdAt?: DateTimeFilter<"Preoperacional"> | Date | string
    solicitudId?: IntNullableFilter<"Preoperacional"> | number | null
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    vehiculo?: XOR<VehiculoScalarRelationFilter, VehiculoWhereInput>
    solicitud?: XOR<SolicitudNullableScalarRelationFilter, SolicitudWhereInput> | null
    viajes?: ViajeListRelationFilter
  }

  export type PreoperacionalOrderByWithRelationInput = {
    id?: SortOrder
    consecutivo?: SortOrder
    fecha?: SortOrder
    respuestas?: SortOrder
    firmaUrl?: SortOrderInput | SortOrder
    observaciones?: SortOrderInput | SortOrder
    usuarioId?: SortOrder
    vehiculoId?: SortOrder
    createdAt?: SortOrder
    solicitudId?: SortOrderInput | SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    vehiculo?: VehiculoOrderByWithRelationInput
    solicitud?: SolicitudOrderByWithRelationInput
    viajes?: ViajeOrderByRelationAggregateInput
  }

  export type PreoperacionalWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    consecutivo?: number
    AND?: PreoperacionalWhereInput | PreoperacionalWhereInput[]
    OR?: PreoperacionalWhereInput[]
    NOT?: PreoperacionalWhereInput | PreoperacionalWhereInput[]
    fecha?: DateTimeFilter<"Preoperacional"> | Date | string
    respuestas?: JsonFilter<"Preoperacional">
    firmaUrl?: StringNullableFilter<"Preoperacional"> | string | null
    observaciones?: StringNullableFilter<"Preoperacional"> | string | null
    usuarioId?: IntFilter<"Preoperacional"> | number
    vehiculoId?: IntFilter<"Preoperacional"> | number
    createdAt?: DateTimeFilter<"Preoperacional"> | Date | string
    solicitudId?: IntNullableFilter<"Preoperacional"> | number | null
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    vehiculo?: XOR<VehiculoScalarRelationFilter, VehiculoWhereInput>
    solicitud?: XOR<SolicitudNullableScalarRelationFilter, SolicitudWhereInput> | null
    viajes?: ViajeListRelationFilter
  }, "id" | "consecutivo">

  export type PreoperacionalOrderByWithAggregationInput = {
    id?: SortOrder
    consecutivo?: SortOrder
    fecha?: SortOrder
    respuestas?: SortOrder
    firmaUrl?: SortOrderInput | SortOrder
    observaciones?: SortOrderInput | SortOrder
    usuarioId?: SortOrder
    vehiculoId?: SortOrder
    createdAt?: SortOrder
    solicitudId?: SortOrderInput | SortOrder
    _count?: PreoperacionalCountOrderByAggregateInput
    _avg?: PreoperacionalAvgOrderByAggregateInput
    _max?: PreoperacionalMaxOrderByAggregateInput
    _min?: PreoperacionalMinOrderByAggregateInput
    _sum?: PreoperacionalSumOrderByAggregateInput
  }

  export type PreoperacionalScalarWhereWithAggregatesInput = {
    AND?: PreoperacionalScalarWhereWithAggregatesInput | PreoperacionalScalarWhereWithAggregatesInput[]
    OR?: PreoperacionalScalarWhereWithAggregatesInput[]
    NOT?: PreoperacionalScalarWhereWithAggregatesInput | PreoperacionalScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Preoperacional"> | number
    consecutivo?: IntWithAggregatesFilter<"Preoperacional"> | number
    fecha?: DateTimeWithAggregatesFilter<"Preoperacional"> | Date | string
    respuestas?: JsonWithAggregatesFilter<"Preoperacional">
    firmaUrl?: StringNullableWithAggregatesFilter<"Preoperacional"> | string | null
    observaciones?: StringNullableWithAggregatesFilter<"Preoperacional"> | string | null
    usuarioId?: IntWithAggregatesFilter<"Preoperacional"> | number
    vehiculoId?: IntWithAggregatesFilter<"Preoperacional"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Preoperacional"> | Date | string
    solicitudId?: IntNullableWithAggregatesFilter<"Preoperacional"> | number | null
  }

  export type RefreshTokenWhereInput = {
    AND?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    OR?: RefreshTokenWhereInput[]
    NOT?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    id?: IntFilter<"RefreshToken"> | number
    token?: StringFilter<"RefreshToken"> | string
    usuarioId?: IntFilter<"RefreshToken"> | number
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    revocado?: BoolFilter<"RefreshToken"> | boolean
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type RefreshTokenOrderByWithRelationInput = {
    id?: SortOrder
    token?: SortOrder
    usuarioId?: SortOrder
    expiresAt?: SortOrder
    revocado?: SortOrder
    createdAt?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
  }

  export type RefreshTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    token?: string
    AND?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    OR?: RefreshTokenWhereInput[]
    NOT?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    usuarioId?: IntFilter<"RefreshToken"> | number
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    revocado?: BoolFilter<"RefreshToken"> | boolean
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "id" | "token">

  export type RefreshTokenOrderByWithAggregationInput = {
    id?: SortOrder
    token?: SortOrder
    usuarioId?: SortOrder
    expiresAt?: SortOrder
    revocado?: SortOrder
    createdAt?: SortOrder
    _count?: RefreshTokenCountOrderByAggregateInput
    _avg?: RefreshTokenAvgOrderByAggregateInput
    _max?: RefreshTokenMaxOrderByAggregateInput
    _min?: RefreshTokenMinOrderByAggregateInput
    _sum?: RefreshTokenSumOrderByAggregateInput
  }

  export type RefreshTokenScalarWhereWithAggregatesInput = {
    AND?: RefreshTokenScalarWhereWithAggregatesInput | RefreshTokenScalarWhereWithAggregatesInput[]
    OR?: RefreshTokenScalarWhereWithAggregatesInput[]
    NOT?: RefreshTokenScalarWhereWithAggregatesInput | RefreshTokenScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RefreshToken"> | number
    token?: StringWithAggregatesFilter<"RefreshToken"> | string
    usuarioId?: IntWithAggregatesFilter<"RefreshToken"> | number
    expiresAt?: DateTimeWithAggregatesFilter<"RefreshToken"> | Date | string
    revocado?: BoolWithAggregatesFilter<"RefreshToken"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"RefreshToken"> | Date | string
  }

  export type SolicitudWhereInput = {
    AND?: SolicitudWhereInput | SolicitudWhereInput[]
    OR?: SolicitudWhereInput[]
    NOT?: SolicitudWhereInput | SolicitudWhereInput[]
    id?: IntFilter<"Solicitud"> | number
    usuarioSolicitanteId?: IntFilter<"Solicitud"> | number
    motivo?: StringFilter<"Solicitud"> | string
    destino?: StringFilter<"Solicitud"> | string
    fechaRequerida?: DateTimeFilter<"Solicitud"> | Date | string
    estado?: EnumEstadoSolicitudFilter<"Solicitud"> | $Enums.EstadoSolicitud
    vehiculoAsignadoId?: IntNullableFilter<"Solicitud"> | number | null
    aprobadoPorId?: IntNullableFilter<"Solicitud"> | number | null
    createdAt?: DateTimeFilter<"Solicitud"> | Date | string
    usuarioSolicitante?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    vehiculoAsignado?: XOR<VehiculoNullableScalarRelationFilter, VehiculoWhereInput> | null
    aprobadoPor?: XOR<UsuarioNullableScalarRelationFilter, UsuarioWhereInput> | null
    preoperacionales?: PreoperacionalListRelationFilter
  }

  export type SolicitudOrderByWithRelationInput = {
    id?: SortOrder
    usuarioSolicitanteId?: SortOrder
    motivo?: SortOrder
    destino?: SortOrder
    fechaRequerida?: SortOrder
    estado?: SortOrder
    vehiculoAsignadoId?: SortOrderInput | SortOrder
    aprobadoPorId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    usuarioSolicitante?: UsuarioOrderByWithRelationInput
    vehiculoAsignado?: VehiculoOrderByWithRelationInput
    aprobadoPor?: UsuarioOrderByWithRelationInput
    preoperacionales?: PreoperacionalOrderByRelationAggregateInput
  }

  export type SolicitudWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SolicitudWhereInput | SolicitudWhereInput[]
    OR?: SolicitudWhereInput[]
    NOT?: SolicitudWhereInput | SolicitudWhereInput[]
    usuarioSolicitanteId?: IntFilter<"Solicitud"> | number
    motivo?: StringFilter<"Solicitud"> | string
    destino?: StringFilter<"Solicitud"> | string
    fechaRequerida?: DateTimeFilter<"Solicitud"> | Date | string
    estado?: EnumEstadoSolicitudFilter<"Solicitud"> | $Enums.EstadoSolicitud
    vehiculoAsignadoId?: IntNullableFilter<"Solicitud"> | number | null
    aprobadoPorId?: IntNullableFilter<"Solicitud"> | number | null
    createdAt?: DateTimeFilter<"Solicitud"> | Date | string
    usuarioSolicitante?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    vehiculoAsignado?: XOR<VehiculoNullableScalarRelationFilter, VehiculoWhereInput> | null
    aprobadoPor?: XOR<UsuarioNullableScalarRelationFilter, UsuarioWhereInput> | null
    preoperacionales?: PreoperacionalListRelationFilter
  }, "id">

  export type SolicitudOrderByWithAggregationInput = {
    id?: SortOrder
    usuarioSolicitanteId?: SortOrder
    motivo?: SortOrder
    destino?: SortOrder
    fechaRequerida?: SortOrder
    estado?: SortOrder
    vehiculoAsignadoId?: SortOrderInput | SortOrder
    aprobadoPorId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: SolicitudCountOrderByAggregateInput
    _avg?: SolicitudAvgOrderByAggregateInput
    _max?: SolicitudMaxOrderByAggregateInput
    _min?: SolicitudMinOrderByAggregateInput
    _sum?: SolicitudSumOrderByAggregateInput
  }

  export type SolicitudScalarWhereWithAggregatesInput = {
    AND?: SolicitudScalarWhereWithAggregatesInput | SolicitudScalarWhereWithAggregatesInput[]
    OR?: SolicitudScalarWhereWithAggregatesInput[]
    NOT?: SolicitudScalarWhereWithAggregatesInput | SolicitudScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Solicitud"> | number
    usuarioSolicitanteId?: IntWithAggregatesFilter<"Solicitud"> | number
    motivo?: StringWithAggregatesFilter<"Solicitud"> | string
    destino?: StringWithAggregatesFilter<"Solicitud"> | string
    fechaRequerida?: DateTimeWithAggregatesFilter<"Solicitud"> | Date | string
    estado?: EnumEstadoSolicitudWithAggregatesFilter<"Solicitud"> | $Enums.EstadoSolicitud
    vehiculoAsignadoId?: IntNullableWithAggregatesFilter<"Solicitud"> | number | null
    aprobadoPorId?: IntNullableWithAggregatesFilter<"Solicitud"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Solicitud"> | Date | string
  }

  export type ViajeWhereInput = {
    AND?: ViajeWhereInput | ViajeWhereInput[]
    OR?: ViajeWhereInput[]
    NOT?: ViajeWhereInput | ViajeWhereInput[]
    id?: StringFilter<"Viaje"> | string
    vehiculoId?: IntFilter<"Viaje"> | number
    conductorId?: IntFilter<"Viaje"> | number
    preoperacionalId?: IntNullableFilter<"Viaje"> | number | null
    horaInicio?: DateTimeFilter<"Viaje"> | Date | string
    horaFin?: DateTimeNullableFilter<"Viaje"> | Date | string | null
    distanciaTotalKm?: FloatNullableFilter<"Viaje"> | number | null
    velocidadPromedio?: FloatNullableFilter<"Viaje"> | number | null
    velocidadMaxima?: FloatNullableFilter<"Viaje"> | number | null
    estado?: EnumEstadoViajeFilter<"Viaje"> | $Enums.EstadoViaje
    archivoRutaUrl?: StringNullableFilter<"Viaje"> | string | null
    createdAt?: DateTimeFilter<"Viaje"> | Date | string
    vehiculo?: XOR<VehiculoScalarRelationFilter, VehiculoWhereInput>
    conductor?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    preoperacional?: XOR<PreoperacionalNullableScalarRelationFilter, PreoperacionalWhereInput> | null
    puntosGps?: PuntoGpsListRelationFilter
  }

  export type ViajeOrderByWithRelationInput = {
    id?: SortOrder
    vehiculoId?: SortOrder
    conductorId?: SortOrder
    preoperacionalId?: SortOrderInput | SortOrder
    horaInicio?: SortOrder
    horaFin?: SortOrderInput | SortOrder
    distanciaTotalKm?: SortOrderInput | SortOrder
    velocidadPromedio?: SortOrderInput | SortOrder
    velocidadMaxima?: SortOrderInput | SortOrder
    estado?: SortOrder
    archivoRutaUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    vehiculo?: VehiculoOrderByWithRelationInput
    conductor?: UsuarioOrderByWithRelationInput
    preoperacional?: PreoperacionalOrderByWithRelationInput
    puntosGps?: PuntoGpsOrderByRelationAggregateInput
  }

  export type ViajeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ViajeWhereInput | ViajeWhereInput[]
    OR?: ViajeWhereInput[]
    NOT?: ViajeWhereInput | ViajeWhereInput[]
    vehiculoId?: IntFilter<"Viaje"> | number
    conductorId?: IntFilter<"Viaje"> | number
    preoperacionalId?: IntNullableFilter<"Viaje"> | number | null
    horaInicio?: DateTimeFilter<"Viaje"> | Date | string
    horaFin?: DateTimeNullableFilter<"Viaje"> | Date | string | null
    distanciaTotalKm?: FloatNullableFilter<"Viaje"> | number | null
    velocidadPromedio?: FloatNullableFilter<"Viaje"> | number | null
    velocidadMaxima?: FloatNullableFilter<"Viaje"> | number | null
    estado?: EnumEstadoViajeFilter<"Viaje"> | $Enums.EstadoViaje
    archivoRutaUrl?: StringNullableFilter<"Viaje"> | string | null
    createdAt?: DateTimeFilter<"Viaje"> | Date | string
    vehiculo?: XOR<VehiculoScalarRelationFilter, VehiculoWhereInput>
    conductor?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    preoperacional?: XOR<PreoperacionalNullableScalarRelationFilter, PreoperacionalWhereInput> | null
    puntosGps?: PuntoGpsListRelationFilter
  }, "id">

  export type ViajeOrderByWithAggregationInput = {
    id?: SortOrder
    vehiculoId?: SortOrder
    conductorId?: SortOrder
    preoperacionalId?: SortOrderInput | SortOrder
    horaInicio?: SortOrder
    horaFin?: SortOrderInput | SortOrder
    distanciaTotalKm?: SortOrderInput | SortOrder
    velocidadPromedio?: SortOrderInput | SortOrder
    velocidadMaxima?: SortOrderInput | SortOrder
    estado?: SortOrder
    archivoRutaUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ViajeCountOrderByAggregateInput
    _avg?: ViajeAvgOrderByAggregateInput
    _max?: ViajeMaxOrderByAggregateInput
    _min?: ViajeMinOrderByAggregateInput
    _sum?: ViajeSumOrderByAggregateInput
  }

  export type ViajeScalarWhereWithAggregatesInput = {
    AND?: ViajeScalarWhereWithAggregatesInput | ViajeScalarWhereWithAggregatesInput[]
    OR?: ViajeScalarWhereWithAggregatesInput[]
    NOT?: ViajeScalarWhereWithAggregatesInput | ViajeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Viaje"> | string
    vehiculoId?: IntWithAggregatesFilter<"Viaje"> | number
    conductorId?: IntWithAggregatesFilter<"Viaje"> | number
    preoperacionalId?: IntNullableWithAggregatesFilter<"Viaje"> | number | null
    horaInicio?: DateTimeWithAggregatesFilter<"Viaje"> | Date | string
    horaFin?: DateTimeNullableWithAggregatesFilter<"Viaje"> | Date | string | null
    distanciaTotalKm?: FloatNullableWithAggregatesFilter<"Viaje"> | number | null
    velocidadPromedio?: FloatNullableWithAggregatesFilter<"Viaje"> | number | null
    velocidadMaxima?: FloatNullableWithAggregatesFilter<"Viaje"> | number | null
    estado?: EnumEstadoViajeWithAggregatesFilter<"Viaje"> | $Enums.EstadoViaje
    archivoRutaUrl?: StringNullableWithAggregatesFilter<"Viaje"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Viaje"> | Date | string
  }

  export type PuntoGpsWhereInput = {
    AND?: PuntoGpsWhereInput | PuntoGpsWhereInput[]
    OR?: PuntoGpsWhereInput[]
    NOT?: PuntoGpsWhereInput | PuntoGpsWhereInput[]
    id?: IntFilter<"PuntoGps"> | number
    viajeId?: StringFilter<"PuntoGps"> | string
    velocidad?: FloatNullableFilter<"PuntoGps"> | number | null
    precision?: FloatNullableFilter<"PuntoGps"> | number | null
    timestamp?: DateTimeFilter<"PuntoGps"> | Date | string
    viaje?: XOR<ViajeScalarRelationFilter, ViajeWhereInput>
  }

  export type PuntoGpsOrderByWithRelationInput = {
    id?: SortOrder
    viajeId?: SortOrder
    velocidad?: SortOrderInput | SortOrder
    precision?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    viaje?: ViajeOrderByWithRelationInput
  }

  export type PuntoGpsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PuntoGpsWhereInput | PuntoGpsWhereInput[]
    OR?: PuntoGpsWhereInput[]
    NOT?: PuntoGpsWhereInput | PuntoGpsWhereInput[]
    viajeId?: StringFilter<"PuntoGps"> | string
    velocidad?: FloatNullableFilter<"PuntoGps"> | number | null
    precision?: FloatNullableFilter<"PuntoGps"> | number | null
    timestamp?: DateTimeFilter<"PuntoGps"> | Date | string
    viaje?: XOR<ViajeScalarRelationFilter, ViajeWhereInput>
  }, "id">

  export type PuntoGpsOrderByWithAggregationInput = {
    id?: SortOrder
    viajeId?: SortOrder
    velocidad?: SortOrderInput | SortOrder
    precision?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    _count?: PuntoGpsCountOrderByAggregateInput
    _avg?: PuntoGpsAvgOrderByAggregateInput
    _max?: PuntoGpsMaxOrderByAggregateInput
    _min?: PuntoGpsMinOrderByAggregateInput
    _sum?: PuntoGpsSumOrderByAggregateInput
  }

  export type PuntoGpsScalarWhereWithAggregatesInput = {
    AND?: PuntoGpsScalarWhereWithAggregatesInput | PuntoGpsScalarWhereWithAggregatesInput[]
    OR?: PuntoGpsScalarWhereWithAggregatesInput[]
    NOT?: PuntoGpsScalarWhereWithAggregatesInput | PuntoGpsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PuntoGps"> | number
    viajeId?: StringWithAggregatesFilter<"PuntoGps"> | string
    velocidad?: FloatNullableWithAggregatesFilter<"PuntoGps"> | number | null
    precision?: FloatNullableWithAggregatesFilter<"PuntoGps"> | number | null
    timestamp?: DateTimeWithAggregatesFilter<"PuntoGps"> | Date | string
  }

  export type UsuarioCreateInput = {
    nombre: string
    cedula: string
    email: string
    passwordHash: string
    rol: $Enums.Rol
    origen: $Enums.Origen
    activo?: boolean
    createdAt?: Date | string
    preoperacionales?: PreoperacionalCreateNestedManyWithoutUsuarioInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUsuarioInput
    solicitudesCreadas?: SolicitudCreateNestedManyWithoutUsuarioSolicitanteInput
    solicitudesAprobadas?: SolicitudCreateNestedManyWithoutAprobadoPorInput
    viajes?: ViajeCreateNestedManyWithoutConductorInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: number
    nombre: string
    cedula: string
    email: string
    passwordHash: string
    rol: $Enums.Rol
    origen: $Enums.Origen
    activo?: boolean
    createdAt?: Date | string
    preoperacionales?: PreoperacionalUncheckedCreateNestedManyWithoutUsuarioInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUsuarioInput
    solicitudesCreadas?: SolicitudUncheckedCreateNestedManyWithoutUsuarioSolicitanteInput
    solicitudesAprobadas?: SolicitudUncheckedCreateNestedManyWithoutAprobadoPorInput
    viajes?: ViajeUncheckedCreateNestedManyWithoutConductorInput
  }

  export type UsuarioUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    cedula?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    origen?: EnumOrigenFieldUpdateOperationsInput | $Enums.Origen
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    preoperacionales?: PreoperacionalUpdateManyWithoutUsuarioNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUsuarioNestedInput
    solicitudesCreadas?: SolicitudUpdateManyWithoutUsuarioSolicitanteNestedInput
    solicitudesAprobadas?: SolicitudUpdateManyWithoutAprobadoPorNestedInput
    viajes?: ViajeUpdateManyWithoutConductorNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    cedula?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    origen?: EnumOrigenFieldUpdateOperationsInput | $Enums.Origen
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    preoperacionales?: PreoperacionalUncheckedUpdateManyWithoutUsuarioNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUsuarioNestedInput
    solicitudesCreadas?: SolicitudUncheckedUpdateManyWithoutUsuarioSolicitanteNestedInput
    solicitudesAprobadas?: SolicitudUncheckedUpdateManyWithoutAprobadoPorNestedInput
    viajes?: ViajeUncheckedUpdateManyWithoutConductorNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: number
    nombre: string
    cedula: string
    email: string
    passwordHash: string
    rol: $Enums.Rol
    origen: $Enums.Origen
    activo?: boolean
    createdAt?: Date | string
  }

  export type UsuarioUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    cedula?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    origen?: EnumOrigenFieldUpdateOperationsInput | $Enums.Origen
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    cedula?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    origen?: EnumOrigenFieldUpdateOperationsInput | $Enums.Origen
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehiculoCreateInput = {
    placa: string
    marca?: string | null
    modelo?: string | null
    tieneGpsFisico?: boolean
    polizaUrl?: string | null
    soatUrl?: string | null
    tecnomecanicaUrl?: string | null
    activo?: boolean
    createdAt?: Date | string
    preoperacionales?: PreoperacionalCreateNestedManyWithoutVehiculoInput
    solicitudes?: SolicitudCreateNestedManyWithoutVehiculoAsignadoInput
    viajes?: ViajeCreateNestedManyWithoutVehiculoInput
  }

  export type VehiculoUncheckedCreateInput = {
    id?: number
    placa: string
    marca?: string | null
    modelo?: string | null
    tieneGpsFisico?: boolean
    polizaUrl?: string | null
    soatUrl?: string | null
    tecnomecanicaUrl?: string | null
    activo?: boolean
    createdAt?: Date | string
    preoperacionales?: PreoperacionalUncheckedCreateNestedManyWithoutVehiculoInput
    solicitudes?: SolicitudUncheckedCreateNestedManyWithoutVehiculoAsignadoInput
    viajes?: ViajeUncheckedCreateNestedManyWithoutVehiculoInput
  }

  export type VehiculoUpdateInput = {
    placa?: StringFieldUpdateOperationsInput | string
    marca?: NullableStringFieldUpdateOperationsInput | string | null
    modelo?: NullableStringFieldUpdateOperationsInput | string | null
    tieneGpsFisico?: BoolFieldUpdateOperationsInput | boolean
    polizaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    soatUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tecnomecanicaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    preoperacionales?: PreoperacionalUpdateManyWithoutVehiculoNestedInput
    solicitudes?: SolicitudUpdateManyWithoutVehiculoAsignadoNestedInput
    viajes?: ViajeUpdateManyWithoutVehiculoNestedInput
  }

  export type VehiculoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    placa?: StringFieldUpdateOperationsInput | string
    marca?: NullableStringFieldUpdateOperationsInput | string | null
    modelo?: NullableStringFieldUpdateOperationsInput | string | null
    tieneGpsFisico?: BoolFieldUpdateOperationsInput | boolean
    polizaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    soatUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tecnomecanicaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    preoperacionales?: PreoperacionalUncheckedUpdateManyWithoutVehiculoNestedInput
    solicitudes?: SolicitudUncheckedUpdateManyWithoutVehiculoAsignadoNestedInput
    viajes?: ViajeUncheckedUpdateManyWithoutVehiculoNestedInput
  }

  export type VehiculoCreateManyInput = {
    id?: number
    placa: string
    marca?: string | null
    modelo?: string | null
    tieneGpsFisico?: boolean
    polizaUrl?: string | null
    soatUrl?: string | null
    tecnomecanicaUrl?: string | null
    activo?: boolean
    createdAt?: Date | string
  }

  export type VehiculoUpdateManyMutationInput = {
    placa?: StringFieldUpdateOperationsInput | string
    marca?: NullableStringFieldUpdateOperationsInput | string | null
    modelo?: NullableStringFieldUpdateOperationsInput | string | null
    tieneGpsFisico?: BoolFieldUpdateOperationsInput | boolean
    polizaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    soatUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tecnomecanicaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehiculoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    placa?: StringFieldUpdateOperationsInput | string
    marca?: NullableStringFieldUpdateOperationsInput | string | null
    modelo?: NullableStringFieldUpdateOperationsInput | string | null
    tieneGpsFisico?: BoolFieldUpdateOperationsInput | boolean
    polizaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    soatUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tecnomecanicaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PreoperacionalCreateInput = {
    consecutivo?: number
    fecha?: Date | string
    respuestas: JsonNullValueInput | InputJsonValue
    firmaUrl?: string | null
    observaciones?: string | null
    createdAt?: Date | string
    usuario: UsuarioCreateNestedOneWithoutPreoperacionalesInput
    vehiculo: VehiculoCreateNestedOneWithoutPreoperacionalesInput
    solicitud?: SolicitudCreateNestedOneWithoutPreoperacionalesInput
    viajes?: ViajeCreateNestedManyWithoutPreoperacionalInput
  }

  export type PreoperacionalUncheckedCreateInput = {
    id?: number
    consecutivo?: number
    fecha?: Date | string
    respuestas: JsonNullValueInput | InputJsonValue
    firmaUrl?: string | null
    observaciones?: string | null
    usuarioId: number
    vehiculoId: number
    createdAt?: Date | string
    solicitudId?: number | null
    viajes?: ViajeUncheckedCreateNestedManyWithoutPreoperacionalInput
  }

  export type PreoperacionalUpdateInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    respuestas?: JsonNullValueInput | InputJsonValue
    firmaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutPreoperacionalesNestedInput
    vehiculo?: VehiculoUpdateOneRequiredWithoutPreoperacionalesNestedInput
    solicitud?: SolicitudUpdateOneWithoutPreoperacionalesNestedInput
    viajes?: ViajeUpdateManyWithoutPreoperacionalNestedInput
  }

  export type PreoperacionalUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    consecutivo?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    respuestas?: JsonNullValueInput | InputJsonValue
    firmaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    usuarioId?: IntFieldUpdateOperationsInput | number
    vehiculoId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    solicitudId?: NullableIntFieldUpdateOperationsInput | number | null
    viajes?: ViajeUncheckedUpdateManyWithoutPreoperacionalNestedInput
  }

  export type PreoperacionalCreateManyInput = {
    id?: number
    consecutivo?: number
    fecha?: Date | string
    respuestas: JsonNullValueInput | InputJsonValue
    firmaUrl?: string | null
    observaciones?: string | null
    usuarioId: number
    vehiculoId: number
    createdAt?: Date | string
    solicitudId?: number | null
  }

  export type PreoperacionalUpdateManyMutationInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    respuestas?: JsonNullValueInput | InputJsonValue
    firmaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PreoperacionalUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    consecutivo?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    respuestas?: JsonNullValueInput | InputJsonValue
    firmaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    usuarioId?: IntFieldUpdateOperationsInput | number
    vehiculoId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    solicitudId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type RefreshTokenCreateInput = {
    token: string
    expiresAt: Date | string
    revocado?: boolean
    createdAt?: Date | string
    usuario: UsuarioCreateNestedOneWithoutRefreshTokensInput
  }

  export type RefreshTokenUncheckedCreateInput = {
    id?: number
    token: string
    usuarioId: number
    expiresAt: Date | string
    revocado?: boolean
    createdAt?: Date | string
  }

  export type RefreshTokenUpdateInput = {
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revocado?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutRefreshTokensNestedInput
  }

  export type RefreshTokenUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revocado?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenCreateManyInput = {
    id?: number
    token: string
    usuarioId: number
    expiresAt: Date | string
    revocado?: boolean
    createdAt?: Date | string
  }

  export type RefreshTokenUpdateManyMutationInput = {
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revocado?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revocado?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SolicitudCreateInput = {
    motivo: string
    destino: string
    fechaRequerida: Date | string
    estado?: $Enums.EstadoSolicitud
    createdAt?: Date | string
    usuarioSolicitante: UsuarioCreateNestedOneWithoutSolicitudesCreadasInput
    vehiculoAsignado?: VehiculoCreateNestedOneWithoutSolicitudesInput
    aprobadoPor?: UsuarioCreateNestedOneWithoutSolicitudesAprobadasInput
    preoperacionales?: PreoperacionalCreateNestedManyWithoutSolicitudInput
  }

  export type SolicitudUncheckedCreateInput = {
    id?: number
    usuarioSolicitanteId: number
    motivo: string
    destino: string
    fechaRequerida: Date | string
    estado?: $Enums.EstadoSolicitud
    vehiculoAsignadoId?: number | null
    aprobadoPorId?: number | null
    createdAt?: Date | string
    preoperacionales?: PreoperacionalUncheckedCreateNestedManyWithoutSolicitudInput
  }

  export type SolicitudUpdateInput = {
    motivo?: StringFieldUpdateOperationsInput | string
    destino?: StringFieldUpdateOperationsInput | string
    fechaRequerida?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: EnumEstadoSolicitudFieldUpdateOperationsInput | $Enums.EstadoSolicitud
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioSolicitante?: UsuarioUpdateOneRequiredWithoutSolicitudesCreadasNestedInput
    vehiculoAsignado?: VehiculoUpdateOneWithoutSolicitudesNestedInput
    aprobadoPor?: UsuarioUpdateOneWithoutSolicitudesAprobadasNestedInput
    preoperacionales?: PreoperacionalUpdateManyWithoutSolicitudNestedInput
  }

  export type SolicitudUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioSolicitanteId?: IntFieldUpdateOperationsInput | number
    motivo?: StringFieldUpdateOperationsInput | string
    destino?: StringFieldUpdateOperationsInput | string
    fechaRequerida?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: EnumEstadoSolicitudFieldUpdateOperationsInput | $Enums.EstadoSolicitud
    vehiculoAsignadoId?: NullableIntFieldUpdateOperationsInput | number | null
    aprobadoPorId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    preoperacionales?: PreoperacionalUncheckedUpdateManyWithoutSolicitudNestedInput
  }

  export type SolicitudCreateManyInput = {
    id?: number
    usuarioSolicitanteId: number
    motivo: string
    destino: string
    fechaRequerida: Date | string
    estado?: $Enums.EstadoSolicitud
    vehiculoAsignadoId?: number | null
    aprobadoPorId?: number | null
    createdAt?: Date | string
  }

  export type SolicitudUpdateManyMutationInput = {
    motivo?: StringFieldUpdateOperationsInput | string
    destino?: StringFieldUpdateOperationsInput | string
    fechaRequerida?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: EnumEstadoSolicitudFieldUpdateOperationsInput | $Enums.EstadoSolicitud
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SolicitudUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioSolicitanteId?: IntFieldUpdateOperationsInput | number
    motivo?: StringFieldUpdateOperationsInput | string
    destino?: StringFieldUpdateOperationsInput | string
    fechaRequerida?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: EnumEstadoSolicitudFieldUpdateOperationsInput | $Enums.EstadoSolicitud
    vehiculoAsignadoId?: NullableIntFieldUpdateOperationsInput | number | null
    aprobadoPorId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ViajeCreateInput = {
    id: string
    horaInicio: Date | string
    horaFin?: Date | string | null
    distanciaTotalKm?: number | null
    velocidadPromedio?: number | null
    velocidadMaxima?: number | null
    estado?: $Enums.EstadoViaje
    archivoRutaUrl?: string | null
    createdAt?: Date | string
    vehiculo: VehiculoCreateNestedOneWithoutViajesInput
    conductor: UsuarioCreateNestedOneWithoutViajesInput
    preoperacional?: PreoperacionalCreateNestedOneWithoutViajesInput
    puntosGps?: PuntoGpsCreateNestedManyWithoutViajeInput
  }

  export type ViajeUncheckedCreateInput = {
    id: string
    vehiculoId: number
    conductorId: number
    preoperacionalId?: number | null
    horaInicio: Date | string
    horaFin?: Date | string | null
    distanciaTotalKm?: number | null
    velocidadPromedio?: number | null
    velocidadMaxima?: number | null
    estado?: $Enums.EstadoViaje
    archivoRutaUrl?: string | null
    createdAt?: Date | string
    puntosGps?: PuntoGpsUncheckedCreateNestedManyWithoutViajeInput
  }

  export type ViajeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    horaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horaFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    distanciaTotalKm?: NullableFloatFieldUpdateOperationsInput | number | null
    velocidadPromedio?: NullableFloatFieldUpdateOperationsInput | number | null
    velocidadMaxima?: NullableFloatFieldUpdateOperationsInput | number | null
    estado?: EnumEstadoViajeFieldUpdateOperationsInput | $Enums.EstadoViaje
    archivoRutaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehiculo?: VehiculoUpdateOneRequiredWithoutViajesNestedInput
    conductor?: UsuarioUpdateOneRequiredWithoutViajesNestedInput
    preoperacional?: PreoperacionalUpdateOneWithoutViajesNestedInput
    puntosGps?: PuntoGpsUpdateManyWithoutViajeNestedInput
  }

  export type ViajeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehiculoId?: IntFieldUpdateOperationsInput | number
    conductorId?: IntFieldUpdateOperationsInput | number
    preoperacionalId?: NullableIntFieldUpdateOperationsInput | number | null
    horaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horaFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    distanciaTotalKm?: NullableFloatFieldUpdateOperationsInput | number | null
    velocidadPromedio?: NullableFloatFieldUpdateOperationsInput | number | null
    velocidadMaxima?: NullableFloatFieldUpdateOperationsInput | number | null
    estado?: EnumEstadoViajeFieldUpdateOperationsInput | $Enums.EstadoViaje
    archivoRutaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    puntosGps?: PuntoGpsUncheckedUpdateManyWithoutViajeNestedInput
  }

  export type ViajeCreateManyInput = {
    id: string
    vehiculoId: number
    conductorId: number
    preoperacionalId?: number | null
    horaInicio: Date | string
    horaFin?: Date | string | null
    distanciaTotalKm?: number | null
    velocidadPromedio?: number | null
    velocidadMaxima?: number | null
    estado?: $Enums.EstadoViaje
    archivoRutaUrl?: string | null
    createdAt?: Date | string
  }

  export type ViajeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    horaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horaFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    distanciaTotalKm?: NullableFloatFieldUpdateOperationsInput | number | null
    velocidadPromedio?: NullableFloatFieldUpdateOperationsInput | number | null
    velocidadMaxima?: NullableFloatFieldUpdateOperationsInput | number | null
    estado?: EnumEstadoViajeFieldUpdateOperationsInput | $Enums.EstadoViaje
    archivoRutaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ViajeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehiculoId?: IntFieldUpdateOperationsInput | number
    conductorId?: IntFieldUpdateOperationsInput | number
    preoperacionalId?: NullableIntFieldUpdateOperationsInput | number | null
    horaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horaFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    distanciaTotalKm?: NullableFloatFieldUpdateOperationsInput | number | null
    velocidadPromedio?: NullableFloatFieldUpdateOperationsInput | number | null
    velocidadMaxima?: NullableFloatFieldUpdateOperationsInput | number | null
    estado?: EnumEstadoViajeFieldUpdateOperationsInput | $Enums.EstadoViaje
    archivoRutaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PuntoGpsUpdateInput = {
    velocidad?: NullableFloatFieldUpdateOperationsInput | number | null
    precision?: NullableFloatFieldUpdateOperationsInput | number | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    viaje?: ViajeUpdateOneRequiredWithoutPuntosGpsNestedInput
  }

  export type PuntoGpsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    viajeId?: StringFieldUpdateOperationsInput | string
    velocidad?: NullableFloatFieldUpdateOperationsInput | number | null
    precision?: NullableFloatFieldUpdateOperationsInput | number | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PuntoGpsUpdateManyMutationInput = {
    velocidad?: NullableFloatFieldUpdateOperationsInput | number | null
    precision?: NullableFloatFieldUpdateOperationsInput | number | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PuntoGpsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    viajeId?: StringFieldUpdateOperationsInput | string
    velocidad?: NullableFloatFieldUpdateOperationsInput | number | null
    precision?: NullableFloatFieldUpdateOperationsInput | number | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumRolFilter<$PrismaModel = never> = {
    equals?: $Enums.Rol | EnumRolFieldRefInput<$PrismaModel>
    in?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    notIn?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    not?: NestedEnumRolFilter<$PrismaModel> | $Enums.Rol
  }

  export type EnumOrigenFilter<$PrismaModel = never> = {
    equals?: $Enums.Origen | EnumOrigenFieldRefInput<$PrismaModel>
    in?: $Enums.Origen[] | ListEnumOrigenFieldRefInput<$PrismaModel>
    notIn?: $Enums.Origen[] | ListEnumOrigenFieldRefInput<$PrismaModel>
    not?: NestedEnumOrigenFilter<$PrismaModel> | $Enums.Origen
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type PreoperacionalListRelationFilter = {
    every?: PreoperacionalWhereInput
    some?: PreoperacionalWhereInput
    none?: PreoperacionalWhereInput
  }

  export type RefreshTokenListRelationFilter = {
    every?: RefreshTokenWhereInput
    some?: RefreshTokenWhereInput
    none?: RefreshTokenWhereInput
  }

  export type SolicitudListRelationFilter = {
    every?: SolicitudWhereInput
    some?: SolicitudWhereInput
    none?: SolicitudWhereInput
  }

  export type ViajeListRelationFilter = {
    every?: ViajeWhereInput
    some?: ViajeWhereInput
    none?: ViajeWhereInput
  }

  export type PreoperacionalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RefreshTokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SolicitudOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ViajeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    cedula?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    rol?: SortOrder
    origen?: SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    cedula?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    rol?: SortOrder
    origen?: SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    cedula?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    rol?: SortOrder
    origen?: SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type EnumRolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Rol | EnumRolFieldRefInput<$PrismaModel>
    in?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    notIn?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    not?: NestedEnumRolWithAggregatesFilter<$PrismaModel> | $Enums.Rol
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRolFilter<$PrismaModel>
    _max?: NestedEnumRolFilter<$PrismaModel>
  }

  export type EnumOrigenWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Origen | EnumOrigenFieldRefInput<$PrismaModel>
    in?: $Enums.Origen[] | ListEnumOrigenFieldRefInput<$PrismaModel>
    notIn?: $Enums.Origen[] | ListEnumOrigenFieldRefInput<$PrismaModel>
    not?: NestedEnumOrigenWithAggregatesFilter<$PrismaModel> | $Enums.Origen
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrigenFilter<$PrismaModel>
    _max?: NestedEnumOrigenFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type VehiculoCountOrderByAggregateInput = {
    id?: SortOrder
    placa?: SortOrder
    marca?: SortOrder
    modelo?: SortOrder
    tieneGpsFisico?: SortOrder
    polizaUrl?: SortOrder
    soatUrl?: SortOrder
    tecnomecanicaUrl?: SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
  }

  export type VehiculoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type VehiculoMaxOrderByAggregateInput = {
    id?: SortOrder
    placa?: SortOrder
    marca?: SortOrder
    modelo?: SortOrder
    tieneGpsFisico?: SortOrder
    polizaUrl?: SortOrder
    soatUrl?: SortOrder
    tecnomecanicaUrl?: SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
  }

  export type VehiculoMinOrderByAggregateInput = {
    id?: SortOrder
    placa?: SortOrder
    marca?: SortOrder
    modelo?: SortOrder
    tieneGpsFisico?: SortOrder
    polizaUrl?: SortOrder
    soatUrl?: SortOrder
    tecnomecanicaUrl?: SortOrder
    activo?: SortOrder
    createdAt?: SortOrder
  }

  export type VehiculoSumOrderByAggregateInput = {
    id?: SortOrder
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
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type VehiculoScalarRelationFilter = {
    is?: VehiculoWhereInput
    isNot?: VehiculoWhereInput
  }

  export type SolicitudNullableScalarRelationFilter = {
    is?: SolicitudWhereInput | null
    isNot?: SolicitudWhereInput | null
  }

  export type PreoperacionalCountOrderByAggregateInput = {
    id?: SortOrder
    consecutivo?: SortOrder
    fecha?: SortOrder
    respuestas?: SortOrder
    firmaUrl?: SortOrder
    observaciones?: SortOrder
    usuarioId?: SortOrder
    vehiculoId?: SortOrder
    createdAt?: SortOrder
    solicitudId?: SortOrder
  }

  export type PreoperacionalAvgOrderByAggregateInput = {
    id?: SortOrder
    consecutivo?: SortOrder
    usuarioId?: SortOrder
    vehiculoId?: SortOrder
    solicitudId?: SortOrder
  }

  export type PreoperacionalMaxOrderByAggregateInput = {
    id?: SortOrder
    consecutivo?: SortOrder
    fecha?: SortOrder
    firmaUrl?: SortOrder
    observaciones?: SortOrder
    usuarioId?: SortOrder
    vehiculoId?: SortOrder
    createdAt?: SortOrder
    solicitudId?: SortOrder
  }

  export type PreoperacionalMinOrderByAggregateInput = {
    id?: SortOrder
    consecutivo?: SortOrder
    fecha?: SortOrder
    firmaUrl?: SortOrder
    observaciones?: SortOrder
    usuarioId?: SortOrder
    vehiculoId?: SortOrder
    createdAt?: SortOrder
    solicitudId?: SortOrder
  }

  export type PreoperacionalSumOrderByAggregateInput = {
    id?: SortOrder
    consecutivo?: SortOrder
    usuarioId?: SortOrder
    vehiculoId?: SortOrder
    solicitudId?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
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

  export type RefreshTokenCountOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    usuarioId?: SortOrder
    expiresAt?: SortOrder
    revocado?: SortOrder
    createdAt?: SortOrder
  }

  export type RefreshTokenAvgOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
  }

  export type RefreshTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    usuarioId?: SortOrder
    expiresAt?: SortOrder
    revocado?: SortOrder
    createdAt?: SortOrder
  }

  export type RefreshTokenMinOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    usuarioId?: SortOrder
    expiresAt?: SortOrder
    revocado?: SortOrder
    createdAt?: SortOrder
  }

  export type RefreshTokenSumOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
  }

  export type EnumEstadoSolicitudFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoSolicitud | EnumEstadoSolicitudFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoSolicitud[] | ListEnumEstadoSolicitudFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoSolicitud[] | ListEnumEstadoSolicitudFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoSolicitudFilter<$PrismaModel> | $Enums.EstadoSolicitud
  }

  export type VehiculoNullableScalarRelationFilter = {
    is?: VehiculoWhereInput | null
    isNot?: VehiculoWhereInput | null
  }

  export type UsuarioNullableScalarRelationFilter = {
    is?: UsuarioWhereInput | null
    isNot?: UsuarioWhereInput | null
  }

  export type SolicitudCountOrderByAggregateInput = {
    id?: SortOrder
    usuarioSolicitanteId?: SortOrder
    motivo?: SortOrder
    destino?: SortOrder
    fechaRequerida?: SortOrder
    estado?: SortOrder
    vehiculoAsignadoId?: SortOrder
    aprobadoPorId?: SortOrder
    createdAt?: SortOrder
  }

  export type SolicitudAvgOrderByAggregateInput = {
    id?: SortOrder
    usuarioSolicitanteId?: SortOrder
    vehiculoAsignadoId?: SortOrder
    aprobadoPorId?: SortOrder
  }

  export type SolicitudMaxOrderByAggregateInput = {
    id?: SortOrder
    usuarioSolicitanteId?: SortOrder
    motivo?: SortOrder
    destino?: SortOrder
    fechaRequerida?: SortOrder
    estado?: SortOrder
    vehiculoAsignadoId?: SortOrder
    aprobadoPorId?: SortOrder
    createdAt?: SortOrder
  }

  export type SolicitudMinOrderByAggregateInput = {
    id?: SortOrder
    usuarioSolicitanteId?: SortOrder
    motivo?: SortOrder
    destino?: SortOrder
    fechaRequerida?: SortOrder
    estado?: SortOrder
    vehiculoAsignadoId?: SortOrder
    aprobadoPorId?: SortOrder
    createdAt?: SortOrder
  }

  export type SolicitudSumOrderByAggregateInput = {
    id?: SortOrder
    usuarioSolicitanteId?: SortOrder
    vehiculoAsignadoId?: SortOrder
    aprobadoPorId?: SortOrder
  }

  export type EnumEstadoSolicitudWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoSolicitud | EnumEstadoSolicitudFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoSolicitud[] | ListEnumEstadoSolicitudFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoSolicitud[] | ListEnumEstadoSolicitudFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoSolicitudWithAggregatesFilter<$PrismaModel> | $Enums.EstadoSolicitud
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoSolicitudFilter<$PrismaModel>
    _max?: NestedEnumEstadoSolicitudFilter<$PrismaModel>
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

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type EnumEstadoViajeFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoViaje | EnumEstadoViajeFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoViaje[] | ListEnumEstadoViajeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoViaje[] | ListEnumEstadoViajeFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoViajeFilter<$PrismaModel> | $Enums.EstadoViaje
  }

  export type PreoperacionalNullableScalarRelationFilter = {
    is?: PreoperacionalWhereInput | null
    isNot?: PreoperacionalWhereInput | null
  }

  export type PuntoGpsListRelationFilter = {
    every?: PuntoGpsWhereInput
    some?: PuntoGpsWhereInput
    none?: PuntoGpsWhereInput
  }

  export type PuntoGpsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ViajeCountOrderByAggregateInput = {
    id?: SortOrder
    vehiculoId?: SortOrder
    conductorId?: SortOrder
    preoperacionalId?: SortOrder
    horaInicio?: SortOrder
    horaFin?: SortOrder
    distanciaTotalKm?: SortOrder
    velocidadPromedio?: SortOrder
    velocidadMaxima?: SortOrder
    estado?: SortOrder
    archivoRutaUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type ViajeAvgOrderByAggregateInput = {
    vehiculoId?: SortOrder
    conductorId?: SortOrder
    preoperacionalId?: SortOrder
    distanciaTotalKm?: SortOrder
    velocidadPromedio?: SortOrder
    velocidadMaxima?: SortOrder
  }

  export type ViajeMaxOrderByAggregateInput = {
    id?: SortOrder
    vehiculoId?: SortOrder
    conductorId?: SortOrder
    preoperacionalId?: SortOrder
    horaInicio?: SortOrder
    horaFin?: SortOrder
    distanciaTotalKm?: SortOrder
    velocidadPromedio?: SortOrder
    velocidadMaxima?: SortOrder
    estado?: SortOrder
    archivoRutaUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type ViajeMinOrderByAggregateInput = {
    id?: SortOrder
    vehiculoId?: SortOrder
    conductorId?: SortOrder
    preoperacionalId?: SortOrder
    horaInicio?: SortOrder
    horaFin?: SortOrder
    distanciaTotalKm?: SortOrder
    velocidadPromedio?: SortOrder
    velocidadMaxima?: SortOrder
    estado?: SortOrder
    archivoRutaUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type ViajeSumOrderByAggregateInput = {
    vehiculoId?: SortOrder
    conductorId?: SortOrder
    preoperacionalId?: SortOrder
    distanciaTotalKm?: SortOrder
    velocidadPromedio?: SortOrder
    velocidadMaxima?: SortOrder
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

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type EnumEstadoViajeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoViaje | EnumEstadoViajeFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoViaje[] | ListEnumEstadoViajeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoViaje[] | ListEnumEstadoViajeFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoViajeWithAggregatesFilter<$PrismaModel> | $Enums.EstadoViaje
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoViajeFilter<$PrismaModel>
    _max?: NestedEnumEstadoViajeFilter<$PrismaModel>
  }

  export type ViajeScalarRelationFilter = {
    is?: ViajeWhereInput
    isNot?: ViajeWhereInput
  }

  export type PuntoGpsCountOrderByAggregateInput = {
    id?: SortOrder
    viajeId?: SortOrder
    velocidad?: SortOrder
    precision?: SortOrder
    timestamp?: SortOrder
  }

  export type PuntoGpsAvgOrderByAggregateInput = {
    id?: SortOrder
    velocidad?: SortOrder
    precision?: SortOrder
  }

  export type PuntoGpsMaxOrderByAggregateInput = {
    id?: SortOrder
    viajeId?: SortOrder
    velocidad?: SortOrder
    precision?: SortOrder
    timestamp?: SortOrder
  }

  export type PuntoGpsMinOrderByAggregateInput = {
    id?: SortOrder
    viajeId?: SortOrder
    velocidad?: SortOrder
    precision?: SortOrder
    timestamp?: SortOrder
  }

  export type PuntoGpsSumOrderByAggregateInput = {
    id?: SortOrder
    velocidad?: SortOrder
    precision?: SortOrder
  }

  export type PreoperacionalCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<PreoperacionalCreateWithoutUsuarioInput, PreoperacionalUncheckedCreateWithoutUsuarioInput> | PreoperacionalCreateWithoutUsuarioInput[] | PreoperacionalUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: PreoperacionalCreateOrConnectWithoutUsuarioInput | PreoperacionalCreateOrConnectWithoutUsuarioInput[]
    createMany?: PreoperacionalCreateManyUsuarioInputEnvelope
    connect?: PreoperacionalWhereUniqueInput | PreoperacionalWhereUniqueInput[]
  }

  export type RefreshTokenCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<RefreshTokenCreateWithoutUsuarioInput, RefreshTokenUncheckedCreateWithoutUsuarioInput> | RefreshTokenCreateWithoutUsuarioInput[] | RefreshTokenUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUsuarioInput | RefreshTokenCreateOrConnectWithoutUsuarioInput[]
    createMany?: RefreshTokenCreateManyUsuarioInputEnvelope
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
  }

  export type SolicitudCreateNestedManyWithoutUsuarioSolicitanteInput = {
    create?: XOR<SolicitudCreateWithoutUsuarioSolicitanteInput, SolicitudUncheckedCreateWithoutUsuarioSolicitanteInput> | SolicitudCreateWithoutUsuarioSolicitanteInput[] | SolicitudUncheckedCreateWithoutUsuarioSolicitanteInput[]
    connectOrCreate?: SolicitudCreateOrConnectWithoutUsuarioSolicitanteInput | SolicitudCreateOrConnectWithoutUsuarioSolicitanteInput[]
    createMany?: SolicitudCreateManyUsuarioSolicitanteInputEnvelope
    connect?: SolicitudWhereUniqueInput | SolicitudWhereUniqueInput[]
  }

  export type SolicitudCreateNestedManyWithoutAprobadoPorInput = {
    create?: XOR<SolicitudCreateWithoutAprobadoPorInput, SolicitudUncheckedCreateWithoutAprobadoPorInput> | SolicitudCreateWithoutAprobadoPorInput[] | SolicitudUncheckedCreateWithoutAprobadoPorInput[]
    connectOrCreate?: SolicitudCreateOrConnectWithoutAprobadoPorInput | SolicitudCreateOrConnectWithoutAprobadoPorInput[]
    createMany?: SolicitudCreateManyAprobadoPorInputEnvelope
    connect?: SolicitudWhereUniqueInput | SolicitudWhereUniqueInput[]
  }

  export type ViajeCreateNestedManyWithoutConductorInput = {
    create?: XOR<ViajeCreateWithoutConductorInput, ViajeUncheckedCreateWithoutConductorInput> | ViajeCreateWithoutConductorInput[] | ViajeUncheckedCreateWithoutConductorInput[]
    connectOrCreate?: ViajeCreateOrConnectWithoutConductorInput | ViajeCreateOrConnectWithoutConductorInput[]
    createMany?: ViajeCreateManyConductorInputEnvelope
    connect?: ViajeWhereUniqueInput | ViajeWhereUniqueInput[]
  }

  export type PreoperacionalUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<PreoperacionalCreateWithoutUsuarioInput, PreoperacionalUncheckedCreateWithoutUsuarioInput> | PreoperacionalCreateWithoutUsuarioInput[] | PreoperacionalUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: PreoperacionalCreateOrConnectWithoutUsuarioInput | PreoperacionalCreateOrConnectWithoutUsuarioInput[]
    createMany?: PreoperacionalCreateManyUsuarioInputEnvelope
    connect?: PreoperacionalWhereUniqueInput | PreoperacionalWhereUniqueInput[]
  }

  export type RefreshTokenUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<RefreshTokenCreateWithoutUsuarioInput, RefreshTokenUncheckedCreateWithoutUsuarioInput> | RefreshTokenCreateWithoutUsuarioInput[] | RefreshTokenUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUsuarioInput | RefreshTokenCreateOrConnectWithoutUsuarioInput[]
    createMany?: RefreshTokenCreateManyUsuarioInputEnvelope
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
  }

  export type SolicitudUncheckedCreateNestedManyWithoutUsuarioSolicitanteInput = {
    create?: XOR<SolicitudCreateWithoutUsuarioSolicitanteInput, SolicitudUncheckedCreateWithoutUsuarioSolicitanteInput> | SolicitudCreateWithoutUsuarioSolicitanteInput[] | SolicitudUncheckedCreateWithoutUsuarioSolicitanteInput[]
    connectOrCreate?: SolicitudCreateOrConnectWithoutUsuarioSolicitanteInput | SolicitudCreateOrConnectWithoutUsuarioSolicitanteInput[]
    createMany?: SolicitudCreateManyUsuarioSolicitanteInputEnvelope
    connect?: SolicitudWhereUniqueInput | SolicitudWhereUniqueInput[]
  }

  export type SolicitudUncheckedCreateNestedManyWithoutAprobadoPorInput = {
    create?: XOR<SolicitudCreateWithoutAprobadoPorInput, SolicitudUncheckedCreateWithoutAprobadoPorInput> | SolicitudCreateWithoutAprobadoPorInput[] | SolicitudUncheckedCreateWithoutAprobadoPorInput[]
    connectOrCreate?: SolicitudCreateOrConnectWithoutAprobadoPorInput | SolicitudCreateOrConnectWithoutAprobadoPorInput[]
    createMany?: SolicitudCreateManyAprobadoPorInputEnvelope
    connect?: SolicitudWhereUniqueInput | SolicitudWhereUniqueInput[]
  }

  export type ViajeUncheckedCreateNestedManyWithoutConductorInput = {
    create?: XOR<ViajeCreateWithoutConductorInput, ViajeUncheckedCreateWithoutConductorInput> | ViajeCreateWithoutConductorInput[] | ViajeUncheckedCreateWithoutConductorInput[]
    connectOrCreate?: ViajeCreateOrConnectWithoutConductorInput | ViajeCreateOrConnectWithoutConductorInput[]
    createMany?: ViajeCreateManyConductorInputEnvelope
    connect?: ViajeWhereUniqueInput | ViajeWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRolFieldUpdateOperationsInput = {
    set?: $Enums.Rol
  }

  export type EnumOrigenFieldUpdateOperationsInput = {
    set?: $Enums.Origen
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PreoperacionalUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<PreoperacionalCreateWithoutUsuarioInput, PreoperacionalUncheckedCreateWithoutUsuarioInput> | PreoperacionalCreateWithoutUsuarioInput[] | PreoperacionalUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: PreoperacionalCreateOrConnectWithoutUsuarioInput | PreoperacionalCreateOrConnectWithoutUsuarioInput[]
    upsert?: PreoperacionalUpsertWithWhereUniqueWithoutUsuarioInput | PreoperacionalUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: PreoperacionalCreateManyUsuarioInputEnvelope
    set?: PreoperacionalWhereUniqueInput | PreoperacionalWhereUniqueInput[]
    disconnect?: PreoperacionalWhereUniqueInput | PreoperacionalWhereUniqueInput[]
    delete?: PreoperacionalWhereUniqueInput | PreoperacionalWhereUniqueInput[]
    connect?: PreoperacionalWhereUniqueInput | PreoperacionalWhereUniqueInput[]
    update?: PreoperacionalUpdateWithWhereUniqueWithoutUsuarioInput | PreoperacionalUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: PreoperacionalUpdateManyWithWhereWithoutUsuarioInput | PreoperacionalUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: PreoperacionalScalarWhereInput | PreoperacionalScalarWhereInput[]
  }

  export type RefreshTokenUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<RefreshTokenCreateWithoutUsuarioInput, RefreshTokenUncheckedCreateWithoutUsuarioInput> | RefreshTokenCreateWithoutUsuarioInput[] | RefreshTokenUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUsuarioInput | RefreshTokenCreateOrConnectWithoutUsuarioInput[]
    upsert?: RefreshTokenUpsertWithWhereUniqueWithoutUsuarioInput | RefreshTokenUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: RefreshTokenCreateManyUsuarioInputEnvelope
    set?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    disconnect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    delete?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    update?: RefreshTokenUpdateWithWhereUniqueWithoutUsuarioInput | RefreshTokenUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: RefreshTokenUpdateManyWithWhereWithoutUsuarioInput | RefreshTokenUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
  }

  export type SolicitudUpdateManyWithoutUsuarioSolicitanteNestedInput = {
    create?: XOR<SolicitudCreateWithoutUsuarioSolicitanteInput, SolicitudUncheckedCreateWithoutUsuarioSolicitanteInput> | SolicitudCreateWithoutUsuarioSolicitanteInput[] | SolicitudUncheckedCreateWithoutUsuarioSolicitanteInput[]
    connectOrCreate?: SolicitudCreateOrConnectWithoutUsuarioSolicitanteInput | SolicitudCreateOrConnectWithoutUsuarioSolicitanteInput[]
    upsert?: SolicitudUpsertWithWhereUniqueWithoutUsuarioSolicitanteInput | SolicitudUpsertWithWhereUniqueWithoutUsuarioSolicitanteInput[]
    createMany?: SolicitudCreateManyUsuarioSolicitanteInputEnvelope
    set?: SolicitudWhereUniqueInput | SolicitudWhereUniqueInput[]
    disconnect?: SolicitudWhereUniqueInput | SolicitudWhereUniqueInput[]
    delete?: SolicitudWhereUniqueInput | SolicitudWhereUniqueInput[]
    connect?: SolicitudWhereUniqueInput | SolicitudWhereUniqueInput[]
    update?: SolicitudUpdateWithWhereUniqueWithoutUsuarioSolicitanteInput | SolicitudUpdateWithWhereUniqueWithoutUsuarioSolicitanteInput[]
    updateMany?: SolicitudUpdateManyWithWhereWithoutUsuarioSolicitanteInput | SolicitudUpdateManyWithWhereWithoutUsuarioSolicitanteInput[]
    deleteMany?: SolicitudScalarWhereInput | SolicitudScalarWhereInput[]
  }

  export type SolicitudUpdateManyWithoutAprobadoPorNestedInput = {
    create?: XOR<SolicitudCreateWithoutAprobadoPorInput, SolicitudUncheckedCreateWithoutAprobadoPorInput> | SolicitudCreateWithoutAprobadoPorInput[] | SolicitudUncheckedCreateWithoutAprobadoPorInput[]
    connectOrCreate?: SolicitudCreateOrConnectWithoutAprobadoPorInput | SolicitudCreateOrConnectWithoutAprobadoPorInput[]
    upsert?: SolicitudUpsertWithWhereUniqueWithoutAprobadoPorInput | SolicitudUpsertWithWhereUniqueWithoutAprobadoPorInput[]
    createMany?: SolicitudCreateManyAprobadoPorInputEnvelope
    set?: SolicitudWhereUniqueInput | SolicitudWhereUniqueInput[]
    disconnect?: SolicitudWhereUniqueInput | SolicitudWhereUniqueInput[]
    delete?: SolicitudWhereUniqueInput | SolicitudWhereUniqueInput[]
    connect?: SolicitudWhereUniqueInput | SolicitudWhereUniqueInput[]
    update?: SolicitudUpdateWithWhereUniqueWithoutAprobadoPorInput | SolicitudUpdateWithWhereUniqueWithoutAprobadoPorInput[]
    updateMany?: SolicitudUpdateManyWithWhereWithoutAprobadoPorInput | SolicitudUpdateManyWithWhereWithoutAprobadoPorInput[]
    deleteMany?: SolicitudScalarWhereInput | SolicitudScalarWhereInput[]
  }

  export type ViajeUpdateManyWithoutConductorNestedInput = {
    create?: XOR<ViajeCreateWithoutConductorInput, ViajeUncheckedCreateWithoutConductorInput> | ViajeCreateWithoutConductorInput[] | ViajeUncheckedCreateWithoutConductorInput[]
    connectOrCreate?: ViajeCreateOrConnectWithoutConductorInput | ViajeCreateOrConnectWithoutConductorInput[]
    upsert?: ViajeUpsertWithWhereUniqueWithoutConductorInput | ViajeUpsertWithWhereUniqueWithoutConductorInput[]
    createMany?: ViajeCreateManyConductorInputEnvelope
    set?: ViajeWhereUniqueInput | ViajeWhereUniqueInput[]
    disconnect?: ViajeWhereUniqueInput | ViajeWhereUniqueInput[]
    delete?: ViajeWhereUniqueInput | ViajeWhereUniqueInput[]
    connect?: ViajeWhereUniqueInput | ViajeWhereUniqueInput[]
    update?: ViajeUpdateWithWhereUniqueWithoutConductorInput | ViajeUpdateWithWhereUniqueWithoutConductorInput[]
    updateMany?: ViajeUpdateManyWithWhereWithoutConductorInput | ViajeUpdateManyWithWhereWithoutConductorInput[]
    deleteMany?: ViajeScalarWhereInput | ViajeScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PreoperacionalUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<PreoperacionalCreateWithoutUsuarioInput, PreoperacionalUncheckedCreateWithoutUsuarioInput> | PreoperacionalCreateWithoutUsuarioInput[] | PreoperacionalUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: PreoperacionalCreateOrConnectWithoutUsuarioInput | PreoperacionalCreateOrConnectWithoutUsuarioInput[]
    upsert?: PreoperacionalUpsertWithWhereUniqueWithoutUsuarioInput | PreoperacionalUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: PreoperacionalCreateManyUsuarioInputEnvelope
    set?: PreoperacionalWhereUniqueInput | PreoperacionalWhereUniqueInput[]
    disconnect?: PreoperacionalWhereUniqueInput | PreoperacionalWhereUniqueInput[]
    delete?: PreoperacionalWhereUniqueInput | PreoperacionalWhereUniqueInput[]
    connect?: PreoperacionalWhereUniqueInput | PreoperacionalWhereUniqueInput[]
    update?: PreoperacionalUpdateWithWhereUniqueWithoutUsuarioInput | PreoperacionalUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: PreoperacionalUpdateManyWithWhereWithoutUsuarioInput | PreoperacionalUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: PreoperacionalScalarWhereInput | PreoperacionalScalarWhereInput[]
  }

  export type RefreshTokenUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<RefreshTokenCreateWithoutUsuarioInput, RefreshTokenUncheckedCreateWithoutUsuarioInput> | RefreshTokenCreateWithoutUsuarioInput[] | RefreshTokenUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUsuarioInput | RefreshTokenCreateOrConnectWithoutUsuarioInput[]
    upsert?: RefreshTokenUpsertWithWhereUniqueWithoutUsuarioInput | RefreshTokenUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: RefreshTokenCreateManyUsuarioInputEnvelope
    set?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    disconnect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    delete?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    connect?: RefreshTokenWhereUniqueInput | RefreshTokenWhereUniqueInput[]
    update?: RefreshTokenUpdateWithWhereUniqueWithoutUsuarioInput | RefreshTokenUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: RefreshTokenUpdateManyWithWhereWithoutUsuarioInput | RefreshTokenUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
  }

  export type SolicitudUncheckedUpdateManyWithoutUsuarioSolicitanteNestedInput = {
    create?: XOR<SolicitudCreateWithoutUsuarioSolicitanteInput, SolicitudUncheckedCreateWithoutUsuarioSolicitanteInput> | SolicitudCreateWithoutUsuarioSolicitanteInput[] | SolicitudUncheckedCreateWithoutUsuarioSolicitanteInput[]
    connectOrCreate?: SolicitudCreateOrConnectWithoutUsuarioSolicitanteInput | SolicitudCreateOrConnectWithoutUsuarioSolicitanteInput[]
    upsert?: SolicitudUpsertWithWhereUniqueWithoutUsuarioSolicitanteInput | SolicitudUpsertWithWhereUniqueWithoutUsuarioSolicitanteInput[]
    createMany?: SolicitudCreateManyUsuarioSolicitanteInputEnvelope
    set?: SolicitudWhereUniqueInput | SolicitudWhereUniqueInput[]
    disconnect?: SolicitudWhereUniqueInput | SolicitudWhereUniqueInput[]
    delete?: SolicitudWhereUniqueInput | SolicitudWhereUniqueInput[]
    connect?: SolicitudWhereUniqueInput | SolicitudWhereUniqueInput[]
    update?: SolicitudUpdateWithWhereUniqueWithoutUsuarioSolicitanteInput | SolicitudUpdateWithWhereUniqueWithoutUsuarioSolicitanteInput[]
    updateMany?: SolicitudUpdateManyWithWhereWithoutUsuarioSolicitanteInput | SolicitudUpdateManyWithWhereWithoutUsuarioSolicitanteInput[]
    deleteMany?: SolicitudScalarWhereInput | SolicitudScalarWhereInput[]
  }

  export type SolicitudUncheckedUpdateManyWithoutAprobadoPorNestedInput = {
    create?: XOR<SolicitudCreateWithoutAprobadoPorInput, SolicitudUncheckedCreateWithoutAprobadoPorInput> | SolicitudCreateWithoutAprobadoPorInput[] | SolicitudUncheckedCreateWithoutAprobadoPorInput[]
    connectOrCreate?: SolicitudCreateOrConnectWithoutAprobadoPorInput | SolicitudCreateOrConnectWithoutAprobadoPorInput[]
    upsert?: SolicitudUpsertWithWhereUniqueWithoutAprobadoPorInput | SolicitudUpsertWithWhereUniqueWithoutAprobadoPorInput[]
    createMany?: SolicitudCreateManyAprobadoPorInputEnvelope
    set?: SolicitudWhereUniqueInput | SolicitudWhereUniqueInput[]
    disconnect?: SolicitudWhereUniqueInput | SolicitudWhereUniqueInput[]
    delete?: SolicitudWhereUniqueInput | SolicitudWhereUniqueInput[]
    connect?: SolicitudWhereUniqueInput | SolicitudWhereUniqueInput[]
    update?: SolicitudUpdateWithWhereUniqueWithoutAprobadoPorInput | SolicitudUpdateWithWhereUniqueWithoutAprobadoPorInput[]
    updateMany?: SolicitudUpdateManyWithWhereWithoutAprobadoPorInput | SolicitudUpdateManyWithWhereWithoutAprobadoPorInput[]
    deleteMany?: SolicitudScalarWhereInput | SolicitudScalarWhereInput[]
  }

  export type ViajeUncheckedUpdateManyWithoutConductorNestedInput = {
    create?: XOR<ViajeCreateWithoutConductorInput, ViajeUncheckedCreateWithoutConductorInput> | ViajeCreateWithoutConductorInput[] | ViajeUncheckedCreateWithoutConductorInput[]
    connectOrCreate?: ViajeCreateOrConnectWithoutConductorInput | ViajeCreateOrConnectWithoutConductorInput[]
    upsert?: ViajeUpsertWithWhereUniqueWithoutConductorInput | ViajeUpsertWithWhereUniqueWithoutConductorInput[]
    createMany?: ViajeCreateManyConductorInputEnvelope
    set?: ViajeWhereUniqueInput | ViajeWhereUniqueInput[]
    disconnect?: ViajeWhereUniqueInput | ViajeWhereUniqueInput[]
    delete?: ViajeWhereUniqueInput | ViajeWhereUniqueInput[]
    connect?: ViajeWhereUniqueInput | ViajeWhereUniqueInput[]
    update?: ViajeUpdateWithWhereUniqueWithoutConductorInput | ViajeUpdateWithWhereUniqueWithoutConductorInput[]
    updateMany?: ViajeUpdateManyWithWhereWithoutConductorInput | ViajeUpdateManyWithWhereWithoutConductorInput[]
    deleteMany?: ViajeScalarWhereInput | ViajeScalarWhereInput[]
  }

  export type PreoperacionalCreateNestedManyWithoutVehiculoInput = {
    create?: XOR<PreoperacionalCreateWithoutVehiculoInput, PreoperacionalUncheckedCreateWithoutVehiculoInput> | PreoperacionalCreateWithoutVehiculoInput[] | PreoperacionalUncheckedCreateWithoutVehiculoInput[]
    connectOrCreate?: PreoperacionalCreateOrConnectWithoutVehiculoInput | PreoperacionalCreateOrConnectWithoutVehiculoInput[]
    createMany?: PreoperacionalCreateManyVehiculoInputEnvelope
    connect?: PreoperacionalWhereUniqueInput | PreoperacionalWhereUniqueInput[]
  }

  export type SolicitudCreateNestedManyWithoutVehiculoAsignadoInput = {
    create?: XOR<SolicitudCreateWithoutVehiculoAsignadoInput, SolicitudUncheckedCreateWithoutVehiculoAsignadoInput> | SolicitudCreateWithoutVehiculoAsignadoInput[] | SolicitudUncheckedCreateWithoutVehiculoAsignadoInput[]
    connectOrCreate?: SolicitudCreateOrConnectWithoutVehiculoAsignadoInput | SolicitudCreateOrConnectWithoutVehiculoAsignadoInput[]
    createMany?: SolicitudCreateManyVehiculoAsignadoInputEnvelope
    connect?: SolicitudWhereUniqueInput | SolicitudWhereUniqueInput[]
  }

  export type ViajeCreateNestedManyWithoutVehiculoInput = {
    create?: XOR<ViajeCreateWithoutVehiculoInput, ViajeUncheckedCreateWithoutVehiculoInput> | ViajeCreateWithoutVehiculoInput[] | ViajeUncheckedCreateWithoutVehiculoInput[]
    connectOrCreate?: ViajeCreateOrConnectWithoutVehiculoInput | ViajeCreateOrConnectWithoutVehiculoInput[]
    createMany?: ViajeCreateManyVehiculoInputEnvelope
    connect?: ViajeWhereUniqueInput | ViajeWhereUniqueInput[]
  }

  export type PreoperacionalUncheckedCreateNestedManyWithoutVehiculoInput = {
    create?: XOR<PreoperacionalCreateWithoutVehiculoInput, PreoperacionalUncheckedCreateWithoutVehiculoInput> | PreoperacionalCreateWithoutVehiculoInput[] | PreoperacionalUncheckedCreateWithoutVehiculoInput[]
    connectOrCreate?: PreoperacionalCreateOrConnectWithoutVehiculoInput | PreoperacionalCreateOrConnectWithoutVehiculoInput[]
    createMany?: PreoperacionalCreateManyVehiculoInputEnvelope
    connect?: PreoperacionalWhereUniqueInput | PreoperacionalWhereUniqueInput[]
  }

  export type SolicitudUncheckedCreateNestedManyWithoutVehiculoAsignadoInput = {
    create?: XOR<SolicitudCreateWithoutVehiculoAsignadoInput, SolicitudUncheckedCreateWithoutVehiculoAsignadoInput> | SolicitudCreateWithoutVehiculoAsignadoInput[] | SolicitudUncheckedCreateWithoutVehiculoAsignadoInput[]
    connectOrCreate?: SolicitudCreateOrConnectWithoutVehiculoAsignadoInput | SolicitudCreateOrConnectWithoutVehiculoAsignadoInput[]
    createMany?: SolicitudCreateManyVehiculoAsignadoInputEnvelope
    connect?: SolicitudWhereUniqueInput | SolicitudWhereUniqueInput[]
  }

  export type ViajeUncheckedCreateNestedManyWithoutVehiculoInput = {
    create?: XOR<ViajeCreateWithoutVehiculoInput, ViajeUncheckedCreateWithoutVehiculoInput> | ViajeCreateWithoutVehiculoInput[] | ViajeUncheckedCreateWithoutVehiculoInput[]
    connectOrCreate?: ViajeCreateOrConnectWithoutVehiculoInput | ViajeCreateOrConnectWithoutVehiculoInput[]
    createMany?: ViajeCreateManyVehiculoInputEnvelope
    connect?: ViajeWhereUniqueInput | ViajeWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type PreoperacionalUpdateManyWithoutVehiculoNestedInput = {
    create?: XOR<PreoperacionalCreateWithoutVehiculoInput, PreoperacionalUncheckedCreateWithoutVehiculoInput> | PreoperacionalCreateWithoutVehiculoInput[] | PreoperacionalUncheckedCreateWithoutVehiculoInput[]
    connectOrCreate?: PreoperacionalCreateOrConnectWithoutVehiculoInput | PreoperacionalCreateOrConnectWithoutVehiculoInput[]
    upsert?: PreoperacionalUpsertWithWhereUniqueWithoutVehiculoInput | PreoperacionalUpsertWithWhereUniqueWithoutVehiculoInput[]
    createMany?: PreoperacionalCreateManyVehiculoInputEnvelope
    set?: PreoperacionalWhereUniqueInput | PreoperacionalWhereUniqueInput[]
    disconnect?: PreoperacionalWhereUniqueInput | PreoperacionalWhereUniqueInput[]
    delete?: PreoperacionalWhereUniqueInput | PreoperacionalWhereUniqueInput[]
    connect?: PreoperacionalWhereUniqueInput | PreoperacionalWhereUniqueInput[]
    update?: PreoperacionalUpdateWithWhereUniqueWithoutVehiculoInput | PreoperacionalUpdateWithWhereUniqueWithoutVehiculoInput[]
    updateMany?: PreoperacionalUpdateManyWithWhereWithoutVehiculoInput | PreoperacionalUpdateManyWithWhereWithoutVehiculoInput[]
    deleteMany?: PreoperacionalScalarWhereInput | PreoperacionalScalarWhereInput[]
  }

  export type SolicitudUpdateManyWithoutVehiculoAsignadoNestedInput = {
    create?: XOR<SolicitudCreateWithoutVehiculoAsignadoInput, SolicitudUncheckedCreateWithoutVehiculoAsignadoInput> | SolicitudCreateWithoutVehiculoAsignadoInput[] | SolicitudUncheckedCreateWithoutVehiculoAsignadoInput[]
    connectOrCreate?: SolicitudCreateOrConnectWithoutVehiculoAsignadoInput | SolicitudCreateOrConnectWithoutVehiculoAsignadoInput[]
    upsert?: SolicitudUpsertWithWhereUniqueWithoutVehiculoAsignadoInput | SolicitudUpsertWithWhereUniqueWithoutVehiculoAsignadoInput[]
    createMany?: SolicitudCreateManyVehiculoAsignadoInputEnvelope
    set?: SolicitudWhereUniqueInput | SolicitudWhereUniqueInput[]
    disconnect?: SolicitudWhereUniqueInput | SolicitudWhereUniqueInput[]
    delete?: SolicitudWhereUniqueInput | SolicitudWhereUniqueInput[]
    connect?: SolicitudWhereUniqueInput | SolicitudWhereUniqueInput[]
    update?: SolicitudUpdateWithWhereUniqueWithoutVehiculoAsignadoInput | SolicitudUpdateWithWhereUniqueWithoutVehiculoAsignadoInput[]
    updateMany?: SolicitudUpdateManyWithWhereWithoutVehiculoAsignadoInput | SolicitudUpdateManyWithWhereWithoutVehiculoAsignadoInput[]
    deleteMany?: SolicitudScalarWhereInput | SolicitudScalarWhereInput[]
  }

  export type ViajeUpdateManyWithoutVehiculoNestedInput = {
    create?: XOR<ViajeCreateWithoutVehiculoInput, ViajeUncheckedCreateWithoutVehiculoInput> | ViajeCreateWithoutVehiculoInput[] | ViajeUncheckedCreateWithoutVehiculoInput[]
    connectOrCreate?: ViajeCreateOrConnectWithoutVehiculoInput | ViajeCreateOrConnectWithoutVehiculoInput[]
    upsert?: ViajeUpsertWithWhereUniqueWithoutVehiculoInput | ViajeUpsertWithWhereUniqueWithoutVehiculoInput[]
    createMany?: ViajeCreateManyVehiculoInputEnvelope
    set?: ViajeWhereUniqueInput | ViajeWhereUniqueInput[]
    disconnect?: ViajeWhereUniqueInput | ViajeWhereUniqueInput[]
    delete?: ViajeWhereUniqueInput | ViajeWhereUniqueInput[]
    connect?: ViajeWhereUniqueInput | ViajeWhereUniqueInput[]
    update?: ViajeUpdateWithWhereUniqueWithoutVehiculoInput | ViajeUpdateWithWhereUniqueWithoutVehiculoInput[]
    updateMany?: ViajeUpdateManyWithWhereWithoutVehiculoInput | ViajeUpdateManyWithWhereWithoutVehiculoInput[]
    deleteMany?: ViajeScalarWhereInput | ViajeScalarWhereInput[]
  }

  export type PreoperacionalUncheckedUpdateManyWithoutVehiculoNestedInput = {
    create?: XOR<PreoperacionalCreateWithoutVehiculoInput, PreoperacionalUncheckedCreateWithoutVehiculoInput> | PreoperacionalCreateWithoutVehiculoInput[] | PreoperacionalUncheckedCreateWithoutVehiculoInput[]
    connectOrCreate?: PreoperacionalCreateOrConnectWithoutVehiculoInput | PreoperacionalCreateOrConnectWithoutVehiculoInput[]
    upsert?: PreoperacionalUpsertWithWhereUniqueWithoutVehiculoInput | PreoperacionalUpsertWithWhereUniqueWithoutVehiculoInput[]
    createMany?: PreoperacionalCreateManyVehiculoInputEnvelope
    set?: PreoperacionalWhereUniqueInput | PreoperacionalWhereUniqueInput[]
    disconnect?: PreoperacionalWhereUniqueInput | PreoperacionalWhereUniqueInput[]
    delete?: PreoperacionalWhereUniqueInput | PreoperacionalWhereUniqueInput[]
    connect?: PreoperacionalWhereUniqueInput | PreoperacionalWhereUniqueInput[]
    update?: PreoperacionalUpdateWithWhereUniqueWithoutVehiculoInput | PreoperacionalUpdateWithWhereUniqueWithoutVehiculoInput[]
    updateMany?: PreoperacionalUpdateManyWithWhereWithoutVehiculoInput | PreoperacionalUpdateManyWithWhereWithoutVehiculoInput[]
    deleteMany?: PreoperacionalScalarWhereInput | PreoperacionalScalarWhereInput[]
  }

  export type SolicitudUncheckedUpdateManyWithoutVehiculoAsignadoNestedInput = {
    create?: XOR<SolicitudCreateWithoutVehiculoAsignadoInput, SolicitudUncheckedCreateWithoutVehiculoAsignadoInput> | SolicitudCreateWithoutVehiculoAsignadoInput[] | SolicitudUncheckedCreateWithoutVehiculoAsignadoInput[]
    connectOrCreate?: SolicitudCreateOrConnectWithoutVehiculoAsignadoInput | SolicitudCreateOrConnectWithoutVehiculoAsignadoInput[]
    upsert?: SolicitudUpsertWithWhereUniqueWithoutVehiculoAsignadoInput | SolicitudUpsertWithWhereUniqueWithoutVehiculoAsignadoInput[]
    createMany?: SolicitudCreateManyVehiculoAsignadoInputEnvelope
    set?: SolicitudWhereUniqueInput | SolicitudWhereUniqueInput[]
    disconnect?: SolicitudWhereUniqueInput | SolicitudWhereUniqueInput[]
    delete?: SolicitudWhereUniqueInput | SolicitudWhereUniqueInput[]
    connect?: SolicitudWhereUniqueInput | SolicitudWhereUniqueInput[]
    update?: SolicitudUpdateWithWhereUniqueWithoutVehiculoAsignadoInput | SolicitudUpdateWithWhereUniqueWithoutVehiculoAsignadoInput[]
    updateMany?: SolicitudUpdateManyWithWhereWithoutVehiculoAsignadoInput | SolicitudUpdateManyWithWhereWithoutVehiculoAsignadoInput[]
    deleteMany?: SolicitudScalarWhereInput | SolicitudScalarWhereInput[]
  }

  export type ViajeUncheckedUpdateManyWithoutVehiculoNestedInput = {
    create?: XOR<ViajeCreateWithoutVehiculoInput, ViajeUncheckedCreateWithoutVehiculoInput> | ViajeCreateWithoutVehiculoInput[] | ViajeUncheckedCreateWithoutVehiculoInput[]
    connectOrCreate?: ViajeCreateOrConnectWithoutVehiculoInput | ViajeCreateOrConnectWithoutVehiculoInput[]
    upsert?: ViajeUpsertWithWhereUniqueWithoutVehiculoInput | ViajeUpsertWithWhereUniqueWithoutVehiculoInput[]
    createMany?: ViajeCreateManyVehiculoInputEnvelope
    set?: ViajeWhereUniqueInput | ViajeWhereUniqueInput[]
    disconnect?: ViajeWhereUniqueInput | ViajeWhereUniqueInput[]
    delete?: ViajeWhereUniqueInput | ViajeWhereUniqueInput[]
    connect?: ViajeWhereUniqueInput | ViajeWhereUniqueInput[]
    update?: ViajeUpdateWithWhereUniqueWithoutVehiculoInput | ViajeUpdateWithWhereUniqueWithoutVehiculoInput[]
    updateMany?: ViajeUpdateManyWithWhereWithoutVehiculoInput | ViajeUpdateManyWithWhereWithoutVehiculoInput[]
    deleteMany?: ViajeScalarWhereInput | ViajeScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutPreoperacionalesInput = {
    create?: XOR<UsuarioCreateWithoutPreoperacionalesInput, UsuarioUncheckedCreateWithoutPreoperacionalesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutPreoperacionalesInput
    connect?: UsuarioWhereUniqueInput
  }

  export type VehiculoCreateNestedOneWithoutPreoperacionalesInput = {
    create?: XOR<VehiculoCreateWithoutPreoperacionalesInput, VehiculoUncheckedCreateWithoutPreoperacionalesInput>
    connectOrCreate?: VehiculoCreateOrConnectWithoutPreoperacionalesInput
    connect?: VehiculoWhereUniqueInput
  }

  export type SolicitudCreateNestedOneWithoutPreoperacionalesInput = {
    create?: XOR<SolicitudCreateWithoutPreoperacionalesInput, SolicitudUncheckedCreateWithoutPreoperacionalesInput>
    connectOrCreate?: SolicitudCreateOrConnectWithoutPreoperacionalesInput
    connect?: SolicitudWhereUniqueInput
  }

  export type ViajeCreateNestedManyWithoutPreoperacionalInput = {
    create?: XOR<ViajeCreateWithoutPreoperacionalInput, ViajeUncheckedCreateWithoutPreoperacionalInput> | ViajeCreateWithoutPreoperacionalInput[] | ViajeUncheckedCreateWithoutPreoperacionalInput[]
    connectOrCreate?: ViajeCreateOrConnectWithoutPreoperacionalInput | ViajeCreateOrConnectWithoutPreoperacionalInput[]
    createMany?: ViajeCreateManyPreoperacionalInputEnvelope
    connect?: ViajeWhereUniqueInput | ViajeWhereUniqueInput[]
  }

  export type ViajeUncheckedCreateNestedManyWithoutPreoperacionalInput = {
    create?: XOR<ViajeCreateWithoutPreoperacionalInput, ViajeUncheckedCreateWithoutPreoperacionalInput> | ViajeCreateWithoutPreoperacionalInput[] | ViajeUncheckedCreateWithoutPreoperacionalInput[]
    connectOrCreate?: ViajeCreateOrConnectWithoutPreoperacionalInput | ViajeCreateOrConnectWithoutPreoperacionalInput[]
    createMany?: ViajeCreateManyPreoperacionalInputEnvelope
    connect?: ViajeWhereUniqueInput | ViajeWhereUniqueInput[]
  }

  export type UsuarioUpdateOneRequiredWithoutPreoperacionalesNestedInput = {
    create?: XOR<UsuarioCreateWithoutPreoperacionalesInput, UsuarioUncheckedCreateWithoutPreoperacionalesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutPreoperacionalesInput
    upsert?: UsuarioUpsertWithoutPreoperacionalesInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutPreoperacionalesInput, UsuarioUpdateWithoutPreoperacionalesInput>, UsuarioUncheckedUpdateWithoutPreoperacionalesInput>
  }

  export type VehiculoUpdateOneRequiredWithoutPreoperacionalesNestedInput = {
    create?: XOR<VehiculoCreateWithoutPreoperacionalesInput, VehiculoUncheckedCreateWithoutPreoperacionalesInput>
    connectOrCreate?: VehiculoCreateOrConnectWithoutPreoperacionalesInput
    upsert?: VehiculoUpsertWithoutPreoperacionalesInput
    connect?: VehiculoWhereUniqueInput
    update?: XOR<XOR<VehiculoUpdateToOneWithWhereWithoutPreoperacionalesInput, VehiculoUpdateWithoutPreoperacionalesInput>, VehiculoUncheckedUpdateWithoutPreoperacionalesInput>
  }

  export type SolicitudUpdateOneWithoutPreoperacionalesNestedInput = {
    create?: XOR<SolicitudCreateWithoutPreoperacionalesInput, SolicitudUncheckedCreateWithoutPreoperacionalesInput>
    connectOrCreate?: SolicitudCreateOrConnectWithoutPreoperacionalesInput
    upsert?: SolicitudUpsertWithoutPreoperacionalesInput
    disconnect?: SolicitudWhereInput | boolean
    delete?: SolicitudWhereInput | boolean
    connect?: SolicitudWhereUniqueInput
    update?: XOR<XOR<SolicitudUpdateToOneWithWhereWithoutPreoperacionalesInput, SolicitudUpdateWithoutPreoperacionalesInput>, SolicitudUncheckedUpdateWithoutPreoperacionalesInput>
  }

  export type ViajeUpdateManyWithoutPreoperacionalNestedInput = {
    create?: XOR<ViajeCreateWithoutPreoperacionalInput, ViajeUncheckedCreateWithoutPreoperacionalInput> | ViajeCreateWithoutPreoperacionalInput[] | ViajeUncheckedCreateWithoutPreoperacionalInput[]
    connectOrCreate?: ViajeCreateOrConnectWithoutPreoperacionalInput | ViajeCreateOrConnectWithoutPreoperacionalInput[]
    upsert?: ViajeUpsertWithWhereUniqueWithoutPreoperacionalInput | ViajeUpsertWithWhereUniqueWithoutPreoperacionalInput[]
    createMany?: ViajeCreateManyPreoperacionalInputEnvelope
    set?: ViajeWhereUniqueInput | ViajeWhereUniqueInput[]
    disconnect?: ViajeWhereUniqueInput | ViajeWhereUniqueInput[]
    delete?: ViajeWhereUniqueInput | ViajeWhereUniqueInput[]
    connect?: ViajeWhereUniqueInput | ViajeWhereUniqueInput[]
    update?: ViajeUpdateWithWhereUniqueWithoutPreoperacionalInput | ViajeUpdateWithWhereUniqueWithoutPreoperacionalInput[]
    updateMany?: ViajeUpdateManyWithWhereWithoutPreoperacionalInput | ViajeUpdateManyWithWhereWithoutPreoperacionalInput[]
    deleteMany?: ViajeScalarWhereInput | ViajeScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ViajeUncheckedUpdateManyWithoutPreoperacionalNestedInput = {
    create?: XOR<ViajeCreateWithoutPreoperacionalInput, ViajeUncheckedCreateWithoutPreoperacionalInput> | ViajeCreateWithoutPreoperacionalInput[] | ViajeUncheckedCreateWithoutPreoperacionalInput[]
    connectOrCreate?: ViajeCreateOrConnectWithoutPreoperacionalInput | ViajeCreateOrConnectWithoutPreoperacionalInput[]
    upsert?: ViajeUpsertWithWhereUniqueWithoutPreoperacionalInput | ViajeUpsertWithWhereUniqueWithoutPreoperacionalInput[]
    createMany?: ViajeCreateManyPreoperacionalInputEnvelope
    set?: ViajeWhereUniqueInput | ViajeWhereUniqueInput[]
    disconnect?: ViajeWhereUniqueInput | ViajeWhereUniqueInput[]
    delete?: ViajeWhereUniqueInput | ViajeWhereUniqueInput[]
    connect?: ViajeWhereUniqueInput | ViajeWhereUniqueInput[]
    update?: ViajeUpdateWithWhereUniqueWithoutPreoperacionalInput | ViajeUpdateWithWhereUniqueWithoutPreoperacionalInput[]
    updateMany?: ViajeUpdateManyWithWhereWithoutPreoperacionalInput | ViajeUpdateManyWithWhereWithoutPreoperacionalInput[]
    deleteMany?: ViajeScalarWhereInput | ViajeScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutRefreshTokensInput = {
    create?: XOR<UsuarioCreateWithoutRefreshTokensInput, UsuarioUncheckedCreateWithoutRefreshTokensInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutRefreshTokensInput
    connect?: UsuarioWhereUniqueInput
  }

  export type UsuarioUpdateOneRequiredWithoutRefreshTokensNestedInput = {
    create?: XOR<UsuarioCreateWithoutRefreshTokensInput, UsuarioUncheckedCreateWithoutRefreshTokensInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutRefreshTokensInput
    upsert?: UsuarioUpsertWithoutRefreshTokensInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutRefreshTokensInput, UsuarioUpdateWithoutRefreshTokensInput>, UsuarioUncheckedUpdateWithoutRefreshTokensInput>
  }

  export type UsuarioCreateNestedOneWithoutSolicitudesCreadasInput = {
    create?: XOR<UsuarioCreateWithoutSolicitudesCreadasInput, UsuarioUncheckedCreateWithoutSolicitudesCreadasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutSolicitudesCreadasInput
    connect?: UsuarioWhereUniqueInput
  }

  export type VehiculoCreateNestedOneWithoutSolicitudesInput = {
    create?: XOR<VehiculoCreateWithoutSolicitudesInput, VehiculoUncheckedCreateWithoutSolicitudesInput>
    connectOrCreate?: VehiculoCreateOrConnectWithoutSolicitudesInput
    connect?: VehiculoWhereUniqueInput
  }

  export type UsuarioCreateNestedOneWithoutSolicitudesAprobadasInput = {
    create?: XOR<UsuarioCreateWithoutSolicitudesAprobadasInput, UsuarioUncheckedCreateWithoutSolicitudesAprobadasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutSolicitudesAprobadasInput
    connect?: UsuarioWhereUniqueInput
  }

  export type PreoperacionalCreateNestedManyWithoutSolicitudInput = {
    create?: XOR<PreoperacionalCreateWithoutSolicitudInput, PreoperacionalUncheckedCreateWithoutSolicitudInput> | PreoperacionalCreateWithoutSolicitudInput[] | PreoperacionalUncheckedCreateWithoutSolicitudInput[]
    connectOrCreate?: PreoperacionalCreateOrConnectWithoutSolicitudInput | PreoperacionalCreateOrConnectWithoutSolicitudInput[]
    createMany?: PreoperacionalCreateManySolicitudInputEnvelope
    connect?: PreoperacionalWhereUniqueInput | PreoperacionalWhereUniqueInput[]
  }

  export type PreoperacionalUncheckedCreateNestedManyWithoutSolicitudInput = {
    create?: XOR<PreoperacionalCreateWithoutSolicitudInput, PreoperacionalUncheckedCreateWithoutSolicitudInput> | PreoperacionalCreateWithoutSolicitudInput[] | PreoperacionalUncheckedCreateWithoutSolicitudInput[]
    connectOrCreate?: PreoperacionalCreateOrConnectWithoutSolicitudInput | PreoperacionalCreateOrConnectWithoutSolicitudInput[]
    createMany?: PreoperacionalCreateManySolicitudInputEnvelope
    connect?: PreoperacionalWhereUniqueInput | PreoperacionalWhereUniqueInput[]
  }

  export type EnumEstadoSolicitudFieldUpdateOperationsInput = {
    set?: $Enums.EstadoSolicitud
  }

  export type UsuarioUpdateOneRequiredWithoutSolicitudesCreadasNestedInput = {
    create?: XOR<UsuarioCreateWithoutSolicitudesCreadasInput, UsuarioUncheckedCreateWithoutSolicitudesCreadasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutSolicitudesCreadasInput
    upsert?: UsuarioUpsertWithoutSolicitudesCreadasInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutSolicitudesCreadasInput, UsuarioUpdateWithoutSolicitudesCreadasInput>, UsuarioUncheckedUpdateWithoutSolicitudesCreadasInput>
  }

  export type VehiculoUpdateOneWithoutSolicitudesNestedInput = {
    create?: XOR<VehiculoCreateWithoutSolicitudesInput, VehiculoUncheckedCreateWithoutSolicitudesInput>
    connectOrCreate?: VehiculoCreateOrConnectWithoutSolicitudesInput
    upsert?: VehiculoUpsertWithoutSolicitudesInput
    disconnect?: VehiculoWhereInput | boolean
    delete?: VehiculoWhereInput | boolean
    connect?: VehiculoWhereUniqueInput
    update?: XOR<XOR<VehiculoUpdateToOneWithWhereWithoutSolicitudesInput, VehiculoUpdateWithoutSolicitudesInput>, VehiculoUncheckedUpdateWithoutSolicitudesInput>
  }

  export type UsuarioUpdateOneWithoutSolicitudesAprobadasNestedInput = {
    create?: XOR<UsuarioCreateWithoutSolicitudesAprobadasInput, UsuarioUncheckedCreateWithoutSolicitudesAprobadasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutSolicitudesAprobadasInput
    upsert?: UsuarioUpsertWithoutSolicitudesAprobadasInput
    disconnect?: UsuarioWhereInput | boolean
    delete?: UsuarioWhereInput | boolean
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutSolicitudesAprobadasInput, UsuarioUpdateWithoutSolicitudesAprobadasInput>, UsuarioUncheckedUpdateWithoutSolicitudesAprobadasInput>
  }

  export type PreoperacionalUpdateManyWithoutSolicitudNestedInput = {
    create?: XOR<PreoperacionalCreateWithoutSolicitudInput, PreoperacionalUncheckedCreateWithoutSolicitudInput> | PreoperacionalCreateWithoutSolicitudInput[] | PreoperacionalUncheckedCreateWithoutSolicitudInput[]
    connectOrCreate?: PreoperacionalCreateOrConnectWithoutSolicitudInput | PreoperacionalCreateOrConnectWithoutSolicitudInput[]
    upsert?: PreoperacionalUpsertWithWhereUniqueWithoutSolicitudInput | PreoperacionalUpsertWithWhereUniqueWithoutSolicitudInput[]
    createMany?: PreoperacionalCreateManySolicitudInputEnvelope
    set?: PreoperacionalWhereUniqueInput | PreoperacionalWhereUniqueInput[]
    disconnect?: PreoperacionalWhereUniqueInput | PreoperacionalWhereUniqueInput[]
    delete?: PreoperacionalWhereUniqueInput | PreoperacionalWhereUniqueInput[]
    connect?: PreoperacionalWhereUniqueInput | PreoperacionalWhereUniqueInput[]
    update?: PreoperacionalUpdateWithWhereUniqueWithoutSolicitudInput | PreoperacionalUpdateWithWhereUniqueWithoutSolicitudInput[]
    updateMany?: PreoperacionalUpdateManyWithWhereWithoutSolicitudInput | PreoperacionalUpdateManyWithWhereWithoutSolicitudInput[]
    deleteMany?: PreoperacionalScalarWhereInput | PreoperacionalScalarWhereInput[]
  }

  export type PreoperacionalUncheckedUpdateManyWithoutSolicitudNestedInput = {
    create?: XOR<PreoperacionalCreateWithoutSolicitudInput, PreoperacionalUncheckedCreateWithoutSolicitudInput> | PreoperacionalCreateWithoutSolicitudInput[] | PreoperacionalUncheckedCreateWithoutSolicitudInput[]
    connectOrCreate?: PreoperacionalCreateOrConnectWithoutSolicitudInput | PreoperacionalCreateOrConnectWithoutSolicitudInput[]
    upsert?: PreoperacionalUpsertWithWhereUniqueWithoutSolicitudInput | PreoperacionalUpsertWithWhereUniqueWithoutSolicitudInput[]
    createMany?: PreoperacionalCreateManySolicitudInputEnvelope
    set?: PreoperacionalWhereUniqueInput | PreoperacionalWhereUniqueInput[]
    disconnect?: PreoperacionalWhereUniqueInput | PreoperacionalWhereUniqueInput[]
    delete?: PreoperacionalWhereUniqueInput | PreoperacionalWhereUniqueInput[]
    connect?: PreoperacionalWhereUniqueInput | PreoperacionalWhereUniqueInput[]
    update?: PreoperacionalUpdateWithWhereUniqueWithoutSolicitudInput | PreoperacionalUpdateWithWhereUniqueWithoutSolicitudInput[]
    updateMany?: PreoperacionalUpdateManyWithWhereWithoutSolicitudInput | PreoperacionalUpdateManyWithWhereWithoutSolicitudInput[]
    deleteMany?: PreoperacionalScalarWhereInput | PreoperacionalScalarWhereInput[]
  }

  export type VehiculoCreateNestedOneWithoutViajesInput = {
    create?: XOR<VehiculoCreateWithoutViajesInput, VehiculoUncheckedCreateWithoutViajesInput>
    connectOrCreate?: VehiculoCreateOrConnectWithoutViajesInput
    connect?: VehiculoWhereUniqueInput
  }

  export type UsuarioCreateNestedOneWithoutViajesInput = {
    create?: XOR<UsuarioCreateWithoutViajesInput, UsuarioUncheckedCreateWithoutViajesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutViajesInput
    connect?: UsuarioWhereUniqueInput
  }

  export type PreoperacionalCreateNestedOneWithoutViajesInput = {
    create?: XOR<PreoperacionalCreateWithoutViajesInput, PreoperacionalUncheckedCreateWithoutViajesInput>
    connectOrCreate?: PreoperacionalCreateOrConnectWithoutViajesInput
    connect?: PreoperacionalWhereUniqueInput
  }

  export type PuntoGpsCreateNestedManyWithoutViajeInput = {
    connect?: PuntoGpsWhereUniqueInput | PuntoGpsWhereUniqueInput[]
  }

  export type PuntoGpsUncheckedCreateNestedManyWithoutViajeInput = {
    connect?: PuntoGpsWhereUniqueInput | PuntoGpsWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumEstadoViajeFieldUpdateOperationsInput = {
    set?: $Enums.EstadoViaje
  }

  export type VehiculoUpdateOneRequiredWithoutViajesNestedInput = {
    create?: XOR<VehiculoCreateWithoutViajesInput, VehiculoUncheckedCreateWithoutViajesInput>
    connectOrCreate?: VehiculoCreateOrConnectWithoutViajesInput
    upsert?: VehiculoUpsertWithoutViajesInput
    connect?: VehiculoWhereUniqueInput
    update?: XOR<XOR<VehiculoUpdateToOneWithWhereWithoutViajesInput, VehiculoUpdateWithoutViajesInput>, VehiculoUncheckedUpdateWithoutViajesInput>
  }

  export type UsuarioUpdateOneRequiredWithoutViajesNestedInput = {
    create?: XOR<UsuarioCreateWithoutViajesInput, UsuarioUncheckedCreateWithoutViajesInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutViajesInput
    upsert?: UsuarioUpsertWithoutViajesInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutViajesInput, UsuarioUpdateWithoutViajesInput>, UsuarioUncheckedUpdateWithoutViajesInput>
  }

  export type PreoperacionalUpdateOneWithoutViajesNestedInput = {
    create?: XOR<PreoperacionalCreateWithoutViajesInput, PreoperacionalUncheckedCreateWithoutViajesInput>
    connectOrCreate?: PreoperacionalCreateOrConnectWithoutViajesInput
    upsert?: PreoperacionalUpsertWithoutViajesInput
    disconnect?: PreoperacionalWhereInput | boolean
    delete?: PreoperacionalWhereInput | boolean
    connect?: PreoperacionalWhereUniqueInput
    update?: XOR<XOR<PreoperacionalUpdateToOneWithWhereWithoutViajesInput, PreoperacionalUpdateWithoutViajesInput>, PreoperacionalUncheckedUpdateWithoutViajesInput>
  }

  export type PuntoGpsUpdateManyWithoutViajeNestedInput = {
    set?: PuntoGpsWhereUniqueInput | PuntoGpsWhereUniqueInput[]
    disconnect?: PuntoGpsWhereUniqueInput | PuntoGpsWhereUniqueInput[]
    delete?: PuntoGpsWhereUniqueInput | PuntoGpsWhereUniqueInput[]
    connect?: PuntoGpsWhereUniqueInput | PuntoGpsWhereUniqueInput[]
    update?: PuntoGpsUpdateWithWhereUniqueWithoutViajeInput | PuntoGpsUpdateWithWhereUniqueWithoutViajeInput[]
    updateMany?: PuntoGpsUpdateManyWithWhereWithoutViajeInput | PuntoGpsUpdateManyWithWhereWithoutViajeInput[]
    deleteMany?: PuntoGpsScalarWhereInput | PuntoGpsScalarWhereInput[]
  }

  export type PuntoGpsUncheckedUpdateManyWithoutViajeNestedInput = {
    set?: PuntoGpsWhereUniqueInput | PuntoGpsWhereUniqueInput[]
    disconnect?: PuntoGpsWhereUniqueInput | PuntoGpsWhereUniqueInput[]
    delete?: PuntoGpsWhereUniqueInput | PuntoGpsWhereUniqueInput[]
    connect?: PuntoGpsWhereUniqueInput | PuntoGpsWhereUniqueInput[]
    update?: PuntoGpsUpdateWithWhereUniqueWithoutViajeInput | PuntoGpsUpdateWithWhereUniqueWithoutViajeInput[]
    updateMany?: PuntoGpsUpdateManyWithWhereWithoutViajeInput | PuntoGpsUpdateManyWithWhereWithoutViajeInput[]
    deleteMany?: PuntoGpsScalarWhereInput | PuntoGpsScalarWhereInput[]
  }

  export type ViajeUpdateOneRequiredWithoutPuntosGpsNestedInput = {
    create?: XOR<ViajeCreateWithoutPuntosGpsInput, ViajeUncheckedCreateWithoutPuntosGpsInput>
    connectOrCreate?: ViajeCreateOrConnectWithoutPuntosGpsInput
    upsert?: ViajeUpsertWithoutPuntosGpsInput
    connect?: ViajeWhereUniqueInput
    update?: XOR<XOR<ViajeUpdateToOneWithWhereWithoutPuntosGpsInput, ViajeUpdateWithoutPuntosGpsInput>, ViajeUncheckedUpdateWithoutPuntosGpsInput>
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

  export type NestedEnumRolFilter<$PrismaModel = never> = {
    equals?: $Enums.Rol | EnumRolFieldRefInput<$PrismaModel>
    in?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    notIn?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    not?: NestedEnumRolFilter<$PrismaModel> | $Enums.Rol
  }

  export type NestedEnumOrigenFilter<$PrismaModel = never> = {
    equals?: $Enums.Origen | EnumOrigenFieldRefInput<$PrismaModel>
    in?: $Enums.Origen[] | ListEnumOrigenFieldRefInput<$PrismaModel>
    notIn?: $Enums.Origen[] | ListEnumOrigenFieldRefInput<$PrismaModel>
    not?: NestedEnumOrigenFilter<$PrismaModel> | $Enums.Origen
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedEnumRolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Rol | EnumRolFieldRefInput<$PrismaModel>
    in?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    notIn?: $Enums.Rol[] | ListEnumRolFieldRefInput<$PrismaModel>
    not?: NestedEnumRolWithAggregatesFilter<$PrismaModel> | $Enums.Rol
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRolFilter<$PrismaModel>
    _max?: NestedEnumRolFilter<$PrismaModel>
  }

  export type NestedEnumOrigenWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Origen | EnumOrigenFieldRefInput<$PrismaModel>
    in?: $Enums.Origen[] | ListEnumOrigenFieldRefInput<$PrismaModel>
    notIn?: $Enums.Origen[] | ListEnumOrigenFieldRefInput<$PrismaModel>
    not?: NestedEnumOrigenWithAggregatesFilter<$PrismaModel> | $Enums.Origen
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrigenFilter<$PrismaModel>
    _max?: NestedEnumOrigenFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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

  export type NestedEnumEstadoSolicitudFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoSolicitud | EnumEstadoSolicitudFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoSolicitud[] | ListEnumEstadoSolicitudFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoSolicitud[] | ListEnumEstadoSolicitudFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoSolicitudFilter<$PrismaModel> | $Enums.EstadoSolicitud
  }

  export type NestedEnumEstadoSolicitudWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoSolicitud | EnumEstadoSolicitudFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoSolicitud[] | ListEnumEstadoSolicitudFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoSolicitud[] | ListEnumEstadoSolicitudFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoSolicitudWithAggregatesFilter<$PrismaModel> | $Enums.EstadoSolicitud
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoSolicitudFilter<$PrismaModel>
    _max?: NestedEnumEstadoSolicitudFilter<$PrismaModel>
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

  export type NestedEnumEstadoViajeFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoViaje | EnumEstadoViajeFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoViaje[] | ListEnumEstadoViajeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoViaje[] | ListEnumEstadoViajeFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoViajeFilter<$PrismaModel> | $Enums.EstadoViaje
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

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedEnumEstadoViajeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoViaje | EnumEstadoViajeFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoViaje[] | ListEnumEstadoViajeFieldRefInput<$PrismaModel>
    notIn?: $Enums.EstadoViaje[] | ListEnumEstadoViajeFieldRefInput<$PrismaModel>
    not?: NestedEnumEstadoViajeWithAggregatesFilter<$PrismaModel> | $Enums.EstadoViaje
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoViajeFilter<$PrismaModel>
    _max?: NestedEnumEstadoViajeFilter<$PrismaModel>
  }

  export type PreoperacionalCreateWithoutUsuarioInput = {
    consecutivo?: number
    fecha?: Date | string
    respuestas: JsonNullValueInput | InputJsonValue
    firmaUrl?: string | null
    observaciones?: string | null
    createdAt?: Date | string
    vehiculo: VehiculoCreateNestedOneWithoutPreoperacionalesInput
    solicitud?: SolicitudCreateNestedOneWithoutPreoperacionalesInput
    viajes?: ViajeCreateNestedManyWithoutPreoperacionalInput
  }

  export type PreoperacionalUncheckedCreateWithoutUsuarioInput = {
    id?: number
    consecutivo?: number
    fecha?: Date | string
    respuestas: JsonNullValueInput | InputJsonValue
    firmaUrl?: string | null
    observaciones?: string | null
    vehiculoId: number
    createdAt?: Date | string
    solicitudId?: number | null
    viajes?: ViajeUncheckedCreateNestedManyWithoutPreoperacionalInput
  }

  export type PreoperacionalCreateOrConnectWithoutUsuarioInput = {
    where: PreoperacionalWhereUniqueInput
    create: XOR<PreoperacionalCreateWithoutUsuarioInput, PreoperacionalUncheckedCreateWithoutUsuarioInput>
  }

  export type PreoperacionalCreateManyUsuarioInputEnvelope = {
    data: PreoperacionalCreateManyUsuarioInput | PreoperacionalCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type RefreshTokenCreateWithoutUsuarioInput = {
    token: string
    expiresAt: Date | string
    revocado?: boolean
    createdAt?: Date | string
  }

  export type RefreshTokenUncheckedCreateWithoutUsuarioInput = {
    id?: number
    token: string
    expiresAt: Date | string
    revocado?: boolean
    createdAt?: Date | string
  }

  export type RefreshTokenCreateOrConnectWithoutUsuarioInput = {
    where: RefreshTokenWhereUniqueInput
    create: XOR<RefreshTokenCreateWithoutUsuarioInput, RefreshTokenUncheckedCreateWithoutUsuarioInput>
  }

  export type RefreshTokenCreateManyUsuarioInputEnvelope = {
    data: RefreshTokenCreateManyUsuarioInput | RefreshTokenCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type SolicitudCreateWithoutUsuarioSolicitanteInput = {
    motivo: string
    destino: string
    fechaRequerida: Date | string
    estado?: $Enums.EstadoSolicitud
    createdAt?: Date | string
    vehiculoAsignado?: VehiculoCreateNestedOneWithoutSolicitudesInput
    aprobadoPor?: UsuarioCreateNestedOneWithoutSolicitudesAprobadasInput
    preoperacionales?: PreoperacionalCreateNestedManyWithoutSolicitudInput
  }

  export type SolicitudUncheckedCreateWithoutUsuarioSolicitanteInput = {
    id?: number
    motivo: string
    destino: string
    fechaRequerida: Date | string
    estado?: $Enums.EstadoSolicitud
    vehiculoAsignadoId?: number | null
    aprobadoPorId?: number | null
    createdAt?: Date | string
    preoperacionales?: PreoperacionalUncheckedCreateNestedManyWithoutSolicitudInput
  }

  export type SolicitudCreateOrConnectWithoutUsuarioSolicitanteInput = {
    where: SolicitudWhereUniqueInput
    create: XOR<SolicitudCreateWithoutUsuarioSolicitanteInput, SolicitudUncheckedCreateWithoutUsuarioSolicitanteInput>
  }

  export type SolicitudCreateManyUsuarioSolicitanteInputEnvelope = {
    data: SolicitudCreateManyUsuarioSolicitanteInput | SolicitudCreateManyUsuarioSolicitanteInput[]
    skipDuplicates?: boolean
  }

  export type SolicitudCreateWithoutAprobadoPorInput = {
    motivo: string
    destino: string
    fechaRequerida: Date | string
    estado?: $Enums.EstadoSolicitud
    createdAt?: Date | string
    usuarioSolicitante: UsuarioCreateNestedOneWithoutSolicitudesCreadasInput
    vehiculoAsignado?: VehiculoCreateNestedOneWithoutSolicitudesInput
    preoperacionales?: PreoperacionalCreateNestedManyWithoutSolicitudInput
  }

  export type SolicitudUncheckedCreateWithoutAprobadoPorInput = {
    id?: number
    usuarioSolicitanteId: number
    motivo: string
    destino: string
    fechaRequerida: Date | string
    estado?: $Enums.EstadoSolicitud
    vehiculoAsignadoId?: number | null
    createdAt?: Date | string
    preoperacionales?: PreoperacionalUncheckedCreateNestedManyWithoutSolicitudInput
  }

  export type SolicitudCreateOrConnectWithoutAprobadoPorInput = {
    where: SolicitudWhereUniqueInput
    create: XOR<SolicitudCreateWithoutAprobadoPorInput, SolicitudUncheckedCreateWithoutAprobadoPorInput>
  }

  export type SolicitudCreateManyAprobadoPorInputEnvelope = {
    data: SolicitudCreateManyAprobadoPorInput | SolicitudCreateManyAprobadoPorInput[]
    skipDuplicates?: boolean
  }

  export type ViajeCreateWithoutConductorInput = {
    id: string
    horaInicio: Date | string
    horaFin?: Date | string | null
    distanciaTotalKm?: number | null
    velocidadPromedio?: number | null
    velocidadMaxima?: number | null
    estado?: $Enums.EstadoViaje
    archivoRutaUrl?: string | null
    createdAt?: Date | string
    vehiculo: VehiculoCreateNestedOneWithoutViajesInput
    preoperacional?: PreoperacionalCreateNestedOneWithoutViajesInput
    puntosGps?: PuntoGpsCreateNestedManyWithoutViajeInput
  }

  export type ViajeUncheckedCreateWithoutConductorInput = {
    id: string
    vehiculoId: number
    preoperacionalId?: number | null
    horaInicio: Date | string
    horaFin?: Date | string | null
    distanciaTotalKm?: number | null
    velocidadPromedio?: number | null
    velocidadMaxima?: number | null
    estado?: $Enums.EstadoViaje
    archivoRutaUrl?: string | null
    createdAt?: Date | string
    puntosGps?: PuntoGpsUncheckedCreateNestedManyWithoutViajeInput
  }

  export type ViajeCreateOrConnectWithoutConductorInput = {
    where: ViajeWhereUniqueInput
    create: XOR<ViajeCreateWithoutConductorInput, ViajeUncheckedCreateWithoutConductorInput>
  }

  export type ViajeCreateManyConductorInputEnvelope = {
    data: ViajeCreateManyConductorInput | ViajeCreateManyConductorInput[]
    skipDuplicates?: boolean
  }

  export type PreoperacionalUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: PreoperacionalWhereUniqueInput
    update: XOR<PreoperacionalUpdateWithoutUsuarioInput, PreoperacionalUncheckedUpdateWithoutUsuarioInput>
    create: XOR<PreoperacionalCreateWithoutUsuarioInput, PreoperacionalUncheckedCreateWithoutUsuarioInput>
  }

  export type PreoperacionalUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: PreoperacionalWhereUniqueInput
    data: XOR<PreoperacionalUpdateWithoutUsuarioInput, PreoperacionalUncheckedUpdateWithoutUsuarioInput>
  }

  export type PreoperacionalUpdateManyWithWhereWithoutUsuarioInput = {
    where: PreoperacionalScalarWhereInput
    data: XOR<PreoperacionalUpdateManyMutationInput, PreoperacionalUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type PreoperacionalScalarWhereInput = {
    AND?: PreoperacionalScalarWhereInput | PreoperacionalScalarWhereInput[]
    OR?: PreoperacionalScalarWhereInput[]
    NOT?: PreoperacionalScalarWhereInput | PreoperacionalScalarWhereInput[]
    id?: IntFilter<"Preoperacional"> | number
    consecutivo?: IntFilter<"Preoperacional"> | number
    fecha?: DateTimeFilter<"Preoperacional"> | Date | string
    respuestas?: JsonFilter<"Preoperacional">
    firmaUrl?: StringNullableFilter<"Preoperacional"> | string | null
    observaciones?: StringNullableFilter<"Preoperacional"> | string | null
    usuarioId?: IntFilter<"Preoperacional"> | number
    vehiculoId?: IntFilter<"Preoperacional"> | number
    createdAt?: DateTimeFilter<"Preoperacional"> | Date | string
    solicitudId?: IntNullableFilter<"Preoperacional"> | number | null
  }

  export type RefreshTokenUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: RefreshTokenWhereUniqueInput
    update: XOR<RefreshTokenUpdateWithoutUsuarioInput, RefreshTokenUncheckedUpdateWithoutUsuarioInput>
    create: XOR<RefreshTokenCreateWithoutUsuarioInput, RefreshTokenUncheckedCreateWithoutUsuarioInput>
  }

  export type RefreshTokenUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: RefreshTokenWhereUniqueInput
    data: XOR<RefreshTokenUpdateWithoutUsuarioInput, RefreshTokenUncheckedUpdateWithoutUsuarioInput>
  }

  export type RefreshTokenUpdateManyWithWhereWithoutUsuarioInput = {
    where: RefreshTokenScalarWhereInput
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type RefreshTokenScalarWhereInput = {
    AND?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
    OR?: RefreshTokenScalarWhereInput[]
    NOT?: RefreshTokenScalarWhereInput | RefreshTokenScalarWhereInput[]
    id?: IntFilter<"RefreshToken"> | number
    token?: StringFilter<"RefreshToken"> | string
    usuarioId?: IntFilter<"RefreshToken"> | number
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    revocado?: BoolFilter<"RefreshToken"> | boolean
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string
  }

  export type SolicitudUpsertWithWhereUniqueWithoutUsuarioSolicitanteInput = {
    where: SolicitudWhereUniqueInput
    update: XOR<SolicitudUpdateWithoutUsuarioSolicitanteInput, SolicitudUncheckedUpdateWithoutUsuarioSolicitanteInput>
    create: XOR<SolicitudCreateWithoutUsuarioSolicitanteInput, SolicitudUncheckedCreateWithoutUsuarioSolicitanteInput>
  }

  export type SolicitudUpdateWithWhereUniqueWithoutUsuarioSolicitanteInput = {
    where: SolicitudWhereUniqueInput
    data: XOR<SolicitudUpdateWithoutUsuarioSolicitanteInput, SolicitudUncheckedUpdateWithoutUsuarioSolicitanteInput>
  }

  export type SolicitudUpdateManyWithWhereWithoutUsuarioSolicitanteInput = {
    where: SolicitudScalarWhereInput
    data: XOR<SolicitudUpdateManyMutationInput, SolicitudUncheckedUpdateManyWithoutUsuarioSolicitanteInput>
  }

  export type SolicitudScalarWhereInput = {
    AND?: SolicitudScalarWhereInput | SolicitudScalarWhereInput[]
    OR?: SolicitudScalarWhereInput[]
    NOT?: SolicitudScalarWhereInput | SolicitudScalarWhereInput[]
    id?: IntFilter<"Solicitud"> | number
    usuarioSolicitanteId?: IntFilter<"Solicitud"> | number
    motivo?: StringFilter<"Solicitud"> | string
    destino?: StringFilter<"Solicitud"> | string
    fechaRequerida?: DateTimeFilter<"Solicitud"> | Date | string
    estado?: EnumEstadoSolicitudFilter<"Solicitud"> | $Enums.EstadoSolicitud
    vehiculoAsignadoId?: IntNullableFilter<"Solicitud"> | number | null
    aprobadoPorId?: IntNullableFilter<"Solicitud"> | number | null
    createdAt?: DateTimeFilter<"Solicitud"> | Date | string
  }

  export type SolicitudUpsertWithWhereUniqueWithoutAprobadoPorInput = {
    where: SolicitudWhereUniqueInput
    update: XOR<SolicitudUpdateWithoutAprobadoPorInput, SolicitudUncheckedUpdateWithoutAprobadoPorInput>
    create: XOR<SolicitudCreateWithoutAprobadoPorInput, SolicitudUncheckedCreateWithoutAprobadoPorInput>
  }

  export type SolicitudUpdateWithWhereUniqueWithoutAprobadoPorInput = {
    where: SolicitudWhereUniqueInput
    data: XOR<SolicitudUpdateWithoutAprobadoPorInput, SolicitudUncheckedUpdateWithoutAprobadoPorInput>
  }

  export type SolicitudUpdateManyWithWhereWithoutAprobadoPorInput = {
    where: SolicitudScalarWhereInput
    data: XOR<SolicitudUpdateManyMutationInput, SolicitudUncheckedUpdateManyWithoutAprobadoPorInput>
  }

  export type ViajeUpsertWithWhereUniqueWithoutConductorInput = {
    where: ViajeWhereUniqueInput
    update: XOR<ViajeUpdateWithoutConductorInput, ViajeUncheckedUpdateWithoutConductorInput>
    create: XOR<ViajeCreateWithoutConductorInput, ViajeUncheckedCreateWithoutConductorInput>
  }

  export type ViajeUpdateWithWhereUniqueWithoutConductorInput = {
    where: ViajeWhereUniqueInput
    data: XOR<ViajeUpdateWithoutConductorInput, ViajeUncheckedUpdateWithoutConductorInput>
  }

  export type ViajeUpdateManyWithWhereWithoutConductorInput = {
    where: ViajeScalarWhereInput
    data: XOR<ViajeUpdateManyMutationInput, ViajeUncheckedUpdateManyWithoutConductorInput>
  }

  export type ViajeScalarWhereInput = {
    AND?: ViajeScalarWhereInput | ViajeScalarWhereInput[]
    OR?: ViajeScalarWhereInput[]
    NOT?: ViajeScalarWhereInput | ViajeScalarWhereInput[]
    id?: StringFilter<"Viaje"> | string
    vehiculoId?: IntFilter<"Viaje"> | number
    conductorId?: IntFilter<"Viaje"> | number
    preoperacionalId?: IntNullableFilter<"Viaje"> | number | null
    horaInicio?: DateTimeFilter<"Viaje"> | Date | string
    horaFin?: DateTimeNullableFilter<"Viaje"> | Date | string | null
    distanciaTotalKm?: FloatNullableFilter<"Viaje"> | number | null
    velocidadPromedio?: FloatNullableFilter<"Viaje"> | number | null
    velocidadMaxima?: FloatNullableFilter<"Viaje"> | number | null
    estado?: EnumEstadoViajeFilter<"Viaje"> | $Enums.EstadoViaje
    archivoRutaUrl?: StringNullableFilter<"Viaje"> | string | null
    createdAt?: DateTimeFilter<"Viaje"> | Date | string
  }

  export type PreoperacionalCreateWithoutVehiculoInput = {
    consecutivo?: number
    fecha?: Date | string
    respuestas: JsonNullValueInput | InputJsonValue
    firmaUrl?: string | null
    observaciones?: string | null
    createdAt?: Date | string
    usuario: UsuarioCreateNestedOneWithoutPreoperacionalesInput
    solicitud?: SolicitudCreateNestedOneWithoutPreoperacionalesInput
    viajes?: ViajeCreateNestedManyWithoutPreoperacionalInput
  }

  export type PreoperacionalUncheckedCreateWithoutVehiculoInput = {
    id?: number
    consecutivo?: number
    fecha?: Date | string
    respuestas: JsonNullValueInput | InputJsonValue
    firmaUrl?: string | null
    observaciones?: string | null
    usuarioId: number
    createdAt?: Date | string
    solicitudId?: number | null
    viajes?: ViajeUncheckedCreateNestedManyWithoutPreoperacionalInput
  }

  export type PreoperacionalCreateOrConnectWithoutVehiculoInput = {
    where: PreoperacionalWhereUniqueInput
    create: XOR<PreoperacionalCreateWithoutVehiculoInput, PreoperacionalUncheckedCreateWithoutVehiculoInput>
  }

  export type PreoperacionalCreateManyVehiculoInputEnvelope = {
    data: PreoperacionalCreateManyVehiculoInput | PreoperacionalCreateManyVehiculoInput[]
    skipDuplicates?: boolean
  }

  export type SolicitudCreateWithoutVehiculoAsignadoInput = {
    motivo: string
    destino: string
    fechaRequerida: Date | string
    estado?: $Enums.EstadoSolicitud
    createdAt?: Date | string
    usuarioSolicitante: UsuarioCreateNestedOneWithoutSolicitudesCreadasInput
    aprobadoPor?: UsuarioCreateNestedOneWithoutSolicitudesAprobadasInput
    preoperacionales?: PreoperacionalCreateNestedManyWithoutSolicitudInput
  }

  export type SolicitudUncheckedCreateWithoutVehiculoAsignadoInput = {
    id?: number
    usuarioSolicitanteId: number
    motivo: string
    destino: string
    fechaRequerida: Date | string
    estado?: $Enums.EstadoSolicitud
    aprobadoPorId?: number | null
    createdAt?: Date | string
    preoperacionales?: PreoperacionalUncheckedCreateNestedManyWithoutSolicitudInput
  }

  export type SolicitudCreateOrConnectWithoutVehiculoAsignadoInput = {
    where: SolicitudWhereUniqueInput
    create: XOR<SolicitudCreateWithoutVehiculoAsignadoInput, SolicitudUncheckedCreateWithoutVehiculoAsignadoInput>
  }

  export type SolicitudCreateManyVehiculoAsignadoInputEnvelope = {
    data: SolicitudCreateManyVehiculoAsignadoInput | SolicitudCreateManyVehiculoAsignadoInput[]
    skipDuplicates?: boolean
  }

  export type ViajeCreateWithoutVehiculoInput = {
    id: string
    horaInicio: Date | string
    horaFin?: Date | string | null
    distanciaTotalKm?: number | null
    velocidadPromedio?: number | null
    velocidadMaxima?: number | null
    estado?: $Enums.EstadoViaje
    archivoRutaUrl?: string | null
    createdAt?: Date | string
    conductor: UsuarioCreateNestedOneWithoutViajesInput
    preoperacional?: PreoperacionalCreateNestedOneWithoutViajesInput
    puntosGps?: PuntoGpsCreateNestedManyWithoutViajeInput
  }

  export type ViajeUncheckedCreateWithoutVehiculoInput = {
    id: string
    conductorId: number
    preoperacionalId?: number | null
    horaInicio: Date | string
    horaFin?: Date | string | null
    distanciaTotalKm?: number | null
    velocidadPromedio?: number | null
    velocidadMaxima?: number | null
    estado?: $Enums.EstadoViaje
    archivoRutaUrl?: string | null
    createdAt?: Date | string
    puntosGps?: PuntoGpsUncheckedCreateNestedManyWithoutViajeInput
  }

  export type ViajeCreateOrConnectWithoutVehiculoInput = {
    where: ViajeWhereUniqueInput
    create: XOR<ViajeCreateWithoutVehiculoInput, ViajeUncheckedCreateWithoutVehiculoInput>
  }

  export type ViajeCreateManyVehiculoInputEnvelope = {
    data: ViajeCreateManyVehiculoInput | ViajeCreateManyVehiculoInput[]
    skipDuplicates?: boolean
  }

  export type PreoperacionalUpsertWithWhereUniqueWithoutVehiculoInput = {
    where: PreoperacionalWhereUniqueInput
    update: XOR<PreoperacionalUpdateWithoutVehiculoInput, PreoperacionalUncheckedUpdateWithoutVehiculoInput>
    create: XOR<PreoperacionalCreateWithoutVehiculoInput, PreoperacionalUncheckedCreateWithoutVehiculoInput>
  }

  export type PreoperacionalUpdateWithWhereUniqueWithoutVehiculoInput = {
    where: PreoperacionalWhereUniqueInput
    data: XOR<PreoperacionalUpdateWithoutVehiculoInput, PreoperacionalUncheckedUpdateWithoutVehiculoInput>
  }

  export type PreoperacionalUpdateManyWithWhereWithoutVehiculoInput = {
    where: PreoperacionalScalarWhereInput
    data: XOR<PreoperacionalUpdateManyMutationInput, PreoperacionalUncheckedUpdateManyWithoutVehiculoInput>
  }

  export type SolicitudUpsertWithWhereUniqueWithoutVehiculoAsignadoInput = {
    where: SolicitudWhereUniqueInput
    update: XOR<SolicitudUpdateWithoutVehiculoAsignadoInput, SolicitudUncheckedUpdateWithoutVehiculoAsignadoInput>
    create: XOR<SolicitudCreateWithoutVehiculoAsignadoInput, SolicitudUncheckedCreateWithoutVehiculoAsignadoInput>
  }

  export type SolicitudUpdateWithWhereUniqueWithoutVehiculoAsignadoInput = {
    where: SolicitudWhereUniqueInput
    data: XOR<SolicitudUpdateWithoutVehiculoAsignadoInput, SolicitudUncheckedUpdateWithoutVehiculoAsignadoInput>
  }

  export type SolicitudUpdateManyWithWhereWithoutVehiculoAsignadoInput = {
    where: SolicitudScalarWhereInput
    data: XOR<SolicitudUpdateManyMutationInput, SolicitudUncheckedUpdateManyWithoutVehiculoAsignadoInput>
  }

  export type ViajeUpsertWithWhereUniqueWithoutVehiculoInput = {
    where: ViajeWhereUniqueInput
    update: XOR<ViajeUpdateWithoutVehiculoInput, ViajeUncheckedUpdateWithoutVehiculoInput>
    create: XOR<ViajeCreateWithoutVehiculoInput, ViajeUncheckedCreateWithoutVehiculoInput>
  }

  export type ViajeUpdateWithWhereUniqueWithoutVehiculoInput = {
    where: ViajeWhereUniqueInput
    data: XOR<ViajeUpdateWithoutVehiculoInput, ViajeUncheckedUpdateWithoutVehiculoInput>
  }

  export type ViajeUpdateManyWithWhereWithoutVehiculoInput = {
    where: ViajeScalarWhereInput
    data: XOR<ViajeUpdateManyMutationInput, ViajeUncheckedUpdateManyWithoutVehiculoInput>
  }

  export type UsuarioCreateWithoutPreoperacionalesInput = {
    nombre: string
    cedula: string
    email: string
    passwordHash: string
    rol: $Enums.Rol
    origen: $Enums.Origen
    activo?: boolean
    createdAt?: Date | string
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUsuarioInput
    solicitudesCreadas?: SolicitudCreateNestedManyWithoutUsuarioSolicitanteInput
    solicitudesAprobadas?: SolicitudCreateNestedManyWithoutAprobadoPorInput
    viajes?: ViajeCreateNestedManyWithoutConductorInput
  }

  export type UsuarioUncheckedCreateWithoutPreoperacionalesInput = {
    id?: number
    nombre: string
    cedula: string
    email: string
    passwordHash: string
    rol: $Enums.Rol
    origen: $Enums.Origen
    activo?: boolean
    createdAt?: Date | string
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUsuarioInput
    solicitudesCreadas?: SolicitudUncheckedCreateNestedManyWithoutUsuarioSolicitanteInput
    solicitudesAprobadas?: SolicitudUncheckedCreateNestedManyWithoutAprobadoPorInput
    viajes?: ViajeUncheckedCreateNestedManyWithoutConductorInput
  }

  export type UsuarioCreateOrConnectWithoutPreoperacionalesInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutPreoperacionalesInput, UsuarioUncheckedCreateWithoutPreoperacionalesInput>
  }

  export type VehiculoCreateWithoutPreoperacionalesInput = {
    placa: string
    marca?: string | null
    modelo?: string | null
    tieneGpsFisico?: boolean
    polizaUrl?: string | null
    soatUrl?: string | null
    tecnomecanicaUrl?: string | null
    activo?: boolean
    createdAt?: Date | string
    solicitudes?: SolicitudCreateNestedManyWithoutVehiculoAsignadoInput
    viajes?: ViajeCreateNestedManyWithoutVehiculoInput
  }

  export type VehiculoUncheckedCreateWithoutPreoperacionalesInput = {
    id?: number
    placa: string
    marca?: string | null
    modelo?: string | null
    tieneGpsFisico?: boolean
    polizaUrl?: string | null
    soatUrl?: string | null
    tecnomecanicaUrl?: string | null
    activo?: boolean
    createdAt?: Date | string
    solicitudes?: SolicitudUncheckedCreateNestedManyWithoutVehiculoAsignadoInput
    viajes?: ViajeUncheckedCreateNestedManyWithoutVehiculoInput
  }

  export type VehiculoCreateOrConnectWithoutPreoperacionalesInput = {
    where: VehiculoWhereUniqueInput
    create: XOR<VehiculoCreateWithoutPreoperacionalesInput, VehiculoUncheckedCreateWithoutPreoperacionalesInput>
  }

  export type SolicitudCreateWithoutPreoperacionalesInput = {
    motivo: string
    destino: string
    fechaRequerida: Date | string
    estado?: $Enums.EstadoSolicitud
    createdAt?: Date | string
    usuarioSolicitante: UsuarioCreateNestedOneWithoutSolicitudesCreadasInput
    vehiculoAsignado?: VehiculoCreateNestedOneWithoutSolicitudesInput
    aprobadoPor?: UsuarioCreateNestedOneWithoutSolicitudesAprobadasInput
  }

  export type SolicitudUncheckedCreateWithoutPreoperacionalesInput = {
    id?: number
    usuarioSolicitanteId: number
    motivo: string
    destino: string
    fechaRequerida: Date | string
    estado?: $Enums.EstadoSolicitud
    vehiculoAsignadoId?: number | null
    aprobadoPorId?: number | null
    createdAt?: Date | string
  }

  export type SolicitudCreateOrConnectWithoutPreoperacionalesInput = {
    where: SolicitudWhereUniqueInput
    create: XOR<SolicitudCreateWithoutPreoperacionalesInput, SolicitudUncheckedCreateWithoutPreoperacionalesInput>
  }

  export type ViajeCreateWithoutPreoperacionalInput = {
    id: string
    horaInicio: Date | string
    horaFin?: Date | string | null
    distanciaTotalKm?: number | null
    velocidadPromedio?: number | null
    velocidadMaxima?: number | null
    estado?: $Enums.EstadoViaje
    archivoRutaUrl?: string | null
    createdAt?: Date | string
    vehiculo: VehiculoCreateNestedOneWithoutViajesInput
    conductor: UsuarioCreateNestedOneWithoutViajesInput
    puntosGps?: PuntoGpsCreateNestedManyWithoutViajeInput
  }

  export type ViajeUncheckedCreateWithoutPreoperacionalInput = {
    id: string
    vehiculoId: number
    conductorId: number
    horaInicio: Date | string
    horaFin?: Date | string | null
    distanciaTotalKm?: number | null
    velocidadPromedio?: number | null
    velocidadMaxima?: number | null
    estado?: $Enums.EstadoViaje
    archivoRutaUrl?: string | null
    createdAt?: Date | string
    puntosGps?: PuntoGpsUncheckedCreateNestedManyWithoutViajeInput
  }

  export type ViajeCreateOrConnectWithoutPreoperacionalInput = {
    where: ViajeWhereUniqueInput
    create: XOR<ViajeCreateWithoutPreoperacionalInput, ViajeUncheckedCreateWithoutPreoperacionalInput>
  }

  export type ViajeCreateManyPreoperacionalInputEnvelope = {
    data: ViajeCreateManyPreoperacionalInput | ViajeCreateManyPreoperacionalInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioUpsertWithoutPreoperacionalesInput = {
    update: XOR<UsuarioUpdateWithoutPreoperacionalesInput, UsuarioUncheckedUpdateWithoutPreoperacionalesInput>
    create: XOR<UsuarioCreateWithoutPreoperacionalesInput, UsuarioUncheckedCreateWithoutPreoperacionalesInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutPreoperacionalesInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutPreoperacionalesInput, UsuarioUncheckedUpdateWithoutPreoperacionalesInput>
  }

  export type UsuarioUpdateWithoutPreoperacionalesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    cedula?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    origen?: EnumOrigenFieldUpdateOperationsInput | $Enums.Origen
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshTokens?: RefreshTokenUpdateManyWithoutUsuarioNestedInput
    solicitudesCreadas?: SolicitudUpdateManyWithoutUsuarioSolicitanteNestedInput
    solicitudesAprobadas?: SolicitudUpdateManyWithoutAprobadoPorNestedInput
    viajes?: ViajeUpdateManyWithoutConductorNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutPreoperacionalesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    cedula?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    origen?: EnumOrigenFieldUpdateOperationsInput | $Enums.Origen
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUsuarioNestedInput
    solicitudesCreadas?: SolicitudUncheckedUpdateManyWithoutUsuarioSolicitanteNestedInput
    solicitudesAprobadas?: SolicitudUncheckedUpdateManyWithoutAprobadoPorNestedInput
    viajes?: ViajeUncheckedUpdateManyWithoutConductorNestedInput
  }

  export type VehiculoUpsertWithoutPreoperacionalesInput = {
    update: XOR<VehiculoUpdateWithoutPreoperacionalesInput, VehiculoUncheckedUpdateWithoutPreoperacionalesInput>
    create: XOR<VehiculoCreateWithoutPreoperacionalesInput, VehiculoUncheckedCreateWithoutPreoperacionalesInput>
    where?: VehiculoWhereInput
  }

  export type VehiculoUpdateToOneWithWhereWithoutPreoperacionalesInput = {
    where?: VehiculoWhereInput
    data: XOR<VehiculoUpdateWithoutPreoperacionalesInput, VehiculoUncheckedUpdateWithoutPreoperacionalesInput>
  }

  export type VehiculoUpdateWithoutPreoperacionalesInput = {
    placa?: StringFieldUpdateOperationsInput | string
    marca?: NullableStringFieldUpdateOperationsInput | string | null
    modelo?: NullableStringFieldUpdateOperationsInput | string | null
    tieneGpsFisico?: BoolFieldUpdateOperationsInput | boolean
    polizaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    soatUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tecnomecanicaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    solicitudes?: SolicitudUpdateManyWithoutVehiculoAsignadoNestedInput
    viajes?: ViajeUpdateManyWithoutVehiculoNestedInput
  }

  export type VehiculoUncheckedUpdateWithoutPreoperacionalesInput = {
    id?: IntFieldUpdateOperationsInput | number
    placa?: StringFieldUpdateOperationsInput | string
    marca?: NullableStringFieldUpdateOperationsInput | string | null
    modelo?: NullableStringFieldUpdateOperationsInput | string | null
    tieneGpsFisico?: BoolFieldUpdateOperationsInput | boolean
    polizaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    soatUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tecnomecanicaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    solicitudes?: SolicitudUncheckedUpdateManyWithoutVehiculoAsignadoNestedInput
    viajes?: ViajeUncheckedUpdateManyWithoutVehiculoNestedInput
  }

  export type SolicitudUpsertWithoutPreoperacionalesInput = {
    update: XOR<SolicitudUpdateWithoutPreoperacionalesInput, SolicitudUncheckedUpdateWithoutPreoperacionalesInput>
    create: XOR<SolicitudCreateWithoutPreoperacionalesInput, SolicitudUncheckedCreateWithoutPreoperacionalesInput>
    where?: SolicitudWhereInput
  }

  export type SolicitudUpdateToOneWithWhereWithoutPreoperacionalesInput = {
    where?: SolicitudWhereInput
    data: XOR<SolicitudUpdateWithoutPreoperacionalesInput, SolicitudUncheckedUpdateWithoutPreoperacionalesInput>
  }

  export type SolicitudUpdateWithoutPreoperacionalesInput = {
    motivo?: StringFieldUpdateOperationsInput | string
    destino?: StringFieldUpdateOperationsInput | string
    fechaRequerida?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: EnumEstadoSolicitudFieldUpdateOperationsInput | $Enums.EstadoSolicitud
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioSolicitante?: UsuarioUpdateOneRequiredWithoutSolicitudesCreadasNestedInput
    vehiculoAsignado?: VehiculoUpdateOneWithoutSolicitudesNestedInput
    aprobadoPor?: UsuarioUpdateOneWithoutSolicitudesAprobadasNestedInput
  }

  export type SolicitudUncheckedUpdateWithoutPreoperacionalesInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioSolicitanteId?: IntFieldUpdateOperationsInput | number
    motivo?: StringFieldUpdateOperationsInput | string
    destino?: StringFieldUpdateOperationsInput | string
    fechaRequerida?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: EnumEstadoSolicitudFieldUpdateOperationsInput | $Enums.EstadoSolicitud
    vehiculoAsignadoId?: NullableIntFieldUpdateOperationsInput | number | null
    aprobadoPorId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ViajeUpsertWithWhereUniqueWithoutPreoperacionalInput = {
    where: ViajeWhereUniqueInput
    update: XOR<ViajeUpdateWithoutPreoperacionalInput, ViajeUncheckedUpdateWithoutPreoperacionalInput>
    create: XOR<ViajeCreateWithoutPreoperacionalInput, ViajeUncheckedCreateWithoutPreoperacionalInput>
  }

  export type ViajeUpdateWithWhereUniqueWithoutPreoperacionalInput = {
    where: ViajeWhereUniqueInput
    data: XOR<ViajeUpdateWithoutPreoperacionalInput, ViajeUncheckedUpdateWithoutPreoperacionalInput>
  }

  export type ViajeUpdateManyWithWhereWithoutPreoperacionalInput = {
    where: ViajeScalarWhereInput
    data: XOR<ViajeUpdateManyMutationInput, ViajeUncheckedUpdateManyWithoutPreoperacionalInput>
  }

  export type UsuarioCreateWithoutRefreshTokensInput = {
    nombre: string
    cedula: string
    email: string
    passwordHash: string
    rol: $Enums.Rol
    origen: $Enums.Origen
    activo?: boolean
    createdAt?: Date | string
    preoperacionales?: PreoperacionalCreateNestedManyWithoutUsuarioInput
    solicitudesCreadas?: SolicitudCreateNestedManyWithoutUsuarioSolicitanteInput
    solicitudesAprobadas?: SolicitudCreateNestedManyWithoutAprobadoPorInput
    viajes?: ViajeCreateNestedManyWithoutConductorInput
  }

  export type UsuarioUncheckedCreateWithoutRefreshTokensInput = {
    id?: number
    nombre: string
    cedula: string
    email: string
    passwordHash: string
    rol: $Enums.Rol
    origen: $Enums.Origen
    activo?: boolean
    createdAt?: Date | string
    preoperacionales?: PreoperacionalUncheckedCreateNestedManyWithoutUsuarioInput
    solicitudesCreadas?: SolicitudUncheckedCreateNestedManyWithoutUsuarioSolicitanteInput
    solicitudesAprobadas?: SolicitudUncheckedCreateNestedManyWithoutAprobadoPorInput
    viajes?: ViajeUncheckedCreateNestedManyWithoutConductorInput
  }

  export type UsuarioCreateOrConnectWithoutRefreshTokensInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutRefreshTokensInput, UsuarioUncheckedCreateWithoutRefreshTokensInput>
  }

  export type UsuarioUpsertWithoutRefreshTokensInput = {
    update: XOR<UsuarioUpdateWithoutRefreshTokensInput, UsuarioUncheckedUpdateWithoutRefreshTokensInput>
    create: XOR<UsuarioCreateWithoutRefreshTokensInput, UsuarioUncheckedCreateWithoutRefreshTokensInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutRefreshTokensInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutRefreshTokensInput, UsuarioUncheckedUpdateWithoutRefreshTokensInput>
  }

  export type UsuarioUpdateWithoutRefreshTokensInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    cedula?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    origen?: EnumOrigenFieldUpdateOperationsInput | $Enums.Origen
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    preoperacionales?: PreoperacionalUpdateManyWithoutUsuarioNestedInput
    solicitudesCreadas?: SolicitudUpdateManyWithoutUsuarioSolicitanteNestedInput
    solicitudesAprobadas?: SolicitudUpdateManyWithoutAprobadoPorNestedInput
    viajes?: ViajeUpdateManyWithoutConductorNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutRefreshTokensInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    cedula?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    origen?: EnumOrigenFieldUpdateOperationsInput | $Enums.Origen
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    preoperacionales?: PreoperacionalUncheckedUpdateManyWithoutUsuarioNestedInput
    solicitudesCreadas?: SolicitudUncheckedUpdateManyWithoutUsuarioSolicitanteNestedInput
    solicitudesAprobadas?: SolicitudUncheckedUpdateManyWithoutAprobadoPorNestedInput
    viajes?: ViajeUncheckedUpdateManyWithoutConductorNestedInput
  }

  export type UsuarioCreateWithoutSolicitudesCreadasInput = {
    nombre: string
    cedula: string
    email: string
    passwordHash: string
    rol: $Enums.Rol
    origen: $Enums.Origen
    activo?: boolean
    createdAt?: Date | string
    preoperacionales?: PreoperacionalCreateNestedManyWithoutUsuarioInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUsuarioInput
    solicitudesAprobadas?: SolicitudCreateNestedManyWithoutAprobadoPorInput
    viajes?: ViajeCreateNestedManyWithoutConductorInput
  }

  export type UsuarioUncheckedCreateWithoutSolicitudesCreadasInput = {
    id?: number
    nombre: string
    cedula: string
    email: string
    passwordHash: string
    rol: $Enums.Rol
    origen: $Enums.Origen
    activo?: boolean
    createdAt?: Date | string
    preoperacionales?: PreoperacionalUncheckedCreateNestedManyWithoutUsuarioInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUsuarioInput
    solicitudesAprobadas?: SolicitudUncheckedCreateNestedManyWithoutAprobadoPorInput
    viajes?: ViajeUncheckedCreateNestedManyWithoutConductorInput
  }

  export type UsuarioCreateOrConnectWithoutSolicitudesCreadasInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutSolicitudesCreadasInput, UsuarioUncheckedCreateWithoutSolicitudesCreadasInput>
  }

  export type VehiculoCreateWithoutSolicitudesInput = {
    placa: string
    marca?: string | null
    modelo?: string | null
    tieneGpsFisico?: boolean
    polizaUrl?: string | null
    soatUrl?: string | null
    tecnomecanicaUrl?: string | null
    activo?: boolean
    createdAt?: Date | string
    preoperacionales?: PreoperacionalCreateNestedManyWithoutVehiculoInput
    viajes?: ViajeCreateNestedManyWithoutVehiculoInput
  }

  export type VehiculoUncheckedCreateWithoutSolicitudesInput = {
    id?: number
    placa: string
    marca?: string | null
    modelo?: string | null
    tieneGpsFisico?: boolean
    polizaUrl?: string | null
    soatUrl?: string | null
    tecnomecanicaUrl?: string | null
    activo?: boolean
    createdAt?: Date | string
    preoperacionales?: PreoperacionalUncheckedCreateNestedManyWithoutVehiculoInput
    viajes?: ViajeUncheckedCreateNestedManyWithoutVehiculoInput
  }

  export type VehiculoCreateOrConnectWithoutSolicitudesInput = {
    where: VehiculoWhereUniqueInput
    create: XOR<VehiculoCreateWithoutSolicitudesInput, VehiculoUncheckedCreateWithoutSolicitudesInput>
  }

  export type UsuarioCreateWithoutSolicitudesAprobadasInput = {
    nombre: string
    cedula: string
    email: string
    passwordHash: string
    rol: $Enums.Rol
    origen: $Enums.Origen
    activo?: boolean
    createdAt?: Date | string
    preoperacionales?: PreoperacionalCreateNestedManyWithoutUsuarioInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUsuarioInput
    solicitudesCreadas?: SolicitudCreateNestedManyWithoutUsuarioSolicitanteInput
    viajes?: ViajeCreateNestedManyWithoutConductorInput
  }

  export type UsuarioUncheckedCreateWithoutSolicitudesAprobadasInput = {
    id?: number
    nombre: string
    cedula: string
    email: string
    passwordHash: string
    rol: $Enums.Rol
    origen: $Enums.Origen
    activo?: boolean
    createdAt?: Date | string
    preoperacionales?: PreoperacionalUncheckedCreateNestedManyWithoutUsuarioInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUsuarioInput
    solicitudesCreadas?: SolicitudUncheckedCreateNestedManyWithoutUsuarioSolicitanteInput
    viajes?: ViajeUncheckedCreateNestedManyWithoutConductorInput
  }

  export type UsuarioCreateOrConnectWithoutSolicitudesAprobadasInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutSolicitudesAprobadasInput, UsuarioUncheckedCreateWithoutSolicitudesAprobadasInput>
  }

  export type PreoperacionalCreateWithoutSolicitudInput = {
    consecutivo?: number
    fecha?: Date | string
    respuestas: JsonNullValueInput | InputJsonValue
    firmaUrl?: string | null
    observaciones?: string | null
    createdAt?: Date | string
    usuario: UsuarioCreateNestedOneWithoutPreoperacionalesInput
    vehiculo: VehiculoCreateNestedOneWithoutPreoperacionalesInput
    viajes?: ViajeCreateNestedManyWithoutPreoperacionalInput
  }

  export type PreoperacionalUncheckedCreateWithoutSolicitudInput = {
    id?: number
    consecutivo?: number
    fecha?: Date | string
    respuestas: JsonNullValueInput | InputJsonValue
    firmaUrl?: string | null
    observaciones?: string | null
    usuarioId: number
    vehiculoId: number
    createdAt?: Date | string
    viajes?: ViajeUncheckedCreateNestedManyWithoutPreoperacionalInput
  }

  export type PreoperacionalCreateOrConnectWithoutSolicitudInput = {
    where: PreoperacionalWhereUniqueInput
    create: XOR<PreoperacionalCreateWithoutSolicitudInput, PreoperacionalUncheckedCreateWithoutSolicitudInput>
  }

  export type PreoperacionalCreateManySolicitudInputEnvelope = {
    data: PreoperacionalCreateManySolicitudInput | PreoperacionalCreateManySolicitudInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioUpsertWithoutSolicitudesCreadasInput = {
    update: XOR<UsuarioUpdateWithoutSolicitudesCreadasInput, UsuarioUncheckedUpdateWithoutSolicitudesCreadasInput>
    create: XOR<UsuarioCreateWithoutSolicitudesCreadasInput, UsuarioUncheckedCreateWithoutSolicitudesCreadasInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutSolicitudesCreadasInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutSolicitudesCreadasInput, UsuarioUncheckedUpdateWithoutSolicitudesCreadasInput>
  }

  export type UsuarioUpdateWithoutSolicitudesCreadasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    cedula?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    origen?: EnumOrigenFieldUpdateOperationsInput | $Enums.Origen
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    preoperacionales?: PreoperacionalUpdateManyWithoutUsuarioNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUsuarioNestedInput
    solicitudesAprobadas?: SolicitudUpdateManyWithoutAprobadoPorNestedInput
    viajes?: ViajeUpdateManyWithoutConductorNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutSolicitudesCreadasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    cedula?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    origen?: EnumOrigenFieldUpdateOperationsInput | $Enums.Origen
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    preoperacionales?: PreoperacionalUncheckedUpdateManyWithoutUsuarioNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUsuarioNestedInput
    solicitudesAprobadas?: SolicitudUncheckedUpdateManyWithoutAprobadoPorNestedInput
    viajes?: ViajeUncheckedUpdateManyWithoutConductorNestedInput
  }

  export type VehiculoUpsertWithoutSolicitudesInput = {
    update: XOR<VehiculoUpdateWithoutSolicitudesInput, VehiculoUncheckedUpdateWithoutSolicitudesInput>
    create: XOR<VehiculoCreateWithoutSolicitudesInput, VehiculoUncheckedCreateWithoutSolicitudesInput>
    where?: VehiculoWhereInput
  }

  export type VehiculoUpdateToOneWithWhereWithoutSolicitudesInput = {
    where?: VehiculoWhereInput
    data: XOR<VehiculoUpdateWithoutSolicitudesInput, VehiculoUncheckedUpdateWithoutSolicitudesInput>
  }

  export type VehiculoUpdateWithoutSolicitudesInput = {
    placa?: StringFieldUpdateOperationsInput | string
    marca?: NullableStringFieldUpdateOperationsInput | string | null
    modelo?: NullableStringFieldUpdateOperationsInput | string | null
    tieneGpsFisico?: BoolFieldUpdateOperationsInput | boolean
    polizaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    soatUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tecnomecanicaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    preoperacionales?: PreoperacionalUpdateManyWithoutVehiculoNestedInput
    viajes?: ViajeUpdateManyWithoutVehiculoNestedInput
  }

  export type VehiculoUncheckedUpdateWithoutSolicitudesInput = {
    id?: IntFieldUpdateOperationsInput | number
    placa?: StringFieldUpdateOperationsInput | string
    marca?: NullableStringFieldUpdateOperationsInput | string | null
    modelo?: NullableStringFieldUpdateOperationsInput | string | null
    tieneGpsFisico?: BoolFieldUpdateOperationsInput | boolean
    polizaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    soatUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tecnomecanicaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    preoperacionales?: PreoperacionalUncheckedUpdateManyWithoutVehiculoNestedInput
    viajes?: ViajeUncheckedUpdateManyWithoutVehiculoNestedInput
  }

  export type UsuarioUpsertWithoutSolicitudesAprobadasInput = {
    update: XOR<UsuarioUpdateWithoutSolicitudesAprobadasInput, UsuarioUncheckedUpdateWithoutSolicitudesAprobadasInput>
    create: XOR<UsuarioCreateWithoutSolicitudesAprobadasInput, UsuarioUncheckedCreateWithoutSolicitudesAprobadasInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutSolicitudesAprobadasInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutSolicitudesAprobadasInput, UsuarioUncheckedUpdateWithoutSolicitudesAprobadasInput>
  }

  export type UsuarioUpdateWithoutSolicitudesAprobadasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    cedula?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    origen?: EnumOrigenFieldUpdateOperationsInput | $Enums.Origen
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    preoperacionales?: PreoperacionalUpdateManyWithoutUsuarioNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUsuarioNestedInput
    solicitudesCreadas?: SolicitudUpdateManyWithoutUsuarioSolicitanteNestedInput
    viajes?: ViajeUpdateManyWithoutConductorNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutSolicitudesAprobadasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    cedula?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    origen?: EnumOrigenFieldUpdateOperationsInput | $Enums.Origen
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    preoperacionales?: PreoperacionalUncheckedUpdateManyWithoutUsuarioNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUsuarioNestedInput
    solicitudesCreadas?: SolicitudUncheckedUpdateManyWithoutUsuarioSolicitanteNestedInput
    viajes?: ViajeUncheckedUpdateManyWithoutConductorNestedInput
  }

  export type PreoperacionalUpsertWithWhereUniqueWithoutSolicitudInput = {
    where: PreoperacionalWhereUniqueInput
    update: XOR<PreoperacionalUpdateWithoutSolicitudInput, PreoperacionalUncheckedUpdateWithoutSolicitudInput>
    create: XOR<PreoperacionalCreateWithoutSolicitudInput, PreoperacionalUncheckedCreateWithoutSolicitudInput>
  }

  export type PreoperacionalUpdateWithWhereUniqueWithoutSolicitudInput = {
    where: PreoperacionalWhereUniqueInput
    data: XOR<PreoperacionalUpdateWithoutSolicitudInput, PreoperacionalUncheckedUpdateWithoutSolicitudInput>
  }

  export type PreoperacionalUpdateManyWithWhereWithoutSolicitudInput = {
    where: PreoperacionalScalarWhereInput
    data: XOR<PreoperacionalUpdateManyMutationInput, PreoperacionalUncheckedUpdateManyWithoutSolicitudInput>
  }

  export type VehiculoCreateWithoutViajesInput = {
    placa: string
    marca?: string | null
    modelo?: string | null
    tieneGpsFisico?: boolean
    polizaUrl?: string | null
    soatUrl?: string | null
    tecnomecanicaUrl?: string | null
    activo?: boolean
    createdAt?: Date | string
    preoperacionales?: PreoperacionalCreateNestedManyWithoutVehiculoInput
    solicitudes?: SolicitudCreateNestedManyWithoutVehiculoAsignadoInput
  }

  export type VehiculoUncheckedCreateWithoutViajesInput = {
    id?: number
    placa: string
    marca?: string | null
    modelo?: string | null
    tieneGpsFisico?: boolean
    polizaUrl?: string | null
    soatUrl?: string | null
    tecnomecanicaUrl?: string | null
    activo?: boolean
    createdAt?: Date | string
    preoperacionales?: PreoperacionalUncheckedCreateNestedManyWithoutVehiculoInput
    solicitudes?: SolicitudUncheckedCreateNestedManyWithoutVehiculoAsignadoInput
  }

  export type VehiculoCreateOrConnectWithoutViajesInput = {
    where: VehiculoWhereUniqueInput
    create: XOR<VehiculoCreateWithoutViajesInput, VehiculoUncheckedCreateWithoutViajesInput>
  }

  export type UsuarioCreateWithoutViajesInput = {
    nombre: string
    cedula: string
    email: string
    passwordHash: string
    rol: $Enums.Rol
    origen: $Enums.Origen
    activo?: boolean
    createdAt?: Date | string
    preoperacionales?: PreoperacionalCreateNestedManyWithoutUsuarioInput
    refreshTokens?: RefreshTokenCreateNestedManyWithoutUsuarioInput
    solicitudesCreadas?: SolicitudCreateNestedManyWithoutUsuarioSolicitanteInput
    solicitudesAprobadas?: SolicitudCreateNestedManyWithoutAprobadoPorInput
  }

  export type UsuarioUncheckedCreateWithoutViajesInput = {
    id?: number
    nombre: string
    cedula: string
    email: string
    passwordHash: string
    rol: $Enums.Rol
    origen: $Enums.Origen
    activo?: boolean
    createdAt?: Date | string
    preoperacionales?: PreoperacionalUncheckedCreateNestedManyWithoutUsuarioInput
    refreshTokens?: RefreshTokenUncheckedCreateNestedManyWithoutUsuarioInput
    solicitudesCreadas?: SolicitudUncheckedCreateNestedManyWithoutUsuarioSolicitanteInput
    solicitudesAprobadas?: SolicitudUncheckedCreateNestedManyWithoutAprobadoPorInput
  }

  export type UsuarioCreateOrConnectWithoutViajesInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutViajesInput, UsuarioUncheckedCreateWithoutViajesInput>
  }

  export type PreoperacionalCreateWithoutViajesInput = {
    consecutivo?: number
    fecha?: Date | string
    respuestas: JsonNullValueInput | InputJsonValue
    firmaUrl?: string | null
    observaciones?: string | null
    createdAt?: Date | string
    usuario: UsuarioCreateNestedOneWithoutPreoperacionalesInput
    vehiculo: VehiculoCreateNestedOneWithoutPreoperacionalesInput
    solicitud?: SolicitudCreateNestedOneWithoutPreoperacionalesInput
  }

  export type PreoperacionalUncheckedCreateWithoutViajesInput = {
    id?: number
    consecutivo?: number
    fecha?: Date | string
    respuestas: JsonNullValueInput | InputJsonValue
    firmaUrl?: string | null
    observaciones?: string | null
    usuarioId: number
    vehiculoId: number
    createdAt?: Date | string
    solicitudId?: number | null
  }

  export type PreoperacionalCreateOrConnectWithoutViajesInput = {
    where: PreoperacionalWhereUniqueInput
    create: XOR<PreoperacionalCreateWithoutViajesInput, PreoperacionalUncheckedCreateWithoutViajesInput>
  }

  export type VehiculoUpsertWithoutViajesInput = {
    update: XOR<VehiculoUpdateWithoutViajesInput, VehiculoUncheckedUpdateWithoutViajesInput>
    create: XOR<VehiculoCreateWithoutViajesInput, VehiculoUncheckedCreateWithoutViajesInput>
    where?: VehiculoWhereInput
  }

  export type VehiculoUpdateToOneWithWhereWithoutViajesInput = {
    where?: VehiculoWhereInput
    data: XOR<VehiculoUpdateWithoutViajesInput, VehiculoUncheckedUpdateWithoutViajesInput>
  }

  export type VehiculoUpdateWithoutViajesInput = {
    placa?: StringFieldUpdateOperationsInput | string
    marca?: NullableStringFieldUpdateOperationsInput | string | null
    modelo?: NullableStringFieldUpdateOperationsInput | string | null
    tieneGpsFisico?: BoolFieldUpdateOperationsInput | boolean
    polizaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    soatUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tecnomecanicaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    preoperacionales?: PreoperacionalUpdateManyWithoutVehiculoNestedInput
    solicitudes?: SolicitudUpdateManyWithoutVehiculoAsignadoNestedInput
  }

  export type VehiculoUncheckedUpdateWithoutViajesInput = {
    id?: IntFieldUpdateOperationsInput | number
    placa?: StringFieldUpdateOperationsInput | string
    marca?: NullableStringFieldUpdateOperationsInput | string | null
    modelo?: NullableStringFieldUpdateOperationsInput | string | null
    tieneGpsFisico?: BoolFieldUpdateOperationsInput | boolean
    polizaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    soatUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tecnomecanicaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    preoperacionales?: PreoperacionalUncheckedUpdateManyWithoutVehiculoNestedInput
    solicitudes?: SolicitudUncheckedUpdateManyWithoutVehiculoAsignadoNestedInput
  }

  export type UsuarioUpsertWithoutViajesInput = {
    update: XOR<UsuarioUpdateWithoutViajesInput, UsuarioUncheckedUpdateWithoutViajesInput>
    create: XOR<UsuarioCreateWithoutViajesInput, UsuarioUncheckedCreateWithoutViajesInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutViajesInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutViajesInput, UsuarioUncheckedUpdateWithoutViajesInput>
  }

  export type UsuarioUpdateWithoutViajesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    cedula?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    origen?: EnumOrigenFieldUpdateOperationsInput | $Enums.Origen
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    preoperacionales?: PreoperacionalUpdateManyWithoutUsuarioNestedInput
    refreshTokens?: RefreshTokenUpdateManyWithoutUsuarioNestedInput
    solicitudesCreadas?: SolicitudUpdateManyWithoutUsuarioSolicitanteNestedInput
    solicitudesAprobadas?: SolicitudUpdateManyWithoutAprobadoPorNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutViajesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    cedula?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolFieldUpdateOperationsInput | $Enums.Rol
    origen?: EnumOrigenFieldUpdateOperationsInput | $Enums.Origen
    activo?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    preoperacionales?: PreoperacionalUncheckedUpdateManyWithoutUsuarioNestedInput
    refreshTokens?: RefreshTokenUncheckedUpdateManyWithoutUsuarioNestedInput
    solicitudesCreadas?: SolicitudUncheckedUpdateManyWithoutUsuarioSolicitanteNestedInput
    solicitudesAprobadas?: SolicitudUncheckedUpdateManyWithoutAprobadoPorNestedInput
  }

  export type PreoperacionalUpsertWithoutViajesInput = {
    update: XOR<PreoperacionalUpdateWithoutViajesInput, PreoperacionalUncheckedUpdateWithoutViajesInput>
    create: XOR<PreoperacionalCreateWithoutViajesInput, PreoperacionalUncheckedCreateWithoutViajesInput>
    where?: PreoperacionalWhereInput
  }

  export type PreoperacionalUpdateToOneWithWhereWithoutViajesInput = {
    where?: PreoperacionalWhereInput
    data: XOR<PreoperacionalUpdateWithoutViajesInput, PreoperacionalUncheckedUpdateWithoutViajesInput>
  }

  export type PreoperacionalUpdateWithoutViajesInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    respuestas?: JsonNullValueInput | InputJsonValue
    firmaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutPreoperacionalesNestedInput
    vehiculo?: VehiculoUpdateOneRequiredWithoutPreoperacionalesNestedInput
    solicitud?: SolicitudUpdateOneWithoutPreoperacionalesNestedInput
  }

  export type PreoperacionalUncheckedUpdateWithoutViajesInput = {
    id?: IntFieldUpdateOperationsInput | number
    consecutivo?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    respuestas?: JsonNullValueInput | InputJsonValue
    firmaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    usuarioId?: IntFieldUpdateOperationsInput | number
    vehiculoId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    solicitudId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PuntoGpsUpdateWithWhereUniqueWithoutViajeInput = {
    where: PuntoGpsWhereUniqueInput
    data: XOR<PuntoGpsUpdateWithoutViajeInput, PuntoGpsUncheckedUpdateWithoutViajeInput>
  }

  export type PuntoGpsUpdateManyWithWhereWithoutViajeInput = {
    where: PuntoGpsScalarWhereInput
    data: XOR<PuntoGpsUpdateManyMutationInput, PuntoGpsUncheckedUpdateManyWithoutViajeInput>
  }

  export type PuntoGpsScalarWhereInput = {
    AND?: PuntoGpsScalarWhereInput | PuntoGpsScalarWhereInput[]
    OR?: PuntoGpsScalarWhereInput[]
    NOT?: PuntoGpsScalarWhereInput | PuntoGpsScalarWhereInput[]
    id?: IntFilter<"PuntoGps"> | number
    viajeId?: StringFilter<"PuntoGps"> | string
    velocidad?: FloatNullableFilter<"PuntoGps"> | number | null
    precision?: FloatNullableFilter<"PuntoGps"> | number | null
    timestamp?: DateTimeFilter<"PuntoGps"> | Date | string
  }

  export type ViajeCreateWithoutPuntosGpsInput = {
    id: string
    horaInicio: Date | string
    horaFin?: Date | string | null
    distanciaTotalKm?: number | null
    velocidadPromedio?: number | null
    velocidadMaxima?: number | null
    estado?: $Enums.EstadoViaje
    archivoRutaUrl?: string | null
    createdAt?: Date | string
    vehiculo: VehiculoCreateNestedOneWithoutViajesInput
    conductor: UsuarioCreateNestedOneWithoutViajesInput
    preoperacional?: PreoperacionalCreateNestedOneWithoutViajesInput
  }

  export type ViajeUncheckedCreateWithoutPuntosGpsInput = {
    id: string
    vehiculoId: number
    conductorId: number
    preoperacionalId?: number | null
    horaInicio: Date | string
    horaFin?: Date | string | null
    distanciaTotalKm?: number | null
    velocidadPromedio?: number | null
    velocidadMaxima?: number | null
    estado?: $Enums.EstadoViaje
    archivoRutaUrl?: string | null
    createdAt?: Date | string
  }

  export type ViajeCreateOrConnectWithoutPuntosGpsInput = {
    where: ViajeWhereUniqueInput
    create: XOR<ViajeCreateWithoutPuntosGpsInput, ViajeUncheckedCreateWithoutPuntosGpsInput>
  }

  export type ViajeUpsertWithoutPuntosGpsInput = {
    update: XOR<ViajeUpdateWithoutPuntosGpsInput, ViajeUncheckedUpdateWithoutPuntosGpsInput>
    create: XOR<ViajeCreateWithoutPuntosGpsInput, ViajeUncheckedCreateWithoutPuntosGpsInput>
    where?: ViajeWhereInput
  }

  export type ViajeUpdateToOneWithWhereWithoutPuntosGpsInput = {
    where?: ViajeWhereInput
    data: XOR<ViajeUpdateWithoutPuntosGpsInput, ViajeUncheckedUpdateWithoutPuntosGpsInput>
  }

  export type ViajeUpdateWithoutPuntosGpsInput = {
    id?: StringFieldUpdateOperationsInput | string
    horaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horaFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    distanciaTotalKm?: NullableFloatFieldUpdateOperationsInput | number | null
    velocidadPromedio?: NullableFloatFieldUpdateOperationsInput | number | null
    velocidadMaxima?: NullableFloatFieldUpdateOperationsInput | number | null
    estado?: EnumEstadoViajeFieldUpdateOperationsInput | $Enums.EstadoViaje
    archivoRutaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehiculo?: VehiculoUpdateOneRequiredWithoutViajesNestedInput
    conductor?: UsuarioUpdateOneRequiredWithoutViajesNestedInput
    preoperacional?: PreoperacionalUpdateOneWithoutViajesNestedInput
  }

  export type ViajeUncheckedUpdateWithoutPuntosGpsInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehiculoId?: IntFieldUpdateOperationsInput | number
    conductorId?: IntFieldUpdateOperationsInput | number
    preoperacionalId?: NullableIntFieldUpdateOperationsInput | number | null
    horaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horaFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    distanciaTotalKm?: NullableFloatFieldUpdateOperationsInput | number | null
    velocidadPromedio?: NullableFloatFieldUpdateOperationsInput | number | null
    velocidadMaxima?: NullableFloatFieldUpdateOperationsInput | number | null
    estado?: EnumEstadoViajeFieldUpdateOperationsInput | $Enums.EstadoViaje
    archivoRutaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PreoperacionalCreateManyUsuarioInput = {
    id?: number
    consecutivo?: number
    fecha?: Date | string
    respuestas: JsonNullValueInput | InputJsonValue
    firmaUrl?: string | null
    observaciones?: string | null
    vehiculoId: number
    createdAt?: Date | string
    solicitudId?: number | null
  }

  export type RefreshTokenCreateManyUsuarioInput = {
    id?: number
    token: string
    expiresAt: Date | string
    revocado?: boolean
    createdAt?: Date | string
  }

  export type SolicitudCreateManyUsuarioSolicitanteInput = {
    id?: number
    motivo: string
    destino: string
    fechaRequerida: Date | string
    estado?: $Enums.EstadoSolicitud
    vehiculoAsignadoId?: number | null
    aprobadoPorId?: number | null
    createdAt?: Date | string
  }

  export type SolicitudCreateManyAprobadoPorInput = {
    id?: number
    usuarioSolicitanteId: number
    motivo: string
    destino: string
    fechaRequerida: Date | string
    estado?: $Enums.EstadoSolicitud
    vehiculoAsignadoId?: number | null
    createdAt?: Date | string
  }

  export type ViajeCreateManyConductorInput = {
    id: string
    vehiculoId: number
    preoperacionalId?: number | null
    horaInicio: Date | string
    horaFin?: Date | string | null
    distanciaTotalKm?: number | null
    velocidadPromedio?: number | null
    velocidadMaxima?: number | null
    estado?: $Enums.EstadoViaje
    archivoRutaUrl?: string | null
    createdAt?: Date | string
  }

  export type PreoperacionalUpdateWithoutUsuarioInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    respuestas?: JsonNullValueInput | InputJsonValue
    firmaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehiculo?: VehiculoUpdateOneRequiredWithoutPreoperacionalesNestedInput
    solicitud?: SolicitudUpdateOneWithoutPreoperacionalesNestedInput
    viajes?: ViajeUpdateManyWithoutPreoperacionalNestedInput
  }

  export type PreoperacionalUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    consecutivo?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    respuestas?: JsonNullValueInput | InputJsonValue
    firmaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    vehiculoId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    solicitudId?: NullableIntFieldUpdateOperationsInput | number | null
    viajes?: ViajeUncheckedUpdateManyWithoutPreoperacionalNestedInput
  }

  export type PreoperacionalUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    consecutivo?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    respuestas?: JsonNullValueInput | InputJsonValue
    firmaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    vehiculoId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    solicitudId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type RefreshTokenUpdateWithoutUsuarioInput = {
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revocado?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revocado?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revocado?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SolicitudUpdateWithoutUsuarioSolicitanteInput = {
    motivo?: StringFieldUpdateOperationsInput | string
    destino?: StringFieldUpdateOperationsInput | string
    fechaRequerida?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: EnumEstadoSolicitudFieldUpdateOperationsInput | $Enums.EstadoSolicitud
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehiculoAsignado?: VehiculoUpdateOneWithoutSolicitudesNestedInput
    aprobadoPor?: UsuarioUpdateOneWithoutSolicitudesAprobadasNestedInput
    preoperacionales?: PreoperacionalUpdateManyWithoutSolicitudNestedInput
  }

  export type SolicitudUncheckedUpdateWithoutUsuarioSolicitanteInput = {
    id?: IntFieldUpdateOperationsInput | number
    motivo?: StringFieldUpdateOperationsInput | string
    destino?: StringFieldUpdateOperationsInput | string
    fechaRequerida?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: EnumEstadoSolicitudFieldUpdateOperationsInput | $Enums.EstadoSolicitud
    vehiculoAsignadoId?: NullableIntFieldUpdateOperationsInput | number | null
    aprobadoPorId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    preoperacionales?: PreoperacionalUncheckedUpdateManyWithoutSolicitudNestedInput
  }

  export type SolicitudUncheckedUpdateManyWithoutUsuarioSolicitanteInput = {
    id?: IntFieldUpdateOperationsInput | number
    motivo?: StringFieldUpdateOperationsInput | string
    destino?: StringFieldUpdateOperationsInput | string
    fechaRequerida?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: EnumEstadoSolicitudFieldUpdateOperationsInput | $Enums.EstadoSolicitud
    vehiculoAsignadoId?: NullableIntFieldUpdateOperationsInput | number | null
    aprobadoPorId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SolicitudUpdateWithoutAprobadoPorInput = {
    motivo?: StringFieldUpdateOperationsInput | string
    destino?: StringFieldUpdateOperationsInput | string
    fechaRequerida?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: EnumEstadoSolicitudFieldUpdateOperationsInput | $Enums.EstadoSolicitud
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioSolicitante?: UsuarioUpdateOneRequiredWithoutSolicitudesCreadasNestedInput
    vehiculoAsignado?: VehiculoUpdateOneWithoutSolicitudesNestedInput
    preoperacionales?: PreoperacionalUpdateManyWithoutSolicitudNestedInput
  }

  export type SolicitudUncheckedUpdateWithoutAprobadoPorInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioSolicitanteId?: IntFieldUpdateOperationsInput | number
    motivo?: StringFieldUpdateOperationsInput | string
    destino?: StringFieldUpdateOperationsInput | string
    fechaRequerida?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: EnumEstadoSolicitudFieldUpdateOperationsInput | $Enums.EstadoSolicitud
    vehiculoAsignadoId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    preoperacionales?: PreoperacionalUncheckedUpdateManyWithoutSolicitudNestedInput
  }

  export type SolicitudUncheckedUpdateManyWithoutAprobadoPorInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioSolicitanteId?: IntFieldUpdateOperationsInput | number
    motivo?: StringFieldUpdateOperationsInput | string
    destino?: StringFieldUpdateOperationsInput | string
    fechaRequerida?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: EnumEstadoSolicitudFieldUpdateOperationsInput | $Enums.EstadoSolicitud
    vehiculoAsignadoId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ViajeUpdateWithoutConductorInput = {
    id?: StringFieldUpdateOperationsInput | string
    horaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horaFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    distanciaTotalKm?: NullableFloatFieldUpdateOperationsInput | number | null
    velocidadPromedio?: NullableFloatFieldUpdateOperationsInput | number | null
    velocidadMaxima?: NullableFloatFieldUpdateOperationsInput | number | null
    estado?: EnumEstadoViajeFieldUpdateOperationsInput | $Enums.EstadoViaje
    archivoRutaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehiculo?: VehiculoUpdateOneRequiredWithoutViajesNestedInput
    preoperacional?: PreoperacionalUpdateOneWithoutViajesNestedInput
    puntosGps?: PuntoGpsUpdateManyWithoutViajeNestedInput
  }

  export type ViajeUncheckedUpdateWithoutConductorInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehiculoId?: IntFieldUpdateOperationsInput | number
    preoperacionalId?: NullableIntFieldUpdateOperationsInput | number | null
    horaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horaFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    distanciaTotalKm?: NullableFloatFieldUpdateOperationsInput | number | null
    velocidadPromedio?: NullableFloatFieldUpdateOperationsInput | number | null
    velocidadMaxima?: NullableFloatFieldUpdateOperationsInput | number | null
    estado?: EnumEstadoViajeFieldUpdateOperationsInput | $Enums.EstadoViaje
    archivoRutaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    puntosGps?: PuntoGpsUncheckedUpdateManyWithoutViajeNestedInput
  }

  export type ViajeUncheckedUpdateManyWithoutConductorInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehiculoId?: IntFieldUpdateOperationsInput | number
    preoperacionalId?: NullableIntFieldUpdateOperationsInput | number | null
    horaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horaFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    distanciaTotalKm?: NullableFloatFieldUpdateOperationsInput | number | null
    velocidadPromedio?: NullableFloatFieldUpdateOperationsInput | number | null
    velocidadMaxima?: NullableFloatFieldUpdateOperationsInput | number | null
    estado?: EnumEstadoViajeFieldUpdateOperationsInput | $Enums.EstadoViaje
    archivoRutaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PreoperacionalCreateManyVehiculoInput = {
    id?: number
    consecutivo?: number
    fecha?: Date | string
    respuestas: JsonNullValueInput | InputJsonValue
    firmaUrl?: string | null
    observaciones?: string | null
    usuarioId: number
    createdAt?: Date | string
    solicitudId?: number | null
  }

  export type SolicitudCreateManyVehiculoAsignadoInput = {
    id?: number
    usuarioSolicitanteId: number
    motivo: string
    destino: string
    fechaRequerida: Date | string
    estado?: $Enums.EstadoSolicitud
    aprobadoPorId?: number | null
    createdAt?: Date | string
  }

  export type ViajeCreateManyVehiculoInput = {
    id: string
    conductorId: number
    preoperacionalId?: number | null
    horaInicio: Date | string
    horaFin?: Date | string | null
    distanciaTotalKm?: number | null
    velocidadPromedio?: number | null
    velocidadMaxima?: number | null
    estado?: $Enums.EstadoViaje
    archivoRutaUrl?: string | null
    createdAt?: Date | string
  }

  export type PreoperacionalUpdateWithoutVehiculoInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    respuestas?: JsonNullValueInput | InputJsonValue
    firmaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutPreoperacionalesNestedInput
    solicitud?: SolicitudUpdateOneWithoutPreoperacionalesNestedInput
    viajes?: ViajeUpdateManyWithoutPreoperacionalNestedInput
  }

  export type PreoperacionalUncheckedUpdateWithoutVehiculoInput = {
    id?: IntFieldUpdateOperationsInput | number
    consecutivo?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    respuestas?: JsonNullValueInput | InputJsonValue
    firmaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    usuarioId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    solicitudId?: NullableIntFieldUpdateOperationsInput | number | null
    viajes?: ViajeUncheckedUpdateManyWithoutPreoperacionalNestedInput
  }

  export type PreoperacionalUncheckedUpdateManyWithoutVehiculoInput = {
    id?: IntFieldUpdateOperationsInput | number
    consecutivo?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    respuestas?: JsonNullValueInput | InputJsonValue
    firmaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    usuarioId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    solicitudId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SolicitudUpdateWithoutVehiculoAsignadoInput = {
    motivo?: StringFieldUpdateOperationsInput | string
    destino?: StringFieldUpdateOperationsInput | string
    fechaRequerida?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: EnumEstadoSolicitudFieldUpdateOperationsInput | $Enums.EstadoSolicitud
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioSolicitante?: UsuarioUpdateOneRequiredWithoutSolicitudesCreadasNestedInput
    aprobadoPor?: UsuarioUpdateOneWithoutSolicitudesAprobadasNestedInput
    preoperacionales?: PreoperacionalUpdateManyWithoutSolicitudNestedInput
  }

  export type SolicitudUncheckedUpdateWithoutVehiculoAsignadoInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioSolicitanteId?: IntFieldUpdateOperationsInput | number
    motivo?: StringFieldUpdateOperationsInput | string
    destino?: StringFieldUpdateOperationsInput | string
    fechaRequerida?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: EnumEstadoSolicitudFieldUpdateOperationsInput | $Enums.EstadoSolicitud
    aprobadoPorId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    preoperacionales?: PreoperacionalUncheckedUpdateManyWithoutSolicitudNestedInput
  }

  export type SolicitudUncheckedUpdateManyWithoutVehiculoAsignadoInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioSolicitanteId?: IntFieldUpdateOperationsInput | number
    motivo?: StringFieldUpdateOperationsInput | string
    destino?: StringFieldUpdateOperationsInput | string
    fechaRequerida?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: EnumEstadoSolicitudFieldUpdateOperationsInput | $Enums.EstadoSolicitud
    aprobadoPorId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ViajeUpdateWithoutVehiculoInput = {
    id?: StringFieldUpdateOperationsInput | string
    horaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horaFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    distanciaTotalKm?: NullableFloatFieldUpdateOperationsInput | number | null
    velocidadPromedio?: NullableFloatFieldUpdateOperationsInput | number | null
    velocidadMaxima?: NullableFloatFieldUpdateOperationsInput | number | null
    estado?: EnumEstadoViajeFieldUpdateOperationsInput | $Enums.EstadoViaje
    archivoRutaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    conductor?: UsuarioUpdateOneRequiredWithoutViajesNestedInput
    preoperacional?: PreoperacionalUpdateOneWithoutViajesNestedInput
    puntosGps?: PuntoGpsUpdateManyWithoutViajeNestedInput
  }

  export type ViajeUncheckedUpdateWithoutVehiculoInput = {
    id?: StringFieldUpdateOperationsInput | string
    conductorId?: IntFieldUpdateOperationsInput | number
    preoperacionalId?: NullableIntFieldUpdateOperationsInput | number | null
    horaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horaFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    distanciaTotalKm?: NullableFloatFieldUpdateOperationsInput | number | null
    velocidadPromedio?: NullableFloatFieldUpdateOperationsInput | number | null
    velocidadMaxima?: NullableFloatFieldUpdateOperationsInput | number | null
    estado?: EnumEstadoViajeFieldUpdateOperationsInput | $Enums.EstadoViaje
    archivoRutaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    puntosGps?: PuntoGpsUncheckedUpdateManyWithoutViajeNestedInput
  }

  export type ViajeUncheckedUpdateManyWithoutVehiculoInput = {
    id?: StringFieldUpdateOperationsInput | string
    conductorId?: IntFieldUpdateOperationsInput | number
    preoperacionalId?: NullableIntFieldUpdateOperationsInput | number | null
    horaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horaFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    distanciaTotalKm?: NullableFloatFieldUpdateOperationsInput | number | null
    velocidadPromedio?: NullableFloatFieldUpdateOperationsInput | number | null
    velocidadMaxima?: NullableFloatFieldUpdateOperationsInput | number | null
    estado?: EnumEstadoViajeFieldUpdateOperationsInput | $Enums.EstadoViaje
    archivoRutaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ViajeCreateManyPreoperacionalInput = {
    id: string
    vehiculoId: number
    conductorId: number
    horaInicio: Date | string
    horaFin?: Date | string | null
    distanciaTotalKm?: number | null
    velocidadPromedio?: number | null
    velocidadMaxima?: number | null
    estado?: $Enums.EstadoViaje
    archivoRutaUrl?: string | null
    createdAt?: Date | string
  }

  export type ViajeUpdateWithoutPreoperacionalInput = {
    id?: StringFieldUpdateOperationsInput | string
    horaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horaFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    distanciaTotalKm?: NullableFloatFieldUpdateOperationsInput | number | null
    velocidadPromedio?: NullableFloatFieldUpdateOperationsInput | number | null
    velocidadMaxima?: NullableFloatFieldUpdateOperationsInput | number | null
    estado?: EnumEstadoViajeFieldUpdateOperationsInput | $Enums.EstadoViaje
    archivoRutaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehiculo?: VehiculoUpdateOneRequiredWithoutViajesNestedInput
    conductor?: UsuarioUpdateOneRequiredWithoutViajesNestedInput
    puntosGps?: PuntoGpsUpdateManyWithoutViajeNestedInput
  }

  export type ViajeUncheckedUpdateWithoutPreoperacionalInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehiculoId?: IntFieldUpdateOperationsInput | number
    conductorId?: IntFieldUpdateOperationsInput | number
    horaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horaFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    distanciaTotalKm?: NullableFloatFieldUpdateOperationsInput | number | null
    velocidadPromedio?: NullableFloatFieldUpdateOperationsInput | number | null
    velocidadMaxima?: NullableFloatFieldUpdateOperationsInput | number | null
    estado?: EnumEstadoViajeFieldUpdateOperationsInput | $Enums.EstadoViaje
    archivoRutaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    puntosGps?: PuntoGpsUncheckedUpdateManyWithoutViajeNestedInput
  }

  export type ViajeUncheckedUpdateManyWithoutPreoperacionalInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehiculoId?: IntFieldUpdateOperationsInput | number
    conductorId?: IntFieldUpdateOperationsInput | number
    horaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    horaFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    distanciaTotalKm?: NullableFloatFieldUpdateOperationsInput | number | null
    velocidadPromedio?: NullableFloatFieldUpdateOperationsInput | number | null
    velocidadMaxima?: NullableFloatFieldUpdateOperationsInput | number | null
    estado?: EnumEstadoViajeFieldUpdateOperationsInput | $Enums.EstadoViaje
    archivoRutaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PreoperacionalCreateManySolicitudInput = {
    id?: number
    consecutivo?: number
    fecha?: Date | string
    respuestas: JsonNullValueInput | InputJsonValue
    firmaUrl?: string | null
    observaciones?: string | null
    usuarioId: number
    vehiculoId: number
    createdAt?: Date | string
  }

  export type PreoperacionalUpdateWithoutSolicitudInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    respuestas?: JsonNullValueInput | InputJsonValue
    firmaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutPreoperacionalesNestedInput
    vehiculo?: VehiculoUpdateOneRequiredWithoutPreoperacionalesNestedInput
    viajes?: ViajeUpdateManyWithoutPreoperacionalNestedInput
  }

  export type PreoperacionalUncheckedUpdateWithoutSolicitudInput = {
    id?: IntFieldUpdateOperationsInput | number
    consecutivo?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    respuestas?: JsonNullValueInput | InputJsonValue
    firmaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    usuarioId?: IntFieldUpdateOperationsInput | number
    vehiculoId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    viajes?: ViajeUncheckedUpdateManyWithoutPreoperacionalNestedInput
  }

  export type PreoperacionalUncheckedUpdateManyWithoutSolicitudInput = {
    id?: IntFieldUpdateOperationsInput | number
    consecutivo?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    respuestas?: JsonNullValueInput | InputJsonValue
    firmaUrl?: NullableStringFieldUpdateOperationsInput | string | null
    observaciones?: NullableStringFieldUpdateOperationsInput | string | null
    usuarioId?: IntFieldUpdateOperationsInput | number
    vehiculoId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PuntoGpsUpdateWithoutViajeInput = {
    velocidad?: NullableFloatFieldUpdateOperationsInput | number | null
    precision?: NullableFloatFieldUpdateOperationsInput | number | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PuntoGpsUncheckedUpdateWithoutViajeInput = {
    id?: IntFieldUpdateOperationsInput | number
    velocidad?: NullableFloatFieldUpdateOperationsInput | number | null
    precision?: NullableFloatFieldUpdateOperationsInput | number | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PuntoGpsUncheckedUpdateManyWithoutViajeInput = {
    id?: IntFieldUpdateOperationsInput | number
    velocidad?: NullableFloatFieldUpdateOperationsInput | number | null
    precision?: NullableFloatFieldUpdateOperationsInput | number | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
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